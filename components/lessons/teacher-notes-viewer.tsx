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
import { ArrowLeft, BookOpen, FileText, List } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Lesson {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  order_index: number;
  is_premium: boolean;
}

interface TeacherNote {
  id: string;
  lesson_id: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface TeacherNotesViewerProps {
  lesson: Lesson;
  teacherNote: TeacherNote | null;
}

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export const TeacherNotesViewer = ({
  lesson,
  teacherNote,
}: Readonly<TeacherNotesViewerProps>) => {
  const [tableOfContents, setTableOfContents] = useState<
    TableOfContentsItem[]
  >([]);
  const [showToc, setShowToc] = useState(false);

  // Extract H1 headers from markdown content for table of contents
  useEffect(() => {
    if (teacherNote?.content) {
      const lines = teacherNote.content.split("\n");
      const headers: TableOfContentsItem[] = [];

      lines.forEach((line) => {
        const h1Match = line.match(/^#\s+(.+)$/);
        if (h1Match) {
          const text = h1Match[1].trim();
          const id = text.toLowerCase().replace(/[^\w]+/g, "-");
          headers.push({ id, text, level: 1 });
        }
      });

      setTableOfContents(headers);
    }
  }, [teacherNote]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setShowToc(false);
    }
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
              aria-label="Go back to admin dashboard"
              title="Back to admin"
            >
              <Link href="/admin" aria-label="Back to admin">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Admin
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
            <Badge className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-4 py-1 text-sm shadow-lg">
              👨‍🏫 Teacher Notes
            </Badge>
          </div>
        }
      />

      <div className="container mx-auto px-4 py-6">
        {/* Playful info badges with navigation */}
        <div
          className="mb-6 flex items-center justify-between gap-4 flex-wrap"
          aria-label="Teacher notes navigation"
        >
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <div className="flex items-center gap-2 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 ring-1 ring-purple-300/40 dark:ring-purple-700/40">
              <span className="text-lg sm:text-xl" role="img" aria-label="Teacher">
                👨‍🏫
              </span>
              <span className="text-xs sm:text-sm font-semibold text-purple-900 dark:text-purple-200 hidden sm:inline">
                Teacher Guide
              </span>
              <span className="text-xs sm:text-sm font-semibold text-purple-900 dark:text-purple-200 sm:hidden">
                Guide
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 bg-gradient-to-r from-blue-100 to-sky-100 dark:from-blue-900/30 dark:to-sky-900/30 ring-1 ring-blue-300/40 dark:ring-blue-700/40">
              <span className="text-lg sm:text-xl" role="img" aria-label="Lesson">
                📚
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-900 dark:text-blue-200 hidden sm:inline">
                Lesson {lesson.order_index}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-900 dark:text-blue-200 sm:hidden">
                L{lesson.order_index}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 ring-1 ring-green-300/40 dark:ring-green-700/40">
              <span
                className="text-lg sm:text-xl"
                role="img"
                aria-label="Resources"
              >
                📖
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-200 hidden sm:inline">
                Full Resources
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-200 sm:hidden">
                Resources
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto sm:flex-shrink-0 mt-3 sm:mt-0">
            <Link
              href={`/admin/teacher-notes`}
              aria-label="Go back to teacher notes list"
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 rounded-2xl px-3 py-2 sm:px-4 text-sm font-semibold bg-white dark:bg-gray-900 border-2 border-purple-300 hover:border-purple-500 dark:border-purple-700 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all flex-1 sm:flex-none"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">All Notes</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <Link
              href={`/lessons/${lesson.order_index}`}
              aria-label="View student lesson"
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 rounded-2xl px-3 py-2 sm:px-4 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transform hover:scale-105 transition-all flex-1 sm:flex-none"
            >
              <span className="hidden sm:inline">Student View 🎓</span>
              <span className="sm:hidden">Student 🎓</span>
            </Link>
          </div>
        </div>

          {/* Table of Contents */}
          {teacherNote && tableOfContents.length > 0 && (
            <Card className="mb-6 rounded-2xl border-0 shadow-lg ring-1 ring-primary/10 dark:ring-primary/20">
              <CardHeader
                className="cursor-pointer hover:bg-muted/50 transition-colors rounded-t-2xl"
                onClick={() => setShowToc(!showToc)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setShowToc(!showToc);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={showToc}
                aria-label="Toggle table of contents"
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <List className="h-4 w-4 text-primary" />
                    <span>Quick Navigation</span>
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {showToc ? "Hide" : "Show"} ({tableOfContents.length}{" "}
                    sections)
                  </Badge>
                </div>
              </CardHeader>
              {showToc && (
                <>
                  <Separator />
                  <CardContent className="pt-4">
                    <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tableOfContents.map((item) => (
                        <Button
                          key={item.id}
                          variant="ghost"
                          className="justify-start h-auto py-2 px-3 text-left"
                          onClick={() => handleScrollToSection(item.id)}
                          aria-label={`Jump to ${item.text}`}
                        >
                          <span className="text-sm truncate">{item.text}</span>
                        </Button>
                      ))}
                    </nav>
                  </CardContent>
                </>
              )}
            </Card>
          )}

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Teacher Notes Content */}
          <Card className="flex flex-col rounded-2xl border-0 shadow-2xl ring-2 ring-primary/20 dark:ring-primary/30">
            <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 backdrop-blur-sm rounded-t-2xl border-b-2 border-border flex-shrink-0 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div
                      className="p-1.5 bg-gradient-to-br from-primary to-accent rounded-xl"
                      aria-hidden="true"
                    >
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <span className="tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                      Lesson {lesson.order_index}: {lesson.title} ✨
                    </span>
                  </CardTitle>
                  <CardDescription className="text-sm mt-2 ml-11">
                    {lesson.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <Separator />

            <CardContent className="p-6">
              {teacherNote ? (
                <div
                  className="teacher-notes-content prose max-w-none dark:prose-invert
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h1:text-2xl prose-h1:text-primary prose-h1:mt-6 prose-h1:mb-4 prose-h1:leading-tight prose-h1:first:mt-0
                    prose-h2:text-xl prose-h2:text-accent prose-h2:mt-8 prose-h2:mb-4 prose-h2:leading-snug prose-h2:first:mt-0
                    prose-h3:text-lg prose-h3:text-primary/90 prose-h3:mt-6 prose-h3:mb-3 prose-h3:leading-snug prose-h3:first:mt-0
                    prose-h4:text-base prose-h4:text-primary/80 prose-h4:mt-5 prose-h4:mb-2 prose-h4:leading-snug prose-h4:first:mt-0
                    prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base prose-p:first:mt-0
                    prose-strong:text-primary prose-strong:font-bold prose-strong:text-[1.02em]
                    prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-code:font-semibold
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:my-6 prose-blockquote:italic
                    prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                    prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:my-2 prose-li:text-base
                    prose-img:rounded-xl prose-img:shadow-2xl prose-img:ring-2 prose-img:ring-border prose-img:my-6
                    prose-a:text-primary dark:prose-a:text-primary hover:prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:font-semibold prose-a:transition-colors
                    prose-hr:my-8 prose-hr:border-t-2 prose-hr:border-border
                    prose-table:w-full prose-table:border-collapse prose-table:my-6
                    prose-th:border prose-th:border-border prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold
                    prose-td:border prose-td:border-border prose-td:p-3"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1(props) {
                        const { children } = props;
                        const text = String(children);
                        const id = text.toLowerCase().replace(/[^\w]+/g, "-");
                        return (
                          <h1 id={id} className="scroll-mt-24">
                            {children}
                          </h1>
                        );
                      },
                      code(props) {
                        const { children, className } = props;
                        const match = /language-(\w+)/.exec(className || "");
                        const codeString = String(children).replace(/\n$/, "");

                        return match ? (
                          <div className="relative my-4">
                            <SyntaxHighlighter
                              PreTag="div"
                              language={match[1]}
                              style={vscDarkPlus as any}
                              className="rounded-xl shadow-lg !mt-4 !mb-4 ring-2 ring-border"
                              customStyle={{
                                padding: "1.25rem",
                                fontSize: "0.9375rem",
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
                    {teacherNote.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No Teacher Notes Available
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Teacher notes for this lesson have not been created yet.
                    Check back later or contact an administrator.
                  </p>
                </div>
              )}

              {teacherNote && (
                <div className="mt-8 pt-6 border-t-2 border-border">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>
                      Created:{" "}
                      {new Date(teacherNote.created_at).toLocaleDateString(
                        "en-CA",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                    <span>
                      Last updated:{" "}
                      {new Date(teacherNote.updated_at).toLocaleDateString(
                        "en-CA",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

