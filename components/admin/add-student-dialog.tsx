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

export function AddStudentDialog() {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitting(true);
		setError("");

		const form = event.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch("/api/admin/students", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					fullName: formData.get("fullName"),
					username: formData.get("username"),
					password: formData.get("password"),
				}),
			});
			const result = await response.json();
			if (!response.ok)
				throw new Error(result.error || "Could not add student");

			form.reset();
			setOpen(false);
			toast.success(
				`${result.student.full_name} can now sign in as ${result.student.username}`,
			);
			router.refresh();
		} catch (submitError) {
			setError(
				submitError instanceof Error
					? submitError.message
					: "Could not add student",
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
					Add student
				</Button>
			</DialogTrigger>
			<DialogContent>
				<form onSubmit={handleSubmit} className="space-y-4">
					<DialogHeader>
						<DialogTitle>Add student</DialogTitle>
						<DialogDescription>
							Create a student login now. Course access can be assigned from
							Enrollments afterward.
						</DialogDescription>
					</DialogHeader>

					{error && (
						<Alert variant="destructive">
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}

					<div className="space-y-2">
						<Label htmlFor="student-full-name">Student name</Label>
						<Input
							id="student-full-name"
							name="fullName"
							placeholder="Student's full name"
							minLength={2}
							maxLength={100}
							required
							disabled={submitting}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="student-username">Username</Label>
						<Input
							id="student-username"
							name="username"
							placeholder="e.g. ada-codes"
							pattern="[a-z0-9][a-z0-9_-]{2,29}"
							minLength={3}
							maxLength={30}
							autoCapitalize="none"
							autoCorrect="off"
							required
							disabled={submitting}
						/>
						<p className="text-xs text-muted-foreground">
							3–30 lowercase letters, numbers, hyphens, or underscores.
						</p>
					</div>

					<div className="space-y-2">
						<Label htmlFor="student-password">Temporary password</Label>
						<Input
							id="student-password"
							name="password"
							type="password"
							minLength={8}
							maxLength={128}
							autoComplete="new-password"
							required
							disabled={submitting}
						/>
						<p className="text-xs text-muted-foreground">
							Share it securely with the student; it is not shown again.
						</p>
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
							Create student
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
