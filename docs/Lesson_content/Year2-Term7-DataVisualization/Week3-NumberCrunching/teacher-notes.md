# Year 2, Lesson 3: Number Crunching 🔢🧮

## Teacher's Guide

**Course:** Data & Visualization (Year 2, Term 7)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

Students can now parse a data string into a list of dicts (Weeks 1-2). This lesson is the pivot from *handling* data to *understanding* it. By the end, students take a parsed dataset and squeeze it down to a handful of meaningful numbers: total, average, minimum, maximum, count — plus a category tally and the top record.

Three core goals:

1. **Make aggregation feel routine** — `sum`, `len`, `min`, `max` are old friends from Term 4; the new idea is applying them to a *column pulled out of a list of dicts*
2. **Build report-quality habits** — always `round()` an average; always guard against dividing by zero
3. **Plant the visualisation seed** — every number computed today becomes a bar next week and a headline in the Data Story; say this out loud, often

The emotional beat: "a pile of rows is not a story — facts make a story." Keep tying the maths back to meaning.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Pull a numeric column out of a list of dicts into a plain list
2. Compute total, count, average, minimum and maximum with built-in functions
3. Round an average to a set number of decimal places and explain why
4. Build a category count (tally) with a dict
5. Find the record holding the max (or min) value with a loop
6. Recognise and fix the "summing strings" `TypeError` and the divide-by-zero crash

### Key Success Metrics

- [ ] Every student prints the Big Five for the class dataset by minute 40
- [ ] Most students produce a clean, rounded average (`84.7`, not `84.66666...`)
- [ ] Most students complete the team tally dict
- [ ] Strong students find the top scorer's full record with a loop
- [ ] Students can say what next week does with these numbers (charts)

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share enabled
- Students' Trinket accounts; new script named `Y2-T7-W3-NumberCrunching`
- This teaching guide open during class
- The Part 1 scores dataset ready to paste into the Zoom chat
- Class WhatsApp/email thread for homework links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-load the dataset** — have the Part 1 `data` string ready to paste so no one loses time typing it
3. **Rehearse the traces** — be fluent on `508 / 6 = 84.6666...`, `round(..., 1) = 84.7`, and `sum([10,20,30])/3 = 20.0`; students trust confident live maths
4. **Stage the three crashes** — have the `ZeroDivisionError` and the string-`sum` `TypeError` ready to run live; the lesson depends on students *seeing* the real messages
5. **Prepare the callback** — the Week 2 parsing block is assumed knowledge; have it handy for anyone who is shaky

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap: from rows to numbers (Week 2 callback)
⏱️  8-22 min  → Part 2: the Big Five (live-code all five)
⏱️ 22-32 min  → Part 3: tidy averages + rounding + float recall
⏱️ 32-42 min  → Part 4: category tally with a dict
⏱️ 42-52 min  → Part 5: top record with a loop
⏱️ 52-62 min  → Common mistakes (run the crashes) + Data Cruncher activity
⏱️ 62-75 min  → Homework + Week 4 (charts) teaser + wrap-up
```

**Flexible timing:** The Big Five is the must-land content. If time is tight, the top-record loop (Part 5) can shrink to a demo and move fully into the ⭐⭐⭐ activity/homework tier.

---

## 📚 Detailed Teaching Guide

### Part 1: From Rows to Numbers (8 minutes)

Open with the story hook:

> "Last week you turned a messy string into a neat list of dicts. Today we answer the real question: so WHAT? What does this data actually tell us? We turn six rows into five facts."

Paste the dataset, run the Week 2 parsing block, and print `records`. Then make the key point that trips people up:

> "You cannot `sum()` a list of dicts. First you pull out the ONE column you want — the scores — into a plain list. THEN you crunch."

Live-code the pull-out loop and print `[85, 92, 78, 88, 95, 70]`. This "extract the column" step is the genuinely new idea today; don't rush it.

#### Teaching Tips

- If anyone's parsing is shaky, this is recall, not re-teaching — paste a working `records` and move on; today's target is aggregation.
- Emphasise that the `int()` conversion from Week 2 is what makes today possible. Foreshadow the `TypeError` they'd hit without it.

---

### Part 2: The Big Five (14 minutes)

Screen-share the summary table (total / count / average / min / max) and live-code all five on `scores`. Print the raw output including the ugly average `84.66666666666667` — leave it ugly on purpose so Part 3 has a job to do.

Ask the class to predict each value before you run it:

> "Sum of these six — someone estimate in the chat. Highest? Lowest? Now let's check."

#### Teaching Tips

- These functions are Term 4 recall; move briskly. The novelty is the *workflow* (dicts → column → aggregate), not the functions.
- Have students run it themselves and thumbs-up when their five numbers match yours. This is your main checkpoint.

---

### Part 3: A Tidy Average + Rounding (10 minutes)

Land three ideas:

1. **Division always gives a float in Python 3** — show `60 / 3` → `20.0`. Surprises some students who expect `20`.
2. **`round(value, 1)`** cleans it up — trace `round(84.6666..., 1)` → `84.7` and `round(..., 2)` → `84.67`.
3. **`/` vs `//` recall** — `/` for averages (keep the decimal), `//` throws the remainder away.

Run the Zoom-chat quickfire: "average of `[10, 20, 30]`?" Then prove it: `sum([10,20,30])/3` → `60/3` → `20.0`. It's a confidence win — everyone gets it right.

#### Teaching Tips

- The `20.0` (not `20`) result is a great "why?" moment. Answer: division always produces a float, even when it divides evenly.
- Frame rounding as professionalism: "Data scientists don't hand in `84.66666666666667`. Round it."

