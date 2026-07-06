---
title: "Mini-Game Lab 🎮🔬"
description: "Build TWO complete little games live — Dice Duel and Guess-the-Number Deluxe — using only loops, random, and logic. The building blocks of next week's Arcade Collection!"
difficulty: "intermediate"
order_index: 6
course_slug: "year2-term-2-loops-mastery"
is_premium: false
requires_trinket: true
starter_code: |
  # 🎮 Y2-T2-W6-MiniGames — Mini-Game Lab
  # Made by: [YOUR NAME]
  # IMPORTANT: Save this Trinket! Next week we combine these games into an Arcade.

  import random

  # ============================================================
  #  GAME 1: DICE DUEL 🎲
  # ============================================================

  # --- Part 1: Banner + explain the rules ---
  # (build a bordered title with "=" * 44 and print())


  # --- Part 2: Set up the scores and the rounds loop ---
  # player_score = 0
  # computer_score = 0
  # rounds = 3
  # for round_number in range(1, rounds + 1):
  #     roll with random.randint(1, 6) for player and computer


  # --- Part 3: Decide who wins each round (if / elif / else) ---


  # --- Part 4: After the loop, announce the overall winner ---


  # ============================================================
  #  GAME 2: GUESS-THE-NUMBER DELUXE 🔢
  # ============================================================

  # --- Part 5: Pick a secret number and set attempts to 0 ---
  # secret = random.randint(1, 20)
  # attempts = 0


  # --- Part 6: A while loop that keeps asking for a guess ---
  # REMEMBER: input() gives TEXT — wrap it in int()!
  # guess = int(input("Your guess (1-20): "))


  # --- Part 7: Give "too high" / "too low" hints, break when correct ---


  # Ready to build? Follow BrightByte, one part at a time! 🏗️
solution_code: |
  # 🎮 Y2-T2-W6-MiniGames — Mini-Game Lab
  # Made by: [YOUR NAME]
  # SAVE THIS! Next week (Week 7) we combine both games into one Arcade menu.

  import random

  # ============================================================
  #  GAME 1: DICE DUEL 🎲
  # ============================================================
  print("=" * 44)
  print("            🎲 DICE DUEL 🎲")
  print("=" * 44)
  print("Roll higher than the computer to win the round!")
  print("Best score after 3 rounds wins the duel.")
  print("=" * 44)

  player_score = 0
  computer_score = 0
  rounds = 3

  for round_number in range(1, rounds + 1):
      print()
      print(f"--- Round {round_number} of {rounds} ---")
      input("Press Enter to roll your die... 🎲 ")

      player_roll = random.randint(1, 6)
      computer_roll = random.randint(1, 6)

      print(f"You rolled:      {player_roll}")
      print(f"Computer rolled: {computer_roll}")

      if player_roll > computer_roll:
          player_score += 1
          print("✅ You win this round!")
      elif computer_roll > player_roll:
          computer_score += 1
          print("💻 Computer wins this round!")
      else:
          print("🤝 It's a tie — no points this round.")

      print(f"Score → You: {player_score}  Computer: {computer_score}")

  print()
  print("=" * 44)
  print("            FINAL RESULT")
  print("=" * 44)
  print(f"You: {player_score}   Computer: {computer_score}")

  if player_score > computer_score:
      print("🏆 YOU WIN THE DUEL! Well played!")
  elif computer_score > player_score:
      print("💻 The computer wins the duel. Rematch next time!")
  else:
      print("🤝 It's a draw — evenly matched!")

  # ============================================================
  #  GAME 2: GUESS-THE-NUMBER DELUXE 🔢
  # ============================================================
  print()
  print("=" * 44)
  print("       🔢 GUESS-THE-NUMBER DELUXE 🔢")
  print("=" * 44)
  print("I'm thinking of a number between 1 and 20.")
  print("Can you guess it? I'll say higher or lower!")
  print("=" * 44)

  secret = random.randint(1, 20)
  attempts = 0

  while True:
      try:
          guess = int(input("Your guess (1-20): "))
      except ValueError:
          print("❌ Please type a whole number, like 12.")
          continue

      attempts += 1

      if guess < secret:
          print("📉 Too low! Aim higher.")
      elif guess > secret:
          print("📈 Too high! Aim lower.")
      else:
          print(f"🎉 Correct! The number was {secret}.")
          print(f"You got it in {attempts} attempts.")
          break

  # --- Bonus: a star rating based on how many attempts you took ---
  if attempts <= 3:
      print("⭐⭐⭐ Incredible guessing!")
  elif attempts <= 6:
      print("⭐⭐ Nicely done!")
  else:
      print("⭐ You got there in the end — great persistence!")
