# Year 2, Lesson 8: Adventure Showcase & Celebration! 🗺️🎭

## Teacher's Guide

**Course:** Functions (Year 2, Term 3)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 8 of 8

---

## 📋 Lesson Overview

### Purpose

This is the Term 3 finale — a celebration and consolidation session, not a new-content lesson. Students play-test the Text Adventure they built over Weeks 6-7, give each other feedback, play a term quiz, and reflect. The goals:

1. **Give every student a moment of pride** — handing your own working game to a classmate to play is a milestone; make it feel like an achievement
2. **Consolidate the whole term** — the quiz revisits `def`, calling, parameters vs arguments, `return` vs `print`, the "no return means `None`" trap, local vs global scope, functions calling functions, and `TypeError` from a missing argument in one fun pass
3. **Build a supportive maker culture** — kind, specific peer feedback teaches students to celebrate and constructively critique each other's code
4. **Launch Term 4** — send them off excited about Data Structures and the Contact Manager

There is deliberately **very little new code**. The energy is celebratory. Your job is host, cheerleader, and quiz-master.

> **Note on badges:** Term 3 awards **NO badge**. Do not promise one. Celebrate finishing the Functions term for its own sake, and tease Term 4 (Data Structures → Contact Manager) as what's next to look forward to.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Play-test their own program confidently over Zoom (share screen, run it, let a classmate call out choices, explain a function)
2. Give kind, specific peer feedback ("Two Stars and a Wish")
3. Correctly answer term-review questions on `def` syntax, calling, parameters/arguments, `return` vs `print`, `None`, scope, functions calling functions, and `TypeError`
4. Articulate their proudest scene and one bug they overcame connecting scenes

### Key Success Metrics

- [ ] Every student's adventure is play-tested (or shown) at least briefly
- [ ] Every student posts at least one piece of peer feedback in the chat
- [ ] The class engages with the quiz (racing answers in chat)
- [ ] Students leave knowing what Term 4 holds and feeling proud

### Materials Needed

- Computer with internet, Zoom with screen share enabled for students
- Students' finished `Y2-T3-W7` Text Adventure Trinkets (remind them in advance!)
- The quiz questions (in the lesson) — decide whether to screen-share or read aloud
- This teaching guide
- Class WhatsApp group/email for sharing links and celebration

### Pre-Lesson Preparation (15 minutes before class)

