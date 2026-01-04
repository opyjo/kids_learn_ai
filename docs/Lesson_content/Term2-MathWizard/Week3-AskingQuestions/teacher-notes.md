# Term 2, Lesson 3: Asking Questions! 🗣️

## Teacher's Guide

**Course:** Term 2: Math Wizard  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces students to `input()`, Python's function for getting information from users. This is a critical milestone—it transforms programs from static displays into interactive experiences. Students will learn to ask questions, store answers, and create programs that feel "alive" and responsive.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Use `input()` to ask users for information
2. Store user input in variables
3. Create interactive programs that respond to users
4. Combine `input()` with `print()` for conversations
5. Build engaging, personalized programs

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing input/output flow

### Pre-Lesson Preparation

1. **Review input() syntax** — Ensure you're comfortable with the function
2. **Prepare demo examples** — Have a few interactive programs ready
3. **Test Trinket input()** — Verify input() works in Trinket (it does!)
4. **Prepare common mistakes** — Know what errors students might make
5. **Think of fun examples** — Stories, quizzes, games that use input()

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time  | Duration | Activity                       | Details                              |
| ----- | -------- | ------------------------------ | ------------------------------------ |
| 0:00  | 5 min    | Review & Hook                  | Quick review, introduce interactivity |
| 0:05  | 10 min   | Introduction to input()        | Teach the function                    |
| 0:15  | 10 min   | Storing Input in Variables     | Connect to Term 1 variables          |
| 0:25  | 15 min   | Hands-On Practice              | Students create interactive programs  |
| 0:40  | 10 min   | Creative Challenges            | Story generators, quizzes             |
| 0:50  | 7 min    | Wrap-up & Homework             | Summary and assignment                |
| 0:57  | 3 min    | Q&A Buffer                     | Questions and preview                |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Hook (5 minutes)

#### Goals

- Quick review of previous weeks
- Build excitement for interactivity
- Transition smoothly into new content

#### Script/Talking Points

> "Welcome back! So far, your programs have been like a one-way conversation—Python talks, but that's it. But today, we're going to change that! Today, you'll learn how to make your programs ASK QUESTIONS and LISTEN to answers!"

**Quick Review:**
> "Who can remind me: what do we use to make Python display something?"

Wait for: `print()`

> "Perfect! And what do we use to store information?"

Wait for: variables

> "Great! Now imagine if we could ASK the user for that information instead of hardcoding it. That's what we're learning today!"

#### Teaching Tips

- Build excitement about interactivity
- Connect to familiar apps (games, quizzes)
- Emphasize that this makes programs "alive"

---

### Part 2: Introduction to input() (10 minutes)

#### Goals

- Teach the `input()` function
- Show how it works step-by-step
- Demonstrate the waiting/pausing behavior

#### Live Coding Demonstration

**Introduction:**
> "The function we use to ask questions is called `input()`. Watch this..."

**Example 1: Your First Question**
```python
name = input("What's your name? ")
print("Hello,", name, "!")
```

> "Let me run this... See how it's waiting? It's asking 'What's your name?' and waiting for me to type something."

Type a name and press Enter.

> "See? I typed 'Alex' and pressed Enter, and now it says 'Hello, Alex!' The program WAITED for my answer!"

**Break it down:**
1. `input("What's your name? ")` — Shows the question and waits
2. You type your answer and press Enter
3. The answer gets stored in `name`
4. `print("Hello,", name, "!")` — Uses your answer!

**Example 2: Multiple Questions**
```python
print("Let's get to know you!")
name = input("What's your name? ")
color = input("What's your favorite color? ")
food = input("What's your favorite food? ")

print("Nice to meet you,", name, "!")
print("I love", color, "too!")
print(food, "sounds delicious!")
```

> "See how it asks one question, waits for an answer, then asks the next? That's how interactive programs work!"

#### Common Mistakes to Address

| Mistake                    | Why It Happens              | How to Fix                                |
| -------------------------- | -------------------------- | ----------------------------------------- |
| Forgetting variable         | Just using `input()` alone | "Always store it: name = input(...)"      |
| Forgetting quotes           | Syntax error               | "The question goes in quotes!"            |
| Not pressing Enter          | Program keeps waiting      | "After typing, press Enter!"              |
| Confusing input() and print() | Similar concepts           | "input() asks, print() tells"            |

#### Teaching Tips

- Emphasize the WAITING behavior
- Show what happens if you don't press Enter
- Connect to Term 1: "Remember variables? We're storing the answer in one!"
- Use dramatic pauses: "And now... it's WAITING for you!"

---

### Part 3: Storing Input in Variables (10 minutes)

#### Goals

- Connect input() to Term 1 variables
- Show how to use stored answers
- Demonstrate multiple inputs

#### Live Coding Demonstration

> "Remember variables from Term 1? We're doing the same thing, but instead of hardcoding the value, we're ASKING for it!"

**Before (Term 1 way):**
```python
name = "Alex"
print("Hello,", name, "!")
```

