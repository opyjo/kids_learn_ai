"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const AnimatedChatbot = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    // Show speech bubble automatically after 2 seconds
    const showTimer = setTimeout(() => {
      setShowBubble(true);
      // Auto-hide after 8 seconds if not interacted with
      hideTimeoutRef.current = setTimeout(() => {
        setShowBubble(false);
      }, 8000);
    }, 2000);
    return () => {
      clearTimeout(showTimer);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowBubble(true);
    // Clear any pending hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Keep bubble visible for a bit after hover ends, then hide it
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setShowBubble(false);
    }, 2000);
  };

  const handleClick = () => {
    router.push("/tutor");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Speech Bubble - appears automatically after 2s, or on hover */}
      {(showBubble || isHovered) && (
        <div
          className={cn(
            "relative animate-in fade-in slide-in-from-bottom-2 duration-300",
            "bg-card border-2 border-primary/30 rounded-2xl px-3 py-2 sm:px-4 shadow-lg shadow-primary/20",
            "text-xs sm:text-sm font-medium text-foreground",
            "mr-2 sm:mr-0",
            "max-w-[200px] sm:max-w-none"
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
            <span className="leading-tight">
              Ask me Python questions! 🐍
            </span>
          </div>
          {/* Speech bubble tail */}
          <div className="absolute -bottom-2 right-6 sm:right-8 w-4 h-4 border-r-2 border-b-2 border-primary/30 bg-card rotate-45" />
        </div>
      )}

      {/* Floating Chatbot Button */}
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "group relative",
          "flex items-center justify-center",
          "w-16 h-16 sm:w-20 sm:h-20",
          "rounded-full",
          "bg-gradient-to-br from-primary via-primary/90 to-primary/80",
          "shadow-xl shadow-primary/40",
          "transition-all duration-300",
          "focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2",
          "hover:scale-105 hover:shadow-2xl hover:shadow-primary/50",
          // Floating animation
          "animate-float",
          // Entrance animation
          isMounted && "animate-in slide-in-from-bottom-4 fade-in duration-500"
        )}
        aria-label="Chat with BrightByte - Your Python tutor"
        tabIndex={0}
      >
        {/* Pulse glow effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-primary/40",
            "animate-pulse",
            "group-hover:bg-primary/60"
          )}
        />

        {/* Inner glow ring */}
        <div
          className={cn(
            "absolute inset-2 rounded-full",
            "border-2 border-primary-foreground/20",
            "group-hover:border-primary-foreground/40",
            "transition-all duration-300"
          )}
        />

        {/* Icon Container */}
        <div className="relative z-10 flex items-center justify-center">
          <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground" />
        </div>

        {/* Additional sparkle effect on hover */}
        {isHovered && (
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
        )}
      </button>
    </div>
  );
};

export default AnimatedChatbot;

