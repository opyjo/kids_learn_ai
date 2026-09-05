// Use Eastern/Mountain rather than EST/MST so the labels remain correct
// when Toronto and Edmonton switch between daylight and standard time.
const CLASS_TIME = "6–7 p.m. Eastern / 4–5 p.m. Mountain (Calgary/Edmonton)";

export const FALL_2026_OFFER = {
	trialDate: "Monday, September 14, 2026",
	trialDateShort: "September 14",
	trialDuration: "1 hour",
	classTime: CLASS_TIME,
	weeklySchedule: `Mondays, ${CLASS_TIME}`,
	trialConfirmation:
		"Availability and joining instructions confirmed within 24 hours",
	cohortStartDate: "Monday, September 14, 2026",
	cohortStartDateShort: "September 14",
	cohortDay: "Mondays",
	ageRange: "Ages 9–13",
	maximumStudents: 6,
	programLength: "8–10 weeks",
	foundingRate: "$159.99 CAD",
} as const;

const AGE_GROUP_LABELS: Record<string, string> = {
	"9-10": "Ages 9–10",
	"11-13": "Ages 11–13",
};

export const getBeginnerCohortDetails = (
	ageGroup: string,
): { label: string; day: string } => ({
	label: AGE_GROUP_LABELS[ageGroup] ?? ageGroup,
	day: AGE_GROUP_LABELS[ageGroup] ? FALL_2026_OFFER.cohortDay : "TBD",
});
