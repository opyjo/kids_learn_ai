# Term 2, Lesson 5: Decimals & Clean Answers! ✨

## Teacher's Guide

**Course:** Term 2: Math Wizard  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 5 of 9

---

## Purpose

This lesson extends—not repeats—Lesson 4. Students already understand `input()` and `int()`. The new ideas are:

- `float()` for decimal input;
- choosing a type based on meaning;
- `round()` for calculation precision; and
- `:.2f` for human-friendly money display.

The Mini Shop Receipt is deliberately narrower than the Week 8 calculator. It practises one multiplication pipeline and focuses on data type choice, precision, usability, and testing.

## Learning Objectives

Students will be able to:

1. Choose `int()` for counts and `float()` for decimal measurements or prices.
2. Predict why `int("4.75")` fails.
3. Round a calculated value to a chosen number of decimal places.
4. Format money to exactly two decimal places.
5. Build and peer-test a usable receipt.

## Lesson Flow

| Time | Activity | Teacher role |
| --- | --- | --- |
| 0–7 min | Decimal Detective | Gather predictions before executing |
| 7–17 min | `int()` versus `float()` investigation | Facilitate comparison |
| 17–25 min | `round()` and `:.2f` micro-demo | Model only the essential difference |
| 25–43 min | Mini Shop Receipt build | Coach from requirements, not a full solution |
| 43–52 min | Test table | Require expected totals first |
| 52–57 min | Partner shop and revision | Focus feedback on usability |
| 57–60 min | Exit ticket | Check type selection |

Target ratio: approximately 10 minutes explaining, 15 minutes guided investigation, 25 minutes building, and 10 minutes testing/sharing.

## Preparation

- Keep a calculator available for checking expected totals, but have students calculate simple cases themselves first.
- Prepare item cards with sample prices for students who struggle to invent a shop.
- Put these hints on separate cards rather than the main screen:
  - `price = float(price_text)`
  - `quantity = int(quantity_text)`
  - `total = price * quantity`
  - `print(f"Total: ${total:.2f}")`

## Key Teaching Points

### Type follows meaning

Avoid teaching “always use `float()` because it handles everything.” A quantity of three books is meaningfully a whole-number count, while a price can contain decimals.

Ask:

- Can someone buy 2.5 tickets in this imaginary shop?
- Can a bottle hold 2.5 litres?
- Which type communicates each idea best?

### `round()` versus `:.2f`

Keep the distinction practical:

- `round()` gives a rounded numerical value that may be used in later maths.
- `:.2f` controls how a value looks inside an f-string.

Do not explore binary floating-point edge cases with this age group. If a student notices one, acknowledge that computers approximate some decimals and return to the lesson goal.

### Build from requirements

Do not live-code the complete receipt. Model only collection and one conversion, then return to the requirement list. Students should decide variable names, prompts, and the receipt layout.

## Testing Conversation

Use the three required tests to discuss purpose:

- `2.50 × 3` checks ordinary decimal multiplication.
- `1.99 × 2` checks clean money formatting.
- `4.25 × 0` checks a boundary value.

Ask students to calculate the expected result before execution and identify the pipeline stage if actual and expected differ.

## Differentiation

### Support

- Provide a three-column planning sheet: “information,” “type,” and “variable name.”
- Give one conversion hint at a time.
- Allow the receipt to display three clear lines rather than decorative formatting.

### Extension

- Add a fixed delivery cost without decisions.
- Calculate the price of one item after a fixed percentage reduction.
- Add a fourth test designed to expose a formatting problem.

Avoid menus and conditional discounts because `if/else` begins in Term 3.

## Common Mistakes

| Mistake | Coaching prompt |
| --- | --- |
| `int("2.75")` | “Is this a whole-number count or a decimal measurement?” |
| `quantity = float(...)` | “Could this shop sell part of one item?” |
| `print(round(total, 2))` shows `6.5` | “Are you changing the number or controlling its display?” |
| Student copies a four-operation calculator | “What single job is this receipt meant to do?” |

## Assessment Evidence

Look for:

- justified type choices;
- a working receipt with one clear calculation;
- exactly two decimal places in money output;
- three planned tests; and
- one revision after peer use.

## Homework Review

The Potion Recipe Scaler should contain one `float()` input, one `int()` input, multiplication, a rounded result, a unit, and three recorded tests. It should not require decisions, loops, or a full calculator interface.

## Looking Ahead

Lesson 6 shifts from learning individual tools to solving a chosen real-world problem. Students should reuse the pipeline and type-selection habits independently rather than receive another complete worked calculator.
