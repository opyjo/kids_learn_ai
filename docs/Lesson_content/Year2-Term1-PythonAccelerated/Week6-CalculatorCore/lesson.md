---
title: "Project Build I: Smart Calculator Core 🧮⚡"
description: "Combine everything from Weeks 1-5 to build a real, working menu-driven calculator that adds, subtracts, multiplies, and divides — the core of your term project"
difficulty: "intermediate"
order_index: 6
course_slug: "year2-term-1-python-accelerated"
is_premium: false
requires_trinket: true
starter_code: |
  # 🧮 Y2-T1-W6-Calculator — Smart Calculator Core
  # Made by: [YOUR NAME]
  # IMPORTANT: Save this Trinket! Next week you extend THIS EXACT program.

  # --- Part 1: Title / Welcome ---
  # (build a bordered title with "=" * 40 and print())


  # --- Part 2: The Menu ---
  # Show options 1-4: Add, Subtract, Multiply, Divide


  # --- Part 3: Ask the user to pick ---
  # choice = input("Enter a choice (1-4): ")


  # --- Part 4: Ask for two numbers (remember float()!) ---
  # num1 = float(input("Enter the first number: "))
  # num2 = float(input("Enter the second number: "))


  # --- Part 5: Do the maths with if/elif/else ---
  # if choice == "1":  ...  compute and print with an f-string


  # Ready to build? Follow BrightByte, one part at a time! 🏗️
solution_code: |
  # 🧮 Y2-T1-W6-Calculator — Smart Calculator Core
  # Made by: [YOUR NAME]
  # SAVE THIS! Next week (Week 7) you extend this exact program.

  # --- Part 1: Title / Welcome ---
  print("=" * 40)
  print("      🧮 SMART CALCULATOR 🧮")
  print("=" * 40)

  # --- Part 2: The Menu ---
  print("Choose an operation:")
  print("  1. Add        (+)")
  print("  2. Subtract   (-)")
  print("  3. Multiply   (x)")
  print("  4. Divide     (/)")
  print("=" * 40)

  # --- Part 3: Ask the user to pick an option ---
  choice = input("Enter a choice (1-4): ")

  # --- Part 4: Ask for two numbers and convert them ---
  num1 = float(input("Enter the first number: "))
  num2 = float(input("Enter the second number: "))

  # --- Part 5: Do the maths and print a formatted answer ---
  if choice == "1":
      result = num1 + num2
      print(f"{num1} + {num2} = {result:.2f}")
  elif choice == "2":
      result = num1 - num2
      print(f"{num1} - {num2} = {result:.2f}")
  elif choice == "3":
      result = num1 * num2
      print(f"{num1} x {num2} = {result:.2f}")
  elif choice == "4":
      result = num1 / num2
      print(f"{num1} / {num2} = {result:.2f}")
  else:
      print("❌ That is not a valid choice. Please run me again and pick 1-4.")

  print("=" * 40)
  print("Thanks for using Smart Calculator! 🎉")
