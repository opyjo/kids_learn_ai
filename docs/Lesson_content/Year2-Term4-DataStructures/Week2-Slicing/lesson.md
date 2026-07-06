---
title: "Slicing & Searching Lists ✂️🔍"
description: "Grab sub-lists with slicing, and hunt for items using in, .index(), and .count() — the exact skills your Contact Manager will use to search"
difficulty: "intermediate"
order_index: 2
course_slug: "year2-term-4-data-structures"
is_premium: false
requires_trinket: true
starter_code: |
  # ✂️🔍 Slicing & Searching Warm-Up!
  # Last week you levelled up lists. This week we grab PIECES of them and SEARCH them.

  leaderboard = ["Ama", "Kofi", "Zara", "Yaw", "Efua", "Chidi"]

  # 1) SLICE: print just the top 3 players
  # print(leaderboard[ : ])   # <- fill in the numbers!

  # 2) SEARCH: is "Zara" on the leaderboard? Use the "in" operator
  # if "Zara" in leaderboard:
  #     print("Zara is here!")

  # 3) POSITION: what place is "Yaw" in? Use .index()
  # print(leaderboard.index("Yaw"))

  # Run it, then uncomment one line at a time and predict the output first!
solution_code: |
  # ✂️🔍 Slicing & Searching — one possible solution

  leaderboard = ["Ama", "Kofi", "Zara", "Yaw", "Efua", "Chidi"]

  # 1) SLICE: the top 3 (positions 0, 1, 2 — stop at 3, which is NOT included)
  top_three = leaderboard[:3]
  print("🥇 Top 3:", top_three)

  # 2) SEARCH: membership check with "in"
  if "Zara" in leaderboard:
      print("✅ Zara is on the leaderboard!")

  # 3) POSITION: find where "Yaw" sits (0 = first place)
  place = leaderboard.index("Yaw")
  print("Yaw is at index", place, "-> position", place + 1)

  # 4) COUNT: how many times does a name appear?
  print("Ama appears", leaderboard.count("Ama"), "time(s)")

  # 5) The last two players
  print("Bottom 2:", leaderboard[-2:])
class_activities: |
  ## 🕵️ Class Activity: List Detective

  You're a detective and the leaderboard is your case file. Type each mission in Trinket, run it, and give a **thumbs up** in Zoom when your output matches!

  ```python
  leaderboard = ["Ama", "Kofi", "Zara", "Yaw", "Efua", "Chidi"]
  ```

  ### Mission 1 — The Podium (⭐)
  Print only the **top 3** players using a slice.

  ### Mission 2 — Membership Check (⭐⭐)
  Ask the detective's big question with `in`:
  - Is `"Zara"` on the leaderboard? Print `Found it!` if yes.
  - Is `"Musa"` on the leaderboard? Print `No match.` if not.

  ### Mission 3 — Pin the Position (⭐⭐⭐)
  Use `.index()` to find what **place** `"Efua"` is in. Remember: index 0 is 1st place, so add 1 for the human-friendly position!

  ### 💬 Zoom Chat Challenge
  > Look at `leaderboard[1:3]`. **What exactly does it give back?** Type your prediction in the Zoom chat BEFORE you run it. (Careful — the stop number is sneaky!)

  ### Bonus — The Collector
  Loop through the leaderboard and build a NEW list of every name that contains the letter `"a"`. Print your collected list. How many did you catch?
take_home_assignment: |
  ## 📚 Homework: Search My List 🔍

  Build a **"Search My List"** program in Trinket. Start with a list of your own (favourite games, foods, songs — your choice, at least 6 items).

  **Requirements:**
  1. Print a **slice** of your list (e.g. the first 3 items) with a friendly label
  2. Use the `in` operator to **check if a specific item is present** and print a yes/no message
  3. Use `.index()` to **report the position** of an item that IS in the list
  4. Use a **loop** to search the list and collect every item that matches a rule (e.g. every score above 50, or every name longer than 4 letters) into a new results list, then print it

  **Example run (a scores version):**
  ```
  📋 Top 3 scores: [95, 88, 72]
  ✅ 88 is in the list!
  88 is at index 1 (that's position 2)
  🔎 Scores above 80: [95, 88, 90]
  ```

  **Challenge tiers:**
  - ⭐ Requirements 1–3 working
  - ⭐⭐ Add the collecting loop (requirement 4)
  - ⭐⭐⭐ Ask the user with `input()` what to search for, then use `in` and `.index()` on their answer — and wrap the `.index()` call in `try`/`except` so a missing item never crashes your program!

  **Trinket to open:** `Y2-T4-W2-Slicing`

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Think: Searching Is Everywhere in AI

  Everything you learned today — checking if something is *in* a list, finding *where* it is — is a tiny version of what AI does constantly.

  When you type a question into a search engine or a chatbot, it doesn't scroll through a list one item at a time like our loop does. Instead it finds the **nearest matches** — the items most similar to what you asked for — almost instantly, even across billions of items.

  **Discuss in the Zoom chat:**
  > When you start typing in YouTube or a messaging app and it suggests the rest, is that more like `in` (an exact match) or "nearest match" (something close-ish)?

  Later in Year 2 you'll learn how computers measure how "close" two things are. For now, remember: **search is just organised looking — and you can already do it in Python.**
