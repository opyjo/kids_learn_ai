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

  name = "Your Name"
  age = 10
  favorite_color = "blue"

  print("My name is", name)
  print("I am", age, "years old")
  print("My favorite color is", favorite_color)

  # Try changing the values above and run again!
class_activities: |
  ## 🎮 Class Activity: Variable Swap Game!

  1. Create 3 variables about yourself (name, age, favorite thing)
  2. Print them using print() with commas
  3. Share your code with a partner
  4. Change ONLY the variable values (not the print statements)
  5. Run again and see how the output changes automatically!

  **Bonus Challenge:** Create a "character profile" with 5+ variables for a game character!
take_home_assignment: |
  ## 📚 Homework: My Profile Card

  **Assignment:** Create a Python program that displays your personal profile card!

  **Requirements:**
  1. Create at least 5 variables storing different information about you
  2. Include at least 2 string variables (text)
  3. Include at least 2 number variables (integers)
  4. Use descriptive variable names with underscores (like favorite_food)
  5. Print all variables in a nicely formatted output
  6. Add a decorative border using what you learned in Lesson 2

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

- Explain what variables are and why programmers use them
- Create variables to store text (strings) and numbers
- Use variables inside print() statements
- Change variable values and see the results
- Follow Python's rules for naming variables
- Understand the difference between strings and integers

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

### Why "Variable"?

The word "variable" means "able to change." Unlike a regular box where things stay put, variables in programming often change their values as the program runs. A score goes up, a player's health goes down, a name gets updated—variables are always ready to hold new information!

> _BrightByte says: "Think of me as a robot with lots of memory boxes inside my head! Each box has a label, and I can store information in them. When you create a variable, you're basically giving me a new box to remember something for you!"_

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

### More Examples

```python
# About a person
first_name = "Jordan"
last_name = "Smith"
birth_year = 2014

# About a pet
pet_name = "Buddy"
pet_type = "dog"
pet_age = 3

# About school
grade = 5
school_name = "Maple Elementary"
favorite_subject = "Science"

# Fun stuff
high_score = 9500
favorite_game = "Minecraft"
lucky_number = 7
```

---

## 🔢 Two Types of Values

This is VERY important! There are two main types of values you can store:

### Type 1: Text (Strings) - USE Quotation Marks!

**Strings** are text—words, sentences, or any characters. They ALWAYS need quotation marks.

```python
# All of these are strings:
name = "Alex"
greeting = "Hello, World!"
city = "Toronto"
pet = 'dog'           # Single quotes work too!
address = "123 Main Street"
emoji_message = "I love coding! 🐍"
```

**Remember:** If it's text, wrap it in quotes! `"like this"` or `'like this'`

### Type 2: Numbers (Integers) - NO Quotation Marks!

**Integers** are whole numbers. They do NOT use quotation marks.

```python
# All of these are integers:
age = 10
score = 100
year = 2025
lives = 3
high_score = 15000
temperature = 72
```

**Remember:** If it's a number you want to do math with, NO quotes!

### The Tricky Difference

This is a common confusion—pay close attention!

```python
# These are DIFFERENT:
age_number = 10      # This is a NUMBER (integer)
age_text = "10"      # This is TEXT (string)
```

Why does it matter?

- You can do MATH with numbers: `10 + 5 = 15`
- You can't really do math with text: `"10" + "5" = "105"` (it joins them!)

We'll explore this more in future lessons!

### Quick Quiz: String or Integer?

Look at each value—is it a string or integer?

| Value       | String or Integer?      |
| ----------- | ----------------------- |
| `"Hello"`   | String ✅               |
| `42`        | Integer ✅              |
| `"42"`      | String ✅ (has quotes!) |
| `100`       | Integer ✅              |
| `"Toronto"` | String ✅               |
| `2025`      | Integer ✅              |

> _BrightByte says: "Here's my trick for remembering: If it has quotation marks, it's a string—even if it LOOKS like a number! The quotes are the giveaway!"_

---

## 🖨️ Using Variables with print()

Now comes the really fun part—using your variables!

### Method 1: Print Just the Variable

You can print a variable all by itself:

```python
name = "Alex"
print(name)
```

**Output:**

```
Alex
```

Notice we DON'T put quotes around `name`—we want Python to look in the box, not print the word "name"!

