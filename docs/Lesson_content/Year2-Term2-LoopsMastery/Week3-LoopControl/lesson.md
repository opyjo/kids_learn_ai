---
title: "break, continue & Loop Control 🛑⏭️"
description: "Take command of your loops — jump out early with break, skip a turn with continue, use sentinel values and while True to loop until the user quits, and never fear an infinite loop again"
difficulty: "intermediate"
order_index: 3
course_slug: "year2-term-2-loops-mastery"
is_premium: false
requires_trinket: true
starter_code: |
  # 🛑⏭️ Loop Control — Number Bouncer!
  # Goal: bounce through the numbers, SKIP the negatives, STOP at zero.

  numbers = [5, -3, 8, -1, 2, 0, 9]

  # TODO 1: loop through each number in the list
  # for n in numbers:

      # TODO 2: if the number is 0 -> print a message and BREAK (leave the loop)

      # TODO 3: if the number is negative (< 0) -> print "Skipping..." and CONTINUE

      # TODO 4: otherwise -> print "Bounce!" and the number

  # Part 2: a "type quit to stop" loop
  # while True:
  #     word = input("Say something (or 'quit'): ")
  #     if word == "quit":
  #         break
  #     print("You said:", word)
solution_code: |
  # 🛑⏭️ Loop Control — Number Bouncer (one possible solution)

  numbers = [5, -3, 8, -1, 2, 0, 9]

  for n in numbers:
      if n == 0:
          print("Zero found — bouncing out! 🛑")
          break
      if n < 0:
          print("Skipping negative:", n)
          continue
      print("Bounce! 🏀", n)

  print("---")

  # Part 2: keep asking until the user types 'quit'
  while True:
      word = input("Say something (or 'quit' to stop): ")
      if word == "quit":
          print("Goodbye! 👋")
          break
      print("You said:", word)
