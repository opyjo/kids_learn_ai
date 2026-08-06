---
title: "Numbers from Users!"
description: "Turn the text collected by input() into whole numbers and build a number-powered tool."
difficulty: "beginner"
order_index: 4
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # Numbers from Users — prediction warm-up
  # Predict both answers before you run the program.
  print("7" + "3")
  print(7 + 3)

  # Build your Number Machine below.
  first_text = input("First whole number: ")
  second_text = input("Second whole number: ")

  # TODO: convert both answers with int()
  # TODO: calculate one useful result
  # TODO: show the result in an f-string
class_activities: |
  ## Number Machine Design Lab

  You are building a tool for another student to use—not copying a finished program.

  **1. Predict:** Write down what `"7" + "3"` and `7 + 3` will produce. Run the starter and explain the difference.

  **2. Build:** Complete a Number Machine that:
  - asks for two whole numbers;
  - converts both answers using `int()`;
  - performs one calculation you choose; and
  - explains the answer clearly.

  **3. Test:** Your program must pass these tests:
  - two ordinary positive numbers;
  - a test containing zero;
  - a test where both numbers are the same.

  **4. Exchange:** Let a partner use your program without explaining it. Watch whether the prompts make sense.

  **5. Improve:** Rewrite one unclear prompt or result, then add a second calculation.

  **Success check:** You can point to the input, conversion, calculation, and output in your own code.
take_home_assignment: |
  ## Homework: One-Job Number Tool

  Build one small tool that solves a single problem. Choose one:

  - convert years to months;
  - convert hours to minutes;
  - total the points from two games; or
  - invent a similar whole-number tool.

  Your tool must:

  1. ask for one or two whole numbers;
  2. convert every numeric answer with `int()`;
  3. perform a useful calculation;
  4. show a labelled result with an f-string;
  5. include two comments; and
  6. be tested with at least three planned test cases.

  Submit the Trinket link and list the three tests you ran. Do not build the four-operation calculator yet—that is the Term 2 final project.
ai_activities: |
  ## AI Lab: Follow the Data Pipeline

  Every useful program moves information through a pipeline:

  `collect → convert → calculate → communicate`

  Label each line:

  ```python
  score_text = input("Practice score: ")
  score = int(score_text)
  doubled = score * 2
  print(f"Double-score: {doubled}")
  ```

  Change one line at a time and predict the effect before running it. AI systems use much larger pipelines, but they still need data in the right form before calculating with it.
---

# Term 2, Lesson 4: Numbers from Users! 🔢

**Course:** Term 2: Math Wizard

**Duration:** 60 minutes

**Term:** 2 of 8 | **Week:** 4 of 9

---

## Your Mission

You already learned `input()` in Term 1 and refreshed it in Lesson 1. Today is the next step: making the answers useful for maths.

By the end of the lesson, you will be able to:

- explain why `input()` returns text;
- convert number-shaped text with `int()`;
- follow the four-stage data pipeline;
- build and test a whole-number tool; and
- improve a program after someone else tries it.

## 1. Predict Before You Run

What will each line produce?

```python
print("7" + "3")
print(7 + 3)
```

Write both predictions first. Then run the code.

- `"7"` is text, so `+` joins it to other text.
- `7` is an integer, so `+` performs arithmetic.

The quotation marks change what Python believes the value is.

## 2. Recall `input()`

You already know this pattern:

```python
age_text = input("How old are you? ")
```

Even if the user types `12`, Python receives the text `"12"`. The variable name `age_text` makes that visible.

Try this experiment:

```python
number_text = input("Type a whole number: ")
print(number_text + number_text)
```

Predict what happens when you enter `5`. Explain the result to a partner.

## 3. Convert with `int()`

`int()` converts number-shaped text into a whole number:

```python
number_text = input("Type a whole number: ")
number = int(number_text)
doubled = number * 2
print(f"Double {number} is {doubled}.")
```

Follow the data:

| Stage | Code | Example value |
| --- | --- | --- |
| Collect | `number_text = input(...)` | `"5"` |
| Convert | `number = int(number_text)` | `5` |
| Calculate | `doubled = number * 2` | `10` |
| Communicate | `print(f"...")` | `Double 5 is 10.` |

### Important limitation

`int()` is for whole numbers such as `8`, `0`, and `-4`. It cannot convert `three` or `4.5`. Decimal input arrives in the next lesson.

## 4. Build: Your Number Machine

Start with this scaffold:

```python
first_text = input("First whole number: ")
second_text = input("Second whole number: ")

first = int(first_text)
second = int(second_text)

# Choose ONE useful calculation to begin.
result = first + second

print(f"Your result is {result}.")
```

Now make it yours:

1. Decide what the two numbers represent.
2. Rename the variables so their purpose is clear.
3. Choose the correct operator.
4. Write a result that includes a label and unit.

Examples of purposes—not complete solutions:

- total points from two rounds;
- minutes from a number of hours;
- seats in equal rows;
- stickers shared between teams.

## 5. Test Like a Developer

Running a program once only proves that it worked once.

Create a test table before you exchange programs:

| Test | Inputs | Expected result | Actual result | Pass? |
| --- | --- | --- | --- | --- |
| Ordinary | 4 and 7 | Decide before running | | |
| Zero | 0 and 9 | Decide before running | | |
| Same values | 6 and 6 | Decide before running | | |

If a test fails, change one thing and run that test again.

## 6. Partner Usability Test

Give your program to a partner without explaining it.

Ask them:

- Did the prompts tell you what to enter?
- Did the answer include a useful label or unit?
- Could you tell what the program was for?

Improve one prompt and one output message using their feedback.

## Challenge Ladder

### Level 1: Double It ⭐

Ask for one whole number and calculate twice its value.

### Level 2: Game Total ⭐⭐

Ask for points from two rounds and display the total with a clear label.

### Level 3: Fair Sharing ⭐⭐⭐

Ask for a number of items and a number of people. Use `//` for the equal share and `%` for leftovers. Test with a case that has no leftovers and one that does.

## Common Bugs

| Symptom | Likely cause | Check |
| --- | --- | --- |
| `57` instead of `12` | Text was joined | Did you use `int()`? |
| `ValueError` | The input was not a whole number | Did you type digits such as `12`? |
| `NameError` | Variable names do not match | Check spelling and capitals |
| Answer has no meaning | Output lacks a label | Add a unit or explanation |

## Exit Ticket

Without running code, complete this pipeline:

```python
coins_text = input("Coins collected: ")
coins = __________
bonus = coins + 5
print(f"Coins after bonus: {__________}")
```

Then answer: Why is conversion necessary?

## Next Lesson

Whole numbers are useful, but prices, measurements, and averages often contain decimal points. Next lesson you will meet `float()` and learn how to make long decimal answers readable.
