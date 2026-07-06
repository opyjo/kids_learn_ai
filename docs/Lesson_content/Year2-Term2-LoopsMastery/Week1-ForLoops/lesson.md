---
title: "For Loops Reloaded 🔁"
description: "Kick off Term 2 by mastering the for loop and range() — count up, count down, jump in steps, print times tables and countdowns, and loop over lists"
difficulty: "intermediate"
order_index: 1
course_slug: "year2-term-2-loops-mastery"
is_premium: false
requires_trinket: true
starter_code: |
  # 🔁 For Loops Reloaded — Loop Lab Warm-Up!
  # You met for loops in Year 1 — this term we make them your superpower.

  # Round 1: PREDICT before you run! What will this print?
  for i in range(5):
      print(i)

  # Round 2: Count from 1 to 10 (not 0 to 9!)
  # for i in range(1, 11):
  #     print(i)

  # Round 3: A countdown! Fill in the range to count 3, 2, 1
  # for i in range(?, ?, ?):
  #     print(i)
  # print("Blast off! 🚀")

  # Ready to loop? ▶ Run it!
solution_code: |
  # 🔁 For Loops Reloaded — one possible solution

  # Round 1: prints 0 1 2 3 4 (range stops BEFORE 5)
  for i in range(5):
      print(i)

  # Round 2: count 1 to 10 — start at 1, stop at 11
  for i in range(1, 11):
      print(i)

  # Round 3: countdown with a negative step
  for i in range(3, 0, -1):
      print(i)
  print("Blast off! 🚀")

  # Bonus: a times table for the number 7
  number = 7
  for i in range(1, 13):
      print(number, "x", i, "=", number * i)
class_activities: |
  ## 🎮 Class Activity: Loop Lab 🔬

  Three stations. Each time, **predict the output in the Zoom chat FIRST**, then run it in Trinket and check if you were right. Thumbs up when your prediction matches!

  ### Station 1 — Predict the Range (⭐)
  Before running each line, type in the chat what `list(...)` will show:

  ```python
  print(list(range(4)))
  print(list(range(1, 6)))
  print(list(range(2, 11, 2)))
  ```

  ### Station 2 — Times Table Machine (⭐⭐)
  1. Make a variable `number` and set it to `6`
  2. Use a `for` loop with `range(1, 13)` to print the 6 times table
  3. Each line should look like `6 x 1 = 6`

  ### Station 3 — Countdown Launcher (⭐⭐⭐)
  1. Use `range` with a **negative step** to count `5, 4, 3, 2, 1`
  2. After the loop, print `Blast off! 🚀`

  ### Bonus Lab
  Loop over a list of your three favourite games and print each one with a `🎮` next to it. Paste your favourite output line in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: Times Table Machine 🔢 (or Loop Artist 🎨)

  Build a program in Trinket that puts your new loop powers to work.

  **Times Table Machine (main mission):**
  1. Use `input()` to ask the user for a number
  2. Convert it with `int()`
  3. Use a `for` loop and `range(1, 13)` to print that number's times table, from ×1 to ×12
  4. Add a title line and a border of `=` signs

  **Example run:**
  ```
  Which times table shall I print? 8
  ========================================
  The 8 Times Table
  ========================================
  8 x 1 = 8
  8 x 2 = 16
  ...
  8 x 12 = 96
  ```

  **Challenge tiers:**
  - ⭐ Print any times table from ×1 to ×12 using a loop
  - ⭐⭐ Add a neat title and `=` border, and use an f-string to line the sums up
  - ⭐⭐⭐ Also print a **countdown** (10 down to 1, then "Blast off!") OR make a "Loop Artist" that draws a pattern (e.g. a growing triangle of stars) using a loop

  **Submit:** Save your Trinket as `Y2-T2-W1-ForLoops`, click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Thought: AI Learns in Loops

  Here's a secret about the AI tools you use every day: they learn by **looping**.

  When an AI is trained, a computer loops over huge piles of examples — sometimes **millions of times** — nudging the AI a tiny bit better on each pass. It's the same idea as your `for` loop, just much, much bigger:

  ```python
  for round in range(1000000):
      # AI looks at an example and improves a tiny bit
      pass
  ```

  **Discuss in the Zoom chat:** if a person had to repeat a task a million times, they'd get bored and make mistakes — why is a *loop* perfect for a computer instead? (Hint: computers never get tired!)

  Loops are the heartbeat of both games AND artificial intelligence. You're learning something powerful today.
