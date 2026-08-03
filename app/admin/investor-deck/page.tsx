import {
	AlertTriangle,
	ArrowRight,
	CheckCircle2,
	Clock3,
	ExternalLink,
	Mic2,
	Presentation,
	Sparkles,
	Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth-helpers";

type DeckStat = {
	value: string;
	label: string;
};

type DeckSource = {
	label: string;
	href: string;
};

type DeckSection = {
	id: string;
	number: string;
	label: string;
	title: string;
	thesis: string;
	bullets: string[];
	practice: string;
	stats?: DeckStat[];
	assumption?: string;
	sources?: DeckSource[];
};

const deckSections: DeckSection[] = [
	{
		id: "vision",
		number: "01",
		label: "Vision",
		title: "Kids should understand and build AI—not just use it",
		thesis:
			"KidsLearnAI gives Canadian children ages 9–13 a trusted path into Python, AI concepts and responsible judgment.",
		bullets: [
			"Live online instruction in small groups",
			"Python-first projects that make abstract ideas concrete",
			"Responsible AI woven through the learning experience",
		],
		practice:
			"Open with the mission, then make it tangible: children already encounter AI, but most are not being taught how it works or how to question it.",
		sources: [
			{ label: "KidsLearnAI website", href: "https://www.kidslearnai.ca" },
		],
	},
	{
		id: "problem",
		number: "02",
		label: "Problem",
		title: "AI exposure is growing. Understanding is not.",
		thesis:
			"Parents need more than another screen. Beginners need trusted guidance when they get stuck and when AI raises questions about safety, bias and privacy.",
		bullets: [
			"Self-paced content often loses beginners when errors appear",
			"General coding programs rarely teach responsible AI judgment",
			"School exposure and individualized feedback vary widely",
			"Families lack a clear pathway from curiosity to capability",
		],
		practice:
			"Do not criticize technology or schools. Explain the missing job: consistent live feedback plus a structured, age-appropriate AI pathway.",
	},
	{
		id: "why-now",
		number: "03",
		label: "Why now",
		title: "AI literacy is becoming infrastructure",
		thesis:
			"Canadian investment, school curriculum and global competency frameworks all point toward practical and responsible AI education for young people.",
		stats: [
			{ value: "1.93M", label: "Canadian public-school students ages 9–13" },
			{ value: "$30M", label: "CanCode funding planned for 2026–2028" },
			{ value: "12", label: "UNESCO student AI competencies" },
		],
		bullets: [
			"Ontario introduces coding concepts within the Grades 1–8 math curriculum",
			"UNESCO frames student AI capability around responsible and creative use",
			"The target-age population is large enough to support a focused Canadian wedge",
		],
		practice:
			"Use these signals to establish timing, not to claim government endorsement of KidsLearnAI.",
		sources: [
			{
				label: "Statistics Canada enrolment by age",
				href: "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710001901&request_locale=en",
			},
			{
				label: "CanCode 2026–2028 applicant guide",
				href: "https://ised-isde.canada.ca/site/ised/en/programs-and-initiatives/cancode/cancode-program-2026-2028-applicant-guide",
			},
			{
				label: "UNESCO AI competency framework",
				href: "https://www.unesco.org/en/articles/ai-competency-framework-students?hub=195885",
			},
			{
				label: "Ontario Grades 1–8 math curriculum",
				href: "https://www.ontario.ca/page/math-curriculum-grades-1-8",
			},
		],
	},
	{
		id: "solution",
		number: "04",
		label: "Solution",
		title: "Human-led AI learning, built for kids",
		thesis:
			"A free first class lowers risk, guided projects build confidence, and parent-visible progression turns one term into a longer learning relationship.",
		bullets: [
			"Live small groups provide immediate help and accountability",
			"Python gives learners a real programming foundation",
			"AI tutors, concept labs, quizzes and adaptive practice reinforce live teaching",
			"Family accounts, schedules and analytics connect the learning journey",
		],
		practice:
			"Describe the product as a system that supports the instructor and learner. Avoid presenting the AI features as a replacement for the teacher.",
	},
	{
		id: "pathway",
		number: "05",
		label: "Learning pathway",
		title: "A two-year pathway compounds learning and customer value",
		thesis:
			"KidsLearnAI can take a beginner from a first Python win to applied AI projects and a portfolio, one term at a time.",
		bullets: [
			"Enter: free first class, beginner-friendly code and confidence to continue",
			"Build: loops, logic, games, data and foundational AI concepts",
			"Create: functions, APIs, visualization, applied AI and capstone work",
			"The current curriculum maps eight terms in Year 1 and eight in Year 2",
		],
		practice:
			"Emphasize optionality: families buy a term, while the curriculum gives them a reason to continue without forcing a long contract.",
	},
	{
		id: "readiness",
		number: "06",
		label: "Execution readiness",
		title: "Built now. September tests repeatable demand.",
		thesis:
			"The product and operating workflow exist. The September 2026 cohort is the next commercial measurement event.",
		stats: [
			{ value: "50", label: "Trial reservations target" },
			{ value: "35", label: "Attended trials target" },
			{ value: "14–18", label: "Paid enrolments target" },
		],
		bullets: [
			"Public acquisition and trial-booking funnel",
			"Two-year curriculum and live-class workflow",
			"Student learning platform and admin operations",
			"Weekly scorecard for source, attendance, conversion and enrolment",
		],
		practice:
			"Say plainly that these are September targets, not historical traction. Investors should hear exactly what the next cohort is designed to prove.",
		assumption:
			"The 50 → 35 → 14–18 funnel is an operating target. Replace it with actual results after the cohort launches.",
	},
	{
		id: "business-model",
		number: "07",
		label: "Business model",
		title: "One trial can become a multi-year learner relationship",
		thesis:
			"The initial model combines direct-to-family cohort revenue with longer-term institutional distribution opportunities.",
		stats: [
			{ value: "$159.99", label: "Current founding price per term" },
			{ value: "$600+", label: "Illustrative annual revenue per learner" },
			{ value: "Pilot", label: "Institutional entry point" },
		],
		bullets: [
			"D2C terms: 8–10 weeks of instruction, projects and platform access",
			"Annual pathway: families progress term by term across the curriculum",
			"Institutional distribution: workshops and pilots for libraries, schools, nonprofits and sponsors",
		],
		practice:
			"Lead with the current term offer. Present annual learner revenue and institutional pricing as assumptions still to be validated.",
		assumption:
			"The $600+ learner-year model assumes approximately three terms per year at roughly $200 per term.",
		sources: [
			{
				label: "KidsLearnAI pricing",
				href: "https://www.kidslearnai.ca/pricing",
			},
		],
	},
	{
		id: "market",
		number: "08",
		label: "Market",
		title: "A 1% share supports about $11.6M in annual revenue",
		thesis:
			"The initial wedge is Canadian public-school students ages 9–13, before considering private schools, homeschool families or institutional revenue.",
		stats: [
			{ value: "$1.16B", label: "Illustrative annual TAM" },
			{ value: "$2.89M", label: "Revenue at 0.25% share" },
			{ value: "$11.56M", label: "Revenue at 1% share" },
		],
		bullets: [
			"Target population: approximately 1.926 million public-school students",
			"Illustrative revenue basis: $600 per learner-year",
			"Start with reachable Canadian family and community channels, then expand distribution",
		],
		practice:
			"Explain the calculation simply. The point is to show the scale of the wedge, not to predict a guaranteed market share.",
		assumption:
			"All market-revenue figures multiply the 1.926 million target population by an assumed $600 in annual learner revenue.",
	},
	{
		id: "go-to-market",
		number: "09",
		label: "Go to market",
		title: "The growth loop starts with a useful experience, not an ad",
		thesis:
			"Free workshops and an attended live trial let families experience the teaching before they commit.",
		bullets: [
			"Acquire: libraries, schools, parent councils, homeschool groups and warm outreach",
			"Convert: instant booking, reminders and a strong live instructor demonstration",
			"Compound: paid term, next curriculum level, family referrals and partner renewals",
			"Measure reservation source, attendance, trial-to-paid conversion, retention and referral rate",
		],
		practice:
			"Connect the September campaign to the growth loop: the cohort is both revenue and a disciplined test of the acquisition system.",
	},
	{
		id: "competition",
		number: "10",
		label: "Competition",
		title: "A unified model creates the advantage",
		thesis:
			"Alternatives can offer content, tutoring or school exposure. KidsLearnAI is designed to connect live feedback, responsible AI, progression and platform support.",
		bullets: [
			"Self-paced apps: scalable content, but limited live help and progression",
			"General coding schools: live feedback, but responsible AI depth varies",
			"Private tutors: personalized, but difficult to standardize and scale",
			"School programs: broad reach, but curriculum time and feedback are constrained",
			"KidsLearnAI: small groups, core responsible-AI curriculum, two-year path and built-in platform",
		],
		practice:
			"Talk about category trade-offs rather than attacking named competitors. The defensible claim is the integrated learning system.",
	},
	{
		id: "founder",
		number: "11",
		label: "Founder",
		title: "A builder who teaches",
		thesis:
			"Opeyemi Ojo combines product-building experience with direct classroom insight as Founder and Lead Instructor.",
		bullets: [
			"Translates technical depth into a child-first learning experience",
			"Also created Brightwick, a Grades 3–8 learning app",
			"Builds the curriculum, platform and operating feedback loop together",
			"Defensibility compounds through curriculum, instructor playbooks, learner data and family trust",
		],
		practice:
			"Make this personal. Explain why teaching the first cohorts creates insight that a software-only founder would not have.",
		sources: [
			{ label: "Founder story", href: "https://www.kidslearnai.ca/about" },
		],
	},
	{
		id: "ask",
		number: "12",
		label: "Proposed ask",
		title: "Raise CAD $500K to build a repeatable growth engine",
		thesis:
			"Use the next 18 months to validate demand, enable more instructors and turn the founder-led model into a repeatable operating system.",
		stats: [
			{ value: "500", label: "Paid learners target" },
			{ value: "12", label: "Trained instructors target" },
			{ value: "10", label: "Institutional partners target" },
		],
		bullets: [
			"35% curriculum and instructor enablement",
			"30% product and learner-data systems",
			"25% growth and partnerships",
			"10% operations, safety and legal",
			"Contribution-margin target of at least 55%",
		],
		practice:
			"Frame this as a proposed financing plan. Refine the amount, milestones and use of funds after the September cohort produces real acquisition and delivery data.",
		assumption:
			"The raise, allocation, 18-month milestones and margin target are planning assumptions—not committed financing terms or achieved results.",
	},
];

const shortPitch =
	"KidsLearnAI helps Canadian children ages 9–13 learn Python and responsible AI through live small-group instruction and a purpose-built learning platform. Families begin with a free live class, then progress term by term through a two-year curriculum. The initial Canadian wedge includes about 1.93 million public-school students in the target age range. The product and operating workflow are already built; the September 2026 cohort is designed to validate a repeatable funnel from trial reservation to paid enrolment. We are exploring a CAD $500,000 pre-seed to expand instructor capacity, strengthen the product and build community and institutional distribution.";

export default async function InvestorDeckPage() {
	await requireAdmin();

	return (
		<div className="space-y-4 pb-12">
			<header className="overflow-hidden rounded-2xl bg-slate-950 px-4 py-5 text-white shadow-sm sm:px-6 sm:py-7">
				<div className="flex flex-wrap items-start justify-between gap-4">
					<div className="max-w-3xl">
						<div className="mb-3 flex flex-wrap items-center gap-2">
							<Badge className="border-blue-400/30 bg-blue-400/15 text-blue-100 hover:bg-blue-400/15">
								Internal reference
							</Badge>
							<span className="text-xs text-slate-400">
								Revised August 2026
							</span>
						</div>
						<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
							KidsLearnAI Investor Deck
						</h1>
						<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
							A readable practice version of the investor story. Review the
							narrative, rehearse the speaker cues and replace targets with
							actual results as the business learns.
						</p>
					</div>
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200">
						<Presentation className="h-6 w-6" />
					</div>
				</div>
			</header>

			<div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)]">
				<aside className="lg:sticky lg:top-24 lg:self-start">
					<Card className="border-slate-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
						<CardHeader className="px-3 py-3">
							<CardTitle className="text-sm">Deck outline</CardTitle>
						</CardHeader>
						<CardContent className="px-2 pb-3 pt-0">
							<nav aria-label="Investor deck sections" className="space-y-0.5">
								<a
									href="#practice-pitch"
									className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium text-blue-700 hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-blue-950/40"
								>
									<Mic2 className="h-3.5 w-3.5" />
									90-second pitch
								</a>
								{deckSections.map((section) => (
									<a
										key={section.id}
										href={`#${section.id}`}
										className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-gray-800 dark:hover:text-white"
									>
										<span className="w-5 font-mono text-[10px] text-slate-400">
											{section.number}
										</span>
										<span className="truncate">{section.label}</span>
									</a>
								))}
							</nav>
						</CardContent>
					</Card>
				</aside>

				<main className="min-w-0 space-y-4">
					<Card
						id="practice-pitch"
						className="scroll-mt-24 border-blue-200 bg-blue-50/60 shadow-sm dark:border-blue-900 dark:bg-blue-950/20"
					>
						<CardHeader className="px-4 pb-2 pt-4">
							<div className="flex flex-wrap items-center justify-between gap-2">
								<CardTitle className="flex items-center gap-2 text-lg">
									<Mic2 className="h-5 w-5 text-blue-600" />
									90-second practice pitch
								</CardTitle>
								<div className="flex items-center gap-1.5 text-xs text-muted-foreground">
									<Clock3 className="h-3.5 w-3.5" />
									Read aloud twice
								</div>
							</div>
						</CardHeader>
						<CardContent className="space-y-3 px-4 pb-4">
							<p className="text-sm leading-7 text-slate-700 dark:text-slate-200">
								{shortPitch}
							</p>
							<div className="grid gap-2 border-t border-blue-200 pt-3 text-xs text-slate-600 dark:border-blue-900 dark:text-slate-300 sm:grid-cols-3">
								<span className="flex items-center gap-1.5">
									<CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
									State the problem clearly
								</span>
								<span className="flex items-center gap-1.5">
									<ArrowRight className="h-3.5 w-3.5 text-blue-600" />
									Connect product to business model
								</span>
								<span className="flex items-center gap-1.5">
									<Target className="h-3.5 w-3.5 text-orange-600" />
									End with the validation milestone
								</span>
							</div>
						</CardContent>
					</Card>

					{deckSections.map((section) => (
						<Card
							key={section.id}
							id={section.id}
							className="scroll-mt-24 border-slate-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
						>
							<CardHeader className="space-y-3 px-4 pb-3 pt-4 sm:px-5 sm:pt-5">
								<div className="flex flex-wrap items-center justify-between gap-2">
									<div className="flex items-center gap-2">
										<span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
											{section.number}
										</span>
										<Badge variant="secondary">{section.label}</Badge>
									</div>
									{section.assumption && (
										<Badge className="border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300">
											Planning assumption
										</Badge>
									)}
								</div>
								<div>
									<h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
										{section.title}
									</h2>
									<p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
										{section.thesis}
									</p>
								</div>
							</CardHeader>

							<CardContent className="space-y-4 px-4 pb-4 sm:px-5 sm:pb-5">
								{section.stats && (
									<div className="grid overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-gray-800 dark:bg-gray-950 sm:grid-cols-3">
										{section.stats.map((stat) => (
											<div
												key={`${section.id}-${stat.label}`}
												className="border-b border-slate-200 p-3 last:border-b-0 dark:border-gray-800 sm:border-b-0 sm:border-r sm:last:border-r-0"
											>
												<p className="text-2xl font-semibold tracking-tight text-blue-700 dark:text-blue-300">
													{stat.value}
												</p>
												<p className="mt-1 text-xs leading-5 text-muted-foreground">
													{stat.label}
												</p>
											</div>
										))}
									</div>
								)}

								<ul className="grid gap-2 sm:grid-cols-2">
									{section.bullets.map((bullet) => (
										<li
											key={bullet}
											className="flex gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm leading-5 text-slate-700 dark:bg-gray-950 dark:text-slate-200"
										>
											<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
											<span>{bullet}</span>
										</li>
									))}
								</ul>

								<div className="rounded-xl border border-purple-200 bg-purple-50/60 p-3 dark:border-purple-900 dark:bg-purple-950/20">
									<p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-300">
										<Sparkles className="h-3.5 w-3.5" />
										How to say it
									</p>
									<p className="mt-1.5 text-sm leading-6 text-slate-700 dark:text-slate-200">
										{section.practice}
									</p>
								</div>

								{section.assumption && (
									<div className="flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100">
										<AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
										<p>{section.assumption}</p>
									</div>
								)}

								{section.sources && (
									<div className="border-t border-slate-200 pt-3 dark:border-gray-800">
										<p className="mb-2 text-xs font-medium text-muted-foreground">
											Reference sources
										</p>
										<div className="flex flex-wrap gap-x-4 gap-y-2">
											{section.sources.map((source) => (
												<a
													key={source.href}
													href={source.href}
													target="_blank"
													rel="noreferrer"
													className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:underline dark:text-blue-300"
												>
													{source.label}
													<ExternalLink className="h-3 w-3" />
												</a>
											))}
										</div>
									</div>
								)}
							</CardContent>
						</Card>
					))}
				</main>
			</div>
		</div>
	);
}
