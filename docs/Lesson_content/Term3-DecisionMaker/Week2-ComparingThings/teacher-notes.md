# Term 3, Lesson 2: Comparing Things! 🔍

## Teacher's Guide

**Course:** Term 3: Decision Maker  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson expands on Week 1's comparison operators by teaching students to compare text (strings) and variables. This is crucial because real programs often need to compare user input (which comes as text) and make decisions based on those comparisons. This prepares students for if statements next week.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Compare text (strings) using comparison operators
2. Understand alphabetical comparison
3. Compare variables (both numbers and text)
4. See how comparisons work in real programs
5. Use comparisons with user input

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing comparison examples

### Pre-Lesson Preparation

1. **Review string comparison** — Understand how Python compares text
2. **Prepare examples** — Text comparisons, variable comparisons
3. **Think of relatable scenarios** — Password checks, name comparisons
4. **Prepare common mistakes** — Case sensitivity, etc.

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time  | Duration | Activity                       | Details                              |
| ----- | -------- | ------------------------------ | ------------------------------------ |
| 0:00  | 5 min    | Review & Introduction          | Quick review, introduce text comparison |
| 0:05  | 15 min   | Comparing Text                  | Teach string comparison               |
| 0:20  | 15 min   | Comparing Variables             | Use comparisons with variables       |
| 0:35  | 15 min   | Hands-On Practice               | Students practice comparisons        |
| 0:50  | 7 min    | Wrap-up & Homework              | Summary and assignment               |
| 0:57  | 3 min    | Q&A Buffer                     | Questions and preview               |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Introduction (5 minutes)

#### Goals

- Quick review of Week 1
- Introduce text comparison
- Build excitement

#### Script/Talking Points

> "Welcome back! Last week, you learned to compare numbers. But guess what? You can compare WAY more than just numbers! Today, we're going to learn to compare TEXT, variables, and all sorts of things!"

**Quick Review:**
- "What are the two Boolean values?" → True and False
- "What symbol for equal to?" → `==`
- "What symbol for greater than?" → `>`

> "Perfect! Now let's learn to compare text!"

#### Teaching Tips

- Keep review brief
- Build excitement about new possibilities
- Connect to real-world uses

---

### Part 2: Comparing Text (15 minutes)

#### Goals

- Teach string comparison
- Explain alphabetical order
- Show case sensitivity

#### Live Coding Demonstration

**Introduction:**
> "Python can compare text just like it compares numbers! Watch this..."

**Example 1: Equal Text**
```python
print("hello" == "hello")
print("hello" == "goodbye")
```

> "See? We can check if two words are the same! 'hello' equals 'hello' is True, but 'hello' equals 'goodbye' is False!"

**Example 2: Alphabetical Order**
```python
print("apple" < "banana")
print("zebra" > "apple")
```

> "Python compares text alphabetically, like a dictionary! 'apple' comes before 'banana', so apple < banana is True!"

**Example 3: Case Sensitivity**
```python
print("hello" == "Hello")  # False!
print("A" < "a")          # True - capitals come first!
```

> "Important: Capital letters matter! 'hello' is NOT the same as 'Hello'! And in Python's ordering, capital letters come before lowercase letters!"

#### Common Mistakes to Address

| Mistake                    | Why It Happens              | How to Fix                                |
| -------------------------- | -------------------------- | ----------------------------------------- |
| Forgetting case            | Expecting case-insensitive  | "Capital letters matter!"                 |
| Confusing alphabetical     | Not understanding order     | "Think dictionary order"                 |

#### Teaching Tips

- Use dictionary analogy
- Emphasize case sensitivity
- Show practical examples (password checks)

---

### Part 3: Comparing Variables (15 minutes)

#### Goals

- Show how to compare variables
- Connect to real programs
- Prepare for if statements

#### Live Coding Demonstration

**Example 1: Number Variables**
```python
age = 10
score = 100

print(age > 5)
print(score > 200)
```

> "We can compare variables just like we compare numbers directly!"

