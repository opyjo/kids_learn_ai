export type FundingEvidenceStatus = "Ready" | "Confirm" | "Add evidence";

export type FundingEvidenceItem = {
	category: string;
	label: string;
	value: string;
	status: FundingEvidenceStatus;
	usedBy: string[];
};

export type FundingDraft = {
	id: string;
	label: string;
	promptFit: string;
	draft: string;
	warning?: string;
};

export const SHARED_FUNDING_EVIDENCE: FundingEvidenceItem[] = [
	{
		category: "Company",
		label: "Company description",
		value:
			"KidsLearnAI helps Canadian children ages 9–13 learn Python and responsible AI through live small-group instruction and a purpose-built learning platform.",
		status: "Ready",
		usedBy: ["DMZ", "OCI", "IRAP", "Partners"],
	},
	{
		category: "Company",
		label: "Legal and ownership profile",
		value:
			"Add legal name, operating name, incorporation jurisdiction and date, CRA business number, Ontario establishment address and ownership structure.",
		status: "Confirm",
		usedBy: ["OCI", "IRAP"],
	},
	{
		category: "Company",
		label: "Team and employment",
		value:
			"Add current full-time-equivalent headcount, management and technical profiles, instructor capacity, advisors and hiring plan.",
		status: "Confirm",
		usedBy: ["DMZ", "OCI", "IRAP", "Partners"],
	},
	{
		category: "Product",
		label: "Functional product evidence",
		value:
			"Working platform, two-year curriculum, trial funnel, learner and family experiences, quizzes, concept labs, adaptive practice and admin workflows.",
		status: "Ready",
		usedBy: ["DMZ", "OCI", "IRAP", "Partners"],
	},
	{
		category: "Product",
		label: "Demo and screenshots",
		value:
			"Record a 60–90 second product demo and select learner, family, instructor and analytics screenshots with no personal learner data visible.",
		status: "Add evidence",
		usedBy: ["DMZ", "OCI", "IRAP", "Partners"],
	},
	{
		category: "Market",
		label: "Initial market wedge",
		value:
			"Approximately 1.93 million Canadian public-school students ages 9–13; retain the source and label all revenue scenarios as assumptions.",
		status: "Ready",
		usedBy: ["DMZ", "IRAP"],
	},
	{
		category: "Traction",
		label: "Historical results",
		value:
			"Add verified learners served, paid learners, cohorts, revenue, attendance, conversion, retention, referrals and institutional relationships.",
		status: "Add evidence",
		usedBy: ["DMZ", "OCI", "IRAP", "Partners"],
	},
	{
		category: "Traction",
		label: "Customer proof",
		value:
			"Add two consented parent quotations, two learner project examples and one concise case study with starting point, intervention and outcome.",
		status: "Add evidence",
		usedBy: ["DMZ", "IRAP", "Partners"],
	},
	{
		category: "Validation",
		label: "September measurement plan",
		value:
			"Working targets: 50 trial reservations, 35 attended trials and 14–18 paid enrolments, measured by source, acquisition cost and retention. These are targets, not achieved traction.",
		status: "Ready",
		usedBy: ["DMZ", "OCI", "IRAP"],
	},
	{
		category: "Finance",
		label: "Financial package",
		value:
			"Add recent financial statements, current revenue and runway, project budgets, confirmed funding, fundraising history and current capitalization details.",
		status: "Confirm",
		usedBy: ["DMZ", "OCI", "IRAP", "Partners"],
	},
	{
		category: "Delivery",
		label: "Safeguarding, privacy and accessibility",
		value:
			"Document child-safety practices, consent, privacy-minimized data handling, accessibility accommodations, incident escalation and partner responsibilities.",
		status: "Add evidence",
		usedBy: ["IRAP", "Partners"],
	},
	{
		category: "Impact",
		label: "Outcome measurement",
		value:
			"Define attendance, completion, project quality, Python skill gain, responsible-AI judgment, confidence, belonging and facilitator feedback measures.",
		status: "Add evidence",
		usedBy: ["IRAP", "Partners"],
	},
];

export const OCI_DMAP_DETAILS = {
	applyUrl: "https://oce.formstack.com/forms/intake_form",
	fitGate:
		"Confirm that KidsLearnAI is an Ontario-based, for-profit SME with 1–499 employees before submitting the intake.",
} as const;

