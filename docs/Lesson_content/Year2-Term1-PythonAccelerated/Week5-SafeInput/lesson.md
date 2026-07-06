---
title: "Smart Decisions & Safe Input 🛡️🐍"
description: "Level up your if/elif/else with and/or/not, then master the pro skill that stops programs crashing: validating user input before you use it"
difficulty: "intermediate"
order_index: 5
course_slug: "year2-term-1-python-accelerated"
is_premium: false
requires_trinket: true
starter_code: |
  # 🛡️ Bouncer at the Door
  # Only let the user in if they enter a VALID age.

  # Step 1: ask for the age (it arrives as TEXT)
  age_text = input("How old are you? ")

  # Step 2: check it is a whole number BEFORE converting
  # if age_text.isdigit():
  #     age = int(age_text)
  #     ... your checks here ...
  # else:
  #     print("That is not a number!")

  # Ready to build a program that never crashes? 🛡️
solution_code: |
  # 🛡️ Bouncer at the Door — one possible solution

  age_text = input("How old are you? ")

  if age_text.isdigit():
      age = int(age_text)
      if age >= 1 and age <= 120:
          print("Welcome in! 🎉 Age", age, "is allowed.")
      else:
          print("Sorry, that age is out of range (1-120). 🚫")
  else:
      print("That is not a whole number — please try again. 🚫")
class_activities: |
  ## 🎮 Class Activity: Bouncer at the Door 🚪🛡️

  You are the bouncer for the coolest club in town: **The Code Lounge**. Only people with a VALID age get in. Your program must never crash — not even if someone types "banana" at the door!

  ### Round 1 — Predict the Output (⭐)
  Before you type anything, read each line and post your guess in the **Zoom chat**:

  ```python
  print("12".isdigit())
  print("banana".isdigit())
  print("-5".isdigit())
  print(5 > 3 and 2 > 10)
  print(not (7 == 7))
  ```

  Then run it in Trinket and see how many you got right! 👍

  ### Round 2 — The Basic Bouncer (⭐⭐)
  1. Ask the user `"How old are you? "`
  2. Use `.isdigit()` to check the answer is a whole number
  3. If it is, convert with `int()` and let them in
  4. If it is NOT, print a friendly `"That is not a number!"` message (no crash!)

  ### Round 3 — The Strict Bouncer (⭐⭐⭐)
  Upgrade Round 2: only let the user in if their age is a number **between 1 and 120**.
  Use `and` to combine the two checks. Print a different message for each rejection reason.

  ### Bonus — Never Take No For An Answer
  Wrap your bouncer in a `while` loop so it keeps asking until the user finally enters a valid age. Paste your favourite rejection message in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: Number Guard 🔐

  Build a **"Number Guard"** program in Trinket — a polite security guard that only accepts a valid secret number.

  **Requirements:**
  1. Ask the user to enter a number (their "secret PIN")
  2. Use `.isdigit()` to check it before converting with `int()`
  3. If the input is NOT a whole number, print a friendly message and **keep asking** (use a `while` loop)
  4. Once a valid number arrives, celebrate with an emoji 🎉
  5. Your program must NEVER crash, no matter what the user types

  **Example run:**
  ```
  Enter your secret PIN: banana
  🚫 That is not a number. Please try again.
  Enter your secret PIN: 12.5
  🚫 That is not a number. Please try again.
  Enter your secret PIN: 4269
  ✅ Access granted! Welcome, agent. 🎉
  ```

  **Challenge tiers:**
  - ⭐ Check the input with `.isdigit()` and print a friendly rejection (no loop yet)
  - ⭐⭐ Keep asking in a `while` loop until the input is valid
  - ⭐⭐⭐ After a valid number arrives, also check it is exactly 4 digits long (a real PIN!) and reject "0000" with a special "too easy!" message

  **Submit:** Save your Trinket (name it `Y2-T1-W5-SafeInput`), click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: Garbage In, Garbage Out

  Programmers have a famous saying: **"Garbage in, garbage out."** It means if you feed a program rubbish data, you get rubbish results.

  AI systems care about this MORE than anyone. Before a chatbot or a self-driving car uses data, it **validates and cleans** it first — throwing away the nonsense, fixing the format, checking nothing is missing. It is doing exactly what your bouncer does today, just on a massive scale.

  **Discuss in the Zoom chat:** "If an AI learned only from messy, wrong information, what silly mistakes might it make?"

  The input checking you learn today is the very first step every real AI system takes. You are thinking like an AI engineer already! 🤖
