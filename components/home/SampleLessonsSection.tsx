import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

const SampleLessonsSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
          Try It Out
        </Badge>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Start with These Fun Lessons
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Get a taste of what you'll learn in our interactive Python courses
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 hover:border-primary/50 overflow-hidden group">
          <div className="h-2 bg-gradient-to-r from-primary to-primary/60"></div>
          <CardHeader>
            <div className="flex items-center justify-between mb-3">
              <Badge
                variant="secondary"
                className="rounded-full bg-primary/10 text-primary"
              >
                Lesson 1
              </Badge>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={`l1-${i}`}
                    className="h-4 w-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
            <CardTitle className="text-2xl">Hello, World! 👋</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-6 text-base leading-relaxed">
              Your first Python program! Learn how to display messages and start
              your amazing coding journey.
            </CardDescription>
            <div className="bg-secondary/50 p-4 rounded-xl font-mono text-sm border-2 border-border group-hover:border-primary/30 transition-colors">
              <div className="text-accent">print</div>
              <div className="text-foreground">("Hello, World! 🌍")</div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>5 min • Beginner</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 hover:border-accent/50 overflow-hidden group">
          <div className="h-2 bg-gradient-to-r from-accent to-accent/60"></div>
          <CardHeader>
            <div className="flex items-center justify-between mb-3">
              <Badge
                variant="secondary"
                className="rounded-full bg-accent/10 text-accent"
              >
                Lesson 3
              </Badge>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={`l3-${i}`}
                    className="h-4 w-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
            <CardTitle className="text-2xl">Math Magic 🔢</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-6 text-base leading-relaxed">
              Store information in variables and perform calculations. Build a
              simple calculator!
            </CardDescription>
            <div className="bg-secondary/50 p-4 rounded-xl font-mono text-sm border-2 border-border group-hover:border-accent/30 transition-colors">
              <div className="text-foreground">age = 10</div>
              <div className="text-foreground">next_year = age + 1</div>
              <div className="text-accent mt-2">print</div>
              <div className="text-foreground">(next_year)</div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>8 min • Beginner</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 hover:border-primary/50 overflow-hidden group relative">
          <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
          <CardHeader>
            <div className="flex items-center justify-between mb-3">
              <Badge className="rounded-full bg-accent/10 text-accent border-accent/20">
                Premium
              </Badge>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={`lP-${i}`}
                    className="h-4 w-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
            </div>
            <CardTitle className="text-2xl">Lists & Loops 🔄</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-6 text-base leading-relaxed">
              Work with collections of data and repeat actions efficiently.
              Create awesome patterns!
            </CardDescription>
            <div className="bg-secondary/50 p-4 rounded-xl font-mono text-sm border-2 border-border group-hover:border-primary/30 transition-colors">
              <div className="text-foreground">colors = ["red", "blue"]</div>
              <div className="text-accent mt-2">for</div>
              <div className="text-foreground">color in colors:</div>
              <div className="text-foreground pl-4">
                <span className="text-accent">print</span>(color)
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>12 min • Intermediate</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Link href="/lessons">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 px-8 py-6 text-lg hover:bg-secondary bg-transparent"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explore All Lessons
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SampleLessonsSection;
