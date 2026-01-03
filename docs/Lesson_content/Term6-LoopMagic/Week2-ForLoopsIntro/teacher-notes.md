# Term 6, Lesson 2: For Loops Intro 🔄

## Teacher's Guide

**Course:** Term 6: Loop Magic  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 6 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces students to their first loop—the `for` loop. This is a critical lesson where students learn the syntax and mechanics of loops. They'll use `range()` to count and repeat actions automatically. This builds directly on last week's conceptual understanding of why loops are needed.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Write a basic `for` loop with correct syntax
2. Use `range()` to specify how many times to repeat
3. Count numbers using loops
4. Print messages multiple times with loops
5. Understand indentation in loops
6. Use the loop variable (`i`) in their code

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing syntax
- Optional: Visual aids showing loop flow

### Pre-Lesson Preparation

1. **Review for loop syntax** — Ensure you're comfortable with `for` and `range()`
2. **Prepare demo code** — Have examples ready to show
3. **Practice common mistakes** — Know what errors students will make
4. **Prepare range() explanation** — Students often struggle with `range(1, 11)` vs `range(10)`
5. **Think about indentation** — This is often the hardest part for beginners

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                              |
| ---- | -------- | ---------------------------- | ------------------------------------ |
| 0:00 | 5 min    | Review & Hook                | Review Week 1, build excitement      |
| 0:05 | 15 min   | Introducing For Loops        | Teach syntax, show first example      |
| 0:20 | 15 min   | Understanding range()         | Explain range(), practice counting    |
| 0:35 | 15 min   | Hands-On Practice             | Students code along                  |
| 0:50 | 7 min    | Common Mistakes & Wrap-up     | Fix errors, summarize                |
| 0:57 | 3 min    | Q&A Buffer                    | Questions and preview                |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Hook (5 minutes)

#### Goals

- Review why loops are needed
- Build excitement for learning loops
- Connect to last week's lesson

#### Script/Talking Points

> "Welcome back! Last week, we learned WHY loops are important. Remember how boring it was to write 'Hello' 100 times? Well, today we're going to learn HOW to do it with just 2 lines of code! Are you ready for some loop magic?"

**Quick Review:**

> "Who can remind us: why do we need loops?"

Wait for: To avoid writing the same thing many times, to automate repetition, etc.

> "Perfect! Today, you're going to learn your FIRST loop—the `for` loop. This is going to change everything! Let's dive in!"

#### Teaching Tips

- Keep review brief—students are eager for new content
- Build excitement about the "magic" of loops
- Emphasize that they're about to learn something powerful

---

### Part 2: Introducing For Loops (15 minutes)

#### Goals

- Teach the basic `for` loop syntax
- Show the first working example
- Emphasize indentation and colon

#### Live Coding Demonstration

**Step 1: Show the Problem**

```python
# The old way - printing Hello 5 times
print("Hello")
print("Hello")
print("Hello")
print("Hello")
print("Hello")
```

> "Look at this code. We have to write the same thing 5 times. Now watch the magic..."

**Step 2: Show the Solution**

```python
# The new way - with a loop!
for i in range(5):
    print("Hello")
```

> "BOOM! Just 2 lines! And it does the exact same thing! Let me break this down..."

**Step 3: Explain Each Part**

Write on whiteboard:

```
for    →  This starts a loop
i      →  A variable name (can be anything, but 'i' is common)
in     →  "in" keyword
range(5) → Creates numbers 0, 1, 2, 3, 4 (5 numbers)
:      →  Colon is REQUIRED!
    print("Hello")  →  Code inside (must be indented!)
```

**Step 4: Run It Together**

> "Let's type this together. First, type: `for i in range(5):`"

Wait for students to type.

> "Now, press Enter. Notice how Python automatically indents the next line? That's because it knows you're inside a loop! Now type: `print("Hello")`"

Wait for students to type.

> "Perfect! Now click Run. What happens?"

Wait for: It prints "Hello" 5 times

> "YES! The loop ran 5 times and printed 'Hello' each time! That's the power of loops!"

#### Teaching Tips

- Type slowly so students can follow
- Emphasize the colon and indentation
- Show the output clearly
- Celebrate when it works!

---

### Part 3: Understanding range() (15 minutes)

#### Goals

- Explain how `range()` works
- Show `range(number)` vs `range(start, stop)`
- Practice counting with loops

#### Demonstration: range() Basics

