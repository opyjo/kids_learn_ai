---
title: "Input Superpower — Numbers and Conversions!"
description: "Discover why input() always returns a string and learn how to use int() and float() to convert it into numbers — so Python can do real maths with player input!"
difficulty: "beginner"
order_index: 7
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: true
starter_code: |
  # Input Superpower!
  # input() always gives us a STRING. Let's convert it!

  name = input("What is your name? ")
  age = int(input("How old are you? "))

  next_birthday = age + 1
  print(f"Hi {name}! Next year you'll be {next_birthday}!")
  print(f"That means you were born around {2026 - age}!")
class_activities: |
  ## 🎮 Class Activity: Birthday Calculator!

  Build a program that greets the user and tells them about their age. Here's what your program should do:

  1. Ask the user for their name
  2. Ask the user how old they are — remember to convert the answer to a number!
  3. Calculate what age they will be next year
  4. Print a greeting that includes their name and their age next year
  5. Print a second message that estimates the year they were born (hint: subtract their age from the current year)

  Run it and test it with your own name and age. Does the output look correct?

  **Bonus:** Add a third message that tells the user how many years until they turn 18.
take_home_assignment: |
  ## 📚 Homework: Number Wizard Calculator

  **Assignment:** Build a program that collects at least 3 numbers from the user and does something interesting with them!

  **Requirements:**
  1. Use `input()` at least 3 times to collect numbers
  2. Use `int()` or `float()` to convert each one
  3. Perform at least 2 different calculations
  4. Print results using f-strings

  **Ideas:**
  - Age calculator: ask for birth year and current year, calculate age
  - Score tracker: ask for 3 game scores, find the total
  - Step counter: ask for steps on 3 days, add them up

  **Bonus:**
  - Use `float()` for a decimal result (e.g. average score)
  - Add a decorated "results card" with a border

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI systems work with numbers constantly — processing millions of them to recognise faces, translate languages, and predict your next search. But ALL data coming from the real world starts as raw text (strings), just like your input() values. The very first step in AI data pipelines is converting raw text into numbers — exactly what you learned today with int() and float()!

  When you type a search query, that text gets converted into numbers called "embeddings" before the AI can process it. You've just learned one of the most fundamental ideas in computing!
---

# Term 1, Week 7: Input Superpower — Numbers and Conversions! 🔢

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 7 of 9

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Explain why `input()` always returns a string — and why that matters
- Use `int()` to convert string input to a whole number
- Use `float()` to convert string input to a decimal number
- Perform calculations with converted numbers
- Recognise and fix a `TypeError` when mixing strings and numbers

---

## 🤖 BrightByte's Welcome!

> _"Last week Python learned to LISTEN — and you started having real conversations with your programs! But there was one mystery I left you with: input() always gives you text, even when you type a number. Why does that matter? Because Python can't do maths on text! Today we fix that forever. By the end of this lesson, your programs will count, calculate, and crunch numbers like a real computer. Let's go!"_ 🔢

---

## 🔍 The Mystery From Last Week

Remember this warning from Lesson 6?

> **"input() ALWAYS returns a string — even if the user types a number!"**

Let's see exactly why this matters. Try this code:

```python
age = input("How old are you? ")
older_age = age + 10
print(older_age)
```

**What do you expect?** If you type `12`, you might expect `22`.

**What actually happens?**

```
TypeError: can only concatenate str (not "int") to str
```

**A TypeError!** Python is confused. You gave it the text `"12"` and tried to add the number `10`. Those are two different *types*, and Python refuses to mix them.

---

## 💡 Strings vs Numbers: What's the Difference?

Think of it like this:

| Type | Example | Can do maths? | Python name |
|------|---------|--------------|-------------|
| String (text) | `"12"` | ❌ No | `str` |
| Integer (whole number) | `12` | ✅ Yes | `int` |
| Float (decimal number) | `12.5` | ✅ Yes | `float` |

The string `"12"` and the number `12` **look the same to us**, but Python treats them completely differently.

```python
# These look similar but are NOT the same:
text_twelve = "12"    # str — it's text, like "abc"
real_twelve  = 12     # int — it's a number you can calculate with

print(text_twelve + text_twelve)   # Output: 1212  (joined together!)
print(real_twelve  + real_twelve)  # Output: 24    (added together!)
```

> _BrightByte says: "The string '12' doubled gives you '1212' — Python just glued the text together! The integer 12 doubled gives you 24 — Python did real maths. Same digits, completely different behaviour!"_

---

