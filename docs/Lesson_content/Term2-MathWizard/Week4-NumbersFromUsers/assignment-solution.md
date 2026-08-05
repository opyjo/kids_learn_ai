---
solution_code: |
  # One-Job Number Tool: Hours to Minutes
  hours_text = input("How many whole hours? ")
  hours = int(hours_text)

  minutes = hours * 60

  print(f"{hours} hours equals {minutes} minutes.")
---

## Pipeline

1. **Collect:** `input()` receives number-shaped text.
2. **Convert:** `int()` creates a whole number.
3. **Calculate:** multiplication converts hours to minutes.
4. **Communicate:** the f-string labels both value and unit.

## Suggested tests

| Hours | Expected minutes |
| ---: | ---: |
| 2 | 120 |
| 0 | 0 |
| 24 | 1440 |

Other valid one-job tools include years-to-months, two-round score totals, or similar whole-number conversions.
