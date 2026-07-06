---
title: "Functions Working Together 🤝🔗"
description: "Make your functions a TEAM — functions that call other functions, default parameter values, and a menu that routes to a different function per choice (the exact skill behind next week's Text Adventure)"
difficulty: "intermediate"
order_index: 5
course_slug: "year2-term-3-functions"
is_premium: false
requires_trinket: true
starter_code: |
  # 🤝 Team of Functions — Warm-Up
  # You know how to DEFINE, CALL, pass PARAMETERS and RETURN values.
  # This week: functions that work TOGETHER.

  # 1) A function with a DEFAULT parameter value
  def greet(name="friend"):
      print("Hello, " + name + "! 👋")

  # 2) A small function that RETURNS a value
  def make_title(word):
      return "=== " + word.upper() + " ==="

  # 3) A function that CALLS the two functions above
  def welcome(name="friend"):
      print(make_title("welcome"))   # calls make_title, prints what it returns
      greet(name)                    # calls greet

  # --- Run it two ways: with a name, and without ---
  welcome("Ama")   # uses the name we give
  welcome()        # uses the default "friend"

  # TODO: write ONE more small function called cheer() that prints
  #       "You can do this! 💪" and call it from inside welcome().
solution_code: |
  # 🤝 Team of Functions — one possible solution
  # Golden rule: DEFINE every function first, then CALL main() at the very bottom.

  def make_title(word):
      return "=== " + word.upper() + " ==="

  def cheer():
      print("You can do this! 💪")

  def greet(name="friend"):
      print("Hello, " + name + "! 👋")

  def welcome(name="friend"):
      print(make_title("welcome"))   # a returned value used straight away
      greet(name)                    # one function calling another
      cheer()                        # ...and another!

  # A dice roller that RETURNS a number (no random library needed)
  def roll_dice(seed):
      # simple, predictable "roll" from a number the user gives us
      return (seed * 7 + 3) % 6 + 1

  def show_menu():
      print()
      print("=== MINI TOOLKIT ===")
      print("1. Greeter")
      print("2. Dice Roller")
      print("3. Cheer Squad")
      print("4. Quit")

  def get_choice():
      return input("Pick an option (1-4): ")

  # main() is the CAPTAIN — it calls the other functions in order
  def main():
      welcome()                      # calls make_title, greet, cheer
      running = True
      while running:
          show_menu()                # a function...
          choice = get_choice()      # ...and its returned value passed onward
          if choice == "1":
              greet("teammate")
          elif choice == "2":
              lucky = int(input("Type any number: "))
              print("🎲 You rolled a " + str(roll_dice(lucky)) + "!")
          elif choice == "3":
              cheer()
          elif choice == "4":
              print("Goodbye, coder! 👋")
              running = False
          else:
              print("Hmm, 1 to 4 only please.")

  # Everything is defined ABOVE — now we start the program:
  main()
class_activities: |
  ## 🎮 Class Activity: Team of Functions 🤝

  Your functions stop working alone today — they become a TEAM led by a `main()` captain. Build in Trinket, run after each stage, and give a **thumbs up** in Zoom when yours works!

  ### Stage 1 — Three Players (⭐)
  Write **three** tiny functions, each printing one line:
  - `intro()` → prints a welcome banner
  - `question()` → asks the user their name with `input()`
  - `goodbye()` → prints a farewell

  ### Stage 2 — The Captain (⭐⭐)
  Write a `main()` function that **calls all three in order**: `intro()`, then `question()`, then `goodbye()`. Define every function first, then call `main()` on the very last line. Run it — one call, three functions fire! 💥

  ### Stage 3 — The Router (⭐⭐⭐)
  Add a `show_menu()` function and a menu inside `main()`:
  - Option `"1"` → calls a `joke()` function
  - Option `"2"` → calls a `compliment()` function
  - Option `"3"` → quits

  Whichever option the user picks, `main()` **routes** to a different function. This is EXACTLY how next week's adventure will jump between scenes!

  ### 💬 Zoom Checkpoints
  - After Stage 1: paste your **shortest** function in the chat.
  - After Stage 2: thumbs up when `main()` fires all three.
  - After Stage 3: type the option number your menu handles best.
