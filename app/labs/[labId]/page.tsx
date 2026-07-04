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

export default async function StandaloneLabPage({ params }: LabPageProps) {
	const user = await requireAuth();
	const { labId } = await params;

	const definition = getLabById(labId);
	if (!definition) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
			<SiteHeader />

			<div className="container mx-auto px-4 py-6 max-w-2xl">
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
