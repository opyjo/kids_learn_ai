---
title: "Welcome Back — Term 1 Recap!"
description: "Warm up for Term 2 by reviewing everything you learned in Term 1 — print(), variables, strings, string methods, f-strings, and input()"
difficulty: "beginner"
order_index: 1
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # 🎮 Welcome Back! Let's warm up our Python skills.
  # Fill in the blanks with your own answers, then click Run!

  # A variable stores information (Term 1!)
  name = "YOUR NAME"
  favourite_thing = "YOUR FAVOURITE THING"
  weeks_of_python = 9

  # An f-string drops variables right into your text (Term 1!)
  print(f"Hi, I'm {name} and I love {favourite_thing}!")
  print(f"I already survived {weeks_of_python} weeks of Python. 💪")

  # A string method gives your text a superpower (Term 1!)
  print(f"Shouting my name: {name.upper()}")

  # Now change the values above and Run again!
class_activities: |
  ## 🎮 Activity: Skill Missions — Solo Edition!

  Prove YOUR brain remembers Term 1! Work through these missions on your own, in YOUR own Trinket. Go at your own pace!

  **Mission 1:** Print a welcome-back message with `print()`

  **Mission 2:** Create a variable with your name in it and print it

  **Mission 3:** Join two strings together with `+` (like your first name and last name)

  **Mission 4:** Make a pattern with `*` (like `"⭐" * 10`)

  **Mission 5:** Use a string method on your name — `.upper()`, `.lower()`, or `.title()`

  **Mission 6:** Write an f-string that uses one of your variables inside `{ }`

  When you finish all 6 missions, raise your hand or post "Missions Complete! 🚀" in the Zoom chat so your teacher can check your work.

  **Bonus Mission:** Combine ALL 6 skills into one mini-program that introduces you!
take_home_assignment: |
  ## 📚 Homework: My Term 1 Skills Showcase

  Write ONE program that shows off everything you remember from Term 1!

  **Requirements:**
  1. At least **3 variables** (mix of text and numbers)
  2. At least **1 f-string** with a variable inside `{ }`
  3. At least **1 string method** (`.upper()`, `.lower()`, `.title()`, etc.)
  4. At least **1 pattern** made with `*` (a border or row of emojis)
  5. At least **2 comments** using `#` to explain your code
  6. Code must run without errors

  **Bonus:** Use `input()` to ask the user a question and greet them by name!

  **Submit:** Save your Trinket, click **Share**, and send the link to your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Everything you reviewed today — storing information in variables, formatting text with f-strings, and reading input from a user — is exactly what a chatbot like BrightByte does every second! When an AI reads your message and writes a reply, it's juggling variables and strings, just like you.

  This term you'll add **math** to your toolkit — and math is what lets AI count, measure, and make decisions. You're building the real thing!
---

# Term 2, Lesson 1: Welcome Back — Term 1 Recap! 🔁

**Course:** Term 2: Math Wizard  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 1 of 9

---

## 🎯 What You'll Do Today

Welcome back, coder! Before we unlock Python's math superpowers, let's dust off everything you learned in Term 1. By the end of today you will have:

- Refreshed the `print()` command and text patterns
- Remembered how **variables** store information
- Reviewed **strings vs numbers**
- Practised **string methods**, `len()`, and `str()`
- Rewritten messy code with **f-strings**
- Warmed up `input()` for asking questions
- Gotten ready for **Term 2: Math Wizard!**

---

## 🤖 Welcome Back from BrightByte!

> _"HELLO AGAIN, PROGRAMMER! 🤖💙 I missed you! Can you believe it — you already finished a WHOLE term of Python. You wrote programs, built a game, and squashed real bugs. Today we're not learning anything brand-new. Instead, we're going to wake up your Python brain and remember all the amazing things you already know. Think of it as stretching before a race. Ready? Let's warm up!"_

### How This Lesson Works

This is a **review lesson**. We'll move quickly through each Term 1 skill with a tiny example and a "Your Turn" challenge. Don't just read — type every example into Trinket and run it. Your fingers remember more than your eyes!

> 💡 **Zoom Tip:** Keep Zoom and Trinket side by side, just like last term.

---

## 📣 Skill 1: `print()` and Patterns

`print()` is how Python talks. Remember the megaphone? 📣

```python
print("I'm back and ready to code!")
print("⭐" * 15)
print("=" * 25)
```

- `"⭐" * 15` **repeats** a string 15 times (great for borders and rows!)
- `"a" + "b"` **joins** two strings together

**Your Turn:** Print your name inside a border made of `-` characters.

---

## 📦 Skill 2: Variables Are Boxes

A **variable** is a labeled box that stores a value so you can use it again.

```python
player = "Ama"
score = 100
print(player)
print(score)
```

Remember the rules:

- `=` means **"store this value"**, NOT "equals" like in maths
- Use **snake_case** for names: `high_score`, not `HighScore` or `high score`
- You can **change** a variable any time: `score = score + 50`

**Your Turn:** Make a variable called `favourite_food` and print it.

---

## 🔤 Skill 3: Strings vs Numbers

This one matters a LOT this term! Python treats **text** and **numbers** differently.

| Value  | What it is | Example        |
| ------ | ---------- | -------------- |
| `"10"` | a string (text, has quotes) | `age = "10"` |
| `10`   | an integer (a number, no quotes) | `age = 10` |

