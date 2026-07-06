---
title: "Scope & Function Design 🔍🏗️"
description: "Discover where variables live and die (local vs global), learn the golden rules of good function design, and refactor a messy program into tidy, well-named functions"
difficulty: "intermediate"
order_index: 4
course_slug: "year2-term-3-functions"
is_premium: false
requires_trinket: true
starter_code: |
  # 🔍 Scope & Function Design — Detective Kit
  # Run each block, then predict what happens BEFORE you press Run again!

  # ---- Clue 1: a variable born inside a function ----
  def make_potion():
      potion = "🧪 green goo"   # potion is LOCAL — it lives inside make_potion
      print("Inside the function:", potion)

  make_potion()
  # print(potion)   # ← remove the # and run. What happens? 🤔

  # ---- Clue 2: a variable born at the top ----
  hero = "Ada"   # hero is GLOBAL — it lives at the top level

  def greet_hero():
      print("Welcome, brave", hero)   # can we READ hero in here?

  greet_hero()

  # ---- Your mission below: tidy up this messy blob into functions! ----
  print("=" * 30)
  print("THE CAVE")
  print("It is dark and cold.")
  print("=" * 30)
  print("=" * 30)
  print("THE MEADOW")
  print("Flowers everywhere!")
  print("=" * 30)
solution_code: |
  # 🔍 Scope & Function Design — Worked Solution

  # ---- Clue 1: LOCAL variable ----
  def make_potion():
      potion = "🧪 green goo"      # local to make_potion
      print("Inside the function:", potion)

  make_potion()
  # print(potion)  # would CRASH: NameError — potion does not exist out here

  # ---- Clue 2: GLOBAL variable (readable inside) ----
  hero = "Ada"

  def greet_hero():
      print("Welcome, brave", hero)  # reading a global is fine

  greet_hero()

  # ---- Tidy-up: one job per function, clear verb names ----
  def draw_line():
      print("=" * 30)

  def show_scene(title, description):
      draw_line()
      print(title)
      print(description)
      draw_line()

  show_scene("THE CAVE", "It is dark and cold.")
  show_scene("THE MEADOW", "Flowers everywhere!")
class_activities: |
  ## 🕵️ Class Activity: Local vs Global Detective

  Two rounds. First you PREDICT (in the Zoom chat), then we run the code together and see who cracked the case!

  ### Round 1 — Where Does It Live? (⭐⭐)
  Your teacher shares this code:

  ```python
  title = "Dragon Quest"        # A

  def start_game():
      lives = 3                 # B
      print(title, "- Lives:", lives)

  start_game()
  print(lives)                  # C
  ```

  **In the Zoom chat, answer three things:**
  1. Is `title` (A) local or global?
  2. Is `lives` (B) local or global?
  3. Line C — does it print `3`, or does it CRASH? 💥

  ### Round 2 — The Tidy-Up Challenge (⭐⭐⭐)
  Your teacher shares a messy blob of repeated code. As a class, redesign it into **exactly 3 well-named functions** — each doing ONE job. Shout your function names in the chat (remember: verbs like `draw_line`, `show_score`, `ask_name`).

  ### Detective Badge
  Finished early? Add a `global` keyword to make a score counter that actually sticks — then explain in the chat why passing the score in and returning it is the *tidier* way. 🎖️
take_home_assignment: |
  ## 📚 Homework: The Great Tidy-Up 🧹

  You've been handed a working but MESSY program. It runs fine — but it repeats itself over and over and is painful to change. Your job: **refactor** it into clean, well-named functions.

  **The messy program (copy this into Trinket):**
  ```python
  print("*" * 25)
  print("KOFI THE KNIGHT")
  print("Health: 100")
  print("Gold: 50")
  print("*" * 25)
  print("*" * 25)
  print("AMA THE ARCHER")
  print("Health: 80")
  print("Gold: 75")
  print("*" * 25)
  print("*" * 25)
  print("ZARA THE WIZARD")
  print("Health: 60")
  print("Gold: 120")
  print("*" * 25)
  ```

  **Requirements:**
  1. Write a function `draw_border()` that prints the line of `*`
  2. Write a function `show_hero(name, health, gold)` that draws a border, prints the three lines, then draws a border again
  3. Replace the whole messy blob with **three tidy calls** to `show_hero(...)`
  4. Your final program must produce the **same output** as the messy one

  **Challenge tiers:**
  - ⭐ Working `show_hero` function called three times
  - ⭐⭐ Add a 4th hero of your own invention
  - ⭐⭐⭐ Add a `strongest` global variable that your program updates to remember which hero had the most gold, then print it at the end

  **Submit:** Save your Trinket (`Y2-T3-W4-Scope`), click **Share**, copy the link, and paste it where your teacher asks.
