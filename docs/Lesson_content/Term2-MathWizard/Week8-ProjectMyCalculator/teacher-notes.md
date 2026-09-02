# Term 2, Lesson 8: Project — My Calculator! 🧮
## Teacher's Guide

**Duration:** 60 minutes | **Week:** 8 of 9

---

## Purpose

This lesson ties together every skill from Term 2. The calculator is intentionally richer than before — it uses name formatting (L1), all 7 operators (L2-L3), float input (L5), f-string formatting (L5), and planned test cases (L7). Students who only draw on Lessons 4-5 will produce a thin calculator. Students who draw on the whole term will produce something they're genuinely proud of.

---

## Skills Map — What Each Section Reinforces

| Section | Lesson it draws from |
|---|---|
| Name + `.title()` | Lesson 1 (string methods) |
| `float(input(...))` | Lesson 5 (decimal input) |
| `+`, `-`, `*`, `/` | Lesson 2 (four operations) |
| `**`, `//`, `%` | Lesson 3 (bigger math) |
| `:.2f` formatting | Lesson 5 (clean answers) |
| Header/separator lines | Lesson 5 (receipt structure) |
| Test table written first | Lesson 7 (bug clinic) |

---

## Lesson Flow

| Time | Activity |
|---|---|
| 0–10 min | Live demo — you build all 5 sections on screen |
| 10–15 min | Students write their test table BEFORE coding |
| 15–45 min | Students build independently |
| 45–53 min | Peer swap |
| 53–60 min | 2–3 mini showcases + exit ticket |

---

## Part 1: Your Live Demo (10 min)

Open a blank Trinket. Build this live, from scratch, in 5 sections. Talk out loud. Make small mistakes on purpose — students learn from watching you debug.

After each section, run it before moving on.

---

### Section 1 — Welcome

Say: *"First I'll greet the user. I'll ask their name and use .title() so it's always capitalized properly — even if they type in lowercase."*

```python
name = input("What is your name? ").title()
print("=" * 30)
print(f"  Welcome, {name}!")
print(f"  The Python Calculator")
print("=" * 30)
```

Run it. Type your name in lowercase. Point out `.title()` doing its job.

---

### Section 2 — Collect the Numbers

Say: *"I need two numbers. I'll use float() — not int() — because a calculator should handle decimals like 2.5."*

```python
first = float(input("\nEnter first number: "))
second = float(input("Enter second number (not zero): "))
```

Run it. Enter 10 and 2. Nothing prints yet — that's fine, the data is stored.

---

### Section 3 — Calculate All 7 Operations

Say: *"Now I'll use every operator we learned this term — the four basics from Lesson 2 and the three extras from Lesson 3."*

```python
# Lesson 2 operators
add_result    = first + second
sub_result    = first - second
mul_result    = first * second
div_result    = first / second

# Lesson 3 operators
power_result  = first ** second
floor_result  = first // second
mod_result    = first % second
```

Say: *"I save every result in its own variable. Never calculate inside print() — save first, display after."*

---

### Section 4 — Display

Say: *"Now I'll show everything. The :.2f gives exactly 2 decimal places — like Lesson 5 taught us."*

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

Run it with 10 and 2. Show the output. Point out how the name appears in the results header.

---

### Section 5 — Close

```python
print(f"\nThanks for calculating, {name}! 🧮")
```

Run the full program end to end. Then say:
*"That's it — 5 sections, every skill from this term. I'm wiping the screen. Your turn."*

**Clear your Trinket.**

---

## Complete Reference Solution

Use this for diagnosis only — do not display or distribute it.

```python
# ===== MY CALCULATOR =====

# Section 1: Welcome
name = input("What is your name? ").title()
print("=" * 30)
print(f"  Welcome, {name}!")
print(f"  The Python Calculator")
print("=" * 30)

# Section 2: Collect
first = float(input("\nEnter first number: "))
second = float(input("Enter second number (not zero): "))

# Section 3: Calculate
add_result    = first + second
sub_result    = first - second
mul_result    = first * second
div_result    = first / second
power_result  = first ** second
floor_result  = first // second
mod_result    = first % second

# Section 4: Display
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

# Section 5: Close
print(f"\nThanks for calculating, {name}! 🧮")
```

---

## Expected Output (for 10 and 2)

```
==============================
  Welcome, [Name]!
  The Python Calculator
==============================

Enter first number: 10
Enter second number (not zero): 2

------------------------------
  Results for [Name]
------------------------------
  10.0 + 2.0  = 12.00
  10.0 - 2.0  = 8.00
  10.0 x 2.0  = 20.00
  10.0 / 2.0  = 5.00
  10.0 ** 2.0 = 100.00
  10.0 // 2.0 = 5.00  (complete groups)
  10.0 % 2.0  = 0.00  (remainder)
------------------------------

Thanks for calculating, [Name]! 🧮
```

---

## Required Test Table (pre-calculated)

Students write their expected values BEFORE running. Use this to mark their test tables.

| First | Second | Add | Subtract | Multiply | Divide | Power | Floor | Mod |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 10 | 2 | 12.00 | 8.00 | 20.00 | 5.00 | 100.00 | 5.00 | 0.00 |
| 7 | 3 | 10.00 | 4.00 | 21.00 | 2.33 | 343.00 | 2.00 | 1.00 |
| 2.5 | 2 | 4.50 | 0.50 | 5.00 | 1.25 | 6.25 | 1.00 | 0.50 |

---

## Common Bugs & What to Say

| Bug | Cause | What to say |
|---|---|---|
| Name is all lowercase | Missing `.title()` | "What method from Lesson 1 capitalizes names?" |
| `"5" + "3"` = `"53"` | Forgot `float()` | "What type does input() return? How do we convert it?" |
| `^` gives wrong result | Wrong operator | "`^` is not power in Python. Which operator is?" |
| `NameError` | Variable typo | "Read the error — it tells you the exact name it can't find." |
| All decimals are long | Missing `:.2f` | "How did we format money in Lesson 5?" |
| `ZeroDivisionError` | Used 0 as second number | "That's a real limitation — document it. Term 3 fixes it with if/else." |
| Only 4 operations | Forgot L3 operators | "What three operators did we learn in Lesson 3?" |

---

## Circulating Questions (ask one per student)

- "Why did you use float() instead of int() here?"
- "What does // give you that / doesn't?"
- "What does % tell you?"
- "Where is your power result saved?"
- "Show me your test table — did you write it before running?"
- "What would happen if the user types 0 as the second number?"

---

## Facilitation Rules

- Do not hand out the reference solution
- `if/else`, loops, menus, `try/except` are out of scope — redirect: *"That's Term 3!"*
- Students must write test table before building (Lesson 7 habit)
- Second number must not be zero — students document this as a known limitation
- Extensions: ask for a third number, add a running total, use `round()` to pre-clean a result before displaying

---

## Mini Showcase Prompts

For each student who presents, ask:
1. "What does `float()` do and why did you use it?"
2. "Pick one of your Lesson 3 operators — `**`, `//`, or `%` — and explain what it means in real life."
3. "What would you add if you had `if/else`?"

---

## Exit Ticket

Every student completes both sentences:
- *"My calculator uses skills from Lesson ___ when it..."*
- *"One thing I would improve with if/else (Term 3) is..."*

---

## Showcase Preparation (for Lesson 9)

Remind students to go home and:
- Make sure all 3 tests pass
- Clean up the output (labels, spacing, messages)
- Prepare to explain one design choice and one limitation
- Lesson 9 values reasoning and the ability to explain — not just visual polish
