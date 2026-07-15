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

const LEGACY_STORAGE_KEY = "playground-code";
const EDITOR_STORAGE_KEY = "playground"; // PythonEditor persists under kla:code:v1:playground

export default function PlaygroundPage() {
	// Persistence lives in PythonEditor now (storageKey prop). We only migrate
	// code saved under the legacy key, and hold the editor's render until the
	// migration ran so its restore effect sees the migrated value.
	const [ready, setReady] = useState(false);

	useEffect(() => {
		try {
			const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
			const newKey = `kla:code:v1:${EDITOR_STORAGE_KEY}`;
			if (legacy?.trim() && localStorage.getItem(newKey) === null) {
				localStorage.setItem(newKey, legacy);
			}
			localStorage.removeItem(LEGACY_STORAGE_KEY);
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
							initialCode={STARTER_CODE}
							storageKey={EDITOR_STORAGE_KEY}
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
