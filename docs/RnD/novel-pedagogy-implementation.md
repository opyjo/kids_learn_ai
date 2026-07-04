# Novel Pedagogical Methodology — Code-Level Implementation Design

**Project:** Interactive AI/ML Concept Labs for children aged 9–13
**Status:** DESIGN ONLY — nothing in this document is built yet
**Company:** Opyjo Consulting Inc. (KidsLearnAI)
**Relates to:** IRAP R&D direction — "developing and validating new methods for teaching abstract AI/ML concepts to children aged 9–13, plus the tools to deliver them"

---

## 1. The Pedagogical Method Being Encoded

Today, Terms 5 (AI Sneak Peek) and 8 (AI Explorer) teach abstract AI concepts — training, prediction, bias, ethics — through **static markdown text plus discussion**. The child *reads about* how AI learns; they never *watch a model learn from data they created*.

The proposed method is a repeatable four-phase loop, delivered as software, applied to every abstract AI concept:

| Phase | What the child does | Why it matters pedagogically |
|---|---|---|
| **1. Predict** | Answers a quick probe: "What do you think will happen if we only show the AI pictures of golden retrievers?" | Surfaces the child's *prior mental model* — and gives us a measurable pre-state |
| **2. Play** | Manipulates a live, in-browser ML simulation with their own data (drawings, labels, sliders) | Concrete-before-abstract: the concept is *experienced*, not described |
| **3. Explain** | Articulates what happened, in their own words, to BrightByte (guided Socratic dialogue) | Self-explanation is one of the highest-effect-size learning interventions |
| **4. Apply** | Transfers the concept to a new context (a short transfer task) | Measures whether understanding generalized beyond the toy |

The **research claim** is that this loop, delivered through interactive simulations, produces measurably better conceptual understanding of AI ideas in 9–13-year-olds than the static-content baseline. The software must therefore do two jobs at once: **deliver** the method and **measure** it. That dual requirement is what makes this R&D rather than routine feature work.

---

## 2. Architecture Overview (fits the existing platform)

The platform is Next.js (App Router) + TypeScript + Supabase + Tailwind/shadcn, with lessons authored as `lesson.md` files (frontmatter-driven) and synced to the database by `order_index` / `course_slug`. The lesson viewer renders tabbed sections (Lesson / Activity / AI Lab / Homework) from frontmatter fields.

The Concept Lab system adds **one new lesson section variant and three subsystems** — no rewrite of the existing pipeline:

```
┌─────────────────────────────────────────────────────────────┐
│  lesson.md frontmatter                                       │
│  + concept_lab: { lab_id, probes, transfer_task }   ← NEW    │
└──────────────┬──────────────────────────────────────────────┘
               │ existing curriculum sync (scripts/)
               ▼
┌─────────────────────────────────────────────────────────────┐
│  Supabase                                                    │
│  lessons (existing) + concept_labs, lab_sessions,            │
│  lab_events, probe_responses                        ← NEW    │
└──────────────┬──────────────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────────────┐
│  Lesson Viewer (existing tabs)                                │
│  + "Concept Lab" tab → <ConceptLabHost labId=...>   ← NEW    │
│      ├── Simulation Engine (in-browser ML, no server calls)  │
│      ├── Probe Runner (predict / apply phases)               │
│      └── Telemetry Recorder (event stream → Supabase)        │
└─────────────────────────────────────────────────────────────┘
```

Three design principles up front:

1. **All ML runs in the browser.** Simulations use tiny models (KNN, decision stumps, 2-layer networks) implemented in plain TypeScript or TensorFlow.js. No child data leaves the device for inference/training; only anonymized event telemetry is stored. This is both a privacy requirement (minors) and a cost requirement.
2. **Labs are data, not code.** Each lab is a configuration of a small set of reusable simulation primitives, so curriculum developers can author new labs in frontmatter without a developer.
3. **Measurement is built into the frame, not the lab.** Every lab is automatically wrapped in the Predict → Play → Explain → Apply loop by the host component, so validation data is comparable across all concepts.

---

## 3. The Simulation Engine — Reusable Primitives

Rather than building N bespoke demos, build **5 parameterizable simulation primitives** that cover the abstract concepts in the Term 5/8 curriculum (and future self-study grades):

### 3.1 `TrainableClassifier` — "Teach the machine"
The child creates the training set themselves (draws shapes on a canvas, or labels emoji/image cards into buckets), presses **Train**, then tests the model on new examples.

