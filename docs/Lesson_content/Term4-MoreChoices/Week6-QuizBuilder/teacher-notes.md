# Term 4, Lesson 6: Quiz Builder! 🎯

## Teacher's Guide

**Course:** Term 4: More Choices  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson teaches students to build interactive quiz programs using input(), if/else for answer checking, and score tracking. This reinforces all decision-making skills while creating an engaging, interactive program. It prepares students for the term project next week.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Build an interactive quiz program
2. Use input() to get answers from users
3. Use if/else to check if answers are correct
4. Track and calculate scores
5. Give feedback to users

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing structure
- Optional: Sample quizzes to show format

### Pre-Lesson Preparation

1. **Review input() and if/else** — Ensure students remember both
2. **Prepare quiz example** — Have a working quiz ready
3. **Think about question types** — Math, science, fun facts
4. **Prepare common mistakes** — Forgetting ==, not tracking score
5. **Plan step-by-step approach** — Build incrementally

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity | Details |
| ---- | -------- | -------- | ------- |
| 0:00 | 5 min | Introduction | What we're building |
| 0:05 | 15 min | Basic Quiz | Build 1-question quiz together |
| 0:20 | 15 min | Multiple Questions | Add more questions |
| 0:35 | 10 min | Score Tracking | Calculate and display score |
| 0:45 | 10 min | Enhancements | Add feedback, grading |
| 0:55 | 3 min | Wrap-up & Homework | Summary and assignment |
| 0:58 | 2 min | Q&A Buffer | Questions |

---

## 📚 Detailed Teaching Guide

### Part 1: Introduction (5 minutes)

#### Goals

- Set context
- Show what we're building
- Get students excited

#### The Introduction

> "Today, we're going to build something interactive and fun—a QUIZ program! Users will answer questions, your program will check if they're right, and it will keep track of their score!"

**Show a sample:**

```
=== WELCOME TO THE QUIZ ===

What is 2 + 2? 4
✅ Correct! Great job!

Your score: 1/1
```

> "This is what we're building! Let's do it!"

#### Teaching Tips

- Build excitement
- Show the end goal
- Keep it brief

---

### Part 2: Basic Quiz (15 minutes)

#### Goals

- Build a simple 1-question quiz
- Review input() and if/else
- Get students coding

#### Building Together

> "Let's start with one question. We'll ask it, check the answer, and give feedback."

```python
score = 0

print("=== WELCOME TO THE QUIZ ===")
print("")

answer1 = input("What is 2 + 2? ")
if answer1 == "4":
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is 4. ❌")

print("")
print(f"Your score: {score}/1")
```

> "Type this with me. Notice: we start with score = 0, ask the question, check if it's '4', and if correct, we add 1 to the score."

**Test it:**
> "Run it! Try answering '4' and also try '5'. What happens?"

#### Teaching Tips

- Build step by step
- Emphasize score = score + 1
- Emphasize == for comparison
- Test with correct and wrong answers
- Keep it simple first

---

### Part 3: Multiple Questions (15 minutes)

#### Goals

- Add more questions
- Show the pattern
- Practice repetition

#### Adding Questions

> "Now let's add more questions! We'll do the same thing for each question."

Show the pattern:

```python
# Question 1
answer1 = input("What is 2 + 2? ")
if answer1 == "4":
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is 4. ❌")

# Question 2
answer2 = input("What is 5 + 3? ")
if answer2 == "8":
    print("Correct! ✅")
    score = score + 1
else:
    print("Wrong! The answer is 8. ❌")
```

> "See the pattern? Same structure for each question. Let's add 2-3 more together!"

Guide students through adding 2-3 more questions.

#### Teaching Tips

- Show the pattern clearly
- Emphasize repetition is okay
- Help students who get stuck
- Celebrate when it works

---

### Part 4: Score Tracking (10 minutes)

#### Goals

- Calculate final score
- Display results clearly
- Add percentage

#### Adding Final Results

> "Now let's show the final results at the end!"

```python
print("")
print("=" * 40)
print("     QUIZ RESULTS")
print("=" * 40)
print(f"Your score: {score}/5")

# Calculate percentage
percentage = (score / 5) * 100
print(f"Percentage: {percentage:.0f}%")
```

> "We calculate percentage by dividing score by total questions, then multiplying by 100. Let's add this!"

Guide students through adding final results.

#### Teaching Tips

- Show the math clearly
- Explain percentage calculation
- Make it look professional
- Test with different scores

---

### Part 5: Enhancements (10 minutes)

#### Goals

- Add grading
- Add better feedback
- Make it look professional

#### Adding Grades

> "Let's add letter grades based on score!"

```python
if score == 5:
    print("Grade: A+ 🌟 Perfect score!")
elif score == 4:
    print("Grade: A ⭐ Great job!")
elif score == 3:
    print("Grade: B 👍 Good work!")
# ... etc
```

> "This uses elif! Let's add it!"

Also add better formatting and messages.

#### Teaching Tips

- Keep enhancements simple
- Focus on making it work
- Then make it look nice
- Encourage creativity

---

### Part 6: Wrap-up & Homework (3 minutes)

#### Review Key Points

> "What did we build today?"

