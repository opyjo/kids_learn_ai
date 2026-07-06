# Year 2, Lesson 5: Smart Decisions & Safe Input 🛡️🐍

## Teacher's Guide

**Course:** Python Accelerated (Year 2, Term 1)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

This is the pivotal lesson of Term 1. Weeks 2-4 gave students the raw materials (data types, maths, f-strings); this week gives them the skill that turns a fragile script into robust software: **validating user input before using it**. Everything hinges on one mental model — the **bouncer**: check the input at the door, and only let it through if it's valid.

Three core goals:

1. **Deepen decisions** — students already know `if`/`elif`/`else`; today they combine conditions with `and`/`or`/`not` and learn nested vs chained structure
2. **Make the crash real** — students must SEE `int(input(...))` explode on "banana" (a live `ValueError`) before they'll value the fix. Show the problem, then the cure
3. **Install the professional pattern** — `.isdigit()` guard clause, then the `while`-loop "keep asking until valid" pattern that they'll reuse in every project from here on

This is the last skills lesson before building begins. Next week the Smart Calculator construction starts, and it lives or dies on today's validation. Frame everything through that lens: "smart = never crashes = today."

### Learning Objectives

By the end of this lesson, students will be able to:

1. Combine conditions using `and`, `or`, and `not`, and predict the boolean result
2. Distinguish nested `if` from chained `elif` and choose the right one
3. Explain why `int(input(...))` crashes on non-numeric text (a `ValueError`)
4. Use `str.isdigit()` as a guard clause to check input before converting
5. Write a `while` loop that keeps asking until the user enters valid input
6. State the honest limits of `.isdigit()` (non-negative whole numbers only)

### Key Success Metrics

