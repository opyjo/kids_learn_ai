import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Play, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";

const InteractiveCodeEditor = () => {
  const [code, setCode] = React.useState(
    'facts = ["You can solve any puzzle!", "AI needs your ideas! 💡"]\nfor fact in facts:\n    print("🤖 ", fact)'
  );
  const [output, setOutput] = React.useState("");
  const [isRunning, setIsRunning] = React.useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput("");

    setTimeout(() => {
      try {
        let result = "";
        const lines = code.split("\n");
        const variables: Record<string, any> = {};

        lines.forEach((line) => {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith("#")) return;

          if (trimmed.includes("=") && !trimmed.startsWith("print")) {
            const [varName, varValue] = trimmed.split("=").map((s) => s.trim());
            try {
              if (/^\d+$/.test(varValue)) {
                variables[varName] = Number.parseInt(varValue);
              } else if (/^\d+\s*[+\-*/]\s*\d+$/.test(varValue)) {
                variables[varName] = eval(varValue);
              } else {
                variables[varName] = varValue.replace(/['"]/g, "");
              }
            } catch {
              variables[varName] = varValue.replace(/['"]/g, "");
            }
          }

          if (trimmed.startsWith("print")) {
            const match = /print\s*\((.*?)\)/.exec(trimmed);
            if (match?.[1]) {
              const content = match[1].trim();
              if (variables[content] !== undefined) {
                result += variables[content] + "\n";
              } else if (
                (content.startsWith('"') && content.endsWith('"')) ||
                (content.startsWith("'") && content.endsWith("'"))
              ) {
                result += content.slice(1, -1) + "\n";
              } else if (/^\d+\s*[+\-*/]\s*\d+$/.test(content)) {
                result += eval(content) + "\n";
              } else {
                result += content + "\n";
              }
            }
          }
        });

        setOutput(result.trim() || "Code executed successfully!");
      } catch (error) {
        setOutput("Oops! There's a small error in your code. Try again!");
      }

      setIsRunning(false);
    }, 800);
  };

  const examples = [
    {
      label: "AI Cheer Squad",
      code: 'facts = ["You learn quick!", "Robots applaud you!"]\nprint("🤖 ", facts[0])',
    },
    {
      label: "Mood Meter",
      code: '# score a message\nword = "awesome"\nif word == "awesome":\n    print("Mood: 😀")\nelse:\n    print("Mood: 🤔")',
    },
    {
      label: "Idea Prompt",
      code: 'topic = "recycling"\nprompt = f"Suggest an AI project about {topic}."\nprint(prompt)',
    },
    {
      label: "Story Seed",
      code: 'print("Once upon a time, an AI and kid saved the day!")',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
            <Play className="w-4 h-4 inline mr-2" />
            Try It Now
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Write Python that Guides AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            No signup needed! Type the Python instructions below, click run,
            and watch how code turns into AI behavior.
          </p>
        </div>

        <Card className="border-2 border-primary/20 rounded-3xl overflow-hidden shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b-2 border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="font-mono text-sm text-muted-foreground">
                  code-playground.py
                </span>
              </div>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Interactive
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
              <div className="p-6">
                <div className="mb-4">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Code:
                  </label>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-48 p-4 bg-secondary/50 border-2 border-border rounded-xl font-mono text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Type your AI-friendly Python code here..."
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm text-muted-foreground">
                    Try these:
                  </span>
                  {examples.map((example) => (
                    <Button
                      key={example.label}
                      size="sm"
                      variant="outline"
                      className="rounded-full text-xs bg-transparent"
                      onClick={() => setCode(example.code)}
                    >
                      {example.label}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={runCode}
                  disabled={isRunning}
                  size="lg"
                  className="w-full rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                >
                  {isRunning ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-5 w-5" /> Run Code
                    </>
                  )}
                </Button>
              </div>

              <div className="p-6 bg-secondary/30">
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">
                    Output:
                  </label>
                  {output && (
                    <Badge variant="secondary" className="rounded-full">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Success
                    </Badge>
                  )}
                </div>
                <div className="h-48 p-4 bg-card border-2 border-border rounded-xl font-mono text-sm overflow-auto">
                  {output ? (
                    <div className="text-foreground whitespace-pre-wrap">
                      {output}
                    </div>
                  ) : (
                    <div className="text-muted-foreground italic">
                      Click "Run Code" to see your output here...
                      <div className="mt-4 text-xs">
                        <div>
                          <Sparkles className="inline h-3 w-3 mr-1" /> Tip: Try
                          changing the message inside the quotes!
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 p-4 bg-accent/10 border-2 border-accent/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground mb-1">
                        Ready to train bigger ideas?
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        This demo shows a tiny slice of KidsLearn AI. Unlock 60+
                        guided missions with safety tips, creative challenges,
                        and mentor feedback.
                      </p>
                      <Link href="/signup">
                        <Button size="sm" className="rounded-full">
                          Start Learning Free
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            This is a simplified demo. Our full platform has advanced features
            like debugging, hints, and more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCodeEditor;
