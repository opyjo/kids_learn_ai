---
title: "Project - My Calculator!"
description: "Build your complete term project - a full-featured calculator using everything you've learned!"
difficulty: "beginner"
order_index: 7
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # ================================
  # MY CALCULATOR
  # By: [Your Name]
  # Term 2 Project
  # ================================

  # === WELCOME SCREEN ===
  print("=" * 40)
  print("     WELCOME TO MY CALCULATOR!")
  print("=" * 40)
  print("")

  # === GET NUMBERS FROM USER ===
  num1_text = input("Enter your first number: ")
  num2_text = input("Enter your second number: ")

  # === CONVERT TO NUMBERS ===
  num1 = int(num1_text)
  num2 = int(num2_text)

  # === DO THE CALCULATIONS ===
  print("")
  print("Here are your results:")
  print("-" * 40)
  print(num1, "+", num2, "=", num1 + num2)
  print(num1, "-", num2, "=", num1 - num2)
  print(num1, "×", num2, "=", num1 * num2)
  print(num1, "÷", num2, "=", num1 / num2)
  print("-" * 40)

  # === ENDING ===
  print("")
  print("Thanks for using My Calculator!")
  print("=" * 40)
class_activities: |
  ## 🎮 Class Activity: Calculator Workshop!

  **Part 1: Planning (10 min)**
  - Review the requirements
  - Plan your calculator's features
  - Think about how to make it special

  **Part 2: Building (30 min)**
  - Start building your calculator
  - Test frequently as you go
  - Help neighbors with bugs
  - Add your personal touches!

  **Part 3: Testing & Polish (15 min)**
  - Test with different numbers
  - Fix any bugs
  - Add decorations and messages
  - Make it yours!

  **Part 4: Preview (5 min)**
  - Run your complete program
  - Make final adjustments
  - Get ready to showcase next week!
take_home_assignment: |
  ## 📚 Homework: Complete Your Calculator

  **Assignment:** Finish and polish your calculator for the Week 8 showcase!

  **Requirements:**
  1. Welcome message with decorative borders
  2. Asks user for two numbers using input()
  3. Converts both to numbers using int()
  4. Performs all 4 basic operations: +, -, ×, ÷
  5. Displays all results clearly
  6. Ending message thanking the user
  7. NO BUGS - code runs perfectly!
  8. Add comments explaining each section

  **Bonus Points:**
  - Add more operations (exponents, modulo)
  - Ask for the user's name and personalize messages
  - Add decorative borders and emojis
   - Create a menu to choose operations
  - Add error handling for division by zero

  **Submit:** Share your Trinket link. Be ready to present at the Week 8 Showcase!
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Every calculator app on your phone uses the same concepts you're learning! When you type numbers and press operations, the app uses input(), converts to numbers, and performs calculations - just like your program!

  You're building something that works like real-world applications!
---
# Term 2, Lesson 7: Project - My Calculator! 🧮

**Course:** Term 2: Math Wizard  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Build Today

By the end of this lesson, you will have:

- Built a complete calculator program
- Used all the skills you've learned this term
- Created something you can be proud of
- Prepared for the Week 8 showcase!

---

## 🤖 Welcome from BrightByte!

> _"Hey there, Math Wizard! This is it—your BIG MOMENT! Today, you're going to build your very own calculator program using EVERYTHING you've learned this term! This is your Term 2 project, and I know you're going to create something AMAZING! Let's build something you can show off to your family and friends!"_

### What Is the Term Project?

Your term project is a **complete calculator program** that:
- Welcomes the user
- Asks for two numbers
- Performs all four basic operations
- Displays results clearly
- Looks polished and professional!

> _BrightByte says: "This is what you've been working toward all term! You've learned all the pieces, and now you're putting them together to build something REAL. I'm so excited to see what you create!"_

---

## 📋 Project Requirements

### Must-Have Features

1. **Welcome Message** — Greet the user with a nice message
2. **Get Two Numbers** — Ask the user for two numbers using `input()`
3. **Convert to Numbers** — Use `int()` to convert both inputs
4. **All Four Operations** — Add, subtract, multiply, and divide
5. **Display Results** — Show all four results clearly
6. **Ending Message** — Thank the user
7. **No Bugs!** — Code must run without errors
8. **Comments** — Explain what each section does

### Bonus Features (Optional)

- Add exponents (`**`) and modulo (`%`)
- Ask for the user's name and personalize messages
- Add decorative borders and emojis
- Create a menu to choose which operation to perform
- Add error handling (what if user types text instead of numbers?)

---

## 🏗️ Step-by-Step Building Guide

### Step 1: Welcome Screen

Start with a friendly welcome:

```python
# ================================
# MY CALCULATOR
# By: [Your Name]
# Term 2 Project
# ================================

print("=" * 40)
print("     WELCOME TO MY CALCULATOR!")
print("=" * 40)
print("")
```

### Step 2: Get Numbers from User

Ask for the two numbers:

```python
# === GET NUMBERS FROM USER ===
num1_text = input("Enter your first number: ")
num2_text = input("Enter your second number: ")
```

