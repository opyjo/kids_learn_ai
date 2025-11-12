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

    // Lesson 15 - "Pattern Detective"
    15: [
      {
        name: "Semantris",
        url: "https://research.google.com/semantris/",
        description:
          "Play this AI word-association game! AI finds patterns in word meanings to match your clues.",
        featured: true,
      },
      {
        name: "AI Duet",
        url: "https://experiments.withgoogle.com/ai-duet",
        description:
          "Play music and AI responds with matching patterns! See how AI recognizes musical patterns.",
        featured: true,
      },
      {
        name: "Infinite Drum Machine",
        url: "https://experiments.withgoogle.com/drum-machine",
        description:
          "Explore sound patterns! AI matches similar sounds and creates rhythm patterns.",
      },
      {
        name: "Quick, Draw! (Patterns)",
        url: "https://quickdraw.withgoogle.com/",
        description:
          "Draw and watch AI recognize patterns in your drawings to guess what you're creating!",
      },
    ],

    // Lesson 16 - "Prediction Machine"
    16: [
      {
        name: "Akinator",
        url: "https://en.akinator.com/",
        description:
          "The Web Genius! Think of a character and watch AI predict who you're thinking of using question patterns.",
        featured: true,
      },
      {
        name: "Google Trends",
        url: "https://trends.google.com/trends/",
        description:
          "Explore search patterns over time and predict future trends using historical data!",
        featured: true,
      },
      {
        name: "Weather.com",
        url: "https://weather.com/",
        description:
          "See how AI predicts weather patterns and learn about confidence levels in predictions.",
      },
    ],

    // Lesson 17 - "Teaching Computers to Read"
    17: [
      {
        name: "InferKit (GPT-2)",
        url: "https://app.inferkit.com/demo",
        description:
          "Start writing and watch AI continue your story! See how AI understands text context.",
        featured: true,
      },
      {
        name: "Sentiment Analysis Demo",
        url: "https://huggingface.co/spaces/mrm8488/roberta-sentiment-analysis",
        description:
          "Type sentences and watch AI detect emotions (happy, sad, angry) from your words!",
        featured: true,
      },
      {
        name: "WordArt",
        url: "https://wordart.com/",
        description:
          "Create word clouds to visualize most common words in text - see pattern analysis!",
      },
    ],

    // Lesson 18 - "Build Your Own Chatbot Friend"
    18: [
      {
        name: "Character.AI",
        url: "https://character.ai/",
        description:
          "Chat with AI characters! See how chatbots maintain personality and conversation context.",
        featured: true,
      },
      {
        name: "Cleverbot",
        url: "https://www.cleverbot.com/",
        description:
          "Have conversations with AI! Notice how it learns from chats and responds contextually.",
        featured: true,
      },
      {
        name: "AI Dungeon",
        url: "https://play.aidungeon.com/",
        description:
          "Play text adventure games where AI creates stories based on your choices!",
      },
    ],

    // Lesson 19 - "Picture Detective"
    19: [
      {
        name: "Quick, Draw!",
        url: "https://quickdraw.withgoogle.com/",
        description:
          "Draw pictures and watch AI recognize them in real-time! See how AI sees images.",
        featured: true,
      },
      {
        name: "Google Lens",
        url: "https://lens.google.com/",
        description:
          "Upload images and watch AI identify objects, text, and provide information!",
        featured: true,
      },
      {
        name: "AutoDraw",
        url: "https://www.autodraw.com/",
        description:
          "Draw rough sketches and AI suggests what you're trying to create - pattern recognition!",
      },
    ],

    // Lesson 20 - "Recommendation Robot"
    20: [
      {
        name: "Netflix",
        url: "https://www.netflix.com/",
        description:
          "Explore recommendation algorithms! Notice how Netflix suggests content based on your viewing.",
        featured: true,
      },
      {
        name: "Spotify",
        url: "https://www.spotify.com/",
        description:
          "Check Discover Weekly! See how AI recommends music based on your listening patterns.",
        featured: true,
      },
      {
        name: "Amazon",
        url: "https://www.amazon.com/",
        description:
          "Notice 'Customers who bought this also bought' - see recommendation systems in action!",
      },
    ],

    // Lesson 21 - "Your Big AI Project"
    21: [
      {
        name: "AI Experiments",
        url: "https://experiments.withgoogle.com/collection/ai",
        description:
          "Explore 100+ AI projects for inspiration! Find ideas for your own AI creation.",
        featured: true,
      },
      {
        name: "Teachable Machine",
        url: "https://teachablemachine.withgoogle.com/",
        description:
          "Train your own AI models without coding! Great for final project ideas.",
        featured: true,
      },
      {
        name: "AI for Oceans",
        url: "https://code.org/oceans",
        description:
          "Review machine learning concepts while helping protect ocean life!",
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
