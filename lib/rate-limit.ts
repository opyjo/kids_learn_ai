/**
 * Simple in-memory rate limiter
 * In production, consider using Redis or similar for distributed rate limiting
 */

export interface RateLimitConfig {
	windowMs: number; // Time window in milliseconds
	maxRequests: number; // Maximum requests per window
}

export interface RateLimitEntry {
	count: number;
	resetTime: number;
}

export const createRateLimiter = (config: RateLimitConfig) => {
	const rateLimitMap = new Map<string, RateLimitEntry>();

	/**
	 * Check if the request should be rate limited
	 * @param identifier - Unique identifier for the client (e.g., IP address)
	 * @returns true if request is allowed, false if rate limited
	 */
	const checkRateLimit = (identifier: string): boolean => {
		const now = Date.now();
		const entry = rateLimitMap.get(identifier);

		// No existing entry or window expired - allow and start new window
		if (!entry || now > entry.resetTime) {
			rateLimitMap.set(identifier, {
				count: 1,
				resetTime: now + config.windowMs,
			});
			return true;
		}

		// Within window but under limit - allow and increment
		if (entry.count < config.maxRequests) {
			entry.count++;
			return true;
		}

		// Over limit - deny
		return false;
	};

	/**
	 * Get remaining requests for an identifier
	 */
	const getRemainingRequests = (identifier: string): number => {
		const now = Date.now();
		const entry = rateLimitMap.get(identifier);

		if (!entry || now > entry.resetTime) {
			return config.maxRequests;
		}

		return Math.max(0, config.maxRequests - entry.count);
	};

	/**
	 * Reset rate limit for an identifier (useful for testing)
	 */
	const reset = (identifier: string): void => {
		rateLimitMap.delete(identifier);
	};

	/**
	 * Clear all rate limit entries (useful for testing)
	 */
	const clear = (): void => {
		rateLimitMap.clear();
	};

	return {
		checkRateLimit,
		getRemainingRequests,
		reset,
		clear,
	};
};

// Default rate limiter for contact form: 3 requests per hour
export const contactRateLimiter = createRateLimiter({
	windowMs: 60 * 60 * 1000, // 1 hour
	maxRequests: 3,
});
