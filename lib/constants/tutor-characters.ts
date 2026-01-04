export type TutorId = "brightbyte";

export type AnimationState = "idle" | "thinking" | "talking" | "success";

export interface TutorCharacter {
	id: TutorId;
	name: string;
	emoji: string;
	subject: string;
	description: string;
	personality: string[];
	color: {
		primary: string;
		secondary: string;
		gradient: string;
	};
	animationUrl: {
		idle: string;
		thinking: string;
		talking: string;
		success: string;
	};
	systemPromptKey: string;
}

export const TUTOR_CHARACTERS: Record<TutorId, TutorCharacter> = {
	brightbyte: {
		id: "brightbyte",
		name: "BrightByte",
		emoji: "✨",
		subject: "Python & AI",
		description:
			"Your friendly coding companion! I help you learn Python programming and understand how AI works through fun examples and encouragement.",
		personality: [
			"Encouraging",
			"Patient",
			"Uses coding metaphors",
			"Celebrates progress",
		],
		color: {
			primary: "#10b981", // green-500
			secondary: "#34d399", // green-400
			gradient: "from-green-500 to-emerald-400",
		},
		animationUrl: {
			idle: "https://lottie.host/93b8c5e0-3c4d-4a29-8e51-6c0a5e6f5c8a/xFGW5XUq0h.json", // Snake animation
			thinking:
				"https://lottie.host/93b8c5e0-3c4d-4a29-8e51-6c0a5e6f5c8a/xFGW5XUq0h.json",
			talking:
				"https://lottie.host/93b8c5e0-3c4d-4a29-8e51-6c0a5e6f5c8a/xFGW5XUq0h.json",
			success:
				"https://lottie.host/93b8c5e0-3c4d-4a29-8e51-6c0a5e6f5c8a/xFGW5XUq0h.json",
		},
		systemPromptKey: "BRIGHTBYTE_SYSTEM_PROMPT",
	},
};

// Helper function to get tutor by ID
export const getTutorById = (id: TutorId): TutorCharacter => {
	return TUTOR_CHARACTERS[id];
};

// Helper function to get all tutors as array
export const getAllTutors = (): TutorCharacter[] => {
	return Object.values(TUTOR_CHARACTERS);
};

// Default tutor
export const DEFAULT_TUTOR_ID: TutorId = "brightbyte";
