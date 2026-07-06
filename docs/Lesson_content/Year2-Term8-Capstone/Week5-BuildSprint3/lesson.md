---
title: "Build Sprint 3 — Add the Wow ✨🚀"
description: "Finish your project by adding a wow feature — a mini keyword assistant and a quiz — then learn to give a kind, useful peer code review"
difficulty: "intermediate"
order_index: 5
course_slug: "year2-term-8-capstone"
is_premium: false
requires_trinket: true
starter_code: |
  # 📚 Study Buddy — your personal study tracker!
  # After Sprint 2: Log, View stats & chart already work.
  # Sprint 3 (this week): build the TWO stubs — Motivation tip + Quiz me! ✨

  # Sessions are a list of dictionaries: {"subject": "Maths", "hours": 1.5}
  sessions = []


  def show_menu():
      print()
      print("=" * 34)
      print("        📚 STUDY BUDDY 📚")
      print("=" * 34)
      print("1. Log a study session")
      print("2. View stats & chart")
      print("3. Motivation tip")
      print("4. Quiz me")
      print("5. Quit")
      print("=" * 34)


  def log_session():
      subject = input("What subject did you study? ")
      hours = float(input("How many hours? "))
      sessions.append({"subject": subject, "hours": hours})
      print(f"✅ Logged {hours} hours of {subject}!")


  def view_stats():
      if len(sessions) == 0:
          print("No sessions yet — log one first! 📖")
          return

      totals = {}
      for session in sessions:
          subject = session["subject"]
          if subject in totals:
              totals[subject] += session["hours"]
          else:
              totals[subject] = session["hours"]

      print("\n📊 Your study chart:")
      for subject in totals:
          bar = "█" * int(totals[subject])
          print(f"{subject}: {bar} {totals[subject]} hrs")

      total_hours = 0
      for session in sessions:
          total_hours += session["hours"]
      print(f"Total: {total_hours} hours across {len(sessions)} session(s) 🎉")


  # 🚧 STUB — build this today!
  def motivation_tip():
      print("🚧 Motivation tip — coming in Sprint 3!")


  # 🚧 STUB — build this today!
  def quiz_me():
      print("🚧 Quiz me — coming in Sprint 3!")


  while True:
      show_menu()
      choice = input("Choose an option (1-5): ").strip()

      if choice == "1":
          log_session()
      elif choice == "2":
          view_stats()
      elif choice == "3":
          motivation_tip()
      elif choice == "4":
          quiz_me()
      elif choice == "5":
          print("Keep up the great work, superstar! Goodbye! 👋")
          break
      else:
          print("❓ Please choose a number from 1 to 5.")
solution_code: |
  import random

  # 📚 Study Buddy — your personal study tracker and cheerleader!
  # Sprint 3 COMPLETE: all four features work + a clean Quit.
  # Sessions are a list of dictionaries: {"subject": "Maths", "hours": 1.5}
  sessions = []


  def show_menu():
      print()
      print("=" * 34)
      print("        📚 STUDY BUDDY 📚")
      print("=" * 34)
      print("1. Log a study session")
      print("2. View stats & chart")
      print("3. Motivation tip")
      print("4. Quiz me")
      print("5. Quit")
      print("=" * 34)


  def log_session():
      subject = input("What subject did you study? ")
      hours = float(input("How many hours? "))
      sessions.append({"subject": subject, "hours": hours})
      print(f"✅ Logged {hours} hours of {subject}!")


  def view_stats():
      if len(sessions) == 0:
          print("No sessions yet — log one first! 📖")
          return

      totals = {}
      for session in sessions:
          subject = session["subject"]
          if subject in totals:
              totals[subject] += session["hours"]
          else:
              totals[subject] = session["hours"]

      print("\n📊 Your study chart:")
      for subject in totals:
          bar = "█" * int(totals[subject])
          print(f"{subject}: {bar} {totals[subject]} hrs")

      total_hours = 0
      for session in sessions:
          total_hours += session["hours"]
      print(f"Total: {total_hours} hours across {len(sessions)} session(s) 🎉")


  # ✨ WOW FEATURE 1 — a mini keyword assistant (Term 5/6 style)
  def motivation_tip():
      tips = [
          "Small steps every day beat one giant leap. Keep going! 🌱",
          "Your brain is a muscle — every session makes it stronger! 💪",
          "Done is better than perfect. Start with just five minutes. ⏱️",
          "Future-you is proud of the work present-you is doing right now! 🚀",
      ]
      feeling = input("How are you feeling about studying today? ").lower().strip()

      if "tired" in feeling or "sleepy" in feeling:
          print("😴 Rest matters! Take a 10-minute break, then try one small task.")
      elif "stress" in feeling or "worried" in feeling or "nervous" in feeling:
          print("🌊 Breathe. Break the work into tiny pieces and do just the first one.")
      elif "bored" in feeling:
          print("🎯 Try a mini challenge: set a 15-minute timer and race it!")
      elif "happy" in feeling or "good" in feeling or "great" in feeling:
          print("🌟 Love that energy! Tackle your hardest subject first while it lasts.")
      else:
          print("💡 Here's a tip for you:", random.choice(tips))


  # ✨ WOW FEATURE 2 — a quiz from a list of dictionaries (Term 4 style)
  def quiz_me():
      quiz = [
          {"question": "What keyword starts a loop that repeats a set number of times?", "answer": "for"},
          {"question": "What symbol starts a comment in Python?", "answer": "#"},
          {"question": "What function shows text on the screen?", "answer": "print"},
          {"question": "True or False: input() always gives you text.", "answer": "true"},
      ]
      score = 0
      print("\n📝 Quiz time! Answer each question:")
      for item in quiz:
          reply = input(item["question"] + " ")
          if reply.lower().strip() == item["answer"]:
              print("✅ Correct!")
              score += 1
          else:
              print(f"❌ Not quite. The answer was: {item['answer']}")
      print(f"You scored {score} out of {len(quiz)}! 🎉")


  while True:
      show_menu()
      choice = input("Choose an option (1-5): ").strip()

      if choice == "1":
          log_session()
      elif choice == "2":
          view_stats()
      elif choice == "3":
          motivation_tip()
      elif choice == "4":
          quiz_me()
      elif choice == "5":
          print("Keep up the great work, superstar! Goodbye! 👋")
          break
      else:
          print("❓ Please choose a number from 1 to 5.")
