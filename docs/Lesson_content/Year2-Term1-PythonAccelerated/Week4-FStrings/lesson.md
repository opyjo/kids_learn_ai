---
title: "F-Strings & Beautiful Output ✨🐍"
description: "Turn ugly, messy output into clean, professional text with f-strings, round(), and money formatting — the secret to making your Smart Calculator look amazing"
difficulty: "intermediate"
order_index: 4
course_slug: "year2-term-1-python-accelerated"
is_premium: false
requires_trinket: true
starter_code: |
  # ✨ The Glow-Up Challenge!
  # This program WORKS... but the output is UGLY. Your job: make it beautiful.

  name = "Ama"
  item = "Jollof Rice"
  price = 4.5
  quantity = 3
  total = price * quantity

  # 😖 The ugly old way (comma-separated print)
  print("Customer:", name)
  print("Item:", item)
  print("Price each:", price)
  print("Quantity:", quantity)
  print("Total:", total)

  # 👉 Your mission: rewrite these using f-strings
  #    and show the money with exactly 2 decimal places.
solution_code: |
  # ✨ The Glow-Up Challenge — one possible solution

  name = "Ama"
  item = "Jollof Rice"
  price = 4.5
  quantity = 3
  total = price * quantity

  print("=" * 30)
  print("      ZARA'S FOOD SHOP")
  print("=" * 30)
  print(f"Customer: {name}")
  print(f"Item:     {item}")
  print(f"Price:    GH₵{price:.2f}")
  print(f"Quantity: {quantity}")
  print("-" * 30)
  print(f"TOTAL:    GH₵{total:.2f}")
  print("=" * 30)
  print("   Thank you, come again! 🎉")
class_activities: |
  ## ✨ Class Activity: Glow-Up + Receipt Printer

  Two rounds. Give a **thumbs up** in Zoom when each one runs!

  ### Round 1 — The Glow-Up Challenge (⭐)
  Open the starter code. It prints an order using the ugly comma-separated way.
  Rewrite EVERY `print()` using an **f-string**. Make the totals show exactly
  2 decimal places with `:.2f`.

  ### Round 2 — The Receipt Printer (⭐⭐)
  Build a fresh program that:
  1. Asks for an **item name** (`input()`)
  2. Asks for a **price** and converts it with `float()`
  3. Asks for a **quantity** and converts it with `int()`
  4. Calculates `total = price * quantity`
  5. Prints a **bordered receipt** using `"=" * 30` and f-strings, with money shown as `:.2f`

  ### Bonus (⭐⭐⭐)
  Add a 10% discount line to your receipt. Show the discount and the final
  price to pay, both formatted with `:.2f`. Paste your favourite receipt line
  in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: Shop Receipt (or Profile Card)

  Build ONE polished program in Trinket using f-strings.

  **Option A — Shop Receipt:**
  1. Ask for an item name, a price (`float()`), and a quantity (`int()`)
  2. Calculate the total (`price * quantity`)
  3. Print a **bordered receipt** with `"=" * 30`
  4. Show all money amounts with `:.2f` (e.g. `GH₵13.50`)

  **Option B — Profile Card:**
  1. Ask for a name, an age (`int()`), and a favourite subject
  2. Print a **bordered profile card** with `"=" * 30`
  3. Use f-strings for every line, and include at least one emoji

  **Example receipt run:**
  ```
  Item? Puff Puff
  Price each? 0.5
  How many? 12
  ==============================
           SHOP RECEIPT
  ==============================
  Item:     Puff Puff
  Price:    ₦0.50
  Quantity: 12
  ------------------------------
  TOTAL:    ₦6.00
  ==============================
  ```

  **Challenge tiers:**
  - ⭐ f-strings + a border
  - ⭐⭐ money formatted with `:.2f`
  - ⭐⭐⭐ add a discount or tax line, still perfectly formatted

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Thought: AI Cares About Presentation Too

  When you ask a chatbot a maths question, it doesn't reply
  `3.3333333333333335` — it says something neat like *"about 3.33"*.

  AI systems spend real effort **formatting** their answers so humans can read
  them easily. The words are only half the job; presentation is the other half.

  **Discuss in the Zoom chat:** Have you ever seen an AI give you a messy or
  confusing answer? What would have made it clearer?

  Today you learn the same skill: taking a correct-but-ugly result and making
  it beautiful for a human to read.
---

# Year 2, Lesson 4: F-Strings & Beautiful Output ✨🐍

**Course:** Python Accelerated
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

- Why `print(10 / 3)` gives you the horrible `3.3333333333333335` — and how to tame it
- **F-strings**: the modern, clean way to mix words and variables together
- How to put variables AND maths *inside* your text: `f"{a} + {b} = {a + b}"`
- `round()` for tidying up long decimals
- `:.2f` for showing money with exactly 2 decimal places (₦ and GH₵!)
- Building neat, **bordered receipts and reports** that look professional

