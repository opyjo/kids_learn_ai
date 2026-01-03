# Term 7, Lesson 4: Random Numbers 🎲

## Teacher's Guide

**Course:** Term 7: Game Builder  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces students to Python's `random` module and how to generate random numbers. This is essential for creating unpredictable, exciting games. Students learn to import modules and use `random.randint()` to generate random integers.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Import the `random` module
2. Generate random numbers using `random.randint()`
3. Use random numbers in games
4. Understand why randomness makes games fun
5. Create games that are different every time

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing import syntax

### Pre-Lesson Preparation

1. **Review random module** — Understand random.randint()
2. **Prepare examples** — Have random number examples ready
3. **Think about games** — Simple games using random numbers
4. **Prepare troubleshooting** — Common import mistakes

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                              |
| ---- | -------- | ---------------------------- | ------------------------------------ |
| 0:00 | 5 min    | Review & Hook                | Review game loops, introduce randomness |
| 0:05 | 10 min   | What is Random?              | Explain randomness and why it matters |
| 0:15 | 15 min   | Importing Random             | Teach import and random.randint()     |
| 0:30 | 20 min   | Using Random in Games        | Students create random games          |
| 0:50 | 7 min    | Wrap-up & Homework           | Summary and assignment               |
| 0:57 | 3 min    | Q&A Buffer                    | Questions and preview                |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Hook (5 minutes)

#### Goals

- Review game loops
- Build excitement about randomness
- Introduce random numbers

#### Script/Talking Points

> "Welcome back! You've learned game loops. But games need to be UNPREDICTABLE! Today, you're going to learn how to generate random numbers. This is what makes games exciting!"

**Quick Review:**

> "Who can remind us: what's a game loop?"

Wait for: loop that keeps game running

> "Perfect! But what if every game was exactly the same? Boring! Today we add randomness!"

#### Teaching Tips

- Build excitement about unpredictability
- Connect to games they play
- Keep review brief

---

### Part 2: What is Random? (10 minutes)

#### Goals

- Explain randomness
- Show why it's important
- Make it relatable

#### Discussion

> "What does 'random' mean?"

Let students answer: unpredictable, can't guess, etc.

> "Think about rolling a die. Do you know what number you'll get?"

Wait for: No

> "Exactly! That's random. Games need randomness to be fun!"

**Examples:**
- Rolling dice
- Flipping coins
- Shuffling cards
- Random events in games

#### Teaching Tips

- Use relatable examples
- Emphasize why randomness is fun
- Make it engaging

---

### Part 3: Importing Random (15 minutes)

#### Goals

- Teach import statement
- Teach random.randint()
- Practice together

#### Live Coding Demonstration

**Step 1: Show Import**

```python
import random
```

> "This tells Python: 'I want to use the random module!' It must be at the TOP of your program!"

**Step 2: Show random.randint()**

```python
import random

number = random.randint(1, 10)
print("Random number:", number)
```

> "This generates a random number between 1 and 10. Watch—it's different every time!"

Run it multiple times to show it changes.

**Step 3: Explain Parameters**

> "`random.randint(1, 10)` means:"
- First number (1) = minimum
- Second number (10) = maximum
- Both numbers are included!

**Step 4: More Examples**

```python
# Roll a die
die = random.randint(1, 6)

# Random 1-100
number = random.randint(1, 100)
```

#### Practice Together

Have students create random numbers. Walk through it step by step.

#### Teaching Tips

- Emphasize import at top
- Show it changes each time
- Practice multiple examples
- Check for understanding

---

### Part 4: Using Random in Games (20 minutes)

#### Goals

- Students use random in games
- Build confidence
- Create fun examples

#### Guided Practice

**Exercise 1: Random Number Generator**

```python
import random
number = random.randint(1, 20)
print("Random number:", number)
```

**Exercise 2: Dice Roller**

```python
import random
die = random.randint(1, 6)
print("You rolled:", die)
```

**Exercise 3: Simple Guessing Game Setup**

```python
import random
secret = random.randint(1, 20)
print("I'm thinking of a number between 1 and 20...")
guess = int(input("Your guess: "))
if guess == secret:
    print("You got it!")
```

#### Teacher Circulation

- Check for import at top
- Help with syntax
- Encourage creativity
- Celebrate fun games

---

### Part 5: Wrap-up & Homework (7 minutes)

#### Review Key Points

> "What did we learn today?"

