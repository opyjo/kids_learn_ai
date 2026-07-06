# Year 2, Lesson 7: Project Build II — Calculator Deluxe 🧮✨

## Teacher's Guide

**Course:** Python Accelerated (Year 2, Term 1)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 7 of 8

---

## 📋 Lesson Overview

### Purpose

This is the second and final build week of the term project. Students take the working Smart Calculator Core they built in Week 6 and upgrade it into a professional, crash-proof program. This lesson has three core goals:

1. **Ship a finished project** — by the end, every student has a complete calculator they'll demo next week
2. **Introduce two "grown-up" reliability skills** — the `while`-loop menu pattern (which they'll reuse in every game next term) and `try`/`except` error handling
3. **Instil the "never crash" mindset** — the difference between beginner code and real software is graceful handling of the unexpected

This is a **live build-along**, not a lecture. You code on shared screen, students follow stage by stage in their own copy. Keep everyone synchronised with thumbs-up checkpoints after each of the four stages.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Wrap a program in a `while` loop controlled by a boolean flag (`running`) and exit it cleanly with a Quit option
2. Guard a division against a zero divisor with an `if` check
3. Build percentage and tip-splitter features using Week 3 maths and Week 4 formatting
4. Use `try` / `except ValueError` to catch bad numeric input without crashing
5. Explain WHY `try/except` is used for float input instead of `.isdigit()` (decimals)

### Key Success Metrics

- [ ] Every student's calculator loops and quits cleanly (Stage 1)
- [ ] Every student's calculator survives divide-by-zero (Stage 2)
- [ ] Most students add at least the percentage mode (Stage 3)
- [ ] Every student's calculator survives "banana" input (Stage 4)
- [ ] Students leave with a demo-ready program saved as `Y2-T1-W7-CalculatorDeluxe`

### Materials Needed

- Computer with internet, Zoom with screen share
- Students' saved `Y2-T1-W6-Calculator` Trinket from last week (CRITICAL — remind them in advance)
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Send an advance reminder** (day before if possible): "Bring your Week 6 calculator Trinket — we upgrade it live!" Have a spare copy of the Week 6 solution ready to paste in chat for anyone who lost theirs.
2. **Test Zoom and Trinket** — confirm code runs, screen share works
3. **Pre-build the deluxe calculator yourself** and run every branch (add, divide-by-zero, banana, percentage, tip, quit) so the demos are smooth
4. **Rehearse the `try`/`except` explanation** — the trapeze-net analogy is the anchor; have it ready
5. **Prepare the "Save a copy" instruction** — students should copy W6 into a new `Y2-T1-W7-CalculatorDeluxe` trinket so the original is preserved

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + "what's wrong with our calculator?" (the 3 annoyances)
⏱️  8-15 min  → Save-a-copy setup + Stage 1: the play-again while loop
⏱️ 15-25 min  → Stage 2: divide-by-zero guard
⏱️ 25-40 min  → Stage 3: percentage & tip modes
⏱️ 40-55 min  → Stage 4: try/except safety net (the big new concept)
⏱️ 55-65 min  → Full program run-through + common mistakes
⏱️ 65-75 min  → Homework (make it showcase-ready) + Week 8 teaser + wrap-up
```

**Flexible timing:** Stage 4 (`try`/`except`) is the hardest — protect its 15 minutes. If time is tight, the tip splitter (Stage 3) is the most cuttable feature; percentage mode alone satisfies the "new mode" objective.

---

## 📚 Detailed Teaching Guide

### Part 1: What's Wrong With Our Calculator? (8 minutes)

Open by demoing the Week 6 calculator's three weaknesses live — students love seeing crashes on purpose.

> "Last week you built a real calculator. I'm proud of it. But watch this..." *[divide by zero → ZeroDivisionError]* "...KABOOM. And this..." *[type 'banana' → ValueError]* "...KABOOM again. And even when it works, it does ONE sum and stops. Today we fix all three. We make it BULLETPROOF."

Frame the three annoyances (loop, divide-by-zero, bad input) using the table in the lesson. This gives students the "why" before the "how".

#### Teaching Tips

- **Crash on purpose, cheerfully.** Seeing the red error demystifies it. "That's the enemy. By the end of today, you defeat it."
- **Set the stakes:** "By the end, this could genuinely go in an app store." 11-13s respond to real-world framing.

---

### Part 2: Save-a-Copy + Stage 1 — The Play-Again Loop (7 minutes)

**First, protect their Week 6 work:**

> "Open your Y2-T1-W6-Calculator. Now File → Save a copy, and name it Y2-T1-W7-CalculatorDeluxe. We upgrade the COPY — your original stays safe. Anyone who lost last week's file, shout in the chat — I'll paste it."

**Then the while loop.** This is a big conceptual step: everything they wrote now lives *inside* a loop. Demonstrate the indentation carefully on screen — select the whole body and indent it as one block.

> "We wrap the whole calculator in a `while` loop so it repeats. `running = True` is an on-switch. `while running:` means 'keep going while the switch is on'. When they pick Quit, we flip it off with `running = False`."

**The indentation is the #1 stumbling block here.** Go slow. Show that the menu, the input, and the maths must ALL be indented under `while running:`.

#### Teaching Tips

- **Name the pattern:** "This is a flag or sentinel. You will use this EXACT pattern in every game next term." Plants a seed for Term 2.
- **Escaping a forever loop:** show them the Stop button in Trinket now, before someone accidentally makes an infinite loop and panics.

---

### Part 3: Stage 2 — Divide-by-Zero Guard (10 minutes)

Show the crash first (`print(10 / 0)` → `ZeroDivisionError`), then the fix.

> "Maths says you can't divide by zero, and Python agrees — it crashes. So BEFORE we divide, we check: `if num2 == 0:` warn them; `else:` do the division. That's called a guard — we guard the dangerous operation."

Connect it back to Week 5: "This is just an `if`/`else` — a skill you already have. We're using it to protect our program."

#### Teaching Tips

- **Reinforce guarding as a habit:** later, in the tip splitter, the same guard reappears (`if people == 0:`). Point it out: "Smart programmers guard EVERY division."

---

### Part 4: Stage 3 — Percentage & Tip Modes (15 minutes)

Two new menu options. This is mostly consolidation — students apply Week 3 maths and Week 4 formatting to new branches. It builds momentum before the harder Stage 4.

> "Let's make it useful for real life. Option 5: percentages — 'what's 10% of 200?'. Option 6: a tip splitter for when you're out with friends."

Walk through the percentage maths explicitly: `amount * percent / 100`. Do a worked example live (10% of 200 = 20).

For the tip splitter, highlight the reappearing divide-by-zero guard (`if people == 0:`).

#### Teaching Tips

- **Let them pick real numbers:** "How much is a 15% tip on a ₦2000 meal split 3 ways?" Real, relatable maths keeps engagement high.
- **Menu tidiness:** remind them to add the new options to the printed menu AND the `if/elif` — a common omission is adding the branch but not the menu line (or vice versa).

---

### Part 5: Stage 4 — The Safety Net: try / except (15 minutes)

**This is the lesson's big new concept. Protect its time.**

Lead with the trapeze-net analogy from the lesson:

> "A trapeze artist does risky things — but there's a net underneath. If they fall, the net catches them. `try`/`except` is a net for your code. `try:` means 'attempt this risky thing'. `except ValueError:` means 'but if it goes wrong THIS way, do this instead of crashing'."

Connect `ValueError` back to Week 2: "Remember `float('banana')`? That threw a `ValueError`. Now we CATCH it."

**Critical teaching point — why not `.isdigit()`?** Students learned `.isdigit()` in Week 5. Pre-empt the question:

> "In Week 5 we used `.isdigit()` — great for whole numbers. But `.isdigit()` says False for `3.5`! Our calculator needs decimals. So we use the grown-up tool: `try`/`except` lets people type `3.5`, and only complains if it's truly not a number."

**Watch the scope carefully.** The most common bug (Common Mistake 3 in the lesson): students put `float()` in the `try` but the maths outside it, so a caught error leaves `num1` undefined and the next line crashes anyway. Show the correct version: risky code AND dependent code both inside the `try`.

#### Teaching Tips

- **Keep except specific:** teach `except ValueError:` (not bare `except:`). It's a good habit and matches the actual error.
- **Test it together:** everyone types "banana" and watches the calm message. The "no crash!" moment is genuinely delightful — let them celebrate it.
- **Don't over-explain exceptions.** They don't need the full exception hierarchy today. "A net that catches a specific kind of fall" is enough.

---

### Part 6: Full Run-Through + Common Mistakes (10 minutes)

Paste/assemble the complete program and run every path live: add, divide-by-zero, banana, percentage, tip, invalid choice, quit. Then walk the four Common Mistakes from the lesson — especially the forever loop (forgetting `running = False`) and the `try` scope bug.

> "Run it top to bottom. Try to break it. Divide by zero — handled. Type banana — handled. Pick 9 — handled. THAT is a program that never crashes."

---

### Part 7: Homework + Wrap-Up (10 minutes)

Homework is explicitly **showcase prep**: make it bulletproof + one personal touch.

> "Next week is your big demo. This week: make sure it never crashes, and add ONE personal touch — a themed banner, an extra operation, or a history list for the brave. Bring THIS exact Trinket next week — you'll run it live."

Preview Week 8: the showcase and celebration. Build excitement. Paste submission instructions in chat.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Correctly wrapped the calculator in a `while` loop with proper indentation
- [ ] Added a working Quit option that sets `running = False`
- [ ] Guarded divide-by-zero
- [ ] Added at least the percentage mode
- [ ] Used `try`/`except` with the maths correctly inside the `try`

**Understanding:**
- [ ] Can explain what the `running` flag does
- [ ] Can explain why `try`/`except` beats `.isdigit()` for decimals

### Students to Watch

**Need Extra Support:**
- Indentation errors when wrapping code in the loop — pair them up or share screen for a 1:1 fix
- Confused by `try`/`except` scope — the undefined-variable crash is subtle; check their code directly

**Ready for More Challenge:**
- Point them at the ⭐⭐⭐ homework: a `history` list appended to each calculation and printed on quit — a great stretch that previews Term 4 (lists) and Term 2 (loops)

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student lost their Week 6 file | Paste the Week 6 solution code in the chat; they start from there |
| Infinite loop (forgot `running = False`) | Show the Stop/re-run button in Trinket; then find the missing flag flip together |
| `IndentationError` after adding the loop | Their menu/maths isn't indented under `while`; select the block and indent it as one unit |
| `try`/`except` "still crashes" | The dependent maths is outside the `try` — move it inside (Common Mistake 3) |
| Calculator always says "invalid choice" | They're comparing `choice == 7` (number) instead of `choice == "7"` (string) |
| Percentage gives a weird answer | Check operator order: `amount * percent / 100`, not `amount * (percent / 100)` mistakes — both work, but watch for missing `/ 100` |
| Running behind schedule | Cut the tip splitter (Stage 3b); percentage mode alone meets the objective |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Did every student finish a working, crash-proof calculator?** Those who didn't need a catch-up before the Week 8 showcase — nobody should demo a broken program.
- **How did `try`/`except` land?** It's the term's most abstract concept. If several struggled, plan a 2-minute recap at the start of Week 8's polish pit-stop.
- **Who's ready to demo confidently vs who's nervous?** Note the shy students now so you can gently prep them for next week's showcase.
- **Timing:** did Stage 4 get its full time? Adjust if the earlier stages ran long.

---

## 💭 Remember

**This is the moment the project becomes real.**

A calculator that crashes is a toy; a calculator that never crashes is software. When students type "banana" and see a calm, friendly message instead of a red error, they cross a line — from "someone learning to code" to "someone who builds reliable programs." Celebrate that crossing. Next week they show it to the world.

**You've got this!** 🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
