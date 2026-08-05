import { redirect } from "next/navigation";
import { ParentConsentForm } from "@/components/auth/parent-consent-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { requireAuth } from "@/lib/auth-helpers";
import { hasCurrentParentAccountConsent } from "@/lib/legal/consent-server";
import { privateMetadata } from "@/lib/seo";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const metadata = privateMetadata;

type ParentConsentPageProps = {
	searchParams: Promise<{ next?: string }>;
};

function safeFamilyPath(value: string | undefined) {
	return value === "/family/setup" || value === "/family" ? value : "/family";
}

export default async function ParentConsentPage({
	searchParams,
}: ParentConsentPageProps) {
	const user = await requireAuth();
	const supabase = await getSupabaseServerClient();
	const { data: profile } = await supabase
		.from("profiles")
		.select("role")
		.eq("id", user.id)
		.single();
	if (profile?.role !== "parent") redirect("/dashboard");

	const params = await searchParams;
	const nextPath = safeFamilyPath(params.next);
	if (
		await hasCurrentParentAccountConsent(
			user.id,
			getSupabaseAdminClient() || undefined,
		)
	) {
		redirect(nextPath);
	}

	return (
		<main className="min-h-screen bg-muted/30 px-4 py-12">
			<Card className="mx-auto max-w-xl">
				<CardHeader>
					<CardTitle>Confirm your parent account</CardTitle>
					<CardDescription>
						Before creating or managing a child account, confirm your role and
						review the current legal documents.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ParentConsentForm nextPath={nextPath} />
				</CardContent>
			</Card>
		</main>
	);
}