class_activities: |
  ## 🎮 Class Activity: Add the Wow + Peer Review 🤝

  Two halves today. First you build the two wow features into Study Buddy. Then you swap code with a partner and give a kind, useful review. Thumbs up in Zoom when each stage runs!

  ### Stage 1 — Motivation Tip (⭐⭐)
  Turn the `motivation_tip()` stub into a real mini assistant:
  1. Add `import random` at the very TOP of your file
  2. Ask the user how they feel and store it with `.lower().strip()`
  3. Match at least **two** keywords (e.g. "tired", "stress") with `if`/`elif`
  4. Add an `else` that gives a **random** tip from a list

  ### Stage 2 — Quiz Me (⭐⭐)
  Turn the `quiz_me()` stub into a real quiz:
  1. Make a **list of dictionaries**, each with a `"question"` and an `"answer"`
  2. Loop through them, ask each question, keep a `score`
  3. Compare answers with `reply.lower().strip() == item["answer"]`
  4. Print the final score out of the total

  ### Stage 3 — Peer Code Review (⭐⭐⭐)
  In your Zoom breakout pair, swap Trinket **Share** links and answer three questions about your partner's code:
  1. **Does it run?** (any red error messages?)
  2. **Is it clear?** (could you follow what it does?)
  3. **One kind suggestion** (a single, specific idea to make it better)

  Post one thing you liked about your partner's project in the Zoom chat. 🌟
take_home_assignment: |
  ## 📚 Homework: Add YOUR Wow Feature ✨

  Your capstone is not Study Buddy — it's YOUR project. This week, give it a wow moment.

  **Requirements:**
  1. Add **one wow feature** that shows off a Year 2 skill — a data insight (a total, an average, a text chart) OR a mini AI touch (a keyword assistant or a quiz)
  2. Make sure your **whole program still runs** with no red errors
  3. If you use `random`, remember `import random` at the top!
  4. Do a **peer review** with a classmate if you can (swap Trinket links) and write down the **one improvement** you'll make next

  **Challenge tiers:**
  - ⭐ Add one working wow feature and run the whole program once
  - ⭐⭐ Add a wow feature that uses a list of dictionaries OR keyword matching
  - ⭐⭐⭐ Add a feature AND complete a peer review, noting one improvement in a comment at the top of your file

  **Submit:** Save your Trinket (named `Y2-T8-Capstone`), click **Share**, and paste the link where your teacher asks. Include your one-line improvement note!
ai_activities: |
  ## 🤖 Mini AI Feature: Your Keyword Assistant

  The `motivation_tip()` you built today IS a tiny AI feature — the same **rule-based, keyword-matching** idea you learned in Terms 5 and 6.

  It doesn't "think" — it looks for words it recognises (like "tired" or "stress") and picks a matching reply, with a random tip as a friendly fallback. That is exactly how the earliest chatbots worked!

  **Discuss in the Zoom chat:** How is your keyword assistant *similar* to a real chatbot, and how is it *different*? (Hint: think about what happens when someone types a feeling you never planned for.)

  Keep it light — this is a callback to skills you already have, not a new topic.
