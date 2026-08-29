"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { AddInquiryDialog } from "@/components/admin/add-inquiry-dialog";
import { InquiryStatusControl } from "@/components/admin/inquiry-status-control";
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

export interface Inquiry {
	id: string;
	parent_name: string;
	parent_email: string;
	parent_phone: string | null;
	child_name: string;
	age_group: string;
	experience: string;
	how_heard: string | null;
	questions: string | null;
	status: string;
	notes: string | null;
	created_at: string;
	updated_at: string;
	student_id: string | null;
	parent_profile_id: string | null;
	course_id: string | null;
	onboarded_at: string | null;
	utm_source: string | null;
	utm_medium: string | null;
	utm_campaign: string | null;
	utm_content: string | null;
	utm_term: string | null;
	landing_page: string | null;
	referrer: string | null;
	partner_code: string | null;
}

const STATUS_META: Record<
	string,
	{
		variant: "default" | "secondary" | "destructive" | "outline";
		label: string;
	}
> = {
	new: { variant: "default", label: "New" },
	contacted: { variant: "secondary", label: "Contacted" },
	trial_scheduled: { variant: "secondary", label: "Trial Scheduled" },
	account_created: { variant: "default", label: "Account Created" },
	enrolled: { variant: "default", label: "Enrolled" },
	declined: { variant: "destructive", label: "Declined" },
};

const getStatusMeta = (status: string) =>
	STATUS_META[status] || { variant: "secondary" as const, label: status };

const StatusBadge = ({ status }: { status: string }) => {
	const meta = getStatusMeta(status);
	return <Badge variant={meta.variant}>{meta.label}</Badge>;
};

const getExperienceLabel = (experience: string): string => {
	switch (experience) {
		case "none":
			return "None";
		case "some":
			return "Some";
		case "comfortable":
			return "Comfortable";
		default:
			return experience;
	}
};

