# Lesson File Upload Guide

> **For Admins:** How to add and update lessons using markdown files

---

## Quick Start

### Adding a New Lesson

1. **Copy the template:**
   ```
   docs/Lesson_content/_TEMPLATE_lesson.md
   ```

2. **Create the folder structure:**
   ```
   docs/Lesson_content/[CourseName]/[WeekName]/
   ```

3. **Paste as `lesson.md`** in that folder

4. **Update the frontmatter** (the part between `---` lines)

5. **Add your lesson content** below the frontmatter

6. **Go to Admin Panel** → Click "Sync Lessons from Files"

---

## File Structure

```
docs/Lesson_content/
│
├── _TEMPLATE_lesson.md         ← Copy from this template
├── _TEMPLATE_teacher-notes.md  ← Copy from this template
│
├── Term1-HelloPython/          ← Course folder
│   ├── Week1-WelcomeToCoding/  ← Week folder
│   │   ├── lesson.md           ← Student lesson (required)
│   │   └── teacher-notes.md    ← Teacher notes (optional)
│   │
│   ├── Week2-PrintIsYourVoice/
│   │   ├── lesson.md
│   │   └── teacher-notes.md
│   │
│   └── Week3-VariablesAreBoxes/
│       ├── lesson.md
│       └── teacher-notes.md
│
├── Term2-MathWizard/
│   └── ...
```

### Naming Rules

| File Type | Required Name | Notes |
|-----------|---------------|-------|
| Lesson | `lesson.md` | Must be exactly this name |
| Teacher Notes | `teacher-notes.md` | Must be exactly this name |
| Folder | Any descriptive name | e.g., `Week1-WelcomeToCoding` |

---

## Frontmatter Reference

Every `lesson.md` file MUST start with frontmatter (YAML between `---` lines):

```yaml
---
title: "Welcome to Python!"
description: "Your first steps into coding"
difficulty: "beginner"
order_index: 1
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: false
starter_code: |
  # Code that appears in the editor
  print("Hello, World!")
class_activities: |
  ## 🎮 Class Activity
  Instructions for in-class activity
take_home_assignment: |
  ## 📚 Homework
  Instructions for homework
---

# Your lesson content starts here...
```

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `title` | string | Lesson title shown to students | `"Welcome to Python!"` |
| `description` | string | Brief description | `"Learn the basics"` |
| `order_index` | number | Week number (1, 2, 3...) | `1` |
| `course_slug` | string | Must match database course | `"term-1-hello-python"` |

### Optional Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `difficulty` | string | `"beginner"` | `beginner`, `intermediate`, `advanced` |
| `is_premium` | boolean | `false` | Requires enrollment |
| `requires_trinket` | boolean | `false` | Uses Trinket editor |
| `starter_code` | string | `""` | Code shown in editor |
| `class_activities` | string | `""` | In-class activity tab |
| `take_home_assignment` | string | `""` | Homework tab |

---

## Course Slugs

Use these exact slugs for `course_slug`:

### Year 1 (Ages 9-10)

| Term | Slug | Title |
|------|------|-------|
| 1 | `term-1-hello-python` | Hello Python! |
| 2 | `term-2-math-wizard` | Math Wizard |
| 3 | `term-3-decision-maker` | Decision Maker |
| 4 | `term-4-more-choices` | More Choices |
| 5 | `term-5-ai-sneak-peek` | AI Sneak Peek |
| 6 | `term-6-loop-magic` | Loop Magic |
| 7 | `term-7-game-builder` | Game Builder |
| 8 | `term-8-ai-explorer` | AI Explorer |

### Year 2 (Ages 11-13)

| Term | Slug | Title |
|------|------|-------|
| 1 | `year2-term-1-python-accelerated` | Python Accelerated |
| 2 | `year2-term-2-loops-mastery` | Loops & Logic Mastery |
| 3 | `year2-term-3-functions` | Functions |
| 4 | `year2-term-4-data-structures` | Data Structures |
| 5 | `year2-term-5-ai-deep-dive` | AI Concepts Deep Dive |
| 6 | `year2-term-6-apis` | Working with APIs |
| 7 | `year2-term-7-data-visualization` | Data & Visualization |
| 8 | `year2-term-8-capstone` | Capstone & Portfolio |

---

## Step-by-Step: Adding a New Lesson

### Step 1: Create the Folder

```bash
# Example: Adding Week 2 to Term 1
mkdir -p docs/Lesson_content/Term1-HelloPython/Week2-PrintIsYourVoice
```