take_home_assignment: |
  ## 📚 Homework: Build a Mini App 🧰

  Build a **Mini App** in Trinket: a menu that **routes to at least 3 different functions**. Think of a tiny toolkit — a greeter, a dice roller, and a complimenter — but yours can be anything!

  **Requirements:**
  1. Define **at least 3 functions** that each do one job (e.g. `greeter()`, `roll_dice()`, `complimenter()`)
  2. A `show_menu()` function that prints the options
  3. A `main()` function with a loop and `if/elif/else` that **calls a different function per choice**
  4. At least one function uses a **default parameter value** (e.g. `def greeter(name="friend"):`)
  5. Define ALL functions first, then call `main()` on the last line

  **Example run:**
  ```
  === MY MINI APP ===
  1. Greeter
  2. Dice Roller
  3. Complimenter
  4. Quit
  Pick an option (1-4): 1
  Hello, friend! 👋
  ```

  **Challenge tiers:**
  - ⭐ Menu routes to 3 functions and can quit
  - ⭐⭐ One function RETURNS a value that another function or line uses
  - ⭐⭐⭐ `main()` calls a function that itself calls TWO more functions (a team within the team!)

  **Submit:** Save your Trinket (`Y2-T3-W5-FunctionsTogether`), click **Share**, copy the link, and paste it where your teacher asks.
ai_activities: |
  ## 🤖 Quick Think: AI Is a Menu of Functions Too

  When you ask an AI assistant "what's 15% of 240?" or "set a timer for 5 minutes", something behind the scenes has to decide: *which tool handles this?* It **routes** your request to the right specialised function — a calculator tool, a timer tool, a search tool.

  That's the SAME idea as your menu today: read the request, then call the matching function.

  **Discuss in the Zoom chat (1 minute):** if you built an AI helper, name **three tools** it should route to. (e.g. "weather", "reminder", "joke".) Keep it quick — we've got functions to build!
---

# Year 2, Lesson 5: Functions Working Together 🤝🔗

**Course:** Functions
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

- How one function can **call another function** (a `main()` captain that runs a whole team)
- **Default parameter values** — `def greet(name="friend"):` — so a function still works when you don't pass anything
- How to **compose** small functions: one function returns a value, another uses it
- How to build a **menu that routes** to a different function for each choice — the exact skill behind our Text Adventure Engine

---

## 🤖 BrightByte Says Hello

> *"So far you've built functions that work ALONE — define one, call one, get one job done. But real programs? They're TEAMS. A captain function calls a scout function, which calls a helper function, and together they do something none of them could do alone. Today your functions stop being solo acts and start being a squad. Let's assemble your team! 🤝"*
> — BrightByte 🤖⚡

---

## 🧠 Part 1: Quick Recap — Your Function Toolkit So Far

You've had four weeks of function training. Let's check your gear:

| Week | Skill | Example |
|---|---|---|
| 1 | Define & call | `def hello():` then `hello()` |
| 2 | Parameters | `def greet(name):` |
| 3 | Return values | `return score` |
| 4 | Scope & design | one function, one clear job |

Everything today builds on these. If any feel foggy, don't panic — we're about to use all four at once, and using them is how they stick. 💪

---

## 🤝 Part 2: Functions Calling Other Functions

Here's the big idea: **a function can call another function**, just like your program calls a function.

Watch how `main()` becomes the **captain** — it doesn't do the work itself, it calls the players who do:

```python
def show_menu():
    print("=== ADVENTURE ===")
    print("1. Start")
    print("2. Quit")

def get_choice():
    return input("Pick 1 or 2: ")

def main():
    show_menu()          # main calls show_menu
    choice = get_choice()  # main calls get_choice
    print("You picked:", choice)

main()   # start the whole program with ONE call
```

**Output:**
```
=== ADVENTURE ===
1. Start
2. Quit
Pick 1 or 2: 1
You picked: 1
```

Look what `main()` did: it called `show_menu()` **and** `get_choice()`. One captain, two players. That's a team.

> 🎯 **The golden ordering rule:** define ALL your functions first, then call `main()` on the **very last line**. When Python finally runs `main()`, every function it needs already exists. Do this and define-before-call worries vanish.

