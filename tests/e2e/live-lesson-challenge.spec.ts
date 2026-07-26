import {
	type Browser,
	type BrowserContext,
	expect,
	type Page,
	test,
} from "@playwright/test";
import {
	createLiveQuizFixture,
	liveQuizE2EConfigured,
} from "./helpers/live-quiz-fixture";

async function signIn(page: Page, user: { email: string; password: string }) {
	await page.goto("/login");
	await page.getByLabel("Email or student username").fill(user.email);
	await page.getByLabel("Password").fill(user.password);
	await page.getByRole("button", { name: "Sign In" }).click();
	await expect(page).not.toHaveURL(/\/login/);
}

async function openSignedInContext(
	browser: Browser,
	user: { email: string; password: string },
): Promise<{ context: BrowserContext; page: Page }> {
	const context = await browser.newContext({
		baseURL: "http://localhost:3000",
	});
	const page = await context.newPage();
	await signIn(page, user);
	return { context, page };
}

test.describe("Live lesson challenge — multi-user recovery", () => {
	test.skip(
		!liveQuizE2EConfigured,
		"Set dedicated E2E Supabase credentials and E2E_ALLOW_DATABASE_WRITES=true",
	);

	test("two students answer together and a new host device recovers the timed game", async ({
		browser,
	}) => {
		test.setTimeout(90_000);
		const fixture = await createLiveQuizFixture();
		const contexts: BrowserContext[] = [];

		try {
			const host = await openSignedInContext(browser, fixture.admin);
			contexts.push(host.context);
			const createResponse = await host.context.request.post("/api/quiz/live", {
				data: { quizId: fixture.quizId },
			});
			expect(createResponse.ok()).toBe(true);
			const game = (await createResponse.json()) as { code: string };
			await host.page.goto(`/quiz/live/${game.code}`);

			const studentOne = await openSignedInContext(
				browser,
				fixture.students[0],
			);
			const studentTwo = await openSignedInContext(
				browser,
				fixture.students[1],
			);
			contexts.push(studentOne.context, studentTwo.context);
			await Promise.all([
				studentOne.page.goto(`/quiz/live/${game.code}`),
				studentTwo.page.goto(`/quiz/live/${game.code}`),
			]);
			await Promise.all([
				studentOne.page.getByRole("button", { name: "Join the lobby" }).click(),
				studentTwo.page.getByRole("button", { name: "Join the lobby" }).click(),
			]);

			await expect(host.page.getByText("Lobby (2)")).toBeVisible();
			await host.page.getByRole("button", { name: "Start game" }).click();
			await Promise.all([
				expect(
					studentOne.page.getByText(
						"Which word describes code that runs again?",
					),
				).toBeVisible(),
				expect(
					studentTwo.page.getByText(
						"Which word describes code that runs again?",
					),
				).toBeVisible(),
			]);

			await studentOne.page.getByRole("radio", { name: "Loop" }).click();
			await studentTwo.page.getByRole("radio", { name: "Variable" }).click();
			await Promise.all([
				studentOne.page.getByRole("button", { name: "Lock answer" }).click(),
				studentTwo.page.getByRole("button", { name: "Lock answer" }).click(),
			]);
			await expect(host.page.getByText("2/2 answered")).toBeVisible();

			// Closing the original host context proves that students, rather than
			// the host's browser, can trigger the server-side deadline reconciliation.
			await host.context.close();
			contexts.splice(contexts.indexOf(host.context), 1);
			await expect(studentOne.page.getByText(/Answer: Loop/)).toBeVisible({
				timeout: 20_000,
			});

			const recoveredHost = await openSignedInContext(browser, fixture.admin);
			contexts.push(recoveredHost.context);
			await recoveredHost.page.goto(`/quiz/live/${game.code}`);
			await expect(
				recoveredHost.page.getByRole("button", {
					name: "Reopen for 10 seconds",
				}),
			).toBeVisible();
			await recoveredHost.page
				.getByRole("button", { name: "Next question" })
				.click();
			await expect(
				studentTwo.page.getByText("What stores a value for later use?"),
			).toBeVisible();
		} finally {
			await Promise.allSettled(contexts.map((context) => context.close()));
			await fixture.cleanup();
		}
	});
});
