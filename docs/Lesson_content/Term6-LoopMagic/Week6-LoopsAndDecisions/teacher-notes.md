# Term 6, Lesson 6: Loops + Decisions 🧠

## Teacher's Guide

**Course:** Term 6: Loop Magic  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 6 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson combines loops with if statements, teaching students to make decisions inside loops. This is a critical skill that combines concepts from Term 3 (decisions) with Term 6 (loops). It prepares students for the term project next week where they'll create an interactive ASCII art generator.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Combine `for` loops with `if` statements
2. Make decisions for each item in a loop
3. Create conditional patterns
4. Filter items in loops based on conditions
5. Understand how loops and decisions work together

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing logic flow

### Pre-Lesson Preparation

1. **Review if/else** — Ensure students remember decision-making from Term 3
2. **Review loops** — Ensure students remember loop basics
3. **Prepare examples** — Have conditional patterns ready
4. **Think about common mistakes** — Indentation, condition logic

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                              |
| ---- | -------- | ---------------------------- | ------------------------------------ |
| 0:00 | 5 min    | Review & Hook                | Review loops and if, introduce combination |
| 0:05 | 15 min   | Loops + If Basics            | Teach combining loops with if        |
| 0:20 | 15 min   | Conditional Patterns         | Create patterns that change          |
| 0:35 | 15 min   | Filtering in Loops           | Filter items based on conditions     |
| 0:50 | 7 min    | Practice & Wrap-up            | Students practice, homework          |
| 0:57 | 3 min    | Q&A Buffer                    | Questions and preview                 |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Hook (5 minutes)

#### Goals

- Review loops and if statements separately
- Build excitement about combining them
- Connect to real-world applications

#### Script/Talking Points

> "Welcome back! You've learned loops. You've learned if statements. But today, we're going to COMBINE them! This is where programming gets REALLY powerful. You'll create patterns that change, filter numbers, and make smart decisions automatically!"

**Quick Review:**

> "Who can remind us: how do we check if a number is even?"

Wait for: `if i % 2 == 0:`

> "Perfect! And how do we loop through numbers 1-10?"

Wait for: `for i in range(1, 11):`

> "Great! Now what if we put them TOGETHER? Watch this..."

#### Teaching Tips

- Keep review brief
- Build excitement about the combination
- Emphasize that this is how real programs work

---

### Part 2: Loops + If Basics (15 minutes)

#### Goals

- Teach combining loops with if statements
- Show filtering (only printing certain items)
- Practice with students

#### Live Coding Demonstration

**Step 1: Show the Problem**

> "What if I wanted to print only the EVEN numbers from 1 to 10? I could check each one manually, but there's a better way..."

**Step 2: Show the Solution**

```python
for i in range(1, 11):
    if i % 2 == 0:
        print(i)
```

**Output:**
```
2
4
6
8
10
```

> "BOOM! The loop goes through each number, and the if statement checks: 'Is it even?' If yes, print it. If no, skip it!"

**Step 3: Explain the Flow**

Write on whiteboard:

```
Loop iteration 1: i = 1
  → Check: 1 % 2 == 0? No → Skip
Loop iteration 2: i = 2
  → Check: 2 % 2 == 0? Yes → Print 2
Loop iteration 3: i = 3
  → Check: 3 % 2 == 0? No → Skip
...
```

> "See? For each number, we make a decision. That's the power of combining loops and if statements!"

**Step 4: Show Else**

```python
for i in range(1, 11):
    if i % 2 == 0:
        print(i, "is even")
    else:
        print(i, "is odd")
```

**Output:**
```
1 is odd
2 is even
3 is odd
4 is even
...
```

> "Now we handle BOTH cases—even and odd!"

#### Practice Together

> "Let's print only ODD numbers from 1 to 20. What should we write?"

Wait for: `if i % 2 == 1:` or `if i % 2 != 0:`

```python
for i in range(1, 21):
    if i % 2 == 1:
        print(i)
```

Run it and show the output.

#### Teaching Tips

- Emphasize the flow: loop → check → decide
- Use whiteboard to show step-by-step
- Practice multiple examples
- Celebrate when students understand

---

### Part 3: Conditional Patterns (15 minutes)

#### Goals

- Create patterns that change based on conditions
- Show different characters/actions for different cases
- Practice creating conditional patterns

#### Demonstration: Alternating Pattern

**Step 1: Show the Pattern**

```python
for i in range(1, 11):
    if i % 2 == 0:
        print("⭐", end="")
    else:
        print("★", end="")
print()
```

**Output:**
```
★⭐★⭐★⭐★⭐★⭐
```

> "See? Even numbers get ⭐, odd numbers get ★. The pattern alternates!"

**Step 2: More Examples**

```python
# Stars for multiples of 3
for i in range(1, 21):
    if i % 3 == 0:
        print("⭐", end="")
    else:
        print(i, end=" ")
print()
```

**Step 3: Practice Together**

Have students create their own conditional patterns. Walk around and help.

#### Teaching Tips

- Show variety of patterns
- Encourage creativity
- Help with condition logic
- Celebrate interesting patterns

---

### Part 4: Filtering in Loops (15 minutes)

#### Goals

- Understand filtering concept
- Filter based on different conditions
- Practice filtering exercises

#### Demonstration: Filtering

**Example 1: Multiples of 5**

```python
for i in range(1, 51):
    if i % 5 == 0:
        print(i)
```

> "This 'filters' the numbers—only shows ones divisible by 5!"

**Example 2: Greater Than**

```python
for i in range(1, 31):
    if i > 20:
        print(i)
```

