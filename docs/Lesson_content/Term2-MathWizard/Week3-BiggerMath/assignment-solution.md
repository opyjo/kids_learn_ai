---
solution_code: |
  # The Math Wizard Space Mission 🚀
  astronauts = 5
  fuel_cells = 47
  supply_boxes = 23

  print("🚀 MATH WIZARD SPACE MISSION 🚀")

  # All six operations in a space story
  print("Crew after two astronauts join:", astronauts + 2)
  print("Fuel cells after using twelve:", fuel_cells - 12)
  print("Meals for seven days:", astronauts * 7)
  print("Litres of water per astronaut:", 40 / astronauts)
  print("Power from 3 squared:", 3 ** 2)
  print("Supply boxes left after pairs:", supply_boxes % 2)

  # Three exponent examples
  print("2 cubed:", 2 ** 3)
  print("4 squared:", 4 ** 2)
  print("10 squared:", 10 ** 2)

  # Three modulo examples
  print("17 stars grouped by 5 leaves:", 17 % 5)
  print("26 samples grouped by 4 leaves:", 26 % 4)
  print("31 badges grouped by 6 leaves:", 31 % 6)

  # Parentheses change which operation happens first
  print("Without parentheses:", 5 + 3 * 2)
  print("With parentheses:", (5 + 3) * 2)

  # Bonus: floor division gives the number of complete groups
  print("Complete pairs of supply boxes:", supply_boxes // 2)
---

## Expected output highlights

```text
Power from 3 squared: 9
Supply boxes left after pairs: 1
Without parentheses: 11
With parentheses: 16
Complete pairs of supply boxes: 11
```

## Walk through it

1. Quickly locate one example of each required operator.
2. Explain exponentiation as repeated multiplication: `3 ** 2` means `3 × 3`.
3. Use objects or students to demonstrate modulo as the number left over after making equal groups.
4. Compare `5 + 3 * 2` with `(5 + 3) * 2` and calculate both by hand.
5. Contrast `%` (the remainder) with `//` (the number of complete groups).

## Success checklist

- [x] All six required operations
- [x] At least three exponent examples
- [x] At least three modulo examples
- [x] Order of operations with and without parentheses
- [x] Explanatory comments and a space-mission theme
- [x] Bonus floor-division example

## Common mistakes

| Mistake | Review point |
|---|---|
| Writing `3 ^ 2` | Python exponents use `**`, not `^`. |
| Expecting `%` to produce a percentage | `%` returns the remainder after division. |
| Assuming Python always works left to right | Multiplication and division happen before addition and subtraction. |
| Using only one `*` for an exponent | `*` multiplies; `**` raises to a power. |

## Ask the class

1. What do `23 % 2` and `23 // 2` tell us about the same boxes?
2. Why do the parentheses change `11` into `16`?
3. Where might remainders be useful outside a space story?

## Another valid approach

Students can use any real-world theme and any suitable numbers. A good solution demonstrates what the operators mean; it does not need to reproduce these exact calculations.
