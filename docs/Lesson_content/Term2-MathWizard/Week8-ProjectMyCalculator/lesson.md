---
title: "Project — My Calculator!"
description: "Build a 7-operation calculator using every Term 2 skill — name formatting, float input, all operators, f-strings, and planned test cases."
difficulty: "beginner"
order_index: 8
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # ==================================
  # MY CALCULATOR
  # Builder:
  # ==================================

  # Section 1: Welcome (name + .title())

  # Section 2: Collect two decimal-capable numbers (float)

  # Section 3: Calculate ALL 7 operations and SAVE each result

  # Section 4: Display labelled, tidy results (:.2f)

  # Section 5: Close with name
class_activities: |
  ## 🧮 Class Activity: Calculator Build Day

  ### Part A — Live Demo with Teacher (10 min)
  Watch your teacher build the full calculator live using the 5-section plan:
  1. Welcome (name + `.title()`)
  2. Collect (`float(input(...))`)
  3. Calculate all 7 operations (L2 + L3 operators)
  4. Display with f-strings and `:.2f`
  5. Close with name

  Pay attention to *why* each section exists and *which lesson* each skill came from.

  ### Part B — Write Your Tests First (5 min)
  Before coding, complete the test table in the lesson with your own expected values for rows 1 and 2. Calculate by hand. This is your Lesson 7 Bug Clinic habit.

  ### Part C — Build Independently (30 min)
  Your teacher wipes the screen. Build all 5 sections from scratch. Run after each section — don't write everything and then run.

  Stay in scope: no `if/else`, no loops, no menus yet.

  ### Part D — Peer Swap (8 min)
  Exchange calculators. Partner enters their name + new numbers, checks one result by hand, gives one strength and one improvement. Builder makes at least one fix.

  ### Part E — Mini Showcases + Exit Ticket (7 min)
  2–3 students demo live. Everyone writes their exit ticket before leaving.
take_home_assignment: |
  ## Homework: Showcase-Ready Calculator

  Polish your calculator for the Lesson 9 showcase.

  Required evidence:

  1. a personalised welcome using the user's name with `.title()`;
  2. two numeric inputs converted with `float()`;
  3. saved results for all 7 operations: `+`, `-`, `*`, `/`, `**`, `//`, `%`;
  4. labelled output with `:.2f` formatting on every result;
  5. comments marking each section;
  6. a completed test table (3 rows, written before running);
  7. one improvement based on peer feedback; and
  8. a documented limitation: the second number must not be zero — conditional handling begins in Term 3.

  Prepare a 60-second showcase demonstration. Be ready to explain what `float()` does, what one Lesson 3 operator means in real life, and one thing you'd improve with `if/else`.
ai_activities: |
  ## AI Lab: Exact Rules and Predictions Are Different

  A calculator follows exact written rules. The same valid input produces the same correct result every time. AI systems often make predictions based on patterns, and those predictions can be wrong.

  Think about your calculator: if you enter 10 and 2, you always get 12.00 for addition. No surprises. Now imagine an AI that tries to *predict* what answer a student wants — it might get it wrong.

  Discuss: what would have to change about your calculator to make it behave more like an AI? What would it gain? What would it lose?
---

# Term 2, Lesson 8: Project — My Calculator! 🧮

**Course:** Term 2: Math Wizard  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 8 of 9

---

## 🎯 What You're Doing Today

Today is your **project build day**. You've spent seven lessons learning every tool you need. Now you combine them all into one real, working calculator.

Your calculator will:
- greet the user by name
- work with decimal numbers
- calculate **7 operations** using everything you've learned
- display clean, formatted results
- pass 3 planned test cases

Your teacher will build it live first. Then it's your turn.

---

## 🤖 BrightByte Says...

> *"Look at everything you've learned this term — operators, exponents, modulo, float(), round(), f-strings, string methods, test cases. You didn't learn those separately. You learned them so that TODAY you could put them all together. This is your moment. Let's build something real. 🧮"*

---

## 🧱 The Build Plan

Your calculator has 5 sections. Build them in order, running after each one.

---

### Section 1 — Welcome Your User 👋

Ask for the user's name and greet them. Use `.title()` so the name is always capitalized correctly.

