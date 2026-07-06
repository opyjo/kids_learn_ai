---
title: "While Loops & Game Loops 🔄🎮"
description: "Go deeper with while loops — loop UNTIL something happens, build the 'Keep Guessing' and 'Play Again' patterns every game needs, and meet the game loop skeleton of your Term 2 arcade"
difficulty: "intermediate"
order_index: 2
course_slug: "year2-term-2-loops-mastery"
is_premium: false
requires_trinket: true
starter_code: |
  # 🔄 Y2-T2-W2-WhileLoops
  # Made by: [YOUR NAME]
  # Today: the "Keep Guessing" loop + the "Play Again" wrapper!

  # --- Warm-up: a countdown with a while loop ---
  count = 5
  while count > 0:
      print(count)
      count = count - 1      # <-- THIS line is what stops the loop!
  print("Blast off! 🚀")

  # --- TODO 1: The "Keep Guessing" loop ---
  # Ask the user for the magic word again and again UNTIL they get it right.
  # secret = "python"
  # guess = ""
  # while guess != secret:
  #     guess = input("Guess the magic word: ")
  # print("You got it! 🔓")

  # --- TODO 2: Wrap a game in a "Play Again" loop ---
  # play_again = "yes"
  # while play_again == "yes":
  #     # ... the game goes in here ...
  #     play_again = input("Play again? (yes/no): ")
solution_code: |
  # 🔄 Y2-T2-W2-WhileLoops — The Magic Word Game
  # Made by: [YOUR NAME]

  print("=" * 32)
  print("     🔮 THE MAGIC WORD GAME 🔮")
  print("=" * 32)

  # The "Play Again" wrapper keeps the whole game running
  play_again = "yes"
  while play_again == "yes":

      # Reset the game each time we play
      secret = "python"
      guess = ""
      tries = 0

      # The "Keep Guessing" loop — repeat UNTIL the guess is correct
      while guess != secret:
          guess = input("Guess the magic word: ")
          tries = tries + 1
          if guess != secret:
              print("Nope! Try again. 🤔")

      print("🎉 YES! You cracked it in", tries, "tries!")

      # Ask at the END whether to loop the whole game again
      play_again = input("Play again? (yes/no): ")

  print("Thanks for playing! 👋")
class_activities: |
  ## 🎮 Class Activity: Build the Magic Word Game 🔮

  We build it live, in three stages. After each stage, **run your code** and give a **thumbs up** 👍 in Zoom when it works. We move together!

  > 📁 **First:** open Trinket and make a new trinket named **`Y2-T2-W2-WhileLoops`**.

  ### Stage 1 — Warm-Up Countdown (⭐)
  Type the countdown and run it. Then change it to count down from **10**.
  ```python
  count = 5
  while count > 0:
      print(count)
      count = count - 1
  print("Blast off! 🚀")
  ```
  ✅ **Checkpoint:** Numbers count DOWN, then "Blast off!". Thumbs up! 👍

  ### Stage 2 — The Keep Guessing Loop (⭐⭐)
  Loop UNTIL the user types the magic word.
  ```python
  secret = "python"
  guess = ""
  while guess != secret:
      guess = input("Guess the magic word: ")
      if guess != secret:
          print("Nope! Try again. 🤔")
  print("🎉 YES! You cracked it! 🔓")
  ```
  ✅ **Checkpoint:** Wrong guesses ask again; the right word ends the loop. 👍

  ### Stage 3 — The Play Again Wrapper (⭐⭐⭐)
  Wrap the whole game in a `while play_again == "yes":` loop, add a `tries` counter, and ask at the END.
  ```python
  play_again = "yes"
  while play_again == "yes":
      secret = "python"
      guess = ""
      tries = 0
      while guess != secret:
          guess = input("Guess the magic word: ")
          tries = tries + 1
          if guess != secret:
              print("Nope! Try again. 🤔")
      print("🎉 YES! You cracked it in", tries, "tries!")
      play_again = input("Play again? (yes/no): ")
  print("Thanks for playing! 👋")
  ```
  ✅ **Final checkpoint:** Win, type `yes`, play again; type `no` to stop. 🎉 **Save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: The Persistent Robot 🤖

  Build a robot that will NOT let you pass until you answer its riddle correctly — a perfect job for a `while` loop that repeats UNTIL the answer is right.

  **Requirements:**
  1. Store the correct answer in a variable (e.g. `answer_key = "clock"`)
  2. Use a `while` loop that keeps asking the riddle UNTIL the user gets it right
  3. Give a friendly hint on each wrong answer
  4. Print a celebration message when they finally solve it 🎉

  **Example run:**
  ```
  🤖 I have hands but cannot clap. What am I? table
  🤖 Not quite — I tell you the time. Try again!
  🤖 I have hands but cannot clap. What am I? clock
  🤖 CORRECT! Beep boop — you may pass! ✅
  ```

  **Challenge tiers:**
  - ⭐ The robot loops until the riddle is answered correctly
  - ⭐⭐ Count the attempts with a `tries` variable and report them at the end
  - ⭐⭐⭐ Add a "Play Again" wrapper so the robot asks a fresh riddle round after round

  > 💡 **Prefer a countdown?** Swap the riddle for a **Countdown Launcher**: ask the user for a start number with `int(input(...))`, then use `while count > 0:` to count down to `BLAST OFF! 🚀`.

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? AI Agents Live in a Loop

  You just built a **game loop** — code that repeats until something happens. It turns out AI *agents* (the smart programs that book flights or tidy your calendar) work exactly the same way!

  An AI agent runs a loop called **observe → decide → act**:
  - 👀 **Observe** — look at what's happening now
  - 🧠 **Decide** — work out the best next move
  - 🎮 **Act** — do it

  ...and it repeats that loop **until it reaches its goal** — just like your `while guess != secret:` loop repeats until the word is right.

  **Discuss in the Zoom chat:** "If you built a robot to tidy your room, what would it *observe*, *decide*, and *act* on — and when should its loop STOP?"

  Every clever AI you use is, at its heart, a very well-written loop. You're learning the real thing. 🔄
