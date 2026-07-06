---
title: "Parameters: Passing Things In 📥🔧"
description: "Give your functions superpowers — pass information IN with parameters so one function can do its job on any name, number, or message you throw at it"
difficulty: "intermediate"
order_index: 2
course_slug: "year2-term-3-functions"
is_premium: false
requires_trinket: true
starter_code: |
  # 📥 Parameters — Passing Things In!
  # Last week our functions always did the SAME thing every time.
  # This week we pass DIFFERENT information IN using parameters.

  # This greeter is stuck — it can only ever say one thing.
  def greet():
      print("Hello, friend!")

  greet()
  greet()

  # TODO 1: change greet so it takes a `name` parameter
  # TODO 2: call greet("Ama") and then greet("Kofi")
  # TODO 3: write draw_box(width) that prints a box of ANY width
solution_code: |
  # 📥 Parameters — one possible solution

  # A greeter that takes ONE parameter
  def greet(name):
      print(f"Hello, {name}!")

  greet("Ama")
  greet("Kofi")

  # A greeter with TWO parameters (order matters!)
  def greet_person(name, age):
      print(f"Hi {name}! You are {age} years old. 🎉")

  greet_person("Zara", 12)

  # A box of ANY width
  def draw_box(width):
      print("+" + "-" * width + "+")
      print("|" + " " * width + "|")
      print("+" + "-" * width + "+")

  draw_box(4)
class_activities: |
  ## 🎮 Class Activity: The Personalised Greeter 📥

  Three rounds. Each round, build the function in Trinket, run it, and give a **thumbs up** in Zoom when it works!

  ### Round 1 — Greet Anyone (⭐)
  Change the stuck `greet()` so it takes a `name` parameter, then call it twice with two different names:
  ```python
  def greet(name):
      print(f"Hello, {name}!")

  greet("Ama")
  greet("Kofi")
  ```

  ### Round 2 — Name + Age (⭐⭐)
  Write `greet_person(name, age)` that takes **two** parameters and prints a friendly line using both. Call it for three different people.

  ### Round 3 — Box Builder (⭐⭐⭐)
  Write `draw_box(width)` that prints a box of any width. Call it with `3`, then `8`. Watch the box grow!

  ### 💬 Zoom-Chat Checkpoint
  Look at this code:
  ```python
  def greet(name):
      print(f"Hello, {name}!")

  greet("Kofi")
  ```
  **Type in the Zoom chat:** what does `greet("Kofi")` print? (No running it first — predict it!)
take_home_assignment: |
  ## 📚 Homework: Custom Card Maker 💌

  Write a **Custom Card Maker** in Trinket. Build ONE function that prints a personalised card, then call it several times with different arguments.

  **Requirements:**
  1. Write a function `make_card(name, message, emoji)` with **three parameters**
  2. Inside it, print a nicely bordered card that uses all three parameters
  3. Call your function at least **3 times** with different arguments
  4. Every card should look different — because the arguments are different!

  **Example run:**
  ```
  *************************
    To: Ama
    Happy Birthday 🎂
  *************************
  *************************
    To: Kofi
    Well done 🌟
  *************************
  ```

  **Challenge tiers:**
  - ⭐ A `make_card` function with 3 parameters, called 3 times
  - ⭐⭐ Make the border and layout beautiful (borders that fit the message)
  - ⭐⭐⭐ Add a `loop` that calls `make_card` for a list of names, all with the same message

  **Trinket name:** `Y2-T3-W2-Parameters`

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Thought: Parameters Are Like AI Settings

  When you use an AI chatbot, hidden **settings** are passed in behind the scenes — how long the answer should be, how creative it should be, what language to reply in. Change the setting, and the same AI behaves differently.

  That is EXACTLY what parameters do for your functions! One `greet` function, but pass in `"Ama"` and you get one greeting, pass in `"Kofi"` and you get another.

  **Discuss in the Zoom chat:** if you could pass ONE setting into an AI helper to change how it answers you, what would it be? (Shorter answers? Funnier? More emojis?)