---

# Year 2, Lesson 5: Build Sprint 3 — Add the Wow ✨🚀

**Course:** Capstone & Portfolio
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

- What a **"wow factor"** is — the feature that makes people say *"you built that?!"*
- How to build a **mini keyword assistant** that gives motivation (a Term 5/6 skill!)
- How to build a **quiz** from a **list of dictionaries** (a Term 4 skill!)
- How to give a classmate a **kind, useful code review** — does it run, is it clear, one suggestion
- How to finish **Sprint 3** so your project has all its features working

---

## 🤖 BrightByte Sets the Scene

> *"Three sprints in! Your project WORKS — it logs, it views, it charts. That's brilliant. But 'working' and 'WOW' are different things. The wow factor is the feature that makes someone lean in. Today we add TWO of them to Study Buddy — a little cheerleader and a quiz — and then you'll do something real developers do every single day: read each other's code, kindly. Let's make it shine."*
> — BrightByte 🤖✨

---

## 💡 Part 1: What Is the "Wow Factor"?

Study Buddy already does three things after Sprint 2:

| Menu | Feature | Status |
|---|---|---|
| 1 | Log a study session | ✅ Working |
| 2 | View stats & chart | ✅ Working |
| 3 | Motivation tip | 🚧 Stub — today! |
| 4 | Quiz me | 🚧 Stub — today! |
| 5 | Quit | ✅ Working |

A **wow feature** is one that shows off an *advanced* Year 2 skill. It's not just "more" — it's "clever". Look at the two we're building:

- **Motivation tip** uses **keyword matching** — a mini AI touch from Terms 5 and 6.
- **Quiz me** uses a **list of dictionaries** — the data structure from Term 4.

Open your Study Buddy Trinket (named `Y2-T8-Capstone`). You'll see two **stubs** — functions that only print "coming soon":

```python
# 🚧 STUB — build this today!
def motivation_tip():
    print("🚧 Motivation tip — coming in Sprint 3!")
```

> **Why stubs?** Stubbing means writing a placeholder so the menu still runs while a feature is unfinished. You've been running a *complete* program the whole time — no crashes — even before the features existed. That's a professional habit! 👏

---

## ✨ Part 2: Wow Feature #1 — The Motivation Tip

This is a **mini keyword assistant**, exactly like the ones you built in Terms 5 and 6. It reads how the user feels, looks for words it recognises, and replies. If it doesn't recognise anything, it gives a **random** encouraging tip.

### Step 1 — Import random (at the very top!)

Because we'll pick a random tip, we need Python's `random` toolbox. Add this as the **first line of your whole file**:

```python
import random
```

> ⚠️ If you forget this line, you'll get a `NameError` the moment you try `random.choice(...)`. We'll see that exact error in Common Mistakes!

### Step 2 — Ask and tidy the answer

```python
feeling = input("How are you feeling about studying today? ").lower().strip()
```

`.lower()` makes everything lowercase, and `.strip()` removes accidental spaces. Now `"TIRED "`, `"Tired"`, and `"tired"` all become the same thing — so our keyword check works no matter how the user types.

### Step 3 — Match keywords, with a random fallback

```python
def motivation_tip():
    tips = [
        "Small steps every day beat one giant leap. Keep going! 🌱",
        "Your brain is a muscle — every session makes it stronger! 💪",
        "Done is better than perfect. Start with just five minutes. ⏱️",
        "Future-you is proud of the work present-you is doing right now! 🚀",
    ]
    feeling = input("How are you feeling about studying today? ").lower().strip()

    if "tired" in feeling or "sleepy" in feeling:
        print("😴 Rest matters! Take a 10-minute break, then try one small task.")
    elif "stress" in feeling or "worried" in feeling or "nervous" in feeling:
        print("🌊 Breathe. Break the work into tiny pieces and do just the first one.")
    elif "bored" in feeling:
        print("🎯 Try a mini challenge: set a 15-minute timer and race it!")
    elif "happy" in feeling or "good" in feeling or "great" in feeling:
        print("🌟 Love that energy! Tackle your hardest subject first while it lasts.")
    else:
        print("💡 Here's a tip for you:", random.choice(tips))
```

**Example run:**
```
How are you feeling about studying today? I'm so tired today
😴 Rest matters! Take a 10-minute break, then try one small task.
```

