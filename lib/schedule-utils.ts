// Utilities for weekly recurring class schedules (class_schedules table).
// All timezone math goes through Intl with IANA zone names so DST transitions
// (e.g. America/Toronto) are handled correctly — never use fixed UTC offsets.

export interface ClassScheduleSlot {
	day_of_week: number; // 0=Sunday .. 6=Saturday
	start_time: string; // 'HH:MM' or 'HH:MM:SS' local wall-clock time
	timezone: string; // IANA name, e.g. 'America/Toronto'
	duration_minutes: number;
}

const DAY_NAMES = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export const JOIN_WINDOW_MINUTES = 15;

interface ZonedParts {
	year: number;
	month: number; // 1-12
	day: number;
	hour: number;
	minute: number;
	weekday: number; // 0=Sunday .. 6=Saturday
}

const WEEKDAY_TO_INDEX: Record<string, number> = {
	Sun: 0,
	Mon: 1,
	Tue: 2,
	Wed: 3,
	Thu: 4,
	Fri: 5,
	Sat: 6,
};

function getZonedParts(instant: Date, timeZone: string): ZonedParts {
	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		weekday: "short",
		hour12: false,
	});
	const parts: Record<string, string> = {};
	for (const part of formatter.formatToParts(instant)) {
		parts[part.type] = part.value;
	}
	return {
		year: Number(parts.year),
		month: Number(parts.month),
		day: Number(parts.day),
		// Intl may return '24' for midnight with hour12: false
		hour: Number(parts.hour) % 24,
		minute: Number(parts.minute),
		weekday: WEEKDAY_TO_INDEX[parts.weekday] ?? 0,
	};
}

// Converts a wall-clock time in an IANA timezone to a UTC instant.
// Guess-and-correct: start from the UTC interpretation, then adjust by the
// difference between the desired wall-clock and what the guess renders as in
// the target zone. Two iterations converge across DST boundaries.
function zonedTimeToUtc(
	year: number,
	month: number,
	day: number,
	hour: number,
	minute: number,
	timeZone: string,
): Date {
	const desired = Date.UTC(year, month - 1, day, hour, minute);
	let ts = desired;
	for (let i = 0; i < 2; i++) {
		const rendered = getZonedParts(new Date(ts), timeZone);
		const actual = Date.UTC(
			rendered.year,
			rendered.month - 1,
			rendered.day,
			rendered.hour,
			rendered.minute,
		);
		ts += desired - actual;
	}
	return new Date(ts);
}

function parseStartTime(startTime: string): { hour: number; minute: number } {
	const [hour = 0, minute = 0] = startTime.split(":").map(Number);
	return { hour, minute };
}

/**
 * Returns the next UTC instant at which the schedule occurs. A class that is
 * currently in progress (started less than duration_minutes ago) is still
 * returned as the "next" occurrence so join-window logic keeps working
 * through the end of class.
 */
export function getNextOccurrence(
	schedule: ClassScheduleSlot,
	now: Date = new Date(),
): Date {
	const { hour, minute } = parseStartTime(schedule.start_time);
	const today = getZonedParts(now, schedule.timezone);

	for (let offset = 0; offset <= 7; offset++) {
		const candidateWeekday = (today.weekday + offset) % 7;
		if (candidateWeekday !== schedule.day_of_week) continue;

		// Date arithmetic on the local calendar date; Date.UTC normalizes
		// month/day overflow for us.
		const candidateDate = new Date(
			Date.UTC(today.year, today.month - 1, today.day + offset),
		);
		const occurrence = zonedTimeToUtc(
			candidateDate.getUTCFullYear(),
			candidateDate.getUTCMonth() + 1,
			candidateDate.getUTCDate(),
			hour,
			minute,
			schedule.timezone,
		);
		const endsAt = occurrence.getTime() + schedule.duration_minutes * 60 * 1000;
		if (endsAt > now.getTime()) {
			return occurrence;
		}
	}

	// Unreachable: an 8-day window always contains a future occurrence of any
	// weekday, but TypeScript can't know that.
	throw new Error("No occurrence found within the next 8 days");
}

/** e.g. "Mondays · 5:00 PM ET" */
export function formatScheduleLine(schedule: ClassScheduleSlot): string {
	const { hour, minute } = parseStartTime(schedule.start_time);
	const next = getNextOccurrence(schedule);

	const timeLabel = new Date(
		Date.UTC(2026, 0, 4, hour, minute),
	).toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		timeZone: "UTC",
	});

	let zoneLabel = "";
	try {
		const zoneParts = new Intl.DateTimeFormat("en-US", {
			timeZone: schedule.timezone,
			timeZoneName: "shortGeneric",
		}).formatToParts(next);
		zoneLabel = zoneParts.find((p) => p.type === "timeZoneName")?.value ?? "";
	} catch {
		// shortGeneric unsupported → fall back to short (EST/EDT)
		const zoneParts = new Intl.DateTimeFormat("en-US", {
			timeZone: schedule.timezone,
			timeZoneName: "short",
		}).formatToParts(next);
		zoneLabel = zoneParts.find((p) => p.type === "timeZoneName")?.value ?? "";
	}

	return `${DAY_NAMES[schedule.day_of_week]}s · ${timeLabel}${zoneLabel ? ` ${zoneLabel}` : ""}`;
}

/**
 * The join button unlocks JOIN_WINDOW_MINUTES before class starts and stays
 * open until class ends.
 */
export function isJoinWindowOpen(
	nextOccursAt: Date,
	durationMinutes: number,
	now: Date = new Date(),
): boolean {
	const opensAt = nextOccursAt.getTime() - JOIN_WINDOW_MINUTES * 60 * 1000;
	const closesAt = nextOccursAt.getTime() + durationMinutes * 60 * 1000;
	return now.getTime() >= opensAt && now.getTime() <= closesAt;
}

/** e.g. "in 2 days", "in 3 hours", "in 10 minutes", "happening now" */
export function formatTimeUntil(
	nextOccursAt: Date,
	now: Date = new Date(),
): string {
	const diffMs = nextOccursAt.getTime() - now.getTime();
	if (diffMs <= 0) return "happening now";
	const minutes = Math.round(diffMs / 60000);
	if (minutes < 60) return `in ${minutes} minute${minutes === 1 ? "" : "s"}`;
	const hours = Math.round(minutes / 60);
	if (hours < 24) return `in ${hours} hour${hours === 1 ? "" : "s"}`;
	const days = Math.round(hours / 24);
	return `in ${days} day${days === 1 ? "" : "s"}`;
}
