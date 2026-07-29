import type { Metadata } from "next";
import { ArticleShell } from "@/components/blog/article-shell";
import { publicMetadata } from "@/lib/seo";

const description =
	"Practical ways educators can make AI projects, examples, teamwork, feedback, and classroom participation more inclusive.";

export const metadata: Metadata = publicMetadata({
	title: "Building an AI Classroom Where Every Child Belongs | Kids Learn AI",
	description,
	path: "/blog/building-inclusive-ai-classrooms",
	type: "article",
});

const classroomMoves = [
	{
		title: "Offer more than one way in",
		body: "Let students begin with a story, a social question, a visual pattern, or a small piece of code. Different entry points reveal that AI needs many kinds of thinkers.",
	},
	{
		title: "Use examples students can question",
		body: "Choose datasets and scenarios connected to daily life, then invite students to notice who is represented, who is missing, and who could be harmed by an incorrect prediction.",
	},
	{
		title: "Make team roles rotate",
		body: "Rotate coding, testing, documenting, presenting, and ethics-review roles so one confident student does not become the permanent programmer.",
	},
	{
		title: "Grade the reasoning",
		body: "Reward clear explanations, thoughtful tests, documented revisions, and responsible choices—not only whether the final demo works perfectly.",
	},
];

export default function BuildingInclusiveAiClassroomsPage() {
	return (
		<ArticleShell
			category="For Educators"
			slug="building-inclusive-ai-classrooms"
			title="Building an AI Classroom Where Every Child Belongs"
			description={description}
			intro="Inclusion is not a special activity added after the technical lesson. It lives in the examples we choose, the roles we value, and the many ways students are allowed to show what they know."
			datePublished="2026-06-27"
			readingTime="8 min read"
			takeaways={[
				"Four classroom choices that widen participation immediately.",
				"A fairer way to structure teams and assess AI projects.",
				"Reflection prompts that connect technical work to real people.",
			]}
		>
			<section className="space-y-4">
				<h2>Belonging changes what students are willing to try</h2>
				<p>
					AI lessons ask students to work with uncertainty. Programs fail,
					datasets are incomplete, and reasonable people can disagree about what
					a fair outcome looks like. Students take those intellectual risks when
					the classroom shows that confusion is normal and that their experience
					is useful evidence.
				</p>
				<p>
					Start by broadening the picture of who works in AI. Alongside
					programmers, introduce designers, community advocates, linguists,
					artists, policy researchers, teachers, and people who test systems for
					safety. A wider picture gives more students a place to see themselves.
				</p>
			</section>

			<section className="space-y-6">
				<h2>Four moves that widen participation</h2>
				<div className="grid gap-4 sm:grid-cols-2">
					{classroomMoves.map((move) => (
						<div
							key={move.title}
							className="rounded-2xl border border-border/80 bg-card p-6"
						>
							<h3>{move.title}</h3>
							<p className="mt-3 text-sm">{move.body}</p>
						</div>
					))}
				</div>
			</section>

			<section className="space-y-4">
				<h2>Design group work so expertise can move</h2>
				<p>
					Before teams begin, make each role visible and equally important. The
					tester should be able to pause a release. The documenter should record
					assumptions and changes. The ethics reviewer should ask who benefits
					and who carries the risk. Rotate roles during the project, not only
					between projects.
				</p>
				<p>
					Use structured turn-taking during planning and demos. Quiet writing
					time before discussion can help multilingual learners, reflective
					thinkers, and students who process information differently bring
					stronger ideas into the room.
				</p>
			</section>

			<section className="space-y-4">
				<h2>Choose datasets that create good questions</h2>
				<p>
					A classroom dataset should be small enough to inspect. Students can
					look for missing values, uneven categories, ambiguous labels, and
					examples that do not fit neatly. Avoid collecting sensitive data from
					classmates simply because it is convenient.
				</p>
				<ul className="list-disc pl-6 text-muted-foreground">
					<li>Who decided what the labels mean?</li>
					<li>Whose experiences appear most often in the data?</li>
					<li>What type of error would matter most in the real world?</li>
					<li>Who should be able to challenge the system’s decision?</li>
					<li>When is not building the system the most responsible choice?</li>
				</ul>
			</section>

			<section className="space-y-4">
				<h2>Assess what you want students to value</h2>
				<p>
					If a rubric rewards only accuracy and a polished demo, students learn
					to hide uncertainty. Include criteria for test design, explanation,
					iteration, accessibility, teamwork, and responsible data choices. Give
					credit when a team narrows a claim after discovering a limitation.
				</p>
				<p>
					End with a reflection: “What can your system do, what should it not be
					used for, and whose feedback would you seek next?” A student who can
					answer those questions is developing both technical skill and the
					judgement our AI-shaped world needs.
				</p>
			</section>
		</ArticleShell>
	);
}
