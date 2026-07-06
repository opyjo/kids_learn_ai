---
title: "Build Sprint 1: The Core Feature 🏃‍♂️🔨"
description: "Run your first build sprint — pick your capstone's ONE must-have feature and build it fully. In Study Buddy we bring the Log study session and View sessions features to life with a sessions list, try/except, and a loop"
difficulty: "intermediate"
order_index: 3
course_slug: "year2-term-8-capstone"
is_premium: false
requires_trinket: true
starter_code: |
  # 📚 Y2-T8-Capstone — Study Buddy
  # Made by: [YOUR NAME]
  # WEEK 2 SKELETON — menu + main loop + empty stub functions.
  # This term we GROW this one file, one feature at a time.

  # ---- Feature functions (stubs for now — they just print placeholders) ----

  def log_session():
      print("(Log study session — coming soon!)")

  def view_sessions():
      print("(View sessions — coming soon!)")

  def motivation_tip():
      print("(Motivation tip — coming soon!)")

  def quiz_me():
      print("(Quiz me — coming soon!)")

  # ---- The menu ----

  def show_menu():
      print()
      print("=" * 40)
      print("        📚 STUDY BUDDY 📚")
      print("=" * 40)
      print("  1. Log study session")
      print("  2. View sessions")
      print("  3. Motivation tip")
      print("  4. Quiz me")
      print("  5. Quit")
      print("=" * 40)

  # ---- The main loop ----

  def main():
      running = True
      while running:
          show_menu()
          choice = input("Enter a choice (1-5): ")
          if choice == "1":
              log_session()
          elif choice == "2":
              view_sessions()
          elif choice == "3":
              motivation_tip()
          elif choice == "4":
              quiz_me()
          elif choice == "5":
              print("Goodbye! Keep studying! 👋")
              running = False
          else:
              print("❌ Not a valid choice. Please pick 1-5.")

  main()

  # 🎯 TODAY'S SPRINT: replace the FIRST stub with a real feature!
solution_code: |
  # 📚 Y2-T8-Capstone — Study Buddy
  # Made by: [YOUR NAME]
  # AFTER BUILD SPRINT 1 — Log study session + View sessions now WORK.

  # ---- The data store: one list that holds every study session ----
  # Each session is a dictionary: {"subject": <text>, "hours": <number>}
  sessions = []

  # ---- Feature functions ----

  def log_session():
      # SPRINT 1 FEATURE — fully built!
      try:
          subject = input("What subject did you study? ")
          hours = float(input("How many hours? "))
          sessions.append({"subject": subject, "hours": hours})
          print(f"✅ Logged {hours} hours of {subject}!")
      except ValueError:
          print("⚠️ Hours must be a number, e.g. 1.5. Session not saved.")

  def view_sessions():
      # SPRINT 1 FEATURE — fully built!
      if len(sessions) == 0:
          print("No sessions logged yet. Pick 1 to log your first one!")
      else:
          print("📚 Your study sessions so far:")
          for session in sessions:
              print(f"  - {session['subject']}: {session['hours']} hours")

  def motivation_tip():
      print("(Motivation tip — coming in a later sprint!)")

  def quiz_me():
      print("(Quiz me — coming in a later sprint!)")

  # ---- The menu ----

  def show_menu():
      print()
      print("=" * 40)
      print("        📚 STUDY BUDDY 📚")
      print("=" * 40)
      print("  1. Log study session")
      print("  2. View sessions")
      print("  3. Motivation tip")
      print("  4. Quiz me")
      print("  5. Quit")
      print("=" * 40)

  # ---- The main loop ----

  def main():
      running = True
      while running:
          show_menu()
          choice = input("Enter a choice (1-5): ")
          if choice == "1":
              log_session()
          elif choice == "2":
              view_sessions()
          elif choice == "3":
              motivation_tip()
          elif choice == "4":
              quiz_me()
          elif choice == "5":
              print("Goodbye! Keep studying! 👋")
              running = False
          else:
              print("❌ Not a valid choice. Please pick 1-5.")

  main()
