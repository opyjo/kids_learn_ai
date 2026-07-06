---
title: "Welcome to Year 2: Code Sprint! ⚡🐍"
description: "Kick off Year 2 with a high-energy code sprint — refresh your print, variable, and input skills, and discover what you'll build this year"
difficulty: "intermediate"
order_index: 1
course_slug: "year2-term-1-python-accelerated"
is_premium: false
requires_trinket: true
starter_code: |
  # ⚡ Code Sprint Warm-Up!
  # You know all of this from Year 1 — let's see how fast it comes back!

  # Round 1: Fix this greeting so it runs
  print("Welcome back, coder!)

  # Round 2: Make these variables, then print them in a sentence
  # name = ?
  # age = ?

  # Round 3: Ask the user a question with input() and reply to them
  # favourite = input("What is your favourite subject? ")

  # Ready... set... SPRINT! 🏁
solution_code: |
  # ⚡ Code Sprint Warm-Up — one possible solution

  # Round 1: fixed — the closing quote was missing
  print("Welcome back, coder!")

  # Round 2: variables in a sentence
  name = "Ama"
  age = 12
  print("My name is", name, "and I am", age, "years old!")

  # Round 3: input and reply
  favourite = input("What is your favourite subject? ")
  print("Nice! " + favourite + " is a great subject!")
class_activities: |
  ## 🎮 Class Activity: The Great Code Sprint 🏁

  Three timed rounds. Each round, your teacher starts the clock — type your solution in Trinket, run it, and give a **thumbs up** in Zoom when it works!

  ### Round 1 — Bug Hunt (⭐)
  Fix the broken line in the starter code so it prints `Welcome back, coder!`

  ### Round 2 — Variable Flash (⭐⭐)
  1. Create a variable `name` with your name
  2. Create a variable `age` with your age
  3. Print them together in one sentence

  ### Round 3 — Talk to Me (⭐⭐⭐)
  1. Use `input()` to ask the user their favourite subject
  2. Store the answer in a variable
  3. Print a friendly reply that uses their answer

  ### Bonus Sprint
  Combine all three rounds into ONE program that greets the user, introduces you, and asks them a question. Paste your favourite line in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: Year 2 Me

  Write a "Year 2 Me" interview program in Trinket — your program interviews YOU!

  **Requirements:**
  1. Use `input()` to ask at least **3 questions** (e.g. name, age, coding goal for this year)
  2. Store every answer in a **variable**
  3. Print a **summary paragraph** at the end using all the answers
  4. Include at least one emoji 🎉

  **Example run:**
  ```
  What is your name? Kofi
  How old are you? 12
  What do you want to build this year? A game
  ---
  Kofi is 12 years old and this year they will build: A game! 🚀
  ```

  **Challenge tiers:**
  - ⭐ 3 questions and a summary
  - ⭐⭐ 5 questions and a nicely formatted summary with a border of stars
  - ⭐⭐⭐ Add a question whose reply changes depending on the answer (use `if`!)

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: How AI Grew While You Were Away

  In Year 1 you learned what AI is. Since then, AI has kept getting smarter!

  Think about the last few months:
  - 🗣️ Have you talked to a chatbot (like ChatGPT or a homework helper)?
  - 🎨 Have you seen AI-generated pictures or videos online?
  - 🌐 Has a translation or voice tool surprised you with how good it was?

  **Discuss in the Zoom chat:** "What is the most impressive (or strangest!) AI thing you've seen recently?"

  This year, you won't just USE AI — by Term 5 and 6, you'll understand how it really works inside, and you'll build your own AI-powered assistant. Every line of Python you write this term is a step towards that!
---

# Year 2, Lesson 1: Welcome to Year 2 — Code Sprint! ⚡🐍

**Course:** Python Accelerated
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

- What's waiting for you in Year 2 (spoiler: games, AI assistants, and data detective work!)
- A rapid-fire refresh of your Year 1 superpowers: `print()`, variables, and `input()`
- How to shake off the rust with a timed **Code Sprint**
- The plan for this term's big project: the **Smart Calculator**

---

## 🤖 BrightByte Is Back!

> *"WELL, WELL, WELL. Look who's back! I missed you! Last year you went from zero to writing real Python programs — quiz games, loops, lists, the lot. This year? This year we go FURTHER. Bigger projects. Smarter programs. And by the end, you'll build things that feel like real apps. But first... let's see if your fingers still remember Python. Ready to sprint?"*
> — BrightByte 🤖⚡

---

## 🗺️ Part 1: Your Year 2 Adventure Map

You finished Year 1 as a certified AI Explorer. Here's where Year 2 takes you:

| Term | What You'll Master | What You'll Build |
|---|---|---|
| 1 | Python Accelerated (you are here!) | 🧮 Smart Calculator |
| 2 | Loops & Logic Mastery | 🕹️ Arcade Game Collection |
| 3 | Functions | 🗺️ Text Adventure Engine |
| 4 | Data Structures | 📇 Contact Manager |
| 5 | AI Concepts Deep Dive | 🔍 AI Investigation Report |
| 6 | Working with APIs | 🤖 AI-Powered Assistant |
| 7 | Data & Visualization | 📊 Data Story Project |
| 8 | Capstone & Portfolio | 🎓 Your Own Big Project! |

> **The goal of Year 2:** by graduation, you'll have a portfolio of EIGHT real projects — and you'll understand how the AI tools you use every day actually work.

### 💬 Class Discussion

> **Look at the table above. Which project are you most excited to build?**
> Type your answer in the **Zoom chat** — let's see which term wins!

---

## 🏋️ Part 2: Waking Up Your Python Muscles

Before we sprint, let's stretch. Here's everything you already know from Year 1, in one program:

```python
# Everything you learned in Year 1... in 10 lines!
print("Hello, Year 2!")              # printing

name = "Ama"                          # variables
age = 12

hobby = input("What is your hobby? ") # input from the user

if age >= 12:                         # decisions
    print("You are ready for Year 2!")

for i in range(3):                    # loops
    print("Let's go! 🚀")

skills = ["print", "variables", "loops"]   # lists
print("My skills:", skills)
```

Read it slowly. Can you explain what **every line** does? If yes — you're ready. If some lines feel foggy, don't worry: **this whole term is designed to make these skills rock-solid** before we build bigger things.

### The Three We're Sprinting On Today

| Skill | What It Does | Example |
|---|---|---|
| `print()` | Shows something on the screen | `print("Hi!")` |
| Variables | Store information with a name | `score = 10` |
| `input()` | Asks the user a question and saves the answer | `name = input("Name? ")` |

---

## 🖥️ Part 3: Trinket Check — Are You Ready to Race?

Quick pit-stop before the sprint. Open **Trinket** (trinket.io) and log in — same account as last year.

> 💡 **Forgotten your password?** Type "help" in the Zoom chat and your teacher will sort you out while the class continues.

**Test your engine.** Type this and click **▶ Run**:

```python
print("Year 2, here I come! 🏁")
```

See it in the output panel? Give a **thumbs up** in Zoom reactions. 👍

> **New this year:** in Year 2 we save EVERYTHING. Every program you write this year can go into your end-of-year portfolio. Name your Trinkets clearly — today's is `Y2-T1-W1-CodeSprint`.

---

## ⚡ Part 4: THE CODE SPRINT

This is a race — but the only person you're racing is **the you from last year**. Three rounds, each one harder. Your teacher will time each round.

---

### 🏁 Round 1 — Bug Hunt (⭐)

There's a bug hiding in this line. Find it, fix it, run it:

```python
print("Welcome back, coder!)
```

<details>
<summary>🔎 Stuck? Click for a hint</summary>

Count the quotation marks. Every opening `"` needs a closing `"`!

</details>

**Fixed version:**

```python
print("Welcome back, coder!")
```

That missing quote is the #1 most common Python bug in the world. You just fixed it in seconds — last year it might have taken you five minutes. **That's growth.** 📈

---

### 🏁 Round 2 — Variable Flash (⭐⭐)

Create two variables and print them in one sentence:

```python
name = "Kwame"
age = 12
print("My name is", name, "and I am", age, "years old!")
```

**Output:**
```
My name is Kwame and I am 12 years old!
```

> **Remember:** the variable name has NO quotes. The text inside quotes is exactly what appears; a variable name gets swapped for its value.

| Code | What Prints |
|---|---|
| `print("name")` | `name` (just the word!) |
| `print(name)` | `Kwame` (the value inside!) |

---

### 🏁 Round 3 — Talk to Me (⭐⭐⭐)

Make your program have a conversation:

```python
favourite = input("What is your favourite subject? ")
print("Nice! " + favourite + " is a great subject!")
```

**Example run:**
```
What is your favourite subject? Maths
Nice! Maths is a great subject!
```

Notice the `+` glues text together — that's called **concatenation** (fancy word, simple idea: text glue).

---

### 🏆 Bonus Sprint — The Combo

Finished early? Combine all three rounds into one smooth program:

```python
print("=" * 30)
print("Welcome back, coder!")
print("=" * 30)

name = "Zara"
age = 13
print("My name is", name, "and I am", age, "years old!")

favourite = input("What is your favourite subject? ")
print("Nice! " + favourite + " is a great subject!")
print("Year 2 is going to be EPIC! 🎉")
```

> Did you spot `"=" * 30`? That prints thirty equals signs in a row — a Year 1 trick for making your programs look professional. We'll use it a LOT this term.

---

## ⚠️ Common Mistakes (The Rust Falls Off Fast!)

**Mistake 1: Quotes around variable names**

❌ Wrong:
```python
name = "Ama"
print("name")
```
```
name
```

✅ Correct:
```python
name = "Ama"
print(name)
```
```
Ama
```

---

**Mistake 2: Forgetting input() gives you TEXT**

❌ This surprises everyone:
```python
age = input("How old are you? ")
print(age + 1)
```
```
TypeError: can only concatenate str (not "int") to str
```

🤔 **Wait, why?!** Because `input()` ALWAYS hands you text — even if the user types a number. Keep this mystery in your pocket: **solving it is exactly what next week's lesson is about!**

---

**Mistake 3: Capital letters sneaking in**

❌ Wrong:
```python
Print("Hello!")
Name = input("Name? ")
print(name)
```

✅ Correct:
```python
print("Hello!")
name = input("Name? ")
print(name)
```

> Python is **case-sensitive** — `Name` and `name` are two completely different variables!

---

## 🧮 Part 5: This Term's Mission — The Smart Calculator

Every term in Year 2 ends with a real project. This term, you're building a **Smart Calculator**:

- 📋 It shows the user a **menu** of operations
- 🔢 It takes numbers from the user and does real maths — including percentages
- 💅 It formats the answers beautifully (proper money formatting!)
- 🛡️ It doesn't crash when someone types something silly (that's the "smart" part)