- [ ] Every student sees the `ValueError` crash live and can say why it happens
- [ ] Every student writes a bouncer that survives "banana" without crashing (Activity Round 2)
- [ ] Most students complete the `while`-loop validation (Bonus / homework ⭐⭐)
- [ ] Students connect today's skill to next week's calculator ("smart = never crashes")

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share enabled
- Students' Trinket accounts; today's Trinket name is `Y2-T1-W5-SafeInput`
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-type the crash demo** in a Trinket so you can run it instantly: `age = int(input("How old are you? "))` — you'll type "banana" live for maximum drama
3. **Have the `while`-loop stop trick ready** — know where the ⏹ stop button is in Trinket; a forgotten "ask again" line WILL cause an infinite loop in someone's code
4. **Review Week 2 recall** — students met `ValueError` as a preview in Week 2; you're now paying it off
5. **Prepare the predict-the-output warm-up** — have the boolean lines ready to paste into chat

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap decisions + comparison toolkit
⏱️  8-20 min  → and / or / not + predict-the-output warm-up
⏱️ 20-28 min  → Nested vs chained decisions
⏱️ 28-38 min  → THE CRASH (live ValueError demo)
⏱️ 38-52 min  → The bouncer pattern (.isdigit) + while-loop validation
⏱️ 52-62 min  → Bouncer at the Door activity
⏱️ 62-75 min  → Calculator tie-in + homework + wrap-up
```

**Flexible timing:** The crash demo and the bouncer pattern are the heart of the lesson — protect their combined ~24 minutes. If short on time, trim the nested/chained section (they'll meet nesting again inside the bouncer anyway).

---

## 📚 Detailed Teaching Guide

### Part 1: Decision Recap (8 minutes)

Open fast — this is revision, not instruction. Screen-share the grade example and ask the class to predict the output before you run it.

> "You all know this from Year 1. Python checks top to bottom and runs the FIRST true one, then skips the rest. Who can tell me in the chat: why do we use `elif` instead of lots of separate `if`s?"

Then flash the comparison table. Spend 30 seconds on the `=` vs `==` distinction — it's about to matter.

#### Teaching Tips
- Don't dwell. If the class answers the grade example instantly, move on — the new material is where the time belongs.

---

### Part 2: and / or / not (12 minutes)

Teach the three logic words with the table, then run each mini-example live. The key intuition to install:

> "`and` is fussy — it needs BOTH sides true. `or` is generous — one side is enough. `not` is a mirror — it flips true and false."

#### Predict-the-Output Warm-Up (5 minutes)

Paste into the Zoom chat and have students post guesses BEFORE you run:

```python
print(5 > 3 and 10 > 20)     # False
print(5 > 3 or 10 > 20)      # True
print(not (2 == 2))          # False
```

Call on students to explain WHY, not just what. The `not (2 == 2)` one trips people up — walk it through: "2 == 2 is True, and not flips it to False."

#### Teaching Tips
- **Read conditions in plain English** as you go: "age is at least 13 AND age is at most 17."
- Watch for students writing `age >= 13 and <= 17` (missing the second `age`) — flag it now, it's a very common error.

---

### Part 3: Nested vs Chained (8 minutes)

Show both the grade example (chained) and the age-check example (nested). Land the rule:

> "Chained `elif` = pick ONE from a list. Nested `if` = a check that only makes sense AFTER an earlier check passed. And that second one? That's the bouncer pattern we're about to build — first check it's a number, THEN check its value."

This deliberately previews Part 5, so the nesting doesn't feel abstract.

#### Teaching Tips
- Emphasise indentation — nested `if`s live further to the right. Trinket auto-indents, but check students' shared screens.

---

### Part 4: THE CRASH (10 minutes)

The emotional turning point of the lesson. Do this LIVE.

Type (or reveal your pre-typed) demo:

```python
age = int(input("How old are you? "))
print("Next year you'll be", age + 1)
```

Run it, type `12` — works fine. Then run it again and type `banana`:

> "Watch this. I'm the user, and I'm going to type banana instead of a number... and — 💥 — look at that. `ValueError`. The whole program just DIED. Red error. If this were a real app, the user would see this and think it's broken."

Let it sit. Then diagnose together:

> "Remember Week 2? `input()` gives us TEXT. `int()` can only turn text into a number if it really looks like one. 'banana' doesn't — so it crashes. The mistake? We tried to convert BEFORE checking. We need a bouncer at the door."

#### Teaching Tips
- **Don't rush to the fix.** The crash needs to land as a real problem. Sit in the discomfort for a moment.
- This pays off the Week 2 preview — remind them: "We warned you about `ValueError` back in Week 2. Today we defeat it."

---

### Part 5: The Bouncer Pattern (14 minutes)

#### `.isdigit()` (5 minutes)

Introduce the door scanner:

```python
print("12".isdigit())      # True
print("banana".isdigit())  # False
print("".isdigit())        # False
```

Then the guard clause:

```python
age_text = input("How old are you? ")
if age_text.isdigit():
    age = int(age_text)
    print("Next year you'll be", age + 1)
else:
    print("That's not a whole number — please try again. 🚫")
```

Run it, type `banana` — **no crash**, just a polite message. Celebrate:

> "Same silly input. But no explosion. THAT is what a bouncer does — checks the ID before letting anyone in."

**Be honest about `.isdigit()`'s limits.** Show the table live: `"-5"` and `"3.5"` both return `False`. Frame it positively:

> "It only says yes to plain whole numbers. For our calculator this term, that's exactly what we want. Later in Year 2 you'll learn a trick for decimals and negatives."

#### The while-loop pattern (9 minutes)

Build up to the professional version:

```python
age_text = input("How old are you? ")
while not age_text.isdigit():
    print("🚫 That's not a number. Try again!")
    age_text = input("How old are you? ")