class_activities: |
  ## 🏗️ Class Activity: Build TWO Games — Live, Together!

  Today we build **two** complete games in **one** Trinket. First **Dice Duel**, then **Guess-the-Number Deluxe**. After each stage, **run your code** and give a **thumbs up** 👍 when it works. We move together — do NOT race ahead.

  > 📁 **First:** create a new Trinket and name it **`Y2-T2-W6-MiniGames`**. You KEEP this file — next week we combine both games into an Arcade!

  Type this at the very top, once, for BOTH games:
  ```python
  import random
  ```

  ### 🎲 Dice Duel — Stage 1: Banner + Rules (⭐)
  ```python
  print("=" * 44)
  print("            🎲 DICE DUEL 🎲")
  print("=" * 44)
  print("Roll higher than the computer to win the round!")
  print("Best score after 3 rounds wins the duel.")
  print("=" * 44)
  ```
  ✅ **Checkpoint:** Run it. Neat banner? Thumbs up! 👍

  ### 🎲 Dice Duel — Stage 2: Scores + the Rounds Loop (⭐⭐)
  ```python
  player_score = 0
  computer_score = 0
  rounds = 3

  for round_number in range(1, rounds + 1):
      print()
      print(f"--- Round {round_number} of {rounds} ---")
      input("Press Enter to roll your die... 🎲 ")

      player_roll = random.randint(1, 6)
      computer_roll = random.randint(1, 6)

      print(f"You rolled:      {player_roll}")
      print(f"Computer rolled: {computer_roll}")
  ```
  ✅ **Checkpoint:** In the Zoom chat — what does `random.randint(1, 6)` give us? (A whole number from 1 to 6, like a real die!)

  ### 🎲 Dice Duel — Stage 3: Who Wins the Round? (⭐⭐)
  Add this **inside** the loop, indented under the `for`:
  ```python
      if player_roll > computer_roll:
          player_score += 1
          print("✅ You win this round!")
      elif computer_roll > player_roll:
          computer_score += 1
          print("💻 Computer wins this round!")
      else:
          print("🤝 It's a tie — no points this round.")

      print(f"Score → You: {player_score}  Computer: {computer_score}")
  ```
  ✅ **Checkpoint:** Run all 3 rounds. Does the score add up correctly?

  ### 🎲 Dice Duel — Stage 4: The Overall Winner (⭐⭐⭐)
  Add this **after** the loop (NOT indented):
  ```python
  print()
  print("=" * 44)
  print("            FINAL RESULT")
  print("=" * 44)
  print(f"You: {player_score}   Computer: {computer_score}")

  if player_score > computer_score:
      print("🏆 YOU WIN THE DUEL! Well played!")
  elif computer_score > player_score:
      print("💻 The computer wins the duel. Rematch next time!")
  else:
      print("🤝 It's a draw — evenly matched!")
  ```
  ✅ **Checkpoint:** Game 1 done! Thumbs up and **save your Trinket**. 🎉

  ### 🔢 Guess-the-Number — Stage 5: The Secret Number (⭐)
  Add this BELOW Dice Duel:
  ```python
  print()
  print("=" * 44)
  print("       🔢 GUESS-THE-NUMBER DELUXE 🔢")
  print("=" * 44)
  print("I'm thinking of a number between 1 and 20.")
  print("Can you guess it? I'll say higher or lower!")
  print("=" * 44)

  secret = random.randint(1, 20)
  attempts = 0
  ```
  ✅ **Checkpoint:** `random.randint(1, 20)` can give any number from 1 to 20 — including 1 AND 20!

  ### 🔢 Guess-the-Number — Stage 6: The Guessing Loop (⭐⭐)
  ```python
  while True:
      guess = int(input("Your guess (1-20): "))
      attempts += 1
  ```
  ✅ **Checkpoint:** Why `int(input(...))` and not just `input(...)`? Answer in the chat! (Because `input()` gives TEXT — we need a real number to compare.)

  ### 🔢 Guess-the-Number — Stage 7: Hints + break (⭐⭐⭐)
  Add this **inside** the `while` loop, under `attempts += 1`:
  ```python
      if guess < secret:
          print("📉 Too low! Aim higher.")
      elif guess > secret:
          print("📈 Too high! Aim lower.")
      else:
          print(f"🎉 Correct! The number was {secret}.")
          print(f"You got it in {attempts} attempts.")
          break
  ```
  ✅ **Final checkpoint:** Play it! The `break` stops the loop when you're right. Thumbs up and **save your Trinket**! 🎉
