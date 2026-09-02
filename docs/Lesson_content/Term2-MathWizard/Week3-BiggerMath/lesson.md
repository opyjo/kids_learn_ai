---
title: "Bigger Math!"
description: "Use powers, equal groups, leftovers, and parentheses to solve a fair-sharing challenge."
difficulty: "beginner"
order_index: 3
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # Fair Share Planner
  items = 23
  teams = 5

  # Predict both answers before writing code.
  equal_share = 0  # TODO: use //
  leftovers = 0   # TODO: use %

  print(f"Each team gets {equal_share} items.")
  print(f"Items left over: {leftovers}")

  # Power prediction: what is 2 ** 6?
class_activities: |
  ## Fair Share Lab

  **Model it:** Use 23 counters, drawings, or marks and split them among 5 teams. Record the equal share and leftovers.

  **Build it:** Complete the Fair Share Planner using `//` and `%`.

  **Test it:** Try `20 and 5`, `24 and 5`, and `7 and 10`. Predict every result before running.

  **Investigate powers:** Start at 1 point and double it for six rounds. Predict `2 ** 6`, then check with Python.

  **Solve a parentheses puzzle:** Compare `5 + 2 * 3` with `(5 + 2) * 3` and explain why the answers differ.

  **Exchange and improve:** A partner invents a fair-sharing scenario for your program and checks its labels.
take_home_assignment: |
  ## Homework: Theme Park Planner

  Create one connected program about a theme park, sports day, space crew, or another theme.

  It must:

  1. use `//` to calculate complete groups;
  2. use `%` to calculate leftovers;
  3. use `**` to model repeated doubling or possible combinations;
  4. compare one expression with and without parentheses;
  5. store results in named variables;
  6. include expected answers for three tests; and
  7. explain the results with clear labels.

  Submit the Pickcode link and one sentence explaining when `%` is more useful than `/`.
ai_activities: |
  ## AI Lab: Calculation Rules Must Be Checkable

  Powers can describe fast-growing possibilities, `//` and `%` can organize examples into batches, and parentheses control scoring formulas.

  Investigate:

  ```python
  possible_patterns = 2 ** 8
  complete_batches = 67 // 10
  leftover_examples = 67 % 10
  ```

  Predict all three results. A computer follows the written rules exactly, so humans must check that a formula matches its intended purpose.
---

# Term 2, Lesson 3: Bigger Math! 🚀

**Course:** Term 2: Math Wizard  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 3 of 9

---

## Your Mission

Today you will solve problems where ordinary division does not tell the whole story.

You will:

- use `**` for powers;
- use `//` for complete groups;
- use `%` for leftovers;
- control calculation order with parentheses; and
- build and test a Fair Share Planner.

## 1. Start with a Real Sharing Problem

There are 23 game cards and 5 teams.

Before coding, use counters or draw marks to answer:

- How many complete cards can each team receive?
- How many cards remain?

Ordinary division gives `4.6`, but a team cannot receive 0.6 of a card. Python provides two operators for the two useful answers.

## 2. Complete Groups with `//`

Floor division answers “how many complete groups?”

```python
items = 23
teams = 5
equal_share = items // teams
```

`equal_share` is `4`.

The operator does not round to the nearest whole number. It keeps only the number of complete groups.

## 3. Leftovers with `%`

Modulo answers “what remains?”

```python
leftovers = items % teams
```

`leftovers` is `3`.

Together, the results tell the whole sharing story:

```python
print(f"Each team gets {equal_share} cards.")
print(f"Cards left over: {leftovers}")
```

### Check the relationship

Use the values to verify:

`teams × equal share + leftovers = original items`

For 23 items and 5 teams: `5 × 4 + 3 = 23`.

## 4. Build: Fair Share Planner

Complete the starter, then give the numbers meaning. Choose cards, stickers, players, snacks, or another countable item.

Your program must report:

- the original number of items;
- the number of teams;
- the equal share; and
- the leftovers.

Test it:

| Items | Teams | Expected share | Expected leftovers | Pass? |
| ---: | ---: | ---: | ---: | --- |
| 20 | 5 | | | |
| 24 | 5 | | | |
| 7 | 10 | | | |

Explain the surprising third test to a partner.

## 5. Powers: Repeated Multiplication

`**` means “raise to a power”:

```python
possible_patterns = 2 ** 6
```

This represents six binary choices, each with two possibilities.

Try an unplugged doubling experiment:

| Round | Amount |
| ---: | ---: |
| 0 | 1 |
| 1 | 2 |
| 2 | 4 |
| 3 | |
| 4 | |
| 5 | |
| 6 | |

Complete the table before asking Python to calculate `2 ** 6`.

## 6. Parentheses Communicate Intent

Predict both results:

```python
score_a = 5 + 2 * 3
score_b = (5 + 2) * 3
```

Python performs powers first, then multiplication and division, then addition and subtraction. Parentheses tell Python—and the reader—to calculate a chosen part first.

Do not merely memorize an acronym. Trace the calculation in stages and explain which part happens first.

## 7. Partner Scenario Test

A partner gives your Fair Share Planner a new situation and values. They should be able to tell:

- what to change;
- what each result means; and
- whether the two results recombine into the original total.

Improve one variable name or output label after their test.

## Challenge Ladder

### Level 1: Sharing Checker ⭐

Complete and pass all three required tests.

### Level 2: Boxes and Shelves ⭐⭐

Calculate how many full boxes can be filled, how many items remain, and how many shelves are needed for the complete boxes.

### Level 3: Power Story ⭐⭐⭐

Create a short story where something doubles each round. Build a variable-based model and test at least three different numbers of rounds by changing one starting variable.

## Common Bugs

| Symptom | Check |
| --- | --- |
| Decimal share | You probably used `/` instead of `//` |
| Share and leftovers are reversed | Check which variable uses `%` |
| Unexpected expression result | Trace order and add intentional parentheses |
| `^` gives a strange answer | Powers use `**`, not `^` |

## Exit Ticket

For 31 students placed into teams of 4, write expressions for:

- the number of complete teams;
- the students left over; and
- a check that recombines the values into 31.

## Next Lesson

You already know how to ask questions with `input()`. Next lesson you will convert those answers into whole numbers so other people can operate your math tools.
