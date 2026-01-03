---
title: "Lists Introduction"
description: "Learn your first data structure - lists! Store multiple things in one variable"
difficulty: "beginner"
order_index: 1
course_slug: "term-8-ai-explorer"
is_premium: false
requires_trinket: true
starter_code: |
  # Lists Introduction
  # Store multiple things in one variable!

  # Create a list of fruits
  fruits = ["apple", "banana", "orange"]
  print("My fruits:", fruits)

  # Create a list of numbers
  numbers = [1, 2, 3, 4, 5]
  print("My numbers:", numbers)

  # Create a list of mixed items
  mixed = ["hello", 42, True]
  print("Mixed list:", mixed)
class_activities: |
  ## 🎮 Class Activity: List Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can create a list with 5 of their favorite things?
  3. Challenge 2: Who can create a list of numbers from 1 to 10?
  4. Challenge 3: Who can create the most creative list?
  5. Share your lists with the class!

  **Bonus:** Try creating a list of your favorite games or foods!
take_home_assignment: |
  ## 📚 Homework: My First Lists Program

  **Assignment:** Create a Python program that uses lists!

  **Requirements:**
  1. Create at least 3 different lists
  2. One list should have at least 5 items
  3. Print each list
  4. Add comments explaining what each list contains
  5. Make it creative and fun!
  6. Code must run without errors

  **Bonus Challenges:**
  - Create a list of your favorite things
  - Create a list of numbers
  - Create a list with mixed types (words and numbers)

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses lists ALL THE TIME! When AI processes a sentence, it stores each word in a list. When AI recognizes faces in a photo, it stores each face in a list. When AI recommends videos, it uses lists of videos. Lists are how AI organizes and processes information!

  You're learning the same data structure that AI uses to understand the world!
---

# Term 8, Lesson 1: Lists Introduction 📋

**Course:** Term 8: AI Explorer  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 8 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Understand what a list is
- Create lists in Python
- Store multiple items in one variable
- Print lists
- Recognize when to use lists

---

## 🤖 Welcome from BrightByte!

> _"WOW! Welcome to Term 8—the GRAND FINALE! 🎉 You've learned SO much: variables, math, decisions, loops, games... and now you're about to learn something AMAZING—LISTS! Lists let you store MULTIPLE things in ONE variable. It's like having a magic box that can hold many items! This is your first data structure, and it's going to unlock so many possibilities. Ready to become a data master?"_

### What's Special About Term 8?

In previous terms, you learned:
- Variables (store one thing)
- Loops (repeat actions)
- Decisions (make choices)
- Games (interactive programs)

Now in Term 8, you'll discover:
- **Lists** — Store multiple things in one variable
- **Data structures** — Organize information
- **AI concepts** — How AI uses data
- **Final projects** — Quiz game and AI presentation
- **GRADUATION** — Complete Year 1!

> _BrightByte says: "This is the grand finale! You're about to learn lists—the same data structure AI uses to process information. By the end of this term, you'll graduate from Year 1! You've come so far!"_

---

## 📋 What is a List?

### The Basic Idea

A **list** is a way to store multiple items in one variable. Think of it like:
- A shopping list — Multiple items on one piece of paper
- A playlist — Multiple songs in one collection
- A backpack — Multiple items in one bag
- A team roster — Multiple players on one team

### Why Lists Are Powerful

**Without lists:**
```python
fruit1 = "apple"
fruit2 = "banana"
fruit3 = "orange"
fruit4 = "grape"
fruit5 = "strawberry"
# ... 95 more variables! 😱
```

**With lists:**
```python
fruits = ["apple", "banana", "orange", "grape", "strawberry"]
# All 100 fruits in ONE variable! ✨
```

**Lists make it easy to work with many items!**

---

## 🎯 Creating Lists

### Basic List Syntax

```python
list_name = [item1, item2, item3]
```

**Important parts:**
- Square brackets `[]` — Lists use square brackets
- Commas `,` — Separate items with commas
- Items — Can be words, numbers, or other things

### Example 1: List of Words

```python
fruits = ["apple", "banana", "orange"]
print(fruits)
```

**Output:**
```
['apple', 'banana', 'orange']
```

### Example 2: List of Numbers

```python
numbers = [1, 2, 3, 4, 5]
print(numbers)
```

**Output:**
```
[1, 2, 3, 4, 5]
```

### Example 3: List of Mixed Items

```python
mixed = ["hello", 42, True, "world"]
print(mixed)
```

