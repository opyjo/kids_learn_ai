# AI Activities Tab Implementation Guide

> **Implementation Date:** January 2025  
> **Status:** ✅ Complete for All 8 Terms (64 Weeks Total)

---

## Overview

This document describes the implementation of the **AI Activities** tab (also called "AI Lab") for lessons. This feature adds AI connections to Python lessons across all 8 terms, showing students how each programming concept connects to real-world AI systems.

### Purpose

- **Connect Python to AI**: Lessons show how Python skills power AI
- **Hands-On Activities**: Interactive AI activities in teacher notes
- **Age-Appropriate**: Content designed for 9-10 year olds
- **Comprehensive Integration**: AI activities integrated across all 8 terms (32 selected weeks)

---

## Format Structure

### Student-Facing Content (lesson.md)

Each `ai_activities` field in lesson.md contains:

```markdown
## 🤖 Did You Know? AI Connection

[2-4 sentences connecting the lesson concept to Siri/Alexa/ChatGPT]

[1 encouraging sentence showing they're learning real AI skills]
```

**Total reading time:** ~30 seconds per lesson

### Teacher-Facing Content (teacher-notes.md)

Each teacher-notes.md file includes an "AI Activity" section with:

```markdown
## 🤖 AI Activity: [Activity Name] (5-10 minutes)

### What to Do

[Step-by-step instructions]

### Discussion Questions

- Question 1
- Question 2

### Teaching Tips

- Tip 1
- Tip 2
```

**Duration:** 5-10 minutes per activity

---

## Integration Summary

AI activities have been integrated across all 8 terms, with 4 selected weeks per term (32 weeks total):

### Term 1: Hello Python (4 activities)

- Week 1: Meet an AI - Interact with chatbot
- Week 3: AI Memory - How AI stores info
- Week 5: Quick, Draw! - AI recognition game
- Week 7: AI Joke Rating - Training data concept

### Term 2: Math Wizard (4 activities)

- Week 1: AI Calculator vs Your Calculator
- Week 3: Training Data Collection
- Week 5: Pattern Detective
- Week 7: Smart Calculator Ideas

### Term 3: Decision Maker (4 activities)

- Week 1: Akinator - 20 Questions with AI
- Week 3: Decision Trees
- Week 5: Teachable Machine Demo
- Week 7: AI Storyteller Demo

### Term 4: More Choices (4 activities)

- Week 2: Classification Challenge
- Week 4: AI Spam Filters
- Week 5: AI Fairness Discussion
- Week 6: How AI Knows Right Answers

### Term 5: AI Sneak Peek (4 enhanced activities)

- Week 1: AI Scavenger Hunt
- Week 2: AI Diary
- Week 4: Train Your Classmate
- Week 7: AI Impact Interview

### Term 6: Loop Magic (4 activities)

- Week 1: AI Training Epochs
- Week 4: Pattern Recognition
- Week 7: AI Art Discussion
- Week 8: AI vs Human Art

### Term 7: Game Builder (4 activities)

- Week 4: AI Randomness
- Week 5: AlphaGo Story
- Week 6: AI Game Opponents
- Week 7: Binary Search - Smart Guessing

### Term 8: AI Explorer (4 enhanced activities)

- Week 1: Datasets Are Lists
- Week 4: Teachable Machine Project
- Week 5: AI Court Case Role-Play
- Week 8: My AI Future

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

**Total: 32 lesson.md files** updated with enhanced `ai_activities` content across all 8 terms:

- **Term 1**: 4 weeks (Weeks 1, 3, 5, 7)
- **Term 2**: 4 weeks (Weeks 1, 3, 5, 7)
- **Term 3**: 4 weeks (Weeks 1, 3, 5, 7)
- **Term 4**: 4 weeks (Weeks 2, 4, 5, 6)
- **Term 5**: 4 weeks (Weeks 1, 2, 4, 7) - Enhanced with hands-on activities
- **Term 6**: 4 weeks (Weeks 1, 4, 7, 8)
- **Term 7**: 4 weeks (Weeks 4, 5, 6, 7)
- **Term 8**: 4 weeks (Weeks 1, 4, 5, 8) - Enhanced with hands-on activities

### Teacher Notes Files

**Total: 32 teacher-notes.md files** updated with "AI Activity" sections:

Each selected week includes a complete AI Activity section with:

- What to Do (step-by-step instructions)
- Discussion Questions
- Teaching Tips
- Alternative Activities (for time constraints or technical issues)

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

### For lesson.md (Student-Facing)

1. **Keep it brief**: 3-4 sentences maximum
2. **Use familiar AI examples**: Siri, Alexa, ChatGPT, Netflix, Google
3. **Connect directly to the lesson**: Reference the specific Python concept taught
4. **Be encouraging**: End with a positive statement about their learning
5. **Include hands-on suggestions**: Mention activities students can try

### For teacher-notes.md (Teacher-Facing)

1. **Duration**: 5-10 minutes per activity
2. **Step-by-step instructions**: Clear, actionable steps
3. **Discussion questions**: 2-3 questions to prompt thinking
4. **Teaching tips**: Practical advice for facilitation
5. **Alternative activities**: Backup options for time/technical constraints
6. **Age-appropriate**: Keep content suitable for 9-10 year olds

---

## Related Files

- **Migration**: `scripts/19-add-ai-activities-column.sql`
- **Component**: `components/lessons/lesson-viewer.tsx`
- **Sync Route**: `app/api/admin/sync-lessons/route.ts`
- **Lesson Files**: `docs/Lesson_content/Term*/Week*/lesson.md`
- **Teacher Notes**: `docs/Lesson_content/Term*/Week*/teacher-notes.md`

---

## Notes

- The AI Lab tab is **disabled** (greyed out) when `ai_activities` is empty or null
- Content is rendered as markdown
- Emojis are used sparingly (just the 🤖 in the heading)
- AI activities are integrated selectively (4 weeks per term) where they fit naturally
- Teacher notes include complete activity guides for hands-on AI experiences
- Activities use familiar tools (Akinator, Quick Draw, Teachable Machine) when appropriate

---

## Impact

This comprehensive integration increases AI content from ~12% to ~30-40% of the curriculum:

- **Before**: Only Terms 5 & 8 had significant AI content (~12% of curriculum)
- **After**: All 8 terms have AI touchpoints, with 32 weeks having dedicated AI activities (~30-40% of curriculum)

Students now:

- See AI connections in every term
- Experience hands-on AI activities throughout the year
- Build mental models of AI concepts while learning Python
- Engage with AI ethics discussions spread throughout
- Use real AI tools (where appropriate) to make concepts tangible

---

**Last Updated:** January 2025  
**Status:** ✅ All 8 Terms Complete (32 Weeks with AI Activities)
