# Year 2, Lesson 6: Polish & Test 💅🧪

## Teacher's Guide

**Course:** Capstone & Portfolio (Year 2, Term 8)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

Students take their working capstone from "it works for me" to "it works for anyone." They learn user testing, edge-case handling, a welcome screen, and meaningful comments — the difference between a school exercise and real software. Study Buddy gets a welcome screen, empty-data guards, input validation, and comments. Goals:

1. **Test with a real user** — watch a classmate use the program and try to break it
2. **Handle edge cases** — empty data, silly input, divide-by-zero, unexpected menu choices
3. **Polish presentation** — welcome screen, tidy output, helpful comments
4. **Build a testing mindset** — real software ships only after testing

This is a paired user-testing session plus targeted polishing. The emotional shift is "my program is for other people now."

### Learning Objectives

Students will be able to:
1. Run a user test and observe where a real user gets confused
2. Add guards for empty data (no divide-by-zero on averages) and invalid input (try/except, menu validation)
3. Add a welcome screen and tidy output formatting
4. Write comments that explain WHY, not restate the obvious

### Key Success Metrics
- [ ] Every capstone survives a classmate trying to break it
- [ ] Empty-data and bad-input cases are guarded (no crashes)
- [ ] Each capstone has a welcome screen and at least a few meaningful comments
- [ ] Students fixed at least one issue surfaced by testing

### Materials Needed
- Zoom with screen share and breakout rooms
- Students' `Y2-T8-Capstone` Trinket (all features built)
- This guide; the testing checklist; class WhatsApp/email

### Pre-Lesson Preparation
1. Pre-polish the Study Buddy example (welcome screen, empty-data guard, validation, comments) and test the edge cases.
2. Prepare breakout pairs for user testing.
3. Have the testing checklist ready to share.

---

## 🎯 Lesson Flow (60-75 Minutes)

```
⏱️  0-5 min   → Welcome + "works for me ≠ works for anyone"
⏱️  5-25 min  → Hunting edge cases (empty data, bad input, divide-by-zero guards)
⏱️ 25-38 min  → Welcome screen + output polish
⏱️ 38-48 min  → Comments — explaining WHY
⏱️ 48-63 min  → "Break My Program!" paired user testing
⏱️ 63-75 min  → Fix top issues + homework + Week 7 teaser
```

---

## 📚 Detailed Teaching Guide

### Part 1: "It Works For Me" Is Not "It Works" (5 min)
> "You know exactly how to use your program — but a stranger doesn't. Today we make it survive anyone. A real developer's favourite question is: 'What happens if the user does something unexpected?'"

### Part 2: Hunting Edge Cases (20 min)
Work through the classic traps live on Study Buddy: view stats when there are zero sessions (divide-by-zero → guard it), silly menu input (validate), non-numeric hours (try/except recall from Term 1).
- **Teaching tip:** the empty-data guard is the most important — show the `ZeroDivisionError` first, then the `if len(sessions) == 0:` guard.

### Part 3: Welcome Screen & Output Polish (13 min)
Add a bordered welcome screen with brief instructions; tidy messages with f-strings. First impressions matter for the graduation demo.

### Part 4: Comments — A Note to Future-You (10 min)
Teach commenting the WHY, not the obvious. Show the good example (a comment explaining the divide-by-zero guard) vs a bad one (`# add 1 to x`).
- **Teaching tip:** "A good comment explains something the code can't say by itself."

### The Testing Checklist
Walk the checklist: runs; menu clear; correct maths; formatted; empty-data safe; bad-input safe; clean quit.

### Part 5: "Break My Program!" (15 min)
Breakout pairs: each student uses their partner's program and genuinely tries to break it. The owner watches (don't help!) and notes where confusion or crashes happen. Swap. Then everyone fixes their top issue.
- **Teaching tip:** the gold is watching a real user hesitate — that hesitation is a design bug.

### Wrap-Up
Homework: polish + one more user test. Tease Week 7: Portfolio & Presentation Prep.

---

## 🎓 Assessment & Notes

**Observe:**
- [ ] Empty-data path guarded (no divide-by-zero)
- [ ] Invalid input handled gracefully
- [ ] Welcome screen present
- [ ] Comments explain WHY
- [ ] Fixed an issue surfaced by a tester

**Need support:** students whose program still crashes on empty data or bad input — pair-fix during testing.
**Ready for more:** challenge them to handle an edge case nobody else thought of.

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Crash on viewing stats with no data | Guard with `if len(sessions) == 0:` before dividing |
| Program crashes on letters where numbers go | Wrap the input in try/except (Term 1 recall) |
| Over-commenting every line | Coach: comment the WHY, delete the obvious |
| Testers are too gentle | Encourage: "Try to BREAK it — that's the job" |
| Owner keeps rescuing the tester | Remind them to watch silently and take notes |
| Behind schedule | Prioritise the empty-data + bad-input guards; welcome screen can be homework |

---

## 📊 Post-Lesson Reflection
- Is every capstone now crash-resistant? Anyone still fragile needs a fix before the graduation demo.
- Which testing discoveries were most instructive? Share them next time.
- Note who is demo-ready vs who needs rehearsal support in Week 7.

---

## 💭 Remember

**Polish is respect for your user.** When a student guards an edge case they didn't hit themselves, they've started thinking like a real developer. A capstone that never crashes in front of an audience is worth more than a fancy one that falls over. Next week: portfolio and presentation prep.

**You've got this!** 🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
