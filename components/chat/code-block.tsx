"use client";

import { memo, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import atomOneLight from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";
import { Copy, Check } from "lucide-react";
import { useTheme } from "next-themes";

// Register only the languages we need
SyntaxHighlighter.registerLanguage("python", python);

interface CodeBlockProps {
  code: string;
  language?: string | null;
}

export const CodeBlock = memo(({ code, language }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const normalizedLanguage =
    language?.trim().toLowerCase() === "python"
      ? "python"
      : language?.trim().toLowerCase() || "python";

  const displayLanguage =
    normalizedLanguage === "python" ? "Python" : normalizedLanguage;
  const isPython = normalizedLanguage === "python";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-3">
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-x border-border rounded-t-xl">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
          <span className="text-base">{isPython ? "🐍" : "📋"}</span>{" "}
          {displayLanguage}
        </span>
        <button
          onClick={handleCopy}
          aria-label={copied ? "Copied to clipboard" : "Copy code"}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-background/50 hover:bg-background border border-border/50 transition-all hover:scale-105 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-green-600" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="relative rounded-b-xl overflow-hidden border-x border-b border-border shadow-sm">
        <SyntaxHighlighter
          language={normalizedLanguage}
          style={(theme === "dark" ? atomOneDark : atomOneLight) as any}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.7",
            background:
              theme === "dark"
                ? "linear-gradient(to bottom right, rgb(15 23 42), rgb(23 37 84))"
                : "linear-gradient(to bottom right, rgb(248 250 252), rgb(239 246 255))",
          }}
          codeTagProps={{
            style: {
              fontFamily:
                'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
});

CodeBlock.displayName = "CodeBlock";
