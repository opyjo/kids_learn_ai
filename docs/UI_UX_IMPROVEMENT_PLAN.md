# Kids Learn AI — UI/UX & Feature Improvement Plan

## Context

Kids Learn AI is a live, instructor-led (Zoom) Python/AI program for kids, built on Next.js 16 + Supabase + shadcn/Tailwind v4. A full review of the app found it solid at the core (lesson viewer, in-browser Python via Pyodide, homework submission/grading loop, admin suite, dark mode) but with clear gaps for a live-class product:

- **No live-class infrastructure at all** — no schedule/meeting-link data, no "next class" widget, no join button. Zoom exists only in marketing copy.
- **The code editor is a plain `<textarea>`** — no syntax highlighting/autocomplete, fragile line-number scroll hack, code lost between sessions, poor Pyodide loading/error UX.
- **No in-lesson course outline** — students navigate one lesson at a time via prev/next only.
- **Dashboard doesn't surface what matters for live classes** — no next class, no homework-due list, feedback buried.
- **Site-wide polish gaps** — zero `loading.tsx`/`error.tsx`/`not-found.tsx` files, thin accessibility on home components, no testimonials, admin-link flash in header, pricing page e-Transfer flow could be clearer.

**Explicitly out of scope (user decision):** gamification, self-paced features, Stripe/payment automation (payment stays manual Interac e-Transfer; only its UX is improved).

**Deliverable:** implement the changes below; also save this document into the repo as `docs/UI_UX_IMPROVEMENT_PLAN.md` for reference.

## Verified baseline facts

- Admin CRUD pattern: server page calls `requireAdmin()` (`lib/auth-helpers.ts`) and renders a `"use client"` tab component using `getSupabaseBrowserClient()` under admin RLS — template: `app/admin/enrollments/page.tsx` + `components/admin/enrollments-tab.tsx`. Admin nav: `components/admin/admin-layout-shell.tsx`.
- SQL convention: numbered `scripts/NN-*.sql`, `CREATE TABLE IF NOT EXISTS`, `gen_random_uuid()`, RLS with admin-check `EXISTS (... profiles.role = 'admin')`. Highest number is 28 → new script is 29. RLS template: `scripts/13-create-level-enrollments.sql`.
- `app/lessons/[course]/[id]/page.tsx:96-130` already computes `courseLessons` (with `isCompleted`, `isAccessible`, `href`) and passes it to `LessonViewer` — the in-lesson outline needs **no new data fetching**.
- `PythonEditor` (`components/code/python-editor.tsx`) is a `<textarea>` with a manual line-number `translateY` scroll hack (lines 49-52, 210-229). Used in 4 places: `lesson-code-panel.tsx`, `app/playground/page.tsx`, `app/tutor/[tutorId]/page.tsx`, `components/admin/lesson-editor.tsx` — keep its props API (`initialCode`, `onCodeChange`, `onRunComplete`, `onAskAboutCode`, `className`).
- `hooks/use-pyodide.ts` exposes `isLoading`/`error` but has no retry.
- `@tailwindcss/typography` is NOT installed — `prose-*` classes in `lesson-markdown.tsx` are no-ops; real markdown styling is `.lesson-content` CSS in `app/globals.css`. Don't build new UI on `prose-*`.
- Package manager is **pnpm** (repo also has a stray `package-lock.json` — install with pnpm only). `date-fns` 4.1.0 installed, no TZ addon.

---

## Area A — Live-class features (highest priority)

**Schema decision:** one `class_schedules` row per weekly recurring slot (NOT per-dated-session rows — no recurring-event engine needed for this size of operation). Multiple rows per course allowed (e.g., Ages 9-10 Mondays cohort + Ages 11-13 Wednesdays cohort). "Next occurrence" computed at read time.

