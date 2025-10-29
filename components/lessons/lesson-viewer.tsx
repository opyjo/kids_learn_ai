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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SiteHeader
        leftExtras={
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/lessons">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <Badge className={getDifficultyColor(lesson.difficulty)}>
              {lesson.difficulty}
            </Badge>
            {lesson.is_premium && (
              <Badge className="bg-yellow-100 text-yellow-800">Premium</Badge>
            )}
          </div>
        }
      />

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Lesson Content */}
          <Card className="flex flex-col rounded-2xl border-0 shadow-xl ring-1 ring-gray-200/60 dark:ring-white/10 max-h-[calc(100vh-140px)]">
            <CardHeader className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm rounded-t-2xl border-b flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                    <span className="tracking-tight">
                      Lesson {lesson.order_index}: {lesson.title}
                    </span>
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {lesson.description}
                  </CardDescription>
                </div>
                {isCompleted && (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Completed
                  </Badge>
                )}
              </div>
            </CardHeader>

            <Separator />

            <CardContent className="flex-1 overflow-auto p-6">
              <div className="prose prose-lg max-w-none dark:prose-invert
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-3xl prose-h1:text-indigo-800 dark:prose-h1:text-indigo-200 prose-h1:mt-8 prose-h1:mb-4
                  prose-h2:text-2xl prose-h2:text-indigo-700 dark:prose-h2:text-indigo-300 prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:text-indigo-600 dark:prose-h3:text-indigo-400 prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-indigo-600 dark:prose-strong:text-indigo-400 prose-strong:font-bold
                  prose-code:text-indigo-600 dark:prose-code:text-indigo-400 prose-code:bg-indigo-50 dark:prose-code:bg-indigo-950 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                  prose-ul:my-4 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:my-2
                  prose-ol:my-4
                  prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-50 dark:prose-blockquote:bg-indigo-950/30 prose-blockquote:py-2 prose-blockquote:px-4
                  prose-img:rounded-lg prose-img:shadow-lg
                  prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline">
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
                          className="rounded-lg my-4 shadow-lg !mt-4 !mb-6"
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
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
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Button
                  onClick={toggleCompletion}
                  disabled={isLoading || !userId}
                  className={`w-full rounded-full text-base font-semibold py-6 transition-all ${
                    isCompleted
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
                  }`}
                >
                  {isLoading ? (
                    "Updating..."
                  ) : isCompleted ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Lesson Completed - Click to Unmark
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Mark as Complete
                    </>
                  )}
                </Button>
                {!userId && (
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Sign in to track your progress
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="sticky top-24 self-start w-full">
            <PythonEditor
              initialCode={lesson.starter_code}
              onCodeChange={handleCodeChange}
              onRunComplete={handleRunComplete}
              className="flex flex-col rounded-2xl shadow-xl border-0 ring-1 ring-gray-200/60 dark:ring-white/10 overflow-hidden"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <Button variant="outline" asChild className="rounded-full shadow-sm">
            <Link href={`/lessons/${lesson.id - 1}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Lesson
            </Link>
          </Button>

          <div className="text-center">
            {isCompleted && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Lesson Complete!</span>
              </div>
            )}
          </div>

          <Button
            asChild
            className="rounded-full shadow-sm bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"
          >
            <Link href={`/lessons/${lesson.id + 1}`}>
              Next Lesson
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
