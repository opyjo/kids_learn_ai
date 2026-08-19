---
title: "The Math Bug Clinic!"
description: "Reproduce, classify, repair, and verify bugs using planned test cases."
difficulty: "beginner"
order_index: 7
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # Bug Clinic Case A
  distance_text = input("Distance in km: ")
  distance = int(distance_text)
  miles = distance * 0.621371
  print(f"Miles: {mile:.2f}")

  # Clinic record
  # 1. Symptoms:
  # 2. Bug type:
  # 3. Smallest fix:
  # 4. Tests proving the fix:
class_activities: |
  ## Rotating Bug Clinic

  Work through four short case files rather than rebuilding the final calculator.

  **Station A — Syntax:** Python cannot understand the code.

  **Station B — Runtime:** The program begins but crashes for a particular input.

  **Station C — Logic:** The program runs but calculates the wrong result.

  **Station D — Usability:** The answer is correct but unclear to the user.

  For every case:

  1. reproduce the symptom;
  2. record the error or wrong output;
  3. classify the bug;
  4. make the smallest reasonable fix;
  5. predict two test results;
  6. run the tests; and
  7. explain the evidence that the bug is fixed.

  Finish by writing one original buggy snippet for another student to diagnose.
take_home_assignment: |
  ## Homework: Three Bug Case Reports

  Diagnose and repair three separate snippets supplied in the lesson: one conversion bug, one calculation bug, and one output bug.

  For each report include:

  - the original symptom;
  - the bug category;
  - the corrected line or lines;
  - two planned tests with expected results; and
  - one sentence explaining why the tests prove the fix.

  Do not submit another completed calculator. The calculator build begins next lesson.
ai_activities: |
  ## AI Lab: Correct Code Can Still Use a Bad Rule

  A program may run perfectly while using an unsuitable scoring rule. Test both the code and the idea:

  ```python
  practice = 5
  teamwork = 3
  progress = practice * teamwork
  ```

  If the stated goal is to total the two scores, the operator is a logic bug. After repairing it, discuss whether the total alone could fairly describe a learner.
---

# Term 2, Lesson 7: The Math Bug Clinic! 🕵️

**Course:** Term 2: Math Wizard

**Duration:** 60 minutes

**Term:** 2 of 8 | **Week:** 7 of 9

---

## Your Mission

A developer does more than notice that something “doesn't work.” They collect evidence, locate the cause, make a focused repair, and prove the result.

You will:

- distinguish syntax, runtime, logic, and usability problems;
- reproduce a bug before changing code;
- read error messages for clues;
- make the smallest useful repair; and
- verify the repair with planned tests.

## Recap: Your Toolkit So Far

Bug-hunting today depends on skills from every earlier Term 2 lesson:

| Skill | Where you learned it | Why it matters today |
| --- | --- | --- |
| `+`, `-`, `*`, `/` | Lesson 2: Python Does Math | Logic bugs often use the wrong operator |
| `int()` and `float()` | Lessons 4–5: Numbers from Users, Decimals & Clean Answers | Runtime bugs often use the wrong conversion |
| `round()` and `:.2f` | Lesson 5: Decimals & Clean Answers | Usability bugs often have messy or missing formatting |
| Design Card, test table, partner feedback | Lesson 6: Math Problem-Solving Lab | The same plan → build → test → revise habit now applies to repairing code instead of writing it |

If a station bug feels unfamiliar, it is testing a skill from one of these lessons—go back and check it.

## 1. The Clinic Cycle

Use this process for every case:

1. **Reproduce** — run the original code and observe.
2. **Record** — copy the error or wrong result.
3. **Classify** — identify the type of problem.
4. **Locate** — find the smallest suspicious section.
5. **Repair** — change one thing at a time.
6. **Verify** — compare actual results with expected tests.
7. **Explain** — state what the evidence proves.

## Warm-Up: Watch the Cycle Once

Before working the stations, watch the seven-step cycle applied to one tiny bug.

```python
plyer_name = "Ama"
print(f"Welcome, {player_name}!")
```

1. **Reproduce** — Run the code exactly as written.
2. **Record** — Copy the exact message: `NameError: name 'player_name' is not defined`.
3. **Classify** — Python understood the grammar, so this is not a syntax problem. It is a runtime problem: the program crashes while running.
4. **Locate** — Compare the two names letter by letter: `plyer_name` and `player_name`.
5. **Repair** — Choose one correct spelling and use it in both places.
6. **Verify** — Predict the new output before rerunning: `Welcome, Ama!`. Then run it.
7. **Explain** — The evidence is the expected greeting appearing exactly once, not merely "the red text is gone."

