import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function StudentsPage() {
  const supabase = await getSupabaseServerClient();

  // Fetch enrolled students
  const { data: enrolledStudentsData } = await supabase
    .from("level_enrollments")
    .select("student_id")
    .limit(1000);

  const enrolledStudentIds = new Set(
    (enrolledStudentsData || []).map(
      (e: { student_id: string }) => e.student_id
    )
  );

  // Fetch all students
  const { data: studentsData } = await supabase
    .from("profiles")
    .select("id, email, full_name, created_at")
    .order("created_at", { ascending: false });

  const students = (studentsData || []).map((student) => ({
    id: student.id,
    name: student.full_name || "Unknown User",
    email: student.email,
    joinDate: new Date(student.created_at).toLocaleDateString("en-CA"),
    isEnrolled: enrolledStudentIds.has(student.id),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Student Management
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            View and manage all registered students
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Students
            </p>
            <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
              {students.length}
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Enrolled
            </p>
            <p className="mt-2 text-3xl font-semibold text-green-600 dark:text-green-400">
              {students.filter((s) => s.isEnrolled).length}
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Not Enrolled
            </p>
            <p className="mt-2 text-3xl font-semibold text-gray-600 dark:text-gray-400">
              {students.filter((s) => !s.isEnrolled).length}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">All Students</CardTitle>
          <CardDescription>
            {students.length} student{students.length !== 1 ? "s" : ""}{" "}
            registered
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {students.map((student) => (
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
                    <p className="text-xs text-gray-500">{student.email}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Joined {student.joinDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={student.isEnrolled ? "default" : "secondary"}
                    className={
                      student.isEnrolled
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:bg-green-100"
                        : ""
                    }
                  >
                    {student.isEnrolled ? "Enrolled" : "Not Enrolled"}
                  </Badge>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/admin/enrollments">Manage Access</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

