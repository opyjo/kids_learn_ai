import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import {
	ACTIVE_THREAD_STORAGE_KEY,
	type ChatMessage,
	type ChatThread,
	THREADS_STORAGE_KEY,
} from "@/components/chat/chat-data";
import { useTutorThreads } from "@/hooks/use-tutor-threads";

const legacyKey = "tutor-messages-brightbyte";

const buildMessage = (overrides: Partial<ChatMessage> = {}): ChatMessage => ({
	id: overrides.id ?? `msg-${Math.random().toString(36).slice(2, 8)}`,
	role: overrides.role ?? "assistant",
	content: overrides.content ?? "hello",
	timestamp: overrides.timestamp ?? Date.now(),
	suggestions: overrides.suggestions,
});

const buildThread = (index: number): ChatThread => ({
	id: `thread-${index}`,
	title: `Thread ${index}`,
	createdAt: 1_700_000_000_000 + index,
	updatedAt: 1_700_000_100_000 + index,
	messages: [buildMessage({ id: `message-${index}` })],
});

describe("useTutorThreads", () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it("initializes with a default thread when no storage exists", async () => {
		const { result } = renderHook(() => useTutorThreads("brightbyte"));

		await waitFor(() => expect(result.current.isHydrated).toBe(true));

		expect(result.current.threads).toHaveLength(1);
		expect(result.current.activeThreadId).toBeTruthy();
		expect(result.current.activeThread?.messages).toHaveLength(1);
		expect(result.current.activeThread?.messages[0]?.role).toBe("assistant");
	});

	it("migrates legacy tutor messages into v1 thread storage", async () => {
		const legacyMessages: ChatMessage[] = [
			buildMessage({ role: "assistant", content: "Welcome" }),
			buildMessage({ role: "user", content: "Help me with loops" }),
		];
		localStorage.setItem(legacyKey, JSON.stringify(legacyMessages));

		const { result } = renderHook(() => useTutorThreads("brightbyte"));
		await waitFor(() => expect(result.current.isHydrated).toBe(true));

		expect(localStorage.getItem(legacyKey)).toBeNull();
		expect(result.current.threads).toHaveLength(1);
		expect(result.current.activeThread?.messages).toEqual(legacyMessages);
		expect(localStorage.getItem(THREADS_STORAGE_KEY)).not.toBeNull();
		expect(localStorage.getItem(ACTIVE_THREAD_STORAGE_KEY)).toBeTruthy();
	});

	it("caps persisted history to the last 10 chats", async () => {
		const threads = Array.from({ length: 12 }, (_, index) =>
			buildThread(index),
		);
		localStorage.setItem(THREADS_STORAGE_KEY, JSON.stringify(threads));
		localStorage.setItem(ACTIVE_THREAD_STORAGE_KEY, "thread-11");

		const { result } = renderHook(() => useTutorThreads("brightbyte"));
		await waitFor(() => expect(result.current.isHydrated).toBe(true));

		expect(result.current.threads).toHaveLength(10);
		expect(result.current.threads[0]?.id).toBe("thread-11");
		expect(result.current.threads.at(-1)?.id).toBe("thread-2");
		expect(
			result.current.threads.some((thread) => thread.id === "thread-0"),
		).toBe(false);
		expect(
			result.current.threads.some((thread) => thread.id === "thread-1"),
		).toBe(false);
	});

	it("selects a fallback active thread when deleting the active thread", async () => {
		const first = buildThread(1);
		const second = buildThread(2);
		first.updatedAt = 20;
		second.updatedAt = 10;
		localStorage.setItem(THREADS_STORAGE_KEY, JSON.stringify([first, second]));
		localStorage.setItem(ACTIVE_THREAD_STORAGE_KEY, first.id);

		const { result } = renderHook(() => useTutorThreads("brightbyte"));
		await waitFor(() => expect(result.current.isHydrated).toBe(true));

		act(() => {
			result.current.deleteThread(first.id);
		});

		expect(result.current.threads).toHaveLength(1);
		expect(result.current.threads[0]?.id).toBe(second.id);
		expect(result.current.activeThreadId).toBe(second.id);
	});

	it("creates a new chat thread with initial assistant message", async () => {
		const { result } = renderHook(() => useTutorThreads("brightbyte"));
		await waitFor(() => expect(result.current.isHydrated).toBe(true));

		const originalCount = result.current.threads.length;
		act(() => {
			result.current.createNewThread();
		});

		expect(result.current.threads.length).toBe(originalCount + 1);
		expect(result.current.activeThread?.messages).toHaveLength(1);
		expect(result.current.activeThread?.messages[0]?.role).toBe("assistant");
	});

	it("clears only the active thread messages", async () => {
		const first = buildThread(1);
		const second = buildThread(2);
		first.messages = [
			buildMessage({ role: "assistant", content: "Welcome" }),
			buildMessage({ role: "user", content: "Thread one question" }),
		];
		second.messages = [
			buildMessage({ role: "assistant", content: "Welcome" }),
			buildMessage({ role: "user", content: "Thread two question" }),
		];
		second.updatedAt = 20;
		first.updatedAt = 10;

		localStorage.setItem(THREADS_STORAGE_KEY, JSON.stringify([first, second]));
		localStorage.setItem(ACTIVE_THREAD_STORAGE_KEY, second.id);

		const { result } = renderHook(() => useTutorThreads("brightbyte"));
		await waitFor(() => expect(result.current.isHydrated).toBe(true));

		act(() => {
			result.current.clearActiveThread();
		});

		const active = result.current.threads.find(
			(thread) => thread.id === result.current.activeThreadId,
		);
		const inactive = result.current.threads.find(
			(thread) => thread.id !== result.current.activeThreadId,
		);

		expect(active?.messages).toHaveLength(1);
		expect(active?.messages[0]?.role).toBe("assistant");
		expect(inactive?.messages).toHaveLength(2);
	});
});