class_activities: |
  ## 🏗️ Class Activity: Build the Calculator — Live, Together!

  We build the Smart Calculator Core in **five stages**, live on Zoom. After each stage, **run your code** and give a **thumbs up** 👍 when it works. Do NOT rush ahead — we all move together, stage by stage.

  > 📁 **First:** create a new Trinket and name it **`Y2-T1-W6-Calculator`**. You will KEEP this file and extend it next week!

  ### Stage 1 — The Title (⭐)
  Build a bordered welcome using `"=" * 40` and `print()`.
  ```python
  print("=" * 40)
  print("      🧮 SMART CALCULATOR 🧮")
  print("=" * 40)
  ```
  ✅ **Checkpoint:** Run it. See the tidy banner? Thumbs up! 👍

  ### Stage 2 — The Menu (⭐)
  Add the four options under the banner.
  ```python
  print("Choose an operation:")
  print("  1. Add        (+)")
  print("  2. Subtract   (-)")
  print("  3. Multiply   (x)")
  print("  4. Divide     (/)")
  print("=" * 40)
  ```
  ✅ **Checkpoint:** Type in the Zoom chat: how many options does the menu show?

  ### Stage 3 — Ask for the Choice (⭐⭐)
  ```python
  choice = input("Enter a choice (1-4): ")
  ```
  ✅ **Checkpoint:** Remember — `input()` gives us **text**, so `choice` is a string like `"1"`.

  ### Stage 4 — Ask for Two Numbers (⭐⭐)
  ```python
  num1 = float(input("Enter the first number: "))
  num2 = float(input("Enter the second number: "))
  ```
  ✅ **Checkpoint:** Why do we wrap `input()` in `float()`? Answer in the chat! (Because we need to do real maths.)

  ### Stage 5 — The Brain: if / elif / else (⭐⭐⭐)
  ```python
  if choice == "1":
      result = num1 + num2
      print(f"{num1} + {num2} = {result:.2f}")
  elif choice == "2":
      result = num1 - num2
      print(f"{num1} - {num2} = {result:.2f}")
  elif choice == "3":
      result = num1 * num2
      print(f"{num1} x {num2} = {result:.2f}")
  elif choice == "4":
      result = num1 / num2
      print(f"{num1} / {num2} = {result:.2f}")
  else:
      print("❌ That is not a valid choice. Please run me again and pick 1-4.")
  ```
  ✅ **Final checkpoint:** Run the whole thing. Pick option 3, enter 8 and 6.5 — do you get `52.00`? 🎉 Thumbs up and **save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Add Your Own Operation

  Your calculator does four things. Give it a **fifth power**!

  **Requirements:**
  1. Open your **`Y2-T1-W6-Calculator`** Trinket (the one from class)
  2. Add a new line to the **menu** (e.g. `  5. Power     (^)`)
  3. Add a matching **`elif`** branch that does the new maths
  4. Test it and make sure the answer is correct

  **Ideas (pick ONE):**
  - Option 5 = **Power** using `**` → `result = num1 ** num2`
  - Option 6 = **Remainder** using `%` → `result = num1 % num2`
  - Option 7 = **Whole division** using `//` → `result = num1 // num2`

  **Example new branch:**
  ```python
  elif choice == "5":
      result = num1 ** num2
      print(f"{num1} ^ {num2} = {result:.2f}")
  ```

  **Challenge tiers:**
  - ⭐ Add ONE new operation to the menu and the `if/elif/else`
  - ⭐⭐ Add TWO new operations, keeping the menu tidy and lined up
  - ⭐⭐⭐ Add an operation AND change the answer line to also show a friendly message, e.g. `f"🎉 Result: {result:.2f}"`

  > ⚠️ Remember: compare `choice` as a **string** — `elif choice == "5":` (with quotes), NOT `choice == 5`.

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? Calculators Are the Grandparents of AI

  The program you just built is a **calculator** — and calculators are where computing began. The very first computers, decades ago, were built to do exactly what your program does: take numbers and run arithmetic, fast and without mistakes.

  Here's the mind-bending part: the smartest AI in the world — the one that writes stories, recognises faces, and answers your questions — is, deep down, doing **billions of tiny sums**. Additions and multiplications, just like your `+` and `*`, but millions of times per second.

  **Discuss in the Zoom chat:** "If AI is just doing lots of maths really fast, what makes it seem so clever?"

  You just wrote the same kind of arithmetic that powers every AI on Earth. Every big thing starts with a small, correct program. 🚀
---

# Year 2, Lesson 6: Project Build I — Smart Calculator Core 🧮⚡

**Course:** Python Accelerated
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

- How to combine **everything** from Weeks 1-5 into one real program
- How to build a **menu** that offers the user a set of choices
- How to read a menu choice with `input()` and act on it with `if/elif/else`
- How to convert user input with `float()` and do real maths with `+ - * /`
- How to format answers beautifully with f-strings and `:.2f`
- You'll finish with a **working calculator you can actually use** 🎉

---

## 🤖 BrightByte's Big Announcement

