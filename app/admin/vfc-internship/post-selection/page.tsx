import {
	AlertTriangle,
	ArrowRight,
	BadgeDollarSign,
	CalendarClock,
	CheckCircle2,
	ClipboardCheck,
	FileCheck2,
	GraduationCap,
	LockKeyhole,
	Mail,
	ShieldCheck,
	UserCheck,
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
import { getSupabaseServerClient } from "@/lib/supabase/server";

const eligibilityChecks = [
	"At least 18 years old for this child-facing role",
	"Canadian citizen, permanent resident, or protected refugee",
	"Enrolled in an eligible Canadian post-secondary program",
	"Will remain enrolled for at least the first 30 days of the internship",
	"At arm's length from the employer, with no close family, personal, or business relationship",
];

const processStages = [
	{
		stage: "Immediate",
		title: "Confirm eligibility",
		detail:
			"Verify every VFC eligibility item before treating the selection as final. Record the result securely without adding identity documents to the repository.",
	},
	{
		stage: "Immediate",
		title: "Make a conditional verbal offer",
		detail:
			"Contact the candidate, explain the role terms and funding condition, confirm Monday and Wednesday availability, ask about accommodations, and obtain a clear verbal acceptance.",
	},
	{
		stage: "Urgent",
		title: "Confirm timing with VFC",
		detail:
			"The recorded placement start window closes September 14, 2026. Confirm the acceptable start and approval sequence with VFC before committing to a date.",
	},
	{
		stage: "After acceptance",
		title: "Submit the VFC Hiring Request",
		detail:
			"Submit one Hiring Request for the accepted candidate immediately. The recorded deadline is September 28, 2026, or earlier if the available funding is fully allocated.",
	},
	{
		stage: "In parallel",
		title: "Complete pre-employment checks",
		detail:
			"Get consent, complete reference checks, and begin the appropriate vulnerable-sector check. Do not schedule child-facing duties until both are satisfactorily complete.",
	},
	{
		stage: "Pending VFC",
		title: "Receive funding approval",
		detail:
			"VFC may take up to 15 business days to process the Hiring Request. Keep the offer conditional until funding and the required checks are confirmed.",
	},
	{
		stage: "After approval",
		title: "Complete the formal paperwork",
		detail:
			"Sign the Offer of Employment and complete the VFC Funding Contract and Wage Subsidy Form. Set up payroll and collect tax documents through an approved secure process.",
	},
	{
		stage: "Before access",
		title: "Sign workplace agreements",
		detail:
			"Complete confidentiality, privacy, acceptable-use, safeguarding, and incident-escalation agreements before providing learner or company-system access.",
	},
	{
		stage: "Before first class",
		title: "Run onboarding and supervised practice",
		detail:
			"Cover child safeguarding, responsible AI use, curriculum, teaching tools, class procedures, and escalation. Include a mock lesson or supervised practice session.",
	},
	{
		stage: "First week",
		title: "Start with a structured schedule",
		detail:
			"Plan founder orientation, curriculum review, class observation, lesson preparation, and supervised co-teaching. Keep the founder present for every child-facing session.",
	},
	{
		stage: "Once secure",
		title: "Close the hiring loop",
		detail:
			"Update the internal tracker and notify the other candidates respectfully. Keep backup candidates open until verbal acceptance, checks, and funding are reasonably secure.",
	},
];

const roleTerms = [
	{ label: "Role", value: "Python & AI Education Intern" },
	{ label: "Pay", value: "$20/hour through payroll" },
	{ label: "Hours", value: "Approximately 10 hours/week" },
	{ label: "Format", value: "Remote in Canada" },
	{ label: "Live classes", value: "Monday beginner · Wednesday Term 2" },
	{ label: "Offer status", value: "Conditional on checks and VFC approval" },
];

const onboardingTopics = [
	"Child safeguarding and incident escalation",
	"No private messages, meetings, or personal accounts with learners",
	"Learner privacy and responsible AI use",
	"Curriculum, teaching platform, and class procedures",
	"Founder-supervised mock teaching and co-teaching",
];

export default async function PostSelectionPage() {
	await requireAdmin();
	const supabase = await getSupabaseServerClient();
	const { data: selectedCandidates, error } = await supabase
		.from("internship_applications")
		.select("id, full_name, email, university, program, updated_at")
		.eq("status", "selected")
		.order("updated_at", { ascending: false });

	if (error) {
		console.error("Error fetching selected internship candidates:", error);
	}

	return (
		<div className="min-w-0 space-y-6">
			<section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
				<div className="bg-linear-to-r from-teal-700 via-cyan-700 to-blue-700 px-5 py-6 text-white lg:px-7">
					<div className="flex flex-wrap items-start justify-between gap-4">
						<div className="max-w-3xl">
							<div className="mb-3 flex flex-wrap gap-2">
								<Badge className="border-white/25 bg-white/15 text-white hover:bg-white/15">
									VFC hiring
								</Badge>
								<Badge className="border-amber-200 bg-amber-100 text-amber-950 hover:bg-amber-100">
									Action required
								</Badge>
							</div>
							<h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
								Post-selection Process
							</h1>
							<p className="mt-2 max-w-2xl text-sm leading-6 text-cyan-50 lg:text-base">
								A reusable checklist for moving the selected intern from a
								conditional decision through VFC approval, employment paperwork,
								and safe classroom onboarding.
							</p>
						</div>
						<Link
							href="/admin/vfc-internship/applications"
							className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
						>
							View applications
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</section>

			<div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg">
							<UserCheck className="h-5 w-5 text-teal-600" />
							Current selection
						</CardTitle>
						<CardDescription>
							Loaded from applications marked “Selected.”
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-3">
						{selectedCandidates?.length ? (
							selectedCandidates.map((candidate) => (
								<div
									key={candidate.id}
									className="rounded-xl border border-teal-200 bg-teal-50 p-4 dark:border-teal-900 dark:bg-teal-950/30"
								>
									<div className="flex flex-wrap items-start justify-between gap-2">
										<div>
											<p className="font-semibold text-teal-950 dark:text-teal-100">
												{candidate.full_name}
											</p>
											<p className="mt-1 text-sm text-teal-900/75 dark:text-teal-100/75">
												{candidate.program} · {candidate.university}
											</p>
										</div>
										<Badge className="bg-teal-700 text-white hover:bg-teal-700">
											Selected
										</Badge>
									</div>
									<a
										href={`mailto:${candidate.email}`}
										className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-teal-800 hover:underline dark:text-teal-300"
									>
										<Mail className="h-4 w-4" />
										{candidate.email}
									</a>
								</div>
							))
						) : (
							<div className="rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
								No application is currently marked as selected. Choose a
								candidate in Intern Applications before starting this process.
							</div>
						)}
						{error ? (
							<p className="text-sm text-red-600 dark:text-red-400">
								The selected candidate could not be loaded. Check Intern
								Applications directly.
							</p>
						) : null}
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg">
							<BadgeDollarSign className="h-5 w-5 text-emerald-600" />
							Offer talking points
						</CardTitle>
						<CardDescription>
							Use these terms consistently in the verbal and written offer.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-3 sm:grid-cols-2">
							{roleTerms.map((term) => (
								<div
									key={term.label}
									className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950"
								>
									<p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
										{term.label}
									</p>
									<p className="mt-1 text-sm font-semibold">{term.value}</p>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
				<CalendarClock className="mt-0.5 h-5 w-5 shrink-0" />
				<div>
					<p className="font-semibold">Timing is urgent</p>
					<p className="mt-1 leading-6">
						The recorded internship start window closes September 14, 2026. The
						Hiring Request closes September 28, 2026, or earlier if funding is
						allocated. Confirm the sequence directly with VFC.
					</p>
				</div>
			</div>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-lg">
						<ClipboardCheck className="h-5 w-5 text-blue-600" />
						Complete post-selection workflow
					</CardTitle>
					<CardDescription>
						Follow the stages in order; items marked “In parallel” can begin as
						soon as the candidate accepts.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ol className="space-y-3">
						{processStages.map((item, index) => (
							<li
								key={item.title}
								className="grid gap-3 rounded-xl border border-slate-200 p-4 sm:grid-cols-[2.25rem_1fr_auto] dark:border-slate-800"
							>
								<div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
									{index + 1}
								</div>
								<div>
									<p className="font-semibold">{item.title}</p>
									<p className="mt-1 text-sm leading-6 text-muted-foreground">
										{item.detail}
									</p>
								</div>
								<Badge variant="outline" className="h-fit w-fit">
									{item.stage}
								</Badge>
							</li>
						))}
					</ol>
				</CardContent>
			</Card>

			<div className="grid gap-4 lg:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg">
							<GraduationCap className="h-5 w-5 text-blue-600" />
							Eligibility verification
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-3 text-sm leading-6">
							{eligibilityChecks.map((item) => (
								<li key={item} className="flex items-start gap-2">
									<CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg">
							<ShieldCheck className="h-5 w-5 text-indigo-600" />
							Onboarding and safeguards
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-3 text-sm leading-6">
							{onboardingTopics.map((item) => (
								<li key={item} className="flex items-start gap-2">
									<ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-indigo-600" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-4 lg:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg">
							<FileCheck2 className="h-5 w-5 text-teal-600" />
							Required records
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2 text-sm leading-6">
						<p>Reference-check results and vulnerable-sector confirmation</p>
						<p>VFC Hiring Request and approval correspondence</p>
						<p>Signed employment offer, funding contract, and subsidy form</p>
						<p>
							Payroll, tax, confidentiality, privacy, and safeguarding records
						</p>
					</CardContent>
				</Card>

				<Card className="border-amber-200 dark:border-amber-900">
					<CardHeader>
						<CardTitle className="flex items-center gap-2 text-lg">
							<LockKeyhole className="h-5 w-5 text-amber-700 dark:text-amber-400" />
							Secure handling
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3 text-sm leading-6">
						<p>
							Keep government ID, SIN, banking information, background-check
							documents, and VFC credentials outside this repository.
						</p>
						<div className="flex items-start gap-2 text-amber-800 dark:text-amber-300">
							<AlertTriangle className="mt-1 h-4 w-4 shrink-0" />
							<p>
								Grant system access only after agreements are signed, using the
								least access needed.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
