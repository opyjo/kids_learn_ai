import { GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

type Term = { label: string; href: string };

const YEAR_1_TERMS: Term[] = [
	{ label: "Hello Python!", href: "/lessons/term-1-hello-python" },
	{ label: "Math Wizard", href: "/lessons/term-2-math-wizard" },
	{ label: "Decision Maker", href: "/lessons/term-3-decision-maker" },
	{ label: "More Choices", href: "/lessons/term-4-more-choices" },
	{ label: "AI Sneak Peek", href: "/lessons/term-5-ai-sneak-peek" },
	{ label: "Loop Magic", href: "/lessons/term-6-loop-magic" },
	{ label: "Game Builder", href: "/lessons/term-7-game-builder" },
	{ label: "AI Explorer", href: "/lessons/term-8-ai-explorer" },
];

const YEAR_2_TERMS: Term[] = [
	{
		label: "Python Accelerated",
		href: "/lessons/year2-term-1-python-accelerated",
	},
	{ label: "Loops & Logic", href: "/lessons/year2-term-2-loops-mastery" },
	{ label: "Functions", href: "/lessons/year2-term-3-functions" },
	{ label: "Data Structures", href: "/lessons/year2-term-4-data-structures" },
	{ label: "AI Deep Dive", href: "/lessons/year2-term-5-ai-deep-dive" },
	{ label: "Working with APIs", href: "/lessons/year2-term-6-apis" },
	{
		label: "Data & Visualization",
		href: "/lessons/year2-term-7-data-visualization",
	},
	{ label: "Capstone", href: "/lessons/year2-term-8-capstone" },
];

const TermStrip = ({
	terms,
	yearLabel,
	yearClassName,
	highlightFirst,
	highlightLast,
}: {
	terms: Term[];
	yearLabel: string;
	yearClassName: string;
	highlightFirst?: boolean;
	highlightLast?: boolean;
}) => {
	return (
		<FadeIn className="relative">
			<Badge
				className={cn(
					"mb-4 rounded-full px-4 py-1.5 text-sm font-semibold",
					yearClassName,
				)}
			>
				{yearLabel}
			</Badge>
			<div className="relative">
				<div className="overflow-x-auto pb-4 [scrollbar-width:thin]">
					<div className="flex items-center min-w-max snap-x px-1 pt-4">
						{terms.map((term, index) => {
							const isFirst = index === 0;
							const isLast = index === terms.length - 1;
							const highlighted =
								(isFirst && highlightFirst) || (isLast && highlightLast);
							return (
								<div key={term.href} className="flex items-center snap-start">
									{index > 0 && (
										<div
											className="w-6 sm:w-10 border-t-2 border-dashed border-border shrink-0"
											aria-hidden="true"
										/>
									)}
									<Link
										href={term.href}
										className={cn(
											"relative flex items-center gap-1.5 rounded-full border bg-card px-4 py-2 text-sm font-medium whitespace-nowrap transition hover:border-primary/40 hover:text-primary hover:shadow-md",
											highlighted
												? "border-primary/50 bg-primary/5"
												: "border-border",
										)}
									>
										<span className="absolute -top-4 left-4 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
											Term {index + 1}
										</span>
										{isFirst && highlightFirst && (
											<Sparkles
												className="h-3.5 w-3.5 text-primary"
												aria-hidden="true"
											/>
										)}
										{isLast && highlightLast && (
											<GraduationCap
												className="h-3.5 w-3.5 text-primary"
												aria-hidden="true"
											/>
										)}
										{term.label}
									</Link>
								</div>
							);
						})}
					</div>
				</div>
				<div
					className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background"
					aria-hidden="true"
				/>
			</div>
		</FadeIn>
	);
};

const CurriculumPathSection = () => {
	return (
		<section className="container mx-auto px-4 py-20 lg:py-28">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
						The Journey
					</Badge>
					<h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
						A Two-Year Path from First Line to Capstone
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
						8 focused terms per year — from{" "}
						<code className="font-mono text-base text-accent">
							print("hello")
						</code>{" "}
						to training real AI models.
					</p>
				</div>

				<div className="space-y-12">
					<TermStrip
						terms={YEAR_1_TERMS}
						yearLabel="Year 1 · Foundations to AI & Games"
						yearClassName="bg-primary/10 text-primary border-primary/20"
						highlightFirst
					/>
					<TermStrip
						terms={YEAR_2_TERMS}
						yearLabel="Year 2 · Python Mastery to AI & Data"
						yearClassName="bg-secondary/20 text-foreground border-secondary/40"
						highlightLast
					/>
				</div>

				<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
					<p className="text-sm text-muted-foreground">
						New students start with a free trial in Term 1.
					</p>
					<Button asChild variant="outline" className="rounded-full">
						<Link href="/inquiry">Book a Free Trial Class</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default CurriculumPathSection;