class_activities: |
  ## 🏗️ Class Activity: Build Sprint 1 — Live, Together!

  Today is a **sprint**: we pick ONE must-have feature and build it FULLY. In Study Buddy that feature is **logging and viewing study sessions**. We build it in stages, live on Zoom. After each stage, **run your code** and give a **thumbs up** 👍 when it works.

  > 📁 **First:** open your **`Y2-T8-Capstone`** Trinket (your Week 2 skeleton). We add to it today — no new file, we GROW the one project.

  ### Stage 1 — Create the data store (⭐)
  At the very TOP of your file (above the functions), create the empty list that will hold every session:
  ```python
  sessions = []
  ```
  ✅ **Checkpoint:** Run it. Nothing new happens yet — but no error means the list exists. 👍

  ### Stage 2 — Build the Log feature (⭐⭐)
  Replace the `log_session()` stub with a real one that asks for a subject and hours, then saves them:
  ```python
  def log_session():
      try:
          subject = input("What subject did you study? ")
          hours = float(input("How many hours? "))
          sessions.append({"subject": subject, "hours": hours})
          print(f"✅ Logged {hours} hours of {subject}!")
      except ValueError:
          print("⚠️ Hours must be a number, e.g. 1.5. Session not saved.")
  ```
  ✅ **Checkpoint:** Pick 1, log "Maths" and "2". See the ✅ message? 👍

  ### Stage 3 — Build the View feature (⭐⭐)
  Replace the `view_sessions()` stub so it loops through the list and prints every session:
  ```python
  def view_sessions():
      if len(sessions) == 0:
          print("No sessions logged yet. Pick 1 to log your first one!")
      else:
          print("📚 Your study sessions so far:")
          for session in sessions:
              print(f"  - {session['subject']}: {session['hours']} hours")
  ```
  ✅ **Checkpoint:** Log two sessions, then pick 2. Do you see both listed? 👍

  ### 🧍 STAND-UP (everyone!)
  In the **Zoom chat**, post TWO quick lines:
  - **Built:** what feature did you get working today?
  - **Blocker:** what's stuck, confusing, or crashing? (Say "nothing" if you're flying!)

  ### Stage 4 — Your own core feature (⭐⭐⭐)
  Now build the FIRST must-have feature of **YOUR** capstone (not Study Buddy). Same recipe: a list to store data, a function to add to it, a function to view it. Get ONE feature working end to end.
  ✅ **Final checkpoint:** Run YOUR feature. Does it save something and show it back? 🎉 **Save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Finish Your First Must-Have Feature ✨

  This week's mission: make your capstone's **first must-have feature actually work**, end to end.

  **Requirements:**
  1. Open your **`Y2-T8-Capstone`** Trinket
  2. Your project has a **list** (or dictionary) that stores the feature's data
  3. One menu option **adds** data (with a `try`/`except` guard if it takes a number)
  4. One menu option **views** the data with a loop
  5. Test it: add two things, then view them. Then quit cleanly.

  **Challenge tiers:**
  - ⭐ One feature adds data and one views it — no crashes
  - ⭐⭐ The add feature validates its input with `try`/`except`
  - ⭐⭐⭐ The view feature shows a small summary too (e.g. a count, or a total)

  > 💡 **Stuck on a blocker?** Write it down and bring it to Week 4 — that's our **Debugging Clinic**! You are not meant to have everything perfect. A working first feature is a HUGE win.

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? Real Software Ships ONE Feature at a Time

  Today you didn't try to build your whole app at once — you picked ONE feature and made it work completely. That's exactly how professional teams build real software, including the apps behind the AI tools you use.

  Big products aren't written in one giant burst. Teams work in short **sprints**: pick a small, valuable feature, build it, test it, ship it — then repeat. The chatbot you talk to started as one tiny feature that worked, and grew from there. "One feature at a time" is how something huge gets built without falling apart.

  **Discuss in the Zoom chat:** "If you could add ONE feature to your favourite app or AI tool, what would you build first?"

  You just worked the way real developers do. That's a professional habit — keep it up all term! 🚀
---

# Year 2, Lesson 3: Build Sprint 1 — The Core Feature 🏃‍♂️🔨

**Course:** Capstone & Portfolio
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

- What a **build sprint** is — and why real developers build ONE feature at a time
- How to turn an empty **stub function** into a real, working feature
- How to store many records in a **list of dictionaries** (`sessions`)
- How to safely take a number with **`try` / `except`** and save it with `float()`
- How to **loop** through your data and print it back neatly
- You'll finish with your capstone's **first must-have feature actually working!** 🎉

---

## 🤖 BrightByte's Sprint Whistle

