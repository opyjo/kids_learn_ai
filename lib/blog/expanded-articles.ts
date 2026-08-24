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
	{
		slug: "loops-and-conditionals-for-kids",
		title:
			"Loops and Conditionals: Teaching Kids the Logic Behind “Repeat” and “If”",
		description:
			"A step-by-step way to introduce loops and conditionals, the two ideas that turn a short line-by-line script into a real, decision-making program.",
		category: "Projects",
		readingTime: "6 min read",
		date: "August 5, 2026",
		publishedAt: "2026-08-05",
		updatedAt: "2026-08-05",
		visual: "code",
		tone: "green",
		intro:
			"A program that only runs top to bottom, once, can only do so much. Loops let a child’s code repeat without retyping it. Conditionals let it choose between paths. Together they turn a short script into something that can react.",
		takeaways: [
			"A teaching order that introduces conditionals before loops so one idea doesn’t overload the other.",
			"Three small projects that make repetition and decision-making visible.",
			"The misconceptions kids most often build about “if” and “while,” and how to correct them.",
		],
		sections: [
			{
				title: "Why this feels harder than variables",
				paragraphs: [
					"A variable is a single idea: a name connected to a value. Loops and conditionals ask a child to imagine the computer skipping lines, repeating lines, or never reaching some lines at all. That is a real shift from reading code the way we read a sentence, in order, once.",
					"Give that shift a name instead of rushing past it. Tell the learner directly: “Until now, the computer read every line once, in order. Starting today, some lines can run more than once, and some lines might not run at all.” Naming the change reduces confusion later.",
				],
			},
			{
				title: "Start with conditionals: teaching a program to choose",
				paragraphs: [
					"Introduce conditionals before loops. A conditional is a single decision, which is easier to trace by hand than a repeating one. Use a check a child already reasons about, such as whether a score is high enough to pass a level.",
					"Walk through an if, then an if/else, then an if/elif/else, adding one branch at a time. At each step, ask the learner to pick a test value and predict which branch runs before you run the program.",
				],
				bullets: [
					"if: one path runs only when a condition is true",
					"if/else: exactly one of two paths always runs",
					"if/elif/else: the first true condition wins, and the rest are skipped",
				],
				callout:
					"Ask “which branch, and why?” before running the code. Prediction is what turns tracing into understanding.",
			},
			{
				title: "Move to loops: teaching a program to repeat",
				paragraphs: [
					"Once a single decision feels comfortable, introduce repetition with a for loop over a small, countable range, such as printing a countdown from five. A for loop is easier to reason about first because it has a visible, fixed number of repeats.",
					"Save while loops for once for loops feel automatic. A while loop repeats based on a condition rather than a count, which means a learner must also understand why the loop eventually has to stop.",
				],
				bullets: [
					"for: repeat a known number of times",
					"while: repeat until a condition becomes false",
					"Ask: what has to change inside the loop for it to end?",
				],
			},
			{
				title: "Three small projects that combine the ideas",
				paragraphs: [
					"A guess-the-number game asks a player to keep guessing until they find a hidden value, combining a while loop with a conditional that checks each guess. A traffic-light simulator cycles through red, yellow, and green using a loop, then uses conditionals to print what a driver should do at each colour. A tally counter loops through a list of weather reports and uses a conditional to count how many days were rainy.",
					"In each project, ask the learner to identify, out loud, which part repeats and which part decides. Separating those two questions keeps the two concepts distinct instead of blurring together.",
				],
				bullets: [
					"Guess-the-number: which line repeats, and what makes it stop?",
					"Traffic light: what decides which message gets printed?",
					"Weather tally: what is being counted, and where does that count live?",
				],
			},
			{
				title: "Correct the misconceptions early",
				paragraphs: [
					"Three mistakes appear consistently. First, learners often expect a for loop over a range of five to print the number five, rather than repeat five times starting from zero—walk through the actual sequence of values by hand. Second, learners often write an infinite while loop because nothing inside the loop changes the condition being checked. Third, learners often stack several if statements when they mean elif, which can cause more than one branch to run.",
					"Each of these is best caught by tracing the program by hand, line by line, before running it. A prediction that turns out wrong is more informative than a program that happens to work.",
				],
			},
			{
				title: "Finish with an explanation, not just working code",
				paragraphs: [
					"Ask the learner to choose one project and explain, without reading the code aloud, what repeats, what gets decided, and what makes the repetition stop. That explanation is stronger evidence of understanding than a program that runs correctly by trial and error.",
					"When these ideas feel solid, connect them to the guided lessons in Decision Maker and Loop Magic, or let the learner combine loops and conditionals into a larger game or quiz project.",
				],
			},
		],
		relatedLinks: [
			{
				label: "Explore the Decision Maker lessons",
				href: "/lessons/term-3-decision-maker",
			},
			{
				label: "Explore the Loop Magic lessons",
				href: "/lessons/term-6-loop-magic",
			},
			{
				label: "Try five Python variable projects first",
				href: "/blog/python-variable-projects-for-kids",
			},
			{ label: "Practise in the Python playground", href: "/playground" },
		],
		sources: [
			{
				label: "The official Python tutorial: control flow",
				href: "https://docs.python.org/3/tutorial/controlflow.html",
			},
		],
	},
	{
		slug: "teaching-kids-prompt-engineering",
		title:
			"Teaching Kids to Write Better AI Prompts: A Beginner’s Guide to Prompt Engineering",
		description:
			"A simple structure that helps children write clearer AI prompts, revise weak ones, and understand why prompting is different from searching.",
		category: "AI Literacy",
		readingTime: "6 min read",
		date: "August 10, 2026",
		publishedAt: "2026-08-10",
		updatedAt: "2026-08-10",
		visual: "lightbulb",
		tone: "purple",
		intro:
			"The way a question is asked changes the answer an AI tool gives. Teaching a child to notice that, and to revise a weak prompt into a clearer one, is a real literacy skill—not a shortcut around thinking.",
		takeaways: [
			"A four-part structure kids can use to write a clearer prompt.",
			"Why vague prompts produce vague or invented answers, with a side-by-side example.",
			"Why prompting is not the same as searching, and why that distinction matters.",
		],
		sections: [
			{
				title: "Prompting is a skill, not a trick",
				paragraphs: [
					"Some adults treat clever prompts as a way to “outsmart” an AI tool. A more useful frame for children is that a prompt is an instruction, and clearer instructions produce more useful results—the same way a clearer question gets a more useful answer from a teacher or a librarian.",
					"That framing keeps the child in charge of the thinking. The AI tool is responding to the request it was given, not reading the child’s mind.",
				],
			},
			{
				title: "The four parts of a clear prompt",
				paragraphs: [
					"A prompt gets clearer when it states the goal, gives context, names a format, and sets a limit. A child does not need all four every time, but knowing the four gives them somewhere to go when an answer misses the mark.",
				],
				bullets: [
					"Goal: what do I actually want the tool to do?",
					"Context: what does it need to know to help me?",
					"Format: how should the answer be organized—a list, a paragraph, three sentences?",
					"Constraint: what should it avoid, or how short should it be?",
				],
				callout:
					"Example: “Explain how volcanoes erupt, for a 10-year-old, in three sentences, without scary details.” Each part is doing a job.",
			},
			{
				title: "Why vague prompts go wrong",
				paragraphs: [
					"A vague prompt such as “tell me about space” leaves the tool to guess the age, the purpose, and the length the child actually wants. It fills those gaps with an average, generic response, which is often too broad to be useful and sometimes drifts into details that are wrong or unnecessary.",
					"Comparing a vague prompt and a specific one side by side, using the same topic, makes the difference concrete. Ask the learner which answer they could actually use for their project, and why.",
				],
			},
			{
				title: "Treat the first answer as a draft, not a final answer",
				paragraphs: [
					"Children often accept the first response as finished. Teach them instead to keep the conversation going: “make this shorter,” “explain that part again a different way,” or “give me one example.” Revising a prompt after seeing the first answer is normal, expected practice—not a sign that the first attempt failed.",
					"This habit also builds patience. A single perfect prompt is rare; a short back-and-forth usually gets closer to what the learner actually needed.",
				],
			},
			{
				title: "Prompting is not the same as searching",
				paragraphs: [
					"A search engine finds existing pages and ranks them by relevance. A generative AI tool calculates a new response from patterns in its training data, which means it can produce a fluent answer that includes an invented fact, an outdated detail, or a plausible-sounding source that does not exist.",
					"Children should understand that a well-written prompt makes an answer clearer and more useful, but it does not make the answer automatically true. A good prompt and a fact-check are two different, complementary skills.",
				],
			},
			{
				title: "Practice activities by age",
				paragraphs: [
					"Younger children can take one vague prompt and revise it three times, comparing what changed in the answer each time. Older children can write two versions of the same prompt—one vague, one using all four parts—and explain in their own words which parts of the better answer came from which part of the prompt.",
					"Keep the same privacy habits in place during practice: no personal names, addresses, or private details in any prompt, regardless of how well it is written.",
				],
			},
		],
		relatedLinks: [
			{
				label: "Help kids check an AI answer before trusting it",
				href: "/blog/how-kids-can-check-ai-answers",
			},
			{
				label: "Explain AI in plain English",
				href: "/blog/how-to-explain-ai-to-a-child",
			},
			{
				label: "Use the AI literacy classroom checklist",
				href: "/blog/ai-literacy-classroom-checklist",
			},
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
		slug: "spotting-ai-misinformation-kids",
		title:
			"Spotting AI-Generated Misinformation and Deepfakes: A Media Literacy Guide for Kids",
		description:
			"Practical warning signs and a simple pause-and-check routine to help children question AI-generated images, video, audio, and viral claims.",
		category: "AI Safety",
		readingTime: "6 min read",
		date: "August 14, 2026",
		publishedAt: "2026-08-14",
		updatedAt: "2026-08-14",
		visual: "shield",
		tone: "coral",
		intro:
			"AI tools can now generate a convincing photo, voice clip, or video of someone doing or saying something that never happened. Children need practical habits for pausing and checking, not a fear of every image they see online.",
		takeaways: [
			"Concrete warning signs in AI-generated images, video, audio, and text.",
			"A four-step pause-and-check routine to use before believing or sharing something.",
			"What to do if a deepfake or false claim involves someone the child knows.",
		],
		sections: [
			{
				title: "Why this belongs alongside other AI-safety habits",
				paragraphs: [
					"Earlier AI-safety habits focus on what a child shares. This one focuses on what a child believes and forwards. Canadian media-literacy organizations such as MediaSmarts note that authenticating information online is now a routine, teachable skill rather than a specialist task.",
					"The goal is not suspicion of everything. It is a short pause before an emotional reaction turns into a share.",
				],
			},
			{
				title: "Warning signs in images and video",
				paragraphs: [
					"AI-generated or altered images and video often contain small inconsistencies that are easier to notice once a child knows to look for them.",
				],
				bullets: [
					"Hands, teeth, ears, or background text that look warped or wrong",
					"Lighting or shadows that don’t match between a person and their background",
					"Skin that looks unusually smooth, or blinking that looks unnatural in video",
					"Lip movements that don’t quite match the audio",
				],
			},
			{
				title: "Warning signs in audio and text claims",
				paragraphs: [
					"Cloned voices can sound flat, oddly paced, or emotionally mismatched to what is being said. Fabricated quotes and viral claims often share a pattern: they provoke a strong emotion quickly and add pressure to share immediately, such as “before this gets deleted.”",
					"That urgency is itself a signal. Genuine news rarely depends on being shared within minutes.",
				],
			},
			{
				title: "Use a pause-and-check routine",
				paragraphs: [
					"MediaSmarts’ Break the Fake approach centres on finding and verifying the original source before trusting a claim. A simplified version works well for children: stop before sharing, find where it actually came from, check whether another reliable source reports the same thing, and show a trusted adult anything that still feels uncertain.",
				],
				bullets: [
					"Stop: notice the urge to share immediately, and pause",
					"Source: where did this actually come from—can you trace it back?",
					"Search: does a reliable source report the same thing?",
					"Show: bring anything uncertain to a trusted adult",
				],
				callout:
					"If a strong emotional reaction shows up fast, that is exactly the moment to slow down, not speed up.",
			},
			{
				title: "If it involves someone the child knows",
				paragraphs: [
					"A deepfake or fabricated quote about a classmate, friend, or family member needs calm, careful handling. Do not forward or reshare it, even to “warn” others. Save a copy as evidence if it is safe to do so, tell a trusted adult right away, and report it to the platform where it appeared.",
					"UNICEF’s guidance on AI and children emphasizes protection and the child’s well-being above all else in situations like this—the priority is supporting the person affected, not investigating on your own.",
				],
			},
			{
				title: "Build the habit before it’s needed",
				paragraphs: [
					"Practise with real, publicly documented examples of deepfakes or misinformation rather than waiting for a stressful moment to teach the routine for the first time. Ask the child to explain, out loud, which warning sign they noticed and which step of the routine they would use next.",
					"A rehearsed habit is far more reliable in the moment than a rule the child has only heard about once.",
				],
			},
		],
		relatedLinks: [
			{
				label: "Read the AI chatbot privacy checklist",
				href: "/blog/ai-chatbot-privacy-checklist-canadian-families",
			},
			{
				label: "Help kids check an AI answer before trusting it",
				href: "/blog/how-kids-can-check-ai-answers",
			},
			{
				label: "Read the complete family AI safety guide",
				href: "/blog/safe-ai-use-at-home",
			},
		],
		sources: [
			{
				label: "MediaSmarts: Break the Fake",
				href: "https://mediasmarts.ca/break-fake",
			},
			{
				label: "UNICEF policy guidance on AI for children",
				href: "https://www.unicef.org/innocenti/reports/policy-guidance-ai-children",
			},
		],
	},
	{
		slug: "girls-in-canadian-stem",
		title:
			"Closing Canada’s Coding Gender Gap: Practical Ways to Support Girls in STEM",
		description:
			"What Canadian data shows about where girls leave the STEM pipeline, and concrete family, classroom, and community steps that keep them engaged.",
		category: "Community",
		readingTime: "7 min read",
		date: "August 18, 2026",
		publishedAt: "2026-08-18",
		updatedAt: "2026-08-18",
		visual: "sparkles",
		tone: "blue",
		intro:
			"Girls are not missing from STEM because of interest alone. Canadian data points to a gap that widens through school, shaped by confidence, representation, and everyday classroom habits that families and educators can actually change.",
		takeaways: [
			"What Canadian data shows about where the gender gap opens in STEM fields.",
			"Concrete classroom and family practices that keep girls engaged in coding.",
			"Where established Canadian programs and role models can add support.",
		],
		sections: [
			{
				title: "What the numbers show",
				paragraphs: [
					"Statistics Canada research on gender and STEM programs found that women make up the majority of young university graduates overall, yet remain underrepresented across STEM fields—and the gap is not even across fields. Representation is comparatively higher in biological sciences and lower in mathematics, physical sciences, engineering, and especially computer and information sciences.",
					"That unevenness matters. It suggests the gap is not about general interest in learning, but about something specific happening around computing and technical fields.",
				],
			},
			{
				title: "Where the gap opens",
				paragraphs: [
					"Researchers point to a mix of contributing factors: gender stereotypes about who technology is “for,” a shortage of visible role models in computing, and classroom dynamics where one group ends up doing most of the typing while another mostly watches.",
					"This site’s age range, 9 to 13, sits right in the window where confidence gaps often start to form. That makes it a genuinely useful window for intervention, not a coincidence to work around.",
				],
			},
			{
				title: "What families can do",
				paragraphs: [
					"Small, repeated choices matter more than a single conversation about “girls in tech.”",
				],
				bullets: [
					"Give equal turns at the keyboard during shared coding time",
					"Avoid casually gendering technology as a “boy thing” or “girl thing”",
					"Point out real women and girls working in computing and AI when they come up",
					"Praise persistence and debugging, not just quick natural talent",
				],
			},
			{
				title: "What educators can do",
				paragraphs: [
					"Inclusive classroom design, described in more depth in our guide to building an inclusive AI classroom, applies directly here. Rotate roles during pair programming so the same student is not always driving. Use project examples and prompts that appeal across interests rather than defaulting to the same narrow set of themes.",
					"Avoid framing early coding activities as a competition. A comparison-heavy classroom tends to discourage students who are still building confidence, regardless of ability.",
				],
			},
			{
				title: "Where community programs can help",
				paragraphs: [
					"Canada has established organizations working specifically on this gap. Actua’s National Girls Program runs girls-focused STEM sessions in communities across the country, pairing participants with instructors who serve as visible role models.",
					"A single program will not close a national gap on its own, but combined with consistent habits at home and in the classroom, it adds real, structured exposure that many girls otherwise don’t get.",
				],
			},
			{
				title: "Keep the goal specific",
				paragraphs: [
					"The aim is not to convince every girl to pursue a computing career. It is to make sure that trying coding, sticking with a hard bug, and imagining a future in it feel equally available—regardless of gender.",
					"A low-pressure trial class, with an instructor who actively distributes turns and attention, is a reasonable and concrete first step for a family wondering where to begin.",
				],
			},
		],
		relatedLinks: [
			{
				label: "Support Black youth in Canadian STEM",
				href: "/blog/black-youth-stem-canada",
			},
			{
				label: "Build an inclusive AI classroom",
				href: "/blog/building-inclusive-ai-classrooms",
			},
			{ label: "Book a free trial class", href: "/inquiry" },
		],
		sources: [
			{
				label:
					"Statistics Canada: Persistence and representation of women in STEM programs",
				href: "https://www150.statcan.gc.ca/n1/pub/75-006-x/2019001/article/00006-eng.htm",
			},
			{
				label: "Actua’s National Girls Program",
				href: "https://www.actua.ca/en/programs/national-girls-program/",
			},
		],
	},
	{
		slug: "minecraft-roblox-coding-gateway",
		title: "Turning Minecraft and Roblox Time Into Coding Time",
		description:
			"An honest look at what Minecraft and Roblox actually teach, and simple ways to move a child from playing games to building and scripting inside them.",
		category: "For Families",
		readingTime: "6 min read",
		date: "August 22, 2026",
		publishedAt: "2026-08-22",
		updatedAt: "2026-08-22",
		visual: "family",
		tone: "yellow",
		intro:
			"Many children already spend hours inside Minecraft or Roblox. That time can genuinely connect to programming—but only if it moves from consuming content toward building and scripting, and parents should know the difference.",
		takeaways: [
			"The real skill overlap between game building and programming, and its limits.",
			"Specific bridge activities that move a child from playing to creating.",
			"Questions to ask before treating a “coding game” as an actual coding lesson.",
		],
		sections: [
			{
				title: "What playing actually teaches",
				paragraphs: [
					"Regular Minecraft or Roblox play builds spatial reasoning, planning, and persistence through failure—all useful habits. Minecraft’s redstone system even behaves like simple logic circuits, and building one is a genuine, hands-on introduction to how conditions and signals work.",
					"Be honest about the limit, though: most time spent playing is not writing code, and a child can put in hundreds of hours without touching anything resembling a program. Enjoying a game and learning to build one are related but different activities.",
				],
			},
			{
				title: "The bridge activities that actually count",
				paragraphs: [
					"A few activities move a child from playing toward creating. In Minecraft, building a redstone circuit—an AND gate or a simple repeating clock—translates directly into the idea of a condition controlling an outcome. Code.org’s Minecraft Hour of Code tutorials use block-based commands to move a character and solve puzzles, which is a real, structured first step into programming logic.",
					"In Roblox, Roblox Studio lets a child build a game world, and its scripting layer uses Lua, a real text-based programming language, once a learner is ready to move past drag-and-drop building.",
				],
				bullets: [
					"Minecraft redstone: an early, physical introduction to conditions and logic",
					"Minecraft Hour of Code: block-based commands and puzzles",
					"Roblox Studio: game building plus optional Lua scripting",
				],
			},
			{
				title: "A simple progression from blocks to real code",
				paragraphs: [
					"A workable path looks like this: block-based tutorials first, to build comfort with sequences, loops, and conditions without worrying about typing syntax exactly right. Then a move to a real text-based language, where the same ideas—storing values, making decisions, repeating actions—reappear in Python or Lua.",
					"That progression mirrors how this site’s own curriculum is sequenced, moving from foundational Python concepts toward more independent projects over time.",
				],
			},
			{
				title: "Questions to ask about a “learn to code” game",
				paragraphs: [
					"Not every game or app that claims to teach coding actually does, especially once a child has outgrown the beginner level.",
				],
				bullets: [
					"Does the child ever write or edit actual code, or only drag pre-made blocks indefinitely?",
					"Does the difficulty increase, or does every level feel the same?",
					"Can the child explain, in their own words, what one block or line of code does?",
					"Is game time balanced with other activities, in line with general digital-media guidance?",
				],
			},
			{
				title: "A weekend project to try together",
				paragraphs: [
					"Build one small redstone circuit together and ask the child to predict what will happen before testing it, then connect it explicitly to the idea of an “if” statement in code. Or work through a single Minecraft Hour of Code tutorial together, pausing before each run to predict what the block sequence will do.",
					"The goal of the weekend project is the same predict-then-test habit used throughout this site’s lessons—game or no game.",
				],
			},
			{
				title: "Know when to graduate to real code",
				paragraphs: [
					"A few signs suggest a child is ready to move beyond block-based games: they finish tutorials quickly and want more, they start asking unprompted “how do I make it do X” questions, or they want to build something that isn’t offered as a template.",
					"At that point, a structured beginner Python course gives the child a real, general-purpose language rather than skills tied to one game’s built-in tools.",
				],
				callout:
					"Enjoying Minecraft or Roblox is a fine reason to try coding. It is not, by itself, evidence that a child already knows how.",
			},
		],
		relatedLinks: [
			{
				label: "Start with Term 1: Hello Python",
				href: "/lessons/term-1-hello-python",
			},
			{
				label: "Support a young coder without being the expert",
				href: "/blog/parents-guide-supporting-young-coders",
			},
			{ label: "Practise in the Python playground", href: "/playground" },
		],
		sources: [
			{
				label: "Code.org: Minecraft Hour of Code",
				href: "https://code.org/hour-of-code/minecraft",
			},
			{
				label: "Canadian Paediatric Society: healthy digital-media use",
				href: "https://cps.ca/documents/position/digital-media",
			},
		],
	},
];
