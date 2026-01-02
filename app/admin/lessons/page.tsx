import { Eye, Pencil, Plus } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface LessonData {
	id: string;
	title: string;
	description: string;
	difficulty_level: string;
	order_index: number;
	completed_lessons: { count: number }[] | null;
	courses: { id: string; title: string; slug: string } | null;
}

export default async function LessonsPage() {
	const supabase = await getSupabaseServerClient();

	// Fetch lessons with completion counts
	const { data: lessonsData } = await supabase
		.from("lessons")
		.select(
			`
      id,
      title,
      description,
      difficulty_level,
      order_index,
      completed_lessons(count),
      courses(id, title, slug)
    `,
		)
		.order("order_index", { ascending: true });

	const lessons = (lessonsData || []).map((lesson: LessonData) => ({
		id: lesson.id,
		orderIndex: lesson.order_index,
		title: lesson.title,
		description: lesson.description,
		completions: lesson.completed_lessons?.[0]?.count || 0,
		difficulty: lesson.difficulty_level,
		courseTitle: lesson.courses?.title || "Unassigned",
		courseSlug: lesson.courses?.slug || "python-foundations",
	}));

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
						Lesson Management
					</h1>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						Create and manage course lessons
					</p>
				</div>
				<Button asChild className="gap-2">
					<Link href="/admin/lessons/new">
						<Plus className="h-4 w-4" />
						Create Lesson
					</Link>
				</Button>
			</div>

			<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
				<CardHeader className="pb-4">
					<CardTitle className="text-lg font-semibold">All Lessons</CardTitle>
					<CardDescription>
						{lessons.length} lesson{lessons.length !== 1 ? "s" : ""} total
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-0">
					{lessons.length === 0 ? (
						<div className="text-center py-12">
							<p className="text-gray-500 dark:text-gray-400 mb-4">
								No lessons created yet
							</p>
							<Button asChild>
								<Link href="/admin/lessons/new">Create your first lesson</Link>
							</Button>
						</div>
					) : (
						<div className="divide-y divide-gray-100 dark:divide-gray-800">
							{lessons.map((lesson) => (
								<div
									key={lesson.id}
									className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
								>
									<div className="flex items-center gap-4">
										<div className="h-10 w-10 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 font-semibold text-sm">
											{lesson.orderIndex}
										</div>
										<div>
											<h4 className="text-sm font-medium text-gray-900 dark:text-white">
												{lesson.title}
											</h4>
											<div className="flex items-center gap-3 mt-1">
												<span className="text-xs text-gray-500">
													{lesson.courseTitle}
												</span>
												<span className="text-xs text-gray-400">•</span>
												<span className="text-xs text-gray-500">
													{lesson.completions} completions
												</span>
												<Badge variant="outline" className="text-xs capitalize">
													{lesson.difficulty}
												</Badge>
											</div>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<Button
											variant="ghost"
											size="sm"
											asChild
											className="h-8 w-8 p-0"
										>
											<Link href={`/admin/lessons/${lesson.orderIndex}/edit`}>
												<Pencil className="h-4 w-4" />
												<span className="sr-only">Edit</span>
											</Link>
										</Button>
										<Button
											variant="ghost"
											size="sm"
											asChild
											className="h-8 w-8 p-0"
										>
											<Link
												href={`/lessons/${lesson.courseSlug}/${lesson.orderIndex}`}
											>
												<Eye className="h-4 w-4" />
												<span className="sr-only">Preview</span>
											</Link>
										</Button>
									</div>
								</div>
							))}
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
