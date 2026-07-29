export type ArticleSection = {
	title: string;
	paragraphs: string[];
	bullets?: string[];
	callout?: string;
};

export type ArticleLink = {
	label: string;
	href: string;
};

export type ExpandedArticle = {
	slug: string;
	title: string;
	description: string;
	category: string;
	readingTime: string;
	date: string;
	publishedAt: string;
	updatedAt: string;
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
	intro: string;
	takeaways: [string, string, string];
	sections: ArticleSection[];
	relatedLinks: ArticleLink[];
	sources: ArticleLink[];
};

const PUBLISHED_AT = "2026-07-29";
const PUBLISHED_DATE = "July 29, 2026";

export const expandedArticles: ExpandedArticle[] = [
	{
		slug: "python-variable-projects-for-kids",
		title: "5 Python Variable Projects Kids Can Build Today",
		description:
			"Five small Python projects that help young beginners understand variables by using them to build games, stories, scoreboards, and useful tools.",
		category: "Projects",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "code",
		tone: "indigo",
		intro:
			"Variables stop feeling abstract when a child uses them to remember a player’s name, update a score, or change a story. These five projects turn the idea of a labelled box into something visible and fun.",
		takeaways: [
			"Five projects that use only beginner-friendly Python.",
			"Questions that help a child explain what each variable stores.",
			"A simple build–change–predict routine for deeper understanding.",
		],
		sections: [
			{
				title: "Begin with one value that matters",
				paragraphs: [
					"A variable is a name connected to a value. That definition is correct, but it rarely sticks until the value affects something a learner cares about. A player_name variable changes a greeting. A score variable records progress. A favourite_animal variable changes a whole story.",
					"For every project, ask the learner to predict what will change before running the program. That small pause turns typing into reasoning. If the prediction is wrong, the result becomes useful evidence rather than a failure.",
				],
				callout:
					"Use variable names that explain their job: player_score is easier to understand than x.",
			},
			{
				title: "Project 1: A personalized mission card",
				paragraphs: [
					"Store a name, a chosen role, and a destination. Print a short mission using an f-string. A child can begin with explorer, ocean scientist, and Arctic station, then swap each value to see how one program creates many messages.",
				],
				bullets: [
					"Variables: player_name, role, destination",
					"Challenge: add a tool the explorer should carry",
					"Explain: which line stores information and which line displays it?",
				],
			},
			{
				title: "Project 2: A snack-shop total",
				paragraphs: [
					"Store the price of one snack and the number of snacks. Multiply them to calculate a total. This connects variables directly to Term 2 math and shows why storing values is more useful than repeating numbers throughout a program.",
				],
				bullets: [
					"Variables: snack_price, number_of_snacks, total_cost",
					"Challenge: add the cost of one drink",
					"Test: try zero snacks, one snack, and ten snacks",
				],
			},
			{
				title: "Project 3: A two-round scoreboard",
				paragraphs: [
					"Create a starting score, add points from two rounds, and print the final result after each update. This introduces the important idea that a variable can change while the program runs.",
				],
				bullets: [
					"Variables: score, round_one_points, round_two_points",
					"Challenge: subtract points for a missed clue",
					"Explain: why does score have a different value at the end?",
				],
			},
			{
				title: "Projects 4 and 5: A silly story and an age calculator",
				paragraphs: [
					"For the story, store a character, place, object, and action, then combine them into three sentences. For the calculator, store the learner’s age and calculate an approximate age in months. Both projects use the same concept in different ways: one changes text and the other changes numbers.",
				],
				bullets: [
					"Story challenge: change only one variable and identify every sentence it affects",
					"Calculator challenge: calculate an age five years from now",
					"Reflection: which values are text, and which are numbers?",
				],
			},
			{
				title: "Finish with an explanation, not just working code",
				paragraphs: [
					"Ask the learner to choose one project and explain it without reading the code line by line. They should be able to name the input, the stored values, the calculation or transformation, and the output. That explanation is stronger evidence of understanding than a program that happens to run.",
					"When the projects feel comfortable, connect them to the guided lessons in Math Wizard or turn one into a larger calculator, quiz, or story project.",
				],
			},
		],
		relatedLinks: [
			{
				label: "Explore the Math Wizard lessons",
				href: "/lessons/term-2-math-wizard",
			},
			{ label: "Try the Python playground", href: "/playground" },
			{
				label: "Read why Python works well for young beginners",
				href: "/blog/python-best-first-language",
			},
		],
		sources: [
			{
				label: "The official Python tutorial",
				href: "https://docs.python.org/3/tutorial/introduction.html",
			},
		],
	},
	{
		slug: "teach-kids-to-debug-python",
		title: "How to Teach Kids to Debug Python Without Giving Away the Answer",
		description:
			"A practical debugging routine that helps children read errors, test ideas, and fix Python programs while keeping ownership of the solution.",
		category: "Projects",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "lightbulb",
		tone: "yellow",
		intro:
			"Fixing the code for a child may end the error quickly, but it also removes the most valuable part of the lesson. A good debugging conversation gives just enough support for the learner to find the next clue.",
		takeaways: [
			"A repeatable six-step debugging conversation.",
			"Prompts that guide without revealing the fix.",
			"Ways to make error messages feel useful instead of frightening.",
		],
		sections: [
			{
				title: "Treat a bug as evidence",
				paragraphs: [
					"A bug tells us that the computer did something different from what we expected. That difference is a clue. When adults immediately rewrite the line, children learn that errors require rescue. When adults help them compare expectation with result, children learn a process they can reuse.",
					"Begin by separating the child from the code. The program has a problem; the learner is not the problem. Calm language matters because attention is easier to direct when the learner does not feel judged.",
				],
			},
			{
				title: "Use the read–predict–isolate–change–run–explain loop",
				paragraphs: [
					"First, read the complete error and find the line number. Next, predict what that line was meant to do. Isolate the smallest suspicious part. Change one thing, run again, and explain what the new result tells you.",
				],
				bullets: [
					"Read: What words or line number does Python give us?",
					"Predict: What did you expect to happen?",
					"Isolate: Which small line can we inspect first?",
					"Change: What is one possible fix?",
					"Run: Did the evidence change?",
					"Explain: Why did that change work—or not work?",
				],
			},
			{
				title: "Ask questions that preserve ownership",
				paragraphs: [
					"Useful prompts point toward evidence. Ask whether the variable is spelled the same way in both places, whether input returned text or a number, or whether every opening bracket has a closing partner.",
					"Avoid questions that secretly contain the full answer. “Should you put int around age?” produces compliance. “What type does input return, and what type does addition need?” produces reasoning.",
				],
				callout:
					"Give one clue at a time. Let the learner run the experiment before offering the next clue.",
			},
			{
				title: "Keep a tiny test table",
				paragraphs: [
					"A program that works once is not fully tested. Choose three inputs: an ordinary case, a boundary such as zero, and an unusual case. Write the expected result before running each one.",
					"For a score calculator, try 5 and 3, then 0 and 4, then a larger pair. For a name greeting, try a short name, a name with a hyphen, and blank input. Children begin to see testing as a creative search for weak spots.",
				],
			},
			{
				title: "Know when to step in",
				paragraphs: [
					"Support should increase when frustration blocks learning. Re-state the goal, hide unrelated code, or offer two possible areas to inspect. If the environment itself is broken, fix that problem openly so the child does not spend energy debugging something outside the lesson.",
					"End by asking the learner to describe the bug and the evidence that led to the fix. That short explanation helps the strategy travel to the next project.",
				],
			},
		],
		relatedLinks: [
			{ label: "Practise in the Python playground", href: "/playground" },
			{
				label: "Explore beginner Python lessons",
				href: "/lessons/term-1-hello-python",
			},
			{
				label: "Support a young coder without being the expert",
				href: "/blog/parents-guide-supporting-young-coders",
			},
		],
		sources: [
			{
				label: "Python documentation: errors and exceptions",
				href: "https://docs.python.org/3/tutorial/errors.html",
			},
		],
	},
	{
		slug: "first-machine-learning-project-without-personal-data",
		title: "A First Machine Learning Project for Kids—Without Personal Data",
		description:
			"A safe plan for helping children build and evaluate a tiny classifier using drawings or invented data instead of faces, names, or private information.",
		category: "Projects",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "brain",
		tone: "blue",
		intro:
			"A child can learn training data, labels, testing, and model mistakes without uploading a single face or personal conversation. The best first dataset is small, visible, and safe enough for the learner to inspect.",
		takeaways: [
			"A privacy-conscious first classification project.",
			"A clear training and testing routine.",
			"Questions that reveal bias without ranking children.",
		],
		sections: [
			{
				title: "Choose categories that do not describe people",
				paragraphs: [
					"Start with two categories of child-created drawings, such as stars and hearts, spirals and zigzags, or sunny and rainy symbols. Avoid faces, voices, handwriting tied to names, school records, locations, or private messages.",
					"The learning goal is to observe how examples affect a classifier. Personal data adds risk without improving that goal. UNICEF’s child-centred AI guidance emphasizes privacy, safety, fairness, transparency, and children’s well-being.",
				],
			},
			{
				title: "Build a small, balanced training set",
				paragraphs: [
					"Ask several people to draw each safe category on blank cards or in a local drawing tool. Use the same number of examples for both labels. Include reasonable variety: large and small shapes, thick and thin lines, and different drawing styles.",
					"Explain that a label is the answer attached to an example. The model looks for patterns connecting examples to labels. It does not understand a heart the way a person does.",
				],
				bullets: [
					"Count the examples in each category",
					"Keep test drawings separate from training drawings",
					"Remove names or identifying marks",
					"Record what kinds of variety are included",
				],
			},
			{
				title: "Predict before testing",
				paragraphs: [
					"Before showing the model a new drawing, ask the learner to predict whether it will be easy or confusing and why. Test clear examples first, then rotate a shape, draw it smaller, overlap two shapes, or use a style missing from the training set.",
					"Record the model’s guess, the expected label, and one possible reason for the result. A mistake is not proof that machine learning is useless. It is evidence about the examples and patterns the model had available.",
				],
			},
			{
				title: "Improve the data, then test again",
				paragraphs: [
					"If tiny stars are often misclassified, add several tiny stars to the training set. If one person’s drawings fail more often, add varied examples from that style. Retrain and repeat the same tests so the comparison is meaningful.",
					"This is the central lesson: performance depends on the data, labels, design choices, and test cases selected by people.",
				],
			},
			{
				title: "Finish with a model card",
				paragraphs: [
					"Create a one-page model card written by the child. It should name the two categories, describe the training examples, list situations where the model worked, list situations where it struggled, and state that it should not be used to make decisions about people.",
					"That final explanation turns a novelty demo into an AI literacy project. The learner can describe not only what the model guessed, but also why its limits matter.",
				],
				callout:
					"Keep the activity local when possible, and have an adult review any external tool’s age requirements and privacy terms.",
			},
		],
		relatedLinks: [
			{
				label: "Try seven more beginner AI projects",
				href: "/blog/ai-projects-kids-can-build-with-python",
			},
			{
				label: "Learn about bias and fairness",
				href: "/blog/teaching-ai-ethics-to-kids",
			},
			{ label: "Explore the AI Labs", href: "/labs" },
		],
		sources: [
			{
				label: "UNICEF policy guidance on AI for children",
				href: "https://www.unicef.org/innocenti/reports/policy-guidance-ai-children",
			},
			{
				label: "Office of the Privacy Commissioner of Canada: AI and privacy",
				href: "https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/",
			},
		],
	},
	{
		slug: "how-to-explain-ai-to-a-child",
		title: "How to Explain AI to a Child: A Parent’s Plain-English Guide",
		description:
			"A simple, accurate way for parents to explain artificial intelligence, machine learning, training data, predictions, and mistakes to children.",
		category: "For Families",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "family",
		tone: "coral",
		intro:
			"Children do not need a lecture on neural networks to understand the most important truth about AI: people build systems that use examples and rules to produce outputs, and those outputs still need human judgement.",
		takeaways: [
			"A five-part explanation children can repeat in their own words.",
			"Everyday examples that separate AI from ordinary automation.",
			"Questions that build curiosity without making AI sound magical.",
		],
		sections: [
			{
				title: "Start with what AI does",
				paragraphs: [
					"Try this definition: artificial intelligence is a name for computer systems designed to do tasks that usually need human-like skills, such as recognizing patterns, working with language, or making predictions.",
					"Then immediately add that AI is built by people. People choose the goal, collect or create examples, design the system, test it, and decide where it should be used.",
				],
			},
			{
				title: "Use the examples–patterns–prediction story",
				paragraphs: [
					"Imagine showing a program many labelled drawings of stars and hearts. The program calculates patterns in the examples. When it sees a new drawing, it predicts which label fits better.",
					"The prediction is not a thought or feeling. It is a calculated result based on the patterns available to the system. If the examples are limited or the new drawing is unusual, the prediction may be wrong.",
				],
				bullets: [
					"Examples are the material the system learns patterns from",
					"Training is the process of adjusting the system using those examples",
					"A model is the pattern-making system produced by training",
					"A prediction is the model’s calculated output for new input",
				],
			},
			{
				title: "Compare AI with an ordinary rule",
				paragraphs: [
					"A calculator follows exact rules to add two numbers. A spam filter estimates whether a new message resembles examples of unwanted mail. Both are computer programs, but only the second example relies on learned patterns.",
					"Not every impressive program is AI, and AI is not automatically better. Exact rules are often safer when a task has a clear correct calculation.",
				],
			},
			{
				title: "Explain generative AI without saying it knows",
				paragraphs: [
					"A child-friendly explanation is that a generative AI tool creates text, images, or other media by calculating patterns learned from large collections of examples. In a chatbot, it produces a likely sequence of words in response to a message.",
					"It can create a fluent answer without checking whether every detail is true. That is why sounding confident is not the same as knowing.",
				],
			},
			{
				title: "Ask three questions together",
				paragraphs: [
					"When your family notices AI in a recommendation, game, translation tool, or chatbot, ask what information goes in, what result comes out, and who checks whether the result is appropriate.",
					"UNESCO’s student framework combines a human-centred mindset, ethics, AI techniques, and system design. Families can practise all four simply by keeping people, consequences, and checking in the conversation.",
				],
				callout:
					"A useful closing sentence: AI can be powerful and creative, but it is a tool—not a person, teacher, or unquestionable source.",
			},
		],
		relatedLinks: [
			{
				label: "Read why learning AI concepts early matters",
				href: "/blog/why-learning-ai-young-matters",
			},
			{
				label: "Use AI safely at home",
				href: "/blog/safe-ai-use-at-home",
			},
			{ label: "Explore hands-on AI Labs", href: "/labs" },
		],
		sources: [
			{
				label: "UNESCO AI competency framework for students",
				href: "https://www.unesco.org/en/articles/ai-competency-framework-students",
			},
			{
				label: "UNICEF policy guidance on AI for children",
				href: "https://www.unicef.org/innocenti/reports/policy-guidance-ai-children",
			},
		],
	},
	{
		slug: "ai-chatbot-privacy-checklist-canadian-families",
		title: "AI Chatbot Privacy Checklist for Canadian Families",
		description:
			"A practical Canadian family checklist for reviewing chatbot privacy, protecting children’s personal information, and setting safer household routines.",
		category: "For Families",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "shield",
		tone: "green",
		intro:
			"A chatbot conversation can feel private even when the service may store, review, or use information behind the scenes. Before a child types, families should know what data the tool receives and what choices are available.",
		takeaways: [
			"A before-use privacy check based on Canadian guidance.",
			"Clear household rules children can remember.",
			"Steps to take after personal information is shared accidentally.",
		],
		sections: [
			{
				title: "Begin with the tool, account, and age rules",
				paragraphs: [
					"Confirm the exact service being used rather than relying on a familiar-sounding name or an unofficial copy. Read the provider’s minimum age and account requirements with your child. If an adult account is required, that does not automatically make every use suitable for a child.",
					"Look for a plain-language privacy explanation. The Office of the Privacy Commissioner of Canada advises people to consider what information an AI chatbot collects, why it is collected, how it is used, and whether it may be used to improve or train systems.",
				],
			},
			{
				title: "Identify what should never enter the chat",
				paragraphs: [
					"Create a short family list and keep it beside the device during early use. Children should not enter passwords, addresses, phone numbers, school schedules, private health details, financial information, identification numbers, or private messages from another person.",
					"Photos and documents can contain more information than they appear to. A school worksheet may show a full name or teacher. A photo may reveal a uniform, location, face, or home. Remove identifying details or use invented examples.",
				],
				bullets: [
					"Use a nickname or fictional character when a name is unnecessary",
					"Replace real schoolwork details with a made-up example",
					"Do not upload anyone else’s image or writing without permission",
					"Pause when the tool asks for information unrelated to the task",
				],
			},
			{
				title: "Check storage, history, and training controls",
				paragraphs: [
					"Find out whether chats are saved, how to delete them, and whether a setting controls use of conversations for product improvement or model training. Privacy controls change, so review them again after major product updates.",
					"Use the smallest amount of information needed. Deleting a chat from the visible history may not mean every copy disappears immediately, which is another reason to avoid sharing sensitive data in the first place.",
				],
			},
			{
				title: "Set a shared-use routine",
				paragraphs: [
					"For children ages 9–13, begin with an adult nearby and a specific purpose: brainstorm three story settings, explain one math step, or compare two definitions. Review the prompt before sending and inspect the answer together.",
					"Agree that the child will bring an adult in if the chatbot asks for secrecy, requests personal details, produces upsetting material, or gives advice about health, safety, money, or relationships.",
				],
				callout:
					"A simple rule: if you would not post it on a classroom wall, do not paste it into an AI chatbot.",
			},
			{
				title: "Respond calmly to accidental sharing",
				paragraphs: [
					"If a child shares personal information, avoid blame. Stop the conversation, use available deletion controls, change any exposed password, and tell the affected person if the information belonged to them.",
					"For a serious exposure, consult the service’s support and privacy contacts. Calm handling makes it more likely that children will ask for help promptly in the future.",
				],
			},
		],
		relatedLinks: [
			{
				label: "Read the complete family AI safety guide",
				href: "/blog/safe-ai-use-at-home",
			},
			{
				label: "Learn how children can check AI answers",
				href: "/blog/how-kids-can-check-ai-answers",
			},
			{ label: "Review our privacy policy", href: "/privacy" },
		],
		sources: [
			{
				label: "Office of the Privacy Commissioner of Canada: AI and privacy",
				href: "https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/",
			},
			{
				label: "G7 privacy authorities’ statement on AI and children",
				href: "https://www.priv.gc.ca/en/opc-news/speeches-and-statements/2024/s-d_g7_20241011_child-ai/",
			},
			{
				label: "UNICEF policy guidance on AI for children",
				href: "https://www.unicef.org/innocenti/reports/policy-guidance-ai-children",
			},
		],
	},
	{
		slug: "how-kids-can-check-ai-answers",
		title: "How Kids Can Check an AI Answer Before Trusting It",
		description:
			"A memorable five-step routine children can use to question, verify, and improve answers from AI chatbots and homework tools.",
		category: "For Families",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "compass",
		tone: "purple",
		intro:
			"An AI answer can be polished, detailed, and wrong at the same time. Children need a checking routine that works even when an adult does not already know the answer.",
		takeaways: [
			"The five-step PAUSE checking routine.",
			"Different checks for facts, explanations, and creative work.",
			"Language that makes uncertainty a normal part of learning.",
		],
		sections: [
			{
				title: "Teach the difference between fluency and truth",
				paragraphs: [
					"Generative AI is designed to produce a useful-looking response from patterns in data. It may invent a source, mix two facts together, use outdated information, or misunderstand the question. A confident tone is a writing style, not proof.",
					"Checking does not mean distrusting every sentence. It means matching the strength of the check to the importance of the claim.",
				],
			},
			{
				title: "Use the PAUSE routine",
				paragraphs: [
					"PAUSE gives children five actions they can remember before copying, sharing, or acting on an AI response.",
				],
				bullets: [
					"Purpose: What did I ask the tool to help me do?",
					"Accuracy: Which statements are facts that could be checked?",
					"Understand: Can I explain the answer in my own words?",
					"Sources: Can I confirm the important claims with reliable sources?",
					"Escalate: Is this important enough to ask a trusted adult or expert?",
				],
			},
			{
				title: "Choose the right kind of check",
				paragraphs: [
					"For a math answer, work through the calculation or use a trusted calculator. For a definition, compare a textbook, library source, or official reference. For current information, check the date and the responsible organization. For a quotation, find the original document.",
					"For creative ideas, factual verification may be less important, but authorship still matters. The child should decide what to keep, rewrite the result, and be able to explain their own choices.",
				],
			},
			{
				title: "Use a claim table for schoolwork",
				paragraphs: [
					"Divide a page into three columns: AI claim, evidence found, and decision. Copy only the important claim, not the whole response. Add the source used for checking, then mark the claim confirmed, uncertain, or incorrect.",
					"This activity slows the process enough for reasoning to become visible. It also reveals when a response contains many claims but no support.",
				],
			},
			{
				title: "Know when not to rely on the chatbot",
				paragraphs: [
					"Children should bring an adult into questions about health, personal safety, money, legal issues, relationships, or upsetting situations. A chatbot cannot examine the complete situation or take responsibility for the outcome.",
					"UNESCO recommends a human-centred, age-appropriate approach to generative AI in education. The goal is not to make a child a perfect fact-checker. It is to build the habit of keeping human judgement in charge.",
				],
				callout:
					"If you cannot explain it and cannot verify it, do not present it as a fact.",
			},
		],
		relatedLinks: [
			{
				label: "Use AI safely at home",
				href: "/blog/safe-ai-use-at-home",
			},
			{
				label: "Explain AI in plain English",
				href: "/blog/how-to-explain-ai-to-a-child",
			},
			{
				label: "Learn about AI ethics and fairness",
				href: "/blog/teaching-ai-ethics-to-kids",
			},
		],
		sources: [
			{
				label: "UNESCO guidance for generative AI in education and research",
				href: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research",
			},
			{
				label: "UNESCO AI competency framework for students",
				href: "https://www.unesco.org/en/articles/ai-competency-framework-students",
			},
		],
	},
	{
		slug: "ai-literacy-classroom-checklist",
		title:
			"AI Literacy for Elementary and Middle School: A Classroom Checklist",
		description:
			"A practical classroom checklist for teaching children how AI works, where it fails, how it affects people, and how to create with it responsibly.",
		category: "For Educators",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "users",
		tone: "blue",
		intro:
			"AI literacy is larger than prompting a chatbot. Students need age-appropriate opportunities to understand patterns and data, examine consequences, test systems, and retain responsibility for their choices.",
		takeaways: [
			"A classroom checklist aligned with UNESCO’s four dimensions.",
			"Observable student actions instead of vague technology goals.",
			"A progression from understanding to applying and creating.",
		],
		sections: [
			{
				title: "Organize learning around four connected dimensions",
				paragraphs: [
					"UNESCO’s AI competency framework for students describes four dimensions: a human-centred mindset, ethics of AI, AI techniques and applications, and AI system design. Treating them together prevents a course from becoming either tool training without judgement or ethics discussion without technical understanding.",
					"For younger students, the language can be simple while the ideas remain accurate.",
				],
			},
			{
				title: "Human-centred mindset checklist",
				paragraphs: [
					"Students should recognize that people define an AI system’s goal and remain responsible for how its output is used. They should be able to name who may benefit, who may be affected, and when a human should review a result.",
				],
				bullets: [
					"Identifies a person responsible for the final decision",
					"Explains why AI is or is not useful for the task",
					"Names one non-technical way to solve the same problem",
					"Treats AI output as advice or prediction rather than authority",
				],
			},
			{
				title: "Ethics and safety checklist",
				paragraphs: [
					"Students should protect personal information, ask permission before using someone else’s work or image, notice when examples leave people out, and understand that fairness can require more than giving everyone identical treatment.",
				],
				bullets: [
					"Uses invented, public, or permission-based data",
					"Tests examples from more than one perspective",
					"Reports harmful or upsetting output to an adult",
					"Can describe one possible consequence of an incorrect result",
				],
			},
			{
				title: "Techniques and applications checklist",
				paragraphs: [
					"Students should distinguish exact rules from learned patterns, describe training examples and labels, and understand that a model makes calculated predictions. Coding activities can connect these concepts to variables, conditions, loops, lists, and simple scoring.",
				],
				bullets: [
					"Labels the input, process, and output of a system",
					"Explains the difference between a calculator result and an AI prediction",
					"Uses a test set that is separate from training examples",
					"Records both successful and unsuccessful tests",
				],
			},
			{
				title: "System design checklist",
				paragraphs: [
					"Students should begin with a real question, define what success means, build the smallest useful version, gather feedback, and revise. The explanation of the project should include limits, not only achievements.",
				],
				bullets: [
					"States a specific problem and intended user",
					"Chooses only the data needed for that problem",
					"Tests a boundary or confusing example",
					"Creates a model card, project note, or reflection describing limitations",
				],
			},
			{
				title: "Assess conversations, tests, and revisions",
				paragraphs: [
					"A polished final output can hide weak understanding. Collect evidence from predictions made before testing, explanations after an error, choices about data, and revisions made after feedback.",
					"Use the checklist as a progression rather than a one-day requirement. Students can first understand an idea, then apply it with guidance, and eventually create and critique their own system.",
				],
			},
		],
		relatedLinks: [
			{
				label: "Build an inclusive AI classroom",
				href: "/blog/building-inclusive-ai-classrooms",
			},
			{
				label: "Teach AI ethics to kids",
				href: "/blog/teaching-ai-ethics-to-kids",
			},
			{ label: "Explore classroom-ready AI Labs", href: "/labs" },
		],
		sources: [
			{
				label: "UNESCO AI competency framework for students",
				href: "https://www.unesco.org/en/articles/ai-competency-framework-students",
			},
			{
				label: "UNESCO guidance for generative AI in education and research",
				href: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research",
			},
		],
	},
	{
		slug: "classroom-activity-teach-ai-bias-fairness",
		title: "A Simple Classroom Activity for Teaching AI Bias and Fairness",
		description:
			"A no-personal-data classroom experiment that helps students see how an unbalanced dataset can create uneven machine-learning results.",
		category: "For Educators",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "compass",
		tone: "coral",
		intro:
			"Bias becomes understandable when students can change a dataset and watch the results change. This activity uses safe drawings—not people—to make representation, testing, and fairness visible.",
		takeaways: [
			"A complete 35–45 minute bias and fairness activity.",
			"Discussion prompts that avoid ranking or labelling students.",
			"An assessment focused on evidence and redesign.",
		],
		sections: [
			{
				title: "Learning goal and materials",
				paragraphs: [
					"Students will explain how missing variety in training data can cause uneven performance and propose a data change that could improve the system.",
					"Prepare paper cards or a local drawing tool, two safe labels such as stars and hearts, and a simple classifier approved by the school. Do not use faces, voices, names, handwriting identification, grades, or behavioural records.",
				],
			},
			{
				title: "Round 1: Create an intentionally narrow dataset",
				paragraphs: [
					"Make the star examples large, upright, and drawn with thick lines. Make the heart examples varied in size, angle, and line thickness. Train the classifier without telling students why the sets are different.",
					"Ask students to predict which new drawings will be easy or difficult. Test large upright stars, then small, rotated, thin, or unusually shaped stars. Record every result.",
				],
			},
			{
				title: "Discuss what the model had a chance to learn",
				paragraphs: [
					"Ask which types of stars appeared in training and which appeared only during testing. The model did not decide to dislike small stars. The available examples made some patterns easier to learn than others.",
					"Define dataset bias here as a systematic problem in the examples or collection process that can contribute to uneven outcomes. Connect this to people carefully: when AI affects people, missing groups or contexts can produce serious consequences.",
				],
				bullets: [
					"Which group of drawings had more variety?",
					"Which test cases failed most often?",
					"Would adding more copies of the same large star solve the problem?",
					"What new examples should be added, and why?",
				],
			},
			{
				title: "Round 2: Redesign and retest",
				paragraphs: [
					"Add small, rotated, thin, and differently shaped stars. Keep the original test set unchanged so students can compare results. Retrain, test, and count improvements as well as remaining errors.",
					"Emphasize that balance is not only equal quantity. Twenty nearly identical examples may provide less useful variety than ten carefully different ones.",
				],
			},
			{
				title: "Move from accuracy to fairness",
				paragraphs: [
					"Accuracy asks how often the model is correct overall. Fairness asks how outcomes and errors are distributed and what those differences mean for affected people. A high overall score can still hide repeated failure in one context.",
					"UNICEF’s child-centred AI guidance calls for inclusion, fairness, non-discrimination, transparency, and accountability. Students can practise those ideas by documenting the dataset, testing different cases, and refusing to use the model beyond its safe purpose.",
				],
				callout:
					"Assess the student’s explanation and redesign—not which team produces the highest accuracy.",
			},
		],
		relatedLinks: [
			{
				label: "Read the broader AI ethics guide",
				href: "/blog/teaching-ai-ethics-to-kids",
			},
			{
				label: "Use the AI literacy classroom checklist",
				href: "/blog/ai-literacy-classroom-checklist",
			},
			{
				label: "Build a private-data-free first classifier",
				href: "/blog/first-machine-learning-project-without-personal-data",
			},
		],
		sources: [
			{
				label: "UNICEF policy guidance on AI for children",
				href: "https://www.unicef.org/innocenti/reports/policy-guidance-ai-children",
			},
			{
				label: "UNESCO AI competency framework for students",
				href: "https://www.unesco.org/en/articles/ai-competency-framework-students",
			},
		],
	},
	{
		slug: "responsible-ai-classroom-rules",
		title: "Responsible AI Classroom Rules Students Can Actually Understand",
		description:
			"Ten plain-language classroom rules that help students use AI tools safely, honestly, thoughtfully, and with human judgement.",
		category: "For Educators",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "shield",
		tone: "green",
		intro:
			"A useful classroom AI policy should tell students what to do at the moment of choice. These rules replace vague commands with short actions teachers can model, practise, and revisit.",
		takeaways: [
			"Ten student-facing rules with a reason for each.",
			"A routine for introducing rules through examples.",
			"A way to distinguish support, collaboration, and replacement.",
		],
		sections: [
			{
				title: "Make the purpose visible",
				paragraphs: [
					"Begin every AI-supported activity by naming the learning goal and what the tool may do. Students should know whether AI can brainstorm, explain, offer feedback, translate a direction, or help debug—and what work must remain their own.",
					"Rules are easier to follow when the reason is connected to learning rather than punishment.",
				],
			},
			{
				title: "Ten rules in student language",
				paragraphs: [
					"Post these rules near the activity and discuss one realistic example for each.",
				],
				bullets: [
					"Know the goal: I can explain what I am supposed to learn",
					"Ask before using: I use only teacher-approved tools and tasks",
					"Protect privacy: I do not enter personal or private information",
					"Keep people safe: I tell an adult about harmful or upsetting output",
					"Check important claims: I use reliable sources, calculations, or an expert",
					"Keep my thinking visible: I can explain every idea I submit",
					"Credit help: I say when and how AI supported my work",
					"Do not impersonate: I do not create fake messages, voices, or images of people",
					"Respect creators: I do not present copied words or images as my own",
					"Humans decide: I do not let AI make an important decision about a person",
				],
			},
			{
				title: "Teach the rules with scenarios",
				paragraphs: [
					"Give groups short situations: a chatbot asks for a school name, an image tool produces a stereotype, a student copies a complete paragraph, or an AI tutor gives a suspicious math answer. Ask which rule applies, what the student should do next, and who may be affected.",
					"More than one rule may apply. The discussion makes the reasoning behind the policy visible.",
				],
			},
			{
				title: "Use a simple disclosure sentence",
				paragraphs: [
					"Students can attach a short note: “I used an AI tool to brainstorm three headings. I chose one, checked the facts, and wrote the article myself.” Adapt the wording to the age group and assignment.",
					"Disclosure is not a substitute for permission. It is a record of the support used after the teacher has defined acceptable use.",
				],
			},
			{
				title: "Review tools and rules together",
				paragraphs: [
					"Canadian privacy regulators emphasize clear explanations of what educational technology collects, why it is collected, where data is stored, and who receives it. Schools—not children—carry responsibility for approving services and evaluating privacy risks.",
					"Revisit the rules when the tool, assignment, or age group changes. UNESCO’s guidance recommends human-centred and age-appropriate use, while its competency framework emphasizes understanding, applying, and creating responsibly.",
				],
				callout:
					"The strongest classroom rule is not “AI is allowed” or “AI is banned.” It is “this use supports this learning goal under these conditions.”",
			},
		],
		relatedLinks: [
			{
				label: "Use the AI literacy classroom checklist",
				href: "/blog/ai-literacy-classroom-checklist",
			},
			{
				label: "Build a more inclusive AI classroom",
				href: "/blog/building-inclusive-ai-classrooms",
			},
			{
				label: "Help students check AI answers",
				href: "/blog/how-kids-can-check-ai-answers",
			},
		],
		sources: [
			{
				label: "Canadian privacy regulators on educational technology",
				href: "https://www.priv.gc.ca/en/about-the-opc/what-we-do/provincial-and-territorial-collaboration/joint-resolutions-with-provinces-and-territories/res_20251008_edtech/",
			},
			{
				label: "UNESCO guidance for generative AI in education and research",
				href: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research",
			},
		],
	},
	{
		slug: "coding-education-canada-parents-guide",
		title: "Coding Education in Canada: What Parents Should Look For",
		description:
			"A Canadian parent’s guide to evaluating coding programs by teaching quality, curriculum progression, inclusion, privacy, and meaningful projects.",
		category: "Canada",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "family",
		tone: "coral",
		intro:
			"A strong coding program is not defined by how many languages it names or how quickly it promises advanced results. Look for a learning sequence children can explain, instructors who respond to thinking, and projects that make progress visible.",
		takeaways: [
			"Eight questions to ask any Canadian coding provider.",
			"Signals of a coherent beginner curriculum.",
			"Privacy, access, and inclusion checks for families.",
		],
		sections: [
			{
				title: "Start with the child and the learning goal",
				paragraphs: [
					"Ask what the program is designed to help a child do after eight or ten weeks. “Learn coding” is too broad. A clearer answer names observable skills: store information in variables, get input, calculate results, make decisions, repeat actions, debug, and complete a small project.",
					"Match the level to the child’s experience and confidence, not only age. A beginner who feels safe asking questions can progress faster than a learner placed in an advanced course they cannot explain.",
				],
			},
			{
				title: "Look for a visible learning sequence",
				paragraphs: [
					"Good curricula revisit earlier ideas while adding one manageable challenge at a time. Projects should use skills already taught rather than requiring children to copy unfamiliar code.",
				],
				bullets: [
					"Are lesson goals and prerequisites clear?",
					"Does each project connect to the current topic?",
					"Do learners predict, test, debug, and explain?",
					"Is there a path from first lesson to independent project?",
				],
			},
			{
				title: "Ask how instructors teach when a child is stuck",
				paragraphs: [
					"An effective instructor asks questions, reads the error with the learner, and gives one useful clue at a time. They do not take control of the keyboard at the first mistake.",
					"Ask about class size, opportunities to speak, feedback between sessions, missed-class support, and how instructors adapt when learners progress at different speeds.",
				],
			},
			{
				title: "Check inclusion and access",
				paragraphs: [
					"Examples should include varied names, interests, cultures, and ways of participating. Learners should be able to contribute through speaking, chat, demonstration, or written reflection.",
					"Ask what device and internet connection are needed, which software accounts must be created, and whether materials remain available after the class. CanCode’s federal evaluation found a continuing need for accessible coding and digital-skills opportunities across Canada, including for underrepresented groups.",
				],
			},
			{
				title: "Review privacy and safety",
				paragraphs: [
					"Ask which platforms the provider uses, what student information they collect, whether sessions are recorded, how long work is retained, and who can view it. Children should not need to publish personal information to demonstrate learning.",
					"For AI activities, ask whether the program uses personal data, faces, voices, or public chatbot accounts. Safer beginner activities can teach datasets, patterns, and bias with invented or locally created examples.",
				],
			},
			{
				title: "Use a trial class as evidence",
				paragraphs: [
					"During a trial, notice how much the learner thinks and creates. Does the instructor know their name, ask for predictions, and make room for questions? Can the child explain one new idea afterward?",
					"A polished presentation matters less than the learning relationship. Choose the program where your child is likely to build, struggle productively, receive feedback, and return with curiosity.",
				],
			},
		],
		relatedLinks: [
			{ label: "Book a free trial class", href: "/inquiry" },
			{ label: "Explore the curriculum", href: "/lessons" },
			{
				label: "Learn what the CanCode evaluation found",
				href: "/blog/cancode-evaluation-digital-skills-lessons",
			},
		],
		sources: [
			{
				label: "ISED summary of the CanCode program evaluation",
				href: "https://ised-isde.canada.ca/site/audits-evaluations/en/evaluation/summary-evaluation-cancode-program",
			},
			{
				label: "Canadian privacy regulators on educational technology",
				href: "https://www.priv.gc.ca/en/about-the-opc/what-we-do/provincial-and-territorial-collaboration/joint-resolutions-with-provinces-and-territories/res_20251008_edtech/",
			},
		],
	},
	{
		slug: "cancode-evaluation-digital-skills-lessons",
		title: "What Canada’s CanCode Evaluation Teaches Us About Digital Skills",
		description:
			"A plain-language look at the federal CanCode evaluation and what its findings suggest for families, educators, and youth coding programs.",
		category: "Canada",
		readingTime: "5 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "sparkles",
		tone: "purple",
		intro:
			"Canada’s evaluation of CanCode offers a useful lesson beyond one funding program: access matters, teacher confidence matters, and sparking curiosity is valuable—but meaningful outcomes still need careful measurement.",
		takeaways: [
			"What the federal evaluation did and did not establish.",
			"Practical implications for youth coding providers.",
			"Questions families can use when judging program quality.",
		],
		sections: [
			{
				title: "What CanCode was designed to support",
				paragraphs: [
					"CanCode supported organizations delivering coding and digital-skills learning to Canadian youth and professional development to teachers. Innovation, Science and Economic Development Canada evaluated the program’s relevance, performance, and efficiency.",
					"The federal summary concluded that the program addressed a demonstrated need for access to coding and digital-skills knowledge and training across Canada.",
				],
			},
			{
				title: "Access is more than enrolment",
				paragraphs: [
					"Reaching a learner is the first step. Meaningful access also includes suitable devices, connectivity, accessible teaching, culturally relevant examples, time to practise, and support when a child is stuck.",
					"Programs should report whom they are reaching and examine who may still be excluded. A large participation total alone cannot show whether every learner received an equally useful experience.",
				],
			},
			{
				title: "Curiosity is an important early outcome",
				paragraphs: [
					"The evaluation reported preliminary indications that training was sparking student curiosity toward STEM and increasing teachers’ confidence to integrate digital skills. Those are valuable near-term outcomes because curiosity supports continued participation and teacher confidence can extend learning beyond a single workshop.",
					"However, curiosity is not the same as long-term skill mastery. Programs should connect enthusiasm to a sequenced curriculum, repeated practice, projects, and feedback.",
				],
			},
			{
				title: "Measure what learners can explain and create",
				paragraphs: [
					"Attendance and satisfaction are easy to count, but they do not fully describe learning. A stronger evaluation includes demonstrations, code explanations, debugging observations, project rubrics, and learner reflections collected over time.",
				],
				bullets: [
					"Can the learner explain an input, process, and output?",
					"Can they change a program and predict the effect?",
					"Can they use an error message to locate a problem?",
					"Can they describe a project’s limitations and safety choices?",
				],
			},
			{
				title: "Support educators as learners too",
				paragraphs: [
					"Digital-skills initiatives are more sustainable when teachers understand the concepts, can adapt examples, and know how to respond to common misconceptions. One-time resources without practice or support may be difficult to integrate.",
					"For AI literacy, teacher learning should include technical foundations, pedagogy, ethics, privacy, and human responsibility—not only instructions for using a particular tool.",
				],
			},
			{
				title: "What families and providers can take forward",
				paragraphs: [
					"Families can ask how a program turns initial curiosity into progression. Providers can publish clear outcomes, collect evidence beyond enrolment, and design for learners who have historically had fewer opportunities.",
					"The careful reading is hopeful but specific: coding access can spark interest and build capacity, while durable learning requires sustained, inclusive, and measurable experiences.",
				],
			},
		],
		relatedLinks: [
			{
				label: "Read the Canadian parent’s coding-program guide",
				href: "/blog/coding-education-canada-parents-guide",
			},
			{
				label: "Support Black youth in Canadian STEM",
				href: "/blog/black-youth-stem-canada",
			},
			{ label: "Explore the Kids Learn AI curriculum", href: "/lessons" },
		],
		sources: [
			{
				label: "ISED summary of the CanCode program evaluation",
				href: "https://ised-isde.canada.ca/site/audits-evaluations/en/evaluation/summary-evaluation-cancode-program",
			},
			{
				label: "ISED full CanCode evaluation report",
				href: "https://ised-isde.canada.ca/site/audits-evaluations/en/evaluation/evaluation-report-cancode",
			},
		],
	},
	{
		slug: "choose-online-coding-classes-kids-canada",
		title: "How to Choose an Online Coding Class for Kids in Canada",
		description:
			"A detailed checklist for comparing live online coding classes in Canada, including instruction, curriculum, screen balance, privacy, and trial lessons.",
		category: "Canada",
		readingTime: "6 min read",
		date: PUBLISHED_DATE,
		publishedAt: PUBLISHED_AT,
		updatedAt: PUBLISHED_AT,
		visual: "future",
		tone: "blue",
		intro:
			"Online coding can give Canadian families access to live instruction without a commute, but the quality of the experience depends on much more than the video platform. Compare how children participate, receive feedback, protect their privacy, and grow across lessons.",
		takeaways: [
			"A scorecard for comparing live online programs.",
			"Questions about screen quality, privacy, and teaching practice.",
			"Signals to watch during a free or introductory class.",
		],
		sections: [
			{
				title: "Decide what kind of online experience you want",
				paragraphs: [
					"Recorded courses offer flexibility but limited live feedback. Large webinars can introduce topics efficiently. Small live classes can make room for questions, screen sharing, discussion, and instructor response.",
					"Choose based on the child’s learning needs. A beginner who becomes discouraged by errors may benefit from a live instructor who can notice confusion and guide the next debugging step.",
				],
			},
			{
				title: "Compare active creation with passive watching",
				paragraphs: [
					"Ask how much of each class children spend writing, running, changing, and explaining code. A screen is not automatically educational because code appears on it.",
					"The Canadian Paediatric Society’s guidance for school-aged children emphasizes the context, content, and balance of digital-media use. A meaningful coding class should include active thinking, interaction, and breaks rather than uninterrupted passive viewing.",
				],
			},
			{
				title: "Look for responsive instruction",
				paragraphs: [
					"Ask about class size and how instructors monitor progress. Can learners share a result safely? Does the instructor ask predictions before running code? Are mistakes discussed as evidence?",
					"Strong instruction leaves the child able to explain the project. Be cautious when every student produces an identical polished result by copying long blocks they do not understand.",
				],
			},
			{
				title: "Review the curriculum and progression",
				paragraphs: [
					"Request a course outline. Beginner programs should build a coherent path through output, variables, text, input, numbers, decisions, repetition, collections, debugging, and projects.",
					"AI content should align with the programming topic. A lesson on variables might show how a chatbot stores input; a lesson on math might explore scores and averages. AI should not be added as an unrelated buzzword.",
				],
			},
			{
				title: "Check technology, privacy, and safeguarding",
				paragraphs: [
					"Confirm device requirements, supported browsers, account setup, recording practices, communication channels, and who can contact the child. Ask where student projects and recordings are stored and how they are deleted.",
					"Canadian privacy regulators state that children’s best interests and privacy should be integral when educational technology is assessed. Providers should collect only information necessary for the service and explain practices in clear language.",
				],
				bullets: [
					"Does the child need a public profile?",
					"Are class recordings optional and access-controlled?",
					"Can projects remain private?",
					"Is there a clear adult contact for safety or privacy concerns?",
				],
			},
			{
				title: "Use the trial class scorecard",
				paragraphs: [
					"After the trial, ask the child what they made, what changed when they edited the code, where they got stuck, and how the instructor helped. Their answers reveal more than asking only whether the class was fun.",
				],
				bullets: [
					"My child wrote or changed meaningful code",
					"The instructor invited questions and responded respectfully",
					"The project matched the advertised level",
					"Instructions and privacy expectations were clear",
					"My child can explain one concept afterward",
					"There is a sensible next step in the curriculum",
				],
			},
			{
				title: "Choose sustainable progress over urgency",
				paragraphs: [
					"Avoid claims that a short course guarantees an advanced career outcome. Look for a pace that leaves room to practise, forget, review, debug, and create.",
					"The right course is one a child can continue with curiosity and growing independence. A transparent trial, clear curriculum, responsive teacher, and proportionate privacy practices are strong evidence.",
				],
			},
		],
		relatedLinks: [
			{ label: "Book a free trial class", href: "/inquiry" },
			{ label: "View pricing and program details", href: "/pricing" },
			{
				label: "Read what parents should look for in coding education",
				href: "/blog/coding-education-canada-parents-guide",
			},
		],
		sources: [
			{
				label: "Canadian Paediatric Society: healthy digital-media use",
				href: "https://cps.ca/documents/position/digital-media",
			},
			{
				label: "Canadian privacy regulators on educational technology",
				href: "https://www.priv.gc.ca/en/about-the-opc/what-we-do/provincial-and-territorial-collaboration/joint-resolutions-with-provinces-and-territories/res_20251008_edtech/",
			},
		],
	},
];
