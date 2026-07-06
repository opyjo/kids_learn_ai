# Year 2, Lesson 6: Finding the Story in Data 🔎📰

## Teacher's Guide

**Course:** Data & Visualization (Year 2, Term 7)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This is a **thinking week, not a coding week**. Students already have the technical tools — stats (Week 3) and charts (Weeks 4–5). What they've never been asked to do is answer the question that makes data matter: **"So what?"** This lesson teaches interpretation — turning correct-but-dull numbers into honest, human headlines — and it doubles as the **planning bridge** into the Week 7 build.

Three core goals:

1. **Shift the mindset from "compute" to "communicate"** — the same average (`42.0`) becomes a story ("weekends triple our screens") only when a human decides what it means
2. **Teach honest interpretation** — the three traps (exaggeration, correlation-vs-cause, no-number headlines) are the heart of the lesson, not an afterthought
3. **Lock in every student's Data Story topic** before they leave, so Week 7 starts with a dataset in hand, not a blank page

Keep code light. If you spend more than ~15 minutes on Python today, you've drifted. The star of this lesson is the **headline**, not the syntax.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain why raw data is not a story, and what a "headline" adds
2. Use `sorted()` with a `key` function to rank a list of dicts and read off the top/bottom
3. Compare two groups by their averages and state the comparison in plain English
4. Identify a trend and an outlier in a small dataset
5. Write a headline that is backed by a specific number, and ask "so what?"
6. Name the three honesty traps and avoid them
7. Choose a Data Story topic/dataset (6+ rows) and draft 2–3 headlines

### Key Success Metrics

