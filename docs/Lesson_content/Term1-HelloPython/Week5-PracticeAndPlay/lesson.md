---
title: "Practice & Play!"
description: "A fun practice session using print(), variables, and strings to create cool programs - review and reinforce all concepts from Weeks 1-4!"
difficulty: "beginner"
order_index: 5
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: true
starter_code: |
  # Practice & Play!
  # Use everything you've learned from Weeks 1-4!

  # Challenge: All About Me
  name = "Your Name"
  age = 10
  favorite_color = "blue"
  favorite_food = "pizza"
  dream_job = "game designer"

  print("=" * 30)
  print("     ALL ABOUT ME")
  print("=" * 30)
  print("")
  print("Name:", name.title())
  print("Age:", age)
  print("Favorite Color:", favorite_color)
  print("Favorite Food:", favorite_food)
  print("Dream Job:", dream_job)
  print("")
  print("Name has", len(name), "letters!")
  print("=" * 30)

  # Now try the other challenges in the lesson!
class_activities: |
  ## 🎮 Class Activity: Challenge Stations!

  Rotate through these coding stations (8 minutes each):

  **Station 1: Profile Creator**
  - Create an "All About Me" profile with 5+ variables
  - Use decorative borders

  **Station 2: Silly Story Builder**
  - Create a Mad Libs story with at least 4 variables
  - Use at least one string method

  **Station 3: ASCII Art Studio**
  - Create original ASCII art (animal, object, or scene)
  - Make it at least 5 lines tall

  **Station 4: Greeting Card Factory**
  - Make a birthday or holiday card
  - Personalize it with variables

  Share your favorite creation with a partner at the end!
take_home_assignment: |
  ## 📚 Homework: Choose Your Challenge

  **Assignment:** Pick ONE of these challenges to complete!

  **Option 1: Story Builder**
  - Create a story with at least 10 print statements
  - Use at least 5 variables
  - Include a decorated title and "The End"

  **Option 2: ASCII Art Gallery**
  - Create 3 different ASCII art pictures
  - Each should be at least 5 lines
  - Add titles above each artwork

  **Option 3: Word Transformer**
  - Choose 5 different words
  - Transform each word using ALL methods (.upper(), .lower(), .title(), .capitalize())
  - Show the length of each word
  - Present in a formatted display

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Real AI programmers practice every day - that's how ChatGPT got so smart! The more you practice coding, the better you get.

  Today you're training your brain just like programmers train AI!
---

# Term 1, Week 5: Practice & Play! 🎮

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 1 of 8 | **Week:** 5 of 8

---

## 🎯 What We're Doing Today

Today is all about **PRACTICE** and **FUN**! No new concepts—just using everything you've learned to create cool programs!

### Your Python Toolkit So Far:

| Week   | What You Learned          | Symbol/Code                     |
| ------ | ------------------------- | ------------------------------- |
| Week 1 | Print statements          | `print("Hello!")`               |
| Week 2 | Multiple prints, patterns | `print("*" * 20)`               |
| Week 3 | Variables                 | `name = "Alex"`                 |
| Week 4 | String methods            | `.upper()`, `.lower()`, `len()` |

Today, you'll combine ALL of these skills to create awesome programs! 🚀

---

## 🤖 BrightByte's Pep Talk!

> _"Hey superstar! 🌟 You've learned SO much in the past four weeks. You know how to make Python talk, create patterns, remember things with variables, and transform text with superpowers! Today is YOUR day to play and experiment. There's no wrong way to code today—just have fun and see what you can create! I can't wait to see what you make!"_

---

## 📋 Quick Reference Card

Before we start the challenges, here's your cheat sheet!

### Print Statements

```python
print("Hello!")                    # Basic print
print("Hi", name)                  # Print with variable (comma)
print("Hi " + name)                # Print with variable (concatenation)
print("")                          # Empty line
print("=" * 30)                    # Pattern line
```

### Variables

```python
name = "Alex"                      # String (text)
age = 10                           # Integer (number)
full_name = first + " " + last     # Concatenation
```

### String Methods

```python
text.upper()                       # UPPERCASE
text.lower()                       # lowercase
text.capitalize()                  # First letter capital
text.title()                       # Each Word Capital
len(text)                          # Count characters
str(number)                        # Number to string
```

### Patterns

```python
print("*" * 20)                    # ********************
print("=-" * 10)                   # =-=-=-=-=-=-=-=-=-=
print("🌟" * 5)                    # 🌟🌟🌟🌟🌟
```

