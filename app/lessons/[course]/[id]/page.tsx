import { LessonViewer } from "@/components/lessons/lesson-viewer";
import { notFound, redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";

interface LessonPageProps {
  params: {
    course: string;
    id: string;
  };
}

// Helper function to check if a lesson is free (first 3 lessons per course)
const isFreeLesson = (orderIndex: number): boolean => {
  return orderIndex >= 1 && orderIndex <= 3;
};

export default async function LessonPage({ params }: LessonPageProps) {
  const supabase = await getSupabaseServerClient();
  const courseSlug = params.course;
  const lessonOrderIndex = Number.parseInt(params.id);

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // First, get the course by slug
  const { data: course } = await supabase
    .from("courses")
    .select("id, slug, title")
    .eq("slug", courseSlug)
    .single();

  if (!course) {
    notFound();
  }

  // Then fetch lesson from Supabase by course_id and order_index
  const { data: lesson, error } = await supabase
    .from("lessons")
    .select("*, courses(slug, title)")
    .eq("course_id", course.id)
    .eq("order_index", lessonOrderIndex)
    .single();

  if (error || !lesson) {
    notFound();
  }

  // Check access for premium lessons (order_index > 3)
  if (!isFreeLesson(lesson.order_index)) {
    // Fetch user profile to check subscription status
    let userSubscription = "free";
    if (user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("subscription_status")
        .eq("id", user.id)
        .single();

      userSubscription = profile?.subscription_status || "free";
    }

    // Redirect free users to pricing page
    if (userSubscription === "free") {
      redirect("/pricing");
    }
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

  return (
    <LessonViewer
      lesson={transformedLesson}
      userId={user?.id}
      courseSlug={lesson.courses?.slug}
      courseTitle={lesson.courses?.title}
    />
  );
}

