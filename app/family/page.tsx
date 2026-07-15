import { CheckCircle2, KeyRound, Users } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { requireParent } from "@/lib/auth-helpers";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

export const metadata = { title: "My family — Kids Learn AI" };

type FamilyPageProps = {
	searchParams: Promise<{ setup?: string }>;
};

export default async function FamilyPage({ searchParams }: FamilyPageProps) {
	const parent = await requireParent();
	const params = await searchParams;
	const admin = getSupabaseAdminClient();

	const { data: children } = admin
		? await admin
				.from("profiles")
				.select("id, full_name, username")
				.eq("parent_id", parent.id)
				.eq("role", "student")
				.order("created_at", { ascending: true })
		: { data: [] };

	const childIds = (children || []).map((child) => child.id);
	const { data: enrollments } =
		admin && childIds.length
			? await admin
					.from("level_enrollments")
					.select("student_id, courses(title)")
					.in("student_id", childIds)
			: { data: [] };

	const coursesByChild = new Map<string, string[]>();
	for (const enrollment of enrollments || []) {
		const title = (enrollment.courses as unknown as { title?: string } | null)
			?.title;
		if (!title) continue;
		const titles = coursesByChild.get(enrollment.student_id) || [];
		titles.push(title);
		coursesByChild.set(enrollment.student_id, titles);
	}

	return (
		<div className="min-h-screen bg-muted/30">
			<SiteHeader />
			<main className="mx-auto max-w-5xl space-y-6 px-4 py-10">
				<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
					<div>
						<h1 className="text-3xl font-bold">My family</h1>
						<p className="mt-1 text-muted-foreground">
							Manage the child accounts connected to your email.
						</p>
					</div>
					<Button asChild>
						<Link href="/family/setup">
							<KeyRound className="mr-2 h-4 w-4" />
							Set or reset logins
						</Link>
					</Button>
				</div>

				{params.setup === "success" && (
					<Alert className="border-green-200 bg-green-50">
						<CheckCircle2 className="h-4 w-4 text-green-600" />
						<AlertDescription>
							The parent and student login details are ready.
						</AlertDescription>
					</Alert>
				)}

				{children?.length ? (
					<div className="grid gap-4 md:grid-cols-2">
						{children.map((child) => (
							<Card key={child.id}>
								<CardHeader>
									<CardTitle>{child.full_name || "Student"}</CardTitle>
									<CardDescription>
										Student username:{" "}
										<strong>{child.username || "Not set"}</strong>
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="mb-2 text-sm font-medium">Course access</p>
									<div className="flex flex-wrap gap-2">
										{(coursesByChild.get(child.id) || []).length ? (
											(coursesByChild.get(child.id) || []).map((title) => (
												<Badge key={title} variant="secondary">
													{title}
												</Badge>
											))
										) : (
											<span className="text-sm text-muted-foreground">
												No courses assigned yet
											</span>
										)}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				) : (
					<Card>
						<CardContent className="flex flex-col items-center py-12 text-center">
							<Users className="mb-4 h-10 w-10 text-muted-foreground" />
							<p className="font-medium">No children are linked yet</p>
							<p className="mt-1 text-sm text-muted-foreground">
								A child appears here after an administrator completes their
								enrolment.
							</p>
						</CardContent>
					</Card>
				)}
			</main>
		</div>
	);
}
