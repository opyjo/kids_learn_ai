# Year 2, Lesson 4: Build Sprint 2 + Debugging Clinic 🏃‍♀️🔧

## Teacher's Guide

**Course:** Capstone & Portfolio (Year 2, Term 8)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

This is the second build sprint of the capstone, paired with the term's most transferable life skill: **systematic debugging**. Students already have a *working first feature* (from Sprint 1 — the Log feature for Study Buddy). Today has two goals that reinforce each other:

1. **Ship a second feature** — for Study Buddy that's **View stats & chart** (totals, average, per-subject tally, text bar chart). Building it naturally *produces* bugs, which sets up part two perfectly.
2. **Teach a repeatable debugging method** — READ → REPRODUCE → ISOLATE → FIX → RE-TEST — so that when their code breaks (and it will), they have a calm, professional process instead of panic.

The emotional message matters as much as the technical one: **bugs are normal, and pros are defined by how they respond to them, not by avoiding them.** By graduation you want every student to see a red error message as a puzzle, not a failure.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Add a second feature to their capstone without breaking the first
2. Compute a total and a guarded average from a list of dicts
3. Build a category tally dict and render it as a text bar chart using `"█" * int(...)`
4. Guard a function against empty data to prevent `ZeroDivisionError`
5. Read a traceback to identify the error TYPE and the offending line
6. Apply the 5-step method to isolate and fix a bug, using `print()` checks

### Key Success Metrics

- [ ] Every student's capstone still runs (feature one intact) at the end of class
- [ ] Most students have a working second feature, or a clear plan to finish it for homework
- [ ] Every student can name at least three error types and what they mean
- [ ] Students posted at least one bug in the Bug Clinic and saw it diagnosed
- [ ] Nobody leaves demoralised by a crash — the tone stays "puzzle, not failure"

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share; the lesson page open
- Each student's `Y2-T8-Capstone` Trinket from Sprint 1
- This guide and the **solution_code** (Log + View stats & chart) open on your machine
- A scratch Trinket for live-coding the four clinic bugs (so you can crash it on purpose)

### Pre-Lesson Preparation (15 minutes before class)

