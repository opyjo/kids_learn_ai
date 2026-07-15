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

interface InquiryStatusControlProps {
	id: string;
	initialStatus: string;
	initialNotes: string | null;
	studentId: string | null;
}

export function InquiryStatusControl({
	id,
	initialStatus,
	initialNotes,
	studentId,
}: InquiryStatusControlProps) {
	const router = useRouter();
	const [status, setStatus] = useState(initialStatus || "new");
	const [notes, setNotes] = useState(initialNotes ?? "");
	const [savedNotes, setSavedNotes] = useState(initialNotes ?? "");
	const [isStatusSaving, setIsStatusSaving] = useState(false);
	const [isNotesSaving, setIsNotesSaving] = useState(false);
	const [isApproving, setIsApproving] = useState(false);
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

	const handleCreateAccounts = async () => {
		setIsApproving(true);
		try {
			const res = await fetch("/api/admin/inquiries/approve", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ inquiryId: id }),
			});
			const data = await res.json().catch(() => null);
			if (!res.ok) throw new Error(data?.error || "Account creation failed");

			toast.success(
				data.invitationSent
					? `Parent invited; ${data.username} was created for the student`
					: `Student ${data.username || "account"} linked to the parent`,
			);
			setStatus(data.status || "account_created");
			setLinkedStudentId(data.studentId);
			router.refresh();
		} catch (err) {
			toast.error(
				err instanceof Error ? err.message : "Account creation failed",
			);
		} finally {
			setIsApproving(false);
		}
	};
	const hasFamilyAccounts =
		(status === "account_created" || status === "enrolled") &&
		Boolean(linkedStudentId);

	return (
		<div className="flex flex-col gap-3 sm:w-72">
			{(status === "account_created" || status === "enrolled") && (
				<div
					className={
						hasFamilyAccounts
							? "rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800 dark:border-green-900 dark:bg-green-950/30 dark:text-green-300"
							: "rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300"
					}
				>
					{hasFamilyAccounts
						? status === "enrolled"
							? "Legacy enrollment preserved; family accounts are linked"
							: "Family accounts created; assign course access in Admin → Enrollments"
						: "Marked complete, but no student account is linked yet"}
				</div>
			)}
			<div className="flex items-center gap-2">
				<Select
					value={
						status === "enrolled" || status === "account_created" ? "" : status
					}
					onValueChange={handleStatusChange}
					disabled={
						isStatusSaving ||
						status === "enrolled" ||
						status === "account_created"
					}
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

			{!hasFamilyAccounts && (
				<div className="space-y-2 rounded-md border p-3">
					<p className="text-sm font-medium">Create family accounts</p>
					<p className="text-xs text-muted-foreground">
						Invites the parent when needed and creates a linked child account.
						Course access is assigned separately in Admin → Enrollments.
					</p>
					<Button
						size="sm"
						onClick={handleCreateAccounts}
						disabled={isApproving}
						className="w-full"
					>
						{isApproving && <Loader2 className="mr-2 h-3 w-3 animate-spin" />}
						Create family accounts
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
