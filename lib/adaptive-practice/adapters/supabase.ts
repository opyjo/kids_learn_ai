import type { SupabaseClient } from "@supabase/supabase-js";
import type {
	AdaptiveRepositories,
	EventPort,
	EvidenceEvent,
	MasteryPort,
	QuestionBankPort,
	SessionPort,
} from "@/lib/adaptive-practice/ports";
import type {
	AdaptiveQuestionCandidate,
	AdaptiveSessionState,
	ConceptMastery,
} from "@/lib/adaptive-practice/types";
import type { QuizQuestionRecord } from "@/lib/quizzes/types";

function stringArray(value: unknown): string[] {
	return Array.isArray(value)
		? value.filter((item): item is string => typeof item === "string")
		: [];
}

export class SupabaseAdaptiveAdapter
	implements QuestionBankPort, MasteryPort, SessionPort, EventPort
{
	constructor(
		private readonly db: SupabaseClient,
		private readonly isAdmin: boolean,
	) {}

	async listCandidates(userId: string): Promise<AdaptiveQuestionCandidate[]> {
		const courseIds = this.isAdmin
			? ((await this.db.from("courses").select("id")).data || []).map(
					(course) => course.id,
				)
			: (
					(
						await this.db
							.from("level_enrollments")
							.select("course_id")
							.eq("student_id", userId)
					).data || []
				).map((enrollment) => enrollment.course_id);
		if (!courseIds.length) return [];
		const [{ data: questions }, { data: dueRows }] = await Promise.all([
			this.db
				.from("quiz_questions")
				.select(
					"*, quizzes!inner(id, status, is_active, course_id, lesson_id, lessons(course_id))",
				)
				.eq("quizzes.status", "published")
				.eq("quizzes.is_active", true),
			this.db
				.from("quiz_review_queue")
				.select("question_id, due_at")
				.eq("user_id", userId),
		]);
		const dueByQuestion = new Map(
			(dueRows || []).map((row) => [row.question_id, row.due_at]),
		);
		return (questions || []).flatMap((row) => {
			const quiz = row.quizzes?.[0];
			const courseId = quiz?.course_id || quiz?.lessons?.[0]?.course_id;
			if (!courseId || !courseIds.includes(courseId)) return [];
			return [
				{
					id: row.id,
					quizId: quiz.id,
					courseId,
					conceptTag: row.concept_tag,
					difficulty: row.adaptive_difficulty,
					variantGroup: row.variant_group,
					learningObjective: row.learning_objective,
					prerequisiteTags: stringArray(row.prerequisite_tags),
					remediation: row.remediation,
					dueAt: dueByQuestion.get(row.id) || null,
					isPublished: true,
					isEnrolled: true,
				},
			];
		});
	}

	async getProtectedAnswer(
		questionId: string,
	): Promise<string | string[] | null> {
		const { data } = await this.db
			.from("quiz_questions")
			.select("correct_answer")
			.eq("id", questionId)
			.maybeSingle();
		return (data?.correct_answer as string | string[] | undefined) ?? null;
	}

	async getQuestionRecord(
		questionId: string,
	): Promise<QuizQuestionRecord | null> {
		const { data } = await this.db
			.from("quiz_questions")
			.select("*")
			.eq("id", questionId)
			.maybeSingle();
		return (data as QuizQuestionRecord | null) ?? null;
	}

	async listMastery(userId: string): Promise<ConceptMastery[]> {
		const { data } = await this.db
			.from("quiz_concept_mastery")
			.select("course_id, concept_tag, mastery_score, status, total_count")
			.eq("user_id", userId);
		return (data || []).map((row) => ({
			courseId: row.course_id,
			conceptTag: row.concept_tag,
			score: row.mastery_score,
			status: row.status,
			totalAnswers: row.total_count,
		}));
	}

	async create(userId: string, state: AdaptiveSessionState): Promise<void> {
		const { error } = await this.db.from("adaptive_practice_sessions").insert({
			id: state.id,
			user_id: userId,
			algorithm_version: state.algorithmVersion,
			seed: state.seed,
			target_length: state.targetLength,
			state,
			status: state.status,
		});
		if (error) throw new Error(error.message);
	}

	async markShadow(sessionId: string): Promise<void> {
		const { error } = await this.db
			.from("adaptive_practice_sessions")
			.update({ is_shadow: true })
			.eq("id", sessionId);
		if (error) throw new Error(error.message);
	}

	async logDiagnostic(input: {
		userId: string;
		eventType: "fallback" | "session_error";
		reason: string;
		details?: Record<string, unknown>;
	}): Promise<void> {
		const { error } = await this.db
			.from("adaptive_practice_diagnostics")
			.insert({
				user_id: input.userId,
				event_type: input.eventType,
				reason: input.reason,
				details: input.details || {},
			});
		if (error)
			console.error("Could not record adaptive diagnostic:", error.message);
	}

	async get(
		userId: string,
		sessionId: string,
	): Promise<AdaptiveSessionState | null> {
		const { data } = await this.db
			.from("adaptive_practice_sessions")
			.select("state")
			.eq("id", sessionId)
			.eq("user_id", userId)
			.gt("expires_at", new Date().toISOString())
			.maybeSingle();
		return (data?.state as AdaptiveSessionState | undefined) ?? null;
	}

	async complete(
		sessionId: string,
		status: "completed" | "fallback",
	): Promise<void> {
		const { error } = await this.db
			.from("adaptive_practice_sessions")
			.update({ status, completed_at: new Date().toISOString() })
			.eq("id", sessionId);
		if (error) throw new Error(error.message);
	}

	async record(
		event: EvidenceEvent,
		nextState: AdaptiveSessionState,
		mastery: ConceptMastery,
	): Promise<{ inserted: boolean }> {
		const { data, error } = await this.db.rpc(
			"record_adaptive_practice_response",
			{
				p_session_id: event.sessionId,
				p_user_id: event.userId,
				p_question_id: event.questionId,
				p_position: event.position,
				p_selection_reason: event.selectionReason,
				p_confidence: event.confidence,
				p_correct: event.correct,
				p_used_hint: event.usedHint,
				p_difficulty: event.difficulty,
				p_mastery_before: event.masteryBefore,
				p_mastery_after: event.masteryAfter,
				p_mastery_status: mastery.status,
				p_remediation_shown: event.remediationShown,
				p_idempotency_key: event.idempotencyKey,
				p_next_state: nextState,
				p_session_status: nextState.status,
			},
		);
		if (error) throw new Error(error.message);
		return { inserted: Boolean(data) };
	}
}

export function createSupabaseAdaptiveRepositories(
	adapter: SupabaseAdaptiveAdapter,
): AdaptiveRepositories {
	return {
		questions: adapter,
		mastery: adapter,
		sessions: adapter,
		events: adapter,
	};
}
