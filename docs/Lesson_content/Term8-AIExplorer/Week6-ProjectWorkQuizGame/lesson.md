---
title: "Project Work - Quiz Game"
description: "Build your quiz game using lists of questions and answers - your first project for graduation!"
difficulty: "beginner"
order_index: 6
course_slug: "term-8-ai-explorer"
is_premium: false
requires_trinket: true
starter_code: |
  # ================================
  # QUIZ GAME
  # By: [Your Name]
  # Term 8 Project Part A
  # ================================

  import random

  # Lists of questions and answers
  questions = [
      "What do we use to store information?",
      "What keyword makes decisions?",
      "What do we use to repeat code?"
  ]

  answers = [
      "variable",
      "if",
      "loop"
  ]

  score = 0

  print("=== PYTHON QUIZ GAME ===")
  print("")

  # Loop through questions
  for i in range(len(questions)):
      print(f"Question {i+1}: {questions[i]}")
      user_answer = input("Your answer: ")
      
      if user_answer.lower() == answers[i].lower():
          print("CORRECT! 🎉")
          score = score + 1
      else:
          print(f"Wrong! The answer was: {answers[i]}")
      print("")

  print(f"FINAL SCORE: {score} out of {len(questions)}")
class_activities: |
  ## 🎮 Class Activity: Quiz Game Workshop!

  **Part 1: Planning (10 min)**
  - Review the requirements
  - Plan your questions and answers
  - Think about your quiz theme

  **Part 2: Building (35 min)**
  - Create your question and answer lists
  - Build the quiz loop
  - Add score tracking
  - Test your game!

  **Part 3: Testing & Polish (10 min)**
  - Test with different answers
  - Fix any bugs
  - Add creative touches
  - Make it yours!

  **Part 4: Preview (5 min)**
  - Run your complete quiz
  - Make final adjustments
  - Get ready to continue next week!
take_home_assignment: |
  ## 📚 Homework: Complete Your Quiz Game

  **Assignment:** Finish and polish your quiz game for graduation!

  **Requirements:**
  1. Welcome message with decorative borders
  2. At least 5 questions stored in a list
  3. Answers stored in a matching list
  4. Loop through each question
  5. Check if answer is correct
  6. Track and display score
  7. Show final results
  8. NO BUGS - code runs perfectly!
  9. Add comments explaining your code

  **Bonus Points:**
  - More than 5 questions (10+ questions)
  - Multiple choice questions
  - Different difficulty levels
  - Hints for questions
  - Creative theme and messages

  **Submit:** Share your Trinket link. Be ready to present at graduation!
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses the same pattern for quizzes and tests! When AI learns, it's tested with questions and answers. When AI takes exams, it processes lists of questions. Your quiz game uses the same structure that AI uses for learning and testing!

  You're building something that works like AI learning systems!
---

# Term 8, Lesson 6: Project Work - Quiz Game 🎮

**Course:** Term 8: AI Explorer  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 8 of 8 | **Week:** 6 of 8

---

## 🎯 Project Overview

This is **Part A** of your graduation project! You're going to create a **Quiz Game** that uses lists to store questions and answers, then loops through them to create an interactive quiz!

### What You'll Build

A complete quiz game that:
- Stores questions in a list
- Stores answers in a list
- Loops through each question
- Checks if answers are correct
- Tracks and displays score
- Shows final results

---

## 🤖 Welcome from BrightByte!

> _"THIS IS IT! 🎉 Your graduation project begins! You're going to create a Quiz Game using lists—your first data structure! This combines everything you've learned: lists, loops, decisions, and more. This is Part A of your graduation project. Ready to build something amazing?"_

---

## 📋 Project Requirements

### Must Have (Required)

1. **Welcome Screen**
   - Decorative borders
   - Title: "Quiz Game" or similar
   - Your name as creator

2. **Question and Answer Lists**
   - At least 5 questions in a list
   - Matching answers in another list
   - Questions should be related (same theme)

3. **Quiz Loop**
   - Loop through each question
   - Ask the question
   - Get user's answer
   - Check if correct

4. **Score Tracking**
   - Track correct answers
   - Display score after each question
   - Show final score at the end

5. **Final Results**
   - Show total score
   - Show number of questions
   - Congratulatory message

6. **Code Quality**
   - Comments explaining sections
   - No bugs—runs perfectly
   - Clean, readable code

### Bonus Features (Optional)