- **Concepts taught:** training data, prediction, accuracy, *garbage-in-garbage-out*, bias from unbalanced data
- **Implementation:** canvas input → downsampled 16×16 grayscale feature vector → KNN (k=3) in pure TypeScript (~100 LOC, no dependency). Deterministic, instant, explainable ("it looks at the 3 most similar drawings you taught it").
- **Key interaction for the method:** the lab can *deliberately* let the child build a biased dataset (e.g., all "cats" they draw face left), then present a right-facing cat at test time. The failure **is** the lesson.

### 3.2 `DecisionBoundary` — "Where does the machine draw the line?"
A 2-D scatter of labeled points (e.g., "fruit sweetness vs. size"); the child first draws their *own* boundary line, then watches a perceptron fit one, iteration by iteration, with a visible animated line.

- **Concepts taught:** features, model = a rule learned from examples, iteration/learning as gradual improvement, underfitting vs. memorizing
- **Implementation:** SVG scatter + requestAnimationFrame loop stepping a perceptron / logistic fit one epoch per frame with a speed slider. Child's hand-drawn line stays on screen for comparison — "you vs. the machine."

### 3.3 `NextWordGuesser` — "How chatbots really work"
A visible n-gram model trained live on a tiny corpus the child picks or writes (their favourite story paragraph). The child taps to generate text one word at a time, seeing the probability bars for each candidate next word.

- **Concepts taught:** language models as next-token predictors, probability, why models "hallucinate," why more/better data changes outputs
- **Implementation:** bigram/trigram frequency table in TypeScript; probability bars rendered as a simple bar list. Directly demystifies BrightByte itself — "the chatbot you talk to is this, but trained on billions of sentences."

### 3.4 `RewardTrainer` — "Learning from feedback"
A grid-world creature the child trains with 👍/👎 after each move, watching its behaviour change over trials.

- **Concepts taught:** reinforcement/feedback learning, reward shaping, unintended consequences ("you rewarded speed, so it now ignores the treasure")
- **Implementation:** tabular Q-learning on a 5×5 grid, values visualized as heat tints on cells.

### 3.5 `FairnessAuditor` — "Is the AI being fair?"
The child audits a pre-trained toy model (e.g., a "should the robot pick this player for the team?" classifier) by testing inputs and tallying outcomes per group, discovering skew — then retrains it with better data using `TrainableClassifier` mechanics.

- **Concepts taught:** bias, fairness metrics at a child level ("does it say yes as often for group A as group B?"), auditing as a practice
- **Implementation:** frozen weights shipped in lab config + the same KNN/logistic core; a tally board component does the group-outcome counting.

### Primitive contract

Every primitive implements one interface so the host, telemetry, and authoring format treat them uniformly:

```ts
// lib/concept-labs/types.ts
export interface SimulationPrimitive<Config, State> {
  kind: "trainable-classifier" | "decision-boundary" | "next-word-guesser"
      | "reward-trainer" | "fairness-auditor";
  init(config: Config, seed: number): State;          // seeded → reproducible sessions
  /** Pure reducer: every child interaction is an action → new state. */
  step(state: State, action: LabAction): State;
  /** What the telemetry recorder snapshots (small, anonymized). */
  summarize(state: State): LabStateSummary;
}
```

The pure-reducer design matters for the research goal: a session is fully described by `(config, seed, action log)`, so any child's session can be **deterministically replayed** during analysis — you can re-examine *how* a misconception played out, not just final scores.

---

## 4. The Method Loop as a Host Component

The four-phase loop is enforced by one component that wraps every primitive:

```
components/concept-labs/
├── concept-lab-host.tsx        // phase state machine: predict → play → explain → apply
├── probe-runner.tsx            // renders Predict & Apply probes (MCQ / sort / slider)
├── explain-dialogue.tsx        // BrightByte Socratic step (see §6)
├── telemetry-recorder.tsx      // batches LabEvents → Supabase
└── primitives/
    ├── trainable-classifier/
    ├── decision-boundary/
    ├── next-word-guesser/
    ├── reward-trainer/
    └── fairness-auditor/
```

Phase machine (host):

```ts
type LabPhase = "predict" | "play" | "explain" | "apply" | "done";
// Transitions are forward-only and timestamped; skipping is allowed but recorded,
// because skip-rates per phase are themselves a research signal.
```

Integration with the existing viewer is one additional section in `LessonSections` (same pattern as the current `class_activities` / `ai_activities` tabs): if `lesson.concept_lab` is present, push a **"Concept Lab"** tab rendering `<ConceptLabHost>`.

