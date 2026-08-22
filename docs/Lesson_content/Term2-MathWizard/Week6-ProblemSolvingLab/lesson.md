---
title: "Math Problem-Solving Lab!"
description: "Choose a real problem, plan its data pipeline, build a tool, and improve it through testing."
difficulty: "beginner"
order_index: 6
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # Problem-Solving Lab
  # Do not code yet. Complete the plan first.

  # Problem:
  # Information the user will enter:
  # Type for each answer (int or float):
  # Formula in words:
  # Three planned tests:

  # Build your collect → convert → calculate → communicate pipeline below.
class_activities: |
  ## Build–Test–Improve Studio

  Choose one tool brief:

  - **Journey Tool:** convert one decimal distance into another unit.
  - **Team Score Tool:** combine three whole-number scores and calculate a rounded average.
  - **Party Share Tool:** calculate equal groups and leftovers.

  **Plan:** Identify inputs, types, formula, output, and three tests before coding.

  **Build:** Create the smallest version that solves the problem. Do not add a menu or `if/else`.

  **Test:** Run a normal case, a boundary case containing zero, and a case with decimals or leftovers where appropriate.

  **Exchange:** A partner uses the program from its prompts alone and records one success and one improvement.

  **Improve:** Revise the program, rerun the failed or unclear test, and document what changed.

  **Demo:** Explain the problem and one test—not every line of code.
take_home_assignment: |
  ## Homework: Math Wizard Review Challenge 🧙

  This week's homework is a review. It practises the two skills our class needs the most work on:

  1. **using the functions we have learned** — `input()`, `int()`, `float()`, `round()`, and `print()` with f-strings; and
  2. **choosing variable names that make sense** — a name should say what is inside the box.

  Complete all four parts in one Trinket program, with a comment line (`#`) before each part.

  ---

  ### Part 1: Variable Name Rescue 🚑

  This code works, but the names are terrible. Rewrite it with names that describe what each variable stores. Do not change what the program does.

  ```python
  x = input("How many stickers do you have? ")
  y = int(x)
  z = 4
  a = y // z
  b = y % z
  print(f"Each friend gets {a} stickers with {b} left over.")
  ```

  **Naming rules to follow:**

  - the name says what is inside (`sticker_count`, not `x` or `number`);
  - use lowercase words joined by underscores (`price_per_ticket`);
  - no single letters, and no names like `thing`, `stuff`, or `data`.

  ### Part 2: Function Round-Up 🔍

  Predict what each line prints, write your prediction as a comment, then run the code to check. Fix any prediction that was wrong — and add a comment saying why.

  ```python
  print(int("15") + 5)
  print(float("2.5") * 2)
  print(round(7.891, 2))
  print(round(9.5))
  print(10 // 3)
  print(10 % 3)
  ```

  ### Part 3: Build the Snack Shop Tool 🍿

  Build a small program that:

  1. asks for the price of one snack (a decimal — which conversion function does that need?);
  2. asks how many snacks the customer wants (a whole number — which function now?);
  3. calculates the total cost;
  4. prints a friendly, labelled answer using an f-string, rounded to 2 decimal places.

  Every variable name must pass the naming rules from Part 1. No menus and no `if/else` — that magic starts in Term 3.

  ### Part 4: Test Like a Wizard 🧪

  Test your Snack Shop Tool and record the results in a comment table at the bottom of your program:

  ```python
  # Test              | Inputs        | Expected | Actual
  # Normal case       | 2.50 and 3    | 7.5      |
  # Boundary (zero)   | 2.50 and 0    | 0.0      |
  # Decimal answer    | 1.99 and 2    | 3.98     |
  ```

  ---

  ### Submit

  1. your Trinket link with all four parts;
  2. one sentence: which function was hardest to remember how to use, and what it does; and
  3. one sentence: the worst variable name you fixed in Part 1 and the better name you gave it.

  **Wizard bonus ⭐:** add one more question to your Snack Shop Tool (like a tip or a discount amount) and include it in the total — with a sensible variable name, of course.
