---
title: "Practice Decisions!"
description: "Practice everything you've learned - build password checkers, age gates, and decision-making programs!"
difficulty: "beginner"
order_index: 5
course_slug: "term-3-decision-maker"
is_premium: false
requires_trinket: true
starter_code: |
  # Practice Decisions!
  # Let's build decision-making programs!

  # Password Checker
  password = input("Enter password: ")
  
  if password == "secret123":
      print("Access granted!")
  else:
      print("Access denied!")

  # Try creating your own decision programs!
class_activities: |
  ## 🎮 Class Activity: Decision Maker Challenge!

  1. Work in pairs
  2. Choose a problem to solve with if/else (password, age, score, etc.)
  3. Build a decision-making program together
  4. Test it with different inputs
  5. Share your programs with the class!

  **Challenge:** Who can create the most creative decision-making program?
take_home_assignment: |
  ## 📚 Homework: My Decision Program

  **Assignment:** Create a Python program that makes decisions using if/else!

  **Requirements:**
  1. Use at least 3 if/else statements
  2. Ask the user for input using input()
  3. Make decisions based on the input
  4. Handle both True and False cases
  5. Add comments explaining what each decision does
  6. Code must run without errors

  **Example ideas:**
  - Password checker
  - Age gate (check if old enough)
  - Score checker (pass/fail)
  - Yes/No game

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Every security system, every game, every app uses if/else to make decisions! When your phone unlocks "if password is correct, else deny access", or a game checks "if score is high, else game over", those are if/else statements!

  You're building the same decision-making logic that powers every interactive program!
---
# Term 3, Lesson 5: Practice Decisions! 🎯

**Course:** Term 3: Decision Maker  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Apply if/else to real-world problems
- Build password checkers and age gates
- Combine input() with if/else
- Create interactive decision-making programs
- Practice everything you've learned!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! You've learned if and else statements—the tools that make programs think! Today, we're going to PRACTICE everything and build REAL decision-making programs like password checkers, age gates, and interactive games! This is where it all comes together!"_

### What We're Doing Today

This week is all about **application**! You'll use if/else to solve real problems:

- Password checkers
- Age gates
- Score checkers
- Yes/No games
- And more!

> _BrightByte says: "This is what real programmers do—they use if/else to make programs that respond to users. You're building the same type of programs that power games, apps, and websites!"_

---

## 🔐 Challenge 1: Password Checker

### The Problem

You want to check if a password is correct. Let's build a password checker!

### The Solution

```python
print("=== PASSWORD CHECKER ===")
password = input("Enter password: ")

if password == "secret123":
    print("Access granted! Welcome!")
else:
    print("Access denied! Wrong password.")
```

**Example Output:**
```
=== PASSWORD CHECKER ===
Enter password: secret123
Access granted! Welcome!
```

**Or:**
```
=== PASSWORD CHECKER ===
Enter password: wrong
Access denied! Wrong password.
```

---

## 🎂 Challenge 2: Age Gate

### The Problem

You want to check if someone is old enough for something. Let's build an age gate!

### The Solution

```python
print("=== AGE GATE ===")
age_text = input("How old are you? ")
age = int(age_text)

if age >= 13:
    print("You are old enough! Welcome!")
else:
    print("Sorry, you must be 13 or older.")
```

---

## 📊 Challenge 3: Score Checker

### The Problem

You want to check if a score is passing. Let's build a score checker!

### The Solution

```python
print("=== SCORE CHECKER ===")
score_text = input("What was your score? ")
score = int(score_text)

if score >= 70:
    print("You passed! Great job!")
else:
    print("You failed. Study more and try again!")
```

---

## 🎮 Challenge 4: Yes/No Game

### The Problem

You want to create a simple yes/no game. Let's build it!

### The Solution

```python
print("=== YES/NO GAME ===")
print("Do you like Python?")
answer = input("Enter yes or no: ")

if answer == "yes":
    print("Awesome! Python is great!")
else:
    print("That's okay! You'll love it soon!")
```

---

## 🎯 Challenge 5: Even/Odd Checker

### The Problem

You want to check if a number is even or odd. Let's build it!

### The Solution

```python
print("=== EVEN/ODD CHECKER ===")
number_text = input("Enter a number: ")
number = int(number_text)

if number % 2 == 0:
    print("The number is even!")
else:
    print("The number is odd!")
```

---

## 🎮 Practice Time!

### Your Turn: Build Your Own!

Choose one of these challenges or create your own:

1. **Password Checker** — Check if password is correct
2. **Age Gate** — Check if old enough
3. **Score Checker** — Check if passing
4. **Yes/No Game** — Simple interactive game
5. **Your Own Idea!** — Create something you want!

---

## 📝 Key Takeaways

### What You Can Build

- **Password checkers** — Security programs
- **Age gates** — Check if old enough
- **Score checkers** — Pass/fail programs
- **Interactive games** — Yes/no games
- **Any decision program!** — If it needs a decision, you can build it!

### Important Things to Remember

1. **Always use input()** — Get information from user
2. **Convert if needed** — Use int() for numbers
3. **Use if/else** — Handle both cases
4. **Test both cases** — Test True AND False
5. **Add comments** — Explain what you're doing

---

## 🌟 Next Lesson Preview

**Week 6: Story Choices!**

Next week, you'll learn to build interactive stories that change based on user choices! You'll create choose-your-own-adventure stories!

Get ready to tell stories with code! 📖

---

## 🎉 Great Job!

You just practiced building decision-making programs!

**What you accomplished today:**

- ✅ Applied if/else to real problems
- ✅ Built password checkers and age gates
- ✅ Combined input() with if/else
- ✅ Created interactive programs
- ✅ Practiced everything you learned!

> _BrightByte says: "WOW! You're building real decision-making programs! Password checkers, age gates, games—these are the same types of programs that power real apps and websites! Next week, we'll build interactive stories. You're becoming a real programmer!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Grade Calculator:** Check scores and give letter grades
2. **Weather Responder:** Respond differently based on weather
3. **Number Analyzer:** Check if numbers are positive, negative, even, odd
4. **Access Control:** Multiple password checks

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_