export const OCI_DMAP_CHECKLIST = [
	"Confirm Ontario for-profit SME status and current employee count.",
	"Confirm that KidsLearnAI has not applied to the mutually exclusive Retail Modernization Project Grant.",
	"List every tool currently used for leads, booking, payments, email, scheduling, teaching, analytics and support.",
	"Estimate monthly hours lost to manual handoffs, duplicate entry, reconciliation and reporting.",
	"Identify the three highest-cost failure points using actual examples.",
	"Name the internal decision-maker who will work with the Digital Adoption Consultant.",
	"Submit the OCI intake promptly after the eligibility and company facts are confirmed; funding is first-come, first-served.",
] as const;

export const OCI_DMAP_ANSWERS: FundingDraft[] = [
	{
		id: "oci-business",
		label: "Business overview",
		promptFit: "Use for the company, product or business-model description.",
		draft:
			"KidsLearnAI is an Ontario education-technology company helping Canadian children ages 9–13 learn Python and responsible AI through live small-group classes and a purpose-built learning platform. Families begin with a free live class and can progress term by term through a two-year curriculum. The platform supports lessons, coding projects, AI concept labs, quizzes, adaptive practice, family accounts and instructor operations. The current growth model combines direct-to-family cohort revenue with longer-term delivery through libraries, schools, nonprofits and sponsors.",
	},
	{
		id: "oci-challenge",
		label: "Digital modernization challenge",
		promptFit:
			"Use for the operational problem or reason a modernization plan is needed.",
		draft:
			"KidsLearnAI has built the core learning product, but the operating journey around it is still early and fragmented. Lead source, trial booking, attendance, payment, enrolment, family communication, instructor scheduling, support and outcome reporting need to function as one reliable system. Manual handoffs and disconnected data make it difficult to understand conversion, forecast cohort capacity, follow up consistently and produce partner-ready impact reports. Before adding more learners, instructors or institutional partners, the company needs an evidence-based digital modernization roadmap covering process design, integration, automation, analytics, cybersecurity and privacy.",
		warning:
			"Add the actual tools, manual steps, hours and failure examples. Do not imply operational pain that has not been observed.",
	},
	{
		id: "oci-objective",
		label: "DMAP objective",
		promptFit: "Use for the requested project and desired outcome.",
		draft:
			"The objective is to work with a Digital Adoption Consultant to create a prioritized, implementation-ready modernization plan for KidsLearnAI's growth operations. The plan should document the current state, map the end-to-end family and partner journeys, identify data and process gaps, evaluate suitable Canadian digital solutions, define a secure integration architecture, and sequence investments by cost, operational value and readiness. The final roadmap should help KidsLearnAI scale cohorts and instructors while preserving teaching quality, child safety, family trust and measurable outcomes.",
	},
	{
		id: "oci-scope",
		label: "Consultant scope",
		promptFit: "Use to brief the Digital Adoption Consultant.",
		draft:
			"1. Map inquiry, trial, payment, enrolment, scheduling, communication, teaching and reporting workflows.\n2. Audit current tools, integrations, data ownership and duplicated records.\n3. Define CRM, lifecycle automation and cohort-capacity requirements.\n4. Define analytics for acquisition, attendance, conversion, retention and learner outcomes.\n5. Review cybersecurity, access control, backup, consent and child-data privacy requirements.\n6. Compare solution options and total cost of ownership.\n7. Deliver a phased 12–18 month roadmap with dependencies, budget ranges, owners, risks and success measures.",
	},
	{
		id: "oci-impact",
		label: "Expected business impact",
		promptFit: "Use for productivity, growth and competitiveness questions.",
		draft:
			"A clear modernization plan would reduce founder-dependent administration, improve the speed and consistency of family follow-up, make cohort capacity visible, and create reliable reporting for growth decisions and institutional partners. It would also help KidsLearnAI avoid premature software purchases by defining requirements and sequencing before implementation. The intended commercial result is a more repeatable learner-acquisition and delivery system that can support additional instructors, more cohorts and partner programs without weakening safety or service quality.",
	},
	{
		id: "oci-measures",
		label: "Proposed success measures",
		promptFit: "Use to define what a useful DMAP must enable.",
		draft:
			"The plan should establish baselines and implementation targets for: administrative hours per learner; time from inquiry to booked trial; reminder and follow-up completion; duplicate or incomplete records; trial attendance; trial-to-paid conversion; payment reconciliation time; instructor capacity utilization; time required to produce partner and learner-outcome reports; security and privacy risks closed; and expected cost, owner and payback logic for each recommended technology investment.",
		warning:
			"These are proposed measures. Add current baselines before setting improvement targets.",
	},
];

