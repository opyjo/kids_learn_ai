---
title: "Working with Lists"
description: "Access items, add items, and find the length of lists - master list operations!"
difficulty: "beginner"
order_index: 2
course_slug: "term-8-ai-explorer"
is_premium: false
requires_trinket: true
starter_code: |
  # Working with Lists
  # Access and modify lists!

  fruits = ["apple", "banana", "orange"]

  # Access first item (index 0)
  print("First fruit:", fruits[0])

  # Add an item
  fruits.append("grape")
  print("After adding:", fruits)

  # Find length
  print("Number of fruits:", len(fruits))
class_activities: |
  ## 🎮 Class Activity: List Operations Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can access the third item in a list?
  3. Challenge 2: Who can add 3 items to a list?
  4. Challenge 3: Who can find the length of a list with 10 items?
  5. Share your code with the class!

  **Bonus:** Try accessing items from the end of the list!
take_home_assignment: |
  ## 📚 Homework: List Operations Master

  **Assignment:** Create a Python program that demonstrates list operations!

  **Requirements:**
  1. Create a list with at least 5 items
  2. Access and print at least 3 different items from the list
  3. Add at least 2 new items to the list
  4. Find and print the length of the list
  5. Add comments explaining each operation
  6. Code must run without errors

  **Bonus Challenges:**
  - Access items from the end (negative indices)
  - Add items at specific positions
  - Create multiple lists and work with them

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses these same list operations! When AI processes a sentence, it accesses each word by its position. When AI learns new information, it adds it to lists. When AI analyzes data, it counts items in lists. You're learning the same operations that AI uses to work with information!

  You're mastering the tools that help AI understand and process data!
---

# Term 8, Lesson 2: Working with Lists 📋

**Course:** Term 8: AI Explorer  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 8 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Access specific items in a list using indices
- Add items to lists using `append()`
- Find the length of a list using `len()`
- Modify lists
- Work with list data

---

## 🤖 Welcome from BrightByte!

> _"Awesome work last week! You learned to create lists. But lists are SO much more powerful than just storing items! Today, you're going to learn to ACCESS items, ADD items, and COUNT items. This is how you really work with lists. Ready to become a list master?"_

### What's New This Week?

Last week you learned:
- Creating lists
- Storing multiple items
- Basic list syntax

This week you'll discover:
- **Accessing items** — Get specific items from lists
- **Adding items** — Put new items in lists
- **Finding length** — Count items in lists
- **List operations** — Do more with lists!

> _BrightByte says: "These operations make lists powerful! You'll use them in your quiz game project!"_

---

## 🔢 Accessing Items in Lists

### What is an Index?

An **index** is the position of an item in a list. In Python, indices start at **0**, not 1!

### Example 1: Access First Item

```python
fruits = ["apple", "banana", "orange"]
print(fruits[0])
```

**Output:**
```
apple
```

**Why `[0]`?** Because Python counts from 0! The first item is at position 0.

### Example 2: Access Different Items

```python
fruits = ["apple", "banana", "orange"]
print(fruits[0])  # First item: "apple"
print(fruits[1])  # Second item: "banana"
print(fruits[2])  # Third item: "orange"
```

**Output:**
```
apple
banana
orange
```

### Example 3: Index Positions

```python
fruits = ["apple", "banana", "orange"]
# Index:    0        1         2
```

**Remember:** 
- First item = index 0
- Second item = index 1
- Third item = index 2
- And so on!

---

## ➕ Adding Items to Lists

### Using `append()`

`append()` adds an item to the **end** of a list.

### Example 1: Add One Item

```python
fruits = ["apple", "banana", "orange"]
print("Before:", fruits)

fruits.append("grape")
print("After:", fruits)
```

**Output:**
```
Before: ['apple', 'banana', 'orange']
After: ['apple', 'banana', 'orange', 'grape']
```

### Example 2: Add Multiple Items

```python
fruits = ["apple", "banana"]
fruits.append("orange")
fruits.append("grape")
fruits.append("strawberry")
print(fruits)
```

**Output:**
```
['apple', 'banana', 'orange', 'grape', 'strawberry']
```

### Example 3: Build a List

```python
favorite_foods = []
favorite_foods.append("pizza")
favorite_foods.append("ice cream")
favorite_foods.append("chocolate")
print(favorite_foods)
```

**Output:**
```
['pizza', 'ice cream', 'chocolate']
```

**You can start with an empty list and build it!**

---

## 📏 Finding List Length

### Using `len()`

`len()` tells you how many items are in a list.

### Example 1: Count Items

```python
fruits = ["apple", "banana", "orange"]
print("Number of fruits:", len(fruits))
```

**Output:**
```
Number of fruits: 3
```

### Example 2: Length of Different Lists

