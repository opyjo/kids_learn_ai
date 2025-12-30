# Term 1, Week 6: Debugging Adventures! 🔍

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old

---

## 🎯 What You'll Learn Today

- What bugs are and where they come from
- How to read error messages
- How to find and fix bugs
- Debugging strategies

---

## What is a Bug? 🐛

A **bug** is a mistake in your code that makes it not work correctly.

### Where Did the Name Come From?

In 1947, a computer scientist named Grace Hopper found an actual moth stuck in a computer! She taped it in her notebook and wrote "First actual case of bug being found." Since then, we call code mistakes "bugs"!

---

## Meet Your Bug Hunting Tools 🔧

### Tool 1: Error Messages

When Python finds a problem, it tells you! Error messages are like clues.

```python
print("Hello)
```

**Error:**
```
SyntaxError: EOL while scanning string literal
```

Translation: "You started a string with `"` but never closed it!"

### Tool 2: Your Eyes

Read your code carefully, line by line. Look for:
- Spelling mistakes
- Missing punctuation
- Wrong capitalization

### Tool 3: Comments

Use `#` to disable code and test:

```python
print("Line 1")
# print("Line 2")  # testing if this is the problem
print("Line 3")
```

---

## Common Bugs and How to Fix Them

### Bug 1: Syntax Error - Missing Quote

```python
# ❌ Bug
print("Hello World)

# ✅ Fixed
print("Hello World")
```

**Clue:** Look for the red squiggly line!

### Bug 2: Name Error - Typo in Variable Name

```python
# ❌ Bug
name = "Alex"
print(nane)  # Oops! "nane" instead of "name"

# ✅ Fixed
name = "Alex"
print(name)
```

**Clue:** `NameError: name 'nane' is not defined`

### Bug 3: Syntax Error - Wrong Case

```python
# ❌ Bug
Print("Hello")  # Capital P doesn't work!

# ✅ Fixed
print("Hello")
```

**Clue:** `NameError: name 'Print' is not defined`

### Bug 4: Type Error - Mixing Types

```python
# ❌ Bug
age = 10
print("I am " + age)  # Can't add string and number!

# ✅ Fixed (Option 1: use comma)
print("I am", age)

# ✅ Fixed (Option 2: convert to string)
print("I am " + str(age))
```

**Clue:** `TypeError: can only concatenate str (not "int") to str`

### Bug 5: Missing Parentheses

```python
# ❌ Bug
print "Hello"

# ✅ Fixed
print("Hello")
```

---

## The Debug Dance 🕺

When you find a bug, do the Debug Dance:

1. **STOP** - Don't panic!
2. **READ** - Read the error message
3. **FIND** - Find the line with the problem
4. **THINK** - What could be wrong?
5. **FIX** - Make ONE change
6. **TEST** - Run the code again

---

## Debug Challenge: Can You Find the Bugs?

### Challenge 1 (1 bug)
```python
print("Welcome to Python!)
```

### Challenge 2 (2 bugs)
```python
nam = "Alex"
print("Hello, " + Name)
```

### Challenge 3 (3 bugs)
```python
Print("My favorite number is" + 7)
```

### Challenge 4 (4 bugs)
```python
color = Blue
Prnt("My favorite color is, color)
```

---

## Pro Debugging Tips 💡

### Tip 1: Read Error Messages!
They tell you:
- What kind of error
- What line it's on
- What Python expected

### Tip 2: Check the Line BEFORE
Sometimes the bug is on the line BEFORE where Python complains!

### Tip 3: Use print() to Debug
Add print statements to see what's happening:

```python
name = "Alex"
print("DEBUG: name =", name)  # See what's stored
```

### Tip 4: Ask "What Changed?"
If code worked before, what did you change?

---

## Bugs Are Normal! 🌟

Every programmer gets bugs - even professionals! The difference is:

- Beginners: "Oh no, I broke it!"
- Experts: "Oh cool, a puzzle to solve!"

Debugging is a **skill**. The more you practice, the better you get!

---

## What's Next?

Next week, we start building our first BIG project - the **Joke Machine**! 🎭 Get ready to make Python tell jokes!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*

