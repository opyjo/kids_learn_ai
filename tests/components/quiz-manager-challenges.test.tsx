import { render, screen, within } from "@testing-library/react";
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
		expect(view.getAllByRole("button", { name: "Host current" })).toHaveLength(
			2,
		);
	});
});