> *"This is the moment we've been building towards for FIVE weeks. Every skill you learned — printing, variables, input, data types, maths operators, f-strings, if/elif/else — was a puzzle piece. Today we snap them all together into your first REAL project: the Smart Calculator. By the end of this class, you'll have a program you can hand to a friend and say 'I built that.' Roll up your sleeves — we're building!"*
> — BrightByte 🤖🧮

---

## 🧩 Part 1: The Plan — What Are We Building?

For five weeks you've collected coding superpowers. Look how each one becomes a piece of today's calculator:

| Week | Skill You Learned | Where It Goes in the Calculator |
|---|---|---|
| 1 | `print()`, variables, `input()` | The menu, the questions, the answers |
| 2 | `float()` conversion | Turning typed text into real numbers |
| 3 | Maths operators `+ - * /` | Doing the actual calculation |
| 4 | f-strings, `:.2f`, `"=" * 30` | Beautiful borders and formatted answers |
| 5 | `if/elif/else` | Choosing WHICH operation to run |

Here's what the finished program does, start to finish:

```
========================================
      🧮 SMART CALCULATOR 🧮
========================================
Choose an operation:
  1. Add        (+)
  2. Subtract   (-)
  3. Multiply   (x)
  4. Divide     (/)
========================================
Enter a choice (1-4): 1
Enter the first number: 15
Enter the second number: 7
15.0 + 7.0 = 22.00
========================================
Thanks for using Smart Calculator! 🎉
```

> 📁 **BEFORE WE START:** Open Trinket, create a **new** Python trinket, and name it **`Y2-T1-W6-Calculator`**. This is important — next week you extend THIS EXACT file into a deluxe calculator. Do not delete it!

---

## 🏗️ Part 2: Stage 1 — The Title Banner

Every professional program greets its user. We'll use the `"=" * 40` trick from Week 4 to draw a neat border.

```python
print("=" * 40)
print("      🧮 SMART CALCULATOR 🧮")
print("=" * 40)
```

**Run it. Output:**
```
========================================
      🧮 SMART CALCULATOR 🧮
========================================
```

> 💡 `"=" * 40` prints forty equals signs in a row. Change `40` to make the banner wider or narrower — just keep it the same on both border lines so they match!

✅ **Zoom checkpoint:** See your banner? Thumbs up! 👍

---

## 📋 Part 3: Stage 2 — The Menu

A calculator needs to offer choices. We list them clearly, numbered 1 to 4. Add these lines **below** the banner:

```python
print("Choose an operation:")
print("  1. Add        (+)")
print("  2. Subtract   (-)")
print("  3. Multiply   (x)")
print("  4. Divide     (/)")
print("=" * 40)
```

Notice the two spaces before each number — that little indent makes the menu look tidy and professional. The extra spaces before `(+)` line the symbols up neatly.

**Run it now. You should see the banner AND the menu:**
```
========================================
      🧮 SMART CALCULATOR 🧮
========================================
Choose an operation:
  1. Add        (+)
  2. Subtract   (-)
  3. Multiply   (x)
  4. Divide     (/)
========================================
```

✅ **Zoom checkpoint:** How many options does the menu show? Type it in the chat!

---

## ⌨️ Part 4: Stage 3 — Ask the User to Choose

Now we ask which operation they want. We save their answer in a variable called **`choice`**.

```python
choice = input("Enter a choice (1-4): ")
```

> ⚠️ **SUPER IMPORTANT:** `input()` always gives back **text (a string)** — even when the user types `1`. So `choice` holds the string `"1"`, not the number `1`. Remember this — it matters a LOT in Part 6!

