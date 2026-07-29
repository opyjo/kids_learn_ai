import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleShell } from "@/components/blog/article-shell";
import { ExpandedArticleContent } from "@/components/blog/expanded-article-content";
import { expandedArticles } from "@/lib/blog/expanded-articles";
import { publicMetadata } from "@/lib/seo";

type BlogArticlePageProps = {
	params: Promise<{ slug: string }>;
};

function getArticle(slug: string) {
	return expandedArticles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
	return expandedArticles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
	params,
}: BlogArticlePageProps): Promise<Metadata> {
	const { slug } = await params;
	const article = getArticle(slug);

	if (!article) {
		return {};
	}

	return publicMetadata({
		title: `${article.title} | Kids Learn AI`,
		description: article.description,
		path: `/blog/${article.slug}`,
		type: "article",
	});
}

export default async function BlogArticlePage({
	params,
}: BlogArticlePageProps) {
	const { slug } = await params;
	const article = getArticle(slug);

	if (!article) {
		notFound();
	}

	return (
		<ArticleShell
			category={article.category}
			slug={article.slug}
			title={article.title}
			description={article.description}
			intro={article.intro}
			datePublished={article.publishedAt}
			dateModified={article.updatedAt}
			readingTime={article.readingTime}
			takeaways={article.takeaways}
		>
			<ExpandedArticleContent article={article} />
		</ArticleShell>
	);
}