---

## 5. Authoring Format — Labs in `lesson.md` Frontmatter

Consistent with the existing content pipeline (curriculum developers already author `class_activities`, `ai_activities` etc. in frontmatter), a lab is authored declaratively:

```yaml
# docs/Lesson_content/Term5-AISneakPeek/Week4-HowAILearns/lesson.md
concept_lab:
  lab_id: "how-ai-learns-classifier-v1"        # stable id → ties telemetry across cohorts
  primitive: "trainable-classifier"
  config:
    classes: ["cat", "dog"]
    input_mode: "draw"          # draw | label-cards
    bias_trap: "orientation"    # deliberately elicitable failure mode (see §3.1)
  predict_probe:
    question: "If you only teach the AI with cats facing LEFT, what happens when it sees a cat facing RIGHT?"
    options:
      - { id: a, text: "It still knows it's a cat — AI just knows things" }   # misconception: innate knowledge
      - { id: b, text: "It might get confused, because it never saw one" }    # target concept
      - { id: c, text: "It will ask you for help" }                            # misconception: agency
    misconception_tags: { a: "ai-innate-knowledge", c: "ai-has-agency" }
  apply_probe:
    question: "A voice assistant understands adults but not kids. Using what you learned, why might that be?"
    options:
      - { id: a, text: "Kids talk wrong" }
      - { id: b, text: "It was probably trained mostly on adult voices" }      # transfer of concept
      - { id: c, text: "It doesn't like kids" }
    misconception_tags: { c: "ai-has-agency" }
```

Notes:

- **`misconception_tags` are the scientific payload.** They come from a small, versioned taxonomy of documented child misconceptions about AI (e.g., *AI-as-person/agency*, *AI-innate-knowledge*, *AI-is-always-right*). Probes are authored to discriminate between the target concept and specific misconceptions, so the analytics can report "the agency misconception dropped from 41% → 12% after the lab" rather than a generic score.
- The existing sync script gains one step: validate `concept_lab` blocks against a Zod schema and upsert into `concept_labs` keyed by `lab_id`. Authoring mistakes fail the sync, not the child's session.

---

## 6. The "Explain" Phase — Socratic BrightByte

After Play, the child explains what happened to BrightByte. This is a constrained LLM dialogue (Claude via the existing chatbot infrastructure), **not** open chat:

- **System-prompt contract:** BrightByte receives the lab's `LabStateSummary` (what the child actually did — e.g., "trained with 9 left-facing cats, model misclassified right-facing test cat") and is instructed to (1) ask, never tell, for the first two turns; (2) target the specific misconception tags the child's Predict answer flagged; (3) close with the child restating the idea in their own words.
- **Turn budget:** hard cap of ~6 turns to keep the phase short and costs bounded.
- **Safety:** the dialogue is grounded in the lab summary — the model is told to refuse topic drift; standard child-safety system prompt applies; transcripts are stored for the human-review loop (and are themselves research data: children's explanations are the richest evidence of conceptual change).
- **Grading signal:** a second lightweight LLM pass scores the child's final self-explanation against a rubric (`0 = misconception restated`, `1 = partial`, `2 = target concept in own words`), producing a comparable numeric alongside the probe deltas. The rubric-scoring accuracy is itself validated against human scoring on a sample (see §8).

---

## 7. Data Model (Supabase)

```sql
-- Lab definitions (synced from frontmatter; versioned by lab_id + content hash)
create table concept_labs (
  id uuid primary key default gen_random_uuid(),
  lab_id text not null,
  version int not null,
  lesson_id uuid references lessons(id),
  primitive text not null,
  config jsonb not null,
  probes jsonb not null,
  unique (lab_id, version)
);

-- One row per child per attempt
create table lab_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  concept_lab_id uuid references concept_labs(id),
  cohort text not null,              -- 'baseline' | 'labs-v1' | future arms (§8)
  seed int not null,                 -- reproducible replay
  phase_timestamps jsonb,            -- entered/left each phase
  completed boolean default false,
  created_at timestamptz default now()
);

-- Append-only interaction stream (batched writes, ~1 flush/10s)
create table lab_events (
  id bigint generated always as identity primary key,
  session_id uuid references lab_sessions(id),
  t_ms int not null,                 -- ms since session start (no wall-clock PII)
  action jsonb not null              -- the LabAction from the reducer
);

-- Probe answers + explain-phase rubric scores
create table probe_responses (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references lab_sessions(id),
  probe_kind text not null,          -- 'predict' | 'apply' | 'explain-rubric'
  response jsonb not null,
  misconception_tags text[],         -- tags implied by the chosen answer
  score numeric
);
```

Privacy stance (children): no free-text from the child is stored in `lab_events` (drawings are reduced to feature vectors client-side and **discarded**); Explain transcripts are stored under the same guardianship/consent model as the existing BrightByte chat; all research analysis runs on `user_id`-pseudonymized exports. RLS mirrors the existing lessons/submissions policies.

---

## 8. The Validation Harness — What Makes This *Research*

This subsystem is the difference between "we built widgets" and "we developed and **validated** a method."

**Design: within-curriculum randomized comparison.**

- Each AI-concept lesson exists in two arms: **baseline** (current static content + existing AI Lab text) and **labs-v1** (same content + Concept Lab loop). New self-study users are assigned an arm per-concept (randomized, balanced), recorded in `lab_sessions.cohort`.
- **Primary outcome:** normalized gain from Predict-probe to Apply-probe (both arms answer both probes; baseline arm gets probes without the Play/Explain phases).
- **Secondary outcomes:** misconception-tag prevalence shift; delayed retention probe (same concept, new surface story, injected 2–3 weeks later as a warm-up in a subsequent lesson); engagement (phase completion, replay rate, time-in-lab).
- **Instrument validation:** rubric-scoring of Explain transcripts is spot-checked against blind human scoring on a 10% sample each cohort; probe items with poor discrimination get flagged by simple item analysis and revised (probe versions are tracked, so cohorts remain comparable).
- **Iteration cadence:** cohort → analysis notebook (SQL views over the tables above → per-concept gain report) → design change → `lab_id` version bump → next cohort. Each cycle is logged in a running `docs/RnD/lab-experiments-log.md` (hypothesis, change, result) — this doubles as the systematic-investigation evidence trail IRAP and SR&ED reviewers ask for.

**The honest technical uncertainties this harness exists to resolve:**

1. Do interactive simulations beat well-written static content for *this* age band, or only for older learners? (Literature is genuinely mixed for under-13s.)
2. Can a 6-turn constrained LLM dialogue reliably elicit and score self-explanation from a 9-year-old's typing ability?
3. Which misconceptions are actually movable by a 15-minute lab vs. requiring repeated exposure?
4. Does the deliberate-failure design (§3.1 bias trap) teach, or frustrate, at the low end of the age range?

---

## 9. Phased Roadmap (when a build is approved)

| Phase | Scope | Exit criterion |
|---|---|---|
| **0. Foundations** | Types, `concept_labs` schema + sync validation, `ConceptLabHost` phase machine, telemetry recorder | A hard-coded dummy lab records a full session end-to-end |
| **1. First primitive** | `TrainableClassifier` + one authored lab in Term 5 Week 4, probes with misconception tags | Pilot with one live class; session replay works |
| **2. Explain phase** | Socratic BrightByte integration + rubric scorer + human-scoring spot-check tooling | Rubric–human agreement measured on pilot transcripts |
| **3. Harness** | Cohort assignment, baseline arm, analysis views, experiments log | First baseline-vs-lab gain report produced |
| **4. Breadth** | Remaining 4 primitives; labs for Term 8 Weeks 4–5; delayed-retention injection | All Term 5/8 abstract-AI lessons have a lab; second cohort report |
| **5. Self-study scale** | Grade-banded config (difficulty/reading level per grade), parent-facing insight summaries | Labs run unsupervised in the self-study product |

Deliberately deferred: model complexity (no neural nets beyond a visible 2-layer toy), multiplayer labs, mobile-native canvas work, localization.

---

## 10. Effort & Risk Snapshot

- **Highest-value / lowest-risk start:** Phase 0 + 1 — the KNN classifier primitive is small, dependency-free, and exercises the entire pipeline (authoring → sync → host → telemetry).
- **Highest technical risk:** the Explain phase (§6) — LLM Socratic quality and rubric reliability with young typists is the real unknown; it is intentionally isolated in Phase 2 so it can fail and be redesigned without blocking the rest.
- **Highest research risk:** small cohort sizes in live classes underpowering the comparison — mitigated by pooling across concepts (each child contributes multiple concept-level observations) and by the self-study platform eventually supplying volume.

---

*Design document only — no code has been written. Next step when ready to build: review §3 primitive list and §5 authoring format with the curriculum developer, then green-light Phase 0.*
