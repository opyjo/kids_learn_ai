export const QUESTION_TYPES = [
	"multiple_choice",
	"true_false",
	"code_output",
	"code_ordering",
] as const;

export type QuestionType = (typeof QUESTION_TYPES)[number];
export type PowerUp = "fifty_fifty" | "hint" | "second_chance";
export type QuizType = "quick_check" | "term_finale" | "lesson_challenge";

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
	adaptive_difficulty: number;
	variant_group: string;
	learning_objective: string;
	prerequisite_tags: string[];
	remediation: string;
	points: number;
	order_index: number;
	time_limit_seconds: number;
}

// Explanations are excluded because they usually restate the correct answer;
// they are only returned in post-answer responses. Hints stay as a pre-answer
// scaffold (live games strip them separately — there they are a paid power-up).
export type StudentQuestion = Omit<
	QuizQuestionRecord,
	| "correct_answer"
	| "explanation"
	| "points"
	| "misconception_tag"
	| "concept_tag"
	| "adaptive_difficulty"
	| "variant_group"
	| "learning_objective"
	| "prerequisite_tags"
	| "remediation"
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

export interface PersonalLiveResult {
	rank: number;
	points: number;
	correctAnswers: number;
	averageResponseMs: number;
}
