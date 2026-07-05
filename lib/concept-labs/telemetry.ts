/**
 * In-memory telemetry recorder for a single lab attempt.
 *
 * Every child interaction and phase transition is appended to an event log
 * timestamped from session start, so an attempt is fully described by its
 * ordered actions (and can be replayed during analysis). For now the recorder
 * only lives in memory and produces a summary on completion; a Supabase sink
 * (concept_labs / lab_sessions / lab_events / probe_responses) plugs in behind
 * the same interface once the validation harness lands. See
 * docs/RnD/novel-pedagogy-implementation.md §7-8.
 */

import type {
	DialogueTurn,
	ExplainRubricScore,
	LabAction,
	LabEvent,
	LabPhase,
	LabSessionSummary,
	ProbeResponse,
} from "./types";

export class LabTelemetryRecorder {
	private readonly labId: string;
	private readonly startedAt: number;
	private readonly now: () => number;
	private readonly events: LabEvent[] = [];

	private predict?: ProbeResponse;
	private apply?: ProbeResponse;
	private explainText?: string;
	private explainDialogue?: DialogueTurn[];
	private explainRubricScore?: ExplainRubricScore;
	private trainedSampleCount = 0;
	private testCount = 0;
	private testCorrectCount = 0;

	constructor(labId: string, now: () => number = () => Date.now()) {
		this.labId = labId;
		this.now = now;
		this.startedAt = now();
	}

	private stamp(): number {
		return this.now() - this.startedAt;
	}

	recordPhase(phase: LabPhase): void {
		this.events.push({ tMs: this.stamp(), payload: { type: "phase", phase } });
	}

	recordAction(action: LabAction): void {
		this.events.push({ tMs: this.stamp(), payload: action });
		if (action.type === "train") {
			this.trainedSampleCount = action.sampleCount;
		} else if (action.type === "test") {
			this.testCount += 1;
			if (action.correct) this.testCorrectCount += 1;
		}
	}

	recordPredict(response: ProbeResponse): void {
		this.predict = response;
	}

	recordApply(response: ProbeResponse): void {
		this.apply = response;
	}

	recordExplain(
		text: string,
		dialogue?: DialogueTurn[],
		rubricScore?: ExplainRubricScore,
	): void {
		this.explainText = text;
		this.explainDialogue = dialogue;
		this.explainRubricScore = rubricScore;
	}

	summary(): LabSessionSummary {
		return {
			labId: this.labId,
			predict: this.predict,
			apply: this.apply,
			explainText: this.explainText,
			explainDialogue: this.explainDialogue,
			explainRubricScore: this.explainRubricScore,
			trainedSampleCount: this.trainedSampleCount,
			testCount: this.testCount,
			testCorrectCount: this.testCorrectCount,
			events: [...this.events],
		};
	}
}
