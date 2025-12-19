import { MainLayout } from "@/components/layouts/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const keyTakeaways = [
  {
    title: "Readability like English",
    detail:
      "Python's syntax is remarkably close to plain English, which means kids can spend more time solving problems and less time memorizing complex punctuation rules.",
  },
  {
    title: "Versatility across fields",
    detail:
      "From web development to space exploration and artificial intelligence, Python is used in every major industry, giving kids a tool that grows with them.",
  },
  {
    title: "Huge supportive community",
    detail:
      "With millions of users and endless free resources, Python is the most accessible language for beginners to find help and inspiration.",
  },
];

export default function PythonBestFirstLanguagePage() {
  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
            Coding Basics
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Why Python is the Best First Language for Young Learners
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            When choosing a first programming language for children, the goal isn't just to learn syntax—it's to build a mental model of how computers think. Python stands out as the ideal bridge between curiosity and creation.
          </p>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-semibold">The Power of Readability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In many traditional languages, a simple "Hello World" program requires complex boilerplate code that can be intimidating for a beginner. In Python, it is exactly what you'd expect: <code>print("Hello World")</code>. This low barrier to entry keeps motivation high and allows kids to see immediate results from their effort.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-3 mb-16">
            {keyTakeaways.map((item) => (
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
            <h2 className="text-2xl font-semibold">Focusing on Logic, Not Syntax</h2>
            <p className="text-muted-foreground leading-relaxed">
              When kids are learning to code, we want them to think about "How do I solve this puzzle?" rather than "Where did I forget a semicolon?" Python's use of whitespace and indentation forces good coding habits naturally, making the code easier to read and debug. This focus on logic is exactly what builds the foundation for AI literacy.
            </p>
          </section>

          <section className="bg-secondary/30 rounded-3xl p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-4">From Simple Scripts to AI Models</h2>
            <p className="text-muted-foreground leading-relaxed">
              The real magic of Python is its ceiling. While it's easy enough for a 10-year-old to write their first game, it's powerful enough to run the recommendation algorithms at Netflix or the data processing at NASA. By starting with Python, kids aren't just learning a "toy" language; they are gaining a professional skill that will serve them for years.
            </p>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to start your Python journey?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our curriculum is designed to take kids from their very first line of code to building interactive AI projects. No prior experience is required—just curiosity!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
                href="/signup"
              >
                Sign up for a free trial
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                href="/lessons"
              >
                Browse Python lessons
              </a>
            </div>
          </section>
        </div>
      </article>
    </MainLayout>
  );
}

