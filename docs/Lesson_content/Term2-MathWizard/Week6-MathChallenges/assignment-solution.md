---
solution_code: |
  # Real-World Calculator: Restaurant Tip Helper
  print("🍽️ Welcome to the Tip Helper! 🍽️")

  # Ask for the bill and the tip percentage as whole numbers.
  bill = int(input("What is the bill amount in dollars? $"))
  tip_percent = int(input("What tip percentage would you like? "))

  # Convert the percentage into a tip amount.
  tip_amount = bill * tip_percent / 100
  total_amount = bill + tip_amount

  # Display the solution clearly.
  print(f"A {tip_percent}% tip on ${bill} is ${tip_amount:.2f}.")
  print(f"Your total bill is ${total_amount:.2f}.")
  print("Thank you for using the Tip Helper! 😊")
---

## Example run

```text
🍽️ Welcome to the Tip Helper! 🍽️
What is the bill amount in dollars? $80
What tip percentage would you like? 15
A 15% tip on $80 is $12.00.
Your total bill is $92.00.
Thank you for using the Tip Helper! 😊
```

## Walk through it

1. Define the real-world problem: find the tip, then add it to the bill.
2. Identify the two pieces of information the program needs from the user.
3. Break down `bill * tip_percent / 100` using the example `80 × 15 ÷ 100`.
4. Explain that `:.2f` displays money with two digits after the decimal point.
5. Check the answer mentally: 10% of $80 is $8 and 5% is $4, so 15% is $12.

## Success checklist

- [x] A clearly defined real-world problem
- [x] User input for all needed information
- [x] Both inputs converted using `int()`
- [x] Calculations that solve the problem
- [x] A clear answer and total
- [x] Explanatory comments

## Common mistakes

| Mistake | Review point |
|---|---|
| Multiplying by `15` without dividing by `100` | A percentage means parts out of one hundred. |
| Printing only the tip | The user also needs the final total. |
| Forgetting `int()` | The program cannot multiply and divide input text as intended. |
| Typing `$80` instead of `80` | `int()` accepts the digits, not the currency symbol. |

## Ask the class

1. Why do we divide the percentage calculation by `100`?
2. What inputs would produce a tip of exactly `$10.00`?
3. How could this become a bill-splitting calculator for several people?

## Another valid approach

Age, distance, time, scores, and other money problems are equally valid. Review whether the program asks for the right data, converts it, performs a meaningful calculation, and explains the answer.
