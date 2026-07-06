---
title: "What Is a Function? 🧩🐍"
description: "Meet user-defined functions — named, reusable chunks of code. Learn to define functions with def, call them again and again, and discover why 'define before you call' matters."
difficulty: "intermediate"
order_index: 1
course_slug: "year2-term-3-functions"
is_premium: false
requires_trinket: true
starter_code: |
  # 🧩 Function Factory — Warm-Up
  # This program repeats the SAME three lines twice. Yuck!
  # Your job today: turn the repeated block into a function.

  print("*" * 20)
  print("   WELCOME! 🎉")
  print("*" * 20)

  print("Here is your menu...")

  print("*" * 20)
  print("   WELCOME! 🎉")
  print("*" * 20)

  # By the end of the lesson you'll replace the copy-paste
  # with ONE function you can call whenever you like!
solution_code: |
  # 🧩 Function Factory — one possible solution

  # 1. DEFINE the function once (the recipe)
  def welcome_banner():
      print("*" * 20)
      print("   WELCOME! 🎉")
      print("*" * 20)

  # 2. CALL it whenever you need it
  welcome_banner()

  print("Here is your menu...")

  welcome_banner()

  # Bonus: call it three times in a loop
  for i in range(3):
      welcome_banner()
class_activities: |
  ## 🎮 Class Activity: The Function Factory 🧩

  Take a block of repeated code and "factory-pack" it into ONE function — then call it again and again.

  ### Step 1 — Spot the Repeat (⭐)
  Look at the starter code. The same three `print()` lines appear **twice**. Point it out in the Zoom chat: how many lines are copy-pasted?

  ### Step 2 — Build the Function (⭐⭐)
  1. Write `def welcome_banner():`
  2. Indent the three repeated lines underneath it
  3. Run the program — **nothing prints yet!** Why? (Post your guess in chat.)

  ### Step 3 — Call It 3 Times (⭐⭐⭐)
  1. Below your function, write `welcome_banner()` three times
  2. Run it and count the banners in the output
  3. Now put the call inside `for i in range(3):` instead — same result, less typing!

  ### 💬 Zoom-Chat Challenge
  > If a function `greet()` just does `print("Hi!")`, what does calling `greet()` **twice** print?
  > Type your answer in the chat BEFORE you run it, then check!
take_home_assignment: |
  ## 📚 Homework: My Toolbox 🧰

  Build a **"My Toolbox"** program in Trinket that is made entirely of functions YOU define and then call.

  **Requirements:**
  1. Define **at least 3 functions**, each with no parameters — for example:
     - `print_header()` — prints a title inside a border
     - `tell_joke()` — prints a two-line joke
     - `draw_border()` — prints a line of symbols
  2. Every function name must end with `()` and describe **what it does**
  3. **Call** each of your functions at least once
  4. Call **one** of your functions **more than once** (or inside a loop)

  **Example run:**
  ```
  ==============================
          MY TOOLBOX 🧰
  ==============================
  Why did the programmer quit?
  Because they didn't get arrays! 😄
  ------------------------------
  ------------------------------
  ```

  **Challenge tiers:**
  - ⭐ 3 functions, each defined and called once
  - ⭐⭐ 4+ functions, and one called several times inside a loop
  - ⭐⭐⭐ Make one function CALL another function inside its body (functions using functions!)

  **Trinket:** Start from the class link, name it `Y2-T3-W1-Functions`.

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Thought: AI Is Built From Tiny Functions

  The huge AI systems you use — chatbots, image makers, translators — are **not** one giant blob of code. They are built from **thousands of small functions**, each doing one tiny job:

  - one function cleans up the text you typed
  - one function breaks it into pieces
  - one function picks the next word
  - one function checks the reply is safe

  Each function has a clear name and one job — exactly like the `welcome_banner()` you built today.

  **Think about it:** if you were building a chatbot, what is ONE small job you'd want a single function to handle? Drop your idea in the Zoom chat! 💡
---

