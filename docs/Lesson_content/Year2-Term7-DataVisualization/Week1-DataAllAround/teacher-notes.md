# Year 2, Lesson 1: Data All Around Us 📊🌍

## Teacher's Guide

**Course:** Data & Visualization (Year 2, Term 7)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This is the opening class of Term 7 — the shift from *writing programs* to *reasoning about information*. Students arrive fluent in Python (functions, lists, dicts, lists of dicts, loops, string methods, f-strings, try/except). They do NOT need new syntax today; they need a new **way of seeing**. The session has three core goals:

1. **Install the vocabulary** — rows/records, columns/fields, categorical vs numerical. This language underpins the entire term and the Data Story project.
2. **Reframe skills they already have** — a list of dicts isn't "just Term 4", it's a *dataset*; a tally dict isn't "just a vote counter", it's a *category summary*. Same code, bigger idea.
3. **Make data feel real and personal** — by collecting a live class dataset over Zoom, students see that THEY are data, and that data comes from somewhere (them!).

Note: Term 7 awards **no badge** — do not promise one. Motivation comes from the Data Story project and the "turn numbers into a story" arc.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Define data as organised information and identify rows (records) and columns (fields)
2. Classify a column as categorical or numerical using the "can I add these?" test
3. Store a small dataset as a list of dicts and as a multi-line (CSV-style) string
4. Count categories with a tally dict and read the result
5. Recall that numbers stored as text need `int()`/`float()` before maths

### Key Success Metrics

