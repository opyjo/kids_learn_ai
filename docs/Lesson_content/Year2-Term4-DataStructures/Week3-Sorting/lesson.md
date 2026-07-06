---
title: "Sorting & List Tricks 🔃🧰"
description: "Put lists in order with sort() and sorted(), flip them with reverse, and summarise data with min(), max(), sum() and len() — the tools that power leaderboards and search results"
difficulty: "intermediate"
order_index: 3
course_slug: "year2-term-4-data-structures"
is_premium: false
requires_trinket: true
starter_code: |
  # 🔃 Sorting & List Tricks — Warm-Up!
  # You already build and slice lists. Today we put them IN ORDER.

  scores = [72, 45, 90, 63, 88]
  print("Original scores:", scores)

  # Round 1: make a NEW sorted list (leave the original alone)
  # ranked = sorted(scores)
  # print("Ranked:", ranked)

  # Round 2: sort the ORIGINAL list in place
  # scores.sort()
  # print("Scores now:", scores)

  # Round 3: summarise the data
  # print("Highest:", max(scores))
  # print("Lowest:", min(scores))
  # print("Total:", sum(scores))

  # Ready to build a leaderboard? 🏆
solution_code: |
  # 🔃 Sorting & List Tricks — one possible solution

  scores = [72, 45, 90, 63, 88]
  print("Original scores:", scores)

  # Round 1: sorted() returns a NEW list, original untouched
  ranked = sorted(scores)
  print("Ranked (low to high):", ranked)   # [45, 63, 72, 88, 90]
  print("Original still:", scores)           # [72, 45, 90, 63, 88]

  # Round 2: .sort() changes the list itself, returns None
  scores.sort()
  print("Scores now:", scores)               # [45, 63, 72, 88, 90]

  # Round 3: aggregate helpers summarise the whole list
  print("Highest:", max(scores))             # 90
  print("Lowest:", min(scores))              # 45
  print("Total:", sum(scores))               # 358
  average = sum(scores) / len(scores)
  print("Average:", average)                 # 71.6

  # Highest first? reverse=True
  print("Top order:", sorted(scores, reverse=True))  # [90, 88, 72, 63, 45]
class_activities: |
  ## 🏆 Class Activity: Leaderboard Builder

  We're building a proper leaderboard from raw scores — the same idea behind every game high-score table. Type each stage in Trinket, run it, and give a **thumbs up** in Zoom when your output matches!

  ### Stage 1 — Rank the players (⭐)
  Start with this list and print it sorted from **highest to lowest**:
  ```python
  scores = [58, 91, 43, 76, 88, 64]
  ```
  Use `sorted(scores, reverse=True)`.

  ### Stage 2 — Top and bottom (⭐⭐)
  Print the **top score** with `max()` and the **lowest score** with `min()`.

  ### Stage 3 — The summary (⭐⭐⭐)
  Print the **total** of all scores (`sum()`) and the **average** (`sum(scores) / len(scores)`).

  ### 💬 Zoom-Chat Challenge
  In your own words, type in the chat: **what is the difference between `scores.sort()` and `sorted(scores)`?** (Hint: which one changes the original list, and which one hands you a new one?)

  ### Bonus
  Build a `passed` list using a loop: go through the scores and only add the ones **50 or over** to a new list. Print how many players passed with `len()`.
take_home_assignment: |
  ## 📚 Homework: Score Analyser

  Build a **Score Analyser** in Trinket — a program that takes a list of scores and reports on it like a real dashboard.

  **Requirements:**
  1. Start with a list of at least **6 numbers**
  2. Print the scores **sorted low to high** using `sorted()`
  3. Print the **highest** (`max()`), the **lowest** (`min()`) and the **average** (`sum() / len()`)
  4. Print a friendly summary sentence using an **f-string**

  **Example run:**
  ```
  Scores sorted: [41, 55, 67, 72, 88, 95]
  Highest: 95
  Lowest: 41
  Average: 69.67
  📊 6 scores analysed — the average was 69.67!
  ```

  **Challenge tiers:**
  - ⭐ The four required outputs above
  - ⭐⭐ Also print the scores **highest to lowest** with `reverse=True`, and build a `top_scores` list (a loop that collects every score over 80)
  - ⭐⭐⭐ Let the user `input()` scores one at a time into a list, then analyse them (remember to convert each with `int()`!)

  **Trinket starter:** open **Y2-T4-W3-Sorting**, or start a fresh Trinket and name it exactly that.

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Discussion: Why AI Loves Sorting

  Every time you search or scroll, something is being **sorted** for you:
  - 🔍 Search results are ranked "best match first"
  - 🎬 Streaming apps sort shows by "most likely you'll enjoy this"
  - 🛒 Shops sort products by price, rating, or popularity

  A recommendation system gives everything a **score**, then `sort`s the list so the highest scores appear at the top — exactly what you did today, just on millions of items.

  **Discuss in the Zoom chat:** "Think of an app you used this week. What do you think it sorted to decide what to show you first?"
