---
title: "Project: Data Story 📊📖"
description: "Build a complete Data Story program end-to-end — parse a CSV dataset, compute stats, draw a text bar chart, and print headline insights, all wired together with functions"
difficulty: "intermediate"
order_index: 7
course_slug: "year2-term-7-data-visualization"
is_premium: false
requires_trinket: true
starter_code: |
  # 📊📖 Y2-T7-W7-DataStory — My Data Story
  # Made by: [YOUR NAME]
  # SAVE THIS! You present it next week (Week 8: Data Story Showcase).

  # --- The dataset: one week of screen-time, stored as a CSV string ---
  DATA = """day,minutes,activity
  Mon,95,games
  Tue,60,videos
  Wed,120,games
  Thu,45,homework
  Fri,150,games
  Sat,200,videos
  Sun,80,homework"""

  # --- Stage 1: turn the CSV text into a list of dicts ---
  def parse_data(text):
      records = []
      # TODO: strip the text, split into lines, SKIP the header row,
      #       split each line on commas, and convert minutes with int()
      return records

  # --- Stage 2: print the numbers (total, average, highest, lowest, counts) ---
  def show_stats(records):
      # TODO: build a list of minutes, then sum / average / max / min
      #       (guard against EMPTY data!) and tally the activities
      pass

  # --- Stage 3: draw a TEXT bar chart, scaled to whole blocks ---
  def draw_chart(values):
      # TODO: find the biggest value, then print "█" * int(scaled) for each
      pass

  # --- Stage 4: print 2-3 headline insights backed by the numbers ---
  def print_insights(records):
      # TODO: use the numbers to write real sentences
      pass

  # --- The conductor: run every stage in order ---
  def main():
      records = parse_data(DATA)
      show_stats(records)
      # TODO: build a day -> minutes dict, then call draw_chart(...)
      print_insights(records)

  main()

  # Build it stage by stage with BrightByte! 🏗️
