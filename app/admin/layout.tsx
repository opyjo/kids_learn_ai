import type { Metadata } from "next";
import { AdminLayoutShell } from "@/components/admin/admin-layout-shell";
import { requireAdmin } from "@/lib/auth-helpers";
import { privateMetadata } from "@/lib/seo";

export const metadata: Metadata = privateMetadata;

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Secure the entire admin section
	await requireAdmin();

	return <AdminLayoutShell>{children}</AdminLayoutShell>;
}
