# Level 1, Lesson 2: Variables - Storing Information 📦

**Course:** Python Foundations I - Getting Started  
**Age Group:** 9-13 years old

---

## 🎯 What You'll Learn Today

- What variables are and why they're useful
- How to create and use variables in Python
- The difference between text (strings) and numbers
- Rules for naming variables properly

---

## 🤖 BrightByte's Welcome!

> _"Welcome back, coder! Last week you learned how to make Python talk with `print()`. But here's a question: what if Python could REMEMBER things? What if it could store your name, your age, or your high score? That's exactly what we're learning today—variables! Think of them as little labeled boxes where Python keeps information. Let's dive in!"_

---

## 📦 What is a Variable?

### The Box Analogy

Imagine you have a bunch of boxes in your room. Each box has:

- A **label** on the outside (so you know what's inside)
- **Something stored** inside the box

Variables work the same way in Python!

| Real Life                            | Python Variable               |
| ------------------------------------ | ----------------------------- |
| Box labeled "Toys" with toys inside  | `toys = "legos, cars, dolls"` |
| Box labeled "Age" with the number 10 | `age = 10`                    |
| Box labeled "Name" with your name    | `name = "Alex"`               |

### Why Use Variables?

Without variables, we'd have to type the same information over and over:

```python
# Without variables (repetitive and annoying!)
print("Hello, Alex!")
print("Alex is learning Python.")
print("Great job, Alex!")
```

With variables, we can store information once and use it many times:

```python
# With variables (much better!)
name = "Alex"
print("Hello, " + name + "!")
print(name + " is learning Python.")
print("Great job, " + name + "!")
```

**Bonus:** If you want to change the name, you only change it in ONE place!

---

## 🔧 Creating Variables

### The Basic Formula

```python
variable_name = value
```

The `=` sign in Python means **"store this value"** (not "equals" like in math).

### Example 1: Storing Text (Strings)

Text in Python is called a **string**. Strings always have quotation marks!

```python
name = "BrightByte"
favorite_color = "blue"
greeting = "Hello, world!"

print(name)
print(favorite_color)
print(greeting)
```

**Output:**

```
BrightByte
blue
Hello, world!
```

### Example 2: Storing Numbers

Numbers don't need quotation marks!

```python
age = 10
score = 95
temperature = 72

print(age)
print(score)
print(temperature)
```

**Output:**

```
10
95
72
```

### Example 3: Using Variables with print()

You can combine variables with text using the `+` sign:

```python
name = "Alex"
age = 10

print("My name is " + name)
print("I am " + str(age) + " years old")
```

**Output:**

```
My name is Alex
I am 10 years old
```

**Note:** When combining numbers with text, you need `str()` to convert the number to text!

---

## 🔤 Data Types: Strings vs Numbers

Python treats text and numbers differently. These are called **data types**.

### Strings (Text)

- Always surrounded by quotation marks `"like this"` or `'like this'`
- Can contain letters, numbers, spaces, symbols, emojis
- Used for names, messages, addresses, etc.

```python
# These are all strings
name = "Maya"
address = "123 Main Street"
phone = "555-1234"      # Even though it has numbers, quotes make it a string!
emoji_message = "I love coding! 🎉"
```

### Numbers

Two types of numbers in Python:

**Integers (int):** Whole numbers without decimals

```python
age = 10
score = 100
year = 2024
```

**Floats:** Numbers with decimals

```python
price = 19.99
temperature = 98.6
pi = 3.14159
```

### Quick Quiz: String or Number?

| Value     | Type    | Why?                    |
| --------- | ------- | ----------------------- |
| `"Hello"` | String  | Has quotation marks     |
| `42`      | Integer | Whole number, no quotes |
| `"42"`    | String  | Has quotation marks!    |
| `3.14`    | Float   | Has a decimal point     |
| `"3.14"`  | String  | Has quotation marks     |

> _BrightByte says: "If it has quotes, it's a string—even if it looks like a number!"_

---

## 📝 Naming Variables: The Rules

### Rule #1: Use Descriptive Names

Your variable name should describe what's inside!

```python
# ❌ BAD - What does 'x' mean?
x = "BrightByte"

# ✅ GOOD - Clear and descriptive!
robot_name = "BrightByte"
```

### Rule #2: No Spaces Allowed!

Use underscores `_` instead of spaces.

```python
# ❌ WRONG - Spaces cause errors!
my name = "Alex"
favorite color = "blue"

# ✅ RIGHT - Use underscores!
my_name = "Alex"
favorite_color = "blue"
```

### Rule #3: Start with a Letter

Variable names must start with a letter or underscore, NOT a number.

```python
# ❌ WRONG - Can't start with a number!
1st_place = "Gold"
2024_year = 2024

# ✅ RIGHT - Start with a letter!
first_place = "Gold"
year_2024 = 2024
```

### Rule #4: No Special Characters

Only use letters, numbers, and underscores. No spaces, dashes, or symbols!

```python
# ❌ WRONG - Special characters not allowed!
my-name = "Alex"
user@email = "test@email.com"
score! = 100

# ✅ RIGHT - Letters, numbers, underscores only!
my_name = "Alex"
user_email = "test@email.com"
score = 100
```

### Rule #5: Case Matters!

Python sees uppercase and lowercase as DIFFERENT.

```python
Name = "Alex"
name = "Jordan"
NAME = "Sam"

print(Name)   # Prints: Alex
print(name)   # Prints: Jordan
print(NAME)   # Prints: Sam
```

**Best Practice:** Use lowercase with underscores (called `snake_case`).

```python
# ✅ BEST - snake_case is the Python standard
my_favorite_game = "Minecraft"
player_score = 9500
```

### Rule #6: Don't Use Python's Reserved Words

Some words are special to Python and can't be used as variable names:

```python
# ❌ WRONG - These are reserved words!
print = "Hello"     # 'print' is a command!
if = 10             # 'if' is for decisions!
for = "loop"        # 'for' is for loops!
```

**Common reserved words:** `print`, `if`, `else`, `for`, `while`, `True`, `False`, `and`, `or`, `not`, `in`, `def`, `class`, `return`

---

## 🔄 Changing Variable Values

Variables can be updated! The old value gets replaced with the new one.

```python
score = 0
print("Starting score: " + str(score))

score = 10
print("After level 1: " + str(score))

score = 25
print("After level 2: " + str(score))
```

**Output:**

```
Starting score: 0
After level 1: 10
After level 2: 25
```

### Adding to a Variable

You can use the current value to calculate a new value:

```python
score = 100
print(score)    # Prints: 100

score = score + 50   # Take current score (100), add 50, store result
print(score)    # Prints: 150

score = score + 25   # Take current score (150), add 25, store result
print(score)    # Prints: 175
```

---

## 🎮 Putting It Together: Player Profile

Let's create a player profile using variables!

```python
# Player information
player_name = "DragonSlayer99"
player_level = 15
player_health = 100
player_gold = 250
favorite_weapon = "Diamond Sword"

# Display the profile
print("=== PLAYER PROFILE ===")
print("")
print("Name: " + player_name)
print("Level: " + str(player_level))
print("Health: " + str(player_health) + " HP")
print("Gold: " + str(player_gold) + " coins")
print("Weapon: " + favorite_weapon)
print("")
print("======================")
```

**Output:**

```
=== PLAYER PROFILE ===

Name: DragonSlayer99
Level: 15
Health: 100 HP
Gold: 250 coins
Weapon: Diamond Sword

======================
```

---

## 📝 Key Takeaways

### Variable Cheat Sheet

| Concept           | Example               | Notes                          |
| ----------------- | --------------------- | ------------------------------ |
| Create a string   | `name = "Alex"`       | Use quotation marks            |
| Create an integer | `age = 10`            | No quotes for numbers          |
| Create a float    | `price = 9.99`        | Numbers with decimals          |
| Use in print      | `print(name)`         | No quotes around variable name |
| Combine with text | `print("Hi " + name)` | Use + to join                  |
| Number to string  | `str(age)`            | Needed to combine with text    |
| Update variable   | `score = score + 10`  | Old value gets replaced        |

### Naming Rules Summary

| Rule              | ❌ Wrong          | ✅ Right            |
| ----------------- | ----------------- | ------------------- |
| No spaces         | `my name`         | `my_name`           |
| Start with letter | `1st_place`       | `first_place`       |
| No special chars  | `my-score!`       | `my_score`          |
| Use snake_case    | `myFavoriteColor` | `my_favorite_color` |

### Vocabulary Words

- **Variable:** A named container that stores a value
- **String:** Text data surrounded by quotation marks
- **Integer:** A whole number without decimals
- **Float:** A number with decimal points
- **Data Type:** The kind of value stored (string, integer, float)
- **snake_case:** Naming style using lowercase and underscores

---

## 🏠 Homework: My Character Creator

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### Instructions

Create a Python program that builds a character profile for a game, story, or superhero. Your program must:

1. **Create at least 8 different variables** (mix of strings and numbers)
2. **Use descriptive variable names** following the naming rules
3. **Include at least 3 string variables** (name, description, etc.)
4. **Include at least 3 number variables** (age, level, stats, etc.)
5. **Display all information** using print() statements
6. **Use `str()` to convert numbers** when combining with text

### Required Variables (minimum)

Your character must have:

- A name (string)
- An age or level (number)
- A description or title (string)
- At least 2 stats/abilities (numbers)
- A special item or power (string)
- At least 2 more of your choice!

### Example Output

```
╔══════════════════════════════════╗
       ⚔️ CHARACTER PROFILE ⚔️
╚══════════════════════════════════╝

Name: Captain Codemaster
Title: Guardian of the Python Realm
Age: 25 years old

--- STATS ---
Strength: 85
Intelligence: 95
Speed: 70
Magic Power: 60

--- EQUIPMENT ---
Special Weapon: Keyboard of Destiny
Special Ability: Debug Vision

Catchphrase: "No bug can escape my sight!"

══════════════════════════════════
```

### Starter Code

```python
# My Character Creator
# By: [Your Name]

# === CHARACTER INFORMATION ===
character_name = "Your character name here"
character_title = "Your character title here"
character_age = 0  # Change this number!

# === STATS ===
strength = 0       # Change these numbers!
intelligence = 0
speed = 0
# Add more stats!

# === EQUIPMENT ===
special_weapon = "Your weapon here"
special_ability = "Your ability here"

# === DISPLAY THE CHARACTER ===
print("=== CHARACTER PROFILE ===")
print("")
print("Name: " + character_name)
print("Title: " + character_title)
print("Age: " + str(character_age) + " years old")
print("")
# Add more print statements to show all your variables!
```

### Bonus Challenges ⭐

- Add ASCII art borders using symbols
- Create a "before and after" showing your character leveling up (change variables!)
- Add a backstory using multiple print statements
- Include emojis that match your character 🗡️🛡️✨

### How to Submit

1. Write your code on Trinket
2. Make sure it runs without errors!
3. Click the **Share** button
4. Copy the link
5. Share the link with your instructor

---

## 🌟 Next Lesson Preview

**Lesson 3: Numbers and Math**

Next week, you'll learn how to make Python do math! Add, subtract, multiply, divide—and use variables to solve problems.

Sneak peek:

```python
price = 10
quantity = 3
total = price * quantity
print("Total cost: $" + str(total))
```

Get ready to become a math wizard! 🧙‍♂️

---

## 🎉 Great Job Today!

You learned one of the most important concepts in programming—variables! Now Python can remember things for you.

> _BrightByte says: "Variables are like giving Python a super-powered memory! The more you practice, the more natural it becomes. See you next week, coder!"_

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*