### Step 3: Convert to Numbers

Convert both inputs to numbers:

```python
# === CONVERT TO NUMBERS ===
num1 = int(num1_text)
num2 = int(num2_text)
```

### Step 4: Do the Calculations

Perform all four operations:

```python
# === DO THE CALCULATIONS ===
print("")
print("Here are your results:")
print("-" * 40)
print(num1, "+", num2, "=", num1 + num2)
print(num1, "-", num2, "=", num1 - num2)
print(num1, "×", num2, "=", num1 * num2)
print(num1, "÷", num2, "=", num1 / num2)
print("-" * 40)
```

### Step 5: Ending Message

Thank the user:

```python
# === ENDING ===
print("")
print("Thanks for using My Calculator!")
print("=" * 40)
```

---

## 🎨 Making It Special

### Add Personalization

Ask for the user's name:

```python
name = input("What's your name? ")
print("Hello,", name, "! Welcome to My Calculator!")
```

### Add Decorations

Use emojis and borders:

```python
print("🧮" * 20)
print("     WELCOME TO MY CALCULATOR! 🧮")
print("🧮" * 20)
```

### Add More Operations

Include exponents and modulo:

```python
print(num1, "**", num2, "=", num1 ** num2)
print(num1, "%", num2, "=", num1 % num2)
```

---

## 🎮 Complete Example

Here's a complete example to inspire you:

```python
# ================================
# MY CALCULATOR
# By: Alex
# Term 2 Project
# ================================

# === WELCOME SCREEN ===
print("=" * 50)
print("     🧮 WELCOME TO MY CALCULATOR! 🧮")
print("=" * 50)
print("")

# === GET USER'S NAME ===
name = input("What's your name? ")
print("Hello,", name, "! Let's do some math!")
print("")

# === GET NUMBERS FROM USER ===
num1_text = input("Enter your first number: ")
num2_text = input("Enter your second number: ")

# === CONVERT TO NUMBERS ===
num1 = int(num1_text)
num2 = int(num2_text)

# === DO THE CALCULATIONS ===
print("")
print("Here are your results,", name, ":")
print("-" * 50)
print(num1, "+", num2, "=", num1 + num2)
print(num1, "-", num2, "=", num1 - num2)
print(num1, "×", num2, "=", num1 * num2)
print(num1, "÷", num2, "=", num1 / num2)
print("-" * 50)

# === ENDING ===
print("")
print("Thanks for using My Calculator,", name, "!")
print("=" * 50)
```

**Example Output:**
```
==================================================
     🧮 WELCOME TO MY CALCULATOR! 🧮
==================================================

What's your name? Sam
Hello, Sam ! Let's do some math!

Enter your first number: 15
Enter your second number: 4

Here are your results, Sam :
--------------------------------------------------
15 + 4 = 19
15 - 4 = 11
15 × 4 = 60
15 ÷ 4 = 3.75
--------------------------------------------------

Thanks for using My Calculator, Sam !
==================================================
```

---

## 🎯 Testing Your Calculator

### Test Checklist

Before you're done, test your calculator with:

- [ ] Two positive numbers (e.g., 10 and 5)
- [ ] A big number and a small number (e.g., 100 and 3)
- [ ] Two small numbers (e.g., 2 and 2)
- [ ] Different combinations

### What to Check

- Does it ask for both numbers?
- Does it convert them correctly?
- Do all four operations work?
- Are the results displayed clearly?
- Does it look polished?

---

## 📝 Key Takeaways

### What You're Building

- A **complete program** — Not just practice, a real project!
- Something **useful** — People could actually use this!
- Something **yours** — Add your personal touches!
- Something to **show off** — Be proud of it!

### Important Things to Remember

1. **Test as you go** — Don't wait until the end!
2. **Fix bugs immediately** — Don't let them pile up!
3. **Make it yours** — Add personal touches!
4. **Ask for help** — It's okay to need help!
5. **Be proud** — You're building something real!

---

## 🌟 Next Lesson Preview

**Week 8: Showcase Party + Badge! 🎉**

Next week, you'll present your calculator to the class, celebrate your achievements, and earn your "Python Beginner" badge! Get ready to show off your amazing work!

---

## 🎉 Great Job!

You just built your term project!

**What you accomplished today:**

- ✅ Built a complete calculator program
- ✅ Used all the skills you learned this term
- ✅ Created something you can be proud of
- ✅ Prepared for the showcase next week!

> _BrightByte says: "WOW! You did it! You built a REAL calculator program! This is something you can show to your family, your friends, everyone! You've come so far this term. Next week, we're going to celebrate all your hard work and you'll earn your badge! I'm so proud of you!"_

---

## 📚 Final Tips

Before next week's showcase:

1. **Test your calculator** — Make sure it works perfectly!
2. **Add personal touches** — Make it yours!
3. **Practice presenting** — Be ready to show it off!
4. **Be proud** — You built something amazing!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor for help. This is your project—make it amazing!_ 🧮

