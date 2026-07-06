# Year 2, Lesson 8: Data Story Showcase & Celebration 📊🎤

## Teacher's Guide

**Course:** Data & Visualization (Year 2, Term 7)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 8 of 8

---

## 📋 Lesson Overview

### Purpose

This is the Term 7 finale — a celebration and consolidation session, not a new-content lesson. Students present the **Data Story** they built over Weeks 6–7 (parse → stats → chart → headline insights), give each other feedback, play a term quiz, and reflect. The goals:

1. **Give every student a moment of pride** — presenting your own data investigation to peers, like a news reporter, is a milestone; make it feel like an achievement
2. **Consolidate the whole term** — the quiz revisits rows vs columns, categorical vs numerical, `split()`, text-vs-number after parsing, averages, text charts, chart scaling, and what makes a good insight in one fun pass
3. **Build a supportive maker culture** — kind, specific peer feedback teaches students to celebrate and constructively critique data work
4. **Launch Term 8** — send them off excited about the Capstone & Portfolio: building their OWN project and graduating

There is deliberately **very little new code**. The energy is celebratory. Your job is host, cheerleader, and quiz-master.

> **Note on badges:** Term 7 awards **NO badge**. Do not promise one. Celebrate finishing the data term itself, and tease **Term 8 (Capstone & Portfolio)** — the grand finale and graduation — as the thing to look forward to.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Present their own Data Story confidently over Zoom (share screen, read a headline, run it, state an insight backed by a number)
2. Give kind, specific peer feedback ("Two Stars and a Wish")
3. Correctly answer term-review questions on data types, parsing, stats, charts, and insights
4. Articulate their most surprising finding and one parsing bug they overcame

### Key Success Metrics

- [ ] Every student presents their Data Story (or has it shown) at least briefly
- [ ] Every student posts at least one piece of peer feedback in the chat
- [ ] The class engages with the quiz (racing answers in chat)
- [ ] Students leave knowing what Term 8 holds and feeling proud of the data term

### Materials Needed

- Computer with internet, Zoom with screen share enabled for students
- Students' finished `Y2-T7-W7` Data Story Trinkets (remind them in advance!)
- The quiz questions (in the lesson) — decide whether to screen-share or read aloud
- This teaching guide
- Class WhatsApp group/email for sharing links and celebration

### Pre-Lesson Preparation (15 minutes before class)

