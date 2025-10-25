import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrainCircuit, Sparkles, ShieldCheck } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
          Why Kids & Parents Love KidsLearn AI
        </Badge>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          AI Adventures That Feel Like Play
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          We lead with Python fundamentals, then layer on age-appropriate AI
          concepts so kids understand how intelligent tools work—and how to
          guide them responsibly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <BrainCircuit className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Build Mini AIs with Python</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-base leading-relaxed">
              Use core Python skills to train chatbots, create smart art, and
              explore machine learning ideas—all inside a kid-friendly browser
              editor.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-accent/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Sparkles className="h-8 w-8 text-accent-foreground" />
            </div>
            <CardTitle className="text-2xl">Create Magical Moments</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-base leading-relaxed">
              Unlock badges for designing helpful assistants, storytelling with
              AI images, and solving real-world puzzles—while seeing how Python
              powers each win.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/80 to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <ShieldCheck className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Safe & Guided</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-base leading-relaxed">
              Every mission includes ethical discussions, parent tips, and
              educator-designed guardrails so Python practice stays safe,
              positive, and age-appropriate.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturesSection;