**Now (Interactive way):**
```python
name = input("What's your name? ")
print("Hello,", name, "!")
```

> "See? Same idea, but now the user gets to choose!"

**Example: Using the Answer Multiple Times**
```python
name = input("What's your name? ")
print("Hi", name, "!")
print("Nice to meet you,", name, "!")
print("I hope you have a great day,", name, "!")
```

> "Once we store it, we can use it as many times as we want!"

#### Teaching Tips

- Strongly connect to Term 1 variables
- Show the similarity: `name = "Alex"` vs `name = input("Name? ")`
- Emphasize: "The answer goes into the variable, just like before!"

---

### Part 4: Hands-On Practice (15 minutes)

#### Goals

- Students practice using input()
- Build confidence through repetition
- Catch and correct mistakes

#### Guided Practice

> "Now it's YOUR turn! Open Trinket and let's practice!"

**Exercise 1: Simple Greeting**
> "Create a program that asks for your name and greets you."

```python
name = input("What's your name? ")
print("Hello,", name, "!")
```

**Exercise 2: Favorite Things**
> "Ask for favorite color, food, and animal, then print them back."

```python
color = input("Favorite color: ")
food = input("Favorite food: ")
animal = input("Favorite animal: ")

print("Your favorites:")
print("Color:", color)
print("Food:", food)
print("Animal:", animal)
```

**Exercise 3: The Interview**
> "Create a mini-interview with 3 questions of your choice!"

Allow creativity here.

#### Teacher Circulation

During this time:
- Check screens for common mistakes
- Help students who forget the variable
- Remind students to press Enter
- Encourage experimentation
- Celebrate creative questions

---

### Part 5: Creative Challenges (10 minutes)

#### Goals

- Apply input() to fun scenarios
- Encourage creativity
- Build toward homework

#### Challenge Options

**Challenge 1: The Silly Story**
> "Create a program that asks for an animal, color, and food, then tells a silly story!"

```python
print("Let's create a silly story!")
animal = input("Name an animal: ")
color = input("Name a color: ")
food = input("Name a food: ")

print("Once upon a time, a", color, animal, "ate", food, "!")
```

**Challenge 2: The Name Game**
> "Ask for first and last name, then do something fun with them!"

```python
first = input("First name: ")
last = input("Last name: ")

print("Full name:", first, last)
print("Initials:", first[0], last[0])
```

**Challenge 3: The Personalized Message**
> "Ask questions and create a personalized birthday message or greeting!"

Allow 5 minutes for creative exploration. Walk around and celebrate interesting solutions.

---

### Part 6: Wrap-up & Homework (7 minutes)

#### Review Key Points

> "What an amazing lesson! Let's review..."

Quick-fire review:
1. "What function asks questions?" → `input()`
2. "Do we need a variable?" → Yes!
3. "What do you press after typing?" → Enter
4. "Can we ask multiple questions?" → Yes!

#### Introduce Homework

> "For homework, you're going to create an 'Interactive Story' program. It should ask questions and use the answers to tell a personalized story!"

**Requirements:**
- Ask at least 5 different questions using input()
- Use the answers in a creative story
- Include at least 2 print statements that use user answers
- Make it fun and engaging!
- Code must run without errors

#### Preview Next Week

> "Next week, we're going to learn something SUPER important: how to turn text into numbers! Right now, when you ask for a number with input(), Python gives you text. We'll learn how to convert it so you can do REAL math! Get ready to build actual calculators!"

---

### Part 7: Q&A Buffer (3 minutes)

Use this time for:
- Student questions
- Helping anyone who fell behind
- Extra challenges for fast finishers
- Celebrating good work

---

## 🤖 AI Activity: Training Data Collection (5-10 minutes)

### What to Do

1. **Introduction** (1 min)
   > "You just learned how to collect answers using input(). Did you know that when you collect answers from classmates, you're creating a dataset - the same kind of data that AI uses to learn?"

2. **Data Collection Activity** (4-5 min)
   - Have students create a simple program that asks: "What's your favorite number?"
   - Have 5-10 students run the program and enter their favorite numbers
   - Collect all the answers (write them on the board or screen)
   - Explain: "This list of answers is called a dataset! AI learns from datasets with millions of answers!"

3. **Discussion** (2-3 min)
   - "What patterns do you notice in the favorite numbers?"
   - "If you had 1,000 answers instead of 10, what could you learn?"
   - "How do you think AI uses datasets like this?"

4. **Connection** (1 min)
   > "When you collect answers using input(), you're doing exactly what AI programmers do - gathering data! AI learns from millions of answers, just like you collected answers today. You're learning the same process that trains AI!"

### Discussion Questions

- "What patterns do you see in the data we collected?"
- "How many answers would you need to find a pattern?"
- "How do you think AI uses datasets to learn?"

### Teaching Tips

