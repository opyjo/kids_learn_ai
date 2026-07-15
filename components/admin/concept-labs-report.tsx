"use client";

import { FlaskConical, Loader2, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Cohort } from "@/lib/concept-labs/cohort";
import { getLabById } from "@/lib/concept-labs/registry";

interface CohortStats {
	cohort: Cohort;
	n: number;
	preCorrectRate: number;
	postCorrectRate: number;
	normalizedGain: number;
	misconceptionRateAtPredict: number;
	misconceptionRateAtApply: number;
	avgRubricScore?: number;
}

interface LabReport {
	labId: string;
	cohorts: CohortStats[];
	gainDelta?: number;
}

interface ReportResponse {
	totalSessions: number;
	report: LabReport[];
	standaloneReport?: LabReport[];
}

const EXPERIMENT_ON = process.env.NEXT_PUBLIC_CONCEPT_LAB_EXPERIMENT === "on";

const pct = (value: number) => `${Math.round(value * 100)}%`;
const signed = (value: number) =>
	`${value >= 0 ? "+" : ""}${(value * 100).toFixed(0)}%`;

function CohortRow({ stats }: { stats: CohortStats }) {
	const isLabs = stats.cohort === "labs-v1";
	return (
		<tr className="border-t border-border">
			<td className="py-2 pr-4">
				<Badge variant={isLabs ? "default" : "secondary"}>{stats.cohort}</Badge>
			</td>
			<td className="py-2 pr-4 text-right tabular-nums">{stats.n}</td>
			<td className="py-2 pr-4 text-right tabular-nums">
				{pct(stats.preCorrectRate)}
			</td>
			<td className="py-2 pr-4 text-right tabular-nums">
				{pct(stats.postCorrectRate)}
			</td>
			<td className="py-2 pr-4 text-right font-semibold tabular-nums">
				{signed(stats.normalizedGain)}
			</td>
			<td className="py-2 pr-4 text-right tabular-nums text-muted-foreground">
				{pct(stats.misconceptionRateAtPredict)} →{" "}
				{pct(stats.misconceptionRateAtApply)}
			</td>
			<td className="py-2 text-right tabular-nums text-muted-foreground">
				{typeof stats.avgRubricScore === "number"
					? stats.avgRubricScore.toFixed(2)
					: "—"}
			</td>
		</tr>
	);
}

function LabCard({ lab }: { lab: LabReport }) {
	const title = getLabById(lab.labId)?.title ?? lab.labId;
	return (
		<Card>
			<CardHeader className="pb-3">
				<div className="flex items-center justify-between gap-3">
					<CardTitle className="text-base">{title}</CardTitle>
					{typeof lab.gainDelta === "number" && (
						<Badge
							className={
								lab.gainDelta > 0
									? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-100"
									: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-100"
							}
						>
							Lab vs baseline: {signed(lab.gainDelta)} gain
						</Badge>
					)}
				</div>
				<p className="text-xs text-muted-foreground">{lab.labId}</p>
			</CardHeader>
			<CardContent>
				<div className="overflow-x-auto">
					<table className="w-full text-sm">
						<thead>
							<tr className="text-xs uppercase tracking-wide text-muted-foreground">
								<th className="py-1 pr-4 text-left font-medium">Arm</th>
								<th className="py-1 pr-4 text-right font-medium">n</th>
								<th className="py-1 pr-4 text-right font-medium">Pre</th>
								<th className="py-1 pr-4 text-right font-medium">Post</th>
								<th className="py-1 pr-4 text-right font-medium">Norm. gain</th>
								<th className="py-1 pr-4 text-right font-medium">
									Misconception P→A
								</th>
								<th className="py-1 text-right font-medium">Rubric</th>
							</tr>
						</thead>
						<tbody>
							{lab.cohorts.map((c) => (
								<CohortRow key={c.cohort} stats={c} />
							))}
						</tbody>
					</table>
				</div>
			</CardContent>
		</Card>
	);
}

export function ConceptLabsReport() {
	const [data, setData] = useState<ReportResponse | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const load = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch("/api/admin/concept-labs/report");
			if (!res.ok) throw new Error(`Report request failed (${res.status})`);
			setData((await res.json()) as ReportResponse);
		} catch (e) {
			setError(e instanceof Error ? e.message : "Failed to load report");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		void load();
	}, [load]);

	return (
		<div className="space-y-3">
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<Badge variant={EXPERIMENT_ON ? "default" : "secondary"}>
						A/B experiment {EXPERIMENT_ON ? "ON" : "off"}
					</Badge>
					{data && <span>{data.totalSessions} completed session(s)</span>}
				</div>
				<Button
					variant="outline"
					size="sm"
					onClick={() => void load()}
					disabled={loading}
					className="gap-1.5"
				>
					{loading ? (
						<Loader2 className="h-3.5 w-3.5 animate-spin" />
					) : (
						<RefreshCw className="h-3.5 w-3.5" />
					)}
					Refresh
				</Button>
			</div>

			{!EXPERIMENT_ON && (
				<p className="rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
					The baseline-vs-lab split is off, so all sessions record as{" "}
					<code>labs-v1</code>. Set{" "}
					<code>NEXT_PUBLIC_CONCEPT_LAB_EXPERIMENT=on</code> to collect a
					baseline arm and see a gain comparison.
				</p>
			)}

			{error && (
				<p className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
					{error}
				</p>
			)}

			{loading && !data && (
				<div className="flex items-center gap-2 py-4 text-sm text-muted-foreground">
					<Loader2 className="h-4 w-4 animate-spin" />
					Loading report…
				</div>
			)}

			{data &&
				data.report.length === 0 &&
				(data.standaloneReport?.length ?? 0) === 0 &&
				!loading && (
					<Card>
						<CardContent className="flex flex-col items-center gap-2 py-5 text-center">
							<FlaskConical className="h-7 w-7 text-muted-foreground/50" />
							<p className="text-sm font-medium">
								No completed lab sessions yet
							</p>
							<p className="text-xs text-muted-foreground">
								Finish a Concept Lab (Term 5 Week 4 or the /labs playground)
								while signed in, then refresh.
							</p>
						</CardContent>
					</Card>
				)}

			{data && data.report.length > 0 && (
				<div className="space-y-3">
					<h2 className="text-sm font-semibold text-foreground">
						In-lesson sessions (experiment data)
					</h2>
					{data.report.map((lab) => (
						<LabCard key={lab.labId} lab={lab} />
					))}
				</div>
			)}

			{data && (data.standaloneReport?.length ?? 0) > 0 && (
				<div className="space-y-3">
					<h2 className="text-sm font-semibold text-foreground">
						Standalone playground sessions (/labs — outside the experiment)
					</h2>
					{data.standaloneReport?.map((lab) => (
						<LabCard key={`standalone-${lab.labId}`} lab={lab} />
					))}
				</div>
			)}
		</div>
	);
}
