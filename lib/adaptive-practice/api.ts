import { z } from "zod";

export const adaptiveResponseSchema = z.object({
	questionId: z.string().uuid(),
	answer: z.union([
		z.string().trim().min(1).max(2_000),
		z.array(z.string().trim().min(1).max(2_000)).min(1).max(100),
	]),
	confidence: z.enum(["sure", "unsure", "guessing"]),
	usedHint: z.boolean().default(false),
	idempotencyKey: z.string().uuid(),
});
