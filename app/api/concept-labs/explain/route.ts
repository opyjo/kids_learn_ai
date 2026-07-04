import { type NextRequest, NextResponse } from "next/server";
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
import type { DialogueTurn } from "@/lib/concept-labs/types";
import {
	checkContentSafety,
	sanitizeMessage,
} from "@/lib/utils/content-safety";

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-4o-mini";

/** A gentle nudge back on-topic if the child's message trips the safety check. */
const STEER_BACK =
	"Let's keep talking about your drawing lab! 🤖 What did the machine look at to make its guess?";

function countChildTurns(dialogue: DialogueTurn[]): number {
	return dialogue.filter((turn) => turn.role === "user").length;
}

async function callOpenAI(
	messages: { role: string; content: string }[],
	opts: { temperature: number; maxTokens: number; jsonMode?: boolean },
): Promise<string | null> {
	const apiKey = process.env.OPENAI_API_KEY;
	if (!apiKey) return null;
	try {
		const response = await fetch(OPENAI_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify({
				model: MODEL,
				messages,
				temperature: opts.temperature,
				max_tokens: opts.maxTokens,
				...(opts.jsonMode ? { response_format: { type: "json_object" } } : {}),
			}),
		});
		if (!response.ok) return null;
		const data = await response.json();
		return data.choices?.[0]?.message?.content ?? null;
	} catch (error) {
		console.error("Concept-lab explain OpenAI error:", error);
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

	// Safety-check the child's most recent message before it reaches the model.
	const lastUser = [...dialogue].reverse().find((t) => t.role === "user");
	if (lastUser) {
		const sanitized = sanitizeMessage(lastUser.content);
		if (!checkContentSafety(sanitized).isSafe) {
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

	const messages = [
		{ role: "system", content: systemPrompt },
		...dialogue.map((turn) => ({
			role: turn.role,
			content:
				turn.role === "user" ? sanitizeMessage(turn.content) : turn.content,
		})),
	];

	const raw = await callOpenAI(messages, { temperature: 0.5, maxTokens: 150 });
	const content =
		raw && checkContentSafety(raw).isSafe
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

	const raw = await callOpenAI(
		[
			{ role: "system", content: buildRubricSystemPrompt() },
			{
				role: "user",
				content: buildRubricUserPrompt({
					definition,
					childExplanation: explanation,
				}),
			},
		],
		{ temperature: 0, maxTokens: 100, jsonMode: true },
	);

	if (!raw) {
		return NextResponse.json({ score: undefined, feedback: "Great thinking!" });
	}

	try {
		const parsed = JSON.parse(raw) as { score?: unknown; feedback?: unknown };
		const score = clampRubricScore(parsed.score);
		const feedback =
			typeof parsed.feedback === "string" &&
			checkContentSafety(parsed.feedback).isSafe
				? parsed.feedback
				: "Nice job explaining what you learned!";
		return NextResponse.json({ score, feedback });
	} catch {
		return NextResponse.json({ score: undefined, feedback: "Great thinking!" });
	}
}

export const POST = async (req: NextRequest): Promise<NextResponse> => {
	try {
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
