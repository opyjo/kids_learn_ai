import { ArrowRight, BookOpen, Clock3, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { currentStory } from "@/lib/story-club";

const StoryClubSpotlight = () => {
	if (!currentStory) return null;

	return (
		<section
			aria-labelledby="story-club-heading"
			className="container mx-auto px-4 py-12 sm:py-16"
		>
			<div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-indigo-200 bg-[#fff9ec] shadow-xl ring-1 ring-indigo-100 lg:grid-cols-[1.05fr_0.95fr] dark:border-indigo-900 dark:bg-slate-950 dark:ring-indigo-950">
				<div className="relative z-10 flex flex-col justify-center p-6 sm:p-10 lg:p-12">
					<div className="flex flex-wrap items-center gap-2">
						<Badge className="rounded-full bg-orange-500 text-white hover:bg-orange-500">
							<Sparkles className="h-3 w-3" aria-hidden="true" /> New this week
						</Badge>
						<span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
							AI Story Club · Issue{" "}
							{String(currentStory.issueNumber).padStart(2, "0")}
						</span>
					</div>

					<h2
						id="story-club-heading"
						className="mt-5 text-balance text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white"
					>
						A weekly AI mystery made for curious kids
					</h2>
					<p className="mt-3 text-lg font-bold text-indigo-800 dark:text-indigo-200">
						{currentStory.title}
					</p>
					<p className="mt-3 max-w-xl leading-relaxed text-slate-700 dark:text-slate-300">
						{currentStory.description}
					</p>

					<div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
						<span className="inline-flex items-center gap-1.5">
							<Clock3 className="h-4 w-4 text-orange-600" aria-hidden="true" />
							{currentStory.readingMinutes} minute read
						</span>
						<span className="inline-flex items-center gap-1.5">
							<BookOpen
								className="h-4 w-4 text-indigo-600"
								aria-hidden="true"
							/>
							Story, choices and challenge
						</span>
					</div>

					<div className="mt-7 flex flex-col gap-3 sm:flex-row">
						<Button
							asChild
							size="lg"
							className="rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700"
						>
							<Link href={`/stories/${currentStory.slug}`}>
								Read this week&apos;s story
								<ArrowRight className="h-4 w-4" aria-hidden="true" />
							</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="rounded-full bg-white/70 dark:bg-slate-950/70"
						>
							<Link href="/stories">Explore Story Club</Link>
						</Button>
					</div>
				</div>

				<Link
					href={`/stories/${currentStory.slug}`}
					className="group relative min-h-72 overflow-hidden bg-slate-900 sm:min-h-96 lg:min-h-full"
					aria-label={`Read ${currentStory.title}`}
				>
					<Image
						src={currentStory.coverImage}
						alt={currentStory.coverAlt}
						fill
						sizes="(max-width: 1024px) 100vw, 45vw"
						className="object-cover transition duration-500 group-hover:scale-[1.03]"
					/>
					<div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
				</Link>
			</div>
		</section>
	);
};

export default StoryClubSpotlight;
