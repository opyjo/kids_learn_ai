/**
 * Cohort assignment for the concept-lab validation experiment.
 *
 * The experiment compares two arms of an AI-concept lesson:
 *   - "baseline" : the child answers the Predict and Apply probes with only the
 *                  static lesson content in between (no Play, no Explain).
 *   - "labs-v1"  : the child answers the same probes with the full
 *                  Predict → Play → Explain → Apply loop in between.
 * Both arms answer both probes, so the normalized gain is comparable. See
 * docs/RnD/novel-pedagogy-implementation.md §8.
 *
 * Assignment is DETERMINISTIC per (user, lab): a child always sees the same arm
 * for a given concept (stable across reloads) and the split is ~50/50 in
 * expectation. Determinism also makes a session reproducible for analysis.
 */

export type Cohort = "baseline" | "labs-v1";

/** FNV-1a 32-bit — small, fast, dependency-free, stable across runs. */
function hash32(input: string): number {
	let hash = 2166136261;
	for (let i = 0; i < input.length; i++) {
		hash ^= input.charCodeAt(i);
		hash = Math.imul(hash, 16777619);
	}
	return hash >>> 0;
}

/** The arm a given user is assigned to for a given lab. */
export function assignCohort(userKey: string, labId: string): Cohort {
	return hash32(`${userKey}#${labId}`) % 2 === 0 ? "baseline" : "labs-v1";
}

/** A reproducible per-(user, lab) seed, recorded with the session. */
export function deriveSeed(userKey: string, labId: string): number {
	return hash32(`seed:${userKey}#${labId}`);
}

/**
 * Resolve the arm to actually run.
 *
 * Until the experiment is switched on, everyone gets the full lab ("labs-v1")
 * so the live product is never degraded — sessions still persist, so lab-arm
 * data accumulates. Anonymous (signed-out) users are never split, because they
 * cannot be analysed; they always get the full experience.
 */
export function resolveCohort(
	userId: string | undefined,
	labId: string,
	experimentEnabled: boolean,
): Cohort {
	if (!experimentEnabled || !userId) return "labs-v1";
	return assignCohort(userId, labId);
}
