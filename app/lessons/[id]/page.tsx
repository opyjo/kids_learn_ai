import { LessonViewer } from "@/components/lessons/lesson-viewer";
import { notFound } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface LessonPageProps {
  params: {
    id: string;
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const supabase = await getSupabaseServerClient();

  // Check if user is authenticated (optional for testing)
  const {
    data: { user },
  } = await supabase.auth.getUser();

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
    requires_trinket: lesson.requires_trinket || false,
  };

  return <LessonViewer lesson={transformedLesson} userId={user?.id} />;
}
