"use client";

import {
	AlertCircle,
	BookOpen,
	Check,
	FileText,
	RefreshCw,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SyncResult {
	success: boolean;
	message: string;
	synced: string[];
	errors: string[];
	skipped: string[];
	teacherNotes: {
		synced: string[];
		errors: string[];
	};
}

export const SyncLessonsButton = () => {
	const [isSyncing, setIsSyncing] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [syncResult, setSyncResult] = useState<SyncResult | null>(null);

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
				const notesCount = data.teacherNotes?.synced?.length || 0;
				toast.success("Sync Complete! ✅", {
					description: `${data.synced.length} lesson${data.synced.length !== 1 ? "s" : ""} and ${notesCount} teacher note${notesCount !== 1 ? "s" : ""} synced.`,
				});
			} else {
				toast.error("Sync Failed", {
					description: data.message || "An error occurred during sync",
				});
			}
		} catch (error) {
			console.error("Sync error:", error);
			toast.error("Sync Error", {
				description: "Failed to connect to sync endpoint",
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
				className="gap-2 border-purple-200 text-purple-700 hover:border-purple-400 hover:bg-purple-50 hover:text-purple-800 dark:border-purple-800 dark:text-purple-300 dark:hover:border-purple-600 dark:hover:bg-purple-950/50 dark:hover:text-purple-200"
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
							<FileText
								className="h-5 w-5 text-purple-600"
								aria-hidden="true"
							/>
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

							{/* Teacher Notes Section */}
							{syncResult.teacherNotes && (
								<>
									{/* Teacher Notes Summary */}
									<div className="flex items-center gap-2 pt-2 border-t">
										<BookOpen
											className="h-4 w-4 text-blue-600"
											aria-hidden="true"
										/>
										<span className="text-sm font-medium">Teacher Notes</span>
										<Badge
											variant="default"
											className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
										>
											{syncResult.teacherNotes.synced.length} Synced
										</Badge>
										{syncResult.teacherNotes.errors.length > 0 && (
											<Badge variant="destructive">
												{syncResult.teacherNotes.errors.length} Errors
											</Badge>
										)}
									</div>

									{/* Teacher Notes Synced */}
									{syncResult.teacherNotes.synced.length > 0 && (
										<div>
											<h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
												Teacher Notes Synced
											</h4>
											<ScrollArea className="h-24 rounded-md border border-blue-200 dark:border-blue-800 p-3">
												<ul className="space-y-1 text-sm">
													{syncResult.teacherNotes.synced.map((item, index) => (
														<li
															key={`notes-synced-${index}`}
															className="text-blue-600 dark:text-blue-400"
														>
															✓ {item}
														</li>
													))}
												</ul>
											</ScrollArea>
										</div>
									)}

									{/* Teacher Notes Errors */}
									{syncResult.teacherNotes.errors.length > 0 && (
										<div>
											<h4 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">
												Teacher Notes Errors
											</h4>
											<ScrollArea className="h-24 rounded-md border border-red-200 dark:border-red-800 p-3">
												<ul className="space-y-1 text-sm">
													{syncResult.teacherNotes.errors.map((item, index) => (
														<li
															key={`notes-error-${index}`}
															className="text-red-600 dark:text-red-400"
														>
															✗ {item}
														</li>
													))}
												</ul>
											</ScrollArea>
										</div>
									)}
								</>
							)}
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
};
