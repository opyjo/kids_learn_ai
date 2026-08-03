export const DMZ_APPLICATION_DETAILS = {
	name: "DMZ Black Innovation Summit 2026",
	deadline: "August 24, 2026",
	internalSubmitDate: "August 22, 2026",
	eventDate: "October 28, 2026",
	value: "$150,000+ in investments and grants",
	officialUrl: "https://dmz.torontomu.ca/black-innovation-summit-2026",
	applicationUrl:
		"https://mydmz.torontomu.ca/portal/apply/bis-startup-showcase",
} as const;

export type DmzReadinessStatus = "Ready" | "Confirm" | "Add evidence";

export type DmzReadinessItem = {
	title: string;
	detail: string;
	status: DmzReadinessStatus;
};

export const DMZ_ELIGIBILITY_ITEMS: DmzReadinessItem[] = [
	{
		title: "Black founder or co-founder leads the business",
		detail:
			"Founder must personally confirm this self-identification requirement before applying.",
		status: "Confirm",
	},
	{
		title: "Functional technology MVP",
		detail:
			"KidsLearnAI has a working learning platform, curriculum, trial funnel, family workflows and admin operations ready to demonstrate.",
		status: "Ready",
	},
	{
		title: "Solves a compelling problem with technology",
		detail:
			"The product combines live instruction with purpose-built software to help children build Python skills and responsible AI judgment.",
		status: "Ready",
	},
	{
		title: "Can attend in person in downtown Toronto",
		detail:
			"The founder must confirm availability for the summit on October 28, 2026.",
		status: "Confirm",
	},
	{
		title: "Historical traction evidence",
		detail:
			"Add verified learner, cohort, revenue, conversion, retention and testimonial evidence. Keep September funnel numbers labelled as targets.",
		status: "Add evidence",
	},
];

export const DMZ_SELECTION_EVIDENCE = [
	{
		criterion: "Product stage",
		case: "A functional platform, two-year curriculum, live-class workflow, family accounts, quizzes, concept labs, adaptive practice and admin tools are already built.",
		evidence:
			"Prepare a 60–90 second product demo and three screenshots showing learner, family and instructor/admin experiences.",
	},
	{
		criterion: "Scalability",
		case: "The repeatable unit is a small-group cohort supported by standardized curriculum, instructor playbooks and platform workflows.",
		evidence:
			"Show the 18-month plan: 500 paid learners, 12 trained instructors and 10 institutional partners. Label all three as planning targets.",
	},
	{
		criterion: "Leadership proficiency",
		case: "Opeyemi Ojo combines product-building experience with direct classroom insight as Founder and Lead Instructor.",
		evidence:
			"Add a concise founder biography, relevant career highlights, teaching evidence and one example of learning quickly from families or students.",
	},
	{
		criterion: "Market assessment",
		case: "The initial wedge is approximately 1.93 million Canadian public-school students ages 9–13, reached first through family and community channels.",
		evidence:
			"Use the sourced population figure and clearly identify the $600 learner-year and market-share calculations as assumptions.",
	},
	{
		criterion: "Technological capabilities",
		case: "The product integrates curriculum delivery, age-appropriate AI learning, adaptive practice, quizzes, learning analytics and family operations.",
		evidence:
			"Demonstrate how the platform reinforces human instruction and creates a structured learning loop; avoid presenting AI as a teacher replacement.",
	},
	{
		criterion: "Traction",
		case: "The next commercial proof point is the September 2026 cohort and a measured funnel from trial reservation to paid enrolment.",
		evidence:
			"Add verified historical results now. Later replace the 50 reservations, 35 attended trials and 14–18 paid enrolments targets with actual outcomes.",
	},
] as const;

export type DmzApplicationAnswer = {
	id: string;
	label: string;
	promptFit: string;
	draft: string;
	needsFounderInput?: string;
};