take_home_assignment: |
  ## 📚 Homework: Polish a Game (or Add a Twist!)

  Pick **ONE** of your two games and make it even better. Open your **`Y2-T2-W6-MiniGames`** Trinket — the one from class.

  > ⚠️ **SAVE your finished games!** Next week (Week 7) we combine Dice Duel and Guess-the-Number into one **Arcade Collection**. You'll need this exact file.

  **Choose ONE twist:**
  - 🎲 **Best of 5:** change `rounds = 3` to `rounds = 5` in Dice Duel
  - 🎚️ **Difficulty levels:** in Guess-the-Number, ask the player to pick Easy (`random.randint(1, 10)`) or Hard (`random.randint(1, 50)`) before the game starts
  - ❤️ **Lives system:** give the guesser only 6 attempts — count down, and end the game with "Out of guesses!" if they run out
  - 🏆 **Score bonus:** award points based on attempts, e.g. `score = 20 - attempts` (fewer guesses = higher score)

  **Challenge tiers:**
  - ⭐ Add ONE twist and test that it still works
  - ⭐⭐ Add TWO twists to the same game
  - ⭐⭐⭐ Add a "play again?" question that loops the whole game (use a `while` loop and `break` when the player types `no`)

  > ⚠️ Remember: guesses from `input()` are **text** — always wrap them in `int()` before comparing! And every `while True` loop MUST have a `break` or it runs forever.

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? How Game Computers "Choose" Their Moves

  In Dice Duel, the computer just rolls a **random** die — pure luck, no thinking. That's the simplest kind of game AI: pick a move at random.

  But real game AI can be **strategic**. Imagine a Guess-the-Number game where the COMPUTER is the guesser. A random computer would guess wildly: 3, 17, 8, 1... But a smart computer would guess the **middle** number (10), and depending on "higher" or "lower", jump to the middle of what's left. That way it can win in just a few guesses every time!

  **Discuss in the Zoom chat:** "Would you rather play against a random opponent or a strategic one? Which is more fun — and which is harder to beat?"

  The difference between "pick randomly" and "pick cleverly" is the heart of ALL game AI — from noughts and crosses to world-champion chess programs. You just built the random kind today. The strategic kind is coming later this year! 🎯
---

# Year 2, Lesson 6: Mini-Game Lab 🎮🔬

**Course:** Loops & Logic Mastery
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

- How to build **two complete games** from scratch — live, in one class
- How to use **`random.randint(1, 6)`** to roll a die and **`random.randint(1, 20)`** to pick a secret number
- How to keep **`player_score`** and **`computer_score`** with accumulators inside a loop
- How to run a game with a **`for` loop** (a fixed number of rounds) AND with a **`while` loop** (keep going until the player wins)
- How to give clever **"too high" / "too low"** hints and stop cleanly with **`break`**
- Why guesses from `input()` MUST be wrapped in **`int()`** before you compare them
- You'll finish with **TWO real games you can play and share** 🎉

