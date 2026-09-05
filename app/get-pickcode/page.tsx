import type { Metadata } from "next";
import Link from "next/link";
import { MainLayout } from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { publicMetadata } from "@/lib/seo";

export const metadata: Metadata = publicMetadata({
	title: "Get Started with Pickcode — Kids Learn AI",
	description:
		"Set up a free Pickcode account, create a Python project, run your code, and share a View Code link for Kids Learn AI assignments.",
	path: "/get-pickcode",
});

const steps = [
	{
		title: "Create a free account",
		description:
			"Open Pickcode and sign up with Google or a username and password. Ask a parent or guardian to help when required.",
	},
	{
		title: "Create a Python project",
		description:
			"Choose Python Console for text programs or Python Graphics when a lesson uses Turtle, Pygame, or another visual library.",
	},
	{
		title: "Add the lesson code",
		description:
			"Copy the starter code from Kids Learn AI, paste it into main.py, and press the green Play button.",
	},
	{
		title: "Share your work",
		description:
			"Choose Share → Anyone with link → View Code. Copy the project link beginning with app.pickcode.io/project/ and submit it in the lesson.",
	},
] as const;

export default function GetPickcodePage() {
	return (
		<MainLayout>
			<main className="min-h-screen bg-gradient-to-br from-sky-500/5 via-indigo-500/5 to-emerald-500/5">
				<div className="container mx-auto max-w-5xl px-4 py-12">
					<section className="mb-12 text-center">
						<div className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-800 dark:bg-sky-950 dark:text-sky-200">
							Browser-based coding
						</div>
						<h1 className="mb-4 text-4xl font-bold text-balance sm:text-5xl">
							Get Started with Pickcode
						</h1>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
							Write, run, save, and share Python projects from your browser. No
							software installation is required.
						</p>
						<div className="mt-7 flex flex-wrap justify-center gap-3">
							<Button asChild size="lg">
								<a
									href="https://app.pickcode.io/login?signup=true"
									target="_blank"
									rel="noopener noreferrer"
								>
									Create a free Pickcode account
								</a>
							</Button>
							<Button asChild size="lg" variant="outline">
								<a
									href="https://help.pickcode.io/docs/using-code-editor/getting-started"
									target="_blank"
									rel="noopener noreferrer"
								>
									Open Pickcode help
								</a>
							</Button>
						</div>
					</section>

					<Card className="mb-10 border-sky-200 bg-sky-50/70 dark:border-sky-900 dark:bg-sky-950/30">
						<CardHeader>
							<CardTitle>Why Kids Learn AI uses Pickcode</CardTitle>
						</CardHeader>
						<CardContent className="grid gap-4 sm:grid-cols-3">
							<div className="rounded-xl bg-background p-4">
								<p className="mb-1 font-semibold">Works anywhere</p>
								<p className="text-sm text-muted-foreground">
									Open the same saved project from home, school, or the library.
								</p>
							</div>
							<div className="rounded-xl bg-background p-4">
								<p className="mb-1 font-semibold">Real Python input</p>
								<p className="text-sm text-muted-foreground">
									Console programs support input(), files, charts, and standard
									Python libraries.
								</p>
							</div>
							<div className="rounded-xl bg-background p-4">
								<p className="mb-1 font-semibold">Creative graphics</p>
								<p className="text-sm text-muted-foreground">
									Graphics projects support Turtle, Pygame, Tkinter, and other
									visual tools used in our curriculum.
								</p>
							</div>
						</CardContent>
					</Card>

					<section className="mb-10">
						<h2 className="mb-6 text-center text-3xl font-bold">
							Set up in four steps
						</h2>
						<div className="grid gap-4 md:grid-cols-2">
							{steps.map((step, index) => (
								<Card key={step.title}>
									<CardContent className="flex gap-4 p-6">
										<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
											{index + 1}
										</div>
										<div>
											<h3 className="mb-2 text-lg font-semibold">
												{step.title}
											</h3>
											<p className="text-sm leading-relaxed text-muted-foreground">
												{step.description}
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<Card className="mb-10 border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/30">
						<CardHeader>
							<CardTitle>Use the correct submission link</CardTitle>
						</CardHeader>
						<CardContent className="space-y-3 text-sm">
							<p>
								Submit the <strong>View Code project link</strong>, not the
								output-only share page. The correct link looks like:
							</p>
							<code className="block overflow-x-auto rounded-lg bg-background p-3">
								https://app.pickcode.io/project/your-project-id
							</code>
							<p className="text-muted-foreground">
								Keep projects private unless a lesson asks you to share them,
								and never place personal information inside your code or project
								title.
							</p>
						</CardContent>
					</Card>

					<Card className="bg-gradient-to-br from-sky-600 to-indigo-700 text-white">
						<CardContent className="p-8 text-center">
							<h2 className="mb-3 text-3xl font-bold">Ready to code?</h2>
							<p className="mx-auto mb-6 max-w-2xl text-sky-50">
								Create your Pickcode account, then return to your lesson and
								copy the starter code into a new project.
							</p>
							<div className="flex flex-wrap justify-center gap-3">
								<Button
									asChild
									size="lg"
									className="bg-white text-sky-700 hover:bg-sky-50"
								>
									<a
										href="https://app.pickcode.io/home"
										target="_blank"
										rel="noopener noreferrer"
									>
										Open Pickcode
									</a>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
								>
									<Link href="/lessons">Browse lessons</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</MainLayout>
	);
}
