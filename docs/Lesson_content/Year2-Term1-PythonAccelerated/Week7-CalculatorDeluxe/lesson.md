---
title: "Project Build II: Calculator Deluxe 🧮✨"
description: "Upgrade your Smart Calculator into a professional, crash-proof program — with a play-again loop, percentage and tip modes, a divide-by-zero guard, and a safety net for silly input"
difficulty: "intermediate"
order_index: 7
course_slug: "year2-term-1-python-accelerated"
is_premium: false
requires_trinket: true
starter_code: |
  # 🧮 Y2-T1-W7-CalculatorDeluxe
  # Made by: [YOUR NAME]
  # START FROM YOUR WEEK 6 CALCULATOR — paste it in, then upgrade it together!

  # This is where you left off last week (the Core):
  print("=" * 40)
  print("      🧮 SMART CALCULATOR 🧮")
  print("=" * 40)
  print("Choose an operation:")
  print("  1. Add        (+)")
  print("  2. Subtract   (-)")
  print("  3. Multiply   (x)")
  print("  4. Divide     (/)")
  print("=" * 40)
  choice = input("Enter a choice (1-4): ")
  num1 = float(input("Enter the first number: "))
  num2 = float(input("Enter the second number: "))
  if choice == "1":
      result = num1 + num2
      print(f"{num1} + {num2} = {result:.2f}")
  # ...the rest of your Week 6 branches...

  # 🎯 TODAY we add: a play-again loop, percentage & tip modes,
  #    a divide-by-zero guard, and a safety net for bad input!
solution_code: |
  # 🧮 Y2-T1-W7-CalculatorDeluxe — the full DELUXE calculator
  # Made by: [YOUR NAME]

  print("=" * 40)
  print("     🧮 SMART CALCULATOR DELUXE ⚡")
  print("=" * 40)

  # The "play again" loop keeps the calculator open until the user quits
  running = True
  while running:
      # --- The Menu ---
      print()
      print("Choose an operation:")
      print("  1. Add          (+)")
      print("  2. Subtract     (-)")
      print("  3. Multiply     (x)")
      print("  4. Divide       (/)")
      print("  5. Percentage   (%)")
      print("  6. Tip splitter (money)")
      print("  7. Quit")
      print("=" * 40)

      choice = input("Enter a choice (1-7): ")

      # --- Quit ---
      if choice == "7":
          print("Goodbye! Thanks for using Smart Calculator Deluxe! 👋")
          running = False

      # --- Percentage mode ---
      elif choice == "5":
          try:
              amount = float(input("Find a percentage OF what number? "))
              percent = float(input("What percent? "))
              result = amount * percent / 100
              print(f"{percent}% of {amount} = {result:.2f}")
          except ValueError:
              print("⚠️ Those weren't numbers! Let's try again.")

      # --- Tip splitter ---
      elif choice == "6":
          try:
              bill = float(input("What is the bill total? "))
              tip_percent = float(input("Tip percentage? "))
              people = float(input("Split between how many people? "))
              total = bill + (bill * tip_percent / 100)
              if people == 0:
                  print("⚠️ Cannot split between 0 people!")
              else:
                  each = total / people
                  print(f"Total with tip: {total:.2f}")
                  print(f"Each person pays: {each:.2f}")
          except ValueError:
              print("⚠️ Those weren't numbers! Let's try again.")

      # --- The four basic operations ---
      elif choice == "1" or choice == "2" or choice == "3" or choice == "4":
          try:
              num1 = float(input("Enter the first number: "))
              num2 = float(input("Enter the second number: "))
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
                  if num2 == 0:
                      print("🚫 Oops! You cannot divide by zero.")
                  else:
                      result = num1 / num2
                      print(f"{num1} / {num2} = {result:.2f}")
          except ValueError:
              print("⚠️ That wasn't a number! Please enter digits next time.")

      # --- Anything else is an invalid choice ---
      else:
          print("❌ That is not a valid choice. Please pick 1-7.")

  print("=" * 40)
  print("Calculator closed. See you next time! 🎉")
