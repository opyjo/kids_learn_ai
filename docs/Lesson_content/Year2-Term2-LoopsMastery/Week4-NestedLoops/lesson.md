---
title: "Nested Loops & Patterns 🔳✨"
description: "Put a loop inside a loop to build grids, star pyramids, times-table tables and colourful kente strips — the same trick that powers game boards"
difficulty: "intermediate"
order_index: 4
course_slug: "year2-term-2-loops-mastery"
is_premium: false
requires_trinket: true
starter_code: |
  # 🔳 Pattern Studio — Nested Loops!
  # A loop INSIDE a loop lets us build ROWS and COLUMNS.

  print("Welcome to Pattern Studio! 🔳✨")

  # Pattern 1: a rectangle of stars — 3 rows, 5 columns
  # (this one is done for you — run it and watch!)
  for row in range(3):
      for col in range(5):
          print("*", end="")   # stay on the same line
      print()                  # <-- ends the row and drops down

  # Pattern 2: a star pyramid — TODO
  # Make it grow: 1 star, then 2, then 3, then 4, then 5
  # Hint: "*" * i  OR  a nested loop

  # Pattern 3: a times-table grid — TODO
  # Print row * col for rows 1..5 and columns 1..5
solution_code: |
  # 🔳 Pattern Studio — completed!

  print("=" * 30)
  print("     PATTERN STUDIO 🔳✨")
  print("=" * 30)

  # Pattern 1: rectangle of stars — 3 rows, 5 columns
  print("\nRectangle:")
  for row in range(3):
      for col in range(5):
          print("*", end="")
      print()

  # Pattern 2: star pyramid — 5 rows (nested-loop version)
  print("\nPyramid:")
  for i in range(1, 6):
      for star in range(i):
          print("*", end="")
      print()

  # Pattern 3: times-table grid — 1 to 5
  print("\nTimes-table grid:")
  for row in range(1, 6):
      for col in range(1, 6):
          print(f"{row * col:4}", end="")
      print()

  print("\nAll patterns drawn! 👍")
class_activities: |
  ## 🎨 Class Activity: Pattern Studio 🔳

  Open your Trinket `Y2-T2-W4-NestedLoops` and build patterns together. Run each one, then give a **thumbs up** in Zoom when your output matches.

  ### Warm-up — Predict the Lines (whole class, Zoom chat)
  Look at this program **without running it**:
  ```python
  for outer in range(4):
      for inner in range(3):
          print("hello")
  ```
  **In the Zoom chat, type your prediction:** how many lines of `hello` will this print? (Hint: the inner loop runs FULLY for every outer step.) Then run it and see who was right!

  ### Station 1 — Star Pyramid (⭐)
  Grow a triangle from 1 star up to 5 stars:
  ```
  *
  **
  ***
  ****
  *****
  ```
  Try it **both ways**: with `"*" * i`, and with a nested loop + `end=""`.

  ### Station 2 — Times-Table Grid (⭐⭐)
  Print a 5×5 multiplication grid using two loops and `end=""`.

  ### Station 3 — Kente Strip (⭐⭐⭐)
  Use a nested loop to print 6 rows of a repeating coloured pattern, e.g. `🟨🟥🟩⬛` repeated across each row.

  ### Bonus
  Combine all three into ONE Pattern Studio program with a title banner. Paste your favourite pattern in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: Pattern Artist 🎨

  Write a **"Pattern Artist"** program in Trinket that draws at least **TWO** different shapes or patterns using **nested loops**.

  **Requirements:**
  1. Use a **nested loop** (a loop inside a loop) for at least one pattern
  2. Draw at least **two** different shapes/patterns (e.g. a rectangle, a pyramid, a grid, or a kente strip)
  3. Print a **title** above each pattern so we know what it is
  4. Use `end=""` and `print()` correctly so your rows line up

  **Example run:**
  ```
  --- Square ---
  ####
  ####
  ####
  ####
  --- Pyramid ---
  *
  **
  ***
  ****
  ```

  **Challenge tiers:**
  - ⭐ Two patterns using nested loops with titles
  - ⭐⭐ Add a times-table grid OR a kente strip using emoji/symbols
  - ⭐⭐⭐ Draw a *hollow* rectangle (stars on the edges, spaces in the middle) using `if` inside your nested loop

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Think: Pictures Are Grids Too!

  Every photo on your phone is really a **grid of tiny coloured squares** called **pixels** — rows and columns, just like the patterns you built today!

  When an AI "looks" at a picture (to spot a cat, or read your handwriting), it walks across that grid the exact same way your nested loop did: **row by row, column by column.**

  **Discuss in the Zoom chat:** a small photo might be 100 pixels wide and 100 pixels tall. Using what you learned today — how many pixels is that in total? (Hint: rows × columns!)

  So the humble nested loop isn't just for stars — it's how computers read *every* image, everywhere. Neat, right?