---

# Year 2, Lesson 5: Smart Decisions & Safe Input 🛡️🐍

**Course:** Python Accelerated
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

- A power-up recap of `if` / `elif` / `else` from Year 1
- Combining conditions with **`and`**, **`or`**, and **`not`**
- The difference between **nested** and **chained** decisions
- The big new idea: **validating user input** before you use it — the **bouncer pattern** 🛡️
- Using **`str.isdigit()`** to check for a whole number before converting with `int()`
- Keeping a program asking with a **`while` loop** until the input is valid — the professional pattern

---

## 🤖 BrightByte Has a Warning

> *"Last week you made your programs BEAUTIFUL with f-strings. Today we make them TOUGH. Here's a secret: the difference between a beginner's program and a real app isn't clever code — it's what happens when the user does something silly. Type 'banana' where a number should go, and a beginner's program EXPLODES. A pro's program just smiles and says 'try again'. Today, you become the pro. Meet the bouncer."*
> — BrightByte 🤖🛡️

---

## 🔁 Part 1: Decision Recap — Your Year 1 Superpower

You already know how to make a program choose. Here is the shape of a decision:

```python
age = 12

if age >= 13:
    print("You are a teenager!")
elif age >= 10:
    print("You are a pre-teen!")
else:
    print("You are still a kid!")
```

**Output:**
```
You are a pre-teen!
```

Python checks each condition **from the top down** and runs the **first** one that is `True` — then skips the rest. That is why `elif` (short for "else if") is so handy.

### The Comparison Toolkit

These are the building blocks of every decision. Here they all are in one table:

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `==` | equal to | `5 == 5` | `True` |
| `!=` | NOT equal to | `5 != 3` | `True` |
| `<` | less than | `3 < 5` | `True` |
| `>` | greater than | `3 > 5` | `False` |
| `<=` | less than or equal | `5 <= 5` | `True` |
| `>=` | greater than or equal | `4 >= 5` | `False` |

> ⚠️ **The classic trap:** `=` puts a value INTO a variable. `==` CHECKS if two things are equal. In an `if`, you almost always want `==`. More on this in Common Mistakes!

---

## 🔗 Part 2: Combining Conditions — and / or / not

Sometimes one check isn't enough. What if the club is only for people aged **13 to 17**? That's TWO conditions at once. Meet the three logic words:

| Word | Needs... | Example | Result |
|---|---|---|---|
| `and` | **both** sides `True` | `age >= 13 and age <= 17` | `True` only if both hold |
| `or` | **at least one** side `True` | `day == "Sat" or day == "Sun"` | `True` if either holds |
| `not` | flips `True`↔`False` | `not raining` | `True` when it's NOT raining |

### `and` — both must be true

```python
age = 15

if age >= 13 and age <= 17:
    print("Welcome to the teen club! 🎉")
else:
    print("Sorry, teens only.")
```

**Output:**
```
Welcome to the teen club! 🎉
```

Because `15 >= 13` is `True` **and** `15 <= 17` is `True`, both sides pass, so the whole thing is `True`.

### `or` — at least one must be true

```python
day = "Sun"

if day == "Sat" or day == "Sun":
    print("It's the weekend! 🥳")
else:
    print("A school day. 📚")
```

