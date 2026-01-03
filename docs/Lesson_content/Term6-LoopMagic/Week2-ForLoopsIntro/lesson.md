---
title: "For Loops Intro"
description: "Learn your first loop - the for loop! Count, repeat, and automate with range()"
difficulty: "beginner"
order_index: 2
course_slug: "term-6-loop-magic"
is_premium: false
requires_trinket: true
starter_code: |
  # For Loops Intro
  # Your first loop!

  # Count from 1 to 10
  for i in range(1, 11):
      print(i)

  # Print "Hello" 5 times
  for i in range(5):
      print("Hello!")
class_activities: |
  ## 🎮 Class Activity: Loop Race!

  1. Partner up with a classmate
  2. Challenge 1: Who can count from 1 to 20 the fastest using a loop?
  3. Challenge 2: Who can print "Python is awesome!" 10 times?
  4. Challenge 3: Who can count backwards from 10 to 1?
  5. Share your code with the class!

  **Bonus:** Try printing your name 5 times using a loop!
take_home_assignment: |
  ## 📚 Homework: My First Loop Program

  **Assignment:** Create a Python program using `for` loops that does at least 3 different things!

  **Requirements:**
  1. Use a loop to count from 1 to 20
  2. Use a loop to print a message 10 times (your choice of message!)
  3. Use a loop to count by 2s (2, 4, 6, 8, 10...)
  4. Add comments explaining what each loop does
  5. Make it creative and fun!
  6. Code must run without errors

  **Bonus Challenges:**
  - Count backwards from 20 to 1
  - Print your name 5 times
  - Count by 5s up to 50

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses loops to process information! When a face recognition system checks a photo, it uses a loop to examine every single pixel. When ChatGPT writes a sentence, it uses a loop to process every word. When a game AI decides what to do, it uses a loop to check thousands of possibilities.

  You're learning the same loops that power every AI system!
---

# Term 6, Lesson 2: For Loops Intro 🔄

**Course:** Term 6: Loop Magic  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 6 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Write your first `for` loop
- Use `range()` to count numbers
- Make Python repeat actions automatically
- Count forwards and backwards
- Print messages multiple times with loops

---

## 🤖 Welcome from BrightByte!

> _"YES! The moment you've been waiting for! 🎉 Last week, you learned WHY we need loops. Today, you're going to learn HOW to use them! Get ready to meet the `for` loop—your new best friend for making Python repeat things automatically. Remember how boring it was to write 'Hello' 100 times? Well, today you'll do it with just 2 lines of code! Let's go!"_

### What's New This Week?

Last week you learned:
- Why repetition is important
- The problem with doing things manually
- Where we see repetition in real life

This week you'll discover:
- **The `for` loop** — Your first loop!
- **`range()`** — How to tell Python how many times to repeat
- **Counting** — Making Python count automatically
- **Repeating messages** — Print the same thing many times easily!

> _BrightByte says: "This is where the magic happens! Once you learn loops, your programs become SO much more powerful!"_

---

## 🔄 What is a For Loop?

### The Basic Idea

A `for` loop tells Python: "Do this action for each number in a sequence."

Think of it like:
- Counting: "Say each number from 1 to 10"
- Repeating: "Print 'Hello' 5 times"
- Going through a list: "Do this for each item"

### The Basic Syntax

```python
for variable in range(number):
    # Code to repeat goes here
    print("This repeats!")
```

**Important parts:**
- `for` — The keyword that starts a loop
- `variable` — A name for the current number (usually `i`)
- `in range(number)` — How many times to repeat
- `:` — Don't forget the colon!
- Indentation — The code inside must be indented (4 spaces or 1 tab)

---

## 🔢 Using range()

### What is range()?

`range()` creates a sequence of numbers. It tells Python: "Count from this number to that number."

### Example 1: range(5)

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

**What happened?**
- `range(5)` creates numbers: 0, 1, 2, 3, 4 (5 numbers total, starting at 0)
- The loop runs 5 times
- Each time, `i` gets the next number
- We print `i` each time

