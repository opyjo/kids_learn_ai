import {
	AlertTriangle,
	ArrowRight,
	CalendarClock,
	CheckCircle2,
	CircleHelp,
	ExternalLink,
	FileCheck2,
	Gauge,
	Lightbulb,
	ListChecks,
	Mic2,
	Presentation,
	ShieldQuestion,
	Sparkles,
	Target,
} from "lucide-react";
import Link from "next/link";
import { ApplicationCopyButton } from "@/components/admin/application-copy-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth-helpers";
import {
	DMZ_APPLICATION_ANSWERS,
	DMZ_APPLICATION_DETAILS,
	DMZ_ELIGIBILITY_ITEMS,
	DMZ_NINETY_SECOND_PITCH,
	DMZ_REQUIRED_INPUTS,
	DMZ_SELECTION_EVIDENCE,
	DMZ_WORKBACK_PLAN,
	type DmzReadinessStatus,
} from "@/lib/funding/dmz-application";

const statusStyles: Record<DmzReadinessStatus, string> = {
	Ready:
		"border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
	Confirm:
		"border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300",
	"Add evidence":
		"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300",
};

const statusIcons = {
	Ready: CheckCircle2,
	Confirm: CircleHelp,
	"Add evidence": FileCheck2,
} satisfies Record<DmzReadinessStatus, typeof CheckCircle2>;

