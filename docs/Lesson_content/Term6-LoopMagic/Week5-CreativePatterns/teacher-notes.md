# Term 6, Lesson 5: Creative Patterns 🎨

## Teacher's Guide

**Course:** Term 6: Loop Magic  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 6 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson teaches students to create more complex patterns—growing triangles, shrinking triangles, and diamonds. This builds on nested loops and prepares students for combining loops with decisions next week and the term project in Week 7.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Create growing triangles (stars increase each row)
2. Create shrinking triangles (stars decrease each row)
3. Create diamond patterns (combining growing and shrinking)
4. Design their own creative patterns
5. Understand how to vary the inner loop based on the outer loop

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for drawing patterns

### Pre-Lesson Preparation

1. **Review nested loops** — Ensure you understand the concept
2. **Practice triangle patterns** — Know how to create growing/shrinking triangles
3. **Prepare diamond example** — Have a working diamond ready
4. **Think about creativity** — Encourage student creativity

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                              |
| ---- | -------- | ---------------------------- | ------------------------------------ |
| 0:00 | 5 min    | Review & Hook                | Review squares, introduce triangles   |
| 0:05 | 15 min   | Growing Triangles            | Teach growing triangle pattern        |
| 0:20 | 15 min   | Shrinking Triangles          | Teach shrinking triangle pattern      |
| 0:35 | 15 min   | Diamond Patterns             | Combine growing and shrinking         |
| 0:50 | 7 min    | Creative Time & Wrap-up      | Students create, homework              |
| 0:57 | 3 min    | Q&A Buffer                    | Questions and preview                  |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Hook (5 minutes)

#### Goals

- Review nested loops and squares
- Build excitement for triangles
- Connect to previous learning

#### Script/Talking Points

> "Welcome back! You've created amazing squares and rectangles. But today, we're going to make TRIANGLES! Triangles that grow, triangles that shrink, and even DIAMONDS! This is where patterns get really fun!"

**Quick Review:**

> "Who can remind us: how do we create a 5x5 square?"

Wait for: nested loops with `range(5)` for both

> "Perfect! But what if I wanted the number of stars to CHANGE each row? That's what we're learning today!"

#### Teaching Tips

- Keep review brief
- Build excitement about triangles
- Emphasize that patterns are getting more complex

---

### Part 2: Growing Triangles (15 minutes)

#### Goals

- Teach the growing triangle pattern
- Show how inner loop varies with outer loop
- Practice creating triangles

#### Live Coding Demonstration

**Step 1: Show the Pattern**

> "Watch this—I'm going to create a triangle that GROWS:"

```python
for row in range(1, 6):
    for star in range(row):
        print("⭐", end="")
    print()
```

**Output:**
```
⭐
⭐⭐
⭐⭐⭐
⭐⭐⭐⭐
⭐⭐⭐⭐⭐
```

> "WOW! See how it grows? Row 1 has 1 star, row 2 has 2 stars, row 3 has 3 stars... The secret is `range(row)`—the inner loop uses the row number!"

**Step 2: Explain How It Works**

Write on whiteboard:

```
Row 1: range(1) → 1 star
Row 2: range(2) → 2 stars
Row 3: range(3) → 3 stars
Row 4: range(4) → 4 stars
Row 5: range(5) → 5 stars
```

> "The outer loop gives us the row number. The inner loop uses that row number to decide how many stars to print!"

**Step 3: Practice Together**

> "Let's create a bigger triangle—from 1 to 10 stars. What should we change?"

Wait for: `range(1, 11)`

```python
for row in range(1, 11):
    for star in range(row):
        print("⭐", end="")
    print()
```

Run it and show the output.

#### Practice Together

Have students create their own growing triangles. Walk around and help.

#### Teaching Tips

- Emphasize that `range(row)` is the key
- Use whiteboard to show how it works
- Practice multiple examples
- Celebrate when students understand

---

### Part 3: Shrinking Triangles (15 minutes)

#### Goals

- Teach the shrinking triangle pattern
- Show backwards counting in patterns
- Practice creating shrinking triangles

