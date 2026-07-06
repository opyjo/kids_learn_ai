---
title: "Lists of Dictionaries: Records! 🗃️📇"
description: "Master the power pattern real apps are built on — a LIST where every item is a DICTIONARY (a 'record') — and learn to build, access, loop, search and filter a list of records, priming next week's Contact Manager"
difficulty: "intermediate"
order_index: 6
course_slug: "year2-term-4-data-structures"
is_premium: false
requires_trinket: true
starter_code: |
  # 🗃️ Y2-T4-W6-Records — Class Register
  # Made by: [YOUR NAME]
  # IMPORTANT: Save this Trinket! Next week you reuse this EXACT pattern
  # to build the Contact Manager.

  # --- Part 1: A list of dictionaries (records!) ---
  # Each item in the list is a DICTIONARY describing one student.
  register = [
      {"name": "Ama", "age": 12, "grade": "Year 7"},
      {"name": "Kofi", "age": 13, "grade": "Year 8"},
  ]

  # --- Part 2: Add two more students with .append({...}) ---


  # --- Part 3: Print them all in a neat table (loop over the records) ---


  # --- Part 4: Search for a student by name ---


  # --- Part 5: Filter — build a new list of students aged 13+ ---


  # Build it one part at a time, following BrightByte! 🏗️
solution_code: |
  # 🗃️ Y2-T4-W6-Records — Class Register
  # Made by: [YOUR NAME]
  # SAVE THIS! Next week (Week 7) you build the Contact Manager
  # using this exact list-of-dictionaries pattern.

  # --- Part 1: The register — a LIST of DICTIONARIES (records) ---
  register = [
      {"name": "Ama", "age": 12, "grade": "Year 7"},
      {"name": "Kofi", "age": 13, "grade": "Year 8"},
      {"name": "Zara", "age": 13, "grade": "Year 8"},
  ]

  # --- Part 2: Add a new student record ---
  register.append({"name": "Kwame", "age": 11, "grade": "Year 7"})

  # --- Part 3: Print every record as a tidy table ---
  print("=" * 32)
  print(f"{'Name':<10} {'Age':<5} {'Grade'}")
  print("=" * 32)
  for student in register:
      print(f"{student['name']:<10} {student['age']:<5} {student['grade']}")
  print("=" * 32)

  # --- Part 4: Search for a student by name ---
  target = input("Search for a name: ")
  found = False
  for student in register:
      if student["name"] == target:
          print(f"✅ {student['name']} is {student['age']} and in {student['grade']}")
          found = True
  if not found:
      print(f"❌ No student named {target}")

  # --- Part 5: Filter — everyone aged 13 or older ---
  teens = []
  for student in register:
      if student["age"] >= 13:
          teens.append(student)

  print(f"Students aged 13+: {len(teens)}")
  for student in teens:
      print(f"  {student['name']} ({student['age']})")
