---
title: "Arcade Showcase & Python Pro Badge! 🕹️🏅"
description: "Term 2 finale — polish and demo your Arcade Game Collection, give peer feedback, ace a fun loops-and-logic quiz, earn the Python Pro Badge, and celebrate"
difficulty: "intermediate"
order_index: 8
course_slug: "year2-term-2-loops-mastery"
is_premium: false
requires_trinket: true
starter_code: |
  # ✅ DEMO-READY CHECKLIST
  # Before you show your Arcade Game Collection, tick these off in Trinket:
  #
  # [ ] It RUNS with no red errors
  # [ ] The arcade MENU appears clearly (all 3 games listed + Quit)
  # [ ] You can pick a game and play it start to finish
  # [ ] NO infinite loops — every while loop can end
  # [ ] It does NOT crash on silly input (like typing "banana" for a number)
  # [ ] After a game finishes, you return to the menu
  # [ ] You can QUIT cleanly (option 4 says goodbye and stops)
  #
  # Open your arcade Trinket now and run it once, top to bottom.
  # Play ONE game all the way through. If every box is ticked —
  # you're ready to shine on Zoom! 🎤

  print("My Arcade Game Collection is demo-ready! 🕹️🚀")
solution_code: |
  # 🏅 PYTHON PRO BADGE — Certificate Printer
  # A tiny celebration program that uses EVERYTHING you mastered this term:
  # f-strings, a for loop, range(), and a list. It runs perfectly — try it!

  name = input("What is your name, Python Pro? ")

  # The three games in your arcade
  games = ["Dice Duel 🎲", "Guess-the-Number 🔢", "Rock-Paper-Scissors ✊"]

  print()
  print("=" * 46)
  print(f"{'PYTHON PRO BADGE 🏅':^46}")
  print("=" * 46)
  print(f"  Awarded to:   {name}")
  print(f"  Term:         2 of 8 — Loops & Logic Mastery")
  print(f"  Games built:  {len(games)}")
  print("-" * 46)

  # A for loop to list every game on the certificate
  for number in range(len(games)):
      print(f"   {number + 1}. {games[number]}")

  print("=" * 46)
  print(f"{'Loops & Logic Mastery  🔁🎲':^46}")
  print("=" * 46)
  print()
  print(f"You are officially a Python Pro, {name}! Term 3 awaits. 🚀")
class_activities: |
  ## 🎮 Class Activity: The Grand Arcade Showcase 🕹️🎤

  Today is celebration day! Everyone demos the Arcade Game Collection they built this term.

  ### Part A — Polish Pit-Stop (⭐)
  Open your arcade and run it once, top to bottom. Play ONE game all the way through. Tick off the demo-ready checklist in the starter code. Fix anything red before you present — no new games needed, just make it shine.

  ### Part B — Your 2-Minute Demo (⭐⭐)
  When it's your turn:
  1. **Share your screen** on Zoom
  2. **Run** your arcade live and show the menu
  3. **Play ONE game** all the way through (show your score if it has one!)
  4. **Explain one feature** you're proud of — e.g. "here's how mine picks a random dice roll"
  5. **Take one question** from a classmate

  ### Part C — Peer Feedback (⭐⭐⭐)
  While each coder demos, the class reacts in the **Zoom chat**:
  - Drop a 🔥 when you see something cool
  - Give **"Two Stars and a Wish"**: two things you liked ⭐⭐ and one kind idea for next time 💡

  ### Part D — Term 2 Quiz Game
  A fast, fun quiz covering the WHOLE term of loops, random, and logic. Your teacher reads each question; you race to answer in the Zoom chat. No pressure — it's a celebration, not a test!

  ### Part E — The Badge Ceremony 🏅
  Everyone who built and demoed an arcade earns the **Python Pro Badge**. We award it together — get your celebration reactions ready! 🎉
