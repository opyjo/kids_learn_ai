import {
	AlertTriangle,
	BookOpen,
	CheckCircle2,
	ClipboardList,
	Clock3,
	MessageSquareQuote,
	ShieldCheck,
	ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth-helpers";

const prepChecklist = [
	"Re-read their application in Intern Applications: university, program, year, self-rated Python level, teaching experience, and their “why interested” answer. Pull one specific detail to reference in your opening.",
	"Skim the resume. Note anything kid-adjacent (tutoring, camps, coaching, siblings) and anything Python-concrete (courses, projects, TA work).",
	"Check the eligibility flags: citizenship status, 18+, weekday availability. If any is a no, the interview is informational only — don't advance them.",
	"Confirm arm's length: not a relative, no close personal or business tie. VFC requires this before an offer.",
	"Have the scorecard open in another window. Score within 10 minutes of ending the call, while it's fresh.",
];

const agenda = [
	{
		time: "00–03",
		title: "Welcome & role framing",
		detail:
			"Put them at ease, set the shape of the call, frame the role honestly.",
	},
	{
		time: "03–08",
		title: "Background & motivation",
		detail:
			"Why teach kids, why this instead of a dev internship. Pick two questions.",
	},
	{
		time: "08–14",
		title: "Python fundamentals check",
		detail: "One explain-it-simply question, then the debugging read-aloud.",
	},
	{
		time: "14–20",
		title: "Mini-teach exercise",
		detail:
			"They teach you a concept as if you were ten. The heart of the interview.",
	},
	{
		time: "20–24",
		title: "Classroom & safeguarding scenarios",
		detail:
			"One classroom scenario, then the safeguarding question — never skipped.",
	},
	{
		time: "24–28",
		title: "Logistics & eligibility verification",
		detail: "Schedule fit, remote setup, VFC checks, vulnerable-sector check.",
	},
	{
		time: "28–30",
		title: "Their questions & close",
		detail: "Answer honestly, state next steps and timeline.",
	},
];

interface InterviewQuestion {
	question: string;
	listenFor: string;
}

const motivationQuestions: InterviewQuestion[] = [
	{
		question:
			"Tell me about a time you explained something technical to someone who knew nothing about it. What did you do when they didn't get it the first time?",
		listenFor:
			"A real story, and a second strategy — analogy, drawing, smaller steps. Candidates who just “repeat it slower” will struggle with kids.",
	},
	{
		question:
			"You could be doing a dev or research internship instead. Why teaching, and why kids specifically?",
		listenFor:
			"Genuine energy about kids or education, not just “it was available.” Bonus: they mention patience, or a teacher who shaped them.",
	},
	{
		question:
			"What experience do you have with kids or teens — formal or informal? Tutoring, camps, coaching, younger siblings all count.",
		listenFor:
			"Anything real. Zero kid experience isn't disqualifying if the mini-teach goes well, but it raises the bar there.",
	},
	{
		question:
			"What does a great online class for a 10-year-old look like, from the kid's point of view?",
		listenFor:
			"Interaction, short segments, doing over listening, feeling safe to be wrong. A lecture-shaped answer is a warning sign.",
	},
];

const pythonQuestions: InterviewQuestion[] = [
	{
		question:
			"What's the difference between a list and a variable? Explain it the way you would to an 11-year-old.",
		listenFor:
			"A concrete analogy — a backpack vs. a labeled box, a playlist vs. one song. Accuracy plus simplicity, not jargon.",
	},
	{
		question:
			"A student asks: “Why do we need functions? The code works without them.” What do you say?",
		listenFor:
			"Reuse and naming explained through something a kid does — a dance move you name once and call out later, a recipe card.",
	},
	{
		question:
			"What actually happens when a for loop runs? Walk me through `for i in range(3):` like I've never seen one.",
		listenFor:
			"Correct mechanics (i takes 0, 1, 2) delivered without drowning in terminology.",
	},
];

const debugSnippet = `score = 0
name = input("What is your name? ")
if name = "Ada":
    print("Welcome back, " + name)
    score = score + 10
print("Your score is " + score)`;

const miniTeachChecklist = [
	{
		label: "Hook",
		text: "Did they start from the kid's world (game rules, “if it rains, bring an umbrella”) rather than syntax?",
	},
	{
		label: "Check-ins",
		text: "Did they ask me anything, or monologue the whole time?",
	},
	{
		label: "Interruption recovery",
		text: "Patient, warm, adjusted their approach?",
	},
	{
		label: "Accuracy",
		text: "Simplified without saying anything false?",
	},
	{
		label: "Energy on camera",
		text: "Would a 10-year-old stay with this person on a Monday evening Zoom?",
	},
];

const scenarioQuestions: InterviewQuestion[] = [
	{
		question:
			"Mid-class, a student's code won't run, they're visibly frustrated and say “I'm just bad at this.” What do you do in the next sixty seconds?",
		listenFor:
			"Normalize the error first (“every programmer sees this daily”), then a small quick win. Emotional response before technical response.",
	},
	{
		question:
			"One kid finishes every exercise in two minutes and starts distracting others. How do you handle it without losing the rest of the class?",
		listenFor:
			"Extension challenges, “helper” roles — channeling, not suppressing. Bonus if they'd flag it for curriculum follow-up.",
	},
	{
		question:
			"A student asks you a Python question live and you don't know the answer. What do you say?",
		listenFor:
			"Honest “let's find out together” modeling — never bluffing. Bluffing in front of kids is a serious mark against.",
	},
	{
		question:
			"A shy student keeps their camera off and never speaks. Two classes in, what do you try?",
		listenFor:
			"Low-pressure invitations — chat responses, polls, praise for written work. Not forcing the camera on.",
	},
];

const safeguardingQuestion: InterviewQuestion = {
	question:
		"Because we teach children, we run strict rules: I'm present in every session, there's no private messaging or one-on-one contact with learners outside class, and child-facing work needs references plus a vulnerable-sector check. How do those rules sit with you?",
	listenFor:
		"Immediate, comfortable agreement — ideally recognition that the rules protect them too. Any hedging or “is the check really necessary?” is disqualifying.",
};

const eligibilityChecklist = [
	"Canadian citizen, permanent resident, or protected refugee.",
	"At least 18 years old.",
	"Currently enrolled at an accredited Canadian college or university, and still enrolled (graduation requirements not complete) for at least the first 30 days of the internship.",
	"Can commit ~2 hrs/day Mon–Fri around their course load, including the fixed Monday and Wednesday live-class slots. Ask about their fall timetable specifically.",
	"Remote setup: reliable internet, working camera and mic, a quiet space during class hours.",
	"Willing to complete references and a vulnerable-sector check before any child-facing work.",
	"Confirmed arm's length — no family or close personal/business tie.",
	"Understands pay is $20/hr, contingent on approved VFC funding, on the VFC cohort timeline.",
];

const scorecard = [
	{
		dimension: "Python fluency",
		weak: "Shaky on loops/conditionals; missed both bugs",
		strong: "Fluent fundamentals; found both bugs; simplified without errors",
	},
	{
		dimension: "Kid communication",
		weak: "Jargon-heavy, lecture mode, flat on camera",
		strong: "Analogies from a kid's world, warm, checks understanding",
	},
	{
		dimension: "Teaching instinct",
		weak: "Announced answers; rattled by interruption",
		strong: "Guided discovery; recovered gracefully; adjusted approach",
	},
	{
		dimension: "Reliability & organization",
		weak: "Vague on schedule; timetable conflicts with class slots",
		strong: "Clear timetable fit; specific about how they stay organized",
	},
	{
		dimension: "Motivation & safeguarding",
		weak: "Generic interest; hesitant about safety rules",
		strong: "Genuine pull toward teaching kids; embraced the rules unprompted",
	},
];

const greenFlags = [
	"Turned the debugging exercise into a coaching moment unprompted",
	"Asked questions about the kids or the curriculum",
	"Said “I don't know, but here's how I'd find out”",
	"Real kid-adjacent experience, however informal",
	"Visibly enjoyed the mini-teach",
];

const hardFlags = [
	"Hedged on safeguarding rules or the vulnerable-sector check",
	"Bluffed an answer rather than admitting uncertainty",
	"Condescension about kids or “easy” material",
	"Fails any VFC eligibility requirement",
	"Fixed Mon/Wed class slots don't fit their timetable",
];

const guideNavigation = [
	{ href: "#overview", label: "Overview" },
	{ href: "#agenda", label: "30-minute agenda" },
	{ href: "#prep", label: "Prep" },
	{ href: "#interview", label: "Run the interview" },
	{ href: "#scorecard", label: "Score & decide" },
];

function ScriptBlock({ children }: { children: React.ReactNode }) {
	return (
		<div className="rounded-md bg-teal-50 px-4 py-3 text-sm italic text-teal-900 dark:bg-teal-950/30 dark:text-teal-200">
			<p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide not-italic text-teal-700 dark:text-teal-400">
				<MessageSquareQuote className="h-3.5 w-3.5" />
				Say something like
			</p>
			{children}
		</div>
	);
}

function QuestionList({ questions }: { questions: InterviewQuestion[] }) {
	return (
		<div className="space-y-3">
			{questions.map((q) => (
				<div
					key={q.question}
					className="border-l-2 border-teal-600 pl-3 dark:border-teal-500"
				>
					<p className="text-sm font-medium text-gray-900 dark:text-white">
						{q.question}
					</p>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						<span className="font-semibold text-amber-700 dark:text-amber-500">
							Listen for:
						</span>{" "}
						{q.listenFor}
					</p>
				</div>
			))}
		</div>
	);
}

export default async function InterviewGuidePage() {
	await requireAdmin();

	return (
		<div className="min-w-0 space-y-6">
			<div className="flex flex-wrap items-start justify-between gap-3">
				<div>
					<p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
						VFC hiring
					</p>
					<h1 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
						Intern Interview Guide
					</h1>
					<p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
						A 30-minute structured interview for the VFC Instructor Intern role
					</p>
				</div>
				<Link
					href="/admin/vfc-internship/applications"
					className="rounded-md border px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/30"
				>
					View applications
				</Link>
			</div>

			<Card
				id="overview"
				className="scroll-mt-36 overflow-hidden border-teal-200 bg-gradient-to-br from-teal-50 via-white to-sky-50 shadow-sm dark:border-teal-900 dark:from-teal-950/40 dark:via-gray-900 dark:to-sky-950/30"
			>
				<CardHeader className="px-5 pb-2 pt-5">
					<CardTitle className="flex items-center gap-2 text-lg">
						<span className="rounded-lg bg-teal-100 p-2 dark:bg-teal-900/60">
							<BookOpen className="h-5 w-5 text-teal-700 dark:text-teal-300" />
						</span>
						About Kids Learn AI
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4 px-5 pb-5 pt-0">
					<p className="max-w-4xl text-sm leading-6 text-gray-700 dark:text-gray-300">
						Kids Learn AI is a live online learning program for children ages
						9–13. We teach real Python and age-appropriate AI through
						small-group, project-based classes. Students learn to code while
						also exploring bias, privacy, safety, and responsible AI use, so
						they can move from simply consuming technology to understanding and
						creating with it.
					</p>
					<div className="flex flex-wrap gap-2">
						<Badge variant="secondary">~10 hrs/wk · Mon–Fri, 2 hrs/day</Badge>
						<Badge variant="secondary">$20/hr · VFC-subsidized</Badge>
						<Badge variant="secondary">Remote, live over video</Badge>
						<Badge variant="secondary">
							Classes: Mon beginner · Wed Term 2
						</Badge>
					</div>
				</CardContent>
			</Card>

			<nav
				aria-label="Interview guide sections"
				className="sticky top-[88px] z-20 -mx-1 w-[calc(100vw-1.5rem)] max-w-[calc(100vw-1.5rem)] overflow-x-auto rounded-lg border border-gray-200 bg-white/95 p-2 shadow-sm backdrop-blur lg:w-full lg:max-w-full dark:border-gray-800 dark:bg-gray-900/95"
			>
				<div className="flex min-w-max gap-1">
					{guideNavigation.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 dark:text-gray-300 dark:hover:bg-teal-950/40 dark:hover:text-teal-200"
						>
							{item.label}
						</a>
					))}
				</div>
			</nav>

			<section aria-labelledby="quick-start-heading" className="space-y-3">
				<div>
					<h2
						id="quick-start-heading"
						className="text-lg font-semibold text-gray-900 dark:text-white"
					>
						Quick start
					</h2>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						Review the timing first, then finish the prep checklist before the
						candidate joins.
					</p>
				</div>

				{/* Agenda */}
				<Card
					id="agenda"
					className="scroll-mt-36 border-0 bg-white shadow-sm dark:bg-gray-900"
				>
					<CardHeader className="px-4 py-3">
						<CardTitle className="flex items-center gap-2 text-base">
							<Clock3 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
							The 30-minute agenda
						</CardTitle>
						<CardDescription>
							Choose your questions before the call, not during it. If you're
							running over, protect the mini-teach and the safeguarding question
							— everything else can shrink.
						</CardDescription>
					</CardHeader>
					<CardContent className="px-4 pb-4 pt-0">
						<div className="divide-y divide-gray-100 dark:divide-gray-800">
							{agenda.map((slot) => (
								<div key={slot.time} className="flex items-baseline gap-4 py-2">
									<span className="w-14 shrink-0 font-mono text-xs font-semibold text-teal-600 dark:text-teal-400">
										{slot.time}
									</span>
									<div>
										<p className="text-sm font-medium text-gray-900 dark:text-white">
											{slot.title}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											{slot.detail}
										</p>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Prep */}
				<Card
					id="prep"
					className="scroll-mt-36 border-0 bg-white shadow-sm dark:bg-gray-900"
				>
					<CardHeader className="px-4 py-3">
						<CardTitle className="flex items-center gap-2 text-base">
							<ClipboardList className="h-4 w-4 text-teal-600 dark:text-teal-400" />
							Before the interview — 10 minutes of prep
						</CardTitle>
					</CardHeader>
					<CardContent className="px-4 pb-4 pt-0">
						<ul className="space-y-2">
							{prepChecklist.map((item) => (
								<li key={item} className="flex items-start gap-2 text-sm">
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
									<span className="text-gray-700 dark:text-gray-300">
										{item}
									</span>
								</li>
							))}
						</ul>
						<div className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300">
							<strong>Calibration note:</strong> you are not hiring a software
							engineer. You are hiring someone who can hold the attention of a
							10-year-old on Zoom while staying accurate about Python. Weight
							kid-communication and teaching instinct at least as heavily as
							technical depth.
						</div>
					</CardContent>
				</Card>
			</section>

			<section
				id="interview"
				aria-labelledby="interview-heading"
				className="scroll-mt-36 space-y-3"
			>
				<div>
					<h2
						id="interview-heading"
						className="text-lg font-semibold text-gray-900 dark:text-white"
					>
						Run the interview
					</h2>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						Follow these cards from top to bottom. The time marker on each card
						shows where you should be in the call.
					</p>
				</div>

				{/* Opening */}
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="px-4 py-3">
						<CardTitle className="text-base">
							Welcome & role framing{" "}
							<span className="font-mono text-xs text-teal-600 dark:text-teal-400">
								00–03
							</span>
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3 px-4 pb-4 pt-0">
						<ScriptBlock>
							&ldquo;Thanks for making time. I read your application — I liked
							what you said about [specific detail]. Here's the shape of the
							next 30 minutes: a bit about you, some Python questions, then I'll
							ask you to actually teach me something as if I were one of our
							students — that's the fun part. Then logistics and your questions.
							Sound good?&rdquo;
						</ScriptBlock>
						<ScriptBlock>
							&ldquo;Before we begin, a quick introduction to Kids Learn AI. We
							run live, small-group online classes for children ages 9 to 13.
							Students learn real Python through hands-on projects and explore
							AI in an age-appropriate way, including privacy, bias, safety, and
							responsible use. Our goal is to help children become confident,
							thoughtful creators of technology, not just consumers of
							it.&rdquo;
						</ScriptBlock>
						<ScriptBlock>
							&ldquo;The role is about ten hours a week — two hours a day,
							Monday to Friday. Mondays and Wednesdays you co-teach our live
							classes for kids aged 9 to 13, always with me present. The other
							three days are curriculum work: building exercises, testing
							lessons, prepping for new terms.&rdquo;
						</ScriptBlock>
					</CardContent>
				</Card>

				{/* Motivation */}
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="px-4 py-3">
						<CardTitle className="text-base">
							Background & motivation{" "}
							<span className="font-mono text-xs text-teal-600 dark:text-teal-400">
								03–08
							</span>
						</CardTitle>
						<CardDescription>
							Five minutes fits two questions — the first one plus your pick of
							the rest.
						</CardDescription>
					</CardHeader>
					<CardContent className="px-4 pb-4 pt-0">
						<QuestionList questions={motivationQuestions} />
					</CardContent>
				</Card>

				{/* Python */}
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="px-4 py-3">
						<CardTitle className="text-base">
							Python fundamentals check{" "}
							<span className="font-mono text-xs text-teal-600 dark:text-teal-400">
								08–14
							</span>
						</CardTitle>
						<CardDescription>
							The bar is fluent fundamentals, explained simply — variables,
							types, conditionals, loops, functions, lists. One
							explain-it-simply question plus the debugging read-aloud.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4 px-4 pb-4 pt-0">
						<div>
							<h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
								Explain-it-simply (pick one)
							</h3>
							<QuestionList questions={pythonQuestions} />
						</div>
						<div>
							<h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
								Live debugging read-aloud
							</h3>
							<p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
								Paste this in chat. Say:{" "}
								<em>
									&ldquo;A student wrote this and says &lsquo;it's
									broken.&rsquo; Talk me through exactly what you'd say to them
									— to them, not to me.&rdquo;
								</em>
							</p>
							<pre className="overflow-x-auto rounded-md border border-gray-200 bg-gray-50 p-3 font-mono text-xs text-gray-800 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-200">
								{debugSnippet}
							</pre>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
								Two bugs: <code className="font-mono text-xs">=</code> instead
								of <code className="font-mono text-xs">==</code> on line 3, and
								concatenating a string with an int on line 6.{" "}
								<span className="font-semibold text-amber-700 dark:text-amber-500">
									Listen for:
								</span>{" "}
								do they guide the student to find it, or just announce the fix?
								Do they stay warm about the error? Announcing the answer is the
								pattern we'd have to coach out.
							</p>
						</div>
					</CardContent>
				</Card>

				{/* Mini-teach */}
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="px-4 py-3">
						<CardTitle className="text-base">
							Mini-teach exercise{" "}
							<span className="font-mono text-xs text-teal-600 dark:text-teal-400">
								14–20
							</span>
						</CardTitle>
						<CardDescription>
							The highest-signal six minutes of the interview — protect it even
							if earlier sections ran long. One minute to think, four to teach,
							then a brief debrief.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-3 px-4 pb-4 pt-0">
						<ScriptBlock>
							&ldquo;Now the fun part. Pretend I'm ten years old and I've just
							learned about variables — nothing else. Take about four minutes
							and teach me what an if-statement is. You can talk, type, draw,
							whatever you'd actually do. Take a moment to think first if you
							like.&rdquo;
						</ScriptBlock>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							<strong>Play the part.</strong> Interrupt once as a kid would:
							&ldquo;Wait, what does the colon do?&rdquo; or &ldquo;This is
							confusing.&rdquo; Their recovery is the test.
						</p>
						<ul className="space-y-2">
							{miniTeachChecklist.map((item) => (
								<li key={item.label} className="flex items-start gap-2 text-sm">
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
									<span className="text-gray-700 dark:text-gray-300">
										<strong>{item.label}</strong> — {item.text}
									</span>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>

				{/* Scenarios */}
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="px-4 py-3">
						<CardTitle className="text-base">
							Classroom & safeguarding scenarios{" "}
							<span className="font-mono text-xs text-teal-600 dark:text-teal-400">
								20–24
							</span>
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 px-4 pb-4 pt-0">
						<div>
							<h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
								Pick one classroom scenario
							</h3>
							<QuestionList questions={scenarioQuestions} />
						</div>
						<div>
							<h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white">
								<ShieldCheck className="h-4 w-4 text-teal-600 dark:text-teal-400" />
								Safeguarding — always ask, verbatim
							</h3>
							<QuestionList questions={[safeguardingQuestion]} />
						</div>
					</CardContent>
				</Card>

				{/* Logistics */}
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="px-4 py-3">
						<CardTitle className="text-base">
							Logistics & eligibility verification{" "}
							<span className="font-mono text-xs text-teal-600 dark:text-teal-400">
								24–28
							</span>
						</CardTitle>
						<CardDescription>
							Confirm each aloud, even if the application already says yes — VFC
							funding depends on it.
						</CardDescription>
					</CardHeader>
					<CardContent className="px-4 pb-4 pt-0">
						<ul className="space-y-2">
							{eligibilityChecklist.map((item) => (
								<li key={item} className="flex items-start gap-2 text-sm">
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
									<span className="text-gray-700 dark:text-gray-300">
										{item}
									</span>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>

				{/* Close */}
				<Card className="border-0 shadow-sm bg-white dark:bg-gray-900">
					<CardHeader className="px-4 py-3">
						<CardTitle className="text-base">
							Their questions & close{" "}
							<span className="font-mono text-xs text-teal-600 dark:text-teal-400">
								28–30
							</span>
						</CardTitle>
						<CardDescription>
							The questions they ask are data too — curriculum and kid questions
							signal engagement; only pay-and-hours questions are neutral; no
							questions at all is a mild flag.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-3 px-4 pb-4 pt-0">
						<ScriptBlock>
							&ldquo;Here's what happens next: I'm finishing interviews this
							week. If we move forward, the next steps are reference checks and
							a vulnerable-sector check before any teaching, then onboarding and
							safeguarding training. Either way you'll hear from me by [date].
							Thanks — this was a good conversation.&rdquo;
						</ScriptBlock>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Then, within ten minutes: fill the scorecard, write two lines of
							notes on the application, and set the status to{" "}
							<strong>Interviewed</strong>.
						</p>
					</CardContent>
				</Card>
			</section>

			<section
				id="scorecard"
				aria-labelledby="scorecard-heading"
				className="scroll-mt-36 space-y-3"
			>
				<div>
					<h2
						id="scorecard-heading"
						className="text-lg font-semibold text-gray-900 dark:text-white"
					>
						Score and decide
					</h2>
					<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
						Complete this section within 10 minutes of ending the call.
					</p>
				</div>

				{/* Scorecard */}
				<Card className="border-0 bg-white shadow-sm dark:bg-gray-900">
					<CardHeader className="px-4 py-3">
						<CardTitle className="text-base">Scorecard</CardTitle>
						<CardDescription>
							Score each dimension 1–4. Anything scoring 1 on kid-communication,
							teaching instinct, or safeguarding comfort is a no regardless of
							the total.
						</CardDescription>
					</CardHeader>
					<CardContent className="px-4 pb-4 pt-0">
						<div className="overflow-x-auto">
							<table className="w-full text-sm">
								<thead>
									<tr className="border-b-2 border-gray-300 text-left text-xs uppercase tracking-wide text-gray-500 dark:border-gray-600 dark:text-gray-400">
										<th className="py-2 pr-3 font-semibold">Dimension</th>
										<th className="py-2 pr-3 font-semibold">1 — weak</th>
										<th className="py-2 font-semibold">4 — strong</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100 dark:divide-gray-800">
									{scorecard.map((row) => (
										<tr key={row.dimension}>
											<td className="py-2 pr-3 align-top font-medium text-gray-900 dark:text-white">
												{row.dimension}
											</td>
											<td className="py-2 pr-3 align-top text-gray-500 dark:text-gray-400">
												{row.weak}
											</td>
											<td className="py-2 align-top text-gray-700 dark:text-gray-300">
												{row.strong}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
							<strong>Decision guide:</strong> 17–20 advance to offer track ·
							13–16 hold and compare against remaining candidates · 12 or below,
							or any hard flag, decline kindly.
						</p>
						<div className="mt-4 grid gap-3 sm:grid-cols-2">
							<div className="rounded-md bg-green-50 p-3 dark:bg-green-950/30">
								<h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-green-700 dark:text-green-400">
									<ThumbsUp className="h-4 w-4" />
									Green flags
								</h3>
								<ul className="list-disc space-y-1 pl-4 text-sm text-gray-700 dark:text-gray-300">
									{greenFlags.map((flag) => (
										<li key={flag}>{flag}</li>
									))}
								</ul>
							</div>
							<div className="rounded-md bg-red-50 p-3 dark:bg-red-950/30">
								<h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-red-700 dark:text-red-400">
									<AlertTriangle className="h-4 w-4" />
									Hard flags — decline
								</h3>
								<ul className="list-disc space-y-1 pl-4 text-sm text-gray-700 dark:text-gray-300">
									{hardFlags.map((flag) => (
										<li key={flag}>{flag}</li>
									))}
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
