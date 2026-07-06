---
title: "Adventure Showcase & Celebration! 🗺️🎭"
description: "Term 3 finale — polish and play-test your Text Adventure, give peer feedback, ace a fun functions quiz, and celebrate finishing the Functions term"
difficulty: "intermediate"
order_index: 8
course_slug: "year2-term-3-functions"
is_premium: false
requires_trinket: true
starter_code: |
  # ✅ DEMO-READY CHECKLIST
  # Before a classmate play-tests your Text Adventure, tick these off in Trinket:
  #
  # [ ] It RUNS with no red errors
  # [ ] The opening scene prints clearly (the player knows where they are)
  # [ ] EVERY path eventually reaches a WIN or a LOSE ending
  # [ ] Scenes CONNECT — each scene function returns the next scene's name
  # [ ] The dispatch while-loop keeps calling the right scene
  # [ ] It does NOT crash on unexpected input (typing "banana" or "5" at a choice)
  # [ ] Your inventory list works (picking up / checking an item)
  #
  # Open your adventure Trinket now and play it once, start to finish.
  # If every box is ticked — you're ready to be play-tested on Zoom! 🎤

  print("My Text Adventure is demo-ready! 🗺️")
solution_code: |
  # 🏆 TERM 3 COMPLETE! — Certificate Maker
  # A tiny celebration program that USES the term's big skill: FUNCTIONS.
  # One function takes a PARAMETER; one function RETURNS a value.

  def count_skills(skills):
      # Takes a list, RETURNS how many skills were mastered
      return len(skills)

  def make_certificate(name, skill_count):
      # Takes PARAMETERS, prints a Term 3 certificate
      print("=" * 44)
      print(f"{'TERM 3 COMPLETE!':^44}")
      print("=" * 44)
      print(f"  Coder:            {name}")
      print(f"  Term:             Functions 🧩")
      print(f"  Project built:    Text Adventure Engine 🗺️")
      print(f"  Skills mastered:  {skill_count}")
      print("=" * 44)
      print(f"{'Functions  🧩🐍':^44}")
      print("=" * 44)

  skills_i_learned = ["def", "parameters", "return", "scope", "dispatch loop"]

  name = input("What is your name, coder? ")
  total = count_skills(skills_i_learned)   # calling a function that RETURNS
  make_certificate(name, total)            # calling a function with ARGUMENTS

  print()
  print(f"Brilliant work, {name}! Term 4 is waiting for you. 🚀")
class_activities: |
  ## 🎮 Class Activity: The Grand Adventure Showcase 🗺️🎤

  Today is celebration day! Everyone play-tests the Text Adventure they built this term.

  ### Part A — Polish Pit-Stop (⭐)
  Open your adventure and play it once, start to finish. Tick off the demo-ready checklist in the starter code. Fix anything red before you present — no new scenes needed, just make sure every path reaches a win or a lose.

  ### Part B — Get Play-Tested (⭐⭐)
  When it's your turn:
  1. **Share your screen** on Zoom
  2. **Run** your adventure live
  3. **Let a classmate call out the choices** — they play, you drive the keyboard
  4. **Try to reach a WIN and a LOSE** ending between you
  5. **Explain one function** you're proud of — e.g. "this scene function returns the name of the next scene"

  ### Part C — Peer Feedback (⭐⭐⭐)
  While each coder is play-tested, the class reacts in the **Zoom chat**:
  - Drop a 🔥 when a scene or a choice makes you smile
  - Give **"Two Stars and a Wish"**: two things you liked ⭐⭐ and one kind idea for next time 💡

  ### Part D — Term 3 Quiz Game
  A fast, fun quiz covering the WHOLE term of functions. Your teacher reads each question; you race to answer in the Zoom chat. No pressure — it's a celebration, not a test!
