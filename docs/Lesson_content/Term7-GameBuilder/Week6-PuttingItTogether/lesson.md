---
title: "Putting It Together"
description: "Combine everything - loops, decisions, random numbers, and score tracking into complete games!"
difficulty: "beginner"
order_index: 6
course_slug: "term-7-game-builder"
is_premium: false
requires_trinket: true
starter_code: |
  # Putting It Together
  # Complete game with all features!

  import random

  score = 0
  attempts = 0
  playing = True

  while playing:
      attempts = attempts + 1
      number = random.randint(1, 10)
      guess = int(input("Guess a number 1-10: "))
      
      if guess == number:
          print("Correct!")
          score = score + 1
      else:
          print("Wrong! The number was", number)
      
      print(f"Score: {score}/{attempts}")
      answer = input("Play again? (yes/no): ")
      if answer == "no":
          playing = False

  print(f"Final score: {score}/{attempts}")
class_activities: |
  ## 🎮 Class Activity: Complete Game Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can create a complete game with all features?
  3. Challenge 2: Who can combine loops, random, and scoring?
  4. Challenge 3: Who can create the most creative complete game?
  5. Share your complete games with the class!

  **Bonus:** Try adding hints (higher/lower) to your game!
take_home_assignment: |
  ## 📚 Homework: My Complete Game

  **Assignment:** Create a complete game that combines ALL features!

  **Requirements:**
  1. Use a game loop (while playing)
  2. Use random numbers
  3. Track score and attempts
  4. Give feedback to the player
  5. Ask "Play again?" at the end
  6. Show final statistics
  7. Add comments explaining your code
  8. Code must run without errors

  **Bonus Challenges:**
  - Add hints (higher/lower)
  - Track wins and losses separately
  - Add difficulty levels
  - Create a menu system

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI combines all these features too! When AI plays games, it uses loops to keep playing, random moves to explore, and tracks its progress to learn. When AI learns, it combines loops (repetition), decisions (what to do), randomness (exploration), and tracking (learning from results). You're using the same combination that makes AI smart!

  You're building games the same way AI builds intelligence!
---

# Term 7, Lesson 6: Putting It Together 🎮

**Course:** Term 7: Game Builder  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Combine game loops with random numbers
- Add score tracking to games
- Create complete, playable games
- Integrate all features together
- Build games ready for the project

---

## 🤖 Welcome from BrightByte!

> _"THIS IS IT! 🎮 You've learned game loops, random numbers, and score tracking separately. But today, you're going to PUT IT ALL TOGETHER! You're going to build complete, playable games that have everything—loops, randomness, scoring, and fun! This is what you've been building toward. Ready to create something amazing?"_

### What's New This Week?

You've learned:
- Game loops (Week 3)
- Random numbers (Week 4)
- Score tracking (Week 5)

This week you'll:
- **Combine everything** — All features in one game
- **Build complete games** — Games that are fully playable
- **Prepare for project** — Get ready for the big project!

> _BrightByte says: "This is where it all comes together! You're about to build real, complete games!"_

---

## 🎮 Complete Game Structure

### The Full Game Pattern

```python
import random

# Initialize variables
score = 0
attempts = 0
playing = True

# Game loop
while playing:
    attempts = attempts + 1
    
    # Game code with random
    number = random.randint(1, 10)
    guess = int(input("Guess 1-10: "))
    
    # Check result
    if guess == number:
        print("Correct!")
        score = score + 1
    else:
        print("Wrong! The number was", number)
    
    # Show progress
    print(f"Score: {score}/{attempts}")
    
    # Ask to continue
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

# Final stats
print(f"Final: {score}/{attempts}")
```

---

## 🎯 Example 1: Simple Guessing Game

### Complete Number Guessing Game

```python
import random

score = 0
attempts = 0
playing = True

print("=== NUMBER GUESSING GAME ===")

while playing:
    attempts = attempts + 1
    print(f"\n--- Round {attempts} ---")
    
    # Generate random number
    number = random.randint(1, 10)
    guess = int(input("Guess a number between 1 and 10: "))
    
    # Check guess
    if guess == number:
        print("🎉 Correct! You got it!")
        score = score + 1
    else:
        print(f"❌ Wrong! The number was {number}")
    
    # Show score
    print(f"Your score: {score}/{attempts}")
    
    # Ask to continue
    answer = input("\nPlay again? (yes/no): ")
    if answer == "no":
        playing = False

print(f"\n=== GAME OVER ===")
print(f"Final Score: {score}/{attempts}")
print("Thanks for playing!")
```

