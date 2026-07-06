---
title: "Toolkit Review & Skeleton Build 🧰🏗️"
description: "Speed-review your whole Year 2 toolkit, then build the empty skeleton of your capstone — a menu, a main loop, and function stubs — so it RUNS before you add a single feature"
difficulty: "intermediate"
order_index: 2
course_slug: "year2-term-8-capstone"
is_premium: false
requires_trinket: true
starter_code: |
  # 🏗️ Y2-T8-Capstone — MY PROJECT (SKELETON)
  # Made by: [YOUR NAME]
  # Project name: [FROM YOUR WEEK 1 SPEC]
  # This is the file you grow ALL TERM. Save it and keep it safe!

  # --- Title banner ---
  def show_title():
      print("=" * 40)
      print("      [YOUR PROJECT NAME]")
      print("=" * 40)

  # --- Menu (one line per must-have feature + a Quit) ---
  def show_menu():
      print("What would you like to do?")
      print("  1. [Feature one]")
      print("  2. [Feature two]")
      print("  3. [Feature three]")
      print("  4. Quit")
      print("=" * 40)

  # --- Feature STUBS (empty for now — just a placeholder print) ---
  def feature_one():
      print("[Feature one] — coming soon! 🚧")

  def feature_two():
      print("[Feature two] — coming soon! 🚧")

  def feature_three():
      print("[Feature three] — coming soon! 🚧")

  # --- The engine: main loop routes the choice to a stub ---
  def main():
      show_title()
      running = True
      while running:
          show_menu()
          choice = input("Enter a choice (1-4): ")
          if choice == "1":
              feature_one()
          elif choice == "2":
              feature_two()
          elif choice == "3":
              feature_three()
          elif choice == "4":
              print("👋 Goodbye! Thanks for using my program.")
              running = False
          else:
              print("❌ Please enter a number from 1 to 4.")

  main()
solution_code: |
  # 📚 Y2-T8-Capstone — Study Buddy (SKELETON)
  # Made by: [YOUR NAME]
  # This is the file you grow ALL TERM. Save it and keep it safe!
  # Right now every feature is a STUB that prints "coming soon".
  # In Weeks 3-5 we fill the stubs in one at a time.

  # --- Title banner ---
  def show_title():
      print("=" * 40)
      print("      📚 STUDY BUDDY 📚")
      print("=" * 40)

  # --- The menu ---
  def show_menu():
      print("What would you like to do?")
      print("  1. Log a study session")
      print("  2. View stats & chart")
      print("  3. Motivation tip")
      print("  4. Quiz me")
      print("  5. Quit")
      print("=" * 40)

  # --- Feature STUBS (empty for now — just placeholder prints) ---
  def log_session():
      print("📝 Log a study session — coming soon! 🚧")

  def view_stats():
      print("📊 View stats & chart — coming soon! 🚧")

  def motivation_tip():
      print("💡 Motivation tip — coming soon! 🚧")

  def quiz_me():
      print("❓ Quiz me — coming soon! 🚧")

  # --- The engine: title once, then loop the menu until they quit ---
  def main():
      show_title()
      running = True
      while running:
          show_menu()
          choice = input("Enter a choice (1-5): ")
          if choice == "1":
              log_session()
          elif choice == "2":
              view_stats()
          elif choice == "3":
              motivation_tip()
          elif choice == "4":
              quiz_me()
          elif choice == "5":
              print("👋 Thanks for studying with Study Buddy. Bye!")
              running = False
          else:
              print("❌ Please enter a number from 1 to 5.")

  main()