---

## 🏆 Challenge 1: All About Me Profile

Create a program that introduces YOU to the world!

### Starter Code

```python
# ================================
# ALL ABOUT ME PROFILE
# ================================

# My Information (change these!)
name = "Your Name Here"
age = 10
grade = 5
city = "Your City"
favorite_color = "blue"
favorite_food = "pizza"
favorite_animal = "dog"
favorite_game = "Minecraft"
dream_job = "game designer"
fun_fact = "I can juggle!"

# Display the profile
print("=" * 40)
print("         🌟 ALL ABOUT ME 🌟")
print("=" * 40)
print("")
print("👤 Name:", name)
print("🎂 Age:", age, "years old")
print("📚 Grade:", grade)
print("🏠 City:", city)
print("")
print("❤️ FAVORITES:")
print("   Color:", favorite_color)
print("   Food:", favorite_food)
print("   Animal:", favorite_animal)
print("   Game:", favorite_game)
print("")
print("🚀 Dream Job:", dream_job)
print("✨ Fun Fact:", fun_fact)
print("")
print("My name has", len(name), "characters!")
print("=" * 40)
```

### Your Challenges:

1. **Basic:** Fill in all the variables with YOUR information
2. **Intermediate:** Add 3 MORE facts about yourself
3. **Advanced:** Make your name display in TITLE CASE using `.title()`
4. **Expert:** Create a second profile for your best friend or a fictional character

---

## 🏆 Challenge 2: Silly Story Builder

Create a Mad Libs-style story that's as silly as possible!

### Starter Code

```python
# ================================
# SILLY STORY GENERATOR
# ================================

# Your word choices (change these to make it silly!)
character = "robot"
adjective1 = "sparkly"
adjective2 = "enormous"
action = "dancing"
place = "the moon"
object1 = "pizza"
object2 = "rubber duck"
sound = "KABOOM"
name = "captain underpants"

# The Story
print("🌟" * 20)
print("      THE SILLY ADVENTURE")
print("🌟" * 20)
print("")

print("Once upon a time, a", adjective1, character)
print("was", action, "on", place + ".")
print("")

print("Suddenly, a", adjective2, object1)
print("fell from the sky!")
print(sound.upper() + "!!!")
print("")

print("'" + "Oh no!" + "'", "shouted", name.title() + ".")
print("'" + "Quick, grab the", object2 + "!'")
print("")

print("And they all lived", adjective1 + "ly ever after!")
print("")

print("THE END".center(40))
print("🌟" * 20)
```

### Your Challenges:

1. **Basic:** Change all the variables to create YOUR silly story
2. **Intermediate:** Add 2 more sentences to the story
3. **Advanced:** Use `.upper()` to make someone SHOUT in the story
4. **Expert:** Create a completely different story with new variables

### Word Ideas

| Type      | Silly Examples                                       |
| --------- | ---------------------------------------------------- |
| Character | ninja, unicorn, zombie, alien, grandma               |
| Adjective | fluffy, exploding, invisible, backwards, gigantic    |
| Action    | breakdancing, sneezing, teleporting, yodeling        |
| Place     | a volcano, the bathroom, outer space, a bounce house |
| Object    | a taco, a rubber chicken, a toilet, a disco ball     |
| Sound     | SPLAT, WHOOSH, BOING, CRASH                          |

---

## 🏆 Challenge 3: ASCII Art Studio

Create pictures using only text characters!

### Example 1: Cat

```python
print("  /\\_/\\  ")
print(" ( o.o ) ")
print("  > ^ <  ")
print(" /|   |\\ ")
print("(_|   |_)")
```

**Output:**

```
  /\_/\
 ( o.o )
  > ^ <
 /|   |\
(_|   |_)
```

### Example 2: House

```python
print("      /\\      ")
print("     /  \\     ")
print("    /    \\    ")
print("   /______\\   ")
print("   |  __  |   ")
print("   | |  | |   ")
print("   | |__| |   ")
print("   |______|   ")
```

### Example 3: Rocket

```python
print("     /\\     ")
print("    /  \\    ")
print("   /    \\   ")
print("  |      |  ")
print("  |      |  ")
print("  | NASA |  ")
print("  |      |  ")
print(" /|      |\\ ")
print("/ |______| \\")
print("  |  ||  |  ")
print(" /   ||   \\ ")
print("/    ||    \\")
```

### Example 4: Robot (BrightByte!)

