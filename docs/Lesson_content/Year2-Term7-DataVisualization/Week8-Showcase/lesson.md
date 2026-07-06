---
title: "Data Story Showcase & Celebration 📊🎤"
description: "Term 7 finale — polish and present your Data Story like a news reporter, give peer feedback, ace a fun data & viz quiz, and celebrate finishing the data term"
difficulty: "intermediate"
order_index: 8
course_slug: "year2-term-7-data-visualization"
is_premium: false
requires_trinket: true
starter_code: |
  # ✅ REPORTER-READY CHECKLIST
  # Before you present your Data Story, tick these off in Trinket:
  #
  # [ ] It RUNS with no red errors
  # [ ] It PARSES the data (split() turns the CSV blob into rows/columns)
  # [ ] Numbers are converted with int()/float() before any maths
  # [ ] It shows a CHART (text bars or turtle) that is easy to read
  # [ ] It states at least ONE insight BACKED BY A NUMBER
  # [ ] Your headline is a real sentence, not just a number
  #
  # Open your Data Story Trinket now and run it once, top to bottom.
  # If every box is ticked — you're ready to report LIVE on Zoom! 🎤

  print("My Data Story is reporter-ready! 📊🚀")
solution_code: |
  # 🏆 TERM 7 COMPLETE! — Data Detective Certificate
  # A tiny celebration program that uses EVERYTHING from this term:
  # a small dataset, a loop, sum/len maths, and a text bar chart.

  name = input("What is your name, data detective? ")

  # A tiny dataset: how many projects you built each Year 2 term so far
  terms = [
      {"term": "T1 Python",     "projects": 1},
      {"term": "T2 Games",      "projects": 1},
      {"term": "T3 Adventure",  "projects": 1},
      {"term": "T4 Data",       "projects": 1},
      {"term": "T5 AI Concepts","projects": 1},
      {"term": "T6 APIs",       "projects": 1},
      {"term": "T7 Data Story", "projects": 1},
  ]

  # NUMBER CRUNCHING (Week 3 skills): total and average
  counts = []
  for row in terms:
      counts.append(row["projects"])

  terms_done = len(terms)
  total_projects = sum(counts)
  avg = total_projects / terms_done          # / always gives a float

  print()
  print("=" * 46)
  print(f"{'DATA DETECTIVE CERTIFICATE':^46}")
  print("=" * 46)
  print(f"  Awarded to:       {name}")
  print(f"  Terms completed:  {terms_done} of 8")
  print(f"  Projects built:   {total_projects}")
  print(f"  Avg per term:     {avg:.1f}")
  print("=" * 46)
  print("  Projects per term (each ⭐ = 1 project):")
  # A TEXT BAR CHART (Week 4 skill): "⭐" * a WHOLE number
  for row in terms:
      bar = "⭐" * int(row["projects"])       # int() so we can multiply
      print(f"  {row['term']:<14} {bar}")
  print("=" * 46)
  print()
  print(f"Term 7 COMPLETE, {name}! One term to go. 📊🎓")
class_activities: |
  ## 🎮 Class Activity: The Data Story Newsroom 📊🎤

  Today is celebration day! Everyone reports the Data Story they built this term — live, like a news reporter breaking a story.

  ### Part A — Polish Pit-Stop (⭐)
  Open your Data Story and run it once, top to bottom. Tick off the reporter-ready checklist in the starter code. Fix anything red before you present — no new features needed, just make it shine.

  ### Part B — Your 2-Minute News Report (⭐⭐)
  When it's your turn, report like a journalist:
  1. **Share your screen** on Zoom
  2. **Read your headline** — "Breaking news: mango is the class champion fruit!"
  3. **Run** your program live so the chart appears
  4. **Point at the chart** and read ONE insight **backed by a number** — "3 out of 6 people chose mango — that's half the class!"
  5. **Take one question** from a classmate

  ### Part C — Peer Feedback (⭐⭐⭐)
  While each reporter presents, the class reacts in the **Zoom chat**:
  - Drop a 🔥 when a finding surprises you
  - Give **"Two Stars and a Wish"**: two things you liked ⭐⭐ and one kind idea for next time 💡

  ### Part D — Class Vote + Term 7 Quiz
  After all reports, the class votes on the **"Most Surprising Finding"** 🏆. Then a fast, fun quiz covering the WHOLE data term. Your teacher reads each question; you race to answer in the Zoom chat. No pressure — it's a celebration!