class_activities: |
  ## 🏗️ Class Activity: Build the Skeleton — Live, Together!

  We build the **Study Buddy skeleton** in five stages, live on Zoom. After each stage, **run your code** and give a **thumbs up** 👍 when it works. We move together — no rushing ahead!

  > 📁 **First:** create a new Trinket and name it **`Y2-T8-Capstone`**. This is THE file you grow all term. Do NOT delete it — every week we add to it.

  ### Stage 1 — The Title Function (⭐)
  Wrap the banner in a function called `show_title()`.
  ```python
  def show_title():
      print("=" * 40)
      print("      📚 STUDY BUDDY 📚")
      print("=" * 40)

  show_title()
  ```
  ✅ **Checkpoint:** Run it. See the banner? Thumbs up! 👍 (Then delete the last `show_title()` line — `main()` will call it soon.)

  ### Stage 2 — The Menu Function (⭐)
  ```python
  def show_menu():
      print("What would you like to do?")
      print("  1. Log a study session")
      print("  2. View stats & chart")
      print("  3. Motivation tip")
      print("  4. Quiz me")
      print("  5. Quit")
      print("=" * 40)
  ```
  ✅ **Checkpoint:** Type in the Zoom chat: how many menu options (including Quit)?

  ### Stage 3 — The Stubs (⭐⭐)
  One empty function per feature. Each just prints "coming soon".
  ```python
  def log_session():
      print("📝 Log a study session — coming soon! 🚧")

  def view_stats():
      print("📊 View stats & chart — coming soon! 🚧")

  def motivation_tip():
      print("💡 Motivation tip — coming soon! 🚧")

  def quiz_me():
      print("❓ Quiz me — coming soon! 🚧")
  ```
  ✅ **Checkpoint:** Four stubs, four features. A stub is a promise — "this room is booked, furniture coming later".

  ### Stage 4 — The main() Loop (⭐⭐⭐)
  This is the engine. Title once, then loop the menu until they quit.
  ```python
  def main():
      show_title()
      running = True
      while running:
          show_menu()
          choice = input("Enter a choice (1-5): ")
          if choice == "1":
              log_session()
          elif choice == "2":
              view_stats()
          elif choice == "3":
              motivation_tip()
          elif choice == "4":
              quiz_me()
          elif choice == "5":
              print("👋 Thanks for studying with Study Buddy. Bye!")
              running = False
          else:
              print("❌ Please enter a number from 1 to 5.")
  ```
  ✅ **Checkpoint:** Notice `choice == "1"` has **quotes** — `input()` gives text!

  ### Stage 5 — Start the Engine (⭐⭐⭐)
  The very last line, all the way to the LEFT (no indent):
  ```python
  main()
  ```
  ✅ **Final checkpoint:** Run it. Pick 1, 2, 3, 4 — each prints "coming soon". Pick 5 — it says bye and STOPS cleanly. 🎉 Thumbs up and **save your Trinket!**

  ### Now — Your Own Skeleton! (⭐⭐⭐)
  Open the starter template and rebuild the skeleton for YOUR project from your Week 1 spec:
  1. Rename the title to your project name
  2. Put ONE menu line per must-have feature (+ a Quit)
  3. Write ONE stub per feature (`print("... coming soon!")`)
  4. Wire each menu number to its stub in `main()`
  5. Run it — every option should print its placeholder, and Quit should stop it cleanly
