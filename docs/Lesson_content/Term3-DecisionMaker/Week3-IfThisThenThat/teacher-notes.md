# Term 3, Lesson 3: If This, Then That! 🧠

## Teacher's Guide

**Course:** Term 3: Decision Maker  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

This is THE most important lesson in Term 3! Students learn `if` statements—the fundamental tool for decision-making in programming. This is where programs start to "think" and respond differently based on conditions. Mastery of `if` statements is crucial for all future programming.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Write basic `if` statements
2. Understand the structure: `if condition:`
3. Use proper indentation (critical!)
4. Make programs that decide what to do
5. Combine comparisons with if statements

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing if structure
- Visual aids showing indentation

### Pre-Lesson Preparation

1. **Review if statement syntax** — Ensure you're comfortable
2. **Practice indentation** — This is critical!
3. **Prepare examples** — Age checks, score checks, etc.
4. **Think of common mistakes** — Especially indentation errors
5. **Prepare visual aids** — Show indentation clearly

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time  | Duration | Activity                       | Details                              |
| ----- | -------- | ------------------------------ | ------------------------------------ |
| 0:00  | 5 min    | Review & Big Introduction      | Build excitement about if statements |
| 0:05  | 15 min   | What Is an if Statement?       | Teach the concept and structure       |
| 0:20  | 10 min   | Indentation (CRITICAL!)        | Emphasize proper indentation          |
| 0:30  | 20 min   | Hands-On Practice              | Students write if statements          |
| 0:50  | 7 min    | Wrap-up & Homework             | Summary and assignment                |
| 0:57  | 3 min    | Q&A Buffer                     | Questions and preview                 |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Big Introduction (5 minutes)

#### Goals

- Build excitement about if statements
- Connect to previous learning
- Set up the importance

#### Script/Talking Points

> "Welcome back! Today is THE BIGGEST lesson in programming! Today, you're going to learn `if` statements—the tool that makes programs THINK and DECIDE! This is where programming gets REALLY exciting!"

**Quick Review:**
- "What are Booleans?" → True and False
- "What do comparisons give us?" → True or False
- "What's the symbol for equal to?" → `==`

> "Perfect! Now we're going to USE those True/False values to make DECISIONS!"

#### Teaching Tips

- Make this feel special and important
- Build excitement
- Emphasize: "This is where programs become smart!"

---

### Part 2: What Is an if Statement? (15 minutes)

#### Goals

- Introduce if statements
- Show the structure
- Demonstrate with examples

#### Live Coding Demonstration

**Introduction:**
> "An `if` statement tells Python: 'IF something is True, THEN do this!' It's like making a decision!"

**Example 1: Your First If**
```python
age = 10

if age >= 10:
    print("You are 10 or older!")
```

> "Let's break this down:
> 1. `if` - the keyword that starts the decision
> 2. `age >= 10` - the condition (is this True or False?)
> 3. `:` - the colon means 'here's what to do'
> 4. The indented line - what to do if it's True"

Run it:
> "See? It printed because age >= 10 is True!"

**Example 2: When It Doesn't Run**
```python
age = 5

if age >= 10:
    print("You are 10 or older!")
```

> "Now watch... nothing happens! Why? Because age >= 10 is False, so Python SKIPS the indented code!"

**Example 3: Multiple Lines**
```python
score = 100

if score >= 100:
    print("Amazing score!")
    print("You're a champion!")
    print("Keep it up!")
```

> "See? All three lines run because they're all indented! They all belong to the if statement!"

#### Common Mistakes to Address

| Mistake                    | Why It Happens              | How to Fix                                |
| -------------------------- | -------------------------- | ----------------------------------------- |
| Forgetting colon           | Syntax error               | "Always put : after the condition!"      |
| Wrong indentation          | Most common error!         | "4 spaces! Everything must be indented!" |
| Indentation inconsistency  | Mixed spaces/tabs          | "Use 4 spaces consistently!"              |
| No indentation             | Code doesn't belong to if  | "Indent the code that should run!"        |

#### Teaching Tips

- Emphasize the colon repeatedly
- Show what happens with and without indentation
- Use visual aids for indentation
- Test examples live

---

### Part 3: Indentation (CRITICAL!) (10 minutes)

#### Goals

- Emphasize indentation importance
- Show correct vs incorrect
- Practice identifying indentation

#### Live Demonstration

**Show Correct:**
```python
age = 10

if age >= 10:
    print("This works!")  # ← 4 spaces
```

**Show Wrong:**
```python
age = 10

if age >= 10:
print("This is WRONG!")  # ← No indentation - ERROR!
```

