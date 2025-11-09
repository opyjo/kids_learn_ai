"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Message } from "./message";
import { Loader2, Send, Sparkles, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  TutorCharacter,
  TutorId,
  getTutorById,
  DEFAULT_TUTOR_ID,
} from "@/lib/constants/tutor-characters";
import { AnimatedTutor } from "./animated-tutor";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

// Starter prompts by tutor
const STARTER_PROMPTS: Record<TutorId, string[]> = {
  brightbyte: [
    "What is a variable in Python?",
    "How do I make a loop?",
    "Can you help me debug my code?",
    "What's the difference between a list and a tuple?",
  ],
  mathbot: [
    "Can you help me with fractions?",
    "How do I solve this word problem?",
    "What is algebra?",
    "Can you explain multiplication?",
  ],
  scienceowl: [
    "How does photosynthesis work?",
    "What makes the sky blue?",
    "Can you explain gravity?",
    "What is the water cycle?",
  ],
  artai: [
    "How can I start writing a story?",
    "What colors go well together?",
    "Can you help me draw something?",
    "How do I make my art more creative?",
  ],
};

// Generate initial message based on tutor
const getInitialMessage = (tutor: TutorCharacter): ChatMessage => ({
  id: "initial",
  role: "assistant",
  content: `Hi there! I'm ${
    tutor.name
  }, your ${tutor.subject.toLowerCase()} tutor! ${tutor.emoji}✨\n\n${
    tutor.description
  }\n\nWhat ${tutor.subject.toLowerCase()} question can I help you with today?`,
  timestamp: Date.now(),
});

export interface ChatInterfaceRef {
  sendMessage: (message: string) => void;
}

interface ChatInterfaceProps {
  tutorId?: TutorId;
}