solution_code: |
  # 📊📖 Y2-T7-W7-DataStory — My Data Story
  # Made by: [YOUR NAME]
  # SAVE THIS! You present it next week (Week 8: Data Story Showcase).

  # --- The dataset: one week of screen-time, stored as a CSV string ---
  DATA = """day,minutes,activity
  Mon,95,games
  Tue,60,videos
  Wed,120,games
  Thu,45,homework
  Fri,150,games
  Sat,200,videos
  Sun,80,homework"""

  # --- Stage 1: turn the CSV text into a list of dicts ---
  def parse_data(text):
      records = []
      lines = text.strip().split("\n")   # .strip() drops any blank first/last line
      for line in lines[1:]:             # [1:] skips the header row
          if line.strip() == "":         # skip any empty line safely
              continue
          parts = line.split(",")
          row = {
              "day": parts[0],
              "minutes": int(parts[1]),  # convert TEXT -> NUMBER!
              "activity": parts[2],
          }
          records.append(row)
      return records

  # --- Stage 2: print the numbers ---
  def show_stats(records):
      print()
      print("📊 SCREEN-TIME STATS")
      print("-" * 40)
      minutes = []
      for row in records:
          minutes.append(row["minutes"])
      count = len(minutes)
      if count == 0:                     # guard: no dividing by zero!
          print("No data to summarise!")
          return
      total = sum(minutes)
      average = total / count
      highest = max(minutes)
      lowest = min(minutes)
      print(f"Days recorded : {count}")
      print(f"Total minutes : {total}")
      print(f"Average / day : {average:.1f} min")
      print(f"Most (a day)  : {highest} min")
      print(f"Least (a day) : {lowest} min")
      # tally the ACTIVITY column (categorical data)
      counts = {}
      for row in records:
          activity = row["activity"]
          if activity in counts:
              counts[activity] = counts[activity] + 1
          else:
              counts[activity] = 1
      print("Activity counts:")
      for activity in counts:
          print(f"  {activity}: {counts[activity]}")

  # --- Stage 3: draw a scaled TEXT bar chart ---
  def draw_chart(values):
      print()
      print("📊 MINUTES PER DAY")
      print("-" * 40)
      if len(values) == 0:
          print("No data to chart!")
          return
      biggest = max(values.values())     # the tallest bar sets the scale
      for label in values:
          amount = values[label]
          blocks = int(amount / biggest * 20)  # int() — no half blocks!
          bar = "█" * blocks
          print(f"{label:<4}| {bar} {amount}")

  # --- Stage 4: print headline insights ---
  def print_insights(records):
      print()
      print("📖 HEADLINE INSIGHTS")
      print("-" * 40)
      if len(records) == 0:
          print("No data — no insights!")
          return
      minutes = []
      for row in records:
          minutes.append(row["minutes"])
      total = sum(minutes)
      average = total / len(minutes)
      # which day was busiest / quietest?
      busiest = records[0]
      quietest = records[0]
      for row in records:
          if row["minutes"] > busiest["minutes"]:
              busiest = row
          if row["minutes"] < quietest["minutes"]:
              quietest = row
      # which activity happened most often?
      counts = {}
      for row in records:
          activity = row["activity"]
          if activity in counts:
              counts[activity] = counts[activity] + 1
          else:
              counts[activity] = 1
      top_activity = ""
      top_count = 0
      for activity in counts:
          if counts[activity] > top_count:
              top_count = counts[activity]
              top_activity = activity
      hours = total / 60
      print(f"📌 You spent {total} minutes ({hours:.1f} hours) on screens this week.")
      print(f"📌 Your busiest day was {busiest['day']} ({busiest['minutes']} min); your quietest was {quietest['day']} ({quietest['minutes']} min).")
      print(f"📌 Your most common activity was '{top_activity}' on {top_count} of {len(records)} days.")
      print(f"📌 On average that's about {average:.0f} minutes a day.")

  # --- The conductor: run every stage in order ---
  def main():
      print("=" * 40)
      print("   📊📖 MY SCREEN-TIME DATA STORY")
      print("=" * 40)
      records = parse_data(DATA)          # 1. PARSE
      show_stats(records)                 # 2. STATS
      minutes_by_day = {}                 # 3. prepare data for the CHART
      for row in records:
          minutes_by_day[row["day"]] = row["minutes"]
      draw_chart(minutes_by_day)
      print_insights(records)             # 4. INSIGHTS
      print()
      print("=" * 40)
      print("The End — that's my data story! 🎉")
      print("=" * 40)

  main()
class_activities: |
  ## 🏗️ Class Activity: Build the Data Story Pipeline — Live, Together!

  We build the whole Data Story in **four stages**, live on Zoom, one function at a time. After each stage, **run your code** and give a **thumbs up** 👍 when it works. We move together — do NOT race ahead!

  > 📁 **First:** create a new Trinket and name it **`Y2-T7-W7-DataStory`**. You KEEP this and present it next week!

  ### Stage 1 — Parse (⭐⭐)
  Paste the `DATA` string, then write `parse_data` to turn it into a list of dicts.
  ```python
  def parse_data(text):
      records = []
      lines = text.strip().split("\n")
      for line in lines[1:]:
          if line.strip() == "":
              continue
          parts = line.split(",")
          row = {"day": parts[0], "minutes": int(parts[1]), "activity": parts[2]}
          records.append(row)
      return records

  print(parse_data(DATA))
  ```
  ✅ **Checkpoint:** Run it. Do you see a list of 7 dicts, with `minutes` as **numbers** (no quotes)? Thumbs up! 👍

  ### Stage 2 — Stats (⭐⭐)
  Add `show_stats(records)` — total, average, highest, lowest, and an activity tally.
  ✅ **Checkpoint:** In the Zoom chat: what is the **total** and the **average**? (750 and 107.1!)

  ### Stage 3 — Chart (⭐⭐⭐)
  Add `draw_chart(values)`. Remember: `int()` around the scaled block count!
  ✅ **Checkpoint:** Which day has the longest bar? (Saturday — 200 min!)

  ### Stage 4 — Insights + main() (⭐⭐⭐)
  Add `print_insights(records)`, then write `main()` to run all four stages in order.
  ✅ **Final checkpoint:** Run the whole program. Do you get the full report — stats, chart, AND insights? 🎉

  ### 🔄 Now Make It YOURS
  Swap in the dataset **you chose in Week 6**. Change the `DATA` string and the three column names (`day`, `minutes`, `activity`) to match your data — everything else keeps working! Give a thumbs up when your OWN data story runs.
