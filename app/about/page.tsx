import {
	Compass,
	ExternalLink,
	GraduationCap,
	Heart,
	Rocket,
	ShieldCheck,
	Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/main-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { FALL_2026_OFFER } from "@/lib/marketing/cohort-offer";
import { PARENT_FACING_PROMISE } from "@/lib/marketing/positioning";
import { absoluteUrl, publicMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = publicMetadata({
	title: "About Us — Kids Learn AI",
	description: PARENT_FACING_PROMISE,
	path: "/about",
});

const pillars = [
	{
		title: "Mission",
		icon: Heart,
		description:
			"Move kids from consumers of AI to creators with it—starting with Python fundamentals and honest conversations about how these systems actually work.",
	},
	{
		title: "Vision",
		icon: Compass,
		description:
			"Young people who meet new technology by asking how it works and who it serves, not just being impressed by it.",
	},
	{
		title: "Promise",
		icon: ShieldCheck,
		description: `No more than ${FALL_2026_OFFER.maximumStudents} students per class. A live instructor every single session. And a project your child can show you at the end of every term.`,
	},
];

const impactHighlights = [
	{
		stat: FALL_2026_OFFER.ageRange,
		label: "Purpose-built for this age band",
		detail:
			"Lessons, pacing, and projects are designed for 9–13 year olds specifically, not adapted down from a teen or adult course.",
	},
	{
		stat: FALL_2026_OFFER.programLength,
		label: "Per term",
		detail:
			"Every cohort runs as a live weekly class that builds toward a project your child presents at the end.",
	},
	{
		stat: "$0",
		label: "To try it first",
		detail:
			"Every new cohort opens with a free live trial class, so you see the format before you pay anything.",
	},
];

const commitments = [
	{
		title: "Start with heart",
		body: "Every homework submission gets written feedback from an instructor, not just a grade—visible right in your child's dashboard.",
	},
	{
		title: "Teach the " + "why" + " behind AI",
		body: "Our lessons explore fairness, bias, and responsible use. Kids learn to ask better questions before they write better code.",
	},
	{
		title: "Make it accessible",
		body: "No software to install and no account needed to try it—Python runs right in the browser, on the laptop your child already has.",
	},
	{
		title: "Celebrate small wins",
		body: "From a first successful print statement to a full project showcase, we track progress with badges and celebrate every term with a live project demo.",
	},
];

export default function AboutPage() {
	return (
		<MainLayout>
			<JsonLd
				data={{
					"@context": "https://schema.org",
					"@type": "Person",
					"@id": `${SITE_URL}/about#opeyemi-ojo`,
					name: "Opeyemi Ojo",
					jobTitle: "Founder & Lead Instructor",
					image: absoluteUrl("/images/opeyemi-ojo-founder.jpg"),
					url: absoluteUrl("/about"),
					worksFor: { "@id": `${SITE_URL}/#organization` },
				}}
			/>
			<article className="container mx-auto px-4 py-20 lg:py-28">
				{/* Hero */}
				<section className="max-w-4xl mx-auto text-center mb-20">
					<Badge className="mb-6 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
						<Sparkles className="w-4 h-4 inline mr-2" />
						About Kids Learn AI
					</Badge>
					<h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
						Every child deserves a seat in the future of AI.
					</h1>
					<p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
						{PARENT_FACING_PROMISE}
					</p>
				</section>

				{/* Mission | Vision | Promise */}
				<section className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-20">
					{pillars.map((pillar) => (
						<Card key={pillar.title} className="border-2 rounded-3xl h-full">
							<CardHeader className="flex flex-col items-center text-center gap-4">
								<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
									<pillar.icon className="h-7 w-7 text-primary" />
								</div>
								<CardTitle className="text-xl">{pillar.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base leading-relaxed text-center">
									{pillar.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</section>

				{/* Our Story */}
				<section className="max-w-4xl mx-auto mb-20">
					<h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
						We started with one question: will they build it, or just use it?
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed mb-6">
						Kids Learn AI was born after watching brilliant young minds feel
						intimidated by code—or worse, convinced technology wasn&apos;t “for
						them.” We knew that if kids could see Python as playful, and if they
						could explore AI in a safe, transparent way, they would realise the
						future was theirs to shape.
					</p>
					<p className="text-muted-foreground text-lg leading-relaxed">
						So we gathered educators, engineers, parents, and students to design
						a learning path that respects curiosity, embraces culture, and meets
						families exactly where they are. The result is a platform that feels
						like a friend cheering you on, backed by curriculum rigour and
						real-world relevance.
					</p>
				</section>

				{/* Founder note */}
				<section
					aria-labelledby="founder-heading"
					className="relative max-w-5xl mx-auto mb-20 overflow-hidden rounded-3xl border-2 bg-card shadow-xl"
				>
					<div
						aria-hidden="true"
						className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
					/>
					<div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
						<div className="relative min-h-[24rem] overflow-hidden bg-primary/10 sm:min-h-[30rem] lg:min-h-[34rem]">
							<Image
								src="/images/opeyemi-ojo-founder.jpg"
								alt="Opeyemi Ojo, founder and lead instructor at Kids Learn AI"
								fill
								sizes="(max-width: 1023px) 100vw, 42vw"
								className="object-cover object-[50%_30%]"
							/>
							<div
								aria-hidden="true"
								className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent lg:hidden"
							/>
						</div>

						<div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12">
							<Badge className="mb-6 w-fit rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-primary">
								A note from the founder
							</Badge>
							<span
								aria-hidden="true"
								className="mb-1 font-serif text-7xl leading-none text-primary/20"
							>
								&ldquo;
							</span>
							<h2
								id="founder-heading"
								className="text-3xl font-bold leading-tight text-foreground text-balance lg:text-4xl"
							>
								Children should understand the technology shaping their world.
							</h2>
							<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
								<p>
									I created Kids Learn AI to give young learners a welcoming
									place to build real Python skills, explore AI safely, and grow
									from curious users into thoughtful creators.
								</p>
								<p>
									As a builder and lead instructor, I bring a practical,
									child-first approach to every lesson: explain ideas clearly,
									make space for questions, and help each student turn small
									wins into lasting confidence.
								</p>
							</div>

							<div className="mt-8 border-t border-border pt-6">
								<p className="text-lg font-bold text-foreground">Opeyemi Ojo</p>
								<p className="mt-1 text-sm font-medium text-primary">
									Founder &amp; Lead Instructor
								</p>
								<a
									href="https://brightwick.ca"
									target="_blank"
									rel="noreferrer"
									className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
								>
									Also creator of Brightwick, a Grades 3–8 learning app
									<ExternalLink className="h-4 w-4" aria-hidden="true" />
									<span className="sr-only"> (opens in a new tab)</span>
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Impact Highlights */}
				<section className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-20">
					{impactHighlights.map((item) => (
						<Card key={item.label} className="rounded-3xl border-2 h-full">
							<CardContent className="p-6 text-center space-y-3">
								<div className="text-5xl font-bold text-primary">
									{item.stat}
								</div>
								<div className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
									{item.label}
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{item.detail}
								</p>
							</CardContent>
						</Card>
					))}
				</section>

				{/* Why AI matters for kids */}
				<section className="bg-secondary/40 border border-secondary/60 rounded-3xl p-10 mb-20">
					<div className="flex flex-col gap-6">
						<div className="flex items-center gap-3">
							<GraduationCap className="h-6 w-6 text-primary" />
							<h2 className="text-2xl font-semibold text-foreground">
								Why we believe AI literacy can&apos;t wait until high school
							</h2>
						</div>
						<ul className="list-disc pl-6 space-y-3 text-muted-foreground text-base leading-relaxed">
							<li>
								AI already shapes the stories our kids watch, the music they
								stream, and the news they read. Understanding how algorithms
								decide things builds healthy skepticism and critical thinking.
							</li>
							<li>
								Learning Python first gives children the mental models they need
								to stay curious and in control when they encounter AI systems.
								They see behind the curtain and learn to ask better questions.
							</li>
							<li>
								Early exposure is protective. Kids learn about bias, privacy,
								and consent before they adopt harmful habits or internalise the
								idea that technology is neutral.
							</li>
							<li>
								The earlier we nurture confidence, the more diverse voices we
								welcome into advanced courses, internships, and careers.
							</li>
						</ul>
					</div>
				</section>

				{/* Commitments */}
				<section className="max-w-5xl mx-auto mb-20">
					<h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
						How we turn this mission into daily practice
					</h2>
					<div className="grid gap-6 md:grid-cols-2">
						{commitments.map((commitment) => (
							<Card
								key={commitment.title}
								className="border rounded-2xl h-full"
							>
								<CardContent className="p-6 space-y-3">
									<h3 className="text-lg font-semibold text-foreground">
										{commitment.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{commitment.body}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Join Us CTA */}
				<section className="bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl p-12 lg:p-16 text-center text-primary-foreground shadow-2xl">
					<div className="text-6xl mb-6">🌟</div>
					<h2 className="text-4xl font-bold mb-4 text-balance">
						Together, we can write a new story for the next generation.
					</h2>
					<p className="text-lg mb-8 leading-relaxed text-primary-foreground/90 max-w-3xl mx-auto">
						Whether you&apos;re a parent, educator, community leader, or
						technologist, Kids Learn AI invites you to co-create a world where
						every child can speak the language of innovation and guide
						intelligent technology with courage.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/signup">
							<Button
								size="lg"
								variant="secondary"
								className="text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
							>
								<Rocket className="mr-2 h-5 w-5" /> Start learning for free
							</Button>
						</Link>
						<Link href="/contact">
							<Button
								size="lg"
								variant="outline"
								className="text-lg px-8 py-6 rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-white/10"
							>
								Connect with our team
							</Button>
						</Link>
					</div>
				</section>
			</article>
		</MainLayout>
	);
}
