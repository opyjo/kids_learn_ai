import { type NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth-helpers";
import {
	FALLBACK_RESPONSES,
	TUTOR_PROMPTS,
} from "@/lib/constants/chatbot-prompts";
import {
	DEFAULT_TUTOR_ID,
	type TutorId,
} from "@/lib/constants/tutor-characters";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import {
	type AISafetyResult,
	checkContentSafety,
	isOnTopicForTutor,
	isRequestingCompleteSolution,
	logSafetyEvent,
	SAFETY_CHECK_PROMPT,
	sanitizeMessage,
	validateConversationLength,
} from "@/lib/utils/content-safety";

// Helper to check if user has admin role
const isUserAdmin = async (userId: string): Promise<boolean> => {
	try {
		const supabase = await getSupabaseServerClient();
		const { data: profile } = await supabase
			.from("profiles")
			.select("role")
			.eq("id", userId)
			.single();

		return profile?.role === "admin";
	} catch {
		return false;
	}
};

// Configuration
const DAILY_MESSAGE_LIMIT = 10;
const MINUTE_RATE_LIMIT = 3;

// Helper function to get off-topic response
const getOffTopicResponse = (): string => {
	return "I help with Python programming and AI concepts! What coding or AI question can I help you with?";
};

// Follow-up suggestions based on topic keywords
const FOLLOW_UP_SUGGESTIONS: Record<string, string[]> = {
	variable: [
		"How do I change a variable's value?",
		"What types of data can variables hold?",
		"Can you show me a variable example?",
	],
	loop: [
		"What's the difference between for and while loops?",
		"How do I stop a loop early?",
		"Can you show me a loop example?",
	],
	function: [
		"How do I create my own function?",
		"What are parameters in a function?",
		"When should I use a function?",
	],
	list: [
		"How do I add items to a list?",
		"How do I loop through a list?",
		"What's the difference between a list and tuple?",
	],
	if: [
		"How do I use elif?",
		"Can I have multiple conditions?",
		"What are comparison operators?",
	],
	error: [
		"What does this error mean?",
		"How do I fix syntax errors?",
		"Can you help me debug this?",
	],
	print: [
		"How do I print multiple things?",
		"What are f-strings?",
		"How do I format my output?",
	],
	ai: [
		"How does AI learn from data?",
		"What can AI do?",
		"How is Python used in AI?",
	],
	default: [
		"Can you give me an example?",
		"How does this work step by step?",
		"What should I try next?",
	],
};

const generateFollowUpSuggestions = (
	userMessage: string,
	assistantResponse: string,
): string[] => {
	const combinedText = `${userMessage} ${assistantResponse}`.toLowerCase();
	const topics = Object.keys(FOLLOW_UP_SUGGESTIONS).filter(
		(topic) => topic !== "default",
	);

	for (const topic of topics) {
		if (combinedText.includes(topic)) {
			return FOLLOW_UP_SUGGESTIONS[topic];
		}
	}
	return FOLLOW_UP_SUGGESTIONS.default;
};

// Run AI-powered safety check (Shadow Auditing)
const runAISafetyCheck = async (
	message: string,
	apiKey: string,
): Promise<AISafetyResult> => {
	try {
		const response = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify({
				model: "gpt-4o-mini",
				messages: [
					{
						role: "system",
						content:
							"You are a strict safety auditor for a kids' coding site. Analyze the message for safety, topic relevance (Python/AI), and request type. Respond ONLY in valid JSON.",
					},
					{
						role: "user",
						content: SAFETY_CHECK_PROMPT.replace("{user_message}", message),
					},
				],
				response_format: { type: "json_object" },
				temperature: 0,
			}),
		});

		if (!response.ok) throw new Error("Safety check failed");
		const data = await response.json();
		return JSON.parse(data.choices[0].message.content);
	} catch (error) {
		console.error("AI Safety Check Error:", error);
		return {
			isPythonQuestion: true,
			isSafe: true,
			requestType: "help",
			action: "allow",
		};
	}
};

const checkRateLimit = async (identifier: string): Promise<boolean> => {
	const supabase = getSupabaseAdminClient();
	if (!supabase) return true;

	try {
		const { data, error } = await supabase.rpc("increment_rate_limit", {
			p_identifier: identifier,
			p_limit: MINUTE_RATE_LIMIT,
			p_window_interval: "1 minute",
		});

		if (error) {
			const { data: existing } = await supabase
				.from("rate_limits")
				.select("count, reset_at")
				.eq("identifier", identifier)
				.maybeSingle();

			if (!existing || new Date(existing.reset_at) < new Date()) {
				await supabase.from("rate_limits").upsert({
					identifier,
					count: 1,
					reset_at: new Date(Date.now() + 60000).toISOString(),
				});
				return true;
			}

			if (existing.count >= MINUTE_RATE_LIMIT) return false;

			await supabase
				.from("rate_limits")
				.update({ count: existing.count + 1 })
				.eq("identifier", identifier);

			return true;
		}

		return data as boolean;
	} catch (err) {
		console.error("Rate limit check error:", err);
		return true;
	}
};

async function checkAndIncrementDailyUsage(
	userId: string,
): Promise<{ allowed: boolean; remaining: number; limit: number }> {
	try {
		const supabase = await getSupabaseServerClient();

		const { data, error } = await supabase.rpc("increment_daily_usage", {
			p_user_id: userId,
			p_limit: DAILY_MESSAGE_LIMIT,
		});

		if (error || !data || data.length === 0) {
			console.error("Error tracking daily usage:", error);
			// Fail open
			return {
				allowed: true,
				remaining: DAILY_MESSAGE_LIMIT,
				limit: DAILY_MESSAGE_LIMIT,
			};
		}

		const result = data[0];
		return {
			allowed: result.allowed,
			remaining: Math.max(0, DAILY_MESSAGE_LIMIT - result.new_count),
			limit: DAILY_MESSAGE_LIMIT,
		};
	} catch (error) {
		console.error("Error checking daily usage:", error);
		return {
			allowed: true,
			remaining: DAILY_MESSAGE_LIMIT,
			limit: DAILY_MESSAGE_LIMIT,
		};
	}
}

