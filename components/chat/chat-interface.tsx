"use client";

import { Lightbulb, Loader2, Send, Sparkles, Trash2 } from "lucide-react";
import {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { toast } from "sonner";
import type { ChatMessage } from "@/components/chat/chat-data";
import {
	getInitialMessageContent,
	STARTER_PROMPTS,
} from "@/components/chat/chat-data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
	DEFAULT_TUTOR_ID,
	getTutorById,
	type TutorId,
} from "@/lib/constants/tutor-characters";
import { cn } from "@/lib/utils";
import { AnimatedTutor } from "./animated-tutor";
import { Message } from "./message";

const THINKING_PHRASES = [
	"Hmm, let me think... 🤔",
	"Great question! Thinking... 💭",
	"Processing your code... ⚡",
	"Let me figure this out... 🧠",
	"Analyzing... almost there! ✨",
	"Cooking up an answer... 🍳",
];

export interface ChatInterfaceRef {
	sendMessage: (message: string) => void;
}

interface ChatInterfaceProps {
	tutorId?: TutorId;
	messages: ChatMessage[];
	onMessagesChange: (messages: ChatMessage[]) => void;
	onClearChat?: () => void;
	className?: string;
}

const makeId = () => {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
		return crypto.randomUUID();
	}
	return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

