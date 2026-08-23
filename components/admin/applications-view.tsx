"use client";

import { ExternalLink, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ApplicationStatusControl } from "@/components/admin/application-status-control";
import { StatCard } from "@/components/admin/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export interface Application {
	id: string;
	full_name: string;
	email: string;
	university: string;
	program: string;
	year_of_study: string;
	python_experience: string;
	teaching_experience: string | null;
	why_interested: string;
	citizenship_status: string;
	is_at_least_18: boolean;
	can_commit_weekdays: boolean;
	linkedin_url: string | null;
	resume_filename: string | null;
	status: string;
	notes: string | null;
	created_at: string;
	updated_at: string;
}

const STATUS_META: Record<
	string,
	{
		variant: "default" | "secondary" | "destructive" | "outline";
		label: string;
	}
> = {
	new: { variant: "default", label: "New" },
	reviewing: { variant: "secondary", label: "Reviewing" },
	interviewed: { variant: "secondary", label: "Interviewed" },
	accepted: { variant: "default", label: "Accepted" },
	rejected: { variant: "destructive", label: "Rejected" },
};

const getStatusMeta = (status: string) =>
	STATUS_META[status] || { variant: "secondary" as const, label: status };

const StatusBadge = ({ status }: { status: string }) => {
	const meta = getStatusMeta(status);
	return <Badge variant={meta.variant}>{meta.label}</Badge>;
};

const getYearLabel = (year: string): string => {
	switch (year) {
		case "1":
			return "1st Year";
		case "2":
			return "2nd Year";
		case "3":
			return "3rd Year";
		case "4":
			return "4th Year";
		case "5+":
			return "5+ Year";
		case "graduate":
			return "Graduate";
		default:
			return year;
	}
};

const getExperienceLabel = (experience: string): string => {
	switch (experience) {
		case "beginner":
			return "Beginner";
		case "intermediate":
			return "Intermediate";
		case "advanced":
			return "Advanced";
		case "expert":
			return "Expert";
		default:
			return experience;
	}
};

