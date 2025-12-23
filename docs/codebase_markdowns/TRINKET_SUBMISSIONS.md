# Trinket Assignment Submission System

## Overview

The Trinket Assignment Submission system allows students to submit their Python code from Trinket.io for lesson assignments. Teachers can view submissions with live code previews and provide feedback and grades.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Student Flow                             │
├─────────────────────────────────────────────────────────────────┤
│  1. Complete lesson on Trinket.io                               │
│  2. Copy share/embed URL                                        │
│  3. Go to Dashboard → My Assignments                            │
│  4. Click "Submit Assignment" for the lesson                    │
│  5. Paste URL → Preview → Submit                                │
│  6. View feedback when teacher reviews                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         Teacher Flow                             │
├─────────────────────────────────────────────────────────────────┤
│  1. Go to Admin Dashboard → Submissions tab                     │
│  2. Filter by lesson, student, or status                        │
│  3. Click "Review" on a submission                              │
│  4. View live Trinket preview                                   │
│  5. Write feedback and optional grade                           │
│  6. Save → Student sees feedback in their dashboard             │
└─────────────────────────────────────────────────────────────────┘
```

## Database Schema

### Table: `trinket_submissions`

```sql
CREATE TABLE trinket_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  trinket_url TEXT NOT NULL,
  status TEXT CHECK (status IN ('submitted', 'reviewed', 'graded')) DEFAULT 'submitted',
  feedback TEXT,
  grade TEXT,
  reviewed_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, lesson_id)
);
```

### Indexes

- `idx_trinket_submissions_student` - Fast lookup by student
- `idx_trinket_submissions_lesson` - Fast lookup by lesson
- `idx_trinket_submissions_status` - Filter by status

### Row Level Security (RLS) Policies

| Policy | Description |
|--------|-------------|
| Students can view own submissions | `auth.uid() = student_id` |
| Students can insert own submissions | `auth.uid() = student_id` |
| Students can update own submissions | Only when `status = 'submitted'` |
| Admins can view all submissions | Role check on profiles table |
| Admins can update all submissions | For adding feedback/grades |

## Components

### Student Dashboard Components

#### `components/dashboard/trinket-preview.tsx`

Renders a Trinket iframe from a URL.

**Props:**
```typescript
interface TrinketPreviewProps {
  trinketUrl: string;      // Trinket embed or share URL
  title?: string;          // Optional title above preview
  className?: string;      // Additional CSS classes
}
```

**Features:**
- Converts share URLs to embed URLs automatically
- Expand/collapse preview size
- Open in external tab button
- Sandbox iframe for security

**URL Conversion Examples:**
```
https://trinket.io/python/abc123 → https://trinket.io/embed/python/abc123
https://trinket.io/embed/python/abc123 → (unchanged)
https://trinket.io/library/trinkets/abc123 → https://trinket.io/embed/python/abc123
```

---

#### `components/dashboard/trinket-submission-form.tsx`

Dialog form for submitting Trinket URLs.

**Props:**
```typescript
interface TrinketSubmissionFormProps {
  lessonId: string;           // Which lesson this submission is for
  lessonTitle: string;        // Display name
  existingUrl?: string;       // Pre-fill for updates
  onSubmitSuccess?: () => void; // Callback after successful submit
}
```

**Features:**
- URL validation (must be trinket.io)
- Live preview before submitting
- Upsert logic (update existing or create new)
- Success/error feedback

---

#### `components/dashboard/submissions-list.tsx`

Displays student's submission history.

**Props:**
```typescript
interface Submission {
  id: string;
  lessonId: string;
  lessonTitle: string;
  lessonOrderIndex: number;
  courseSlug: string;
  trinketUrl: string;
  status: "submitted" | "reviewed" | "graded";
  feedback: string | null;
  grade: string | null;
  reviewedAt: string | null;
  submittedAt: string;
}