take_home_assignment: |
  ## 📚 Homework: Build YOUR Capstone Skeleton

  Turn your Week 1 spec into a running skeleton — no real features yet, just the structure that RUNS.

  **Requirements:**
  1. Open your **`Y2-T8-Capstone`** Trinket (start it if you didn't finish in class)
  2. A `show_title()` function with your project's name in a border
  3. A `show_menu()` function with **one line per must-have feature**, plus a **Quit** option
  4. A **stub function** for each feature that prints `"[feature] — coming soon!"`
  5. A `main()` function with a `while` loop that reads `choice` and routes to the right stub
  6. A clean **Quit** that stops the loop (set `running = False`)
  7. `main()` on the last line to start it
  8. It must **RUN** — every menu option prints its placeholder, and Quit stops it neatly

  **Example run (Study Buddy):**
  ```
  ========================================
        📚 STUDY BUDDY 📚
  ========================================
  What would you like to do?
    1. Log a study session
    2. View stats & chart
    3. Motivation tip
    4. Quiz me
    5. Quit
  ========================================
  Enter a choice (1-5): 1
  📝 Log a study session — coming soon! 🚧
  ```

  **Challenge tiers:**
  - ⭐ Title, menu, stubs, and a `main()` loop that runs and quits cleanly
  - ⭐⭐ Add the `else` branch so a silly choice gets a polite "please pick 1-N"
  - ⭐⭐⭐ Add a friendly "returning to menu..." line after each stub, or a `"=" * 40` divider so the menu always looks tidy on the next loop

  > ⚠️ Compare `choice` as a **string** — `if choice == "1":` (with quotes), NOT `choice == 1`. And define every function ABOVE `main()` or Python won't find it!

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 How Pro Developers Actually Start (Skeleton First!)

  When a professional developer — or an AI coding assistant — starts a big program, they almost NEVER write the whole thing at once. They build a **skeleton first**: the empty menu, the main loop, and a stub for every feature. Then they run it to prove the structure works, and only THEN do they fill the stubs in, one at a time.

  Why? Because a running skeleton is a program you can test at every step. If it breaks, you know exactly which small piece you just changed. Building everything at once and hoping it works is how you get a 200-line mystery bug.

  **Discuss in the Zoom chat:** "Why is it easier to fix a program you built piece by piece than one you wrote all in one go?"

  You just worked the way real engineering teams work: structure first, features later. That habit will carry you far beyond this classroom. 🚀
---

# Year 2, Lesson 2: Toolkit Review & Skeleton Build 🧰🏗️

**Course:** Capstone & Portfolio
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

- A **speed-review** of your ENTIRE Year 2 toolkit — one reference table so you can grab the right tool for any feature
- The **skeleton-first** way real developers build: structure before features
- What a **function stub** is, and why an empty program that RUNS beats a half-finished one that crashes
- How to build the **Study Buddy skeleton** together: title, menu, stubs, and a `main()` loop
- How to scaffold **YOUR OWN** capstone skeleton from your Week 1 spec

---

## 🤖 BrightByte Sets the Scene

> *"Last week you dreamed up your project — the name, the must-haves, the nice-to-haves. Today we don't build features yet. Today we build the SKELETON — the empty frame that everything hangs on. Think of a house: before the paint, before the furniture, you need walls and doorways. A menu, a main loop, and a room booked for each feature. Get the skeleton right and the rest of the term becomes 'just fill in the blanks'. Let's frame your project!"*
> — BrightByte 🤖🏗️

---

## 🧰 Part 1: Your Year 2 Toolkit — The Speed Review

You have spent a WHOLE YEAR collecting coding superpowers. Your capstone will use a handful of them. Here is your complete toolkit on one page — skim it, and keep it open while you build. When you plan a feature, ask: *"which tool does this job?"*

| Tool | One-Line Reminder | Learned In |
|---|---|---|
| `print()` + variables | Show things; store things with a name | Term 1 |
| `input()` | Ask the user; the answer is always **text** | Term 1 |
| Data types: `int()` / `float()` | Turn typed text into real numbers for maths | Term 1 |
| f-strings + `:.2f` | Neat output: `f"You studied {hours:.1f} hrs"` | Term 1 |
| `if / elif / else` | Make decisions — run the right branch | Term 1 |
| `while` loop | Keep going until told to stop (menus!) | Term 2 |
| `for` loop | Do something for every item in a list | Term 2 |
| **Functions** (`def` / `return`) | A named, reusable block — the heart of today | Term 3 |
| **Lists** | An ordered collection: `subjects = []` | Term 4 |
| **Dictionaries** | Labelled data: `{"subject": "Maths", "hours": 2}` | Term 4 |
| **List of dicts** | A table of records — many sessions in one list | Term 4 |
| Keyword mini-assistant | Match words in the input, reply to match | Terms 5-6 |
| `try` / `except` | Catch mistakes so the program never crashes | Term 6 |
| Text bar charts | Draw bars with `"█" * count` | Term 7 |

> 💡 You will NOT use every tool. A great capstone uses the RIGHT tools well — not the most tools. Study Buddy, for example, leans hard on functions, a list of dicts, loops, and a text chart.

### 💬 Class Discussion

> **Look at your Week 1 spec. Pick your first must-have feature and type in the Zoom chat: which tool from the table will do most of the work?**

---

## 🏗️ Part 2: The Big Idea — Skeleton First

Here is the mistake almost every beginner makes with a big project: they try to build the WHOLE thing at once. All the features, all the maths, all the menus — in one giant burst. Then they run it, and 150 lines explode with errors, and they have no idea which line broke it.

Professional developers do the opposite. They build a **skeleton** first:

1. 🖼️ A **title** and a **menu** listing every feature
2. 🔁 A **main loop** that shows the menu, reads the choice, and does the right thing
3. 🚧 A **stub** for each feature — an empty function that just prints *"coming soon"*
4. ✅ They **run it** and prove the whole structure works — before writing a single real feature

Only then do they fill the stubs in, one at a time, testing after each one. If something breaks, they know exactly what caused it: the piece they just added.

> **The rule for this whole term:** *always keep a program that RUNS.* An empty skeleton that runs beats a half-built feature that crashes, every single time.

---

## 🧩 Part 3: What Is a Stub?

A **stub** is a function that exists but doesn't do its real job yet. It just holds the space:

```python
def log_session():
    print("📝 Log a study session — coming soon! 🚧")
```

That's it. It's a promise: *"this feature is booked — the real code arrives later."* Stubs let you build and test the whole menu system TODAY, weeks before any feature actually works.

| Without stubs | With stubs |
|---|---|
| Menu points at code that doesn't exist → **crash** | Menu points at a stub → prints "coming soon" |
| Can't test the program until everything is done | Can test the whole skeleton right now |
| One giant scary build | Fill one small blank at a time |

> 💡 In Weeks 3, 4, and 5 you will replace these `print("coming soon")` lines with the real feature code — one stub per sprint. The skeleton never changes; you just fill the blanks.

---

## 📚 Part 4: Meet the Project — Study Buddy

Throughout this term, our worked example is **Study Buddy** — a menu-driven program that helps you track and improve your studying. Here is what it will do by the end of term:

- **Log a study session** — record a subject and how many hours you studied (stored in a **list of dicts**)
- **View stats & chart** — show totals and a **text bar chart** of hours per subject
- **Motivation tip** — a **keyword mini-assistant** that gives advice based on how you feel
- **Quiz me** — ask a few quick questions and score you

But NOT today. Today we build only the empty frame. Here's the skeleton running:

```
========================================
      📚 STUDY BUDDY 📚
========================================
What would you like to do?
  1. Log a study session
  2. View stats & chart
  3. Motivation tip
  4. Quiz me
  5. Quit
========================================
Enter a choice (1-5): 1
📝 Log a study session — coming soon! 🚧
```

> 📁 **BEFORE WE BUILD:** Open Trinket, create a **new** Python trinket, and name it **`Y2-T8-Capstone`**. This is THE file you grow every week this term. Guard it with your life! 🛡️

---

## 🖼️ Part 5: Stage 1 — The Title Function

Every skill you use today comes from **Term 3: Functions**. We wrap the banner in a function so `main()` can call it later.

```python
def show_title():
    print("=" * 40)
    print("      📚 STUDY BUDDY 📚")
    print("=" * 40)
```

To test it right now, add a temporary call at the bottom: `show_title()`. Run it — you should see the banner. Then **delete that test line** — `main()` will do the calling soon.

✅ **Zoom checkpoint:** See your banner? Thumbs up! 👍

---

## 📋 Part 6: Stage 2 — The Menu Function

One menu line for each feature, plus a **Quit** at the end. Quit is always the last option — every good program gives the user a clean way out.

```python
def show_menu():
    print("What would you like to do?")
    print("  1. Log a study session")
    print("  2. View stats & chart")
    print("  3. Motivation tip")
    print("  4. Quiz me")
    print("  5. Quit")
    print("=" * 40)
```

The two spaces before each number keep the menu tidy — same trick as the Term 1 calculator.

✅ **Zoom checkpoint:** How many options does the menu have, including Quit? Type it in the chat! (Five!)

---

## 🚧 Part 7: Stage 3 — The Stubs

Now a stub for each of the four features. Each is an empty function with a single placeholder print. Notice how quick this is — four features, four little stubs.

```python
def log_session():
    print("📝 Log a study session — coming soon! 🚧")

def view_stats():
    print("📊 View stats & chart — coming soon! 🚧")

def motivation_tip():
    print("💡 Motivation tip — coming soon! 🚧")

def quiz_me():
    print("❓ Quiz me — coming soon! 🚧")
```

> 💡 See how the **function name** matches the **menu line**? `log_session` ↔ "Log a study session". Matching names make it obvious which stub does which job — future-you will be grateful.

✅ **Zoom checkpoint:** Four features, four stubs. Every menu option (except Quit) now has a home to jump to.

---

## 🔁 Part 8: Stage 4 — The Engine: `main()`

This is the heart of the skeleton. It shows the title **once**, then loops the menu until the user quits. Inside the loop we read the choice and route it to the right stub with `if/elif/else` — exactly like the Term 1 calculator, but this time it repeats!

```python
def main():
    show_title()
    running = True
    while running:
        show_menu()
        choice = input("Enter a choice (1-5): ")
        if choice == "1":
            log_session()
        elif choice == "2":
            view_stats()
        elif choice == "3":
            motivation_tip()
        elif choice == "4":
            quiz_me()
        elif choice == "5":
            print("👋 Thanks for studying with Study Buddy. Bye!")
            running = False
        else:
            print("❌ Please enter a number from 1 to 5.")
```

### 🔎 Reading the Engine

- `show_title()` — runs **once**, before the loop, so the banner appears a single time
- `running = True` — a flag that keeps the loop alive
- `while running:` — keep looping as long as `running` is `True`
- `show_menu()` — reprint the menu every time round, so the user always sees their options
- `choice = input(...)` — read what they typed (remember: it's **text**!)
- `if choice == "1": log_session()` — send them to the matching stub
- `elif choice == "5":` — Quit: print goodbye and set `running = False` so the loop **stops**
- `else:` — anything that isn't 1-5 gets a polite nudge, and the loop goes round again

> ⚠️ Compare `choice == "1"` with **quotes**! `input()` hands back text, so `choice` is the string `"1"`, never the number `1`. Forget the quotes and every choice falls through to `else`.

✅ **Zoom checkpoint:** What one line makes the loop STOP? (`running = False` — inside the Quit branch.)

---

## ▶️ Part 9: Stage 5 — Start the Engine

`main()` is *defined* but nothing has *called* it yet. The very last line of the file — flush to the **left**, no indentation — starts everything:

```python
main()
```

> 💡 Order matters! Every function must be **defined above** the line that calls it. `main()` calls `show_title`, `show_menu`, and the stubs — so they all sit above `main()`, and the `main()` call sits at the very bottom.

---

## ✅ Part 10: The Whole Skeleton — Run It!

Here is your complete Study Buddy skeleton. This is what should be in your `Y2-T8-Capstone` Trinket:

```python
# 📚 Y2-T8-Capstone — Study Buddy (SKELETON)
# Made by: [YOUR NAME]

# --- Title banner ---
def show_title():
    print("=" * 40)
    print("      📚 STUDY BUDDY 📚")
    print("=" * 40)

# --- The menu ---
def show_menu():
    print("What would you like to do?")
    print("  1. Log a study session")
    print("  2. View stats & chart")
    print("  3. Motivation tip")
    print("  4. Quiz me")
    print("  5. Quit")
    print("=" * 40)

# --- Feature STUBS (empty for now) ---
def log_session():
    print("📝 Log a study session — coming soon! 🚧")

def view_stats():
    print("📊 View stats & chart — coming soon! 🚧")

def motivation_tip():
    print("💡 Motivation tip — coming soon! 🚧")

def quiz_me():
    print("❓ Quiz me — coming soon! 🚧")

# --- The engine ---
def main():
    show_title()
    running = True
    while running:
        show_menu()
        choice = input("Enter a choice (1-5): ")
        if choice == "1":
            log_session()
        elif choice == "2":
            view_stats()
        elif choice == "3":
            motivation_tip()
        elif choice == "4":
            quiz_me()
        elif choice == "5":
            print("👋 Thanks for studying with Study Buddy. Bye!")
            running = False
        else:
            print("❌ Please enter a number from 1 to 5.")

main()
```

### Try This Run

```
========================================
      📚 STUDY BUDDY 📚
========================================
What would you like to do?
  1. Log a study session
  2. View stats & chart
  3. Motivation tip
  4. Quiz me
  5. Quit
========================================
Enter a choice (1-5): 2
📊 View stats & chart — coming soon! 🚧
What would you like to do?
  1. Log a study session
  ...
Enter a choice (1-5): 5
👋 Thanks for studying with Study Buddy. Bye!
```

🎉 **It RUNS!** The menu loops, every stub prints its placeholder, and Quit stops it cleanly. You have a working skeleton — the whole term hangs on this frame. **Save your Trinket now.**

---

## 🛠️ Part 11: Now Build YOUR Skeleton

Your turn. Open the starter template and rebuild the skeleton for **your own** project from your Week 1 spec:

1. Rename `show_title()` to show YOUR project's name
2. In `show_menu()`, write **one line per must-have feature**, plus a **Quit**
3. Write **one stub** per feature (`print("... coming soon!")`) — match each name to its menu line
4. In `main()`, wire each menu number to its stub with `if/elif/else`
5. Put `main()` on the last line and **run it**

Don't worry that nothing "does" anything yet — that's the whole point. If every option prints its placeholder and Quit stops the loop, your skeleton is a success. 🏗️

---

## ⚠️ Common Mistakes

**Mistake 1: Calling a function before it's defined**

❌ Wrong — `main()` runs before the functions exist:
```python
main()

def show_title():
    print("Title")
```
```
NameError: name 'show_title' is not defined
```

✅ Correct — define everything ABOVE, call `main()` at the very bottom:
```python
def show_title():
    print("Title")

def main():
    show_title()

main()
```

---

**Mistake 2: Comparing `choice` as a number**

❌ Wrong — `choice` is text, so this is NEVER true:
```python
choice = input("Enter a choice (1-5): ")
if choice == 1:            # 1 is a number!
    log_session()
```
Every choice falls straight through to `else` — the menu seems "broken".

✅ Correct — compare text to text:
```python
if choice == "1":          # "1" is text, just like choice
    log_session()
```

> `input()` always returns a **string**. `"1"` and `1` are NOT equal in Python.

---

**Mistake 3: The forever loop (no way to quit)**

❌ Wrong — nothing ever sets `running` to `False`, so it loops FOREVER:
```python
def main():
    running = True
    while running:
        show_menu()
        choice = input("Enter a choice (1-5): ")
        if choice == "1":
            log_session()
        # ...but no Quit branch! 😱
```
You'll be stuck answering the menu forever (in Trinket, hit **Stop** to escape).

✅ Correct — a Quit branch that flips the flag:
```python
elif choice == "5":
    print("👋 Bye!")
    running = False        # THIS stops the loop
```

---

## 🌟 What's Coming Next Week?

Your skeleton is standing — now we start furnishing it! Next week, **Week 3: Build Sprint 1**, we fill in the **first real feature**.

For Study Buddy, that's **Log a study session**: we replace the `log_session()` stub with code that asks for a subject and hours, builds a **dictionary** for each session, and appends it to a **list** — your growing study record. For YOUR project, you'll pick your most important must-have and make it real.

> Keep your `Y2-T8-Capstone` Trinket safe. From now on, every week you fill one more stub — and by graduation it's a finished app you'll be proud to show. 🎓

---

## 🏆 Today's Achievements

- ✅ You reviewed your **entire Year 2 toolkit** on one page
- ✅ You learned the **skeleton-first** way real developers build
- ✅ You know what a **function stub** is and why a running skeleton beats a half-built feature
- ✅ You built the **Study Buddy skeleton** — title, menu, stubs, and a `main()` loop
- ✅ You scaffolded **YOUR OWN** capstone skeleton from your Week 1 spec
- ✅ Your project now **RUNS** — even though every feature says "coming soon"

> *"Look at that — a program with a menu, a loop, and a home for every feature, and it runs without a single crash. That's not an empty program. That's a PLAN made of code. The hard thinking is done; now we just fill the blanks. See you at Build Sprint 1!"*
> — BrightByte 🤖🏗️

---

## 📚 Homework: Build YOUR Capstone Skeleton

Turn your Week 1 spec into a running skeleton — no real features yet, just structure that RUNS.

**Requirements:**
1. Open your **`Y2-T8-Capstone`** Trinket
2. A `show_title()` with your project's name in a border
3. A `show_menu()` with **one line per must-have feature**, plus **Quit**
4. A **stub** for each feature that prints `"[feature] — coming soon!"`
5. A `main()` with a `while` loop that reads `choice` and routes to the right stub
6. A clean **Quit** that stops the loop (`running = False`)
7. `main()` on the last line
8. It must **RUN** — every option prints its placeholder; Quit stops it neatly

**Challenge tiers:**
- ⭐ Title, menu, stubs, and a `main()` loop that runs and quits cleanly
- ⭐⭐ Add the `else` branch so a silly choice gets a polite "please pick 1-N"
- ⭐⭐⭐ Add a "returning to menu..." line after each stub, or a `"=" * 40` divider so the menu always looks tidy on the next loop

> ⚠️ Compare `choice` as a **string** — `if choice == "1":` (with quotes). And define every function ABOVE `main()`!

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't write features today — you wrote a plan that runs. That's how real projects are born. See you at Build Sprint 1! 🏗️🐍*
