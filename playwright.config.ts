import { defineConfig, devices } from "@playwright/test";

const playwrightPort = process.env.PLAYWRIGHT_PORT ?? "3000";
const playwrightBaseUrl =
	process.env.PLAYWRIGHT_BASE_URL ?? `http://localhost:${playwrightPort}`;

const e2eSupabaseEnvironment =
	process.env.E2E_SUPABASE_URL &&
	process.env.E2E_SUPABASE_ANON_KEY &&
	process.env.E2E_SUPABASE_SERVICE_ROLE_KEY
		? {
				NEXT_PUBLIC_SUPABASE_URL: process.env.E2E_SUPABASE_URL,
				NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.E2E_SUPABASE_ANON_KEY,
				SUPABASE_SERVICE_ROLE_KEY: process.env.E2E_SUPABASE_SERVICE_ROLE_KEY,
			}
		: undefined;

/**
 * Playwright configuration for smoke E2E tests
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	testDir: "./tests/e2e",

	// Run tests in parallel
	fullyParallel: true,

	// Fail the build on CI if you accidentally left test.only in the source code
	forbidOnly: !!process.env.CI,

	// Retry on CI only - helps with flakiness
	retries: process.env.CI ? 2 : 0,

	// Opt out of parallel tests on CI for more stability
	workers: process.env.CI ? 1 : undefined,

	// Reporter to use
	reporter: [["html", { open: "never" }], ["list"]],

	// Global timeout for each test
	timeout: 30000,

	// Expect timeout
	expect: {
		timeout: 5000,
	},

	// Shared settings for all the projects below
	use: {
		// Base URL to use in actions like `await page.goto('/')`
		baseURL: playwrightBaseUrl,

		// Collect trace when retrying the failed test
		trace: "on-first-retry",

		// Take screenshot on failure
		screenshot: "only-on-failure",

		// Record video on failure
		video: "on-first-retry",
	},

	// Configure projects for major browsers - only Chromium for smoke tests
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],

	// Run your local dev server before starting the tests
	webServer: {
		command: `pnpm dev --port ${playwrightPort}`,
		url: playwrightBaseUrl,
		reuseExistingServer: !process.env.CI,
		timeout: 120000,
		...(e2eSupabaseEnvironment ? { env: e2eSupabaseEnvironment } : {}),
	},
});