---

## 🤖 BrightByte's Big Announcement

> *"For five weeks you've been collecting loop superpowers — for loops, while loops, break, continue, random numbers, scores, and lives. Today is the payoff: we head into the LAB and build not one but TWO complete games, live, together. No new theory — just you, your loops, and your logic, snapping together into games you can actually play. And here's the exciting part: next week these very games get combined into your own Arcade. Lab coats on, coders — let's build!"*
> — BrightByte 🤖🎮

---

## 🧩 Part 1: The Plan — Two Games, One Lab

Welcome to the Mini-Game Lab! Today you build **two** games using ONLY the skills you already have:

| Skill (from Weeks 1-5) | Where It Goes Today |
|---|---|
| `import random` + `randint` | Rolling dice, picking a secret number |
| `for` loops + `range()` | Playing a set number of dice rounds |
| `while` loops | Keeping the guessing game going |
| `break` | Stopping the moment the player guesses right |
| Score accumulators (`+= 1`) | Keeping `player_score` and `computer_score` |
| `if` / `elif` / `else` | Deciding winners and giving hints |
| `int()` + `try` / `except` | Turning typed text into real numbers safely |

Here's what the two finished games look like:

**🎲 Dice Duel** — you and the computer each roll a die; higher roll wins the round; best score after 3 rounds wins:
```
============================================
            🎲 DICE DUEL 🎲
============================================
Roll higher than the computer to win the round!
Best score after 3 rounds wins the duel.
============================================

--- Round 1 of 3 ---
Press Enter to roll your die... 🎲
You rolled:      5
Computer rolled: 2
✅ You win this round!
Score → You: 1  Computer: 0
```

**🔢 Guess-the-Number Deluxe** — the computer picks a secret number 1-20 and you guess with hints:
```
============================================
       🔢 GUESS-THE-NUMBER DELUXE 🔢
============================================
I'm thinking of a number between 1 and 20.
Can you guess it? I'll say higher or lower!
============================================
Your guess (1-20): 10
📉 Too low! Aim higher.
Your guess (1-20): 15
🎉 Correct! The number was 15.
You got it in 2 attempts.
```

> 📁 **BEFORE WE START:** Open Trinket, create a **new** Python trinket, and name it **`Y2-T2-W6-MiniGames`**. Both games live in this ONE file. Next week we combine them into an Arcade — do not delete it!

At the very top of the file, type this **once** — both games use it:

```python
import random
```

> 💡 You only need `import random` **once** at the top, even though both games use random numbers. Import it once, use it everywhere below.

---

## 🎲 Part 2: Dice Duel — Stage 1: The Banner

Every good game greets its player. We use the `"=" * 44` trick to draw a tidy border and explain the rules.

```python
print("=" * 44)
print("            🎲 DICE DUEL 🎲")
print("=" * 44)
print("Roll higher than the computer to win the round!")
print("Best score after 3 rounds wins the duel.")
print("=" * 44)
```

**Run it. Output:**
```
============================================
            🎲 DICE DUEL 🎲
============================================
Roll higher than the computer to win the round!
Best score after 3 rounds wins the duel.
============================================
```

✅ **Zoom checkpoint:** See your banner? Thumbs up! 👍

---

## 🎯 Part 3: Dice Duel — Stage 2: Scores and the Rounds Loop

A duel needs scores to keep and rounds to play. We create two **accumulators** — `player_score` and `computer_score` — both starting at `0`. Then a `for` loop plays each round.

```python
player_score = 0
computer_score = 0
rounds = 3

for round_number in range(1, rounds + 1):
    print()
    print(f"--- Round {round_number} of {rounds} ---")
    input("Press Enter to roll your die... 🎲 ")

    player_roll = random.randint(1, 6)
    computer_roll = random.randint(1, 6)

    print(f"You rolled:      {player_roll}")
    print(f"Computer rolled: {computer_roll}")
```

