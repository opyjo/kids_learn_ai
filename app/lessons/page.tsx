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

export default async function LessonsPage() {
  const supabase = await getSupabaseServerClient();

  // Check if user is authenticated (optional for testing)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Fetch user profile if authenticated
  let userSubscription = "free";
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("subscription_status")
      .eq("id", user.id)
      .single();
    
    userSubscription = profile?.subscription_status || "free";
  }

  // Fetch lessons from Supabase
  const { data: lessonsData, error } = await supabase
    .from("lessons")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching lessons:", error);
  }

  // Fetch completed lessons for this user if authenticated
  let completedData: { lesson_id: string }[] | null = null;
  if (user) {
    const { data } = await supabase
      .from("completed_lessons")
      .select("lesson_id")
      .eq("student_id", user.id);
    
    completedData = data;
  }

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

  // Filter lessons based on subscription status - free users only see first 3
  const visibleLessons = userSubscription === "free" 
    ? lessons.filter(l => l.order_index <= 3)
    : lessons;

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

  const completedCount = visibleLessons.filter((l) => l.status === "completed").length;
  const overallProgress = visibleLessons.length > 0 ? (completedCount / visibleLessons.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5 dark:from-gray-900 dark:via-gray-900 dark:to-primary/10">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Compact Header with Progress */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                Python Lessons
              </h1>
              <p className="text-sm text-muted-foreground">
                Master Python programming step by step
              </p>
            </div>
            
            {/* Compact Progress Badge */}
            <div className="flex items-center gap-3 bg-card dark:bg-card rounded-full px-4 py-2 shadow-sm border border-border">
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
                      strokeDashoffset={`${2 * Math.PI * 16 * (1 - overallProgress / 100)}`}
                      className="text-primary transition-all duration-500"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">
                      {Math.round(overallProgress)}%
                    </span>
                  </div>
                </div>
                  <div className="text-left">
                  <div className="text-xs font-medium text-foreground">
                    {completedCount}/{visibleLessons.length}
                  </div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Grid - Compact Cards */}
        {visibleLessons.length === 0 ? (
          <Card className="p-8 text-center">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No Lessons Available
              </h3>
              <p className="text-muted-foreground mb-4">
                No lessons found. Please check back later or contact support.
              </p>
              {error && (
                <p className="text-destructive text-sm mt-2">
                  Error: {error.message}
                </p>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {visibleLessons.map((lesson) => {
              const isLocked = false; // No locked lessons shown for free users

              return (
                <Card
                  key={lesson.id}
                  className={`group relative overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] ${
                    isLocked ? "opacity-60" : ""
                  } ${
                    lesson.status === "completed"
                      ? "border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/20"
                      : "bg-card"
                  }`}
                >
                  {/* Gradient Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${
                    lesson.status === "completed"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500"
                      : "bg-gradient-to-r from-primary to-accent"
                  }`} />

                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      {/* Status Icon */}
                      <div className="flex-shrink-0 mt-0.5">
                        {isLocked && lesson.status === "not_started" ? (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                          </div>
                        ) : lesson.status === "completed" ? (
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Play className="h-4 w-4 text-primary" />
                          </div>
                        )}
                      </div>

                      {/* Lesson Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h3 className="text-base font-semibold text-foreground leading-tight">
                            {lesson.order_index}. {lesson.title}
                          </h3>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <Badge
                              variant="outline"
                              className={`text-xs px-1.5 py-0 ${getDifficultyColor(lesson.difficulty)}`}
                            >
                              {lesson.difficulty}
                            </Badge>
                            {lesson.is_premium && (
                              <Badge variant="outline" className="text-xs px-1.5 py-0 bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-500">
                                Pro
                              </Badge>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {lesson.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3.5 w-3.5" />
                              {lesson.estimated_time} min
                            </div>
                            {lesson.status === "completed" && (
                              <Badge className="text-xs px-2 py-0 bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                                ✓ Done
                              </Badge>
                            )}
                          </div>

                          {/* Action Button */}
                          {isLocked && lesson.status === "not_started" ? (
                            <Button variant="ghost" size="sm" disabled className="text-xs h-7">
                              <Lock className="h-3 w-3 mr-1" />
                              Locked
                            </Button>
                          ) : (
                            <Button
                              asChild
                              size="sm"
                              className={`text-xs h-7 rounded-full transition-all ${
                                lesson.status === "completed"
                                  ? "bg-green-600 hover:bg-green-700 text-white"
                                  : "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                              }`}
                            >
                              <Link href={`/lessons/${lesson.id}`}>
                                {lesson.status === "completed" ? "Review" : "Start"} →
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Compact Upgrade CTA */}
        {userSubscription === "free" && lessons.length > 3 && (
          <Card className="mt-6 border-accent/30 bg-gradient-to-r from-accent/5 to-primary/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Unlock All {lessons.length - 3} Premium Lessons + AI Tutor
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Get full access with teacher-led instruction for $79.99 CAD/month
                    </p>
                  </div>
                </div>
                <Button asChild size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 rounded-full">
                  <Link href="/pricing">Upgrade Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
