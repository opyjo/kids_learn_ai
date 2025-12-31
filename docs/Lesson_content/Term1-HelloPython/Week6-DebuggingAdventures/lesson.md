---
title: "Debugging Adventures!"
description: "Learn to find and fix bugs in your code like a pro programmer - become a Bug Detective!"
difficulty: "beginner"
order_index: 6
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: true
starter_code: |
  # Debugging Practice!
  # Can you find and fix the bugs?

  # Bug 1: Missing quote - Uncomment and fix!
  # print("Hello World)

  # Bug 2: Wrong variable name - Uncomment and fix!
  # name = "Alex"
  # print(nane)

  # Bug 3: Capital P - Uncomment and fix!
  # Print("Hello")

  # Bug 4: Mixing types - Uncomment and fix!
  # age = 10
  # print("I am " + age + " years old")

  # Bug 5: Missing parentheses - Uncomment and fix!
  # print "Hello, World!"

  # Fix each bug one at a time and run the code!
  # Remember: Read the error message for clues!
class_activities: |
  ## 🎮 Class Activity: Bug Hunt!

  **Part 1: Partner Bug Challenge**
  1. Work in pairs
  2. Person A writes code with ONE bug hidden on purpose
  3. Person B tries to find and fix the bug
  4. Switch roles and repeat!

  **Part 2: Debug Dance Practice**
  When you see a bug, do the Debug Dance:
  STOP → READ → FIND → THINK → FIX → TEST

  **Part 3: Bug Detective Challenge**
  Race to fix the buggy code on the board!
  First team with working code wins!
take_home_assignment: |
  ## 📚 Homework: Debug Detective Challenge

  **Assignment:** Fix ALL the bugs in this code (there are 6 bugs total!)

  ```python
  # My Buggy Program - Fix me!
  naem = "Alex"
  Print("Hello, " + name)
  age = 10
  print("I am " + age + " years old)
  favoritecolor = "blue
  print("My favorite color is" favoriteColor)
  print("Goodbye!)
  ```

  **Requirements:**
  1. Find and fix all 6 bugs
  2. Make sure the code runs without errors
  3. Add a comment above each fix explaining what the bug was

  **Submit:** Share your fixed code on Trinket with your instructor.
---

# Term 1, Week 6: Debugging Adventures! 🔍

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 1 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Explain what bugs are and why they happen
- Read and understand Python error messages
- Identify different types of common bugs
- Use the "Debug Dance" strategy to fix problems
- Apply debugging techniques like print statements and comments
- Fix bugs in your own and others' code confidently

---

## 🤖 BrightByte's Welcome!

> _"Hey there, Bug Detective! 🔍 Today is one of my FAVORITE lessons because we're learning a superpower that EVERY programmer needs—DEBUGGING! Even I make mistakes when I'm coding. The difference between a frustrated programmer and a happy one isn't that one makes fewer mistakes—it's that one knows how to FIX them! Today, you're going to learn how to hunt down bugs and squash them like a pro. Let's go!"_

---

## 🐛 What is a Bug?

A **bug** is a mistake in your code that makes it not work the way you want. Bugs can:

- Stop your code from running at all
- Make your code do the wrong thing
- Show weird or unexpected results

### Where Did the Name "Bug" Come From?

This is a true story! 🦗

In 1947, a computer scientist named **Grace Hopper** was working on a giant computer called the Mark II at Harvard University. The computer stopped working, and when they investigated, they found an actual **moth** stuck inside the machine!

Grace taped the moth into her notebook and wrote: _"First actual case of bug being found."_

Ever since then, programmers have called code mistakes "bugs" and fixing them "debugging"!

### Fun Fact About Grace Hopper

Grace Hopper was one of the first computer programmers EVER and helped create the first programming languages. She was also a Navy Admiral! She's a true coding hero. 🌟

---

## 🔧 Your Bug Hunting Toolkit

Every Bug Detective needs the right tools. Here's your toolkit:

### Tool 1: Error Messages 📋

