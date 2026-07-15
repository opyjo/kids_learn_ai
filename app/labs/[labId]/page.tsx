import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConceptLabHost } from "@/components/concept-labs/concept-lab-host";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent } from "@/components/ui/card";
import { requireAuth } from "@/lib/auth-helpers";
import { getLabById } from "@/lib/concept-labs/registry";

interface LabPageProps {
	params: Promise<{ labId: string }>;
}

export async function generateMetadata({ params }: LabPageProps) {
	const { labId } = await params;
	const definition = getLabById(labId);
	if (!definition) return { title: "AI Labs — Kids Learn AI" };
	return {
		title: `${definition.title} — AI Labs — Kids Learn AI`,
		description: `${definition.concept}. A hands-on AI lab for kids (about ${definition.estimatedMinutes} minutes).`,
	};
}

export default async function StandaloneLabPage({ params }: LabPageProps) {
	const user = await requireAuth();
	const { labId } = await params;

	const definition = getLabById(labId);
	if (!definition) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />

			<div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
				<Link
					href="/labs"
					className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4"
				>
					<ArrowLeft className="h-4 w-4" />
					All AI Labs
				</Link>

				<Card className="border shadow-sm">
					<CardContent className="p-5">
						<ConceptLabHost
							definition={definition}
							userId={user.id}
							context="standalone"
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
