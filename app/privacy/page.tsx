import Link from "next/link";
import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";
import { publicMetadata } from "@/lib/seo";

export const metadata = publicMetadata({
	title: "Privacy Policy - Kids Learn AI",
	description:
		"How Kids Learn AI collects, uses, shares, retains, and protects information about students and families.",
	path: "/privacy",
});

export default function PrivacyPolicyPage() {
	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />
			<main className="container mx-auto px-4 py-12 max-w-3xl">
				<h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
				<p className="text-sm text-muted-foreground mb-10">
					Last updated: August 5, 2026
				</p>

				<div className="space-y-8 text-foreground leading-relaxed">
					<section className="space-y-3">
						<h2 className="text-xl font-semibold">1. Who we are</h2>
						<p>
							Kids Learn AI is an Ontario-registered business name operated by
							Opyjo Consulting Inc. In this policy, “Kids Learn AI,” “we,” “us,”
							and “our” refer to Opyjo Consulting Inc.
						</p>
						<p>
							This policy applies to our website, parent and child accounts,
							interactive learning tools, inquiries, and live online classes.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">2. Our commitment</h2>
						<p>
							We collect only information reasonably needed to provide and
							protect our learning services. We do not sell personal
							information, use student information for targeted advertising, or
							permit advertising profiles to be built from a child’s learning
							activity.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">3. Information we collect</h2>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								<strong>Parent and account details</strong> — a parent or
								guardian’s name, email address, account credentials, and the
								child profile details needed to provide the program.
							</li>
							<li>
								<strong>Enrollment and inquiry details</strong> — parent contact
								information, a child’s first name, age range, experience level,
								scheduling preferences, and information a parent chooses to
								include in a message.
							</li>
							<li>
								<strong>Learning information</strong> — lessons completed, quiz
								responses, scores, project submissions, lab interactions,
								progress, and feedback.
							</li>
							<li>
								<strong>AI tutor information</strong> — messages a student sends
								to the tutor, recent conversation context, and relevant lesson
								context used to generate and safety-check a response. Tutor
								threads may also be stored locally in the user’s browser until
								they are cleared.
							</li>
							<li>
								<strong>Technical and security information</strong> — IP
								address, browser and device information, timestamps, error
								information, and activity needed to secure, troubleshoot, and
								prevent misuse of the service.
							</li>
							<li>
								<strong>Website and campaign information</strong> — pages
								visited, general website usage, referring page, and campaign
								parameters such as source or campaign name. First-touch campaign
								details may be kept in the browser for up to 90 days.
							</li>
							<li>
								<strong>Job application information</strong> — contact details,
								resume, education, experience, availability, and other
								information voluntarily provided by an applicant.
							</li>
						</ul>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">4. Live classes</h2>
						<p>
							Live online classes use video-conferencing technology. A
							participant’s display name, live voice, video if enabled, screen
							shares, and class chat may be visible to the instructor and other
							class participants during the session. Kids Learn AI does not
							record live classes. Participants must not record or capture a
							class without our permission and the prior permission of affected
							parents or guardians.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">5. How we use information</h2>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								Provide accounts, lessons, live classes, feedback, and support.
							</li>
							<li>Personalize learning and show progress to the family.</li>
							<li>
								Operate and safety-check the AI tutor and interactive labs.
							</li>
							<li>Respond to inquiries, applications, and service messages.</li>
							<li>Secure, troubleshoot, maintain, and improve the service.</li>
							<li>
								Understand how families find and use our public website, where
								permitted by applicable privacy rules.
							</li>
							<li>Meet accounting, legal, and regulatory obligations.</li>
						</ul>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">
							6. Service providers and international processing
						</h2>
						<p>
							We use service providers to operate the program. Depending on the
							feature used, these may include Supabase for accounts and data
							hosting, Vercel for website hosting and site analytics, Anthropic
							for AI tutor processing and safety checks, Resend for email,
							Sentry for error monitoring, Google for sign-in and website
							analytics, and Zoom for live classes. A family may also choose to
							use an external coding service such as Trinket.
						</p>
						<p>
							These providers receive only the information needed for their
							function. They may process information in Canada, the United
							States, or other countries where they or their subprocessors
							operate. Information processed outside Canada is subject to the
							laws of that country. We may also disclose information where
							required by law or reasonably necessary to protect a child or the
							security of the service.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">7. Children and consent</h2>
						<p>
							Our services are designed for children, but enrollment and parent
							account creation must be completed by a parent or legal guardian.
							The parent or guardian is responsible for reviewing this policy
							with the child in an age-appropriate way and supervising the
							child’s use of the service.
						</p>
						<p>
							We will not use child information for a research study, public
							promotion, or materially different purpose without giving the
							parent or guardian a separate notice and obtaining any additional
							consent required by law. If you believe a child has provided
							information without appropriate permission, please contact us so
							we can investigate and delete it where appropriate.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">8. Retention</h2>
						<p>
							We retain personal information only as long as reasonably needed
							for the purposes above, to provide an active account or program,
							and to meet legal, accounting, security, and dispute-resolution
							obligations. Information is then deleted or de-identified. Some
							tutor history remains in the user’s browser until the user clears
							it. A parent may request deletion sooner, subject to records we
							must retain by law.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">9. Safeguards</h2>
						<p>
							We use role-based access controls, authentication, database access
							rules, content-safety controls, and service monitoring designed to
							protect information. No internet service can guarantee absolute
							security. Parents should help children keep passwords private and
							avoid sharing addresses, school schedules, health information, or
							other sensitive details in projects or tutor messages.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">10. Your choices</h2>
						<p>
							Parents and guardians may ask to access or correct family
							information, withdraw consent, or request deletion. You can update
							some account details in{" "}
							<Link href="/settings" className="text-primary underline">
								Settings
							</Link>
							. Withdrawal or deletion may prevent us from continuing to provide
							some services.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">11. Contact us</h2>
						<p>
							Questions, privacy requests, or complaints may be sent to the
							Privacy Officer at Opyjo Consulting Inc., operating as Kids Learn
							AI, by email at{" "}
							<a
								href="mailto:hello@kidslearnai.ca"
								className="text-primary underline"
							>
								hello@kidslearnai.ca
							</a>
							, by phone at{" "}
							<a href="tel:+14377785339" className="text-primary underline">
								(437) 778-5339
							</a>
							, by mail at 82 Bradbury Road, Stoney Creek, Ontario L8J 0E4,
							Canada, or through our{" "}
							<Link href="/contact" className="text-primary underline">
								contact page
							</Link>
							.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">12. Changes</h2>
						<p>
							If we make a material change, we will update this page and the
							date above. Where required, we will notify the parent or guardian
							and request consent before applying a new purpose to existing
							child information.
						</p>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}
