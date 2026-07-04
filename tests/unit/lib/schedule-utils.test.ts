import { describe, expect, it } from "vitest";
import {
	type ClassScheduleSlot,
	formatScheduleLine,
	formatTimeUntil,
	getNextOccurrence,
	isJoinWindowOpen,
} from "@/lib/schedule-utils";

const mondayFivePmToronto: ClassScheduleSlot = {
	day_of_week: 1, // Monday
	start_time: "17:00",
	timezone: "America/Toronto",
	duration_minutes: 60,
};

describe("getNextOccurrence", () => {
	it("returns the upcoming Monday 5pm when called mid-week", () => {
		// Wednesday July 1 2026, noon UTC
		const now = new Date("2026-07-01T12:00:00Z");
		const next = getNextOccurrence(mondayFivePmToronto, now);
		// Monday July 6 2026, 5pm EDT = 21:00 UTC
		expect(next.toISOString()).toBe("2026-07-06T21:00:00.000Z");
	});

	it("returns today's class when it has not started yet", () => {
		// Monday July 6 2026, 10am EDT (14:00 UTC)
		const now = new Date("2026-07-06T14:00:00Z");
		const next = getNextOccurrence(mondayFivePmToronto, now);
		expect(next.toISOString()).toBe("2026-07-06T21:00:00.000Z");
	});

	it("keeps returning an in-progress class until it ends", () => {
		// Monday July 6 2026, 5:30pm EDT — class started 30 min ago
		const now = new Date("2026-07-06T21:30:00Z");
		const next = getNextOccurrence(mondayFivePmToronto, now);
		expect(next.toISOString()).toBe("2026-07-06T21:00:00.000Z");
	});

	it("rolls over to next week once class has ended", () => {
		// Monday July 6 2026, 6:01pm EDT — class over
		const now = new Date("2026-07-06T22:01:00Z");
		const next = getNextOccurrence(mondayFivePmToronto, now);
		expect(next.toISOString()).toBe("2026-07-13T21:00:00.000Z");
	});

	it("uses EST (UTC-5) in winter — DST-aware", () => {
		// Wednesday January 7 2026
		const now = new Date("2026-01-07T12:00:00Z");
		const next = getNextOccurrence(mondayFivePmToronto, now);
		// Monday January 12 2026, 5pm EST = 22:00 UTC
		expect(next.toISOString()).toBe("2026-01-12T22:00:00.000Z");
	});

	it("handles the spring-forward DST transition week", () => {
		// DST starts Sunday March 8 2026 in America/Toronto.
		// Saturday March 7 2026: next Monday (Mar 9) is in EDT.
		const now = new Date("2026-03-07T12:00:00Z");
		const next = getNextOccurrence(mondayFivePmToronto, now);
		// Monday March 9 2026, 5pm EDT = 21:00 UTC
		expect(next.toISOString()).toBe("2026-03-09T21:00:00.000Z");
	});

	it("handles the fall-back DST transition week", () => {
		// DST ends Sunday November 1 2026 in America/Toronto.
		const now = new Date("2026-10-31T12:00:00Z");
		const next = getNextOccurrence(mondayFivePmToronto, now);
		// Monday November 2 2026, 5pm EST = 22:00 UTC
		expect(next.toISOString()).toBe("2026-11-02T22:00:00.000Z");
	});

	it("supports HH:MM:SS times as stored by Postgres TIME columns", () => {
		const schedule = { ...mondayFivePmToronto, start_time: "17:00:00" };
		const now = new Date("2026-07-01T12:00:00Z");
		expect(getNextOccurrence(schedule, now).toISOString()).toBe(
			"2026-07-06T21:00:00.000Z",
		);
	});
});

describe("isJoinWindowOpen", () => {
	const classStart = new Date("2026-07-06T21:00:00Z");

	it("is closed more than 15 minutes before class", () => {
		expect(
			isJoinWindowOpen(classStart, 60, new Date("2026-07-06T20:30:00Z")),
		).toBe(false);
	});

	it("opens 15 minutes before class", () => {
		expect(
			isJoinWindowOpen(classStart, 60, new Date("2026-07-06T20:45:00Z")),
		).toBe(true);
	});

	it("stays open during class", () => {
		expect(
			isJoinWindowOpen(classStart, 60, new Date("2026-07-06T21:30:00Z")),
		).toBe(true);
	});

	it("closes after class ends", () => {
		expect(
			isJoinWindowOpen(classStart, 60, new Date("2026-07-06T22:01:00Z")),
		).toBe(false);
	});
});

describe("formatScheduleLine", () => {
	it("formats day and time", () => {
		const line = formatScheduleLine(mondayFivePmToronto);
		expect(line).toMatch(/^Mondays · 5:00 PM/);
	});
});

describe("formatTimeUntil", () => {
	const now = new Date("2026-07-04T21:00:00Z");

	it("formats days", () => {
		expect(formatTimeUntil(new Date("2026-07-06T21:00:00Z"), now)).toBe(
			"in 2 days",
		);
	});

	it("formats hours", () => {
		expect(formatTimeUntil(new Date("2026-07-05T00:00:00Z"), now)).toBe(
			"in 3 hours",
		);
	});

	it("formats minutes", () => {
		expect(formatTimeUntil(new Date("2026-07-04T21:10:00Z"), now)).toBe(
			"in 10 minutes",
		);
	});

	it("reports an in-progress class", () => {
		expect(formatTimeUntil(new Date("2026-07-04T20:00:00Z"), now)).toBe(
			"happening now",
		);
	});
});
