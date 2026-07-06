# Year 2, Lesson 7: Project — Data Story 📊📖

## Teacher's Guide

**Course:** Data & Visualization (Year 2, Term 7)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 7 of 8

---

## 📋 Lesson Overview

### Purpose

This is the term's **project build** lesson. For six weeks students collected data skills in isolation — storing datasets, splitting CSVs, computing stats, tallying categories, drawing text charts, writing insights. Today they **assemble them into one complete program**: a Data Story that runs end-to-end on a single dataset, wired together with functions.

The session is a **live build-along** in four clear stages, each stage a function, finished with a `main()` conductor. Students type alongside you, run after every stage, and use Zoom reactions as checkpoints. Your job is pacing and correctness, not lecturing — the code is the content.

There is **NO badge** this term. The payoff is the project itself, which students present in Week 8.

Three core goals:

1. **Every student leaves with a running Data Story** saved as `Y2-T7-W7-DataStory`
2. **Cement the "pipeline" idea** — parse → stats → chart → insights, orchestrated by `main()`
3. **Get them presentation-ready** — by end of class they've swapped in their own Week 6 dataset

> ⚠️ **CONTINUITY IS CRITICAL.** Week 8 is the showcase of THIS EXACT file. Every student must leave with a saved, working `Y2-T7-W7-DataStory` on a dataset they care about. Verify the file name in the chat before building.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Parse a multi-line CSV string into a list of dicts, converting numeric fields with `int()`
2. Compute total, average, highest, lowest, and category counts over a dataset
3. Draw a scaled text bar chart using `int()` to avoid fractional blocks
4. Write 2-3 headline insights backed by the numbers
5. Structure a program with functions and a `main()` conductor, and run it end-to-end

### Key Success Metrics

- [ ] Every student's Data Story runs end to end and prints stats, chart, and insights
- [ ] Every student has saved a Trinket named `Y2-T7-W7-DataStory`
- [ ] Students can explain why numbers need `int()` after `split()`, and why the chart scale needs `int()`
- [ ] Every student has swapped in (or started swapping in) their own Week 6 dataset

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share; teacher's Trinket visible throughout
- Students' Trinket accounts and their **Week 6 dataset** ready to paste
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Type the full solution yourself once** in a fresh Trinket named `Y2-T7-W7-DataStory` — you build it live and it must be flawless
2. **Run it and confirm the exact output** (total 750, average 107.1, busiest Sat 200, quietest Thu 45, games 3 of 7) so your live demo matches the lesson
3. **Rehearse each of the four common-mistake demos** — you'll trigger them deliberately (the TypeErrors, the IndexError, the ZeroDivisionError)
4. **Have a "catch-up" pasteable** of each stage's function ready for the Zoom chat, so a straggler can rejoin without stalling the class
5. **Remind students in advance** to have their Week 6 dataset to hand — the last 10 minutes is swapping it in

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + "today we BUILD the project" + the pipeline plan
⏱️  8-20 min  → Stage 1: parse_data() — build live, test on its own
⏱️ 20-32 min  → Stage 2: show_stats() — total/avg/max/min + tally
⏱️ 32-44 min  → Stage 3: draw_chart() — the scaling + int() moment
⏱️ 44-52 min  → Stage 4: print_insights() + main() — wire it all together
⏱️ 52-60 min  → Common mistakes (the four crashes) live
⏱️ 60-70 min  → Swap in YOUR Week 6 dataset + save
⏱️ 70-75 min  → Homework brief + Week 8 showcase teaser + wrap-up
```

**Flexible timing:** Stages 1 and 3 carry the new thinking (parsing + scaling). Protect them. Stage 2's stats are Week 3 revision — if you're behind, paste `show_stats` in chat and narrate it rather than typing every line.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + The Plan (8 minutes)

Open with energy — this is the moment the term has been building to.

> "For six weeks you've collected data superpowers one at a time. Today we snap them ALL together into one program that takes a boring blob of text and turns it into a STORY — with a chart and headlines. By the end you'll have a project you'll present next week."

Screen-share the **skills-to-stages table** from the lesson. Point at each week and say where it lands. This shows the project isn't new material — it's assembly.

Then the non-negotiable setup instruction:

> "Create a NEW Trinket. Name it exactly `Y2-T7-W7-DataStory`. Type it in the chat when done. This is the file you KEEP and PRESENT next week."

Paste the `DATA` string and have everyone paste it at the top. Point out the two data families: `activity` categorical, `minutes` numerical.

#### Teaching Tips

- **Don't skip the naming.** Week 8 is a showcase of this exact file.
- Keep the intro tight — they're keen to build.

---

### Part 2: Stage 1 — parse_data() (12 minutes)

Build live. The heart of this stage is the `int()` conversion — flag it loudly.

> "`split()` always hands back TEXT. So `parts[1]` is the string `\"95\"`, not the number 95. If we don't wrap it in `int()`, the maths later will crash. Watch me type `int(parts[1])` — this one word saves us from a crash in ten minutes."