---

# Year 2, Lesson 3: Sorting & List Tricks 🔃🧰

**Course:** Data Structures
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

- How to sort a list **in place** with `.sort()` — and the sneaky trap that catches everyone
- How to make a **new** sorted list with `sorted()` while leaving the original untouched
- How to flip the order with `reverse=True` (highest first!)
- The four **aggregate helpers** that summarise a whole list: `min()`, `max()`, `sum()`, `len()`
- How to **build a list inside a loop** to collect exactly the items you want
- You'll build a **Leaderboard Builder** and take home a **Score Analyser**

---

## 🤖 BrightByte Kicks Off

> *"Last week you learned to SEARCH your lists — to find things. This week? We bring ORDER. A pile of scores is just noise... until you sort it into a leaderboard. Then suddenly it tells a story: who won, who's last, what the average is. Sorting is one of the most-used tricks in all of computing — and by the end of today you'll have two ways to do it. Let's line things up!"*
> — BrightByte 🤖🔃

---

## 📋 Part 1: Two Ways to Sort

You already know how to build lists, slice them, and search them. Today we put them **in order**. Python gives you two tools, and knowing the difference is the whole lesson.

### Tool 1: `sorted()` — makes a NEW list

`sorted()` takes your list and hands back a **brand-new sorted list**. Your original is left exactly as it was.

```python
scores = [3, 1, 2]
ranked = sorted(scores)
print(ranked)     # [1, 2, 3]
print(scores)     # [3, 1, 2]  ← original UNCHANGED
```

Trace it: `sorted([3, 1, 2])` → `[1, 2, 3]`. The original `scores` never moved.

### Tool 2: `.sort()` — changes the list IN PLACE

`.sort()` is a **method** you attach to a list with a dot. It rearranges the list **itself** and gives back nothing.

```python
scores = [3, 1, 2]
scores.sort()
print(scores)     # [1, 2, 3]  ← the original IS now sorted
```

Trace it: after `scores.sort()`, the list `scores` **is** `[1, 2, 3]`. There's no new list — the old one changed.

### The Comparison Table

| Feature | `sorted(my_list)` | `my_list.sort()` |
|---|---|---|
| Changes the original? | ❌ No | ✅ Yes |
| Gives back a value? | ✅ A new sorted list | ❌ Nothing (`None`) |
| How you use it | `new = sorted(old)` | `old.sort()` |
| Best for | Keeping the original safe | Not needing the original again |

> **Say it out loud:** *"`sorted` gives me a new one. `.sort()` changes this one."* That single sentence will save you a hundred bugs.

---

## ⏫ Part 2: Flipping the Order with `reverse=True`

By default, both tools sort **smallest to largest** (or A→Z for words). For a leaderboard you usually want **highest first** — so add `reverse=True`:

```python
scores = [72, 45, 90, 63]
print(sorted(scores))                 # [45, 63, 72, 90]  low → high
print(sorted(scores, reverse=True))   # [90, 72, 63, 45]  high → low
```

It works on `.sort()` too:

```python
scores = [72, 45, 90, 63]
scores.sort(reverse=True)
print(scores)                          # [90, 72, 63, 45]
```

> 💡 **`reverse=True` is not `reverse = True` with the space?** Both work inside the brackets — but keep the `True` spelled with a **capital T**. Python is fussy about that.

---

## 🔤 Part 3: Sorting Words, Too

Sorting isn't just for numbers. A list of names sorts **alphabetically** (A→Z):

