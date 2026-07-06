# Year 2, Lesson 8: Arcade Showcase & Python Pro Badge! 🕹️🏅

## Teacher's Guide

**Course:** Loops & Logic Mastery (Year 2, Term 2)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 8 of 8

---

## 📋 Lesson Overview

### Purpose

This is the Term 2 finale — a celebration and consolidation session, not a new-content lesson. Students demo the Arcade Game Collection they built over Weeks 6-7 (Dice Duel, Guess-the-Number, and Rock-Paper-Scissors behind one menu), give each other feedback, play a term quiz, reflect, and earn the **Python Pro Badge**. The goals:

1. **Give every student a moment of pride** — playing your own working game program for peers is a milestone; make it feel like an achievement
2. **Consolidate the whole term** — the quiz revisits `for` vs `while`, `range()`, `break`/`continue`, nested loops, `random.randint()`, score accumulators, string-vs-int input, and RPS logic in one fun pass
3. **Build a supportive maker culture** — kind, specific peer feedback teaches students to celebrate and constructively critique code
4. **Award the Python Pro Badge** — the first badge of Year 2; make the ceremony genuinely special
5. **Launch Term 3** — send them off excited about functions and the Text Adventure Engine

There is deliberately **very little new code**. The energy is celebratory. Your job is host, cheerleader, quiz-master, and badge-awarder.

> **Note on the badge:** Term 2 is where the **Python Pro Badge** is finally earned — it was teased at the end of Term 1, so students have been waiting for it. Make the ceremony a real moment, not an afterthought. Every student who built and demoed an arcade earns it.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Demo their own game program confidently over Zoom (share screen, play a game, explain a feature)
2. Give kind, specific peer feedback ("Two Stars and a Wish")
3. Correctly answer term-review questions on loops, randomness, and logic
4. Articulate their proudest game moment and one bug they overcame

### Key Success Metrics

- [ ] Every student runs their arcade live (or has it shown) at least briefly
- [ ] Every student posts at least one piece of peer feedback in the chat
- [ ] The class engages with the quiz (racing answers in chat)
- [ ] Every eligible student receives the Python Pro Badge
- [ ] Students leave knowing what Term 3 holds and feeling proud

### Materials Needed

- Computer with internet, Zoom with screen share enabled for students
- Students' finished `Y2-T2-W7-Arcade` Trinkets (remind them in advance!)
- The quiz questions (in the lesson) — decide whether to screen-share or read aloud
- This teaching guide
- The Python Pro Badge (digital badge image / certificate) ready to award and send out
- Class WhatsApp group/email for sharing links and celebration

### Pre-Lesson Preparation (15 minutes before class)

