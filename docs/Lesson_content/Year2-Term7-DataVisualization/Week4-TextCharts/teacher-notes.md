# Year 2, Lesson 4: Text Bar Charts 📊🟦

## Teacher's Guide

**Course:** Data & Visualization (Year 2, Term 7)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

This is the pivot of Term 7: students stop *analysing* data (Weeks 1-3 — parsing CSV, counting, computing stats) and start *visualising* it. It's their first data visualisation of the whole course, and it's built entirely from text characters — no matplotlib, no libraries, nothing that Trinket can't run. The session has three core goals:

1. **Land the "why" of visualisation** — a chart lets a human eye spot in one glance what raw numbers hide. This is the emotional hook and the reason the whole term exists.
2. **Master the mechanics** — `"█" * value` for the bar, f-string padding for alignment, a loop over a dict for the whole chart.
3. **Teach scaling honestly** — real data has big numbers; students must divide by a scale (and understand `int(round(...))`) so bars fit the screen without lying about the data.

Everything here feeds directly into the Week 7 Data Story project, where a text chart will be a required element.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Draw a single bar from a value using `"█" * value`
2. Explain why the multiplier must be an `int`, and fix a float multiplier with `int(round(...))`
3. Align labels and print trailing values using f-string padding (`f"{label:<10}"`)
4. Loop over a dict of category → count to render a complete labelled chart
5. Compute a scale from the maximum value and draw a scaled chart that fits the screen

### Key Success Metrics

