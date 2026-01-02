import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@/tests/test-utils'

// Mock the modules before importing the component
vi.mock('@/lib/supabase/client', () => ({
  getSupabaseBrowserClient: vi.fn(() => ({
    auth: {
      signInWithOAuth: vi.fn().mockResolvedValue({ error: null }),
    },
  })),
}))

vi.mock('@/lib/actions/auth', () => ({
  loginAction: vi.fn(),
}))

// Import after mocks
import { LoginForm } from '@/components/auth/login-form'

describe('LoginForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('rendering', () => {
    it('should render email input field', () => {
      render(<LoginForm />)
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    })

    it('should render password input field', () => {
      render(<LoginForm />)
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    })

    it('should render sign in button', () => {
      render(<LoginForm />)
      expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
    })

    it('should render Google sign in button', () => {
      render(<LoginForm />)
      expect(screen.getByRole('button', { name: /continue with google/i })).toBeInTheDocument()
    })

    it('should render separator between login methods', () => {
      render(<LoginForm />)
      expect(screen.getByText(/or continue with/i)).toBeInTheDocument()
    })
  })

  describe('input fields', () => {
    it('should have email input with correct type', () => {
      render(<LoginForm />)
      const emailInput = screen.getByLabelText(/email/i)
      expect(emailInput).toHaveAttribute('type', 'email')
    })

    it('should have password input with correct type', () => {
      render(<LoginForm />)
      const passwordInput = screen.getByLabelText(/password/i)
      expect(passwordInput).toHaveAttribute('type', 'password')
    })

    it('should have required attribute on email', () => {
      render(<LoginForm />)
      const emailInput = screen.getByLabelText(/email/i)
      expect(emailInput).toBeRequired()
    })

    it('should have required attribute on password', () => {
      render(<LoginForm />)
      const passwordInput = screen.getByLabelText(/password/i)
      expect(passwordInput).toBeRequired()
    })

    it('should have correct placeholder for email', () => {
      render(<LoginForm />)
      expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument()
    })

    it('should have correct placeholder for password', () => {
      render(<LoginForm />)
      expect(screen.getByPlaceholderText(/enter your password/i)).toBeInTheDocument()
    })
  })

  describe('user interaction', () => {
    it('should allow typing in email field', async () => {
      const { user } = render(<LoginForm />)
      const emailInput = screen.getByLabelText(/email/i)

      await user.type(emailInput, 'test@example.com')
      expect(emailInput).toHaveValue('test@example.com')
    })

    it('should allow typing in password field', async () => {
      const { user } = render(<LoginForm />)
      const passwordInput = screen.getByLabelText(/password/i)

      await user.type(passwordInput, 'password123')
      expect(passwordInput).toHaveValue('password123')
    })
  })

  describe('Google sign in', () => {
    it('should call Supabase OAuth on Google button click', async () => {
      const { getSupabaseBrowserClient } = await import('@/lib/supabase/client')
      const mockSignInWithOAuth = vi.fn().mockResolvedValue({ error: null })
      vi.mocked(getSupabaseBrowserClient).mockReturnValue({
        auth: {
          signInWithOAuth: mockSignInWithOAuth,
        },
      } as ReturnType<typeof getSupabaseBrowserClient>)

      const { user } = render(<LoginForm />)
      const googleButton = screen.getByRole('button', { name: /continue with google/i })

      await user.click(googleButton)

      expect(mockSignInWithOAuth).toHaveBeenCalledWith({
        provider: 'google',
        options: expect.objectContaining({
          redirectTo: expect.stringContaining('/auth/callback'),
        }),
      })
    })
  })

  describe('accessibility', () => {
    it('should have properly labeled form fields', () => {
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)

      expect(emailInput).toHaveAttribute('id', 'email')
      expect(passwordInput).toHaveAttribute('id', 'password')
    })

    it('should have named inputs for form submission', () => {
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email/i)
      const passwordInput = screen.getByLabelText(/password/i)

      expect(emailInput).toHaveAttribute('name', 'email')
      expect(passwordInput).toHaveAttribute('name', 'password')
    })
  })

  describe('form structure', () => {
    it('should be wrapped in a form element', () => {
      render(<LoginForm />)
      const form = document.querySelector('form')
      expect(form).toBeInTheDocument()
    })

    it('should have form action attribute', () => {
      render(<LoginForm />)
      const form = document.querySelector('form')
      expect(form).toHaveAttribute('action')
    })
  })
})

