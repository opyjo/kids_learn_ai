---
title: "Portfolio & Presentation Prep 📁🎤"
description: "Gather all EIGHT of your Year 2 projects into one portfolio, build a Portfolio Index program, and rehearse the graduation demo you'll give next week"
difficulty: "intermediate"
order_index: 7
course_slug: "year2-term-8-capstone"
is_premium: false
requires_trinket: true
starter_code: |
  # 📁 My Year 2 Portfolio Index — STARTER
  # This little program IS a portfolio artefact. It prints every project
  # you built this year, with a description and its Trinket link.
  #
  # Your job today: fill in YOUR real project details and Trinket links,
  # then run it. We'll build the full version together in class.

  portfolio = [
      {
          "term": 1,
          "name": "Smart Calculator",
          "description": "A menu calculator that does real maths and never crashes.",
          "link": "https://trinket.io/python/PASTE-YOUR-LINK",
      },
      {
          "term": 2,
          "name": "Arcade Game Collection",
          "description": "TODO: write one line about your arcade games.",
          "link": "https://trinket.io/python/PASTE-YOUR-LINK",
      },
      # TODO: add dictionaries for Terms 3, 4, 5, 6, 7 and 8!
  ]

  print("=" * 50)
  print("📁  MY YEAR 2 PORTFOLIO")
  print("=" * 50)

  for project in portfolio:
      print()
      print(f"Term {project['term']}: {project['name']}")
      print(f"   {project['description']}")
      print(f"   🔗 {project['link']}")

  print()
  print(f"Total projects: {len(portfolio)} 🎉")
solution_code: |
  # 📁 My Year 2 Portfolio Index — FULL VERSION
  # Eight projects. One year. All in one place.
  # Replace each "link" with YOUR real Trinket share link, then run it!

  portfolio = [
      {
          "term": 1,
          "name": "Smart Calculator",
          "description": "A menu calculator that does real maths and never crashes.",
          "link": "https://trinket.io/python/PASTE-YOUR-LINK",
      },
      {
          "term": 2,
          "name": "Arcade Game Collection",
          "description": "A set of loop-powered mini-games you play in the terminal.",
          "link": "https://trinket.io/python/PASTE-YOUR-LINK",
      },
      {
          "term": 3,
          "name": "Text Adventure Engine",
          "description": "A branching story game built from my own functions.",
          "link": "https://trinket.io/python/PASTE-YOUR-LINK",
      },
      {
          "term": 4,
          "name": "Contact Manager",
          "description": "An address book that stores people using lists and dictionaries.",
          "link": "https://trinket.io/python/PASTE-YOUR-LINK",
      },
      {
          "term": 5,
          "name": "AI Investigation Report",
          "description": "My deep-dive into how AI actually makes its decisions.",
          "link": "https://trinket.io/python/PASTE-YOUR-LINK",
      },
      {
          "term": 6,
          "name": "AI-Powered Assistant",
          "description": "A chat assistant I built that talks back to the user.",
          "link": "https://trinket.io/python/PASTE-YOUR-LINK",
      },
      {
          "term": 7,
          "name": "Data Story",
          "description": "A project that turns numbers into a text chart and a story.",
          "link": "https://trinket.io/python/PASTE-YOUR-LINK",
      },
      {
          "term": 8,
          "name": "Study Buddy (Capstone)",
          "description": "My biggest project — a study tracker I designed and built myself.",
          "link": "https://trinket.io/python/PASTE-YOUR-LINK",
      },
  ]

  print("=" * 50)
  print("📁  MY YEAR 2 PORTFOLIO  📁")
  print("        8 projects · 1 amazing year")
  print("=" * 50)

  for project in portfolio:
      print()
      print(f"Term {project['term']}: {project['name']}")
      print(f"   {project['description']}")
      print(f"   🔗 {project['link']}")

  print()
  print("=" * 50)
  print(f"Total projects: {len(portfolio)} 🎉")
  print("Built by a KidsLearnAI graduate. See you at graduation!")
  print("=" * 50)
