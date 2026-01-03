# Term 2, Lesson 6: Practice & Debug! 🔍

## Teacher's Guide

**Course:** Term 2: Math Wizard  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson provides practice time and introduces debugging skills. Students will review all concepts learned so far, identify common bugs in math programs, and learn systematic debugging strategies. This builds confidence and prepares them for the term project next week.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Practice all math and programming skills learned
2. Identify common bugs in math programs
3. Read and understand Python error messages
4. Use the Debug Dance strategy to fix problems
5. Build confidence in debugging their own code

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for the Debug Dance steps
- Prepared buggy code examples

### Pre-Lesson Preparation

1. **Review common bugs** — int() issues, variable names, etc.
2. **Prepare buggy code examples** — Have examples ready to fix
3. **Practice error messages** — Know what common errors look like
4. **Prepare Debug Dance visual** — For the whiteboard
5. **Think of extension challenges** — For advanced students

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time  | Duration | Activity                       | Details                              |
| ----- | -------- | ------------------------------ | ------------------------------------ |
| 0:00  | 5 min    | Review & Introduction           | Quick review, introduce bugs         |
| 0:05  | 15 min   | Common Bugs Demonstration       | Show and fix common bugs together    |
| 0:20  | 10 min   | The Debug Dance                 | Teach debugging strategy              |
| 0:30  | 20 min   | Hands-On Bug Fixing             | Students fix bugs in practice code   |
| 0:50  | 7 min    | Wrap-up & Homework              | Summary and assignment                |
| 0:57  | 3 min    | Q&A Buffer                     | Questions and preview                |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Introduction (5 minutes)

#### Goals

- Quick review of all concepts
- Normalize bugs as part of programming
- Build excitement about debugging

#### Script/Talking Points

> "Welcome back! You've learned SO much: math operations, input(), int(), building calculators... Today, we're going to practice everything AND learn to find and fix BUGS—mistakes in code. Every programmer makes bugs, even professionals! The important thing is learning how to find and fix them!"

**Quick Review:**
- "What do we use to ask questions?" → `input()`
- "How do we convert text to numbers?" → `int()`
- "What's the symbol for multiplication?" → `*`

> "Perfect! Now let's learn to find bugs!"

#### Teaching Tips

- Normalize bugs: "Everyone makes them!"
- Build confidence: "You can fix them!"
- Make it fun: "You're a Bug Detective!"

---

### Part 2: Common Bugs Demonstration (15 minutes)

#### Goals

- Show common bugs students will encounter
- Demonstrate how to fix them
- Model the debugging process

#### Live Coding: Bug 1 - Forgetting int()

**Show the buggy code:**
```python
number = input("Enter a number: ")
print(number + 5)
```

Run it and show the error:
> "See this error? It says we can't add a number to text. That's because `input()` gives us text! Let's fix it..."

**Fix it together:**
```python
number_text = input("Enter a number: ")
number = int(number_text)  # Convert!
print(number + 5)
```

> "Now it works! We converted the text to a number first!"

#### Live Coding: Bug 2 - Wrong Variable Name

**Show the buggy code:**
```python
num1 = input("First number: ")
num1 = int(num1)
print(num1 + num2)  # Error!
```

> "What's wrong here? Python says 'num2' is not defined. That's because we never created num2! Let's fix it..."

**Fix it:**
```python
num1_text = input("First number: ")
num2_text = input("Second number: ")  # Don't forget this!
num1 = int(num1_text)
num2 = int(num2_text)  # Convert this too!
print(num1 + num2)
```

#### Live Coding: Bug 3 - Using x Instead of *

**Show the buggy code:**
```python
result = 5 x 3  # Error!
print(result)
```

> "Python doesn't understand 'x' for multiplication. We need to use * instead!"

**Fix it:**
```python
result = 5 * 3  # Use * for multiplication!
print(result)
```

#### Teaching Tips

- Show the error first, then fix it
- Explain WHY each bug happens
- Celebrate when fixes work
- Model thinking out loud

---

### Part 3: The Debug Dance (10 minutes)

#### Goals

- Teach systematic debugging strategy
- Make debugging less scary
- Give students a process to follow

#### The Debug Dance Steps

Write on board:
1. **STOP** — Don't panic!
2. **READ** — Read the error message
3. **FIND** — Find the buggy line
4. **THINK** — What's wrong?
5. **FIX** — Fix it!
6. **TEST** — Test it!

**Demonstrate with an example:**
```python
age = input("How old are you? ")
print("In 10 years:", age + 10)
```

**Step 1: STOP** — "Don't worry, we can fix this!"

**Step 2: READ** — "The error says: 'can only concatenate str (not 'int') to str'. That means we're trying to add text and a number!"

**Step 3: FIND** — "The problem is on line 2: `age + 10`"

**Step 4: THINK** — "`age` is text from `input()`, we need to convert it!"