**Example 2: Text Variables**
```python
name = "Alex"
print(name == "Alex")
print(name == "alex")  # False - case matters!
```

**Example 3: Real-World Example**
```python
# Password checker
entered_password = "secret123"
correct_password = "secret123"

print(entered_password == correct_password)
```

> "This is how real programs check passwords! They compare what the user entered to the correct password!"

#### Teaching Tips

- Connect to real-world uses
- Show practical examples
- Build toward if statements

---

### Part 4: Hands-On Practice (15 minutes)

#### Goals

- Students practice all types of comparisons
- Build confidence
- Prepare for next week

#### Guided Practice

**Exercise 1: Text Comparisons**
> "Try comparing different words: print('cat' < 'dog'), print('hello' == 'hello')"

**Exercise 2: Variable Comparisons**
> "Create variables and compare them!"

**Exercise 3: Password Checker**
> "Create a simple password checker!"

#### Teacher Circulation

During this time:
- Help with case sensitivity issues
- Guide variable comparisons
- Encourage experimentation
- Celebrate correct answers

---

### Part 5: Wrap-up & Homework (7 minutes)

#### Review Key Points

Quick-fire review:
1. "Can you compare text?" → Yes!
2. "How does Python compare text?" → Alphabetically
3. "Do capitals matter?" → Yes!

#### Introduce Homework

> "For homework, create a comparison program with numbers, text, and variables!"

#### Preview Next Week

> "Next week, we'll use these comparisons to make programs that ACTUALLY DECIDE what to do! You'll learn if statements!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**
- [ ] Can student compare text?
- [ ] Does student understand alphabetical order?
- [ ] Can student compare variables?
- [ ] Does student understand case sensitivity?

### Homework Assessment

| Criteria                | Exceeds (3)                      | Meets (2)              | Developing (1)        |
| ----------------------- | -------------------------------- | ---------------------- | --------------------- |
| **Number comparisons**  | 5+ creative comparisons           | 5+ comparisons         | Fewer than 5          |
| **Text comparisons**    | 3+ creative text comparisons     | 3+ text comparisons    | Fewer than 3          |
| **Variable use**        | Uses variables effectively       | Some variable use      | No variables          |
| **Operators used**      | Uses 4+ different operators      | Uses 4 operators       | Uses fewer            |
| **Comments**           | Clear, helpful comments          | Some comments          | No comments           |
| **Code runs**          | No errors, well-formatted        | Minor issues, runs     | Major errors          |

### Differentiation Strategies

#### For Students Who Need More Support

- Focus on just `==` and `!=` first
- Use simple words
- Provide templates
- Pair with peer
- Emphasize case sensitivity

#### For Advanced Students

- Challenge with complex comparisons
- Preview string methods (`.lower()`, `.upper()`)
- Have them create comparison games
- Help peers

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                     | Prevention                          | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Case sensitivity confusion  | Emphasize early                    | "Capital letters matter!"                     |
| Alphabetical order confusion | Use dictionary analogy             | "Think dictionary order"                      |

### Conceptual Issues

| Problem                     | Signs                               | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Doesn't understand alphabetical | Gets wrong answers              | "Think: which comes first in dictionary?"     |
| Forgets case matters        | Expects "Hello" == "hello"         | "Case matters! They're different!"             |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students grasp text comparison?
   - Did they understand alphabetical order?

2. **What needs improvement?**
   - Any concepts that took longer?
   - Common mistakes?

3. **Individual student notes:**
   - Who excelled?
   - Who needs support?

4. **Term 3 specific notes:**
   - Are students ready for if statements?
   - Any confusion about comparisons?

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review string comparison
- [ ] Prepare examples
- [ ] Think of relatable scenarios
- [ ] Prepare common mistakes

### During Class

- [ ] Reviewed Week 1
- [ ] Taught text comparison
- [ ] Taught variable comparison
- [ ] Students practiced
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Review homework
- [ ] Prepare for Week 3 (if statements)

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This lesson prepares students for if statements! Make sure they understand comparisons well, especially case sensitivity and alphabetical order. These concepts will be crucial next week!_ 🔍

