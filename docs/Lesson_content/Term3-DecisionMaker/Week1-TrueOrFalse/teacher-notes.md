# Term 3, Lesson 1: True or False! ✅❌

## Teacher's Guide

**Course:** Term 3: Decision Maker  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces students to Booleans (True and False values) and comparison operators. This is the foundation of all decision-making in programming. Students learn that every decision a program makes is based on asking "Is this True or False?" This sets the stage for if/else statements in future weeks.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Understand what Booleans are (True and False)
2. Recognize that comparisons create Boolean values
3. Use all six comparison operators (>, <, ==, !=, >=, <=)
4. Understand the difference between `=` and `==`
5. See how True/False is the foundation of decisions

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing comparison operators
- Optional: Visual aids showing True/False

### Pre-Lesson Preparation

1. **Review Boolean concepts** — Ensure you understand True/False
2. **Prepare comparison examples** — Have examples ready
3. **Practice the operators** — Know all six well
4. **Think of relatable examples** — Age-appropriate comparisons
5. **Prepare common mistakes** — Especially `=` vs `==`

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time  | Duration | Activity                       | Details                              |
| ----- | -------- | ------------------------------ | ------------------------------------ |
| 0:00  | 5 min    | Welcome to Term 3!             | Celebrate, introduce decision-making  |
| 0:05  | 10 min   | What Are Booleans?             | Introduce True/False                 |
| 0:15  | 15 min   | Comparison Operators           | Teach all six operators               |
| 0:30  | 20 min   | Hands-On Practice              | Students try comparisons             |
| 0:50  | 7 min    | Wrap-up & Homework             | Summary and assignment               |
| 0:57  | 3 min    | Q&A Buffer                     | Questions and preview                |

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome to Term 3! (5 minutes)

#### Goals

- Celebrate starting Term 3
- Build excitement about decision-making
- Connect to Term 2 learning

#### Script/Talking Points

> "Welcome to Term 3: Decision Maker! 🧠 I'm so excited to see you all again! In Term 2, you learned to do math and build calculators. But today, we're going to learn something EVEN MORE POWERFUL—we're going to teach Python to THINK and MAKE DECISIONS!"

**Quick Review:**
> "Who can remind me: what did we learn in Term 2?"

Wait for: math operations, input(), int(), calculators

> "Perfect! Now we're going to learn how to make programs that THINK and RESPOND differently based on what users do. And it all starts with something simple: True or False!"

#### Teaching Tips

- Build excitement about "teaching programs to think"
- Connect to familiar concepts (yes/no questions)
- Emphasize: "This is where programming gets exciting!"

---

### Part 2: What Are Booleans? (10 minutes)

#### Goals

- Introduce True and False
- Explain why they're important
- Show they're simple but powerful

#### Live Coding Demonstration

**Introduction:**
> "In programming, there's a special type of information called a Boolean. It can only be one of two things: True or False. That's it! Just two options. Simple, right?"

**Example 1: Direct True/False**
```python
print(True)
print(False)
```

> "See? Just True or False. But here's the cool part—EVERY decision a program makes is based on asking: 'Is this True or False?'"

**Example 2: Comparisons Create Booleans**
```python
print(5 > 3)  # Is 5 greater than 3?
```

> "When we compare things, Python gives us True or False! Is 5 greater than 3? Yes! So Python says True!"

**Real-World Connection:**
> "Think about it: 'Is it raining?' → True or False. 'Is your score greater than 100?' → True or False. 'Did the user type yes?' → True or False. Every decision starts with a True/False question!"

#### Teaching Tips

- Keep it simple—just True or False
- Use real-world examples
- Emphasize: "This is the foundation of all decisions"
- Make it relatable

---

### Part 3: Comparison Operators (15 minutes)

#### Goals

- Teach all six comparison operators
- Emphasize `==` vs `=`
- Show practical examples

#### Live Coding Demonstration

**Introduction:**
> "Python has six ways to compare things. Let's learn them all!"

Write on board:
- `>` Greater than
- `<` Less than
- `==` Equal to
- `!=` Not equal to
- `>=` Greater than or equal to
- `<=` Less than or equal to

