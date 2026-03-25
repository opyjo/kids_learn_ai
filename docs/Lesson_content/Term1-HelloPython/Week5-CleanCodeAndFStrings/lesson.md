---
title: "Clean Code & F-Strings!"
description: "Learn to write clean, organized code with comments and discover f-strings — the easy way to print variables inside text!"
difficulty: "beginner"
order_index: 5
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: true
starter_code: |
  # ================================
  # MY CLEAN PROFILE CARD
  # ================================

  # --- My Variables ---
  name = "Your Name"
  favorite_color = "blue"
  hobby = "coding"
  pet = "cat"
  lucky_number = 7

  # --- The Card ---
  border = "=" * 30
  print(border)
  print(f"   {name.upper()}'s PROFILE CARD")
  print(border)
  print("")

  # TODO: Use an f-string to print your favorite color
  # TODO: Use an f-string to print your hobby
  # TODO: Use an f-string to print your pet's name in Title Case

  print("")

  # --- Fun Facts ---
  print("--- Fun Facts ---")
  print(f"My name has {len(name)} letters!")

  # TODO: Use an f-string to print your lucky number doubled
  # TODO: Add one more fun fact about yourself

  print("")
  print(border)

  # TODO: Add a closing message using an f-string!
class_activities: |
  ## 🎮 Class Activity: Clean Code Makeover!

  Take this messy code and make it clean using comments and f-strings:

  **Before (messy):**
  ```python
  name = "Alex"
  food = "pizza"
  count = 3
  print("Hello " + name + "! You love " + food + "!")
  print("You can eat " + str(count) + " slices!")
  print(name + " says " + food + " is the best!")
  ```

  **Your job:**
  1. Add section comments to organize the code
  2. Rewrite every print statement using f-strings
  3. Add at least one string method inside an f-string