```python
names = ["Ngozi", "Amara", "Kwame", "Bisi"]
print(sorted(names))    # ['Amara', 'Bisi', 'Kwame', 'Ngozi']
```

Trace it: A comes before B comes before K comes before N, so `sorted(["Ngozi", "Amara", "Kwame", "Bisi"])` → `['Amara', 'Bisi', 'Kwame', 'Ngozi']`.

Add `reverse=True` for Z→A:

```python
names = ["Ngozi", "Amara", "Kwame", "Bisi"]
print(sorted(names, reverse=True))   # ['Ngozi', 'Kwame', 'Bisi', 'Amara']
```

> **This is exactly how the Contact Manager will sort your contacts by name** in Week 7 — alphabetical order, one line of code. You're building that skill right now.

> ⚠️ **Capital letters sort first.** Python puts `"Zara"` before `"amara"` because ALL capital letters come before ALL lowercase ones. If your names sort oddly, check for stray capitals — we'll polish this later in the term.

---

## 📊 Part 4: Summarising a List — The Aggregate Helpers

Sorting orders your data. **Aggregate helpers** *summarise* it — they take a whole list and hand back a single answer.

| Helper | What it does | Example | Result |
|---|---|---|---|
| `len()` | How many items | `len([45, 63, 72])` | `3` |
| `max()` | The biggest item | `max([45, 63, 72])` | `72` |
| `min()` | The smallest item | `min([45, 63, 72])` | `45` |
| `sum()` | Adds numbers together | `sum([45, 63, 72])` | `180` |

Trace `sum([1, 2, 3])` → `6`. And `len([1, 2, 3])` → `3`.

### The Average — sum divided by len

There's no `average()` in Python, but you already have the two pieces:

```python
scores = [45, 63, 72]
average = sum(scores) / len(scores)
print(average)     # 60.0
```

Trace it: `sum(scores)` is `180`, `len(scores)` is `3`, so `180 / 3` → `60.0`.

> 💡 **`max()`/`min()` work on words too!** `max(["Amara", "Bisi", "Ngozi"])` → `'Ngozi'` (last alphabetically). But `sum()` is for **numbers only** — see the Common Mistakes below.

---

## 🔁 Part 5: Building a List Inside a Loop

Here's a genuinely powerful pattern: start with an **empty list**, loop through some data, and `.append()` only the items you care about.

Say we want just the scores **over 50**:

```python
scores = [72, 45, 90, 30, 88]
passed = []                    # start EMPTY

for score in scores:
    if score > 50:
        passed.append(score)   # collect the ones we want

print(passed)                  # [72, 90, 88]
print("Players who passed:", len(passed))   # 3
```

Trace it step by step:
- `72 > 50`? Yes → `passed` is `[72]`
- `45 > 50`? No → skip
- `90 > 50`? Yes → `passed` is `[72, 90]`
- `30 > 50`? No → skip
- `88 > 50`? Yes → `passed` is `[72, 90, 88]`

This "empty list + loop + append" pattern is everywhere in real code — filtering results, collecting matches, building reports. Combine it with `sorted()` and you can filter *then* rank in a few lines.

---

## ⚠️ Common Mistakes (Read These Twice!)

**Mistake 1: Catching the result of `.sort()`**

`.sort()` returns **nothing** (`None`). If you assign it to a variable, you get `None` — not a sorted list!

❌ Wrong:
```python
scores = [3, 1, 2]
ranked = scores.sort()
print(ranked)
```
```
None
```

✅ Correct — use `sorted()` if you want a new list:
```python
scores = [3, 1, 2]
ranked = sorted(scores)
print(ranked)     # [1, 2, 3]
```
✅ Or use `.sort()` on its own line and print the list itself:
```python
scores = [3, 1, 2]
scores.sort()
print(scores)     # [1, 2, 3]
```

> This is the #1 sorting bug in the world. If a "sorted list" prints `None`, you fell into this trap. 🕳️

---

**Mistake 2: `sum()` on a list of words**

`sum()` only adds **numbers**. Try it on text and Python refuses:

❌ Wrong:
```python
names = ["Ama", "Kofi"]
print(sum(names))
```
```
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

✅ Use `sum()` for numbers, and `len()` when you just want the count of words:
```python
names = ["Ama", "Kofi"]
print(len(names))     # 2
```

---

**Mistake 3: Sorting a mixed list (numbers AND words)**

Python can't decide whether `7` comes before `"cat"` — they're different types — so it crashes.

❌ Wrong:
```python
stuff = [3, "apple", 1]
print(sorted(stuff))
```
```
TypeError: '<' not supported between instances of 'str' and 'int'
```

✅ Keep a list **all numbers** or **all words**:
```python
numbers = [3, 1, 2]
print(sorted(numbers))         # [1, 2, 3]

words = ["pear", "apple"]
print(sorted(words))           # ['apple', 'pear']
```

---

## 🏆 Part 6: Class Activity — Leaderboard Builder

Time to put it all together and build a real leaderboard! Follow the stages in Trinket. **Thumbs up** in Zoom when each stage runs.

**Stage 1 — Rank the players (⭐)**
```python
scores = [58, 91, 43, 76, 88, 64]
print("Leaderboard:", sorted(scores, reverse=True))
```
Expected: `Leaderboard: [91, 88, 76, 64, 58, 43]`

**Stage 2 — Top and bottom (⭐⭐)**
```python
print("🥇 Top score:", max(scores))     # 91
print("🐢 Lowest score:", min(scores))  # 43
```

**Stage 3 — The summary (⭐⭐⭐)**
```python
total = sum(scores)
average = total / len(scores)
print("Total points:", total)               # 420
print("Average score:", average)            # 70.0
```

Trace the numbers: `58+91+43+76+88+64 = 420`, and `420 / 6 = 70.0`. ✅

**💬 Zoom-Chat Challenge:** type the difference between `scores.sort()` and `sorted(scores)` in your own words. One changes the original; the other makes a new one — but which is which?

**Bonus:** build a `passed` list with a loop that collects only scores **50 or over**, then print `len(passed)`.

---

## 🌟 What's Coming Next Week?

You've mastered lists — building, slicing, searching, and now sorting. But lists have one limit: they only remember the **order** of things, not what each thing *means*.

Next week we unlock a **whole new data structure**: the **dictionary** 📖. Instead of `contacts[0]`, you'll write `contact["name"]` and `contact["phone"]` — labelling every piece of data so it never gets muddled. Dictionaries are the missing piece that turns a list of scores into a proper contact card. See you there!

---

## 🏆 Today's Achievements

- ✅ You can make a new sorted list with `sorted()`
- ✅ You can sort a list in place with `.sort()` — and you know it returns `None`
- ✅ You can flip any sort with `reverse=True`
- ✅ You can summarise data with `min()`, `max()`, `sum()` and `len()`
- ✅ You can compute an average with `sum() / len()`
- ✅ You can build a filtered list inside a loop
- ✅ You built a working **Leaderboard Builder**

> *"Look at that — you took a messy pile of numbers and turned it into a leaderboard, a top score, and an average. That's not a beginner move. That's DATA work. Sorting and summarising are the everyday tools of every real app on your phone. Well ranked, coder!"*
> — BrightByte 🤖🔃

---

## 📚 Homework: Score Analyser

Build a **Score Analyser** in Trinket — a program that takes a list of scores and reports on it like a real dashboard.

**Requirements:**
1. Start with a list of at least **6 numbers**
2. Print the scores **sorted low to high** using `sorted()`
3. Print the **highest** (`max()`), the **lowest** (`min()`) and the **average** (`sum() / len()`)
4. Print a friendly summary sentence using an **f-string**

**Example run:**
```
Scores sorted: [41, 55, 67, 72, 88, 95]
Highest: 95
Lowest: 41
Average: 69.67
📊 6 scores analysed — the average was 69.67!
```

**Challenge tiers:**
- ⭐ The four required outputs above
- ⭐⭐ Also print the scores **highest to lowest** with `reverse=True`, and build a `top_scores` list (a loop that collects every score over 80)
- ⭐⭐⭐ Let the user `input()` scores one at a time into a list, then analyse them (remember to convert each with `int()`!)

**Trinket:** open **Y2-T4-W3-Sorting**, or start a fresh Trinket and name it exactly that.

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.

---

*You brought order to the chaos today. Next week, we give every piece of data a name. Keep sorting! 🔃🧰*
