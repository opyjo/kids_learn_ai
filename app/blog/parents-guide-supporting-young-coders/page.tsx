import type { Metadata } from "next";
import { ArticleShell } from "@/components/blog/article-shell";
import { publicMetadata } from "@/lib/seo";

const description =
	"A practical guide for parents and caregivers who want to encourage a child learning to code, even without technical experience.";

export const metadata: Metadata = publicMetadata({
	title: "You Don’t Need to Code to Support a Young Coder | Kids Learn AI",
	description,
	path: "/blog/parents-guide-supporting-young-coders",
	type: "article",
});

const betterQuestions = [
	"Can you show me the part you are most proud of?",
	"What did you expect the program to do?",
	"What have you already tried?",
	"What is the smallest test you could run next?",
	"If you had another hour, what would you add?",
];

export default function ParentsGuideSupportingYoungCodersPage() {
	return (
		<ArticleShell
			category="For Families"
			slug="parents-guide-supporting-young-coders"
			title="You Don’t Need to Code to Support a Young Coder"
			description={description}
			intro="A parent’s most useful tools are not Python commands. They are patience, good questions, and a home where mistakes are treated as part of making something new."
			datePublished="2026-07-04"
			readingTime="7 min read"
			takeaways={[
				"Questions that help a child think without giving away the answer.",
				"A realistic home routine that keeps coding enjoyable.",
				"How to praise the learning process instead of natural talent.",
			]}
		>
			<section className="space-y-4">
				<h2>Your role is to be the audience, not the answer key</h2>
				<p>
					Young coders need someone who is genuinely interested in what they are
					making. Ask for a tour of the project. Let the child control the
					keyboard. When something breaks, resist the urge to search for the fix
					immediately; give them room to read the message, make a guess, and try
					a small change.
				</p>
				<p>
					Saying “I don’t know—how could we find out?” models one of the most
					valuable habits in technology. Professional developers do not memorize
					every answer. They learn how to investigate carefully.
				</p>
			</section>

			<section className="space-y-5">
				<h2>Replace “Is it finished?” with better questions</h2>
				<div className="rounded-2xl border border-border/80 bg-card p-6">
					<ul className="space-y-4">
						{betterQuestions.map((question) => (
							<li
								key={question}
								className="border-b border-border/70 pb-4 text-foreground last:border-0 last:pb-0"
							>
								“{question}”
							</li>
						))}
					</ul>
				</div>
				<p>
					These questions focus attention on decisions and experiments. They
					also let a parent participate meaningfully without pretending to know
					the technical details.
				</p>
			</section>

			<section className="space-y-4">
				<h2>Build a routine that leaves them wanting to return</h2>
				<p>
					For many beginners, two focused sessions of 25–40 minutes each week
					are better than one long weekend marathon. End with a tiny win: save
					the project, write down the next idea, and let the learner show
					someone what changed.
				</p>
				<ul className="list-disc pl-6 text-muted-foreground">
					<li>Choose a regular time with as few interruptions as possible.</li>
					<li>
						Keep water nearby and take a movement break between challenges.
					</li>
					<li>
						Let personal interests shape projects, themes, and sample data.
					</li>
					<li>Stop before frustration becomes exhaustion.</li>
				</ul>
			</section>

			<section className="space-y-4">
				<h2>Praise strategies, not “being good at computers”</h2>
				<p>
					Talent-based praise can make a child feel that struggle proves they do
					not belong. Instead, notice the specific behaviour that moved the work
					forward: “You tested one thing at a time,” “You read that error
					carefully,” or “You asked for help after trying two ideas.”
				</p>
				<p>
					Save occasional screenshots or short project notes. Looking back at an
					older program makes progress visible, especially during a difficult
					week when a learner feels stuck.
				</p>
			</section>

			<section className="space-y-4">
				<h2>Know when outside support will help</h2>
				<p>
					A class, mentor, library club, or trusted older student can help when
					a child wants more structure or when every session is turning into a
					family negotiation. Look for a learning environment where children
					write and explain code, receive kind feedback, and build projects
					instead of only watching videos.
				</p>
				<p>
					You are still an essential part of the team. Your attention tells a
					young person that their ideas matter—and that is often what keeps them
					creating long enough for confidence to grow.
				</p>
			</section>
		</ArticleShell>
	);
}
