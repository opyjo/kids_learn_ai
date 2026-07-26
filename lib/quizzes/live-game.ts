export type LiveGameStatus =
	| "lobby"
	| "question"
	| "review"
	| "paused"
	| "finished";

export type LiveHostAction =
	| "start"
	| "review"
	| "pause"
	| "resume"
	| "reopen"
	| "next"
	| "skip"
	| "add_time"
	| "finish";

const ALLOWED_TRANSITIONS: Record<LiveHostAction, LiveGameStatus[]> = {
	start: ["lobby"],
	review: ["question"],
	pause: ["question"],
	resume: ["paused"],
	reopen: ["review"],
	next: ["review"],
	skip: ["question", "paused"],
	add_time: ["question", "paused"],
	finish: ["lobby", "question", "review", "paused"],
};

export const LIVE_PRESENCE_INTERVAL_MS = 15_000;
export const LIVE_PRESENCE_TIMEOUT_MS = 35_000;

export function canRunLiveHostAction(
	status: LiveGameStatus,
	action: LiveHostAction,
) {
	return ALLOWED_TRANSITIONS[action].includes(status);
}

export function boundedExtraSeconds(value: unknown, fallback = 10) {
	const parsed = Number(value);
	if (!Number.isFinite(parsed)) return fallback;
	return Math.min(60, Math.max(5, Math.round(parsed)));
}

export function remainingQuestionMs(
	deadline: string | null | undefined,
	now = Date.now(),
) {
	if (!deadline) return 0;
	return Math.max(0, new Date(deadline).getTime() - now);
}

export function liveQuestionDeadline(
	timeLimitSeconds: number,
	now = Date.now(),
) {
	return new Date(now + Math.max(1, timeLimitSeconds) * 1000).toISOString();
}

export function isLivePlayerConnected(
	lastSeenAt: string | null | undefined,
	now = Date.now(),
) {
	return Boolean(
		lastSeenAt &&
			now - new Date(lastSeenAt).getTime() <= LIVE_PRESENCE_TIMEOUT_MS,
	);
}

export function summarizeLiveAnswers(
	answers: { player_id: string; answer: unknown }[],
) {
	const players = new Set<string>();
	const distribution = new Map<string, number>();

	for (const row of answers) {
		players.add(row.player_id);
		const label = Array.isArray(row.answer)
			? row.answer.map(String).join(" → ")
			: String(row.answer ?? "No answer");
		distribution.set(label, (distribution.get(label) || 0) + 1);
	}

	return {
		answeredCount: players.size,
		distribution: [...distribution.entries()]
			.map(([answer, count]) => ({ answer, count }))
			.sort((a, b) => b.count - a.count || a.answer.localeCompare(b.answer)),
	};
}
