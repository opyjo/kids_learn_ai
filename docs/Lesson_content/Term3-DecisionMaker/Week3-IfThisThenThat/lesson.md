---
title: "If This, Then That!"
description: "Learn to make programs that think and decide using if statements - the most powerful tool in programming!"
difficulty: "beginner"
order_index: 3
course_slug: "term-3-decision-maker"
is_premium: false
requires_trinket: true
starter_code: |
  # If This, Then That!
  # Let's make programs that think and decide!

  # Your first if statement!
  age = 10
  
  if age >= 10:
      print("You are 10 or older!")
  
  # Try your own if statements!
class_activities: |
  ## 🎮 Class Activity: Decision Maker Challenge!

  1. Partner up with a classmate
  2. Create a program with at least 3 if statements
  3. Each if statement should check something different
  4. Test your program with different values
  5. Share your decisions with the class!

  **Challenge:** Who can create the most creative decision-making program?
take_home_assignment: |
  ## 📚 Homework: My Decision Program

  **Assignment:** Create a Python program that makes at least 5 different decisions using if statements!

  **Requirements:**
  1. Use at least 5 if statements
  2. Check different things (age, score, name, etc.)
  3. Each if statement should print something different
  4. Add comments explaining what each decision checks
  5. Code must run without errors

  **Example ideas:**
  - Age checker (different messages for different ages)
  - Score checker (different messages for different scores)
  - Password checker
  - Name checker

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Every decision an AI makes uses if statements! When a self-driving car asks "If there's a stop sign, then stop", or a chatbot asks "If the user said hello, then greet them", those are if statements - exactly like you're learning!

  You're learning the same decision-making logic that powers every AI system!
---
# Term 3, Lesson 3: If This, Then That! 🧠

**Course:** Term 3: Decision Maker  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Write your first `if` statements
- Make programs that decide what to do
- Use comparisons to make decisions
- Create programs that respond differently
- Build your first "smart" program!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! This is it—the BIGGEST lesson in programming! Today, you're going to learn `if` statements—the tool that makes programs THINK and DECIDE! This is where programming gets REALLY exciting because your programs will start responding differently based on what happens!"_

### What's Special About Today?

You've learned:
- How to compare things (True/False)
- How to get input from users

Now you'll learn:
- **How to make decisions** — `if` statements!
- **How to make programs think** — They'll decide what to do!
- **How to build smart programs** — Programs that respond!

> _BrightByte says: "This is THE most important concept in programming! Once you can use if statements, you can build games, interactive stories, calculators that check things, and SO much more! This is where the magic happens!"_

---

## 🧠 What Is an `if` Statement?

### The Power of "If"

An `if` statement tells Python: "**IF** something is True, **THEN** do this!"

It's like making a decision:
- **IF** it's raining, **THEN** bring an umbrella
- **IF** your score is high, **THEN** celebrate
- **IF** the password is correct, **THEN** let them in

### The Basic Structure

```python
if condition:
    do something
```

**Parts:**
1. `if` — The keyword that starts the decision
2. `condition` — Something that's True or False
3. `:` — Colon means "here's what to do"
4. Indented code — What to do if condition is True

---

## 📝 Your First `if` Statement

### Example 1: Simple If

```python
age = 10

if age >= 10:
    print("You are 10 or older!")
```

**What happens:**
1. Python checks: Is `age >= 10`? → Yes! (10 >= 10 is True)
2. Since it's True, Python runs the indented code
3. Prints: "You are 10 or older!"

**Output:**
```
You are 10 or older!
```

### Example 2: If That Doesn't Run

```python
age = 5

if age >= 10:
    print("You are 10 or older!")
```

**What happens:**
1. Python checks: Is `age >= 10`? → No! (5 >= 10 is False)
2. Since it's False, Python SKIPS the indented code
3. Nothing is printed!

**Output:**
```
(empty - nothing printed)
```

---

## ⚠️ Important: Indentation!

### Why Indentation Matters

