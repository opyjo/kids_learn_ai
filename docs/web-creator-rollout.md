# AI Web Creator rollout

The first release adds one complete eight-week term and reserves the next two
terms as coming soon.

## Release order

1. Apply `scripts/43-create-ai-web-creator-pathway.sql` in Supabase. All three
   courses remain in the coming-soon state.
2. Deploy the application code. Existing Python courses continue to use the
   Python workspace; Web Creator courses select the multi-file web workspace.
3. Sign in as an admin and run **Sync Lesson Files**. Confirm that the result
   contains eight `WebCreator-Term1` lessons and eight teacher-note files.
4. Open Week 1 as an admin and verify the HTML, CSS, JavaScript tabs, private
   preview, reset, autosave, and lesson navigation.
5. Apply `scripts/44-web-creator-term1-go-live.sql`. The script refuses to open
   the course unless exactly eight lessons and eight teacher guides exist.
6. Enrol a test learner and complete Week 1 before inviting a pilot cohort.

## Safety checks

- The iframe sandbox must remain `allow-scripts` only. Never add
  `allow-same-origin`, forms, pop-ups, or top-navigation permissions.
- The generated preview CSP blocks network requests, external assets, form
  submissions, embedding, and object content.
- Projects are private and device-local in Term 1. Publishing requires a
  separate safeguarding and parent-consent workflow.
- Do not place API keys or AI service credentials in browser JavaScript.

## Pilot success measures

- At least 80% of learners finish the core mission each week.
- Learners can explain one HTML, CSS, and JavaScript decision in their own
  words.
- Every capstone passes the privacy, keyboard, narrow-screen, and fact-check
  review.
- Instructors record where ages 9–10 need more scaffolding and where ages
  11–13 need stronger expert challenges before Term 2 is authored.
