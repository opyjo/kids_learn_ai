import { MainLayout } from "@/components/layouts/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ethicalPillars = [
  {
    title: "Data is Human",
    detail:
      "AI learns from the data we give it. If that data contains our own biases or mistakes, the AI will repeat them. Understanding this helps kids question 'Who taught this AI?'",
  },
  {
    title: "Transparency Matters",
    detail:
      "AI shouldn't be a 'black box.' Kids should know when they are talking to a bot and understand the simple logic behind why it made a specific suggestion.",
  },
  {
    title: "The Human in the Loop",
    detail:
      "AI is a tool for humans, not a replacement for human judgment. We teach kids that they are always the final 'editor' of anything an AI generates.",
  },
];

export default function TeachingAIEthicsPage() {
  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
            AI Literacy
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Teaching AI Ethics: How to Talk to Kids About Bias and Fairness
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            As AI becomes a constant companion in children's lives, technical skill alone isn't enough. We must also equip them with the ethical compass to navigate a world of algorithmic decisions.
          </p>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold">It's Never Too Early for Ethics</h2>
            <p className="text-muted-foreground leading-relaxed">
              Many parents worry that "ethics" is too abstract for children. However, kids have a naturally strong sense of fairness. By framing AI bias as a "fairness" issue—like a computer that only knows about apples being asked to identify a banana—we can make complex concepts relatable and memorable.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-3 mb-16">
            {ethicalPillars.map((item) => (
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
            <h2 className="text-2xl font-semibold">Spotting Bias in the Wild</h2>
            <p className="text-muted-foreground leading-relaxed">
              We encourage parents to look for "teachable moments" in everyday life. If a voice assistant doesn't understand an accent, or a search engine suggests a specific stereotype, don't ignore it. Ask your child: "Why do you think the computer made that mistake? What was it missing from its training?"
            </p>
          </section>

          <section className="bg-secondary/30 rounded-3xl p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-4">Building Responsible Creators</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Kids Learn AI, we don't just teach kids how to build models; we teach them how to build *better* models. Our students learn to check their datasets for variety and to test their AI with different inputs to ensure it works for everyone. This mindset shift—from user to critical developer—is the core of AI ethics.
            </p>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Join the Conversation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our community of parents and educators is committed to raising the next generation of ethical tech leaders. Want to learn more about our approach?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
                href="/about"
              >
                Learn about our mission
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                href="/contact"
              >
                Get in touch
              </a>
            </div>
          </section>
        </div>
      </article>
    </MainLayout>
  );
}

