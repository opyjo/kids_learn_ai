import type {
	LeaderboardEntry,
	PersonalLiveResult,
	QuizType,
} from "@/lib/quizzes/types";

export const LESSON_CHALLENGE_QUESTION_COUNT = 8;

export interface LessonSource {
	title: string;
	description?: string | null;
	content?: string | null;
	starter_code?: string | null;
}

export function lessonChallengeSource(lesson: LessonSource): string {
	return [
		lesson.title,
		lesson.description || "",
		lesson.content || "",
		lesson.starter_code || "",
	].join("\n");
}

export async function lessonSourceHash(lesson: LessonSource): Promise<string> {
	const bytes = new TextEncoder().encode(lessonChallengeSource(lesson));
	const digest = await crypto.subtle.digest("SHA-256", bytes);
	return Array.from(new Uint8Array(digest), (byte) =>
		byte.toString(16).padStart(2, "0"),
	).join("");
}

export function isTeamFirstGame(quizType: QuizType, teamCount: number) {
	return quizType === "lesson_challenge" && teamCount > 0;
}

export function updatesLearningFromLiveGame(quizType: QuizType) {
	return quizType !== "lesson_challenge";
}

export function visibleIndividualLeaderboard(input: {
	leaderboard: LeaderboardEntry[];
	isHost: boolean;
	teamFirst: boolean;
}) {
	return input.isHost || !input.teamFirst ? input.leaderboard : [];
}

export function personalLiveResult(
	leaderboard: LeaderboardEntry[],
	playerId: string | null | undefined,
): PersonalLiveResult | null {
	if (!playerId) return null;
	const index = leaderboard.findIndex((entry) => entry.id === playerId);
	if (index < 0) return null;
	const entry = leaderboard[index];
	return {
		rank: index + 1,
		points: entry.points,
		correctAnswers: entry.correctAnswers,
		averageResponseMs: entry.averageResponseMs,
	};
}
