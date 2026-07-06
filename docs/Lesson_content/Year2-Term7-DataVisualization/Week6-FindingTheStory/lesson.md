---
title: "Finding the Story in Data 🔎📰"
description: "Data alone isn't a story — the story is what the numbers MEAN. Turn stats into plain-English headlines, compare groups, spot trends, and plan your Data Story"
difficulty: "intermediate"
order_index: 6
course_slug: "year2-term-7-data-visualization"
is_premium: false
requires_trinket: true
starter_code: |
  # 🔎 Finding the Story in Data!
  # Data alone isn't a story. The STORY is what the numbers MEAN.

  # A week of screen-time (minutes per day)
  screen = [
      {"day": "Mon", "minutes": 30},
      {"day": "Tue", "minutes": 35},
      {"day": "Wed", "minutes": 40},
      {"day": "Thu", "minutes": 45},
      {"day": "Fri", "minutes": 60},
      {"day": "Sat", "minutes": 120},
      {"day": "Sun", "minutes": 110},
  ]

  # TODO 1: find the day with the MOST screen-time (sort it!)
  # TODO 2: compare the weekday average with the weekend average
  # TODO 3: print ONE headline sentence, backed by the numbers
solution_code: |
  # 🔎 Finding the Story in Data — one possible solution

  screen = [
      {"day": "Mon", "minutes": 30},
      {"day": "Tue", "minutes": 35},
      {"day": "Wed", "minutes": 40},
      {"day": "Thu", "minutes": 45},
      {"day": "Fri", "minutes": 60},
      {"day": "Sat", "minutes": 120},
      {"day": "Sun", "minutes": 110},
  ]

  # A little helper that tells sorted() WHICH column to sort by
  def get_minutes(row):
      return row["minutes"]

  # 1) Sort to find the top and the bottom
  ranked = sorted(screen, key=get_minutes, reverse=True)
  top = ranked[0]
  bottom = ranked[-1]
  print("Most screens:", top["day"], top["minutes"], "min")
  print("Least screens:", bottom["day"], bottom["minutes"], "min")

  # 2) Compare two GROUPS: weekdays vs weekend
  weekday = [30, 35, 40, 45, 60]
  weekend = [120, 110]
  weekday_avg = sum(weekday) / len(weekday)
  weekend_avg = sum(weekend) / len(weekend)
  print("Weekday average:", weekday_avg, "min")
  print("Weekend average:", weekend_avg, "min")

  # 3) Write a HEADLINE — every headline is backed by numbers
  print("HEADLINE: Weekend screens (" + str(weekend_avg) + " min) are almost 3x a weekday (" + str(weekday_avg) + " min)!")
class_activities: |
  ## 📰 Class Activity: Data Journalists

  Today you are **data journalists**! You are handed a small dataset and its stats — your job is to find the STORY and write the headlines.

  ### The Story So Far
  A school reading club counted how many books each member read this month:

  ```python
  books = [
      {"name": "Amara", "books": 3},
      {"name": "Chidi", "books": 5},
      {"name": "Ngozi", "books": 8},
      {"name": "Kwame", "books": 2},
      {"name": "Fatima", "books": 4},
      {"name": "Sefu", "books": 2},
  ]
  ```

  The stats are already worked out for you:
  - Total books read: **24**
  - Average per person: **4.0**
  - Most: **Ngozi (8)**  •  Least: **Kwame and Sefu (2 each)**

  ### Your Mission (⭐ / ⭐⭐ / ⭐⭐⭐)
  1. ⭐ Write **one** headline about the data — and put a **number** in it.
  2. ⭐⭐ Write **two** headlines: one about the TOP reader, one COMPARING someone to the average.
  3. ⭐⭐⭐ Write **three** headlines, and after each add a "**so what?**" — why does this matter to the club?

  ### 💬 Zoom Chat Share
  Paste your best headline in the **Zoom chat**. We'll read them out and vote for the one that is (a) exciting AND (b) still honest to the numbers!

  > **Backing rule:** if you can't point to a number that proves your headline, it's not a headline yet — it's a guess.