ai_activities: |
  ## 🤖 Quick Chat: How Big AI Teams Stay Tidy

  The AI tools you use every day are built from MILLIONS of lines of code — written by hundreds of programmers who have never met.

  How is that even possible without total chaos? **Good function design.** Every job gets its own clearly-named function (`clean_text`, `check_answer`, `save_reply`), so one programmer can work on `clean_text` while another works on `save_reply` — and neither breaks the other's work.

  **Discuss in the Zoom chat:** if you and a friend were building a game together, which parts would you split into separate functions so you could each work on your own bit? 🧩
---

# Year 2, Lesson 4: Scope & Function Design 🔍🏗️

**Course:** Functions
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

- **Scope:** where a variable lives — and where it *doesn't* exist
- **Local variables:** made inside a function, they vanish the moment the function ends
- **Global variables:** made at the top, readable everywhere — and the `global` keyword for changing them
- Why the *tidiest* style is to **pass values in** and **return results out**
- The golden rules of **good function design:** one job, clear verb names, short and focused
- **Refactoring:** turning a messy, repetitive program into clean functions

---

## 🤖 BrightByte Sets the Scene

> *"Last week you built functions that hand back answers with `return`. Powerful stuff! But here's a mystery that trips up EVERYONE: a variable you make inside a function... disappears the second the function ends. Poof! 💨 Where did it go? Today you become a variable detective — you'll learn exactly where every variable lives, where it dies, and how to design functions so clean that a whole team could build a game together. This is the secret sauce behind your Text Adventure engine. Grab your magnifying glass!"*
> — BrightByte 🤖🔍

---

## 🏠 Part 1: Every Variable Has a Home (Scope)

**Scope** is a fancy word for a simple idea: *where a variable can be seen*.

Think of a function as a room with a door. A variable made **inside** the room can only be seen inside that room. Once the function ends, the room is cleared out — everything inside is gone.

Let's prove it:

```python
def make_potion():
    potion = "🧪 green goo"   # potion is born INSIDE the function
    print("Inside the function:", potion)

make_potion()
print(potion)               # try to peek at it from OUTSIDE
```

**Output:**
```
Inside the function: 🧪 green goo
NameError: name 'potion' is not defined
```

💥 **Crash!** The first line worked — inside the function, `potion` exists. But the moment the function ended, `potion` was cleared away. Out here, Python has never heard of it, so it complains:

> `NameError: name 'potion' is not defined`

A variable made inside a function is called a **local variable**. It is *local* to that function — it belongs to that room and nowhere else.

> 💡 **Detective's note:** A `NameError` almost always means "you asked for a variable that doesn't exist *here*." Nine times out of ten, it's a scope problem!

---

## 🌍 Part 2: Global Variables — The Ones Everyone Can See

A variable made at the **top level** of your program — not inside any function — is called a **global variable**. Functions can *read* globals happily:

```python
hero = "Ada"   # global — made at the top level

def greet_hero():
    print("Welcome, brave", hero)   # reading the global — no problem!

greet_hero()
```

**Output:**
```
Welcome, brave Ada
```

The function `greet_hero` never made its own `hero`, so Python looked *outside* the room and found the global one. Reading globals works fine.

### The Trap: Changing a Global From Inside

Here's where nearly everyone gets caught. Watch closely:

```python
score = 0

def reset_score():
    score = 100      # looks like it changes the global... but does it?

reset_score()
print(score)
```

**Output:**
```
0
```

🤔 **Wait — it's still 0?!** When you *assign* to a variable inside a function, Python makes a brand-new **local** variable with that name. So `score = 100` created a local `score` that vanished when the function ended. The global `score` was never touched. **The change didn't stick.**

### The `global` Keyword (Use Sparingly!)

To *really* change the global, you must tell Python: "I mean the global one!" using the `global` keyword:

```python
score = 0

def reset_score():
    global score     # "when I say score, I mean the global one"
    score = 100

reset_score()
print(score)
```

**Output:**
```
100
```

Now it sticks. But hold on...

### The Tidier Way: Pass In, Return Out ✨

Most experienced programmers **avoid** `global` when they can. Why? Because a global that any function can change becomes hard to track — you can't tell *where* it changed. The cleaner style is to **pass the value in** as a parameter and **return the new value**:

```python
def add_point(score):      # score comes IN as a parameter
    return score + 1       # the new value goes OUT via return

score = 0
score = add_point(score)   # catch the returned value
score = add_point(score)
print(score)
```

**Output:**
```
2
```

