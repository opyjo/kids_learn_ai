---
title: "Parsing Data with split() ✂️📄"
description: "Turn a real CSV dataset — stored as a multi-line string — into a tidy list of dictionaries using split(), skipping the header and converting numeric fields with int(); the exact parsing skill your whole Data Story is built on"
difficulty: "intermediate"
order_index: 2
course_slug: "year2-term-7-data-visualization"
is_premium: false
requires_trinket: true
starter_code: |
  # ✂️📄 Y2-T7-W2-Parsing — CSV Cracker
  # Made by: [YOUR NAME]
  # Turn a CSV string into a list of dictionaries!

  # --- Our "data file" is a MULTI-LINE STRING (Trinket has no real files) ---
  data = """name,score
  Ama,85
  Kofi,72
  Zara,90
  Kwame,68
  Efua,95
  Tunde,78"""

  # --- Part 1: Split the whole string into ROWS (lines) ---
  # rows = data.split(...)

  # --- Part 2: The FIRST row is the header — pull out the column names ---

  # --- Part 3: Split ONE data row into FIELDS with .split(",") ---

  # --- Part 4: Build a LIST OF DICTIONARIES (skip the header row!) ---
  # Remember: score is TEXT after splitting — use int() to make it a number

  # --- Part 5: Print every record as a neat table ---

  # Build it one part at a time, following BrightByte! 🏗️
solution_code: |
  # ✂️📄 Y2-T7-W2-Parsing — CSV Cracker
  # Made by: [YOUR NAME]
  # SAVE THIS! Next week (Week 3) you crunch numbers from these parsed records.

  # --- Our "data file" is a multi-line string ---
  data = """name,score
  Ama,85
  Kofi,72
  Zara,90
  Kwame,68
  Efua,95
  Tunde,78"""

  # --- Part 1: Split the whole string into rows ---
  rows = data.split("\n")
  print("Rows:", rows)
  print("Number of rows:", len(rows))

  # --- Part 2: The header is the first row ---
  header = rows[0].split(",")
  print("Column names:", header)

  # --- Part 3 & 4: Build a list of dictionaries, SKIPPING the header ---
  records = []
  for line in rows[1:]:            # rows[1:] skips the header row
      fields = line.split(",")     # "Ama,85"  ->  ["Ama", "85"]
      record = {
          "name": fields[0],
          "score": int(fields[1])  # int() turns the TEXT "85" into the NUMBER 85
      }
      records.append(record)

  # --- Part 5: Print every record as a neat table ---
  print("-" * 20)
  print("NAME       SCORE")
  print("-" * 20)
  for r in records:
      print(r["name"].ljust(10), r["score"])

  # records is now a real dataset we can do MATHS on next week!
  print("-" * 20)
  print("Parsed", len(records), "records. 🎉")
