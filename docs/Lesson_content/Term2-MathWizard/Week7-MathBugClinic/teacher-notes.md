# Term 2, Lesson 7: The Math Bug Clinic! 🕵️

## Teacher's Guide

**Duration:** 60 minutes | **Week:** 7 of 9

## Purpose

Students practise evidence-based debugging across short cases. The goal is to separate reproducing, classifying, repairing, and verifying. This avoids building the capstone calculator a week early.

## Objectives

Students can distinguish syntax, runtime, logic, and usability problems; record symptoms; make focused repairs; and prove repairs with multiple tests.

## Lesson Flow

| Time | Activity |
| --- | --- |
| 0–7 min | Model the clinic cycle with one tiny typo |
| 7–31 min | Four stations, approximately 6 minutes each |
| 31–41 min | Mixed case: reveal one bug at a time |
| 41–50 min | Write an original case for a partner |
| 50–56 min | Exchange and diagnose |
| 56–60 min | Compare evidence and exit ticket |

## Facilitation Rules

- Students must run the original before editing it.
- Ask for the exact symptom, not “it doesn't work.”
- Require one change at a time in mixed cases.
- A passing original value is not enough; rerun it after the repair and add a second value.
- Treat unclear output as a real defect even when the maths is correct.
- Keep `try/except` and conditional validation out of scope.

## Station Answers

- **A:** `x` should be `*`; syntax problem.
- **B:** decimal price needs `float()`; runtime problem revealed by `4.75`.
- **C:** total should use `+`; logic problem.
- **D:** add conversion direction, unit, and tidy formatting; usability problem.
- **Mixed:** `mile` should be `miles`, then `int()` should become `float()` for `2.5`.

Do not give all answers in advance. Use them to check student case reports.

## Differentiation

**Support:** Assign two stations, provide category cards, and let a partner read the error aloud.

**Extension:** Create a fair mixed case where the first repair exposes a second issue; prepare expected tests and diagnosis privately.

## Assessment

Each completed case needs a recorded symptom, category, focused repair, two expected/actual tests, and a brief evidence statement.

## Homework Boundary

Homework contains three separate case reports. Reject submissions that replace the task with another full calculator.

## Looking Ahead

Lesson 8 uses the same clinic cycle to verify the capstone calculator.
