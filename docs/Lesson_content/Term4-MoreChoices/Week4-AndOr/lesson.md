---
title: "And & Or"
description: "Learn to combine conditions - check if multiple things are True with 'and' and 'or'!"
difficulty: "beginner"
order_index: 4
course_slug: "term-4-more-choices"
is_premium: false
requires_trinket: true
starter_code: |
  # And & Or
  # Combine conditions to make more powerful checks!

  age = 12
  score = 85

  # Using 'and' - both must be True
  if age >= 13 and score >= 80:
      print("You're a teenager with a good score!")
  else:
      print("Conditions not met.")

  # Using 'or' - at least one must be True
  if age >= 13 or score >= 80:
      print("You're either a teenager OR have a good score!")
  else:
      print("Neither condition is met.")

  # Try changing the values and see what happens!
class_activities: |
  ## 🎮 Class Activity: Condition Combiner Challenge!

  1. Partner up with a classmate
  2. Create 3 programs using 'and'
  3. Create 3 programs using 'or'
  4. Test with different values
  5. Share your programs!

  **Challenge:** Who can create the most creative combined conditions?
take_home_assignment: |
  ## 📚 Homework: My Combined Conditions Program

  **Assignment:** Create a Python program that uses 'and' and 'or' to combine conditions!

  **Requirements:**
  1. Use 'and' at least 3 times
  2. Use 'or' at least 3 times
  3. Create meaningful, real-world checks
  4. Add comments explaining each condition
  5. Test with different values
  6. Code must run without errors

  **Example ideas:**
  - Access control (age AND permission, OR admin)
  - Game requirements (level AND coins, OR special item)
  - Weather decisions (sunny AND warm, OR indoor activity)
  - Study rewards (hours AND score, OR bonus points)
  - Any creative combination you can think of!

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI systems constantly combine conditions! When a security system checks "If face recognized AND password correct, then allow access", or a recommendation system checks "If user likes action OR adventure, then show action-adventure movies", those are using 'and' and 'or'! Every AI decision uses combined conditions! Spam filters use 'and' and 'or' to check emails - "if contains 'FREE' AND 'CLICK HERE', then it's spam, else if contains 'winner' OR 'prize', then check more carefully" - exactly like you're learning!

  You're learning the same logic that powers every AI security and recommendation system!
---
# Term 4, Lesson 4: And & Or! 🔗

**Course:** Term 4: More Choices  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Understand what `and` and `or` do
- Combine multiple conditions in if statements
- Use `and` to check if multiple things are True
- Use `or` to check if at least one thing is True
- Build more powerful decision-making programs!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! You've learned if, else, and elif—that's amazing! But today, we're going to learn something that makes your conditions WAY more powerful! What if you want to check if someone is a teenager AND has a good score? Or if it's sunny OR warm? That's where 'and' and 'or' come in! They let you COMBINE conditions to make smarter decisions!"_

### What's New This Week?

So far you've learned:
- `if` — Check one condition
- `elif` — Check multiple conditions in order
- Single conditions only

This week you'll discover:
- **`and`** — Check if MULTIPLE things are True
- **`or`** — Check if AT LEAST ONE thing is True
- **Combined conditions** — More powerful decision-making!

> _BrightByte says: "Once you learn 'and' and 'or', you can make programs that check multiple things at once! This is how real programs work—they check lots of conditions together. Get ready to level up your decision-making skills!"_

---

## 🔗 What Are `and` and `or`?

### The Problem: Single Conditions

Right now, you can only check ONE thing at a time:

```python
if age >= 13:
    print("You're a teenager!")
```

But what if you want to check TWO things? Like:
- Is the person a teenager AND do they have a good score?
- Is it sunny OR warm outside?

You need to COMBINE conditions!

### The Solution: `and` and `or`!

**`and`** — BOTH conditions must be True
**`or`** — AT LEAST ONE condition must be True

Let's see how they work!

---

## ✅ Using `and` - Both Must Be True

### How `and` Works