take_home_assignment: |
  ## 📚 Homework: Your Function Certificate 🏆

  Choose ONE (or do both if you're buzzing!):

  ### Option A — Function Certificate Program (recommended)
  Write a **"Function Certificate"** program in Trinket that prints YOU a certificate — built out of functions.

  **Requirements:**
  1. Write at least **two functions**
  2. One function must take a **parameter** (e.g. `make_certificate(name)`)
  3. One function must **return** a value (e.g. a function that returns a message or a count)
  4. **Call** your functions to print the finished certificate
  5. End with a proud message and an emoji 🎉

  ### Option B — Family Play-Test
  Play your finished Text Adventure with someone at home. Let them choose the path! Then write 3-4 sentences:
  - Which choice was their favourite?
  - Did they reach a win or a lose?
  - Did it ever crash? (Hopefully not!)

  **Also (optional, 2 min):** peek at the Term 4 preview below and write down one idea for your Contact Manager.

  **Submit:** Save your Trinket, click **Share**, copy the link (and paste your family notes), and send it wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: Functions Keep Huge AI Systems Organised

  Look back at your Text Adventure. Instead of one giant, tangled program, you split it into tidy, named **functions** — one per scene — that call each other. That is *exactly* how enormous AI systems are built, just at a massive scale.

  - A real AI app is made of **thousands of small functions** — one to clean the text, one to make a prediction, one to format the reply
  - Each function does **one job** and has a clear name, so a whole team of engineers can work on different functions at once
  - When something breaks, engineers fix **one small function** instead of untangling the whole program — the same reason your scenes were easier to debug separately

  **Discuss in the Zoom chat:** "If you were building an AI homework helper, what small functions would it need?" (Think: `read_question()`, `find_answer()`, `check_spelling()`.)

  In **Term 5 and Term 6** you'll open up how AI really works and build your own AI-powered assistant. Every function you wrote this term is a building block for that. 🧱
---

# Year 2, Lesson 8: Adventure Showcase & Celebration! 🗺️🎭

**Course:** Functions
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 8 of 8

---

## 🎯 What You'll Do Today

- **Polish** your Text Adventure so it's demo-ready — runs, every path reaches an ending, no crashes
- **Get play-tested** on Zoom: share your screen and let a classmate call out the choices while you drive
- **Play-test** your classmates' adventures — this is the highlight of the whole day!
- **Cheer each other on** with kind, useful feedback in the chat
- **Ace** a fun Term 3 quiz all about functions
- **Reflect** on your proudest scene and the trickiest bug — and celebrate finishing the Functions term
- **Peek ahead** at Term 4, where you'll build a Contact Manager with data structures

---

## 🤖 BrightByte Has Something to Say...

> *"STOP everything. Look at what you built. A few weeks ago a 'function' was just a word — today you have a whole Text Adventure held together by functions that call each other, a dispatch loop that jumps from scene to scene, an inventory list, and endings that win or lose. That is not beginner work. That is genuine software design. I am SO proud of you. Today we don't learn anything new — today we PLAY each other's games, we celebrate, and we soak it all in. You earned this. 🎉"*
> — BrightByte 🤖💛

---

## 🗺️ Part 1: Polish Pit-Stop — Make It Demo-Ready

Before anyone play-tests your game, let's make sure it shines. **No new scenes today** — you're just tidying up work you already did.

Open your Text Adventure Trinket and play it once, start to finish. Then check every box:

| ✅ Check | What "good" looks like |
|---|---|
| **It runs** | Click ▶ Run — no red error messages |
| **Opening scene is clear** | The player instantly knows where they are and what they can do |
| **Every path ends** | Follow each choice — they all reach a **win** or a **lose**, none dead-end |
| **Scenes connect** | Each scene function `return`s the *name* of the next scene |
| **Dispatch loop works** | The `while` loop keeps calling the current scene until an ending |
| **No crash on silly input** | Type `banana` or `9` at a choice — it re-asks, it doesn't crash 🛡️ |
| **Inventory works** | Picking up / checking an item behaves as expected |

> 💡 **Quick fixes only.** If something's broken, patch it now — but don't add brand-new scenes five minutes before you present. An adventure that *finishes* beats a big one that *crashes*.

**Reminder of your term's toolkit** (you already know all of this!):

```python
# The skills that power your adventure:
def forest(inventory):                 # define a scene function (Week 1)
    print("You reach a dark forest. 🌲")
    print("Go [left] or [right]?")
    choice = input("> ").lower()       # parameter + input (Week 2)

    if choice == "left":
        inventory.append("torch")      # inventory list
        return "cave"                  # RETURN the next scene (Week 3)
    elif choice == "right":
        return "river"
    else:
        return "forest"                # unknown input? stay put, re-ask 🛡️

scene = "forest"                        # the dispatch while-loop (Week 7)
while scene not in ("win", "lose"):
    scene = forest(inventory)           # functions calling functions
```

When every box is ticked, drop a ✅ in the Zoom chat. You're ready to be play-tested!

---

## 🎤 Part 2: The Grand Showcase — Play-Test Each Other's Adventures

This is the best part of the whole term. Instead of just *watching* demos, you get to **play** each other's games live on Zoom.

### How a Play-Test Works

1. **📢 Introduce it** — "Hi, I'm Amara. My adventure is called *The Lost Temple*."
2. **▶ Share your screen and run it** — the game starts at your opening scene
3. **🙋 Pick a play-tester** — a classmate calls out the choices ("Go left!") while you type them
4. **🗺️ Play through together** — try to reach a **win** *and* a **lose** so everyone sees both endings
5. **⭐ Explain ONE function you're proud of** — for example:
   - *"This scene function returns the name of the next scene, so my loop knows where to go."*
   - *"Watch — if you type something silly, this scene just asks again instead of crashing."*
   - *"This function checks my inventory list before it lets you open the door."*

### Play-Test Confidence Tips

- **You built this — you're the expert.** Nobody knows your scenes better than you.
- **Nervous? That's normal.** Take a breath, read your opening scene out loud, then hand a choice to a classmate.
- **Something breaks live?** Say *"ooh, a live bug!"* and stay cool — real programmers debug in front of people all the time. It's part of the fun.
- **Keep it moving.** A couple of paths is plenty. Show your favourite branch, don't play every single scene.

> *"You don't have to be perfect. You just have to press Run and let someone play. The bravest thing a coder does is hand their creation to someone else — and you're all doing it today."*
> — BrightByte 🤖

---

## 💬 Part 3: Cheering Each Other On — Peer Feedback

While each coder is play-tested, the rest of the class makes them feel like a star. We use the **Zoom chat**:

### Drop a 🔥
See a clever scene, a funny ending, a sneaky hidden path, a neat inventory trick? Drop a 🔥 in the chat right away.

### "Two Stars and a Wish" ⭐⭐💡
When someone finishes, give kind, useful feedback:

- ⭐ **Star 1:** something you liked — *"Loved that the dragon scene had three choices!"*
- ⭐ **Star 2:** another thing you liked — *"Your win ending made me actually cheer!"*
- 💡 **A Wish:** one kind idea — *"Maybe add a secret item you need to beat the boss?"*

> **Golden rule of feedback:** be **kind, specific, and helpful**. "It's good" isn't feedback. "I love how the cave scene sends you back if you forgot the torch" — *that's* feedback. 💛

### Example feedback in the chat

```
Kofi's adventure 🔥🔥
⭐ The haunted library scene was so spooky
⭐ Every path really did reach an ending — no dead ends!
💡 Wish: maybe let us drop items from the inventory too?
```

---

## 🧠 Part 4: The Term 3 Quiz Game! 🎯

Time for a fun, fast quiz covering the WHOLE term of functions. Your teacher reads each question — **race to type your answer in the Zoom chat!** No pressure, it's a celebration game. 🎉

**Answer these yourself first, then reveal the key at the bottom.**

1. What keyword do you use to **define** a new function in Python?

2. What punctuation mark must go at the **end of the `def` line**, before the indented body?

3. How do you **call** (run) a function named `greet`? Write the line.

4. In `def greet(name):`, what is `name` called — a **parameter** or an **argument**?

5. In `greet("Ama")`, what is `"Ama"` called — a **parameter** or an **argument**?

6. What is the difference between `return` and `print` inside a function?

7. What value does this function give back when you call it?
   ```python
   def say_hi():
       print("Hi!")
   ```

8. What does this print?
   ```python
   def double(n):
       return n * 2

   result = double(5)
   print(result)
   ```

9. Look at this code. Will it work, and if not, why?
   ```python
   def add(a, b):
       return a + b

   print(add(3))
   ```

10. What does this print, and why?
    ```python
    def make_score():
        score = 100     # a LOCAL variable
        return score

    make_score()
    print(score)
    ```

11. Can one function **call another function**? What does this print?
    ```python
    def shout(word):
        return word.upper() + "!"

    def announce(name):
        return shout(name)

    print(announce("ama"))
    ```

12. **The classic trap!** What is the value of `total` after this runs, and why might it surprise you?
    ```python
    def add(a, b):
        result = a + b       # no return statement!

    total = add(2, 3)
    ```

<details>
<summary>🔑 Click for the Answer Key</summary>

1. **`def`** — short for "define". Every function starts with `def`.
2. **A colon `:`** — the `def` line always ends in `:`, then the body is indented underneath.
3. **`greet()`** — you call a function by writing its name followed by round brackets `()`.
4. **A parameter.** The name in the `def` line (`name`) is the parameter — the placeholder.
5. **An argument.** The actual value you pass in when you call (`"Ama"`) is the argument.
6. **`print` shows a value on the screen; `return` sends a value back to whoever called the function** so it can be stored or reused. `print` displays; `return` hands back.
7. **`None`.** A function with **no `return` statement** returns `None` — it prints `"Hi!"` but gives back nothing.
8. **`10`** — `double(5)` returns `5 * 2`, which is stored in `result` and printed.
9. **It crashes with a `TypeError`.** `add` needs **two** arguments (`a` and `b`) but only one was given — Python says something like *"missing 1 required positional argument: 'b'"*.
10. **It crashes with a `NameError`.** `score` is a **local** variable that only exists *inside* `make_score`. Outside the function, `score` doesn't exist, so `print(score)` fails. (To use the value, you'd write `print(make_score())`.)
11. **Yes — functions can call other functions.** It prints **`AMA!`**. `announce("ama")` calls `shout("ama")`, which returns `"AMA!"`, and `announce` hands that straight back.
12. **`total` is `None`.** The function does the maths into `result` but never `return`s it, so `add(2, 3)` gives back `None`. This is THE big functions trap: **no `return` means the function returns `None`.** To fix it, add `return result`.

