# Year 2, Lesson 6: Project Build I — Smart Calculator Core 🧮⚡

## Teacher's Guide

**Course:** Python Accelerated (Year 2, Term 1)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This is the payoff lesson. For five weeks students collected skills in isolation — print, input, data types, operators, f-strings, conditionals. Today they **assemble them into one real program**: a working menu-driven calculator. It is the CORE that Week 7 upgrades ("Calculator Deluxe") and Week 8 showcases.

The session is a **live build-along** in five clear stages. Students type alongside you, run after every stage, and use Zoom reactions as checkpoints. Your job is pacing and correctness, not lecturing — the code is the content.

Three core goals:

1. **Every student leaves with a running calculator** saved as `Y2-T1-W6-Calculator`
2. **Cement the string-vs-number distinction** — the make-or-break bug is comparing `choice` to a number instead of a string
3. **Build project pride** — this is their first "real app". Name it, save it, feel it.

> ⚠️ **CONTINUITY IS CRITICAL.** Week 7 extends THIS EXACT file. The structure below (menu 1-4, variables `choice`/`num1`/`num2`/`result`, `choice` compared as a **string**) must be identical for every student so next week's upgrade instructions apply cleanly. Do not improvise different variable names live.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Combine `print`, `input`, `float()`, operators, f-strings, and `if/elif/else` in one program
2. Build a numbered menu and capture the user's choice with `input()`
3. Explain why menu comparisons use strings (`choice == "1"`) and convert numbers with `float()`
4. Select and run the correct operation using `if/elif/else`
5. Format a numeric answer to 2 decimal places with an f-string

### Key Success Metrics

- [ ] Every student's calculator runs end to end and gives a correct answer
- [ ] Every student has saved a Trinket named `Y2-T1-W6-Calculator`
- [ ] Students can explain why `choice == "1"` needs quotes
- [ ] Students leave knowing their calculator only does ONE sum (the Week 7 hook)

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share; teacher's Trinket visible throughout
- Students' Trinket accounts
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Type the full solution yourself once** in a fresh Trinket named `Y2-T1-W6-Calculator` — you'll build it live and it must be flawless
2. **Test each example run** (add 15+7=22.00, multiply 8×6.5=52.00, divide 100/8=12.50) so your live demos match the lesson
3. **Rehearse the string-vs-number bug** — you'll deliberately show `choice == 1` failing
4. **Have the divide-by-zero crash ready** as the Week 7 teaser (option 4, second number 0 → ZeroDivisionError)
5. **Prepare a "catch-up" pasteable** of each stage's code in case someone falls behind — paste into Zoom chat, don't stall the class

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + "today we build the project" + the plan
⏱️  8-15 min  → Stage 1 (title) + Stage 2 (menu) — build live
⏱️ 15-25 min  → Stage 3 (choice) + Stage 4 (float numbers) — build live
⏱️ 25-45 min  → Stage 5 (if/elif/else brain) — the heart of the lesson
⏱️ 45-55 min  → Full run-through + example runs + save the Trinket
⏱️ 55-65 min  → Common mistakes (esp. string vs number) + divide-by-zero teaser
⏱️ 65-75 min  → Homework brief + Week 7 "Deluxe" teaser + wrap-up
```

**Flexible timing:** Stage 5 is the priority — protect its 20 minutes. If Stages 1-2 run long, paste the menu code in chat and move on; the menu is just `print()` they already know.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + The Plan (8 minutes)

Open with energy — this is the moment the term has been building to.

> "For five weeks you've been collecting superpowers. Today we snap them ALL together and build your first real project — a calculator you can actually use. By the end of this class you'll say the four best words in coding: 'I built that.'"

Screen-share the **skills-to-calculator table** from the lesson. Point at each week and say where it lands. This shows students the calculator isn't new material — it's assembly.

Then the non-negotiable setup instruction:

> "Create a NEW Trinket. Name it exactly Y2-T1-W6-Calculator. Type it in the chat when you've done it. This is the file you KEEP — next week we upgrade this very program."

#### Teaching Tips

- **Don't skip the naming.** Week 7 assumes this file exists. Verify names in the chat before building.
- Keep the intro under 8 minutes. They're keen to build — let them.

---

### Part 2: Stages 1 & 2 — Title and Menu (7 minutes)

Build live. Type the banner, run it, then the menu, run it again. Narrate as you go.

> "Watch — `'=' * 40` gives us forty equals signs. Same number on both lines so the borders line up. Now the menu: four options, numbered, with a little indent so it looks tidy."

After the menu runs, quick chat checkpoint: "How many options?" (4). Thumbs up and move on.

#### Teaching Tips

- This is revision (Week 4 `"=" *` and `print`). Move briskly — the real work is Stage 5.
- If a student's banner looks ragged, it's almost always mismatched widths — flag it now as it previews Common Mistake 4.

---

### Part 3: Stages 3 & 4 — Choice and Numbers (10 minutes)

Add the `choice` input, run (it'll ask then finish — that's fine). Then the two `float()` inputs.

**Plant the seed that pays off in Stage 5:**

> "Type this with me: `choice = input(...)`. Now — REMEMBER THIS — `input()` always hands back TEXT. So `choice` is the string `\"1\"`, not the number 1. Hold that thought; it's about to matter enormously."