class_activities: |
  ## 🎮 Class Activity: CSV Cracker ✂️

  You've got a "data file" trapped inside a plain string. Your job: **crack it open** into a list of dictionaries you can actually use. Build it in stages — thumbs up in Zoom after each stage!

  Start from the `data` string in the starter code (columns: `name,score`).

  ### Stage 1 — Break into rows (⭐)
  Use `data.split("\n")` to turn the big string into a list of row strings. Print the list and print how many rows there are with `len()`.

  ### Stage 2 — Grab the header (⭐)
  The first row (`rows[0]`) holds the column names. Split it on `","` and print the column names. **Zoom chat:** what does `"a,b,c".split(",")` give you?

  ### Stage 3 — Split one data row (⭐⭐)
  Take `rows[1]` (the first real data row) and `.split(",")` it. Notice you get a list of **two strings** — including the score as text like `"85"`.

  ### Stage 4 — Build the list of dictionaries (⭐⭐)
  Loop over `rows[1:]` (that skips the header). For each row, split it, then build a dictionary `{"name": ..., "score": int(...)}` and `.append()` it to a `records` list. **Don't forget `int()`** on the score!

  ### Stage 5 — Print a table (⭐⭐⭐)
  Loop over `records` and print each one as a tidy row. Use `.ljust(10)` on the name so the scores line up.

  ### Bonus Cracker
  Add ONE more numeric column to the CSV string (e.g. `name,score,age`) and update your loop to parse all three fields. Paste your favourite parsed record in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: Crack Your Own CSV

  A local fruit stall kept a record of how many of each fruit it sold today. It's stored as a CSV string. **Parse it into a list of dictionaries** and print each record.

  Start from this data (copy it exactly — mind the triple quotes):

  ```python
  data = """fruit,sold
  Mango,42
  Banana,30
  Orange,25
  Pineapple,18
  Guava,12"""
  ```

  **Requirements:**
  1. Use `data.split("\n")` to break the string into rows
  2. **Skip the header row** (loop over `rows[1:]`)
  3. For each row, `.split(",")` it into fields
  4. Build a dictionary `{"fruit": ..., "sold": int(...)}` — **convert the `sold` column to a number with `int()`**
  5. `.append()` each dictionary to a `records` list
  6. Print each record on its own line

  **Example output:**
  ```
  Mango sold 42
  Banana sold 30
  Orange sold 25
  Pineapple sold 18
  Guava sold 12
  ```

  **Challenge tiers:**
  - ⭐ Parse all 5 rows into a list of dictionaries and print them
  - ⭐⭐ Also print the column names from the header row, and print how many records you parsed
  - ⭐⭐⭐ Add your own extra row to the data, AND make your program not crash if the data has a blank line at the end (hint: `if line == "": continue`)

  **Submit:** Save your Trinket as `Y2-T7-W2-Parsing`, click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? Parsing IS the Job

  When people picture building AI, they imagine the clever "brain" part. But ask anyone who works with data and they'll tell you a secret: a HUGE chunk of real AI and data science work is exactly what you did today — **taking messy raw data and cleaning it into a tidy shape** the program can use.

  Real datasets arrive as CSV files with millions of rows, and they're rarely perfect: missing values, extra blank lines, numbers stored as text, wrong delimiters. Before any AI can learn from data, someone has to **parse and clean it first**.

  **Discuss in the Zoom chat:** you just handled a number stored as text (`"85"`) and (in the challenge) a stray blank line. What OTHER kinds of "mess" do you think might show up in a real data file of, say, weather readings or shop sales?

  Every time you `split()` and `int()` today, you're doing the real, unglamorous, essential work that every data project depends on. 💪
---

# Year 2, Lesson 2: Parsing Data with split() ✂️📄

**Course:** Data & Visualization
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

- What a **CSV** is — a spreadsheet written as plain text
- How to store a whole dataset in Python as a **multi-line string** (our stand-in for a data file)
- How `text.split("\n")` breaks a dataset into **rows**, and `line.split(",")` breaks a row into **fields**
- How to build a **list of dictionaries** from parsed rows — reusing your Term 4 records skill
- Why numbers come out as **text** after splitting, and how `int()` fixes it
- How to **skip the header row** so it doesn't sneak into your data

---

## 🤖 BrightByte's Big Reveal

> *"Last week we said data lives in rows and columns. Today I'm handing you a REAL dataset — but there's a catch. It's not a neat table yet. It's a single blob of text, all squished together. Your job is to be a code detective: crack that blob open, line by line, comma by comma, and rebuild it into something Python can actually work with. Grab your magnifying glass. We're going parsing!"*
> — BrightByte 🤖✂️

---

## 📄 Part 1: What Is a CSV?

You've seen spreadsheets — neat grids of rows and columns. But how does a computer store that grid in a plain text file? With a **CSV**.

**CSV** stands for **Comma-Separated Values**. The idea is beautifully simple:

- Each **row** of the table goes on its own **line**
- Within a line, each **column value** is separated by a **comma**

