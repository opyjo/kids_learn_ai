"use client";

import React from "react";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LessonBreadcrumbsProps {
  courseSlug?: string;
  courseTitle?: string;
  lessonTitle: string;
  difficulty?: string;
  isPremium?: boolean;
  backHref?: string;
  backLabel?: string;
  additionalBadges?: Array<{ label: string; className?: string }>;
  className?: string;
}

export const LessonBreadcrumbs = ({
  courseSlug,
  courseTitle,
  lessonTitle,
  difficulty,
  isPremium,
  backHref,
  backLabel,
  additionalBadges,
  className,
}: LessonBreadcrumbsProps) => {
  const lessonsHref = courseSlug
    ? `/lessons?course=${courseSlug}`
    : `/lessons?course=python-foundations`;

  const displayCourseTitle =
    courseTitle ||
    (courseSlug
      ? courseSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "Lessons");

  return (
    <nav
      aria-label="Breadcrumb navigation"
      className={cn("flex items-center gap-2 flex-wrap", className)}
    >
      {/* Home */}
      <Link
        href="/"
        className="group flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 rounded-md px-2 py-1 -ml-2 hover:bg-muted/50 hover:scale-105 active:scale-95"
        aria-label="Go to homepage"
      >
        <Home className="h-4 w-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-[-5deg]" />
        <span className="hidden sm:inline transition-all duration-200">Home</span>
      </Link>

      {/* Optional back crumb (e.g., Admin) */}
      {backHref && backLabel && (
        <>
          <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200" />
          <Link
            href={backHref}
            className="group flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 rounded-md px-2 py-1 hover:bg-muted/50 hover:scale-105 active:scale-95"
            aria-label={`Go to ${backLabel}`}
          >
            <span className="transition-all duration-200">{backLabel}</span>
          </Link>
        </>
      )}

      {/* Course Name */}
      {courseSlug && (
        <>
          <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200" />
          <Link
            href={lessonsHref}
            className="group text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 rounded-md px-2 py-1 hover:bg-muted/50 hover:scale-105 active:scale-95 truncate max-w-[150px] sm:max-w-none relative"
            aria-label={`View ${displayCourseTitle} course`}
          >
            <span className="relative z-10 transition-all duration-200">{displayCourseTitle}</span>
            <span className="absolute inset-0 rounded-md bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-200 -z-0" />
          </Link>
        </>
      )}

      {/* Current Lesson Title */}
      <div className="flex items-center gap-2 flex-wrap">
        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200" />
        <span
          className="text-sm font-semibold text-foreground truncate max-w-[200px] sm:max-w-none relative group"
          aria-current="page"
        >
          <span className="relative z-10">{lessonTitle}</span>
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </span>

        {/* Badges */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {isPremium && (
            <Badge className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white font-semibold px-2.5 py-0.5 text-xs shadow-md border-0 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:rotate-[-2deg] cursor-default">
              ⭐ Premium
            </Badge>
          )}
          {additionalBadges?.map((badge, index) => (
            <Badge
              key={index}
              className={cn(
                "font-semibold px-2.5 py-0.5 text-xs shadow-md transition-all duration-200 hover:scale-110",
                badge.className
              )}
            >
              {badge.label}
            </Badge>
          ))}
        </div>
      </div>
    </nav>
  );
};
