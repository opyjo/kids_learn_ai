import { ApplicationStatusControl } from "@/components/admin/application-status-control";
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
		reviewing: { variant: "secondary", label: "Reviewing" },
		interviewed: { variant: "secondary", label: "Interviewed" },
		accepted: { variant: "default", label: "Accepted" },
		rejected: { variant: "destructive", label: "Rejected" },
	};

	const config = variants[status] || {
		variant: "secondary" as const,
		label: status,
	};
	return <Badge variant={config.variant}>{config.label}</Badge>;
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

interface Application {
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

export default async function ApplicationsPage() {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();

	const {
		data: applicationsData,
		error,
		count,
	} = await supabase
		.from("internship_applications")
		.select(
			"id, full_name, email, university, program, year_of_study, python_experience, teaching_experience, why_interested, citizenship_status, is_at_least_18, can_commit_weekdays, linkedin_url, resume_filename, status, notes, created_at, updated_at",
			{ count: "exact" },
		)
		.order("created_at", { ascending: false });

	if (error) {
		console.error("Error fetching applications:", error);
	}

	const applications: Application[] = applicationsData || [];
	const totalCount = count ?? applications.length;
	const isTruncated = totalCount > applications.length;

	const statusCounts = applications.reduce(
		(acc, app) => {
			const s = app.status || "new";
			acc[s] = (acc[s] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>,
	);

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

			{/* Stats Grid */}
			<div className="grid grid-cols-2 gap-3 md:grid-cols-5">
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="px-3 py-1">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Total
						</p>
						<p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
							{applications.length}
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
							Reviewing
						</p>
						<p className="mt-1 text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
							{statusCounts.reviewing || 0}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="px-3 py-1">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Accepted
						</p>
						<p className="mt-1 text-2xl font-semibold text-green-600 dark:text-green-400">
							{statusCounts.accepted || 0}
						</p>
					</CardContent>
				</Card>
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardContent className="px-3 py-1">
						<p className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Rejected
						</p>
						<p className="mt-1 text-2xl font-semibold text-red-600 dark:text-red-400">
							{statusCounts.rejected || 0}
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Applications List */}
			<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
				<CardHeader className="px-3 py-3">
					<CardTitle className="text-lg font-semibold">
						All Applications
					</CardTitle>
					<CardDescription>
						{isTruncated
							? `Showing ${applications.length} of ${totalCount} applications`
							: `${applications.length} application${applications.length !== 1 ? "s" : ""} total`}
					</CardDescription>
				</CardHeader>
				<CardContent className="px-3 pb-3 pt-0">
					{applications.length === 0 ? (
						<div className="py-5 text-center text-gray-500 dark:text-gray-400">
							<p>No applications yet.</p>
							<p className="text-sm mt-2">
								Applications submitted through the careers page will appear
								here.
							</p>
						</div>
					) : (
						<div className="divide-y divide-gray-100 dark:divide-gray-800">
							{applications.map((app) => (
								<div
									key={app.id}
									className="flex items-start justify-between py-3 first:pt-0 last:pb-0"
								>
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-2">
											<h4 className="text-sm font-medium text-gray-900 dark:text-white">
												{app.full_name}
											</h4>
											{getStatusBadge(app.status)}
											{app.citizenship_status === "none_of_above" && (
												<Badge variant="destructive">Not VFC-eligible</Badge>
											)}
										</div>
										<div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
											<div className="flex items-center gap-3 flex-wrap">
												<span>
													<strong>Email:</strong>{" "}
													<a
														href={`mailto:${app.email}`}
														className="text-blue-600 dark:text-blue-400 hover:underline"
													>
														{app.email}
													</a>
												</span>
												{app.linkedin_url && (
													<span>
														<strong>LinkedIn:</strong>{" "}
														<a
															href={app.linkedin_url}
															target="_blank"
															rel="noopener noreferrer"
															className="text-blue-600 dark:text-blue-400 hover:underline"
														>
															Profile
														</a>
													</span>
												)}
											</div>
											<div className="flex items-center gap-3 flex-wrap">
												<span>
													<strong>University:</strong> {app.university}
												</span>
												<span>
													<strong>Program:</strong> {app.program}
												</span>
												<span>
													<strong>Year:</strong>{" "}
													{getYearLabel(app.year_of_study)}
												</span>
											</div>
											<div className="flex items-center gap-3 flex-wrap">
												<span>
													<strong>Python:</strong>{" "}
													{getExperienceLabel(app.python_experience)}
												</span>
												<span>
													<strong>Eligibility:</strong>{" "}
													{getCitizenshipLabel(app.citizenship_status)}
												</span>
												<span className="text-xs text-gray-400">
													Submitted{" "}
													{new Date(app.created_at).toLocaleDateString(
														"en-CA",
													)}
												</span>
											</div>
											{app.teaching_experience && (
												<div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
													<strong>Teaching experience:</strong>{" "}
													{app.teaching_experience}
												</div>
											)}
											<div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
												<strong>Why interested:</strong> {app.why_interested}
											</div>
										</div>
										<div className="mt-3">
											<ApplicationStatusControl
												id={app.id}
												initialStatus={app.status}
												initialNotes={app.notes}
												hasResume={Boolean(app.resume_filename)}
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
