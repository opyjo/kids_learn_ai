"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const STATUS_OPTIONS = [
	{ value: "new", label: "New" },
	{ value: "contacted", label: "Contacted" },
	{ value: "trial_scheduled", label: "Trial Scheduled" },
	{ value: "declined", label: "Declined" },
];

interface CourseOption {
	id: string;
	title: string;
}

interface InquiryStatusControlProps {
	id: string;
	initialStatus: string;
	initialNotes: string | null;
	initialCourseId: string | null;
	studentId: string | null;
	courses: CourseOption[];
}

export function InquiryStatusControl({
	id,
	initialStatus,
	initialNotes,
	initialCourseId,
	studentId,
	courses,
}: InquiryStatusControlProps) {
	const router = useRouter();
	const [status, setStatus] = useState(initialStatus || "new");
	const [notes, setNotes] = useState(initialNotes ?? "");
	const [savedNotes, setSavedNotes] = useState(initialNotes ?? "");
	const [isStatusSaving, setIsStatusSaving] = useState(false);
	const [isNotesSaving, setIsNotesSaving] = useState(false);
	const [isEnrolling, setIsEnrolling] = useState(false);
	const [courseId, setCourseId] = useState(initialCourseId ?? "");
	const [linkedStudentId, setLinkedStudentId] = useState(studentId);

	const patch = async (payload: {
		status?: string;
		notes?: string;
	}): Promise<boolean> => {
		const res = await fetch("/api/admin/inquiries", {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id, ...payload }),
		});
		if (!res.ok) {
			const data = await res.json().catch(() => null);
			throw new Error(data?.error || "Update failed");
		}
		return true;
	};

	const handleStatusChange = async (next: string) => {
		const previous = status;
		setStatus(next); // optimistic
		setIsStatusSaving(true);
		try {
			await patch({ status: next });
			toast.success("Status updated");
			router.refresh();
		} catch (err) {
			setStatus(previous); // revert
			toast.error(
				err instanceof Error ? err.message : "Couldn't update status",
			);
		} finally {
			setIsStatusSaving(false);
		}
	};

	const handleNotesSave = async () => {
		setIsNotesSaving(true);
		try {
			await patch({ notes });
			setSavedNotes(notes);
			toast.success("Notes saved");
			router.refresh();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Couldn't save notes");
		} finally {
			setIsNotesSaving(false);
		}
	};

	const notesDirty = notes !== savedNotes;

	const handleCompleteEnrolment = async () => {
		if (!courseId) {
			toast.error("Choose a course before completing enrolment");
			return;
		}

		setIsEnrolling(true);
		try {
			const res = await fetch("/api/admin/inquiries/enroll", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ inquiryId: id, courseId }),
			});
			const data = await res.json().catch(() => null);
			if (!res.ok) throw new Error(data?.error || "Enrolment failed");

			toast.success(
				data.invitationSent
					? `Parent invited; ${data.username} was created for the student`
					: `Student ${data.username || "account"} linked and given course access`,
			);
			setStatus("enrolled");
			setLinkedStudentId(data.studentId);
			router.refresh();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Enrolment failed");
		} finally {
			setIsEnrolling(false);
		}
	};
	const isFullyEnrolled = status === "enrolled" && Boolean(linkedStudentId);

	return (
		<div className="flex flex-col gap-3 sm:w-72">
			{status === "enrolled" && (
				<div
					className={
						isFullyEnrolled
							? "rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800 dark:border-green-900 dark:bg-green-950/30 dark:text-green-300"
							: "rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300"
					}
				>
					{isFullyEnrolled
						? "Enrolled and linked to a student account"
						: "Marked enrolled, but no student account or course is linked yet"}
				</div>
			)}
			<div className="flex items-center gap-2">
				<Select
					value={status === "enrolled" ? "" : status}
					onValueChange={handleStatusChange}
					disabled={isStatusSaving || status === "enrolled"}
				>
					<SelectTrigger className="h-9" aria-label="Inquiry status">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{STATUS_OPTIONS.map((opt) => (
							<SelectItem key={opt.value} value={opt.value}>
								{opt.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				{isStatusSaving && (
					<Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
				)}
			</div>

			{!isFullyEnrolled && (
				<div className="space-y-2 rounded-md border p-3">
					<p className="text-sm font-medium">Complete enrolment</p>
					<p className="text-xs text-muted-foreground">
						Invites the parent when needed, creates a separate child account,
						then grants the child course access.
					</p>
					<Select value={courseId} onValueChange={setCourseId}>
						<SelectTrigger aria-label="Course for enrolment">
							<SelectValue placeholder="Choose a course" />
						</SelectTrigger>
						<SelectContent>
							{courses.map((course) => (
								<SelectItem key={course.id} value={course.id}>
									{course.title}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Button
						size="sm"
						onClick={handleCompleteEnrolment}
						disabled={!courseId || isEnrolling}
						className="w-full"
					>
						{isEnrolling && <Loader2 className="mr-2 h-3 w-3 animate-spin" />}
						Complete enrolment
					</Button>
				</div>
			)}

			<Textarea
				value={notes}
				onChange={(e) => setNotes(e.target.value)}
				placeholder="Internal notes (follow-up, trial date…)"
				rows={2}
				className="text-sm"
				aria-label="Inquiry notes"
			/>
			<Button
				size="sm"
				variant="outline"
				onClick={handleNotesSave}
				disabled={!notesDirty || isNotesSaving}
				className="self-end"
			>
				{isNotesSaving ? (
					<>
						<Loader2 className="mr-2 h-3 w-3 animate-spin" />
						Saving…
					</>
				) : (
					"Save notes"
				)}
			</Button>
		</div>
	);
}
