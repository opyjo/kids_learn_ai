---
title: "Project: AI Investigation Report 🔍📝"
description: "Turn your Week 6 investigation into a real Python project — a program that PRINTS a clear, sectioned report on one real AI system, plus a mini rule-based classifier demo that proves a point from your report"
difficulty: "intermediate"
order_index: 7
course_slug: "year2-term-5-ai-deep-dive"
is_premium: false
requires_trinket: true
starter_code: |
  # 🔍 Y2-T5-W7-Investigation — AI Investigation Report
  # Investigator: [YOUR NAME]
  # This program PRINTS your investigation as a tidy report, then runs a mini demo.

  # ============================================================
  # STEP 1 — MY FINDINGS  (fill these in with YOUR research!)
  # ============================================================
  ai_system = {
      "name": "[the AI system you chose in Week 6]",
      "who_made_it": "[the company or people who built it]",
      "used_for": "[what it does, in a few words]",
  }

  data_used = [
      "[first kind of data it uses]",
      "[second kind of data it uses]",
      # add more lines...
  ]

  how_it_decides = "learning"   # write "rules" OR "learning" OR "not sure"

  risks = [
      "[one thing that could go wrong / who it might be unfair to]",
      # add more...
  ]

  responsible = {
      "verdict": "partly",   # "yes", "no" or "partly"
      "reason": "[why you think that]",
  }

  # ============================================================
  # STEP 2 — THE REPORT PRINTER  (one function per section)
  # ============================================================
  def print_banner():
      print("=" * 56)
      print("      🔍  AI INVESTIGATION REPORT  📝")
      print("=" * 56)

  def print_intro(system):
      print()
      print("SECTION 1 — WHAT IS IT?")
      print("-" * 56)
      # TODO: print the name, who made it, and what it is used for (use f-strings)

  # TODO: write print_data(data)          -> Section 2
  # TODO: write print_decision(method)    -> Section 3
  # TODO: write print_risks(risks)        -> Section 4
  # TODO: write print_responsibility(info)-> Section 5

  # ============================================================
  # STEP 3 — THE MINI-DEMO  (reuse your Week 3 classifier idea!)
  # ============================================================
  def classify_video(title):
      # TODO: return a label based on words found in the title
      return "needs a human to check 🤔"

  # ============================================================
  # STEP 4 — RUN THE REPORT
  # ============================================================
  print_banner()
  print_intro(ai_system)
  # TODO: call your other section functions here, in order
  # TODO: call your demo here

  # Build it section by section — follow BrightByte! 🏗️
