export interface Lesson {
	id: number;
	dbId: string;
	title: string;
	description: string;
	content: string;
	difficulty: string;
	order_index: number;
	is_premium: boolean;
	starter_code: string;
	solution_code: string;
	requires_trinket?: boolean;
	class_activities?: string;
	take_home_assignment?: string;
	ai_activities?: string;
}

export interface LessonNavigation {
	currentOrder: number;
	previousOrder?: number;
	nextOrder?: number;
	totalLessons: number;
}

export interface CourseLessonNavItem {
	dbId: string;
	orderIndex: number;
	title: string;
	href: string;
	isCompleted: boolean;
	isAccessible: boolean;
}

export interface LessonSubmission {
	id: string;
	trinketUrl: string;
	status: "submitted" | "reviewed" | "graded";
	feedback: string | null;
	grade: string | null;
}

export interface LessonViewerProps {
	lesson: Lesson;
	userId?: string;
	courseSlug?: string;
	courseTitle?: string;
	navigation: LessonNavigation;
	courseLessons: CourseLessonNavItem[];
}

export type LessonVariant = "ai-ml" | "level-term" | "legacy";

export type LearnerMode = "learn" | "code";
