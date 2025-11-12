"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface Playground {
  name: string;
  url: string;
  description: string;
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
        featured: true,
      },
      {
        name: "AutoDraw",
        url: "https://www.autodraw.com/",
        description:
          "Draw something (even badly!) and watch AI suggest better versions to help you create great art.",
        featured: true,
      },
      {
        name: "Giorgio Cam",
        url: "https://experiments.withgoogle.com/ai/giorgio-cam",
        description:
          "Point your camera at objects and AI will create music based on what it sees!",
      },
    ],

    // Lesson 13 - "How Machines Learn"
    13: [
      {
        name: "AI for Oceans",
        url: "https://code.org/oceans",
        description:
          "Complete this guided tutorial where you'll train an AI to recognize different types of fish.",
        featured: true,
      },
      {
        name: "Thing Translator",
        url: "https://experiments.withgoogle.com/thing-translator",
        description:
          "Point your camera at objects and AI will identify them and translate their names into different languages.",
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
        featured: true,
      },
      {
        name: "Google Forms",
        url: "https://docs.google.com/forms/",
        description:
          "Create surveys to collect data for your research projects.",
      },
    ],
  };

  return playgroundMap[orderIndex] || [];
};

const PlaygroundCard = ({ playground }: { playground: Playground }) => {
  const handleLaunch = () => {
    window.open(playground.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="border-b border-border last:border-b-0 py-2 px-3 hover:bg-muted transition-colors">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <h3 className="text-sm font-bold shrink-0 text-foreground">{playground.name}</h3>
          {playground.featured && (
            <Badge variant="outline" className="shrink-0 text-xs">
              ⭐ Main
            </Badge>
          )}
          <p className="text-xs text-muted-foreground truncate">
            {playground.description}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLaunch}
          className="shrink-0"
          aria-label={`Launch ${playground.name}`}
        >
          <ExternalLink className="w-3 h-3 mr-1.5" />
          Launch
        </Button>
      </div>
    </div>
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
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <h3 className="text-base font-bold text-foreground">
            AI Playgrounds
          </h3>
        </div>
      )}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        {playgrounds.map((playground) => (
          <PlaygroundCard key={playground.name} playground={playground} />
        ))}
      </div>
    </div>
  );
};