export const IRAP_DETAILS = {
	contact: "A senior executive starts by calling 1-877-994-4727.",
	fitGate:
		"Confirm incorporation, for-profit Canadian operations, no more than 500 FTEs, technical capacity and a genuine commercial R&D uncertainty.",
} as const;

export const IRAP_REQUIRED_PACKAGE = [
	"CRA business number and legal incorporation details",
	"Business plan and commercialization strategy",
	"Recent financial statements and project financing capacity",
	"Ownership structure",
	"Management and technical-team résumés or profiles",
	"Technical problem, current state of the art and why standard engineering is insufficient",
	"Experiments, milestones, technical risks, timeline and costed work plan",
	"Market potential, customer evidence and expected benefits to Canada",
] as const;

export const IRAP_CALL_SCRIPT =
	"KidsLearnAI is a Canadian education-technology company developing a human-led platform that helps children ages 9–13 learn Python and responsible AI. We are exploring an R&D project focused on whether a privacy-minimized adaptive-learning and safety system can infer learner mastery from sparse interactions, recommend age-appropriate next steps, and produce explanations that instructors can audit. The work would test technical uncertainty around mastery estimation, safe personalization and fairness across small cohorts; it would not fund routine content production, marketing or standard software integration. We would like to understand whether the company and proposed project are appropriate for NRC IRAP advisory support and, potentially, project funding. We can provide our business plan, financial statements, ownership information, team profiles, commercialization plan and a costed experimental work plan after confirming fit.";

export const IRAP_PROJECT_BRIEF: FundingDraft[] = [
	{
		id: "irap-opportunity",
		label: "Commercial opportunity",
		promptFit: "Use for the business need and market opportunity.",
		draft:
			"KidsLearnAI combines live small-group instruction with a learning platform for Python and responsible AI. Scaling this model requires more than static content: instructors need trustworthy signals about learner mastery, misconceptions and appropriate next steps without collecting unnecessary child data or automating high-stakes teaching decisions. A successful system could improve learning consistency, reduce instructor preparation time, strengthen parent-visible progression and make multi-instructor delivery more commercially repeatable.",
	},
	{
		id: "irap-uncertainty",
		label: "Technical uncertainties",
		promptFit: "Use to distinguish R&D from routine development.",
		draft:
			"The proposed research asks three unresolved questions. First, can mastery be estimated reliably from sparse and heterogeneous evidence such as quiz responses, coding attempts and guided practice? Second, can the system recommend useful next actions while remaining conservative, age-appropriate and auditable by an instructor? Third, can performance and fairness be evaluated across small cohorts without relying on sensitive learner profiling? Existing generic recommendation and tutoring approaches do not directly resolve the combination of sparse data, child safety, instructor oversight and privacy-minimized personalization in this learning context.",
		warning:
			"A technical lead must validate the novelty, prior art and uncertainty. Remove any question already solvable through ordinary implementation.",
	},
	{
		id: "irap-hypotheses",
		label: "Testable hypotheses",
		promptFit: "Use for experimental objectives and technical milestones.",
		draft:
			"H1: A mastery model combining question difficulty, response history and coding-task evidence can outperform a rules-only baseline while remaining calibrated under sparse data.\nH2: Instructor-auditable recommendation policies can improve the relevance of next-step suggestions without increasing unsafe or overconfident interventions.\nH3: Privacy-minimized cohort evaluation can identify material performance differences and failure modes without requiring sensitive demographic attributes in the learner-facing product.\nH4: The prototype can meet defined latency, reliability and explanation-quality thresholds in a live instructional workflow.",
	},
	{
		id: "irap-work-plan",
		label: "Experimental work plan",
		promptFit: "Use for project activities and milestones.",
		draft:
			"WP1 — Baseline and instrumentation: define learning constructs, evidence events, privacy boundaries, rules baseline and evaluation protocol.\nWP2 — Mastery prototypes: test candidate inference approaches against simulated and consented de-identified learning evidence.\nWP3 — Recommendation and explanation policy: prototype conservative next-step logic with instructor review and override.\nWP4 — Safety, fairness and failure testing: evaluate calibration, subgroup or cohort performance where appropriate, adversarial cases and unsafe recommendation modes.\nWP5 — Controlled classroom pilot: measure technical performance and instructor utility under an approved consent and safeguarding plan.\nWP6 — Commercialization readiness: document architecture, operating cost, integration requirements and go/no-go criteria.",
	},
	{
		id: "irap-results",
		label: "Expected technical results",
		promptFit: "Use for outputs and likelihood of achieving results.",
		draft:
			"The project would produce an instrumented evidence model, benchmark dataset or simulation harness, baseline results, one or more mastery prototypes, an instructor-auditable recommendation policy, a safety and failure-mode evaluation, controlled pilot findings and a commercialization decision package. Success would be defined by pre-agreed calibration, recommendation relevance, explanation quality, safety, latency and instructor-utility thresholds. A negative result would still identify which personalization approaches should not be commercialized for children.",
	},
	{
		id: "irap-canada",
		label: "Commercialization and benefits to Canada",
		promptFit: "Use for market potential, jobs and Canadian economic benefit.",
		draft:
			"If the technical approach succeeds, KidsLearnAI would commercialize it within its Canadian learning platform and instructor operating system, initially serving families and community partners. The capability could support more consistent multi-instructor delivery, new technical and curriculum roles in Canada, stronger Canadian intellectual property, and responsible AI-learning infrastructure designed for children. Commercial milestones should be tied to verified cohort demand, instructor adoption, unit economics and partner pilots rather than assumed market share.",
		warning:
			"Add specific Canadian jobs, spending, IP ownership, customer evidence, project budget and commercialization dates before presenting this to IRAP.",
	},
];

