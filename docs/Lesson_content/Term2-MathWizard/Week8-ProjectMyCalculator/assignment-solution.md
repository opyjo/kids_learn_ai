---
solution_code: |
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
---

## Required test matrix

| First | Second | Add | Subtract | Multiply | Divide | Power | Floor | Mod |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 10 | 2 | 12.00 | 8.00 | 20.00 | 5.00 | 100.00 | 5.00 | 0.00 |
| 7 | 3 | 10.00 | 4.00 | 21.00 | 2.33 | 343.00 | 2.00 | 1.00 |
| 2.5 | 2 | 4.50 | 0.50 | 5.00 | 1.25 | 6.25 | 1.00 | 0.50 |

## Review guidance

Students may choose different variable names and presentation styles. Check for:

- user's name collected and formatted with `.title()`
- two `float()` inputs
- all 7 operations saved in named variables: `+`, `-`, `*`, `/`, `**`, `//`, `%`
- labelled output with `:.2f` on every result
- comments marking each section
- test table completed before running (3 rows)
- one peer-driven revision
- documented limitation: second number must not be zero

Do not require menus, `if/else`, loops, or `try/except` — those concepts are taught in Term 3.
