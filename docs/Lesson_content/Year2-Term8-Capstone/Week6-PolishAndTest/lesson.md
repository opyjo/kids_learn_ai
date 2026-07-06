---
title: "Polish & Test 💅🧪"
description: "Take your capstone from 'it works for me' to 'it works for ANYONE' — run user testing with a classmate, hunt down edge-case crashes, add a welcome screen, and comment your code kindly for future-you"
difficulty: "intermediate"
order_index: 6
course_slug: "year2-term-8-capstone"
is_premium: false
requires_trinket: true
starter_code: |
  # 📚 Y2-T8-Capstone — Study Buddy (needs polishing!)
  # Made by: [YOUR NAME]
  # It works for ME... but does it work for ANYONE?
  # Today we test it, break it, and polish it. Hunt the 💥 marks below!

  import random

  sessions = []

  TIPS = [
      "Short breaks help your brain remember more.",
      "Explaining a topic out loud helps you learn it.",
      "A little every day beats a lot in one panic.",
  ]

  def log_session():
      subject = input("What subject did you study? ")
      minutes = int(input("How many minutes? "))   # 💥 crashes if they type "ten"
      sessions.append({"subject": subject, "minutes": minutes})
      print("Logged!")

  def view_sessions():
      for s in sessions:                            # 💥 shows nothing (and no message) when empty
          print(s["subject"], s["minutes"])

  def show_stats():
      total = 0
      for s in sessions:
          total += s["minutes"]
      average = total / len(sessions)               # 💥 divide by zero when there are no sessions
      print("Total:", total)
      print("Average:", average)

  def motivation_tip():
      print(random.choice(TIPS))

  def quiz():
      answer = input("What symbol starts a comment in Python? ")
      if answer == "#":
          print("Correct!")
      else:
          print("Nope!")

  def main():
      while True:
          print("1. Log  2. View  3. Stats  4. Tip  5. Quiz  6. Quit")
          choice = input("Choose: ")
          if choice == "1":
              log_session()
          elif choice == "2":
              view_sessions()
          elif choice == "3":
              show_stats()
          elif choice == "4":
              motivation_tip()
          elif choice == "5":
              quiz()
          elif choice == "6":
              break
          # 💥 what if they type "banana"? Nothing happens and they're confused

  main()