export const IRAP_EXCLUDED_WORK = [
	"Routine platform maintenance or ordinary feature development",
	"Marketing, sales campaigns or customer acquisition",
	"Standard CRM, analytics or scheduling-tool implementation",
	"Routine curriculum writing and content production",
	"Day-to-day operating costs",
	"Work performed outside Canada",
	"Research without a credible commercialization path",
] as const;

export const PARTNER_MASTER_ONE_PAGER =
	"PARTNERSHIP CONCEPT — RESPONSIBLE AI CREATOR LAB\n\nLead applicant: [ELIGIBLE ORGANIZATION]\nDelivery partner: KidsLearnAI\nCommunity and geography: [DEFINED COMMUNITY / REGION]\nAudience: [NUMBER] young people ages [AGES], with priority access for [PARTICIPANT GROUPS]\nDelivery period: [DATES]\n\nThe need\nYoung people are encountering AI before many have the technical understanding or critical judgment to question and shape it. Families and community organizations need accessible, guided programming that moves children from passive technology use toward confident, responsible creation. [LEAD ORGANIZATION] brings trusted community relationships and accountability; KidsLearnAI brings an existing Python and responsible-AI curriculum, learning platform and live delivery model.\n\nThe program\nParticipants complete [NUMBER] live, hands-on sessions in small groups. They build Python projects, explore how AI learns, examine bias, privacy and safety, and present a final project to families or community members. Participation is free. Delivery includes instructor preparation, accessible learning materials, attendance and consent workflows, learner support and a final showcase.\n\nRoles\n[LEAD ORGANIZATION] owns the application, community recruitment, participant eligibility, local relationships, financial administration and funder reporting. KidsLearnAI provides curriculum, platform access, instructor training or delivery, assessment tools and agreed outcome data. Roles for safeguarding, privacy, intellectual property, communications and incident response will be documented before delivery.\n\nOutcomes\nThe partners will measure registration, attendance, completion, project quality, Python skill growth, responsible-AI judgment, confidence, belonging, participant feedback and facilitator learning. Targets will be set only after the lead confirms audience size, budget and delivery capacity.\n\nBudget\nThe final budget will separate lead-organization costs, KidsLearnAI purchased services, instructors, accessibility, devices or materials, outreach, evaluation and administration. All rates, procurement steps, matching funds, in-kind support and conflicts of interest will comply with the selected funder's rules.";