take_home_assignment: |
  ## 📚 Homework: Finish YOUR Data Story

  Turn today's pipeline into a polished, presentation-ready Data Story about a topic **you** care about — screen-time, football scores, pocket money, sleep, songs played, anything!

  **Requirements:**
  1. Open your **`Y2-T7-W7-DataStory`** Trinket
  2. Put YOUR dataset in the `DATA` string — at least **6 rows**, with one categorical and one numerical column
  3. Make all four functions work on it: `parse_data`, `show_stats`, `draw_chart`, `print_insights`
  4. Write **2-3 real insights** that are backed by your numbers (not made up!)
  5. Make it look tidy with banner lines and clear headings

  **Challenge tiers:**
  - ⭐ Swap in your own dataset; all four functions run without errors
  - ⭐⭐ Add a THIRD insight and make your chart labels line up neatly
  - ⭐⭐⭐ Add a **turtle** bar chart as a bonus (a coloured rectangle per bar) — keep the text chart too!

  > ⚠️ Remember: convert your numeric column with `int()` (or `float()`) inside `parse_data`, or the maths will crash!

  **Bring it to Week 8** — you'll present it to the class. Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? You Just Ran the AI Workflow

  Look at your four stages: **parse → analyse → visualise → interpret**. That exact pipeline is what every data scientist (and every AI system) runs before it can be "smart":

  - **Parse** — messy raw data (like your CSV) is cleaned into neat rows the computer can use
  - **Analyse** — totals, averages, and counts describe what's really going on
  - **Visualise** — a chart makes the pattern jump out at a human
  - **Interpret** — a headline turns numbers into a decision ("cut down on Saturday gaming!")

  An AI recommending your next video does the same dance on millions of rows. You just did it by hand on seven.

  > **Zoom chat, one line:** which of your four stages do you think is hardest for a computer to do well — and why?
---

# Year 2, Lesson 7: Project — Data Story 📊📖

**Course:** Data & Visualization
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Learn Today

- How to snap together **six weeks** of data skills into one complete program
- How to structure a real project with **functions**: `parse_data`, `show_stats`, `draw_chart`, `print_insights`
- How a `main()` function acts as the **conductor** that runs every stage in order
- How to take ONE dataset all the way from **raw CSV text** to a finished **data story**
- You'll finish with a real, running Data Story you'll **present next week** 🎉

---

## 🤖 BrightByte's Big Build Announcement

> *"This is it — the moment this whole term has been building towards. For six weeks you learned the pieces: storing data, splitting CSVs, crunching stats, drawing charts, and writing headlines. Today we snap them ALL together into one program that goes from a plain blob of text to a beautiful data STORY — numbers, a chart, and insights a human can actually understand. By the end of this class you'll have a project you're proud to present. Aprons on — we're building!"*
> — BrightByte 🤖📊

---

## 🧩 Part 1: The Plan — What Are We Building?

A **Data Story** is a program that takes ONE dataset and walks it through four stages, ending with something a human can read and act on. Look how each week becomes a stage:

