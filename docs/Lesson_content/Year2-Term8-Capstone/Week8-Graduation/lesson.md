---
title: "GRADUATION: Portfolio Showcase 🎓🎉"
description: "The finish line of Year 2 — present your capstone and full portfolio of 8 projects, look back over the whole year, and receive your AI-Ready Developer Certificate"
difficulty: "intermediate"
order_index: 8
course_slug: "year2-term-8-capstone"
is_premium: false
requires_trinket: true
starter_code: |
  # 🎓 GRADUATION-DAY CHECKLIST
  # This is the LAST lesson of Year 2. Today you present.
  # Before you go live on Zoom, tick these off in Trinket:
  #
  # [ ] My capstone RUNS with no red errors
  # [ ] I can demo my 2-3 must-have features
  # [ ] My portfolio list of 8 projects is ready to show
  # [ ] I know my proudest project of the whole year
  # [ ] I can say ONE way I've grown since Term 1
  #
  # Open your capstone Trinket now and run it once, top to bottom.
  # Then run the line below and take a breath — you made it. 🎉

  print("I built 8 projects. I finished Year 2. I'm ready to graduate! 🎓")
solution_code: |
  # 🎓 THE AI-READY DEVELOPER CERTIFICATE PRINTER
  # The final program of Year 2 — built from the very skills you earned:
  # FUNCTIONS, F-STRINGS, and a LOOP over your portfolio of 8 projects.

  def make_border(width):
      """Return a line of stars — a Year 1 trick, still going strong."""
      return "*" * width

  def centre(text, width):
      """Centre text inside the certificate using an f-string."""
      return f"{text:^{width}}"

  def print_certificate(name, projects):
      width = 52
      print(make_border(width))
      print(centre("KIDSLEARNAI", width))
      print(centre("AI-READY DEVELOPER CERTIFICATE", width))
      print(make_border(width))
      print()
      print(centre("This certifies that", width))
      print(centre(name.upper(), width))
      print(centre("completed Year 2 and built 8 real projects:", width))
      print()

      number = 1
      for project in projects:
          print(f"   {number}. {project}")
          number = number + 1

      print()
      print(centre(f"{len(projects)} projects · 8 terms · 1 amazing coder", width))
      print(make_border(width))
      print(centre("Officially an AI-Ready Developer  ⚡🐍", width))
      print(make_border(width))

  # Your name and your portfolio — one line per term of Year 2
  coder = input("Type your name, graduate: ")
  portfolio = [
      "Smart Calculator 🧮",
      "Arcade Game Collection 🕹️",
      "Text Adventure Engine 🗺️",
      "Contact Manager 📇",
      "AI Investigation Report 🔍",
      "AI-Powered Assistant 🤖",
      "Data Story 📊",
      "Capstone Project 🎓",
  ]

  print()
  print_certificate(coder, portfolio)
  print()
  print(f"Congratulations, {coder}! Keep building. Your journey continues. 🎉")
class_activities: |
  ## 🎮 Class Activity: The Year 2 Graduation Ceremony 🎓🎉

  Today is GRADUATION. No new code — today we present, we celebrate, and we cross the finish line together.

  ### Part A — Final Polish (⭐)
  Open your capstone and run it once, top to bottom. Tick off the graduation-day checklist in the starter code. Fix anything red — but **no new features**. A capstone that *works* beats a fancy one that *crashes*.

  ### Part B — Your Capstone + Portfolio Presentation (⭐⭐)
  When it's your turn (about 3-4 minutes):
  1. **Share your screen** on Zoom
  2. **Introduce your capstone** — its name and what it does
  3. **Run it live** and demo your must-have features
  4. **Show your portfolio** — quickly scroll your 8 projects and name your favourite
  5. **Share one way you've grown** since Term 1's Code Sprint
  6. **Take one question** from a classmate

  ### Part C — Celebrate Every Coder (⭐⭐⭐)
  While each person presents, the class makes them a star in the **Zoom chat**:
  - Drop a 🔥 when you see something cool
  - Give **"Two Stars and a Wish"**: two things you loved ⭐⭐ and one kind idea 💡
  - Give a round of 👏 (or unmute for real applause!) after every single demo

  ### Part D — The Certificate Ceremony 🎓
  Your teacher calls each graduate by name and awards the **AI-Ready Developer Certificate**. Stand tall, smile, and soak it in — you earned every bit of this.