---

### Part 4: Category Tally with a Dict (10 minutes)

Reintroduce the Term 4 tally pattern: loop the records, `if team in team_counts: += 1 else: = 1`.

Walk the dict growing row by row using the table in the lesson — this makes the `if/else` concrete. End on `{'Red': 3, 'Blue': 2, 'Green': 1}`.

Then the payoff line:

> "Keep this dict. Next week, `'█' * 3` turns Red's count into a bar. This tally IS a bar chart — it just doesn't know it yet."

#### Teaching Tips

- The most common error is forgetting the `else` branch → `KeyError` on the first sighting. If you see it, celebrate it: "This is exactly why the `else` sets it to 1."
- Strong students can be nudged to `dict.get(team, 0) + 1` as a slicker alternative, but keep the `if/else` as the taught standard.

---

### Part 5: The Top Record with a Loop (10 minutes)

Distinguish `max(scores)` (the number `95`) from "who scored it" (the whole record). Live-code the champion-belt loop and walk the trace table (`top` changing hands until Ada wins).

> "`max` gives you the number. To get the NAME behind the number, you walk the list and hold onto the best record you've seen."

Then the twist:

> "Change `>` to `<` and you find the LOWEST record instead. Same pattern, opposite direction."

#### Teaching Tips

- The classic bug: `top = 0` instead of `top = records[0]`, then comparing `row["score"] > top` (number vs dict) → `TypeError`. Emphasise: `top` is a *record*, so you compare `row["score"] > top["score"]`.
- This is the hardest idea of the day. If the class is tired, demo it and push it into the ⭐⭐⭐ tier rather than forcing everyone through it live.

---

### Part 6: Common Mistakes + Data Cruncher Activity (10 minutes)

#### Common Mistakes (5 minutes) — RUN THE CRASHES

Live-code all three so students see real error text:

1. **Un-rounded average** — ugly output; fix with `round`
2. **`ZeroDivisionError`** — `sum([]) / len([])`; fix with `if len(scores) > 0`
3. **`TypeError` from summing strings** — `sum(["85", "92"])`. Connect it explicitly to last term's `age + 1` bug: "Same family — numbers must be numbers."

#### Data Cruncher Activity (5 minutes)

Point students at the three tiers (Big Three → average/min/max → top record) and the bonus tally. Circulate via shared screens and the chat; collect a few `team_counts` results.

---

### Part 7: Homework + Wrap-Up (13 minutes)

#### Homework: "Stats Report" (5 minutes)

Show the snack-shop dataset and the target output. Trace the expected numbers so students can self-check:

- sold = `[24, 18, 30, 15, 22]` → total `109`, average `109/5 = 21.8`, max `30`, min `15`
- type counts → `{'Fried': 2, 'Baked': 2, 'Raw': 1}`

Point out the tiers; remind them ⭐⭐⭐ adds the best-seller-by-name loop and the divide-by-zero guard. Any tier counts as done. Submission via the named Trinket.

#### Week 4 Teaser + Wrap-Up (3 minutes)

Show the little text bar chart in the lesson:

> "Next week these numbers stop being numbers and become BARS you can see. Your tally dict becomes a chart with `'█' * count`. Bring your `records`."

Stay on the call 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Pulled the score column into a plain list
- [ ] Printed all five summary statistics correctly
- [ ] Produced a rounded average (`84.7`)
- [ ] Built the team tally dict
- [ ] (Stretch) Found the top scorer's full record with a loop

**Engagement:**
- [ ] Answered the `[10,20,30]` chat quickfire
- [ ] Used thumbs-up when their Big Five matched
- [ ] Shared a `team_counts` result

### Students to Watch

**Need Extra Support:**
- Can't pull the column into a list — reteach the `for row in records: scores.append(row["score"])` pattern 1:1; it's the foundation for the whole term's crunching
- Confused by `84.66666...` — reassure; rounding is the fix, not a mistake in their code

**Ready for More Challenge:**
- Finished the top-record loop fast — challenge them with the min-record variant, `dict.get()` tallies, or averaging a *second* numeric column

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| `TypeError` on `sum(scores)` | The scores are still strings — the `int()` conversion was skipped; fix the parse or convert on pull-out |
| `ZeroDivisionError` | Empty list; use the `if len(scores) > 0` guard and discuss why it matters for real data |
| `KeyError` in the tally | Missing `else` branch — the first time a category appears it must be set to `1` |
| Average shows a huge decimal tail | Not a bug — wrap in `round(..., 1)`; good teachable moment on floats |
| Comparing `row["score"] > top` crashes | `top` must be the whole record (`records[0]`), so compare `top["score"]` |
| Class finishes early | Add a second numeric column to average, or ask for the *percentage* each team makes of the class |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Aggregation confidence:** did the Big Five land, or did the dicts-to-column step trip people? (Affects how fast Week 4 can move.)
- **Rounding & floats:** did the `20.0` moment cause confusion? Note it for the calculator-style precision work later.
- **Tally fluency:** how many built the dict independently? This directly gates next week's charts.
- **Top-record loop:** class-wide skill or stretch-only? Calibrate the Data Story expectations accordingly.

---

## 💭 Remember

**A dataset is not a story until it has facts.**

Today's job isn't fancy — it's `sum`, `len`, `min`, `max`, a dict and a loop. But those six tools are the entire engine of data analysis, and every number produced today becomes a bar next week and a headline in the Data Story. If students leave able to turn rows into five clean facts, the visualisation weeks will fly.

**Crunch the numbers, find the story!** 🔢📊

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
