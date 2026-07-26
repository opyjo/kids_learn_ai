import { KeyRound, Users } from "lucide-react";
import Link from "next/link";
import { ChildPasswordResetForm } from "@/components/family/child-password-reset-form";
import { FamilyLoginReady } from "@/components/family/family-login-ready";
import { ParentChecklist } from "@/components/family/parent-checklist";
import { SiteHeader } from "@/components/site-header";
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
	searchParams: Promise<{ setup?: string; child?: string }>;
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

	const hasChildLogin = Boolean(
		children?.length && children.every((child) => Boolean(child.username)),
	);
	const hasCourse = Boolean(enrollments?.length);
	const readyChild =
		params.setup === "success"
			? children?.find((child) => child.id === params.child) ||
				(children?.length === 1 ? children[0] : undefined)
			: undefined;

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

				{readyChild?.username && (
					<FamilyLoginReady username={readyChild.username} />
				)}

				<ParentChecklist hasChildLogin={hasChildLogin} hasCourse={hasCourse} />

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
							<p className="font-medium">Create your child&apos;s login</p>
							<p className="mt-1 text-sm text-muted-foreground">
								Add their name, a unique username, and a password. You can
								assign course access separately after the account is ready.
							</p>
							<Button asChild className="mt-4">
								<Link href="/family/setup">Start child setup</Link>
							</Button>
						</CardContent>
					</Card>
				)}

				{children?.length ? (
					<Card>
						<CardHeader>
							<CardTitle>Reset a child password</CardTitle>
							<CardDescription>
								Choose one of your linked children and set a new password.
								Passwords are never displayed or emailed.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ChildPasswordResetForm childOptions={children} />
						</CardContent>
					</Card>
				) : null}
			</main>
		</div>
	);
}
