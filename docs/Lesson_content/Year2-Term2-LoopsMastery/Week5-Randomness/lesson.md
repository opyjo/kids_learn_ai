---
title: "Randomness, Lives & Score 🎲🏆"
description: "Bring your games to life with the random module — roll dice, flip coins, pick surprises — then master the score and lives accumulators that power every arcade game"
difficulty: "intermediate"
order_index: 5
course_slug: "year2-term-2-loops-mastery"
is_premium: false
requires_trinket: true
starter_code: |
  # 🎲 Lucky Dice Warm-Up!
  # Every game needs surprises — that is what the random module gives us.

  import random   # ← this line UNLOCKS all the random magic. Never forget it!

  # Round 1: roll one dice (a number from 1 to 6)
  roll = random.randint(1, 6)
  print("You rolled:", roll)

  # Round 2: keep a running SCORE (an accumulator)
  # score = 0
  # score = score + 10
  # print("Score:", score)

  # Round 3: pick a random reward from a list
  # rewards = ["gold coin 🪙", "shield 🛡️", "bonus life ❤️"]
  # print("You found a", random.choice(rewards))

  # Ready to add luck to your games? 🎲
solution_code: |
  # 🎲 Lucky Dice — one possible solution

  import random

  # Round 1: roll one dice
  roll = random.randint(1, 6)
  print("You rolled:", roll)

  # Round 2: a running score
  score = 0
  score = score + 10        # or: score += 10
  print("Score:", score)

  # Round 3: a random reward
  rewards = ["gold coin 🪙", "shield 🛡️", "bonus life ❤️"]
  print("You found a", random.choice(rewards))

  # Bonus: lives that go down, score that goes up, inside a loop
  lives = 3
  score = 0
  while lives > 0:
      roll = random.randint(1, 6)
      print("Rolled a", roll)
      if roll == 1:
          lives -= 1           # lose a life
          print("Ouch! Lives left:", lives)
      else:
          score += roll        # gain points
          print("Score is now:", score)
  print("Game over! Final score:", score)
class_activities: |
  ## 🎮 Class Activity: Lucky Dice 🎲🏆

  Time to build a real dice game! Each round adds a new layer of luck. Type it in Trinket, run it, and give a **thumbs up** in Zoom when your code works. Remember: `import random` goes at the very top!

  ### Round 1 — First Roll (⭐)
  1. Add `import random` at the top
  2. Roll one dice with `random.randint(1, 6)` and store it in `roll`
  3. Print `"You rolled: "` followed by the number

  Run it **five times**. Do you get different numbers? That is randomness at work! Post your luckiest roll in the **Zoom chat**.

  ### Round 2 — Two Dice, Running Total (⭐⭐)
  1. Start a variable `total = 0`
  2. Use a `for` loop that runs **3 times**
  3. Each turn, roll two dice, add them both to `total`, and print the turn number and the total so far
  4. After the loop, print the grand total

  ### Round 3 — Lives & Score Game (⭐⭐⭐)
  1. Start with `lives = 3` and `score = 0`
  2. Use a `while lives > 0:` loop
  3. Each turn, roll one dice:
     - If you roll a **1**, do `lives -= 1` (unlucky!)
     - Otherwise, do `score += roll` (points!)
  4. When lives hit 0, print `"Game over! Final score: ..."`

  ### Bonus — Coin Flip Bonus Round
  Add a coin flip using `random.choice(["heads", "tails"])`. If it lands on `"heads"`, double the points that turn. Paste your highest score in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: Lucky Score 🎲🏆

  Build a **"Lucky Score"** game in Trinket — a dice game with a running score AND lives, all powered by `random`.

  **Requirements:**
  1. `import random` at the very top
  2. Start with a `score = 0` and `lives = 3` **before** the loop
  3. Use a loop that keeps playing **while `lives > 0`**
  4. Each turn, roll a dice with `random.randint(1, 6)`:
     - Rolling a **1** loses a life (`lives -= 1`)
     - Any other roll adds to the score (`score += roll`)
  5. Print the score and lives each turn
  6. When the game ends, print a friendly `"Game over!"` message with the final score 🎉

  **Example run:**
  ```
  🎲 Rolled a 4 — Score: 4, Lives: 3
  🎲 Rolled a 6 — Score: 10, Lives: 3
  🎲 Rolled a 1 — Ouch! Lives: 2
  🎲 Rolled a 3 — Score: 13, Lives: 2
  🎲 Rolled a 1 — Ouch! Lives: 1
  🎲 Rolled a 1 — Ouch! Lives: 0
  💀 Game over! Final score: 13
  ```

  **Challenge tiers:**
  - ⭐ Roll a dice in a loop and keep a running `score` that goes up
  - ⭐⭐ Add `lives` that go down on a roll of 1, and stop the game when lives reach 0
  - ⭐⭐⭐ Add a `random.choice()` reward list — every time the score passes 20, the player wins a random bonus item, printed with an emoji

  **Submit:** Save your Trinket (name it `Y2-T2-W5-Randomness`), click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: Does AI Roll Dice Too?

  You might think computers are always precise and predictable — but AI uses randomness ALL the time!

  - 🎲 When an AI is learning, it often **shuffles its training data** into a random order so it does not memorise the wrong patterns — just like shuffling a deck of cards.
  - 🧭 A game AI sometimes **picks a random move to explore** new strategies instead of always doing the "safe" thing — that is how it discovers clever tricks.
  - 🎨 Image and text generators add a pinch of randomness so they do not give the exact same answer every single time.

  **Discuss in the Zoom chat:** "Why might a little bit of randomness actually make an AI *smarter*?"

  The `random.randint()` and `random.choice()` you learned today are the very same tools real AI engineers use — just on a much bigger scale!