```python
name = input("What is your name? ").title()
print("=" * 30)
print(f"  Welcome, {name}!")
print(f"  The Python Calculator")
print("=" * 30)
```

**Run it.** Type your name in lowercase — does `.title()` fix it?

---

### Section 2 — Collect the Numbers 🔢

Ask for two numbers. Use `float()` so decimals work.

```python
first = float(input("\nEnter first number: "))
second = float(input("Enter second number (not zero): "))
```

**Why `float()` and not `int()`?** Because a calculator should work with `2.5`, not just whole numbers.

---

### Section 3 — Calculate ALL 7 Operations ➗

You know all of these. Save every result in its own variable.

```python
# The four basics (Lesson 2)
add_result    = first + second
sub_result    = first - second
mul_result    = first * second
div_result    = first / second

# The extras (Lesson 3)
power_result  = first ** second
floor_result  = first // second
mod_result    = first % second
```

**Why save to variables?** So you can display, check, and reuse the results. Never calculate inside `print()` alone.

---

### Section 4 — Display the Results 📺

Use f-strings with `:.2f` for all decimal results.

```python
print("\n" + "-" * 30)
print(f"  Results for {name}")
print("-" * 30)
print(f"  {first} + {second}  = {add_result:.2f}")
print(f"  {first} - {second}  = {sub_result:.2f}")
print(f"  {first} x {second}  = {mul_result:.2f}")
print(f"  {first} / {second}  = {div_result:.2f}")
print(f"  {first} ** {second} = {power_result:.2f}")
print(f"  {first} // {second} = {floor_result:.2f}  (complete groups)")
print(f"  {first} % {second}  = {mod_result:.2f}  (remainder)")
print("-" * 30)
```

---

### Section 5 — Close Cleanly 🎬

```python
print(f"\nThanks for calculating, {name}! 🧮")
```

---

## 🧪 Write Your Tests BEFORE You Run

This is the Lesson 7 Bug Clinic habit. Calculate the expected answers by hand first, then check them against your program.

| First | Second | Add | Subtract | Multiply | Divide | Power | Floor | Mod |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 10 | 2 | 12 | 8 | 20 | 5 | 100 | 5 | 0 |
| 7 | 3 | 10 | 4 | 21 | 2.33 | 343 | 2 | 1 |
| 2.5 | 2 | 4.5 | 0.5 | 5 | 1.25 | 6.25 | 1 | 0.5 |

If any result doesn't match — go back to Section 3 and check that formula.

---

## 🐛 Common Bugs

| What went wrong | Why | Fix |
|---|---|---|
| Name shows all lowercase | Missing `.title()` | Add `.title()` after the input |
| `"5" + "3"` gives `"53"` | Forgot `float()` | Wrap `input()` with `float()` |
| `NameError` | Typo in variable name | Check spelling matches exactly |
| Division by zero crash | Used 0 as second number | Document this as a known limitation |
| Long decimals (e.g. `4.000000`) | Missing `:.2f` | Add `:.2f` inside the f-string |
| `^` gives wrong answer | `^` is not a power in Python | Use `**` for exponents |

---

## 👥 Peer Swap

Once all 3 tests pass, swap with a classmate. They:
1. Enter their own name and a new pair of numbers
2. Check ONE result by hand
3. Give you **one thing they liked** and **one thing to improve**

Make at least one improvement, then run your tests again.

---

## 🎤 Mini Showcase

If your teacher calls on you, 60 seconds:
1. Run one test live
2. Explain what `float()` does and why you used it
3. Show one operation from Lesson 3 (`**`, `//`, or `%`) and explain what it means
4. State your known limitation (division by zero — coming in Term 3)

---

## 📝 Exit Ticket

Finish both sentences:
- *"My calculator uses skills from Lesson ___ when it..."*
- *"One thing I would improve with if/else (Term 3) is..."*

---

## 📚 Next Lesson

Lesson 9 is the **showcase and badge ceremony**. Polish your calculator at home — clean it up, make sure all 3 tests pass, and prepare your 60-second explanation.

---

*KidsLearnAI — Empowering the Next Generation with AI Education*  
*www.kidslearnai.ca*
