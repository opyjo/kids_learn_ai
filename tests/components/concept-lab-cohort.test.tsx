import { afterEach, describe, expect, it, vi } from "vitest";
import { ConceptLabHost } from "@/components/concept-labs/concept-lab-host";
import { assignCohort } from "@/lib/concept-labs/cohort";
import { howAiLearnsLab } from "@/lib/concept-labs/labs/how-ai-learns";
import { render, screen, waitFor } from "@/tests/test-utils";

/** Find a user id that the deterministic assignment puts in the baseline arm. */
function baselineUserId(): string {
	for (let i = 0; i < 1000; i++) {
		const id = `baseline-user-${i}`;
		if (assignCohort(id, howAiLearnsLab.labId) === "baseline") return id;
	}
	throw new Error("no baseline user found");
}

afterEach(() => {
	vi.unstubAllGlobals();
	vi.unstubAllEnvs();
});

describe("ConceptLabHost cohorts", () => {
	it("baseline arm skips Play/Explain: Predict → Apply → done, and persists", async () => {
		vi.stubEnv("NEXT_PUBLIC_CONCEPT_LAB_EXPERIMENT", "on");
		const fetchSpy = vi.fn(
			async (_url: string, _init: { method: string; body: string }) => ({
				ok: true,
				json: async () => ({ persisted: true }),
			}),
		);
		vi.stubGlobal("fetch", fetchSpy);

		const { user } = render(
			<ConceptLabHost definition={howAiLearnsLab} userId={baselineUserId()} />,
		);

		// Predict, then continue.
		const predictTarget = howAiLearnsLab.predictProbe.options.find(
			(o) => o.id === howAiLearnsLab.predictProbe.correctOptionId,
		);
		await user.click(screen.getByText(predictTarget?.text ?? ""));
		await user.click(screen.getByRole("button", { name: /made my guess/i }));

		// Baseline goes straight to Apply — the teaching UI must NOT appear.
		expect(
			screen.queryByRole("button", { name: /Teach as Cat/i }),
		).not.toBeInTheDocument();
		expect(screen.getByText(/Use what you learned/i)).toBeInTheDocument();

		// Answer Apply → completion + persistence.
		const applyTarget = howAiLearnsLab.applyProbe.options.find(
			(o) => o.id === howAiLearnsLab.applyProbe.correctOptionId,
		);
		await user.click(screen.getByText(applyTarget?.text ?? ""));
		await user.click(screen.getByRole("button", { name: /finish the lab/i }));

		expect(screen.getByText(/You did it!/i)).toBeInTheDocument();

		await waitFor(() =>
			expect(fetchSpy).toHaveBeenCalledWith(
				"/api/concept-labs/sessions",
				expect.objectContaining({ method: "POST" }),
			),
		);
		const init = fetchSpy.mock.calls[0]?.[1];
		const body = JSON.parse(init?.body ?? "{}");
		expect(body.cohort).toBe("baseline");
		expect(body.summary.apply?.isCorrect).toBe(true);
	});

	it("defaults everyone to the full lab when the experiment is off", async () => {
		vi.stubGlobal(
			"fetch",
			vi.fn(async () => ({ ok: true, json: async () => ({}) })),
		);
		const { user } = render(
			<ConceptLabHost definition={howAiLearnsLab} userId={baselineUserId()} />,
		);

		const predictTarget = howAiLearnsLab.predictProbe.options.find(
			(o) => o.id === howAiLearnsLab.predictProbe.correctOptionId,
		);
		await user.click(screen.getByText(predictTarget?.text ?? ""));
		await user.click(screen.getByRole("button", { name: /made my guess/i }));

		// Even a "baseline" user gets Play when the experiment is disabled.
		expect(
			screen.getByRole("button", { name: /Teach as Cat/i }),
		).toBeInTheDocument();
	});
});
