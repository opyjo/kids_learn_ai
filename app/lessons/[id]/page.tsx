import { LessonViewer } from "@/components/lessons/lesson-viewer";
import { notFound } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth-helpers";

interface LessonPageProps {
  params: {
    id: string;
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  // Protect the route - redirects to /login if not authenticated
  const user = await requireAuth();

  const supabase = await getSupabaseServerClient();

  // Fetch lesson from Supabase by order_index
  const { data: lesson, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("order_index", Number.parseInt(params.id))
    .single();

  if (error || !lesson) {
    notFound();
  }

  // Transform the lesson data to match the expected format
  const transformedLesson = {
    id: lesson.order_index, // Use order_index as the display ID
    dbId: lesson.id, // Database ID for completion tracking
    title: lesson.title,
    description: lesson.description,
    content: lesson.content,
    difficulty: lesson.difficulty_level,
    order_index: lesson.order_index,
    is_premium: lesson.is_premium,
    starter_code: lesson.starter_code || "",
    solution_code: lesson.solution_code || "",
  };

  return <LessonViewer lesson={transformedLesson} userId={user.id} />;
}