## 🔧 The Fix: int() and float()

Python gives us special functions to **convert** (change) a string into a number:

| Function | What it does | Example |
|----------|-------------|---------|
| `int()` | Converts to a whole number | `int("12")` → `12` |
| `float()` | Converts to a decimal number | `float("3.5")` → `3.5` |

### Using int()

```python
age_text   = input("How old are you? ")    # stores "12" (string)
age_number = int(age_text)                  # converts to 12 (int)

older = age_number + 10
print(f"In 10 years you'll be {older}!")    # Output: In 10 years you'll be 22!
```

### The Shortcut — Wrap int() Around input()

Instead of two lines, you can do it in one:

```python
age = int(input("How old are you? "))
```

**How to read this:** "Ask the user how old they are, take whatever they type, convert it to an integer, and store it in `age`."

```python
# Long version (two lines)
age_text   = input("How old are you? ")
age_number = int(age_text)

# Short version (one line) — same result!
age_number = int(input("How old are you? "))
```

Both work exactly the same. The short version is what most programmers use.

---

## 🧮 Calculations with Converted Numbers

Once you convert to `int()`, you can do real maths:

```python
name = input("What is your name? ")
age  = int(input("How old are you? "))

next_birthday  = age + 1
birth_year     = 2026 - age
age_in_decades = age // 10   # // means divide and drop the decimal

print(f"Hi {name}!")
print(f"Next year you'll be {next_birthday}.")
print(f"You were born around {birth_year}.")
print(f"You've lived for about {age_in_decades} decade(s)!")
```

**Sample run:**
```
What is your name? Sam
How old are you? 13

Hi Sam!
Next year you'll be 14.
You were born around 2013.
You've lived for about 1 decade(s)!
```

---

## 🌊 When to Use float()

Use `float()` when the number might have a **decimal point** — like a score, a measurement, or a temperature.

```python
score = float(input("Enter your score (e.g. 8.5): "))
bonus = score * 1.5

print(f"Your score: {score}")
print(f"Your bonus score: {bonus}")
```

**Sample run:**
```
Enter your score (e.g. 8.5): 8.5
Your score: 8.5
Your bonus score: 12.75
```

### int() vs float() — Which to Use?

| Use `int()` for... | Use `float()` for... |
|--------------------|---------------------|
| Ages | Scores with decimals |
| Number of items (3 cats) | Prices (£2.99) |
| Whole counts | Temperatures |
| Game lives | Measurements (height, weight) |

> _BrightByte says: "When in doubt, use int(). You can always switch to float() if you need decimals later!"_

---

## 🎯 Practice Challenges

### Challenge 1: Age Calculator ⭐

Write a program that:
1. Asks for the user's name
2. Asks for their age (convert with `int()`)
3. Calculates their age next year
4. Prints: `"Hi [name]! Next year you'll be [age + 1]!"`

```python
name = input("What is your name? ")
age  = int(input("How old are you? "))

print(f"Hi {name}! Next year you'll be {age + 1}!")
```

---

### Challenge 2: Score Doubler ⭐⭐

Ask the user for their game score, double it, and print the result with a congratulations message.

**Hint:** Use `int(input(...))` to get the score, then multiply by 2.

```python
name   = input("What is your name? ")
score  = int(input("What was your score? "))
double = score * 2

print(f"Amazing, {name}!")
print(f"Your score: {score}")
print(f"Double score power-up: {double}!")
```

---

### Challenge 4: The Measurement Converter ⭐⭐⭐⭐

Build a mini stats card. Ask for:
- The user's name
- Their height in centimetres (use `float()`)
- Their weight in kilograms (use `float()`)

Then calculate and print a "Stats Card" with:
- Height in metres (divide by 100), rounded to 2 decimal places using `round(value, 2)`
- Weight displayed neatly

```python
name   = input("What is your name? ")
height = float(input("Enter your height in cm: "))
weight = float(input("Enter your weight in kg: "))

height_m = round(height / 100, 2)

print("")
print("=" * 30)
print(f"   STATS CARD: {name.upper()}")
print("=" * 30)
print(f"Height: {height} cm  ({height_m} m)")
print(f"Weight: {weight} kg")
print("=" * 30)
```

---

## 🎮 Bridge to Games

You've just unlocked something huge.

**Games use numbers all the time:**

- 🎮 High scores
- ❤️ Lives remaining
- ⏱️ Time left
- 💰 Coins collected
- 📈 Experience points

Without `int()` and `float()`, your game couldn't keep score — or even know how many lives a player has left!