#### Demonstration: Shrinking Triangle

**Step 1: Show the Pattern**

> "Now watch this—a triangle that SHRINKS:"

```python
for row in range(5, 0, -1):
    for star in range(row):
        print("⭐", end="")
    print()
```

**Output:**
```
⭐⭐⭐⭐⭐
⭐⭐⭐⭐
⭐⭐⭐
⭐⭐
⭐
```

> "See? It starts with 5 stars and shrinks down to 1! The secret is counting BACKWARDS: `range(5, 0, -1)`."

**Step 2: Explain How It Works**

> "The outer loop counts backwards: 5, 4, 3, 2, 1. Each time, the inner loop prints that many stars. So row 5 prints 5 stars, row 4 prints 4 stars, etc."

**Step 3: Practice Together**

> "Let's create a bigger shrinking triangle—from 10 to 1. What should we write?"

Wait for: `range(10, 0, -1)`

```python
for row in range(10, 0, -1):
    for star in range(row):
        print("⭐", end="")
    print()
```

Run it and show the output.

#### Practice Together

Have students create shrinking triangles. Walk around and help.

#### Teaching Tips

- Emphasize backwards counting
- Show the connection to last week's backwards loops
- Practice multiple examples
- Help students who are confused

---

### Part 4: Diamond Patterns (15 minutes)

#### Goals

- Combine growing and shrinking triangles
- Create diamond patterns
- Understand pattern composition

#### Demonstration: Diamond

**Step 1: Show the Concept**

> "What if we combined a growing triangle and a shrinking triangle? We get a DIAMOND!"

**Step 2: Show the Code**

```python
# Top half (growing)
for row in range(1, 6):
    for star in range(row):
        print("⭐", end="")
    print()

# Bottom half (shrinking)
for row in range(4, 0, -1):
    for star in range(row):
        print("⭐", end="")
    print()
```

**Output:**
```
⭐
⭐⭐
⭐⭐⭐
⭐⭐⭐⭐
⭐⭐⭐⭐⭐
⭐⭐⭐⭐
⭐⭐⭐
⭐⭐
⭐
```

> "See? First we create the top (growing), then the bottom (shrinking). Together they form a diamond!"

**Step 3: Explain the Numbers**

> "Notice: the top goes from 1 to 5, and the bottom goes from 4 to 1. Why 4? Because we don't want to repeat the middle row (5 stars). So we start the bottom at 4!"

#### Practice Together

Have students create diamonds. Walk around and help.

#### Teaching Tips

- Emphasize combining two patterns
- Explain why bottom starts at 4 (not 5)
- Show how to adjust the size
- Encourage creativity

---

### Part 5: Creative Time & Wrap-up (7 minutes)

#### Goals

- Students create their own patterns
- Build creativity
- Introduce homework

#### Creative Challenge

> "Now it's YOUR turn! Create at least one pattern of your own. It could be:"
- A bigger triangle
- A different sized diamond
- A pattern with numbers
- A pattern with different characters
- Something completely your own!

Give students 5 minutes to create. Walk around and celebrate creativity.

#### Introduce Homework

> "For homework, create at least 3 patterns: a growing triangle, a shrinking triangle, and one of your own design. Be creative and have fun!"

---

### Part 6: Q&A Buffer (3 minutes)

Use this time for questions and clarifications.

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student create a growing triangle?
- [ ] Can student create a shrinking triangle?
- [ ] Can student create a diamond?
- [ ] Does student understand how `range(row)` works?
- [ ] Is student creative with patterns?

### Homework Assessment: "My Creative Pattern Collection"

| Criteria              | Exceeds (3)                    | Meets (2)                  | Developing (1)           |
| --------------------- | ------------------------------ | -------------------------- | ------------------------ |
| **Growing triangle**  | Correct, maybe extra features  | Correct triangle           | Incorrect or missing     |
| **Shrinking triangle** | Correct, maybe extra features  | Correct triangle           | Incorrect or missing     |
| **Own design**        | Very creative, complex         | Creative pattern           | Basic or missing         |
| **Comments**          | Clear, helpful comments        | Some comments              | No comments              |
| **Creativity**         | Very creative, unique          | Some creativity             | Basic patterns only      |
| **Code runs**         | No errors, well-formatted     | Minor issues, runs         | Major errors             |

