---
title: "A Website for Everyone"
description: "Improve headings, keyboard focus, labels, contrast, and motion so more people can use your site."
difficulty: "beginner"
order_index: 5
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
        <title>Accessible AI for Good</title>
      </head>
      <body>
        <a class="skip-link" href="#main-content">Skip to main content</a>

        <header class="hero">
          <p class="eyebrow">AI FOR GOOD</p>
          <h1>Technology should include everyone</h1>
          <p>We test our idea with different people, devices, and ways of using the web.</p>
        </header>

        <main id="main-content">
          <section aria-labelledby="principles-heading">
            <h2 id="principles-heading">Our design promises</h2>
            <div class="card-grid">
              <article class="card"><h3>Clear</h3><p>Use words people understand.</p></article>
              <article class="card"><h3>Flexible</h3><p>Support keyboards, zoom, and different screens.</p></article>
              <article class="card"><h3>Respectful</h3><p>Ask what people need instead of guessing.</p></article>
            </div>
          </section>

          <button id="promise-button" type="button">Read our promise</button>
          <p id="promise" tabindex="-1"></p>
        </main>
      </body>
    </html>
  css: |
    :root { --ink: #172554; --paper: #eff6ff; --brand: #6d28d9; --focus: #f59e0b; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: system-ui, sans-serif; line-height: 1.65; background: var(--paper); color: var(--ink); }
    .hero, main { width: min(900px, 92%); margin-inline: auto; }
    .hero { padding-block: 3rem 2rem; }
    .eyebrow { color: var(--brand); font-weight: 800; }
    .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem; }
    .card { background: white; border-radius: 1rem; padding: 1.25rem; }
    button { margin-block: 1.5rem; border: 0; border-radius: .75rem; padding: .8rem 1rem; background: var(--brand); color: white; font: inherit; font-weight: 700; }

    :focus-visible { outline: .25rem solid var(--focus); outline-offset: .2rem; }

    .skip-link { position: absolute; left: 1rem; top: -5rem; padding: .75rem; background: white; color: var(--ink); }
    .skip-link:focus { top: 1rem; }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { scroll-behavior: auto !important; transition: none !important; }
    }
  javascript: |
    const button = document.querySelector("#promise-button");
    const promise = document.querySelector("#promise");

    button.addEventListener("click", () => {
      promise.textContent = "We will test with people, protect privacy, and keep learning.";
      promise.focus();
    });
class_activities: |
  ## Core mission

  1. Use the Tab key to move through the page. Describe where focus goes.
  2. Check that every section has a useful heading.
  3. Rewrite one difficult sentence using clearer words.

  ## Power-up

  Add a second button and ensure it has a visible keyboard focus style.

  ## Expert challenge

  Inspect the button interaction. Explain why moving focus to the new message can help a keyboard or screen-reader user.
ai_activities: |
  Ask AI to conduct an accessibility review of the HTML and CSS, but require it to list **questions**, not replacement code. Test each suggestion before deciding whether it is useful.

  Ask: “Who might be excluded if a website only works with a mouse?” Add at least one group the AI overlooked.
take_home_assignment: |
  Complete a five-point accessibility check: heading order, keyboard focus, readable contrast, plain language, and usable narrow-screen layout. Record one improvement in an HTML comment.
---

# Accessibility is part of good design

Accessibility means designing so people with different bodies, senses, devices, languages, and situations can use what you create. It is not an optional decoration added at the end.

## Use real elements

A real `<button>` can be reached with a keyboard and has built-in meaning. A clickable `<div>` does not automatically provide those behaviours.

## Keep focus visible

Keyboard users need to see which control is active:

```css
:focus-visible {
  outline: 4px solid orange;
  outline-offset: 3px;
}
```

Never remove an outline without replacing it with an equally clear focus style.

## Headings are a map

Headings help everyone scan, and screen-reader users may navigate directly between them. Do not choose `<h3>` merely because it looks smaller; choose it because it sits under an `<h2>`.

## Respect user preferences

Some people experience dizziness or nausea from animation. `prefers-reduced-motion` lets a page respect their device setting.

The most important accessibility habit is to involve people rather than assuming that one automated check—or one AI answer—understands every need.