---

# Year 2, Lesson 2: Slicing & Searching Lists ✂️🔍

**Course:** Data Structures
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

- How to grab a **sub-list** with slicing: `my_list[1:3]`, `my_list[:2]`, `my_list[2:]`
- The golden slicing rule: the **stop number is NOT included** (half-open range)
- Handy shortcuts, including negative slices like `my_list[-2:]` for "the last two"
- How to **search** a list with the `in` operator (`if "Ama" in names:`)
- How to find an item's position with `.index()` — and why it sometimes throws a **ValueError**
- How to count copies with `.count()`
- How to **loop through a list to collect** all the items that match a rule

---

## 🤖 BrightByte Sets the Scene

> *"Last week you levelled up lists — adding, inserting, removing. Powerful! But a real Contact Manager needs to DO things with all that data. 'Show me the top 3.' 'Is Kofi already saved?' 'Where is Ama in my list?' Those three questions are today's three superpowers: slice, check, and find. Master them, and your app can search. Ready, detective? 🔍"*
> — BrightByte 🤖✂️

---

## ✂️ Part 1: Slicing — Grabbing a Piece of a List

Sometimes you don't want the WHOLE list — you want a chunk of it. Maybe just the top 3 scores, or the first two names. That's called **slicing**.

The pattern is `my_list[start:stop]`:

```python
numbers = [10, 20, 30, 40, 50]
print(numbers[1:3])
```

**Output:**
```
[20, 30]
```

🤔 **Wait — why only two items?** Let's trace it carefully. Remember indexes start at **0**:

| Index | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Value | 10 | **20** | **30** | 40 | 50 |

`numbers[1:3]` means: **start at index 1, stop BEFORE index 3.** So it takes index 1 and index 2 — but **not** index 3. That gives `[20, 30]`.

> 🔑 **The Golden Rule of Slicing:** the **start is included**, but the **stop is NOT included**. Programmers call this a *half-open range*. A quick trick: `stop - start` tells you how many items you'll get. Here `3 - 1 = 2` items. ✅

---

## ✂️ Part 2: Slicing Shortcuts

You don't always have to write both numbers. Python fills in the blanks for you.

Using this list of names:

```python
names = ["Ama", "Kofi", "Zara", "Yaw", "Efua"]
```

| Index | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Value | Ama | Kofi | Zara | Yaw | Efua |

| Slice | What It Means | Result |
|---|---|---|
| `names[:2]` | From the start, stop before index 2 | `['Ama', 'Kofi']` |
| `names[2:]` | From index 2 to the very end | `['Zara', 'Yaw', 'Efua']` |
| `names[1:3]` | Index 1 up to (not including) 3 | `['Kofi', 'Zara']` |
| `names[:]` | A full copy of the whole list | `['Ama', 'Kofi', 'Zara', 'Yaw', 'Efua']` |

**Leaving out the start** means "begin at the beginning." **Leaving out the stop** means "go all the way to the end."

### Counting From the Back: Negative Slices

Negative numbers count from the **end** of the list backwards (-1 is the last item, -2 is the second-to-last):

```python
names = ["Ama", "Kofi", "Zara", "Yaw", "Efua"]
print(names[-2:])
```

**Output:**
```
['Yaw', 'Efua']
```

`names[-2:]` means "start 2 from the end, go to the end" — a lovely way to say **"the last two."** Perfect for showing the bottom of a leaderboard.

