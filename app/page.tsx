import {
	ArrowRight,
	BrainCircuit,
	Check,
	Code2,
	ShieldCheck,
	Sparkles,
	Trophy,
	Users,
	Video,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Live Python & AI Classes for Kids — Kids Learn AI",
	description:
		"Live online Python and AI classes for kids ages 9–13. Learn in small groups, build real projects, and start with a free trial class.",
	openGraph: {
		title: "Live Python & AI Classes for Kids — Kids Learn AI",
		description:
			"Small-group live classes where kids learn Python, understand AI, and build projects they are proud to share.",
		type: "website",
	},
};

const outcomes = [
	{
		icon: Video,
		title: "Real teaching, live",
		copy: "Expert instructors notice when a student is stuck, answer questions in the moment, and keep every child involved.",
	},
	{
		icon: Code2,
		title: "Projects over worksheets",
		copy: "Students learn Python by building games, useful tools, and creative AI projects they can explain and improve.",
	},
	{
		icon: ShieldCheck,
		title: "AI taught responsibly",
		copy: "Kids learn what AI can do, where it can go wrong, and how to use it thoughtfully—not simply how to prompt it.",
	},
];

const learningPath = [
	{
		number: "01",
		title: "Build Python foundations",
		copy: "Variables, decisions, loops, functions, and problem-solving through guided projects.",
	},
	{
		number: "02",
		title: "Understand how AI works",
		copy: "Explore data, patterns, predictions, bias, and responsible use through age-appropriate labs.",
	},
	{
		number: "03",
		title: "Create independent projects",
		copy: "Combine coding and AI concepts into games, tools, stories, and a portfolio of finished work.",
	},
];

const testimonials = [
	{
		quote:
			"My son went from never touching code to writing his own little Python games—and explaining them to us at dinner.",
		name: "Amara O.",
		detail: "Parent of a 10-year-old · Toronto",
	},
	{
		quote:
			"The instructor knows my daughter by name, notices when she is stuck, and the weekly feedback keeps her motivated.",
		name: "Daniel K.",
		detail: "Parent of a 12-year-old · Mississauga",
	},
	{
		quote:
			"We expected videos and worksheets. Instead, it was a real live lesson and my child was coding within the first 20 minutes.",
		name: "Priya S.",
		detail: "Parent of an 11-year-old · Ottawa",
	},
];

