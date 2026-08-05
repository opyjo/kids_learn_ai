# Term 2, Lesson 4: Numbers from Users! 🔢

## Teacher's Guide

**Course:** Term 2: Math Wizard

**Duration:** 60 minutes

**Term:** 2 of 8 | **Week:** 4 of 9

---

## Purpose

This lesson is the bridge between static maths and interactive maths. It does **not** re-teach `input()` as a new function. Students learned it in Term 1 and refreshed it in Term 2, Lesson 1. The new learning is the pipeline:

`input() → text → int() → calculation → useful result`

Students should spend most of the lesson predicting, building, testing, and improving a small tool.

## Learning Objectives

Students will be able to:

1. Explain why `input()` returns a string.
2. Predict the difference between `"7" + "3"` and `7 + 3`.
3. Convert whole-number text using `int()`.
4. Build a single-purpose numerical tool.
5. Plan and record test cases.
6. improve prompts and outputs after peer feedback.

## Lesson Flow

| Time | Activity | Teacher role |
| --- | --- | --- |
| 0–7 min | Prediction warm-up | Collect predictions before running code |
| 7–15 min | `input()` recall and string experiment | Ask questions; avoid a full re-teach |
| 15–25 min | Model the four-stage pipeline | Live-code one example line by line |
| 25–43 min | Number Machine design lab | Coach; reveal hints only when needed |
| 43–52 min | Planned testing | Require expected answers before runs |
| 52–57 min | Partner usability test and revision | Listen for actionable feedback |
| 57–60 min | Exit ticket | Check conversion understanding |

Target ratio: no more than 15 minutes of teacher coding and at least 30 minutes of student building/testing.

## Preparation

- Load the starter code but do not pre-complete its TODOs.
- Prepare three hint cards:
  1. `whole_number = int(number_text)`
  2. “Check that both numeric inputs were converted.”
  3. “Say what the answer means, including its unit.”
- Pair students for the usability test.
- Keep the full four-operation calculator out of this lesson; it is the Week 8 capstone.

## Teaching Moves

### Prediction warm-up

Show the two expressions without running them:

```python
"7" + "3"
7 + 3
```

Every student commits to a prediction. Ask two students to justify different answers before running the code. The conceptual contrast matters more than memorising terminology.

### Pipeline demonstration

Live-code only one example:

```python
minutes_text = input("Hours: ")
hours = int(minutes_text)
minutes = hours * 60
print(f"That is {minutes} minutes.")
```

Deliberately use the imperfect variable name `minutes_text`, then invite students to improve it to `hours_text`. This makes naming part of the design conversation.

Ask students to identify the collect, convert, calculate, and communicate lines.

### Build phase

Students choose a purpose and write the tool from the scaffold. Do not distribute a finished answer. If a student is stuck, ask:

1. What information does your tool need?
2. Which answers arrive as text?
3. Which operator solves the problem?
4. What should the result say to a user?

### Testing phase

Insist on expected answers before execution. A test without an expectation is experimentation, not verification.

The zero test may reveal a division-by-zero problem for students who choose division. Do not introduce `if` yet. Ask them to document that the second input must be non-zero; safe conditional handling begins in Term 3.

## Differentiation

### Support

- Provide the pipeline with blanks.
- Let students begin with one input and multiplication by a fixed value.
- Use a paired trace: one student is Python and the other supplies values.

### Extension

- Add a second related result without recreating all four calculator operations.
- Use `//` and `%` to report equal shares and leftovers.
- Ask the student to design a fourth test that could expose a mistake.

## Common Misconceptions

| Misconception | Response |
| --- | --- |
| “I typed a number, so it is already a number.” | Ask the student to predict `number_text + number_text`. |
| `int(input(...))` is the only correct style | Explain that the two-step version makes the pipeline easier to inspect. |
| More operations make the tool better | Reinforce that one clearly solved problem is the goal. |
| A program that runs once is finished | Require the test table and partner run. |

## Assessment Evidence

By the end, collect or observe:

- one correct explanation of the string/number difference;
- a working collect–convert–calculate–communicate pipeline;
- three recorded test cases; and
- one revision prompted by peer feedback.

## Homework Review Criteria

The One-Job Number Tool is successful when it:

- solves one identifiable problem;
- converts all numeric input with `int()`;
- labels the answer;
- includes at least three test cases; and
- does not become an early copy of the Week 8 calculator.

## Looking Ahead

Lesson 5 expands the pipeline from whole-number `int()` input to decimal `float()` input. It also fulfils Lesson 2's promise to clean up long decimal answers with `round()` and formatting.