### New files
- **`scripts/29-create-class-schedules.sql`** — table:
  ```sql
  CREATE TABLE IF NOT EXISTS class_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    label TEXT,                          -- e.g. 'Ages 9-10 Cohort'
    day_of_week SMALLINT NOT NULL CHECK (day_of_week BETWEEN 0 AND 6), -- 0=Sunday
    start_time TIME NOT NULL,
    duration_minutes INTEGER NOT NULL DEFAULT 60,
    timezone TEXT NOT NULL DEFAULT 'America/Toronto', -- IANA name
    meeting_link TEXT,                   -- Zoom URL (sensitive)
    meeting_notes TEXT,                  -- passcode / instructions
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  );
  ```
  Index on `course_id`. RLS: SELECT for enrolled students (`EXISTS` against `level_enrollments`), full CRUD for admins (copy four-policy block style from `scripts/13`). **No public SELECT policy** — `meeting_link` must never be publicly readable.
- **`lib/schedule-utils.ts`** — pure functions, no new deps: `getNextOccurrence(schedule, now)` (next day_of_week+start_time instant in the schedule's IANA timezone using `Intl.DateTimeFormat` timeZone parts — DST-safe, never fixed UTC offsets), `formatScheduleLine(schedule)` → "Mondays · 5:00 PM ET", `isJoinWindowOpen(next, now)` (15 min before start → start+duration). **Unit-test with Vitest** including DST transition cases.
- **`app/admin/schedules/page.tsx`** — mirrors `app/admin/enrollments/page.tsx` (`requireAdmin()` + renders `<SchedulesTab />`).
- **`components/admin/schedules-tab.tsx`** — client CRUD modeled on `enrollments-tab.tsx`: schedules grouped by course, Dialog form (course Select, day Select, `<input type="time">`, duration, label, meeting link, active Switch). Reuse `components/ui/{dialog,select,input,label,switch,button,card,badge}`.
- **`components/dashboard/next-class-card.tsx`** — client component. Props: `{ courseTitle, label, nextOccursAt, meetingLink, meetingNotes, durationMinutes }[]`. Shows soonest class ("Next class: Term 3 · Monday 5:00 PM ET (in 2 days)") with a **Join class** button — disabled with "opens 15 min before class" until the window, then prominent; `target="_blank" rel="noopener"`. Render nothing if no schedules.

### Modified files
- `components/admin/admin-layout-shell.tsx` — add "Class Schedules" nav item (`CalendarClock` icon, `/admin/schedules`).
- `app/dashboard/page.tsx` — fetch `class_schedules` for enrolled level ids (student RLS permits), compute next occurrences server-side, render `<NextClassCard />` under the welcome section; add `formatScheduleLine` row to each enrolled-level card.
- `app/lessons/[course]/page.tsx` — show a public "Live class: Mondays 5:00 PM ET" line near the course header, fetched server-side via `lib/supabase/admin.ts` **selecting only non-sensitive columns** (`day_of_week, start_time, timezone, label, duration_minutes`).
- `app/pricing/pricing-content.tsx` — leave hardcoded schedule cards; add a code comment noting `class_schedules` is the future source of truth.

---

## Area B — Lesson & code editor UX

### B1. CodeMirror 6 editor
- **New deps (pnpm):** `@uiw/react-codemirror`, `@codemirror/lang-python`, `@codemirror/theme-one-dark`.
- **Modify `components/code/python-editor.tsx`:** keep Card header (Run/Reset/Clear/Ask BrightByte, Ctrl+Enter hint) and output panel as-is; replace only the editor block (~lines 196-229): delete line-number div, scroll hack, textarea; render `<CodeMirror>` with `python()`, 4-space `indentUnit`, `indentWithTab`, high-precedence `Mod-Enter` keymap → run, `oneDark` theme, `basicSetup` line numbers. All existing run/reset/clear logic unchanged.
- **Risk:** verify `@uiw/react-codemirror` (v4.25+, loose React peer dep) with React 19/Next 16 via a smoke test on `/playground` first; fallback `next/dynamic` `ssr:false` if build complains. Component is already `"use client"`.

### B2. Per-lesson code persistence (localStorage)
- **New `hooks/use-persisted-code.ts`:** `usePersistedCode(storageKey, initialCode)` → `[code, setCode, { wasRestored, clearSaved }]`; hydration-safe load in `useEffect`, ~500ms debounced save, key `kla:code:v1:${storageKey}`, try/catch for quota/private mode.
- `python-editor.tsx`: new optional `storageKey?: string` prop (no other API changes — the 4 call sites keep working); Reset also calls `clearSaved()`; show dismissible "Restored your saved work" hint when `wasRestored`.
- `components/lessons/viewer/lesson-code-panel.tsx`: pass `storageKey={lesson.dbId}` (dbId, not order_index — survives resync).
- `app/playground/page.tsx`: pass `storageKey="playground"`.
- Supabase-backed sync: deferred (key scheme makes it additive later).

### B3. Pyodide loading/error states
- **Modify `hooks/use-pyodide.ts`:** extract init into `useCallback`, expose `retry()`.
- **Modify `python-editor.tsx`:** explicit status states — loading ("Warming up the Python engine… first load can take ~10s", Run disabled), error (friendly message + "Try again" button), ready (current behavior). Cheap bonus: pre-run regex check for `input(` → friendly note it isn't supported in-browser, use Trinket/Thonny.

### B4. In-lesson course outline (pure UI — data already flows)
- **New `components/lessons/viewer/lesson-outline.tsx`:** Radix `Popover` (reuse `components/ui/popover.tsx`) triggered by "Week {n} of {total} ▾" button in the breadcrumbs row. Scrollable list of `courseLessons`: week number + title, green `CheckCircle` if completed, `Lock`/muted non-link if not accessible, current highlighted; rows are `Link`s to `item.href`.
- **Modify `components/lessons/viewer/lesson-viewer-shell.tsx`:** accept `outline?: React.ReactNode`, render next to `LessonBreadcrumbs` (~line 66).
- **Modify `components/lessons/lesson-viewer.tsx`:** build and pass the outline. No page changes needed.

---

## Area C — Dashboard improvements

All in `app/dashboard/page.tsx` (extend existing fetches, don't restructure):
1. Extend `lessons` select to include `title, order_index, take_home_assignment, requires_trinket`.
2. Compute server-side: `nextClasses` (Area A), `continueLesson` (per course: lowest `order_index` not in completed → href `/lessons/{slug}/{order_index}`), `homeworkDue` (lessons with `take_home_assignment` + `requires_trinket` and no submission row), `recentFeedback` (first 3 submissions with `status !== "submitted"` and non-null feedback — already fetched, pure filter).
3. New layout order: Welcome → **NextClassCard + Continue-learning** (2-col) → **Homework due** → stats → enrolled-level cards (+ schedule line + "Continue → Week N" button) → Recent feedback → My Assignments → Quick Actions.

### New files (presentational, reuse Card/Button/Badge and styling conventions from `my-assignments-section.tsx`)
- `components/dashboard/continue-learning-card.tsx` — "Pick up where you left off · Week 4: Loops" + Continue button.
- `components/dashboard/homework-due-card.tsx` — due assignments linking to the lesson's assignment tab; empty state "All caught up! 🎉"; amber accent.
- `components/dashboard/recent-feedback-card.tsx` — 3 latest graded items: lesson, grade badge, feedback excerpt, View link.

---

## Area D — Site-wide polish

### D1. loading / error / not-found (none exist today)
- **New shared:** `components/feedback/branded-loader.tsx` (logo + spinner + kid-friendly line), `components/feedback/friendly-error.tsx` (client; "Oops!" card, Try again → `reset()`, Go home).
- **New route files:** `app/loading.tsx`, `app/error.tsx` (client, `Sentry.captureException(error)` — Sentry already configured), `app/not-found.tsx`, `app/global-error.tsx` (own `<html>`, Sentry capture). Skeleton loaders (via `components/ui/skeleton.tsx`) for heavy routes: `app/dashboard/loading.tsx`, `app/lessons/[course]/loading.tsx`, `app/lessons/[course]/[id]/loading.tsx`, `app/admin/loading.tsx`.

### D2. Admin-link flash fix
- In `components/site-header.tsx` (~lines 485-569): merge the two auth effects; seed `isAdmin` synchronously from `sessionStorage` cache (`kla:role:${userId}`) before the profile fetch resolves; write cache after fetch; clear on sign-out. (JWT custom claims noted as future work only.)

### D3. Accessibility pass on `components/home/*`
- Files: `Hero, FeaturesSection, StatsSection, BrightByteSection, WhatYoullCreateSection, SampleLessonsSection, CTASection, PromotionalVideoSection, InteractiveCodeEditor`.
- `aria-hidden` on decorative icons, `alt` on all images, `aria-label` on icon-only controls, `focus-visible:ring` on custom interactive elements, single `h1`/heading order per page, framer-motion `useReducedMotion()` for large animations, accessible name + keyboard controls on the video section. Add `sr-only` skip-to-content link in `app/layout.tsx`.

### D4. Testimonials
- **New `components/home/TestimonialsSection.tsx`** — editable `TESTIMONIALS` const array (quote, parentName, childAge, location), 3-card grid matching `FeaturesSection` styling, avatar initials via `components/ui/avatar.tsx`, stars `aria-hidden`.
- **Modify `app/page.tsx`** — insert between `SampleLessonsSection` and `PromotionalVideoSection`.

### D5. Pricing e-Transfer UX
- Extract payment block (~lines 306-430 of `app/pricing/pricing-content.tsx`) into **new `app/pricing/payment-instructions.tsx`**.
- Copy-to-clipboard button for `payment@kidslearnai.ca` (sonner toast); numbered steps 1-2-3 with step circles + step 4 "We confirm + unlock within 24-48h" (merge the What-Happens-Next card into a compact timeline); pre-filled suggested e-Transfer message ("Child: ____ / Email: {userEmail}") with its own copy button.

---

## Implementation order

1. **Quick wins:** D1 (loading/error/not-found) + D5 (pricing copy buttons).
2. **Area A end-to-end:** SQL → `schedule-utils` + tests → admin CRUD → dashboard widget → course-page line.
3. **Area C** dashboard reorg (depends on A's widget).
4. **Area B** editor: pyodide retry → CodeMirror swap (playground smoke test first) → persistence → outline popover.
5. **D2 flash fix, D3 a11y, D4 testimonials** — independent, anytime.
6. Save this plan as `docs/UI_UX_IMPROVEMENT_PLAN.md` in the repo.

## Key risks

- **CodeMirror + React 19/Next 16:** low risk, but smoke-test on `/playground` before touching the lesson panel; fallback `next/dynamic` `ssr:false`.
- **Timezone/DST:** always compute via `Intl` timeZone parts; unit-test around America/Toronto DST transitions.
- **Meeting-link exposure:** no public SELECT policy; public course page uses server admin client with explicit non-sensitive column list.
- **`prose-*` classes are no-ops** (no typography plugin) — markdown styling lives in `.lesson-content` in `globals.css`; don't regress or extend `prose` usage.
- **pnpm only** for new deps (stray `package-lock.json` exists; `packageManager` is pnpm).

## Verification

- **Unit:** Vitest tests for `lib/schedule-utils.ts` (next-occurrence across DST, join-window logic) and `hooks/use-persisted-code.ts`.
- **DB/RLS:** run `scripts/29` in Supabase; as an unauthenticated/unenrolled user confirm `class_schedules` returns no rows (especially `meeting_link`); as an enrolled student confirm rows for enrolled courses only.
- **Manual E2E:** admin creates a schedule at `/admin/schedules` → student dashboard shows Next-class card with correct local time and disabled-then-enabled Join button; lesson page shows the outline popover with completed/locked states and navigates correctly; editor highlights Python, Ctrl+Enter runs, typed code survives a page reload, Reset restores starter code; kill network → Pyodide error state with working retry; visit a bogus URL → branded 404; throw in a page → error boundary with Try again.
- **A11y spot-check:** keyboard-tab through home page and lesson outline; verify skip link, focus rings, reduced-motion.
- **Existing tests:** `pnpm test` (Vitest) and Playwright e2e still pass; Biome clean.