**Example 1: Greater Than**
```python
print(10 > 5)   # True
print(3 > 7)    # False
print(5 > 5)    # False
```

> "Greater than means 'bigger than'. 10 is bigger than 5, so True. But 3 is NOT bigger than 7, so False."

**Example 2: Less Than**
```python
print(3 < 7)    # True
print(10 < 5)   # False
```

**Example 3: Equal To (CRITICAL!)**
```python
print(5 == 5)   # True
print(5 == 3)   # False
```

> "Now this is SUPER IMPORTANT! Notice it's TWO equals signs: `==`. One equals sign `=` means 'store this value'. Two equals signs `==` means 'are these equal?'"

**Demonstrate the difference:**
```python
age = 10        # Store 10 in age (one =)
print(age == 10)  # Is age equal to 10? (two ==)
```

> "See the difference? `=` stores, `==` compares!"

**Example 4: Not Equal To**
```python
print(5 != 3)   # True - 5 is NOT equal to 3
print(5 != 5)   # False - 5 IS equal to 5
```

**Example 5: Greater/Equal and Less/Equal**
```python
print(5 >= 5)   # True - 5 is greater than OR equal to 5
print(5 >= 3)   # True - 5 is greater than 3
print(3 >= 5)   # False
```

#### Common Mistakes to Address

| Mistake                    | Why It Happens              | How to Fix                                |
| -------------------------- | -------------------------- | ----------------------------------------- |
| Using `=` instead of `==` | Confusing assignment/comparison | "Two equals for comparison!"             |
| Confusing > and <          | Similar symbols            | "The arrow points to the smaller number"  |
| Forgetting `!=`            | Less common operator       | "Exclamation means NOT"                   |

#### Teaching Tips

- Emphasize `==` vs `=` repeatedly
- Use visual aids (arrows pointing)
- Practice each operator
- Test understanding frequently

---

### Part 4: Hands-On Practice (20 minutes)

#### Goals

- Students practice all operators
- Build confidence
- Catch and correct mistakes

#### Guided Practice

> "Now it's YOUR turn! Open Trinket and let's practice!"

**Exercise 1: Basic Comparisons**
> "Try these: print(10 > 5), print(7 < 3), print(8 == 8)"

**Exercise 2: Variable Comparisons**
```python
age = 10
score = 100
print(age > 5)
print(score > 200)
print(age == 10)
```

**Exercise 3: Your Own Comparisons**
> "Create your own variables and compare them!"

#### Teacher Circulation

During this time:
- Check screens for `=` vs `==` mistakes
- Help students understand each operator
- Encourage experimentation
- Celebrate correct answers

---

### Part 5: Wrap-up & Homework (7 minutes)

#### Review Key Points

> "What an amazing lesson! Let's review..."

Quick-fire review:
1. "What are the two Boolean values?" → True and False
2. "What symbol for greater than?" → `>`
3. "What symbol for equal to?" → `==` (two equals!)
4. "What's the difference between = and ==?" → `=` stores, `==` compares

#### Introduce Homework

> "For homework, you're going to create a True/False quiz program with 10 different comparisons!"

**Requirements:**
- Use at least 5 different operators
- Include at least 10 print statements
- Mix numbers and variables
- Add comments
- Code must run without errors

#### Preview Next Week

> "Next week, we'll learn even MORE ways to compare things, including comparing text! You'll become a comparison expert!"

---

### Part 6: Q&A Buffer (3 minutes)

Use this time for:
- Student questions
- Helping anyone who fell behind
- Extra challenges for fast finishers

---

## 🤖 AI Activity: Akinator - 20 Questions with AI (5-10 minutes)

### What to Do

1. **Introduction** (1 min)
   > "You just learned about True/False questions. Did you know there's a game where AI uses True/False questions to guess what you're thinking?"

2. **Play Akinator** (4-5 min)
   - Navigate to: akinator.com (or show a demo)
   - Explain: "This AI asks yes/no questions to guess what character you're thinking of!"
   - Have a student think of a character (or teacher demonstrates)
   - Watch as Akinator asks True/False questions
   - Point out: "See how it narrows down the answer with each yes/no question? That's exactly what if statements do!"