class_activities: |
  ## 🎮 Class Activity: Number Bouncer 🏀

  Build a loop that bounces through a list, **skips** the numbers it doesn't like, and **stops** the moment it hits a wall. Run it in Trinket and give a **thumbs up** in Zoom when your output matches!

  ### Part 1 — The Bouncer (⭐⭐)
  Using the list `numbers = [5, -3, 8, -1, 2, 0, 9]`:
  1. Loop through every number
  2. If the number is `0`, print a "stopping" message and `break`
  3. If the number is negative, print `Skipping negative:` and `continue`
  4. Otherwise, print `Bounce!` and the number

  **Expected output:**
  ```
  Bounce! 🏀 5
  Skipping negative: -3
  Bounce! 🏀 8
  Skipping negative: -1
  Bounce! 🏀 2
  Zero found — bouncing out! 🛑
  ```
  (Notice: the `9` never prints — `break` stopped everything at `0`!)

  ### Part 2 — Type "quit" to Stop (⭐⭐⭐)
  Add a `while True:` loop that keeps asking the user to type a word, echoes it back, and only stops when they type `quit`. This is the *exact* pattern the arcade menu will use in Week 7!

  ### Bonus Bounce
  Change the list so it has NO zero in it — what happens? Then add your own rule (e.g. `continue` on any number bigger than 100). Paste your favourite output in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: Bouncer Loop OR Menu Until Quit

  Pick **one** project (or do both if you're feeling mighty 💪) and build it in Trinket.

  ### Option A — Bouncer Loop
  Loop through a list of at least **8 numbers** and:
  - `continue` (skip) on numbers you decide to ignore (e.g. negatives, or odd numbers)
  - `break` (stop) when you hit a special "stop" value
  - Print a friendly message for each case

  ### Option B — Menu Until Quit
  Show a menu (at least **3 options**) inside a `while True:` loop that:
  - Reacts to each choice with `if`/`elif`/`else`
  - Keeps looping so the user can choose again and again
  - Uses `break` to leave ONLY when the user chooses "quit"

  **Example run (Option B):**
  ```
  === SNACK MACHINE ===
  1. Crisps
  2. Juice
  3. Quit
  Choose 1-3: 1
  Enjoy your crisps! 🥔
  === SNACK MACHINE ===
  1. Crisps
  2. Juice
  3. Quit
  Choose 1-3: 3
  Bye! 👋
  ```

  **Challenge tiers:**
  - ⭐ Works and leaves cleanly with `break`
  - ⭐⭐ Uses BOTH `break` and `continue` (Option A), or handles a wrong choice politely (Option B)
  - ⭐⭐⭐ Counts how many turns happened before quitting and prints the total at the end

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it where your teacher asks.
ai_activities: |
  ## 🤖 Quick Discussion: How AI "Stops Early" (2 minutes)

  When an AI search tool looks for an answer — say, finding your friend's name in a huge list of contacts — it doesn't keep looking after it finds them. The moment it gets a match, it **stops**. That's exactly what `break` does in your loop!

  **Discuss in the Zoom chat:** "Why is stopping early a GOOD thing? What would happen if a search program kept checking a million more names after it already found the right one?"

  💡 Big idea: fast programs are often clever about *not* doing work they don't need to. `break` is your first taste of writing efficient code — the same instinct that makes AI search feel instant.
---

# Year 2, Lesson 3: break, continue & Loop Control 🛑⏭️

**Course:** Loops & Logic Mastery
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

- How to **jump out of a loop instantly** with `break` — no waiting around
- How to **skip just one turn** of a loop with `continue`
- How to **search a list** and stop the moment you find what you want
- **Sentinel values**: looping until the user types something special like `quit` or `-1`
- The clean `while True:` **+** `break` pattern (the arcade menu will use this in Week 7!)
- What causes **infinite loops**, how to stop one, and how to make sure yours always ends

---

## 🤖 BrightByte Checks In

> *"Last week your loops ran from start to finish, every single time — no stopping, no skipping. But real games don't work like that! A game ends the moment you lose. A menu waits until you choose 'quit'. A search stops the instant it finds a match. This week you become the LOOP BOSS — you decide exactly when to jump out and when to skip a turn. Two tiny words, `break` and `continue`, and suddenly your loops do whatever YOU say. Let's take control."*
> — BrightByte 🤖🛑

---

## 🛑 Part 1: Meet `break` — The Emergency Exit

A normal loop keeps going until it runs out of turns. But sometimes you want to **leave early**. That's what `break` does — the moment Python sees `break`, it jumps straight out of the loop and carries on with the code below it.

```python
for number in range(1, 11):
    print(number)
    if number == 5:
        print("Found 5 — that's enough! 🛑")
        break

print("Loop is over.")
```

**Output:**
```
1
2
3
4
5
Found 5 — that's enough! 🛑
Loop is over.
```

Even though `range(1, 11)` was ready to count all the way to 10, `break` slammed the exit door at 5. Numbers 6, 7, 8, 9, 10 **never happened**.

> 🖥️ **Trinket check:** Type this in, run it, and confirm you see the numbers stop at 5. Give a **thumbs up** in Zoom when your output matches! 👍

Think of `break` as the emergency exit in a cinema: it doesn't matter which row you're in — one push and you're straight outside.

---

## ⏭️ Part 2: Meet `continue` — The Skip Button

`continue` is gentler. It doesn't leave the loop — it just says *"skip the rest of THIS turn and go straight to the next one."*

```python
for number in range(1, 6):
    if number == 3:
        continue
    print(number)
```

**Output:**
```
1
2
4
5
```

See what happened? When `number` was `3`, `continue` fired **before** the `print()`, so 3 got skipped. But the loop kept right on going to 4 and 5. `continue` is a skip button, not a stop button.

> Picture `continue` as skipping a boring song in a playlist — the music keeps playing, you just jump to the next track. ⏭️

---

## 🆚 Part 3: `break` vs `continue` — Know the Difference

These two get mixed up constantly. Here's the rule, side by side:

| Keyword | What It Does | Picture It As | The loop... |
|---|---|---|---|
| `break` | Leaves the loop **completely**, right now | 🛑 Emergency exit door | ...is OVER |
| `continue` | Skips the rest of **this one turn** | ⏭️ Skip button | ...keeps going |

A quick memory trick:

- **break** = "I'm done. Get me out of here."
- **continue** = "Not this one — next!"

### 💬 Class Discussion

> **You're writing a loop that reads exam scores. You want to ignore any score below 0 (a typing mistake), but STOP completely if you ever see the score `999` (the 'end of list' marker).**
> Which do you use for the `< 0` scores — `break` or `continue`? Which for `999`?
> Type your answer in the **Zoom chat!**

*(Answer: `continue` for the negatives — skip them but keep reading. `break` for `999` — that's the signal to stop entirely.)*

---

## 🔍 Part 4: Searching a List and Stopping Early

Here's where `break` really shines. Imagine looking for a name in a register. Once you find it, why keep reading? `break` lets you stop the instant you succeed.

```python
names = ["Ama", "Kofi", "Zara", "Tunde", "Ngozi"]
target = "Zara"

for name in names:
    print("Checking:", name)
    if name == target:
        print(f"Found {target}! Stop searching. ✅")
        break
```

**Output:**
```
Checking: Ama
Checking: Kofi
Checking: Zara
Found Zara! Stop searching. ✅
```

Python checked Ama, Kofi, and Zara — then `break` fired. It **never** checked Tunde or Ngozi, because it didn't need to. That's `if` inside a loop, teaming up with `break` to make a real **search**.

> 🤖 This is exactly how search tools work: find the answer, then STOP. No wasted effort. You'll hear more about this in today's AI discussion.

---

## 🚪 Part 5: Sentinel Values & the `while True:` Pattern

A **sentinel value** is a special "stop signal" — a value that means *"we're finished now."* Like `quit`, or `-1`, or `999`. The user (or your data) sends the sentinel, and your loop knows to end.

Watch this clean, professional pattern — `while True:` **plus** `break`:

```python
while True:
    word = input("Type a word (or 'quit' to stop): ")
    if word == "quit":
        print("Goodbye! 👋")
        break
    print("You typed:", word)
```

**Example run:**
```
Type a word (or 'quit' to stop): hello
You typed: hello
Type a word (or 'quit' to stop): pizza
You typed: pizza
Type a word (or 'quit' to stop): quit
Goodbye! 👋
```

### Wait — `while True`? Isn't that an infinite loop?!

Good eye! `while True:` means *"loop forever"* — the condition is **always** true. On its own, that would never stop. The `break` is what makes it safe: it's a **guaranteed exit**. As long as there's a `break` that the user can reach, the loop will end.

> ⚠️ **The golden rule of `while True:`** — it MUST contain a `break` the user can trigger. No reachable `break` = a loop that runs forever. Always write the `break` line *first*, before you write anything else in the loop.

You could also do this with a sentinel number:

```python
total = 0
while True:
    entry = int(input("Enter a number to add (or -1 to finish): "))
    if entry == -1:
        break
    total = total + entry

print("Your total is:", total)
```

**Example run:**
```
Enter a number to add (or -1 to finish): 10
Enter a number to add (or -1 to finish): 5
Enter a number to add (or -1 to finish): -1
Your total is: 15
```

Here `-1` is the sentinel — it doesn't get added, it just signals "stop". This is a huge pattern in games: "keep taking turns until the player runs out of lives".

> 🕹️ **Arcade tie-in:** When you build the Arcade Collection in Week 7, the main menu will be a `while True:` loop with a "type 5 to quit" break — the *exact* pattern you just learned. You're building the engine of your game collection right now.

---

## 🌀 Part 6: Taming Infinite Loops

An **infinite loop** is a loop that never ends — it just runs and runs, freezing your program. Every coder makes one eventually. The trick is knowing *why* they happen and how to escape.

**The #1 cause:** a `while` loop whose condition never becomes false. Look at this **broken** example:

```python
# ⚠️ DO NOT leave this running — it never stops!
count = 1
while count <= 5:
    print("Counting:", count)
    # 😱 We forgot to change count! It stays 1 forever.
```

Because `count` is never updated, `count <= 5` is *always* true, so it prints `Counting: 1` over and over... forever. 😵

**How to stop a runaway loop in Trinket:** click the **Stop** button (the ⏹️ square that appears where **▶ Run** was). It halts the program instantly. Every coder needs this button — now you know where it is!

**The fix** — always make sure something *moves the loop towards ending*:

```python
count = 1
while count <= 5:
    print("Counting:", count)
    count = count + 1   # ✅ this line is what makes the loop END
```

**Output:**
```
Counting: 1
Counting: 2
Counting: 3
Counting: 4
Counting: 5
```

| Loop type | How it safely ends |
|---|---|
| `for` loop over a range or list | Ends automatically when the items run out |
| `while` with a condition | The condition must eventually become **false** (change the variable!) |
| `while True:` | Must contain a reachable **`break`** |

> 💡 **Golden rule:** before you run any loop, ask yourself — *"What makes this stop?"* If you can't answer, don't run it yet.

---

## ⚠️ Common Mistakes

**Mistake 1: The forgotten update (infinite loop)**

❌ Wrong — `count` never changes, so this runs forever:
```python
count = 0
while count < 3:
    print("Hi!")
```
```
Hi!
Hi!
Hi!
Hi!
... (forever — hit the Stop button! ⏹️)
```

✅ Correct — the loop moves towards its end:
```python
count = 0
while count < 3:
    print("Hi!")
    count = count + 1
```
```
Hi!
Hi!
Hi!
```

---

**Mistake 2: `break` or `continue` OUTSIDE a loop**

❌ Wrong — there's no loop here for `break` to break out of:
```python
print("Start")
break
```
```
SyntaxError: 'break' outside loop
```

✅ Correct — `break` lives *inside* a loop:
```python
for i in range(10):
    print("Start")
    break
```
```
Start
```

> `continue` on its own gives a very similar error: `SyntaxError: 'continue' not properly in loop`. **These two words only ever live inside a loop.** If Python complains, check your indentation — is your `break` actually *inside* the `for` or `while`?

---

**Mistake 3: `while True:` with no reachable `break`**

❌ Wrong — the `break` can never be reached, so it loops forever:
```python
while True:
    name = input("Name (type 'quit'): ")
    print("Hi", name)
    if name == "quit":
        break
```
Spot it? We print `Hi quit` and only *then* check for quit — that's clumsy, but it does still stop. The truly dangerous version forgets the `break` entirely. **Always write your `break` line and test that you can reach it.**

✅ Cleaner — check for the sentinel FIRST:
```python
while True:
    name = input("Name (type 'quit'): ")
    if name == "quit":
        break
    print("Hi", name)
```
```
Name (type 'quit'): Ama
Hi Ama
Name (type 'quit'): quit
```

---

## 🎮 Class Activity: Number Bouncer 🏀

Time to put `break` and `continue` in the same program! Open Trinket (name it **`Y2-T2-W3-LoopControl`**) and build the Number Bouncer.

**Part 1 — The Bouncer.** Using `numbers = [5, -3, 8, -1, 2, 0, 9]`:
- Loop through every number
- If it's `0` → print a stopping message and `break`
- If it's negative → print `Skipping negative:` and `continue`
- Otherwise → print `Bounce!` and the number

**Expected output:**
```
Bounce! 🏀 5
Skipping negative: -3
Bounce! 🏀 8
Skipping negative: -1
Bounce! 🏀 2
Zero found — bouncing out! 🛑
```

The `9` never prints — `break` ended everything at `0`. That's your two loop-control words working as a team.

**Part 2 — Type "quit" to stop.** Add a `while True:` loop that echoes whatever the user types and stops only when they type `quit`.

**Thumbs up in Zoom** when your output matches! Fast finishers: try the Bonus Bounce in the activity panel. 🚀

---

## 🌟 What's Coming Next Week?

You can now control a *single* loop like a boss. But what happens when you put a loop **inside another loop**?

Next week (**Week 4: Nested Loops & Patterns**) you'll use loops-within-loops to draw grids, stars, and shapes with code:

```python
for row in range(3):
    for star in range(5):
        print("⭐", end="")
    print()
```

That prints a whole rectangle of stars! Nested loops are how games draw boards, maps, and levels. Bring your imagination. 🌟

---

## 🏆 Today's Achievements

- ✅ You used `break` to jump out of a loop the instant you were done
- ✅ You used `continue` to skip a single turn and keep going
- ✅ You searched a list and stopped early when you found a match
- ✅ You mastered the `while True:` **+** `break` pattern with sentinel values (`quit`, `-1`)
- ✅ You know what causes infinite loops — and exactly how to stop one
- ✅ You built the Number Bouncer, using `break` and `continue` together

> *"Loop Boss unlocked! 🎖️ You don't follow your loops any more — they follow YOU. Jump out when you want, skip what you want, run until the player says 'quit'. That `while True:` + break trick? You'll use it in every game you ever write. Rest those coding fingers — next week we go two levels deep with loops inside loops."*
> — BrightByte 🤖🛑

---

## 📚 Homework: Bouncer Loop OR Menu Until Quit

Pick **one** (or both if you're feeling mighty 💪) and build it in Trinket.

**Option A — Bouncer Loop:** Loop through at least **8 numbers**, use `continue` to skip some, and `break` to stop at a special value.

**Option B — Menu Until Quit:** A menu with at least **3 options** inside a `while True:` loop that keeps going until the user chooses "quit" (using `break`).

**Challenge tiers:**
- ⭐ Works and leaves cleanly with `break`
- ⭐⭐ Uses BOTH `break` and `continue` (A), or handles a wrong choice politely (B)
- ⭐⭐⭐ Counts how many turns happened before quitting and prints the total

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it where your teacher asks.

---

*You're the Loop Boss now — jump out, skip ahead, and never fear an infinite loop again. See you next week for nested loops! 🛑⏭️🐍*
