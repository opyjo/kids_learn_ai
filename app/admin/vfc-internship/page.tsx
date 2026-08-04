import {
	AlertTriangle,
	BadgeDollarSign,
	BriefcaseBusiness,
	Building2,
	CalendarDays,
	CheckCircle2,
	Circle,
	Clock3,
	ExternalLink,
	FileCheck2,
	GraduationCap,
	Laptop,
	ListChecks,
	LockKeyhole,
	ShieldCheck,
	UsersRound,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth-helpers";

type ChecklistStatus = "Complete" | "In progress" | "Next";

type ChecklistItem = {
	label: string;
	detail: string;
	status: ChecklistStatus;
};

const checklist: ChecklistItem[] = [
	{
		label: "Employer application submitted",
		detail: "Submitted to Venture for Canada on August 4, 2026.",
		status: "Complete",
	},
	{
		label: "Initial eligibility review",
		detail: "VFC confirmed that the application meets the criteria to proceed.",
		status: "Complete",
	},
	{
		label: "Kids Learn AI business name registered",
		detail:
			"Registered in Ontario under Opyjo Consulting Inc. on August 4, 2026; active through August 3, 2031.",
		status: "Complete",
	},
	{
		label: "Persona company verification",
		detail:
			"Verify Opyjo Consulting Inc. with the incorporation, address, registration, website and founder identity documents.",
		status: "In progress",
	},
	{
		label: "Employer onboarding",
		detail:
			"Complete VFC's program overview or onboarding materials and retain the eligibility confirmation.",
		status: "Next",
	},
	{
		label: "Publish the internship opportunity",
		detail:
			"Use the VFC-specific role terms below and submit the opportunity to the job board by August 21.",
		status: "Next",
	},
	{
		label: "Select a candidate",
		detail:
			"Interview eligible students, check references and obtain a verbal acceptance before the funding request.",
		status: "Next",
	},
	{
		label: "Submit the hiring request",
		detail:
			"Submit the candidate-specific request by August 28. Do not treat the subsidy as approved until VFC confirms it.",
		status: "Next",
	},
	{
		label: "Complete paid onboarding",
		detail:
			"Set up payroll, the employment agreement, safeguarding controls, supervised training and access limits.",
		status: "Next",
	},
];

const deadlines = [
	{
		date: "August 14, 2026",
		label: "New-employer application deadline",
		note: "Application submitted early and accepted to proceed.",
	},
	{
		date: "August 17, 2026",
		label: "Planned beginner group trial",
		note: "One trial session for the five current leads; no backup date advertised.",
	},
	{
		date: "August 21, 2026",
		label: "Internship job-board deadline",
		note: "May close earlier if VFC allocates all available funding.",
	},
	{
		date: "August 28, 2026",
		label: "Fall hiring-request deadline",
		note: "Candidate must already have verbally accepted the offer.",
	},
	{
		date: "September 14, 2026",
		label: "Latest internship start",
		note: "Also the proposed start of the new Monday beginner cohort.",
	},
	{
		date: "January 25, 2027",
		label: "Latest internship end",
		note: "The Fall 2026 placement must finish by this date.",
	},
	{
		date: "August 3, 2031",
		label: "Kids Learn AI business-name expiry",
		note: "Plan to review and renew the Ontario registration by May 2031.",
	},
];

const verificationDocuments = [
	"Proof of the company address used in the application",
	"Complete Articles of Incorporation for Opyjo Consulting Inc.",
	"Ontario corporation or company registration number",
	"Kids Learn AI Ontario business-name registration certificate",
	"Kids Learn AI website: https://kidslearnai.ca",
	"Government-issued identification for the founder/director",
];

const studentEligibility = [
	"Currently enrolled full-time or part-time at an accredited Canadian college or university",
	"Enrolled for at least the first 30 days of the internship",
	"Canadian citizen, permanent resident or protected refugee",
	"Not an international student or recent graduate for this funding stream",
	"At least 18 years old for the Kids Learn AI child-facing role",
];

const roleResponsibilities = [
	"Observe and co-teach live Python and responsible AI classes under the founder's supervision",
	"Prepare and test lessons, examples and age-appropriate coding activities",
	"Help learners debug code and participate safely during small-group classes",
	"Test curriculum and learning-platform experiences and document issues",
	"Draft learner progress notes and parent summaries for founder approval",
	"Participate in onboarding, safeguarding training and weekly coaching",
];

const safeguards = [
	"Founder remains present and responsible during every child-facing session",
	"Reference checks and an appropriate vulnerable-sector check before child-facing work",
	"No private messaging, meetings or personal accounts with learners",
	"No unnecessary access to family, learner, payment or administrative information",
	"Written confidentiality, privacy, acceptable-use and incident-escalation expectations",
];

const applicationAnswers = [
	{
		question: "Organization classification",
		answer: "Start-up; legally operated by Opyjo Consulting Inc.",
	},
	{
		question: "Industry",
		answer: "Other — Educational Technology (EdTech).",
	},
	{
		question: "Another VFC-eligible company",
		answer:
			"No. Kids Learn AI is a registered Ontario business name of Opyjo Consulting Inc., not a separate company.",
	},
	{
		question: "Full-time entry-level hiring",
		answer: "No. The current need is a part-time student internship.",
	},
	{
		question: "Employer of record",
		answer: "Opyjo Consulting Inc., operating as Kids Learn AI.",
	},
];

const statusStyles: Record<ChecklistStatus, string> = {
	Complete:
		"border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
	"In progress":
		"border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300",
	Next: "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300",
};

const statusIcons: Record<ChecklistStatus, typeof Circle> = {
	Complete: CheckCircle2,
	"In progress": Clock3,
	Next: Circle,
};

export default async function VfcInternshipPage() {
	await requireAdmin();

	return (
		<div className="space-y-4">
			<section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
				<div className="bg-linear-to-r from-indigo-700 via-blue-700 to-cyan-600 px-5 py-6 text-white lg:px-7">
					<div className="flex flex-wrap items-start justify-between gap-4">
						<div className="max-w-3xl">
							<div className="mb-3 flex flex-wrap items-center gap-2">
								<Badge className="border-white/25 bg-white/15 text-white hover:bg-white/15">
									Internal hiring workspace
								</Badge>
								<Badge className="border-amber-200 bg-amber-100 text-amber-900 hover:bg-amber-100">
									Verification in progress
								</Badge>
							</div>
							<h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
								Venture for Canada Internship
							</h1>
							<p className="mt-2 max-w-2xl text-sm leading-6 text-blue-50 lg:text-base">
								The employer application passed its initial review. This page
								tracks company verification, the wage-subsidy process, the Fall
								2026 role and the operating decisions needed before a student is
								hired.
							</p>
						</div>
						<div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm backdrop-blur-sm">
							<p className="font-semibold">Current stage</p>
							<p className="mt-1 text-blue-50">Persona company verification</p>
						</div>
					</div>
				</div>
			</section>

			<div className="grid gap-4 lg:grid-cols-3">
				<Card>
					<CardHeader className="pb-3">
						<CardTitle className="flex items-center gap-2 text-base">
							<Building2 className="h-5 w-5 text-indigo-600" />
							Employer identity
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3 text-sm">
						<div>
							<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
								Legal entity
							</p>
							<p className="mt-1 font-semibold">Opyjo Consulting Inc.</p>
						</div>
						<div>
							<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
								Registered business name
							</p>
							<p className="mt-1 font-semibold">Kids Learn AI</p>
							<p className="mt-1 text-xs leading-5 text-muted-foreground">
								Active–Registered · August 4, 2026–August 3, 2031
							</p>
							<p className="text-xs leading-5 text-muted-foreground">
								Primary activity: 611420 — Computer training
							</p>
						</div>
						<div>
							<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
								Business description
							</p>
							<p className="mt-1 leading-6 text-muted-foreground">
								Canadian EdTech start-up delivering live online Python and
								responsible AI classes for children ages 9–13.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="pb-3">
						<CardTitle className="flex items-center gap-2 text-base">
							<BadgeDollarSign className="h-5 w-5 text-emerald-600" />
							Funding terms
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3 text-sm">
						<p>
							<strong>Subsidy:</strong> 50% of eligible wages, up to $5,000 per
							student per term.
						</p>
						<p>
							<strong>Minimum pay:</strong> $18 per hour through payroll.
						</p>
						<p>
							<strong>Work format:</strong> Part-time or full-time; remote work
							is supported with supervision.
						</p>
						<p>
							<strong>Payment timing:</strong> Two installments, with the first
							half expected within 45 days of the placement start and the
							balance within 45 days after completion.
						</p>
						<p className="text-muted-foreground">
							The same placement cannot receive another federal wage subsidy.
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="pb-3">
						<CardTitle className="flex items-center gap-2 text-base">
							<UsersRound className="h-5 w-5 text-cyan-600" />
							Cohort context
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3 text-sm">
						<p>
							<strong>Current cohort:</strong> 5 students, continuing Term 2 on
							Wednesdays.
						</p>
						<p>
							<strong>New leads:</strong> 3 online inquiries and 2 referrals;
							one online lead reported finding Kids Learn AI through ChatGPT.
						</p>
						<p>
							<strong>New cohort:</strong> Separate beginner group starting at
							Term 1; target 4–6 paid learners before launch.
						</p>
						<p>
							<strong>Trial:</strong> One group session planned for Monday,
							August 17.
						</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-lg">
						<ListChecks className="h-5 w-5 text-indigo-600" />
						Application and hiring checklist
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-3 md:grid-cols-2">
						{checklist.map((item) => {
							const Icon = statusIcons[item.status];
							return (
								<div
									key={item.label}
									className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
								>
									<div className="flex items-start justify-between gap-3">
										<div className="flex items-start gap-3">
											<Icon className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
											<div>
												<p className="font-semibold">{item.label}</p>
												<p className="mt-1 text-sm leading-6 text-muted-foreground">
													{item.detail}
												</p>
											</div>
										</div>
										<Badge
											variant="outline"
											className={statusStyles[item.status]}
										>
											{item.status}
										</Badge>
									</div>
								</div>
							);
						})}
					</div>
				</CardContent>
			</Card>

			<div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg">
							<CalendarDays className="h-5 w-5 text-indigo-600" />
							Key dates
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3">
						{deadlines.map((deadline) => (
							<div
								key={`${deadline.date}-${deadline.label}`}
								className="grid gap-1 rounded-xl border border-slate-200 p-4 sm:grid-cols-[150px_1fr] dark:border-slate-800"
							>
								<p className="font-semibold text-indigo-700 dark:text-indigo-300">
									{deadline.date}
								</p>
								<div>
									<p className="font-semibold">{deadline.label}</p>
									<p className="mt-1 text-sm leading-6 text-muted-foreground">
										{deadline.note}
									</p>
								</div>
							</div>
						))}
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg">
							<FileCheck2 className="h-5 w-5 text-indigo-600" />
							Company verification
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<ul className="space-y-3 text-sm">
							{verificationDocuments.map((item) => (
								<li key={item} className="flex items-start gap-2">
									<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
									<span>{item}</span>
								</li>
							))}
						</ul>
						<div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
							<div className="flex items-start gap-2">
								<LockKeyhole className="mt-0.5 h-4 w-4 shrink-0" />
								<p>
									The VFC reference ID, government ID, company key, banking data
									and verification documents must remain outside this
									repository.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-lg">
						<BriefcaseBusiness className="h-5 w-5 text-indigo-600" />
						Proposed Fall 2026 role
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-5">
					<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
						<div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950">
							<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
								Title
							</p>
							<p className="mt-2 font-semibold">
								Python &amp; AI Education Intern
							</p>
						</div>
						<div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950">
							<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
								Hours
							</p>
							<p className="mt-2 font-semibold">8–10 hours per week</p>
						</div>
						<div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950">
							<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
								Proposed pay
							</p>
							<p className="mt-2 font-semibold">$20–$22 per hour</p>
						</div>
						<div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950">
							<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
								Format
							</p>
							<p className="mt-2 font-semibold">Part-time · Remote in Canada</p>
						</div>
					</div>
					<div className="grid gap-5 lg:grid-cols-2">
						<div>
							<h3 className="flex items-center gap-2 font-semibold">
								<Laptop className="h-4 w-4 text-indigo-600" />
								Meaningful responsibilities
							</h3>
							<ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
								{roleResponsibilities.map((item) => (
									<li key={item} className="flex items-start gap-2">
										<CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="flex items-center gap-2 font-semibold">
								<GraduationCap className="h-4 w-4 text-indigo-600" />
								VFC student eligibility
							</h3>
							<ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
								{studentEligibility.map((item) => (
									<li key={item} className="flex items-start gap-2">
										<CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100">
						The current public careers page is a general instructor posting.
						Create a dedicated VFC internship page with these exact terms before
						submitting it to the VFC job board.
					</div>
				</CardContent>
			</Card>

			<div className="grid gap-4 lg:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg">
							<ShieldCheck className="h-5 w-5 text-indigo-600" />
							Safeguarding baseline
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-3 text-sm leading-6">
							{safeguards.map((item) => (
								<li key={item} className="flex items-start gap-2">
									<ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-indigo-600" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg">
							<FileCheck2 className="h-5 w-5 text-indigo-600" />
							Recorded application answers
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3">
						{applicationAnswers.map((item) => (
							<div
								key={item.question}
								className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950"
							>
								<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
									{item.question}
								</p>
								<p className="mt-1 text-sm font-medium">{item.answer}</p>
							</div>
						))}
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-lg">
						<ExternalLink className="h-5 w-5 text-indigo-600" />
						Working links
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
						<a
							href="https://ventureforcanada.ca/employers/interns"
							target="_blank"
							rel="noreferrer"
							className="rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/30"
						>
							<p className="font-semibold">VFC employer program</p>
							<p className="mt-1 text-sm text-muted-foreground">
								Official program details
							</p>
						</a>
						<a
							href="https://www.canada.ca/en/employment-social-development/services/student-work-placements-wage-subsidies.html"
							target="_blank"
							rel="noreferrer"
							className="rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/30"
						>
							<p className="font-semibold">Federal SWPP</p>
							<p className="mt-1 text-sm text-muted-foreground">
								Government program record
							</p>
						</a>
						<Link
							href="/careers"
							className="rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/30"
						>
							<p className="font-semibold">Current careers page</p>
							<p className="mt-1 text-sm text-muted-foreground">
								General instructor posting
							</p>
						</Link>
						<Link
							href="/admin/funding-partnerships"
							className="rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/30"
						>
							<p className="font-semibold">Funding workspace</p>
							<p className="mt-1 text-sm text-muted-foreground">
								Related programs and partners
							</p>
						</Link>
					</div>
				</CardContent>
			</Card>

			<div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
				<AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
				<p>
					This workspace is an internal planning record, not a funding approval.
					Verify deadlines and terms with VFC before committing to employment or
					relying on the subsidy.
				</p>
			</div>
		</div>
	);
}
