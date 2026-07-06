# Year 2, Lesson 5: Build Sprint 3 — Add the Wow ✨🚀

## Teacher's Guide

**Course:** Capstone & Portfolio (Year 2, Term 8)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

Third and final build sprint. Students add the feature that makes their capstone memorable — a data insight or a mini-AI touch — then experience professional **peer code review**. In the worked example, Study Buddy gains its last two features (Motivation Tip and Quiz Me), completing all four menu options. Goals:

1. **Ship the "wow" feature** — the thing that makes each project distinctive and shows off Year 2's advanced skills
2. **Introduce kind, useful peer code review** — reading someone else's code and giving one helpful suggestion
3. **Keep every capstone runnable** — new features must not break what already works

This is a live build-along plus a paired review. Keep the pace brisk; most students already have Log, View, and Stats/Chart working from Sprints 1–2.

### Learning Objectives

Students will be able to:
1. Add a keyword/random mini-assistant feature (the Motivation Tip) using Term 5/6 skills
2. Build a quiz feature backed by a list of question/answer dicts, comparing answers robustly with `.lower().strip()`
3. Give and receive kind, specific peer code review
4. Integrate a new feature without breaking the existing menu loop

### Key Success Metrics
- [ ] Every student adds at least one "wow" feature that runs
- [ ] Study Buddy's four features all work end to end
- [ ] Every student completes one peer review (gave and received)
- [ ] No capstone is left in a broken state at the end of the session

### Materials Needed
- Zoom with screen share and breakout rooms (for paired review)
- Students' `Y2-T8-Capstone` Trinket (with Sprints 1–2 done)
- This guide; class WhatsApp/email for sharing links

### Pre-Lesson Preparation
1. Remind students to bring their Sprint 1–2 capstone.
2. Pre-build the full Study Buddy (all four features) and run every menu option.
3. Prepare breakout-room pairs for peer review in advance.
4. Have the peer-review prompt ready to paste in chat: "Does it run? Is it clear? One kind suggestion."

---

## 🎯 Lesson Flow (60-75 Minutes)

```
⏱️  0-5 min   → Welcome + what "wow" means
⏱️  5-25 min  → Wow Feature #1: Motivation Tip (keyword/random mini-assistant)
⏱️ 25-45 min  → Wow Feature #2: Quiz Me (list of Q/A dicts, robust answer check)
⏱️ 45-58 min  → Peer code review in breakout pairs
⏱️ 58-68 min  → Students add their own wow feature
⏱️ 68-75 min  → Homework + Week 6 (Polish & Test) teaser + wrap-up
```

**Flexible timing:** If a class is behind, the Quiz feature is the more cuttable of the two; the Motivation Tip alone satisfies the "mini-AI touch" objective.

---

## 📚 Detailed Teaching Guide

### Part 1: What Is the "Wow Factor"? (5 min)
> "Your project works — now let's make it memorable. The wow feature is the bit that makes someone say 'you built THAT?' It uses the clever skills from this year: a mini assistant, a quiz, a data insight."

Show the two empty stubs in Study Buddy that you'll fill today.

### Part 2: Motivation Tip (20 min)
Build a keyword/random mini-assistant (Term 5/6 recall): the user types how they feel, the program matches keywords (`.lower()`) and returns a matching tip, with a random fallback.
- **Teaching tip:** reinforce `.lower()` for case-insensitive matching — the #1 keyword bug.
- Connect back: "This is exactly the intent-matching you did in the APIs term."

### Part 3: Quiz Me (20 min)
Build a quiz from a list of dicts (`{"question":..., "answer":...}`), loop through, take input, compare with `.lower().strip()` so "True" matches "true".
- **Teaching tip:** the robust answer comparison is the key correctness point — demo why raw `==` fails on capitalisation/spaces.

### Part 4: Full Study Buddy (quick) 
Run all four features end to end so students see the complete program. Celebrate.

### Part 5: Peer Code Review (13 min)
Move to breakout pairs. Each student shows their code; the partner answers three questions: Does it run? Is it clear? One kind suggestion.
- **Teaching tip:** model a good review first. "Be specific and kind — 'your menu is really clear' beats 'it's good', and 'maybe add a title' is a gift, not a criticism."

### Wrap-Up
Homework: add your own wow feature + do a peer review. Tease Week 6: Polish & Test.

---

## 🎓 Assessment & Notes

**Observe:**
- [ ] Keyword matching uses `.lower()` correctly
- [ ] Quiz compares answers robustly (`.lower().strip()`)
- [ ] New feature integrated without breaking the menu loop
- [ ] Gave kind, specific peer feedback

**Need support:** students whose new feature broke the menu loop — check indentation and that the new branch is wired into the `if/elif`.
**Ready for more:** point them at a second wow feature or a "top subject" highlight.

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Keyword matching misses obvious words | Missing `.lower()` on the message; add it |
| Quiz marks correct answers wrong | Compare with `.lower().strip()` on both sides |
| `random` not defined | `import random` at the top |
| New feature broke the menu | Check the new `elif` is correctly indented and the branch calls the new function |
| Peer review goes quiet | Paste the three-question prompt; assign who reviews whom |
| Behind schedule | Cut the Quiz; the Motivation Tip alone meets the objective |

---

## 📊 Post-Lesson Reflection
- Did every student finish a working wow feature? Flag anyone whose capstone is broken — they need a fix before Week 6.
- How did peer review land? If it was thin, plan a tighter structure next time.
- Note which students are ready to demo confidently for graduation.

---

## 💭 Remember

**This is where each project becomes personal.** The wow feature is the student's signature. Celebrate the variety — a good quiz, a funny motivation bot, a clever insight are all wins. Next week is polish; the building is nearly done.

**You've got this!** 🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
