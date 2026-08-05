---
solution_code: |
  # Potion Recipe Scaler
  ingredient = input("Ingredient name: ")
  amount_text = input("Amount per batch in millilitres: ")
  batches_text = input("Whole number of batches: ")

  amount_per_batch = float(amount_text)
  batches = int(batches_text)
  total_amount = round(amount_per_batch * batches, 2)

  print(f"For {batches} batches, use {total_amount:.2f} ml of {ingredient}.")
---

## Why this works

The measurement uses `float()` because it may contain a decimal. The batch count uses `int()` because it represents complete batches. `round()` creates a tidy numeric result and `:.2f` controls its display.

## Suggested tests

| Amount per batch | Batches | Expected total |
| ---: | ---: | ---: |
| 2.5 | 3 | 7.50 ml |
| 0.75 | 4 | 3.00 ml |
| 1.25 | 0 | 0.00 ml |