---

# Year 2, Lesson 4: Nested Loops & Patterns 🔳✨

**Course:** Loops & Logic Mastery
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

- What a **nested loop** is — a loop hiding *inside* another loop
- The golden rule: the **inner loop runs all the way through for every single step** of the outer loop
- How to build **rows and columns**: rectangles, grids, and star **pyramids**
- The `print(..., end="")` trick for staying on the same line — then `print()` to break the line
- Drawing a **times-table grid** and a colourful **kente strip** pattern
- Why nested loops are the secret engine behind **game boards** (hello, Term 2 arcade!)

---

## 🤖 BrightByte Sets the Scene

> *"Last week you mastered `break` and `continue` — you can steer a single loop like a pro. But a game board isn't ONE line, is it? It's rows AND columns. A grid. And to build a grid, you need something new: a loop... inside a loop. It sounds scary. It is not. By the end of today you'll be drawing pyramids, times tables and kente cloth in code. Let's build!"*
> — BrightByte 🤖✨

---

## 🔁 Part 1: A Loop Inside a Loop

You already know how to repeat one line with a loop:

```python
for star in range(5):
    print("*")
```

**Output:**
```
*
*
*
*
*
```

That's a single column. But what if you want a whole **grid** — rows *and* columns? You put one loop **inside** another. We call it a **nested loop**.

```python
for row in range(3):        # the OUTER loop — picks the row
    for col in range(4):    # the INNER loop — fills the columns
        print("Adwoa")
```

Here's the one idea you must remember all lesson:

> **The inner loop runs ALL the way through for EVERY step of the outer loop.**

So the outer loop takes step 1... and the inner loop runs completely (4 times). Then the outer loop takes step 2... and the inner loop runs completely *again* (4 more times). And so on.

That means this prints `Adwoa` a total of **3 × 4 = 12** times! 🤯

### 💬 Zoom Checkpoint

> **How many total lines?** Look at the code below and type your guess in the **Zoom chat** before your teacher runs it:
> ```python
> for outer in range(4):
>     for inner in range(3):
>         print("hi")
> ```
> (Answer: outer × inner = **4 × 3 = 12** lines. The inner loop finishes fully each time!)

| Outer runs | Inner runs (each time) | Total prints |
|---|---|---|
| 2 | 3 | 6 |
| 3 | 4 | 12 |
| 5 | 5 | 25 |
| 10 | 10 | 100 |

---

## ➡️ Part 2: Staying on the Same Line with `end=""`

Right now every `print()` drops down to a new line. But a **row** of a grid needs things printed **side by side**. Meet `end=""`.

Normally `print()` secretly adds a "new line" at the end. `end=""` tells it: *"stop doing that — stay right here."*

```python
print("A", end="")
print("B", end="")
print("C")
```

**Output:**
```
ABC
```

Compare that to the usual behaviour:

```python
print("A")
print("B")
print("C")
```

**Output:**
```
A
B
C
```

| Code | What it does |
|---|---|
| `print("*")` | prints a star, then **drops to a new line** |
| `print("*", end="")` | prints a star, then **stays on the same line** |
| `print()` | prints **nothing** but **ends the current line** |

> 💡 **The pattern-builder's combo:** use `print("*", end="")` inside the inner loop to lay down a row side by side — then a bare `print()` *after* the inner loop to break the line and start the next row. You'll use this combo all day!

---

## 🟦 Part 3: Rectangles and Grids

Let's build a solid rectangle of stars — **3 rows, 5 columns**:

```python
for row in range(3):            # 3 rows
    for col in range(5):        # 5 stars per row
        print("*", end="")      # stay on the line
    print()                     # end the row, drop down
```

**Output:**
```
*****
*****
*****
```

Count them: **5 stars across, 3 rows down.** 👍

Trace it slowly in your head:
- `row = 0` → inner loop prints `*` five times → `*****` → then `print()` breaks the line
- `row = 1` → inner loop prints `*` five times → `*****` → then `print()` breaks the line
- `row = 2` → inner loop prints `*` five times → `*****` → then `print()` breaks the line