No `global` needed, and you can see *exactly* where `score` changes — right there on the line that says `score = add_point(score)`. This is the style we'll use in our Text Adventure.

| | Local variable | Global variable |
|---|---|---|
| Made where? | Inside a function | At the top level |
| Seen where? | Only inside that function | Everywhere (readable) |
| Lives how long? | Until the function ends | The whole program |
| Change from inside a function? | Yes, it's already yours | Only with the `global` keyword |
| Tidy? | ✅ Yes — keep work private | ⚠️ Prefer passing in & returning |

---

## 🏗️ Part 3: What Makes a GOOD Function?

You can *write* functions now. This week you learn to write **good** ones. Here are the golden rules:

### Rule 1: One Job Per Function 🎯
A function should do **one clear thing**. If you find yourself saying "it does this *and* this *and* this," it's probably two or three functions in a trench coat.

### Rule 2: Clear Names — Use Verbs 🏷️
A function *does* something, so its name should start with a **verb** (a doing word). Reading the name should tell you exactly what it does — no guessing.

| ❌ Vague name | ✅ Clear name | What it does |
|---|---|---|
| `stuff()` | `draw_line()` | Prints a divider line |
| `thing(x)` | `get_score(answers)` | Works out and returns a score |
| `check(n)` | `is_valid(age)` | Returns `True` or `False` |

> 💡 Functions that answer a yes/no question often start with `is_` or `has_` — like `is_valid` or `has_key`. Reading `if is_valid(age):` sounds almost like English!

### Rule 3: Short and Focused 📏
If a function is 40 lines long, it's doing too much. Break it into smaller helpers. Short functions are easier to read, test, and fix.

Here's the same idea, badly and well:

❌ **One giant do-everything function:**
```python
def game():
    print("=" * 20)
    print("Welcome!")
    print("=" * 20)
    name = "Chidi"
    print("Hello", name)
    print("=" * 20)
    print("Goodbye!")
    print("=" * 20)
```

✅ **Small functions, each with one job:**
```python
def draw_line():
    print("=" * 20)

def welcome():
    draw_line()
    print("Welcome!")
    draw_line()

def farewell(name):
    print("Goodbye,", name)
```

The second version reads like a to-do list. You can *see* what each piece does.

---

## 🧹 Part 4: Refactoring — Cleaning Up Messy Code

**Refactoring** means improving the *structure* of code without changing what it *does*. The output stays the same; the code just gets tidier.

Look at this messy Text Adventure. It works — but it repeats itself horribly:

```python
print("=" * 30)
print("THE CAVE")
print("It is dark and cold.")
print("=" * 30)
print("=" * 30)
print("THE MEADOW")
print("Flowers everywhere!")
print("=" * 30)
print("=" * 30)
print("THE RIVER")
print("The water rushes past.")
print("=" * 30)
```

**Output:**
```
==============================
THE CAVE
It is dark and cold.
==============================
==============================
THE MEADOW
Flowers everywhere!
==============================
==============================
THE RIVER
The water rushes past.
==============================
```

Every scene copies the same pattern. If you wanted to change the divider from `=` to `*`, you'd have to edit it **six times** — and probably miss one!

### Step 1: Spot the repeated job
Every scene: draw a line, print a title, print a description, draw a line. That's a pattern begging to be a function.

### Step 2: Write tidy functions
```python
def draw_line():
    print("=" * 30)

def show_scene(title, description):
    draw_line()
    print(title)
    print(description)
    draw_line()
```

### Step 3: Replace the blob with clean calls
```python
show_scene("THE CAVE", "It is dark and cold.")
show_scene("THE MEADOW", "Flowers everywhere!")
show_scene("THE RIVER", "The water rushes past.")
```

**Same output — but now:**
- ✅ Three clear lines instead of twelve messy ones
- ✅ Change the divider in **one place** and every scene updates
- ✅ Adding a new scene is a single line

> *"THAT is the magic. Twelve confusing lines became three that read like plain English. Future-you — building an adventure with twenty scenes — just saved hours. Refactoring isn't extra work; it's a gift to yourself."*
> — BrightByte 🤖

---

## 🕵️ Class Activity: Local vs Global Detective

Two rounds. First **predict** in the Zoom chat, then we run it together!

### Round 1 — Where Does It Live? (⭐⭐)

```python
title = "Dragon Quest"        # A

def start_game():
    lives = 3                 # B
    print(title, "- Lives:", lives)

start_game()
print(lives)                  # C
```

**In the Zoom chat:**
1. Is `title` (A) **local** or **global**?
2. Is `lives` (B) **local** or **global**?
3. Line C — does it print `3`, or does it **crash**? 💥