- [ ] Every student prints at least one bar in the first 20 minutes
- [ ] Every student completes Chart Studio Levels 1 and 2; most reach Level 3 (scaling)
- [ ] Students can answer the "30 units, 1 block = 10" chat question correctly (3 blocks)
- [ ] Students leave able to explain WHY we scale, not just how

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and reactions enabled
- Students' Trinket accounts; today's Trinket name: `Y2-T7-W4-TextCharts`
- The `█` block character ready to copy-paste into chat (it isn't on keyboards!)
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, and confirm `"█" * 5` renders cleanly in Trinket's output (font width matters).
2. **Paste the block character** into a note you can drop into Zoom chat instantly — this single step prevents the biggest time-sink of the lesson.
3. **Have a fallback character ready** (`*` or `#`) for any student whose setup mangles `█`.
4. **Re-read Week 3** — students arrive with dicts of category → count from the counting lessons; use their own vocabulary ("remember the tally dict?").
5. **Prepare the scaling demo** — decide whether to screen-share the `views` example or build it live (live is more powerful here).
6. **Warm up the "why"** — have the fruit numbers vs. fruit chart ready side by side; the instant-recognition moment is your best hook.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Hook: numbers vs. picture (the "why")
⏱️  8-20 min  → Part 2 & 3: one bar + labels/padding
⏱️ 20-35 min  → Part 4: loop a dict into a whole chart (Chart Studio L1-L2)
⏱️ 35-52 min  → Part 5: scaling big data (Chart Studio L3)
⏱️ 52-62 min  → Common mistakes (live-crash the float error)
⏱️ 62-75 min  → Homework brief + Week 5 turtle teaser + wrap-up
```

**Flexible timing:** If padding/alignment clicks quickly, spend the extra minutes on scaling — it's the hardest and most important idea. If the block character causes chaos, switch the whole class to `*` and move on; the concept is identical.

---

## 📚 Detailed Teaching Guide

### Part 1: The Hook — Why Visualise? (8 minutes)

Screen-share the fruit numbers as plain text first:

> "Mango 5, Banana 3, Orange 8, Guava 2. Which won? ... You had to think about it, right?"

Then reveal the same data as a bar chart and say nothing for a moment. Let their eyes do the work.

> "You didn't read that — you SAW it. Orange, instantly. That's what a chart does: it turns numbers into something the human eye understands in a heartbeat. For three weeks you've been turning messy data into tidy numbers. Today you turn tidy numbers into pictures."

Land the term arc: analysis (Weeks 1-3) → visualisation (Weeks 4-5) → story (Weeks 6-7). This is the moment the term "clicks".

#### Teaching Tips

- **Don't rush the reveal.** The silent side-by-side comparison IS the lesson's thesis. Give it two full seconds.
- Connect to their lives: "This is exactly why news sites and YouTube analytics show bars, not spreadsheets."

---

### Part 2 & 3: One Bar + Labels (12 minutes)

Start dead simple, live-coded:

```python
print("█" * 5)
```

Then immediately paste the `█` character in chat — **before** anyone asks where it is on the keyboard. Offer `*` as the friendly alternative.

Build up to the labelled, padded single bar:

```python
print(f"{'Orange':<10}| {'█' * 8} 8")
```

Walk through each piece of the f-string out loud — label / divider / bar / value. The `:<10` padding is a callback to their f-string week; frame it as "you already know this, we're just using it for a new job."

#### Teaching Tips

- **Show the mess first.** Print two unpadded bars so the misalignment is visible, THEN fix it with padding. The contrast teaches better than the rule alone.
- Have students type the padded single bar and thumbs-up when it lines up.

---

### Part 4: Loop the Whole Chart (15 minutes) — Chart Studio L1-L2

This is where it becomes real. Connect explicitly to Week 3:

> "Remember your counting dicts? `category -> count`? Watch what three lines of loop do to one."

```python
fruits = {"Mango": 5, "Banana": 3, "Orange": 8, "Guava": 2}
for name, count in fruits.items():
    print(f"{name:<8}| {'█' * count} {count}")
```

Trace it live using the table in the lesson — one row per loop iteration. Students should *predict* each line before you run it.

Then release them into **Chart Studio Levels 1 and 2**. Circulate (via shared screens / pasted output) and drop encouragement in chat.

#### Teaching Tips

- The most common silent error here is a **padding width smaller than the longest label** — bars drift out of line. Turn any instance into a class teaching moment.
- Fast finishers: challenge them to add a blank `print()` and a title line before you formally teach it.

---

### Part 5: Scaling (17 minutes) — Chart Studio L3

The conceptual peak. Motivate it with a disaster first:

> "What if a value is 400? Watch." — run `print("█" * 400)` and let the wrapped mess fill the screen. "Unreadable. We have to scale."

Teach the two-step idea slowly:

1. **One block stands for many units.** "1 block = 20 views."
2. **Length = value ÷ scale, made whole with `int(round(...))`.**

Compute the scale from `max()` live:

```python
scale = int(round(max(views.values()) / 20))
```

Then the `int(round(value / scale))` per bar. **Emphasise the `int(round(...))` wrapper hard** — it's the exact thing that crashes in the homework if forgotten, and it's Common Mistake #1.

Run the Zoom-chat check: **"1 block = 10, value = 30 → how many blocks?"** Answer: 3. Get the whole class to type it; it confirms they understand division-as-scaling.

Release into **Chart Studio Level 3** with the `scores` dataset.

#### Teaching Tips

- Some students will ask "why 20 blocks?" — great question. Answer: it's a choice; any sensible max width works. Let them experiment with 10 or 30.
- Watch for **divide-by-zero** if a student's dataset is all zeros; the `if scale < 1: scale = 1` guard in the solution handles it. Mention it if it comes up.
- The `int(round(...))` can round two different values to the same bar length — that's fine and honest at this scale. Don't over-explain banker's rounding to this age group.

---

### Part 6: Common Mistakes (10 minutes)

Live-code all three, but the star is **Mistake 1** — let it crash for real:

```python
print("█" * (7 / 2))
```
```
TypeError: can't multiply sequence by non-int of type 'float'
```

> "Python can repeat a string 3 times, or 4 times — but not 3.5 times. That decimal is the enemy. `int(round(...))` is the cure. Every scaled chart needs it."

Then Mistake 2 (the overflow — they saw it in Part 5) and Mistake 3 (unpadded labels). These are quick recalls if Parts 3-5 went well.

---

### Part 7: Homework + Wrap-Up (13 minutes)

#### Homework: Bar Chart Maker

Walk through the requirements and example run. Stress that the ⭐⭐⭐ tier — wrapping it in a `bar_chart(data, block)` function that computes its own scale — is exactly the `solution_code` pattern; brave students can peek at the structure.

> "⭐ is a chart. ⭐⭐ makes it neat. ⭐⭐⭐ makes it a reusable tool you'll actually drop into your Data Story in Week 7."

#### Week 5 Teaser

> "This week your bars were text. Next week — turtle graphics. Same data, same scaling trick, but real coloured rectangles on screen. Your charts are about to get a glow-up. 🐢🎨"

#### Wrap-Up

> "Three weeks you crunched numbers. Today you made them speak. That's the difference between having data and telling a story with it. See you next week!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Printed a bar with `"█" * value`
- [ ] Aligned labels with f-string padding and printed trailing values
- [ ] Looped a dict into a complete chart
- [ ] Computed a scale and used `int(round(...))` for bar length

**Understanding:**
- [ ] Can explain WHY charts beat raw numbers (the "why")
- [ ] Answered the "30 units → 3 blocks" chat question correctly
- [ ] Can say why `"█" * 3.5` crashes

### Students to Watch

**Need Extra Support:**
- Stuck on f-string padding — likely rusty from the f-string week; a 5-minute recap of `:<width` will fix it
- Confused by division-as-scaling — reframe with concrete money: "if 1 note = £20, how many notes is £60?"

**Ready for More Challenge:**
- Finished scaling early — point them at the ⭐⭐⭐ function tier, or challenge them to right-align the numbers, or add a `max`-based automatic scale that keeps the longest bar under 20 blocks

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| `█` shows as a box, `?`, or misaligns in Trinket | Switch the class to `"*"` or `"#"` — the concept is identical; alignment stays true in a monospace output panel |
| Students can't type `█` | Paste it in Zoom chat at the start; tell them to copy from the starter code |
| Bars don't line up | Padding width is smaller than the longest label — increase it (e.g. `:<12`) |
| `TypeError: can't multiply sequence by non-int of type 'float'` | A value was divided but not wrapped — add `int(round(...))` around the length |
| A huge bar wraps off screen | They skipped scaling — revisit Part 5, divide by a scale from `max()` |
| `ZeroDivisionError` when scaling | Dataset's max is 0, or `scale` rounded to 0 — add the `if scale < 1: scale = 1` guard |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept check:** did the class grasp scaling, or just the simple bars? (Scaling is the load-bearing skill for Weeks 5 and 7.)
- **The block character:** did `█` work in Trinket, or should you default the whole cohort to `*` next time?
- **Padding fluency:** how rusty were f-strings? Adjust how much you scaffold in Week 5.
- **Homework tiers:** who's ready to write functions (⭐⭐⭐)? Note them for the Data Story project team-ups.

---

## 💭 Remember

**The goal today is that students SEE why visualisation matters.**

The mechanics — `"█" * value`, padding, scaling — are genuinely easy for this cohort. What makes the lesson land is the moment they realise a chart tells a story a column of numbers never could. If every student leaves able to say "a picture shows the pattern instantly," and can draw a scaled chart from a dict, they are fully ready for turtle charts next week and the Data Story to come.

**Turn their numbers into pictures — you've got this!** 📊

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
