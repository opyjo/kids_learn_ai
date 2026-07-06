---
title: "Dream It: Capstone Planning 💭🎯"
description: "The final term begins! You're a real programmer now — brainstorm your own capstone project, then write a mini-spec with must-have and nice-to-have features"
difficulty: "intermediate"
order_index: 1
course_slug: "year2-term-8-capstone"
is_premium: false
requires_trinket: true
starter_code: |
  # 💭 Capstone Planning — Project Pitch!
  # This week is about DESIGN, not code. But every big program
  # starts with a tiny "pitch" — so let's write one.

  # Fill in YOUR project details, then run it to hear your pitch out loud.
  project_name = "Study Buddy"          # <-- change to YOUR project name
  what_it_does = "helps you track your study hours and stay motivated"

  must_haves = [
      "log study sessions in a menu",
      "show a text bar chart of hours per subject",
  ]

  print("=" * 40)
  print("🎯 MY CAPSTONE PITCH")
  print("=" * 40)
  print("Project:", project_name)
  print("It", what_it_does + ".")
  print("Must-have features:")
  for feature in must_haves:
      print(" •", feature)
  print("=" * 40)

  # TODO: change every line above to describe YOUR project!
solution_code: |
  # 💭 Capstone Planning — Project Pitch (a filled-in example)

  project_name = "Study Buddy"
  what_it_does = "helps you track your study hours and stay motivated"

  must_haves = [
      "log study sessions in a menu",
      "show a text bar chart of hours per subject",
      "give a motivational tip when you type how you feel",
  ]
  nice_to_haves = [
      "a quick quiz to test yourself",
  ]

  print("=" * 40)
  print("🎯 MY CAPSTONE PITCH")
  print("=" * 40)
  print("Project:", project_name)
  print("It", what_it_does + ".")
  print()
  print("MUST-HAVE features (I will finish these):")
  for feature in must_haves:
      print(" ✅", feature)
  print()
  print("NICE-TO-HAVE features (if I have time):")
  for feature in nice_to_haves:
      print(" ⭐", feature)
  print("=" * 40)
  print("Built with Year 2 skills: lists of dicts, loops,")
  print("functions, dictionaries, f-strings, and a keyword assistant!")
