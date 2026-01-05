import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const getStatusBadge = (status: string) => {
	const variants: Record<
		string,
		{ variant: "default" | "secondary" | "destructive"; label: string }
	> = {
		new: { variant: "default", label: "New" },
		contacted: { variant: "secondary", label: "Contacted" },
		trial_scheduled: { variant: "secondary", label: "Trial Scheduled" },
		enrolled: { variant: "default", label: "Enrolled" },
		declined: { variant: "destructive", label: "Declined" },
	};

	const config = variants[status] || {
		variant: "secondary" as const,
		label: status,
	};
	return <Badge variant={config.variant}>{config.label}</Badge>;
};

export default async function InquiriesPage() {
	const supabase = await getSupabaseServerClient();

	// Fetch all inquiries
	const { data: inquiriesData, error } = await supabase
		.from("inquiries")
		.select("*")
		.order("created_at", { ascending: false });

	if (error) {
		console.error("Error fetching inquiries:", error);
	}

	const inquiries = inquiriesData || [];

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
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
						Course Inquiries
					</h1>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						View and manage all parent inquiries for free trial classes
					</p>
				</div>
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-6">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Total
						</p>
						<p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
							{inquiries.length}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-6">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							New
						</p>
						<p className="mt-2 text-3xl font-semibold text-blue-600 dark:text-blue-400">
							{statusCounts.new || 0}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-6">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Contacted
						</p>
						<p className="mt-2 text-3xl font-semibold text-yellow-600 dark:text-yellow-400">
							{statusCounts.contacted || 0}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-6">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Enrolled
						</p>
						<p className="mt-2 text-3xl font-semibold text-green-600 dark:text-green-400">
							{statusCounts.enrolled || 0}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="p-6">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Declined
						</p>
						<p className="mt-2 text-3xl font-semibold text-red-600 dark:text-red-400">
							{statusCounts.declined || 0}
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Inquiries List */}
			<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
				<CardHeader className="pb-4">
					<CardTitle className="text-lg font-semibold">All Inquiries</CardTitle>
					<CardDescription>
						{inquiries.length} inquiry{inquiries.length !== 1 ? "ies" : ""}{" "}
						total
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-0">
					{inquiries.length === 0 ? (
						<div className="text-center py-12 text-gray-500 dark:text-gray-400">
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
									className="flex items-start justify-between py-4 first:pt-0 last:pb-0"
								>
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-2">
											<h4 className="text-sm font-medium text-gray-900 dark:text-white">
												{inquiry.child_first_name} {inquiry.child_last_name}
											</h4>
											{getStatusBadge(inquiry.status)}
										</div>
										<div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
											<div className="flex items-center gap-4">
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
											<div className="flex items-center gap-4">
												<span>
													<strong>Age Group:</strong> {inquiry.age_group}
												</span>
												<span>
													<strong>Experience:</strong>{" "}
													{inquiry.experience === "none"
														? "None"
														: inquiry.experience === "some"
															? "Some"
															: "Comfortable"}
												</span>
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
