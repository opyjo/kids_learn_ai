import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { AdminLayoutShell } from "@/components/admin/admin-layout-shell";
import { render, screen, waitFor } from "@/tests/test-utils";

const supabaseQuery = {
	select: vi.fn(),
	eq: vi.fn(),
};

vi.mock("next/navigation", () => ({
	usePathname: () => "/admin/teacher-notes",
}));

vi.mock("@/components/site-header", () => ({
	SiteHeader: () => <header>Site header</header>,
}));

vi.mock("@/lib/supabase/client", () => ({
	getSupabaseBrowserClient: () => ({
		from: () => supabaseQuery,
	}),
}));

describe("admin layout sidebar", () => {
	beforeEach(() => {
		supabaseQuery.select.mockReturnValue(supabaseQuery);
		supabaseQuery.eq.mockResolvedValue({ count: 4 });
	});

	it("opens the group containing the current admin page", () => {
		render(
			<AdminLayoutShell>
				<div>Teacher notes page</div>
			</AdminLayoutShell>,
		);

		expect(
			screen.getByRole("button", { name: /learning content/i }),
		).toHaveAttribute("aria-expanded", "true");
		expect(screen.getByRole("button", { name: /^workspace/i })).toHaveAttribute(
			"aria-expanded",
			"false",
		);
		expect(
			screen.getByRole("link", { name: /teacher notes/i }),
		).toHaveAttribute("aria-current", "page");
	});

	it("keeps one menu group open at a time and allows it to collapse", async () => {
		const user = userEvent.setup();
		render(
			<AdminLayoutShell>
				<div>Teacher notes page</div>
			</AdminLayoutShell>,
		);

		const contentTrigger = screen.getByRole("button", {
			name: /learning content/i,
		});
		const insightsTrigger = screen.getByRole("button", {
			name: /insights and planning/i,
		});

		await user.click(insightsTrigger);
		expect(insightsTrigger).toHaveAttribute("aria-expanded", "true");
		expect(contentTrigger).toHaveAttribute("aria-expanded", "false");

		await user.click(insightsTrigger);
		expect(insightsTrigger).toHaveAttribute("aria-expanded", "false");
	});

	it("shows the pending submission count on the collapsed workspace group", async () => {
		render(
			<AdminLayoutShell>
				<div>Teacher notes page</div>
			</AdminLayoutShell>,
		);

		await waitFor(() => {
			expect(
				screen.getByRole("button", { name: /workspace.*4/i }),
			).toBeInTheDocument();
		});
	});
});