> 💡 **Slicing always gives you a NEW list** — it never changes the original. And unlike single indexing, **slicing never crashes**, even if your numbers go past the end (you'll see this in Common Mistakes!).

### 👍 Zoom Checkpoint

Type this and run it, then give a **thumbs up** when your output matches:

```python
scores = [95, 88, 72, 90, 60]
print("Top 3:", scores[:3])
```
```
Top 3: [95, 88, 72]
```

---

## 🔍 Part 3: Searching With the `in` Operator

Here's the detective's first question: **"Is this thing in the list?"**

The `in` operator answers with `True` or `False`:

```python
names = ["Ama", "Kofi", "Zara", "Yaw", "Efua"]

print("Ama" in names)
print("Musa" in names)
```

**Output:**
```
True
False
```

`"Ama"` really is in the list, so we get `True`. `"Musa"` is nowhere to be found, so `False`.

This is brilliant inside an `if` statement:

```python
names = ["Ama", "Kofi", "Zara"]

if "Kofi" in names:
    print("✅ Kofi is already saved.")
else:
    print("➕ Kofi is new — let's add them!")
```

**Output:**
```
✅ Kofi is already saved.
```

> 🎯 **Contact Manager tie-in:** before you add a new contact, you'll check `if name in contacts:` so you never save the same person twice. This one line is the heart of "search."

---

## 🔍 Part 4: Finding the Position With `.index()`

Knowing something is *in* the list is good. Knowing *where* it is — that's `.index()`:

```python
names = ["Ama", "Kofi", "Zara", "Yaw", "Efua"]

print(names.index("Zara"))
```

**Output:**
```
2
```

`"Zara"` sits at index `2`. Remember index `0` is the first item, so index `2` is the **third** in human terms. That's why we often print `index + 1` for people:

```python
place = names.index("Yaw")
print("Yaw is in position", place + 1)
```

**Output:**
```
Yaw is in position 4
```

### ⚠️ The Trap: Searching for Something That Isn't There

`.index()` has a temper. If you ask for an item that **isn't** in the list, it doesn't return `-1` or `None` — it **crashes**:

```python
names = ["Ama", "Kofi", "Zara"]
print(names.index("Musa"))
```

**Output:**
```
ValueError: 'Musa' is not in list
```

💥 The safe habit: **check with `in` first, THEN use `.index()`:**

```python
names = ["Ama", "Kofi", "Zara"]

if "Musa" in names:
    print("Position:", names.index("Musa"))
else:
    print("Musa is not on the list.")
```

**Output:**
```
Musa is not on the list.
```

No crash. That's the difference between a program that breaks and one that behaves. 🛡️

---

## 🔢 Part 5: Counting With `.count()`

Lists can hold the same value more than once. `.count()` tells you how many copies there are:

```python
votes = ["Ama", "Kofi", "Ama", "Zara", "Ama", "Kofi"]

print(votes.count("Ama"))
print(votes.count("Kofi"))
print(votes.count("Yaw"))
```

**Output:**
```
3
2
0
```

Notice that counting something that isn't there gives a calm `0` — `.count()` never crashes. Handy for tallying votes, repeated scores, or "how many times does this name appear?"

---

## 🧺 Part 6: Looping to Collect Matches

The `in` operator finds ONE answer: yes or no. But what if you want **every** item that matches a rule — like every score above 80? For that, we loop and **collect matches into a new list**.

The recipe is always the same three steps:

1. Make an **empty results list**
2. **Loop** through the original list
3. When an item matches your rule, **append** it to the results

```python
scores = [45, 88, 72, 90, 60, 95]

high_scores = []          # 1) empty results list
for score in scores:      # 2) look at each score
    if score >= 80:       #    does it match the rule?
        high_scores.append(score)   # 3) collect the winners

print("High scores:", high_scores)
```

**Output:**
```
High scores: [88, 90, 95]
```

We looked at all six scores; three of them were 80 or above, so they landed in `high_scores`. The rest were left behind.

### Bonus: `in` Works Inside Text Too

Cool secret: `in` can also check whether a piece of text is **inside** a word. That makes it perfect for searching names:

```python
names = ["Ama", "Amara", "Kofi", "Amina"]

matches = []
for name in names:
    if "Am" in name:            # does the name contain "Am"?
        matches.append(name)

print("Names with 'Am':", matches)
```

**Output:**
```
Names with 'Am': ['Ama', 'Amara', 'Amina']
```

`"Kofi"` has no `"Am"` in it, so it's skipped. This exact loop is how a Contact Manager's "search bar" will work — collect every contact whose name contains what the user typed. 🔍

---

## 🕵️ Class Activity: List Detective

Time to crack the case! Start with this leaderboard:

```python
leaderboard = ["Ama", "Kofi", "Zara", "Yaw", "Efua", "Chidi"]
```

- **Mission 1 (⭐):** Print only the **top 3** using a slice.
- **Mission 2 (⭐⭐):** Use `in` to check if `"Zara"` is present, and if `"Musa"` is present. Print a message for each.
- **Mission 3 (⭐⭐⭐):** Use `.index()` to find `"Efua"`'s place (remember to add 1 for the human position!).
- **Bonus:** Loop through and collect every name that contains the letter `"a"` into a new list.

> 💬 **Zoom Chat Challenge:** Before you run anything — what does `leaderboard[1:3]` give back? Type your prediction in the chat! (Hint: the stop number is *excluded*, so it's not what you might first guess.)

Give a **thumbs up** in Zoom as you clear each mission. 👍

---

## ⚠️ Common Mistakes

**Mistake 1: Expecting the stop number to be included**

❌ Wrong thinking — "`numbers[1:3]` gives me indexes 1, 2, AND 3":
```python
numbers = [10, 20, 30, 40]
print(numbers[1:3])
```
```
[20, 30]
```
✅ Right thinking — the **stop is excluded**. You get index 1 and 2 only. This "off-by-one" trips up everyone at first. Say it out loud: *"up to, but not including."*

---

**Mistake 2: Using `.index()` on a missing item**

❌ Wrong — it crashes:
```python
names = ["Ama", "Kofi"]
print(names.index("Zara"))
```
```
ValueError: 'Zara' is not in list
```
✅ Correct — check with `in` first:
```python
names = ["Ama", "Kofi"]
if "Zara" in names:
    print(names.index("Zara"))
else:
    print("Not found!")
```
```
Not found!
```

---

**Mistake 3: Thinking a slice will crash if the numbers are too big**

❌ Surprise — this does NOT crash:
```python
names = ["Ama", "Kofi", "Zara"]
print(names[1:99])
```
```
['Kofi', 'Zara']
```
✅ Good to know: **slicing is forgiving.** If the stop is past the end, Python just stops at the end — no error. (Single indexing like `names[99]` WOULD crash with an `IndexError` — but slicing never does.)

---

## 🌟 What's Coming Next Week?

You can now slice a list and search it. Next week — **Week 3: Sorting & List Tricks** — you'll put lists in ORDER:

```python
scores = [72, 95, 60, 88]
scores.sort()
print(scores)
```
```
[60, 72, 88, 95]
```

You'll meet `.sort()`, `sorted()`, `.reverse()`, `max()`, `min()`, and `sum()` — the tools that turn a messy pile of data into a tidy, ranked leaderboard. Combined with today's slicing, you'll be able to grab the **real** top 3 from any list. 🏆

---

## 🏆 Today's Achievements

- ✅ You can slice a list with `[start:stop]` — and you know the stop is **excluded**
- ✅ You mastered the shortcuts `[:2]`, `[2:]`, `[:]`, and negative slices like `[-2:]`
- ✅ You can search a list with `in` to get a `True`/`False` answer
- ✅ You can find an item's position with `.index()` — and dodge its `ValueError` by checking first
- ✅ You can tally copies with `.count()`
- ✅ You can loop through a list to **collect every matching item** into a new list

> *"Slice, check, find, collect. Four moves — and suddenly your programs can answer real questions about real data. That's not a beginner skill anymore, detective. That's exactly what your Contact Manager will run on. Beautifully done. 🔍"*
> — BrightByte 🤖✂️

---

## 📚 Homework: Search My List 🔍

Build a **"Search My List"** program in Trinket, starting with a list of your own (at least 6 items).

**Requirements:**
1. Print a **slice** of your list (e.g. the first 3 items) with a friendly label
2. Use `in` to **check if a specific item is present** and print a yes/no message
3. Use `.index()` to **report the position** of an item that IS in the list
4. Use a **loop** to collect every item that matches a rule into a new results list, then print it

**Example run:**
```
📋 Top 3 scores: [95, 88, 72]
✅ 88 is in the list!
88 is at index 1 (that's position 2)
🔎 Scores above 80: [95, 88, 90]
```

**Challenge tiers:**
- ⭐ Requirements 1–3 working
- ⭐⭐ Add the collecting loop (requirement 4)
- ⭐⭐⭐ Ask the user with `input()` what to search for, then use `in` and `.index()` on their answer — wrapped in `try`/`except` so a missing item never crashes!

**Trinket to open:** `Y2-T4-W2-Slicing`

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.

---

*Slice it, search it, solve it. See you next week, detective! ✂️🔍*