---

# Year 2, Lesson 5: Randomness, Lives & Score 🎲🏆

**Course:** Loops & Logic Mastery
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

- How to use the **`random`** module to add surprises to your programs
- `random.randint(a, b)` for dice rolls and `random.choice(list)` for random picks
- **Accumulator variables**: a `score` that grows and `lives` that shrink
- How to combine randomness and loops into a real game that runs **while `lives > 0`**
- Why score and lives are the beating heart of every arcade game you're about to build

---

## 🤖 BrightByte's Big Idea

> *"Loops make things repeat. Randomness makes them SURPRISING. Put them together and — boom — you've got a game! For the last four weeks you mastered loops that do exactly what you tell them. Today we add the one ingredient every game needs: luck. Dice that could land on anything, coins that flip, rewards you can't predict. And we'll keep score. Because what's a game without a high score to beat?"*
> — BrightByte 🤖🎲

---

## 🎲 Part 1: Unlocking Randomness

So far, your programs have been completely predictable — run them twice, get the same answer. Games are the opposite: you want surprises! Python keeps its randomness tools in a **module** called `random`. A module is like a toolbox — but it's locked until you open it.

You open it with one line at the **very top** of your program:

```python
import random
```

That's it. Now the whole toolbox is yours. Miss that line, and Python won't know what `random` means — it'll crash. (We'll see exactly that crash in Common Mistakes.)

### 🎲 Rolling a Dice: `random.randint()`

The most useful tool for games is `random.randint(a, b)`. It gives you a whole number between `a` and `b`:

```python
import random

roll = random.randint(1, 6)
print("You rolled:", roll)
```

**Every time you run this, you could get a different number:** 1, 2, 3, 4, 5, or 6.

> ⚠️ **Super important:** `randint` is **inclusive on BOTH ends**. `random.randint(1, 6)` can return 1, 2, 3, 4, 5, **or** 6. It's not like `range()` — nothing is left out! A dice has 6 sides, so `randint(1, 6)` is perfect.

| Code | Possible results |
|---|---|
| `random.randint(1, 6)` | 1, 2, 3, 4, 5, 6 (a dice 🎲) |
| `random.randint(1, 2)` | 1 or 2 (a coin flip!) |
| `random.randint(0, 100)` | any number from 0 to 100 |

### 🖥️ Try It Now (Zoom Checkpoint)

