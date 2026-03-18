# Term 1, Week 4: Playing with Text! 🔤

## Teacher's Guide

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces string manipulation—one of the most practical and immediately useful programming skills. Students learn to join strings, transform text case, and measure string length. These concepts appear everywhere in real applications: formatting names, creating messages, processing user input, and building dynamic content. This is also the last "new concept" lesson before the Week 5 review.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Concatenate strings using the `+` operator
2. Apply string methods: `.upper()`, `.lower()`, `.capitalize()`, `.title()`
3. Use `len()` to find string length
4. Use `str()` to convert numbers for concatenation
5. Build a simple Mad Libs program

### Prerequisites

Students should have completed Lessons 1-3 and be able to:

- Create and use variables (strings and integers)
- Print output with commas and variables
- Use string multiplication (`*`)
- Understand the difference between strings and integers

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Student handouts (printed or digital)
- Prepared demonstration code

### Pre-Lesson Preparation

1. **Review Lesson 3 homework** - Note creative profile cards to showcase
2. **Prepare method comparison demo** - Same text through all four methods
3. **Test string methods** - Refresh your memory on edge cases
4. **Prepare "space problem" demo** - For the concatenation section

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                                     |
| ---- | -------- | --------------------------- | ------------------------------------------- |
| 0:00 | 5 min    | Welcome & Homework Showcase | Celebrate Lesson 3 profile cards            |
| 0:05 | 10 min   | String Concatenation        | The + operator for strings, space problem   |
| 0:15 | 12 min   | String Methods              | .upper(), .lower(), .capitalize(), .title() |
| 0:27 | 8 min    | len() and str()             | Counting and converting                     |
| 0:35 | 10 min   | Name Transformer Activity   | Guided practice with all concepts           |
| 0:45 | 10 min   | Mad Libs Creation           | Independent creative work                   |
| 0:55 | 5 min    | Wrap-up & Homework          | Summary, assignment, and Week 5 preview     |

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome & Homework Showcase (5 minutes)

#### Goals

- Celebrate student creativity from Lesson 3
- Reinforce variable concepts before building on them
- Build positive classroom energy

#### Script/Talking Points

> "Welcome back! Before we learn some AMAZING new tricks today, let's see some of the profile cards you created!"

**Select 2-3 profile cards to showcase:**

- Look for good variable naming
- Praise creative use of borders and formatting
- Point out proper use of strings vs integers

> "Today, we're going to learn SUPERPOWERS that strings have. You'll be able to transform text, shout it, whisper it, and even count it!"

---

### Part 2: String Concatenation (10 minutes)

#### Goals

- Teach the `+` operator for joining strings
- Emphasize the "space problem"
- Connect to variable usage from Lesson 3

#### Live Coding: Basic Concatenation

> "Remember how we used `+` to repeat strings with numbers? Well, `+` also JOINS strings together. This is called 'concatenation'—a fancy word for gluing text together."

```python
first = "Hello"
second = "World"
together = first + second
print(together)
```

**Run it:** `HelloWorld`

> "Wait... where's the space? 🤔"

#### The Space Problem (Critical Teaching Moment)

> "When you concatenate, Python puts strings EXACTLY together—no extra spaces. If you want a space, YOU have to add it!"

```python
first = "Hello"
second = "World"
together = first + " " + second
print(together)
```

**Run it:** `Hello World`

> "See? We added `" "` (a string that's just a space) between them."

#### Building Sentences

```python
name = "Alex"
greeting = "Hello, " + name + "!"
print(greeting)
```

**Output:** `Hello, Alex!`

> "Notice I put the comma and space inside the first string, and the exclamation mark at the end. Concatenation gives you TOTAL control over spacing!"

#### Student Quick Practice

> "Everyone try this: Create two variables for your first and last name, then concatenate them with a space in between. Print your full name!"

**Give 2 minutes. Walk around checking.**

---

### Part 3: String Methods (12 minutes)

#### Goals

- Introduce the concept of methods
- Teach four essential string methods
- Demonstrate that methods don't change the original

#### Introducing Methods

> "Strings have special powers called METHODS. Think of methods as superpowers that strings can use on themselves!"

**The Syntax:**

```python
variable.method()
```

> "The dot says 'use this power' and the parentheses activate it. Don't forget those parentheses!"

#### Method 1: .upper()

> "First superpower: `.upper()` makes EVERYTHING UPPERCASE!"

```python
message = "hello"
print(message.upper())    # HELLO
```

#### Method 2: .lower()

> "The opposite: `.lower()` makes everything lowercase."

