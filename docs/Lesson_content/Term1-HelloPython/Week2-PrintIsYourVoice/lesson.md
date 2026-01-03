---
title: "Print is Your Voice!"
description: "Learn to print multiple messages, use emojis, multiply and join text, and create cool patterns with print()!"
difficulty: "beginner"
order_index: 2
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: true
starter_code: |
  # Print is Your Voice!
  # Let's make Python say lots of things!

  print("Hello!")
  print("My name is ______")
  print("")
  print("Here's some fun:")
  print("Ha" * 3)
  print("-" * 20)
class_activities: |
  ## 🎮 Class Activity: Story Builder!

  1. Write a 4-line mini story using print()
  2. Add at least one emoji to your story (or use symbols like *, !, @, or # if emojis don't work on your device)
  3. Use print("") to add blank lines between paragraphs
  4. Use string multiplication (*) to create a decorative border
  5. Share your story with a partner!

  **Bonus Challenge:** Create a text box around your story title using + and *
  
  **Note:** If you can't type emojis, that's okay! Use symbols like *, !, @, #, or create patterns with text instead.
take_home_assignment: |
  ## 📚 Homework: My Mini Poem

  **Assignment:** Create a Python program that prints a short poem with decorative borders!

  **Requirements:**
  1. Include a title with a decorative border (use * or - multiplication)
  2. Write at least 6 print() statements total
  3. Include at least 4 lines of actual poem text
  4. Use at least 2 emojis somewhere in your poem (or use symbols/ASCII art if emojis don't work on your device)
  5. Use print("") for blank lines to separate sections
  6. Code must run without errors

  **Submit:** Share your Trinket link with your instructor.
  
  **Note:** If you can't type emojis on your device, you can use:
  - Symbols: *, !, @, #, $, %, ^, &, ~
  - ASCII art: ^_^, :), <3, or create patterns with text
  - The important part is being creative with your output!
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  When Alexa says "Playing your favorite song" or ChatGPT writes you an answer, that's output - exactly like your `print()` statements! Without output, AI couldn't talk to us at all.

  You're learning the same skill that makes AI communicate!
---

# Term 1, Week 2: Print is Your Voice! 📢

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 1 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Print multiple messages in sequence
- Create blank lines and spacing in your output
- Use emojis and special characters in your programs
- Multiply text to create patterns and decorations
- Combine text strings using the `+` operator
- Create decorative borders and boxes with code
- Use both single and double quotation marks correctly

---

## 🤖 BrightByte's Welcome!

> _"Hey, coder! Welcome back! 🎉 Last week you wrote your very first Python program—that's HUGE! Today we're going to become print() experts. By the end of this lesson, you'll be able to make Python say anything you want, create cool patterns, and even make art with text! Ready to level up?"_

---

## 📝 Review: The print() Command

Let's start with a quick review from last week!

### What We Learned

The `print()` command tells Python to **display a message on the screen**.

```python
print("Hello!")
```

### The Golden Rules (Remember These!)

| Rule                      | Example        | Why It Matters                  |
| ------------------------- | -------------- | ------------------------------- |
| Use lowercase `print`     | `print("Hi!")` | Python is case-sensitive        |
| Text goes in quotes       | `"Like this"`  | So Python knows it's text       |
| Parentheses come in pairs | `print()`      | Both opening and closing needed |
| Quotes come in pairs      | `"text"`       | Must match!                     |

### Quick Practice

Before we move on, try typing this to make sure you remember:

```python
print("I remember how to print!")
print("Let's learn more today!")
```

> _BrightByte says: "If you got that working, you're ready for today's adventure! If you had any trouble, that's okay—ask for help. Remember: asking questions is how all great coders learn!"_

---

## 📚 Printing Multiple Messages

Last week, we mostly printed one message at a time. But real programs have LOTS of `print()` statements! Let's explore how Python handles multiple lines of code.

### Python Reads Top to Bottom

Just like reading a book, Python reads your code from the **first line to the last line**, in order. Watch what happens:

```python
print("Line 1: Hello!")
print("Line 2: How are you?")
print("Line 3: I am learning Python!")
print("Line 4: This is awesome!")
```

**Output:**

```
Line 1: Hello!
Line 2: How are you?
I am learning Python!
This is awesome!
```

**Key Discovery:** Each `print()` command automatically creates a **new line**! You don't have to do anything special—Python handles it for you.

### The Order Matters!

What happens if we change the order?

```python
print("Third")
print("First")
print("Second")
```

**Output:**

```
Third
First
Second
```

Python doesn't care about the WORDS—it just runs the code in the order you wrote it. If you want things in a certain order, YOU have to put them in that order!

### How Many Lines Can We Print?

As many as you want! There's no limit. Here's a longer example:

```python
print("=================================")
print("       WELCOME TO MY PROGRAM      ")
print("=================================")
print("")
print("This program was created by: ME!")
print("Date: Today")
print("Purpose: To be awesome")
print("")
print("Thanks for running my code!")
print("=================================")
```

**Output:**

```
=================================
       WELCOME TO MY PROGRAM
=================================

This program was created by: ME!
Date: Today
Purpose: To be awesome

Thanks for running my code!
=================================
```

Look at that—it looks like a real program with a header and everything!

---

## 🎨 Making Python Creative

One of the coolest things about `print()` is that you can put ANYTHING inside those quotation marks. Let's explore!

### Emojis Work! (But Symbols Work Too!)

Yes, you can use emojis in Python! They work just like regular text. **But don't worry if you can't type emojis on your device** — symbols work just as well and are just as fun!

**Examples with emojis (if your device supports them):**

```python
print("I love coding! 💻")
print("Python is amazing! 🐍")
print("Let's blast off! 🚀")
print("Feeling happy! 😊")
print("Pizza time! 🍕")
```

**Examples with symbols (works on ALL devices):**

```python
print("I love coding! <3")
print("Python is amazing! *")
print("Let's blast off! ^")
print("Feeling happy! :)")
print("Pizza time! @")
```

**Both work great!** Use whatever is easiest for you.

**How to add emojis (if your device supports them):**

- **Windows:** Press `Windows key + .` (period) to open emoji picker
- **Mac:** Press `Cmd + Control + Space` to open emoji picker
- **Chromebook:** Press `Search/Launcher + Shift + Space`

**Can't type emojis? No problem!** Use symbols instead:
- `*` for stars
- `!` for excitement
- `@` for fun
- `#` for hashtags
- `^` for arrows
- `:)` or `^_^` for faces
- `<3` for hearts
- Or any other symbol you like!

> _BrightByte says: "I LOVE emojis when I can use them, but symbols are awesome too! My favorite symbol is * because it looks like a star! What's your favorite symbol?"_

### Numbers as Text

You can include numbers in your printed text:

```python
print("I am 10 years old")
print("My favorite number is 7")
print("There are 24 hours in a day")
print("A year has 365 days")
print("2 + 2 = 4")
```

**Important Note:** When numbers are inside quotation marks, Python treats them as TEXT, not actual numbers. We'll learn about real numbers and math in a future lesson!

### Silly and Creative Sentences

The best part? You can print ANYTHING your imagination comes up with!

**Examples with emojis (if available):**

```python
print("The purple elephant danced on the moon! 🌙")
print("My homework was eaten by a ninja robot! 🤖")
print("A penguin wearing a top hat sang opera! 🎩🐧")
print("The pizza ordered a human for delivery! 🍕")
print("My goldfish learned to play piano! 🐟🎹")
```

**Examples with symbols (works everywhere!):**

```python
print("The purple elephant danced on the moon! *")
print("My homework was eaten by a ninja robot! @")
print("A penguin wearing a top hat sang opera! ^_^")
print("The pizza ordered a human for delivery! #")
print("My goldfish learned to play piano! <3")
```

Being silly with code is a GREAT way to practice and have fun! **Remember: emojis are fun, but symbols are just as creative!**

### Punctuation and Special Characters

You can use all kinds of punctuation and symbols:

```python
print("Hello! How are you?")
print("Wow!!!")
print("Hmm... let me think...")
print("Ready? Set? Go!")
print("$100 = one hundred dollars")
print("50% off sale!")
print("Email: example@email.com")
print("Hashtag: #Coding4Kids")
```

---

## ✨ Print Tricks - Level Up Your Skills!

Now let's learn some awesome tricks that will make your programs look amazing!

### Trick 1: Creating Empty Lines

Sometimes you want to add space between your messages. Use empty quotation marks to create a blank line:

```python
print("Welcome to my program!")
print("")
print("This line has a space above it.")
print("")
print("")
print("This line has TWO spaces above it!")
```

**Output:**

```
Welcome to my program!

This line has a space above it.


This line has TWO spaces above it!
```

**Why is this useful?**

- Makes your output easier to read
- Separates different sections
- Creates visual breaks (like paragraphs in a story)

### Trick 2: Repeating Text with \*

Here's a SUPER cool trick! You can multiply text using the `*` symbol:

```python
print("Ha" * 3)
print("Ho" * 5)
print("-" * 20)
print("=" * 30)
print("*" * 10)  # Stars work great! (or use "🎉" * 10 if emojis work on your device)
```

**Output:**

```
HaHaHa
HoHoHoHoHo
--------------------
==============================
**********
```

**How it works:**

- `"Ha" * 3` means "repeat 'Ha' three times"
- `"-" * 20` means "repeat the dash twenty times"
- `"*" * 10` means "repeat the star ten times"
- The number tells Python HOW MANY times to repeat!

**Tip:** You can use any symbol or emoji with multiplication! Try `"!" * 5` or `"@" * 8` or `"^" * 15` — they all work great!

**Try these:**

```python
print("Python! " * 3)
print("⭐" * 5)
print("~" * 40)
print("La" * 8)
```

> _BrightByte says: "This trick is like having a copy machine built into Python! Instead of typing the same thing over and over, just multiply it. I wish I could multiply pizza the same way... 🍕 \* 100 would be amazing!"_

### Trick 3: Combining Text with +

You can join pieces of text together using the `+` symbol:

```python
print("Hello" + "World")
print("Hello " + "World")  # Notice the space!
print("My name is " + "Alex")
```

**Output:**

```
HelloWorld
Hello World
My name is Alex
```

**Important:** The `+` doesn't add spaces automatically. If you want a space, you need to include it inside the quotes!

**More examples:**

```python
print("I " + "love " + "Python!")
print("Coding " + "is " + "awesome!")
print("🐍" + " + " + "💻" + " = " + "❤️")
```

**Output:**

```
I love Python!
Coding is awesome!
🐍 + 💻 = ❤️
```

### Trick 4: Combining + and \* Together!

Now let's get REALLY creative by using both tricks together:

```python
print("+" + "-" * 20 + "+")
print("|" + " " * 20 + "|")
print("|" + "    Hello World!    " + "|")
print("|" + " " * 20 + "|")
print("+" + "-" * 20 + "+")
```

**Output:**

```
+--------------------+
|                    |
|    Hello World!    |
|                    |
+--------------------+
```

Whoa! We made a BOX! 📦

**Let's break it down:**

- `"+" + "-" * 20 + "+"` = a plus sign, then 20 dashes, then another plus sign
- `"|" + " " * 20 + "|"` = a pipe, then 20 spaces, then another pipe
- The middle line has our message centered in the box

### Trick 5: Making Patterns

You can create all sorts of patterns:

**A Simple Line Separator:**

```python
print("=" * 40)
print("        CHAPTER 1: THE BEGINNING        ")
print("=" * 40)
```

**A Decorative Header (with symbols - works everywhere!):**

```python
print("*" * 15)
print("   Welcome to My Program!   ")
print("*" * 15)
```

Or with emojis (if your device supports them):
```python
print("✨" * 15)
print("   Welcome to My Program!   ")
print("✨" * 15)
```

**A Warning Box (with symbols):**

```python
print("!" * 10)
print("  WARNING: Awesome code ahead!  ")
print("!" * 10)
```

Or with emojis:
```python
print("⚠️" * 10)
print("  WARNING: Awesome code ahead!  ")
print("⚠️" * 10)
```

**Growing Stars (with symbols - works everywhere!):**

```python
print("*")
print("**")
print("***")
print("****")
print("*****")
```

Or using multiplication:
```python
print("*" * 1)
print("*" * 2)
print("*" * 3)
print("*" * 4)
print("*" * 5)
```

**Note:** You can use `*` for stars, `!` for excitement, `@` for fun, or any symbol you like! Emojis are optional and fun, but symbols work just as well!

---

## 🔤 Single vs Double Quotes

You might have noticed that sometimes we use `"double quotes"` and sometimes `'single quotes'`. Here's the deal:

### Both Work the Same!

```python
print("Hello with double quotes!")
print('Hello with single quotes!')
```

**Output:**

```
Hello with double quotes!
Hello with single quotes!
```

Python doesn't care which one you use—just be consistent!

### The Matching Rule

Whatever quote you START with, you must END with the same type:

```python
# ✅ Correct - both double
print("Hello World")

# ✅ Correct - both single
print('Hello World')

# ❌ Wrong - mismatched!
print("Hello World')

# ❌ Wrong - mismatched!
print('Hello World")
```

### When Each Type is Useful

**Use double quotes when your text has an apostrophe:**

```python
print("I'm learning Python!")  # The apostrophe doesn't confuse Python
print("It's a beautiful day!")
print("Don't worry, be happy!")
```

**Use single quotes when your text has quotation marks:**

```python
print('She said "Hello" to me.')
print('The sign read "Welcome"')
```

**What if you need both?** That's more advanced—we'll learn about that later!

---

## 🎯 Practice Challenges

Let's put everything together with some fun challenges!

### Challenge 1: Three Facts About Me

Print 3 interesting facts about yourself. Use emojis or symbols!

**Example with symbols (works everywhere!):**

```python
print("=== Three Facts About Me ===")
print("")
print("1. My name is Alex :)")
print("2. I love pizza more than anything @")
print("3. My dog's name is Max <3")
```

**Example with emojis (if your device supports them):**

```python
print("=== Three Facts About Me ===")
print("")
print("1. My name is Alex 👋")
print("2. I love pizza more than anything 🍕")
print("3. My dog's name is Max 🐕")
```

**Your turn:** Change the facts to be about YOU! Use emojis if you can, or symbols if you can't — both are great!

### Challenge 2: Favorite Things List

Create a list of your 5 favorite things with emojis/symbols and decorations:

**With symbols (works everywhere!):**

```python
print("*" * 20)
print("   MY FAVORITE THINGS   ")
print("*" * 20)
print("")
print("1. Video games @")
print("2. Ice cream #")
print("3. My best friend <3")
print("4. Swimming ^")
print("5. Reading comics !")
print("")
print("*" * 20)
```

**With emojis (if your device supports them):**

```python
print("⭐" * 20)
print("   MY FAVORITE THINGS   ")
print("⭐" * 20)
print("")
print("1. Video games 🎮")
print("2. Ice cream 🍦")
print("3. My best friend 👫")
print("4. Swimming 🏊")
print("5. Reading comics 📚")
print("")
print("⭐" * 20)
```

### Challenge 3: Silly Story

Write a 6-line silly story. The sillier, the better!

**With symbols (works everywhere!):**

```python
print("=" * 30)
print("THE ADVENTURE OF CAPTAIN PIZZA")
print("=" * 30)
print("")
print("Once upon a time, a pizza learned to fly. @ ^")
print("It soared over the mountains of cheese. *")
print("A hungry dragon spotted it in the sky! #")
print("'Come back here!' roared the dragon.")
print("But the pizza was too fast. Zoom! ~")
print("The End. *")
print("")
```

**With emojis (if your device supports them):**

```python
print("=" * 30)
print("THE ADVENTURE OF CAPTAIN PIZZA")
print("=" * 30)
print("")
print("Once upon a time, a pizza learned to fly. 🍕✈️")
print("It soared over the mountains of cheese. 🧀⛰️")
print("A hungry dragon spotted it in the sky! 🐉")
print("'Come back here!' roared the dragon.")
print("But the pizza was too fast. Zoom! 💨")
print("The End. 🎬")
print("")
```
print("=" * 30)
```

### Challenge 4: The Box Challenge

Create a box around a message of your choice:

```python
print("+" + "-" * 24 + "+")
print("|" + " " * 24 + "|")
print("|    YOUR MESSAGE HERE    |")
print("|" + " " * 24 + "|")
print("+" + "-" * 24 + "+")
```

**Hint:** Count your characters carefully! The message should fit perfectly in the box.

### Challenge 5: ASCII Art

Try creating a simple picture using just text:

**Heart:**

```python
print("  ❤️ ❤️  ")
print(" ❤️❤️❤️❤️❤️ ")
print("  ❤️❤️❤️  ")
print("   ❤️   ")
```

**House:**

```python
print("    /\\    ")
print("   /  \\   ")
print("  /    \\  ")
print(" /______\\ ")
print(" |  []  | ")
print(" |      | ")
print(" |______|  ")
```

**Simple Robot:**

```python
print(" [===] ")
print("  | |  ")
print(" /| |\\ ")
print("  | |  ")
print(" _| |_ ")
```

---

## 🔧 Common Mistakes and How to Fix Them

### Mistake 1: Mixing Quote Types

```python
# ❌ Wrong - started with " but ended with '
print("Hello!')

# ❌ Wrong - started with ' but ended with "
print('Hello!")

# ✅ Correct - matching quotes
print("Hello!")
print('Hello!')
```

**How to fix:** Always check that your opening and closing quotes match!

### Mistake 2: Forgetting Quotes Around Text

```python
# ❌ Wrong - no quotes
print(Hello World)

# ✅ Correct - text in quotes
print("Hello World")
```

**Error message you might see:** `NameError: name 'Hello' is not defined`

### Mistake 3: Spaces Inside vs Outside Quotes

```python
# These are DIFFERENT:
print("Hello World")   # Space INSIDE quotes ✅
print("Hello" "World") # Two separate strings, no space ❌
print("Hello" + "World") # Joined, no space (outputs: HelloWorld)
print("Hello " + "World") # Joined WITH space ✅
```

### Mistake 4: Multiplying Without Quotes

```python
# ❌ Wrong - can't multiply a word without quotes
print(Ha * 3)

# ✅ Correct - text in quotes
print("Ha" * 3)
```

### Mistake 5: Adding Instead of Multiplying

```python
# This WON'T repeat text:
print("Ha" + 3)  # ❌ Error! Can't add text and a number

# This WILL repeat text:
print("Ha" * 3)  # ✅ Outputs: HaHaHa
```

**Error message you might see:** `TypeError: can only concatenate str (not "int") to str`

### Mistake 6: Forgetting the Print

```python
# ❌ Wrong - this won't display anything!
"Hello World"

# ✅ Correct - need print() to show it
print("Hello World")
```

---

## 📝 Key Points to Remember

### Summary Card

| Concept         | Example                  | What It Does           |
| --------------- | ------------------------ | ---------------------- |
| Basic print     | `print("Hi")`            | Shows "Hi"             |
| Multiple prints | Multiple `print()` lines | Each gets its own line |
| Empty line      | `print("")`              | Creates blank line     |
| Repeat text     | `"Ha" * 3`               | Shows "HaHaHa"         |
| Join text       | `"Hi" + "There"`         | Shows "HiThere"        |
| Symbols/Emojis  | `print("*")` or `print("🎉")` | Both work great!       |
| Single quotes   | `print('Hi')`            | Same as double         |
| Double quotes   | `print("Hi")`            | Same as single         |

### Quick Reference

```python
# Basic printing
print("Your message here")

# Multiple lines
print("Line 1")
print("Line 2")

# Blank line
print("")

# Repeat text
print("-" * 20)        # Twenty dashes
print("*" * 5)         # Five stars (or use "🎉" * 5 if emojis work)

# Join text
print("Hello " + "World")  # Hello World

# Combine tricks
print("+" + "-" * 10 + "+")  # +----------+
```

### Vocabulary Words

| Word                | Definition                        | Example                 |
| ------------------- | --------------------------------- | ----------------------- |
| **String**          | Text inside quotation marks       | `"Hello"` is a string   |
| **Concatenation**   | Joining strings together with `+` | `"Hi" + "There"`        |
| **Multiplication**  | Repeating a string with `*`       | `"Ha" * 3`              |
| **Output**          | What Python displays on screen    | The result of `print()` |
| **Quotation marks** | Symbols that wrap around text     | `"` or `'`              |
| **Blank line**      | An empty line in output           | `print("")` creates one |
| **Emoji**           | Small pictures in text            | 🎉 🐍 💻                |

---

## 🏠 Homework: My Mini Poem

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### The Assignment

Create a Python program that prints a short poem! It can be a real poem, a silly poem, or something completely made up.

### Requirements

Your program must:

1. ✅ Have a **title** with a decorative border (use `*` or `-` multiplication)
2. ✅ Include **at least 6 print() statements**
3. ✅ Have **at least 4 lines** of actual poem text
4. ✅ Use **at least 2 emojis** somewhere in the poem
5. ✅ Use **print("") for blank lines** to separate sections
6. ✅ Run without any errors

### Poem Ideas

Not sure what to write about? Here are some ideas:

- **My Pet** - A poem about a real or imaginary pet
- **My Favorite Food** - Ode to pizza, ice cream, or tacos!
- **The Silly Day** - A poem where everything goes wrong in funny ways
- **Robot Dreams** - What does a robot dream about?
- **Seasons** - Your favorite season and why you love it
- **Superpower** - What superpower would you want and why?

### Example Poem

```python
# My Mini Poem
# By: BrightByte

print("*" * 30)
print("      THE CODING ROBOT       ")
print("*" * 30)
print("")
print("A little robot learned to code, 🤖")
print("It typed and typed all day.")
print("With every line of Python written,")
print("Bugs would run away! 🐛💨")
print("")
print("Now the robot builds cool games,")
print("And apps for you and me.")
print("If a robot can learn to code,")
print("Then so can we! 🎉")
print("")
print("*" * 30)
print("        THE END 🌟           ")
print("*" * 30)
```

### Grading Rubric

| Criteria                     | Points        |
| ---------------------------- | ------------- |
| Has a decorated title        | ⭐⭐          |
| At least 6 print statements  | ⭐⭐          |
| At least 4 lines of poem     | ⭐⭐          |
| Uses at least 2 emojis       | ⭐            |
| Uses blank lines for spacing | ⭐            |
| Code runs without errors     | ⭐⭐          |
| **Total**                    | **10 points** |

### Bonus Challenges (Optional)

- Create a decorative box around your entire poem using `+`, `-`, and `|`
- Make an ASCII art picture that goes with your poem
- Use text multiplication creatively within the poem itself

### How to Submit

1. Write your code on Trinket
2. Save your work (click the 💾 Save button)
3. Click the **Share** button
4. Copy the link
5. Share the link with your instructor

---

## 🌟 Next Lesson Preview

**Week 3: Variables - Storing Information**

Next week, we're going to learn something AMAZING—how to make Python REMEMBER things! Instead of just printing messages, we'll store information in **variables**. Think of variables like labeled boxes where you can put information and use it later.

**Sneak peek:**

```python
name = "Alex"
age = 10
print("Hello, my name is " + name)
print("I am learning Python!")
```

See how we stored "Alex" and then used it later? That's the power of variables!

---

## 🎉 Congratulations!

You're now a print() expert! Look at everything you learned today:

- ✅ Printing multiple messages in sequence
- ✅ Creating blank lines with `print("")`
- ✅ Using emojis in your code
- ✅ Multiplying text with `*`
- ✅ Joining text with `+`
- ✅ Making patterns and boxes
- ✅ Using single and double quotes

> _BrightByte says: "WOW! You're getting SO good at this! You've gone from printing one simple message to creating poems, patterns, and even ASCII art! That's incredible progress. Keep practicing, keep experimenting, and remember—the sillier your programs, the more fun you're having! See you next week! 🚀"_

---

## 📚 Extra Resources (Optional)

Want to practice more? Try these:

- **Emoji Finder:** getemoji.com - Copy and paste emojis for your code!
- **ASCII Art:** asciiart.eu - Get inspired by text art
- **Trinket Challenges:** trinket.io/challenges - More coding practice

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Remember: every coder gets stuck sometimes. Ask your instructor, your parents, or a friend for help. That's what real programmers do!_