---

## 🤖 BrightByte Has a Confession

> *"Last week you unlocked division — and something ANNOYING happened. You typed `print(10 / 3)` and Python spat out `3.3333333333333335`. THIRTEEN threes! Who needs thirteen threes?! Your maths was perfect, but the OUTPUT looked like a robot sneezed on the screen. Today we fix that forever. By the end of this lesson, your programs won't just be correct — they'll be BEAUTIFUL. And beautiful is what makes people trust your code."*
> — BrightByte 🤖✨

---

## 😖 Part 1: The Problem With Ugly Output

Remember last week's maths power-ups? Try this in Trinket right now:

```python
print(10 / 3)
```

**Output:**
```
3.3333333333333335
```

😬 Yuck. Your calculation is *correct* — but nobody wants to read that. Now imagine your Smart Calculator printing that for a customer. Not exactly professional!

And it gets worse. Up to now, when you wanted to mix words and variables, you had two clumsy choices:

**The comma way:**
```python
name = "Kofi"
age = 12
print("My name is", name, "and I am", age)
```
```
My name is Kofi and I am 12
```

**The plus (+) glue way — which BREAKS with numbers:**
```python
name = "Kofi"
age = 12
print("My name is " + name + " and I am " + age)
```
```
TypeError: can only concatenate str (not "int") to str
```

💥 There it is again — that same crash from Week 1! The `+` glue only works on text, so you'd have to wrap every number in `str()`:

```python
print("My name is " + name + " and I am " + str(age))
```

That works... but it's fiddly, and easy to get wrong. **There has to be a better way.** There is. It's called an **f-string**.

---

## ✨ Part 2: Meet the F-String

An **f-string** is a string with a little `f` in front of the opening quote. Inside it, anything you put in `{curly braces}` gets **swapped for its value**.

```python
name = "Ama"
print(f"Hello, {name}!")
```

**Output:**
```
Hello, Ama!
```

Look how clean that is! No commas, no `+`, no `str()`. You just write your sentence normally and drop variables into `{ }` wherever you need them.

> **The `f` stands for "format".** It tells Python: *"This isn't a plain string — look inside the curly braces and fill them in."*

### The Big Comparison

| Old Way | Problem | F-String Way |
|---|---|---|
| `print("Hi", name)` | Adds spaces you can't control | `print(f"Hi {name}")` |
| `print("Hi " + name)` | Crashes if `name` is a number | `print(f"Hi {name}")` |
| `print("Age: " + str(age))` | Have to remember `str()` | `print(f"Age: {age}")` |

The f-string wins every single time. **From today, f-strings are your default way to print.** 🏆

### You Can Drop In As Many Variables As You Like

```python
name = "Kwame"
age = 12
town = "Kumasi"
print(f"{name} is {age} and lives in {town}.")
```

**Output:**
```
Kwame is 12 and lives in Kumasi.
```

### 💬 Class Discussion

> **Type this f-string in the Zoom chat, filling in your own details:**
> `f"I am {name} and I love {hobby}!"`
> What would it print for YOU?

---

## 🧮 Part 3: Maths Inside the Braces

Here's the magic trick that makes f-strings feel like a superpower: you can put **whole calculations** inside the curly braces, not just variables.

```python
a = 5
b = 3
print(f"{a} + {b} = {a + b}")
```

**Output:**
```
5 + 3 = 8
```

Trace it carefully:
- `{a}` → `5`
- `{b}` → `3`
- `{a + b}` → Python does the maths → `8`

Python calculates whatever is inside the braces, *then* drops the answer into your text. This is exactly how your Smart Calculator will show its working!

```python
price = 4
quantity = 6
print(f"{quantity} items at GH₵{price} each = GH₵{quantity * price}")
```

**Output:**
```
6 items at GH₵4 each = GH₵24
```

> 🧠 **Think of the braces as tiny windows.** Whatever you write inside — a variable, a sum, a multiplication — Python works it out and shows only the *result* through the window.

---

## 🔢 Part 4: Taming Long Decimals with round()

Now let's fix that `3.3333333333333335` monster. Python has a built-in tool called `round()` that trims a number to a set number of decimal places.

```python
messy = 3.3333333333333335
print(round(messy, 2))
```

**Output:**
```
3.33
```

The `2` means *"round to 2 decimal places."* Try different amounts:

| Code | Output |
|---|---|
| `round(3.14159, 0)` | `3.0` |
| `round(3.14159, 1)` | `3.1` |
| `round(3.14159, 2)` | `3.14` |
| `round(3.14159, 3)` | `3.142` |

