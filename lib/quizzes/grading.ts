import type {
	LeaderboardEntry,
	PowerUp,
	QuizQuestionRecord,
	StudentQuestion,
	TeamLeaderboardEntry,
} from "@/lib/quizzes/types";

const normalize = (value: string) =>
	value.trim().replace(/\s+/g, " ").toLowerCase();

export function answersMatch(
	actual: string | string[],
	expected: string | string[],
): boolean {
	if (Array.isArray(actual) || Array.isArray(expected)) {
		if (!Array.isArray(actual) || !Array.isArray(expected)) return false;
		return (
			actual.length === expected.length &&
			actual.every(
				(value, index) => normalize(value) === normalize(expected[index]),
			)
		);
	}
	return normalize(actual) === normalize(expected);
}

export function calculateLivePoints(input: {
	correct: boolean;
	timeTakenMs: number;
	timeLimitSeconds: number;
	powerUp?: PowerUp | null;
	isSecondChance?: boolean;
}): number {
	if (!input.correct) return 0;
	if (input.isSecondChance || input.powerUp === "second_chance") return 500;
	const base = input.powerUp === "hint" ? 800 : 1000;
	const limitMs = Math.max(1, input.timeLimitSeconds * 1000);
	const remainingRatio = Math.max(0, 1 - input.timeTakenMs / limitMs);
	return base + Math.round(200 * remainingRatio);
}

export function sanitizeQuestion(
	question: QuizQuestionRecord,
): StudentQuestion {
	const {
		correct_answer: _answer,
		explanation: _explanation,
		points: _points,
		misconception_tag: _tag,
		concept_tag: _concept,
		adaptive_difficulty: _difficulty,
		variant_group: _variant,
		learning_objective: _objective,
		prerequisite_tags: _prerequisites,
		remediation: _remediation,
		...safe
	} = question;
	return safe;
}

export function displayName(fullName: string | null | undefined): string {
	const parts = (fullName || "Student").trim().split(/\s+/).filter(Boolean);
	return parts.length > 1
		? `${parts[0]} ${parts.at(-1)?.[0]}.`
		: parts[0] || "Student";
}

export function sortLeaderboard(
	entries: LeaderboardEntry[],
): LeaderboardEntry[] {
	return [...entries].sort(
		(a, b) =>
			b.points - a.points ||
			b.correctAnswers - a.correctAnswers ||
			a.averageResponseMs - b.averageResponseMs,
	);
}

export function sortTeamLeaderboard(
	entries: TeamLeaderboardEntry[],
): TeamLeaderboardEntry[] {
	return [...entries].sort(
		(a, b) => b.averagePoints - a.averagePoints || b.accuracy - a.accuracy,
	);
}