---

# Year 2, Lesson 2: Parameters: Passing Things In 📥🔧

**Course:** Functions
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

- Why a function that always does the **same thing** is a bit boring
- How to pass information **into** a function using a **parameter**
- The difference between a **parameter** (the name in the `def`) and an **argument** (the value you pass)
- How to give a function **two or more** parameters — and why the **order matters**
- How to call the same function with **different arguments**, even inside a loop
- How parameters will power the **scenes** in your Text Adventure project

---

## 🤖 BrightByte Kicks Off Week 2!

> *"Last week you built your first functions — brilliant! But did you notice something? Your `greet()` said the exact same thing EVERY single time. A bit like a robot stuck on repeat, right? This week we fix that. We're going to teach your functions to LISTEN — to take in whatever you hand them and do their job on THAT. It's the difference between a doorbell that plays one note... and a piano. Let's learn to pass things IN!"*
> — BrightByte 🤖📥

---

## 🔁 Part 1: The Problem — A Function Stuck on Repeat

Remember last week? You wrote functions with `def` that took **no** information in. Here's a greeter:

```python
def greet():
    print("Hello, friend!")

greet()
greet()
```

**Output:**
```
Hello, friend!
Hello, friend!
```

It works... but it's **stuck**. No matter who we're greeting — Ama, Kofi, Zara — it always says `"Hello, friend!"`. To greet three different people, we'd have to write three different functions. That's silly!

What we really want is **one** greeter that can say hello to **anyone we choose**. To do that, we need a way to hand the function some information when we call it. That "handing something in" is called a **parameter**. 📥

---

## 📥 Part 2: One Parameter — Passing a Value In

Watch what happens when we add a word inside the brackets of the `def`:

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Ama")
greet("Kofi")
```

**Output:**
```
Hello, Ama!
Hello, Kofi!
```

🎉 **One function. Two different greetings!** Here's what changed:

- `def greet(name):` — the word `name` inside the brackets is a **parameter**. It's an empty box waiting to be filled.
- `greet("Ama")` — the value `"Ama"` gets poured into that box. Now inside the function, `name` **is** `"Ama"`.
- `greet("Kofi")` — this time the box gets filled with `"Kofi"` instead.

Think of the parameter as a **labelled slot**. Every time you call the function, whatever you put in the brackets slides into that slot and the function uses it.

> 💡 Notice we used an **f-string** (`f"Hello, {name}!"`) to drop the parameter's value straight into the sentence — exactly the trick you learned in Term 1.

---

## 🏷️ Part 3: Two New Words — Parameter vs Argument

Programmers use two words that sound similar but mean different things. Let's make them crystal clear:

| Word | What it means | In our code |
|---|---|---|
| **Parameter** | The name in the `def` — the empty slot | `name` in `def greet(name):` |
| **Argument** | The actual value you pass when calling | `"Ama"` in `greet("Ama")` |

An easy way to remember it:

> **P**arameter = the name in the **P**arentheses of the def (the *plan*).
> **A**rgument = the **A**ctual value you hand over when you call.

You don't need to be perfect with these words today — even professional coders sometimes mix them up! But knowing the difference makes it much easier to read error messages later.

### 💬 Class Discussion

> In `greet("Zara")`, which part is the **parameter** and which is the **argument**?
> Type your answer in the **Zoom chat**!

---

## 🔢 Part 4: Multiple Parameters — Order Matters!

A function can take **more than one** parameter. Just separate them with commas:

```python
def add_scores(a, b):
    print(a + b)

add_scores(10, 5)
```

**Output:**
```
15
```

Here `a` becomes `10` and `b` becomes `5`, so `a + b` is `15`. Easy!

Now here's the **most important rule** of the whole lesson: **the arguments fill the slots in ORDER.** The first argument goes into the first parameter, the second into the second, and so on. We call these **positional arguments** — their *position* decides where they land.

Let's see why order matters with a greeter that takes a name AND an age:

```python
def introduce(name, age):
    print(f"{name} is {age} years old.")

