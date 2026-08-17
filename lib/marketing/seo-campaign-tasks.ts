export const SEO_TASK_STATUSES = ["todo", "in_progress", "done"] as const;

export type SeoTaskStatus = (typeof SEO_TASK_STATUSES)[number];

export type SeoTaskCategory =
	| "Measurement"
	| "Conversion"
	| "Trust"
	| "SEO"
	| "Paid acquisition"
	| "Partnerships"
	| "Content"
	| "Retention";

export type SeoCampaignTask = {
	key: string;
	title: string;
	description: string;
	successMeasure: string;
	category: SeoTaskCategory;
	phase: 1 | 2 | 3;
	priority: "High" | "Medium";
	campaign?: "September 2026 cohort";
	href?: string;
	linkLabel?: string;
};

export const SEO_PHASES = [
	{
		id: 1 as const,
		label: "Phase 1",
		title: "Build the lead engine",
		timeline: "Days 1–30",
		description:
			"Make every campaign measurable, remove booking friction, and establish parent trust.",
	},
	{
		id: 2 as const,
		label: "Phase 2",
		title: "Create qualified demand",
		timeline: "Days 31–60",
		description:
			"Publish high-intent pages and launch focused search, partner, and referral campaigns.",
	},
	{
		id: 3 as const,
		label: "Phase 3",
		title: "Optimize and scale",
		timeline: "Days 61–90",
		description:
			"Use attended trials and paid enrollments to decide what deserves more investment.",
	},
] as const;