---

# Year 2, Lesson 1: For Loops Reloaded 🔁

**Course:** Loops & Logic Mastery
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

- What a `for` loop really is — and why it's the **heartbeat of every game**
- How to control `range()` three ways: `range(stop)`, `range(start, stop)`, and `range(start, stop, step)`
- Counting **up**, counting **down** (negative step!), and counting in **jumps** (2s, 5s, 10s)
- Building loop-powered **times tables** and **countdowns**
- Looping over a **list** with `for item in my_list:`

---

## 🤖 BrightByte Kicks Off a New Term!

> *"New term, new mission! Last term you built a Smart Calculator. THIS term? We build an entire Arcade Game Collection — real games, with a menu, that you play on the screen. But here's the thing about EVERY game ever made: it loops. The screen redraws, the enemies move, the score updates — loop, loop, loop, thousands of times a second. If you master loops, you can build anything that moves. So let's reload the most important tool in the box: the for loop."*
> — BrightByte 🤖🔁

---

## 🕹️ Part 1: Term 2 Mission — The Arcade

Every term in Year 2 ends with a big project. Here's where the next 8 weeks take you:

| Week | What You'll Master | Arcade Piece |
|---|---|---|
| 1 | For Loops Reloaded (you are here!) | 🔁 The loop engine |
| 2 | While Loops & Game Loops | ♾️ The game loop |
| 3 | break / continue & loop control | 🎛️ Stopping & skipping |
| 4 | Nested Loops & Patterns | ▦ Grids & graphics |
| 5 | Randomness, Lives & Score | 🎲 Making it a game |
| 6 | Mini-Game Lab | 🎯 Dice Duel + Guess-the-Number |
| 7 | Arcade Game Collection | 🕹️ Three games, one menu |
| 8 | Arcade Showcase | 🏆 **Python Pro Badge!** |

> **The prize:** finish Week 8 and you earn the **Python Pro Badge** — proof you can build real, looping, interactive programs.

And it all starts with today's tool: the humble, mighty `for` loop.

---

## 🔁 Part 2: What Is a For Loop, Again?

A **for loop** repeats a block of code a set number of times, so you don't have to copy-paste. Remember this from Year 1?

```python
for i in range(3):
    print("Let's go! 🚀")
```

**Output:**
```
Let's go! 🚀
Let's go! 🚀
Let's go! 🚀
```

Three lines of output from two lines of code. Now imagine printing "Let's go!" a hundred times — the loop does it just by changing `3` to `100`. **That's the magic: the code stays the same, only the number grows.**

### Anatomy of a Loop

```python
for i in range(3):
    print(i)
```

| Piece | What It Means |
|---|---|
| `for` | "Repeat the following..." |
| `i` | The **loop variable** — a box that holds a new value each time round |
| `range(3)` | The list of values `i` will take: `0, 1, 2` |
| `:` | Start of the loop — don't forget it! |
| indented line | The code that repeats (the **body**) |

> 🔑 **The loop variable counts for you.** On the first pass `i` is `0`, then `1`, then `2`. The computer keeps track — you don't have to.

---

## 🎚️ Part 3: Taking Control of range()

`range()` is the engine that decides **which numbers** your loop counts through. It has three settings.

### Setting 1 — `range(stop)`: start at 0

```python
for i in range(5):
    print(i)
```

**Output:**
```
0
1
2
3
4
```

> ⚠️ **The golden rule of range:** it **stops BEFORE the stop number**. `range(5)` gives you five numbers — but they're `0, 1, 2, 3, 4`. No `5`!

### Setting 2 — `range(start, stop)`: choose where to begin

```python
for i in range(1, 6):
    print(i)
```

**Output:**
```
1
2
3
4
5
```

Now we start at `1` and stop **before** `6`. This is how you count `1` to `5` like a human, not `0` to `4` like a computer.

### Setting 3 — `range(start, stop, step)`: choose the jump size

The third number is the **step** — how big each jump is.

```python
for i in range(2, 11, 2):
    print(i)
```

**Output:**
```
2
4
6
8
10
```

