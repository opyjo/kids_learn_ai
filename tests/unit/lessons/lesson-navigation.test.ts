import { describe, expect, it } from "vitest";
import {
	buildCourseLessons,
	computeLessonNavigation,
} from "@/components/lessons/viewer/lesson-viewer.helpers";

describe("lesson navigation helpers", () => {
	it("computes previous and next for first, middle, and last lessons", () => {
		const lessons = [
			{
				dbId: "l1",
				orderIndex: 1,
				title: "Lesson 1",
				href: "/lessons/term-1/1",
				isCompleted: false,
				isAccessible: true,
			},
			{
				dbId: "l2",
				orderIndex: 2,
				title: "Lesson 2",
				href: "/lessons/term-1/2",
				isCompleted: false,
				isAccessible: true,
			},
			{
				dbId: "l3",
				orderIndex: 3,
				title: "Lesson 3",
				href: "/lessons/term-1/3",
				isCompleted: false,
				isAccessible: true,
			},
		];

		expect(computeLessonNavigation(1, lessons)).toEqual({
			currentOrder: 1,
			previousOrder: undefined,
			nextOrder: 2,
			totalLessons: 3,
		});

		expect(computeLessonNavigation(2, lessons)).toEqual({
			currentOrder: 2,
			previousOrder: 1,
			nextOrder: 3,
			totalLessons: 3,
		});

		expect(computeLessonNavigation(3, lessons)).toEqual({
			currentOrder: 3,
			previousOrder: 2,
			nextOrder: undefined,
			totalLessons: 3,
		});
	});

	it("skips inaccessible lessons when computing adjacent navigation", () => {
		const lessons = [
			{
				dbId: "l1",
				orderIndex: 1,
				title: "Lesson 1",
				href: "/lessons/term-1/1",
				isCompleted: false,
				isAccessible: true,
			},
			{
				dbId: "l2",
				orderIndex: 2,
				title: "Lesson 2",
				href: "/lessons/term-1/2",
				isCompleted: false,
				isAccessible: false,
			},
			{
				dbId: "l3",
				orderIndex: 3,
				title: "Lesson 3",
				href: "/lessons/term-1/3",
				isCompleted: false,
				isAccessible: true,
			},
		];

		expect(computeLessonNavigation(3, lessons)).toEqual({
			currentOrder: 3,
			previousOrder: 1,
			nextOrder: undefined,
			totalLessons: 3,
		});
	});

	it("maps completion and accessibility when building course lessons", () => {
		const completedLessonIds = new Set(["lesson-2"]);
		const built = buildCourseLessons({
			courseSlug: "term-1-hello-python",
			lessons: [
				{ id: "lesson-1", order_index: 1, title: "Welcome" },
				{ id: "lesson-2", order_index: 2, title: "Print" },
			],
			completedLessonIds,
			isAccessibleLesson: (orderIndex) => orderIndex === 1,
		});

		expect(built).toEqual([
			{
				dbId: "lesson-1",
				orderIndex: 1,
				title: "Welcome",
				href: "/lessons/term-1-hello-python/1",
				isCompleted: false,
				isAccessible: true,
			},
			{
				dbId: "lesson-2",
				orderIndex: 2,
				title: "Print",
				href: "/lessons/term-1-hello-python/2",
				isCompleted: true,
				isAccessible: false,
			},
		]);
	});
});
