import { ArrowUpRight, BookOpenCheck } from "lucide-react";
import Link from "next/link";
import type { ExpandedArticle } from "@/lib/blog/expanded-articles";

export function ExpandedArticleContent({
	article,
}: {
	article: ExpandedArticle;
}) {
	return (
		<>
			{article.sections.map((section) => (
				<section key={section.title} className="space-y-4">
					<h2>{section.title}</h2>
					{section.paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
					{section.bullets ? (
						<ul className="list-disc pl-6 text-muted-foreground">
							{section.bullets.map((bullet) => (
								<li key={bullet}>{bullet}</li>
							))}
						</ul>
					) : null}
					{section.callout ? (
						<aside className="rounded-2xl border border-primary/15 bg-primary/5 p-5">
							<p className="text-sm font-medium text-foreground">
								{section.callout}
							</p>
						</aside>
					) : null}
				</section>
			))}

			<section className="space-y-4">
				<h2>Keep exploring</h2>
				<ul className="grid gap-3 sm:grid-cols-2">
					{article.relatedLinks.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className="flex h-full items-center justify-between gap-3 rounded-2xl border border-border/80 bg-card p-4 font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
							>
								{link.label}
								<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
							</Link>
						</li>
					))}
				</ul>
			</section>

			<section
				className="space-y-4 rounded-2xl border border-border/80 bg-muted/35 p-6"
				aria-labelledby="article-sources"
			>
				<div className="flex items-center gap-3">
					<BookOpenCheck className="h-5 w-5 text-primary" aria-hidden="true" />
					<h2 id="article-sources">Sources and further reading</h2>
				</div>
				<ul className="space-y-3">
					{article.sources.map((source) => (
						<li key={source.href}>
							<a
								href={source.href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-start gap-2 font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
							>
								{source.label}
								<ArrowUpRight
									className="mt-1 h-3.5 w-3.5 shrink-0"
									aria-hidden="true"
								/>
							</a>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