Open **Trinket** and name your project `Y2-T2-W5-Randomness`. Type the dice roll above and click **▶ Run** — then run it **five times**. Different numbers each time? Give a **thumbs up** in Zoom! 👍

---

## 🪙 Part 2: Picking a Surprise with `random.choice()`

Dice are great for numbers — but what if you want a random *word* or *item*? For that, put your options in a **list** and use `random.choice()`:

```python
import random

rewards = ["gold coin 🪙", "shield 🛡️", "bonus life ❤️"]
prize = random.choice(rewards)
print("You found a", prize)
```

`random.choice()` reaches into the list and pulls out one item at random. Perfect for:

- 🪙 A coin flip: `random.choice(["heads", "tails"])`
- 🎁 A mystery reward: `random.choice(["100 points", "extra turn", "nothing 😅"])`
- 🗣️ A random reply: `random.choice(["Nice!", "Wow!", "Try again!"])`

> **The difference:** `randint` gives a random **number** in a range. `choice` gives a random **item** from a list. Use whichever fits your game!

---

## 🏆 Part 3: Keeping Score — The Accumulator

A game isn't a game without a score. To keep score, we use a special pattern called an **accumulator** — a variable that starts at a value and gets **updated over and over**.

The golden rule: **start it BEFORE the loop, update it INSIDE the loop.**

```python
score = 0            # start at zero, BEFORE the loop

score = score + 10   # add 10 points
print(score)         # 10

score = score + 5    # add 5 more
print(score)         # 15
```

Read `score = score + 10` as: *"take the score I have, add 10, and store it back in score."* It's so common that Python gives us a shortcut:

| Long way | Shortcut | Meaning |
|---|---|---|
| `score = score + 10` | `score += 10` | add 10 to score |
| `lives = lives - 1` | `lives -= 1` | take 1 away from lives |
| `total = total + roll` | `total += roll` | add a rolled number |

Both do exactly the same thing — `+=` is just less typing. Pros use it all the time.

### ❤️ Lives Go DOWN

Score climbs up; **lives** count down. Same idea, opposite direction:

```python
lives = 3            # start with three lives
lives -= 1           # lose one — now 2
lives -= 1           # lose another — now 1
print("Lives left:", lives)   # Lives left: 1
```

---

## 🔁 Part 4: Loops + Randomness + Score = A GAME

Now we combine everything. Here's the classic pattern: **keep playing while the player still has lives.**

```python
import random

score = 0            # accumulators start BEFORE the loop
lives = 3

while lives > 0:                 # keep going until lives run out
    roll = random.randint(1, 6)  # random surprise each turn
    print("You rolled a", roll)

    if roll == 1:
        lives -= 1               # unlucky — lose a life
        print("Ouch! Lives left:", lives)
    else:
        score += roll            # lucky — gain points
        print("Score is now:", score)

print("Game over! Final score:", score)
```

Trace through what happens:

1. `score` and `lives` are set up **once**, before the loop.
2. Each turn the dice rolls — a surprise!
3. Roll a 1? Lose a life. Roll anything else? Add those points.
4. When `lives` hits 0, `while lives > 0` becomes False and the loop stops.
5. The final score prints — the number to beat next time!

> **This is the exact skeleton of an arcade game.** Change the rules — what earns points, what costs a life — and you have Dice Duel, Guess-the-Number, and more. That's next week!

### 💬 Class Discussion

> **How would you make this game harder?** Type an idea in the **Zoom chat** — e.g. "lose a life on a 1 OR a 2", or "start with only 1 life"!

---

## ⚠️ Common Mistakes (Every Game Dev Hits These!)

**Mistake 1: Forgetting `import random`**

❌ Wrong:
```python
roll = random.randint(1, 6)
print(roll)
```
```
NameError: name 'random' is not defined
```

✅ Correct — the import goes at the **top**:
```python
import random
roll = random.randint(1, 6)
print(roll)
```

> 🤔 **Why?** The `random` tools live inside a locked toolbox. `import random` unlocks it. Without that line, Python has never heard of `random` — hence `NameError`.

---

**Mistake 2: Thinking `randint` leaves out the last number**

