---
title: "Build Sprint 2 + Debugging Clinic 🏃‍♀️🔧"
description: "Add a SECOND feature to your capstone — build Study Buddy's stats and text bar chart — then learn a systematic way to read errors, isolate bugs, and squash them"
difficulty: "intermediate"
order_index: 4
course_slug: "year2-term-8-capstone"
is_premium: false
requires_trinket: true
starter_code: |
  # Y2-T8-Capstone — Study Buddy 🧠📚
  # Where we are: Sprint 1 is DONE — logging study sessions works!
  # Today (Sprint 2): build the "View stats & chart" feature.

  sessions = []   # each item is a dict: {"subject": str, "hours": float}


  def show_menu():
      print()
      print("=" * 32)
      print("   📚 STUDY BUDDY 📚")
      print("=" * 32)
      print("1. Log study session")
      print("2. View stats & chart")
      print("3. Motivation tip")
      print("4. Quiz me")
      print("5. Quit")
      print("=" * 32)


  def log_session():
      """Sprint 1 — this already works."""
      subject = input("What subject did you study? ")
      hours = float(input("How many hours? "))
      sessions.append({"subject": subject, "hours": hours})
      print(f"✅ Logged {hours} hours of {subject}!")


  def view_stats():
      """Sprint 2 — YOUR job today! Build it one TODO at a time."""
      # TODO 0: Guard against an EMPTY log (never divide by zero!)
      #         if len(sessions) == 0: print a message and return

      # TODO 1: List every session (loop over sessions)

      # TODO 2: total = sum of all hours;  average = total / len(sessions)

      # TODO 3: Build a tally dict:  subject -> total hours

      # TODO 4: Draw a text bar chart —  "█" * int(hours)   (INT, not float!)
      print("🚧 View stats & chart — under construction!")


  # ---- Main program loop ----
  running = True
  while running:
      show_menu()
      choice = input("Choose 1-5: ")

      if choice == "1":
          log_session()
      elif choice == "2":
          view_stats()
      elif choice == "5":
          print("👋 Keep studying, superstar!")
          running = False
      else:
          print("❓ Please choose a number from 1 to 5.")
solution_code: |
  # Y2-T8-Capstone — Study Buddy 🧠📚
  # Progress: Sprint 1 (Log) + Sprint 2 (View stats & chart) COMPLETE!

  sessions = []   # each item is a dict: {"subject": str, "hours": float}


  def show_menu():
      print()
      print("=" * 32)
      print("   📚 STUDY BUDDY 📚")
      print("=" * 32)
      print("1. Log study session")
      print("2. View stats & chart")
      print("3. Motivation tip")
      print("4. Quiz me")
      print("5. Quit")
      print("=" * 32)


  def log_session():
      """Sprint 1 — records one study session into the list."""
      subject = input("What subject did you study? ")
      hours = float(input("How many hours? "))
      sessions.append({"subject": subject, "hours": hours})
      print(f"✅ Logged {hours} hours of {subject}!")


  def view_stats():
      """Sprint 2 — totals, average, a per-subject tally and a bar chart."""
      # Guard: an empty log means no maths to do (this stops divide-by-zero!)
      if len(sessions) == 0:
          print("📭 No sessions logged yet. Choose option 1 first!")
          return

      # 1) List every session
      print("\n--- Your study log ---")
      for s in sessions:
          print(f"  • {s['subject']}: {s['hours']} hours")

      # 2) Totals and average
      total = sum(s["hours"] for s in sessions)
      average = total / len(sessions)          # safe: len is at least 1 here
      print(f"\nTotal hours studied: {total}")
      print(f"Average per session: {average:.1f} hours")

      # 3) Tally hours per subject into a dict
      tally = {}
      for s in sessions:
          subject = s["subject"]
          tally[subject] = tally.get(subject, 0) + s["hours"]

      # 4) Text bar chart (from Term 7!) — one block per hour, scaled with int()
      print("\n--- Hours per subject ---")
      biggest = max(tally.values())
      block = 1
      if biggest > 20:                 # scale down so long bars still fit
          block = biggest / 20
      for subject, hours in tally.items():
          length = int(hours / block)  # "█" needs a WHOLE number — an int!
          bar = "█" * length
          print(f"{subject:<10}| {bar} {hours}")


  def motivation_tip():
      # Coming in a future sprint — this is a feature YOU could add.
      print("💡 Motivation tips — coming in a future sprint!")


  def quiz_me():
      # Coming in a future sprint — this is a feature YOU could add.
      print("🧠 Quiz me — coming in a future sprint!")


  # ---- Main program loop ----
  running = True
  while running:
      show_menu()
      choice = input("Choose 1-5: ")

      if choice == "1":
          log_session()
      elif choice == "2":
          view_stats()
      elif choice == "3":
          motivation_tip()
      elif choice == "4":
          quiz_me()
      elif choice == "5":
          print("👋 Keep studying, superstar!")
          running = False
      else:
          print("❓ Please choose a number from 1 to 5.")
