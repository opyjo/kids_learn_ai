---
title: "Text Bar Charts 📊🟦"
description: "Turn numbers into your first data visualisation — draw labelled, scaled bar charts using only text characters, no plotting libraries needed"
difficulty: "intermediate"
order_index: 4
course_slug: "year2-term-7-data-visualization"
is_premium: false
requires_trinket: true
starter_code: |
  # 📊 Chart Studio — Text Bar Charts!
  # Turn plain numbers into a PICTURE using only text characters.

  # A small dataset: how many of the class picked each fruit
  fruits = {"Mango": 5, "Banana": 3, "Orange": 8, "Guava": 2}

  # TODO 1: Loop over the dict and print one bar per fruit.
  # Draw the bar with "█" * count  (that count must be a whole number — an INT!)
  # for name, count in fruits.items():
  #     print(name, "█" * count, count)

  # TODO 2: Line the labels up neatly with f-string padding, and
  # print the value at the END of each bar:
  #     print(f"{name:<8}| {'█' * count} {count}")

  # TODO 3 (scaling): try a BIG dataset where one block = 10 units.
  # scores = {"Ama": 30, "Kofi": 90, "Zainab": 60}
  # blocks = int(round(score / 10))

  # Run it and watch your data become a picture! 📊
solution_code: |
  # 📊 Chart Studio + Bar Chart Maker — one possible solution

  def bar_chart(data, block=1):
      """Print a labelled text bar chart from a dict of label -> value.
      'block' is how many units ONE █ stands for (the scale)."""
      for label, value in data.items():
          length = int(round(value / block))   # blocks MUST be a whole number!
          bar = "█" * length
          print(f"{label:<10}| {bar} {value}")

  # Small dataset — no scaling needed (1 block = 1 unit)
  fruits = {"Mango": 5, "Banana": 3, "Orange": 8, "Guava": 2}
  print("Favourite fruits")
  bar_chart(fruits)

  print()   # a blank line between the two charts

  # Big dataset — scale it so the bars fit the screen
  views = {"Mon": 120, "Tue": 340, "Wed": 200, "Thu": 400}
  biggest = max(views.values())
  scale = int(round(biggest / 20))   # aim for a longest bar of ~20 blocks
  if scale < 1:
      scale = 1                       # never divide by zero!
  print(f"Video views (1 block = {scale} views)")
  bar_chart(views, scale)
class_activities: |
  ## 📊 Class Activity: Chart Studio

  Open Trinket (`Y2-T7-W4-TextCharts`) and turn real numbers into pictures. Give a **thumbs up** in Zoom each time a chart appears in your output panel! 👍

  ### Level 1 — First Bars (⭐)
  Use this dataset and print one bar per fruit with `"█" * count`:
  ```python
  fruits = {"Mango": 5, "Banana": 3, "Orange": 8, "Guava": 2}
  ```

  ### Level 2 — Neat Labels (⭐⭐)
  1. Line the labels up using padding: `f"{name:<8}| "`
  2. Print the **value** at the end of each bar
  3. Add a title line above the chart

  ### Level 3 — Scale It (⭐⭐⭐)
  Chart this bigger dataset with **1 block = 10 units**:
  ```python
  scores = {"Ama": 30, "Kofi": 90, "Zainab": 60}
  ```
  Use `int(round(score / 10))` so the bar length is a whole number.

  ### 💬 Zoom Chat Challenge
  If **1 block = 10 units**, how many blocks do you draw for a value of **30**?
  Type your answer in the chat!
