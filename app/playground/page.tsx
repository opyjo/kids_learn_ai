"use client";

import { PythonEditor } from "@/components/code/python-editor";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";

export default function PlaygroundPage() {
  const starterCode = `# Welcome to the Python Playground!
# Try writing some Python code here

print("Hello, Python Playground!")

# Try some math
result = 5 + 3
print(f"5 + 3 = {result}")

# Create a list
colors = ["red", "blue", "green"]
print("My favorite colors:")
for color in colors:
    print(f"- {color}")
`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SiteHeader />

      <div className="container mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Python Playground
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Experiment with Python code in a safe environment. Try new ideas and
            practice what you've learned!
          </p>
        </div>

        {/* Tips Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">💡 Playground Tips</CardTitle>
            <CardDescription>
              Make the most of your coding practice
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Keyboard Shortcuts:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>
                    <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">
                      Ctrl+Enter
                    </kbd>{" "}
                    - Run code
                  </li>
                  <li>
                    <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">
                      Tab
                    </kbd>{" "}
                    - Indent code
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Try These Ideas:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Create fun math calculations</li>
                  <li>• Make lists of your favorite things</li>
                  <li>• Write loops to repeat actions</li>
                  <li>• Practice with variables and functions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Python Editor */}
        <PythonEditor
          initialCode={starterCode}
          onCodeChange={(code) => {
            // Save code to localStorage for persistence
            localStorage.setItem("playground-code", code);
          }}
          onRunComplete={(output, isSuccess) => {
            console.log("[v0] Playground execution:", { output, isSuccess });
          }}
        />
      </div>
    </div>
  );
}