introduce("Ama", 12)
```

**Output:**
```
Ama is 12 years old.
```

Perfect. But watch what happens if we **swap the order** of the arguments:

```python
introduce(12, "Ama")
```

**Output:**
```
12 is Ama years old.
```

😵 Nonsense! Python didn't crash — it just did *exactly what we told it*. `12` went into the `name` slot and `"Ama"` went into the `age` slot. **The order of your arguments must match the order of your parameters.**

---

## 🔁 Part 5: Parameters + Loops = Superpowers

Here's where parameters get really powerful. Because we can call a function with a **different argument every time**, we can put it inside a **loop** and greet a whole class in three lines:

```python
def greet(name):
    print(f"Hello, {name}!")

names = ["Ama", "Kofi", "Zara"]
for person in names:
    greet(person)
```

**Output:**
```
Hello, Ama!
Hello, Kofi!
Hello, Zara!
```

Look at that! Each time round the loop, `person` holds a different name from the list, and we pass it straight into `greet` as the argument. **One function + one loop = greet a hundred people just as easily as three.** 🚀

> 🧠 This is the exact pattern real programs use: define a job once, then run it on lots of different data.

---

## 🧱 Part 6: A Practical Parameter — draw_box(width)

Parameters aren't just for text. Let's build something you can *see*. Here's a function that draws a box — and the box changes size depending on the number you pass in:

```python
def draw_box(width):
    print("+" + "-" * width + "+")
    print("|" + " " * width + "|")
    print("+" + "-" * width + "+")

draw_box(4)
```

**Output:**
```
+----+
|    |
+----+
```

Call it with a bigger number and the box grows:

```python
draw_box(8)
```

**Output:**
```
+--------+
|        |
+--------+
```

The `width` parameter controls how many `-` and how many spaces get printed (using the `* width` trick from Term 1). **Same function, different size — all thanks to one parameter.** 📦

---

## ⚠️ Common Mistakes (And the Real Errors!)

**Mistake 1: Forgetting to pass an argument**

❌ Wrong:
```python
def greet(name):
    print(f"Hello, {name}!")

greet()
```
```
TypeError: greet() missing 1 required positional argument: 'name'
```

✅ Correct — give it the argument it's asking for:
```python
greet("Ama")
```
```
Hello, Ama!
```

> Read the error out loud: *"missing 1 required positional argument: 'name'"*. Python is literally telling you the name of the empty slot it needs filled!

---

**Mistake 2: Getting the argument order wrong**

❌ Wrong (no crash — just wrong!):
```python
def introduce(name, age):
    print(f"{name} is {age} years old.")

introduce(12, "Ama")
```
```
12 is Ama years old.
```

✅ Correct — match the order in the `def`:
```python
introduce("Ama", 12)
```
```
Ama is 12 years old.
```

> This is the sneaky one — **no error appears**, so you only notice when the output looks silly. Always check: does my argument order match my parameter order?

---

**Mistake 3: Passing too many arguments**

❌ Wrong:
```python
def greet(name):
    print(f"Hello, {name}!")

greet("Ama", "Kofi")
```
```
TypeError: greet() takes 1 positional argument but 2 were given
```

✅ Correct — one slot means one argument:
```python
greet("Ama")
```
```
Hello, Ama!
```

> If you want to greet two people, call the function twice — or use a loop (Part 5)!

---

**Mistake 4: Forgetting the quotes on a text argument**

❌ Wrong:
```python
def greet(name):
    print(f"Hello, {name}!")

greet(Ama)
```
```
NameError: name 'Ama' is not defined
```

✅ Correct — text arguments need quotes:
```python
greet("Ama")
```
```
Hello, Ama!
```

> Without quotes, Python thinks `Ama` is a **variable** you forgot to create. Quotes tell it "this is text!"

---

## 🎮 Class Activity: The Personalised Greeter 📥

Time to build! Open **Trinket** and name your project `Y2-T3-W2-Parameters`. Three rounds — thumbs up in Zoom when each one runs. 👍

### Round 1 — Greet Anyone (⭐)

Fix the stuck greeter so it takes a `name` parameter, then call it with two different names:

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Ama")
greet("Kofi")
```

