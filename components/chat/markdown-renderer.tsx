"use client";

import { memo, type ReactNode } from "react";

interface MarkdownRendererProps {
  text: string;
  keyPrefix: string;
}

const inlinePattern =
  /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*|\[(.+?)\]\((https?:\/\/[^\s)]+)\))/g;

const renderInline = (text: string, keyPrefix: string): ReactNode[] => {
  const result: ReactNode[] = [];
  let lastIndex = 0;
  let matchIndex = 0;

  const regex = new RegExp(inlinePattern);
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith("**") && token.endsWith("**")) {
      result.push(
        <strong key={`${keyPrefix}-strong-${matchIndex}`}>
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("`") && token.endsWith("`")) {
      result.push(
        <code
          key={`${keyPrefix}-code-${matchIndex}`}
          className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      result.push(
        <em key={`${keyPrefix}-em-${matchIndex}`}>{token.slice(1, -1)}</em>
      );
    } else if (token.startsWith("[")) {
      const label = match[2] ?? token;
      const url = match[3] ?? "#";
      result.push(
        <a
          key={`${keyPrefix}-link-${matchIndex}`}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          {label}
        </a>
      );
    } else {
      result.push(token);
    }

    lastIndex = match.index + token.length;
    matchIndex += 1;
  }

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
};

export const MarkdownRenderer = memo(
  ({ text, keyPrefix }: MarkdownRendererProps) => {
    const elements: ReactNode[] = [];
    const lines = text.replace(/\r\n/g, "\n").split("\n");

    let paragraphBuffer: string[] = [];
    let listBuffer: {
      type: "ul" | "ol";
      items: string[];
      start?: number;
    } | null = null;

    const flushParagraph = () => {
      if (!paragraphBuffer.length) return;

      const paragraphKey = `${keyPrefix}-paragraph-${elements.length}`;
      elements.push(
        <p key={paragraphKey} className="text-foreground">
          {paragraphBuffer.map((line, index) => {
            const inlineKey = `${paragraphKey}-line-${index}`;
            return (
              <span key={inlineKey}>
                {renderInline(line, inlineKey)}
                {index < paragraphBuffer.length - 1 ? (
                  <br key={`${inlineKey}-br`} />
                ) : null}
              </span>
            );
          })}
        </p>
      );

      paragraphBuffer = [];
    };

    const flushList = () => {
      if (!listBuffer) return;

      const listKey = `${keyPrefix}-list-${elements.length}`;
      const ListTag = listBuffer.type === "ol" ? "ol" : "ul";
      const listClass =
        listBuffer.type === "ol"
          ? "list-decimal pl-6 space-y-1 text-foreground"
          : "list-disc pl-5 space-y-1 text-foreground";

      elements.push(
        <ListTag
          key={listKey}
          className={listClass}
          {...(listBuffer.type === "ol" && listBuffer.start
            ? { start: listBuffer.start }
            : {})}
        >
          {listBuffer.items.map((item, index) => {
            const itemKey = `${listKey}-item-${index}`;
            return (
              <li key={itemKey} className="leading-relaxed">
                {renderInline(item, itemKey)}
              </li>
            );
          })}
        </ListTag>
      );

      listBuffer = null;
    };

    for (const line of lines) {
      const trimmedLine = line.trim();

      const headingMatch = trimmedLine.match(/^(#{1,3})\s+(.*)/);
      if (headingMatch) {
        flushParagraph();
        flushList();

        const headingDepth = headingMatch[1].length;
        const headingContent = headingMatch[2];
        const headingKey = `${keyPrefix}-heading-${elements.length}`;

        const HeadingTag =
          headingDepth === 1 ? "h2" : headingDepth === 2 ? "h3" : "h4";
        const headingClass =
          headingDepth === 1
            ? "text-lg font-semibold text-foreground"
            : headingDepth === 2
            ? "text-base font-semibold text-foreground"
            : "text-base font-medium text-foreground";

        elements.push(
          <HeadingTag key={headingKey} className={headingClass}>
            {renderInline(headingContent, headingKey)}
          </HeadingTag>
        );

        continue;
      }

      const unorderedMatch = trimmedLine.match(/^[-*]\s+(.*)/);
      if (unorderedMatch) {
        flushParagraph();
        if (!listBuffer || listBuffer.type !== "ul") {
          flushList();
          listBuffer = { type: "ul", items: [] };
        }

        listBuffer.items.push(unorderedMatch[1]);
        continue;
      }

      const orderedMatch = trimmedLine.match(/^(\d+)\.\s+(.*)/);
      if (orderedMatch) {
        flushParagraph();
        const start = Number.parseInt(orderedMatch[1], 10);
        if (!listBuffer || listBuffer.type !== "ol") {
          flushList();
          listBuffer = { type: "ol", items: [], start };
        } else if (listBuffer.items.length === 0) {
          listBuffer.start = start;
        }

        listBuffer.items.push(orderedMatch[2]);
        continue;
      }

      if (!trimmedLine) {
        flushParagraph();
        flushList();
        continue;
      }

      paragraphBuffer.push(trimmedLine);
    }

    flushParagraph();
    flushList();

    return (
      <div key={keyPrefix} className="space-y-2">
        {elements}
      </div>
    );
  }
);

MarkdownRenderer.displayName = "MarkdownRenderer";