When Python finds a problem, it doesn't just crash—it tries to HELP you by showing an **error message**.

**Example:**

```python
print("Hello World)
```

**Error message:**

```
  File "main.py", line 1
    print("Hello World)
                      ^
SyntaxError: EOL while scanning string literal
```

**What this tells you:**

- **Line 1** - The problem is on line 1
- **The ^ arrow** - Points to where Python got confused
- **SyntaxError** - The type of error (grammar problem)
- **EOL while scanning string literal** - Python reached the End Of Line while still looking for the closing quote

**Translation:** "You started a string with `"` but never closed it!"

### Tool 2: Your Eyes 👀

Sometimes the best debugging tool is just reading your code carefully, line by line. Look for:

- Spelling mistakes (`prnt` instead of `print`)
- Missing punctuation (`"` or `)`)
- Wrong capitalization (`Print` instead of `print`)
- Mismatched quotes (`"Hello'`)
- Extra or missing spaces

### Tool 3: Comments for Testing 💬

You can use `#` to temporarily "turn off" lines of code. This helps you find which line has the problem!

```python
print("Line 1 works!")
# print("Line 2 - is this the problem?")
print("Line 3 works!")
```

If the code works when line 2 is commented out, the bug is in line 2!

### Tool 4: Print Statements for Investigation 🔎

Add extra `print()` statements to see what's happening inside your code:

```python
name = "Alex"
print("DEBUG: name =", name)  # Shows what's stored in name
```

### Tool 5: Taking a Break 😴

Sometimes the best debugging tool is to step away for a few minutes! Fresh eyes often spot bugs faster.

> _BrightByte says: "I once spent 2 hours looking for a bug. I took a break to recharge my circuits, came back, and found it in 10 seconds! Sometimes your brain just needs a rest!"_

---

## 📖 Reading Error Messages Like a Pro

Error messages might look scary, but they're actually trying to help! Let's learn to read them.

### Anatomy of an Error Message

```
  File "main.py", line 3
    print(name)
          ^
NameError: name 'nane' is not defined
```

| Part                         | What It Means                       |
| ---------------------------- | ----------------------------------- |
| `File "main.py"`             | Which file has the error            |
| `line 3`                     | Which line number to check          |
| `print(name)`                | Shows you the code near the problem |
| `^`                          | Points to where Python got confused |
| `NameError`                  | The TYPE of error                   |
| `name 'nane' is not defined` | Detailed explanation                |

### Common Error Types

| Error Type           | What It Usually Means           | Common Causes                                |
| -------------------- | ------------------------------- | -------------------------------------------- |
| **SyntaxError**      | Grammar mistake                 | Missing quotes, parentheses, colons          |
| **NameError**        | Python doesn't recognize a name | Typo in variable name, using before defining |
| **TypeError**        | Wrong type of data              | Mixing strings and numbers with `+`          |
| **IndentationError** | Spacing is wrong                | Extra or missing spaces at line start        |

---

## 🐛 The Most Common Bugs (And How to Fix Them!)

### Bug Type 1: SyntaxError - Missing Quote

**The Bug:**

```python
print("Hello World)
```

**The Error:**

```
SyntaxError: EOL while scanning string literal
```

**The Fix:**

```python
print("Hello World")
```

**How to Spot It:** Look for strings (text) and make sure every `"` has a matching `"`

**Memory Trick:** Quotes are like socks—they always come in pairs! 🧦

---

### Bug Type 2: SyntaxError - Mismatched Quotes

**The Bug:**

```python
print("Hello World')
```

**The Error:**

```
SyntaxError: EOL while scanning string literal
```

**The Fix:**

```python
print("Hello World")
# OR
print('Hello World')
```

**How to Spot It:** Make sure you use the SAME type of quote at the start and end

---

### Bug Type 3: NameError - Typo in Variable Name

**The Bug:**

```python
name = "Alex"
print(nane)  # Oops! "nane" instead of "name"
```

**The Error:**

```
NameError: name 'nane' is not defined
```

