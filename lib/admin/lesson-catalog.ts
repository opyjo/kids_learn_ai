export interface AdminCourse {
	id: string;
	title: string;
	slug: string;
	order_index: number;
}

export type AdminCourseRelation =
	| AdminCourse
	| AdminCourse[]
	| null
	| undefined;

export interface CourseAwareLesson {
	course: AdminCourse | null;
	orderIndex: number;
	title: string;
}

export interface AdminLessonGroup<TLesson extends CourseAwareLesson> {
	key: string;
	course: AdminCourse | null;
	lessons: TLesson[];
}

export function normalizeAdminCourse(
	relation: AdminCourseRelation,
): AdminCourse | null {
	if (Array.isArray(relation)) {
		return relation[0] ?? null;
	}

	return relation ?? null;
}

export function groupAdminLessonsByCourse<TLesson extends CourseAwareLesson>(
	lessons: readonly TLesson[],
): AdminLessonGroup<TLesson>[] {
	const groups = new Map<string, AdminLessonGroup<TLesson>>();

	for (const lesson of lessons) {
		const key = lesson.course?.id ?? "unassigned";
		const group = groups.get(key);

		if (group) {
			group.lessons.push(lesson);
		} else {
			groups.set(key, {
				key,
				course: lesson.course,
				lessons: [lesson],
			});
		}
	}

	return [...groups.values()]
		.sort((left, right) => {
			if (!left.course) return 1;
			if (!right.course) return -1;

			return (
				left.course.order_index - right.course.order_index ||
				left.course.title.localeCompare(right.course.title)
			);
		})
		.map((group) => ({
			...group,
			lessons: [...group.lessons].sort(
				(left, right) =>
					left.orderIndex - right.orderIndex ||
					left.title.localeCompare(right.title),
			),
		}));
}

export function getStudentLessonHref(
	courseSlug: string | null | undefined,
	orderIndex: number,
): string | null {
	return courseSlug ? `/lessons/${courseSlug}/${orderIndex}` : null;
}

export function getTeacherNotesHref(
	courseSlug: string | null | undefined,
	orderIndex: number,
): string | null {
	return courseSlug ? `/teacher-notes/${courseSlug}/${orderIndex}` : null;
}
