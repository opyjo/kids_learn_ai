"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Sparkles,
  Paintbrush,
  Music,
  Fish,
  Camera,
  Brain,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";

interface Playground {
  name: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
}

interface AIPlaygroundProps {
  lessonOrderIndex: number;
  hideHeader?: boolean;
}

const getPlaygroundsForLesson = (orderIndex: number): Playground[] => {
  const playgroundMap: Record<number, Playground[]> = {
    // Lesson 12 - "What is AI?"
    12: [
      {
        name: "Quick, Draw!",
        url: "https://quickdraw.withgoogle.com/",
        description:
          "Play this AI-powered drawing game where the computer tries to guess what you're drawing in real-time!",
        icon: <Paintbrush className="h-5 w-5" />,
        featured: true,
      },
      {
        name: "AutoDraw",
        url: "https://www.autodraw.com/",
        description:
          "Draw something (even badly!) and watch AI suggest better versions to help you create great art.",
        icon: <Sparkles className="h-5 w-5" />,
        featured: true,
      },
      {
        name: "Giorgio Cam",
        url: "https://experiments.withgoogle.com/ai/giorgio-cam",
        description:
          "Point your camera at objects and AI will create music based on what it sees!",
        icon: <Music className="h-5 w-5" />,
      },
    ],

    // Lesson 13 - "How Machines Learn"
    13: [
      {
        name: "AI for Oceans",
        url: "https://code.org/oceans",
        description:
          "Complete this guided tutorial where you'll train an AI to recognize different types of fish. Great introduction to machine learning!",
        icon: <Fish className="h-5 w-5" />,
        featured: true,
      },
      {
        name: "Thing Translator",
        url: "https://experiments.withgoogle.com/thing-translator",
        description:
          "Point your camera at objects and AI will identify them and translate their names into different languages.",
        icon: <Camera className="h-5 w-5" />,
        featured: true,
      },
    ],

    // Lesson 14 - "Data is Everything"
    14: [
      {
        name: "Teachable Machine",
        url: "https://teachablemachine.withgoogle.com/",
        description:
          "Train your own AI models using your webcam or images! See how data quality affects AI performance.",
        icon: <Brain className="h-5 w-5" />,
        featured: true,
      },
      {
        name: "Google Forms",
        url: "https://docs.google.com/forms/",
        description:
          "Create surveys to collect data for your research projects. Perfect for the data collection activities!",
        icon: <FileSpreadsheet className="h-5 w-5" />,
      },
    ],
  };

  return playgroundMap[orderIndex] || [];
};

const PlaygroundCard = ({ playground }: { playground: Playground }) => {
  return (
    <Card
      className={`rounded-lg border bg-card/70 backdrop-blur-sm transition hover:shadow-lg ${
        playground.featured ? "border-primary/50" : ""
      }`}
    >
      <CardHeader className="pb-2 pt-3 px-4">
        <div className="flex items-center gap-2">
          <div
            className="rounded-full p-1.5 bg-primary/10 text-primary"
          >
            {playground.icon}
          </div>
          <div>
            <CardTitle className="text-sm font-semibold">{playground.name}</CardTitle>
            {playground.featured && (
              <span className="text-xs text-primary font-medium">
                ⭐ Main
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 px-4 pb-3">
        <CardDescription className="text-xs line-clamp-2">
          {playground.description}
        </CardDescription>
        <Button
          asChild
          size="sm"
          className="w-full text-xs h-8"
          variant={playground.featured ? "default" : "outline"}
        >
          <Link href={playground.url} target="_blank" rel="noopener noreferrer">
            Launch
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export const AIPlayground = ({ lessonOrderIndex, hideHeader = false }: AIPlaygroundProps) => {
  const playgrounds = getPlaygroundsForLesson(lessonOrderIndex);

  if (playgrounds.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      {!hideHeader && (
        <>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <h3 className="text-base font-bold text-foreground">
              AI Playgrounds
            </h3>
          </div>
          <p className="text-xs text-muted-foreground">
            Click to explore interactive AI tools
          </p>
        </>
      )}
      <div className="space-y-2">
        {playgrounds.map((playground) => (
          <PlaygroundCard key={playground.name} playground={playground} />
        ))}
      </div>
    </div>
  );
};
