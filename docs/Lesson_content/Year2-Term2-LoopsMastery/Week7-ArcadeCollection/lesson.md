---
title: "Project: Arcade Game Collection 🕹️🏆"
description: "Combine three games — Dice Duel, Guess the Number, and brand-new Rock, Paper, Scissors — behind one menu-driven loop into a single Arcade program with a shared score, ready to show off next week"
difficulty: "intermediate"
order_index: 7
course_slug: "year2-term-2-loops-mastery"
is_premium: false
requires_trinket: true
starter_code: |
  # 🕹️ Y2-T2-W7-Arcade
  # Made by: [YOUR NAME]
  # We build this TOGETHER, stage by stage, live on Zoom!

  import random

  total_score = 0     # ONE score, shared across all games — set it ONCE, out here!
  playing = True

  while playing:
      # --- The Arcade menu (prints every time round the loop) ---
      print()
      print("=" * 40)
      print("      🕹️  BRIGHTBYTE ARCADE  🏆")
      print("=" * 40)
      print(f"  Total score: {total_score}")
      print("-" * 40)
      print("  1. Dice Duel 🎲")
      print("  2. Guess the Number 🔢")
      print("  3. Rock, Paper, Scissors ✊✋✌️")
      print("  4. Quit")
      print("=" * 40)

      choice = input("Pick a game (1-4): ")   # choice is a STRING → compare choice == "1"

      if choice == "1":
          pass   # 🎲 Dice Duel goes here (Stage 2)
      elif choice == "2":
          pass   # 🔢 Guess the Number goes here (Stage 3)
      elif choice == "3":
          pass   # ✊ Rock, Paper, Scissors goes here (Stage 4)
      elif choice == "4":
          print(f"Final score: {total_score}. Thanks for playing! 👋")
          playing = False
      else:
          print("Please pick 1-4.")
solution_code: |
  # 🕹️ Y2-T2-W7-Arcade — the full Arcade Game Collection
  # Made by: [YOUR NAME]

  import random

  total_score = 0     # ONE shared score for the whole arcade — set ONCE, out here
  playing = True

  while playing:
      # --- The Arcade menu ---
      print()
      print("=" * 40)
      print("      🕹️  BRIGHTBYTE ARCADE  🏆")
      print("=" * 40)
      print(f"  Total score: {total_score}")
      print("-" * 40)
      print("  1. Dice Duel 🎲")
      print("  2. Guess the Number 🔢")
      print("  3. Rock, Paper, Scissors ✊✋✌️")
      print("  4. Quit")
      print("=" * 40)

      choice = input("Pick a game (1-4): ")

      # ===== GAME 1: DICE DUEL (best of 3) =====
      if choice == "1":
          print()
          print("🎲 DICE DUEL — best of 3 rounds! 🎲")
          player_wins = 0
          computer_wins = 0
          for round_number in range(1, 4):
              input(f"Round {round_number} — press Enter to roll! ")
              player_roll = random.randint(1, 6)
              computer_roll = random.randint(1, 6)
              print(f"You rolled {player_roll}. Computer rolled {computer_roll}.")
              if player_roll > computer_roll:
                  print("You win the round! ✅")
                  player_wins = player_wins + 1
              elif computer_roll > player_roll:
                  print("Computer wins the round. 🤖")
                  computer_wins = computer_wins + 1
              else:
                  print("It's a tie — no points this round.")
          if player_wins > computer_wins:
              print(f"🏆 You won Dice Duel {player_wins}-{computer_wins}! +10 points")
              total_score = total_score + 10
          elif computer_wins > player_wins:
              print(f"Computer won Dice Duel {computer_wins}-{player_wins}. No points this time.")
          else:
              print(f"Dice Duel tied {player_wins}-{computer_wins}. +5 points for the draw!")
              total_score = total_score + 5

      # ===== GAME 2: GUESS THE NUMBER =====
      elif choice == "2":
          print()
          print("🔢 GUESS THE NUMBER — I'm thinking of 1 to 20. 🔢")
          secret = random.randint(1, 20)
          guesses_left = 5
          won = False
          while guesses_left > 0:
              print(f"Guesses left: {guesses_left}")
              try:
                  guess = int(input("Your guess (1-20): "))
              except ValueError:
                  print("⚠️ Please type a whole number!")
                  continue
              if guess == secret:
                  print("🎉 Correct!")
                  won = True
                  break
              elif guess < secret:
                  print("Too low! ⬆️")
              else:
                  print("Too high! ⬇️")
              guesses_left = guesses_left - 1
          if won:
              points = guesses_left * 2
              print(f"You guessed it! +{points} points")
              total_score = total_score + points
          else:
              print(f"Out of guesses! The number was {secret}. No points this time.")

      # ===== GAME 3: ROCK, PAPER, SCISSORS =====
      elif choice == "3":
          print()
          print("✊✋✌️ ROCK, PAPER, SCISSORS! ✊✋✌️")
          print("Type your move: rock, paper, or scissors")
          player = input("Your move: ").lower()
          options = ["rock", "paper", "scissors"]
          if player not in options:
              print("That's not a valid move! Type rock, paper, or scissors next time.")
          else:
              computer = random.choice(options)
              print(f"You chose {player}. Computer chose {computer}.")
              if player == computer:
                  print("It's a tie! 🤝 +2 points")
                  total_score = total_score + 2
              elif player == "rock" and computer == "scissors":
                  print("Rock smashes scissors — you win! 🏆 +5 points")
                  total_score = total_score + 5
              elif player == "scissors" and computer == "paper":
                  print("Scissors cut paper — you win! 🏆 +5 points")
                  total_score = total_score + 5
              elif player == "paper" and computer == "rock":
                  print("Paper covers rock — you win! 🏆 +5 points")
                  total_score = total_score + 5
              else:
                  print("Computer wins this round. 🤖 No points.")

      # ===== QUIT =====
      elif choice == "4":
          print(f"Final score: {total_score}. Thanks for playing! 👋")
          playing = False

      # ===== ANYTHING ELSE =====
      else:
          print("Please pick 1-4.")

  print("=" * 40)
  print("Arcade closed. Come back soon! 🎉")
