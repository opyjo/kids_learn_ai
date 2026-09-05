---
title: "AI Debug Studio"
description: "Practise predicting, testing, and evaluating AI debugging advice without handing over the project."
difficulty: "intermediate"
order_index: 7
course_slug: "web-creator-term-1-foundations"
is_premium: true
requires_trinket: false
starter_files:
  html: |
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Fair Idea Checker</title>
      </head>
      <body>
        <main class="app">
          <p class="eyebrow">DEBUG STUDIO</p>
          <h1>Fair idea checker</h1>
          <p>Use these questions before calling a technology idea “helpful.”</p>
          <button id="check-button" type="button">Show a check</button>
          <section class="result" aria-live="polite">
            <h2>Question <span id="question-number">0</span></h2>
            <p id="question">Press the button to begin.</p>
          </section>
        </main>
      </body>
    </html>
  css: |
    :root { --ink: #172554; --paper: #fff7ed; --brand: #c2410c; }
    * { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 1rem; font-family: system-ui, sans-serif; background: var(--paper); color: var(--ink); }
    .app { width: min(680px, 100%); background: white; border-radius: 1.5rem; padding: 2rem; }
    .eyebrow { color: var(--brand); font-weight: 800; }
    button { border: 0; border-radius: .75rem; padding: .85rem 1rem; background: var(--brand); color: white; font: inherit; font-weight: 700; }
    :focus-visible { outline: .25rem solid #2563eb; outline-offset: .2rem; }
    .result { margin-top: 1rem; min-height: 9rem; border-radius: 1rem; padding: 1rem; background: #ffedd5; }
  javascript: |
    const questions = [
      "Who helped define the real problem?",
      "What information would the idea collect?",
      "Who could be left out?",
      "How would a person correct a mistake?"
    ];

    const button = document.querySelector("#check-button");
    const question = document.querySelector("#question");
    const questionNumber = document.querySelector("#question-number");
    let currentIndex = 0;

    button.addEventListener("click", () => {
      question.textContent = questions[currentIndex];
      questionNumber.textContent = String(currentIndex + 1);
      currentIndex = (currentIndex + 1) % questions.length;
    });
class_activities: |
  ## Core mission

  1. Predict the first five button results, then test your prediction.
  2. Add one fairness, privacy, or accessibility question.
  3. Introduce one controlled bug, record the symptom, and repair it.

  ## Power-up

  Add a Reset button that returns the counter and message to their starting values.

  ## Expert challenge

  Randomize the question without showing the same question twice in a row. Explain how you tested the edge case.
ai_activities: |
  Use the **debugging agreement**:

  1. Describe the expected result.
  2. Describe the actual result.
  3. Share only the smallest relevant code section.
  4. Ask for a clue, not a complete replacement.
  5. Test the clue and explain the fix yourself.

  Rate the AI advice: **correct**, **partly useful**, **unnecessary**, or **unsafe**. AI does not earn trust merely by sounding confident.
take_home_assignment: |
  Complete a mini test report with three rows: action tested, expected result, actual result. Include one keyboard test and one narrow-screen test.
---

# Debugging is an investigation

A bug is a difference between what you expected and what happened. Good debugging begins with a precise observation—not random changes.

## A repeatable loop

1. **Predict** what should happen.
2. **Reproduce** the problem reliably.
3. **Reduce** it to the smallest relevant part.
4. **Change one thing.**
5. **Test again.**
6. **Explain** why the fix worked.

## Read the moving index

```js
question.textContent = questions[currentIndex];
currentIndex = (currentIndex + 1) % questions.length;
```

The first line uses the current position. The second moves to the next position. `% questions.length` wraps back to zero after the final item.

## AI can suggest; evidence decides

AI debugging advice may misunderstand the problem, invent an API, remove accessibility, or replace more code than necessary. A useful prompt gives expected and actual behaviour, but it should not contain private information or passwords.

The learner owns the final decision. If you cannot explain the fix, you have not finished debugging yet.
