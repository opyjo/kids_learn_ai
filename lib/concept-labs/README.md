# Concept Labs — Phases 0–3 (built)

Interactive, instrumented AI-concept labs for the lesson viewer. This is the
first vertical slice of the design in
[`docs/RnD/novel-pedagogy-implementation.md`](../../docs/RnD/novel-pedagogy-implementation.md):
one simulation primitive, wrapped in the **Predict → Play → Explain → Apply**
loop, with a Socratic LLM Explain phase and a randomized validation harness,
wired into a real lesson.

## What ships now

- **Pure ML core** (`lib/concept-labs/`): `knn.ts` (k-nearest-neighbours
  classifier), `features.ts` (drawing → feature vector), `types.ts`,
  `telemetry.ts` (in-memory session recorder). No dependencies, unit-tested.
- **`TrainableClassifier` lab** (`components/concept-labs/trainable-classifier-lab.tsx`):
  the child draws examples, teaches the machine two classes, trains, then tests
  — including the deliberate **bias trap** (teach only left-facing cats → watch
  it fail on a right-facing one).
- **Phase-machine host** (`concept-lab-host.tsx`): enforces the four-phase loop
  and records a `LabSessionSummary` per attempt, including misconception-tagged
  probe answers.
- **Socratic Explain phase** (Phase 2): `explain.ts` (pure prompt construction —
  ask-don't-tell contract, misconception targeting, turn budget, rubric),
  `app/api/concept-labs/explain/route.ts` (OpenAI-backed reply + 0–2 rubric
  scorer, reusing the existing content-safety utils), and
  `explain-dialogue.tsx` (the BrightByte chat UI). Capped at
  `MAX_CHILD_TURNS` (5) turns; **fails soft** — if the model is unavailable it
  falls back to canned Socratic questions so a child is never blocked from
  finishing. The rubric score and full dialogue are captured in the session
  summary.
- **Authored lab**: `labs/how-ai-learns.ts` for Term 5 Week 4 (`term-5-ai-sneak-peek`, order 4).
- **Wiring**: a **Concept Lab** tab appears in the lesson viewer whenever
  `getLabForLesson(courseSlug, orderIndex)` returns a lab.

## How to see it

Open the Term 5 Week 4 lesson ("How AI Learns"). The **Concept Lab** tab renders
the loop. No database change or content sync is required — labs are resolved from
the registry (`registry.ts`), not the DB, in this phase.

## Adding a lab

Add a `ConceptLabDefinition` under `labs/`, register it in `registry.ts`. It
binds to a lesson by `courseSlug` + `orderIndex`.

- **Validation harness** (Phase 3): `cohort.ts` (deterministic ~50/50 arm
  assignment + seed), `analysis.ts` (Hake normalized gain, misconception shift,
  rubric averages — pure, unit-tested), `scripts/30-create-concept-labs.sql`
  (`lab_sessions` + `lab_events` tables, RLS, `concept_lab_gain` view),
  `app/api/concept-labs/sessions` (persist a completed attempt under the user's
  RLS; signed-out attempts dropped; **fire-and-forget**, never blocks the child),
  and `app/api/admin/concept-labs/report` (admin-only gain report). The
  baseline-vs-lab A/B is gated by `NEXT_PUBLIC_CONCEPT_LAB_EXPERIMENT` and
  **defaults off** — when off, everyone gets the full lab and sessions still
  persist as the `labs-v1` arm. The running record lives in
  [`docs/RnD/lab-experiments-log.md`](../../docs/RnD/lab-experiments-log.md).

### Running the experiment

1. Apply `scripts/30-create-concept-labs.sql` in Supabase (once).
2. Leave the flag off to collect lab-arm data automatically.
3. Set `NEXT_PUBLIC_CONCEPT_LAB_EXPERIMENT=on` to split signed-in students into
   `baseline` / `labs-v1`, then read `GET /api/admin/concept-labs/report`.

## Provider note

The Explain phase reuses the project's **existing OpenAI (`gpt-4o-mini`)** chat
infrastructure and `OPENAI_API_KEY` — not Anthropic — for consistency with
`app/api/chat`. (The design doc §6 assumed Claude; the live codebase is OpenAI.)
No new secret or dependency was added. Human-scoring spot-checks of the rubric
(doc §8) remain future work.

## Deliberately deferred (see the design doc)

- **Rubric instrument validation** — the 10% human-scoring spot-check that
  confirms the model's rubric scores are trustworthy (doc §8). Until then,
  treat `explain_rubric_score` as provisional.
- **`concept_labs` table + delayed-retention probe** — labs live in the code
  registry for now; the injected 2–3-week retention probe (doc §8) is future.
- **Other 4 primitives** (decision boundary, next-word guesser, reward trainer,
  fairness auditor) — doc §3.
- **DB-persisted telemetry** — the recorder produces a summary in memory; the
  Supabase sink (`concept_labs` / `lab_sessions` / `lab_events` /
  `probe_responses`) plugs in behind the same interface (doc §7).
- **Validation harness** (cohort assignment, baseline arm, analysis) — doc §8.
- **Frontmatter authoring** (`concept_lab:` block synced into the DB) — the
  registry is the interim source; the sync path is a later step.
- **`/labs` unlocked-replay gallery** — doc §9, Phase 4+.

## Tests

`tests/unit/lib/concept-labs/*` (core + registry + telemetry) and
`tests/components/concept-lab-host.test.tsx` (phase wiring).