take_home_assignment: |
  ## 📚 Homework: Your Data Detective Certificate 🏆

  Choose ONE (or do both if you're buzzing!):

  ### Option A — Data Detective Certificate (recommended)
  Write a **"Data Detective Certificate"** program in Trinket that celebrates a small dataset with a text chart.

  **Requirements:**
  1. Store a small dataset (5–7 rows) about anything you like — snacks, teams, songs
  2. Use `sum()` and `len()` to compute a **total** and an **average**
  3. Print a **text bar chart** using `"█" * int(n)` (remember: the count must be a whole number!)
  4. State at least **one insight backed by a number** in a full sentence
  5. Use `"=" * 40` (or similar) for a neat border and end with a proud emoji 🎉

  ### Option B — Family News Report
  Present your finished Data Story to someone at home like a TV reporter. Read your headline, run the chart, explain one insight. Then write 3–4 sentences:
  - What was your most surprising finding?
  - Did your family guess the answer before you revealed it?
  - What did they think of your chart?

  **Also (optional, 2 min):** peek at the Term 8 preview below and jot down ONE idea for the capstone project you'd love to build.

  **Submit:** Save your Trinket (name it `Y2-T7-W8-Showcase`), click **Share**, copy the link (and paste your family notes), and send it wherever your teacher asks.

  👉 **Trinket:** [trinket.io](https://trinket.io) — log in and open a new Python 3 trinket named `Y2-T7-W8-Showcase`.
ai_activities: |
  ## 🤖 Class Discussion: You Just Ran a Data Science Pipeline

  Look back at what your Data Story does: it **collects** data, **parses** it with `split()`, **crunches** the numbers with `sum`/`len`, draws a **chart**, and states an **insight**.

  Here's the secret: that exact sequence — collect → clean → analyse → visualise → conclude — is the **data science pipeline**, and it's the backbone of every AI system on the planet.
  - The **parsing** (`split()`, `int()`) → real AI teams spend most of their time cleaning messy data
  - The **stats** (average, biggest, smallest) → AI models are giant averaging machines under the hood
  - The **insight** → an AI's prediction is just a very fancy "here's the story the numbers tell"

  **Discuss in the Zoom chat:** "If an AI was fed messy, wrong data, what would happen to its answers?" (Think back to Week 1: good data in, good AI out.)

  In **Term 8** you'll bring it ALL together — every skill from all seven terms — into one big capstone project of your own. The data pipeline you just mastered will be one of your most powerful tools. 🧱
---

# Year 2, Lesson 8: Data Story Showcase & Celebration 📊🎤

**Course:** Data & Visualization
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 8 of 8

---

## 🎯 What You'll Do Today

- **Polish** your Data Story so it's reporter-ready — runs, parses the data, shows a chart, states insights
- **Report** it live on Zoom like a news journalist: headline, chart, and an insight backed by a number
- **Cheer on** your classmates and give kind, useful feedback in the chat
- **Vote** on the class's "Most Surprising Finding" 🏆
- **Ace** a fun Term 7 quiz covering everything you've learned about data & visualisation
- **Reflect** on your most surprising finding and the trickiest parsing bug you beat
- **Peek ahead** at Term 8 — the grand finale where you build your OWN project and graduate!

---

## 🤖 BrightByte Has Something to Say...

> *"STOP and look at what you did. Seven weeks ago, 'data' was just a scary word. Today you can take a messy blob of text, slice it up with `split()`, crunch the numbers, draw a CHART, and tell the world what it all MEANS. You turned raw numbers into a STORY — that is exactly what real data scientists get paid to do. Today we don't learn anything new. Today we report, we celebrate, and we soak it all in. I am SO proud of you. 📊🎉"*
> — BrightByte 🤖💛

---

## 📊 Part 1: Polish Pit-Stop — Make It Reporter-Ready

Before you report anything, let's make sure your Data Story shines. **No new features today** — you're just tidying up work you already did.

Open your Data Story Trinket and run it once, top to bottom. Then check every box:

| ✅ Check | What "good" looks like |
|---|---|
| **It runs** | Click ▶ Run — no red error messages |
| **It parses** | `split(",")` turns each CSV line into neat columns |
| **Numbers converted** | You used `int()`/`float()` before any maths (text won't add up!) |
| **Maths is correct** | Your average uses `sum(...) / len(...)` and looks right |
| **Chart appears** | A text bar chart (`"█" * int(n)`) or turtle chart, easy to read |
| **Insight backed by a number** | Not "mango is popular" but "3 of 6 chose mango — half the class!" |
| **A real headline** | One punchy sentence a newsreader would say |

> 💡 **Quick fixes only.** If something's broken, patch it now — but don't add brand-new features five minutes before your report. A Data Story that *works* beats a fancy one that *crashes*.

**Reminder of your term's toolkit** (you already know all of this!):

```python
# The skills that power your Data Story:
data = "mango,banana,mango,orange,mango"
rows = data.split(",")                 # split() → a list (Week 2) ✂️

sleep_hours = [9, 8, 7, 8]
average = sum(sleep_hours) / len(sleep_hours)   # sum/len (Week 3)

count = 3
print("mango " + "█" * int(count))     # text bar chart (Week 4) 📊

# ...then the headline insight (Week 6-7):
print("Mango wins with 3 of 6 votes — half the class! 🥭")
```

When every box is ticked, drop a ✅ in the Zoom chat. You're ready to report!

---

## 🎤 Part 2: The Newsroom — How to Report Your Data Story on Zoom

This is your moment. You're not just showing code — you're a **news reporter** breaking a story to the world. Here's the simple, 2-minute format every reporter follows:

### The 5-Step News Report

1. **📢 The headline** — "Good evening. Breaking news from Year 2: mango is the champion fruit!"
2. **▶ Run it live** — share your screen and click Run so the chart appears
3. **📊 Point at the chart** — "As you can see, mango's bar is the longest by far."
4. **🔢 The insight, backed by a number** — "3 out of 6 people chose mango — that's a full HALF of the class."
5. **🙋 Take one question** — a classmate might ask where your data came from or how you built the chart

### Reporter Confidence Tips

- **You are the expert.** Nobody knows your dataset better than you — you collected it and you found the story.
- **Nervous? That's normal.** Take a breath, read your headline out loud like a newsreader, then run it.
- **Something breaks live?** Say *"ooh, a live bug — breaking news!"* and stay cool. Real programmers debug in front of people all the time.
- **Lead with the surprise.** The best reports open with the finding that made YOU go "wow, really?"

> *"A great data reporter doesn't just read numbers — they tell you what the numbers MEAN. 'Mango got 3 votes' is a fact. 'Mango is the class champion — half of us chose it' is a STORY. Tell the story."*
> — BrightByte 🤖

---

## 💬 Part 3: Cheering Each Other On — Peer Feedback

While each reporter presents, the rest of the class makes them feel like a star. We use the **Zoom chat**:

### Drop a 🔥
A finding surprises you? A neat chart? A clever headline? Drop a 🔥 in the chat right away.

### "Two Stars and a Wish" ⭐⭐💡
When someone finishes, give kind, useful feedback:

- ⭐ **Star 1:** something you liked — *"Your headline made me want to know more!"*
- ⭐ **Star 2:** another thing you liked — *"The bar chart made the winner obvious instantly."*
- 💡 **A Wish:** one kind idea — *"Maybe add the average as a second insight next time?"*

> **Golden rule of feedback:** be **kind, specific, and helpful**. "It's good" isn't feedback. "I like how your chart showed the winner at a glance" — *that's* feedback. 💛

### Example feedback in the chat

```
Amara's report 🔥🔥
⭐ Loved the headline — sounded like real news!
⭐ The insight had a real number in it: "42% chose football"
💡 Wish: maybe show the smallest category too, for contrast
```

### 🏆 Class Vote: Most Surprising Finding

After everyone has reported, your teacher runs a quick vote in the chat: **which finding surprised the class the most?** Type the reporter's name. The most-surprising finding wins a round of 👏 — celebrating that data can genuinely surprise us is the whole point of this term!

---

## 🧠 Part 4: The Term 7 Quiz Game! 🎯

Time for a fun, fast quiz covering the WHOLE data term. Your teacher reads each question — **race to type your answer in the Zoom chat!** No pressure, it's a celebration game. 🎉

**Answer these yourself first, then reveal the key at the bottom.**

1. In a dataset, what does one **ROW** represent — one record (like one person), or one type of fact?

2. Is **"favourite football team"** categorical or numerical data?

3. Is **"hours of sleep"** categorical or numerical data?

4. What does this give you?
   ```python
   "a,b,c".split(",")
   ```

5. After you `split()` a CSV line, the pieces are all **text**. If you want to do maths on a number like `"9"`, what must you do first?

6. What is the average of the list `[10, 20, 30]`? Write the code and the answer.
   ```python
   nums = [10, 20, 30]
   # average = ?
   ```

7. What does `len([4, 8, 15, 16])` give you?

8. What does this print?
   ```python
   count = 3
   print("█" * count)
   ```

9. **The classic trap!** What happens when you run this, and why?
   ```python
   count = 3.0
   print("█" * count)
   ```

10. Why do we **scale** a bar chart (e.g. divide big numbers before drawing bars)?

11. Which of these is a **good insight**?
    - (a) "The data has 6 rows."
    - (b) "Mango is the most popular fruit — 3 of 6 people chose it, that's half the class."

12. In the CSV blob below, how many **columns** does each row have, and what tool slices a row into those columns?
    ```
    name,fruit,sleep
    Ama,mango,9
    ```

<details>
<summary>🔑 Click for the Answer Key</summary>

1. **One record** (e.g. one person / one thing). A row goes across; a column stands tall and holds one type of fact for everyone.
2. **Categorical** — it's a label/name. You can COUNT how many chose each team, but you can't add two teams together.
3. **Numerical** — it's a measurement. You can add hours up and find an average.
4. **`['a', 'b', 'c']`** — `split(",")` cuts the string at every comma and returns a **list** of the pieces.
5. **Convert it to a number with `int()` (or `float()` for decimals).** After `split()`, `"9"` is still text — `int("9")` gives the number `9`.
6. **`20.0`.** Code: `average = sum(nums) / len(nums)` → `60 / 3` → `20.0`. A single `/` always gives a float, so it's `20.0`, not `20`.
7. **`4`** — `len()` counts how many items are in the list.
8. **`███`** — `"█" * 3` repeats the block character 3 times. This is exactly how a text bar chart works.
9. **`TypeError`** (`can't multiply sequence by non-int of type 'float'`). You can only multiply a string by a **whole number** (`int`), never a float. Fix it with `int(count)` → `"█" * int(3.0)` → `███`. This is why chart counts must be whole numbers!
10. **So the chart fits the screen and stays readable.** If one value is 500 and another is 3, the bars would run off the screen. Scaling (e.g. one block = 10) keeps every bar a sensible length while still showing the comparison.
11. **(b).** A good insight tells you what the numbers MEAN and is **backed by a number** ("3 of 6 — half the class"). (a) is just a fact about the file, not a finding about the data.
12. **Three columns** (`name`, `fruit`, `sleep`). The tool is **`split(",")`** — it slices each row at the commas into its separate columns.

</details>

> **Scoring the game:** first correct answer in the chat = 🏆, but everyone who answers gets a 👏. It's about celebrating what you know, not winning!

---

## ✨ Part 5: Reflection — Your Term 7 Journey

Take a moment. Seven weeks ago, "data" was just a blob of text. Now you can slice it, count it, chart it, and tell its story.

**Share in the Zoom chat:**

- 🌟 **The most surprising thing in my data was...** *(a finding you didn't expect, a winner you thought would lose...)*
- 😅 **My trickiest parsing bug was...** *(the `split()` that gave a weird list, the number that was secretly text, the chart that ran off the screen — and how you fixed it)*

Reading each other's reflections reminds us: **everyone hit a messy-data bug, and everyone got through it.** That's exactly what real data scientists do all day. 💪

> *"The bug where your numbers were secretly text? That's the most famous bug in all of data science — professionals hit it every single week. You didn't just survive it, you learned to spot it. That's a real skill you'll use for life."*
> — BrightByte 🤖

---

## 🌟 What's Coming Next Term

You've finished **Term 7 of 8** in Year 2. Here's the whole adventure — with just ONE term to go:

| Term | What You Mastered | What You Built |
|---|---|---|
| 1 | Python Accelerated ✅ | 🧮 Smart Calculator |
| 2 | Loops & Logic Mastery ✅ | 🕹️ Arcade Game Collection |
| 3 | Functions ✅ | 🗺️ Text Adventure Engine |
| 4 | Data Structures ✅ | 📇 Contact Manager |
| 5 | AI Concepts Deep Dive ✅ | 🔍 AI Investigation Report |
| 6 | Working with APIs ✅ | 🤖 AI-Powered Assistant |
| 7 | Data & Visualization ✅ *(done!)* | 📊 Data Story |
| **8** | **Capstone & Portfolio** | **🎓 Your Own Big Project!** |

### 🎓 Next Up: Term 8 — Capstone & Portfolio (The Grand Finale!)

This is it — the term everything has been building towards:

- 🧠 You'll **dream up your OWN project** — a game, a data story, an AI helper, anything that excites you
- 🛠️ You'll use **every skill from all seven terms** to build it from scratch
- 📁 You'll pull your best work into a **portfolio** you can show anyone
- 🎓 And you'll **graduate** from Year 2 as a genuine young programmer!

> *"Seven terms of skills. Eight real projects behind you. Next term there's no new topic — because YOU are the topic. You choose what to build, and you build it. This is the finale, the graduation, the moment you prove to yourself what you can do. I'll be right there cheering. 🎓🚀"*
> — BrightByte 🤖

---

## 🏆 Term 7 Achievements — Look How Far You Came!

Over 8 weeks, you learned and mastered:

- ✅ **Week 1:** What data IS — rows & columns, categorical vs numerical, tally dicts
- ✅ **Week 2:** Parsing data with `split()` — slicing CSV strings into rows and columns ✂️
- ✅ **Week 3:** Number crunching — `sum()`, `len()`, averages, biggest & smallest
- ✅ **Week 4:** Text bar charts — turning numbers into `"█" * n` pictures 📊
- ✅ **Week 5:** Turtle charts — drawing colourful bar graphs on screen 🐢
- ✅ **Week 6:** Finding the story — turning numbers into real insights
- ✅ **Week 7:** Built a complete **Data Story** — parse → stats → chart → headline insights
- ✅ **Week 8:** Polished, reported, and celebrated a real data investigation!

**You took a pile of raw numbers and turned it into a story people care about. That's the whole job of a data scientist — and you did it. 🎉**

---

## 🎉 A Final Word from BrightByte

> *"The data term: COMPLETE. You didn't just crunch numbers — you found the STORIES hiding inside them and reported them like a pro. That's a superpower most adults don't have. Rest up, feel proud, and I'll see you in Term 8 — the grand finale, where you build your very own project and graduate from Year 2. One term to go. Let's finish strong! 📊🎓🚀"*
> — BrightByte 🤖💛

---

## 📚 Homework: Your Data Detective Certificate 🏆

Choose ONE (or both if you're buzzing!):

### Option A — Data Detective Certificate (recommended)
Write a **"Data Detective Certificate"** program in Trinket that celebrates a small dataset with a text chart.

**Requirements:**
1. Store a small dataset (5–7 rows) about anything you like — snacks, teams, songs
2. Use `sum()` and `len()` to compute a **total** and an **average**
3. Print a **text bar chart** using `"█" * int(n)` (remember: the count must be a whole number!)
4. State at least **one insight backed by a number** in a full sentence
5. Use `"=" * 40` (or similar) for a neat border and end with a proud emoji 🎉

*(See today's solution code for one example you can learn from!)*

### Option B — Family News Report
Present your finished Data Story to someone at home like a TV reporter. Read your headline, run the chart, explain one insight. Then write 3–4 sentences: what was your most surprising finding, did your family guess it first, and what did they think of your chart?

**Also (optional, 2 min):** peek at the Term 8 preview above and jot down ONE idea for the capstone project you'd love to build.

**Submit:** Save your Trinket (name it `Y2-T7-W8-Showcase`), click **Share**, copy the link, and send it wherever your teacher asks.

👉 **Trinket:** [trinket.io](https://trinket.io) — log in and open a new Python 3 trinket named `Y2-T7-W8-Showcase`.

---

*You finished the data term, detective. You can take numbers and tell their story now — that's real power. One term to go. See you in Term 8! 📊🎤🎓*