take_home_assignment: |
  ## 📚 Homework: Bar Chart Maker

  Write a **Bar Chart Maker** in Trinket — a program that takes a dataset and prints a neat, labelled text bar chart.

  **Requirements:**
  1. Start from a dataset — a **dict** of `label -> value` (make one up: goals scored, books read, hours of sleep…)
  2. Loop over it and draw each bar with `"█" * length`
  3. **Align** the labels using f-string padding and print the **value** at the end of each bar
  4. **Scale** the chart: compute a scale from the biggest value so bars never overflow the screen
  5. Print a title line that says what one block is worth

  **Example run:**
  ```
  Books read this term (1 block = 2 books)
  Ama       | ████████ 16
  Kofi      | █████ 10
  Zainab    | ████████████ 24
  ```

  **Challenge tiers:**
  - ⭐ A working chart from a small dataset (no scaling needed)
  - ⭐⭐ Aligned labels, values at the end, and a title line
  - ⭐⭐⭐ Wrap it in a `bar_chart(data, block)` **function** that automatically works out the scale from `max()`

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Think: Why Humans Make Charts

  AI can crunch millions of numbers in a blink — but humans understand *pictures* far faster than columns of digits. That's why data scientists turn an AI's findings into **charts** before showing them to people.

  **Discuss in the Zoom chat (30 seconds):** Look at your fruit chart. What do you notice INSTANTLY from the bars that would take longer to spot in the raw numbers `{"Mango": 5, "Banana": 3, "Orange": 8, "Guava": 2}`?

  You just did the job of a data storyteller: making numbers *speak* to a human eye. 📊
---

# Year 2, Lesson 4: Text Bar Charts 📊🟦

**Course:** Data & Visualization
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

- How to turn a number into a **bar** using `"█" * value` — your very first data *visualisation*
- How to **label** each bar and line the labels up neatly with f-string padding
- How to print the **value** at the end of each bar so the chart is easy to read
- How to draw a whole chart by **looping over a dict** of category → count (just like Week 3!)
- How to **scale** big numbers so the bars fit on screen instead of overflowing

---

## 🤖 BrightByte Says...

> *"Last three weeks you were a data DETECTIVE — parsing CSV strings, counting, finding averages. You turned messy data into tidy numbers. But here's a secret: numbers on their own are boring, and humans are slow at reading them. Today you become a data ARTIST. Same numbers — but now they become a picture the eye reads in a heartbeat. And you'll do it with nothing but text characters. No fancy libraries. Just you, a block character, and a clever loop. Let's draw!"*
> — BrightByte 🤖📊

---

## 📊 Part 1: From Numbers to Pictures

Here is some data your class collected — favourite fruits:

```
Mango: 5, Banana: 3, Orange: 8, Guava: 2
```

Which fruit won? You *can* work it out by reading the numbers... but it takes a moment. Now look at the same data as a **bar chart**:

```
Mango  | █████ 5
Banana | ███ 3
Orange | ████████ 8
Guava  | ██ 2
```

Instantly your eye jumps to **Orange** — the longest bar. That's the whole point of a chart: **a picture lets a human spot the pattern in a heartbeat.**

And the amazing part? Every one of those bars is just **text**. No plotting library, no images — just the block character `█` repeated. Let's learn the trick.

---

## 🟦 Part 2: Your First Bar

You already know a Year 1 superpower: **multiplying a string repeats it.**

```python
print("█" * 5)
```

**Output:**
```
█████
```

That's a bar! The bigger the number, the longer the bar. Try a few:

```python
print("█" * 3)
print("█" * 8)
print("█" * 1)
```

**Output:**
```
███
████████
█
```

> 💡 **Where's the `█` on my keyboard?** It isn't on there! Copy it from the starter code, or use a simpler character like `"*"` or `"#"` — any of these work:
> ```python
> print("*" * 5)   # *****
> print("#" * 5)   # #####
> ```

### The One Rule You Must Never Break

The number you multiply by **must be a whole number** — an `int`. You cannot repeat a string "3.5 times". Keep this in your pocket; it's Common Mistake #1 below.

---

## 🏷️ Part 3: Labelling and Lining Up

A bar with no label is a mystery. Let's add a label and the value:

```python
name = "Orange"
count = 8
print(name, "█" * count, count)
```

**Output:**
```
Orange ████████ 8
```

That works — but when you draw several bars, the labels are different lengths, so the bars start in different places and the chart looks messy. The fix is **f-string padding**, which you'll remember from your f-string week: `f"{name:<10}"` means *"put `name` in a space 10 characters wide, lined up to the **left**"*.

```python
print(f"{'Mango':<10}| here")
print(f"{'Banana':<10}| here")
```

**Output:**
```
Mango     | here
Banana    | here
```

