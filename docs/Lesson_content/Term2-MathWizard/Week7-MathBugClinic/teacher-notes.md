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

## Take-Home Math Wizard Readiness Challenge

This challenge replaces the previous three-case-report homework. It has two parts:

1. the 20-question **Math Wizard Homework Challenge — Lessons 1–7** in the lesson's **Quick Check** tab; and
2. the **Event Sharing Tool** submitted as a Pickcode share link in the **Homework** tab.

The platform quiz is open-notes and allows two attempts. A score of 70% means 14 of 20 answers are correct. Treat the first attempt as diagnostic evidence. Before a second attempt, ask the student to review the explanations for missed questions rather than simply memorizing answer positions.

Before students begin the Pickcode task, model the input format without revealing the calculations: enter prices as numbers such as `2.50` without a dollar sign, and enter item/friend counts as whole numbers such as `8` rather than `8.0`. Zero items is a valid boundary test. Zero friends is not valid because the program would divide by zero.

### Platform Quiz Answer Key

| # | Correct answer | What it checks |
| ---: | --- | --- |
| 1 | `ticket_price` | A variable name should describe the value it stores. |
| 2 | **True** | `input()` returns a string, even when the user types digits. |
| 3 | `73` | `"7" + "3"` joins two strings; it does not add numbers. |
| 4 | `average = (score_one + score_two) / 2` | Parentheses make Python add both scores before division. |
| 5 | `20` | Numeric variables are added with `+`. |
| 6 | `5.0, a float` | Ordinary division with `/` produces a float. |
| 7 | `4` | `23 // 5` counts four complete groups. |
| 8 | `3` | `23 % 5` returns the three items left over. |
| 9 | `2 ** 6` | `**` is Python's exponent operator. |
| 10 | `11` | Multiplication happens before addition: `2 * 3`, then `+ 5`. |
| 11 | `first_number` input → `second_number` input → calculate `total` → print `total` | Collect and convert before calculating; calculate before communicating. |
| 12 | Change `int()` to `float()` | Decimal text such as `4.75` requires `float()`. |
| 13 | price input → quantity input → calculate `total` → formatted print | Correct receipt pipeline and mixed numeric types. |
| 14 | `7.89` | `round(7.891, 2)` keeps two decimal places. |
| 15 | `f"Total: ${total:.2f}"` | The leading `f` enables interpolation and `:.2f` displays exactly two decimal places. |
| 16 | **False** | Rounding improves readability; it does not repair inaccurate data or a bad rule. |
| 17 | Reproduce and record → classify → make the smallest fix → run planned tests | Evidence-based debugging order. |
| 18 | **Logic bug** | The code runs, but multiplication does not match the goal of totaling scores. |
| 19 | collect `distance_text` → convert to `distance_km` → calculate `miles` → print labelled miles | Complete decimal conversion pipeline and usable output. |
| 20 | Run an ordinary case, a zero-quantity case, and a decimal case | Varied tests provide stronger evidence than repeating one easy case. |

### Misconception Map

Use missed questions to choose a short review before Lesson 8:

| Missed questions | Review focus |
| --- | --- |
| 1 | Meaningful variable names |
| 2–3 | Strings, `input()`, and numbers |
| 4, 10 | Parentheses and operation order |
| 5–6 | Basic arithmetic and division results |
| 7–9 | Floor division, remainder, and powers |
| 11, 13, 19 | Collect → convert → calculate → communicate |
| 12 | Choosing `int()` versus `float()` |
| 14–16 | Rounding, f-strings, and responsible precision |
| 17–18 | Debugging cycle and bug categories |
| 20 | Planning varied tests |

## Pickcode Reference Solution

This is a teacher reference, not starter code to distribute. Accept different welcome messages, prompts, variable names, and output wording when the program meets the requirements and the student can explain it.

```python
# ==================================
# EVENT SHARING TOOL
# Builder: Teacher reference
# ==================================

# 1. Welcome
print("Welcome to the Event Sharing Tool!")
print("The number of friends must be greater than zero.")

# 2. Collect and convert
item_price = float(input("Price of one item (for example, 2.50): $"))
number_of_items = int(input("Number of items (whole number, for example, 8): "))
number_of_friends = int(input("Number of friends (whole number, 1 or more): "))

# 3. Calculate and save
total_cost = item_price * number_of_items
cost_per_friend = total_cost / number_of_friends
items_per_friend = number_of_items // number_of_friends
items_left_over = number_of_items % number_of_friends

# 4. Communicate clear results
print(f"Total cost: ${total_cost:.2f}")
print(f"Cost per friend: ${cost_per_friend:.2f}")
print(f"Complete items per friend: {items_per_friend}")
print(f"Items left over: {items_left_over}")
print("Thanks for using the Event Sharing Tool!")

# 5. Test evidence and reflection
# Students record their expected and actual results here.
```

Do not require `if/else`, loops, or `try/except`. Students have not learned those tools yet. The written instruction that the number of friends must be greater than zero is the expected handling of the division-by-zero limitation. If a student enters `0` friends, explain the resulting `ZeroDivisionError`, let them rerun the program, and use a whole number of `1` or more. Entering `0` items is safe and should produce zero for all four results.

### Expected Test Results

| Price | Items | Friends | Total cost | Cost each | Items each | Left over |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 2.50 | 8 | 4 | 20.00 | 5.00 | 2 | 0 |
| 1.25 | 10 | 3 | 12.50 | 4.17 displayed | 3 | 1 |
| 3.40 | 7 | 2 | 23.80 | 11.90 | 3 | 1 |

For the second test, the unformatted result of `12.5 / 3` continues beyond two decimal places. The displayed `4.17` is correct because the program formats money with `:.2f`.

## Pickcode Marking Rubric — 20 Marks

| Criterion | Marks | Full-credit evidence |
| --- | ---: | --- |
| Inputs and conversions | 3 | Price uses `float()`; item and friend counts use `int()`. |
| Four saved calculations | 5 | Correct `*`, `/`, `//`, and `%` results stored in meaningfully named variables. |
| Variable names | 2 | Names clearly describe their stored values and use lowercase words with underscores. |
| F-string output | 2 | Every result is clearly labelled and displayed with an f-string. |
| Money formatting | 2 | Total cost and cost per friend display exactly two decimal places. |
| Comments and organization | 2 | Comments identify the major collect, calculate, communicate, and test stages. |
| Test evidence | 3 | Both required cases and one student-designed case include expected and actual results. |
| Reflection and limitation | 1 | Reflection answers are present and the greater-than-zero limitation is stated. |
| **Total** | **20** | |

### Combined Readiness Interpretation

Combine the platform quiz score out of 20 with the Pickcode score out of 20:

| Total | Recommended next step |
| ---: | --- |
| 34–40 | Ready to begin the calculator independently. |
| 28–33 | Ready with a short targeted review or normal check-ins. |
| 20–27 | Complete a guided review of the missed concepts before building. |
| Below 20 | Build one supported mini-tool before starting the calculator project. |

Do not use the total alone. A student who reads code successfully but struggles in Pickcode needs building practice; a student with working code but weak explanations needs code-tracing and vocabulary support.

## Looking Ahead

Lesson 8 uses the same clinic cycle to verify the capstone calculator.