class_activities: |
  ## 🏗️ Class Activity: Deluxe Upgrade — Live, Together!

  We upgrade your Week 6 calculator in **four stages**, live on Zoom. After each stage, **run your code** and give a **thumbs up** 👍 when it works. We move together!

  > 📁 **First:** open your **`Y2-T1-W6-Calculator`** Trinket. Save it as a NEW trinket named **`Y2-T1-W7-CalculatorDeluxe`** (File → Save a copy, or copy-paste into a new one). We upgrade the copy — your Week 6 original stays safe.

  ### Stage 1 — The Play-Again Loop (⭐⭐)
  Wrap your whole calculator in a `while` loop so it repeats. Add a **Quit** option (7) that stops it.
  ```python
  running = True
  while running:
      # ... your menu and maths go INSIDE here (indented!) ...
      if choice == "7":
          print("Goodbye! 👋")
          running = False
  ```
  ✅ **Checkpoint:** Do a sum, then get the menu AGAIN without re-running. Pick 7 to quit. Thumbs up! 👍

  ### Stage 2 — The Divide-by-Zero Guard (⭐⭐)
  Protect the divide branch so `10 / 0` warns instead of crashing.
  ```python
  elif choice == "4":
      if num2 == 0:
          print("🚫 Oops! You cannot divide by zero.")
      else:
          result = num1 / num2
          print(f"{num1} / {num2} = {result:.2f}")
  ```
  ✅ **Checkpoint:** Try dividing by 0. Friendly message, no red crash? 👍

  ### Stage 3 — Percentage & Tip Modes (⭐⭐⭐)
  Add option **5 (Percentage)** and option **6 (Tip splitter)** to the menu and the `if/elif`.
  ```python
  elif choice == "5":
      amount = float(input("Find a percentage OF what number? "))
      percent = float(input("What percent? "))
      result = amount * percent / 100
      print(f"{percent}% of {amount} = {result:.2f}")
  ```
  ✅ **Checkpoint:** Find 10% of 200 → `20.00`. Post your answer in the chat!

  ### Stage 4 — The Safety Net for Bad Input (⭐⭐⭐)
  Wrap the number questions in `try` / `except` so typing "banana" never crashes.
  ```python
  try:
      num1 = float(input("Enter the first number: "))
      num2 = float(input("Enter the second number: "))
      # ... the maths ...
  except ValueError:
      print("⚠️ That wasn't a number! Please enter digits next time.")
  ```
  ✅ **Final checkpoint:** Type `banana` for a number. Calm message, no crash? 🎉 **Save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Make It Showcase-Ready ✨

  Next week you'll **demo your calculator** to the class. This week, add ONE personal touch and make sure it never, ever crashes.

  **Requirements:**
  1. Open your **`Y2-T1-W7-CalculatorDeluxe`** Trinket
  2. Make sure the play-again loop, divide-by-zero guard, and bad-input safety net all work
  3. Add **one personal touch** (pick from the ideas below)
  4. Test it hard — try to BREAK it. It should survive silly input.

  **Personal-touch ideas (pick ONE):**
  - 🎨 A themed title banner (your name, emojis, a fancy border)
  - ➕ A new operation (Power `**`, Remainder `%`, or Whole-divide `//`)
  - 📜 A running **history** printed with a list (append each answer, then print them all when you quit)
  - 💬 Friendlier messages and encouragement after each calculation

  **Challenge tiers:**
  - ⭐ Add a themed banner and make sure it doesn't crash
  - ⭐⭐ Add a new operation as option 8
  - ⭐⭐⭐ Keep a `history` list of every calculation and print it neatly when the user quits

  > 💡 Bring this exact program to next week's showcase — you'll run it live on Zoom!

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? Real AI Never Trusts Its Input

  Today you built a **safety net** — your calculator stays calm when someone types "banana" instead of a number. That skill is HUGE in the real world.

  Every serious program — banking apps, games, and yes, AI chatbots — has to assume people will type unexpected, messy, or even silly things. A chatbot gets asked nonsense questions all day long and must respond politely instead of crashing. The rule programmers live by is **"never trust the input"** — always check it, guard it, and handle mistakes gracefully.

  **Discuss in the Zoom chat:** "What's the silliest thing you've ever typed into a chatbot or search box? Did it cope well?"

  You just learned a professional habit that keeps real software — and real AI — reliable. 🛡️
---

# Year 2, Lesson 7: Project Build II — Calculator Deluxe 🧮✨

**Course:** Python Accelerated
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Learn Today

- How to wrap a program in a **`while` loop** so it repeats until the user quits
- How to add a **percentage** mode and a **tip splitter** to your calculator
- How to guard against **dividing by zero** so your program never crashes on it
- A brand-new safety skill: **`try` / `except`** — a net that catches errors before they crash your program
- You'll finish with a **professional, crash-proof calculator** ready to show off next week! 🎉

---

## 🤖 BrightByte's Challenge

