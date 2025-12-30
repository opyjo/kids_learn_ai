# Level 1, Lesson 2: Teacher Guide

## Variables: Storing Information 📦

**Course:** Python Foundations I - Getting Started  
**Duration:** 60 minutes  
**Age Group:** 9-13 years old  
**Materials Needed:** Trinket accounts, screen sharing, student notes handout

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what a variable is using the "labeled box" analogy
2. Create variables to store both strings (text) and numbers
3. Distinguish between strings, integers, and floats
4. Apply proper variable naming conventions
5. Use variables within print() statements

---

## 📋 Lesson Outline

| Section                 | Time   | Activity Type       |
| ----------------------- | ------ | ------------------- |
| Review & Warm-Up        | 5 min  | Quick quiz          |
| What Are Variables?     | 10 min | Interactive Lecture |
| Creating Variables Demo | 15 min | Live Coding         |
| Data Types Explanation  | 10 min | Discussion          |
| Guided Practice         | 12 min | Hands-on Coding     |
| Wrap-Up & Homework      | 8 min  | Review              |

---

## 🟢 Section 1: Review & Warm-Up (5 minutes)

### Quick Review from Lesson 1

**Ask students:**

- _"Who remembers what command we use to display messages?"_ (print)
- _"What do we put around text in Python?"_ (quotation marks)
- _"Does Python care about capital letters?"_ (Yes! It's case-sensitive)

### Warm-Up Challenge

Display this code and ask students what it will print:

```python
print("Hello!")
print("Welcome back!")
print("Let's learn something new!")
```

**Transition:** _"Great! You remember print() perfectly. But what if we wanted Python to remember your name and use it over and over? That's what we're learning today!"_

---

## 🟢 Section 2: What Are Variables? (10 minutes)

### Introduce the Box Analogy

**Say:** _"Imagine you have a box in your room. You put a label on it that says 'Toys' and you put your toys inside. Later, when you want your toys, you look for the box labeled 'Toys.' Variables in Python work exactly the same way!"_

### Draw/Show the Analogy

| Real Life                               | Python          |
| --------------------------------------- | --------------- |
| Box with label "Name" containing "Alex" | `name = "Alex"` |
| Box with label "Age" containing 10      | `age = 10`      |
| Box with label "Score" containing 95    | `score = 95`    |

### Why Variables Matter

**Demonstrate the problem:**

```python
# Without variables - tedious!
print("Hello, Alex!")
print("Alex is awesome!")
print("Goodbye, Alex!")
```

**Ask:** _"What if Alex's friend Jordan wants to use this program? How many places would we need to change?"_ (3 places)

**Show the solution:**

```python
# With variables - much better!
name = "Alex"
print("Hello, " + name + "!")
print(name + " is awesome!")
print("Goodbye, " + name + "!")
```

**Ask:** _"Now how many places to change for Jordan?"_ (Just 1!)

### Interactive Question

**Ask:** _"Can anyone think of information that a game might need to remember about a player?"_

Expected answers: name, score, level, health, lives, inventory, etc.

**Say:** _"All of those would be stored in variables! Games use TONS of variables."_

---

## 🟢 Section 3: Creating Variables Demo (15 minutes)

### Setup

- Share screen with Trinket
- Type slowly, explain everything
- Have students follow along

### Demo 1: The Basic Formula (3 min)

```python
variable_name = value
```

**Explain:** _"The equals sign in Python doesn't mean 'equals' like in math. It means 'store this value.' Think of it as an arrow pointing left: the value on the right goes INTO the variable on the left."_

### Demo 2: String Variables (4 min)

```python
name = "BrightByte"
favorite_food = "pizza"
greeting = "Hello, World!"

print(name)
print(favorite_food)
print(greeting)
```

**Key Points:**

- Strings need quotation marks
- Variable names have NO quotes when we use them
- Show what happens if you forget quotes on the value

### Demo 3: Number Variables (4 min)

```python
age = 10
score = 95
temperature = 72

print(age)
print(score)
print(temperature)
```

**Key Point:** _"Numbers don't need quotes. If you put quotes around a number, Python thinks it's text, not a number you can do math with."_

### Demo 4: Combining Variables with Text (4 min)

```python
name = "Alex"
age = 10

print("My name is " + name)
print("I am " + str(age) + " years old")
```

**CRITICAL POINT:** Demonstrate the error when you forget `str()`:

```python
# This causes an error!
print("I am " + age + " years old")
```

**Explain:** _"Python can't combine text and numbers directly. We use str() to convert the number into text first. Think of str() as a translator!"_

**Teaching Tip:** Write `str()` = "**str**ing converter" on the board/screen.

---

## 🟢 Section 4: Data Types Explanation (10 minutes)

### Introduce Data Types

**Say:** _"Python is smart—it knows the difference between text and numbers. These different kinds of values are called 'data types.'"_

### The Three Main Types

Write on board/screen:

| Type        | What It Is                       | Example                              |
| ----------- | -------------------------------- | ------------------------------------ |
| **String**  | Text (letters, words, sentences) | `"Hello"`, `"Alex"`, `"123 Main St"` |
| **Integer** | Whole numbers                    | `10`, `95`, `-5`, `0`                |
| **Float**   | Decimal numbers                  | `3.14`, `98.6`, `19.99`              |

### Interactive: String or Number?

Display each value and have students shout out the type:

1. `"Hello"` → String (has quotes)
2. `42` → Integer (whole number, no quotes)
3. `"42"` → **String!** (has quotes—this tricks many students!)
4. `3.14` → Float (has decimal)
5. `"3.14"` → **String!** (has quotes)
6. `100` → Integer
7. `"BrightByte"` → String

**Golden Rule:** _"If it has quotes, it's a string—even if it looks like a number!"_

### Why Does It Matter?

**Demonstrate:**

```python
# With numbers - math works!
a = 10
b = 5
print(a + b)  # Prints: 15

# With strings - they get glued together!
a = "10"
b = "5"
print(a + b)  # Prints: 105
```

**Ask:** _"Whoa! Why did 10 + 5 give us 105?"_

**Explain:** _"With strings, the + sign doesn't add—it JOINS (concatenates). Python glued '10' and '5' together to make '105'."_

---

## 🟢 Section 5: Variable Naming Rules (Part of Demo)

### The Six Rules

Go through each rule with examples. Have students identify what's wrong.

#### Rule 1: Use Descriptive Names

```python
# ❌ BAD
x = "Alex"

# ✅ GOOD
player_name = "Alex"
```

**Ask:** _"Six months from now, will you remember what 'x' means?"_

#### Rule 2: No Spaces (Use Underscores)

```python
# ❌ WRONG
my name = "Alex"

# ✅ RIGHT
my_name = "Alex"
```

#### Rule 3: Start with a Letter

```python
# ❌ WRONG
1st_place = "Gold"

# ✅ RIGHT
first_place = "Gold"
```

#### Rule 4: No Special Characters

```python
# ❌ WRONG
my-score = 100
user@name = "test"

# ✅ RIGHT
my_score = 100
user_name = "test"
```

#### Rule 5: Case Matters

```python
Name = "Alex"
name = "Jordan"
print(Name)  # Prints: Alex
print(name)  # Prints: Jordan
```

**Best Practice:** Always use lowercase with underscores (`snake_case`)

#### Rule 6: Don't Use Reserved Words

```python
# ❌ WRONG
print = "Hello"  # 'print' is a Python command!
```

### Quick Naming Quiz

Display these and ask "Valid or Invalid?":

1. `player_score` → ✅ Valid
2. `2fast2furious` → ❌ Invalid (starts with number)
3. `my name` → ❌ Invalid (has space)
4. `myName` → ✅ Valid (but not best practice)
5. `high-score` → ❌ Invalid (has dash)
6. `_private` → ✅ Valid

---

## 🟢 Section 6: Guided Practice (12 minutes)

### Practice 1: Create Your Variables (4 min)

Have students type:

```python
# My personal info
my_name = "______"      # Fill in your name
my_age = ______         # Fill in your age (no quotes!)
my_hobby = "______"     # Fill in a hobby

print("Name: " + my_name)
print("Age: " + str(my_age))
print("Hobby: " + my_hobby)
```

**Check:** Walk around virtually, ensure everyone's code runs.

### Practice 2: Pet Profile (4 min)

```python
# Pet profile (real or imaginary!)
pet_name = "______"
pet_type = "______"     # dog, cat, dragon, unicorn...
pet_age = ______

print("My pet's name is " + pet_name)
print(pet_name + " is a " + pet_type)
print(pet_name + " is " + str(pet_age) + " years old")
```

### Practice 3: Debug Challenge (4 min)

Display this buggy code:

```python
Player Name = "Hero"
player_level = "10"
player_health = 100

print("Welcome, " + Player Name)
print("Level: " + player_level)
print("Health: " + player_health + " HP")
```

**Bugs to find:**

1. `Player Name` has a space → `player_name`
2. `Player Name` needs to match the fixed variable name
3. `player_level = "10"` should be `10` (no quotes) if we want it to be a number
4. Missing `str()` around `player_health`

**Fixed code:**

```python
player_name = "Hero"
player_level = 10
player_health = 100

print("Welcome, " + player_name)
print("Level: " + str(player_level))
print("Health: " + str(player_health) + " HP")
```

---

## 🟢 Section 7: Wrap-Up & Homework (8 minutes)

### Quick Review (3 min)

**Ask:**

- _"What's a variable?"_ (A named container that stores a value)
- _"What's the difference between `42` and `"42"`?"_ (Number vs string)
- _"What do we use to convert a number to text?"_ (`str()`)
- _"Can variable names have spaces?"_ (No, use underscores)

### Introduce Homework (3 min)

**Assignment:** "My Character Creator"

- Create a character profile using at least 8 variables
- Mix of strings (3+) and numbers (3+)
- Display all info with print()
- Use `str()` for numbers

**Show the example output** from the student notes so they understand the goal.

### Preview Next Lesson (2 min)

**Say:** _"Next week, we'll make Python do MATH! Addition, subtraction, multiplication, division—and we'll use variables to create calculators and solve problems."_

**Teaser:**

```python
price = 10
quantity = 3
total = price * quantity
print("Total: $" + str(total))  # Total: $30
```

### Closing

> _"BrightByte says: Variables are like giving Python a super-powered memory! Practice creating them this week, and you'll be a variable master in no time!"_

---

## 📊 Assessment Checklist

### During Class, Observe:

- [ ] Can student create a string variable with proper syntax?
- [ ] Can student create a number variable without quotes?
- [ ] Can student use variables in print() statements?
- [ ] Can student use str() to convert numbers to strings?
- [ ] Can student identify invalid variable names?
- [ ] Can student distinguish between strings and numbers?

### Homework Rubric

| Criteria                           | Points  |
| ---------------------------------- | ------- |
| At least 8 variables created       | 20      |
| At least 3 string variables        | 15      |
| At least 3 number variables        | 15      |
| Proper variable naming conventions | 15      |
| Uses str() correctly for numbers   | 15      |
| Code runs without errors           | 10      |
| Creativity and effort              | 10      |
| **Total**                          | **100** |

---

## 🆘 Troubleshooting Common Issues

### "TypeError: can only concatenate str (not "int") to str"

**Problem:** Student forgot `str()` when combining number with text.

**Solution:** Wrap the number variable in `str()`:

```python
# Wrong
print("Age: " + age)

# Right
print("Age: " + str(age))
```

### "NameError: name 'variable' is not defined"

**Problem:** Typo in variable name or using variable before creating it.

**Solution:** Check spelling and make sure variable is created BEFORE it's used.

### "SyntaxError: invalid syntax" on variable name

**Problem:** Variable name has space, starts with number, or uses special characters.

**Solution:** Review the 6 naming rules.

### "My number turned into text!"

**Problem:** Student put quotes around a number.

**Solution:** Remove quotes from numbers:

```python
# Wrong (this is a string)
age = "10"

# Right (this is a number)
age = 10
```

### Student Confused About str()

**Analogy:** _"Think of str() as a translator. Python speaks two languages: 'number language' and 'text language.' When you want to combine them, str() translates the number into text so they can be joined together."_

---

## 🎯 Common Misconceptions to Address

### Misconception 1: "= means equals"

**Reality:** In Python, `=` means "store" or "assign." The value on the right gets stored in the variable on the left.

### Misconception 2: "Numbers in quotes are still numbers"

**Reality:** `"42"` is text (string), `42` is a number. They look the same but Python treats them differently.

### Misconception 3: "Variable names need quotes"

**Reality:** Only the VALUES need quotes (and only if they're strings). Variable names never have quotes.

```python
# Wrong
"name" = "Alex"

# Right
name = "Alex"
```

### Misconception 4: "I can use any name"

**Reality:** There are rules! No spaces, must start with letter, no special characters, case-sensitive, can't use reserved words.

---

## 📚 Additional Resources

### For Teachers

- Python documentation on variables: [docs.python.org](https://docs.python.org/3/tutorial/introduction.html)
- Real Python - Variables: [realpython.com/python-variables](https://realpython.com/python-variables/)

### For Students Who Want More

- Trinket practice exercises
- Create more complex character profiles
- Experiment with different data types

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*
