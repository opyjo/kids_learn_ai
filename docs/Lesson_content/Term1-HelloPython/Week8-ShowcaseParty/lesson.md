---
title: "Let's Build a Mad Libs Game!"
description: "Design and build your own Mad Libs story generator — the perfect Term 1 project that combines input(), variables, and f-strings into a hilarious, replayable game!"
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
class_activities: |
  ## 🎮 Class Activity: Mad Libs Build Session!

  **Part 1: Teacher Demo (5 min)**
  - Teacher runs a pre-built Mad Libs — class shouts the words
  - Everyone laughs at the silly result
  - "This is what YOU are building today!"

  **Part 2: Design Phase (10 min)**
  Pick a theme and sketch your story on paper:
  - Themes: Space 🚀, School 📚, Fantasy 🐉, Sports ⚽, Food 🍕
  - Write out your story with BLANKS where the input words will go
  - Label each blank: __NOUN__, __VERB__, __ADJECTIVE__, __PLACE__

  **Part 3: Build Time (30 min)**
  Code your Mad Libs game:
  1. Welcome screen (print + string multiplication)
  2. Collect words (at least 6 input() calls with clear prompts)
  3. Reveal the story (f-strings)
  Test it with a classmate — get them to enter the silliest words!

  **Part 4: Quick Demo (5 min)**
  Two or three students share their in-progress game.
  Class helps debug any issues!
take_home_assignment: |
  ## 📚 Homework: Complete Your Mad Libs Game

  **Assignment:** Finish and polish your Mad Libs game for the Week 9 Game Showcase!

  **Requirements:**
  1. At least 6 different word inputs (noun, verb, adjective, place, name, number...)
  2. A proper welcome screen with decorative borders
  3. The full story revealed cleanly using f-strings
  4. Every word appears in the story (no unused variables!)
  5. Your name in the program header comment
  6. Code runs without bugs!

  **Bonus:**
  - Add a second story (run the game twice with different prompts)
  - Use int() on your number input and include it in a calculation
  - Add ASCII art or creative decorations to your welcome screen
  - Create a "silliness rating" using string multiplication with your number

  **Submit:** Share your Trinket link with your instructor. Be ready to present at the Week 9 Game Showcase!
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Mad Libs works by separating STRUCTURE from CONTENT — the story template stays the same, but the words inside change every time. This is exactly how AI language models work! A model like ChatGPT learns the structure of language (grammar, story patterns) separately from specific words. When generating text, it fills in words based on context — just like your f-strings fill in the blanks. Your Mad Libs game is a tiny, human-powered version of how AI text generation works!
---

# Term 1, Week 8: Let's Build a Mad Libs Game! 🎭

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 8 of 9

---

## 🎯 What We're Building

Today you start building your **first complete Python game**: a **Mad Libs Adventure**!

Mad Libs is the perfect game for right now because it uses EVERYTHING you've learned in Term 1:

- ✅ `print()` for the welcome screen and story reveal
- ✅ String multiplication for decorative borders
- ✅ `input()` to collect hilarious words from the player
- ✅ Variables to store each word
- ✅ f-strings to weave everything into a funny story

By the end of today, you'll have a working Mad Libs game that produces a unique, hilarious story every time someone plays it!

---

## 🤖 BrightByte's Game Design Pep Talk!

> _"You've spent 7 weeks building your toolkit. Today you use it all to build a GAME. Here's the secret about Mad Libs: every run is completely unique. Your friends will play it again and again to get different silly stories. That's what makes a game addictive! The funnier the words your players choose, the funnier the story. Ready to build something genuinely fun? Let's go! 🎭"_

---

## 🎮 What IS Mad Libs?

Mad Libs is a word game where:

1. A story has **blank spaces** where words are missing
2. A player gets asked to fill in the blanks WITHOUT seeing the story first
3. The filled-in story is **revealed** — usually with hilarious results!

### Example Story (Blanks Version)

```
One ________(ADJECTIVE) morning, ________(NAME) woke up to find a ________(ANIMAL)
sitting in their kitchen in ________(PLACE).
Without hesitating, they decided to ________(VERB) it!
```

### Example Story (Filled In)

```
One sparkly morning, BrightByte woke up to find a penguin
sitting in their kitchen in the supermarket.
Without hesitating, they decided to moonwalk it!
```

The magic? **The funnier the words, the funnier the story!**

> _BrightByte says: "The best Mad Libs happen when the player doesn't know what the story is about BEFORE they choose their words. Keep the story hidden — reveal it all at once for maximum impact!"_