> "This filters—only shows numbers greater than 20!"

#### Practice Together

Have students create filters. Walk around and help.

#### Teaching Tips

- Emphasize "filtering" concept
- Show different filter types
- Practice multiple examples
- Help with condition logic

---

### Part 5: Practice & Wrap-up (7 minutes)

#### Goals

- Students practice combining loops and if
- Introduce homework
- Preview next week's project

#### Practice Time

Give students 5 minutes to create their own conditional patterns. Walk around and celebrate creativity.

#### Introduce Homework

> "For homework, create a program that combines loops with if statements. Print different things for even vs odd numbers, and create at least 2 conditional patterns!"

#### Preview Next Week

> "Next week is your BIG PROJECT—the ASCII Art Generator! You'll use everything you've learned: loops, patterns, and decisions. Get ready to create something amazing!"

---

### Part 6: Q&A Buffer (3 minutes)

Use this time for questions and clarifications.

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student combine loops with if statements?
- [ ] Can student create conditional patterns?
- [ ] Can student filter items in loops?
- [ ] Does student understand the logic flow?
- [ ] Is student ready for the project?

### Homework Assessment: "Smart Pattern Program"

| Criteria              | Exceeds (3)                    | Meets (2)                  | Developing (1)           |
| --------------------- | ------------------------------ | -------------------------- | ------------------------ |
| **Uses if in loop**   | Creative, complex conditions   | Basic if in loop          | Missing or incorrect     |
| **Even/odd pattern**  | Creative implementation        | Correct pattern           | Incorrect or missing     |
| **2+ patterns**       | 3+ creative patterns           | 2 patterns                | 1 or missing            |
| **Comments**          | Clear, helpful comments        | Some comments              | No comments              |
| **Code runs**         | No errors, well-formatted     | Minor issues, runs         | Major errors             |

### Differentiation Strategies

#### For Students Who Need More Support

- Focus on simple conditions first (even/odd)
- Provide templates with blanks
- Use visual aids (show flow)
- Reduce to 1 pattern instead of 2
- Pair with a peer

#### For Advanced Students

- Challenge with complex conditions
- Ask them to use `and`/`or`
- Challenge: "Can you create a checkerboard pattern?"
- Have them help peers
- Preview project requirements

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                  | Prevention                    | Solution                                    |
| ------------------------ | ----------------------------- | ------------------------------------------- |
| Wrong indentation        | Show clearly, type together   | "If inside loop must be indented!"          |
| Wrong condition logic    | Practice conditions first     | "Test your condition before adding to loop" |
| Forgetting else          | Show both cases               | "Handle both true and false!"               |

### Conceptual Issues

| Problem                  | Signs                          | Solution                                    |
| ------------------------ | ------------------------------ | ------------------------------------------- |
| Doesn't understand flow  | Confused by combination        | Use whiteboard, show step by step          |
| Can't create conditions  | Struggles with logic           | Practice conditions separately first        |
| Overwhelmed              | Too much at once               | Break it down: loop first, then add if      |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand the combination?
   - Were they able to create conditional patterns?
   - Did they get excited about the project?

2. **What needs improvement?**
   - Any concepts that were unclear?
   - Common mistakes to address?
   - Are students ready for the project?

3. **Individual student notes:**
   - Who mastered the combination quickly?
   - Who needs more support?
   - Who's ready for the project?

4. **Term 6 specific notes:**
   - Are students ready for Week 7 project?
   - Any concerns about project complexity?
   - How did combining concepts go?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Combination Understanding:
- Loops + if: ____ students got it
- Conditional patterns: ____ students got it
- Filtering: ____ students got it

Common Mistakes:
-

Students Excelling:
-

Students Needing Support:
-

Project Readiness:
- Ready: ____ students
- Need review: ____ students
- Need support: ____ students

Adjustments for Week 7:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Combining Loops and Decisions:** Review examples
- **Project Preparation:** Prepare for ASCII Art Generator
- **Condition Logic:** Practice different condition types

### For Students (Share with Parents)

- **Practice Combinations:** Try different loop + if combinations
- **Pattern Creation:** Create conditional patterns
- **Project Prep:** Think about what patterns they want to create

### Parent Communication Template

```
Subject: Term 6 Week 6 - Loops + Decisions! 🧠

Dear Parent/Guardian,

Your child combined loops with decisions today!

They can now:
- Make decisions inside loops
- Create conditional patterns
- Filter items in loops

Key concepts:
- `if` statements can go inside `for` loops
- This allows smart, dynamic patterns
- This is how real programs (and AI) work!

Homework due by [date]:
Create a program combining loops with if statements

How you can help:
- Ask: "Can you show me a loop that only prints even numbers?"
- Challenge: "What about a pattern that changes?"
- Celebrate: This is advanced programming!

Next week: BIG PROJECT - ASCII Art Generator! 🎨

Questions? Reply to this email!

Happy coding!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review if/else concepts
- [ ] Review loop concepts
- [ ] Prepare combination examples
- [ ] Think about project preparation
- [ ] Test Trinket access

### During Class

- [ ] Reviewed loops and if separately
- [ ] Taught combining loops with if
- [ ] Taught conditional patterns
- [ ] Taught filtering
- [ ] Students practiced
- [ ] Homework explained
- [ ] Project previewed

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Prepare for Week 7 (project)
- [ ] Review homework as it comes in

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This lesson combines two major concepts. Take time to ensure students understand the flow: loop → check → decide. This is critical for the project next week. Students who master this are ready to create amazing ASCII art generators!_ 🧠