class_activities: |
  ## 🏗️ Class Activity: Build the Class Register — Live, Together!

  We build a real **Class Register** in **five parts**, live on Zoom. After each part, **run your code** and give a **thumbs up** 👍 when it works. Move together, part by part — don't race ahead.

  > 📁 **First:** create a new Trinket and name it **`Y2-T4-W6-Records`**. Keep this file — next week's Contact Manager uses this exact pattern!

  ### Part 1 — The Register (a list of records) (⭐)
  ```python
  register = [
      {"name": "Ama", "age": 12, "grade": "Year 7"},
      {"name": "Kofi", "age": 13, "grade": "Year 8"},
      {"name": "Zara", "age": 13, "grade": "Year 8"},
  ]
  print(register[0])
  print(register[0]["name"])
  ```
  ✅ **Checkpoint:** In the Zoom chat — what does `register[0]["name"]` print? (Answer: `Ama`)

  ### Part 2 — Add a Student (⭐)
  ```python
  register.append({"name": "Kwame", "age": 11, "grade": "Year 7"})
  print(len(register))
  ```
  ✅ **Checkpoint:** How many students are in the register now? Type it in the chat! (4)

  ### Part 3 — Print a Table (⭐⭐)
  ```python
  print(f"{'Name':<10} {'Age':<5} {'Grade'}")
  for student in register:
      print(f"{student['name']:<10} {student['age']:<5} {student['grade']}")
  ```
  ✅ **Checkpoint:** Run it. Do the columns line up? Thumbs up! 👍 (Notice: **single** quotes for the keys inside an f-string.)

  ### Part 4 — Search by Name (⭐⭐)
  ```python
  target = input("Search for a name: ")
  found = False
  for student in register:
      if student["name"] == target:
          print(f"✅ {student['name']} is {student['age']} and in {student['grade']}")
          found = True
  if not found:
      print(f"❌ No student named {target}")
  ```
  ✅ **Checkpoint:** Search for `Zara`. What does it print? Now search for `Yaw` — what happens?

  ### Part 5 — Filter the Teens (⭐⭐⭐)
  ```python
  teens = []
  for student in register:
      if student["age"] >= 13:
          teens.append(student)
  print(f"Students aged 13+: {len(teens)}")
  for student in teens:
      print(f"  {student['name']} ({student['age']})")
  ```
  ✅ **Final checkpoint:** How many students are 13+? Which names? (2 — Kofi and Zara.) Thumbs up and **save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Build a Mini Database

  Build your very own **Mini Database** — a list of records about a topic YOU love.

  **Requirements:**
  1. Open a Trinket (you can keep it in your `Y2-T4-W6-Records` file or make a new one)
  2. Pick ONE topic: **books**, **pets**, or **players**
  3. Make a list of **at least 4 record dictionaries**, each with the **same 3 fields**
  4. Print them all as a **neat table** (loop over the list)
  5. Add a **search** that finds one record by a field and prints it

  **Field ideas (pick the set that matches your topic):**
  - 📚 Books → `{"title": ..., "author": ..., "year": ...}`
  - 🐶 Pets → `{"name": ..., "animal": ..., "age": ...}`
  - ⚽ Players → `{"name": ..., "team": ..., "goals": ...}`

  **Example (pets):**
  ```python
  pets = [
      {"name": "Bingo", "animal": "dog", "age": 4},
      {"name": "Whiskers", "animal": "cat", "age": 2},
      {"name": "Nibbles", "animal": "hamster", "age": 1},
      {"name": "Coco", "animal": "parrot", "age": 6},
  ]

  print(f"{'Name':<10} {'Animal':<10} {'Age'}")
  for pet in pets:
      print(f"{pet['name']:<10} {pet['animal']:<10} {pet['age']}")

  target = input("Search for a pet name: ")
  for pet in pets:
      if pet["name"] == target:
          print(f"Found {pet['name']} the {pet['animal']}, age {pet['age']}")
  ```

  **Challenge tiers:**
  - ⭐ 4 records, all with the same 3 fields, printed as a table
  - ⭐⭐ Add a search by name that prints the whole matching record
  - ⭐⭐⭐ Add a **filter** that builds a new list (e.g. pets older than 3, players with 5+ goals) and prints just those

  > ⚠️ Remember: to reach a field you go **through the record** — `pets[0]["name"]`, never `pets["name"]`. Every item in the list is a **dictionary**.

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? A Table of Records Is What AI Learns From

  The Class Register you built today — a list of records, each with the same fields — has a proper name in the world of AI: a **dataset**.

  When people "train" an AI, they feed it a giant table of records. Teaching an AI to spot spam? You give it thousands of records like `{"text": ..., "is_spam": ...}`. Teaching it to recommend films? Records like `{"title": ..., "rating": ...}`. Every row is one record; every column is one field — **exactly** the pattern you just wrote.

  **Discuss in the Zoom chat:** "If an AI learns from a table of records, what could go wrong if the records are wrong or missing fields?"

  You didn't just build a register today — you built the same shape of data that every AI on Earth learns from. Neat, isn't it? 🚀
---

# Year 2, Lesson 6: Lists of Dictionaries — Records! 🗃️📇

**Course:** Data Structures
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

- The **power pattern** real apps are built on: a **LIST** where every item is a **DICTIONARY** (a "record")
- How to **access** one field of one record: `people[0]["name"]`
- How to **build** a list of records and **add** new ones with `.append({...})`
- How to **loop** over records and print them as a tidy **table**
- How to **search** a list of records for a match
- How to **filter** — build a brand-new list of records that pass a test
- You'll finish with a working **Class Register** program 🎉

---

## 🤖 BrightByte's Big Idea

> *"Last week you looped over ONE dictionary. Brilliant. But real programs don't store one thing — they store HUNDREDS. Every contacts app, every register, every online shop keeps a LIST, and every item in that list is a DICTIONARY — a 'record'. It is THE most important shape in all of programming, and today it's yours. Learn this pattern and you can build a database. Next week, you will."*
> — BrightByte 🤖🗃️

---

## 🧩 Part 1: The Power Pattern — Records!

You already know two data structures:

- A **list** holds many things in order: `["Ama", "Kofi", "Zara"]`
- A **dictionary** holds facts about ONE thing, with labels: `{"name": "Ama", "age": 12}`

Now we combine them into the most powerful pattern in coding: a **list of dictionaries**. Each dictionary is called a **record** — it's all the facts about one person, one book, one contact.

```python
people = [
    {"name": "Ama", "age": 12},
    {"name": "Kofi", "age": 13},
]
```

Read that carefully:
- The `[ ]` on the outside makes it a **list**
- Each `{ }` inside is a **record** (a dictionary) describing one person
- The records are separated by commas, just like any list

Picture it as a **table**:

| Record (row) | `name` | `age` |
|---|---|---|
| `people[0]` | Ama | 12 |
| `people[1]` | Kofi | 13 |

Every row is a record. Every column is a **field** (`name`, `age`). This is exactly how a spreadsheet, a register, or a phone's contacts list is organised.

> 📁 **BEFORE WE START:** open Trinket, create a **new** Python trinket, and name it **`Y2-T4-W6-Records`**. Keep it — next week's Contact Manager is built on this very pattern!

---

## 🔍 Part 2: Reaching Into a Record

To get one fact, you go in **two steps**: first pick the record with `[index]`, then pick the field with `["key"]`.

```python
people = [
    {"name": "Ama", "age": 12},
    {"name": "Kofi", "age": 13},
]

print(people[0])            # the whole first record
print(people[0]["name"])    # just Ama's name
print(people[1]["age"])     # just Kofi's age
```

**Run it. Output:**
```
{'name': 'Ama', 'age': 12}
Ama
13
```

Let's trace `people[0]["name"]` slowly — this is the key idea of the whole lesson:

1. `people[0]` → the record `{"name": "Ama", "age": 12}`
2. `...["name"]` → look up the `name` field in that record → `"Ama"`

Think of it as **"first the row, then the column."** First `[0]` picks the row; then `["name"]` picks the column.

| Code | Step 1: which record? | Step 2: which field? | Result |
|---|---|---|---|
| `people[0]["name"]` | `people[0]` = Ama's record | `"name"` | `Ama` |
| `people[1]["age"]` | `people[1]` = Kofi's record | `"age"` | `13` |

✅ **Zoom checkpoint:** What does `people[1]["name"]` print? Type it in the chat! (Answer: `Kofi`)

---

## ➕ Part 3: Adding a Record

To grow the list, `.append()` a **whole dictionary** — a complete record — in one go:

```python
people = [
    {"name": "Ama", "age": 12},
    {"name": "Kofi", "age": 13},
]

people.append({"name": "Zara", "age": 13})

print(len(people))          # 3
print(people[2]["name"])    # Zara
```

**Run it. Output:**
```
3
Zara
```

Notice the new record is a full `{ }` dictionary with the **same fields** as the others (`name` and `age`). Keeping every record's fields the same is what makes the list behave like a tidy table.

> 💡 The new record lands at the **end** of the list, so it's `people[2]` (the third item, counting from 0).

✅ **Zoom checkpoint:** After the append, how many records are in `people`? (3 — check with `len()`.)

---

## 🔁 Part 4: Looping Over Records (Make a Table!)

Here's where records shine. One little loop can print the whole list — no matter how big:

```python
people = [
    {"name": "Ama", "age": 12},
    {"name": "Kofi", "age": 13},
    {"name": "Zara", "age": 13},
]

for person in people:
    print(person["name"], person["age"])
```

**Run it. Output:**
```
Ama 12
Kofi 13
Zara 13
```

Read the loop out loud: *"for each **person** in **people**..."*. Each time round, `person` is ONE record (a dictionary), so we reach its fields with `person["name"]` and `person["age"]`.

### Make It a Neat Table

f-strings let us line the columns up. `:<10` means "pad this to 10 characters wide, lined up to the left":

```python
print(f"{'Name':<10} {'Age'}")
for person in people:
    print(f"{person['name']:<10} {person['age']}")
```

**Run it. Output:**
```
Name       Age
Ama        12
Kofi       13
Zara       13
```

> ⚠️ **Quotes inside an f-string:** the f-string uses **double** quotes on the outside, so the keys inside must use **single** quotes: `person['name']`, NOT `person["name"]`. Mixing them up is a common slip!

✅ **Zoom checkpoint:** Change `:<10` to `:<20`. What happens to the spacing? (The `Age` column moves further right.)

---

## 🔎 Part 5: Searching a List of Records