```python
# ❌ This prints the WORD "name":
print("name")   # Output: name

# ✅ This prints what's INSIDE the name variable:
print(name)     # Output: Alex
```

### Method 2: Combine Text and Variables with Commas

Use commas to mix regular text with variables:

```python
name = "Alex"
age = 10

print("Hello! My name is", name)
print("I am", age, "years old")
```

**Output:**

```
Hello! My name is Alex
I am 10 years old
```

**How it works:**

- Text in quotes prints exactly as written
- Variables (no quotes) print their stored value
- Commas automatically add spaces between items

### Method 3: Multiple Variables in One Print

You can use as many commas as you need:

```python
name = "Alex"
age = 10
city = "Toronto"

print("My name is", name, "and I am", age, "years old from", city)
```

**Output:**

```
My name is Alex and I am 10 years old from Toronto
```

### Method 4: Combining with + (String Concatenation)

Remember the `+` from Lesson 2? You can use it with variables too!

```python
name = "Alex"
print("Hello, " + name + "!")
```

**Output:**

```
Hello, Alex!
```

**⚠️ Warning:** This only works with strings! You can't use `+` to mix strings and numbers:

```python
age = 10
# ❌ This causes an error:
print("I am " + age + " years old")   # ERROR!

# ✅ Use commas instead:
print("I am", age, "years old")       # Works!
```

---

## 🔄 Changing Variables

Here's something powerful: variables can **change**! That's literally why they're called "variables."

### Example: Updating a Score

```python
score = 0
print("Starting score:", score)

score = 10
print("After level 1:", score)

score = 25
print("After level 2:", score)

score = 50
print("Final score:", score)
```

**Output:**

```
Starting score: 0
After level 1: 10
After level 2: 25
Final score: 50
```

Each time we write `score = (new value)`, Python throws away the old value and stores the new one!

### Example: Changing Your Information

```python
favorite_food = "pizza"
print("My favorite food is", favorite_food)

favorite_food = "tacos"
print("Wait, now it's", favorite_food)

favorite_food = "ice cream"
print("Actually, it's definitely", favorite_food)
```

**Output:**

```
My favorite food is pizza
Wait, now it's tacos
Actually, it's definitely ice cream
```

### Real-World Example: Game Lives

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

> _BrightByte says: "In real video games, variables change ALL the time! Your health goes up and down, your score increases, your inventory changes. Variables make games possible!"_

---

## 📋 Variable Naming Rules

Python has some rules about what you can name your variables. Follow these, and you'll avoid errors!

### ✅ GOOD Variable Names (These Work!)

```python
name = "Alex"              # Simple and clear
player_score = 100         # Underscore for spaces
favoriteFood = "pizza"     # camelCase (works but not preferred)
age2 = 11                  # Numbers okay (just not at the start)
my_variable = "test"       # Descriptive
x = 5                      # Short names okay for simple things
player1_name = "Sam"       # Mix of words and numbers
```

### ❌ BAD Variable Names (These Cause ERRORS!)

```python
# Spaces are NOT allowed!
player score = 100         # ❌ SyntaxError!
my name = "Alex"           # ❌ SyntaxError!

# Can't START with a number!
2nd_place = "Sam"          # ❌ SyntaxError!
1st = "winner"             # ❌ SyntaxError!

# No special characters (except underscore)!
player$ = "Alex"           # ❌ SyntaxError!
my-score = 50              # ❌ SyntaxError!
email@address = "test"     # ❌ SyntaxError!

# Can't use Python's special words!
print = "hello"            # ❌ Don't do this!
if = 5                     # ❌ Reserved word!
```

### 🌟 Tips for GREAT Variable Names

| Tip                        | Bad Example              | Good Example   |
| -------------------------- | ------------------------ | -------------- |
| Be descriptive             | `n`                      | `player_name`  |
| Use underscores for spaces | `playerscore`            | `player_score` |
| Keep it lowercase          | `PlayerName`             | `player_name`  |
| Make it meaningful         | `x`                      | `high_score`   |
| Keep it reasonable length  | `the_name_of_the_player` | `player_name`  |

### Python Style: snake_case

In Python, the preferred style is called **snake_case**:

- All lowercase letters
- Words separated by underscores