See where that bare `print()` sits? **Outside the inner loop, but inside the outer loop.** That's the magic spot.

### 💬 Zoom Checkpoint

> Change `range(5)` to `range(8)` and `range(3)` to `range(2)`. Predict the shape, then run it. **Thumbs up** 👍 in Zoom when you get **2 rows of 8 stars**.

---

## 🔺 Part 4: Star Pyramids — Two Ways

A pyramid is a triangle that **grows** each row: 1 star, then 2, then 3...

```
*
**
***
****
*****
```

### Way 1 — with `"*" * i` (the string trick)

Remember `"=" * 30` from Term 1? The same trick makes a growing triangle in just two lines:

```python
for i in range(1, 6):
    print("*" * i)
```

**Output:**
```
*
**
***
****
*****
```

`range(1, 6)` gives us `i = 1, 2, 3, 4, 5`. So `"*" * i` prints 1 star, then 2, then 3, then 4, then 5. Short and sweet! ✨

### Way 2 — with a nested loop

The nested-loop version does exactly the same thing, but you can *see* every star being placed:

```python
for i in range(1, 6):
    for star in range(i):     # print i stars this row
        print("*", end="")
    print()                   # end the row
```

**Output:**
```
*
**
***
****
*****
```

Notice how the **inner loop's length changes** — `range(i)` — so each row is longer than the last. That's what makes it a triangle instead of a rectangle!

> 🤔 **Which way is better?** For plain stars, `"*" * i` is quicker. But the nested loop is more *powerful* — you can change what goes in each spot (numbers, colours, symbols), which the string trick can't do. You'll need that power for grids and game boards.

---

## 🔢 Part 5: The Multiplication Grid

Here's where nested loops really shine. Instead of a star, let's print `row * col` in each spot — an instant times-table!

```python
for row in range(1, 6):
    for col in range(1, 6):
        print(f"{row * col:4}", end="")
    print()
```

**Output:**
```
   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25
```

What's that `f"{row * col:4}"` doing? It's an **f-string** (from Term 1!) with a width of `4` — it pads each number so the columns line up neatly. The `:4` means *"make this at least 4 characters wide."*