❌ A common wrong guess:
```python
# "randint(1, 6) gives 1 to 5, right?"  ← NO!
```

✅ The truth:
```python
import random
print(random.randint(1, 6))   # can be 1, 2, 3, 4, 5, OR 6
```

> `randint` is **inclusive on both ends** — unlike `range(1, 6)`, which stops at 5. A 6-sided dice needs `randint(1, 6)`, not `randint(1, 5)`!

---

**Mistake 3: Resetting the score INSIDE the loop**

❌ Wrong — the score can never grow:
```python
import random
lives = 3
while lives > 0:
    score = 0                 # 💥 resets to 0 every single turn!
    roll = random.randint(1, 6)
    if roll == 1:
        lives -= 1
    else:
        score += roll
    print("Score:", score)    # never adds up 😞
```

✅ Correct — set it up **once**, before the loop:
```python
import random
score = 0                     # ✅ before the loop
lives = 3
while lives > 0:
    roll = random.randint(1, 6)
    if roll == 1:
        lives -= 1
    else:
        score += roll
    print("Score:", score)    # grows properly! 🎉
```

> **The rule again:** accumulators start **before** the loop. Put `score = 0` inside, and you wipe your score clean every turn.

---

## 🎮 Part 5: Class Activity — Lucky Dice

Time to build it live! Follow along in Trinket (`Y2-T2-W5-Randomness`). Full instructions are in the activity panel — here's the map:

- **Round 1 (⭐):** Roll one dice and print it. Run it five times for five different results.
- **Round 2 (⭐⭐):** A `for` loop that rolls **two dice** three times, keeping a **running total**.
- **Round 3 (⭐⭐⭐):** The full **lives & score** game — `while lives > 0`, lose a life on a 1, gain points otherwise.
- **Bonus:** A `random.choice()` coin flip that doubles your points on "heads"!

Give a **thumbs up** in Zoom as you clear each round. 👍

---

## 🌟 What's Coming Next Week?

Next week is the **Mini-Game Lab** 🕹️ — you'll take everything from today and build **TWO complete games from scratch**:

- 🎲 **Dice Duel** — you versus the computer, highest roll wins, best of five!
- 🔢 **Guess-the-Number** — the computer picks a secret number with `random.randint()`, and you use a loop to guess it, with "higher!" and "lower!" hints.

Both games run on exactly the skills you mastered today: `random`, a loop, and score/lives accumulators. You're ready. 💪

---

## 🏆 Today's Achievements

- ✅ You unlocked the `random` module with `import random`
- ✅ You rolled dice with `random.randint(1, 6)` (inclusive both ends!)
- ✅ You picked surprises from a list with `random.choice()`
- ✅ You built **accumulators**: a `score` that goes up and `lives` that go down
- ✅ You combined randomness + loops into a real **lives & score game**

> *"Look what you just did — you built a game that's DIFFERENT every time you play it. Predictable programs are useful. Surprising ones are FUN. And you kept score the whole way through. Next week we turn these skills into two real games. You're basically a game developer now."*
> — BrightByte 🤖🏆

---

## 📚 Homework: Lucky Score 🎲🏆

Build a **"Lucky Score"** game in Trinket — a dice game with a running score AND lives, all powered by `random`.

**Requirements:**
1. `import random` at the very top
2. Start with a `score = 0` and `lives = 3` **before** the loop
3. Keep playing **while `lives > 0`**
4. Each turn, roll a dice with `random.randint(1, 6)`: rolling a **1** loses a life; any other roll adds to the score
5. Print the score and lives each turn
6. End with a friendly `"Game over!"` message and the final score 🎉

**Challenge tiers:**
- ⭐ Roll a dice in a loop and keep a running `score` that goes up
- ⭐⭐ Add `lives` that go down on a roll of 1, and stop the game when lives reach 0
- ⭐⭐⭐ Add a `random.choice()` reward list — every time the score passes 20, win a random bonus item, printed with an emoji

**Submit:** Save your Trinket (name it `Y2-T2-W5-Randomness`), click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*Roll the dice, keep the score, and I'll see you next week for the Mini-Game Lab! 🎲🏆🐍*
