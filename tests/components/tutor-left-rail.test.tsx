import { describe, expect, it, vi } from "vitest";
import type { ChatThread } from "@/components/chat/chat-data";
import { STARTER_PROMPTS } from "@/components/chat/chat-data";
import { TutorLeftRail } from "@/components/tutor/tutor-left-rail";
import { getTutorById } from "@/lib/constants/tutor-characters";
import { render, screen } from "@/tests/test-utils";

const tutor = getTutorById("brightbyte");

const threads: ChatThread[] = [
	{
		id: "thread-1",
		title: "Variables in Python",
		createdAt: Date.now(),
		updatedAt: Date.now(),
		messages: [
			{
				id: "initial",
				role: "assistant",
				content: "How can I help?",
				timestamp: Date.now(),
			},
		],
	},
];

describe("TutorLeftRail", () => {
	it("calls onNewChat when New Chat is clicked", async () => {
		const onNewChat = vi.fn();
		const { user } = render(
			<TutorLeftRail
				tutor={tutor}
				threads={threads}
				activeThreadId="thread-1"
				onNewChat={onNewChat}
				onSelectThread={vi.fn()}
				onDeleteThread={vi.fn()}
				onPromptSelect={vi.fn()}
				onOpenEditor={vi.fn()}
				onClearCurrentChat={vi.fn()}
				starterPrompts={STARTER_PROMPTS}
			/>,
		);

		await user.click(screen.getByRole("button", { name: /new chat/i }));
		expect(onNewChat).toHaveBeenCalledTimes(1);
	});

	it("calls onSelectThread when a recent thread is clicked", async () => {
		const onSelectThread = vi.fn();
		const { user } = render(
			<TutorLeftRail
				tutor={tutor}
				threads={threads}
				activeThreadId="thread-1"
				onNewChat={vi.fn()}
				onSelectThread={onSelectThread}
				onDeleteThread={vi.fn()}
				onPromptSelect={vi.fn()}
				onOpenEditor={vi.fn()}
				onClearCurrentChat={vi.fn()}
				starterPrompts={STARTER_PROMPTS}
			/>,
		);

		await user.click(
			screen.getByRole("button", { name: /^variables in python$/i }),
		);
		expect(onSelectThread).toHaveBeenCalledWith("thread-1");
	});

	it("calls onOpenEditor when Open Playground is clicked", async () => {
		const onOpenEditor = vi.fn();
		const { user } = render(
			<TutorLeftRail
				tutor={tutor}
				threads={threads}
				activeThreadId="thread-1"
				onNewChat={vi.fn()}
				onSelectThread={vi.fn()}
				onDeleteThread={vi.fn()}
				onPromptSelect={vi.fn()}
				onOpenEditor={onOpenEditor}
				onClearCurrentChat={vi.fn()}
				starterPrompts={STARTER_PROMPTS}
			/>,
		);

		await user.click(screen.getByRole("button", { name: /open playground/i }));
		expect(onOpenEditor).toHaveBeenCalledTimes(1);
	});
});
