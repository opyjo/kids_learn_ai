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
	/** Short scene shown after choosing, so the pick visibly shapes the story. */
	bridge: string;
	isBest: boolean;
};

export type StoryClueHotspot = {
	id: string;
	label: string;
	feedback: string;
	/** Center of the tap target, as percentages of the image width/height. */
	x: number;
	y: number;
};

export type StoryClueHunt = {
	prompt: string;
	image: string;
	imageAlt: string;
	hotspots: StoryClueHotspot[];
	successMessage: string;
};

export type AskPixelQuestion = {
	id: string;
	label: string;
	scriptedReply: string;
};

export type AskPixelConfig = {
	intro: string;
	claim: string;
	questions: AskPixelQuestion[];
	verdictPrompt: string;
	verdict: {
		isTrue: boolean;
		correctFeedback: string;
		incorrectFeedback: string;
	};
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
	clueHunt?: StoryClueHunt;
	choicePrompt: string;
	choices: StoryChoice[];
	askPixel?: AskPixelConfig;
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
		clueHunt: {
			prompt:
				"Look closely at Pixel's projection. Tap the three details that should make a detective suspicious.",
			image: "/images/story-club/homework-bot-cover.jpg",
			imageAlt:
				"Pixel projects a picture of a crowned penguin standing in a sunny desert while Maya and Leo watch",
			hotspots: [
				{
					id: "crown",
					label: "A golden crown and royal cape",
					feedback:
						"“Emperor” is just the species name—real emperor penguins never wear crowns or capes.",
					x: 78,
					y: 14,
				},
				{
					id: "desert",
					label: "Desert sand and a cactus",
					feedback:
						"Emperor penguins live on Antarctic ice and swim in freezing oceans—not on hot sand.",
					x: 91.5,
					y: 33,
				},
				{
					id: "sun",
					label: "A blazing hot sun",
					feedback:
						"Antarctica is one of the coldest places on Earth. A scorching sun is a giant red flag.",
					x: 93,
					y: 9,
				},
			],
			successMessage:
				"Case notes updated! You spotted every suspicious detail before trusting the picture.",
		},
		choicePrompt:
			"Pixel's answer sounds confident. What should Maya and Leo do next?",
		choices: [
			{
				id: "copy-it",
				label: "Copy it onto the poster",
				feedback:
					"Fast—but risky. An AI answer can sound polished even when a detail is invented.",
				bridge:
					"Leo grabbed a marker and copied the desert fact straight onto the poster. Ten minutes later Ms. Rivera stopped, raised one eyebrow, and asked where the evidence came from. The whole team suddenly wished they had checked first.",
				isBest: false,
			},
			{
				id: "ask-again",
				label: "Ask Pixel if it is really sure",
				feedback:
					"A useful clue, but the same AI might repeat the same mistake just as confidently.",
				bridge:
					"“Pixel, are you absolutely sure?” Leo asked. Pixel blinked cheerfully. “Confidence level: 99 percent!” But a confident repeat is still just a repeat—the team realized they needed real evidence, not a louder answer.",
				isBest: false,
			},
			{
				id: "check-sources",
				label: "Check two trusted science sources",
				feedback:
					"Excellent detective work. Comparing reliable sources gives the team evidence, not just confidence.",
				bridge:
					"Maya opened the library's science encyclopedia while Leo pulled up the aquarium's penguin page. Two trusted sources, one matching answer—and it did not match Pixel's.",
				isBest: true,
			},
		],
		askPixel: {
			intro:
				"Detective practice time! I just remembered a brand-new fact. Want to test your F.A.C.T. skills on me?",
			claim:
				"Goldfish can only remember things for three seconds. That is why they are always surprised by their own fish tank!",
			questions: [
				{
					id: "source",
					label: "Where did you learn that?",
					scriptedReply:
						"Hmm. Searching my memory banks... I do not actually have a source saved. It is just something I have heard many, many times!",
				},
				{
					id: "sure",
					label: "Are you really sure?",
					scriptedReply:
						"I sound sure, do I not? But careful, detective—my confident voice works exactly the same whether I am right or wrong.",
				},
				{
					id: "evidence",
					label: "What evidence do you have?",
					scriptedReply:
						"Evidence... loading... zero files found! If you want real evidence, a trusted science source knows more than my hard drive does.",
				},
			],
			verdictPrompt:
				"Time for your detective verdict. Is Pixel's goldfish fact true?",
			verdict: {
				isTrue: false,
				correctFeedback:
					"Case cracked! The three-second story is a famous myth—scientists have trained goldfish to remember feeding routes for months. You froze, asked, and compared instead of trusting a confident voice.",
				incorrectFeedback:
					"That is what most people guess—which is exactly why detectives check! Scientists have trained goldfish to remember things for months. The myth spreads because it gets repeated, not because it has evidence.",
			},
		},
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

export const publishedStories = storyIssues.filter(
	(issue): issue is PublishedStoryIssue => issue.status === "published",
);

// The most recent published issue, so the "this week" surfaces stay fresh
// once later issues ship without touching every component.
export const currentStory = publishedStories.reduce<
	PublishedStoryIssue | undefined
>(
	(latest, issue) =>
		!latest || issue.issueNumber > latest.issueNumber ? issue : latest,
	undefined,
);

export function getPublishedStory(slug: string) {
	const story = storyIssues.find((issue) => issue.slug === slug);
	return story?.status === "published" ? story : undefined;
}
