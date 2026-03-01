"use client";

import { MessageSquare, Trash2 } from "lucide-react";
import type { ChatThread } from "@/components/chat/chat-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TutorConversationListProps {
	threads: ChatThread[];
	activeThreadId: string;
	onSelectThread: (threadId: string) => void;
	onDeleteThread: (threadId: string) => void;
}

export const TutorConversationList = ({
	threads,
	activeThreadId,
	onSelectThread,
	onDeleteThread,
}: TutorConversationListProps) => {
	if (threads.length === 0) {
		return (
			<p className="px-3 py-2 text-xs text-muted-foreground">No chats yet.</p>
		);
	}

	return (
		<ul className="space-y-1" aria-label="Recent conversations">
			{threads.map((thread) => {
				const isActive = thread.id === activeThreadId;
				return (
					<li key={thread.id}>
						<div
							className={cn(
								"group flex items-center gap-1 rounded-lg border px-1 py-1 transition-colors",
								isActive
									? "border-primary/40 bg-primary/10"
									: "border-transparent hover:border-border hover:bg-muted/50",
							)}
						>
							<Button
								type="button"
								variant="ghost"
								onClick={() => onSelectThread(thread.id)}
								className={cn(
									"h-auto flex-1 items-start justify-start gap-2 px-2 py-2 text-left",
									isActive && "text-foreground",
								)}
							>
								<MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0" />
								<span className="line-clamp-2 text-xs font-medium leading-4">
									{thread.title}
								</span>
							</Button>
							<Button
								type="button"
								variant="ghost"
								size="icon"
								onClick={() => onDeleteThread(thread.id)}
								className="h-7 w-7 shrink-0 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100 focus:opacity-100"
								aria-label={`Delete ${thread.title}`}
							>
								<Trash2 className="h-3.5 w-3.5" />
							</Button>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
