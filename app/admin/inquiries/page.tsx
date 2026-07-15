import { InquiryStatusControl } from "@/components/admin/inquiry-status-control";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth-helpers";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const getStatusBadge = (status: string) => {
	const variants: Record<
		string,
		{ variant: "default" | "secondary" | "destructive"; label: string }
	> = {
		new: { variant: "default", label: "New" },
		contacted: { variant: "secondary", label: "Contacted" },
		trial_scheduled: { variant: "secondary", label: "Trial Scheduled" },
		account_created: { variant: "default", label: "Account Created" },
		enrolled: { variant: "default", label: "Enrolled" },
		declined: { variant: "destructive", label: "Declined" },
	};

	const config = variants[status] || {
		variant: "secondary" as const,
		label: status,
	};
	return <Badge variant={config.variant}>{config.label}</Badge>;
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

interface Inquiry {
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
}

export default async function InquiriesPage() {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();

	// Fetch inquiries (most recent first). `count: exact` lets us detect when
	// more rows exist than were returned (Supabase caps a SELECT at 1000) so the
	// list can say so instead of silently truncating.
	const {
		data: inquiriesData,
		error,
		count,
	} = await supabase
		.from("inquiries")
		.select("*", { count: "exact" })
		.order("created_at", { ascending: false });

	if (error) {
		console.error("Error fetching inquiries:", error);
	}

	const inquiries: Inquiry[] = inquiriesData || [];
	const totalCount = count ?? inquiries.length;
	const isTruncated = totalCount > inquiries.length;

	// Count by status
	const statusCounts = inquiries.reduce(
		(acc, inquiry) => {
			const status = inquiry.status || "new";
			acc[status] = (acc[status] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>,
	);

	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-xl font-semibold text-gray-900 dark:text-white">
						Course Inquiries
					</h1>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						View and manage all parent inquiries for free trial classes
					</p>
				</div>
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-2 gap-3 md:grid-cols-5">
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="px-3 py-1">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Total
						</p>
						<p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
							{inquiries.length}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="px-3 py-1">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							New
						</p>
						<p className="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400">
							{statusCounts.new || 0}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="px-3 py-1">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Contacted
						</p>
						<p className="mt-1 text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
							{statusCounts.contacted || 0}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="px-3 py-1">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Accounts Created
						</p>
						<p className="mt-1 text-2xl font-semibold text-green-600 dark:text-green-400">
							{(statusCounts.account_created || 0) +
								(statusCounts.enrolled || 0)}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="px-3 py-1">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Declined
						</p>
						<p className="mt-1 text-2xl font-semibold text-red-600 dark:text-red-400">
							{statusCounts.declined || 0}
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Inquiries List */}
			<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
				<CardHeader className="px-3 py-3">
					<CardTitle className="text-lg font-semibold">All Inquiries</CardTitle>
					<CardDescription>
						{isTruncated
							? `Showing ${inquiries.length} of ${totalCount} inquiries`
							: `${inquiries.length} inquir${inquiries.length !== 1 ? "ies" : "y"} total`}
					</CardDescription>
				</CardHeader>
				<CardContent className="px-3 pb-3 pt-0">
					{inquiries.length === 0 ? (
						<div className="py-5 text-center text-gray-500 dark:text-gray-400">
							<p>No inquiries yet.</p>
							<p className="text-sm mt-2">
								Inquiries submitted through the website will appear here.
							</p>
						</div>
					) : (
						<div className="divide-y divide-gray-100 dark:divide-gray-800">
							{inquiries.map((inquiry) => (
								<div
									key={inquiry.id}
									className="flex items-start justify-between py-3 first:pt-0 last:pb-0"
								>
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-2">
											<h4 className="text-sm font-medium text-gray-900 dark:text-white">
												{inquiry.child_name}
											</h4>
											{getStatusBadge(inquiry.status)}
										</div>
										<div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
											<div className="flex items-center gap-3 flex-wrap">
												<span>
													<strong>Parent:</strong> {inquiry.parent_name}
												</span>
												<span>
													<strong>Email:</strong>{" "}
													<a
														href={`mailto:${inquiry.parent_email}`}
														className="text-blue-600 dark:text-blue-400 hover:underline"
													>
														{inquiry.parent_email}
													</a>
												</span>
												{inquiry.parent_phone && (
													<span>
														<strong>Phone:</strong>{" "}
														<a
															href={`tel:${inquiry.parent_phone}`}
															className="text-blue-600 dark:text-blue-400 hover:underline"
														>
															{inquiry.parent_phone}
														</a>
													</span>
												)}
											</div>
											<div className="flex items-center gap-3 flex-wrap">
												<span>
													<strong>Age Group:</strong> {inquiry.age_group}
												</span>
												<span>
													<strong>Experience:</strong>{" "}
													{getExperienceLabel(inquiry.experience)}
												</span>
												{inquiry.how_heard && (
													<span>
														<strong>Source:</strong> {inquiry.how_heard}
													</span>
												)}
												<span className="text-xs text-gray-400">
													Submitted{" "}
													{new Date(inquiry.created_at).toLocaleDateString(
														"en-CA",
													)}
												</span>
											</div>
											{inquiry.questions && (
												<div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
													<strong>Questions:</strong> {inquiry.questions}
												</div>
											)}
										</div>
										<div className="mt-3">
											<InquiryStatusControl
												id={inquiry.id}
												initialStatus={inquiry.status}
												initialNotes={inquiry.notes}
												studentId={inquiry.student_id}
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