### 🔎 Reading This Line by Line

- `player_score = 0` and `computer_score = 0` — scores start empty, ready to grow
- `rounds = 3` — we play three rounds. Change this one number to play more!
- `for round_number in range(1, rounds + 1):` — this runs 3 times, with `round_number` being 1, 2, then 3
- `input("Press Enter...")` — pauses so the player feels the suspense before each roll
- `random.randint(1, 6)` — a random whole number from **1 to 6**, exactly like a real six-sided die

> 💡 Why `range(1, rounds + 1)` and not `range(rounds)`? Because we want the rounds to count **1, 2, 3** for the player (friendly!), not **0, 1, 2**. Remember: `range` stops BEFORE the second number, so `rounds + 1` (= 4) gives us 1, 2, 3.

✅ **Zoom checkpoint:** In the chat — what is the smallest number `random.randint(1, 6)` could give? (1 — it includes both ends!)

---

## 🧠 Part 4: Dice Duel — Stage 3: Who Wins the Round?

Now the logic. We compare the two rolls and give a point to the higher one. This code goes **inside** the loop — indented under the `for` — so it happens every round.

```python
    if player_roll > computer_roll:
        player_score += 1
        print("✅ You win this round!")
    elif computer_roll > player_roll:
        computer_score += 1
        print("💻 Computer wins this round!")
    else:
        print("🤝 It's a tie — no points this round.")

    print(f"Score → You: {player_score}  Computer: {computer_score}")
```

### 🔎 What's Happening

- `if player_roll > computer_roll:` — your roll is higher, so `player_score += 1` adds a point to you
- `elif computer_roll > player_roll:` — the computer's roll is higher, so it gets the point
- `else:` — the rolls are **equal**, so it's a tie and nobody scores
- The last `print` shows the running score after every round

> ⚠️ **Watch your indentation!** All of this is indented to sit **inside** the `for` loop (8 spaces for the lines under `if`). If it's not indented under the loop, it only runs once instead of every round.

✅ **Zoom checkpoint:** Run all 3 rounds. Do the scores add up round by round? Thumbs up! 👍

---

## 🏆 Part 5: Dice Duel — Stage 4: The Overall Winner

After the loop finishes, we compare the final scores and crown a winner. This code goes **after** the loop — back at the left edge, NOT indented.

```python
print()
print("=" * 44)
print("            FINAL RESULT")
print("=" * 44)
print(f"You: {player_score}   Computer: {computer_score}")

if player_score > computer_score:
    print("🏆 YOU WIN THE DUEL! Well played!")
elif computer_score > player_score:
    print("💻 The computer wins the duel. Rematch next time!")
else:
    print("🤝 It's a draw — evenly matched!")
```