**Output:**
```
It's the weekend! 🥳
```

`day == "Sat"` is `False`, but `day == "Sun"` is `True` — and `or` only needs one side to win.

### `not` — flip it around

```python
is_member = False

if not is_member:
    print("Please sign up first! ✍️")
```

**Output:**
```
Please sign up first! ✍️
```

`is_member` is `False`, so `not is_member` becomes `True` — and the message prints.

### 💬 Zoom-Chat Warm-Up: Predict the Output

Post your guess in the chat BEFORE your teacher runs each line:

```python
print(5 > 3 and 10 > 20)
print(5 > 3 or 10 > 20)
print(not (2 == 2))
```

<details>
<summary>🔎 Click for the answers</summary>

```
False
True
False
```
`5 > 3` is `True` but `10 > 20` is `False`, so `and` gives `False`. With `or`, one `True` is enough. `2 == 2` is `True`, and `not` flips it to `False`.

</details>

---

## 🪜 Part 3: Nested vs Chained Decisions

There are two ways to stack decisions. Knowing the difference makes your code much easier to read.

**Chained (`elif`)** — pick ONE from a list of options:

```python
score = 75

if score >= 90:
    print("Grade A ⭐")
elif score >= 70:
    print("Grade B 👍")
elif score >= 50:
    print("Grade C")
else:
    print("Keep practising!")
```

**Output:**
```
Grade B 👍
```

**Nested (an `if` inside an `if`)** — a check INSIDE another check. This is exactly the bouncer pattern we're about to learn: *first* make sure the input is a number, *then* check its value.

```python
age_text = "15"

if age_text.isdigit():          # outer check: is it a number at all?
    age = int(age_text)
    if age >= 13:               # inner check: only runs if the outer passed
        print("Teen access granted! 🎉")
    else:
        print("Too young, sorry.")
else:
    print("That's not a number!")
```

**Output:**
```
Teen access granted! 🎉
```

> **Rule of thumb:** use **chained `elif`** when you're picking one option from many. Use **nested `if`** when a check only makes sense *after* an earlier check passed. Don't convert to a number until you KNOW it's a number!

---

## 💥 Part 4: The Crash! (Why We Need a Bouncer)

Remember from Week 2 that `input()` always gives you **text**, and `int()` turns text into a number — but ONLY if the text really looks like a number. Watch what happens when it doesn't:

```python
age = int(input("How old are you? "))
print("Next year you'll be", age + 1)
```

If the user types `12`, all is well:
```
How old are you? 12
Next year you'll be 13
```

But if the user types `banana`... 💥

```
How old are you? banana
ValueError: invalid literal for int() with base 10: 'banana'
```

**CRASH.** The program dies. The user sees a scary red error. This is exactly what a beginner's program does — and exactly what our **Smart Calculator** must NEVER do.

The problem: we tried to convert the text into a number **before checking** whether it even was a number. We need a bouncer at the door.

---

## 🛡️ Part 5: The Bouncer Pattern — `str.isdigit()`

A bouncer checks you **before** you get in. In code, we check the input **before** we use it. Our bouncer's ID scanner is `.isdigit()` — it looks at a piece of text and answers: *"is this made only of digits?"*

```python
print("12".isdigit())      # True  — all digits
print("banana".isdigit())  # False — letters
print("".isdigit())        # False — empty
```

**Output:**
```
True
False
False
```

Now we can check FIRST, then convert safely:

```python
age_text = input("How old are you? ")

if age_text.isdigit():
    age = int(age_text)
    print("Next year you'll be", age + 1)
else:
    print("That's not a whole number — please try again. 🚫")
```

Type `banana` now and there's **no crash** — just a polite message. That is the bouncer pattern:

> **1. Get the input as text → 2. Check it with `.isdigit()` → 3. Only convert with `int()` if the check passed.**

