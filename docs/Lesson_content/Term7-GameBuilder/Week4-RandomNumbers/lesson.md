---
title: "Random Numbers"
description: "Import random and make games unpredictable - add excitement with random numbers!"
difficulty: "beginner"
order_index: 4
course_slug: "term-7-game-builder"
is_premium: false
requires_trinket: true
starter_code: |
  # Random Numbers
  # Make games unpredictable!

  import random

  # Random number between 1 and 10
  number = random.randint(1, 10)
  print("Random number:", number)

  # Roll a die (1-6)
  die = random.randint(1, 6)
  print("You rolled:", die)
class_activities: |
  ## 🎮 Class Activity: Random Number Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can generate a random number between 1 and 20?
  3. Challenge 2: Who can simulate rolling a die (1-6)?
  4. Challenge 3: Who can create the most creative random game?
  5. Share your code with the class!

  **Bonus:** Try creating a random number guessing game!
take_home_assignment: |
  ## 📚 Homework: Random Number Games

  **Assignment:** Create a Python program that uses random numbers!

  **Requirements:**
  1. Import the random module
  2. Generate at least 3 different random numbers
  3. Use random.randint() to create numbers in different ranges
  4. Create a simple game or activity using random numbers
  5. Add comments explaining your code
  6. Code must run without errors

  **Bonus Challenges:**
  - Create a dice rolling simulator
  - Create a random number guessing game
  - Create a random picker (picks random items from a list)

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses randomness to learn and make decisions! When AI plays games, it uses random moves to explore different strategies. When AI generates art, it uses randomness to create unique designs. Randomness makes AI creative and unpredictable—just like your games!

  You're using the same randomness that makes AI exciting!
---

# Term 7, Lesson 4: Random Numbers 🎲

**Course:** Term 7: Game Builder  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Import the `random` module
- Generate random numbers using `random.randint()`
- Use random numbers in games
- Make games unpredictable and exciting
- Create games that are different every time

---

## 🤖 Welcome from BrightByte!

> _"This is SO exciting! 🎲 You've learned game loops, but games need to be UNPREDICTABLE to be fun! Today, you're going to learn how to generate random numbers. This is what makes games exciting—you never know what will happen! Ready to add some randomness to your games?"_

### What's New This Week?

Last week you learned:
- Game loops that keep playing
- Interactive game structures
- "Play again?" functionality

This week you'll discover:
- **Import random** — Using Python's random module
- **Random numbers** — Generating unpredictable values
- **Random games** — Games that change every time
- **Unpredictable fun** — Making games exciting!

> _BrightByte says: "Randomness is what makes games fun! Every game you play uses random numbers!"_

---

## 🎲 What is Random?

### The Basic Idea

**Random** means unpredictable—you can't guess what will happen next!

Think about:
- Rolling a die — You don't know what number you'll get
- Flipping a coin — Heads or tails? Unpredictable!
- Shuffling cards — The order is random
- Weather — Unpredictable (well, mostly!)

### Why Random is Important in Games

Games need randomness to be:
- **Exciting** — You don't know what will happen
- **Replayable** — Different every time
- **Fair** — No one can cheat by knowing the outcome
- **Fun** — Surprises make games interesting!

---

## 📦 Importing the Random Module

### What is a Module?

A **module** is a collection of code that someone else wrote that you can use. Python has many built-in modules, including `random`!

### How to Import

```python
import random
```

**Important:** This line must be at the **top** of your program, before you use any random functions!

### Why Import?

Python doesn't include random functions by default. You need to tell Python: "I want to use the random module!"

---

## 🎯 Generating Random Numbers

### Using `random.randint()`

`random.randint(a, b)` generates a random integer (whole number) between `a` and `b` (inclusive).

### Example 1: Random Number 1-10

```python
import random

number = random.randint(1, 10)
print("Random number:", number)
```

**Output:** (Different each time!)
```
Random number: 7
```

Run it again:
```
Random number: 3
```

**It's different every time!**

### Example 2: Roll a Die (1-6)

```python
import random

die = random.randint(1, 6)
print("You rolled:", die)
```

**Output:**
```
You rolled: 4
```

### Example 3: Random Number 1-100

```python
import random

number = random.randint(1, 100)
print("Random number between 1 and 100:", number)
```

---

## 🎮 Random Number Examples

### Example 1: Random Number Generator

```python
import random

print("Random number generator!")
number = random.randint(1, 20)
print("Your random number is:", number)
```

### Example 2: Dice Roller

```python
import random

print("Rolling the die...")
die1 = random.randint(1, 6)
die2 = random.randint(1, 6)
print("Die 1:", die1)
print("Die 2:", die2)
print("Total:", die1 + die2)
```

