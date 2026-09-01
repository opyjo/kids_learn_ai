---
title: "Build a Meaningful Page"
description: "Use semantic HTML, lists, links, and safe content to make a page easy to understand."
difficulty: "beginner"
order_index: 2
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
        <header>
          <h1>My AI for Good Idea</h1>
          <p>A safe project by a young web creator</p>
        </header>

        <main>
          <section id="mission">
            <h2>Our mission</h2>
            <p>We want to help...</p>
          </section>

          <section>
            <h2>Three helpful actions</h2>
            <ol>
              <li>Learn about the problem</li>
              <li>Listen to people affected by it</li>
              <li>Test a small, safe idea</li>
            </ol>
          </section>
        </main>

        <footer>
          <p>Made with care, curiosity, and no private information.</p>
        </footer>
      </body>
    </html>
  css: |
    body {
      font-family: system-ui, sans-serif;
      max-width: 760px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.6;
      background: #fffdf4;
      color: #243047;
    }

    header, section, footer {
      margin-block: 1rem;
      padding: 1rem;
      border-radius: 1rem;
    }

    header { background: #ede9fe; }
    section { background: white; }
    footer { background: #dcfce7; }
  javascript: |
    // We will add interaction in Week 6.
class_activities: |
  ## Core mission

  1. Complete the mission without using real personal details.
  2. Replace the three actions with steps that fit your topic.
  3. Add a new section with its own `<h2>`.

  ## Power-up

  Add an internal link near the top: `<a href="#mission">Jump to our mission</a>`.

  ## Expert challenge

  Add a `<nav>` containing two internal links, and explain why meaningful link text is better than “click here.”
ai_activities: |
  Ask an AI tutor: “Review this topic for privacy risks. Do not rewrite my page.” Decide whether each warning is relevant instead of accepting it automatically.

  Ask for one claim on your page that might require evidence. Mark it with **[check this]** until you can verify it with an adult or trustworthy source.
take_home_assignment: |
  Read your page without looking at the colours. Does the heading order still make sense? Add or rename headings until someone could understand the page from the outline alone.
---

# Structure gives a page meaning

Browsers display HTML, but people and assistive technologies also need to understand it. **Semantic HTML** means choosing elements for their meaning, not merely their appearance.

```html
<header>Introduces the page</header>
<main>Contains its unique main content</main>
<section>Groups one related idea</section>
<footer>Finishes with supporting information</footer>
```

## Lists are for related items

Use `<ul>` when order does not matter and `<ol>` when it does.

```html
<ul>
  <li>Kind</li>
  <li>Curious</li>
  <li>Creative</li>
</ul>
```

## Links need a destination and a useful name

An internal link moves to an element with a matching `id`:

```html
<a href="#mission">Read our mission</a>
```

Useful link text describes where the link goes. “Read our mission” is clearer than “click here.”

## Information can be unsafe or simply untrue

Privacy and accuracy are separate checks. A page might protect your identity but still make an incorrect claim. AI can help identify possible problems, but it can also be wrong. The creator remains responsible for checking.