| Week | Skill You Learned | Where It Goes in the Data Story |
|---|---|---|
| 2 | `split()` a CSV string | **Stage 1: Parse** — text into a list of dicts |
| 3 | total, average, min, max | **Stage 2: Stats** — the numbers |
| 1 | tally dict (category counts) | **Stage 2: Stats** — counting activities |
| 4 | `"█" * n` text bar charts | **Stage 3: Chart** — a picture of the data |
| 6 | headline insights | **Stage 4: Insights** — what it all MEANS |

We wrap each stage in its own **function**, then a `main()` function runs them one after another. This is exactly how professional programmers keep big projects tidy.

Here's the finished report we're aiming for:

```
========================================
   📊📖 MY SCREEN-TIME DATA STORY
========================================

📊 SCREEN-TIME STATS
----------------------------------------
Days recorded : 7
Total minutes : 750
Average / day : 107.1 min
Most (a day)  : 200 min
Least (a day) : 45 min
Activity counts:
  games: 3
  videos: 2
  homework: 2

📊 MINUTES PER DAY
----------------------------------------
Mon | █████████ 95
Tue | ██████ 60
Wed | ████████████ 120
Thu | ████ 45
Fri | ███████████████ 150
Sat | ████████████████████ 200
Sun | ████████ 80

📖 HEADLINE INSIGHTS
----------------------------------------
📌 You spent 750 minutes (12.5 hours) on screens this week.
📌 Your busiest day was Sat (200 min); your quietest was Thu (45 min).
📌 Your most common activity was 'games' on 3 of 7 days.
📌 On average that's about 107 minutes a day.

========================================
The End — that's my data story! 🎉
========================================
```

> 📁 **BEFORE WE START:** open Trinket, create a **new** Python 3 trinket, and name it **`Y2-T7-W7-DataStory`**. This is important — you'll present THIS EXACT file next week. Do not delete it!

Our example dataset is **one week of screen-time**. Paste it at the very top of your program:

```python
DATA = """day,minutes,activity
Mon,95,games
Tue,60,videos
Wed,120,games
Thu,45,homework
Fri,150,games
Sat,200,videos
Sun,80,homework"""
```

Notice the two families of data (Week 1!): `activity` is **categorical** (we count it), `minutes` is **numerical** (we add and average it).

---

## ✂️ Part 2: Stage 1 — Parse the Data

Right now `DATA` is one big lump of text. `parse_data` slices it into a **list of dicts** — one dict per day — using `split()` from Week 2.

```python
def parse_data(text):
    records = []
    lines = text.strip().split("\n")   # split into rows; .strip() drops blank lines
    for line in lines[1:]:             # [1:] skips the header row
        if line.strip() == "":         # skip any empty line safely
            continue
        parts = line.split(",")
        row = {
            "day": parts[0],
            "minutes": int(parts[1]),  # convert TEXT -> NUMBER!
            "activity": parts[2],
        }
        records.append(row)
    return records
```

### 🔎 Reading it line by line

- `text.strip().split("\n")` — split the big string into a **list of lines**. `.strip()` removes any stray blank line at the top or bottom.
- `lines[1:]` — the first line is the **header** (`day,minutes,activity`), so we skip it and loop over the rest.
- `if line.strip() == "": continue` — if a line is empty, jump past it (this stops the crash from a trailing blank line!).
- `parts = line.split(",")` — split ONE row into its columns: `["Mon", "95", "games"]`.
- `int(parts[1])` — the biggest idea today: after `split()`, `"95"` is **text**. We MUST convert it with `int()` before we can add it up.

**Test it on its own:**
```python
print(parse_data(DATA))
```
```
[{'day': 'Mon', 'minutes': 95, 'activity': 'games'}, {'day': 'Tue', 'minutes': 60, ...}]
```

See how `minutes` has **no quotes**? That means it's a real number, ready for maths. 🎯

✅ **Zoom checkpoint:** Run it. Do you see 7 dicts with `minutes` as numbers? Thumbs up! 👍

---

## 🔢 Part 3: Stage 2 — Show the Stats

