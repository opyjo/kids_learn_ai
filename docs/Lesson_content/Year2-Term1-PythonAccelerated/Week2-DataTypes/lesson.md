---
title: "Data Types & Conversion: Solving the Crash Mystery! 🕵️🔢"
description: "Solve the Week 1 crash mystery — discover str, int, and float, inspect them with type(), and convert user input into real numbers"
difficulty: "intermediate"
order_index: 2
course_slug: "year2-term-1-python-accelerated"
is_premium: false
requires_trinket: true
starter_code: |
  # 🕵️ Type Detective — Week 2!

  # THE WEEK 1 MYSTERY: remove the # from the next two lines,
  # run them, and watch the program CRASH. 💥
  # age = input("How old are you? ")
  # print(age + 1)

  # Detective work: PREDICT what each line prints BEFORE you run it!
  print(type("hello"))
  print(type(12))
  print(type(12.5))
  print("12" + "12")
  print(12 + 12)

  # THE FIX: one magic word makes the mystery lines work.
  # Can you crack it? (Hint: it rhymes with "mint"...)
solution_code: |
  # 🕵️ Type Detective — one possible solution

  # Detective answers:
  print(type("hello"))   # <class 'str'>
  print(type(12))        # <class 'int'>
  print(type(12.5))      # <class 'float'>
  print("12" + "12")     # 1212  (text glue!)
  print(12 + 12)         # 24    (real maths!)

  # The Week 1 mystery, SOLVED with int():
  age = int(input("How old are you? "))
  print(age + 1)

  # Mini build: Dog Years Converter 🐶
  dog_age = age * 7
  print("In dog years, you are", dog_age, "years old! 🐶")
class_activities: |
  ## 🎮 Class Activity: Type Detective 🕵️

  ### Round 1 — Predict the Type (⭐)
  Your teacher shows tricky snippets one at a time. Type your prediction in the **Zoom chat** BEFORE anyone runs the code:
  1. `type("hello")`
  2. `type(42)`
  3. `type(3.5)`
  4. `type("42")` — careful, this one fools almost everyone!
  5. `type(input("Pick a number: "))` — even if you type 7!

  ### Round 2 — Glue or Maths? (⭐⭐)
  Predict the exact output, then run to check:
  1. `print("5" + "5")`
  2. `print(5 + 5)`
  3. `print(int("5") + int("5"))`
  4. `print("Ha" * 3)`

  ### Round 3 — Mini Build: Dog Years Converter (⭐⭐⭐)
  1. Ask the user their age with `input()`
  2. Convert it to an `int`
  3. Multiply by 7 and print their age in dog years 🐶

  ### Bonus Build
  Add a second calculation: how many years until the user turns 18? (`18 - age`). If you finish that, print `type()` of your variables to prove your conversion worked!
