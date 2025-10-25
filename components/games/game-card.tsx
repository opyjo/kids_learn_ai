"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DifficultyBadge } from "./difficulty-badge";
import { SkillBadge } from "./skill-badge";
import { GameTabs } from "./game-tabs";
import { type Game } from "@/lib/games-data";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-gray-100 transition-all hover:shadow-xl">
      {/* Game Card Header */}
      <button
        onClick={handleToggle}
        className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="text-5xl">{game.emoji}</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                <DifficultyBadge difficulty={game.difficulty} />
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                  ⏱️ {game.time}
                </span>
                {game.skills.slice(0, 3).map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
                {game.skills.length > 3 && (
                  <span className="text-sm text-gray-500">
                    +{game.skills.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-gray-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-400" />
            )}
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && <GameTabs game={game} />}
    </div>
  );
};