- [ ] Every student writes at least one number-backed headline during the Data Journalists activity
- [ ] The class can correctly explain, out loud, why "umbrellas cause rain" is wrong (correlation ≠ cause)
- [ ] Every student leaves with a chosen Data Story topic written in their Trinket planner
- [ ] Students can point to the exact number that backs each headline they write

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and reactions enabled
- Trinket accounts; today's trinket: `Y2-T7-W6-FindingTheStory`
- The screen-time dataset and the reading-club dataset ready to paste
- This teaching guide open during class
- A running list (private) of each student's chosen Data Story topic — you'll need it for Week 7

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, and that the solution code runs and prints `42.0` / `115.0`
2. **Have both datasets ready to paste** (screen-time and reading-club) so no live typing eats time
3. **Prepare 2–3 real headlines** from something students care about (a football result, a music chart) as warm examples
4. **Rehearse the correlation example** — cold drinks vs sunburn, or umbrellas vs rain — so you can deliver it crisply
5. **Prepare a topic bank** — a printed/pasteable list of 8–10 Data Story ideas for students who freeze on "pick a topic" (see Support for Topic Choice below)
6. **Review last week's homework** — students should already have chart skills; note anyone who struggled so their Data Story stays simple

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Hook: a number vs a headline (why data isn't a story)
⏱️  8-20 min  → Technique 1 (sort top/bottom) + Technique 2 (compare groups)
⏱️ 20-30 min  → Technique 3 (trends & outliers) + writing headlines + "so what?"
⏱️ 30-40 min  → The three honesty traps (the heart of the lesson)
⏱️ 40-52 min  → Data Journalists activity (reading-club headlines in chat)
⏱️ 52-65 min  → Plan Your Data Story (topic choice + planner)
⏱️ 65-75 min  → Homework + Week 7 teaser + wrap-up
```

**Flexible timing:** If the code techniques run fast (they should — it's revision), give the extra minutes to the honesty section and topic choice. Those are the two places students genuinely need you.

---

## 📚 Detailed Teaching Guide

### Part 1: The Hook — A Number vs A Headline (8 minutes)

Open with the contrast, not a definition. Screen-share nothing yet — just say:

> "I'm going to tell you a fact: on Saturday I had 120 minutes of screen-time." *(pause)* "…So what? Nobody cares. Now: 'I spend almost THREE TIMES longer on screens at the weekend than on a school day.' — see how you leaned in? Same data. One is a number. One is a STORY. Today you learn to find the story."

Then show the screen-time table and land the big idea: **they already have the numbers (Weeks 1–5); this week is about MEANING.**

#### Teaching Tips

- Resist defining "headline" academically. Show, contrast, feel the difference — then name it.
- The Zoom-chat warm-up ("which number jumps out?") is diagnostic: students who pick Saturday/Sunday already sense outliers. Praise that instinct.

---

### Part 2: Sort + Compare (12 minutes)

Live-run the sorting code once so students see the ranked output. The one new-ish idea is the `key=get_minutes` helper.

> "sorted() needs to know WHICH column to rank by. The little helper function just says 'use the minutes'. reverse=True puts the biggest first, so `ranked[0]` is the champion and `ranked[-1]` is the quietest."

Mention `lambda` only as an aside — do NOT teach it formally. Some students will love the shortcut; others should ignore it.

For the group comparison, **do the arithmetic on screen** (`210 / 5 = 42.0`, `230 / 2 = 115.0`). Then the payoff:

> "You could stare at seven numbers forever and not see this. You had to GROUP them. `115 ÷ 42` is almost 3 — that's a real discovery."

#### Teaching Tips

- If a student's average prints `42.0` and they ask about the `.0`, that's Week 3 recall — division always gives a float. Quick confirm, move on.
- Watch for anyone hard-coding the wrong split. The weekday/weekend split here is manual and fine for today; Week 7 they can automate it.

---

### Part 3: Trends, Outliers & Headlines (10 minutes)

Point at Mon→Fri climbing (30→60) for the trend, and Saturday's 120 as the outlier "giraffe in the queue". Run the `60 / 30 = 2.0` line so the "double" headline is provably exact.

Then teach the **headline table** and the **"so what?"** move. Do one "so what?" together, then throw one to the chat:

> "'Screen-time climbs all week' — SO WHAT? Why might that matter? Type it."

Expect answers like "we're tired by Friday" — celebrate those; that's insight, not just fact.

#### Teaching Tips

- Insist on the number-in-the-headline rule from the start. It prevents the vague "screens are huge!" headlines before they happen.
- The outlier is a great "always ask why" moment — a birthday party, a sick day, a data-entry typo. This seeds the small-data honesty note later.

---

### Part 4: The Three Honesty Traps (10 minutes) — THE HEART

Slow down here. This is the part students can't get from a Google search and it's the moral spine of data work.

1. **Exaggeration** — run the ❌/✅ pair. "The data says almost 3x. It does NOT say ten times, and it says NOTHING about 'ruining childhood'."
2. **Correlation ≠ cause** — the star example. Deliver it as a mini-story:

> "More cold drinks are sold on days more people get sunburnt. So… do cold drinks CAUSE sunburn? *(let them object)* No! The SUN causes both. Two things going up together is a CLUE, not proof."

Then the AI callback (umbrellas vs rain) if you're using the ai_activities prompt.

3. **No number to back it** — "'Huge' is an opinion. A number is proof."

#### Teaching Tips

- Make correlation-vs-cause physical and funny (umbrellas causing rain, ice cream causing shark attacks). The absurdity is what makes it stick at ages 11–13.
- Introduce the phrase "**linked to**" vs "**caused by**" — a genuinely grown-up distinction they'll feel proud to use.
- If time is short, cut a technique from Part 2/3 before you cut anything here.

---

### Part 5: Data Journalists Activity (12 minutes)

Paste the reading-club dataset and the pre-computed stats. Students don't recompute — they **interpret**. Set the tiers on screen and start a 5-minute writing burst, then a chat share.

Run it as a real newsroom:

> "You've got the stats. I want headlines in the chat in five minutes. Rule: point me to the number that proves it, or it doesn't run."

Read the best 4–5 aloud. Run a quick vote for "most exciting AND still honest" — this reinforces that punchy and truthful aren't enemies.

Numbers to nudge with if students stall: Ngozi (8) = double the average (4.0) and four times the lowest (2); Kwame and Sefu tie at the bottom.

#### Teaching Tips

- If a headline exaggerates, don't just correct it — ask the class "is that backed by a number?" Peer-checking is the skill.
- Fast finishers: challenge them to write a DISHONEST headline on purpose, then have the class catch why it's misleading. Great fun, great learning.

---

### Part 6: Plan Your Data Story (13 minutes) — the Week 7 Bridge

This is the second must-not-skip. Every student leaves with a topic. Screen-share the planner comment block and have them fill it in their own Trinket live.

Walk the room (chat/breakouts) and get a topic from each student. **Log every topic privately** — you'll open Week 7 with "Kofi, you picked football goals — ready?"

#### Support for Topic Choice

Students freeze on open-ended "pick anything". Scaffold hard:

| Student situation | Your move |
|---|---|
| No idea at all | Offer the topic bank: screen-time, football goals, songs played this week, rainfall, snacks sold, daily steps, test marks over weeks, pets per friend, minutes of chores |
| Wildly ambitious ("all of Nigeria's population") | Shrink it: "Perfect topic — but just YOUR street, or your class. 6–10 rows is plenty." |
| Can't collect real data in time | Green-light a **made-up but realistic** dataset (6+ rows) — the skill is the story, not the sourcing |
| Struggled with charts last week | Steer them to a text bar chart (W4) and a simple average — keep the build achievable |
| Very confident | Push for a group-comparison headline (two teams, two weeks, boys vs girls) — the richest kind of story |

Remind them: **6+ rows minimum**, and the small-data honesty note ("one weird day can fool a tiny dataset").

---

### Part 7: Homework + Wrap-Up (10 minutes)

Walk through the homework — it's essentially "finish the plan you started". Stress that this homework **becomes** their Week 7 project, so effort now saves time later. Point out the tiers.

Tease Week 7:

> "You've got the numbers. You've got the meaning. Next week we snap them together into ONE polished Data Story — data, stats, chart, headlines. Bring your dataset. See you in the newsroom!"

Stay on 2–3 minutes for topic questions — that's when the unsure students speak up.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Interpretation skills (the real target):**
- [ ] Wrote a headline containing a specific number
- [ ] Could state a group comparison in plain English ("weekend is ~3x")
- [ ] Identified the Saturday outlier and asked "why"
- [ ] Caught an exaggeration or correlation-vs-cause error (own or peer's)

**Technical (light check):**
- [ ] Ran `sorted()` with a key and read off top/bottom
- [ ] Computed the two group averages correctly

**Planning:**
- [ ] Chose a Data Story topic with 6+ rows
- [ ] Drafted at least one backed headline in the planner

### Students to Watch

**Need Extra Support:**
- Writes headlines with no number, or opinions instead of facts — pair-check with a strong peer; re-run the ❌/✅ examples
- Cannot choose a topic — assign one from the topic bank directly; don't let them leave topic-less

**Ready for More Challenge:**
- Point them to a group-comparison headline and the ⭐⭐⭐ "so what?" + honesty-note tier
- Challenge: find TWO stories in the same dataset that seem to disagree

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "There's no code to run — is this even a coding lesson?" | Reframe: "The hardest skill in data isn't code, it's meaning. Today you learn what senior data scientists get paid for." |
| Headlines are all vague ("data is cool!") | Enforce the number rule ruthlessly: "Which number proves that? No number, no headline." |
| Class conflates correlation and cause | Slow down; use two or three absurd examples (umbrellas, ice cream/sharks). Introduce "linked to" vs "caused by". |
| Students can't pick a topic | Deploy the topic bank; allow realistic made-up datasets; shrink over-ambitious ideas to 6–10 rows |
| Sorting code confuses someone | It's revision — remind them `key` just names the column; skip `lambda` entirely for strugglers |
| Runs long | Cut a technique from Parts 2–3. NEVER cut the honesty traps or the topic choice. |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Topic map:** who chose what? (Have every student's Data Story topic written down for Week 7.)
- **Honesty check:** did the class truly grasp correlation ≠ cause, or reteach with a fresh example next week?
- **Headline quality:** are students backing claims with numbers, or still writing opinions?
- **Readiness for Week 7:** who has a dataset in hand vs who needs a nudge/assigned topic before the build?

---

## 💭 Remember

**This week the code is easy on purpose — the thinking is the challenge.**

The goal isn't a working program; it's a working *judgement*: the ability to look at numbers and say honestly what they mean. A student who can write "weekends almost triple our screens (115 vs 42)" — and refuse to say "ten times" — has learned something most adults never do. Send every student into Week 7 with a topic they care about and a headline they can defend.

**They're not just coders now — they're storytellers. 📰**

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