When you use `and`, BOTH conditions must be True for the code to run.

```python
if condition1 and condition2:
    # This runs ONLY if BOTH are True
    do something
```

### Example 1: Teenager with Good Score

```python
age = 12
score = 85

if age >= 13 and score >= 80:
    print("You're a teenager with a good score!")
else:
    print("Conditions not met.")
```

**What happens:**
- Is `age >= 13`? → No! (12 >= 13 is False)
- Is `score >= 80`? → Yes! (85 >= 80 is True)
- With `and`, BOTH must be True
- Since one is False, the whole thing is False
- Prints: "Conditions not met."

**Try with `age = 15` and `score = 85`:**
- Both are True!
- Prints: "You're a teenager with a good score!"

### Example 2: Game Access Control

```python
level = 5
coins = 100

if level >= 5 and coins >= 50:
    print("You can enter the special area!")
else:
    print("You need level 5 AND 50 coins to enter.")
```

**Both must be True to enter!**

### Example 3: Perfect Weather

```python
weather = "sunny"
temperature = 75

if weather == "sunny" and temperature >= 70:
    print("Perfect day for the beach! 🏖️")
else:
    print("Maybe another day.")
```

**Both sunny AND warm = perfect beach day!**

---

## 🔀 Using `or` - At Least One Must Be True

### How `or` Works

When you use `or`, AT LEAST ONE condition must be True for the code to run.

```python
if condition1 or condition2:
    # This runs if EITHER is True (or both!)
    do something
```

### Example 1: Teenager OR Good Score

```python
age = 12
score = 85

if age >= 13 or score >= 80:
    print("You're either a teenager OR have a good score!")
else:
    print("Neither condition is met.")
```

**What happens:**
- Is `age >= 13`? → No! (12 >= 13 is False)
- Is `score >= 80`? → Yes! (85 >= 80 is True)
- With `or`, AT LEAST ONE must be True
- Since one is True, the whole thing is True!
- Prints: "You're either a teenager OR have a good score!"

### Example 2: Weather Activity

```python
weather = "rainy"
temperature = 75

if weather == "sunny" or temperature >= 70:
    print("Good weather for outdoor activities!")
else:
    print("Better stay indoors.")
```

**If it's sunny OR warm (or both), go outside!**

### Example 3: Game Bonus

```python
level = 3
special_item = True

if level >= 5 or special_item:
    print("You get a bonus!")
else:
    print("No bonus this time.")
```

**If you're level 5+ OR have a special item, you get a bonus!**

---

## 🎯 Combining `and` and `or`

### You Can Use Both!

You can combine `and` and `or` in the same condition!

```python
age = 15
score = 85
permission = True

if (age >= 13 and score >= 80) or permission:
    print("Access granted!")
else:
    print("Access denied.")
```

**What this means:**
- (Teenager AND good score) OR has permission
- If you're a teenager with a good score, OR if you have permission, you get access!

**Notice the parentheses!** They group conditions together.

### Example: Game Access

```python
level = 4
coins = 200
vip_member = True

if (level >= 5 and coins >= 100) or vip_member:
    print("Welcome to the VIP area!")
else:
    print("You need level 5 and 100 coins, or VIP membership.")
```

---

## 🎮 More Fun Examples

### Example 1: Study Rewards

```python
hours_studied = 3
score = 90

if hours_studied >= 2 and score >= 85:
    print("🌟 You earned a gold star!")
elif hours_studied >= 2 or score >= 85:
    print("⭐ You earned a silver star!")
else:
    print("Keep studying!")
```

### Example 2: Pet Care

```python
hunger = 30
happiness = 80

if hunger < 50 and happiness > 70:
    print("Your pet is happy and well-fed! 😊")
elif hunger < 50 or happiness > 70:
    print("Your pet is doing okay.")
else:
    print("Your pet needs attention! 🐾")
```

### Example 3: Shopping Discount