Now the numbers. `show_stats` builds a list of just the minutes, then uses `sum`, `max`, and `min` (Week 3), plus a **tally dict** (Week 1) for the activities.

```python
def show_stats(records):
    print()
    print("📊 SCREEN-TIME STATS")
    print("-" * 40)
    minutes = []
    for row in records:
        minutes.append(row["minutes"])
    count = len(minutes)
    if count == 0:                     # guard: never divide by zero!
        print("No data to summarise!")
        return
    total = sum(minutes)
    average = total / count
    highest = max(minutes)
    lowest = min(minutes)
    print(f"Days recorded : {count}")
    print(f"Total minutes : {total}")
    print(f"Average / day : {average:.1f} min")
    print(f"Most (a day)  : {highest} min")
    print(f"Least (a day) : {lowest} min")
    # tally the ACTIVITY column (categorical data)
    counts = {}
    for row in records:
        activity = row["activity"]
        if activity in counts:
            counts[activity] = counts[activity] + 1
        else:
            counts[activity] = 1
    print("Activity counts:")
    for activity in counts:
        print(f"  {activity}: {counts[activity]}")
```

### 🔎 The important bits

- We collect all the minutes into one list, then let `sum`, `max`, `min` do the heavy lifting.
- `average = total / count` — **but first** we check `if count == 0`. Dividing by zero crashes Python! An empty dataset must be handled gracefully.
- `{average:.1f}` shows one decimal place: `107.1`, not `107.14285714`.
- The tally dict is the same trick as Week 1 — it counts each activity name.

✅ **Zoom checkpoint:** What's the total and the average? Type it in the chat! (750 and 107.1)

---

## 📊 Part 4: Stage 3 — Draw the Chart

A wall of numbers is boring. `draw_chart` turns them into bars you can SEE. This function takes a dictionary of **label → number** and prints one bar per entry.

```python
def draw_chart(values):
    print()
    print("📊 MINUTES PER DAY")
    print("-" * 40)
    if len(values) == 0:
        print("No data to chart!")
        return
    biggest = max(values.values())     # the tallest bar sets the scale
    for label in values:
        amount = values[label]
        blocks = int(amount / biggest * 20)  # scale to a max of 20 blocks
        bar = "█" * blocks
        print(f"{label:<4}| {bar} {amount}")
```

### 🔎 The scaling trick (Week 4!)

Saturday is 200 minutes. If we printed 200 blocks, the chart would be enormous. So we **scale**:

- `biggest = max(values.values())` — the largest number (200).
- `amount / biggest * 20` — turns every value into a share of 20 blocks. Saturday (200) becomes the full 20; Monday (95) becomes `95 / 200 * 20 = 9.5`.
- `int(...)` — you can't print **half a block**! `int(9.5)` becomes `9`. This is the make-or-break line.

> 💡 Because we scale by the biggest value, this ONE function works for ANY dataset — even your own next week. Big numbers or small, the tallest bar is always 20 blocks.

**The chart it draws:**
```
Mon | █████████ 95
Tue | ██████ 60
Wed | ████████████ 120
Thu | ████ 45
Fri | ███████████████ 150
Sat | ████████████████████ 200
Sun | ████████ 80
```

✅ **Zoom checkpoint:** Which day has the longest bar? (Saturday — 200 minutes!)

---

## 📖 Part 5: Stage 4 — Print the Insights

Numbers and charts are great, but a data story needs a **human takeaway**. `print_insights` reads the data and writes real sentences backed by the numbers (Week 6).

