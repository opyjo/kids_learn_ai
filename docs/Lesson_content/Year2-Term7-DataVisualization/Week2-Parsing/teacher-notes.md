# Year 2, Lesson 2: Parsing Data with split() ✂️📄

## Teacher's Guide

**Course:** Data & Visualization (Year 2, Term 7)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

Last week (Week 1) students met data as an idea — rows and columns, categorical vs numerical, datasets as lists of dictionaries. This week they get their hands dirty for the first time: taking **raw text** and turning it into a **usable dataset** by hand. This is the practical engine room of the whole term. Everything that follows — crunching numbers (W3), text bar charts (W4), turtle charts (W5), finding the story (W6-7) — starts from a CSV string the students parse themselves.

The lesson has three core goals:

1. **Make CSV concrete** — students should leave able to look at `name,score\nAma,85` and instantly see the table hiding inside it
2. **Master the two splits** — `split("\n")` for rows, `split(",")` for fields — and the list-of-dicts pattern that pairs fields with column names
3. **Cement the "text after split" reflex** — the single most important habit this term is remembering that split output is ALWAYS strings, so numbers need `int()`/`float()`

Keep the energy of a **detective cracking a case**. The data arrives "locked" in a blob of text; the class's job is to crack it open line by line.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what a CSV is (header + comma-separated rows) and read one aloud as a table
2. Store a dataset as a triple-quoted multi-line string and explain that `\n` marks line breaks
3. Use `.split("\n")` to break a dataset into rows and `.split(",")` to break a row into fields
4. Build a list of dictionaries from parsed rows, skipping the header with `rows[1:]`
5. Convert numeric fields with `int()` and explain WHY (split always returns text)
6. Recognise and fix the four classic parsing bugs (text-not-number, header not skipped, trailing blank line, wrong delimiter)

### Key Success Metrics

- [ ] Every student splits the data into rows and prints the list by minute 30
- [ ] Most students build a working `records` list of dictionaries by minute 55
- [ ] Every student can answer "what does `"a,b,c".split(",")` give?" correctly in chat
- [ ] Students leave understanding that `int()` on a split field is non-negotiable for maths

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and reactions enabled
- Students' Trinket accounts; today's Trinket name: `Y2-T7-W2-Parsing`
- This teaching guide open during class
- The shared class dataset ready to paste in chat (columns `name,score`)

### Pre-Lesson Preparation (15 minutes before class)

