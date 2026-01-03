# AI Activities Tab Implementation Guide

> **Implementation Date:** January 2025  
> **Status:** ✅ Complete for All 8 Weeks (Simplified Format)

---

## Overview

This document describes the implementation of the **AI Activities** tab (also called "AI Lab") for lessons. This feature adds a brief AI connection to every Python lesson, showing students how each programming concept connects to real-world AI systems.

### Purpose

- **Connect Python to AI**: Every lesson shows how Python skills power AI
- **Keep it Simple**: Brief "Did you know?" facts that take 30 seconds to read
- **Age-Appropriate**: Content designed for 9-10 year olds
- **No External Dependencies**: No playground links that can break or change

---

## Simplified Format (January 2025 Update)

The AI activities were simplified from a complex format (playgrounds, discussion questions, multiple sections) to a brief "Did you know?" format that is more appropriate for the 9-10 year old target audience.

### New Format Structure

Each `ai_activities` field contains:

```markdown
## 🤖 Did You Know? AI Connection

[2-3 sentences connecting the lesson concept to Siri/Alexa/ChatGPT]

[1 encouraging sentence showing they're learning real AI skills]
```

**Total reading time:** ~30 seconds per lesson

---

## All 8 Weeks Content

| Week | Lesson               | AI Connection                                                                                                                                      |
| ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Welcome to Python    | Siri, Alexa, and ChatGPT all started with programmers writing their first instructions - just like your `print("Hello!")` today!                   |
| 2    | Print is Your Voice  | When Alexa says "Playing your favorite song" or ChatGPT writes you an answer, that's output - exactly like your `print()` statements!              |
| 3    | Variables are Boxes  | When Siri says "Good morning, Alex!" she's using a variable to remember your name - just like `name = "Alex"` in your code!                        |
| 4    | Playing with Text    | When you search Google, it uses tricks like `.lower()` so "PIZZA" and "pizza" find the same results!                                               |
| 5    | Practice and Play    | Real AI programmers practice every day - that's how ChatGPT got so smart! Today you're training your brain just like programmers train AI!         |
| 6    | Debugging Adventures | Even AI makes mistakes! When Siri mishears you or autocorrect changes "duck" to something silly, those are bugs.                                   |
| 7    | Joke Machine         | Chatbots and AI assistants store jokes and responses in variables, just like your Joke Machine!                                                    |
| 8    | Showcase Party       | You've learned `print()` for output, variables for memory, and string methods for text - the same building blocks inside Siri, Alexa, and ChatGPT! |

---

## Architecture

### Component Structure

```
components/lessons/
└── lesson-viewer.tsx          ← Main lesson viewer (AI Lab tab)

app/lessons/[course]/[id]/
└── page.tsx                   ← Lesson page (passes ai_activities to viewer)

app/api/admin/sync-lessons/
└── route.ts                   ← Sync route (syncs ai_activities from markdown)

docs/Lesson_content/
└── Term1-HelloPython/
    └── Week*/lesson.md        ← Contains ai_activities frontmatter
```

### Database Schema

**Table:** `lessons`  
**Column:** `ai_activities` (TEXT)

```sql
ALTER TABLE lessons ADD COLUMN IF NOT EXISTS ai_activities TEXT;
```

---

## Files Updated

### Lesson Content Files

All 8 weeks now have simplified `ai_activities` content:

1. `docs/Lesson_content/Term1-HelloPython/Week1-WelcomeToCoding/lesson.md`
2. `docs/Lesson_content/Term1-HelloPython/Week2-PrintIsYourVoice/lesson.md`
3. `docs/Lesson_content/Term1-HelloPython/Week3-VariablesAreBoxes/lesson.md`
4. `docs/Lesson_content/Term1-HelloPython/Week4-PlayingWithText/lesson.md`
5. `docs/Lesson_content/Term1-HelloPython/Week5-PracticeAndPlay/lesson.md`
6. `docs/Lesson_content/Term1-HelloPython/Week6-DebuggingAdventures/lesson.md`
7. `docs/Lesson_content/Term1-HelloPython/Week7-ProjectJokeMachine/lesson.md`
8. `docs/Lesson_content/Term1-HelloPython/Week8-ShowcaseParty/lesson.md`

---

## Syncing Content

To update AI activities in the database:

1. Go to **Admin Panel**
2. Click **"Sync Lessons from Files"**
3. The `ai_activities` content will sync from markdown to database
4. The AI Lab tab will appear for each lesson

---

## Styling

The AI Lab tab uses a distinct color scheme:

- **Background**: Emerald/teal gradient (`from-emerald-50 via-teal-50 to-cyan-50`)
- **Border**: Emerald (`border-emerald-200/50`)
- **Icon**: BrainCircuit (emerald/teal gradient)

---

## Troubleshooting

### AI Lab Tab is Greyed Out

**Possible Causes:**

1. `ai_activities` column doesn't exist in database

   - **Solution**: Run migration `scripts/19-add-ai-activities-column.sql`

2. Lesson hasn't been synced

   - **Solution**: Go to Admin Panel → Sync Lessons from Files

3. `ai_activities` is empty in database
   - **Solution**: Check markdown file has `ai_activities` in frontmatter, then sync

---

## Best Practices for Writing AI Connections

1. **Keep it brief**: 3-4 sentences maximum
2. **Use familiar AI examples**: Siri, Alexa, ChatGPT, Netflix, Google
3. **Connect directly to the lesson**: Reference the specific Python concept taught
4. **Be encouraging**: End with a positive statement about their learning
5. **No external links**: Avoid playground links that can break

---

## Related Files

- **Migration**: `scripts/19-add-ai-activities-column.sql`
- **Component**: `components/lessons/lesson-viewer.tsx`
- **Sync Route**: `app/api/admin/sync-lessons/route.ts`
- **Lesson Files**: `docs/Lesson_content/Term1-HelloPython/Week*/lesson.md`

---

## Notes

- The AI Lab tab is **disabled** (greyed out) when `ai_activities` is empty or null
- Content is rendered as markdown
- Emojis are used sparingly (just the 🤖 in the heading)
- The AI Playground component and standalone page have been removed (January 2025)

---

**Last Updated:** January 2025  
**Status:** ✅ All 8 Weeks Complete (Simplified Format)