class_activities: |
  ## 🎮 Class Activity: Sprint 2 + The Bug Clinic 🏃‍♀️🔧

  ### Part A — Build Sprint 2: Stats & Chart (⭐ → ⭐⭐⭐)

  Open your capstone Trinket (`Y2-T8-Capstone`) and build your SECOND feature. If you're following Study Buddy, build **View stats & chart** step by step:

  - ⭐ Guard the empty log, then print the **total hours** and the **average per session**
  - ⭐⭐ Add a **tally dict** (`subject -> total hours`) and print it
  - ⭐⭐⭐ Turn the tally into a **text bar chart** with `"█" * int(hours)`, aligned labels, and scaling for big values

  Log two or three sessions first, then choose option 2 and watch your stats appear. **Thumbs up** in Zoom when your chart draws!

  ### Part B — The Bug Clinic 🔧

  Now we debug together, out loud.

  1. Your teacher shares a broken snippet on screen. As a class, we run **the 5-step method**: READ → REPRODUCE → ISOLATE → FIX → RE-TEST.
  2. **Your turn:** paste ONE bug from your own capstone into the **Zoom chat** — the exact red error message AND the line it points to.
  3. We pick a few together and debug them live. First person to spot the fix types it in the chat!

  > 🩺 **Clinic rule:** always paste the *last line* of the error (the bit after the arrows). That line names the bug type — it's the doctor's diagnosis.
take_home_assignment: |
  ## 📚 Homework: Feature Two + Bug Report

  Keep building your capstone!

  **Requirements:**
  1. Add your capstone's **SECOND feature** so it actually works (Study Buddy builders: finish **View stats & chart**)
  2. **Test it** with at least two different inputs — including the tricky "empty" case (view stats before logging anything: it must NOT crash)
  3. **Squash at least one bug** you find along the way
  4. Write a short **Bug Report** as a comment at the top of your file:
     ```python
     # BUG REPORT
     # What went wrong: ______
     # The error said: ______ (the last line of the red message)
     # How I fixed it: ______
     ```

  **Challenge tiers:**
  - ⭐ Second feature works and you noted one bug you fixed
  - ⭐⭐ Feature is guarded against empty/odd input, and your bug report names the error TYPE (e.g. TypeError)
  - ⭐⭐⭐ You used `print()` checks to isolate the bug and explained in your report exactly which value was wrong

  **Submit:** Save your Trinket (`Y2-T8-Capstone`), click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Chat: Even AI Code Has Bugs

  Here's a secret every professional knows: **code written by an AI assistant still has bugs.** AI can suggest a function in seconds — but it can't run YOUR program with YOUR inputs, so it can't see the crash you see.

  **Discuss in the Zoom chat (2 minutes):**
  - If an AI gave you code that crashed with a `KeyError`, what would you do FIRST? (Hint: read the error!)
  - Why is it YOUR job — not the AI's — to test the code and confirm it really works?

  > The debugging method you learned today works on *any* code — code you wrote, code a friend wrote, code an AI wrote. That's why it's a superpower for life.
---

# Year 2, Lesson 4: Build Sprint 2 + Debugging Clinic 🏃‍♀️🔧

**Course:** Capstone & Portfolio
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

- How to add a **second feature** to your capstone without breaking the first one
- How to build **Study Buddy's stats screen**: total hours, average per session, and a per-subject tally
- How to draw a **text bar chart** with `"█"` (straight from Term 7!)
- A **5-step debugging method** that works on ANY error
- How to **read an error message** — the type, the meaning, and the fix
- The most common Year 2 bugs and how to squash them fast