---

# Year 2, Lesson 2: While Loops & Game Loops 🔄🎮

**Course:** Loops & Logic Mastery
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

- How a `while` loop repeats **UNTIL something happens** (not a fixed number of times)
- The difference between `for` and `while` — and how to pick the right one
- How to **count** with a `while` loop (up AND down)
- The two patterns every game needs: the **"Keep Guessing"** loop and the **"Play Again"** wrapper
- How to spot and escape an **infinite loop** (and how to hit Stop in Trinket! 🛑)

---

## 🤖 BrightByte Returns!

> *"Last week you mastered `for` loops — brilliant for when you know EXACTLY how many times to repeat. But real games don't work like that! A game doesn't say 'let the player guess three times'. It says 'keep going UNTIL they win, or UNTIL they run out of lives.' For that, you need the `while` loop's superpower — looping until something happens. Today you build the very skeleton of the arcade you'll create in Week 7. Let's loop!"*
> — BrightByte 🤖🔄

---

## 🔁 Part 1: Remember the `running` Flag?

Back in Term 1, you wrapped your calculator in a `while` loop with an on/off switch called `running`:

```python
running = True
while running:
    answer = input("Type 'stop' to quit: ")
    if answer == "stop":
        running = False       # flip the switch OFF — the loop ends
print("Loop finished! 👋")
```

### 🔎 How the switch works

- `running = True` — the switch starts **on**
- `while running:` — "keep looping as long as `running` is True"
- When the user types `stop`, we set `running = False`
- Next time the loop checks, `running` is False, so it **stops**

That `running` flag is one way to control a `while` loop. Today we go deeper — we'll let the loop watch a **condition** and stop itself the moment the condition changes.

> 💡 A `while` loop checks its condition, runs the indented block, then checks **again** — round and round — until the condition becomes False.

---

## 🔢 Part 2: `while` With a Condition — Counting Down

You don't always need a separate `running` switch. A `while` loop can watch **any** condition. The classic example is a **countdown**:

```python
count = 5
while count > 0:
    print(count)
    count = count - 1
print("Blast off! 🚀")
```

Let's trace it **exactly**, line by line:

| Check `count > 0`? | Prints | Then `count` becomes |
|---|---|---|
| `5 > 0` ✅ True | `5` | `4` |
| `4 > 0` ✅ True | `4` | `3` |
| `3 > 0` ✅ True | `3` | `2` |
| `2 > 0` ✅ True | `2` | `1` |
| `1 > 0` ✅ True | `1` | `0` |
| `0 > 0` ❌ False | *(stops)* | — |

