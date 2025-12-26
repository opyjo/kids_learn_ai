import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  BookOpen,
  TrendingUp,
  Plus,
  FileCode,
  GraduationCap,
  Award,
  BarChart3,
  Calendar,
  ArrowUpRight,
  Download,
  Eye,
  Pencil,
} from "lucide-react";
import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { SiteHeader } from "@/components/site-header";
import { SubmissionsTab } from "@/components/admin/submissions-tab";

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const params = await searchParams;
  const activeTab = params.tab || "overview";
  const supabase = await getSupabaseServerClient();

  // Fetch total students
  const { count: totalStudents } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true });

  // Fetch premium students
  const { count: premiumStudents } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true })
    .eq("subscription_status", "premium");

  // Fetch total lessons
  const { count: totalLessons } = await supabase
    .from("lessons")
    .select("*", { count: "exact", head: true });

  // Fetch total completed lessons
  const { count: totalCompletedLessons } = await supabase
    .from("completed_lessons")
    .select("*", { count: "exact", head: true });

  // Fetch pending submissions count
  const { count: pendingSubmissions } = await supabase
    .from("trinket_submissions")
    .select("*", { count: "exact", head: true })
    .eq("status", "submitted");

  // Fetch recent students
  const { data: recentStudentsData } = await supabase
    .from("profiles")
    .select("id, email, full_name, created_at, subscription_status")
    .order("created_at", { ascending: false })
    .limit(6);

  const recentStudents = (recentStudentsData || []).map((student) => ({
    id: student.id,
    name: student.full_name || "Unknown User",
    email: student.email,
    joinDate: new Date(student.created_at).toLocaleDateString("en-CA"),
    status: student.subscription_status === "premium" ? "premium" : "free",
  }));

  // Fetch lessons with completion counts
  const { data: lessonsData } = await supabase
    .from("lessons")
    .select(
      `
      id,
      title,
      difficulty_level,
      order_index,
      completed_lessons(count),
      courses(slug)
    `
    )
    .order("order_index", { ascending: true })
    .limit(10);

  const lessonStats = (lessonsData || []).map((lesson: any) => ({
    id: lesson.order_index,
    title: lesson.title,
    completions: lesson.completed_lessons?.[0]?.count || 0,
    difficulty: lesson.difficulty_level,
    courseSlug: lesson.courses?.slug || "python-foundations",
  }));

  const stats = {
    totalStudents: totalStudents || 0,
    premiumStudents: premiumStudents || 0,
    totalLessons: totalLessons || 0,
    completedLessons: totalCompletedLessons || 0,
    pendingSubmissions: pendingSubmissions || 0,
  };

  const conversionRate =
    stats.totalStudents > 0
      ? Math.round((stats.premiumStudents / stats.totalStudents) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950">
      <SiteHeader />

      <main className="w-full">
        {/* Header Section */}
        <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Admin Dashboard
                </h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Manage your platform, track progress, and review submissions
                </p>
              </div>
              <Button asChild className="gap-2">
                <Link href="/admin/lessons/new">
                  <Plus className="h-4 w-4" />
                  New Lesson
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Total Students
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                      {stats.totalStudents}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {stats.premiumStudents} premium
                  </span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-gray-500">
                    {stats.totalStudents - stats.premiumStudents} free
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Conversion Rate
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                      {conversionRate}%
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-green-50 dark:bg-green-950 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  Free to premium
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Total Lessons
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                      {stats.totalLessons}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-purple-50 dark:bg-purple-950 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  {stats.completedLessons} completions
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Pending Reviews
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                      {stats.pendingSubmissions}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-orange-50 dark:bg-orange-950 flex items-center justify-center">
                    <FileCode className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/admin?tab=submissions"
                    className="text-sm text-orange-600 dark:text-orange-400 hover:underline font-medium"
                  >
                    Review now →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue={activeTab} className="space-y-6">
            <TabsList className="inline-flex h-11 items-center justify-start rounded-lg bg-gray-100 dark:bg-gray-800 p-1 text-gray-500 dark:text-gray-400">
              <TabsTrigger
                value="overview"
                className="rounded-md px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="lessons"
                className="rounded-md px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Lessons
              </TabsTrigger>
              <TabsTrigger
                value="submissions"
                className="rounded-md px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm gap-2"
              >
                <FileCode className="h-4 w-4" />
                Submissions
                {stats.pendingSubmissions > 0 && (
                  <Badge
                    variant="secondary"
                    className="ml-1 h-5 px-1.5 text-xs bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                  >
                    {stats.pendingSubmissions}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="students"
                className="rounded-md px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Students
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="rounded-md px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                Analytics
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Students */}
                <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          Recent Students
                        </CardTitle>
                        <CardDescription className="mt-1">
                          Latest registrations on the platform
                        </CardDescription>
                      </div>
                      <Link
                        href="/admin?tab=students"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View all
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                      {recentStudents.slice(0, 5).map((student) => (
                        <div
                          key={student.id}
                          className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                              {student.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {student.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {student.email}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                student.status === "premium"
                                  ? "default"
                                  : "secondary"
                              }
                              className={
                                student.status === "premium"
                                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:bg-green-100"
                                  : ""
                              }
                            >
                              {student.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold">
                      Platform Overview
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Key metrics at a glance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          Lesson Completions
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {stats.completedLessons}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="h-5 w-5 text-blue-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          Avg Completions/Lesson
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {stats.totalLessons > 0
                          ? (stats.completedLessons / stats.totalLessons).toFixed(1)
                          : 0}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-purple-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          Pending Submissions
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {stats.pendingSubmissions}
                      </span>
                    </div>
                    <Link
                      href="/admin/payments"
                      className="flex items-center justify-between p-4 rounded-lg bg-orange-50 dark:bg-orange-950/50 hover:bg-orange-100 dark:hover:bg-orange-950 transition-colors"
                    >
                      <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                        View Payment Verification
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-orange-600" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Lessons Tab */}
            <TabsContent value="lessons" className="space-y-6">
              <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        Lesson Management
                      </CardTitle>
                      <CardDescription className="mt-1">
                        Track performance and manage course content
                      </CardDescription>
                    </div>
                    <Button asChild size="sm" className="gap-2">
                      <Link href="/admin/lessons/new">
                        <Plus className="h-4 w-4" />
                        Create Lesson
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {lessonStats.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400 font-semibold text-sm">
                            {lesson.id}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                              {lesson.title}
                            </h4>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs text-gray-500">
                                {lesson.completions} completions
                              </span>
                              <Badge
                                variant="outline"
                                className="text-xs capitalize"
                              >
                                {lesson.difficulty}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="h-8 w-8 p-0"
                          >
                            <Link href={`/admin/lessons/${lesson.id}/edit`}>
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Link>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="h-8 w-8 p-0"
                          >
                            <Link
                              href={`/lessons/${lesson.courseSlug}/${lesson.id}`}
                            >
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Preview</span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Submissions Tab */}
            <TabsContent value="submissions" className="space-y-6">
              <SubmissionsTab />
            </TabsContent>

            {/* Students Tab */}
            <TabsContent value="students" className="space-y-6">
              <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        Student Management
                      </CardTitle>
                      <CardDescription className="mt-1">
                        Manage student accounts and track their progress
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {recentStudents.map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                            {student.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                              {student.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {student.email}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">
                              Joined {student.joinDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={
                              student.status === "premium"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              student.status === "premium"
                                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:bg-green-100"
                                : ""
                            }
                          >
                            {student.status}
                          </Badge>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/dashboard`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold">
                      Student Metrics
                    </CardTitle>
                    <CardDescription className="mt-1">
                      User engagement and conversion data
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Total Students
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {stats.totalStudents}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Premium Students
                      </span>
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                        {stats.premiumStudents}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Free Students
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {stats.totalStudents - stats.premiumStudents}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Conversion Rate
                      </span>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {conversionRate}%
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold">
                      Lesson Metrics
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Content performance and completion rates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Total Lessons
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {stats.totalLessons}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Total Completions
                      </span>
                      <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {stats.completedLessons}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Avg Completions/Lesson
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {stats.totalLessons > 0
                          ? (stats.completedLessons / stats.totalLessons).toFixed(1)
                          : 0}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Pending Submissions
                      </span>
                      <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                        {stats.pendingSubmissions}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Full Report
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
