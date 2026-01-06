import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const inquirySchema = z.object({
	parentName: z
		.string()
		.trim()
		.min(1, "Parent name is required")
		.min(2, "Name must be at least 2 characters")
		.max(100, "Name must not exceed 100 characters"),
	parentEmail: z
		.string()
		.trim()
		.min(1, "Email is required")
		.email("Please enter a valid email address"),
	childName: z
		.string()
		.trim()
		.min(1, "Child's name is required")
		.min(2, "Name must be at least 2 characters")
		.max(100, "Name must not exceed 100 characters"),
	ageGroup: z.enum(["9-10", "11-13"], {
		required_error: "Please select an age group",
	}),
	experience: z.enum(["none", "some", "comfortable"], {
		required_error: "Please select experience level",
	}),
	howHeard: z.string().trim().max(200).optional(),
	questions: z.string().trim().max(1000).optional(),
});

// Rate limiting map
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

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

const getExperienceLabel = (experience: string): string => {
	switch (experience) {
		case "none":
			return "No prior experience";
		case "some":
			return "Some experience (Scratch, etc.)";
		case "comfortable":
			return "Comfortable with basics";
		default:
			return experience;
	}
};

const getAgeGroupDetails = (
	ageGroup: string,
): { label: string; day: string } => {
	switch (ageGroup) {
		case "9-10":
			return { label: "Ages 9-10", day: "Mondays" };
		case "11-13":
			return { label: "Ages 11-13", day: "Wednesdays" };
		default:
			return { label: ageGroup, day: "TBD" };
	}
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
				{ status: 429 },
			);
		}

		// Parse and validate request body
		const body = await request.json();
		const validatedData = inquirySchema.parse(body);

		const ageGroupDetails = getAgeGroupDetails(validatedData.ageGroup);
		const experienceLabel = getExperienceLabel(validatedData.experience);

		// Save inquiry to database using anon key (RLS allows public inserts)
		const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
		const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

		if (supabaseUrl && supabaseAnonKey) {
			const { createClient } = await import("@supabase/supabase-js");
			const supabase = createClient(supabaseUrl, supabaseAnonKey);

			const { error: dbError } = await supabase.from("inquiries").insert({
				parent_name: validatedData.parentName,
				parent_email: validatedData.parentEmail,
				child_name: validatedData.childName,
				age_group: validatedData.ageGroup,
				experience: validatedData.experience,
				how_heard: validatedData.howHeard || null,
				questions: validatedData.questions || null,
			});

			if (dbError) {
				console.error("Database error saving inquiry:", dbError);
				// Continue to send email even if DB save fails
			}
		} else {
			console.error(
				"Missing Supabase environment variables - skipping database save",
			);
		}

		// Send email via Resend
		const emailResult = await resend.emails.send({
			from: "Kids Learn AI <hello@kidslearnai.ca>",
			to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@kidslearnai.ca",
			replyTo: validatedData.parentEmail,
			subject: `🎓 New Free Trial Inquiry: ${validatedData.childName} (${ageGroupDetails.label})`,
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
                background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
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
                color: #6366f1;
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
              .highlight {
                background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 700;
              }
              .schedule-box {
                background: #f0fdf4;
                border: 2px solid #22c55e;
                border-radius: 8px;
                padding: 15px;
                text-align: center;
              }
              .schedule-day {
                font-size: 24px;
                font-weight: 700;
                color: #16a34a;
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
                background: #6366f1;
                color: white;
                padding: 12px 24px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                margin-top: 15px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="badge">🎯 FREE TRIAL REQUEST</div>
              <h1 style="margin: 0; font-size: 24px;">New Course Inquiry</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">A parent is interested in booking a free trial class</p>
            </div>
            <div class="content">
              <!-- Parent Info -->
              <div class="section">
                <div class="section-title">👤 Parent Information</div>
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${validatedData.parentName}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">
                    <a href="mailto:${validatedData.parentEmail}">${
											validatedData.parentEmail
										}</a>
                  </div>
                </div>
              </div>

              <!-- Child Info -->
              <div class="section">
                <div class="section-title">👦 Child Information</div>
                <div class="field">
                  <div class="label">Child's Name</div>
                  <div class="value" style="font-size: 20px; font-weight: 600;">${
										validatedData.childName
									}</div>
                </div>
                <div class="field">
                  <div class="label">Age Group</div>
                  <div class="value">${ageGroupDetails.label}</div>
                </div>
                <div class="field">
                  <div class="label">Coding Experience</div>
                  <div class="value">${experienceLabel}</div>
                </div>
              </div>

              <!-- Schedule -->
              <div class="schedule-box">
                <div style="font-size: 14px; color: #166534; margin-bottom: 5px;">📅 Recommended Class Day</div>
                <div class="schedule-day">${ageGroupDetails.day}</div>
                <div style="font-size: 12px; color: #166534; margin-top: 5px;">${
									ageGroupDetails.label
								} classes</div>
              </div>

              ${
								validatedData.howHeard
									? `
              <!-- How They Heard -->
              <div class="section">
                <div class="section-title">📣 How They Found Us</div>
                <div class="value">${validatedData.howHeard}</div>
              </div>
              `
									: ""
							}

              ${
								validatedData.questions
									? `
              <!-- Questions -->
              <div class="section">
                <div class="section-title">❓ Questions / Comments</div>
                <div class="value" style="white-space: pre-wrap;">${validatedData.questions}</div>
              </div>
              `
									: ""
							}

              <!-- Action -->
              <div style="text-align: center; margin-top: 20px;">
                <a href="mailto:${
									validatedData.parentEmail
								}?subject=Your Free Trial Class at Kids Learn AI&body=Hi ${
									validatedData.parentName
								},%0D%0A%0D%0AThank you for your interest in our Python %26 AI classes for ${
									validatedData.childName
								}!%0D%0A%0D%0A" class="action-btn">
                  Reply to ${validatedData.parentName}
                </a>
              </div>

              <div class="footer">
                <p>This inquiry was submitted via the Kids Learn AI website.</p>
                <p>Submitted at: ${new Date().toLocaleString("en-CA", {
									timeZone: "America/Toronto",
								})}</p>
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
					error: "Failed to send inquiry. Please try again later.",
				},
				{ status: 500 },
			);
		}

		console.log("Inquiry email sent successfully:", emailResult.data);

		// Send confirmation email to parent
		const parentEmailResult = await resend.emails.send({
			from: "Kids Learn AI <hello@kidslearnai.ca>",
			to: validatedData.parentEmail,
			subject: `🎉 Free Trial Confirmed - ${validatedData.childName} is on the list!`,
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
                background-color: #f9fafb;
              }
              .container {
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
              }
              .header-badge {
                background: rgba(255,255,255,0.2);
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                display: inline-block;
                margin-bottom: 15px;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
              }
              .header p {
                margin: 10px 0 0 0;
                opacity: 0.9;
                font-size: 16px;
              }
              .content {
                padding: 30px;
              }
              .greeting {
                font-size: 18px;
                margin-bottom: 20px;
              }
              .details-box {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
              }
              .details-title {
                font-weight: 600;
                color: #6366f1;
                margin-bottom: 15px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .detail-row {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                border-bottom: 1px solid #e2e8f0;
              }
              .detail-row:last-child {
                border-bottom: none;
              }
              .detail-label {
                color: #64748b;
                font-size: 14px;
              }
              .detail-value {
                color: #1e293b;
                font-weight: 600;
                font-size: 14px;
              }
              .next-steps {
                background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
                border: 2px solid #22c55e;
                border-radius: 8px;
                padding: 20px;
                margin: 25px 0;
              }
              .next-steps-title {
                font-weight: 700;
                color: #166534;
                margin-bottom: 15px;
                font-size: 16px;
              }
              .step {
                display: flex;
                align-items: flex-start;
                margin-bottom: 12px;
              }
              .step:last-child {
                margin-bottom: 0;
              }
              .step-number {
                background: #22c55e;
                color: white;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 700;
                margin-right: 12px;
                flex-shrink: 0;
              }
              .step-text {
                color: #166534;
                font-size: 14px;
                line-height: 1.5;
              }
              .trial-info {
                background: #faf5ff;
                border: 1px solid #e9d5ff;
                border-radius: 8px;
                padding: 20px;
                margin: 25px 0;
              }
              .trial-info-title {
                font-weight: 600;
                color: #7c3aed;
                margin-bottom: 12px;
                font-size: 14px;
              }
              .trial-info ul {
                margin: 0;
                padding-left: 20px;
                color: #6b21a8;
              }
              .trial-info li {
                margin-bottom: 8px;
                font-size: 14px;
              }
              .contact-box {
                text-align: center;
                padding: 20px;
                background: #f8fafc;
                border-radius: 8px;
                margin-top: 25px;
              }
              .contact-box p {
                margin: 0 0 10px 0;
                color: #64748b;
                font-size: 14px;
              }
              .contact-box a {
                color: #6366f1;
                text-decoration: none;
                font-weight: 600;
              }
              .footer {
                text-align: center;
                padding: 25px 30px;
                background: #f8fafc;
                border-top: 1px solid #e2e8f0;
              }
              .footer p {
                margin: 0;
                color: #64748b;
                font-size: 12px;
              }
              .footer a {
                color: #6366f1;
                text-decoration: none;
              }
              .signature {
                margin-top: 25px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
              }
              .signature p {
                margin: 5px 0;
                color: #475569;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="header-badge">🎉 YOU'RE ALL SET!</div>
                <h1>Free Trial Request Received</h1>
                <p>We're excited to meet ${validatedData.childName}!</p>
              </div>
              
              <div class="content">
                <p class="greeting">Hi ${validatedData.parentName},</p>
                
                <p>Thank you for your interest in Kids Learn AI! We've received your free trial request for <strong>${validatedData.childName}</strong> and we can't wait to start their coding journey.</p>
                
                <div class="details-box">
                  <div class="details-title">📋 Your Details</div>
                  <div class="detail-row">
                    <span class="detail-label">Child's Name</span>
                    <span class="detail-value">${validatedData.childName}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Age Group</span>
                    <span class="detail-value">${ageGroupDetails.label}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Class Day</span>
                    <span class="detail-value">${ageGroupDetails.day}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Experience Level</span>
                    <span class="detail-value">${experienceLabel}</span>
                  </div>
                </div>
                
                <div class="next-steps">
                  <div class="next-steps-title">⏰ What Happens Next?</div>
                  <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-text">Our team will contact you within <strong>24 hours</strong></div>
                  </div>
                  <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-text">We'll schedule ${validatedData.childName}'s free trial class</div>
                  </div>
                  <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-text">${validatedData.childName} joins a live online session with other kids</div>
                  </div>
                  <div class="step">
                    <div class="step-number">4</div>
                    <div class="step-text"><strong>No payment required</strong> until you decide to continue</div>
                  </div>
                </div>
                
                <div class="trial-info">
                  <div class="trial-info-title">💡 What to Expect in the Trial</div>
                  <ul>
                    <li>1-hour live online class via Zoom</li>
                    <li>Small group (max 6 kids) with a real instructor</li>
                    <li>Fun, hands-on introduction to Python coding</li>
                    <li>No prior experience needed!</li>
                  </ul>
                </div>
                
                <div class="contact-box">
                  <p>Have questions before the trial?</p>
                  <p>Just reply to this email or contact us at <a href="mailto:hello@kidslearnai.ca">hello@kidslearnai.ca</a></p>
                </div>
                
                <div class="signature">
                  <p>We can't wait to start ${validatedData.childName}'s coding journey! 🚀</p>
                  <p><strong>Warm regards,</strong></p>
                  <p><strong>The Kids Learn AI Team</strong></p>
                </div>
              </div>
              
              <div class="footer">
                <p><strong>Kids Learn AI</strong> | <a href="https://kidslearnai.ca">kidslearnai.ca</a></p>
                <p>Live Python & AI Classes for Kids Ages 9-13</p>
              </div>
            </div>
          </body>
        </html>
      `,
		});

		if (!parentEmailResult.data) {
			// Log error but don't fail the request - admin was notified and inquiry was saved
			console.error(
				"Parent confirmation email error:",
				parentEmailResult.error,
			);
		} else {
			console.log(
				"Parent confirmation email sent successfully:",
				parentEmailResult.data,
			);
		}

		return NextResponse.json(
			{
				success: true,
				message: "Your inquiry has been submitted successfully!",
			},
			{ status: 200 },
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
				{ status: 400 },
			);
		}

		console.error("Inquiry form error:", error);
		return NextResponse.json(
			{
				error: "An unexpected error occurred. Please try again later.",
			},
			{ status: 500 },
		);
	}
};
