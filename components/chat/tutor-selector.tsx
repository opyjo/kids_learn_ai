"use client";

import { useState } from "react";
import { TutorCharacter, TutorId, getAllTutors } from "@/lib/constants/tutor-characters";
import { AnimatedTutor } from "./animated-tutor";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TutorSelectorProps {
  selectedTutorId: TutorId;
  onSelectTutor: (tutorId: TutorId) => void;
  className?: string;
}

export const TutorSelector = ({
  selectedTutorId,
  onSelectTutor,
  className = "",
}: TutorSelectorProps) => {
  const tutors = getAllTutors();
  const [hoveredTutorId, setHoveredTutorId] = useState<TutorId | null>(null);

  const handleSelectTutor = (tutorId: TutorId) => {
    onSelectTutor(tutorId);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="text-center">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Choose Your AI Tutor
        </h3>
        <p className="text-sm text-muted-foreground">
          Each tutor has their own unique personality and teaching style!
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {tutors.map((tutor) => {
          const isSelected = tutor.id === selectedTutorId;
          const isHovered = tutor.id === hoveredTutorId;

          return (
            <Card
              key={tutor.id}
              className={cn(
                "relative cursor-pointer transition-all duration-300 hover:scale-105",
                isSelected
                  ? "border-2 shadow-lg"
                  : "border hover:border-primary/50"
              )}
              style={{
                borderColor: isSelected ? tutor.color.primary : undefined,
                boxShadow: isSelected
                  ? `0 4px 20px ${tutor.color.primary}40`
                  : undefined,
              }}
              onMouseEnter={() => setHoveredTutorId(tutor.id)}
              onMouseLeave={() => setHoveredTutorId(null)}
              onClick={() => handleSelectTutor(tutor.id)}
            >
              {/* Selected Indicator */}
              {isSelected && (
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white z-10"
                  style={{
                    backgroundColor: tutor.color.primary,
                  }}
                >
                  <Check className="h-4 w-4" />
                </div>
              )}

              <CardContent className="p-4 text-center">
                {/* Animated Character */}
                <div className="flex justify-center mb-3">
                  <AnimatedTutor
                    tutor={tutor}
                    animationState={isHovered ? "talking" : "idle"}
                    size="medium"
                  />
                </div>

                {/* Tutor Name */}
                <h4 className="font-bold text-foreground mb-1 flex items-center justify-center gap-1">
                  {tutor.name}
                  <span className="text-lg">{tutor.emoji}</span>
                </h4>

                {/* Subject Badge */}
                <Badge
                  variant="outline"
                  className="text-xs mb-2"
                  style={{
                    borderColor: tutor.color.primary,
                    color: tutor.color.primary,
                  }}
                >
                  {tutor.subject}
                </Badge>

                {/* Description */}
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {tutor.description}
                </p>

                {/* Personality Traits */}
                <div className="mt-2 flex flex-wrap gap-1 justify-center">
                  {tutor.personality.slice(0, 2).map((trait) => (
                    <span
                      key={trait}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${tutor.color.primary}20`,
                        color: tutor.color.primary,
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Action Button */}
      <div className="text-center pt-2">
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-muted-foreground"
          onClick={() => {
            // Cycle to next tutor
            const currentIndex = tutors.findIndex((t) => t.id === selectedTutorId);
            const nextIndex = (currentIndex + 1) % tutors.length;
            onSelectTutor(tutors[nextIndex].id);
          }}
        >
          Try a different tutor →
        </Button>
      </div>
    </div>
  );
};

// Compact version for header/navbar
export const TutorSelectorCompact = ({
  selectedTutorId,
  onSelectTutor,
  className = "",
}: TutorSelectorProps) => {
  const tutors = getAllTutors();
  const selectedTutor = tutors.find((t) => t.id === selectedTutorId);

  if (!selectedTutor) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-muted-foreground">Tutor:</span>
      <select
        value={selectedTutorId}
        onChange={(e) => onSelectTutor(e.target.value as TutorId)}
        className="text-sm font-medium bg-transparent border rounded-md px-2 py-1 cursor-pointer focus:outline-none focus:ring-2"
        style={{
          borderColor: selectedTutor.color.primary,
          color: selectedTutor.color.primary,
        }}
      >
        {tutors.map((tutor) => (
          <option key={tutor.id} value={tutor.id}>
            {tutor.emoji} {tutor.name}
          </option>
        ))}
      </select>
    </div>
  );
};