export const DMZ_APPLICATION_ANSWERS: DmzApplicationAnswer[] = [
	{
		id: "company-overview",
		label: "Company overview",
		promptFit:
			"Use for “Tell us about your company” or a short venture description.",
		draft:
			"KidsLearnAI helps Canadian children ages 9–13 learn Python and responsible AI through live small-group instruction and a purpose-built learning platform. Families can begin with a free live class, then progress term by term through a two-year curriculum. The platform supports guided lessons, coding projects, AI concept labs, quizzes, adaptive practice, family accounts and instructor operations. Our goal is to turn children from passive users of AI into confident, thoughtful creators while building a repeatable education business that can grow through families, instructors and institutional partners.",
	},
	{
		id: "problem",
		label: "Problem",
		promptFit: "Use for the customer problem, urgency or “why now?” question.",
		draft:
			"Children are encountering AI earlier, but exposure is growing faster than understanding. Parents who want their children to build real technical skills face a fragmented choice: self-paced apps that can lose beginners when errors appear, general coding programs with uneven responsible-AI depth, or school exposure that varies by classroom. Families need a trusted pathway that combines immediate human feedback, practical Python skills and age-appropriate judgment about bias, privacy and safety. This matters now because AI literacy is becoming a foundational capability, yet most children are still learning to consume AI-powered products rather than understand, question and build with them.",
	},
	{
		id: "solution",
		label: "Solution and product",
		promptFit: "Use for solution, MVP or product-stage questions.",
		draft:
			"KidsLearnAI is a human-led learning system built specifically for children ages 9–13. Live small-group classes give beginners immediate help and accountability. A purpose-built platform extends each class with guided lessons, real Python projects, responsible-AI concept labs, quizzes, adaptive practice and parent-visible progression. The functional MVP already includes the public trial funnel, learner experience, family workflows, a two-year curriculum and admin operations. The technology supports the instructor rather than replacing one: each interaction helps learners practise, helps families see progress and helps the business deliver a more consistent experience across future instructors and cohorts.",
	},
	{
		id: "technology",
		label: "Technology and differentiation",
		promptFit:
			"Use for innovation, technical capability or competitive-advantage questions.",
		draft:
			"KidsLearnAI connects components that are usually fragmented: live feedback, a structured two-year Python and AI pathway, responsible-AI learning, adaptive practice, family visibility and instructor operations. Self-paced products can scale content but offer limited live help; tutoring can personalize learning but is difficult to standardize; general coding programs may not integrate responsible AI throughout the curriculum. Our advantage is the operating system around the learning relationship. As the business grows, curriculum, instructor playbooks, learner evidence and family trust compound together, making the experience more consistent and the delivery model more repeatable.",
	},
	{
		id: "business-model-market",
		label: "Business model and market",
		promptFit:
			"Use for market, customer, revenue model or growth-potential questions.",
		draft:
			"The initial customer is a Canadian family with a child ages 9–13. Families enter through a free live class and can purchase an 8–10 week term, then continue through a two-year learning pathway. The current founding price is CAD $159.99 per term. The initial Canadian wedge includes approximately 1.93 million public-school students in the target age range, before private-school, homeschool or institutional demand. Growth starts with families and trusted community channels, then expands through trained instructors and workshops or pilots with libraries, schools, nonprofits and sponsors. Annual learner revenue, market-share scenarios and institutional pricing remain planning assumptions until validated by real cohort data.",
	},
	{
		id: "traction",
		label: "Traction and validation",
		promptFit: "Use for traction, milestones or evidence of demand.",
		draft:
			"KidsLearnAI has moved beyond an idea: the learning product, two-year curriculum, trial-booking funnel, family workflows and operating tools are built. The September 2026 cohort is the next disciplined commercial validation event. We will measure reservations by source, attended trials, trial-to-paid conversion, acquisition cost, paid enrolment and retention. Our working targets are 50 trial reservations, 35 attended trials and 14–18 paid enrolments; these are forward-looking targets, not historical traction. Before submission, we will add verified historical learner, cohort, revenue and testimonial evidence so reviewers can distinguish what has already been achieved from what the next cohort is designed to prove.",
		needsFounderInput:
			"Replace the final sentence with verified historical numbers and one concise customer proof point.",
	},
	{
		id: "scalability",
		label: "Scalability and growth plan",
		promptFit:
			"Use for scalability, venture potential or the next 12–18 months.",
		draft:
			"The model is designed to scale the quality of a strong instructor, not merely add more screen time. Standardized curriculum, class workflows, learner evidence and instructor playbooks make each cohort repeatable. The next 18 months are intended to validate demand, train additional instructors and establish community and institutional distribution. Current planning targets are 500 paid learners, 12 trained instructors and 10 institutional partners, with a contribution-margin target of at least 55%. Capital would support curriculum and instructor enablement, product and learner-data systems, growth partnerships, and safety and operations. These are proposed milestones and allocations that will be refined as the September cohort produces actual acquisition and delivery data.",
	},
	{
		id: "founder",
		label: "Founder and leadership",
		promptFit: "Use for founder-market fit, leadership or team questions.",
		draft:
			"Opeyemi Ojo is the Founder and Lead Instructor of KidsLearnAI, bringing product-building experience together with direct classroom insight. Building the curriculum, platform and delivery workflow in the same feedback loop creates a practical advantage: learner confusion can become a clearer lesson, a better product interaction or a stronger instructor playbook. Opeyemi also created Brightwick, a learning app for Grades 3–8. This builder-teacher perspective keeps the company focused on outcomes for children and families while developing the systems required to grow beyond founder-led delivery.",
		needsFounderInput:
			"Add two or three specific career credentials, team members or advisors, and a first-person example that demonstrates coachability and leadership.",
	},
	{
		id: "founder-story",
		label: "Black founder story",
		promptFit:
			"Use only if the portal asks about lived experience or connection to the summit mission.",
		draft:
			"[WRITE IN THE FOUNDER’S OWN VOICE: Explain how your lived experience shaped the problem you chose, the families or communities you understand, and the company you are building. Include one concrete moment. Do not turn identity into a generic impact claim or imply that every customer has the same experience.]",
		needsFounderInput:
			"This must remain a personal founder response. Do not submit placeholder or third-person copy.",
	},
	{
		id: "capital",
		label: "Use of capital",
		promptFit:
			"Use for prize use, financing plan or “what would this unlock?” questions.",
		draft:
			"Investment or grant capital would accelerate four connected milestones: 35% for curriculum and instructor enablement, 30% for product and learner-data systems, 25% for growth and partnerships, and 10% for operations, safety and legal readiness. The objective is to turn a founder-led product into a repeatable growth system while preserving teaching quality and family trust. We are exploring a CAD $500,000 pre-seed for an 18-month plan; the final raise, allocation and financing terms are proposals rather than committed terms and will be refined using actual cohort economics.",
	},
];

