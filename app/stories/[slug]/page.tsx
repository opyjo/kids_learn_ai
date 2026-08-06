import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layouts/main-layout";
import { StoryReader } from "@/components/stories/story-reader";
import { publicMetadata } from "@/lib/seo";
import { getPublishedStory, storyIssues } from "@/lib/story-club";

type StoryPageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return storyIssues
		.filter((story) => story.status === "published")
		.map((story) => ({ slug: story.slug }));
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
			<StoryReader story={story} />
		</MainLayout>
	);
}
