# Concept Lab — Experiments Log

A running, dated record of the concept-lab validation experiment: each hypothesis,
the change made, and the measured result. This is the systematic-investigation
evidence trail for SR&ED / IRAP (see `novel-pedagogy-implementation.md` §8) and
the working log the team reasons from between cohorts.

**How to use:** one entry per iteration. Bump the lab's `labId` version when a
change would make sessions non-comparable (e.g. reworded probe, changed lab
mechanics), so each cohort's data stays clean.

---

## The experiment, in one line

Does the interactive **Predict → Play → Explain → Apply** loop produce a larger
normalized gain (Predict→Apply) on AI-concept understanding than the static
lesson alone, for children aged 8–12?

- **Arms:** `baseline` (static lesson + both probes) vs. `labs-v1` (full loop).
- **Assignment:** deterministic per (user, lab), ~50/50, signed-in users only.
- **Primary outcome:** Hake normalized gain `(post − pre) / (1 − pre)`.
- **Secondary:** misconception prevalence shift; Explain rubric score (labs arm);
  Play engagement (samples taught, tests run, replays).
- **Where the numbers come from:** `GET /api/admin/concept-labs/report`
  (admin-only) or the `concept_lab_gain` SQL view.

---

## How to run a cohort

1. Apply `scripts/30-create-concept-labs.sql` in Supabase (once).
2. Data collection is automatic while the experiment is **off** — every completed
   lab persists as a `labs-v1` session. Good for a first look at the lab arm and
   rubric distribution before splitting.
3. To run the A/B, set `NEXT_PUBLIC_CONCEPT_LAB_EXPERIMENT=on`. Signed-in students
   are then split into `baseline`/`labs-v1` per concept.
4. After a cohort, read the report, add an entry below, decide the next change,
   bump `labId` if needed.

---

## Entries

### 2026-07-04 — Harness built; instrumentation live (no cohort yet)

- **Change:** Shipped Phases 0–3 — the `trainable-classifier` lab for Term 5
  Week 4 ("How AI Learns"), the Socratic Explain phase, and this validation
  harness (persistence + cohort assignment + gain report). Experiment flag
  defaults **off**.
- **Hypothesis (to test next):** among signed-in Term 5 W4 students, `labs-v1`
  shows a higher normalized gain than `baseline`, and a lower `ai-has-agency` /
  `ai-innate-knowledge` misconception rate at Apply.
- **Result:** none yet — no sessions collected. Awaiting the first live cohort.
- **Open questions carried from the design (doc §8):** do simulations beat good
  static content for under-13s; can a ≤5-turn dialogue elicit/score a young
  child's self-explanation reliably; which misconceptions move in one 15-min lab;
  does the deliberate bias-trap teach or frustrate at the low end.
- **Instrument caveat:** rubric scores are model-generated and **not yet
  validated against human scoring** — the 10% human spot-check (doc §8) is the
  next instrument-validation task before trusting rubric deltas.
