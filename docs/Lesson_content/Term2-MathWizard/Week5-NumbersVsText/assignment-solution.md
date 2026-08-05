---
solution_code: |
  # My First Calculator
  print("🧮 Welcome to My First Calculator! 🧮")

  # Ask for text, then convert each answer to an integer.
  first_number = int(input("Enter first number: "))
  second_number = int(input("Enter second number: "))

  # Calculate and display all four answers.
  print(f"{first_number} + {second_number} = {first_number + second_number}")
  print(f"{first_number} - {second_number} = {first_number - second_number}")
  print(f"{first_number} × {second_number} = {first_number * second_number}")
  print(f"{first_number} ÷ {second_number} = {first_number / second_number}")

  print("Thanks for calculating! ✨")
---

## Example run

```text
🧮 Welcome to My First Calculator! 🧮
Enter first number: 15
Enter second number: 4
15 + 4 = 19
15 - 4 = 11
15 × 4 = 60
15 ÷ 4 = 3.75
Thanks for calculating! ✨
```

## Walk through it

1. Remind students that `input()` always returns text—even when the user types digits.
2. Read `int(input(...))` from the inside out: ask first, then convert the answer.
3. Trace the values `15` and `4` into each f-string.
4. Explain that the symbols inside the quoted labels are for people, while `+`, `-`, `*`, and `/` outside the quotes are Python operators.

## Success checklist

- [x] Two questions using `input()`
- [x] Both answers converted with `int()`
- [x] Addition, subtraction, multiplication, and division
- [x] Clearly labelled results
- [x] Comments explaining the main steps
- [x] Code that runs with a non-zero second number

## Common mistakes

| Mistake | Review point |
|---|---|
| Leaving out `int()` | Addition joins the text and the other operations fail. |
| Writing `int = input(...)` | `int` is Python's conversion function; use a different variable name. |
| Using `×` or `÷` as Python operators | Use `*` and `/` in the calculation. Decorative labels may use `×` and `÷`. |
| Entering zero as the second number | Division by zero causes an error; zero handling is a later bonus. |

## Ask the class

1. What would `"15" + "4"` produce, and why is it not `19`?
2. Why does the multiplication line show `×` and also contain `*`?
3. How would the answers change if the two inputs swapped places?

## Another valid approach

Students may calculate into four answer variables before printing. Direct calculations inside the f-strings and named result variables are both correct.
