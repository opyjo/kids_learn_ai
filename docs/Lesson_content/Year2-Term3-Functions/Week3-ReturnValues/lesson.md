---
title: "Return Values: Getting Answers Back 📤✅"
description: "Learn the difference between print and return — how to hand a value back to your program, store it in a variable, and use it in maths, f-strings, and decisions"
difficulty: "intermediate"
order_index: 3
course_slug: "year2-term-3-functions"
is_premium: false
requires_trinket: true
starter_code: |
  # 📤 Return Values Warm-Up!
  # Last week your functions had parameters. This week they hand answers BACK.

  # This function SHOWS a number on the screen...
  def show_double(n):
      print(n * 2)

  # ...but this one HANDS the number back to us!
  def double(n):
      return n * 2

  # Try both and spot the difference:
  show_double(5)          # prints 10
  answer = double(5)      # answer is now 10 — we can use it!

  print("The answer is", answer)
  print("And answer + 1 is", answer + 1)

  # Your turn below 👇
  # Write a function called area(w, h) that RETURNS w * h
solution_code: |
  # 📤 Return Values — one possible solution

  def double(n):
      return n * 2

  def area(w, h):
      return w * h

  def is_even(n):
      return n % 2 == 0

  # Store returned values in variables
  answer = double(5)
  room = area(4, 3)

  print("Double 5 is", answer)          # 10
  print("The area is", room, "square metres")   # 12

  # Use a returned value in an f-string
  print(f"Ten doubled is {double(10)}.")   # 20

  # Use a returned value in an if
  if is_even(7):
      print("7 is even")
  else:
      print("7 is odd")                    # this line runs

  # Chain one return into another calculation
  total = double(3) + double(4)            # 6 + 8
  print("Chained total:", total)           # 14
class_activities: |
  ## 🎮 Class Activity: The Answer Machine 🤖📤

  Today you build functions that **give answers back**, then USE those answers. Run each in Trinket and give a **thumbs up** in Zoom when it works!

  ### Round 1 — area() (⭐)
  Write a function `area(w, h)` that **returns** `w * h`. Then store the result and print it:
  ```python
  size = area(5, 3)
  print("The area is", size)
  ```

  ### Round 2 — is_even() (⭐⭐)
  Write a function `is_even(n)` that **returns** `True` or `False` (hint: `n % 2 == 0`). Then use it inside an `if`:
  ```python
  if is_even(10):
      print("Even!")
  ```

  ### Round 3 — Combine the Answers (⭐⭐⭐)
  Write `add(a, b)` that returns `a + b`. Then combine TWO returns into one total:
  ```python
  total = add(2, 3) + add(4, 1)
  print("Grand total:", total)
  ```

  ### 💬 Zoom Chat Challenge
  In the Zoom chat, finish this sentence in your own words:
  **"`print` is different from `return` because..."**
take_home_assignment: |
  ## 📚 Homework: Calculator Functions

  Build a **Calculator Functions** program in Trinket. This time every calculation lives in a function that **returns** its answer — then your program combines the returned answers.

  **Requirements:**
  1. Write at least **3 functions that RETURN** a result (e.g. `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`)
  2. Store each returned value in a **variable**
  3. **Combine** at least two returned values into a new result (e.g. `total = add(a, b)` then use `total` again)
  4. Print your results clearly using an **f-string**

  **Example run:**
  ```
  add(10, 5) returned 15
  multiply(15, 2) returned 30
  Final answer: 30
  ```

  **Challenge tiers:**
  - ⭐ 3 functions that return, results stored and printed
  - ⭐⭐ Feed one function's return straight into another (e.g. `multiply(add(10, 5), 2)`)
  - ⭐⭐⭐ Add an `average(a, b, c)` function that returns the mean, and a function that returns `True`/`False` for "is the total over 100?"

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Think: An AI Model Is a Giant Function

  You now know a function takes an input and **returns** an answer:

  ```python
  def double(n):
      return n * 2
  ```

  An AI model works the same way — just MUCH bigger. You hand it an input (a question, a photo), and it **returns** a prediction (an answer, "this is a cat", a translation).

  **Discuss in the Zoom chat:** if a spam filter is a function, what goes IN, and what does it RETURN? (Hint: in = an email; out = ...?)

  We won't build one yet — but keep this idea in your pocket. In Term 5 you'll open the box and see how that "giant function" actually decides what to return.
