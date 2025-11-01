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
  BarChart3,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { SiteHeader } from "@/components/site-header";

export default async function AdminDashboard() {
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

  // Fetch recent students
  const { data: recentStudentsData } = await supabase
    .from("profiles")
    .select("id, email, full_name, created_at, subscription_status")
    .order("created_at", { ascending: false })
    .limit(4);

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
    .select(`
      id,
      title,
      difficulty_level,
      order_index,
      completed_lessons(count)
    `)
    .order("order_index", { ascending: true })
    .limit(10);

  const lessonStats = (lessonsData || []).map((lesson: any) => ({
    id: lesson.order_index,
    title: lesson.title,
    completions: lesson.completed_lessons?.[0]?.count || 0,
    avgTime: 0, // No time tracking yet
    difficulty: lesson.difficulty_level,
  }));

  const stats = {
    totalStudents: totalStudents || 0,
    premiumStudents: premiumStudents || 0,
    totalLessons: totalLessons || 0,
    completedLessons: totalCompletedLessons || 0,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SiteHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage lessons, track student progress, and monitor platform
            performance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Students
              </CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.totalStudents.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Registered accounts
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Premium Students
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.premiumStudents.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {stats.totalStudents > 0
                  ? Math.round((stats.premiumStudents / stats.totalStudents) * 100)
                  : 0}
                % of total students
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Lessons
              </CardTitle>
              <BookOpen className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalLessons}</div>
              <p className="text-xs text-muted-foreground">
                {stats.completedLessons.toLocaleString()} total completions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Students */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Students</CardTitle>
                  <CardDescription>
                    Latest student registrations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentStudents.map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-500">
                            {student.email}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              student.status === "premium"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {student.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">
                            {student.joinDate}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" asChild>
                    <Link href="/admin/lessons/new">
                      <Plus className="mr-2 h-4 w-4" />
                      Create New Lesson
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    asChild
                  >
                    <Link href="/admin/students">
                      <Users className="mr-2 h-4 w-4" />
                      Manage Students
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    asChild
                  >
                    <Link href="/admin/analytics">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      View Analytics
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Platform Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Lessons Tab */}
          <TabsContent value="lessons" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Lesson Management</h3>
              <Button asChild>
                <Link href="/admin/lessons/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Lesson
                </Link>
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Lesson Performance</CardTitle>
                <CardDescription>
                  Track how students are progressing through lessons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lessonStats.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">{lesson.title}</h4>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                          <span>{lesson.completions} completions</span>
                          <Badge variant="outline" className="text-xs">
                            {lesson.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/lessons/${lesson.id}/edit`}>
                            Edit
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/lessons/${lesson.id}`}>Preview</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Student Management</h3>
              <Button variant="outline">Export Data</Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Students</CardTitle>
                <CardDescription>
                  Manage student accounts and track progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">{student.name}</h4>
                        <p className="text-sm text-gray-500">{student.email}</p>
                        <p className="text-xs text-gray-400">
                          Joined: {student.joinDate}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            student.status === "premium"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {student.status}
                        </Badge>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/dashboard`}>View Progress</Link>
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
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Platform Analytics</h3>
              <Button variant="outline">Download Report</Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                  <CardDescription>
                    Student activity and engagement data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Students</span>
                      <span className="font-medium">
                        {stats.totalStudents}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Premium Students</span>
                      <span className="font-medium">
                        {stats.premiumStudents}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Free Students</span>
                      <span className="font-medium">
                        {stats.totalStudents - stats.premiumStudents}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conversion Rate</span>
                      <span className="font-medium">
                        {stats.totalStudents > 0
                          ? Math.round(
                              (stats.premiumStudents / stats.totalStudents) * 100
                            )
                          : 0}
                        %
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lesson Metrics</CardTitle>
                  <CardDescription>
                    Lesson completion statistics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Lessons</span>
                      <span className="font-medium">{stats.totalLessons}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Completions</span>
                      <span className="font-medium">
                        {stats.completedLessons}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg Completions/Lesson</span>
                      <span className="font-medium">
                        {stats.totalLessons > 0
                          ? Math.round(stats.completedLessons / stats.totalLessons)
                          : 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment Verification</span>
                      <Button variant="link" size="sm" asChild className="h-auto p-0">
                        <Link href="/admin/payments">View Pending →</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
