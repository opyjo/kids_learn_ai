# Term 3, Lesson 4: Otherwise... Else! ⚖️

## Teacher's Guide

**Course:** Term 3: Decision Maker  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces `else` statements, completing the basic if/else decision-making structure. Students learn to handle both True and False cases, making their programs more complete and responsive. This is essential for building interactive programs.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Use `else` statements to handle False cases
2. Write complete `if/else` blocks
3. Understand that if/else handles all cases
4. Build programs that always respond
5. Create more complete decision-making programs

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing if/else structure

### Pre-Lesson Preparation

1. **Review else syntax** — Ensure you're comfortable
2. **Prepare examples** — Age checks, score checks, etc.
3. **Think of relatable scenarios** — Both True and False cases
4. **Prepare common mistakes** — Especially structure issues

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time  | Duration | Activity                       | Details                              |
| ----- | -------- | ------------------------------ | ------------------------------------ |
| 0:00  | 5 min    | Review & Introduction          | Quick review, introduce else         |
| 0:05  | 15 min   | What Is else?                  | Teach else statements                |
| 0:20  | 15 min   | If/Else Examples               | Show complete if/else blocks         |
| 0:35  | 20 min   | Hands-On Practice              | Students write if/else statements    |
| 0:55  | 2 min    | Wrap-up & Homework             | Summary and assignment               |
| 0:57  | 3 min    | Q&A Buffer                     | Questions and preview                |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Introduction (5 minutes)

#### Goals

- Quick review of if statements
- Introduce the "what if False?" question
- Build excitement about else

#### Script/Talking Points

> "Welcome back! Last week, you learned `if` statements. But I have a question: what happens when the condition is False? Right now, nothing! But today, you'll learn `else`—what to do OTHERWISE!"

**Quick Review:**
- "What does `if` do?" → Runs code if condition is True
- "What happens if condition is False?" → Nothing (yet!)

> "Today, we'll learn to handle BOTH cases!"

#### Teaching Tips

- Connect to last week
- Build on if knowledge
- Emphasize: "Now we handle everything!"

---

### Part 2: What Is else? (15 minutes)

#### Goals

- Introduce else statements
- Show the structure
- Demonstrate with examples

#### Live Coding Demonstration

**Introduction:**
> "An `else` statement tells Python: 'If the condition is False, do THIS instead!' It always comes after an `if`!"

**Example 1: Your First If/Else**
```python
age = 10

if age >= 13:
    print("You are a teenager!")
else:
    print("You are not a teenager yet!")
```

> "Let's break this down:
> 1. `if age >= 13:` - Check if age is 13 or more
> 2. If True, print 'You are a teenager!'
> 3. `else:` - Otherwise (if False)
> 4. Print 'You are not a teenager yet!'"

Run it with age = 10:
> "See? It printed the else part because age >= 13 is False!"

Run it with age = 15:
> "Now it prints the if part because age >= 13 is True!"

**Example 2: Score Checker**
```python
score = 85

if score >= 80:
    print("You passed!")
else:
    print("You failed.")
```

> "This handles BOTH cases: passing and failing!"

#### Common Mistakes to Address

| Mistake                    | Why It Happens              | How to Fix                                |
| -------------------------- | -------------------------- | ----------------------------------------- |
| Using else without if      | Syntax error               | "else always needs an if first!"          |
| Wrong indentation          | Same as if statements      | "4 spaces for else code too!"            |
| Forgetting colon           | Syntax error               | "Don't forget : after else!"              |

#### Teaching Tips

- Emphasize: "else needs an if"
- Show both cases running
- Use relatable examples
- Test with different values

---

### Part 3: If/Else Examples (15 minutes)

#### Goals

- Show various if/else examples
- Demonstrate different use cases
- Build understanding

#### Live Coding Demonstration

**Example 1: Even/Odd**
```python
number = 10

if number % 2 == 0:
    print("Even!")
else:
    print("Odd!")
```