class_activities: |
  ## 🎤 Class Activity: Build the Portfolio + Rehearse the Demo

  Two halves today. First we build a portfolio together; then we rehearse our graduation demos out loud.

  ### Part A — Build Your Portfolio Index (⭐)
  1. Open the starter code and complete all **8 project dictionaries** (Terms 1-8)
  2. Paste your **real Trinket share link** into each `link` field
  3. Run it — every project should print with its description and link
  4. **Zoom checkpoint:** thumbs up 👍 when all 8 projects print

  ### Part B — Add "What I'm Proudest Of" (⭐⭐)
  Give each project a `"proud"` key with one short sentence about the part you're most pleased with, and print it under the description.

  ### Part C — Rehearse in Pairs (⭐⭐⭐)
  Go into Zoom breakout rooms in pairs. Take turns giving your **5-step capstone demo** (about 2 minutes each). The listener gives ONE kind thing and ONE tip. Swap. Rehearse twice.

  ### Checkpoint before we leave
  - ✅ Portfolio Index prints all 8 projects with working links
  - ✅ You have given your demo out loud at least once
  - ✅ Every Trinket is set to **shareable** (test one link in a fresh tab!)
take_home_assignment: |
  ## 📚 Homework: Finish Your Portfolio + Rehearse Your Demo

  Two jobs before graduation next week.

  **Job 1 — Complete your Portfolio Index**
  1. All **8 projects** filled in (Terms 1-8): name, one-line description, Trinket link
  2. Every `link` is a **real, working, shareable** Trinket link (test each one in a new tab!)
  3. Add a "what I'm proudest of" line for at least your **capstone**
  4. Save it as `Y2-T8-W7-Portfolio`

  **Job 2 — Rehearse your graduation demo**
  1. Practise the **5-step demo** of your capstone out loud **3 times** (a mirror, a family member, or your pet all count!)
  2. Time it — aim for **2-3 minutes**
  3. Pick the **one feature** you're proudest of to show live
  4. Prepare **one sentence** about your whole Year 2 journey

  **Challenge tiers:**
  - ⭐ All 8 links working + demo rehearsed once
  - ⭐⭐ A "proud" line for every project + demo timed under 3 minutes
  - ⭐⭐⭐ Rehearse in front of a real person and ask them one practice question

  **Submit:** Save your `Y2-T8-W7-Portfolio` Trinket, click **Share**, copy the link, and paste it wherever your teacher asks. Come to Week 8 ready to present! 🎓
ai_activities: |
  ## 🤖 Light Chat: How Real Developers Show Their Work

  Professional programmers don't just write code — they show it off. It's called a **portfolio**.

  - 💼 A software developer's portfolio is often the FIRST thing an employer looks at — before any interview
  - 🌐 Many developers keep theirs online (on sites like GitHub) so anyone can see what they've built
  - 🧠 Even AI engineers keep portfolios — the people who build the AI tools you use started exactly where you are now

  **Discuss in the Zoom chat:** "If a stranger saw only your portfolio, which project would make them go *wow*?"

  Your Portfolio Index today is a real, working artefact — the same kind of thing professionals maintain their whole careers. You're not pretending to be a developer any more. You ARE one.
---

# Year 2, Lesson 7: Portfolio & Presentation Prep 📁🎤

**Course:** Capstone & Portfolio
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Do Today

- Gather all **EIGHT** of your Year 2 projects into one place — a real **portfolio**
- Build a **Portfolio Index** program: a list of your projects that prints beautifully (this doubles as a portfolio artefact you can keep!)
- Write a title, one-line description, Trinket link, and a "what I'm proudest of" for each project
- Learn the **5-step demo** for presenting your capstone with confidence
- Rehearse your graduation presentation in pairs — because next week, you present it for real 🎓

---

## 🤖 BrightByte Has Something to Say

> *"Look at you. SEVEN weeks ago your capstone was just an idea. Now it's built, polished, and tested. And behind it? Seven MORE projects from this year. Most people never build one real program. You built EIGHT. This week we gather them into a portfolio — proof of everything you can do — and we get you ready to stand up and show the world. One more week to graduation. Let's make it count."*
> — BrightByte 🤖✨

---

## 💼 Part 1: What Is a Portfolio (and Why You Need One)

A **portfolio** is a collection of your best work, all in one place, ready to show someone.

Real developers keep portfolios. When a programmer applies for a job, the employer often looks at their portfolio **before** they even meet them. It answers one question louder than any words could:

> **"What can this person actually build?"**

For the last year, your answer has been growing — one project at a time. Today you gather the proof.

Think about Amara, a developer in Lagos. When she wanted her first coding job, she didn't just say "I can code." She showed a portfolio of things she'd built. The projects did the talking. **Yours will too.**

> **The big idea:** your projects are only useful to future-you if you can *find* them and *show* them. A portfolio makes both easy.

