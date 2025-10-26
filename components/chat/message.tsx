"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { MessageContent } from "./message-content";

interface MessageProps {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export const Message = memo(
  ({ id, role, content, timestamp }: MessageProps) => {
    const isAssistant = role === "assistant";

    return (
      <div
        className={cn(
          "flex gap-3 p-4 rounded-xl transition-all relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-300",
          isAssistant
            ? "bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/10"
            : "bg-gradient-to-br from-secondary/30 to-transparent border border-secondary/20"
        )}
      >
        <Avatar
          className={cn(
            "h-9 w-9 shrink-0 shadow-sm",
            isAssistant
              ? "bg-gradient-to-br from-primary to-primary/80 ring-2 ring-primary/20"
              : "bg-gradient-to-br from-accent to-accent/80 ring-2 ring-accent/20"
          )}
        >
          <AvatarFallback className="bg-transparent">
            {isAssistant ? (
              <Bot className="h-5 w-5 text-primary-foreground" />
            ) : (
              <User className="h-5 w-5 text-accent-foreground" />
            )}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2 overflow-hidden min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-bold text-foreground">
              {isAssistant ? "🐍 BrightByte" : "You"}
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
      prevProps.timestamp === nextProps.timestamp
    );
  }
);

Message.displayName = "Message";
