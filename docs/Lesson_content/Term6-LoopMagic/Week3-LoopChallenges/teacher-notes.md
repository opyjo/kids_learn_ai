# Term 6, Lesson 3: Loop Challenges 🔄

## Teacher's Guide

**Course:** Term 6: Loop Magic  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 6 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces students to the third parameter of `range()`—the `step` parameter. Students learn to count by 2s, 5s, 10s, and backwards. This builds on their basic loop knowledge and prepares them for creating patterns next week.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Use `range(start, stop, step)` with a step parameter
2. Count by 2s, 5s, 10s, and any number
3. Count backwards using negative steps
4. Understand when to use positive vs negative steps
5. Create complex counting patterns

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing number sequences

### Pre-Lesson Preparation

1. **Review range() with step** — Ensure you understand `range(start, stop, step)`
2. **Prepare examples** — Have counting patterns ready
3. **Practice backwards counting** — Students often find this confusing
4. **Think about common mistakes** — Wrong stop numbers, wrong step direction

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                              |
| ---- | -------- | ---------------------------- | ------------------------------------ |
| 0:00 | 5 min    | Review & Hook                | Review basic loops, introduce step   |
| 0:05 | 15 min   | Counting by Steps            | Teach range() with step parameter    |
| 0:20 | 15 min   | Counting Backwards           | Teach negative steps                 |
| 0:35 | 15 min   | Practice Challenges           | Students code along                  |
| 0:50 | 7 min    | Wrap-up & Homework           | Summary and assignment                |
| 0:57 | 3 min    | Q&A Buffer                    | Questions and preview                 |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Hook (5 minutes)

#### Goals

- Review basic loops
- Introduce the concept of counting by steps
- Build excitement for new techniques

#### Script/Talking Points

> "Welcome back! Last week, you learned basic loops. Today, we're going to make them even MORE powerful! What if I wanted to count by 2s? Or 5s? Or count backwards? Loops can do all of that! Let's discover how!"

**Quick Review:**

> "Who can remind us: how do we count from 1 to 10?"

Wait for: `for i in range(1, 11): print(i)`

> "Perfect! But what if I wanted to count by 2s? Like 0, 2, 4, 6, 8, 10? There's a secret third parameter in `range()` that lets us do that!"

#### Teaching Tips

- Keep review brief
- Build excitement about new capabilities
- Emphasize that loops are getting more powerful

---

### Part 2: Counting by Steps (15 minutes)

#### Goals

- Teach the `step` parameter
- Show counting by 2s, 5s, 10s
- Practice with students

#### Live Coding Demonstration

**Step 1: Show the Problem**

```python
# What if we want to count by 2s?
# The old way would be:
print(0)
print(2)
print(4)
print(6)
print(8)
print(10)
```

> "This works, but there's a better way! Watch this..."

**Step 2: Introduce the Step Parameter**

```python
# The new way - with a step!
for i in range(0, 11, 2):
    print(i)
```

**Output:**
```
0
2
4
6
8
10
```

> "BOOM! Just 2 lines! The secret is that third number: `2`. That's called the 'step'. It tells Python: 'Add 2 each time instead of 1'."

**Step 3: Explain the Syntax**

Write on whiteboard:

```
range(start, stop, step)
     ↓      ↓     ↓
   where  where  how much
   to     to     to add
   start  stop   each time
```

> "So `range(0, 11, 2)` means: start at 0, go up to (but don't include) 11, and add 2 each time."

**Step 4: More Examples**

```python
# Count by 5s
for i in range(0, 51, 5):
    print(i)
```

> "This counts: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50. See how it adds 5 each time?"

```python
# Count by 10s
for i in range(0, 101, 10):
    print(i)
```

> "This counts by 10s from 0 to 100. Perfect for counting by tens!"

#### Practice Together

> "Let's try counting by 3s from 0 to 30. What should we write?"

Wait for: `range(0, 31, 3)`

> "Perfect! Let's try it:"

```python
for i in range(0, 31, 3):
    print(i)
```

Run it and show the output.

#### Teaching Tips

- Emphasize the third parameter
- Use the whiteboard to show number sequences
- Practice multiple examples together
- Celebrate when students understand

---

### Part 3: Counting Backwards (15 minutes)

#### Goals

- Teach negative steps
- Show counting backwards
- Address common confusion

#### Demonstration: Backwards Counting

**Step 1: The Countdown Problem**

