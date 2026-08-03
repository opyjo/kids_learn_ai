import {
	AlertTriangle,
	ArrowRight,
	BadgeDollarSign,
	BookOpenCheck,
	BriefcaseBusiness,
	Building2,
	CalendarDays,
	CheckCircle2,
	CircleDollarSign,
	Clock3,
	ExternalLink,
	GraduationCap,
	HandCoins,
	Handshake,
	Landmark,
	Network,
	Rocket,
	Sparkles,
	UsersRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth-helpers";

type OpportunityStatus =
	| "Apply now"
	| "Partner-led"
	| "Rolling"
	| "Conditional";

type Opportunity = {
	title: string;
	status: OpportunityStatus;
	deadline: string;
	value: string;
	eligibility: string;
	fit: string;
	nextStep: string;
	href: string;
};

type LinkItem = {
	name: string;
	detail: string;
	href: string;
};

const opportunities: Opportunity[] = [
	{
		title: "CanCode 2026–2028",
		status: "Partner-led",
		deadline: "August 6, 2026 · noon Pacific",
		value: "$30M total program funding",
		eligibility: "A nonprofit must lead the application.",
		fit: "Excellent distribution fit for free community cohorts, curriculum delivery and measurable youth outcomes.",
		nextStep:
			"Join an existing submission as a curriculum, platform, instructor-training or delivery partner; do not apply as the commercial lead.",
		href: "https://ised-isde.canada.ca/site/ised/en/programs-and-initiatives/cancode/cancode-program-2026-2028-applicant-guide",
	},
	{
		title: "OCI Digital Modernization and Adoption Plan",
		status: "Apply now",
		deadline: "Current intake opens August 10, 2026",
		value: "Up to $15,000",
		eligibility: "Ontario for-profit company with 1–499 employees.",
		fit: "Strong fit for CRM, analytics, automation, cybersecurity and the operating systems needed to grow cohorts.",
		nextStep:
			"Prepare the company information and a short modernization problem statement before the first-come intake opens.",
		href: "https://www.oc-innovation.ca/programs/digital-competence-centre/",
	},
	{
		title: "DMZ Black Innovation Summit",
		status: "Conditional",
		deadline: "Apply by August 24, 2026",
		value: "$150,000+ in investments and grants",
		eligibility:
			"Founder must meet the program's Black-founder criteria and have a functional MVP.",
		fit: "Strong match if eligible: KidsLearnAI has a working product, a clear mission and an investable growth story.",
		nextStep:
			"Confirm founder eligibility, then reuse the investor-deck story and September validation plan in the application.",
		href: "https://dmz.torontomu.ca/black-innovation-summit-2026",
	},
	{
		title: "Ontario Trillium Foundation Seed Grant",
		status: "Partner-led",
		deadline: "August 19, 2026",
		value: "$10,000–$100,000",
		eligibility: "An eligible nonprofit or charitable organization must lead.",
		fit: "Good for testing a community delivery model, improving access and building evidence before a larger program.",
		nextStep:
			"Find a mission-aligned nonprofit lead and define a pilot with specific learners, locations, outcomes and partner responsibilities.",
		href: "https://otf.ca/our-grants/community-investments-grants/seed-grant",
	},
	{
		title: "NRC IRAP Technology Innovation Funding",
		status: "Rolling",
		deadline: "Rolling · project-specific review",
		value: "Project-dependent contribution",
		eligibility:
			"Incorporated, for-profit Canadian company pursuing genuine technology R&D.",
		fit: "Potential fit for technically uncertain work in adaptive learning, AI safety and measurable personalization—not routine product work.",
		nextStep:
			"Prepare a concise technical problem, the uncertainty involved, the experiments required, the commercial opportunity and an R&D work plan.",
		href: "https://nrc.canada.ca/en/support-technology-innovation/financial-support-technology-innovation",
	},
	{
		title: "NSERC PromoScience",
		status: "Partner-led",
		deadline: "September 15, 2026",
		value: "Up to $200,000 per year for 3 years",
		eligibility:
			"Nonprofit and post-secondary applicants; normally up to one-third of the program budget.",
		fit: "Strong long-term option for hands-on STEM and AI outreach if an eligible organization leads the program.",
		nextStep:
			"Approach a nonprofit or university outreach unit with a co-designed, multi-year AI-literacy program and a complete funding mix.",
		href: "https://www.nserc-crsng.gc.ca/Promoter-Promotion/PromoScience-PromoScience/CallApplication-AppelDemande_eng.asp",
	},
	{
		title: "Student Work Placement Program",
		status: "Rolling",
		deadline: "Year-round through delivery partners",
		value: "Up to $5,000 per student",
		eligibility:
			"Eligible Canadian employers hiring post-secondary students in paid placements.",
		fit: "Useful for supervised roles in curriculum operations, software, data, marketing or community programming.",
		nextStep:
			"Define a paid role with meaningful learning outcomes, then identify the appropriate SWPP delivery partner before hiring.",
		href: "https://www.canada.ca/en/employment-social-development/services/student-work-placements-wage-subsidies.html",
	},
];

const canCodePartners: LinkItem[] = [
	{
		name: "Black Boys Code Toronto",
		detail:
			"Direct mission alignment around Black youth and technology education.",
		href: "https://blackboyscode.ca/locations/toronto/",
	},
	{
		name: "Visions of Science",
		detail:
			"Community-based STEM access and strong relationships with underserved youth.",
		href: "https://visionsofscience.ca/",
	},
	{
		name: "STEMHub Foundation",
		detail: "STEM programming and possible community delivery partnership.",
		href: "https://www.stemhubfoundation.com/programs/index.html",
	},
	{
		name: "Afro Canadian Development",
		detail: "Applied STEM programming for children and youth facing barriers.",
		href: "https://afrocanadiandevelopment.org/2026/01/09/afro-canadian-development-inc-announces-2026-cohort-of-applied-stem-beyond-barriers-empowering-children-and-youth-from-underserved-communities/",
	},
	{
		name: "MindFuel",
		detail:
			"National youth innovation organization already active in AI learning.",
		href: "https://mindfuel.ca/2026/01/29/mindfuel-ignites-a-national-ai-learning-movement-for-canadian-youth/",
	},
	{
		name: "Actua Network",
		detail:
			"A national network of university and college STEM outreach members.",
		href: "https://actua.ca/network",
	},
];

const distributionPartners: LinkItem[] = [
	{
		name: "Toronto Public Library program proposals",
		detail:
			"Pitch free, open community workshops 6–12 months ahead. Programs cannot be used for direct solicitation.",
		href: "https://tpl.ca/about-the-library/business-with-the-library/program-proposals/",
	},
	{
		name: "Toronto District School Board partnerships",
		detail:
			"Use the partnership process for system opportunities; instructional-time proposals next open October 19, 2026.",
		href: "https://www.tdsb.on.ca/About-Us/Partnership-Opportunities",
	},
	{
		name: "TDSB Partnership Information Management System",
		detail: "Use the portal for formal submissions and required documentation.",
		href: "https://pims.tdsb.on.ca/",
	},
	{
		name: "OECM supplier opportunities",
		detail:
			"Monitor procurements that can make a service available to Ontario's education sector at scale.",
		href: "https://oecm.ca/suppliers/",
	},
];

const communities: LinkItem[] = [
	{
		name: "Vector FastLane",
		detail: "AI adoption support and connection to Ontario's AI ecosystem.",
		href: "https://vectorinstitute.ai/ai-adoption/startups/fastlane/",
	},
	{
		name: "DMZ Pre-Incubator",
		detail:
			"Early-stage founder support, validation and entrepreneurial network.",
		href: "https://dmz.torontomu.ca/bootcamp/",
	},
	{
		name: "DMZ Incubator",
		detail:
			"Apply by September 1 if recurring revenue is ready to show; review the 2.5% equity trade-off carefully.",
		href: "https://dmz.torontomu.ca/incubator",
	},
	{
		name: "Siakam EdTech Engine",
		detail:
			"The 2026 intake is closed, but this is the strongest EdTech-specific watchlist program.",
		href: "https://dmz.torontomu.ca/edtech",
	},
	{
		name: "Interactive Ontario",
		detail:
			"Industry membership, events and connections across Ontario's interactive sector.",
		href: "https://interactiveontario.com/become-a-member/",
	},
	{
		name: "YSpace Black Entrepreneurship Alliance",
		detail:
			"Founder programming, network and market support for Black-led ventures.",
		href: "https://www.yorku.ca/yspace/programs-streams/bea/",
	},
	{
		name: "BEEM",
		detail:
			"Black entrepreneurship ecosystem mapping, programs and connections.",
		href: "https://www.bekh.org/beem",
	},
	{
		name: "Canadian Black Chamber of Commerce",
		detail:
			"Business network, advocacy, visibility and corporate relationships.",
		href: "https://blackchamber.ca/about-us/",
	},
	{
		name: "FACE Coalition",
		detail: "Loan financing and support for Black Canadian entrepreneurs.",
		href: "https://facecoalition.com/en/loans",
	},
	{
		name: "Futurpreneur Canada",
		detail:
			"Startup financing plus mentorship, subject to founder-age eligibility.",
		href: "https://futurpreneur.ca/en/offering/core-startup/",
	},
];

const sponsors: LinkItem[] = [
	{
		name: "RBC Future Launch",
		detail: "Youth skills and future-readiness alignment.",
		href: "https://www.rbc.com/en/future-launch/about/",
	},
	{
		name: "TELUS Community Grants",
		detail: "Community-based youth impact and digital inclusion alignment.",
		href: "https://www.telus.com/en/social-impact/giving-back/community-grants",
	},
	{
		name: "TD Ready Commitment",
		detail:
			"Potential alignment through financial security, connected communities and future skills.",
		href: "https://www.td.com/ca/en/about-td/ready-commitment/funding",
	},
];

const statusClass: Record<OpportunityStatus, string> = {
	"Apply now":
		"border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
	"Partner-led":
		"border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300",
	Rolling:
		"border-purple-200 bg-purple-50 text-purple-800 hover:bg-purple-50 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-300",
	Conditional:
		"border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300",
};

function ReferenceLinks({ items }: { items: LinkItem[] }) {
	return (
		<div className="grid gap-2 sm:grid-cols-2">
			{items.map((item) => (
				<a
					key={item.href}
					href={item.href}
					target="_blank"
					rel="noreferrer"
					className="group rounded-xl border border-slate-200 bg-slate-50 p-3 transition-colors hover:border-blue-300 hover:bg-blue-50/50 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-800 dark:hover:bg-blue-950/20"
				>
					<span className="flex items-start justify-between gap-3">
						<span>
							<span className="block text-sm font-semibold text-slate-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
								{item.name}
							</span>
							<span className="mt-1 block text-xs leading-5 text-slate-600 dark:text-slate-300">
								{item.detail}
							</span>
						</span>
						<ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-blue-600" />
					</span>
				</a>
			))}
		</div>
	);
}

export default async function FundingPartnershipsPage() {
	await requireAdmin();

	return (
		<div className="space-y-4 pb-12">
			<header className="overflow-hidden rounded-2xl bg-slate-950 px-4 py-5 text-white shadow-sm sm:px-6 sm:py-7">
				<div className="flex flex-wrap items-start justify-between gap-4">
					<div className="max-w-3xl">
						<div className="mb-3 flex flex-wrap items-center gap-2">
							<Badge className="border-emerald-400/30 bg-emerald-400/15 text-emerald-100 hover:bg-emerald-400/15">
								Internal opportunity map
							</Badge>
							<span className="text-xs text-slate-400">
								Research reviewed August 3, 2026
							</span>
						</div>
						<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
							Funding &amp; Partnerships
						</h1>
						<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
							A practical grant, partnership, sponsorship and founder-network
							playbook for expanding access to KidsLearnAI and financing the
							next stage of the business.
						</p>
					</div>
					<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200">
						<HandCoins className="h-6 w-6" />
					</div>
				</div>
			</header>

			<div className="flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-100">
				<AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
				<p>
					Deadlines, intake status and eligibility can change. Reconfirm each
					opportunity on its official page before investing time or making a
					commitment. Funding amounts are not guaranteed.
				</p>
			</div>

			<div className="grid gap-4 lg:grid-cols-3">
				<Card className="gap-3 border-emerald-200 bg-emerald-50/60 py-4 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/20">
					<CardHeader className="px-4 py-0">
						<CardTitle className="flex items-center gap-2 text-sm">
							<UsersRound className="h-4 w-4 text-emerald-700" />
							Community access
						</CardTitle>
					</CardHeader>
					<CardContent className="px-4 text-xs leading-5 text-slate-600 dark:text-slate-300">
						Use a nonprofit lead for free cohorts funded by CanCode,
						PromoScience, OTF or corporate community grants.
					</CardContent>
				</Card>
				<Card className="gap-3 border-blue-200 bg-blue-50/60 py-4 shadow-sm dark:border-blue-900 dark:bg-blue-950/20">
					<CardHeader className="px-4 py-0">
						<CardTitle className="flex items-center gap-2 text-sm">
							<Rocket className="h-4 w-4 text-blue-700" />
							Product R&amp;D
						</CardTitle>
					</CardHeader>
					<CardContent className="px-4 text-xs leading-5 text-slate-600 dark:text-slate-300">
						Keep commercial product development in KidsLearnAI and assess IRAP,
						SR&amp;ED, OCI and Ontario tax credits.
					</CardContent>
				</Card>
				<Card className="gap-3 border-purple-200 bg-purple-50/60 py-4 shadow-sm dark:border-purple-900 dark:bg-purple-950/20">
					<CardHeader className="px-4 py-0">
						<CardTitle className="flex items-center gap-2 text-sm">
							<BriefcaseBusiness className="h-4 w-4 text-purple-700" />
							Team capacity
						</CardTitle>
					</CardHeader>
					<CardContent className="px-4 text-xs leading-5 text-slate-600 dark:text-slate-300">
						Use wage subsidies and training support to add supervised capacity
						without building a cost base too early.
					</CardContent>
				</Card>
			</div>

			<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
				<CardHeader className="px-4 py-0 sm:px-5">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<CardTitle className="flex items-center gap-2 text-lg">
							<CalendarDays className="h-5 w-5 text-rose-600" />
							Immediate opportunity pipeline
						</CardTitle>
						<Badge variant="secondary">Sorted by urgency and fit</Badge>
					</div>
				</CardHeader>
				<CardContent className="space-y-3 px-4 sm:px-5">
					{opportunities.map((opportunity) => (
						<article
							key={opportunity.title}
							className="rounded-xl border border-slate-200 p-4 dark:border-gray-800"
						>
							<div className="flex flex-wrap items-start justify-between gap-3">
								<div>
									<div className="flex flex-wrap items-center gap-2">
										<h2 className="text-base font-semibold text-slate-950 dark:text-white">
											{opportunity.title}
										</h2>
										<Badge className={statusClass[opportunity.status]}>
											{opportunity.status}
										</Badge>
									</div>
									<div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
										<span className="flex items-center gap-1.5">
											<Clock3 className="h-3.5 w-3.5" />
											{opportunity.deadline}
										</span>
										<span className="flex items-center gap-1.5 font-medium text-emerald-700 dark:text-emerald-300">
											<CircleDollarSign className="h-3.5 w-3.5" />
											{opportunity.value}
										</span>
									</div>
								</div>
								<a
									href={opportunity.href}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:underline dark:text-blue-300"
								>
									Official details
									<ExternalLink className="h-3 w-3" />
								</a>
							</div>
							<div className="mt-3 grid gap-3 text-sm leading-6 md:grid-cols-3">
								<div>
									<p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
										Eligibility
									</p>
									<p className="mt-1 text-slate-700 dark:text-slate-200">
										{opportunity.eligibility}
									</p>
								</div>
								<div>
									<p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
										Why it fits
									</p>
									<p className="mt-1 text-slate-700 dark:text-slate-200">
										{opportunity.fit}
									</p>
								</div>
								<div className="rounded-lg bg-slate-50 p-3 dark:bg-gray-950">
									<p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
										<ArrowRight className="h-3.5 w-3.5" />
										Next move
									</p>
									<p className="mt-1 text-slate-700 dark:text-slate-200">
										{opportunity.nextStep}
									</p>
								</div>
							</div>
						</article>
					))}
				</CardContent>
			</Card>

			<div className="grid gap-4 xl:grid-cols-2">
				<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
					<CardHeader className="px-4 py-0 sm:px-5">
						<CardTitle className="flex items-center gap-2 text-lg">
							<Handshake className="h-5 w-5 text-blue-600" />
							CanCode partner targets
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 px-4 sm:px-5">
						<div className="rounded-xl border border-blue-200 bg-blue-50/60 p-3 dark:border-blue-900 dark:bg-blue-950/20">
							<p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
								<Sparkles className="h-3.5 w-3.5" />
								Partner offer
							</p>
							<p className="mt-1.5 text-sm leading-6 text-slate-700 dark:text-slate-200">
								“KidsLearnAI will provide an eight-week Python and
								responsible-AI curriculum, learning platform, instructor
								training, student assessment and quarterly outcome data for
								[number] learners.”
							</p>
						</div>
						<ReferenceLinks items={canCodePartners} />
					</CardContent>
				</Card>

				<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
					<CardHeader className="px-4 py-0 sm:px-5">
						<CardTitle className="flex items-center gap-2 text-lg">
							<Landmark className="h-5 w-5 text-emerald-600" />
							Tax-credit R&amp;D strategy
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3 px-4 text-sm leading-6 sm:px-5">
						<div className="grid gap-2 sm:grid-cols-2">
							<a
								href="https://www.canada.ca/en/revenue-agency/services/scientific-research-experimental-development-tax-incentive-program/sred-claim/investment-tax-credit.html"
								target="_blank"
								rel="noreferrer"
								className="rounded-xl border border-slate-200 p-3 hover:border-blue-300 dark:border-gray-800"
							>
								<span className="flex items-center justify-between font-semibold">
									SR&amp;ED <ExternalLink className="h-3.5 w-3.5" />
								</span>
								<span className="mt-1 block text-xs text-slate-600 dark:text-slate-300">
									Federal enhanced refundable credit can reach 35% for an
									eligible CCPC.
								</span>
							</a>
							<a
								href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/provincial-territorial-corporation-tax/ontario-provincial-corporation-tax/ontario-innovation-tax-credit.html"
								target="_blank"
								rel="noreferrer"
								className="rounded-xl border border-slate-200 p-3 hover:border-blue-300 dark:border-gray-800"
							>
								<span className="flex items-center justify-between font-semibold">
									Ontario Innovation Tax Credit
									<ExternalLink className="h-3.5 w-3.5" />
								</span>
								<span className="mt-1 block text-xs text-slate-600 dark:text-slate-300">
									An 8% refundable provincial credit for qualifying Ontario
									SR&amp;ED.
								</span>
							</a>
						</div>
						<div className="grid gap-3 sm:grid-cols-2">
							<div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/20">
								<p className="font-semibold text-emerald-800 dark:text-emerald-300">
									Potentially qualifying
								</p>
								<ul className="mt-2 space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
									<li>
										Adaptive-learning algorithms with technical uncertainty
									</li>
									<li>Experiments that measure AI-concept learning gains</li>
									<li>Novel child-safety or AI-response challenges</li>
									<li>New technical feedback and personalization methods</li>
								</ul>
							</div>
							<div className="rounded-xl bg-rose-50 p-3 dark:bg-rose-950/20">
								<p className="font-semibold text-rose-800 dark:text-rose-300">
									Not enough on its own
								</p>
								<ul className="mt-2 space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
									<li>Routine coding and feature development</li>
									<li>Curriculum or content creation</li>
									<li>Ordinary bug fixes and maintenance</li>
									<li>Marketing and customer acquisition</li>
								</ul>
							</div>
						</div>
						<div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs dark:border-amber-900 dark:bg-amber-950/20">
							<p>
								<strong>Ontario Interactive Digital Media Tax Credit:</strong>{" "}
								the 40% own-product stream deserves professional review, but
								products primarily for children under 12 face restrictions.
								KidsLearnAI's ages 9–13 audience makes specialist advice
								essential.{" "}
								<a
									href="https://www.ontariocreates.ca/our-sectors/interactive/business-initiatives/ontario-interactive-digital-media-tax-credit-oidmtc"
									target="_blank"
									rel="noreferrer"
									className="font-semibold text-blue-700 hover:underline dark:text-blue-300"
								>
									Review program <ExternalLink className="inline h-3 w-3" />
								</a>
							</p>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-4 xl:grid-cols-2">
				<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
					<CardHeader className="px-4 py-0 sm:px-5">
						<CardTitle className="flex items-center gap-2 text-lg">
							<GraduationCap className="h-5 w-5 text-purple-600" />
							Hiring and team support
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2 px-4 sm:px-5">
						<ReferenceLinks
							items={[
								{
									name: "NRC IRAP Youth Employment",
									detail:
										"For a 6–12 month role filled by a 15–30-year-old post-secondary graduate working at least 30 hours weekly.",
									href: "https://nrc.canada.ca/en/support-technology-innovation/nrc-irap-funding-hire-young-graduates",
								},
								{
									name: "Ontario Job Grant",
									detail:
										"Year-round training support up to $10,000 per trainee; employers under 100 employees normally contribute one-sixth.",
									href: "https://www.ontario.ca/page/ontario-job-grant",
								},
								{
									name: "Ontario Co-operative Education Tax Credit",
									detail:
										"Refundable tax credit of up to $3,000 for a qualifying co-op placement.",
									href: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/provincial-territorial-corporation-tax/ontario-provincial-corporation-tax/ontario-operative-education-tax-credit.html",
								},
								{
									name: "Canada Summer Jobs",
									detail:
										"The current cycle is not the immediate target; prepare a role and monitor the next employer application window.",
									href: "https://www.canada.ca/en/employment-social-development/services/funding/canada-summer-jobs.html",
								},
							]}
						/>
					</CardContent>
				</Card>

				<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
					<CardHeader className="px-4 py-0 sm:px-5">
						<CardTitle className="flex items-center gap-2 text-lg">
							<Building2 className="h-5 w-5 text-orange-600" />
							Distribution partnerships
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3 px-4 sm:px-5">
						<ReferenceLinks items={distributionPartners} />
						<div className="rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-600 dark:bg-gray-950 dark:text-slate-300">
							<strong className="text-slate-900 dark:text-white">
								Also pursue:
							</strong>{" "}
							individual principals for after-school programs, school councils
							for parent-funded cohorts, community organizations for hosted
							workshops and parent AI-literacy sessions as the lead-generation
							bridge.
						</div>
					</CardContent>
				</Card>
			</div>

			<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
				<CardHeader className="px-4 py-0 sm:px-5">
					<CardTitle className="flex items-center gap-2 text-lg">
						<BookOpenCheck className="h-5 w-5 text-blue-600" />
						Research and product partnerships
					</CardTitle>
				</CardHeader>
				<CardContent className="grid gap-3 px-4 text-sm leading-6 sm:px-5 lg:grid-cols-2">
					<div className="rounded-xl bg-slate-50 p-4 dark:bg-gray-950">
						<p className="font-semibold text-slate-950 dark:text-white">
							University and college targets
						</p>
						<p className="mt-1 text-slate-600 dark:text-slate-300">
							Approach OISE/University of Toronto, Toronto Metropolitan
							University, York University, Ontario Tech and Sheridan for
							learning science, responsible-AI research, student placements and
							outcome evaluation.
						</p>
					</div>
					<div className="rounded-xl border border-slate-200 p-4 dark:border-gray-800">
						<div className="flex items-center justify-between gap-3">
							<p className="font-semibold text-slate-950 dark:text-white">
								OCI Collaborate 2 Commercialize
							</p>
							<a
								href="https://www.oc-innovation.ca/programs/collaborate-2-commercialize/"
								target="_blank"
								rel="noreferrer"
								aria-label="Open OCI Collaborate 2 Commercialize details"
							>
								<ExternalLink className="h-4 w-4 text-blue-600" />
							</a>
						</div>
						<p className="mt-1 text-slate-600 dark:text-slate-300">
							The September 15 AI intake is a future target. Current thresholds
							include two years of Ontario incorporation, five Ontario full-time
							employees and a $20,000–$50,000 industry contribution, so build
							toward it rather than forcing an early application.
						</p>
					</div>
				</CardContent>
			</Card>

			<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
				<CardHeader className="px-4 py-0 sm:px-5">
					<CardTitle className="flex items-center gap-2 text-lg">
						<Network className="h-5 w-5 text-purple-600" />
						Founder networks, accelerators and financing
					</CardTitle>
				</CardHeader>
				<CardContent className="px-4 sm:px-5">
					<ReferenceLinks items={communities} />
				</CardContent>
			</Card>

			<div className="grid gap-4 xl:grid-cols-2">
				<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
					<CardHeader className="px-4 py-0 sm:px-5">
						<CardTitle className="flex items-center gap-2 text-lg">
							<BadgeDollarSign className="h-5 w-5 text-emerald-600" />
							Corporate sponsorship offer
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 px-4 sm:px-5">
						<div className="grid grid-cols-2 gap-2 text-center">
							{[
								["$5K", "10 scholarship seats"],
								["$12.5K", "One community cohort"],
								["$25K", "Two cohorts, devices and reporting"],
								["$50K", "Named annual community program"],
							].map(([amount, outcome]) => (
								<div
									key={amount}
									className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-gray-800 dark:bg-gray-950"
								>
									<p className="text-xl font-semibold text-emerald-700 dark:text-emerald-300">
										{amount}
									</p>
									<p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">
										{outcome}
									</p>
								</div>
							))}
						</div>
						<ReferenceLinks items={sponsors} />
					</CardContent>
				</Card>

				<Card className="gap-4 border-slate-200 bg-white py-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
					<CardHeader className="px-4 py-0 sm:px-5">
						<CardTitle className="flex items-center gap-2 text-lg">
							<AlertTriangle className="h-5 w-5 text-amber-600" />
							Postpone or avoid for now
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2 px-4 text-sm leading-6 text-slate-700 dark:text-slate-200 sm:px-5">
						<p className="rounded-lg bg-slate-50 p-3 dark:bg-gray-950">
							<strong>Starter Company Plus:</strong> the current Toronto intake
							is closed.{" "}
							<a
								href="https://www.toronto.ca/business-economy/business-operation-growth/business-incentives/starter-company-plus-grant/"
								target="_blank"
								rel="noreferrer"
								className="font-semibold text-blue-700 hover:underline dark:text-blue-300"
							>
								Monitor future intake
							</a>
						</p>
						<p className="rounded-lg bg-slate-50 p-3 dark:bg-gray-950">
							<strong>Regional AI Initiative:</strong> the referenced intake is
							closed; do not build the immediate plan around it.
						</p>
						<p className="rounded-lg bg-slate-50 p-3 dark:bg-gray-950">
							<strong>Ontario Creates IP Fund:</strong> currently limited to
							games and XR, so the core learning platform is outside scope.
						</p>
						<p className="rounded-lg bg-slate-50 p-3 dark:bg-gray-950">
							<strong>FedDev Ontario business funding:</strong> revisit after
							three years and five employees; direct business support is
							normally repayable and commonly begins around $125,000.{" "}
							<a
								href="https://feddev-ontario.canada.ca/en/funding-southern-ontario/funding-businesses-southern-ontario-who-can-apply"
								target="_blank"
								rel="noreferrer"
								className="font-semibold text-blue-700 hover:underline dark:text-blue-300"
							>
								Eligibility details
							</a>
						</p>
						<p className="rounded-lg bg-slate-50 p-3 dark:bg-gray-950">
							<strong>CanExport SMEs:</strong> reconsider when KidsLearnAI
							reaches three full-time employees and $300,000 in annual revenue.
							The current deadline is August 31.{" "}
							<a
								href="https://www.tradecommissioner.gc.ca/en/our-solutions/funding-financing-international-business/canexport-smes/applicants-guide-2026-27.html"
								target="_blank"
								rel="noreferrer"
								className="font-semibold text-blue-700 hover:underline dark:text-blue-300"
							>
								Applicant guide
							</a>
						</p>
					</CardContent>
				</Card>
			</div>

			<Card className="gap-4 border-slate-950 bg-slate-950 py-5 text-white shadow-sm dark:border-slate-800">
				<CardHeader className="px-4 py-0 sm:px-5">
					<div className="flex flex-wrap items-center justify-between gap-2">
						<CardTitle className="flex items-center gap-2 text-lg">
							<CheckCircle2 className="h-5 w-5 text-emerald-300" />
							30-day execution plan
						</CardTitle>
						<Badge className="border-white/15 bg-white/10 text-slate-100 hover:bg-white/10">
							Founder checklist
						</Badge>
					</div>
				</CardHeader>
				<CardContent className="px-4 sm:px-5">
					<ol className="grid gap-2 md:grid-cols-2">
						{[
							"Prepare the DMAP application before the August 10 intake.",
							"Send a one-page CanCode partner offer before August 6.",
							"Apply to the DMZ Black Innovation Summit if founder eligibility is confirmed.",
							"Contact NRC IRAP and apply to Vector FastLane with a defined technical project.",
							"Recruit a nonprofit lead for OTF by August 19 and PromoScience by September 15.",
							"Submit a free, non-soliciting Toronto Public Library workshop proposal.",
							"Start contemporaneous SR&ED experiment records and request OIDMTC specialist guidance.",
							"Prepare the TDSB instructional-time proposal for October 19.",
							"Build a sponsor-ready 25-child package with budget, outcomes, safeguarding and reporting.",
						].map((item, index) => (
							<li
								key={item}
								className="flex gap-3 rounded-xl bg-white/5 p-3 text-sm leading-6 text-slate-200"
							>
								<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-semibold text-emerald-200">
									{index + 1}
								</span>
								<span>{item}</span>
							</li>
						))}
					</ol>
				</CardContent>
			</Card>

			<div className="rounded-xl border border-purple-200 bg-purple-50/70 p-4 dark:border-purple-900 dark:bg-purple-950/20">
				<p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-300">
					<Sparkles className="h-3.5 w-3.5" />
					Strong positioning statement
				</p>
				<p className="mt-2 text-sm leading-7 text-slate-800 dark:text-slate-100 sm:text-base">
					“KidsLearnAI is a commercial education platform that also enables
					charities, schools and sponsors to deliver measurable, culturally
					responsive AI education to children who otherwise could not access
					it.”
				</p>
			</div>
		</div>
	);
}
