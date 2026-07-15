import { redirect } from "next/navigation";
import { ChildAccountSetupForm } from "@/components/family/child-account-setup-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { requireParent } from "@/lib/auth-helpers";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

export const metadata = { title: "Set up family logins — Kids Learn AI" };

export default async function FamilySetupPage() {
	const parent = await requireParent();
	const admin = getSupabaseAdminClient();
	if (!admin) {
		return <p className="p-8">Family account setup is not configured.</p>;
	}

	const { data: children } = await admin
		.from("profiles")
		.select("id, full_name, username")
		.eq("parent_id", parent.id)
		.eq("role", "student")
		.order("created_at", { ascending: true });

	if (!children?.length) redirect("/family");

	return (
		<main className="min-h-screen bg-muted/30 px-4 py-12">
			<div className="mx-auto max-w-xl space-y-6">
				<div>
					<h1 className="text-3xl font-bold">Set up your family logins</h1>
					<p className="mt-2 text-muted-foreground">
						Your email stays private. Each child signs in with their own
						username and password.
					</p>
				</div>

				{children.map((child) => (
					<Card key={child.id}>
						<CardHeader>
							<CardTitle>{child.full_name || "Student"}</CardTitle>
							<CardDescription>
								Create or reset this child&apos;s login details.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ChildAccountSetupForm
								childId={child.id}
								childName={child.full_name || "Student"}
								suggestedUsername={child.username || "student"}
							/>
						</CardContent>
					</Card>
				))}
			</div>
		</main>
	);
}
