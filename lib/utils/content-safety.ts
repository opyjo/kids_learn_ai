/**
 * Content Safety Utilities for Kids Learning Platform
 * Ensures all chat interactions are safe for children ages 8-16
 */

export interface SafetyCheckResult {
  isSafe: boolean;
  reason?: string;
  action: "allow" | "block" | "warn";
}

// Comprehensive list of inappropriate keywords
const INAPPROPRIATE_KEYWORDS = [
  // Illegal activities
  "hack",
  "hacking",
  "crack",
  "pirate",
  "steal",
  "theft",
  "illegal",
  "crime",
  "weapon",
  "drug",
  "bomb",

  // Personal information requests
  "address",
  "phone number",
  "credit card",
  "password",
  "social security",
  "where do you live",
  "how old are you",

  // Bullying/harassment
  "stupid",
  "idiot",
  "dumb",
  "hate you",
  "kill yourself",
  "loser",

  // Inappropriate content
  "sex",
  "porn",
  "nude",
  "dating",
];

// Topics that are off-limits (non-Python)
const OFF_TOPIC_PATTERNS = [
  /teach me (javascript|java|c\+\+|ruby|php|html|css|sql)/i,
  /help.*with.*(math|science|history|english|homework)/i,
  /what.*your.*(favorite|opinion|feeling)/i,
  /tell me (a joke|story|about yourself)/i,
  /(political|religion|sports)/i,
];

// Patterns that suggest request for complete solutions
const SOLUTION_REQUEST_PATTERNS = [
  /write.*code.*for me/i,
  /do.*homework/i,
  /give.*answer/i,
  /complete.*solution/i,
  /solve.*for me/i,
  /write.*program.*for/i,
];

/**
 * Check if message content is safe and appropriate
 */
export const checkContentSafety = (message: string): SafetyCheckResult => {
  const lowerMessage = message.toLowerCase().trim();

  // Check message length (prevent spam/abuse)
  if (message.length > 2000) {
    return {
      isSafe: false,
      reason: "Message too long",
      action: "block",
    };
  }

  if (message.length < 2) {
    return {
      isSafe: false,
      reason: "Message too short",
      action: "block",
    };
  }

  // Check for inappropriate keywords
  for (const keyword of INAPPROPRIATE_KEYWORDS) {
    if (lowerMessage.includes(keyword)) {
      return {
        isSafe: false,
        reason: `Inappropriate content: ${keyword}`,
        action: "block",
      };
    }
  }

  // Check for excessive special characters (potential injection)
  const specialCharRatio =
    (message.match(/[^a-zA-Z0-9\s.,!?]/g) || []).length / message.length;
  if (specialCharRatio > 0.3) {
    return {
      isSafe: false,
      reason: "Suspicious content pattern",
      action: "block",
    };
  }

  return {
    isSafe: true,
    action: "allow",
  };
};

/**
 * Check if message is about Python programming
 */
export const isPythonRelated = (message: string): boolean => {
  const pythonKeywords = [
    "python",
    "code",
    "program",
    "variable",
    "function",
    "loop",
    "if",
    "else",
    "print",
    "input",
    "list",
    "dictionary",
    "string",
    "int",
    "float",
    "def",
    "class",
    "import",
    "error",
    "bug",
    "debug",
    "syntax",
  ];

  const lowerMessage = message.toLowerCase();

  // Check if any Python keywords are present
  const hasPythonKeyword = pythonKeywords.some((keyword) =>
    lowerMessage.includes(keyword)
  );

  // Check if it's off-topic
  const isOffTopic = OFF_TOPIC_PATTERNS.some((pattern) =>
    pattern.test(message)
  );

  // If it has Python keywords and is not off-topic, it's likely Python-related
  if (hasPythonKeyword && !isOffTopic) {
    return true;
  }

  // Short messages might be greetings or follow-ups
  if (message.length < 50) {
    return true; // Allow short messages to pass (could be "yes", "thanks", etc.)
  }

  return false;
};

/**
 * Check if message is about mathematics
 */
