---
title: "Data All Around Us 📊🌍"
description: "Discover what data really is — rows, columns, categorical and numerical — then store a real dataset in Python and count it with a tally dict"
difficulty: "intermediate"
order_index: 1
course_slug: "year2-term-7-data-visualization"
is_premium: false
requires_trinket: true
starter_code: |
  # 📊 Data All Around Us!
  # A dataset is just organised information — ROWS and COLUMNS.

  # Here is a tiny dataset stored as a LIST OF DICTS (you know these from Term 4!).
  # Each dict is one ROW (a record). Each key is a COLUMN (a field).
  class_data = [
      {"name": "Ama", "fruit": "mango", "sleep": 9},
      {"name": "Kofi", "fruit": "banana", "sleep": 8},
      # Add YOUR row below!
  ]

  # Print each row (record)
  for row in class_data:
      print(row["name"], "likes", row["fruit"])

  # TODO: count how many people like each fruit using a tally dict
solution_code: |
  # 📊 Data All Around Us — one possible solution

  # A LIST OF DICTS: each dict = one row, each key = one column
  class_data = [
      {"name": "Ama", "fruit": "mango", "sleep": 9},
      {"name": "Kofi", "fruit": "banana", "sleep": 8},
      {"name": "Zara", "fruit": "mango", "sleep": 7},
      {"name": "Tunde", "fruit": "orange", "sleep": 8},
  ]

  # Print each row (record)
  print("--- Our Class Data ---")
  for row in class_data:
      print(row["name"], "likes", row["fruit"], "and sleeps", row["sleep"], "hours")

  # Count each fruit (CATEGORICAL data) with a tally dict — recall from Term 4!
  tally = {}
  for row in class_data:
      fruit = row["fruit"]
      if fruit in tally:
          tally[fruit] = tally[fruit] + 1
      else:
          tally[fruit] = 1

  print("--- Fruit Tally ---")
  print(tally)
class_activities: |
  ## 🔬 Class Activity: The Class Data Lab

  Today the WHOLE class becomes one dataset! Your teacher asks a question, everyone answers in the Zoom chat, and together we turn those answers into data we can count.

  ### Step 1 — Collect (⭐)
  Your teacher asks: **"What is your favourite fruit?"** Everyone types ONE fruit in the Zoom chat. The teacher reads them out and builds a list on screen:

  ```python
  fruits = ["mango", "banana", "mango", "orange", "mango", "banana"]
  ```

  ### Step 2 — Store (⭐⭐)
  Copy the list into your own Trinket. Print how many rows (records) there are:

  ```python
  print("We collected", len(fruits), "answers!")
  ```

  ### Step 3 — Count (⭐⭐⭐)
  Build a **tally dict** to count each fruit — exactly like the Term 4 vote counter:

  ```python
  tally = {}
  for fruit in fruits:
      if fruit in tally:
          tally[fruit] = tally[fruit] + 1
      else:
          tally[fruit] = 1
  print(tally)
  ```

  ### 💬 Zoom Chat Question
  **Is "favourite colour" CATEGORICAL or NUMERICAL data?** Type your answer in the chat and say WHY. (Hint: can you add two colours together?)
take_home_assignment: |
  ## 📚 Homework: Be a Data Collector

  Become a real data collector! Pick a topic YOU care about — football, music, snacks, pets, anything.

  **Requirements:**
  1. Collect **5–10 rows** of real data from family or friends (ask them a question!)
  2. Store it in Python as a **list of dicts** — each dict is one row, with at least 2 columns
  3. Print a **simple summary**: how many rows you collected, and a tally of one categorical column
  4. Add a comment saying which column is **categorical** and which is **numerical**

  **Example run:**
  ```
  I collected 6 rows of data!
  Favourite snack tally: {'chin chin': 3, 'plantain chips': 2, 'groundnut': 1}
  ```

  **Challenge tiers:**
  - ⭐ 5 rows, print the count and one tally
  - ⭐⭐ 8–10 rows with 3 columns, and tally TWO different categorical columns
  - ⭐⭐⭐ Also find the biggest category in your tally and print it in a sentence

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Thought: AI Eats Data for Breakfast

  Remember Term 5, when we learned how AI *learns*? Here's the secret ingredient: **data**.

  An AI that recognises cats was shown thousands of rows of cat photos. A chatbot learned language from mountains of text. No data → no AI.

  > **Think about it (Zoom chat, one line):** if you fed an AI only photos of jollof rice and called them "cats", what would go wrong?

  The rule programmers live by: **good data in, good AI out — messy data in, messy AI out.** This term you become the person who collects and cleans the data. That's real power!
