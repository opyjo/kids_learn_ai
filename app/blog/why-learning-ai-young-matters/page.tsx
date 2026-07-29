import type { Metadata } from "next";
import { MainLayout } from "@/components/layouts/main-layout";
import { ArticleByline, ArticleSeo } from "@/components/seo/article-seo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { publicMetadata } from "@/lib/seo";

const description =
	"Nine reasons kids should learn AI concepts early, plus an age-by-age Python learning path and practical tips for parents and educators.";

export const metadata: Metadata = publicMetadata({
	title: "Why Learning AI Young Matters — Kids Learn AI",
	description,
	path: "/blog/why-learning-ai-young-matters",
	type: "article",
});

const keyTakeaways = [
	{
		title: "Python builds transferable thinking skills",
		detail:
			"Variables, loops, and conditionals map directly to sequencing, pattern recognition, and debugging—skills that improve math and language outcomes too.",
	},
	{
		title: "Early AI literacy creates responsible creators",
		detail:
			"When kids understand how training data, bias, and guardrails work, they develop empathy and healthy skepticism instead of blindly trusting technology.",
	},
	{
		title: "Playful experimentation unlocks creativity",
		detail:
			"Hands-on projects—chatbots, story remixers, art prompts—show kids that code is a creative medium, not just a technical chore.",
	},
];

const milestones = [
	{
		stage: "Ages 8–10",
		focus:
			"Build curiosity with storytelling, friendly chatbots, and unplugged activities that mirror Python logic.",
		pythonSkills: "print statements, lists, conditionals, input()",
		aiConcepts: "What is data? How do computers make predictions?",
	},
	{
		stage: "Ages 11–13",
		focus:
			"Strengthen problem-solving with small apps, sensor projects, or data visualisations that answer real questions.",
		pythonSkills: "functions, loops, file handling, libraries",
		aiConcepts: "Training vs. inference, bias, ethical guidelines",
	},
	{
		stage: "Ages 14–16",
		focus:
			"Publish passion projects—portfolio apps, beginner machine learning models, or community tools that solve a need.",
		pythonSkills: "APIs, classes, testing, collaboration",
		aiConcepts: "Model evaluation, prompt engineering, responsible release",
	},
];