age = int(age_text)
print("Thanks! Next year you'll be", age + 1, "🎉")
```

Read the loop aloud, slowly. The critical teaching point:

> "See that `input()` INSIDE the loop? That's the most important line. If you forget it, the answer never changes, and the loop runs FOREVER."

Deliberately demonstrate the infinite loop (delete the inner `input()`, run it, let it spam, then hit ⏹). Nothing teaches "ask again inside the loop" like seeing it fail.

#### Teaching Tips
- Show students the ⏹ stop button NOW — several will hit an infinite loop in the activity and homework.
- `while not X.isdigit():` reads as "while it is NOT a number" — say it in English every time.

---

### Part 6: Bouncer at the Door Activity (10 minutes)

Launch the activity. Students work in their own Trinkets; you circulate via shared screens.

- **Round 1 (Predict):** whole-class, fast — post guesses in chat, then run
- **Round 2 (Basic Bouncer):** everyone should reach this — `.isdigit()` guard, no crash
- **Round 3 (Strict Bouncer):** `age >= 1 and age <= 120` — stretch for confident students
- **Bonus (while loop):** the professional version; fast finishers

Invite one or two students to paste their funniest rejection message in the chat — keeps energy high.

#### Teaching Tips
- **Watch for infinite loops** on the Bonus — first fix to check is the missing inner `input()`.
- Common bug: `if age.isdigit()` where `age` is already an int (crashes — ints have no `.isdigit()`). Reinforce: check the TEXT first, convert AFTER.

---

### Part 7: Calculator Tie-In + Homework + Wrap-Up (13 minutes)

#### Calculator Connection (4 minutes)

> "Next week we START BUILDING the Smart Calculator. And here's the thing — the word 'smart' means 'never crashes.' What if someone types 'banana' where a number goes? A beginner's calculator dies. Yours won't, because you now have a bouncer. Today isn't a side lesson — it's the foundation of the whole project."

Map the term so far: Week 2 data types → Week 3 maths → Week 4 f-strings → Week 5 safe input → Week 6 BUILD.

#### Homework: Number Guard (5 minutes)

Walk through the requirements and example run. Point out the tiers:

> "⭐ is the guard clause. ⭐⭐ adds the while loop — that's the real target. ⭐⭐⭐ checks the PIN is exactly 4 digits, which needs `len()` — for the brave."

Note: `len(pin_text) == 4` works on the TEXT before conversion — a neat hint for ⭐⭐⭐. Set the due date and paste submission instructions in chat.

#### Wrap-Up (3 minutes)

> "Today you learned the one skill that separates real software from hobby code: programs that don't crash. Next week we build the calculator — and your bouncer guards the door. See you there!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Predicted boolean results with `and`/`or`/`not` correctly (Part 2)
- [ ] Explained why `int(input())` crashed (Part 4)
- [ ] Wrote a working `.isdigit()` guard clause (Activity Round 2)
- [ ] Built a `while`-loop validator without an infinite loop (Bonus)

**Understanding:**
- [ ] Can articulate the bouncer pattern in their own words
- [ ] Knows `.isdigit()` rejects negatives and decimals

### Students to Watch

**Need Extra Support:**
- Stuck on nested indentation, or converting before checking — pair-share a working example
- Kept hitting infinite loops — reteach the "ask again inside the loop" line 1:1

**Ready for More Challenge:**
- Finished the Bonus fast — point at homework ⭐⭐⭐ (4-digit `len()` check) and suggest they add a range check (1-120) too

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Program stuck repeating forever | Infinite loop — the inner `input()` is missing. Hit ⏹, add `age_text = input(...)` inside the loop |
| `AttributeError: 'int' object has no attribute 'isdigit'` | They called `.isdigit()` on a number, not text. Check the TEXT before converting |
| `SyntaxError` on `if age = 12` | Single `=` used for comparison; needs `==` |
| `.isdigit()` returns False for "3.5" or "-5" and students think it's broken | It's correct — `.isdigit()` only accepts non-negative whole numbers. Frame as a known limit |
| Class races ahead of the crash demo | Let them try typing "banana" themselves — the live crash is more powerful when they cause it |
| Zoom/Trinket technical issues | Same playbook as always: repl.it backup, private-chat triage, spare class login |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Crash impact:** did the `ValueError` demo land? Did students grasp "convert only after checking"?
- **Loop mastery:** how many built the `while` validator unaided? (This predicts calculator readiness.)
- **Infinite-loop count:** who hit one, and did they self-diagnose the missing inner `input()`?
- **Calculator momentum:** are students excited to build next week? Note any who need a Week 2-4 refresher first.

---

## 💭 Remember

**The crash is the lesson.**

Students won't value input checking until they've felt a program die on them. Show the `ValueError` live, let it sting, then hand them the bouncer. When they realise their program can now shrug off "banana" without breaking, they'll feel like real engineers — because that's exactly the skill they just learned.

Everything this term has been building to next week's calculator. Today you handed them the tool that makes it "smart." 🛡️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
