import { ArrowRight, Check, Clock3, ShieldCheck, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Free Trial Class — Kids Learn AI",
	description:
		"Book a free live Python and AI class for your child. No payment and no commitment required.",
};

const steps = [
	[
		"Tell us about your child",
		"Share their age, experience, and the best way to reach you.",
	],
	[
		"We confirm the class",
		"We contact you within 24 hours with the available group and time.",
	],
	[
		"Join the free lesson",
		"Your child takes part in a complete live class before you make a decision.",
	],
];

export default function InquiryPage() {
	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />
			<main>
				<section className="border-b border-border bg-card">
					<div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-20">
						<span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
							No payment required
						</span>
						<h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
							Try one real class. See if it clicks.
						</h1>
						<p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
							Your child joins a small live group, meets an instructor, and
							builds something with Python. You decide what happens next.
						</p>
						<Button asChild size="lg" className="mt-8 h-12 px-6 text-base">
							<Link href="/inquiry/book">
								Book the free class <ArrowRight />
							</Link>
						</Button>
						<div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
							<span className="flex items-center gap-2">
								<Users className="size-4 text-primary" />
								Small live groups
							</span>
							<span className="flex items-center gap-2">
								<Clock3 className="size-4 text-primary" />
								Reply within 24 hours
							</span>
							<span className="flex items-center gap-2">
								<ShieldCheck className="size-4 text-primary" />
								Safe and moderated
							</span>
						</div>
					</div>
				</section>

				<section className="py-14 sm:py-20">
					<div className="mx-auto max-w-5xl px-4 sm:px-6">
						<div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
									What happens next
								</p>
								<h2 className="mt-3 text-3xl font-semibold tracking-tight">
									A simple start for families
								</h2>
								<p className="mt-4 leading-7 text-muted-foreground">
									No complicated enrollment process and no pressure to purchase
									before your child has experienced the class.
								</p>
							</div>
							<ol className="divide-y divide-border border-y border-border">
								{steps.map(([title, copy], index) => (
									<li
										key={title}
										className="grid grid-cols-[36px_1fr] gap-4 py-5"
									>
										<span className="font-mono text-sm text-primary">
											0{index + 1}
										</span>
										<div>
											<h3 className="font-semibold">{title}</h3>
											<p className="mt-1 text-sm leading-6 text-muted-foreground">
												{copy}
											</p>
										</div>
									</li>
								))}
							</ol>
						</div>

						<div className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-8">
							<div className="grid gap-8 lg:grid-cols-2">
								<div>
									<h2 className="text-xl font-semibold">
										What your child will experience
									</h2>
									<ul className="mt-5 space-y-3">
										{[
											"A welcoming introduction to Python",
											"A guided hands-on coding activity",
											"Time to ask questions and share ideas",
											"A clear recommendation for the right learning level",
										].map((item) => (
											<li key={item} className="flex gap-3 text-sm">
												<span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
													<Check className="size-3.5" />
												</span>
												{item}
											</li>
										))}
									</ul>
								</div>
								<div className="rounded-xl bg-slate-950 p-6 text-white">
									<p className="text-sm text-slate-400">After the free class</p>
									<p className="mt-2 text-3xl font-semibold">
										$159.99{" "}
										<span className="text-sm font-normal text-slate-400">
											CAD
										</span>
									</p>
									<p className="mt-3 text-sm leading-6 text-slate-400">
										One payment for the complete 8–10 week program. Only if you
										choose to continue.
									</p>
									<Link
										href="/pricing"
										className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300"
									>
										See full pricing <ArrowRight className="size-4" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
