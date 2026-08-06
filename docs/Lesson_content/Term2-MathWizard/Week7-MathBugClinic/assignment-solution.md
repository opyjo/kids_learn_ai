---
solution_code: |
  # Case 1 — conversion bug repaired
  price_text = input("Decimal price: $")
  price = float(price_text)
  print(f"Double price: ${price * 2:.2f}")

  # Case 2 — calculation bug repaired
  round_one = 8
  round_two = 6
  total = round_one + round_two
  print(f"Total points: {total}")

  # Case 3 — output bug repaired
  kilometres = 7.5
  miles = kilometres * 0.621371
  print(f"{kilometres:g} km is approximately {miles:.2f} miles.")
---

## Case reports

### Case 1: Runtime problem

- **Symptom:** `int("4.75")` raises `ValueError`.
- **Repair:** Use `float()` for decimal price input.
- **Tests:** `4 → $8.00`; `4.75 → $9.50`.

### Case 2: Logic problem

- **Symptom:** Multiplication produces `48` instead of the expected total `14`.
- **Repair:** Replace `*` with `+`.
- **Tests:** `8 and 6 → 14`; `0 and 5 → 5`.

### Case 3: Usability problem

- **Symptom:** The raw number lacks direction, units, and readable precision.
- **Repair:** Add both units and `:.2f` formatting.
- **Tests:** `0 km → 0.00 miles`; `10 km → 6.21 miles`.

The evidence must show the expected and actual results, not merely state that the program runs.
