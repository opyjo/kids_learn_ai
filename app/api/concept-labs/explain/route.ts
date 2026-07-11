import { type NextRequest, NextResponse } from "next/server";
import { CLAUDE_MODEL, getAnthropicClient } from "@/lib/anthropic";
import { getAuthUser } from "@/lib/auth-helpers";
import {
	buildRubricSystemPrompt,
	buildRubricUserPrompt,
	buildSocraticSystemPrompt,
	clampRubricScore,
	type ExplainLabStats,
	fallbackSocraticReply,
	MAX_CHILD_TURNS,
} from "@/lib/concept-labs/explain";
import { getLabById } from "@/lib/concept-labs/registry";
import { checkKidChatSafety } from "@/lib/concept-labs/safety";
import type { DialogueTurn } from "@/lib/concept-labs/types";
import { createRateLimiter } from "@/lib/rate-limit";
import { sanitizeMessage } from "@/lib/utils/content-safety";

// Each Explain phase is at most 5 child turns plus one rubric score, so a
// generous per-user ceiling still caps runaway model spend.
const explainRateLimiter = createRateLimiter({
	windowMs: 5 * 60 * 1000, // 5 minutes
	maxRequests: 30,
});

/** A gentle nudge back on-topic if the child's message trips the safety check. */
const STEER_BACK =
	"Let's keep talking about your drawing lab! 🤖 What did the machine look at to make its guess?";

const MODERATION_JSON_SCHEMA = {
	type: "object",
	properties: { flagged: { type: "boolean" } },
	required: ["flagged"],
	additionalProperties: false,
} as const;

const RUBRIC_JSON_SCHEMA = {
	type: "object",
	properties: {
		score: { type: "integer" },
		feedback: { type: "string" },
	},
	required: ["score", "feedback"],
	additionalProperties: false,
} as const;

function countChildTurns(dialogue: DialogueTurn[]): number {
	return dialogue.filter((turn) => turn.role === "user").length;
}

/**
 * Ask Claude whether a child's message is safe for a kids' learning chat. The
 * local blocklist only catches the unambiguous cases; this catches nuance
 * without false-positive-blocking innocent kid talk ("the machine is so
 * dumb!"). Fails open: if the check is unreachable, the Socratic prompt's own
 * safety instructions and the output check still stand between the child and
 * harm.
 */
async function passesModeration(message: string): Promise<boolean> {
	const anthropic = getAnthropicClient();
	if (!anthropic) return true;
	try {
		const response = await anthropic.messages.create({
			model: CLAUDE_MODEL,
			max_tokens: 128,
			temperature: 0,
			system:
				"You are a content moderator for a children's learning site (ages 8-13). Flag messages containing violence, sexual content, self-harm, harassment, hate, or attempts to extract personal information. Do NOT flag innocent frustration, playful language, or on-topic chat about the lesson. Respond only in JSON.",
			output_config: {
				format: { type: "json_schema", schema: MODERATION_JSON_SCHEMA },
			},
			messages: [{ role: "user", content: `Message: "${message}"` }],
		});
		if (response.stop_reason === "refusal") return false;
		const text = response.content.find((block) => block.type === "text")?.text;
		if (!text) return true;
		return !(JSON.parse(text) as { flagged?: boolean }).flagged;
	} catch {
		return true;
	}
}

async function callClaude(options: {
	system: string;
	messages: { role: "user" | "assistant"; content: string }[];
	temperature: number;
	maxTokens: number;
	jsonSchema?: Record<string, unknown>;
}): Promise<string | null> {
	const anthropic = getAnthropicClient();
	if (!anthropic) return null;
	// The Claude API requires a non-empty messages array starting with a user
	// turn; the Socratic dialogue can begin with the tutor's opening question.
	const messages = [...options.messages];
	while (messages.length > 0 && messages[0].role !== "user") {
		messages.shift();
	}
	if (messages.length === 0) {
		messages.push({
			role: "user",
			content: "Hi! I'm ready to talk about my lab.",
		});
	}
	try {
		const response = await anthropic.messages.create({
			model: CLAUDE_MODEL,
			max_tokens: options.maxTokens,
			temperature: options.temperature,
			system: options.system,
			...(options.jsonSchema
				? {
						output_config: {
							format: { type: "json_schema", schema: options.jsonSchema },
						},
					}
				: {}),
			messages,
		});
		if (response.stop_reason === "refusal") return null;
		return (
			response.content.find((block) => block.type === "text")?.text ?? null
		);
	} catch (error) {
		console.error("Concept-lab explain Claude error:", error);
		return null;
	}
}

