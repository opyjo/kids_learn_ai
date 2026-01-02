import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createRateLimiter } from '@/lib/rate-limit'

describe('Rate Limiter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  const createTestLimiter = () =>
    createRateLimiter({
      windowMs: 60 * 1000, // 1 minute
      maxRequests: 3,
    })

  describe('checkRateLimit', () => {
    it('should allow requests under the limit', () => {
      const limiter = createTestLimiter()
      const identifier = 'test-user'

      expect(limiter.checkRateLimit(identifier)).toBe(true)
      expect(limiter.checkRateLimit(identifier)).toBe(true)
      expect(limiter.checkRateLimit(identifier)).toBe(true)
    })

    it('should block requests over the limit', () => {
      const limiter = createTestLimiter()
      const identifier = 'test-user'

      // Use up all requests
      limiter.checkRateLimit(identifier)
      limiter.checkRateLimit(identifier)
      limiter.checkRateLimit(identifier)

      // 4th request should be blocked
      expect(limiter.checkRateLimit(identifier)).toBe(false)
    })

    it('should track different identifiers separately', () => {
      const limiter = createTestLimiter()

      // Use up all requests for user1
      limiter.checkRateLimit('user1')
      limiter.checkRateLimit('user1')
      limiter.checkRateLimit('user1')

      // user1 should be blocked
      expect(limiter.checkRateLimit('user1')).toBe(false)

      // user2 should still be allowed
      expect(limiter.checkRateLimit('user2')).toBe(true)
    })

    it('should reset after the time window expires', () => {
      const limiter = createTestLimiter()
      const identifier = 'test-user'

      // Use up all requests
      limiter.checkRateLimit(identifier)
      limiter.checkRateLimit(identifier)
      limiter.checkRateLimit(identifier)
      expect(limiter.checkRateLimit(identifier)).toBe(false)

      // Advance time past the window
      vi.advanceTimersByTime(61 * 1000)

      // Should be allowed again
      expect(limiter.checkRateLimit(identifier)).toBe(true)
    })
  })

  describe('getRemainingRequests', () => {
    it('should return max requests for new identifier', () => {
      const limiter = createTestLimiter()
      expect(limiter.getRemainingRequests('new-user')).toBe(3)
    })

    it('should return correct remaining count after requests', () => {
      const limiter = createTestLimiter()
      const identifier = 'test-user'

      limiter.checkRateLimit(identifier)
      expect(limiter.getRemainingRequests(identifier)).toBe(2)

      limiter.checkRateLimit(identifier)
      expect(limiter.getRemainingRequests(identifier)).toBe(1)

      limiter.checkRateLimit(identifier)
      expect(limiter.getRemainingRequests(identifier)).toBe(0)
    })

    it('should return max requests after window expires', () => {
      const limiter = createTestLimiter()
      const identifier = 'test-user'

      limiter.checkRateLimit(identifier)
      limiter.checkRateLimit(identifier)

      // Advance time past the window
      vi.advanceTimersByTime(61 * 1000)

      expect(limiter.getRemainingRequests(identifier)).toBe(3)
    })
  })

  describe('reset', () => {
    it('should clear rate limit for specific identifier', () => {
      const limiter = createTestLimiter()
      const identifier = 'test-user'

      // Use up all requests
      limiter.checkRateLimit(identifier)
      limiter.checkRateLimit(identifier)
      limiter.checkRateLimit(identifier)
      expect(limiter.checkRateLimit(identifier)).toBe(false)

      // Reset
      limiter.reset(identifier)

      // Should be allowed again
      expect(limiter.checkRateLimit(identifier)).toBe(true)
      expect(limiter.getRemainingRequests(identifier)).toBe(2)
    })
  })

  describe('clear', () => {
    it('should clear all rate limits', () => {
      const limiter = createTestLimiter()

      // Use up requests for multiple users
      limiter.checkRateLimit('user1')
      limiter.checkRateLimit('user1')
      limiter.checkRateLimit('user1')
      limiter.checkRateLimit('user2')
      limiter.checkRateLimit('user2')

      // Both should have used some requests
      expect(limiter.getRemainingRequests('user1')).toBe(0)
      expect(limiter.getRemainingRequests('user2')).toBe(1)

      // Clear all
      limiter.clear()

      // All should be reset
      expect(limiter.getRemainingRequests('user1')).toBe(3)
      expect(limiter.getRemainingRequests('user2')).toBe(3)
    })
  })
})

