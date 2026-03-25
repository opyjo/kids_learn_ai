---
title: "Playing with Text!"
description: "Learn to combine text with concatenation, use string superpowers like .upper() and .lower(), find string length, and create fun text transformations!"
difficulty: "beginner"
order_index: 4
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: true
starter_code: |
  # Playing with Text!
  # Let's learn string superpowers!

  first_name = "Your"
  last_name = "Name"

  # Combine text (concatenation)
  full_name = first_name + " " + last_name
  print("Full name:", full_name)

  # String methods - superpowers!
  print("SHOUTING:", full_name.upper())
  print("Whispering:", full_name.lower())
  print("Fancy:", full_name.title())

  # How long is the name?
  print("Length:", len(full_name), "characters")

  # Try changing the names and run again!
class_activities: |
  ## 🎮 Class Activity: Name Transformer!

  1. Store your full name in a variable called `my_name`
  2. Print your name in UPPERCASE using .upper()
  3. Print your name in lowercase using .lower()
  4. Print how many characters your name has using len()
  5. Create a "yelling" version: name.upper() + "!!!"

  **Challenge:** Create a "name badge" that shows your name in Title Case inside a decorative border!
take_home_assignment: |
  ## 📚 Homework: Mad Libs Story Generator

  **Assignment:** Create a fun Mad Libs story program using variables and string methods!

  **Requirements:**
  1. Create at least 5 variables for different words (noun, verb, adjective, etc.)
  2. Use string concatenation (+) to build at least 3 sentences
  3. Use at least 2 different string methods (.upper(), .lower(), .title(), .capitalize())
  4. Make the story silly and creative!
  5. Add a decorative title using string multiplication
  6. Code must run without errors

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  When you search Google, it uses tricks like `.lower()` so "PIZZA" and "pizza" find the same results! Spell checkers use string methods to fix your typing.

  You're learning the same text skills that power Google and ChatGPT!
---

# Term 1, Week 4: Playing with Text! 🔤

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Combine (concatenate) strings using the `+` operator
- Use string methods like `.upper()`, `.lower()`, `.title()`, and `.capitalize()`
- Find the length of any string using `len()`
- Convert numbers to strings using `str()`
- Build a Mad Libs story generator

---

## 🤖 BrightByte's Welcome!

> _"Hey there, text wizard! 🧙‍♂️ You've learned so much already—printing, patterns, and variables! Now it's time to unlock the SECRET POWERS that strings have. Did you know that strings can transform themselves? They can SHOUT, whisper, count their own letters, and even change their style! These powers are called METHODS, and today you're going to master them. Let's go!"_

---

## 🔗 Combining Text (Concatenation)

### What is Concatenation?

**Concatenation** is a fancy word that means "joining things together." The `+` symbol joins strings together:

```python
first = "Hello"
second = "World"
together = first + second
print(together)
```

**Output:**

```
HelloWorld
```

Wait... where's the space? 🤔

### The Space Problem

When you concatenate strings, Python puts them EXACTLY together—no extra spaces!

```python
# Without space - they squish together!
print("Hello" + "World")    # HelloWorld

# With space - much better!
print("Hello" + " " + "World")    # Hello World
```

**The Rule:** If you want a space, YOU have to add it using `" "`

### Building Sentences

You can build complete sentences by concatenating pieces together:

```python
name = "Alex"
greeting = "Hello, " + name + "!"
print(greeting)
```

**Output:**

```
Hello, Alex!
```

### Storing Concatenated Results

You can save the result in a new variable:

```python
first_name = "Alex"
last_name = "Smith"

# Create full name and store it
full_name = first_name + " " + last_name

# Now use it multiple times!
print("Hello, " + full_name + "!")
print("Welcome to the game, " + full_name + "!")
```

> _BrightByte says: "Concatenation is like making a friendship bracelet—you're connecting pieces together to create something new and beautiful!"_

---

## ✨ String Superpowers (Methods)!

Strings have special powers called **methods**. Methods are actions that strings can perform on themselves.

### How to Use Methods

Use a dot `.` after the string or variable, then the method name with parentheses `()`:

```python
variable.method()
```

### Method 1: .upper() - MAKE IT LOUD! 📢

The `.upper()` method transforms ALL letters to UPPERCASE:

```python
message = "hello"
loud_message = message.upper()
print(loud_message)    # HELLO

name = "alex"
print(name.upper())    # ALEX
```

### Method 2: .lower() - make it quiet 🤫

The `.lower()` method transforms ALL letters to lowercase:

```python
message = "HELLO"
quiet_message = message.lower()
print(quiet_message)    # hello

shout = "STOP YELLING!"
print(shout.lower())    # stop yelling!
```

### Method 3: .capitalize() - First Letter Big

The `.capitalize()` method makes the FIRST letter uppercase and everything else lowercase:

```python
name = "aLEX"
proper_name = name.capitalize()
print(proper_name)    # Alex
```

### Method 4: .title() - Every Word Capitalized

The `.title()` method capitalizes the FIRST LETTER of EVERY word:

```python
book = "harry potter and the sorcerer's stone"
print(book.title())    # Harry Potter And The Sorcerer'S Stone

name = "alex smith"
print(name.title())    # Alex Smith
```

### Comparing the Methods

Let's see all four methods on the same text:

```python
text = "hELLo wORLd"

print("Original:", text)
print("upper():", text.upper())
print("lower():", text.lower())
print("capitalize():", text.capitalize())
print("title():", text.title())
```

**Output:**

```
Original: hELLo wORLd
upper(): HELLO WORLD
lower(): hello world
capitalize(): Hello world
title(): Hello World
```

> _BrightByte says: "String methods are like superpowers! Once you know them, you can transform any text however you want!"_

---

## 📏 How Long is My String?

### The len() Function

`len()` tells you how many characters are in a string. It counts EVERYTHING—letters, spaces, and punctuation!

```python
name = "Alex"
print(len(name))    # 4

greeting = "Hello World"
print(len(greeting))    # 11 (the space counts too!)
```

### Using len() with Variables

```python
first_name = "Alexander"
last_name = "Smith"

print("First name has", len(first_name), "letters")
print("Last name has", len(last_name), "letters")
```

---

## 🔢 Converting Numbers to Strings

### The Problem

You can't concatenate strings and numbers directly:

```python
age = 10
# This causes an ERROR:
print("I am " + age + " years old")  # ❌ TypeError!
```

### Solution 1: Use Commas (Easy Way)

```python
age = 10
print("I am", age, "years old")  # ✓ Works!
```

### Solution 2: Use str() (Converts Number to String)

```python
age = 10
print("I am " + str(age) + " years old")  # ✓ Works!
```

| Method | Code                        | When to Use                                |
| ------ | --------------------------- | ------------------------------------------ |
| Commas | `print("Age:", age)`        | Quick and easy, adds spaces automatically  |
| str()  | `print("Age: " + str(age))` | When you need precise control over spacing |

---

## 📝 Building a Mad Libs!

Mad Libs are stories where you fill in blanks with random words to make silly sentences!

```python
# Get the words
adjective = "silly"
noun = "elephant"
verb = "danced"
place = "moon"

# Build the story
story = "The " + adjective + " " + noun + " " + verb + " on the " + place + "!"
print(story)
```

**Output:** `The silly elephant danced on the moon!`

### Make It Bigger!

```python
adjective1 = "purple"
noun1 = "dinosaur"
verb1 = "jumped"
name = "captain spaghetti"
place = "Mount Everest"

print("=" * 30)
print("THE AMAZING ADVENTURE")
print("=" * 30)

sentence1 = "Once upon a time, a " + adjective1 + " " + noun1 + " " + verb1 + " over a pizza."
sentence2 = "Then " + name.title() + " appeared and sang loudly!"
sentence3 = "They all went to " + place.upper() + " and lived happily ever after."

print(sentence1)
print(sentence2)
print(sentence3)
print("=" * 30)
```

---

## 🎯 Practice Challenges

### Challenge 1: Name Transformer

Transform your name in different ways:

```python
my_name = "your name here"

print("Original:", my_name)
print("UPPERCASE:", my_name.upper())
print("lowercase:", my_name.lower())
print("Title Case:", my_name.title())
print("Length:", len(my_name), "characters")
```

### Challenge 2: Silly Sentence Maker

Create the silliest sentence possible:

```python
adjective = "fluffy"
animal = "penguin"
verb = "breakdanced"
place = "library"
food = "spaghetti"

sentence = "The " + adjective + " " + animal + " " + verb + " in the " + place + " while eating " + food + "!"
print(sentence.upper())  # SHOUT IT!
```