```python
print("10" + "5")   # Joins text → 105
print(10 + 5)       # Adds numbers → 15
```

😲 See the difference? Quotes turn a number into text. Keep this in your back pocket — in a few weeks it will be the key to making calculators work!

**Your Turn:** Predict the output of `print("2" + "2")` before you run it. Were you right?

---

## ✨ Skill 4: String Methods, `len()`, and `str()`

Strings have built-in **superpowers** you call with a dot:

```python
name = "brightbyte"
print(name.upper())        # BRIGHTBYTE
print(name.title())        # Brightbyte
print(len(name))           # 10  (counts the letters)
```

And when you want to glue a **number** onto text with `+`, wrap it in `str()`:

```python
age = 11
print("I am " + str(age) + " years old")
```

**Your Turn:** Print your name in ALL CAPS, then print how many letters it has.

---

## 🧹 Skill 5: Comments and F-Strings (Clean Code!)

**Comments** start with `#`. Python ignores them — they're notes for humans:

```python
# This line greets the player
print("Welcome!")
```

**F-strings** are the cleanest way to mix text and variables. Put an `f` before the quotes and drop variables inside `{ }`:

```python
name = "Kwame"
age = 11
print(f"Hi {name}, you are {age} years old!")
```

Compare that to the old `+` way:

```python
print("Hi " + name + ", you are " + str(age) + " years old!")
```

Same result — but the f-string is shorter and easier to read. You can even do work inside the braces:

```python
print(f"Your name in caps is {name.upper()} ({len(name)} letters)")
```

> _BrightByte says: "F-strings are my favourite! Whenever you're combining words and variables, reach for an f-string first."_

**Your Turn:** Write an f-string that says `"[your name] is learning Python!"` using a variable.

---

## 💬 Skill 6: `input()` — Asking Questions

Near the end of Term 1 you learned how to make programs **interactive** with `input()`. It pauses the program and waits for the user to type:

```python
favourite = input("What's your favourite animal? ")
print(f"Cool! I like {favourite} too. 🐾")
```

⚠️ **Remember:** `input()` always gives you back **text (a string)** — even if the user types a number. That will matter a LOT this term when we start doing math with what people type!

**Your Turn:** Ask the user for their name, then greet them with an f-string.

---

## 🎯 Warm-Up Challenges

Try these to prove your Python brain is fully awake!

### Challenge 1: About Me 2.0

```python
name = "Your Name"
age = 11
hobby = "coding"

print("=" * 30)
print(f"  All About {name.upper()}")
print("=" * 30)
print(f"Age: {age}")
print(f"Hobby: {hobby.title()}")
print("⭐" * 30)
```

### Challenge 2: The Greeter

```python
# Ask two questions and reply nicely
first = input("What's your first name? ")
mood = input("How are you feeling today? ")

print(f"Nice to meet you, {first.title()}!")
print(f"I hope your {mood} day gets even better. 😊")
```

### Challenge 3: Fix the Bug 🐛

This code has a mistake. Can you spot and fix it?

```python
age = 12
print("Next year you will be " + age + 1)
```

<details>
<summary>Need a hint?</summary>

You can't add a number onto text with `+`. Either use `str()` around the number, or (better!) use an f-string:
`print(f"Next year you will be {age + 1}")`

</details>

---

## 📝 Key Points to Remember

### Your Term 1 Toolbox

| Skill            | Example                              |
| ---------------- | ------------------------------------ |
| Print            | `print("Hi!")`                       |
| Pattern          | `"⭐" * 10`                           |
| Join text        | `"a" + "b"`                          |
| Variable         | `score = 100`                        |
| String method    | `name.upper()`, `name.title()`       |
| Count characters | `len(name)`                          |
| Number → text    | `str(age)`                           |
| Comment          | `# a note for humans`                |
| F-string         | `f"Hi {name}!"`                      |
| Ask a question   | `input("Your name? ")`               |

### Vocabulary Refresher

| Word          | Meaning                                          |
| ------------- | ------------------------------------------------ |
| **Variable**  | A labeled box that stores a value                |
| **String**    | Text, written inside quotes                      |
| **Integer**   | A whole number, no quotes                        |
| **Method**    | A built-in action you call with a dot, like `.upper()` |
| **F-string**  | Text starting with `f` that holds variables in `{ }` |

---

## 🌟 Next Lesson Preview

**Week 2: Python Does Math!**

Now that your Python brain is warmed up, next week we unlock Python's **secret superpower** — it's an incredible calculator!

**Sneak peek:**

```python
print(5 + 3)      # 8
print(6 * 7)      # 42
print(100 / 4)    # 25.0
```

You'll turn Python into a super-calculator and start building toward your very own calculator app. Get ready, Math Wizard! 🧙‍♂️

---

## 🎉 Great Warm-Up, Coder!

Look how much you remembered:

- ✅ `print()` and patterns with `*` and `+`
- ✅ Variables and snake_case naming
- ✅ Strings vs integers
- ✅ String methods, `len()`, and `str()`
- ✅ Comments and f-strings
- ✅ `input()` for interactive programs

> _BrightByte says: "See? It's all still in there! Your Term 1 skills are the foundation for EVERYTHING we build in Term 2. Now that we're warmed up, let's go discover Python's math superpowers. I'll see you next week, Math Wizard! 🚀"_

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Welcome back — this term is going to be amazing! 🐍✨_