**Output:**
```
5
4
3
2
1
Blast off! 🚀
```

⚠️ **The most important line is `count = count - 1`.** It changes the loop variable a little bit each time, so the condition eventually becomes False. Without it, the loop would run **forever** — more on that danger later!

### Counting UP too

Same idea, going the other way:

```python
number = 1
while number <= 5:
    print("Count:", number)
    number = number + 1
print("Done counting! ✅")
```

**Output:**
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
Done counting! ✅
```

---

## 🎮 Part 3: `while lives > 0` — Looping Until the Game Ends

Here's where `while` becomes a **game** tool. Games count down **lives**:

```python
lives = 3
while lives > 0:
    print("❤️ Lives left:", lives)
    print("You hit a trap! 💥")
    lives = lives - 1
print("Game over! 🎮")
```

**Output:**
```
❤️ Lives left: 3
You hit a trap! 💥
❤️ Lives left: 2
You hit a trap! 💥
❤️ Lives left: 1
You hit a trap! 💥
Game over! 🎮
```

Notice you never wrote "repeat 3 times" — you said **"keep going while there are lives left"**. The loop stops itself when `lives` hits 0. That's the `while` mindset.

> 💡 In Week 5 you'll add real **randomness** so the player loses lives unpredictably. Today, the pattern is the point.

---

## 🤔 Part 4: `for` vs `while` — Which One Do I Use?

This is the big idea of the whole lesson. Both loops repeat code — but you choose between them by asking one question: **do I know how many times?**

| Use a `for` loop when... | Use a `while` loop when... |
|---|---|
| You know **HOW MANY** times | You loop **UNTIL** something happens |
| "Print each of these 5 names" | "Keep asking until they type the password" |
| "Do this 10 times" | "Keep playing while lives > 0" |
| Counting through a range | Waiting for a condition to change |
| `for i in range(10):` | `while guess != secret:` |

### The quick test

> ❓ **"Do I know the exact number of repeats before I start?"**
> - **Yes** → use `for`
> - **No, it depends on what the user does** → use `while`

**Examples to say out loud:**
- "Print the numbers 1 to 100" → I know it's 100 → **`for`**
- "Keep asking for a guess until it's right" → could be 1 try or 50 → **`while`**
- "Give the player 3 lives" → I know it's 3... but they might lose them faster → a **`while lives > 0`** reads best!

---

## 🔮 Part 5: The "Keep Guessing" Loop

Every guessing game needs this pattern: **repeat UNTIL the answer is right.** We don't know how many guesses it'll take — so it's a `while` loop.

```python
secret = "python"
guess = ""
while guess != secret:
    guess = input("Guess the magic word: ")
    if guess != secret:
        print("Nope! Try again. 🤔")
print("🎉 YES! You cracked it! 🔓")
```

### 🔎 Why does `guess = ""` come FIRST?

The `while` loop checks `guess != secret` **before** it runs even once. So `guess` has to already exist! We set it to an empty string `""` first — that's guaranteed to be *different* from `"python"`, so the loop is sure to start at least once.

**Let's trace a real game:**

| User types | `guess != secret`? | What happens |
|---|---|---|
| *(start)* | `"" != "python"` ✅ | enter the loop |
| `snake` | `"snake" != "python"` ✅ | "Nope! Try again." → loop again |
| `java` | `"java" != "python"` ✅ | "Nope! Try again." → loop again |
| `python` | `"python" != "python"` ❌ | loop **stops** → celebrate! |

> ⚠️ **Notice the inner `if guess != secret:`** — it stops us printing "Nope!" on the winning guess. Little touch, big polish.

---

## 🔁 Part 6: The "Play Again" Wrapper

The single most useful game pattern of the whole term. After a game ends, real players want to go again. So we wrap the WHOLE game in a loop that asks **at the end**:

```python
play_again = "yes"
while play_again == "yes":
    print("🎲 Imagine an exciting game happening here!")
    play_again = input("Play again? (yes/no): ")
