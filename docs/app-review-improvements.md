# App Review: Comprehensive Improvement List

> Full-codebase review — July 5, 2026. Covers UI/UX and functional/feature improvements for the main app and the AI Labs. Nothing here has been built yet; this is the backlog.

**TLDR:** The app has a solid foundation (good design tokens, dark mode wiring, real auth, a genuinely well-built concept-lab engine), but there are several outright broken things (admin lesson editing, the mobile menu close, dead Privacy/Terms links, an unauthenticated OpenAI endpoint), a big product gap for the audience (zero gamification, no parent visibility), and the AI Lab is a strong engine with only one lab in it.

---

## 1. Actual bugs / broken things (fix regardless of roadmap)

1. **Admin lesson editing is a broken stub.** Edit buttons link to `/admin/lessons/[orderIndex]/edit`, which doesn't exist — every click 404s (`app/admin/lessons/page.tsx:130`). The Preview button opens a nonexistent `/admin/lessons/preview` route (`components/admin/lesson-editor.tsx:90`). The create form POSTs camelCase keys while the API reads snake_case (`app/api/admin/lessons/route.ts:47`), so new lessons silently drop difficulty, order index, premium flag, and starter/solution code. There's also no course selector, so UI-created lessons land as "Unassigned." Content management only actually works via the file-based sync.
2. **The AI Lab explain endpoint has no auth and no rate limit.** `app/api/concept-labs/explain/route.ts` calls OpenAI for anyone who can reach the route — cost/abuse exposure. `lib/rate-limit.ts` exists but isn't applied to either concept-labs endpoint.
3. **Mobile nav drawer never closes on link tap.** `closeMobileMenu()` queries `[aria-label="Open menu"]` but the trigger is labeled "Open navigation menu" (`components/site-header.tsx:467-472` vs `:874`) — the selector never matches. The trigger also hardcodes `aria-expanded="false"`.
4. **Dead footer links, including legal pages.** `/privacy`, `/terms`, `/help`, `/profile`, and the three social links all 404 (`components/layouts/footer.tsx`). Missing Privacy/Terms is a trust/legal problem for a kids' product. Copyright still says © 2025.
5. **Password policy contradiction.** The strength meter advertises 8+ characters, but the server and reset form enforce only 6 (`lib/actions/auth.ts:108,222`, `reset-password-form.tsx`).
6. **Silent failures across the app.** Google OAuth errors only `console.error` with no user message (`login-form.tsx:57`, `signup-form.tsx:58`); admin enrollment/submission saves swallow errors; the tutor's chat-limit fetch fails silently.
7. **`.limit(1000)` undercounting.** Enrollment aggregates on admin Overview/Students/Analytics silently cap at 1000 rows (`app/admin/page.tsx:37` and siblings) — dashboards will misreport as the platform grows.
8. **Native `alert()` mixed with toasts** in lesson completion (`components/lessons/shared/use-lesson-completion.tsx` lines 55–119) — jarring and inconsistent with the Sonner toasts used elsewhere in the same file.
9. **Progress ring geometry is off** on the course page — circle drawn at `cx=20 cy=20 r=16` inside a 36px SVG (`app/lessons/[course]/page.tsx:175-200`).
10. **Invalid CSS**: `app/globals.css:201,226` wrap an OKLCH token in `hsl()`, so list-marker coloring silently fails.
11. **Non-functional buttons rendered as real:** "Export" on admin Students, "Download Report" on Analytics — both do nothing.
12. **Build masks type errors**: `next.config.mjs` sets `typescript: { ignoreBuildErrors: true }`.

---

## 2. Student-facing app

### UI/UX improvements

- **Dark mode is broken on many pages** despite correct theme wiring: ~61 files use hardcoded `text-gray-*` / `bg-green-50` / `text-blue-600` instead of tokens — worst on get-thonny/get-trinket, game cards, auth pages, and success alerts (no `dark:` variants at all in `settings-form.tsx`, `contact-form.tsx`, `game-tabs.tsx`).
- **Coming-soon nav items are still clickable** — all eight Year 2 term links navigate to empty/404 course pages (`components/site-header.tsx:129-189`). Make them non-navigable with a visual "soon" treatment.
- **FAQ accordion is keyboard-inaccessible** — a `div` with `onClick`, no role/tabIndex/aria-expanded (`app/faq/page.tsx:64-90`), even though the Radix `ui/accordion` component already exists in the project.
- **Missing empty states** on games, labs, and the lessons index (silently renders nothing if data is empty).
- **Tutor page flashes blank** during client auth check before redirect (`app/tutor/[tutorId]/page.tsx:151`).
- **Trinket submission form** validates only "contains trinket.io/embed", auto-closes success after 1.5s (abrupt), and doesn't warn that resubmitting resets grading (`components/dashboard/trinket-submission-form.tsx`).
- **Inconsistent age messaging**: "ages 8-16" in metadata, "9-13" on login and careers pages — pick one.
- **Accessibility**: game-card disclosure buttons lack `aria-expanded` (`components/games/game-card.tsx:31`); `aria-describedby` on auth forms points to nonexistent `#email-error` nodes (`login-form.tsx:88`); decorative emoji announced by screen readers on the get-* pages; landing-page code editor traps Tab with no escape (`components/home/InteractiveCodeEditor.tsx:40-54`).