1. **Send an advance reminder:** "Bring your finished arcade — today you demo it and earn your badge!" Ask students to run it once before class.
2. **Decide the demo order** — volunteers first, then gently invite quieter students. Have a plan so it flows without awkward silences.
3. **Prepare the quiz delivery** — read-aloud + chat answers works well; have the answer key (in the lesson) open.
4. **Have a backup for broken arcades** — anyone whose program crashes or hangs can demo the polished solution or do a "polish pit-stop" with you live.
5. **Prepare the badge ceremony** — have the Python Pro Badge ready to display and send. Decide how you'll call names.
6. **Prepare the Term 3 hype** — functions and the Text Adventure Engine are your closing motivation.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + BrightByte's proud speech + polish pit-stop
⏱️  8-33 min  → The Grand Showcase (student demos + peer feedback in chat)
⏱️ 33-46 min  → Term 2 Quiz Game
⏱️ 46-56 min  → Python Pro Badge ceremony + reflection
⏱️ 56-75 min  → Term 3 preview + homework + celebration wrap-up
```

**Flexible timing:** Demo time scales with class size. For a large class, cap demos at ~90 seconds each or do them in two rounds. Protect the badge ceremony and reflection — they're the emotional payoff of the whole term.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + Polish Pit-Stop (8 minutes)

Open with genuine pride — this is the end of their second Year 2 term and the term where they earn a badge.

> "Seven weeks ago a `for` loop still felt a bit magic. Today you have an ARCADE — three real games behind one menu, with dice, guessing, and Rock-Paper-Scissors. Today we celebrate, we show off, and you earn your first badge."

**Polish pit-stop (no new games):** students run their arcade once and tick the demo-ready checklist (runs, menu clear, a game plays fully, no infinite loops, bad-input guarded, returns to menu, quits cleanly). Quick fixes only.

#### Teaching Tips

- **"Working beats fancy."** Discourage last-minute game-adding — an arcade that works beats one that hangs mid-demo.
- **Watch for infinite loops specifically.** This is the term's signature bug. If a student's game won't stop, help them find the missing `break` or the condition variable that never changes.
- **Triage broken arcades now.** If someone's program crashes, pair with them quietly during the showcase or let them demo the class solution.

---

### Part 2: The Grand Showcase (25 minutes)

The heart of the lesson. Each student follows the 5-step demo format from the lesson: introduce → run live → play one game fully → explain one proud feature → take one question.

**Run peer feedback in parallel** via the Zoom chat: 🔥 reactions plus "Two Stars and a Wish" (two things liked, one kind suggestion).

#### Teaching Tips

- **Model the first demo yourself** or have a confident volunteer go first, so the format is clear.
- **Coach the feedback.** The first time someone types "it's good", redirect: "Be specific — what exactly did you like?" Reinforce the golden rule: kind, specific, helpful.
- **Protect nervous students.** Offer options: share screen, OR you run their shared Trinket link, OR they just describe one feature and one bug they beat. Never force screen-sharing.
- **Celebrate every demo by name.** "Let's get a 🔥 in the chat for Ama!" Every student should feel seen.
- **Handle live bugs warmly:** "Ooh, a live bug — real programmers debug in public all the time!" Model calm debugging. An infinite loop live is a perfect teachable moment.

---

### Part 3: Term 2 Quiz Game (13 minutes)

Run the 12-question quiz from the lesson as a fast, low-stakes chat game. Read each question; students race to answer in the chat; reveal the answer and celebrate.

The quiz deliberately hits every week: `for` vs `while` (Q1), `range()` outputs including step and negative step (Q2-Q4), `break` vs `continue` (Q5), nested loop counts (Q6), `random.randint()` inclusivity (Q7), score accumulators (Q8), the string-vs-int input trap (Q9), RPS logic (Q10), infinite loops (Q11), and `break` in a `while True` game loop (Q12).

#### Teaching Tips

- **First correct answer gets a 🏆, everyone who answers gets a 👏.** Keep it about celebrating knowledge, not competition.
- **Linger on Q9 (the string-vs-int trap) and Q11 (the infinite loop).** These are the two big Term 2 insights: `input()` returns a string, and a `while` loop needs something to change so it can end. Make sure both land.
- **Q2-Q4 catch people out.** `range()` stops *before* the end value, and Q4's negative step counts down. Have students predict, then reveal.
- **Adjust pace to the class.** If they're flying, speed up; if they're unsure, pause and re-teach briefly — this is your last diagnostic of the term.

---

### Part 4: Python Pro Badge Ceremony + Reflection (10 minutes)

**The badge ceremony first — this is the term's payoff.** Display the Python Pro Badge. Call each student's name; the class fills the chat with 🏅🎉🔥; each student says one sentence: "I'm a Python Pro because I built ___." Send the badge out after class.

Then move into reflection. Students share in chat: proudest game moment, and their hardest bug (and how they beat it).

> "Reading each other's reflections reminds us: everyone hit a bug, and everyone got through it. That's what coders do."

#### Teaching Tips

- **Make the badge real.** It was promised at the end of Term 1, so students have been waiting. Slow down and name every recipient — don't rush it to save time.
- **Read several reflections aloud.** Naming students' wins and bugs-beaten publicly cements confidence going into Term 3.
- **Normalise struggle.** When students admit a bug was hard (especially an infinite loop), affirm it: "The bug that took you an hour taught you more than the code that worked first try."

---

### Part 5: Term 3 Preview + Homework + Wrap-Up (18 minutes)

Reveal the full Year 2 roadmap (Terms 1 and 2 ✅), then hype Term 3 specifically:

> "Next term: Functions. You'll learn to build reusable blocks of code — and use them to build a Text Adventure Engine, a choose-your-own-adventure game with rooms, choices, and different endings."

Walk through the homework: the "Python Pro Badge" certificate program (Option A, uses a list + `for` loop + f-strings) or the family arcade night (Option B). Point at the solution code as an example of the certificate.

Close with BrightByte's final word and genuine celebration.

#### Teaching Tips

- **The badge is now earned; Term 3's reward is the skill itself.** Frame functions as the tool that lets them build things ten times bigger.
- **End on a high.** Stay on the call a few minutes for students who want to keep playing each other's arcades or show one more feature.

---

## 🎓 Assessment & Notes

### End-of-Term Progress Check

Use today to finalise your term picture of each student:

**Confident / ready for Term 3:**
- Demoed a working arcade with no infinite loops; answered quiz questions across multiple weeks (especially Q9 and Q11)

**Needs consolidation over the break:**
- Arcade was incomplete, crashed, or hung in a loop; struggled with the quiz's core traps (string-vs-int in Q9, infinite loops in Q11, or `range()` boundaries in Q2-Q4)
- Send these students the relevant Week 3/5/6 lesson links and a friendly nudge

### Observe:
- [ ] Presented or had their program shown
- [ ] Gave at least one specific piece of peer feedback
- [ ] Engaged with the quiz
- [ ] Received the Python Pro Badge
- [ ] Shared a reflection

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student's arcade crashes / is unfinished | Do a quick polish with them during others' demos, or let them present the class solution and explain it |
| Student's game hangs in an infinite loop live | Perfect teachable moment — calmly find the missing `break` or the condition that never changes; the class learns from it |
| Student refuses to share screen | Offer alternatives: you run their shared link, or they describe one feature and one bug they beat |
| Awkward silence, no demo volunteers | Go first yourself, or call a confident student you prepped in advance |
| Feedback chat goes quiet | Prompt specifically: "Drop a 🔥 and one thing you liked about Kofi's dice game!" |
| Quiz too easy / too hard | Skip ahead or slow down; add a bonus "explain WHY" for fast classes |
| Large class, not enough time for all demos | Two rounds, cap at 90 seconds each, or group demos into breakout rooms with a spokesperson — but keep the badge ceremony whole-class |
| Student forgot their Trinket | Have them open the class solution and walk through it as if it were theirs — still a valid demo experience, and they still earn the badge for the term's work |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Term-level wins:** which students grew the most? Who found their confidence with loops?
- **Consolidation list:** who needs support before Term 3, and on what specifically (loop boundaries? string-vs-int? infinite loops?)
- **What worked this term:** which analogies, activities, and games landed best — carry them into Term 3
- **Badge follow-up:** confirm every eligible student received their Python Pro Badge image/certificate after class
- **Showcase logistics:** did demos fit the time? Adjust the format for future showcase weeks (this repeats every term)

---

## 💭 Remember

**Today is about pride, not perfection.**

Students who leave Term 2 feeling "I built real games, I showed them, and I earned a badge" will walk into Term 3 ready to take on functions and build something even bigger. The Arcade Game Collection is genuinely impressive — a menu-driven program using loops, randomness, and logic. Make sure every student knows that, wears their Python Pro Badge proudly, and knows the maker journey has only just begun.

**Second term of Year 2: complete, and the first Year 2 badge earned. Celebrate it! 🕹️🏅**

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
