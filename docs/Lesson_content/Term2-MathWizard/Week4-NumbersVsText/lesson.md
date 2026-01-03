---
title: "Numbers vs Text!"
description: "Learn to convert text to numbers using int() - make your calculators actually work!"
difficulty: "beginner"
order_index: 4
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # Numbers vs Text!
  # Converting text input to numbers

  # Ask for a number (but it comes as text!)
  age_text = input("How old are you? ")
  print("Type of age_text:", type(age_text))
  
  # Convert to a number
  age = int(age_text)
  print("Type of age:", type(age))
  print("In 10 years, you'll be", age + 10, "years old!")

  # Try your own conversions!
class_activities: |
  ## 🎮 Class Activity: The Age Calculator Challenge!

  1. Partner up with a classmate
  2. Create a program that asks for someone's age
  3. Convert it to a number using int()
  4. Calculate: How old will they be in 5 years? 10 years? 20 years?
  5. Show all the results!

  **Challenge:** Add a birth year calculator - if someone is 10 years old, what year were they born?
take_home_assignment: |
  ## 📚 Homework: My First Calculator

  **Assignment:** Create a Python program that asks for two numbers and performs calculations!

  **Requirements:**
  1. Ask for two numbers using input()
  2. Convert both to numbers using int()
  3. Add, subtract, multiply, and divide the numbers
  4. Display all four results nicely
  5. Add comments explaining each step
  6. Code must run without errors

  **Example output:**
  ```
  Enter first number: 15
  Enter second number: 4
  15 + 4 = 19
  15 - 4 = 11
  15 × 4 = 60
  15 ÷ 4 = 3.75
  ```

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI systems constantly convert between text and numbers! When you type "25" in a calculator app, it converts that text to the number 25 so it can do math. When AI reads your messages, it converts text into numbers to understand them.

  You're learning the same data conversion that powers every AI system!
---
# Term 2, Lesson 4: Numbers vs Text! 🔢

**Course:** Term 2: Math Wizard  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Understand the difference between text (strings) and numbers
- Convert text to numbers using `int()`
- Build calculators that actually do math with user input
- Handle the common error of trying to do math with text
- Create fully interactive math programs

---

## 🤖 Welcome from BrightByte!

> _"Hey there! Last week, you learned how to ask questions with input(). That was awesome! But did you notice something? When you asked for a number and tried to do math with it, things got weird? That's because input() gives you TEXT, not numbers! Today, we're going to learn how to convert that text into REAL numbers so you can build actual calculators!"_

### What's the Problem?

Last week you might have tried:
```python
number1 = input("Enter a number: ")
number2 = input("Enter a number: ")
print(number1 + number2)  # This doesn't work right!
```

If you entered `5` and `3`, you probably got `53` instead of `8`! That's because Python was adding TEXT, not numbers!

> _BrightByte says: "This is one of the most important lessons in programming! Understanding the difference between text and numbers is crucial. Once you master this, you can build REAL calculators and interactive math programs!"_

---

## 📝 Text vs Numbers

### What Is Text (String)?

In programming, text is called a **string**. When you use `input()`, you ALWAYS get a string, even if you type numbers!

**Examples of strings:**
- `"Hello"` — text
- `"5"` — also text! (Even though it looks like a number)
- `"123"` — still text!

### What Is a Number (Integer)?

A number is an actual number that Python can do math with.

**Examples of numbers:**
- `5` — number
- `123` — number
- `-10` — number (can be negative!)

### The Key Difference

| Text (String) | Number (Integer) |
| ------------- | ---------------- |
| `"5"`         | `5`              |
| Has quotes    | No quotes        |
| Can't do math | Can do math      |
| `"5" + "3"` = `"53"` | `5 + 3` = `8` |

---

## 🔄 Converting Text to Numbers: `int()`

### What Is `int()`?

`int()` is Python's way of converting text (strings) into numbers (integers). The word "int" stands for "integer" (a whole number).

### Example 1: Simple Conversion

```python
age_text = input("How old are you? ")
age = int(age_text)
print("In 10 years, you'll be", age + 10, "years old!")
```

**What happens:**
1. `input()` gives us text: `"10"` (with quotes = text)
2. `int()` converts it: `10` (no quotes = number)
3. Now we can do math: `10 + 10 = 20`

**Example Output:**
```
How old are you? 10
In 10 years, you'll be 20 years old!
```

### Example 2: The Problem Without `int()`

**Without conversion (WRONG):**
```python
age = input("How old are you? ")
print("In 10 years, you'll be", age + 10)
```

**Error!** Python can't add a number to text!

**With conversion (RIGHT):**
```python
age_text = input("How old are you? ")
age = int(age_text)
print("In 10 years, you'll be", age + 10)
```

**Works perfectly!**

### Example 3: Building a Real Calculator

```python
print("Welcome to My Calculator!")
number1_text = input("Enter the first number: ")
number2_text = input("Enter the second number: ")

# Convert to numbers
number1 = int(number1_text)
number2 = int(number2_text)

# Now we can do math!
print(number1, "+", number2, "=", number1 + number2)
print(number1, "-", number2, "=", number1 - number2)
print(number1, "×", number2, "=", number1 * number2)
print(number1, "÷", number2, "=", number1 / number2)
```

**Example Output:**
```
Welcome to My Calculator!
Enter the first number: 15
Enter the second number: 4
15 + 4 = 19
15 - 4 = 11
15 × 4 = 60
15 ÷ 4 = 3.75
```