- **More questions** — 10+ questions instead of 5
- **Multiple choice** — Give options to choose from
- **Difficulty levels** — Easy, medium, hard
- **Hints** — Provide hints for questions
- **Themes** — Creative quiz themes
- **Enhanced feedback** — Creative messages

---

## 🎮 Step-by-Step Guide

### Step 1: Set Up Your Program

```python
# ================================
# QUIZ GAME
# By: [Your Name]
# Term 8 Project Part A
# ================================

print("=" * 40)
print("   WELCOME TO MY QUIZ GAME!")
print("=" * 40)
print("")
```

### Step 2: Create Question and Answer Lists

```python
# List of questions
questions = [
    "What do we use to store information?",
    "What keyword makes decisions?",
    "What do we use to repeat code?",
    "What data structure stores multiple items?",
    "What do we use to generate random numbers?"
]

# List of answers (matching order!)
answers = [
    "variable",
    "if",
    "loop",
    "list",
    "random"
]
```

**Important:** Questions and answers must be in the same order!

### Step 3: Initialize Score

```python
score = 0
```

### Step 4: Loop Through Questions

```python
# Loop through each question
for i in range(len(questions)):
    print(f"\nQuestion {i+1}: {questions[i]}")
    user_answer = input("Your answer: ")
    
    # Check if answer is correct
    if user_answer.lower() == answers[i].lower():
        print("🎉 CORRECT!")
        score = score + 1
    else:
        print(f"❌ Wrong! The answer was: {answers[i]}")
    
    print(f"Score: {score}/{i+1}")
```

### Step 5: Show Final Results

```python
print(f"\n=== QUIZ COMPLETE ===")
print(f"Final Score: {score} out of {len(questions)}")

if score == len(questions):
    print("Perfect score! You're a Python expert! 🎉")
elif score >= len(questions) * 0.8:
    print("Great job! You know your stuff! 🌟")
else:
    print("Good try! Keep learning! 💪")
```

---

## 💡 Tips for Success

### Tip 1: Plan Your Questions First

Before coding, write down:
- What theme? (Python, games, animals, etc.)
- What questions?
- What answers?

### Tip 2: Keep Lists in Sync

Make sure:
- `questions[0]` matches `answers[0]`
- `questions[1]` matches `answers[1]`
- And so on!

### Tip 3: Test Frequently

After each feature, test it!

### Tip 4: Use `.lower()` for Answers

```python
if user_answer.lower() == answers[i].lower():
```

This makes answers case-insensitive (accepts "Variable" or "variable").

### Tip 5: Make It Yours!

Add your personal touch—creative messages, fun themes, your style!

---

## 🎮 Project Checklist

### Before You Start

- [ ] I understand the requirements
- [ ] I have my questions planned
- [ ] I know how to use lists and loops
- [ ] I'm ready to create something amazing!

### While Building

- [ ] Welcome screen created
- [ ] Question list created (5+ questions)
- [ ] Answer list created (matching order)
- [ ] Quiz loop working
- [ ] Answer checking working
- [ ] Score tracking working
- [ ] Final results showing
- [ ] Comments added
- [ ] Code tested and runs without errors

### Before Submitting

- [ ] All requirements met
- [ ] Code runs perfectly
- [ ] Comments explain the code
- [ ] It's creative and fun!
- [ ] Ready for graduation!

---

## 🌟 Next Week Preview

**Week 7: Project Work - AI Presentation**

Next week, you'll work on Part B:

- **Choose an AI topic** — Netflix, Siri, self-driving cars, etc.
- **Create a presentation** — What the AI does, what data it uses
- **Prepare for graduation** — Get ready to present!

**Sneak peek:**

> "You'll choose an AI topic you're interested in and create a short presentation about it. This is Part B of your graduation project!"

Get ready for your AI presentation! 🤖

---

## 🎉 You've Got This!

This is your graduation project!

**Remember:**
- You know lists
- You know loops
- You know how to combine them
- You can build this!

> _BrightByte says: "You've learned SO much! Now it's time to put it all together and create your quiz game. This is Part A of your graduation project. Take your time, test as you go, and make it amazing! I can't wait to see what you create!"_

---

## 📚 Need Help?

### Common Issues

**Problem:** Answers don't match
- **Solution:** Make sure questions and answers are in the same order

**Problem:** Score not updating
- **Solution:** Make sure you update score inside the loop

**Problem:** Case sensitivity
- **Solution:** Use `.lower()` to make answers case-insensitive

### Resources

- Review previous lessons on lists and loops
- Ask your instructor
- Help your classmates

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_This is YOUR graduation project! Make it amazing! You've got this!_ 🎮✨

