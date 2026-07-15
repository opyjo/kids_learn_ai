import { SchedulesTab } from "@/components/admin/schedules-tab";
import { requireAdmin } from "@/lib/auth-helpers";

export default async function SchedulesPage() {
	await requireAdmin();

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
					Class Schedules
				</h1>
				<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
					Manage weekly live-class times and meeting links per course
				</p>
			</div>

			<SchedulesTab />
		</div>
	);
}
