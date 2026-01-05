import { type NextRequest, NextResponse } from "next/server";
import { getAuthUser, getUserEnrollments } from "@/lib/auth-helpers";
import {
	FALLBACK_RESPONSES,
	TUTOR_PROMPTS,
} from "@/lib/constants/chatbot-prompts";
import {
	DEFAULT_TUTOR_ID,
	type TutorId,
} from "@/lib/constants/tutor-characters";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import {
	checkContentSafety,
	isOnTopicForTutor,
	isRequestingCompleteSolution,
	logSafetyEvent,
	sanitizeMessage,
	validateConversationLength,
} from "@/lib/utils/content-safety";

// Using Node.js runtime for proper cookie/auth support
// export const runtime = "edge";

interface ChatMessage {
	role: "user" | "assistant" | "system";
	content: string;
}

// Configuration - Daily limit for free service
const DAILY_MESSAGE_LIMIT = 10;
const MINUTE_RATE_LIMIT = 3; // Reduced from 10 to prevent spam

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Helper function to get off-topic response (always BrightByte's response)
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

// Generate contextual follow-up suggestions
const generateFollowUpSuggestions = (
	userMessage: string,
	assistantResponse: string,
): string[] => {
	const combinedText = `${userMessage} ${assistantResponse}`.toLowerCase();

	// Check for topic keywords and return relevant suggestions
	const topics = Object.keys(FOLLOW_UP_SUGGESTIONS).filter(
		(topic) => topic !== "default",
	);

	for (const topic of topics) {
		if (combinedText.includes(topic)) {
			return FOLLOW_UP_SUGGESTIONS[topic];
		}
	}

	// Return default suggestions if no specific topic found
	return FOLLOW_UP_SUGGESTIONS.default;
};

const checkRateLimit = (identifier: string): boolean => {
	const now = Date.now();
	const limit = rateLimitMap.get(identifier);

	if (!limit || now > limit.resetTime) {
		// Reset or create new limit (3 messages per minute)
		rateLimitMap.set(identifier, {
			count: 1,
			resetTime: now + 60000, // 1 minute
		});
		return true;
	}

	if (limit.count >= MINUTE_RATE_LIMIT) {
		return false; // Rate limit exceeded
	}

	limit.count++;
	return true;
};

// Check and increment daily usage for authenticated users
async function checkAndIncrementDailyUsage(
	userId: string,
	timezone?: string,
): Promise<{ allowed: boolean; remaining: number; limit: number }> {
	try {
		const supabase = await getSupabaseServerClient();
		// Use user's timezone if provided, otherwise fall back to UTC
		const today = timezone
			? new Date().toLocaleDateString("en-CA", { timeZone: timezone })
			: new Date().toISOString().split("T")[0];

		// Get today's usage record
		const { data: existing } = await supabase
			.from("chat_usage")
			.select("message_count")
			.eq("user_id", userId)
			.eq("date", today)
			.maybeSingle();

		const currentCount = existing?.message_count || 0;

		if (currentCount >= DAILY_MESSAGE_LIMIT) {
			return {
				allowed: false,
				remaining: 0,
				limit: DAILY_MESSAGE_LIMIT,
			};
		}

		// Increment usage (upsert)
		const { error } = await supabase.from("chat_usage").upsert(
			{
				user_id: userId,
				date: today,
				message_count: currentCount + 1,
			},
			{
				onConflict: "user_id,date",
			},
		);

		if (error) {
			console.error("Error tracking usage:", error);
			// Don't block the request if tracking fails
		}

		return {
			allowed: true,
			remaining: DAILY_MESSAGE_LIMIT - (currentCount + 1),
			limit: DAILY_MESSAGE_LIMIT,
		};
	} catch (error) {
		console.error("Error checking daily usage:", error);
		// On error, allow the request (fail open)
		return {
			allowed: true,
			remaining: DAILY_MESSAGE_LIMIT,
			limit: DAILY_MESSAGE_LIMIT,
		};
	}
}

export const POST = async (req: NextRequest) => {
	try {
		const {
			messages,
			tutorId = DEFAULT_TUTOR_ID,
			context,
			timezone,
		} = await req.json();

		if (!messages || !Array.isArray(messages)) {
			return NextResponse.json(
				{ error: "Invalid request format" },
				{ status: 400 },
			);
		}

		// Get the appropriate system prompt for the tutor
		const systemPrompt =
			TUTOR_PROMPTS[tutorId as TutorId] || TUTOR_PROMPTS[DEFAULT_TUTOR_ID];

		// Check for API key
		const apiKey = process.env.OPENAI_API_KEY;
		if (!apiKey) {
			console.error("OpenAI API key not configured");
			return NextResponse.json(
				{ error: "Chat service is not configured. Please contact support." },
				{ status: 500 },
			);
		}

		// Rate limiting (use IP or session ID)
		const clientId = req.headers.get("x-forwarded-for") || "anonymous";
		if (!checkRateLimit(clientId)) {
			logSafetyEvent("block", "Rate limit exceeded", clientId);
			return NextResponse.json(
				{
					role: "assistant",
					content:
						"Take your time! 😊 You can send up to 3 messages per minute. Think about your question, then try again!",
				},
				{ status: 429 },
			);
		}

		// Check authentication and enrollment
		const user = await getAuthUser();
		if (!user) {
			return NextResponse.json(
				{
					role: "assistant",
					content:
						"Hi there! 🌟 Please log in to chat with me. I can't wait to help you learn!",
					requiresAuth: true,
				},
				{ status: 401 },
			);
		}

		// Check if user is enrolled in at least one course (admins bypass this check)
		const supabase = await getSupabaseServerClient();
		const { data: profile } = await supabase
			.from("profiles")
			.select("role")
			.eq("id", user.id)
			.single();

		const isAdmin = profile?.role === "admin";

		if (!isAdmin) {
			const enrollments = await getUserEnrollments(user.id);
			if (enrollments.length === 0) {
				logSafetyEvent("block", "No enrollment", user.id);
				return NextResponse.json(
					{
						role: "assistant",
						content:
							"Hi there! 🌟 To chat with me, you'll need to enroll in one of our courses first. Ask your parent or guardian to help you get started!",
						requiresEnrollment: true,
					},
					{ status: 403 },
				);
			}
		}

		// Check daily usage limit for authenticated users
		let dailyUsage = null;
		dailyUsage = await checkAndIncrementDailyUsage(user.id, timezone);
		if (!dailyUsage.allowed) {
			logSafetyEvent("block", "Daily limit exceeded", user.id);
			return NextResponse.json(
				{
					role: "assistant",
					content: `You've reached your daily limit of ${dailyUsage.limit} messages with BrightByte! 🌟\n\nCome back tomorrow for more help with your Python questions!`,
					usage: {
						remaining: 0,
						limit: dailyUsage.limit,
					},
				},
				{ status: 429 },
			);
		}

		// Validate conversation length
		const conversationCheck = validateConversationLength(messages.length);
		if (!conversationCheck.isSafe) {
			logSafetyEvent(
				"block",
				conversationCheck.reason || "Conversation too long",
				"",
			);
			return NextResponse.json({
				role: "assistant",
				content:
					"This conversation is getting quite long! Let's start fresh. Click the Clear button to begin a new coding session! 🔄",
			});
		}

		// Get and validate last user message
		const lastMessage = messages.at(-1);
		if (!lastMessage || lastMessage.role !== "user") {
			return NextResponse.json(
				{ error: "Invalid message format" },
				{ status: 400 },
			);
		}

		// Sanitize user input
		const sanitizedContent = sanitizeMessage(lastMessage.content);

		// Comprehensive safety check
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

		// Check if message is on-topic (always Python for BrightByte)
		if (!isOnTopicForTutor(sanitizedContent, tutorId)) {
			logSafetyEvent("warn", "Off-topic question", sanitizedContent);

			// Get off-topic response
			const offTopicResponse = getOffTopicResponse();
			return NextResponse.json({
				role: "assistant",
				content: offTopicResponse,
			});
		}

		// Check if requesting complete solution
		if (isRequestingCompleteSolution(sanitizedContent)) {
			logSafetyEvent("warn", "Requesting complete solution", sanitizedContent);
			return NextResponse.json({
				role: "assistant",
				content: FALLBACK_RESPONSES.completeSolution,
			});
		}

		// Update last message with sanitized content
		const sanitizedMessages = [
			...messages.slice(0, -1),
			{ ...lastMessage, content: sanitizedContent },
		];

		// Prepare messages for OpenAI with safety context
		const contextSection = context
			? `\n\nCURRENT LESSON CONTEXT:\n${context}`
			: "";

		const openAIMessages: ChatMessage[] = [
			{
				role: "system",
				content: `${systemPrompt}${contextSection}

CRITICAL SAFETY REMINDER:
- You are chatting with a child (ages 8-16)
- ONLY discuss topics within your subject area
- NEVER give complete solutions - guide them to learn
- Use age-appropriate language
- Be encouraging and supportive
- If anything seems inappropriate, redirect to appropriate topics`,
			},
			...sanitizedMessages,
		];

		// Log allowed interaction
		logSafetyEvent("allow", `${tutorId} question approved`, sanitizedContent);

		// Call OpenAI API with safety parameters
		const response = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify({
				model: "gpt-4o-mini",
				messages: openAIMessages,
				temperature: 0.6, // Lower for more consistent, safer responses
				max_tokens: 800, // Reasonable response length for kids
				presence_penalty: 0.6,
				frequency_penalty: 0.3,
				top_p: 0.9, // Slightly more focused responses
				// Add content filter for additional safety
				user: clientId.slice(0, 64), // For OpenAI's abuse monitoring
			}),
		});

		if (!response.ok) {
			const error = await response.json();
			console.error("OpenAI API error:", error);
			return NextResponse.json(
				{ error: "Failed to get response from chat service" },
				{ status: response.status },
			);
		}

		const data = await response.json();
		const assistantMessage = data.choices[0]?.message;

		if (!assistantMessage || !assistantMessage.content) {
			return NextResponse.json(
				{ error: "No response generated" },
				{ status: 500 },
			);
		}

		// Validate AI response for safety (output filtering)
		const responseCheck = checkContentSafety(assistantMessage.content);
		if (!responseCheck.isSafe) {
			logSafetyEvent(
				"block",
				"AI response failed safety check",
				assistantMessage.content,
			);
			return NextResponse.json({
				role: "assistant",
				content: FALLBACK_RESPONSES.technicalIssue,
			});
		}

		// Note: We trust the AI to stay on topic since we have a strong system prompt
		// Output filtering was causing false positives for valid educational responses

		// Generate follow-up question suggestions based on the conversation
		const followUpSuggestions = generateFollowUpSuggestions(
			sanitizedContent,
			assistantMessage.content,
		);

		// Return response with usage info in body (headers can be unreliable in some setups)
		return NextResponse.json({
			...assistantMessage,
			suggestions: followUpSuggestions,
			usage: dailyUsage
				? {
						remaining: dailyUsage.remaining,
						limit: dailyUsage.limit,
					}
				: null,
		});
	} catch (error) {
		console.error("Chat API error:", error);
		return NextResponse.json(
			{ error: "An error occurred while processing your request" },
			{ status: 500 },
		);
	}
};
