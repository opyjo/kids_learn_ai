# Lesson & Teacher Notes File Sync System

> **Last Updated:** December 2024

This document describes the synchronization system that allows you to manage lesson content and teacher notes in markdown files and sync them to the database with a single click.

---

## Overview

Instead of running SQL migrations every time you need to update lesson content or teacher notes, you can now:

1. Edit markdown files in VS Code (with full syntax highlighting and preview)
2. Click "Sync Lessons" in the admin panel
3. Both lessons AND teacher notes are instantly updated in the database

```
┌─────────────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│  Edit lesson.md         │ ──▶  │  Click "Sync"    │ ──▶  │  Database       │
│  Edit teacher-notes.md  │      │  in Admin Panel  │      │  Updated!       │
└─────────────────────────┘      └──────────────────┘      └─────────────────┘
```

---

## Benefits

| Before (Migrations)      | After (File Sync)         |
|--------------------------|---------------------------|
| Edit SQL migration file  | Edit markdown file        |
| Run migration command    | Click "Sync" button       |
| Deploy to apply changes  | Instant update            |
| Hard to preview content  | Live preview in VS Code   |
| No version history       | Full Git history          |
| One file at a time       | Bulk edit across files    |

---

## How It Works

### 1. File Structure

Lessons and teacher notes are stored as markdown files:

```
docs/Lesson_content/
├── Term1-HelloPython/
│   ├── Week1-WelcomeToCoding/
│   │   ├── lesson.md          ← Main lesson content (requires frontmatter)
│   │   └── teacher-notes.md   ← Teacher notes (plain markdown, synced automatically)
│   ├── Week2-PrintIsYourVoice/
│   │   ├── lesson.md
│   │   └── teacher-notes.md
│   └── ...
├── PythonFoundationsI/
│   └── ...
└── ...
```

**Important:** Teacher notes are synced automatically when they exist alongside a `lesson.md` file. They don't require frontmatter - just plain markdown content.

### 2. Frontmatter Format

Each `lesson.md` file must have YAML frontmatter at the top:

```yaml
---
title: "Welcome to Coding!"
description: "Learn what programming is and write your first code!"
difficulty: "beginner"
order_index: 1
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: false
starter_code: |
  # Your starter code here
  print("Hello, World!")
solution_code: |
  # Solution code (optional)
  print("Hello, World!")
class_activities: |
  **Activity: Hello Chain!**
  
  1. Each student writes their own message
  2. Run the code and share with a partner
take_home_assignment: |
  **Assignment: Three Facts About Me**
  
  Create a program that prints 3 facts about yourself.
---

# Your Lesson Content Here

The rest of the file is regular markdown...
```

### 3. Required Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ Yes | Lesson title displayed to students |
| `description` | string | ✅ Yes | Short description of the lesson |
| `order_index` | number | ✅ Yes | Position in the course (1, 2, 3...) |
| `course_slug` | string | ✅ Yes | Must match a course slug in the database |
| `difficulty` | string | No | `beginner`, `intermediate`, or `advanced` |
| `is_premium` | boolean | No | Whether lesson requires premium access |
| `requires_trinket` | boolean | No | Whether lesson uses Trinket editor |
| `starter_code` | string | No | Initial code shown in the editor |
| `solution_code` | string | No | Solution code (admin reference) |
| `class_activities` | string | No | In-class activity instructions |
| `take_home_assignment` | string | No | Homework assignment |

### 4. Course Slugs

The `course_slug` must match an existing course in the database:

| Course Slug | Course Title |
|-------------|--------------|
| `term-1-hello-python` | Term 1: Hello Python! |
| `term-2-math-wizard` | Term 2: Math Wizard |
| `term-3-decision-maker` | Term 3: Decision Maker |
| `term-4-more-choices` | Term 4: More Choices |
| `term-5-ai-sneak-peek` | Term 5: AI Sneak Peek |
| `term-6-loop-magic` | Term 6: Loop Magic |
| `term-7-game-builder` | Term 7: Game Builder |
| `term-8-ai-explorer` | Term 8: AI Explorer |

---

## Usage Guide

### Adding a New Lesson

1. **Create the folder structure:**
   ```
   docs/Lesson_content/Term1-HelloPython/Week4-NewLesson/
   └── lesson.md
   ```

2. **Add frontmatter and content:**
   ```yaml
   ---
   title: "New Lesson Title"
   description: "What students will learn"
   difficulty: "beginner"
   order_index: 4
   course_slug: "term-1-hello-python"
   ---

   # Your lesson content in markdown
   
   ## Section 1
   Content here...
   ```

3. **Go to `/admin` and click "Sync Lessons from Files"**

4. **Check the results dialog** for success/errors

### Updating an Existing Lesson

1. **Open the `lesson.md` file** in VS Code

2. **Make your changes** (content, frontmatter, etc.)

3. **Save the file**

4. **Click "Sync Lessons from Files"** in the admin panel

### Bulk Editing

Since lessons are markdown files, you can use VS Code's find/replace across files:

1. Press `Cmd+Shift+F` (Mac) or `Ctrl+Shift+F` (Windows)
2. Search for text across all lesson files
3. Replace as needed
4. Click "Sync Lessons" to update the database

### Adding/Updating Teacher Notes

Teacher notes are synced automatically alongside lessons:

1. **Create/edit `teacher-notes.md`** in the same folder as the lesson:
   ```
   docs/Lesson_content/Term1-HelloPython/Week1-WelcomeToCoding/
   ├── lesson.md          ← Must exist first
   └── teacher-notes.md   ← Create this file
   ```

2. **Add your teacher notes content** (plain markdown, no frontmatter needed):
   ```markdown
   # Level 1, Lesson 1: Welcome to Python! 🐍

   ## Teacher's Guide

   **Course:** Python Foundations I - Getting Started  
   **Age Group:** 9-13 years old  
   **Duration:** 60 minutes

   ---

   ## 📋 Lesson Overview

   ### Purpose
   This is the foundational lesson for the entire curriculum...

   ### Learning Objectives
   By the end of this lesson, students will be able to:
   1. Explain what Python is in their own words
   2. Navigate the coding environment
   3. Write and execute a simple Python program

   [... more content ...]
   ```

3. **Click "Sync Lessons from Files"** - teacher notes sync automatically with lessons

**Key Points:**
- Teacher notes are linked to lessons via `lesson_id` in the database
- The lesson must be synced successfully before teacher notes can be added
- Teacher notes don't require frontmatter - they're stored as plain markdown
- If a `teacher-notes.md` file doesn't exist, nothing is synced for that lesson

---

## Technical Details

### Files

| File | Purpose |
|------|---------|
| `app/api/admin/sync-lessons/route.ts` | API endpoint for syncing |
| `components/admin/sync-lessons-button.tsx` | UI button component |
| `app/admin/page.tsx` | Admin dashboard (contains sync button) |

### API Endpoint

**POST** `/api/admin/sync-lessons`

**Authentication:** Requires admin role

**Response:**
```json
{
  "success": true,
  "message": "Synced 3 lessons and 2 teacher notes",
  "synced": [
    "Term1-HelloPython/Week1-WelcomeToCoding (updated)",
    "Term1-HelloPython/Week2-PrintIsYourVoice (created)"
  ],
  "errors": [],
  "skipped": [
    "PythonFoundationsI/WelcomeToPython: Missing required frontmatter"
  ],
  "teacherNotes": {
    "synced": [
      "Term1-HelloPython/Week1-WelcomeToCoding (updated)",
      "Term1-HelloPython/Week2-PrintIsYourVoice (created)"
    ],
    "errors": []
  }
}
```

### Database

The sync uses an **upsert** strategy:

**For Lessons:**
- If a lesson with the same `course_id` and `order_index` exists → **UPDATE**
- If no matching lesson exists → **INSERT**

This is enabled by a unique constraint:
```sql
UNIQUE (course_id, order_index)
```

**For Teacher Notes:**
- If teacher notes for the `lesson_id` exist → **UPDATE** content
- If no teacher notes exist → **INSERT** new record

The `teacher_notes` table has a unique constraint on `lesson_id` ensuring one-to-one relationship:
```sql
-- teacher_notes.lesson_id is UNIQUE
```

### Dependencies

- `gray-matter` - Parses YAML frontmatter from markdown files

---

## Troubleshooting

### "Course not found" Error

**Problem:** The `course_slug` in frontmatter doesn't match any course in the database.

**Solution:** Check that the slug exactly matches one from the courses table. Use:
```sql
SELECT slug, title FROM courses ORDER BY order_index;
```

### "Missing required frontmatter" (Skipped)

**Problem:** The lesson file is missing `title`, `course_slug`, or `order_index`.

**Solution:** Add all required frontmatter fields to the file.

### Lesson Not Updating

**Problem:** You edited a file but changes don't appear after sync.

**Possible causes:**
1. File wasn't saved
2. Frontmatter has syntax errors (check YAML formatting)
3. Different file was edited (check the folder path)

**Solution:** Verify the file path in the sync results dialog.

### Duplicate Lessons

**Problem:** Getting a unique constraint violation.

**Solution:** Ensure each lesson has a unique `order_index` within its course. No two lessons in the same course can have the same order index.

---

## Example Lesson File

Here's a complete example of a well-formatted lesson file:

```markdown
---
title: "Variables are Boxes!"
description: "Learn to store information in variables - Python's memory boxes!"
difficulty: "beginner"
order_index: 3
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: false
starter_code: |
  # Variables are like labeled boxes!
  
  name = "Your Name"
  age = 10
  
  print("My name is", name)
  print("I am", age, "years old")
class_activities: |
  **Activity: Variable Swap Game!**
  
  1. Create 3 variables about yourself
  2. Print them using print()
  3. Swap values with a partner
take_home_assignment: |
  **Assignment: My Profile Card**
  
  Create a program with at least 5 variables about yourself.
  Submit your Trinket link.
---

# Term 1, Week 3: Variables are Boxes! 📦

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old

---

## 🎯 What You'll Learn Today

- What variables are and why they're useful
- How to create variables
- How to use variables with print()

---

## What is a Variable?

Imagine you have a **labeled box** where you can store things...

[Rest of lesson content...]
```

---

## Future Improvements

Potential enhancements for the sync system:

- [ ] Automatic sync on Git push (via webhook)
- [ ] Preview mode before syncing
- [ ] Diff view showing what will change
- [x] ~~Sync teacher notes separately~~ ✅ Implemented!
- [ ] Import/export lessons as JSON
- [ ] Version history in the admin panel

---

*KidsLearnAI - Empowering the Next Generation with AI Education*

