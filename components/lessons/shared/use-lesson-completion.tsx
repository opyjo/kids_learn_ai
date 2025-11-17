"use client";

import { useState, useEffect } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface UseLessonCompletionProps {
  lessonDbId: string;
  userId?: string;
}

export const useLessonCompletion = ({
  lessonDbId,
  userId,
}: UseLessonCompletionProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const supabase = getSupabaseBrowserClient();
  const { toast } = useToast();

  // Fetch completion status on mount
  useEffect(() => {
    const checkCompletionStatus = async () => {
      if (!lessonDbId) return;

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
          .eq("lesson_id", lessonDbId)
          .maybeSingle();

        setIsCompleted(!!data);
      } catch (_error) {
        setIsCompleted(false);
      }
    };

    checkCompletionStatus();
  }, [lessonDbId, supabase]);

  // Toggle lesson completion
  const toggleCompletion = async (action?: "complete" | "uncomplete") => {
    if (!userId || !lessonDbId) {
      alert("Please sign in to track your progress");
      return;
    }

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
        const { error } = await supabase
          .from("completed_lessons")
          .delete()
          .eq("student_id", authUser.id)
          .eq("lesson_id", lessonDbId);

        if (error) {
          console.error("Error unmarking lesson:", error);
          alert(error.message ?? "Failed to update completion status");
          return;
        }

        setIsCompleted(false);
        console.log("✅ Lesson unmarked as complete");
        return;
      }

      const { error } = await supabase.from("completed_lessons").insert({
        student_id: authUser.id,
        lesson_id: lessonDbId,
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

  return {
    isCompleted,
    isLoading,
    showConfetti,
    toggleCompletion,
    handleMarkClick,
  };
};






