"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface BookmarkButtonProps {
  lessonId: string;
  initialBookmarked?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  showText?: boolean;
  className?: string;
}

export const BookmarkButton = ({
  lessonId,
  initialBookmarked = false,
  variant = "outline",
  size = "default",
  showText = true,
  className = "",
}: BookmarkButtonProps) => {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const [isLoading, setIsLoading] = useState(false);

  // Check bookmark status on mount
  useEffect(() => {
    const checkBookmarkStatus = async () => {
      try {
        const response = await fetch("/api/bookmarks");
        if (response.ok) {
          const data = await response.json();
          const bookmarked = data.bookmarks?.some(
            (b: { lesson_id: string }) => b.lesson_id === lessonId
          );
          setIsBookmarked(bookmarked);
        }
      } catch (error) {
        console.error("Error checking bookmark status:", error);
      }
    };

    checkBookmarkStatus();
  }, [lessonId]);

  const handleToggleBookmark = async () => {
    setIsLoading(true);

    try {
      if (isBookmarked) {
        // Remove bookmark
        const response = await fetch(`/api/bookmarks?lesson_id=${lessonId}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to remove bookmark");
        }

        setIsBookmarked(false);
        toast.success("Bookmark removed");
      } else {
        // Add bookmark
        const response = await fetch("/api/bookmarks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lesson_id: lessonId }),
        });

        if (!response.ok) {
          const data = await response.json();
          if (response.status === 409) {
            // Already bookmarked
            setIsBookmarked(true);
            return;
          }
          throw new Error(data.error || "Failed to add bookmark");
        }

        setIsBookmarked(true);
        toast.success("Lesson bookmarked!");
      }
    } catch (error) {
      console.error("Bookmark toggle error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggleBookmark}
      disabled={isLoading}
      className={`${className} ${
        isBookmarked
          ? "text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
          : ""
      }`}
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : isBookmarked ? (
        <BookmarkCheck className="h-4 w-4 fill-current" />
      ) : (
        <Bookmark className="h-4 w-4" />
      )}
      {showText && (
        <span className="ml-2">
          {isBookmarked ? "Bookmarked" : "Bookmark"}
        </span>
      )}
    </Button>
  );
};