take_home_assignment: |
  ## 📚 Homework: The Number Cruncher

  Build a **Number Cruncher** in Trinket — a program that asks numeric questions, converts the answers, and does REAL maths (no text glue allowed!).

  **Requirements:**
  1. Ask at least **2 numeric questions** with `input()`
  2. Convert every numeric answer with `int()` or `float()`
  3. Do at least **2 real calculations** and print the results
  4. Include at least one emoji 🎉

  **Ideas:** age in months (`age * 12`), age in days (`age * 365`), heartbeats per day (`beats_per_minute * 60 * 24`)

  **Example run:**
  ```
  What is your name? Amara
  How old are you? 12
  How many times does your heart beat in one minute? 80
  ---
  Amara, you are about 144 months old!
  Your heart beats about 115200 times every day! ❤️
  ```

  **Challenge tiers:**
  - ⭐ 2 questions, converted with `int()`, 2 calculations
  - ⭐⭐ 3 questions, including one decimal answer converted with `float()`
  - ⭐⭐⭐ Print the `type()` of one answer BEFORE and AFTER conversion to prove the change happened

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: AI Speaks Numbers Too!

  Today you learned that Python can't do maths with text — it needs real numbers. Here's the amazing part: **AI has exactly the same rule!**

  Before an AI can learn anything, everything gets converted into numbers:
  - 🗣️ Words you type to a chatbot → turned into long lists of numbers
  - 🖼️ Photos → turned into grids of numbers (each pixel's colour is a number!)
  - 🎵 Songs → turned into thousands of numbers per second

  An AI never "sees" a picture of jollof rice — it sees millions of numbers and finds patterns in them.

  **Discuss in the Zoom chat:** "If a photo becomes numbers, what do you think a BIGGER number might mean for a pixel — brighter or darker? Take a guess!"

  So when you converted `"12"` into `12` today, you did the exact same job data scientists do every day: getting data into the right form before the maths can begin!
---

# Year 2, Lesson 2: Data Types & Conversion — Solving the Crash Mystery! 🕵️🔢

**Course:** Python Accelerated
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

- WHY last week's mystery program crashed (case closed today!)
- The three core data types: `str`, `int`, and `float`
- How to use `type()` to inspect any value like a detective
- Why `input()` ALWAYS gives you text — even when the user types a number
- How to convert between types with `int()`, `float()`, and `str()`
- What happens when a conversion fails (a sneak preview of Week 5!)

---

## 🤖 BrightByte's Case File

> *"Detective, glad you're here. Last week a perfectly innocent-looking program CRASHED in front of the whole class. The suspect? A number that wasn't really a number. Today we open the case file, catch the culprit, and learn the one skill your Smart Calculator cannot live without. Grab your magnifying glass!"*
> — BrightByte 🤖🕵️

---

## 💥 Part 1: The Mystery Returns

Remember this from last week? Open Trinket, name today's project `Y2-T1-W2-DataTypes`, and run the crime scene:

```python
age = input("How old are you? ")
print(age + 1)
```

Type `12` when it asks. **CRASH:**

```
TypeError: can only concatenate str (not "int") to str
```

Let's read that error like detectives. Python is saying:

> "You asked me to glue (**concatenate**) things together. But one of them is text (`str`) and the other is a whole number (`int`) — and I refuse to glue text to a number!"

Wait... glue? We wanted to ADD! And why does Python think `age` is text? The user typed `12` — that's clearly a number!

🕵️ **Here's the twist that solves the whole case:** to Python, `"12"` and `12` are **two completely different things**.

### 💬 Class Discussion

> **Before we reveal the answer — why do YOU think Python treats `"12"` and `12` differently?**
> Type your theory in the **Zoom chat**. Wildest theory gets a shout-out!

---

## 🧬 Part 2: The Three Types Every Value Has

Every single value in Python has a **data type** — a label that tells Python what kind of thing it is and what it's allowed to do. Here are the big three:

| Type | Full Name | What It Is | Examples |
|---|---|---|---|
| `str` | String | Text — anything in quotes | `"hello"`, `"Ama"`, `"12"` |
| `int` | Integer | Whole numbers — no quotes | `12`, `0`, `-5` |
| `float` | Float | Decimal numbers — no quotes | `3.5`, `12.0`, `-0.5` |

> **The quotes are everything!** `"12"` wears quotes, so it's a `str` — just text that HAPPENS to look like a number. `12` has no quotes, so it's a real `int` Python can do maths with.

### Your Detective Gadget: type()

Python gives you a built-in inspector. Feed `type()` any value and it reveals the truth:

```python
print(type("hello"))
print(type(12))
print(type(12.5))
print(type("12"))
```

**Output:**
```
<class 'str'>
<class 'int'>
<class 'float'>
<class 'str'>
```

Look at that last line carefully. `"12"` is a `str` — the quotes gave it away! 🕵️

It works on variables too:

```python
name = "Kofi"
age = 12
height = 1.5

print(type(name))
print(type(age))
print(type(height))
```

**Output:**
```
<class 'str'>
<class 'int'>
<class 'float'>
```

### The Smoking Gun: input() ALWAYS Returns Text

Now for the key piece of evidence. Run this and type `7`:

```python
answer = input("Pick a number: ")
print(type(answer))
```

**Output:**
```
Pick a number: 7
<class 'str'>
```

**Even though you typed a number, `input()` handed you TEXT.**

Why? Because `input()` has no idea what the user will type. `"Kofi"`? `"7"`? `"banana"`? It can't guess — so it plays it safe and gives you *everything* as a string. Always. Every time. No exceptions.

🎉 **CASE SOLVED!** Last week's crash happened because `age` was the string `"12"`, and Python refuses to add the number `1` to a piece of text.

---

## 🍯 Part 3: Text Glue vs Real Maths

Here's the fun part. The `+` symbol does TWO totally different jobs depending on the types:

```python
print("12" + "12")
print(12 + 12)
```

**Output:**
```
1212
24
```

😲 Same symbol — completely different results!

| Code | Types | What `+` Does | Result |
|---|---|---|---|
| `"12" + "12"` | `str` + `str` | Glues text together | `1212` |
| `12 + 12` | `int` + `int` | Real maths | `24` |
| `"12" + 12` | `str` + `int` | 💥 CRASH — Python refuses to mix | `TypeError` |

> **Remember from Year 1:** gluing text is called **concatenation**. With two strings, `+` is glue. With two numbers, `+` is maths. Mix them? Python throws its hands up.

`*` plays the same game:

```python
print("Ha" * 3)
print(7 * 3)
```

**Output:**
```
HaHaHa
21
```

Text times a number = repetition. Number times a number = multiplication. **The types decide the behaviour.**

### 🕵️ Quick Detective Check

Predict the output, then run it:

```python
print("5" + "5")
print(5 + 5)
```

Did you say `55` and `10`? Give a **thumbs up** in Zoom reactions. 👍

---

## 🔄 Part 4: The Converters — int(), float(), str()

So `input()` gives us a string, but we need a number. The fix? **Convert it.** Python has three converter machines:

| Converter | Job | Example | Result |
|---|---|---|---|
| `int(x)` | Turn `x` into a whole number | `int("12")` | `12` |
| `float(x)` | Turn `x` into a decimal number | `float("3.5")` | `3.5` |
| `str(x)` | Turn `x` into text | `str(12)` | `"12"` |

### Fixing the Mystery Program

Watch the one-word fix:

```python
age = int(input("How old are you? "))
print(age + 1)
```

**Output:**
```
How old are you? 12
13
```

🎉 **IT WORKS!** Read the fixed line from the inside out:

1. `input("How old are you? ")` asks the question → gives back the string `"12"`
2. `int(...)` converts `"12"` into the real number `12`
3. `age = ...` stores the real number in the variable

> **`int(input(...))` is one of the most-typed patterns in all of Python.** You'll use it in the Smart Calculator, in games, in quizzes — everywhere a program needs a number from a human.

### When Do You Need float()?

When the answer might have a decimal point:

```python
price = float(input("How much is a plate of jollof rice? "))
total = price * 3
print("Three plates cost:", total)
```

**Output:**
```
How much is a plate of jollof rice? 12.5
Three plates cost: 37.5
```

If you'd used `int()` there, typing `12.5` would crash — `int()` only accepts whole-number strings. (More on crashes in a moment!)

### When Do You Need str()?

Going the OTHER way — gluing a number into text with `+`:

```python
score = 100
print("Your score is " + str(score) + "!")
```

**Output:**
```
Your score is 100!
```

Without `str()`, that line crashes with our old friend `TypeError: can only concatenate str (not "int") to str` — because you can't glue a raw number into text.

> 💡 **Sneaky fact:** `int()` doesn't round — it CHOPS. `int(9.9)` gives `9`, not `10`. The decimal part just gets thrown away!

---

## 🚨 Part 5: When Conversion Fails

The converters are powerful, but they're not magicians. Ask `int()` to convert something that isn't a number, and it panics:

```python
number = int("hello")
```

```
ValueError: invalid literal for int() with base 10: 'hello'
```

That's a **ValueError** — Python saying: "You gave me a value I cannot possibly turn into a number."

Now think like a detective about YOUR programs. What happens here if the user types `twelve` instead of `12`?

```python
age = int(input("How old are you? "))
```

```
How old are you? twelve
ValueError: invalid literal for int() with base 10: 'twelve'
```

💥 Crash! The user typed something silly and our program fell over.

> 🔮 **Keep this in your case file:** in **Week 5** you'll learn the "bouncer" pattern — checking what the user typed BEFORE converting it, so your program never crashes no matter what nonsense arrives. It's the secret behind the "smart" in Smart Calculator. For now, just recognise the `ValueError` when you see it.

---

## ⚠️ Common Mistakes (Every Detective Falls For These Once!)

**Mistake 1: Forgetting to convert input before maths**

❌ Wrong:
```python
age = input("How old are you? ")
print(age + 1)
```
```
TypeError: can only concatenate str (not "int") to str
```

✅ Correct:
```python
age = int(input("How old are you? "))
print(age + 1)
```
```
How old are you? 12
13
```

---

**Mistake 2: Using int() on a decimal string**

❌ Wrong:
```python
height = int("1.5")
```
```
ValueError: invalid literal for int() with base 10: '1.5'
```

✅ Correct:
```python
height = float("1.5")
print(height)
```
```
1.5
```

> `int()` only accepts strings that look like WHOLE numbers. If a decimal point might appear, reach for `float()`.

---

**Mistake 3: Gluing a raw number into text**

❌ Wrong:
```python
lives = 3
print("Lives left: " + lives)
```
```
TypeError: can only concatenate str (not "int") to str
```

✅ Correct (two ways!):
```python
lives = 3
print("Lives left: " + str(lives))
print("Lives left:", lives)
```
```
Lives left: 3
Lives left: 3
```

> The comma trick from Year 1 (`print("...", lives)`) handles the conversion for you — but when you use `+`, YOU must call `str()`.

---

## 🎮 Class Activity: Type Detective 🕵️

Time to earn your detective badge. Three rounds — predictions go in the **Zoom chat** BEFORE anyone runs code!

### Round 1 — Predict the Type (⭐)

Your teacher shows these one at a time. Call the type: `str`, `int`, or `float`?

1. `type("hello")`
2. `type(42)`
3. `type(3.5)`
4. `type("42")` — careful, this one fools almost everyone!
5. `type(input("Pick a number: "))` — even if you type 7!

### Round 2 — Glue or Maths? (⭐⭐)

Predict the EXACT output:

1. `print("5" + "5")`
2. `print(5 + 5)`
3. `print(int("5") + int("5"))`
4. `print("Ha" * 3)`

### Round 3 — Mini Build: Dog Years Converter (⭐⭐⭐)

Build it yourself in Trinket:

```python
age = int(input("How old are you? "))
dog_age = age * 7
print("In dog years, you are", dog_age, "years old! 🐶")
```

**Example run:**
```
How old are you? 12
In dog years, you are 84 years old! 🐶
```

### 🏆 Bonus Build

Add a second calculation — how many years until the user turns 18?

```python
years_left = 18 - age
print("Only", years_left, "years until you turn 18! 🎂")
```

Finished that too? Print `type(age)` before AND after your conversion line to prove the transformation happened. Paste your favourite output line in the Zoom chat!

---

## 🧮 Part 6: Your Calculator Puzzle Piece

Remember the term mission — the **Smart Calculator**. Here's why today matters:

> The Smart Calculator takes numbers from the user. **Without conversion, it would be gluing text, not doing maths** — ask it for `12 + 12` and it would proudly answer `1212`. Today you collected the puzzle piece that makes it a real calculator: `int(input(...))` and `float(input(...))`.

| Week | Puzzle Piece | Status |
|---|---|---|
| 2 | Turning user text into real numbers | ✅ Collected today! |
| 3 | Power maths operators | 🔜 Next week |
| 4 | Beautiful formatted output | 🔒 |
| 5 | Crash-proof input checking | 🔒 |

---

## 🌟 What's Coming Next Week

Your calculator can now receive real numbers... but can it do POWER maths? Try these in Trinket if you dare:

```python
print(17 // 5)
print(17 % 5)
print(2 ** 10)
```

Two slashes?! A percent sign that isn't a percentage?! Double stars?! Next week — **Maths Power-Ups** — we unlock Python's secret operators: whole-number division, remainders, and powers. They look strange, but they're behind everything from "is this number even?" to "how much change do I get?"

---

## 🏆 Today's Achievements

- ✅ You SOLVED the Week 1 crash mystery — case closed!
- ✅ You know the three core types: `str`, `int`, and `float`
- ✅ You can inspect any value with `type()`
- ✅ You know `input()` ALWAYS returns a string — no exceptions
- ✅ You can convert with `int()`, `float()`, and `str()`
- ✅ You've met `ValueError` — and you know Week 5 will teach you to defeat it
- ✅ You collected the Smart Calculator's first real puzzle piece

> *"One week ago that TypeError looked like gibberish. Today you read it, explained it, and FIXED it with one word. That's what levelling up feels like, detective. See you at the next case."*
> — BrightByte 🤖🕵️

---

## 📚 Homework: The Number Cruncher

Build a **Number Cruncher** in Trinket — a program that asks numeric questions, converts the answers, and does REAL maths (no text glue allowed!).

**Requirements:**
1. Ask at least **2 numeric questions** with `input()`
2. Convert every numeric answer with `int()` or `float()`
3. Do at least **2 real calculations** and print the results
4. Include at least one emoji 🎉

**Ideas:** age in months (`age * 12`), age in days (`age * 365`), heartbeats per day (`beats_per_minute * 60 * 24`)

**Example run:**
```
What is your name? Amara
How old are you? 12
How many times does your heart beat in one minute? 80
---
Amara, you are about 144 months old!
Your heart beats about 115200 times every day! ❤️
```

**Challenge tiers:**
- ⭐ 2 questions, converted with `int()`, 2 calculations
- ⭐⭐ 3 questions, including one decimal answer converted with `float()`
- ⭐⭐⭐ Print the `type()` of one answer BEFORE and AFTER conversion to prove the change happened

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*Case closed, detective. Next week: Maths Power-Ups! 🕵️⚡*
