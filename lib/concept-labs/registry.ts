/**
 * Registry of authored Concept Labs.
 *
 * v1 keeps labs as TypeScript config objects keyed by lesson, so a lab renders
 * with no database or content-sync changes. When the frontmatter-authoring path
 * lands (a `concept_lab:` block synced into the DB), this registry becomes the
 * fallback/default source and the lookup gains a DB branch — callers keep using
 * `getLabForLesson`.
 */

import { fixTheBiasLab } from "./labs/fix-the-bias";
import { howAiLearnsLab } from "./labs/how-ai-learns";
import { nextWordGuesserLab } from "./labs/next-word-guesser";
import { shapeSorterLab } from "./labs/shape-sorter";
import type { ConceptLabDefinition } from "./types";

const LABS: ConceptLabDefinition[] = [
	howAiLearnsLab,
	fixTheBiasLab,
	shapeSorterLab,
	nextWordGuesserLab,
];

function keyFor(courseSlug: string, orderIndex: number): string {
	return `${courseSlug}#${orderIndex}`;
}

// Standalone-only labs (no lesson binding) appear in /labs but never here.
const LAB_BY_LESSON = new Map<string, ConceptLabDefinition>(
	LABS.flatMap((lab) =>
		lab.courseSlug !== undefined && lab.orderIndex !== undefined
			? [[keyFor(lab.courseSlug, lab.orderIndex), lab] as const]
			: [],
	),
);

/** The lab authored for a given lesson, or null if none. */
export function getLabForLesson(
	courseSlug: string | undefined,
	orderIndex: number | undefined,
): ConceptLabDefinition | null {
	if (!courseSlug || orderIndex === undefined) return null;
	return LAB_BY_LESSON.get(keyFor(courseSlug, orderIndex)) ?? null;
}

/** A lab by its stable id — used server-side so prompts trust the registry,
 * not client-supplied concept text. */
export function getLabById(labId: string): ConceptLabDefinition | null {
	return LABS.find((lab) => lab.labId === labId) ?? null;
}

/** All registered labs (used by tooling/tests). */
export function allLabs(): readonly ConceptLabDefinition[] {
	return LABS;
}
