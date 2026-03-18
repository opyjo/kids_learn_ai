---
title: "While Loops Intro"
description: "Discover while loops - loops that continue while something is true"
difficulty: "beginner"
order_index: 1
course_slug: "term-7-game-builder"
is_premium: false
requires_trinket: true
starter_code: |
  # While Loops Intro
  # Loops that continue while something is true

  # Count from 1 to 5
  count = 1
  while count <= 5:
      print(count)
      count = count + 1

  # Keep asking until user says "yes"
  answer = ""
  while answer != "yes":
      answer = input("Say 'yes': ")
  print("Thank you!")
class_activities: |
  ## 🎮 Class Activity: While Loop Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can count from 1 to 10 using a while loop?
  3. Challenge 2: Who can create a loop that asks for a password until correct?
  4. Challenge 3: Who can create a loop that counts backwards from 10 to 1?
  5. Share your code with the class!

  **Bonus:** Try creating a loop that continues until you type "stop"!
take_home_assignment: |
  ## 📚 Homework: My First While Loop Program

  **Assignment:** Create a Python program using `while` loops that does at least 2 different things!

  **Requirements:**
  1. Use a while loop to count from 1 to 10
  2. Use a while loop to ask the user a question until they give a specific answer
  3. Add comments explaining what each loop does
  4. Make it creative and fun!
  5. Code must run without errors

  **Bonus Challenges:**
  - Count backwards from 10 to 1
  - Create a loop that continues until the user types "quit"
  - Create a simple password checker

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses while loops to keep running until a task is complete! When a game AI plays until it wins, when a chatbot keeps talking until you say goodbye, or when a program keeps checking until it finds what it's looking for—that's all while loops!

  You're learning the same loops that keep AI systems running!
---

# Term 7, Lesson 1: While Loops Intro 🔄

**Course:** Term 7: Game Builder  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Understand what a `while` loop is
- Write your first `while` loop
- Know the difference between `for` loops and `while` loops
- Create loops that continue until a condition is met
- Use `while` loops for counting and user input

---

## 🤖 Welcome from BrightByte!

> _"Hey Game Builders! 🎮 Welcome to Term 7! You've learned `for` loops—loops that repeat a specific number of times. But today, we're discovering a NEW kind of loop—the `while` loop! This loop is SPECIAL because it keeps going WHILE something is true. It's perfect for games that keep playing until you win, lose, or quit! Ready to unlock the power of games that never end?"_

### What's Special About Term 7?

In Term 6, you learned:
- `for` loops that repeat a specific number of times
- Creating patterns with loops
- Building ASCII art generators

Now in Term 7, you'll discover:
- **`while` loops** — Loops that continue until something happens
- **Game loops** — Games that keep playing
- **Random numbers** — Making games unpredictable
- **Keeping score** — Tracking wins and points
- **Building real games** — Interactive games you can play!

> _BrightByte says: "By the end of Term 7, you'll build a complete number guessing game! But first, let's learn the `while` loop—the secret to games that keep going!"_

---

## 🔄 What is a While Loop?

### The Basic Idea

A `while` loop keeps repeating **while** a condition is **true**. It stops when the condition becomes **false**.

Think of it like:
- "Keep asking while the answer is wrong"
- "Keep playing while the game isn't over"
- "Keep counting while the number is less than 10"

### The Basic Syntax

```python
while condition:
    # Code to repeat
    # This runs while condition is True
```

**Important parts:**
- `while` — The keyword that starts the loop
- `condition` — Something that can be True or False
- `:` — Don't forget the colon!
- Indentation — Code inside must be indented

---

## 🔢 While Loop vs For Loop

### For Loop: Fixed Number of Times

```python
# For loop: repeats exactly 5 times
for i in range(5):
    print("Hello")
```

**When to use:** When you know exactly how many times to repeat.

### While Loop: Until Something Happens

```python
# While loop: repeats until condition is False
count = 0
while count < 5:
    print("Hello")
    count = count + 1
```

**When to use:** When you don't know how many times, but you know when to stop.

### Key Difference

| For Loop                    | While Loop                        |
| --------------------------- | --------------------------------- |
| Repeats a specific number   | Repeats until condition is False |
| `for i in range(5):`        | `while count < 5:`                |
| Knows how many times        | Doesn't know—stops when done     |

---

## 📊 Example 1: Counting with While Loop

### Count from 1 to 5

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

**How it works:**
1. Start with `count = 1`
2. Check: Is `count <= 5`? Yes → Enter loop
3. Print `count` (prints 1)
4. Increase `count` by 1 (now `count = 2`)
5. Check again: Is `count <= 5`? Yes → Continue
6. Repeat until `count` becomes 6
7. Check: Is `count <= 5`? No → Exit loop

**Important:** We must change `count` inside the loop, or it will run forever!

### Count from 1 to 10

```python
count = 1
while count <= 10:
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
6
7
8
9
10
```

---

## 🎮 Example 2: Asking Until Correct Answer

### Keep Asking Until "yes"

```python
answer = ""
while answer != "yes":
    answer = input("Say 'yes': ")
print("Thank you!")
```