**Step 5: FIX** — Add `int()` conversion

**Step 6: TEST** — Run it! It works!

#### Teaching Tips

- Make it a "dance" — fun and memorable
- Practice the steps together
- Emphasize: "Read the error message!"
- Build confidence: "You can do this!"

---

### Part 4: Hands-On Bug Fixing (20 minutes)

#### Goals

- Students practice fixing bugs
- Apply the Debug Dance
- Build confidence

#### Practice Exercises

**Exercise 1: Simple Bug**
```python
# Find and fix the bug!
num = input("Enter a number: ")
print(num + 10)
```

**Exercise 2: Multiple Bugs**
```python
# Find and fix ALL the bugs!
print("Calculator")
a = input("First number: ")
b = input("Second number: ")
print(a + b)
print(a - b)
```

**Exercise 3: Partner Challenge**
- Students write buggy code for their partner
- Partner finds and fixes the bug
- Switch roles

#### Teacher Circulation

During this time:
- Help students read error messages
- Guide through Debug Dance steps
- Celebrate when bugs are fixed
- Encourage: "You're doing great!"
- Help advanced students with complex bugs

---

### Part 5: Wrap-up & Homework (7 minutes)

#### Review Key Points

> "What an amazing lesson! You're becoming Bug Detectives!"

Quick review:
- "What's the first step when you find a bug?" → STOP
- "What should you read?" → The error message
- "What's a common bug?" → Forgetting int()

#### Introduce Homework

> "For homework, you're going to fix a buggy calculator! There are 6 bugs to find and fix!"

**Requirements:**
- Find and fix all bugs
- Code must run without errors
- Add comments explaining each fix
- Test with different numbers

#### Preview Next Week

> "Next week, we're building our BIG TERM PROJECT: a complete calculator program! You'll use everything you've learned. You're ready for it!"

---

### Part 6: Q&A Buffer (3 minutes)

Use this time for:
- Student questions
- Helping anyone who needs it
- Extra challenges for fast finishers

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**
- [ ] Can student identify common bugs?
- [ ] Can student read error messages?
- [ ] Does student use the Debug Dance?
- [ ] Can student fix bugs independently?
- [ ] Is student building confidence?

### Homework Assessment: "Debug Detective Challenge"

| Criteria                | Exceeds (3)                      | Meets (2)              | Developing (1)        |
| ----------------------- | -------------------------------- | ---------------------- | --------------------- |
| **Finds all bugs**      | Finds all 6, explains clearly    | Finds most bugs        | Misses several bugs   |
| **Fixes correctly**     | All fixes are correct            | Most fixes correct     | Some fixes incorrect  |
| **Comments**            | Clear explanations for each fix  | Some comments          | No comments           |
| **Code runs**           | No errors, works perfectly      | Minor issues          | Major errors          |
| **Testing**             | Tests with multiple numbers      | Tests once             | Doesn't test          |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide fewer bugs to fix
- Work one-on-one through Debug Dance
- Focus on one bug type at a time
- Pair with a peer
- Give hints: "Check if you converted the numbers"

#### For Advanced Students

- Challenge with more complex bugs
- Ask them to create buggy code for others
- Introduce more advanced error types
- Have them help peers
- Challenge with multiple bugs in one program

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                     | Prevention                          | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Students panic at errors    | Normalize bugs early                | "Bugs are normal! We can fix them!"           |
| Don't read error messages  | Emphasize reading                   | "The error message tells us what's wrong!"    |
| Try to fix everything at once | Teach one bug at a time            | "Fix one bug, test, then fix the next"        |

### Conceptual Issues

| Problem                     | Signs                               | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Scared of bugs              | Gives up easily                     | "Bugs are normal! Let's fix it together!"    |
| Doesn't read error messages | Ignores error, guesses              | "Let's read what Python is telling us"        |
| Overwhelmed                 | Too many bugs at once               | "Let's fix one at a time"                     |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand common bugs?
   - Were they able to fix bugs?
   - Did the Debug Dance help?

2. **What needs improvement?**
   - Any bugs that were too hard?
   - Concepts that need more practice?

3. **Individual student notes:**
   - Who excelled at debugging?
   - Who needs more support?

4. **Term 2 specific notes:**
   - Are students ready for the term project?
   - Any skills that need reinforcement?

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review common bugs
- [ ] Prepare buggy code examples
- [ ] Practice error messages
- [ ] Prepare Debug Dance visual
- [ ] Think of extension challenges

### During Class

- [ ] Reviewed concepts
- [ ] Demonstrated common bugs
- [ ] Taught Debug Dance
- [ ] Students practiced fixing bugs
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Review homework submissions
- [ ] Prepare for Week 7 (term project)

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: Debugging can be frustrating for students. Normalize bugs, build confidence, and celebrate every fix! The Debug Dance gives them a process to follow. This prepares them for the term project where they'll inevitably encounter bugs._ 🔍