### Step 2: Copy Template

Open `_TEMPLATE_lesson.md` and copy all content.

### Step 3: Create lesson.md

Create a new file:
```
docs/Lesson_content/Term1-HelloPython/Week2-PrintIsYourVoice/lesson.md
```

Paste the template content.

### Step 4: Update Frontmatter

Change these values:

```yaml
---
title: "Print is Your Voice!"           # ← Your title
description: "Learn to make Python talk" # ← Your description
order_index: 2                           # ← Week number
course_slug: "term-1-hello-python"       # ← Keep for Term 1
---
```

### Step 5: Add Lesson Content

Below the closing `---`, paste or write your lesson content in markdown.

### Step 6: Add Teacher Notes (Optional)

Create `teacher-notes.md` in the same folder. No frontmatter needed - just plain markdown.

### Step 7: Sync to Database

1. Go to `http://localhost:3000/admin` (or your production URL)
2. Click **"Sync Lessons from Files"**
3. Check the results dialog

---

## Teacher Notes

Teacher notes are simpler - **no frontmatter required**.

Just create `teacher-notes.md` in the same folder as `lesson.md` and write plain markdown:

```markdown
# Week 2: Print is Your Voice - Teacher Notes

## Lesson Overview

This lesson teaches students about the print() function...

## Materials Needed

- Computers with Trinket access
- Projector for demonstrations

## Common Mistakes

1. Forgetting quotation marks
2. Misspelling "print"
```

The sync automatically links teacher notes to the lesson in the same folder.

---

## Syncing Process

### How Sync Works

```
┌─────────────────────────┐
│  Edit files in VS Code  │
│  (lesson.md, teacher-   │
│   notes.md)             │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Go to /admin           │
│  Click "Sync Lessons"   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  API reads all files    │
│  from Lesson_content/   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Upserts to Supabase    │
│  lessons & teacher_notes│
│  tables                 │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Results dialog shows   │
│  what was synced        │
└─────────────────────────┘
```

### Sync Results

After syncing, you'll see:

- **Synced:** Files successfully updated
- **Skipped:** Files missing required frontmatter
- **Errors:** Files with issues (check course_slug)

---

## Troubleshooting

### "Course not found" Error

**Problem:** The `course_slug` doesn't match any course in the database.

**Solution:** Check the Course Slugs table above and use the exact slug.

### Lesson Not Showing Up

**Problem:** Lesson doesn't appear after sync.

**Possible causes:**
1. Missing frontmatter
2. Wrong file name (must be `lesson.md`)
3. File in wrong folder

**Solution:** Check the sync results dialog for "skipped" files.

### "Missing required frontmatter" (Skipped)

**Problem:** File is missing `title`, `order_index`, or `course_slug`.

**Solution:** Add all required frontmatter fields.

### Changes Not Appearing

**Problem:** You edited a file but changes don't show.

**Possible causes:**
1. Forgot to save the file
2. Forgot to click "Sync Lessons"
3. YAML syntax error in frontmatter

**Solution:** Save file, click sync, check results.

---

## Best Practices

1. **Always use the template** - Copy `_TEMPLATE_lesson.md` to avoid missing fields

2. **Save frequently** - Ctrl/Cmd + S after changes

3. **Sync after each edit** - Click the sync button after making changes

4. **Check sync results** - Review the dialog to catch errors

5. **Use consistent naming** - `Week1-TopicName`, `Week2-TopicName`, etc.

6. **Keep backups** - Your files are in Git, so commit regularly

---

## Quick Reference Card

### New Lesson Checklist

- [ ] Created folder: `Term.../Week.../`
- [ ] Created file: `lesson.md`
- [ ] Added frontmatter with `---` delimiters
- [ ] Set `title`
- [ ] Set `description`
- [ ] Set `order_index` (week number)
- [ ] Set `course_slug` (from table above)
- [ ] Added lesson content below frontmatter
- [ ] Saved file
- [ ] Clicked "Sync Lessons" in admin
- [ ] Checked sync results

### Files Quick Reference

| What | Where | Name |
|------|-------|------|
| Template | `docs/Lesson_content/` | `_TEMPLATE_lesson.md` |
| Lesson | `docs/Lesson_content/Term.../Week.../` | `lesson.md` |
| Teacher Notes | `docs/Lesson_content/Term.../Week.../` | `teacher-notes.md` |

---

*KidsLearnAI - Empowering the Next Generation with AI Education*

