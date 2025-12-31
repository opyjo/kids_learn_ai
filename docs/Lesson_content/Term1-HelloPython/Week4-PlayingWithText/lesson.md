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
  6. Bonus: Make your name repeat 3 times with spaces between!

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
---

# Term 1, Week 4: Playing with Text! 🔤

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 1 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Combine (concatenate) strings using the `+` operator
- Use string methods like `.upper()`, `.lower()`, `.title()`, and `.capitalize()`
- Find the length of any string using `len()`
- Convert numbers to strings using `str()`
- Create fun text transformations and effects
- Build a Mad Libs story generator

---

## 🤖 BrightByte's Welcome!

> _"Hey there, text wizard! 🧙‍♂️ You've learned so much already—printing, patterns, and variables! Now it's time to unlock the SECRET POWERS that strings have. Did you know that strings can transform themselves? They can SHOUT, whisper, count their own letters, and even change their style! These powers are called METHODS, and today you're going to master them. Let's go!"_

---

## 📝 Review: What Are Strings?

Before we learn new tricks, let's remember what strings are!

**Strings** are text in Python. They always go inside quotation marks:

```python
greeting = "Hello"
name = "Alex"
message = "I love coding!"
emoji_text = "Python is fun! 🐍"
```

Strings can contain:

- Letters (A-Z, a-z)
- Numbers (as text, like "123")
- Spaces
- Punctuation (!@#$%...)
- Emojis! 🎉

**Key Point:** Anything inside quotation marks is a string, even if it looks like a number!

```python
text_number = "42"    # This is a STRING, not a number!
real_number = 42      # This is a NUMBER
```

> _BrightByte says: "Think of quotation marks as a magic wrapper. Whatever goes inside becomes text that Python can play with!"_

---

## 🔗 Combining Text (Concatenation)

### What is Concatenation?

**Concatenation** is a fancy word that means "joining things together." When you concatenate strings, you're gluing them together to make one longer string!

The `+` symbol joins strings together:

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
first = "Hello"
second = "World"
print(first + second)    # HelloWorld

# With space - much better!
print(first + " " + second)    # Hello World
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

Let's break down what happened:

- `"Hello, "` - text with a space after the comma
- `+` - join with the next thing
- `name` - the variable containing "Alex"
- `+` - join with the next thing
- `"!"` - the exclamation mark

Result: `Hello, Alex!`

### More Concatenation Examples

```python
# Building a description
animal = "cat"
color = "orange"
sentence = "I have an " + color + " " + animal + "."
print(sentence)
# Output: I have an orange cat.

# Building an introduction
first_name = "Alex"
last_name = "Smith"
full_intro = "My name is " + first_name + " " + last_name + ". Nice to meet you!"
print(full_intro)
# Output: My name is Alex Smith. Nice to meet you!

# Building a cheer
team = "Tigers"
cheer = "Go " + team + "! Go " + team + "! Let's win!"
print(cheer)
# Output: Go Tigers! Go Tigers! Let's win!
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
print(full_name + " is the winner!")
```

**Output:**

```
Hello, Alex Smith!
Welcome to the game, Alex Smith!
Alex Smith is the winner!
```

> _BrightByte says: "Concatenation is like making a friendship bracelet—you're connecting pieces together to create something new and beautiful!"_

---

## ✨ String Superpowers (Methods)!

Here's where it gets REALLY cool! Strings have special powers called **methods**. Methods are actions that strings can perform on themselves.

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
print(loud_message)
```

**Output:**

```
HELLO
```

More examples:

```python
name = "alex"
print(name.upper())    # ALEX

whisper = "this is quiet"
print(whisper.upper()) # THIS IS QUIET

mixed = "HeLLo WoRLd"
print(mixed.upper())   # HELLO WORLD
```

**When to use .upper():**

- Making titles stand out
- Creating "shouting" effects
- Making text easier to compare

### Method 2: .lower() - make it quiet 🤫

The `.lower()` method transforms ALL letters to lowercase:

```python
message = "HELLO"
quiet_message = message.lower()
print(quiet_message)
```

**Output:**

```
hello
```

More examples:

```python
shout = "STOP YELLING!"
print(shout.lower())    # stop yelling!

name = "ALEX"
print(name.lower())     # alex

mixed = "HeLLo WoRLd"
print(mixed.lower())    # hello world
```

**When to use .lower():**

- Making text look calm
- Comparing text (ignoring case)
- Standardizing input

### Method 3: .capitalize() - First Letter Big

The `.capitalize()` method makes the FIRST letter uppercase and everything else lowercase:

```python
name = "aLEX"
proper_name = name.capitalize()
print(proper_name)
```

**Output:**

```
Alex
```

More examples:

```python
word = "hello"
print(word.capitalize())     # Hello

messy = "tHiS iS mEsSy"
print(messy.capitalize())    # This is messy

sentence = "i love python."
print(sentence.capitalize()) # I love python.
```

**When to use .capitalize():**

- Fixing names that are all lowercase
- Starting sentences properly
- Cleaning up messy text

### Method 4: .title() - Every Word Capitalized

The `.title()` method capitalizes the FIRST LETTER of EVERY word:

```python
book = "harry potter and the sorcerer's stone"
book_title = book.title()
print(book_title)
```

**Output:**

```
Harry Potter And The Sorcerer'S Stone
```

More examples:

```python
movie = "the lion king"
print(movie.title())     # The Lion King

name = "alex smith"
print(name.title())      # Alex Smith

messy = "hELLO wORLD"
print(messy.title())     # Hello World
```

**When to use .title():**

- Formatting book or movie titles
- Making names look professional
- Creating headlines

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

### Chaining Methods (Advanced!)

You can use multiple methods in a row:

```python
name = "   ALEX   "
clean_name = name.lower().strip()  # .strip() removes extra spaces
print(clean_name)  # alex
```

> _BrightByte says: "String methods are like superpowers! Once you know them, you can transform any text however you want. I use .upper() when I'm excited about something—like LEARNING WITH YOU!"_

---

## 📏 How Long is My String?

### The len() Function

`len()` tells you how many characters are in a string. It counts EVERYTHING—letters, spaces, and punctuation!

```python
name = "Alex"
print(len(name))
```

**Output:**

```
4
```

Let's count: A-l-e-x = 4 characters ✓

### Spaces Count Too!

```python
greeting = "Hello World"
print(len(greeting))
```

**Output:**

```
11
```

Let's count: H-e-l-l-o-[space]-W-o-r-l-d = 11 characters ✓

### More len() Examples

```python
# Single word
print(len("Python"))      # 6

# With spaces
print(len("I love coding"))  # 13

# With punctuation
print(len("Hello!"))      # 6

# With emojis (careful - some emojis count differently!)
print(len("Hi! 🎉"))       # 5 (varies by emoji)

# Empty string
print(len(""))            # 0
```

### Using len() with Variables

```python
first_name = "Alexander"
last_name = "Smith"

print("First name has", len(first_name), "letters")
print("Last name has", len(last_name), "letters")

full_name = first_name + " " + last_name
print("Full name has", len(full_name), "characters (including space!)")
```

**Output:**

```
First name has 9 letters
Last name has 5 letters
Full name has 15 characters (including space!)
```

### Fun with len()

```python
# Who has the longer name?
name1 = "Alex"
name2 = "Christopher"

print(name1, "has", len(name1), "letters")
print(name2, "has", len(name2), "letters")

if len(name2) > len(name1):
    print(name2, "is longer!")
```

---

## 🔢 Converting Numbers to Strings

### The Problem

Remember, you can't concatenate strings and numbers directly:

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

**Output:** `I am 10 years old`

### Solution 2: Use str() (Converts Number to String)

The `str()` function converts a number into a string:

```python
age = 10
age_text = str(age)  # Now it's "10" (a string!)
print("I am " + age_text + " years old")  # ✓ Works!
```

**Output:** `I am 10 years old`

Or do it all in one line:

```python
age = 10
print("I am " + str(age) + " years old")
```

### When to Use str()

Use `str()` when you want to concatenate numbers with text using `+`:

```python
score = 100
lives = 3

# Using str() for concatenation
message = "Score: " + str(score) + " | Lives: " + str(lives)
print(message)
```

**Output:** `Score: 100 | Lives: 3`

### Comparison: Commas vs str()

| Method | Code                        | When to Use                                |
| ------ | --------------------------- | ------------------------------------------ |
| Commas | `print("Age:", age)`        | Quick and easy, adds spaces automatically  |
| str()  | `print("Age: " + str(age))` | When you need precise control over spacing |

---

## 🎩 Fun Text Tricks!

Let's combine everything we've learned to do some cool tricks!

### Trick 1: Repeat Text with \*

```python
laugh = "Ha"
big_laugh = laugh * 5
print(big_laugh)
```

**Output:** `HaHaHaHaHa`

### Trick 2: Create Yelling Names!

```python
name = "alex"
yell = name.upper() + "!!!"
print(yell)
```

**Output:** `ALEX!!!`

### Trick 3: Decorative Titles

```python
title = "my awesome program"
fancy_title = "✨ " + title.title() + " ✨"
print(fancy_title)
```

**Output:** `✨ My Awesome Program ✨`

### Trick 4: Name Badges

```python
name = "alex smith"
badge = "=" * 20 + "\n" + "  " + name.title() + "\n" + "=" * 20
print(badge)
```

**Output:**

```
====================
  Alex Smith
====================
```

### Trick 5: Whisper Then Shout

```python
message = "Hello World"
print("Whispering:", message.lower())
print("SHOUTING:", message.upper())
```

**Output:**

```
Whispering: hello world
SHOUTING: HELLO WORLD
```

### Trick 6: Character Count Report

```python
word = "Python"
print("The word '" + word + "' has " + str(len(word)) + " letters")
print("In uppercase: " + word.upper())
print("In lowercase: " + word.lower())
```

**Output:**

```
The word 'Python' has 6 letters
In uppercase: PYTHON
In lowercase: python
```

---

## 📝 Building a Mad Libs!

Mad Libs are stories where you fill in blanks with random words to make silly sentences! Let's build one with Python:

### Simple Mad Libs

```python
# Get the words (normally you'd ask the user!)
adjective = "silly"
noun = "elephant"
verb = "danced"
place = "moon"

# Build the story
story = "The " + adjective + " " + noun + " " + verb + " on the " + place + "!"
print(story)
```

**Output:** `The silly elephant danced on the moon!`

### Bigger Mad Libs

```python
# The words
adjective1 = "purple"
adjective2 = "gigantic"
noun1 = "dinosaur"
noun2 = "pizza"
verb1 = "jumped"
verb2 = "sang"
place = "Mount Everest"
name = "captain spaghetti"

# The story (with string methods!)
print("=" * 40)
print("THE AMAZING ADVENTURE".center(40))
print("=" * 40)
print("")

sentence1 = "Once upon a time, a " + adjective1 + " " + noun1 + " " + verb1 + " over a " + noun2 + "."
sentence2 = "Then " + name.title() + " appeared and " + verb2 + " loudly!"
sentence3 = "They all went to " + place.upper() + " and lived happily ever after."

print(sentence1)
print(sentence2)
print(sentence3)
print("")
print("THE END".center(40))
print("=" * 40)
```

**Output:**

```
========================================
          THE AMAZING ADVENTURE
========================================

Once upon a time, a purple dinosaur jumped over a pizza.
Then Captain Spaghetti appeared and sang loudly!
They all went to MOUNT EVEREST and lived happily ever after.

          THE END
========================================
```

### Make Your Own Mad Libs Template

```python
# Your words (change these!)
animal = "____"
food = "____"
action = "____"
place = "____"
person = "____"

# The story
print("🌟 MY SILLY STORY 🌟")
print("-" * 25)
story = "A " + animal + " ate " + food + " while " + action + " in " + place + " with " + person.title() + "!"
print(story)
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
print("Repeated:", my_name + "! " + my_name + "! " + my_name + "!")
```

### Challenge 2: Introduction Generator

Create a complete introduction:

```python
first_name = "____"
last_name = "____"
age = ____
city = "____"
hobby = "____"

full_name = first_name + " " + last_name
intro = "Hello! My name is " + full_name.title() + ". "
intro = intro + "I am " + str(age) + " years old. "
intro = intro + "I live in " + city + " and I love " + hobby + "!"

print("=" * 50)
print(intro)
print("=" * 50)
```

### Challenge 3: Word Analyzer

Analyze a word completely:

```python
word = "Python"

print("📊 WORD ANALYSIS 📊")
print("-" * 25)
print("Word:", word)
print("Length:", len(word), "characters")
print("Uppercase:", word.upper())
print("Lowercase:", word.lower())
print("Shouting:", word.upper() + "!!!")
print("Repeated 3x:", (word + " ") * 3)
print("-" * 25)
```

### Challenge 4: Silly Sentence Maker

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

### Challenge 5: Name Badge Creator

Create a professional-looking name badge:

```python
name = "alex smith"
title = "python programmer"

width = 30
print("+" + "-" * width + "+")
print("|" + name.title().center(width) + "|")
print("|" + title.title().center(width) + "|")
print("+" + "-" * width + "+")
```

---

## 🔧 Common Mistakes and How to Fix Them

### Mistake 1: Forgetting the Space in Concatenation

```python
first = "Hello"
second = "World"

# ❌ Wrong - no space
print(first + second)    # HelloWorld

# ✅ Correct - add the space!
print(first + " " + second)    # Hello World
```

### Mistake 2: Mixing Strings and Numbers with +

```python
age = 10

# ❌ Wrong - can't add string and integer with +
print("I am " + age + " years old")    # TypeError!

# ✅ Correct - use commas
print("I am", age, "years old")

# ✅ Also correct - convert number to string
print("I am " + str(age) + " years old")
```

### Mistake 3: Forgetting Parentheses on Methods

```python
name = "alex"

# ❌ Wrong - missing parentheses
print(name.upper)    # Prints something weird!

# ✅ Correct - include the ()
print(name.upper())    # ALEX
```

### Mistake 4: Using Methods on Numbers

```python
number = 42

# ❌ Wrong - numbers don't have .upper()
print(number.upper())    # Error!

# ✅ Correct - convert to string first
print(str(number).upper())    # "42" (but upper doesn't change numbers)
```

### Mistake 5: Expecting Methods to Change the Original

```python
name = "alex"
name.upper()  # This creates "ALEX" but doesn't save it!
print(name)   # Still prints "alex"

# ✅ Correct - save the result!
name = "alex"
name = name.upper()  # Save it back
print(name)   # Now prints "ALEX"

# ✅ Or use it directly in print
name = "alex"
print(name.upper())  # Prints "ALEX"
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

### Quick Reference

```python
# Concatenation (joining strings)
full = first + " " + last

# String methods
text.upper()        # ALL CAPS
text.lower()        # all lowercase
text.capitalize()   # First letter only
text.title()        # Each Word Capitalized

# Length
len(text)           # Count characters

# Number to string
str(number)         # Convert for concatenation
```

### Vocabulary Words

| Word              | Definition                                  | Example                |
| ----------------- | ------------------------------------------- | ---------------------- |
| **Concatenation** | Joining strings together with `+`           | `"Hi" + "There"`       |
| **Method**        | A special function that belongs to a string | `.upper()`, `.lower()` |
| **len()**         | Function that counts characters in a string | `len("Hello")` → 5     |
| **str()**         | Function that converts numbers to text      | `str(10)` → "10"       |
| **Uppercase**     | ALL CAPITAL LETTERS                         | `HELLO`                |
| **Lowercase**     | all small letters                           | `hello`                |
| **Title Case**    | First Letter Of Each Word Capitalized       | `Hello World`          |

---

## 🏠 Homework: Mad Libs Story Generator

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### The Assignment

Create your own Mad Libs story program! Mad Libs are fill-in-the-blank stories that become silly and fun when you add random words.

### Requirements

Your program must include:

1. ✅ At least **5 variables** for different words (nouns, verbs, adjectives, etc.)
2. ✅ Use **string concatenation (+)** to build at least 3 sentences
3. ✅ Use at least **2 different string methods** (.upper(), .lower(), .title(), .capitalize())
4. ✅ Make the story **silly and creative**!
5. ✅ Add a **decorative title** using string multiplication (\* with a pattern)
6. ✅ Code must **run without errors**

### Word Types for Ideas

| Type      | Examples                                      |
| --------- | --------------------------------------------- |
| Noun      | cat, pizza, rocket, elephant, guitar          |
| Verb      | jumped, exploded, danced, screamed, flew      |
| Adjective | purple, giant, silly, sparkly, smelly         |
| Place     | moon, bathroom, volcano, school, ocean        |
| Name      | Captain Banana, Professor Pickle, Sir Giggles |

### Example Solution

```python
# Mad Libs: The Silly Adventure
# By: BrightByte

# My word choices
adjective1 = "sparkly"
adjective2 = "enormous"
noun1 = "penguin"
noun2 = "taco"
verb1 = "backflipped"
verb2 = "sneezed"
place = "the moon"
name = "doctor noodles"

# Decorative title
print("🌟" * 15)
print("THE SILLY ADVENTURE".center(30))
print("🌟" * 15)
print("")

# Build the story with concatenation
sentence1 = "Once upon a time, a " + adjective1 + " " + noun1 + " lived in " + place + "."
sentence2 = "One day, " + name.title() + " arrived with a " + adjective2 + " " + noun2 + "!"
sentence3 = "The " + noun1 + " " + verb1 + " while " + name.title() + " " + verb2 + " loudly."
sentence4 = "And they all lived " + "HAPPILY EVER AFTER" + "!"

# Print the story
print(sentence1)
print(sentence2)
print(sentence3)
print(sentence4)
print("")

# Ending with methods
print("THE END".center(30))
print("written by: " + name.upper())
print("🌟" * 15)
```

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

### Bonus Challenges (Optional)

- Use ALL FOUR string methods in your story
- Include len() to count something
- Create a "Part 2" of your story
- Use .center() to center your text

### How to Submit

1. Write your code on Trinket
2. Save your work (click the 💾 Save button)
3. Click the **Share** button
4. Copy the link
5. Share the link with your instructor

---

## 🌟 Next Lesson Preview

**Week 5: Practice & Play**

Next week is all about PRACTICE! We'll use everything you've learned in Lessons 1-4 to create fun programs, play coding games, and build cool projects. Get ready to show off your skills!

**What we'll do:**

- Code challenges and puzzles
- Partner programming activities
- Create a mini project of your choice
- Review and reinforce all concepts

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

> _BrightByte says: "You're becoming a real text wizard! 🧙‍♂️ These string methods are used in REAL programs every day—games use them for player names, websites use them for usernames, and apps use them everywhere! You now have powers that professional programmers use. Keep practicing, and I'll see you next week for our Practice & Play session!"_

---

## 📚 Extra Resources (Optional)

Want to practice more? Try these:

- **Mad Libs Ideas:** Create stories about superheroes, aliens, or school
- **Name Games:** Write programs that transform celebrity names
- **Word Counter:** Count letters in your friends' names and compare
- **Title Generator:** Create random book or movie titles

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? String methods can be tricky to remember at first—keep your cheat sheet handy and practice a little every day!_
