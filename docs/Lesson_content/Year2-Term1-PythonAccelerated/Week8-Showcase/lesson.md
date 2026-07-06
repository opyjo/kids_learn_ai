---
title: "Calculator Showcase & Celebration! 🎉🧮"
description: "Term 1 finale — polish and demo your Smart Calculator, give peer feedback, ace a fun term quiz, and celebrate finishing your first Year 2 term"
difficulty: "intermediate"
order_index: 8
course_slug: "year2-term-1-python-accelerated"
is_premium: false
requires_trinket: true
starter_code: |
  # ✅ DEMO-READY CHECKLIST
  # Before you show your Smart Calculator, tick these off in Trinket:
  #
  # [ ] It RUNS with no red errors
  # [ ] The menu appears clearly
  # [ ] At least one calculation gives the right answer
  # [ ] Money/answers are formatted (f-strings + :.2f)
  # [ ] It does NOT crash on divide-by-zero
  # [ ] It does NOT crash on silly input (like "banana")
  # [ ] You can quit cleanly
  #
  # Open your calculator Trinket now and run it once, top to bottom.
  # If every box is ticked — you're ready to shine on Zoom! 🎤

  print("My Smart Calculator is demo-ready! 🚀")
solution_code: |
  # 🏆 TERM 1 COMPLETE! — Certificate Printer
  # A tiny celebration program that uses EVERYTHING you learned this term:
  # input(), variables, maths operators, f-strings, and :.2f formatting.

  name = input("What is your name, coder? ")

  # A little maths to prove your Week 3 skills
  weeks_finished = 8
  projects_built = 1          # the Smart Calculator!
  lines_of_code = 250
  avg_per_week = lines_of_code / weeks_finished   # / always gives a float

  print()
  print("=" * 44)
  print(f"{'TERM 1 COMPLETE!':^44}")
  print("=" * 44)
  print(f"  Coder:             {name}")
  print(f"  Weeks conquered:   {weeks_finished}")
  print(f"  Programs built:    {projects_built}  (Smart Calculator 🧮)")
  print(f"  Avg lines / week:  {avg_per_week:.2f}")
  print("=" * 44)
  print(f"{'Python Accelerated  ⚡🐍':^44}")
  print("=" * 44)
  print()
  print(f"Brilliant work, {name}! Term 2 is waiting for you. 🚀")
