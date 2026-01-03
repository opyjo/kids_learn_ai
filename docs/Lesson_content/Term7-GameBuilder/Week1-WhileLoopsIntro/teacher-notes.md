# Term 7, Lesson 1: While Loops Intro 🔄

## Teacher's Guide

**Course:** Term 7: Game Builder  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces students to `while` loops—a new type of loop that continues until a condition becomes False. This is different from `for` loops which repeat a specific number of times. Students need to understand this distinction and learn to avoid infinite loops.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Understand what a `while` loop is
2. Write basic `while` loops
3. Distinguish between `for` loops and `while` loops
4. Use `while` loops for counting and user input
5. Understand the concept of infinite loops and how to avoid them

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing differences between for/while

### Pre-Lesson Preparation

1. **Review while loop syntax** — Ensure you understand while loops
2. **Prepare examples** — Have counting and input examples ready
3. **Think about infinite loops** — Know how to explain and prevent them
4. **Review for vs while** — Be clear on the differences
5. **Welcome message** — Send welcome to Term 7!

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                              |
| ---- | -------- | ---------------------------- | ------------------------------------ |
| 0:00 | 5 min    | Welcome to Term 7!           | Celebrate, introduce Game Builder     |
| 0:05 | 10 min   | For vs While                 | Compare the two loop types           |
| 0:15 | 15 min   | While Loop Basics            | Teach while loop syntax and examples |
| 0:30 | 15 min   | Hands-On Practice            | Students code along                  |
| 0:45 | 10 min   | Infinite Loops & Safety      | Teach about infinite loops           |
| 0:55 | 3 min    | Wrap-up & Homework           | Summary and assignment               |
| 0:58 | 2 min    | Q&A Buffer                    | Questions and preview                |

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome to Term 7! (5 minutes)

#### Goals

- Celebrate returning students
- Create excitement for Term 7
- Introduce the theme: Game Builder

#### Script/Talking Points

> "Welcome back to KidsLearnAI! I'm SO excited to start Term 7 with you! You've learned so much—variables, math, decisions, for loops... but today we're discovering something NEW. Have you ever played a game that keeps going until you win or quit? That's what we're going to learn to build! Welcome to Term 7: Game Builder!"

**Quick Review:**

> "Before we dive in, let's remember: what's a `for` loop?"

Wait for: loops that repeat a specific number of times

> "Perfect! But what if I wanted a loop that keeps going until something happens? Like 'keep asking until the user says yes'? That's where `while` loops come in!"

#### Teaching Tips

- Be enthusiastic about Term 7
- Emphasize that this enables real game development
- Don't show while loops yet—build anticipation

---

### Part 2: For vs While (10 minutes)

#### Goals

- Compare for and while loops
- Show when to use each
- Build understanding of the difference

#### Live Coding Demonstration

**Show For Loop:**

```python
# For loop: we know it repeats 5 times
for i in range(5):
    print("Hello")
```

> "This `for` loop repeats exactly 5 times. We KNOW it will repeat 5 times."

**Show While Loop:**

```python
# While loop: repeats until condition is False
count = 1
while count <= 5:
    print("Hello")
    count = count + 1
```

> "This `while` loop also repeats 5 times, but it's different. It repeats WHILE count is less than or equal to 5. It stops when count becomes 6."

**Key Difference:**

Write on whiteboard:

```
FOR LOOP:        WHILE LOOP:
- Know how many  - Don't know how many
- range(5)       - while count < 5:
- Fixed number   - Until condition False
```

**Real-World Example:**