export const SEO_CAMPAIGN_TASKS: SeoCampaignTask[] = [
	{
		key: "september-cohort-offer",
		title: "Publish the specific September cohort offer",
		description:
			"Replace the generic 8–10 week message with exact start and end dates, class times and time zone, instructor, maximum seats, three project outcomes, family showcase, and the $159.99 founding-rate deadline.",
		successMeasure:
			"A parent can understand the complete September offer and decide whether the schedule fits without contacting us.",
		category: "Conversion",
		phase: 1,
		priority: "High",
		campaign: "September 2026 cohort",
		href: "/inquiry",
		linkLabel: "Review program page",
	},
	{
		key: "september-instant-trial-booking",
		title: "Launch instant trial scheduling",
		description:
			"Let parents select an available trial time immediately after choosing an age group, then send confirmation, a calendar invitation, an equipment checklist, and 24-hour and one-hour reminders.",
		successMeasure:
			"A parent can reserve a trial and receive every confirmation without waiting for a manual reply.",
		category: "Conversion",
		phase: 1,
		priority: "High",
		campaign: "September 2026 cohort",
		href: "/inquiry/book",
		linkLabel: "Review booking flow",
	},
	{
		key: "september-trust-proof",
		title: "Publish real parent and instructor proof",
		description:
			"Add the instructor's name, photo, relevant experience, teaching and safety credentials, two or three consented parent quotes, student project examples, a short class preview, and the exact class-size maximum.",
		successMeasure:
			"The program page identifies who teaches the cohort and shows authentic evidence of the learner experience.",
		category: "Trust",
		phase: 1,
		priority: "High",
		campaign: "September 2026 cohort",
		href: "/",
		linkLabel: "Review homepage",
	},
	{
		key: "september-free-workshop",
		title: "Run the free Python AI Helper workshop",
		description:
			"Schedule and promote a 45–60 minute Build Your First Python AI Helper workshop for August 15–20. End with a short parent presentation and a direct invitation to reserve the September cohort.",
		successMeasure:
			"The workshop has a registration page, reminders, a reusable lesson, a parent close, and tracked follow-up.",
		category: "Partnerships",
		phase: 1,
		priority: "High",
		campaign: "September 2026 cohort",
	},
	{
		key: "september-warm-outreach",
		title: "Personally invite every warm family",
		description:
			"Contact previous families, inquiries, and relevant personal connections with a concise September invitation, then ask enrolled families for one introduction and offer a simple $20–$25 program credit when a referral enrolls.",
		successMeasure:
			"Every eligible warm contact has a recorded outcome and referrals are attributable to the referring family.",
		category: "Retention",
		phase: 1,
		priority: "High",
		campaign: "September 2026 cohort",
		href: "/admin/inquiries",
		linkLabel: "Open inquiries",
	},
	{
		key: "september-partner-outreach",
		title: "Pitch 30 aligned community partners",
		description:
			"Build a focused list of libraries, school parent councils, homeschool groups, and community organizations, then send personalized, permission-based proposals for the free workshop.",
		successMeasure:
			"Thirty partners are contacted, at least five conversations begin, and two workshop opportunities are scheduled.",
		category: "Partnerships",
		phase: 1,
		priority: "High",
		campaign: "September 2026 cohort",
	},
	{
		key: "september-enrollment-scorecard",
		title: "Review the September enrollment scorecard weekly",
		description:
			"Use 15 paid students as the working goal and plan around 50 trial reservations, 35 attended trials, and 14–18 paid enrollments. Review reservations by source, attendance, trial-to-paid conversion, acquisition cost, and remaining seats every Friday.",
		successMeasure:
			"Each active channel receives a weekly keep, improve, or stop decision based on attended trials and paid enrollments.",
		category: "Measurement",
		phase: 1,
		priority: "High",
		campaign: "September 2026 cohort",
		href: "/admin/analytics",
		linkLabel: "Open analytics",
	},
	{
		key: "positioning",
		title: "Lock the parent-facing positioning",
		description:
			"Use one offer everywhere: a free live trial on September 14 for the new ages 9–13 Monday beginner cohort, with a maximum of six students.",
		successMeasure:
			"Homepage, inquiry page, social bios, and campaign copy use the same offer.",
		category: "Conversion",
		phase: 1,
		priority: "High",
		href: "/inquiry",
		linkLabel: "Review trial page",
	},
	{
		key: "campaign-attribution",
		title: "Store campaign attribution with every inquiry",
		description:
			"Capture UTM source, medium, campaign, content, and term alongside the original landing page, referrer, and partner code.",
		successMeasure:
			"Every new inquiry can be traced to a campaign, partner, or direct visit.",
		category: "Measurement",
		phase: 1,
		priority: "High",
		href: "/admin/inquiries",
		linkLabel: "View inquiries",
	},
	{
		key: "full-funnel-events",
		title: "Track the complete enrollment funnel",
		description:
			"Add trial booked, trial attended, and paid enrollment events to the existing CTA click and lead events. Mark the business outcomes as GA4 key events.",
		successMeasure:
			"A campaign report can show visitors, reservations, attendance, and revenue.",
		category: "Measurement",
		phase: 1,
		priority: "High",
		href: "/admin/analytics",
		linkLabel: "View analytics",
	},
	{
		key: "instant-trial-booking",
		title: "Automate trial confirmation once the time is set",
		description:
			"Once the September 14 trial time is finalized, replace the 24-hour manual confirmation with an immediate spot confirmation and calendar invitation.",
		successMeasure:
			"A parent can reserve a trial without waiting for a manual reply.",
		category: "Conversion",
		phase: 1,
		priority: "High",
		href: "/inquiry/book",
		linkLabel: "Review booking flow",
	},
	{
		key: "reduce-form-friction",
		title: "Reduce trial form friction",
		description:
			"Keep only the information needed to reserve a class, make the child's name optional until scheduling, and use parent-facing consent language.",
		successMeasure:
			"Form starts and successful reservations are measured separately, with fewer required fields.",
		category: "Conversion",
		phase: 1,
		priority: "High",
		href: "/inquiry/book",
		linkLabel: "Open form",
	},
	{
		key: "trust-audit",
		title: "Audit every trust claim",
		description:
			"Source or replace unsupported statistics and confirm that scholarship, bilingual-resource, safety, and program claims match what is currently available.",
		successMeasure: "Every public claim is verifiable and current.",
		category: "Trust",
		phase: 1,
		priority: "High",
		href: "/about",
		linkLabel: "Review About page",
	},
	{
		key: "instructor-profiles",
		title: "Publish instructor credibility",
		description:
			"Add instructor names, photos, relevant experience, teaching approach, and screening or safety credentials.",
		successMeasure:
			"Parents can identify who teaches the class and why they are qualified.",
		category: "Trust",
		phase: 1,
		priority: "High",
	},
	{
		key: "trial-explainer",
		title: "Show exactly what happens in the free trial",
		description:
			"Add the class length, group size, time zone, lesson sequence, preparation steps, and a real screen recording or project preview.",
		successMeasure:
			"The trial page answers the major parent questions before the form.",
		category: "Trust",
		phase: 1,
		priority: "Medium",
		href: "/inquiry",
		linkLabel: "Review trial details",
	},
	{
		key: "search-console",
		title: "Verify Google Search Console",
		description:
			"Submit the sitemap, inspect the homepage and commercial pages, request indexing after meaningful updates, and review non-branded queries weekly.",
		successMeasure:
			"The sitemap is accepted and priority pages report as indexed.",
		category: "SEO",
		phase: 1,
		priority: "High",
		href: "https://search.google.com/search-console",
		linkLabel: "Open Search Console",
	},
	{
		key: "commercial-page-canada",
		title: "Build the Canada program landing page",
		description:
			"Create a buyer-focused page for online coding classes for kids in Canada with curriculum, schedule, instructors, pricing, safety, FAQs, and a trial CTA.",
		successMeasure:
			"The page is indexed and receives non-branded commercial impressions.",
		category: "SEO",
		phase: 2,
		priority: "High",
	},
	{
		key: "commercial-page-python",
		title: "Build the Python classes landing page",
		description:
			"Create a dedicated page for beginner live Python classes, showing the progression from variables to real projects.",
		successMeasure:
			"Python-intent campaigns and internal links use this page as their destination.",
		category: "SEO",
		phase: 2,
		priority: "High",
	},
	{
		key: "commercial-page-ai",
		title: "Build the responsible AI classes landing page",
		description:
			"Explain the age-appropriate AI curriculum, privacy approach, projects, ethics, and why Python comes first.",
		successMeasure:
			"AI-intent searches land on a page that directly matches their question.",
		category: "SEO",
		phase: 2,
		priority: "High",
	},
	{
		key: "internal-linking",
		title: "Connect articles to program pages",
		description:
			"Add contextual links from relevant family, Python, Canada, and AI-safety articles to the matching commercial page and trial offer.",
		successMeasure:
			"Every high-value article has a relevant next step, not only a generic footer CTA.",
		category: "SEO",
		phase: 2,
		priority: "Medium",
		href: "/blog",
		linkLabel: "Review articles",
	},
	{
		key: "author-bylines",
		title: "Add credible authorship to educational content",
		description:
			"Use named authors or reviewers, short bios, relevant credentials, and sources where factual claims need support.",
		successMeasure:
			"Every substantial article identifies who created or reviewed it.",
		category: "Trust",
		phase: 2,
		priority: "Medium",
		href: "/blog",
		linkLabel: "Review blog",
	},
	{
		key: "google-search-test",
		title: "Launch a controlled Google Search test",
		description:
			"Create tightly grouped Python, AI, online coding, and age-intent campaigns using phrase and exact match. Send each group to its matching page.",
		successMeasure:
			"Spend, qualified reservations, attended trials, and enrollments are visible by campaign.",
		category: "Paid acquisition",
		phase: 2,
		priority: "High",
	},
	{
		key: "negative-keywords",
		title: "Maintain the paid-search exclusion list",
		description:
			"Exclude adult courses, jobs, salaries, colleges, certifications, downloads, PDFs, and unrelated bootcamp intent; review search terms weekly.",
		successMeasure:
			"Wasted clicks decline and the reservation rate improves over the first month.",
		category: "Paid acquisition",
		phase: 2,
		priority: "Medium",
	},
	{
		key: "partner-workshop",
		title: "Create the partner workshop offer",
		description:
			"Package a free 30–45 minute Build Your First Python AI Helper workshop for libraries, parent councils, homeschool groups, and community organizations.",
		successMeasure:
			"A reusable pitch, workshop outline, registration page, and partner tracking code are ready.",
		category: "Partnerships",
		phase: 2,
		priority: "High",
	},
	{
		key: "partner-outreach",
		title: "Build and contact the first partner list",
		description:
			"Identify 30 aligned Canadian organizations and send personalized, permission-based workshop proposals.",
		successMeasure:
			"At least five conversations and two scheduled workshops are generated.",
		category: "Partnerships",
		phase: 2,
		priority: "High",
	},
	{
		key: "referral-program",
		title: "Launch a measurable family referral program",
		description:
			"Offer a simple program credit, shared bonus workshop, or scholarship contribution and assign unique referral codes.",
		successMeasure:
			"Referred inquiries and enrollments can be separated from other acquisition sources.",
		category: "Retention",
		phase: 2,
		priority: "Medium",
	},
	{
		key: "buyer-content-calendar",
		title: "Publish one buyer-focused resource each week",
		description:
			"Prioritize cost, age readiness, Scratch-to-Python, live versus self-paced, first-class expectations, and instructor-selection questions.",
		successMeasure:
			"Four original resources publish each month and support a commercial page.",
		category: "Content",
		phase: 2,
		priority: "Medium",
		href: "/blog",
		linkLabel: "Open blog",
	},
	{
		key: "weekly-video-system",
		title: "Create the three-post weekly video system",
		description:
			"Repurpose one project demo, one parent question, and one instructor or lesson clip across YouTube, Instagram, and Facebook.",
		successMeasure:
			"Every post uses a tracked free-trial link and can be produced consistently.",
		category: "Content",
		phase: 2,
		priority: "Medium",
	},
	{
		key: "lead-nurture",
		title: "Build the trial reminder and nurture sequence",
		description:
			"Send confirmation, project preview, instructor introduction, safety information, reminders, and a post-trial enrollment invitation with compliant consent handling.",
		successMeasure:
			"The sequence is automated and attendance can be compared before and after launch.",
		category: "Retention",
		phase: 2,
		priority: "High",
	},
	{
		key: "weekly-scorecard",
		title: "Review the growth scorecard every Friday",
		description:
			"Record spend, reservations, cost per reservation, attendance, trial-to-paid conversion, acquisition cost, revenue, and non-branded search growth.",
		successMeasure:
			"Every active channel has a weekly keep, improve, or stop decision.",
		category: "Measurement",
		phase: 3,
		priority: "High",
		href: "/admin/analytics",
		linkLabel: "Open analytics",
	},
	{
		key: "allowable-cpl",
		title: "Set the allowable lead and enrollment costs",
		description:
			"Calculate contribution margin per enrollment and multiply it by the observed lead-to-paid rate to establish a break-even lead cost.",
		successMeasure:
			"Paid and partner campaigns have documented cost limits based on real economics.",
		category: "Measurement",
		phase: 3,
		priority: "High",
	},
	{
		key: "optimize-trial-attendance",
		title: "Improve trial attendance",
		description:
			"Compare attendance by schedule, source, reminder sequence, and booking lead time; fix the largest source of no-shows first.",
		successMeasure:
			"The attended-trial rate improves for two consecutive review periods.",
		category: "Conversion",
		phase: 3,
		priority: "High",
	},
	{
		key: "optimize-trial-to-paid",
		title: "Improve trial-to-paid conversion",
		description:
			"Review parent objections, follow-up timing, instructor fit, class placement, and the enrollment offer using attended trials as the denominator.",
		successMeasure:
			"The paid conversion rate improves without relying on misleading urgency or deeper discounts.",
		category: "Conversion",
		phase: 3,
		priority: "High",
	},
	{
		key: "scale-winning-sources",
		title: "Scale only sources that produce enrollments",
		description:
			"Increase investment in campaigns and partners that generate attended trials and paid students, and pause sources producing only clicks or low-quality leads.",
		successMeasure:
			"Budget decisions use paid enrollments and acquisition cost rather than traffic volume.",
		category: "Paid acquisition",
		phase: 3,
		priority: "High",
	},
];

export const SEO_TASK_KEYS = new Set(
	SEO_CAMPAIGN_TASKS.map((task) => task.key),
);

export const SEO_TASK_CATEGORIES = Array.from(
	new Set(SEO_CAMPAIGN_TASKS.map((task) => task.category)),
);
