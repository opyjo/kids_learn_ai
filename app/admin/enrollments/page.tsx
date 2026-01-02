import { EnrollmentsTab } from "@/components/admin/enrollments-tab";

export default function EnrollmentsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
					Student Enrollments
				</h1>
				<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
					Manage student access to courses and levels
				</p>
			</div>

			<EnrollmentsTab />
		</div>
	);
}