solution_code: |
  # 🔍 Y2-T5-W7-Investigation — AI Investigation Report (full example)
  # Investigator: Amara Okafor
  # SAVE THIS! You present it at the Week 8 AI Summit for your AI Scholar Badge.

  # ============================================================
  # STEP 1 — MY FINDINGS  (this is example research — use YOUR own!)
  # ============================================================
  ai_system = {
      "name": "StreamHive Video Recommender",
      "who_made_it": "a video streaming company",
      "used_for": "suggesting the next video you should watch",
  }

  data_used = [
      "which videos you watched before",
      "how long you watched each one",
      "videos that people like you enjoyed",
      "what you typed into the search box",
  ]

  how_it_decides = "learning"   # "rules", "learning" or "not sure"

  risks = [
      "it can trap you in a bubble of very similar videos",
      "it might suggest content that is not right for your age",
      "it may be unfair to creators whose videos it rarely shows",
  ]

  responsible = {
      "verdict": "partly",
      "reason": "it has a kids mode and a report button, but it never explains WHY it picks each video",
  }

  # ============================================================
  # STEP 2 — THE REPORT PRINTER  (one function per section)
  # ============================================================
  def print_banner():
      print("=" * 56)
      print("      🔍  AI INVESTIGATION REPORT  📝")
      print("=" * 56)

  def print_intro(system):
      print()
      print("SECTION 1 — WHAT IS IT?")
      print("-" * 56)
      print(f"System name : {system['name']}")
      print(f"Made by     : {system['who_made_it']}")
      print(f"It is used for {system['used_for']}.")

  def print_data(data):
      print()
      print("SECTION 2 — WHAT DATA DOES IT USE?")
      print("-" * 56)
      print(f"It learns from {len(data)} main kinds of data:")
      for item in data:
          print(f"  • {item}")

  def print_decision(method):
      print()
      print("SECTION 3 — HOW DOES IT DECIDE?")
      print("-" * 56)
      if method == "learning":
          print("It DECIDES BY LEARNING from examples (data), not fixed rules.")
      elif method == "rules":
          print("It DECIDES BY RULES that humans wrote by hand.")
      else:
          print("I am not sure yet whether it uses rules or learning.")

  def print_risks(risks):
      print()
      print("SECTION 4 — WHAT COULD GO WRONG?")
      print("-" * 56)
      print(f"I found {len(risks)} possible problems:")
      number = 1
      for risk in risks:
          print(f"  {number}. {risk}")
          number += 1

  def print_responsibility(info):
      print()
      print("SECTION 5 — IS IT USED RESPONSIBLY?")
      print("-" * 56)
      print(f"My verdict: {info['verdict'].upper()}")
      print(f"Because: {info['reason']}")

  # ============================================================
  # STEP 3 — THE MINI-DEMO: a tiny RULE-BASED classifier
  # (This is your Week 3 classifier, reused to prove a point!)
  # ============================================================
  def classify_video(title):
      title = title.lower()   # so BIG and small letters both match
      grown_words = ["horror", "casino", "violent", "scary"]
      kid_words = ["cartoon", "nursery", "counting", "alphabet", "puppy"]
      for word in grown_words:
          if word in title:
              return "NOT for kids 🔞"
      for word in kid_words:
          if word in title:
              return "safe for kids ✅"
      return "needs a human to check 🤔"

  def run_demo():
      print()
      print("MINI-DEMO — A TINY RULE-BASED CLASSIFIER")
      print("-" * 56)
      print("This shows ONE way an app could sort videos using RULES.")
      test_titles = [
          "Fun Counting Song for Toddlers",
          "Scary Horror Story at Midnight",
          "My Trip to the Market",
      ]
      for title in test_titles:
          label = classify_video(title)
          print(f'  "{title}"')
          print(f"     -> {label}")

  # ============================================================
  # STEP 4 — RUN THE WHOLE REPORT
  # ============================================================
  print_banner()
  print_intro(ai_system)
  print_data(data_used)
  print_decision(how_it_decides)
  print_risks(risks)
  print_responsibility(responsible)
  run_demo()
  print()
  print("=" * 56)
  print("Report by: Amara Okafor — KidsLearnAI AI Scholar 🎓")
  print("=" * 56)
