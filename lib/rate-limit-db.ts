import { getSupabaseAdminClient } from "@/lib/supabase/admin";

/**
 * Shared rate limiting backed by the `rate_limits` table, so limits hold
 * across serverless instances instead of resetting per cold start like the
 * in-memory limiter in `lib/rate-limit.ts`.
 *
 * Fails open: if the database is unreachable, sign-in must still work.
 */
export const checkDbRateLimit = async (
	identifier: string,
	limit: number,
	windowInterval: string,
): Promise<boolean> => {
	const supabase = getSupabaseAdminClient();
	if (!supabase) return true;

	try {
		const { data, error } = await supabase.rpc("increment_rate_limit", {
			p_identifier: identifier,
			p_limit: limit,
			p_window_interval: windowInterval,
		});

		if (error) {
			console.error("Rate limit RPC failed:", error);
			return true;
		}

		return data as boolean;
	} catch (err) {
		console.error("Rate limit check error:", err);
		return true;
	}
};

/** Passes only when every supplied bucket is still under its limit. */
export const checkAllRateLimits = async (
	buckets: Array<{ identifier: string; limit: number; windowInterval: string }>,
): Promise<boolean> => {
	const results = await Promise.all(
		buckets.map((bucket) =>
			checkDbRateLimit(bucket.identifier, bucket.limit, bucket.windowInterval),
		),
	);
	return results.every(Boolean);
};