print("Thanks for playing! 👋")
```

### 🔎 How it flows

- `play_again = "yes"` — set to `"yes"` first, so the loop runs at least once
- The game happens inside the loop
- At the **end**, we ask `"Play again? (yes/no): "`
- Type `yes` → the condition is still True → play again!
- Type anything else (like `no`) → the condition is False → the loop stops

> 💡 This is the **game loop** — the beating heart of every arcade game. In Week 7 you'll wrap your whole Arcade Game Collection in exactly this pattern. Learn it well today!

---

## 🏆 Part 7: Putting It Together — The Magic Word Game

Now we combine both patterns: a **"Keep Guessing"** loop *inside* a **"Play Again"** wrapper. This is the full program you'll build in the class activity:

```python
# 🔄 Y2-T2-W2-WhileLoops — The Magic Word Game

print("=" * 32)
print("     🔮 THE MAGIC WORD GAME 🔮")
print("=" * 32)

play_again = "yes"
while play_again == "yes":

    # Reset the game each round
    secret = "python"
    guess = ""
    tries = 0

    # Keep guessing UNTIL correct
    while guess != secret:
        guess = input("Guess the magic word: ")
        tries = tries + 1
        if guess != secret:
            print("Nope! Try again. 🤔")

    print("🎉 YES! You cracked it in", tries, "tries!")

    # Ask at the END whether to go again
    play_again = input("Play again? (yes/no): ")

print("Thanks for playing! 👋")
```

**Example run:**
```
================================
     🔮 THE MAGIC WORD GAME 🔮
================================
Guess the magic word: snake
Nope! Try again. 🤔
Guess the magic word: python
🎉 YES! You cracked it in 2 tries!
Play again? (yes/no): no
Thanks for playing! 👋
```

> 💡 There are **two** `while` loops here — one wrapping the other. The inner one runs a single game; the outer one decides whether to play another. Two loops, two jobs. 🎯

---

## ⚠️ Common Mistakes

**Mistake 1: The infinite loop (forgetting to change the variable) — the classic!**

❌ Wrong — `count` never changes, so `count > 0` is ALWAYS true. The loop runs FOREVER:
```python
count = 5
while count > 0:
    print(count)
    # forgot: count = count - 1
```
```
5
5
5
5
5
... (forever! 😱)
```

✅ Correct — change the loop variable so the condition can become False:
```python
count = 5
while count > 0:
    print(count)
    count = count - 1
```

> 🛑 **Stuck in an infinite loop in Trinket?** Click the **Stop** button (the ▶ Run button turns into a Stop square while your code is running). If your output is scrolling forever, that's your clue — hit Stop, then fix the missing update line.

---

**Mistake 2: Changing the variable the WRONG WAY**

❌ Wrong — we want to count DOWN, but we add. `count` only grows, so `count > 0` never becomes False:
```python
count = 5
while count > 0:
    print(count)
    count = count + 1     # 💥 goes 5, 6, 7, 8... forever!
```

✅ Correct — subtract to head towards the exit:
```python
    count = count - 1     # goes 5, 4, 3... reaches 0 and stops
```

> 💡 Always ask: "does my change move the variable **towards** making the condition False?" If not, it's an infinite loop.

---

**Mistake 3: Using `=` instead of `==`**

❌ Wrong — a single `=` means "assign", not "compare":
```python
while play_again = "yes":
    print("Playing!")
```
```
SyntaxError: invalid syntax
```

✅ Correct — use `==` to compare:
```python
while play_again == "yes":
    print("Playing!")
```

> 💡 Remember: `=` puts a value IN a box. `==` asks "are these two the same?"

---

**Mistake 4: Forgetting to create the variable before the loop**

❌ Wrong — the `while` line checks `guess` before it exists:
```python
secret = "python"
while guess != secret:      # 💥 guess was never created!
    guess = input("Guess: ")
```
```
NameError: name 'guess' is not defined
```

✅ Correct — create `guess` first so the condition can be checked:
```python
secret = "python"
guess = ""                  # now guess exists (and isn't the secret)
while guess != secret:
    guess = input("Guess: ")
```

---

## 🎮 Class Activity: Build the Magic Word Game 🔮

We build it live, in three stages. After each stage, **run your code** and give a **thumbs up** 👍 in Zoom when it works. We move together!

> 📁 **First:** open Trinket and make a new trinket named **`Y2-T2-W2-WhileLoops`**.

### Stage 1 — Warm-Up Countdown (⭐)
Type the countdown and run it. Then change it to count down from **10**.
```python
count = 5
while count > 0:
    print(count)
    count = count - 1