Here's a tiny spreadsheet of quiz scores:

| name | score |
|---|---|
| Ama | 85 |
| Kofi | 72 |

As a CSV, that exact same table looks like this:

```
name,score
Ama,85
Kofi,72
```

That's it! The very first line, `name,score`, is the **header** — it names the columns. Every line after it is one **record** of data. CSV is the most common data format on the planet — spreadsheets, banks, weather stations, and games all export it.

> 💡 **Why "comma"-separated?** The comma is just the agreed-upon **delimiter** — the character that marks where one field ends and the next begins. Commas are the most common, but you'll meet others one day (tabs, semicolons). Today: commas.

---

## 🧵 Part 2: A Dataset in a String

Real CSVs live in files. But Trinket runs in your browser and **can't open files** — no problem. We'll store our dataset right inside Python as a **multi-line string** using **triple quotes** `"""`.

```python
data = """name,score
Ama,85
Kofi,72
Zara,90
Kwame,68
Efua,95
Tunde,78"""
```

Triple quotes let a string run across **many lines**. Every time you press Enter inside those quotes, Python secretly stores a **newline character**, written `\n`. So even though it *looks* like six neat lines, `data` is really ONE long string with `\n` characters hiding between the rows:

```
name,score\nAma,85\nKofi,72\nZara,90\nKwame,68\nEfua,95\nTunde,78
```

> 🧠 **Remember `\n` from Year 1?** It's the "new line" character. Today it becomes your best friend — it's exactly where we'll cut the data into rows.

This multi-line string is our **stand-in for a data file** all term. Whenever you see one, imagine it's a `.csv` file we've pasted into the program.

---

## ✂️ Part 3: Cut Into Rows with split("\n")

The string method `.split()` chops a string into a **list** of pieces, cutting at every spot where it finds the character you give it.

To break our dataset into rows, we split on the newline `"\n"`:

```python
rows = data.split("\n")
print(rows)
```

**Output:**
```
['name,score', 'Ama,85', 'Kofi,72', 'Zara,90', 'Kwame,68', 'Efua,95', 'Tunde,78']
```

Look what happened — one big string became a **list of seven strings**, one per line. 🎉

```python
print(len(rows))
```
```
7
```

Seven rows: **one header** (`'name,score'`) plus **six data rows**.

### 🔍 Trace it slowly

`split("\n")` looks along the string, and every time it hits a `\n`, it makes a cut and starts a new piece:

| The string... | ...becomes the list |
|---|---|
| `"a\nb\nc"` | `['a', 'b', 'c']` |
| `"Ama,85\nKofi,72"` | `['Ama,85', 'Kofi,72']` |

The `\n` characters themselves **disappear** — they were just the "cut here" marks.

---

## 🔪 Part 4: Cut a Row Into Fields with split(",")

Each row is still one string, like `'Ama,85'`. To pull out the individual values, we split **that** row on the comma:

```python
first_data_row = rows[1]        # 'Ama,85'  (rows[0] is the header!)
fields = first_data_row.split(",")
print(fields)
```

**Output:**
```
['Ama', '85']
```

Now we have the two values as separate pieces. Same method, different delimiter:

| The row string... | `.split(",")` gives... |
|---|---|
| `"Ama,85"` | `['Ama', '85']` |
| `"a,b,c"` | `['a', 'b', 'c']` |
| `"name,score"` | `['name', 'score']` |

> ⚠️ **Spot the trap early:** that `'85'` has quotes around it — it's **text**, not a number! Splitting a string can only ever give you more strings. We'll fix that in Part 5.

### 💬 Zoom Chat Checkpoint

> **Type in the chat:** what does `"a,b,c".split(",")` give you?
> (Answer: `['a', 'b', 'c']` — three separate strings, no commas.)

---

## 🗃️ Part 5: Build a List of Dictionaries (Records!)

Time to reuse your **Term 4 superpower**: a **list of dictionaries**, where each dictionary is one **record**. This is the shape real programs love, because you can ask each record `record["name"]` or `record["score"]` by name.

