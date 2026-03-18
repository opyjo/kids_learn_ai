---
title: "Project - Guessing Game"
description: "Build your complete term project - a full number guessing game with all features!"
difficulty: "beginner"
order_index: 7
course_slug: "term-7-game-builder"
is_premium: false
requires_trinket: true
starter_code: |
  # ================================
  # NUMBER GUESSING GAME
  # By: [Your Name]
  # Term 7 Project
  # ================================

  import random

  print("=" * 40)
  print("   WELCOME TO MY GUESSING GAME!")
  print("=" * 40)
  print("")

  score = 0
  attempts = 0
  playing = True

  while playing:
      attempts = attempts + 1
      number = random.randint(1, 20)
      print(f"I'm thinking of a number between 1 and 20.")
      
      guesses = 0
      while True:
          guesses = guesses + 1
          guess = int(input("Your guess: "))
          
          if guess == number:
              print(f"🎉 YOU GOT IT in {guesses} tries!")
              score = score + 1
              break
          elif guess < number:
              print("Too low! Try again.")
          else:
              print("Too high! Try again.")
      
      print(f"Score: {score}/{attempts}")
      answer = input("Play again? (yes/no): ")
      if answer == "no":
          playing = False

  print(f"\nFinal Score: {score}/{attempts}")
  print("Thanks for playing!")
class_activities: |
  ## 🎮 Class Activity: Guessing Game Workshop!

  **Part 1: Planning (10 min)**
  - Review the requirements
  - Plan your game features
  - Think about how to make it special

  **Part 2: Building (30 min)**
  - Start building your guessing game
  - Test frequently as you go
  - Help neighbors with bugs
  - Add your personal touches!

  **Part 3: Testing & Polish (15 min)**
  - Test your complete game
  - Fix any bugs
  - Add decorations and messages
  - Make it yours!

  **Part 4: Preview (5 min)**
  - Run your complete program
  - Make final adjustments
  - Get ready to showcase next week!
take_home_assignment: |
  ## 📚 Homework: Complete Your Guessing Game

  **Assignment:** Finish and polish your number guessing game for the Week 8 showcase!

  **Requirements:**
  1. Welcome message with decorative borders
  2. Picks a random number (1-20 or 1-100)
  3. Lets player guess until they get it
  4. Gives "higher/lower" hints
  5. Counts attempts for each round
  6. Tracks total score and rounds
  7. Asks "Play again?" at the end
  8. Shows final statistics
  9. NO BUGS - code runs perfectly!
  10. Add comments explaining each section

  **Bonus Points:**
  - Add difficulty levels (easy 1-10, medium 1-20, hard 1-100)
  - Track best score (fewest guesses)
  - Add a hint system (3 hints per game)
  - Create a leaderboard
  - Add decorative borders and emojis
  - Personalize messages

  **Submit:** Share your Trinket link. Be ready to present at the Week 8 Showcase!
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses similar guessing strategies! When AI learns, it makes guesses, gets feedback (too high/too low), and adjusts. When AI plays games, it uses the same pattern: try, get feedback, adjust, try again. Your guessing game uses the same learning pattern that AI uses! AI uses a smart strategy called "binary search" - it always guesses the middle number, which is the fastest way to find the answer, just like you might do in your guessing game!

  You're building a game that works like AI learning!
---

# Term 7, Lesson 7: Project - Guessing Game! 🎮

**Course:** Term 7: Game Builder  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 7 of 8

---

## 🎯 Project Overview

This is your **BIG TERM PROJECT**! You're going to create a **Number Guessing Game**—a complete, playable game that uses everything you've learned: game loops, random numbers, score tracking, and decisions!

### What You'll Build

A complete number guessing game that:
- Welcomes the player
- Picks a random number
- Lets the player guess with hints
- Tracks score and attempts
- Asks to play again
- Shows final statistics

---

## 🤖 Welcome from BrightByte!

> _"THIS IS IT! 🎉 Your big moment! You've learned game loops, random numbers, score tracking, and how to combine everything. Now you're going to put it ALL together to create something AMAZING—a complete number guessing game! This will be YOUR game—something you can show off, be proud of, and actually play! Let's build something incredible!"_

---

## 📋 Project Requirements

### Must Have (Required)

1. **Welcome Screen**
   - Decorative borders
   - Title: "Number Guessing Game" or similar
   - Your name as creator

