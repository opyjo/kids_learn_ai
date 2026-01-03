---
title: "Loop Challenges"
description: "Master counting by 2s, 5s, and backwards - advanced range() techniques"
difficulty: "beginner"
order_index: 3
course_slug: "term-6-loop-magic"
is_premium: false
requires_trinket: true
starter_code: |
  # Loop Challenges
  # Count by 2s, 5s, and backwards!

  # Count by 2s from 0 to 10
  for i in range(0, 11, 2):
      print(i)

  # Count by 5s from 0 to 50
  for i in range(0, 51, 5):
      print(i)

  # Count backwards from 10 to 1
  for i in range(10, 0, -1):
      print(i)
class_activities: |
  ## 🎮 Class Activity: Loop Challenge Race!

  1. Partner up with a classmate
  2. Challenge 1: Who can count by 3s from 0 to 30 the fastest?
  3. Challenge 2: Who can count backwards from 20 to 1?
  4. Challenge 3: Who can count by 10s from 0 to 100?
  5. Share your code and see who did it the most creatively!

  **Bonus:** Try counting by 7s from 0 to 70!
take_home_assignment: |
  ## 📚 Homework: Loop Master Challenge

  **Assignment:** Create a Python program that demonstrates advanced loop skills!

  **Requirements:**
  1. Count by 2s from 0 to 20
  2. Count by 5s from 0 to 50
  3. Count backwards from 15 to 1
  4. Count by 10s from 0 to 100
  5. Add comments explaining each loop
  6. Make it creative and fun!
  7. Code must run without errors

  **Bonus Challenges:**
  - Count by 3s from 0 to 30
  - Count backwards by 2s from 20 to 0
  - Create your own counting pattern!

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses advanced loops to process data efficiently! When analyzing a video, AI might skip frames (like counting by 2s) to process faster. When training, AI often counts backwards through data. When organizing information, AI groups things by steps (like counting by 5s or 10s).

  You're learning the same loop techniques that make AI fast and efficient!
---

# Term 6, Lesson 3: Loop Challenges 🔄

**Course:** Term 6: Loop Magic  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 6 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Count by 2s, 5s, 10s, and any number using `range()`
- Count backwards using negative steps
- Use the third parameter in `range(start, stop, step)`
- Create more complex counting patterns
- Solve loop challenges creatively

---

## 🤖 Welcome from BrightByte!

> _"Awesome work last week! You learned the basics of loops. But guess what? Loops can do SO much more! Today, we're going to learn how to count by 2s, by 5s, backwards, and even by any number you want! This is where loops get REALLY powerful. Ready for some challenges?"_

### What's New This Week?

Last week you learned:
- Basic `for` loops
- `range(start, stop)` for counting
- Printing messages multiple times

This week you'll discover:
- **Counting by steps** — Skip numbers!
- **Counting backwards** — Go in reverse!
- **The third parameter** — `range(start, stop, step)`
- **More complex patterns** — Count by any number!

> _BrightByte says: "These techniques make loops even more powerful! You'll be able to create amazing patterns!"_

---

## 🔢 Counting by Steps

### The Third Parameter: `step`

So far, you've used `range(start, stop)`. But `range()` has a third parameter: `step`!

```python
range(start, stop, step)
```

- `start` — Where to begin
- `stop` — Where to end (not included)
- `step` — How much to count by each time

### Example 1: Count by 2s

```python
for i in range(0, 11, 2):
    print(i)
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

**What happened?**
- Started at 0
- Added 2 each time: 0, 2, 4, 6, 8, 10
- Stopped before 11

### Example 2: Count by 5s

```python
for i in range(0, 51, 5):
    print(i)
```

**Output:**
```
0
5
10
15
20
25
30
35
40
45
50
```

**What happened?**
- Started at 0
- Added 5 each time: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
- Stopped before 51

### Example 3: Count by 10s

```python
for i in range(0, 101, 10):
    print(i)
```

**Output:**
```
0
10
20
30
40
50
60
70
80
90
100
```

**Perfect for counting by tens!**

---

## ⬇️ Counting Backwards

### Using Negative Steps

To count backwards, use a **negative step** (like `-1`).

### Example 1: Count Backwards from 10 to 1

```python
for i in range(10, 0, -1):
    print(i)
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

**What happened?**
- Started at 10
- Subtracted 1 each time: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
- Stopped before 0

**Important:** When counting backwards, the `start` must be bigger than `stop`!

### Example 2: Countdown from 20

```python
for i in range(20, 0, -1):
    print(i)
```

**Output:**
```
20
19
18
17
16
15
14
13
12
11
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

**Perfect for countdowns!**

### Example 3: Count Backwards by 2s

```python
for i in range(20, 0, -2):
    print(i)
```

**Output:**
```
20
18
16
14
12
10
8
6
4
2
```

**Counting backwards by 2s!**

---

## 🎯 More Counting Patterns

### Pattern 1: Count by 3s

```python
for i in range(0, 31, 3):
    print(i)
