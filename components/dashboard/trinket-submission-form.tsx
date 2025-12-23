"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TrinketPreview, extractEmbedUrl } from "./trinket-preview";
import { Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

interface TrinketSubmissionFormProps {
  lessonId: string;
  lessonTitle: string;
  existingUrl?: string;
  onSubmitSuccess?: () => void;
}

const validateTrinketUrl = (url: string): { valid: boolean; message: string } => {
  if (!url.trim()) {
    return { valid: false, message: "Please enter a Trinket URL" };
  }

  // Check if it's a trinket.io URL
  if (!url.includes("trinket.io")) {
    return { valid: false, message: "Please enter a valid Trinket.io URL" };
  }

  // Try to extract embed URL
  const embedUrl = extractEmbedUrl(url);
  if (!embedUrl.includes("/embed/")) {
    return {
      valid: false,
      message: "Could not parse Trinket URL. Make sure you're using a share link or embed URL.",
    };
  }

  return { valid: true, message: "Valid Trinket URL" };
};

export const TrinketSubmissionForm = ({
  lessonId,
  lessonTitle,
  existingUrl,
  onSubmitSuccess,
}: TrinketSubmissionFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [trinketUrl, setTrinketUrl] = useState(existingUrl || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const validation = validateTrinketUrl(trinketUrl);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrinketUrl(e.target.value);
    setError(null);
    setSuccess(false);
    setShowPreview(false);
  };

  const handlePreview = () => {
    if (validation.valid) {
      setShowPreview(true);
    }
  };

  const handleSubmit = async () => {
    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const supabase = getSupabaseBrowserClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setError("You must be logged in to submit");
        return;
      }

      const embedUrl = extractEmbedUrl(trinketUrl);

      // Upsert the submission (update if exists, insert if not)
      const { error: submitError } = await supabase
        .from("trinket_submissions")
        .upsert(
          {
            student_id: user.id,
            lesson_id: lessonId,
            trinket_url: embedUrl,
            status: "submitted",
            submitted_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: "student_id,lesson_id",
          }
        );

      if (submitError) {
        throw submitError;
      }

      setSuccess(true);
      onSubmitSuccess?.();
      
      // Close dialog after a brief delay
      setTimeout(() => {
        setIsOpen(false);
        setSuccess(false);
        setShowPreview(false);
      }, 1500);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset state when closing
      if (!existingUrl) {
        setTrinketUrl("");
      }
      setError(null);
      setSuccess(false);
      setShowPreview(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant={existingUrl ? "outline" : "default"}
          size="sm"
          className="gap-2"
        >
          <Upload className="h-4 w-4" />
          {existingUrl ? "Update Submission" : "Submit Assignment"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Submit Assignment</DialogTitle>
          <DialogDescription>
            Paste your Trinket share link or embed URL for "{lessonTitle}"
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="trinket-url">Trinket URL</Label>
            <Input
              id="trinket-url"
              placeholder="https://trinket.io/python/abc123..."
              value={trinketUrl}
              onChange={handleUrlChange}
              className={validation.valid && trinketUrl ? "border-green-500" : ""}
            />
            <p className="text-xs text-muted-foreground">
              Copy the share link from Trinket (click Share → Link)
            </p>
          </div>

          {trinketUrl && !validation.valid && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{validation.message}</AlertDescription>
            </Alert>
          )}

          {validation.valid && trinketUrl && !showPreview && (
            <Button
              variant="outline"
              onClick={handlePreview}
              className="w-full"
            >
              Preview Code
            </Button>
          )}

          {showPreview && validation.valid && (
            <TrinketPreview
              trinketUrl={trinketUrl}
              title="Preview"
              className="mt-4"
            />
          )}

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-600">
                Assignment submitted successfully!
              </AlertDescription>
            </Alert>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!validation.valid || isSubmitting || success}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : success ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Submitted!
              </>
            ) : (
              "Submit Assignment"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

