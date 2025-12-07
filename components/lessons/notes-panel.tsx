"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { StickyNote, Save, Trash2, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface NotesPanelProps {
  lessonId: string;
  lessonTitle: string;
}

export const NotesPanel = ({ lessonId, lessonTitle }: NotesPanelProps) => {
  const [content, setContent] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch existing note on mount
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch(`/api/notes?lesson_id=${lessonId}`);
        if (response.ok) {
          const data = await response.json();
          if (data.note) {
            setContent(data.note.content);
            setOriginalContent(data.note.content);
            setLastSaved(new Date(data.note.updated_at));
          }
        }
      } catch (error) {
        console.error("Error fetching note:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      fetchNote();
    }
  }, [lessonId, isOpen]);

  // Auto-save with debounce
  const saveNote = useCallback(async (noteContent: string) => {
    if (noteContent === originalContent) return;

    setIsSaving(true);
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lesson_id: lessonId,
          content: noteContent,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save note");
      }

      setOriginalContent(noteContent);
      setLastSaved(new Date());
    } catch (error) {
      console.error("Error saving note:", error);
      toast.error("Failed to save note");
    } finally {
      setIsSaving(false);
    }
  }, [lessonId, originalContent]);

  // Debounced auto-save
  useEffect(() => {
    if (!isOpen || content === originalContent) return;

    const timer = setTimeout(() => {
      saveNote(content);
    }, 1500); // Auto-save after 1.5 seconds of no typing

    return () => clearTimeout(timer);
  }, [content, isOpen, saveNote, originalContent]);

  const handleManualSave = async () => {
    await saveNote(content);
    toast.success("Note saved!");
  };

  const handleDelete = async () => {
    if (!content && !originalContent) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/notes?lesson_id=${lessonId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      setContent("");
      setOriginalContent("");
      setLastSaved(null);
      toast.success("Note deleted");
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note");
    } finally {
      setIsDeleting(false);
    }
  };

  const hasChanges = content !== originalContent;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <StickyNote className="h-4 w-4" />
          <span className="hidden sm:inline">Notes</span>
          {originalContent && (
            <span className="ml-1 h-2 w-2 rounded-full bg-yellow-500" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <StickyNote className="h-5 w-5 text-yellow-600" />
            My Notes
          </SheetTitle>
          <SheetDescription>
            Notes for: {lessonTitle}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 flex flex-col h-[calc(100vh-180px)]">
          {isLoading ? (
            <div className="flex items-center justify-center flex-1">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <>
              <Textarea
                placeholder="Write your notes here... They'll be saved automatically!"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="flex-1 resize-none text-base"
              />

              {/* Status bar */}
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  {isSaving ? (
                    <>
                      <Loader2 className="h-3 w-3 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : hasChanges ? (
                    <span className="text-yellow-600">Unsaved changes</span>
                  ) : lastSaved ? (
                    <>
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span>
                        Saved {lastSaved.toLocaleTimeString()}
                      </span>
                    </>
                  ) : (
                    <span>No notes yet</span>
                  )}
                </div>
                <span>{content.length} characters</span>
              </div>

              {/* Action buttons */}
              <div className="mt-4 flex gap-2">
                <Button
                  onClick={handleManualSave}
                  disabled={isSaving || !hasChanges}
                  className="flex-1"
                >
                  {isSaving ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  Save
                </Button>
                <Button
                  variant="outline"
                  onClick={handleDelete}
                  disabled={isDeleting || (!content && !originalContent)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  {isDeleting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* Tips */}
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">
                  💡 <strong>Tip:</strong> Your notes are saved automatically as you type. 
                  Use them to jot down important concepts, questions, or code snippets!
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