export const POST = async (req: NextRequest) => {
	try {
		const { messages, tutorId = DEFAULT_TUTOR_ID, context } = await req.json();

		if (!messages || !Array.isArray(messages)) {
			return NextResponse.json(
				{ error: "Invalid request format" },
				{ status: 400 },
			);
		}

		const apiKey = process.env.OPENAI_API_KEY;
		if (!apiKey) {
			return NextResponse.json(
				{ error: "Chat service is not configured." },
				{ status: 500 },
			);
		}

		const user = await getAuthUser();
		const isAdmin = user ? await isUserAdmin(user.id) : false;

		// Skip rate limiting for admin users
		let dailyUsage = null;
		if (!isAdmin) {
			const clientId = req.headers.get("x-forwarded-for") || "anonymous";
			const rateLimitIdentifier = user ? user.id : clientId;

			if (!(await checkRateLimit(rateLimitIdentifier))) {
				logSafetyEvent("block", "Rate limit exceeded", clientId);
				return NextResponse.json(
					{
						role: "assistant",
						content:
							"Take your time! 😊 You can send up to 3 messages per minute.",
					},
					{ status: 429 },
				);
			}

			if (user) {
				dailyUsage = await checkAndIncrementDailyUsage(user.id);
				if (!dailyUsage.allowed) {
					logSafetyEvent("block", "Daily limit exceeded", user.id);
					return NextResponse.json(
						{
							role: "assistant",
							content: `Daily limit reached!`,
							usage: { remaining: 0, limit: dailyUsage.limit },
						},
						{ status: 429 },
					);
				}
			}
		}

		const conversationCheck = validateConversationLength(messages.length);
		if (!conversationCheck.isSafe) {
			return NextResponse.json({
				role: "assistant",
				content: "This conversation is getting quite long! Let's start fresh.",
			});
		}

		const lastMessage = messages.at(-1);
		if (!lastMessage || lastMessage.role !== "user") {
			return NextResponse.json({ error: "Invalid message" }, { status: 400 });
		}

		const sanitizedContent = sanitizeMessage(lastMessage.content);

		const safetyCheck = checkContentSafety(sanitizedContent);
		if (!safetyCheck.isSafe) {
			logSafetyEvent(
				"block",
				safetyCheck.reason || "Safety check failed",
				sanitizedContent,
			);
			return NextResponse.json({
				role: "assistant",
				content: FALLBACK_RESPONSES.offTopic,
			});
		}

		if (!isOnTopicForTutor(sanitizedContent, tutorId)) {
			return NextResponse.json({
				role: "assistant",
				content: getOffTopicResponse(),
			});
		}

		// AI Shadow Audit
		const aiSafety = await runAISafetyCheck(sanitizedContent, apiKey);

		if (!aiSafety.isSafe || aiSafety.action === "block") {
			logSafetyEvent("block", "AI Shadow Audit: Unsafe", sanitizedContent);
			return NextResponse.json({
				role: "assistant",
				content: FALLBACK_RESPONSES.offTopic,
			});
		}

		if (!aiSafety.isPythonQuestion && aiSafety.action === "redirect") {
			return NextResponse.json({
				role: "assistant",
				content: getOffTopicResponse(),
			});
		}

		if (
			isRequestingCompleteSolution(sanitizedContent) ||
			aiSafety.requestType === "solution"
		) {
			return NextResponse.json({
				role: "assistant",
				content: FALLBACK_RESPONSES.completeSolution,
			});
		}

		const systemPrompt =
			TUTOR_PROMPTS[tutorId as TutorId] || TUTOR_PROMPTS[DEFAULT_TUTOR_ID];
		const contextSection = context
			? `\n\nCURRENT LESSON CONTEXT:\n${context}`
			: "";

		const openAIMessages = [
			{
				role: "system",
				content: `${systemPrompt}${contextSection}\n\nCRITICAL SAFETY REMINDER: You are chatting with a child (8-16).`,
			},
			...messages.slice(0, -1),
			{ role: "user", content: sanitizedContent },
		];

		const response = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify({
				model: "gpt-4o-mini",
				messages: openAIMessages,
				temperature: 0.6,
				max_tokens: 800,
			}),
		});

		if (!response.ok)
			return NextResponse.json({ error: "API error" }, { status: 500 });

		const data = await response.json();
		const assistantMessage = data.choices[0]?.message;

		if (!assistantMessage?.content)
			return NextResponse.json({ error: "No response" }, { status: 500 });

		const responseCheck = checkContentSafety(assistantMessage.content);
		if (!responseCheck.isSafe)
			return NextResponse.json({
				role: "assistant",
				content: FALLBACK_RESPONSES.technicalIssue,
			});

		return NextResponse.json({
			...assistantMessage,
			suggestions: generateFollowUpSuggestions(
				sanitizedContent,
				assistantMessage.content,
			),
			usage: dailyUsage
				? { remaining: dailyUsage.remaining, limit: dailyUsage.limit }
				: null,
		});
	} catch (error) {
		console.error("Chat API error:", error);
		return NextResponse.json({ error: "An error occurred" }, { status: 500 });
	}
};