See how the `|` lines up perfectly? Now let's build one tidy bar:

```python
label = "Orange"
value = 8
print(f"{label:<10}| {'█' * value} {value}")
```

**Output:**
```
Orange    | ████████ 8
```

| Piece | What it does |
|---|---|
| `{label:<10}` | the label, padded to 10 wide, lined up left |
| `\| ` | a divider so every bar starts in the same place |
| `{'█' * value}` | the bar itself |
| ` {value}` | the number printed at the end |

---

## 🔁 Part 4: Drawing a Whole Chart

One bar is nice. A whole chart is *magic* — and it's just a **loop over a dict**, exactly like the counting you did in Week 3.

```python
fruits = {"Mango": 5, "Banana": 3, "Orange": 8, "Guava": 2}

for name, count in fruits.items():
    print(f"{name:<8}| {'█' * count} {count}")
```

**Output:**
```
Mango   | █████ 5
Banana  | ███ 3
Orange  | ████████ 8
Guava   | ██ 2
```

Let's trace it slowly so you can see exactly what happens each loop:

| Loop | `name` | `count` | `'█' * count` | Line printed |
|---|---|---|---|---|
| 1 | `Mango` | 5 | `█████` | `Mango   \| █████ 5` |
| 2 | `Banana` | 3 | `███` | `Banana  \| ███ 3` |
| 3 | `Orange` | 8 | `████████` | `Orange  \| ████████ 8` |
| 4 | `Guava` | 2 | `██` | `Guava   \| ██ 2` |

Four lines of data became a four-bar chart with **three lines of code**. That's the power of the loop. 🎉

---

## 📏 Part 5: Scaling — When Numbers Get Huge

Fruits are small numbers. But real data isn't. Imagine video views:

```python
views = {"Mon": 120, "Tue": 340, "Wed": 200, "Thu": 400}
```

If you drew `"█" * 400`, that bar would be **four hundred blocks long** — it would spill off the screen and wrap into an unreadable mess. We need to **scale** it.

**The idea:** let **one block stand for many units.** If 1 block = 100 views, then 400 views is only 4 blocks. Much better.

**How many units per block?** Compute it from the **biggest** value so the longest bar is a sensible length (say, about 20 blocks):

```python
biggest = max(views.values())     # 400
scale = int(round(biggest / 20))  # int(round(20.0)) = 20  → 1 block = 20 views
```

Now the length of each bar is the value **divided by the scale**, rounded to a whole number:

```python
length = int(round(value / scale))
```

> ⚠️ **Why `int(round(...))`?** `value / scale` gives a decimal like `6.0` or `17.0`, and you **cannot** multiply a string by a decimal. `round()` gets you close, and `int()` guarantees a whole number. Skip this and you get a crash — see Common Mistakes.

Putting it together:

```python
views = {"Mon": 120, "Tue": 340, "Wed": 200, "Thu": 400}
scale = int(round(max(views.values()) / 20))

print(f"Video views (1 block = {scale} views)")
for day, value in views.items():
    length = int(round(value / scale))
    print(f"{day:<6}| {'█' * length} {value}")
```

**Output:**
```
Video views (1 block = 20 views)
Mon   | ██████ 120
Tue   | █████████████████ 340
Wed   | ██████████ 200
Thu   | ████████████████████ 400
```

Notice the chart still tells the same story — Thursday won, Monday was quietest — but now it **fits neatly on the screen**, and the title tells the reader what one block is worth. That's a real, honest, scaled chart. 📊

> 💬 **Quick check:** If 1 block = 10 units, how many blocks for a value of **30**? (Answer: `30 / 10 = 3` blocks!)

---

## ⚠️ Common Mistakes (And the Errors They Give You)

**Mistake 1: Multiplying a string by a decimal**

❌ Wrong:
```python
value = 7
scale = 2
print("█" * (value / scale))
```
```
TypeError: can't multiply sequence by non-int of type 'float'
```

🤔 **Why?** `value / scale` is `3.5` — a decimal. Python can repeat a string a whole number of times, but not "3.5 times". Wrap it:

✅ Correct:
```python
value = 7
scale = 2
length = int(round(value / scale))   # 4
print("█" * length)
```
```
████
```

---

**Mistake 2: Forgetting to scale — the overflowing bar**

❌ Wrong:
```python
views = {"Thu": 400}
for day, value in views.items():
    print(f"{day}| {'█' * value}")
```
```
Thu| ████████████████████████████████████████████████ ...
```
The bar runs off the screen and wraps around — impossible to read.

✅ Correct: divide by a scale first so the longest bar is around 20 blocks (see Part 5).

---

**Mistake 3: Labels that don't line up**

❌ Wrong — no padding:
```python
print(f"{'Mango'}| █████")
print(f"{'Banana'}| ███")
```
```
Mango| █████
Banana| ███
```
The bars start in different places — messy and hard to compare.

✅ Correct — pad every label to the same width:
```python
print(f"{'Mango':<8}| █████")
print(f"{'Banana':<8}| ███")
```
```
Mango   | █████
Banana  | ███
```

> **Tip:** make your padding width a little bigger than your **longest** label, or long names will still push the bars out of line.

---

## 📊 Class Activity: Chart Studio

Time to become a chart artist! Open Trinket (`Y2-T7-W4-TextCharts`).

**Level 1 — First Bars (⭐):** Loop over the fruit dict and print one bar per fruit with `"█" * count`.
```python
fruits = {"Mango": 5, "Banana": 3, "Orange": 8, "Guava": 2}
```

**Level 2 — Neat Labels (⭐⭐):** Add f-string padding so labels line up, print the value at the end of each bar, and add a title line.

**Level 3 — Scale It (⭐⭐⭐):** Chart this bigger dataset with **1 block = 10 units**, using `int(round(score / 10))`:
```python
scores = {"Ama": 30, "Kofi": 90, "Zainab": 60}
```
**Expected output:**
```
Ama       | ███ 30
Kofi      | █████████ 90
Zainab    | ██████ 60
```

**💬 Zoom Chat:** If 1 block = 10 units, how many blocks for a value of **30**? Give a **thumbs up** when your chart appears! 👍

---

## 🌟 What's Coming Next Week?

This week your charts were made of **text**. Next week — **Week 5: Turtle Graphics Charts** 🐢 — you'll draw bar charts with real, colourful *rectangles* using Python's turtle. Same data, same idea of scaling to fit... but now with actual shapes instead of block characters. Your data is about to get a serious glow-up! 🎨

---

## 🏆 Today's Achievements

- ✅ You drew a bar from a number with `"█" * value`
- ✅ You labelled bars and lined them up with f-string padding
- ✅ You looped over a dict to draw a whole chart in three lines
- ✅ You **scaled** big numbers so bars fit the screen — using `int(round(...))`
- ✅ You know exactly why `"█" * 3.5` crashes (and how to fix it!)

> *"Look at what you did today — you took cold, silent numbers and made them SPEAK. A person can glance at your chart and understand the whole story in one second. That's not just coding — that's communication. Keep that skill close: in Week 7 your Data Story project will lean on it."*
> — BrightByte 🤖📊

---

## 📚 Homework: Bar Chart Maker

Write a **Bar Chart Maker** in Trinket — a program that takes a dataset and prints a neat, labelled text bar chart.

**Requirements:**
1. Start from a **dict** of `label -> value` (make one up: goals scored, books read, hours of sleep…)
2. Loop over it and draw each bar with `"█" * length`
3. **Align** the labels with f-string padding and print the **value** at the end of each bar
4. **Scale** the chart from the biggest value so bars never overflow
5. Print a title line saying what one block is worth

**Example run:**
```
Books read this term (1 block = 2 books)
Ama       | ████████ 16
Kofi      | █████ 10
Zainab    | ████████████ 24
```

**Challenge tiers:**
- ⭐ A working chart from a small dataset (no scaling needed)
- ⭐⭐ Aligned labels, values at the end, and a title line
- ⭐⭐⭐ Wrap it in a `bar_chart(data, block)` **function** that works out the scale from `max()` automatically

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You turned numbers into a picture today — that's what data visualisation is all about. See you next week for turtle charts! 📊🐢*