**Example 2: Password Checker**
```python
password = "secret"
correct = "secret"

if password == correct:
    print("Access granted!")
else:
    print("Access denied!")
```

**Example 3: Positive/Negative**
```python
number = -5

if number > 0:
    print("Positive!")
else:
    print("Negative or zero!")
```

#### Teaching Tips

- Show variety of examples
- Test each with different values
- Emphasize: "Handles ALL cases!"

---

### Part 4: Hands-On Practice (20 minutes)

#### Goals

- Students write if/else statements
- Practice with different scenarios
- Build confidence

#### Guided Practice

**Exercise 1: Age Checker**
> "Create an if/else that checks if someone is a teenager"

**Exercise 2: Pass/Fail**
> "Create an if/else that checks if a score is passing"

**Exercise 3: Even/Odd**
> "Create an if/else that checks if a number is even or odd"

**Exercise 4: Your Own**
> "Create your own if/else statement!"

#### Teacher Circulation

During this time:
- Check syntax
- Help with indentation
- Celebrate working if/else blocks
- Guide students

---

### Part 5: Wrap-up & Homework (2 minutes)

#### Review Key Points

Quick review:
1. "What does else do?" → Handles False case
2. "Can you use else alone?" → No, needs if first
3. "Does else need indentation?" → Yes!

#### Introduce Homework

> "For homework, create a program with at least 5 if/else statements!"

#### Preview Next Week

> "Next week, we'll practice everything and build real decision-making programs!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**
- [ ] Can student write if/else blocks?
- [ ] Does student understand else handles False?
- [ ] Can student use proper syntax?
- [ ] Does student test both cases?

### Homework Assessment

| Criteria                | Exceeds (3)                      | Meets (2)              | Developing (1)        |
| ----------------------- | -------------------------------- | ---------------------- | --------------------- |
| **Number of if/else**   | 7+ creative if/else blocks      | 5+ if/else blocks      | Fewer than 5          |
| **Handles both cases**  | All handle True and False       | Most handle both       | Missing else cases    |
| **Syntax**              | All correct, no errors          | Minor syntax issues    | Major syntax errors   |
| **Comments**            | Clear, helpful comments          | Some comments          | No comments           |
| **Code runs**           | No errors, works perfectly      | Minor issues, runs     | Major errors          |

### Differentiation Strategies

#### For Students Who Need More Support

- Start with just 2-3 if/else blocks
- Provide templates
- Focus on getting syntax right
- Pair with peer
- Emphasize structure

#### For Advanced Students

- Challenge with complex conditions
- Multiple if/else blocks
- Preview elif as bonus
- Help peers
- Create complex decision programs

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                     | Prevention                          | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Using else without if       | Emphasize structure                 | "else always needs if first!"                 |
| Wrong indentation           | Show examples                       | "4 spaces for else code too!"                |
| Forgetting colon            | Emphasize syntax                    | "Don't forget : after else!"                  |

### Conceptual Issues

| Problem                     | Signs                               | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Doesn't understand else     | Can't explain when it runs         | "else runs when if is False"                  |
| Doesn't test both cases     | Only tests one value                | "Test with values that make it True AND False" |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students grasp else statements?
   - Did they understand it handles False?

2. **What needs improvement?**
   - Any concepts that took longer?
   - Common mistakes?

3. **Individual student notes:**
   - Who mastered if/else quickly?
   - Who needs support?

4. **Term 3 specific notes:**
   - Are students ready for practice week?
   - Any confusion about if/else?

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review else syntax
- [ ] Prepare examples
- [ ] Think of relatable scenarios
- [ ] Prepare common mistakes

### During Class

- [ ] Reviewed if statements
- [ ] Introduced else statements
- [ ] Showed if/else examples
- [ ] Students practiced
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Review homework
- [ ] Prepare for Week 5 (practice)

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This completes the basic if/else structure! Make sure students understand that if/else handles ALL cases (True and False). This is essential for building complete decision-making programs!_ ⚖️

