import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, ORGANIZATION_AUTHOR, SITE_NAME } from "@/lib/seo";

type ArticleSeoProps = {
	slug: string;
	title: string;
	description: string;
	datePublished: string;
	dateModified?: string;
};

export function ArticleSeo({
	slug,
	title,
	description,
	datePublished,
	dateModified = datePublished,
}: ArticleSeoProps) {
	const articleUrl = absoluteUrl(`/blog/${slug}`);

	return (
		<>
			<JsonLd
				data={{
					"@context": "https://schema.org",
					"@type": "BlogPosting",
					headline: title,
					description,
					url: articleUrl,
					mainEntityOfPage: articleUrl,
					datePublished,
					dateModified,
					author: {
						"@type": "Organization",
						name: ORGANIZATION_AUTHOR,
						url: absoluteUrl("/about"),
					},
					publisher: {
						"@type": "EducationalOrganization",
						name: SITE_NAME,
						url: absoluteUrl("/"),
						logo: {
							"@type": "ImageObject",
							url: absoluteUrl("/web-app-manifest-512x512.png"),
						},
					},
					image: absoluteUrl("/opengraph-image"),
				}}
			/>
			<JsonLd
				data={{
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: absoluteUrl("/"),
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Blog",
							item: absoluteUrl("/blog"),
						},
						{
							"@type": "ListItem",
							position: 3,
							name: title,
							item: articleUrl,
						},
					],
				}}
			/>
		</>
	);
}

export function ArticleByline({
	datePublished,
	dateModified,
	readingTime,
}: {
	datePublished: string;
	dateModified?: string;
	readingTime?: string;
}) {
	return (
		<div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
			<span>
				By{" "}
				<a
					className="font-medium text-foreground hover:underline"
					href="/about"
				>
					{ORGANIZATION_AUTHOR}
				</a>
			</span>
			<span aria-hidden="true">·</span>
			<span>
				Published{" "}
				<time dateTime={datePublished}>
					{new Intl.DateTimeFormat("en-CA", {
						year: "numeric",
						month: "long",
						day: "numeric",
						timeZone: "UTC",
					}).format(new Date(`${datePublished}T12:00:00Z`))}
				</time>
			</span>
			{dateModified && dateModified !== datePublished ? (
				<>
					<span aria-hidden="true">·</span>
					<span>
						Updated{" "}
						<time dateTime={dateModified}>
							{new Intl.DateTimeFormat("en-CA", {
								year: "numeric",
								month: "long",
								day: "numeric",
								timeZone: "UTC",
							}).format(new Date(`${dateModified}T12:00:00Z`))}
						</time>
					</span>
				</>
			) : null}
			{readingTime ? (
				<>
					<span aria-hidden="true">·</span>
					<span>{readingTime}</span>
				</>
			) : null}
		</div>
	);
}