**Example full run (your numbers will differ — it's random!):**
```
--- Round 1 of 3 ---
Press Enter to roll your die... 🎲
You rolled:      5
Computer rolled: 2
✅ You win this round!
Score → You: 1  Computer: 0

--- Round 2 of 3 ---
Press Enter to roll your die... 🎲
You rolled:      3
Computer rolled: 3
🤝 It's a tie — no points this round.
Score → You: 1  Computer: 0

--- Round 3 of 3 ---
Press Enter to roll your die... 🎲
You rolled:      1
Computer rolled: 6
💻 Computer wins this round!
Score → You: 1  Computer: 1

============================================
            FINAL RESULT
============================================
You: 1   Computer: 1
🤝 It's a draw — evenly matched!
```

🎉 **Game 1 complete!** Save your Trinket now. Ama, Kofi, everyone — thumbs up when Dice Duel runs!

> 💡 **Why is it different every time?** Because `random.randint` rolls fresh numbers on every run. That's what makes a game fun — no two duels are the same!

---

## 🔢 Part 6: Guess-the-Number — Stage 5: The Secret Number

Now the second game, in the SAME file, below Dice Duel. The computer picks a secret number and we count the player's attempts.

```python
print()
print("=" * 44)
print("       🔢 GUESS-THE-NUMBER DELUXE 🔢")
print("=" * 44)
print("I'm thinking of a number between 1 and 20.")
print("Can you guess it? I'll say higher or lower!")
print("=" * 44)

secret = random.randint(1, 20)
attempts = 0
```

### 🔎 Reading This

- `secret = random.randint(1, 20)` — the computer picks a hidden number from **1 to 20** (both included)
- `attempts = 0` — a counter that starts at zero and grows with every guess

> 💡 `random.randint(1, 20)` is **inclusive** — the secret could be 1, could be 20, or anything in between. That's 20 possible answers!

✅ **Zoom checkpoint:** Could the secret number be exactly 20? (Yes! `randint` includes both ends.)

---

## 🔁 Part 7: Guess-the-Number — Stage 6: The Guessing Loop

We don't know how many guesses the player needs, so a `for` loop won't do — we need a `while` loop that keeps going until they're right. We also count each attempt.

```python
while True:
    try:
        guess = int(input("Your guess (1-20): "))
    except ValueError:
        print("❌ Please type a whole number, like 12.")
        continue

    attempts += 1
```

### 🔎 The Two MOST Important Lines

- `guess = int(input("Your guess (1-20): "))` — `input()` gives us **text**, so we wrap it in `int()` to get a real number we can compare
- The `try` / `except` (from Term 1) catches it if someone types letters instead of a number — it says "please type a whole number" and `continue`s to ask again, WITHOUT counting a wasted attempt

> ⚠️ **THE #1 GUESSING-GAME BUG:** if you forget `int()` and leave `guess` as text, then `guess < secret` compares **text to a number** — and Python crashes with a `TypeError`! Always `int()` the guess.

✅ **Zoom checkpoint:** Type in the chat — why do we wrap `input()` in `int()`? (So we can compare it as a number: is it less than or greater than the secret?)

---

## 🎯 Part 8: Guess-the-Number — Stage 7: Hints and break

Now the hints. This goes **inside** the `while` loop, indented under `attempts += 1`.

```python
    if guess < secret:
        print("📉 Too low! Aim higher.")
    elif guess > secret:
        print("📈 Too high! Aim lower.")
    else:
        print(f"🎉 Correct! The number was {secret}.")
        print(f"You got it in {attempts} attempts.")
        break
```

### 🔎 How the Loop Ends

- `if guess < secret:` — the guess is too small, so we say "too low"
- `elif guess > secret:` — the guess is too big, so we say "too high"
- `else:` — the only option left is `guess == secret` — they got it! We celebrate and **`break`** out of the loop

> ⚠️ **`break` is what stops the loop!** `while True` means "loop forever" — the ONLY way out is `break`. Without it, the game would keep asking even after you win, forever. The `break` is the exit door.

Finally, a bonus star rating based on how quickly they won — add this **after** the loop (not indented):

```python
if attempts <= 3:
    print("⭐⭐⭐ Incredible guessing!")
elif attempts <= 6:
    print("⭐⭐ Nicely done!")
else:
    print("⭐ You got there in the end — great persistence!")
```

**Example run (using clever "halving" guesses):**
```
Your guess (1-20): 10
📉 Too low! Aim higher.
Your guess (1-20): 15
📈 Too high! Aim lower.
Your guess (1-20): 13
🎉 Correct! The number was 13.
You got it in 3 attempts.
⭐⭐⭐ Incredible guessing!
```

🎉 **Game 2 complete!** Save your Trinket. You built TWO games today!

---

## ✅ Part 9: The Whole Lab — Both Games Together

Here is everything in your `Y2-T2-W6-MiniGames` Trinket, top to bottom:

```python
# 🎮 Y2-T2-W6-MiniGames — Mini-Game Lab
# Made by: [YOUR NAME]

import random

# ============================================================
#  GAME 1: DICE DUEL 🎲
# ============================================================
print("=" * 44)
print("            🎲 DICE DUEL 🎲")
print("=" * 44)
print("Roll higher than the computer to win the round!")
print("Best score after 3 rounds wins the duel.")
print("=" * 44)

player_score = 0
computer_score = 0
rounds = 3

for round_number in range(1, rounds + 1):
    print()
    print(f"--- Round {round_number} of {rounds} ---")
    input("Press Enter to roll your die... 🎲 ")

    player_roll = random.randint(1, 6)
    computer_roll = random.randint(1, 6)

    print(f"You rolled:      {player_roll}")
    print(f"Computer rolled: {computer_roll}")

    if player_roll > computer_roll:
        player_score += 1
        print("✅ You win this round!")
    elif computer_roll > player_roll:
        computer_score += 1
        print("💻 Computer wins this round!")
    else:
        print("🤝 It's a tie — no points this round.")

    print(f"Score → You: {player_score}  Computer: {computer_score}")

print()
print("=" * 44)
print("            FINAL RESULT")
print("=" * 44)
print(f"You: {player_score}   Computer: {computer_score}")

if player_score > computer_score:
    print("🏆 YOU WIN THE DUEL! Well played!")
elif computer_score > player_score:
    print("💻 The computer wins the duel. Rematch next time!")
else:
    print("🤝 It's a draw — evenly matched!")

# ============================================================
#  GAME 2: GUESS-THE-NUMBER DELUXE 🔢
# ============================================================
print()
print("=" * 44)
print("       🔢 GUESS-THE-NUMBER DELUXE 🔢")
print("=" * 44)
print("I'm thinking of a number between 1 and 20.")
print("Can you guess it? I'll say higher or lower!")
print("=" * 44)

secret = random.randint(1, 20)
attempts = 0

while True:
    try:
        guess = int(input("Your guess (1-20): "))
    except ValueError:
        print("❌ Please type a whole number, like 12.")
        continue

    attempts += 1

    if guess < secret:
        print("📉 Too low! Aim higher.")
    elif guess > secret:
        print("📈 Too high! Aim lower.")
    else:
        print(f"🎉 Correct! The number was {secret}.")
        print(f"You got it in {attempts} attempts.")
        break

if attempts <= 3:
    print("⭐⭐⭐ Incredible guessing!")
elif attempts <= 6:
    print("⭐⭐ Nicely done!")
else:
    print("⭐ You got there in the end — great persistence!")
```

🎉 **Two working games, one Trinket. Save it — Week 7 needs it!**

---

## ⚠️ Common Mistakes

**Mistake 1: Forgetting to convert the guess with `int()`**

❌ Wrong — comparing text to a number:
```python
guess = input("Your guess (1-20): ")   # this is TEXT!
if guess < secret:                       # text < number 💥
    print("Too low!")
```
```
TypeError: '<' not supported between instances of 'str' and 'int'
```

✅ Correct — turn the text into a number first:
```python
guess = int(input("Your guess (1-20): "))   # now it's a number
if guess < secret:                            # number < number ✅
    print("Too low!")
```

> `input()` ALWAYS gives you text. To compare or do maths, wrap it in `int()`.

---

**Mistake 2: Forgetting `import random`**

❌ Wrong — using random without importing it:
```python
secret = random.randint(1, 20)
```
```
NameError: name 'random' is not defined
```

✅ Correct — import it ONCE at the very top of your file:
```python
import random
# ...later...
secret = random.randint(1, 20)
```

> Put `import random` at the top. One import covers both games.

---

**Mistake 3: A `while True` loop with no `break` (infinite loop!)**

❌ Wrong — the loop never stops, even when you guess right:
```python
while True:
    guess = int(input("Your guess (1-20): "))
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
    # no else, no break — it asks FOREVER 😱
```

✅ Correct — `break` when the guess is right:
```python
while True:
    guess = int(input("Your guess (1-20): "))
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")
    else:
        print("Correct!")
        break        # ← the exit door!
```

> `while True` means "loop forever". The `break` is the ONLY way out. Never write `while True` without a `break` inside.

---

**Mistake 4: Score lines outside the loop**

❌ Wrong — the win check isn't indented, so it only runs once (after the loop), not each round:
```python
for round_number in range(1, rounds + 1):
    player_roll = random.randint(1, 6)
    computer_roll = random.randint(1, 6)
if player_roll > computer_roll:      # not indented — runs once!
    player_score += 1
```

✅ Correct — indent the check INSIDE the loop so it runs every round:
```python
for round_number in range(1, rounds + 1):
    player_roll = random.randint(1, 6)
    computer_roll = random.randint(1, 6)
    if player_roll > computer_roll:  # indented — runs every round ✅
        player_score += 1
```

---

## 🏗️ Class Activity: Build Both Games Live!

We build **Dice Duel** in four stages, then **Guess-the-Number Deluxe** in three, all in one Trinket named `Y2-T2-W6-MiniGames`. Run after every stage and give a thumbs up 👍. Use the Zoom chat for each checkpoint. Full step-by-step code is in the Class Activities panel — we move together, stage by stage!

---

## 🌟 What's Coming Next Week?

Right now your two games run one after the other, every single time. What if you could **choose** which game to play — like a real arcade machine?

Next week — **Week 7: Arcade Game Collection** — we combine everything:

- 🕹️ A **main menu** that lets the player pick a game: Dice Duel, Guess-the-Number, or Rock-Paper-Scissors
- 🔁 A **"play again" loop** so you can keep playing without restarting
- 🎮 We reuse your EXACT `Y2-T2-W6-MiniGames` code — `player_score`, `computer_score`, `secret`, `guess`, `attempts` — and wire it all behind one menu
- 🏆 The whole thing becomes your term's **Arcade Game Collection**

> Keep your `Y2-T2-W6-MiniGames` Trinket safe — next week we plug both of today's games straight into the Arcade!

---

## 🏆 Today's Achievements

- ✅ You built **TWO complete games** from scratch, live
- ✅ You used **`random.randint`** to roll dice and pick a secret number
- ✅ You kept **`player_score`** and **`computer_score`** with accumulators in a loop
- ✅ You ran a game with a **`for` loop** AND one with a **`while` loop + break**
- ✅ You gave clever **"too high" / "too low"** hints and counted **attempts**
- ✅ You remembered to **`int()`** the guess — no more text-vs-number crashes!

> *"Look at what you just did. Two games. Loops, random numbers, scores, hints, and a clean exit with break — all working, all yours. Five weeks ago these were separate skills. Today they're GAMES. Next week they go in an arcade. You're not learning to code any more — you're building things people can play."*
> — BrightByte 🤖🎮

---

## 📚 Homework: Polish a Game (or Add a Twist!)

Pick **ONE** of your two games and make it better. Open your **`Y2-T2-W6-MiniGames`** Trinket from class.

**Choose ONE twist:**
- 🎲 **Best of 5:** change `rounds = 3` to `rounds = 5` in Dice Duel
- 🎚️ **Difficulty levels:** in Guess-the-Number, let the player pick Easy (`random.randint(1, 10)`) or Hard (`random.randint(1, 50)`)
- ❤️ **Lives system:** give the guesser only 6 attempts and end with "Out of guesses!" if they run out
- 🏆 **Score bonus:** award `score = 20 - attempts` (fewer guesses = higher score)

**Challenge tiers:**
- ⭐ Add ONE twist and test it still works
- ⭐⭐ Add TWO twists to the same game
- ⭐⭐⭐ Add a "play again?" question that loops the whole game (a `while` loop with `break` when they type `no`)

> ⚠️ Remember: `int()` every guess, and every `while True` needs a `break`. **SAVE your Trinket** — Week 7 combines both games into an Arcade!

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't just learn loops today — you built a games lab. See you next week to open the Arcade! 🎮🔬*