take_home_assignment: |
  ## 📚 Homework: Your Python Pro Badge 🏅

  Choose ONE (or do both if you're buzzing!):

  ### Option A — Badge Certificate Program (recommended)
  Write a **"Python Pro Badge"** program in Trinket that prints YOU a certificate using f-strings and a loop.

  **Requirements:**
  1. Ask the user their name with `input()`
  2. Make a **list** of the three games you built
  3. Use a **`for` loop** to print each game on its own line
  4. Use at least **three f-strings** and a `"=" * 40` (or similar) border
  5. End with a proud message and an emoji 🏅

  *(See today's solution code for one example you can learn from!)*

  ### Option B — Family Arcade Night
  Show your finished Arcade Game Collection to someone at home. Let them play a game (and try to break it!). Then write 3-4 sentences:
  - Which game did they play?
  - Did it crash? (Hopefully not!)
  - What did they think?

  **Also (optional, 2 min):** peek at the Term 3 preview below and write down which **Text Adventure** you'd most love to build.

  **Submit:** Save your Trinket as `Y2-T2-W8-Showcase`, click **Share**, copy the link (and paste your family notes), and send it wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: Loops Trained Every AI You've Ever Used

  Look back at what your arcade does: it **loops** to keep the game going, uses **random** to keep it surprising, and uses **logic** to decide who wins. Those exact three ideas power AI too.

  Here's the secret: an AI learns by **looping** over huge piles of examples — sometimes millions of times — nudging itself a tiny bit better on each pass, just like your `while` loop repeats until something changes.

  ```python
  while not good_enough:        # keep training...
      look_at_examples()        # ...until the AI is good enough
      improve_a_tiny_bit()
  ```

  **Discuss in the Zoom chat:** "Your `for` loop runs a few times. An AI's training loop runs *millions* of times. Why is a loop the perfect tool for a computer to do that — and a terrible one for a human?" (Hint: computers never get bored or tired!)

  In **Term 5 and Term 6** you'll open up how AI really works and build your own AI-powered assistant. Every loop you wrote this term is a brick in that wall. 🧱
---

# Year 2, Lesson 8: Arcade Showcase & Python Pro Badge! 🕹️🏅

**Course:** Loops & Logic Mastery
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 8 of 8

---

## 🎯 What You'll Do Today

- **Polish** your Arcade Game Collection so it's demo-ready — runs, menu works, no infinite loops, doesn't crash
- **Showcase** it live on Zoom: share your screen, play a game, explain a feature you're proud of
- **Cheer on** your classmates and give kind, useful feedback in the chat
- **Ace** a fun Term 2 quiz covering loops, random, and logic
- **Earn** your first Year 2 badge — the **Python Pro Badge** 🏅
- **Reflect** on your proudest game moment and hardest bug
- **Peek ahead** at Term 3 — where you'll build a **Text Adventure Engine** with functions!

---

## 🤖 BrightByte Has Something to Say...

> *"STOP. Look at what you built. Seven weeks ago a `for` loop still felt a bit magic. Today you have an ARCADE — a menu that launches three real games, dice that roll randomly, a number guesser that keeps going until you crack it, and Rock-Paper-Scissors that actually knows who won. That is not beginner work. That is a real, looping, decision-making program. I am SO proud of you. Today we don't learn new loops — today we celebrate, we show off, and you earn your very first Year 2 badge. You EARNED this. 🕹️🏅"*
> — BrightByte 🤖💛

---

## 🕹️ Part 1: Polish Pit-Stop — Make It Demo-Ready

Before you show anything, let's make sure your arcade shines. **No new games today** — you're just tidying up work you already did.

Open your Arcade Game Collection Trinket and run it once, top to bottom. Play one game all the way through. Then check every box:

| ✅ Check | What "good" looks like |
|---|---|
| **It runs** | Click ▶ Run — no red error messages |
| **Menu is clear** | The user sees all three games plus a Quit option |
| **A game plays fully** | Pick a game and play it start to finish |
| **No infinite loops** | Every `while` loop can END — the game doesn't get stuck forever 🔁 |
| **Bad-input guard** | Type `banana` where a number goes — friendly message, no crash |
| **Back to the menu** | After a game finishes, you land back on the menu |
| **Clean quit** | Option 4 (Quit) says goodbye and stops the program tidily |

> 💡 **Quick fixes only.** If something's broken, patch it now — but don't add a brand-new game five minutes before your demo. An arcade that *works* beats a fancy one that gets *stuck in a loop*.

**Reminder of your term's toolkit** (you already know all of this!):

```python
import random                              # randomness (Week 5)

while True:                                # the arcade menu loop (Week 6-7)
    print("1) Dice Duel  2) Guess  3) RPS  4) Quit")
    choice = input("Pick a game: ")

    if choice == "4":                      # a way OUT so it's not infinite!
        print("Thanks for playing! 👋")
        break                              # break stops the loop (Week 3)

    roll = random.randint(1, 6)            # random dice, 1 to 6 (Week 5)

    for round in range(3):                 # for loop for a set number of rounds
        print("Round", round + 1)
```

When every box is ticked, drop a ✅ in the Zoom chat. You're ready to present!

---

## 🎤 Part 2: The Grand Showcase — How to Demo on Zoom

This is your moment. Here's the simple, 2-minute format every coder follows:

### The 5-Step Demo

1. **📢 Introduce it** — "Hi, I'm Amara. This is my Arcade Game Collection."
2. **▶ Run it live** — share your screen, click Run, and show your menu
3. **🎮 Play ONE game** — pick your favourite and play it all the way through (show your score if it has one!)
4. **⭐ Explain ONE feature you're proud of** — for example:
   - *"Watch — my dice use `random.randint(1, 6)` so it's different every time."*
   - *"My number game keeps looping with `while` until you guess right."*
   - *"After each game, `break` sends you back to the menu."*
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
See something cool? A clever menu, a funny message, a great random surprise? Drop a 🔥 in the chat right away.

### "Two Stars and a Wish" ⭐⭐💡
When someone finishes, give kind, useful feedback:

- ⭐ **Star 1:** something you liked — *"Love how your dice game shows both rolls!"*
- ⭐ **Star 2:** another thing you liked — *"Your win/lose messages are so funny!"*
- 💡 **A Wish:** one kind idea — *"Maybe add a 'best of 5' mode next time?"*

> **Golden rule of feedback:** be **kind, specific, and helpful**. "It's good" isn't feedback. "I like how your guessing game tells me higher or lower" — *that's* feedback. 💛

### Example feedback in the chat

```
Kofi's arcade 🔥🔥
⭐ The dice roll animation made me laugh
⭐ Really clean menu, easy to pick a game
💡 Wish: maybe keep a high score across games!
```

---

## 🧠 Part 4: The Term 2 Quiz Game! 🎯

Time for a fun, fast quiz covering the WHOLE term of loops, random, and logic. Your teacher reads each question — **race to type your answer in the Zoom chat!** No pressure, it's a celebration game. 🎉

**Answer these yourself first, then reveal the key at the bottom.**

1. You want to repeat something **exactly 10 times**. Which loop is the natural choice — a `for` loop or a `while` loop? And which one is better when you *don't* know how many times (like "keep asking until they guess right")?

2. What does this print?
   ```python
   print(list(range(2, 10, 2)))
   ```

3. What does this print?
   ```python
   print(list(range(5)))
   ```

4. What does this print? (Careful — it's a countdown!)
   ```python
   print(list(range(3, 0, -1)))
   ```

5. In a loop, what is the difference between `break` and `continue`?

6. How many stars ⭐ does this nested loop print in total?
   ```python
   for i in range(3):
       for j in range(4):
           print("⭐")
   ```

7. Can `random.randint(1, 6)` ever give you a **6**? What is the smallest number it can give you?

8. What does this print? (It's a score accumulator!)
   ```python
   score = 0
   for i in range(3):
       score = score + 10
   print(score)
   ```

9. **The classic trap!** The user types `5`. Is this `True` or `False`, and why?
   ```python
   guess = input("Guess a number: ")   # user types 5
   print(guess == 5)
   ```

10. In Rock-Paper-Scissors, the player picks `"rock"` and the computer picks `"scissors"`. **Who wins?**

11. What is WRONG with this `while` loop — what will it do?
    ```python
    lives = 3
    while lives > 0:
        print("Still playing!")
    ```

12. In a Guess-the-Number game, what does `break` do here when the guess is correct?
    ```python
    while True:
        guess = int(input("Guess: "))
        if guess == secret:
            print("You got it! 🎉")
            break
    ```

<details>
<summary>🔑 Click for the Answer Key</summary>

1. **`for` for exactly 10 times; `while` for the unknown case.** Use a `for` loop with `range(10)` when you know the count. Use a `while` loop when you repeat *until a condition changes* and don't know how many times it'll take.
2. **`[2, 4, 6, 8]`** — `range(2, 10, 2)` starts at 2, steps by 2, and stops *before* 10 (so 10 is not included).
3. **`[0, 1, 2, 3, 4]`** — `range(5)` starts at 0 and stops before 5, giving five numbers.
4. **`[3, 2, 1]`** — a negative step counts *down*; it starts at 3 and stops before 0.
5. **`break` stops the loop completely** (jumps out entirely). **`continue` skips just the rest of *this* turn** and jumps straight to the next repeat of the loop.
6. **12 stars** — the inner loop runs 4 times for each of the 3 outer loops: 3 × 4 = 12.
7. **Yes, it can give 6**, and the smallest is **1**. `random.randint(a, b)` includes *both* ends, so `random.randint(1, 6)` can be any of 1, 2, 3, 4, 5, or 6.
8. **`30`** — the accumulator starts at 0 and adds 10 three times: 0 → 10 → 20 → 30.
9. **`False`** — `input()` always returns a **string**, so `guess` holds the text `"5"`, and the string `"5"` is not equal to the number `5`. To compare properly you'd convert first: `int(guess) == 5`. This is why we use `int()` before comparing numbers!
10. **The player wins** — rock crushes scissors. ✊ beats ✌️.
11. **It's an infinite loop!** `lives` never changes inside the loop, so `lives > 0` is *always* true and it prints "Still playing!" forever. To fix it, something inside must change `lives` (e.g. `lives = lives - 1`) so the loop can eventually end.
12. **`break` stops the `while True` loop** as soon as the guess is correct — without it, the game would keep asking forever even after you win.

</details>

> **Scoring the game:** first correct answer in the chat = 🏆, but everyone who answers gets a 👏. It's about celebrating what you know, not winning!

---

## 🏅 Part 5: The Python Pro Badge Ceremony!

This is the big one. **For the first time in Year 2, you earn a badge.**

You built an **Arcade Game Collection** — a menu-driven program that runs three real games using loops, randomness, and logic. That is genuinely impressive work, and it earns you the title:

> ## 🏅 PYTHON PRO 🏅

**How you earned it this term:**

- 🔁 You mastered `for` loops and `range()` — counting up, down, and in steps
- 🔄 You mastered `while` loops — repeating *until* something changes
- 🛑 You learned `break` and `continue` to control your loops
- 🎲 You added `random` to make games surprising
- 🎮 You built and combined **three games** into one arcade menu

**Ceremony time!** When your teacher calls your name:
- Turn your camera on if you can 📷
- The class fills the chat with 🏅🎉🔥
- Say one sentence: *"I'm a Python Pro because I built ___."*

> *"A badge isn't just a picture. It's proof. It says: this coder can make a computer repeat, decide, and surprise — the building blocks of every game and every AI. Wear it proudly. You're a Python Pro now. 🏅"*
> — BrightByte 🤖

---

## ✨ Part 6: Reflection — Your Term 2 Journey

Take a moment. Seven weeks ago a `for` loop was new. Now you've built an arcade that loops, decides, and rolls dice.

**Share in the Zoom chat:**

- 🌟 **My proudest game moment this term was...** *(the game you loved building, the feature that finally worked, your first win against the computer...)*
- 😅 **My hardest bug was...** *(the infinite loop that wouldn't stop? the input that kept crashing? how did you beat it?)*

Reading each other's reflections reminds us: **everyone hit a bug, and everyone got through it.** That's what coders do. 💪

> *"The hardest bug you beat this term? That infinite loop, or the crash you finally fixed — that taught you more than the code that worked first try. Remember that feeling next term when functions get tricky. You've beaten hard before."*
> — BrightByte 🤖

---

## 🌟 What's Coming Next Term

You've finished **Term 2 of 8** in Year 2. Here's the whole adventure still ahead:

| Term | What You'll Master | What You'll Build |
|---|---|---|
| 1 | Python Accelerated ✅ *(done!)* | 🧮 Smart Calculator |
| 2 | Loops & Logic Mastery ✅ *(done!)* | 🕹️ Arcade Game Collection |
| **3** | **Functions** | **🗺️ Text Adventure Engine** |
| 4 | Data Structures | 📇 Contact Manager |
| 5 | AI Concepts Deep Dive | 🔍 AI Investigation Report |
| 6 | Working with APIs | 🤖 AI-Powered Assistant |
| 7 | Data & Visualization | 📊 Data Story Project |
| 8 | Capstone & Portfolio | 🎓 Your Own Big Project! |

### 🗺️ Next Up: Term 3 — Functions & the Text Adventure Engine

Get ready, because Term 3 unlocks a real superpower:

- 🧩 You'll master **functions** — reusable blocks of code you can name and call again and again (no more copy-pasting!)
- 🗺️ You'll build a **Text Adventure Engine** — a "choose your own adventure" game with rooms, choices, and different endings
- 🏗️ Functions are how real programmers build BIG programs without the code turning into spaghetti

> *"This term you built games. Next term you learn functions — the tool that lets you build games and stories that are ten times bigger without going mad. Then you'll use them to build a Text Adventure Engine, where every choice the player makes leads somewhere new. It's going to be brilliant. 🗺️"*
> — BrightByte 🤖

---

## 🏆 Term 2 Achievements — Look How Far You Came!

Over 8 weeks, you learned and mastered:

- ✅ **Week 1:** `for` loops and `range()` — counting up, down, and in steps
- ✅ **Week 2:** Loop patterns — times tables, countdowns, and looping over lists
- ✅ **Week 3:** Loop control — `break` and `continue` to steer your loops
- ✅ **Week 4:** Nested loops and patterns — loops inside loops
- ✅ **Week 5:** Randomness with `random` — plus score and lives
- ✅ **Week 6:** Built **Dice Duel** and **Guess-the-Number** with `while` loops
- ✅ **Week 7:** Combined three games into one **Arcade Game Collection** menu
- ✅ **Week 8:** Polished, demoed, and celebrated — and earned the **Python Pro Badge**! 🏅

**You built an arcade that loops, decides, and surprises. That's real game programming — and you did it. 🎉**

---

## 🎉 A Final Word from BrightByte

> *"Second Year 2 term: COMPLETE. You didn't just learn loops — you built real games, you showed them to the world, you cheered each other on, and you earned your first badge. That's not just coding, that's being a maker. Rest up, feel proud of that Python Pro Badge, and I'll see you in Term 3 where we unlock functions and build a whole Text Adventure Engine. Onwards, Python Pro! 🚀🕹️"*
> — BrightByte 🤖💛

---

## 📚 Homework: Your Python Pro Badge 🏅

Choose ONE (or both if you're buzzing!):

### Option A — Badge Certificate Program (recommended)
Write a **"Python Pro Badge"** program in Trinket that prints YOU a certificate using f-strings and a loop.

**Requirements:**
1. Ask the user their name with `input()`
2. Make a **list** of the three games you built
3. Use a **`for` loop** to print each game on its own line
4. Use at least **three f-strings** and a `"=" * 40` (or similar) border
5. End with a proud message and an emoji 🏅

*(See today's solution code for one example you can learn from!)*

### Option B — Family Arcade Night
Show your finished Arcade Game Collection to someone at home. Let them play a game (and try to break it!). Then write 3-4 sentences: which game did they play, did it crash (hopefully not!), and what did they think?

**Also (optional, 2 min):** peek at the Term 3 preview above and write down which **Text Adventure** you'd most love to build.

**Submit:** Save your Trinket as `Y2-T2-W8-Showcase`, click **Share**, copy the link, and send it wherever your teacher asks.

---

*You finished Term 2 AND earned your Python Pro Badge, coder. Take a bow — you earned it. See you in Term 3! 🕹️🏅🚀*
