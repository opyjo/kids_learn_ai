---
title: "Variables are Boxes!"
description: "Learn to store information in variables - Python's memory boxes!"
difficulty: "beginner"
order_index: 3
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: false
starter_code: |
  # Variables are like labeled boxes!
  
  name = "Your Name"
  age = 10
  favorite_color = "blue"
  
  print("My name is", name)
  print("I am", age, "years old")
  print("My favorite color is", favorite_color)
class_activities: |
  **Activity: Variable Swap Game!**
  
  1. Create 3 variables about yourself
  2. Print them using print()
  3. Swap values with a partner's code
  4. See how changing the variable changes the output!
take_home_assignment: |
  **Assignment: My Profile Card**
  
  Create a Python program with at least 5 variables:
  - Your name (string)
  - Your age (number)
  - Your favorite food (string)
  - Your favorite number (number)
  - Your dream job (string)
  
  Print all variables in a nice format. Submit your Trinket link.
---

# Term 1, Week 3: Variables are Boxes! 📦

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old

---

## 🎯 What You'll Learn Today

- What variables are and why they're useful
- How to create variables
- How to use variables with print()
- Rules for naming variables

---

## What is a Variable?

Imagine you have a **labeled box** where you can store things.

- You write a name on the box (like "toys" or "snacks")
- You put something inside
- Later, you can look in the box to see what's there!

In Python, a **variable** is like that box:
- It has a **name** (the label)
- It holds a **value** (what's inside)

---

## Creating Variables

To create a variable, use the equals sign `=`:

```python
name = "Alex"
age = 10
favorite_color = "blue"
```

Here's what happened:
- `name` is a box containing `"Alex"`
- `age` is a box containing `10`
- `favorite_color` is a box containing `"blue"`

---

## Using Variables with print()

Now comes the fun part - we can use our variables!

```python
name = "Alex"
print("Hello!")
print(name)
```

**Output:**
```
Hello!
Alex
```

### Combining Text and Variables

Use commas to combine text and variables:

```python
name = "Alex"
age = 10

print("My name is", name)
print("I am", age, "years old")
```

**Output:**
```
My name is Alex
I am 10 years old
```

---

## Two Types of Values

### Text (Strings) - Use Quotation Marks!
```python
name = "Alex"
city = "Toronto"
pet = 'dog'
```

### Numbers - No Quotation Marks!
```python
age = 10
score = 100
year = 2025
```

**Important:** 
- `"10"` is TEXT (a string)
- `10` is a NUMBER

---

## Changing Variables

Variables can **change** - that's why they're called variables!

```python
score = 0
print("Starting score:", score)

score = 10
print("New score:", score)

score = 25
print("Final score:", score)
```

**Output:**
```
Starting score: 0
New score: 10
Final score: 25
```

---

## Naming Rules 📋

### ✅ Good Variable Names
```python
name = "Alex"
player_score = 100
favoriteFood = "pizza"
age2 = 11
```

### ❌ Bad Variable Names
```python
# Spaces not allowed!
player score = 100  # ❌ Error!

# Can't start with numbers!
2nd_place = "Sam"  # ❌ Error!

# No special characters!
player$ = "Alex"  # ❌ Error!
```

### Tips for Good Names
- Use lowercase letters
- Use underscores for spaces: `favorite_color`
- Make names **descriptive**: `player_name` not just `n`

---

## Practice Examples

### Example 1: About Me
```python
my_name = "Jordan"
my_age = 10
my_hobby = "reading"

print("Hi! I am", my_name)
print("I am", my_age, "years old")
print("I like", my_hobby)
```

### Example 2: My Pet
```python
pet_name = "Buddy"
pet_type = "dog"
pet_age = 3

print("I have a", pet_type, "named", pet_name)
print(pet_name, "is", pet_age, "years old")
```

---

## Key Vocabulary

| Word | Meaning |
|------|---------|
| **Variable** | A named container that stores a value |
| **Value** | What's stored inside the variable |
| **String** | Text inside quotation marks |
| **Integer** | A whole number (no decimals) |
| **Assignment** | Using `=` to put a value in a variable |

---

## What's Next?

Next week, we'll learn to do even MORE with text - combining, changing, and manipulating strings! 🔤

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*