```python
# snake_case examples (PREFERRED in Python):
first_name = "Alex"
last_name = "Smith"
favorite_color = "blue"
high_score = 9500
player_health = 100
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

### Challenge 2: My Pet (Real or Imaginary!)

```python
pet_name = "____"
pet_type = "____"      # dog, cat, dragon, unicorn...
pet_age = ____
pet_color = "____"
pet_favorite_food = "____"

print("🐾 MY PET 🐾")
print("Name:", pet_name)
print("Type:", pet_type)
print("Age:", pet_age, "years old")
print("Color:", pet_color)
print("Favorite food:", pet_favorite_food)
```

### Challenge 3: Video Game Character

Create a character profile for a video game:

```python
character_name = "____"
character_class = "____"    # Warrior, Mage, Archer...
health = ____
attack_power = ____
level = ____

print("⚔️ CHARACTER PROFILE ⚔️")
print("-" * 25)
print("Name:", character_name)
print("Class:", character_class)
print("Health:", health, "HP")
print("Attack:", attack_power)
print("Level:", level)
print("-" * 25)
```

### Challenge 4: The Changing Story

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

### Challenge 5: Calculator Display (Preview!)

```python
player_name = "Alex"
level_1_score = 100
level_2_score = 150
level_3_score = 200

print("=== SCORE CARD ===")
print("Player:", player_name)
print("Level 1:", level_1_score, "points")
print("Level 2:", level_2_score, "points")
print("Level 3:", level_3_score, "points")
print("==================")
# Next week we'll learn to ADD these together!
```

---

## 🔧 Common Mistakes and How to Fix Them

### Mistake 1: Forgetting Quotes for Strings

```python
# ❌ Wrong - Python thinks Alex is a variable!
name = Alex

# ✅ Correct - Quotes tell Python it's text
name = "Alex"
```

**Error message:** `NameError: name 'Alex' is not defined`

### Mistake 2: Using Quotes for Numbers (When You Want Math)

```python
# ⚠️ This stores TEXT, not a number:
age = "10"

# ✅ This stores a NUMBER:
age = 10
```

### Mistake 3: Spaces in Variable Names

```python
# ❌ Wrong - Spaces cause errors!
my name = "Alex"

# ✅ Correct - Use underscore instead
my_name = "Alex"
```

**Error message:** `SyntaxError: invalid syntax`

### Mistake 4: Starting with a Number

```python
# ❌ Wrong - Can't start with number!
1st_place = "Gold"

# ✅ Correct - Start with letter or underscore
first_place = "Gold"
place_1st = "Gold"
```

### Mistake 5: Printing Variable Name Instead of Value

```python
name = "Alex"

# ❌ This prints the word "name":
print("name")    # Output: name

# ✅ This prints what's stored in name:
print(name)      # Output: Alex
```

### Mistake 6: Mixing + with Numbers and Strings

```python
age = 10

# ❌ This causes an error:
print("I am " + age + " years old")

# ✅ Use commas instead:
print("I am", age, "years old")
```

**Error message:** `TypeError: can only concatenate str (not "int") to str`

---

## 📝 Key Points to Remember

### Summary Card

| Concept                | Example                          | Explanation                    |
| ---------------------- | -------------------------------- | ------------------------------ |
| Create string variable | `name = "Alex"`                  | Text needs quotes              |
| Create number variable | `age = 10`                       | Numbers don't need quotes      |
| Print a variable       | `print(name)`                    | No quotes around variable name |
| Print with text        | `print("Hi", name)`              | Use commas to combine          |
| Change a variable      | `score = 100` then `score = 200` | Old value is replaced          |
| Naming style           | `favorite_color`                 | Use snake_case                 |

### Quick Reference

```python
# Creating variables
name = "Alex"           # String (text)
age = 10                # Integer (number)

# Using variables
print(name)                    # Just the variable
print("Hello", name)           # Text + variable
print("Age:", age, "years")    # Text + variable + text

