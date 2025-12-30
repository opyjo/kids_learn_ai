/**
 * Curriculum Constants for KidsLearnAI
 * Year 1: 8-Term Python Foundations Curriculum (Ages 9-10)
 */

export const YEAR_1_TERMS = [
  {
    term: 1,
    title: "Hello Python!",
    slug: "term-1-hello-python",
    description: "Your first conversation with a computer",
    coreSkill: "Print, variables, strings",
    project: "Joke Machine",
    weeks: 8,
    badge: null, // No badge for Term 1
  },
  {
    term: 2,
    title: "Math Wizard",
    slug: "term-2-math-wizard",
    description: "Turn Python into your personal calculator",
    coreSkill: "Numbers, math, input",
    project: "Personal Calculator",
    weeks: 8,
    badge: "Python Beginner",
  },
  {
    term: 3,
    title: "Decision Maker",
    slug: "term-3-decision-maker",
    description: "Teach your program to think",
    coreSkill: "If/else basics",
    project: "Mini Adventure Game",
    weeks: 8,
    badge: null,
  },
  {
    term: 4,
    title: "More Choices",
    slug: "term-4-more-choices",
    description: "Handle any situation",
    coreSkill: "Elif, compound conditions",
    project: "Expanded Adventure",
    weeks: 8,
    badge: "Decision Master",
  },
  {
    term: 5,
    title: "AI Sneak Peek",
    slug: "term-5-ai-sneak-peek",
    description: "Discover the world of Artificial Intelligence",
    coreSkill: "What is AI + review",
    project: "AI in My Life Poster",
    weeks: 8,
    badge: "AI Curious",
  },
  {
    term: 6,
    title: "Loop Magic",
    slug: "term-6-loop-magic",
    description: "Do things over and over (without getting tired)",
    coreSkill: "For loops, patterns",
    project: "ASCII Art Generator",
    weeks: 8,
    badge: null,
  },
  {
    term: 7,
    title: "Game Builder",
    slug: "term-7-game-builder",
    description: "Create games that keep going",
    coreSkill: "While loops, game logic",
    project: "Number Guessing Game",
    weeks: 8,
    badge: "Game Developer",
  },
  {
    term: 8,
    title: "AI Explorer",
    slug: "term-8-ai-explorer",
    description: "Combine everything and explore AI deeper",
    coreSkill: "Lists + AI concepts",
    project: "Quiz Game + AI Presentation",
    weeks: 8,
    badge: "Junior Python Coder", // Year 1 Certificate
  },
] as const;

export const BADGES = {
  pythonBeginner: {
    id: "python-beginner",
    name: "Python Beginner",
    description: "Completed Term 2: Math Wizard",
    icon: "🐍",
    earnedAt: 2, // Term number
  },
  decisionMaster: {
    id: "decision-master",
    name: "Decision Master",
    description: "Completed Term 4: More Choices",
    icon: "🧠",
    earnedAt: 4,
  },
  aiCurious: {
    id: "ai-curious",
    name: "AI Curious",
    description: "Completed Term 5: AI Sneak Peek",
    icon: "🤖",
    earnedAt: 5,
  },
  gameDeveloper: {
    id: "game-developer",
    name: "Game Developer",
    description: "Completed Term 7: Game Builder",
    icon: "🎮",
    earnedAt: 7,
  },
  juniorPythonCoder: {
    id: "junior-python-coder",
    name: "Junior Python Coder",
    description: "Year 1 Certificate - Completed all 8 terms!",
    icon: "🏆",
    earnedAt: 8,
  },
} as const;

export const YEAR_GROUPS = {
  year1: {
    id: "year-1",
    name: "Year 1: Python Foundations",
    ageRange: "9-10",
    description: "Build a solid foundation in Python programming",
    totalTerms: 8,
    totalWeeks: 64,
  },
  year2: {
    id: "year-2",
    name: "Year 2: Advanced AI",
    ageRange: "11-13",
    description: "Apply knowledge to build real AI projects",
    totalTerms: 8, // Levels 9-16 from updated roadmap
    totalWeeks: 64,
    isComingSoon: true,
  },
} as const;

export const TERM_1_WEEKS = [
  {
    week: 1,
    title: "Welcome to Coding!",
    slug: "welcome-to-coding",
    description: "What is programming? Set up our coding space. Type our first code!",
    activity: "Robot Commander - pair exercise giving specific instructions",
    homework: "Find 3 devices at home that use code",
  },
  {
    week: 2,
    title: "Print is Your Voice",
    slug: "print-is-your-voice",
    description: "Use print() to make Python talk. Experiment with messages.",
    activity: "Message Experiment Lab - discover print() capabilities",
    homework: "Create a Print Masterpiece with 8+ print statements",
  },
  {
    week: 3,
    title: "Variables are Boxes",
    slug: "variables-are-boxes",
    description: "Store words and numbers in 'boxes' (variables). Give them names.",
    activity: "Variable Box - physical boxes demonstrating storage",
    homework: "Create My Variable Collection with name, age, favorites",
  },
  {
    week: 4,
    title: "Playing with Text",
    slug: "playing-with-text",
    description: "Combine text, make silly sentences, use CAPS and lowercase.",
    activity: "Silly Sentence Factory - Mad Libs game",
    homework: "Design a Name Badge with borders and formatting",
  },
  {
    week: 5,
    title: "Practice & Play",
    slug: "practice-and-play",
    description: "Reinforce concepts with fun challenges and games.",
    activity: "Coding Olympics - team competitions",
    homework: "Complete 3 of 5 practice challenges",
  },
  {
    week: 6,
    title: "Debugging Adventures",
    slug: "debugging-adventures",
    description: "Finding and fixing mistakes (bugs) — like being a detective!",
    activity: "Bug Detective Agency - find and fix bugs",
    homework: "Bug Fixing Challenge - fix 4 buggy programs",
  },
  {
    week: 7,
    title: "Project: Joke Machine",
    slug: "project-joke-machine",
    description: "Build a program that tells jokes, one at a time.",
    activity: "Joke Machine Workshop - guided project building",
    homework: "Finish and polish Joke Machine for showcase",
  },
  {
    week: 8,
    title: "Showcase Party!",
    slug: "showcase-party",
    description: "Share our Joke Machines, celebrate, get excited for Term 2.",
    activity: "Showcase Presentations - present projects to class",
    homework: "No homework - celebrate and share with family!",
  },
] as const;

// Skills learned in Year 1
export const YEAR_1_SKILLS = [
  { skill: "Write and run Python programs", confidence: 5 },
  { skill: "Use print() to display output", confidence: 5 },
  { skill: "Create and use variables", confidence: 5 },
  { skill: "Get user input with input()", confidence: 5 },
  { skill: "Do math calculations", confidence: 5 },
  { skill: "Make decisions with if/elif/else", confidence: 5 },
  { skill: "Use comparison operators", confidence: 5 },
  { skill: "Combine conditions with and/or", confidence: 4 },
  { skill: "Create for loops", confidence: 5 },
  { skill: "Create while loops", confidence: 4 },
  { skill: "Use random numbers", confidence: 4 },
  { skill: "Work with basic lists", confidence: 4 },
  { skill: "Debug their own code", confidence: 4 },
  { skill: "Explain what AI is", confidence: 4 },
  { skill: "Identify AI in daily life", confidence: 5 },
] as const;

export type Term = (typeof YEAR_1_TERMS)[number];
export type Badge = (typeof BADGES)[keyof typeof BADGES];
export type Week = (typeof TERM_1_WEEKS)[number];