> "Think about it:"
- **For loop:** "Print 'Hello' 10 times" (we know: 10 times)
- **While loop:** "Keep asking until user says 'yes'" (we don't know: could be 1 time, could be 100 times!)

#### Teaching Tips

- Emphasize the key difference
- Use clear examples
- Make it relatable

---

### Part 3: While Loop Basics (15 minutes)

#### Goals

- Teach while loop syntax
- Show counting example
- Show user input example
- Practice together

#### Live Coding Demonstration

**Example 1: Counting**

```python
count = 1
while count <= 5:
    print(count)
    count = count + 1
```

**Output:**
```
1
2
3
4
5
```

> "Let's break this down:"
- `count = 1` — Start with 1
- `while count <= 5:` — Keep going while count is 5 or less
- `print(count)` — Print the number
- `count = count + 1` — Increase count by 1
- Check again: is count still <= 5? If yes, continue. If no, stop.

**Example 2: Asking Until Yes**

```python
answer = ""
while answer != "yes":
    answer = input("Say 'yes': ")
print("Thank you!")
```

> "This keeps asking until the user types 'yes'. Watch:"

Run it and demonstrate.

> "See? It keeps asking until I type 'yes'. That's the power of while loops!"

#### Practice Together

> "Let's count to 10 using a while loop. Type this:"

```python
count = 1
while count <= 10:
    print(count)
    count = count + 1
```

Walk through it step by step.

#### Teaching Tips

- Type slowly so students can follow
- Emphasize the condition
- Show how the variable changes
- Practice multiple examples

---

### Part 4: Hands-On Practice (15 minutes)

#### Goals

- Students practice writing while loops
- Build confidence
- Catch and fix mistakes

#### Guided Practice Exercises

**Exercise 1: Count to 10**

```python
count = 1
while count <= 10:
    print(count)
    count = count + 1
```

**Exercise 2: Countdown from 10**

```python
count = 10
while count >= 1:
    print(count)
    count = count - 1
```

**Exercise 3: Password Checker**

```python
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")
```

#### Teacher Circulation

During this time:
- Check for correct syntax
- Help with condition logic
- Watch for infinite loops
- Encourage experimentation

#### Common Issues to Watch For

1. **Forgetting to update variable** — Most common mistake!
2. **Wrong condition** — Using `=` instead of `==`
3. **Infinite loops** — Not changing the variable
4. **Wrong indentation** — Code not indented inside loop

---

### Part 5: Infinite Loops & Safety (10 minutes)

#### Goals

- Explain infinite loops
- Show how to avoid them
- Emphasize safety

#### Demonstration: The Danger

> "There's something VERY important to know about while loops. Watch this:"

```python
# WARNING: This is dangerous!
count = 1
while count <= 5:
    print(count)
    # Oops! Forgot to increase count!
```

> "What do you think will happen?"

Let students guess.

> "It will print '1' FOREVER! Because count never changes, so the condition is always True. This is called an 'infinite loop'—it never stops!"

**How to Avoid:**

> "Always make sure something changes inside the loop:"

```python
# GOOD: count increases
count = 1
while count <= 5:
    print(count)
    count = count + 1  # This changes count!
```

**Safety Tips:**

1. Always update a variable inside the loop
2. Make sure the condition can become False
3. Test with small numbers first
4. If stuck in infinite loop, stop the program!

#### Teaching Tips

- Emphasize this is important
- Show the danger clearly
- Give safety tips
- Reassure that it's preventable

---

### Part 6: Wrap-up & Homework (3 minutes)

#### Review Key Points

> "What did we learn today?"

Quick review:
1. "What's a while loop?" → Loops that continue while condition is True
2. "Difference from for loop?" → While doesn't know how many times
3. "How to avoid infinite loops?" → Always change something inside loop

#### Introduce Homework

> "For homework, create a program with at least 2 while loops: one that counts to 10, and one that asks a question until you get a specific answer!"

---

### Part 7: Q&A Buffer (2 minutes)

Use this time for questions and clarifications.

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student write a basic while loop?
- [ ] Does student understand the condition?
- [ ] Can student avoid infinite loops?
- [ ] Does student understand for vs while?
- [ ] Can student use while with input()?

### Homework Assessment: "My First While Loop Program"

| Criteria              | Exceeds (3)                    | Meets (2)                  | Developing (1)           |
| --------------------- | ------------------------------ | -------------------------- | ------------------------ |
| **Counts to 10**      | Correct, maybe extra features  | Correct loop               | Incorrect or missing     |
| **Asks until answer** | Creative, works correctly      | Correct loop               | Incorrect or missing     |
| **Comments**          | Clear, helpful comments        | Some comments              | No comments              |
| **Code runs**         | No errors, well-formatted     | Minor issues, runs         | Major errors             |
| **No infinite loops** | Safe, well-designed            | No infinite loops          | Has infinite loop risk   |

### Differentiation Strategies

#### For Students Who Need More Support

- Focus on counting loops first
- Provide templates with blanks
- Use visual aids (show count changing)
- Pair with a peer
- Reduce to 1 loop instead of 2

#### For Advanced Students

- Challenge with more complex conditions
- Ask them to create password checkers
- Challenge: "Can you count backwards by 2s?"
- Have them help peers
- Preview break/continue (next week)

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                  | Prevention                    | Solution                                    |
| ------------------------ | ----------------------------- | ------------------------------------------- |
| Forgetting to update     | Emphasize early and often     | "Always change the variable inside!"        |
| Infinite loops           | Show danger, emphasize safety | "Make sure condition can become False!"    |
| Wrong condition          | Practice conditions          | "Test your condition first!"                |
| Wrong indentation        | Show clearly                 | "Code inside must be indented!"              |

### Conceptual Issues

| Problem                  | Signs                          | Solution                                    |
| ------------------------ | ------------------------------ | ------------------------------------------- |
| Doesn't understand difference | Confused by for vs while      | Use clear examples, show side by side       |
| Can't see when to use    | Doesn't know which to choose  | Give scenarios: "When would you use while?" |
| Scared of infinite loops | Afraid to try                 | Reassure, show how to prevent, test safely   |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand while loops?
   - Were they able to write while loops?
   - Did they understand for vs while?

2. **What needs improvement?**
   - Any concepts that were unclear?
   - Common mistakes to address?
   - Did students create infinite loops?

3. **Individual student notes:**
   - Who mastered while loops quickly?
   - Who needs more support?
   - Who's ready for more challenges?

4. **Term 7 specific notes:**
   - Are students excited about game building?
   - Any concerns about infinite loops?
   - How did the introduction go?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

While Loop Understanding:
- Basic syntax: ____ students got it
- For vs while: ____ students got it
- Avoiding infinite loops: ____ students got it

Common Mistakes:
-

Students Excelling:
-

Students Needing Support:
-

Adjustments for Week 2:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **While Loop Tutorial:** Review while loop concepts
- **Infinite Loop Prevention:** Best practices
- **For vs While Guide:** When to use each

### For Students (Share with Parents)

- **Practice While Loops:** Try counting and asking questions
- **Safety First:** Always test with small numbers
- **Game Prep:** Think about games that keep going

### Parent Communication Template

```
Subject: Term 7 Has Begun - While Loops Intro! 🔄

Dear Parent/Guardian,

Welcome to Term 7: Game Builder!

Today your child learned about while loops—a new type of loop that continues until something happens.

They can now:
- Write while loops
- Understand the difference between for and while loops
- Create loops that ask questions until answered

Key concepts:
- `while condition:` creates a loop that continues while condition is True
- Must change something inside loop to avoid infinite loops
- Perfect for games that keep going!

Homework due by [date]:
Create a program with 2 while loops (counting and asking questions)

How you can help:
- Ask: "Can you show me a while loop that counts to 10?"
- Challenge: "What about one that asks until you say 'yes'?"
- Safety: Remind them to always change the variable inside!

Next week: Learning to stop loops safely (avoiding infinite loops)

Questions? Reply to this email!

Happy coding!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review while loop syntax
- [ ] Prepare for vs while examples
- [ ] Prepare infinite loop demonstration
- [ ] Think about safety tips
- [ ] Welcome message sent

### During Class

- [ ] Celebrated Term 7 start
- [ ] Compared for vs while loops
- [ ] Taught while loop basics
- [ ] Students practiced writing loops
- [ ] Taught about infinite loops
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Prepare for Week 2 (stopping loops)
- [ ] Review homework as it comes in

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: While loops are powerful but can be dangerous if not used carefully. Emphasize safety and always changing variables. Students who master this are ready for game loops next week!_ 🔄