</details>

> **Scoring the game:** first correct answer in the chat = 🏆, but everyone who answers gets a 👏. It's about celebrating what you know, not winning!

---

## ✨ Part 5: Reflection — Your Term 3 Journey

Take a moment. A few weeks ago, functions were a mystery. Now you've designed a whole adventure out of them — scenes that return the next scene, a loop that ties them together, an inventory that remembers what you carry.

**Share in the Zoom chat:**

- 🌟 **My proudest scene was...** *(the branch you loved building, the ending that surprised your play-tester, the function you're most pleased with...)*
- 😅 **The trickiest bug in connecting my scenes was...** *(a scene that returned the wrong name? a loop that never ended? a missing `return`? — and how you beat it)*

Reading each other's reflections reminds us: **everyone hit a tricky bug connecting their scenes, and everyone got through it.** That's what coders do. 💪

> *"The hard parts? Those are the bits where you grew the most. The scene that returned the wrong name and sent your player in circles taught you more than the code that worked first try. Remember that feeling next term when things get tricky — you've beaten hard before."*
> — BrightByte 🤖

---

## 🌟 What's Coming Next Term

You've finished **Term 3 of 8** in Year 2. Here's the whole adventure still ahead:

| Term | What You'll Master | What You'll Build |
|---|---|---|
| 1 | Python Accelerated ✅ *(done!)* | 🧮 Smart Calculator |
| 2 | Loops & Logic Mastery ✅ *(done!)* | 🕹️ Arcade Game Collection |
| 3 | Functions ✅ *(done!)* | 🗺️ Text Adventure Engine |
| **4** | **Data Structures** | **📇 Contact Manager** |
| 5 | AI Concepts Deep Dive | 🔍 AI Investigation Report |
| 6 | Working with APIs | 🤖 AI-Powered Assistant |
| 7 | Data & Visualization | 📊 Data Story Project |
| 8 | Capstone & Portfolio | 🎓 Your Own Big Project! |

### 📇 Next Up: Term 4 — Data Structures

Get ready, because Term 4 gives your programs a proper *memory*:

- 📚 You'll go deep on **data structures** — powerful lists and, for the first time, **dictionaries** that store labelled information (like `{"name": "Ama", "phone": "0803..."}`)
- 📇 You'll build a **Contact Manager** — add contacts, search for a friend, update a number, and delete an entry, all saved neatly in a data structure
- 🧩 And you'll use your new function skills every step of the way — `add_contact()`, `find_contact()`, `delete_contact()`

> *"This term you learned to organise your CODE with functions. Next term you learn to organise your DATA. Put those two together and you can build real, useful apps — starting with a Contact Manager that actually remembers people. I can't wait. 📇🚀"*
> — BrightByte 🤖

---

## 🏆 Term 3 Achievements — Look How Far You Came!

Over 8 weeks, you learned and mastered:

- ✅ **Week 1:** Met functions — `def`, calling with `()`, and "define before you call"
- ✅ **Week 2:** Gave functions **parameters** so they can work with different inputs
- ✅ **Week 3:** Made functions **return** values so their answers can be reused
- ✅ **Week 4:** Learned **scope** — local vs global variables and why it matters
- ✅ **Week 5:** Designed clean functions — one job each, good names, planning before coding
- ✅ **Week 6:** Designed your adventure — mapped scenes and how they connect
- ✅ **Week 7:** Made functions **work together** — scene functions, a dispatch loop, and an inventory list
- ✅ **Week 8:** Polished, play-tested, and celebrated a complete Text Adventure Engine!

**You built a program made of functions that call each other and hold a whole game together. That's real software design — and you did it. 🎉**

---

## 🎉 A Final Word from BrightByte

> *"The Functions term: COMPLETE. You didn't just learn what `def` means — you designed a whole world out of functions, you handed it to your friends to play, and you cheered each other on. That's not just coding, that's being part of a team of makers. Rest up, feel proud, and I'll see you in Term 4 where we give your programs a memory and build a Contact Manager. Onwards! 🚀📇"*
> — BrightByte 🤖💛

---

## 📚 Homework: Your Function Certificate 🏆

Choose ONE (or both if you're buzzing!):

### Option A — Function Certificate Program (recommended)
Write a **"Function Certificate"** program in Trinket that prints YOU a certificate — built out of functions.

**Requirements:**
1. Write at least **two functions**
2. One function must take a **parameter** (e.g. `make_certificate(name)`)
3. One function must **return** a value (e.g. a function that returns a message or a count)
4. **Call** your functions to print the finished certificate
5. End with a proud message and an emoji 🎉

*(See today's solution code for one example you can learn from!)*

### Option B — Family Play-Test
Play your finished Text Adventure with someone at home. Let them choose the path! Then write 3-4 sentences: which choice was their favourite, did they reach a win or a lose, and did it ever crash (hopefully not!)?

**Also (optional, 2 min):** peek at the Term 4 preview above and write down one idea for your Contact Manager.

**Submit:** Save your Trinket (`Y2-T3-W8-Showcase`), click **Share**, copy the link, and send it wherever your teacher asks.

---

*You finished the Functions term, coder. Take a bow — you earned it. See you in Term 4! 🎉🗺️🚀*
