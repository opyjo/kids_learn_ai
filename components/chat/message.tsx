"use client";

import { User } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { TutorCharacter } from "@/lib/constants/tutor-characters";
import { cn } from "@/lib/utils";
import { MessageContent } from "./message-content";

interface MessageProps {
	id: string;
	role: "user" | "assistant";
	content: string;
	timestamp: number;
	tutor?: TutorCharacter;
}

export const Message = memo(
	({ id, role, content, timestamp, tutor }: MessageProps) => {
		const isAssistant = role === "assistant";

		return (
			<div
				className={cn(
					"flex gap-3 p-4 rounded-xl transition-all relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-300",
					isAssistant
						? "bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/10"
						: "bg-gradient-to-br from-secondary/30 to-transparent border border-secondary/20",
				)}
			>
				<Avatar
					className={cn(
						"h-9 w-9 shrink-0 shadow-sm overflow-visible",
						isAssistant
							? "bg-transparent ring-2 ring-primary/20"
							: "bg-gradient-to-br from-accent to-accent/80 ring-2 ring-accent/20",
					)}
				>
					<AvatarFallback className="bg-transparent">
						{isAssistant ? (
							<Image
								src="/brightbyte/gesture.png"
								alt="BrightByte"
								width={36}
								height={36}
								className="object-contain"
							/>
						) : (
							<User className="h-5 w-5 text-accent-foreground" />
						)}
					</AvatarFallback>
				</Avatar>

				<div className="flex-1 space-y-2 overflow-hidden min-w-0">
					<div className="flex items-center justify-between gap-2">
						<p className="text-sm font-bold text-foreground">
							{isAssistant
								? tutor
									? `${tutor.emoji} ${tutor.name}`
									: "🤖 AI Tutor"
								: "You"}
						</p>
						<time className="text-xs text-muted-foreground">
							{new Date(timestamp).toLocaleTimeString([], {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</time>
					</div>
					<MessageContent content={content} role={role} />
				</div>
			</div>
		);
	},
	(prevProps, nextProps) => {
		// Custom comparison for optimization
		return (
			prevProps.id === nextProps.id &&
			prevProps.content === nextProps.content &&
			prevProps.timestamp === nextProps.timestamp &&
			prevProps.tutor?.id === nextProps.tutor?.id
		);
	},
);

Message.displayName = "Message";
