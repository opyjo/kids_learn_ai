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
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

  // Fetch completion status on mount
  useEffect(() => {
    const checkCompletionStatus = async () => {
      if (!userId || !lesson.dbId) return;

      try {
        const { data, error } = await supabase
          .from("completed_lessons")
          .select("id")
          .eq("student_id", userId)
          .eq("lesson_id", lesson.dbId)
          .single();

        if (data && !error) {
          setIsCompleted(true);
        }
      } catch (error) {
        // Not completed or error - either way, show as not completed
        setIsCompleted(false);
      }
    };

    checkCompletionStatus();
  }, [userId, lesson.dbId, supabase]);

  // Toggle lesson completion
  const toggleCompletion = async () => {
    if (!userId || !lesson.dbId) {
      alert("Please sign in to track your progress");
      return;
    }

    setIsLoading(true);

    try {
      if (isCompleted) {
        // Unmark as completed
        const { error } = await supabase
          .from("completed_lessons")
          .delete()
          .eq("student_id", userId)
          .eq("lesson_id", lesson.dbId);

        if (error) {
          console.error("Error unmarking lesson:", error);
          alert("Failed to update completion status");
        } else {
          setIsCompleted(false);
          console.log("✅ Lesson unmarked as complete");
        }
      } else {
        // Mark as completed
        const completionTimestamp = new Date().toISOString();
        const { error } = await supabase.from("completed_lessons").insert({
          student_id: userId,
          lesson_id: lesson.dbId,
          completed_at: completionTimestamp,
        });

        if (error) {
          console.error("Error marking lesson complete:", error);
          alert("Failed to mark lesson as complete");
        } else {
          setIsCompleted(true);
          console.log("✅ Lesson marked as complete!");
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 2200);
        }
      }
    } catch (error) {
      console.error("Error toggling completion:", error);
      alert("An error occurred");
    } finally {
      setIsLoading(false);
    }
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
        {/* Playful progress stepper */}
        <div className="mb-6" aria-label="Learning steps">
          <div className="grid grid-cols-3 gap-3">
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
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Lesson Content */}
          <Card className="flex flex-col rounded-2xl border-0 shadow-2xl ring-2 ring-primary/20 dark:ring-primary/30 max-h-[calc(100vh-140px)]">
            <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 backdrop-blur-sm rounded-t-2xl border-b-2 border-border flex-shrink-0 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div
                      className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl"
                      aria-hidden="true"
                    >
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <span className="tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                      Lesson {lesson.order_index}: {lesson.title} ✨
                    </span>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base mt-3 ml-14">
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

            <CardContent className="flex-1 overflow-auto p-8 relative">
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
                className="prose prose-lg max-w-none dark:prose-invert
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-4xl prose-h1:text-primary prose-h1:mt-12 prose-h1:mb-8 prose-h1:leading-tight
                  prose-h2:text-3xl prose-h2:text-accent prose-h2:mt-14 prose-h2:mb-7 prose-h2:leading-snug
                  prose-h3:text-2xl prose-h3:text-primary/90 prose-h3:mt-12 prose-h3:mb-6 prose-h3:leading-snug
                  prose-p:text-foreground prose-p:leading-[1.9] prose-p:mb-8 prose-p:text-lg
                  prose-strong:text-primary prose-strong:font-bold
                  prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-base prose-code:before:content-none prose-code:after:content-none prose-code:font-semibold
                  prose-ul:my-8 prose-ul:space-y-4 prose-li:text-foreground prose-li:my-4 prose-li:text-lg prose-li:leading-relaxed
                  prose-ol:my-8 prose-ol:space-y-4
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-5 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:my-10
                  prose-img:rounded-xl prose-img:shadow-2xl prose-img:ring-2 prose-img:ring-border prose-img:my-10
                  prose-a:text-primary dark:prose-a:text-primary hover:prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:font-semibold prose-a:transition-colors"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code(props) {
                      const { children, className } = props;
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        <SyntaxHighlighter
                          PreTag="div"
                          language={match[1]}
                          style={vscDarkPlus as any}
                          className="rounded-xl my-10 shadow-lg !mt-10 !mb-12 ring-2 ring-border"
                          customStyle={{
                            padding: "2rem",
                            fontSize: "1rem",
                            lineHeight: "1.8",
                          }}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
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
              <div className="mt-12 pt-8 border-t-2 border-border">
                <Button
                  onClick={toggleCompletion}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCompletion();
                    }
                  }}
                  aria-pressed={isCompleted}
                  aria-label={
                    isCompleted
                      ? "Unmark lesson as complete"
                      : "Mark lesson as complete"
                  }
                  disabled={isLoading || !userId}
                  className={`w-full rounded-2xl text-lg font-bold py-7 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02] ${
                    isCompleted
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                      : "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                  }`}
                >
                  {isLoading ? (
                    "Updating..."
                  ) : isCompleted ? (
                    <>
                      <CheckCircle className="h-6 w-6 mr-3" />
                      🎉 Lesson Completed - Click to Unmark
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-6 w-6 mr-3" />
                      Mark as Complete & Celebrate!
                    </>
                  )}
                </Button>
                {!userId && (
                  <p className="text-sm text-muted-foreground text-center mt-4 font-medium">
                    Sign in to track your progress
                  </p>
                )}
                <output className="sr-only" aria-live="polite">
                  {isCompleted
                    ? "Lesson marked as complete"
                    : "Lesson not completed"}
                </output>
              </div>
            </CardContent>
          </Card>

          <div className="sticky top-24 self-start w-full">
            <div className="mb-4 rounded-2xl p-4 bg-gradient-to-r from-violet-100 via-fuchsia-100 to-pink-100 dark:from-violet-900/30 dark:via-fuchsia-900/30 dark:to-pink-900/30 ring-1 ring-violet-300/40 dark:ring-violet-700/40">
              <div className="flex items-start gap-3">
                <span
                  className="text-2xl"
                  role="img"
                  aria-label="Friendly robot"
                >
                  🤖
                </span>
                <div>
                  <p className="font-bold text-violet-900 dark:text-violet-200">
                    Tip from Robo-Buddy
                  </p>
                  <p className="text-sm text-violet-800/90 dark:text-violet-200/80">
                    Read the lesson on the left, try the code on the right, then
                    hit
                    <span className="mx-1 inline-flex items-center gap-1 font-semibold">
                      Complete
                    </span>
                    when you’re done. You got this!
                  </p>
                </div>
              </div>
            </div>
            <PythonEditor
              initialCode={lesson.starter_code}
              onCodeChange={handleCodeChange}
              onRunComplete={handleRunComplete}
              className="flex flex-col rounded-2xl shadow-xl border-0 ring-1 ring-gray-200/60 dark:ring-white/10 overflow-hidden"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            asChild
            className="rounded-2xl shadow-lg hover:shadow-xl border-2 border-purple-300 hover:border-purple-500 dark:border-purple-700 dark:hover:border-purple-500 px-6 py-6 text-base font-semibold bg-white dark:bg-gray-900 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all"
          >
            <Link
              href={`/lessons/${lesson.id - 1}`}
              aria-label="Go to previous lesson"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Previous Lesson
            </Link>
          </Button>

          <div className="text-center">
            {isCompleted && (
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg">
                <CheckCircle className="h-6 w-6" />
                <span className="font-bold text-lg">🎉 Lesson Complete!</span>
              </div>
            )}
          </div>

          <Button
            asChild
            className="rounded-2xl shadow-lg hover:shadow-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 px-6 py-6 text-base font-semibold text-white transform hover:scale-105 transition-all"
          >
            <Link
              href={`/lessons/${lesson.id + 1}`}
              aria-label="Go to next lesson"
            >
              Next Lesson 🚀
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