Counting in **2s**! Change the step to `5` or `10` to jump further:

```python
for i in range(0, 50, 10):
    print(i)
```

**Output:**
```
0
10
20
30
40
```

### The range() Cheat Sheet

| Code | Numbers it produces |
|---|---|
| `range(4)` | `0, 1, 2, 3` |
| `range(1, 6)` | `1, 2, 3, 4, 5` |
| `range(2, 11, 2)` | `2, 4, 6, 8, 10` |
| `range(5, 51, 5)` | `5, 10, 15, ... , 50` |
| `range(10, 0, -1)` | `10, 9, 8, ... , 1` |

> 💡 **See it as a list.** Wrap any range in `list()` to peek inside: `print(list(range(1, 6)))` shows `[1, 2, 3, 4, 5]`. Great for checking your prediction!

---

## 🚀 Part 4: Counting DOWN with a Negative Step

Games love countdowns — "3, 2, 1, GO!". To count backwards, make the step **negative**:

```python
for i in range(3, 0, -1):
    print(i)
print("Blast off! 🚀")
```

**Output:**
```
3
2
1
Blast off! 🚀
```

Read it carefully:
- **start** at `3`
- **stop** before `0` (so `0` is NOT printed — it stops at `1`)
- **step** of `-1` means "go down by one each time"

Want a longer countdown? Start higher:

```python
for i in range(10, 0, -1):
    print(i)
print("LIFT OFF! 🚀")
```

This counts `10, 9, 8, 7, 6, 5, 4, 3, 2, 1` and then blasts off.

> 🔑 **Backwards needs a negative step.** Without the `-1`, `range(3, 0)` produces *nothing at all* — because you can't count up from 3 to 0!

---

## 🔢 Part 5: Loop-Powered Times Tables

Here's where loops start to feel powerful. Want the 7 times table? Don't type twelve lines — loop it:

```python
number = 7
for i in range(1, 13):
    print(number, "x", i, "=", number * i)
```

**Output:**
```
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
7 x 11 = 77
7 x 12 = 84
```

Trace it: on each pass, `i` climbs from `1` to `12`, and `number * i` does the maths. `range(1, 13)` gives us exactly `1` through `12` (remember — it stops *before* `13`).

> 💅 **Make it pretty with an f-string** (from last term):
> ```python
> number = 7
> print("=" * 40)
> print(f"The {number} Times Table")
> print("=" * 40)
> for i in range(1, 13):
>     print(f"{number} x {i} = {number * i}")
> ```

---

## 🎨 Part 6: Repeated Patterns with print()

Because the loop variable changes each time, you can build patterns that grow:

```python
for i in range(1, 6):
    print("⭐" * i)
```

**Output:**
```
⭐
⭐⭐
⭐⭐⭐
⭐⭐⭐⭐
⭐⭐⭐⭐⭐
```

On pass 1, `i` is `1`, so `"⭐" * 1` is one star. By pass 5, `i` is `5` — five stars! You've drawn a triangle with three lines of code. (In Week 4 we'll take patterns MUCH further with nested loops.)

---

## 📋 Part 7: Looping Over a List

You don't only have to loop over numbers. You can loop straight over the **items in a list**:

```python
games = ["Dice Duel", "Guess the Number", "Star Catcher"]
for game in games:
    print("🎮", game)
```

**Output:**
```
🎮 Dice Duel
🎮 Guess the Number
🎮 Star Catcher
```

Notice there's **no `range()`** here. The loop variable `game` becomes each item in turn — first `"Dice Duel"`, then `"Guess the Number"`, then `"Star Catcher"`. This is the cleanest way to go through a list.

| Loop style | When to use it |
|---|---|
| `for i in range(...)` | When you need to **count** (times tables, countdowns, repeat N times) |
| `for item in my_list:` | When you want to **visit every item** in a list |

> 🔑 **Pick a good loop-variable name.** `for game in games:` reads like English. `for x in games:` works too, but a clear name makes your code tell a story.

---

## ⚠️ Common Mistakes

**Mistake 1: Forgetting range() stops early**

❌ Expecting `1` to `10`:
```python
for i in range(1, 10):
    print(i)
```
```
1
2
3
4
5
6
7
8
9
```
Only goes to **9**! To include `10`, stop at `11`:

