"use client";

import { Loader2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function AddInquiryDialog() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");
	const [ageGroup, setAgeGroup] = useState("9-10");
	const [experience, setExperience] = useState("none");
	const [status, setStatus] = useState("new");

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitting(true);
		setError("");

		const form = event.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch("/api/admin/inquiries", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					parentName: formData.get("parentName"),
					parentEmail: formData.get("parentEmail"),
					parentPhone: formData.get("parentPhone"),
					childName: formData.get("childName"),
					ageGroup,
					experience,
					howHeard: formData.get("howHeard"),
					questions: formData.get("questions"),
					status,
					notes: formData.get("notes"),
				}),
			});
			const result = await response.json();
			if (!response.ok)
				throw new Error(result.error || "Could not add inquiry");

			form.reset();
			setAgeGroup("9-10");
			setExperience("none");
			setStatus("new");
			setOpen(false);
			toast.success(`Inquiry for ${result.inquiry.child_name} added`);
			router.refresh();
		} catch (submitError) {
			setError(
				submitError instanceof Error
					? submitError.message
					: "Could not add inquiry",
			);
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<Dialog
			open={open}
			onOpenChange={(nextOpen) => {
				setOpen(nextOpen);
				setError("");
			}}
		>
			<DialogTrigger asChild>
				<Button size="sm" className="gap-2">
					<Plus className="h-4 w-4" />
					Add inquiry
				</Button>
			</DialogTrigger>
			<DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
				<form onSubmit={handleSubmit} className="space-y-4">
					<DialogHeader>
						<DialogTitle>Add inquiry</DialogTitle>
						<DialogDescription>
							Record an inquiry received by phone, email, or in person.
						</DialogDescription>
					</DialogHeader>

					{error && (
						<Alert variant="destructive">
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}

					<div className="grid gap-4 sm:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="inquiry-parent-name">Parent name</Label>
							<Input
								id="inquiry-parent-name"
								name="parentName"
								minLength={2}
								maxLength={100}
								required
								disabled={submitting}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="inquiry-parent-email">Parent email</Label>
							<Input
								id="inquiry-parent-email"
								name="parentEmail"
								type="email"
								maxLength={320}
								required
								disabled={submitting}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="inquiry-parent-phone">Parent phone</Label>
							<Input
								id="inquiry-parent-phone"
								name="parentPhone"
								type="tel"
								maxLength={30}
								placeholder="Optional"
								disabled={submitting}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="inquiry-child-name">Child name</Label>
							<Input
								id="inquiry-child-name"
								name="childName"
								minLength={2}
								maxLength={100}
								required
								disabled={submitting}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="inquiry-age-group">Age group</Label>
							<Select
								value={ageGroup}
								onValueChange={setAgeGroup}
								disabled={submitting}
							>
								<SelectTrigger id="inquiry-age-group" className="w-full">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="9-10">Ages 9–10</SelectItem>
									<SelectItem value="11-13">Ages 11–13</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="inquiry-experience">Coding experience</Label>
							<Select
								value={experience}
								onValueChange={setExperience}
								disabled={submitting}
							>
								<SelectTrigger id="inquiry-experience" className="w-full">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="none">No experience</SelectItem>
									<SelectItem value="some">Some experience</SelectItem>
									<SelectItem value="comfortable">
										Comfortable with basics
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="inquiry-how-heard">How they heard about us</Label>
							<Input
								id="inquiry-how-heard"
								name="howHeard"
								maxLength={200}
								placeholder="Optional"
								disabled={submitting}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="inquiry-status">Status</Label>
							<Select
								value={status}
								onValueChange={setStatus}
								disabled={submitting}
							>
								<SelectTrigger id="inquiry-status" className="w-full">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="new">New</SelectItem>
									<SelectItem value="contacted">Contacted</SelectItem>
									<SelectItem value="trial_scheduled">
										Trial scheduled
									</SelectItem>
									<SelectItem value="declined">Declined</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="inquiry-questions">Questions</Label>
						<Textarea
							id="inquiry-questions"
							name="questions"
							maxLength={1000}
							rows={3}
							placeholder="Optional questions or concerns"
							disabled={submitting}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="inquiry-notes">Internal notes</Label>
						<Textarea
							id="inquiry-notes"
							name="notes"
							maxLength={5000}
							rows={3}
							placeholder="Optional follow-up notes"
							disabled={submitting}
						/>
					</div>

					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={() => setOpen(false)}
							disabled={submitting}
						>
							Cancel
						</Button>
						<Button type="submit" disabled={submitting}>
							{submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
							Save inquiry
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