```python
message = "HELLO"
print(message.lower())    # hello
```

#### Method 3: .capitalize()

> "`.capitalize()` makes just the FIRST letter uppercase, everything else lowercase."

```python
name = "aLEX"
print(name.capitalize())    # Alex
```

#### Method 4: .title()

> "`.title()` capitalizes the first letter of EVERY word. Great for titles!"

```python
book = "harry potter and the sorcerer's stone"
print(book.title())    # Harry Potter And The Sorcerer'S Stone
```

#### Side-by-Side Comparison

> "Let's see all four on the same text:"

```python
text = "hELLo wORLd"
print("Original:", text)
print("upper():", text.upper())
print("lower():", text.lower())
print("capitalize():", text.capitalize())
print("title():", text.title())
```

#### CRITICAL: Methods Don't Change the Original!

> "Here's something VERY important. Watch carefully..."

```python
name = "alex"
name.upper()
print(name)    # Still "alex"!
```

> "`.upper()` CREATES a new string but doesn't save it. You need to either save it or use it directly in print!"

```python
# Option 1: Save it
name = name.upper()
print(name)    # ALEX

# Option 2: Use directly in print
name = "alex"
print(name.upper())    # ALEX
```

**This is a common student error—spend time on it!**

---

### Part 4: len() and str() (8 minutes)

#### Goals

- Teach len() for counting characters
- Teach str() for converting numbers
- Connect to concatenation needs

#### The len() Function

> "`len()` tells you how many characters are in a string. It counts EVERYTHING—letters, spaces, and punctuation!"

```python
name = "Alex"
print(len(name))    # 4

greeting = "Hello World"
print(len(greeting))    # 11 (space counts too!)
```

> "What's the length of your first name? Try it!"

**Give 1 minute.**

#### The str() Function

> "Remember how we can't concatenate strings and numbers with `+`?"

```python
age = 10
print("I am " + age + " years old")  # ERROR!
```

> "We get a TypeError! But `str()` saves the day—it converts a number to a string."

```python
age = 10
print("I am " + str(age) + " years old")  # Works!
```

> "Or remember, you can just use commas which is easier:"

```python
print("I am", age, "years old")  # Also works!
```

---

### Part 5: Name Transformer Activity (10 minutes)

#### Goals

- Apply all concepts in guided practice
- Build confidence through hands-on work
- Prepare for independent Mad Libs work

#### The Activity

> "Let's transform your name in every way possible!"

**Display on screen:**

```python
my_name = "your name here"

print("Original:", my_name)
print("UPPERCASE:", my_name.upper())
print("lowercase:", my_name.lower())
print("Title Case:", my_name.title())
print("Capitalized:", my_name.capitalize())
print("Your name has", len(my_name), "characters!")
print("Shouting:", my_name.upper() + "!!!")
```

> "Everyone code this with YOUR name. Then experiment—try different things!"

**Give 8-9 minutes. Circulate and help.**

**Share out:** Have 2-3 students share their favorite transformation.

---

### Part 6: Mad Libs Creation (10 minutes)

#### Goals

- Apply all concepts creatively
- Build something fun and shareable
- Introduce the homework format

#### Introduce Mad Libs

> "Have you ever done Mad Libs? They're fill-in-the-blank stories that become silly when you add random words!"

**Show a quick example:**

```python
adjective = "purple"
noun = "elephant"
verb = "danced"
place = "moon"

story = "The " + adjective + " " + noun + " " + verb + " on the " + place + "!"
print(story)
```

**Output:** `The purple elephant danced on the moon!`

#### Student Work Time

> "Create your own Mad Libs! You need:
>
> - At least 3 word variables (noun, verb, adjective, etc.)
> - Build at least one silly sentence
> - Use at least one string method"

**Provide word type hints on screen:**

| Type      | Examples                  |
| --------- | ------------------------- |
| Noun      | cat, pizza, robot, banana |
| Verb      | jumped, exploded, giggled |
| Adjective | purple, giant, smelly     |
| Place     | moon, bathroom, school    |

**Give 8-9 minutes. Walk around encouraging creativity.**

**Quick share:** Have 2-3 students read their sentences aloud.

---

### Part 7: Wrap-up & Homework (5 minutes)

#### Review Key Points

> "What an amazing lesson! Let's review your new superpowers..."

**Quick visual summary:**

