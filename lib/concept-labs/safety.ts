/**
 * Kid-chat safety checks scoped to the concept-lab Explain dialogue.
 *
 * The tutor's blocklist (`lib/utils/content-safety.ts`) is tuned for Python
 * help and substring-matches words like "dumb" or "address" — which are
 * innocent in open-ended lab chat ("the machine is dumb!" is a perfectly good
 * observation to steer from, not to block). This module keeps only the
 * genuinely severe local checks, word-bounded; the API route layers the OpenAI
 * moderation model on top for nuance. Pure, so the contract is unit-testable.
 */

export interface KidChatSafetyResult {
	isSafe: boolean;
	reason?: string;
}

/**
 * Severe content that should never reach the model or the child, regardless
 * of what a moderation API says. Word-bounded so innocent words that merely
 * contain these strings don't trip it.
 */
const SEVERE_PATTERNS: RegExp[] = [
	/\bsex(?:ual|ting)?\b/i,
	/\bporn\w*\b/i,
	/\bnudes?\b/i,
	/\bkill (?:your|my|him|her|them)self\b/i,
	/\bkys\b/i,
	/\bsuicide\b/i,
	/\bself[- ]harm\b/i,
	/\bbomb\b/i,
	/\bshoot(?:ing)? (?:up|people)\b/i,
];

/** Attempts to exchange personal/contact information. */
const PERSONAL_INFO_PATTERNS: RegExp[] = [
	/\bwhere (?:do you|I) live\b/i,
	/\bhome address\b/i,
	/\bphone number\b/i,
	/\bcredit card\b/i,
	/\bpassword\b/i,
	/\bsocial security\b/i,
	/\bhow old are you\b/i,
	/\bsnapchat|instagram|tiktok|whatsapp\b/i,
];

export const MAX_KID_MESSAGE_LENGTH = 2000;

/**
 * Local, deterministic safety gate for a child's chat message. Deliberately
 * narrow — nuanced judgement belongs to the moderation model in the API route.
 */
export function checkKidChatSafety(message: string): KidChatSafetyResult {
	const trimmed = message.trim();

	if (trimmed.length < 1) {
		return { isSafe: false, reason: "empty" };
	}
	if (trimmed.length > MAX_KID_MESSAGE_LENGTH) {
		return { isSafe: false, reason: "too-long" };
	}

	for (const pattern of SEVERE_PATTERNS) {
		if (pattern.test(trimmed)) {
			return { isSafe: false, reason: "severe-content" };
		}
	}
	for (const pattern of PERSONAL_INFO_PATTERNS) {
		if (pattern.test(trimmed)) {
			return { isSafe: false, reason: "personal-info" };
		}
	}

	return { isSafe: true };
}