---

## 🤖 BrightByte Kicks Off the Clinic

> *"Sprint 1 got your capstone LOGGING data. Nice. But data just sitting in a list is boring — today we make it TALK. Totals! Averages! A chart made of little blocks! And then... the part every real programmer secretly loves: DEBUGGING. Because here's the truth nobody tells beginners — code breaks. All the time. For everyone. The difference between a beginner and a pro isn't that pros don't get bugs. It's that pros know exactly what to do when they do. Today, you become a pro."*
> — BrightByte 🤖🔧

---

## 🏃‍♀️ Part 1: Build Sprint 2 — Making Data Talk

Last week (Sprint 1) you got the **Log** feature working. Study Buddy can now store study sessions in a list of dicts:

```python
sessions = [
    {"subject": "Maths", "hours": 2.0},
    {"subject": "Science", "hours": 1.5},
    {"subject": "Maths", "hours": 3.0},
]
```

Today's mission: **View stats & chart** (menu option 2). We'll build it in four small steps — one at a time, testing after each. That's how real features get built: never all at once.

### Step 0 — Guard the Empty Log (do this FIRST!)

What happens if a student opens Study Buddy and chooses "View stats" *before logging anything*? The list is empty. If we try to work out the average, we divide by **zero** — and Python crashes:

```
ZeroDivisionError: division by zero
```

So the very first line of the feature is a **guard**:

```python
def view_stats():
    if len(sessions) == 0:
        print("📭 No sessions logged yet. Choose option 1 first!")
        return
    # ...the rest only runs when there IS data
```

`return` means "stop this function here and go back to the menu." No data, no maths, no crash. 🛡️

### Step 1 — List the Sessions

```python
    print("\n--- Your study log ---")
    for s in sessions:
        print(f"  • {s['subject']}: {s['hours']} hours")
```

Notice the quotes: `s['subject']` uses **single quotes inside** the double-quoted f-string. Mixing them up is a classic bug — we'll meet it in the clinic!

### Step 2 — Total and Average

You already know `sum()` and division from Term 7:

```python
    total = sum(s["hours"] for s in sessions)
    average = total / len(sessions)
    print(f"\nTotal hours studied: {total}")
    print(f"Average per session: {average:.1f} hours")
```

Because Step 0 guaranteed the list isn't empty, `len(sessions)` is at least 1 — so this division is **always safe**. That's why the guard came first.

The `:.1f` rounds the average to **1 decimal place** — so `2.1666...` prints as `2.2`. Much tidier!

### Step 3 — Tally Hours per Subject

A **tally** counts how much belongs to each category. We loop through the sessions and add each one's hours into a dict:

```python
    tally = {}
    for s in sessions:
        subject = s["subject"]
        tally[subject] = tally.get(subject, 0) + s["hours"]
```

`tally.get(subject, 0)` means "the total so far for this subject, or **0** if we haven't seen it yet." That `0` default is what stops a `KeyError` on the first time we meet a new subject.

For the sessions above, `tally` becomes:

```python
{"Maths": 5.0, "Science": 1.5}
```

### Step 4 — The Text Bar Chart 📊

Straight from Term 7! One block `█` per hour. But there's a rule: **you can only multiply a string by a whole number (an `int`)** — never a `float`. So we convert:

```python
    print("\n--- Hours per subject ---")
    biggest = max(tally.values())
    block = 1
    if biggest > 20:            # scale down so long bars still fit
        block = biggest / 20
    for subject, hours in tally.items():
        length = int(hours / block)   # int() — a whole number of blocks!
        bar = "█" * length
        print(f"{subject:<10}| {bar} {hours}")
```

`f"{subject:<10}"` pads each label to 10 characters so the bars line up neatly (Term 7 padding trick).

### 🎬 Let's Run It

Log Maths 2.0, Science 1.5, then Maths 3.0 — and choose option 2:

```
--- Your study log ---
  • Maths: 2.0 hours
  • Science: 1.5 hours
  • Maths: 3.0 hours

Total hours studied: 6.5
Average per session: 2.2 hours

--- Hours per subject ---
Maths     | █████ 5.0
Science   | █ 1.5
```

