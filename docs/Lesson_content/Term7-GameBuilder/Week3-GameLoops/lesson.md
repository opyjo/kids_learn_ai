---
title: "Game Loops"
description: "Create games that keep playing until the user says quit - real game loops!"
difficulty: "beginner"
order_index: 3
course_slug: "term-7-game-builder"
is_premium: false
requires_trinket: true
starter_code: |
  # Game Loops
  # Games that keep playing!

  # Simple game loop
  playing = True
  while playing:
      print("Playing the game...")
      answer = input("Play again? (yes/no): ")
      if answer == "no":
          playing = False
  print("Thanks for playing!")
class_activities: |
  ## 🎮 Class Activity: Game Loop Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can create a game loop that asks "Play again?" until "no"?
  3. Challenge 2: Who can create a menu that loops until "quit"?
  4. Challenge 3: Who can create the most creative game loop?
  5. Share your game loops with the class!

  **Bonus:** Try creating a game that tracks how many times you played!
take_home_assignment: |
  ## 📚 Homework: My Game Loop Program

  **Assignment:** Create a Python program with a game loop!

  **Requirements:**
  1. Create a game loop that continues until user says "no" or "quit"
  2. Ask the user if they want to play again after each round
  3. Use a variable to control the loop (like `playing = True`)
  4. Add comments explaining your game loop
  5. Make it creative and fun!
  6. Code must run without errors

  **Bonus Challenges:**
  - Track how many rounds were played
  - Add a menu with multiple options
  - Create a simple game inside the loop

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Every video game uses game loops! When you play a game, it runs in a loop: check input, update game state, draw screen, repeat. AI in games uses the same loop structure to keep the game running until you quit or win. You're learning the same structure that powers every game!

  You're building the foundation of real game development!
---

# Term 7, Lesson 3: Game Loops 🎮

**Course:** Term 7: Game Builder  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Create game loops that keep playing
- Use a variable to control when the game stops
- Build games that ask "Play again?"
- Create interactive game structures
- Build the foundation for real games

---

## 🤖 Welcome from BrightByte!

> _"YES! This is it! 🎮 You've learned while loops and how to control them. Now you're going to use them to create REAL game loops—games that keep playing until you say 'quit'! This is how every video game works. You're about to build the structure that powers games!"_

### What's New This Week?

Last week you learned:
- Using `break` to stop loops
- Using `continue` to skip iterations
- Controlling loops safely

This week you'll discover:
- **Game loops** — Games that keep playing
- **Play again?** — Asking users to continue
- **Game structure** — How real games are built
- **Interactive games** — Games that respond to players

> _BrightByte says: "This is where games come to life! You're building the structure that every game uses!"_

---

## 🎮 What is a Game Loop?

### The Basic Idea

A **game loop** is a while loop that keeps the game running until the player quits. It's the structure that makes games interactive and replayable.

### The Basic Game Loop Structure

```python
playing = True
while playing:
    # Game code here
    # Ask if player wants to continue
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False
print("Thanks for playing!")
```

**How it works:**
1. Start with `playing = True`
2. Loop continues while `playing` is True
3. Run game code
4. Ask if player wants to play again
5. If "no", set `playing = False` to stop the loop
6. Print goodbye message

---

## 🎯 Example 1: Simple Game Loop

### Basic "Play Again" Loop

```python
playing = True
while playing:
    print("🎮 Playing the game...")
    print("You did something awesome!")
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

print("Thanks for playing!")
```

**Output:**
```
🎮 Playing the game...
You did something awesome!
Play again? (yes/no): yes
🎮 Playing the game...
You did something awesome!
Play again? (yes/no): yes
🎮 Playing the game...
You did something awesome!
Play again? (yes/no): no
Thanks for playing!
```

---

## 🎯 Example 2: Game Loop with Menu

### Menu That Loops Until Quit

```python
playing = True
while playing:
    print("\n=== GAME MENU ===")
    print("1. Play game")
    print("2. View instructions")
    print("3. Quit")
    
    choice = input("Choose (1-3): ")
    
    if choice == "1":
        print("🎮 Playing game...")
    elif choice == "2":
        print("Instructions: Have fun!")
    elif choice == "3":
        playing = False
        print("Thanks for playing!")
    else:
        print("Invalid choice!")
```

