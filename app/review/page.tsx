import { SpacedReviewHub } from "@/components/quizzes/spaced-review-hub";
import { requireAuth } from "@/lib/auth-helpers";

export default async function ReviewPage() {
	await requireAuth();
	return (
		<main className="mx-auto max-w-6xl px-4 py-8">
			<SpacedReviewHub />
		</main>
	);
}
