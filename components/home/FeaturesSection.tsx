import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Trophy, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2">
          Why Kids Love Us
        </Badge>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Learning That Feels Like Play
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          We make Python programming fun, interactive, and easy to understand
          for young minds
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Code className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Write Real Code</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-base leading-relaxed">
              Type and run actual Python code in your browser. Watch your
              programs come to life instantly with our interactive editor!
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-accent/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Trophy className="h-8 w-8 text-accent-foreground" />
            </div>
            <CardTitle className="text-2xl">Earn Achievements</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-base leading-relaxed">
              Complete lessons, unlock badges, and track your progress. See how
              far you've come on your coding journey!
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/80 to-accent/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Kid-Friendly</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-base leading-relaxed">
              Lessons designed just for kids with clear explanations, fun
              examples, and step-by-step guidance.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturesSection;