export default function WhyLearningAIYoungMattersPage() {
	return (
		<MainLayout>
			<ArticleSeo
				slug="why-learning-ai-young-matters"
				title="9 Reasons Kids Should Learn AI Concepts Early (and How Python Helps)"
				description={description}
				datePublished="2025-02-24"
				dateModified="2026-07-29"
			/>
			<article className="container mx-auto px-4 py-20 lg:py-28">
				<div className="max-w-3xl mx-auto">
					<Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
						Python + AI Foundations
					</Badge>
					<h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
						9 Reasons Kids Should Learn AI Concepts Early (and How Python Helps)
					</h1>
					<p className="text-muted-foreground text-lg leading-relaxed mb-10">
						Artificial intelligence is woven into the apps kids use daily—from
						voice assistants to personalised recommendations. When we pair
						age-appropriate AI concepts with foundational Python skills, we help
						children grow from consumers of technology into confident,
						thoughtful creators.
					</p>
					<div className="mb-10">
						<ArticleByline
							datePublished="2025-02-24"
							dateModified="2026-07-29"
							readingTime="8 min read"
						/>
					</div>

					<section className="space-y-6 mb-12">
						<h2 className="text-2xl font-semibold">Why start early?</h2>
						<p className="text-muted-foreground leading-relaxed">
							Children can practise planning, testing ideas, explaining
							decisions, and learning from mistakes through small Python
							projects. Layering age-appropriate AI concepts onto those routines
							shows them how real-world systems make decisions and where human
							judgement still matters.
						</p>
					</section>

					<section className="grid gap-6 md:grid-cols-3 mb-16">
						{keyTakeaways.map((item) => (
							<Card key={item.title} className="border-2 rounded-2xl h-full">
								<CardContent className="p-6">
									<h3 className="text-lg font-semibold mb-3">{item.title}</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{item.detail}
									</p>
								</CardContent>
							</Card>
						))}
					</section>

					<section className="space-y-6 mb-12">
						<h2 className="text-2xl font-semibold">
							What the research and classrooms are telling us
						</h2>
						<ul className="list-disc pl-6 text-muted-foreground space-y-3">
							<li>
								A federal evaluation of Canada&apos;s CanCode program found that
								98% of teacher survey respondents agreed the training
								contributed to student and teacher knowledge and confidence in
								coding and digital skills.{" "}
								<a
									href="https://ised-isde.canada.ca/site/audits-evaluations/en/evaluation/evaluation-report-cancode"
									target="_blank"
									rel="noreferrer"
									className="font-medium text-primary underline underline-offset-4"
								>
									Read the CanCode evaluation
								</a>
								.
							</li>
							<li>
								The same evaluation identified uneven access to coding curricula
								and teacher confidence as ongoing barriers, which is why
								supported, beginner-friendly instruction matters.
							</li>
							<li>
								Projects work best when learners can connect code to a question
								they care about, explain their choices, and revise a small
								working program rather than copy a finished solution.
							</li>
						</ul>
					</section>

					<section className="space-y-6 mb-16">
						<h2 className="text-2xl font-semibold">Suggested learning path</h2>
						<div className="space-y-4">
							{milestones.map((milestone) => (
								<Card key={milestone.stage} className="border rounded-2xl">
									<CardContent className="p-6 space-y-3">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
											<h3 className="text-lg font-semibold">
												{milestone.stage}
											</h3>
											<span className="text-sm text-primary font-medium">
												{milestone.pythonSkills}
											</span>
										</div>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{milestone.focus}
										</p>
										<p className="text-xs uppercase tracking-wide text-muted-foreground">
											AI concepts: {milestone.aiConcepts}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<section className="space-y-6 mb-12">
						<h2 className="text-2xl font-semibold">
							Tips for parents and educators
						</h2>
						<ul className="list-disc pl-6 text-muted-foreground space-y-3">
							<li>
								Start with concrete, relatable examples—recommendation
								playlists, smart home devices, or voice assistants—and trace
								back to the code that powers them.
							</li>
							<li>
								Celebrate questions about fairness and bias. Encourage kids to
								notice when an AI guess feels “off” and explore why.
							</li>
							<li>
								Balance screen time with unplugged activities: board games that
								use logic, card sorting tasks, or role-playing “if/else”
								decisions help reinforce computational thinking.
							</li>
							<li>
								Build portfolio habits early. Saving small projects and writing
								a short reflection (“What did I teach the computer to do?”)
								plants the seed for future resumes and scholarships.
							</li>
						</ul>
					</section>

					<section className="bg-secondary/30 rounded-3xl p-8 mb-16">
						<h2 className="text-2xl font-semibold mb-4">
							How Kids Learn AI can help
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Our curriculum starts with playful Python lessons, gradually
							introduces AI building blocks (like data, training, and ethical
							guardrails), and connects families with mentors who look like the
							students they support. Whether your child is brand-new to
							technology or already tinkering, we meet them at their level.
						</p>
					</section>

					<section className="space-y-4 mb-16">
						<h2 className="text-2xl font-semibold">
							Further reading & resources
						</h2>
						<ul className="list-disc pl-6 text-muted-foreground space-y-2">
							<li>
								<a
									href="https://unesdoc.unesco.org/ark:/48223/pf0000376709"
									target="_blank"
									rel="noreferrer"
									className="text-primary underline underline-offset-4"
								>
									UNESCO: <em>AI and Education: Guidance for Policy-makers</em>
								</a>
							</li>
							<li>
								<a
									href="https://ised-isde.canada.ca/site/audits-evaluations/en/evaluation/evaluation-report-cancode"
									target="_blank"
									rel="noreferrer"
									className="text-primary underline underline-offset-4"
								>
									Innovation, Science and Economic Development Canada:{" "}
									<em>Evaluation of CanCode</em>
								</a>
							</li>
							<li>
								<a
									href="https://www.canada.ca/en/employment-social-development/programs/supports-student-learning.html"
									target="_blank"
									rel="noreferrer"
									className="text-primary underline underline-offset-4"
								>
									Employment and Social Development Canada:{" "}
									<em>Supports for Student Learning</em>
								</a>
							</li>
						</ul>
					</section>

					<section className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
						<h2 className="text-2xl font-semibold mb-4">
							Ready to help a young learner get started?
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-6">
							Explore our hands-on lessons, join a free workshop, or talk to our
							team about mentoring opportunities. Together, we can make sure
							every child sees themselves in the future of AI.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<a
								className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
								href="/signup"
							>
								Start learning for free
							</a>
							<a
								className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
								href="/about"
							>
								See how our classes work
							</a>
						</div>
					</section>
				</div>
			</article>
		</MainLayout>
	);
}
