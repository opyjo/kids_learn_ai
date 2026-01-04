---
title: "Quiz Builder"
description: "Build an interactive quiz program that checks answers and calculates scores!"
difficulty: "beginner"
order_index: 6
course_slug: "term-4-more-choices"
is_premium: false
requires_trinket: true
starter_code: |
  # Quiz Builder
  # Build an interactive quiz program!

  score = 0

  print("=== WELCOME TO THE QUIZ ===")
  print("")

  # Question 1
  answer1 = input("What is 2 + 2? ")
  if answer1 == "4":
      print("Correct! ✅")
      score = score + 1
  else:
      print("Wrong! The answer is 4. ❌")

  print("")
  print(f"Your score: {score}/1")

  # Add more questions!
class_activities: |
  ## 🎮 Class Activity: Quiz Building Workshop!

  **Part 1: Basic Quiz (15 min)**
  - Build a 3-question quiz together
  - Check answers with if/else
  - Calculate score

  **Part 2: Enhancements (20 min)**
  - Add more questions
  - Add different question types
  - Add feedback messages
  - Make it your own!

  **Part 3: Share & Play (10 min)**
  - Share your quizzes
  - Take each other's quizzes
  - Give feedback

  **Challenge:** Who can create the most fun and challenging quiz?
take_home_assignment: |
  ## 📚 Homework: My Complete Quiz Program

  **Assignment:** Build a complete interactive quiz program!

  **Requirements:**
  1. At least 5 questions
  2. Use input() to get answers
  3. Use if/else to check each answer
  4. Track score (add 1 for each correct answer)
  5. Display score at the end
  6. Add feedback for correct/incorrect answers
  7. Add comments explaining your quiz
  8. Code must run without errors

  **Bonus Points:**
  - Add different question types (multiple choice, true/false)
  - Add percentage score
  - Add grade based on score (A, B, C, etc.)
  - Add encouragement messages
  - Make it themed (science, math, fun facts, etc.)
  - Add decorative borders

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI-powered learning platforms use quiz systems just like you're building! When you take an online quiz and it checks your answers, gives you a score, and provides feedback—that's using the same if/else logic you're learning! AI tutors use this to help students learn and track progress! But how does AI know what the right answers are? AI learns from training data - millions of questions with correct answers, just like your quiz has correct answers stored in your code!

  You're building the same quiz logic that powers AI learning systems!
---
# Term 4, Lesson 6: Quiz Builder! 🎯

**Course:** Term 4: More Choices  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Build an interactive quiz program
- Use if/else to check answers
- Track and calculate scores
- Give feedback to users
- Create engaging quiz programs!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! You've built a grade calculator—that was amazing! Today, we're going to build something even MORE interactive—a QUIZ program! Users will answer questions, your program will check if they're right, and it will keep track of their score! This is like building a real quiz app!"_

### What's Special About This Week?

Last week you built:
- A grade calculator — Calculated grades from scores

This week you'll build:
- **An interactive quiz** — Users answer questions!
- **Answer checking** — Use if/else to check if answers are correct
- **Score tracking** — Keep track of how many are right
- **Feedback system** — Tell users if they're right or wrong!

> _BrightByte says: "Quizzes are everywhere—games, learning apps, tests! Once you can build a quiz, you can build interactive programs that engage users. This is real programming! Let's get started!"_

---

## 🎯 Building Your First Quiz

### Step 1: Basic Quiz Structure

Let's start with a simple quiz with one question:

```python
score = 0

print("=== WELCOME TO THE QUIZ ===")
print("")

# Question 1
answer1 = input("What is 2 + 2? ")
if answer1 == "4":
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is 4. ❌")

print("")
print(f"Your score: {score}/1")
```

**How it works:**
1. Start with `score = 0`
2. Ask a question with `input()`
3. Check if answer is correct with `if`
4. If correct, add 1 to score
5. Display the score

**Try it!** Run the program and answer the question!

### Step 2: Multiple Questions

Let's add more questions:

```python
score = 0

print("=== WELCOME TO THE QUIZ ===")
print("")

# Question 1
answer1 = input("What is 2 + 2? ")
if answer1 == "4":
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is 4. ❌")

print("")

# Question 2
answer2 = input("What is 5 + 3? ")
if answer2 == "8":
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is 8. ❌")

print("")

# Question 3
answer3 = input("What is 10 - 4? ")
if answer3 == "6":
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is 6. ❌")

print("")
print(f"Your final score: {score}/3")
```

**Notice the pattern:**
- Ask question
- Check answer
- Update score if correct
- Repeat!

### Step 3: Better Feedback

Let's make the feedback more helpful:

```python
score = 0

print("=== MATH QUIZ ===")
print("")

# Question 1
answer1 = input("What is 2 + 2? ")
if answer1 == "4":
    print("Correct! ✅ Great job!")
    score = score + 1
else:
    print("Wrong! ❌ The answer is 4.")
    print("Remember: 2 + 2 = 4")

print("")

# Question 2
answer2 = input("What is 5 × 3? ")
if answer2 == "15":
    print("Correct! ✅ Excellent!")
    score = score + 1
else:
    print("Wrong! ❌ The answer is 15.")
    print("Remember: 5 × 3 = 15")

print("")
print(f"Your score: {score}/2")
```

---

## 🎮 Complete Quiz Example

Here's a complete quiz program:

```python
# === QUIZ PROGRAM ===
# Interactive quiz with scoring

score = 0

print("=" * 40)
print("     WELCOME TO THE MATH QUIZ!")
print("=" * 40)
print("")

# Question 1
print("Question 1:")
answer1 = input("What is 2 + 2? ")
if answer1 == "4":
    print("✅ Correct! Great job!")
    score = score + 1
else:
    print("❌ Wrong! The answer is 4.")
print("")

# Question 2
print("Question 2:")
answer2 = input("What is 5 × 3? ")
if answer2 == "15":
    print("✅ Correct! Excellent!")
    score = score + 1
else:
    print("❌ Wrong! The answer is 15.")
print("")

# Question 3
print("Question 3:")
answer3 = input("What is 10 - 4? ")
if answer3 == "6":
    print("✅ Correct! Well done!")
    score = score + 1
else:
    print("❌ Wrong! The answer is 6.")
print("")

# Question 4
print("Question 4:")
answer4 = input("What is 20 ÷ 4? ")
if answer4 == "5":
    print("✅ Correct! Awesome!")
    score = score + 1
else:
    print("❌ Wrong! The answer is 5.")
print("")

# Question 5
print("Question 5:")
answer5 = input("What is 3 + 7? ")
if answer5 == "10":
    print("✅ Correct! Fantastic!")
    score = score + 1
else:
    print("❌ Wrong! The answer is 10.")
print("")

# Final Results
print("=" * 40)
print("     QUIZ RESULTS")
print("=" * 40)
print(f"Your score: {score}/5")

# Calculate percentage
percentage = (score / 5) * 100
print(f"Percentage: {percentage:.0f}%")

# Grade
if score == 5:
    print("Grade: A+ 🌟 Perfect score!")
elif score == 4:
    print("Grade: A ⭐ Great job!")
elif score == 3:
    print("Grade: B 👍 Good work!")
elif score == 2:
    print("Grade: C 💪 Keep practicing!")
else:
    print("Grade: D 📚 Study more!")

print("=" * 40)
print("Thanks for taking the quiz!")
```

---

## 🎯 Different Question Types

### Multiple Choice

You can create multiple choice questions:

```python
print("Question 1: What is the capital of France?")
print("A. London")
print("B. Paris")
print("C. Berlin")
print("D. Madrid")
answer1 = input("Enter A, B, C, or D: ")

if answer1 == "B" or answer1 == "b":
    print("✅ Correct! Paris is the capital of France!")
    score = score + 1
else:
    print("❌ Wrong! The answer is B - Paris.")
```

### True/False

You can create true/false questions:

```python
print("Question 1: Python is a programming language.")
answer1 = input("True or False? ")

if answer1 == "True" or answer1 == "true":
    print("✅ Correct! Python is a programming language!")
    score = score + 1
else:
    print("❌ Wrong! The answer is True.")
```

---

## 🎮 Practice Time!

### Challenge 1: Build a Math Quiz

Create a 5-question math quiz!

### Challenge 2: Build a Science Quiz

Create a quiz about science facts!

### Challenge 3: Build a Fun Facts Quiz

Create a quiz about fun facts or your favorite topic!

---

## 📝 Key Takeaways

### Quiz Structure

1. **Start with score = 0** — Track correct answers
2. **Ask question** — Use `input()`
3. **Check answer** — Use `if/else`
4. **Update score** — Add 1 if correct: `score = score + 1`
5. **Display results** — Show final score at the end

### Important Tips

1. **Use == to compare** — `answer == "4"` not `answer = "4"`
2. **Track score** — Start at 0, add 1 for each correct answer
3. **Give feedback** — Tell users if they're right or wrong
4. **Test your quiz** — Try both correct and wrong answers
5. **Make it fun** — Add emojis, messages, themes!

### What You're Using

- **input()** — Get answers from users
- **if/else** — Check if answers are correct
- **Variables** — Store score and answers
- **Math** — Calculate percentage
- **elif** — For grading scores

---

## 🌟 Next Lesson Preview

**Week 7: Project - Big Adventure!**

Next week, you'll build your TERM PROJECT—an expanded adventure game! You'll use everything you've learned—if, else, elif, and, or, menus, quizzes—to create an amazing interactive adventure with multiple paths and endings!

**Sneak peek:**

```python
print("You land on a strange planet...")
choice = input("Choose: 1. Cave, 2. Forest, 3. Ship: ")

if choice == "1":
    print("You enter the cave...")
elif choice == "2":
    print("You walk into the forest...")
# ... and more!
```

Get ready for your biggest project yet! 🎮

---

## 🎉 Great Job!

You just built an interactive quiz program!

**What you accomplished today:**

- ✅ Built a working quiz program
- ✅ Used if/else to check answers
- ✅ Tracked scores correctly
- ✅ Gave feedback to users
- ✅ Created an engaging interactive program!

> _BrightByte says: "AMAZING! 🎯 You just built a quiz program! This is real interactive programming—users answer questions, your program responds, and you track their progress! Next week, we'll use everything you've learned to build your TERM PROJECT—an expanded adventure game! You're ready for it! Keep up the fantastic work!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Add more questions** — Make it 10+ questions
2. **Add different types** — Multiple choice, true/false, fill-in-the-blank
3. **Add percentage** — Calculate and display percentage score
4. **Add grades** — Give letter grades based on score
5. **Make it themed** — Science, history, math, fun facts, etc.
6. **Add difficulty levels** — Easy, medium, hard questions

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_