Notice `"tired" in feeling` — the word `in` checks if `"tired"` appears *anywhere* inside the sentence. That's why "I'm so tired today" matches! And if the user types something surprising, `random.choice(tips)` always has a kind reply ready. 🌟

### 💬 Zoom Checkpoint 1

> **Build the motivation tip, run it, and try typing a feeling.** Thumbs up 👍 in Zoom when yours gives you a reply!

---

## 📝 Part 3: Wow Feature #2 — Quiz Me

Now the quiz. The clever part is the **list of dictionaries** — each question and its answer travel together in one neat package (your Term 4 superpower).

### Step 1 — Store questions and answers together

```python
quiz = [
    {"question": "What keyword starts a loop that repeats a set number of times?", "answer": "for"},
    {"question": "What symbol starts a comment in Python?", "answer": "#"},
    {"question": "What function shows text on the screen?", "answer": "print"},
    {"question": "True or False: input() always gives you text.", "answer": "true"},
]
```

Each item is a **dictionary** with two keys: `"question"` and `"answer"`. Store every answer in **lowercase** — you'll see why in a second.

### Step 2 — Loop, ask, and score

```python
def quiz_me():
    quiz = [
        {"question": "What keyword starts a loop that repeats a set number of times?", "answer": "for"},
        {"question": "What symbol starts a comment in Python?", "answer": "#"},
        {"question": "What function shows text on the screen?", "answer": "print"},
        {"question": "True or False: input() always gives you text.", "answer": "true"},
    ]
    score = 0
    print("\n📝 Quiz time! Answer each question:")
    for item in quiz:
        reply = input(item["question"] + " ")
        if reply.lower().strip() == item["answer"]:
            print("✅ Correct!")
            score += 1
        else:
            print(f"❌ Not quite. The answer was: {item['answer']}")
    print(f"You scored {score} out of {len(quiz)}! 🎉")
```

### Step 3 — Compare answers ROBUSTLY

Look closely at this line — it's the most important one in the whole feature:

```python
if reply.lower().strip() == item["answer"]:
```

If a student types `"FOR"`, `"For "`, or `" for"`, they all *mean* `for`. Without `.lower().strip()`, Python would mark them **wrong** — because `"FOR"` is not exactly equal to `"for"`. Cleaning both sides makes the quiz **fair**.

**Example run:**
```
📝 Quiz time! Answer each question:
What keyword starts a loop that repeats a set number of times? For
✅ Correct!
What symbol starts a comment in Python? #
✅ Correct!
You scored 2 out of 2! 🎉
```

### 💬 Zoom Checkpoint 2

> **Run your quiz and try answering with CAPITAL letters on purpose.** Does it still mark you correct? Thumbs up 👍 when your quiz scores you fairly!

---

## 🎉 Part 4: Sprint 3 Complete — The Full Study Buddy

With both features built, Study Buddy now has **all four features plus a clean Quit**. Run through the whole menu once — 1, 2, 3, 4, then 5 — and check every option works. The complete program is in the **solution code** panel.

Here's the finished feature set to celebrate:

| Menu | Feature | Skill It Shows Off |
|---|---|---|
| 1 | Log a study session | Lists of dictionaries + `float()` |
| 2 | View stats & chart | Totals per subject + text bar chart |
| 3 | Motivation tip | Keyword assistant + `random` (mini AI!) |
| 4 | Quiz me | List of dictionaries + robust comparison |
| 5 | Quit | Clean exit with `break` |

> *"Four features. One menu. Zero crashes. THAT is a real app, built by you. Adaeze and Kwame will be showing off theirs at graduation — and yours is right there with them."*
> — BrightByte 🤖

---

## 🤝 Part 5: Peer Code Review — Kind and Useful

Real developers read each other's code every day. It's called a **code review**, and the goal is to *help*, never to show off or criticise. In your Zoom breakout pair, swap Trinket **Share** links and answer three questions:

### The 3-Question Review

1. **Does it run?** Click ▶ Run. Any red error messages? If yes, point to the line kindly.
2. **Is it clear?** Can you follow what each part does? Are the names sensible (`score`, not `x`)?
3. **One kind suggestion.** Just ONE specific idea — not a list. Small is good.

### How to say it kindly

| ❌ Not helpful | ✅ Kind and useful |
|---|---|
| "This is confusing." | "I wasn't sure what `s` meant — maybe rename it `subject`?" |
| "Your quiz is broken." | "The quiz marked me wrong for `FOR` — try `.lower()` on the reply?" |
| "Looks fine I guess." | "I loved the emoji in your chart! One idea: add a total at the bottom." |

> **Golden rule:** start with something you genuinely liked, *then* give your one suggestion. This is called a "compliment sandwich" and it makes feedback easy to hear. 🥪

