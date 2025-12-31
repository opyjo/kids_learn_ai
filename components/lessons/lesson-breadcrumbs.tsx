"use client";

import React from "react";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

interface LessonBreadcrumbsProps {
  courseSlug?: string;
  courseTitle?: string;
  lessonTitle: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  difficulty?: string;
  isPremium?: boolean;
  backHref?: string;
  backLabel?: string;
  additionalBadges?: Array<{ label: string; className?: string; id?: string }>;
  className?: string;
}

export const LessonBreadcrumbs = ({
  courseSlug,
  courseTitle,
  lessonTitle,
  isPremium,
  backHref,
  backLabel,
  additionalBadges,
  className,
}: LessonBreadcrumbsProps) => {
  const lessonsHref = courseSlug ? `/lessons/${courseSlug}` : `/lessons`;

  const displayCourseTitle =
    courseTitle ||
    (courseSlug
      ? courseSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "Lessons");

  return (
    <Breadcrumb className={cn("py-2", className)}>
      <BreadcrumbList className="flex-wrap">
        {/* Home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Go to homepage"
            >
              <Home className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Optional back crumb (e.g., Admin) */}
        {backHref && backLabel && (
          <>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={backHref}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`Go to ${backLabel}`}
                >
                  {backLabel}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {/* Course Name */}
        {courseSlug && (
          <>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={lessonsHref}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors max-w-[180px] sm:max-w-none truncate"
                  aria-label={`View ${displayCourseTitle} course`}
                >
                  {displayCourseTitle}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {/* Current Lesson Title */}
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="flex items-center gap-2">
          <BreadcrumbPage className="text-sm font-semibold text-foreground max-w-[200px] sm:max-w-[300px] truncate">
            {lessonTitle}
          </BreadcrumbPage>

          {/* Badges */}
          {(isPremium || (additionalBadges && additionalBadges.length > 0)) && (
            <div className="flex items-center gap-1.5 shrink-0">
              {isPremium && (
                <Badge
                  className="bg-linear-to-r from-yellow-400 via-amber-400 to-orange-400 text-white font-semibold px-2 py-0.5 text-xs shadow-sm border-0"
                  aria-label="Premium content"
                >
                  ⭐ Premium
                </Badge>
              )}
              {additionalBadges?.map((badge) => (
                <Badge
                  key={badge.id || badge.label}
                  className={cn(
                    "font-semibold px-2 py-0.5 text-xs shadow-sm",
                    badge.className
                  )}
                >
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
