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
          Experience Our Live Curriculum
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Preview the instructor-led lessons where kids learn Python basics
          together in live classes, then explore how to guide AI responsibly
          with expert support and peer collaboration.
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
            <CardTitle className="text-2xl">
              Teach the Bot to Say Hi 🤖
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-6 text-base leading-relaxed">
              Your first Python + AI mission in live class! Learn variables and
              lists with your instructor while creating a friendly greeter that
              shares encouraging words. Build confidence through hands-on
              practice.
            </CardDescription>
            <div className="bg-secondary/50 p-4 rounded-xl font-mono text-sm border-2 border-border group-hover:border-primary/30 transition-colors">
              <div className="text-foreground">
                cheers = ["You're awesome!", "Let's build! 💡"]
              </div>
              <div className="text-accent">print</div>
              <div className="text-foreground">(cheers[0])</div>
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
                Lesson 4
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
            <CardTitle className="text-2xl">Emoji Mood Meter 😊</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-6 text-base leading-relaxed">
              Join your class to explore loops and conditionals, helping AI
              understand if messages sound happy or need encouragement. Expert
              instructors guide you through every step—no complex math required.
            </CardDescription>
            <div className="bg-secondary/50 p-4 rounded-xl font-mono text-sm border-2 border-border group-hover:border-accent/30 transition-colors">
              <div className="text-foreground">
                words = ["yay", "amazing", "ugh"]
              </div>
              <div className="text-accent mt-2">for</div>
              <div className="text-foreground">word in words:</div>
              <div className="pl-4 text-foreground">
                <span className="text-accent">print</span>(word, "→ happy" if
                word != "ugh" else "→ needs a boost")
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>10 min • Explorer</span>
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
            <CardTitle className="text-2xl">Story Remix Studio ✨</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-6 text-base leading-relaxed">
              Collaborate with classmates to blend storytelling and Python
              prompts, learning how to guide creative AI in co-authoring safe,
              uplifting adventures with expert instruction.
            </CardDescription>
            <div className="bg-secondary/50 p-4 rounded-xl font-mono text-sm border-2 border-border group-hover:border-primary/30 transition-colors">
              <div className="text-foreground">
                prompt = "Tell a brave story about a kid inventor"
              </div>
              <div className="text-accent mt-2">print</div>
              <div className="text-foreground">("🤖 Story Idea:", prompt)</div>
              <div className="text-muted-foreground mt-2">
                # Guide the AI to add safe, uplifting twists
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>12 min • Story Maker</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Link href="/lessons?course=python-foundations">
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