const getReferrerLabel = (referrer: string) => {
	try {
		return new URL(referrer).hostname;
	} catch {
		return referrer;
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

type StatusFilter = "all" | "new" | "contacted" | "accounts" | "declined";

const matchesStatusFilter = (inquiry: Inquiry, filter: StatusFilter) => {
	const status = inquiry.status || "new";
	switch (filter) {
		case "all":
			return true;
		case "accounts":
			return status === "account_created" || status === "enrolled";
		default:
			return status === filter;
	}
};

interface InquiriesViewProps {
	inquiries: Inquiry[];
	totalCount: number;
	isTruncated: boolean;
}

export function InquiriesView({
	inquiries,
	totalCount,
	isTruncated,
}: InquiriesViewProps) {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const statusCounts = useMemo(
		() =>
			inquiries.reduce(
				(acc, inquiry) => {
					const s = inquiry.status || "new";
					acc[s] = (acc[s] || 0) + 1;
					return acc;
				},
				{} as Record<string, number>,
			),
		[inquiries],
	);

	const filteredInquiries = useMemo(() => {
		const q = search.trim().toLowerCase();
		return inquiries.filter((inquiry) => {
			if (!matchesStatusFilter(inquiry, statusFilter)) return false;
			if (!q) return true;
			return (
				inquiry.child_name.toLowerCase().includes(q) ||
				inquiry.parent_name.toLowerCase().includes(q) ||
				inquiry.parent_email.toLowerCase().includes(q) ||
				inquiry.age_group.toLowerCase().includes(q)
			);
		});
	}, [inquiries, search, statusFilter]);

	const selected = useMemo(
		() => inquiries.find((i) => i.id === selectedId) ?? null,
		[inquiries, selectedId],
	);

	const hasActiveFilters = search.trim() !== "" || statusFilter !== "all";

	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-xl font-semibold text-gray-900 dark:text-white">
						Course Inquiries
					</h1>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						View parent inquiries, campaign attribution, and follow-up status
					</p>
				</div>
				<AddInquiryDialog />
			</div>

			{/* Stats Grid — click a card to filter */}
			<div className="grid grid-cols-2 gap-3 md:grid-cols-5">
				<StatCard
					label="Total"
					value={inquiries.length}
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
					label="Contacted"
					value={statusCounts.contacted || 0}
					valueClassName="text-yellow-600 dark:text-yellow-400"
					active={statusFilter === "contacted"}
					onClick={() => setStatusFilter("contacted")}
				/>
				<StatCard
					label="Accounts Created"
					value={
						(statusCounts.account_created || 0) + (statusCounts.enrolled || 0)
					}
					valueClassName="text-green-600 dark:text-green-400"
					active={statusFilter === "accounts"}
					onClick={() => setStatusFilter("accounts")}
				/>
				<StatCard
					label="Declined"
					value={statusCounts.declined || 0}
					valueClassName="text-red-600 dark:text-red-400"
					active={statusFilter === "declined"}
					onClick={() => setStatusFilter("declined")}
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
								placeholder="Search child, parent, email…"
								className="h-9 pl-8"
							/>
						</div>
						<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
							<SlidersHorizontal className="h-3.5 w-3.5" />
							{isTruncated
								? `Showing ${inquiries.length} of ${totalCount}`
								: `${filteredInquiries.length} of ${inquiries.length} shown`}
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

					{inquiries.length === 0 ? (
						<div className="py-8 text-center text-gray-500 dark:text-gray-400">
							<p>No inquiries yet.</p>
							<p className="text-sm mt-2">
								Inquiries submitted through the website will appear here.
							</p>
						</div>
					) : filteredInquiries.length === 0 ? (
						<div className="py-8 text-center text-gray-500 dark:text-gray-400">
							<p>No inquiries match your filters.</p>
						</div>
					) : (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Child</TableHead>
									<TableHead>Parent</TableHead>
									<TableHead>Age Group</TableHead>
									<TableHead>Experience</TableHead>
									<TableHead>Source</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Submitted</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{filteredInquiries.map((inquiry) => (
									<TableRow
										key={inquiry.id}
										className="cursor-pointer"
										onClick={() => setSelectedId(inquiry.id)}
									>
										<TableCell className="whitespace-normal font-medium text-gray-900 dark:text-white">
											{inquiry.child_name}
										</TableCell>
										<TableCell className="whitespace-normal">
											<div>{inquiry.parent_name}</div>
											<div className="text-xs text-gray-500 dark:text-gray-400">
												{inquiry.parent_email}
											</div>
										</TableCell>
										<TableCell>{inquiry.age_group}</TableCell>
										<TableCell>
											{getExperienceLabel(inquiry.experience)}
										</TableCell>
										<TableCell className="text-xs text-gray-500 dark:text-gray-400">
											{inquiry.utm_source || "Direct"}
										</TableCell>
										<TableCell>
											<StatusBadge status={inquiry.status} />
										</TableCell>
										<TableCell className="text-gray-500 dark:text-gray-400">
											{formatDate(inquiry.created_at)}
										</TableCell>
									</TableRow>
								))}
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
									<SheetTitle>{selected.child_name}</SheetTitle>
									<StatusBadge status={selected.status} />
								</div>
								<SheetDescription>
									Parent:{" "}
									<a
										href={`mailto:${selected.parent_email}`}
										className="text-blue-600 hover:underline dark:text-blue-400"
									>
										{selected.parent_name}
									</a>
								</SheetDescription>
							</SheetHeader>

							<div className="flex-1 space-y-4 overflow-y-auto px-4 pb-4 text-sm">
								<dl className="grid grid-cols-2 gap-x-3 gap-y-2">
									<div>
										<dt className="text-xs text-gray-500 dark:text-gray-400">
											Parent email
										</dt>
										<dd>
											<a
												href={`mailto:${selected.parent_email}`}
												className="text-blue-600 hover:underline dark:text-blue-400"
											>
												{selected.parent_email}
											</a>
										</dd>
									</div>
									{selected.parent_phone && (
										<div>
											<dt className="text-xs text-gray-500 dark:text-gray-400">
												Parent phone
											</dt>
											<dd>
												<a
													href={`tel:${selected.parent_phone}`}
													className="text-blue-600 hover:underline dark:text-blue-400"
												>
													{selected.parent_phone}
												</a>
											</dd>
										</div>
									)}
									<div>
										<dt className="text-xs text-gray-500 dark:text-gray-400">
											Age group
										</dt>
										<dd className="text-gray-900 dark:text-white">
											{selected.age_group}
										</dd>
									</div>
									<div>
										<dt className="text-xs text-gray-500 dark:text-gray-400">
											Experience
										</dt>
										<dd className="text-gray-900 dark:text-white">
											{getExperienceLabel(selected.experience)}
										</dd>
									</div>
									{selected.how_heard && (
										<div className="col-span-2">
											<dt className="text-xs text-gray-500 dark:text-gray-400">
												Parent-reported source
											</dt>
											<dd className="text-gray-900 dark:text-white">
												{selected.how_heard}
											</dd>
										</div>
									)}
								</dl>

								<div className="rounded-md border border-gray-200 bg-gray-50 p-2 text-xs dark:border-gray-700 dark:bg-gray-800/50">
									<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
										<strong className="text-gray-700 dark:text-gray-200">
											Attribution
										</strong>
										<span>
											Source: {selected.utm_source || "Direct / untagged"}
										</span>
										{selected.utm_medium && (
											<span>Medium: {selected.utm_medium}</span>
										)}
										{selected.utm_campaign && (
											<span>Campaign: {selected.utm_campaign}</span>
										)}
										{selected.partner_code && (
											<span>Partner: {selected.partner_code}</span>
										)}
									</div>
									<div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-gray-500 dark:text-gray-400">
										<span>
											Landing: {selected.landing_page || "Legacy / unknown"}
										</span>
										{selected.referrer && (
											<span>
												Referrer: {getReferrerLabel(selected.referrer)}
											</span>
										)}
										{selected.utm_content && (
											<span>Content: {selected.utm_content}</span>
										)}
										{selected.utm_term && (
											<span>Term: {selected.utm_term}</span>
										)}
									</div>
								</div>

								{selected.questions && (
									<div className="border-t border-gray-200 pt-3 dark:border-gray-700">
										<p className="text-xs font-medium text-gray-500 dark:text-gray-400">
											Questions
										</p>
										<p className="mt-1 whitespace-pre-wrap text-gray-700 dark:text-gray-300">
											{selected.questions}
										</p>
									</div>
								)}

								<div className="border-t border-gray-200 pt-3 text-xs text-gray-400 dark:border-gray-700">
									Submitted {formatDateTime(selected.created_at)}
									{selected.updated_at !== selected.created_at && (
										<> · Updated {formatDateTime(selected.updated_at)}</>
									)}
								</div>

								<div className="border-t border-gray-200 pt-3 dark:border-gray-700">
									<InquiryStatusControl
										key={selected.id}
										id={selected.id}
										initialStatus={selected.status}
										initialNotes={selected.notes}
										studentId={selected.student_id}
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
