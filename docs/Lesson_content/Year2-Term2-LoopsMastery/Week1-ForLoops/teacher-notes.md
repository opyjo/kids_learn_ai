# Year 2, Lesson 1: For Loops Reloaded 🔁

## Teacher's Guide

**Course:** Loops & Logic Mastery (Year 2, Term 2)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This is the opening class of Term 2. Students already met `for` loops and `range()` in Year 1, but only lightly — most treat `range(n)` as a magic incantation without understanding start, stop, and step. This lesson turns fuzzy familiarity into genuine control. Three core goals:

1. **Make `range()` transparent** — students should be able to predict the output of any `range(start, stop, step)` before running it, including counting down
2. **Connect loops to the term project** — every game loops constantly; framing loops as "the heartbeat of the arcade" gives this abstract tool an exciting purpose
3. **Build fluency through prediction** — the "Loop Lab" predict-then-run format catches misconceptions (especially the off-by-one "stops before stop" rule) out loud, where the whole class learns from them

Keep energy high and lead with the arcade payoff. This cohort is motivated by *building games*, and loops are the first brick.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what a `for` loop does and identify the loop variable, `range()`, colon, and indented body
2. Predict the output of `range(stop)`, `range(start, stop)`, and `range(start, stop, step)`
3. Count downwards using a negative step, and count in jumps of 2s, 5s, and 10s
4. Write a loop that prints a times table (×1 to ×12) and a countdown
5. Loop over the items of a list using `for item in my_list:`

### Key Success Metrics