For the numbers, ask the class WHY we wrap in `float()`:

> "Why `float()` and not just `input()`? ... Right — because text can't do maths. And why `float` not `int`? Because someone might add 3.5 and 2.25. A calculator handles decimals."

#### Teaching Tips

- **`choice` stays a string on purpose.** Do NOT convert `choice` with `int()` — the lesson (and Week 7) compares it as a string. Converting it here breaks the whole design and the Week 7 continuity.
- `num1`/`num2` DO get `float()`. Make the contrast explicit: choice = string, numbers = float.

---

### Part 4: Stage 5 — The Brain (20 minutes) ⭐ THE HEART

This is where the lesson lives. Build the `if/elif/else` branch by branch, running after you add the `else`.

Type the `if choice == "1":` branch first and narrate the quotes:

> "Look CAREFULLY. I'm writing `choice == \"1\"` with QUOTES. Why quotes? Because `choice` is text! If I wrote `choice == 1` with no quotes, Python compares text to a number — they're never equal — and my calculator would ALWAYS fall through to the else. This one detail is the difference between a working calculator and a broken one."

Then demonstrate the bug deliberately (see Assessment). Fix it, then add the other three branches and the `else`.

Explain the three lines of a branch:
1. the condition (`if`/`elif`)
2. `result = ...` (do the maths, store it)
3. the f-string print with `:.2f`

**Then the full run.** Do all three example runs live so students see matching output:

```
Enter a choice (1-4): 1
Enter the first number: 15
Enter the second number: 7
15.0 + 7.0 = 22.00
```

Point out the `15.0` — `float()` shows the `.0`. Reassure them that's normal and correct (Week 7's formatting polish can tidy it if desired).

#### Teaching Tips

- **Build branch by branch, don't paste the whole block.** Students who fall behind can't recover from a wall of pasted code; incremental typing keeps everyone together.
- **Indentation is the silent killer.** Each branch's `result` and `print` are indented 4 spaces. Trinket auto-indents after the colon — point this out so nobody fights it.
- **Celebrate the first correct answer loudly.** "You just built a working calculator. Screenshot that." Then: SAVE the Trinket.

---

### Part 5: Common Mistakes + Divide-by-Zero Teaser (10 minutes)

Run through the four common mistakes from the lesson, live-coding each so students see the real behaviour:

1. **`choice == 1` without quotes** → always hits `else`. THE big one. Show it fail, show it fixed.
2. **Forgetting `float()`** → `15` + `7` glues to `157`. Show the surprise.
3. **Indentation slip** → `IndentationError`. Quick.
4. **Mismatched banner widths** → cosmetic but sloppy. Quick.

**Then the Week 7 hook — the divide-by-zero crash:**

> "Watch this. Option 4, divide. First number 10. Second number... 0."

```
ZeroDivisionError: float division by zero
```

> "💥 CRASH. A real calculator should NEVER crash. Fixing that — plus letting you do many sums in a row — is exactly what next week's 'Calculator Deluxe' is about. Don't fix it today; bring it next week."

