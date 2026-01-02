import { test, expect } from '@playwright/test'

/**
 * Smoke E2E Tests
 * 
 * These are simple, stable tests that verify basic functionality.
 * They should rarely flake because they don't depend on complex state
 * or external services.
 */

test.describe('Smoke Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/')
    
    // Page should load without errors
    await expect(page).toHaveTitle(/Kids Learn AI/i)
    
    // Main content should be visible
    await expect(page.locator('body')).toBeVisible()
  })

  test('navigation header is present', async ({ page }) => {
    await page.goto('/')
    
    // Header/navigation should be visible
    const header = page.locator('header').first()
    await expect(header).toBeVisible()
  })

  test('footer is present', async ({ page }) => {
    await page.goto('/')
    
    // Footer should be present on the page
    const footer = page.locator('footer').first()
    await expect(footer).toBeVisible()
  })
})

test.describe('Page Navigation', () => {
  test('lessons page loads', async ({ page }) => {
    await page.goto('/lessons')
    
    // Page should load without errors
    await expect(page.locator('body')).toBeVisible()
    
    // Should not show a 404 or error page
    await expect(page).not.toHaveTitle(/404|error/i)
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    
    await expect(page.locator('body')).toBeVisible()
    await expect(page).not.toHaveTitle(/404|error/i)
  })

  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    
    await expect(page.locator('body')).toBeVisible()
    await expect(page).not.toHaveTitle(/404|error/i)
  })

  test('FAQ page loads', async ({ page }) => {
    await page.goto('/faq')
    
    await expect(page.locator('body')).toBeVisible()
    await expect(page).not.toHaveTitle(/404|error/i)
  })

  test('login page loads', async ({ page }) => {
    await page.goto('/login')
    
    await expect(page.locator('body')).toBeVisible()
    await expect(page).not.toHaveTitle(/404|error/i)
  })

  test('signup page loads', async ({ page }) => {
    await page.goto('/signup')
    
    await expect(page.locator('body')).toBeVisible()
    await expect(page).not.toHaveTitle(/404|error/i)
  })
})

test.describe('Critical UI Elements', () => {
  test('contact form is visible on contact page', async ({ page }) => {
    await page.goto('/contact')
    
    // Form should be present
    const form = page.locator('form').first()
    await expect(form).toBeVisible()
  })

  test('login form is visible on login page', async ({ page }) => {
    await page.goto('/login')
    
    // Email and password inputs should be present
    await expect(page.locator('input[type="email"]')).toBeVisible()
    await expect(page.locator('input[type="password"]')).toBeVisible()
  })
})

test.describe('No Console Errors', () => {
  test('homepage has no critical console errors', async ({ page }) => {
    const errors: string[] = []
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })
    
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Filter out expected/known errors (like missing env vars in dev)
    const criticalErrors = errors.filter(
      (error) =>
        !error.includes('NEXT_PUBLIC_') &&
        !error.includes('favicon') &&
        !error.includes('hydration')
    )
    
    // Should have no critical JavaScript errors
    expect(criticalErrors).toHaveLength(0)
  })
})

test.describe('Mobile Responsiveness', () => {
  test('homepage is responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    await page.goto('/')
    
    // Page should still be functional
    await expect(page.locator('body')).toBeVisible()
  })
})