const getCitizenshipLabel = (status: string): string => {
	switch (status) {
		case "citizen":
			return "Canadian citizen";
		case "permanent_resident":
			return "Permanent resident";
		case "protected_refugee":
			return "Protected refugee";
		case "none_of_above":
			return "Not VFC-eligible";
		default:
			return status;
	}
};

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString("en-CA", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

const formatDateTime = (iso: string) =>
	new Date(iso).toLocaleString("en-CA", {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit",
	});

interface ApplicationsViewProps {
	applications: Application[];
	totalCount: number;
	isTruncated: boolean;
}

export function ApplicationsView({
	applications,
	totalCount,
	isTruncated,
}: ApplicationsViewProps) {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState<string | "all">("all");
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const statusCounts = useMemo(
		() =>
			applications.reduce(
				(acc, app) => {
					const s = app.status || "new";
					acc[s] = (acc[s] || 0) + 1;
					return acc;
				},
				{} as Record<string, number>,
			),
		[applications],
	);

	const filteredApplications = useMemo(() => {
		const q = search.trim().toLowerCase();
		return applications.filter((app) => {
			if (statusFilter !== "all" && (app.status || "new") !== statusFilter) {
				return false;
			}
			if (!q) return true;
			return (
				app.full_name.toLowerCase().includes(q) ||
				app.email.toLowerCase().includes(q) ||
				app.university.toLowerCase().includes(q) ||
				app.program.toLowerCase().includes(q)
			);
		});
	}, [applications, search, statusFilter]);

	const selected = useMemo(
		() => applications.find((a) => a.id === selectedId) ?? null,
		[applications, selectedId],
	);

	const hasActiveFilters = search.trim() !== "" || statusFilter !== "all";

	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-xl font-semibold text-gray-900 dark:text-white">
						Internship Applications
					</h1>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						Review and track VFC Instructor Intern applications
					</p>
				</div>
			</div>

			{/* Stats Grid — click a card to filter */}
			<div className="grid grid-cols-2 gap-3 md:grid-cols-5">
				<StatCard
					label="Total"
					value={applications.length}
					active={statusFilter === "all"}
					onClick={() => setStatusFilter("all")}
				/>
				<StatCard
					label="New"
					value={statusCounts.new || 0}
					valueClassName="text-blue-600 dark:text-blue-400"
					active={statusFilter === "new"}
					onClick={() => setStatusFilter("new")}
				/>
				<StatCard
					label="Reviewing"
					value={statusCounts.reviewing || 0}
					valueClassName="text-yellow-600 dark:text-yellow-400"
					active={statusFilter === "reviewing"}
					onClick={() => setStatusFilter("reviewing")}
				/>
				<StatCard
					label="Accepted"
					value={statusCounts.accepted || 0}
					valueClassName="text-green-600 dark:text-green-400"
					active={statusFilter === "accepted"}
					onClick={() => setStatusFilter("accepted")}
				/>
				<StatCard
					label="Rejected"
					value={statusCounts.rejected || 0}
					valueClassName="text-red-600 dark:text-red-400"
					active={statusFilter === "rejected"}
					onClick={() => setStatusFilter("rejected")}
				/>
			</div>

			<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
				<CardContent className="p-3 space-y-3">
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<div className="relative w-full sm:max-w-xs">
							<Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
							<Input
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								placeholder="Search name, email, university…"
								className="h-9 pl-8"
							/>
						</div>
						<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
							<SlidersHorizontal className="h-3.5 w-3.5" />
							{isTruncated
								? `Showing ${applications.length} of ${totalCount}`
								: `${filteredApplications.length} of ${applications.length} shown`}
							{hasActiveFilters && (
								<Button
									variant="ghost"
									size="sm"
									className="h-7 gap-1 px-2 text-xs"
									onClick={() => {
										setSearch("");
										setStatusFilter("all");
									}}
								>
									<X className="h-3 w-3" />
									Clear
								</Button>
							)}
						</div>
					</div>

					{applications.length === 0 ? (
						<div className="py-8 text-center text-gray-500 dark:text-gray-400">
							<p>No applications yet.</p>
							<p className="text-sm mt-2">
								Applications submitted through the careers page will appear
								here.
							</p>
						</div>
					) : filteredApplications.length === 0 ? (
						<div className="py-8 text-center text-gray-500 dark:text-gray-400">
							<p>No applications match your filters.</p>
						</div>
					) : (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Applicant</TableHead>
									<TableHead>University</TableHead>
									<TableHead>Program / Year</TableHead>
									<TableHead>Python</TableHead>
									<TableHead>Eligibility</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Submitted</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{filteredApplications.map((app) => {
									const notEligible =
										app.citizenship_status === "none_of_above";
									return (
										<TableRow
											key={app.id}
											className="cursor-pointer"
											onClick={() => setSelectedId(app.id)}
										>
											<TableCell className="whitespace-normal">
												<div className="font-medium text-gray-900 dark:text-white">
													{app.full_name}
												</div>
												<div className="text-xs text-gray-500 dark:text-gray-400">
													{app.email}
												</div>
											</TableCell>
											<TableCell className="whitespace-normal max-w-[160px]">
												{app.university}
											</TableCell>
											<TableCell className="whitespace-normal max-w-[160px]">
												<div>{app.program}</div>
												<div className="text-xs text-gray-500 dark:text-gray-400">
													{getYearLabel(app.year_of_study)}
												</div>
											</TableCell>
											<TableCell>
												{getExperienceLabel(app.python_experience)}
											</TableCell>
											<TableCell>
												{notEligible ? (
													<Badge variant="destructive">Not eligible</Badge>
												) : (
													<span className="text-xs text-gray-500 dark:text-gray-400">
														{getCitizenshipLabel(app.citizenship_status)}
													</span>
												)}
											</TableCell>
											<TableCell>
												<StatusBadge status={app.status} />
											</TableCell>
											<TableCell className="text-gray-500 dark:text-gray-400">
												{formatDate(app.created_at)}
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					)}
				</CardContent>
			</Card>

			<Sheet
				open={selected !== null}
				onOpenChange={(open) => {
					if (!open) setSelectedId(null);
				}}
			>
				<SheetContent className="w-full overflow-y-auto sm:max-w-lg">
					{selected && (
						<>
							<SheetHeader>
								<div className="flex items-center gap-2">
									<SheetTitle>{selected.full_name}</SheetTitle>
									<StatusBadge status={selected.status} />
									{selected.citizenship_status === "none_of_above" && (
										<Badge variant="destructive">Not VFC-eligible</Badge>
									)}
								</div>
								<SheetDescription>
									<a
										href={`mailto:${selected.email}`}
										className="text-blue-600 hover:underline dark:text-blue-400"
									>
										{selected.email}
									</a>
								</SheetDescription>
							</SheetHeader>

							<div className="flex-1 space-y-4 overflow-y-auto px-4 pb-4 text-sm">
								<dl className="grid grid-cols-2 gap-x-3 gap-y-2">
									<div>
										<dt className="text-xs text-gray-500 dark:text-gray-400">
											University
										</dt>
										<dd className="text-gray-900 dark:text-white">
											{selected.university}
										</dd>
									</div>
									<div>
										<dt className="text-xs text-gray-500 dark:text-gray-400">
											Program
										</dt>
										<dd className="text-gray-900 dark:text-white">
											{selected.program}
										</dd>
									</div>
									<div>
										<dt className="text-xs text-gray-500 dark:text-gray-400">
											Year of study
										</dt>
										<dd className="text-gray-900 dark:text-white">
											{getYearLabel(selected.year_of_study)}
										</dd>
									</div>
									<div>
										<dt className="text-xs text-gray-500 dark:text-gray-400">
											Python experience
										</dt>
										<dd className="text-gray-900 dark:text-white">
											{getExperienceLabel(selected.python_experience)}
										</dd>
									</div>
									<div>
										<dt className="text-xs text-gray-500 dark:text-gray-400">
											Eligibility
										</dt>
										<dd className="text-gray-900 dark:text-white">
											{getCitizenshipLabel(selected.citizenship_status)}
										</dd>
									</div>
									<div>
										<dt className="text-xs text-gray-500 dark:text-gray-400">
											18+ / Weekdays
										</dt>
										<dd className="text-gray-900 dark:text-white">
											{selected.is_at_least_18 ? "Yes" : "No"} /{" "}
											{selected.can_commit_weekdays ? "Yes" : "No"}
										</dd>
									</div>
									{selected.linkedin_url && (
										<div className="col-span-2">
											<dt className="text-xs text-gray-500 dark:text-gray-400">
												LinkedIn
											</dt>
											<dd>
												<a
													href={selected.linkedin_url}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
												>
													View profile
													<ExternalLink className="h-3 w-3" />
												</a>
											</dd>
										</div>
									)}
								</dl>

								{selected.teaching_experience && (
									<div className="border-t border-gray-200 pt-3 dark:border-gray-700">
										<p className="text-xs font-medium text-gray-500 dark:text-gray-400">
											Teaching experience
										</p>
										<p className="mt-1 whitespace-pre-wrap text-gray-700 dark:text-gray-300">
											{selected.teaching_experience}
										</p>
									</div>
								)}

								<div className="border-t border-gray-200 pt-3 dark:border-gray-700">
									<p className="text-xs font-medium text-gray-500 dark:text-gray-400">
										Why interested
									</p>
									<p className="mt-1 whitespace-pre-wrap text-gray-700 dark:text-gray-300">
										{selected.why_interested}
									</p>
								</div>

								<div className="border-t border-gray-200 pt-3 text-xs text-gray-400 dark:border-gray-700">
									Submitted {formatDateTime(selected.created_at)}
									{selected.updated_at !== selected.created_at && (
										<> · Updated {formatDateTime(selected.updated_at)}</>
									)}
								</div>

								<div className="border-t border-gray-200 pt-3 dark:border-gray-700">
									<ApplicationStatusControl
										key={selected.id}
										id={selected.id}
										initialStatus={selected.status}
										initialNotes={selected.notes}
										hasResume={Boolean(selected.resume_filename)}
									/>
								</div>
							</div>
						</>
					)}
				</SheetContent>
			</Sheet>
		</div>
	);
}
