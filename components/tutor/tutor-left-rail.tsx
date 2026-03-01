"use client";

import { Code2, Plus, Sparkles, Trash2 } from "lucide-react";
import type { ChatThread } from "@/components/chat/chat-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import type { TutorCharacter } from "@/lib/constants/tutor-characters";
import { Button } from "../ui/button";
import { TutorConversationList } from "./tutor-conversation-list";

interface TutorLeftRailProps {
	tutor: TutorCharacter;
	threads: ChatThread[];
	activeThreadId: string;
	onNewChat: () => void;
	onSelectThread: (threadId: string) => void;
	onDeleteThread: (threadId: string) => void;
	onPromptSelect: (prompt: string) => void;
	onOpenEditor: () => void;
	onClearCurrentChat: () => void;
	onAfterAction?: () => void;
	starterPrompts: string[];
}

export const TutorLeftRail = ({
	tutor,
	threads,
	activeThreadId,
	onNewChat,
	onSelectThread,
	onDeleteThread,
	onPromptSelect,
	onOpenEditor,
	onClearCurrentChat,
	onAfterAction,
	starterPrompts,
}: TutorLeftRailProps) => {
	const handleAction = (action: () => void) => {
		action();
		onAfterAction?.();
	};

	return (
		<div className="flex h-full min-h-0 flex-col bg-card/40">
			<div className="shrink-0 border-b px-4 py-4">
				<div className="mb-3 flex items-center gap-2">
					<span className="text-lg" aria-hidden="true">
						{tutor.emoji}
					</span>
					<div>
						<p className="text-sm font-semibold">{tutor.name} Workspace</p>
						<p className="text-xs text-muted-foreground">
							Python + AI tutoring
						</p>
					</div>
				</div>
				<Button
					type="button"
					onClick={() => handleAction(onNewChat)}
					className="w-full justify-start gap-2"
				>
					<Plus className="h-4 w-4" />
					New Chat
				</Button>
			</div>

			<ScrollArea className="min-h-0 flex-1">
				<div className="space-y-4 px-3 py-4">
					<section aria-labelledby="recent-conversations-heading">
						<h2
							id="recent-conversations-heading"
							className="px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
						>
							Recent Chats
						</h2>
						<div className="mt-2">
							<TutorConversationList
								threads={threads}
								activeThreadId={activeThreadId}
								onSelectThread={(threadId) =>
									handleAction(() => onSelectThread(threadId))
								}
								onDeleteThread={(threadId) =>
									handleAction(() => onDeleteThread(threadId))
								}
							/>
						</div>
					</section>

					<Separator />

					<section aria-labelledby="starter-prompts-heading">
						<h2
							id="starter-prompts-heading"
							className="mb-2 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
						>
							<Sparkles className="h-3.5 w-3.5" />
							Starter Prompts
						</h2>
						<div className="space-y-1">
							{starterPrompts.map((prompt) => (
								<Button
									key={prompt}
									type="button"
									variant="ghost"
									onClick={() => handleAction(() => onPromptSelect(prompt))}
									className="h-auto w-full justify-start px-2 py-2 text-left text-xs leading-4 whitespace-normal"
								>
									{prompt}
								</Button>
							))}
						</div>
					</section>

					<Separator />

					<section aria-labelledby="tools-heading">
						<h2
							id="tools-heading"
							className="px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
						>
							Tools
						</h2>
						<div className="mt-2 space-y-1">
							<Button
								type="button"
								variant="ghost"
								onClick={() => handleAction(onOpenEditor)}
								className="w-full justify-start gap-2"
							>
								<Code2 className="h-4 w-4" />
								Open Playground
							</Button>
							<Button
								type="button"
								variant="ghost"
								onClick={() => handleAction(onClearCurrentChat)}
								className="w-full justify-start gap-2 text-destructive hover:text-destructive"
							>
								<Trash2 className="h-4 w-4" />
								Clear Current Chat
							</Button>
						</div>
					</section>
				</div>
			</ScrollArea>
		</div>
	);
};
