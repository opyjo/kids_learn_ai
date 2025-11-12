import { LessonViewer } from "@/components/lessons/lesson-viewer";
import { notFound, redirect } from "next/navigation";
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

  // Fetch lesson from Supabase by order_index with course info
  const { data: lesson, error } = await supabase
    .from("lessons")
    .select("*, courses(slug, title)")
    .eq("order_index", Number.parseInt(params.id))
    .single();

  if (error || !lesson) {
    notFound();
  }

  // Check access for premium lessons (order_index > 3)
  if (lesson.order_index > 3) {
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