```python
numbers = [1, 2, 3, 4, 5]
colors = ["red", "blue", "green"]
empty = []

print("Numbers:", len(numbers))  # 5
print("Colors:", len(colors))    # 3
print("Empty:", len(empty))      # 0
```

### Example 3: Using Length in Code

```python
fruits = ["apple", "banana", "orange"]
if len(fruits) > 2:
    print("You have lots of fruits!")
```

---

## 🎯 More List Operations

### Example 1: Access Last Item

```python
fruits = ["apple", "banana", "orange"]
last_fruit = fruits[len(fruits) - 1]
print("Last fruit:", last_fruit)
```

**Or use negative index:**
```python
fruits = ["apple", "banana", "orange"]
print(fruits[-1])  # Last item: "orange"
print(fruits[-2])  # Second to last: "banana"
```

### Example 2: Check if List is Empty

```python
my_list = []
if len(my_list) == 0:
    print("The list is empty!")
```

### Example 3: Access and Modify

```python
fruits = ["apple", "banana", "orange"]
print("First fruit:", fruits[0])
fruits.append("grape")
print("After adding:", fruits)
print("Now there are", len(fruits), "fruits")
```

---

## 🎮 Practice Challenges!

### Challenge 1: Access Items

```python
colors = ["red", "blue", "green", "yellow"]
print(colors[0])  # First color
print(colors[2])  # Third color
```

### Challenge 2: Add Items

```python
games = ["Minecraft"]
games.append("Roblox")
games.append("Fortnite")
print(games)
```

### Challenge 3: Find Length

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print("Count:", len(numbers))
```

### Challenge 4: Combine Operations

```python
fruits = ["apple", "banana"]
print("Starting with", len(fruits), "fruits")
fruits.append("orange")
fruits.append("grape")
print("Now have", len(fruits), "fruits")
print("Last fruit:", fruits[-1])
```

### Challenge 5: Create Your Own!

Create a list and use all operations!

---

## ⚠️ Common Mistakes

### Mistake 1: Index Out of Range

**Wrong:**
```python
fruits = ["apple", "banana", "orange"]
print(fruits[3])  # Error! Only indices 0, 1, 2 exist
```

**Right:**
```python
fruits = ["apple", "banana", "orange"]
print(fruits[2])  # Last item (index 2)
```

### Mistake 2: Forgetting Parentheses

**Wrong:**
```python
fruits.append "grape"  # Missing parentheses!
```

**Right:**
```python
fruits.append("grape")  # Parentheses required!
```

### Mistake 3: Wrong Index Number

**Wrong (if you want first item):**
```python
fruits = ["apple", "banana"]
print(fruits[1])  # This prints "banana", not "apple"!
```

**Right:**
```python
fruits = ["apple", "banana"]
print(fruits[0])  # First item: "apple"
```

---

## 📝 Key Takeaways

### Accessing Items

```python
list_name[index]  # Get item at position index
```

**Remember:** Indices start at 0!

### Adding Items

```python
list_name.append(item)  # Add item to end
```

### Finding Length

```python
len(list_name)  # Number of items
```

### Important Rules

1. **Indices start at 0** — First item is `[0]`, not `[1]`
2. **Use `append()` to add** — `list.append(item)`
3. **Use `len()` to count** — `len(list)`
4. **Check bounds** — Make sure index exists!

### Common Patterns

| What You Want              | Code                        | Result                    |
| ------------------------- | --------------------------- | ------------------------- |
| First item                | `list[0]`                   | First item                |
| Last item                 | `list[-1]` or `list[len(list)-1]` | Last item                |
| Add item                  | `list.append(item)`         | Item added to end         |
| Count items               | `len(list)`                 | Number of items           |

---

## 🌟 Next Lesson Preview

**Week 3: Loops + Lists**

Next week, you'll combine loops with lists:

- **Loop through lists** — Process every item
- **List iteration** — Go through each item automatically
- **Powerful combinations** — Loops make lists even more powerful

**Sneak peek:**

```python
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)  # Prints each fruit!
```

Get ready to loop through lists! 🔄

---

## 🎉 Great Job, List Operator!

You just learned to work with lists!

**What you accomplished today:**

- ✅ Learned to access items using indices
- ✅ Learned to add items with `append()`
- ✅ Learned to find length with `len()`
- ✅ Modified lists
- ✅ Worked with list data

> _BrightByte says: "WOW! You just learned the essential list operations! 🎉 Accessing, adding, counting—these are the tools that make lists powerful. Next week, we'll combine loops with lists, and you'll see how powerful this combination is. You're building toward your quiz game project!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Access Practice:** Access different items from lists
2. **Add Practice:** Build lists by adding items one by one
3. **Length Practice:** Count items in different lists
4. **Combinations:** Use all operations together
5. **Your Own Lists:** Create and work with your own lists!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: indices start at 0, and practice makes perfect!_ 📋