### 💬 Zoom Checkpoint 3

> **Post one thing you liked** about your partner's project in the Zoom chat. Then give them your one kind suggestion in your breakout room.

---

## ⚠️ Common Mistakes (Real Errors You'll Hit!)

**Mistake 1: Using `random` without importing it**

❌ Wrong:
```python
def motivation_tip():
    print(random.choice(tips))
```
```
NameError: name 'random' is not defined
```

✅ Correct — add this as the **first line of your file**:
```python
import random
```

> This is the #1 error when adding the motivation tip. If you see `NameError: name 'random' is not defined`, scroll to the top and add the import!

---

**Mistake 2: Comparing quiz answers without cleaning them**

❌ Wrong — the user typed `"For"` but you marked it wrong:
```python
if reply == item["answer"]:   # "For" is NOT equal to "for"!
```
```
What keyword starts a loop? For
❌ Not quite. The answer was: for
```

✅ Correct — clean BOTH the case and the spaces:
```python
if reply.lower().strip() == item["answer"]:
```

> Remember: `"For"`, `"FOR "`, and `" for"` all *mean* `for`. `.lower().strip()` makes your quiz fair for everyone.

---

**Mistake 3: Keyword matching that's case sensitive**

❌ Wrong — the user typed `"TIRED"` but nothing matched:
```python
feeling = input("How are you feeling? ")
if "tired" in feeling:        # "tired" is NOT in "TIRED"!
    print("😴 Take a break!")
```

✅ Correct — lowercase the input first:
```python
feeling = input("How are you feeling? ").lower().strip()
if "tired" in feeling:        # now "TIRED" becomes "tired" ✓
    print("😴 Take a break!")
```

> Python is **case-sensitive**: `"tired"` and `"TIRED"` are different words to it. Always `.lower()` before you keyword-match!

---

## 🎮 Class Activity: Add the Wow + Peer Review

**Stage 1 — Motivation Tip (⭐⭐):** Import `random`, ask how the user feels (`.lower().strip()`), match at least two keywords, and add a random-tip `else`.

**Stage 2 — Quiz Me (⭐⭐):** Build a list of dictionaries, loop and score, and compare with `.lower().strip()`.

**Stage 3 — Peer Review (⭐⭐⭐):** Swap Trinket links in your breakout pair. Answer: does it run, is it clear, one kind suggestion. Post one thing you liked in the Zoom chat.

Give a **thumbs up** 👍 after each stage runs!

---

## 🌟 What's Coming Next Week?

Next week is **Week 6: Polish & Test** 🧪✨. Your project *works* — now we make it *solid*. You'll learn to:

- **Test like a detective** — try to break your own program on purpose (what if someone types "banana" for hours?)
- **Polish the output** — tidy menus, clearer messages, consistent emoji
- **Handle silly input** without crashing (remember "never crashes" from Term 1?)

Bring the wow feature you added for homework — next week we make sure it's rock solid. 🛡️

---

## 🏆 Today's Achievements

- ✅ You learned what a **wow factor** is and why it matters
- ✅ You built a **mini keyword assistant** — a real AI touch from Terms 5/6
- ✅ You built a **quiz** from a list of dictionaries with fair answer-checking
- ✅ Your Study Buddy now has **all four features** working, plus a clean Quit
- ✅ You gave a classmate a **kind, useful code review**

> *"You didn't just finish a project today — you made it SHINE, and you helped a friend make theirs shine too. That's what real developers do. Two weeks to graduation, superstar. Let's polish it up!"*
> — BrightByte 🤖🎓

---

## 📚 Homework: Add YOUR Wow Feature ✨

Give **your own capstone** (not Study Buddy) a wow moment.

**Requirements:**
1. Add **one wow feature** — a data insight (total, average, text chart) OR a mini AI touch (keyword assistant or quiz)
2. Make sure your **whole program still runs** with no red errors
3. If you use `random`, remember `import random` at the top!
4. Do a **peer review** with a classmate if you can, and write down the **one improvement** you'll make next

**Challenge tiers:**
- ⭐ Add one working wow feature and run the whole program once
- ⭐⭐ Add a wow feature that uses a list of dictionaries OR keyword matching
- ⭐⭐⭐ Add a feature AND complete a peer review, noting one improvement in a comment at the top of your file

**Submit:** Save your Trinket (named `Y2-T8-Capstone`), click **Share**, and paste the link where your teacher asks. Include your one-line improvement note!

---

*Two sprints of building, one sprint of wow — and a review that made a friend smile. Next week, we polish it until it gleams. See you there! ✨🚀*
