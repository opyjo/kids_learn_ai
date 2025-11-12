"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "./skill-badge";
import { type Game } from "@/lib/games-data";

interface GameTabsProps {
  game: Game;
}

type TabType = "about" | "code" | "how" | "challenges";

export const GameTabs = ({ game }: GameTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(game.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadCode = () => {
    const blob = new Blob([game.code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${game.title.toLowerCase().replace(/\s+/g, "-")}.py`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-50">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-white px-2">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-3 py-2 text-xs font-medium transition-colors border-b-2 ${
            activeTab === "about"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`px-3 py-2 text-xs font-medium transition-colors border-b-2 ${
            activeTab === "code"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Code
        </button>
        <button
          onClick={() => setActiveTab("how")}
          className={`px-3 py-2 text-xs font-medium transition-colors border-b-2 ${
            activeTab === "how"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          How It Works
        </button>
        <button
          onClick={() => setActiveTab("challenges")}
          className={`px-3 py-2 text-xs font-medium transition-colors border-b-2 ${
            activeTab === "challenges"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Challenges
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-3">
        {activeTab === "about" && (
          <div>
            <h4 className="text-sm font-bold mb-1.5">About This Game</h4>
            <p className="text-xs text-gray-700 mb-2">{game.preview}</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
              <h5 className="text-xs font-bold text-blue-900 mb-1.5">
                What You'll Learn:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {game.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} variant="white" />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "code" && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-bold">Complete Code</h4>
              <div className="flex gap-1.5">
                <Button variant="outline" size="sm" onClick={handleCopyCode}>
                  <Copy className="w-3 h-3 mr-1.5" />
                  {copiedCode ? "Copied!" : "Copy"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadCode}
                >
                  <Download className="w-3 h-3 mr-1.5" />
                  Download
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
              <pre className="text-xs text-gray-100 font-mono">
                <code>{game.code}</code>
              </pre>
            </div>
            <div className="mt-2 bg-green-50 border border-green-200 rounded-lg p-2">
              <p className="text-xs text-green-800">
                <strong>💡 Tip:</strong> Copy this code into Thonny and run it
                to play the game! Don't have Thonny yet?{" "}
                <Link href="/get-thonny" className="underline font-medium">
                  Get it here
                </Link>
              </p>
            </div>
          </div>
        )}

        {activeTab === "how" && (
          <div>
            <h4 className="text-sm font-bold mb-2">How It Works</h4>
            <div className="space-y-1.5">
              {game.howItWorks.map((point, index) => (
                <div
                  key={`${game.id}-how-${index}-${point.slice(0, 20)}`}
                  className="flex gap-2"
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="text-xs text-gray-700 pt-0.5">{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "challenges" && (
          <div>
            <h4 className="text-sm font-bold mb-1.5">Try These Challenges!</h4>
            <p className="text-xs text-gray-600 mb-2">
              Once you have the game working, try these modifications to make it
              your own:
            </p>
            <div className="space-y-1.5">
              {game.challenges.map((challenge, index) => (
                <div
                  key={`${game.id}-challenge-${index}-${challenge.slice(
                    0,
                    20
                  )}`}
                  className="flex gap-2 bg-white rounded-lg p-2 border border-gray-200"
                >
                  <div className="flex-shrink-0 text-base">🎯</div>
                  <p className="text-xs text-gray-700 pt-0.5">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