> *"Last week you built a calculator. This week, we make it BULLETPROOF. Right now, your calculator does one sum and stops — and if someone types 'banana' where a number should go, KABOOM, it crashes. Real programs don't do that. A real app keeps running, handles mistakes politely, and never falls over. By the end of today, you'll have a calculator you could genuinely put in an app store. Let's make it deluxe!"*
> — BrightByte 🤖✨

---

## 🧩 Part 1: What's Wrong With Our Week 6 Calculator?

Your Core calculator from last week is brilliant — but it has three annoyances a real program would never have:

| Problem | What Happens Now | What We Want |
|---|---|---|
| 🔂 **Only one calculation** | It does one sum, then stops. Want another? Re-run the whole thing! | Keep going until the user decides to quit |
| 💥 **Divide by zero crashes** | Choose Divide, enter `0` as the second number → red error | A friendly warning, no crash |
| 🍌 **"banana" crashes it** | Type letters where a number goes → red error | Stay calm, tell the user, carry on |

> 📁 **BEFORE WE START:** Open your **`Y2-T1-W6-Calculator`** Trinket. Save a **copy** and name it **`Y2-T1-W7-CalculatorDeluxe`**. We upgrade the copy — that way your Week 6 original is always safe!

Try the crash yourself right now (it's fun to see!):

```python
num2 = float(input("Enter a number: "))   # type: banana
```
```
ValueError: could not convert string to float: 'banana'
```

That red `ValueError` is exactly what we'll defeat today. 🛡️

---

## 🔁 Part 2: Stage 1 — The Play-Again Loop

The biggest upgrade: a **`while` loop** that keeps the calculator open. We put the whole menu-and-maths **inside** the loop, and add a **Quit** option that ends it.

We use a variable called `running` as an on/off switch:

```python
running = True
while running:
    # ... the menu, the choice, the maths — ALL go in here, indented ...

    if choice == "7":
        print("Goodbye! 👋")
        running = False    # flip the switch OFF — the loop stops
```

### 🔎 How the switch works

- `running = True` — the switch starts **on**
- `while running:` — "keep looping as long as `running` is True"
- When the user picks **7 (Quit)**, we set `running = False`
- Next time the loop checks, `running` is False, so it **stops**

> 💡 This is called a **flag** or a **sentinel** — a variable that controls when a loop ends. You'll use this pattern in EVERY game you build next term!

✅ **Zoom checkpoint:** After a calculation, does the menu appear AGAIN without re-running? Can you quit with 7? Thumbs up! 👍

---

## 🛡️ Part 3: Stage 2 — The Divide-by-Zero Guard

In maths, you **cannot** divide by zero — and Python agrees. Try it:

```python
print(10 / 0)
```
```
ZeroDivisionError: division by zero
```

We stop that crash with a simple `if` check (a guard) using the skills from Week 5. Update your divide branch:

```python
elif choice == "4":
    if num2 == 0:
        print("🚫 Oops! You cannot divide by zero.")
    else:
        result = num1 / num2
        print(f"{num1} / {num2} = {result:.2f}")
```

We check `if num2 == 0:` **before** dividing. If it's zero, we warn kindly. Otherwise, we divide as normal. No crash — ever.

✅ **Zoom checkpoint:** Choose Divide, enter `10` then `0`. Do you see the friendly warning instead of red text? 👍

---

## 💯 Part 4: Stage 3 — Percentage & Tip Modes

Time to make the calculator genuinely useful for real life — shopping and eating out! Add two new options to the menu:

```python
print("  5. Percentage   (%)")
print("  6. Tip splitter (money)")
print("  7. Quit")
```

### Option 5 — Percentage

"What is 10% of 200?" is something we ask all the time. Here's the branch:

```python
elif choice == "5":
    amount = float(input("Find a percentage OF what number? "))
    percent = float(input("What percent? "))
    result = amount * percent / 100
    print(f"{percent}% of {amount} = {result:.2f}")
```

**Example run:**
```
Find a percentage OF what number? 200
What percent? 10
10.0% of 200.0 = 20.00
```

> 🧮 The maths: `amount * percent / 100`. To find 10% of 200: `200 * 10 / 100 = 20`. This uses the operators you mastered in Week 3!

### Option 6 — Tip Splitter

Imagine a meal out with friends. This works out the bill plus a tip, split fairly between everyone:

```python
elif choice == "6":
    bill = float(input("What is the bill total? "))
    tip_percent = float(input("Tip percentage? "))
    people = float(input("Split between how many people? "))
    total = bill + (bill * tip_percent / 100)
    if people == 0:
        print("⚠️ Cannot split between 0 people!")
    else:
        each = total / people
        print(f"Total with tip: {total:.2f}")
        print(f"Each person pays: {each:.2f}")
```

**Example run:**
```
What is the bill total? 100
Tip percentage? 10
Split between how many people? 4
Total with tip: 110.00
Each person pays: 27.50
```

> 💡 Spot the guard? `if people == 0:` — we protect against dividing by zero here too, just like in Part 3. Smart programmers guard EVERY division!

✅ **Zoom checkpoint:** Find 10% of 200 → `20.00`. Split a ₦100 bill with 10% tip between 4 people → each pays `27.50`. Post yours in the chat!

---

## 🥅 Part 5: Stage 4 — The Safety Net (`try` / `except`)

Here's a brand-new skill — and it's a game-changer. Right now, typing "banana" where a number should go crashes everything. We fix that with a **safety net** called `try` / `except`.

### The Idea

Think of a trapeze artist. They do risky things — but there's a **net** underneath. If they fall, the net catches them safely.

`try` / `except` is that net for your code:

```python
try:
    # risky code that MIGHT crash
    num1 = float(input("Enter the first number: "))
except ValueError:
    # what to do IF it crashes
    print("⚠️ That wasn't a number!")
```

- `try:` — "attempt this risky code..."
- `except ValueError:` — "...but IF a `ValueError` happens, do this instead of crashing"

Remember `ValueError`? That's the exact error `float("banana")` throws. Now we **catch** it.

### Wrap Your Number Questions

Put the number inputs **and** the maths inside the `try`. If either number is bad, the net catches it:

```python
elif choice == "1" or choice == "2" or choice == "3" or choice == "4":
    try:
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))
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
            if num2 == 0:
                print("🚫 Oops! You cannot divide by zero.")
            else:
                result = num1 / num2
                print(f"{num1} / {num2} = {result:.2f}")
    except ValueError:
        print("⚠️ That wasn't a number! Please enter digits next time.")
```

> 💡 **Why `try/except` and not `.isdigit()` here?** In Week 5, `.isdigit()` was perfect for whole numbers — but it says `False` for decimals like `"3.5"`! Our calculator needs decimals, so `try/except` is the grown-up tool: it lets the user type `3.5`, and only complains if the input truly isn't a number.

✅ **Zoom checkpoint:** Type `banana` for a number. Calm message, no crash? 🎉

---

## ✅ Part 6: The Whole Deluxe Program

Here is your complete Calculator Deluxe. This is what should be in your `Y2-T1-W7-CalculatorDeluxe` Trinket:

```python
# 🧮 Y2-T1-W7-CalculatorDeluxe
# Made by: [YOUR NAME]

print("=" * 40)
print("     🧮 SMART CALCULATOR DELUXE ⚡")
print("=" * 40)

running = True
while running:
    print()
    print("Choose an operation:")
    print("  1. Add          (+)")
    print("  2. Subtract     (-)")
    print("  3. Multiply     (x)")
    print("  4. Divide       (/)")
    print("  5. Percentage   (%)")
    print("  6. Tip splitter (money)")
    print("  7. Quit")
    print("=" * 40)

    choice = input("Enter a choice (1-7): ")

    if choice == "7":
        print("Goodbye! Thanks for using Smart Calculator Deluxe! 👋")
        running = False

    elif choice == "5":
        try:
            amount = float(input("Find a percentage OF what number? "))
            percent = float(input("What percent? "))
            result = amount * percent / 100
            print(f"{percent}% of {amount} = {result:.2f}")
        except ValueError:
            print("⚠️ Those weren't numbers! Let's try again.")

    elif choice == "6":
        try:
            bill = float(input("What is the bill total? "))
            tip_percent = float(input("Tip percentage? "))
            people = float(input("Split between how many people? "))
            total = bill + (bill * tip_percent / 100)
            if people == 0:
                print("⚠️ Cannot split between 0 people!")
            else:
                each = total / people
                print(f"Total with tip: {total:.2f}")
                print(f"Each person pays: {each:.2f}")
        except ValueError:
            print("⚠️ Those weren't numbers! Let's try again.")

    elif choice == "1" or choice == "2" or choice == "3" or choice == "4":
        try:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
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
                if num2 == 0:
                    print("🚫 Oops! You cannot divide by zero.")
                else:
                    result = num1 / num2
                    print(f"{num1} / {num2} = {result:.2f}")
        except ValueError:
            print("⚠️ That wasn't a number! Please enter digits next time.")

    else:
        print("❌ That is not a valid choice. Please pick 1-7.")

print("=" * 40)
print("Calculator closed. See you next time! 🎉")
```

🎉 **You built a professional, crash-proof calculator!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: The forever loop (forgetting to flip the switch)**

❌ Wrong — `running` never becomes False, so it loops FOREVER:
```python
running = True
while running:
    choice = input("Enter a choice (1-7): ")
    if choice == "7":
        print("Goodbye!")
        # forgot: running = False
```

✅ Correct — flip the switch to stop the loop:
```python
    if choice == "7":
        print("Goodbye!")
        running = False
```

> 😵 Stuck in a forever loop? In Trinket, click **Stop** (or re-run) to escape it.

---

**Mistake 2: Forgetting to indent everything inside the loop**

❌ Wrong — the menu isn't indented, so it's OUTSIDE the loop:
```python
while running:
print("Choose an operation:")
```
```
IndentationError: expected an indented block
```

✅ Correct — everything that repeats is indented under `while`:
```python
while running:
    print("Choose an operation:")
```

---

**Mistake 3: Putting the maths OUTSIDE the try**

❌ Wrong — the crash-prone `float()` is inside `try`, but if it fails, `num1` never exists and the maths below still runs and errors:
```python
try:
    num1 = float(input("First number: "))
except ValueError:
    print("Not a number!")
result = num1 + num2      # 💥 crashes — num1 was never created!
```

✅ Correct — keep the risky code AND the code that depends on it inside the `try`:
```python
try:
    num1 = float(input("First number: "))
    num2 = float(input("Second number: "))
    result = num1 + num2
    print(result)
except ValueError:
    print("Not a number!")
```

---

**Mistake 4: Comparing `choice` as a number again**

❌ Wrong — `choice` is still a string!
```python
if choice == 7:      # 7 is a number; choice is text
    running = False
```

✅ Correct:
```python
if choice == "7":    # compare text to text
    running = False
```

---

## 🌟 What's Coming Next Week?

Your calculator is **finished** — and it's genuinely impressive. Next week is **Week 8: Calculator Showcase & Celebration!** 🎉

- 🎤 You'll **demo your calculator** live on Zoom — share your screen and show it off
- 💬 You'll give and get kind **peer feedback**
- 🧠 We'll play a fun **Term 1 quiz** covering everything you've learned
- 🎊 We'll **celebrate** finishing your very first Year 2 term!

> Bring your `Y2-T1-W7-CalculatorDeluxe` Trinket next week — make sure it runs, doesn't crash, and you're proud of it. It's showtime!

---

## 🏆 Today's Achievements

- ✅ You wrapped your calculator in a **`while` loop** so it runs again and again
- ✅ You added a **Quit** option using a `running` flag
- ✅ You **guarded divide-by-zero** so it warns instead of crashing
- ✅ You built **percentage** and **tip splitter** modes for real-life maths
- ✅ You learned **`try` / `except`** — a safety net that catches bad input
- ✅ You have a **professional, crash-proof calculator** — your term project is complete!

> *"Look at what you just did. A play-again loop. Error guards. A safety net. Real-world features. Eight weeks ago you were dodging the `input()` crash — today you're CATCHING crashes on purpose and handling them like a pro. This is genuinely professional programming. Next week, you show the world."*
> — BrightByte 🤖✨

---

## 📚 Homework: Make It Showcase-Ready ✨

Next week you'll **demo your calculator** to the class. This week, add ONE personal touch and make sure it never, ever crashes.

**Requirements:**
1. Open your **`Y2-T1-W7-CalculatorDeluxe`** Trinket
2. Make sure the play-again loop, divide-by-zero guard, and bad-input safety net all work
3. Add **one personal touch** (pick from the ideas below)
4. Test it hard — try to BREAK it. It should survive silly input.

**Personal-touch ideas (pick ONE):**
- 🎨 A themed title banner (your name, emojis, a fancy border)
- ➕ A new operation (Power `**`, Remainder `%`, or Whole-divide `//`)
- 📜 A running **history** printed with a list (append each answer, then print them all when you quit)
- 💬 Friendlier messages and encouragement after each calculation

**Challenge tiers:**
- ⭐ Add a themed banner and make sure it doesn't crash
- ⭐⭐ Add a new operation as option 8
- ⭐⭐⭐ Keep a `history` list of every calculation and print it neatly when the user quits

> 💡 Bring this exact program to next week's showcase — you'll run it live on Zoom!

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't just finish a calculator — you built something bulletproof. Next week, take a bow and show it off! 🧮✨*
