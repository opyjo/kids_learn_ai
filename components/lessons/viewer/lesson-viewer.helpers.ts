import type {
	CourseLessonNavItem,
	LessonNavigation,
	LessonVariant,
} from "@/components/lessons/viewer/lesson-viewer.types";

interface RawCourseLesson {
	id: string;
	order_index: number;
	title: string;
}

interface BuildCourseLessonsParams {
	courseSlug: string;
	lessons: RawCourseLesson[];
	completedLessonIds: Set<string>;
	isAccessibleLesson: (orderIndex: number) => boolean;
}

export function isLevelTermCourse(courseSlug?: string): boolean {
	if (!courseSlug) return false;

	return (
		courseSlug.startsWith("level-") ||
		courseSlug.startsWith("term-") ||
		courseSlug.startsWith("year2-term-")
	);
}

export function getLessonVariant(courseSlug?: string): LessonVariant {
	if (courseSlug === "ai-ml") return "ai-ml";
	if (isLevelTermCourse(courseSlug)) return "level-term";
	return "legacy";
}

export function getLessonHref(courseSlug: string, orderIndex: number): string {
	return `/lessons/${courseSlug}/${orderIndex}`;
}

export function buildCourseLessons({
	courseSlug,
	lessons,
	completedLessonIds,
	isAccessibleLesson,
}: BuildCourseLessonsParams): CourseLessonNavItem[] {
	return lessons.map((lesson) => ({
		dbId: lesson.id,
		orderIndex: lesson.order_index,
		title: lesson.title,
		href: getLessonHref(courseSlug, lesson.order_index),
		isCompleted: completedLessonIds.has(lesson.id),
		isAccessible: isAccessibleLesson(lesson.order_index),
	}));
}

export function computeLessonNavigation(
	currentOrder: number,
	courseLessons: CourseLessonNavItem[],
): LessonNavigation {
	const accessibleOrders = courseLessons
		.filter((lesson) => lesson.isAccessible)
		.map((lesson) => lesson.orderIndex)
		.sort((a, b) => a - b);

	const previousOrder = [...accessibleOrders]
		.reverse()
		.find((order) => order < currentOrder);
	const nextOrder = accessibleOrders.find((order) => order > currentOrder);

	return {
		currentOrder,
		previousOrder,
		nextOrder,
		totalLessons: courseLessons.length,
	};
}

interface ActivityLine {
	key: string;
	type: "heading" | "list" | "text";
	marker?: string;
	text: string;
	parts: string[];
	emphasized: boolean;
}

export function parseAiMlActivities(starterCode: string): ActivityLine[] {
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	const headingPattern = /^[A-Z\s]+:$/;
	const emojiPatterns = ["🎮", "📸", "🎵", "📊", "🤔", "✅", "📝"];

	return starterCode
		.replace(/^<!--[\s\S]*?-->/, "")
		.trim()
		.split("\n")
		.filter((line) => line.trim() !== "")
		.map((line, index, array) => {
			const trimmedLine = line.trim();
			const parts = line.split(urlRegex);
			const isHeading =
				emojiPatterns.some((emoji) => trimmedLine.startsWith(emoji)) ||
				headingPattern.test(trimmedLine);
			const isNumberedItem = /^\d+\.\s/.test(trimmedLine);
			const isBulletItem = /^[-•]\s/.test(trimmedLine);

			const prevLine = index > 0 ? array[index - 1] : "";
			const emphasized =
				index > 0 &&
				(prevLine.trim() === "" ||
					headingPattern.test(prevLine.trim()) ||
					emojiPatterns.some((emoji) => prevLine.trim().startsWith(emoji)));

			const marker = isNumberedItem
				? trimmedLine.match(/^\d+\./)?.[0]
				: isBulletItem
					? "•"
					: undefined;

			const text =
				isNumberedItem || isBulletItem
					? line.replace(/^\d+\.\s|^[-•]\s/, "")
					: line;

			return {
				key: `line-${index}-${line.substring(0, 20).replace(/\s/g, "-")}`,
				type: isHeading ? "heading" : marker ? "list" : "text",
				marker,
				text,
				parts,
				emphasized,
			} as ActivityLine;
		});
}

export function getNavigationHref(
	courseSlug: string | undefined,
	order: number | undefined,
): string | undefined {
	if (!courseSlug || !order) return undefined;
	return getLessonHref(courseSlug, order);
}