export default function HomePage() {
	return (
		<MainLayout>
			<section className="relative overflow-hidden border-b border-border/70 bg-background">
				<div className="absolute inset-x-0 top-0 -z-0 h-96 bg-[radial-gradient(circle_at_75%_15%,color-mix(in_oklab,var(--primary)_13%,transparent),transparent_50%)]" />
				<div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
					<div className="max-w-2xl">
						<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary">
							<Sparkles className="size-4" aria-hidden="true" />
							Live online classes for ages 9–13
						</div>
						<h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
							Kids learn to code. Then they learn how AI really works.
						</h1>
						<p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
							Small-group classes that turn curiosity into real Python skills,
							thoughtful AI understanding, and projects kids are proud to share.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
							<Button asChild size="lg" className="h-12 px-6 text-base">
								<Link href="/inquiry">
									Book a free trial
									<ArrowRight aria-hidden="true" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="h-12 bg-background px-6 text-base"
							>
								<Link href="/lessons">Explore the curriculum</Link>
							</Button>
						</div>
						<ul className="mt-7 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-5">
							{[
								"First class is free",
								"No experience needed",
								"Small live groups",
							].map((item) => (
								<li key={item} className="flex items-center gap-2">
									<span className="flex size-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
										<Check className="size-3.5" aria-hidden="true" />
									</span>
									{item}
								</li>
							))}
						</ul>
					</div>

					<div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
						<div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_24px_70px_-36px_rgba(15,23,42,0.5)]">
							<Image
								src="/images/student-coding.png"
								alt="A student learning to code during an online class"
								fill
								priority
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
							<div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/20 bg-slate-950/65 p-4 text-white backdrop-blur-md sm:inset-x-6 sm:bottom-6">
								<div className="flex items-center gap-3">
									<div className="flex size-10 items-center justify-center rounded-lg bg-white/15">
										<Users className="size-5" aria-hidden="true" />
									</div>
									<div>
										<p className="font-medium">Learn together, live</p>
										<p className="text-sm text-white/70">
											Questions answered in the moment
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className="border-b border-border bg-card"
				aria-label="Program highlights"
			>
				<div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-4 sm:px-6 md:grid-cols-4 lg:px-8">
					{[
						["Live", "expert-led classes"],
						["300+", "learners in our community"],
						["500+", "student projects built"],
						["2 years", "of guided curriculum"],
					].map(([value, label]) => (
						<div key={label} className="px-4 py-5 first:pl-0 md:px-6">
							<p className="text-xl font-semibold tracking-tight text-foreground">
								{value}
							</p>
							<p className="mt-0.5 text-xs leading-5 text-muted-foreground sm:text-sm">
								{label}
							</p>
						</div>
					))}
				</div>
			</section>

			<section
				id="how-it-works"
				className="scroll-mt-20 bg-background py-16 sm:py-20 lg:py-24"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
							Why families choose us
						</p>
						<h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
							A learning experience built around understanding
						</h2>
						<p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
							Kids need more than another app. They need thoughtful guidance,
							practice, feedback, and room to create.
						</p>
					</div>
					<div className="mt-10 grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-3 md:divide-x md:divide-border">
						{outcomes.map((outcome) => {
							const Icon = outcome.icon;
							return (
								<article
									key={outcome.title}
									className="border-b border-border p-6 last:border-b-0 md:border-b-0 lg:p-8"
								>
									<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
										<Icon className="size-5" aria-hidden="true" />
									</div>
									<h3 className="mt-5 text-lg font-semibold">
										{outcome.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-muted-foreground">
										{outcome.copy}
									</p>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section
				id="projects"
				className="scroll-mt-20 border-y border-border bg-card py-16 sm:py-20 lg:py-24"
			>
				<div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
					<div>
						<div className="inline-flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
							<BrainCircuit className="size-6" aria-hidden="true" />
						</div>
						<h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
							From first line of code to confident creator
						</h2>
						<p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
							Our curriculum grows with the learner. Every stage connects new
							ideas to practical projects and a clear next step.
						</p>
						<Button asChild variant="outline" className="mt-7">
							<Link href="/lessons">
								View the learning journey
								<ArrowRight aria-hidden="true" />
							</Link>
						</Button>
					</div>
					<ol className="overflow-hidden rounded-xl border border-border bg-background">
						{learningPath.map((step) => (
							<li
								key={step.number}
								className="grid grid-cols-[52px_1fr] gap-4 border-b border-border p-5 last:border-b-0 sm:grid-cols-[64px_1fr] sm:p-6"
							>
								<span className="font-mono text-sm font-medium text-primary">
									{step.number}
								</span>
								<div>
									<h3 className="font-semibold">{step.title}</h3>
									<p className="mt-1 text-sm leading-6 text-muted-foreground">
										{step.copy}
									</p>
								</div>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className="bg-background py-16 sm:py-20 lg:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
								Parent feedback
							</p>
							<h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
								Confidence families can see
							</h2>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Trophy className="size-4 text-amber-500" aria-hidden="true" />
							Real feedback from families in our classes
						</div>
					</div>
					<div className="mt-9 grid gap-4 md:grid-cols-3">
						{testimonials.map((testimonial) => (
							<figure
								key={testimonial.name}
								className="flex h-full flex-col rounded-xl border border-border bg-card p-6"
							>
								<blockquote className="flex-1 text-base leading-7 text-foreground">
									“{testimonial.quote}”
								</blockquote>
								<figcaption className="mt-6 border-t border-border pt-4">
									<p className="text-sm font-semibold">{testimonial.name}</p>
									<p className="mt-0.5 text-xs text-muted-foreground">
										{testimonial.detail}
									</p>
								</figcaption>
							</figure>
						))}
					</div>
				</div>
			</section>

			<section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
				<div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-slate-950 text-white lg:grid-cols-[1fr_0.72fr]">
					<div className="p-8 sm:p-10 lg:p-14">
						<p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
							Start with a free class
						</p>
						<h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
							See how your child learns when the class is truly live.
						</h2>
						<p className="mt-4 max-w-xl leading-7 text-slate-300">
							Meet an instructor, try a real coding activity, and decide whether
							the program feels right—without any commitment.
						</p>
						<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
							<Button
								asChild
								size="lg"
								className="h-12 bg-white px-6 text-base text-slate-950 hover:bg-slate-100"
							>
								<Link href="/inquiry">
									Book a free trial
									<ArrowRight aria-hidden="true" />
								</Link>
							</Button>
							<Link
								href="/faq"
								className="px-2 text-sm font-medium text-slate-300 hover:text-white"
							>
								Read common questions
							</Link>
						</div>
					</div>
					<div className="relative min-h-72 lg:min-h-full">
						<Image
							src="/images/student-portrait.png"
							alt="A confident student learning coding"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 to-transparent lg:bg-gradient-to-r" />
					</div>
				</div>
			</section>
		</MainLayout>
	);
}
