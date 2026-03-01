import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@/tests/test-utils";

vi.mock("@/components/site-header", () => ({
	SiteHeader: () => <header data-testid="site-header" />,
}));

vi.mock("@/components/lessons/lesson-breadcrumbs", () => ({
	LessonBreadcrumbs: () => <nav data-testid="lesson-breadcrumbs" />,
}));

vi.mock("@/components/code/python-editor", () => ({
	PythonEditor: () => <div data-testid="python-editor">Python Editor</div>,
}));

vi.mock("@/components/code/trinket-editor", () => ({
	TrinketEditor: () => <div data-testid="trinket-editor">Trinket Editor</div>,
}));

vi.mock("@/components/dashboard/trinket-preview", () => ({
	TrinketPreview: () => (
		<div data-testid="trinket-preview">Submission Preview</div>
	),
}));

vi.mock("@/components/dashboard/trinket-submission-form", () => ({
	TrinketSubmissionForm: () => (
		<button type="button" data-testid="trinket-submission-form">
			Submission Form
		</button>
	),
}));

vi.mock("sonner", () => ({
	toast: {
		success: vi.fn(),
	},
}));

vi.mock("@/lib/supabase/client", () => {
	const chainFactory = () => {
		const chain: Record<string, any> = {};
		chain.select = vi.fn(() => chain);
		chain.eq = vi.fn(() => chain);
		chain.maybeSingle = vi.fn(async () => ({ data: null, error: null }));
		chain.delete = vi.fn(() => chain);
		chain.insert = vi.fn(async () => ({ error: null }));
		return chain;
	};

	return {
		getSupabaseBrowserClient: vi.fn(() => ({
			auth: {
				getUser: vi.fn(async () => ({ data: { user: { id: "user-1" } } })),
				getSession: vi.fn(async () => ({
					data: { session: { user: { id: "user-1" } } },
					error: null,
				})),
			},
			from: vi.fn(() => chainFactory()),
		})),
	};
});

import { LessonViewer } from "@/components/lessons/lesson-viewer";
import type { LessonViewerProps } from "@/components/lessons/viewer/lesson-viewer.types";

function buildProps(
	overrides: Partial<LessonViewerProps> = {},
): LessonViewerProps {
	return {
		lesson: {
			id: 2,
			dbId: "lesson-2",
			title: "Variables",
			description: "Learn variables",
			content: "# Variables\nUse variables in Python.",
			difficulty: "beginner",
			order_index: 2,
			is_premium: false,
			starter_code: "print('hello')",
			solution_code: "print('solution')",
			requires_trinket: false,
			class_activities: "Do this in class",
			take_home_assignment: "Do this at home",
			ai_activities: "Think about AI",
		},
		userId: "user-1",
		courseSlug: "term-1-hello-python",
		courseTitle: "Term 1",
		navigation: {
			currentOrder: 2,
			previousOrder: 1,
			nextOrder: 3,
			totalLessons: 3,
		},
		courseLessons: [
			{
				dbId: "lesson-1",
				orderIndex: 1,
				title: "Intro",
				href: "/lessons/term-1-hello-python/1",
				isCompleted: true,
				isAccessible: true,
			},
			{
				dbId: "lesson-2",
				orderIndex: 2,
				title: "Variables",
				href: "/lessons/term-1-hello-python/2",
				isCompleted: false,
				isAccessible: true,
			},
			{
				dbId: "lesson-3",
				orderIndex: 3,
				title: "Loops",
				href: "/lessons/term-1-hello-python/3",
				isCompleted: false,
				isAccessible: false,
			},
		],
		...overrides,
	};
}

describe("LessonViewer", () => {
	it("renders lesson index with current, completed, and locked states", () => {
		render(<LessonViewer {...buildProps()} />);

		expect(screen.getAllByText("Lesson Navigator").length).toBeGreaterThan(0);
		expect(screen.getByText(/Lesson 3 Locked/i)).toBeInTheDocument();

		const currentLessonLink = screen.getByRole("link", {
			name: /Variables/i,
		});
		expect(currentLessonLink).toHaveAttribute("aria-current", "page");
	});

	it("shows one canonical prev/next control set", () => {
		render(<LessonViewer {...buildProps()} />);

		expect(screen.getAllByLabelText("Go to previous lesson")).toHaveLength(1);
		expect(screen.getAllByLabelText("Go to next lesson")).toHaveLength(1);
	});

	it("switches between Learn and Code modes for term courses", async () => {
		const { user } = render(<LessonViewer {...buildProps()} />);

		const codeTab = screen.getByRole("tab", { name: "Code" });
		expect(codeTab).toHaveAttribute("aria-selected", "false");

		await user.click(codeTab);
		expect(codeTab).toHaveAttribute("aria-selected", "true");
		expect(screen.getByTestId("python-editor")).toBeInTheDocument();
	});

	it("shows homework tab only when take-home assignment is present", () => {
		const { rerender } = render(<LessonViewer {...buildProps()} />);
		expect(screen.getByRole("tab", { name: "Homework" })).toBeInTheDocument();

		rerender(
			<LessonViewer
				{...buildProps({
					lesson: {
						...buildProps().lesson,
						take_home_assignment: "",
					},
				})}
			/>,
		);

		expect(screen.queryByRole("tab", { name: "Homework" })).toBeNull();
	});
});
