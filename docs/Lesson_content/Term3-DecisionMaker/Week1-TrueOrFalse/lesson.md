---
title: "True or False!"
description: "Discover Booleans - the building blocks of decision-making in programming!"
difficulty: "beginner"
order_index: 1
course_slug: "term-3-decision-maker"
is_premium: false
requires_trinket: true
starter_code: |
  # True or False!
  # Let's explore Booleans - the building blocks of decisions!

  # Booleans are either True or False
  print(True)
  print(False)
  
  # Try comparing things!
  print(5 > 3)  # Is 5 greater than 3?
  print(2 < 1)  # Is 2 less than 1?
  print(5 == 5)  # Is 5 equal to 5?

  # Try your own comparisons!
class_activities: |
  ## 🎮 Class Activity: True or False Game!

  1. Partner up with a classmate
  2. Take turns making statements
  3. The other person decides: True or False?
  4. Then check in Python!
  5. Example: "Is 10 greater than 5?" → Check with: print(10 > 5)

  **Challenge:** Who can come up with the trickiest True/False question?
take_home_assignment: |
  ## 📚 Homework: My True/False Quiz

  **Assignment:** Create a Python program that checks 10 different True/False statements!

  **Requirements:**
  1. Use at least 5 comparison operators (>, <, ==, !=, >=, <=)
  2. Include at least 10 print statements checking True/False
  3. Mix numbers and variables
  4. Add comments explaining what each check does
  5. Code must run without errors

  **Example ideas:**
  - Check if numbers are greater/less than each other
  - Compare variables you create
  - Check if numbers are equal or not equal

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Every decision an AI makes is based on True/False questions! When a self-driving car asks "Is there a stop sign?" or a chatbot asks "Did the user say hello?", those are Boolean questions - the answer is either True or False! Games like Akinator use True/False questions to guess what you're thinking - it asks yes/no questions and narrows down the answer, just like you're learning to do with if statements!

  You're learning the same True/False logic that powers every AI decision!
---
# Term 3, Lesson 1: True or False! ✅❌

**Course:** Term 3: Decision Maker  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Understand what Booleans are (True and False)
- Recognize that everything in programming can be True or False
- Use comparison operators to create True/False values
- See how True/False is the foundation of all decisions
- Prepare for making programs that think!

---

## 🤖 Welcome from BrightByte!

> _"Hey there, Decision Maker! 🧠 Welcome to Term 3! In Term 2, you learned to do math and build calculators. But guess what? Today, we're going to learn something EVEN MORE POWERFUL—we're going to teach Python to THINK and MAKE DECISIONS! And it all starts with something simple: True or False!"_

### What's Special About Term 3?

In Term 2, you learned:
- Math operations
- Getting input from users
- Building calculators

Now in Term 3, you'll learn:
- How to make programs that think
- How to make decisions in code
- How to build interactive games and stories
- How to make programs respond differently based on what users do!

> _BrightByte says: "This is where programming gets REALLY exciting! Once programs can make decisions, they start feeling 'smart' and 'alive'! And it all starts with understanding True and False!"_

---

## ✅❌ What Are Booleans?

### The Simplest Type of Information

A **Boolean** is a type of information that can only be one of two things:
- **True** ✅
- **False** ❌

That's it! Just two options. Simple, right?

### Why Are They Important?

Booleans are the foundation of all decision-making in programming! Every decision a program makes is based on asking: "Is this True or False?"

**Examples:**
- "Is the user logged in?" → True or False
- "Is the score greater than 100?" → True or False
- "Did the user type 'yes'?" → True or False

---

## 🔍 Creating True and False Values

### Example 1: Direct True/False

You can use `True` and `False` directly:

```python
print(True)
print(False)
```

**Output:**
```
True
False
```

### Example 2: Comparisons Create Booleans

When you compare things, Python gives you True or False:

```python
print(5 > 3)  # Is 5 greater than 3?
print(2 < 1)  # Is 2 less than 1?
print(5 == 5)  # Is 5 equal to 5?
```

**Output:**
```
True
False
True
```

**Why?**
- `5 > 3` → Is 5 greater than 3? **Yes!** → `True`
- `2 < 1` → Is 2 less than 1? **No!** → `False`
- `5 == 5` → Is 5 equal to 5? **Yes!** → `True`

---

## 🔢 Comparison Operators

### The Six Comparison Operators

Python has six ways to compare things:

| Operator | Meaning           | Example      | Result |
| -------- | ----------------- | ------------ | ------ |
| `>`      | Greater than      | `5 > 3`      | `True` |
| `<`      | Less than         | `2 < 1`      | `False` |
| `==`     | Equal to          | `5 == 5`     | `True` |
| `!=`     | Not equal to      | `5 != 3`     | `True` |
| `>=`     | Greater or equal  | `5 >= 5`     | `True` |
| `<=`     | Less or equal     | `3 <= 5`     | `True` |

