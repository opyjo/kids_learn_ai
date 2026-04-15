---
title: "Term 1 Recap and Final Project!"
description: "Review everything from Term 1 with challenges and quizzes, then choose your final project: Mad Libs or Joke Machine — both use every skill you've learned!"
difficulty: "beginner"
order_index: 8
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: true
starter_code: |
  # ================================
  # MY MAD LIBS GAME
  # By: [Your Name]
  # ================================

  print("🎭" * 20)
  print("   WELCOME TO MAD LIBS!")
  print("   Get ready for a silly story...")
  print("🎭" * 20)
  print("")

  # === COLLECT THE WORDS ===
  name      = input("Enter a person's name: ")
  animal    = input("Enter an animal: ")
  verb      = input("Enter an action word (verb): ")
  place     = input("Enter a place: ")
  adjective = input("Enter a describing word: ")
  number    = input("Enter a number: ")

  # === REVEAL THE STORY ===
  print("")
  print("=" * 30)
  print("🌟 YOUR STORY 🌟")
  print("=" * 30)
  print("")
  print(f"One {adjective} morning, {name} woke up to find a {animal}")
  print(f"sitting in their kitchen in {place}.")
  print(f"Without hesitating, they decided to {verb} it!")
  print(f"It took exactly {number} minutes. The end!")
  print("")
  print("😂" * 10)

  # 🎤 Want to build a Joke Machine instead?
  # See "Option B" in the lesson for the Joke Machine starter code!
class_activities: |
  ## 🎮 Class Activity: Recap + Final Project Intro!

  **Part 1: Skills Speed Round (5 min)**
  - Quick-fire questions — one per week
  - Build confidence: "You know ALL of this!"

  **Part 2: Skill-by-Skill Recap with Challenges (20 min)**
  - Walk through each of the 7 skills with code examples
  - Mini-challenges for each skill
  - Skills Checkpoint: one program using ALL 7 skills

  **Part 3: Kahoot Quiz (10 min)**
  - Teacher-led Kahoot quiz covering all Term 1 concepts

  **Part 4: Project Introduction + Choice (15 min)**
  - Teacher demos both projects — Mad Libs AND Joke Machine
  - Students choose and start designing on paper

  **Part 5: Wrap-Up (5 min)**
  - Homework expectations
  - Week 9 Showcase preview
take_home_assignment: |
  ## 📚 Homework: Build Your Final Project

  **Assignment:** Build your chosen project (Mad Libs OR Joke Machine) for the Week 9 Showcase!

  **Mad Libs Requirements:**
  1. Welcome screen with decorative borders
  2. At least 6 different word inputs with clear prompts
  3. Full story revealed using f-strings
  4. Every word appears in the story
  5. Your name in the program header comment
  6. Code runs without bugs!

  **Joke Machine Requirements:**
  1. Welcome screen with player's name
  2. At least 3 jokes with setup → pause → punchline
  3. Punchlines use `.upper()` for emphasis
  4. Personalised with f-strings (player name in jokes)
  5. Rating system using `int()` with a comedy score card
  6. Code runs without bugs!

  **Bonus (either project):**
  - Add extra content (more jokes or a second story)
  - Use `int()` for a calculation
  - Add ASCII art or creative decorations

  **Submit:** Share your Trinket link with your instructor. Be ready to present at the Week 9 Showcase!
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Both projects today separate STRUCTURE from CONTENT — the Mad Libs template stays the same but the words change, and the Joke Machine structure stays the same but different names and ratings go in. This is exactly how AI language models work! A model like ChatGPT learns the structure of language (grammar, story patterns) separately from specific words. When generating text, it fills in words based on context — just like your f-strings fill in the blanks. Your project is a tiny, human-powered version of how AI text generation works!
---

# Term 1, Week 8: Term 1 Recap and Final Project! 🎉

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 8 of 9

---

## 🎯 What We're Doing Today

Today has **two parts**:

1. **A victory lap** — we recap EVERY skill from Weeks 1–7 with challenges and a quiz
2. **Meet your final project** — YOU choose: build a **Mad Libs Game** OR a **Joke Machine**

The recap is the main event today. By the end, you'll prove to yourself that you know more Python than you think!

---

## 🤖 BrightByte's Pep Talk!

