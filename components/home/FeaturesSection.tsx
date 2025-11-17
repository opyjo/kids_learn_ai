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
          Live Learning That Builds Confidence
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Expert instructors guide kids through Python fundamentals in live
          classes, then layer on age-appropriate AI concepts. Learn together in
          a supportive community where understanding how intelligent tools work
          becomes second nature.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <BrainCircuit className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">
              Learn Python from Expert Instructors
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-base leading-relaxed">
              Master Python fundamentals through live instruction with real-time
              guidance. Expert educators break down complex concepts, answer
              questions as you learn, and ensure every student builds genuine
              coding skills.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-accent/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Sparkles className="h-8 w-8 text-accent-foreground" />
            </div>
            <CardTitle className="text-2xl">
              Build Together in a Safe Community
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-base leading-relaxed">
              Learn alongside peers in a moderated environment where
              collaboration thrives. Share projects, celebrate achievements
              together, and build confidence through supportive peer
              learning—all while having fun.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/80 to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <ShieldCheck className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Expert-Led AI Education</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-base leading-relaxed">
              Experienced instructors provide personalized guidance, ethical
              discussions, and age-appropriate curriculum designed by educators.
              Safe, positive learning with expert oversight ensures kids build
              both skills and responsibility.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturesSection;
