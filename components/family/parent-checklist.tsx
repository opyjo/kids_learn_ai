import { Check, Circle, LogIn, Rocket, UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

function StepIcon({ complete }: { complete: boolean }) {
	return complete ? (
		<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
			<Check className="h-4 w-4" aria-hidden="true" />
		</span>
	) : (
		<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
			<Circle className="h-3 w-3" aria-hidden="true" />
		</span>
	);
}

export function ParentChecklist({
	hasChildLogin,
	hasCourse,
}: {
	hasChildLogin: boolean;
	hasCourse: boolean;
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Parent checklist</CardTitle>
				<CardDescription>
					Three friendly steps from family setup to the first lesson.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ol className="space-y-5">
					<li className="flex gap-3">
						<StepIcon complete={hasChildLogin} />
						<div className="min-w-0 flex-1">
							<div className="flex items-center gap-2 font-medium">
								<UserRoundPlus className="h-4 w-4" aria-hidden="true" />
								Create each child&apos;s login
							</div>
							<p className="mt-1 text-sm text-muted-foreground">
								Choose a unique username and password for every child who will
								learn.
							</p>
							{!hasChildLogin && (
								<Button asChild size="sm" className="mt-3">
									<Link href="/family/setup">Create child login</Link>
								</Button>
							)}
						</div>
					</li>

					<li className="flex gap-3">
						<StepIcon complete={hasCourse} />
						<div className="min-w-0 flex-1">
							<div className="flex items-center gap-2 font-medium">
								<Rocket className="h-4 w-4" aria-hidden="true" />
								Choose, try, and enroll in a course
							</div>
							<p className="mt-1 text-sm text-muted-foreground">
								{hasCourse
									? "A course is assigned to your family."
									: "Explore the program or book a free trial. Account setup does not require payment."}
							</p>
							{!hasCourse && (
								<div className="mt-3 flex flex-wrap gap-2">
									<Button asChild size="sm">
										<Link href="/inquiry">Book a free trial</Link>
									</Button>
									<Button asChild size="sm" variant="outline">
										<Link href="/pricing">View courses and pricing</Link>
									</Button>
								</div>
							)}
						</div>
					</li>

					<li className="flex gap-3">
						<StepIcon complete={hasChildLogin && hasCourse} />
						<div className="min-w-0 flex-1">
							<div className="flex items-center gap-2 font-medium">
								<LogIn className="h-4 w-4" aria-hidden="true" />
								Have your child begin learning
							</div>
							<p className="mt-1 text-sm text-muted-foreground">
								Your child signs in with their username and child password, then
								opens their learning dashboard.
							</p>
						</div>
					</li>
				</ol>
			</CardContent>
		</Card>
	);
}