### Example 2: range(1, 6)

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

**What happened?**
- `range(1, 6)` creates numbers from 1 to 5 (stops before 6)
- The loop runs 5 times
- Each time, `i` gets the next number starting from 1

**Key Point:** `range(start, stop)` goes from `start` to `stop-1`!

### Example 3: Counting to 10

```python
for i in range(1, 11):
    print(i)
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

**Why `range(1, 11)`?**
- We want to count from 1 to 10
- `range(1, 11)` gives us 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
- Remember: it stops BEFORE the second number!

---

## 📝 Printing Messages Multiple Times

### Example 1: Print "Hello" 5 Times

**The Old Way (Without Loop):**
```python
print("Hello")
print("Hello")
print("Hello")
print("Hello")
print("Hello")
```

**The New Way (With Loop):**
```python
for i in range(5):
    print("Hello")
```

**Output:**
```
Hello
Hello
Hello
Hello
Hello
```

**Magic!** 5 lines became 2 lines!

### Example 2: Print "Python is awesome!" 10 Times

```python
for i in range(10):
    print("Python is awesome!")
```

**Output:**
```
Python is awesome!
Python is awesome!
Python is awesome!
Python is awesome!
Python is awesome!
Python is awesome!
Python is awesome!
Python is awesome!
Python is awesome!
Python is awesome!
```

### Example 3: Print with the Counter

```python
for i in range(1, 6):
    print("Count:", i)
```

**Output:**
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

**What happened?**
- We used `i` (the counter) in our print statement
- Each time through the loop, `i` has a different value
- We can use `i` in calculations or messages!

---

## 🎯 Common Loop Patterns

### Pattern 1: Counting Up

```python
# Count from 1 to 10
for i in range(1, 11):
    print(i)
```

### Pattern 2: Counting from 0

```python
# Count from 0 to 9
for i in range(10):
    print(i)
```

### Pattern 3: Repeating a Message

```python
# Print message 5 times
for i in range(5):
    print("I love coding!")
```

### Pattern 4: Numbered Messages

```python
# Print numbered messages
for i in range(1, 6):
    print("Step", i, ": Do something awesome!")
```

**Output:**
```
Step 1 : Do something awesome!
Step 2 : Do something awesome!
Step 3 : Do something awesome!
Step 4 : Do something awesome!
Step 5 : Do something awesome!
```

---

## ⚠️ Common Mistakes to Avoid

### Mistake 1: Forgetting the Colon

**Wrong:**
```python
for i in range(5)  # Missing colon!
    print("Hello")
```

**Right:**
```python
for i in range(5):  # Colon is required!
    print("Hello")
```

### Mistake 2: Wrong Indentation

**Wrong:**
```python
for i in range(5):
print("Hello")  # Not indented!
```

**Right:**
```python
for i in range(5):
    print("Hello")  # Properly indented!
```

**Remember:** Everything inside the loop must be indented!

### Mistake 3: Wrong range() Numbers

**Wrong (if you want 1-10):**
```python
for i in range(1, 10):  # This gives 1-9, not 1-10!
    print(i)
```

**Right:**
```python
for i in range(1, 11):  # This gives 1-10!
    print(i)
```

**Remember:** `range(start, stop)` stops BEFORE `stop`!

---

## 🎮 Practice Time!

### Challenge 1: Count to 20

Write a loop that counts from 1 to 20.

```python
for i in range(1, 21):
    print(i)
```

### Challenge 2: Print Your Name 5 Times

Write a loop that prints your name 5 times.

```python
for i in range(5):
    print("Your Name")
```

### Challenge 3: Numbered List

Create a numbered list from 1 to 5.

```python
for i in range(1, 6):
    print(i, ". Item", i)
```

### Challenge 4: Counting Stars

Print 10 stars using a loop.

```python
for i in range(10):
    print("⭐")