> *"Two weeks ago you drew the blueprint — a menu, a main loop, and a row of empty stub functions waiting to be filled. Today we stop planning and START BUILDING. But here's the secret real developers know: you don't build EVERYTHING at once. You pick ONE feature — the most important one — and you build it until it actually works. That's called a sprint. Today is Build Sprint 1. Ready? On your marks... GO!"*
> — BrightByte 🤖🏃‍♂️

---

## 🗺️ Part 1: Where We Are (and What a Sprint Is)

Look at your **`Y2-T8-Capstone`** Trinket from Week 2. Right now it has:

- ✅ A **menu** that shows the options
- ✅ A **main loop** that keeps the program running until the user quits
- ✅ A row of **stub functions** — real functions, but empty. They just print "(coming soon!)".

A **stub** is a placeholder. It lets the whole program run *before* the features exist, so you can build them one at a time without everything breaking.

Today we turn the FIRST stub into a real feature. That's a **build sprint**:

> **A sprint = pick ONE must-have feature and build it FULLY in one focused session.**

Not five half-finished features. **One finished feature.** A program with one feature that truly works beats a program with ten features that all half-work. Every time.

For our worked example, **Study Buddy**, the first must-have feature is **logging study sessions** (and viewing them back). That's what we build together. Then YOU build the first must-have feature of your own project.

---

## 📦 Part 2: The Data Store — A List of Dictionaries

Before we can *log* a study session, we need somewhere to *keep* it. That's a **list**.

But each session isn't just one thing — it's a subject **and** a number of hours. The perfect tool for "one thing with several labelled parts" is a **dictionary**:

```python
{"subject": "Maths", "hours": 2.0}
```

So our store is a **list of dictionaries** — a list where every item is a little labelled record:

```python
sessions = [
    {"subject": "Maths", "hours": 2.0},
    {"subject": "English", "hours": 1.5},
]
```

We start it **empty** and fill it as the user logs sessions. Add this line at the very **top** of your file, above your functions:

```python
# Each session is a dictionary: {"subject": <text>, "hours": <number>}
sessions = []
```

> 💡 **Why at the top?** The list lives above the functions so that EVERY feature can reach it — the Log feature adds to it, the View feature reads from it. It's the shared memory of your whole app.

✅ **Zoom checkpoint:** Add `sessions = []` and run. No error? The store is ready. 👍

---

## 🔨 Part 3: Build the "Log Study Session" Feature

Time to replace the empty `log_session()` stub with a real one. It needs to:

1. Ask for a **subject** (text)
2. Ask for **hours** (a number — so we use `float()`)
3. **Save** them as a dictionary in our `sessions` list
4. **Confirm** with a friendly message

Here it is:

```python
def log_session():
    try:
        subject = input("What subject did you study? ")
        hours = float(input("How many hours? "))
        sessions.append({"subject": subject, "hours": hours})
        print(f"✅ Logged {hours} hours of {subject}!")
    except ValueError:
        print("⚠️ Hours must be a number, e.g. 1.5. Session not saved.")
```

### 🔎 Reading it line by line

- `subject = input(...)` — grabs the subject as text (text is fine here).
- `hours = float(input(...))` — grabs the hours and turns the text into a real number. We need a number so that later sprints can add hours up and chart them.
- `sessions.append({...})` — builds a dictionary with the two pieces and **appends** it to the list. `.append()` adds one new item to the end.
- The `try` / `except` is our **safety net** (remember it from Term 1!). If someone types "two" instead of `2`, `float()` throws a `ValueError` — and instead of crashing, we catch it and print a calm warning.

**Example run:**
```
What subject did you study? Maths
How many hours? 2
✅ Logged 2.0 hours of Maths!
```

> 💡 Notice `2` became `2.0`. That's `float()` doing its job — it stored a real number, not the text `"2"`. That difference matters a LOT for the stats feature coming in a later sprint.

✅ **Zoom checkpoint:** Pick 1 from the menu, log a subject and hours, and see the ✅ message. Now try typing "banana" for hours — do you get the calm warning instead of a crash? 👍

---

## 👀 Part 4: Build the "View Sessions" Feature

Logging is only half the job — the user needs to **see** what they logged. Replace the `view_sessions()` stub:

```python
def view_sessions():
    if len(sessions) == 0:
        print("No sessions logged yet. Pick 1 to log your first one!")
    else:
        print("📚 Your study sessions so far:")
        for session in sessions:
            print(f"  - {session['subject']}: {session['hours']} hours")
```

### 🔎 Reading it line by line

