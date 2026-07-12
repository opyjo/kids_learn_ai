# Adaptive practice rollout

The adaptive domain code lives in `lib/adaptive-practice` and has no Next.js,
React, or Supabase dependency. HTTP/authentication and Supabase adapters remain
outside the domain so the engine can be extracted into a service later.

## Flags

- Default: both flags unset. Students use the existing spaced-review player.
- Shadow: `ADAPTIVE_PRACTICE_SHADOW=true`. Admin sessions record a selection,
  but the existing review player remains visible.
- Enabled: `ADAPTIVE_PRACTICE_ENABLED=true`. Signed-in students use adaptive
  sessions when their enrolled published bank passes the ten-question safety
  preflight; otherwise they automatically fall back to spaced review.

`ADAPTIVE_PRACTICE_ENABLED` takes precedence over the shadow flag. Do not enable
it until migration 35 is applied and the Admin Quizzes readiness report shows
adequate distinct variants and difficulty coverage.

## Rollback

Unset or set `ADAPTIVE_PRACTICE_ENABLED=false`. No data rollback is required:
adaptive evidence is immutable and mastery/review updates use the existing
tables. Existing `/api/quiz/learning` behavior is unchanged.

## Database verification

Migration 35 creates the adaptive question metadata, session/event/diagnostic
tables, RLS policies, 24-hour session expiry, and the service-role-only atomic
`record_adaptive_practice_response` function. Verify the migration before
enabling students by checking that all three tables have RLS enabled, the five
question metadata fields are non-null, and authenticated clients cannot execute
the atomic function directly.
