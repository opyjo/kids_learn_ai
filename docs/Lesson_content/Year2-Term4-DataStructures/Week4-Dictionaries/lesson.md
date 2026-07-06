---
title: "Dictionaries: Labelled Boxes 🗂️🏷️"
description: "Meet the dictionary — Python's way of storing information with named labels instead of number positions, the core building block of your Contact Manager"
difficulty: "intermediate"
order_index: 4
course_slug: "year2-term-4-data-structures"
is_premium: false
requires_trinket: true
starter_code: |
  # 🗂️ Dictionaries: Labelled Boxes
  # A list uses NUMBER positions. A dictionary uses NAMED keys!

  # Here is a student profile as a dictionary
  person = {"name": "Ama", "age": 12}

  # Read a value by its KEY (not a number!)
  print(person["name"])

  # TODO: print Ama's age using its key

  # TODO: add a new field called "grade" with the value "Year 2"

  # TODO: print the whole dictionary to see what changed
solution_code: |
  # 🗂️ Dictionaries: Labelled Boxes — one possible solution

  # A student profile as a dictionary
  person = {"name": "Ama", "age": 12}

  # Read values by their KEY
  print(person["name"])   # Ama
  print(person["age"])    # 12

  # Add a brand-new field (same syntax adds OR updates)
  person["grade"] = "Year 2"

  # Update an existing field
  person["age"] = 13

  # Safe read with .get — no crash if the key is missing
  print(person.get("email"))   # None (Ama has no email yet)

  # Check for a key before using it
  if "name" in person:
      print("This profile has a name:", person["name"])

  # See the whole dictionary
  print(person)
class_activities: |
  ## 🎮 Class Activity: Build a Profile Box 🗂️

  You are going to build a student profile as a dictionary, then read, add, and update its fields. Run each step in Trinket and give a **thumbs up** in Zoom when it works!

  ### Step 1 — Create the box (⭐)
  Make a dictionary with your own details:
  ```python
  me = {"name": "Kofi", "age": 12, "town": "Accra"}
  print(me)
  ```

  ### Step 2 — Read a field by its key (⭐)
  ```python
  print(me["name"])
  print(me["town"])
  ```
  > **Zoom chat:** what does `me["name"]` give you — the word `name`, or your actual name?

  ### Step 3 — Add a new field (⭐⭐)
  ```python
  me["hobby"] = "football"
  print(me)
  ```

  ### Step 4 — Update a field (⭐⭐)
  ```python
  me["age"] = 13
  print(me["age"])
  ```

  ### Step 5 — Safe read + membership check (⭐⭐⭐)
  ```python
  print(me.get("email"))       # None — no crash
  if "hobby" in me:
      print("Hobby on file:", me["hobby"])
  ```

  ### Bonus
  Print a friendly profile card using f-strings and your dictionary:
  ```python
  print(f"{me['name']} is {me['age']} and loves {me['hobby']}!")
  ```
  Paste your favourite line in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: My Profile (or Pet Record!)

  Build a **profile program** in Trinket that stores information in a **dictionary**. Choose either a "My Profile" about you, or a "Pet Record" about a real or imaginary pet.

  **Requirements:**
  1. Create a dictionary with **at least 4 fields** (e.g. `name`, `age`, `favourite_colour`, `town`)
  2. Print **each field** in a friendly sentence using **f-strings**
  3. **Add one new field** with `dict["new_key"] = value`
  4. **Update one existing field** to a different value, then print it to prove it changed

  **Example run (Pet Record):**
  ```
  🐾 Pet Record 🐾
  Name: Bingo
  Type: dog
  Age: 3
  Bingo just had a birthday — now 4 years old!
  Favourite toy: rope (newly added!)
  ```

  **Challenge tiers:**
  - ⭐ 4 fields, printed with f-strings, one add + one update
  - ⭐⭐ Use `.get()` to safely print a field that might not exist, and an `if "key" in dict:` check
  - ⭐⭐⭐ Ask the user with `input()` to fill in one of the fields, then store their answer in the dictionary

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? AI Runs on Dictionaries

  Dictionaries are everywhere in real AI programs — not as an add-on, but as the core.

  - ⚙️ **AI settings are dictionaries.** When programmers set up an AI model, they pass a dictionary of options like `{"model": "smart", "temperature": 0.7, "max_words": 200}`. Each named key controls one setting — exactly the labelled-box idea you learned today.
  - 📊 **Counting words is a dictionary.** To find which word appears most in a story, an AI counts them into a dictionary like `{"the": 42, "dragon": 7, "castle": 3}` — the word is the key, the count is the value.

  **Discuss in the Zoom chat:** why is `{"temperature": 0.7}` easier to understand than a list like `[0.7]`? (Hint: the *label* tells you what the number means!)
