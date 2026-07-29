import type { Metadata } from "next";

export const SITE_NAME = "Kids Learn AI";
// Canonical search URLs intentionally stay fixed even when local or preview
// environments use a different callback/origin URL.
export const SITE_URL = "https://www.kidslearnai.ca";
export const SITE_DESCRIPTION =
	"Kids Learn AI offers live online Python and AI classes for kids ages 9-13 through hands-on projects and supportive instructors.";
export const ORGANIZATION_AUTHOR = "Kids Learn AI Education Team";
export const SOCIAL_IMAGE_PATH = "/opengraph-image";

type PublicMetadataOptions = {
	title: string;
	description: string;
	path: string;
	type?: "website" | "article";
	noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
	return new URL(path, `${SITE_URL}/`).toString();
}

export function publicMetadata({
	title,
	description,
	path,
	type = "website",
	noIndex = false,
}: PublicMetadataOptions): Metadata {
	const canonical = absoluteUrl(path);

	return {
		title,
		description,
		authors: [{ name: ORGANIZATION_AUTHOR, url: absoluteUrl("/about") }],
		creator: ORGANIZATION_AUTHOR,
		publisher: SITE_NAME,
		alternates: { canonical },
		robots: noIndex
			? { index: false, follow: false }
			: { index: true, follow: true },
		openGraph: {
			title,
			description,
			type,
			url: canonical,
			siteName: SITE_NAME,
			images: [
				{
					url: absoluteUrl(SOCIAL_IMAGE_PATH),
					width: 1200,
					height: 630,
					alt: "Kids Learn AI — live Python and AI classes for kids ages 9 to 13",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [absoluteUrl(SOCIAL_IMAGE_PATH)],
		},
	};
}

export const privateMetadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		noarchive: true,
		nosnippet: true,
	},
};
