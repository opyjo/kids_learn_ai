# Level 1, Lesson 3: Teacher Guide

## Numbers and Math 🔢

**Course:** Python Foundations I - Getting Started  
**Duration:** 60 minutes  
**Age Group:** 9-13 years old  
**Materials Needed:** Trinket accounts, screen sharing, student notes handout

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Perform basic math operations in Python (+, -, \*, /)
2. Explain the difference between integers and floats
3. Use special operators: floor division (//), modulo (%), and exponents (\*\*)
4. Apply the order of operations (PEMDAS) in Python expressions
5. Use shortcut operators (+=, -=, \*=, /=) to update variables
6. Solve real-world math problems using Python

---

## 📋 Lesson Outline

| Section              | Time   | Activity Type     |
| -------------------- | ------ | ----------------- |
| Review & Warm-Up     | 5 min  | Quick quiz        |
| Basic Math Operators | 12 min | Live Coding Demo  |
| Integers vs Floats   | 8 min  | Discussion        |
| Special Operators    | 12 min | Interactive Demo  |
| Order of Operations  | 8 min  | Practice Problems |
| Guided Practice      | 10 min | Hands-on Coding   |
| Wrap-Up & Homework   | 5 min  | Review            |

---

## 🟢 Section 1: Review & Warm-Up (5 minutes)

### Quick Review from Lesson 2

**Ask students:**

- _"What is a variable?"_ (A named container that stores a value)
- _"What's the difference between a string and a number?"_ (Strings have quotes, numbers don't)
- _"What do we use to convert a number to a string?"_ (str())

### Warm-Up Challenge

Display this code and ask what it will print:

```python
player = "Alex"
score = 100
print("Player: " + player)
print("Score: " + str(score))
```

**Transition:** _"Great job! You remember variables perfectly. Now, what if we wanted to ADD to that score? Or calculate how many points until the next level? Today Python becomes your personal calculator!"_

---

## 🟢 Section 2: Basic Math Operators (12 minutes)

### Introduction

**Say:** _"Python can do math instantly—way faster than any human or regular calculator. Let's start with the four basic operations you already know."_

### Demo 1: The Four Basic Operators (5 min)

Write on board/screen:

| Operator | Name           | Example  |
| -------- | -------------- | -------- |
| `+`      | Addition       | `5 + 3`  |
| `-`      | Subtraction    | `10 - 4` |
| `*`      | Multiplication | `6 * 7`  |
| `/`      | Division       | `20 / 4` |

**Live code:**

```python
print(5 + 3)      # 8
print(10 - 4)     # 6
print(6 * 7)      # 42
print(20 / 4)     # 5.0  <-- Point this out!
```

**Key Point:** _"Notice that division gave us 5.0, not 5. Division in Python ALWAYS gives a decimal result. We'll talk about why in a minute."_

### Demo 2: Math with Variables (4 min)

```python
apples = 10
eaten = 3
remaining = apples - eaten

print("Started with: " + str(apples))
print("Ate: " + str(eaten))
print("Remaining: " + str(remaining))
```

**Ask:** _"What if I wanted to eat 2 more apples? How would I update the code?"_

### Demo 3: Building a Simple Calculator (3 min)

```python
# Simple calculator
num1 = 15
num2 = 4

print("Addition: " + str(num1 + num2))
print("Subtraction: " + str(num1 - num2))
print("Multiplication: " + str(num1 * num2))
print("Division: " + str(num1 / num2))
```

**Interactive:** Change num1 and num2 to student-suggested numbers and run again.

---

## 🟢 Section 3: Integers vs Floats (8 minutes)

### Review the Two Number Types

**Say:** _"Remember, Python has two types of numbers. Let's make sure we understand when each one appears."_

**Write on board:**

| Type          | Description     | Examples              |
| ------------- | --------------- | --------------------- |
| Integer (int) | Whole numbers   | `5`, `100`, `-3`, `0` |
| Float         | Decimal numbers | `3.14`, `9.99`, `5.0` |

### When Does Python Use Each?

**Demonstrate with live code:**

```python
# Integer results
print(5 + 3)      # 8 (int + int = int)
print(10 - 4)     # 6 (int - int = int)
print(6 * 7)      # 42 (int * int = int)

# Float results
print(10 / 2)     # 5.0 (division ALWAYS gives float!)
print(10 / 3)     # 3.333...
print(5 + 2.5)    # 7.5 (if ANY number is float, result is float)
```

**Key Rule:** _"If you see a / for division, the answer will ALWAYS be a float, even if it divides evenly!"_

### Quick Check

**Ask:** _"What type will each of these results be?"_

1. `8 + 2` → Integer (10)
2. `8 / 2` → Float (4.0)
3. `8 * 2.0` → Float (16.0)
4. `8 - 3` → Integer (5)

---

## 🟢 Section 4: Special Operators (12 minutes)

### Introduce the Three Special Operators

**Say:** _"Python has three special math operators that are SUPER useful. These might be new to you!"_

### Floor Division: // (4 min)

**Explain:** _"Floor division divides and then rounds DOWN to the nearest whole number."_

```python
print(17 / 5)     # Regular division: 3.4
print(17 // 5)    # Floor division: 3
```

**Real-world example:**

```python
# How many complete teams of 5 from 17 people?
people = 17
team_size = 5
complete_teams = people // team_size
print("Complete teams: " + str(complete_teams))  # 3
```

**Ask:** _"When would you want a whole number instead of a decimal?"_

Expected answers: counting people, teams, items, levels, etc.

### Modulo (Remainder): % (4 min)

**Explain:** _"Modulo gives you the REMAINDER after division. It's like asking 'what's left over?'"_

```python
print(17 % 5)     # 2 (17 = 5×3 + 2)
print(10 % 3)     # 1 (10 = 3×3 + 1)
print(20 % 4)     # 0 (divides evenly!)
```

**Real-world example:**

```python
# How many people left over after making teams?
people = 17
team_size = 5
leftover = people % team_size
print("Leftover people: " + str(leftover))  # 2
```

**Cool trick:** _"Modulo is great for checking even/odd!"_

```python
print(10 % 2)     # 0 (even - no remainder)
print(7 % 2)      # 1 (odd - has remainder)
```

### Exponents: \*\* (4 min)

**Explain:** _"Two asterisks means 'to the power of.' It's for exponents!"_

```python
print(2 ** 3)     # 2 × 2 × 2 = 8
print(5 ** 2)     # 5 squared = 25
print(10 ** 4)    # 10,000
```

**Real-world example:**

```python
# Area of a square
side = 5
area = side ** 2
print("Area: " + str(area) + " square units")
```

### Summary Table

Display this summary:

| Operator | Name           | Example   | Result |
| -------- | -------------- | --------- | ------ |
| `//`     | Floor Division | `17 // 5` | `3`    |
| `%`      | Modulo         | `17 % 5`  | `2`    |
| `**`     | Exponent       | `2 ** 3`  | `8`    |

---

## 🟢 Section 5: Order of Operations (8 minutes)

### PEMDAS Review

**Ask:** _"Who remembers PEMDAS from math class?"_

Write on board:

- **P**arentheses
- **E**xponents
- **M**ultiplication / **D**ivision (left to right)
- **A**ddition / **S**ubtraction (left to right)

**Say:** _"Python follows the EXACT same rules!"_

### Interactive Examples

**Show each example and have students predict the answer BEFORE running:**

```python
# Example 1
print(2 + 3 * 4)      # Students predict, then reveal: 14
```

**Explain:** _"Multiplication happens first: 3 × 4 = 12, then 2 + 12 = 14"_

```python
# Example 2
print((2 + 3) * 4)    # Students predict, then reveal: 20
```

**Explain:** _"Parentheses first: 2 + 3 = 5, then 5 × 4 = 20"_

```python
# Example 3
print(10 - 6 / 2)     # Students predict, then reveal: 7.0
```

**Explain:** _"Division first: 6 / 2 = 3, then 10 - 3 = 7.0"_

```python
# Example 4
print(2 ** 3 + 1)     # Students predict, then reveal: 9
```

**Explain:** _"Exponent first: 2³ = 8, then 8 + 1 = 9"_

### Quick Quiz (Have students call out answers)

1. `5 + 2 * 3` = ? (11)
2. `(5 + 2) * 3` = ? (21)
3. `20 / 4 - 3` = ? (2.0)
4. `20 / (4 - 3)` = ? (20.0)

**Golden Rule:** _"When in doubt, use parentheses!"_

---

## 🟢 Section 6: Shortcut Operators (Part of Demo)

### Introduction

**Say:** _"What if you want to add 10 points to a player's score? You could do it the long way, but Python has shortcuts!"_

### The Long Way vs Shortcuts

**Demonstrate:**

```python
# Long way
score = 100
score = score + 50
print(score)  # 150

# Shortcut way
score = 100
score += 50
print(score)  # 150
```

### All the Shortcuts

| Long Version | Shortcut |
| ------------ | -------- |
| `x = x + 5`  | `x += 5` |
| `x = x - 3`  | `x -= 3` |
| `x = x * 2`  | `x *= 2` |
| `x = x / 4`  | `x /= 4` |

### Example: Level Up System

```python
health = 100
attack = 10
level = 1

print("=== BEFORE ===")
print("Level: " + str(level))
print("Health: " + str(health))
print("Attack: " + str(attack))

# Level up!
level += 1
health += 20
attack *= 2

print("")
print("=== AFTER ===")
print("Level: " + str(level))
print("Health: " + str(health))
print("Attack: " + str(attack))
```

---

## 🟢 Section 7: Guided Practice (10 minutes)

### Practice 1: Pizza Party Calculator (4 min)

Have students type along:

```python
# Pizza Party Calculator
total_slices = 24
number_of_friends = 5

slices_each = total_slices // number_of_friends
leftover = total_slices % number_of_friends

print("🍕 PIZZA PARTY 🍕")
print("Slices per person: " + str(slices_each))
print("Leftover slices: " + str(leftover))
```

**Challenge:** _"What if we have 7 friends instead? Change the number and see what happens!"_

### Practice 2: Savings Calculator (3 min)

```python
# Savings Goal
goal = 100
saved = 35
weekly = 10

needed = goal - saved
weeks = needed // weekly

print("Still need: $" + str(needed))
print("Weeks to goal: " + str(weeks))
```

### Practice 3: Debug Challenge (3 min)

Display this buggy code:

```python
price = 20
tax = price * 0.13
total = price  tax
print("Total: $" str(total))
```

**Bugs to find:**

1. Line 3: Missing `+` operator (`price + tax`)
2. Line 4: Missing `+` before `str(total)`

**Correct code:**

```python
price = 20
tax = price * 0.13
total = price + tax
print("Total: $" + str(total))
```

---

## 🟢 Section 8: Wrap-Up & Homework (5 minutes)

### Quick Review (2 min)

**Rapid-fire questions:**

- _"What does // do?"_ (Floor division - rounds down)
- _"What does % give you?"_ (The remainder)
- _"What does \*\* do?"_ (Exponents/powers)
- _"What's the shortcut for x = x + 5?"_ (x += 5)
- _"What comes first: multiplication or addition?"_ (Multiplication)

### Introduce Homework (2 min)

**Assignment:** "The Ultimate Calculator"

- Solve at least 5 real-world math problems
- Use at least 4 different operators
- Use variables for all numbers
- Include at least one shortcut operator

**Show example output** so students understand expectations.

### Preview Next Lesson (1 min)

**Say:** _"Next week, we'll master TEXT! Learn how to combine strings, make words uppercase, count characters, and more!"_

**Teaser:**

```python
name = "brightbyte"
print(name.upper())    # BRIGHTBYTE
print(name.title())    # Brightbyte
```

---

## 📊 Assessment Checklist

### During Class, Observe:

- [ ] Can student perform basic math operations (+, -, \*, /)?
- [ ] Can student explain the difference between integers and floats?
- [ ] Can student use floor division (//) correctly?
- [ ] Can student use modulo (%) to find remainders?
- [ ] Can student use exponents (\*\*)?
- [ ] Can student apply PEMDAS correctly?
- [ ] Can student use shortcut operators (+=, -=, etc.)?

### Homework Rubric

| Criteria                                | Points  |
| --------------------------------------- | ------- |
| At least 5 different math problems      | 20      |
| Uses at least 4 different operators     | 20      |
| Uses variables for all numbers          | 15      |
| Includes at least one shortcut operator | 10      |
| Clear, descriptive output               | 15      |
| Code runs without errors                | 10      |
| Creativity and effort                   | 10      |
| **Total**                               | **100** |

---

## 🆘 Troubleshooting Common Issues

### "TypeError: can only concatenate str" when printing math results

**Problem:** Student trying to combine number with string without str().

**Solution:**

```python
# Wrong
print("Total: " + total)

# Right
print("Total: " + str(total))
```

### "ZeroDivisionError: division by zero"

**Problem:** Student dividing by zero.

**Solution:** Explain that dividing by zero is impossible in math AND in Python. Check that divisor variables are not zero.

### Confusion between / and //

**Demonstrate side by side:**

```python
print(17 / 5)    # 3.4 (regular division)
print(17 // 5)   # 3 (floor division - whole number)
```

**Analogy:** _"Regular division tells you the exact answer. Floor division tells you 'how many complete times does it fit?'"_

### Confusion about % (Modulo)

**Analogy:** _"If you have 17 cookies and put them in bags of 5, modulo tells you how many cookies are left over that don't fit in a bag."_

```python
cookies = 17
bag_size = 5
full_bags = cookies // bag_size     # 3 full bags
leftover = cookies % bag_size       # 2 cookies left over
```

### Order of Operations Mistakes

**Solution:** Encourage parentheses!

```python
# Unclear
result = 2 + 3 * 4

# Clear
result = 2 + (3 * 4)
```

---

## 🎯 Common Misconceptions to Address

### Misconception 1: "Division always gives a whole number"

**Reality:** In Python 3, `/` ALWAYS returns a float. Use `//` for whole number division.

### Misconception 2: "% means percent"

**Reality:** `%` is the modulo operator (remainder), not percentage. To calculate a percentage, multiply by 0.15 (for 15%), not use %.

### Misconception 3: "\* means 'x' for multiplication"

**Reality:** Python uses `*` for multiplication. The letter `x` is just a variable name.

### Misconception 4: "Exponents use ^"

**Reality:** Python uses `**` for exponents, not `^`. The caret `^` does something completely different (bitwise XOR).

```python
# Wrong
print(2 ^ 3)   # This is NOT 8!

# Right
print(2 ** 3)  # This IS 8
```

---

## 📚 Extension Activities

### For Fast Finishers

1. **Temperature Converter:** Convert Celsius to Fahrenheit

   ```python
   celsius = 25
   fahrenheit = (celsius * 9/5) + 32
   ```

2. **Tip Calculator:** Calculate restaurant tip and split the bill

3. **BMI Calculator:** Calculate Body Mass Index (if age-appropriate)

4. **Compound Interest:** Calculate savings growth over time using exponents

### For Students Who Need More Support

- Focus only on basic operators (+, -, \*, /)
- Use simpler numbers
- Pair with a peer helper
- Provide completed example code to modify

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*
