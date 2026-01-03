# Term 7, Lesson 5: Keeping Score 📊

## Teacher's Guide

**Course:** Term 7: Game Builder  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson teaches students to track game progress using variables. Students learn to keep score, count attempts, and track wins/losses. This is essential for building complete, competitive games and prepares them for the term project.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Create variables to track score
2. Update score during gameplay
3. Count attempts and guesses
4. Track wins and losses
5. Display game statistics

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing score patterns

### Pre-Lesson Preparation

1. **Review variable updates** — Understand score = score + 1
2. **Prepare examples** — Have scoring examples ready
3. **Think about games** — Simple games with scoring
4. **Prepare troubleshooting** — Common variable mistakes

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                              |
| ---- | -------- | ---------------------------- | ------------------------------------ |
| 0:00 | 5 min    | Review & Hook                | Review random, introduce scoring      |
| 0:05 | 15 min   | Tracking Score               | Teach score variables and updates     |
| 0:20 | 15 min   | Counting Attempts            | Teach attempt counters                |
| 0:35 | 15 min   | Wins and Losses              | Track game outcomes                   |
| 0:50 | 7 min    | Wrap-up & Homework           | Summary and assignment               |
| 0:57 | 3 min    | Q&A Buffer                    | Questions and preview                |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Hook (5 minutes)

#### Goals

- Review random numbers
- Build excitement about scoring
- Introduce tracking progress

#### Script/Talking Points

> "Welcome back! You've learned random numbers. But games need to track progress! Today, you're going to learn to keep score, count attempts, and track wins. This makes games competitive and fun!"

**Quick Review:**

> "Who can remind us: how do we generate a random number?"

Wait for: `random.randint(1, 10)`

> "Perfect! But what if we want to track how many times the player guessed? Or how many points they scored? That's what we're learning today!"

#### Teaching Tips

- Build excitement about competition
- Connect to games they play
- Keep review brief

---

### Part 2: Tracking Score (15 minutes)

#### Goals

- Teach score variables
- Show how to update scores
- Practice together

#### Live Coding Demonstration

**Example 1: Simple Score**

```python
score = 0
print("Starting score:", score)

score = score + 1
print("After winning:", score)

score = score + 1
print("After winning again:", score)
```

> "See? We start at 0, then add points. `score = score + 1` means 'take the current score and add 1'."

**Example 2: Score in Game Loop**

```python
score = 0
playing = True

while playing:
    print("Playing game...")
    score = score + 1
    print("Score:", score)
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

print("Final score:", score)
```

#### Practice Together

Have students create a simple score tracker. Walk through it step by step.

#### Teaching Tips

- Emphasize starting at 0
- Show the update pattern clearly
- Practice multiple examples
- Check for understanding

---

### Part 3: Counting Attempts (15 minutes)

#### Goals

- Teach attempt counters
- Show counting in loops
- Practice together

#### Demonstration: Attempt Counter

```python
attempts = 0
playing = True

while playing:
    attempts = attempts + 1
    print(f"Round {attempts}")
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

print(f"You played {attempts} rounds!")
```

> "See? We count each round. `attempts = attempts + 1` adds 1 each time!"

#### Practice Together

Have students create attempt counters. Walk around and help.

#### Teaching Tips

- Show the counting pattern
- Emphasize incrementing
- Practice in game loops

---

### Part 4: Wins and Losses (15 minutes)

#### Goals

- Track game outcomes
- Show win/loss tracking
- Practice together

#### Demonstration: Win/Loss Tracker

```python
wins = 0
losses = 0
playing = True

while playing:
    result = input("Did you win? (yes/no): ")
    
    if result == "yes":
        wins = wins + 1
    else:
        losses = losses + 1
    
    print(f"Wins: {wins}, Losses: {losses}")
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

print(f"Final: {wins} wins, {losses} losses")
```

#### Practice Together

Have students create win/loss trackers. Walk around and help.

#### Teaching Tips

- Show both wins and losses
- Emphasize if/else for tracking
- Practice displaying stats

---

### Part 5: Wrap-up & Homework (7 minutes)

#### Review Key Points

> "What did we learn today?"

Quick review:
1. "How do we track score?" → `score = score + 1`
2. "How do we count attempts?" → `attempts = attempts + 1`
3. "How do we track wins?" → `wins = wins + 1` when player wins

#### Introduce Homework