Quick review:
1. "How do we import random?" → `import random`
2. "How do we generate random numbers?" → `random.randint(start, end)`
3. "Why is randomness important?" → Makes games fun and unpredictable

#### Introduce Homework

> "For homework, create a program that uses random numbers in at least 3 different ways!"

---

### Part 6: Q&A Buffer (3 minutes)

Use this time for questions and clarifications.

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student import random?
- [ ] Can student use random.randint()?
- [ ] Does student understand the range?
- [ ] Can student use random in games?
- [ ] Is student engaged and creative?

### Homework Assessment: "Random Number Games"

| Criteria              | Exceeds (3)                    | Meets (2)                  | Developing (1)           |
| --------------------- | ------------------------------ | -------------------------- | ------------------------ |
| **Imports random**    | Correct, at top                | Correct import              | Missing or wrong place   |
| **Generates numbers** | 3+ creative uses               | 3 different numbers         | Less than 3              |
| **Uses in game**       | Creative game implementation   | Basic game use              | No game use              |
| **Comments**          | Clear, helpful comments        | Some comments               | No comments              |
| **Code runs**         | No errors, well-formatted     | Minor issues, runs          | Major errors             |

### Differentiation Strategies

#### For Students Who Need More Support

- Focus on basic random.randint() first
- Provide templates
- Use simple examples
- Pair with peer
- Reduce to 2 numbers instead of 3

#### For Advanced Students

- Challenge with more complex games
- Ask them to create guessing games
- Have them help peers
- Preview keeping score (next week)

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                  | Prevention                    | Solution                                    |
| ------------------------ | ----------------------------- | ------------------------------------------- |
| Forgetting import        | Emphasize at start            | "Always import at the top!"                 |
| Wrong order              | Show import first             | "Import before using!"                      |
| Wrong range               | Show start <= end             | "First number must be <= second!"           |

### Conceptual Issues

| Problem                  | Signs                          | Solution                                    |
| ------------------------ | ------------------------------ | ------------------------------------------- |
| Doesn't understand range | Confused by parameters         | Show examples, explain inclusive            |
| Can't see why random     | Doesn't understand importance  | Show games without vs with random           |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand random?
   - Were they able to import and use random?
   - Did they create fun games?

2. **What needs improvement?**
   - Any concepts that were unclear?
   - Common mistakes to address?
   - Are students ready for keeping score?

3. **Individual student notes:**
   - Who mastered random quickly?
   - Who needs more support?
   - Who's ready for more challenges?

4. **Term 7 specific notes:**
   - Are students ready for keeping score?
   - How did randomness engage them?
   - Any concerns about complexity?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Random Understanding:
- Import: ____ students got it
- random.randint(): ____ students got it
- Using in games: ____ students got it

Common Mistakes:
-

Students Excelling:
-

Students Needing Support:
-

Adjustments for Week 5:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Random Module Documentation:** Review Python's random module
- **Game Ideas:** Prepare random number game examples
- **Import Best Practices:** Understand module imports

### For Students (Share with Parents)

- **Practice Random:** Generate random numbers at home
- **Game Ideas:** Think about games using random
- **Game Prep:** Prepare for keeping score

### Parent Communication Template

```
Subject: Term 7 Week 4 - Random Numbers! 🎲

Dear Parent/Guardian,

Your child learned to generate random numbers today!

They can now:
- Import the random module
- Generate random numbers
- Use randomness in games

Key concepts:
- `import random` at the top of programs
- `random.randint(1, 10)` generates random 1-10
- Randomness makes games unpredictable and fun!

Homework due by [date]:
Create a program using random numbers in 3 different ways

How you can help:
- Ask: "Can you show me a random number?"
- Challenge: "What about rolling a die?"
- Celebrate: They're making games unpredictable!

Next week: Keeping score - tracking game progress!

Questions? Reply to this email!

Happy gaming!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review random module
- [ ] Prepare examples
- [ ] Think about game ideas
- [ ] Prepare troubleshooting
- [ ] Test Trinket access

### During Class

- [ ] Reviewed game loops
- [ ] Explained randomness
- [ ] Taught import and random.randint()
- [ ] Students created random games
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Prepare for Week 5 (keeping score)
- [ ] Review homework as it comes in

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: Random numbers make games exciting! Students who master this are ready to add scoring and build complete games. Make it fun and show the excitement of unpredictability!_ 🎲