In Python, **indentation** (the spaces at the beginning of a line) is SUPER important! It tells Python what code belongs to the `if` statement.

### Correct Indentation

```python
age = 10

if age >= 10:
    print("You are 10 or older!")  # ← Indented (4 spaces)
    print("Great job!")             # ← Also indented
```

**Both lines run** if the condition is True because they're both indented!

### Wrong Indentation

```python
age = 10

if age >= 10:
print("This won't work!")  # ← NOT indented - ERROR!
```

**This causes an error!** Python needs indentation to know what belongs to the `if`!

### How Much to Indent?

- Use **4 spaces** (or 1 tab)
- Be consistent!
- Everything that should run "if True" must be indented the same amount

---

## 🎯 More `if` Examples

### Example 1: Age Checker

```python
age = 12

if age >= 13:
    print("You are a teenager!")
```

### Example 2: Score Checker

```python
score = 95

if score >= 90:
    print("You got an A!")
```

### Example 3: Password Checker

```python
password = "secret123"

if password == "secret123":
    print("Password correct! Access granted!")
```

### Example 4: Name Checker

```python
name = "Alex"

if name == "Alex":
    print("Hello, Alex! Welcome back!")
```

### Example 5: Multiple Lines

```python
score = 100

if score >= 100:
    print("Amazing score!")
    print("You're a champion!")
    print("Keep up the great work!")
```

**All three lines run** if score >= 100!

---

## 🎮 Practice Time!

### Challenge 1: Age Checker

Create a program that checks if someone is old enough:

```python
age = 10

if age >= 10:
    print("You are 10 or older!")
```

### Challenge 2: Score Checker

Create a program that checks if a score is high:

```python
score = 85

if score >= 80:
    print("Great score! You passed!")
```

### Challenge 3: Password Checker

Create a simple password checker:

```python
entered = "mypassword"
correct = "mypassword"

if entered == correct:
    print("Password correct! Welcome!")
```

### Challenge 4: Your Own Decision

Create your own `if` statement that checks something you care about!

---

## 📝 Key Takeaways

### What Is an `if` Statement?

- An `if` statement makes a decision
- It checks if something is True
- If True, it runs the indented code
- If False, it skips the indented code

### The Structure

```python
if condition:
    do something
    do more things
```

### Important Rules

1. **Always use a colon** (`:`) after the condition
2. **Always indent** the code that should run (4 spaces)
3. **Indentation must be consistent** — same amount of spaces
4. **The condition must be True or False** — use comparisons!

### Vocabulary Words

| Word              | Definition                                    | Example                    |
| ----------------- | --------------------------------------------- | -------------------------- |
| **if statement**  | Code that makes a decision                    | `if age >= 10:`            |
| **condition**     | Something that's True or False                 | `age >= 10`                |
| **indentation**   | Spaces at the start of a line                 | 4 spaces before print()    |
| **execute**       | To run code                                    | Code executes if True      |

---

## 🌟 Next Lesson Preview

**Week 4: Otherwise... Else!**

Next week, you'll learn `else` statements—what to do when the condition is False! You'll be able to handle BOTH cases: "if this, do that, otherwise do something else!"

Get ready for even more power! 💪

---

## 🎉 Great Job!

You just learned the most important concept in programming!

**What you accomplished today:**

- ✅ Learned what `if` statements are
- ✅ Wrote your first `if` statements
- ✅ Made programs that decide what to do
- ✅ Understood indentation
- ✅ Built your first "smart" program!

> _BrightByte says: "WOW! You just learned THE most important tool in programming! `if` statements are what make programs think and decide. Every game, every app, every AI system uses if statements millions of times! You're becoming a real programmer who can make programs think! Next week, we'll add 'else' to handle the other case. Keep up the amazing work!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Age Gate:** Create a program that checks if someone is old enough for something
2. **Grade Checker:** Check scores and give different messages
3. **Password Program:** Check if passwords match
4. **Name Greeter:** Greet different people differently

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_