### Example 1: Greater Than

```python
print(10 > 5)   # True - 10 is greater than 5
print(3 > 7)    # False - 3 is NOT greater than 7
print(5 > 5)    # False - 5 is NOT greater than 5 (they're equal)
```

### Example 2: Less Than

```python
print(3 < 7)    # True - 3 is less than 7
print(10 < 5)   # False - 10 is NOT less than 5
print(5 < 5)    # False - 5 is NOT less than 5 (they're equal)
```

### Example 3: Equal To (Important!)

```python
print(5 == 5)   # True - 5 equals 5
print(5 == 3)   # False - 5 does NOT equal 3
```

**⚠️ Important:** Notice it's `==` (two equals signs), not `=` (one equals sign)!

- `=` means "store this value" (assignment)
- `==` means "are these equal?" (comparison)

### Example 4: Not Equal To

```python
print(5 != 3)   # True - 5 is NOT equal to 3
print(5 != 5)   # False - 5 IS equal to 5
```

### Example 5: Greater or Equal / Less or Equal

```python
print(5 >= 5)   # True - 5 is greater than OR equal to 5
print(5 >= 3)   # True - 5 is greater than 3
print(3 >= 5)   # False - 3 is NOT greater than or equal to 5

print(5 <= 5)   # True - 5 is less than OR equal to 5
print(3 <= 5)   # True - 3 is less than 5
print(5 <= 3)   # False - 5 is NOT less than or equal to 3
```

---

## 🎮 Practice Time!

### Challenge 1: Number Comparisons

Try these comparisons. What do you think the answer will be?

```python
print(10 > 5)
print(7 < 3)
print(8 == 8)
print(6 != 6)
print(10 >= 10)
print(5 <= 3)
```

### Challenge 2: Variable Comparisons

Compare variables:

```python
age = 10
score = 100
points = 50

print(age > 5)
print(score > 200)
print(points == 50)
print(age != score)
```

### Challenge 3: Your Own Comparisons

Create your own variables and compare them:

```python
# Create your own variables
num1 = 15
num2 = 20
num3 = 15

# Compare them!
print(num1 > num2)
print(num1 < num2)
print(num1 == num3)
print(num2 != num1)
```

---

## 📝 Key Takeaways

### What Are Booleans?

- **Booleans** are values that can only be `True` or `False`
- They're the foundation of all decision-making in programming
- Every comparison gives you a Boolean result

### The Six Comparison Operators

| Operator | What It Does           | Example  |
| -------- | ---------------------- | -------- |
| `>`      | Greater than           | `5 > 3`  |
| `<`      | Less than              | `3 < 5`  |
| `==`     | Equal to               | `5 == 5` |
| `!=`     | Not equal to           | `5 != 3` |
| `>=`     | Greater than or equal  | `5 >= 5` |
| `<=`     | Less than or equal     | `3 <= 5` |

### Important Things to Remember

1. **Two equals signs for comparison** — `==` not `=`
2. **Comparisons give True or False** — Always!
3. **Booleans are simple** — Just True or False, nothing else
4. **This is the foundation** — All decisions start here!

### Vocabulary Words

| Word              | Definition                                    | Example                    |
| ----------------- | --------------------------------------------- | -------------------------- |
| **Boolean**       | A value that is either True or False          | `True`, `False`            |
| **Comparison**    | Checking if two things are related            | `5 > 3`                    |
| **Operator**      | A symbol that does something                  | `>`, `<`, `==`             |
| **True**          | The Boolean value meaning "yes" or "correct"   | `5 > 3` gives `True`        |
| **False**         | The Boolean value meaning "no" or "incorrect" | `3 > 5` gives `False`      |

---

## 🌟 Next Lesson Preview

**Week 2: Comparing Things!**

Next week, you'll learn even MORE ways to compare things, including comparing text! You'll become a comparison expert!

Get ready to compare everything! 🔍

---

## 🎉 Great Job!

You just learned the foundation of all decision-making!

**What you accomplished today:**

- ✅ Learned what Booleans are (True and False)
- ✅ Discovered the six comparison operators
- ✅ Created True/False values with comparisons
- ✅ Understood that this is the foundation of decisions
- ✅ Prepared for making programs that think!

> _BrightByte says: "WOW! You just learned the building blocks of all decision-making in programming! Every time a program asks 'Is this true?' or 'Is that false?', it's using Booleans—just like you learned today! Next week, we'll learn even more ways to compare things. You're becoming a real programmer who can make programs think! Keep up the amazing work!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Comparison Challenge:** Create 20 different comparisons and predict if they'll be True or False
2. **Variable Comparisons:** Create variables and compare them in different ways
3. **Number Guessing:** Compare numbers to see which is bigger/smaller
4. **True/False Quiz:** Make a quiz of True/False questions and check them in Python

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_