solution_code: |
  # 📚 Y2-T8-Capstone — Study Buddy (POLISHED ✨)
  # Made by: [YOUR NAME]
  # What it does: logs your study sessions, lists them, draws a bar chart
  # of your time, gives a motivation tip, and runs a quick self-quiz.
  # Polished so it never crashes — even on empty data or silly input.

  import random  # standard library — used to pick a random motivation tip

  # --- Our data store ---
  # Each session is a dictionary: {"subject": ..., "minutes": ...}
  # One shared list so View, Stats and Chart all read from the same place.
  sessions = []

  # A few motivation tips. We pick one at random so it feels fresh each time.
  TIPS = [
      "Short breaks help your brain remember more. Try 25 min on, 5 off.",
      "Explaining a topic out loud is one of the best ways to learn it.",
      "A little every day beats a lot in one panic — well done for showing up!",
      "Stuck? Write down the exact thing that confuses you — that's half the fix.",
      "Sleep is study too. A rested brain remembers far more.",
  ]


  def ask_int(question, minimum=1):
      """Ask a question until the user gives a whole number that is big enough.
      WHY a loop: one silly answer should never crash the whole program."""
      while True:
          answer = input(question)
          try:
              number = int(answer)          # this line trips on "ten" — try/except catches it
          except ValueError:
              print("❌ Please type a whole number, like 30.")
              continue                      # go back and ask again
          if number < minimum:
              print(f"❌ Please type {minimum} or more.")
              continue
          return number


  def log_session():
      """Feature 1: add one study session to our list."""
      subject = input("What subject did you study? ").strip()
      # WHY: an empty subject makes the chart look broken, so give it a name.
      if subject == "":
          subject = "Unnamed"
      minutes = ask_int("How many minutes? ", minimum=1)
      sessions.append({"subject": subject, "minutes": minutes})
      print(f"✅ Logged {minutes} min of {subject}. Keep it up!")


  def view_sessions():
      """Feature 2: list every session we've logged."""
      # GUARD: with no sessions there is nothing to show — say so and leave.
      if len(sessions) == 0:
          print("📭 No sessions yet. Choose 1 to log your first one!")
          return
      print("--- Your Study Sessions ---")
      for i, s in enumerate(sessions, start=1):
          print(f"{i}. {s['subject']} — {s['minutes']} min")


  def show_stats():
      """Feature 3: totals plus a simple bar chart of minutes per subject."""
      # GUARD: the average divides by the number of sessions. With zero
      # sessions that is divide-by-zero, so we stop early with a kind message.
      if len(sessions) == 0:
          print("📭 No data yet — log a session first, then check your stats!")
          return

      total = 0
      for s in sessions:
          total += s["minutes"]
      average = total / len(sessions)   # safe: we already know len > 0

      print("--- Your Stats ---")
      print(f"Sessions logged : {len(sessions)}")
      print(f"Total time      : {total} min")
      print(f"Average session : {average:.1f} min")

      # Add up minutes per subject into a dictionary for the chart.
      totals_by_subject = {}
      for s in sessions:
          subject = s["subject"]
          totals_by_subject[subject] = totals_by_subject.get(subject, 0) + s["minutes"]

      print("--- Time Chart (each █ = 10 min) ---")
      for subject, minutes in totals_by_subject.items():
          bars = "█" * (minutes // 10)   # whole blocks only
          # WHY: a short session rounds down to zero blocks, so show a dot.
          if bars == "":
              bars = "·"
          print(f"{subject:<12} | {bars} {minutes} min")


  def motivation_tip():
      """Feature 4: one random encouraging tip."""
      print("💡 " + random.choice(TIPS))


  def quiz():
      """Feature 5: a quick 3-question self-quiz."""
      questions = [
          {"q": "What symbol starts a comment in Python? ", "a": "#"},
          {"q": "What keyword repeats code a set number of times? ", "a": "for"},
          {"q": "What function asks the user a question? ", "a": "input"},
      ]
      score = 0
      for item in questions:
          # .strip().lower() forgives spaces and CAPITALS so testers aren't punished
          answer = input(item["q"]).strip().lower()
          if answer == item["a"]:
              print("✅ Correct!")
              score += 1
          else:
              print(f"❌ Not quite — the answer is: {item['a']}")
      print(f"🏁 You scored {score} out of {len(questions)}!")


  def show_welcome():
      """A friendly welcome screen with instructions — the first thing users see."""
      print("=" * 42)
      print("         📚 WELCOME TO STUDY BUDDY 📚")
      print("=" * 42)
      print("I track your study time, chart your progress,")
      print("keep you motivated, and quiz you.")
      print("👉 Tip: log a session first, then view your stats!")
      print("=" * 42)


  def show_menu():
      """Print the menu fresh each time round the loop."""
      print()
      print("=" * 42)
      print("            📚 STUDY BUDDY MENU 📚")
      print("=" * 42)
      print("  1. Log a study session")
      print("  2. View my sessions")
      print("  3. Stats & chart")
      print("  4. Motivation tip")
      print("  5. Take a quick quiz")
      print("  6. Quit")
      print("=" * 42)


  def main():
      show_welcome()
      running = True
      while running:
          show_menu()
          choice = input("Choose (1-6): ").strip()   # .strip() forgives stray spaces
          if choice == "1":
              log_session()
          elif choice == "2":
              view_sessions()
          elif choice == "3":
              show_stats()
          elif choice == "4":
              motivation_tip()
          elif choice == "5":
              quiz()
          elif choice == "6":
              print("👋 Goodbye — happy studying!")
              running = False
          else:
              # GUARD: any other input (including "banana") lands here — no crash.
              print("❌ Please choose a number from 1 to 6.")


  main()
class_activities: |
  ## 🧪 Class Activity: Break My Program! (Paired User Testing)

  Real software is never released until someone OTHER than the author has tried to break it. Today, you ARE that someone.

  ### Set-up (in Zoom breakout pairs)
  1. Pair up. Swap Trinket **Share links** in the chat (or share your screen).
  2. Open your partner's program and run it.

  ### Round 1 — Be the Confused User (⭐)
  Use your partner's program **without asking them how it works**. Can you tell what to do from the screen alone? Note anything confusing.

  ### Round 2 — Try to Break It (⭐⭐)
  Be sneaky! Feed it silly input on purpose:
  - Type `ten` where it wants a number
  - Type `banana` at the menu
  - Press Enter with no text
  - Ask for stats **before** logging anything
  - Type a negative number

  Write down **every crash or weird moment** in the Zoom chat as a mini bug report: *what you typed → what happened*.

  ### Round 3 — Fix the Top Issues (⭐⭐⭐)
  Swap bug reports back. Each of you fixes your **two worst** issues using try/except and guards. Re-test to confirm the crash is gone. Thumbs up 👍 in Zoom when your program survives your partner's attack!

  > 💬 **Share:** paste your single best bug ("It crashed when I typed ___") in the class chat. Best break of the day wins bragging rights!
take_home_assignment: |
  ## 📚 Homework: Polish Your Capstone ✨

  Take YOUR capstone project and make it release-ready.

  **Requirements:**
  1. **Welcome screen** — a friendly banner + one line of instructions when it starts.
  2. **Edge-case guards** — it must NOT crash on: empty data, bad number input, or an unexpected menu choice. Use `try/except` and `if` guards.
  3. **Comments** — add comments that explain **WHY**, not just what. Tidy any messy variable names.
  4. **One real tester** — get a family member or classmate to use it. Note **one thing they found** and **how you fixed it**.

  **Challenge tiers:**
  - ⭐ Add a welcome screen and guard one crash.
  - ⭐⭐ Guard every crash your tester found + validate all number input.
  - ⭐⭐⭐ Add a short "How to use" help option to your menu, plus tidy comments throughout.

  **Write at the top of your file (as a comment):**
  ```
  # Tester: ______   Found: ______   I fixed it by: ______
  ```

  **Submit:** Save your Trinket (`Y2-T8-Capstone`), click **Share**, and paste the link where your teacher asks.
ai_activities: |
  ## 🤖 Quick Thought: Real Software Ships AFTER Testing

  Every app on your phone was tested by real people before it launched — companies even pay "beta testers" to try to break things.

  **Discuss in the Zoom chat (2 minutes):**
  - Have you ever hit a bug or crash in an app or game? What did you type or do?
  - AI coding helpers can suggest code — but they can't feel *confused* like a real human tester can. Why do you think a human tester still matters?

  Keep it light — the real testing happens in today's paired activity!
---

# Year 2, Lesson 6: Polish & Test 💅🧪

**Course:** Capstone & Portfolio
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

- The difference between **"it works for me"** and **"it works for anyone"**
- How to run **user testing** — let a classmate try to break your program and watch what confuses them
- How to handle **edge cases**: empty data, silly input, dividing by zero, and unexpected menu choices
- How to add a friendly **welcome screen** and polish your output with f-strings and banners
- How to write **comments that explain WHY** — a kindness to future-you

---

## 🤖 BrightByte on Polish

> *"Here's a secret real programmers know: writing the code is only HALF the job. The other half is making sure it doesn't fall over the moment a real human touches it. Your program works when YOU use it — because you know the secret handshake. But your gran? Your best friend? They'll type 'banana' where you expected a number, and BOOM. Today we make your capstone bulletproof. This is what separates a school project from real software."*
> — BrightByte 🤖✨

---

## 🎢 Part 1: "It Works For Me" Is Not "It Works"

You've spent weeks building your capstone. You know exactly how to use it: log a session, THEN check the stats, always type a number when it asks for a number. You use it perfectly because **you built it**.

But watch what happens when someone else sits down...

Meet Amara. She's never seen your Study Buddy before. She opens it and the very first thing she does is choose **"Stats & chart"** — before logging anything. Here's what the *unpolished* program does:

```
Choose: 3
Traceback (most recent call last):
  ...
ZeroDivisionError: division by zero
```

💥 **Crash.** Amara didn't do anything wrong. She just did something *you* never do. That gap — between how the author uses a program and how a stranger uses it — is where every bug lives.

> **The golden rule of Week 6:** A program isn't finished when it works for you. It's finished when it works for someone who has never seen it before and is a little bit careless.

### 🕵️ User Testing: Your Secret Weapon

**User testing** means watching a real person use your program while you stay quiet. No hints. No "oh you have to do it THIS way." You just watch — and take notes.

You are looking for two things:
1. **Crashes** — where does it break?
2. **Confusion** — where does the person pause, frown, or type the wrong thing because the screen didn't tell them what to do?

The rule that makes it work: **do not rescue them.** The moment you jump in to explain, you hide the exact problem you needed to see.

---

## 🧨 Part 2: Hunting Edge Cases

An **edge case** is an input at the "edge" of what you expected — the unusual, the empty, the silly. Careful programmers hunt these down on purpose. Here are the four big families:

### 1. Empty data 📭

The program has nothing yet. What happens if someone views their sessions, or asks for stats, before logging anything?

❌ **Fragile:**
```python
def show_stats():
    total = 0
    for s in sessions:
        total += s["minutes"]
    average = total / len(sessions)   # 💥 len is 0 → ZeroDivisionError
```

✅ **Guarded:**
```python
def show_stats():
    if len(sessions) == 0:            # 🛡️ stop early if there's no data
        print("📭 No data yet — log a session first!")
        return
    # ... safe from here: we KNOW there is at least one session
```

A **guard** is an `if` at the top of a function that checks "is it even safe to do this?" and bails out kindly if not. Guards are the cheapest crash-prevention there is.

### 2. Silly input 🍌

Users type text where you wanted a number. `int("ten")` crashes instantly. The fix is a `try/except` inside a loop that keeps asking until the answer is sensible:

```python
def ask_int(question, minimum=1):
    while True:
        answer = input(question)
        try:
            number = int(answer)          # trips on "ten"
        except ValueError:
            print("❌ Please type a whole number, like 30.")
            continue                      # ask again
        if number < minimum:
            print(f"❌ Please type {minimum} or more.")
            continue
        return number
```

Now `ten`, empty text, and `-5` are all handled — the program simply asks again instead of dying.

### 3. Dividing by zero ➗

Any average, percentage, or "per session" calculation divides by a count. If that count can be zero, you have a hidden crash. The guard from Part 2.1 fixes this — check `len(...) == 0` *before* you divide.

### 4. Unexpected menu choices 🔢

What happens when someone types `7`, or `banana`, or just presses Enter at your menu? A polished menu has an `else` that catches **everything you didn't plan for**:

```python
choice = input("Choose (1-6): ").strip()
if choice == "1":
    log_session()
# ... 2, 3, 4, 5, 6 ...
else:
    print("❌ Please choose a number from 1 to 6.")   # 🛡️ catches banana, 7, blank
```

> 💡 **Notice `.strip()`** — it quietly removes spaces so `" 1"` still works. Small kindnesses like this are what "polish" means.

---

## 🎨 Part 3: The Welcome Screen & Output Polish

First impressions matter. When Amara opens your program, the very first screen should tell her — without you saying a word — what this thing is and what to do first.

```python
def show_welcome():
    print("=" * 42)
    print("         📚 WELCOME TO STUDY BUDDY 📚")
    print("=" * 42)
    print("I track your study time, chart your progress,")
    print("keep you motivated, and quiz you.")
    print("👉 Tip: log a session first, then view your stats!")
    print("=" * 42)
```

That one function does three jobs: it **names** the program, **says what it does**, and **tells the user the first move**. Call it once, at the very start of `main()`, before the loop.

### 💅 Formatting polish checklist
- **Banners** with `"=" * 42` frame your menus and titles.
- **f-strings** slot values neatly into sentences: `f"✅ Logged {minutes} min of {subject}."`
- **Alignment** with `{subject:<12}` lines your chart up in tidy columns.
- **Emojis** as signposts: ✅ success, ❌ problem, 📭 empty, 💡 tip.

Small touches, big difference — the same program suddenly *feels* finished.

---

## 💬 Part 4: Comments — A Note to Future-You

In six months you'll open your capstone and think *"...what does this line even do?"* Comments are how present-you is kind to future-you.

But there's a right and a wrong way to comment.

❌ **Over-commenting the obvious** (just noise):
```python
total = total + s["minutes"]   # add the minutes to the total
i = i + 1                      # add one to i
```
The code already says that. These comments add nothing.

✅ **Explaining the WHY** (genuinely useful):
```python
# GUARD: the average divides by the number of sessions. With zero
# sessions that is divide-by-zero, so we stop early with a kind message.
if len(sessions) == 0:
    return
```
This tells future-you something the code *can't*: the reason the guard exists.

> **The rule:** comment the **why**, not the **what**. If a line's purpose is obvious, leave it alone. If you had to think hard to write it, explain your thinking.

### 🏷️ Tidy your names too
Good variable names are comments that never go stale:

| ❌ Mystery | ✅ Clear |
|---|---|
| `x`, `n`, `temp` | `total`, `minutes`, `average` |
| `d` | `totals_by_subject` |
| `flag` | `running` |

---

## ✅ The Testing Checklist

Run **every** row against your program before you call it done. Tick the box only when it does the right thing — no crash, helpful message.

| # | Test | What SHOULD happen | ✅ |
|---|---|---|---|
| 1 | View sessions with none logged | Kind "no sessions yet" message | ☐ |
| 2 | Stats & chart with none logged | Kind "no data yet" message (NO crash) | ☐ |
| 3 | Log a session, type `ten` for minutes | Asks again for a whole number | ☐ |
| 4 | Type a negative number for minutes | Rejects it, asks again | ☐ |
| 5 | Press Enter with no subject | Uses a sensible default (e.g. "Unnamed") | ☐ |
| 6 | Type `banana` at the menu | "Please choose 1-6" (NO crash) | ☐ |
| 7 | Type `7` at the menu | "Please choose 1-6" | ☐ |
| 8 | Quiz answer with CAPS or spaces | Still accepted if correct | ☐ |
| 9 | Log 2 sessions, then view stats | Correct totals + tidy chart | ☐ |
| 10 | Choose Quit | Friendly goodbye, program ends | ☐ |

> 🎯 A program that passes all ten is **release-ready**. That's the standard for graduation.

---

## ⚠️ Common Mistakes

**Mistake 1: Crashing on empty data**

❌ Wrong — divides before checking:
```python
average = total / len(sessions)   # 💥 ZeroDivisionError when empty
```

✅ Correct — guard first:
```python
if len(sessions) == 0:
    print("📭 No data yet — log a session first!")
    return
average = total / len(sessions)   # safe now
```

**Real error you'll see:**
```
ZeroDivisionError: division by zero
```

---

**Mistake 2: Assuming users type sensibly**

❌ Wrong — trusts the user completely:
```python
minutes = int(input("How many minutes? "))   # 💥 dies on "ten"
```

✅ Correct — validate with try/except in a loop (use the `ask_int` helper).

**Real error you'll see:**
```
ValueError: invalid literal for int() with base 10: 'ten'
```

> 🧠 **Golden rule:** never trust user input. Ever. Users are not being mean — they just don't know the rules inside your head.

---

**Mistake 3: Over-commenting instead of explaining WHY**

❌ Noise:
```python
running = False   # set running to False
```

✅ Useful:
```python
running = False   # this ends the menu loop and quits the program
```

Comment the **reason**, not the obvious action. A file full of pointless comments is *harder* to read, not easier.

---

## 🧪 Class Activity: Break My Program!

**Pair up in Zoom breakout rooms.** Swap your Trinket Share links.

1. **Round 1 (⭐):** Use your partner's program with NO instructions. Note what confuses you.
2. **Round 2 (⭐⭐):** Try to break it — type `ten`, `banana`, blank input, ask for stats with no data, use a negative number. File a mini bug report in chat: *what you typed → what happened*.
3. **Round 3 (⭐⭐⭐):** Swap reports. Fix your **two worst** issues with guards and try/except. Re-test. Thumbs up 👍 when your program survives the attack!

> **Zoom checkpoint:** paste your single best break ("It crashed when I typed ___") in the class chat before we regroup.

---

## 🌟 What's Coming Next Week?

**Week 7: Portfolio & Presentation Prep 🎤📁**

Your capstone is now polished and crash-proof. Next week we get you ready to **show it off**:
- Gather all EIGHT of your Year 2 projects into one portfolio
- Write a clear description of your capstone: what it does, how you built it, what you're proud of
- Rehearse a short, confident demo for graduation

> The hard building is behind you. Next week is about telling your story — because a great project deserves to be seen. 🌟

---

## 🏆 Today's Achievements

- ✅ You learned the golden rule: "works for me" isn't "works for anyone"
- ✅ You ran real **user testing** — watching, not rescuing
- ✅ You hunted **edge cases**: empty data, silly input, divide-by-zero, bad menu choices
- ✅ You added a **welcome screen** and polished your output
- ✅ You wrote comments that explain **WHY** and tidied your variable names
- ✅ You passed the 10-point release-ready checklist

> *"Look at that — your program didn't flinch when I threw 'banana' at it. THAT is professional. You didn't just build software today; you made it trustworthy. Graduation is close now, and you're going to walk in with something you can be genuinely proud of."*
> — BrightByte 🤖✨

---

## 📚 Homework: Polish Your Capstone ✨

Make YOUR capstone release-ready:

1. **Welcome screen** — friendly banner + one line of instructions on start-up.
2. **Edge-case guards** — no crashes on empty data, bad number input, or unexpected menu choices. Use `try/except` and `if` guards.
3. **Comments** — explain **WHY**, not what. Tidy messy variable names.
4. **One real tester** — get someone to use it; note one thing they found and how you fixed it.

**Challenge tiers:**
- ⭐ Welcome screen + guard one crash.
- ⭐⭐ Guard every crash your tester found + validate all number input.
- ⭐⭐⭐ Add a "How to use" help option to your menu, plus tidy comments throughout.

Write at the top of your file:
```
# Tester: ______   Found: ______   I fixed it by: ______
```

**Submit:** Save your Trinket (`Y2-T8-Capstone`), click **Share**, and paste the link where your teacher asks.

---

*You didn't just make it work — you made it trustworthy. That's what real programmers do. See you next week for the final stretch! 💅🧪*