### 💬 Zoom Checkpoint

> Type in the chat: in the program above, **which function does the actual asking?** (Hint: it's not `main`.)

---

## 🎁 Part 3: Default Parameter Values

Sometimes you want a function to work **even if nobody passes an argument**. You give the parameter a **default value** with `=`:

```python
def greet(name="friend"):
    print("Hello, " + name + "! 👋")

greet("Ama")   # we pass a name
greet()        # we pass nothing — the default kicks in
```

**Output:**
```
Hello, Ama! 👋
Hello, friend! 👋
```

Magic! `greet("Ama")` uses `"Ama"`. `greet()` with empty brackets falls back to `"friend"`. The default is the **backup plan** for when no value arrives.

| Call | What `name` becomes | Output |
|---|---|---|
| `greet("Kofi")` | `"Kofi"` | `Hello, Kofi! 👋` |
| `greet("Zara")` | `"Zara"` | `Hello, Zara! 👋` |
| `greet()` | `"friend"` (default) | `Hello, friend! 👋` |

> 💡 **When is this useful?** In our adventure, `describe_room(name="a dark cave")` can have a sensible default so the game never shows a blank room — even if we forget to pass one.

---

## 🔗 Part 4: Composing Functions — Passing Results Along

Here's where it gets powerful. One function **returns** a value, and we hand that value straight to another function. This is called **composing**.

```python
def make_loud(text):
    return text.upper() + "!!!"

def announce(message):
    print("📢 " + message)

# The result of make_loud is PASSED INTO announce:
announce(make_loud("we did it"))
```

**Output:**
```
📢 WE DID IT!!!
```

Read the last line carefully: Python runs `make_loud("we did it")` **first**, gets back `"WE DID IT!!!"`, then feeds that into `announce()`. Functions passing results to functions — like a relay race handing off a baton. 🏃‍♀️🏃

> **Rule of thumb:** if a function `return`s something, another function or line can use it. If it just `print`s, the value disappears after it's shown.

### 💬 Zoom Checkpoint

> What would `announce(make_loud("high five"))` print? Type your guess in the chat, then run it!

---

## 🧭 Part 5: The Menu Router (This IS the Adventure Engine!)

Now we combine everything into the skill that powers Text Adventures: a **menu that routes** to a different function depending on the user's choice.

```python
def play_game():
    print("🎮 Loading the game... pew pew!")

def show_scores():
    print("🏆 Top score: 9000!")

def show_menu():
    print()
    print("=== ARCADE ===")
    print("1. Play game")
    print("2. Show scores")
    print("3. Quit")

def get_choice():
    return input("Pick an option (1-3): ")

def main():
    running = True
    while running:
        show_menu()
        choice = get_choice()
        if choice == "1":
            play_game()          # route to one function
        elif choice == "2":
            show_scores()        # route to a different function
        elif choice == "3":
            print("Bye! 👋")
            running = False
        else:
            print("Please pick 1, 2, or 3.")

main()   # defined everything above — GO!
```

**Example run:**
```
=== ARCADE ===
1. Play game
2. Show scores
3. Quit
Pick an option (1-3): 1
🎮 Loading the game... pew pew!

=== ARCADE ===
1. Play game
2. Show scores
3. Quit
Pick an option (1-3): 3
Bye! 👋
```

See it? The `if/elif/else` inside `main()` reads the choice and **routes** to the matching function. Swap `play_game` and `show_scores` for `enter_forest` and `enter_castle`, and you've got a Text Adventure. That's next week. 🗺️

> *"A menu that calls a different function per choice — that single pattern is the beating heart of every adventure game, every app, every AI assistant that picks the right tool. Master this and you've mastered the shape of real software."*
> — BrightByte 🤖

---

## ⚠️ Common Mistakes

**Mistake 1: Calling a function before it's defined**

❌ Wrong — `main()` runs before `greet` exists:
```python
main()            # 💥 Python hasn't seen main yet!

def greet():
    print("Hi")

def main():
    greet()
```
```
NameError: name 'main' is not defined
```

✅ Correct — define everything, THEN call:
```python
def greet():
    print("Hi")

def main():
    greet()

main()            # every function already exists 👍
```

> 📌 **Note:** it's totally fine for `main()` to call `greet()` even though `greet` is written *near* it — what matters is that by the time `main()` actually **runs** (the last line), every function has already been defined.

---

**Mistake 2: Mixing up default vs required parameters**

❌ This crashes — `age` has no default and no value:
```python
def profile(name="friend", age):
    print(name, age)
```
```
SyntaxError: non-default argument follows default argument
```

✅ Correct — parameters WITH defaults come LAST:
```python
def profile(age, name="friend"):
    print(name, age)

profile(12)          # name uses the default
profile(12, "Ama")   # name is given
```
```
friend 12
Ama 12
```

> **Golden rule:** required parameters first, defaulted ones after. Python reads left to right and gets confused otherwise.

---

**Mistake 3: Forgetting the brackets when calling**

❌ Wrong — this doesn't RUN the function:
```python
def cheer():
    print("Go team! 📣")

cheer     # no brackets — nothing happens!
```

✅ Correct:
```python
cheer()   # brackets = "run it now!" 📣
```

> Without `()`, Python just *mentions* the function and moves on. The brackets are the "GO!" button.

---

## 🎮 Class Activity: Team of Functions 🤝

Your functions become a TEAM today, led by a `main()` captain. Build it in stages — run and thumbs-up after each one!

### Stage 1 — Three Players (⭐)
Write three tiny functions: `intro()` (a welcome banner), `question()` (asks the user's name), `goodbye()` (a farewell). Each does ONE job.

### Stage 2 — The Captain (⭐⭐)
Write `main()` that calls all three **in order**. Define all functions first, then call `main()` last. One call → three functions fire!

### Stage 3 — The Router (⭐⭐⭐)
Add a `show_menu()` and a menu inside `main()`: option `"1"` calls `joke()`, option `"2"` calls `compliment()`, option `"3"` quits. Your captain now **routes** to a different function per choice — the adventure pattern!

**Zoom checkpoints:** paste your shortest function after Stage 1 • thumbs-up when `main()` fires all three • type your best option number after Stage 3.

---

## 🌟 What's Coming Next Week?

Next week is **Week 6: Designing Your Adventure** 🗺️ — the fun planning week! You'll design your very own Text Adventure: the rooms, the choices, the story. Each scene will be a **function**, and a menu just like today's will **route** the player from room to room. This week you learned the pattern; next week you'll dream up the world; and in Week 7 you'll BUILD it. Start daydreaming about your adventure now! 🏰🌲🚀

---

## 🏆 Today's Achievements

- ✅ You made functions **call other functions** — hello, `main()` the captain!
- ✅ You used **default parameter values** so functions work with or without arguments
- ✅ You **composed** functions — passed one function's return value into another
- ✅ You built a **menu that routes** to a different function per choice
- ✅ You nailed the golden rule: define all functions first, call `main()` last

> *"Look at what you just did — you didn't write ONE function, you built a TEAM that works together. That's not beginner stuff anymore; that's how real programs are shaped. Next week you'll use this exact pattern to build a whole world. See you there, captain! 🤝"*
> — BrightByte 🤖⚡

---

## 📚 Homework: Build a Mini App 🧰

Build a **Mini App** in Trinket: a menu that **routes to at least 3 different functions** — a tiny toolkit (greeter, dice roller, complimenter, or your own idea!).

**Requirements:**
1. Define **at least 3 functions**, each doing one job
2. A `show_menu()` function that prints the options
3. A `main()` with a loop and `if/elif/else` that **calls a different function per choice**
4. At least one function uses a **default parameter value** (e.g. `def greeter(name="friend"):`)
5. Define ALL functions first, then call `main()` on the last line

**Challenge tiers:**
- ⭐ Menu routes to 3 functions and can quit
- ⭐⭐ One function RETURNS a value that another function or line uses
- ⭐⭐⭐ `main()` calls a function that itself calls TWO more functions (a team within the team!)

**Submit:** Save your Trinket (`Y2-T3-W5-FunctionsTogether`), click **Share**, copy the link, and paste it where your teacher asks.

---

*Assemble your team, captain — next week you build a whole world! 🤝🔗🗺️*
