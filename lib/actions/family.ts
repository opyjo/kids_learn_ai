"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export type FamilySetupState = {
	error?: string;
	success?: boolean;
	username?: string;
} | null;

const usernamePattern = /^[a-z0-9][a-z0-9_-]{2,29}$/;

export async function createChildAccount(
	_prevState: FamilySetupState,
	formData: FormData,
): Promise<FamilySetupState> {
	const childName = String(formData.get("childName") || "").trim();
	const username = String(formData.get("username") || "")
		.trim()
		.toLowerCase();
	const childPassword = String(formData.get("childPassword") || "");

	if (!childName || !username || !childPassword) {
		return { error: "All fields are required" };
	}
	if (childName.length > 100) {
		return { error: "Child name must be 100 characters or fewer" };
	}
	if (!usernamePattern.test(username)) {
		return {
			error:
				"Username must be 3–30 characters using lowercase letters, numbers, hyphens, or underscores",
		};
	}
	if (childPassword.length < 8) {
		return { error: "Child password must be at least 8 characters" };
	}

	const supabase = await getSupabaseServerClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (!user) return { error: "Please sign in as a parent to add a child." };

	const { data: parentProfile } = await supabase
		.from("profiles")
		.select("role")
		.eq("id", user.id)
		.single();
	if (parentProfile?.role !== "parent") {
		return { error: "Only a parent account can add a child" };
	}

	const admin = getSupabaseAdminClient();
	if (!admin) return { error: "Family account setup is not configured" };

	const { data: usernameOwner } = await admin
		.from("profiles")
		.select("id")
		.eq("username", username)
		.maybeSingle();
	if (usernameOwner) {
		return { error: "That username is already taken. Please choose another." };
	}

	const internalEmail = `student-${randomUUID()}@accounts.kidslearnai.ca`;
	const { data: childAccount, error: childError } =
		await admin.auth.admin.createUser({
			email: internalEmail,
			password: childPassword,
			email_confirm: true,
			user_metadata: {
				full_name: childName,
			},
			app_metadata: {
				account_type: "student",
			},
		});

	if (childError || !childAccount.user) {
		return {
			error: childError?.message || "Could not create the child account",
		};
	}

	const { data: linkedProfile, error: linkError } = await admin
		.from("profiles")
		.update({
			parent_id: user.id,
			username,
			updated_at: new Date().toISOString(),
		})
		.eq("id", childAccount.user.id)
		.eq("role", "student")
		.select("id")
		.single();

	if (linkError || !linkedProfile) {
		await admin.auth.admin.deleteUser(childAccount.user.id);
		if (linkError?.code === "23505") {
			return {
				error: "That username is already taken. Please choose another.",
			};
		}
		return {
			error: `Could not link the child account: ${
				linkError?.message || "student profile was not created"
			}`,
		};
	}

	revalidatePath("/family");
	revalidatePath("/family/setup");
	redirect(
		`/family?setup=success&child=${encodeURIComponent(childAccount.user.id)}`,
	);
}

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
	if (!usernamePattern.test(username)) {
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
	redirect(`/family?setup=success&child=${encodeURIComponent(childId)}`);
}

export async function resetChildPassword(
	_prevState: FamilySetupState,
	formData: FormData,
): Promise<FamilySetupState> {
	const childId = String(formData.get("childId") || "");
	const newPassword = String(formData.get("newPassword") || "");
	const confirmPassword = String(formData.get("confirmPassword") || "");

	if (!childId || !newPassword || !confirmPassword) {
		return { error: "Select a child and complete both password fields" };
	}
	if (newPassword !== confirmPassword) {
		return { error: "Passwords do not match" };
	}
	if (newPassword.length < 8) {
		return { error: "Child password must be at least 8 characters" };
	}

	const supabase = await getSupabaseServerClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (!user)
		return { error: "Please sign in as a parent to reset a password." };

	const { data: parentProfile } = await supabase
		.from("profiles")
		.select("role")
		.eq("id", user.id)
		.single();
	if (parentProfile?.role !== "parent") {
		return { error: "Only a parent account can reset child passwords" };
	}

	const admin = getSupabaseAdminClient();
	if (!admin) return { error: "Family account setup is not configured" };

	const { data: child } = await admin
		.from("profiles")
		.select("id, role, username")
		.eq("id", childId)
		.eq("parent_id", user.id)
		.eq("role", "student")
		.maybeSingle();

	if (!child || child.role !== "student") {
		return { error: "That child account does not belong to your family" };
	}
	if (!child.username) {
		return {
			error: "Set a username for this child before resetting their password",
		};
	}

	const { error: passwordError } = await admin.auth.admin.updateUserById(
		child.id,
		{ password: newPassword },
	);
	if (passwordError) {
		return { error: "Could not reset the child password. Please try again." };
	}

	revalidatePath("/family");
	return {
		success: true,
		username: child.username,
	};
}
