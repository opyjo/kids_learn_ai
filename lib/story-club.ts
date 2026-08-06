export type StoryDialogue = {
	speaker: "Maya" | "Leo" | "Pixel";
	text: string;
};

export type StoryPanel = {
	id: string;
	number: number;
	eyebrow: string;
	title: string;
	paragraphs: string[];
	dialogue?: StoryDialogue[];
};

export type StoryChoice = {
	id: string;
	label: string;
	feedback: string;
	isBest: boolean;
};

export type StoryChallengeOption = {
	id: string;
	label: string;
	feedback: string;
	correct: boolean;
};

type StoryIssueBase = {
	slug: string;
	issueNumber: number;
	title: string;
	description: string;
	concept: string;
	releaseDate: string;
	releaseLabel: string;
	readingMinutes: number;
	season: string;
};

export type PublishedStoryIssue = StoryIssueBase & {
	status: "published";
	coverImage: string;
	coverAlt: string;
	panels: StoryPanel[];
	choicePrompt: string;
	choices: StoryChoice[];
	detectiveSteps: Array<{ label: string; description: string }>;
	challenge: {
		question: string;
		options: StoryChallengeOption[];
	};
	nextIssueTeaser: string;
};

export type UpcomingStoryIssue = StoryIssueBase & {
	status: "upcoming";
	teaser: string;
};

export type StoryIssue = PublishedStoryIssue | UpcomingStoryIssue;