take_home_assignment: |
  ## 📚 Homework: Choose Your Challenge

  **Assignment:** Pick ONE of these challenges to complete!

  **Option 1: My F-String Story**
  - Create at least 5 variables (mix of strings and numbers)
  - Write a short story using ONLY f-strings for printing (no concatenation!)
  - Add comments to organize your code into sections
  - Use at least one string method inside an f-string

  **Option 2: The Clean Menu**
  - Create variables for a restaurant menu (item names, prices, ratings)
  - Display a formatted menu using f-strings
  - Add section comments (# --- Appetizers ---, # --- Main Course ---, etc.)
  - Use at least one string method inside an f-string

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Real AI systems work with HUGE amounts of code — sometimes millions of lines! Without comments and clean formatting, even the smartest programmers couldn't understand it. When engineers at Google or OpenAI write code for AI, they follow strict "clean code" rules — just like the ones you learned today!

  F-strings are actually used in real AI programs to format output and create messages. You're learning the same tools the pros use!
---

# Term 1, Week 5: Clean Code & F-Strings! ✨

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Use `#` comments to leave notes and organize your code
- Write f-strings to easily print variables inside text
- Use string methods and expressions inside f-strings
- Rewrite messy code into clean, readable code

---

## 🤖 BrightByte's Welcome!

> _"Hey there, code artist! 🎨 You've been writing some amazing Python programs — printing, variables, string superpowers! But today I want to teach you something that REAL programmers do every single day: write CLEAN code. We're going to learn two awesome tricks — comments (secret notes in your code!) and f-strings (the EASY way to print with variables). Trust me, once you learn f-strings, you'll never want to go back! Let's go!"_

---

## Part 1: Comments — Leaving Notes in Your Code 📝

### What is a Comment?

A **comment** is a note that you write inside your code. Python completely **ignores** comments — they're messages for HUMANS, not the computer!

You create a comment with the `#` symbol:

```python
# This is a comment — Python skips this line!
print("This line runs normally")
```

**Output:**

```
This line runs normally
```

See? Python only ran the `print()` line. The comment was invisible to Python!

### Why Do Comments Matter?

Comments help you:

1. **Explain your thinking** — so you remember WHY you wrote something
2. **Organize your code** — like putting labels on sections
3. **Help others** — so classmates or teachers can understand your code

### Types of Comments

#### Section Headers — Organize Your Code

```python
# --- My Variables ---
name = "Alex"
color = "blue"

# --- Print My Info ---
print("Name:", name)
print("Color:", color)
```

#### Explanation Comments — Explain Tricky Parts

```python
border = "=" * 30  # Create a line of 30 equal signs
print(border)
```

#### TODO Comments — Remind Yourself What to Add Later

```python
# TODO: Add more variables here
# TODO: Make the border fancier
```

### Exercise: Add Comments

Here's code with NO comments. Add comments to make it organized!

```python
name = "Alex"
hobby = "drawing"
years = 3

print("=" * 25)
print("ALL ABOUT ME")
print("=" * 25)
print("Name:", name.title())
print("Hobby:", hobby)
print("Years practicing:", years)
print("=" * 25)
```

**Your turn:** Add at least 3 comments — a section header, an explanation comment, and a TODO!

> _BrightByte says: "Comments are like sticky notes on your code — they help you and others understand what's going on! Professional programmers write comments every day."_

---

## Part 2: F-Strings — The Easy Way to Print! 🚀

### The Old Way vs. The New Way

You already know how to print variables. But look at how messy it can get:

**The Old Way (concatenation + str()):**

```python
name = "Alex"
food = "pizza"
count = 3

print("Hi " + name + "! You love " + food + "!")
print("You can eat " + str(count) + " slices!")
```

So many `+` signs! And you need `str()` for numbers! There's a MUCH easier way...

**The New Way (f-strings!):**

```python
name = "Alex"
food = "pizza"
count = 3

print(f"Hi {name}! You love {food}!")
print(f"You can eat {count} slices!")
```

**Same output, WAY cleaner!**

### The Rules of F-Strings

1. Start with `f` before the opening quote: `f"..."`
2. Put variable names inside curly braces: `{variable}`
3. That's it! No `+`, no `str()` needed!

```python
animal = "penguin"
number = 42

# F-string handles text AND numbers automatically!
print(f"My favorite animal is the {animal}")
print(f"My lucky number is {number}")
```

### No More str()!

Remember how you needed `str()` to print numbers with the old way?

```python
age = 10

# Old way — needs str()
print("I am " + str(age) + " years old")

# F-string way — just works!
print(f"I am {age} years old")
```

F-strings handle numbers automatically — no `str()` needed!

### Using Methods Inside F-Strings

Here's where f-strings get REALLY powerful. You can use string methods right inside the `{}`!

```python
name = "alex smith"

print(f"Normal: {name}")
print(f"Shouting: {name.upper()}")
print(f"Fancy: {name.title()}")
print(f"Your name has {len(name)} characters!")
```

**Output:**

```
Normal: alex smith
Shouting: ALEX SMITH
Fancy: Alex Smith
Your name has 10 characters!
```

### Exercise: Convert to F-Strings

Rewrite these using f-strings:

```python
city = "Toronto"
temperature = 25

# Rewrite these using f-strings!
print("I live in " + city)
print("It is " + str(temperature) + " degrees today")
print("I love " + city.upper() + "!")
```

**Your turn:** Rewrite all three print statements using f-strings!

### Exercise: Build with F-Strings

Fill in the blanks to complete these f-strings:

```python
pet_name = "Buddy"
pet_type = "dog"
pet_age = 5

# Fill in the f-strings!
print(f"My ___ is named ___")
print(f"___ is ___ years old")
print(f"I love you, ___!")
```

> _BrightByte says: "F-strings are like magic — you just write normal text, and wherever you need a variable, pop it inside curly braces! It's the way most Python programmers write today."_

---

## Part 3: Clean Code Makeover 🧹

Now let's put comments AND f-strings together! Take this messy code and make it clean.

### Before: The Messy Version

```python
name = "Alex"
food = "pizza"
count = 3
color = "blue"
print("Hello " + name + "! Welcome!")
print(name + " loves " + food + "!")
print("They can eat " + str(count) + " slices!")
print(name + "'s favorite color is " + color.upper())
print(name + " has " + str(len(name)) + " letters in their name")
```

### After: The Clean Version

```python
# --- My Variables ---
name = "Alex"
food = "pizza"
count = 3
color = "blue"

# --- Welcome Message ---
print(f"Hello {name}! Welcome!")

# --- Fun Facts ---
print(f"{name} loves {food}!")
print(f"They can eat {count} slices!")
print(f"{name}'s favorite color is {color.upper()}")
print(f"{name} has {len(name)} letters in their name")
```

**Your turn:** Look at the difference! The clean version is:
- Easier to read (comments show what each section does)
- Shorter (f-strings replace all the `+` and `str()`)
- More organized (blank lines separate sections)

---

## 🏆 Practice Challenge: My Clean Profile Card (10 minutes)

Build a profile card using **f-strings** and **comments**! The starter code is about 40% done — your job is to finish it.

### Starter Code

```python
# ================================
# MY CLEAN PROFILE CARD
# ================================

# --- My Variables ---
name = "Your Name"
favorite_color = "blue"
hobby = "coding"
pet = "cat"
lucky_number = 7

# --- The Card ---
border = "=" * 30
print(border)
print(f"   {name.upper()}'s PROFILE CARD")
print(border)
print("")

# TODO: Use an f-string to print your favorite color
# TODO: Use an f-string to print your hobby
# TODO: Use an f-string to print your pet's name in Title Case

print("")

# --- Fun Facts ---
print("--- Fun Facts ---")
print(f"My name has {len(name)} letters!")

# TODO: Use an f-string to print your lucky number doubled
# TODO: Add one more fun fact about yourself

print("")
print(border)

# TODO: Add a closing message using an f-string!
```

### Make It Yours!

- Change ALL the variables to YOUR real information
- Complete every TODO using f-strings
- Add at least one extra section with its own comment header
- Use at least one string method inside an f-string

---

## 🔧 Common Mistakes and How to Fix Them

### Mistake 1: Forgetting the `f` Before the String

```python
# ❌ Wrong — this just prints the literal text {name}
name = "Alex"
print("Hello {name}!")    # Output: Hello {name}!

# ✅ Correct — the f makes it an f-string!
print(f"Hello {name}!")   # Output: Hello Alex!
```

### Mistake 2: Using Parentheses Instead of Curly Braces

```python
# ❌ Wrong — parentheses don't work in f-strings
name = "Alex"
print(f"Hello (name)!")    # Output: Hello (name)!

# ✅ Correct — use curly braces!
print(f"Hello {name}!")    # Output: Hello Alex!
```

### Mistake 3: Forgetting the `#` for Comments

```python
# ❌ Wrong — Python tries to run this as code and crashes!
This is my program

# ✅ Correct — the # tells Python to ignore this line
# This is my program
```

### Mistake 4: Putting `#` in the Wrong Place

```python
# ✅ This works — comment on its own line
# Print my name
print("Alex")

# ✅ This also works — comment at the end of a line
print("Alex")  # Print my name

# ❌ This is NOT a comment — it's inside a string!
print("My # is 7")  # This prints: My # is 7
```

---

## 📝 Key Points to Remember

### Summary Card

| Concept | Example | What It Does |
| ------- | ------- | ------------ |
| Comment | `# This is a note` | Python ignores this line |
| F-string | `f"Hello {name}"` | Puts variable value into text |
| F-string with number | `f"Age: {age}"` | Numbers work automatically |
| F-string with method | `f"{name.upper()}"` | Use methods inside `{}` |
| F-string with len() | `f"{len(name)} letters"` | Use functions inside `{}` |

### Vocabulary Words

| Word | Definition | Example |
| ---- | ---------- | ------- |
| **Comment** | A note in code that Python ignores | `# This is a comment` |
| **F-string** | A string starting with `f` that lets you embed variables | `f"Hi {name}"` |
| **Curly braces** | The `{}` symbols used inside f-strings for variables | `{name}`, `{age}` |
| **Clean code** | Code that is organized, commented, and easy to read | Well-organized programs |

---

## 🏠 Homework: Choose Your Challenge

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### Pick ONE of These Options:

#### Option 1: My F-String Story 📖

- Create at least **5 variables** (mix of strings and numbers)
- Write a short story using **only f-strings** for printing (no concatenation!)
- Add **comments** to organize your code into sections
- Use at least **one string method** inside an f-string (.upper(), .title(), etc.)
- Add a **decorative title** with string multiplication

#### Option 2: The Clean Menu 🍕

- Create variables for a restaurant menu (item names, prices, ratings)
- Display a **formatted menu** using f-strings
- Add **section comments** (`# --- Appetizers ---`, `# --- Main Course ---`, etc.)
- Use at least **one string method** inside an f-string
- Add **borders** using string multiplication

### Grading Rubric

| Criteria | Points |
| -------- | ------ |
| Uses f-strings correctly (no concatenation) | ⭐⭐⭐ |
| Code has section comments | ⭐⭐ |
| Uses a string method inside an f-string | ⭐⭐ |
| Creative and shows effort | ⭐ |
| Code runs without errors | ⭐⭐ |
| **Total** | **10 points** |

### How to Submit

1. Write your code on Trinket
2. Save your work
3. Click the **Share** button
4. Copy the link
5. Share the link with your instructor

---

## 🌟 Next Lesson Preview

**Week 6: Bug Detectives!** 🔍

Next week, you become a **debugging expert**! Every programmer makes mistakes — the superpower is knowing how to FIND and FIX them.

**What you'll learn:**

- How to read error messages
- Common types of bugs
- Strategies for finding problems
- How to fix code that isn't working

**Sneak peek:**

```python
# Can you spot the bug?
name = "Alex
print(f"Hello {name}!")
```

Your clean code skills from today will help you write FEWER bugs next week!

See you next week, detective! 🔍

---

## 🎉 Great Job Today!

You learned two powerful new skills today!

**You can now:**

- ✅ Write comments to organize and explain your code
- ✅ Use f-strings to easily print variables inside text
- ✅ Use methods and expressions inside f-strings
- ✅ Transform messy code into clean, readable code!

> _BrightByte says: "WOW! You've officially leveled up from 'coder' to 'clean coder'! 🌟 Comments and f-strings are tools that REAL professional programmers use every day. Your code is going to be so much easier to read and write from now on. I'm SO proud of you! See you next week when we become Bug Detectives! 🔍"_

---

_KidsLearnAI - Empowering the Next Generation with AI Education_
*www.kidslearnai.ca*
_Instagram: @kids_learn_ai_

---

_Remember: Clean code is happy code! From now on, try to add comments and use f-strings in everything you write._
