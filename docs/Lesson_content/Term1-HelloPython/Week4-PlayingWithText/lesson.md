---
title: "Playing with Text!"
description: "Learn to combine text, use string superpowers like .upper() and .lower(), and discover cool text tricks!"
difficulty: "beginner"
order_index: 4
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: false
starter_code: |
  # Playing with Text!
  # Let's learn string superpowers!
  
  first_name = "Your"
  last_name = "Name"
  
  # Combine text
  full_name = first_name + " " + last_name
  print("Full name:", full_name)
  
  # Try string methods!
  print("SHOUTING:", full_name.upper())
  print("Whispering:", full_name.lower())
  print("Length:", len(full_name))
class_activities: |
  **Activity: Name Transformer!**
  
  1. Store your full name in a variable
  2. Print it in UPPERCASE
  3. Print it in lowercase
  4. Print how many characters it has
  5. Bonus: Make it repeat 3 times!
take_home_assignment: |
  **Assignment: Mad Libs Story**
  
  Create a Mad Libs program with at least 5 variables:
  - Use string concatenation (+) to build sentences
  - Use at least one string method (.upper(), .lower(), etc.)
  - Make it silly and fun!
  
  Submit your Trinket link.
---

# Term 1, Week 4: Playing with Text! 🔤

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old

---

## 🎯 What You'll Learn Today

- How to combine (concatenate) text
- How to make text UPPERCASE and lowercase
- How to find the length of text
- Cool text tricks!

---

## Review: Strings

Remember, text in Python is called a **string**. Strings go inside quotation marks:

```python
greeting = "Hello"
name = "Alex"
```

Today we'll learn string **superpowers**! 💪

---

## Combining Text (Concatenation)

You can glue strings together using the `+` sign!

```python
first = "Hello"
second = "World"
together = first + second
print(together)
```

**Output:** `HelloWorld`

Oops! We need a space:

```python
first = "Hello"
second = "World"
together = first + " " + second
print(together)
```

**Output:** `Hello World`

### Building Sentences

```python
name = "Alex"
greeting = "Hello, " + name + "!"
print(greeting)
```

**Output:** `Hello, Alex!`

### With Variables

```python
animal = "cat"
color = "orange"
sentence = "I have an " + color + " " + animal
print(sentence)
```

**Output:** `I have an orange cat`

---

## String Superpowers! ✨

Strings have special powers called **methods**. Use them with a dot `.`

### .upper() - MAKE IT LOUD!

```python
message = "hello"
loud_message = message.upper()
print(loud_message)
```

**Output:** `HELLO`

### .lower() - make it quiet

```python
message = "HELLO"
quiet_message = message.lower()
print(quiet_message)
```

**Output:** `hello`

### .capitalize() - First letter big

```python
name = "alex"
proper_name = name.capitalize()
print(proper_name)
```

**Output:** `Alex`

### .title() - Every Word Capitalized

```python
book = "harry potter"
book_title = book.title()
print(book_title)
```

**Output:** `Harry Potter`

---

## How Long is My String?

Use `len()` to count characters:

```python
name = "Alex"
print(len(name))
```

**Output:** `4` (A-l-e-x = 4 letters!)

```python
sentence = "Hello World"
print(len(sentence))
```

**Output:** `11` (spaces count too!)

---

## Fun Text Tricks! 🎩

### Trick 1: Repeat Text
```python
laugh = "Ha"
big_laugh = laugh * 5
print(big_laugh)
```

**Output:** `HaHaHaHaHa`

### Trick 2: Create Patterns
```python
print("🌟" * 10)
print("=-" * 15)
```

### Trick 3: Yelling Names!
```python
name = "alex"
yell = name.upper() + "!!!"
print(yell)
```

**Output:** `ALEX!!!`

---

## Building a Mad Libs! 📝

```python
adjective = "silly"
noun = "elephant"
verb = "danced"
place = "moon"

story = "The " + adjective + " " + noun + " " + verb + " on the " + place + "!"
print(story)
```

**Output:** `The silly elephant danced on the moon!`

---

## Common Mistakes

### Forgetting the Space
```python
# ❌ Squished!
print("Hello" + "World")  # HelloWorld

# ✅ Add a space!
print("Hello" + " " + "World")  # Hello World
```

### Mixing Strings and Numbers
```python
age = 10

# ❌ Error! Can't add string and number
print("I am " + age)

# ✅ Fix: Use comma instead
print("I am", age)

# ✅ Or convert number to string
print("I am " + str(age))
```

---

## Key Vocabulary

| Term | Meaning |
|------|---------|
| **Concatenation** | Joining strings together with `+` |
| **Method** | A special power strings have (like `.upper()`) |
| **len()** | Function that tells you string length |

---

## What's Next?

Next week is **Practice & Play** - we'll use everything we've learned to make fun programs! 🎮

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*

