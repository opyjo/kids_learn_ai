---
title: "Keeping Score"
description: "Track points, attempts, wins, and losses - keep score in your games!"
difficulty: "beginner"
order_index: 5
course_slug: "term-7-game-builder"
is_premium: false
requires_trinket: true
starter_code: |
  # Keeping Score
  # Track game progress!

  score = 0
  attempts = 0

  # Game round
  attempts = attempts + 1
  # ... game logic ...
  score = score + 1  # Player wins!

  print("Score:", score)
  print("Attempts:", attempts)
class_activities: |
  ## 🎮 Class Activity: Score Tracking Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can track score in a game?
  3. Challenge 2: Who can count attempts?
  4. Challenge 3: Who can track wins and losses?
  5. Share your scoring systems with the class!

  **Bonus:** Try creating a leaderboard!
take_home_assignment: |
  ## 📚 Homework: Score Tracking Program

  **Assignment:** Create a Python program that tracks game progress!

  **Requirements:**
  1. Create variables to track score, attempts, and wins
  2. Update these variables during game play
  3. Display the score after each round
  4. Show total attempts and wins at the end
  5. Add comments explaining your scoring
  6. Code must run without errors

  **Bonus Challenges:**
  - Track losses separately
  - Calculate win percentage
  - Create a high score system
  - Add a leaderboard

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI tracks progress too! When AI learns, it tracks how many times it tried, how many times it succeeded, and improves based on that data. When AI plays games, it tracks its score to learn what works. You're using the same tracking systems that help AI learn! Did you know there's an AI called AlphaGo that learned to play the game Go by playing millions of games and tracking its score? It eventually beat the world champion!

  You're learning the same progress tracking that powers AI learning!
---

# Term 7, Lesson 5: Keeping Score 📊

**Course:** Term 7: Game Builder  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Create variables to track score
- Update score during gameplay
- Count attempts and guesses
- Track wins and losses
- Display game statistics

---

## 🤖 Welcome from BrightByte!

> _"Awesome! You've learned game loops and random numbers. But games need to TRACK PROGRESS! Today, you're going to learn to keep score, count attempts, and track wins. This is what makes games competitive and fun! Ready to become a score master?"_

### What's New This Week?

Last week you learned:
- Generating random numbers
- Making games unpredictable
- Using `random.randint()`

This week you'll discover:
- **Score variables** — Tracking points
- **Attempt counters** — Counting guesses
- **Win/loss tracking** — Tracking outcomes
- **Game statistics** — Showing progress

> _BrightByte says: "Tracking progress makes games competitive and fun! You're building real game features!"_

---

## 📊 Why Keep Score?

### Why Score Matters

Games need to track:
- **Points** — How well you're doing
- **Attempts** — How many times you tried
- **Wins/Losses** — Your success rate
- **Progress** — How you're improving

### Real-World Examples

- Video games track high scores
- Sports track wins and losses
- Learning tracks correct answers
- Games track attempts to complete

---

## 🎯 Tracking Score

### Example 1: Simple Score Counter

```python
score = 0

# Player does something good
score = score + 1
print("Score:", score)

# Player does something else good
score = score + 1
print("Score:", score)
```

**Output:**
```
Score: 1
Score: 2
```

### Example 2: Score in a Game Loop

```python
score = 0
playing = True

while playing:
    print("Playing game...")
    # Player wins a round
    score = score + 1
    print("Your score:", score)
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

print("Final score:", score)
```

---

## 🔢 Counting Attempts

### Example 1: Count Guesses

```python
attempts = 0

# First guess
attempts = attempts + 1
print("Attempt", attempts)

# Second guess
attempts = attempts + 1
print("Attempt", attempts)
```

### Example 2: Count Attempts in Game

```python
attempts = 0
playing = True

while playing:
    attempts = attempts + 1
    print(f"Round {attempts}")
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

print(f"You played {attempts} rounds!")
```

---

## 🏆 Tracking Wins and Losses

### Example: Win/Loss Tracker

