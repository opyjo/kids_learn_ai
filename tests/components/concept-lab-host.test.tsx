import { describe, expect, it } from "vitest";
import { ConceptLabHost } from "@/components/concept-labs/concept-lab-host";
import { howAiLearnsLab } from "@/lib/concept-labs/labs/how-ai-learns";
import { render, screen } from "@/tests/test-utils";

describe("ConceptLabHost", () => {
	it("starts on the Predict phase showing the prediction probe", () => {
		render(<ConceptLabHost definition={howAiLearnsLab} />);
		expect(screen.getByText(/Step 1 · Make a prediction/i)).toBeInTheDocument();
		expect(
			screen.getByText(howAiLearnsLab.predictProbe.question),
		).toBeInTheDocument();
	});

	it("advances from Predict to Play once a guess is made", async () => {
		const { user } = render(<ConceptLabHost definition={howAiLearnsLab} />);

		// Choose the target-concept answer, then continue.
		const target = howAiLearnsLab.predictProbe.options.find(
			(o) => o.id === howAiLearnsLab.predictProbe.correctOptionId,
		);
		if (!target) throw new Error("lab has no correct option");

		await user.click(screen.getByText(target.text));
		await user.click(screen.getByRole("button", { name: /made my guess/i }));

		// Now on the Play phase: the teaching UI is visible.
		expect(screen.getByText(/Step 2 · Teach the machine/i)).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /Teach as Cat/i }),
		).toBeInTheDocument();
	});
});
