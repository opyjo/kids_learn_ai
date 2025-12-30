# Level 1, Lesson 3: Numbers and Math 🔢

**Course:** Python Foundations I - Getting Started  
**Age Group:** 9-13 years old

---

## 🎯 What You'll Learn Today

- How to do math operations in Python (add, subtract, multiply, divide)
- The difference between integers and floats (decimals)
- Special math operations: floor division, modulo, and exponents
- How to use variables in math calculations
- Order of operations in Python

---

## 🤖 BrightByte's Welcome!

> _"Hey there, math wizard! 🧙‍♂️ Did you know Python is like having a super-powered calculator that never makes mistakes? Today we're going to turn Python into your personal math assistant. Whether you're calculating game scores, splitting pizza fairly, or figuring out how many days until your birthday—Python can do it all in a flash! Let's crunch some numbers!"_

---

## 🧮 Python: Your Super Calculator

Python can do math WAY faster than any human. Let's start with the basics!

### The Basic Math Operators

| Operator | Name           | Example  | Result |
| -------- | -------------- | -------- | ------ |
| `+`      | Addition       | `5 + 3`  | `8`    |
| `-`      | Subtraction    | `10 - 4` | `6`    |
| `*`      | Multiplication | `6 * 7`  | `42`   |
| `/`      | Division       | `20 / 4` | `5.0`  |

**Notice:** Division always gives a decimal (float) result, even if it divides evenly!

### Example 1: Basic Math

```python
print(5 + 3)      # Addition: 8
print(10 - 4)     # Subtraction: 6
print(6 * 7)      # Multiplication: 42
print(20 / 4)     # Division: 5.0
```

### Example 2: Using Variables for Math

```python
apples = 10
eaten = 3
remaining = apples - eaten

print("I started with " + str(apples) + " apples")
print("I ate " + str(eaten) + " apples")
print("I have " + str(remaining) + " apples left")
```

**Output:**

```
I started with 10 apples
I ate 3 apples
I have 7 apples left
```

---

## 🔢 Integers vs Floats

Remember from last lesson? Python has two types of numbers:

### Integers (int)

Whole numbers—no decimal point!

```python
age = 10
score = 100
lives = 3
temperature = -5    # Negative numbers work too!
```

### Floats

Numbers with decimal points.

```python
price = 19.99
pi = 3.14159
average = 85.5
temperature = 98.6
```

### When Does Python Use Each?

| Operation            | Result Type      | Example           |
| -------------------- | ---------------- | ----------------- |
| Integer + Integer    | Integer          | `5 + 3` → `8`     |
| Integer - Integer    | Integer          | `10 - 4` → `6`    |
| Integer \* Integer   | Integer          | `6 * 7` → `42`    |
| Any division `/`     | **Always Float** | `10 / 2` → `5.0`  |
| Float in calculation | Float            | `5 + 2.5` → `7.5` |

**Key Point:** If you use `/` for division, you ALWAYS get a float!

```python
print(10 / 2)     # 5.0 (float, not 5)
print(10 / 3)     # 3.3333... (float)
```

---

## ⚡ Special Math Operators

Python has some extra math tricks that are super useful!

### Floor Division: `//`

Divides and rounds DOWN to the nearest whole number.

```python
print(17 / 5)     # Regular division: 3.4
print(17 // 5)    # Floor division: 3
```

**When to use it:** When you need whole numbers only!

```python
# How many complete teams of 5 can we make from 17 people?
people = 17
team_size = 5
complete_teams = people // team_size
print("Complete teams: " + str(complete_teams))  # 3 teams
```

### Modulo (Remainder): `%`

Gives you the REMAINDER after division.

```python
print(17 % 5)     # Remainder: 2 (because 17 = 5*3 + 2)
print(10 % 3)     # Remainder: 1 (because 10 = 3*3 + 1)
print(20 % 4)     # Remainder: 0 (because 20 divides evenly)
```

**When to use it:**

```python
# How many people are left over after making teams?
people = 17
team_size = 5
leftover = people % team_size
print("People without a team: " + str(leftover))  # 2 people
```

**Cool trick:** Check if a number is even or odd!

```python
number = 7
remainder = number % 2

if remainder == 0:
    print("Even!")
else:
    print("Odd!")
```

### Exponents (Powers): `**`

Raises a number to a power. `2 ** 3` means 2 × 2 × 2.

```python
print(2 ** 3)     # 2 to the power of 3 = 8
print(5 ** 2)     # 5 squared = 25
print(10 ** 4)    # 10 to the 4th = 10000
print(3 ** 3)     # 3 cubed = 27
```

**Real-world example:**

```python
# Calculate the area of a square
side = 5
area = side ** 2
print("Area: " + str(area) + " square units")  # 25 square units
```

---

## 📐 Order of Operations: PEMDAS

Python follows the same math rules you learned in school!

