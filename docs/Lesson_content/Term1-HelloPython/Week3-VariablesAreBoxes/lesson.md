---
title: "Variables are Boxes!"
description: "Learn to store information in variables - Python's memory boxes that remember things for you!"
difficulty: "beginner"
order_index: 3
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: true
starter_code: |
  # Variables are like labeled boxes!
  # They store information for you!

  # Step 1: Create a variable for your name
  # name = ____

  # Step 2: Create a variable for your age
  # age = ____

  # Step 3: Create a variable for your favorite color
  # favorite_color = ____

  # Step 4: Print your variables using print()
  # print("My name is", name)

  # Remove the # at the start of each line to activate your code!
class_activities: |
  ## 🎮 Class Activity: My Profile Card

  Create a Python program that displays your personal profile card — like a character stats screen in a video game, but about YOU!

  **Requirements:**
  1. Create at least 5 variables storing different information about you
  2. Include at least 2 string variables (text)
  3. Include at least 2 number variables (integers)
  4. Use descriptive variable names with underscores (like `favorite_food`)
  5. Print all variables in a nicely formatted output
  6. Add a decorative border using what you learned in Lesson 2

  **Bonus Challenge:** Add MORE than 5 variables and make the border extra fancy using different characters!
take_home_assignment: |
  ## 📚 Homework: Build a Game Character Profile!

  You're designing a character for a video game! Use variables to build their stats card.

  **Part 1: Create Your Character**
  1. Create variables for your character's `name`, `character_class` (Warrior, Mage, Archer...), `health`, `attack_power`, and `level`
  2. Print a character profile card using `print()` with commas
  3. Add a border using `print("-" * 25)` at the top and bottom

  **Part 2: Level Up!**
  4. Now your character levels up! Change the `level`, `health`, and `attack_power` variables to new values
  5. Print the updated profile card again so you can see the before and after

  **Part 3: Tell Their Story**
  6. Create two new variables: `location` and `enemy`
  7. Use all your variables to print a short 3-line adventure story about your character

  **Bonus Challenge:** Add a `sidekick_name` variable and include them in your story!

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  When Siri says "Good morning, Alex!" she's using a variable to remember your name - just like `name = "Alex"` in your code! AI systems use thousands of variables to store information, just like your program stores data in boxes. Netflix uses variables to remember what shows you like, and ChatGPT uses variables to remember what you're talking about.

  You're learning the same memory system that powers AI!

  Variables are how AI remembers things about you!
---

# Term 1, Week 3: Variables are Boxes! 📦

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 1 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Create variables to store text (strings) and numbers
- Use variables inside print() statements
- Change variable values and see the results
- Follow Python's naming rules (snake_case)

---

## 🤖 BrightByte's Welcome!

> _"Hey there, coder! 🎉 You've been doing AMAZING! You know how to make Python talk using print(), you can create patterns, and you can join text together. But here's a question: What if Python could REMEMBER things? What if you could store information and use it later? That's exactly what we're learning today—VARIABLES! This is one of the most important concepts in ALL of programming. Let's go!"_

---

## 📝 Review: What We've Learned

Before we dive into variables, let's remember what we know:

```python
# Lesson 1: Basic printing
print("Hello, World!")

# Lesson 2: Multiple prints and tricks
print("=" * 20)
print("My name is Alex")
print("=" * 20)
```

This is great, but what if we want to use "Alex" in multiple places? Right now, we'd have to type it every time. What if we want to change it? We'd have to find and change EVERY place we typed it!

**Variables solve this problem!** 🎯

---

## 📦 What is a Variable?

### The Box Analogy

Imagine you have a **labeled box** where you can store things.

| Step | What You Do             | Real World Example         |
| ---- | ----------------------- | -------------------------- |
| 1    | Write a name on the box | Label it "TOYS"            |
| 2    | Put something inside    | Put your action figures in |
| 3    | Look in the box later   | Open it to play with toys  |
| 4    | Change what's inside    | Replace toys with books    |

In Python, a **variable** works exactly like this:

- It has a **name** (the label on the box)
- It holds a **value** (what's inside the box)
- You can **look at** what's inside anytime
- You can **change** what's inside anytime

> _BrightByte says: "Think of me as a robot with lots of memory boxes inside my head! When you create a variable, you're giving me a new box to remember something for you!"_

---

## 🛠️ Creating Variables

### The Basic Formula

To create a variable, use the **equals sign** `=`:

```python
variable_name = value
```

Let's break this down:

- **variable_name** - The label for your box (you choose this!)
- **=** - Means "store this value" (NOT "equals" like in math!)
- **value** - What you want to store

### Your First Variables

```python
name = "Alex"
age = 10
favorite_color = "blue"
```

**What just happened?**

| Variable Name    | Value Stored | Type             |
| ---------------- | ------------ | ---------------- |
| `name`           | `"Alex"`     | Text (String)    |
| `age`            | `10`         | Number (Integer) |
| `favorite_color` | `"blue"`     | Text (String)    |

Now Python remembers:

- The box labeled `name` contains "Alex"
- The box labeled `age` contains 10
- The box labeled `favorite_color` contains "blue"

---

## 🔢 Two Types of Values

There are two main types of values you can store:

### Text (Strings) - USE Quotation Marks!

**Strings** are text—words, sentences, or any characters. They ALWAYS need quotation marks.

```python
name = "Alex"
city = "Toronto"
greeting = "Hello, World!"
```

### Numbers (Integers) - NO Quotation Marks!

**Integers** are whole numbers. They do NOT use quotation marks.

```python
age = 10
score = 100
lives = 3
```

### The Important Difference

```python
# These are DIFFERENT:
age_number = 10      # This is a NUMBER (integer)
age_text = "10"      # This is TEXT (string)
```

**Remember:** If it has quotation marks, it's a string—even if it LOOKS like a number!

> _BrightByte says: "Here's my trick: Quotes = text. No quotes = number!"_

---

## 🖨️ Using Variables with print()

Now comes the really fun part—using your variables!

### Print Just the Variable

```python
name = "Alex"
print(name)       # Output: Alex
```

Notice we DON'T put quotes around `name`—we want Python to look in the box, not print the word "name"!

```python
print("name")   # ❌ Output: name (the word)
print(name)     # ✅ Output: Alex (the value)
```

### Combine Text and Variables with Commas

Use commas to mix regular text with variables:

```python
name = "Alex"
age = 10

print("Hello! My name is", name)
print("I am", age, "years old")
print("My name is", name, "and I am", age, "years old")
```

**How it works:**

- Text in quotes prints exactly as written
- Variables (no quotes) print their stored value
- Commas automatically add spaces between items

---

## 🔄 Changing Variables

Here's something powerful: variables can **change**! That's literally why they're called "variables."

### Example: Game Lives

```python
lives = 3
print("Game Start! Lives:", lives)

lives = 2
print("Ouch! Hit by enemy. Lives:", lives)

lives = 1
print("Ouch again! Lives:", lives)

lives = 0
print("Game Over! Lives:", lives)
```

Each time we write `lives = (new value)`, Python throws away the old value and stores the new one!

> _BrightByte says: "In real video games, variables change ALL the time! Your health, score, and inventory are all variables!"_

---

## 📋 Variable Naming Rules

Python has some rules about what you can name your variables. Follow these, and you'll avoid errors!

### ✅ GOOD Variable Names

```python
name = "Alex"              # Simple and clear
player_score = 100         # Underscore for spaces
age2 = 11                  # Numbers okay (just not at the start)
```

### ❌ BAD Variable Names (These Cause ERRORS!)

```python
player score = 100         # ❌ No spaces allowed!
2nd_place = "Sam"          # ❌ Can't start with a number!
my-score = 50              # ❌ No special characters!
```

### Python Style: snake_case

In Python, use **snake_case**: all lowercase, words separated by underscores.

```python
first_name = "Alex"
favorite_color = "blue"
high_score = 9500
```

---

## 🎯 Practice Challenges

### Challenge 1: All About Me

Create variables about yourself and print them:

```python
# Create these variables with YOUR information:
my_name = "____"
my_age = ____
my_city = "____"
my_hobby = "____"

# Print them out:
print("=== ALL ABOUT ME ===")
print("Name:", my_name)
print("Age:", my_age)
print("City:", my_city)
print("Hobby:", my_hobby)
print("===================")
```

### Challenge 2: The Changing Story

Create a story where you change variables:

```python
hero = "Alex"
location = "forest"
enemy = "dragon"

print("Once upon a time,", hero, "entered the", location)
print(hero, "saw a", enemy, "!")

# Change the variables:
location = "castle"
enemy = "wizard"

print("Later,", hero, "went to the", location)
print("There,", hero, "met a", enemy, "!")
```

---

## 🔧 Common Mistakes and How to Fix Them

### Mistake 1: Forgetting Quotes for Strings

```python
name = Alex       # ❌ NameError!
name = "Alex"     # ✅ Correct
```

### Mistake 2: Spaces in Variable Names

```python
my name = "Alex"  # ❌ SyntaxError!
my_name = "Alex"  # ✅ Use underscore
```

### Mistake 3: Printing Variable Name Instead of Value

```python
name = "Alex"
print("name")     # ❌ Output: name (the word)
print(name)       # ✅ Output: Alex (the value)
```

---

## 📝 Key Points to Remember

| Concept                | Example                | Explanation                    |
| ---------------------- | ---------------------- | ------------------------------ |
| Create string variable | `name = "Alex"`        | Text needs quotes              |
| Create number variable | `age = 10`             | Numbers don't need quotes      |
| Print a variable       | `print(name)`          | No quotes around variable name |
| Print with text        | `print("Hi", name)`    | Use commas to combine          |
| Change a variable      | `score = 100` then `score = 200` | Old value is replaced |
| Naming style           | `favorite_color`       | Use snake_case                 |

### Vocabulary Words

| Word           | Definition                               | Example               |
| -------------- | ---------------------------------------- | --------------------- |
| **Variable**   | A named container that stores a value    | `name = "Alex"`       |
| **String**     | Text data inside quotation marks         | `"Hello World"`       |
| **Integer**    | A whole number (no decimals)             | `42`, `100`, `2025`   |
| **snake_case** | Naming style with underscores            | `my_favorite_color`   |

---

---

## 🌟 Next Lesson Preview

**Week 4: Playing with Text** — Learn cool tricks like making text UPPERCASE, getting the length of words, and more!

---

## 🎉 Congratulations!

You just learned one of the MOST important concepts in programming—VARIABLES!

> _BrightByte says: "Variables are used in EVERY real program—games, apps, websites, robots, everything! You now understand a concept that professional programmers use every single day. Keep practicing, and I'll see you next week when we learn cool tricks with text!"_

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Variables can be tricky at first, but they become second nature with practice. Ask your instructor or parents for help—they'd love to see what you're creating!_
