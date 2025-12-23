"use client";

import React, { useState, useEffect, useCallback } from "react";
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
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Sparkles,
  FileText,
  Upload,
  MessageSquare,
  Award,
  Clock,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { LessonBreadcrumbs } from "@/components/lessons/lesson-breadcrumbs";
import { PythonEditor } from "@/components/code/python-editor";
import { TrinketEditor } from "@/components/code/trinket-editor";
import { AIPlayground } from "@/components/lessons/ai-playground";
import { InlineTutor } from "@/components/lessons/inline-tutor";
import { TrinketSubmissionForm } from "@/components/dashboard/trinket-submission-form";
import { TrinketPreview } from "@/components/dashboard/trinket-preview";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Lesson {
  id: number;
  dbId: string;
  title: string;
  description: string;
  content: string;
  difficulty: string;
  order_index: number;
  is_premium: boolean;
  starter_code: string;
  solution_code: string;
  requires_trinket?: boolean;
  class_activities?: string;
  take_home_assignment?: string;
}

interface LessonViewerProps {
  lesson: Lesson;
  userId?: string;
  courseSlug?: string;
  courseTitle?: string;
}

export function LessonViewer({
  lesson,
  userId,
  courseSlug,
  courseTitle,
}: Readonly<LessonViewerProps>) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCode, setCurrentCode] = useState(lesson.starter_code);
  const [showConfetti, setShowConfetti] = useState(false);
  const supabase = getSupabaseBrowserClient();
  const { toast } = useToast();
  const [confirmOpen, setConfirmOpen] = useState(false);

  // Homework submission state
  const [submission, setSubmission] = useState<{
    id: string;
    trinketUrl: string;
    status: "submitted" | "reviewed" | "graded";
    feedback: string | null;
    grade: string | null;
  } | null>(null);
  const [showSubmissionPreview, setShowSubmissionPreview] = useState(false);

  // Fetch completion status on mount (use client auth user to avoid RLS mismatches)
  useEffect(() => {
    const checkCompletionStatus = async () => {
      if (!lesson.dbId) return;

      try {
        const {
          data: { user: authUser },
        } = await supabase.auth.getUser();

        if (!authUser) {
          setIsCompleted(false);
          return;
        }

        const { data } = await supabase
          .from("completed_lessons")
          .select("id")
          .eq("student_id", authUser.id)
          .eq("lesson_id", lesson.dbId)
          .maybeSingle();

        setIsCompleted(!!data);
      } catch (_error) {
        // Not completed or error - either way, show as not completed
        setIsCompleted(false);
      }
    };

    checkCompletionStatus();
  }, [lesson.dbId, supabase]);

  // Fetch homework submission status
  const fetchSubmission = useCallback(async () => {
    if (!lesson.dbId) return;

    try {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      if (!authUser) {
        setSubmission(null);
        return;
      }

      const { data } = await supabase
        .from("trinket_submissions")
        .select("id, trinket_url, status, feedback, grade")
        .eq("student_id", authUser.id)
        .eq("lesson_id", lesson.dbId)
        .maybeSingle();

      if (data) {
        setSubmission({
          id: data.id,
          trinketUrl: data.trinket_url,
          status: data.status as "submitted" | "reviewed" | "graded",
          feedback: data.feedback,
          grade: data.grade,
        });
      } else {
        setSubmission(null);
      }
    } catch (_error) {
      setSubmission(null);
    }
  }, [lesson.dbId, supabase]);

  useEffect(() => {
    fetchSubmission();
  }, [fetchSubmission]);

  // Toggle lesson completion
  const toggleCompletion = async (action?: "complete" | "uncomplete") => {
    if (!userId || !lesson.dbId) {
      alert("Please sign in to track your progress");
      return;
    }

    // Ensure the browser has a valid session before hitting RLS
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError) {
      console.error("Session fetch error:", sessionError);
    }
    if (!session) {
      alert("Your session expired. Please sign in again.");
      return;
    }

    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();
    if (!authUser) {
      alert("Your session expired. Please sign in again.");
      return;
    }

    setIsLoading(true);

    try {
      const shouldUnmark = action ? action === "uncomplete" : isCompleted;
      if (shouldUnmark) {
        // Unmark as completed
        const { error } = await supabase
          .from("completed_lessons")
          .delete()
          .eq("student_id", authUser.id)
          .eq("lesson_id", lesson.dbId);

        if (error) {
          console.error("Error unmarking lesson:", error);
          alert(error.message ?? "Failed to update completion status");
          return;
        }

        setIsCompleted(false);
        console.log("✅ Lesson unmarked as complete");
        return;
      }

      // Mark as completed (let DB default handle completed_at)
      const { error } = await supabase.from("completed_lessons").insert({
        student_id: authUser.id,
        lesson_id: lesson.dbId,
      });

      if (error) {
        console.error("Error marking lesson complete:", error);
        alert(error.message ?? "Failed to mark lesson as complete");
        return;
      }

      setIsCompleted(true);
      console.log("✅ Lesson marked as complete!");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2200);
    } catch (error: any) {
      console.error("Error toggling completion:", error);
      alert(error?.message ?? "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Optimistic mark complete with Undo toast
  const handleMarkClick = async () => {
    if (isCompleted) return;
    setIsCompleted(true);
    toast({
      title: "Marked complete",
      description: "Lesson marked as complete.",
      action: (
        <button
          className="ml-3 rounded-md bg-white/10 px-2 py-1 text-xs"
          onClick={() => {
            setIsCompleted(false);
            void toggleCompletion("uncomplete");
          }}
          aria-label="Undo mark as complete"
        >
          Undo
        </button>
      ),
    });
    await toggleCompletion("complete");
  };

  const handleUnmarkRequest = () => setConfirmOpen(true);
  const handleConfirmUnmark = async () => {
    setConfirmOpen(false);
    await toggleCompletion("uncomplete");
  };

  // Simple code change handler (no automatic tracking)
  const handleCodeChange = (code: string) => {
    setCurrentCode(code);
  };

  const handleRunComplete = (output: string, isSuccess: boolean) => {
    console.log("Code execution completed:", { output, isSuccess });
    // No automatic completion tracking
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SiteHeader />
      <div className="container mx-auto px-4 pt-3">
        <LessonBreadcrumbs
          courseSlug={courseSlug}
          courseTitle={courseTitle}
          lessonTitle={lesson.title}
          difficulty={lesson.difficulty}
          isPremium={lesson.is_premium}
        />
      </div>

      <div
        className={
          courseSlug === "ai-ml"
            ? "w-full px-4 py-6"
            : "max-w-[1600px] mx-auto px-4 py-6"
        }
      >
        {courseSlug === "ai-ml" ? (
          <div className="space-y-6 max-w-7xl mx-auto">
            {/* Sticky Tabs Navigation */}
            <Card className="sticky top-20 z-40 rounded-xl shadow-lg border overflow-hidden">
              <CardHeader className="pb-3 px-4 pt-4">
                <Tabs defaultValue="content" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 h-10 bg-muted/60">
                    <TabsTrigger
                      value="content"
                      className="flex items-center gap-2 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <FileText className="h-4 w-4 transition-transform duration-200 data-[state=active]:scale-110" />
                      <span>Lesson Content</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="activities"
                      className="flex items-center gap-2 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <BookOpen className="h-4 w-4 transition-transform duration-200 data-[state=active]:scale-110" />
                      <span>Activities</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="playgrounds"
                      className="flex items-center gap-2 text-sm font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Sparkles className="h-4 w-4 transition-transform duration-200 data-[state=active]:scale-110 data-[state=active]:animate-pulse" />
                      <span>Playgrounds</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* Lesson Content Tab */}
                  <TabsContent
                    value="content"
                    className="mt-0 focus-visible:outline-none data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-top-2 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 data-[state=inactive]:slide-out-to-top-2 duration-200"
                  >
                    <div className="px-4 pb-4">
                      <Card className="flex flex-col rounded-xl border shadow-lg">
                        <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 rounded-t-xl border-b-2 border-border flex-shrink-0 py-3">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <CardTitle className="flex items-center gap-2 text-base">
                                <div
                                  className="p-1 bg-gradient-to-br from-primary to-accent rounded-lg shrink-0"
                                  aria-hidden="true"
                                >
                                  <BookOpen className="h-3.5 w-3.5 text-white" />
                                </div>
                                <span className="tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                                  Lesson {lesson.order_index}: {lesson.title} ✨
                                </span>
                              </CardTitle>
                              <CardDescription className="text-muted-foreground text-xs mt-1.5 ml-8">
                                {lesson.description}
                              </CardDescription>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              {isCompleted && (
                                <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/50 dark:to-emerald-900/50 dark:text-green-300 flex items-center gap-1 px-2 py-1 text-xs font-semibold">
                                  <CheckCircle className="h-3 w-3" />
                                  Done
                                </Badge>
                              )}
                              <div className="flex items-center gap-1.5">
                                {lesson.order_index > 1 && (
                                  <Link
                                    href={`/lessons/${courseSlug}/${
                                      lesson.order_index - 1
                                    }`}
                                    aria-label="Go to previous lesson"
                                    className="inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 hover:border-purple-500 dark:border-gray-700 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all"
                                    title="Previous Lesson"
                                  >
                                    <ArrowLeft className="h-3.5 w-3.5" />
                                    <span className="hidden sm:inline">
                                      Previous
                                    </span>
                                  </Link>
                                )}
                                <Link
                                  href={`/lessons/${courseSlug}/${
                                    lesson.order_index + 1
                                  }`}
                                  aria-label="Go to next lesson"
                                  className="inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all"
                                  title="Next Lesson"
                                >
                                  <span className="hidden sm:inline">Next</span>
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* Ask Tutor Button */}
                          {userId && (
                            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                              <InlineTutor
                                lessonId={lesson.dbId}
                                lessonTitle={lesson.title}
                                lessonContent={lesson.content}
                                currentCode={currentCode}
                              />
                            </div>
                          )}
                        </CardHeader>

                        <Separator />

                        <CardContent className="flex-1 min-h-0 overflow-x-hidden p-4 relative">
                          {/* Confetti overlay */}
                          {showConfetti && (
                            <div className="pointer-events-none absolute inset-0 flex items-start justify-center z-10">
                              <div className="mt-4 grid grid-cols-6 gap-3 text-2xl">
                                <span className="animate-bounce">🎉</span>
                                <span className="animate-bounce [animation-delay:100ms]">
                                  🎈
                                </span>
                                <span className="animate-bounce [animation-delay:200ms]">
                                  🌟
                                </span>
                                <span className="animate-bounce [animation-delay:300ms]">
                                  🎊
                                </span>
                                <span className="animate-bounce [animation-delay:400ms]">
                                  ⭐
                                </span>
                                <span className="animate-bounce [animation-delay:500ms]">
                                  ✨
                                </span>
                              </div>
                            </div>
                          )}
                          <div
                            className="lesson-content prose max-w-none dark:prose-invert
                              prose-headings:font-bold prose-headings:tracking-tight
                              prose-h1:text-xl prose-h1:text-primary prose-h1:mt-1 prose-h1:mb-3 prose-h1:leading-tight prose-h1:first:mt-0
                              prose-h2:text-lg prose-h2:text-accent prose-h2:mt-2 prose-h2:mb-3 prose-h2:leading-snug prose-h2:first:mt-0
                              prose-h3:text-base prose-h3:text-primary/90 prose-h3:mt-2 prose-h3:mb-3 prose-h3:leading-snug prose-h3:first:mt-0
                              prose-h4:text-sm prose-h4:text-primary/80 prose-h4:mt-4 prose-h4:mb-2 prose-h4:leading-snug prose-h4:first:mt-0
                              prose-p:text-foreground prose-p:leading-[1.7] prose-p:mb-3 prose-p:text-sm prose-p:first:mt-0
                              prose-strong:text-primary prose-strong:font-bold prose-strong:text-[1.02em]
                              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-xs prose-code:before:content-none prose-code:after:content-none prose-code:font-semibold
                              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-lg prose-blockquote:my-4 prose-blockquote:italic
                              prose-img:rounded-xl prose-img:shadow-2xl prose-img:ring-2 prose-img:ring-border prose-img:my-4
                              prose-a:text-primary dark:prose-a:text-primary hover:prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:font-semibold prose-a:transition-colors
                              prose-hr:my-4 prose-hr:border-t-2 prose-hr:border-border"
                          >
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                code(props) {
                                  const { children, className } = props;
                                  const match = /language-(\w+)/.exec(
                                    className || ""
                                  );
                                  const codeString = String(children).replace(
                                    /\n$/,
                                    ""
                                  );

                                  return match ? (
                                    <div className="relative my-3">
                                      <SyntaxHighlighter
                                        PreTag="div"
                                        language={match[1]}
                                        style={vscDarkPlus as any}
                                        className="rounded-none shadow-lg !mt-3 !mb-3 ring-2 ring-border"
                                        customStyle={{
                                          padding: "1rem",
                                          fontSize: "0.875rem",
                                          lineHeight: "1.6",
                                        }}
                                      >
                                        {codeString}
                                      </SyntaxHighlighter>
                                    </div>
                                  ) : (
                                    <code className={className}>
                                      {children}
                                    </code>
                                  );
                                },
                              }}
                            >
                              {lesson.content}
                            </ReactMarkdown>
                          </div>

                          {/* Mark as Complete Button */}
                          <div className="mt-12 pt-8 border-t-2 border-border flex flex-col items-center gap-4">
                            <Button
                              onClick={
                                isCompleted
                                  ? handleUnmarkRequest
                                  : handleMarkClick
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  if (isCompleted) {
                                    handleUnmarkRequest();
                                  } else {
                                    handleMarkClick();
                                  }
                                }
                              }}
                              aria-pressed={isCompleted}
                              aria-label={
                                isCompleted
                                  ? "Unmark lesson as complete"
                                  : "Mark lesson as complete"
                              }
                              disabled={isLoading}
                              className={`w-auto px-8 rounded-2xl text-base font-bold py-5 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02] ${
                                isCompleted
                                  ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                                  : "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                              }`}
                            >
                              {isLoading ? (
                                "Updating..."
                              ) : isCompleted ? (
                                <>
                                  <CheckCircle className="h-5 w-5 mr-2" />
                                  🎉 Completed
                                </>
                              ) : (
                                <>
                                  <CheckCircle className="h-5 w-5 mr-2" />
                                  Mark as Complete
                                </>
                              )}
                            </Button>
                            {!userId && (
                              <p className="text-sm text-muted-foreground text-center font-medium">
                                Sign in to track your progress
                              </p>
                            )}
                            <AlertDialog
                              open={confirmOpen}
                              onOpenChange={setConfirmOpen}
                            >
                              <AlertDialogContent className="rounded-2xl">
                                <AlertDialogHeader>
                                  <AlertDialogTitle className="text-base">
                                    Unmark this lesson as complete?
                                  </AlertDialogTitle>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel className="rounded-full">
                                    Cancel
                                  </AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={handleConfirmUnmark}
                                    className="rounded-full"
                                  >
                                    Yes, Unmark
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                            <output className="sr-only" aria-live="polite">
                              {isCompleted
                                ? "Lesson marked as complete"
                                : "Lesson not completed"}
                            </output>
                          </div>

                          {/* Lesson Navigation */}
                          <div className="mt-6 pt-6 border-t-2 border-border flex items-center justify-center gap-3">
                            <Link
                              href={`/lessons/${courseSlug}/${
                                lesson.order_index - 1
                              }`}
                              aria-label="Go to previous lesson"
                              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold bg-white dark:bg-gray-900 border-2 border-purple-300 hover:border-purple-500 dark:border-purple-700 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all"
                            >
                              <ArrowLeft className="h-4 w-4" />
                              <span>Previous</span>
                            </Link>
                            <Link
                              href={`/lessons/${courseSlug}/${
                                lesson.order_index + 1
                              }`}
                              aria-label="Go to next lesson"
                              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transform hover:scale-105 transition-all"
                            >
                              <span>Next Lesson</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Activities Tab */}
                  <TabsContent
                    value="activities"
                    className="mt-0 focus-visible:outline-none data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-top-2 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 data-[state=inactive]:slide-out-to-top-2 duration-200"
                  >
                    <div className="px-2 pb-2">
                      <Card className="flex flex-col rounded-2xl shadow-lg border-0">
                        <CardHeader className="pb-2 px-4 pt-3 border-b border-border/50 flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <CardTitle className="text-base font-semibold">
                              Activities & Instructions
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 min-h-0 py-4 px-4 overflow-x-hidden">
                          <div className="space-y-3 text-foreground text-sm">
                            {lesson.starter_code
                              .replace(/^<!--[\s\S]*?-->/, "")
                              .trim()
                              .split("\n")
                              .filter((line) => line.trim() !== "")
                              .map((line, index, array) => {
                                // Convert URLs to clickable links
                                const urlRegex = /(https?:\/\/[^\s]+)/g;
                                const parts = line.split(urlRegex);

                                // Check if line is a heading (emoji-based or ALL CAPS)
                                const headingPattern = /^[A-Z\s]+:$/;
                                const emojiPatterns = [
                                  "🎮",
                                  "📸",
                                  "🎵",
                                  "📊",
                                  "🤔",
                                  "✅",
                                  "📝",
                                ];
                                const isHeading =
                                  emojiPatterns.some((emoji) =>
                                    line.trim().startsWith(emoji)
                                  ) || headingPattern.test(line.trim());

                                // Check if previous line was empty or a heading (for spacing)
                                const prevLine =
                                  index > 0 ? array[index - 1] : "";
                                const isAfterHeading =
                                  index > 0 &&
                                  (prevLine.trim() === "" ||
                                    headingPattern.test(prevLine.trim()) ||
                                    emojiPatterns.some((emoji) =>
                                      prevLine.trim().startsWith(emoji)
                                    ));

                                // Detect numbered list items
                                const isNumberedItem = /^\d+\.\s/.test(
                                  line.trim()
                                );
                                const isBulletItem = /^[-•]\s/.test(
                                  line.trim()
                                );

                                const lineKey = `line-${index}-${line
                                  .substring(0, 20)
                                  .replace(/\s/g, "-")}`;

                                if (isHeading) {
                                  return (
                                    <div
                                      key={lineKey}
                                      className="font-semibold text-base text-primary mt-4 mb-2 first:mt-0 flex items-center gap-2"
                                    >
                                      <span>{line.trim()}</span>
                                    </div>
                                  );
                                }

                                if (isNumberedItem || isBulletItem) {
                                  return (
                                    <div
                                      key={lineKey}
                                      className="flex items-start gap-2.5 text-foreground/90 leading-relaxed"
                                    >
                                      <span className="text-primary font-medium mt-0.5 shrink-0">
                                        {isNumberedItem
                                          ? line.match(/^\d+\./)?.[0]
                                          : "•"}
                                      </span>
                                      <div className="flex-1">
                                        {parts.map((part, i) => {
                                          const partKey = `${lineKey}-part-${i}`;
                                          return urlRegex.test(part) ? (
                                            <a
                                              key={partKey}
                                              href={part}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center gap-1 rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-xs font-medium text-primary hover:bg-primary/10 hover:border-primary/30 transition-colors underline underline-offset-2"
                                            >
                                              {part}
                                            </a>
                                          ) : (
                                            <span key={partKey}>
                                              {part.replace(
                                                /^\d+\.\s|^[-•]\s/,
                                                ""
                                              )}
                                            </span>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  );
                                }

                                return (
                                  <div
                                    key={lineKey}
                                    className={
                                      isAfterHeading
                                        ? "text-foreground/90 leading-relaxed"
                                        : "text-foreground/80 leading-relaxed"
                                    }
                                  >
                                    {parts.map((part, i) => {
                                      const partKey = `${lineKey}-part-${i}`;
                                      return urlRegex.test(part) ? (
                                        <a
                                          key={partKey}
                                          href={part}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1 rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-xs font-medium text-primary hover:bg-primary/10 hover:border-primary/30 transition-colors underline underline-offset-2"
                                        >
                                          {part}
                                        </a>
                                      ) : (
                                        <span key={partKey}>{part}</span>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* AI Playgrounds Tab */}
                  <TabsContent
                    value="playgrounds"
                    className="mt-0 focus-visible:outline-none data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-top-2 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0 data-[state=inactive]:slide-out-to-top-2 duration-200"
                  >
                    <div className="px-4 pb-4">
                      <Card className="flex flex-col rounded-2xl shadow-lg">
                        <CardHeader className="pb-3 px-3 pt-3 border-b border-border/50 flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <CardTitle className="text-base font-semibold">
                              AI Playgrounds
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 min-h-0 py-3 pl-3 pr-2 overflow-x-hidden">
                          <AIPlayground
                            lessonOrderIndex={lesson.order_index}
                            hideHeader
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        ) : courseSlug?.startsWith("level-") ? (
          // Level courses with tabbed layout
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Left Column: Lesson Content with Tabs */}
            <Card className="flex flex-col rounded-2xl border shadow-2xl max-h-[calc(100vh-140px)]">
              <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 rounded-t-2xl border-b-2 border-border flex-shrink-0 py-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <div
                        className="p-1 bg-gradient-to-br from-primary to-accent rounded-lg shrink-0"
                        aria-hidden="true"
                      >
                        <BookOpen className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                        Lesson {lesson.order_index}: {lesson.title} ✨
                      </span>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-xs mt-1.5 ml-8">
                      {lesson.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {isCompleted && (
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/50 dark:to-emerald-900/50 dark:text-green-300 flex items-center gap-1 px-2 py-1 text-xs font-semibold">
                        <CheckCircle className="h-3 w-3" />
                        Done
                      </Badge>
                    )}
                    <div className="flex items-center gap-1.5">
                      {lesson.order_index > 1 && (
                        <Link
                          href={`/lessons/${courseSlug}/${
                            lesson.order_index - 1
                          }`}
                          aria-label="Go to previous lesson"
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 hover:border-purple-500 dark:border-gray-700 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all"
                          title="Previous Lesson"
                        >
                          <ArrowLeft className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">Previous</span>
                        </Link>
                      )}
                      <Link
                        href={`/lessons/${courseSlug}/${
                          lesson.order_index + 1
                        }`}
                        aria-label="Go to next lesson"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all"
                        title="Next Lesson"
                      >
                        <span className="hidden sm:inline">Next</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Ask Tutor Button */}
                {userId && (
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                    <InlineTutor
                      lessonId={lesson.dbId}
                      lessonTitle={lesson.title}
                      lessonContent={lesson.content}
                      currentCode={currentCode}
                    />
                  </div>
                )}
              </CardHeader>

              <Tabs
                defaultValue="lesson"
                className="flex-1 flex flex-col min-h-0"
              >
                <div className="px-4 pt-3 border-b border-border/50">
                  <TabsList className="grid w-full grid-cols-3 h-9 bg-muted/60">
                    <TabsTrigger
                      value="lesson"
                      className="flex items-center gap-1.5 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Lesson</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="activity"
                      className="flex items-center gap-1.5 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                      disabled={!lesson.class_activities}
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Activity</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="homework"
                      className="flex items-center gap-1.5 text-xs font-semibold data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                      disabled={!lesson.take_home_assignment}
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Homework</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Lesson Content Tab */}
                <TabsContent
                  value="lesson"
                  className="flex-1 overflow-auto p-4 mt-0 relative"
                >
                  {/* Confetti overlay */}
                  {showConfetti && (
                    <div className="pointer-events-none absolute inset-0 flex items-start justify-center z-10">
                      <div className="mt-4 grid grid-cols-6 gap-3 text-2xl">
                        <span className="animate-bounce">🎉</span>
                        <span className="animate-bounce [animation-delay:100ms]">
                          🎈
                        </span>
                        <span className="animate-bounce [animation-delay:200ms]">
                          🌟
                        </span>
                        <span className="animate-bounce [animation-delay:300ms]">
                          🎊
                        </span>
                        <span className="animate-bounce [animation-delay:400ms]">
                          ⭐
                        </span>
                        <span className="animate-bounce [animation-delay:500ms]">
                          ✨
                        </span>
                      </div>
                    </div>
                  )}
                  <div
                    className="lesson-content prose max-w-none dark:prose-invert
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h1:text-xl prose-h1:text-primary prose-h1:mt-1 prose-h1:mb-3 prose-h1:leading-tight prose-h1:first:mt-0
                    prose-h2:text-lg prose-h2:text-accent prose-h2:mt-2 prose-h2:mb-3 prose-h2:leading-snug prose-h2:first:mt-0
                    prose-h3:text-base prose-h3:text-primary/90 prose-h3:mt-2 prose-h3:mb-3 prose-h3:leading-snug prose-h3:first:mt-0
                    prose-h4:text-sm prose-h4:text-primary/80 prose-h4:mt-4 prose-h4:mb-2 prose-h4:leading-snug prose-h4:first:mt-0
                    prose-p:text-foreground prose-p:leading-[1.7] prose-p:mb-3 prose-p:text-sm prose-p:first:mt-0
                    prose-strong:text-primary prose-strong:font-bold prose-strong:text-[1.02em]
                    prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-xs prose-code:before:content-none prose-code:after:content-none prose-code:font-semibold
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-lg prose-blockquote:my-4 prose-blockquote:italic
                    prose-img:rounded-xl prose-img:shadow-2xl prose-img:ring-2 prose-img:ring-border prose-img:my-4
                    prose-a:text-primary dark:prose-a:text-primary hover:prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:font-semibold prose-a:transition-colors
                    prose-hr:my-4 prose-hr:border-t-2 prose-hr:border-border"
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code(props) {
                          const { children, className } = props;
                          const match = /language-(\w+)/.exec(className || "");
                          const codeString = String(children).replace(
                            /\n$/,
                            ""
                          );

                          return match ? (
                            <div className="relative my-3">
                              <SyntaxHighlighter
                                PreTag="div"
                                language={match[1]}
                                style={vscDarkPlus as any}
                                className="rounded-lg shadow-lg !mt-3 !mb-3 ring-2 ring-border"
                                customStyle={{
                                  padding: "1rem",
                                  fontSize: "0.875rem",
                                  lineHeight: "1.6",
                                }}
                              >
                                {codeString}
                              </SyntaxHighlighter>
                            </div>
                          ) : (
                            <code className={className}>{children}</code>
                          );
                        },
                      }}
                    >
                      {lesson.content}
                    </ReactMarkdown>
                  </div>

                  {/* Mark as Complete Button */}
                  <div className="mt-10 pt-6 border-t-2 border-border flex flex-col items-center gap-3">
                    <Button
                      onClick={
                        isCompleted ? handleUnmarkRequest : handleMarkClick
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          if (isCompleted) {
                            handleUnmarkRequest();
                          } else {
                            handleMarkClick();
                          }
                        }
                      }}
                      aria-pressed={isCompleted}
                      aria-label={
                        isCompleted
                          ? "Unmark lesson as complete"
                          : "Mark lesson as complete"
                      }
                      disabled={isLoading}
                      className={`w-auto px-6 rounded-xl text-sm font-bold py-4 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] ${
                        isCompleted
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                          : "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                      }`}
                    >
                      {isLoading ? (
                        "Updating..."
                      ) : isCompleted ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          🎉 Completed
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Mark as Complete
                        </>
                      )}
                    </Button>
                    {!userId && (
                      <p className="text-xs text-muted-foreground text-center font-medium">
                        Sign in to track your progress
                      </p>
                    )}
                  </div>

                  {/* Lesson Navigation */}
                  <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-center gap-2">
                    {lesson.order_index > 1 && (
                      <Link
                        href={`/lessons/${courseSlug}/${
                          lesson.order_index - 1
                        }`}
                        aria-label="Go to previous lesson"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold bg-white dark:bg-gray-900 border border-gray-200 hover:border-purple-400 dark:border-gray-700 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>Previous</span>
                      </Link>
                    )}
                    <Link
                      href={`/lessons/${courseSlug}/${lesson.order_index + 1}`}
                      aria-label="Go to next lesson"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all"
                    >
                      <span>Next Lesson</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </TabsContent>

                {/* Activity Tab */}
                <TabsContent
                  value="activity"
                  className="flex-1 overflow-auto p-4 mt-0"
                >
                  <div className="bg-linear-to-br from-purple-50 via-pink-50 to-fuchsia-50 dark:from-purple-950/40 dark:via-pink-950/30 dark:to-fuchsia-950/40 rounded-xl p-5 border border-purple-200/50 dark:border-purple-800/50">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="p-2 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg shadow-md">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-purple-800 dark:text-purple-200">
                          🎮 In-Class Activity
                        </h3>
                        <p className="text-xs text-purple-600 dark:text-purple-400 mt-0.5">
                          Fun hands-on learning exercise
                        </p>
                      </div>
                    </div>
                    <div className="text-sm leading-relaxed space-y-2.5 text-purple-900 dark:text-purple-100">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <p className="mb-2.5 leading-relaxed">{children}</p>
                          ),
                          strong: ({ children }) => (
                            <strong className="font-semibold text-purple-800 dark:text-purple-200">
                              {children}
                            </strong>
                          ),
                          ul: ({ children }) => (
                            <ul className="list-disc list-inside space-y-1.5 my-2.5 ml-2 marker:text-purple-500 dark:marker:text-purple-400">
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="list-decimal list-inside space-y-1.5 my-2.5 ml-2 marker:text-purple-500 dark:marker:text-purple-400">
                              {children}
                            </ol>
                          ),
                          li: ({ children }) => (
                            <li className="leading-relaxed pl-1">{children}</li>
                          ),
                          h1: ({ children }) => (
                            <h1 className="text-base font-bold text-purple-800 dark:text-purple-200 mt-3 mb-2 first:mt-0">
                              {children}
                            </h1>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-base font-bold text-purple-800 dark:text-purple-200 mt-3 mb-2 first:mt-0">
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-sm font-semibold text-purple-700 dark:text-purple-300 mt-2.5 mb-1.5 first:mt-0">
                              {children}
                            </h3>
                          ),
                        }}
                      >
                        {lesson.class_activities || ""}
                      </ReactMarkdown>
                    </div>
                  </div>
                </TabsContent>

                {/* Homework Tab */}
                <TabsContent
                  value="homework"
                  className="flex-1 overflow-auto p-4 mt-0"
                >
                  <div className="bg-linear-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/40 dark:via-cyan-950/30 dark:to-sky-950/40 rounded-xl p-5 border border-blue-200/50 dark:border-blue-800/50">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="p-2 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg shadow-md">
                        <BookOpen className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-blue-800 dark:text-blue-200">
                          📚 Take-Home Assignment
                        </h3>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">
                          Practice what you learned at home
                        </p>
                      </div>
                    </div>
                    <div className="text-sm leading-relaxed space-y-2.5 text-blue-900 dark:text-blue-100">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <p className="mb-2.5 leading-relaxed">{children}</p>
                          ),
                          strong: ({ children }) => (
                            <strong className="font-semibold text-blue-800 dark:text-blue-200">
                              {children}
                            </strong>
                          ),
                          ul: ({ children }) => (
                            <ul className="list-disc list-inside space-y-1.5 my-2.5 ml-2 marker:text-blue-500 dark:marker:text-blue-400">
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="list-decimal list-inside space-y-1.5 my-2.5 ml-2 marker:text-blue-500 dark:marker:text-blue-400">
                              {children}
                            </ol>
                          ),
                          li: ({ children }) => (
                            <li className="leading-relaxed pl-1">{children}</li>
                          ),
                          h1: ({ children }) => (
                            <h1 className="text-base font-bold text-blue-800 dark:text-blue-200 mt-3 mb-2 first:mt-0">
                              {children}
                            </h1>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-base font-bold text-blue-800 dark:text-blue-200 mt-3 mb-2 first:mt-0">
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mt-2.5 mb-1.5 first:mt-0">
                              {children}
                            </h3>
                          ),
                        }}
                      >
                        {lesson.take_home_assignment || ""}
                      </ReactMarkdown>
                    </div>

                    {/* Homework Submission Section */}
                    {userId && (
                      <div className="mt-6 pt-5 border-t border-blue-200/50 dark:border-blue-800/50">
                        <div className="flex items-center gap-2 mb-4">
                          <Upload className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                            Submit Your Work
                          </h4>
                        </div>

                        {!submission ? (
                          // No submission yet - show submit button
                          <div className="flex flex-col items-start gap-3">
                            <p className="text-xs text-blue-600 dark:text-blue-400">
                              Complete your assignment on Trinket, then submit
                              your work here.
                            </p>
                            <TrinketSubmissionForm
                              lessonId={lesson.dbId}
                              lessonTitle={lesson.title}
                              onSubmitSuccess={fetchSubmission}
                            />
                          </div>
                        ) : (
                          // Has submission - show status
                          <div className="space-y-4">
                            <div className="flex items-center justify-between flex-wrap gap-3">
                              <div className="flex items-center gap-2">
                                {submission.status === "graded" ? (
                                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 gap-1">
                                    <Award className="h-3 w-3" />
                                    Graded
                                    {submission.grade &&
                                      `: ${submission.grade}`}
                                  </Badge>
                                ) : submission.status === "reviewed" ? (
                                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 gap-1">
                                    <MessageSquare className="h-3 w-3" />
                                    Reviewed
                                  </Badge>
                                ) : (
                                  <Badge variant="secondary" className="gap-1">
                                    <Clock className="h-3 w-3" />
                                    Pending Review
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    setShowSubmissionPreview(
                                      !showSubmissionPreview
                                    )
                                  }
                                  className="gap-1.5 text-xs h-8"
                                >
                                  <Eye className="h-3 w-3" />
                                  {showSubmissionPreview ? "Hide" : "View"}{" "}
                                  Submission
                                </Button>
                                {submission.status === "submitted" && (
                                  <TrinketSubmissionForm
                                    lessonId={lesson.dbId}
                                    lessonTitle={lesson.title}
                                    existingUrl={submission.trinketUrl}
                                    onSubmitSuccess={fetchSubmission}
                                  />
                                )}
                              </div>
                            </div>

                            {/* Feedback display */}
                            {submission.feedback && (
                              <div className="bg-white/60 dark:bg-gray-900/60 rounded-lg p-4 border border-blue-200/50 dark:border-blue-800/50">
                                <div className="flex items-center gap-2 mb-2">
                                  <MessageSquare className="h-4 w-4 text-blue-600" />
                                  <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                                    Teacher Feedback
                                  </span>
                                </div>
                                <p className="text-sm text-blue-900 dark:text-blue-100 whitespace-pre-wrap">
                                  {submission.feedback}
                                </p>
                              </div>
                            )}

                            {/* Submission preview */}
                            {showSubmissionPreview && (
                              <div className="mt-3">
                                <TrinketPreview
                                  trinketUrl={submission.trinketUrl}
                                  title="Your Submission"
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Not logged in message */}
                    {!userId && (
                      <div className="mt-6 pt-5 border-t border-blue-200/50 dark:border-blue-800/50">
                        <p className="text-xs text-blue-600 dark:text-blue-400 text-center">
                          Sign in to submit your homework and receive feedback
                          from your teacher.
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>

              <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
                <AlertDialogContent className="rounded-2xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-base">
                      Unmark this lesson as complete?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="rounded-full">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleConfirmUnmark}
                      className="rounded-full"
                    >
                      Yes, Unmark
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <output className="sr-only" aria-live="polite">
                {isCompleted
                  ? "Lesson marked as complete"
                  : "Lesson not completed"}
              </output>
            </Card>

            {/* Right Column: Code Editor */}
            <div className="sticky top-24 self-start w-full">
              {lesson.requires_trinket ? (
                <TrinketEditor
                  initialCode={lesson.starter_code}
                  className="flex flex-col rounded-2xl shadow-xl border-0 ring-1 ring-gray-200/60 dark:ring-white/10 overflow-hidden"
                />
              ) : (
                <PythonEditor
                  initialCode={lesson.starter_code}
                  onCodeChange={handleCodeChange}
                  onRunComplete={handleRunComplete}
                  className="flex flex-col rounded-2xl shadow-xl border-0 ring-1 ring-gray-200/60 dark:ring-white/10 overflow-hidden"
                />
              )}
            </div>
          </div>
        ) : (
          // Non-level courses (legacy layout)
          <Card className="flex flex-col rounded-2xl border shadow-2xl max-h-[calc(100vh-140px)]">
            <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 rounded-t-2xl border-b-2 border-border flex-shrink-0 py-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <div
                      className="p-1 bg-gradient-to-br from-primary to-accent rounded-lg shrink-0"
                      aria-hidden="true"
                    >
                      <BookOpen className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                      Lesson {lesson.order_index}: {lesson.title} ✨
                    </span>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs mt-1.5 ml-8">
                    {lesson.description}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {isCompleted && (
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/50 dark:to-emerald-900/50 dark:text-green-300 flex items-center gap-1 px-2 py-1 text-xs font-semibold">
                      <CheckCircle className="h-3 w-3" />
                      Done
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>

            <Separator />

            <CardContent className="flex-1 overflow-auto p-4 relative">
              <div
                className="lesson-content prose max-w-none dark:prose-invert
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-xl prose-h1:text-primary prose-h1:mt-1 prose-h1:mb-3 prose-h1:leading-tight prose-h1:first:mt-0
                prose-h2:text-lg prose-h2:text-accent prose-h2:mt-2 prose-h2:mb-3 prose-h2:leading-snug prose-h2:first:mt-0
                prose-h3:text-base prose-h3:text-primary/90 prose-h3:mt-2 prose-h3:mb-3 prose-h3:leading-snug prose-h3:first:mt-0
                prose-p:text-foreground prose-p:leading-[1.7] prose-p:mb-3 prose-p:text-sm prose-p:first:mt-0
                prose-strong:text-primary prose-strong:font-bold
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-xs
                prose-a:text-primary hover:prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-hr:my-4 prose-hr:border-t-2 prose-hr:border-border"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {lesson.content}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
