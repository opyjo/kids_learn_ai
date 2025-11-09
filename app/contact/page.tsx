import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact/contact-form";
import { Footer } from "@/components/layouts/footer";
import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Contact Us - Kids Learn AI",
  description:
    "Get in touch with Kids Learn AI. We're here to help answer your questions about our Python and AI learning programs for kids.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <SiteHeader />
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            Get in Touch
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs? We'd love to hear from you. Send us
            a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Form */}
          <div className="md:col-span-3">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you shortly.
                </p>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Additional Info Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-white/80">•</span>
                    <span>Questions about our curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/80">•</span>
                    <span>Enrollment inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/80">•</span>
                    <span>Technical support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/80">•</span>
                    <span>Partnership opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/80">•</span>
                    <span>General feedback</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <p className="text-gray-600 mb-4">
                  Before reaching out, check if your question is already answered in
                  our FAQ section.
                </p>
                <a
                  href="/faq"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Visit FAQ
                  <span className="ml-1">→</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-orange-50 to-pink-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Quick Response Tips</h3>
                <p className="text-gray-600 text-sm">
                  To help us respond faster, please include:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Your child's age (if relevant)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Specific program interest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Any technical details</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:hello@kidslearnai.ca"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              hello@kidslearnai.ca
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

