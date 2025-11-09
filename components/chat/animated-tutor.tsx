"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { TutorCharacter, AnimationState } from "@/lib/constants/tutor-characters";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimatedTutorProps {
  tutor: TutorCharacter;
  animationState?: AnimationState;
  size?: "small" | "medium" | "large";
  className?: string;
}

export const AnimatedTutor = ({
  tutor,
  animationState = "idle",
  size = "medium",
  className = "",
}: AnimatedTutorProps) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const lottieRef = useRef<any>(null);

  // Size mappings
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  // Fetch animation data
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setIsLoading(true);
        setError(false);
        
        // Get the appropriate animation URL based on state
        const animationUrl = tutor.animationUrl[animationState];
        
        // For now, use a simple fallback with the emoji
        // In production, you would fetch the actual Lottie JSON from the URL
        // const response = await fetch(animationUrl);
        // const data = await response.json();
        // setAnimationData(data);
        
        // Using emoji fallback for now
        setAnimationData(null);
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading animation:", err);
        setError(true);
        setIsLoading(false);
      }
    };

    loadAnimation();
  }, [tutor.id, animationState]);

  // Fallback to emoji display (will be replaced with actual Lottie animations)
  const renderFallback = () => {
    const animationClasses = {
      idle: "animate-bounce-slow",
      thinking: "animate-pulse",
      talking: "animate-wiggle",
      success: "animate-bounce",
    };

    return (
      <div
        className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}
        style={{
          background: `linear-gradient(135deg, ${tutor.color.primary}, ${tutor.color.secondary})`,
          borderRadius: "50%",
          boxShadow: `0 4px 20px ${tutor.color.primary}40`,
        }}
      >
        <span
          className={`text-4xl ${animationClasses[animationState]} transition-transform duration-300`}
          role="img"
          aria-label={tutor.name}
        >
          {tutor.emoji}
        </span>
      </div>
    );
  };

  // If animation data is available, render Lottie
  // For now, always render fallback (will be updated with actual animations)
  if (isLoading || error || !animationData) {
    return renderFallback();
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={animationState === "idle" || animationState === "thinking"}
        autoplay={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

// Custom animations for tailwind
// Add to tailwind.config.ts:
/*
animation: {
  'bounce-slow': 'bounce 3s ease-in-out infinite',
  'wiggle': 'wiggle 1s ease-in-out infinite',
},
keyframes: {
  wiggle: {
    '0%, 100%': { transform: 'rotate(-3deg)' },
    '50%': { transform: 'rotate(3deg)' },
  }
}
*/

