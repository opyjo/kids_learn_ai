---
solution_code: |
  # My Skills Snapshot
  nickname = "Pixel"
  favourite_subject = "science"
  weeks_coding = 9

  # Safe, non-private questions
  term_goal = input("What do you want to build this term? ")
  coding_mood = input("Choose one word for how coding feels today: ")

  # A fixed-number calculation from the stored variables
  lessons_after_today = weeks_coding + 1

  print(f"Coder: {nickname.title()}")
  print(f"Favourite subject: {favourite_subject.title()}")
  print(f"Goal: {term_goal}")
  print(f"Coding mood: {coding_mood.upper()}")
  print(f"After today: {lessons_after_today} lessons of coding")
---

## Why this works

The program uses three starting variables, two safe `input()` questions, f-strings, `.title()` and `.upper()`, one calculation, and comments. A student's wording and layout may differ.

## Suggested tests

| Goal | Mood | Check |
| --- | --- | --- |
| build a calculator | excited | Mood displays as `EXCITED` |
| solve maths puzzles | curious | Both answers appear in the summary |

## Review prompts

- Trace each answer from `input()` into its f-string.
- Ask why the calculation uses the number variable instead of quoted text.
- Check that the project never requests private information.
