"use client";

import {
	ArrowRight,
	BookOpen,
	Check,
	Code2,
	MessageCircle,
	ShieldCheck,
	Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { PaymentInstructions } from "./payment-instructions";

const included = [
	{ icon: BookOpen, text: "8–10 weekly live classes" },
	{ icon: Users, text: "Small groups and real-time guidance" },
	{ icon: Code2, text: "Hands-on Python and AI projects" },
	{ icon: MessageCircle, text: "Feedback between classes" },
	{ icon: ShieldCheck, text: "Responsible AI learning" },
	{ icon: Check, text: "Certificate of completion" },
];

const questions = [
	[
		"How does the free trial work?",
		"Your child joins one complete live class at no cost. You only pay if you decide the program is a good fit.",
	],
	[
		"What equipment is needed?",
		"A Windows, Mac, or Chromebook computer with internet, a webcam, and a microphone. The learning software is free.",
	],
	[
		"What if my child misses a class?",
		"We provide the lesson materials and help your child catch up during the following session.",
	],
];

export function PricingContent() {
	const [userEmail, setUserEmail] = useState("");

	useEffect(() => {
		const loadUser = async () => {
			const supabase = getSupabaseBrowserClient();
			const { data } = await supabase.auth.getUser();
			setUserEmail(data.user?.email ?? "");
		};
		void loadUser();
	}, []);

	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />
			<main>
				<section className="border-b border-border bg-card">
					<div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
						<p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
							Simple, one-time pricing
						</p>
						<h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
							Try a real class before you pay.
						</h1>
						<p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
							Start with one complete live class for free. Continue only if your
							child enjoys the learning experience.
						</p>
					</div>
				</section>

				<section className="py-14 sm:py-20">
					<div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_0.7fr] lg:px-8">
						<div className="rounded-2xl border border-primary/25 bg-card p-6 shadow-sm sm:p-8">
							<div className="flex flex-col justify-between gap-5 border-b border-border pb-7 sm:flex-row sm:items-start">
								<div>
									<span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
										First class free
									</span>
									<h2 className="mt-4 text-2xl font-semibold">
										Complete live program
									</h2>
									<p className="mt-1 text-sm text-muted-foreground">
										For beginners ages 9–13
									</p>
								</div>
								<div className="sm:text-right">
									<div className="flex items-baseline gap-2 sm:justify-end">
										<span className="text-4xl font-semibold tracking-tight">
											$159.99
										</span>
										<span className="text-sm text-muted-foreground">CAD</span>
									</div>
									<p className="mt-1 text-xs text-muted-foreground">
										One payment · 8–10 weeks
									</p>
								</div>
							</div>
							<div className="grid gap-4 py-7 sm:grid-cols-2">
								{included.map((item) => {
									const Icon = item.icon;
									return (
										<div
											key={item.text}
											className="flex items-center gap-3 text-sm"
										>
											<span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
												<Icon className="size-4" />
											</span>
											{item.text}
										</div>
									);
								})}
							</div>
							<div className="flex flex-col gap-3 border-t border-border pt-7 sm:flex-row">
								<Button asChild size="lg" className="h-12 flex-1 text-base">
									<Link href="/inquiry/book">
										Book a free trial <ArrowRight />
									</Link>
								</Button>
								<Button
									variant="outline"
									size="lg"
									className="h-12 flex-1"
									onClick={() =>
										document
											.getElementById("payment-instructions")
											?.scrollIntoView({ behavior: "smooth" })
									}
								>
									Continue after your trial
								</Button>
							</div>
						</div>

						<aside className="rounded-2xl border border-border bg-slate-950 p-6 text-white sm:p-8">
							<h2 className="text-xl font-semibold">Weekly class groups</h2>
							<p className="mt-2 text-sm leading-6 text-slate-400">
								Choose the age group that best matches your child. We confirm
								the exact time after your inquiry.
							</p>
							<div className="mt-7 divide-y divide-slate-800 border-y border-slate-800">
								<div className="flex items-center justify-between py-5">
									<div>
										<p className="font-medium">Ages 9–10</p>
										<p className="mt-1 text-sm text-slate-400">
											Beginner group
										</p>
									</div>
									<span className="text-sm font-semibold text-blue-300">
										Mondays
									</span>
								</div>
								<div className="flex items-center justify-between py-5">
									<div>
										<p className="font-medium">Ages 11–13</p>
										<p className="mt-1 text-sm text-slate-400">
											Beginner group
										</p>
									</div>
									<span className="text-sm font-semibold text-blue-300">
										Wednesdays
									</span>
								</div>
							</div>
							<p className="mt-6 text-xs leading-5 text-slate-500">
								No experience is required. A computer, webcam, microphone, and
								internet connection are all your child needs.
							</p>
						</aside>
					</div>
				</section>

				<section className="border-y border-border bg-card py-14 sm:py-16">
					<div className="mx-auto max-w-4xl px-4 sm:px-6">
						<h2 className="text-2xl font-semibold tracking-tight">
							Questions before booking
						</h2>
						<div className="mt-7 divide-y divide-border border-y border-border">
							{questions.map(([question, answer]) => (
								<div
									key={question}
									className="grid gap-2 py-5 sm:grid-cols-[220px_1fr] sm:gap-8"
								>
									<h3 className="text-sm font-semibold">{question}</h3>
									<p className="text-sm leading-6 text-muted-foreground">
										{answer}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
					<PaymentInstructions userEmail={userEmail} />
				</div>
			</main>
			<Footer />
		</div>
	);
}
