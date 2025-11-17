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
            AI Journey Map
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Your AI Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Expert instructors guide you through each milestone, blending Python
            skills with age-appropriate AI tools. Learn to invent, explain, and
            act responsibly alongside peers in live classes.
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
              <CardTitle className="text-xl">AI Building Blocks</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Discover with your instructor how computers learn, practice
                clear instructions together, and collect positive language for
                friendly bots.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["python basics", "kind words", "ethics"].map((tag) => (
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
              <CardTitle className="text-xl">Chatbot Designers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Learn from expert guidance to use Python conditionals and prompt
                patterns, shaping personality and tone. Collaborate with peers
                to build bots that help classmates study or feel encouraged.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["prompts", "if/else", "empathy"].map((tag) => (
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
              <CardTitle className="text-xl">Data Detectives</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Work with your class to collect clues from numbers and text
                using Python, then teach simple models together to spot helpful
                patterns like mood or weather trends.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["datasets", "loops", "predictions"].map((tag) => (
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
              <CardTitle className="text-xl">Vision Lab</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Explore together how AI sees images—your instructor guides you
                through Python to label pictures, design safety overlays, and
                celebrate inclusive representations.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["image prompts", "functions", "teamwork"].map((tag) => (
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
              <CardTitle className="text-xl">Creative AI Studio</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Collaborate with peers to mix Python automation with
                storytelling, sound, and art tools. Co-create experiences with
                AI in live sessions while keeping human ideas in control.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["generative art", "music", "story craft"].map((tag) => (
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
              <CardTitle className="text-xl">Showcase & Ethics Lab</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                Present capstone creations to your class, write AI safety
                pledges together, and share impact stories with instructors,
                peers, family and friends.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {["presentations", "guidelines", "portfolio"].map((tag) => (
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
