---
title: "Design with CSS"
description: "Create a readable colour system, typography, spacing, and reusable card styles."
difficulty: "beginner"
order_index: 3
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
        <title>My AI for Good Idea</title>
      </head>
      <body>
        <header class="hero">
          <p class="eyebrow">AI FOR GOOD</p>
          <h1>Small ideas can create big change</h1>
          <p class="intro">Our website helps visitors understand one problem and take one safe action.</p>
        </header>

        <main>
          <section>
            <h2>Our mission</h2>
            <div class="card">
              <h3>Notice</h3>
              <p>Learn what people actually need.</p>
            </div>
            <div class="card">
              <h3>Imagine</h3>
              <p>Think of a small way technology might help.</p>
            </div>
          </section>
        </main>
      </body>
    </html>
  css: |
    :root {
      --ink: #172554;
      --paper: #eff6ff;
      --brand: #6d28d9;
      --accent: #fbbf24;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: system-ui, sans-serif;
      line-height: 1.6;
      background: var(--paper);
      color: var(--ink);
    }

    .hero, main {
      width: min(760px, 92%);
      margin-inline: auto;
    }

    .hero { padding-block: 4rem 2rem; }
    .eyebrow { color: var(--brand); font-weight: 800; letter-spacing: .12em; }
    h1 { font-size: clamp(2rem, 7vw, 4rem); line-height: 1.05; margin: .4rem 0 1rem; }

    .card {
      background: white;
      border-left: .4rem solid var(--accent);
      border-radius: 1rem;
      margin-block: 1rem;
      padding: 1.25rem;
      box-shadow: 0 10px 30px rgb(23 37 84 / 10%);
    }
  javascript: |
    // Design first; interaction comes later.
class_activities: |
  ## Core mission

  1. Change the four colour variables while keeping text easy to read.
  2. Add a third card to the HTML.
  3. Change the spacing or border radius and describe what changed.

  ## Power-up

  Give `.intro` a larger font size and a maximum width.

  ## Expert challenge

  Add a second card variation such as `.card--important`. Use a class instead of copying an entire style block.
ai_activities: |
  Ask AI for two colour-palette suggestions for your topic, including hexadecimal colour codes. Test both suggestions yourself. Reject any combination that makes words difficult to read.

  Ask: “What accessibility problem can happen when colour is the only way to communicate meaning?” Explain the answer with an example from your page.
take_home_assignment: |
  Create a tiny design guide at the bottom of your CSS using comments. Record your brand colour, background colour, text colour, and the reason you chose them.
---

# CSS turns structure into a visual system

A useful design is not a pile of random decorations. It is a small set of choices used consistently.

## Select, then declare

```css
h1 {
  color: purple;
  font-size: 3rem;
}
```

`h1` is the **selector**. The lines inside the braces are **declarations** made of properties and values.

## Classes create reusable patterns

HTML assigns a class:

```html
<div class="card">...</div>
```

CSS styles every element with that class:

```css
.card {
  padding: 1rem;
  background: white;
}
```

## The box model

Every element is a box made from content, padding, border, and margin. Padding creates space **inside** the box; margin creates space **outside** it.

## Readability beats decoration

Text needs strong contrast with its background. Colour should support meaning, but it should never be the only signal. A warning can use colour **and** an icon or clear label.

Good designers test their choices. Change one variable, observe the entire system, and keep only changes that make the page clearer.
