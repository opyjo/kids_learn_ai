import {
	AlertTriangle,
	ArrowRight,
	BadgeCheck,
	CalendarClock,
	CheckCircle2,
	CircleHelp,
	ExternalLink,
	FileCheck2,
	FileStack,
	FlaskConical,
	HandCoins,
	Handshake,
	LibraryBig,
	ListChecks,
	Rocket,
	ShieldCheck,
	Sparkles,
	Target,
} from "lucide-react";
import Link from "next/link";
import { ApplicationCopyButton } from "@/components/admin/application-copy-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth-helpers";
import {
	DEFERRED_FUNDING_CHECKLISTS,
	FUNDING_PROGRAM_LANES,
	FUNDING_WORKBACK_PLAN,
	type FundingDraft,
	type FundingEvidenceStatus,
	IRAP_CALL_SCRIPT,
	IRAP_DETAILS,
	IRAP_EXCLUDED_WORK,
	IRAP_PROJECT_BRIEF,
	IRAP_REQUIRED_PACKAGE,
	OCI_DMAP_ANSWERS,
	OCI_DMAP_CHECKLIST,
	OCI_DMAP_DETAILS,
	PARTNER_DUE_DILIGENCE,
	PARTNER_MASTER_ONE_PAGER,
	PARTNER_OUTREACH_EMAIL,
	PARTNER_PROGRAM_ADAPTATIONS,
	SHARED_FUNDING_EVIDENCE,
} from "@/lib/funding/application-workspace";

const evidenceStyles: Record<FundingEvidenceStatus, string> = {
	Ready:
		"border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
	Confirm:
		"border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300",
	"Add evidence":
		"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300",
};

function DraftCard({ draft }: { draft: FundingDraft }) {
	return (
		<Card
			id={draft.id}
			className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
		>
			<CardHeader className="px-4 py-0 sm:px-5">
				<div className="flex flex-wrap items-start justify-between gap-3">
					<div>
						<CardTitle className="text-base">{draft.label}</CardTitle>
						<p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
							{draft.promptFit}
						</p>
					</div>
					<ApplicationCopyButton text={draft.draft} />
				</div>
			</CardHeader>
			<CardContent className="space-y-3 px-4 sm:px-5">
				<p className="whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-800 dark:bg-gray-950 dark:text-slate-100">
					{draft.draft}
				</p>
				{draft.warning ? (
					<div className="flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100">
						<AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700 dark:text-amber-300" />
						<span>{draft.warning}</span>
					</div>
				) : null}
			</CardContent>
		</Card>
	);
}

