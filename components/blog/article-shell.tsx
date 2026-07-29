import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { MainLayout } from "@/components/layouts/main-layout";
import { ArticleByline, ArticleSeo } from "@/components/seo/article-seo";
import { Badge } from "@/components/ui/badge";

type ArticleShellProps = {
	category: string;
	slug: string;
	title: string;
	description: string;
	intro: string;
	datePublished: string;
	dateModified?: string;
	readingTime: string;
	takeaways: string[];
	children: ReactNode;
};

export function ArticleShell({
	category,
	slug,
	title,
	description,
	intro,
	datePublished,
	dateModified,
	readingTime,
	takeaways,
	children,
}: ArticleShellProps) {
	return (
		<MainLayout>
			<ArticleSeo
				slug={slug}
				title={title}
				description={description}
				datePublished={datePublished}
				dateModified={dateModified}
			/>
			<article>
				<header className="relative isolate overflow-hidden border-b border-border/70">
					<div
						className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,oklch(0.65_0.15_250/0.13),transparent_30%),radial-gradient(circle_at_85%_25%,oklch(0.75_0.13_70/0.12),transparent_32%)]"
						aria-hidden="true"
					/>
					<div className="container mx-auto max-w-5xl px-4 py-14 sm:py-20 lg:py-24">
						<Link
							href="/blog"
							className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to all articles
						</Link>

						<div className="max-w-4xl">
							<Badge className="mb-5 rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary">
								{category}
							</Badge>
							<h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
								{title}
							</h1>
							<p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
								{intro}
							</p>
							<div className="mt-8">
								<ArticleByline
									datePublished={datePublished}
									dateModified={dateModified}
									readingTime={readingTime}
								/>
							</div>
						</div>
					</div>
				</header>

				<div className="container mx-auto max-w-5xl px-4 py-14 sm:py-20">
					<aside
						className="mb-14 rounded-3xl border border-primary/15 bg-primary/5 p-6 sm:p-8"
						aria-labelledby="article-takeaways"
					>
						<div className="mb-5 flex items-center gap-3">
							<span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
								<Sparkles className="h-5 w-5" />
							</span>
							<h2
								id="article-takeaways"
								className="text-lg font-semibold tracking-tight"
							>
								What you’ll take away
							</h2>
						</div>
						<ul className="grid gap-4 md:grid-cols-3">
							{takeaways.map((takeaway) => (
								<li
									key={takeaway}
									className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
								>
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
									{takeaway}
								</li>
							))}
						</ul>
					</aside>

					<div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem]">
						<div className="space-y-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-tight [&_li]:leading-relaxed [&_p]:leading-8 [&_p]:text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:space-y-3">
							{children}
						</div>

						<aside className="hidden lg:block">
							<div className="sticky top-24 rounded-2xl border border-border/80 bg-card p-5">
								<p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
									A helpful way to read
								</p>
								<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
									Choose one idea to try this week. Small, repeatable habits
									build more confidence than doing everything at once.
								</p>
							</div>
						</aside>
					</div>

					<section className="mt-16 overflow-hidden rounded-3xl bg-foreground p-7 text-background sm:p-10">
						<div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
							<div className="max-w-2xl">
								<p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-background/70">
									Keep the curiosity going
								</p>
								<h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
									Learn by making something that matters to you.
								</h2>
								<p className="mt-3 leading-relaxed text-background/70">
									Explore friendly, hands-on lessons designed to help young
									learners build real Python and AI skills.
								</p>
							</div>
							<Link
								href="/signup"
								className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-4 focus-visible:ring-offset-foreground"
							>
								Start learning
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</section>
				</div>
			</article>
		</MainLayout>
	);
}