- `if len(sessions) == 0:` — first we check if the list is **empty**. If it is, we say so kindly instead of printing nothing.
- `for session in sessions:` — otherwise we **loop** through every dictionary in the list. Each time around, `session` is one record.
- `session['subject']` and `session['hours']` — we pull the labelled parts out of the dictionary using their keys.

> 💡 **Watch the quotes!** Inside an f-string that uses double quotes `"..."`, we use **single** quotes for the dictionary key: `{session['subject']}`. Mixing them like this keeps Python happy.

**Example run** (after logging two sessions):
```
📚 Your study sessions so far:
  - Maths: 2.0 hours
  - English: 1.5 hours
```

✅ **Zoom checkpoint:** Log two sessions, then pick 2. Do you see BOTH listed? And if you pick 2 *before* logging anything, do you see the friendly "no sessions yet" message? 👍

---

## 🧍 Part 5: STAND-UP — Say What You Built

Real dev teams pause every day for a quick **stand-up**: everyone says what they built and what's blocking them. Let's do ours now.

In the **Zoom chat**, post exactly two lines:

```
Built: ___________________________
Blocker: _________________________
```

For example:
```
Built: Log + View both working, logged 3 sessions!
Blocker: my View shows the word "hours" twice, not sure why
```

> 🧍 **No blocker? Brilliant — write "nothing, flying!"** A blocker isn't a failure; naming it out loud is how it gets solved. Your teacher will read these and help. Blockers you don't fix today go straight into next week's **Debugging Clinic**.

---

## ✅ Part 6: Study Buddy So Far — The Whole File

Here's the complete Study Buddy after Build Sprint 1. Two features work; two are still friendly stubs waiting for later sprints:

```python
# 📚 Y2-T8-Capstone — Study Buddy
# Made by: [YOUR NAME]

# Each session is a dictionary: {"subject": <text>, "hours": <number>}
sessions = []

def log_session():
    try:
        subject = input("What subject did you study? ")
        hours = float(input("How many hours? "))
        sessions.append({"subject": subject, "hours": hours})
        print(f"✅ Logged {hours} hours of {subject}!")
    except ValueError:
        print("⚠️ Hours must be a number, e.g. 1.5. Session not saved.")

def view_sessions():
    if len(sessions) == 0:
        print("No sessions logged yet. Pick 1 to log your first one!")
    else:
        print("📚 Your study sessions so far:")
        for session in sessions:
            print(f"  - {session['subject']}: {session['hours']} hours")

def motivation_tip():
    print("(Motivation tip — coming in a later sprint!)")

def quiz_me():
    print("(Quiz me — coming in a later sprint!)")

def show_menu():
    print()
    print("=" * 40)
    print("        📚 STUDY BUDDY 📚")
    print("=" * 40)
    print("  1. Log study session")
    print("  2. View sessions")
    print("  3. Motivation tip")
    print("  4. Quiz me")
    print("  5. Quit")
    print("=" * 40)

def main():
    running = True
    while running:
        show_menu()
        choice = input("Enter a choice (1-5): ")
        if choice == "1":
            log_session()
        elif choice == "2":
            view_sessions()
        elif choice == "3":
            motivation_tip()
        elif choice == "4":
            quiz_me()
        elif choice == "5":
            print("Goodbye! Keep studying! 👋")
            running = False
        else:
            print("❌ Not a valid choice. Please pick 1-5.")

main()
```

🎉 **One feature, fully working.** That's a successful sprint. Save your Trinket!

---

## 🎯 Part 7: Your Turn — Build YOUR Core Feature

Study Buddy was the demo. Now build the **first must-have feature of your OWN capstone**. Use the exact same recipe:

| Step | Study Buddy | Your project |
|---|---|---|
| 1. A list to store data | `sessions = []` | your list |
| 2. A function that ADDS to it | `log_session()` | your "add" feature |
| 3. A function that VIEWS it | `view_sessions()` | your "view" feature |
| 4. Wire both to the menu | choices 1 and 2 | your menu choices |

**Ideas, depending on your project:**
- 🎮 A quiz game → a `questions` list; add a question; list them all
- 📝 A to-do app → a `tasks` list; add a task; view the list
- 🍽️ A recipe box → a `recipes` list of dicts; add one; view them
- 💰 A pocket-money tracker → a `spending` list of dicts (item + amount)

