"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { type ReactNode } from "react";

// Default animation settings
const defaultViewport = { once: true, amount: 0.3 };
const defaultTransition = { duration: 0.6, ease: "easeOut" };

// Animation variants
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Types
type MotionDivProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
  delay?: number;
};

// FadeIn - Fades up from below
export const FadeIn = ({
  children,
  className = "",
  delay = 0,
  ...props
}: MotionDivProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUpVariants}
      transition={{ ...defaultTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// FadeInOnly - Fades in without movement
export const FadeInOnly = ({
  children,
  className = "",
  delay = 0,
  ...props
}: MotionDivProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInVariants}
      transition={{ ...defaultTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// SlideInLeft - Slides in from the left
export const SlideInLeft = ({
  children,
  className = "",
  delay = 0,
  ...props
}: MotionDivProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={slideInLeftVariants}
      transition={{ ...defaultTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// SlideInRight - Slides in from the right
export const SlideInRight = ({
  children,
  className = "",
  delay = 0,
  ...props
}: MotionDivProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={slideInRightVariants}
      transition={{ ...defaultTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// ScaleIn - Scales up from smaller
export const ScaleIn = ({
  children,
  className = "",
  delay = 0,
  ...props
}: MotionDivProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={scaleInVariants}
      transition={{ ...defaultTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// StaggerContainer - Container for staggered children animations
export const StaggerContainer = ({
  children,
  className = "",
  ...props
}: MotionDivProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// StaggerItem - Individual item within a StaggerContainer
export const StaggerItem = ({
  children,
  className = "",
  ...props
}: MotionDivProps) => {
  return (
    <motion.div
      variants={staggerItemVariants}
      transition={defaultTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