✅ Correct:
```python
for i in range(1, 11):
    print(i)
```

---

**Mistake 2: Missing the colon**

❌ Wrong:
```python
for i in range(5)
    print(i)
```
```
SyntaxError: expected ':'
```

✅ Correct — every `for` line ends in a colon:
```python
for i in range(5):
    print(i)
```

---

**Mistake 3: Counting down without a negative step**

❌ Nothing happens:
```python
for i in range(5, 0):
    print(i)
```
```
(no output at all!)
```
You asked to count UP from 5 to 0 — impossible, so the loop runs **zero times**.

✅ Correct — add the `-1` step:
```python
for i in range(5, 0, -1):
    print(i)
```
```
5
4
3
2
1
```

---

**Mistake 4: Forgetting to indent the body**

❌ Wrong:
```python
for i in range(3):
print("Hi")
```
```
IndentationError: expected an indented block after 'for' statement
```

✅ Correct — the repeated code must be indented:
```python
for i in range(3):
    print("Hi")
```

---

## 🎮 Class Activity: Loop Lab 🔬

Three stations. Each time, **predict the output in the Zoom chat FIRST**, then run it in Trinket and check. Thumbs up when your prediction matches!

### Station 1 — Predict the Range (⭐)
Type your prediction in the chat, THEN run:
```python
print(list(range(4)))
print(list(range(1, 6)))
print(list(range(2, 11, 2)))
```

### Station 2 — Times Table Machine (⭐⭐)
1. Make a variable `number` set to `6`
2. Loop with `range(1, 13)` to print the 6 times table
3. Each line should look like `6 x 1 = 6`

### Station 3 — Countdown Launcher (⭐⭐⭐)
1. Use a **negative step** to count `5, 4, 3, 2, 1`
2. After the loop, print `Blast off! 🚀`

### Bonus Lab
Loop over a list of your three favourite games and print each with a `🎮`. Paste your best output line in the Zoom chat!

---

## 🌟 What's Coming Next Week?

**Week 2: While Loops & Game Loops ♾️**

A `for` loop is brilliant when you know *how many times* to repeat. But what about a game that keeps going **until the player quits**? You don't know how many turns that is! Next week you meet the **`while` loop** — the loop that runs "as long as something is true" — and you'll build your first real **game loop**, the engine that keeps a game alive.

```python
running = True
while running:
    # this is how EVERY game keeps going...
    pass
```

The heartbeat of the arcade starts next week. 🫀

---

## 🏆 Today's Achievements

- ✅ You can explain what a `for` loop does and name every part of it
- ✅ You control `range()` three ways — `stop`, `start/stop`, and `start/stop/step`
- ✅ You count **up**, **down** (negative step!), and in **jumps** of 2s, 5s and 10s
- ✅ You built a loop-powered **times table** and a **countdown**
- ✅ You looped straight over a **list** with `for item in my_list:`

> *"Look at you — one lesson in and you're already making the computer count, chant, and blast off on command. Loops are the muscle behind every game you'll build this term. Reloaded and ready. Now go loop something amazing!"*
> — BrightByte 🤖🔁

---

## 📚 Homework: Times Table Machine 🔢 (or Loop Artist 🎨)

Build a program in Trinket that puts your loop powers to work.

**Times Table Machine (main mission):**
1. Use `input()` to ask the user for a number
2. Convert it with `int()`
3. Use a `for` loop with `range(1, 13)` to print that number's table, ×1 to ×12
4. Add a title line and a border of `=` signs

**Example run:**
```
Which times table shall I print? 8
========================================
The 8 Times Table
========================================
8 x 1 = 8
8 x 2 = 16
...
8 x 12 = 96
```

**Challenge tiers:**
- ⭐ Print any times table from ×1 to ×12 using a loop
- ⭐⭐ Add a neat title and `=` border, and use an f-string to line the sums up
- ⭐⭐⭐ Also print a **countdown** (10 down to 1, then "Blast off!") OR make a **Loop Artist** that draws a growing pattern of stars using a loop

**Submit:** Save your Trinket as `Y2-T2-W1-ForLoops`, click **Share**, copy the link, and paste it wherever your teacher asks.

---

*Loops are the heartbeat of every game. This term, you build the arcade — and it all beats to a loop. See you next week! 🔁🕹️*
