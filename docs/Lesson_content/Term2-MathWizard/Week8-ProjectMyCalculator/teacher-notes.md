# Term 2, Lesson 8: Project — My Calculator! 🧮

## Teacher's Guide

**Duration:** 60 minutes | **Week:** 8 of 9

## Purpose

This is the first time students build the complete four-operation calculator. Student materials intentionally omit a full solution. Assess planning, independent construction, testing, feedback, revision, and explanation—not decorative output alone.

## Objectives

Students can plan a multi-stage program, use `float()` for decimal-capable input, save four correct results, format output, run a test matrix, respond to peer QA, and state a known limitation.

## Lesson Flow

| Time | Activity |
| --- | --- |
| 0–8 min | Design card and test predictions |
| 8–28 min | Core build through checkpoints A–D |
| 28–38 min | Required test matrix and repairs |
| 38–46 min | Peer QA |
| 46–55 min | Revision, formatting, and comments |
| 55–60 min | Demo rehearsal and exit ticket |

## Facilitation Rules

- Do not project or distribute the full solution at the start.
- Approve the design card and test predictions before students code.
- Release one hint at a time.
- Require result variables rather than four large expressions embedded only in output.
- Use `float()` so the capstone improves on the previous integer-only design.
- Require a non-zero second number in tests. Students document division by zero as a limitation until Term 3 decisions make safe handling possible.
- Menus, `if/else`, loops, and `try/except` are out of scope.
- Students may add only extensions they can explain.

## Private Reference Solution

Use this for diagnosis after a student has attempted the checkpoint:

```python
print("=== MY CALCULATOR ===")
first = float(input("First number: "))
second = float(input("Second number (not zero): "))

addition = first + second
subtraction = first - second
multiplication = first * second
division = first / second

print(f"{first:g} + {second:g} = {addition:.2f}")
print(f"{first:g} - {second:g} = {subtraction:.2f}")
print(f"{first:g} × {second:g} = {multiplication:.2f}")
print(f"{first:g} ÷ {second:g} = {division:.2f}")
print("Thanks for calculating!")
```

The `:g` input formatting is optional; students only need the previously taught `:.2f` result format.

## Checkpoint Conferences

Ask one question at each checkpoint:

- **A:** Can a first-time user tell what the program does?
- **B:** Why did you choose `float()`?
- **C:** Where is each result saved?
- **D:** Can a reviewer see the numbers, operator, and tidy answer?
- **E:** Which comments show the program stages?

## Assessment Rubric

| Evidence | Weight |
| --- | ---: |
| Correct collect/convert pipeline | 20% |
| Four saved and correct calculations | 25% |
| Clear, tidy communication | 15% |
| Three predicted and recorded tests | 20% |
| Peer feedback and revision | 10% |
| Explanation and limitation | 10% |

## Support

Provide the ordered checkpoint list, one conversion hint, and four result variable names. Do not give a complete pasteable program.

## Extension

Allow known operators (`**`, `//`, `%`), an additional test, or improved presentation. Decline premature menus and exception handling kindly: add them to a “future upgrades” note for after Term 3.

## Showcase Preparation

Every student should rehearse one test and one explanation. The Lesson 9 showcase should value reasoning and improvement, not only visual polish.