This "check before you leap" idea is also called a **guard clause**: a friendly `if` that guards the risky code and turns bad input away at the door.

### ⚠️ Being Honest About `.isdigit()`

`.isdigit()` is brilliant but it only says `True` for **non-negative whole numbers**. It's good to know its limits:

| Text | `.isdigit()` | Why |
|---|---|---|
| `"12"` | `True` | plain whole number ✅ |
| `"0"` | `True` | zero is a whole number ✅ |
| `"-5"` | `False` | the minus sign is not a digit |
| `"3.5"` | `False` | the dot is not a digit |
| `"banana"` | `False` | letters are not digits |
| `""` | `False` | there's nothing to check |

For this term's Smart Calculator, whole numbers are perfect. Later in Year 2 you'll learn a trick for checking decimals and negatives too — but today, `.isdigit()` is your trusty door scanner. 🛡️

---

## 🔄 Part 6: The Professional Pattern — Keep Asking

A real app doesn't give up after one bad answer — it keeps asking until it gets what it needs. We do that with a `while` loop:

```python
age_text = input("How old are you? ")

while not age_text.isdigit():
    print("🚫 That's not a number. Try again!")
    age_text = input("How old are you? ")

age = int(age_text)
print("Thanks! Next year you'll be", age + 1, "🎉")
```

**Example run:**
```
How old are you? banana
🚫 That's not a number. Try again!
How old are you? ten
🚫 That's not a number. Try again!
How old are you? 12
Thanks! Next year you'll be 13 🎉
```

Read the loop slowly:
- `while not age_text.isdigit():` means *"as long as the answer is NOT a number, keep looping."*
- Inside the loop we tell them off politely and **ask again** (this line is vital — without it the loop would repeat the same bad answer forever!).
- The moment they type a real number, `.isdigit()` becomes `True`, `not` flips it to `False`, the loop stops, and we safely convert.

> 💡 **This exact pattern** — ask, check, keep asking until valid — is what makes professional programs feel solid. You'll use it in EVERY program you build from now on.

---

## ⚠️ Common Mistakes

**Mistake 1: Using `=` instead of `==`**

❌ Wrong:
```python
age = 12
if age = 12:
    print("Twelve!")
```
```
SyntaxError: invalid syntax
```

✅ Correct:
```python
age = 12
if age == 12:
    print("Twelve!")
```

> `=` **assigns**, `==` **compares**. Say it out loud: "double equals means *is it equal?*"

---

**Mistake 2: Converting before checking**

❌ Wrong — crashes on `banana`:
```python
age = int(input("Age? "))
```
```
ValueError: invalid literal for int() with base 10: 'banana'
```

✅ Correct — check first, then convert:
```python
age_text = input("Age? ")
if age_text.isdigit():
    age = int(age_text)
else:
    print("Please enter a number!")
```

---

**Mistake 3: Forgetting to ask again inside the loop**

❌ Wrong — loops forever, because the answer never changes:
```python
age_text = input("Age? ")
while not age_text.isdigit():
    print("Try again!")
```

✅ Correct — ask again inside the loop:
```python
age_text = input("Age? ")
while not age_text.isdigit():
    print("Try again!")
    age_text = input("Age? ")
```

> If your program seems "stuck" printing the same thing over and over, you probably forgot to ask for new input inside the loop. Stop it with the ⏹ button in Trinket!

---

**Mistake 4: Expecting `.isdigit()` to catch decimals or negatives**

❌ Surprise:
```python
print("3.5".isdigit())   # False! (the dot isn't a digit)
print("-5".isdigit())    # False! (the minus isn't a digit)
```

That's not a bug — `.isdigit()` only recognises non-negative whole numbers. For this term, that's exactly what we want. Just don't be surprised. 😉

---

## 🎮 Class Activity: Bouncer at the Door 🚪🛡️

You're the bouncer at **The Code Lounge**. Only valid ages get in — and your program must never crash!