**Example 1: range(5)**

```python
for i in range(5):
    print(i)
```

**Output:**
```
0
1
2
3
4
```

> "Notice something? It starts at 0, not 1! `range(5)` gives us 0, 1, 2, 3, 4—that's 5 numbers total, starting from 0."

**Example 2: range(1, 6)**

```python
for i in range(1, 6):
    print(i)
```

**Output:**
```
1
2
3
4
5
```

> "Now THIS starts at 1! `range(1, 6)` means 'start at 1, go up to (but don't include) 6'. So we get 1, 2, 3, 4, 5."

**Common Confusion:**

> "If I want to count from 1 to 10, what should I write?"

Wait for answers. Some will say `range(1, 10)`.

> "Almost! But `range(1, 10)` gives us 1 through 9. To get 1 through 10, we need `range(1, 11)`. Remember: the second number is NOT included!"

**Practice Together:**

> "Let's practice. I want to count from 1 to 20. What should we write?"

Wait for: `range(1, 21)`

> "Perfect! Let's try it:"

```python
for i in range(1, 21):
    print(i)
```

Run it and show it counts 1-20.

#### Teaching Tips

- This is often confusing—take your time
- Use the whiteboard to show number sequences
- Emphasize: "second number is NOT included"
- Practice multiple examples together

---

### Part 4: Hands-On Practice (15 minutes)

#### Goals

- Students practice writing loops
- Build confidence through repetition
- Catch and fix common mistakes

#### Guided Practice Exercises

**Exercise 1: Count to 10**

> "Let's count from 1 to 10. Type this:"

```python
for i in range(1, 11):
    print(i)
```

Walk around and help students who are stuck.

**Exercise 2: Print Message 5 Times**

> "Now let's print 'I love Python!' 5 times:"

```python
for i in range(5):
    print("I love Python!")
```

**Exercise 3: Numbered Messages**

> "Now let's combine both—print numbered messages:"

```python
for i in range(1, 6):
    print("Step", i, ": Do something awesome!")
```

#### Teacher Circulation

During this time:
- Check for correct syntax (colon, indentation)
- Help students who can't find the colon key
- Fix indentation errors
- Encourage students who finish early to try variations

#### Common Issues to Watch For

1. **Missing colon** — Most common mistake!
2. **Wrong indentation** — Code not indented inside loop
3. **Wrong range numbers** — Using `range(1, 10)` when they want 1-10
4. **Forgetting to run** — Students type code but don't click Run

---

### Part 5: Common Mistakes & Wrap-up (7 minutes)

#### Review Common Mistakes

Show these on screen and fix them together:

**Mistake 1: Missing Colon**
```python
for i in range(5)  # ERROR: Missing colon!
    print("Hello")
```

**Fix:**
```python
for i in range(5):  # Colon added!
    print("Hello")
```

**Mistake 2: Wrong Indentation**
```python
for i in range(5):
print("Hello")  # ERROR: Not indented!
```

**Fix:**
```python
for i in range(5):
    print("Hello")  # Properly indented!
```

**Mistake 3: Wrong Range**
```python
for i in range(1, 10):  # Only goes 1-9!
    print(i)
```

**Fix:**
```python
for i in range(1, 11):  # Now goes 1-10!
    print(i)
```

#### Key Takeaways

> "What did we learn today?"

Quick review:
1. "How do we start a loop?" → `for`
2. "What do we use to count?" → `range()`
3. "What must we remember?" → Colon and indentation!
4. "If I want 1-10, what range?" → `range(1, 11)`

#### Introduce Homework

> "For homework, you're going to create a program with at least 3 different loops! Count to 20, print a message 10 times, and count by 2s. Show me what you can do!"

---

### Part 6: Q&A Buffer (3 minutes)

Use this time for:
- Student questions
- Helping anyone who fell behind
- Extra challenges for fast finishers
- Celebrating good work

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student write a basic `for` loop?
- [ ] Does student remember the colon?
- [ ] Does student understand indentation?
- [ ] Can student use `range()` correctly?
- [ ] Can student count from 1 to a specific number?

### Homework Assessment: "My First Loop Program"