```python
print("   _______   ")
print("  |       |  ")
print("  | O   O |  ")
print("  |   ^   |  ")
print("  |  ___  |  ")
print("  |_______|  ")
print("     |||     ")
print("  ___|||___  ")
print(" |         | ")
print(" |  [===]  | ")
print(" |_________| ")
print("   ||   ||   ")
print("   ||   ||   ")
print("  /__\\ /__\\ ")
```

### Example 5: Heart (Using Variables!)

```python
symbol = "❤️"
print("  " + symbol + " " + symbol + "  ")
print(" " + symbol + symbol + symbol + symbol + symbol + " ")
print("  " + symbol + symbol + symbol + "  ")
print("   " + symbol + "   ")
```

### Your Challenges:

1. **Basic:** Copy and run one of the examples above
2. **Intermediate:** Modify an example (change a face expression, add a door to the house)
3. **Advanced:** Create your own ASCII art from scratch
4. **Expert:** Create ASCII art that uses a VARIABLE (like the heart example)

### ASCII Art Ideas:

- A tree 🌲
- A fish 🐟
- Your initials
- A car 🚗
- A crown 👑
- A video game character
- An emoji made of text
- A pizza slice 🍕

### Helpful Characters:

```
Lines: | - _ / \
Corners: +
Curves: ( ) { } [ ]
Eyes: O o @ * .
Other: ^ v < > # = ~ `
```

---

## 🏆 Challenge 4: Word Transformer Lab

Take words and transform them in every way possible!

### Starter Code

```python
# ================================
# WORD TRANSFORMER LAB
# ================================

# Choose your word
word = "python"

# The transformations
print("=" * 35)
print("  🔮 WORD TRANSFORMER LAB 🔮")
print("=" * 35)
print("")
print("Original Word:", word)
print("-" * 35)
print("")
print("📢 SHOUTING:", word.upper())
print("🤫 Whispering:", word.lower())
print("📝 Capitalized:", word.capitalize())
print("📰 Title Case:", word.title())
print("")
print("📏 Length:", len(word), "characters")
print("🔁 Repeated:", word * 3)
print("🎉 Excited:", word.upper() + "!!!")
print("")
print("=" * 35)
```

### Multi-Word Transformer

```python
# ================================
# MULTI-WORD TRANSFORMER
# ================================

# A list of words to transform
word1 = "hello"
word2 = "WORLD"
word3 = "pYtHoN"
word4 = "coding"
word5 = "FUN"

print("=" * 45)
print("       📊 TRANSFORMATION REPORT 📊")
print("=" * 45)
print("")
print("WORD".ljust(12), "UPPER".ljust(12), "LOWER".ljust(12), "LEN")
print("-" * 45)
print(word1.ljust(12), word1.upper().ljust(12), word1.lower().ljust(12), len(word1))
print(word2.ljust(12), word2.upper().ljust(12), word2.lower().ljust(12), len(word2))
print(word3.ljust(12), word3.upper().ljust(12), word3.lower().ljust(12), len(word3))
print(word4.ljust(12), word4.upper().ljust(12), word4.lower().ljust(12), len(word4))
print(word5.ljust(12), word5.upper().ljust(12), word5.lower().ljust(12), len(word5))
print("-" * 45)
```

### Your Challenges:

1. **Basic:** Transform your own name using all the methods
2. **Intermediate:** Transform 5 different words
3. **Advanced:** Find the LONGEST word among your choices
4. **Expert:** Create a "word battle" comparing two words

---

## 🏆 Challenge 5: Greeting Card Factory

Create beautiful cards for any occasion!

### Birthday Card

```python
# ================================
# BIRTHDAY CARD GENERATOR
# ================================

# Who is the card for?
recipient = "Alex"
their_age = 11
from_name = "Your Name"

# The card
print("")
print("🎈" * 15)
print("")
print("   🎂 HAPPY BIRTHDAY! 🎂")
print("")
print("   Dear " + recipient.title() + ",")
print("")
print("   Wishing you the most")
print("   AMAZING birthday ever!")
print("")
print("   You are now", their_age, "years old!")
print("   That's", their_age, "years of being")
print("   absolutely AWESOME!")
print("")
print("   🎁 May all your wishes 🎁")
print("   🌟 come true today! 🌟")
print("")
print("   With love,")
print("   " + from_name)
print("")
print("🎈" * 15)
print("")
```

### Thank You Card

```python
# ================================
# THANK YOU CARD
# ================================

recipient = "Teacher"
reason = "helping me learn Python"
from_name = "Alex"