---

# Year 2, Lesson 3: Return Values — Getting Answers Back 📤✅

**Course:** Functions
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

- The BIG difference between `print` (SHOWS a value to the human) and `return` (HANDS a value back to the program)
- How to catch a returned value in a variable and actually use it
- Using returned values in maths, f-strings, and `if` decisions
- Why a function with no `return` gives back `None`
- That `return` **ends the function immediately** — code after it never runs
- How `return` will connect the scenes in our Text Adventure Engine

---

## 🤖 BrightByte's Big Idea

> *"Last week your functions could take ingredients IN — that's parameters. But so far they've only ever SHOWN you things with `print`. Today everything changes. Today your functions start handing answers BACK — real values you can catch, store, and build with. This is the single most important idea in all of programming. Once you get `return`, you can build ANYTHING. Ready? 📤"*
> — BrightByte 🤖📤

---

## 📺 Part 1: `print` Shows, `return` Hands Back

Here's the whole lesson in two functions. Read them slowly:

```python
def show_double(n):
    print(n * 2)     # SHOWS the answer on the screen

def double(n):
    return n * 2     # HANDS the answer back to the program
```

They look almost identical. But watch what happens when we try to *use* the answer:

```python
show_double(5)          # the screen shows: 10
answer = double(5)      # nothing shows... but answer is now 10!

print(answer + 1)       # 11  — we did MATHS with the answer!
```

**Output:**
```
10
11
```

Notice: `show_double(5)` put `10` on the screen but then it was **gone** — you can't do anything with it. `double(5)` didn't show anything on its own, but it **handed 10 back**, so we stored it in `answer` and did maths.

> **The one-line summary:** `print` is for the **human's eyes**. `return` is for the **program to keep using**.

---

## 🔁 Part 2: Where Does the Returned Value Go?

When a function `return`s a value, imagine it **replacing the function call with the answer**. So this:

```python
answer = double(5)
```

...happens in two steps in Python's head:

1. `double(5)` runs and returns `10`
2. So the line becomes `answer = 10`

You've seen this before without realising it! `len("cat")` returns `3`. `int("12")` returns `12`. Those built-in functions all RETURN values — now you can build your own.

Here are the four things you can do with a returned value:

| What you do | Example | Result |
|---|---|---|
| Store it in a variable | `answer = double(5)` | `answer` is `10` |
| Use it in an f-string | `print(f"Result: {double(5)}")` | `Result: 10` |
| Use it in an `if` | `if double(5) > 8:` | condition is `True` |
| Chain it into more maths | `double(5) + double(3)` | `10 + 6` = `16` |

Let's see the f-string and the `if` in action:

```python
def double(n):
    return n * 2

print(f"Double 5 is {double(5)}.")     # Double 5 is 10.

if double(5) > 8:
    print("That's a big number!")      # this runs, because 10 > 8
```

**Output:**
```
Double 5 is 10.
That's a big number!
```

---

## ✅ Part 3: Returning True or False

A function doesn't have to return a number. It can return **anything** — including `True` or `False`. This is incredibly useful for questions:

```python
def is_even(n):
    return n % 2 == 0     # % gives the remainder; == 0 is True or False
```

Remember `%` (the remainder operator)? `10 % 2` is `0`, so `10 % 2 == 0` is `True`. `7 % 2` is `1`, so `7 % 2 == 0` is `False`.