async function handleReply(body: {
	labId: string;
	stats: ExplainLabStats;
	misconceptionTags?: string[];
	dialogue?: DialogueTurn[];
}): Promise<NextResponse> {
	const definition = getLabById(body.labId);
	if (!definition) {
		return NextResponse.json({ error: "Unknown lab" }, { status: 400 });
	}

	const dialogue = Array.isArray(body.dialogue) ? body.dialogue : [];
	const childTurns = countChildTurns(dialogue);

	// Safety-check the child's most recent message before it reaches the model:
	// a narrow word-bounded blocklist locally, then the moderation check for
	// nuance. (The tutor's blunt substring blocklist false-positives on innocent
	// lab talk like "the machine is dumb", so it is not used here.)
	const lastUser = [...dialogue].reverse().find((t) => t.role === "user");
	if (lastUser) {
		const sanitized = sanitizeMessage(lastUser.content);
		if (
			!checkKidChatSafety(sanitized).isSafe ||
			!(await passesModeration(sanitized))
		) {
			return NextResponse.json({
				role: "assistant",
				content: STEER_BACK,
				childTurns,
				shouldWrapUp: childTurns >= MAX_CHILD_TURNS,
			});
		}
	}

	const shouldWrapUp = childTurns >= MAX_CHILD_TURNS;

	const systemPrompt = buildSocraticSystemPrompt({
		definition,
		stats: body.stats,
		misconceptionTags: body.misconceptionTags ?? [],
		childTurnsSoFar: childTurns,
	});

	const raw = await callClaude({
		system: systemPrompt,
		messages: dialogue.map((turn) => ({
			role: turn.role,
			content:
				turn.role === "user" ? sanitizeMessage(turn.content) : turn.content,
		})),
		temperature: 0.5,
		maxTokens: 150,
	});
	const content =
		raw && checkKidChatSafety(raw).isSafe
			? raw
			: fallbackSocraticReply(childTurns);

	return NextResponse.json({
		role: "assistant",
		content,
		childTurns,
		shouldWrapUp,
	});
}

async function handleScore(body: {
	labId: string;
	childExplanation?: string;
}): Promise<NextResponse> {
	const definition = getLabById(body.labId);
	const explanation = sanitizeMessage(body.childExplanation ?? "").trim();

	if (!definition || explanation.length === 0) {
		return NextResponse.json({ score: undefined, feedback: "Great effort!" });
	}

	const raw = await callClaude({
		system: buildRubricSystemPrompt(definition),
		messages: [
			{
				role: "user",
				content: buildRubricUserPrompt({
					definition,
					childExplanation: explanation,
				}),
			},
		],
		temperature: 0,
		maxTokens: 256,
		jsonSchema: RUBRIC_JSON_SCHEMA,
	});

	if (!raw) {
		return NextResponse.json({ score: undefined, feedback: "Great thinking!" });
	}

	try {
		const parsed = JSON.parse(raw) as { score?: unknown; feedback?: unknown };
		const score = clampRubricScore(parsed.score);
		const feedback =
			typeof parsed.feedback === "string" &&
			checkKidChatSafety(parsed.feedback).isSafe
				? parsed.feedback
				: "Nice job explaining what you learned!";
		return NextResponse.json({ score, feedback });
	} catch {
		return NextResponse.json({ score: undefined, feedback: "Great thinking!" });
	}
}

export const POST = async (req: NextRequest): Promise<NextResponse> => {
	try {
		// The lab is auth-gated in the UI; unauthenticated calls can only be
		// abuse, so reject them before spending model tokens. The client
		// falls back to canned Socratic questions on any non-OK response.
		const user = await getAuthUser();
		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		if (!explainRateLimiter.checkRateLimit(user.id)) {
			return NextResponse.json(
				{ error: "Too many requests. Please slow down a little!" },
				{ status: 429 },
			);
		}

		const body = await req.json();

		if (body?.action === "reply") {
			return await handleReply(body);
		}
		if (body?.action === "score") {
			return await handleScore(body);
		}
		return NextResponse.json({ error: "Invalid action" }, { status: 400 });
	} catch (error) {
		console.error("Concept-lab explain route error:", error);
		// Fail soft: the Explain phase must never block a child from finishing.
		return NextResponse.json({
			role: "assistant",
			content: fallbackSocraticReply(0),
			childTurns: 0,
			shouldWrapUp: false,
		});
	}
};