print("")
print("💝" * 12)
print("")
print("   THANK YOU!")
print("")
print("   Dear " + recipient.title() + ",")
print("")
print("   Thank you so much for")
print("   " + reason + "!")
print("")
print("   You are the BEST!")
print("")
print("   Gratefully,")
print("   " + from_name)
print("")
print("💝" * 12)
```

### Holiday Card Template

```python
# ================================
# HOLIDAY CARD
# ================================

holiday = "Winter Holidays"
recipient = "Friend"
wish = "joy and happiness"
from_name = "Your Name"

print("")
print("❄️" * 15)
print("")
print("   🎄 Happy " + holiday + "! 🎄")
print("")
print("   Dear " + recipient.title() + ",")
print("")
print("   Wishing you lots of")
print("   " + wish + "!")
print("")
print("   May your days be merry")
print("   and bright!")
print("")
print("   Warm wishes,")
print("   " + from_name)
print("")
print("❄️" * 15)
```

### Your Challenges:

1. **Basic:** Create a birthday card for someone you know
2. **Intermediate:** Create a thank you card with a specific reason
3. **Advanced:** Design your own card for a different occasion (get well, congratulations, etc.)
4. **Expert:** Create a card that uses `.upper()` for emphasis

---

## 🏆 Challenge 6: Quiz Show Host

Create the intro for your own game show!

### Starter Code

```python
# ================================
# QUIZ SHOW INTRO GENERATOR
# ================================

# Show details
show_name = "Super Brain Challenge"
host_name = "your name"
prize = "a million points"
category = "Python Programming"

# The intro
print("")
print("🌟" * 20)
print("")
print("Ladies and gentlemen...")
print("")
print("Welcome to...")
print("")
print("   " + show_name.upper() + "!!!")
print("")
print("🎤 I'm your host, " + host_name.title() + "!")
print("")
print("Tonight's category is:")
print("   ✨ " + category.upper() + " ✨")
print("")
print("And the grand prize is...")
print("   🏆 " + prize.upper() + "! 🏆")
print("")
print("Are YOU ready to play?")
print("")
print("Let's go!")
print("")
print("🌟" * 20)
```

### Your Challenges:

1. **Basic:** Create your own quiz show with a unique name
2. **Intermediate:** Add an introduction of the contestants
3. **Advanced:** Add multiple rounds or categories
4. **Expert:** Create the full script including questions and answers

---

## ⛳ Mini Code Golf

Code Golf is a game where you try to solve problems using the **FEWEST lines of code possible**!

### Problem 1: Print "Python" 5 times

**Challenge:** Print the word "Python" five times, each on its own line.

**Long way (5 lines):**

```python
print("Python")
print("Python")
print("Python")
print("Python")
print("Python")
```

**Can you do it in fewer lines?**

<details>
<summary>Click for hint!</summary>

Think about using a loop... or string multiplication with a trick!

```python
print(("Python\n") * 5)
```

Or even simpler if each doesn't NEED its own line!

</details>

### Problem 2: Line of 50 Dashes

**Challenge:** Print a line of exactly 50 dashes.

**Hard way:**

```python
print("--------------------------------------------------")
```

**Easy way (1 line):**

```python
print("-" * 50)
```

### Problem 3: Name in Uppercase

**Challenge:** Store your name in a variable and print it in UPPERCASE.

**Solution (2 lines):**

```python
name = "alex"
print(name.upper())
```

### Problem 4: Create a Box

**Challenge:** Print a box that looks like this:

```
+--------+
|  HI!   |
+--------+
```

**Can you do it in 3 lines?**

```python
print("+--------+")
print("|  HI!   |")
print("+--------+")
```

### Problem 5: The Name Badge

**Challenge:** Print a name badge for "Alex Smith" with borders.

**Try to make it look nice!**

---

## 🤔 Reflection Time

Take a moment to think about your Python journey so far!

### Questions to Consider:

1. **What was the EASIEST thing you learned in Weeks 1-4?**

   - Was it print()? Variables? String methods?

2. **What was the HARDEST thing to understand?**

   - Don't worry—we can review it!

3. **What's your FAVORITE thing to create with Python?**

   - Stories? Art? Cards? Games?

4. **What do you want to learn MORE about?**

   - We have more exciting lessons coming!

5. **What cool project would you like to make?**
   - Dream big! We'll help you get there!

### My Python Journey So Far:

```python
# Fill this in!
favorite_thing_learned = "???"
hardest_thing = "???"
coolest_project = "???"
next_goal = "???"