export const ChatInterface = forwardRef<ChatInterfaceRef, ChatInterfaceProps>(
	(
		{
			tutorId = DEFAULT_TUTOR_ID,
			messages,
			onMessagesChange,
			onClearChat,
			className,
		},
		ref,
	) => {
		const tutor = getTutorById(tutorId);
		const [input, setInput] = useState("");
		const [isLoading, setIsLoading] = useState(false);
		const [remainingMessages, setRemainingMessages] = useState<number | null>(
			null,
		);
		const [dailyLimit, setDailyLimit] = useState<number | null>(null);
		const [thinkingPhrase, setThinkingPhrase] = useState(THINKING_PHRASES[0]);
		const scrollAreaRef = useRef<HTMLDivElement>(null);
		const textareaRef = useRef<HTMLTextAreaElement>(null);
		const abortControllerRef = useRef<AbortController | null>(null);
		const messagesRef = useRef(messages);

		useEffect(() => {
			messagesRef.current = messages;
		}, [messages]);

		useEffect(() => {
			return () => {
				if (abortControllerRef.current) {
					abortControllerRef.current.abort();
					abortControllerRef.current = null;
				}
			};
		}, []);

		// biome-ignore lint/correctness/useExhaustiveDependencies: intentional scroll sync
		useEffect(() => {
			const timeoutId = setTimeout(() => {
				const viewport = scrollAreaRef.current?.querySelector(
					"[data-radix-scroll-area-viewport]",
				) as HTMLElement | null;
				if (!viewport) return;
				viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
			}, 100);

			return () => clearTimeout(timeoutId);
		}, [messages.length, isLoading]);

		useEffect(() => {
			textareaRef.current?.focus();
		}, []);

		useEffect(() => {
			let isActive = true;

			const loadUsage = async () => {
				try {
					const response = await fetch("/api/chat", { method: "GET" });
					if (!response.ok) return;

					const data = await response.json();
					if (!isActive) return;

					if (!data?.usage) {
						setRemainingMessages(null);
						setDailyLimit(null);
						return;
					}

					setRemainingMessages(data.usage.remaining);
					setDailyLimit(data.usage.limit);
				} catch (error) {
					console.error("Failed to load chat usage:", error);
				}
			};

			void loadUsage();

			return () => {
				isActive = false;
			};
		}, []);

		useEffect(() => {
			if (!isLoading) return;

			setThinkingPhrase(
				THINKING_PHRASES[Math.floor(Math.random() * THINKING_PHRASES.length)],
			);

			const interval = setInterval(() => {
				setThinkingPhrase(
					THINKING_PHRASES[Math.floor(Math.random() * THINKING_PHRASES.length)],
				);
			}, 2000);

			return () => clearInterval(interval);
		}, [isLoading]);

		const handleSubmit = useCallback(
			async (content?: string) => {
				const messageContent = content || input.trim();

				if (!messageContent || isLoading) return;

				const currentMessages = messagesRef.current;
				const userMessage: ChatMessage = {
					id: makeId(),
					role: "user",
					content: messageContent,
					timestamp: Date.now(),
				};

				const updatedMessages = [...currentMessages, userMessage];
				onMessagesChange(updatedMessages);
				setInput("");
				setIsLoading(true);

				if (textareaRef.current) {
					textareaRef.current.style.height = "60px";
				}

				abortControllerRef.current = new AbortController();

				try {
					const response = await fetch("/api/chat", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							messages: updatedMessages,
							tutorId,
						}),
						signal: abortControllerRef.current.signal,
					});

					if (!response.ok) {
						if (response.status === 429) {
							const data = await response.json();
							if (data.usage) {
								setRemainingMessages(data.usage.remaining);
								setDailyLimit(data.usage.limit);
							}

							const limitMessage: ChatMessage = {
								id: makeId(),
								role: "assistant",
								content: data.content || data.error || "Daily limit reached",
								timestamp: Date.now(),
							};
							onMessagesChange([...updatedMessages, limitMessage]);
							return;
						}
						throw new Error("Failed to get response");
					}

					const data = await response.json();

					if (data.usage) {
						setRemainingMessages(data.usage.remaining);
						setDailyLimit(data.usage.limit);
					}

					const assistantMessage: ChatMessage = {
						id: makeId(),
						role: "assistant",
						content: data.content,
						timestamp: Date.now(),
						suggestions: data.suggestions,
					};

					onMessagesChange([...updatedMessages, assistantMessage]);
				} catch (error) {
					if (error instanceof Error && error.name === "AbortError") {
						toast.info("Request cancelled");
						return;
					}

					console.error("Chat error:", error);
					const errorMessage: ChatMessage = {
						id: makeId(),
						role: "assistant",
						content:
							"I'm having trouble responding right now. This might be a network issue. Please check your connection and try again!",
						timestamp: Date.now(),
					};
					onMessagesChange([...updatedMessages, errorMessage]);
					toast.error(
						"Sorry, I'm having trouble responding right now. Please try again!",
					);
				} finally {
					setIsLoading(false);
					abortControllerRef.current = null;
					textareaRef.current?.focus();
				}
			},
			[input, isLoading, onMessagesChange, tutorId],
		);

		useImperativeHandle(ref, () => ({
			sendMessage: (message: string) => {
				handleSubmit(message);
			},
		}));

		const handleKeyDown = useCallback(
			(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
				if (e.key === "Enter" && !e.shiftKey) {
					e.preventDefault();
					handleSubmit();
				} else if (e.key === "Escape" && isLoading) {
					e.preventDefault();
					abortControllerRef.current?.abort();
					setIsLoading(false);
					toast.info("Request cancelled");
				}
			},
			[handleSubmit, isLoading],
		);

		const handleInputChange = useCallback(
			(e: React.ChangeEvent<HTMLTextAreaElement>) => {
				setInput(e.target.value);
				e.target.style.height = "60px";
				const newHeight = Math.min(e.target.scrollHeight, 200);
				e.target.style.height = `${newHeight}px`;
			},
			[],
		);

		const handleStarterPrompt = useCallback(
			(prompt: string) => {
				handleSubmit(prompt);
			},
			[handleSubmit],
		);

		useEffect(() => {
			const handleKeyPress = (e: KeyboardEvent) => {
				if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
					e.preventDefault();
					onClearChat?.();
				}
			};

			window.addEventListener("keydown", handleKeyPress);
			return () => window.removeEventListener("keydown", handleKeyPress);
		}, [onClearChat]);

		const lastMessage = messages[messages.length - 1];

		return (
			<div
				className={cn(
					"flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border bg-card text-[12px] shadow-sm",
					className,
				)}
			>
				<div
					className="flex shrink-0 items-center justify-between gap-2 border-b px-2.5 py-1.5 sm:px-3"
					style={{
						borderColor: `${tutor.color.primary}35`,
						background: `linear-gradient(to right, ${tutor.color.primary}12, ${tutor.color.secondary}08)`,
					}}
				>
					<div className="flex min-w-0 items-center gap-2">
						<div className="shrink-0 scale-[0.7] sm:scale-75">
							<AnimatedTutor tutor={tutor} animationState="idle" size="small" />
						</div>
						<div className="min-w-0">
							<h2 className="truncate text-[14px] font-bold text-foreground">
								{tutor.name} <span className="text-[14px]">{tutor.emoji}</span>
							</h2>
							<div className="flex flex-wrap items-center gap-1.5">
								<p className="text-[14px] font-medium leading-none text-muted-foreground">
									Your {tutor.subject} Tutor
								</p>
								{remainingMessages !== null && dailyLimit !== null && (
									<span
										className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium leading-none ${
											remainingMessages <= 3
												? "bg-destructive/10 text-destructive"
												: "bg-muted text-muted-foreground"
										}`}
									>
										{remainingMessages} / {dailyLimit} today
									</span>
								)}
							</div>
						</div>
					</div>
					{!!onClearChat && messages.length > 1 && (
						<Button
							type="button"
							variant="ghost"
							size="sm"
							onClick={onClearChat}
							className="h-7 px-2 text-[11px] hover:bg-destructive/10 hover:text-destructive"
							aria-label="Clear chat"
						>
							<Trash2 className="mr-1 h-3 w-3" />
							Clear
						</Button>
					)}
				</div>

				<ScrollArea
					className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 py-3 sm:px-4"
					ref={scrollAreaRef}
				>
					<div className="space-y-3 pb-2">
						{messages.map((message) => (
							<Message
								key={message.id}
								id={message.id}
								role={message.role}
								content={
									message.id === "initial" && messages.length === 1
										? getInitialMessageContent(tutor)
										: message.content
								}
								timestamp={message.timestamp}
								tutor={tutor}
							/>
						))}

						{isLoading && (
							<div
								className="flex gap-3 rounded-xl border p-3"
								style={{
									background: `linear-gradient(to bottom right, ${tutor.color.primary}05, transparent)`,
									borderColor: `${tutor.color.primary}20`,
								}}
							>
								<div className="shrink-0">
									<AnimatedTutor
										tutor={tutor}
										animationState="thinking"
										size="small"
									/>
								</div>
								<div className="flex-1">
									<p className="text-[12px] font-bold text-foreground">
										{tutor.emoji} {tutor.name}
									</p>
									<div className="flex items-center gap-2">
										<p className="text-[12px] text-muted-foreground animate-pulse">
											{thinkingPhrase}
										</p>
										<div className="flex gap-1">
											<span
												className="h-2 w-2 animate-bounce rounded-full"
												style={{
													backgroundColor: tutor.color.primary,
													animationDelay: "0ms",
												}}
											/>
											<span
												className="h-2 w-2 animate-bounce rounded-full"
												style={{
													backgroundColor: tutor.color.primary,
													animationDelay: "150ms",
												}}
											/>
											<span
												className="h-2 w-2 animate-bounce rounded-full"
												style={{
													backgroundColor: tutor.color.primary,
													animationDelay: "300ms",
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						)}

						{!isLoading &&
							messages.length > 1 &&
							lastMessage?.role === "assistant" &&
							lastMessage.suggestions &&
							lastMessage.suggestions.length > 0 && (
								<div className="mt-2 space-y-1.5">
									<p className="flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground">
										<Lightbulb
											className="h-3.5 w-3.5"
											style={{ color: tutor.color.primary }}
										/>
										Want to know more?
									</p>
									<div className="flex flex-wrap gap-1.5">
										{lastMessage.suggestions.map((suggestion) => (
											<button
												key={suggestion}
												onClick={() => handleStarterPrompt(suggestion)}
												tabIndex={0}
												aria-label={`Ask: ${suggestion}`}
												className="rounded-full border px-2.5 py-1 text-[11px] font-medium leading-4 transition-all hover:shadow-sm focus:ring-2"
												style={{
													borderColor: `${tutor.color.primary}40`,
													background: `linear-gradient(to right, ${tutor.color.primary}05, transparent)`,
												}}
											>
												{suggestion}
											</button>
										))}
									</div>
								</div>
							)}

						{messages.length === 1 && !isLoading && (
							<div className="mt-2 pb-1">
								<div className="flex flex-wrap items-center gap-1.5 px-1">
									<p className="flex items-center gap-1.5 text-[12px] font-semibold text-foreground">
										<Sparkles
											className="h-3.5 w-3.5"
											style={{ color: tutor.color.primary }}
										/>
										Try asking:
									</p>
									{STARTER_PROMPTS.map((prompt) => (
										<button
											key={prompt}
											onClick={() => handleStarterPrompt(prompt)}
											tabIndex={0}
											aria-label={`Ask: ${prompt}`}
											className="rounded-full border px-2.5 py-1 text-[11px] font-medium leading-4 transition-all hover:shadow-sm focus:ring-2"
											style={{
												borderColor: `${tutor.color.primary}35`,
												background: `linear-gradient(to right, ${tutor.color.primary}05, transparent)`,
											}}
										>
											{prompt}
										</button>
									))}
								</div>
							</div>
						)}
					</div>
				</ScrollArea>

				<div
					className="shrink-0 border-t p-2.5"
					style={{
						borderColor: `${tutor.color.primary}35`,
						background: `linear-gradient(to right, ${tutor.color.primary}05, transparent)`,
					}}
				>
					<div className="flex gap-2">
						<Textarea
							ref={textareaRef}
							value={input}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
							placeholder={`Ask me about ${tutor.subject.toLowerCase()}... ${tutor.emoji}`}
							className="min-h-[52px] max-h-[200px] resize-none rounded-xl text-[12px]"
							style={{
								borderColor: `${tutor.color.primary}35`,
							}}
							disabled={isLoading}
							aria-label="Chat message input"
						/>
						<Button
							type="button"
							onClick={() => handleSubmit()}
							disabled={!input.trim() || isLoading}
							size="icon"
							className="h-[52px] w-[52px] shrink-0 rounded-xl"
							style={{
								background: `linear-gradient(to bottom right, ${tutor.color.primary}, ${tutor.color.secondary})`,
							}}
							aria-label="Send message"
						>
							{isLoading ? (
								<Loader2 className="h-5 w-5 animate-spin text-white" />
							) : (
								<Send className="h-5 w-5 text-white" />
							)}
						</Button>
					</div>
					<p className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
						<span className="font-medium">Tip:</span>
						<span>Enter to send</span>
						<span>Shift+Enter for new line</span>
						{messages.length > 1 && <span>Cmd/Ctrl+K to clear</span>}
						{isLoading && <span>Esc to cancel</span>}
					</p>
				</div>
			</div>
		);
	},
);

ChatInterface.displayName = "ChatInterface";
