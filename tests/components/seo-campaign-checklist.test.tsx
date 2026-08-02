import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SeoCampaignChecklist } from "@/components/admin/seo-campaign-checklist";
import {
	SEO_CAMPAIGN_TASKS,
	type SeoCampaignTask,
} from "@/lib/marketing/seo-campaign-tasks";

const mocks = vi.hoisted(() => ({
	updateSeoTaskStatus: vi.fn(),
	toastSuccess: vi.fn(),
	toastError: vi.fn(),
}));

vi.mock("@/app/admin/marketing/actions", () => ({
	updateSeoTaskStatus: mocks.updateSeoTaskStatus,
}));

vi.mock("sonner", () => ({
	toast: {
		success: mocks.toastSuccess,
		error: mocks.toastError,
	},
}));

const tasks: SeoCampaignTask[] = [
	{
		key: "positioning",
		title: "Lock the parent-facing positioning",
		description: "Use one promise everywhere.",
		successMeasure: "Campaign copy uses the same offer.",
		category: "Conversion",
		phase: 1,
		priority: "High",
	},
	{
		key: "search-console",
		title: "Verify Google Search Console",
		description: "Submit the sitemap.",
		successMeasure: "Priority pages report as indexed.",
		category: "SEO",
		phase: 2,
		priority: "High",
	},
];

describe("SeoCampaignChecklist", () => {
	it("shows shared completion progress and filters tasks by search", async () => {
		const user = userEvent.setup();
		render(
			<SeoCampaignChecklist
				tasks={tasks}
				initialProgress={[
					{
						task_key: "positioning",
						status: "done",
						completed_at: "2026-08-02T20:00:00.000Z",
						updated_at: "2026-08-02T20:00:00.000Z",
					},
				]}
				persistenceAvailable
			/>,
		);

		expect(screen.getByText("1 of 2 complete")).toBeInTheDocument();
		expect(
			screen.getByText("Lock the parent-facing positioning"),
		).toBeInTheDocument();
		expect(
			screen.getByText("Verify Google Search Console"),
		).toBeInTheDocument();

		await user.type(
			screen.getByPlaceholderText("Search the growth plan…"),
			"sitemap",
		);

		expect(
			screen.queryByText("Lock the parent-facing positioning"),
		).not.toBeInTheDocument();
		expect(
			screen.getByText("Verify Google Search Console"),
		).toBeInTheDocument();
	});

	it("optimistically completes a task and persists the change", async () => {
		const user = userEvent.setup();
		mocks.updateSeoTaskStatus.mockResolvedValueOnce({
			success: true,
			progress: {
				task_key: "positioning",
				status: "done",
				completed_at: "2026-08-02T20:00:00.000Z",
				updated_at: "2026-08-02T20:00:00.000Z",
			},
		});

		render(
			<SeoCampaignChecklist
				tasks={tasks}
				initialProgress={[]}
				persistenceAvailable
			/>,
		);

		await user.click(
			screen.getByRole("button", {
				name: "Mark Lock the parent-facing positioning as done",
			}),
		);

		expect(screen.getByText("1 of 2 complete")).toBeInTheDocument();
		await waitFor(() =>
			expect(mocks.updateSeoTaskStatus).toHaveBeenCalledWith(
				"positioning",
				"done",
			),
		);
		expect(mocks.toastSuccess).toHaveBeenCalledWith(
			"Completed: Lock the parent-facing positioning",
		);
	});
});

describe("SEO campaign task definitions", () => {
	it("uses stable unique keys and covers all three phases", () => {
		const keys = SEO_CAMPAIGN_TASKS.map((task) => task.key);

		expect(new Set(keys).size).toBe(keys.length);
		expect(new Set(SEO_CAMPAIGN_TASKS.map((task) => task.phase))).toEqual(
			new Set([1, 2, 3]),
		);
		expect(SEO_CAMPAIGN_TASKS.length).toBeGreaterThanOrEqual(20);
	});
});
