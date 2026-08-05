import { describe, expect, it } from "vitest";
import {
	type AdminCourse,
	getStudentLessonHref,
	getTeacherNotesHref,
	groupAdminLessonsByCourse,
	normalizeAdminCourse,
} from "@/lib/admin/lesson-catalog";

const termOne: AdminCourse = {
	id: "course-1",
	title: "Term 1: Hello Python",
	slug: "term-1-hello-python",
	order_index: 1,
};

const termTwo: AdminCourse = {
	id: "course-2",
	title: "Term 2: Math Wizard",
	slug: "term-2-math-wizard",
	order_index: 2,
};

describe("admin lesson catalog", () => {
	it("normalizes both Supabase relation shapes", () => {
		expect(normalizeAdminCourse(termOne)).toEqual(termOne);
		expect(normalizeAdminCourse([termTwo])).toEqual(termTwo);
		expect(normalizeAdminCourse([])).toBeNull();
		expect(normalizeAdminCourse(null)).toBeNull();
	});

	it("groups by course order and sorts lessons within each course", () => {
		const groups = groupAdminLessonsByCourse([
			{
				id: "t2-w2",
				title: "Python Does Math",
				orderIndex: 2,
				course: termTwo,
			},
			{ id: "none", title: "Unassigned", orderIndex: 1, course: null },
			{
				id: "t1-w2",
				title: "Print Is Your Voice",
				orderIndex: 2,
				course: termOne,
			},
			{
				id: "t1-w1",
				title: "Welcome to Coding",
				orderIndex: 1,
				course: termOne,
			},
			{ id: "t2-w1", title: "Welcome Back", orderIndex: 1, course: termTwo },
		]);

		expect(groups.map((group) => group.course?.slug ?? "unassigned")).toEqual([
			"term-1-hello-python",
			"term-2-math-wizard",
			"unassigned",
		]);
		expect(groups[0].lessons.map((lesson) => lesson.id)).toEqual([
			"t1-w1",
			"t1-w2",
		]);
		expect(groups[1].lessons.map((lesson) => lesson.id)).toEqual([
			"t2-w1",
			"t2-w2",
		]);
	});

	it("builds links from the lesson's real course and never falls back", () => {
		expect(getStudentLessonHref(termTwo.slug, 3)).toBe(
			"/lessons/term-2-math-wizard/3",
		);
		expect(getTeacherNotesHref(termTwo.slug, 3)).toBe(
			"/teacher-notes/term-2-math-wizard/3",
		);
		expect(getStudentLessonHref(null, 3)).toBeNull();
		expect(getTeacherNotesHref(undefined, 3)).toBeNull();
	});
});
