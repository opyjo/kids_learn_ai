import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const ProjectShowcaseBanner = () => {
  const projects = [
    {
      title: "Space Invaders Game",
      description:
        "Build a classic arcade game with moving aliens and shooting mechanics",
      emoji: "👾",
      color: "from-blue-500/20 to-purple-500/20",
      skills: ["Loops", "Functions", "Game Logic"],
    },
    {
      title: "Drawing App",
      description: "Create colorful art and patterns using turtle graphics",
      emoji: "🎨",
      color: "from-pink-500/20 to-orange-500/20",
      skills: ["Turtle Graphics", "Colors", "Shapes"],
    },
    {
      title: "Quiz Master",
      description:
        "Make an interactive quiz game with scores and multiple choice questions",
      emoji: "🧠",
      color: "from-green-500/20 to-teal-500/20",
      skills: ["If/Else", "Lists", "Input"],
    },
    {
      title: "Password Generator",
      description: "Build a tool that creates super secure random passwords",
      emoji: "🔐",
      color: "from-yellow-500/20 to-red-500/20",
      skills: ["Random", "Strings", "Functions"],
    },
  ];

  return (
    <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Student Projects
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            See What You Will Build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real projects you'll create as you learn Python programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div
                className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <div className="text-6xl group-hover:scale-110 transition-transform">
                  {project.emoji}
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge
                      key={`${project.title}-${skill}`}
                      variant="secondary"
                      className="rounded-full text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseBanner;