```python
wins = 0
losses = 0
playing = True

while playing:
    # Game logic here
    result = input("Did you win? (yes/no): ")
    
    if result == "yes":
        wins = wins + 1
    else:
        losses = losses + 1
    
    print(f"Wins: {wins}, Losses: {losses}")
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

print(f"\nFinal Stats:")
print(f"Wins: {wins}")
print(f"Losses: {losses}")
print(f"Total games: {wins + losses}")
```

---

## 🎮 Complete Score System

### Example: Full Game with Scoring

```python
import random

score = 0
attempts = 0
wins = 0
losses = 0
playing = True

while playing:
    attempts = attempts + 1
    print(f"\n=== Round {attempts} ===")
    
    # Simple game: guess if number is even or odd
    number = random.randint(1, 10)
    guess = input("Is the number even or odd? (even/odd): ")
    
    if (number % 2 == 0 and guess == "even") or (number % 2 == 1 and guess == "odd"):
        print("Correct! The number was", number)
        wins = wins + 1
        score = score + 10
    else:
        print("Wrong! The number was", number)
        losses = losses + 1
    
    print(f"Score: {score}")
    print(f"Wins: {wins}, Losses: {losses}")
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

print(f"\n=== GAME OVER ===")
print(f"Final Score: {score}")
print(f"Total Rounds: {attempts}")
print(f"Wins: {wins}")
print(f"Losses: {losses}")
```

---

## 🎯 Practice Challenges!

### Challenge 1: Simple Score Tracker

```python
score = 0
score = score + 1
score = score + 1
print("Score:", score)
```

### Challenge 2: Attempt Counter

```python
attempts = 0
attempts = attempts + 1
attempts = attempts + 1
print("Attempts:", attempts)
```

### Challenge 3: Win/Loss Tracker

```python
wins = 0
losses = 0
wins = wins + 1
losses = losses + 1
print("Wins:", wins, "Losses:", losses)
```

### Challenge 4: Complete Scoring System

Create a game loop with score, attempts, wins, and losses!

---

## 📝 Key Takeaways

### Score Variables

```python
score = 0      # Start at 0
score = score + 1  # Add 1
score = score + 5  # Add 5
```

### Common Score Patterns

| What to Track        | Variable Name | How to Update              |
| -------------------- | ------------- | -------------------------- |
| Points               | `score`       | `score = score + points`   |
| Attempts             | `attempts`     | `attempts = attempts + 1`  |
| Wins                 | `wins`        | `wins = wins + 1`          |
| Losses               | `losses`      | `losses = losses + 1`     |
| Guesses              | `guesses`     | `guesses = guesses + 1`    |

### Displaying Statistics

```python
print("Score:", score)
print("Attempts:", attempts)
print(f"Wins: {wins}, Losses: {losses}")
```

### Important Rules

1. **Start at 0** — Initialize variables before the loop
2. **Update inside loop** — Change variables during gameplay
3. **Display regularly** — Show progress to player
4. **Show final stats** — Display totals at the end

---

## 🌟 Next Lesson Preview

**Week 6: Putting It Together**

Next week, you'll combine everything:

- **Game loops** — Keep playing
- **Random numbers** — Unpredictable games
- **Score tracking** — Track progress
- **Complete games** — Full game systems

**Sneak peek:**

```python
# Complete game with all features!
import random
score = 0
playing = True
while playing:
    # Game code with random and scoring
```

Get ready to build complete games! 🎮

---

## 🎉 Great Job, Score Master!

You just learned to track game progress!

**What you accomplished today:**

- ✅ Created score variables
- ✅ Updated scores during gameplay
- ✅ Counted attempts and guesses
- ✅ Tracked wins and losses
- ✅ Displayed game statistics

> _BrightByte says: "WOW! You just learned to track progress like real games! 📊 Score, attempts, wins, losses—these are the features that make games competitive and fun. Next week, we'll put it ALL together to build complete games. You're almost ready for the big project!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Different Scoring:** Track different types of points
2. **Win Percentage:** Calculate wins / total games
3. **High Scores:** Track the highest score
4. **Statistics:** Show detailed game stats
5. **Your Own System:** Create your own scoring method!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: tracking progress makes games competitive and fun!_ 📊

