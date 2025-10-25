"use client";

import React, { useState } from "react";
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
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen } from "lucide-react";
import Link from "next/link";
import { PythonEditor } from "@/components/code/python-editor";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

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
  const [lessonProgress, setLessonProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const supabase = getSupabaseBrowserClient();

  // Mark lesson as completed in database
  const markLessonComplete = async () => {
    if (!userId || !lesson.dbId || isCompleted) return;

    try {
      const { error } = await supabase.from("completed_lessons").insert({
        student_id: userId,
        lesson_id: lesson.dbId,
        completed_at: new Date().toISOString(),
      });

      if (error) {
        // If error is duplicate (already completed), that's fine
        if (
          !error.message.includes("duplicate") &&
          !error.message.includes("unique")
        ) {
          console.error("Error marking lesson complete:", error);
        } else {
          setIsCompleted(true);
        }
      } else {
        setIsCompleted(true);
        console.log("✅ Lesson marked as complete!");
      }
    } catch (error) {
      console.error("Error marking lesson complete:", error);
    }
  };

  // Update progress based on code changes
  const handleCodeChange = (code: string) => {
    // Update visual progress indicator
    if (code.trim() === lesson.solution_code.trim()) {
      setLessonProgress(100);
      // Mark as completed in database
      markLessonComplete();
    } else if (code.trim() !== lesson.starter_code.trim()) {
      setLessonProgress(50);
    } else {
      setLessonProgress(0);
    }
  };

  const handleRunComplete = (output: string, isSuccess: boolean) => {
    console.log("[v0] Code execution completed:", { output, isSuccess });
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
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Progress
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        lessonProgress === 100
                          ? "text-green-600"
                          : lessonProgress >= 50
                          ? "text-yellow-600"
                          : "text-gray-500"
                      }`}
                    >
                      {lessonProgress}%
                    </span>
                    {lessonProgress === 100 && (
                      <CheckCircle className="h-4 w-4 text-green-600 animate-bounce" />
                    )}
                  </div>
                </div>
                <Progress
                  value={lessonProgress}
                  className="h-3 rounded-full transition-all duration-500"
                />
              </div>
            </CardHeader>

            <Separator />

            <CardContent className="flex-1 overflow-auto p-6">
              <div className="prose prose-base md:prose-lg max-w-none dark:prose-invert prose-headings:font-extrabold prose-headings:text-indigo-700 dark:prose-headings:text-indigo-300 prose-p:leading-relaxed prose-strong:text-indigo-600 dark:prose-strong:text-indigo-400">
                {lesson.content.split("\n").map((line, index) => {
                  // Headings
                  if (line.startsWith("### ")) {
                    return (
                      <h3
                        key={`line-${index}`}
                        className="text-xl font-bold mt-4 mb-2 text-indigo-600 dark:text-indigo-400"
                      >
                        {line.slice(4)}
                      </h3>
                    );
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2
                        key={`line-${index}`}
                        className="text-2xl font-bold mt-6 mb-3 text-indigo-700 dark:text-indigo-300"
                      >
                        {line.slice(3)}
                      </h2>
                    );
                  }
                  if (line.startsWith("# ")) {
                    return (
                      <h1
                        key={`line-${index}`}
                        className="text-3xl font-extrabold mt-6 mb-4 text-indigo-800 dark:text-indigo-200"
                      >
                        {line.slice(2)}
                      </h1>
                    );
                  }

                  // Code blocks
                  if (line.startsWith("```python")) {
                    return <div key={`line-${index}`} className="hidden" />;
                  }
                  if (line === "```") {
                    return <div key={`line-${index}`} className="hidden" />;
                  }

                  // Bullet points (- or *)
                  if (
                    line.trim().startsWith("- ") ||
                    line.trim().startsWith("* ")
                  ) {
                    const content = line.trim().slice(2);
                    return (
                      <div
                        key={`line-${index}`}
                        className="flex gap-3 mb-3 items-start"
                      >
                        <span className="text-indigo-500 text-xl leading-6 flex-shrink-0">
                          •
                        </span>
                        <span className="flex-1 leading-relaxed">
                          {content}
                        </span>
                      </div>
                    );
                  }

                  // Numbered lists
                  if (/^\d+\.\s/.test(line.trim())) {
                    const match = line.trim().match(/^(\d+)\.\s(.+)$/);
                    if (match) {
                      return (
                        <div
                          key={`line-${index}`}
                          className="flex gap-3 mb-3 items-start"
                        >
                          <span className="text-indigo-600 font-bold flex-shrink-0">
                            {match[1]}.
                          </span>
                          <span className="flex-1 leading-relaxed">
                            {match[2]}
                          </span>
                        </div>
                      );
                    }
                  }

                  // Inline code and bold text
                  if (line.includes("`") || line.includes("**")) {
                    const elements: React.ReactNode[] = [];
                    let lastIndex = 0;

                    // Combine patterns
                    const combinedRegex = /(`[^`]+`|\*\*[^*]+\*\*)/g;
                    const matches = [...line.matchAll(combinedRegex)];

                    if (matches.length > 0) {
                      matches.forEach((match, i) => {
                        const matchText = match[0];
                        const matchIndex = match.index ?? 0;

                        // Add text before match
                        if (matchIndex > lastIndex) {
                          elements.push(line.substring(lastIndex, matchIndex));
                        }

                        // Add formatted match
                        if (
                          matchText.startsWith("`") &&
                          matchText.endsWith("`")
                        ) {
                          elements.push(
                            <code
                              key={`code-${index}-${i}`}
                              className="bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-md font-mono text-sm font-semibold shadow-sm"
                            >
                              {matchText.slice(1, -1)}
                            </code>
                          );
                        } else if (
                          matchText.startsWith("**") &&
                          matchText.endsWith("**")
                        ) {
                          elements.push(
                            <strong
                              key={`bold-${index}-${i}`}
                              className="font-bold text-indigo-600 dark:text-indigo-400"
                            >
                              {matchText.slice(2, -2)}
                            </strong>
                          );
                        }

                        lastIndex = matchIndex + matchText.length;
                      });

                      // Add remaining text
                      if (lastIndex < line.length) {
                        elements.push(line.substring(lastIndex));
                      }

                      return (
                        <p
                          key={`line-${index}`}
                          className="mb-3 leading-relaxed"
                        >
                          {elements}
                        </p>
                      );
                    }
                  }

                  // Empty lines
                  if (line.trim() === "") {
                    return <div key={`line-${index}`} className="h-2" />;
                  }

                  // Regular paragraphs
                  return (
                    <p key={`line-${index}`} className="mb-3 leading-relaxed">
                      {line}
                    </p>
                  );
                })}
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
            {lessonProgress === 100 && (
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