**The Fix:**

```python
name = "Alex"
print(name)
```

**How to Spot It:** Check that variable names are spelled EXACTLY the same everywhere

**Memory Trick:** Python is VERY picky about spelling—even one letter wrong and it's confused!

---

### Bug Type 4: NameError - Wrong Capitalization (Print vs print)

**The Bug:**

```python
Print("Hello")  # Capital P!
```

**The Error:**

```
NameError: name 'Print' is not defined
```

**The Fix:**

```python
print("Hello")  # lowercase p
```

**How to Spot It:** Remember that `print` is ALWAYS lowercase

**Memory Trick:** Python commands like `print`, `len`, and `str` are ALL lowercase!

---

### Bug Type 5: NameError - Using Variable Before Creating It

**The Bug:**

```python
print(name)  # Using name BEFORE creating it!
name = "Alex"
```

**The Error:**

```
NameError: name 'name' is not defined
```

**The Fix:**

```python
name = "Alex"  # Create FIRST
print(name)    # Use AFTER
```

**How to Spot It:** Make sure you create a variable BEFORE you try to use it

---

### Bug Type 6: TypeError - Mixing Strings and Numbers

**The Bug:**

```python
age = 10
print("I am " + age + " years old")
```

**The Error:**

```
TypeError: can only concatenate str (not "int") to str
```

**The Fix (Option 1 - Use commas):**

```python
age = 10
print("I am", age, "years old")
```

**The Fix (Option 2 - Convert to string):**

```python
age = 10
print("I am " + str(age) + " years old")
```

**How to Spot It:** If you see `TypeError` and you're using `+`, check if you're mixing text and numbers

**Memory Trick:** `+` is picky—it only joins things of the same type!

---

### Bug Type 7: SyntaxError - Missing Parentheses

**The Bug:**

```python
print "Hello"
```

**The Error:**

```
SyntaxError: Missing parentheses in call to 'print'
```

**The Fix:**

```python
print("Hello")
```

**How to Spot It:** `print` ALWAYS needs parentheses `()`

---

### Bug Type 8: SyntaxError - Missing Comma or Operator

**The Bug:**

```python
print("Hello" "World")  # Missing + or comma!
```

**The Fix:**

```python
print("Hello" + "World")  # Using +
# OR
print("Hello", "World")   # Using comma
```

---

### Bug Type 9: Forgetting Parentheses on Methods

**The Bug:**

```python
name = "alex"
print(name.upper)  # Missing ()!
```

**What Happens:** Prints something weird like `<built-in method upper...>`

**The Fix:**

```python
name = "alex"
print(name.upper())  # Don't forget the ()!
```

---

### Bug Type 10: Logic Bug - Code Runs But Does Wrong Thing

This is the trickiest bug because Python doesn't give you an error!

**The Bug:**

```python
name = "Alex"
print("Hello, name")  # Prints "name" not the variable!
```

**Output:** `Hello, name` (Not what we wanted!)

**The Fix:**

```python
name = "Alex"
print("Hello,", name)  # Now uses the variable
```

**How to Spot It:** The code runs, but the output isn't what you expected

---

## 💃 The Debug Dance!

When you encounter a bug, follow these steps. We call it the **Debug Dance**!

### Step 1: STOP 🛑

Don't panic! Bugs happen to EVERYONE. Take a breath.

### Step 2: READ 📖

Read the error message carefully. What type of error is it? What line number?

### Step 3: FIND 🔍

Go to the line number mentioned. Look at that line AND the line before it.

### Step 4: THINK 🤔

What could be wrong? Check for:

- Missing quotes or parentheses
- Spelling mistakes
- Wrong capitalization
- Mixing types

### Step 5: FIX 🔧

Make ONE change. Don't change multiple things at once—you won't know what fixed it!

### Step 6: TEST ▶️

Run your code again. Did it work? If not, go back to Step 2!

### The Debug Dance Song (Sing it!)

