import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { type NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface SyncResult {
	synced: string[];
	errors: string[];
	skipped: string[];
	teacherNotes: {
		synced: string[];
		errors: string[];
	};
}

export async function POST(_request: NextRequest) {
	const supabase = await getSupabaseServerClient();

	// Auth check - ensure admin
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const { data: profile } = await supabase
		.from("profiles")
		.select("role")
		.eq("id", user.id)
		.single();

	if (profile?.role !== "admin") {
		return NextResponse.json({ error: "Forbidden" }, { status: 403 });
	}

	try {
		const lessonsDir = path.join(process.cwd(), "docs/Lesson_content");
		const results: SyncResult = {
			synced: [],
			errors: [],
			skipped: [],
			teacherNotes: { synced: [], errors: [] },
		};

		// Check if lessons directory exists
		if (!fs.existsSync(lessonsDir)) {
			return NextResponse.json(
				{ error: "Lessons directory not found" },
				{ status: 404 },
			);
		}

		// Get all course folders
		const courseFolders = fs
			.readdirSync(lessonsDir, { withFileTypes: true })
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);

		// Fetch all courses to map slugs to IDs
		const { data: courses } = await supabase.from("courses").select("id, slug");

		const courseMap = new Map(
			(courses || []).map((c: { id: string; slug: string }) => [c.slug, c.id]),
		);

		for (const courseFolder of courseFolders) {
			const coursePath = path.join(lessonsDir, courseFolder);
			const lessonFolders = fs
				.readdirSync(coursePath, { withFileTypes: true })
				.filter((dirent) => dirent.isDirectory())
				.map((dirent) => dirent.name);

			for (const lessonFolder of lessonFolders) {
				const lessonFile = path.join(coursePath, lessonFolder, "lesson.md");

				// Skip if no lesson.md file exists
				if (!fs.existsSync(lessonFile)) {
					continue;
				}

				try {
					const fileContent = fs.readFileSync(lessonFile, "utf-8");
					const { data: frontmatter, content } = matter(fileContent);

					// Skip files without frontmatter or required fields
					if (
						!frontmatter.title ||
						!frontmatter.course_slug ||
						!frontmatter.order_index
					) {
						results.skipped.push(
							`${courseFolder}/${lessonFolder}: Missing required frontmatter (title, course_slug, order_index)`,
						);
						continue;
					}

					// Get course ID from slug
					const courseId = courseMap.get(frontmatter.course_slug);

					if (!courseId) {
						results.errors.push(
							`${courseFolder}/${lessonFolder}: Course not found for slug "${frontmatter.course_slug}"`,
						);
						continue;
					}

					// Check if lesson already exists
					const { data: existingLesson } = await supabase
						.from("lessons")
						.select("id")
						.eq("course_id", courseId)
						.eq("order_index", frontmatter.order_index)
						.maybeSingle();

					const lessonData = {
						title: frontmatter.title,
						description: frontmatter.description || "",
						content: content.trim(),
						difficulty_level: frontmatter.difficulty || "beginner",
						order_index: frontmatter.order_index,
						is_premium: frontmatter.is_premium || false,
						requires_trinket: frontmatter.requires_trinket || false,
						starter_code: frontmatter.starter_code || "",
						solution_code: frontmatter.solution_code || "",
						class_activities: frontmatter.class_activities || "",
						take_home_assignment: frontmatter.take_home_assignment || "",
						course_id: courseId,
						updated_at: new Date().toISOString(),
					};

					let lessonId: string | null = null;

					if (existingLesson) {
						// Update existing lesson
						const { error } = await supabase
							.from("lessons")
							.update(lessonData)
							.eq("id", existingLesson.id);

						if (error) {
							results.errors.push(
								`${courseFolder}/${lessonFolder}: ${error.message}`,
							);
						} else {
							results.synced.push(`${courseFolder}/${lessonFolder} (updated)`);
							lessonId = existingLesson.id;
						}
					} else {
						// Insert new lesson
						const { data: newLesson, error } = await supabase
							.from("lessons")
							.insert({
								...lessonData,
								created_by: user.id,
							})
							.select("id")
							.single();

						if (error) {
							results.errors.push(
								`${courseFolder}/${lessonFolder}: ${error.message}`,
							);
						} else {
							results.synced.push(`${courseFolder}/${lessonFolder} (created)`);
							lessonId = newLesson?.id || null;
						}
					}

					// Sync teacher notes if lesson was successfully synced
					if (lessonId) {
						const teacherNotesFile = path.join(
							coursePath,
							lessonFolder,
							"teacher-notes.md",
						);

						if (fs.existsSync(teacherNotesFile)) {
							try {
								const notesContent = fs.readFileSync(teacherNotesFile, "utf-8");

								// Check if teacher notes already exist for this lesson
								const { data: existingNotes } = await supabase
									.from("teacher_notes")
									.select("id")
									.eq("lesson_id", lessonId)
									.maybeSingle();

								if (existingNotes) {
									// Update existing notes
									const { error: notesError } = await supabase
										.from("teacher_notes")
										.update({
											content: notesContent,
											updated_at: new Date().toISOString(),
										})
										.eq("id", existingNotes.id);

									if (notesError) {
										results.teacherNotes.errors.push(
											`${courseFolder}/${lessonFolder}: ${notesError.message}`,
										);
									} else {
										results.teacherNotes.synced.push(
											`${courseFolder}/${lessonFolder} (updated)`,
										);
									}
								} else {
									// Insert new notes
									const { error: notesError } = await supabase
										.from("teacher_notes")
										.insert({
											lesson_id: lessonId,
											content: notesContent,
										});

									if (notesError) {
										results.teacherNotes.errors.push(
											`${courseFolder}/${lessonFolder}: ${notesError.message}`,
										);
									} else {
										results.teacherNotes.synced.push(
											`${courseFolder}/${lessonFolder} (created)`,
										);
									}
								}
							} catch (notesErr: unknown) {
								const notesErrorMessage =
									notesErr instanceof Error
										? notesErr.message
										: "Unknown error";
								results.teacherNotes.errors.push(
									`${courseFolder}/${lessonFolder}: ${notesErrorMessage}`,
								);
							}
						}
					}
				} catch (err: unknown) {
					const errorMessage =
						err instanceof Error ? err.message : "Unknown error";
					results.errors.push(
						`${courseFolder}/${lessonFolder}: ${errorMessage}`,
					);
				}
			}
		}

		return NextResponse.json({
			success: true,
			message: `Synced ${results.synced.length} lessons and ${results.teacherNotes.synced.length} teacher notes`,
			...results,
		});
	} catch (error: unknown) {
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error";
		console.error("Sync error:", errorMessage);
		return NextResponse.json({ error: errorMessage }, { status: 500 });
	}
}

export async function GET() {
	return NextResponse.json(
		{ error: "Method not allowed. Use POST to sync lessons." },
		{ status: 405 },
	);
}
