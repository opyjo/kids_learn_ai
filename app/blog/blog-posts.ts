export type BlogPost = {
	slug: string;
	title: string;
	description: string;
	category: string;
	readingTime: string;
	date: string;
	featured?: boolean;
	visual:
		| "brain"
		| "code"
		| "compass"
		| "family"
		| "future"
		| "lightbulb"
		| "shield"
		| "sparkles"
		| "users";
	tone: "blue" | "coral" | "green" | "indigo" | "purple" | "yellow";
};

export const posts: BlogPost[] = [
	{
		slug: "ai-projects-kids-can-build-with-python",
		title: "7 AI Projects Kids Can Build with Python",
		description:
			"From a mood-aware playlist helper to a tiny image classifier, these projects turn Python basics into creative, confidence-building AI experiments.",
		category: "Projects",
		readingTime: "9 min read",
		date: "July 18, 2026",
		featured: true,
		visual: "lightbulb",
		tone: "yellow",
	},
	{
		slug: "safe-ai-use-at-home",
		title: "A Family Guide to Safe, Smart AI Use at Home",
		description:
			"Simple routines that help children protect their privacy, check AI answers, and know when to bring a trusted adult into the conversation.",
		category: "AI Safety",
		readingTime: "8 min read",
		date: "July 11, 2026",
		visual: "shield",
		tone: "green",
	},
	{
		slug: "parents-guide-supporting-young-coders",
		title: "You Don’t Need to Code to Support a Young Coder",
		description:
			"A practical guide for parents and caregivers who want to encourage curiosity, persistence, and healthy learning habits—without becoming the tech expert.",
		category: "For Families",
		readingTime: "7 min read",
		date: "July 4, 2026",
		visual: "family",
		tone: "coral",
	},
	{
		slug: "building-inclusive-ai-classrooms",
		title: "Building an AI Classroom Where Every Child Belongs",
		description:
			"Concrete ways educators can make projects, examples, teamwork, and feedback more inclusive for every young learner.",
		category: "For Educators",
		readingTime: "8 min read",
		date: "June 27, 2026",
		visual: "users",
		tone: "purple",
	},
	{
		slug: "why-learning-ai-young-matters",
		title: "9 Reasons Kids Should Learn AI Concepts Early",
		description:
			"Why starting with Python fundamentals unlocks confidence, creativity, and critical thinking for tomorrow’s AI-powered world.",
		category: "AI Literacy",
		readingTime: "8 min read",
		date: "February 24, 2025",
		visual: "brain",
		tone: "blue",
	},
	{
		slug: "python-best-first-language",
		title: "Why Python Is the Best First Language for Young Learners",
		description:
			"How Python’s readable syntax and versatile libraries make it a welcoming entry point into computer science.",
		category: "Python",
		readingTime: "6 min read",
		date: "March 18, 2025",
		visual: "code",
		tone: "indigo",
	},
	{
		slug: "teaching-ai-ethics-to-kids",
		title: "Teaching AI Ethics: Talking About Bias and Fairness",
		description:
			"Practical strategies that help children understand training data, bias, and their responsibility as technology creators.",
		category: "AI Ethics",
		readingTime: "10 min read",
		date: "March 25, 2025",
		visual: "compass",
		tone: "coral",
	},
	{
		slug: "future-of-ai-in-education",
		title: "The Future of AI in Education: Beyond the Homework Bot",
		description:
			"How AI is growing from a simple answer tool into a learning coach—and what that shift means for students.",
		category: "Education",
		readingTime: "7 min read",
		date: "March 31, 2025",
		visual: "future",
		tone: "blue",
	},
	{
		slug: "black-youth-stem-canada",
		title: "Closing the Gap: Supporting Black Youth in Canadian STEM",
		description:
			"The barriers behind underrepresentation and the practical steps families, schools, and communities can take.",
		category: "Community",
		readingTime: "9 min read",
		date: "February 28, 2025",
		visual: "sparkles",
		tone: "purple",
	},
];