export default async function FundingApplicationsPage() {
	await requireAdmin();

	return (
		<div className="space-y-4 pb-12">
			<header className="overflow-hidden rounded-2xl bg-slate-950 px-4 py-5 text-white shadow-sm sm:px-6 sm:py-7">
				<div className="flex flex-wrap items-start justify-between gap-4">
					<div className="max-w-3xl">
						<div className="mb-3 flex flex-wrap items-center gap-2">
							<Badge className="border-emerald-400/30 bg-emerald-400/15 text-emerald-100 hover:bg-emerald-400/15">
								Application workspace
							</Badge>
							<span className="text-xs text-slate-400">
								Official guidance reviewed August 3, 2026
							</span>
						</div>
						<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
							Funding Application Workspace
						</h1>
						<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
							One evidence library feeding a direct OCI application, an IRAP
							technical brief and tailored nonprofit-partner packages for
							CanCode, OTF and PromoScience.
						</p>
					</div>
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200">
						<FileStack className="h-6 w-6" />
					</div>
				</div>
			</header>

			<div className="flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100">
				<AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300" />
				<p>
					<strong>OCI timing correction:</strong> DMAP is first-come,
					first-served while funds last. August 10 is the current Technology
					Demonstration Program date, not a DMAP opening date. Confirm company
					eligibility and submit the DMAP intake promptly.
				</p>
			</div>

			<nav
				aria-label="Funding workspace sections"
				className="flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm dark:border-gray-800 dark:bg-gray-900"
			>
				{[
					["Evidence library", "#evidence-library"],
					["OCI DMAP", "#oci-dmap"],
					["NRC IRAP", "#irap"],
					["Partner kits", "#partner-kits"],
					["Workback", "#workback"],
				].map(([label, href]) => (
					<a
						key={href}
						href={href}
						className="rounded-md px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-gray-800 dark:hover:text-white"
					>
						{label}
					</a>
				))}
				<Link
					href="/admin/dmz-application"
					className="rounded-md px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-blue-950/30"
				>
					DMZ kit
				</Link>
			</nav>

			<div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
				{FUNDING_PROGRAM_LANES.map((program) => (
					<a
						key={program.name}
						href={program.anchor}
						className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50/40 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800 dark:hover:bg-blue-950/20"
					>
						<p className="text-sm font-semibold text-slate-950 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
							{program.name}
						</p>
						<p className="mt-1 text-[11px] font-medium text-blue-700 dark:text-blue-300">
							{program.status}
						</p>
						<p className="mt-3 text-xs font-semibold text-slate-800 dark:text-slate-100">
							{program.timing}
						</p>
						<p className="mt-1 text-xs text-emerald-700 dark:text-emerald-300">
							{program.value}
						</p>
						<p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
							{program.fit}
						</p>
					</a>
				))}
			</div>

			<Card
				id="evidence-library"
				className="scroll-mt-24 gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
			>
				<CardHeader className="px-4 py-0 sm:px-5">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<div>
							<CardTitle className="flex items-center gap-2 text-lg">
								<LibraryBig className="h-5 w-5 text-blue-600" />
								Shared funding evidence library
							</CardTitle>
							<p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
								Update each fact once, then reuse it across tailored
								applications.
							</p>
						</div>
						<Badge variant="secondary">12 evidence blocks</Badge>
					</div>
				</CardHeader>
				<CardContent className="grid gap-2 px-4 sm:px-5 lg:grid-cols-2">
					{SHARED_FUNDING_EVIDENCE.map((item) => (
						<article
							key={item.label}
							className="rounded-xl border border-slate-200 p-3 dark:border-gray-800"
						>
							<div className="flex flex-wrap items-start justify-between gap-2">
								<div>
									<p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
										{item.category}
									</p>
									<h2 className="mt-0.5 text-sm font-semibold text-slate-950 dark:text-white">
										{item.label}
									</h2>
								</div>
								<Badge className={evidenceStyles[item.status]}>
									{item.status}
								</Badge>
							</div>
							<p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
								{item.value}
							</p>
							<div className="mt-2 flex flex-wrap gap-1">
								{item.usedBy.map((program) => (
									<span
										key={program}
										className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-gray-800 dark:text-slate-300"
									>
										{program}
									</span>
								))}
							</div>
						</article>
					))}
				</CardContent>
			</Card>

			<section id="oci-dmap" className="scroll-mt-24 space-y-3">
				<Card className="gap-4 border-emerald-200 bg-emerald-50/50 py-5 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/15">
					<CardHeader className="px-4 py-0 sm:px-5">
						<div className="flex flex-wrap items-start justify-between gap-3">
							<div>
								<Badge className="mb-2 border-emerald-200 bg-white text-emerald-800 hover:bg-white dark:border-emerald-900 dark:bg-gray-950 dark:text-emerald-300">
									Direct application
								</Badge>
								<CardTitle className="flex items-center gap-2 text-xl">
									<Rocket className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
									{OCI_DMAP_DETAILS.name}
								</CardTitle>
								<p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700 dark:text-slate-200">
									{OCI_DMAP_DETAILS.fitGate}
								</p>
							</div>
							<div className="text-right text-xs">
								<p className="font-semibold text-emerald-800 dark:text-emerald-300">
									{OCI_DMAP_DETAILS.value}
								</p>
								<p className="mt-1 text-slate-500 dark:text-slate-400">
									{OCI_DMAP_DETAILS.timing}
								</p>
							</div>
						</div>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-2 px-4 sm:px-5">
						<a
							href={OCI_DMAP_DETAILS.applyUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 rounded-md bg-emerald-700 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-800"
						>
							Open OCI intake
							<ExternalLink className="h-3.5 w-3.5" />
						</a>
						<a
							href={OCI_DMAP_DETAILS.officialUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-white px-3 py-2 text-xs font-semibold text-emerald-800 hover:bg-emerald-50 dark:border-emerald-900 dark:bg-gray-950 dark:text-emerald-300"
						>
							Official guidance
							<ExternalLink className="h-3.5 w-3.5" />
						</a>
					</CardContent>
				</Card>

				<div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
					<div className="space-y-3">
						{OCI_DMAP_ANSWERS.map((draft) => (
							<DraftCard key={draft.id} draft={draft} />
						))}
					</div>
					<aside className="xl:sticky xl:top-24 xl:self-start">
						<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
							<CardHeader className="px-4 py-0">
								<CardTitle className="flex items-center gap-2 text-base">
									<ListChecks className="h-4 w-4 text-emerald-700" />
									Before submitting
								</CardTitle>
							</CardHeader>
							<CardContent className="px-4">
								<ol className="space-y-2">
									{OCI_DMAP_CHECKLIST.map((item, index) => (
										<li
											key={item}
											className="flex gap-2 text-xs leading-5 text-slate-600 dark:text-slate-300"
										>
											<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
												{index + 1}
											</span>
											<span>{item}</span>
										</li>
									))}
								</ol>
							</CardContent>
						</Card>
					</aside>
				</div>
			</section>

			<section id="irap" className="scroll-mt-24 space-y-3">
				<Card className="gap-4 border-purple-200 bg-purple-50/50 py-5 shadow-sm dark:border-purple-900 dark:bg-purple-950/15">
					<CardHeader className="px-4 py-0 sm:px-5">
						<div className="flex flex-wrap items-start justify-between gap-3">
							<div>
								<Badge className="mb-2 border-purple-200 bg-white text-purple-800 hover:bg-white dark:border-purple-900 dark:bg-gray-950 dark:text-purple-300">
									Technical fit required
								</Badge>
								<CardTitle className="flex items-center gap-2 text-xl">
									<FlaskConical className="h-5 w-5 text-purple-700 dark:text-purple-300" />
									{IRAP_DETAILS.name}
								</CardTitle>
								<p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700 dark:text-slate-200">
									{IRAP_DETAILS.fitGate}
								</p>
							</div>
							<a
								href={IRAP_DETAILS.officialUrl}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-800 hover:underline dark:text-purple-300"
							>
								Official guidance
								<ExternalLink className="h-3.5 w-3.5" />
							</a>
						</div>
					</CardHeader>
				</Card>

				<div className="grid gap-4 xl:grid-cols-2">
					<Card className="gap-4 border-purple-200 bg-white py-5 shadow-sm dark:border-purple-900 dark:bg-gray-900">
						<CardHeader className="px-4 py-0 sm:px-5">
							<div className="flex flex-wrap items-start justify-between gap-3">
								<div>
									<CardTitle className="text-base">First-call script</CardTitle>
									<p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
										{IRAP_DETAILS.contact}
									</p>
								</div>
								<ApplicationCopyButton
									text={IRAP_CALL_SCRIPT}
									label="Copy script"
								/>
							</div>
						</CardHeader>
						<CardContent className="px-4 sm:px-5">
							<p className="rounded-xl bg-purple-50 p-4 text-sm leading-7 text-slate-800 dark:bg-purple-950/20 dark:text-slate-100">
								{IRAP_CALL_SCRIPT}
							</p>
						</CardContent>
					</Card>

					<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
						<CardHeader className="px-4 py-0 sm:px-5">
							<CardTitle className="flex items-center gap-2 text-base">
								<FileCheck2 className="h-4 w-4 text-purple-700" />
								IRAP readiness package
							</CardTitle>
						</CardHeader>
						<CardContent className="px-4 sm:px-5">
							<ul className="grid gap-2 sm:grid-cols-2">
								{IRAP_REQUIRED_PACKAGE.map((item) => (
									<li
										key={item}
										className="flex gap-2 rounded-lg bg-slate-50 p-2.5 text-xs leading-5 text-slate-700 dark:bg-gray-950 dark:text-slate-200"
									>
										<CircleHelp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-purple-700" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>

				<div className="grid gap-3 xl:grid-cols-2">
					{IRAP_PROJECT_BRIEF.map((draft) => (
						<DraftCard key={draft.id} draft={draft} />
					))}
				</div>

				<Card className="gap-4 border-rose-200 bg-rose-50/50 py-5 shadow-sm dark:border-rose-900 dark:bg-rose-950/15">
					<CardHeader className="px-4 py-0 sm:px-5">
						<CardTitle className="flex items-center gap-2 text-base">
							<AlertTriangle className="h-4 w-4 text-rose-700" />
							Keep outside the IRAP project
						</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-2 px-4 sm:grid-cols-2 sm:px-5 lg:grid-cols-3">
						{IRAP_EXCLUDED_WORK.map((item) => (
							<p
								key={item}
								className="rounded-lg bg-white p-2.5 text-xs leading-5 text-slate-700 dark:bg-gray-950 dark:text-slate-200"
							>
								{item}
							</p>
						))}
					</CardContent>
				</Card>
			</section>

			<section id="partner-kits" className="scroll-mt-24 space-y-3">
				<div className="rounded-2xl bg-blue-950 p-5 text-white shadow-sm sm:p-6">
					<div className="flex flex-wrap items-start justify-between gap-3">
						<div>
							<Badge className="mb-2 border-blue-300/20 bg-blue-300/10 text-blue-100 hover:bg-blue-300/10">
								Partner-led applications
							</Badge>
							<h2 className="flex items-center gap-2 text-xl font-semibold">
								<Handshake className="h-5 w-5 text-blue-200" />
								Reusable nonprofit and institutional partner kit
							</h2>
							<p className="mt-2 max-w-3xl text-sm leading-6 text-blue-100/80">
								KidsLearnAI supplies delivery capability. The eligible lead owns
								the application, community case, funds and reporting
								obligations.
							</p>
						</div>
						<HandCoins className="h-8 w-8 text-blue-200" />
					</div>
				</div>

				<div className="grid gap-4 xl:grid-cols-2">
					<Card className="gap-4 border-blue-200 bg-white py-5 shadow-sm dark:border-blue-900 dark:bg-gray-900">
						<CardHeader className="px-4 py-0 sm:px-5">
							<div className="flex flex-wrap items-start justify-between gap-3">
								<div>
									<CardTitle className="text-base">
										Master one-page concept
									</CardTitle>
									<p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
										Replace every bracketed field with lead-approved facts.
									</p>
								</div>
								<ApplicationCopyButton
									text={PARTNER_MASTER_ONE_PAGER}
									label="Copy concept"
								/>
							</div>
						</CardHeader>
						<CardContent className="px-4 sm:px-5">
							<p className="max-h-[42rem] overflow-y-auto whitespace-pre-wrap rounded-xl bg-blue-50 p-4 text-sm leading-7 text-slate-800 dark:bg-blue-950/20 dark:text-slate-100">
								{PARTNER_MASTER_ONE_PAGER}
							</p>
						</CardContent>
					</Card>

					<div className="space-y-4">
						<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
							<CardHeader className="px-4 py-0">
								<div className="flex flex-wrap items-start justify-between gap-3">
									<div>
										<CardTitle className="text-base">
											Partner outreach email
										</CardTitle>
										<p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
											Personalize the program, mandate fit and decision date.
										</p>
									</div>
									<ApplicationCopyButton
										text={PARTNER_OUTREACH_EMAIL}
										label="Copy email"
									/>
								</div>
							</CardHeader>
							<CardContent className="px-4">
								<p className="whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-800 dark:bg-gray-950 dark:text-slate-100">
									{PARTNER_OUTREACH_EMAIL}
								</p>
							</CardContent>
						</Card>

						<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
							<CardHeader className="px-4 py-0">
								<CardTitle className="flex items-center gap-2 text-base">
									<ShieldCheck className="h-4 w-4 text-blue-700" />
									Partner due diligence
								</CardTitle>
							</CardHeader>
							<CardContent className="px-4">
								<ul className="space-y-2">
									{PARTNER_DUE_DILIGENCE.map((item) => (
										<li
											key={item}
											className="flex gap-2 text-xs leading-5 text-slate-600 dark:text-slate-300"
										>
											<CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-700" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>

				<div className="grid gap-4 xl:grid-cols-3">
					{PARTNER_PROGRAM_ADAPTATIONS.map((program) => (
						<Card
							key={program.id}
							id={program.id}
							className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
						>
							<CardHeader className="px-4 py-0">
								<div className="flex items-start justify-between gap-3">
									<div>
										<CardTitle className="text-base">{program.name}</CardTitle>
										<p className="mt-1 text-xs font-semibold text-rose-700 dark:text-rose-300">
											{program.deadline}
										</p>
									</div>
									<a
										href={program.officialUrl}
										target="_blank"
										rel="noreferrer"
										aria-label={`Open official ${program.name} guidance`}
									>
										<ExternalLink className="h-4 w-4 text-blue-700" />
									</a>
								</div>
								<p className="mt-2 text-xs font-medium text-emerald-700 dark:text-emerald-300">
									{program.value}
								</p>
							</CardHeader>
							<CardContent className="space-y-3 px-4">
								<div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100">
									<strong>Lead gate:</strong> {program.gate}
								</div>
								<ul className="space-y-1.5">
									{program.requirements.map((item) => (
										<li
											key={item}
											className="flex gap-2 text-xs leading-5 text-slate-600 dark:text-slate-300"
										>
											<BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-700" />
											<span>{item}</span>
										</li>
									))}
								</ul>
								<div className="rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-700 dark:bg-gray-950 dark:text-slate-200">
									<strong>Tailoring:</strong> {program.adaptation}
								</div>
								<div className="flex gap-2 rounded-lg bg-blue-50 p-3 text-xs leading-5 text-blue-950 dark:bg-blue-950/20 dark:text-blue-100">
									<ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
									<span>{program.nextMove}</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<div className="grid gap-4 xl:grid-cols-3">
				{DEFERRED_FUNDING_CHECKLISTS.map((group) => (
					<Card
						key={group.name}
						className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
					>
						<CardHeader className="px-4 py-0">
							<CardTitle className="flex items-center gap-2 text-base">
								<CalendarClock className="h-4 w-4 text-slate-500" />
								{group.name}
							</CardTitle>
							<p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
								{group.trigger}
							</p>
						</CardHeader>
						<CardContent className="px-4">
							<ul className="space-y-2">
								{group.items.map((item) => (
									<li
										key={item}
										className="flex gap-2 text-xs leading-5 text-slate-600 dark:text-slate-300"
									>
										<Target className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				))}
			</div>

			<Card
				id="workback"
				className="scroll-mt-24 gap-4 border-slate-950 bg-slate-950 py-5 text-white shadow-sm dark:border-slate-800"
			>
				<CardHeader className="px-4 py-0 sm:px-5">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<CardTitle className="flex items-center gap-2 text-lg">
							<CalendarClock className="h-5 w-5 text-emerald-300" />
							Cross-program workback plan
						</CardTitle>
						<Badge className="border-white/15 bg-white/10 text-slate-100 hover:bg-white/10">
							Deadline-aware
						</Badge>
					</div>
				</CardHeader>
				<CardContent className="px-4 sm:px-5">
					<ol className="grid gap-2 lg:grid-cols-2">
						{FUNDING_WORKBACK_PLAN.map((item, index) => (
							<li
								key={item.date}
								className="flex gap-3 rounded-xl bg-white/5 p-3 text-sm leading-6 text-slate-200"
							>
								<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-semibold text-emerald-200">
									{index + 1}
								</span>
								<span>
									<strong className="block text-white">{item.date}</strong>
									{item.action}
								</span>
							</li>
						))}
					</ol>
				</CardContent>
			</Card>

			<div className="flex gap-2 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-950 dark:border-blue-900 dark:bg-blue-950/20 dark:text-blue-100">
				<Sparkles className="mt-1 h-4 w-4 shrink-0 text-blue-700 dark:text-blue-300" />
				<p>
					<strong>Operating rule:</strong> shared facts can be reused; program
					logic cannot. OCI funds a plan, IRAP evaluates R&amp;D, and the
					partner programs require the eligible lead’s own mandate, community
					evidence, budget and accountability.
				</p>
			</div>
		</div>
	);
}
