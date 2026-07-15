"use client";

import {
	CalendarClock,
	CheckCircle,
	Link2,
	Loader2,
	Pencil,
	Plus,
	RefreshCw,
	Trash2,
	Video,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { formatScheduleLine } from "@/lib/schedule-utils";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

interface Course {
	id: string;
	title: string;
	order_index: number;
}

interface ClassSchedule {
	id: string;
	course_id: string;
	label: string | null;
	day_of_week: number;
	start_time: string;
	duration_minutes: number;
	timezone: string;
	meeting_link: string | null;
	meeting_notes: string | null;
	is_active: boolean;
}

const DAY_OPTIONS = [
	{ value: "0", label: "Sunday" },
	{ value: "1", label: "Monday" },
	{ value: "2", label: "Tuesday" },
	{ value: "3", label: "Wednesday" },
	{ value: "4", label: "Thursday" },
	{ value: "5", label: "Friday" },
	{ value: "6", label: "Saturday" },
];

interface ScheduleFormState {
	course_id: string;
	label: string;
	day_of_week: string;
	start_time: string;
	duration_minutes: string;
	timezone: string;
	meeting_link: string;
	meeting_notes: string;
	is_active: boolean;
}

const emptyForm: ScheduleFormState = {
	course_id: "",
	label: "",
	day_of_week: "1",
	start_time: "17:00",
	duration_minutes: "60",
	timezone: "America/Toronto",
	meeting_link: "",
	meeting_notes: "",
	is_active: true,
};

export const SchedulesTab = () => {
	const [schedules, setSchedules] = useState<ClassSchedule[]>([]);
	const [courses, setCourses] = useState<Course[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [editingId, setEditingId] = useState<string | null>(null);
	const [form, setForm] = useState<ScheduleFormState>(emptyForm);
	const [isSaving, setIsSaving] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const supabase = getSupabaseBrowserClient();

			const [schedulesRes, coursesRes] = await Promise.all([
				supabase
					.from("class_schedules")
					.select(
						"id, course_id, label, day_of_week, start_time, duration_minutes, timezone, meeting_link, meeting_notes, is_active",
					)
					.order("day_of_week")
					.order("start_time"),
				supabase
					.from("courses")
					.select("id, title, order_index")
					.order("order_index"),
			]);

			if (schedulesRes.error) throw schedulesRes.error;
			if (coursesRes.error) throw coursesRes.error;

			setSchedules(schedulesRes.data || []);
			setCourses(coursesRes.data || []);
		} catch (error) {
			console.error("Error fetching schedules:", error);
			toast.error("Failed to load schedules");
		} finally {
			setIsLoading(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: fetchData is intentionally called once on mount
	useEffect(() => {
		fetchData();
	}, []);

	const openCreateDialog = () => {
		setEditingId(null);
		setForm({ ...emptyForm, course_id: courses[0]?.id ?? "" });
		setIsDialogOpen(true);
	};

	const openEditDialog = (schedule: ClassSchedule) => {
		setEditingId(schedule.id);
		setForm({
			course_id: schedule.course_id,
			label: schedule.label ?? "",
			day_of_week: String(schedule.day_of_week),
			// TIME columns come back as HH:MM:SS; <input type="time"> wants HH:MM
			start_time: schedule.start_time.slice(0, 5),
			duration_minutes: String(schedule.duration_minutes),
			timezone: schedule.timezone,
			meeting_link: schedule.meeting_link ?? "",
			meeting_notes: schedule.meeting_notes ?? "",
			is_active: schedule.is_active,
		});
		setIsDialogOpen(true);
	};

	const handleSave = async () => {
		if (!form.course_id || !form.start_time) {
			toast.error("Course and start time are required");
			return;
		}

		setIsSaving(true);
		try {
			const supabase = getSupabaseBrowserClient();
			const payload = {
				course_id: form.course_id,
				label: form.label.trim() || null,
				day_of_week: Number(form.day_of_week),
				start_time: form.start_time,
				duration_minutes: Number(form.duration_minutes) || 60,
				timezone: form.timezone.trim() || "America/Toronto",
				meeting_link: form.meeting_link.trim() || null,
				meeting_notes: form.meeting_notes.trim() || null,
				is_active: form.is_active,
				updated_at: new Date().toISOString(),
			};

			const { error } = editingId
				? await supabase
						.from("class_schedules")
						.update(payload)
						.eq("id", editingId)
				: await supabase.from("class_schedules").insert(payload);

			if (error) throw error;

			toast.success(editingId ? "Schedule updated" : "Schedule created");
			setIsDialogOpen(false);
			await fetchData();
		} catch (error) {
			console.error("Error saving schedule:", error);
			toast.error("Failed to save schedule");
		} finally {
			setIsSaving(false);
		}
	};

	const handleDelete = async (id: string) => {
		try {
			const supabase = getSupabaseBrowserClient();
			const { error } = await supabase
				.from("class_schedules")
				.delete()
				.eq("id", id);
			if (error) throw error;
			toast.success("Schedule deleted");
			await fetchData();
		} catch (error) {
			console.error("Error deleting schedule:", error);
			toast.error("Failed to delete schedule");
		}
	};

	const courseTitle = (courseId: string) =>
		courses.find((c) => c.id === courseId)?.title ?? "Unknown course";

	// formatScheduleLine throws on an invalid IANA timezone. Since the timezone
	// is a free-text admin field, guard so one bad row can't crash the whole
	// page (which would also block editing/deleting that row to fix it).
	const safeScheduleLine = (schedule: ClassSchedule) => {
		try {
			return formatScheduleLine(schedule);
		} catch {
			return `Day ${schedule.day_of_week} · ${schedule.start_time} · ${schedule.timezone} (check timezone)`;
		}
	};

	// Group schedules by course, in course order
	const courseIdsWithSchedules = courses
		.filter((c) => schedules.some((s) => s.course_id === c.id))
		.map((c) => c.id);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center py-12">
				<Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-semibold">Weekly class slots</h2>
				<div className="flex gap-2">
					<Button variant="outline" onClick={fetchData} className="gap-2">
						<RefreshCw className="h-4 w-4" aria-hidden="true" />
						Refresh
					</Button>
					<Button onClick={openCreateDialog} className="gap-2">
						<Plus className="h-4 w-4" aria-hidden="true" />
						Add Schedule
					</Button>
				</div>
			</div>

			{schedules.length === 0 ? (
				<Card>
					<CardContent className="py-12 text-center text-muted-foreground">
						<CalendarClock
							className="h-12 w-12 mx-auto mb-3 opacity-50"
							aria-hidden="true"
						/>
						<p className="mb-4">No class schedules yet</p>
						<Button onClick={openCreateDialog} className="gap-2">
							<Plus className="h-4 w-4" aria-hidden="true" />
							Add your first schedule
						</Button>
					</CardContent>
				</Card>
			) : (
				courseIdsWithSchedules.map((courseId) => (
					<Card key={courseId}>
						<CardHeader>
							<CardTitle className="text-lg">{courseTitle(courseId)}</CardTitle>
							<CardDescription>
								{schedules.filter((s) => s.course_id === courseId).length}{" "}
								weekly slot(s)
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-3">
							{schedules
								.filter((s) => s.course_id === courseId)
								.map((schedule) => (
									<div
										key={schedule.id}
										className="flex flex-wrap items-center justify-between gap-3 p-4 border rounded-lg"
									>
										<div className="min-w-0">
											<div className="flex items-center gap-2 flex-wrap">
												<p className="font-medium">
													{safeScheduleLine(schedule)}
												</p>
												{schedule.label && (
													<Badge variant="secondary">{schedule.label}</Badge>
												)}
												{!schedule.is_active && (
													<Badge variant="outline">Inactive</Badge>
												)}
											</div>
											<div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
												<span>{schedule.duration_minutes} min</span>
												<span>{schedule.timezone}</span>
												{schedule.meeting_link ? (
													<span className="flex items-center gap-1">
														<Video className="h-3 w-3" aria-hidden="true" />
														Zoom link set
													</span>
												) : (
													<span className="flex items-center gap-1 text-orange-500">
														<Link2 className="h-3 w-3" aria-hidden="true" />
														No meeting link
													</span>
												)}
											</div>
										</div>
										<div className="flex gap-2">
											<Button
												variant="outline"
												size="sm"
												onClick={() => openEditDialog(schedule)}
												className="gap-1"
											>
												<Pencil className="h-3.5 w-3.5" aria-hidden="true" />
												Edit
											</Button>
											<Button
												variant="outline"
												size="sm"
												onClick={() => handleDelete(schedule.id)}
												className="gap-1 text-red-500 hover:text-red-700"
											>
												<Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
												Delete
											</Button>
										</div>
									</div>
								))}
						</CardContent>
					</Card>
				))
			)}

			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>
							{editingId ? "Edit Schedule" : "New Schedule"}
						</DialogTitle>
						<DialogDescription>
							A weekly recurring live-class slot for one course
						</DialogDescription>
					</DialogHeader>

					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="schedule-course">Course</Label>
							<Select
								value={form.course_id}
								onValueChange={(value) =>
									setForm((f) => ({ ...f, course_id: value }))
								}
							>
								<SelectTrigger id="schedule-course">
									<SelectValue placeholder="Select a course" />
								</SelectTrigger>
								<SelectContent>
									{courses.map((course) => (
										<SelectItem key={course.id} value={course.id}>
											{course.title}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-2">
							<Label htmlFor="schedule-label">Cohort label (optional)</Label>
							<Input
								id="schedule-label"
								placeholder="e.g., Ages 9-10 Cohort"
								value={form.label}
								onChange={(e) =>
									setForm((f) => ({ ...f, label: e.target.value }))
								}
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="schedule-day">Day</Label>
								<Select
									value={form.day_of_week}
									onValueChange={(value) =>
										setForm((f) => ({ ...f, day_of_week: value }))
									}
								>
									<SelectTrigger id="schedule-day">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										{DAY_OPTIONS.map((day) => (
											<SelectItem key={day.value} value={day.value}>
												{day.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label htmlFor="schedule-time">Start time</Label>
								<Input
									id="schedule-time"
									type="time"
									value={form.start_time}
									onChange={(e) =>
										setForm((f) => ({ ...f, start_time: e.target.value }))
									}
								/>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="schedule-duration">Duration (minutes)</Label>
								<Input
									id="schedule-duration"
									type="number"
									min="15"
									step="15"
									value={form.duration_minutes}
									onChange={(e) =>
										setForm((f) => ({ ...f, duration_minutes: e.target.value }))
									}
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="schedule-timezone">Timezone (IANA)</Label>
								<Input
									id="schedule-timezone"
									placeholder="America/Toronto"
									value={form.timezone}
									onChange={(e) =>
										setForm((f) => ({ ...f, timezone: e.target.value }))
									}
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="schedule-link">Meeting link (Zoom)</Label>
							<Input
								id="schedule-link"
								type="url"
								placeholder="https://zoom.us/j/..."
								value={form.meeting_link}
								onChange={(e) =>
									setForm((f) => ({ ...f, meeting_link: e.target.value }))
								}
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="schedule-notes">Meeting notes (optional)</Label>
							<Textarea
								id="schedule-notes"
								placeholder="e.g., Passcode 1234 — please join 5 minutes early"
								value={form.meeting_notes}
								onChange={(e) =>
									setForm((f) => ({ ...f, meeting_notes: e.target.value }))
								}
								rows={2}
							/>
						</div>

						<div className="flex items-center justify-between rounded-lg border p-3">
							<div>
								<Label htmlFor="schedule-active">Active</Label>
								<p className="text-xs text-muted-foreground">
									Inactive schedules are hidden from students
								</p>
							</div>
							<Switch
								id="schedule-active"
								checked={form.is_active}
								onCheckedChange={(checked) =>
									setForm((f) => ({ ...f, is_active: checked }))
								}
							/>
						</div>
					</div>

					<DialogFooter>
						<Button variant="outline" onClick={() => setIsDialogOpen(false)}>
							Cancel
						</Button>
						<Button onClick={handleSave} disabled={isSaving}>
							{isSaving ? (
								<>
									<Loader2
										className="h-4 w-4 mr-2 animate-spin"
										aria-hidden="true"
									/>
									Saving...
								</>
							) : (
								<>
									<CheckCircle className="h-4 w-4 mr-2" aria-hidden="true" />
									Save Schedule
								</>
							)}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};