---

## 🎯 Example 2: Guessing Game with Hints

### Higher/Lower Hints

```python
import random

score = 0
attempts = 0
playing = True

print("=== GUESS MY NUMBER ===")
print("I'm thinking of a number between 1 and 20")

while playing:
    attempts = attempts + 1
    number = random.randint(1, 20)
    guesses_this_round = 0
    
    print(f"\n--- Round {attempts} ---")
    
    # Keep guessing until correct
    while True:
        guesses_this_round = guesses_this_round + 1
        guess = int(input("Your guess: "))
        
        if guess == number:
            print("🎉 You got it in", guesses_this_round, "guesses!")
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
```

---

## 🎯 Example 3: Even/Odd Guessing Game

### Simple Decision Game

```python
import random

wins = 0
losses = 0
playing = True

print("=== EVEN OR ODD GAME ===")

while playing:
    number = random.randint(1, 10)
    guess = input("Is the number even or odd? (even/odd): ")
    
    is_even = (number % 2 == 0)
    
    if (guess == "even" and is_even) or (guess == "odd" and not is_even):
        print(f"🎉 Correct! The number was {number}")
        wins = wins + 1
    else:
        print(f"❌ Wrong! The number was {number}")
        losses = losses + 1
    
    print(f"Wins: {wins}, Losses: {losses}")
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

print(f"\nFinal: {wins} wins, {losses} losses")
```

---

## 🎮 Practice Challenges!

### Challenge 1: Basic Guessing Game

Create a game that:
- Picks random number 1-10
- Lets player guess
- Tracks score and attempts
- Asks "Play again?"

### Challenge 2: Game with Hints

Create a game with:
- Random number
- Higher/lower hints
- Score tracking
- Game loop

### Challenge 3: Your Own Complete Game!

Create your own complete game with all features!

---

## 📝 Key Takeaways

### Complete Game Checklist

- [ ] Import random
- [ ] Initialize variables (score, attempts, playing)
- [ ] Game loop (while playing)
- [ ] Random number generation
- [ ] Game logic with if/else
- [ ] Score updates
- [ ] Progress display
- [ ] "Play again?" prompt
- [ ] Final statistics

### Combining Features

| Feature           | How to Use                          |
| ----------------- | ----------------------------------- |
| **Game loop**     | `while playing:`                     |
| **Random**        | `random.randint(1, 10)`              |
| **Score**         | `score = score + 1`                 |
| **Attempts**      | `attempts = attempts + 1`            |
| **Decisions**     | `if guess == number:`                |
| **User input**    | `input("Your guess: ")`              |

### Important Patterns

1. **Initialize before loop** — Set variables before `while`
2. **Update in loop** — Change variables inside loop
3. **Check conditions** — Use if/else for game logic
4. **Show progress** — Display score regularly
5. **Ask to continue** — Let player decide when to stop

---

## 🌟 Next Lesson Preview

**Week 7: Project - Guessing Game**

Next week is your BIG PROJECT:

- **Complete number guessing game** — Full game with all features
- **Higher/lower hints** — Helpful feedback
- **Score tracking** — Track attempts and wins
- **Play again?** — Game loop
- **Your masterpiece** — Show off everything you've learned!

**Sneak peek:**

```python
# Your complete project will have:
# - Welcome screen
# - Random number generation
# - Guessing with hints
# - Score tracking
# - Game loop
# - Final statistics
```

Get ready for your big project! 🎮

---

## 🎉 Great Job, Game Developer!

You just combined everything into complete games!

**What you accomplished today:**

- ✅ Combined game loops with random numbers
- ✅ Added score tracking to games
- ✅ Created complete, playable games
- ✅ Integrated all features together
- ✅ Built games ready for the project

> _BrightByte says: "WOW! You just built COMPLETE GAMES! 🎮 Loops, random numbers, scoring, decisions—all working together! This is exactly what real games are made of. Next week, you'll use all of this to build your term project—a complete number guessing game. You're ready for this!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Different Games:** Create different types of guessing games
2. **More Features:** Add difficulty levels, hints, etc.
3. **Better Feedback:** Improve messages and displays
4. **Statistics:** Add more detailed stats
5. **Your Own Ideas:** Create games with your own rules!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: you're combining everything you've learned—you've got this!_ 🎮