Here's the plan:

1. Loop over the rows — but **skip the header** using `rows[1:]`
2. Split each row into fields
3. Build a dictionary, pairing each field with its column name
4. **Convert the score to a real number** with `int()`
5. Append the dictionary to a `records` list

```python
records = []

for line in rows[1:]:            # rows[1:] skips the header row
    fields = line.split(",")     # 'Ama,85'  ->  ['Ama', '85']
    record = {
        "name": fields[0],
        "score": int(fields[1])  # '85' (text) -> 85 (number!)
    }
    records.append(record)

print(records)
```

**Output:**
```
[{'name': 'Ama', 'score': 85}, {'name': 'Kofi', 'score': 72}, {'name': 'Zara', 'score': 90}, {'name': 'Kwame', 'score': 68}, {'name': 'Efua', 'score': 95}, {'name': 'Tunde', 'score': 78}]
```

That is a **real dataset** now — exactly the list-of-dicts shape from Term 4, built from raw text you parsed yourself. 🙌

### Why `rows[1:]`?

Remember slicing from Term 4? `rows[1:]` means "from index 1 to the end" — everything **except** `rows[0]`, the header. If we forgot this, we'd try to build a record from `'name,score'` and end up with a nonsense record like `{"name": "name", "score": int("score")}` — and `int("score")` **crashes**! (More on that in Common Mistakes.)

### Why `int()`?

After splitting, `fields[1]` is the string `'85'`, not the number `85`. If we left it as text, we couldn't add scores, average them, or chart them next week. `int("85")` converts the text into the whole number `85` so we can do real maths. (For decimals like `"85.5"`, you'd reach for `float()` instead — a callback to Term 1.)

### Print it as a table

```python
print("NAME       SCORE")
print("-" * 20)
for r in records:
    print(r["name"].ljust(10), r["score"])
```

**Output:**
```
NAME       SCORE
--------------------
Ama        85
Kofi       72
Zara       90
Kwame      68
Efua       95
Tunde      78
```

`.ljust(10)` pads each name out to 10 characters so the scores line up neatly — a Year 1 string-method trick doing real work.

---

## ⚠️ Common Mistakes (And the Errors They Cause)

**Mistake 1: Forgetting numbers are TEXT after split()**

❌ Wrong — trying to do maths on a string:
```python
fields = "Ama,85".split(",")
total = fields[1] + 10
```
```
TypeError: can only concatenate str (not "int") to str
```

✅ Correct — convert with `int()` first:
```python
fields = "Ama,85".split(",")
score = int(fields[1])
total = score + 10        # 95 🎉
```

> This is the **#1 parsing bug**. `split()` ALWAYS gives you strings. Numbers must be converted before you can add, average, or chart them.

---

**Mistake 2: Forgetting to skip the header row**

❌ Wrong — looping over ALL rows, header included:
```python
for line in rows:            # includes 'name,score'!
    fields = line.split(",")
    score = int(fields[1])   # int("score") 💥
```
```
ValueError: invalid literal for int() with base 10: 'score'
```

✅ Correct — slice off the header with `rows[1:]`:
```python
for line in rows[1:]:        # skips the header
    fields = line.split(",")
    score = int(fields[1])
```

---

**Mistake 3: A stray blank line from a trailing newline**

If your data string ends with an extra blank line (an accidental Enter before the closing `"""`):

```python
data = """name,score
Ama,85
"""                          # <- extra blank line!
rows = data.split("\n")
print(rows)
```
```
['name,score', 'Ama,85', '']
```

See that empty string `''` at the end? Try to split and index it and you get:
```
IndexError: list index out of range
```
...because `''.split(",")` gives `['']` — there's no `fields[1]` to grab!

✅ Correct — skip empty lines:
```python
for line in rows[1:]:
    if line == "":           # skip blank lines
        continue
    fields = line.split(",")
    ...
```