---

# Year 2, Lesson 1: Data All Around Us 📊🌍

**Course:** Data & Visualization
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

- What **data** actually is — organised information made of **rows** and **columns**
- The two big families of data: **categorical** (names, types) vs **numerical** (counts, scores)
- How to spot data all around you — sports tables, weather, screen-time, class surveys, music charts
- Two ways to store a dataset in Python: a **list of dicts** and a **multi-line string**
- How to collect a **live class dataset** and count it with a **tally dict**

---

## 🤖 BrightByte Kicks Off a New Term!

> *"New term, new superpower! For six terms you learned to WRITE programs. Now you learn to make programs that THINK about information — real information, like which fruit your class loves or how many hours people sleep. That's called DATA, and it's everywhere. By the end of this term you'll take a boring pile of numbers and turn it into a STORY with charts. But every great data scientist starts with one question: what even IS data? Let's find out!"*
> — BrightByte 🤖📊

---

## 🗺️ Part 1: What Is Data, Really?

**Data** is just a fancy word for **organised information**.

When you write down your friends' names and their favourite fruits, that's data. When the football league lists every team and how many goals they scored, that's data. When your phone tracks your screen-time each day — yes, data!

The magic word is **organised**. A random pile of facts is hard to use. But if we arrange it neatly into **rows** and **columns**, we can count it, sort it, and find patterns.

Look at this tiny survey of a class:

| name | favourite_fruit | hours_of_sleep |
|---|---|---|
| Ama | mango | 9 |
| Kofi | banana | 8 |
| Zara | mango | 7 |
| Tunde | orange | 8 |

Two words to remember for LIFE:

- **ROW** → one **record** (one person, one thing). Ama's whole line is one row.
- **COLUMN** → one **field** (the same kind of fact for everyone). `favourite_fruit` is one column.

> 💡 **Trick to remember:** a ROW goes across (like a row of seats). A COLUMN stands tall (like a pillar/column in a building).

### 💬 Zoom Chat Warm-Up

> **Look around your life. Name ONE example of data you saw today.** (Weather app? Football table? A shopping list?) Type it in the **Zoom chat**!

---

## 🔢 Part 2: The Two Families — Categorical vs Numerical

Not all data is the same. Every column belongs to one of **two families**, and telling them apart is a data scientist's #1 skill.

| Family | What it is | Examples | Can you do maths on it? |
|---|---|---|---|
| **Categorical** | Names, labels, types, groups | `mango`, `Manchester`, `blue`, `dog` | ❌ No (you can COUNT them, not add them) |
| **Numerical** | Numbers that measure or count | `9` hours, `42` goals, `3` pets, `7.5` °C | ✅ Yes (add, average, find biggest) |

Think about our class table:

