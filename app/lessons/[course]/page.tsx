import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Play,
  Lock,
  CheckCircle,
  ArrowLeft,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { checkLevelEnrollment } from "@/lib/auth-helpers";

interface CoursePageProps {
  params: Promise<{
    course: string;
  }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const supabase = await getSupabaseServerClient();
  const { course: courseSlug } = await params;

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch the course by slug
  const { data: course, error: courseError } = await supabase
    .from("courses")
    .select("*")
    .eq("slug", courseSlug)
    .single();

  if (courseError || !course) {
    notFound();
  }

  // Check if user is enrolled in this level
  let isEnrolled = false;
  if (user) {
    isEnrolled = await checkLevelEnrollment(user.id, course.id);
  }

  // Fetch lessons for this course
  const { data: lessonsData, error: lessonsError } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", course.id)
    .order("order_index", { ascending: true });

  if (lessonsError) {
    console.error("Error fetching lessons:", lessonsError);
  }

  // Fetch completed lessons for this user if authenticated
  let completedLessonIds = new Set<string>();
  if (user) {
    const { data: completedData } = await supabase
      .from("completed_lessons")
      .select("lesson_id")
      .eq("student_id", user.id);

    completedLessonIds = new Set(
      (completedData || []).map((c: { lesson_id: string }) => c.lesson_id)
    );
  }

  // Transform lessons data
  const lessons = (lessonsData || []).map((lesson) => {
    const isCompleted = completedLessonIds.has(lesson.id);
    const estimatedTime = Math.max(10, Math.ceil(lesson.content.length / 100));

    return {
      id: lesson.id,
      order_index: lesson.order_index,
      title: lesson.title,
      description: lesson.description,
      difficulty: lesson.difficulty_level,
      estimated_time: estimatedTime,
      status: isCompleted ? "completed" : "not_started",
    };
  });

  const completedCount = lessons.filter((l) => l.status === "completed").length;
  const overallProgress =
    lessons.length > 0
      ? Math.round((completedCount / lessons.length) * 100)
      : 0;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-600/8 dark:via-purple-600/8 dark:to-pink-600/8">
      <SiteHeader />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back Link */}
        <Link
          href="/lessons"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Levels
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {course.title}
                </h1>
                {isEnrolled ? (
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Enrolled
                  </Badge>
                ) : (
                  <Badge variant="secondary">
                    <Lock className="h-3 w-3 mr-1" />
                    Not Enrolled
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground">{course.description}</p>
            </div>

            {/* Progress Badge - Only for enrolled users */}
            {isEnrolled && lessons.length > 0 && (
              <div className="flex items-center gap-3 bg-card rounded-full px-4 py-2 shadow-sm border border-border">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10">
                    <svg className="transform -rotate-90 w-10 h-10">
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        className="text-muted"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 16}`}
                        strokeDashoffset={`${
                          2 * Math.PI * 16 * (1 - overallProgress / 100)
                        }`}
                        className="text-primary transition-all duration-500"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {overallProgress}%
                      </span>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium text-foreground">
                      {completedCount}/{lessons.length}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Not Enrolled Message */}
        {!isEnrolled && (
          <Card className="mb-8 border-2 border-dashed border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    You're Not Enrolled in This Level
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can preview the lesson titles below, but you'll need to
                    enroll to access the full content.
                  </p>
                </div>
                <Button asChild className="rounded-full">
                  <Link href="/inquiry">Get Access →</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Lessons List */}
        {lessons.length === 0 ? (
          <Card className="p-8 text-center">
            <CardContent className="pt-6">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No Lessons Yet
              </h3>
              <p className="text-muted-foreground">
                Lessons for this level are coming soon. Check back later!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {lessons.map((lesson) => (
              <Card
                key={lesson.id}
                className={`group relative overflow-hidden transition-all ${
                  isEnrolled
                    ? "hover:shadow-lg hover:scale-[1.01]"
                    : "opacity-80"
                } ${
                  lesson.status === "completed"
                    ? "border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/20"
                    : "bg-card"
                }`}
              >
                {/* Gradient Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    lesson.status === "completed"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500"
                      : isEnrolled
                      ? "bg-gradient-to-r from-primary to-accent"
                      : "bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"
                  }`}
                />

                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    {/* Lesson Number */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                        lesson.status === "completed"
                          ? "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400"
                          : isEnrolled
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {lesson.order_index}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">
                          {lesson.title}
                        </h3>
                        {lesson.status === "completed" && (
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {lesson.description}
                      </p>
                    </div>

                    {/* Meta & Action */}
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={`text-xs ${getDifficultyColor(
                          lesson.difficulty
                        )}`}
                      >
                        {lesson.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {lesson.estimated_time} min
                      </div>

                      {isEnrolled ? (
                        <Button asChild size="sm" className="rounded-full">
                          <Link
                            href={`/lessons/${courseSlug}/${lesson.order_index}`}
                          >
                            {lesson.status === "completed" ? (
                              <>Review</>
                            ) : (
                              <>
                                <Play className="h-3 w-3 mr-1" />
                                Start
                              </>
                            )}
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          disabled
                          className="rounded-full"
                        >
                          <Lock className="h-3 w-3 mr-1" />
                          Locked
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Enrollment CTA at bottom for non-enrolled */}
        {!isEnrolled && lessons.length > 0 && (
          <Card className="mt-8 border-accent/30 bg-gradient-to-r from-accent/5 to-primary/5">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Ready to Start This Level?
              </h3>
              <p className="text-muted-foreground mb-4">
                Get full access to all {lessons.length} lessons in{" "}
                {course.title}.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/inquiry">Book a Class →</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
