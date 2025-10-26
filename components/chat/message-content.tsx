"use client";

import { memo, useMemo } from "react";
import { CodeBlock } from "./code-block";
import { MarkdownRenderer } from "./markdown-renderer";

interface MessageContentProps {
  content: string;
  role: "user" | "assistant";
}

export const MessageContent = memo(({ content, role }: MessageContentProps) => {
  const parsedContent = useMemo(() => {
    return content.split("```").map((part, partIndex) => {
      // Even indices are regular text, odd indices are code blocks
      if (partIndex % 2 === 0) {
        const normalizedText = part.replace(/^\n+|\n+$/g, "");
        return normalizedText ? (
          <MarkdownRenderer
            key={`text-${role}-${partIndex}`}
            text={normalizedText}
            keyPrefix={`text-${role}-${partIndex}`}
          />
        ) : null;
      } else {
        // Extract language if specified (e.g., ```python)
        const lines = part.split("\n");
        const potentialLanguage = lines[0]?.trim();
        const hasLanguage =
          lines.length > 1 && Boolean(potentialLanguage.length);
        const code = (hasLanguage ? lines.slice(1) : lines).join("\n").trim();
        const language = hasLanguage ? potentialLanguage : null;

        return (
          <CodeBlock
            key={`code-${role}-${partIndex}`}
            code={code}
            language={language}
          />
        );
      }
    });
  }, [content, role]);

  return (
    <div className="text-sm leading-relaxed break-words w-full space-y-4">
      {parsedContent}
    </div>
  );
});

MessageContent.displayName = "MessageContent";