---

## 🗂️ Part 2: Your Eight Year 2 Projects

Let's remind ourselves what you built. EIGHT real projects, one per term:

| Term | Project | Skill It Shows Off |
|---|---|---|
| 1 | 🧮 Smart Calculator | Data types, maths, input checking |
| 2 | 🕹️ Arcade Game Collection | Loops & logic |
| 3 | 🗺️ Text Adventure Engine | Functions |
| 4 | 📇 Contact Manager | Lists & dictionaries |
| 5 | 🔍 AI Investigation Report | How AI makes decisions |
| 6 | 🤖 AI-Powered Assistant | Working with APIs |
| 7 | 📊 Data Story | Data & visualisation |
| 8 | 🎓 Capstone (e.g. Study Buddy) | Everything, combined |

Read down that list slowly. **You made every single one of those.** That is a serious year of work.

### 💬 Class Discussion

> **Which of your eight projects are you MOST proud of — and why?**
> Type it in the **Zoom chat.** There are no wrong answers!

---

## 🖥️ Part 3: Trinket Check — Make Sure Everything Is Shareable

Before we build the portfolio, one crucial pit-stop. A portfolio link is **useless if it's private.**

Open **Trinket** (trinket.io) and log in. For each of your 8 projects you'll need its **share link**:

1. Open the project Trinket
2. Click **Share**
3. Make sure sharing is turned **ON** (not private)
4. Copy the link

> 🧪 **The golden test:** paste each link into a **brand-new browser tab** where you are *not* logged in (or ask a friend to open it). If it loads, it's shareable. If it says "not found" or asks you to log in — it's still private. Fix it now!

Today's new Trinket for the Portfolio Index is `Y2-T8-W7-Portfolio`.

---

## 📁 Part 4: Build Your Portfolio Index Program

Here's a clever idea: instead of a plain document, we'll build a **program** that IS your portfolio. It stores each project as a **dictionary**, keeps them all in a **list**, and prints them beautifully with a **loop** and **f-strings** — every skill from your Year 2 journey, working together.

Start with one project so you can see the shape:

```python
portfolio = [
    {
        "term": 1,
        "name": "Smart Calculator",
        "description": "A menu calculator that does real maths and never crashes.",
        "link": "https://trinket.io/python/PASTE-YOUR-LINK",
    },
]

for project in portfolio:
    print(f"Term {project['term']}: {project['name']}")
    print(f"   {project['description']}")
    print(f"   🔗 {project['link']}")
```

**Output:**
```
Term 1: Smart Calculator
   A menu calculator that does real maths and never crashes.
   🔗 https://trinket.io/python/PASTE-YOUR-LINK
```

See how it works?

- Each project is a **dictionary** with keys: `term`, `name`, `description`, `link`
- All the dictionaries live in one **list** called `portfolio`
- The **loop** walks through every project
- The **f-strings** slot each value neatly into a line — notice `project['name']` uses single quotes inside the double-quoted f-string

> 💡 **Why f-strings?** An f-string starts with `f"..."` and lets you drop a value straight into text using `{ }`. It's the tidiest way to mix words and variables — you learned it in Term 1 and you've used it all year.

### Now grow it to all eight

Add a dictionary for every term. Here's the full program (this is the solution you can keep):

```python
# 📁 My Year 2 Portfolio Index
portfolio = [
    {"term": 1, "name": "Smart Calculator",
     "description": "A menu calculator that does real maths and never crashes.",
     "link": "https://trinket.io/python/PASTE-YOUR-LINK"},
    {"term": 2, "name": "Arcade Game Collection",
     "description": "A set of loop-powered mini-games you play in the terminal.",
     "link": "https://trinket.io/python/PASTE-YOUR-LINK"},
    {"term": 3, "name": "Text Adventure Engine",
     "description": "A branching story game built from my own functions.",
     "link": "https://trinket.io/python/PASTE-YOUR-LINK"},
    {"term": 4, "name": "Contact Manager",
     "description": "An address book that stores people using lists and dictionaries.",
     "link": "https://trinket.io/python/PASTE-YOUR-LINK"},
    {"term": 5, "name": "AI Investigation Report",
     "description": "My deep-dive into how AI actually makes its decisions.",
     "link": "https://trinket.io/python/PASTE-YOUR-LINK"},
    {"term": 6, "name": "AI-Powered Assistant",
     "description": "A chat assistant I built that talks back to the user.",
     "link": "https://trinket.io/python/PASTE-YOUR-LINK"},
    {"term": 7, "name": "Data Story",
     "description": "A project that turns numbers into a text chart and a story.",
     "link": "https://trinket.io/python/PASTE-YOUR-LINK"},
    {"term": 8, "name": "Study Buddy (Capstone)",
     "description": "My biggest project — a study tracker I designed and built myself.",
     "link": "https://trinket.io/python/PASTE-YOUR-LINK"},
]

print("=" * 50)
print("📁  MY YEAR 2 PORTFOLIO  📁")
print("        8 projects · 1 amazing year")
print("=" * 50)

for project in portfolio:
    print()
    print(f"Term {project['term']}: {project['name']}")
    print(f"   {project['description']}")
    print(f"   🔗 {project['link']}")

print()
print(f"Total projects: {len(portfolio)} 🎉")
```

