import { ArrowRight, BrainCircuit, FlaskConical } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { requireAuth } from "@/lib/auth-helpers";
import { allLabs } from "@/lib/concept-labs/registry";

export const metadata = {
	title: "AI Labs | KidsLearnAI",
	description:
		"Hands-on AI experiments — teach a real machine and see how it learns!",
};

export default async function LabsPage() {
	await requireAuth();
	const labs = allLabs();

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
			<SiteHeader />

			<div className="container mx-auto px-4 py-8 max-w-4xl">
				<div className="text-center mb-8">
					<div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
						<FlaskConical className="h-4 w-4" />
						AI Labs
					</div>
					<h1 className="text-3xl font-bold text-foreground">
						Teach a Real AI — Yourself!
					</h1>
					<p className="mt-2 text-muted-foreground max-w-xl mx-auto">
						These hands-on labs let you train a real machine-learning model with
						your own examples and discover how AI actually works.
					</p>
				</div>

				<div className="grid gap-4 sm:grid-cols-2">
					{labs.map((lab) => (
						<Link key={lab.labId} href={`/labs/${lab.labId}`} className="group">
							<Card className="h-full border-2 transition-colors group-hover:border-primary/50">
								<CardContent className="p-5 space-y-3">
									<div className="flex items-center justify-between">
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
											<BrainCircuit className="h-5 w-5 text-primary" />
										</div>
										<Badge variant="secondary" className="text-xs">
											~15 min
										</Badge>
									</div>
									<div>
										<h2 className="font-bold text-foreground">{lab.title}</h2>
										<p className="mt-1 text-sm text-muted-foreground">
											{lab.concept}
										</p>
									</div>
									<div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
										Start the lab
										<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
									</div>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>

				<p className="mt-8 text-center text-xs text-muted-foreground">
					More labs are on the way — new AI experiments land here as they're
					ready! 🚀
				</p>
			</div>
		</div>
	);
}