class_activities: |
  ## 🏗️ Class Activity: Build the Report Printer — Live, Together!

  Today we build the **skeleton** of your investigation report together, one section at a time. Then you fill in **your own findings** from Week 6 and wire in your demo. After each stage, **run your code** and give a **thumbs up** 👍 when it works.

  > 📁 **First:** create a new Trinket and name it **`Y2-T5-W7-Investigation`**. This is your term-project file — you present it next week at the AI Summit!

  ### Stage 1 — The Findings Box (⭐)
  At the very top, create the `ai_system` dictionary and the `data_used` list. Use YOUR system from Week 6.
  ```python
  ai_system = {
      "name": "StreamHive Video Recommender",
      "who_made_it": "a video streaming company",
      "used_for": "suggesting the next video you should watch",
  }
  data_used = ["which videos you watched before", "what you searched for"]
  ```
  ✅ **Checkpoint:** No output yet — but no red errors either. Thumbs up! 👍

  ### Stage 2 — The Banner + Section 1 (⭐)
  ```python
  def print_banner():
      print("=" * 56)
      print("      🔍  AI INVESTIGATION REPORT  📝")
      print("=" * 56)

  def print_intro(system):
      print()
      print("SECTION 1 — WHAT IS IT?")
      print("-" * 56)
      print(f"System name : {system['name']}")
      print(f"Made by     : {system['who_made_it']}")
      print(f"It is used for {system['used_for']}.")

  print_banner()
  print_intro(ai_system)
  ```
  ✅ **Checkpoint:** Run it. See the banner and Section 1? Thumbs up! 👍

  ### Stage 3 — Sections 2 & 3 (⭐⭐)
  Add `print_data(data)` (loop over the list with `•`) and `print_decision(method)` (an `if/elif/else` on `"rules"`/`"learning"`). Call them after `print_intro`.
  ✅ **Checkpoint:** In the Zoom chat, type whether YOUR system uses `rules` or `learning`.

  ### Stage 4 — Sections 4 & 5 (⭐⭐)
  Add `print_risks(risks)` (a numbered loop) and `print_responsibility(info)` (prints the verdict in capitals with `.upper()`). Call them in order.
  ✅ **Checkpoint:** Run the whole report top to bottom. All five sections showing? Thumbs up! 👍

  ### Stage 5 — Wire In Your Demo (⭐⭐⭐)
  Paste in `classify_video(title)` and `run_demo()`, then call `run_demo()` last. This is your Week 3 classifier, reused to PROVE a point from your report.
  ✅ **Final checkpoint:** Feed it the title `"Scary Horror Story at Midnight"` — do you get `NOT for kids 🔞`? 🎉 Thumbs up and **save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Finish Your AI Investigation Report

  Make your report **presentation-ready** for next week's AI Summit! 🎤

  **Requirements:**
  1. Open your **`Y2-T5-W7-Investigation`** Trinket
  2. Fill in ALL five sections with **your own research** from Week 6:
     - What is it & what does it do?
     - What data does it use / learn from?
     - How does it decide — rules or learning?
     - What could go wrong / who might it be unfair to?
     - Is it used responsibly?
  3. Make sure the demo (`classify_video` + `run_demo`) **runs** and connects to a point in your report
  4. Put YOUR name in the footer line

  **Challenge tiers:**
  - ⭐ All five sections filled in with your findings, report runs top to bottom
  - ⭐⭐ Add a 6th `print_sources()` section that lists WHERE you found your facts (so readers can check them)
  - ⭐⭐⭐ Add 2–3 more test titles to your demo, including a tricky one, and explain in a comment what your classifier gets **wrong** (every classifier has blind spots!)

  > ⚠️ Only write facts you can back up. If something is your opinion, say so — write "I think..." not "This is true."

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks. **Bring it ready to present next week!**
ai_activities: |
  ## 🤖 Reflection: What Investigating a Real AI Taught Me

  You just spent two weeks as an **AI detective** — you picked a real system, dug into its data, its decisions, and its dangers, and turned all of that into a working program. That's exactly what real AI researchers and journalists do.

  Take five quiet minutes and write **three or four sentences** (in a comment at the bottom of your Trinket, or in your notebook):

  - 🔎 What **surprised** you most about the AI system you investigated?
  - 🧠 Before this term, did you think it used **rules or learning**? Were you right?
  - ⚖️ What is **one thing** you would change to make it fairer or safer?
  - 🗣️ Will investigating it change how you **use** it from now on?

  **Share one sentence in the Zoom chat.**

  > 💡 Investigating an AI isn't about deciding it's "good" or "bad" — it's about understanding it well enough to use it **wisely** and to speak up when something isn't right. That is what an AI Scholar does.
---

# Year 2, Lesson 7: Project — AI Investigation Report 🔍📝

**Course:** AI Concepts Deep Dive
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Learn Today

- How to turn a **real investigation** into a real Python **project**
- How to build a **report printer** — one clear function per section — using f-strings
- How to store your findings tidily in **dictionaries and lists**
- How to **reuse your Week 3 rule-based classifier** as a mini-demo that proves a point
- How to present facts honestly — separating what's **true** from what's your **opinion**
- You'll finish with a program you can **present** next week for your **AI Scholar Badge** 🎓

