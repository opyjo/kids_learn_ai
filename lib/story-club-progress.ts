import { publishedStories } from "@/lib/story-club";

export type SavedStoryProgress = {
	choice?: string;
	answer?: string;
	clues?: string[];
};

function progressKey(slug: string) {
	return `story-club-progress:${slug}`;
}

export function readStoryProgress(slug: string): SavedStoryProgress {
	try {
		const raw = window.localStorage.getItem(progressKey(slug));
		if (!raw) return {};
		const parsed: unknown = JSON.parse(raw);
		if (typeof parsed !== "object" || parsed === null) return {};
		const record = parsed as Record<string, unknown>;
		return {
			choice: typeof record.choice === "string" ? record.choice : undefined,
			answer: typeof record.answer === "string" ? record.answer : undefined,
			clues: Array.isArray(record.clues)
				? record.clues.filter(
						(clue): clue is string => typeof clue === "string",
					)
				: undefined,
		};
	} catch {
		return {};
	}
}

export function writeStoryProgress(slug: string, progress: SavedStoryProgress) {
	try {
		window.localStorage.setItem(progressKey(slug), JSON.stringify(progress));
	} catch {
		// Storage may be unavailable (private mode); the reader still works.
	}
}

export function hasEarnedBadge(slug: string): boolean {
	const story = publishedStories.find((issue) => issue.slug === slug);
	if (!story) return false;
	const saved = readStoryProgress(slug);
	return story.challenge.options.some(
		(option) => option.correct && option.id === saved.answer,
	);
}

export function countEarnedBadges(): number {
	return publishedStories.filter((story) => hasEarnedBadge(story.slug)).length;
}

export const DETECTIVE_RANKS = [
	"Rookie Detective",
	"Clue Spotter",
	"Evidence Expert",
	"Truth Detective",
	"Master Detective",
] as const;

export function detectiveRank(badges: number): string {
	return DETECTIVE_RANKS[Math.min(badges, DETECTIVE_RANKS.length - 1)];
}