> "For homework, create a program that tracks score, attempts, and wins!"

---

### Part 6: Q&A Buffer (3 minutes)

Use this time for questions and clarifications.

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student create score variables?
- [ ] Can student update scores correctly?
- [ ] Can student count attempts?
- [ ] Can student track wins/losses?
- [ ] Can student display statistics?

### Homework Assessment: "Score Tracking Program"

| Criteria              | Exceeds (3)                    | Meets (2)                  | Developing (1)           |
| --------------------- | ------------------------------ | -------------------------- | ------------------------ |
| **Tracks score**      | Creative, multiple score types | Correct score tracking      | Incorrect or missing     |
| **Counts attempts**   | Correct, maybe extra features  | Correct attempt counting    | Incorrect or missing     |
| **Tracks wins**       | Correct, maybe losses too      | Correct win tracking        | Incorrect or missing     |
| **Displays stats**    | Clear, well-formatted          | Basic display               | Missing or unclear       |
| **Comments**          | Clear, helpful comments        | Some comments               | No comments              |
| **Code runs**         | No errors, well-formatted     | Minor issues, runs          | Major errors             |

### Differentiation Strategies

#### For Students Who Need More Support

- Focus on one type of tracking first
- Provide templates
- Use simple examples
- Pair with peer
- Reduce to 2 types instead of 3

#### For Advanced Students

- Challenge with win percentage
- Ask them to track high scores
- Have them help peers
- Preview combining everything (next week)

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                  | Prevention                    | Solution                                    |
| ------------------------ | ----------------------------- | ------------------------------------------- |
| Forgetting to initialize | Emphasize starting at 0        | "Always start score = 0!"                   |
| Wrong update syntax     | Show pattern clearly          | "score = score + 1, not score + 1"         |
| Not updating in loop    | Show where to update          | "Update inside the loop!"                   |

### Conceptual Issues

| Problem                  | Signs                          | Solution                                    |
| ------------------------ | ------------------------------ | ------------------------------------------- |
| Doesn't understand update | Confused by score = score + 1 | Break it down: "current value + 1"          |
| Can't see when to track  | Doesn't know when to update   | Show examples, explain game events          |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand score tracking?
   - Were they able to update variables?
   - Did they create scoring systems?

2. **What needs improvement?**
   - Any concepts that were unclear?
   - Common mistakes to address?
   - Are students ready to combine everything?

3. **Individual student notes:**
   - Who mastered scoring quickly?
   - Who needs more support?
   - Who's ready for complete games?

4. **Term 7 specific notes:**
   - Are students ready to combine features?
   - How did scoring engage them?
   - Any concerns about the project?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Score Tracking Understanding:
- Score variables: ____ students got it
- Updating scores: ____ students got it
- Tracking wins: ____ students got it

Common Mistakes:
-

Students Excelling:
-

Students Needing Support:
-

Adjustments for Week 6:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Variable Updates:** Review score = score + 1 pattern
- **Game Statistics:** Examples of tracking systems
- **Scoring Systems:** Different scoring methods

### For Students (Share with Parents)

- **Practice Scoring:** Track scores in games at home
- **Game Ideas:** Think about scoring systems
- **Game Prep:** Prepare for combining everything

### Parent Communication Template

```
Subject: Term 7 Week 5 - Keeping Score! 📊

Dear Parent/Guardian,

Your child learned to track game progress today!

They can now:
- Keep score in games
- Count attempts and guesses
- Track wins and losses

Key concepts:
- `score = score + 1` adds to score
- Start variables at 0
- Update during gameplay

Homework due by [date]:
Create a program tracking score, attempts, and wins

How you can help:
- Ask: "Can you show me how to keep score?"
- Challenge: "What about tracking wins?"
- Celebrate: They're building competitive games!

Next week: Putting it all together - complete games!

Questions? Reply to this email!

Happy gaming!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review variable updates
- [ ] Prepare scoring examples
- [ ] Think about game ideas
- [ ] Prepare troubleshooting
- [ ] Test Trinket access

### During Class

- [ ] Reviewed random numbers
- [ ] Taught score tracking
- [ ] Taught attempt counting
- [ ] Taught win/loss tracking
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Prepare for Week 6 (putting it together)
- [ ] Review homework as it comes in

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: Score tracking makes games competitive and fun. Students who master this are ready to combine everything into complete games next week!_ 📊

