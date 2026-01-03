---
title: "Project - Joke Machine!"
description: "Build your first complete Python project - a program that tells jokes using everything you've learned!"
difficulty: "beginner"
order_index: 7
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: true
starter_code: |
  # ================================
  # THE JOKE MACHINE
  # By: [Your Name]
  # ================================

  # === WELCOME SCREEN ===
  print("🎭" * 15)
  print("")
  print("     WELCOME TO THE JOKE MACHINE!")
  print("")
  print("🎭" * 15)
  print("")
  print("Get ready to laugh! Here come the jokes...")
  print("")

  # === STORE YOUR JOKES ===
  joke1_setup = "Why don't scientists trust atoms?"
  joke1_punchline = "Because they make up everything!"

  joke2_setup = "What do you call a fish without eyes?"
  joke2_punchline = "A fsh!"

  joke3_setup = "YOUR THIRD JOKE HERE"
  joke3_punchline = "YOUR PUNCHLINE HERE"

  # === TELL THE JOKES ===
  print("-" * 30)
  print("Joke #1:")
  print(joke1_setup)
  print("...")
  print(joke1_punchline)
  print("😂" * 3)
  print("")

  # Add Joke #2 and Joke #3 below!

  # === ENDING ===
  print("-" * 30)
  print("Thanks for laughing with me!")
  print("🎭 THE END 🎭")
class_activities: |
  ## 🎮 Class Activity: Joke Workshop!

  **Part 1: Joke Brainstorm (10 min)**
  - Work in small groups
  - Brainstorm as many jokes as you can
  - Write them down (setup and punchline)

  **Part 2: Pick Your Favorites (5 min)**
  - Each person picks their 3-5 favorite jokes
  - Make sure you know the setup AND punchline

  **Part 3: Build Together (20 min)**
  - Start building your Joke Machine
  - Help neighbors with bugs
  - Test your code frequently!

  **Part 4: Preview & Polish (10 min)**
  - Run your program
  - Fix any bugs
  - Add extra decorations if time permits
take_home_assignment: |
  ## 📚 Homework: Complete Your Joke Machine

  **Assignment:** Finish and polish your Joke Machine for the showcase!

  **Requirements:**
  1. Welcome message with decorative borders
  2. At least 3 jokes stored in variables
  3. Each joke has setup, pause (...), and punchline
  4. Visual separators between jokes
  5. Laughing emojis after each punchline
  6. Ending message thanking the audience
  7. NO BUGS - code runs perfectly!

  **Bonus Points:**
  - Add a 4th or 5th joke
  - Create a themed joke collection
  - Add creative ASCII art
  - Use string methods for effects

  **Submit:** Share your Trinket link. Be ready to present at the Week 8 Showcase Party!
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Chatbots and AI assistants store jokes and responses in variables, just like your Joke Machine! When you ask Alexa to tell a joke, she picks from stored jokes - same idea as your program.

  You built something that works like real AI!
---

# Term 1, Week 7: Project - Joke Machine! 🎭

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 1 of 8 | **Week:** 7 of 8

---

## 🎯 What We're Building

Today you start building your **first complete Python project**: The Joke Machine!

This is YOUR chance to show off everything you've learned in Term 1:

- ✅ Print statements
- ✅ Patterns and decorations
- ✅ Variables
- ✅ String methods
- ✅ Concatenation
- ✅ Debugging skills

By the end of today, you'll have a working program that tells jokes!

---

## 🤖 BrightByte's Project Pep Talk!

> _"This is it—your FIRST real project! 🎉 I'm SO excited for you! You've spent 6 weeks learning individual skills, and now you get to put them ALL together to create something amazing. Building projects is what REAL programmers do every day. Don't worry if it feels challenging—that's how you know you're growing! I'll be right here cheering you on. Let's make Python FUNNY! 🎭"_

---

## 📋 Project Overview

### What is a Joke Machine?

A Joke Machine is a program that:

1. **Welcomes** the user with a fun introduction
2. **Tells jokes** with proper setup and punchlines
3. **Uses variables** to store the jokes
4. **Looks polished** with decorations and formatting
5. **Ends nicely** with a closing message

### Example Output

Here's what a finished Joke Machine looks like when you run it:

```
🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭

     WELCOME TO THE JOKE MACHINE!

          Created by Alex

🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭

Get ready to laugh! Here come the jokes...

==============================

📢 Joke #1:

Why don't scientists trust atoms?

...

Because they make up everything!

😂😂😂

==============================

📢 Joke #2:

What do you call a fish without eyes?

...

A fsh!

🤣🤣🤣

==============================

📢 Joke #3:

Why did the scarecrow win an award?

...

Because he was outstanding in his field!

😆😆😆

==============================

Thanks for laughing with me!
Run me again whenever you need a giggle!

🎭 THE END 🎭
```

Pretty cool, right? Let's build it step by step!

---

## 🎪 Step 1: Plan Your Jokes

Before you write ANY code, you need to collect your jokes!

### The Anatomy of a Joke

Every joke has two parts:

| Part          | What It Is                                      | Example                             |
| ------------- | ----------------------------------------------- | ----------------------------------- |
| **Setup**     | The question or beginning that creates suspense | "Why don't scientists trust atoms?" |
| **Punchline** | The funny answer that surprises you!            | "Because they make up everything!"  |

### Your Joke Collection

You need **at least 3 jokes**. Here are some classics to get you started:

**Classic Jokes:**

| #   | Setup                                  | Punchline                                |
| --- | -------------------------------------- | ---------------------------------------- |
| 1   | Why don't scientists trust atoms?      | Because they make up everything!         |
| 2   | What do you call a fish without eyes?  | A fsh!                                   |
| 3   | Why did the scarecrow win an award?    | Because he was outstanding in his field! |
| 4   | What do you call a bear with no teeth? | A gummy bear!                            |
| 5   | Why don't eggs tell jokes?             | They'd crack each other up!              |

**Animal Jokes:**

| #   | Setup                                       | Punchline                                            |
| --- | ------------------------------------------- | ---------------------------------------------------- |
| 1   | What do you call a sleeping dinosaur?       | A dino-snore!                                        |
| 2   | Why do cows wear bells?                     | Because their horns don't work!                      |
| 3   | What do you call a fish that wears a crown? | A king fish!                                         |
| 4   | Why do seagulls fly over the sea?           | Because if they flew over the bay, they'd be bagels! |

**Food Jokes:**

| #   | Setup                                          | Punchline                               |
| --- | ---------------------------------------------- | --------------------------------------- |
| 1   | What did the grape say when it got stepped on? | Nothing, it just let out a little wine! |
| 2   | Why did the banana go to the doctor?           | Because it wasn't peeling well!         |
| 3   | What do you call a fake noodle?                | An impasta!                             |
| 4   | Why did the cookie go to the doctor?           | Because it felt crummy!                 |

**School/Learning Jokes:**

| #   | Setup                                       | Punchline                                        |
| --- | ------------------------------------------- | ------------------------------------------------ |
| 1   | Why was the math book sad?                  | Because it had too many problems!                |
| 2   | What's a computer's favorite snack?         | Microchips!                                      |
| 3   | Why did the student eat their homework?     | Because the teacher said it was a piece of cake! |
| 4   | What do you call a teacher who never farts? | A private tutor!                                 |

### ✏️ Write Down YOUR Jokes

Pick at least 3 jokes you want to use. Write them here:

**My Joke #1:**

- Setup: ****************\_****************
- Punchline: ****************\_****************

**My Joke #2:**

- Setup: ****************\_****************
- Punchline: ****************\_****************

**My Joke #3:**

- Setup: ****************\_****************
- Punchline: ****************\_****************

**Bonus Joke #4 (optional):**

- Setup: ****************\_****************
- Punchline: ****************\_****************

> _BrightByte says: "You can use the jokes above, find your own, or even make up brand new ones! The funnier YOUR jokes are, the more fun your project will be!"_

---

## 🎨 Step 2: Create the Welcome Screen

Every good program has a welcome screen! This is the first thing users see.

### Basic Welcome Screen

```python
# ================================
# THE JOKE MACHINE
# By: [Your Name]
# ================================

print("🎭" * 15)
print("")
print("     WELCOME TO THE JOKE MACHINE!")
print("")
print("🎭" * 15)
print("")
print("Get ready to laugh! Here come the jokes...")
print("")
```

### Making It Personal

Add your name to make it YOUR program:

```python
# Store your name in a variable
creator_name = "Alex"

print("🎭" * 15)
print("")
print("     WELCOME TO THE JOKE MACHINE!")
print("")
print("          Created by", creator_name)
print("")
print("🎭" * 15)
print("")
print("Get ready to laugh! Here come the jokes...")
print("")
```

### Creative Welcome Ideas

Try different decorations:

```python
# Option 1: Stars
print("⭐" * 20)
print("   THE COMEDY CLUB   ")
print("⭐" * 20)

# Option 2: Box style
print("+" + "=" * 28 + "+")
print("|" + "    JOKE-O-MATIC 3000    " + "|")
print("+" + "=" * 28 + "+")

# Option 3: Simple but elegant
print("~" * 30)
print("      LAUGH FACTORY      ")
print("~" * 30)
```

### Your Task

✅ Create a welcome screen with:

- Decorative border (use `*`, `=`, `-`, or emojis)
- A catchy title
- Your name as the creator
- An intro message like "Get ready to laugh!"

---

## 📦 Step 3: Store Your Jokes in Variables

Now we use **variables** to store each joke. This is important because:

- It keeps our code organized
- We can easily change jokes later
- It's how real programmers structure data!

### Variable Naming for Jokes

Use clear, descriptive names:

```python
# Joke 1
joke1_setup = "Why don't scientists trust atoms?"
joke1_punchline = "Because they make up everything!"

# Joke 2
joke2_setup = "What do you call a fish without eyes?"
joke2_punchline = "A fsh!"

# Joke 3
joke3_setup = "Why did the scarecrow win an award?"
joke3_punchline = "Because he was outstanding in his field!"
```

### Why Use Variables?

Look at the difference:

**Without Variables (messy):**

```python
print("Why don't scientists trust atoms?")
print("Because they make up everything!")
print("What do you call a fish without eyes?")
print("A fsh!")
```

**With Variables (organized):**

```python
joke1_setup = "Why don't scientists trust atoms?"
joke1_punchline = "Because they make up everything!"

print(joke1_setup)
print(joke1_punchline)
```

The variable version is easier to read, change, and expand!

### Your Task

✅ Store at least 3 jokes in variables:

- Each joke needs a `_setup` and `_punchline` variable
- Use snake_case naming (like `joke1_setup`)
- Put all variables together in one section

---

## 🎤 Step 4: Display Each Joke

Now let's tell the jokes! A good joke needs:

1. A header (Joke #1, Joke #2, etc.)
2. The setup (the question)
3. A pause for suspense (...)
4. The punchline (the funny answer!)
5. A reaction (laughing emojis)

### Single Joke Display

```python
# Joke #1
print("=" * 30)
print("")
print("📢 Joke #1:")
print("")
print(joke1_setup)
print("")
print("...")
print("")
print(joke1_punchline)
print("")
print("😂" * 3)
print("")
```

### Why the "..." Pause?

The `...` creates suspense! It's like when a comedian pauses before the punchline. It makes the joke funnier!

```python
print("Why don't scientists trust atoms?")
print("")
print("...")  # <-- The dramatic pause!
print("")
print("Because they make up everything!")
```

### Display All Your Jokes

Repeat the pattern for each joke:

```python
# Joke #1
print("=" * 30)
print("📢 Joke #1:")
print(joke1_setup)
print("...")
print(joke1_punchline)
print("😂" * 3)
print("")

# Joke #2
print("=" * 30)
print("📢 Joke #2:")
print(joke2_setup)
print("...")
print(joke2_punchline)
print("🤣" * 3)
print("")

# Joke #3
print("=" * 30)
print("📢 Joke #3:")
print(joke3_setup)
print("...")
print(joke3_punchline)
print("😆" * 3)
print("")
```

### Different Laugh Emojis

Mix it up with different reactions:

- 😂 - Face with tears of joy
- 🤣 - Rolling on the floor laughing
- 😆 - Grinning squinting face
- 😹 - Cat with tears of joy
- 🤭 - Face with hand over mouth
- 😜 - Winking face with tongue

### Your Task

✅ Display each joke with:

- A separator line between jokes
- A joke number header
- The setup from your variable
- A pause (...)
- The punchline from your variable
- Laughing emojis

---

## 🎬 Step 5: Add the Ending

Every good show needs a closing! Thank your audience and invite them to come back.

### Basic Ending

```python
print("=" * 30)
print("")
print("Thanks for laughing with me!")
print("Run me again whenever you need a giggle!")
print("")
print("🎭 THE END 🎭")
```

### Creative Endings

```python
# Option 1: Curtain call
print("=" * 30)
print("")
print("🎭 THAT'S ALL FOLKS! 🎭")
print("")
print("Thanks for being a great audience!")
print("See you next time!")
print("")
print("*takes a bow*")
print("🎭" * 10)

# Option 2: Comedy club style
print("=" * 30)
print("")
print("👏" * 10)
print("")
print("Thank you, thank you!")
print("You've been a wonderful audience!")
print("Don't forget to tip your programmer! 😄")
print("")
print("🎤 THE END 🎤")

# Option 3: Personal touch
creator = "Alex"
print("=" * 30)
print("")
print("Thanks for using", creator + "'s Joke Machine!")
print("Come back anytime you need to laugh!")
print("")
print("Made with ❤️ and Python 🐍")
```

### Your Task

✅ Create an ending with:

- A final separator
- A thank you message
- An invitation to run again
- "THE END" in a creative way

---

## 📄 Complete Code Template

Here's the full structure. Fill in YOUR jokes!

```python
# ================================
# THE JOKE MACHINE
# By: [Your Name]
# Date: [Today's Date]
# ================================

# === VARIABLES ===
creator_name = "YOUR NAME"

# Joke 1
joke1_setup = "YOUR FIRST JOKE SETUP"
joke1_punchline = "YOUR FIRST PUNCHLINE"

# Joke 2
joke2_setup = "YOUR SECOND JOKE SETUP"
joke2_punchline = "YOUR SECOND PUNCHLINE"

# Joke 3
joke3_setup = "YOUR THIRD JOKE SETUP"
joke3_punchline = "YOUR THIRD PUNCHLINE"

# === WELCOME SCREEN ===
print("🎭" * 15)
print("")
print("     WELCOME TO THE JOKE MACHINE!")
print("")
print("          Created by", creator_name)
print("")
print("🎭" * 15)
print("")
print("Get ready to laugh! Here come the jokes...")
print("")

# === JOKE #1 ===
print("=" * 30)
print("")
print("📢 Joke #1:")
print("")
print(joke1_setup)
print("")
print("...")
print("")
print(joke1_punchline)
print("")
print("😂" * 3)
print("")

# === JOKE #2 ===
print("=" * 30)
print("")
print("📢 Joke #2:")
print("")
print(joke2_setup)
print("")
print("...")
print("")
print(joke2_punchline)
print("")
print("🤣" * 3)
print("")

# === JOKE #3 ===
print("=" * 30)
print("")
print("📢 Joke #3:")
print("")
print(joke3_setup)
print("")
print("...")
print("")
print(joke3_punchline)
print("")
print("😆" * 3)
print("")

# === ENDING ===
print("=" * 30)
print("")
print("Thanks for laughing with me!")
print("Run me again whenever you need a giggle!")
print("")
print("Made with ❤️ by", creator_name)
print("")
print("🎭 THE END 🎭")
```

---

## ✅ Project Requirements Checklist

Your Joke Machine MUST have:

| #   | Requirement       | Description                 | Check |
| --- | ----------------- | --------------------------- | ----- |
| 1   | Welcome Screen    | Decorative intro with title | ⬜    |
| 2   | Creator Name      | Your name in the program    | ⬜    |
| 3   | At Least 3 Jokes  | Stored in variables         | ⬜    |
| 4   | Setup & Punchline | Each joke has both parts    | ⬜    |
| 5   | Dramatic Pause    | "..." before punchlines     | ⬜    |
| 6   | Visual Separators | Lines between jokes         | ⬜    |
| 7   | Laugh Reactions   | Emojis after punchlines     | ⬜    |
| 8   | Ending Message    | Thank you and THE END       | ⬜    |
| 9   | Bug-Free          | Runs without errors!        | ⬜    |

---

## ⭐ Bonus Challenges

Want to make your Joke Machine even better? Try these!

### Bonus 1: More Jokes

Add a 4th and 5th joke! The more the merrier!

### Bonus 2: Themed Collection

Make all your jokes about ONE topic:

- All animal jokes 🐾
- All food jokes 🍕
- All school jokes 📚
- All computer/tech jokes 💻

### Bonus 3: ASCII Art

Add text art to your program:

```python
print("   _____ ")
print("  /     \\")
print(" | 😂😂 |")
print("  \\_____/")
```

### Bonus 4: String Methods Magic

Use `.upper()` for emphasis:

```python
print("GET READY TO " + "laugh".upper() + "!")
# Output: GET READY TO LAUGH!
```

### Bonus 5: Joke Counter

Use variables to count:

```python
total_jokes = 3
print("You just heard", total_jokes, "amazing jokes!")
```

### Bonus 6: Personalized Message

Ask for the audience's name (just use a variable for now):

```python
audience_name = "Friend"
print("Hey " + audience_name + ", thanks for visiting!")
```

---

## 🐛 Common Bugs to Watch For

Use your debugging skills! Watch out for:

| Bug                   | What Happens  | How to Fix                          |
| --------------------- | ------------- | ----------------------------------- |
| Missing quote         | `SyntaxError` | Check all strings have matching `"` |
| Typo in variable      | `NameError`   | Check spelling matches exactly      |
| Wrong capitalization  | `NameError`   | Use lowercase for `print`           |
| Missing comma         | Weird output  | Check `print()` statements          |
| Mixing + with numbers | `TypeError`   | Use comma or `str()`                |

### Debugging Checklist

Before you submit:

1. ⬜ Run your code - does it work?
2. ⬜ Read through the output - does it look right?
3. ⬜ Check each joke - do they display correctly?
4. ⬜ Look for typos in your jokes
5. ⬜ Make sure the ending appears

---

## 🎭 Presentation Tips for Next Week

Next week is the **Showcase Party**! Here are tips for presenting:

### Before the Showcase

1. ✅ Test your code one more time
2. ✅ Practice explaining what you built
3. ✅ Think about your favorite part

### During Your Presentation

1. **Introduce yourself:** "Hi, I'm [name]!"
2. **Explain your project:** "I built a Joke Machine that tells [number] jokes!"
3. **Run your code:** Show it working
4. **Share something cool:** "My favorite part was..." or "I learned..."
5. **Thank your audience:** "Thanks for watching!"

### Don't Worry If...

- You feel nervous (everyone does!)
- Your code has a small bug (we'll help fix it!)
- Someone else has similar jokes (that's okay!)

---

## 🏠 Homework: Complete Your Joke Machine

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### Requirements

Your finished Joke Machine must have:

1. ✅ **Welcome message** with decorative borders
2. ✅ **Your name** as the creator
3. ✅ **At least 3 jokes** stored in variables
4. ✅ **Each joke** has setup, pause (...), and punchline
5. ✅ **Visual separators** between jokes (lines of `=` or `-`)
6. ✅ **Laughing emojis** after each punchline
7. ✅ **Ending message** thanking the audience
8. ✅ **NO BUGS** - code runs perfectly!

### Grading Rubric

| Criteria                           | Points        |
| ---------------------------------- | ------------- |
| Welcome screen with decorations    | ⭐            |
| Creator name included              | ⭐            |
| At least 3 jokes in variables      | ⭐⭐          |
| Jokes have setup, pause, punchline | ⭐⭐          |
| Visual separators and emojis       | ⭐            |
| Ending message                     | ⭐            |
| Code runs without bugs             | ⭐⭐          |
| **Total**                          | **10 points** |

### Bonus Points Available

- +1 for 4+ jokes
- +1 for themed joke collection
- +1 for creative ASCII art
- +1 for using string methods creatively

### How to Submit

1. Complete your Joke Machine on Trinket
2. Test it multiple times to make sure it works
3. Save your work
4. Click **Share** and copy the link
5. Submit the link to your instructor
6. **Be ready to present at the Week 8 Showcase!**

---

## 🌟 Next Week: Showcase Party!

**Week 8 is the Term 1 Showcase Party!** 🎉

You'll:

- Present your Joke Machine to the class
- Watch your classmates' projects
- Celebrate completing Term 1!
- Get a preview of what's coming in Term 2

**Come prepared with:**

- Your finished Joke Machine
- A short explanation of your project
- Excitement to share and celebrate!

---

## 🎉 You're Building Something Real!

This is a BIG moment—you're not just learning, you're CREATING!

**What you're proving:**

- ✅ You can plan a project
- ✅ You can write structured code
- ✅ You can use variables effectively
- ✅ You can make something FUN
- ✅ You're a REAL programmer!

> _BrightByte says: "I am SO proud of you! Building your first project is a huge milestone. Every programmer remembers their first real program. Years from now, you'll look back at your Joke Machine and remember this is where it all started. You're not just learning—you're CREATING. That's what real programmers do! Now go make some people LAUGH! 🎭😂"_

---

## 📚 Joke Resources (Optional)

Need more jokes? Check these out:

- Ask family members for their favorite jokes
- Think about funny things that happened at school
- Make up your own! (Q: Why did [thing] do [action]? A: Because [silly reason]!)

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*  
_Instagram: @kids_learn_ai_

---

_Remember: The best Joke Machine is one that makes YOU laugh! Have fun with it!_