- Keep it simple - focus on "collecting data = dataset"
- Use concrete examples: "Netflix collects data about what shows people like"
- Connect to their code: "Your input() program collects data - that's a dataset!"
- If students ask technical questions, simplify: "AI learns from lots of data, just like we collected today"
- Emphasize they're learning real AI concepts: "This is exactly how AI training works!"

### Alternative Activity (If Short on Time)

- Quick discussion: "Who has filled out a survey? That's collecting data!"
- Connect: "When you use input() to collect answers, you're creating a dataset!"
- Emphasize: "AI learns from datasets with millions of answers - you're learning the same process!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**
- [ ] Can student use input() correctly?
- [ ] Does student remember to use a variable?
- [ ] Can student ask multiple questions?
- [ ] Does student understand the waiting behavior?
- [ ] Is student creating engaging programs?

### Homework Assessment: "My Interactive Story"

| Criteria                | Exceeds (3)                      | Meets (2)              | Developing (1)        |
| ----------------------- | -------------------------------- | ---------------------- | --------------------- |
| **Uses input()**        | 7+ questions, creative use       | 5+ questions           | Fewer than 5          |
| **Uses answers**        | Answers woven into story creatively | Answers used in story | Answers not used      |
| **Print statements**    | 5+ statements using answers       | 2+ statements         | Fewer than 2          |
| **Creativity**          | Highly engaging, original         | Clear theme, fun       | Basic or unclear      |
| **Code quality**        | Well-formatted, commented        | Runs correctly         | Errors present        |
| **Code runs**           | No errors, polished              | Minor issues, runs     | Major errors          |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide a template with blanks to fill in
- Start with just 2-3 questions
- Use simple examples first
- Pair with a peer
- Focus on getting input() working before creativity
- Reduce requirement to 3 questions

#### For Advanced Students

- Challenge with 10+ questions
- Ask them to create a "quiz" program
- Introduce string methods (like `.upper()`, `.lower()`) as bonus
- Have them create a "choose your own adventure" starter
- Challenge with input validation (checking answers)
- Preview `int()` conversion as a teaser

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                     | Prevention                          | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Forgetting variable         | Emphasize early and often           | "Always: variable = input(...)"               |
| Forgetting quotes           | Show syntax clearly                 | "The question goes in quotes!"                |
| Not pressing Enter          | Explain the waiting behavior        | "After typing, press Enter!"                  |
| Syntax errors               | Type slowly during demos            | Check for missing quotes or parentheses       |

### Conceptual Issues

| Problem                     | Signs                               | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Doesn't understand waiting  | Confused why program paused         | "It's waiting for YOU to type!"               |
| Confuses input() and print() | Uses wrong function                 | "input() asks, print() tells"                 |
| Doesn't use stored answer   | Asks but doesn't use variable      | "Use the variable you stored it in!"          |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students grasp input() quickly?
   - Were they excited about interactivity?
   - Did they understand the waiting behavior?

2. **What needs improvement?**
   - Any concepts that took longer than expected?
   - Common mistakes to address next week?

3. **Individual student notes:**
   - Who excelled at creating interactive programs?
   - Who needs extra support with input()?

4. **Term 2 specific notes:**
   - Are students ready for int() conversion next week?
   - Any confusion about text vs numbers?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Input() Understanding:
- 

Variable Storage Understanding:
- 

Key Mistakes Observed:
- 

Students Excelling:
-

Students Needing Support:
-

Adjustments for Week 4:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Python Documentation:** input() function
- **Trinket Help:** Input/output in Trinket
- **Teaching Resources:** Interactive programming concepts

### For Students (Share with Parents)

- **Trinket Practice:** Create interactive programs
- **Real-world challenge:** Build a program that interviews family members
- **Creative projects:** Story generators, quizzes, games

### Parent Communication Template

```
Subject: Week 3 Complete - Asking Questions! 🗣️

Dear Parent/Guardian,

This week your child learned how to make programs INTERACTIVE!

New concept:
- input() - asking users for information
- Programs can now have conversations with users!

This is a huge milestone - it's the same skill that powers every app, game, and AI assistant!

Homework due by [date]:
"My Interactive Story" - a program that asks questions and tells a personalized story

How you can help:
- Try running their program and answering the questions
- Ask them to create a program that interviews you
- Encourage creative questions and stories

Questions? Reply to this email!

Happy coding!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review input() syntax
- [ ] Prepare demo examples
- [ ] Test Trinket input() functionality
- [ ] Prepare common mistakes list
- [ ] Think of fun interactive examples

### During Class

- [ ] Reviewed previous concepts
- [ ] Introduced input() function
- [ ] Showed how to store answers in variables
- [ ] Students practiced with input()
- [ ] Creative challenges completed
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Review homework submissions as they come in
- [ ] Prepare for Week 4 (int() conversion)

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: input() is a game-changer! It transforms programs from static displays into interactive experiences. Make sure students understand the waiting behavior and the importance of storing answers in variables. This sets the foundation for building real calculators and interactive programs next week!_ 🗣️

