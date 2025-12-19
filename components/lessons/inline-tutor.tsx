"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bot,
  Send,
  Loader2,
  Lightbulb,
  HelpCircle,
  Code,
  Sparkles,
  X,
} from "lucide-react";
import { MarkdownRenderer } from "@/components/chat/markdown-renderer";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface InlineTutorProps {
  lessonId: string;
  lessonTitle: string;
  lessonContent?: string;
  currentCode?: string;
}

const QUICK_PROMPTS = [
  {
    icon: HelpCircle,
    label: "Explain this concept",
    prompt: "Can you explain the main concept in this lesson in simple terms?",
  },
  {
    icon: Lightbulb,
    label: "Give me a hint",
    prompt: "I'm stuck. Can you give me a hint without giving the answer?",
  },
  {
    icon: Code,
    label: "Check my code",
    prompt: "Can you review my code and tell me if I'm on the right track?",
  },
  {
    icon: Sparkles,
    label: "What's next?",
    prompt: "What should I focus on learning next after this lesson?",
  },
];

export const InlineTutor = ({
  lessonTitle,
  lessonContent,
  currentCode,
}: InlineTutorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when sheet opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: messageContent };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Build context for the tutor
      const contextParts = [
        `The student is currently learning: "${lessonTitle}"`,
      ];

      if (lessonContent) {
        // Include a summary of the lesson content (truncated for API limits)
        const truncatedContent = lessonContent.slice(0, 2000);
        contextParts.push(`Lesson content summary: ${truncatedContent}`);
      }

      if (currentCode) {
        contextParts.push(
          `The student's current code:\n\`\`\`python\n${currentCode}\n\`\`\``
        );
      }

      const systemContext = contextParts.join("\n\n");

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          tutorId: "brightbyte", // Use BrightByte tutor
          context: systemContext,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.message ||
          "I'm sorry, I couldn't process that. Please try again!",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Oops! Something went wrong. Please try again in a moment. 🤖",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickPrompt = (prompt: string) => {
    sendMessage(prompt);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          <Bot className="h-4 w-4" />
          <span className="hidden sm:inline">Ask Tutor</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg p-0 flex flex-col">
        <SheetHeader className="p-4 border-b bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <SheetTitle className="text-white">BrightByte</SheetTitle>
                <SheetDescription className="text-white/80 text-xs">
                  Your AI Python Tutor
                </SheetDescription>
              </div>
            </div>
            {messages.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearChat}
                className="text-white/80 hover:text-white hover:bg-white/20"
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </SheetHeader>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          {messages.length === 0 ? (
            <div className="space-y-4">
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Bot className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Hi! I&apos;m here to help! 👋
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  Ask me anything about <strong>{lessonTitle}</strong>.
                  I&apos;ll guide you without giving away the answers!
                </p>
              </div>

              {/* Quick prompts */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground text-center font-medium">
                  Quick questions:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {QUICK_PROMPTS.map((prompt) => (
                    <Button
                      key={prompt.label}
                      variant="outline"
                      size="sm"
                      className="h-auto py-2 px-3 text-left justify-start"
                      onClick={() => handleQuickPrompt(prompt.prompt)}
                    >
                      <prompt.icon className="h-4 w-4 mr-2 shrink-0" />
                      <span className="text-xs">{prompt.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                      message.role === "user"
                        ? "bg-purple-600 text-white rounded-br-md"
                        : "bg-muted rounded-bl-md"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <MarkdownRenderer
                          text={message.content}
                          keyPrefix={`msg-${index}`}
                        />
                      </div>
                    ) : (
                      <p className="text-sm">{message.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm text-muted-foreground">
                        Thinking...
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t bg-background">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              size="icon"
              className="bg-purple-600 hover:bg-purple-700"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-2">
            I&apos;ll help you learn, not give you answers! 🎓
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};