### Round 1 — Predict the Output (⭐)
Guess each line in the Zoom chat, then run it:
```python
print("12".isdigit())
print("banana".isdigit())
print("-5".isdigit())
print(5 > 3 and 2 > 10)
print(not (7 == 7))
```

### Round 2 — The Basic Bouncer (⭐⭐)
Ask for an age, check it with `.isdigit()`, let valid numbers in and turn everything else away politely — no crashes!

### Round 3 — The Strict Bouncer (⭐⭐⭐)
Only allow ages **between 1 and 120** (use `and`). Give a different message for each rejection reason.

### Bonus — Never Take No For An Answer
Wrap it in a `while` loop so it keeps asking until the age is valid. Paste your best rejection message in the chat!

---

## 🧮 Part 7: Calculator Connection

Next week, you START BUILDING the Smart Calculator — and this is the exact moment it earns the word **"smart."**

Think about it: a calculator asks the user for numbers. What if they type `banana`? A beginner's calculator crashes. **Yours won't** — because you now know the bouncer pattern. Every number the calculator reads will go through an `.isdigit()` check inside a `while` loop, so no matter what nonsense the user types, your program just smiles and asks again.

> The skills from today aren't a side quest — they're the foundation of the whole project. "Smart" = "never crashes" = what you learned today. 🛡️

---

## 🌟 What's Coming Next Week?

Next week is a BIG one: **Week 6 — we START BUILDING the Smart Calculator!** 🧮

You'll put together everything from the whole term:
- **Data types** (Week 2) to handle numbers
- **Power maths** (Week 3) for real calculations
- **F-strings** (Week 4) for beautiful output
- **Safe input** (today!) so it never crashes

We'll build a menu-driven calculator that asks the user what they want to do, takes their numbers safely, and gives back a beautiful answer. Bring today's bouncer skills — you'll need them on line one!

---

## 🏆 Today's Achievements

- ✅ You recapped `if` / `elif` / `else` and the comparison operators
- ✅ You combined conditions with `and`, `or`, and `not`
- ✅ You can tell **nested** from **chained** decisions
- ✅ You saw the `int(input(...))` crash — and know why it happens
- ✅ You mastered the **bouncer pattern** with `.isdigit()`
- ✅ You can keep asking with a `while` loop until the input is valid
- ✅ You know the honest limits of `.isdigit()`

> *"You just learned the skill that separates hobby code from real software. Programs that never crash aren't magic — they just have a good bouncer at the door. Next week you'll build a calculator with YOUR bouncer guarding it. I can't wait."*
> — BrightByte 🤖🛡️

---

## 📚 Homework: Number Guard 🔐

Build a **"Number Guard"** program in Trinket — a polite guard that only accepts a valid secret number.

**Requirements:**
1. Ask the user to enter a number (their "secret PIN")
2. Use `.isdigit()` to check it before converting with `int()`
3. If the input is NOT a whole number, print a friendly message and **keep asking** (use a `while` loop)
4. Once a valid number arrives, celebrate with an emoji 🎉
5. Your program must NEVER crash, no matter what the user types

**Example run:**
```
Enter your secret PIN: banana
🚫 That is not a number. Please try again.
Enter your secret PIN: 12.5
🚫 That is not a number. Please try again.
Enter your secret PIN: 4269
✅ Access granted! Welcome, agent. 🎉
```

**Challenge tiers:**
- ⭐ Check the input with `.isdigit()` and print a friendly rejection (no loop yet)
- ⭐⭐ Keep asking in a `while` loop until the input is valid
- ⭐⭐⭐ After a valid number arrives, also check it is exactly 4 digits long (a real PIN!) and reject "0000" with a special "too easy!" message

**Submit:** Save your Trinket (name it `Y2-T1-W5-SafeInput`), click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You're not just writing code anymore — you're writing code that survives the real world. See you next week to build the calculator! 🛡️🐍*
