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
		key: "positioning",
		title: "Lock the parent-facing positioning",
		description:
			"Use one promise everywhere: live online Python and responsible AI classes for Canadian kids ages 9–13, with small groups, real projects, and a free first class.",
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
		title: "Let parents reserve a trial immediately",
		description:
			"Replace the 24-hour follow-up step with available Monday and Wednesday trial times, confirmation, and a calendar invitation.",
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
