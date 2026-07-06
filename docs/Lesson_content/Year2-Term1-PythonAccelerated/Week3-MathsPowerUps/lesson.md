---
title: "Maths Power-Ups! 🧮⚡"
description: "Unlock Python's full maths toolkit — floor division, modulo, and powers — and discover the remainder tricks behind fair sharing, even/odd detection, and exploding doubles"
difficulty: "intermediate"
order_index: 3
course_slug: "year2-term-1-python-accelerated"
is_premium: false
requires_trinket: true
starter_code: |
  # 🧮 Maths Power-Ups!
  # Round 1: PREDICT then RUN — write your guess in the comment first!

  print(7 / 2)      # My guess:
  print(7 // 2)     # My guess:
  print(7 % 2)      # My guess:
  print(2 ** 10)    # My guess:

  # Round 2: The Sweet Sharer — finish this program!
  # sweets = int(input("How many sweets do you have? "))
  # friends = int(input("How many friends are sharing? "))
  # each = ?        (hint: floor division)
  # left_over = ?   (hint: modulo)
  # print the results!
solution_code: |
  # 🧮 Maths Power-Ups — one possible solution

  # Round 1: the answers
  print(7 / 2)      # 3.5  (division ALWAYS gives a float!)
  print(7 // 2)     # 3    (floor division chops off the decimal)
  print(7 % 2)      # 1    (the remainder)
  print(2 ** 10)    # 1024 (2 multiplied by itself 10 times)

  # Round 2: The Sweet Sharer
  print("🍬 THE SWEET SHARER 🍬")
  sweets = int(input("How many sweets do you have? "))
  friends = int(input("How many friends are sharing? "))

  each = sweets // friends
  left_over = sweets % friends

  print("Each friend gets", each, "sweets")
  print("Sweets left over:", left_over)

  if left_over == 0:
      print("Perfect share — nothing left over! 🎉")
class_activities: |
  ## 🎮 Class Activity 1: Remainder Riddles 🔮

  Your teacher will post riddles one at a time. **PREDICT the answer in the Zoom chat FIRST** — then everyone runs it in Trinket to check. Point for every correct prediction!

  - `17 % 5` — what's left over?
  - `7 // 2` — how many whole times?
  - `2026 % 2` — is this year even?
  - `45 % 10` — what's the last digit?
  - `2 ** 5` — how big?
  - `2 + 10 * 2` — BODMAS alert!
  - `(2 + 10) * 2` — brackets change everything!

  ## 🍬 Class Activity 2: The Sweet Sharer

  Build a program that shares sweets fairly among friends — no arguments, no tears!

  ### ⭐ Level 1
  1. Ask how many sweets (remember `int(input(...))` from last week!)
  2. Ask how many friends are sharing
  3. Print how many sweets **each friend gets** (`//`)

  ### ⭐⭐ Level 2
  4. Also print how many sweets are **left over** (`%`)

  ### ⭐⭐⭐ Level 3
  5. If nothing is left over, print a special "Perfect share! 🎉" message (use `if left_over == 0`)
  6. Test it with 24 sweets and 5 friends — then with 20 sweets and 4 friends

  Paste your favourite test run in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: The Maths Magician 🎩

  Write a **Maths Magician** program in Trinket — it asks for ONE number and reveals its secrets!

  **Requirements:**
  1. Ask the user for a whole number with `int(input(...))`
  2. Tell them if it's **even or odd** (use `% 2`)
  3. Tell them its **square** (use `** 2`)
  4. Tell them its **last digit** (use `% 10`)

  **Example run:**
  ```
  🎩 Give me any number: 347
  Your number is ODD!
  Its square is 120409
  Its last digit is 7
  ```

  **Challenge tiers:**
  - ⭐ Even/odd + square
  - ⭐⭐ Add the last digit and the cube (`** 3`)
  - ⭐⭐⭐ Add a "pocket money doubler": ask how many days, then use a `for` loop with `2 ** day` to show the money doubling every day

  **Submit:** Save your Trinket as `Y2-T1-W3-MathsMagician`, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: AI Is Just Maths — At MASSIVE Scale

  Here's a secret that surprises most people: inside every AI — chatbots, face unlock, all of it — there are no thoughts. There are **multiplications**. Millions and millions of them, every second.

  A neural network (the "brain" of an AI) is basically a gigantic pile of numbers being multiplied and added — the exact operations you used today, just repeated billions of times at lightning speed.

  **Discuss in the Zoom chat:** "You did maybe 20 calculations today. An AI does over a BILLION per second. If AI is 'just maths', what makes it seem so smart?"

  Keep this in your pocket — in Term 5 you'll open up an AI's brain and see those multiplications for yourself!
---

# Year 2, Lesson 3: Maths Power-Ups! 🧮⚡

**Course:** Python Accelerated
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

- Three brand-new maths operators: `//` (floor division), `%` (modulo), and `**` (power)
- **Modulo magic**: detecting even/odd numbers, sharing things fairly, and finding the last digit of any number
- Why `7 / 2` gives `3.5` but `7 // 2` gives `3` — and how this connects to last week's data types
- How doubling makes numbers EXPLODE (the famous chessboard story!)
- **BODMAS in Python**: the order Python does maths in, and how brackets put YOU in charge

---

## 🤖 BrightByte's Power-Up Station

> *"Last week you taught Python to understand numbers. This week? We give those numbers SUPERPOWERS. You already know `+ - * /` — that's the starter pack. Today you unlock the full operator kit: the sharer, the remainder-finder, and the doubler. By the end of class, you'll do maths tricks that impress actual adults. Power up!"*
> — BrightByte 🤖⚡

---

## 🏋️ Part 1: Warm-Up — The Operators You Already Own

Quick stretch before the new stuff. You've used these four since Year 1:

| Operator | Name | Example | Result |
|---|---|---|---|
| `+` | Addition | `10 + 3` | `13` |
| `-` | Subtraction | `10 - 3` | `7` |
| `*` | Multiplication | `10 * 3` | `30` |
| `/` | Division | `10 / 4` | `2.5` |

But remember last week's discovery? Run this:

```python
print(8 / 2)
```

**Output:**
```
4.0
```

Not `4` — `4.0`! **Division ALWAYS gives a float**, even when the answer is a whole number. Python plays it safe, because division *might* need decimals. Keep that in mind — it matters in about three minutes.

### 💬 Zoom Chat Check

> **Without running it: what does `9 / 3` print?**
> Type your answer in the **Zoom chat**. (Careful — it's a trap for people who forgot last week! 😄)

Answer: `3.0` — a float, always!

---

## 🧰 Part 2: The Full Operator Kit

Time to unlock the three new operators. Here's the complete Python maths toolkit:

| Operator | Name | What It Does | Example | Result |
|---|---|---|---|---|
| `/` | Division | Divides, keeps decimals | `7 / 2` | `3.5` |
| `//` | **Floor division** | Divides, **chops off** the decimal | `7 // 2` | `3` |
| `%` | **Modulo** | Gives the **remainder** after dividing | `7 % 2` | `1` |
| `**` | **Power** | Multiplies a number by itself | `2 ** 3` | `8` |

Try all four right now in Trinket (name it `Y2-T1-W3-MathsPowerUps`):

```python
print(7 / 2)
print(7 // 2)
print(7 % 2)
print(2 ** 3)
```

**Output:**
```
3.5
3
1
8
```

> 💡 **How to read them aloud:** `7 // 2` is "seven floor-divided by two". `7 % 2` is "seven mod two". `2 ** 3` is "two to the power of three".

### The Best Way to Think About `//` and `%`

They're a **team**. Imagine dividing 7 by 2 the way you did in primary school:

> "2 goes into 7 **three times** (`7 // 2` → `3`)... with **1 left over** (`7 % 2` → `1`)."

`//` answers *"how many whole times?"* and `%` answers *"what's left over?"* — together they tell the full story of a division.

Give a **thumbs up** in Zoom when all four lines run on your screen! 👍

---

## 🍬 Part 3: Modulo Magic — The Fair-Sharing Operator

### The Sweet-Sharing Problem

Ama brings **24 sweets** to class to share among her **5 best friends**. She wants to be perfectly fair — every friend gets the same amount, and Ama keeps whatever is left over (chef's bonus, like the cook who gets the bottom-of-the-pot jollof 🍚).

How many does each friend get? How many does Ama keep? Python answers instantly:

```python
sweets = 24
friends = 5

print("Each friend gets:", sweets // friends)
print("Left over for Ama:", sweets % friends)
```

**Output:**
```
Each friend gets: 4
Left over for Ama: 4
```

Each friend gets **4 sweets** (because 5 × 4 = 20), and **4 are left over** (24 − 20 = 4). Both answers are 4 here — a fun coincidence! Try Kofi's **17 football stickers** shared among **3 friends**:

```python
print(17 // 3)
print(17 % 3)
```

**Output:**
```
5
2
```

Each friend gets 5 stickers, 2 left over. No arguments, no tears — modulo is the fairness referee. ⚖️

---

### Modulo Trick 1: Even or Odd? 🕵️

Here's the trick programmers use every single day. What's the remainder when you divide an **even** number by 2? Always **zero**! And an odd number? Always **one**!

```python
print(48 % 2)
print(17 % 2)
```

**Output:**
```
0
1
```

So `number % 2 == 0` is Python's even-detector. Combine it with your Year 1 `if` skills:

```python
number = int(input("Give me any whole number: "))

if number % 2 == 0:
    print(number, "is EVEN! ✌️")
else:
    print(number, "is ODD! ☝️")
```

**Example run:**
```
Give me any whole number: 2026
2026 is EVEN! ✌️
```

> 🧠 **Spot the Week 2 skill:** `int(input(...))` — we can't do maths on raw text, remember!

---

### Modulo Trick 2: The Last Digit 🔢

What's `347 % 10`? Think about it: 10 goes into 347 thirty-four times (340), leaving... **7**. The remainder when dividing by 10 is always **the last digit**!

```python
print(347 % 10)
print(2026 % 10)
```

**Output:**
```
7
6
```

Magicians use this in card tricks. Programmers use it to grab digits off numbers. You now know both trades. 🎩

---

## 🚀 Part 4: Power (`**`) — The Number Exploder

`**` means "to the power of" — multiply a number by itself that many times:

```python
print(9 ** 2)     # 9 squared: 9 × 9
print(5 ** 3)     # 5 cubed: 5 × 5 × 5
print(2 ** 10)    # 2 doubled ten times
```

**Output:**
```
81
125
1024
```

### The Chessboard Story ♟️ (Prepare to Have Your Mind Blown)

An old legend: a clever inventor showed a king the game of chess. The delighted king said, "Name your reward!" The inventor asked for something that sounded tiny:

> *"One grain of rice on the first square of the chessboard. Two on the second. Four on the third. Just keep doubling for all 64 squares."*

The king laughed at such a small request. Should he have? Let's check with a loop (Year 1 skill!):

```python
for square in range(1, 11):
    print("Square", square, ":", 2 ** square, "grains")
```

**Output:**
```
Square 1 : 2 grains
Square 2 : 4 grains
Square 3 : 8 grains
Square 4 : 16 grains
Square 5 : 32 grains
Square 6 : 64 grains
Square 7 : 128 grains
Square 8 : 256 grains
Square 9 : 512 grains
Square 10 : 1024 grains
```

Only square 10 and we've passed a thousand. Now ask Python about square 64:

```python
print(2 ** 63)
```

**Output:**
```
9223372036854775808
```

That's over **9 QUINTILLION** grains — more rice than the whole world grows in centuries. The king could never pay. **That's the power of doubling** — it starts slow, then explodes. 🤯

> 💬 **Zoom chat challenge:** Would you rather have ₦1,000,000 today, or ₦1 today doubled every day for 30 days? Vote in the chat... then run `print(2 ** 29)` and see who chose wisely!

(Spoiler: `2 ** 29` is `536870912` — over ₦536 million. Doubling wins. It ALWAYS wins.)

---

## ⚖️ Part 5: `/` vs `//` — The Type Showdown

Time to settle it. Same numbers, two different operators, two VERY different results:

```python
print(7 / 2)
print(7 // 2)
```

**Output:**
```
3.5
3
```

| Operator | `7 ? 2` gives | Type | When to Use It |
|---|---|---|---|
| `/` | `3.5` | **float** (always!) | When decimals matter — money, measurements, averages |
| `//` | `3` | **int** | When only WHOLE things make sense — whole sweets, whole people, whole teams |

This is last week's lesson coming back around: **`/` always produces a float — even `8 / 2` gives `4.0`**. But you can't give a friend 4.8 sweets, so the Sweet Sharer uses `//`.

> ⚠️ **Heads-up:** `//` doesn't round — it **floors** (chops the decimal off, always downwards). `7 // 2` is `3`, not `4`, even though `3.5` would round up!

---

## 🧮 Part 6: BODMAS — Who Goes First?

You know BODMAS from maths class (**B**rackets, **O**rders, **D**ivision/**M**ultiplication, **A**ddition/**S**ubtraction). Python follows the same rules. Predict this one:

```python
print(2 + 3 * 4)
```

**Output:**
```
14
```

Not 20! Python does `3 * 4` **first** (multiplication beats addition), then `2 + 12`. Want the addition first? **Brackets put you in charge:**

```python
print((2 + 3) * 4)
```

**Output:**
```
20
```

### Python's Order of Operations

| Priority | Operators | Meaning |
|---|---|---|
| 1st 🥇 | `( )` | Brackets — always first |
| 2nd 🥈 | `**` | Powers |
| 3rd 🥉 | `*` `/` `//` `%` | Multiply, divide, floor-divide, modulo |
| 4th | `+` `-` | Add and subtract |

Two sneaky ones to trace carefully:

```python
print(2 * 3 ** 2)
print(10 - 6 / 2)
```

**Output:**
```
18
7.0
```

- `2 * 3 ** 2`: power first! `3 ** 2` is `9`, then `2 * 9` is `18` (not `36`)
- `10 - 6 / 2`: division first — `6 / 2` is `3.0`, then `10 - 3.0` is `7.0`. **Did you spot the float sneaking in?** One `/` anywhere in a sum turns the whole answer into a float!

> 💡 **Pro tip:** when in doubt, use brackets — even when you don't strictly need them. `(sweets // friends)` costs nothing and makes your code crystal clear to read.

---

## ⚠️ Common Mistakes

**Mistake 1: Using `^` for power (the silent trap!)**

❌ Wrong:
```python
print(2 ^ 10)
```
```
8
```

It runs — no error — but gives **8**, not 1024! In Python, `^` is a completely different operator (a bitwise trick you'll meet years from now). This bug is extra dangerous because it doesn't crash — it just quietly gives wrong answers.

✅ Correct:
```python
print(2 ** 10)
```
```
1024
```

---

**Mistake 2: Dividing (or modulo-ing) by zero**

❌ Wrong:
```python
print(10 / 0)
```
```
ZeroDivisionError: division by zero
```

You can't share sweets among zero friends — and neither can Python. In your Sweet Sharer, what happens if the user types `0` friends? Try it! (Making programs survive this is exactly what Week 5 is about. 🛡️)

---

**Mistake 3: Doing maths on raw `input()` text**

❌ Wrong:
```python
sweets = input("How many sweets? ")
print(sweets // 5)
```
```
TypeError: unsupported operand type(s) for //: 'str' and 'int'
```

✅ Correct:
```python
sweets = int(input("How many sweets? "))
print(sweets // 5)
```

Last week's lesson strikes again — `input()` ALWAYS gives text, and text can't be floor-divided!

---

**Mistake 4: Expecting `/` to give a whole number**

❌ Surprised?
```python
print(8 / 2)
```
```
4.0
```

That `.0` is not a bug — it's `/` doing its job (floats, always). If you need a whole number, that's what `//` is for.

---

## 🎮 Class Activity 1: Remainder Riddles 🔮

Prediction time! Your teacher posts a riddle — you **type your prediction in the Zoom chat FIRST**, then everyone runs it in Trinket to check. Score a point for every correct guess!

```python
print(17 % 5)        # Riddle 1
print(7 // 2)        # Riddle 2
print(2026 % 2)      # Riddle 3 — is this year even?
print(45 % 10)       # Riddle 4 — last digit trick!
print(2 ** 5)        # Riddle 5
print(2 + 10 * 2)    # Riddle 6 — BODMAS alert!
print((2 + 10) * 2)  # Riddle 7 — brackets change everything!
```

<details>
<summary>🔎 Check your answers AFTER running (no peeking first!)</summary>

`2`, `3`, `0` (even!), `5`, `32`, `22`, `24`

</details>

---

## 🍬 Class Activity 2: Build the Sweet Sharer

Now build the real thing — a fair-sharing machine:

### ⭐ Level 1
1. Ask how many sweets (with `int(input(...))`)
2. Ask how many friends are sharing
3. Print how many sweets **each friend gets**

### ⭐⭐ Level 2
4. Also print how many are **left over**

### ⭐⭐⭐ Level 3
5. Add an `if`: when nothing is left over, print `Perfect share! 🎉`
6. Test with 24 sweets & 5 friends, then 20 sweets & 4 friends

**Example run:**
```
🍬 THE SWEET SHARER 🍬
How many sweets do you have? 24
How many friends are sharing? 5
Each friend gets 4 sweets
Sweets left over: 4
```

Give a **thumbs up** in Zoom when Level 1 works, and paste your favourite test run in the chat! 👍

---

## 🧮 Part 7: Calculator Check-In — Why Today Matters

Remember the mission: this term ends with your **Smart Calculator**. Today you earned three of its core operations:

- The calculator's **divide mode** will offer BOTH `/` (exact answer) and `//` with `%` (whole-number answer plus remainder) — because sometimes you need `3.5` and sometimes you need "3, remainder 1"
- The **power mode** runs on `**`
- In Week 7, **Calculator Deluxe** adds a **percentage mode** (tips, discounts, exam scores) — and here's an early secret: in Python, `%` is **NOT** the percent button! "15% of 80" is `80 * 15 / 100` (which is `12.0`) — while `80 % 15` gives `5`, a completely different thing. Tuck that away; it'll save you a big headache in Week 7. 😉

> *"Every operator you learned today is a button on your future calculator. You're not just doing exercises — you're stocking your toolbox."*
> — BrightByte 🤖

---

## 🌟 What's Coming Next Week?

Try this right now:

```python
print("Each friend pays:", 10 / 3)
```

**Output:**
```
Each friend pays: 3.3333333333333335
```

🤢 **EW.** Imagine a real app showing a price like that! Next week — **F-Strings & Beautiful Output** — you'll learn to turn that monster into a clean `GH₵3.33`, format money like a real app, and make every program you write look professional. Your calculator is about to get GORGEOUS.

---

## 🏆 Today's Achievements

- ✅ You unlocked the full operator kit: `//`, `%`, and `**`
- ✅ You can detect even/odd numbers and grab the last digit with modulo magic
- ✅ You built the Sweet Sharer — fair sharing with `//` and `%` as a team
- ✅ You witnessed the chessboard explosion — `2 ** 63` grains of rice!
- ✅ You know Python's BODMAS order, and how brackets put you in charge
- ✅ You know `/` always gives a float, and `//` gives a whole number

> *"Look at you — this morning `%` was just a symbol on your keyboard. Now it's a fairness referee, an even/odd detector, AND a digit-grabber. THAT is what a power-up feels like. See you at the beauty salon next week — your outputs need a makeover!"*
> — BrightByte 🤖⚡

---

## 📚 Homework: The Maths Magician 🎩

Write a **Maths Magician** program in Trinket — it asks for ONE number and reveals its secrets!

**Requirements:**
1. Ask the user for a whole number with `int(input(...))`
2. Tell them if it's **even or odd** (use `% 2`)
3. Tell them its **square** (use `** 2`)
4. Tell them its **last digit** (use `% 10`)

**Example run:**
```
🎩 Give me any number: 347
Your number is ODD!
Its square is 120409
Its last digit is 7
```

**Challenge tiers:**
- ⭐ Even/odd + square
- ⭐⭐ Add the last digit and the cube (`** 3`)
- ⭐⭐⭐ Add a "pocket money doubler": ask how many days, then use a `for` loop with `2 ** day` to show the money doubling every day

**Submit:** Save your Trinket as `Y2-T1-W3-MathsMagician`, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*Power-up collected. Next stop: making it beautiful! 🧮⚡🐍*