> "See the difference? The first one has 4 spaces before print(). The second one has NO spaces. Python needs those spaces to know what belongs to the if statement!"

**Visual Aid:**
Write on board showing the indentation clearly:
```
if condition:
    ← 4 spaces here
    ← 4 spaces here
```

#### Teaching Tips

- Use visual aids
- Show side-by-side: correct vs wrong
- Emphasize: "Indentation is REQUIRED!"
- Practice identifying indentation together

---

### Part 4: Hands-On Practice (20 minutes)

#### Goals

- Students write if statements
- Practice indentation
- Build confidence

#### Guided Practice

**Exercise 1: Simple If**
> "Create an if statement that checks if age is 10 or older"

```python
age = 10
if age >= 10:
    print("You are 10 or older!")
```

**Exercise 2: Score Checker**
> "Check if a score is 80 or higher"

```python
score = 85
if score >= 80:
    print("Great score!")
```

**Exercise 3: Password Checker**
> "Check if a password matches"

```python
password = "secret"
if password == "secret":
    print("Password correct!")
```

**Exercise 4: Your Own**
> "Create your own if statement!"

#### Teacher Circulation

During this time:
- Check indentation constantly
- Help with syntax errors
- Celebrate working if statements
- Help debug issues

---

### Part 5: Wrap-up & Homework (7 minutes)

#### Review Key Points

Quick-fire review:
1. "What keyword starts an if statement?" → `if`
2. "What goes after the condition?" → `:` (colon)
3. "What's super important?" → Indentation!
4. "When does the code run?" → When condition is True

#### Introduce Homework

> "For homework, create a program with at least 5 if statements!"

#### Preview Next Week

> "Next week, we'll learn `else`—what to do when the condition is False! You'll be able to handle BOTH cases!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**
- [ ] Can student write if statements?
- [ ] Does student use proper indentation?
- [ ] Does student remember the colon?
- [ ] Can student explain when code runs?

### Homework Assessment

| Criteria                | Exceeds (3)                      | Meets (2)              | Developing (1)        |
| ----------------------- | -------------------------------- | ---------------------- | --------------------- |
| **Number of if statements** | 7+ creative if statements      | 5+ if statements       | Fewer than 5          |
| **Proper syntax**       | All correct, no errors          | Minor syntax issues    | Major syntax errors   |
| **Indentation**         | Perfect indentation throughout  | Mostly correct         | Indentation errors    |
| **Comments**            | Clear, helpful comments          | Some comments          | No comments           |
| **Code runs**           | No errors, works perfectly      | Minor issues, runs     | Major errors          |

### Differentiation Strategies

#### For Students Who Need More Support

- Start with just 1-2 if statements
- Provide templates with indentation
- Focus on getting syntax right first
- Pair with peer
- Emphasize indentation repeatedly
- Use visual aids

#### For Advanced Students

- Challenge with complex conditions
- Multiple if statements in one program
- Preview `else` as bonus
- Have them help peers
- Create more complex decision programs

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                     | Prevention                          | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Forgetting colon            | Emphasize repeatedly                | "Always : after condition!"                   |
| Wrong indentation           | Show examples, use visual aids      | "4 spaces! Check your indentation!"           |
| Indentation inconsistency   | Emphasize consistency               | "Same number of spaces everywhere!"          |
| Syntax errors               | Type slowly, show structure        | "Check: if, condition, :, indentation"        |

### Conceptual Issues

| Problem                     | Signs                               | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Doesn't understand when code runs | Code always/never runs          | "Code runs ONLY if condition is True"        |
| Confuses = and == in if     | Uses = in condition                | "Use == for comparison in if!"               |
| Doesn't see the point       | Asks why                           | "This makes programs think and decide!"       |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students grasp if statements?
   - Did they understand indentation?
   - Were they excited?

2. **What needs improvement?**
   - Indentation issues?
   - Syntax errors?
   - Common mistakes?

3. **Individual student notes:**
   - Who mastered if statements quickly?
   - Who needs extra support with indentation?

4. **Term 3 specific notes:**
   - Are students ready for else statements?
   - Any confusion about when code runs?

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review if statement syntax
- [ ] Practice indentation examples
- [ ] Prepare visual aids
- [ ] Think of common mistakes
- [ ] Prepare examples

### During Class

- [ ] Built excitement about if statements
- [ ] Taught if statement structure
- [ ] Emphasized indentation (repeatedly!)
- [ ] Students practiced writing if statements
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Review homework
- [ ] Prepare for Week 4 (else statements)

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This is THE most important lesson! If statements are the foundation of all decision-making. Make sure students really understand indentation—it's the #1 source of errors. Be patient, use visual aids, and celebrate every working if statement!_ 🧠