---

## 📋 Game Design: Plan Before You Code

Before you write ANY code, you need a plan. Real game developers design first!

### Step 1: Choose Your Theme

Pick ONE theme for your story:

| Theme | Story Idea |
|-------|-----------|
| 🚀 **Space** | Astronaut discovers something weird on a new planet |
| 📚 **School** | Student's wild first day at a new school |
| 🐉 **Fantasy** | Hero on a quest to find a magical object |
| ⚽ **Sports** | The world's strangest sports competition |
| 🍕 **Food** | A restaurant that goes completely wrong |
| 🐾 **Animals** | Zoo animals plan a great escape |

### Step 2: Write Your Story Template

On **paper**, write a short story (4–6 sentences) with BLANKS. Label each blank:

```
The ___ADJECTIVE___ explorer, ___NAME___, arrived at ___PLACE___.
They were carrying a ___NOUN___ and looking for a ___ADJECTIVE2___ ___NOUN2___.
"I must ___VERB___ this before ___NUMBER___ minutes pass!" they cried.
```

### Step 3: List Your Word Types

The most common word types in Mad Libs:

| Word Type | What It Is | Examples |
|-----------|-----------|---------|
| **Noun** | A person, place, or thing | cat, pizza, cloud, spaceship |
| **Verb** | An action word | jump, sneeze, calculate, explode |
| **Adjective** | A describing word | sparkly, enormous, confused, purple |
| **Place** | A location | the moon, a library, a sock drawer |
| **Name** | A person's name | BrightByte, Alex, Captain Snuggles |
| **Number** | Any number | 7, 42, 9000 |

---

## 🏗️ Building Your Game: The Three Parts

Every Mad Libs game has three parts. Let's build them one at a time.

---

### Part 1: The Welcome Screen

Create an exciting intro that gets the player ready:

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
```

**Customise your welcome!** Change the theme, the emojis, the title. Make it YOURS.

```python
# Space theme example:
print("🚀" * 20)
print("   SPACE STATION MAD LIBS!")
print("   Houston, we have a silly story...")
print("🚀" * 20)
print("")
```

---

### Part 2: Collecting the Words

Ask the player for each word type. **Use descriptive prompts** — tell them WHAT TYPE of word to enter, not just "word 1", "word 2":

```python
# === COLLECT THE WORDS ===
name      = input("Enter a person's name: ")
animal    = input("Enter an animal: ")
verb      = input("Enter an action word (verb): ")
place     = input("Enter a place: ")
adjective = input("Enter a describing word: ")
number    = input("Enter a number: ")
```

**Good prompts vs. bad prompts:**

| ❌ Bad | ✅ Good |
|--------|---------|
| `input("Enter word 1: ")` | `input("Enter a noun (a thing): ")` |
| `input("Type something: ")` | `input("Enter an action word (verb): ")` |
| `input("Word: ")` | `input("Enter a describing word (adjective): ")` |

**Why does this matter?** Better prompts guide players toward funnier, more varied word choices — which makes the story much better!

---

### Part 3: Revealing the Story

Now comes the big moment! Build your story using f-strings. This is where all those variables finally get used:

```python
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

**Sample output when played:**

```
Enter a person's name: Grandma Dorothy
Enter an animal: crab
Enter an action word (verb): skateboard
Enter a place: a swimming pool
Enter a describing word: extremely confused
Enter a number: 7

==============================
🌟 YOUR STORY 🌟
==============================

One extremely confused morning, Grandma Dorothy woke up to find a crab
sitting in their kitchen in a swimming pool.
Without hesitating, they decided to skateboard it!
It took exactly 7 minutes. The end!

😂😂😂😂😂😂😂😂😂😂
```

---

## 📄 Complete Starter Code

Here's the full template to build on. Replace the story and theme with YOUR version!

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

---

## ✅ Game Requirements Checklist

Your Mad Libs game MUST have:

| # | Requirement | Description | Check |
|---|-------------|-------------|-------|
| 1 | Welcome Screen | Decorative intro with title and theme | ⬜ |
| 2 | At Least 6 Inputs | Ask for 6 different word types | ⬜ |
| 3 | Descriptive Prompts | Tell player what TYPE of word to enter | ⬜ |
| 4 | Story Reveal Section | Clear "YOUR STORY" header | ⬜ |
| 5 | F-strings in Story | Use f-strings to insert words | ⬜ |
| 6 | All 6 Words Used | Every input appears in the story | ⬜ |
| 7 | Emoji Reaction | Fun ending reaction | ⬜ |
| 8 | Bug-Free | Runs without errors! | ⬜ |

