import Link from "next/link";
import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
	title: "Privacy Policy - Kids Learn AI",
	description:
		"How Kids Learn AI collects, uses, and protects information about students and families.",
};

export default function PrivacyPolicyPage() {
	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />
			<main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
				<h1 className="mb-2 text-3xl font-semibold tracking-tight">
					Privacy policy
				</h1>
				<p className="text-sm text-muted-foreground mb-10">
					Last updated: July 5, 2026
				</p>

				<div className="space-y-8 text-foreground leading-relaxed">
					<section className="space-y-3">
						<h2 className="text-xl font-semibold">Our commitment</h2>
						<p>
							Kids Learn AI is a learning platform built for children. We take
							the privacy of young learners seriously and collect only the
							information we need to run our classes and track learning
							progress. We never sell personal information, and we never use
							student data for advertising.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">Information we collect</h2>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								<strong>Account details</strong> — the name and email address
								provided when an account is created. We encourage parents to
								create and manage accounts for younger children.
							</li>
							<li>
								<strong>Learning progress</strong> — lessons completed, project
								submissions, and activity inside our interactive labs, so
								teachers can support each student.
							</li>
							<li>
								<strong>AI tutor conversations</strong> — messages sent to our
								AI helper are processed to generate responses and are filtered
								for age-appropriate content.
							</li>
							<li>
								<strong>Inquiry details</strong> — when a parent or guardian
								submits a free-trial or contact form, we collect the details
								they choose to share so we can respond.
							</li>
						</ul>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">How we use information</h2>
						<ul className="list-disc pl-6 space-y-2">
							<li>To provide lessons, live classes, and feedback.</li>
							<li>To track and share learning progress with the student.</li>
							<li>To respond to questions and support requests.</li>
							<li>To keep the platform safe and prevent misuse.</li>
						</ul>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">Service providers</h2>
						<p>
							We rely on a small number of trusted providers to operate the
							platform: secure database and authentication hosting, AI language
							model providers that power the tutor, email delivery for account
							and inquiry messages, and error monitoring and anonymous usage
							analytics that help us keep the site working well. These providers
							process data only on our behalf.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">Children's privacy</h2>
						<p>
							Our programs are designed for children, and we expect a parent or
							guardian to be involved in enrollment. We do not knowingly collect
							more information from children than is needed to take part in
							lessons. If you believe a child has provided us personal
							information without a parent or guardian's consent, please{" "}
							<Link href="/contact" className="text-primary underline">
								contact us
							</Link>{" "}
							and we will delete it.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">Your choices</h2>
						<p>
							You can update account details in{" "}
							<Link href="/settings" className="text-primary underline">
								Settings
							</Link>
							. You may request a copy of, or the deletion of, your family's
							data at any time by{" "}
							<Link href="/contact" className="text-primary underline">
								contacting us
							</Link>
							.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">Changes to this policy</h2>
						<p>
							If we make material changes to this policy, we will update this
							page and note the new date above.
						</p>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}
