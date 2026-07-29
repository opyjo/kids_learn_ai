import type { Metadata } from "next";
import { ArticleShell } from "@/components/blog/article-shell";
import { publicMetadata } from "@/lib/seo";

const description =
	"Seven creative, beginner-friendly AI projects that help kids turn Python fundamentals into practical experiments.";

export const metadata: Metadata = publicMetadata({
	title: "7 AI Projects Kids Can Build with Python | Kids Learn AI",
	description,
	path: "/blog/ai-projects-kids-can-build-with-python",
	type: "article",
});

const projects = [
	{
		name: "1. The compliment generator",
		skills: "Lists, random choices, string formatting",
		description:
			"Create a program that combines a name, a positive quality, and an encouraging action into a new message each time. Then invite the learner to improve the results by removing awkward combinations. That editing step introduces an important AI habit: outputs need human judgement.",
	},
	{
		name: "2. A mood-aware playlist helper",
		skills: "Input, conditionals, dictionaries",
		description:
			"Ask the user how they feel and suggest a small set of age-appropriate songs or activities. Kids can create their own mood categories, test unexpected answers, and discuss why a computer should never make serious wellbeing decisions on its own.",
	},
	{
		name: "3. The next-word guesser",
		skills: "Text cleanup, counting, probabilities",
		description:
			"Give the program a short, child-authored paragraph and count which words commonly follow one another. It is a wonderfully small model of predictive text—and a concrete way to show that an AI guess comes from patterns, not understanding.",
	},
	{
		name: "4. A recyclable-item sorter",
		skills: "Features, rules, testing",
		description:
			"Describe items using simple features such as material, cleanliness, and size. Start with rules, then compare those rules with a small classifier. The best questions come when the program is wrong: which feature was missing, and who should decide the correct label?",
	},
	{
		name: "5. A tiny image classifier",
		skills: "Datasets, labels, model evaluation",
		description:
			"With a supervised beginner tool or a small prepared dataset, classify two safe categories such as hand-drawn stars and hearts. Keep the dataset local, avoid faces, and test drawings from different people to reveal how variety in training examples affects accuracy.",
	},
	{
		name: "6. The fair team maker",
		skills: "Data structures, constraints, iteration",
		description:
			"Build a tool that creates balanced activity teams using preferences rather than ranking children by ability. Learners can debate what “fair” means, notice when goals conflict, and redesign the program so a teacher always reviews the suggestion.",
	},
	{
		name: "7. A story remix assistant",
		skills: "Functions, templates, prompt design",
		description:
			"Let a user choose a setting, character goal, and surprising object, then generate a short story outline. The child remains the author: they select, rewrite, and explain which ideas they kept. This reinforces that AI can support creativity without replacing it.",
	},
];

export default function AiProjectsKidsCanBuildWithPythonPage() {
	return (
		<ArticleShell
			category="Projects"
			slug="ai-projects-kids-can-build-with-python"
			title="7 AI Projects Kids Can Build with Python"
			description={description}
			intro="The best first AI project is not the most advanced one. It is the project a young learner understands well enough to question, improve, and proudly explain."
			datePublished="2026-07-18"
			readingTime="9 min read"
			takeaways={[
				"Seven projects that grow naturally from beginner Python skills.",
				"A simple way to match project difficulty to a child’s confidence.",
				"Safety and reflection prompts for every experiment.",
			]}
		>
			<section className="space-y-4">
				<h2>Start with a small question, not a big technology</h2>
				<p>
					“Build an AI” is too vague for most beginners. “Can my program guess
					what word I might type next?” is concrete, testable, and playful. A
					small question lets a learner see every part of the system: the input,
					the rule or pattern, the output, and the moment a human decides
					whether the result is useful.
				</p>
				<p>
					Before choosing a project, make sure the learner can read the code
					they are changing. If they can describe what each part does in their
					own words, the project is at the right level. If not, shrink the idea
					until they can.
				</p>
			</section>

			<section className="space-y-6">
				<h2>Seven projects to try</h2>
				<div className="space-y-5">
					{projects.map((project) => (
						<div
							key={project.name}
							className="rounded-2xl border border-border/80 bg-card p-6"
						>
							<h3>{project.name}</h3>
							<p className="mt-2 font-mono text-xs font-medium uppercase tracking-wide text-primary">
								Python skills: {project.skills}
							</p>
							<p className="mt-4">{project.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="space-y-4">
				<h2>Use the build–test–explain loop</h2>
				<p>
					For each project, build the smallest working version first. Test it
					with ordinary examples, unusual examples, and one example designed to
					confuse it. Then ask the learner to explain what the program uses to
					make its decision.
				</p>
				<ul className="list-disc pl-6 text-muted-foreground">
					<li>
						<strong>Build:</strong> What is the simplest version that can work?
					</li>
					<li>
						<strong>Test:</strong> When does it work, and when does it fail?
					</li>
					<li>
						<strong>Explain:</strong> What pattern or rule produced the answer?
					</li>
					<li>
						<strong>Improve:</strong> What is one thoughtful change to try next?
					</li>
				</ul>
			</section>

			<section className="space-y-4">
				<h2>Keep the data safe and the learner in charge</h2>
				<p>
					Use invented, public, or adult-reviewed data. Do not upload names,
					faces, school details, private conversations, or health information.
					When a project uses a generative AI service, an adult should review
					the tool’s age requirements and privacy terms first.
				</p>
				<p>
					Most importantly, celebrate the learner’s decisions—not just the
					program’s output. The real achievement is being able to say, “Here is
					what my system does, here is where it gets confused, and here is what
					I would change.”
				</p>
			</section>
		</ArticleShell>
	);
}