---

**Mistake 4: Splitting on the wrong delimiter**

❌ Wrong — the data uses commas, but we split on a space:
```python
"Ama,85".split(" ")
```
```
['Ama,85']                   # nothing was cut — one big piece!
```

✅ Correct — split on the delimiter that's actually in the data:
```python
"Ama,85".split(",")          # ['Ama', '85']
```

> Always match the delimiter to your data. Commas for CSV — check with your eyes first!

---

## 🎮 Class Activity: CSV Cracker

Now you crack the whole dataset open yourself! Build it in five stages, thumbs up in Zoom after each one. Start from the `data` string (columns `name,score`) in the starter code.

1. **Stage 1 (⭐):** `data.split("\n")` into rows; print them and their `len()`
2. **Stage 2 (⭐):** split `rows[0]` to get the column names — *chat:* what does `"a,b,c".split(",")` give?
3. **Stage 3 (⭐⭐):** split `rows[1]` into fields; notice the score is text
4. **Stage 4 (⭐⭐):** loop `rows[1:]`, build `{"name": ..., "score": int(...)}`, append to `records`
5. **Stage 5 (⭐⭐⭐):** print `records` as a tidy table with `.ljust(10)`

**Bonus:** add a third column (`name,score,age`) and parse all three fields.

---

## 🌟 What's Coming Next Week?

You now have a **list of dictionaries** full of scores — text turned into real numbers, ready to work with. So... what can we DO with them?

Next week is **Week 3: Number Crunching** 🔢. You'll take these exact parsed records and squeeze real answers out of them: the **total** of all scores, the **average**, the **highest** and **lowest**, and how many records match a rule. Parsing was step one of the Data Story — crunching is step two.

> *"You cracked the data open. Next week we make it TALK — averages, totals, top scores. This is where a pile of numbers starts turning into a story."*
> — BrightByte 🤖🔢

---

## 🏆 Today's Achievements

- ✅ You know what a **CSV** is — a spreadsheet as plain comma-separated text
- ✅ You stored a whole dataset as a **multi-line string** with triple quotes
- ✅ You split a dataset into **rows** with `split("\n")` and rows into **fields** with `split(",")`
- ✅ You built a **list of dictionaries** from raw text, **skipping the header**
- ✅ You converted text scores into real numbers with `int()`
- ✅ You met the four classic parsing bugs — and how to dodge them

> *"You just did the thing every data scientist on Earth does before anything clever happens: you turned raw, messy text into clean, usable data. That's not a small skill — that's THE skill. Well cracked, detective."*
> — BrightByte 🤖✂️

---

## 📚 Homework: Crack Your Own CSV

A local fruit stall recorded how many of each fruit it sold today, stored as a CSV string. **Parse it into a list of dictionaries** and print each record.

```python
data = """fruit,sold
Mango,42
Banana,30
Orange,25
Pineapple,18
Guava,12"""
```

**Requirements:**
1. `data.split("\n")` to break into rows
2. **Skip the header** (loop over `rows[1:]`)
3. `.split(",")` each row into fields
4. Build `{"fruit": ..., "sold": int(...)}` — **convert `sold` with `int()`**
5. `.append()` each dictionary to a `records` list
6. Print each record on its own line

**Example output:**
```
Mango sold 42
Banana sold 30
Orange sold 25
Pineapple sold 18
Guava sold 12
```

**Challenge tiers:**
- ⭐ Parse all 5 rows into a list of dictionaries and print them
- ⭐⭐ Also print the column names, and how many records you parsed
- ⭐⭐⭐ Add your own extra row, AND make your program survive a blank last line (`if line == "": continue`)

**Submit:** Save your Trinket as `Y2-T7-W2-Parsing`, click **Share**, and paste the link wherever your teacher asks.

---

*You cracked the code AND the data today. Next week, the numbers start talking. ✂️📄🔢*
</content>
</invoke>
