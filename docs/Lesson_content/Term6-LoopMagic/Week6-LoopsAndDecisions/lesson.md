---
title: "Loops + Decisions"
description: "Combine loops with if statements - create smart patterns that change based on conditions"
difficulty: "beginner"
order_index: 6
course_slug: "term-6-loop-magic"
is_premium: false
requires_trinket: true
starter_code: |
  # Loops + Decisions
  # Combine loops with if statements!

  # Print even numbers only
  for i in range(1, 11):
      if i % 2 == 0:
          print(i)

  # Print stars for even, numbers for odd
  for i in range(1, 11):
      if i % 2 == 0:
          print("⭐", end="")
      else:
          print(i, end="")
  print()
class_activities: |
  ## 🎮 Class Activity: Smart Pattern Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can print only even numbers from 1-20?
  3. Challenge 2: Who can create a pattern that alternates stars and numbers?
  4. Challenge 3: Who can create the most creative conditional pattern?
  5. Share your patterns with the class!

  **Bonus:** Try creating a pattern that changes based on the row number!
take_home_assignment: |
  ## 📚 Homework: Smart Pattern Program

  **Assignment:** Create a Python program that combines loops with if statements!

  **Requirements:**
  1. Use a loop to go through numbers 1-20
  2. Use if/else to print different things for even vs odd numbers
  3. Create at least 2 different conditional patterns
  4. Add comments explaining your logic
  5. Make it creative and fun!
  6. Code must run without errors

  **Bonus Challenges:**
  - Create a pattern that changes every 3 numbers
  - Create a pattern based on multiples of 5
  - Create a pattern that combines conditions (and/or)

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses loops with decisions ALL THE TIME! When AI processes an image, it loops through every pixel and makes decisions: "Is this an edge?" "Is this a face?" "Is this important?" Every AI system combines loops (repetition) with decisions (if statements) to understand and respond to the world!

  You're learning the same combination that powers every AI!
---

# Term 6, Lesson 6: Loops + Decisions 🧠

**Course:** Term 6: Loop Magic  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 6 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Combine `for` loops with `if` statements
- Make decisions inside loops
- Create conditional patterns
- Filter items in loops
- Build smart, dynamic patterns

---

## 🤖 Welcome from BrightByte!

> _"This is AMAZING! 🧠 You've learned loops AND decisions separately. But today, we're going to COMBINE them! This is where programming gets REALLY powerful. You'll create patterns that change based on conditions, filter numbers, and make smart decisions automatically. This is exactly how AI works—loops + decisions! Ready?"_

### What's New This Week?

Last week you learned:
- Creating triangles and diamonds
- Growing and shrinking patterns
- Complex pattern design

This week you'll discover:
- **Loops + if statements** — Making decisions in loops
- **Conditional patterns** — Patterns that change
- **Filtering** — Only printing certain items
- **Smart patterns** — Dynamic, intelligent designs

> _BrightByte says: "This combination is what makes programs smart! You're learning real programming power!"_

---

## 🔄 Loops + If Statements

### The Basic Idea

You can put `if` statements INSIDE loops! This lets you make decisions for each item in the loop.

### Example 1: Print Only Even Numbers

```python
for i in range(1, 11):
    if i % 2 == 0:
        print(i)
```

**Output:**
```
2
4
6
8
10
```

**How it works:**
- Loop goes through numbers 1-10
- For each number, check: is it even? (`i % 2 == 0`)
- If yes, print it
- If no, skip it

### Example 2: Print Only Odd Numbers

```python
for i in range(1, 11):
    if i % 2 == 1:  # or i % 2 != 0
        print(i)
```

**Output:**
```
1
3
5
7
9
```

### Example 3: Print Different Things for Even/Odd

```python
for i in range(1, 11):
    if i % 2 == 0:
        print(i, "is even")
    else:
        print(i, "is odd")
```

**Output:**
```
1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even
7 is odd
8 is even
9 is odd
10 is even
```

---

## 🎨 Conditional Patterns

### Pattern 1: Alternating Stars and Numbers

```python
for i in range(1, 11):
    if i % 2 == 0:
        print("⭐", end="")
    else:
        print(i, end="")
print()
```

**Output:**
```
1⭐3⭐5⭐7⭐9⭐
```

### Pattern 2: Stars for Multiples of 3

```python
for i in range(1, 21):
    if i % 3 == 0:
        print("⭐", end="")
    else:
        print(i, end=" ")
print()
```

**Output:**
```
1 2 ⭐ 4 5 ⭐ 7 8 ⭐ 10 11 ⭐ 13 14 ⭐ 16 17 ⭐ 19 20 ⭐
```

### Pattern 3: Different Characters Based on Condition

```python
for i in range(1, 11):
    if i % 2 == 0:
        print("⭐", end="")
    else:
        print("★", end="")
print()
```

**Output:**
```
★⭐★⭐★⭐★⭐★⭐
```

---

## 🔍 Filtering in Loops

### Filter: Only Print Numbers Divisible by 5

```python
for i in range(1, 51):
    if i % 5 == 0:
        print(i)
```

**Output:**
```
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

### Filter: Only Print Numbers Greater Than 20

```python
for i in range(1, 31):
    if i > 20:
        print(i)
