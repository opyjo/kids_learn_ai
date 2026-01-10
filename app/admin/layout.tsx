import { requireAdmin } from "@/lib/auth-helpers";
import { AdminLayoutShell } from "@/components/admin/admin-layout-shell";

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Secure the entire admin section
	await requireAdmin();

	return <AdminLayoutShell>{children}</AdminLayoutShell>;
}
