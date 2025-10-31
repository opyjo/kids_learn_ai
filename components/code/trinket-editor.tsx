"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Copy, Check, Code2, Play } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface TrinketEditorProps {
  initialCode?: string;
  className?: string;
}

export function TrinketEditor({
  initialCode = "",
  className,
}: Readonly<TrinketEditorProps>) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(initialCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenTrinket = () => {
    window.open("https://trinket.io/python", "_blank", "noopener,noreferrer");
  };

  return (
    <Card className={`flex flex-col ${className}`}>
      <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
        {/* Footer Info */}
        <div className="p-3 bg-gray-950 border-t border-gray-800">
          <p className="text-xs text-gray-400 text-center">
            💡 Tip: Save your Trinket.io projects to share with friends and
            teachers!
          </p>
        </div>

        {/* Starter Code Section */}
        {initialCode ? (
          <>
            <div className="p-3 bg-gray-50 dark:bg-gray-900/50 border-b">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <Code2 className="h-4 w-4" />
                  Starter Code:
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleOpenTrinket}
                    className="rounded-full text-xs h-7"
                    aria-label="Open Trinket.io in new tab"
                  >
                    <ExternalLink className="h-3 w-3 mr-1.5" />
                    Open Trinket.io
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyCode}
                    className="rounded-full text-xs h-7"
                    aria-label={copied ? "Code copied!" : "Copy code"}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 mr-1.5 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-1.5" />
                        Copy Code
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-900 text-gray-100 flex-1 overflow-hidden min-h-[300px]">
              <div className="p-4 h-full overflow-auto">
                <SyntaxHighlighter
                  language="python"
                  style={vscDarkPlus as any}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    background: "transparent",
                    fontSize: "0.875rem",
                    lineHeight: "1.6",
                  }}
                  PreTag="div"
                >
                  {initialCode}
                </SyntaxHighlighter>
              </div>
            </div>
            <Separator />
          </>
        ) : (
          <div className="flex items-center justify-center h-[200px] text-gray-500 border-b">
            <div className="text-center">
              <Code2 className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No starter code provided</p>
            </div>
          </div>
        )}

        {/* Instructions - Below Starter Code */}
        <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border-b">
          <div className="space-y-3">
            <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Play className="h-4 w-4" />
              Quick Start Guide:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Copy the starter code above (click the "Copy Code" button)
              </li>
              <li>
                Click the "Open Trinket.io" button above to open it in a new tab
              </li>
              <li>Paste the code into the Trinket.io editor</li>
              <li>Click "Run" to execute your code</li>
              <li>Experiment, modify, and have fun!</li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
