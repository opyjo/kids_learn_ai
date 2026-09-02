---
title: "Python Does Math!"
description: "Use variables and the four arithmetic operators to build and test a useful score tracker."
difficulty: "beginner"
order_index: 2
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # Score Tracker — predict before running
  round_one = 12
  round_two = 8

  total = round_one + round_two
  difference = round_one - round_two

  # TODO: calculate double the round_one score
  # TODO: calculate the average of the two rounds
  # TODO: show each result with a clear label
class_activities: |
  ## Scoreboard Studio

  **Predict:** Use `round_one = 12` and `round_two = 8` to predict the total, difference, doubled score, and average.

  **Build:** Complete a score tracker using variables and all four operators: `+`, `-`, `*`, and `/`.

  **Test:** Change only the two starting variables and test these score pairs: `10 and 6`, `5 and 5`, and `0 and 8`. Record expected and actual answers.

  **Exchange:** A partner invents a new pair of scores for your program. They check whether every label makes sense.

  **Improve:** Rename unclear variables or add one useful calculation of your own.

  The goal is not a page of unrelated answers. It is one small program whose values work together.
take_home_assignment: |
  ## Homework: Event Planner

  Plan an imaginary party, tournament, or club event with number variables such as guests, tables, tickets, points, or snacks.

  Build one connected program that:

  1. stores at least four numbers in clearly named variables;
  2. uses `+`, `-`, `*`, and `/` meaningfully;
  3. saves calculations in result variables;
  4. displays four labelled facts about the event;
  5. includes a comment explaining each calculation; and
  6. is tested by changing the starting numbers twice.

  Submit your Pickcode project link and state one thing that changed when you used the second set of values.
ai_activities: |
  ## AI Lab: Humans Design the Score

  A computer can combine clues into a score:

  ```python
  adventure = 8
  humour = 6
  scary = 2
  match_score = adventure * 2 + humour - scary
  ```

  Predict the result, run it, then change one clue. Which part of the result changed?

  The computer follows the formula exactly, but a human chose the clues and decided that adventure counts twice. Discuss why a calculated score is not automatically fair or useful.
---

# Term 2, Lesson 2: Python Does Math! 🧮

**Course:** Term 2: Math Wizard  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 2 of 9

---

## Your Mission

Today you will turn variables into a working model: one program where several numbers describe the same situation.

You will:

- use `+`, `-`, `*`, and `/`;
- store calculations in variables;
- predict results before running code;
- test the same program with different starting values; and
- improve labels so another person can understand the results.

## 1. Operator Match-Up

Match each story to an operator before opening Pickcode:

| Story | Operator |
| --- | --- |
| Combine points from two rounds | `+` |
| Find how many more points one player has | `-` |
| Award five points for every star | `*` |
| Share a total equally | `/` |

Python uses `*` for multiplication and `/` for division.

## 2. Predict, Then Check

Use these starting values:

```python
red_points = 18
blue_points = 6
```

Predict each answer on paper:

```python
combined = red_points + blue_points
lead = red_points - blue_points
triple_blue = blue_points * 3
equal_share = red_points / blue_points
```

Now type and run the code. If a prediction differs from Python, explain why before changing anything.

## 3. Values, Calculations, Results

A useful math program usually separates three jobs:

```python
# Starting values
games = 4
points_per_game = 25

# Calculation
total_points = games * points_per_game

# Communication
print(f"Total points: {total_points}")
```

This structure makes testing easy: change the starting values and the calculation updates automatically.

### Improve the model

Add a `bonus_points` variable. Update the total so it includes the bonus. Predict the new answer before running.

## 4. Division Creates Decimals

Python's `/` produces a decimal value:

```python
total = 15
players = 3
share = total / players
```

The result is `5.0`. Python calls a decimal number a **float**. You will learn how to collect decimal input and clean long answers in Lesson 5.

For today, notice what `/` does and use values that are safe to divide. Never divide by zero.

## 5. Build: Scoreboard Studio

Your score tracker needs:

- two starting score variables;
- a total;
- a difference;
- one multiplied score;
- an average using division; and
- clear output labels.

Plan before coding:

| Result | Formula in words | Expected answer for 12 and 8 |
| --- | --- | --- |
| Total | first plus second | |
| Difference | first minus second | |
| Doubled first score | first times two | |
| Average | total divided by two | |

Complete the table, then build from the starter.

## 6. Test the Model

Change only the input variables for each test:

| Scores | Expected total | Expected difference | Expected average | Pass? |
| --- | ---: | ---: | ---: | --- |
| 10 and 6 | | | | |
| 5 and 5 | | | | |
| 0 and 8 | | | | |

Do not rewrite the formulas for each test. A strong model works when its starting values change.

## 7. Partner Review

Let a partner choose a fourth score pair. Ask them:

- Can you tell what every result means?
- Do the variable names describe their values?
- Which calculation would make the tracker more useful?

Make one improvement based on the feedback.

## Challenge Ladder

### Level 1: Team Total ⭐

Model points for three players and calculate the team total.

### Level 2: Snack Budget ⭐⭐

Store a budget, number of snacks, and price per snack. Calculate the cost and money remaining using fixed values.

### Level 3: Design a Model ⭐⭐⭐

Invent a connected scenario that uses all four operators. Write the expected answers before running it.

## Common Bugs

| Symptom | Check |
| --- | --- |
| Multiplication error | Use `*`, not `x` |
| Division error | Use `/` and ensure the divisor is not zero |
| `NameError` | Check variable spelling and capitals |
| Correct number, unclear meaning | Add a label and unit |

## Exit Ticket

Given:

```python
round_one = 9
round_two = 7
```

Write one line that saves the average in a variable. Then explain why changing the starting variables is a better test than rewriting the entire program.

## Next Lesson

Next you will add exponents, equal groups, leftovers, and parentheses to your math toolbox.
