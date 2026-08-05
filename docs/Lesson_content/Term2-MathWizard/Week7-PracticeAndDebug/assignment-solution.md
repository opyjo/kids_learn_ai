---
solution_code: |
  # My Fixed Calculator
  print("Welcome to My Calculator!")

  # Fix 1: input() gives text, so convert the first answer with int().
  num1 = int(input("First number: "))

  # Fix 2: convert the second answer too.
  num2 = int(input("Second number: "))

  # Fix 3: numeric addition now adds instead of joining text.
  print(f"{num1} + {num2} = {num1 + num2}")

  # Fix 4: subtraction now works because both values are numbers.
  print(f"{num1} - {num2} = {num1 - num2}")

  # Fix 5: Python uses * for multiplication, not x.
  print(f"{num1} × {num2} = {num1 * num2}")

  # Fix 6: division now works because both values are numbers.
  print(f"{num1} ÷ {num2} = {num1 / num2}")
---

## Example test

```text
Welcome to My Calculator!
First number: 12
Second number: 3
12 + 3 = 15
12 - 3 = 9
12 × 3 = 36
12 ÷ 3 = 4.0
```

## Walk through it

1. Run or read the original code one line at a time rather than changing everything at once.
2. Show that both `input()` calls return strings. That one root cause creates several visible bugs.
3. Compare text addition (`"12" + "3"` → `"123"`) with number addition (`12 + 3` → `15`).
4. Locate the separate syntax bug: Python does not recognize `x` as a multiplication operator.
5. Retest after the fixes with several pairs of numbers.

## The six bugs explained

| Bug | What happens | Fix |
|---|---|---|
| First input remains text | `num1` is the wrong type | Wrap the first `input()` in `int()` |
| Second input remains text | `num2` is the wrong type | Wrap the second `input()` in `int()` |
| Addition joins text | `2` and `3` can appear as `23` | Add converted integers |
| Subtraction uses text | Python raises a type error | Subtract converted integers |
| Multiplication uses `x` | Python raises a syntax/name error | Replace `x` with `*` |
| Division uses text | Python raises a type error | Divide converted integers |

The conversion fixes solve several symptoms together. That is normal in debugging: one root cause can create more than one error.

## Success checklist

- [x] All six problems identified and explained
- [x] Both inputs converted to integers
- [x] Correct multiplication operator
- [x] Comments explaining every fix
- [x] Clear, labelled results
- [x] Tested with a non-zero second number

## Ask the class

1. Which single change fixes the most symptoms?
2. Why does the original addition line behave differently from subtraction?
3. What other test values should a careful debugger try?