export default async function DmzApplicationPage() {
	await requireAdmin();

	return (
		<div className="space-y-4 pb-12">
			<header className="overflow-hidden rounded-2xl bg-slate-950 px-4 py-5 text-white shadow-sm sm:px-6 sm:py-7">
				<div className="flex flex-wrap items-start justify-between gap-4">
					<div className="max-w-3xl">
						<div className="mb-3 flex flex-wrap items-center gap-2">
							<Badge className="border-amber-400/30 bg-amber-400/15 text-amber-100 hover:bg-amber-400/15">
								Conditional application
							</Badge>
							<span className="text-xs text-slate-400">
								Internal submit date:{" "}
								{DMZ_APPLICATION_DETAILS.internalSubmitDate}
							</span>
						</div>
						<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
							DMZ Black Innovation Summit application
						</h1>
						<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
							An application-ready evidence map, answer bank and pitch script
							for KidsLearnAI. Confirm the two founder-controlled eligibility
							gates, then replace every flagged input with verified facts before
							submission.
						</p>
					</div>
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-200">
						<Presentation className="h-6 w-6" />
					</div>
				</div>
			</header>

			<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
				{[
					["Official deadline", DMZ_APPLICATION_DETAILS.deadline],
					["Summit", DMZ_APPLICATION_DETAILS.eventDate],
					["Competition", DMZ_APPLICATION_DETAILS.value],
					["Internal target", DMZ_APPLICATION_DETAILS.internalSubmitDate],
				].map(([label, value]) => (
					<Card
						key={label}
						className="gap-2 border-slate-200 bg-white py-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
					>
						<CardContent className="px-4">
							<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
								{label}
							</p>
							<p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">
								{value}
							</p>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="flex flex-wrap gap-2">
				<a
					href={DMZ_APPLICATION_DETAILS.applicationUrl}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
				>
					Open DMZ application portal
					<ExternalLink className="h-3.5 w-3.5" />
				</a>
				<a
					href={DMZ_APPLICATION_DETAILS.officialUrl}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
				>
					Official 2026 details
					<ExternalLink className="h-3.5 w-3.5" />
				</a>
				<Link
					href="/admin/investor-deck"
					className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
				>
					Investor story source
					<ArrowRight className="h-3.5 w-3.5" />
				</Link>
			</div>

			<Card className="gap-4 border-amber-200 bg-amber-50/50 py-5 shadow-sm dark:border-amber-900 dark:bg-amber-950/15">
				<CardHeader className="px-4 py-0 sm:px-5">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<CardTitle className="flex items-center gap-2 text-lg">
							<ShieldQuestion className="h-5 w-5 text-amber-700 dark:text-amber-300" />
							Eligibility gate
						</CardTitle>
						<Badge className={statusStyles.Confirm}>
							2 founder confirmations
						</Badge>
					</div>
				</CardHeader>
				<CardContent className="grid gap-2 px-4 sm:px-5 lg:grid-cols-2">
					{DMZ_ELIGIBILITY_ITEMS.map((item) => {
						const Icon = statusIcons[item.status];

						return (
							<div
								key={item.title}
								className="rounded-xl border border-amber-200/80 bg-white p-3 dark:border-amber-900 dark:bg-gray-950"
							>
								<div className="flex items-start justify-between gap-3">
									<div className="flex items-start gap-2">
										<Icon className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300" />
										<p className="text-sm font-semibold text-slate-950 dark:text-white">
											{item.title}
										</p>
									</div>
									<Badge className={statusStyles[item.status]}>
										{item.status}
									</Badge>
								</div>
								<p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
									{item.detail}
								</p>
							</div>
						);
					})}
				</CardContent>
			</Card>

			<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
				<CardHeader className="px-4 py-0 sm:px-5">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<CardTitle className="flex items-center gap-2 text-lg">
							<Gauge className="h-5 w-5 text-blue-600" />
							Published selection scorecard
						</CardTitle>
						<Badge variant="secondary">6 DMZ criteria</Badge>
					</div>
				</CardHeader>
				<CardContent className="grid gap-3 px-4 sm:px-5 xl:grid-cols-2">
					{DMZ_SELECTION_EVIDENCE.map((item) => (
						<article
							key={item.criterion}
							className="rounded-xl border border-slate-200 p-4 dark:border-gray-800"
						>
							<h2 className="text-sm font-semibold text-slate-950 dark:text-white">
								{item.criterion}
							</h2>
							<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
								{item.case}
							</p>
							<div className="mt-3 flex gap-2 rounded-lg bg-blue-50 p-3 text-xs leading-5 text-blue-950 dark:bg-blue-950/30 dark:text-blue-100">
								<Target className="mt-0.5 h-3.5 w-3.5 shrink-0" />
								<span>{item.evidence}</span>
							</div>
						</article>
					))}
				</CardContent>
			</Card>

			<section className="space-y-3" aria-labelledby="answer-bank-heading">
				<div className="flex flex-wrap items-end justify-between gap-2 px-1">
					<div>
						<p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
							Paste-ready working copy
						</p>
						<h2
							id="answer-bank-heading"
							className="mt-1 text-xl font-semibold text-slate-950 dark:text-white"
						>
							Application answer bank
						</h2>
					</div>
					<p className="max-w-xl text-xs leading-5 text-slate-500 dark:text-slate-400">
						The portal questions and limits are visible only after login. Match
						these drafts to the exact prompts, then trim and personalize them
						rather than submitting the full bank unchanged.
					</p>
				</div>

				{DMZ_APPLICATION_ANSWERS.map((answer) => (
					<Card
						key={answer.id}
						id={answer.id}
						className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
					>
						<CardHeader className="px-4 py-0 sm:px-5">
							<div className="flex flex-wrap items-start justify-between gap-3">
								<div>
									<CardTitle className="text-base">{answer.label}</CardTitle>
									<p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
										{answer.promptFit}
									</p>
								</div>
								<ApplicationCopyButton text={answer.draft} />
							</div>
						</CardHeader>
						<CardContent className="space-y-3 px-4 sm:px-5">
							<p className="whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-800 dark:bg-gray-950 dark:text-slate-100">
								{answer.draft}
							</p>
							{answer.needsFounderInput && (
								<div className="flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100">
									<AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700 dark:text-amber-300" />
									<span>
										<strong>Founder input required:</strong>{" "}
										{answer.needsFounderInput}
									</span>
								</div>
							)}
						</CardContent>
					</Card>
				))}
			</section>

			<div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
				<Card className="gap-4 border-purple-200 bg-purple-50/50 py-5 shadow-sm dark:border-purple-900 dark:bg-purple-950/15">
					<CardHeader className="px-4 py-0 sm:px-5">
						<div className="flex flex-wrap items-start justify-between gap-3">
							<div>
								<CardTitle className="flex items-center gap-2 text-lg">
									<Mic2 className="h-5 w-5 text-purple-700 dark:text-purple-300" />
									90-second pitch draft
								</CardTitle>
								<p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
									Use for an application video or first-round audition. Adjust
									to any official finalist brief.
								</p>
							</div>
							<ApplicationCopyButton
								text={DMZ_NINETY_SECOND_PITCH}
								label="Copy pitch"
							/>
						</div>
					</CardHeader>
					<CardContent className="px-4 sm:px-5">
						<p className="rounded-xl bg-white p-4 text-sm leading-7 text-slate-800 dark:bg-gray-950 dark:text-slate-100">
							{DMZ_NINETY_SECOND_PITCH}
						</p>
						<div className="mt-3 flex gap-2 text-xs leading-5 text-purple-950 dark:text-purple-100">
							<Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" />
							<span>
								Personalize the final founder paragraph and replace target-only
								traction with verified evidence before recording.
							</span>
						</div>
					</CardContent>
				</Card>

				<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
					<CardHeader className="px-4 py-0 sm:px-5">
						<CardTitle className="flex items-center gap-2 text-lg">
							<ListChecks className="h-5 w-5 text-amber-600" />
							Required founder inputs
						</CardTitle>
					</CardHeader>
					<CardContent className="px-4 sm:px-5">
						<ul className="space-y-2">
							{DMZ_REQUIRED_INPUTS.map((item) => (
								<li
									key={item}
									className="flex gap-2 rounded-lg bg-slate-50 p-2.5 text-xs leading-5 text-slate-700 dark:bg-gray-950 dark:text-slate-200"
								>
									<CircleHelp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			</div>

			<Card className="gap-4 border-slate-950 bg-slate-950 py-5 text-white shadow-sm dark:border-slate-800">
				<CardHeader className="px-4 py-0 sm:px-5">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<CardTitle className="flex items-center gap-2 text-lg">
							<CalendarClock className="h-5 w-5 text-emerald-300" />
							Workback plan
						</CardTitle>
						<Badge className="border-white/15 bg-white/10 text-slate-100 hover:bg-white/10">
							Submit August 22
						</Badge>
					</div>
				</CardHeader>
				<CardContent className="px-4 sm:px-5">
					<ol className="grid gap-2 lg:grid-cols-2">
						{DMZ_WORKBACK_PLAN.map((item, index) => (
							<li
								key={item.date}
								className="flex gap-3 rounded-xl bg-white/5 p-3 text-sm leading-6 text-slate-200"
							>
								<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-semibold text-emerald-200">
									{index + 1}
								</span>
								<span>
									<strong className="block text-white">{item.date}</strong>
									{item.task}
								</span>
							</li>
						))}
					</ol>
				</CardContent>
			</Card>

			<div className="flex gap-2 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-950 dark:border-blue-900 dark:bg-blue-950/20 dark:text-blue-100">
				<Sparkles className="mt-1 h-4 w-4 shrink-0 text-blue-700 dark:text-blue-300" />
				<p>
					<strong>Final narrative test:</strong> every answer should reinforce
					one story—KidsLearnAI has built the product and learning system;
					September is the disciplined test of repeatable demand; DMZ can help
					turn that founder-led system into a scalable venture.
				</p>
			</div>
		</div>
	);
}