🎵 _"Stop, Read, Find, Think, Fix, Test!_  
_Stop, Read, Find, Think, Fix, Test!_  
_When you see a bug, don't stress—_  
_Do the Debug Dance, you're the best!"_ 🎵

> _BrightByte says: "I do the Debug Dance every time I hit an error! It helps me stay calm and think clearly. Try saying the steps out loud: STOP, READ, FIND, THINK, FIX, TEST!"_

---

## 🎯 Debug Challenges

Time to practice! Can you find and fix all the bugs?

### Challenge 1: One Bug 🌟

```python
print("Welcome to my program!)
```

<details>
<summary>Click for hint</summary>
Look at the quotation marks. Are they balanced?
</details>

<details>
<summary>Click for answer</summary>

**Bug:** Missing closing quote
**Fixed:**

```python
print("Welcome to my program!")
```

</details>

---

### Challenge 2: Two Bugs 🌟🌟

```python
nam = "Alex"
print("Hello, " + Name)
```

<details>
<summary>Click for hint</summary>
1. Check the variable name when it's created vs when it's used
2. Remember: Python cares about capitalization!
</details>

<details>
<summary>Click for answer</summary>

**Bug 1:** Variable is `nam` but should be `name` (or use `nam` in print)
**Bug 2:** `Name` should be `name` (lowercase)
**Fixed:**

```python
name = "Alex"
print("Hello, " + name)
```

</details>

---

### Challenge 3: Three Bugs 🌟🌟🌟

```python
Print("My favorite number is" + 7)
```

<details>
<summary>Click for hint</summary>
1. Check the capitalization of print
2. Are you missing a space somewhere?
3. Can you add a string and a number with +?
</details>

<details>
<summary>Click for answer</summary>

**Bug 1:** `Print` should be `print` (lowercase)
**Bug 2:** Missing space before the number
**Bug 3:** Can't use `+` with string and integer
**Fixed:**

```python
print("My favorite number is", 7)
# OR
print("My favorite number is " + str(7))
```

</details>

---

### Challenge 4: Four Bugs 🌟🌟🌟🌟

```python
color = Blue
Prnt("My favorite color is, color)
```

<details>
<summary>Click for hint</summary>
1. Is "Blue" a string? What's missing?
2. Check the spelling of print
3. Is color inside or outside the quotes?
4. Are the quotes balanced?
</details>

<details>
<summary>Click for answer</summary>

**Bug 1:** `Blue` needs quotes → `"Blue"`
**Bug 2:** `Prnt` should be `print`
**Bug 3:** `color` is inside the quotes, should be outside
**Bug 4:** Missing closing quote
**Fixed:**

```python
color = "Blue"
print("My favorite color is", color)
```

</details>

---

### Challenge 5: Five Bugs 🌟🌟🌟🌟🌟

```python
Name = "alex
age = 10
print("Hello, + name)
Print("I am " + age + "years old")
```

<details>
<summary>Click for hint</summary>
Line 1: Two issues with the string
Line 3: Something wrong with the concatenation and quotes
Line 4: Two issues - one with print, one with types
</details>

<details>
<summary>Click for answer</summary>

**Bug 1:** Missing closing quote on "alex"
**Bug 2:** `Name` vs `name` inconsistency
**Bug 3:** Missing closing quote in print, wrong concatenation
**Bug 4:** `Print` should be `print`
**Bug 5:** Can't use `+` with integer `age`
**Fixed:**

```python
name = "alex"
age = 10
print("Hello, " + name)
print("I am", age, "years old")
```

</details>

---

### Challenge 6: The Ultimate Debug Challenge 🏆

```python
# My Broken Program - Can you fix ALL the bugs?
favoriteAnimal = "dog
print("My favorite animal is a " + favoriteAnimal)
print(favoriteAnimal.upper)
numbr = 5
print("I have " + number + " pets)
Print("They are all great!)
print("The end)
```

**How many bugs can you find?** (There are at least 7!)

<details>
<summary>Click for answer</summary>

**Bugs found:**