# Year 2, Lesson 1: What Is a Function? 🧩🐍

**Course:** Functions
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

- What a **function** really is: a named, reusable chunk of code — a recipe you can run whenever you like
- How to **define** a function with `def` and an indented body
- How to **call** a function so it actually runs — including calling it many times
- Why we use functions: to avoid **repeating** code, to **organise**, and to **name** a chunk by what it does
- The golden rule: **define before you call**
- The plan for this term's big project — a **Text Adventure Engine** where every scene is a function!

---

## 🤖 BrightByte Kicks Off Term 3!

> *"New term, new superpower! So far you've told the computer WHAT to do, line by line, top to bottom. Today you learn to build your own COMMANDS. You'll bundle up a chunk of code, give it a name, and then run it whenever you like — once, twice, a hundred times — just by saying its name. Programmers call these bundles FUNCTIONS, and honestly? They change everything. Let's build your first one."*
> — BrightByte 🤖🧩

---

## 🧩 Part 1: The Problem With Copy-Paste

Look at this program. It prints a fancy welcome banner, then a menu, then the banner again:

```python
print("*" * 20)
print("   WELCOME! 🎉")
print("*" * 20)

print("Here is your menu...")

print("*" * 20)
print("   WELCOME! 🎉")
print("*" * 20)
```

**Output:**
```
********************
   WELCOME! 🎉
********************
Here is your menu...
********************
   WELCOME! 🎉
********************
```

It works... but look how much is **copy-pasted**. The same three lines appear twice. Now imagine you want the banner in **ten** places. Or imagine you decide to change `WELCOME!` to `HELLO!` — you'd have to fix it in every single copy and hope you don't miss one. 😩

Programmers have a rule about this: **DRY — Don't Repeat Yourself.** When you catch yourself copy-pasting a block of code, that's a signal: *this should be a function.*

> **A function is a way to write a chunk of code ONCE, give it a name, and reuse it as many times as you like.**

---

## 🛠️ Part 2: Defining Your First Function

Here's how you turn that repeated banner into a function:

```python
def welcome_banner():
    print("*" * 20)
    print("   WELCOME! 🎉")
    print("*" * 20)
```

Let's break down that first line piece by piece:

| Piece | What It Means |
|---|---|
| `def` | Short for **define**. It tells Python: "I'm about to create a function." |
| `welcome_banner` | The **name** you choose. Pick a name that says what it does! |
| `()` | The (empty) brackets. Today they're empty — next week they get powerful. |
| `:` | The colon. It says "the recipe starts on the next line." |
| indented lines | The **body** — the code that runs when you call the function. |

Think of it like a recipe card. Defining a function writes the recipe down and gives it a name. It does **not** cook the meal — it just saves the instructions for later.

> ⚠️ **Surprise:** if you run ONLY the code above, **nothing prints!** Defining a function never runs it. You've written the recipe, but you haven't cooked yet. To actually run it, you have to **call** it — that's Part 3.

---

## 📞 Part 3: Calling a Function

To run a function, you **call** it by writing its name followed by `()`:

```python
def welcome_banner():
    print("*" * 20)
    print("   WELCOME! 🎉")
    print("*" * 20)

welcome_banner()
```

**Output:**
```
********************
   WELCOME! 🎉
********************
```

That last line, `welcome_banner()`, is the **call**. It says: "Python, go run the welcome_banner recipe now." Python jumps up to the function, runs every line in the body, then comes back down.

### The Magic: Call It Again and Again

Here's where functions shine. Once defined, you can call a function **as many times as you like**:

```python
def welcome_banner():
    print("*" * 20)
    print("   WELCOME! 🎉")
    print("*" * 20)

welcome_banner()
print("Here is your menu...")
welcome_banner()
```

**Output:**
```
********************
   WELCOME! 🎉
********************
Here is your menu...
********************
   WELCOME! 🎉
********************
```

Look at that — the **same output as Part 1**, but we only wrote the banner code **once**! Change `WELCOME!` to `HELLO!` in the function, and *every* call updates automatically. That's the power of DRY.