take_home_assignment: |
  ## 📚 Homework: Choose Your Data Story

  Next week you BUILD your Data Story. This week you choose it and find its headlines.

  **Requirements:**
  1. **Pick or build a dataset** with **6+ rows** (screen-time, football goals, songs played, rainfall, snacks sold — your choice!)
  2. Store it in Trinket as a **list of dicts** (rows and columns, like Week 1)
  3. Compute **at least 2 stats** (e.g. an average, and a top/bottom using `sorted()`)
  4. Draft **2–3 headline insights** — each one backed by a real number from your data

  **Example run:**
  ```
  Top scorer: Musa with 11 goals
  Team average: 4.5 goals
  HEADLINE: Musa scored MORE THAN DOUBLE the team average (11 vs 4.5)!
  ```

  **Challenge tiers:**
  - ⭐ 6 rows, 2 stats, 2 honest headlines
  - ⭐⭐ Add a group COMPARISON headline (average of group A vs group B)
  - ⭐⭐⭐ Add a "so what?" line under each headline AND one honesty note (why your small dataset might mislead)

  **Submit:** Save your Trinket (name it `Y2-T7-W6-FindingTheStory`), click **Share**, copy the link, and paste it wherever your teacher asks. Bring it to Week 7 — this IS your Data Story starting point!

  👉 **Trinket:** [trinket.io](https://trinket.io) — log in and open a new Python 3 trinket named `Y2-T7-W6-FindingTheStory`.
ai_activities: |
  ## 🤖 Quick Thought: AI Spots Patterns — Humans Decide What Matters

  An AI can scan a million rows and say *"Saturday screen-time is highest."* Fast! But an AI does not KNOW whether that matters, or what to do about it. That's the human's job.

  > **Think about it (Zoom chat, one line):** an AI reports *"people who own more umbrellas get rained on more."* Should we ban umbrellas to stop the rain? Why not?

  The rule: **AI can surface the pattern — YOU interpret it, question it, and decide what's worth a headline.** A great data storyteller uses AI as a spotlight, never as the judge.
---

# Year 2, Lesson 6: Finding the Story in Data 🔎📰

**Course:** Data & Visualization
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

- Why **data alone isn't a story** — the story is what the numbers **MEAN**
- Three journalist techniques: **sort** to find top/bottom, **compare** groups, **spot** trends and outliers
- How to turn a plain stat into a punchy **headline** — always backed by a number
- The "**so what?**" question that separates a fact from an insight
- How to stay **honest**: don't exaggerate, correlation isn't cause, and small data can mislead
- How to **choose and plan your own Data Story** (ready to build in Week 7!)

---

## 🤖 BrightByte Turns Reporter!

> *"Stop the press! For five weeks you've been counting, averaging, and drawing charts. Brilliant. But here's a secret the best data scientists know: a pile of numbers is NOT a story. '42' isn't a story. '42 minutes' isn't a story. But 'weekends TRIPLE our screen-time!' — now THAT makes people lean in. Today you become a data journalist: you'll take your stats and find the headline hiding inside them. And because you're a GOOD journalist, you'll never lie with numbers. Grab your notebook — let's find the story!"*
> — BrightByte 🤖📰

---

## 🗺️ Part 1: Data Isn't the Story — the Meaning Is

Imagine you tell a friend: *"On Saturday I had 120 minutes of screen-time."*

They shrug. So what? It's just a number.

Now imagine you say: *"I spend almost THREE TIMES more time on screens at the weekend than on a school day!"*

Now they're interested. Same data — but the second version tells them what the numbers **mean**.

That is the whole job this week. You already know how to **get** the numbers (stats from Week 3, charts from Weeks 4–5). Now you learn to **read** them like a story.

Here's the dataset we'll use all lesson — one week of screen-time:

| day | minutes |
|---|---|
| Mon | 30 |
| Tue | 35 |
| Wed | 40 |
| Thu | 45 |
| Fri | 60 |
| Sat | 120 |
| Sun | 110 |

Same rows and columns you've used since Week 1. In Python:

```python
screen = [
    {"day": "Mon", "minutes": 30},
    {"day": "Tue", "minutes": 35},
    {"day": "Wed", "minutes": 40},
    {"day": "Thu", "minutes": 45},
    {"day": "Fri", "minutes": 60},
    {"day": "Sat", "minutes": 120},
    {"day": "Sun", "minutes": 110},
]
```

### 💬 Zoom Chat Warm-Up

> **Which single number in that table jumps out at you?** Type it in the **Zoom chat** — and one word for why!

---

## 🔎 Part 2: Technique 1 — Sort to Find the Top & Bottom

The fastest way to find a story is to ask: **"What's the biggest? What's the smallest?"**

You already know `sorted()`. To sort a list of dicts, we tell it **which column** to sort by, using a tiny helper function:

```python
def get_minutes(row):
    return row["minutes"]

ranked = sorted(screen, key=get_minutes, reverse=True)
for row in ranked:
    print(row["day"], row["minutes"])
```

**Output:**
```
Sat 120
Sun 110
Fri 60
Thu 45
Wed 40
Tue 35
Mon 30
```

The `key=get_minutes` part says *"sort by the minutes column, not the day name."* The `reverse=True` flips it so the **biggest is first**.

Now the top and bottom are one line away:

```python
top = ranked[0]       # first = biggest
bottom = ranked[-1]   # last = smallest
print("Champion day:", top["day"], "with", top["minutes"], "min")
print("Quietest day:", bottom["day"], "with", bottom["minutes"], "min")
```

**Output:**
```
Champion day: Sat with 120 min
Quietest day: Mon with 30 min
```

There's your first story seed: **Saturday is the screen-time champion; Monday is the quietest.**

> 💡 **Shortcut:** many coders write `key=lambda row: row["minutes"]` instead of a helper — `lambda` is just a one-line function. Use whichever feels clearer to you; they do exactly the same thing.

---

## ⚖️ Part 3: Technique 2 — Compare Two Groups

Single numbers are fine, but stories get exciting when you **compare**. The classic move: split the data into two groups and compare their **averages**.

Our week splits neatly into **weekdays** and **weekend**:

```python
weekday = [30, 35, 40, 45, 60]
weekend = [120, 110]

weekday_avg = sum(weekday) / len(weekday)
weekend_avg = sum(weekend) / len(weekend)

print("Weekday average:", weekday_avg, "min")
print("Weekend average:", weekend_avg, "min")
```

**Output:**
```
Weekday average: 42.0 min
Weekend average: 115.0 min
```

Let's check the maths so we can trust our headline:

- Weekday: `30 + 35 + 40 + 45 + 60 = 210`, and `210 / 5 = 42.0`
- Weekend: `120 + 110 = 230`, and `230 / 2 = 115.0`

Now compare: `115 ÷ 42 ≈ 2.7`. The weekend is **almost three times** a weekday!

> **This is a real insight.** Nobody could see it by staring at seven raw numbers — you had to GROUP them and compare. That's data journalism.

---

## 📈 Part 4: Technique 3 — Spot Trends & Outliers

Two more patterns worth hunting for:

**A trend** = a number that keeps moving the same direction. Look at Monday to Friday:

```
Mon 30  →  Tue 35  →  Wed 40  →  Thu 45  →  Fri 60
```

Every single day it goes **up**. That's a rising trend: *"Screen-time climbs all week and peaks on Friday."*

**An outlier** = a value that sits far away from the rest. Look at Saturday's **120** next to the weekday numbers (30–60). It sticks out like a giraffe in a queue! An outlier is often the most interesting part of a story — but always ask *why* before you trust it.

A handy comparison inside the week: Friday is **60** and Monday is **30**.

```python
friday = 60
monday = 30
print("Friday is", friday / monday, "times Monday")
```

**Output:**
```
Friday is 2.0 times Monday
```

Exactly **double** — a perfect, honest headline: *"Friday has DOUBLE the screen-time of Monday!"*

---

## 📰 Part 5: Writing Headlines (and Asking "So What?")

A **headline** takes a stat and makes a human care. Compare the boring version with the headline version — notice every headline still contains a **number**:

| Stat you found | Boring version | Headline version |
|---|---|---|
| Fri = 60, Mon = 30 | "Friday is 60 minutes." | 📱 "Friday has **DOUBLE** the screen-time of Monday!" |
| weekend 115 vs weekday 42 | "The averages differ." | "Weekends **almost TRIPLE** our screen-time!" |
| Sat = 120 (highest) | "Saturday is 120." | "Saturday is the screen champion — a whole **2 hours**!" |
| Mon→Fri climbs 30→60 | "The numbers rise." | "Screen-time **CLIMBS every day** from Monday to Friday!" |

Then ask the magic question: **"So what?"**

- *"Weekends almost triple our screen-time."* → **So what?** → *Maybe our club sets a fun weekend "screen-free hour".*
- *"Screen-time climbs all week."* → **So what?** → *We get more tired and distracted by Friday — worth knowing before a Friday test!*

The "so what?" turns a fact into an **insight** — something worth telling people.

---

## ⚠️ Common Mistakes (Honest Journalists Only!)

**Mistake 1: Exaggerating beyond the data**

❌ Wrong:
```
"Weekend screens are TEN TIMES worse — screens are ruining childhood!"
```

✅ Correct:
```
"Weekend screens are almost 3x a weekday (115 min vs 42 min)."
```

> The data says "almost 3x". It does NOT say "ten times", and it says nothing about "ruining childhood". Report what the numbers show — no more.

---

**Mistake 2: Confusing correlation with cause**

❌ Wrong:
```
"More cold drinks are sold on days more people get sunburnt —
so cold drinks CAUSE sunburn!"
```

✅ Correct:
```
"Both go up on hot, sunny days. The SUN causes both.
Cold drinks don't cause sunburn."
```

> When two things rise together, that's **correlation**. It does NOT prove one **causes** the other. Something else (like the weather) might be behind both. Real journalists say "linked to", not "caused by", unless they're sure.

---

**Mistake 3: A headline with no number to back it**

❌ Wrong:
```
"Screen-time is HUGE!"
```

✅ Correct:
```
"Screen-time hit 120 minutes on Saturday — the week's highest."
```

> "Huge" is an opinion. A number is proof. Every headline you write this week must point to a real value in your data.

---

## 📰 Class Activity: Data Journalists

You're handed a reading-club dataset and its stats — go find the story! (Full brief in the activity panel.)

```python
books = [
    {"name": "Amara", "books": 3},
    {"name": "Chidi", "books": 5},
    {"name": "Ngozi", "books": 8},
    {"name": "Kwame", "books": 2},
    {"name": "Fatima", "books": 4},
    {"name": "Sefu", "books": 2},
]
```

Stats given to you: **total = 24**, **average = 4.0**, **top = Ngozi (8)**, **lowest = 2**.

- ⭐ Write ONE headline with a number in it.
- ⭐⭐ Write TWO: one about the top reader, one comparing someone to the average.
- ⭐⭐⭐ Write THREE, each with a "so what?" for the club.

Some numbers to spark ideas: Ngozi (8) read **double** the average (4.0), and **four times** the lowest (2). Paste your best headline in the **Zoom chat** — we vote for the most exciting one that's still **honest**! Give a **thumbs up** 👍 when yours is posted.

---

## 🧭 Part 6: Plan YOUR Data Story

Next week you BUILD a Data Story. Today you choose it. Use this quick planner in a comment block in Trinket:

```python
# --- My Data Story Plan ---
# Topic:        (e.g. goals my favourite team scored this season)
# My dataset:   (list of dicts, 6+ rows)
# Stats I'll compute:  average? top/bottom? group comparison?
# Chart I'll draw:     text bar chart (W4) or turtle chart (W5)?
# My 2-3 headlines:    (each backed by a number!)
```

**Good Data Story topics** are ones where you already have or can quickly collect real numbers: screen-time, football goals, songs played, rainfall, snacks sold, steps walked, marks in a subject over weeks. Aim for **6+ rows** so your averages aren't fooled by one odd value.

> ⚠️ **Small-data honesty:** our screen-time story is only ONE week. If Saturday happened to be a birthday party, it would pull the whole "weekend" story out of shape. More rows = a safer story. Always tell your reader how much data you had!

---

## 🌟 What's Coming Next Week?

You now have the two halves of a Data Story: the **numbers** (Weeks 1–5) and the **meaning** (today). **Next week — Week 7: Build Your Data Story!** — you'll put them together into one polished program: load your data, compute your stats, draw your chart, and print your headlines, all in one piece you'll be proud to show off. Come with your dataset and your draft headlines ready — the plan you started today IS your Week 7 starting line. 📊📰

---

## 🏆 Today's Achievements

- ✅ You learned that **data alone isn't a story** — the meaning is
- ✅ You used `sorted()` with a **key** to find the **top and bottom**
- ✅ You **compared two groups** by their averages (weekday vs weekend)
- ✅ You spotted a **trend** and an **outlier** in real data
- ✅ You wrote **headlines backed by numbers** and asked "so what?"
- ✅ You know the three honesty rules: don't exaggerate, correlation ≠ cause, small data can mislead
- ✅ You **chose and planned your own Data Story** for Week 7

> *"Look at you — a real data journalist! You took seven boring numbers and pulled a headline out of them, AND you refused to lie with them. That honesty? That's what makes people trust your work. Next week you build the whole story, start to finish. I can't wait to read it."*
> — BrightByte 🤖📰

---

## 📚 Homework: Choose Your Data Story

Next week you BUILD your Data Story. This week you choose it and find its headlines.

**Requirements:**
1. **Pick or build a dataset** with **6+ rows** (screen-time, football goals, songs played, rainfall, snacks sold — your choice!)
2. Store it in Trinket as a **list of dicts** (rows and columns, like Week 1)
3. Compute **at least 2 stats** (e.g. an average, and a top/bottom using `sorted()`)
4. Draft **2–3 headline insights** — each one backed by a real number

**Example run:**
```
Top scorer: Musa with 11 goals
Team average: 4.5 goals
HEADLINE: Musa scored MORE THAN DOUBLE the team average (11 vs 4.5)!
```

**Challenge tiers:**
- ⭐ 6 rows, 2 stats, 2 honest headlines
- ⭐⭐ Add a group COMPARISON headline (average of group A vs group B)
- ⭐⭐⭐ Add a "so what?" line under each headline AND one honesty note (why your small dataset might mislead)

**Submit:** Save your Trinket (name it `Y2-T7-W6-FindingTheStory`), click **Share**, copy the link, and paste it wherever your teacher asks. Bring it to Week 7 — this IS your Data Story starting point!

---

*You didn't just count the numbers today — you made them TALK. Next week, we tell the whole story. 🔎📰*