```python
age = 65
student = False
total = 100

if age >= 65 or student:
    print("You get a 10% discount!")
    print(f"Your total: ${total * 0.9}")
else:
    print(f"Your total: ${total}")
```

**Senior OR student = discount!**

---

## 🎯 Practice Time!

### Challenge 1: Game Character Requirements

Create a program that checks if a character can use a special weapon:

```python
level = 8
strength = 50

if level >= 10 and strength >= 40:
    print("You can use the legendary sword!")
elif level >= 10 or strength >= 40:
    print("You're close! Keep leveling up!")
else:
    print("You need level 10 AND strength 40.")
```

### Challenge 2: Weather Activity Planner

Create a program that suggests activities based on weather:

```python
weather = "sunny"
temperature = 75

if weather == "sunny" and temperature >= 70:
    print("Perfect for swimming! 🏊")
elif weather == "sunny" or temperature >= 70:
    print("Good for outdoor activities! 🎾")
else:
    print("Better stay indoors! 🏠")
```

### Challenge 3: Access Control

Create a program that checks access:

```python
age = 15
has_permission = True
is_admin = False

if (age >= 13 and has_permission) or is_admin:
    print("Access granted!")
else:
    print("Access denied.")
```

---

## 🎨 Creative Challenge: Build Your Own!

Create your own program using `and` and `or`!

**Ideas:**
- Game unlock system
- Study reward system
- Weather activity planner
- Access control system
- Any creative combination!

---

## 📝 Key Takeaways

### `and` - Both Must Be True

```python
if condition1 and condition2:
    # Runs ONLY if BOTH are True
    do something
```

**Example:**
```python
if age >= 13 and score >= 80:
    print("Both conditions met!")
```

### `or` - At Least One Must Be True

```python
if condition1 or condition2:
    # Runs if EITHER is True (or both!)
    do something
```

**Example:**
```python
if weather == "sunny" or temperature >= 70:
    print("At least one condition met!")
```

### Important Rules

1. **`and` = both True** — Both conditions must be True
2. **`or` = at least one True** — One or both can be True
3. **Use parentheses** — When combining and/or, use () to group
4. **Read left to right** — Python checks conditions in order

### When to Use

- **Use `and`** when you need BOTH things to be True
- **Use `or`** when you need AT LEAST ONE thing to be True
- **Combine them** when you have complex requirements

### Vocabulary Words

| Word | Definition | Example |
|------|------------|---------|
| **and** | Both conditions must be True | `age >= 13 and score >= 80` |
| **or** | At least one condition must be True | `sunny or warm` |
| **combine** | Put multiple conditions together | Using and/or |
| **parentheses** | () used to group conditions | `(a and b) or c` |

---

## 🌟 Next Lesson Preview

**Week 5: Grade Calculator!**

Next week, you'll build a COMPLETE grade calculator program! You'll use everything you've learned—if, elif, else, and, or—to create a program that calculates and displays letter grades. This will be your first big project combining all your skills!

**Sneak peek:**

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
# ... and more!

print(f"Your grade is {grade}!")
```

Get ready to build something amazing! 🎯

---

## 🎉 Great Job!

You just learned to combine conditions!

**What you accomplished today:**

- ✅ Learned what `and` and `or` do
- ✅ Combined multiple conditions in if statements
- ✅ Used `and` to check if multiple things are True
- ✅ Used `or` to check if at least one thing is True
- ✅ Built more powerful decision-making programs!

> _BrightByte says: "EXCELLENT! 🔗 You just learned 'and' and 'or'! This is HUGE! Now you can check multiple things at once—just like real programs do! Next week, we'll use everything you've learned to build a complete grade calculator. You're becoming a real programmer! Keep practicing, and I'll see you next week!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Game Unlock System:** Check level AND coins, OR special key
2. **Study Rewards:** Hours AND score, OR bonus project
3. **Weather Planner:** Sunny AND warm, OR indoor backup
4. **Access Control:** Age AND permission, OR admin status
5. **Shopping Discounts:** Member OR student, AND purchase amount

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_