Searching means: **loop through every record and check a field**. When it matches, we found it.

```python
people = [
    {"name": "Ama", "age": 12},
    {"name": "Kofi", "age": 13},
    {"name": "Zara", "age": 13},
]

target = "Kofi"
for person in people:
    if person["name"] == target:
        print(f"Found {person['name']}, age {person['age']}")
```

**Run it. Output:**
```
Found Kofi, age 13
```

Trace it: the loop checks Ama (`"Ama" == "Kofi"`? no), then Kofi (`"Kofi" == "Kofi"`? **yes!** → print), then Zara (no). Only the match prints.

### What If There's No Match?

We use a `found` flag so we can say "not found" politely:

```python
target = "Yaw"
found = False
for person in people:
    if person["name"] == target:
        print(f"Found {person['name']}, age {person['age']}")
        found = True

if not found:
    print(f"No one named {target}")
```

**Run it. Output:**
```
No one named Yaw
```

`found` starts as `False`. If we ever match, it flips to `True`. After the loop, if it's still `False`, nobody matched — so we print the friendly message.

✅ **Zoom checkpoint:** Search for `Ama`. What prints? Now search for `Musa`. What prints? (Found Ama, age 12 / No one named Musa)

---

## 🧮 Part 6: Filtering — Build a New List of Records

**Filtering** is like searching, but instead of printing matches we **collect them into a brand-new list**. Example: everyone aged 13 or older.

```python
people = [
    {"name": "Ama", "age": 12},
    {"name": "Kofi", "age": 13},
    {"name": "Zara", "age": 13},
]

teens = []                      # start with an empty list
for person in people:
    if person["age"] >= 13:
        teens.append(person)    # collect the whole record

print(f"Aged 13+: {len(teens)}")
for person in teens:
    print(f"  {person['name']} ({person['age']})")
```

**Run it. Output:**
```
Aged 13+: 2
  Kofi (13)
  Zara (13)
```

The recipe every filter follows:
1. Make an **empty list** (`teens = []`)
2. **Loop** over every record
3. **Test** a field with `if`
4. If it passes, **`.append()`** the record into the new list

Now `teens` is its own list of records you can loop over, count, or print — a smaller table built from the big one.

✅ **Zoom checkpoint:** Change the test to `person["age"] < 13`. Who ends up in the list now? (Just Ama.)

---

## 🏫 Part 7: Put It Together — The Class Register

Let's combine everything into a real program. This is what goes in your `Y2-T4-W6-Records` Trinket. Our records have **three** fields this time: `name`, `age`, and `grade`.

```python
# 🗃️ Y2-T4-W6-Records — Class Register
# Made by: [YOUR NAME]

# --- The register: a list of records ---
register = [
    {"name": "Ama", "age": 12, "grade": "Year 7"},
    {"name": "Kofi", "age": 13, "grade": "Year 8"},
    {"name": "Zara", "age": 13, "grade": "Year 8"},
]

# --- Add a new student ---
register.append({"name": "Kwame", "age": 11, "grade": "Year 7"})

# --- Print every record as a table ---
print("=" * 32)
print(f"{'Name':<10} {'Age':<5} {'Grade'}")
print("=" * 32)
for student in register:
    print(f"{student['name']:<10} {student['age']:<5} {student['grade']}")
print("=" * 32)

# --- Search by name ---
target = input("Search for a name: ")
found = False
for student in register:
    if student["name"] == target:
        print(f"✅ {student['name']} is {student['age']} and in {student['grade']}")
        found = True
if not found:
    print(f"❌ No student named {target}")

# --- Filter: everyone aged 13+ ---
teens = []
for student in register:
    if student["age"] >= 13:
        teens.append(student)

print(f"Students aged 13+: {len(teens)}")
for student in teens:
    print(f"  {student['name']} ({student['age']})")
```

### Example Run

**Zara searches for herself:**
```
================================
Name       Age   Grade
================================
Ama        12    Year 7
Kofi       13    Year 8
Zara       13    Year 8
Kwame      11    Year 7
================================
Search for a name: Zara
✅ Zara is 13 and in Year 8
Students aged 13+: 2
  Kofi (13)
  Zara (13)
```

🎉 **You built a searchable, filterable register!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: Forgetting to pick the record first**

❌ Wrong — trying to reach a field straight off the list:
```python
people = [{"name": "Ama", "age": 12}]
print(people["name"])
```
```
TypeError: list indices must be integers or slices, not str
```
😱 A **list** is numbered — you index it with a number like `people[0]`. Only a **dictionary** understands a word key like `["name"]`.