3. **Discussion** (2-3 min)
   - "How does Akinator know what to ask?"
   - "What happens when you answer True vs False?"
   - "How is this similar to the True/False logic you're learning?"

4. **Connection** (1 min)
   > "Akinator uses True/False questions to make decisions - just like you're learning! Every yes/no answer helps it narrow down the possibilities, using the same Boolean logic you're learning today!"

### Discussion Questions

- "How does Akinator know what questions to ask?"
- "What happens when you answer 'yes' vs 'no'?"
- "How is this similar to True/False in programming?"

### Teaching Tips

- If internet is unavailable, show a pre-recorded video of Akinator
- Keep it fun and engaging - this is a game, not a deep technical dive
- Emphasize the True/False connection: "Every question is True or False!"
- If students want to play more, suggest they try it at home
- Connect back to their code: "Your if statements use True/False the same way!"

### Alternative Activity (If No Internet)

- Play 20 Questions as a class: "I'm thinking of something..."
- Connect: "Each yes/no question narrows it down - that's True/False logic!"
- Emphasize: "AI uses the same True/False questions to make decisions!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**
- [ ] Can student explain what Booleans are?
- [ ] Can student use comparison operators?
- [ ] Does student understand `==` vs `=`?
- [ ] Can student create their own comparisons?

### Homework Assessment: "My True/False Quiz"

| Criteria                | Exceeds (3)                      | Meets (2)              | Developing (1)        |
| ----------------------- | -------------------------------- | ---------------------- | --------------------- |
| **Uses operators**     | Uses all 6 operators creatively  | Uses 5+ operators      | Uses fewer operators  |
| **Number of checks**    | 15+ comparisons                 | 10+ comparisons        | Fewer than 10         |
| **Variables**           | Uses variables effectively       | Some variable use      | No variables          |
| **Comments**            | Clear, helpful comments          | Some comments          | No comments           |
| **Code runs**           | No errors, well-formatted        | Minor issues, runs     | Major errors          |

### Differentiation Strategies

#### For Students Who Need More Support

- Focus on just 3-4 operators first
- Provide a template with blanks
- Use very simple numbers
- Pair with a peer
- Emphasize `==` vs `=` repeatedly

#### For Advanced Students

- Challenge with complex comparisons
- Introduce combining comparisons (preview `and`/`or`)
- Ask them to create a "comparison quiz game"
- Have them help peers
- Preview string comparisons

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                     | Prevention                          | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Using `=` instead of `==`  | Emphasize early and often           | "Two equals for comparison!"                 |
| Confusing > and <           | Use visual aids                     | "Arrow points to smaller number"              |
| Syntax errors               | Type slowly during demos            | Check for typos                               |

### Conceptual Issues

| Problem                     | Signs                               | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Doesn't understand Booleans | Can't explain True/False            | Use real-world yes/no examples                |
| Confuses = and ==           | Uses wrong one                      | "One = stores, two == compares"               |
| Doesn't see the point       | Asks "why do we need this?"         | "This is how programs make decisions!"       |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students grasp Booleans?
   - Did they understand `==` vs `=`?
   - Were they engaged?

2. **What needs improvement?**
   - Any concepts that took longer?
   - Common mistakes to address?

3. **Individual student notes:**
   - Who excelled at comparisons?
   - Who needs extra support?

4. **Term 3 specific notes:**
   - Are students ready for if statements?
   - Any confusion about True/False?

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review Boolean concepts
- [ ] Prepare comparison examples
- [ ] Practice all six operators
- [ ] Think of relatable examples
- [ ] Prepare common mistakes list

### During Class

- [ ] Welcomed to Term 3
- [ ] Introduced Booleans
- [ ] Taught all six operators
- [ ] Emphasized `==` vs `=`
- [ ] Students practiced comparisons
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Review homework submissions
- [ ] Prepare for Week 2

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This is the foundation of all decision-making! Make sure students really understand `==` vs `=` and that comparisons always give True or False. This sets the stage for if/else statements next week!_ ✅❌

