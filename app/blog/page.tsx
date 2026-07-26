import {
	ArrowRight,
	BookOpen,
	BrainCircuit,
	Code2,
	Compass,
	HeartHandshake,
	Lightbulb,
	ShieldCheck,
	Sparkles,
	UsersRound,
	WandSparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/main-layout";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "./blog-posts";
import { posts } from "./blog-posts";

export const metadata: Metadata = {
	title: "Blog | Practical AI & Python Guides for Young Learners",
	description:
		"Clear, practical ideas for raising thoughtful AI creators—from first Python projects and online safety to inclusive classrooms.",
	openGraph: {
		title: "Kids Learn AI Blog",
		description:
			"Practical ideas for helping young people learn Python, understand AI, and create technology responsibly.",
		type: "website",
	},
};

const icons = {
	brain: BrainCircuit,
	code: Code2,
	compass: Compass,
	family: HeartHandshake,
	future: WandSparkles,
	lightbulb: Lightbulb,
	shield: ShieldCheck,
	sparkles: Sparkles,
	users: UsersRound,
};

const tones = {
	blue: "from-blue-500/20 via-sky-400/10 to-cyan-300/20 text-blue-700 dark:text-blue-300",
	coral:
		"from-orange-500/20 via-rose-400/10 to-amber-300/20 text-orange-700 dark:text-orange-300",
	green:
		"from-emerald-500/20 via-teal-400/10 to-lime-300/20 text-emerald-700 dark:text-emerald-300",
	indigo:
		"from-indigo-500/20 via-blue-400/10 to-violet-300/20 text-indigo-700 dark:text-indigo-300",
	purple:
		"from-violet-500/20 via-fuchsia-400/10 to-pink-300/20 text-violet-700 dark:text-violet-300",
	yellow:
		"from-amber-400/25 via-yellow-300/10 to-orange-300/20 text-amber-800 dark:text-amber-300",
};

function ArticleArtwork({
	post,
	featured = false,
}: {
	post: BlogPost;
	featured?: boolean;
}) {
	const Icon = icons[post.visual];

	return (
		<div
			className={`relative isolate overflow-hidden bg-gradient-to-br ${tones[post.tone]} ${
				featured ? "min-h-72 lg:min-h-full" : "h-44"
			}`}
			aria-hidden="true"
		>
			<div className="absolute -right-10 -top-12 h-36 w-36 rounded-full border border-current/10 bg-white/25 dark:bg-white/5" />
			<div className="absolute -bottom-14 -left-8 h-40 w-40 rounded-full border border-current/10 bg-white/20 dark:bg-white/5" />
			<div className="absolute left-7 top-7 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-background/60">
				<Icon className="h-5 w-5" strokeWidth={1.8} />
			</div>
			<span className="absolute bottom-6 left-7 font-mono text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
				Kids Learn AI
			</span>
		</div>
	);
}

export default function BlogPage() {
	const featuredPost = posts.find((post) => post.featured) ?? posts[0];
	const morePosts = posts.filter((post) => post.slug !== featuredPost.slug);

	return (
		<MainLayout>
			<section className="relative isolate overflow-hidden border-b border-border/70">
				<div
					className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,oklch(0.65_0.15_250/0.12),transparent_32%),radial-gradient(circle_at_85%_10%,oklch(0.72_0.13_65/0.13),transparent_28%)]"
					aria-hidden="true"
				/>
				<div className="container mx-auto grid gap-10 px-4 py-20 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:py-28">
					<div className="max-w-3xl">
						<Badge className="mb-6 rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary">
							Ideas for curious minds
						</Badge>
						<h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							Helping kids understand AI, one bright idea at a time.
						</h1>
						<p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
							Practical guides, thoughtful perspectives, and hands-on projects
							for families and educators raising the next generation of
							responsible technology creators.
						</p>
					</div>

					<div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border/80 bg-card/75 shadow-sm backdrop-blur">
						<div className="px-4 py-5 text-center">
							<p className="font-mono text-2xl font-semibold text-foreground">
								{posts.length}
							</p>
							<p className="mt-1 text-xs text-muted-foreground">Articles</p>
						</div>
						<div className="px-4 py-5 text-center">
							<p className="font-mono text-2xl font-semibold text-foreground">
								8–16
							</p>
							<p className="mt-1 text-xs text-muted-foreground">Ages</p>
						</div>
						<div className="px-4 py-5 text-center">
							<BookOpen className="mx-auto h-6 w-6 text-primary" />
							<p className="mt-1 text-xs text-muted-foreground">Practical</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16 lg:py-24">
				<div className="mb-8 flex items-end justify-between gap-6">
					<div>
						<p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
							Editor’s pick
						</p>
						<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
							Start with something you can build
						</h2>
					</div>
				</div>

				<Link
					href={`/blog/${featuredPost.slug}`}
					className="group grid overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 lg:grid-cols-[0.9fr_1.1fr]"
				>
					<ArticleArtwork post={featuredPost} featured />
					<div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
						<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
							<Badge
								variant="outline"
								className="rounded-full border-primary/20 bg-primary/5 text-primary"
							>
								{featuredPost.category}
							</Badge>
							<span>{featuredPost.date}</span>
							<span aria-hidden="true">·</span>
							<span>{featuredPost.readingTime}</span>
						</div>
						<h3 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary sm:text-4xl">
							{featuredPost.title}
						</h3>
						<p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
							{featuredPost.description}
						</p>
						<span className="mt-8 inline-flex items-center gap-2 font-medium text-primary">
							Read article
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</span>
					</div>
				</Link>

				<div className="mb-8 mt-20">
					<p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
						The library
					</p>
					<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
						<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
							More ideas to explore
						</h2>
						<p className="max-w-md text-sm leading-relaxed text-muted-foreground">
							Short enough for a coffee break, useful enough to try today.
						</p>
					</div>
				</div>

				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{morePosts.map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="group flex min-h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
						>
							<ArticleArtwork post={post} />
							<div className="flex flex-1 flex-col p-6">
								<div className="flex items-center justify-between gap-3">
									<Badge
										variant="outline"
										className="rounded-full border-border bg-muted/60 text-xs font-medium text-foreground"
									>
										{post.category}
									</Badge>
									<span className="text-xs text-muted-foreground">
										{post.readingTime}
									</span>
								</div>
								<h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
									{post.title}
								</h3>
								<p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
									{post.description}
								</p>
								<div className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm">
									<span className="text-muted-foreground">{post.date}</span>
									<ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</MainLayout>
	);
}