### Even Better: Call It Inside a Loop

You already know loops. Functions and loops are best friends:

```python
def cheer():
    print("Go, coders, go! 📣")

for i in range(3):
    cheer()
```

**Output:**
```
Go, coders, go! 📣
Go, coders, go! 📣
Go, coders, go! 📣
```

The loop calls `cheer()` three times. One tiny function, three cheers, almost no typing. 🎉

---

## 📐 Part 4: Order Matters — Define Before You Call

Python reads your program **top to bottom**. So a function must be **defined before** you try to call it. Watch what happens if you get the order wrong:

```python
cheer()

def cheer():
    print("Go, coders, go! 📣")
```

**Output:**
```
NameError: name 'cheer' is not defined
```

💥 Python hit `cheer()` on line 1, looked around, and had **no idea** what `cheer` was — because it hadn't read the `def` yet! It's like trying to follow a recipe before anyone has written it down.

✅ The fix is simple: **define first, call second.**

```python
def cheer():
    print("Go, coders, go! 📣")

cheer()
```

**Output:**
```
Go, coders, go! 📣
```

> 💡 **Rule of thumb:** put ALL your `def` blocks at the **top** of your program, then write the code that calls them **below**. Do that and you'll never hit this error.

---

## 🧰 Part 5: A Toolbox of Functions

Real programs are built from **lots** of small functions, each with one clear job. Here's a mini program with three:

```python
def draw_line():
    print("-" * 25)

def print_menu():
    print("1. Start game")
    print("2. Instructions")
    print("3. Quit")

def cheer():
    print("You can do it! 💪")

# Now use the toolbox:
draw_line()
print_menu()
draw_line()
cheer()
```

**Output:**
```
-------------------------
1. Start game
2. Instructions
3. Quit
-------------------------
You can do it! 💪
```

Notice how **readable** the bottom part is. `draw_line()`, `print_menu()`, `draw_line()`, `cheer()` — you can read it almost like English and know exactly what happens. The *details* live inside the functions; the bottom just says *what* to do, in order. That's the "organise" superpower.

| Why Functions? | What It Gives You |
|---|---|
| ✂️ **Don't Repeat Yourself (DRY)** | Write code once, reuse it anywhere |
| 🗂️ **Organise** | Break a big program into small, tidy chunks |
| 🏷️ **Name a chunk** | `print_menu()` says what it does at a glance |
| 🔧 **Fix once, fixed everywhere** | Change the function, every call updates |

---

## ⚠️ Common Mistakes (Everyone Hits These First!)

**Mistake 1: Forgetting the `()` when calling**