print("Blast off! 🚀")
```
✅ **Checkpoint:** Numbers count DOWN, then "Blast off!". Thumbs up! 👍

### Stage 2 — The Keep Guessing Loop (⭐⭐)
Loop UNTIL the user types the magic word.
```python
secret = "python"
guess = ""
while guess != secret:
    guess = input("Guess the magic word: ")
    if guess != secret:
        print("Nope! Try again. 🤔")
print("🎉 YES! You cracked it! 🔓")
```
✅ **Checkpoint:** Wrong guesses ask again; the right word ends the loop. 👍

### Stage 3 — The Play Again Wrapper (⭐⭐⭐)
Wrap the whole game in a `while play_again == "yes":` loop, add a `tries` counter, and ask at the END. (See the full program in Part 7 above.)

✅ **Final checkpoint:** Win, type `yes`, play again; type `no` to stop. 🎉 **Save your Trinket!**

---

## 🔥 Warm-Up Game: Predict the Loop Count!

Before the build, your teacher will drop a few loops in the **Zoom chat**. Your job: **predict how many times each one prints** before we run it. Here's one to try now:

```python
n = 3
while n > 0:
    print("⭐")
    n = n - 1
```

<details>
<summary>🔎 How many stars? Click to check</summary>

**Three stars.** `n` is 3, 2, 1 (prints each time), then 0 — which fails `n > 0`, so it stops. 🌟🌟🌟

</details>

---

## 🌟 What's Coming Next Week?

You can now loop UNTIL something happens — but what if you want to **jump out early**, or **skip** just one turn? Next week is **Week 3: break, continue & loop control!** 🎛️

- 🛑 `break` — leap out of a loop the instant you want to (like a secret escape hatch)
- ⏭️ `continue` — skip the rest of THIS turn and jump straight to the next one
- 🧠 How to combine them with `while` to build smarter, cleaner game loops

> Bring your `Y2-T2-W2-WhileLoops` Magic Word Game next week — we'll upgrade it with `break` to add a "give up" option!

---

## 🏆 Today's Achievements

- ✅ You went deeper with `while` — looping on a **condition**, not just a `running` flag
- ✅ You can **count up and down** with a `while` loop
- ✅ You know **when to use `for` vs `while`** (do I know how many times?)
- ✅ You built the **"Keep Guessing"** loop and the **"Play Again"** wrapper
- ✅ You combined them into a real **game loop** — the Magic Word Game
- ✅ You can spot, escape, and fix an **infinite loop** in Trinket 🛑

> *"Look at what you just built — a game that keeps going until the player wins, then asks if they want to play again. That 'game loop' is the exact skeleton of every arcade machine, every mobile game, every app that says 'try again?'. You didn't just learn a loop today — you learned the heartbeat of games. In Week 7, this becomes your whole arcade."*
> — BrightByte 🤖🎮

---

## 📚 Homework: The Persistent Robot 🤖

Build a robot that will NOT let you pass until you answer its riddle correctly — a perfect job for a `while` loop that repeats UNTIL the answer is right.

**Requirements:**
1. Store the correct answer in a variable (e.g. `answer_key = "clock"`)
2. Use a `while` loop that keeps asking the riddle UNTIL the user gets it right
3. Give a friendly hint on each wrong answer
4. Print a celebration message when they finally solve it 🎉

**Example run:**
```
🤖 I have hands but cannot clap. What am I? table
🤖 Not quite — I tell you the time. Try again!
🤖 I have hands but cannot clap. What am I? clock
🤖 CORRECT! Beep boop — you may pass! ✅
```

**Challenge tiers:**
- ⭐ The robot loops until the riddle is answered correctly
- ⭐⭐ Count the attempts with a `tries` variable and report them at the end
- ⭐⭐⭐ Add a "Play Again" wrapper so the robot asks a fresh riddle round after round

> 💡 **Prefer a countdown?** Swap the riddle for a **Countdown Launcher**: ask the user for a start number with `int(input(...))`, then use `while count > 0:` to count down to `BLAST OFF! 🚀`.

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You just learned the heartbeat of every game — the loop that runs until you win, then asks "again?". Next week, we learn to break out. See you there! 🔄🎮*