ai_activities: |
  ## AI Lab: A Score Is a Human-Designed Model

  Build a small scoring model from three clues:

  ```python
  practice = 8
  teamwork = 6
  challenge = 10
  average = round((practice + teamwork + challenge) / 3, 1)
  ```

  Change one clue and observe the effect. Then discuss what this average leaves out. A program can calculate a score correctly while the idea behind the score is incomplete or unfair.
---

# Term 2, Lesson 6: Math Problem-Solving Lab! 🛠️

**Course:** Term 2: Math Wizard

**Duration:** 60 minutes

**Term:** 2 of 8 | **Week:** 6 of 9

---

## Your Mission

You have learned the individual tools. Today you decide how to combine them.

You will:

- define one real problem clearly;
- choose `int()` or `float()` based on meaning;
- plan before coding;
- build the smallest useful version;
- test normal and boundary values; and
- revise the program after peer feedback.

There is no complete solution to copy because different students may choose different problems.

## 1. Pick a Tool Brief

### Journey Tool

Convert a distance in one unit to another. Use a decimal input, a conversion factor, `float()`, and a rounded result.

Possible directions:

- kilometres to miles;
- metres to centimetres; or
- hours to minutes.

Build one direction only. Menus and `if/else` begin in Term 3.

### Team Score Tool

Collect three whole-number scores, calculate the total and rounded average, and label both results.

### Party Share Tool

Collect a number of items and people, then report equal shares and leftovers using `//` and `%`.

## 2. Complete the Design Card

Do this before opening a new program:

| Design question | Your answer |
| --- | --- |
| What problem does the tool solve? | |
| What information must the user enter? | |
| Which inputs are `int`? | |
| Which inputs are `float`? | |
| What is the formula in words? | |
| What should the result say? | |
| What limitation will the first version have? | |

If you cannot describe the formula in words, you are not ready to code it yet.

## 3. Write Expected Tests

Plan at least three:

| Test purpose | Inputs | Expected result |
| --- | --- | --- |
| Normal case | | |
| Boundary case with zero | | |
| Decimal or leftover case | | |

Choose values you can verify by hand.

## 4. Build the Smallest Version

Use the familiar pipeline:

```text
collect → convert → calculate → communicate
```

Useful patterns—not finished solutions:

```python
value_text = input("Clear question with a unit: ")
value = float(value_text)
```

```python
tidy_result = round(result, 2)
```

```python
print(f"Label: {tidy_result} unit")
```

Write one stage at a time and run after each stage.

## 5. Test and Diagnose

For every mismatch, ask:

1. Did the program collect the correct information?
2. Did it choose the correct type?
3. Does the formula match the words?
4. Is the result rounded or formatted appropriately?
5. Does the output state what the answer means?

Record actual results beside your expected results.

## 6. Partner Usability Test

Give the tool to a partner without explaining how it works. The partner records:

- one thing that worked;
- one unclear prompt, label, or result;
- one input they tested; and
- whether the answer matched their expectation.

The builder then makes one revision and reruns the relevant test.

## 7. Demo the Reasoning

In a 60-second demo, explain:

- the problem;
- why you chose `int()` or `float()`;
- one test and its expected result; and
- one change made after feedback.

Do not narrate every line of code.

## Challenge Ladder

### Level 1: Working Pipeline ⭐

Build one input, one conversion, one calculation, and one labelled result.

### Level 2: Tested Tool ⭐⭐

Pass the three required tests and improve one prompt after partner feedback.

### Level 3: Multi-Step Tool ⭐⭐⭐

Add a second connected result, such as both total and average or both complete groups and leftovers. Keep it part of the same job.

## Common Problems

| Problem | Better move |
| --- | --- |
| Starting to code without a formula | Return to the design card |
| Using `int()` for decimal input | Choose `float()` based on meaning |
| Adding unrelated operations | Keep one clear job |
| Only testing friendly values | Include zero and a decimal/leftover case |
| Adding a menu with `if` | Save decision-making for Term 3 |

## Exit Ticket

Write four short phrases describing your tool's collect, convert, calculate, and communicate stages. Circle the stage where your hardest bug occurred.

## Next Lesson

Next lesson you will work as a Bug Clinic: reproduce problems, classify them, repair them, and prove the fixes with tests.