1. **Send an advance reminder:** "Bring your finished Data Story — today you report it live like a journalist!" Ask students to run it once before class.
2. **Decide the report order** — volunteers first, then gently invite quieter students. Have a plan so it flows without awkward silences.
3. **Prepare the quiz delivery** — read-aloud + chat answers works well; have the answer key (in the lesson) open. The trap questions are Q9 (`"█" * 3.0` → TypeError) and Q5 (numbers are text after `split()`).
4. **Have a backup for broken projects** — anyone whose program crashes can present the polished solution or do a quick "polish pit-stop" with you live.
5. **Prepare the Term 8 hype** — the Capstone & Portfolio (their own project + graduation) is your closing motivation. Remember: NO badge this term, so frame Term 8 itself as the reward.
6. **Optional:** prepare the lesson's solution program (the "Data Detective Certificate") to run and share, or award as a fun end-of-term touch.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + BrightByte's proud speech + polish pit-stop
⏱️  8-35 min  → The Newsroom (student Data Story reports + peer feedback)
⏱️ 35-45 min  → Class vote (Most Surprising Finding) + Term 7 Quiz Game
⏱️ 45-58 min  → Reflection (surprising finding / trickiest parsing bug)
⏱️ 58-75 min  → Term 8 preview + homework + celebration wrap-up
```

**Flexible timing:** Report time scales with class size. For a large class, cap reports at ~90 seconds each or run them in two rounds. Protect the reflection and Term 8 preview — they're the emotional payoff of finishing the data term.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + Polish Pit-Stop (8 minutes)

Open with genuine pride — this is the end of the data term.

> "Seven weeks ago, 'data' was just a scary blob of text. Today you can slice it with `split()`, crunch the numbers, draw a chart, and tell the world what it MEANS. Today we report, we celebrate, and we soak it in."

**Polish pit-stop (no new features):** students run their Data Story once and tick the reporter-ready checklist (runs, parses, numbers converted with `int()`/`float()`, average correct, chart appears, insight backed by a number, a real headline). Quick fixes only.

#### Teaching Tips

- **"Working beats fancy."** Discourage last-minute feature-adding — a Data Story that works beats one that breaks mid-report.
- **Triage broken projects now.** If someone's program crashes, pair with them quietly during others' reports, or let them present the class solution.
- **Watch for the classic bug:** numbers still being text after `split()`. If a chart or average crashes, the fix is almost always a missing `int()`/`float()`.

---

### Part 2: The Newsroom — Data Story Reports (27 minutes)

The heart of the lesson. Each student reports like a **news journalist** using the 5-step format from the lesson: headline → run it live → point at the chart → state an insight backed by a number → take one question.

**Run peer feedback in parallel** via the Zoom chat: 🔥 reactions plus "Two Stars and a Wish" (two things liked, one kind suggestion).

#### Teaching Tips

- **Model the first report yourself** or have a confident volunteer go first, so the news-reporter format is clear. Really lean into the "Breaking news!" framing — it makes shy students smile and lowers the pressure.
- **Push for insight, not just numbers.** If a student says "mango got 3 votes," prompt: "And what does that MEAN? Out of how many?" Coach them toward "half the class."
- **Coach the feedback.** The first time someone types "it's good", redirect: "Be specific — what exactly did you like about their finding or chart?" Reinforce: kind, specific, helpful.
- **Protect nervous students.** Offer options: share screen, OR you run their shared Trinket link while they narrate, OR they just read their headline and one insight. Never force screen-sharing.
- **Celebrate every report by name.** "Let's get a 🔥 in the chat for Chidi's finding!" Every student should feel seen.
- **Handle live bugs warmly:** "Ooh, a live bug — breaking news! Real data scientists debug in public all the time." Model calm debugging.

---

### Part 3: Class Vote + Term 7 Quiz Game (10 minutes)

First, run the quick **"Most Surprising Finding"** vote — students type a reporter's name in the chat. This celebrates that data can genuinely surprise us (the whole point of the term). Then run the 12-question quiz as a fast, low-stakes chat game.

The quiz deliberately hits every week: rows vs columns (Q1, Q12), categorical vs numerical (Q2, Q3), `split()` (Q4, Q12), text-after-split needs `int()`/`float()` (Q5), averages with `sum`/`len` (Q6), `len()` (Q7), text bar charts `"█" * n` (Q8), the `"█" * 3.0` TypeError trap (Q9), chart scaling (Q10), and what makes a good insight (Q11).

#### Teaching Tips

- **First correct answer gets a 🏆, everyone who answers gets a 👏.** Keep it about celebrating knowledge, not competition.
- **Linger on Q9 (the classic trap).** `"█" * 3.0` raises a `TypeError` because you can only multiply a string by a whole number (`int`), not a float. The fix is `int(...)`. This is THE gotcha behind broken charts — make sure it lands.
- **Reinforce Q5.** After `split()`, everything is a **string** — numbers must be converted with `int()`/`float()` before any maths. This is the term's biggest recurring bug.
- **Adjust pace to the class.** If they're flying, speed up; if they're unsure, pause and re-teach briefly — this is your last diagnostic of the term.

---

### Part 4: Reflection (13 minutes)

Students share in chat: their most surprising finding, and their trickiest parsing bug (and how they got through it).

> "Reading each other's reflections reminds us: everyone hit a messy-data bug, and everyone got through it. That's exactly what real data scientists do all day."

#### Teaching Tips

- **Read several aloud.** Naming students' wins publicly cements confidence going into the capstone term.
- **Normalise the messy-data struggle.** When students admit `split()` or the text-vs-number bug tripped them up, affirm it: "Professionals hit that exact bug every week — you learned to spot it."
- **Celebrate surprising findings.** The point of data work is that numbers can surprise us — highlight any finding that genuinely shocked a student.

---

### Part 5: Term 8 Preview + Homework + Wrap-Up (17 minutes)

Reveal the full Year 2 roadmap (Terms 1–7 all ✅), then hype Term 8 specifically:

> "Next term is the grand finale: Capstone & Portfolio. There's no new topic — because YOU are the topic. You'll dream up your OWN project, build it using every skill from all seven terms, pull your best work into a portfolio, and graduate from Year 2!"

Walk through the homework: the "Data Detective Certificate" program (Option A) or the family news report (Option B). Point at the solution code as an example of the certificate. Encourage students to jot down a capstone idea.

Close with BrightByte's final word and genuine celebration.

#### Teaching Tips

- **No badge this term — frame Term 8 as the reward.** The graduation and the students' own capstone project are the motivation ahead. Do not promise or imply a Term 7 badge.
- **Invite capstone dreaming now.** Ask students to type one project idea in the chat — it plants the seed and builds excitement for the finale.
- **End on a high.** Stay on the call a few minutes for students who want to keep chatting or show one more finding.

---

## 🎓 Assessment & Notes

### End-of-Term Progress Check

Use today to finalise your term picture of each student:

**Confident / ready for the capstone:**
- Reported a working Data Story that parses, charts, and states a number-backed insight; answered quiz questions across multiple weeks

**Needs consolidation before Term 8:**
- Data Story was incomplete or crashed; struggled with the quiz's core traps (especially Q5 text-vs-number and Q9 the float-times-string TypeError)
- Send these students the relevant Week 2 (`split()`) / Week 3 (stats) / Week 4 (charts) lesson links and a friendly nudge

### Observe:
- [ ] Presented or had their Data Story shown
- [ ] Gave at least one specific piece of peer feedback
- [ ] Engaged with the quiz
- [ ] Shared a reflection

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student's Data Story crashes / is unfinished | Do a quick polish with them during others' reports, or let them present the class solution and explain it |
| Chart or average throws a TypeError | Almost always a missing `int()`/`float()` after `split()` — patch it live; it's a great teachable moment |
| Student refuses to share screen | Offer alternatives: you run their shared link while they narrate, or they just read their headline and one insight |
| Awkward silence, no report volunteers | Go first yourself as a "news anchor", or call a confident student you prepped in advance |
| Feedback chat goes quiet | Prompt specifically: "Drop a 🔥 and one thing you liked about Amara's insight!" |
| Quiz too easy / too hard | Skip ahead or slow down; add a bonus "explain WHY" for fast classes |
| Large class, not enough time for all reports | Two rounds, cap at 90 seconds each, or group reports into breakout rooms with a spokesperson |
| Student forgot their Trinket | Have them open the class solution and walk through it as if it were theirs — still a valid reporting experience |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Term-level wins:** which students grew the most? Who found the story in their data with real confidence?
- **Consolidation list:** who needs support before the capstone, and on what specifically (parsing? stats? charts? insights?)
- **What worked this term:** which analogies, activities, and datasets landed best — carry them into future data teaching
- **Showcase logistics:** did reports fit the time? Adjust the newsroom format for future showcase weeks (this repeats every term)

---

## 💭 Remember

**Today is about pride, not perfection.**

Students who leave the data term feeling "I turned raw numbers into a story and reported it to people" will walk into the capstone term ready to build something ambitious of their own. The Data Story is genuinely impressive — a full pipeline of parse, analyse, visualise, and conclude. Make sure every student knows that, and knows the finale — their own project and graduation — is just one term away.

**The data term: complete. Celebrate it — no badge needed! 📊🎉**

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