> _"Seven weeks. SEVEN! You went from 'What is Python?' to building programs that talk to people, crunch numbers, and create unique outputs every time. Today we're going to prove it. We'll speed through every skill, tackle some challenges, and then I'll show you TWO awesome projects you can build using everything you know. Ready for your victory lap? Let's go! 🎉"_

---

## 🏆 Part 1: Term 1 Skills Rally

You've built an incredible toolkit over 7 weeks. Let's revisit each one!

---

### Week 1: `print()` — Making Python Talk

The very first thing you ever learned. `print()` is how Python talks to the world.

```python
print("Hello, world!")
print("My name is BrightByte!")
print("Python is awesome!")
```

**Quick reminder:**
- Every `print()` outputs on a **new line**
- Text inside `print()` goes in **quotes** (single `'` or double `"`)
- You can print **anything** — words, numbers, emojis

#### Try It!

Write THREE `print()` statements about yourself — your name, your favourite food, and your favourite animal.

```python
print("My name is Alex.")
print("My favourite food is pizza.")
print("My favourite animal is a red panda.")
```

---

### Week 2: String `*` and `+` — Patterns and Joining

You learned that strings aren't just text — you can **multiply** and **add** them!

```python
print("⭐" * 10)           # Prints 10 stars
print("Ha" * 5)             # Prints HaHaHaHaHa
print("Hello" + " " + "World")  # Joins strings together
```

**Quick reminder:**
- `*` repeats a string: `"abc" * 3` gives `"abcabcabc"`
- `+` joins strings together: `"Hi" + "!" ` gives `"Hi!"`
- Great for making **borders** and **decorations**

#### Try It!

Create a decorative banner using string multiplication:

```python
print("🎉" * 15)
print("   TERM 1 RECAP!")
print("🎉" * 15)
```

---

### Week 3: Variables — Storing Data in Boxes

Variables let you **save** information and use it later.

```python
name = "BrightByte"
age = 10
food = "pizza"

print(name)     # Prints: BrightByte
print(age)      # Prints: 10
```

**Quick reminder:**
- Use `=` to **assign** a value: `name = "Alex"`
- Variable names should be **descriptive**: `player_name` not `x`
- You can **change** a variable: `score = 10` then later `score = 20`

#### Try It!

Create three variables and print them all:

```python
hero = "Captain Python"
power = "super coding"
level = 99

print(hero)
print(power)
print(level)
```

---

### Week 4: String Methods — `.upper()`, `len()`

You discovered that strings have **built-in superpowers** called methods.

```python
name = "brightbyte"
print(name.upper())     # BRIGHTBYTE
print(name.lower())     # brightbyte
print(name.title())     # Brightbyte
print(len(name))        # 10
```

