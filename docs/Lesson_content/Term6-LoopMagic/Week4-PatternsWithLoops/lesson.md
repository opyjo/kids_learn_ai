---
title: "Patterns with Loops"
description: "Create visual patterns with loops - print stars, lines, and simple shapes"
difficulty: "beginner"
order_index: 4
course_slug: "term-6-loop-magic"
is_premium: false
requires_trinket: true
starter_code: |
  # Patterns with Loops
  # Create visual patterns!

  # Print 5 stars in a row
  for i in range(5):
      print("⭐", end="")
  print()  # New line

  # Print 3 rows of stars
  for row in range(3):
      for star in range(5):
          print("⭐", end="")
      print()  # New line after each row
class_activities: |
  ## 🎮 Class Activity: Pattern Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can print a row of 10 stars the fastest?
  3. Challenge 2: Who can create a 5x5 square of stars?
  4. Challenge 3: Who can create the most creative pattern?
  5. Share your patterns with the class!

  **Bonus:** Try creating a triangle pattern!
take_home_assignment: |
  ## 📚 Homework: My Pattern Collection

  **Assignment:** Create a Python program with at least 3 different patterns!

  **Requirements:**
  1. Create a row of stars (at least 10 stars)
  2. Create a square pattern (at least 5x5)
  3. Create a rectangle pattern (different width and height)
  4. Add comments explaining each pattern
  5. Make it creative and fun!
  6. Code must run without errors

  **Bonus Challenges:**
  - Create a triangle pattern
  - Use different characters (⭐, ★, ✨, etc.)
  - Create a border pattern

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses patterns to recognize images! When AI looks at a photo, it processes patterns of pixels (tiny dots). When AI generates art, it creates patterns of colors and shapes. Pattern recognition is one of AI's most important skills!

  You're learning to create patterns—the same skill AI uses to understand the world!
---

# Term 6, Lesson 4: Patterns with Loops 🎨

**Course:** Term 6: Loop Magic  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 6 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Print characters on the same line using `end=""`
- Create rows of stars and characters
- Create squares and rectangles with loops
- Use nested loops (loops inside loops)
- Create simple visual patterns

---

## 🤖 Welcome from BrightByte!

> _"This is SO exciting! 🎨 You've learned how to count with loops, but today we're going to use loops to create VISUAL PATTERNS! You'll print stars, create squares, and make your first ASCII art! This is where loops become art. Ready to create something beautiful?"_

### What's New This Week?

Last week you learned:
- Counting by steps (2s, 5s, 10s)
- Counting backwards
- Advanced `range()` techniques

This week you'll discover:
- **Printing on the same line** — Using `end=""`
- **Creating rows** — Lines of stars
- **Creating shapes** — Squares and rectangles
- **Nested loops** — Loops inside loops!

> _BrightByte says: "This is your first step toward creating ASCII art! You're going to love seeing your patterns come to life!"_

---

## 🌟 Printing on the Same Line

### The Problem: Each print() Starts a New Line

Normally, each `print()` statement starts on a new line:

```python
print("⭐")
print("⭐")
print("⭐")
```

**Output:**
```
⭐
⭐
⭐
```

But what if we want them on the SAME line?

### The Solution: `end=""`

Use `end=""` to tell Python: "Don't start a new line after this!"

```python
print("⭐", end="")
print("⭐", end="")
print("⭐", end="")
```

**Output:**
```
⭐⭐⭐
```

All three stars are on the same line!

### Example: Print 5 Stars in a Row

```python
for i in range(5):
    print("⭐", end="")
print()  # This starts a new line at the end
```

**Output:**
```
⭐⭐⭐⭐⭐
```

**What happened?**
- The loop printed 5 stars on the same line
- `print()` at the end started a new line (so next output is on a new line)

---

## 📏 Creating Rows

### Pattern 1: A Row of Stars

```python
# Print 10 stars in a row
for i in range(10):
    print("⭐", end="")
print()  # New line
```

**Output:**
```
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
```

### Pattern 2: A Row with Numbers

```python
# Print numbers 1-5 in a row
for i in range(1, 6):
    print(i, end=" ")
print()  # New line
```

**Output:**
```
1 2 3 4 5
```

### Pattern 3: A Row with Text

```python
# Print "Hello" 5 times in a row
for i in range(5):
    print("Hello", end=" ")
print()  # New line
```

**Output:**
```
Hello Hello Hello Hello Hello
```

---

## 🔲 Creating Squares

### What is a Nested Loop?

A **nested loop** is a loop inside another loop!

- **Outer loop** — Controls the rows
- **Inner loop** — Controls the columns

### Example: A 5x5 Square of Stars

```python
# Outer loop: 5 rows
for row in range(5):
    # Inner loop: 5 stars per row
    for star in range(5):
        print("⭐", end="")
    print()  # New line after each row
```

**Output:**
```
⭐⭐⭐⭐⭐
⭐⭐⭐⭐⭐
⭐⭐⭐⭐⭐
⭐⭐⭐⭐⭐
⭐⭐⭐⭐⭐
```

**How it works:**
1. Outer loop runs 5 times (5 rows)
2. Each time, inner loop runs 5 times (5 stars per row)
3. After inner loop finishes, `print()` starts a new line
4. Repeat for next row

### Example: A 3x3 Square

```python
for row in range(3):
    for star in range(3):
        print("⭐", end="")
    print()
```

**Output:**
```
⭐⭐⭐
⭐⭐⭐
⭐⭐⭐
```

### Example: A 10x10 Square

```python
for row in range(10):
    for star in range(10):
        print("⭐", end="")
    print()
```