Pick your ONE must-have feature and build it end to end. Add something, view it back. That's the sprint. 🏃‍♂️

---

## ⚠️ Common Mistakes

**Mistake 1: Appending before you create the list**

❌ Wrong — there's no `sessions` list yet, so `.append()` has nothing to add to:
```python
def log_session():
    sessions.append({"subject": "Maths", "hours": 2.0})
```
```
NameError: name 'sessions' is not defined
```

✅ Correct — create the empty list at the top of the file FIRST:
```python
sessions = []      # this must exist before any append!

def log_session():
    sessions.append({"subject": "Maths", "hours": 2.0})
```

---

**Mistake 2: Storing hours as text instead of a number**

❌ Wrong — no `float()`, so `hours` is the *text* `"2"`, not the number `2`:
```python
hours = input("How many hours? ")      # stores "2" (text!)
```
This looks fine today — but a later sprint adds up your hours, and text doesn't add like numbers:
```python
print("2" + "3")     # 👉 23  (glued text, NOT 5!)
```

✅ Correct — convert to a real number with `float()`:
```python
hours = float(input("How many hours? "))   # stores 2.0 (a number!)
```

---

**Mistake 3: Comparing the menu choice as a number**

❌ Wrong — `input()` gives TEXT, so `choice` is `"1"`, never the number `1`. This branch never runs:
```python
choice = input("Enter a choice (1-5): ")
if choice == 1:            # 1 is a number; choice is text "1"
    log_session()
```
The menu just does nothing (or jumps to the `else`). Very confusing!

✅ Correct — compare text to text, with quotes:
```python
if choice == "1":          # text == text ✅
    log_session()
```

---

**Mistake 4: Wrong quotes on a dictionary key inside an f-string**

❌ Wrong — double quotes inside a double-quoted f-string end the string early:
```python
print(f"  - {session["subject"]}")
```
```
SyntaxError: invalid syntax
```

✅ Correct — use single quotes for the key inside the double-quoted f-string:
```python
print(f"  - {session['subject']}")
```

---

## 🌟 What's Coming Next Week?

Next week is **Week 4: Build Sprint 2 + Debugging Clinic!** 🐛🔧

- 🏃‍♂️ **Build Sprint 2** — you'll add your capstone's SECOND feature
- 🩺 **Debugging Clinic** — bring the blocker from your stand-up (or homework) and we'll fix real bugs together, live
- 🧠 You'll learn a pro habit: how to describe a bug clearly so anyone can help you

> Bring your `Y2-T8-Capstone` Trinket with its first feature working — AND bring your blockers. A bug you can't crack alone is exactly what the clinic is for. Nobody debugs alone here!

---

## 🏆 Today's Achievements

- ✅ You learned what a **build sprint** is — one finished feature beats ten half-built ones
- ✅ You created a **list of dictionaries** to store real records
- ✅ You turned a **stub** into a working **Log study session** feature
- ✅ You used **`try` / `except`** and **`float()`** to take a number safely
- ✅ You **looped** through your data to build the **View sessions** feature
- ✅ You ran a real dev **stand-up** — and your capstone's first feature WORKS!

> *"Look at that! Yesterday it was an empty stub. Today it stores real data and shows it back. That's not a toy — that's a working feature in a real program that YOU are building. This is exactly how every app you've ever used got started: one working feature at a time. Two sprints down the line, this thing is going to feel like magic. Sprint one: DONE."*
> — BrightByte 🤖🏃‍♂️

---

## 📚 Homework: Finish Your First Must-Have Feature ✨

This week's mission: make your capstone's **first must-have feature actually work**, end to end.

**Requirements:**
1. Open your **`Y2-T8-Capstone`** Trinket
2. Your project has a **list** (or dictionary) that stores the feature's data
3. One menu option **adds** data (with a `try`/`except` guard if it takes a number)
4. One menu option **views** the data with a loop
5. Test it: add two things, then view them. Then quit cleanly.

**Challenge tiers:**
- ⭐ One feature adds data and one views it — no crashes
- ⭐⭐ The add feature validates its input with `try`/`except`
- ⭐⭐⭐ The view feature shows a small summary too (e.g. a count, or a total)

> 💡 **Stuck on a blocker?** Write it down and bring it to Week 4 — that's our **Debugging Clinic**! A working first feature is a HUGE win.

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You stopped planning and started building. One feature, fully alive. That's what real developers do — see you at Sprint 2! 🏃‍♂️🔨*