class_activities: |
  ## 🎮 Class Activity: The Grand Calculator Showcase 🎤🧮

  Today is celebration day! Everyone demos the Smart Calculator they built this term.

  ### Part A — Polish Pit-Stop (⭐)
  Open your calculator and run it once, top to bottom. Tick off the demo-ready checklist in the starter code. Fix anything red before you present — no new features needed, just make it shine.

  ### Part B — Your 2-Minute Demo (⭐⭐)
  When it's your turn:
  1. **Share your screen** on Zoom
  2. **Run** your calculator live
  3. **Do two calculations** (try to include one you're proud of)
  4. **Explain one feature** you built — e.g. "here's how mine survives divide-by-zero"
  5. **Take one question** from a classmate

  ### Part C — Peer Feedback (⭐⭐⭐)
  While each coder demos, the class reacts in the **Zoom chat**:
  - Drop a 🔥 when you see something cool
  - Give **"Two Stars and a Wish"**: two things you liked ⭐⭐ and one kind idea for next time 💡

  ### Part D — Term 1 Quiz Game
  A fast, fun quiz covering the WHOLE term. Your teacher reads each question; you race to answer in the Zoom chat. No pressure — it's a celebration, not a test!
take_home_assignment: |
  ## 📚 Homework: Your Term 1 Trophy 🏆

  Choose ONE (or do both if you're buzzing!):

  ### Option A — Certificate Program (recommended)
  Write a **"Term 1 Trophy"** program in Trinket that prints YOU a certificate using f-strings.

  **Requirements:**
  1. Ask the user their name with `input()`
  2. Use at least **three f-strings**
  3. Include at least one number formatted with `:.2f`
  4. Use `"=" * 40` (or similar) for a neat border
  5. End with a proud message and an emoji 🎉

  ### Option B — Family Demo
  Show your finished Smart Calculator to someone at home. Let them try to break it! Then write 3-4 sentences:
  - What did they try?
  - Did it crash? (Hopefully not!)
  - What did they think?

  **Also (optional, 2 min):** peek at the Term 2 preview below and write down which Arcade game you most want to build.

  **Submit:** Save your Trinket, click **Share**, copy the link (and paste your family notes), and send it wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: You Just Built the Foundations of AI

  Look back at what your calculator does: it takes in data, does **maths**, makes **decisions** with `if`/`elif`/`else`, and **formats** results clearly.

  Here's a secret: that is *exactly* what AI does underneath, just at a huge scale.
  - The **maths** (`+ - * / // % **`) → AI runs billions of tiny calculations to make a prediction
  - The **logic** (`if`/`and`/`or`) → AI decides which answer is most likely
  - The **safe input** (`.isdigit()`, no crashes) → real AI apps must handle messy human input too

  **Discuss in the Zoom chat:** "Where might a program need to *check* input before trusting it?" (Think: a chatbot, a bank app, a game.)

  In **Term 5 and Term 6** you'll open up how AI really works and build your own AI-powered assistant. Every skill from this term is a brick in that wall. 🧱
---

# Year 2, Lesson 8: Calculator Showcase & Celebration! 🎉🧮

**Course:** Python Accelerated
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 8 of 8

---

## 🎯 What You'll Do Today

- **Polish** your Smart Calculator so it's demo-ready — runs, doesn't crash, looks professional
- **Showcase** it live on Zoom: share your screen, run it, explain a feature you're proud of
- **Cheer on** your classmates and give kind, useful feedback in the chat
- **Ace** a fun Term 1 quiz covering everything you've learned
- **Reflect** on your proudest moment and celebrate finishing your first Year 2 term
- **Peek ahead** at the whole of Year 2 — starting with the Arcade Game Collection in Term 2!

---

## 🤖 BrightByte Has Something to Say...

> *"STOP everything. Look at what you did. Eight weeks ago you were shaking the rust off `print()`. Today you have a REAL program — a Smart Calculator with a menu, live maths, beautiful formatting, and it doesn't crash even when someone types 'banana' into it. That is not beginner work. That is genuine, professional programming. I am SO proud of you. Today we don't learn anything new — today we celebrate, we show off, and we soak it all in. You earned this. 🎉"*
> — BrightByte 🤖💛

---

## 🧮 Part 1: Polish Pit-Stop — Make It Demo-Ready

Before you show anything, let's make sure your calculator shines. **No new features today** — you're just tidying up work you already did.

Open your Smart Calculator Trinket and run it once, top to bottom. Then check every box:

| ✅ Check | What "good" looks like |
|---|---|
| **It runs** | Click ▶ Run — no red error messages |
| **Menu is clear** | The user can see the options (Add, Subtract, %, etc.) |
| **Maths is correct** | Do `10 / 2` — you should get `5.0`, not a crash |
| **Formatting** | Money/answers use f-strings and `:.2f` (e.g. `£12.50`, not `12.5`) |
| **Divide-by-zero guard** | Try dividing by `0` — it should warn, not crash 🛡️ |
| **Bad-input guard** | Type `banana` where a number goes — friendly message, no crash |
| **Clean quit** | The menu lets you exit tidily |

> 💡 **Quick fixes only.** If something's broken, patch it now — but don't add brand-new features five minutes before your demo. A calculator that *works* beats a fancy one that *crashes*.

**Reminder of your term's toolkit** (you already know all of this!):

```python
# The skills that power your calculator:
price = float(input("Price? "))        # float() for decimals (Week 2)
total = price * 1.10                    # * and other maths (Week 3)
print(f"Total: £{total:.2f}")           # f-strings + :.2f (Week 4)

if choice == "5":                       # if / elif / else (Week 5)
    print("Goodbye! 👋")

if divisor == 0:                        # divide-by-zero guard (Week 5)
    print("Cannot divide by zero! 🚫")
```

When every box is ticked, drop a ✅ in the Zoom chat. You're ready to present!

---

## 🎤 Part 2: The Grand Showcase — How to Demo on Zoom

This is your moment. Here's the simple, 2-minute format every coder follows:

### The 5-Step Demo

1. **📢 Introduce it** — "Hi, I'm Amara. This is my Smart Calculator."
2. **▶ Run it live** — share your screen and click Run
3. **🔢 Do two calculations** — pick ones that show it off (percentages? tips? a big power like `2 ** 10`?)
4. **⭐ Explain ONE feature you're proud of** — for example:
   - *"Watch — if I divide by zero, it doesn't crash, it warns me."*
   - *"If I type letters instead of a number, it stays calm and asks again."*
   - *"My answers are formatted to 2 decimal places so money looks right."*
5. **🙋 Take one question** — a classmate might ask how you built something

### Demo Confidence Tips

- **You built this — you're the expert.** Nobody knows your code better than you.
- **Nervous? That's normal.** Take a breath, read your menu out loud, then run it.
- **Something breaks live?** Say *"ooh, a live bug!"* and stay cool — real programmers debug in front of people all the time. It's part of the fun.
- **Keep it short.** Two minutes is plenty. Show, don't read every line.

> *"You don't have to be perfect. You just have to press Run and be proud. The bravest thing a coder does is share their work — and you're all doing it today."*
> — BrightByte 🤖

---

## 💬 Part 3: Cheering Each Other On — Peer Feedback

While each coder demos, the rest of the class makes them feel like a star. We use the **Zoom chat**:

### Drop a 🔥
See something cool? A clever menu, a neat trick, a great error message? Drop a 🔥 in the chat right away.

### "Two Stars and a Wish" ⭐⭐💡
When someone finishes, give kind, useful feedback:

- ⭐ **Star 1:** something you liked — *"Love how your menu uses emojis!"*
- ⭐ **Star 2:** another thing you liked — *"Your tip calculator is so useful!"*
- 💡 **A Wish:** one kind idea — *"Maybe add a 'clear screen' between calculations?"*

> **Golden rule of feedback:** be **kind, specific, and helpful**. "It's good" isn't feedback. "I like how your percentage mode shows the £ sign" — *that's* feedback. 💛

### Example feedback in the chat

```
Kofi's demo 🔥🔥
⭐ The divide-by-zero message made me laugh
⭐ Really clean menu, easy to read
💡 Wish: maybe let it do square roots next term!
```

---

## 🧠 Part 4: The Term 1 Quiz Game! 🎯

Time for a fun, fast quiz covering the WHOLE term. Your teacher reads each question — **race to type your answer in the Zoom chat!** No pressure, it's a celebration game. 🎉

**Answer these yourself first, then reveal the key at the bottom.**

1. What does `input("Name? ")` always give you back — a number or text (a **string**)?

2. You have `age_text = "12"`. Which function turns it into the whole number `12` so you can do maths with it?

3. What does `float("3.5")` give you?

4. What is the result of `7 // 2`?

5. What is the result of `7 % 2`?

6. What is `2 ** 3`?

7. What does `10 / 2` give you — `5` or `5.0`?

8. What does this print?
   ```python
   price = 12.5
   print(f"£{price:.2f}")
   ```

9. Look at this code. What does it print when the user types `15`?
   ```python
   score = int(input("Score? "))
   if score >= 90:
       print("Gold 🥇")
   elif score >= 50:
       print("Silver 🥈")
   else:
       print("Keep going! 💪")
   ```

10. Is this `True` or `False`?
    ```python
    print(5 > 3 and 10 > 20)
    ```

11. What does `"banana".isdigit()` return — `True` or `False`? What about `"42".isdigit()`?

12. **The classic trap!** What does this print, and why might it surprise you?
    ```python
    age = input("Age? ")   # user types 12
    print(age == 12)
    ```

<details>
<summary>🔑 Click for the Answer Key</summary>

1. **Text (a string).** `input()` *always* returns a string — even if the user types digits.
2. **`int()`** → `int(age_text)` gives `12`.
3. **`3.5`** — a float (a decimal number).
4. **`3`** — `//` is floor (whole-number) division; it throws away the remainder.
5. **`1`** — `%` (modulo) gives the *remainder* of 7 ÷ 2.
6. **`8`** — `**` is power; `2 ** 3` means 2 × 2 × 2.
7. **`5.0`** — a single `/` always gives a float, even when it divides evenly.
8. **`£12.50`** — `:.2f` formats the number to exactly 2 decimal places.
9. **`Keep going! 💪`** — 15 is not ≥ 90 and not ≥ 50, so it falls to `else`.
10. **`False`** — `and` needs BOTH sides true; `10 > 20` is false, so the whole thing is false.
11. **`"banana".isdigit()` is `False`**; **`"42".isdigit()` is `True`.** `.isdigit()` checks if a string is all digits.
12. **`False`** — the user typed `12` but `input()` stored the **string** `"12"`, and `"12"` is not the **number** `12`. To compare properly you'd convert first: `int(age) == 12`. This is why we use `int()` before doing maths or number comparisons!

</details>

> **Scoring the game:** first correct answer in the chat = 🏆, but everyone who answers gets a 👏. It's about celebrating what you know, not winning!

---

## ✨ Part 5: Reflection — Your Term 1 Journey

Take a moment. Eight weeks ago, `input()` gave you text and it crashed your maths. Now you've built a program that handles it all gracefully.

**Share in the Zoom chat:**

- 🌟 **My proudest moment this term was...** *(the feature you loved building, the bug you finally beat, your first working calculator...)*
- 😅 **One thing I found hard was...** *(and how you got through it)*

Reading each other's reflections reminds us: **everyone found something hard, and everyone got through it.** That's what coders do. 💪

> *"The hard parts? Those are the bits where you grew the most. The bug that took you an hour taught you more than the code that worked first try. Remember that feeling next term when things get tricky — you've beaten hard before."*
> — BrightByte 🤖

---

## 🌟 What's Coming Next Term

You've finished **Term 1 of 8** in Year 2. Here's the whole adventure still ahead:

| Term | What You'll Master | What You'll Build |
|---|---|---|
| 1 | Python Accelerated ✅ *(done!)* | 🧮 Smart Calculator |
| **2** | **Loops & Logic Mastery** | **🕹️ Arcade Game Collection** |
| 3 | Functions | 🗺️ Text Adventure Engine |
| 4 | Data Structures | 📇 Contact Manager |
| 5 | AI Concepts Deep Dive | 🔍 AI Investigation Report |
| 6 | Working with APIs | 🤖 AI-Powered Assistant |
| 7 | Data & Visualization | 📊 Data Story Project |
| 8 | Capstone & Portfolio | 🎓 Your Own Big Project! |

### 🎮 Next Up: Term 2 — Loops & Logic Mastery

Get ready, because Term 2 is going to be *so* much fun:

- 🔁 You'll master **loops** — the power to make the computer repeat things and run whole games
- 🕹️ You'll build an **Arcade Game Collection** — think number-guessing, rock-paper-scissors, and more
- 🏅 And for the first time in Year 2, you'll earn a **badge**: the **Python Pro Badge**!

> *"You just built a tool. Next term, you build TOYS — real games you can play and share. And you'll walk away with your first Year 2 badge to prove it. I can't wait. 🕹️🏅"*
> — BrightByte 🤖

---

## 🏆 Term 1 Achievements — Look How Far You Came!

Over 8 weeks, you learned and mastered:

- ✅ **Week 1:** Shook off the rust — `print()`, variables, `input()`
- ✅ **Week 2:** Data types + `int()` and `float()` to convert text into numbers
- ✅ **Week 3:** Power maths — `//` (floor divide), `%` (remainder), `**` (powers)
- ✅ **Week 4:** f-strings and `:.2f` for beautiful, professional output
- ✅ **Week 5:** Smart decisions with `if`/`elif`/`else`, `and`/`or`, and safe input with `.isdigit()`
- ✅ **Weeks 6-7:** Built a complete, menu-driven **Smart Calculator** with a `while` loop
- ✅ **Week 8:** Polished, demoed, and celebrated a real, crash-proof program!

**You built a program that never crashes. That's what separates real programmers from beginners — and you did it. 🎉**

---

## 🎉 A Final Word from BrightByte

> *"First Year 2 term: COMPLETE. You didn't just learn Python — you built something real, you showed it to the world, and you cheered each other on. That's not just coding, that's being part of a team of makers. Rest up, feel proud, and I'll see you in Term 2 where we build GAMES and you earn your first badge. Onwards! 🚀🕹️"*
> — BrightByte 🤖💛

---

## 📚 Homework: Your Term 1 Trophy 🏆

Choose ONE (or both if you're buzzing!):

### Option A — Certificate Program (recommended)
Write a **"Term 1 Trophy"** program in Trinket that prints YOU a certificate using f-strings.

**Requirements:**
1. Ask the user their name with `input()`
2. Use at least **three f-strings**
3. Include at least one number formatted with `:.2f`
4. Use `"=" * 40` (or similar) for a neat border
5. End with a proud message and an emoji 🎉

*(See today's solution code for one example you can learn from!)*

### Option B — Family Demo
Show your finished Smart Calculator to someone at home. Let them try to break it! Then write 3-4 sentences: what did they try, did it crash (hopefully not!), and what did they think?

**Also (optional, 2 min):** peek at the Term 2 preview above and write down which Arcade game you most want to build.

**Submit:** Save your Trinket, click **Share**, copy the link, and send it wherever your teacher asks.

---

*You finished your first Year 2 term, coder. Take a bow — you earned it. See you in Term 2! 🎉🧮🚀*