export const ChatInterface = forwardRef<ChatInterfaceRef, ChatInterfaceProps>(
  ({ tutorId = DEFAULT_TUTOR_ID }, ref) => {
    const tutor = getTutorById(tutorId);
    const INITIAL_MESSAGE = getInitialMessage(tutor);
    const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const abortControllerRef = useRef<AbortController | null>(null);
    const hasMountedRef = useRef(false);

    // Load and save messages per tutor to localStorage
    useEffect(() => {
      // Load saved messages for this tutor
      const savedMessagesKey = `tutor-messages-${tutorId}`;
      const savedMessages = localStorage.getItem(savedMessagesKey);
      const currentTutor = getTutorById(tutorId);

      if (savedMessages) {
        try {
          const parsed = JSON.parse(savedMessages);
          setMessages(parsed);
        } catch (error) {
          console.error("Error loading saved messages:", error);
          const newInitialMessage = getInitialMessage(currentTutor);
          setMessages([newInitialMessage]);
        }
      } else {
        const newInitialMessage = getInitialMessage(currentTutor);
        setMessages([newInitialMessage]);
      }

      setInput("");
      setIsLoading(false);

      // Abort any pending requests
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }

      // Show notification when switching tutors (skip on initial mount)
      if (hasMountedRef.current) {
        toast.success(
          `Switched to ${currentTutor.name} ${currentTutor.emoji}`,
          {
            description: `Your ${currentTutor.subject} tutor is ready!`,
          }
        );
      }
    }, [tutorId]);

    // Save messages to localStorage whenever they change
    useEffect(() => {
      if (messages.length > 0) {
        const savedMessagesKey = `tutor-messages-${tutorId}`;
        localStorage.setItem(savedMessagesKey, JSON.stringify(messages));
      }
    }, [messages, tutorId]);

    // Auto-scroll inside the ScrollArea when new messages arrive (skip initial mount)
    useEffect(() => {
      if (!hasMountedRef.current) {
        hasMountedRef.current = true;
        return;
      }

      const viewport = scrollAreaRef.current?.querySelector(
        "[data-radix-scroll-area-viewport]"
      ) as HTMLElement | null;
      if (!viewport) return;
      viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
    }, [messages]);

    // Auto-focus textarea on mount
    useEffect(() => {
      textareaRef.current?.focus();
    }, []);

    // Expose sendMessage method via ref
    useImperativeHandle(ref, () => ({
      sendMessage: (message: string) => {
        handleSubmit(message);
      },
    }));

    const handleSubmit = useCallback(
      async (content?: string) => {
        const messageContent = content || input.trim();

        if (!messageContent || isLoading) return;

        const userMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "user",
          content: messageContent,
          timestamp: Date.now(),
        };

        // Update messages state and get the new array
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setIsLoading(true);

        // Reset textarea height
        if (textareaRef.current) {
          textareaRef.current.style.height = "60px";
        }

        // Create abort controller for this request
        abortControllerRef.current = new AbortController();

        try {
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messages: updatedMessages,
              tutorId: tutorId,
            }),
            signal: abortControllerRef.current.signal,
          });

          if (!response.ok) {
            throw new Error("Failed to get response");
          }

          const data = await response.json();

          const assistantMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: data.content,
            timestamp: Date.now(),
          };

          setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            toast.info("Request cancelled");
          } else {
            console.error("Chat error:", error);
            toast.error(
              "Sorry, I'm having trouble responding right now. Please try again!"
            );
            // Remove the user message if there was an error
            setMessages((prev) => prev.slice(0, -1));
          }
        } finally {
          setIsLoading(false);
          abortControllerRef.current = null;
          textareaRef.current?.focus();
        }
      },
      [input, isLoading, messages]
    );

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
      [handleSubmit, isLoading]
    );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);

        // Auto-resize textarea
        e.target.style.height = "60px";
        const newHeight = Math.min(e.target.scrollHeight, 200);
        e.target.style.height = `${newHeight}px`;
      },
      []
    );

    const handleStarterPrompt = useCallback(
      (prompt: string) => {
        handleSubmit(prompt);
      },
      [handleSubmit]
    );

    const handleClearChat = useCallback(() => {
      if (messages.length <= 1) return;

      const newInitialMessage = getInitialMessage(getTutorById(tutorId));
      setMessages([newInitialMessage]);
      setInput("");

      // Clear localStorage for this tutor
      const savedMessagesKey = `tutor-messages-${tutorId}`;
      localStorage.removeItem(savedMessagesKey);

      toast.success("Chat cleared");
    }, [messages.length, tutorId]);

    // Keyboard shortcut for clearing chat (Cmd/Ctrl + K)
    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
          e.preventDefault();
          handleClearChat();
        }
      };

      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }, [handleClearChat]);

    return (
      <div className="flex flex-col h-[85vh] lg:h-[calc(100vh-16rem)] max-h-[700px] lg:max-h-none max-w-4xl mx-auto border-2 border-primary/20 rounded-2xl bg-card shadow-xl shadow-primary/10 overflow-hidden">
        {/* Header */}
        <div
          className="flex items-center justify-between gap-3 p-3 border-b shrink-0"
          style={{
            borderColor: `${tutor.color.primary}40`,
            background: `linear-gradient(to right, ${tutor.color.primary}10, ${tutor.color.primary}05, ${tutor.color.secondary}10)`,
          }}
        >
          <div className="flex items-center gap-3">
            <AnimatedTutor tutor={tutor} animationState="idle" size="medium" />
            <div>
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                {tutor.name} <span className="text-xl">{tutor.emoji}</span>
              </h2>
              <p className="text-xs text-muted-foreground font-medium">
                Your {tutor.subject} Tutor
              </p>
            </div>
          </div>
          {messages.length > 1 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearChat}
              className="h-8 px-3 text-xs hover:bg-destructive/10 hover:text-destructive"
              aria-label="Clear chat"
            >
              <Trash2 className="h-3.5 w-3.5 mr-1.5" />
              Clear
            </Button>
          )}
        </div>

        {/* Messages */}
        <ScrollArea
          className="flex-1 p-3 overflow-y-auto overflow-x-hidden"
          ref={scrollAreaRef}
        >
          <div className="space-y-4 min-h-full">
            {messages.map((message) => (
              <Message
                key={message.id}
                id={message.id}
                role={message.role}
                content={message.content}
                timestamp={message.timestamp}
                tutor={tutor}
              />
            ))}

            {isLoading && (
              <div
                className="flex gap-3 p-4 rounded-xl border animate-in fade-in slide-in-from-bottom-2 duration-300"
                style={{
                  background: `linear-gradient(to bottom right, ${tutor.color.primary}05, ${tutor.color.primary}03, transparent)`,
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
                  <p className="text-sm font-bold text-foreground">
                    {tutor.emoji} {tutor.name}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <span className="animate-pulse">●</span>
                    <span className="animate-pulse delay-100">●</span>
                    <span className="animate-pulse delay-200">●</span>
                    <span className="ml-1">Thinking...</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Starter Prompts - Show only when no user messages yet */}
          {messages.length === 1 && !isLoading && (
            <div className="mt-4 space-y-2 pb-2 px-1">
              <p className="text-sm font-bold text-foreground flex items-center gap-2">
                <Sparkles
                  className="h-4 w-4"
                  style={{ color: tutor.color.primary }}
                />
                Try asking:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {STARTER_PROMPTS[tutorId].map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleStarterPrompt(prompt)}
                    tabIndex={0}
                    aria-label={`Ask: ${prompt}`}
                    className="text-left p-3 rounded-xl border-2 bg-gradient-to-br to-transparent transition-all text-sm font-medium hover:shadow-md focus:outline-none focus:ring-2"
                    style={{
                      borderColor: `${tutor.color.primary}40`,
                      background: `linear-gradient(to bottom right, ${tutor.color.primary}05, transparent)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${tutor.color.primary}60`;
                      e.currentTarget.style.background = `linear-gradient(to bottom right, ${tutor.color.primary}10, transparent)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${tutor.color.primary}40`;
                      e.currentTarget.style.background = `linear-gradient(to bottom right, ${tutor.color.primary}05, transparent)`;
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </ScrollArea>

        {/* Input Area */}
        <div
          className="p-3 border-t shrink-0"
          style={{
            borderColor: `${tutor.color.primary}40`,
            background: `linear-gradient(to right, ${tutor.color.primary}05, transparent, ${tutor.color.secondary}05)`,
          }}
        >
          <div className="flex gap-2">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={`Ask me about ${tutor.subject.toLowerCase()}... ${
                tutor.emoji
              }`}
              className="min-h-[60px] max-h-[200px] resize-none rounded-xl"
              style={{
                borderColor: `${tutor.color.primary}40`,
              }}
              disabled={isLoading}
              aria-label="Chat message input"
            />
            <Button
              onClick={() => handleSubmit()}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="h-[60px] w-[60px] shrink-0 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: `linear-gradient(to bottom right, ${tutor.color.primary}, ${tutor.color.secondary})`,
                boxShadow: `0 4px 6px ${tutor.color.primary}40`,
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
          <p className="text-xs text-muted-foreground mt-2 flex items-center gap-2 flex-wrap">
            <span className="font-medium">💡 Tip:</span>
            <span>Enter to send, Shift+Enter for new line</span>
            {messages.length > 1 && (
              <span className="hidden sm:inline">• Cmd/Ctrl+K to clear</span>
            )}
            {isLoading && <span>• Esc to cancel</span>}
          </p>
        </div>
      </div>
    );
  }
);

ChatInterface.displayName = "ChatInterface";