---

## 🎯 Example 3: Game Loop with Break

### Using Break Instead of Variable

```python
while True:
    print("🎮 Playing the game...")
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        break  # Stop the loop
    
print("Thanks for playing!")
```

**Both methods work!** Choose the one you prefer:
- **Variable method** (`playing = True`) — More explicit, easier to read
- **Break method** (`while True: break`) — Shorter, also works

---

## 🎯 Example 4: Counting Rounds

### Track How Many Times Played

```python
round_num = 0
playing = True

while playing:
    round_num = round_num + 1
    print(f"\n=== Round {round_num} ===")
    print("🎮 Playing the game...")
    
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False

print(f"\nYou played {round_num} rounds. Thanks for playing!")
```

**Output:**
```
=== Round 1 ===
🎮 Playing the game...
Play again? (yes/no): yes

=== Round 2 ===
🎮 Playing the game...
Play again? (yes/no): no

You played 2 rounds. Thanks for playing!
```

---

## 🎮 Practice Challenges!

### Challenge 1: Basic Game Loop

```python
playing = True
while playing:
    print("Game is running!")
    answer = input("Continue? (yes/no): ")
    if answer == "no":
        playing = False
print("Game over!")
```

### Challenge 2: Menu Loop

```python
while True:
    print("1. Option 1")
    print("2. Option 2")
    print("3. Quit")
    choice = input("Choose: ")
    if choice == "3":
        break
    print("You chose option", choice)
```

### Challenge 3: Round Counter

```python
rounds = 0
playing = True
while playing:
    rounds = rounds + 1
    print(f"Round {rounds}")
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False
print(f"Total rounds: {rounds}")
```

### Challenge 4: Create Your Own Game Loop!

Create a game loop for your own game idea!

---

## 📝 Key Takeaways

### Game Loop Pattern

```python
playing = True  # or use while True: with break
while playing:
    # Game code here
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False  # or use break
```

### Important Elements

1. **Loop condition** — `while playing:` or `while True:`
2. **Game code** — What happens each round
3. **Ask to continue** — Get user input
4. **Stop condition** — Set `playing = False` or use `break`
5. **Goodbye message** — Thank the player

### Two Methods

| Method 1: Variable          | Method 2: Break              |
| --------------------------- | ---------------------------- |
| `playing = True`             | `while True:`                |
| `while playing:`             | `while True:`                |
| `playing = False` to stop    | `break` to stop              |
| More explicit                | Shorter code                 |

### Vocabulary Words

| Word           | Definition                                    | Example                    |
| -------------- | --------------------------------------------- | -------------------------- |
| **Game loop**  | A loop that keeps a game running              | "while playing: game code" |
| **Play again** | Asking user if they want to continue          | "Play again? (yes/no)"     |
| **Round**      | One complete playthrough of the game          | "Round 1, Round 2..."     |

---

## 🌟 Next Lesson Preview

**Week 4: Random Numbers**

Next week, you'll learn to make games unpredictable:

- **Import random** — Using Python's random module
- **Random numbers** — Generating random values
- **Unpredictable games** — Games that are different each time

**Sneak peek:**

```python
import random
number = random.randint(1, 10)  # Random number 1-10
```

Get ready to make games exciting! 🎲

---

## 🎉 Great Job, Game Developer!

You just created your first game loop!

**What you accomplished today:**

- ✅ Created game loops that keep playing
- ✅ Used variables to control game flow
- ✅ Built games that ask "Play again?"
- ✅ Created interactive game structures
- ✅ Built the foundation for real games

> _BrightByte says: "WOW! You just built the structure that powers every game! 🎮 Game loops are what make games interactive and replayable. Next week, we'll add random numbers to make games unpredictable and exciting. You're becoming a real game developer!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Different Games:** Create game loops for different game ideas
2. **Round Tracking:** Track and display how many rounds were played
3. **Menu Systems:** Create games with menus that loop
4. **Multiple Options:** Add more choices to your game loops
5. **Your Own Games:** Create game loops for games you invent!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: game loops are the foundation of interactive games!_ 🎮

