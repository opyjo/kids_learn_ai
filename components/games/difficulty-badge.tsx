import { type Game } from "@/lib/games-data";

interface DifficultyBadgeProps {
  difficulty: Game["difficulty"];
}

export const DifficultyBadge = ({ difficulty }: DifficultyBadgeProps) => {
  const getDifficultyColor = (difficulty: Game["difficulty"]) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Advanced":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(
        difficulty
      )}`}
    >
      {difficulty}
    </span>
  );
};
