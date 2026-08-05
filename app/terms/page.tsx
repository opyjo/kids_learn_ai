import Link from "next/link";
import { Footer } from "@/components/layouts/footer";
import { SiteHeader } from "@/components/site-header";
import { publicMetadata } from "@/lib/seo";

export const metadata = publicMetadata({
	title: "Terms of Service - Kids Learn AI",
	description:
		"The terms that apply to Kids Learn AI lessons, live classes, and learning tools.",
	path: "/terms",
});

export default function TermsOfServicePage() {
	return (
		<div className="min-h-screen bg-background">
			<SiteHeader />
			<main className="container mx-auto px-4 py-12 max-w-3xl">
				<h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
				<p className="text-sm text-muted-foreground mb-10">
					Last updated: August 5, 2026
				</p>

				<div className="space-y-8 text-foreground leading-relaxed">
					<section className="space-y-3">
						<h2 className="text-xl font-semibold">1. About these terms</h2>
						<p>
							Kids Learn AI is an Ontario-registered business name operated by
							Opyjo Consulting Inc. These terms form an agreement between Opyjo
							Consulting Inc. and the parent or legal guardian who creates an
							account, enrolls a child, purchases a program, or permits a child
							to use the service.
						</p>
						<p>
							A child may use the service only with the permission and
							supervision of a parent or legal guardian. The parent or guardian
							must review and accept these terms on the child’s behalf.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">2. The service</h2>
						<p>
							Kids Learn AI provides online coding and AI-literacy lessons, live
							classes, projects, quizzes, interactive labs, and AI-assisted
							learning tools. Specific program dates, class times, duration,
							included services, technical requirements, and prices are provided
							on the enrollment or pricing page and in the enrollment
							confirmation.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">
							3. Parent and child accounts
						</h2>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								A parent or legal guardian must create and manage the parent
								account and may create a separate login for their child.
							</li>
							<li>
								Account information must be accurate, and passwords must be kept
								confidential.
							</li>
							<li>
								Parents are responsible for supervising their child’s use and
								for activity under family accounts, except where caused by our
								own failure to use reasonable safeguards.
							</li>
							<li>
								Tell us promptly if an account may have been accessed without
								permission.
							</li>
						</ul>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">4. Enrollment and payment</h2>
						<p>
							Prices are shown in Canadian dollars unless stated otherwise. The
							parent or guardian must review the program description, total
							price, applicable taxes, schedule, technical requirements, and any
							program-specific cancellation or refund terms before paying.
							Enrollment is confirmed only when we send written confirmation.
						</p>
						<p>
							Once the first paid class in a program has begun, program fees are
							non-refundable if a student withdraws, misses a class, cannot
							attend, or chooses not to use the remaining services. If Kids
							Learn AI cancels a class, we will provide a rescheduled class or
							reasonable replacement. If we cancel the remainder of a program
							and do not provide a replacement, we will refund the amount paid
							for the classes we do not provide. Nothing in these terms removes
							a cancellation, refund, or other consumer right that cannot
							legally be waived.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">5. Live classes</h2>
						<p>
							A stable internet connection, compatible device, microphone, and
							webcam may be required for live participation. Kids Learn AI does
							not record live classes. A participant must not record,
							photograph, livestream, or capture another participant, the
							instructor, or the class without our prior permission and the
							prior permission of the affected parent or guardian.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">6. Conduct and safety</h2>
						<ul className="list-disc pl-6 space-y-2">
							<li>
								Be respectful. Bullying, harassment, and discrimination are
								prohibited.
							</li>
							<li>
								Do not share addresses, passwords, school schedules, private
								contact information, or other sensitive information.
							</li>
							<li>
								Do not submit unlawful, harmful, hateful, sexually explicit, or
								otherwise child-inappropriate material.
							</li>
							<li>
								Do not interfere with, overload, reverse engineer, or gain
								unauthorized access to the service or another user’s account.
							</li>
						</ul>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">7. Student work</h2>
						<p>
							Students keep ownership of the original code, writing, drawings,
							and projects they create. The parent or guardian gives us a
							limited, non-exclusive permission to host, process, display within
							the family account or class, back up, and review that work only as
							needed to provide the program, feedback, safety, and support.
							Public or promotional use requires separate permission.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">8. AI features</h2>
						<p>
							The AI tutor and labs are educational aids. AI output can be
							incomplete, inaccurate, or inappropriate despite our safeguards.
							It is not professional advice and should be reviewed critically.
							Users must not enter sensitive personal information into an AI
							feature. We may limit an AI feature to protect students or the
							service.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">9. Third-party services</h2>
						<p>
							Some features rely on third-party services, including live-class,
							authentication, AI, hosting, email, and optional coding tools.
							Their own terms may also apply when a family creates or uses an
							account directly with them. Our handling of personal information
							is described in our{" "}
							<Link href="/privacy" className="text-primary underline">
								Privacy Policy
							</Link>
							.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">10. Our content</h2>
						<p>
							The platform, curriculum, branding, and materials supplied by Kids
							Learn AI are owned by us or used under licence. Families may use
							them for personal, non-commercial participation in the program.
							They may not be sold, publicly redistributed, or used to create a
							competing service without permission.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">
							11. Suspension and ending use
						</h2>
						<p>
							We may restrict or suspend access where reasonably necessary to
							protect a child, another participant, or the service, or where
							these terms are materially breached. A parent may stop using the
							service and request account deletion by contacting us. Any refund
							rights are governed by the enrollment terms and applicable law.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">
							12. Availability and liability
						</h2>
						<p>
							We use reasonable care in providing the service but cannot promise
							uninterrupted availability or error-free educational or AI output.
							To the extent permitted by law, we are not responsible for
							indirect or consequential loss. Nothing in these terms excludes a
							statutory warranty, consumer right, or liability that cannot
							legally be excluded or limited.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">13. Governing law</h2>
						<p>
							These terms are governed by the laws of Ontario and the applicable
							laws of Canada. This does not remove mandatory rights available to
							a consumer under the law that applies where they live.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">14. Changes</h2>
						<p>
							We may update these terms for future use of the service. If a
							change is material, we will provide reasonable notice and obtain
							any new agreement required by law. Changes do not retroactively
							alter a confirmed purchase unless the parent agrees or the law
							requires it.
						</p>
					</section>

					<section className="space-y-3">
						<h2 className="text-xl font-semibold">15. Contact</h2>
						<p>
							Questions about these terms may be sent to Opyjo Consulting Inc.,
							operating as Kids Learn AI, at{" "}
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
				</div>
			</main>
			<Footer />
		</div>
	);
}
