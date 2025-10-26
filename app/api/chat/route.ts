import { NextRequest, NextResponse } from "next/server";
import {
  BRIGHTBYTE_SYSTEM_PROMPT,
  FALLBACK_RESPONSES,
} from "@/lib/constants/chatbot-prompts";
import {
  checkContentSafety,
  sanitizeMessage,
  validateConversationLength,
  logSafetyEvent,
  isPythonRelated,
  isRequestingCompleteSolution,
} from "@/lib/utils/content-safety";

export const runtime = "edge";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const limit = rateLimitMap.get(identifier);

  if (!limit || now > limit.resetTime) {
    // Reset or create new limit (10 messages per minute)
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + 60000, // 1 minute
    });
    return true;
  }

  if (limit.count >= 10) {
    return false; // Rate limit exceeded
  }

  limit.count++;
  return true;
};

export const POST = async (req: NextRequest) => {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    // Check for API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OpenAI API key not configured");
      return NextResponse.json(
        { error: "Chat service is not configured. Please contact support." },
        { status: 500 }
      );
    }

    // Rate limiting (use IP or session ID)
    const clientId = req.headers.get("x-forwarded-for") || "anonymous";
    if (!checkRateLimit(clientId)) {
      logSafetyEvent("block", "Rate limit exceeded", clientId);
      return NextResponse.json(
        {
          role: "assistant",
          content:
            "Whoa, slow down! 🐌 Let's take a moment to think about each question. I'm here to help you learn, not rush through!",
        },
        { status: 429 }
      );
    }

    // Validate conversation length
    const conversationCheck = validateConversationLength(messages.length);
    if (!conversationCheck.isSafe) {
      logSafetyEvent(
        "block",
        conversationCheck.reason || "Conversation too long",
        ""
      );
      return NextResponse.json({
        role: "assistant",
        content:
          "This conversation is getting quite long! Let's start fresh. Click the Clear button to begin a new coding session! 🔄",
      });
    }

    // Get and validate last user message
    const lastMessage = messages.at(-1);
    if (!lastMessage || lastMessage.role !== "user") {
      return NextResponse.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }

    // Sanitize user input
    const sanitizedContent = sanitizeMessage(lastMessage.content);

    // Comprehensive safety check
    const safetyCheck = checkContentSafety(sanitizedContent);
    if (!safetyCheck.isSafe) {
      logSafetyEvent(
        "block",
        safetyCheck.reason || "Safety check failed",
        sanitizedContent
      );
      return NextResponse.json({
        role: "assistant",
        content: FALLBACK_RESPONSES.offTopic,
      });
    }

    // Check if message is Python-related
    if (!isPythonRelated(sanitizedContent)) {
      logSafetyEvent("warn", "Off-topic question", sanitizedContent);
      return NextResponse.json({
        role: "assistant",
        content: FALLBACK_RESPONSES.offTopic,
      });
    }

    // Check if requesting complete solution
    if (isRequestingCompleteSolution(sanitizedContent)) {
      logSafetyEvent("warn", "Requesting complete solution", sanitizedContent);
      return NextResponse.json({
        role: "assistant",
        content: FALLBACK_RESPONSES.completeSolution,
      });
    }

    // Update last message with sanitized content
    const sanitizedMessages = [
      ...messages.slice(0, -1),
      { ...lastMessage, content: sanitizedContent },
    ];

    // Prepare messages for OpenAI with safety context
    const openAIMessages: ChatMessage[] = [
      {
        role: "system",
        content: `${BRIGHTBYTE_SYSTEM_PROMPT}

CRITICAL SAFETY REMINDER:
- You are chatting with a child (ages 8-16)
- ONLY discuss Python programming
- NEVER give complete solutions - guide them to learn
- Use age-appropriate language
- Be encouraging and supportive
- If anything seems inappropriate, redirect to Python programming`,
      },
      ...sanitizedMessages,
    ];

    // Log allowed interaction
    logSafetyEvent("allow", "Python question approved", sanitizedContent);

    // Call OpenAI API with safety parameters
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: openAIMessages,
        temperature: 0.6, // Lower for more consistent, safer responses
        max_tokens: 800, // Reasonable response length for kids
        presence_penalty: 0.6,
        frequency_penalty: 0.3,
        top_p: 0.9, // Slightly more focused responses
        // Add content filter for additional safety
        user: clientId.slice(0, 64), // For OpenAI's abuse monitoring
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API error:", error);
      return NextResponse.json(
        { error: "Failed to get response from chat service" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message;

    if (!assistantMessage || !assistantMessage.content) {
      return NextResponse.json(
        { error: "No response generated" },
        { status: 500 }
      );
    }

    // Validate AI response for safety (output filtering)
    const responseCheck = checkContentSafety(assistantMessage.content);
    if (!responseCheck.isSafe) {
      logSafetyEvent(
        "block",
        "AI response failed safety check",
        assistantMessage.content
      );
      return NextResponse.json({
        role: "assistant",
        content: FALLBACK_RESPONSES.technicalIssue,
      });
    }

    // Check if AI is staying on topic (Python)
    if (
      assistantMessage.content.length > 100 &&
      !isPythonRelated(assistantMessage.content)
    ) {
      logSafetyEvent(
        "warn",
        "AI response went off-topic",
        assistantMessage.content
      );
      return NextResponse.json({
        role: "assistant",
        content: FALLBACK_RESPONSES.offTopic,
      });
    }

    return NextResponse.json(assistantMessage);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
};