---

## ⭐ Bonus Challenges

### Bonus 1: Use a Number in a Calculation

Instead of just printing the number directly, calculate something with it using what you learned in Lesson 7!

```python
number = int(input("Enter a number of minutes: "))   # Note: int()!
hours  = number // 60
mins   = number % 60

print(f"It took {number} minutes — that's {hours} hours and {mins} minutes!")
```

### Bonus 2: Add a Second Story

Ask for more words and reveal a second, completely different story!

```python
# After your first story...
print("")
print("🎭 Ready for a SECOND story? 🎭")
print("")
# ... ask for new inputs and print a different story
```

### Bonus 3: Create a Silliness Rating

Print a row of emojis based on the number the user entered:

```python
number = int(input("Enter a silliness level (1-10): "))
print("Silliness level: " + "🤣" * number)
```

### Bonus 4: Add ASCII Art

Put a themed ASCII picture in your welcome screen:

```python
# Space theme example:
print("      *    .  *")
print("   .  *  . * .")
print("  * .  🚀   . *")
print("    .  *  .   *")
```

---

## 🐛 Common Bugs to Watch For

| Bug | What Happens | Fix |
|-----|-------------|-----|
| Variable name typo in story | `NameError` | Copy the exact variable name |
| Missing `f` before string | `{name}` prints literally | `f"Hello {name}"` not `"Hello {name}"` |
| Missing `{` or `}` in f-string | Variable doesn't appear | Check both opening and closing braces |
| Unused variable | Variable collected but not in story | Add it to a line in the story |
| Used `+` with int variable | `TypeError` | Use f-string instead |

---

## 🏠 Homework: Complete Your Mad Libs Game

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### Requirements

Your finished Mad Libs game must have:

1. ✅ **Welcome screen** with decorative borders and a clear theme
2. ✅ **At least 6 different word inputs** with clear, descriptive prompts
3. ✅ **Full story revealed** using f-strings
4. ✅ **Every word appears** in the story (no unused variables!)
5. ✅ **Your name** in the program header comment
6. ✅ **NO BUGS** — code runs perfectly!

### Grading Rubric

| Criteria | Points |
|----------|--------|
| Welcome screen with theme | ⭐ |
| At least 6 inputs with good prompts | ⭐⭐ |
| Story uses all words via f-strings | ⭐⭐ |
| Story is funny and makes sense | ⭐⭐ |
| Code runs without errors | ⭐⭐ |
| **Total** | **9 points** |

### Bonus Points

- +1 for using `int()` in the story
- +1 for a second story
- +1 for ASCII art or creative decorations

### How to Submit

1. Complete your Mad Libs game on Trinket
2. Test it with at least 2 different sets of silly words
3. Save your work
4. Click **Share** and copy the link
5. Submit the link to your instructor
6. **Be ready to present at the Week 9 Game Showcase!**

---

## 🌟 Next Week: Game Showcase!

**Week 9 is the Term 1 Game Showcase!** 🎉

You'll present your Mad Libs game to the class:

- Run it LIVE with a classmate entering the words
- Let the class call out suggestions for the silliest words!
- Share one thing you're proud of

**Come prepared with:**

- Your finished, working Mad Libs game
- A 1-sentence intro: "My game is a [theme] Mad Libs about..."
- A classmate ready to be your player!

---

## 🎉 You're a Game Builder!

**What you accomplished today:**

- ✅ Planned a game BEFORE coding it
- ✅ Used `input()` to make a game interactive
- ✅ Built a 3-part program structure: welcome → collect → reveal
- ✅ Combined ALL Term 1 skills into one working program
- ✅ Created something that generates a unique, funny output every run

> _BrightByte says: "Here's the thing about your Mad Libs game: it's genuinely different every time someone plays it. That's not just a program — that's a GAME. Real games produce unique experiences for every player, and you just built one! Finish it for homework, and next week we celebrate together. I can't wait to see what your classmates type in! 🎭😂"_

---

_KidsLearnAI - Empowering the Next Generation with AI Education_
*www.kidslearnai.ca*
_Instagram: @kids_learn_ai_

---

_Remember: The best Mad Libs stories come from the most unexpected word combinations. Encourage players to think of the WEIRDEST possible words — that's what makes it funny every time!_