You can use `round()` right inside an f-string too:

```python
result = 10 / 3
print(f"10 divided by 3 is about {round(result, 2)}")
```

**Output:**
```
10 divided by 3 is about 3.33
```

Much friendlier than thirteen threes! But `round()` has one small quirk when it comes to **money**... which brings us to the star of the show.

---

## 💰 Part 5: Perfect Money with :.2f

Here's a sneaky problem. What if a price rounds to something like `6.5`?

```python
price = 6.5
print(round(price, 2))
```

**Output:**
```
6.5
```

😕 But money should ALWAYS show two decimal places — we write **GH₵6.50**, not **GH₵6.5**. `round()` drops the trailing zero. To force exactly two decimal places, we use a special format inside the braces: **`:.2f`**

```python
price = 6.5
print(f"GH₵{price:.2f}")
```

**Output:**
```
GH₵6.50
```

The `:.2f` means *"show this number as a decimal (float) with exactly 2 places."* It's perfect for money because it never drops the zeros.

```python
print(f"₦{1200.5:.2f}")
print(f"₦{0.5:.2f}")
print(f"₦{60:.2f}")
```

**Output:**
```
₦1200.50
₦0.50
₦60.00
```

Notice the last one: even a whole number like `60` gets shown as `60.00`. That's exactly what you want on a receipt.

### round() vs :.2f — Which When?

| Tool | What it does | Best for |
|---|---|---|
| `round(n, 2)` | Rounds the *number itself* | Doing more maths afterwards |
| `f"{n:.2f}"` | Rounds only for *display* | Printing money, final output |

> 💡 **The rule of thumb:** use `:.2f` whenever you're **showing money to a human**. It never drops trailing zeros, so prices always look right.

### Bonus: Thousands Separators (Optional!)

If you have a big number, `:,` adds commas so it's easy to read:

```python
print(f"{1000000:,}")
```

**Output:**
```
1,000,000
```

Handy for prize money or high scores — but don't worry if you skip this one today. 😊

---

## 🧾 Part 6: Building a Beautiful Receipt

Now we combine EVERYTHING: f-strings, maths, `:.2f`, and the `"=" * 30` border trick from Year 1. This is where your output goes from "meh" to "wow".

```python
item = "Jollof Rice"
price = 4.5
quantity = 3
total = price * quantity

print("=" * 30)
print("      ZARA'S FOOD SHOP")
print("=" * 30)
print(f"Item:     {item}")
print(f"Price:    GH₵{price:.2f}")
print(f"Quantity: {quantity}")
print("-" * 30)
print(f"TOTAL:    GH₵{total:.2f}")
print("=" * 30)
print("   Thank you, come again! 🎉")
```

**Output:**
```
==============================
      ZARA'S FOOD SHOP
==============================
Item:     Jollof Rice
Price:    GH₵4.50
Quantity: 3
------------------------------
TOTAL:    GH₵13.50
==============================
   Thank you, come again! 🎉
```

Look at that! A real, professional-looking receipt — and it's just f-strings, some borders, and `:.2f`. This is *exactly* the technique you'll use to make your Smart Calculator's answers shine.

> 🧠 Notice how `4.5 * 3 = 13.5`, but `:.2f` shows it as `13.50`. That trailing zero is what makes it look like real money.

---

## ⚠️ Common Mistakes

**Mistake 1: Forgetting the `f` prefix**

This is the #1 f-string bug! No `f`, no magic.

❌ Wrong:
```python
name = "Ama"
print("Hello, {name}!")
```
```
Hello, {name}!
```

😱 Python printed the curly braces *literally* — because without the `f`, it's just a plain string.

✅ Correct:
```python
name = "Ama"
print(f"Hello, {name}!")
```
```
Hello, Ama!
```

---

**Mistake 2: Forgetting the curly braces**

❌ Wrong:
```python
name = "Kofi"
print(f"Hello, name!")
```
```
Hello, name!
```

The `f` is there, but with no `{ }`, Python has nothing to fill in. **You need BOTH the `f` and the `{ }`.**

✅ Correct:
```python
print(f"Hello, {name}!")
```
```
Hello, Kofi!
```

---

**Mistake 3: Putting the colon in the wrong place**

The format code goes *inside* the braces, right after the value, like `{price:.2f}`.

❌ Wrong:
```python
price = 4.5
print(f"GH₵{price}:.2f")
```
```
GH₵4.5:.2f
```

😬 The `:.2f` leaked out as plain text!

✅ Correct:
```python
print(f"GH₵{price:.2f}")
```
```
GH₵4.50
```

> **Remember the shape:** `{ value : format }` — value first, then a colon, then the format, all snug inside one set of braces.