# Changing variables
score = 0
score = 10      # Now score is 10
score = 25      # Now score is 25
```

### Vocabulary Words

| Word           | Definition                               | Example               |
| -------------- | ---------------------------------------- | --------------------- |
| **Variable**   | A named container that stores a value    | `name = "Alex"`       |
| **Value**      | The information stored inside a variable | `"Alex"` is the value |
| **String**     | Text data inside quotation marks         | `"Hello World"`       |
| **Integer**    | A whole number (no decimals)             | `42`, `100`, `2025`   |
| **Assignment** | Using `=` to store a value in a variable | `age = 10`            |
| **snake_case** | Naming style with underscores            | `my_favorite_color`   |

---

## 🏠 Homework: My Profile Card

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### The Assignment

Create a Python program that displays your personal profile card—like a character stats screen in a video game, but about YOU!

### Requirements

Your program must include:

1. ✅ At least **5 variables** storing different information about you
2. ✅ At least **2 string variables** (text, like name, city, favorite food)
3. ✅ At least **2 integer variables** (numbers, like age, grade, lucky number)
4. ✅ Use **descriptive variable names** with underscores (snake_case)
5. ✅ Print all variables in a **nicely formatted output**
6. ✅ Add a **decorative border** (using `*` or `-` multiplication from Lesson 2)
7. ✅ Code must **run without errors**

### Example Solution

```python
# My Profile Card
# By: BrightByte

# Variables (at least 5!)
my_name = "BrightByte"
my_age = 2
my_city = "Toronto"
favorite_food = "electricity"
lucky_number = 7
favorite_color = "blue"
dream_job = "Teaching robots to code"

# Print the profile card
print("*" * 35)
print("       📋 MY PROFILE CARD 📋       ")
print("*" * 35)
print("")
print("Name:", my_name)
print("Age:", my_age, "years old")
print("City:", my_city)
print("Favorite Food:", favorite_food)
print("Lucky Number:", lucky_number)
print("Favorite Color:", favorite_color)
print("Dream Job:", dream_job)
print("")
print("*" * 35)
print("     Thanks for reading! 🎉        ")
print("*" * 35)
```

### Grading Rubric

| Criteria                                | Points        |
| --------------------------------------- | ------------- |
| At least 5 variables created            | ⭐⭐          |
| At least 2 string variables             | ⭐            |
| At least 2 integer variables            | ⭐            |
| Descriptive variable names (snake_case) | ⭐⭐          |
| Variables printed in formatted output   | ⭐⭐          |
| Decorative border included              | ⭐            |
| Code runs without errors                | ⭐            |
| **Total**                               | **10 points** |

### Bonus Challenges (Optional)

- Add MORE than 5 variables (7? 10?)
- Create a second profile card for a friend, pet, or fictional character
- Use the variables multiple times in different sentences
- Make the border extra fancy using different characters

### How to Submit

1. Write your code on Trinket
2. Save your work (click the 💾 Save button)
3. Click the **Share** button
4. Copy the link
5. Share the link with your instructor

---

## 🌟 Next Lesson Preview

**Week 4: Playing with Text**

Next week, we're going to learn cool tricks for working with text (strings)! You'll learn how to:

- Get the length of a string
- Make text UPPERCASE or lowercase
- Combine strings in new ways
- Access individual letters in a word

**Sneak peek:**

```python
name = "alex"
print(name.upper())    # ALEX
print(name.title())    # Alex
print(len(name))       # 4
```

Get ready to become a text wizard! 🧙‍♂️

---

## 🎉 Congratulations!

You just learned one of the MOST important concepts in programming—VARIABLES! This is huge!

**What you accomplished today:**

- ✅ Learned what variables are and why they matter
- ✅ Created variables to store strings and integers
- ✅ Used variables in print() statements
- ✅ Changed variable values
- ✅ Learned Python's naming rules (snake_case)
- ✅ Understood the difference between strings and integers

> _BrightByte says: "AMAZING work today! 🌟 Variables are used in EVERY real program—games, apps, websites, robots, everything! You now understand a concept that professional programmers use every single day. You should be SO proud of yourself! Keep practicing, and I'll see you next week when we learn to do cool tricks with text!"_

---

## 📚 Extra Resources (Optional)

Want to practice more? Try these:

- **Variable Practice:** Create profile cards for your family members
- **Game Stats:** Make stats screens for your favorite video game characters
- **Pet Profiles:** Create variables for pets in your neighborhood
- **Imagination:** Make profile cards for superheroes, wizards, or aliens!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Variables can be tricky at first, but they become second nature with practice. Ask your instructor or parents for help—they'd love to see what you're creating!_