**Output (first few and last, once you've added your real links):**
```
==================================================
📁  MY YEAR 2 PORTFOLIO  📁
        8 projects · 1 amazing year
==================================================

Term 1: Smart Calculator
   A menu calculator that does real maths and never crashes.
   🔗 https://trinket.io/python/PASTE-YOUR-LINK

Term 2: Arcade Game Collection
   A set of loop-powered mini-games you play in the terminal.
   🔗 https://trinket.io/python/PASTE-YOUR-LINK

... (Terms 3 to 7) ...

Term 8: Study Buddy (Capstone)
   My biggest project — a study tracker I designed and built myself.
   🔗 https://trinket.io/python/PASTE-YOUR-LINK

Total projects: 8 🎉
```

> `len(portfolio)` counts how many projects are in the list — so it says **8** automatically. Add a ninth project one day and it updates itself. Neat!

### Make it yours

Swap **every** description for your own words, and paste **every** real Trinket link. This program is now a genuine portfolio artefact — save it and keep it forever.

---

## 🎤 Part 5: The 5-Step Demo (Your Graduation Presentation)

Next week you present your capstone at graduation. A great demo isn't long — it's **clear and confident.** Use the same 5 steps from our earlier showcases:

1. **Introduce it** — one sentence: *"My project is Study Buddy. It helps students track their study hours and stay motivated."*
2. **Run it live** — start your program and let people see it actually work
3. **Show ONE proud feature** — don't show everything. Pick the single coolest thing and shine a light on it
4. **Say what you learnt** — *"The hardest part was making the bar chart line up — I fixed it with an f-string."*
5. **Invite questions & thank them** — *"That's Study Buddy! Any questions?"*

> **Keep it to 2-3 minutes.** A short, working demo beats a long, rambly one every time.

### What to say about your Year 2 journey

You don't only demo the capstone — you get to reflect on the whole year. Prepare **one sentence** about your journey, like:

> *"This year I went from a Smart Calculator that could barely add up to an AI-powered assistant and my own capstone — eight projects in total."*

That single sentence tells everyone how far you've travelled.

---

## 🌈 Presentation Tips (Read These Twice!)

- ⏱️ **Keep it short.** 2-3 minutes. Say less, show more.
- ▶️ **Run it live.** A working demo is worth a thousand slides.
- ⭐ **Explain ONE proud feature.** Depth beats a rushed tour of everything.
- ❓ **Handle questions calmly.** *"Great question — let me show you"* is a perfect answer. So is *"I'm not sure, but here's how I'd find out."*
- 🧘 **Stay calm if a bug appears.** Even professional demos crash! Smile, say *"classic live demo!"*, and either fix it or move on. Nobody minds — they mind panic, not bugs.
- 🎬 **Have a backup.** Know your program well enough that if one feature misbehaves, you can show another.

> *"The best demo I ever saw crashed halfway through. The developer laughed, said 'that's live coding for you', fixed it in ten seconds, and everyone clapped LOUDER. Calm beats perfect."*
> — BrightByte 🤖

---

## ⚠️ Common Mistakes (Portfolio Edition) ❌ / ✅

**Mistake 1: Dead or private Trinket links**

❌ Wrong — you paste a link but never checked it:
```
🔗 https://trinket.io/python/PASTE-YOUR-LINK   (still private — nobody can open it!)
```

✅ Correct — sharing is ON and you tested it in a fresh tab:
```
🔗 https://trinket.io/python/a1b2c3d4   (opens for anyone — tested it!)
```
> A private link is the same as no link. **Test every single one.**

---

**Mistake 2: An over-long demo**

❌ Wrong: showing all 12 features, reading every line of code, running for 8 minutes.

✅ Correct: introduce it, run it, show your ONE proudest feature, done in 2-3 minutes.
> Your audience remembers a short, clear demo. They tune out of a long one.

---

**Mistake 3: A project with no description**

❌ Wrong:
```python
{"term": 5, "name": "AI Investigation Report", "description": "", "link": "..."}
```
```
Term 5: AI Investigation Report

   🔗 https://trinket.io/python/...
```

✅ Correct — one clear line so anyone instantly knows what it is:
```python
{"term": 5, "name": "AI Investigation Report",
 "description": "My deep-dive into how AI actually makes its decisions.",
 "link": "..."}
```
> A project with no description makes the reader guess. Never make them guess.

---

## 🎮 Class Activity: Build the Portfolio + Rehearse the Demo

Two halves today. First we build a portfolio together; then we rehearse our graduation demos out loud.

### Part A — Build Your Portfolio Index (⭐)
1. Open the starter code and complete all **8 project dictionaries** (Terms 1-8)
2. Paste your **real Trinket share link** into each `link` field
3. Run it — every project should print with its description and link
4. **Zoom checkpoint:** thumbs up 👍 when all 8 projects print

### Part B — Add "What I'm Proudest Of" (⭐⭐)
Give each project a `"proud"` key with one short sentence about the part you're most pleased with, and print it under the description with a line like:
```python
print(f"   ⭐ Proudest of: {project['proud']}")
```

### Part C — Rehearse in Pairs (⭐⭐⭐)
Go into Zoom breakout rooms in pairs. Take turns giving your **5-step capstone demo** (about 2 minutes each). The listener gives ONE kind thing and ONE tip. Swap. Rehearse twice.

### Checkpoint before we leave
- ✅ Portfolio Index prints all 8 projects with working links
- ✅ You have given your demo out loud at least once
- ✅ Every Trinket is set to **shareable** (test one link in a fresh tab!)

---

## 🌟 What's Coming Next Week?

**Week 8: GRADUATION — Portfolio Showcase! 🎓🎉**

This is it. The final class of Year 2. Next week you will:

- Present your capstone with the 5-step demo you rehearsed today
- Show off your portfolio of eight projects
- Celebrate with your whole class
- Receive your **AI-Ready Developer Certificate**

> Come ready. Links tested, demo rehearsed, proud feature chosen. Next week you don't just finish Year 2 — you graduate. 🎓

---

## 🏆 Today's Achievements

- ✅ You understand what a portfolio is and why real developers keep one
- ✅ You gathered all **8** of your Year 2 projects in one place
- ✅ You built a **Portfolio Index** program with a list, dictionaries, a loop, and f-strings
- ✅ You made sure every Trinket link is **shareable and tested**
- ✅ You learnt the **5-step demo** and rehearsed your graduation presentation

> *"You started this year unsure if you still remembered how to code. Look at you now — a portfolio of eight projects and a demo ready to go. One week left. I could not be prouder. Go and rehearse — I'll see you at graduation."*
> — BrightByte 🤖✨

---

## 📚 Homework: Finish Your Portfolio + Rehearse Your Demo

Two jobs before graduation next week.

**Job 1 — Complete your Portfolio Index**
1. All **8 projects** filled in (Terms 1-8): name, one-line description, Trinket link
2. Every `link` is a **real, working, shareable** Trinket link (test each one in a new tab!)
3. Add a "what I'm proudest of" line for at least your **capstone**
4. Save it as `Y2-T8-W7-Portfolio`

**Job 2 — Rehearse your graduation demo**
1. Practise the **5-step demo** of your capstone out loud **3 times**
2. Time it — aim for **2-3 minutes**
3. Pick the **one feature** you're proudest of to show live
4. Prepare **one sentence** about your whole Year 2 journey

**Challenge tiers:**
- ⭐ All 8 links working + demo rehearsed once
- ⭐⭐ A "proud" line for every project + demo timed under 3 minutes
- ⭐⭐⭐ Rehearse in front of a real person and ask them one practice question

**Submit:** Save your `Y2-T8-W7-Portfolio` Trinket, click **Share**, copy the link, and paste it wherever your teacher asks. Come to Week 8 ready to present!

---

*Eight projects, gathered. One demo, rehearsed. One week to go. See you at graduation, developer! 📁🎤🎓*