> "What if I wanted to count DOWN from 10 to 1? Like a rocket launch countdown?"

```python
# Countdown from 10 to 1
for i in range(10, 0, -1):
    print(i)
```

**Output:**
```
10
9
8
7
6
5
4
3
2
1
```

> "See that `-1`? That's a NEGATIVE step! It tells Python to SUBTRACT 1 each time instead of adding."

**Step 2: Explain Negative Steps**

Write on whiteboard:

```
range(start, stop, step)
     ↓      ↓     ↓
   where  where  how much
   to     to     to add
   start  stop   (or subtract!)
```

> "When step is positive, we count UP. When step is negative, we count DOWN. And notice: when counting down, we start with a BIGGER number and end with a SMALLER number!"

**Step 3: More Backwards Examples**

```python
# Countdown from 20
for i in range(20, 0, -1):
    print(i)
```

```python
# Count backwards by 2s
for i in range(20, 0, -2):
    print(i)
```

**Output:**
```
20
18
16
14
12
10
8
6
4
2
```

> "See? It subtracts 2 each time!"

#### Common Confusion

> "What if I wrote this?"

```python
for i in range(0, 10, -1):
    print(i)
```

> "What do you think would happen?"

Let students guess.

> "Nothing! It wouldn't print anything because you can't count down from 0 to 10. When counting backwards, the START must be BIGGER than the STOP!"

#### Practice Together

> "Let's create a countdown from 15 to 1. What should we write?"

Wait for: `range(15, 0, -1)`

Try it together.

#### Teaching Tips

- This is often confusing—take your time
- Emphasize: start > stop when counting down
- Use visual aids (countdown on whiteboard)
- Practice multiple examples

---

### Part 4: Practice Challenges (15 minutes)

#### Goals

- Students practice writing loops with steps
- Build confidence
- Catch and fix mistakes

#### Guided Practice Exercises

**Exercise 1: Count by 2s to 20**

> "Let's count by 2s from 0 to 20:"

```python
for i in range(0, 21, 2):
    print(i)
```

**Exercise 2: Count by 5s to 50**

> "Now count by 5s from 0 to 50:"

```python
for i in range(0, 51, 5):
    print(i)
```

**Exercise 3: Countdown from 10**

> "Create a countdown from 10 to 1:"

```python
for i in range(10, 0, -1):
    print(i)
```

**Exercise 4: Count by 10s to 100**

> "Count by 10s from 0 to 100:"

```python
for i in range(0, 101, 10):
    print(i)
```

#### Teacher Circulation

During this time:
- Check for correct syntax
- Help with wrong stop numbers
- Fix backwards counting mistakes
- Encourage creativity

#### Common Issues to Watch For

1. **Wrong stop number** — Using `range(0, 20, 2)` when they want 0-20 (should be 21)
2. **Wrong step direction** — Using positive step when counting backwards
3. **Wrong start/stop order** — For backwards counting
4. **Forgetting the step parameter** — Just using `range(0, 11)` instead of `range(0, 11, 2)`

---

### Part 5: Wrap-up & Homework (7 minutes)

#### Review Key Points

> "What did we learn today?"

Quick review:
1. "How do we count by 2s?" → `range(0, 21, 2)`
2. "How do we count backwards?" → `range(10, 0, -1)`
3. "What's the third parameter?" → `step`
4. "When counting backwards, what's important?" → Start must be bigger than stop

#### Introduce Homework

> "For homework, you're going to create a program with 4 different loops: count by 2s to 20, count by 5s to 50, countdown from 15, and count by 10s to 100. Show me your loop mastery!"

---

### Part 6: Q&A Buffer (3 minutes)

Use this time for:
- Student questions
- Clarifying concepts
- Extra challenges for fast finishers
- Celebrating good work

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student use the step parameter?
- [ ] Can student count by 2s, 5s, 10s?
- [ ] Can student count backwards?
- [ ] Does student understand start/stop order for backwards?
- [ ] Can student create their own patterns?

### Homework Assessment: "Loop Master Challenge"

