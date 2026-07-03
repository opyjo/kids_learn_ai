"use client";

import { useEffect, useState } from "react";
import { PythonEditor } from "@/components/code/python-editor";
import { SiteHeader } from "@/components/site-header";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const STARTER_CODE = `# Welcome to the Python Playground!
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

const STORAGE_KEY = "playground-code";

export default function PlaygroundPage() {
	// Restore the student's last session from localStorage. This runs after mount
	// (localStorage is unavailable during SSR); we hold the editor's render until
	// then so it mounts once with the correct initial code instead of flashing the
	// starter code and remounting.
	const [initialCode, setInitialCode] = useState(STARTER_CODE);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY);
			if (saved?.trim()) {
				setInitialCode(saved);
			}
		} catch {
			// Ignore storage access errors (private mode, disabled storage).
		}
		setReady(true);
	}, []);

	return (
		<div className="min-h-screen">
			<SiteHeader />

			<div className="max-w-6xl mx-auto px-4 py-6 flex flex-col min-h-[calc(100vh-200px)]">
				{/* Page Header */}
				<div className="mb-6">
					<h2 className="text-3xl font-bold text-foreground mb-2">
						Python Playground
					</h2>
					<p className="text-muted-foreground">
						Experiment with Python code in a safe environment. Try new ideas and
						practice what you've learned!
					</p>
				</div>

				{/* Python Editor */}
				<div className="flex-1 mb-6">
					{ready && (
						<PythonEditor
							initialCode={initialCode}
							onCodeChange={(code) => {
								// Save code to localStorage so work survives a reload.
								try {
									localStorage.setItem(STORAGE_KEY, code);
								} catch {
									// Ignore storage write errors (private mode / quota).
								}
							}}
						/>
					)}
				</div>

				{/* Tips Card */}
				<Card className="mt-auto">
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
								<ul className="space-y-1 text-muted-foreground">
									<li>
										<kbd className="px-1 py-0.5 bg-muted rounded text-xs">
											Ctrl+Enter
										</kbd>{" "}
										- Run code
									</li>
									<li>
										<kbd className="px-1 py-0.5 bg-muted rounded text-xs">
											Tab
										</kbd>{" "}
										- Indent code
									</li>
								</ul>
							</div>
							<div>
								<h4 className="font-medium mb-2">Try These Ideas:</h4>
								<ul className="space-y-1 text-muted-foreground">
									<li>• Create fun math calculations</li>
									<li>• Make lists of your favorite things</li>
									<li>• Write loops to repeat actions</li>
									<li>• Practice with variables and functions</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