---

## 🤖 BrightByte's Big Announcement

> *"This is it — BUILD WEEK. For six weeks you've been training as an AI detective: you learned rules versus learning, you met datasets and labels, you built a classifier and a chatbot, you wrestled with bias and ethics, and last week you chose a real AI system to investigate. Today we turn all of that into a real project — a program that prints your findings like a proper report, with a live demo to back it up. Next week you present it and earn your AI Scholar Badge. Detectives, open your notebooks — let's build the case file!"*
> — BrightByte 🤖🔍

---

## 🧩 Part 1: The Mission — What Are We Building?

Your term project — the **AI Investigation Report** — has **two parts**, and today we build both:

1. **A written investigation** of the real AI system you chose in Week 6, following the five-question checklist you already know.
2. **A small demo program** that shows one AI concept in action — we'll reuse your **Week 3 rule-based classifier** to illustrate a point from your report.

Instead of writing the report on paper, we do it the **programmer's way**: we write a Python program that **prints** the report — with a banner, five neat sections, and a running demo at the end. That means your investigation *is* a Python deliverable.

Here's the five-question checklist from Week 6 — every question becomes a **section** of your report:

| # | Section | The Question It Answers |
|---|---|---|
| 1 | What is it? | What is the system and what does it do? |
| 2 | What data? | What data does it use or learn from? |
| 3 | How does it decide? | Rules a human wrote, or learning from examples? |
| 4 | What could go wrong? | What are the risks? Who might it be unfair to? |
| 5 | Used responsibly? | Is it being used in a fair, honest way? |

> 📁 **BEFORE WE START:** Open Trinket, create a **new** Python trinket, and name it exactly **`Y2-T5-W7-Investigation`**. This is your term-project file — you present it next week!

---

## 🗂️ Part 2: The Plan — A Report Printer

We'll build the program in **four steps**:

1. **The findings** — store your research in a dictionary and a couple of lists at the top.
2. **The report printer** — one function per section, each using `print()` and f-strings.
3. **The mini-demo** — your rule-based classifier, plus a `run_demo()` to show it off.
4. **Run it** — call the functions in order, top to bottom.

Why **one function per section**? Because it keeps your program tidy and easy to change. If you learn a new fact about the data, you edit `print_data()` and nothing else. This is exactly how programmers keep big programs under control — small, named jobs.

Here's the shape of the finished report so you know where we're heading:

```
========================================================
      🔍  AI INVESTIGATION REPORT  📝
========================================================

SECTION 1 — WHAT IS IT?
--------------------------------------------------------
System name : StreamHive Video Recommender
...

MINI-DEMO — A TINY RULE-BASED CLASSIFIER
--------------------------------------------------------
...
========================================================
Report by: Amara Okafor — KidsLearnAI AI Scholar 🎓
========================================================
```

---

## 📦 Part 3: Step 1 — The Findings Box

First we store what we found. A **dictionary** is perfect for the facts that come in pairs (name → value), and a **list** is perfect for things that come in groups (like several kinds of data, or several risks).

```python
ai_system = {
    "name": "StreamHive Video Recommender",
    "who_made_it": "a video streaming company",
    "used_for": "suggesting the next video you should watch",
}

data_used = [
    "which videos you watched before",
    "how long you watched each one",
    "videos that people like you enjoyed",
    "what you typed into the search box",
]

how_it_decides = "learning"   # "rules", "learning" or "not sure"

risks = [
    "it can trap you in a bubble of very similar videos",
    "it might suggest content that is not right for your age",
    "it may be unfair to creators whose videos it rarely shows",
]

responsible = {
    "verdict": "partly",
    "reason": "it has a kids mode and a report button, but it never explains WHY it picks each video",
}
```

> 💡 These are **example** findings for a made-up system. You will replace every value with **your own** research from Week 6. The structure stays the same; only the words change.

