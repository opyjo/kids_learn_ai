import { MainLayout } from "@/components/layouts/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const futureTrends = [
  {
    title: "The Personalized Tutor",
    detail:
      "Imagine an AI that knows exactly when you're frustrated and switches to a different explanation style. Personalized learning paths will become the standard, not the exception.",
  },
  {
    title: "Focus on High-Level Creativity",
    detail:
      "As AI handles more 'repetitive' coding or writing tasks, the value of human intuition, design thinking, and emotional intelligence will skyrocket.",
  },
  {
    title: "Global Collaboration",
    detail:
      "Real-time AI translation and collaboration tools will allow students from all over the world to work together on the same Python projects without language barriers.",
  },
];

export default function FutureOfAIInEducationPage() {
  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
            Future Trends
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The Future of AI in Education: Beyond the Homework Bot
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            The initial reaction to AI in schools was often fear of cheating. But as the dust settles, we're seeing a far more exciting reality: AI as a superpower for both teachers and students.
          </p>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold">Moving from 'Answer Machine' to 'Learning Coach'</h2>
            <p className="text-muted-foreground leading-relaxed">
              The true potential of AI isn't in giving students the right answer—it's in asking them the right questions. We are moving toward a world where every student has a tireless, 24/7 coach that helps them deconstruct complex Python errors or brainstorm new app ideas. This shift changes the role of the student from a passive receiver of information to an active manager of their own education.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-3 mb-16">
            {futureTrends.map((item) => (
              <Card key={item.title} className="border-2 rounded-2xl h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold">Teacher Empowerment, Not Replacement</h2>
            <p className="text-muted-foreground leading-relaxed">
              AI will never replace the inspiration and empathy of a great teacher. Instead, it will handle the administrative and repetitive tasks—like grading syntax or generating practice exercises—freeing up educators to focus on mentoring, social-emotional support, and deep project-based learning.
            </p>
          </section>

          <section className="bg-secondary/30 rounded-3xl p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-4">Preparing for the 2030 Workplace</h2>
            <p className="text-muted-foreground leading-relaxed">
              The students of today will enter a workforce where 'AI collaboration' is a standard job requirement. By starting with Python and AI concepts now, they aren't just learning how to use a specific software—they are learning the language of the future economy.
            </p>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Get Ahead of the Curve
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Don't wait for the future to happen—help your child build it. Explore our AI-integrated curriculum and see how we're preparing students for tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
                href="/lessons"
              >
                Explore our lessons
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                href="/pricing"
              >
                View membership plans
              </a>
            </div>
          </section>
        </div>
      </article>
    </MainLayout>
  );
}