export const storyIssues: StoryIssue[] = [
	{
		slug: "the-homework-bot-that-knew-too-much",
		issueNumber: 1,
		title: "The Homework Bot That Knew Too Much",
		description:
			"Maya and Leo's helpful AI gives one spectacularly silly answer. Can they catch it before it reaches the classroom wall?",
		concept: "AI mistakes & fact-checking",
		releaseDate: "2026-08-06",
		releaseLabel: "August 6, 2026",
		readingMinutes: 6,
		season: "Season 1 · Truth Detectives",
		status: "published",
		coverImage: "/images/story-club/homework-bot-cover.jpg",
		coverAlt:
			"Maya and Leo laugh with a friendly robot that has projected a crowned penguin standing in a desert",
		panels: [
			{
				id: "missing-fact",
				number: 1,
				eyebrow: "After school in the maker space",
				title: "One poster. One missing fact.",
				paragraphs: [
					"Maya and Leo had almost finished their class poster about emperor penguins. They had drawings, a map, and even a tiny paper iceberg. Only the habitat box was empty.",
				],
				dialogue: [
					{
						speaker: "Maya",
						text: "Pixel, give us one surprising fact about where emperor penguins live.",
					},
					{
						speaker: "Pixel",
						text: "Researching at maximum cleverness!",
					},
				],
			},
			{
				id: "confident-answer",
				number: 2,
				eyebrow: "Three seconds later",
				title: "Pixel sounds completely certain.",
				paragraphs: [
					"The little robot whirred, blinked twice, and projected a picture of a penguin wearing a crown in the middle of a blazing desert.",
				],
				dialogue: [
					{
						speaker: "Pixel",
						text: "Emperor penguins live in hot deserts. The warm sand keeps their wings dry!",
					},
					{
						speaker: "Leo",
						text: "That answer arrived fast... but did the truth arrive with it?",
					},
				],
			},
			{
				id: "truth-reveal",
				number: 3,
				eyebrow: "The fact-check",
				title: "A confident voice is not a source.",
				paragraphs: [
					"Maya and Leo checked two trusted science sources. Emperor penguins live in Antarctica, one of the coldest places on Earth—not in a desert.",
					"Pixel had not tried to trick them. It had built a sentence that sounded like an answer, but it did not actually know whether the sentence was true. AI can sometimes invent details like this. People often call that a hallucination.",
				],
				dialogue: [
					{
						speaker: "Maya",
						text: "Pixel can help us think, but we still have to be the truth detectives.",
					},
					{
						speaker: "Pixel",
						text: "Fact-check accepted. Crowned desert penguin deleted!",
					},
				],
			},
		],
		choicePrompt:
			"Pixel's answer sounds confident. What should Maya and Leo do next?",
		choices: [
			{
				id: "copy-it",
				label: "Copy it onto the poster",
				feedback:
					"Fast—but risky. An AI answer can sound polished even when a detail is invented.",
				isBest: false,
			},
			{
				id: "ask-again",
				label: "Ask Pixel if it is really sure",
				feedback:
					"A useful clue, but the same AI might repeat the same mistake just as confidently.",
				isBest: false,
			},
			{
				id: "check-sources",
				label: "Check two trusted science sources",
				feedback:
					"Excellent detective work. Comparing reliable sources gives the team evidence, not just confidence.",
				isBest: true,
			},
		],
		detectiveSteps: [
			{
				label: "Freeze",
				description: "Pause before copying, sharing, or acting on the answer.",
			},
			{
				label: "Ask",
				description:
					"What is the claim, and where could reliable evidence come from?",
			},
			{
				label: "Compare",
				description: "Check the important detail in two trustworthy places.",
			},
		],
		challenge: {
			question:
				"Your AI says, “The first computer was built by a pirate in 1742.” What is the smartest first reaction?",
			options: [
				{
					id: "sounds-specific",
					label: "Believe it because the answer includes a date",
					feedback:
						"Specific details can still be invented. A date is not the same thing as evidence.",
					correct: false,
				},
				{
					id: "verify-claim",
					label: "Pause and verify the claim with reliable sources",
					feedback:
						"Exactly. Surprising claims deserve a curious pause and a source check.",
					correct: true,
				},
				{
					id: "share-first",
					label: "Send it to friends and ask what they think",
					feedback:
						"That could spread the mistake. Verify first, then share what you discover.",
					correct: false,
				},
			],
		},
		nextIssueTeaser:
			"Next Thursday: a perfect-looking video arrives in the class group chat—but something in the shadows does not add up.",
	},
	{
		slug: "the-video-that-never-happened",
		issueNumber: 2,
		title: "The Video That Never Happened",
		description:
			"A famous astronaut seems to announce a school visit. Maya notices one tiny clue that changes everything.",
		concept: "Deepfakes & verification",
		releaseDate: "2026-08-13",
		releaseLabel: "August 13, 2026",
		readingMinutes: 7,
		season: "Season 1 · Truth Detectives",
		status: "upcoming",
		teaser: "Can you spot the clue before Leo forwards the video?",
	},
	{
		slug: "the-case-of-the-missing-voice",
		issueNumber: 3,
		title: "The Case of the Missing Voice",
		description:
			"Pixel sorts ideas for the school fair—but keeps ignoring one team's brilliant invention.",
		concept: "Bias & fair data",
		releaseDate: "2026-08-20",
		releaseLabel: "August 20, 2026",
		readingMinutes: 6,
		season: "Season 1 · Truth Detectives",
		status: "upcoming",
		teaser: "The result looks fair. The training examples tell another story.",
	},
	{
		slug: "operation-secret-prompt",
		issueNumber: 4,
		title: "Operation: Secret Prompt",
		description:
			"Leo wants better game ideas, but Pixel asks for information that should stay private.",
		concept: "Privacy & safe prompting",
		releaseDate: "2026-08-27",
		releaseLabel: "August 27, 2026",
		readingMinutes: 5,
		season: "Season 1 · Truth Detectives",
		status: "upcoming",
		teaser:
			"Some details make a prompt better. Others should never leave your head.",
	},
];

export const currentStory = storyIssues.find(
	(issue): issue is PublishedStoryIssue => issue.status === "published",
);

export function getPublishedStory(slug: string) {
	const story = storyIssues.find((issue) => issue.slug === slug);
	return story?.status === "published" ? story : undefined;
}