✅ **Zoom checkpoint:** Run it. No output yet — but no red errors either? Thumbs up! 👍

---

## 🏷️ Part 4: Step 2 — The Banner and Section 1

Every professional report opens with a title. We reuse the `"=" * N` trick you've used since Term 1.

```python
def print_banner():
    print("=" * 56)
    print("      🔍  AI INVESTIGATION REPORT  📝")
    print("=" * 56)
```

Now the first section function. It takes the `ai_system` dictionary and prints three tidy lines with f-strings:

```python
def print_intro(system):
    print()
    print("SECTION 1 — WHAT IS IT?")
    print("-" * 56)
    print(f"System name : {system['name']}")
    print(f"Made by     : {system['who_made_it']}")
    print(f"It is used for {system['used_for']}.")
```

Call them at the bottom of your program:

```python
print_banner()
print_intro(ai_system)
```

**Run it. Output:**
```
========================================================
      🔍  AI INVESTIGATION REPORT  📝
========================================================

SECTION 1 — WHAT IS IT?
--------------------------------------------------------
System name : StreamHive Video Recommender
Made by     : a video streaming company
It is used for suggesting the next video you should watch.
```

> 💡 `print()` with nothing inside prints a **blank line** — that's the little gap before each section that makes the report easy to read. Notice we read a value out of a dictionary with `system['name']` inside the f-string.

✅ **Zoom checkpoint:** See your banner and Section 1? Thumbs up! 👍

---

## 📊 Part 5: Step 2 (continued) — Sections 2 and 3

**Section 2** lists the data. Since `data_used` is a list, we **loop** over it and print each item with a bullet. We use `len(data)` to count how many there are.

```python
def print_data(data):
    print()
    print("SECTION 2 — WHAT DATA DOES IT USE?")
    print("-" * 56)
    print(f"It learns from {len(data)} main kinds of data:")
    for item in data:
        print(f"  • {item}")
```

**Section 3** answers the big question: rules or learning? This is a perfect use of `if/elif/else`.

```python
def print_decision(method):
    print()
    print("SECTION 3 — HOW DOES IT DECIDE?")
    print("-" * 56)
    if method == "learning":
        print("It DECIDES BY LEARNING from examples (data), not fixed rules.")
    elif method == "rules":
        print("It DECIDES BY RULES that humans wrote by hand.")
    else:
        print("I am not sure yet whether it uses rules or learning.")
```

Add both calls (in order) after `print_intro`:

```python
print_data(data_used)
print_decision(how_it_decides)
```

**Run it. The two new sections:**
```

SECTION 2 — WHAT DATA DOES IT USE?
--------------------------------------------------------
It learns from 4 main kinds of data:
  • which videos you watched before
  • how long you watched each one
  • videos that people like you enjoyed
  • what you typed into the search box

SECTION 3 — HOW DOES IT DECIDE?
--------------------------------------------------------
It DECIDES BY LEARNING from examples (data), not fixed rules.
```

> 💡 Because we used `len(data)`, the "4" fixes itself automatically. Add a fifth kind of data to the list and it says "5" — you never edit the number by hand.

✅ **Zoom checkpoint:** In the chat, type whether YOUR system uses `rules` or `learning`.

---

## ⚠️ Part 6: Step 2 (continued) — Sections 4 and 5

**Section 4** lists the risks, this time **numbered**. We keep a counter that goes up each time round the loop.

```python
def print_risks(risks):
    print()
    print("SECTION 4 — WHAT COULD GO WRONG?")
    print("-" * 56)
    print(f"I found {len(risks)} possible problems:")
    number = 1
    for risk in risks:
        print(f"  {number}. {risk}")
        number += 1
```

**Section 5** gives your verdict. We use `.upper()` to shout the verdict in capitals, and print the reason underneath.

```python
def print_responsibility(info):
    print()
    print("SECTION 5 — IS IT USED RESPONSIBLY?")
    print("-" * 56)
    print(f"My verdict: {info['verdict'].upper()}")
    print(f"Because: {info['reason']}")
```

