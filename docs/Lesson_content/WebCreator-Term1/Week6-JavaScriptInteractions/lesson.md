---
title: "Make the Page Respond"
description: "Use JavaScript variables, events, and decisions to build a small interactive action chooser."
difficulty: "beginner"
order_index: 6
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
        <title>Choose a Helpful Action</title>
      </head>
      <body>
        <main class="app">
          <p class="eyebrow">AI FOR GOOD</p>
          <h1>Choose a helpful action</h1>
          <p>Select your available time. The page will suggest one small step.</p>

          <div class="choices" aria-label="Choose available time">
            <button type="button" data-minutes="5">I have 5 minutes</button>
            <button type="button" data-minutes="15">I have 15 minutes</button>
          </div>

          <section class="result" aria-live="polite" aria-labelledby="result-heading">
            <h2 id="result-heading">Your action</h2>
            <p id="message">Choose a time to begin.</p>
          </section>
        </main>
      </body>
    </html>
  css: |
    :root { --ink: #172554; --paper: #eef2ff; --brand: #6d28d9; }
    * { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 1rem; font-family: system-ui, sans-serif; background: var(--paper); color: var(--ink); }
    .app { width: min(680px, 100%); background: white; border-radius: 1.5rem; padding: clamp(1.25rem, 5vw, 3rem); box-shadow: 0 20px 60px rgb(23 37 84 / 12%); }
    .eyebrow { color: var(--brand); font-weight: 800; letter-spacing: .12em; }
    .choices { display: flex; flex-wrap: wrap; gap: .75rem; margin-block: 1.5rem; }
    button { border: 0; border-radius: .75rem; padding: .85rem 1rem; background: var(--brand); color: white; font: inherit; font-weight: 700; }
    button:hover { filter: brightness(.9); }
    :focus-visible { outline: .25rem solid #f59e0b; outline-offset: .2rem; }
    .result { min-height: 8rem; border-radius: 1rem; padding: 1rem; background: #dcfce7; }
  javascript: |
    const buttons = document.querySelectorAll("button[data-minutes]");
    const message = document.querySelector("#message");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const minutes = Number(button.dataset.minutes);

        if (minutes === 5) {
          message.textContent = "Write down one question you want to investigate.";
        } else {
          message.textContent = "Ask someone what they need, then record one thing you learned.";
        }
      });
    });
class_activities: |
  ## Core mission

  1. Test both buttons and trace which JavaScript lines run.
  2. Replace both messages with actions that fit your project.
  3. Add a third button for 30 minutes and a matching decision.

  ## Power-up

  Change the result section's background colour after a choice.

  ## Expert challenge

  Store the actions in an object and select them by `minutes` instead of adding more `else if` blocks.
ai_activities: |
  Before asking AI, predict the three places that must change to add a 30-minute choice. Then ask AI for a hint only. Award the AI one point for each correct hint and remove one for anything unnecessary.

  Ask why `aria-live="polite"` is useful when JavaScript changes text.
take_home_assignment: |
  Add one new interaction connected to your project. It may reveal a fact, choose an action, or update a counter. Include a JavaScript comment explaining the event and the result.
---

# JavaScript listens and responds

HTML created the button, CSS styled it, and JavaScript gives it behaviour.

## Select an element

```js
const message = document.querySelector("#message");
```

`const` creates a variable. `document.querySelector` finds the first element matching a CSS-style selector.

## Listen for an event

```js
button.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
});
```

An **event** is something that happens: a click, key press, input change, or form submission. The function runs only when the event occurs.

## Make a decision

```js
if (minutes === 5) {
  // five-minute action
} else {
  // another action
}
```

`===` compares values. The code runs one branch or the other.

## Interaction must stay understandable

When text changes, `aria-live="polite"` can announce the update to a screen reader without interrupting more urgent speech. JavaScript should improve the experience without hiding essential information from people who use the page differently.
