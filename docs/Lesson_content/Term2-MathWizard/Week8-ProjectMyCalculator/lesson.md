---
title: "Project — My Calculator!"
description: "Plan, build, test, and polish your complete Term 2 calculator without copying a finished solution."
difficulty: "beginner"
order_index: 8
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # ==================================
  # MY CALCULATOR
  # Builder:
  # ==================================

  # PLAN
  # First numeric variable:
  # Second numeric variable:
  # Required operations: +  -  *  /
  # Known limitation:

  # 1. Welcome and instructions

  # 2. Collect and convert two decimal-capable numbers

  # 3. Calculate and SAVE four results

  # 4. Display labelled, tidy results

  # 5. Thank the user
class_activities: |
  ## Calculator Project Studio

  **Plan (8 min):** Complete the project design card and calculate expected answers for the required tests.

  **Build the core (20 min):** Collect two numbers with `float()`, save the four results in variables, and display labelled answers. Build from the scaffold—not a finished solution.

  **Test (10 min):** Run the required test matrix and repair one issue at a time.

  **Peer QA (8 min):** A partner uses the calculator, checks one result by hand, and records one strength and one improvement.

  **Polish (9 min):** Improve instructions, names, formatting, comments, and decimal display.

  **Demo rehearsal (5 min):** Practise a 60-second explanation of one design choice, one test, and one improvement.

  Optional extensions may use exponents, modulo, or floor division. Do not add menus, `if/else`, or error handling before those concepts are taught.
take_home_assignment: |
  ## Homework: Showcase-Ready Calculator

  Finish and test the calculator for Lesson 9.

  Required evidence:

  1. a clear welcome and instructions;
  2. two numeric inputs converted with `float()`;
  3. saved results for addition, subtraction, multiplication, and division;
  4. labelled output with tidy decimal formatting;
  5. comments separating the program stages;
  6. a completed test table;
  7. one improvement based on peer feedback; and
  8. a written limitation: the second number must not be zero because conditional handling begins in Term 3.

  Prepare a 60-second showcase demonstration. Do not add code you cannot explain.
ai_activities: |
  ## AI Lab: Exact Rules and Predictions Are Different

  A calculator follows exact written rules. The same valid input produces the same correct result. AI systems often make predictions based on patterns, and those predictions can be wrong.

  Make the calculator easy to check by showing the numbers, operation, and result. Then imagine one optional future feature that suggests a practice problem. Explain whether that feature uses an exact rule or a prediction and how a user could verify it.
---

# Term 2, Lesson 8: Project — My Calculator! 🧮

**Course:** Term 2: Math Wizard  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 8 of 9

---

## The Outcome

Today you create the first complete version of your Term 2 project. The lesson gives you requirements, checkpoints, hints, and tests—but not a finished program to copy.

Your calculator will:

- ask for two numbers;
- support decimal input;
- calculate all four basic operations;
- save each answer in a variable;
- display clear, tidy results; and
- include evidence that you tested it.

## 1. Plan Before Coding

Complete this design card:

| Decision | Your plan |
| --- | --- |
| Calculator name | |
| Welcome message | |
| First prompt | |
| Second prompt | |
| Conversion needed | |
| Four result variable names | |
| Decimal display choice | |
| Known limitation | |

### Required test predictions

Calculate the expected results by hand:

| First | Second | Add | Subtract | Multiply | Divide |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 8 | 2 | | | | |
| 2.5 | 4 | | | | |
| -3 | 6 | | | | |

Do not use zero as the second number because division by zero needs conditional handling, which begins in Term 3.

## 2. Build in Checkpoints

Run the program after every checkpoint.

### Checkpoint A: Welcome

Write a title and one sentence telling the user what the program does. Keep decoration secondary to clarity.

### Checkpoint B: Collect and convert

Ask for two numbers that may contain decimals. Use the Lesson 5 conversion that accepts decimal input.

If stuck, reveal this hint only:

```python
first_number = float(input("First number: "))
```

Write the second line yourself with a matching variable name.

### Checkpoint C: Calculate and save

Create four clearly named result variables:

- addition result;
- subtraction result;
- multiplication result; and
- division result.

Do not place every expression directly inside `print()`. Saving the results makes the program easier to test and explain.

### Checkpoint D: Communicate

For every result, show:

- the first number;
- the operation symbol;
- the second number; and
- the tidy answer.

Use f-strings and the formatting skill from Lesson 5.

### Checkpoint E: Close

Add a short ending and comments that mark the program stages.

## 3. Verify the Core

Run all three required test rows and record actual results:

| Test | Expected matches actual? | Bug or improvement found |
| --- | --- | --- |
| 8 and 2 | | |
| 2.5 and 4 | | |
| -3 and 6 | | |

Check each operation by hand. A program running without an error does not prove that the formula is correct.

## 4. Peer Quality Check

Exchange calculators. The reviewer must:

1. operate the program without coaching;
2. use a new pair of non-zero-divisor values;
3. verify one operation by hand;
4. check the output labels and decimal display;
5. identify one strength; and
6. recommend one specific improvement.

The builder chooses and implements at least one improvement, then reruns the relevant test.

## 5. Project Requirements

### Must have

- [ ] Clear title and instructions
- [ ] Two `float()` inputs
- [ ] Four correct operations
- [ ] Four saved result variables
- [ ] Labelled f-string output
- [ ] Tidy decimal formatting
- [ ] Comments marking stages
- [ ] Three required tests
- [ ] One peer-driven revision
- [ ] Known limitation documented

### Optional extensions using known skills

- [ ] Exponent result
- [ ] Floor-division result
- [ ] Remainder result
- [ ] User's name in the welcome
- [ ] A fourth test designed by the student

Do not add a menu, `if/else`, repeated operation loop, or `try/except` yet. Those are valuable future upgrades after the required concepts are taught.

## 6. Demo Rehearsal

Prepare a 60-second demonstration:

1. State what you built.
2. Run one interesting test.
3. Explain one choice of variable, type, or formatting.
4. Describe one bug or improvement from testing.
5. State the current division-by-zero limitation honestly.

## If You Are Stuck

Use hints in this order:

1. Check the pipeline: collect → convert → calculate → communicate.
2. Compare variable spellings.
3. Check that both inputs use `float()`.
4. Check the operator on each result line.
5. Run only the first required test.
6. Ask a classmate to read the error message aloud with you.

## Exit Ticket

Finish both statements:

- “My strongest evidence that the calculator works is…”
- “One limitation or future improvement is…”

## Next Lesson

Next lesson is the showcase. You will demonstrate the project, explain your reasoning, celebrate your progress, and earn the Term 2 badge.
