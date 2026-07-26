import type { Metadata } from "next";
import { ArticleShell } from "@/components/blog/article-shell";

export const metadata: Metadata = {
	title: "A Family Guide to Safe, Smart AI Use at Home | Kids Learn AI",
	description:
		"Practical family routines for privacy, fact-checking, healthy boundaries, and asking adults for help when children use AI tools.",
	openGraph: {
		title: "A Family Guide to Safe, Smart AI Use at Home",
		description:
			"Simple routines that help children use AI tools with privacy, judgement, and healthy boundaries.",
		type: "article",
	},
};

const familyRules = [
	{
		title: "Keep private details private",
		body: "Names, addresses, school schedules, passwords, private photos, health details, and family conversations do not belong in an AI prompt.",
	},
	{
		title: "Check before you trust",
		body: "AI can sound confident and still be wrong. Verify important claims with a trusted adult, a teacher, or two reliable sources.",
	},
	{
		title: "Pause when something feels wrong",
		body: "A child should stop and show an adult if a response is scary, sexual, hateful, manipulative, or asks them to keep a secret.",
	},
	{
		title: "Create with AI, not on autopilot",
		body: "Use AI to brainstorm, get feedback, or explore examples. The child should still make choices, use their own voice, and understand the final work.",
	},
];

export default function SafeAiUseAtHomePage() {
	return (
		<ArticleShell
			category="AI Safety"
			title="A Family Guide to Safe, Smart AI Use at Home"
			intro="Children do not need a long rulebook to use AI thoughtfully. They need a few memorable habits, regular conversation, and the confidence to ask for help."
			date="July 11, 2026"
			readingTime="8 min read"
			takeaways={[
				"Four simple rules children can remember while using AI.",
				"A low-pressure family check-in that builds good judgement.",
				"Clear signs that it is time to stop and involve an adult.",
			]}
		>
			<section className="space-y-4">
				<h2>Safety works best as a conversation</h2>
				<p>
					AI tools change quickly, but the core family skills do not: protect
					private information, question surprising claims, notice how a tool
					makes you feel, and ask a trusted person for help. Introduce those
					skills before a child needs them, just as you would talk about road
					safety before they cross a busy street alone.
				</p>
				<p>
					Try exploring a tool together. Ask it an easy factual question, a
					silly creative question, and a question it cannot know. This makes the
					tool’s strengths and limitations visible without making the
					conversation frightening.
				</p>
			</section>

			<section className="space-y-6">
				<h2>Four rules worth putting beside the computer</h2>
				<div className="grid gap-4 sm:grid-cols-2">
					{familyRules.map((rule, index) => (
						<div
							key={rule.title}
							className="rounded-2xl border border-border/80 bg-card p-6"
						>
							<span className="font-mono text-xs font-semibold text-primary">
								0{index + 1}
							</span>
							<h3 className="mt-3">{rule.title}</h3>
							<p className="mt-3 text-sm">{rule.body}</p>
						</div>
					))}
				</div>
			</section>

			<section className="space-y-4">
				<h2>Teach the “stop, check, choose” habit</h2>
				<p>
					When an AI response appears, encourage a three-part pause. First,
					<strong> stop</strong> before copying, clicking, or acting. Next,
					<strong> check</strong> who or what could confirm the answer. Finally,
					<strong> choose</strong> whether to use, rewrite, ignore, or report
					the response.
				</p>
				<p>
					This pause is especially useful for homework. A child can ask: “Can I
					explain this answer without the AI?” If the answer is no, the tool has
					skipped the learning rather than supported it.
				</p>
			</section>

			<section className="space-y-4">
				<h2>A five-minute weekly family check-in</h2>
				<ul className="list-disc pl-6 text-muted-foreground">
					<li>What did you ask an AI tool this week?</li>
					<li>Did anything surprise you or seem incorrect?</li>
					<li>What did you create or learn in your own words?</li>
					<li>Did the tool ever make you feel uncomfortable or pressured?</li>
					<li>Is there a new family rule we should add together?</li>
				</ul>
				<p>
					Keep the tone curious. Children are more likely to share a difficult
					experience when they expect help instead of punishment.
				</p>
			</section>

			<section className="space-y-4">
				<h2>Choose tools with the same care as any other digital space</h2>
				<p>
					Review the service’s minimum age, data controls, moderation approach,
					and whether conversations are used to improve its models. Prefer a
					child-specific or school-managed account when available, and turn off
					history or model-training features when that better fits your family’s
					needs.
				</p>
				<p>
					No setting replaces supervision and conversation. The goal is not to
					make every mistake impossible; it is to help children recognize risk,
					recover safely, and grow into thoughtful digital citizens.
				</p>
			</section>
		</ArticleShell>
	);
}