| Criteria              | Exceeds (3)                    | Meets (2)                  | Developing (1)           |
| --------------------- | ------------------------------ | -------------------------- | ------------------------ |
| **Counts 1-20**       | Correct loop, maybe extra      | Correct loop               | Incorrect or missing     |
| **Prints message 10x** | Correct loop, creative message | Correct loop               | Incorrect or missing     |
| **Counts by 2s**      | Correct, maybe counts by 5s too | Correct loop               | Incorrect or missing     |
| **Comments**          | Clear, helpful comments        | Some comments              | No comments              |
| **Code runs**         | No errors, well-formatted     | Minor issues, runs        | Major errors             |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide a template with blanks to fill in
- Focus on just `range(5)` first (don't worry about start/stop)
- Use physical counting (clap 5 times, etc.) to understand repetition
- Pair with a peer
- Reduce homework to 2 loops instead of 3

#### For Advanced Students

- Challenge with larger ranges (count to 100)
- Introduce `range(start, stop, step)` preview
- Ask them to count backwards (preview next week)
- Have them help peers
- Challenge: "Can you print a multiplication table?"

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                  | Prevention                    | Solution                                    |
| ------------------------ | ----------------------------- | ------------------------------------------- |
| Missing colon            | Emphasize early and often     | "Always put a colon after range()!"         |
| Wrong indentation        | Show clearly, type together  | "Everything inside must be indented!"       |
| Wrong range numbers      | Practice many examples        | "Second number is NOT included!"            |
| Can't find colon key     | Show keyboard location        | "It's Shift + semicolon (;)"                |

### Conceptual Issues

| Problem                  | Signs                          | Solution                                    |
| ------------------------ | ------------------------------ | ------------------------------------------- |
| Doesn't understand range | Confused by range(1, 11)       | Use whiteboard to show number sequences     |
| Doesn't see the point    | "Why not just write it 5 times?" | Remind them: "What about 100 times?"        |
| Confused by variable `i` | Doesn't use `i` in code        | Show examples using `i` in print statements |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand the syntax?
   - Did they get excited about loops?
   - Were they able to write loops independently?

2. **What needs improvement?**
   - Any concepts that took longer than expected?
   - Common mistakes to address next week?
   - Did students struggle with `range()`?

3. **Individual student notes:**
   - Who mastered loops quickly?
   - Who needs extra support with syntax?
   - Who's ready for more challenges?

4. **Term 6 specific notes:**
   - How did the first technical loop lesson go?
   - Are students ready for more complex loops next week?
   - Any concerns about indentation or syntax?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Syntax Understanding:
- Colon: ____ students remembered
- Indentation: ____ students got it
- range(): ____ students understood

Common Mistakes:
-

Students Excelling:
-

Students Needing Support:
-

Adjustments for Week 3:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Python for Loop Tutorial:** Review syntax and examples
- **range() Function Guide:** Understand all range() variations
- **Indentation Best Practices:** Help students with spacing

### For Students (Share with Parents)

- **Practice Loops:** Try counting to different numbers
- **Loop Challenge:** Print your name different numbers of times
- **Pattern Recognition:** Look for loops in games/apps

### Parent Communication Template

```
Subject: Term 6 Week 2 - For Loops Intro! 🔄

Dear Parent/Guardian,

Your child learned their FIRST loop today—the `for` loop!

They can now:
- Count numbers automatically
- Print messages multiple times
- Use loops to repeat actions

Key concepts:
- `for i in range(5):` creates a loop that runs 5 times
- `range(1, 11)` counts from 1 to 10 (second number not included!)
- Code inside loops must be indented

Homework due by [date]:
Create a program with 3 different loops (count to 20, print message 10x, count by 2s)

How you can help:
- Ask: "Can you show me a loop that counts to 10?"
- Challenge: "What if you wanted to count to 100?"
- Celebrate: This is a major programming milestone!

Next week: More loop challenges (counting by 2s, backwards, etc.)

Questions? Reply to this email!

Happy looping!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review `for` loop syntax
- [ ] Prepare demo code examples
- [ ] Practice explaining `range()`
- [ ] Prepare common mistake examples
- [ ] Test Trinket access

### During Class

- [ ] Reviewed Week 1 concepts
- [ ] Introduced `for` loop syntax
- [ ] Explained `range()` clearly
- [ ] Students practiced writing loops
- [ ] Addressed common mistakes
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Prepare for Week 3 (loop challenges)
- [ ] Review homework as it comes in

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This is students' first real loop! Take your time with syntax, especially the colon and indentation. These are foundational skills that will be used throughout the rest of the term. Celebrate their success—they're becoming real programmers!_ 🔄

