export const QUESTION_TYPES = [
	"multiple_choice",
	"true_false",
	"code_output",
	"code_ordering",
] as const;

export type QuestionType = (typeof QUESTION_TYPES)[number];
export type PowerUp = "fifty_fifty" | "hint" | "second_chance";

export interface QuizQuestionRecord {
	id: string;
	question: string;
	question_type: QuestionType;
	options: string[];
	correct_answer: string | string[];
	explanation: string | null;
	hint: string | null;
	misconception_tag: string | null;
	concept_tag: string;
	points: number;
	order_index: number;
	time_limit_seconds: number;
}

export type StudentQuestion = Omit<
	QuizQuestionRecord,
	"correct_answer" | "points" | "misconception_tag" | "concept_tag"
>;

export interface GradeResult {
	correct: boolean;
	points: number;
	explanation: string;
	correctAnswer: string | string[];
}

export interface LeaderboardEntry {
	id: string;
	displayName: string;
	points: number;
	correctAnswers: number;
	averageResponseMs: number;
}

export interface TeamLeaderboardEntry {
	id: string;
	name: string;
	averagePoints: number;
	accuracy: number;
	members: number;
}