Quick review:
1. "How do we get answers?" → input()
2. "How do we check answers?" → if/else
3. "How do we track score?" → score = score + 1

#### Introduce Homework

> "For homework, build a complete quiz with at least 5 questions!"

#### Preview Next Week

> "Next week, we'll build your TERM PROJECT—an expanded adventure game using everything you've learned!"

---

## 🤖 AI Activity: How AI Knows Right Answers (5-10 minutes)

### What to Do

1. **Introduction** (1 min)
   > "You just built a quiz that checks answers. But how does AI know what the right answers are?"

2. **Training Data Discussion** (4-5 min)
   - Ask: "How does your quiz know the right answers?"
   - Explain: "You programmed them in your code! But AI learns from training data - millions of questions with correct answers"
   - Show: "Your quiz has 5 questions with answers. AI learns from millions of questions!"
   - Discuss: "How do you think AI gets all those questions and answers?"

3. **Discussion** (2-3 min)
   - "How does your quiz know the right answers?"
   - "How do you think AI learns the right answers?"
   - "What's the difference between your quiz and an AI quiz?"

4. **Connection** (1 min)
   > "Your quiz has correct answers stored in your code - that's programming! AI learns correct answers from training data - millions of questions with answers. You're learning the same concept that powers AI learning systems!"

### Discussion Questions

- "How does your quiz know the right answers?"
- "How do you think AI learns the right answers?"
- "What's the difference between your quiz and an AI quiz?"

### Teaching Tips

- Keep it simple - focus on "training data = questions with answers"
- Use concrete examples: "Your quiz has 5 questions, AI learns from millions!"
- Connect to their code: "Your quiz stores answers in code - AI learns from data!"
- If students ask technical questions, simplify: "AI learns from lots of examples"
- Emphasize they're learning real AI concepts: "This is how AI learns!"

### Alternative Activity (If Short on Time)

- Quick discussion: "How does your quiz know the right answers?"
- Connect: "AI learns from training data - millions of questions with answers!"
- Emphasize: "You're learning the same concept that powers AI!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**
- [ ] Can student build a basic quiz?
- [ ] Does student use if/else correctly?
- [ ] Does student track score correctly?
- [ ] Does student understand the pattern?

### Homework Assessment: "My Complete Quiz Program"

| Criteria | Exceeds (3) | Meets (2) | Developing (1) |
|----------|-------------|-----------|----------------|
| **Number of questions** | 7+ questions | 5 questions | Fewer than 5 |
| **Answer checking** | Correct for all | Correct for most | Errors |
| **Score tracking** | Correctly tracks | Tracks correctly | Errors |
| **Feedback** | Helpful feedback | Basic feedback | Missing feedback |
| **Display** | Professional | Clear | Unclear |
| **Code runs** | No errors | Minor issues | Major errors |

### Differentiation Strategies

#### For Students Who Need More Support

- Start with 3 questions
- Provide a template
- Focus on getting it working
- Reduce to 3-4 questions for homework
- Pair with a peer
- Provide step-by-step checklist

#### For Advanced Students

- Challenge with 10+ questions
- Add different question types
- Add percentage and grades
- Make it themed
- Ask them to help peers

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem | Prevention | Solution |
|---------|------------|----------|
| Using = instead of == | Emphasize == for comparison | "Two equals signs to compare!" |
| Not tracking score | Show score = score + 1 | "Add 1 when correct!" |
| Forgetting to initialize score | Show score = 0 first | "Start with score = 0!" |

### Conceptual Issues

| Problem | Signs | Solution |
|---------|-------|----------|
| Doesn't understand pattern | Repeats code incorrectly | "Same structure for each question" |
| Confused about score tracking | Doesn't add to score | "score = score + 1 adds 1" |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand the pattern?
   - Were they able to build quizzes?
   - Did they track scores correctly?

2. **What needs improvement?**
   - Any concepts that need more time?
   - Students struggling with score tracking?
   - Examples that didn't work?

3. **Individual student notes:**
   - Who excelled at quiz building?
   - Who needs extra support?
   - Who's ready for the term project?

---

## 🔗 Additional Resources

### Parent Communication Template

```
Subject: Term 4 Week 6 - Quiz Builder! 🎯

Dear Parent/Guardian,

This week we built interactive quiz programs!

Students learned:
- How to get answers from users with input()
- How to check answers with if/else
- How to track scores
- How to give feedback

Homework due by [date]:
"My Complete Quiz Program" - a quiz with at least 5 questions

How you can help:
- Ask them to show you their quiz
- Take their quiz and give feedback
- Encourage them to add more questions

Next week: We'll build the TERM PROJECT—an expanded adventure game!

Questions? Reply to this email!

Happy coding!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review input() and if/else
- [ ] Prepare quiz example
- [ ] Plan step-by-step approach
- [ ] Prepare common mistakes
- [ ] Think about question types

### During Class

- [ ] Introduced quiz building
- [ ] Built basic quiz together
- [ ] Added multiple questions
- [ ] Tracked scores
- [ ] Added enhancements
- [ ] Students built their own
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Review homework submissions
- [ ] Prepare for Week 7 (term project)

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This prepares students for the term project! Make sure they understand the pattern and can build quizzes confidently. The term project will combine everything!_ 🎯