take_home_assignment: |
  ## 📚 Final Homework: Your Journey Continues 🚀

  There's no next class — so this last piece of homework is a gift to your future self. Pick ONE (or do both if you're buzzing!):

  ### Option A — "My Coding Journey" Letter (recommended)
  Write a program in Trinket that prints a message to **future-you**.

  **Requirements:**
  1. Ask for your name with `input()`
  2. Use at least **three f-strings**
  3. Loop over a **list** of your proudest moments from Year 2
  4. End with what you want to build NEXT and an emoji 🎉

  *(See today's solution code — the certificate printer — for a model that uses functions, f-strings, and a loop.)*

  ### Option B — Keep Building
  Open your favourite project of the whole year and add **one new feature** to it — a nice-to-have you never got to. You're an AI-Ready Developer now; you don't need a lesson to keep going.

  **Submit (optional!):** Save your Trinket, click **Share**, and send the link wherever your teacher asks — or just keep it for yourself. This one's for you.

  **Trinket for this week:** `Y2-T8-W8-Graduation`

  > 🔑 There's no Week 9 and no Term 9 — because you've finished. From here, the projects are yours to choose. Keep coding. 💛
ai_activities: |
  ## 🤖 Reflection: You Don't Just USE AI — You Can BUILD With It

  A year ago you were an AI *Explorer* — you learned what AI is. Now look at you:

  - In **Term 5** you opened up how AI really works — training data, rules, bias, and ethics
  - In **Term 6** you built your own **AI-Powered Assistant** with intents and APIs
  - In **Term 7** you turned messy data into a **Data Story** people could understand

  You've crossed a line most people never do: from someone who *uses* AI tools to someone who *understands and builds* them.

  **Reflect in the Zoom chat:** "Now that I know how AI works under the hood, what's ONE thing I'd love to build with it one day?"

  As you go, remember what you learned about **responsible building**: be honest about what your program can and can't do, be fair, and build things that help people. The world needs coders who care as much as they create. That's you. 💛
---

# Year 2, Lesson 8: GRADUATION — Portfolio Showcase 🎓🎉

**Course:** Capstone & Portfolio
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 8 of 8

---

## 🎯 What You'll Do Today

- **Take a breath at the finish line** — this is the very last lesson of Year 2
- **Present your capstone** live: run it, demo your features, and be proud
- **Show your portfolio** — all **8 projects** you built across the whole year
- **Cheer on** every classmate as they present and celebrate their journey
- **Look back** over all 8 terms and see how far you've come since the Code Sprint
- **Receive the AI-Ready Developer Certificate** — the crowning credential of Year 2
- **Reflect** on your proudest project and how you've changed as a coder
- **Dream forward** — where your coding journey goes from here

---

## 🤖 BrightByte Has Been Waiting for This Day

> *"Programmers... look at this. LOOK at it. A year ago, some of you weren't sure you could code at all. You were shaking the rust off `print()` in a Code Sprint. And now? You've built a Smart Calculator, a collection of arcade games, a text adventure engine, a contact manager, an AI investigation, an AI-powered assistant, a data story — and a whole capstone project that YOU dreamed up and built with your own two hands. EIGHT real projects. Eight terms. One incredible year. Today isn't a lesson. Today is a GRADUATION. I have never been prouder. Let's celebrate you. 🎓💛"*
> — BrightByte 🤖🎉

---

## ✨ Part 1: Final Polish — Make Your Capstone Shine

Before the ceremony, let's make sure your capstone is ready for its moment. **No new features today** — you're just making the work you already did sparkle.

Open your capstone Trinket and run it once, top to bottom. Then check every box:

| ✅ Check | What "good" looks like |
|---|---|
| **It runs** | Click ▶ Run — no red error messages |
| **Must-haves work** | Your 2-3 core features all do their job |
| **Looks tidy** | Menus and output are clear, with f-strings and borders |
| **Doesn't crash** | Bad input gets a friendly message, not a red error 🛡️ |
| **Quits cleanly** | The user can exit without breaking anything |
| **Portfolio ready** | You know where all 8 of your projects live |

> 💡 **Quick fixes only.** If something's broken, patch it now — but don't start a brand-new feature five minutes before you present. A capstone that *works* beats a fancy one that *crashes*.

When every box is ticked, drop a ✅ in the Zoom chat. You're ready to graduate! 🎓

---

## 🎤 Part 2: The Grand Showcase — Your Capstone + Portfolio

This is your moment — the one every build week was leading to. Here's the simple format every graduate follows (about 3-4 minutes each):

### The 6-Step Graduation Demo

1. **📢 Introduce your capstone** — *"Hi, I'm Amara. My capstone is Study Buddy — it helps you track study hours and stay motivated."*
2. **▶ Run it live** — share your screen and press Run
3. **⭐ Demo your must-have features** — show the 2-3 things it does best
4. **🗂️ Show your portfolio** — quickly scroll through your **8 projects** and say which one you're proudest of
5. **📈 Share one way you've grown** — *"In Term 1 a missing quote confused me. Now I write functions and handle errors."*
6. **🙋 Take one question** — a classmate might ask how you built something

### Demo Confidence Tips

- **You built this — you're the expert.** Nobody knows your capstone better than you.
- **Nervous? That's completely normal.** Take a breath, read your menu aloud, then run it.
- **Something breaks live?** Say *"ooh, a live bug!"* and stay calm — real developers debug in front of people all the time.
- **This is a celebration, not a test.** There are no marks today — only pride and applause.

> *"The bravest thing a developer ever does is press Run in front of other people and say 'I made this.' Every single one of you is about to do it. That's not just coding — that's courage."*
> — BrightByte 🤖

---

## 💬 Part 3: Celebrate Every Coder — Peer Feedback

While each graduate presents, the rest of the class makes them feel like the star they are. We use the **Zoom chat**:

### Drop a 🔥
See something cool? A clever feature, a neat menu, a great idea? Drop a 🔥 in the chat right away.

### "Two Stars and a Wish" ⭐⭐💡
When someone finishes, give kind, useful feedback:

- ⭐ **Star 1:** something you loved — *"Your quiz mode is so much fun!"*
- ⭐ **Star 2:** another thing you loved — *"Love how tidy your menu is."*
- 💡 **A Wish:** one kind idea for their future building — *"Maybe add a high-score table one day?"*

### Applause for everyone 👏
After every single demo, give a round of applause — 👏 in the chat, or unmute for the real thing. **No one presents to silence today.**

> **Golden rule of feedback:** be **kind, specific, and helpful**. "It's good" isn't feedback. "I love how your assistant remembers your name" — *that's* feedback. 💛

### Example celebration in the chat

```
Kwame's Afrobeats Quiz 🔥🔥🔥
⭐ The score screen at the end is BRILLIANT
⭐ I love that it uses a list of dicts for questions
💡 Wish: add a "hard mode" one day!
👏👏👏 Congratulations Kwame!
```

---

## 🗺️ Part 4: Look How Far You Came — The Whole Year 2 Journey

Take a moment. Rewind to Week 1 of Term 1, when a single missing quotation mark could stop you. Look at everything you've built since:

| Term | What You Mastered | What You Built | Done |
|---|---|---|---|
| 1 | Python Accelerated | 🧮 Smart Calculator | ✅ |
| 2 | Loops & Logic Mastery | 🕹️ Arcade Game Collection | ✅ |
| 3 | Functions | 🗺️ Text Adventure Engine | ✅ |
| 4 | Data Structures | 📇 Contact Manager | ✅ |
| 5 | AI Concepts Deep Dive | 🔍 AI Investigation Report | ✅ |
| 6 | Working with APIs | 🤖 AI-Powered Assistant | ✅ |
| 7 | Data & Visualization | 📊 Data Story Project | ✅ |
| 8 | Capstone & Portfolio | 🎓 Your Own Capstone Project | ✅ |

> **Eight terms. Eight projects. Every single box ticked.** That is a real portfolio — the kind that says, *"I can take an idea from a blank screen all the way to a working program."*

### 💬 Class Discussion

> **Which project surprised YOU the most — the one where you thought "wait, I actually built that"?**
> Type its emoji in the **Zoom chat**: 🧮 🕹️ 🗺️ 📇 🔍 🤖 📊 🎓

---

## 🎓 Part 5: The Certificate Ceremony

This is the big one. One by one, your teacher will call each graduate by name and award the **AI-Ready Developer Certificate** — the culminating credential of the whole of Year 2.

When your name is called: stand tall, smile, and let the class celebrate you. You've earned every letter of that certificate.

### What the AI-Ready Developer Certificate Means

It certifies that you can:

- ✅ Write real Python programs with variables, loops, and functions
- ✅ Organise data with lists and dictionaries
- ✅ Handle messy human input without crashing
- ✅ Understand how AI works — training, rules, bias, and ethics
- ✅ Build with AI: an assistant, an investigation, a data story
- ✅ Take your OWN idea from a blank screen to a finished capstone

> **You are officially an AI-Ready Developer.** Not "learning to code" — a developer who understands AND can build with the technology shaping the world. 🎓⚡

### 🖨️ Your Own Certificate Printer

To mark the moment, today's **solution code** is a special program: an **AI-Ready Developer Certificate printer**. It's built from the very skills you earned this year — a **function**, **f-strings**, and a **loop over your portfolio of 8 projects**. Open the solution, type your name, and print your own certificate right in Trinket.

Here's a peek at the heart of it — a function that centres text using a nested f-string:

```python
def centre(text, width):
    """Centre text inside the certificate using an f-string."""
    return f"{text:^{width}}"

portfolio = [
    "Smart Calculator 🧮",
    "Arcade Game Collection 🕹️",
    "Text Adventure Engine 🗺️",
    "Contact Manager 📇",
    "AI Investigation Report 🔍",
    "AI-Powered Assistant 🤖",
    "Data Story 📊",
    "Capstone Project 🎓",
]

number = 1
for project in portfolio:
    print(f"   {number}. {project}")
    number = number + 1
```

**Output:**
```
   1. Smart Calculator 🧮
   2. Arcade Game Collection 🕹️
   3. Text Adventure Engine 🗺️
   4. Contact Manager 📇
   5. AI Investigation Report 🔍
   6. AI-Powered Assistant 🤖
   7. Data Story 📊
   8. Capstone Project 🎓
```

Run the full solution to see the whole certificate — with your name on it. 🎓

---

## 💛 Part 6: Reflection — You, Then and Now

Before we close, let's think about how much you've grown. Not just what you built — but who you've become.

**Share in the Zoom chat:**

- 🏆 **My proudest project of the whole year was...** *(and why)*
- 📈 **How I've changed as a coder...** *(what feels easy now that was hard in Term 1?)*
- 🚀 **What I want to build next is...** *(dream big — you can do it now)*

Reading each other's reflections reminds us of something beautiful: **every single person in this class started at zero, found something hard, and pushed through anyway.** That's not talent. That's grit. And you all have it.

> *"When you started, you asked 'can I even do this?' Now you ask 'what should I build next?' That change — from doubt to curiosity — is the most important thing you learned all year. Guard it. It'll take you anywhere."*
> — BrightByte 🤖💛

---

## 🌟 Part 7: Where Your Journey Goes Next

There's no Term 9 — because you've finished Year 2. But finishing a course is never the end of a coder's journey. It's a launchpad. Here are three brilliant ways to keep flying:

### 🔨 Build More Projects
You have 8 projects and a head full of ideas. Pick one and take it further — add features, make it prettier, turn a nice-to-have into a real thing. The best way to keep growing is to keep building.

### 📚 Learn a New Tool
You mastered plain Python. When you're ready, explore something new: a Python library like `pygame` for real games, `matplotlib` for gorgeous charts, or `Flask` to put a program on the web. You already know how to learn a new tool — you did it eight times this year.

### 🧑‍🏫 Teach Someone Else
The fastest way to become a stronger coder is to teach one. Show a friend, a sibling, or a parent how to write their first `print()` — the way you did a year ago. Passing it on makes you a mentor. And every expert was once a beginner someone believed in.

> **You don't need a next lesson to keep coding.** You have everything you need: the skills, the tools, and the mindset of someone who finishes what they start. The rest is up to you. 🚀

---

## 🏆 Year 2 Achievements — The WHOLE Year

Over eight terms, look at everything you learned and built:

- ✅ **Term 1 — Python Accelerated:** data types, `int()`/`float()`, power maths, f-strings, `if`/`elif`/`else`, safe input → built the **Smart Calculator** 🧮
- ✅ **Term 2 — Loops & Logic Mastery:** `for` loops, `while` loops, loop control, nested loops, and `random` → built the **Arcade Game Collection** 🕹️
- ✅ **Term 3 — Functions:** defining functions, parameters, return values, scope, and combining functions → built the **Text Adventure Engine** 🗺️
- ✅ **Term 4 — Data Structures:** lists, slicing, sorting, dictionaries, looping dictionaries, and records → built the **Contact Manager** 📇
- ✅ **Term 5 — AI Concepts Deep Dive:** how machines learn, training data, rule-based AI, chatbots, bias, fairness, and ethics → produced the **AI Investigation Report** 🔍
- ✅ **Term 6 — Working with APIs:** what an API is, JSON, mock APIs, status codes, and intents → built the **AI-Powered Assistant** 🤖
- ✅ **Term 7 — Data & Visualization:** parsing data, number-crunching, text charts, turtle charts, and finding the story → built the **Data Story** 📊
- ✅ **Term 8 — Capstone & Portfolio:** planned, built, debugged, polished, and presented a project **you** invented → earned the **AI-Ready Developer Certificate** 🎓

**Eight projects. A real portfolio. A genuine understanding of how AI works and how to build with it.** You didn't just take a course — you became a developer. 🎉

---

## 🎉 A Final Word from BrightByte

> *"So this is it — the end of Year 2. I want you to remember this feeling: you set out to do something hard, you stuck with it through every tricky bug and every 'I can't do this' moment, and you crossed the finish line with EIGHT projects to your name. That's who you are now — someone who finishes. Someone who builds. Whatever you do next, in code or anywhere else, carry that with you. I've loved every single week with you. Now go build something the world hasn't seen yet. I'll be cheering, always. 🎓⚡💛"*
> — BrightByte 🤖🎉

---

## 📚 Final Homework: Your Journey Continues 🚀

There's no next class — so this last piece of homework is a gift to your future self. Pick ONE (or both!):

### Option A — "My Coding Journey" Letter (recommended)
Write a program in Trinket that prints a message to **future-you**.

**Requirements:**
1. Ask for your name with `input()`
2. Use at least **three f-strings**
3. Loop over a **list** of your proudest moments from Year 2
4. End with what you want to build NEXT and an emoji 🎉

*(See today's solution code — the certificate printer — for a model that uses functions, f-strings, and a loop.)*

### Option B — Keep Building
Open your favourite project of the whole year and add **one new feature** — a nice-to-have you never got to. You're an AI-Ready Developer now; you don't need a lesson to keep going.

**Submit (optional!):** Save your Trinket, click **Share**, and send the link wherever your teacher asks — or just keep it for yourself. This one's for you.

> 🔑 There's no Week 9 and no Term 9 — because you've finished. From here, the projects are yours to choose. Keep coding. 💛

---

*You dreamed it, you built it, you finished it. Take a bow, AI-Ready Developer — this is YOUR graduation. Now go build what's next. The journey continues. 🎓🎉🚀*
