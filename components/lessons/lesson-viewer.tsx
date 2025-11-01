"use client";

import React, { useState, useEffect } from "react";
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
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen } from "lucide-react";
import Link from "next/link";
import { PythonEditor } from "@/components/code/python-editor";
import { TrinketEditor } from "@/components/code/trinket-editor";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
}

interface LessonViewerProps {
  lesson: Lesson;
  userId?: string;
}

export function LessonViewer({ lesson, userId }: Readonly<LessonViewerProps>) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCode, setCurrentCode] = useState(lesson.starter_code);
  const [showConfetti, setShowConfetti] = useState(false);
  const supabase = getSupabaseBrowserClient();
  const { toast } = useToast();
  const [confirmOpen, setConfirmOpen] = useState(false);

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg";
      case "intermediate":
        return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg";
      case "advanced":
        return "bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-600 text-white shadow-lg";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SiteHeader
        leftExtras={
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              aria-label="Go back to all lessons"
              title="Back to lessons"
            >
              <Link href="/lessons" aria-label="Back to lessons">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <Badge
              className={`${getDifficultyColor(
                lesson.difficulty
              )} font-semibold px-4 py-1 text-sm`}
            >
              {lesson.difficulty.charAt(0).toUpperCase() +
                lesson.difficulty.slice(1)}{" "}
              💡
            </Badge>
            {lesson.is_premium && (
              <Badge className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white font-semibold px-4 py-1 text-sm shadow-lg">
                ⭐ Premium
              </Badge>
            )}
          </div>
        }
      />

      <div className="container mx-auto px-4 py-6">
        {/* Playful progress stepper with navigation */}
        <div
          className="mb-6 flex items-center justify-between gap-4 flex-wrap"
          aria-label="Learning steps"
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 bg-gradient-to-r from-blue-100 to-sky-100 dark:from-blue-900/30 dark:to-sky-900/30 ring-1 ring-blue-300/40 dark:ring-blue-700/40">
              <span className="text-xl" role="img" aria-label="Read">
                📖
              </span>
              <span className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                1. Read
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 ring-1 ring-green-300/40 dark:ring-green-700/40">
              <span className="text-xl" role="img" aria-label="Code">
                🧑‍💻
              </span>
              <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                2. Code
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 bg-gradient-to-r from-pink-100 to-fuchsia-100 dark:from-pink-900/30 dark:to-fuchsia-900/30 ring-1 ring-pink-300/40 dark:ring-pink-700/40">
              <span className="text-xl" role="img" aria-label="Celebrate">
                🎉
              </span>
              <span className="text-sm font-semibold text-fuchsia-900 dark:text-fuchsia-200">
                3. Complete
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href={`/lessons/${lesson.id - 1}`}
              aria-label="Go to previous lesson"
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 rounded-2xl px-4 py-2 text-sm font-semibold bg-white dark:bg-gray-900 border-2 border-purple-300 hover:border-purple-500 dark:border-purple-700 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous Lesson
            </Link>
            <Link
              href={`/lessons/${lesson.id + 1}`}
              aria-label="Go to next lesson"
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transform hover:scale-105 transition-all"
            >
              Next Lesson 🚀
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Lesson Content */}
          <Card className="flex flex-col rounded-2xl border-0 shadow-2xl ring-2 ring-primary/20 dark:ring-primary/30 max-h-[calc(100vh-140px)]">
            <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 backdrop-blur-sm rounded-t-2xl border-b-2 border-border flex-shrink-0 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div
                      className="p-1.5 bg-gradient-to-br from-primary to-accent rounded-xl"
                      aria-hidden="true"
                    >
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <span className="tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                      Lesson {lesson.order_index}: {lesson.title} ✨
                    </span>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm mt-2 ml-11">
                    {lesson.description}
                  </CardDescription>
                </div>
                {isCompleted && (
                  <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/50 dark:to-emerald-900/50 dark:text-green-300 flex items-center gap-1.5 px-4 py-2 text-sm font-semibold">
                    <CheckCircle className="h-4 w-4" />
                    Completed
                  </Badge>
                )}
              </div>
            </CardHeader>

            <Separator />

            <CardContent className="flex-1 overflow-auto p-4 relative">
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
                      const codeString = String(children).replace(/\n$/, "");

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
                        <code className={className}>{children}</code>
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
                  onClick={isCompleted ? handleUnmarkRequest : handleMarkClick}
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
              </div>
            </CardContent>
          </Card>

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
      </div>
    </div>
  );
}
