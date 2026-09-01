---
title: "Layouts for Every Screen"
description: "Use Flexbox, Grid, and a media query to create a layout that adapts to screen size."
difficulty: "beginner"
order_index: 4
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
        <title>AI for Good Action Plan</title>
      </head>
      <body>
        <header class="hero">
          <div>
            <p class="eyebrow">AI FOR GOOD</p>
            <h1>Our action plan</h1>
            <p>Three thoughtful steps toward a useful, responsible idea.</p>
          </div>
          <span class="hero-icon" role="img" aria-label="A glowing light bulb">💡</span>
        </header>

        <main>
          <section class="card-grid" aria-label="Action steps">
            <article class="card"><span>1</span><h2>Listen</h2><p>Learn from people before designing.</p></article>
            <article class="card"><span>2</span><h2>Build</h2><p>Create the smallest idea that could help.</p></article>
            <article class="card"><span>3</span><h2>Test</h2><p>Ask whether it is useful, fair, and safe.</p></article>
          </section>
        </main>
      </body>
    </html>
  css: |
    :root { --ink: #172554; --paper: #eff6ff; --brand: #7c3aed; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: system-ui, sans-serif; background: var(--paper); color: var(--ink); }
    .hero, main { width: min(980px, 92%); margin-inline: auto; }

    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      padding-block: 3rem 2rem;
    }

    .hero-icon { font-size: clamp(4rem, 12vw, 8rem); }
    .eyebrow { color: var(--brand); font-weight: 800; letter-spacing: .12em; }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .card { background: white; border-radius: 1rem; padding: 1.25rem; }
    .card > span { display: grid; place-items: center; width: 2rem; height: 2rem; border-radius: 50%; background: var(--brand); color: white; font-weight: 800; }

    @media (max-width: 650px) {
      .hero { align-items: flex-start; }
      .card-grid { grid-template-columns: 1fr; }
    }
  javascript: |
    // Resize the preview area by changing the browser window width.
class_activities: |
  ## Core mission

  1. Change the Grid from three columns to two and observe the result.
  2. Restore three columns, then test the page on a narrow window.
  3. Replace the card content with steps for your own project.

  ## Power-up

  On small screens, place the hero icon below the text using `flex-direction: column`.

  ## Expert challenge

  Replace the fixed desktop columns with `repeat(auto-fit, minmax(220px, 1fr))`. Explain what the browser now decides automatically.
ai_activities: |
  Ask AI to predict what will happen if the media query is removed. Write your own prediction first, test it, and then judge the AI answer.

  Ask for three devices or situations where responsive design matters beyond phones.
take_home_assignment: |
  Test your page at one narrow and one wide size. Write two CSS comments: one thing that works well and one layout decision you improved after testing.
---

# One website, many screens

Visitors may use a phone, tablet, laptop, large monitor, zoomed browser, or assistive technology. **Responsive design** allows content to adapt instead of assuming one fixed screen.

## Flexbox arranges items in one direction

```css
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

Flexbox is excellent for a row or column: navigation links, a hero, or buttons.

## Grid arranges rows and columns

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

`1fr` means one equal fraction of the available space.

## Media queries respond to available width

```css
@media (max-width: 650px) {
  .card-grid { grid-template-columns: 1fr; }
}
```

The layout becomes one column when the preview is 650 pixels wide or narrower. Responsive design is not about one special “phone size”; it is about keeping content comfortable wherever it is viewed.