**Output:**
```
['hello', 42, True, 'world']
```

**Lists can contain different types of items!**

---

## 🎨 More List Examples

### Example 1: Favorite Foods

```python
favorite_foods = ["pizza", "ice cream", "chocolate", "pasta"]
print("My favorite foods:", favorite_foods)
```

### Example 2: Game Scores

```python
scores = [100, 250, 180, 320, 150]
print("Game scores:", scores)
```

### Example 3: Days of the Week

```python
days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
print("Weekdays:", days)
```

### Example 4: Empty List

```python
my_list = []
print("Empty list:", my_list)
```

**Output:**
```
Empty list: []
```

**You can start with an empty list and add items later!**

---

## 🎮 Practice Challenges!

### Challenge 1: Create a List of Your Favorite Things

```python
favorites = ["your", "favorite", "things", "here"]
print(favorites)
```

### Challenge 2: Create a List of Numbers

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers)
```

### Challenge 3: Create a List of Colors

```python
colors = ["red", "blue", "green", "yellow", "purple"]
print(colors)
```

### Challenge 4: Create Your Own List!

Create a list of anything you want!

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Square Brackets

**Wrong:**
```python
fruits = "apple", "banana", "orange"  # This is a tuple, not a list!
```

**Right:**
```python
fruits = ["apple", "banana", "orange"]  # Use square brackets!
```

### Mistake 2: Forgetting Commas

**Wrong:**
```python
fruits = ["apple" "banana" "orange"]  # Error! Missing commas
```

**Right:**
```python
fruits = ["apple", "banana", "orange"]  # Commas between items!
```

### Mistake 3: Wrong Quotes

**Wrong:**
```python
fruits = ['apple', 'banana', 'orange']  # This actually works, but...
```

**Right:**
```python
fruits = ["apple", "banana", "orange"]  # Double quotes are clearer
```

**Note:** Both single and double quotes work, but be consistent!

---

## 📝 Key Takeaways

### List Syntax

```python
list_name = [item1, item2, item3]
```

### Important Rules

1. **Use square brackets** — `[]` not `()` or `{}`
2. **Separate with commas** — `,` between items
3. **Can contain anything** — Words, numbers, or mixed
4. **Can be empty** — `[]` is a valid empty list

### When to Use Lists

| Use a list when...              | Use a variable when...        |
| ------------------------------- | ----------------------------- |
| You have multiple items         | You have one item             |
| Items are related               | Item stands alone             |
| You want to organize data       | Simple value                  |
| `fruits = ["apple", "banana"]`  | `name = "Alice"`              |

### Vocabulary Words

| Word            | Definition                                    | Example                    |
| --------------- | --------------------------------------------- | -------------------------- |
| **List**        | A collection of items stored together         | `fruits = ["apple", "banana"]` |
| **Item**        | One thing in a list                           | "apple" is an item         |
| **Data structure** | A way to organize data                      | Lists are data structures  |
| **Collection**  | A group of items                              | A list is a collection     |

---

## 🌟 Next Lesson Preview

**Week 2: Working with Lists**

Next week, you'll learn to:

- **Access items** — Get specific items from lists
- **Add items** — Put new items in lists
- **Find length** — Count how many items are in lists
- **More list operations** — Do more with lists!

**Sneak peek:**

```python
fruits = ["apple", "banana", "orange"]
print(fruits[0])  # Gets first item: "apple"
fruits.append("grape")  # Adds "grape" to the list
print(len(fruits))  # Shows how many items: 4
```

Get ready to work with lists! 📋

---

## 🎉 Great Job, Data Explorer!

You just learned your first data structure!

**What you accomplished today:**

- ✅ Learned what a list is
- ✅ Created your first lists
- ✅ Stored multiple items in one variable
- ✅ Printed lists
- ✅ Understood when to use lists

> _BrightByte says: "WOW! You just learned lists—your first data structure! 🎉 This is HUGE! Lists are how programmers (and AI!) organize information. Next week, you'll learn to access items, add items, and do amazing things with lists. You're becoming a real programmer!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Different Lists:** Create lists of different things (foods, games, colors, etc.)
2. **Long Lists:** Create lists with 10, 20, or more items
3. **Mixed Lists:** Create lists with words and numbers
4. **Empty Lists:** Create empty lists and think about what you'll add later
5. **Your Own Ideas:** Create lists for things you care about!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: lists are powerful—they let you organize lots of information!_ 📋