**How it works:**
1. Start with `answer = ""` (empty string)
2. Check: Is `answer != "yes"`? Yes → Enter loop
3. Ask user: "Say 'yes': "
4. User types something
5. Check again: Is `answer != "yes"`?
   - If user typed "yes" → Exit loop
   - If user typed anything else → Continue loop
6. Print "Thank you!"

**This keeps asking until the user types "yes"!**

### Keep Asking Until Correct Password

```python
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")
```

**This keeps asking until the user types "secret"!**

---

## ⚠️ The Danger: Infinite Loops!

### What is an Infinite Loop?

An **infinite loop** is a loop that runs **forever** because the condition never becomes False.

### Example of Infinite Loop (DON'T RUN THIS!)

```python
# WARNING: This will run forever!
count = 1
while count <= 5:
    print(count)
    # Oops! Forgot to increase count!
    # count stays 1 forever, so loop never ends!
```

**What happens:** The loop prints "1" forever because `count` never changes!

### How to Avoid Infinite Loops

**Always make sure something changes inside the loop!**

```python
# GOOD: count increases each time
count = 1
while count <= 5:
    print(count)
    count = count + 1  # This changes count!
```

**Or make sure the condition can become False:**

```python
# GOOD: answer can change
answer = ""
while answer != "yes":
    answer = input("Say 'yes': ")  # This changes answer!
```

---

## 🎯 More While Loop Examples

### Example 1: Count Backwards

```python
count = 10
while count >= 1:
    print(count)
    count = count - 1
```

**Output:**
```
10
9
8
7
6
5
4
3
2
1
```

### Example 2: Count by 2s

```python
count = 0
while count <= 10:
    print(count)
    count = count + 2
```

**Output:**
```
0
2
4
6
8
10
```

### Example 3: Keep Asking Until Quit

```python
command = ""
while command != "quit":
    command = input("Enter command (or 'quit' to exit): ")
    print("You entered:", command)
print("Goodbye!")
```

---

## 🎮 Practice Challenges!

### Challenge 1: Count to 10

```python
count = 1
while count <= 10:
    print(count)
    count = count + 1
```

### Challenge 2: Countdown from 10

```python
count = 10
while count >= 1:
    print(count)
    count = count - 1
```

### Challenge 3: Password Checker

```python
password = ""
while password != "python":
    password = input("Enter password: ")
print("Correct!")
```

### Challenge 4: Keep Asking Name

```python
name = ""
while name == "":
    name = input("What's your name? ")
print("Hello,", name, "!")
```

### Challenge 5: Create Your Own!

Create a while loop that does something creative!

---

## 📝 Key Takeaways

### While Loop Syntax

```python
while condition:
    # Code to repeat
    # Must change something so condition can become False!
```

### Important Rules

1. **Always change something** — The condition must be able to become False
2. **Use `:` after condition** — Don't forget the colon!
3. **Indent code inside** — Everything inside must be indented
4. **Avoid infinite loops** — Make sure the loop can end!

### When to Use While vs For

| Use `for` loop when...           | Use `while` loop when...              |
| -------------------------------- | ------------------------------------- |
| You know how many times          | You don't know how many times         |
| Counting through a range         | Waiting for something to happen       |
| Creating patterns                | Asking until user does something      |
| `for i in range(10):`            | `while answer != "yes":`              |

### Vocabulary Words

| Word            | Definition                                    | Example                    |
| --------------- | --------------------------------------------- | -------------------------- |
| **While loop**  | A loop that continues while condition is True | "while count < 10:"        |
| **Condition**  | Something that can be True or False           | "count < 10"               |
| **Infinite loop** | A loop that runs forever                    | "while True:" (dangerous!) |
| **Update**      | To change a variable's value                 | "count = count + 1"        |

---

## 🌟 Next Lesson Preview

**Week 2: Stopping Loops**

Next week, you'll learn:
- **How to safely stop while loops** — Avoiding infinite loops
- **Using break and continue** — Controlling loop flow
- **More stopping techniques** — Different ways to end loops

**Sneak peek:**

```python
# Using break to stop a loop
while True:
    answer = input("Say 'quit' to stop: ")
    if answer == "quit":
        break  # Stops the loop!
    print("You said:", answer)
```

Get ready to master loop control! 🎮

---

## 🎉 Great Job, Game Builder!

You just learned your first `while` loop!

**What you accomplished today:**

- ✅ Learned what a `while` loop is
- ✅ Wrote your first `while` loop
- ✅ Understood the difference between `for` and `while`
- ✅ Created loops that continue until a condition is met
- ✅ Avoided infinite loops (hopefully!)

> _BrightByte says: "WOW! You just learned a SUPER powerful tool! 🎮 While loops are what make games keep playing, programs keep asking, and AI keep working until a task is done. Next week, we'll learn how to stop loops safely. You're becoming a real game developer!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Counting Practice:** Count to different numbers using while loops
2. **Password Games:** Create different password checkers
3. **Question Loops:** Keep asking questions until you get the answer you want
4. **Countdown Timers:** Create countdowns from different numbers
5. **Your Own Loops:** Create while loops for your own ideas!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: while loops are powerful, but make sure they can stop!_ 🔄