---

## 🎯 Step-by-Step: How Conversion Works

### The Process

1. **Ask for input** — `input()` gives you text
2. **Convert to number** — `int()` turns text into a number
3. **Do math** — Now you can calculate!

### Visual Example

```python
# Step 1: Get text
age_text = input("How old are you? ")  # User types: 10
# age_text = "10"  (text, with quotes)

# Step 2: Convert to number
age = int(age_text)
# age = 10  (number, no quotes)

# Step 3: Do math!
future_age = age + 10
# future_age = 20
```

---

## 🎮 Practice Time!

### Challenge 1: Age Calculator

Create a program that:
- Asks for someone's age
- Converts it to a number
- Calculates their age in 5, 10, and 20 years

```python
age_text = input("How old are you? ")
age = int(age_text)

print("In 5 years, you'll be", age + 5)
print("In 10 years, you'll be", age + 10)
print("In 20 years, you'll be", age + 20)
```

### Challenge 2: Simple Calculator

Create a program that:
- Asks for two numbers
- Converts both to numbers
- Adds, subtracts, multiplies, and divides them

```python
print("Simple Calculator")
num1_text = input("First number: ")
num2_text = input("Second number: ")

num1 = int(num1_text)
num2 = int(num2_text)

print(num1, "+", num2, "=", num1 + num2)
print(num1, "-", num2, "=", num1 - num2)
print(num1, "×", num2, "=", num1 * num2)
print(num1, "÷", num2, "=", num1 / num2)
```

### Challenge 3: The Birthday Calculator

Create a program that:
- Asks for someone's age
- Asks for the current year
- Calculates their birth year

```python
age_text = input("How old are you? ")
year_text = input("What year is it? ")

age = int(age_text)
year = int(year_text)

birth_year = year - age
print("You were born in", birth_year, "!")
```

### Challenge 4: The Score Tracker

Create a program that:
- Asks for points scored in game 1
- Asks for points scored in game 2
- Calculates the total and average

```python
print("Score Tracker")
game1_text = input("Points in game 1: ")
game2_text = input("Points in game 2: ")

game1 = int(game1_text)
game2 = int(game2_text)

total = game1 + game2
average = total / 2

print("Total points:", total)
print("Average points:", average)
```

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting to Convert

**Wrong:**
```python
number = input("Enter a number: ")
print(number + 5)  # Error!
```

**Right:**
```python
number_text = input("Enter a number: ")
number = int(number_text)
print(number + 5)  # Works!
```

### Mistake 2: Converting Too Early

**Wrong:**
```python
number = int(input("Enter a number: "))  # This works, but...
print("You entered:", number)  # ...this is fine
```

Actually, this works! But it's harder to debug. Better to do it in steps:

**Right:**
```python
number_text = input("Enter a number: ")
number = int(number_text)
print("You entered:", number)
```

### Mistake 3: Trying to Convert Non-Numbers

**Problem:**
```python
name = input("What's your name? ")
age = int(name)  # Error if name isn't a number!
```

**Solution:** Only use `int()` on text that represents a number!

---

## 📝 Key Takeaways

### The Conversion Process

| Step | Code                          | What You Get        |
| ---- | ----------------------------- | ------------------- |
| 1    | `input("Number? ")`           | Text: `"5"`         |
| 2    | `int(text)`                   | Number: `5`         |
| 3    | Do math!                      | `5 + 3 = 8`         |

### Important Things to Remember

1. **`input()` always gives text** — Even if you type numbers
2. **Use `int()` to convert** — Turns text into numbers
3. **Then you can do math** — Numbers can be added, subtracted, etc.
4. **Convert each input** — If you ask for 2 numbers, convert both!
5. **Only convert numbers** — Don't try `int("hello")`!

### Vocabulary Words

| Word           | Definition                                    | Example                    |
| -------------- | --------------------------------------------- | -------------------------- |
| **String**     | Text in programming (has quotes)              | `"5"`, `"hello"`           |
| **Integer**    | A whole number (no quotes)                    | `5`, `10`, `-3`            |
| **int()**      | Function that converts text to number         | `int("5")` = `5`           |
| **Convert**    | To change from one type to another            | Convert text to number     |
| **Type**       | The kind of data (text vs number)             | String type vs int type    |

---

## 🌟 Next Lesson Preview

**Week 5: Math Challenges!**

Next week, we'll put everything together! You'll build real-world calculators like:
- Age calculators
- Tip calculators
- Distance calculators
- And more!

Get ready to solve fun math problems with Python! 🧮

---

## 🎉 Great Job!

You just learned one of the most important skills in programming!

**What you accomplished today:**

- ✅ Understood the difference between text and numbers
- ✅ Learned how to use `int()` to convert text to numbers
- ✅ Built calculators that actually work with user input
- ✅ Fixed the common error of trying to do math with text
- ✅ Created fully interactive math programs

> _BrightByte says: "WOW! You just learned a CRITICAL programming skill! Understanding data types (text vs numbers) is what separates beginners from real programmers. Now you can build actual calculators that work with user input! Next week, we'll solve real-world math problems. You're doing AMAZING!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these fun challenges:

1. **The Year Calculator:** Ask for age and current year, calculate birth year and year they'll turn 18
2. **The Money Calculator:** Ask for dollars and cents separately, convert and add them
3. **The Time Calculator:** Ask for hours and minutes, convert to total minutes
4. **The Distance Calculator:** Ask for miles, convert to kilometers (multiply by 1.6)

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_

