---
title: "Project - ASCII Art Generator"
description: "Build your complete term project - an ASCII art generator using all your loop skills!"
difficulty: "beginner"
order_index: 7
course_slug: "term-6-loop-magic"
is_premium: false
requires_trinket: true
starter_code: |
  # ================================
  # ASCII ART GENERATOR
  # By: [Your Name]
  # Term 6 Project
  # ================================

  # === WELCOME SCREEN ===
  print("=" * 40)
  print("   WELCOME TO MY ASCII ART GENERATOR!")
  print("=" * 40)
  print("")

  # === PATTERN MENU ===
  print("Choose a pattern:")
  print("1. Square")
  print("2. Triangle")
  print("3. Diamond")
  print("")

  choice = input("Enter your choice (1-3): ")

  # === CREATE PATTERN ===
  if choice == "1":
      # Square pattern
      for row in range(5):
          for col in range(5):
              print("⭐", end="")
          print()
  elif choice == "2":
      # Triangle pattern
      for row in range(1, 6):
          for star in range(row):
              print("⭐", end="")
          print()
  elif choice == "3":
      # Diamond pattern
      for row in range(1, 6):
          for star in range(row):
              print("⭐", end="")
          print()
      for row in range(4, 0, -1):
          for star in range(row):
              print("⭐", end="")
          print()
  else:
      print("Invalid choice!")

  print("")
  print("Thanks for using my ASCII Art Generator!")
class_activities: |
  ## 🎮 Class Activity: ASCII Art Workshop!

  **Part 1: Planning (10 min)**
  - Review the requirements
  - Plan your patterns
  - Think about how to make it special

  **Part 2: Building (30 min)**
  - Start building your generator
  - Test frequently as you go
  - Help neighbors with bugs
  - Add your personal touches!

  **Part 3: Testing & Polish (15 min)**
  - Test all patterns
  - Fix any bugs
  - Add decorations and messages
  - Make it yours!

  **Part 4: Preview (5 min)**
  - Run your complete program
  - Make final adjustments
  - Get ready to showcase next week!
take_home_assignment: |
  ## 📚 Homework: Complete Your ASCII Art Generator

  **Assignment:** Finish and polish your ASCII Art Generator for the Week 8 showcase!

  **Requirements:**
  1. Welcome message with decorative borders
  2. Menu showing at least 3 different patterns
  3. Uses input() to let user choose a pattern
  - Uses if/elif/else to handle choices
  5. Creates patterns using loops
  6. Ending message thanking the user
  7. NO BUGS - code runs perfectly!
  8. Add comments explaining each section

  **Bonus Points:**
  - Add more patterns (4+ patterns)
  - Let user choose size/character
  - Add decorative borders and emojis
  - Create patterns with conditions (loops + if)
  - Add error handling for invalid choices

  **Submit:** Share your Trinket link. Be ready to present at the Week 8 Showcase!
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI art generators use similar concepts! They loop through pixels, make decisions about colors and shapes, and create patterns. Your ASCII Art Generator uses the same fundamental programming concepts that power AI art creation! But here's a big question: Is AI art "real" art? Can AI be creative? These are questions people are discussing right now - and you're creating art with code, just like AI does!

  You're building something that works like real-world art generation tools!
---

# Term 6, Lesson 7: Project - ASCII Art Generator! 🎨

**Course:** Term 6: Loop Magic  
**Duration:** 60 minutes  
**Term:** 6 of 8 | **Week:** 7 of 8

---

## 🎯 Project Overview

This is your **BIG TERM PROJECT**! You're going to create an **ASCII Art Generator**—a program that lets users choose from different patterns and creates beautiful ASCII art!

### What You'll Build

An interactive program that:
- Shows a welcome message
- Displays a menu of pattern options
- Lets the user choose a pattern
- Creates the chosen pattern using loops
- Thanks the user when done

---

## 🤖 Welcome from BrightByte!

> _"THIS IS IT! 🎉 Your big moment! You've learned loops, patterns, decisions... and now you're going to put it ALL together to create something AMAZING! Your ASCII Art Generator will be YOUR creation—something you can show off, be proud of, and use to create art! Let's build something incredible!"_

---

## 📋 Project Requirements

### Must Have (Required)

1. **Welcome Screen**
   - Decorative borders (using `=` or `*`)
   - Title: "ASCII Art Generator" or similar
   - Your name as the creator

2. **Pattern Menu**
   - Shows at least 3 different patterns
   - Numbered options (1, 2, 3, etc.)
   - Clear instructions

3. **User Input**
   - Uses `input()` to get user's choice
   - Handles the choice with `if/elif/else`

4. **Pattern Creation**
   - At least 3 different patterns using loops
   - Patterns must be visually distinct
   - Uses nested loops where appropriate

5. **Ending Message**
   - Thanks the user
   - Optional: decorative border

6. **Code Quality**
   - Comments explaining sections
   - No bugs—code runs perfectly
   - Clean, readable code

### Bonus Features (Optional)

