"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
	ACTIVE_THREAD_STORAGE_KEY,
	createChatThread,
	deriveThreadTitle,
	LEGACY_THREAD_MESSAGES_KEY_PREFIX,
	MAX_RECENT_THREADS,
	type ChatMessage,
	type ChatThread,
	THREADS_STORAGE_KEY,
	getInitialMessage,
} from "@/components/chat/chat-data";
import { getTutorById, type TutorId } from "@/lib/constants/tutor-characters";

interface UseTutorThreadsResult {
	threads: ChatThread[];
	activeThreadId: string;
	activeThread: ChatThread | null;
	isHydrated: boolean;
	createNewThread: () => string;
	selectThread: (threadId: string) => void;
	deleteThread: (threadId: string) => void;
	updateActiveMessages: (messages: ChatMessage[]) => void;
	clearActiveThread: () => void;
}

const isValidMessage = (value: unknown): value is ChatMessage => {
	if (!value || typeof value !== "object") return false;
	const message = value as Partial<ChatMessage>;
	return (
		typeof message.id === "string" &&
		(message.role === "assistant" || message.role === "user") &&
		typeof message.content === "string" &&
		typeof message.timestamp === "number"
	);
};

const isValidThread = (value: unknown): value is ChatThread => {
	if (!value || typeof value !== "object") return false;
	const thread = value as Partial<ChatThread>;
	return (
		typeof thread.id === "string" &&
		typeof thread.title === "string" &&
		typeof thread.createdAt === "number" &&
		typeof thread.updatedAt === "number" &&
		Array.isArray(thread.messages) &&
		thread.messages.every(isValidMessage)
	);
};

const sortAndCapThreads = (threads: ChatThread[]): ChatThread[] => {
	return [...threads]
		.sort((a, b) => b.updatedAt - a.updatedAt)
		.slice(0, MAX_RECENT_THREADS);
};

const normalizeThread = (thread: ChatThread, tutorId: TutorId): ChatThread => {
	const tutor = getTutorById(tutorId);
	const messages =
		thread.messages.length > 0 ? thread.messages : [getInitialMessage(tutor)];

	return {
		...thread,
		title: deriveThreadTitle(messages),
		messages,
	};
};

export const useTutorThreads = (tutorId: TutorId): UseTutorThreadsResult => {
	const [threads, setThreads] = useState<ChatThread[]>([]);
	const [activeThreadId, setActiveThreadId] = useState<string>("");
	const [isHydrated, setIsHydrated] = useState(false);

	const createAndSetDefaultThread = useCallback(() => {
		const tutor = getTutorById(tutorId);
		const thread = createChatThread(tutor);
		setThreads([thread]);
		setActiveThreadId(thread.id);
		return thread;
	}, [tutorId]);

	useEffect(() => {
		try {
			const storedThreads = localStorage.getItem(THREADS_STORAGE_KEY);
			const storedActiveThread = localStorage.getItem(ACTIVE_THREAD_STORAGE_KEY);

			if (storedThreads) {
				const parsed = JSON.parse(storedThreads);
				if (Array.isArray(parsed)) {
					const validThreads = parsed
						.filter(isValidThread)
						.map((thread) => normalizeThread(thread, tutorId));
					const cappedThreads = sortAndCapThreads(validThreads);

					if (cappedThreads.length > 0) {
						setThreads(cappedThreads);
						const activeExists = cappedThreads.some(
							(thread) => thread.id === storedActiveThread,
						);
						setActiveThreadId(
							activeExists && storedActiveThread
								? storedActiveThread
								: cappedThreads[0].id,
						);
						setIsHydrated(true);
						return;
					}
				}
			}

			const legacyKey = `${LEGACY_THREAD_MESSAGES_KEY_PREFIX}${tutorId}`;
			const legacyMessagesRaw = localStorage.getItem(legacyKey);
			if (legacyMessagesRaw) {
				const parsedLegacy = JSON.parse(legacyMessagesRaw);
				if (Array.isArray(parsedLegacy)) {
					const legacyMessages = parsedLegacy.filter(isValidMessage);
					const tutor = getTutorById(tutorId);
					const migratedThread = createChatThread(
						tutor,
						legacyMessages.length > 0
							? legacyMessages
							: [getInitialMessage(tutor)],
					);

					setThreads([migratedThread]);
					setActiveThreadId(migratedThread.id);
					localStorage.removeItem(legacyKey);
					setIsHydrated(true);
					return;
				}
			}
		} catch (error) {
			console.error("Failed to initialize tutor threads:", error);
		}

		createAndSetDefaultThread();
		setIsHydrated(true);
	}, [tutorId, createAndSetDefaultThread]);

	useEffect(() => {
		if (!isHydrated || threads.length === 0 || !activeThreadId) return;

		localStorage.setItem(THREADS_STORAGE_KEY, JSON.stringify(threads));
		localStorage.setItem(ACTIVE_THREAD_STORAGE_KEY, activeThreadId);
	}, [threads, activeThreadId, isHydrated]);

	const createNewThread = useCallback(() => {
		const tutor = getTutorById(tutorId);
		const newThread = createChatThread(tutor);
		setThreads((current) => {
			const next = sortAndCapThreads([newThread, ...current]);
			return next;
		});
		setActiveThreadId(newThread.id);
		return newThread.id;
	}, [tutorId]);

	const selectThread = useCallback((threadId: string) => {
		setThreads((current) => {
			const next = current.map((thread) =>
				thread.id === threadId
					? { ...thread, updatedAt: Date.now() }
					: thread,
			);
			return sortAndCapThreads(next);
		});
		setActiveThreadId(threadId);
	}, []);

	const deleteThread = useCallback(
		(threadId: string) => {
			setThreads((current) => {
				const remaining = current.filter((thread) => thread.id !== threadId);
				if (remaining.length === 0) {
					const fallback = createChatThread(getTutorById(tutorId));
					setActiveThreadId(fallback.id);
					return [fallback];
				}

				const sorted = sortAndCapThreads(remaining);
				setActiveThreadId((currentActive) =>
					currentActive === threadId ? sorted[0].id : currentActive,
				);
				return sorted;
			});
		},
		[tutorId],
	);

	const updateActiveMessages = useCallback(
		(messages: ChatMessage[]) => {
			setThreads((current) => {
				const now = Date.now();
				const next = current.map((thread) =>
					thread.id === activeThreadId
						? {
								...thread,
								messages,
								title: deriveThreadTitle(messages),
								updatedAt: now,
						  }
						: thread,
				);
				return sortAndCapThreads(next);
			});
		},
		[activeThreadId],
	);

	const clearActiveThread = useCallback(() => {
		const tutor = getTutorById(tutorId);
		updateActiveMessages([getInitialMessage(tutor)]);
	}, [tutorId, updateActiveMessages]);

	const activeThread = useMemo(
		() => threads.find((thread) => thread.id === activeThreadId) || null,
		[threads, activeThreadId],
	);

	return {
		threads,
		activeThreadId,
		activeThread,
		isHydrated,
		createNewThread,
		selectThread,
		deleteThread,
		updateActiveMessages,
		clearActiveThread,
	};
};
