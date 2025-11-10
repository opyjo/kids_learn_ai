"use client";

import { SiteHeader } from "@/components/site-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles } from "lucide-react";

type Playground = {
  name: string;
  url: string;
  description: string;
  features: string[];
  perfectFor: string;
  category: "Google" | "Educational" | "Microsoft" | "Scratch";
};

const playgrounds: Playground[] = [
  {
    name: "Teachable Machine",
    url: "https://teachablemachine.withgoogle.com/",
    description:
      "Train image, sound, and pose models with no code required. Get instant results via webcam.",
    features: [
      "Train image, sound, and pose models",
      "No code required",
      "Instant results via webcam",
    ],
    perfectFor: "Training custom ML models",
    category: "Google",
  },
  {
    name: "Quick, Draw!",
    url: "https://quickdraw.withgoogle.com/",
    description:
      "AI tries to guess your drawings in a fun, game-like experience.",
    features: [
      "AI guesses your drawings",
      "Shows how neural networks recognize patterns",
      "Fun, game-like experience",
    ],
    perfectFor: "Demonstrating pattern recognition",
    category: "Google",
  },
  {
    name: "AI Experiments",
    url: "https://experiments.withgoogle.com/collection/ai",
    description:
      "Multiple mini-experiences showcasing different AI capabilities.",
    features: [
      "Thing Translator - Point camera at objects, AI translates to any language",
      "Giorgio Cam - Creates music based on what camera sees",
      "Semi-Conductor - Control orchestra with body movements",
      "AutoDraw - AI completes your doodles",
    ],
    perfectFor: "Exploration activities",
    category: "Google",
  },
  {
    name: "Machine Learning for Kids",
    url: "https://machinelearningforkids.co.uk/",
    description:
      "Create ML projects in Scratch with project-based learning approach.",
    features: [
      "Create ML projects in Scratch",
      "Train text, image, and number classifiers",
      "Integrates with Scratch for game-making",
      "Project-based learning",
    ],
    perfectFor: "Building ML projects in Scratch",
    category: "Educational",
  },
  {
    name: "Semantris",
    url: "https://research.google.com/semantris/",
    description:
      "Word association game powered by AI with two engaging modes.",
    features: [
      "Word association game powered by AI",
      "Demonstrates natural language understanding",
      "Two modes: Arcade and Blocks",
    ],
    perfectFor: "Text AI & ChatGPT concepts",
    category: "Google",
  },
  {
    name: "AI Duet",
    url: "https://experiments.withgoogle.com/ai-duet",
    description: "Play piano and AI responds with harmony in real-time.",
    features: [
      "Play piano, AI responds with harmony",
      "Shows AI creativity and pattern learning",
      "Musical and engaging",
    ],
    perfectFor: "Creative AI demonstration",
    category: "Google",
  },
  {
    name: "Talk to Books",
    url: "https://books.google.com/talktobooks/",
    description:
      "Ask questions and AI finds relevant passages from thousands of books.",
    features: [
      "Ask questions, AI finds relevant passages from books",
      "Shows how AI understands language",
    ],
    perfectFor: "Text AI and language understanding",
    category: "Google",
  },
  {
    name: "Scratch + AI Extensions",
    url: "https://scratch.mit.edu/",
    description:
      "Block-based programming with AI extensions for creative projects.",
    features: [
      "Text-to-Speech",
      "Translate",
      "Video Sensing (pose detection)",
      "ML integration from machinelearningforkids.co.uk",
    ],
    perfectFor: "Creative coding projects",
    category: "Scratch",
  },
  {
    name: "AI for Oceans",
    url: "https://code.org/oceans",
    description: "Train AI to identify fish through gamified learning.",
    features: [
      "Train AI to identify fish",
      "Block-based programming + ML concepts",
      "Gamified learning",
    ],
    perfectFor: "Understanding ML classification",
    category: "Educational",
  },
  {
    name: "Seeing AI",
    url: "https://www.microsoft.com/en-us/ai/seeing-ai",
    description:
      "Mobile app that uses phone camera to describe the world for accessibility.",
    features: [
      "Uses phone camera to describe world",
      "For accessibility (helping blind people)",
      "Shows real AI helping people",
    ],
    perfectFor: "Ethics & real-world applications",
    category: "Microsoft",
  },
  {
    name: "AutoDraw",
    url: "https://www.autodraw.com/",
    description:
      "Turn rough sketches into polished drawings using AI that recognizes what you're trying to draw.",
    features: [
      "AI recognizes incomplete patterns",
      "Suggests professional drawings",
      "Shows predictive modeling in action",
      "Simple and intuitive interface",
    ],
    perfectFor: "Understanding pattern recognition and AI prediction",
    category: "Google",
  },
  {
    name: "Emoji Scavenger Hunt",
    url: "https://emojiscavengerhunt.withgoogle.com/",
    description:
      "Time-based game where you find real-world objects using your camera and AI.",
    features: [
      "Real-time image recognition",
      "Fun timed challenges",
      "Uses phone or computer camera",
      "Game-based learning",
    ],
    perfectFor: "Real-time image classification",
    category: "Google",
  },
  {
    name: "Dance Party",
    url: "https://code.org/dance",
    description:
      "Code dance moves with block programming and create AI-powered dance parties.",
    features: [
      "Block-based coding",
      "Music and movement AI",
      "Creative coding platform",
      "Beginner-friendly",
    ],
    perfectFor: "Combining coding with creative AI",
    category: "Educational",
  },
  {
    name: "Akinator",
    url: "https://en.akinator.com/",
    description:
      "AI genie that guesses what you're thinking by asking smart questions.",
    features: [
      "Decision tree algorithms",
      "Shows how AI learns from questions",
      "Interactive and engaging",
      "Demonstrates logical reasoning",
    ],
    perfectFor: "Understanding decision trees and AI learning",
    category: "Educational",
  },
  {
    name: "Thing Translator",
    url: "https://experiments.withgoogle.com/thing-translator",
    description:
      "Point your camera at objects and AI translates them into different languages.",
    features: [
      "Combines image recognition + translation",
      "Real-time object detection",
      "Multilingual support",
      "Shows multiple AI types working together",
    ],
    perfectFor: "Multilingual AI and image classification",
    category: "Google",
  },
];

const categories = ["All", "Google", "Educational", "Microsoft", "Scratch"];

export default function AIPlaygroundsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              AI Playgrounds
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore these amazing AI-powered tools and experiments! Perfect for
            hands-on learning and discovering how AI works in fun and
            interactive ways.
          </p>
        </div>

        {/* Playgrounds Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {playgrounds.map((playground, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-purple-300 dark:hover:border-purple-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {playground.name}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="shrink-0 text-xs bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30"
                  >
                    {playground.category}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {playground.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Features:
                  </h4>
                  <ul className="space-y-1.5">
                    {playground.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-purple-500 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Perfect For */}
                <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    <span className="text-purple-600 dark:text-purple-400">
                      Perfect for:
                    </span>{" "}
                    {playground.perfectFor}
                  </p>
                </div>

                {/* Visit Link */}
                <a
                  href={playground.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-lg group/btn"
                  aria-label={`Visit ${playground.name} (opens in new tab)`}
                >
                  <span>Visit Playground</span>
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Ready to Explore?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Each playground offers a unique way to interact with AI. Try
                them all to discover which ones you enjoy most! Remember, all
                links will open in a new tab so you can easily return to this
                page.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