1. **Run the solution_code yourself** — log a few sessions, view the stats, confirm the chart draws. Know the expected output cold.
2. **Pre-load the four clinic bugs** in a scratch Trinket, each ready to run-and-crash: the float-times-string `TypeError`, the empty-list `ZeroDivisionError`, the `"subjects"` `KeyError`, and the `sesions` typo `NameError`.
3. **Practise reading a traceback aloud** — bottom line first. This is the single most important teaching move today.
4. **Review the register** — note who finished Sprint 1 strongly vs. who is still catching up on the Log feature; the latter group needs pairing during Part A.
5. **Prep the chat prompt** for the Bug Clinic so you can paste it quickly.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-5 min   → Welcome + recap Sprint 1 (feature one works)
⏱️  5-25 min  → Part 1: Build Sprint 2 — stats & chart (guided, step by step)
⏱️ 25-35 min  → Part 2: The 5-step debugging method + reading a traceback
⏱️ 35-50 min  → Part 3: Bug Clinic — four live cases + student bugs from chat
⏱️ 50-60 min  → Common mistakes recap + build/fix work time
⏱️ 60-75 min  → Homework (feature two + bug report) + Week 5 teaser + wrap
```

**Flexible timing:** If the class is still shaky on Sprint 1, give Part 1 more time and shorten the Bug Clinic to two live cases — the *method* matters more than covering all four bugs.

---

## 📚 Detailed Teaching Guide

### Part 1: Build Sprint 2 — Stats & Chart (20 minutes)

Screen-share and build **View stats & chart** with the class, one step at a time. Do NOT paste the whole function at once — the point is that features are built incrementally and tested after each step.

**Teach the guard FIRST (Step 0).** This is the correctness anchor of the whole lesson:

> "Before ANY maths, ask: what if the list is empty? If we average nothing, we divide by zero and crash. So line one of this feature is a guard."

Live-code the empty-list crash on purpose (view stats before logging), let them see `ZeroDivisionError: division by zero`, THEN add the guard and show it's fixed. This plants the debugging mindset before Part 2 even starts.

Then build up:
- **Step 1:** list the sessions with a `for` loop (point out `s['subject']` — single quotes inside the f-string).
- **Step 2:** `sum(...)` and `total / len(sessions)` — stress that the guard makes this division *always safe*. Show `:.1f` tidying the average.
- **Step 3:** the tally dict with `.get(subject, 0)` — the `0` default is what prevents a `KeyError` on a new subject.
- **Step 4:** the bar chart. The load-bearing line is `length = int(hours / block)` — **`"█"` can only be multiplied by an int.** Foreshadow: "Forget the `int()` and you get a TypeError — we'll meet it in the clinic in ten minutes."

**Live-run the whole thing** with Maths 2.0, Science 1.5, Maths 3.0 and match the expected output in the lesson. Thumbs-up check.

#### Teaching Tips

- **Test after every step.** Model the habit relentlessly: "Built a step? Run it. Don't stack three changes then wonder which broke it."
- **Let the guard-crash happen on screen.** Seeing the crash and the fix, live, is worth more than any slide.
- Students still finishing Sprint 1's Log feature should pair with a neighbour who's done, or follow along and finish for homework — don't hold the class.

---

### Part 2: The Debugging Method (10 minutes)

Introduce the **5-step method** as a poster the class will use all term: READ → REPRODUCE → ISOLATE → FIX → RE-TEST. Say it out loud together once.

**The key skill: reading a traceback.** Share a real traceback and teach the bottom-up read:

> "Python errors read from the BOTTOM. The last line is the diagnosis — the *type* and the message. The line just above it is the code that broke. And there's a line number telling you exactly where to look."

Walk the error-type cheat sheet quickly. Don't drill it — they'll absorb it through the clinic. Emphasise the pattern: **every error gives you two clues — what kind, and where.**

#### Teaching Tips

- Frame errors positively: "An error message is Python trying to HELP you. It's telling you what and where — that's a gift, not a scolding."
- The **ISOLATE** step (adding `print()` checks) is the one students skip most. Sell it hard: "When you can't see why a value is wrong, print it right before the crash. The bug usually reveals itself instantly."

---

### Part 3: Bug Clinic (15 minutes)

This is the signature activity. Two halves.

**Half A — Four live cases (~8 min).** Using your pre-loaded scratch Trinket, run each of the four bugs so the class sees the *real* red message, then apply the method out loud:

1. `"█" * hours` (float) → `TypeError` → fix with `int()`
2. average on empty list → `ZeroDivisionError` → fix with the guard
3. `s["subjects"]` → `KeyError` → fix the key name
4. `sesions` typo → `NameError` → fix the spelling

For each: read the last line, name the type, point to the line, fix ONE thing, re-run. Ask the class to shout the diagnosis before you reveal it.

**Half B — Student bugs (~7 min).** Paste the chat prompt:

> "Paste ONE bug from your own capstone: the LAST line of the red error, and the line number."

Pick two or three. Debug them live as a class — invite the first student who spots the fix to type it in chat. This is where the method becomes theirs.

#### Facilitation Notes for the Clinic

- **Insist on the last line of the error.** Beginners paste the whole traceback or just "it doesn't work." Coach the habit: "The diagnosis is the last line — paste that."
- **Never fix it FOR them silently.** Narrate the method every time so the *process* is what they copy, not the answer.
- **Celebrate the diagnosis, not just the fix:** "Kofi named it a KeyError before I did — that's the hard part. The fix is easy once you know the type."
- **Have a fallback bug ready** in case the chat is quiet — reuse one of the four cases and pretend it's fresh, or seed one: "Here's one I hit yesterday..."
- **Protect the demoralised.** If a student's bug is messy or embarrassing, thank them warmly: "This is a GREAT bug — everyone hits this one." Normalise it.

---

### Part 4: Common Mistakes + Work Time (10 minutes)

Run the three common mistakes from the lesson (float-times-string TypeError, empty-list ZeroDivisionError, wrong dict key KeyError), then give students quiet work time to finish their second feature and squash a bug while you circulate via breakout rooms or private chat.

Reinforce: dictionary keys are **case-sensitive** — `"subject"` ≠ `"Subject"`, exactly like variable names.

---

### Part 5: Homework + Wrap-Up (10 minutes)

#### Homework: Feature Two + Bug Report (5 minutes)

Walk through the requirements. Emphasise **testing the empty case** — viewing stats before logging must not crash. Show the Bug Report comment template and stress it's a real professional habit (developers log bugs and fixes constantly).

> "⭐ = your feature works and you noted one bug. ⭐⭐ = it's guarded and you can NAME the error type. ⭐⭐⭐ = you used print() checks to prove which value was wrong."

#### Week 5 Teaser (2 minutes)

> "Your capstone WORKS now. Next week we make it impressive — Build Sprint 3, 'Add the Wow.' For Study Buddy that's the Motivation tip and Quiz me features. Bring your wildest ideas for what would make YOUR project unforgettable."

#### Wrap-Up (3 minutes)

> "Today you did two pro things: you made your data speak, and you learned to fix broken code without panicking. Bugs are just puzzles now. See you next week for the wow factor!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Added the guard before any division (correctness)
- [ ] Built total, average, and tally correctly
- [ ] Drew the bar chart using `int()` for the block count
- [ ] Read a traceback and named the error type
- [ ] Used `print()` checks to isolate a value

**Engagement:**
- [ ] Posted a bug in the clinic chat
- [ ] Helped diagnose a classmate's bug
- [ ] Kept a calm "puzzle" attitude toward crashes

### Students to Watch

**Need Extra Support:**
- Still finishing Sprint 1's Log feature — pair them; make finishing feature one the homework priority before feature two
- Panics or disengages at a red error — private encouragement; reframe the error as a helper, do one bug WITH them

**Ready for More Challenge:**
- Finished feature two early — point them at the ⭐⭐⭐ homework tier, or invite them to start Motivation tip / Quiz me (Week 5 preview)
- Confident debuggers — make them clinic co-doctors: let them diagnose classmates' bugs in chat

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Chart prints one giant/tiny bar | Check the scaling: `block` and `int(hours / block)`; confirm `max()` is over `tally.values()` |
| `TypeError: can't multiply sequence by non-int` | The block count is a float — wrap it in `int()` |
| `ZeroDivisionError` on view | The empty-log guard is missing or after the division — move `if len(sessions) == 0: return` to the top |
| `KeyError` in the stats loop | Key name mismatch — must be exactly `"subject"` / `"hours"`, lowercase |
| Student changed 3 things, now nothing works | Coach: undo to the last working version, change ONE thing, test, repeat |
| Bug Clinic chat is silent | Seed it with your own "bug I hit yesterday"; call on a confident student to share first |
| Feature two broke feature one | Run the Log feature again to confirm; usually an indentation slip pulled code into the wrong function |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Feature progress:** who has a working second feature vs. who needs finishing time next week?
- **Debugging confidence:** which students diagnosed bugs independently? Who still freezes at errors?
- **Common bug patterns:** which error type showed up most in the clinic? (Pre-teach it next sprint.)
- **Tone check:** did anyone leave discouraged by a crash? Follow up privately before Week 5.

---

## 💭 Remember

**The lasting lesson today isn't the stats feature — it's the mindset.**

Features come and go, but "I know what to do when my code breaks" is a skill these students will use for the rest of their lives. If every student leaves believing that a red error message is a puzzle to solve rather than a verdict on their ability, this lesson has done its job. Build the feature, yes — but sell the mindset.

**Two features down, bugs no longer scary. On to the wow!** 🏃‍♀️🔧

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
