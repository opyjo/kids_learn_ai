# Year 2, Lesson 4: Scope & Function Design 🔍🏗️

## Teacher's Guide

**Course:** Functions (Year 2, Term 3)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

By now students can define functions, pass parameters, and return values (Weeks 1-3). This lesson adds the two ideas that separate "code that works" from "code that's *good*": **scope** (where variables live) and **function design** (how to structure clean, readable functions). It's the hinge of the term — everything after this assumes students can organise a program into well-named, single-job functions, which is exactly what a multi-scene Text Adventure demands.

Two things make this lesson tricky to teach:

1. **Scope is invisible.** Students can't *see* a variable being created and destroyed. The whole strategy is to make it visible by deliberately triggering `NameError` live and narrating it.
2. **The "value doesn't stick" trap is genuinely counter-intuitive.** Assigning to a global name inside a function silently creates a local — no error, just a wrong answer. Let students be surprised; the surprise is the lesson.

Keep `global` deliberately low-key. Introduce it honestly (it exists, here's how), then immediately show the tidier pass-in/return-out style and signal *that's* what we'll actually use. We don't want students reaching for `global` as their default.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Define **scope** and distinguish **local** from **global** variables
2. Predict when using a variable will raise `NameError: name '...' is not defined`
3. Read a global inside a function, and change one using the `global` keyword
4. Explain why passing values in and returning them out is tidier than `global`
5. Apply the golden rules of function design: one job, verb-based names, short and focused
6. Refactor a repetitive program into clean, well-named functions

### Key Success Metrics

- [ ] Every student triggers and reads a `NameError` at least once
- [ ] Most students correctly predict all three answers in the Detective activity Round 1
- [ ] Students can name at least two golden rules of good function design
- [ ] Every student completes at least the ⭐ tier of the Tidy-Up homework
- [ ] Students connect good design to their upcoming Text Adventure (one function per scene)

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and reactions enabled
- Students' Trinket accounts; today's Trinket: `Y2-T3-W4-Scope`
- This teaching guide open during class
- A messy code blob ready to paste for the Detective Round 2

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Rehearse the `NameError` demo** — you'll run the `make_potion` example live and let it crash. Practise narrating the crash calmly so students see it as *expected*, not scary
3. **Rehearse the "doesn't stick" demo** — the `score = 100` / prints `0` moment is your best hook. Know it cold
4. **Prepare the Detective Round 2 blob** — have a short repetitive program ready to paste (the homework hero-stats program works well, or invent a menu)
5. **Prep the Text Adventure tie-in** — one sentence: "your adventure will have one function per scene and a shared inventory; today is how you keep that tidy"

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap Week 3 (return values) + today's mystery hook
⏱️  8-22 min  → Part 1 & 2: Local vs global (live NameError + "doesn't stick" demos)
⏱️ 22-35 min  → Part 3: Golden rules of good function design
⏱️ 35-48 min  → Part 4: Refactoring the messy Text Adventure live
⏱️ 48-60 min  → Local vs Global Detective activity (both rounds)
⏱️ 60-75 min  → Common mistakes + homework + Week 5 teaser + wrap-up
```

**Flexible timing:** If the scope demos spark lots of questions (they will), it's fine to let Parts 1-2 run long and compress the Detective activity to Round 1 only. Scope understanding is the priority.

---

## 📚 Detailed Teaching Guide

### Part 0: Recap + Hook (8 minutes)

Warm recall first: "Last week functions started handing us answers back. Who can tell me the keyword?" (`return`). Then plant the mystery:

> "Today, a puzzle that catches EVERY programmer at least once. I'm going to make a variable inside a function, then try to use it outside — and Python is going to refuse. Let's find out why."

Screen-share and run the `make_potion` example. Let it crash. Read the error aloud:

> "`NameError: name 'potion' is not defined`. But we DID define it — right there! So why does Python say it doesn't exist? That's what scope is all about."

#### Teaching Tips

- **Crashes are content, not accidents.** Set the tone early that we crash things *on purpose* to learn.

---

### Part 1 & 2: Local vs Global (14 minutes)

Use the "function is a room with a door" metaphor throughout — it's the mental model that makes scope click.

**Local (Part 1):** Re-run `make_potion`. Emphasise: the variable was real *inside*, then cleared away when the function ended. Local = private to the room.

**Global read (Part 2):** Run the `hero = "Ada"` example. Point out the function never made its own `hero`, so Python looked outside and found the global. Reading globals is fine.

**The "doesn't stick" trap:** This is the centrepiece. Run the `score = 0` → `reset_score` → prints `0` example. Pause for reactions:

> "It printed ZERO. We literally wrote `score = 100`. Chat: what on earth happened?"

Take guesses, *then* reveal: assigning inside a function makes a brand-new local. The global was never touched.

**`global` keyword:** Show it fixes the problem — but immediately pivot:

> "Yes, `global` works. But watch how the pros do it instead..."

**Pass in / return out:** Show `add_point(score)`. Sell it: you can *see* exactly where the value changes. This is the style for the Text Adventure. Keep `global` in the toolbox, but signpost pass/return as the default.

#### Teaching Tips

- **Don't over-explain the `global` internals.** "Assigning makes a local unless you say `global`" is enough. The mechanism (namespaces) is Year 3+ material.
- **Anchor with the comparison table** from the lesson — screen-share it as the summary.
- **Watch for:** students who think reading a global *changed* it. Reinforce: reading is fine, *assigning* is the trap.

---

### Part 3: Good Function Design (13 minutes)

Present the three golden rules as a checklist students can apply forever:

1. **One job per function** — the "trench coat" line ("two functions in a trench coat") lands well with this age group
2. **Clear verb names** — walk the vague-vs-clear table; get the class to *rename* `stuff()` and `thing(x)` in the chat
3. **Short and focused** — show the giant `game()` vs the split version

The "can you describe it in one sentence without saying *and*?" test is the takeaway rule — repeat it. Get students to try it on functions from earlier weeks.

#### Teaching Tips

- **Make naming interactive.** Paste a badly-named function and have the class chat better names. Celebrate `is_` / `has_` boolean names — they feel clever and read like English.
- **Connect to teamwork now** (sets up the AI activity): "Clear names mean your teammate knows what a function does without reading inside it."

---

### Part 4: Refactoring Live (13 minutes)

This is the "aha" that justifies the whole lesson. Screen-share the messy 12-line Text Adventure. Ask:

> "This works fine. So why might a programmer HATE this code?"

Fish for: it repeats, it's long, changing the divider means editing six places. Then refactor it **live, in three visible steps** (spot the repeated job → write `draw_line` and `show_scene` → replace the blob). Run both versions to prove **identical output** — that's the definition of refactoring.

Land the payoff: "Twelve confusing lines became three that read like English, and now I change the divider in ONE place." Tie explicitly to the term project:

> "Your Text Adventure will have many scenes. `show_scene` is basically your engine. Good design today = an adventure that doesn't collapse under its own weight in Week 7."

#### Teaching Tips

- **Refactor live, don't paste the finished version.** Students need to see messy → tidy happen in real time.
- **Emphasise "same output."** Beginners fear that changing code changes behaviour. Refactoring is safe *because* output stays identical.

---

### Part 5: Local vs Global Detective (12 minutes)

**Round 1 (predict, then run):** Paste the `Dragon Quest` code. Students answer the three questions in chat *before* you run it. Then run it and reveal the `NameError` on line C. The gap between prediction and result is where learning happens — celebrate wrong guesses as good detective work.

**Round 2 (tidy-up):** Paste your prepared messy blob. As a class, agree on three well-named functions. Type them together. This rehearses the exact homework skill.

#### Teaching Tips

- **Chat-first prediction is non-negotiable** — if you run the code before they predict, you rob them of the reasoning.
- **Call on quiet students** for a function-name suggestion in Round 2 — it's a low-stakes way to include everyone.

---

### Part 6: Common Mistakes + Homework + Wrap-Up (15 minutes)

#### Common Mistakes (5 minutes)

Live-code all three so students see the real messages:

1. Local used outside → `NameError` (fix: `return` it)
2. Global "doesn't stick" → prints old value (fix: pass in / return out)
3. Giant do-everything function → split it

Number 2 is the one they'll hit in homework — reinforce it.

#### Homework: The Great Tidy-Up (5 minutes)

Walk through the messy hero-stats program and the requirements. Stress requirement 4: **same output as the messy version** is how they know their refactor is correct. Point out the tiers — ⭐ is the mission, ⭐⭐⭐ deliberately uses a global so brave students practise it.

#### Wrap-Up (3 minutes)

> "Today you became a variable detective — you know where every variable lives and dies. And you learned to keep your code spotless. Next week your tidy functions start working together. See you there!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Correctly identified local vs global in the Detective Round 1
- [ ] Predicted the `NameError` on the out-of-scope variable
- [ ] Understood why the "doesn't stick" example prints the old value
- [ ] Suggested clear, verb-based function names
- [ ] Refactored (or followed the refactor of) a repetitive blob

**Engagement:**
- [ ] Predicted in chat before code was run
- [ ] Suggested function names in Round 2
- [ ] Used thumbs-up reactions during demos

### Students to Watch

**Need Extra Support:**
- Still confusing "reading a global" with "changing a global" — revisit with the room metaphor
- Couldn't predict the `NameError` — pair them for the homework refactor

**Ready for More Challenge:**
- Point them at the ⭐⭐⭐ tier (a `strongest` global that tracks the richest hero)
- Challenge them to refactor an old Year 1/Term 1 program of their own

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "But I DID define potion!" confusion | Re-run with the room metaphor; add a `print` inside the function to show it *does* exist there, just not outside |
| Students overuse `global` everywhere | Re-show the pass-in/return-out example; give the rule: "reach for `global` only when return genuinely can't do the job" |
| The "doesn't stick" example just confuses | Slow right down; add a `print("inside:", score)` line inside the function so they see the local is 100 while the global stays 0 |
| Refactor feels pointless to fast students | Ask them to add a 20th scene to the messy version vs the tidy version — the pain sells it |
| Trinket/Zoom technical issues | Standard playbook: repl.it backup, browser-only screen share, private-chat triage |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Scope understanding:** did the `NameError` and "doesn't stick" demos land? Who still looked lost?
- **Design vocabulary:** are students using verb-based names naturally, or defaulting to `thing()`?
- **Refactoring:** did the class *feel* the payoff, or did it seem like busywork? Adjust Week 5 examples accordingly.
- **Tie-in:** did students connect good design to the Text Adventure? This matters for Weeks 6-7 motivation.

---

## 💭 Remember

**Scope is invisible, so make it visible.** Every abstract point in this lesson has a runnable demo that crashes or surprises — lean on those moments. The `NameError` and the stubborn `0` teach more than any explanation.

**Design is a habit, not a rule.** You're planting a way of thinking — "one job, clear name, short" — that students will use for the rest of the year. Praise clean functions every time you see them from now on.

**You're building the engineers who'll build the engine.** 🔍🏗️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
