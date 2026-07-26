export const QUIZ_GENERATION_DIFFICULTIES = [
	"easy",
	"standard",
	"challenging",
	"very_challenging",
] as const;

export type QuizGenerationDifficulty =
	(typeof QUIZ_GENERATION_DIFFICULTIES)[number];

export const QUIZ_GENERATION_DIFFICULTY_LABELS: Record<
	QuizGenerationDifficulty,
	string
> = {
	easy: "Easy",
	standard: "Standard",
	challenging: "Challenging",
	very_challenging: "Very challenging",
};

export const DEFAULT_QUIZ_GENERATION_DIFFICULTY: QuizGenerationDifficulty =
	"standard";

const DIFFICULTY_GUIDANCE: Record<QuizGenerationDifficulty, string> = {
	easy: `EASY:
- Question complexity: direct recall, recognition, and one-step application of explicitly taught ideas.
- Distractors: clearly distinct but still plausible beginner mistakes; never silly or unrelated choices.
- Code reasoning: short snippets and a single trace or prediction step.
- Adaptive distribution: use only levels 1-2, roughly 65% level 1 and 35% level 2.`,
	standard: `STANDARD:
- Question complexity: the existing balanced level for ages 9-13, mixing recall with straightforward application.
- Distractors: plausible mistakes based on common misunderstandings, without trick wording.
- Code reasoning: one or two trace/prediction steps using examples comparable to the lesson.
- Adaptive distribution: mix levels 1-3, roughly 25% level 1, 50% level 2, and 25% level 3.`,
	challenging: `CHALLENGING:
- Question complexity: apply taught ideas in less familiar examples and connect two taught steps when the source supports it.
- Distractors: high-quality choices reflecting plausible tracing, ordering, or concept mistakes.
- Code reasoning: multi-line prediction or debugging with two or more reasoning steps, using only constructs present in the source.
- Adaptive distribution: use levels 2-4, roughly 20% level 2, 55% level 3, and 25% level 4.`,
	very_challenging: `VERY CHALLENGING:
- Question complexity: favour multi-step reasoning, prediction, and debugging that combines taught concepts.
- Distractors: closely plausible outcomes from specific intermediate reasoning or tracing mistakes; avoid trivia and trick wording.
- Code reasoning: require careful tracing across multiple lines or finding the cause of a bug, but only with syntax and concepts explicitly present in the source.
- Adaptive distribution: use levels 3-5, roughly 15% level 3, 35% level 4, and 50% level 5.`,
};

export function quizDifficultyPrompt(
	difficulty: QuizGenerationDifficulty,
): string {
	return DIFFICULTY_GUIDANCE[difficulty];
}

export function questionDifficultiesMatchRequest(
	difficulties: number[],
	requested: QuizGenerationDifficulty,
): boolean {
	if (!difficulties.length) return false;
	switch (requested) {
		case "easy":
			return difficulties.every(
				(difficulty) => difficulty >= 1 && difficulty <= 2,
			);
		case "standard":
			return difficulties.every(
				(difficulty) => difficulty >= 1 && difficulty <= 3,
			);
		case "challenging":
			return (
				difficulties.every(
					(difficulty) => difficulty >= 2 && difficulty <= 4,
				) && difficulties.some((difficulty) => difficulty >= 3)
			);
		case "very_challenging":
			return (
				difficulties.every(
					(difficulty) => difficulty >= 3 && difficulty <= 5,
				) &&
				difficulties.filter((difficulty) => difficulty >= 4).length >=
					Math.ceil(difficulties.length / 2)
			);
	}
}