- `favourite_fruit` → **categorical** (mango isn't bigger than banana!)
- `hours_of_sleep` → **numerical** (you can add them up and find an average)

The quick test: **"Can I sensibly add two of these together?"**

- `mango + banana` → nonsense → **categorical**
- `9 hours + 8 hours = 17 hours` → makes sense → **numerical**

> ⚠️ **Sneaky one:** a phone number *looks* numerical but it's really categorical — you'd never add two phone numbers together! It's a label, not a measurement.

---

## 🐍 Part 3: Storing Data in Python — Way 1: List of Dicts

You already know the perfect tool for this from **Term 4**: a **list of dicts**.

- Each **dict** is one **row** (a record).
- Each **key** is a **column** (a field).

```python
class_data = [
    {"name": "Ama", "fruit": "mango", "sleep": 9},
    {"name": "Kofi", "fruit": "banana", "sleep": 8},
    {"name": "Zara", "fruit": "mango", "sleep": 7},
    {"name": "Tunde", "fruit": "orange", "sleep": 8},
]

for row in class_data:
    print(row["name"], "likes", row["fruit"])
```

**Output:**
```
Ama likes mango
Kofi likes banana
Zara likes mango
Tunde likes orange
```

See how each `row` is one dict, and `row["fruit"]` reaches into the `fruit` **column**? This is the exact same skill as the Term 4 Contact Manager — now we're calling it a **dataset**.

> **Why this is powerful:** the computer can now loop through EVERY record and do something with each one. That's the heartbeat of data work.

---

## 📄 Part 4: Storing Data in Python — Way 2: A Multi-Line String

There's a second way to write data that you'll see EVERYWHERE in the real world. It uses a **multi-line string** (three quotes `"""`) where each line is a row and commas separate the columns:

```python
data = """name,fruit,sleep
Ama,mango,9
Kofi,banana,8
Zara,mango,7
Tunde,orange,8"""

print(data)
```

**Output:**
```
name,fruit,sleep
Ama,mango,9
Kofi,banana,8
Zara,mango,7
Tunde,orange,8
```

This shape — values separated by commas — is called **CSV** (Comma-Separated Values). It's how spreadsheets, weather stations, and football sites share data all over the world.

> 🔮 **Preview:** right now this is just one big blob of text. Next week you'll learn `split()` — the tool that slices this string into neat rows and columns you can actually use. For today, just notice how *readable* it is.

---

## 🧮 Part 5: Counting Categories with a Tally Dict

Here's the first real data question: **"How many people chose each fruit?"**

To count categories, we use a **tally dict** — the exact same trick as the Term 4 vote counter. Start with an empty dict and add one each time we see a fruit:

```python
fruits = ["mango", "banana", "mango", "orange", "mango", "banana"]

tally = {}
for fruit in fruits:
    if fruit in tally:
        tally[fruit] = tally[fruit] + 1
    else:
        tally[fruit] = 1

print(tally)
```

**Output:**
```
{'mango': 3, 'banana': 2, 'orange': 1}
```

Let's trace it carefully, one loop at a time:

| Fruit seen | Already in tally? | tally after |
|---|---|---|
| `mango` | no → set to 1 | `{'mango': 1}` |
| `banana` | no → set to 1 | `{'mango': 1, 'banana': 1}` |
| `mango` | yes → +1 | `{'mango': 2, 'banana': 1}` |
| `orange` | no → set to 1 | `{'mango': 2, 'banana': 1, 'orange': 1}` |
| `mango` | yes → +1 | `{'mango': 3, 'banana': 1, 'orange': 1}` |
| `banana` | yes → +1 | `{'mango': 3, 'banana': 2, 'orange': 1}` |

Mango wins with **3 votes**! We just turned a list of raw answers into a **summary**. That's data work in a nutshell: raw data → summary → (soon) a chart.

---

## ⚠️ Common Mistakes

**Mistake 1: Mixing up rows and columns**

❌ Wrong thinking:
```
"Each COLUMN is one person."
```

✅ Correct:
```
Each ROW is one person (one record).
Each COLUMN is one type of fact (a field) shared by everyone.
```

> Ama's whole line across = one **row**. The `sleep` field down the side = one **column**.

---

**Mistake 2: Treating numbers stored as text like real numbers**

❌ This surprises everyone:
```python
sleep = "9"          # this is TEXT, not a number!
print(sleep + 1)
```
```
TypeError: can only concatenate str (not "int") to str
```

✅ Convert it first with `int()` (recall from Term 1!):
```python
sleep = "9"
sleep = int(sleep)   # now it's the number 9
print(sleep + 1)
```
```
10
```

> When data comes from a string (like our CSV blob), the numbers arrive as **text**. Remember `int()` and `float()` — you'll need them the moment you start crunching numbers next week!

---

**Mistake 3: Confusing categorical and numerical**

❌ Wrong:
```
"Favourite colour is numerical because... colours?"
```

✅ Correct:
```
Favourite colour is CATEGORICAL — it's a label.
You can COUNT how many chose blue, but blue + red = nonsense.
```

> Quick test: **can you sensibly ADD two of them together?** Yes → numerical. No → categorical.

---

## 🔬 Class Activity: The Class Data Lab

Time to turn the WHOLE class into a dataset! 🎉

**Step 1 — Collect:** Your teacher asks *"What is your favourite fruit?"* Everyone types ONE fruit in the **Zoom chat**. The teacher builds a list on screen:

```python
fruits = ["mango", "banana", "mango", "orange", "mango", "banana"]
```

**Step 2 — Store:** Copy the list into Trinket and count the rows:

```python
print("We collected", len(fruits), "answers!")
```

**Step 3 — Count:** Build a tally dict and find out which fruit rules the class:

```python
tally = {}
for fruit in fruits:
    if fruit in tally:
        tally[fruit] = tally[fruit] + 1
    else:
        tally[fruit] = 1
print(tally)
```

Give a **thumbs up** 👍 in Zoom when your tally runs!

> 💬 **Zoom Chat Question:** Is **"favourite colour"** categorical or numerical? Type your answer AND your reason.

---

## 🌟 What's Coming Next Week?

We ended today with a data blob stuck in one big string:

```python
data = """name,fruit,sleep
Ama,mango,9
Kofi,banana,8"""
```

Right now Python sees that as ONE lump of text. **Next week — Week 2: Parsing Data with `split()`** — you'll learn the tool that slices it into neat rows and columns automatically. It's like giving Python a pair of scissors for data. Once you can `split()`, you can read data from ANYWHERE. 📄✂️

---

## 🏆 Today's Achievements

- ✅ You can explain what **data** is: organised information in **rows** and **columns**
- ✅ You can tell **categorical** data from **numerical** data (the "can I add them?" test)
- ✅ You stored a dataset TWO ways: a **list of dicts** and a **multi-line string**
- ✅ You counted categories with a **tally dict** (Term 4 skill, new job!)
- ✅ You collected a **live class dataset** over Zoom and summarised it

> *"Look at that — day one and you already turned your whole class into countable data. This term you'll go from raw numbers to full data stories with charts. Every data scientist starts exactly where you are right now. Onwards!"*
> — BrightByte 🤖📊

---

## 📚 Homework: Be a Data Collector

Become a real data collector! Pick a topic YOU care about — football, music, snacks, pets, anything.

**Requirements:**
1. Collect **5–10 rows** of real data from family or friends (ask them a question!)
2. Store it in Python as a **list of dicts** — each dict is one row, with at least 2 columns
3. Print a **simple summary**: how many rows you collected, and a tally of one categorical column
4. Add a comment saying which column is **categorical** and which is **numerical**

**Example run:**
```
I collected 6 rows of data!
Favourite snack tally: {'chin chin': 3, 'plantain chips': 2, 'groundnut': 1}
```

**Challenge tiers:**
- ⭐ 5 rows, print the count and one tally
- ⭐⭐ 8–10 rows with 3 columns, and tally TWO different categorical columns
- ⭐⭐⭐ Also find the biggest category in your tally and print it in a sentence

**Submit:** Save your Trinket (name it `Y2-T7-W1-DataAllAround`), click **Share**, copy the link, and paste it wherever your teacher asks.

👉 **Trinket:** [trinket.io](https://trinket.io) — log in and open a new Python 3 trinket named `Y2-T7-W1-DataAllAround`.

---

*You just met data face to face — and it's everywhere. Next week, we grab the scissors. 📊✂️*