### Example 3: Random Picker

```python
import random

print("Picking a random number between 1 and 50...")
number = random.randint(1, 50)
print("I picked:", number)
```

---

## 🎯 Using Random in Games

### Example 1: Simple Guessing Game Setup

```python
import random

# Pick a random number
secret_number = random.randint(1, 20)
print("I'm thinking of a number between 1 and 20...")

# Player guesses
guess = int(input("Your guess: "))

if guess == secret_number:
    print("You got it!")
else:
    print("Wrong! The number was", secret_number)
```

### Example 2: Random Choice Game

```python
import random

print("Random choice game!")
print("I'll pick a random number between 1 and 10.")

number = random.randint(1, 10)
print("The number is:", number)

if number > 5:
    print("High number!")
else:
    print("Low number!")
```

---

## 🎮 Practice Challenges!

### Challenge 1: Generate Random 1-10

```python
import random
number = random.randint(1, 10)
print(number)
```

### Challenge 2: Roll Two Dice

```python
import random
die1 = random.randint(1, 6)
die2 = random.randint(1, 6)
print("Die 1:", die1)
print("Die 2:", die2)
```

### Challenge 3: Random Number 1-100

```python
import random
number = random.randint(1, 100)
print("Random number:", number)
```

### Challenge 4: Create Your Own Random Game!

Use random numbers to create a fun game!

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting to Import

**Wrong:**
```python
number = random.randint(1, 10)  # Error! random not defined
```

**Right:**
```python
import random  # Must import first!
number = random.randint(1, 10)
```

### Mistake 2: Wrong Order

**Wrong:**
```python
number = random.randint(1, 10)  # Error!
import random
```

**Right:**
```python
import random  # Import at the top!
number = random.randint(1, 10)
```

### Mistake 3: Wrong Range

**Wrong:**
```python
number = random.randint(10, 1)  # Error! Start must be <= end
```

**Right:**
```python
number = random.randint(1, 10)  # Start <= end
```

---

## 📝 Key Takeaways

### Importing Random

```python
import random  # Always at the top!
```

### Generating Random Numbers

```python
random.randint(start, end)  # Inclusive: includes both start and end
```

### Examples

| What You Want              | Code                        | Result                    |
| ------------------------- | --------------------------- | ------------------------- |
| Random 1-10                | `random.randint(1, 10)`     | 1, 2, 3, 4, 5, 6, 7, 8, 9, or 10 |
| Roll a die (1-6)          | `random.randint(1, 6)`      | 1, 2, 3, 4, 5, or 6       |
| Random 1-100              | `random.randint(1, 100)`    | Any number 1-100          |
| Random 0-9                | `random.randint(0, 9)`      | 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9 |

### Important Rules

1. **Always import at the top** — `import random` must be first
2. **Start <= End** — `random.randint(1, 10)` not `random.randint(10, 1)`
3. **Inclusive range** — Both start and end are included
4. **Different each time** — Random numbers change every run!

### Vocabulary Words

| Word            | Definition                                    | Example                    |
| --------------- | --------------------------------------------- | -------------------------- |
| **Random**      | Unpredictable, can't guess                    | "Random number"            |
| **Module**      | Collection of code you can use                | "import random"            |
| **Import**      | To bring in code from a module                | "import random"            |
| **randint**     | Function that generates random integers       | "random.randint(1, 10)"   |

---

## 🌟 Next Lesson Preview

**Week 5: Keeping Score**

Next week, you'll learn to track game progress:

- **Score variables** — Keeping track of points
- **Attempt counters** — Counting guesses
- **Win/loss tracking** — Tracking game outcomes
- **Score display** — Showing progress

**Sneak peek:**

```python
score = 0
attempts = 0
# ... game code ...
score = score + 1
attempts = attempts + 1
```

Get ready to track your game progress! 📊

---

## 🎉 Great Job, Random Master!

You just learned to make games unpredictable!

**What you accomplished today:**

- ✅ Learned to import the random module
- ✅ Generated random numbers with `random.randint()`
- ✅ Used random numbers in games
- ✅ Made games unpredictable and exciting
- ✅ Created games that are different every time

> _BrightByte says: "WOW! You just added randomness to your games! 🎲 This is what makes games exciting—you never know what will happen! Next week, we'll learn to keep score and track progress. You're building real games now!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Dice Games:** Create different dice rolling games
2. **Random Pickers:** Pick random numbers for different purposes
3. **Guessing Games:** Start building number guessing games
4. **Random Challenges:** Create games with random challenges
5. **Your Own Games:** Use random numbers in your own game ideas!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: random numbers make games exciting!_ 🎲