---

## 🎮 Class Activity: Glow-Up + Receipt Printer

Time to make things beautiful! Two rounds — **thumbs up** in Zoom when each works.

### Round 1 — The Glow-Up Challenge (⭐)

Open the starter code. It prints an order the ugly comma way. Rewrite **every** `print()` as an f-string, and show all money with `:.2f`.

### Round 2 — The Receipt Printer (⭐⭐)

Build a fresh program that:
1. Asks for an **item name** with `input()`
2. Asks for a **price** and converts with `float()`
3. Asks for a **quantity** and converts with `int()`
4. Calculates `total = price * quantity`
5. Prints a **bordered receipt** with `"=" * 30` and money as `:.2f`

```python
item = input("Item? ")
price = float(input("Price each? "))
quantity = int(input("How many? "))
total = price * quantity

print("=" * 30)
print("         SHOP RECEIPT")
print("=" * 30)
print(f"Item:     {item}")
print(f"Price:    ₦{price:.2f}")
print(f"Quantity: {quantity}")
print("-" * 30)
print(f"TOTAL:    ₦{total:.2f}")
print("=" * 30)
```

### Bonus (⭐⭐⭐)

Add a **10% discount** line. Show the discount and the final price to pay, both with `:.2f`:

```python
discount = total * 0.10
to_pay = total - discount
print(f"Discount: ₦{discount:.2f}")
print(f"TO PAY:   ₦{to_pay:.2f}")
```

Paste your favourite receipt line in the Zoom chat! 💬

---

## 🧮 Part 7: This Connects Straight to Your Smart Calculator

Remember the term project? Your **Smart Calculator** needs to show answers like this:

```python
a = 15
b = 4
print(f"{a} × {b} = {a * b:.2f}")
```

**Output:**
```
15 × 4 = 60.00
```

Every skill from today — f-strings, maths inside braces, `:.2f` — is *exactly* what turns your calculator from a boring number-printer into something that looks like a real app. In Week 6, when you build the calculator's core, you'll reach for these techniques constantly.

> *"A calculator that prints `60.0` looks like homework. A calculator that prints `15 × 4 = 60.00` looks like an APP. Same maths — completely different feeling. That difference is you, showing off your f-strings."*
> — BrightByte 🤖

---

## 🌟 What's Coming Next Week?

Your programs look beautiful now — but they still have a weakness. Try this and type something silly:

```python
age = int(input("How old are you? "))
```

If the user types `banana` instead of a number... 💥 **CRASH!**

```
ValueError: invalid literal for int() with base 10: 'banana'
```

Next week — **Week 5: Smart Decisions & Safe Input** — you'll learn how to stop your program from crashing when someone types the wrong thing. It's the "smart" in Smart Calculator, and it's the last big skill before you start building the real project. See you there!

---

## 🏆 Today's Achievements

- ✅ You understand *why* `3.3333333333333335` is ugly — and how to fix it
- ✅ You can write **f-strings** with `{variables}` inside them
- ✅ You can put **maths inside the braces**: `f"{a + b}"`
- ✅ You can tidy decimals with `round()`
- ✅ You can format money perfectly with `:.2f`
- ✅ You built a **beautiful bordered receipt**

> *"You just crossed a line most beginners never do: you stopped caring only whether code WORKS, and started caring whether it looks GOOD. That's the mindset of a real developer. Your Smart Calculator is going to be gorgeous."*
> — BrightByte 🤖✨

---

## 📚 Homework: Shop Receipt (or Profile Card)

Build ONE polished program in Trinket using f-strings.

**Option A — Shop Receipt:**
1. Ask for an item name, a price (`float()`), and a quantity (`int()`)
2. Calculate the total (`price * quantity`)
3. Print a **bordered receipt** with `"=" * 30`
4. Show all money amounts with `:.2f` (e.g. `GH₵13.50`)

**Option B — Profile Card:**
1. Ask for a name, an age (`int()`), and a favourite subject
2. Print a **bordered profile card** with `"=" * 30`
3. Use f-strings for every line, and include at least one emoji

**Example receipt run:**
```
Item? Puff Puff
Price each? 0.5
How many? 12
==============================
         SHOP RECEIPT
==============================
Item:     Puff Puff
Price:    ₦0.50
Quantity: 12
------------------------------
TOTAL:    ₦6.00
==============================
```

**Challenge tiers:**
- ⭐ f-strings + a border
- ⭐⭐ money formatted with `:.2f`
- ⭐⭐⭐ add a discount or tax line, still perfectly formatted

**Submit:** Save your Trinket (name it `Y2-T1-W4-FStrings`), click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*Beautiful code, beautiful output — you're not just coding now, you're crafting. See you next week! ✨🐍*
