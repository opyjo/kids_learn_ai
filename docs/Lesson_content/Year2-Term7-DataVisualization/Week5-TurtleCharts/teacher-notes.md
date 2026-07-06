# Year 2, Lesson 5: Turtle Graphics Charts 🐢📊

## Teacher's Guide

**Course:** Data & Visualization (Year 2, Term 7)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

Students have spent Term 7 so far living in the output panel: parsing CSV strings, computing stats, and building text bar charts with `"█" * n`. This lesson gives them their first taste of **graphics** — the `turtle` module — and channels it straight into a data-visualisation goal: a real, coloured, labelled bar chart.

Turtle is new to this cohort. Treat it gently: the delight of "I told a robot to draw and it drew" is the hook, but the danger is students getting lost in turtle for its own sake. Keep every turtle skill pointed at the chart. Three core goals:

1. **Demystify turtle fast** — within 15 minutes every student has drawn *something* on screen
2. **Build the bar chart in layers** — one line → one bar (a helper) → a full looped chart — so nobody is overwhelmed
3. **Guarantee no one is stuck** — the biggest risk is the "blank output" trap (turtle code in a text trinket); the text-chart fallback means every student can still complete the work

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what turtle is (a pen steered by code) and open a "Python with Turtle" trinket
2. Use `forward`, `left`/`right`, `penup`/`pendown`, `goto`, and `color` to draw
3. Write/complete a `draw_bar(t, x, height, colour)` helper that draws one filled rectangle
4. Loop over a dictionary to draw a full bar chart, scaling values to pixel heights (ints) and labelling bars with `write()`
5. Produce the text-chart fallback in plain Python if turtle is unavailable

### Key Success Metrics

- [ ] Every student sees turtle draw *something* by minute 15 (or is switched to the fallback)
- [ ] Every student draws at least one bar with `draw_bar`
- [ ] Most students produce a full looped, labelled chart (turtle or text)
- [ ] No student is silently stuck on a blank output panel

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share enabled
- **A pre-made "Python with Turtle" trinket** you can screen-share and live-code in (trinket.io/turtle)
- The solution code open and tested in a Turtle trinket
- The text-chart fallback tested in a normal trinket (your Plan B)
- Class WhatsApp/email for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Set up Turtle trinkets.** This is the #1 prep item. Make and test a "Python with Turtle" trinket yourself so you can demo live. Have the direct link **trinket.io/turtle** ready to paste in chat.
2. **Test the solution code** end to end in a Turtle trinket — confirm the full fruit chart draws with colours, labels, and title.
3. **Test the fallback** in a normal trinket so you can pivot instantly if turtle fails for anyone.
4. **Prepare the "blank output" warning.** You WILL have students who paste turtle code into a text trinket and see nothing. Rehearse the one-line diagnosis: "Blank output = wrong trinket type."
5. **Have the naming convention ready:** `Y2-T7-W5-TurtleCharts`.
6. **Decide your fallback trigger:** if a student can't get a Turtle trinket working within ~5 minutes, move them to the text version rather than losing them.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap Week 4 text charts + "today we DRAW" hook
⏱️  8-18 min  → Open Turtle trinkets + first drawing (Part 1 & 2)
⏱️ 18-30 min  → The draw_bar helper — one bar (Part 3)
⏱️ 30-50 min  → Loop into a full chart (Part 4) + Chart Studio activity
⏱️ 50-60 min  → Text-chart fallback + common mistakes
⏱️ 60-75 min  → Homework + Week 6 teaser + wrap-up
```

**Flexible timing:** If Turtle-trinket setup eats time (likely — it's new), protect Parts 3 and 4. The single bar and the loop are the heart of the lesson; the intro moves can be trimmed.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + The Hook (8 minutes)

Open by celebrating where they are:

> "For four weeks you've built charts out of block characters — and they were genuinely useful. Today we upgrade. Today we draw REAL charts, with a pen we steer using code. Meet the turtle."

Screen-share your Turtle trinket and live-run:

```python
import turtle
pen = turtle.Turtle()
pen.forward(100)
turtle.done()
```

The line appearing on screen is the "wow" moment. Milk it.

#### Teaching Tips
- Keep the wonder but stay disciplined: everything today serves the **chart**, not turtle art.
- Name-drop the arc: "This chart feeds straight into your Data Story in Week 7."

---

### Part 2: Turtle Trinkets + Basic Moves (10 minutes)

**The critical instruction — say it twice:**

> "Turtle ONLY works in a 'Python with Turtle' trinket. Go to trinket.io/turtle. If you use a normal text trinket, you'll see NOTHING — no error, just blank. That's not a bug, it's the wrong trinket type."

Everyone opens a Turtle trinket, names it `Y2-T7-W5-TurtleCharts`, and runs the forward/left example from the lesson. **Thumbs up** when the L-shape appears.

Walk the commands table quickly. The one concept to land hard is **penup/pendown** — "lift the pen to move without drawing." Demo the goto-with-pen-up example so they *see* the no-line jump.

| Problem | Quick Fix |
|---|---|
| Blank output panel | Wrong trinket type — move them to trinket.io/turtle |
| Can't make a Turtle trinket | Switch them to the text-chart fallback now — don't lose them |
| Turtle draws lines everywhere | They forgot `penup()` before moving — most common turtle bug |

---

### Part 3: The draw_bar Helper — One Bar (12 minutes)

This is the conceptual pivot: **a bar is just a filled rectangle.** Build `draw_bar` together, live, narrating the turtle walking the four corners.

> "The turtle jumps to the bottom-left corner, walks up, across, down, back, and fills it in. Four `goto` calls trace a rectangle."

Have students complete the starter code's missing `goto()` lines (Stage 2 of the activity), then draw ONE test bar:

```python
draw_bar(pen, -50, 120, "red")
```

**Thumbs up** for a red bar on the baseline.

#### Teaching Tips
- Emphasise **why it's a function**: "We're going to draw many bars — write the drawing once, reuse it." This reinforces Term 3 functions.
- The `t` parameter confuses some — clarify: "`t` is whatever turtle we hand in; here we pass `pen`."
- Don't rush past `begin_fill()`/`end_fill()` — the fill only happens between them.

---

### Part 4: Loop Into a Full Chart + Chart Studio (20 minutes)

Now the payoff. Introduce the plan on screen: dictionary → baseline → loop → scale → label. Build it in the shared trinket, or have students assemble the solution while you circulate.

**Two ideas to teach explicitly:**
- **Scaling:** "A value of 8 is 8 pixels — invisible. Multiply by a scale (20) to get 160 pixels. Keep the scale a whole number so heights stay ints."
- **Spacing:** "After each bar, slide `x` across by 60 so bars don't overlap."

Run the **Chart Studio** activity checkpoints:
- Stage 1 (⭐): turtle wakes, draws an L — thumbs up
- Stage 2 (⭐⭐): one bar via `draw_bar` — thumbs up
- Stage 3 (⭐⭐⭐): full looped chart — paste "Chart done! 🐢📊" in chat

Invite a fast finisher (e.g. Chidi or Ngozi) to share their screen so the class sees a completed chart. Bonus tasks (title, change scale, custom colours) keep fast finishers busy while you help stragglers.

#### Teaching Tips
- The `colours[i % len(colours)]` line is elegant but new — explain the wrap-around once, then move on.
- Watch for pen-down-while-moving smears; the fix is always `penup()` first.
- If the whole class is behind, do the loop as a full live-code and have them copy — comprehension of the *pattern* matters more than typing speed.

---

### Part 5: Fallback + Common Mistakes (10 minutes)

**Show the text-chart fallback** even to students whose turtle worked — it's their safety net for homework and a callback to Week 4:

```python
for name in fruit:
    count = fruit[name]
    print(f"{name:<8} | {'█' * count} {count}")