---

## 🔧 Common Mistakes and How to Fix Them

### Mistake 1: Forgetting the Space in Concatenation

```python
# ❌ Wrong - no space
print("Hello" + "World")    # HelloWorld

# ✅ Correct - add the space!
print("Hello" + " " + "World")    # Hello World
```

### Mistake 2: Mixing Strings and Numbers with +

```python
age = 10

# ❌ Wrong
print("I am " + age + " years old")    # TypeError!

# ✅ Correct - use commas or str()
print("I am", age, "years old")
print("I am " + str(age) + " years old")
```

### Mistake 3: Expecting Methods to Change the Original

```python
name = "alex"
name.upper()  # This creates "ALEX" but doesn't save it!
print(name)   # Still prints "alex"

# ✅ Correct - save the result!
name = name.upper()
print(name)   # Now prints "ALEX"
```

---

## 📝 Key Points to Remember

### Summary Card

| Concept       | Example                 | Result        |
| ------------- | ----------------------- | ------------- |
| Concatenation | `"Hi" + " " + "There"`  | `Hi There`    |
| .upper()      | `"hello".upper()`       | `HELLO`       |
| .lower()      | `"HELLO".lower()`       | `hello`       |
| .capitalize() | `"hello".capitalize()`  | `Hello`       |
| .title()      | `"hello world".title()` | `Hello World` |
| len()         | `len("Hello")`          | `5`           |
| str()         | `str(42)`               | `"42"`        |

### Vocabulary Words

| Word              | Definition                                  | Example                |
| ----------------- | ------------------------------------------- | ---------------------- |
| **Concatenation** | Joining strings together with `+`           | `"Hi" + "There"`       |
| **Method**        | A special function that belongs to a string | `.upper()`, `.lower()` |
| **len()**         | Function that counts characters in a string | `len("Hello")` → 5     |
| **str()**         | Function that converts numbers to text      | `str(10)` → "10"       |

---

## 🏠 Homework: Mad Libs Story Generator

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### Requirements

Your program must include:

1. ✅ At least **5 variables** for different words (nouns, verbs, adjectives, etc.)
2. ✅ Use **string concatenation (+)** to build at least 3 sentences
3. ✅ Use at least **2 different string methods** (.upper(), .lower(), .title(), .capitalize())
4. ✅ Make the story **silly and creative**!
5. ✅ Add a **decorative title** using string multiplication (\* with a pattern)
6. ✅ Code must **run without errors**

### Grading Rubric

| Criteria                                 | Points        |
| ---------------------------------------- | ------------- |
| At least 5 word variables                | ⭐⭐          |
| At least 3 sentences using concatenation | ⭐⭐          |
| At least 2 different string methods used | ⭐⭐          |
| Story is silly and creative              | ⭐            |
| Decorative title with multiplication     | ⭐            |
| Code runs without errors                 | ⭐⭐          |
| **Total**                                | **10 points** |

### How to Submit

1. Write your code on Trinket
2. Save your work (click the 💾 Save button)
3. Click the **Share** button
4. Copy the link
5. Share the link with your instructor

---

## 🌟 Next Lesson Preview

**Week 5: Clean Code & F-Strings!**

Next week you'll learn two awesome new tricks — comments (leaving notes in your code!) and f-strings (a much easier way to print with variables). Get ready to level up your coding style!

---

## 🎉 Congratulations!

You've now learned string SUPERPOWERS! Look at everything you can do:

- ✅ Concatenate strings with `+`
- ✅ Make text UPPERCASE with `.upper()`
- ✅ Make text lowercase with `.lower()`
- ✅ Capitalize properly with `.capitalize()` and `.title()`
- ✅ Count characters with `len()`
- ✅ Convert numbers to strings with `str()`
- ✅ Create Mad Libs stories!

> _BrightByte says: "You're becoming a real text wizard! 🧙‍♂️ These string methods are used in REAL programs every day—games use them for player names, websites use them for usernames, and apps use them everywhere! Keep practicing, and I'll see you next week when we learn about Clean Code & F-Strings!"_

---

_KidsLearnAI - Empowering the Next Generation with AI Education_
*www.kidslearnai.ca*
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? String methods can be tricky to remember at first—keep your cheat sheet handy and practice a little every day!_