Your data just became a picture. 🎉 **Feature two: complete.**

---

## 🔧 Part 2: The Debugging Method

Every programmer on Earth writes bugs. What makes you good is knowing the **method** to hunt them. Memorise these five steps:

> ### The 5-Step Bug Hunt 🕵️
> 1. **READ** the error — *which line?* *what type?*
> 2. **REPRODUCE** — run it again the same way to confirm the crash
> 3. **ISOLATE** — add `print()` checks to see the values just before it breaks
> 4. **FIX** — change ONE thing
> 5. **RE-TEST** — run again; if it's gone, remove your debug prints ✅

### Reading an Error Message

When Python crashes, always read from the **BOTTOM up**. The last line is the diagnosis:

```
Traceback (most recent call last):
  File "main.py", line 12, in <module>
    average = total / len(sessions)
ZeroDivisionError: division by zero
```

- The **last line** = the error **type** and message (`ZeroDivisionError: division by zero`)
- The **line above it** = the exact code that broke (`average = total / ...`)
- `line 12` = *where* to look

Two clues, every time: **what kind** of bug and **where** it is.

### Your Error-Type Cheat Sheet

| Error type | What it means | Common cause | How to fix |
|---|---|---|---|
| `NameError` | Python doesn't recognise a name | Typo, or used before it's created | Check spelling; define it first |
| `TypeError` | Wrong *type* for this operation | `"█" * 2.5`, or `"3" + 1` | Convert types: `int()` / `float()` / `str()` |
| `KeyError` | That key isn't in the dict | Wrong key name, or key not added yet | Fix the key name, or use `.get(key, default)` |
| `IndentationError` | Spacing is wrong | Missing/extra indent after `:` | Line up your indents (4 spaces) |
| `ZeroDivisionError` | Divided by zero | Average of an empty list | Guard: check `len(...) == 0` first |
| `ValueError` | Right type, impossible value | `int("hello")` | Check the input before converting |

---

## 🩺 Part 3: Bug Clinic — Four Real Cases

Let's diagnose four bugs you'll actually meet in your capstone. Read the error, then the fix.

### 🐛 Case 1 — The Chart Won't Draw (`TypeError`)

```python
bar = "█" * hours     # hours is 2.5
```
```
TypeError: can't multiply sequence by non-int of type 'float'
```

**Diagnosis:** you can repeat a string a *whole* number of times, but not 2.5 times. **Fix:** wrap it in `int()`.

```python
bar = "█" * int(hours)   # ✅ 2.5 becomes 2 blocks
```

### 🐛 Case 2 — Stats Crash on an Empty Log (`ZeroDivisionError`)

```python
average = total / len(sessions)   # sessions is empty!
```
```
ZeroDivisionError: division by zero
```

**Diagnosis:** an empty list has length 0, and dividing by 0 is impossible. **Fix:** the guard from Step 0.

```python
if len(sessions) == 0:
    print("No sessions yet!")
    return
```

### 🐛 Case 3 — The Wrong Dict Key (`KeyError`)

```python
for s in sessions:
    print(s["subjects"])    # oops — the key is "subject", not "subjects"
```
```
KeyError: 'subjects'
```

**Diagnosis:** the dicts store `"subject"` (no *s*), so `"subjects"` doesn't exist. **Fix:** use the exact key name.

```python
print(s["subject"])   # ✅
```

### 🐛 Case 4 — A Typo in a Name (`NameError`)

```python
for s in sesions:      # missing an 's' in "sessions"
    total = total + s["hours"]
```
```
NameError: name 'sesions' is not defined
```

**Diagnosis:** Python has never heard of `sesions` — it's a typo. **Fix:** spell it exactly as you defined it.

```python
for s in sessions:     # ✅
```

### 🔦 The ISOLATE Trick

Stuck on WHY a value is wrong? Print it just before the crash:

```python
print("DEBUG: sessions =", sessions)   # what's really in there?
print("DEBUG: total =", total)
average = total / len(sessions)
```

Seeing the real values almost always reveals the bug instantly. Remove the DEBUG lines once it's fixed. 🔦

---

## ⚠️ Common Mistakes (Bugs That Bite Everyone)

**Mistake 1: Multiplying a string by a float**