```

**Output:**
```
21
22
23
24
25
26
27
28
29
30
```

### Filter: Only Print Numbers Between 10 and 20

```python
for i in range(1, 31):
    if i >= 10 and i <= 20:
        print(i)
```

**Output:**
```
10
11
12
13
14
15
16
17
18
19
20
```

---

## 🎯 More Complex Examples

### Example 1: Pattern That Changes Every Row

```python
for row in range(1, 6):
    for col in range(1, 6):
        if row % 2 == 0:
            print("⭐", end="")
        else:
            print("★", end="")
    print()
```

**Output:**
```
★★★★★
⭐⭐⭐⭐⭐
★★★★★
⭐⭐⭐⭐⭐
★★★★★
```

### Example 2: Checkerboard Pattern

```python
for row in range(5):
    for col in range(5):
        if (row + col) % 2 == 0:
            print("⭐", end="")
        else:
            print(" ", end="")
    print()
```

**Output:**
```
⭐ ⭐ ⭐
 ⭐ ⭐ 
⭐ ⭐ ⭐
 ⭐ ⭐ 
⭐ ⭐ ⭐
```

### Example 3: Conditional Triangle

```python
for row in range(1, 6):
    for col in range(row):
        if col % 2 == 0:
            print("⭐", end="")
        else:
            print("★", end="")
    print()
```

**Output:**
```
⭐
⭐★
⭐★⭐
⭐★⭐★
⭐★⭐★⭐
```

---

## 🎮 Practice Challenges!

### Challenge 1: Print Even Numbers 1-20

```python
for i in range(1, 21):
    if i % 2 == 0:
        print(i)
```

### Challenge 2: Alternating Pattern

```python
for i in range(1, 11):
    if i % 2 == 0:
        print("⭐", end="")
    else:
        print("★", end="")
print()
```

### Challenge 3: Multiples of 5

```python
for i in range(1, 51):
    if i % 5 == 0:
        print(i)
```

### Challenge 4: Conditional Square

```python
for row in range(5):
    for col in range(5):
        if row == col:
            print("⭐", end="")
        else:
            print(" ", end="")
    print()
```

**Output:** (Diagonal line of stars)

### Challenge 5: Create Your Own!

Create a pattern that uses conditions creatively!

---

## 💡 Tips for Loops + Decisions

### Tip 1: Start Simple

Begin with a simple condition, then add complexity.

### Tip 2: Test Your Conditions

Make sure your condition works correctly before adding it to a loop.

### Tip 3: Use Comments

Explain what your condition checks.

### Tip 4: Combine Conditions

Use `and` and `or` for more complex conditions.

### Tip 5: Experiment!

Try different conditions and see what happens!

---

## 📝 Key Takeaways

### Combining Loops and If Statements

```python
for i in range(start, stop):
    if condition:
        # Do something
    else:
        # Do something else
```

### Common Patterns

| What You Want              | Code Pattern                        |
| ------------------------- | ----------------------------------- |
| Only even numbers         | `if i % 2 == 0:`                    |
| Only odd numbers          | `if i % 2 == 1:` or `if i % 2 != 0:` |
| Multiples of 5            | `if i % 5 == 0:`                    |
| Greater than number       | `if i > number:`                    |
| Between two numbers       | `if i >= start and i <= stop:`      |

### Important Rules

1. **Indentation matters** — `if` inside loop must be indented
2. **Test conditions** — Make sure your condition works
3. **Use else** — Handle both true and false cases
4. **Combine carefully** — Make sure logic is correct

---

## 🌟 Next Lesson Preview

**Week 7: Project - ASCII Art Generator**

Next week, you'll create your term project:

- **ASCII Art Generator** — A program that creates patterns
- **Multiple patterns** — User can choose different designs
- **Customization** — User can set size, character, etc.
- **Your masterpiece** — Show off everything you've learned!

**Sneak peek:**

```python
# User chooses pattern
pattern = input("Choose pattern (1-3): ")

if pattern == "1":
    # Create triangle
elif pattern == "2":
    # Create square
else:
    # Create diamond
```

Get ready for your big project! 🎨

---

## 🎉 Great Job, Smart Programmer!

You just combined loops with decisions!

**What you accomplished today:**

- ✅ Combined `for` loops with `if` statements
- ✅ Created conditional patterns
- ✅ Filtered items in loops
- ✅ Made smart, dynamic patterns
- ✅ Learned how AI combines loops and decisions

> _BrightByte says: "WOW! You just learned one of programming's most powerful combinations! 🧠 Loops + decisions = smart programs! This is exactly how AI works—repeating actions and making decisions. Next week, you'll use ALL of this to create your ASCII Art Generator project! You're going to build something AMAZING!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Number Filters:** Print only numbers divisible by 3, 4, 7, etc.
2. **Range Filters:** Print only numbers in certain ranges
3. **Pattern Variations:** Create patterns that change based on conditions
4. **Combined Conditions:** Use `and` and `or` for complex conditions
5. **Your Own Logic:** Create conditions that make sense to you!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: combining loops and decisions makes your programs smart!_ 🧠

