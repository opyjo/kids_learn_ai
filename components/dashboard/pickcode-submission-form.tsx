"use client";

import { AlertCircle, CheckCircle, Loader2, Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	parsePickcodeProjectUrl,
	validatePickcodeProjectUrl,
} from "@/lib/pickcode";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { PickcodePreview } from "./pickcode-preview";

interface PickcodeSubmissionFormProps {
	lessonId: string;
	lessonTitle: string;
	existingUrl?: string;
	onSubmitSuccess?: () => void;
}

export function PickcodeSubmissionForm({
	lessonId,
	lessonTitle,
	existingUrl,
	onSubmitSuccess,
}: Readonly<PickcodeSubmissionFormProps>) {
	const [isOpen, setIsOpen] = useState(false);
	const [projectUrl, setProjectUrl] = useState(existingUrl || "");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const [showPreview, setShowPreview] = useState(false);
	const validation = validatePickcodeProjectUrl(projectUrl);

	const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProjectUrl(event.target.value);
		setError(null);
		setSuccess(false);
		setShowPreview(false);
	};

	const handleSubmit = async () => {
		const project = parsePickcodeProjectUrl(projectUrl);
		if (!project) {
			setError(validation.message);
			return;
		}

		setIsSubmitting(true);
		setError(null);

		try {
			const supabase = getSupabaseBrowserClient();
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (!user) {
				setError("You must be logged in to submit");
				return;
			}

			// Keep the legacy table and column names so existing submissions and
			// RLS policies continue to work while storing Pickcode project URLs.
			const { error: submitError } = await supabase
				.from("trinket_submissions")
				.upsert(
					{
						student_id: user.id,
						lesson_id: lessonId,
						trinket_url: project.projectUrl,
						status: "submitted",
						submitted_at: new Date().toISOString(),
						updated_at: new Date().toISOString(),
					},
					{ onConflict: "student_id,lesson_id" },
				);

			if (submitError) throw submitError;

			setProjectUrl(project.projectUrl);
			setSuccess(true);
			onSubmitSuccess?.();
		} catch (submissionError) {
			console.error("Submission error:", submissionError);
			setError("Failed to submit. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleOpenChange = (open: boolean) => {
		setIsOpen(open);
		if (!open) {
			if (!existingUrl) setProjectUrl("");
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
					<Upload className="h-4 w-4" aria-hidden="true" />
					{existingUrl ? "Update Submission" : "Submit Assignment"}
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Submit Pickcode Assignment</DialogTitle>
					<DialogDescription>
						Share your code for “{lessonTitle}” using a Pickcode View Code
						project link.
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 py-4">
					<div className="space-y-2">
						<Label htmlFor="pickcode-project-url">Pickcode project link</Label>
						<Input
							id="pickcode-project-url"
							placeholder="https://app.pickcode.io/project/..."
							value={projectUrl}
							onChange={handleUrlChange}
							className={validation.valid ? "border-green-500" : ""}
						/>
						<p className="text-xs text-muted-foreground">
							In Pickcode, choose Share → Anyone with link → View Code, then
							copy the project link.{" "}
							<Link href="/get-pickcode" className="font-medium underline">
								See the setup guide
							</Link>
							.
						</p>
					</div>

					{projectUrl && !validation.valid ? (
						<Alert variant="destructive">
							<AlertCircle className="h-4 w-4" aria-hidden="true" />
							<AlertDescription>{validation.message}</AlertDescription>
						</Alert>
					) : null}

					{validation.valid && !showPreview ? (
						<Button
							variant="outline"
							onClick={() => setShowPreview(true)}
							className="w-full"
						>
							Preview Code
						</Button>
					) : null}

					{showPreview && validation.valid ? (
						<PickcodePreview
							projectUrl={projectUrl}
							title="Pickcode preview"
							className="mt-4"
						/>
					) : null}

					{error ? (
						<Alert variant="destructive">
							<AlertCircle className="h-4 w-4" aria-hidden="true" />
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					) : null}

					{success ? (
						<Alert className="border-green-500 bg-green-50 dark:bg-green-950">
							<CheckCircle
								className="h-4 w-4 text-green-600"
								aria-hidden="true"
							/>
							<AlertDescription className="text-green-700 dark:text-green-300">
								Assignment submitted successfully.
							</AlertDescription>
						</Alert>
					) : null}
				</div>

				<DialogFooter>
					<Button variant="outline" onClick={() => setIsOpen(false)}>
						{success ? "Done" : "Cancel"}
					</Button>
					<Button
						onClick={handleSubmit}
						disabled={!validation.valid || isSubmitting || success}
					>
						{isSubmitting ? (
							<>
								<Loader2
									className="h-4 w-4 mr-2 animate-spin"
									aria-hidden="true"
								/>
								Submitting...
							</>
						) : success ? (
							"Submitted"
						) : (
							"Submit Assignment"
						)}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
