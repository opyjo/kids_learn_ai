import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { GameCard } from "@/components/games/game-card";
import { games } from "@/lib/games-data";
import { SiteHeader } from "@/components/site-header";

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Build Amazing Games
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Create Your Own Python Games! 🎮
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Learn Python by building fun games! Each game includes complete
            code, explanations, and challenges to make it your own.
          </p>
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-600">
            <div>
              <span className="font-bold text-2xl text-blue-600">
                {games.length}
              </span>
              <p>Games to Build</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-green-600">100%</span>
              <p>Free Code</p>
            </div>
            <div>
              <span className="font-bold text-2xl text-purple-600">3</span>
              <p>Difficulty Levels</p>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Get Thonny and start creating these amazing games today!
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/get-thonny">Get Thonny</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