<details>
<summary>🔎 The answer (don't peek until you've guessed!)</summary>

1. `title` is **global** (made at the top level).
2. `lives` is **local** (made inside `start_game`).
3. Line C **crashes** with `NameError: name 'lives' is not defined` — `lives` died when the function ended!

</details>

### Round 2 — The Tidy-Up Challenge (⭐⭐⭐)
Your teacher shares a messy, repetitive blob. As a class, redesign it into **exactly 3 well-named functions**, each doing ONE job. Shout your function names (verbs!) in the chat. 👍

---

## ⚠️ Common Mistakes

**Mistake 1: Using a local variable outside its function**

❌ Wrong:
```python
def roll_dice():
    result = 6

roll_dice()
print(result)
```
```
NameError: name 'result' is not defined
```

✅ Correct — **return** it so you can use it outside:
```python
def roll_dice():
    result = 6
    return result

value = roll_dice()
print(value)
```
```
6
```

---

**Mistake 2: Expecting a global to change without `global` (the value doesn't stick!)**

❌ Wrong — you *think* you're changing `coins`, but you're not:
```python
coins = 10

def spend_all():
    coins = 0      # makes a LOCAL coins — the global is untouched

spend_all()
print(coins)
```
```
10
```

😲 Still 10! The tidiest fix is to pass in and return:

✅ Correct:
```python
def spend_all(coins):
    return 0

coins = 10
coins = spend_all(coins)
print(coins)
```
```
0
```

---

**Mistake 3: The giant do-everything function**

❌ Wrong — one function trying to do the whole game:
```python
def do_everything():
    print("=" * 20)
    print("Welcome!")
    name = input("Name? ")
    print("Hello", name)
    score = 0
    score = score + 10
    print("Score:", score)
    print("Goodbye!")
    print("=" * 20)
```

✅ Better — split into focused functions with clear names:
```python
def draw_line():
    print("=" * 20)

def get_name():
    return input("Name? ")

def show_score(score):
    print("Score:", score)
```

> **The rule of thumb:** if you can't describe what a function does in one short sentence *without saying "and"*, it's doing too much.

---

## 🌟 What's Coming Next Week?

**Week 5: Functions Working Together! 🔗**

You've got tidy, well-named functions. Next week they team up — one function *calls* another, results flow from one to the next, and you'll build a mini program where several functions cooperate like a relay race. This is the exact skill that turns a pile of scenes into a real **Text Adventure engine**. The pieces are about to click together!

---

## 🏆 Today's Achievements

- ✅ You learned **scope** — where every variable lives and dies
- ✅ You saw a **local** variable crash with `NameError` when used outside
- ✅ You can **read** globals inside functions, and change them with `global`
- ✅ You know the *tidier* way: **pass in, return out**
- ✅ You learned the golden rules of **good function design**: one job, verb names, short
- ✅ You **refactored** a messy program into clean functions

> *"You're not just writing code that works anymore — you're writing code that's *clean*. That's the leap from beginner to real programmer. Your future Text Adventure, with all its scenes and its shared inventory, is going to be beautifully organised. I'm proud of you, detective."*
> — BrightByte 🤖🔍

---

## 📚 Homework: The Great Tidy-Up 🧹

You've been handed a working but MESSY program. It runs fine — but it repeats itself and is painful to change. **Refactor** it into clean, well-named functions.

**The messy program (copy into Trinket):**
```python
print("*" * 25)
print("KOFI THE KNIGHT")
print("Health: 100")
print("Gold: 50")
print("*" * 25)
print("*" * 25)
print("AMA THE ARCHER")
print("Health: 80")
print("Gold: 75")
print("*" * 25)
print("*" * 25)
print("ZARA THE WIZARD")
print("Health: 60")
print("Gold: 120")
print("*" * 25)
```

**Requirements:**
1. Write a function `draw_border()` that prints the line of `*`
2. Write a function `show_hero(name, health, gold)` that draws a border, prints the three lines, then draws a border again
3. Replace the whole messy blob with **three tidy calls** to `show_hero(...)`
4. Your final program must produce the **same output** as the messy one

**Challenge tiers:**
- ⭐ Working `show_hero` function called three times
- ⭐⭐ Add a 4th hero of your own invention
- ⭐⭐⭐ Add a `strongest` global variable that remembers which hero had the most gold, then print it at the end

**Submit:** Save your Trinket (`Y2-T3-W4-Scope`), click **Share**, copy the link, and paste it where your teacher asks.

---

*Case closed, detective. You now know where every variable hides — and how to keep your code spotless. See you next week when your functions start working together! 🔍🏗️*