### Round 2 — Name + Age (⭐⭐)

Write `greet_person(name, age)` with **two** parameters and call it for three different people:

```python
def greet_person(name, age):
    print(f"Hi {name}! You are {age} years old. 🎉")

greet_person("Zara", 12)
greet_person("Kofi", 13)
greet_person("Ama", 11)
```

**Output:**
```
Hi Zara! You are 12 years old. 🎉
Hi Kofi! You are 13 years old. 🎉
Hi Ama! You are 11 years old. 🎉
```

### Round 3 — Box Builder (⭐⭐⭐)

Write `draw_box(width)` and call it with `3`, then `8`. Watch the box grow!

### 💬 Zoom-Chat Checkpoint

Look at this — **don't run it yet, predict it:**

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Kofi")
```

**Type in the Zoom chat:** what does `greet("Kofi")` print?

<details>
<summary>🔎 Click to check your prediction</summary>

```
Hello, Kofi!
```
The argument `"Kofi"` slides into the `name` slot, and the f-string drops it into the sentence.

</details>

---

## 🗺️ Part 7: Why This Matters for Your Adventure

Remember — this whole term builds towards a **Text Adventure Engine**. Parameters are going to be everywhere in it!

Picture a scene in your adventure:

```python
def enter_room(player_name):
    print(f"{player_name}, you step into a dark cave... 🦇")

enter_room("Ama")
```

**Output:**
```
Ama, you step into a dark cave... 🦇
```

See it? The scene takes the **player's name** as a parameter, so every player sees their OWN name in the story. Later, scenes will take even more parameters — like what's in the player's inventory. **Everything you learned today is a building block for your game.** 🏗️

---

## 🌟 What's Coming Next Week?

This week your functions learned to take things **IN**. But so far they only *print* — they can't hand anything **back** to you. Try to imagine this:

```python
def double(number):
    number * 2   # ...but where does the answer GO?
```

Next week (**Week 3: Return Values**) we learn the magic word `return` — how a function can do a calculation and **give you the answer back** so you can save it, print it, or use it later. It's the piece that turns your functions into real problem-solvers. 🔙

---

## 🏆 Today's Achievements

- ✅ You learned why a no-parameter function is "stuck on repeat"
- ✅ You gave a function **one parameter** and called it with different arguments
- ✅ You learned the difference between a **parameter** and an **argument**
- ✅ You used **multiple parameters** — and saw why the order matters
- ✅ You put a function **inside a loop** to run it on lots of data
- ✅ You met the real errors: `missing 1 required positional argument` and `takes 1 positional argument but 2 were given`

> *"Do you feel that? Your functions just went from doing ONE thing to doing ANYTHING you pass them. That's a massive jump in power. Next week we teach them to talk BACK to you with `return` — and then, oh, then things get really fun."*
> — BrightByte 🤖⚡

---

## 📚 Homework: Custom Card Maker 💌

Write a **Custom Card Maker** in Trinket. Build ONE function that prints a personalised card, then call it several times with different arguments.

**Requirements:**
1. Write a function `make_card(name, message, emoji)` with **three parameters**
2. Inside it, print a nicely bordered card that uses all three parameters
3. Call your function at least **3 times** with different arguments
4. Every card should look different — because the arguments are different!

**Example run:**
```
*************************
  To: Ama
  Happy Birthday 🎂
*************************
*************************
  To: Kofi
  Well done 🌟
*************************
```

**Challenge tiers:**
- ⭐ A `make_card` function with 3 parameters, called 3 times
- ⭐⭐ Make the border and layout beautiful (borders that fit the message)
- ⭐⭐⭐ Add a `loop` that calls `make_card` for a list of names, all with the same message

**Trinket name:** `Y2-T3-W2-Parameters`

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.

---

*One function, endless possibilities — you just gave your code superpowers. See you next week for `return`! 📥🔧*
