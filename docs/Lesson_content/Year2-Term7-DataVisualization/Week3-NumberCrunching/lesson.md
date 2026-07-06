---
title: "Number Crunching 🔢🧮"
description: "Turn a parsed dataset into real insight — compute total, average, minimum, maximum and counts, tally categories with a dict, and find the top record with a loop"
difficulty: "intermediate"
order_index: 3
course_slug: "year2-term-7-data-visualization"
is_premium: false
requires_trinket: true
starter_code: |
  # 🔢 Number Cruncher — Class Scores!
  # The data is already parsed into a list of dicts for you (Week 2 recall).

  data = """name,team,score
  Amara,Red,85
  Kwame,Blue,92
  Ngozi,Red,78
  Tunde,Red,88
  Ada,Green,95
  Chidi,Blue,70"""

  # --- Parsing (recall from Week 2) ---
  records = []
  for line in data.split("\n")[1:]:      # skip the header row
      parts = line.split(",")
      records.append({
          "name": parts[0],
          "team": parts[1],
          "score": int(parts[2])          # convert the number column!
      })

  # TODO 1: pull every score into a list called `scores`

  # TODO 2: print the total, the count, and the average (rounded to 1 dp)

  # TODO 3: print the highest and the lowest score

  # TODO 4: find and print the top scorer's name

  # Crunch those numbers! 🧮
solution_code: |
  # 🔢 Number Cruncher — one possible solution

  data = """name,team,score
  Amara,Red,85
  Kwame,Blue,92
  Ngozi,Red,78
  Tunde,Red,88
  Ada,Green,95
  Chidi,Blue,70"""

  # --- Parsing (recall from Week 2) ---
  records = []
  for line in data.split("\n")[1:]:
      parts = line.split(",")
      records.append({
          "name": parts[0],
          "team": parts[1],
          "score": int(parts[2])
      })

  # TODO 1: pull the numeric column into its own list
  scores = []
  for row in records:
      scores.append(row["score"])
  # scores is now [85, 92, 78, 88, 95, 70]

  # TODO 2: total, count and average
  total = sum(scores)                 # 508
  count = len(scores)                 # 6
  average = round(total / count, 1)   # 84.7
  print("Total score:", total)
  print("How many students:", count)
  print("Average score:", average)

  # TODO 3: highest and lowest
  print("Highest score:", max(scores))   # 95
  print("Lowest score:", min(scores))    # 70

  # TODO 4: the top scorer (the whole record)
  top = records[0]
  for row in records:
      if row["score"] > top["score"]:
          top = row
  print("Top scorer:", top["name"], "with", top["score"])

  # Bonus: how many students on each team? (a dict tally)
  team_counts = {}
  for row in records:
      team = row["team"]
      if team in team_counts:
          team_counts[team] += 1
      else:
          team_counts[team] = 1
  print("Team counts:", team_counts)