✅ **Zoom checkpoint:** What data type is `choice` — a number or text? (Text! It's a string.)

---

## 🔢 Part 5: Stage 4 — Ask for Two Numbers

The calculator needs two numbers to work with. We call them **`num1`** and **`num2`**. Because we need to do real maths, we wrap each `input()` in `float()` (from Week 2) so Python treats them as numbers, not text.

```python
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
```

> 💡 Why `float()` and not `int()`? Because `float()` handles decimals too — someone might want to add `3.5` and `2.25`. A calculator should cope with both whole numbers and decimals!

✅ **Zoom checkpoint:** Type in the chat: why do we wrap `input()` in `float()`? (So we can do maths — text can't be added or multiplied!)

---

## 🧠 Part 6: Stage 5 — The Brain (if / elif / else)

This is the clever bit. We look at what the user chose and run the matching calculation. We use `if/elif/else` from Week 5.

```python
if choice == "1":
    result = num1 + num2
    print(f"{num1} + {num2} = {result:.2f}")
elif choice == "2":
    result = num1 - num2
    print(f"{num1} - {num2} = {result:.2f}")
elif choice == "3":
    result = num1 * num2
    print(f"{num1} x {num2} = {result:.2f}")
elif choice == "4":
    result = num1 / num2
    print(f"{num1} / {num2} = {result:.2f}")
else:
    print("❌ That is not a valid choice. Please run me again and pick 1-4.")
```

### 🔎 Reading the Brain Line by Line

- `if choice == "1":` — **if** the user typed 1, run the add branch
- `result = num1 + num2` — store the answer in a variable called `result`
- `print(f"{num1} + {num2} = {result:.2f}")` — show it, formatted to 2 decimal places
- `elif choice == "2":` — **else if** they typed 2, subtract instead
- ...and so on for multiply and divide
- `else:` — if they typed anything that isn't 1-4, tell them politely

> ⚠️ **THE #1 CALCULATOR BUG:** notice we write `choice == "1"` with **quotes**. That's because `choice` is a string (Part 4)! If you write `choice == 1` (no quotes) it will NEVER be true, and your calculator will ALWAYS jump to the `else`. Quotes matter!

### Finish the Program

Add a friendly goodbye at the very bottom:

```python
print("=" * 40)
print("Thanks for using Smart Calculator! 🎉")
```

---

## ✅ Part 7: The Whole Program — Run It!

Here is your complete Smart Calculator Core. This is what should be in your `Y2-T1-W6-Calculator` Trinket:

```python
# 🧮 Y2-T1-W6-Calculator — Smart Calculator Core
# Made by: [YOUR NAME]

# --- Title / Welcome ---
print("=" * 40)
print("      🧮 SMART CALCULATOR 🧮")
print("=" * 40)

# --- The Menu ---
print("Choose an operation:")
print("  1. Add        (+)")
print("  2. Subtract   (-)")
print("  3. Multiply   (x)")
print("  4. Divide     (/)")
print("=" * 40)

# --- Ask the user to pick ---
choice = input("Enter a choice (1-4): ")

# --- Ask for two numbers ---
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# --- Do the maths ---
if choice == "1":
    result = num1 + num2
    print(f"{num1} + {num2} = {result:.2f}")
elif choice == "2":
    result = num1 - num2
    print(f"{num1} - {num2} = {result:.2f}")
elif choice == "3":
    result = num1 * num2
    print(f"{num1} x {num2} = {result:.2f}")
elif choice == "4":
    result = num1 / num2
    print(f"{num1} / {num2} = {result:.2f}")
else:
    print("❌ That is not a valid choice. Please run me again and pick 1-4.")

print("=" * 40)
print("Thanks for using Smart Calculator! 🎉")
```

### Try These Example Runs

**Ama adds two numbers:**
```
Enter a choice (1-4): 1
Enter the first number: 15
Enter the second number: 7
15.0 + 7.0 = 22.00
```

**Kofi multiplies his pocket money:**
```
Enter a choice (1-4): 3
Enter the first number: 8
Enter the second number: 6.5
8.0 x 6.5 = 52.00
```

**Zara divides to share ₦100 between 8 friends:**
```
Enter a choice (1-4): 4
Enter the first number: 100
Enter the second number: 8
100.0 / 8.0 = 12.50
```

🎉 **You built a real, working calculator!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: Comparing `choice` without quotes**

❌ Wrong — this ALWAYS goes to `else`:
```python
choice = input("Enter a choice (1-4): ")
if choice == 1:          # 1 is a number, but choice is text!
    print("Adding...")
```

✅ Correct — compare text to text:
```python
if choice == "1":        # "1" is text, just like choice
    print("Adding...")
```

> `input()` gives you a **string**. `"1"` (text) and `1` (number) are NOT equal in Python. Always use quotes when comparing `choice`.

---

**Mistake 2: Forgetting `float()` so numbers glue instead of add**

❌ Wrong:
```python
num1 = input("Enter the first number: ")   # this is TEXT
num2 = input("Enter the second number: ")  # this is TEXT
print(num1 + num2)                          # glues them!
```
```
Enter the first number: 15
Enter the second number: 7
157
```
😱 It stuck `15` and `7` together into `157` instead of adding to `22`!

✅ Correct — convert to numbers first:
```python
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
print(num1 + num2)     # 22.0 — real maths!
```

---

**Mistake 3: Indentation slips inside if/elif/else**

❌ Wrong — the `print` isn't indented under the `if`:
```python
if choice == "1":
result = num1 + num2
```
```
IndentationError: expected an indented block
```

✅ Correct — everything belonging to a branch is indented (4 spaces):
```python
if choice == "1":
    result = num1 + num2
    print(f"{num1} + {num2} = {result:.2f}")
```

---

**Mistake 4: Mismatched banner widths**

❌ Looks messy:
```python
print("=" * 40)
print("=" * 30)   # different number — borders don't line up
```

✅ Keep them the same:
```python
print("=" * 40)
print("=" * 40)
```

---

## 🌟 What's Coming Next Week?

Right now your calculator has one small problem... it only does **ONE** calculation, then stops. Want to add another sum? You have to run the whole program again. Annoying!

Next week — **Week 7: Calculator Deluxe** — we make it professional:

- 🔁 A **"play again" loop** so you can do as many calculations as you like without restarting
- 💯 New **percentage and tip** modes (great for shopping!)
- 🛡️ A **divide-by-zero guard** so it never crashes (try dividing by 0 today... 💥)
- ✅ **Bad-input protection** using the validation tricks from Week 5

> Keep your `Y2-T1-W6-Calculator` Trinket safe — next week we upgrade THIS EXACT program into something you'd be proud to put in an app store!

---

## 🏆 Today's Achievements

- ✅ You combined **five weeks** of skills into one program
- ✅ You built a **menu** and read the user's choice with `input()`
- ✅ You converted input with **`float()`** and did real maths
- ✅ You used **`if/elif/else`** to run the right operation
- ✅ You formatted answers beautifully with **f-strings** and `:.2f`
- ✅ You have a **real, working calculator** — your term project has begun!

> *"Do you realise what you just did? Five weeks ago, `input()` gluing text together crashed your program. Today you built a calculator that reads menus, converts numbers, makes decisions, and formats answers. That's not a beginner move — that's a PROGRAMMER move. Next week, we make it shine."*
> — BrightByte 🤖⚡

---

## 📚 Homework: Add Your Own Operation

Give your calculator a **fifth power**!

**Requirements:**
1. Open your **`Y2-T1-W6-Calculator`** Trinket (the one from class)
2. Add a new line to the **menu** (e.g. `  5. Power     (^)`)
3. Add a matching **`elif`** branch that does the new maths
4. Test it and make sure the answer is correct

**Ideas (pick ONE):**
- Option 5 = **Power** using `**` → `result = num1 ** num2`
- Option 6 = **Remainder** using `%` → `result = num1 % num2`
- Option 7 = **Whole division** using `//` → `result = num1 // num2`

**Example new branch:**
```python
elif choice == "5":
    result = num1 ** num2
    print(f"{num1} ^ {num2} = {result:.2f}")
```

**Challenge tiers:**
- ⭐ Add ONE new operation to the menu and the `if/elif/else`
- ⭐⭐ Add TWO new operations, keeping the menu tidy and lined up
- ⭐⭐⭐ Add an operation AND change the answer line to show a friendly message, e.g. `f"🎉 Result: {result:.2f}"`

> ⚠️ Remember: compare `choice` as a **string** — `elif choice == "5":` (with quotes), NOT `choice == 5`.

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't just learn to code today — you BUILT something. See you next week to make it deluxe! 🧮⚡*
