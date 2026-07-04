import { describe, expect, it } from "vitest";
import { LabTelemetryRecorder } from "@/lib/concept-labs/telemetry";

describe("LabTelemetryRecorder", () => {
	it("stamps events relative to session start using the injected clock", () => {
		let t = 1000;
		const rec = new LabTelemetryRecorder("lab-x", () => t);
		t = 1000; // start
		t = 1250;
		rec.recordPhase("play");
		const summary = rec.summary();
		expect(summary.events).toHaveLength(1);
		expect(summary.events[0].tMs).toBe(250);
	});

	it("aggregates training and test outcomes into the summary", () => {
		const rec = new LabTelemetryRecorder("lab-x", () => 0);
		rec.recordAction({ type: "add-sample", label: "Cat" });
		rec.recordAction({ type: "train", sampleCount: 4 });
		rec.recordAction({
			type: "test",
			predicted: "Cat",
			expected: "Cat",
			correct: true,
		});
		rec.recordAction({
			type: "test",
			predicted: "Cat",
			expected: "Dog",
			correct: false,
		});

		const summary = rec.summary();
		expect(summary.trainedSampleCount).toBe(4);
		expect(summary.testCount).toBe(2);
		expect(summary.testCorrectCount).toBe(1);
	});

	it("captures probe responses and explanation text", () => {
		const rec = new LabTelemetryRecorder("lab-x", () => 0);
		rec.recordPredict({
			optionId: "a",
			isCorrect: false,
			misconceptionTag: "ai-innate-knowledge",
		});
		rec.recordExplain("it looked at similar drawings");
		rec.recordApply({ optionId: "b", isCorrect: true });

		const summary = rec.summary();
		expect(summary.predict?.misconceptionTag).toBe("ai-innate-knowledge");
		expect(summary.apply?.isCorrect).toBe(true);
		expect(summary.explainText).toBe("it looked at similar drawings");
	});
});