- [ ] Every student runs a working `for` loop in the first 20 minutes
- [ ] Most students correctly predict `range(1, 6)` and `range(2, 11, 2)` in the Loop Lab
- [ ] Every student produces a times table from a loop (Station 2)
- [ ] Students can state the "range stops BEFORE the stop number" rule in their own words

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and reactions enabled
- Trinket accounts (from Year 1/Term 1) — new-joiner sign-up steps ready
- This teaching guide open during class
- Class WhatsApp/email thread for sharing Trinket links
- Optional: a visible number line or the `list(range(...))` trick ready to demonstrate

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-type the Loop Lab snippets** into a Trinket so you can reveal outputs instantly during predict-then-run
3. **Rehearse the countdown trace** — `range(3, 0, -1)` producing `3, 2, 1` (NOT `0`) is the trickiest idea today; be ready to walk it slowly
4. **Have the arcade roadmap ready** — the Week 1-8 table is your motivational hook; screen-share or paste it
5. **Prepare the `list(range(...))` demo** — showing `[1, 2, 3, 4, 5]` makes the abstract range concrete
6. **Set the Trinket naming reminder** — today's is `Y2-T2-W1-ForLoops`; portfolio habit continues

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome to Term 2 + Arcade roadmap + BrightByte hook
⏱️  8-18 min  → What is a for loop (recap) + anatomy walkthrough
⏱️ 18-33 min  → Taking control of range() (3 settings + cheat sheet)
⏱️ 33-43 min  → Counting DOWN + times tables + patterns
⏱️ 43-58 min  → LOOP LAB (3 predict-then-run stations)
⏱️ 58-68 min  → Looping over lists + common mistakes
⏱️ 68-75 min  → Homework + Week 2 teaser + wrap-up
```

**Flexible timing:** The Loop Lab is the heart of the lesson — protect its 15 minutes. If the range() walkthrough runs long, trim the patterns section (Part 6), which is revisited in Week 4.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome to Term 2 + Roadmap (8 minutes)

Greet returning students by name. Open with the payoff, not the syntax:

> "Last term you built a Smart Calculator. This term? We build an ARCADE — real games, with a menu, that you actually play. And every single game ever made has one thing in common: it LOOPS. So today we reload the most important tool you own — the for loop."

Show the Week 1-8 arcade table. Land the Week 8 prize:

> "Finish this term and you earn the Python Pro Badge. That's not a beginner badge. That's proof you can build things that move."

#### Teaching Tips

- **Sell the arcade first, syntax second.** Motivation is your biggest lever with this age group.
- **Call back to Term 1** to signal continuity — they finished a real project, they can do this.

---

### Part 2: What Is a For Loop? (10 minutes)

Screen-share the three-line "Let's go!" example. Ask the class to predict the output in chat *before* you run it.

> "Two lines of code, three lines of output. Now — what if I wanted it a hundred times? I change ONE number. That's the power."

Walk the anatomy table live, pointing at each piece: `for`, the loop variable `i`, `range(3)`, the colon, the indented body.

> "The loop variable is a little box. First time round it holds 0, then 1, then 2. The computer counts FOR you — that's the whole point."

#### Teaching Tips

- **Emphasise the loop variable changes each pass.** Many students think `i` is fixed. Print `i` itself (`for i in range(3): print(i)`) so they SEE it change.
- **Recall, don't re-teach the basics** — they've seen this. Move briskly to range() control, which is the new material.

---

### Part 3: Taking Control of range() (15 minutes)

This is the core teaching block. Do all three settings live, and after EACH one, use the `list(range(...))` trick to reveal the numbers:

```python
print(list(range(5)))       # [0, 1, 2, 3, 4]
print(list(range(1, 6)))    # [1, 2, 3, 4, 5]
print(list(range(2, 11, 2))) # [2, 4, 6, 8, 10]
```

Hammer the golden rule every single time:

> "range STOPS BEFORE the stop number. `range(5)` does NOT include 5. `range(1, 6)` stops at 5, not 6. Say it with me — stops before!"

Then reveal the cheat sheet table. This is the reference students will lean on all lesson.

#### Teaching Tips

- **The off-by-one rule is the #1 misconception all term.** Over-teach it now — it prevents dozens of bugs in Weeks 2-7.
- **Use `list(range(...))` relentlessly** — it converts an abstract "range object" into visible numbers and makes prediction possible.

---

### Part 4: Counting Down + Times Tables + Patterns (10 minutes)

**Counting down** is the trickiest idea today. Trace `range(3, 0, -1)` on screen, out loud, one pass at a time:

> "Start at 3. Step is minus one, so next is 2, then 1. Stop BEFORE 0 — so 0 never prints. We get 3, 2, 1... blast off!"

Then show the times-table loop and let it sink in — this is the moment loops feel genuinely useful:

> "Twelve lines of a times table... from ONE loop. This is why programmers love loops."

Show the star-triangle pattern briefly to preview Week 4, but don't dwell.

#### Teaching Tips

- **Demonstrate the "nothing happens" trap** — run `range(5, 0)` with no negative step so they SEE the empty output. It makes the negative-step rule stick.
- **Trace slowly.** Counting down is where confident students trip. Narrate every pass.

---

### Part 5: THE LOOP LAB (15 minutes)

The centrepiece. The rule: **predict in the Zoom chat BEFORE running.** Prediction is where learning happens; running just confirms.

#### Station 1 — Predict the Range (⭐, ~4 min)
Students type predictions for `range(4)`, `range(1, 6)`, `range(2, 11, 2)` before you reveal. Celebrate correct predictions; when someone's wrong, ask the class WHY — usually the off-by-one rule.

#### Station 2 — Times Table Machine (⭐⭐, ~5 min)
Students set `number = 6` and loop `range(1, 13)`. Watch for anyone using `range(1, 12)` — a perfect teachable moment for the "stops before" rule (they'll be missing ×12).

#### Station 3 — Countdown Launcher (⭐⭐⭐, ~5 min)
`range(5, 0, -1)` then `print("Blast off!")`. Expect the negative-step omission — if more than a few get an empty output, live-code it together.

#### Bonus Lab (~fast finishers)
Loop over a list of favourite games. Invite one or two to paste output in the chat.

#### Teaching Tips

- **No penalty for wrong predictions** — a wrong prediction that gets explained teaches the whole class more than a silent correct one.
- **Log quietly** who nails Station 1 predictions vs who needs the reveal — your fluency map for the term.

---

### Part 6: Lists + Common Mistakes (10 minutes)

Show `for game in games:` and stress there's **no `range()`** — the loop variable becomes each item directly. Contrast the two loop styles with the table.

Then run the four common mistakes LIVE so students see the real error text:

1. `range(1, 10)` stopping at 9 (off-by-one)
2. Missing colon → `SyntaxError: expected ':'`
3. Counting down without `-1` → empty output
4. No indent → `IndentationError: expected an indented block`

> "These four errors will visit you all term. Recognise them on sight and you'll fix them in seconds."

#### Teaching Tips

- **Let the errors happen on screen.** Reading real Python error messages is a skill; don't paraphrase them.

---

### Part 7: Homework + Wrap-Up (7 minutes)

Walk through the **Times Table Machine** homework and the example run. Point out the tiers:

> "⭐ is a working times table. ⭐⭐ makes it beautiful with an f-string and a border. ⭐⭐⭐ adds a countdown OR turns you into a Loop Artist drawing patterns. Any tier counts as done."

Remind them: `int()` on the input (from last term) so the maths works. Set the due date and paste submission instructions.

#### Wrap-Up

> "Today you made the computer count, chant, and blast off — all with loops. Next week: the WHILE loop, and your very first game loop. The arcade's heartbeat starts then. See you!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Predicted `range()` outputs correctly in the Loop Lab (Station 1)
- [ ] Built a times table with `range(1, 13)` (Station 2)
- [ ] Used a negative step to count down (Station 3)
- [ ] Recognised the "stops before stop" rule unprompted

**Engagement:**
- [ ] Posted predictions in chat before running
- [ ] Used Zoom reactions when predictions matched
- [ ] Excited about the arcade / Python Pro Badge

### Students to Watch

**Need Extra Support:**
- Repeatedly off-by-one (uses `range(1, 12)` for a 12-row table) — reinforce the stop rule 1:1
- Empty output on countdowns — hasn't internalised the negative step

**Ready for More Challenge:**
- Finished all stations early — point them at the ⭐⭐⭐ Loop Artist tier and hint at nested patterns (Week 4 preview)

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Class treats `range()` as magic | Use `list(range(...))` every time to reveal the actual numbers; make them predict first |
| Off-by-one confusion (missing last number) | Repeat "stops BEFORE the stop"; show `range(1, 11)` gives 1-10, not 1-11 |
| Countdown produces no output | They forgot the negative step; run `range(5, 0)` vs `range(5, 0, -1)` side by side |
| `IndentationError` / `SyntaxError` on the for line | Check the colon and that the body is indented; these are the two most common today |
| Loop Lab predictions too easy | Add tougher ranges: `range(10, 0, -2)` or `range(0, 100, 25)` |
| Trinket login trouble | Password reset via private chat; spare class account as last resort |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Fluency map:** who predicts ranges confidently vs who needs the reveal? (Calibrates pace for the loop-heavy weeks ahead.)
- **Off-by-one watch list:** who still misses the last number? They'll need reminders in Weeks 2-4.
- **Countdown grasp:** did the negative-step idea land, or does it need revisiting next week?
- **Motivation check:** did the arcade framing land? Which games are they most excited to build?

---

## 💭 Remember

**The goal today is control, not just familiarity.**

Students met loops in Year 1, but this lesson is where `range()` stops being magic and becomes a dial they can turn deliberately. If a student can look at `range(start, stop, step)` and predict the output — up, down, or in jumps — they have what they need for the entire term. Everything in the arcade loops; today they learned to conduct the loop.

**Reloaded and ready — let's build an arcade!** 🔁🕹️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