**P**arentheses → **E**xponents → **M**ultiplication/**D**ivision → **A**ddition/**S**ubtraction

### Examples

```python
# Without parentheses
result = 2 + 3 * 4
print(result)     # 14 (multiplication first: 3*4=12, then 2+12=14)

# With parentheses
result = (2 + 3) * 4
print(result)     # 20 (parentheses first: 2+3=5, then 5*4=20)
```

### More Examples

```python
print(10 - 2 * 3)       # 4 (multiply first: 10 - 6)
print((10 - 2) * 3)     # 24 (parentheses first: 8 * 3)

print(2 ** 3 + 1)       # 9 (exponent first: 8 + 1)
print(2 ** (3 + 1))     # 16 (parentheses first: 2^4)

print(20 / 4 + 3)       # 8.0 (division first: 5 + 3)
print(20 / (4 + 3))     # 2.857... (parentheses first: 20/7)
```

> _BrightByte says: "When in doubt, use parentheses! They make your code clearer and ensure Python does math in the order YOU want!"_

---

## 🎮 Math with Variables: Game Examples

### Example 1: Score Calculator

```python
# Game scoring system
enemies_defeated = 15
coins_collected = 100
bonus_multiplier = 2

# Calculate total score
enemy_points = enemies_defeated * 10
coin_points = coins_collected * 1
bonus_points = 50 * bonus_multiplier

total_score = enemy_points + coin_points + bonus_points

print("=== GAME OVER ===")
print("Enemies: " + str(enemy_points) + " points")
print("Coins: " + str(coin_points) + " points")
print("Bonus: " + str(bonus_points) + " points")
print("TOTAL: " + str(total_score) + " points")
```

**Output:**

```
=== GAME OVER ===
Enemies: 150 points
Coins: 100 points
Bonus: 100 points
TOTAL: 350 points
```

### Example 2: Pizza Party Calculator

```python
# Pizza party planning!
total_slices = 32
number_of_friends = 5

slices_each = total_slices // number_of_friends
leftover_slices = total_slices % number_of_friends

print("🍕 PIZZA PARTY 🍕")
print("Total slices: " + str(total_slices))
print("Number of friends: " + str(number_of_friends))
print("Each person gets: " + str(slices_each) + " slices")
print("Leftover slices: " + str(leftover_slices))
```

**Output:**

```
🍕 PIZZA PARTY 🍕
Total slices: 32
Number of friends: 5
Each person gets: 6 slices
Leftover slices: 2
```

### Example 3: Savings Goal Tracker

```python
# Savings calculator
goal = 100
saved_already = 35
weekly_allowance = 10

still_needed = goal - saved_already
weeks_to_go = still_needed // weekly_allowance

print("💰 SAVINGS TRACKER 💰")
print("Goal: $" + str(goal))
print("Saved so far: $" + str(saved_already))
print("Still needed: $" + str(still_needed))
print("Weeks until goal: " + str(weeks_to_go))
```

---

## 🔄 Updating Variables with Math

You can use a variable's current value to calculate its new value!

### The Long Way

```python
score = 100
score = score + 50    # Take current score (100), add 50, store result (150)
print(score)          # 150
```

### The Shortcut Way

Python has shortcuts for updating variables:

| Long Version | Shortcut | Meaning           |
| ------------ | -------- | ----------------- |
| `x = x + 5`  | `x += 5` | Add 5 to x        |
| `x = x - 3`  | `x -= 3` | Subtract 3 from x |
| `x = x * 2`  | `x *= 2` | Multiply x by 2   |
| `x = x / 4`  | `x /= 4` | Divide x by 4     |

### Example: Level Up!

```python
# Starting stats
health = 100
attack = 10
level = 1

print("=== BEFORE LEVEL UP ===")
print("Level: " + str(level))
print("Health: " + str(health))
print("Attack: " + str(attack))

# Level up! Stats increase!
level += 1          # level = level + 1
health += 20        # health = health + 20
attack *= 2         # attack = attack * 2

print("")
print("=== AFTER LEVEL UP ===")
print("Level: " + str(level))
print("Health: " + str(health))
print("Attack: " + str(attack))
```

**Output:**

```
=== BEFORE LEVEL UP ===
Level: 1
Health: 100
Attack: 10

=== AFTER LEVEL UP ===
Level: 2
Health: 120
Attack: 20
```

---

## 🧪 Converting Between Types

Sometimes you need to convert numbers between types.

### int() - Convert to Integer

Removes the decimal part (doesn't round—just chops it off!)

```python
print(int(3.7))      # 3 (not 4!)
print(int(9.99))     # 9
print(int(-2.5))     # -2
```

### float() - Convert to Float

Adds a decimal point.

```python
print(float(5))      # 5.0
print(float(100))    # 100.0
```

### round() - Round a Number

Rounds to the nearest whole number (or specified decimal places).

```python
print(round(3.7))        # 4
print(round(3.2))        # 3
print(round(3.14159, 2)) # 3.14 (round to 2 decimal places)
```

---

## 📝 Key Takeaways

### Math Operators Cheat Sheet

| Operator | Name               | Example   | Result |
| -------- | ------------------ | --------- | ------ |
| `+`      | Addition           | `5 + 3`   | `8`    |
| `-`      | Subtraction        | `10 - 4`  | `6`    |
| `*`      | Multiplication     | `6 * 7`   | `42`   |
| `/`      | Division           | `15 / 4`  | `3.75` |
| `//`     | Floor Division     | `15 // 4` | `3`    |
| `%`      | Modulo (Remainder) | `15 % 4`  | `3`    |
| `**`     | Exponent           | `2 ** 4`  | `16`   |

### Shortcut Operators

| Shortcut | Meaning     |
| -------- | ----------- |
| `x += 5` | `x = x + 5` |
| `x -= 3` | `x = x - 3` |
| `x *= 2` | `x = x * 2` |
| `x /= 4` | `x = x / 4` |

### Vocabulary Words

- **Integer (int):** A whole number without decimals
- **Float:** A number with a decimal point
- **Operator:** A symbol that performs an operation (+, -, \*, /, etc.)
- **Modulo:** The remainder after division (%)
- **Floor Division:** Division that rounds down to a whole number (//)
- **Exponent:** A number raised to a power (\*\*)
- **PEMDAS:** Order of operations (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction)

---

## 🏠 Homework: The Ultimate Calculator

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### Instructions

Create a Python program that works like a multi-purpose calculator. Your program must solve AT LEAST 5 different real-world math problems using variables and math operators.

### Requirements

1. **Use at least 5 different math problems** (see ideas below)
2. **Use variables** to store all numbers (don't just print calculations)
3. **Use at least 4 different operators** (+, -, \*, /, //, %, \*\*)
4. **Display results clearly** with descriptive text
5. **Include at least one shortcut operator** (+=, -=, \*=, /=)

### Problem Ideas (Choose 5 or more!)

**Money & Shopping:**

- Calculate the total cost of items
- Figure out change from a purchase
- Calculate a discount percentage
- Split a bill between friends

**Games & Points:**

- Calculate a final game score
- Track health/damage in a battle
- Calculate XP needed to level up
- Figure out win/loss ratios

**Time & Distance:**

- Convert hours to minutes
- Calculate travel time
- Figure out days until an event

**Food & Recipes:**

- Double or triple a recipe
- Split pizza/candy evenly
- Calculate calories

**School & Grades:**

- Calculate an average grade
- Figure out points needed to pass
- Convert percentages

### Example Output

```
╔═══════════════════════════════════════╗
    🧮 MY ULTIMATE CALCULATOR 🧮
╚═══════════════════════════════════════╝

--- PROBLEM 1: Shopping Trip ---
Item 1 (game): $45
Item 2 (snack): $5
Total before tax: $50
Tax (13%): $6.5
Final total: $56.5

--- PROBLEM 2: Pizza Party ---
Total slices: 24
People: 7
Slices each: 3
Leftover: 3

--- PROBLEM 3: Savings Goal ---
Goal: $200
Current savings: $75
Weekly savings: $15
Weeks needed: 9

--- PROBLEM 4: Game Score ---
Starting score: 0
Round 1 bonus: +100
Round 2 bonus: +150
Multiplier: x2
Final score: 500

--- PROBLEM 5: Area Calculator ---
Room length: 12 feet
Room width: 10 feet
Area: 120 square feet

═══════════════════════════════════════
```

### Starter Code

```python
# The Ultimate Calculator
# By: [Your Name]

print("╔═══════════════════════════════════════╗")
print("    🧮 MY ULTIMATE CALCULATOR 🧮")
print("╚═══════════════════════════════════════╝")
print("")

# --- PROBLEM 1: [Your title here] ---
print("--- PROBLEM 1: ______ ---")
# Create your variables here

# Do your calculations here

# Print your results here

print("")

# --- PROBLEM 2: [Your title here] ---
print("--- PROBLEM 2: ______ ---")
# Continue with more problems...

# Remember to use at least 4 different operators!
# Remember to use at least one shortcut (+=, -=, *=, /=)!
```

### Bonus Challenges ⭐

- Add a problem that uses ALL 7 math operators
- Create a "before and after" calculation (like leveling up stats)
- Use `round()` to make decimal answers look nicer
- Add ASCII art or emojis to make it visually appealing
- Include a problem with exponents (like calculating area of a square)

### How to Submit

1. Write your code on Trinket
2. Make sure it runs without errors!
3. Click the **Share** button
4. Copy the link
5. Share the link with your instructor

---

## 🌟 Next Lesson Preview

**Lesson 4: Text and Strings**

Next week, you'll become a text manipulation master! Learn how to work with text in Python—combine strings, make text uppercase or lowercase, find letters, and more!

Sneak peek:

```python
message = "hello world"
print(message.upper())    # HELLO WORLD
print(message.title())    # Hello World
print(len(message))       # 11 characters
```

Get ready to play with words! 📝

---

## 🎉 Awesome Work Today!

You turned Python into a super-powered calculator! Now you can solve real math problems with code.

> _BrightByte says: "Math + Python = Superpowers! 🦸 The more you practice, the faster you'll be at turning real-world problems into code. See you next week!"_

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*
