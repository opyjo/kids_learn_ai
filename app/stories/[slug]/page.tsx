import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layouts/main-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { StoryReader } from "@/components/stories/story-reader";
import {
	absoluteUrl,
	ORGANIZATION_AUTHOR,
	publicMetadata,
	SITE_NAME,
} from "@/lib/seo";
import { getPublishedStory, publishedStories } from "@/lib/story-club";

type StoryPageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return publishedStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
	params,
}: StoryPageProps): Promise<Metadata> {
	const { slug } = await params;
	const story = getPublishedStory(slug);
	if (!story) return {};

	return publicMetadata({
		title: `${story.title} | AI Story Club`,
		description: story.description,
		path: `/stories/${story.slug}`,
		type: "article",
	});
}

export default async function StoryPage({ params }: StoryPageProps) {
	const { slug } = await params;
	const story = getPublishedStory(slug);
	if (!story) notFound();

	return (
		<MainLayout>
			<JsonLd
				data={{
					"@context": "https://schema.org",
					"@type": "Article",
					headline: story.title,
					description: story.description,
					image: absoluteUrl(story.coverImage),
					datePublished: story.releaseDate,
					isPartOf: {
						"@type": "CreativeWorkSeries",
						name: `AI Story Club — ${story.season}`,
					},
					author: {
						"@type": "Organization",
						name: ORGANIZATION_AUTHOR,
					},
					publisher: {
						"@type": "Organization",
						name: SITE_NAME,
						url: absoluteUrl("/"),
					},
					mainEntityOfPage: absoluteUrl(`/stories/${story.slug}`),
				}}
			/>
			<StoryReader story={story} />
		</MainLayout>
	);
}
