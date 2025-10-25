import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Play, Rocket, CheckCircle, Zap, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="text-center lg:text-left">
          <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 rounded-full px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Interactive Python Learning
          </Badge>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Code Your Own
            <span className="text-primary block mt-2">Adventures!</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Learn Python by creating games, animations, and cool projects.
            Perfect for kids ages 8-16 who want to bring their ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Learning Free
              </Button>
            </Link>
            <Link href="/playground">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 hover:bg-secondary bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Try Playground
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Start in 30 seconds</span>
            </div>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="relative">
          <div className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-secondary rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <Badge className="bg-primary/10 text-primary">Live Code</Badge>
              </div>
              <div className="font-mono text-sm space-y-2 text-foreground">
                <div>
                  <span className="text-accent">def</span>{" "}
                  <span className="text-primary">draw_star</span>():
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground">
                    # Draw a cool star!
                  </span>
                </div>
                <div className="pl-4">
                  <span className="text-accent">for</span> i{" "}
                  <span className="text-accent">in</span>{" "}
                  <span className="text-primary">range</span>(5):
                </div>
                <div className="pl-8">turtle.forward(100)</div>
                <div className="pl-8">turtle.right(144)</div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className="text-6xl">⭐</div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-4 shadow-lg animate-bounce">
              <Zap className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-full p-4 shadow-lg animate-pulse">
              <Heart className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
