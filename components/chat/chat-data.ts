import type { TutorCharacter } from "@/lib/constants/tutor-characters";

export interface ChatMessage {
	id: string;
	role: "user" | "assistant";
	content: string;
	timestamp: number;
	suggestions?: string[];
}

export interface ChatThread {
	id: string;
	title: string;
	createdAt: number;
	updatedAt: number;
	messages: ChatMessage[];
}

export const STARTER_PROMPTS: string[] = [
	"What is a variable?",
	"How do AI loops work?",
	"Can you debug my code?",
];

export const MAX_RECENT_THREADS = 10;
export const THREADS_STORAGE_KEY = "brightbyte-threads:v1";
export const ACTIVE_THREAD_STORAGE_KEY = "brightbyte-active-thread:v1";
export const LEGACY_THREAD_MESSAGES_KEY_PREFIX = "tutor-messages-";

const makeId = () => {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
		return crypto.randomUUID();
	}
	return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

export const deriveThreadTitle = (messages: ChatMessage[]): string => {
	const firstUserMessage = messages.find((message) => message.role === "user");
	if (!firstUserMessage) return "New Chat";

	const normalized = firstUserMessage.content.replace(/\s+/g, " ").trim();
	if (!normalized) return "New Chat";
	if (normalized.length <= 48) return normalized;
	return `${normalized.slice(0, 45)}...`;
};

export const getInitialMessageContent = (tutor: TutorCharacter): string =>
	`Hi there! I'm ${tutor.name}, your ${tutor.subject.toLowerCase()} tutor ${tutor.emoji}✨. What can I help you with today?`;

export const getInitialMessage = (tutor: TutorCharacter): ChatMessage => ({
	id: "initial",
	role: "assistant",
	content: getInitialMessageContent(tutor),
	timestamp: Date.now(),
});

export const createChatThread = (
	tutor: TutorCharacter,
	messages?: ChatMessage[],
): ChatThread => {
	const now = Date.now();
	const threadMessages =
		messages && messages.length > 0 ? messages : [getInitialMessage(tutor)];

	return {
		id: makeId(),
		title: deriveThreadTitle(threadMessages),
		createdAt: now,
		updatedAt: now,
		messages: threadMessages,
	};
};