interface SubmissionsListProps {
  submissions: Submission[];
  onRefresh?: () => void;
}
```

**Features:**
- Status badges (Pending, Reviewed, Graded)
- View submission details in modal
- See teacher feedback
- Update submission if not yet graded

---

#### `components/dashboard/my-assignments-section.tsx`

Wrapper component for the dashboard.

**Props:**
```typescript
interface MyAssignmentsSectionProps {
  initialSubmissions: Submission[];  // Server-side fetched data
}
```

**Features:**
- New feedback badge count
- Refresh button
- Empty state for no submissions

### Admin Components

#### `components/admin/submissions-tab.tsx`

Full admin interface for managing submissions.

**Features:**
- Stats cards (Pending, Reviewed, Graded counts)
- Search by student name or lesson
- Filter by lesson dropdown
- Filter by status dropdown
- Submissions list with student info
- Review dialog with:
  - Student information
  - Live Trinket preview
  - Feedback textarea
  - Grade input
  - Save button

## Page Integrations

### Student Dashboard (`app/dashboard/page.tsx`)

Added server-side fetching of submissions:

```typescript
// Fetch student's trinket submissions
const { data: submissionsData } = await supabase
  .from("trinket_submissions")
  .select(`
    id, lesson_id, trinket_url, status, feedback, grade, reviewed_at, submitted_at,
    lessons (id, title, order_index, courses (slug))
  `)
  .eq("student_id", authUser.id)
  .order("submitted_at", { ascending: false });
```

Renders `<MyAssignmentsSection>` at bottom of dashboard.

### Admin Dashboard (`app/admin/page.tsx`)

Added new "Submissions" tab to the existing tab interface:

```tsx
<TabsList className="grid w-full grid-cols-5">
  <TabsTrigger value="overview">Overview</TabsTrigger>
  <TabsTrigger value="lessons">Lessons</TabsTrigger>
  <TabsTrigger value="submissions">Submissions</TabsTrigger>
  <TabsTrigger value="students">Students</TabsTrigger>
  <TabsTrigger value="analytics">Analytics</TabsTrigger>
</TabsList>

<TabsContent value="submissions">
  <SubmissionsTab />
</TabsContent>
```

Also added "Review Submissions" to Quick Actions.

## Submission Status Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  submitted   │ ──► │   reviewed   │ ──► │    graded    │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                     │
       │                    │                     │
   Student can          Teacher adds         Teacher adds
   update URL           feedback only        feedback + grade
```

## API Usage

### Fetching Submissions (Student)

```typescript
const { data } = await supabase
  .from("trinket_submissions")
  .select(`*, lessons (id, title, order_index, courses (slug))`)
  .eq("student_id", userId)
  .order("submitted_at", { ascending: false });
```

### Submitting (Student)

```typescript
await supabase
  .from("trinket_submissions")
  .upsert({
    student_id: userId,
    lesson_id: lessonId,
    trinket_url: embedUrl,
    status: "submitted",
    submitted_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }, { onConflict: "student_id,lesson_id" });
```

### Fetching All Submissions (Admin)

```typescript
const { data } = await supabase
  .from("trinket_submissions")
  .select(`
    *,
    profiles!trinket_submissions_student_id_fkey (full_name, email),
    lessons (id, title, order_index)
  `)
  .order("submitted_at", { ascending: false });
```

### Adding Feedback (Admin)

```typescript
await supabase
  .from("trinket_submissions")
  .update({
    feedback: feedbackText,
    grade: gradeValue,
    status: gradeValue ? "graded" : "reviewed",
    reviewed_by: adminUserId,
    reviewed_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  })
  .eq("id", submissionId);
```

## File Structure

```
components/
├── dashboard/
│   ├── my-assignments-section.tsx    # Dashboard wrapper
│   ├── submissions-list.tsx          # Student submission list
│   ├── trinket-preview.tsx           # Iframe renderer
│   └── trinket-submission-form.tsx   # Submit dialog
└── admin/
    └── submissions-tab.tsx           # Admin view

app/
├── dashboard/
│   └── page.tsx                      # Updated with My Assignments
└── admin/
    └── page.tsx                      # Updated with Submissions tab

scripts/
└── 12-create-trinket-submissions.sql # Database migration
```

## Security Considerations

1. **RLS Policies**: Students can only see/edit their own submissions
2. **Admin Check**: Admin operations verify role in profiles table
3. **Iframe Sandbox**: Trinket embeds use `sandbox` attribute with limited permissions
4. **URL Validation**: Only trinket.io URLs accepted

## Future Enhancements

- [ ] Due dates for assignments
- [ ] Bulk grading for teachers
- [ ] Export submissions to CSV
- [ ] Submission history/versioning
- [ ] Notifications when feedback is received
- [ ] Integration with specific lesson activities