```

Reassure the no-turtle students loudly: "The text chart is a completely valid answer. Same data, same story."

Run the four common mistakes live, especially:
1. **Blank output** = wrong trinket type (the big one)
2. **Missing `turtle.done()`** = window vanishes
3. **Decimal scale** = messy heights — keep ints
4. **Pen down while moving** = stray lines

---

### Part 6: Homework + Wrap-Up (10 minutes)

Walk through the homework: a chart of their own data, 5+ categories, coloured and labelled — turtle OR text version, both fully accepted. Point at the tiers:

> "⭐ is a coloured, labelled 5-bar chart. ⭐⭐ adds a title and a standout tallest bar. ⭐⭐⭐ sorts the data tallest-to-shortest first — that's a real data-viz move."

Tease Week 6:

> "You can make the picture now. Next week you learn to READ it — to find the story hiding in the numbers. That story is the core of your Data Story project."

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Opened a Turtle trinket and drew a first line
- [ ] Used penup/pendown correctly (no stray lines)
- [ ] Completed the `draw_bar` helper and drew one bar
- [ ] Built the full looped, labelled chart (or the text equivalent)
- [ ] Understood scaling values → pixel heights

**Engagement:**
- [ ] Used Zoom reactions at each Chart Studio checkpoint
- [ ] Participated in the light AI/charts discussion
- [ ] Left with a working chart they're proud of

### Students to Watch

**Need Extra Support:**
- Stuck on blank output — confirm trinket type, then fall back to text if needed
- Confused by coordinates/goto — pair them with a neighbour; the text version is always available

**Ready for More Challenge:**
- Finished the full chart early — push them to the ⭐⭐⭐ sorted-bars homework, or add axis ticks / a legend

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Turtle code shows nothing | Wrong trinket type — must be "Python with Turtle" (trinket.io/turtle). This is the #1 issue today. |
| A student can't get turtle working at all | Switch them to the text-chart fallback immediately — it's a full, valid solution |
| Bars overlap or sit on each other | The `x = x + 60` slide is missing or too small; increase spacing |
| Lines drawn between bars | Missing `penup()` before `goto()`; the helper handles this, but stray label moves may not |
| Bars too tall/short for the window | Adjust `scale` (try 15-25) — keep it a whole number |
| Window closes instantly | Add `turtle.done()` at the end |
| Class is way behind on setup | Whole-class live-code the chart; students copy — protect comprehension over speed |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Turtle setup friction:** how long did Turtle trinkets take? Adjust next turtle lesson's buffer.
- **Fallback count:** how many students used the text version? (If many, check trinket access before Week 7.)
- **Concept check:** did scaling and penup/pendown land? These recur in any future graphics work.
- **Chart pride:** who made something they loved? Flag them to share in the Week 8 showcase.

---

## 💭 Remember

**The goal today is a chart every student is proud of — by any route.**

Turtle is the exciting path, but the text fallback is a first-class citizen, not a consolation prize. A student who produces a clean, labelled text chart has fully met the objective. Keep the wonder of "I made the computer draw" alive, but never let the turtle trinket become a barrier — the moment it does, pivot to text and keep the momentum.

**You've got this — go make some charts!** 🐢📊

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
