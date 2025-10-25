import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { Progress } from "@/components/ui/progress";
import { Code, Trophy, Clock, Play } from "lucide-react";
import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/auth-helpers";

export default async function DashboardPage() {
  // Protect the route - redirects to /login if not authenticated
  const authUser = await requireAuth();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
        <Card className="max-w-xl w-full">
          <CardHeader>
            <CardTitle>Supabase not configured</CardTitle>
            <CardDescription>
              Add your Supabase URL and anon key to <code>.env.local</code> and
              restart the server.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p>
                Create a file named <code>.env.local</code> in the project root
                with:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
                NEXT_PUBLIC_SUPABASE_URL=your-project-url
                NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
                NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/dashboard
              </pre>
              <p>
                Get these from{" "}
                <a
                  href="https://supabase.com/dashboard/project/_/settings/api"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Supabase API settings
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const supabase = await getSupabaseServerClient();

  // Fetch user profile (automatically created by database trigger)
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", authUser.id)
    .single();

  // Fetch user progress
  const { data: progress, count: completedCount } = await supabase
    .from("student_progress")
    .select("*", { count: "exact" })
    .eq("student_id", authUser.id)
    .eq("status", "completed");

  // Fetch total lessons count
  const { count: totalLessons } = await supabase
    .from("lessons")
    .select("*", { count: "exact" });

  // Fetch recent lessons with progress
  const { data: recentLessons } = await supabase
    .from("student_progress")
    .select(
      `
      *,
      lessons (
        id,
        title,
        difficulty_level,
        order_index
      )
    `
    )
    .eq("student_id", authUser.id)
    .order("updated_at", { ascending: false })
    .limit(4);

  const user = {
    full_name: profile?.full_name || "Student",
    subscription_status: profile?.subscription_status || "free",
    completedLessons: completedCount || 0,
    totalLessons: totalLessons || 15,
  };

  const progressPercentage =
    user.totalLessons > 0
      ? (user.completedLessons / user.totalLessons) * 100
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SiteHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user.full_name}! 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Ready to continue your Python programming journey?
          </p>
          {user.subscription_status === "premium" && (
            <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                🎉 You have premium access! Enjoy all advanced lessons and
                features.
              </p>
            </div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Lessons Completed
              </CardTitle>
              <div className="p-2 bg-green-100 rounded-full">
                <Trophy className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {user.completedLessons}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                out of {user.totalLessons} total lessons
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
              <div className="p-2 bg-indigo-100 rounded-full">
                <Code className="h-4 w-4 text-indigo-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {Math.round(progressPercentage)}%
              </div>
              <Progress
                value={progressPercentage}
                className="mt-2 h-3 rounded-full transition-all duration-500"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Keep going! You're doing great! 🎉
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Coding</CardTitle>
              <div className="p-2 bg-purple-100 rounded-full">
                <Clock className="h-4 w-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                {progress?.reduce((acc, p) => acc + (p.time_spent || 0), 0) ||
                  0}
                m
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                total time spent coding
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Lessons */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
              <CardDescription>Pick up where you left off</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentLessons && recentLessons.length > 0 ? (
                recentLessons.map((lessonProgress: any) => (
                  <div
                    key={lessonProgress.lesson_id}
                    className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">
                        {lessonProgress.lessons?.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {lessonProgress.lessons?.difficulty_level}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {Math.ceil((lessonProgress.time_spent || 0) / 60)}m
                          spent
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {lessonProgress.status === "completed" ? (
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800 rounded-full"
                        >
                          ✓ Done
                        </Badge>
                      ) : (
                        <Button
                          size="sm"
                          asChild
                          className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
                        >
                          <Link
                            href={`/lessons/${
                              lessonProgress.lessons?.order_index ||
                              lessonProgress.lesson_id
                            }`}
                          >
                            <Play className="h-4 w-4 mr-1" />
                            Continue
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">
                  No lessons started yet. Start your first lesson!
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                What would you like to do today?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full justify-start rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
                asChild
              >
                <Link href="/lessons">
                  <Code className="mr-2 h-4 w-4" />
                  Browse All Lessons
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent rounded-full"
                asChild
              >
                <Link href="/playground">
                  <Play className="mr-2 h-4 w-4" />
                  Python Playground
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent rounded-full"
                asChild
              >
                <Link href="/progress">
                  <Trophy className="mr-2 h-4 w-4" />
                  View Progress Report
                </Link>
              </Button>
              {user.subscription_status === "free" && (
                <Button
                  variant="outline"
                  className="w-full justify-start bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100 rounded-full"
                  asChild
                >
                  <Link href="/pricing">⭐ Upgrade to Premium</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