class_activities: |
  ## 🎤 Class Activity: Pitch It!

  Time to dream up YOUR capstone and pitch it to the class.

  ### Step 1 — Brainstorm (⭐)
  Look at the **Ideas Menu** in the lesson. Pick a theme that excites you — a game, a tracker, a mini-assistant, a data story, or a quiz app. Jot down 2-3 ideas you like.

  ### Step 2 — Write your mini-spec (⭐⭐)
  Fill in the **Mini-Spec Template**:
  1. **Project name** (make it fun!)
  2. **What it does** (one sentence)
  3. **2-3 MUST-HAVE features** (the core — you WILL finish these)
  4. **1-2 NICE-TO-HAVE features** (stretch goals — only if there's time)
  5. **Year 2 skills** it will use

  ### Step 3 — Pitch it in the chat (⭐⭐⭐)
  Post your pitch in the **Zoom chat** in **1-2 sentences**, like this:

  > "My capstone is **Recipe Randomiser** — it stores recipes in a list of dicts and suggests a random meal when you can't decide what to cook!"

  Then react with 🎉 or 👍 to **two** classmates' pitches you're excited about. Peer energy makes the whole class braver!

  ### Bonus — Pitch out loud
  Feeling bold? Unmute and pitch your project to the class in 15 seconds. Real developers pitch ideas all the time — this is great practice.
take_home_assignment: |
  ## 📚 Homework: Finalise Your Capstone Mini-Spec

  Lock in the project you'll build over the next 6 weeks. Complete your **mini-spec** and bring it to Week 2, where we start building!

  **Your mini-spec must include:**
  1. **Project name**
  2. **Description** — one clear sentence on what it does
  3. **2-3 MUST-HAVE features** — the core of your project
  4. **1-2 NICE-TO-HAVE features** — stretch goals for later
  5. **Year 2 skills** you'll use (list at least 3, e.g. lists of dicts, loops, functions, f-strings, try/except)

  **Two ways to submit — pick one:**
  - Type your mini-spec neatly and paste it in the class WhatsApp/email, **or**
  - Type it as comments at the top of a Trinket and share the link.

  **Challenge tiers:**
  - ⭐ Name, description, and 2 must-haves
  - ⭐⭐ Full mini-spec: name, description, 3 must-haves, 1 nice-to-have, and 3 skills
  - ⭐⭐⭐ Also sketch your **menu** — write out the list of options your program will show the user (this is your Week 2 head-start!)

  > 🔑 **The golden rule:** keep it SMALL enough to finish. It's far better to fully finish a simple project than to half-build a huge one. You can always add nice-to-haves later!

  **Trinket for this week:** `Y2-T8-W1-CapstonePlan`
ai_activities: |
  ## 🤖 How Real AI Products Start: With a Spec

  Every app on your phone — and every AI product like a chatbot or image generator — started as a **plan**, not code. Teams write a short document that answers three questions:

  - **What problem does it solve?**
  - **What MUST it do** to be useful (the must-haves)?
  - **What's a nice extra** if there's time (the nice-to-haves)?

  Then they build the must-haves FIRST and only add extras if there's time. That's called building a **minimum viable product** — the smallest version that actually works and is useful.

  **Discuss in the Zoom chat:** think of an AI tool you've used. What do you think was its ONE must-have feature — the thing it absolutely had to do well?

  You're about to do exactly what professional teams do: write a spec, then build the must-haves first. Your capstone is real software engineering. 🚀
---

# Year 2, Lesson 1: Dream It — Capstone Planning 💭🎯

**Course:** Capstone & Portfolio
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Do Today

- Celebrate reaching the **final term** — you're a real programmer now, and you get to choose your OWN project!
- Learn what makes a **good capstone** — one that uses your skills, is achievable, and is something you care about
- Explore an **Ideas Menu** across all the Year 2 themes
- Write your first **mini-spec**: project name, what it does, must-have features, and nice-to-have features
- Meet the **Study Buddy** worked example — a model capstone we'll follow through the build weeks
- **Pitch** your idea to the class and catch some peer excitement

---

## 🤖 BrightByte Has an Announcement!

> *"Programmers... this is it. The FINAL term. Look how far you've come — a year ago some of you weren't sure you could code at all. Now? You've built calculators, arcade games, text adventures, contact managers, an AI assistant, and data stories. Seven terms of real projects. This term is different from every term before it: I'm not giving you a project. YOU are. You dream it, you spec it, you build it, and in eight weeks you graduate as an AI-Ready Developer. Today we dream. Let's make it something you're proud of."*
> — BrightByte 🤖🎓

---

## 🏆 Part 1: You're a Real Programmer Now

For seven terms, we handed you the project. Smart Calculator. Arcade games. Contact Manager. The AI assistant. Every time, we told you *what* to build.

**Not this term.**

This term, you're doing what professional developers do every single day: you decide what to build. That's a big deal — it means you've grown from "someone learning to code" into **someone who codes**.

Here's the whole term at a glance:

| Week | What Happens |
|---|---|
| 1 | 💭 **Dream It: Capstone Planning** (you are here!) |
| 2 | 🧰 Toolkit Review & Skeleton Build |
| 3 | 🔨 Build Sprint 1 |
| 4 | 🐛 Build Sprint 2 + Debugging Clinic |
| 5 | ✨ Build Sprint 3: Add the Wow |
| 6 | 💅 Polish & Test |
| 7 | 🎤 Portfolio & Presentation Prep |
| 8 | 🎓 **GRADUATION: Portfolio Showcase** |

> **The prize:** at Week 8's showcase, you'll present your finished capstone and receive the **AI-Ready Developer Certificate**. That certificate says you can take an idea from a blank screen all the way to a working program. Let's earn it.

---

## 💡 Part 2: What Makes a GOOD Capstone?

Not every idea makes a good capstone. The best ones tick **three boxes**:

| ✅ A good capstone... | Why it matters |
|---|---|
| **Uses your Year 2 skills** | You already know how to build it — you're combining tools you've mastered, not learning brand-new ones |
| **Is achievable in a few weeks** | Small enough to actually FINISH — a finished small project beats an unfinished huge one every time |
| **Is something you care about** | You'll spend 6 weeks on it — pick a topic that makes YOU want to open Trinket |

Think of it like a recipe: you already own all the ingredients (your skills). The capstone is choosing a dish you'd love to eat and that you can actually cook with what's in your kitchen.

> ⚠️ **The #1 trap:** dreaming TOO big. "I'll build a 3D multiplayer game with online accounts" is exciting — but impossible in Trinket with plain Python. We'll help you scope it down to something brilliant AND finishable.

---

## 🗂️ Part 3: The Ideas Menu

Stuck for ideas? Here's a menu across every Year 2 theme. You can pick one, remix two, or use these as a springboard for your own idea.

| Theme | Example Capstone | Skills It Uses |
|---|---|---|
| 🎮 **A Game** | Number-guessing showdown, word-guess (hangman-style), a text quiz-battle | loops, `random`, if/elif/else, functions |
| 📇 **A Manager / Tracker** | Habit tracker, pet-care logbook, football-league table, homework planner | lists of dicts, menu loops, dictionaries |
| 🤖 **A Mini-Assistant** | Study helper, mood check-in bot, recipe suggester, revision coach | keyword intents, functions, `random` |
| 📊 **A Data Story Tool** | Sleep-vs-mood analyser, class-survey summariser, pocket-money tracker with charts | lists of dicts, stats, text bar charts |
| ❓ **A Quiz App** | Capital cities quiz, times-tables trainer, science flash-cards | lists of dicts, loops, scoring, functions |

> 💬 **The best capstones often MIX themes.** A study tracker that also quizzes you? A game that saves a high-score table? Mixing is encouraged — as long as you keep the must-haves small.

### 💬 Class Discussion

> **Which theme pulls at you most?** Type its emoji in the **Zoom chat** — 🎮 📇 🤖 📊 or ❓. Let's see what this class loves to build!

---

## 📝 Part 4: The Mini-Spec — Your Project Blueprint

Before writing a single line of the real program, professional developers write a **spec** (short for *specification*) — a short plan describing what they'll build. You'll write a small one: a **mini-spec**.

Here's the template you'll fill in:

| Section | What to Write | Example |
|---|---|---|
| **Project name** | A fun, clear name | Study Buddy |
| **What it does** | One sentence | Helps you track study hours and stay motivated |
| **Must-have features** | 2-3 core features | Log sessions; show a chart; give a tip |
| **Nice-to-have features** | 1-2 stretch goals | Add a quiz mode |
| **Year 2 skills used** | List at least 3 | Lists of dicts, loops, functions, f-strings |

### Must-Have vs Nice-to-Have — the most important idea today

This split is the secret to finishing. Get it right and your project will succeed.

| 🎯 MUST-HAVE | ⭐ NICE-TO-HAVE |
|---|---|
| The **core** — without these, the project isn't really "done" | **Bonus** features — nice, but the project works fine without them |
| Build these **first** | Build these **only if** there's time left |
| Keep it to **2-3** | Keep it to **1-2** |
| Example: "log study sessions" | Example: "add sound effects" (well... emoji effects!) |

> 🔑 **Golden rule:** finish ALL your must-haves before you touch a single nice-to-have. A working small project always beats a broken big one.

---

## 🌟 Part 5: The Worked Example — "Study Buddy"

To show you what a good mini-spec looks like, here's one we'll follow through the whole term. Meet **Study Buddy** — a program that helps a student track their studying and stay motivated.

Here's its complete mini-spec:

| Section | Study Buddy |
|---|---|
| **Project name** | Study Buddy 📚 |
| **What it does** | A menu-driven program that tracks your study sessions and helps you stay motivated |
| **Must-have 1** | **Log sessions** — a menu that adds study sessions to a list of dicts (`subject`, `hours`) |
| **Must-have 2** | **Show stats + chart** — total hours, hours per subject, and a text bar chart |
| **Must-have 3** | **Motivational assistant** — type how you feel, get a matching tip (keyword mini-assistant) |
| **Nice-to-have 1** | **Quiz mode** — a quick quiz to test yourself |
| **Nice-to-have 2** | **Top subject badge** — highlight the subject you've studied most |
| **Skills used** | Lists of dicts, menu loops (`while`/`break`), dictionaries (tally hours), functions, f-strings, if/elif/else, text bar charts, keyword assistant, `try`/`except`, `random` |

Notice how it ticks all three boxes: it **uses Year 2 skills** you already have, it's **achievable** (three focused must-haves), and it's about something students **care about** (studying smarter).

> 📌 **Study Buddy is just ONE example.** Your project can be totally different! We'll return to Study Buddy each build week to show HOW to build a capstone — but the goal is for you to build YOURS.

Here's a tiny taste of the kind of "pitch" your project can print — try it in Trinket:

```python
project_name = "Study Buddy"
what_it_does = "helps you track your study hours and stay motivated"

print("=" * 40)
print("🎯 MY CAPSTONE PITCH")
print("=" * 40)
print("Project:", project_name)
print("It", what_it_does + ".")
print("=" * 40)
```

**Output:**
```
========================================
🎯 MY CAPSTONE PITCH
========================================
Project: Study Buddy
It helps you track your study hours and stay motivated.
========================================
```

That's the entire code for today — because this week is about **thinking**, not typing. The typing starts next week!

---

## ⚠️ Common Mistakes (Planning Pitfalls!)

**Pitfall 1: Scope too big** 🐘

❌ Too big to finish:
```
Project: MegaGame3000 — a 3D game with online multiplayer,
accounts, a store, and 50 levels.
```
(This is impossible in Trinket with plain Python — and 6 weeks is not enough.)

✅ Right-sized:
```
Project: Dungeon Dash — a text adventure with 5 rooms,
a health score, and one boss fight.
```

> If your idea would take a professional team six months, it's too big. Shrink it to the ONE best part.

---

**Pitfall 2: No clear must-haves** 🌫️

❌ Vague:
```
"It's like... a helper thing that does useful stuff."
```
(If you can't list what it MUST do, you can't build it — or know when it's finished.)

✅ Clear:
```
Must-haves: (1) show a menu, (2) log items to a list,
(3) show a summary. Done when all three work.
```

> Clear must-haves are your finish line. Without them, you never know when you're done.

---

**Pitfall 3: Picking something you don't care about** 😴

❌ Chosen because it "sounds easy":
```
Project: Boring Number Printer — prints numbers 1 to 100.
```
(You'll be bored by Week 2 and won't want to finish.)

✅ Chosen because you love it:
```
Project: Afrobeats Quiz — test your knowledge of your
favourite songs and artists!
```

> You'll spend 6 weeks with this project. Pick something that makes you *want* to open Trinket.

---

## 🎤 Part 6: Pitch It! (Class Activity)

Now it's YOUR turn. Follow the three steps:

1. **Brainstorm** using the Ideas Menu — pick a theme, jot down 2-3 ideas.
2. **Write your mini-spec** using the template — name, what it does, 2-3 must-haves, 1-2 nice-to-haves, skills.
3. **Pitch it in the Zoom chat** in 1-2 sentences.

**Example pitch to copy the style of:**

> "My capstone is **Kitchen Chaos** — a recipe manager that stores meals in a list of dicts and suggests a random dinner when I can't decide what to cook! 🍲"

Then give a 🎉 or 👍 to **two** classmates' pitches. The braver the class, the better everyone's ideas get!

---

## 🌟 What's Coming Next Week?

Next week is **Week 2: Toolkit Review & Skeleton Build** 🧰

You'll:
- Do a lightning review of the Year 2 tools you'll need (menus, lists of dicts, functions)
- Turn your mini-spec into a **skeleton** — the empty menu and function "shells" of your program
- Get your project running end-to-end (even if the features are empty!) so you have a solid frame to build on

> Bring your **finalised mini-spec** — Week 2 is where the building begins! 🔨

---

## 🏆 Today's Achievements

- ✅ You reached the FINAL term of Year 2 — you're a real programmer now
- ✅ You learned the three marks of a good capstone: uses your skills, achievable, something you care about
- ✅ You explored the Ideas Menu across every Year 2 theme
- ✅ You met the mini-spec and the crucial **must-have vs nice-to-have** split
- ✅ You saw the **Study Buddy** worked example
- ✅ You pitched your own project idea to the class

> *"You just did the hardest part of any project — turning a blank page into a plan. Everything from here is building. I cannot wait to see what you dream up. Six weeks from now, you'll be showing it off at graduation. Let's go!"*
> — BrightByte 🤖🎓

---

## 📚 Homework: Finalise Your Capstone Mini-Spec

Lock in the project you'll build over the next 6 weeks. Complete your **mini-spec** and bring it to Week 2!

**Your mini-spec must include:**
1. **Project name**
2. **Description** — one clear sentence
3. **2-3 MUST-HAVE features**
4. **1-2 NICE-TO-HAVE features**
5. **Year 2 skills** you'll use (at least 3)

**Challenge tiers:**
- ⭐ Name, description, and 2 must-haves
- ⭐⭐ Full mini-spec: name, description, 3 must-haves, 1 nice-to-have, 3 skills
- ⭐⭐⭐ Also sketch your **menu** — the list of options your program will show

**Submit:** type your mini-spec and paste it in the class WhatsApp/email, or write it as comments in a Trinket (`Y2-T8-W1-CapstonePlan`) and share the link.

> 🔑 Remember the golden rule: **keep it small enough to finish.**

---

*You dreamed it. Next week, you build it. Welcome to your capstone, programmer. 💭🎯*