1. Line 2: Missing closing quote on `"dog`
2. Line 4: Missing `()` on `.upper()`
3. Line 5: `numbr` vs `number` typo
4. Line 6: Mixing string and integer with `+`
5. Line 6: Missing closing quote
6. Line 7: `Print` should be `print`
7. Line 7: Missing closing quote
8. Line 8: Missing closing quote

**Fixed:**

```python
favoriteAnimal = "dog"
print("My favorite animal is a " + favoriteAnimal)
print(favoriteAnimal.upper())
number = 5
print("I have", number, "pets")
print("They are all great!")
print("The end")
```

</details>

---

## 💡 Pro Debugging Tips

### Tip 1: Read the Error Message First!

Don't just guess—the error message tells you:

- What TYPE of error
- What LINE it's on
- What Python EXPECTED

### Tip 2: Check the Line BEFORE the Error

Sometimes Python doesn't notice a bug until the NEXT line. If line 5 has an error, also check line 4!

**Example:**

```python
name = "Alex    # Bug is here (missing quote)
print(name)      # But error appears here!
```

### Tip 3: Use print() to See Inside Variables

If something isn't working, add print statements to see what's happening:

```python
name = "Alex"
print("DEBUG: name =", name)  # Shows: DEBUG: name = Alex

result = name.upper()
print("DEBUG: result =", result)  # Shows: DEBUG: result = ALEX
```

### Tip 4: Comment Out Code to Isolate the Bug

If you have lots of code, use `#` to disable sections until you find the problem:

```python
print("Step 1")  # This works
# print("Step 2")  # Testing...
# print("Step 3")  # Testing...
print("Step 4")  # This works
```

### Tip 5: Fix ONE Thing at a Time

If you change multiple things and it works, you won't know which change fixed it! Make one change, test, repeat.

### Tip 6: Ask "What Changed?"

If your code was working before, ask yourself: "What did I change?" The bug is probably in the new code!

### Tip 7: Take a Break

Sometimes staring at code makes it harder to see mistakes. Take a 5-minute break, then look again with fresh eyes!

### Tip 8: Explain It to Someone (or Something!)

Try explaining your code line by line to someone else, a pet, or even a rubber duck! Often you'll spot the bug while explaining it. This is called **Rubber Duck Debugging**! 🦆

---

## 🌟 Bugs Are NORMAL!

Here's a secret: **Every programmer in the world makes bugs.** Yes, even the ones who work at Google, Apple, and make your favorite games!

The difference between a frustrated programmer and a happy one isn't that one makes fewer mistakes—it's that one knows how to find and fix them!

### Mindset Shift:

| ❌ Beginner Mindset   | ✅ Expert Mindset                   |
| --------------------- | ----------------------------------- |
| "Oh no, I broke it!"  | "Oh cool, a puzzle to solve!"       |
| "I'm bad at this"     | "I'm learning something new"        |
| "This is annoying"    | "This is making me better"          |
| "Why won't it work?!" | "What is Python trying to tell me?" |

### Remember:

- Bugs are **normal**
- Bugs are **learning opportunities**
- Bugs make you a **better programmer**
- Finding bugs feels **amazing!** 🎉

> _BrightByte says: "I've fixed thousands of bugs in my code! Each one made me a better programmer. When you fix a bug, you should celebrate—you just solved a puzzle that most people couldn't! 🎊"_

---

## 📝 Key Points to Remember

### Bug Types Quick Reference

| Bug Type              | What It Looks Like | How to Fix               |
| --------------------- | ------------------ | ------------------------ |
| Missing quote         | `"Hello World)`    | Add the missing `"`      |
| Mismatched quotes     | `"Hello'`          | Use same quote type      |
| Typo in variable      | `nane` vs `name`   | Check spelling carefully |
| Wrong case            | `Print` vs `print` | Use lowercase            |
| Mixing types          | `"text" + 5`       | Use comma or `str()`     |
| Missing parens        | `print "hi"`       | Add `()` around message  |
| Missing method parens | `name.upper`       | Add `()` after method    |

