"use client";

import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

type Playground = {
  name: string;
  url: string;
  description: string;
  category: "Google" | "Educational" | "Microsoft" | "Scratch";
};

const playgrounds: Playground[] = [
  {
    name: "Quick, Draw!",
    url: "https://quickdraw.withgoogle.com/",
    description:
      "Play this AI-powered drawing game where the computer tries to guess what you're drawing in real-time!",
    category: "Google",
  },
  {
    name: "AutoDraw",
    url: "https://www.autodraw.com/",
    description:
      "Draw something (even badly!) and watch AI suggest better versions to help you create great art.",
    category: "Google",
  },
  {
    name: "Teachable Machine",
    url: "https://teachablemachine.withgoogle.com/",
    description:
      "Train your own AI model to recognize images, sounds, or poses with no coding required!",
    category: "Google",
  },
  {
    name: "Semantris",
    url: "https://research.google.com/semantris/",
    description:
      "Fast-paced word association game powered by AI. Type words to clear blocks!",
    category: "Google",
  },
  {
    name: "AI Duet",
    url: "https://experiments.withgoogle.com/ai-duet",
    description: "Play music on the piano and watch AI respond with its own melody in real-time.",
    category: "Google",
  },
  {
    name: "Thing Translator",
    url: "https://experiments.withgoogle.com/thing-translator",
    description:
      "Point your camera at objects and AI will identify and translate them into different languages.",
    category: "Google",
  },
  {
    name: "Emoji Scavenger Hunt",
    url: "https://emojiscavengerhunt.withgoogle.com/",
    description:
      "Race against the clock to find real-world objects that match emojis using your camera!",
    category: "Google",
  },
  {
    name: "Giorgio Cam",
    url: "https://experiments.withgoogle.com/giorgio-cam",
    description:
      "Point your camera at objects and AI will create music based on what it sees!",
    category: "Google",
  },
  {
    name: "Machine Learning for Kids",
    url: "https://machinelearningforkids.co.uk/",
    description:
      "Create your own machine learning projects in Scratch. Train AI to recognize text, images, and numbers!",
    category: "Educational",
  },
  {
    name: "AI for Oceans",
    url: "https://code.org/oceans",
    description: "Train an AI to help identify and protect ocean wildlife through fun coding activities.",
    category: "Educational",
  },
  {
    name: "Dance Party",
    url: "https://code.org/dance",
    description:
      "Code your own dance party with block programming! Make characters dance to music.",
    category: "Educational",
  },
  {
    name: "Akinator",
    url: "https://en.akinator.com/",
    description:
      "Think of a character and watch the AI genie guess who it is by asking clever questions!",
    category: "Educational",
  },
  {
    name: "Talk to Books",
    url: "https://books.google.com/talktobooks/",
    description:
      "Ask any question and AI will find relevant passages from thousands of books to answer you.",
    category: "Google",
  },
  {
    name: "Scratch + AI",
    url: "https://scratch.mit.edu/",
    description:
      "Use Scratch's AI extensions to add text-to-speech, translation, and video sensing to your projects!",
    category: "Scratch",
  },
  {
    name: "Seeing AI",
    url: "https://www.microsoft.com/en-us/ai/seeing-ai",
    description:
      "Mobile app that uses AI to describe the world for people who are blind or have low vision.",
    category: "Microsoft",
  },
];

export default function AIPlaygroundsPage() {
  const handleLaunch = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Interactive AI Tools
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            AI Playgrounds 🎨
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore fun AI-powered tools and experiments! Click Launch to try
            each one.
          </p>
        </div>

        {/* Playgrounds List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {playgrounds.map((playground, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-2 px-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <h3 className="text-sm font-bold shrink-0">
                    {playground.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className="shrink-0 text-xs"
                  >
                    {playground.category}
                  </Badge>
                  <p className="text-xs text-gray-600 truncate">
                    {playground.description}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleLaunch(playground.url)}
                  className="shrink-0"
                  aria-label={`Launch ${playground.name}`}
                >
                  <ExternalLink className="w-3 h-3 mr-1.5" />
                  Launch
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Explore?</h2>
          <p className="text-lg text-blue-50">
            Each playground opens in a new tab so you can easily come back and
            try more!
          </p>
        </div>
      </main>
    </div>
  );
}