- **More Patterns** — 4+ patterns instead of 3
- **Customization** — Let user choose size or character
- **Enhanced Menu** — Better formatting, emojis
- **Conditional Patterns** — Patterns that use if statements
- **Error Handling** — Handle invalid choices gracefully
- **Multiple Runs** — Let user create multiple patterns

---

## 🎨 Pattern Ideas

### Pattern 1: Square

```python
# Square pattern
size = 5
for row in range(size):
    for col in range(size):
        print("⭐", end="")
    print()
```

### Pattern 2: Growing Triangle

```python
# Growing triangle
for row in range(1, 6):
    for star in range(row):
        print("⭐", end="")
    print()
```

### Pattern 3: Shrinking Triangle

```python
# Shrinking triangle
for row in range(5, 0, -1):
    for star in range(row):
        print("⭐", end="")
    print()
```

### Pattern 4: Diamond

```python
# Diamond pattern
# Top half
for row in range(1, 6):
    for star in range(row):
        print("⭐", end="")
    print()
# Bottom half
for row in range(4, 0, -1):
    for star in range(row):
        print("⭐", end="")
    print()
```

### Pattern 5: Rectangle

```python
# Rectangle pattern
rows = 3
cols = 8
for row in range(rows):
    for col in range(cols):
        print("⭐", end="")
    print()
```

### Pattern 6: Conditional Pattern

```python
# Checkerboard pattern
for row in range(5):
    for col in range(5):
        if (row + col) % 2 == 0:
            print("⭐", end="")
        else:
            print(" ", end="")
    print()
```

---

## 🛠️ Step-by-Step Guide

### Step 1: Set Up Your Program

```python
# ================================
# ASCII ART GENERATOR
# By: [Your Name]
# Term 6 Project
# ================================
```

### Step 2: Create Welcome Screen

```python
print("=" * 40)
print("   WELCOME TO MY ASCII ART GENERATOR!")
print("=" * 40)
print("")
```

### Step 3: Create Menu

```python
print("Choose a pattern:")
print("1. Square")
print("2. Triangle")
print("3. Diamond")
print("")
```

### Step 4: Get User Choice

```python
choice = input("Enter your choice (1-3): ")
```

### Step 5: Create Patterns with If/Elif/Else

```python
if choice == "1":
    # Square pattern code here
elif choice == "2":
    # Triangle pattern code here
elif choice == "3":
    # Diamond pattern code here
else:
    print("Invalid choice! Please choose 1, 2, or 3.")
```

### Step 6: Add Ending Message

```python
print("")
print("Thanks for using my ASCII Art Generator!")
print("=" * 40)
```

---

## 💡 Tips for Success

### Tip 1: Start Simple

Begin with 3 basic patterns. You can always add more!

### Tip 2: Test Frequently

After each pattern, test it! Make sure it works before moving on.

### Tip 3: Use Comments

Add comments explaining what each section does.

### Tip 4: Make It Yours

Add your personal touch—your name, favorite characters, creative messages!

### Tip 5: Ask for Help

If you get stuck, ask your instructor or classmates!

---

## 🎮 Project Checklist

### Before You Start

- [ ] I understand the requirements
- [ ] I have my pattern ideas ready
- [ ] I know how to use loops and if statements
- [ ] I'm ready to create something amazing!

### While Building

- [ ] Welcome screen created
- [ ] Menu created with at least 3 options
- [ ] User input working
- [ ] Pattern 1 working
- [ ] Pattern 2 working
- [ ] Pattern 3 working
- [ ] Ending message added
- [ ] Comments added
- [ ] Code tested and runs without errors

### Before Submitting

- [ ] All requirements met
- [ ] Code runs perfectly
- [ ] Comments explain the code
- [ ] It's creative and fun!
- [ ] Ready to showcase!

---

## 🌟 Next Week Preview

**Week 8: Art Gallery Showcase!**

Next week, you'll:
- Present your ASCII Art Generator
- Show off your patterns
- See your classmates' creations
- Celebrate your achievements
- Earn your "Loop Master" badge!

Get ready to shine! ✨

---

## 🎉 You've Got This!

This is your chance to show everything you've learned!

**Remember:**
- You know loops
- You know patterns
- You know decisions
- You can combine them all!

> _BrightByte says: "You've learned SO much this term! Now it's time to put it all together and create something YOU can be proud of. Take your time, test as you go, and most importantly—HAVE FUN! I can't wait to see what you create!"_

---

## 📚 Need Help?

### Common Issues

**Problem:** Pattern doesn't show correctly
- **Solution:** Check your loops and indentation

**Problem:** Menu choice doesn't work
- **Solution:** Make sure you're comparing strings: `choice == "1"`

**Problem:** Code has errors
- **Solution:** Read error messages carefully, check syntax

### Resources

- Review previous lessons on loops
- Review lesson on if/elif/else
- Ask your instructor
- Help your classmates (teaching helps you learn!)

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_This is YOUR project! Make it amazing! You've got this!_ 🎨✨