Add the calls in order:

```python
print_risks(risks)
print_responsibility(responsible)
```

**Run it. The final two sections:**
```

SECTION 4 — WHAT COULD GO WRONG?
--------------------------------------------------------
I found 3 possible problems:
  1. it can trap you in a bubble of very similar videos
  2. it might suggest content that is not right for your age
  3. it may be unfair to creators whose videos it rarely shows

SECTION 5 — IS IT USED RESPONSIBLY?
--------------------------------------------------------
My verdict: PARTLY
Because: it has a kids mode and a report button, but it never explains WHY it picks each video
```

> 💡 `"partly".upper()` gives `"PARTLY"`. It doesn't change your stored value — it just makes an UPPERCASE copy to print.

✅ **Zoom checkpoint:** Run the whole report top to bottom. All five sections showing? Thumbs up! 👍

---

## 🧪 Part 7: Step 3 — The Mini-Demo (Your Week 3 Classifier, Reused!)

A report is stronger when you can **show, not just tell**. Section 3 says our system makes decisions — so let's demonstrate one simple kind of decision with a **rule-based classifier**, exactly like the one you built in Week 3.

This mini-classifier looks at a video **title** and sorts it into `safe for kids`, `NOT for kids`, or `needs a human to check` — using **rules a human wrote** (that's you!).

```python
def classify_video(title):
    title = title.lower()   # so BIG and small letters both match
    grown_words = ["horror", "casino", "violent", "scary"]
    kid_words = ["cartoon", "nursery", "counting", "alphabet", "puppy"]
    for word in grown_words:
        if word in title:
            return "NOT for kids 🔞"
    for word in kid_words:
        if word in title:
            return "safe for kids ✅"
    return "needs a human to check 🤔"
```

> 💡 We call `title.lower()` **first** so that `"SCARY"`, `"Scary"`, and `"scary"` all match. This is the same case-sensitivity trap from your Week 4 chatbot — always lower-case the text before you search it.

Now a function that runs the demo on a few test titles:

```python
def run_demo():
    print()
    print("MINI-DEMO — A TINY RULE-BASED CLASSIFIER")
    print("-" * 56)
    print("This shows ONE way an app could sort videos using RULES.")
    test_titles = [
        "Fun Counting Song for Toddlers",
        "Scary Horror Story at Midnight",
        "My Trip to the Market",
    ]
    for title in test_titles:
        label = classify_video(title)
        print(f'  "{title}"')
        print(f"     -> {label}")
```

Call `run_demo()` last, then add a footer with your name:

```python
run_demo()
print()
print("=" * 56)
print("Report by: Amara Okafor — KidsLearnAI AI Scholar 🎓")
print("=" * 56)
```

**Run it. The demo and footer:**
```

MINI-DEMO — A TINY RULE-BASED CLASSIFIER
--------------------------------------------------------
This shows ONE way an app could sort videos using RULES.
  "Fun Counting Song for Toddlers"
     -> safe for kids ✅
  "Scary Horror Story at Midnight"
     -> NOT for kids 🔞
  "My Trip to the Market"
     -> needs a human to check 🤔
```
```
========================================================
Report by: Amara Okafor — KidsLearnAI AI Scholar 🎓
========================================================
```

### 🔎 Why This Demo Matters

Look at the third title — *"My Trip to the Market"*. It's a perfectly innocent home video, but our classifier says **"needs a human to check"** because it contains **none** of our keywords. That's a real weakness of rule-based systems: they only know the words you told them. A perfect example for your report — you can *show* the class exactly where rules run out!

---

## ✅ The Whole Program — Run It!

Here is your complete AI Investigation Report. This is what should be in your `Y2-T5-W7-Investigation` Trinket (swap in **your own** findings):

```python
# 🔍 Y2-T5-W7-Investigation — AI Investigation Report
# Investigator: Amara Okafor

ai_system = {
    "name": "StreamHive Video Recommender",
    "who_made_it": "a video streaming company",
    "used_for": "suggesting the next video you should watch",
}
data_used = [
    "which videos you watched before",
    "how long you watched each one",
    "videos that people like you enjoyed",
    "what you typed into the search box",
]
how_it_decides = "learning"
risks = [
    "it can trap you in a bubble of very similar videos",
    "it might suggest content that is not right for your age",
    "it may be unfair to creators whose videos it rarely shows",
]
responsible = {
    "verdict": "partly",
    "reason": "it has a kids mode and a report button, but it never explains WHY it picks each video",
}

def print_banner():
    print("=" * 56)
    print("      🔍  AI INVESTIGATION REPORT  📝")
    print("=" * 56)

def print_intro(system):
    print()
    print("SECTION 1 — WHAT IS IT?")
    print("-" * 56)
    print(f"System name : {system['name']}")
    print(f"Made by     : {system['who_made_it']}")
    print(f"It is used for {system['used_for']}.")

def print_data(data):
    print()
    print("SECTION 2 — WHAT DATA DOES IT USE?")
    print("-" * 56)
    print(f"It learns from {len(data)} main kinds of data:")
    for item in data:
        print(f"  • {item}")

def print_decision(method):
    print()
    print("SECTION 3 — HOW DOES IT DECIDE?")
    print("-" * 56)
    if method == "learning":
        print("It DECIDES BY LEARNING from examples (data), not fixed rules.")
    elif method == "rules":
        print("It DECIDES BY RULES that humans wrote by hand.")
    else:
        print("I am not sure yet whether it uses rules or learning.")

def print_risks(risks):
    print()
    print("SECTION 4 — WHAT COULD GO WRONG?")
    print("-" * 56)
    print(f"I found {len(risks)} possible problems:")
    number = 1
    for risk in risks:
        print(f"  {number}. {risk}")
        number += 1

def print_responsibility(info):
    print()
    print("SECTION 5 — IS IT USED RESPONSIBLY?")
    print("-" * 56)
    print(f"My verdict: {info['verdict'].upper()}")
    print(f"Because: {info['reason']}")

def classify_video(title):
    title = title.lower()
    grown_words = ["horror", "casino", "violent", "scary"]
    kid_words = ["cartoon", "nursery", "counting", "alphabet", "puppy"]
    for word in grown_words:
        if word in title:
            return "NOT for kids 🔞"
    for word in kid_words:
        if word in title:
            return "safe for kids ✅"
    return "needs a human to check 🤔"

def run_demo():
    print()
    print("MINI-DEMO — A TINY RULE-BASED CLASSIFIER")
    print("-" * 56)
    print("This shows ONE way an app could sort videos using RULES.")
    test_titles = [
        "Fun Counting Song for Toddlers",
        "Scary Horror Story at Midnight",
        "My Trip to the Market",
    ]
    for title in test_titles:
        label = classify_video(title)
        print(f'  "{title}"')
        print(f"     -> {label}")

# --- Run the whole report ---
print_banner()
print_intro(ai_system)
print_data(data_used)
print_decision(how_it_decides)
print_risks(risks)
print_responsibility(responsible)
run_demo()
print()
print("=" * 56)
print("Report by: Amara Okafor — KidsLearnAI AI Scholar 🎓")
print("=" * 56)
```

🎉 **You built a real investigation report — as a program!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: Presenting an opinion as if it were a fact**

❌ Sloppy — states a guess as truth:
```python
responsible = {"verdict": "no", "reason": "the company sells all your data to criminals"}
```
If you can't prove it, don't print it as a fact.

✅ Honest — flags it as your view, or states only what you found:
```python
responsible = {"verdict": "partly", "reason": "I could not find out who they share data with, so I am unsure"}
```

> An AI Scholar separates **what is true** from **what they think**. Write "I think..." or "I could not verify..." when you're not certain.

---

**Mistake 2: Forgetting to lower-case in the classifier**

❌ Wrong — misses capitalised words:
```python
def classify_video(title):
    grown_words = ["scary"]
    if "scary" in title:      # title is still "Scary Horror..."
        return "NOT for kids 🔞"
    return "needs a human to check 🤔"
```
```
  "Scary Horror Story at Midnight"
     -> needs a human to check 🤔
```
😱 It missed it! `"scary"` is not inside `"Scary Horror..."` because of the capital **S**.

✅ Correct — lower-case the title first:
```python
def classify_video(title):
    title = title.lower()     # now it's "scary horror..."
    if "scary" in title:
        return "NOT for kids 🔞"
    return "needs a human to check 🤔"
```

---

**Mistake 3: Calling the section functions in the wrong order (or forgetting one)**

❌ Wrong — Section 3 appears before Section 2, and the demo never runs:
```python
print_intro(ai_system)
print_decision(how_it_decides)
print_data(data_used)
# forgot run_demo()!
```

✅ Correct — call them in report order, and don't forget the demo:
```python
print_intro(ai_system)
print_data(data_used)
print_decision(how_it_decides)
print_risks(risks)
print_responsibility(responsible)
run_demo()
```

> The functions run in the order you **call** them, not the order you **define** them.

---

**Mistake 4: Forgetting to cite where facts came from**

❌ A report with no sources is hard to trust — a reader can't check it.

✅ Add a sources section (the ⭐⭐ homework) or a comment noting where each fact came from, e.g. `# found on the app's official help page`. Real investigations always show their working.

---

## 🏗️ Class Activity: Build the Report Printer Together

Follow the five stages in the activity panel — build the findings box, the banner, then each section function, and finally wire in your demo. Run after every stage and thumbs-up when it works. Then start swapping in **your own** Week 6 findings. Your teacher will drop into breakout checkpoints to help.

---

## 🌟 What's Coming Next Week?

Next week is the big one — **Week 8: the AI Summit!** 🎓🎉

- 🎤 You **present** your AI Investigation Report to the class — banner, five sections, live demo
- 🔍 You share **one surprising thing** you discovered about your AI system
- 🏆 You earn your **AI Scholar Badge** — the crown of Term 5!
- 🎬 It's a celebration of everything you've learned about how AI really works

> Your homework this week *is* your Summit presentation. Polish it, practise reading it aloud, and make sure the demo runs first time. See you on stage! 🌟

---

## 🏆 Today's Achievements

- ✅ You turned a **real investigation** into a real Python **project**
- ✅ You built a **report printer** — one function per section — with f-strings
- ✅ You stored findings in **dictionaries and lists** and looped over them
- ✅ You **reused your Week 3 classifier** as a demo that proves a point
- ✅ You practised presenting facts **honestly** — truth vs opinion
- ✅ You have a project ready to present for your **AI Scholar Badge** 🎓

> *"Look at what you built. Six weeks ago 'AI' was a mystery box. Today you investigated a real system, explained its data and its decisions, named its dangers — and wrote a program that prints the whole case file with a working demo on the end. That's not using AI. That's UNDERSTANDING it. One more week, Scholar — then the badge is yours."*
> — BrightByte 🤖🎓

---

## 📚 Homework: Finish Your AI Investigation Report

Make your report **presentation-ready** for the AI Summit!

**Requirements:**
1. Open your **`Y2-T5-W7-Investigation`** Trinket
2. Fill in ALL five sections with **your own** Week 6 research
3. Make sure the demo (`classify_video` + `run_demo`) **runs** and connects to your report
4. Put YOUR name in the footer line

**Challenge tiers:**
- ⭐ All five sections filled in, report runs top to bottom
- ⭐⭐ Add a 6th `print_sources()` section listing WHERE you found your facts
- ⭐⭐⭐ Add 2–3 more test titles (include a tricky one) and explain in a comment what your classifier gets **wrong**

> ⚠️ Only write facts you can back up. If something is your opinion, say so.

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email. **Bring it ready to present next week!**

---

*You didn't just learn about AI today — you INVESTIGATED it and built the case file. See you at the Summit! 🔍📝🎓*