Leaving the crash unfixed is intentional — it's the motivational bridge to Week 7.

---

### Part 6: Homework + Wrap-Up (10 minutes)

#### Homework: Add Your Own Operation (5 minutes)

Walk through it: open the SAME `Y2-T1-W6-Calculator` file, add a menu line, add a matching `elif`. Show the power example:

```python
elif choice == "5":
    result = num1 ** num2
    print(f"{num1} ^ {num2} = {result:.2f}")
```

Stress the quotes again: `choice == "5"`. Point out the tiers (1 op / 2 ops / op + friendly message).

> "This homework is you practising the exact skill you'll use constantly next week — adding new modes to the calculator. It's a warm-up for Deluxe."

#### Wrap-Up (3 minutes)

> "Five weeks of skills, one real program. You built a calculator today. Next week we make it professional — it'll loop, do percentages, and never crash. Save your Trinket, and I'll see you there."

Stay on the call 2-3 minutes for questions and to help anyone whose program isn't running.

---

## 🎓 Assessment & Notes

### The Deliberate Bug Demo

The single most valuable teaching moment is showing `choice == 1` (no quotes) failing:

```python
choice = input("Enter a choice (1-4): ")
if choice == 1:            # BUG: choice is text, 1 is a number
    result = num1 + num2
    print(...)
else:
    print("❌ That is not a valid choice...")
```

Run it, pick 1, and watch it wrongly print the error. Ask: "It IS a valid choice — why did it complain?" Let them reason it out, then fix with quotes. This lands the string-vs-number concept far better than telling.

### During Class, Observe:

**Technical Skills:**
- [ ] Built each stage and ran successfully
- [ ] Used `float()` on the numbers (not on `choice`)
- [ ] Compared `choice` as a string with quotes
- [ ] Got a correct, `:.2f`-formatted answer
- [ ] Saved the Trinket with the correct name

**Engagement:**
- [ ] Kept pace with the live build (thumbs up at each stage)
- [ ] Answered the chat checkpoints
- [ ] Reacted to the divide-by-zero crash (curiosity for Week 7)

### Students to Watch

**Need Extra Support:**
- Fell behind during Stage 5 — paste the stage code privately; pair them for homework
- `else`-always-fires symptom — they've compared `choice` to a number; check for missing quotes

**Ready for More Challenge:**
- Finished early — point them at the ⭐⭐⭐ homework and suggest adding TWO operations, or a friendly result message

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Calculator always prints "not a valid choice" | `choice` compared to a number — must be `choice == "1"` with quotes |
| `157` instead of `22` when adding | Missing `float()` — inputs are still text being glued together |
| `IndentationError: expected an indented block` | The `result`/`print` lines under a branch aren't indented (4 spaces) |
| `ValueError: could not convert string to float` | User typed words, not a number — expected today; note it's fixed in Week 7 with input validation |
| `ZeroDivisionError` on divide | Expected! This is the Week 7 teaser — do NOT fix it today |
| Banner borders don't line up | Mismatched `"=" * N` widths — use the same number on both lines |
| Student didn't save / lost the file | Have them recreate from the full solution block; stress the `Y2-T1-W6-Calculator` name for next week |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Completion:** how many students have a running, correctly-named calculator? (Anyone missing needs a nudge before Week 7 — the whole next lesson depends on this file.)
- **The string-vs-number concept:** did it land? If shaky, plan a 2-minute recap at the start of Week 7.
- **Pacing:** did Stage 5 get its full time, or did the menu stages eat it? Adjust the paste-ahead strategy.
- **Excitement:** did the divide-by-zero crash hook them for Deluxe?

---

## 💭 Remember

**Today is about assembly and pride, not new theory.**

Nothing today is a brand-new concept — it's five weeks of skills clicking together. The magic is the moment a student runs their calculator and it works. Protect that moment: keep the pace steady, build in stages, and make sure EVERY student leaves with a saved, working `Y2-T1-W6-Calculator`. Next week's Deluxe lesson is built directly on top of it.

**They just built their first real program. Let them feel it.** 🧮⚡

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
