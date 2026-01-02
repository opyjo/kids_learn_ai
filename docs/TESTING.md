# Testing Guide

This document describes the testing setup for the Kids Learn AI application.

## Overview

We use a **hybrid testing strategy** that prioritizes reliable tests with minimal flakiness:

| Test Type | Tool | Purpose | Count |
|-----------|------|---------|-------|
| Unit | Vitest | Pure functions, utilities, validation schemas | ~34 |
| Component | Vitest + React Testing Library | React components with mocked APIs | ~59 |
| Smoke E2E | Playwright | Basic page loads and navigation | ~12 |

```
┌─────────────────────────────────────┐
│         Smoke E2E (5%)              │  ← Simple, stable tests
├─────────────────────────────────────┤
│      Component Tests (45%)          │  ← High confidence, low flakiness
├─────────────────────────────────────┤
│        Unit Tests (50%)             │  ← Fast, no flakiness
└─────────────────────────────────────┘
```

## Quick Start

```bash
# Run all unit and component tests (watch mode)
pnpm test

# Run tests once (CI mode)
pnpm test:run

# Run with coverage report
pnpm test:coverage

# Run E2E tests
pnpm test:e2e

# Run E2E tests with UI
pnpm test:e2e:ui

# Run all tests (unit + E2E)
pnpm test:all
```

## Project Structure

```
tests/
├── setup.ts                    # Test setup (jest-dom matchers)
├── test-utils.tsx              # Custom render with userEvent
├── unit/
│   ├── lib/
│   │   ├── utils.test.ts       # cn() utility tests
│   │   └── rate-limit.test.ts  # Rate limiter tests
│   └── schemas/
│       └── contact-schema.test.ts  # Zod validation tests
├── components/
│   ├── contact-form.test.tsx   # ContactForm component tests
│   ├── login-form.test.tsx     # LoginForm component tests
│   └── ui/
│       └── button.test.tsx     # Button component tests
└── e2e/
    └── smoke.spec.ts           # Playwright smoke tests
```

## Configuration Files

- `vitest.config.ts` - Vitest configuration
- `playwright.config.ts` - Playwright configuration

## Writing Tests

### Unit Tests

Unit tests are for pure functions and utilities. They should be fast and have no dependencies.

```typescript
// tests/unit/lib/utils.test.ts
import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('px-4', 'py-2')
    expect(result).toBe('px-4 py-2')
  })
})
```

### Component Tests

Component tests render React components and test user interactions. Use the custom render from `test-utils.tsx`.

```typescript
// tests/components/my-component.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@/tests/test-utils'
import { MyComponent } from '@/components/my-component'

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('should handle click events', async () => {
    const { user } = render(<MyComponent />)
    await user.click(screen.getByRole('button'))
    expect(screen.getByText('Clicked!')).toBeInTheDocument()
  })
})
```

### Mocking API Calls

For components that make API calls, mock the `fetch` function:

```typescript
import { vi, beforeEach } from 'vitest'

beforeEach(() => {
  vi.clearAllMocks()
  global.fetch = vi.fn()
})

it('should handle successful API response', async () => {
  const mockFetch = vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({ success: true }),
  })
  global.fetch = mockFetch

  const { user } = render(<MyForm />)
  // ... fill form and submit
  
  await waitFor(() => {
    expect(mockFetch).toHaveBeenCalledWith('/api/endpoint', expect.any(Object))
  })
})
```

### E2E Smoke Tests

E2E tests verify that pages load correctly. Keep them simple to avoid flakiness.

```typescript
// tests/e2e/smoke.spec.ts
import { test, expect } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Kids Learn AI/)
})

test('navigation works', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Lessons')
  await expect(page).toHaveURL(/lessons/)
})
```

## Testing Best Practices

### Do's

- ✅ Test behavior, not implementation details
- ✅ Use descriptive test names that explain what's being tested
- ✅ Keep tests independent (no shared state between tests)
- ✅ Mock external dependencies (APIs, databases)
- ✅ Use `waitFor` for async operations
- ✅ Test error states and edge cases

### Don'ts

- ❌ Don't test third-party library internals
- ❌ Don't write tests that depend on timing
- ❌ Don't test implementation details (internal state, private methods)
- ❌ Don't make E2E tests dependent on database state
- ❌ Don't skip cleanup between tests

## CI/CD Integration

Tests run automatically on every push and pull request via GitHub Actions.

### Workflow: `.github/workflows/test.yml`

```yaml
name: Tests
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  unit-and-component:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm test:run

  smoke-e2e:
    runs-on: ubuntu-latest
    needs: unit-and-component
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm exec playwright install --with-deps chromium
      - run: pnpm test:e2e
```

## Extracted Modules for Testability

To improve testability, some logic was extracted into separate modules:

### Validation Schema

```typescript
// lib/schemas/contact.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(1000),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

### Rate Limiter

```typescript
// lib/rate-limit.ts
export const createRateLimiter = (config: RateLimitConfig) => {
  // ... implementation
  return {
    checkRateLimit,
    getRemainingRequests,
    reset,
    clear,
  }
}
```

## Debugging Failed Tests

### Vitest

```bash
# Run a specific test file
pnpm vitest run tests/components/contact-form.test.tsx

# Run tests matching a pattern
pnpm vitest run -t "should render"

# Run in watch mode with UI
pnpm vitest --ui
```

### Playwright

```bash
# Run with debug mode
pnpm playwright test --debug

# Run with headed browser
pnpm playwright test --headed

# View test report
pnpm playwright show-report
```

## Coverage

Generate a coverage report:

```bash
pnpm test:coverage
```

Coverage reports are generated in:
- Terminal output (text)
- `coverage/` directory (HTML report)

## Adding New Tests

1. **Unit tests**: Add to `tests/unit/` following the same directory structure as `lib/`
2. **Component tests**: Add to `tests/components/` following the same structure as `components/`
3. **E2E tests**: Add to `tests/e2e/` - keep them simple and focused on critical paths

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)

