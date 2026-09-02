---
title: "Decimals & Clean Answers!"
description: "Use float(), round(), and number formatting to build tools for prices and measurements."
difficulty: "beginner"
order_index: 5
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # Decimal Detective
  # Predict which conversion works for 4.75 before running.
  measurement_text = input("Enter a decimal measurement: ")

  # Try ONE conversion at a time:
  # measurement = int(measurement_text)
  # measurement = float(measurement_text)

  # TODO: calculate double the measurement
  # TODO: round the result to 2 decimal places
  # TODO: show a labelled result
class_activities: |
  ## Mini Shop Receipt Lab

  Build a receipt another student can use.

  **1. Investigate:** Predict whether `int("4.75")` or `float("4.75")` will work. Test your claim.

  **2. Design:** Choose an imaginary shop and one item to sell. Decide its decimal price.

  **3. Build:** Your receipt must ask for:
  - the item name;
  - its decimal price; and
  - a whole-number quantity.

  Convert the price with `float()` and quantity with `int()`. Calculate the total and display it to exactly two decimal places.

  **4. Test:** Test a whole-number-looking price, a decimal price, and a quantity of zero. Record expected and actual results.

  **5. Exchange:** Give the receipt to a partner. They choose the item, price, and quantity.

  **6. Improve:** Add one useful line, such as a shop title, price-per-item summary, or fixed delivery cost.

  The goal is a clear, usable receipt—not a four-operation calculator.
take_home_assignment: |
  ## Homework: Potion Recipe Scaler

  A potion recipe uses a decimal amount of an ingredient in each batch. Build a program that:

  1. asks for the ingredient name;
  2. asks for the decimal amount needed per batch using `float()`;
  3. asks for a whole number of batches using `int()`;
  4. calculates the total amount;
  5. shows the answer rounded to two decimal places; and
  6. uses an f-string with a clear unit such as grams or millilitres.

  Test with these cases and record the expected answer first:

  - `2.5` units × `3` batches;
  - `0.75` units × `4` batches;
  - one test you design.

  Submit your Pickcode project link and test table.
ai_activities: |
  ## AI Lab: Precision Has a Purpose

  A program may calculate `7.666666666666667`, but showing every digit can distract the user. Choosing useful precision is part of communicating data responsibly.

  ```python
  total = 23
  count = 3
  average = total / count

  print(average)
  print(round(average, 1))
  print(f"{average:.2f}")
  ```

  Compare the three outputs. Discuss which is best for a classroom average and which is best for money. Rounding makes a result easier to read, but it does not make uncertain data more accurate.
---

# Term 2, Lesson 5: Decimals & Clean Answers! ✨

**Course:** Term 2: Math Wizard

**Duration:** 60 minutes

**Term:** 2 of 8 | **Week:** 5 of 9

---

## Your Mission

Last lesson you converted whole-number input using `int()`. Today you will handle prices and measurements containing decimal points, then present the results clearly.

By the end of the lesson, you will be able to:

- choose between `int()` and `float()`;
- calculate with decimal input;
- use `round()` to control precision;
- display money with exactly two decimal places; and
- build, test, exchange, and improve a mini receipt.

## 1. Decimal Detective

Predict which line can convert the text `"4.75"`:

```python
whole_number = int("4.75")
decimal_number = float("4.75")
```

Test one line at a time.

- `int()` expects text representing a whole number.
- `float()` accepts decimal text and whole-number text.

| User might enter | Choose | Result |
| --- | --- | --- |
| number of tickets: `4` | `int()` | `4` |
| price: `4.75` | `float()` | `4.75` |
| distance: `12.5` | `float()` | `12.5` |

## 2. Extend the Data Pipeline

The pipeline from Lesson 4 stays the same:

```python
price_text = input("Price: $")
price = float(price_text)
doubled_price = price * 2
print(f"Two items cost ${doubled_price}.")
```

Label the collect, convert, calculate, and communicate stages with a partner.

### Short form

You may also combine collection and conversion:

```python
price = float(input("Price: $"))
```

Both styles work. The two-line style is easier to inspect while learning and debugging.

## 3. Why Answers Get Messy

Some correct calculations produce long decimals:

```python
average = 23 / 3
print(average)
```

The result is useful to Python but not pleasant for a person to read.

Use `round(number, decimal_places)` when you need a rounded number:

```python
average = 23 / 3
tidy_average = round(average, 2)
print(f"Average: {tidy_average}")
```

Before running these, predict each result:

```python
round(8.246, 1)
round(8.246, 2)
round(8.246, 3)
```

## 4. Money Needs Exactly Two Places

`round(6.5, 2)` still displays as `6.5`. Money is usually written as `6.50`.

Inside an f-string, `:.2f` means “display this number with exactly two decimal places”:

```python
total = 6.5
print(f"Total: ${total:.2f}")
```

Use this rule:

| Need | Tool |
| --- | --- |
| A rounded number for more calculations | `round(value, 2)` |
| A value displayed like money | `f"${value:.2f}"` |

## 5. Build: Mini Shop Receipt

Do not copy a finished solution. Build from these requirements:

1. Ask for an item name.
2. Ask for a decimal price.
3. Ask for a whole-number quantity.
4. Convert each numeric answer with the right function.
5. Calculate `price × quantity`.
6. Display a receipt with exactly two decimal places.

Starter scaffold:

```python
item = input("Item name: ")
price_text = input("Price for one: $")
quantity_text = input("Quantity: ")

# Convert

# Calculate

# Display a clear receipt
```

### Success criteria

- The program accepts a price such as `2.75`.
- Quantity is stored as a whole number.
- The result states the item, quantity, and total.
- Money always shows two decimal places.
- Another student can use it without your help.

## 6. Test Before You Share

Complete the expected column before running:

| Price | Quantity | Expected total | Actual output | Pass? |
| ---: | ---: | ---: | --- | --- |
| 2.50 | 3 | | | |
| 1.99 | 2 | | | |
| 4.25 | 0 | | | |

If a test fails, identify whether the problem is in collection, conversion, calculation, or communication.

## 7. Partner Shop

Exchange programs. Your partner chooses the inputs and gives feedback:

- Were the prompts clear?
- Did the receipt make sense?
- Was the money formatted correctly?

Make at least one improvement after the test.

## Challenge Ladder

### Level 1: Measurement Doubler ⭐

Ask for a decimal measurement, double it, and round the answer.

### Level 2: Mini Receipt ⭐⭐

Complete all receipt requirements and pass the three tests.

### Level 3: Delivery Total ⭐⭐⭐

Add a fixed decimal delivery cost stored in a variable. Show the item subtotal, delivery cost, and final total. Do not add menus or decisions yet.

## Common Bugs

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| `ValueError` for `4.75` | Used `int()` | Convert decimal text with `float()` |
| Prices join together | Missing conversion | Check the pipeline |
| Money shows one decimal | Used only `round()` | Format with `:.2f` |
| Quantity is `3.0` | Used `float()` | Use `int()` for countable whole items |

## Exit Ticket

Choose the correct conversion and formatting:

```python
distance_text = input("Distance in km: ")
distance = ________(distance_text)
print(f"Distance: {distance:____}")
```

Explain why a price and a quantity may need different data types.

## Next Lesson

You now have all the pieces needed to solve real problems: operators, whole-number input, decimal input, and clean results. Next lesson you will choose a problem, plan a tool, test it, and improve it.
