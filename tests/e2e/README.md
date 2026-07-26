# End-to-end tests

The smoke tests run against the normal local environment.

The live lesson challenge test creates and deletes disposable users, a course,
a lesson, a quiz, and a game. Run it only against a dedicated Supabase test
project with all SQL scripts applied:

```bash
E2E_SUPABASE_URL=... \
E2E_SUPABASE_ANON_KEY=... \
E2E_SUPABASE_SERVICE_ROLE_KEY=... \
E2E_ALLOW_DATABASE_WRITES=true \
pnpm playwright test tests/e2e/live-lesson-challenge.spec.ts
```

Without that explicit opt-in, the destructive fixture is skipped.
