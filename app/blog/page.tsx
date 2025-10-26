import Link from "next/link";
import { MainLayout } from "@/components/layouts/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    slug: "why-learning-ai-young-matters",
    title: "9 Reasons Kids Should Learn AI Concepts Early (and How Python Helps)",
    description:
      "A deep dive into why starting with Python fundamentals unlocks confidence, creativity, and critical thinking for tomorrow's AI-powered world.",
    readingTime: "8 minute read",
    date: "February 2025",
  },
  {
    slug: "black-youth-stem-canada",
    title: "Closing the Gap: Supporting Black Youth in Canadian STEM",
    description:
      "Exploring the data behind underrepresentation, the barriers Black youth face, and practical steps communities can take to change the story.",
    readingTime: "9 minute read",
    date: "February 2025",
  },
];

export default function BlogPage() {
  return (
    <MainLayout>
      <section className="container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
            Blog
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Stories & Insights from Kids Learn AI
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Research-backed ideas, community spotlights, and practical guidance
            for helping every child build a strong Python and AI foundation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-xl transition-all rounded-2xl border-2">
              <CardHeader>
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                  {post.date}
                </Badge>
                <CardTitle className="text-2xl leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.readingTime}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read the full article &rarr;
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