---

# Year 2, Lesson 4: Dictionaries — Labelled Boxes 🗂️🏷️

**Course:** Data Structures
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

- The **big idea**: a list finds things by NUMBER position; a dictionary finds them by NAMED key
- How to **create** a dictionary: `person = {"name": "Ama", "age": 12}`
- How to **read** a value by its key — and what a `KeyError` is when the key is missing
- The safer `.get("key")` that returns `None` instead of crashing
- How to **add**, **update**, and **delete** fields
- How to **check** if a key exists with `if "name" in person:`
- **When** to reach for a dictionary instead of a list

---

## 🤖 BrightByte Sets the Scene

> *"For three weeks you've been a LIST expert — indexing, slicing, sorting, the lot. Lists are brilliant... but they have one weakness. To get something out, you have to remember its NUMBER. Was the phone number at position 2 or position 3? Ugh. Today I hand you a superpower: boxes with LABELS on them. No more counting positions — you just ask for what you want by name. Meet the dictionary."*
> — BrightByte 🤖🗂️

---

## 📦 Part 1: The Problem With Positions

Imagine storing a person with a **list**:

```python
person = ["Ama", 12, "ama@email.com"]
```

To get Ama's email, you must remember it lives at position `2`:

```python
print(person[2])   # ama@email.com
```

But... was the email at position 2 or 1? Was age first or second? With a list you have to **memorise the order**. And if someone adds a new detail at the front, every position shifts and your program breaks. 😱

**Dictionaries fix this.** Instead of numbers, you use **labels** — called **keys**:

```python
person = {"name": "Ama", "age": 12, "email": "ama@email.com"}
print(person["email"])   # ama@email.com
```

Now you never count positions again. You just ask for the label you want. Much friendlier!

---

## 🗂️ Part 2: Making a Dictionary

A dictionary uses **curly braces** `{ }`, and each item is a **key: value** pair:

```python
person = {"name": "Ama", "age": 12}
```

Let's break that down:

| Part | Meaning |
|---|---|
| `{ }` | Curly braces = "this is a dictionary" |
| `"name"` | A **key** (the label on the box) |
| `"Ama"` | The **value** (what's inside the box) |
| `:` | A colon joins each key to its value |
| `,` | A comma separates one pair from the next |

So `person` has two labelled boxes: a box labelled `"name"` holding `"Ama"`, and a box labelled `"age"` holding `12`.

> 💡 Keys are almost always **text** (strings in quotes). Values can be anything: text, numbers, even `True`/`False`.

---

## 🔑 Part 3: Reading a Value by Its Key

To open a box, put its **key** in square brackets `[ ]`:

```python
person = {"name": "Ama", "age": 12}

print(person["name"])   # Ama
print(person["age"])    # 12
```

**Trace it slowly:**

```
{"name": "Ama", "age": 12}["name"]  →  "Ama"
{"name": "Ama", "age": 12}["age"]   →  12
```

You looked up the box by its **label**, and out came the value. No counting!

> ⚠️ Notice: with a list you'd write `person[0]` (a **number**). With a dictionary you write `person["name"]` (a **key in quotes**). Same square brackets, totally different idea.

### 💬 Zoom Checkpoint

> **Type in the Zoom chat:** what will `person["name"]` print — the word `name`, or the value `Ama`?
> (Answer: the **value**, `Ama` — the key is just how you ask for it!)

---

## 💥 Part 4: The KeyError (When the Label Doesn't Exist)

What if you ask for a box that isn't there?

```python
person = {"name": "Ama", "age": 12}
print(person["email"])
```

💥 **CRASH!**

```
KeyError: 'email'
```

Python is telling you: *"There's no box labelled `email` in this dictionary!"* A `KeyError` always names the missing key — here, `'email'`. When you see one, check your spelling and check the key really exists.

### The Safer Way: `.get()`

Sometimes you're not sure a key is there. Instead of risking a crash, use `.get()`:

```python
person = {"name": "Ama", "age": 12}

print(person.get("name"))    # Ama    (key exists → returns the value)
print(person.get("email"))   # None    (key missing → returns None, NO crash)
```

**Trace it:**

```
person.get("name")   →  "Ama"
person.get("email")  →  None
```

`None` is Python's word for "nothing here". Notice `.get()` stayed calm instead of crashing. Use `person["key"]` when you're **sure** the key exists, and `person.get("key")` when you're **not sure**.

---

## ➕ Part 5: Adding and Updating Fields

Here's a lovely surprise — **adding** and **updating** use the *exact same syntax*:

```python
person = {"name": "Ama", "age": 12}

# ADD a brand-new field (the key "email" doesn't exist yet)
person["email"] = "ama@email.com"

# UPDATE an existing field (the key "age" already exists)
person["age"] = 13

print(person)
```

**Output:**
```
{'name': 'Ama', 'age': 13, 'email': 'ama@email.com'}
```

The rule is simple:
- If the key **doesn't exist** → Python **adds** a new box
- If the key **already exists** → Python **replaces** what's inside

| Code | Key exists already? | What happens |
|---|---|---|
| `person["email"] = "..."` | No | **Adds** a new field |
| `person["age"] = 13` | Yes | **Updates** the value |

### Deleting a Field

To remove a box completely, use `del`:

```python
person = {"name": "Ama", "age": 12}
del person["age"]
print(person)   # {'name': 'Ama'}
```

The `age` box is gone. (Asking for `person["age"]` now would give a `KeyError`!)

---

## ✅ Part 6: Checking If a Key Exists

Before opening a box, you can check whether the label is even there using `in`:

```python
person = {"name": "Ama", "age": 12}

if "name" in person:
    print("We have a name:", person["name"])

if "email" in person:
    print("We have an email!")
else:
    print("No email on file.")
```

**Output:**
```
We have a name: Ama
No email on file.
```

> ⚠️ **Important:** `in` checks the **KEYS**, not the values. `"name" in person` is `True`, but `"Ama" in person` is `False` — because `"Ama"` is a *value*, not a key!

**Trace it:**

```
"name"  in {"name": "Ama", "age": 12}  →  True   (it's a key)
"email" in {"name": "Ama", "age": 12}  →  False  (no such key)
"Ama"   in {"name": "Ama", "age": 12}  →  False  (that's a value, not a key)
```

This is the safest pattern of all: check with `in` first, then read — no `KeyError` ever.

---

## 📋 Part 7: List vs Dictionary — Which One?

Both store lots of items. The difference is **how you find things**:

| | List 📃 | Dictionary 🗂️ |
|---|---|---|
| Finds things by | **Number position** | **Named key** |
| Looks like | `["Ama", 12]` | `{"name": "Ama", "age": 12}` |
| Get an item | `data[0]` | `data["name"]` |
| Best for | An **ordered collection** of similar things | **Labelled facts** about one thing |
| Example | A list of all pupils' names | One pupil's full profile |
| Order matters? | Yes — position is everything | No — you use labels, not order |

**Rule of thumb:**
- Use a **list** when things are the *same kind* and you care about *order* (a queue, a leaderboard, all the scores).
- Use a **dictionary** when you have *different labelled facts* about *one thing* (a name, an age, an email — all describing one person).

> *"Here's the mind-bender: a phone book is BOTH. It's a LIST of people, and each person is a DICTIONARY of details. Keep that thought — you'll build exactly that in Week 6!"*
> — BrightByte 🤖

---

## ⚠️ Common Mistakes

**Mistake 1: Using a number position on a dictionary**

❌ Wrong:
```python
person = {"name": "Ama", "age": 12}
print(person[0])
```
```
KeyError: 0
```

✅ Correct — use the **key**, not a number:
```python
person = {"name": "Ama", "age": 12}
print(person["name"])
```
```
Ama
```

> Dictionaries have **no positions**. `person[0]` looks for a *key* called `0`, which doesn't exist!

---

**Mistake 2: Asking for a key that isn't there**

❌ Wrong:
```python
person = {"name": "Ama"}
print(person["age"])
```
```
KeyError: 'age'
```

✅ Correct — check first, or use `.get()`:
```python
person = {"name": "Ama"}
print(person.get("age"))     # None — no crash
```

---

**Mistake 3: Confusing keys with values**

❌ This surprises everyone:
```python
person = {"name": "Ama"}
print("Ama" in person)
```
```
False
```

✅ `in` checks **keys**, not values:
```python
person = {"name": "Ama"}
print("name" in person)      # True — "name" IS a key
```

> Remember: keys are the *labels*, values are what's *inside*. `in` looks at the labels.

---

## 🎮 Class Activity: Build a Profile Box

Time to build your own labelled boxes! Open **Trinket** and create a new file named `Y2-T4-W4-Dictionaries`.

You'll build a student profile step by step — create it, read fields, add a field, update a field, then check keys safely. Full instructions are in the activity panel. Give a **thumbs up** in Zoom after each step that runs. 👍

> The finished version lives in the solution — but try each step yourself first!

---

## 📇 Part 8: This Connects Straight to Your Project

Remember the **Contact Manager** you're building this term? Here's the secret: **every contact will be a dictionary.**

```python
contact = {"name": "Ama", "phone": "0244-123-456"}
print(f"{contact['name']}: {contact['phone']}")
```

**Output:**
```
Ama: 0244-123-456
```

One contact = one dictionary of labelled facts. That's the core building block. In Week 6 you'll put many of these dictionaries into a **list**, and by Week 7 you'll have a real Contact Manager. Today you learned the single most important brick in the whole project. 🧱

---

## 🌟 What's Coming Next Week?

You can now build ONE dictionary and read from it. But what if a profile has *ten* fields? Printing them one by one would be exhausting:

```python
person = {"name": "Ama", "age": 12, "town": "Accra"}
# We want to print EVERY key and value automatically...
```

Next week — **Week 5: Looping Over Dictionaries** — you'll learn how to sweep through an *entire* dictionary with a `for` loop, printing every key and value in one go. It's the trick that turns dictionaries from handy into *powerful*. 🔁

---

## 🏆 Today's Achievements

- ✅ You understand the big idea: **labels** (keys) beat **positions** (numbers)
- ✅ You can create a dictionary with `{"key": value}`
- ✅ You can read a value with `person["key"]` — and you know a `KeyError` means the key is missing
- ✅ You can safely read with `.get()`, which returns `None` instead of crashing
- ✅ You can **add**, **update** (same syntax!), and **delete** fields
- ✅ You can check for a key with `if "key" in person:`
- ✅ You know each Contact Manager contact will be a **dictionary**

> *"Labelled boxes. That's all a dictionary is — but it changes everything. You'll use dictionaries in almost every real program you ever write, including the AI tools you love. Brilliant work today."*
> — BrightByte 🤖🗂️

---

## 📚 Homework: My Profile (or Pet Record!)

Build a **profile program** in Trinket that stores information in a **dictionary**. Choose either a "My Profile" about you, or a "Pet Record" about a real or imaginary pet.

**Requirements:**
1. Create a dictionary with **at least 4 fields** (e.g. `name`, `age`, `favourite_colour`, `town`)
2. Print **each field** in a friendly sentence using **f-strings**
3. **Add one new field** with `dict["new_key"] = value`
4. **Update one existing field** to a different value, then print it to prove it changed

**Example run (Pet Record):**
```
🐾 Pet Record 🐾
Name: Bingo
Type: dog
Age: 3
Bingo just had a birthday — now 4 years old!
Favourite toy: rope (newly added!)
```

**Challenge tiers:**
- ⭐ 4 fields, printed with f-strings, one add + one update
- ⭐⭐ Use `.get()` to safely print a field that might not exist, and an `if "key" in dict:` check
- ⭐⭐⭐ Ask the user with `input()` to fill in one of the fields, then store their answer in the dictionary

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*Labelled boxes, not numbered slots. You just learned the building block behind almost every app you use. See you next week for the looping magic! 🗂️🔁*
