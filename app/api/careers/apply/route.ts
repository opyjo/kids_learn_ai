import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const applicationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  university: z
    .string()
    .trim()
    .min(1, "University is required")
    .max(200, "University name must not exceed 200 characters"),
  program: z
    .string()
    .trim()
    .min(1, "Program/Major is required")
    .max(200, "Program name must not exceed 200 characters"),
  yearOfStudy: z.enum(["1", "2", "3", "4", "5+", "graduate"]),
  pythonExperience: z.enum(["beginner", "intermediate", "advanced", "expert"]),
  teachingExperience: z.string().trim().max(500).optional(),
  whyInterested: z
    .string()
    .trim()
    .min(1, "Please tell us why you're interested")
    .min(20, "Please provide a bit more detail")
    .max(1000, "Response must not exceed 1000 characters"),
  availableTuesday: z.boolean().default(false),
  availableThursday: z.boolean().default(false),
  linkedinUrl: z.string().trim().url().optional().or(z.literal("")),
});

// Rate limiting map
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

const getYearLabel = (year: string): string => {
  switch (year) {
    case "1":
      return "1st Year";
    case "2":
      return "2nd Year";
    case "3":
      return "3rd Year";
    case "4":
      return "4th Year";
    case "5+":
      return "5+ Year";
    case "graduate":
      return "Graduate Student";
    default:
      return year;
  }
};

const getExperienceLabel = (experience: string): string => {
  switch (experience) {
    case "beginner":
      return "Beginner (learning)";
    case "intermediate":
      return "Intermediate (coursework)";
    case "advanced":
      return "Advanced (projects/work)";
    case "expert":
      return "Expert (professional)";
    default:
      return experience;
  }
};

const getAvailabilityText = (
  tuesday: boolean,
  thursday: boolean
): string => {
  if (tuesday && thursday) return "Both Tuesdays & Thursdays";
  if (tuesday) return "Tuesdays only (Ages 9-10)";
  if (thursday) return "Thursdays only (Ages 11-13)";
  return "Not specified";
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
    const validatedData = applicationSchema.parse(body);

    // Validate at least one day selected
    if (!validatedData.availableTuesday && !validatedData.availableThursday) {
      return NextResponse.json(
        {
          error: "Please select at least one day you're available to teach",
        },
        { status: 400 }
      );
    }

    const yearLabel = getYearLabel(validatedData.yearOfStudy);
    const experienceLabel = getExperienceLabel(validatedData.pythonExperience);
    const availabilityText = getAvailabilityText(
      validatedData.availableTuesday,
      validatedData.availableThursday
    );

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: "Kids Learn AI <hello@kidslearnai.ca>",
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@kidslearnai.ca",
      replyTo: validatedData.email,
      subject: `👨‍🏫 Instructor Application: ${validatedData.fullName} (${validatedData.university})`,
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
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
              }
              .badge {
                background: rgba(255,255,255,0.2);
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                display: inline-block;
                margin-bottom: 10px;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .section {
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 20px;
                border: 1px solid #e5e7eb;
              }
              .section-title {
                font-weight: 600;
                color: #10b981;
                margin-bottom: 15px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .field {
                margin-bottom: 12px;
              }
              .label {
                font-weight: 600;
                color: #4b5563;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.3px;
              }
              .value {
                color: #1f2937;
                font-size: 16px;
                margin-top: 4px;
              }
              .availability-box {
                background: #ecfdf5;
                border: 2px solid #10b981;
                border-radius: 8px;
                padding: 15px;
                text-align: center;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
                font-size: 12px;
                color: #6b7280;
              }
              .action-btn {
                display: inline-block;
                background: #10b981;
                color: white;
                padding: 12px 24px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                margin-top: 15px;
              }
              .experience-badge {
                display: inline-block;
                background: #dbeafe;
                color: #1d4ed8;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 500;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="badge">📋 INSTRUCTOR APPLICATION</div>
              <h1 style="margin: 0; font-size: 24px;">New Instructor Application</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">A university student wants to join the teaching team</p>
            </div>
            <div class="content">
              <!-- Applicant Info -->
              <div class="section">
                <div class="section-title">👤 Applicant Information</div>
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value" style="font-size: 20px; font-weight: 600;">${validatedData.fullName}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">
                    <a href="mailto:${validatedData.email}">${validatedData.email}</a>
                  </div>
                </div>
                ${
                  validatedData.linkedinUrl
                    ? `
                <div class="field">
                  <div class="label">LinkedIn</div>
                  <div class="value">
                    <a href="${validatedData.linkedinUrl}" target="_blank">${validatedData.linkedinUrl}</a>
                  </div>
                </div>
                `
                    : ""
                }
              </div>

              <!-- Education -->
              <div class="section">
                <div class="section-title">🎓 Education</div>
                <div class="field">
                  <div class="label">University</div>
                  <div class="value">${validatedData.university}</div>
                </div>
                <div class="field">
                  <div class="label">Program / Major</div>
                  <div class="value">${validatedData.program}</div>
                </div>
                <div class="field">
                  <div class="label">Year of Study</div>
                  <div class="value">${yearLabel}</div>
                </div>
              </div>

              <!-- Experience -->
              <div class="section">
                <div class="section-title">💻 Experience</div>
                <div class="field">
                  <div class="label">Python Experience</div>
                  <div class="value">
                    <span class="experience-badge">${experienceLabel}</span>
                  </div>
                </div>
                ${
                  validatedData.teachingExperience
                    ? `
                <div class="field">
                  <div class="label">Teaching/Tutoring Experience</div>
                  <div class="value" style="white-space: pre-wrap;">${validatedData.teachingExperience}</div>
                </div>
                `
                    : ""
                }
              </div>

              <!-- Availability -->
              <div class="availability-box">
                <div style="font-size: 14px; color: #065f46; margin-bottom: 5px;">📅 Available to Teach</div>
                <div style="font-size: 20px; font-weight: 700; color: #047857;">${availabilityText}</div>
              </div>

              <!-- Why Interested -->
              <div class="section">
                <div class="section-title">💭 Why They Want to Teach Kids</div>
                <div class="value" style="white-space: pre-wrap;">${validatedData.whyInterested}</div>
              </div>

              <!-- Action -->
              <div style="text-align: center; margin-top: 20px;">
                <a href="mailto:${validatedData.email}?subject=Your Instructor Application at Kids Learn AI&body=Hi ${validatedData.fullName},%0D%0A%0D%0AThank you for applying to be an instructor at Kids Learn AI!%0D%0A%0D%0A" class="action-btn">
                  Reply to ${validatedData.fullName}
                </a>
              </div>

              <div class="footer">
                <p>This application was submitted via the Kids Learn AI careers page.</p>
                <p>Submitted at: ${new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })}</p>
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
          error: "Failed to submit application. Please try again later.",
        },
        { status: 500 }
      );
    }

    console.log("Application email sent successfully:", emailResult.data);

    return NextResponse.json(
      {
        success: true,
        message: "Your application has been submitted successfully!",
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

    console.error("Application form error:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
};