export const DMZ_NINETY_SECOND_PITCH =
	"Children are growing up with AI, but most are learning to use it before they learn to understand it. Parents need more than another app: beginners need a trusted instructor when code breaks and guidance when AI raises questions about bias, privacy and safety. KidsLearnAI helps Canadian children ages 9–13 learn Python and responsible AI through live small-group classes and a purpose-built platform. Families start with a free class, then progress term by term through a two-year pathway of coding projects, AI concept labs, quizzes and adaptive practice. The product and operating workflow are built. Our next milestone is the September 2026 cohort, where we will measure the complete funnel from reservation and attendance to paid enrolment and retention. We begin with approximately 1.93 million Canadian public-school students in our target age range, then grow through trained instructors and partnerships with libraries, schools, nonprofits and sponsors. I am Opeyemi Ojo, a builder and lead instructor. I created KidsLearnAI because children should be able to question and shape the technology around them—not just consume it. DMZ would help us sharpen the story, validate the growth engine and turn a founder-led learning experience into a venture-backable company.";

export const DMZ_REQUIRED_INPUTS = [
	"Confirm that a Black founder or co-founder leads KidsLearnAI and wants to self-identify on this application.",
	"Confirm in-person availability in downtown Toronto on October 28, 2026.",
	"Enter the legal company name, incorporation status and date, headquarters and ownership details.",
	"Add verified historical traction: learners served, paid learners, cohorts delivered, revenue, conversion, retention and partnerships.",
	"Choose one consented parent quote and one learner project or outcome that can be shown publicly.",
	"Add founder career credentials, team members, advisors and a personal Black-founder story in the founder's own voice.",
	"Confirm fundraising history, current cap table, current raise and any investment terms before using the financing answer.",
	"Log into the DMZ portal and copy the exact questions, character limits and upload requirements into this workspace for a final edit.",
] as const;

export const DMZ_WORKBACK_PLAN = [
	{
		date: "August 3–4",
		task: "Confirm both eligibility gates, create or access the DMZ portal account, and capture every exact application question and limit.",
	},
	{
		date: "August 5–8",
		task: "Add legal company details, founder biography, team information, verified traction and the founder's first-person story.",
	},
	{
		date: "August 9–14",
		task: "Record the product demo, select screenshots and customer proof, and tailor the answer bank to the portal prompts.",
	},
	{
		date: "August 15–20",
		task: "Use any verified workshop or September-campaign evidence available by then, tighten the pitch and run two timed rehearsals.",
	},
	{
		date: "August 21",
		task: "Complete a claim audit: separate historical facts, sourced market data and forward-looking targets; obtain a second-person review.",
	},
	{
		date: "August 22",
		task: "Submit the application and save the confirmation, leaving a two-day buffer before the official deadline.",
	},
] as const;