1. **Test the solution code in Trinket** — run it once so you can live-demo each split output
2. **Have the `data` string ready to paste** into the Zoom chat so no one loses time typing it (watch for auto-formatting that mangles the triple quotes)
3. **Rehearse the three deliberate crashes** (Common Mistakes) so you can trigger each error message on cue — seeing the real `TypeError`/`ValueError`/`IndexError` is the lesson's best teaching moment
4. **Recall the Term 4 record pattern** — students built lists of dictionaries in Term 4 (Contact Manager). Have that callback ready; today reuses it exactly
5. **Prepare the trailing-newline gotcha** — decide whether to demo it live or save it for the ⭐⭐⭐ students

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap Week 1 + BrightByte "crack the blob" hook
⏱️  8-18 min  → Part 1 & 2: What is a CSV + dataset as a multi-line string
⏱️ 18-30 min  → Part 3 & 4: split("\n") into rows, split(",") into fields
⏱️ 30-45 min  → Part 5: build the list of dictionaries + int() conversion
⏱️ 45-55 min  → Common Mistakes (live-crash all four)
⏱️ 55-68 min  → CSV Cracker activity (five stages)
⏱️ 68-75 min  → Homework + Week 3 teaser + wrap-up
```

**Flexible timing:** The two splits (Parts 3-4) are the beating heart. If the class is quick, spend the saved time letting them build the list of dicts independently in the CSV Cracker rather than following along. If they're slow, live-code Part 5 together and set the full list-of-dicts as a first-half homework task.

---

## 📚 Detailed Teaching Guide

### Part 1 & 2: CSV + Dataset as a String (10 minutes)

Open with the BrightByte hook: the data is "locked" in a blob of text. Then show the tiny 2-row table and its CSV twin **side by side** on screen:

```
name,score          →     | name | score |
Ama,85                     | Ama  | 85    |
Kofi,72                    | Kofi | 72    |
```

Ask the class in chat: **"Where's the header? How does the computer know Ama and 85 belong together?"** (Answer: same line = same record; comma separates the columns.)

Then introduce the triple-quoted string. The key mental model to hammer home:

> "This LOOKS like six lines, but it's really ONE long string. Every Enter you pressed became a hidden `\n`. Those `\n`s are exactly where we're going to cut."

#### Teaching Tips

- **Don't rush the `\n` idea.** If students don't believe the string is really one line, print `repr(data)` live so they see the `\n` characters with their own eyes.
- **Reassure the "no files" point.** Some students may ask "why not a real file?" — Trinket runs in the browser and can't open files. The multi-line string is our data file all term. Real files come in later years.

---

### Part 3 & 4: The Two Splits (12 minutes)

This is the core skill. Live-code it and **narrate every output**.

`data.split("\n")` → a list of row strings. Print it, print `len(rows)`. Emphasise: 7 rows = 1 header + 6 data.

Then `rows[1].split(",")` → `['Ama', '85']`. **Stop here** and point at the `'85'` with quotes:

> "Read that carefully. `'85'` — with quotes. That's TEXT, not a number. Splitting a string can only ever give you more strings. Remember this — it's the trap of the whole term."

Use the Zoom chat checkpoint: **"What does `"a,b,c".split(",")` give?"** Wait for answers; the correct one is `['a', 'b', 'c']`. This is a quick, universal win — everyone can get it.

#### Teaching Tips

- **Two splits, one method.** The big idea students should verbalise: it's the *same* `.split()` method, you just change the delimiter — `"\n"` for rows, `","` for fields.
- **The `\n` disappears.** Point out the cut marks vanish from the results — a common point of confusion.

---

### Part 5: Build the List of Dictionaries (15 minutes)

Now assemble the full parser. This is where Term 4 comes roaring back — a **list of dictionaries** where each dict is one record.

Walk the five steps on screen, then let students type along. The two lines that need the most airtime:

1. **`for line in rows[1:]:`** — "Why `[1:]`? Because `rows[0]` is the header. Slice it off." Connect to Term 4 slicing.
2. **`"score": int(fields[1])`** — "Why `int()`? Because `fields[1]` is `'85'` the text. `int()` makes it `85` the number, so next week we can average it."

Finish with the `.ljust(10)` table print — a satisfying, professional-looking result that proves they built a real dataset.

#### Teaching Tips

- **Let them feel the payoff.** After `print(records)` shows the list of dicts, pause: "THAT is a real dataset. You built it from a text blob. That's what data scientists do all day."
- **`float()` aside.** Mention that decimals (`"85.5"`) would use `float()` instead of `int()` — a callback to Term 1. Keep it light; scores are whole numbers today.

---

### Common Mistakes — Live-Crash All Four (10 minutes)

This is the highest-value segment. **Trigger each real error** on screen — the error message is the lesson.

1. **`TypeError` (text + number):** `"85" + 10`. "Split gave text. Maths on text explodes. Wrap it in `int()`." — the #1 bug.
2. **`ValueError` (header not skipped):** loop over all `rows`, hit `int("score")`. "The header sneaked in. Use `rows[1:]`."
3. **`IndexError` (trailing blank line):** add a blank line before the closing `"""`, get `''` in the list, `''.split(",")` gives `['']`, no `fields[1]`. Fix with `if line == "": continue`.
4. **Wrong delimiter:** `"Ama,85".split(" ")` returns the whole thing uncut. "Match the delimiter to the data."

#### Teaching Tips

- **Crash on purpose, calmly.** Model that errors are information, not failure. Read the error type aloud and decode it: "`ValueError: invalid literal for int()` — Python's saying: you asked me to turn 'score' into a number, and I can't."
- **The trailing-newline bug is subtle.** For a slower class, mention it verbally and reserve the live demo for the ⭐⭐⭐ homework tier.

---

### CSV Cracker Activity (13 minutes)

Students build the parser themselves in five stages (see lesson). Thumbs up after each stage. Circulate via shared screens / chat.

- **Stages 1-2** (split rows, grab header) — everyone should clear these fast
- **Stages 3-4** (split a row, build the list of dicts) — the real work; watch for the missing `int()` and the un-skipped header
- **Stage 5** (`.ljust` table) — the polish; fast finishers move to the bonus third column

**The bonus** (add an `age` column) is the natural stretch — it forces them to generalise the pattern to three fields.

#### Common Student Errors to Watch For

| You'll see... | The fix |
|---|---|
| `int()` forgotten — scores print with quotes | Wrap `fields[1]` in `int()` |
| Header row parsed as data → `ValueError` | Loop `rows[1:]`, not `rows` |
| `IndexError` on a data row | A blank line crept in, or a missing comma; check the string |
| `.split()` with no argument | Splits on whitespace, not commas — pass `","` explicitly |
| Whole string uncut | Split on the wrong character (space vs comma) |

---

### Homework + Wrap-Up (7 minutes)

Walk through the fruit-stall CSV (`fruit,sold`, 5 rows). It's the SAME pattern as class with new column names — deliberately, so success is about transfer, not novelty. Point out the three tiers:

> "⭐ is the mission: parse it, print it. ⭐⭐ adds the header and a count. ⭐⭐⭐ is for the brave — add a row AND survive a blank last line. Any tier counts as done."

Tease Week 3:

> "You've got a list of dicts full of real numbers now. Next week we make them TALK — total, average, highest, lowest. Parsing was step one of the Data Story. Crunching is step two."

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Split the dataset into rows and printed the list
- [ ] Split a row into fields and identified the score as text
- [ ] Built a list of dictionaries, skipping the header
- [ ] Used `int()` to convert the numeric field
- [ ] Printed a tidy table

**Understanding:**
- [ ] Correctly answered the `"a,b,c".split(",")` chat question
- [ ] Can explain WHY `int()` is needed (split returns text)
- [ ] Can explain WHY we skip `rows[0]`

### Students to Watch

**Need Extra Support:**
- Kept forgetting `int()` even after the crash demo — pair them for the homework and check tier ⭐ specifically
- Confused rows vs fields (which delimiter?) — reinforce "`\n` = between lines, `,` = within a line"

**Ready for More Challenge:**
- Finished the ⭐⭐⭐ bonus fast — point them at parsing a 3+ column dataset and previewing next week: computing the average score with a loop

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Triple quotes break when pasted from chat | Pre-share the `data` string; check for smart-quote auto-replacement in Zoom/browser |
| Student's whole string comes back uncut | Wrong delimiter — they split on the wrong character; check `","` vs `" "` |
| `ValueError: invalid literal for int()` | Header not skipped (use `rows[1:]`) OR a non-numeric value in the score column |
| `IndexError: list index out of range` | A blank/short line — add `if line == "": continue`, or check for a trailing newline in the string |
| Class is racing ahead | Push the bonus 3-column parse, or have them start the Week 3 average calculation early |
| Class is struggling | Live-code Part 5 together line by line; set the full list-of-dicts build as homework instead |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **The `int()` reflex:** did it land? If many still forgot it in the activity, open Week 3 with a 2-minute recap — number crunching is impossible without it.
- **Rows vs fields:** was the two-delimiter idea clear? If muddy, it will haunt the charting weeks.
- **Pace:** did the live-crash segment run long? It's worth protecting — it's the highest-retention part.
- **Dataset reuse:** the class dataset is `name,score` — the whole term reuses this shape. Note any student who invented a nice alternative dataset for their own Data Story later.

---

## 💭 Remember

**Parsing is the unglamorous skill everything else stands on.**

If students leave able to turn a text blob into a list of dictionaries — and reflexively reach for `int()` on numeric fields — this lesson has done its job. Every chart and every data-story insight in the coming weeks is only possible because they can parse. Slow, correct, and confident beats fast and buggy.

**They cracked the data open today. Next week, they make it talk.** ✂️📄

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
</content>