**Completed case report for this example:**

| Field | Evidence |
| --- | --- |
| Expected behaviour | Prints a welcome message using the stored name |
| Actual symptom | `NameError: name 'player_name' is not defined` |
| Bug category | Runtime |
| Suspected line | The `print` line references a name that was never created |
| Repair | Rename `plyer_name` to `player_name` |
| Test 1 expected/actual | `Welcome, Ama!` / `Welcome, Ama!` |
| Test 2 expected/actual | Change the name to `"Kwame"`; expect `Welcome, Kwame!` / `Welcome, Kwame!` |
| Why the evidence is sufficient | Two different names both produced the exact expected greeting with no error |

Use this same seven-step process and case-report format for every station below.

## 2. Four Bug Categories

| Category | What happens | Example clue |
| --- | --- | --- |
| Syntax | Python cannot understand the code | Missing quote or parenthesis |
| Runtime | Code begins, then crashes | `ValueError` from converting `hello` |
| Logic | Code runs but the result is wrong | Multiplication used instead of addition |
| Usability | Maths is correct but confusing | Result has no label or unit |

One program can contain more than one category.

## 3. Station A: Syntax

```python
points = 6 x 7
print(f"Points: {points}")
```

Clinic record:

- What happened?
- Which symbol should Python use?
- What result do you expect after the repair?
- Which second test would strengthen the evidence?

## 4. Station B: Runtime

```python
price_text = input("Price: $")
price = int(price_text)
double_price = price * 2
print(double_price)
```

Run once with `4`, then with `4.75`.

The first test can pass while the second crashes. Choose a conversion that matches the intended decimal input (the `float()` decision from Lesson 5) and rerun both tests.

## 5. Station C: Logic

```python
round_one = 8
round_two = 6
total = round_one * round_two
print(f"Total points: {total}")
```

Python understands the code. The formula does not match the stated goal—the same operator skill from Lesson 2.

Write two test cases that make the intended addition obvious, repair the operator, and verify both cases.

## 6. Station D: Usability

```python
distance = 7.5
converted = distance * 0.621371
print(converted)
```

The calculation works, but a user cannot tell:

- which direction the conversion used;
- which unit the answer uses; or
- why the decimal is so long.

Improve the output without changing the formula.

## 7. Mixed Case

```python
distance_text = input("Distance in km: ")
distance = int(distance_text)
miles = distance * 0.621371
print(f"Miles: {mile:.2f}")
```

Diagnose this in order:

1. Run with `10`.
2. Record the first symptom.
3. Repair only that cause.
4. Run with `10` again.
5. Run with `2.5` to reveal a second problem.
6. Repair and rerun both tests.

This is why developers fix and test one issue at a time.

## If You Are Stuck

1. Run the original code exactly as given before changing anything.
2. Copy the exact error message or wrong output—do not paraphrase it.
3. Match it to a category using the table in Section 2: syntax, runtime, logic, or usability.
4. Compare suspicious lines letter by letter for spelling, symbols, and punctuation.
5. Change only one line, then rerun before changing anything else.
6. Ask a partner to read the error message aloud with you.

## 8. Write a Case for a Partner

Create a short, single-purpose program with exactly one intentional bug. Do not tell your partner its category.

Your partner must provide:

- the symptom;
- category;
- fix; and
- two passing tests.

Then reveal your intended bug and compare diagnoses.

## Case Report Template

You already planned expected results before testing in Lesson 6's Design Card and test tables. This template asks for the same kind of evidence, applied to repairing code instead of building it.

| Field | Evidence |
| --- | --- |
| Expected behaviour | |
| Actual symptom | |
| Bug category | |
| Suspected line | |
| Repair | |
| Test 1 expected/actual | |
| Test 2 expected/actual | |
| Why the evidence is sufficient | |

## Challenge Ladder

### Level 1: Reproduce and Repair ⭐

Complete Stations A and B with recorded evidence.

### Level 2: Verify ⭐⭐

Complete all stations and provide two tests for each.

### Level 3: Clinic Author ⭐⭐⭐

Write a fair mixed case with two bugs that appear one after the other. Prepare the expected diagnosis privately.

## Exit Ticket

Answer both:

1. Why can “the program ran” not prove that its calculation is correct?
2. Why should a repair be tested with more than the value that originally failed?

## Next Lesson

Next lesson you will plan and build the complete Term 2 calculator. The Bug Clinic habits will help you test it without receiving a finished solution to copy.
