---
title: "Practice & Debug!"
description: "Practice everything you've learned and become a debugging detective - find and fix bugs in math programs!"
difficulty: "beginner"
order_index: 6
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # Practice & Debug!
  # Can you find and fix the bugs?

  # Bug 1: Missing int() conversion - Uncomment and fix!
  # number = input("Enter a number: ")
  # print(number + 5)

  # Bug 2: Wrong variable name - Uncomment and fix!
  # num1 = input("First number: ")
  # num1 = int(num1)
  # print(num1 + num2)

  # Bug 3: Using x instead of * - Uncomment and fix!
  # result = 5 x 3
  # print(result)

  # Bug 4: Forgetting quotes in input() - Uncomment and fix!
  # age = input(How old are you? )
  # print(age)

  # Fix each bug one at a time and run the code!
  # Remember: Read the error message for clues!
class_activities: |
  ## 🎮 Class Activity: Math Bug Hunt!

  **Part 1: Partner Bug Challenge**
  1. Work in pairs
  2. Person A writes a calculator with ONE bug hidden on purpose
  3. Person B tries to find and fix the bug
  4. Switch roles and repeat!

  **Part 2: Debug Dance Practice**
  When you see a bug, do the Debug Dance:
  STOP → READ → FIND → THINK → FIX → TEST

  **Part 3: Bug Detective Challenge**
  Race to fix the buggy calculator code on the board!
  First team with working code wins!
take_home_assignment: |
  ## 📚 Homework: Debug Detective Challenge

  **Assignment:** Fix ALL the bugs in this calculator code (there are 6 bugs total!)

  ```python
  # My Buggy Calculator - Fix me!
  print("Welcome to My Calculator!")
  num1 = input("First number: ")
  num2 = input("Second number: ")
  
  print(num1 + num2)
  print(num1 - num2)
  print(num1 x num2)
  print(num1 / num2)
  ```

  **Requirements:**
  1. Find and fix all 6 bugs
  2. Make sure the code runs without errors
  3. Add a comment above each fix explaining what the bug was
  4. Test with different numbers to make sure it works

  **Submit:** Share your fixed code on Trinket with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Even AI systems have bugs! When a calculator app gives the wrong answer, or a navigation app calculates the wrong route, those are bugs. AI programmers spend lots of time debugging and testing their code.

  You're learning a skill every programmer needs - finding and fixing mistakes!
---
# Term 2, Lesson 6: Practice & Debug! 🔍

**Course:** Term 2: Math Wizard  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Practice all the math and programming skills you've learned
- Identify common bugs in math programs
- Read and understand Python error messages
- Use debugging strategies to find and fix bugs
- Build confidence in your coding skills

---

## 🤖 Welcome from BrightByte!

> _"Hey there, Math Wizard! You've learned SO much: math operations, exponents, modulo, input(), int(), and building calculators! Today, we're going to PRACTICE everything and learn to find and fix BUGS (mistakes in code). Every programmer makes mistakes—the important thing is learning how to find and fix them! You're going to become a Bug Detective!"_

### What Are Bugs?

**Bugs** are mistakes in code. They can be:
- Typos (like `nubmer` instead of `number`)
- Missing pieces (like forgetting `int()`)
- Wrong symbols (like using `x` instead of `*`)
- And more!

> _BrightByte says: "Even professional programmers make bugs! The difference is, they know how to find and fix them. Today, you'll learn those same skills!"_

---

## 🔍 Common Math Bugs

### Bug Type 1: Forgetting `int()`

**The Bug:**
```python
number = input("Enter a number: ")
print(number + 5)  # Error!
```

**The Problem:** `input()` gives text, not numbers!

**The Fix:**
```python
number_text = input("Enter a number: ")
number = int(number_text)  # Convert to number!
print(number + 5)  # Works!
```

### Bug Type 2: Wrong Variable Names

**The Bug:**
```python
num1 = input("First number: ")
num1 = int(num1)
print(num1 + num2)  # Error! num2 doesn't exist!
```

**The Problem:** Variable name typo or missing variable!

**The Fix:**
```python
num1_text = input("First number: ")
num2_text = input("Second number: ")  # Don't forget this!
num1 = int(num1_text)
num2 = int(num2_text)  # Don't forget to convert this too!
print(num1 + num2)  # Works!
```

### Bug Type 3: Using `x` Instead of `*`

**The Bug:**
```python
result = 5 x 3  # Error!
print(result)
```

**The Problem:** Python uses `*` for multiplication, not `x`!

**The Fix:**
```python
result = 5 * 3  # Use * for multiplication!
print(result)  # Works!
```

### Bug Type 4: Missing Quotes in `input()`

**The Bug:**
```python
age = input(How old are you? )  # Error!
print(age)
```

**The Problem:** The question needs quotes!

**The Fix:**
```python
age = input("How old are you? ")  # Quotes around the question!
print(age)  # Works!
```

### Bug Type 5: Forgetting to Convert Both Numbers