```python
def print_insights(records):
    print()
    print("📖 HEADLINE INSIGHTS")
    print("-" * 40)
    if len(records) == 0:
        print("No data — no insights!")
        return
    minutes = []
    for row in records:
        minutes.append(row["minutes"])
    total = sum(minutes)
    average = total / len(minutes)
    # which day was busiest / quietest?
    busiest = records[0]
    quietest = records[0]
    for row in records:
        if row["minutes"] > busiest["minutes"]:
            busiest = row
        if row["minutes"] < quietest["minutes"]:
            quietest = row
    # which activity happened most often?
    counts = {}
    for row in records:
        activity = row["activity"]
        if activity in counts:
            counts[activity] = counts[activity] + 1
        else:
            counts[activity] = 1
    top_activity = ""
    top_count = 0
    for activity in counts:
        if counts[activity] > top_count:
            top_count = counts[activity]
            top_activity = activity
    hours = total / 60
    print(f"📌 You spent {total} minutes ({hours:.1f} hours) on screens this week.")
    print(f"📌 Your busiest day was {busiest['day']} ({busiest['minutes']} min); your quietest was {quietest['day']} ({quietest['minutes']} min).")
    print(f"📌 Your most common activity was '{top_activity}' on {top_count} of {len(records)} days.")
    print(f"📌 On average that's about {average:.0f} minutes a day.")
```

### 🔎 How we find the "busiest" day