```python
print(is_even(10))     # True
print(is_even(7))      # False

if is_even(4):
    print("4 is even")           # this runs
else:
    print("4 is odd")
```

**Output:**
```
True
False
4 is even
```

> **Naming tip:** functions that return `True`/`False` usually start with `is_`, `has_`, or `can_` — like `is_even`, `has_won`, `can_afford`. It makes your `if` statements read like plain English: `if is_even(n):`.

---

## 🕳️ Part 4: The `None` Surprise

What does a function give back if it has **no** `return`? Let's find out with a function you use every single day — `print` itself!

```python
x = print("hi")
print(x)
```

**Output:**
```
hi
None
```

🤔 **Whoa — what's `None`?** `None` is Python's word for "nothing / no value". The first line ran `print("hi")` (which shows `hi`), but `print` doesn't RETURN anything — so `x` got `None`.

The same thing happens with your OWN functions if you forget to return:

```python
def double(n):
    print(n * 2)       # oops — we printed instead of returning!

answer = double(5)     # shows 10 on the screen...
print(answer)          # ...but answer is None!
```

**Output:**
```
10
None
```

See the trap? It *looked* like it worked (10 appeared!), but `answer` is `None`, so any maths on it later would crash. **A function that prints is not the same as a function that returns.**

---

## 🛑 Part 5: `return` Ends the Function Immediately

The moment Python hits a `return`, the function **stops right there** and hands the value back. Any code after it never runs:

```python
def grade(score):
    if score >= 50:
        return "Pass"      # if we get here, we leave IMMEDIATELY
    return "Fail"          # only reached if score < 50

print(grade(80))     # Pass
print(grade(30))     # Fail
```

**Output:**
```
Pass
Fail
```

For `grade(80)`: `score >= 50` is `True`, so `return "Pass"` runs and the function **exits**. The `return "Fail"` line is never reached. That's not a bug — it's exactly how we want it!

But watch this classic mistake:

```python
def double(n):
    return n * 2
    print("Done!")      # ❌ this NEVER runs — return already left

print(double(5))        # 10  (no "Done!" anywhere)
```

**Output:**
```
10
```

The `print("Done!")` is **dead code** — Python left the function the instant it hit `return`.

---

## ⚠️ Common Mistakes (and What Really Happens)

**Mistake 1: Printing when you meant to return**

❌ Wrong — looks fine, but the answer is lost:
```python
def add(a, b):
    print(a + b)

total = add(3, 4)      # shows 7...
print(total * 2)       # 💥 TypeError: total is None!
```
```
7
TypeError: unsupported operand type(s) for *: 'NoneType' and 'int'
```

✅ Correct — return so you can keep using it:
```python
def add(a, b):
    return a + b

total = add(3, 4)      # total is 7
print(total * 2)       # 14
```
```
14
```

---

**Mistake 2: Forgetting `return` entirely**

❌ Wrong:
```python
def area(w, h):
    w * h              # calculates... then throws the answer away!

print(area(4, 3))
```
```
None
```

The maths happened, but nobody kept the result. With no `return`, the function hands back `None`.

✅ Correct:
```python
def area(w, h):
    return w * h

print(area(4, 3))
```
```
12
```

---

**Mistake 3: Code after `return`**

❌ Wrong:
```python
def greet(name):
    return "Hi " + name
    print("This never prints!")   # dead code
```

✅ Correct — put the work BEFORE the return:
```python
def greet(name):
    message = "Hi " + name
    print("About to return the greeting")   # this DOES run
    return message
```

> **Golden rule:** `return` is the exit door. Everything you want the function to do must happen **before** it walks out.

---

## 🎮 Class Activity: The Answer Machine 🤖

Time to build functions that hand answers back — and then USE those answers. Run each in Trinket; **thumbs up** in Zoom when it works!

### Round 1 — area() (⭐)

Write a function that returns the area of a rectangle, then store and print it:

```python
def area(w, h):
    return w * h

size = area(5, 3)
print("The area is", size)     # The area is 15
```

### Round 2 — is_even() (⭐⭐)

Write a function that returns `True` or `False`, then use it in an `if`:

```python
def is_even(n):
    return n % 2 == 0

if is_even(10):
    print("10 is even!")       # this runs
```

### Round 3 — Combine the Answers (⭐⭐⭐)

Write `add(a, b)`, then combine two returns into one total:

```python
def add(a, b):
    return a + b

total = add(2, 3) + add(4, 1)
print("Grand total:", total)   # Grand total: 10
```

### 💬 Zoom Chat Challenge

Finish this sentence in the **Zoom chat**, in your own words:
> **"`print` is different from `return` because..."**

Read a few aloud together — there are lots of good ways to say it!

---

## 🗺️ Part 6: Why This Matters for Your Adventure

Remember the term project — the **Text Adventure Engine**? Here's the secret: **every scene is a function that RETURNS the name of the next scene to visit.**

```python
def cave_entrance():
    print("You stand at a dark cave. Go 'left' or 'right'?")
    choice = input("> ")
    if choice == "left":
        return "treasure_room"     # tells the engine where to go next
    else:
        return "dragon_den"

next_scene = cave_entrance()
print("Next stop:", next_scene)
```

**Example run:**
```
You stand at a dark cave. Go 'left' or 'right'?
> left
Next stop: treasure_room
```

Without `return`, scenes couldn't tell the game where to go. **`return` is the glue that connects your whole adventure.** Every skill this term is building towards it.

---

## 🌟 What's Coming Next Week?

**Week 4: Scope & Function Design.** You'll discover a puzzle: a variable made INSIDE a function is invisible OUTSIDE it — that's called **scope**. Try this and be confused (on purpose!):

```python
def secret():
    treasure = 100      # made INSIDE the function

secret()
print(treasure)         # 💥 NameError — treasure doesn't exist out here!
```

Next week we solve exactly why that happens — and you'll learn how to design clean, tidy functions that hand back everything they need to. It's the difference between messy code and code that feels like magic. ✨

---

## 🏆 Today's Achievements

- ✅ You know `print` SHOWS a value; `return` HANDS it back
- ✅ You caught returned values in variables and used them in maths, f-strings, and `if`s
- ✅ You discovered that a function with no `return` gives back `None`
- ✅ You learned that `return` ends a function immediately
- ✅ You saw how `return` will connect the scenes of your adventure

> *"Do you feel that? That's your programs getting POWERFUL. A function that returns is a function you can build on top of — stack them, chain them, combine them. This is how real software is made. You're not learning Python anymore... you're thinking like a programmer."*
> — BrightByte 🤖✨

---

## 📚 Homework: Calculator Functions

Build a **Calculator Functions** program in Trinket. Every calculation lives in a function that **returns** its answer — then your program combines the returned answers.

**Requirements:**
1. Write at least **3 functions that RETURN** a result (e.g. `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`)
2. Store each returned value in a **variable**
3. **Combine** at least two returned values into a new result (e.g. `total = add(a, b)` then use `total` again)
4. Print your results clearly using an **f-string**

**Example run:**
```
add(10, 5) returned 15
multiply(15, 2) returned 30
Final answer: 30
```

**Challenge tiers:**
- ⭐ 3 functions that return, results stored and printed
- ⭐⭐ Feed one function's return straight into another (e.g. `multiply(add(10, 5), 2)`)
- ⭐⭐⭐ Add an `average(a, b, c)` function that returns the mean, and a function that returns `True`/`False` for "is the total over 100?"

**Submit:** Save your Trinket (`Y2-T3-W3-ReturnValues`), click **Share**, copy the link, and paste it wherever your teacher asks.

---

*You can hand answers back now. That changes everything. See you next week, programmer! 📤✅*