### Differentiation Strategies

#### For Students Who Need More Support

- Focus on growing triangle first
- Provide templates with blanks
- Use visual aids (draw triangles)
- Skip diamond if too challenging
- Reduce to 2 patterns instead of 3

#### For Advanced Students

- Challenge with larger triangles
- Ask them to create centered triangles
- Challenge: "Can you create a pattern with numbers?"
- Have them help peers
- Preview combining with if statements (next week)

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                  | Prevention                    | Solution                                    |
| ------------------------ | ----------------------------- | ------------------------------------------- |
| Wrong range in inner loop | Emphasize `range(row)`       | "Inner loop uses row number!"               |
| Wrong backwards range    | Review backwards counting     | "Start big, end small, use -1!"             |
| Forgetting print()        | Show it's needed             | "Don't forget print() after each row!"     |

### Conceptual Issues

| Problem                  | Signs                          | Solution                                    |
| ------------------------ | ------------------------------ | ------------------------------------------- |
| Doesn't understand range(row) | Confused by inner loop        | Use whiteboard, show step by step          |
| Can't visualize pattern   | Struggles to see output        | Draw patterns, show examples               |
| Confused by diamond      | Can't combine patterns         | Break it down: top first, then bottom      |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand growing triangles?
   - Were they able to create shrinking triangles?
   - Did they create diamonds successfully?

2. **What needs improvement?**
   - Any concepts that were unclear?
   - Common mistakes to address?
   - Did students struggle with `range(row)`?

3. **Individual student notes:**
   - Who created amazing patterns?
   - Who needs more support?
   - Who's ready for loops + decisions?

4. **Term 6 specific notes:**
   - Are students ready for next week's combination?
   - How did creativity engage them?
   - Any concerns about complexity?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Pattern Creation:
- Growing triangles: ____ students got it
- Shrinking triangles: ____ students got it
- Diamonds: ____ students got it

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

- **Triangle Patterns:** Review different triangle variations
- **ASCII Art Examples:** Show students what's possible
- **Pattern Ideas:** Prepare creative examples

### For Students (Share with Parents)

- **Pattern Practice:** Try creating different sized triangles
- **Character Exploration:** Use different characters
- **Art Creation:** Create patterns at home

### Parent Communication Template

```
Subject: Term 6 Week 5 - Creative Patterns! 🎨

Dear Parent/Guardian,

Your child created triangles and diamonds with code today!

They can now:
- Create growing triangles (stars increase each row)
- Create shrinking triangles (stars decrease each row)
- Create diamond patterns (combining both)

Key concepts:
- `range(row)` in inner loop makes patterns grow/shrink
- Backwards counting creates shrinking patterns
- Combining patterns creates diamonds

Homework due by [date]:
Create 3 patterns: growing triangle, shrinking triangle, and your own design

How you can help:
- Ask: "Can you show me a triangle that grows?"
- Challenge: "What about a diamond?"
- Celebrate: They're creating art with code!

Next week: Combining loops with decisions (if statements)

Questions? Reply to this email!

Happy pattern making!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review triangle patterns
- [ ] Practice growing/shrinking triangles
- [ ] Prepare diamond example
- [ ] Think about creativity encouragement
- [ ] Test Trinket access

### During Class

- [ ] Reviewed nested loops
- [ ] Taught growing triangles
- [ ] Taught shrinking triangles
- [ ] Taught diamond patterns
- [ ] Students created patterns
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Prepare for Week 6 (loops + decisions)
- [ ] Review homework as it comes in

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This lesson combines creativity with technical skills. Encourage students to experiment and create their own patterns. The `range(row)` concept is key—make sure students understand it before moving on!_ 🎨