To build it, you'll need the skills from Weeks 2–5: **data types, power maths operators, f-strings, and input checking.** Every week is a piece of the calculator puzzle.

> *"A calculator sounds simple — until you try to build one that NEVER crashes. That's what separates real programmers from beginners. You're going to be a real programmer."*
> — BrightByte 🤖

---

## 🌟 What's Coming Next Week?

Remember the mystery from Mistake 2? Try this right now if you dare:

```python
age = input("How old are you? ")
print(age + 1)
```

💥 **CRASH!** Next week we solve the mystery: why Python thinks `"12"` and `12` are completely different things, and how `int()` and `float()` fix it. It's called **data types** — and it's the key to making programs that do real maths with user input.

---

## 🏆 Today's Achievements

- ✅ You know the Year 2 roadmap — 8 terms, 8 projects
- ✅ You shook the rust off `print()`, variables, and `input()`
- ✅ You fixed the world's most common Python bug in seconds
- ✅ You wrote a program that has a conversation
- ✅ You know this term's mission: the **Smart Calculator**

> *"Look at you! Most people forget everything over a break — you were sprinting within an hour. Year 1 you would be SO impressed. Now let's build something amazing."*
> — BrightByte 🤖⚡

---

## 📚 Homework: Year 2 Me

Write a **"Year 2 Me"** interview program in Trinket — your program interviews YOU!

**Requirements:**
1. Use `input()` to ask at least **3 questions** (name, age, coding goal for this year)
2. Store every answer in a **variable**
3. Print a **summary paragraph** at the end using all the answers
4. Include at least one emoji 🎉

**Example run:**
```
What is your name? Kofi
How old are you? 12
What do you want to build this year? A game
---
Kofi is 12 years old and this year they will build: A game! 🚀
```

**Challenge tiers:**
- ⭐ 3 questions and a summary
- ⭐⭐ 5 questions and a nicely formatted summary with a border of stars
- ⭐⭐⭐ Add a question whose reply changes depending on the answer (use `if`!)

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*Welcome back, programmer. Year 2 starts NOW! ⚡🐍*