```python
# A tiny taste of what's coming in Lesson 8...
player_name = input("Enter your name: ")
lives       = int(input("How many lives do you want? (1-5) "))

print(f"Welcome, {player_name}! You have {lives} lives.")
print(f"Game begins in 3... 2... 1... GO!")
```

> _BrightByte says: "Every game you've ever played — from Minecraft to Roblox to Wordle — handles numbers like this under the hood. Now you know the secret!"_

---

## 📝 Key Points to Remember

### The Conversion Formula

```python
# Convert to whole number
number = int(input("Enter a number: "))

# Convert to decimal number
decimal = float(input("Enter a decimal: "))
```

### Quick Reference

| Situation | Code |
|-----------|------|
| Get a whole number from user | `age = int(input("How old are you? "))` |
| Get a decimal from user | `score = float(input("Enter your score: "))` |
| Maths with converted number | `double = score * 2` |
| Use result in f-string | `print(f"Double: {double}")` |

### Vocabulary

| Word | Meaning |
|------|---------|
| **string** | Text data — `"hello"`, `"12"`, `"abc"` |
| **int** | A whole number — `12`, `100`, `0` |
| **float** | A decimal number — `3.14`, `9.5`, `0.7` |
| **TypeError** | Error when Python gets the wrong type of data |
| **type conversion** | Changing data from one type to another (e.g. string → int) |

---

## 🐛 Common Bugs to Watch For

| Bug | Example | Fix |
|-----|---------|-----|
| Forgot to convert | `age = input(...)` then `age + 1` | Wrap with `int()` |
| Used `int()` on a decimal | `int("3.5")` | Use `float()` instead |
| Wrong brackets | `int input("Age: ")` | `int(input("Age: "))` |
| Mixed types in print with `+` | `"Age: " + age` where age is int | Use f-string: `f"Age: {age}"` |

> **TypeError alert!** If you see `TypeError: can only concatenate str (not "int") to str`, it means you're trying to mix text and numbers with `+`. Switch to f-strings!

---

## 🏠 Homework: Number Wizard Calculator

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### The Assignment

Build a **Number Wizard Calculator** that:

1. Asks the user at least **3 questions** that need number answers
2. Converts each answer with `int()` or `float()`
3. Performs at least **2 calculations**
4. Prints a neat results "card" using f-strings and borders

### Starter Template

```python
# ================================
# NUMBER WIZARD CALCULATOR
# By: [Your Name]
# ================================

print("🔢" * 15)
print("   WELCOME TO NUMBER WIZARD!")
print("🔢" * 15)
print("")

# === COLLECT NUMBERS ===
name = input("What is your name? ")
num1 = int(input("Enter your first number: "))
num2 = int(input("Enter your second number: "))
# TODO: add a third question

# === CALCULATIONS ===
total   = num1 + num2
product = num1 * num2
# TODO: add another calculation

# === RESULTS CARD ===
print("")
print("=" * 30)
print(f"   RESULTS FOR {name.upper()}")
print("=" * 30)
print(f"Sum: {total}")
print(f"Product: {product}")
print("=" * 30)
```

### Grading Rubric

| Criteria | Points |
|----------|--------|
| 3+ input() calls with numbers | ⭐⭐⭐ |
| Correct use of int() or float() | ⭐⭐ |
| 2+ calculations performed | ⭐⭐ |
| Results displayed with f-strings | ⭐⭐ |
| Code runs without errors | ⭐ |
| **Total** | **10 points** |

### Bonus Points

- +1 for using `float()` for a decimal result
- +1 for a creative decorated results card
- +1 for 4+ different calculations

---

## 🎉 You Now Have Input Superpower!

**What you can now do:**

- ✅ Explain why `input()` always returns a string
- ✅ Use `int()` to convert string input to a whole number
- ✅ Use `float()` to convert string input to a decimal
- ✅ Perform calculations with converted numbers
- ✅ Recognise and fix a `TypeError`
- ✅ Build programs that work with both words AND numbers

> _BrightByte says: "Before today, your programs could talk to users but couldn't DO anything with numbers. Now they can count, calculate, and compute. You've just levelled up from 'input programmer' to 'calculating programmer'. Next stop: game builder! 🔢🎮"_

---

_KidsLearnAI - Empowering the Next Generation with AI Education_
*www.kidslearnai.ca*
_Instagram: @kids_learn_ai_

---

_Remember: Every time you see int() or float() in a program, someone knew exactly why they needed it. Now you know too!_