Then TEST the function on its own before moving on:

```python
print(parse_data(DATA))
```

Point at the output: `'minutes': 95` has NO quotes → it's a real number. Contrast with what it would look like as text (`'95'`).

Explain the two safety lines together:
- `text.strip().split("\n")` — the `.strip()` kills a trailing blank line
- `if line.strip() == "": continue` — belt-and-braces for any empty line

#### Teaching Tips

- **Test the function in isolation.** This models good engineering and catches parse bugs before they cascade.
- Students may forget `lines[1:]` and include the header as a data row. If `parse_data` tries `int("minutes")`, they get a `ValueError` — a perfect teachable moment for "skip the header".

---

### Part 3: Stage 2 — show_stats() (12 minutes)

Build the minutes list first, then `sum`/`max`/`min`. Narrate that these are Week 3 tools.

**Plant the empty-data guard explicitly:**

> "Before I divide by count, I check `if count == 0`. Why? Because dividing by zero CRASHES Python. A professional program checks first. This is the little detail that separates a toy from a tool."

Then the tally dict — this is Week 1 revision. Move briskly; they know this pattern.

Run the program (with a temporary `show_stats(parse_data(DATA))` call if `main()` isn't written yet, or just call the two). Confirm: total 750, average 107.1.

#### Teaching Tips

- `{average:.1f}` — remind them the `.1f` keeps the average readable. Without it they get `107.14285714285714`.
- If a student's total looks like a long glued string (`9560120...`), their `minutes` are still text — send them back to Stage 1's `int()`.

---

### Part 4: Stage 3 — draw_chart() (12 minutes) ⭐ THE VISUAL PAYOFF

This is the moment the data becomes a picture. The teaching star is the **`int()` around the scale**.

Type `blocks = amount / biggest * 20` FIRST (without `int`), run it, and let it crash:

```
TypeError: can't multiply sequence by non-int of type 'float'
```

> "Half a block? Python has no idea what that means. `95 / 200 * 20` is `9.5` — a float. We can't print nine-and-a-half blocks. Wrap it in `int()` and it becomes 9. THAT is the fix."

Add `int(...)`, re-run, and admire the chart. Point at Saturday's full 20-block bar.

Explain the scaling in kid terms:

> "We find the biggest number, and we make its bar the full 20 blocks. Everyone else gets a fair share of that. That's why this chart works for ANY dataset — big numbers or small."

#### Teaching Tips

- **Trigger the float TypeError on purpose** — it's the single most memorable moment of the lesson and it directly previews Common Mistake 2.
- `{label:<4}` left-aligns the day names so the bars start in the same column. If a student's own data has long labels, tell them to widen `<4` to `<10`.

---

### Part 5: Stage 4 + main() — Wire It Up (8 minutes)

Build `print_insights` fairly briskly — it reuses the stats logic plus a "keep the best row so far" loop for busiest/quietest. Narrate that loop:

> "We assume the first day is busiest, then check every other day. If we find a bigger one, we remember it. Same idea as `max`, but we keep the whole ROW so we still know the day's name."

Then `main()`. This is the satisfying click:

> "Four functions, and `main()` just calls them in order — parse, stats, chart, insights. Read it top to bottom: it's the plan, in code."

Build the little `minutes_by_day` dict inside `main()` and pass it to `draw_chart`. Run the WHOLE thing. Celebrate the complete report loudly. Then: **SAVE the Trinket.**

#### Teaching Tips

- Some students will call `draw_chart(records)` by mistake and get an error (a list of dicts isn't a label→number dict). Point out `main()` prepares `minutes_by_day` on purpose.
- **Celebrate the first full run.** "You just built a complete data pipeline. Screenshot it." Then save.

---

### Part 6: Common Mistakes — The Four Crashes (8 minutes)

Live-code each so students see the real error and the real fix:

1. **Numbers still text after `split()`** → `TypeError` on `sum`. Fix with `int()`.
2. **`"█"` times a float** → `TypeError: can't multiply sequence by non-int`. Fix with `int()`.
3. **Trailing blank CSV line** → `IndexError: list index out of range`. Fix with `.strip()` + skip empty.
4. **Divide by zero on empty data** → `ZeroDivisionError`. Fix with the `if count == 0` guard.

Move quickly — one crash, one fix, next. Seeing the actual red error text is what makes it stick.

---

### Part 7: Make It Yours + Homework + Wrap-Up (last 15 minutes)

#### Swap in the Week 6 dataset (10 minutes)

This is the bridge to the showcase. Have students replace the `DATA` string with their own Week 6 data and update the three column names.

> "Change `DATA` to your dataset. Change `day`, `minutes`, `activity` to your column names — everywhere they appear. Then run. Because our functions scale automatically, most of it just works."

Circulate (via chat / breakout help) for anyone whose columns don't line up. The commonest fix is the numeric column name in `parse_data` and the label/value keys the chart uses.

#### Homework Brief (3 minutes)

Point at the tiers. Stress: at least 6 rows, one categorical + one numerical column, 2-3 REAL insights, and `int()` on the numeric column. The ⭐⭐⭐ tier adds an optional turtle chart.

> "Your homework IS your showcase piece. Polish it — banners, tidy labels, honest insights. Bring it next week to present."

#### Wrap-Up (2 minutes)

> "Six weeks of skills, one real project. You built a data pipeline today. Next week you take the stage and tell your data's story. Save your Trinket — see you at the showcase."

Stay on the call 2-3 minutes to help anyone whose program isn't running.

---

## 🎓 Assessment & Notes

### The Deliberate Bug Demo

The most valuable teaching moment is the **float-times-string crash** in `draw_chart`. Type it without `int()`, run it, and let students see:

```
TypeError: can't multiply sequence by non-int of type 'float'
```

Ask: "The maths is right — 9.5 IS Monday's share. So why is Python upset?" Let them reason it out (you can't print half a block), then fix with `int()`. This lands the scaling-to-int concept far better than telling.

### During Class, Observe:

**Technical Skills:**
- [ ] Parsed the CSV and converted `minutes` with `int()`
- [ ] Computed total/average/max/min and a category tally
- [ ] Drew a scaled chart using `int()` around the block count
- [ ] Wrote insights that actually reference the numbers
- [ ] Wrote a `main()` that runs all four stages
- [ ] Saved the Trinket with the correct name

**Engagement:**
- [ ] Kept pace with the live build (thumbs up at each stage)
- [ ] Answered the chat checkpoints (total, average, longest bar)
- [ ] Started swapping in their own Week 6 dataset

### Students to Watch

**Need Extra Support:**
- Stuck at Stage 1 — paste the `parse_data` function privately; check they skipped the header
- Glued-string totals — their numeric field is still text; fix the `int()` in `parse_data`
- Chart crash — almost always the missing `int()` around the scale

**Ready for More Challenge:**
- Finished early — point them at the ⭐⭐⭐ turtle bonus, or a third insight (e.g. "weekend vs weekday" comparison)

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| `TypeError: unsupported operand ... 'int' and 'str'` when summing | Numeric field still text — add `int()` in `parse_data` |
| `TypeError: can't multiply sequence by non-int of type 'float'` | Chart scale isn't wrapped in `int()` — use `int(amount / biggest * 20)` |
| `IndexError: list index out of range` in parse | Blank/short CSV line — `.strip()` the text and `continue` on empty lines |
| `ZeroDivisionError: division by zero` | Empty dataset — add the `if count == 0: return` guard before dividing |
| `ValueError: invalid literal for int()` | Header row wasn't skipped — loop over `lines[1:]`, not `lines` |
| Chart bars all empty or all full | Their own data has one value, or wrong key passed — check `draw_chart` gets a label→number dict |
| Bars don't line up | Labels wider than the padding — widen `{label:<4}` to fit the longest label |
| Student didn't save / lost the file | Rebuild from the full solution block; stress the `Y2-T7-W7-DataStory` name for the showcase |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Completion:** how many students have a running, correctly-named Data Story? (Anyone missing needs a nudge before Week 8 — the showcase depends on this file.)
- **The two `int()` moments:** did the "convert after split" and "int the scale" ideas both land? If shaky, plan a 2-minute recap at the start of Week 8.
- **Own data:** how many successfully swapped in their Week 6 dataset in class? Those who didn't will need it done for homework.
- **Pacing:** did Stages 1 and 3 get their time, or did the stats stage eat it? Adjust the paste-ahead strategy.

---

## 💭 Remember

**Today is about assembly, structure, and pride — not new theory.**

Nothing today is a brand-new concept — it's six weeks of data skills clicking together behind a clean set of functions. The magic is the moment a student runs `main()` and a full data story scrolls out: stats, a chart, and headlines. Protect that moment: build in stages, test each function, and make sure EVERY student leaves with a saved, working `Y2-T7-W7-DataStory` on data they care about.

**They just built a real data pipeline. Next week, they tell its story.** 📊📖

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
