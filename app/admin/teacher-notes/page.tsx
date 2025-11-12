import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, AlertCircle } from "lucide-react";
import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { SiteHeader } from "@/components/site-header";
import { redirect } from "next/navigation";

export default async function TeacherNotesPage() {
  const supabase = await getSupabaseServerClient();

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Check if user is an admin
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    redirect("/");
  }

  // Fetch all lessons
  const { data: lessons } = await supabase
    .from("lessons")
    .select("id, title, description, difficulty_level, order_index, is_premium, courses(slug)")
    .order("order_index", { ascending: true });

  // Fetch all teacher notes
  const { data: teacherNotes } = await supabase
    .from("teacher_notes")
    .select("id, lesson_id, created_at, updated_at");

  // Create a map of lesson_id to teacher note
  const notesMap = new Map();
  teacherNotes?.forEach((note) => {
    notesMap.set(note.lesson_id, note);
  });

  // Add teacher notes to lessons
  const lessonsWithNotesData = lessons?.map((lesson) => ({
    ...lesson,
    teacher_note: notesMap.get(lesson.id) || null,
  }));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const lessonsWithNotes = lessonsWithNotesData?.filter(
    (lesson: any) => lesson.teacher_note !== null
  );
  const lessonsWithoutNotes = lessonsWithNotesData?.filter(
    (lesson: any) => lesson.teacher_note === null
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5 dark:from-gray-900 dark:via-gray-900 dark:to-primary/10">
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                Teacher Lesson Notes
              </h1>
              <p className="text-sm text-muted-foreground">
                Access teaching guides, lesson plans, and instructional resources
                for each lesson
              </p>
            </div>

            {/* Compact Stats Badge */}
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
                      strokeDashoffset={`${
                        2 *
                        Math.PI *
                        16 *
                        (1 -
                          (lessonsWithNotesData?.length
                            ? ((lessonsWithNotes?.length || 0) /
                                lessonsWithNotesData.length) *
                              100
                            : 0) /
                            100)
                      }`}
                      className="text-primary transition-all duration-500"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">
                      {lessonsWithNotesData?.length
                        ? Math.round(
                            ((lessonsWithNotes?.length || 0) /
                              lessonsWithNotesData.length) *
                              100
                          )
                        : 0}
                      %
                    </span>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium text-foreground">
                    {lessonsWithNotes?.length || 0}/
                    {lessonsWithNotesData?.length || 0}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    With Notes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons with Teacher Notes */}
        {lessonsWithNotes && lessonsWithNotes.length > 0 && (
          <>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-600" />
              Lessons with Teacher Notes
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              {lessonsWithNotes.map((lesson: any) => (
                <Card
                  key={lesson.id}
                  className="group relative overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/20"
                >
                  {/* Gradient Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500" />

                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      {/* Status Icon */}
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
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
                              className={`text-xs px-1.5 py-0 ${getDifficultyColor(
                                lesson.difficulty_level
                              )}`}
                            >
                              {lesson.difficulty_level}
                            </Badge>
                            {lesson.is_premium && (
                              <Badge
                                variant="outline"
                                className="text-xs px-1.5 py-0 bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-500"
                              >
                                Pro
                              </Badge>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {lesson.description}
                        </p>

                        {lesson.teacher_note && (
                          <p className="text-xs text-muted-foreground mb-3">
                            Last updated:{" "}
                            {new Date(
                              lesson.teacher_note.updated_at
                            ).toLocaleDateString("en-CA", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        )}

                        <div className="flex items-center justify-between gap-2">
                          <Badge className="text-xs px-2 py-0 bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                            ✓ Has Notes
                          </Badge>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2">
                            <Button
                              asChild
                              size="sm"
                              className="text-xs h-7 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90"
                            >
                              <Link
                                href={`/teacher-notes/${lesson.order_index}`}
                                aria-label={`View teacher notes for ${lesson.title}`}
                              >
                                View Notes →
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              asChild
                              size="sm"
                              className="text-xs h-7 rounded-full"
                            >
                              <Link
                                href={`/lessons/${(lesson.courses as { slug: string } | null)?.slug || "python-foundations"}/${lesson.order_index}`}
                                aria-label={`View student lesson for ${lesson.title}`}
                              >
                                <BookOpen className="mr-1 h-3 w-3" />
                                Student
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Lessons without Teacher Notes */}
        {lessonsWithoutNotes && lessonsWithoutNotes.length > 0 && (
          <>
            <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              Lessons Missing Teacher Notes
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              These lessons do not have teacher notes yet. Teacher notes need to be
              added through the backend/database.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {lessonsWithoutNotes.map((lesson: any) => (
                <Card
                  key={lesson.id}
                  className="group relative overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] border-dashed border-orange-200 dark:border-orange-800/50 bg-orange-50/20 dark:bg-orange-950/10"
                >
                  {/* Gradient Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500" />

                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      {/* Status Icon */}
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                          <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        </div>
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
                              className={`text-xs px-1.5 py-0 ${getDifficultyColor(
                                lesson.difficulty_level
                              )}`}
                            >
                              {lesson.difficulty_level}
                            </Badge>
                            {lesson.is_premium && (
                              <Badge
                                variant="outline"
                                className="text-xs px-1.5 py-0 bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-500"
                              >
                                Pro
                              </Badge>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {lesson.description}
                        </p>

                        <div className="flex items-center justify-between gap-2">
                          <Badge className="text-xs px-2 py-0 bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                            ⚠ No Notes
                          </Badge>

                          {/* Action Button */}
                          <Button
                            variant="outline"
                            asChild
                            size="sm"
                            className="text-xs h-7 rounded-full"
                          >
                            <Link
                              href={`/lessons/${(lesson.courses as { slug: string } | null)?.slug || "python-foundations"}/${lesson.order_index}`}
                              aria-label={`View student lesson for ${lesson.title}`}
                            >
                              <BookOpen className="mr-1 h-3 w-3" />
                              View Student Lesson
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {(!lessonsWithNotesData || lessonsWithNotesData.length === 0) && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Lessons Found</h3>
              <p className="text-muted-foreground text-center max-w-md">
                There are no lessons in the system yet. Lessons need to be added
                through the backend.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