Read across the top row: `1, 2, 3, 4, 5` (that's `1 × 1, 1 × 2, 1 × 3...`). Read down the first column: `1, 2, 3, 4, 5`. Find where row 3 meets column 4 → **12**. It's your times tables, built by a computer! 🤩

---

## 🎨 Part 6: Kente Strips & ASCII Art

Nested loops don't just do stars and numbers — they do **colour and art** too. A **kente strip** is a repeating pattern of coloured blocks, like the beautiful woven cloth of Ghana. We can weave one in code with emoji:

```python
for row in range(6):
    for block in range(3):
        print("🟨🟥🟩⬛", end="")
    print()
```

**Output:**
```
🟨🟥🟩⬛🟨🟥🟩⬛🟨🟥🟩⬛
🟨🟥🟩⬛🟨🟥🟩⬛🟨🟥🟩⬛
🟨🟥🟩⬛🟨🟥🟩⬛🟨🟥🟩⬛
🟨🟥🟩⬛🟨🟥🟩⬛🟨🟥🟩⬛
🟨🟥🟩⬛🟨🟥🟩⬛🟨🟥🟩⬛
🟨🟥🟩⬛🟨🟥🟩⬛🟨🟥🟩⬛
```

Each row repeats the 4-block pattern **3 times** (that's 12 blocks per row), for **6 rows**. Change the symbols, the repeats, or the rows to weave your own design!

You can build ASCII art the same way — here's a checkerboard using `if`/`else` inside the loop:

```python
for row in range(4):
    for col in range(4):
        if (row + col) % 2 == 0:
            print("⬛", end="")
        else:
            print("⬜", end="")
    print()
```

**Output:**
```
⬛⬜⬛⬜
⬜⬛⬜⬛
⬛⬜⬛⬜
⬜⬛⬜⬛
```

That checkerboard is *literally* a game board. Draughts, chess, minesweeper — all grids, all built with nested loops. Keep this in your pocket for the arcade weeks ahead! 🕹️

---

## ⚠️ Common Mistakes (Everyone Hits These!)

**Mistake 1: Forgetting `print()` to end the row**

❌ Wrong — no bare `print()` after the inner loop:
```python
for row in range(3):
    for col in range(5):
        print("*", end="")
```
```
***************
```
😱 All **15 stars** land on one line! Without `print()` to break the line, every row runs into the next.

✅ Correct:
```python
for row in range(3):
    for col in range(5):
        print("*", end="")
    print()
```
```
*****
*****
*****
```

---

**Mistake 2: Wrong indentation (the dreaded IndentationError)**

❌ Wrong — the inner loop isn't indented under the outer one:
```python
for row in range(3):
for col in range(3):
    print("*", end="")
```
```
IndentationError: expected an indented block after 'for' statement on line 1
```

✅ Correct — the inner loop is indented **inside** the outer loop:
```python
for row in range(3):
    for col in range(3):
        print("*", end="")
    print()
```

> Python uses **indentation** to know what's inside what. The inner loop must be indented under the outer loop, and the inner loop's body indented again. Think of it as boxes inside boxes. 📦

---

**Mistake 3: Putting `print()` in the wrong place**

❌ Wrong — the line-break `print()` is *inside* the inner loop:
```python
for row in range(2):
    for col in range(4):
        print("*", end="")
        print()
```
```
*
*
*
*
*
*
*
*
```
😵 Now it breaks the line after *every star*, so you get a thin column instead of rows! The bare `print()` belongs **after** the inner loop, not inside it.

✅ Correct:
```python
for row in range(2):
    for col in range(4):
        print("*", end="")
    print()
```
```
****
****
```

---

## 🎨 Class Activity: Pattern Studio 🔳

Open your Trinket `Y2-T2-W4-NestedLoops`. We'll build three patterns together — run each one and **thumbs up** 👍 in Zoom when your output matches.

1. **Predict the Lines** (whole class): guess how many lines the warm-up nested loop prints, in the Zoom chat, *before* running it.
2. **Station 1 — Star Pyramid (⭐):** grow a triangle from 1 star to 5 — try it both ways (`"*" * i` and a nested loop).
3. **Station 2 — Times-Table Grid (⭐⭐):** print a 5×5 multiplication grid with two loops and `end=""`.
4. **Station 3 — Kente Strip (⭐⭐⭐):** weave 6 rows of a repeating coloured pattern with emoji.

Fast finishers: combine all three into one Pattern Studio program with a title banner, and paste your favourite pattern in the Zoom chat!

---

## 🌟 What's Coming Next Week?

You can now build grids, boards and patterns — the *skeleton* of a game. But a real game needs surprises! Right now your programs do the same thing every time. Boring for a game, right?

**Week 5: Randomness, Lives & Score** 🎲❤️💯 — next week you'll learn how to make Python **roll dice**, pick random numbers, and shuffle things up so no two games are ever the same. We'll add a **score** that goes up, and **lives** that run out. That's when your loops start to feel like *actual* games!

---

## 🏆 Today's Achievements

- ✅ You understand a **nested loop** — a loop inside a loop
- ✅ You know the golden rule: the inner loop runs fully for **every** outer step
- ✅ You can use `print(..., end="")` and a bare `print()` to build rows
- ✅ You built rectangles, star **pyramids** (two ways!), and a times-table grid
- ✅ You wove a **kente strip** and a checkerboard game board
- ✅ You know nested loops power **game grids** — and even how AI reads images!

> *"Look at what you just did — you drew pyramids, tables and kente cloth with nothing but loops inside loops. That checkerboard? That's a game board. You're closer to building your arcade than you think. Same trick, bigger dreams."*
> — BrightByte 🤖✨

---

## 📚 Homework: Pattern Artist 🎨

Write a **"Pattern Artist"** program in Trinket that draws at least **TWO** different shapes or patterns using **nested loops**.

**Requirements:**
1. Use a **nested loop** (a loop inside a loop) for at least one pattern
2. Draw at least **two** different shapes/patterns (rectangle, pyramid, grid, or kente strip)
3. Print a **title** above each pattern so we know what it is
4. Use `end=""` and `print()` correctly so your rows line up

**Challenge tiers:**
- ⭐ Two patterns using nested loops, each with a title
- ⭐⭐ Add a times-table grid OR a kente strip using emoji/symbols
- ⭐⭐⭐ Draw a *hollow* rectangle (stars on the edges, spaces in the middle) using `if` inside your nested loop

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*Loops inside loops, patterns everywhere. Next week, we make them come alive with a roll of the dice. 🎲🔳*
