import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { QuizManager } from "@/components/admin/quiz-manager";

afterEach(() => vi.restoreAllMocks());

const lessons = [
	{ id: "lesson-1", title: "Missing", course_id: "course-1", order_index: 1 },
	{ id: "lesson-2", title: "Draft", course_id: "course-1", order_index: 2 },
	{
		id: "lesson-3",
		title: "Published",
		course_id: "course-1",
		order_index: 3,
	},
	{
		id: "lesson-4",
		title: "Changed lesson",
		course_id: "course-1",
		order_index: 4,
	},
];

describe("QuizManager lesson challenge dashboard", () => {
	it("shows missing, draft, published, and outdated states by lesson", async () => {
		vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
			const url = String(input);
			if (url.endsWith("/api/admin/quizzes/report"))
				return new Response(
					JSON.stringify({
						participation: 0,
						livePlayers: 0,
						masteryRate: 0,
						misconceptions: [],
						lessonChallenges: { games: 0, participants: 0, accuracy: 0 },
						adaptive: {
							publishedQuestions: 0,
							coverageGaps: [],
							insufficientCourses: [],
							fallbacks: 0,
							sessionErrors: 0,
							remediationRate: 0,
						},
					}),
					{ status: 200 },
				);
			return new Response(
				JSON.stringify({
					quizzes: [
						{
							id: "quiz-draft",
							title: "Draft",
							description: "",
							quiz_type: "lesson_challenge",
							status: "draft",
							lesson_id: "lesson-2",
							course_id: null,
						},
						{
							id: "quiz-published",
							title: "Published",
							description: "",
							quiz_type: "lesson_challenge",
							status: "published",
							lesson_id: "lesson-3",
							course_id: null,
							source_outdated: false,
						},
						{
							id: "quiz-outdated",
							title: "Changed lesson",
							description: "",
							quiz_type: "lesson_challenge",
							status: "published",
							lesson_id: "lesson-4",
							course_id: null,
							source_outdated: true,
						},
					],
				}),
				{ status: 200 },
			);
		});

		render(
			<QuizManager
				courses={[{ id: "course-1", title: "Level 1" }]}
				lessons={lessons}
			/>,
		);

		const dashboard = await screen.findByText("Live Lesson Challenges");
		const card =
			dashboard.closest("div[data-slot='card']") || dashboard.parentElement;
		expect(card).not.toBeNull();
		const view = within(card as HTMLElement);
		expect(view.getByText("Missing", { selector: "span" })).toBeInTheDocument();
		expect(view.getByText("Draft", { selector: "span" })).toBeInTheDocument();
		expect(
			view.getByText("Published", { selector: "span" }),
		).toBeInTheDocument();
		expect(
			view.getByText("Outdated", { selector: "span" }),
		).toBeInTheDocument();
		expect(view.getByRole("button", { name: "Run" })).toBeInTheDocument();
		expect(
			view.getByRole("combobox", { name: "Question difficulty" }),
		).toHaveTextContent("Standard");
		expect(view.getAllByRole("button", { name: "Host current" })).toHaveLength(
			2,
		);
	});

	it("sends the selected challenge difficulty to the admin endpoint", async () => {
		const user = userEvent.setup();
		HTMLElement.prototype.scrollIntoView = vi.fn();
		const requests: { url: string; body?: string }[] = [];
		vi.spyOn(globalThis, "fetch").mockImplementation(async (input, init) => {
			const url = String(input);
			requests.push({
				url,
				body: typeof init?.body === "string" ? init.body : undefined,
			});
			if (url.endsWith("/api/admin/quizzes/report"))
				return new Response(
					JSON.stringify({
						participation: 0,
						livePlayers: 0,
						masteryRate: 0,
						misconceptions: [],
						lessonChallenges: { games: 0, participants: 0, accuracy: 0 },
						adaptive: {
							publishedQuestions: 0,
							coverageGaps: [],
							insufficientCourses: [],
							fallbacks: 0,
							sessionErrors: 0,
							remediationRate: 0,
						},
					}),
					{ status: 200 },
				);
			if (url.endsWith("/api/admin/quizzes/generate-challenge"))
				return new Response(JSON.stringify({ error: "Test stop" }), {
					status: 500,
				});
			return new Response(JSON.stringify({ quizzes: [] }), { status: 200 });
		});

		render(
			<QuizManager
				courses={[{ id: "course-1", title: "Level 1" }]}
				lessons={[lessons[0]]}
			/>,
		);

		const difficulty = await screen.findByRole("combobox", {
			name: "Question difficulty",
		});
		difficulty.focus();
		await user.keyboard("{Enter}{End}{Enter}");
		expect(difficulty).toHaveTextContent("Very challenging");
		await user.click(screen.getByRole("button", { name: "Run" }));

		await waitFor(() => {
			const generationRequest = requests.find((entry) =>
				entry.url.endsWith("/api/admin/quizzes/generate-challenge"),
			);
			expect(JSON.parse(generationRequest?.body || "{}")).toMatchObject({
				lessonId: "lesson-1",
				regenerate: false,
				difficulty: "very_challenging",
			});
		});
	});
});
