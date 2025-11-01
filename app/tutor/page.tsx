"use client";

import { ChatInterface } from "@/components/chat/chat-interface";
import { MainLayout } from "@/components/layouts/main-layout";
import { PythonEditor } from "@/components/code/python-editor";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, GripVertical, Lock } from "lucide-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TutorPage = () => {
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const router = useRouter();

  // Check if user has premium access
  useEffect(() => {
    const checkAccess = async () => {
      const supabase = getSupabaseBrowserClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setIsCheckingAccess(false);
        setHasAccess(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("subscription_status")
        .eq("id", user.id)
        .single();

      const isPremium = profile?.subscription_status === "premium";
      setHasAccess(isPremium);
      setIsCheckingAccess(false);
    };

    checkAccess();
  }, []);
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

  // Show loading state while checking access
  if (isCheckingAccess) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Show access denied message for free users
  if (!hasAccess) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4">
          <Card className="max-w-md w-full">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Premium Feature</h2>
              <p className="text-muted-foreground mb-6">
                The AI Tutor (BrightByte) is available exclusively to premium
                subscribers. Upgrade now to get unlimited access to your
                personal AI coding assistant!
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full" size="lg">
                  <Link href="/pricing">Upgrade to Premium</Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link href="/lessons">View Free Lessons</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto w-full min-h-[calc(100vh-5rem)] px-4 py-3 sm:px-6 lg:px-8">
        {/* Layout - Without Editor (Mobile) */}
        {!showEditor && (
          <div className="lg:hidden max-w-4xl mx-auto">
            <ChatInterface ref={chatInterfaceRef} />
            {/* Toggle Editor Button - below chat */}
            <div className="flex justify-center gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleToggleEditor}
                className="rounded-full"
              >
                <Code2 className="h-4 w-4 mr-2" />
                Show Code Playground
              </Button>
            </div>
          </div>
        )}

        {/* Layout - With Editor (Mobile - stacked) */}
        {showEditor && (
          <div className="lg:hidden max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {/* AI Tutor Section - at top */}
              <div className="flex flex-col">
                <ChatInterface ref={chatInterfaceRef} />
              </div>

              {/* Python Playground Section */}
              <div className="flex flex-col">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-primary" />
                      Python Playground
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Test and experiment with Python code in real-time
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleToggleEditor}
                    className="rounded-full shrink-0"
                  >
                    <Code2 className="h-4 w-4 mr-2" />
                    Hide
                  </Button>
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
            <ChatInterface ref={chatInterfaceRef} />
            {/* Toggle Editor Button - below chat */}
            <div className="flex justify-center gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleToggleEditor}
                className="rounded-full"
              >
                <Code2 className="h-4 w-4 mr-2" />
                Show Code Playground
              </Button>
            </div>
          </div>
        )}

        {/* Layout - With Editor (Desktop - resizable) */}
        {showEditor && (
          <div className="hidden lg:block max-w-[1600px] mx-auto">
            <PanelGroup
              direction="horizontal"
              className="min-h-[calc(100vh-12rem)]"
            >
              {/* AI Tutor Panel */}
              <Panel defaultSize={50} minSize={30} id="chat-panel">
                <div className="flex flex-col h-full pr-3">
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
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-primary" />
                        Python Playground
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Test and experiment with Python code in real-time
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleToggleEditor}
                      className="rounded-full shrink-0"
                    >
                      <Code2 className="h-4 w-4 mr-2" />
                      Hide
                    </Button>
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
