---
title: "Loops + Lists"
description: "Combine loops with lists - go through every item in a list automatically!"
difficulty: "beginner"
order_index: 3
course_slug: "term-8-ai-explorer"
is_premium: false
requires_trinket: true
starter_code: |
  # Loops + Lists
  # Go through every item in a list!

  fruits = ["apple", "banana", "orange"]

  # Loop through each fruit
  for fruit in fruits:
      print(fruit)

  # Loop with index
  for i in range(len(fruits)):
      print(f"Item {i}: {fruits[i]}")
class_activities: |
  ## 🎮 Class Activity: Loop Through Lists Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can print every item in a list?
  3. Challenge 2: Who can loop through a list and count items?
  4. Challenge 3: Who can create the most creative loop + list program?
  5. Share your code with the class!

  **Bonus:** Try looping through a list and doing something with each item!
take_home_assignment: |
  ## 📚 Homework: Loops + Lists Program

  **Assignment:** Create a Python program that combines loops with lists!

  **Requirements:**
  1. Create a list with at least 5 items
  2. Use a for loop to go through every item in the list
  3. Print each item as you loop through
  4. Add comments explaining your code
  5. Make it creative and fun!
  6. Code must run without errors

  **Bonus Challenges:**
  - Loop through and count items
  - Loop through and do something with each item
  - Create multiple lists and loop through them

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses loops with lists ALL THE TIME! When AI processes a sentence, it loops through each word in a list. When AI recognizes faces, it loops through each face in a list. When AI recommends videos, it loops through a list of videos. This combination—loops + lists—is how AI processes information!

  You're learning the same pattern that powers every AI system!
---

# Term 8, Lesson 3: Loops + Lists 🔄📋

**Course:** Term 8: AI Explorer  
**Duration:** 60 minutes  
**Term:** 8 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Loop through every item in a list
- Use `for` loops with lists
- Process each item in a list
- Combine loops and lists powerfully
- Understand how AI processes lists

---

## 🤖 Welcome from BrightByte!

> _"YES! This is AMAZING! 🎉 You've learned loops. You've learned lists. But when you put them TOGETHER, magic happens! Today, you're going to learn to loop through every item in a list automatically. This is how you process lots of data—and it's exactly how AI works! Ready to unlock this superpower?"_

### What's New This Week?

Last week you learned:
- Accessing items in lists
- Adding items to lists
- Finding list length

This week you'll discover:
- **Looping through lists** — Process every item automatically
- **For loops with lists** — `for item in list:`
- **Processing data** — Do something with each item
- **Powerful combinations** — Loops make lists incredibly powerful

> _BrightByte says: "This combination is what makes programming powerful! You'll use this in your quiz game!"_

---

## 🔄 Looping Through Lists

### The Basic Idea

You can use a `for` loop to go through every item in a list automatically!

### Example 1: Print Every Item

```python
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)
```

**Output:**
```
apple
banana
orange
```

**How it works:**
- The loop goes through each item in `fruits`
- Each time, `fruit` gets the next item
- We print `fruit` each time

### Example 2: Loop with Message

```python
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print("I like", fruit)
```

**Output:**
```
I like apple
I like banana
I like orange
```

### Example 3: Loop with Numbers

```python
numbers = [1, 2, 3, 4, 5]

for number in numbers:
    print(number, "squared =", number * number)
```

**Output:**
```
1 squared = 1
2 squared = 2
3 squared = 9
4 squared = 4
5 squared = 25
```

---

## 🎯 More Loop + List Examples

### Example 1: Count Items

```python
fruits = ["apple", "banana", "orange"]
count = 0

for fruit in fruits:
    count = count + 1
    print(f"{count}. {fruit}")

print(f"Total: {count} fruits")
```

**Output:**
```
1. apple
2. banana
3. orange
Total: 3 fruits
```

### Example 2: Process Each Item

```python
scores = [100, 150, 200, 180]
total = 0

for score in scores:
    total = total + score
    print("Score:", score)

print("Total score:", total)
```

**Output:**
```
Score: 100
Score: 150
Score: 200
Score: 180
Total score: 630
```

### Example 3: Loop with Conditions

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in numbers:
    if number % 2 == 0:
        print(number, "is even")
    else:
        print(number, "is odd")
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

## 🎮 Practice Challenges!

### Challenge 1: Print Every Item

```python
colors = ["red", "blue", "green", "yellow"]
for color in colors:
    print(color)
```

### Challenge 2: Loop with Message

```python
games = ["Minecraft", "Roblox", "Fortnite"]
for game in games:
    print("I play", game)
```

### Challenge 3: Count and Process

```python
numbers = [10, 20, 30, 40]
total = 0
for number in numbers:
    total = total + number
print("Total:", total)
```

### Challenge 4: Create Your Own!

Create a list and loop through it doing something creative!

---

## 📝 Key Takeaways

### Loop Through List Syntax

```python
for item in list_name:
    # Do something with item
```

### Important Points

1. **`item` is a variable** — It gets each value from the list
2. **Automatic iteration** — Loop goes through every item
3. **Process each item** — Do something with each one
4. **Powerful combination** — Loops + lists = process lots of data

### When to Use

| Use loop + list when...        | Use regular loop when...      |
| ------------------------------- | ------------------------------ |
| You have a list of items        | You want to count numbers      |
| You want to process each item    | You want to repeat actions     |
| `for item in list:`             | `for i in range(10):`          |

### Vocabulary Words

| Word            | Definition                                    | Example                    |
| --------------- | --------------------------------------------- | -------------------------- |
| **Iterate**     | To go through each item                       | "Loop iterates through list" |
| **Process**     | To do something with data                     | "Process each item"         |
| **Traverse**    | To go through all items                        | "Traverse the list"         |

---

## 🌟 Next Lesson Preview

**Week 4: AI Deep Dive**

Next week, you'll explore AI concepts:

- **How AI uses data** — Lists of information
- **Pattern recognition** — How AI finds patterns
- **Data processing** — How AI processes lots of data

**Sneak peek:**

```python
# AI processes data like this:
data = [item1, item2, item3, ...]
for item in data:
    # AI analyzes each item
    # Finds patterns
    # Makes decisions
```

Get ready to explore AI! 🤖

---

## 🎉 Great Job, Loop + List Master!

You just combined loops with lists!

**What you accomplished today:**

- ✅ Learned to loop through lists
- ✅ Used `for` loops with lists
- ✅ Processed each item in lists
- ✅ Combined loops and lists powerfully
- ✅ Understood how AI processes lists

> _BrightByte says: "WOW! You just learned one of programming's most powerful combinations! 🎉 Loops + lists = process lots of data automatically. This is exactly how AI works—looping through lists of information to understand and make decisions. You're ready for your quiz game project!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Different Lists:** Loop through different types of lists
2. **Process Items:** Do something with each item (math, messages, etc.)
3. **Count and Track:** Count items, sum numbers, track data
4. **Conditions:** Use if statements inside loops
5. **Your Own Ideas:** Create loops + lists for your own purposes!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: loops + lists = process lots of data automatically!_ 🔄📋

