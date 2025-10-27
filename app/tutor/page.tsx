"use client";

import { ChatInterface } from "@/components/chat/chat-interface";
import { MainLayout } from "@/components/layouts/main-layout";
import { PythonEditor } from "@/components/code/python-editor";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, MessageSquare, GripVertical } from "lucide-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const TutorPage = () => {
  const [code, setCode] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const chatInterfaceRef = useRef<{
    sendMessage: (message: string) => void;
  } | null>(null);

  // Load saved code from localStorage on mount
  useEffect(() => {
    const savedCode = localStorage.getItem("tutor-playground-code");
    if (savedCode) {
      setCode(savedCode);
    } else {
      // Set default starter code
      const starterCode = `# Welcome to the Python Playground!
# Write your code here and test it alongside BrightByte 🐍

print("Hello, BrightByte!")

# Try some Python basics
name = "Coder"
print(f"Happy coding, {name}!")
`;
      setCode(starterCode);
    }
  }, []);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    localStorage.setItem("tutor-playground-code", newCode);
  };

  const handleAskAboutCode = () => {
    if (chatInterfaceRef.current && code.trim()) {
      const message = `Can you help me with this code?\n\n\`\`\`python\n${code}\n\`\`\``;
      chatInterfaceRef.current.sendMessage(message);
    }
  };

  const handleToggleEditor = () => {
    setShowEditor(!showEditor);
  };

  return (
    <MainLayout>
      <div className="mx-auto w-full min-h-[calc(100vh-5rem)] px-4 py-6 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-6">
          <h1 className="mb-2 text-3xl font-bold sm:text-4xl">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Meet BrightByte 🐍
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground sm:text-base">
            Your personal Python programming tutor with an integrated
            playground! Ask questions, get help debugging, and test your code
            all in one place.
          </p>
        </div>

        {/* Toggle Editor Button */}
        <div className="flex justify-center gap-2 mb-4">
          <Button
            variant={showEditor ? "default" : "outline"}
            size="sm"
            onClick={handleToggleEditor}
            className="rounded-full"
          >
            <Code2 className="h-4 w-4 mr-2" />
            {showEditor ? "Hide" : "Show"} Code Playground
          </Button>
        </div>

        {/* Layout - Without Editor (Mobile) */}
        {!showEditor && (
          <div className="lg:hidden max-w-4xl mx-auto">
            <div className="mb-3">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                AI Tutor Chat
              </h2>
              <p className="text-sm text-muted-foreground">
                Ask BrightByte for help with your Python code
              </p>
            </div>
            <ChatInterface ref={chatInterfaceRef} />
          </div>
        )}

        {/* Layout - With Editor (Mobile - stacked) */}
        {showEditor && (
          <div className="lg:hidden max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {/* AI Tutor Section */}
              <div className="flex flex-col">
                <div className="mb-3">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    AI Tutor Chat
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Ask BrightByte for help with your Python code
                  </p>
                </div>
                <ChatInterface ref={chatInterfaceRef} />
              </div>

              {/* Python Playground Section */}
              <div className="flex flex-col">
                <div className="mb-3">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    Python Playground
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Test and experiment with Python code in real-time
                  </p>
                </div>

                <PythonEditor
                  initialCode={code}
                  onCodeChange={handleCodeChange}
                  onRunComplete={(output, isSuccess) => {
                    console.log("Code execution:", { output, isSuccess });
                  }}
                  onAskAboutCode={handleAskAboutCode}
                  className="h-full"
                />

                {/* Quick Tips Card */}
                <Card className="mt-4">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      💡 Quick Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-muted-foreground space-y-1">
                    <p>
                      • Use{" "}
                      <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                        Ctrl+Enter
                      </kbd>{" "}
                      to run code
                    </p>
                    <p>• Ask BrightByte for help with any errors</p>
                    <p>• Copy code from the chat and test it here</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Layout - Without Editor (Desktop) */}
        {!showEditor && (
          <div className="hidden lg:block max-w-4xl mx-auto">
            <div className="mb-3">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                AI Tutor Chat
              </h2>
              <p className="text-sm text-muted-foreground">
                Ask BrightByte for help with your Python code
              </p>
            </div>
            <ChatInterface ref={chatInterfaceRef} />
          </div>
        )}

        {/* Layout - With Editor (Desktop - resizable) */}
        {showEditor && (
          <div className="hidden lg:block max-w-[1600px] mx-auto">
            <PanelGroup
              direction="horizontal"
              className="min-h-[calc(100vh-16rem)]"
            >
              {/* AI Tutor Panel */}
              <Panel defaultSize={50} minSize={30} id="chat-panel">
                <div className="flex flex-col h-full pr-3">
                  <div className="mb-3">
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      AI Tutor Chat
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Ask BrightByte for help with your Python code
                    </p>
                  </div>
                  <ChatInterface ref={chatInterfaceRef} />
                </div>
              </Panel>

              {/* Resize Handle */}
              <PanelResizeHandle className="w-2 relative group">
                <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-border group-hover:bg-primary transition-colors" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border-2 border-border group-hover:border-primary rounded-full p-1 transition-colors">
                  <GripVertical className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </div>
              </PanelResizeHandle>

              {/* Python Playground Panel */}
              <Panel defaultSize={50} minSize={30} id="editor-panel">
                <div className="flex flex-col h-full pl-3">
                  <div className="mb-3">
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      Python Playground
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Test and experiment with Python code in real-time
                    </p>
                  </div>

                  <PythonEditor
                    initialCode={code}
                    onCodeChange={handleCodeChange}
                    onRunComplete={(output, isSuccess) => {
                      console.log("Code execution:", { output, isSuccess });
                    }}
                    onAskAboutCode={handleAskAboutCode}
                    className="h-full flex-1"
                  />

                  {/* Quick Tips Card */}
                  <Card className="mt-4">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        💡 Quick Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground space-y-1">
                      <p>
                        • Use{" "}
                        <kbd className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                          Ctrl+Enter
                        </kbd>{" "}
                        to run code
                      </p>
                      <p>• Drag the center divider to resize panels</p>
                      <p>
                        • Click{" "}
                        <span className="font-semibold text-primary">
                          Ask BrightByte
                        </span>{" "}
                        to get help
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </Panel>
            </PanelGroup>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TutorPage;
