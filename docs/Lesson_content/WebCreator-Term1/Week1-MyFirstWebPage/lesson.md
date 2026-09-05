---
title: "My First Web Page"
description: "Discover how websites work and build a private first page with HTML."
difficulty: "beginner"
order_index: 1
course_slug: "web-creator-term-1-foundations"
is_premium: false
requires_trinket: false
starter_files:
  html: |
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Bright Idea</title>
      </head>
      <body>
        <main>
          <h1>My Bright Idea</h1>
          <p>I want to make the world better by...</p>

          <h2>Why it matters</h2>
          <p>This idea could help people because...</p>
        </main>
      </body>
    </html>
  css: |
    body {
      font-family: system-ui, sans-serif;
      max-width: 700px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.6;
      background: #f0f9ff;
      color: #12324a;
    }

    h1 {
      color: #6d28d9;
    }
  javascript: |
    // JavaScript will make our page interactive later in the term.
class_activities: |
  ## Core mission — everyone

  1. Replace **My Bright Idea** with an idea you care about.
  2. Finish both sentences using made-up or general information.
  3. Add a third heading and paragraph.

  ## Power-up — ages 9–10 or anyone who wants support

  Add three list items using `<ul>` and `<li>`.

  ## Expert challenge — ages 11–13 or confident coders

  Add a `<section>` for your idea and explain why `<main>` should appear only once on a page.
ai_activities: |
  ## Ask, check, improve

  Ask an AI tutor for **three child-safe website topic ideas**. Choose one only after checking that it does not require your real name, school, location, photograph, or contact details.

  Then ask: “Explain what `<h1>` and `<p>` mean without writing my project for me.” Compare the explanation with what you see in the preview.
take_home_assignment: |
  Add one section called **What I want visitors to learn**. Include a heading, a paragraph, and a three-item list. Do not add personal information.
---

# Welcome to Web Creator

Today you become a web creator. A website is a collection of files that a browser reads and turns into a page. The three files beside this lesson have different jobs:

- **HTML** gives the page meaning and structure.
- **CSS** controls how the page looks.
- **JavaScript** adds behaviour and interaction.

The preview is private and isolated. It cannot publish your page, send forms, or contact other websites.

## HTML is a labelled structure

HTML uses **elements**. Most elements have an opening tag, some content, and a closing tag:

```html
<p>This is a paragraph.</p>
```

Headings form an outline. Use one `<h1>` for the page title, then `<h2>` for its main sections.

```html
<h1>My Bright Idea</h1>
<h2>Why it matters</h2>
```

## Your first safe-design rule

A project can be personal without containing private information. Share interests and ideas, but never include your full name, school, address, schedule, passwords, contact information, or a photograph that identifies you.

## Try, observe, explain

Change one line at a time and watch the preview. If something disappears, check the opening and closing tags. Before finishing, point to one HTML element and explain its job in your own words.

> A strong creator does not merely make a page work—they can explain why it works.
