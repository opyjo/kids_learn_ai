# Concept Labs — Implementation Status, IRAP Alignment & Engine Roadmap

**Project:** Interactive, instrumented AI-concept labs for children aged 8–13
**Company:** Opyjo Consulting Inc. (KidsLearnAI)
**Status:** Phases 0–3 built and tested; experiment instrumentation live (data collection not yet begun)
**Related docs:** [`novel-pedagogy-implementation.md`](./novel-pedagogy-implementation.md) (design), [`lab-experiments-log.md`](./lab-experiments-log.md) (running results log), [`lib/concept-labs/README.md`](../../lib/concept-labs/README.md) (developer reference)

---

## 1. Executive Summary

We have built a working system that teaches abstract AI concepts to children through a
hands-on, four-phase learning loop **and simultaneously measures whether that method
actually improves understanding**. It replaces a static, read-only lesson ("How AI
Learns") with an experience where the child trains a real machine-learning model on
their own drawings, is coached by a Socratic chatbot to explain what happened, and is
measured before and after.

The measurement layer — randomized cohorts, per-attempt telemetry, and a learning-gain
report — is what makes this a genuine **research and development** effort rather than a
feature: it lets us test, with data, the open question of whether interactive simulations
teach abstract AI ideas to under-13s better than conventional content.

**What exists today:** 20 source modules, 49 automated tests (all passing), one live lab,
a Socratic LLM dialogue, a full validation harness, and an admin dashboard.

**What remains:** collect a real cohort, validate the scoring instrument against humans,
and generalize the code into a reusable "engine" that powers many concepts.

---

## 2. What We Have Built (Phases 0–3)

The system was delivered in four phases, each a working vertical slice.

### 2.1 The pedagogical loop (Phases 0–1)

Every lab runs the child through four measured phases:

| Phase | What the child does | Why |
|---|---|---|
| **Predict** | Answers a probe that surfaces their prior belief | Captures the *pre*-measure and flags any misconception |
| **Play** | Trains a real classifier on their own drawings, then tests it | Concrete-before-abstract; the concept is *experienced*, not read |
| **Explain** | Puts what happened into their own words, coached by BrightByte | Self-explanation — one of the highest-impact learning interventions |
| **Apply** | Answers a new probe in a fresh situation | Captures the *post*-measure and checks transfer |

The first simulation primitive is a **trainable image classifier** ("Teach the
Machine"): the child draws cats and dogs, teaches a k-nearest-neighbours model, and
tests it. It includes a deliberate **bias trap** — teach only left-facing cats and the
model fails on a right-facing one. The failure *is* the lesson.

**Key files:** `lib/concept-labs/knn.ts`, `features.ts`, `types.ts`, `telemetry.ts`,
`registry.ts`, `labs/how-ai-learns.ts`; `components/concept-labs/concept-lab-host.tsx`,
`trainable-classifier-lab.tsx`, `probe-runner.tsx`.

**Design choices that matter for reuse:**
- **Labs are data, not code.** A lab is a configuration object; adding one requires no
  new plumbing.
- **All ML runs in the browser.** Drawings are reduced to feature vectors on-device and
  discarded — nothing sensitive leaves the child's machine (a privacy requirement for
  minors and a cost control).
- **Sessions are reproducible.** Every interaction is a recorded action, so an attempt
  can be replayed for analysis.

### 2.2 The Socratic Explain phase (Phase 2)

The Explain step is a constrained dialogue with BrightByte, built on the existing chat
infrastructure. The system prompt enforces a research-grounded contract: **ask, don't
tell** for the first two turns; target the specific misconception the child's Predict
answer revealed; cap the exchange to keep it short and costs bounded. A second,
lightweight model pass scores the child's self-explanation on a **0–2 rubric**.

It **fails soft**: if the model is unavailable, it falls back to canned Socratic
questions so a child is never blocked from finishing.

**Key files:** `lib/concept-labs/explain.ts` (pure prompt construction, unit-tested),
`app/api/concept-labs/explain/route.ts`, `components/concept-labs/explain-dialogue.tsx`.

### 2.3 The validation harness (Phase 3)

This is the layer that turns "we built it" into "we can measure it."

- **Randomized cohorts** (`lib/concept-labs/cohort.ts`): each signed-in child is
  deterministically assigned — stable across reloads, ~50/50 — to `baseline` (static
  lesson + both probes) or `labs-v1` (the full loop). Both arms answer the same probes,
  so the learning gain is directly comparable.
- **Persisted telemetry** (`scripts/30-create-concept-labs.sql`,
  `app/api/concept-labs/sessions/route.ts`): one row per completed attempt plus its
  interaction stream, written under row-level security (a child sees only their own
  data; admins see all). Writes are fire-and-forget — storage never blocks the child.
- **Gain analysis** (`lib/concept-labs/analysis.ts`): computes the **Hake normalized
  gain** `(post − pre) / (1 − pre)`, misconception-prevalence shift, and rubric averages,
  per lab and cohort.
- **Admin dashboard** (`app/admin/concept-labs`, `components/admin/concept-labs-report.tsx`):
  renders the report visually — no SQL required.

**Safety valve:** the baseline-vs-lab split is gated behind
`NEXT_PUBLIC_CONCEPT_LAB_EXPERIMENT` and **defaults off**, so the live product never
hides the lab from students. While off, every session still records as `labs-v1`, so
lab-arm data accrues immediately.

### 2.4 Quality bar

- **49 automated tests**, all passing, covering the ML core, prompt contracts, cohort
  assignment, gain math, and the UI flows (including a mocked end-to-end Socratic
  dialogue and the baseline-arm branch).
- Type-checked and linted clean; no new runtime dependencies or secrets were introduced.

---

## 3. How This Aligns with IRAP's R&D Tests

IRAP funds work exhibiting **technological uncertainty**, **technological advancement**,
and **systematic investigation**. Each maps directly onto what we built.

### 3.1 Technological Uncertainty

The core question is genuinely unresolved: **do interactive, self-directed simulations
improve conceptual understanding of abstract AI ideas in children under 13 — and by how
much — compared with well-written static content?** The research literature is mixed for
this age band. Concrete uncertainties we cannot answer from first principles:

1. Can a short (≤5-turn) Socratic dialogue reliably elicit *and* score a young child's
   self-explanation, given limited typing ability?
2. Which misconceptions (e.g. "AI just knows things", "AI thinks like a person") are
   actually movable by a single 15-minute lab versus requiring repeated exposure?
3. Does the deliberate-failure design (the bias trap) *teach* or *frustrate* at the low
   end of the age range?
4. Can meaningful learning gains be detected from the sparse data a single child
   produces?

These are not engineering unknowns with known methods — they require investigation and
measurement to resolve.

### 3.2 Technological Advancement

The advancement is a **novel, data-efficient method (and the tooling to deliver it) for
teaching and measuring abstract AI understanding in young children**, combining:

- In-browser, privacy-preserving ML simulations authored as reusable primitives.
- An automated Socratic-dialogue + rubric-scoring pipeline for eliciting and grading
  self-explanation from children.
- A misconception-targeted measurement instrument that reports *which* wrong idea a lab
  does or does not cure — not merely right/wrong.

This goes beyond routine integration of existing tools: off-the-shelf quiz software
serves fixed questions and cannot measure conceptual change or target misconceptions.

### 3.3 Systematic Investigation

The harness *is* the systematic investigation, built into the product:

- A defined hypothesis and a **randomized baseline-vs-lab comparison** with a primary
  outcome (normalized gain) and secondary outcomes (misconception shift, rubric score,
  engagement).
- **Reproducible sessions** — every attempt is a replayable action log.
- A **dated experiments log** ([`lab-experiments-log.md`](./lab-experiments-log.md))
  recording each hypothesis, change, and measured result — the evidence trail SR&ED /
  IRAP reviewers expect.
- An explicit **instrument-validation** step (human spot-checks of the rubric) before
  results are trusted.

### 3.4 Eligible activity mapping

| IRAP Test | Evidence in this project |
|---|---|
| Uncertainty | The four open questions in §3.1; mixed prior literature for under-13s |
| Advancement | Reusable simulation primitives + Socratic scoring + misconception-targeted measurement (§3.2) |
| Systematic investigation | Randomized cohorts, reproducible logs, dated experiments log, instrument validation (§3.3) |

### 3.5 Honest caveats (state these plainly to advisors)

- No cohort has been run yet — the instrumentation is live but **no data is collected**.
- The rubric scores are **model-generated and not yet human-validated**; the 10%
  spot-check is the next instrument-validation task.
- Small samples can mislead; a real cohort is needed before trusting any measured gain.

Presenting these honestly strengthens, not weakens, the case — it demonstrates a rigorous
investigation rather than an over-claimed result.

---

## 4. Next Steps

### 4.1 Validate the method (research track — do this first)

1. **Apply the migration** (`scripts/30-create-concept-labs.sql`) in Supabase — *done /
   in progress.*
2. **Collect a lab-arm cohort** with the experiment off: confirm sessions persist,
   inspect rubric distribution and engagement.
3. **Human-validate the rubric:** blind-score a 10% sample of self-explanations and
   compare to the model's scores; revise the rubric prompt until agreement is acceptable.
4. **Turn the A/B on** (`NEXT_PUBLIC_CONCEPT_LAB_EXPERIMENT=on`), run a baseline-vs-lab
   cohort, and produce the first gain report.
5. **Add a delayed-retention probe** (same concept, new surface, injected 2–3 weeks
   later) to measure durability, not just immediate gain.
6. **Log every iteration** in `lab-experiments-log.md`.

### 4.2 Build the Engine (product track)

The code was structured so that "make it an engine" is a **consolidation, not a rewrite**.
The generalization is already in place — a `SimulationPrimitive` interface, a
data-driven registry, a concept-agnostic host, and a measurement layer that does not know
which concept ran. The engine work is to formalize and extend that.

**Step 1 — Extract a package (`@kidslearnai/concept-labs`).**
Move `lib/concept-labs/` into its own workspace package (the repo already uses a pnpm
workspace). Define a stable public interface and keep app-specific glue (Supabase, the
chat route) behind adapter seams so the core has no hard dependency on them.
- *Public surface (draft):* the `SimulationPrimitive` contract, `ConceptLabDefinition`,
  the phase-machine host, the telemetry recorder, and the analysis functions.
- *Kept private / injected:* persistence sink, LLM transport, auth — provided by the host
  app via adapters.

**Step 2 — Add the remaining primitives** (from the design doc §3), each implementing the
same interface:
- Decision-boundary playground, next-word predictor (demystifies BrightByte itself),
  reward trainer, fairness auditor.

**Step 3 — Author-friendly lab definitions.**
Move lab configuration into lesson frontmatter (`concept_lab:` block) synced to the DB, so
curriculum developers add labs without a developer. Add the `concept_labs` table at this
point.

**Step 4 — Grade-band the engine.**
Parameterize difficulty and reading level per grade so a primitive can serve Grades 1–8,
feeding the self-study product.

**Step 5 (optional, evidence-gated) — Expose it as a service.**
Only once the method is validated and there is demand:
- *Internal engine:* the extracted package powering all KidsLearnAI concepts.
- *External API:* harden the existing endpoints with API keys, quotas, tenant isolation,
  and versioning.
- *Embeddable widget:* ship the labs as a self-contained embed other platforms drop in.

### 4.3 Sequencing rationale

The engine is the easy part to copy; the **validated measurement layer is the moat**. An
engine with published evidence that it teaches ("gain of X%, misconceptions down Y%,
across N children") is a defensible product; without that evidence it is one more widget
library. Therefore: **validate first (§4.1), extract the engine second (§4.2 Steps 1–4),
and productize only from a position of proven results (§4.2 Step 5).**

---

## 5. File Reference

| Area | Files |
|---|---|
| ML core (pure) | `lib/concept-labs/knn.ts`, `features.ts`, `types.ts`, `telemetry.ts` |
| Lab authoring | `lib/concept-labs/registry.ts`, `labs/how-ai-learns.ts` |
| Pedagogical UI | `components/concept-labs/concept-lab-host.tsx`, `trainable-classifier-lab.tsx`, `probe-runner.tsx` |
| Socratic Explain | `lib/concept-labs/explain.ts`, `app/api/concept-labs/explain/route.ts`, `components/concept-labs/explain-dialogue.tsx` |
| Validation harness | `lib/concept-labs/cohort.ts`, `analysis.ts`, `scripts/30-create-concept-labs.sql`, `app/api/concept-labs/sessions/route.ts` |
| Reporting | `app/api/admin/concept-labs/report/route.ts`, `app/admin/concept-labs/page.tsx`, `components/admin/concept-labs-report.tsx` |
| Tests | `tests/unit/lib/concept-labs/*` (7 files), `tests/components/{concept-lab-host,concept-lab-cohort,explain-dialogue}.test.tsx` |
| Docs | `docs/RnD/novel-pedagogy-implementation.md`, `lab-experiments-log.md`, `lib/concept-labs/README.md` |

---

*This document reflects the state of the codebase at the time of writing. Only present
R&D you are genuinely pursuing; keep development notes and time logs from day one to
support eligible Canadian R&D labour claims.*
