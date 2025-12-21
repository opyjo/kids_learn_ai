import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must not exceed 200 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3;

const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const userLimit = rateLimitMap.get(identifier);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (userLimit.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  userLimit.count++;
  return true;
};

export const POST = async (request: NextRequest) => {
  try {
    // Get IP address for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: "Kids Learn AI <hello@kidslearnai.ca>",
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@kidslearnai.ca",
      replyTo: validatedData.email,
      subject: `Contact Form: ${validatedData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #4b5563;
                margin-bottom: 5px;
                display: block;
              }
              .value {
                color: #1f2937;
                background: white;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #e5e7eb;
              }
              .message-box {
                background: white;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid #e5e7eb;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
                font-size: 12px;
                color: #6b7280;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">You've received a new message from Kids Learn AI contact form</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">From:</span>
                <div class="value">${validatedData.name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${validatedData.email}">${
        validatedData.email
      }</a></div>
              </div>
              <div class="field">
                <span class="label">Subject:</span>
                <div class="value">${validatedData.subject}</div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${validatedData.message}</div>
              </div>
              <div class="footer">
                <p>This message was sent via the contact form on Kids Learn AI website.</p>
                <p>Submitted at: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (!emailResult.data) {
      console.error("Email error:", emailResult.error);
      return NextResponse.json(
        {
          error: "Failed to send email. Please try again later.",
        },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", emailResult.data);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
};