### Feature / functional improvements

- **Gamification — the biggest product gap for this audience.** No badges, streaks, XP, levels, or achievements anywhere. Progress is a bare percentage plus one confetti burst. Even a small badge + streak system would change engagement materially.
- **Parent visibility.** The app repeatedly tells kids to "ask a parent," yet there's no parent account/role, no progress reports or emails to guardians, no notification when a teacher grades work. Settings has only Profile + Password tabs (`app/settings/page.tsx:83-93`).
- **Cloud-save student work.** Playground and tutor editor code persist only to localStorage — lost across devices, invisible to teachers. Saving projects to the account (and letting teachers see them) is a natural next step.
- **Deepen progress tracking**: completion is a binary row in `completed_lessons` — no time-on-task, quiz scores, or per-lesson mastery; "Continue Learning" just picks the first incomplete lesson (`app/dashboard/page.tsx:236-256`).
- **Make games playable in-app.** All 11 games only open Trinket externally; no completion tracking or "I built this." The in-app editor can't run them anyway because **`input()` is blocked** (`components/code/python-editor.tsx:75-83`) — supporting `input()` via Pyodide's async input or a prompt UI would unlock most of the taught material in the browser.
- **Wire up tutor code execution**: run results only `console.log` (`app/tutor/[tutorId]/page.tsx:187-189, 215-217`); BrightByte never sees output/errors, and "Ask BrightByte" pastes the whole file as text. Feeding execution results into the chat would make the tutor dramatically more useful.
- **Finish or remove multi-tutor scaffolding** — `/tutor/[tutorId]` exists but hard-forces the default tutor and ignores the parsed ID (`app/tutor/[tutorId]/page.tsx:32-33, 74-78`).
- **Notify students of feedback** — graded submissions are only discoverable by manually visiting the dashboard and clicking Refresh (`components/dashboard/my-assignments-section.tsx:40-45`).
- Replace hardcoded marketing stats ("300+ learners", "3 Difficulty Levels") with derived or honest numbers (`components/home/StatsSection.tsx:10-15`, `app/games/page.tsx:33-40`).

---

## 3. AI Labs (`/labs`)

The engine (predict → play → explain → apply loop, real kNN classifier, Socratic chat, telemetry + A/B cohorts) is genuinely good. The gap is breadth and hardening.

### Functional / feature improvements

- **There is exactly one lab** (`lib/concept-labs/registry.ts:14`) rendered in a two-column grid with a "More labs on the way 🚀" footer — the page looks unfinished. The codebase's own README lists four deferred primitives (decision boundary, next-word guesser, reward trainer, fairness auditor). Cheapest wins that reuse existing machinery: a 3-class classifier variant (`lib/concept-labs/types.ts:92` currently hard-locks to binary), a "fix the biased model" follow-up lab, and a next-word guesser.
- **Make the mechanism visible**: the kNN never shows *which* training drawings won the vote — displaying nearest neighbors would show "AI compares to examples" instead of just telling it in chat (`components/concept-labs/trainable-classifier-lab.tsx:157`).
- **The bias trap is voluntary** — nothing detects whether the child actually skewed their dataset, so many kids will never hit the intended failure moment. Detect skew and nudge.
- **No save/progression**: trained models and drawings vanish on "Play again" (`concept-lab-host.tsx:142-148`); no learner-facing history, badges, completion state, or sharing of creations, despite sessions being persisted server-side for research.
- **Harden the APIs**: add auth + rate limiting to `explain` (see §1); the content-safety filter is a blunt blocklist tuned for the Python tutor that will false-positive on innocent words ("dumb", "address") in open-ended kid chat (`lib/utils/content-safety.ts:15-40`) — consider a moderation model.

### UI/UX improvements

