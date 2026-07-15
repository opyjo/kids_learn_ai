import Link from "next/link";
import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
	title: "Terms of Service - Kids Learn AI",
	description:
		"The terms that apply when you use Kids Learn AI's lessons, live classes, and learning tools.",
};

export default function TermsOfServicePage() {
	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />
			<main className="container mx-auto px-4 py-12 max-w-3xl">
				<h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
				<p className="text-sm text-muted-foreground mb-10">
					Last updated: July 5, 2026
				</p>

				<div className="space-y-8 text-foreground leading-relaxed">
					<section className="space-y-3">
						<h2 className="text-xl font-semibold">1. About Kids Learn AI</h2>
						<p>
							Kids Learn AI provides online coding and AI-literacy lessons, live
							classes, and interactive learning tools for children. By creating
							an account or using the site, you agree to these terms. If you are
							under 18, a parent or guardian must review and agree to these
							terms on your behalf.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">2. Accounts</h2>
						<p>
							You are responsible for keeping your account password safe and for
							the activity that happens under your account. Parents and
							guardians are responsible for supervising their child's use of the
							platform. Please tell us right away if you think an account has
							been accessed without permission.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">3. Enrollment and payment</h2>
						<p>
							Some courses require enrollment. Enrollment details, pricing, and
							payment instructions are provided during sign-up or on our{" "}
							<Link href="/pricing" className="text-primary underline">
								pricing page
							</Link>
							. Free-trial lessons are offered as marked and may change over
							time.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">4. Acceptable use</h2>
						<ul className="list-disc pl-6 space-y-2">
							<li>Be kind. Do not use the platform to bully or harass.</li>
							<li>
								Do not attempt to break, overload, or gain unauthorized access
								to the platform or other students' accounts.
							</li>
							<li>
								Do not submit content that is harmful, hateful, or inappropriate
								for children.
							</li>
						</ul>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">5. Student work</h2>
						<p>
							Code and projects created by students belong to the student. By
							submitting work for review, you give us permission to view and
							provide feedback on it as part of the learning program.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">6. AI features</h2>
						<p>
							Our AI tutor and labs are learning aids. They can make mistakes —
							that's part of what we teach! AI responses are filtered for
							age-appropriate content, but they are generated automatically and
							should not be treated as professional advice.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">7. Termination</h2>
						<p>
							We may suspend or close accounts that break these terms. You may
							stop using the platform and ask us to delete your account at any
							time by{" "}
							<Link href="/contact" className="text-primary underline">
								contacting us
							</Link>
							.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">8. Disclaimers</h2>
						<p>
							The platform is provided "as is." We work hard to keep it
							available and accurate, but we do not guarantee uninterrupted
							service. To the fullest extent permitted by law, Kids Learn AI is
							not liable for indirect or consequential damages arising from use
							of the platform.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">9. Changes to these terms</h2>
						<p>
							We may update these terms from time to time. If we make material
							changes, we will update this page and note the new date above.
							Continued use of the platform after changes means you accept the
							updated terms.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">10. Contact</h2>
						<p>
							Questions about these terms? Please{" "}
							<Link href="/contact" className="text-primary underline">
								get in touch
							</Link>
							.
						</p>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}