✅ Correct — record first (a number), then field (a word):
```python
print(people[0]["name"])     # Ama
```

> **Remember: "first the row, then the column."** `people[0]` picks the row; `["name"]` picks the column.

---

**Mistake 2: Spelling a field name wrong**

❌ Wrong — there is no `surname` field:
```python
person = {"name": "Kofi", "age": 13}
print(person["surname"])
```
```
KeyError: 'surname'
```

✅ Correct — use a key that actually exists (and mind capital letters — `"Name"` is not `"name"`):
```python
print(person["name"])        # Kofi
```

> A `KeyError` means "I looked, and there's no field with that exact spelling in this record."

---

**Mistake 3: Forgetting each item is a dictionary**

❌ Wrong — treating the record like a plain value:
```python
for person in people:
    print(person[0])
```
```
KeyError: 0
```
Inside the loop, `person` is a **dictionary**, not a string or a list — so `person[0]` looks for a field literally named `0` and fails.

✅ Correct — reach into the record with its field key:
```python
for person in people:
    print(person["name"])
```

---

**Mistake 4: Mixing quote types inside an f-string**

❌ Wrong — double quotes inside double quotes end the string early:
```python
print(f"{person["name"]}")
```
```
SyntaxError: invalid syntax
```

✅ Correct — single quotes for the key inside a double-quoted f-string:
```python
print(f"{person['name']}")
```

---

## 🌟 What's Coming Next Week?

You've just learned the pattern that runs the world's apps. Next week we USE it for real.

**Week 7: Build the Contact Manager!** 📇

A contacts app is nothing more than a **list of records** — exactly what you built today. Each contact will be a dictionary like:

```python
contacts = [
    {"name": "Ama", "phone": "080-1234", "email": "ama@mail.com"},
    {"name": "Kofi", "phone": "080-5678", "email": "kofi@mail.com"},
]
```

Look familiar? A list of dictionaries — records! Next week we'll:
- ➕ **Add** contacts with `.append({...})` (like Part 3 today)
- 📋 **List** them all in a table (like Part 4)
- 🔎 **Search** for a contact by name (like Part 5)
- 🔁 Wrap it in a **menu loop** so you can do it again and again

> Keep your `Y2-T4-W6-Records` Trinket safe. Everything you practised today is exactly the toolkit the Contact Manager needs — this week was the training, next week is the match! ⚽

---

## 🏆 Today's Achievements

- ✅ You learned the **power pattern**: a list of dictionaries (records)
- ✅ You reached one field with **`people[0]["name"]`** — row first, column second
- ✅ You **added** a record with `.append({...})`
- ✅ You **looped** over records and printed a tidy **table**
- ✅ You **searched** a list of records for a match (with a `found` flag)
- ✅ You **filtered** records into a brand-new list
- ✅ You built a working **Class Register** — a real mini database!

> *"Stop and realise what just happened. You can now store hundreds of records, print them, search them, and filter them — that's a DATABASE. Big apps do the same thing you did today, just with more records. Next week you turn this skill into a Contact Manager. You're two steps from the Data Architect Badge!"*
> — BrightByte 🤖🗃️

---

## 📚 Homework: Build a Mini Database

Build your own **Mini Database** — a list of records about a topic YOU love.

**Requirements:**
1. Open a Trinket (keep it in `Y2-T4-W6-Records` or make a new one)
2. Pick ONE topic: **books**, **pets**, or **players**
3. Make a list of **at least 4 record dictionaries**, each with the **same 3 fields**
4. Print them all as a **neat table** (loop over the list)
5. Add a **search** that finds one record by a field and prints it

**Field ideas (pick the set that matches your topic):**
- 📚 Books → `{"title": ..., "author": ..., "year": ...}`
- 🐶 Pets → `{"name": ..., "animal": ..., "age": ...}`
- ⚽ Players → `{"name": ..., "team": ..., "goals": ...}`

**Challenge tiers:**
- ⭐ 4 records, all with the same 3 fields, printed as a table
- ⭐⭐ Add a search by name that prints the whole matching record
- ⭐⭐⭐ Add a **filter** that builds a new list (e.g. pets older than 3, players with 5+ goals) and prints just those

> ⚠️ Remember: to reach a field you go **through the record** — `pets[0]["name"]`, never `pets["name"]`. Every item in the list is a **dictionary**.

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't just learn a data structure today — you learned the shape that every app, every register, and every dataset is built from. Next week, we turn it into a Contact Manager. See you there! 🗃️📇*