❌ Wrong:
```python
hours = 2.5
print("█" * hours)
```
```
TypeError: can't multiply sequence by non-int of type 'float'
```

✅ Correct:
```python
hours = 2.5
print("█" * int(hours))
```

---

**Mistake 2: Dividing by an empty list's length**

❌ Wrong — no guard:
```python
sessions = []
average = sum(s["hours"] for s in sessions) / len(sessions)
```
```
ZeroDivisionError: division by zero
```

✅ Correct — guard first:
```python
if len(sessions) == 0:
    print("No sessions yet!")
    return
average = sum(s["hours"] for s in sessions) / len(sessions)
```

---

**Mistake 3: A wrong (or misspelled) dictionary key**

❌ Wrong:
```python
s = {"subject": "Maths", "hours": 2.0}
print(s["Subject"])   # capital S — different key!
```
```
KeyError: 'Subject'
```

✅ Correct:
```python
print(s["subject"])   # exact match, lowercase
```

> Dictionary keys are **case-sensitive**, just like variable names. `"subject"` and `"Subject"` are two different keys!

---

## 🎮 Class Activity: Sprint 2 + The Bug Clinic

### Part A — Build Sprint 2 (⭐ → ⭐⭐⭐)

In your `Y2-T8-Capstone` Trinket, build your **second feature**. Study Buddy builders finish **View stats & chart**:

- ⭐ Guard the empty log, then print **total** and **average** hours
- ⭐⭐ Add the **tally dict** and print it
- ⭐⭐⭐ Draw the **bar chart** with `"█" * int(hours)`, aligned labels, and scaling

Log a few sessions, choose option 2, and **thumbs up** in Zoom when your chart appears! 👍

### Part B — The Bug Clinic 🔧

1. Your teacher shares a broken snippet. Together we run the **5-step method** out loud.
2. **Your turn:** paste ONE bug from your own capstone in the **Zoom chat** — the last line of the red error AND the line number.
3. We debug a few together, live. First to spot the fix types it in chat!

> 🩺 **Clinic rule:** always paste the *last line* of the error. That line names the bug type — it's the diagnosis.

---

## 🌟 What's Coming Next Week?

**Week 5: Build Sprint 3 — Add the Wow! ✨**

Your capstone works. Next week we make it *impressive*. This is where Study Buddy grows a **Motivation tip** and a **Quiz me** feature — the "wow" touches that make people smile when they use your program. We'll use everything from Year 2: random choices, loops, lists, and clever formatting. Bring your best ideas for what would make YOUR project unforgettable!

---

## 🏆 Today's Achievements

- ✅ You added a **second feature** to your capstone
- ✅ You built totals, an average, and a per-subject **tally**
- ✅ You drew a **text bar chart** with `"█" * int(...)`
- ✅ You **guarded** against dividing by zero on an empty log
- ✅ You learned the **5-step debugging method**
- ✅ You can read an error and name the **type** — NameError, TypeError, KeyError, and more

> *"Look at what happened today. You made data speak, AND you learned to fix broken code without panicking. That second skill? It'll carry you further than any single feature ever could. Bugs don't scare you anymore — they're just puzzles now. That's a programmer's mindset. Proud of you."*
> — BrightByte 🤖🔧

---

## 📚 Homework: Feature Two + Bug Report

Keep building your capstone!

**Requirements:**
1. Add your capstone's **SECOND feature** so it works (Study Buddy: finish **View stats & chart**)
2. **Test it** with two different inputs — including the empty case (view stats before logging: it must NOT crash)
3. **Squash at least one bug** you find
4. Write a **Bug Report** comment at the top of your file:
   ```python
   # BUG REPORT
   # What went wrong: ______
   # The error said: ______ (the last line of the red message)
   # How I fixed it: ______
   ```

**Challenge tiers:**
- ⭐ Second feature works and you noted one bug you fixed
- ⭐⭐ Feature is guarded against empty/odd input, and your report names the error TYPE
- ⭐⭐⭐ You used `print()` checks to isolate the bug and explained which value was wrong

**Submit:** Save your Trinket (`Y2-T8-Capstone`), click **Share**, copy the link, and paste it wherever your teacher asks.

---

*Two features down, and you can squash bugs like a pro. Next week — we add the WOW. See you there! 🏃‍♀️🔧*
