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
  ## Homework: Version 2

  Improve the tool you began in class rather than starting another calculator.

  Submit:

  1. your revised Trinket link;
  2. a one-sentence problem statement;
  3. a table with at least four test cases;
  4. the feedback you received;
  5. the change you made because of that feedback; and
  6. one known limitation of the program.

  Your tool should solve one job well. The general four-operation calculator is reserved for Lesson 8.
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

## Recap: Your Toolkit So Far

Before you plan your own tool, make sure these pieces are ready:

| Skill | Where you learned it | How you will use it today |
| --- | --- | --- |
| `+`, `-`, `*`, `/` | Lesson 2: Python Does Math | Combine or compare values inside your formula |
| `//` and `%` | Lesson 3: Bigger Math | Needed only if you choose the Party Share Tool |
| `input()` and `int()` | Lesson 4: Numbers from Users | Collect and convert whole-number answers |
| `float()`, `round()`, `:.2f` | Lesson 5: Decimals & Clean Answers | Collect and convert decimal answers, then tidy the result |
| `collect → convert → calculate → communicate` | Lessons 4–5 | The pipeline every tool below is built on |

If any row feels shaky, reread that lesson's numbered sections before choosing a tool brief.

## Worked Example: Watch the Full Process Once

This walkthrough uses a fourth scenario—Temperature Check—so it will not hand you the answer for Journey, Team Score, or Party Share. Read it once before choosing your own brief.

**Problem:** A weather club wants to convert one Celsius reading into Fahrenheit.

**Completed Design Card:**

| Design question | Answer |
| --- | --- |
| What problem does the tool solve? | Converts a Celsius reading into Fahrenheit for the weather club log |
| What information must the user enter? | One temperature in Celsius |
| Which inputs are `int`? | None |
| Which inputs are `float`? | The Celsius temperature—decimals like `21.5` are valid readings |
| What is the formula in words? | Multiply Celsius by nine-fifths, then add thirty-two |
| What should the result say? | The original Celsius value and the converted Fahrenheit value, labelled |
| What limitation will the first version have? | Converts one direction only; Fahrenheit-to-Celsius is a future upgrade |

**Planned tests:**

| Test purpose | Inputs | Expected result |
| --- | --- | --- |
| Normal case | 20 | 68.0°F |
| Boundary case with zero | 0 | 32.0°F |
| Decimal case | 21.5 | 70.7°F |

**Smallest working version:**

```python
celsius_text = input("Temperature in Celsius: ")
celsius = float(celsius_text)

fahrenheit = round(celsius * 9 / 5 + 32, 1)

print(f"{celsius:g}°C is {fahrenheit}°F.")
```

**Partner usability test:** The partner understood the numbers but could not tell which direction the conversion went.

**Revision:** Add one line stating the conversion direction:

```python
print("Conversion used: Celsius → Fahrenheit")
```

**60-second demo notes:** "I built a Celsius-to-Fahrenheit converter. I chose `float()` because temperatures can include decimals. My boundary test at 0°C confirmed the formula still gives the well-known freezing point, 32°F. After feedback, I added a line stating the conversion direction."

Use this worked example as a model for structure—not as a program to copy. Your own tool must solve a different problem from the briefs below.

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

## If You Are Stuck

Work through these hints in order before asking for a full answer:

1. Reread your Design Card. If you cannot say the formula in one sentence, you are not ready to code it.
2. Check the pipeline: collect → convert → calculate → communicate (Lessons 4–5).
3. Confirm each input's type: whole counts use `int()` (Lesson 4); decimals use `float()` (Lesson 5).
4. Build and run one stage at a time instead of the whole program at once.
5. Compare your structure to the Worked Example above.
6. Ask a partner to read your Design Card aloud and point out the first unclear part.

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
