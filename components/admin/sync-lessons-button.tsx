"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Check, AlertCircle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface SyncResult {
  success: boolean;
  message: string;
  synced: string[];
  errors: string[];
  skipped: string[];
}

export const SyncLessonsButton = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [syncResult, setSyncResult] = useState<SyncResult | null>(null);
  const { toast } = useToast();

  const handleSync = async () => {
    setIsSyncing(true);
    setSyncResult(null);

    try {
      const response = await fetch("/api/admin/sync-lessons", {
        method: "POST",
      });
      const data: SyncResult = await response.json();

      if (data.success) {
        setSyncResult(data);
        setShowResults(true);
        toast({
          title: "Sync Complete! ✅",
          description: `${data.synced.length} lesson${data.synced.length !== 1 ? "s" : ""} synced successfully.`,
        });
      } else {
        toast({
          title: "Sync Failed",
          description: data.message || "An error occurred during sync",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Sync error:", error);
      toast({
        title: "Sync Error",
        description: "Failed to connect to sync endpoint",
        variant: "destructive",
      });
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <>
      <Button
        onClick={handleSync}
        disabled={isSyncing}
        variant="outline"
        className="gap-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 dark:border-purple-800 dark:hover:border-purple-600 dark:hover:bg-purple-950/50"
        aria-label="Sync lessons from markdown files"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSync();
          }
        }}
      >
        <RefreshCw
          className={`h-4 w-4 ${isSyncing ? "animate-spin" : ""}`}
          aria-hidden="true"
        />
        {isSyncing ? "Syncing..." : "Sync Lessons from Files"}
      </Button>

      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" aria-hidden="true" />
              Sync Results
            </DialogTitle>
            <DialogDescription>
              Summary of the lesson synchronization process
            </DialogDescription>
          </DialogHeader>

          {syncResult && (
            <div className="space-y-4">
              {/* Summary badges */}
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="default"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  <Check className="h-3 w-3 mr-1" aria-hidden="true" />
                  {syncResult.synced.length} Synced
                </Badge>
                {syncResult.errors.length > 0 && (
                  <Badge variant="destructive">
                    <AlertCircle className="h-3 w-3 mr-1" aria-hidden="true" />
                    {syncResult.errors.length} Errors
                  </Badge>
                )}
                {syncResult.skipped.length > 0 && (
                  <Badge variant="secondary">
                    {syncResult.skipped.length} Skipped
                  </Badge>
                )}
              </div>

              {/* Synced lessons */}
              {syncResult.synced.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">
                    Successfully Synced
                  </h4>
                  <ScrollArea className="h-32 rounded-md border border-green-200 dark:border-green-800 p-3">
                    <ul className="space-y-1 text-sm">
                      {syncResult.synced.map((item, index) => (
                        <li
                          key={`synced-${index}`}
                          className="text-green-600 dark:text-green-400"
                        >
                          ✓ {item}
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              )}

              {/* Errors */}
              {syncResult.errors.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">
                    Errors
                  </h4>
                  <ScrollArea className="h-32 rounded-md border border-red-200 dark:border-red-800 p-3">
                    <ul className="space-y-1 text-sm">
                      {syncResult.errors.map((item, index) => (
                        <li
                          key={`error-${index}`}
                          className="text-red-600 dark:text-red-400"
                        >
                          ✗ {item}
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              )}

              {/* Skipped */}
              {syncResult.skipped.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Skipped (missing frontmatter)
                  </h4>
                  <ScrollArea className="h-24 rounded-md border p-3">
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {syncResult.skipped.map((item, index) => (
                        <li key={`skipped-${index}`}>− {item}</li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

