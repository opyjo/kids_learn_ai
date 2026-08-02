import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { CampaignAttributionCapture } from "@/components/analytics/campaign-attribution-capture";
import { GoogleAnalyticsEvents } from "@/components/analytics/google-analytics-events";
import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: "Kids Learn AI — Python Foundations for Future Innovators",
	description: SITE_DESCRIPTION,
	generator: "Kids Learn AI",
	openGraph: {
		siteName: SITE_NAME,
		type: "website",
	},
	twitter: { card: "summary_large_image" },
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "48x48" },
			{ url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
			{ url: "/favicon.svg", type: "image/svg+xml" },
		],
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/manifest.webmanifest",
	verification: {
		google: process.env.GOOGLE_SITE_VERIFICATION,
		other: process.env.BING_SITE_VERIFICATION
			? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
			: undefined,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
				<CampaignAttributionCapture />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
				<JsonLd
					data={{
						"@context": "https://schema.org",
						"@type": "EducationalOrganization",
						"@id": `${SITE_URL}/#organization`,
						name: SITE_NAME,
						url: absoluteUrl("/"),
						logo: absoluteUrl("/web-app-manifest-512x512.png"),
						email: "hello@kidslearnai.ca",
						description: SITE_DESCRIPTION,
						areaServed: "Canada",
					}}
				/>
				<JsonLd
					data={{
						"@context": "https://schema.org",
						"@type": "WebSite",
						"@id": `${SITE_URL}/#website`,
						name: SITE_NAME,
						url: absoluteUrl("/"),
						publisher: { "@id": `${SITE_URL}/#organization` },
						inLanguage: "en-CA",
					}}
				/>
				<Analytics />
				<SpeedInsights />
				{googleAnalyticsId ? (
					<>
						<GoogleAnalytics gaId={googleAnalyticsId} />
						<GoogleAnalyticsEvents />
					</>
				) : null}
			</body>
		</html>
	);
}
