import Anthropic from "@anthropic-ai/sdk";

export const CLAUDE_MODEL = "claude-haiku-4-5";

// Quiz generation runs rarely (once per lesson) but its output is stored and
// reused by students and the adaptive-practice engine, so it warrants a
// stronger model than the high-frequency chat features.
export const QUIZ_MODEL = "claude-sonnet-5";

let client: Anthropic | null = null;

/**
 * Shared Anthropic client. Returns null when ANTHROPIC_API_KEY is not set so
 * callers can degrade gracefully (same pattern as getSupabaseAdminClient).
 */
export function getAnthropicClient(): Anthropic | null {
	if (!process.env.ANTHROPIC_API_KEY) return null;
	if (!client) client = new Anthropic();
	return client;
}
