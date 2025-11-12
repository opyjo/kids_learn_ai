"use client";

import { ExternalLink } from "lucide-react";
import { DifficultyBadge } from "./difficulty-badge";
import { type Game } from "@/lib/games-data";
import { Button } from "@/components/ui/button";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  const handleOpenTrinket = () => {
    const trinketUrl = game.trinketLink || "https://trinket.io/python";
    window.open(trinketUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="border-b border-gray-200 py-2 px-3 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-xl flex-shrink-0">{game.emoji}</span>
          <h3 className="text-sm font-bold flex-shrink-0">{game.title}</h3>
          <DifficultyBadge difficulty={game.difficulty} />
          <p className="text-xs text-gray-600 truncate">{game.description}</p>
        </div>
        {game.trinketLink && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleOpenTrinket}
            className="flex-shrink-0"
            aria-label={`Launch ${game.title}`}
          >
            <ExternalLink className="w-3 h-3 mr-1.5" />
            Launch
          </Button>
        )}
      </div>
    </div>
  );
};
