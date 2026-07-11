# Concept Labs — Phases 0–3 (built)

Interactive, instrumented AI-concept labs for the lesson viewer. This is the
first vertical slice of the design in
[`docs/RnD/novel-pedagogy-implementation.md`](../../docs/RnD/novel-pedagogy-implementation.md):
one simulation primitive, wrapped in the **Predict → Play → Explain → Apply**
loop, with a Socratic LLM Explain phase and a randomized validation harness,
wired into a real lesson.

## What ships now

- **Pure ML core** (`lib/concept-labs/`): `knn.ts` (k-nearest-neighbours
  classifier that also reports its voting neighbours), `ngram.ts` (bigram
  next-word model), `bias.ts` (dataset-skew detection: class imbalance +
  low-variety classes), `features.ts` (drawing → feature vector), `types.ts`,
  `telemetry.ts` (in-memory session recorder), `safety.ts` (word-bounded
  kid-chat safety checks). No dependencies, unit-tested.
- **`TrainableClassifier` lab** (`components/concept-labs/trainable-classifier-lab.tsx`):
  the child draws examples, teaches the machine two **or more** classes,
  trains, then tests — including the deliberate **bias trap** (teach only
  left-facing cats → watch it fail on a right-facing one). The result view
  shows the actual nearest-neighbour drawings that won the vote, skew nudges
  fire when the child's dataset is lopsided or same-y, and the canvas supports
  per-stroke undo.
- **`NextWordLab`** (`components/concept-labs/next-word-lab.tsx`): the child
  teaches sentences, then watches a bigram model continue phrases greedily —
  with the counts behind each pick shown, so "AI predicts from patterns" is
  visible rather than narrated.
- **Phase-machine host** (`concept-lab-host.tsx`): enforces the four-phase loop
  and records a `LabSessionSummary` per attempt, including misconception-tagged
  probe answers.
- **Socratic Explain phase** (Phase 2): `explain.ts` (pure prompt construction —
  ask-don't-tell contract, misconception targeting, turn budget, rubric),
  `app/api/concept-labs/explain/route.ts` (auth + rate-limited, Claude-backed
  reply + 0–2 rubric scorer; child messages pass a narrow word-bounded
  blocklist in `safety.ts` plus a Claude moderation check — not the tutor's
  blunt substring blocklist, which false-positives on innocent lab talk), and
  `explain-dialogue.tsx` (the BrightByte chat UI). Capped at
  `MAX_CHILD_TURNS` (5) turns; **fails soft** — if the model is unavailable it
  falls back to canned Socratic questions so a child is never blocked from
  finishing. The rubric score and full dialogue are captured in the session
  summary.
- **Authored labs**: `labs/how-ai-learns.ts` for Term 5 Week 4
  (`term-5-ai-sneak-peek`, order 4), plus three standalone labs (no lesson
  binding yet): `labs/fix-the-bias.ts` (deliberately build a biased machine,
  then repair it), `labs/shape-sorter.ts` (three-class classifier), and
  `labs/next-word-guesser.ts` (bigram language model).
- **Wiring**: a **Concept Lab** tab appears in the lesson viewer whenever
  `getLabForLesson(courseSlug, orderIndex)` returns a lab.

## How to see it

Two entry points:

1. **In-lesson:** open the Term 5 Week 4 lesson ("How AI Learns") — the
   **Concept Lab** tab renders the loop. These sessions are the experiment data.
2. **Standalone playground:** any signed-in student can open **`/labs`**
   (nav → Learn → AI Labs) and run any registered lab outside its lesson.
   These sessions are tagged `context = 'standalone'`
   (`scripts/31-add-lab-session-context.sql`) and are **excluded from the
   lesson experiment** — they're reported separately (within-lab gain only,
   never a baseline arm) in the admin dashboard.

Labs are resolved from the registry (`registry.ts`), not the DB.

## Adding a lab

Add a `ConceptLabDefinition` under `labs/`, register it in `registry.ts`. It
binds to a lesson by `courseSlug` + `orderIndex`; omit both to ship a
standalone-only lab that appears just in the `/labs` gallery.

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

The Explain phase reuses the project's **Claude (`claude-haiku-4-5`)** chat
infrastructure and `ANTHROPIC_API_KEY`, for consistency with
`app/api/chat`.
No new secret or dependency was added. Human-scoring spot-checks of the rubric
(doc §8) remain future work.

## Deliberately deferred (see the design doc)

- **Rubric instrument validation** — the 10% human-scoring spot-check that
  confirms the model's rubric scores are trustworthy (doc §8). Until then,
  treat `explain_rubric_score` as provisional.
- **`concept_labs` table + delayed-retention probe** — labs live in the code
  registry for now; the injected 2–3-week retention probe (doc §8) is future.
- **Other primitives** (decision boundary, reward trainer, fairness auditor) —
  doc §3. (The next-word guesser shipped.)
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