print("My Python Journey")
print("=" * 30)
print("Favorite:", favorite_thing_learned)
print("Hardest:", hardest_thing)
print("Coolest project:", coolest_project)
print("My next goal:", next_goal)
```

---

## 🏆 Bonus Challenges (If You Finish Early!)

### Bonus 1: Emoji Art

Create a picture using ONLY emojis!

```python
print("    🌙        ")
print(" ⭐    ⭐    ⭐ ")
print("      🏠      ")
print("  🌲  🚪  🌲  ")
print("🌸🌸🌸🌸🌸🌸🌸")
```

### Bonus 2: Secret Message

Create a program that reveals a "secret message" using variables:

```python
word1 = "Python"
word2 = "is"
word3 = "awesome"
word4 = "!"

# Regular message
print(word1, word2, word3 + word4)

# SECRET version (first letter of each word)
secret = word1[0] + word2[0] + word3[0]
print("Secret code:", secret)
```

### Bonus 3: The Name Game

Create a program that plays with your name:

```python
name = "alexander"

print("Name Game for:", name.title())
print("-" * 30)
print("Spelled out:", end=" ")
for letter in name:
    print(letter.upper(), end="-")
print("")
print("Length:", len(name))
print("First letter:", name[0].upper())
print("Last letter:", name[-1].upper())
print("Shouted:", name.upper() + "!!!")
```

---

## 📝 Today's Accomplishments

Check off what you completed today!

- [ ] Challenge 1: All About Me Profile
- [ ] Challenge 2: Silly Story Builder
- [ ] Challenge 3: ASCII Art Studio
- [ ] Challenge 4: Word Transformer Lab
- [ ] Challenge 5: Greeting Card Factory
- [ ] Challenge 6: Quiz Show Host
- [ ] Mini Code Golf Problems
- [ ] Reflection Questions
- [ ] Bonus Challenges

**How many did you complete?** \_\_\_ / 9

---

## 🏠 Homework: Choose Your Challenge

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### Pick ONE of These Options:

#### Option 1: Story Builder 📖

- Create a story with at least **10 print statements**
- Use at least **5 variables** for different parts of the story
- Include a **decorated title** and "THE END"
- Make it creative and fun!

#### Option 2: ASCII Art Gallery 🎨

- Create **3 different ASCII art** pictures
- Each should be at least **5 lines tall**
- Add **titles above each artwork**
- Be creative with your characters!

#### Option 3: Word Transformer Report 🔮

- Choose **5 different words**
- Transform each word using ALL methods:
  - `.upper()`
  - `.lower()`
  - `.title()`
  - `.capitalize()`
  - `len()`
- Present in a **nicely formatted display**

### Grading Rubric

| Criteria                       | Points        |
| ------------------------------ | ------------- |
| Meets the minimum requirements | ⭐⭐⭐        |
| Uses concepts from Weeks 1-4   | ⭐⭐          |
| Creative and shows effort      | ⭐⭐          |
| Code runs without errors       | ⭐⭐          |
| Well-organized and readable    | ⭐            |
| **Total**                      | **10 points** |

### How to Submit

1. Write your code on Trinket
2. Save your work
3. Click the **Share** button
4. Copy the link
5. Share the link with your instructor

---

## 🌟 Next Lesson Preview

**Week 6: Bug Detectives!** 🔍

Next week, you become a **debugging expert**! Every programmer makes mistakes—the superpower is knowing how to FIND and FIX them.

**What you'll learn:**

- How to read error messages
- Common types of bugs
- Strategies for finding problems
- How to fix code that isn't working

**Sneak peek:**

```python
# Can you spot the bug?
name = "Alex
print(name)
```

See you next week, detective! 🔍

---

## 🎉 Great Job Today!

You practiced ALL your Python skills today!

**You can now:**

- ✅ Print anything you want
- ✅ Create beautiful patterns
- ✅ Store information in variables
- ✅ Transform text with string methods
- ✅ Build creative programs from scratch!

> _BrightByte says: "WOW! Look at all the amazing things you created today! I'm SO proud of you. You've gone from printing 'Hello World' to building stories, art, and interactive programs. That's INCREDIBLE progress! Keep that creative energy going, and I'll see you next week when we become Bug Detectives! 🔍"_

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*  
_Instagram: @kids_learn_ai_

---

_Remember: The best way to learn coding is to PRACTICE. Try the challenges again at home, create your own variations, and have fun experimenting!_