- Gallery cards hardcode "~15 min" and a generic icon for every lab (`app/labs/page.tsx:48`); no loading skeleton on the lab runner.
- Explain chat gives no error signal or retry when the AI is down — the kid just gets another canned question (`components/concept-labs/explain-dialogue.tsx:80-92`).
- Canvas has no undo (the "eraser" clears everything), and is fully inaccessible to keyboard/AT users.
- Self-judged 👍/👎 test correctness is confusing for young kids and pollutes telemetry (`trainable-classifier-lab.tsx:289-303`) — no explanation of why honest judgment matters.
- Text-heavy instructions for ages 8–12: no audio, no visual walkthrough/GIF of the draw-then-teach flow.
- Almost no delight: no phase transitions, no celebration when the machine guesses right, no sound. Progress steps convey state by color only (no `aria-current`).

---

## 4. Admin / teacher side

### UI/UX improvements

- **No pagination, search, or sorting anywhere it matters**: Students page has no search box; inquiries and lessons have none either; all lists render every row as stacked divs (no tables, no virtualization) — `components/admin/enrollments-tab.tsx`, `submissions-tab.tsx`.
- **No confirmation on destructive actions**: enrollment quick-revoke (`enrollments-tab.tsx:274`) and schedule delete (`schedules-tab.tsx:211`) fire instantly.
- **No optimistic updates** — every mutation re-fetches the entire dataset with spinner flashes; enrollment/submission tabs additionally fail silently (only `schedules-tab` uses toasts).
- Sidebar pending-submissions badge fetches once on mount and goes stale after grading (`components/admin/admin-layout-shell.tsx:84`).
- Analytics page duplicates the Overview queries with no charts, trends, or drill-down (`app/admin/analytics/page.tsx`).

### Feature / functional improvements

- **Inquiry workflow is read-only** — status (new/contacted/enrolled/declined) is displayed but can't be changed from the UI despite DB support (`app/admin/inquiries/page.tsx`); managing leads requires direct DB access.
- **Teacher notes aren't editable in-app** — the page literally directs admins to the database (`app/admin/teacher-notes/page.tsx:279`); notes only flow in via file sync.
- **Missing admin capabilities**: bulk operations (enroll/revoke/grade), email/notifications to students or parents, user/role management (promote admins, deactivate accounts), audit log for enrollment/grade changes, real analytics with export.
- **Structural hardening**:
  - Admin mutations happen directly from the browser via RLS with no server-side validation or audit trail — any RLS gap becomes a privilege hole.
  - The admin role check is copy-pasted into every API route instead of using a shared helper (`requireAdmin()` exists but is only used in pages).
  - Three duplicate in-memory rate limiters exist that reset on every deploy (`lib/rate-limit.ts` + inline copies in `inquiry` and `careers/apply`); the code's own comment says "consider Redis."
  - Grades and timezones are free-text fields — unstructured and unqueryable.
  - The sync route does sequential unbatched DB writes with no transaction (`app/api/admin/sync-lessons/route.ts`) — a partial failure leaves content half-synced.

---

## 5. Cross-cutting technical / quality

- **Performance**: `images: { unoptimized: true }` in `next.config.mjs` disables all Next.js image optimization app-wide — the single biggest perf lever. The header logo uses raw `<img>` (`site-header.tsx:658, 893`). ~63% of components are `"use client"`, including fully static pages (about, careers, faq, pricing) — and the 1,137-line `site-header.tsx` pulls framer-motion + the Supabase client onto every page.
- **SEO**: only the contact page exports `metadata`. All five blog posts, about, careers, faq, pricing, login/signup have none — no per-page titles, descriptions, or OG tags. Big content-marketing gap.
- **Onboarding**: no "check your email to verify" screen after signup (flow just ends); no password-strength meter on the reset page even though signup has one.
- **Testing**: E2E is smoke-only (asserts body/header/footer visible — `tests/e2e/smoke.spec.ts`); no form submission, auth flow, or navigation-click tests; Chromium-only with one trivial mobile assertion (would not catch the mobile-menu bug); no axe/accessibility or dark-mode tests; settings form, admin tabs, and error boundaries untested.

---

## Suggested order of attack

1. **Section 1 bug list** — most are small and several are embarrassing in front of users (mobile menu, dead legal links, broken admin editing).
2. **AI Labs hardening + 1–2 new labs** — the engine is the differentiator and the gallery currently under-delivers its own promise.
3. **Gamification + parent visibility** — the two product gaps that matter most for a kids' platform.
4. **Perf/SEO config fixes** — cheap and high-leverage (`unoptimized: true`, page metadata, server components for static pages).
