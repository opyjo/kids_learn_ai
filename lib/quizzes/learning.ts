export type MasteryStatus = "learning" | "practising" | "mastered";

export function nextReviewDelayDays(
	intervalStep: number,
	correct: boolean,
): number | null {
	if (!correct) return 2;
	if (intervalStep <= 0) return 7;
	if (intervalStep === 1) return 30;
	return null;
}

export function masteryStatus(
	score: number,
	totalAnswers: number,
): MasteryStatus {
	if (totalAnswers >= 3 && score >= 80) return "mastered";
	if (score >= 50) return "practising";
	return "learning";
}

export function conceptLabel(tag: string): string {
	return tag.replaceAll("-", " ").replaceAll("_", " ");
}