class_activities: |
  ## 🏗️ Class Activity: Build the Arcade — Live, Together!

  We assemble the arcade in **five stages**, live on Zoom. After each stage, **run your code** and give a **thumbs up** 👍 when it works. Nobody moves on until the whole class is ready!

  > 📁 **First:** open a NEW Trinket and name it **`Y2-T2-W7-Arcade`**. This is the program you'll bring to next week's showcase.

  ### Stage 1 — The Menu + The Loop (⭐⭐)
  Type the `import random`, `total_score = 0`, `playing = True`, and the `while playing:` menu. Add the Quit branch (4) and the `else`. Leave `pass` in the game branches for now.
  ✅ **Checkpoint:** Run it. Does the menu appear again and again? Does 4 quit? Does 9 say "Please pick 1-4"? 👍

  ### Stage 2 — Add Game 1: Dice Duel (⭐⭐)
  Replace the `pass` under `if choice == "1":` with the best-of-3 Dice Duel. Add points to `total_score`.
  ✅ **Checkpoint:** Play Dice Duel, then land back on the menu with your score updated. 👍

  ### Stage 3 — Add Game 2: Guess the Number (⭐⭐⭐)
  Replace the `pass` under `elif choice == "2":`. Use `int()` inside `try/except`, a `while guesses_left > 0` loop, and `break` when correct.
  ✅ **Checkpoint:** Win it in 2 guesses and watch your points jump. Post your score in the chat!

  ### Stage 4 — Add Game 3: Rock, Paper, Scissors (⭐⭐⭐)
  Replace the `pass` under `elif choice == "3":`. Player types a move; computer uses `random.choice`. Decide the winner with `if/elif`.
  ✅ **Checkpoint:** Beat the computer at least once. Try typing "banana" — does it say "not a valid move" instead of crashing? 👍

  ### Stage 5 — Score + Quit Polish (⭐⭐)
  Make sure `total_score` shows on the menu and in the goodbye message — and that it is set ONCE at the top, never reset inside the loop.
  ✅ **Final checkpoint:** Play all three games in one run, then quit. Does your final score add up? 🎉 **Save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Make Your Arcade Showcase-Ready ✨

  Next week is the **Arcade Showcase** — you demo your arcade live and earn your **Python Pro Badge**. This week, add ONE personal touch and make sure your arcade NEVER crashes.

  **Requirements:**
  1. Open your **`Y2-T2-W7-Arcade`** Trinket
  2. Make sure all three games work AND you always land back on the menu afterwards
  3. Add **one personal touch** (pick from the ideas below)
  4. Test it hard — try to BREAK it. Type letters, empty answers, huge numbers. It should survive everything.

  **Personal-touch ideas (pick ONE):**
  - 🎨 A themed title banner — your arcade's name, a fancy border, your favourite emojis
  - 🕹️ A **4th game** as menu option 5 (a coin-flip guess, a lucky-dip prize, or a quick maths quiz)
  - 🏅 A **high-score message** — after quitting, print an encouraging message that depends on `total_score` (use `if`!)
  - 🎭 Themed game titles and cheeky computer trash-talk

  **Challenge tiers:**
  - ⭐ Add a themed banner and make sure nothing crashes
  - ⭐⭐ Add a high-score message that changes with the final score
  - ⭐⭐⭐ Add a working 4th game as option 5 (remember to update the menu AND the goodbye number range!)

  > 💡 Bring THIS exact program to next week's showcase — you'll run it live on Zoom and earn your badge!

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

  🔗 **New here or lost your file?** Start a fresh Trinket at [trinket.io](https://trinket.io) and paste in today's arcade code.
ai_activities: |
  ## 🤖 Did You Know? RPS Bots Can Learn Your Patterns

  Your Rock, Paper, Scissors computer plays totally at random with `random.choice` — so it can never be beaten *or* fooled. But the world's best RPS-playing programs do something cleverer: they **watch what you do** and try to predict your next move.

  Humans are terrible at being random. We fall into habits — maybe you throw rock when you're nervous, or copy whatever just beat you. A smart bot keeps a little tally of your past moves, spots your favourite, and plays the counter to it. That's a tiny taste of how real AI works: **look at past data, spot a pattern, predict what comes next.** It's the same idea behind apps that guess the next word you'll type.

  **Discuss in the Zoom chat:** "Do YOU have an RPS habit? What would a bot need to remember to beat you?"

  You'll build programs that actually remember and learn later in Year 2 — today, enjoy that your bot is a fair, honest, coin-flipping opponent. 🎲
---

# Year 2, Lesson 7: Project — Arcade Game Collection 🕹️🏆

**Course:** Loops & Logic Mastery
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Learn Today

- How to combine **three separate games** into ONE program behind a single menu
- How to use the **menu-driven `while` loop** pattern (`while playing:`) to run game after game
- How to keep a **shared score** (`total_score`) that grows across all three games
- How to build a brand-new game — **Rock, Paper, Scissors** — with `random.choice` and `if/elif`
- You'll finish with a complete **Arcade** you'll demo next week to earn your **Python Pro Badge!** 🎉

---

## 🤖 BrightByte's Challenge

> *"This is it — build week TWO. Over the last few weeks you made Dice Duel and Guess the Number. Great games... but they live in separate Trinkets, and you have to re-run each one on its own. Real arcades don't work like that! Today we build ONE program — a proper arcade cabinet — with a menu that lets a player pick any game, play it, and come straight back for more, all while ONE score keeps climbing. Plus a brand-new game to round it off. By the end you'll have something that genuinely feels like a real app. Let's build the arcade!"*
> — BrightByte 🤖✨

---

## 🎯 Part 1: The Plan — One Arcade, Three Games, One Menu

Here's the big idea. Instead of three separate programs, we build **one** program shaped like this:

```python
import random
total_score = 0
playing = True
while playing:
    # print the ARCADE menu (1 Dice Duel, 2 Guess, 3 RPS, 4 Quit)
    choice = input("Pick a game (1-4): ")
    if choice == "1":
        # Dice Duel goes here
    elif choice == "2":
        # Guess the Number goes here
    elif choice == "3":
        # Rock, Paper, Scissors goes here
    elif choice == "4":
        # quit
        playing = False
    else:
        print("Please pick 1-4.")
```

You already know this shape! It's the **menu-driven `while` loop** — the exact same pattern you used for the Calculator Deluxe in Term 1. Each game just drops into its own `if`/`elif` branch.

### Three things to hold in your head

| Idea | Why it matters |
|---|---|
| 🔁 **The loop keeps the arcade open** | After a game finishes, the loop goes round again and shows the menu — no re-running! |
| 🔤 **`choice` is a STRING** | `input()` always gives text, so we compare `choice == "1"`, not `choice == 1` |
| 🏆 **`total_score` lives OUTSIDE the loop** | We set it ONCE at the top so it survives from game to game. Never reset it inside! |

> 📁 **BEFORE WE START:** Open a new Trinket and save it as **`Y2-T2-W7-Arcade`**. This is the program you'll bring to next week's showcase — give it a good home!

---

## 🕹️ Part 2: Stage 1 — The Menu + The Loop

We always build the skeleton first. Type this and run it **before** adding any games:

```python
import random

total_score = 0     # ONE score, shared across all games — set ONCE, out here!
playing = True

while playing:
    print()
    print("=" * 40)
    print("      🕹️  BRIGHTBYTE ARCADE  🏆")
    print("=" * 40)
    print(f"  Total score: {total_score}")
    print("-" * 40)
    print("  1. Dice Duel 🎲")
    print("  2. Guess the Number 🔢")
    print("  3. Rock, Paper, Scissors ✊✋✌️")
    print("  4. Quit")
    print("=" * 40)

    choice = input("Pick a game (1-4): ")

    if choice == "1":
        pass   # 🎲 Dice Duel goes here next
    elif choice == "2":
        pass   # 🔢 Guess the Number goes here next
    elif choice == "3":
        pass   # ✊ Rock, Paper, Scissors goes here next
    elif choice == "4":
        print(f"Final score: {total_score}. Thanks for playing! 👋")
        playing = False
    else:
        print("Please pick 1-4.")

print("=" * 40)
print("Arcade closed. Come back soon! 🎉")
```

> 💡 `pass` is a Python word that means "do nothing for now". It's a placeholder so the program runs even before we've written the games. We'll replace each `pass` with a real game, one at a time.

### 🔎 How the switch works

- `playing = True` — the arcade is **open**
- `while playing:` — "keep looping while the arcade is open"
- When the player picks **4 (Quit)**, we set `playing = False`, and the loop stops on its next check

✅ **Zoom checkpoint:** Run it. Does the menu keep coming back? Does **4** quit cleanly? Does **9** say "Please pick 1-4"? Thumbs up! 👍

---

## 🎲 Part 3: Stage 2 — Add Game 1: Dice Duel

Now we bring back **Dice Duel** — best of 3 rounds. Replace the `pass` under `if choice == "1":` with this:

```python
if choice == "1":
    print()
    print("🎲 DICE DUEL — best of 3 rounds! 🎲")
    player_wins = 0
    computer_wins = 0
    for round_number in range(1, 4):
        input(f"Round {round_number} — press Enter to roll! ")
        player_roll = random.randint(1, 6)
        computer_roll = random.randint(1, 6)
        print(f"You rolled {player_roll}. Computer rolled {computer_roll}.")
        if player_roll > computer_roll:
            print("You win the round! ✅")
            player_wins = player_wins + 1
        elif computer_roll > player_roll:
            print("Computer wins the round. 🤖")
            computer_wins = computer_wins + 1
        else:
            print("It's a tie — no points this round.")
    if player_wins > computer_wins:
        print(f"🏆 You won Dice Duel {player_wins}-{computer_wins}! +10 points")
        total_score = total_score + 10
    elif computer_wins > player_wins:
        print(f"Computer won Dice Duel {computer_wins}-{player_wins}. No points this time.")
    else:
        print(f"Dice Duel tied {player_wins}-{computer_wins}. +5 points for the draw!")
        total_score = total_score + 5
```

### 🔎 What's happening

- A `for` loop runs **exactly 3 rounds** (`range(1, 4)` gives 1, 2, 3) — so it always ends
- `random.randint(1, 6)` rolls a dice for you and one for the computer
- We **count** round wins in `player_wins` and `computer_wins` (accumulators — your Week 2 skill!)
- After 3 rounds, whoever won more rounds wins the duel — and we **add points to `total_score`**

> 💡 Notice we added points to the **shared** `total_score`, not a new variable. That's the whole point of the arcade — one score, growing all game.

✅ **Zoom checkpoint:** Play Dice Duel. When it finishes, do you land back on the menu with your new score showing at the top? 👍

---

## 🔢 Part 4: Stage 3 — Add Game 2: Guess the Number

Next, **Guess the Number**. The computer picks a secret number from 1 to 20, and you get 5 guesses. Replace the `pass` under `elif choice == "2":`:

```python
elif choice == "2":
    print()
    print("🔢 GUESS THE NUMBER — I'm thinking of 1 to 20. 🔢")
    secret = random.randint(1, 20)
    guesses_left = 5
    won = False
    while guesses_left > 0:
        print(f"Guesses left: {guesses_left}")
        try:
            guess = int(input("Your guess (1-20): "))
        except ValueError:
            print("⚠️ Please type a whole number!")
            continue
        if guess == secret:
            print("🎉 Correct!")
            won = True
            break
        elif guess < secret:
            print("Too low! ⬆️")
        else:
            print("Too high! ⬇️")
        guesses_left = guesses_left - 1
    if won:
        points = guesses_left * 2
        print(f"You guessed it! +{points} points")
        total_score = total_score + points
    else:
        print(f"Out of guesses! The number was {secret}. No points this time.")
```

### 🔎 What's happening

- `int(input(...))` turns the typed answer into a whole number — guesses are **numeric**, so we convert
- `try` / `except ValueError` is our safety net: type "banana" and it says "please type a whole number" instead of crashing
- `continue` sends us back to the top of the loop **without** using up a guess — a free retry after a typo
- `break` jumps out the moment you guess right
- `won = True/False` is a flag that remembers whether you won, so we can score correctly afterwards
- The fewer guesses you use, the more `guesses_left` you keep — so `guesses_left * 2` rewards fast wins!

> ⚠️ **Watch the loop end:** `while guesses_left > 0` stops when you run out of guesses, and `break` stops it when you win. Either way, it always ends — no forever loops.

✅ **Zoom checkpoint:** Win it in 2 guesses and watch your points jump. Post your score in the chat! 💬

---

## ✊ Part 5: Stage 4 — Add Game 3: Rock, Paper, Scissors (Brand New!)

Time for a **brand-new game**. The rules you know from the playground:

- ✊ **Rock** smashes ✌️ **scissors**
- ✌️ **Scissors** cut ✋ **paper**
- ✋ **Paper** covers ✊ **rock**
- Same move on both sides? **Tie!**

Replace the `pass` under `elif choice == "3":`:

```python
elif choice == "3":
    print()
    print("✊✋✌️ ROCK, PAPER, SCISSORS! ✊✋✌️")
    print("Type your move: rock, paper, or scissors")
    player = input("Your move: ").lower()
    options = ["rock", "paper", "scissors"]
    if player not in options:
        print("That's not a valid move! Type rock, paper, or scissors next time.")
    else:
        computer = random.choice(options)
        print(f"You chose {player}. Computer chose {computer}.")
        if player == computer:
            print("It's a tie! 🤝 +2 points")
            total_score = total_score + 2
        elif player == "rock" and computer == "scissors":
            print("Rock smashes scissors — you win! 🏆 +5 points")
            total_score = total_score + 5
        elif player == "scissors" and computer == "paper":
            print("Scissors cut paper — you win! 🏆 +5 points")
            total_score = total_score + 5
        elif player == "paper" and computer == "rock":
            print("Paper covers rock — you win! 🏆 +5 points")
            total_score = total_score + 5
        else:
            print("Computer wins this round. 🤖 No points.")
```

### 🔎 What's happening

- `.lower()` makes "ROCK", "Rock" and "rock" all count the same — kind to the player
- `random.choice(options)` picks the computer's move fairly from the list
- We check the **three ways you win** with `if/elif`. If none of those match (and it wasn't a tie), the `else` means the computer won
- Typing something silly like "banana"? The `if player not in options:` guard catches it — no crash, no unfair loss

> 💡 **Why check the three winning cases?** It's clearer than trying to list every losing case. We handle the tie first, then your three wins, and everything else falls to `else` — the computer's win.

✅ **Zoom checkpoint:** Beat the computer at least once. Then type "banana" — does it say "not a valid move" instead of crashing? 👍

---

## 🏆 Part 6: Stage 5 — Score + Quit

Your arcade already keeps score! The magic is where `total_score` lives:

```python
total_score = 0     # ← set ONCE, at the very top, OUTSIDE the loop
playing = True
while playing:
    # ... games add to total_score in here ...
```

Because `total_score = 0` sits **outside** the loop, it's set once and then **grows** every time a game adds to it. The menu shows it (`print(f"  Total score: {total_score}")`), and so does the goodbye:

```python
elif choice == "4":
    print(f"Final score: {total_score}. Thanks for playing! 👋")
    playing = False
```

> ⚠️ **The classic trap:** if you put `total_score = 0` *inside* the `while` loop by mistake, it resets to zero every single time the menu appears — so your score can never grow. It MUST be set once, above the loop.

✅ **Zoom checkpoint:** Play all three games in one run, then quit. Does your final score add everything up? 🎉

---

## ✅ Part 7: The Whole Arcade Program

Here is your complete arcade. This is exactly what should be in your `Y2-T2-W7-Arcade` Trinket:

```python
# 🕹️ Y2-T2-W7-Arcade — the full Arcade Game Collection
# Made by: [YOUR NAME]

import random

total_score = 0     # ONE shared score for the whole arcade — set ONCE, out here
playing = True

while playing:
    print()
    print("=" * 40)
    print("      🕹️  BRIGHTBYTE ARCADE  🏆")
    print("=" * 40)
    print(f"  Total score: {total_score}")
    print("-" * 40)
    print("  1. Dice Duel 🎲")
    print("  2. Guess the Number 🔢")
    print("  3. Rock, Paper, Scissors ✊✋✌️")
    print("  4. Quit")
    print("=" * 40)

    choice = input("Pick a game (1-4): ")

    # ===== GAME 1: DICE DUEL (best of 3) =====
    if choice == "1":
        print()
        print("🎲 DICE DUEL — best of 3 rounds! 🎲")
        player_wins = 0
        computer_wins = 0
        for round_number in range(1, 4):
            input(f"Round {round_number} — press Enter to roll! ")
            player_roll = random.randint(1, 6)
            computer_roll = random.randint(1, 6)
            print(f"You rolled {player_roll}. Computer rolled {computer_roll}.")
            if player_roll > computer_roll:
                print("You win the round! ✅")
                player_wins = player_wins + 1
            elif computer_roll > player_roll:
                print("Computer wins the round. 🤖")
                computer_wins = computer_wins + 1
            else:
                print("It's a tie — no points this round.")
        if player_wins > computer_wins:
            print(f"🏆 You won Dice Duel {player_wins}-{computer_wins}! +10 points")
            total_score = total_score + 10
        elif computer_wins > player_wins:
            print(f"Computer won Dice Duel {computer_wins}-{player_wins}. No points this time.")
        else:
            print(f"Dice Duel tied {player_wins}-{computer_wins}. +5 points for the draw!")
            total_score = total_score + 5

    # ===== GAME 2: GUESS THE NUMBER =====
    elif choice == "2":
        print()
        print("🔢 GUESS THE NUMBER — I'm thinking of 1 to 20. 🔢")
        secret = random.randint(1, 20)
        guesses_left = 5
        won = False
        while guesses_left > 0:
            print(f"Guesses left: {guesses_left}")
            try:
                guess = int(input("Your guess (1-20): "))
            except ValueError:
                print("⚠️ Please type a whole number!")
                continue
            if guess == secret:
                print("🎉 Correct!")
                won = True
                break
            elif guess < secret:
                print("Too low! ⬆️")
            else:
                print("Too high! ⬇️")
            guesses_left = guesses_left - 1
        if won:
            points = guesses_left * 2
            print(f"You guessed it! +{points} points")
            total_score = total_score + points
        else:
            print(f"Out of guesses! The number was {secret}. No points this time.")

    # ===== GAME 3: ROCK, PAPER, SCISSORS =====
    elif choice == "3":
        print()
        print("✊✋✌️ ROCK, PAPER, SCISSORS! ✊✋✌️")
        print("Type your move: rock, paper, or scissors")
        player = input("Your move: ").lower()
        options = ["rock", "paper", "scissors"]
        if player not in options:
            print("That's not a valid move! Type rock, paper, or scissors next time.")
        else:
            computer = random.choice(options)
            print(f"You chose {player}. Computer chose {computer}.")
            if player == computer:
                print("It's a tie! 🤝 +2 points")
                total_score = total_score + 2
            elif player == "rock" and computer == "scissors":
                print("Rock smashes scissors — you win! 🏆 +5 points")
                total_score = total_score + 5
            elif player == "scissors" and computer == "paper":
                print("Scissors cut paper — you win! 🏆 +5 points")
                total_score = total_score + 5
            elif player == "paper" and computer == "rock":
                print("Paper covers rock — you win! 🏆 +5 points")
                total_score = total_score + 5
            else:
                print("Computer wins this round. 🤖 No points.")

    # ===== QUIT =====
    elif choice == "4":
        print(f"Final score: {total_score}. Thanks for playing! 👋")
        playing = False

    # ===== ANYTHING ELSE =====
    else:
        print("Please pick 1-4.")

print("=" * 40)
print("Arcade closed. Come back soon! 🎉")
```

🎉 **You built a three-game arcade with a shared score!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: Comparing `choice` as a number instead of text**

❌ Wrong — `choice` is a string, so this never matches and you always fall to `else`:
```python
choice = input("Pick a game (1-4): ")
if choice == 1:          # 1 is a number; choice is text
    print("Dice Duel!")
```
```
Please pick 1-4.
```
(No matter what you type, it says "Please pick 1-4" — frustrating!)

✅ Correct — compare text to text with quotes:
```python
if choice == "1":        # both are strings
    print("Dice Duel!")
```

---

**Mistake 2: Forgetting `playing = False` (the forever loop)**

❌ Wrong — the switch never flips, so the arcade never closes:
```python
while playing:
    choice = input("Pick a game (1-4): ")
    if choice == "4":
        print("Bye!")
        # forgot: playing = False
```
The menu keeps reappearing forever, even after you pick 4!

✅ Correct — flip the switch to stop the loop:
```python
    if choice == "4":
        print("Bye!")
        playing = False
```

> 😵 Stuck in a forever loop? In Trinket, click **Stop** (or re-run) to escape it.

---

**Mistake 3: Resetting `total_score` inside the loop**

❌ Wrong — `total_score = 0` is INSIDE the loop, so it resets every menu turn and never grows:
```python
playing = True
while playing:
    total_score = 0      # 💥 wipes your score every single round!
    # ... menu and games ...
```

✅ Correct — set it ONCE, above the loop, so it survives from game to game:
```python
total_score = 0          # set once, out here
playing = True
while playing:
    # ... games add to it in here ...
```

---

**Mistake 4: Forgetting `int()` on the guess**

❌ Wrong — `guess` is text, so it never equals the number `secret`:
```python
secret = random.randint(1, 20)
guess = input("Your guess: ")     # still text!
if guess == secret:               # "10" is never equal to 10
    print("Correct!")
```

✅ Correct — convert the guess to a whole number first:
```python
guess = int(input("Your guess: "))
if guess == secret:
    print("Correct!")
```

---

**Mistake 5: Getting the Rock, Paper, Scissors rules backwards**

❌ Wrong — this says paper beats scissors, which is not the rule:
```python
elif player == "paper" and computer == "scissors":
    print("You win!")     # 💥 scissors CUT paper — you lose!
```

✅ Correct — the three real winning cases:
```python
elif player == "rock" and computer == "scissors":     # rock smashes scissors
    print("You win!")
elif player == "scissors" and computer == "paper":     # scissors cut paper
    print("You win!")
elif player == "paper" and computer == "rock":         # paper covers rock
    print("You win!")
```

---

## 🏗️ Class Activity: Build the Arcade Together

We assemble the arcade **stage by stage**, live on Zoom — nobody moves on until the whole class gives a thumbs up 👍:

1. **Stage 1** — the menu + the loop (with `pass` placeholders)
2. **Stage 2** — drop in Dice Duel
3. **Stage 3** — drop in Guess the Number
4. **Stage 4** — drop in Rock, Paper, Scissors
5. **Stage 5** — check the shared score and polish the quit

After each stage: **run it, test it, and post a 👍 in the chat.** See the full stage guide in the activity panel.

---

## 🌟 What's Coming Next Week?

Your arcade is **finished** — and it's genuinely impressive. Next week is **Week 8: Arcade Showcase + the Python Pro Badge!** 🎉

- 🎤 You'll **demo your arcade** live on Zoom — share your screen and show off all three games
- 💬 You'll give and get kind **peer feedback** on each other's personal touches
- 🧠 We'll play a fun **Term 2 quiz** covering loops, `break`/`continue`, `random`, and menus
- 🏅 You'll earn your **Python Pro Badge** for completing the Loops & Logic Mastery term!

> Bring your `Y2-T2-W7-Arcade` Trinket next week — make sure all three games run, nothing crashes, and you're proud of it. It's showtime!

---

## 🏆 Today's Achievements

- ✅ You combined **three games** into ONE menu-driven program
- ✅ You used the **`while playing:` loop** to run game after game without re-running
- ✅ You kept a **shared `total_score`** that grows across every game
- ✅ You built a brand-new game — **Rock, Paper, Scissors** — with `random.choice` and `if/elif`
- ✅ You guarded against **bad input** with `try/except` and a valid-move check
- ✅ You have a complete **Arcade Game Collection** — your term project is built!

> *"Look at what you just built. THREE games, one menu, one score, no crashes. Eight weeks ago you were counting with `range()` — today you've assembled a real arcade cabinet in code. This is exactly how professional programs are structured: a loop, a menu, and neat branches doing the work. Next week you show it to the world and claim your Python Pro Badge. You've earned it."*
> — BrightByte 🤖✨

---

## 📚 Homework: Make Your Arcade Showcase-Ready ✨

Next week is the **Arcade Showcase** — you demo your arcade live and earn your **Python Pro Badge**. This week, add ONE personal touch and make sure your arcade NEVER crashes.

**Requirements:**
1. Open your **`Y2-T2-W7-Arcade`** Trinket
2. Make sure all three games work AND you always land back on the menu afterwards
3. Add **one personal touch** (pick from the ideas below)
4. Test it hard — try to BREAK it. Type letters, empty answers, huge numbers. It should survive everything.

**Personal-touch ideas (pick ONE):**
- 🎨 A themed title banner — your arcade's name, a fancy border, your favourite emojis
- 🕹️ A **4th game** as menu option 5 (a coin-flip guess, a lucky-dip prize, or a quick maths quiz)
- 🏅 A **high-score message** — after quitting, print an encouraging message that depends on `total_score` (use `if`!)
- 🎭 Themed game titles and cheeky computer trash-talk

**Challenge tiers:**
- ⭐ Add a themed banner and make sure nothing crashes
- ⭐⭐ Add a high-score message that changes with the final score
- ⭐⭐⭐ Add a working 4th game as option 5 (remember to update the menu AND the goodbye number range!)

> 💡 Bring THIS exact program to next week's showcase — you'll run it live on Zoom and earn your badge!

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

🔗 **New here or lost your file?** Start a fresh Trinket at [trinket.io](https://trinket.io) and paste in today's arcade code.

---

*You didn't just build three games — you built an arcade. Next week, take a bow and claim your Python Pro Badge! 🕹️🏆*
