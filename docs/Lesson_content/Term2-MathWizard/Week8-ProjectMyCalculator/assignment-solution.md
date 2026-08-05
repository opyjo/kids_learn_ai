---
solution_code: |
  # My Calculator — teacher reference solution
  print("=== MY CALCULATOR ===")
  print("Enter two numbers. The second number must not be zero.")

  first = float(input("First number: "))
  second = float(input("Second number: "))

  addition = first + second
  subtraction = first - second
  multiplication = first * second
  division = first / second

  print(f"{first:g} + {second:g} = {addition:.2f}")
  print(f"{first:g} - {second:g} = {subtraction:.2f}")
  print(f"{first:g} × {second:g} = {multiplication:.2f}")
  print(f"{first:g} ÷ {second:g} = {division:.2f}")
  print("Thanks for calculating!")
---

## Required test matrix

| First | Second | Add | Subtract | Multiply | Divide |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 8 | 2 | 10.00 | 6.00 | 16.00 | 4.00 |
| 2.5 | 4 | 6.50 | -1.50 | 10.00 | 0.62 |
| -3 | 6 | 3.00 | -9.00 | -18.00 | -0.50 |

## Review guidance

Students may choose different names and presentation. Check for two `float()` inputs, four saved results, labelled tidy output, comments separating stages, recorded tests, one peer-driven revision, and an honest division-by-zero limitation.

Do not require menus, `if/else`, loops, or `try/except`; those concepts have not been taught yet.
