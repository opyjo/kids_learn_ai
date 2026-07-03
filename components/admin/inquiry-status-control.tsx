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
	{ value: "enrolled", label: "Enrolled" },
	{ value: "declined", label: "Declined" },
];

interface InquiryStatusControlProps {
	id: string;
	initialStatus: string;
	initialNotes: string | null;
}

export function InquiryStatusControl({
	id,
	initialStatus,
	initialNotes,
}: InquiryStatusControlProps) {
	const router = useRouter();
	const [status, setStatus] = useState(initialStatus || "new");
	const [notes, setNotes] = useState(initialNotes ?? "");
	const [savedNotes, setSavedNotes] = useState(initialNotes ?? "");
	const [isStatusSaving, setIsStatusSaving] = useState(false);
	const [isNotesSaving, setIsNotesSaving] = useState(false);

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

	return (
		<div className="flex flex-col gap-2 sm:w-64">
			<div className="flex items-center gap-2">
				<Select
					value={status}
					onValueChange={handleStatusChange}
					disabled={isStatusSaving}
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