| Superpower  | How to Use      | Example                                 |
| ----------- | --------------- | --------------------------------------- |
| Concatenate | `+`             | `"Hi" + " " + "There"`                  |
| SHOUT       | `.upper()`      | `"hello".upper()` → `HELLO`             |
| whisper     | `.lower()`      | `"HELLO".lower()` → `hello`             |
| Capitalize  | `.capitalize()` | `"hello".capitalize()` → `Hello`        |
| Title Case  | `.title()`      | `"hello world".title()` → `Hello World` |
| Count       | `len()`         | `len("Hello")` → `5`                    |
| Convert     | `str()`         | `str(10)` → `"10"`                      |

#### Introduce Homework

> "For homework, you're creating a BIGGER Mad Libs story! You need at least 5 word variables, 3 sentences, and at least 2 different string methods. Details are in your notes."

#### Preview Week 5

> "Next week is Practice & Play! We'll review everything from Lessons 1-4, do fun challenges, and create mini projects. It's like a coding party!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student concatenate strings with proper spacing?
- [ ] Can student apply `.upper()` and `.lower()`?
- [ ] Can student use `.capitalize()` and `.title()` appropriately?
- [ ] Does student understand that methods don't change the original?
- [ ] Can student use `len()` and `str()` correctly?

### Quick Check Questions

Ask throughout the lesson:

1. "What do we call joining strings together?" → Concatenation
2. "What symbol joins strings?" → The `+` sign
3. "How do we make text uppercase?" → `.upper()`
4. "Does `.upper()` change the original variable?" → No! It creates a new string
5. "What does `len()` count?" → Characters in a string

### Homework Assessment: "Mad Libs Story Generator"

| Criteria          | Exceeds (3)                 | Meets (2)                | Developing (1) |
| ----------------- | --------------------------- | ------------------------ | -------------- |
| **Variables**     | 7+ variables                | 5-6 variables            | Fewer than 5   |
| **Concatenation** | 4+ sentences, clean spacing | 3 sentences              | Fewer than 3   |
| **Methods**       | 3+ different methods        | 2 methods                | Fewer than 2   |
| **Creativity**    | Very silly/creative         | Meets requirements       | Minimal effort |
| **Formatting**    | Decorative title + borders  | Basic title              | Missing        |
| **Code quality**  | Perfect, well-organized     | Runs, meets requirements | Errors present |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide a Mad Libs template with blanks to fill in
- Focus on just `.upper()` and `.lower()` first
- Pair with confident peer for activities
- Reduce homework to 3 variables, 2 sentences

#### For Advanced Students

- Challenge: Chain multiple methods
- Introduce `.replace()` method
- Introduce `.center()`, `.ljust()`, `.rjust()`
- Have them create a "name badge generator" program

---

## ⚠️ Common Pitfalls & Solutions

### The Top Three Errors

#### 1. Forgetting Spaces in Concatenation

**Student writes:** `print("Hello" + name)` → `HelloAlex`

**How to help:**
> "The `+` glues things EXACTLY together. You need to add the space yourself: `"Hello " + name`"

#### 2. Missing Parentheses on Methods

**Student writes:** `print(name.upper)` → Prints something weird

**How to help:**
> "The parentheses ACTIVATE the method. Always: `name.upper()`"

#### 3. Expecting Methods to Change the Original

**Student writes:**

```python
name = "alex"
name.upper()
print(name)  # Still "alex"
```

**How to help:**
> "Methods create a NEW string. Save it: `name = name.upper()` or use directly: `print(name.upper())`"

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?** - Did method demos click? Was Mad Libs engaging?
2. **What needs improvement?** - Any concepts that need Week 5 review?
3. **Individual student notes:** - Who's ready for advanced challenges? Who needs extra help?

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review Lesson 3 homework (profile cards)
- [ ] Prepare method comparison demonstration
- [ ] Set up screen sharing
- [ ] Test all code examples

### During Class

- [ ] Welcome and showcase profile cards
- [ ] Concatenation with "space problem" demo
- [ ] All four string methods demonstrated
- [ ] Critical point: methods don't change original
- [ ] len() and str() functions
- [ ] Name Transformer activity
- [ ] Mad Libs creation time
- [ ] Homework explanation
- [ ] Preview Week 5 (Practice & Play)

### After Class

- [ ] Complete reflection notes
- [ ] Identify concepts needing Week 5 review
- [ ] Send parent communication
- [ ] Review Mad Libs homework as submitted

---

_KidsLearnAI Teacher Resources_
*www.kidslearnai.ca*
_For instructor support, contact: [instructor support email]_

---

_Remember: This is the last "new concept" lesson before the Week 5 review. Make sure students feel confident with string methods—they'll use them constantly. The Mad Libs activity should be FUN—creativity over perfection!_ 🚀
