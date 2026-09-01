---
title: "AI for Good Capstone Showcase"
description: "Plan, finish, test, and present a responsive website that demonstrates responsible web creation."
difficulty: "intermediate"
order_index: 8
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
        <title>My AI for Good Project</title>
      </head>
      <body>
        <a class="skip-link" href="#main-content">Skip to main content</a>
        <header class="hero">
          <p class="eyebrow">AI FOR GOOD</p>
          <h1>Project title</h1>
          <p class="intro">One clear sentence explaining the idea.</p>
          <a class="button-link" href="#action">See the action</a>
        </header>

        <main id="main-content">
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading">The problem</h2>
            <p>Explain the problem without private information or unverified claims.</p>
          </section>

          <section aria-labelledby="plan-heading">
            <h2 id="plan-heading">A thoughtful plan</h2>
            <div class="card-grid">
              <article class="card"><h3>Listen</h3><p>How will people shape the idea?</p></article>
              <article class="card"><h3>Protect</h3><p>How will privacy and fairness be protected?</p></article>
              <article class="card"><h3>Test</h3><p>How will you learn whether it really helps?</p></article>
            </div>
          </section>

          <section id="action" class="action" aria-labelledby="action-heading">
            <h2 id="action-heading">Try one small action</h2>
            <button id="action-button" type="button">Give me an action</button>
            <p id="action-message" aria-live="polite">Choose the button when you are ready.</p>
          </section>
        </main>

        <footer><p>Created privately by a KidsLearnAI Web Creator.</p></footer>
      </body>
    </html>
  css: |
    :root { --ink: #172554; --paper: #eff6ff; --brand: #6d28d9; --accent: #fbbf24; }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; font-family: system-ui, sans-serif; line-height: 1.65; background: var(--paper); color: var(--ink); }
    .hero, main, footer { width: min(960px, 92%); margin-inline: auto; }
    .hero { padding-block: 4rem 2rem; }
    .eyebrow { color: var(--brand); font-weight: 800; letter-spacing: .12em; }
    h1 { max-width: 14ch; font-size: clamp(2.4rem, 8vw, 5rem); line-height: 1; margin-block: .5rem 1rem; }
    section { padding-block: 2rem; }
    .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem; }
    .card, .action { background: white; border-radius: 1rem; padding: 1.25rem; }
    .button-link, button { display: inline-block; border: 0; border-radius: .75rem; padding: .8rem 1rem; background: var(--brand); color: white; font: inherit; font-weight: 700; text-decoration: none; }
    :focus-visible { outline: .25rem solid var(--accent); outline-offset: .2rem; }
    .skip-link { position: absolute; left: 1rem; top: -5rem; padding: .75rem; background: white; }
    .skip-link:focus { top: 1rem; }
    footer { padding-block: 2rem; }
    @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
  javascript: |
    const actions = [
      "Ask one thoughtful question.",
      "Check one claim with a trusted source.",
      "Invite someone to test your idea.",
      "Find one way to make the idea more accessible."
    ];

    const button = document.querySelector("#action-button");
    const message = document.querySelector("#action-message");

    button.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * actions.length);
      message.textContent = actions[randomIndex];
    });
class_activities: |
  ## Capstone requirements — everyone

  - A clear `<h1>` and at least three meaningful sections
  - A consistent CSS colour and spacing system
  - A layout that works on narrow and wide screens
  - Visible keyboard focus and logical heading order
  - One JavaScript interaction
  - No personal information or unsupported claims
  - A spoken explanation of one design decision and one debugging decision

  ## Power-up

  Add a fourth card or a second action while keeping the page clear.

  ## Expert challenge

  Add a non-personal feedback choice that changes only local page content—no form submission or data collection.
ai_activities: |
  AI may act as a reviewer, not the owner. Ask for questions about clarity, accessibility, privacy, and fairness. Record one suggestion you accepted and one you rejected, with reasons.

  Before presenting, verify every claim and remove any placeholder that sounds factual but has no trustworthy support.
take_home_assignment: |
  Complete your reflection: What did you build? Who could it help? What did you change after testing? What can AI help with, and what must a human decide? Keep the project private until a parent or instructor approves any future publication.
---

# Your capstone is evidence of your thinking

The goal is not the page with the most effects. A strong capstone is understandable, responsive, accessible, private, and explainable.

## Plan before polishing

Write one sentence for each question:

1. Who is the page for?
2. What should they understand?
3. What small action should they be able to take?
4. What information must the page never collect?
5. How will you know the design works?

## Test the whole story

Use this final test route:

- Start at the top and read only the headings.
- Navigate every link and button using the keyboard.
- Test a narrow layout.
- Trigger the interaction at least five times.
- Check colour contrast and plain language.
- Verify claims and remove private details.

## Present like a creator

In two minutes, explain:

- the problem and audience;
- one HTML or accessibility choice;
- one CSS layout choice;
- how the JavaScript interaction works;
- one bug you solved;
- one AI suggestion you questioned.

You have completed Website Foundations when you can build, test, and explain—not merely when the preview looks finished.