- [ ] Every student can point at a table and say which parts are rows and which are columns
- [ ] Most students correctly classify at least 3 columns as categorical/numerical
- [ ] Every student runs the tally dict on the live class data
- [ ] Students leave able to name one real-world dataset from their own life

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share and chat enabled (chat is central today!)
- Students' existing Trinket accounts
- This teaching guide open during class
- A prepared example table (fruit/sleep) to screen-share
- A place for students to paste their homework Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom + Trinket** — audio, screen share, and that code runs in a Python 3 trinket
2. **Decide your live survey question** — "favourite fruit" is the default; "hours of sleep last night" or "number of pets" work too. Pick ONE categorical for the tally.
3. **Pre-type the tally code** in a trinket so you can live-run the class's real answers instantly
4. **Have the two storage examples ready** — the list of dicts and the multi-line string — to screen-share
5. **Prepare 2-3 everyday data examples** relevant to your class (local league table, weather forecast, a music chart) in case discussion is slow
6. **Reminder:** this term awards no badge — frame motivation around the Data Story project

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome to Term 7 + "what is data?" hook
⏱️  8-20 min  → Part 1 & 2: rows/columns + categorical vs numerical
⏱️ 20-35 min  → Part 3 & 4: two ways to store data in Python
⏱️ 35-45 min  → Part 5: tally dict (trace it together)
⏱️ 45-60 min  → Class Data Lab (collect → store → count LIVE)
⏱️ 60-75 min  → Common mistakes + homework + Week 2 teaser
```

**Flexible timing:** The Class Data Lab is the emotional peak — protect its 15 minutes. If short on time, trim the multi-line string demo (Part 4) to a 2-minute "here's a preview" rather than a full walkthrough.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome to Term 7 + The Data Hook (8 minutes)

Open with energy and a reframe:

> "Congratulations — you can now WRITE programs. This term, your programs get something to think ABOUT: data. And here's the wild part — data isn't in some far-off computer. It's your sleep last night, the league table, the songs you played this week. Let's learn to see it."

Then Part 1's chat warm-up: **"Name one example of data you saw today."** Read answers aloud. Steer toward variety — weather, sports, screen-time, shopping lists. This proves the term's whole premise in 3 minutes.

#### Teaching Tips

- **Don't teach syntax yet.** The first 20 minutes are conceptual. Resist the urge to jump into code.
- **Use their answers as running examples** all lesson ("Kofi said the league table — that's rows of teams and columns of goals!").

---

### Part 2: Rows/Columns + Categorical vs Numerical (12 minutes)

Screen-share the fruit/sleep table. Drill the vocabulary physically:

> "Point at your screen. A ROW goes across — Ama's whole line, one record. A COLUMN stands tall — everyone's sleep, one field."

Then the two families. The single most useful tool you can give them is the **"can I add these?" test**:

- `mango + banana` → nonsense → categorical
- `9 + 8 hours` → sensible → numerical

Run a rapid-fire chat quiz: call out columns, students type "CAT" or "NUM":
- favourite fruit → CAT
- goals scored → NUM
- team name → CAT
- temperature → NUM
- **phone number → CAT** (the trap! looks numerical, is a label)

#### Teaching Tips

- **The phone-number trap is gold** — it's the moment the concept clicks from "numbers vs words" to "measurements vs labels".
- **Watch the chat** for students who classify everything numerical-looking as NUM; gently correct with the "can I add them?" test.

---

### Part 3 & 4: Two Ways to Store Data (15 minutes)

**Part 3 (list of dicts, ~8 min):** This is a confidence win — they already own this from Term 4. Emphasise the reframe: dict = row, key = column. Live-run the loop; confirm the output matches the lesson exactly.

**Part 4 (multi-line string, ~7 min):** New shape, but keep it LIGHT. The goal is recognition, not mastery — they should leave thinking "data is often just text separated by commas (CSV)". Explicitly set up next week: "This is one big blob now. Next week's `split()` turns it into rows and columns."

#### Teaching Tips

- **Do NOT parse the string today.** Splitting is Week 2's whole lesson — previewing the mechanics steals its thunder and overloads today.
- **Name-drop CSV** so it's familiar when it returns — spreadsheets, weather data, football sites all use it.

---

### Part 5: The Tally Dict (10 minutes)

The technical heart of the lesson. Students know this pattern (Term 4 vote counter), so frame it as a **promotion**: "same code, new job — now it's a category summary."

**Trace it live using the table in the lesson.** Go loop-by-loop, updating the dict on screen. The `if fruit in tally` / else split is the key idea — first sighting sets to 1, repeat sighting adds 1. Confirm the final output:

```
{'mango': 3, 'banana': 2, 'orange': 1}
```

> "We just turned six raw answers into a summary. Raw data → summary → chart. That's the whole term in one arrow."

#### Teaching Tips

- **Trace by hand before running.** Predicting the output then confirming builds real understanding.
- **If a student uses `.get()` or a different pattern**, celebrate it — there are many valid ways to tally.

---

### Part 6: Class Data Lab (15 minutes) — the peak

This is the lesson students will remember. Run it as three visible steps:

1. **Collect:** Ask your survey question ("favourite fruit?"). Everyone types ONE word in chat. Read them out and build the list live on screen.
2. **Store:** Students copy the real list into Trinket. Run `len()` to count rows. Thumbs up.
3. **Count:** Students run the tally dict on the class's OWN data. Reveal the winner together.

Land the point:

> "That dict IS your class. You didn't just learn about data — you MADE some and counted it."

Then the closing chat question: **"Is favourite colour categorical or numerical?"** Expect a mix; use disagreement to reinforce the "can I add them?" test (answer: categorical).

#### Teaching Tips

- **Type answers into a real list as they arrive** so the data feels live, not pre-baked.
- **Keep the survey categorical** so the tally works cleanly. If you want a numerical demo too, ask "hours of sleep" as a bonus and just print the list — don't tally it.
- **Celebrate the winning category** with fanfare; it makes the abstract concrete.

---

### Part 7: Common Mistakes + Homework + Teaser (dovetails into wrap-up)

#### Common Mistakes (~5 min)

Run all three live:

1. **Rows vs columns** — quick recall, they'll have it now.
2. **Numbers-as-text (`"9" + 1` crashes)** — RUN IT, let it crash, then fix with `int()`. This is the important one: it plants the flag for number-crunching in Weeks 2-3. Connect it to Term 1's data-types lesson.
3. **Categorical/numerical confusion** — reinforce with the colour example from the chat.

#### Homework Briefing (~4 min)

Walk through "Be a Data Collector". Stress it must be REAL data from real people — this makes Week 2's parsing feel purposeful. Point out the tiers; ⭐⭐⭐ (find the biggest category) previews Week 3's number crunching.

#### Wrap-Up + Week 2 Teaser (~3 min)

> "Today you met data face to face. But we left it stuck in one big string. Next week we grab the scissors — `split()` — and slice any data into rows and columns. See you there!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Conceptual Understanding:**
- [ ] Correctly identifies rows vs columns in a table
- [ ] Classifies columns as categorical/numerical (chat quiz)
- [ ] Understands a list of dicts as a dataset (not just "Term 4 stuff")
- [ ] Recognises the multi-line/CSV shape as data-as-text

**Technical Skills:**
- [ ] Runs the tally dict successfully on the live class data
- [ ] Reads the tally output correctly (which category won)

**Engagement:**
- [ ] Contributed an everyday-data example in chat
- [ ] Answered the categorical/numerical chat quiz
- [ ] Participated in the Class Data Lab

### Students to Watch

**Need Extra Support:**
- Still swaps rows and columns after Part 2 — give a one-line private reminder ("across = row, tall = column") and check again during the Lab
- Classifies all number-looking data as numerical — reinforce the phone-number trap 1:1

**Ready for More Challenge:**
- Finishes the tally fast — nudge toward the ⭐⭐⭐ homework tier (find the max category) and mention `dict.get()` as a cleaner tally

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Chat is quiet during the survey | Seed it yourself: "I'll start — my favourite is mango. Your turn!" |
| Students paste sentences instead of one word | Ask for ONE word only so the tally stays clean; tidy the list on screen |
| Someone insists a phone number is numerical | Ask "add two phone numbers together — does that mean anything?" — the answer sells the concept |
| Tally dict output confuses students | Trace it by hand on screen one loop at a time; predicting then confirming fixes it |
| Class finds it all too easy (strong cohort) | Add a numerical column to the Lab and ask "how could we summarise NUMBERS, not just count them?" — teases Week 3 |
| A student asks to split the string now | "Brilliant instinct — that's literally next week's lesson. Hold that thought!" |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Vocabulary check:** did rows/columns and categorical/numerical land? (These recur every week this term.)
- **The Lab:** did the live data collection energise the class? Save the class's dataset — it's a great callback for later weeks and even the Data Story project.
- **Number-as-text moment:** did the `int()` crash register? Weeks 2-3 depend on it.
- **Homework topics:** note what topics students chose — reference them when the Data Story project arrives in Week 7.

---

## 💭 Remember

**Today is about a new lens, not new syntax.**

Students already have every tool they need — the win is teaching them to SEE a list of dicts as a dataset and a tally as a summary. If they leave able to spot data in their own lives and tell categorical from numerical, the whole term has a foundation to build on.

**Data is everywhere — you just taught them to see it.** 📊

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