### The Debug Dance

1. **STOP** - Don't panic!
2. **READ** - Read the error message
3. **FIND** - Go to the line number
4. **THINK** - What could be wrong?
5. **FIX** - Make ONE change
6. **TEST** - Run it again!

### Vocabulary

| Word              | Meaning                                    |
| ----------------- | ------------------------------------------ |
| **Bug**           | A mistake in code                          |
| **Debugging**     | Finding and fixing bugs                    |
| **Error message** | Python's explanation of what went wrong    |
| **SyntaxError**   | Grammar mistake in code                    |
| **NameError**     | Using an undefined name                    |
| **TypeError**     | Wrong type of data                         |
| **Comment**       | Text that Python ignores (starts with `#`) |

---

## 🏠 Homework: Debug Detective Challenge

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### The Assignment

Fix ALL the bugs in this code. There are **6 bugs total**!

```python
# My Buggy Program - Fix me!
naem = "Alex"
Print("Hello, " + name)
age = 10
print("I am " + age + " years old)
favoritecolor = "blue
print("My favorite color is" favoriteColor)
print("Goodbye!)
```

### Requirements

1. ✅ Find and fix **all 6 bugs**
2. ✅ Make sure the code **runs without errors**
3. ✅ Add a **comment above each fix** explaining what the bug was
4. ✅ The output should display properly

### Expected Output (After Fixing)

```
Hello, Alex
I am 10 years old
My favorite color is blue
Goodbye!
```

### Example of Adding Comments

```python
# BUG FIX: Changed "naem" to "name" (spelling error)
name = "Alex"
```

### Grading Rubric

| Criteria                   | Points        |
| -------------------------- | ------------- |
| All 6 bugs found and fixed | ⭐⭐⭐⭐      |
| Code runs without errors   | ⭐⭐          |
| Comments explain each bug  | ⭐⭐          |
| Output displays correctly  | ⭐⭐          |
| **Total**                  | **10 points** |

### How to Submit

1. Write your fixed code on Trinket
2. Save your work
3. Click the **Share** button
4. Copy the link
5. Share the link with your instructor

---

## 🌟 Next Lesson Preview

**Week 7: The Joke Machine!** 🎭

Next week, we start building our first BIG project—a **Joke Machine** that tells jokes! You'll use everything you've learned to create a program that makes people laugh.

**What you'll build:**

- A program that tells multiple jokes
- User interaction (coming soon!)
- Creative formatting and presentation

**Sneak peek:**

```python
print("🎭 THE JOKE MACHINE 🎭")
print("=" * 25)
print("")
print("Why did the programmer quit?")
print("")
print("...")
print("")
print("Because they didn't get arrays! 😂")
```

Get ready to make Python funny! 🎉

---

## 🎉 Congratulations, Bug Detective!

You've learned one of the most important skills in programming—DEBUGGING!

**You can now:**

- ✅ Understand what bugs are
- ✅ Read Python error messages
- ✅ Identify common bug types
- ✅ Use the Debug Dance strategy
- ✅ Apply pro debugging techniques
- ✅ Fix bugs with confidence!

> _BrightByte says: "You're officially a Bug Detective now! 🔍 Every bug you find and fix makes you a stronger programmer. Remember, bugs aren't failures—they're puzzles waiting to be solved. And you've got all the tools you need to solve them! I'm SO proud of you! See you next week when we build something FUNNY together!"_

---

## 📚 Extra Resources (Optional)

### Debug Practice

- Try writing code WITH bugs on purpose, then fixing them
- Challenge a friend to find bugs in your code
- Keep a "bug journal" of bugs you find and how you fixed them

### Fun Facts

- The word "bug" in computing is over 75 years old!
- Some companies pay "bug bounties" — money for finding bugs in their software
- Grace Hopper's moth is preserved at the Smithsonian Museum

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*  
_Instagram: @kids_learn_ai_

---

_Remember: Every programmer makes bugs. What makes you special is that now you know how to FIND and FIX them!_