2. **Random Number Generation**
   - Uses `import random`
   - Generates number between 1-20 (or 1-100)
   - Different each game

3. **Guessing Loop**
   - Lets player guess until correct
   - Gives "higher/lower" hints
   - Counts guesses per round

4. **Score Tracking**
   - Tracks total score (wins)
   - Tracks total rounds played
   - Shows progress after each round

5. **Game Loop**
   - Asks "Play again?" after each round
   - Continues until player says "no"
   - Shows final statistics

6. **Code Quality**
   - Comments explaining sections
   - No bugs—runs perfectly
   - Clean, readable code

### Bonus Features (Optional)

- **Difficulty levels** — Easy (1-10), Medium (1-20), Hard (1-100)
- **Best score tracking** — Fewest guesses to win
- **Hint system** — Limited hints per game
- **Leaderboard** — Track multiple players
- **Enhanced messages** — Creative, personalized
- **Multiple game modes** — Different guessing challenges

---

## 🎮 Step-by-Step Guide

### Step 1: Set Up Your Program

```python
# ================================
# NUMBER GUESSING GAME
# By: [Your Name]
# Term 7 Project
# ================================

import random
```

### Step 2: Create Welcome Screen

```python
print("=" * 40)
print("   WELCOME TO MY GUESSING GAME!")
print("=" * 40)
print("")
```

### Step 3: Initialize Variables

```python
score = 0
attempts = 0
playing = True
```

### Step 4: Create Game Loop

```python
while playing:
    attempts = attempts + 1
    # Game code here
```

### Step 5: Generate Random Number

```python
    number = random.randint(1, 20)
    print("I'm thinking of a number between 1 and 20.")
```

### Step 6: Guessing Loop with Hints

```python
    guesses = 0
    while True:
        guesses = guesses + 1
        guess = int(input("Your guess: "))
        
        if guess == number:
            print(f"🎉 YOU GOT IT in {guesses} tries!")
            score = score + 1
            break
        elif guess < number:
            print("Too low! Try again.")
        else:
            print("Too high! Try again.")
```

### Step 7: Show Progress and Ask to Continue

```python
    print(f"Score: {score}/{attempts}")
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False
```

### Step 8: Final Statistics

```python
print(f"\n=== GAME OVER ===")
print(f"Final Score: {score}/{attempts}")
print("Thanks for playing!")
```

---

## 💡 Tips for Success

### Tip 1: Build Step by Step

Start with basic structure, then add features one at a time.

### Tip 2: Test Frequently

After each feature, test it! Make sure it works before moving on.

### Tip 3: Use Comments

Add comments explaining what each section does.

### Tip 4: Make It Yours

Add your personal touch—your name, creative messages, fun features!

### Tip 5: Ask for Help

If you get stuck, ask your instructor or classmates!

---

## 🎮 Project Checklist

### Before You Start

- [ ] I understand the requirements
- [ ] I know how to use all features
- [ ] I'm ready to create something amazing!

### While Building

- [ ] Welcome screen created
- [ ] Random number generation working
- [ ] Guessing loop with hints working
- [ ] Score tracking working
- [ ] Game loop working
- [ ] "Play again?" working
- [ ] Final statistics showing
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

**Week 8: Game Showcase + Badge!**

Next week, you'll:
- Present your guessing game
- Play classmates' games
- See everyone's creations
- Celebrate your achievements
- Earn your "Game Developer" badge!

Get ready to shine! ✨

---

## 🎉 You've Got This!

This is your chance to show everything you've learned!

**Remember:**
- You know game loops
- You know random numbers
- You know score tracking
- You know how to combine them all!

> _BrightByte says: "You've learned SO much this term! Now it's time to put it all together and create something YOU can be proud of. Take your time, test as you go, and most importantly—HAVE FUN! I can't wait to see what you create!"_

---

## 📚 Need Help?

### Common Issues

**Problem:** Game doesn't stop
- **Solution:** Check your game loop condition

**Problem:** Hints don't work
- **Solution:** Check your if/elif/else logic

**Problem:** Score doesn't update
- **Solution:** Make sure you update score inside the loop

### Resources

- Review previous lessons
- Ask your instructor
- Help your classmates (teaching helps you learn!)

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_This is YOUR project! Make it amazing! You've got this!_ 🎮✨

