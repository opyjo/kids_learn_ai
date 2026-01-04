"use client";

import Image from "next/image";
import type {
	AnimationState,
	TutorCharacter,
} from "@/lib/constants/tutor-characters";

interface AnimatedTutorProps {
	tutor: TutorCharacter;
	animationState?: AnimationState;
	size?: "small" | "medium" | "large";
	className?: string;
}

const BRIGHTBYTE_IMAGES: Record<AnimationState, string> = {
	idle: "/brightbyte/celebrating.png",
	thinking: "/brightbyte/wondering.png",
	talking: "/brightbyte/gesture.png",
	success: "/brightbyte/celebrating.png",
};

const ANIMATION_CLASSES: Record<AnimationState, string> = {
	idle: "animate-brightbyte-float",
	thinking: "animate-brightbyte-thinking",
	talking: "animate-brightbyte-float",
	success: "animate-brightbyte-success",
};

export const AnimatedTutor = ({
	tutor,
	animationState = "idle",
	size = "medium",
	className = "",
}: AnimatedTutorProps) => {
	// Size mappings
	const sizeClasses = {
		small: "w-16 h-16",
		medium: "w-24 h-24",
		large: "w-32 h-32",
	};

	const imageSrc = BRIGHTBYTE_IMAGES[animationState];
	const animationClass = ANIMATION_CLASSES[animationState];

	return (
		<div className={`${sizeClasses[size]} ${className} relative flex items-center justify-center`}>
			<Image
				src={imageSrc}
				alt={`${tutor.name} - ${animationState}`}
				width={size === "small" ? 64 : size === "medium" ? 96 : 128}
				height={size === "small" ? 64 : size === "medium" ? 96 : 128}
				className={`${animationClass} object-contain`}
				priority={animationState === "idle"}
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