class_activities: |
  ## 🧮 Class Activity: Data Cruncher

  We are handed a parsed dataset and asked to crunch the numbers together. Your teacher shares the screen; you type in Trinket and give a **thumbs up** in Zoom when each part runs. 👍

  We use this scores dataset (already parsed into `records`, a list of dicts):

  ```python
  data = """name,team,score
  Amara,Red,85
  Kwame,Blue,92
  Ngozi,Red,78
  Tunde,Red,88
  Ada,Green,95
  Chidi,Blue,70"""
  ```

  ### ⭐ Level 1 — The Big Three
  1. Pull every `score` into a list called `scores`
  2. Print the **total** with `sum(scores)`
  3. Print the **count** with `len(scores)`

  ### ⭐⭐ Level 2 — Average, Highest, Lowest
  4. Print the **average**, rounded to 1 decimal place: `round(sum(scores)/len(scores), 1)`
  5. Print the **highest** with `max(scores)` and the **lowest** with `min(scores)`

  ### ⭐⭐⭐ Level 3 — The Top Record
  6. Use a loop to find the **whole record** with the highest score (not just the number)
  7. Print the top scorer's **name and score** in a friendly sentence

  ### 💬 Zoom-Chat Quickfire
  Before we run the code, answer in the chat: **what is the average of `[10, 20, 30]`?**
  (Then we prove it: `sum([10, 20, 30]) / 3` → `60 / 3` → `20.0`.)

  ### 🏆 Bonus Cruncher
  Add a dict **tally** that counts how many students are on each team. Paste your `team_counts` result in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: Stats Report 📊

  Write a **Stats Report** program in Trinket. It takes a small dataset, crunches the numbers, and prints a tidy report.

  Start from this snack-shop data (or invent your own — same shape):

  ```python
  data = """snack,type,sold
  Puff-puff,Fried,24
  Chin-chin,Baked,18
  Plantain chips,Fried,30
  Meat pie,Baked,15
  Groundnut,Raw,22"""
  ```

  **Requirements:**
  1. **Parse** the data into a list of dicts, converting `sold` to an `int` (Week 2 recall)
  2. Print the **total** sold (`sum`)
  3. Print the **average** sold, **rounded** to 1 decimal place
  4. Print the **highest** and **lowest** sold amounts
  5. Print a **category count** of how many snacks are each `type` (a dict tally)

  **Example run:**
  ```
  === SNACK STATS REPORT ===
  Total sold: 109
  Average sold: 21.8
  Best seller: 30
  Worst seller: 15
  Type counts: {'Fried': 2, 'Baked': 2, 'Raw': 1}
  ```

  **Challenge tiers:**
  - ⭐ Total, average (rounded), highest and lowest
  - ⭐⭐ Add the category count dict
  - ⭐⭐⭐ Also find and print the **best-selling snack by name** (loop for the max record), and guard your average so it never divides by zero

  **Start here:** open a fresh Python 3 Trinket at [trinket.io/python](https://trinket.io/python).

  **Submit:** Save your Trinket as `Y2-T7-W3-NumberCrunching`, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Thought: AI Lives on Averages

  Everything you did today — totals, averages, maximums — is exactly what an AI does to make sense of data, just on a gigantic scale.

  - When an app says "most users your age liked this", it computed a **count** and a **maximum**, like our team tally and top scorer.
  - When a model "learns", it repeatedly measures how wrong it is and takes the **average** error across thousands of examples, then nudges itself to shrink that number.

  **Discuss in the Zoom chat:** if a music app knows every song you played, what **one number** (an average, a count, a max?) would help it guess your favourite artist?

  No coding here — just notice that the humble `sum`, `len` and `max` you learned today are the seeds of how machines summarise the world.
---

# Year 2, Lesson 3: Number Crunching 🔢🧮

**Course:** Data & Visualization
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

- How to compute the **Big Five** summary statistics: total, average, minimum, maximum and count
- How to pull a **numeric column** out of a list of dicts into a plain list you can crunch
- How to **round** an average so your reports look clean and professional
- How to **tally categories** with a dict (recall from Term 4) — counting how many of each type
- How to find the **top record** (the highest scorer, the best seller) with a loop
- Why these numbers are the raw material for next week's charts and your final Data Story

---

## 🤖 BrightByte's Big Idea

> *"Last week you turned a messy string of data into a neat list of dicts — brilliant. But a pile of rows isn't a story yet. A story needs FACTS: the total, the average, the winner. Today you become a Number Cruncher — you squeeze a whole dataset down into a handful of numbers that actually MEAN something. Those numbers? They're about to become bars, charts, and headlines. Let's crunch!"*
> — BrightByte 🤖🔢

---

## 🗂️ Part 1: From Rows to Numbers

Remember where we are. In Week 2 you parsed a data string into `records` — a **list of dicts**, one dict per row, with the number column converted to a real `int`:

```python
data = """name,team,score
Amara,Red,85
Kwame,Blue,92
Ngozi,Red,78
Tunde,Red,88
Ada,Green,95
Chidi,Blue,70"""

records = []
for line in data.split("\n")[1:]:      # [1:] skips the header row
    parts = line.split(",")
    records.append({
        "name": parts[0],
        "team": parts[1],
        "score": int(parts[2])          # convert the number column!
    })
```

After this runs, `records` looks like this:

```python
[
  {"name": "Amara", "team": "Red",   "score": 85},
  {"name": "Kwame", "team": "Blue",  "score": 92},
  {"name": "Ngozi", "team": "Red",   "score": 78},
  {"name": "Tunde", "team": "Red",   "score": 88},
  {"name": "Ada",   "team": "Green", "score": 95},
  {"name": "Chidi", "team": "Blue",  "score": 70}
]
```

That's lovely — but you can't call `sum()` on a list of dicts. First you have to **pull the column you care about** into a plain list:

```python
scores = []
for row in records:
    scores.append(row["score"])

print(scores)
```

**Output:**
```
[85, 92, 78, 88, 95, 70]
```

Now THAT is something we can crunch. 🎉

> 💡 **Why `int()` matters:** because you converted the score in Week 2, `scores` holds real numbers. If they were still text (`"85"`), `sum()` would crash — you'll see exactly that crash in the Common Mistakes section.

---

## 🔢 Part 2: The Big Five

Here are the five summary numbers you will reach for again and again. Python gives you built-in tools for almost all of them (you met them back in Term 4):

| Statistic | Question it answers | Python |
|---|---|---|
| **Total** | How much altogether? | `sum(scores)` |
| **Count** | How many values? | `len(scores)` |
| **Average (mean)** | What's typical? | `sum(scores) / len(scores)` |
| **Minimum** | What's the lowest? | `min(scores)` |
| **Maximum** | What's the highest? | `max(scores)` |

Let's compute all five on our scores `[85, 92, 78, 88, 95, 70]`:

```python
total = sum(scores)                 # 85+92+78+88+95+70 = 508
count = len(scores)                 # 6
average = total / count             # 508 / 6 = 84.66666666666667
lowest = min(scores)                # 70
highest = max(scores)               # 95

print("Total:", total)
print("Count:", count)
print("Average:", average)
print("Lowest:", lowest)
print("Highest:", highest)
```

**Output:**
```
Total: 508
Count: 6
Average: 84.66666666666667
Lowest: 70
Highest: 95
```

Five lines of code just described a whole class. But look at that average — `84.66666666666667`. Ugly, right? Let's fix it.

---

## 🎯 Part 3: A Tidy Average

An average almost never comes out as a neat whole number, because division in Python 3 always gives a **float** (a decimal number):

```python
print(60 / 3)     # 20.0   ← a float, even though it divides evenly
print(508 / 6)    # 84.66666666666667
```

> 🧠 **Recall:** `/` always gives a float. `//` (floor division) gives a whole number by throwing away the remainder. For averages we want `/`.

That long tail of 6s is not wrong — it's just not report-friendly. We tidy it with `round()`:

```python
average = sum(scores) / len(scores)     # 84.66666666666667
average = round(average, 1)             # 84.7
print("Average score:", average)
```

**Output:**
```
Average score: 84.7
```

The `1` means "round to **1** decimal place". Let's trace it carefully:

| Expression | Result |
|---|---|
| `sum([10, 20, 30])` | `60` |
| `60 / 3` | `20.0` |
| `round(20.0, 1)` | `20.0` |
| `508 / 6` | `84.66666666666667` |
| `round(84.66666666666667, 1)` | `84.7` |
| `round(84.66666666666667, 2)` | `84.67` |

> 💬 **Zoom chat:** what is the average of `[10, 20, 30]`? Type your answer, then we prove it live: `sum([10, 20, 30]) / 3` → `60 / 3` → `20.0`.

---

## 🏷️ Part 4: Counting Categories with a Dict

Totals and averages work on numbers. But some columns aren't numbers — they're **categories**, like `team`. For those we don't add, we **count**: how many Red? How many Blue?

This is the **dict tally** you first met in Term 4. The pattern: loop through the records, and for each category either start its count at 1 or add 1 to it.

```python
team_counts = {}
for row in records:
    team = row["team"]
    if team in team_counts:
        team_counts[team] += 1     # seen before → add one
    else:
        team_counts[team] = 1      # first time → start at one

print(team_counts)
```

**Output:**
```
{'Red': 3, 'Blue': 2, 'Green': 1}
```

Let's trace the dict growing, row by row:

| Row (team) | `team_counts` after this row |
|---|---|
| Amara (Red) | `{'Red': 1}` |
| Kwame (Blue) | `{'Red': 1, 'Blue': 1}` |
| Ngozi (Red) | `{'Red': 2, 'Blue': 1}` |
| Tunde (Red) | `{'Red': 3, 'Blue': 1}` |
| Ada (Green) | `{'Red': 3, 'Blue': 1, 'Green': 1}` |
| Chidi (Blue) | `{'Red': 3, 'Blue': 2, 'Green': 1}` |

Three on Red, two on Blue, one on Green. That single dict is a whole bar chart waiting to happen — which is precisely what we build next week. 📊

---

## 🥇 Part 5: Finding the Top Record

`max(scores)` tells you the highest **score** is `95` — but not **who** scored it. To find the whole winning **record** (name, team and all), you walk through the list and keep hold of the best one you've seen so far:

```python
top = records[0]                      # assume the first is the best... for now
for row in records:
    if row["score"] > top["score"]:   # found someone better?
        top = row                     # remember them instead

print("Top scorer:", top["name"], "with", top["score"])
```

**Output:**
```
Top scorer: Ada with 95
```

How the `top` "champion belt" changes hands as we loop:

| Row being checked | Their score | `top` after check |
|---|---|---|
| Amara | 85 | Amara (85) |
| Kwame | 92 | Kwame (92) |
| Ngozi | 78 | Kwame (92) |
| Tunde | 88 | Kwame (92) |
| Ada | 95 | **Ada (95)** |
| Chidi | 70 | Ada (95) |

> 💡 **Swap the sign for the loser:** change `>` to `<` and start from `records[0]` to find the record with the **lowest** score instead. Same pattern, opposite direction.

---

## ⚠️ Common Mistakes

**Mistake 1: An ugly, un-rounded average**

❌ Looks unprofessional in a report:
```python
print("Average:", sum(scores) / len(scores))
```
```
Average: 84.66666666666667
```

✅ Round it:
```python
print("Average:", round(sum(scores) / len(scores), 1))
```
```
Average: 84.7
```

---

**Mistake 2: Dividing by a count of zero**

❌ If the list is empty, `len()` is `0` — and dividing by zero crashes:
```python
scores = []
average = sum(scores) / len(scores)
```
```
ZeroDivisionError: division by zero
```

✅ Guard it with an `if`:
```python
if len(scores) > 0:
    average = round(sum(scores) / len(scores), 1)
    print("Average:", average)
else:
    print("No data to average!")
```

---

**Mistake 3: Summing text instead of numbers**

❌ If you forgot to convert the column, the scores are still **strings**, and `sum()` refuses:
```python
scores = ["85", "92", "78"]     # oops — these are text!
print(sum(scores))
```
```
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

✅ Convert to `int` when you parse (Week 2), or convert as you pull the column:
```python
scores = [int(s) for s in ["85", "92", "78"]]
print(sum(scores))     # 255
```

> 🧠 **The pattern behind the crash:** `sum` starts at `0` (a number) and tries `0 + "85"` — you cannot add a number and a piece of text. Same family of bug as `age + 1` on an `input()`. Numbers must be numbers!

---

## 🖥️ Trinket Check

Open **Trinket** (trinket.io) and start a fresh Python 3 script. Name it `Y2-T7-W3-NumberCrunching` — remember, every Trinket this term can go into your Data Story portfolio.

Paste the parsing block from Part 1, then add the Big Five. When your average prints as `84.7`, give a **thumbs up** in Zoom reactions. 👍

---

## 🧮 Class Activity: Data Cruncher

Using the scores dataset from Part 1, crunch it as a class:

- **⭐ Level 1:** pull `scores` into a list, print the **total** and the **count**
- **⭐⭐ Level 2:** print the **average** (rounded to 1 dp), the **highest** and the **lowest**
- **⭐⭐⭐ Level 3:** loop to find the **top scorer's whole record**, and print their name and score

**Zoom-chat quickfire:** what is the average of `[10, 20, 30]`? (Answer: `20.0`.)

**Bonus:** add the team **tally** dict and paste your `team_counts` in the chat.

---

## 🌟 What's Coming Next Week?

Next week is **Week 4: Text Bar Charts** 📊 — and this is where your numbers come ALIVE. You'll turn counts and totals into bars drawn from characters, right in the output panel:

```
Red   ███ 3
Blue  ██ 2
Green █ 1
```

That chart is literally your `team_counts` dict from today, printed with `"█" * count`. Every number you crunched this week becomes a bar you can SEE next week. Bring your `records`!

---

## 🏆 Today's Achievements

- ✅ You pulled a numeric column out of a list of dicts into a plain list
- ✅ You computed the **Big Five**: total, count, average, minimum, maximum
- ✅ You **rounded** an average so your reports look clean
- ✅ You **tallied categories** with a dict
- ✅ You found the **top record** with a loop
- ✅ You know why converting to numbers matters (no more `TypeError`!)

> *"You just did what data scientists do every single day: you took raw rows and squeezed out the facts that matter. A total. An average. A winner. Hold onto those numbers — next week they become bars, and by the end of term they become the headline of your Data Story."*
> — BrightByte 🤖🔢

---

## 📚 Homework: Stats Report 📊

Write a **Stats Report** program in Trinket. It takes a small dataset, crunches the numbers, and prints a tidy report.

Start from this snack-shop data (or invent your own — same shape):

```python
data = """snack,type,sold
Puff-puff,Fried,24
Chin-chin,Baked,18
Plantain chips,Fried,30
Meat pie,Baked,15
Groundnut,Raw,22"""
```

**Requirements:**
1. **Parse** the data into a list of dicts, converting `sold` to an `int`
2. Print the **total** sold (`sum`)
3. Print the **average** sold, **rounded** to 1 decimal place
4. Print the **highest** and **lowest** sold amounts
5. Print a **category count** of how many snacks are each `type` (a dict tally)

**Example run:**
```
=== SNACK STATS REPORT ===
Total sold: 109
Average sold: 21.8
Best seller: 30
Worst seller: 15
Type counts: {'Fried': 2, 'Baked': 2, 'Raw': 1}
```

**Challenge tiers:**
- ⭐ Total, average (rounded), highest and lowest
- ⭐⭐ Add the category count dict
- ⭐⭐⭐ Also find and print the **best-selling snack by name** (loop for the max record), and guard your average so it never divides by zero

**Start here:** open a fresh Python 3 Trinket at [trinket.io/python](https://trinket.io/python).

**Submit:** Save your Trinket as `Y2-T7-W3-NumberCrunching`, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*Crunch the numbers, find the story. See you next week for charts! 🔢📊*
