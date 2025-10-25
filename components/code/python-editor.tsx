"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface PythonEditorProps {
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  onRunComplete?: (output: string, isSuccess: boolean) => void;
  className?: string;
}

export function PythonEditor({
  initialCode = "",
  onCodeChange,
  onRunComplete,
  className,
}: PythonEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pyodideReady, setPyodideReady] = useState(false);
  const [error, setError] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    const initPyodide = async () => {
      try {
        // Use dynamic import with a script tag approach to avoid build-time issues
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
        script.async = true;

        script.onload = async () => {
          if (!mounted) return;

          try {
            // @ts-ignore - Pyodide will be available globally after script load
            const { loadPyodide } = window as any;

            const pyodide = await loadPyodide({
              indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
            });

            if (!mounted) return;

            pyodideRef.current = pyodide;
            setPyodideReady(true);
          } catch (err) {
            if (!mounted) return;
            setError("Failed to initialize Python environment");
            console.error("[v0] Pyodide initialization error:", err);
          }
        };

        script.onerror = () => {
          if (!mounted) return;
          setError("Failed to load Python environment");
        };

        document.head.appendChild(script);
      } catch (err) {
        if (!mounted) return;
        setError("Failed to initialize Python environment");
        console.error("[v0] Pyodide initialization error:", err);
      }
    };

    initPyodide();

    return () => {
      mounted = false;
    };
  }, []);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [code]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newValue = code.substring(0, start) + "    " + code.substring(end);
      handleCodeChange(newValue);

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart =
            textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }

    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleRunCode();
    }
  };

  const handleRunCode = async () => {
    if (!pyodideReady || !pyodideRef.current) {
      setOutput("Python environment is still loading...");
      return;
    }

    setIsRunning(true);
    setOutput("");
    setError("");
    setIsSuccess(false);

    try {
      // Capture stdout
      pyodideRef.current.runPython(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
      `);

      // Run the user's code
      pyodideRef.current.runPython(code);

      // Get the output
      const stdout = pyodideRef.current.runPython("sys.stdout.getvalue()");

      setOutput(stdout || "Code executed successfully (no output)");
      setIsSuccess(true);
      onRunComplete?.(stdout, true);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setOutput(`Error: ${errorMessage}`);
      setError(errorMessage);
      setIsSuccess(false);
      onRunComplete?.(errorMessage, false);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
    setError("");
    setIsSuccess(false);
    onCodeChange?.(initialCode);
  };

  const lineCount = code.split("\n").length;
  const lineNumberWidth = lineCount.toString().length * 8 + 16;

  return (
    <Card className={className}>
      <CardHeader className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold tracking-tight">
                Python Code Editor
              </span>
            </div>
            {!pyodideReady && (
              <Badge variant="outline" className="text-xs">
                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                Loading Python...
              </Badge>
            )}
            {pyodideReady && (
              <Badge
                variant="outline"
                className="text-xs bg-green-50 text-green-700"
              >
                Python Ready
              </Badge>
            )}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="rounded-full"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button
              onClick={handleRunCode}
              disabled={isRunning || !pyodideReady}
              className="rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600"
            >
              {isRunning ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Run Code
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Press{" "}
          <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">
            Ctrl+Enter
          </kbd>{" "}
          to run code
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Code Editor */}
        <div className="relative bg-gray-900 text-gray-100">
          {/* Line numbers */}
          <div
            className="absolute left-0 top-0 p-4 text-gray-500 font-mono text-sm pointer-events-none select-none border-r border-gray-700"
            style={{ width: lineNumberWidth }}
          >
            {code.split("\n").map((_, index) => (
              <div key={index} style={{ lineHeight: "1.5", height: "21px" }}>
                {index + 1}
              </div>
            ))}
          </div>

          {/* Code textarea */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-gray-100 font-mono text-sm resize-none border-0 outline-none focus:ring-0"
            placeholder="Write your Python code here..."
            spellCheck={false}
            style={{
              minHeight: "300px",
              lineHeight: "1.5",
              tabSize: 4,
              paddingLeft: lineNumberWidth + 16,
              paddingRight: "16px",
              paddingTop: "16px",
              paddingBottom: "16px",
            }}
          />
        </div>

        <Separator />

        {/* Output */}
        <div className="bg-gray-950 text-green-400 font-mono text-sm">
          <div className="flex items-center justify-between p-3 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Output:</span>
              {isSuccess && <CheckCircle className="h-4 w-4 text-green-400" />}
              {error && <AlertCircle className="h-4 w-4 text-red-400" />}
            </div>
            {output && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOutput("")}
                className="text-gray-400 hover:text-white h-6 px-2 rounded-full"
              >
                Clear
              </Button>
            )}
          </div>
          <div className="p-4 min-h-[120px] max-h-[300px] overflow-auto">
            {output ? (
              <pre className="whitespace-pre-wrap text-sm">
                {error ? (
                  <span className="text-red-400">{output}</span>
                ) : (
                  <span className="text-green-400">{output}</span>
                )}
              </pre>
            ) : (
              <span className="text-gray-500 italic">
                {pyodideReady
                  ? "Click 'Run Code' to see the output here..."
                  : "Loading Python environment..."}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
