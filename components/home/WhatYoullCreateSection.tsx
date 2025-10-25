import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Zap, Sparkles, BookOpen, Rocket, Star } from "lucide-react";

const WhatYoullCreateSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
            Learning Path
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What You'll Create
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            From simple programs to awesome projects, you'll build real things
            you can show off!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="rounded-2xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="rounded-full">
                  Week 1-2
                </Badge>
              </div>
              <CardTitle className="text-xl">Your First Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Learn to print messages, use variables, and do math. Create a
                name generator and age calculator!
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["print()", "variables", "math"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full text-xs bg-primary/5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <Badge variant="secondary" className="rounded-full">
                  Week 3-4
                </Badge>
              </div>
              <CardTitle className="text-xl">Interactive Games</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Make decisions with if/else and create guessing games, quiz
                apps, and choose-your-own-adventure stories!
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["if/else", "input()", "games"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full text-xs bg-accent/5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="rounded-full">
                  Week 5-6
                </Badge>
              </div>
              <CardTitle className="text-xl">Loops & Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Repeat actions and work with collections. Build a todo list,
                shopping cart, and pattern maker!
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["for loops", "lists", "while"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full text-xs bg-primary/5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-accent" />
                </div>
                <Badge variant="secondary" className="rounded-full">
                  Week 7-8
                </Badge>
              </div>
              <CardTitle className="text-xl">Functions & More</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Organize code with functions. Create a calculator, password
                generator, and reusable tools!
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["functions", "parameters", "return"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full text-xs bg-accent/5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <Badge className="rounded-full bg-accent/10 text-accent border-accent/20">
                  Premium
                </Badge>
              </div>
              <CardTitle className="text-xl">Graphics & Art</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Draw shapes, patterns, and animations with Turtle graphics.
                Create digital art with code!
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["turtle", "graphics", "art"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full text-xs bg-primary/5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <Badge className="rounded-full bg-accent/10 text-accent border-accent/20">
                  Premium
                </Badge>
              </div>
              <CardTitle className="text-xl">Final Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Build complete games like Snake, Pong, and your own custom
                projects. Show the world what you can do!
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["games", "projects", "portfolio"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full text-xs bg-accent/5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullCreateSection;
