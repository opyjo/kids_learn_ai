import { ConceptLabsReport } from "@/components/admin/concept-labs-report";
import { requireAdmin } from "@/lib/auth-helpers";

export default async function ConceptLabsPage() {
	await requireAdmin();

	return (
		<div className="space-y-4">
			<div>
				<h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
					Concept Labs
				</h1>
				<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
					Learning-gain report for the interactive AI-concept labs (Predict →
					Play → Explain → Apply)
				</p>
			</div>

			<ConceptLabsReport />
		</div>
	);
}