export const PARTNER_OUTREACH_EMAIL =
	"Subject: Time-sensitive funding partnership — youth Python and responsible AI\n\nHello [NAME],\n\nI’m Opeyemi Ojo, Founder and Lead Instructor at KidsLearnAI. We have built a live, project-based Python and responsible-AI program for children ages 9–13, supported by a purpose-built learning platform and a two-year curriculum.\n\n[PROGRAM NAME] appears aligned with your organization’s work and requires an eligible nonprofit or institutional lead. KidsLearnAI could participate as a delivery partner by providing curriculum, platform access, instructor training or delivery, learner assessment and outcome reporting. Your organization would retain the lead role, community relationship and funding accountability.\n\nI have prepared a concise concept note, draft roles, outcome framework and program-specific fit checklist. Would you be available for a 20-minute decision call by [DATE]? The first question is whether the opportunity fits your mandate, eligibility and delivery capacity; if it does, we can rapidly define scope and budget.\n\nBest,\nOpeyemi Ojo\nFounder & Lead Instructor, KidsLearnAI\nhttps://www.kidslearnai.ca";

export const PARTNER_PROGRAM_ADAPTATIONS = [
	{
		id: "cancode",
		name: "CanCode 2026–2028",
		gate: "Lead must be a Canadian incorporated nonprofit with the required documents; the lead or a partner needs three consecutive years of digital-skills delivery experience.",
		requirements: [
			"Application form, quantitative workbook, proof of nonprofit incorporation and two years of audited financial statements",
			"No participant fees and a focus on groups underrepresented in STEM",
			"Capacity to finish by March 31, 2028 and report results quarterly",
			"Clear partner roles, resources, geographic reach, work plan and budget",
		],
		adaptation:
			"Position KidsLearnAI as a ready delivery system inside the lead's larger proposal: interactive K–12 Python and AI training, curriculum resources, instructor enablement, platform workflows and quarterly outcome data. Do not pitch a standalone commercial cohort or charge participants. The lead should decide immediately whether KidsLearnAI can strengthen an application already underway; starting a new national submission this close to the deadline is unlikely to be realistic.",
	},
	{
		id: "otf",
		name: "Ontario Trillium Foundation Seed Grant",
		gate: "An eligible Ontario community organization must lead, demonstrate direct local benefit in one OTF catchment, and pass governance and financial review.",
		requirements: [
			"Select one local catchment, funding priority and project objective",
			"Use a December 1, 2026–June 1, 2027 start date and a 6- or 12-month term",
			"Provide 1–3 deliverables, tasks, timing, outputs and a detailed eligible-cost budget",
			"Upload a collaborative agreement if applying as a formal collaboration",
			"Obtain a current quote for cumulative purchases from KidsLearnAI above $5,000",
		],
		adaptation:
			"Use the objective 'Design and/or pilot an innovative program or service to address a community need.' A plausible priority is supporting youth social, emotional and leadership skills through collaborative technical creation, but the lead must validate the fit with its mandate and local evidence. Define one local community, a free pilot, specific participants, accessible recruitment, a family showcase and an evaluation report. Avoid describing a province-wide technology rollout or a subsidy for KidsLearnAI's commercial operations.",
	},
	{
		id: "promoscience",
		name: "NSERC PromoScience",
		gate: "Lead must be a Canadian registered nonprofit, eligible post-secondary institution, or non-federal museum/science centre already delivering ongoing youth NSE promotion.",
		requirements: [
			"Ongoing, interactive and hands-on programming rather than a one-time project",
			"Five-page English proposal with a 150-word executive summary",
			"Structure the case under organization excellence (30%), program quality (30%), and impact and reach (40%)",
			"NSERC generally contributes up to one-third; show other cash and in-kind sources",
			"Provide strong feasibility evidence, evaluation, references and commitment letters",
		],
		adaptation:
			"Position KidsLearnAI as the technical and delivery partner in a multi-year, ongoing hands-on program. The lead must supply organizational continuity, existing-program evidence, non-federal funding and reach. Use the two-year curriculum as a progression pathway, not a one-time workshop. Emphasize deep participant interaction, responsible engineering practice, inclusive access, evaluation and transferability. Local-only delivery should be tied to targeted programming for an underrepresented group.",
	},
] as const;

export const PARTNER_DUE_DILIGENCE = [
	"Lead eligibility, mandate, good standing, governance and financial capacity",
	"Community need and recruitment evidence supplied by the lead—not invented by KidsLearnAI",
	"Clear ownership of application, funds, reporting, participant relationships and public communications",
	"Written scope, deliverables, rate, procurement method and conflict-of-interest management for KidsLearnAI",
	"Child safeguarding, consent, privacy, accessibility and incident-response responsibilities",
	"Curriculum and platform intellectual property, licence boundaries and data rights",
	"Outcome definitions, data-collection burden, reporting cadence and publication permissions",
	"Termination, substitution, non-performance and funder-recovery responsibilities",
] as const;
