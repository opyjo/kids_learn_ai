import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary via-primary/90 to-accent rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

        <div className="relative z-10">
          <div className="text-6xl mb-6">🧠</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Join Our Live AI Classes?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
            Join a thriving community of young learners mastering Python with
            expert instructors. Build confidence, real skills, and lifelong
            friendships in live classes designed to prepare kids for an
            AI-driven future. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Enroll in Live Classes
              </Button>
            </Link>
            <Link href="/playground">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-white/10 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Try Free Playground
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