**Quick reminder:**
- `.upper()` makes ALL CAPS
- `.lower()` makes all lowercase
- `.title()` Capitalises Each Word
- `len()` counts the characters (note: it's `len(name)` not `name.len()`)

#### Try It!

```python
city = "london"
print(city.upper())          # LONDON
print(city.title())          # London
print(len(city))             # 6
print("=" * len(city))       # ======  (border matches the word length!)
```

---

### Week 5: Comments & F-Strings — Clean Code

You learned to **explain your code** with comments and **embed variables** inside strings with f-strings.

```python
# This is a comment — Python ignores it
name = "Alex"
age = 11

# f-strings let you put variables RIGHT INSIDE text
print(f"Hello, {name}!")          # Hello, Alex!
print(f"{name} is {age} years old.")  # Alex is 11 years old.
```

**Quick reminder:**
- Comments start with `#` — they're notes for humans, not Python
- F-strings start with `f` before the quote: `f"text {variable}"`
- Variables go inside **curly braces** `{}`
- Without the `f`, you get `{name}` printed literally!

#### Try It!

```python
# My favourite things
colour = "blue"
number = 7
animal = "dolphin"

print(f"My favourite colour is {colour}.")
print(f"My lucky number is {number}.")
print(f"I love {animal}s!")
```

---

### Week 6: `input()` — Talking TO Python

The game-changer! `input()` lets the user TYPE information into your program.

```python
name = input("What is your name? ")
colour = input("What is your favourite colour? ")

print(f"Hi {name}! Great choice — {colour} is awesome!")
```

**Quick reminder:**
- `input()` **pauses** the program and waits for the user to type
- Whatever the user types is **stored** in a variable
- `input()` ALWAYS gives you a **string** (text) — even if the user types a number!
- Write **clear prompts** so the user knows what to type

#### Try It!

```python
food = input("What is your favourite food? ")
place = input("Where would you love to visit? ")

print(f"Imagine eating {food} in {place}!")
print(f"That would be amazing!")
```

---

### Week 7: `int()` and `float()` — Number Conversions

You learned that `input()` always returns a string — and how to **convert** it to a real number.

```python
age = int(input("How old are you? "))     # Converts to whole number
score = float(input("Enter your score: ")) # Converts to decimal

next_year = age + 1
double_score = score * 2

print(f"Next year you'll be {next_year}!")
print(f"Double score: {double_score}!")
```

**Quick reminder:**
- `int()` converts to a **whole number**: `int("12")` → `12`
- `float()` converts to a **decimal**: `float("3.5")` → `3.5`
- Without converting, you get a **TypeError** when you try to do maths
- The shortcut: `int(input("..."))` — wrap `int()` around `input()`

#### Try It!

```python
items = int(input("How many items do you have? "))
price = float(input("How much does each cost? "))

total = items * price
print(f"Your total is {total}!")
```

---

## 🧪 Skills Checkpoint — All 7 in One Program!

Here's the ultimate proof: ALL 7 skills in one short program. Can you spot each one?

```python
# Skills Checkpoint — all 7 skills in action!       # Week 5: comment
player = input("What is your name? ")                # Week 6: input()
age = int(input("How old are you? "))                # Week 7: int()
future_age = age + 10                                # Week 3: variable
print("=" * 30)                                      # Week 2: string *
print(f"Welcome, {player.upper()}!")                  # Week 5: f-string + Week 4: .upper()
print(f"In 10 years you'll be {future_age}!")        # Week 1: print()
```

**Sample output:**
```
What is your name? Alex
How old are you? 11
==============================
Welcome, ALEX!
In 10 years you'll be 21!
```

Seven lines, seven skills. You know all of this!

---

## 🎮 Part 2: Choose Your Final Project!

Now for the exciting part — you're going to build a **complete program** that uses everything you've learned. And YOU get to choose which one!

### The Two Options

| | 🎭 Mad Libs Game | 🎤 Joke Machine |
|---|---|---|
| **What is it?** | A word game that creates a unique silly story every time | A comedy show that tells jokes and rates how funny they are |
| **How it works** | Collect words → reveal a hilarious story | Tell jokes → reveal punchlines → rate the laughs |
| **Skills used** | `print()`, `*`, variables, f-strings, `input()` | `print()`, `*`, variables, `.upper()`, f-strings, `input()`, `int()` |
| **Best for** | "I love creative writing and silly stories!" | "I love telling jokes and making people laugh!" |
| **Difficulty** | Great starting point | Slightly more features |

**Can't decide?** Both are great! If you're still stuck after 1 minute, go with **Mad Libs** — you can always try the other one later.

---

### 🎭 Option A: Mad Libs Game

Mad Libs is a word game where a player fills in blanks WITHOUT seeing the story — then the filled-in story is revealed with hilarious results!

**Your game has three parts:**

```
Part 1: Welcome Screen      → print() + string *
Part 2: Collect the Words    → input() + variables
Part 3: Reveal the Story     → f-strings
```

**Starter Code:**

```python
# ================================
# MY MAD LIBS GAME
# By: [Your Name]
# ================================

print("🎭" * 20)
print("   WELCOME TO MAD LIBS!")
print("   Get ready for a silly story...")
print("🎭" * 20)
print("")

# === COLLECT THE WORDS ===
name      = input("Enter a person's name: ")
animal    = input("Enter an animal: ")
verb      = input("Enter an action word (verb): ")
place     = input("Enter a place: ")
adjective = input("Enter a describing word: ")
number    = input("Enter a number: ")

# === REVEAL THE STORY ===
print("")
print("=" * 30)
print("🌟 YOUR STORY 🌟")
print("=" * 30)
print("")
print(f"One {adjective} morning, {name} woke up to find a {animal}")
print(f"sitting in their kitchen in {place}.")
print(f"Without hesitating, they decided to {verb} it!")
print(f"It took exactly {number} minutes. The end!")
print("")
print("😂" * 10)
```

**Requirements Checklist:**

| # | Requirement | Check |
|---|-------------|-------|
| 1 | Welcome screen with decorative borders | ⬜ |
| 2 | At least 6 inputs with descriptive prompts | ⬜ |
| 3 | Story revealed using f-strings | ⬜ |
| 4 | Every word appears in the story | ⬜ |
| 5 | Themed emoji reaction at the end | ⬜ |
| 6 | Your name in the header comment | ⬜ |
| 7 | Code runs without bugs | ⬜ |

**Design Tips:**
- Choose a theme: Space 🚀, School 📚, Fantasy 🐉, Sports ⚽, Food 🍕, Animals 🐾
- Write your story on **paper first** with blanks: __NOUN__, __VERB__, __ADJECTIVE__
- Use **descriptive prompts**: `"Enter an action word (verb): "` not `"Enter word 3: "`

---

### 🎤 Option B: Joke Machine

The Joke Machine is a comedy show program that welcomes a player, tells jokes with dramatic punchline reveals, and rates the laughs!

**Your program has four parts:**

```
Part 1: Welcome Screen      → print() + string * + input() for name
Part 2: Tell the Jokes       → print() + input("Press Enter...") for timing
Part 3: Rate the Jokes        → int() + variables for scores
Part 4: Comedy Score Card     → f-strings + .upper() + calculations
```

**Starter Code:**

```python
# ================================
# MY JOKE MACHINE
# By: [Your Name]
# ================================

# === PART 1: WELCOME SCREEN ===
print("🎤" * 20)
print("   THE JOKE MACHINE!")
print("   Prepare to laugh...")
print("🎤" * 20)
print("")

player = input("What is your name, comedy fan? ")
print("")
print(f"Welcome to the show, {player}! Let's see if these jokes crack you up...")
print("")

# === PART 2: TELL THE JOKES ===

# Joke 1
print("=" * 30)
print(f"JOKE 1 — just for you, {player}!")
print("=" * 30)
print("Why do programmers prefer dark mode?")
input("(Press Enter for the punchline...)")
print("BECAUSE LIGHT ATTRACTS BUGS!")
print("")

# Joke 2
print("=" * 30)
print("JOKE 2")
print("=" * 30)
print(f"Hey {player}, what do you call a snake that is 3.14 metres long?")
input("(Press Enter for the punchline...)")
print("A PI-THON!")
print("")

# Joke 3
print("=" * 30)
print("JOKE 3")
print("=" * 30)
print("Why was the computer cold?")
input("(Press Enter for the punchline...)")
print("IT LEFT ITS WINDOWS OPEN!")
print("")

# === PART 3: RATE THE JOKES ===
print("~" * 30)
print(f"OK {player}, time to rate the jokes!")
print("~" * 30)
print("")

rating1 = int(input("Rate Joke 1 (1-10): "))
rating2 = int(input("Rate Joke 2 (1-10): "))
rating3 = int(input("Rate Joke 3 (1-10): "))

# === PART 4: COMEDY SCORE CARD ===
total_score = rating1 + rating2 + rating3
average = total_score // 3

print("")
print("*" * 30)
print("   COMEDY SCORE CARD")
print(f"   Comedian: {player.upper()}")
print("*" * 30)
print(f"Joke 1 rating: {'⭐' * rating1}")
print(f"Joke 2 rating: {'⭐' * rating2}")
print(f"Joke 3 rating: {'⭐' * rating3}")
print(f"Total score: {total_score} out of 30")
print(f"Average rating: {average}")
print("*" * 30)
print(f"Thanks for coming to the show, {player.upper()}!")
print("🎤" * 10)
```

**Requirements Checklist:**

| # | Requirement | Check |
|---|-------------|-------|
| 1 | Welcome screen with player's name | ⬜ |
| 2 | At least 3 jokes with setup → pause → punchline | ⬜ |
| 3 | Punchlines use `.upper()` for emphasis | ⬜ |
| 4 | Player name appears in jokes (f-strings) | ⬜ |
| 5 | Rating system using `int()` | ⬜ |
| 6 | Comedy score card with total and stars | ⬜ |
| 7 | Your name in the header comment | ⬜ |
| 8 | Code runs without bugs | ⬜ |

**Design Tips:**
- Write your jokes on **paper first** — setup on one line, punchline on the next
- Use `input("(Press Enter for the punchline...)")` for dramatic pauses
- Make punchlines LOUD with `.upper()`
- Use the player's name in at least 2 jokes with f-strings

---

## ⭐ Bonus Challenges (Both Projects)

**Mad Libs:** Use `int()` on your number for a calculation | Add a second story | Add ASCII art

**Joke Machine:** Add more jokes (aim for 5!) | Create themed jokes | Add an encore bonus joke

---

## 🐛 Common Bugs to Watch For

| Bug | What Happens | Fix | Which Project? |
|-----|-------------|-----|----------------|
| Missing `f` before string | `{name}` prints literally | `f"Hello {name}"` not `"Hello {name}"` | Both |
| Variable name typo | `NameError` | Copy the exact variable name from where you created it | Both |
| Missing `{` or `}` in f-string | Variable doesn't appear | Check both opening and closing braces | Both |
| Forgot `int()` on rating | Can't do maths with rating | `rating = int(input(...))` | Joke Machine |
| Used `+` to join string and int | `TypeError` | Use f-strings instead of `+` | Both |
| Unused variable | Collected a word but not in story | Add it to a line in your story | Mad Libs |

---

## 🏠 Homework: Build Your Final Project

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### If You Chose Mad Libs

1. ✅ Welcome screen with decorative borders and a clear theme
2. ✅ At least 6 different word inputs with clear, descriptive prompts
3. ✅ Full story revealed using f-strings
4. ✅ Every word appears in the story (no unused variables!)
5. ✅ Your name in the program header comment
6. ✅ NO BUGS — code runs perfectly!

### If You Chose Joke Machine

1. ✅ Welcome screen with player's name
2. ✅ At least 3 jokes with setup → pause → punchline
3. ✅ Punchlines in `.upper()` for emphasis
4. ✅ Player name in at least 2 jokes (f-strings)
5. ✅ Rating system using `int()` with a comedy score card
6. ✅ Your name in the program header comment
7. ✅ NO BUGS — code runs perfectly!

### Grading Rubric (Same for Both)

| Criteria | Points |
|----------|--------|
| Welcome screen with theme/personality | ⭐ |
| Core content (6 inputs OR 3 jokes) | ⭐⭐ |
| Correct use of f-strings throughout | ⭐⭐ |
| Creative and fun output | ⭐⭐ |
| Code runs without errors | ⭐⭐ |
| **Total** | **9 points** |

### Bonus Points

- +1 for using `int()` in a calculation (Mad Libs) or 4+ jokes (Joke Machine)
- +1 for extra creative content (second story or themed joke set)
- +1 for ASCII art or creative decorations

### How to Submit

1. Complete your project on Trinket
2. Test it at least 2 times with different inputs
3. Save your work
4. Click **Share** and copy the link
5. Submit the link to your instructor
6. **Be ready to present at the Week 9 Showcase!**

---

## 🌟 Next Week: The Showcase!

**Week 9 is the Term 1 Showcase!** 🎉

You'll present your project to the class:

- Run your **Mad Libs** or **Joke Machine** LIVE
- For Mad Libs: a classmate enters the words, the class shouts suggestions!
- For Joke Machine: the class watches the jokes and rates them together!
- Share one thing you're proud of

**Come prepared with:**

- Your finished, working project
- A 1-sentence intro: "My project is a [Mad Libs about... / Joke Machine that...]"
- A classmate ready to be your player!

---

## 🎉 What You Accomplished Today

- ✅ Reviewed ALL 7 Term 1 skills with challenges
- ✅ Proved you can use every skill together in one program
- ✅ Chose YOUR final project — Mad Libs or Joke Machine
- ✅ Started planning your project

> _BrightByte says: "Seven weeks of skills, one awesome project. Whether you're revealing a silly story or delivering punchlines, you're doing the same thing: writing a program that creates a unique experience every time someone runs it. That's not just code — that's a CREATION. Build it for homework, and next week we celebrate. I am SO proud of you! 🎉🎤🎭"_

---

_KidsLearnAI - Empowering the Next Generation with AI Education_
*www.kidslearnai.ca*
_Instagram: @kids_learn_ai_

---

_Remember: The best projects come from having fun with them. Pick silly words, write ridiculous jokes, make yourself laugh — that's the whole point!_
