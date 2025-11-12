import { TeacherNotesViewer } from "@/components/lessons/teacher-notes-viewer";
import { notFound, redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface TeacherNotesPageProps {
  params: {
    lessonId: string;
  };
}

export default async function TeacherNotesPage({
  params,
}: TeacherNotesPageProps) {
  const supabase = await getSupabaseServerClient();

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Check if user is an admin
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    redirect("/");
  }

  // Fetch lesson from Supabase by order_index with course info
  const { data: lesson, error: lessonError } = await supabase
    .from("lessons")
    .select("*, courses(slug, title)")
    .eq("order_index", Number.parseInt(params.lessonId))
    .single();

  if (lessonError || !lesson) {
    notFound();
  }

  // Fetch teacher notes for this lesson
  const { data: teacherNote } = await supabase
    .from("teacher_notes")
    .select("*")
    .eq("lesson_id", lesson.id)
    .maybeSingle();

  // Transform the lesson data to match the expected format
  const transformedLesson = {
    id: lesson.order_index,
    title: lesson.title,
    description: lesson.description,
    difficulty: lesson.difficulty_level,
    order_index: lesson.order_index,
    is_premium: lesson.is_premium,
  };

  return (
    <TeacherNotesViewer 
      lesson={transformedLesson} 
      teacherNote={teacherNote}
      courseSlug={lesson.courses?.slug}
    />
  );
}

