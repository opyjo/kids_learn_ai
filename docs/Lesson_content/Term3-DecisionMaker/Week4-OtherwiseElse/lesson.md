---
title: "Otherwise... Else!"
description: "Learn else statements - handle both True and False cases in your programs!"
difficulty: "beginner"
order_index: 4
course_slug: "term-3-decision-maker"
is_premium: false
requires_trinket: true
starter_code: |
  # Otherwise... Else!
  # Handle both True and False cases!

  age = 10

  if age >= 13:
      print("You are a teenager!")
  else:
      print("You are not a teenager yet!")

  # Try your own if/else statements!
class_activities: |
  ## 🎮 Class Activity: If/Else Challenge!

  1. Partner up with a classmate
  2. Create a program with at least 3 if/else statements
  3. Each one should handle both True and False cases
  4. Test with different values
  5. Share your programs!

  **Challenge:** Who can create the most creative if/else program?
take_home_assignment: |
  ## 📚 Homework: My If/Else Program

  **Assignment:** Create a Python program that uses at least 5 if/else statements!

  **Requirements:**
  1. Use at least 5 if/else statements
  2. Each should check something different
  3. Handle both True and False cases
  4. Add comments explaining what each checks
  5. Code must run without errors

  **Example ideas:**
  - Age checker (teenager or not)
  - Score checker (pass or fail)
  - Password checker (correct or incorrect)
  - Number checker (even or odd)

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI systems constantly use if/else logic! When a spam filter asks "If this looks like spam, then block it, else allow it", or a recommendation system asks "If user likes action, then show action movies, else show comedies", those are if/else statements!

  You're learning the same decision-making logic that powers every AI system!
---
# Term 3, Lesson 4: Otherwise... Else! ⚖️

**Course:** Term 3: Decision Maker  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Use `else` statements to handle False cases
- Write complete `if/else` blocks
- Handle both True and False scenarios
- Build programs that respond to all situations
- Create more complete decision-making programs!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! Last week, you learned `if` statements—programs that do something IF a condition is True. But what about when it's False? Today, you'll learn `else` statements—what to do OTHERWISE! Now your programs can handle BOTH cases: True AND False!"_

### What's New This Week?

Last week you learned:
- `if` statements — What to do when something is True

This week you'll discover:
- **`else` statements** — What to do when it's False!
- **Complete decision-making** — Handle both cases!
- **More powerful programs** — Programs that always respond!

> _BrightByte says: "Once you can use if/else, you can build programs that handle ANY situation! Games, quizzes, interactive stories—they all use if/else to handle different cases!"_

---

## ⚖️ What Is `else`?

### The "Otherwise" Part

An `else` statement tells Python: "If the condition is False, do THIS instead!"

It's like saying:
- **IF** it's raining, **THEN** bring an umbrella
- **ELSE** (otherwise), don't bring an umbrella

### The Structure

```python
if condition:
    do this if True
else:
    do this if False
```

**Important:** `else` always comes after an `if`! You can't have `else` by itself!

---

## 📝 Your First `if/else` Statement

### Example 1: Age Checker

```python
age = 10

if age >= 13:
    print("You are a teenager!")
else:
    print("You are not a teenager yet!")
```

**What happens:**
1. Python checks: Is `age >= 13`? → No! (10 >= 13 is False)
2. Since it's False, Python SKIPS the `if` part
3. Python runs the `else` part instead
4. Prints: "You are not a teenager yet!"

**Output:**
```
You are not a teenager yet!
```

**Try with age = 15:**
```python
age = 15

if age >= 13:
    print("You are a teenager!")
else:
    print("You are not a teenager yet!")
```

**Output:**
```
You are a teenager!
```

### Example 2: Score Checker

```python
score = 85

if score >= 80:
    print("You passed! Great job!")
else:
    print("You need to study more.")
```

**If score is 85:** Prints "You passed! Great job!"  
**If score is 70:** Prints "You need to study more."

### Example 3: Password Checker

```python
password = "secret123"
correct = "secret123"

if password == correct:
    print("Password correct! Welcome!")
else:
    print("Password incorrect! Access denied.")
```

---

## 🎯 More `if/else` Examples

### Example 1: Even or Odd

```python
number = 10

if number % 2 == 0:
    print("The number is even!")
else:
    print("The number is odd!")
```

**How it works:**
- `number % 2` finds the remainder when dividing by 2
- If remainder is 0, the number is even
- Otherwise, it's odd!

### Example 2: Positive or Negative

```python
number = -5

if number > 0:
    print("The number is positive!")
else:
    print("The number is negative or zero!")
```

### Example 3: Name Greeter

```python
name = "Alex"

if name == "Alex":
    print("Hello, Alex! Welcome back!")
else:
    print("Hello! Nice to meet you!")
```

---

## 🎮 Practice Time!

### Challenge 1: Age Checker

Create a program that checks if someone is a teenager:

```python
age = 12

if age >= 13:
    print("You are a teenager!")
else:
    print("You are not a teenager yet!")
```

### Challenge 2: Pass/Fail Checker

Create a program that checks if a score is passing:

```python
score = 75

if score >= 70:
    print("You passed!")
else:
    print("You failed. Study more!")
```

### Challenge 3: Even/Odd Checker

Create a program that checks if a number is even or odd:

```python
number = 7

if number % 2 == 0:
    print("Even!")
else:
    print("Odd!")
```

### Challenge 4: Your Own If/Else

Create your own if/else statement!

---

## 📝 Key Takeaways

### What Is `else`?

- `else` handles the False case
- It always comes after an `if`
- It runs when the `if` condition is False
- Together, `if/else` handles ALL cases!

### The Structure

```python
if condition:
    do this if True
else:
    do this if False
```

### Important Rules

1. **`else` needs an `if`** — Can't use `else` alone
2. **Same indentation** — `else:` lines up with `if`
3. **Colon after else** — Don't forget the `:`
4. **Indent the code** — Code under `else` must be indented

### Vocabulary Words

| Word              | Definition                                    | Example                    |
| ----------------- | --------------------------------------------- | -------------------------- |
| **else**          | What to do when if condition is False         | `else:`                    |
| **if/else block** | Complete decision with both cases             | `if/else` together         |
| **otherwise**     | Another word for else                         | "Otherwise, do this"       |

---

## 🌟 Next Lesson Preview

**Week 5: Practice Decisions!**

Next week, you'll practice everything you've learned! You'll build password checkers, age gates, and more decision-making programs!

Get ready to become a decision-making expert! 🎯

---

## 🎉 Great Job!

You just learned to handle both cases!

**What you accomplished today:**

- ✅ Learned what `else` statements are
- ✅ Wrote your first `if/else` blocks
- ✅ Handled both True and False cases
- ✅ Built complete decision-making programs
- ✅ Created programs that always respond!

> _BrightByte says: "WOW! Now your programs can handle ANY situation! If/else is the foundation of all interactive programs—games, quizzes, stories, everything! Next week, we'll practice everything and build real decision-making programs. You're becoming a real programmer!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Grade Calculator:** Check scores and give letter grades
2. **Weather Responder:** If sunny, say one thing, else say another
3. **Number Analyzer:** Check if numbers are positive, negative, even, odd
4. **Access Control:** Check passwords and grant/deny access

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_

