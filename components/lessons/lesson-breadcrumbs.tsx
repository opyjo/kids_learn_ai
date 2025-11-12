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
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md px-2 py-1 -ml-2 hover:bg-muted/50"
        aria-label="Go to homepage"
      >
        <Home className="h-4 w-4" />
        <span className="hidden sm:inline">Home</span>
      </Link>

      {/* Optional back crumb (e.g., Admin) */}
      {backHref && backLabel && (
        <>
          <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
          <Link
            href={backHref}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md px-2 py-1 hover:bg-muted/50"
            aria-label={`Go to ${backLabel}`}
          >
            <span>{backLabel}</span>
          </Link>
        </>
      )}

      {/* Course Name */}
      {courseSlug && (
        <>
          <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
          <Link
            href={lessonsHref}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md px-2 py-1 hover:bg-muted/50 truncate max-w-[150px] sm:max-w-none"
            aria-label={`View ${displayCourseTitle} course`}
          >
            {displayCourseTitle}
          </Link>
        </>
      )}

      {/* Current Lesson Title */}
      <div className="flex items-center gap-2 flex-wrap">
        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
        <span
          className="text-sm font-semibold text-foreground truncate max-w-[200px] sm:max-w-none"
          aria-current="page"
        >
          {lessonTitle}
        </span>

        {/* Badges */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {isPremium && (
            <Badge className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white font-semibold px-2.5 py-0.5 text-xs shadow-md border-0">
              ⭐ Premium
            </Badge>
          )}
          {additionalBadges?.map((badge, index) => (
            <Badge
              key={index}
              className={cn(
                "font-semibold px-2.5 py-0.5 text-xs shadow-md",
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