export const isMathRelated = (message: string): boolean => {
  const mathKeywords = [
    "math",
    "number",
    "add",
    "subtract",
    "multiply",
    "divide",
    "fraction",
    "decimal",
    "equation",
    "algebra",
    "geometry",
    "calculate",
    "solve",
    "problem",
    "plus",
    "minus",
    "times",
    "equal",
    "percent",
    "measurement",
    "shape",
    "angle",
    "area",
    "volume",
    "perimeter",
  ];

  const lowerMessage = message.toLowerCase();

  // Check if any math keywords are present
  const hasMathKeyword = mathKeywords.some((keyword) =>
    lowerMessage.includes(keyword)
  );

  // If it has math keywords, it's math-related
  if (hasMathKeyword) {
    return true;
  }

  // Short messages might be greetings or follow-ups
  if (message.length < 50) {
    return true;
  }

  return false;
};

/**
 * Check if message is about science
 */
export const isScienceRelated = (message: string): boolean => {
  const scienceKeywords = [
    "science",
    "experiment",
    "biology",
    "chemistry",
    "physics",
    "nature",
    "animal",
    "plant",
    "cell",
    "energy",
    "force",
    "gravity",
    "light",
    "sound",
    "water",
    "earth",
    "space",
    "planet",
    "star",
    "weather",
    "climate",
    "ecosystem",
    "photosynthesis",
    "molecule",
    "atom",
  ];

  const lowerMessage = message.toLowerCase();

  // Check if any science keywords are present
  const hasScienceKeyword = scienceKeywords.some((keyword) =>
    lowerMessage.includes(keyword)
  );

  // If it has science keywords, it's science-related
  if (hasScienceKeyword) {
    return true;
  }

  // Short messages might be greetings or follow-ups
  if (message.length < 50) {
    return true;
  }

  return false;
};

/**
 * Check if message is about creative arts
 */
export const isCreativeArtsRelated = (message: string): boolean => {
  const artsKeywords = [
    "art",
    "draw",
    "paint",
    "color",
    "creative",
    "create",
    "design",
    "write",
    "story",
    "poem",
    "music",
    "song",
    "dance",
    "craft",
    "make",
    "imagine",
    "idea",
    "sketch",
    "illustrate",
    "character",
    "scene",
    "composition",
    "style",
    "technique",
  ];

  const lowerMessage = message.toLowerCase();

  // Check if any arts keywords are present
  const hasArtsKeyword = artsKeywords.some((keyword) =>
    lowerMessage.includes(keyword)
  );

  // If it has arts keywords, it's arts-related
  if (hasArtsKeyword) {
    return true;
  }

  // Short messages might be greetings or follow-ups
  if (message.length < 50) {
    return true;
  }

  return false;
};

/**
 * Check if message is on-topic for the given tutor
 */
export const isOnTopicForTutor = (
  message: string,
  tutorId: string
): boolean => {
  switch (tutorId) {
    case "brightbyte":
      return isPythonRelated(message);
    case "mathbot":
      return isMathRelated(message);
    case "scienceowl":
      return isScienceRelated(message);
    case "artai":
      return isCreativeArtsRelated(message);
    default:
      return isPythonRelated(message); // Default to Python
  }
};

/**
 * Check if message is requesting a complete solution
 */
export const isRequestingCompleteSolution = (message: string): boolean => {
  return SOLUTION_REQUEST_PATTERNS.some((pattern) => pattern.test(message));
};

/**
 * Sanitize message to prevent injection attacks
 */
export const sanitizeMessage = (message: string): string => {
  // Remove any HTML tags
  let sanitized = message.replace(/<[^>]*>/g, "");

  // Remove any script-like content
  sanitized = sanitized.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );

  // Trim whitespace
  sanitized = sanitized.trim();

  return sanitized;
};

/**
 * Validate conversation history for safety
 */
export const validateConversationLength = (
  messageCount: number
): SafetyCheckResult => {
  const MAX_MESSAGES = 50; // Maximum messages in a conversation

  if (messageCount > MAX_MESSAGES) {
    return {
      isSafe: false,
      reason: "Conversation too long",
      action: "block",
    };
  }

  return {
    isSafe: true,
    action: "allow",
  };
};

/**
 * Log safety events for monitoring (in production, send to logging service)
 */
export const logSafetyEvent = (
  event: "block" | "warn" | "allow",
  reason: string,
  message: string
) => {
  // In development, just console log
  if (process.env.NODE_ENV === "development") {
    console.log(
      `[SAFETY ${event.toUpperCase()}]`,
      reason,
      message.slice(0, 100)
    );
  }

  // In production, you would send this to a logging service like:
  // - Sentry
  // - LogRocket
  // - CloudWatch
  // - DataDog
  // etc.
};