We start by *assuming* the first row is the busiest, then loop through: every time we meet a bigger day, we remember it. This is the "keep the best so far" pattern — the same idea as `max`, but it keeps the whole **row** (so we know the day's name too).

✅ **Zoom checkpoint:** Which day is the busiest — and does it match the tallest bar? (Saturday, yes!)

---

## 🎬 Part 6: The Conductor — main()

Four functions, but nothing runs them yet. `main()` is the **conductor** — it calls each stage in order. Notice how readable it is: it reads like the plan itself.

```python
def main():
    print("=" * 40)
    print("   📊📖 MY SCREEN-TIME DATA STORY")
    print("=" * 40)
    records = parse_data(DATA)          # 1. PARSE
    show_stats(records)                 # 2. STATS
    minutes_by_day = {}                 # 3. prepare data for the CHART
    for row in records:
        minutes_by_day[row["day"]] = row["minutes"]
    draw_chart(minutes_by_day)
    print_insights(records)             # 4. INSIGHTS
    print()
    print("=" * 40)
    print("The End — that's my data story! 🎉")
    print("=" * 40)

main()
```

Between stats and chart we build one small helper dict — `minutes_by_day` — that maps each day to its minutes, so the chart has clean `label → number` pairs to draw.

> 💡 `main()` is why functions are so powerful: the big picture stays simple (`parse → stats → chart → insights`), and each messy detail is hidden inside its own function. That's how real programs stay understandable.

---

## ✅ Part 7: The Whole Program — Run It!

Here is your complete Data Story. This is what should be in your `Y2-T7-W7-DataStory` Trinket:

```python
# 📊📖 Y2-T7-W7-DataStory — My Data Story

DATA = """day,minutes,activity
Mon,95,games
Tue,60,videos
Wed,120,games
Thu,45,homework
Fri,150,games
Sat,200,videos
Sun,80,homework"""

def parse_data(text):
    records = []
    lines = text.strip().split("\n")
    for line in lines[1:]:
        if line.strip() == "":
            continue
        parts = line.split(",")
        row = {
            "day": parts[0],
            "minutes": int(parts[1]),
            "activity": parts[2],
        }
        records.append(row)
    return records

def show_stats(records):
    print()
    print("📊 SCREEN-TIME STATS")
    print("-" * 40)
    minutes = []
    for row in records:
        minutes.append(row["minutes"])
    count = len(minutes)
    if count == 0:
        print("No data to summarise!")
        return
    total = sum(minutes)
    average = total / count
    highest = max(minutes)
    lowest = min(minutes)
    print(f"Days recorded : {count}")
    print(f"Total minutes : {total}")
    print(f"Average / day : {average:.1f} min")
    print(f"Most (a day)  : {highest} min")
    print(f"Least (a day) : {lowest} min")
    counts = {}
    for row in records:
        activity = row["activity"]
        if activity in counts:
            counts[activity] = counts[activity] + 1
        else:
            counts[activity] = 1
    print("Activity counts:")
    for activity in counts:
        print(f"  {activity}: {counts[activity]}")

def draw_chart(values):
    print()
    print("📊 MINUTES PER DAY")
    print("-" * 40)
    if len(values) == 0:
        print("No data to chart!")
        return
    biggest = max(values.values())
    for label in values:
        amount = values[label]
        blocks = int(amount / biggest * 20)
        bar = "█" * blocks
        print(f"{label:<4}| {bar} {amount}")

def print_insights(records):
    print()
    print("📖 HEADLINE INSIGHTS")
    print("-" * 40)
    if len(records) == 0:
        print("No data — no insights!")
        return
    minutes = []
    for row in records:
        minutes.append(row["minutes"])
    total = sum(minutes)
    average = total / len(minutes)
    busiest = records[0]
    quietest = records[0]
    for row in records:
        if row["minutes"] > busiest["minutes"]:
            busiest = row
        if row["minutes"] < quietest["minutes"]:
            quietest = row
    counts = {}
    for row in records:
        activity = row["activity"]
        if activity in counts:
            counts[activity] = counts[activity] + 1
        else:
            counts[activity] = 1
    top_activity = ""
    top_count = 0
    for activity in counts:
        if counts[activity] > top_count:
            top_count = counts[activity]
            top_activity = activity
    hours = total / 60
    print(f"📌 You spent {total} minutes ({hours:.1f} hours) on screens this week.")
    print(f"📌 Your busiest day was {busiest['day']} ({busiest['minutes']} min); your quietest was {quietest['day']} ({quietest['minutes']} min).")
    print(f"📌 Your most common activity was '{top_activity}' on {top_count} of {len(records)} days.")
    print(f"📌 On average that's about {average:.0f} minutes a day.")

def main():
    print("=" * 40)
    print("   📊📖 MY SCREEN-TIME DATA STORY")
    print("=" * 40)
    records = parse_data(DATA)
    show_stats(records)
    minutes_by_day = {}
    for row in records:
        minutes_by_day[row["day"]] = row["minutes"]
    draw_chart(minutes_by_day)
    print_insights(records)
    print()
    print("=" * 40)
    print("The End — that's my data story! 🎉")
    print("=" * 40)

main()
```

🎉 **Run it. You built a complete data-analysis pipeline!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: Forgetting to convert numbers after `split()`**

❌ Wrong — `minutes` stays as text:
```python
row = {"day": parts[0], "minutes": parts[1], "activity": parts[2]}
# later...
total = sum(minutes)
```
```
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```
😱 `split()` always gives you **text**. `"95"` can't be added up!

✅ Correct — convert with `int()` inside `parse_data`:
```python
row = {"day": parts[0], "minutes": int(parts[1]), "activity": parts[2]}
```

---

**Mistake 2: Multiplying `"█"` by a float**

❌ Wrong:
```python
blocks = amount / biggest * 20      # this is a float, e.g. 9.5
bar = "█" * blocks
```
```
TypeError: can't multiply sequence by non-int of type 'float'
```
You can't print **half a block**!

✅ Correct — wrap the scale in `int()`:
```python
blocks = int(amount / biggest * 20)   # 9.5 -> 9
bar = "█" * blocks
```

---

**Mistake 3: A trailing blank line in the CSV**

❌ Wrong — an empty last line becomes a broken row:
```python
DATA = """day,minutes,activity
Mon,95,games
"""                                   # <- sneaky blank line!
# ...
row = {"minutes": int(parts[1]), ...}
```
```
IndexError: list index out of range
```
The empty line splits into `['']`, so `parts[1]` doesn't exist.

✅ Correct — `.strip()` the whole text and skip empty lines:
```python
lines = text.strip().split("\n")
for line in lines[1:]:
    if line.strip() == "":
        continue
```

---

**Mistake 4: Dividing by zero on empty data**

❌ Wrong — if `records` is empty:
```python
average = total / count               # count is 0!
```
```
ZeroDivisionError: division by zero
```

✅ Correct — guard first:
```python
if count == 0:
    print("No data to summarise!")
    return
average = total / count
```

> A professional program never crashes on empty data — it says so politely instead.

---

## 🏗️ Class Activity: Build the Data Story — Live, Together!

We build all four stages live, one function at a time, then wire them up with `main()`.

> 📁 Create and name your Trinket **`Y2-T7-W7-DataStory`** first!

1. **Stage 1 — Parse (⭐⭐):** write `parse_data` and print the list of dicts. Check `minutes` are numbers.
2. **Stage 2 — Stats (⭐⭐):** add `show_stats` — total, average, highest, lowest, activity tally.
3. **Stage 3 — Chart (⭐⭐⭐):** add `draw_chart` — remember `int()` around the scaled blocks!
4. **Stage 4 — Insights + main() (⭐⭐⭐):** add `print_insights`, then `main()` to run them all.

**Then make it yours:** swap the `DATA` string for the dataset you chose in **Week 6**, update the three column names, and re-run. Give a thumbs up 👍 when your OWN data story runs!

---

## 🌟 What's Coming Next Week?

Your Data Story runs — but a great story is meant to be **told**. Next week is the big finale:

**Week 8: Data Story Showcase 📊🎤**

- 🎤 You'll **present** your Data Story to the class — dataset, chart, and headline insights
- 👀 You'll see everyone else's — football tables, sleep trackers, song counts, and more
- 💡 You'll learn how to explain what your numbers MEAN in under a minute
- 🏆 It's the grand finish of the whole Data & Visualization term!

> Keep your `Y2-T7-W7-DataStory` Trinket safe and polished — next week it takes the stage!

---

## 🏆 Today's Achievements

- ✅ You combined **six weeks** of data skills into one complete program
- ✅ You structured a real project with **four functions** and a `main()` conductor
- ✅ You took ONE dataset from raw **CSV text** all the way to a finished **data story**
- ✅ You parsed, computed **stats**, drew a scaled **chart**, and wrote **insights**
- ✅ You handled the tricky bits: `int()` conversion, `int()` scaling, empty data, blank lines

> *"Look at what you just built. Six weeks ago a CSV was just a scary blob of text. Today you wrote a program that reads it, measures it, draws it, AND explains it — all wired together with functions like a real software engineer. That's not a lesson exercise. That's a PROJECT. Now go make it yours, and get ready to present it."*
> — BrightByte 🤖📊

---

## 📚 Homework: Finish YOUR Data Story

Turn today's pipeline into a polished Data Story about a topic **you** care about.

**Requirements:**
1. Open your **`Y2-T7-W7-DataStory`** Trinket
2. Put YOUR dataset in the `DATA` string — at least **6 rows**, one categorical + one numerical column
3. Make all four functions work on it: `parse_data`, `show_stats`, `draw_chart`, `print_insights`
4. Write **2-3 real insights** backed by your numbers
5. Make it tidy with banners and clear headings

**Challenge tiers:**
- ⭐ Swap in your own dataset; all four functions run without errors
- ⭐⭐ Add a THIRD insight and line up your chart labels neatly
- ⭐⭐⭐ Add a **turtle** bar chart as a bonus — keep the text chart too!

> ⚠️ Remember: convert your numeric column with `int()` inside `parse_data`, or the maths will crash!

**Bring it to Week 8 to present!** Save your Trinket, click **Share**, and paste the link wherever your teacher asks.

👉 **Trinket:** [trinket.io](https://trinket.io) — log in and open your Python 3 trinket named `Y2-T7-W7-DataStory`.

---

*You didn't just analyse data today — you told its STORY, from raw text to real meaning. See you next week for the showcase! 📊📖*
