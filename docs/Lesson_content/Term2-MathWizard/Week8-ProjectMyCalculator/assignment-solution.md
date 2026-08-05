---
solution_code: |
  # My Polished Calculator Project
  border = "=" * 38

  print(border)
  print("🧙 WELCOME TO THE MATH WIZARD! 🧙")
  print(border)

  # Personalize the calculator.
  user_name = input("What is your name? ")
  print(f"Hello, {user_name.title()}! Let's calculate.")

  # Ask for and convert two numbers.
  first_number = int(input("Enter your first number: "))
  second_number = int(input("Enter your second number: "))

  print("\n--- BASIC RESULTS ---")
  print(f"Addition:       {first_number} + {second_number} = {first_number + second_number}")
  print(f"Subtraction:    {first_number} - {second_number} = {first_number - second_number}")
  print(f"Multiplication: {first_number} × {second_number} = {first_number * second_number}")

  # Avoid a crash when the second number is zero.
  if second_number != 0:
      print(f"Division:       {first_number} ÷ {second_number} = {first_number / second_number}")
      print(f"Remainder:      {first_number} % {second_number} = {first_number % second_number}")
  else:
      print("Division:       Cannot divide by zero")
      print("Remainder:      Cannot divide by zero")

  # Bonus operation
  print(f"Exponent:       {first_number} ** {second_number} = {first_number ** second_number}")

  print("\n" + border)
  print(f"Thanks for using the calculator, {user_name.title()}! ✨")
  print(border)
---

## Example run

```text
======================================
🧙 WELCOME TO THE MATH WIZARD! 🧙
======================================
What is your name? amina
Hello, Amina! Let's calculate.
Enter your first number: 12
Enter your second number: 5

--- BASIC RESULTS ---
Addition:       12 + 5 = 17
Subtraction:    12 - 5 = 7
Multiplication: 12 × 5 = 60
Division:       12 ÷ 5 = 2.4
Remainder:      12 % 5 = 2
Exponent:       12 ** 5 = 248832

======================================
Thanks for using the calculator, Amina! ✨
======================================
```

## Walk through it

1. Start with the required flow: welcome → input → conversion → calculations → results → ending.
2. Point out that the decorative `border` is created once and reused three times.
3. Trace both number variables through the four basic operations.
4. Explain the zero check before division. Let students predict which branch runs for a second number of `0`.
5. Identify the optional personalization, modulo, exponent, formatting, and error handling.

## Success checklist

- [x] Decorative welcome and ending
- [x] Two numeric inputs converted with `int()`
- [x] All four basic operations
- [x] Clear, labelled results
- [x] Comments organizing each section
- [x] Division-by-zero protection
- [x] Personalization, exponent, and modulo bonuses

## Common mistakes

| Mistake | Review point |
|---|---|
| Indenting the `else` differently from the `if` | The two keywords must line up. |
| Dividing before checking for zero | Check `second_number != 0` first. |
| Repeating the border text everywhere | Store repeated content in a variable. |
| Adding bonuses before the core calculator works | Complete and test the requirements first, then extend. |

## Ask the class

1. Which parts are required and which are bonuses?
2. What happens when the second number is zero, and why does the program keep running?
3. If you had five more minutes, what useful feature would you add?

## Another valid approach

A student may use a menu that performs only the selected operation, or may calculate all results automatically as this model does. Either design can be showcase-ready when it satisfies the required features and is easy to understand.
