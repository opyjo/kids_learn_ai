import { describe, expect, it } from "vitest";
import {
	boundedExtraSeconds,
	canRunLiveHostAction,
	isLivePlayerConnected,
	liveQuestionDeadline,
	remainingQuestionMs,
	summarizeLiveAnswers,
} from "@/lib/quizzes/live-game";

describe("live game recovery rules", () => {
	it("allows only intentional classroom state transitions", () => {
		expect(canRunLiveHostAction("lobby", "start")).toBe(true);
		expect(canRunLiveHostAction("lobby", "next")).toBe(false);
		expect(canRunLiveHostAction("question", "pause")).toBe(true);
		expect(canRunLiveHostAction("paused", "resume")).toBe(true);
		expect(canRunLiveHostAction("review", "reopen")).toBe(true);
		expect(canRunLiveHostAction("finished", "finish")).toBe(false);
	});

	it("keeps extra-time controls within classroom-safe bounds", () => {
		expect(boundedExtraSeconds(undefined)).toBe(10);
		expect(boundedExtraSeconds(1)).toBe(5);
		expect(boundedExtraSeconds(30)).toBe(30);
		expect(boundedExtraSeconds(600)).toBe(60);
	});

	it("calculates authoritative deadlines and remaining time", () => {
		const now = new Date("2026-07-26T12:00:00.000Z").getTime();
		const deadline = liveQuestionDeadline(20, now);

		expect(deadline).toBe("2026-07-26T12:00:20.000Z");
		expect(remainingQuestionMs(deadline, now + 7000)).toBe(13_000);
		expect(remainingQuestionMs(deadline, now + 30_000)).toBe(0);
	});

	it("summarizes one response per player without exposing names", () => {
		expect(
			summarizeLiveAnswers([
				{ player_id: "student-1", answer: "A" },
				{ player_id: "student-2", answer: "B" },
				{ player_id: "student-3", answer: "A" },
			]),
		).toEqual({
			answeredCount: 3,
			distribution: [
				{ answer: "A", count: 2 },
				{ answer: "B", count: 1 },
			],
		});
	});

	it("expires presence after the recovery timeout", () => {
		const now = new Date("2026-07-26T12:00:40.000Z").getTime();
		expect(isLivePlayerConnected("2026-07-26T12:00:10.000Z", now)).toBe(true);
		expect(isLivePlayerConnected("2026-07-26T12:00:00.000Z", now)).toBe(false);
	});
});
