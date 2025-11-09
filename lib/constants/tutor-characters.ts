export type TutorId = "brightbyte" | "mathbot" | "scienceowl" | "artai";

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
    emoji: "🐍",
    subject: "Python Programming",
    description:
      "Your friendly Python programming companion! I love teaching code through fun examples and encouraging you every step of the way.",
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
  mathbot: {
    id: "mathbot",
    name: "MathBot",
    emoji: "🤖",
    subject: "Mathematics",
    description:
      "I'm a logical robot who loves numbers, patterns, and problem-solving! Let's explore the wonderful world of math together.",
    personality: [
      "Logical",
      "Precise",
      "Pattern-focused",
      "Loves puzzles",
    ],
    color: {
      primary: "#3b82f6", // blue-500
      secondary: "#60a5fa", // blue-400
      gradient: "from-blue-500 to-cyan-400",
    },
    animationUrl: {
      idle: "https://lottie.host/8d7e8f5a-5b2c-4e1d-9c3e-5f7a8b9c0d1e/RJKLMNopQR.json", // Robot animation
      thinking:
        "https://lottie.host/8d7e8f5a-5b2c-4e1d-9c3e-5f7a8b9c0d1e/RJKLMNopQR.json",
      talking:
        "https://lottie.host/8d7e8f5a-5b2c-4e1d-9c3e-5f7a8b9c0d1e/RJKLMNopQR.json",
      success:
        "https://lottie.host/8d7e8f5a-5b2c-4e1d-9c3e-5f7a8b9c0d1e/RJKLMNopQR.json",
    },
    systemPromptKey: "MATHBOT_SYSTEM_PROMPT",
  },
  scienceowl: {
    id: "scienceowl",
    name: "ScienceOwl",
    emoji: "🦉",
    subject: "Science",
    description:
      "Hoot hoot! I'm a wise owl who loves exploring how the world works. Let's discover amazing science concepts together!",
    personality: [
      "Curious",
      "Wise",
      "Asks questions",
      "Loves experiments",
    ],
    color: {
      primary: "#8b5cf6", // purple-500
      secondary: "#a78bfa", // purple-400
      gradient: "from-purple-500 to-violet-400",
    },
    animationUrl: {
      idle: "https://lottie.host/7c6d8e5f-4a1b-3c0d-8b2e-6f8a9b0c1d2e/STUVWXyzAB.json", // Owl animation
      thinking:
        "https://lottie.host/7c6d8e5f-4a1b-3c0d-8b2e-6f8a9b0c1d2e/STUVWXyzAB.json",
      talking:
        "https://lottie.host/7c6d8e5f-4a1b-3c0d-8b2e-6f8a9b0c1d2e/STUVWXyzAB.json",
      success:
        "https://lottie.host/7c6d8e5f-4a1b-3c0d-8b2e-6f8a9b0c1d2e/STUVWXyzAB.json",
    },
    systemPromptKey: "SCIENCEOWL_SYSTEM_PROMPT",
  },
  artai: {
    id: "artai",
    name: "ArtAI",
    emoji: "🎨",
    subject: "Creative Arts",
    description:
      "I'm your colorful creative companion! Let's paint, draw, write stories, and express ourselves through art and imagination.",
    personality: [
      "Imaginative",
      "Expressive",
      "Encourages experimentation",
      "Celebrates creativity",
    ],
    color: {
      primary: "#ec4899", // pink-500
      secondary: "#f472b6", // pink-400
      gradient: "from-pink-500 via-rose-400 to-orange-400",
    },
    animationUrl: {
      idle: "https://lottie.host/6b5c7d4e-3a0b-2c1d-9e8f-7a9b0c1d2e3f/CDEFGHijKL.json", // Art/palette animation
      thinking:
        "https://lottie.host/6b5c7d4e-3a0b-2c1d-9e8f-7a9b0c1d2e3f/CDEFGHijKL.json",
      talking:
        "https://lottie.host/6b5c7d4e-3a0b-2c1d-9e8f-7a9b0c1d2e3f/CDEFGHijKL.json",
      success:
        "https://lottie.host/6b5c7d4e-3a0b-2c1d-9e8f-7a9b0c1d2e3f/CDEFGHijKL.json",
    },
    systemPromptKey: "ARTAI_SYSTEM_PROMPT",
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