❌ Wrong:
```python
def cheer():
    print("Go, coders, go! 📣")

cheer
```
```
```
(Nothing prints! Without `()`, you're just *mentioning* the function, not *running* it.)

✅ Correct:
```python
def cheer():
    print("Go, coders, go! 📣")

cheer()
```
```
Go, coders, go! 📣
```

> The `()` means "run it now!" No brackets, no run.

---

**Mistake 2: Calling before defining**

❌ Wrong:
```python
greet()

def greet():
    print("Hello! 👋")
```
```
NameError: name 'greet' is not defined
```

✅ Correct:
```python
def greet():
    print("Hello! 👋")

greet()
```
```
Hello! 👋
```

> Define first, call second. Keep all your `def`s at the top!

---

**Mistake 3: Forgetting the colon**

❌ Wrong:
```python
def greet()
    print("Hello! 👋")
```
```
SyntaxError: expected ':'
```

✅ Correct:
```python
def greet():
    print("Hello! 👋")
```

> Every `def` line ends with a colon `:` — same as `if`, `for`, and `while`.

---

**Mistake 4: Not indenting the body**

❌ Wrong:
```python
def greet():
print("Hello! 👋")
```
```
IndentationError: expected an indented block after function definition on line 1
```

✅ Correct:
```python
def greet():
    print("Hello! 👋")
```

> The body must be **indented** (4 spaces) so Python knows it belongs to the function. No indent, no body.

---

## 🎮 Part 6: The Function Factory (Class Activity)

Time to build! Open **Trinket** and start from the class starter code (name it `Y2-T3-W1-Functions`).

### Step 1 — Spot the Repeat (⭐)
The starter program prints the same banner **twice**. Count the copy-pasted lines and say the number in the **Zoom chat**.

### Step 2 — Build the Function (⭐⭐)
1. At the top, write `def welcome_banner():`
2. Indent the three repeated banner lines underneath it
3. Run it — **nothing prints yet!** Post in chat: *why not?*

### Step 3 — Call It 3 Times (⭐⭐⭐)
1. Below the function, call `welcome_banner()` three times
2. Run it and count the banners
3. Now swap the three calls for a loop: `for i in range(3):` with `welcome_banner()` indented inside

Give a **thumbs up** 👍 in Zoom when your factory is producing banners!

### 💬 Zoom-Chat Challenge

> If a function `greet()` just does `print("Hi!")`, what does calling `greet()` **twice** print?

Type your answer **before** you run it, then check. (Answer: `Hi!` on two separate lines — once per call!)

---

## 🌟 What's Coming Next Week?

Right now, your functions always do the **exact same thing** every time. `welcome_banner()` always says `WELCOME!`. But what if you wanted it to greet someone **by name**?

```python
greet("Ama")     # → Hello, Ama!
greet("Kofi")    # → Hello, Kofi!
```

Same function, different result each time! Next week — **Week 2: Parameters** — we fill those empty brackets `()` with information, so one function can do a whole family of jobs. It's the moment functions go from useful to *unstoppable*. 🚀

---

## 🏆 Today's Achievements

- ✅ You learned that a **function** is a named, reusable chunk of code
- ✅ You **defined** a function with `def`, a name, `()`, a `:`, and an indented body
- ✅ You **called** functions — once, many times, and inside a loop
- ✅ You know **why**: DRY, organise, and name-a-chunk
- ✅ You mastered the golden rule: **define before you call**
- ✅ You met this term's mission: the **Text Adventure Engine**

> *"You just crossed a HUGE line. Up to today, your programs ran top to bottom, once. Now YOU decide when your code runs, and how often, by giving it a name and calling it. That's not just a new skill — that's a new way of thinking like a programmer. Well done."*
> — BrightByte 🤖🧩

---

## 🗺️ This Term's Mission: The Text Adventure Engine

Every term ends with a real project. This term you'll build a **Text Adventure** — a story game where the player types choices and travels between scenes: a spooky forest, a hidden cave, a dragon's lair!

Here's the secret: **each scene will be its own function.** `forest()`, `cave()`, `dragon()` — and the game moves the player by *calling* the right scene function. Everything you learned today is the first brick in that engine. 🐉

---

## 📚 Homework: My Toolbox 🧰

Build a **"My Toolbox"** program made entirely of functions YOU define and call.

**Requirements:**
1. Define **at least 3 functions** (no parameters), such as:
   - `print_header()` — a title inside a border
   - `tell_joke()` — a two-line joke
   - `draw_border()` — a line of symbols
2. Every function name must end with `()` and describe **what it does**
3. **Call** each of your functions at least once
4. Call **one** function **more than once** (or inside a loop)

**Example run:**
```
==============================
        MY TOOLBOX 🧰
==============================
Why did the programmer quit?
Because they didn't get arrays! 😄
------------------------------
------------------------------
```

**Challenge tiers:**
- ⭐ 3 functions, each defined and called once
- ⭐⭐ 4+ functions, and one called several times inside a loop
- ⭐⭐⭐ Make one function CALL another function inside its body

**Trinket:** name it `Y2-T3-W1-Functions`. Save, click **Share**, copy the link, and submit it where your teacher asks.

---

*You didn't just write code today — you built your own commands. Next week, we give them superpowers. See you there! 🧩🐍*
