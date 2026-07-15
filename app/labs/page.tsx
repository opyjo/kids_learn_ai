import { ArrowRight, CheckCircle2, FlaskConical } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { requireAuth } from "@/lib/auth-helpers";
import { allLabs } from "@/lib/concept-labs/registry";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const metadata = {
	title: "AI Labs | KidsLearnAI",
	description:
		"Hands-on AI experiments — teach a real machine and see how it learns!",
};

/** Times this user has completed each lab, from persisted sessions. */
async function completionCounts(userId: string): Promise<Map<string, number>> {
	const counts = new Map<string, number>();
	try {
		const supabase = await getSupabaseServerClient();
		const { data } = await supabase
			.from("lab_sessions")
			.select("lab_id")
			.eq("user_id", userId)
			.eq("completed", true);
		for (const row of data ?? []) {
			counts.set(row.lab_id, (counts.get(row.lab_id) ?? 0) + 1);
		}
	} catch {
		// Progress badges are decoration — never block the gallery on them.
	}
	return counts;
}

export default async function LabsPage() {
	const user = await requireAuth();
	const labs = allLabs();
	const completed = await completionCounts(user.id);

	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />

			<div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
				<div className="text-center mb-8">
					<div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
						<FlaskConical className="h-4 w-4" />
						AI Labs
					</div>
					<h1 className="text-3xl font-semibold tracking-tight text-foreground">
						Teach a Real AI — Yourself!
					</h1>
					<p className="mt-2 text-muted-foreground max-w-xl mx-auto">
						These hands-on labs let you train a real machine-learning model with
						your own examples and discover how AI actually works.
					</p>
				</div>

				{labs.length === 0 ? (
					<div className="rounded-2xl border-2 border-dashed border-border p-10 text-center">
						<p className="text-3xl mb-2">🧪</p>
						<p className="font-semibold text-foreground">
							The lab benches are being set up!
						</p>
						<p className="mt-1 text-sm text-muted-foreground">
							New AI experiments will appear here soon — check back shortly.
						</p>
					</div>
				) : (
					<div className="grid gap-4 sm:grid-cols-2">
						{labs.map((lab) => {
							const timesCompleted = completed.get(lab.labId) ?? 0;
							return (
								<Link
									key={lab.labId}
									href={`/labs/${lab.labId}`}
									className="group"
								>
									<Card className="h-full border-2 transition-colors group-hover:border-primary/50">
										<CardContent className="p-5 space-y-3">
											<div className="flex items-center justify-between">
												<div
													className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl"
													aria-hidden="true"
												>
													{lab.icon}
												</div>
												<div className="flex items-center gap-1.5">
													{timesCompleted > 0 && (
														<Badge className="gap-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-200 text-xs">
															<CheckCircle2 className="h-3 w-3" />
															Completed
														</Badge>
													)}
													<Badge variant="secondary" className="text-xs">
														~{lab.estimatedMinutes} min
													</Badge>
												</div>
											</div>
											<div>
												<h2 className="font-bold text-foreground">
													{lab.title}
												</h2>
												<p className="mt-1 text-sm text-muted-foreground">
													{lab.concept}
												</p>
											</div>
											<div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
												{timesCompleted > 0
													? `Play again (done ${timesCompleted}×)`
													: "Start the lab"}
												<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
											</div>
										</CardContent>
									</Card>
								</Link>
							);
						})}
					</div>
				)}

				<p className="mt-8 text-center text-xs text-muted-foreground">
					More labs are on the way — new AI experiments land here as they're
					ready! 🚀
				</p>
			</div>
		</div>
	);
}