```

### Challenge 5: Multiplication Table Preview

Print the 5 times table (5 x 1, 5 x 2, etc.)

```python
for i in range(1, 6):
    print("5 x", i, "=", 5 * i)
```

**Output:**
```
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
```

---

## 🔍 Understanding the Loop Variable

### What is `i`?

The variable `i` (or any name you choose) holds the current number in the sequence.

```python
for i in range(1, 6):
    print("Loop iteration:", i)
    print("The value of i is:", i)
    print("---")
```

**Output:**
```
Loop iteration: 1
The value of i is: 1
---
Loop iteration: 2
The value of i is: 2
---
Loop iteration: 3
The value of i is: 3
---
Loop iteration: 4
The value of i is: 4
---
Loop iteration: 5
The value of i is: 5
---
```

### Using `i` in Calculations

You can use `i` in math!

```python
for i in range(1, 6):
    print(i, "squared =", i * i)
```

**Output:**
```
1 squared = 1
2 squared = 2
3 squared = 9
4 squared = 16
5 squared = 25
```

### You Can Name It Anything!

`i` is just a convention. You can use any name:

```python
for number in range(1, 6):
    print(number)

for count in range(5):
    print("Hello")

for step in range(1, 11):
    print("Step", step)
```

---

## 📝 Key Takeaways

### The For Loop Syntax

```python
for variable in range(start, stop):
    # Code to repeat
    # Must be indented!
```

### Important Rules

1. **Always use a colon (`:`)** after `range()`
2. **Always indent** the code inside the loop (4 spaces or 1 tab)
3. **`range(start, stop)`** goes from `start` to `stop-1`
4. **`range(number)`** goes from 0 to `number-1`
5. **The loop variable** (`i`) can be used inside the loop

### Vocabulary Words

| Word          | Definition                                    | Example                    |
| ------------- | --------------------------------------------- | -------------------------- |
| **Loop**      | Code that repeats automatically               | "Use a for loop to count"  |
| **Iteration** | One time through the loop                     | "Each iteration prints i"  |
| **Range**     | A sequence of numbers                         | "range(1, 6) gives 1-5"    |
| **Variable**  | The name that holds the current number (`i`)  | "i is the loop variable"   |
| **Indent**    | Adding spaces at the start of a line          | "Indent code inside loop" |

---

## 🌟 Next Lesson Preview

**Week 3: Loop Challenges**

Next week, you'll tackle more challenging loops:

- **Counting by 2s, 5s, 10s** — Skip numbers!
- **Counting backwards** — From 10 down to 1
- **More complex patterns** — Combining loops with math

**Sneak peek:**

```python
# Count by 2s
for i in range(0, 11, 2):
    print(i)  # Prints: 0, 2, 4, 6, 8, 10

# Count backwards
for i in range(10, 0, -1):
    print(i)  # Prints: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

Get ready for more loop magic! ✨

---

## 🎉 Great Job, Loop Master!

You just learned your first loop!

**What you accomplished today:**

- ✅ Learned the `for` loop syntax
- ✅ Used `range()` to count numbers
- ✅ Printed messages multiple times
- ✅ Understood how loops work
- ✅ Avoided common mistakes

> _BrightByte says: "WOW! You just learned one of programming's most powerful tools! 🎉 With loops, you can make Python do things hundreds, thousands, or even millions of times—instantly! Remember how we talked about printing 'Hello' 100 times? Now you can do it with just 2 lines! You're becoming a real programmer! Keep practicing, and next week we'll learn even cooler loop tricks!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Count to 100** — Can you count from 1 to 100 using a loop?
2. **Name Repeater** — Print your name 20 times
3. **Number Squares** — Print numbers 1-10 and their squares (1², 2², etc.)
4. **Step Counter** — Create a "step-by-step" guide with 10 steps
5. **Star Counter** — Print stars with numbers: "⭐ 1", "⭐ 2", "⭐ 3"...

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: loops are powerful, but they take practice. Keep trying!_ 🔄