```

**Output:**
```
0
3
6
9
12
15
18
21
24
27
30
```

### Pattern 2: Count by 7s

```python
for i in range(0, 71, 7):
    print(i)
```

**Output:**
```
0
7
14
21
28
35
42
49
56
63
70
```

### Pattern 3: Even Numbers Only

```python
# Count even numbers from 2 to 20
for i in range(2, 21, 2):
    print(i)
```

**Output:**
```
2
4
6
8
10
12
14
16
18
20
```

### Pattern 4: Odd Numbers Only

```python
# Count odd numbers from 1 to 19
for i in range(1, 20, 2):
    print(i)
```

**Output:**
```
1
3
5
7
9
11
13
15
17
19
```

---

## 🎮 Practice Challenges!

### Challenge 1: Count by 2s to 20

```python
for i in range(0, 21, 2):
    print(i)
```

### Challenge 2: Count by 5s to 50

```python
for i in range(0, 51, 5):
    print(i)
```

### Challenge 3: Countdown from 10

```python
for i in range(10, 0, -1):
    print(i)
```

### Challenge 4: Count by 10s to 100

```python
for i in range(0, 101, 10):
    print(i)
```

### Challenge 5: Count Backwards by 5s

```python
for i in range(50, 0, -5):
    print(i)
```

**Output:**
```
50
45
40
35
30
25
20
15
10
5
```

### Challenge 6: Create Your Own Pattern!

Try counting by 4s, 6s, or any number you want!

```python
# Count by 4s
for i in range(0, 41, 4):
    print(i)
```

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting the Step Parameter

**Wrong:**
```python
for i in range(0, 11):  # This counts by 1s, not 2s!
    print(i)
```

**Right:**
```python
for i in range(0, 11, 2):  # Now it counts by 2s!
    print(i)
```

### Mistake 2: Wrong Order for Backwards

**Wrong:**
```python
for i in range(0, 10, -1):  # Start must be bigger than stop!
    print(i)  # This won't print anything!
```

**Right:**
```python
for i in range(10, 0, -1):  # Start at 10, go down to 1
    print(i)
```

### Mistake 3: Wrong Stop Number

**Wrong (if you want 0-20 by 2s):**
```python
for i in range(0, 20, 2):  # This stops at 18!
    print(i)
```

**Right:**
```python
for i in range(0, 21, 2):  # This goes to 20!
    print(i)
```

---

## 📝 Key Takeaways

### The Full range() Syntax

```python
range(start, stop, step)
```

- `start` — First number (included)
- `stop` — Last number (NOT included)
- `step` — How much to add/subtract each time

### Examples

| What You Want              | Code                        | Result                    |
| ------------------------- | --------------------------- | ------------------------- |
| Count 1-10                | `range(1, 11)`              | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 |
| Count by 2s, 0-20         | `range(0, 21, 2)`           | 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 |
| Count by 5s, 0-50         | `range(0, 51, 5)`           | 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 |
| Countdown 10 to 1          | `range(10, 0, -1)`          | 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 |
| Count backwards by 2s      | `range(20, 0, -2)`          | 20, 18, 16, 14, 12, 10, 8, 6, 4, 2 |

### Important Rules

1. **For counting up:** `step` is positive (like 2, 5, 10)
2. **For counting down:** `step` is negative (like -1, -2, -5)
3. **When counting down:** `start` must be bigger than `stop`
4. **The `stop` number is never included** — always go one past what you want

---

## 🌟 Next Lesson Preview

**Week 4: Patterns with Loops**

Next week, you'll use loops to create visual patterns:

- **Printing stars** — Create rows of stars
- **Simple shapes** — Triangles, squares, rectangles
- **ASCII art basics** — Your first art with code!

**Sneak peek:**

```python
# Print 5 stars in a row
for i in range(5):
    print("⭐", end="")
print()  # New line

# Print 5 rows of stars
for row in range(5):
    for star in range(5):
        print("⭐", end="")
    print()
```

Get ready to create art with loops! 🎨

---

## 🎉 Great Job, Loop Challenger!

You just mastered advanced loop techniques!

**What you accomplished today:**

- ✅ Learned to count by 2s, 5s, 10s, and any number
- ✅ Learned to count backwards
- ✅ Used the third parameter in `range()`
- ✅ Created complex counting patterns
- ✅ Solved loop challenges

> _BrightByte says: "WOW! You're becoming a loop master! 🎉 Now you can count in any direction, by any step. This is exactly how professional programmers use loops—to process data efficiently and create patterns. Next week, we're going to use these skills to create VISUAL PATTERNS and ASCII art! You're going to love it!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Times Tables:** Print the 7 times table using a loop
2. **Countdown Timer:** Create a countdown from 60 to 0
3. **Skip Counting:** Count by 3s, 4s, 6s, 8s, 9s
4. **Backwards Patterns:** Count backwards by different steps
5. **Number Sequences:** Create your own counting patterns!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: practice makes perfect with loops!_ 🔄

