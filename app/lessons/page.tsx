import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Play, Lock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth-helpers";

export default async function LessonsPage() {
  // Protect the route - redirects to /login if not authenticated
  const authUser = await requireAuth();

  const supabase = await getSupabaseServerClient();

  // Fetch user profile (automatically created by database trigger)
  const { data: profile } = await supabase
    .from("profiles")
    .select("subscription_status")
    .eq("id", authUser.id)
    .single();

  const userSubscription = profile?.subscription_status || "free";

  // Fetch lessons from Supabase
  const { data: lessonsData, error } = await supabase
    .from("lessons")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching lessons:", error);
  }

  // Fetch completed lessons for this user
  const { data: completedData } = await supabase
    .from("completed_lessons")
    .select("lesson_id")
    .eq("student_id", authUser.id);

  // Create a Set of completed lesson IDs for fast lookup
  const completedLessonIds = new Set(
    completedData?.map((c) => c.lesson_id) || []
  );

  // Transform lessons data and merge with completion status
  const lessons = (lessonsData || []).map((lesson) => {
    const isCompleted = completedLessonIds.has(lesson.id);

    // Estimate reading time based on content length (rough calculation)
    const estimatedTime = Math.max(10, Math.ceil(lesson.content.length / 100));

    return {
      id: lesson.order_index, // Use order_index for URL routing
      title: lesson.title,
      description: lesson.description,
      difficulty: lesson.difficulty_level,
      order_index: lesson.order_index,
      is_premium: lesson.is_premium,
      estimated_time: estimatedTime,
      status: isCompleted ? "completed" : "not_started",
      progress: isCompleted ? 100 : 0,
    };
  });

  const getStatusIcon = (status: string, progress: number) => {
    if (status === "completed") {
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    }
    return <div className="h-5 w-5 rounded-full border-2 border-gray-300" />;
  };

  const getStatusBadge = (status: string) => {
    if (status === "completed") {
      return (
        <Badge className="bg-green-100 text-green-800 rounded-full">
          Completed
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="rounded-full">
        Not Started
      </Badge>
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SiteHeader />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Python Lessons
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Master Python programming step by step with interactive lessons
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
            <CardDescription>Track your learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            {(() => {
              const completedCount = lessons.filter(
                (l) => l.status === "completed"
              ).length;
              const notStartedCount = lessons.filter(
                (l) => l.status === "not_started"
              ).length;
              const overallProgress =
                lessons.length > 0
                  ? (completedCount / lessons.length) * 100
                  : 0;

              return (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">
                      Overall Progress
                    </span>
                    <span className="text-sm text-gray-500">
                      {completedCount} of {lessons.length} lessons completed
                    </span>
                  </div>
                  <Progress
                    value={overallProgress}
                    className="mb-4 h-3 rounded-full transition-all duration-500"
                  />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {completedCount}
                      </div>
                      <div className="text-sm text-gray-500">Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                        {notStartedCount}
                      </div>
                      <div className="text-sm text-gray-500">Not Started</div>
                    </div>
                  </div>
                </>
              );
            })()}
          </CardContent>
        </Card>

        {/* Lessons List */}
        <div className="space-y-4">
          {lessons.length === 0 ? (
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Lessons Available
                </h3>
                <p className="text-gray-600 mb-4">
                  No lessons found. Please check back later or contact support.
                </p>
                {error && (
                  <p className="text-red-600 text-sm mt-2">
                    Error: {error.message}
                  </p>
                )}
              </CardContent>
            </Card>
          ) : (
            lessons.map((lesson) => {
              const isLocked = lesson.is_premium && userSubscription === "free";

              return (
                <Card
                  key={lesson.id}
                  className={`transition-all hover:shadow-md ${
                    isLocked ? "opacity-75" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Status Icon */}
                        <div className="mt-1">
                          {isLocked && lesson.status === "not_started" ? (
                            <Lock className="h-5 w-5 text-gray-400" />
                          ) : (
                            getStatusIcon(lesson.status, lesson.progress)
                          )}
                        </div>

                        {/* Lesson Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {lesson.order_index}. {lesson.title}
                            </h3>
                            <Badge
                              className={getDifficultyColor(lesson.difficulty)}
                            >
                              {lesson.difficulty}
                            </Badge>
                            {lesson.is_premium && (
                              <Badge className="bg-yellow-100 text-yellow-800">
                                Premium
                              </Badge>
                            )}
                          </div>

                          <p className="text-gray-600 dark:text-gray-400 mb-3">
                            {lesson.description}
                          </p>

                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              {lesson.estimated_time} min
                            </div>
                            {getStatusBadge(lesson.status)}
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="ml-4">
                        {isLocked && lesson.status === "not_started" ? (
                          <Button variant="outline" disabled>
                            <Lock className="h-4 w-4 mr-2" />
                            Upgrade to Access
                          </Button>
                        ) : (
                          <Button
                            asChild
                            className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
                          >
                            <Link href={`/lessons/${lesson.id}`}>
                              {lesson.status === "completed" ? (
                                <>
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Review
                                </>
                              ) : (
                                <>
                                  <Play className="h-4 w-4 mr-2" />
                                  Start
                                </>
                              )}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Upgrade CTA - Only show if there are actually premium lessons */}
        {userSubscription === "free" && lessons.some((l) => l.is_premium) && (
          <Card className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Unlock All Lessons
              </h3>
              <p className="text-gray-600 mb-4">
                Get access to premium lessons and advanced Python concepts
              </p>
              <Button className="bg-yellow-600 hover:bg-yellow-700">
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
