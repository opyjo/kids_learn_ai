"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export type FamilySetupState = {
	error?: string;
} | null;

export async function setupChildAccount(
	_prevState: FamilySetupState,
	formData: FormData,
): Promise<FamilySetupState> {
	const childId = String(formData.get("childId") || "");
	const username = String(formData.get("username") || "")
		.trim()
		.toLowerCase();
	const childPassword = String(formData.get("childPassword") || "");
	const parentPassword = String(formData.get("parentPassword") || "");

	if (!childId || !username || !childPassword || !parentPassword) {
		return { error: "All fields are required" };
	}
	if (!/^[a-z0-9][a-z0-9_-]{2,29}$/.test(username)) {
		return {
			error:
				"Username must be 3–30 characters using lowercase letters, numbers, hyphens, or underscores",
		};
	}
	if (childPassword.length < 8 || parentPassword.length < 8) {
		return { error: "Both passwords must be at least 8 characters" };
	}
	if (childPassword === parentPassword) {
		return { error: "Use a different password for the child account" };
	}

	const supabase = await getSupabaseServerClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (!user) return { error: "Your invite has expired. Please sign in again." };

	const { data: parentProfile } = await supabase
		.from("profiles")
		.select("role")
		.eq("id", user.id)
		.single();
	if (parentProfile?.role !== "parent") {
		return { error: "Only a parent account can manage child logins" };
	}

	const admin = getSupabaseAdminClient();
	if (!admin) return { error: "Family account setup is not configured" };

	const [{ data: child }, { data: usernameOwner }] = await Promise.all([
		admin
			.from("profiles")
			.select("id, role")
			.eq("id", childId)
			.eq("parent_id", user.id)
			.maybeSingle(),
		admin
			.from("profiles")
			.select("id")
			.eq("username", username)
			.neq("id", childId)
			.maybeSingle(),
	]);

	if (!child || child.role !== "student") {
		return { error: "That child account does not belong to your family" };
	}
	if (usernameOwner) {
		return { error: "That username is already taken. Please choose another." };
	}

	const { error: usernameError } = await admin
		.from("profiles")
		.update({ username, updated_at: new Date().toISOString() })
		.eq("id", childId)
		.eq("parent_id", user.id);
	if (usernameError) {
		return { error: `Could not save the username: ${usernameError.message}` };
	}

	const { error: childPasswordError } = await admin.auth.admin.updateUserById(
		childId,
		{
			password: childPassword,
		},
	);
	if (childPasswordError) {
		return {
			error: `Could not set the child password: ${childPasswordError.message}`,
		};
	}

	const { error: parentPasswordError } = await supabase.auth.updateUser({
		password: parentPassword,
	});
	if (parentPasswordError) {
		return {
			error: `Child login saved, but the parent password could not be set: ${parentPasswordError.message}`,
		};
	}

	revalidatePath("/family");
	redirect("/family?setup=success");
}