**The Bug:**
```python
num1_text = input("First number: ")
num2_text = input("Second number: ")
num1 = int(num1_text)
# Forgot to convert num2!
print(num1 + num2_text)  # Error!
```

**The Fix:**
```python
num1_text = input("First number: ")
num2_text = input("Second number: ")
num1 = int(num1_text)
num2 = int(num2_text)  # Convert both!
print(num1 + num2)  # Works!
```

---

## 🕵️ The Debug Dance

When you find a bug, follow these steps:

1. **STOP** — Don't panic! Bugs are normal!
2. **READ** — Read the error message carefully
3. **FIND** — Find the line with the bug
4. **THINK** — Think about what might be wrong
5. **FIX** — Fix the bug
6. **TEST** — Run the code again to make sure it works!

### Example: Debugging in Action

**The Buggy Code:**
```python
age = input("How old are you? ")
print("In 10 years:", age + 10)
```

**Step 1: STOP** — Don't worry, we can fix this!

**Step 2: READ** — Error says: "can only concatenate str (not 'int') to str"

**Step 3: FIND** — The problem is on line 2: `age + 10`

**Step 4: THINK** — `age` is text from `input()`, we need to convert it!

**Step 5: FIX** — Add `int()` conversion:
```python
age_text = input("How old are you? ")
age = int(age_text)
print("In 10 years:", age + 10)
```

**Step 6: TEST** — Run it! It works! ✅

---

## 🎮 Practice Time!

### Challenge 1: Find the Bugs

Can you find and fix all the bugs in this code?

```python
# Buggy Calculator - Find the bugs!
print("Welcome to My Calculator")
num1 = input("First number: ")
num2 = input("Second number: ")

print(num1 + num2)
print(num1 - num2)
```

**Bugs to find:**
1. Missing `int()` conversions
2. Can't do math with text!

**Fixed version:**
```python
# Fixed Calculator!
print("Welcome to My Calculator")
num1_text = input("First number: ")
num2_text = input("Second number: ")

num1 = int(num1_text)
num2 = int(num2_text)

print(num1 + num2)
print(num1 - num2)
```

### Challenge 2: The Age Calculator Bug

Find and fix the bugs:

```python
# Buggy Age Calculator
age = input("How old are you? ")
print("In 5 years:", age + 5)
print("In 10 years:", age + 10)
```

**Fixed:**
```python
# Fixed Age Calculator
age_text = input("How old are you? ")
age = int(age_text)
print("In 5 years:", age + 5)
print("In 10 years:", age + 10)
```

### Challenge 3: The Multiplication Bug

Find and fix:

```python
# Buggy Multiplication
a = input("Enter a number: ")
b = input("Enter another number: ")
result = a x b
print(result)
```

**Fixed:**
```python
# Fixed Multiplication
a_text = input("Enter a number: ")
b_text = input("Enter another number: ")
a = int(a_text)
b = int(b_text)
result = a * b  # Use * not x!
print(result)
```

---

## 📝 Key Takeaways

### Common Bugs in Math Programs

| Bug Type              | Example                    | Fix                          |
| --------------------- | -------------------------- | ---------------------------- |
| Forgetting `int()`    | `num = input(...)` then math | Add `int()` conversion       |
| Wrong variable name   | `print(num1 + num2)` but num2 not defined | Check variable names         |
| Using `x` for multiply | `5 x 3`                    | Use `*` instead               |
| Missing quotes        | `input(How old?)`          | Add quotes: `input("How old?")` |
| Forgetting to convert | Only convert one number | Convert ALL numbers!         |

### The Debug Dance

1. **STOP** — Don't panic!
2. **READ** — Read the error message
3. **FIND** — Find the buggy line
4. **THINK** — What's wrong?
5. **FIX** — Fix it!
6. **TEST** — Test it!

### Important Things to Remember

1. **Bugs are normal** — Everyone makes them!
2. **Error messages help** — Read them carefully!
3. **Fix one bug at a time** — Don't try to fix everything at once
4. **Test after each fix** — Make sure it works!
5. **Ask for help** — It's okay to need help!

---

## 🌟 Next Lesson Preview

**Week 7: Project - My Calculator!**

Next week, you'll build your BIG term project: a complete calculator program! You'll use everything you've learned to create something amazing!

Get ready to build your masterpiece! 🎨

---

## 🎉 Great Job!

You just learned how to find and fix bugs!

**What you accomplished today:**

- ✅ Practiced all your math and programming skills
- ✅ Learned about common bugs in math programs
- ✅ Used the Debug Dance to fix problems
- ✅ Built confidence in debugging
- ✅ Prepared for the big project next week!

> _BrightByte says: "WOW! You're becoming a real programmer! Finding and fixing bugs is a super important skill. Every programmer does this every day. Next week, you'll use ALL your skills to build your term project: a complete calculator! You're ready for it! Keep up the amazing work!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Create buggy code on purpose** — Then fix it yourself!
2. **Help a friend** — Debug their code together
3. **Build a simple calculator** — Practice before the big project
4. **Read error messages** — Try to understand what they mean

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_