**Output:** (10 rows of 10 stars each)

---

## 📐 Creating Rectangles

### Pattern: A Rectangle (Wider than Tall)

```python
# 5 rows, 10 stars per row
for row in range(5):
    for star in range(10):
        print("⭐", end="")
    print()
```

**Output:**
```
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
```

### Pattern: A Rectangle (Taller than Wide)

```python
# 10 rows, 5 stars per row
for row in range(10):
    for star in range(5):
        print("⭐", end="")
    print()
```

**Output:** (10 rows of 5 stars each)

---

## 🎨 More Pattern Ideas

### Pattern 1: Numbered Rows

```python
for row in range(1, 6):
    for star in range(row):
        print("⭐", end="")
    print()
```

**Output:**
```
⭐
⭐⭐
⭐⭐⭐
⭐⭐⭐⭐
⭐⭐⭐⭐⭐
```

### Pattern 2: Alternating Characters

```python
for row in range(5):
    for col in range(5):
        if col % 2 == 0:
            print("⭐", end="")
        else:
            print("★", end="")
    print()
```

**Output:**
```
⭐★⭐★⭐
⭐★⭐★⭐
⭐★⭐★⭐
⭐★⭐★⭐
⭐★⭐★⭐
```

### Pattern 3: Border Pattern

```python
# 5x5 square with border
for row in range(5):
    for col in range(5):
        if row == 0 or row == 4 or col == 0 or col == 4:
            print("⭐", end="")
        else:
            print(" ", end="")
    print()
```

**Output:**
```
⭐⭐⭐⭐⭐
⭐   ⭐
⭐   ⭐
⭐   ⭐
⭐⭐⭐⭐⭐
```

---

## 🎮 Practice Challenges!

### Challenge 1: Row of 10 Stars

```python
for i in range(10):
    print("⭐", end="")
print()
```

### Challenge 2: 5x5 Square

```python
for row in range(5):
    for star in range(5):
        print("⭐", end="")
    print()
```

### Challenge 3: 3x8 Rectangle

```python
for row in range(3):
    for star in range(8):
        print("⭐", end="")
    print()
```

### Challenge 4: Numbered Pattern

```python
for row in range(1, 6):
    for num in range(row):
        print(row, end="")
    print()
```

**Output:**
```
1
22
333
4444
55555
```

### Challenge 5: Create Your Own!

Try creating your own pattern! Be creative!

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting `end=""`

**Wrong:**
```python
for i in range(5):
    print("⭐")  # Each star on new line!
```

**Right:**
```python
for i in range(5):
    print("⭐", end="")  # All stars on same line!
print()
```

### Mistake 2: Forgetting `print()` After Row

**Wrong:**
```python
for row in range(5):
    for star in range(5):
        print("⭐", end="")
    # Missing print() - all rows will be on one line!
```

**Right:**
```python
for row in range(5):
    for star in range(5):
        print("⭐", end="")
    print()  # Start new line after each row!
```

### Mistake 3: Wrong Indentation

**Wrong:**
```python
for row in range(5):
for star in range(5):  # Not indented!
    print("⭐", end="")
```

**Right:**
```python
for row in range(5):
    for star in range(5):  # Properly indented!
        print("⭐", end="")
    print()
```

---

## 📝 Key Takeaways

### Printing on Same Line

```python
print("⭐", end="")  # No new line after this
print()  # Start a new line
```

### Nested Loops

```python
for row in range(rows):
    for col in range(cols):
        print("⭐", end="")
    print()  # New line after each row
```

### Pattern Checklist

1. **Outer loop** — How many rows?
2. **Inner loop** — How many items per row?
3. **`end=""`** — Keep items on same line
4. **`print()`** — New line after each row

### Vocabulary Words

| Word           | Definition                                    | Example                    |
| -------------- | --------------------------------------------- | -------------------------- |
| **Nested Loop** | A loop inside another loop                    | "Outer loop for rows, inner for columns" |
| **Row**        | A horizontal line                             | "5 rows of stars"          |
| **Column**     | A vertical line                               | "5 columns of stars"        |
| **Pattern**    | A repeating visual design                     | "A square pattern"          |

---

## 🌟 Next Lesson Preview

**Week 5: Creative Patterns**

Next week, you'll create even more amazing patterns:

- **Triangles** — Growing and shrinking patterns
- **Diamonds** — Symmetrical shapes
- **More complex designs** — Your creativity unleashed!

**Sneak peek:**

```python
# Growing triangle
for row in range(1, 6):
    for star in range(row):
        print("⭐", end="")
    print()
```

Get ready for more pattern magic! ✨

---

## 🎉 Great Job, Pattern Creator!

You just learned to create visual patterns with loops!

**What you accomplished today:**

- ✅ Learned to print on the same line with `end=""`
- ✅ Created rows of stars
- ✅ Created squares with nested loops
- ✅ Created rectangles
- ✅ Started making ASCII art!

> _BrightByte says: "WOW! You're creating ART with code! 🎨 This is exactly how programmers create visual patterns. Next week, we'll make even cooler patterns like triangles and diamonds. You're becoming a real code artist!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Different Characters:** Use ★, ✨, 🔥, or any character you like
2. **Different Sizes:** Create squares of different sizes (3x3, 7x7, 10x10)
3. **Number Patterns:** Create patterns with numbers instead of stars
4. **Text Patterns:** Create patterns with words or letters
5. **Your Own Design:** Create a pattern that's uniquely yours!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: patterns take practice, but they're so much fun to create!_ 🎨