1. **Send an advance reminder:** "Bring your finished Text Adventure — today classmates play-test it!" Ask students to play it once through before class.
2. **Decide the play-test order** — volunteers first, then gently invite quieter students. Have a plan so it flows without awkward silences.
3. **Prepare the quiz delivery** — read-aloud + chat answers works well; have the answer key (in the lesson) open.
4. **Have a backup for broken adventures** — anyone whose game crashes can play the polished solution or do a "polish pit-stop" with you live.
5. **Prepare the Term 4 hype** — Data Structures and the Contact Manager are your closing motivation. (Remember: no badge to promise this term.)
6. **Optional:** prepare a simple "Term 3 Complete" certificate (the lesson's solution code prints one, built from functions) to share or award.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + BrightByte's proud speech + polish pit-stop
⏱️  8-38 min  → The Grand Showcase (students play-test each other + peer feedback in chat)
⏱️ 38-52 min  → Term 3 Quiz Game
⏱️ 52-62 min  → Reflection (proudest scene / trickiest connecting bug)
⏱️ 62-75 min  → Term 4 preview + homework + celebration wrap-up
```

**Flexible timing:** Play-test time scales with class size. For a large class, cap each play-test at ~2 minutes (one path each) or run two rounds. Protect the reflection and Term 4 preview — they're the emotional payoff.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + Polish Pit-Stop (8 minutes)

Open with genuine pride — this is the end of the Functions term.

> "A few weeks ago a 'function' was just a word. Today you have a whole Text Adventure held together by functions that call each other, a dispatch loop, an inventory, and win/lose endings. That's genuine software design. Today we celebrate, we play each other's games, and we soak it in."

**Polish pit-stop (no new scenes):** students play their adventure once and tick the demo-ready checklist (runs, opening scene clear, every path reaches win/lose, scenes connect via `return`, dispatch loop works, no crash on silly input, inventory works). Quick fixes only.

#### Teaching Tips

- **"Finished beats fancy."** Discourage last-minute scene-adding — an adventure that reaches an ending beats a bigger one that breaks mid-play.
- **The #1 bug to look for:** a scene that returns the wrong scene name (typo, or a name the loop doesn't recognise) — this sends players in circles or crashes the loop. Quick fix now.
- **Triage broken adventures now.** If someone's game crashes, pair with them quietly during the showcase or let them play the class solution.

---

### Part 2: The Grand Showcase (30 minutes)

The heart of the lesson — and the highlight for students. Each coder shares their screen, runs their adventure, and a **classmate calls out the choices** while the author drives the keyboard. Aim to reach both a win and a lose so everyone sees the endings. Each author then explains **one function** they're proud of (ideally a scene function that returns the next scene's name).

**Run peer feedback in parallel** via the Zoom chat: 🔥 reactions plus "Two Stars and a Wish" (two things liked, one kind suggestion).

#### Teaching Tips

- **Model the first play-test yourself** or have a confident volunteer go first, so the format is clear (author drives, a classmate chooses).
- **Playtesting others' games is the joy — lean into it.** Rotate who calls out the choices so everyone gets to "play". This is what students will remember.
- **Coach the feedback.** The first time someone types "it's good", redirect: "Be specific — which scene, which choice?" Reinforce the golden rule: kind, specific, helpful.
- **Protect nervous students.** Offer options: share screen, OR you run their shared Trinket link, OR they just describe one scene and one function. Never force screen-sharing.
- **Celebrate every adventure by name.** "Let's get a 🔥 in the chat for Ama's temple!" Every student should feel seen.
- **Handle live bugs warmly:** "Ooh, a live bug — real programmers debug in public all the time!" Model calm debugging (often a wrong `return` value).

---

### Part 3: Term 3 Quiz Game (14 minutes)

Run the 12-question quiz from the lesson as a fast, low-stakes chat game. Read each question; students race to answer in the chat; reveal the answer and celebrate.

The quiz deliberately hits every function idea: `def` keyword (Q1), the colon (Q2), calling with `()` (Q3), parameters vs arguments (Q4-5), `return` vs `print` (Q6), no-`return`-gives-`None` (Q7, Q12), return-and-use (Q8), `TypeError` from a missing argument (Q9), local vs global scope / `NameError` (Q10), and functions calling functions (Q11).

#### Teaching Tips

- **First correct answer gets a 🏆, everyone who answers gets a 👏.** Keep it about celebrating knowledge, not competition.
- **Linger on Q12 (the classic trap).** A function with no `return` gives back `None`. This is THE term's big insight — make sure it lands. Pair it with Q7 (same idea, `print` inside but no return).
- **Q9 and Q10 are the other two that teach.** Q9: missing argument → `TypeError`. Q10: a local variable doesn't exist outside its function → `NameError`. Read these slowly.
- **Adjust pace to the class.** If they're flying, speed up; if they're unsure, pause and re-teach briefly — this is your last diagnostic of the term.

---

### Part 4: Reflection (10 minutes)

Students share in chat: their proudest scene, and the trickiest bug they hit connecting scenes (and how they got through it).

> "Reading each other's reflections reminds us: everyone hit a tricky bug connecting their scenes, and everyone got through it. That's what coders do."

#### Teaching Tips

- **Read several aloud.** Naming students' wins publicly cements confidence going into Term 4.
- **Normalise struggle.** When students admit a scene sent players in circles or a loop never ended, affirm it: "The scene that returned the wrong name taught you more than the code that worked first try."
- **Common connecting bugs to validate:** wrong scene name returned, forgetting to `return` (so the loop got `None`), a loop condition that never becomes `win`/`lose`.

---

### Part 5: Term 4 Preview + Homework + Wrap-Up (13 minutes)

Reveal the full Year 2 roadmap (Terms 1-3 ✅), then hype Term 4 specifically:

> "Next term: Data Structures. You'll meet dictionaries — labelled boxes for information — and build a Contact Manager that adds, searches, updates, and deletes contacts. And you'll use your new function skills the whole way through."

Walk through the homework: the "Function Certificate" program (Option A — at least two functions, one with a parameter, one that returns) or the family play-test (Option B). Point at the solution code as an example of the certificate built from functions.

Close with BrightByte's final word and genuine celebration.

#### Teaching Tips

- **No badge this term — frame Term 4 as the reward ahead.** The excitement is "your programs get a memory" and a genuinely useful app (a Contact Manager).
- **Reinforce the through-line:** "This term you organised your code with functions; next term you organise your data — together they make real apps."
- **End on a high.** Stay on the call a few minutes for students who want to keep playing one more adventure or show a hidden path.

---

## 🎓 Assessment & Notes

### End-of-Term Progress Check

Use today to finalise your term picture of each student:

**Confident / ready for Term 4:**
- Play-tested a working adventure that reaches win/lose; answered quiz questions across multiple weeks; can explain what a function returns

**Needs consolidation over the break:**
- Adventure was incomplete or crashed; struggled with the quiz's core traps (especially Q7/Q12 on `None`, Q9 on `TypeError`, Q10 on scope)
- Send these students the relevant Week 3 (return) / Week 4 (scope) lesson links and a friendly nudge

### Observe:
- [ ] Had their adventure play-tested or shown
- [ ] Gave at least one specific piece of peer feedback
- [ ] Engaged with the quiz
- [ ] Shared a reflection

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student's adventure crashes / is unfinished | Do a quick polish with them during others' play-tests, or let them play the class solution and explain its functions |
| A path dead-ends (never reaches win/lose) | Trace which scene returns nothing or a wrong name; add the missing `return` or fix the scene name live |
| Student refuses to share screen | Offer alternatives: you run their shared link, or they describe one scene and one function verbally |
| Awkward silence, no volunteers to play-test | Go first yourself, or call a confident student you prepped in advance |
| Feedback chat goes quiet | Prompt specifically: "Drop a 🔥 and name your favourite choice in Kofi's adventure!" |
| Quiz too easy / too hard | Skip ahead or slow down; for fast classes add a bonus "explain WHY" on Q9, Q10, Q12 |
| Large class, not enough time for all play-tests | Two rounds, cap at ~2 minutes each, or group play-tests into breakout rooms with a spokesperson |
| Student forgot their Trinket | Have them open the class solution and walk through its functions as if it were theirs — still a valid experience |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Term-level wins:** which students grew the most? Who found their confidence with functions?
- **Consolidation list:** who needs support before Term 4, and on what specifically (return values? scope? connecting scenes?)
- **What worked this term:** which analogies, activities, and the adventure project itself — carry the best into Term 4
- **Showcase logistics:** did play-tests fit the time? Adjust the format for future showcase weeks (this repeats every term)

---

## 💭 Remember

**Today is about pride, not perfection.**

Students who leave the Functions term feeling "I built a whole game out of functions and my friends played it" will walk into Term 4 ready to take risks and build bigger. The Text Adventure Engine is genuinely impressive — scene functions that return the next scene, a dispatch loop, an inventory list, and win/lose endings. Make sure every student knows that, and knows the maker journey has only just begun.

**Third term of Year 2: complete. Celebrate it! 🎉**

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
