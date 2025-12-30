"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, FileText } from "lucide-react";
import { LessonBreadcrumbs } from "@/components/lessons/lesson-breadcrumbs";
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
  courseSlug?: string;
}


export const TeacherNotesViewer = ({
  lesson,
  teacherNote,
  courseSlug,
}: Readonly<TeacherNotesViewerProps>) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SiteHeader />
      <div className="container mx-auto px-4 pt-3">
        <LessonBreadcrumbs
          courseSlug={undefined}
          lessonTitle={lesson.title}
          difficulty={lesson.difficulty}
          isPremium={lesson.is_premium}
          backHref="/admin"
          backLabel="Admin"
          rootHref="/admin/teacher-notes"
          rootLabel="Teacher Notes"
          additionalBadges={[
            {
              label: "👨‍🏫 Teacher Notes",
              className:
                "bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-0",
            },
          ]}
        />
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Navigation */}
        <div className="mb-6 flex items-center justify-end">
          <Link
            href={`/lessons/${courseSlug || "python-foundations"}/${lesson.order_index}`}
            aria-label="View student lesson"
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 rounded-2xl px-3 py-2 sm:px-4 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transform hover:scale-105 transition-all"
          >
            <span className="hidden sm:inline">Student View 🎓</span>
            <span className="sm:hidden">Student 🎓</span>
          </Link>
        </div>

        {/* Table of Contents removed */}

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Teacher Notes Content */}
          <Card className="flex flex-col rounded-2xl border shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 rounded-t-2xl border-b-2 border-border flex-shrink-0 py-4">
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
                <div className="teacher-notes-content max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => {
                        const text = String(children);
                        const id = text.toLowerCase().replace(/[^\w]+/g, "-");
                        return (
                          <h1
                            id={id}
                            className="scroll-mt-24 text-3xl font-extrabold tracking-tight text-primary mt-8 mb-4 border-b pb-2"
                          >
                            {children}
                          </h1>
                        );
                      },
                      h2: ({ children }) => {
                        const text = String(children);
                        const id = text.toLowerCase().replace(/[^\w]+/g, "-");
                        return (
                          <h2
                            id={id}
                            className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground mt-8 mb-4"
                          >
                            {children}
                          </h2>
                        );
                      },
                      h3: ({ children }) => (
                        <h3 className="text-xl font-semibold tracking-tight text-foreground mt-6 mb-3">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="leading-7 [&:not(:first-child)]:mt-4 text-muted-foreground">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="my-4 ml-6 list-disc [&>li]:mt-2 marker:text-primary">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="my-4 ml-6 list-decimal [&>li]:mt-2 marker:text-primary font-medium">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="text-muted-foreground pl-2">{children}</li>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="mt-6 border-l-4 border-primary bg-primary/5 pl-6 py-4 italic rounded-r-lg text-muted-foreground">
                          {children}
                        </blockquote>
                      ),
                      table: ({ children }) => (
                        <div className="my-6 w-full overflow-y-auto rounded-lg border shadow-sm">
                          <table className="w-full text-sm text-left">
                            {children}
                          </table>
                        </div>
                      ),
                      thead: ({ children }) => (
                        <thead className="bg-muted/50 border-b [&_tr]:border-b-0">
                          {children}
                        </thead>
                      ),
                      tbody: ({ children }) => (
                        <tbody className="[&_tr:last-child]:border-0">
                          {children}
                        </tbody>
                      ),
                      tr: ({ children }) => (
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          {children}
                        </tr>
                      ),
                      th: ({ children }) => (
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-foreground">
                          {children}
                        </td>
                      ),
                      hr: () => <hr className="my-8 border-border" />,
                      code(props) {
                        const { children, className } = props;
                        const match = /language-(\w+)/.exec(className || "");
                        const codeString = String(children).replace(/\n$/, "");

                        return match ? (
                          <div className="relative my-6 rounded-lg overflow-hidden border bg-zinc-950 shadow-md">
                            <SyntaxHighlighter
                              PreTag="div"
                              language={match[1]}
                              style={vscDarkPlus as any}
                              className="!m-0 !p-4 !bg-transparent"
                              customStyle={{
                                margin: 0,
                                padding: "1rem",
                                fontSize: "0.9rem",
                                lineHeight: "1.5",
                              }}
                            >
                              {codeString}
                            </SyntaxHighlighter>
                          </div>
                        ) : (
                          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground">
                            {children}
                          </code>
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