| Criteria              | Exceeds (3)                    | Meets (2)                  | Developing (1)           |
| --------------------- | ------------------------------ | -------------------------- | ------------------------ |
| **Counts by 2s**      | Correct, maybe extra patterns   | Correct loop                | Incorrect or missing     |
| **Counts by 5s**      | Correct, maybe extra patterns   | Correct loop                | Incorrect or missing     |
| **Counts backwards**  | Correct, maybe by different steps | Correct loop               | Incorrect or missing     |
| **Counts by 10s**     | Correct, maybe extra patterns   | Correct loop                | Incorrect or missing     |
| **Comments**          | Clear, helpful comments        | Some comments              | No comments              |
| **Code runs**         | No errors, well-formatted     | Minor issues, runs         | Major errors             |

### Differentiation Strategies

#### For Students Who Need More Support

- Focus on counting by 2s first (easiest)
- Use visual aids (number line)
- Practice with smaller ranges first
- Skip backwards counting if too challenging
- Provide templates with blanks

#### For Advanced Students

- Challenge with larger ranges
- Ask them to count by odd numbers (3, 7, 9)
- Challenge: "Count backwards by 3s from 30 to 0"
- Have them help peers
- Preview nested loops (coming in Week 4)

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                  | Prevention                    | Solution                                    |
| ------------------------ | ----------------------------- | ------------------------------------------- |
| Wrong stop number        | Practice many examples        | "If you want 0-20, use 21 as stop!"        |
| Wrong step direction     | Emphasize positive vs negative | "Positive = up, negative = down!"            |
| Wrong start/stop order   | Show backwards examples       | "When counting down, start > stop!"         |
| Forgetting step parameter | Emphasize third number        | "Don't forget the step!"                    |

### Conceptual Issues

| Problem                  | Signs                          | Solution                                    |
| ------------------------ | ------------------------------ | ------------------------------------------- |
| Doesn't understand step  | Confused by third parameter    | Use number line, show sequences visually    |
| Confused by backwards    | Can't get backwards to work    | Emphasize: bigger number first, negative step |
| Doesn't see the point    | "Why not just write it out?"   | Remind: "What about counting by 7s to 1000?"  |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand the step parameter?
   - Were they able to count backwards?
   - Did they get excited about new capabilities?

2. **What needs improvement?**
   - Any concepts that were unclear?
   - Common mistakes to address next week?
   - Did students struggle with backwards counting?

3. **Individual student notes:**
   - Who mastered step counting quickly?
   - Who needs more support with backwards?
   - Who's ready for pattern creation?

4. **Term 6 specific notes:**
   - Are students ready for visual patterns next week?
   - Any concerns about loop complexity?
   - How did the step parameter introduction go?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Step Parameter Understanding:
- Counting by 2s/5s: ____ students got it
- Counting backwards: ____ students got it
- Creating own patterns: ____ students got it

Common Mistakes:
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

- **Python range() Documentation:** Review all range() variations
- **Number Sequences:** Practice showing sequences visually
- **Backwards Counting:** Prepare visual aids

### For Students (Share with Parents)

- **Practice Counting:** Try counting by different numbers
- **Countdown Challenge:** Create countdowns from different numbers
- **Pattern Recognition:** Look for skip counting in daily life

### Parent Communication Template

```
Subject: Term 6 Week 3 - Loop Challenges! 🔄

Dear Parent/Guardian,

Your child learned advanced loop techniques today!

They can now:
- Count by 2s, 5s, 10s, and any number
- Count backwards using loops
- Use the step parameter in range()

Key concepts:
- `range(0, 21, 2)` counts by 2s from 0 to 20
- `range(10, 0, -1)` counts backwards from 10 to 1
- The third number is the "step" (how much to add/subtract)

Homework due by [date]:
Create loops that count by 2s, 5s, backwards, and by 10s

How you can help:
- Ask: "Can you count by 3s from 0 to 30?"
- Challenge: "What about counting backwards from 20?"
- Celebrate: These are advanced programming skills!

Next week: Creating visual patterns with loops (stars, shapes, ASCII art!)

Questions? Reply to this email!

Happy looping!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review range() with step parameter
- [ ] Prepare counting examples
- [ ] Practice backwards counting explanation
- [ ] Prepare common mistake examples
- [ ] Test Trinket access

### During Class

- [ ] Reviewed basic loops
- [ ] Introduced step parameter
- [ ] Taught counting by 2s, 5s, 10s
- [ ] Taught backwards counting
- [ ] Students practiced challenges
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Prepare for Week 4 (patterns with loops)
- [ ] Review homework as it comes in

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: The step parameter is a powerful addition to loops. Take time with backwards counting—it's often confusing. Students who master this are ready for pattern creation next week!_ 🔄

