# Year 2, Lesson 8: Assistant Showcase & API Master Badge 🤖🏅

## Teacher's Guide

**Course:** Working with APIs (Year 2, Term 6)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 8 of 8

---

## 📋 Lesson Overview

### Purpose

This is the Term 6 finale — a celebration and consolidation session, not a new-content lesson. Students demo the AI-Powered Assistant they assembled over Weeks 6-7, give each other feedback, play a term quiz on APIs, reflect, and earn the **API Master Badge**. The goals:

1. **Give every student a moment of pride** — presenting your own working AI assistant to peers is a milestone; make it feel like an achievement
2. **Consolidate the whole term** — the quiz revisits requests/responses, JSON≈dicts, nested data, status codes, checking status before reading, intent, and mock vs real APIs in one fun pass
3. **Award the API Master Badge** — a genuine ceremony that marks a real body of work
4. **Build a supportive maker culture** — kind, specific peer feedback teaches students to celebrate and constructively critique code
5. **Launch Term 7** — send them off excited about Data & Visualization and the Data Story Project

There is deliberately **very little new code**. The energy is celebratory. Your job is host, cheerleader, quiz-master, and badge-awarder.

> **Note on the badge:** Term 6 **awards** the API Master Badge — this is a badge term, unlike Term 1. Make the ceremony a real moment (see Part 5). Every student who assembled a working (or nearly working) assistant earns it.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Demo their own AI assistant confidently over Zoom (share screen, chat with it, show a service and its personality)
2. Give kind, specific peer feedback ("Two Stars and a Wish")
3. Correctly answer term-review questions on APIs: request/response, JSON≈dict, nested data, status codes, intent, mock vs real
4. Articulate their favourite assistant feature and one bug they overcame

### Key Success Metrics

- [ ] Every student runs their assistant live (or has it shown) at least briefly
- [ ] Every student posts at least one piece of peer feedback in the chat
- [ ] The class engages with the quiz (racing answers in chat)
- [ ] Every eligible student receives the API Master Badge
- [ ] Students leave knowing what Term 7 holds and feeling proud

### Materials Needed

- Computer with internet, Zoom with screen share enabled for students
- Students' finished assistant Trinkets from Weeks 6-7 (remind them in advance!)
- The quiz questions (in the lesson) — decide whether to screen-share or read aloud
- The API Master Badge asset/graphic (however your programme awards badges)
- This teaching guide
- Class WhatsApp group/email for sharing links and celebration

### Pre-Lesson Preparation (15 minutes before class)

1. **Send an advance reminder:** "Bring your finished AI assistant — today you demo it and earn your badge!" Ask students to run it once before class.
2. **Decide the demo order** — volunteers first, then gently invite quieter students. Have a plan so it flows without awkward silences.
3. **Prepare the quiz delivery** — read-aloud + chat answers works well; have the answer key (in the lesson) open.
4. **Have a backup for broken assistants** — anyone whose program crashes can demo the polished solution or do a "polish pit-stop" with you live. No one is excluded from the badge for a bug.
5. **Prepare the badge ceremony** — have the badge graphic ready to share and a plan to name each student.
6. **Prepare the Term 7 hype** — Data & Visualization and the Data Story Project are your closing motivation.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + BrightByte's proud speech + polish pit-stop
⏱️  8-33 min  → The Grand Showcase (assistant demos + peer feedback in chat)
⏱️ 33-46 min  → Term 6 Quiz Game (APIs)
⏱️ 46-56 min  → API Master Badge ceremony
⏱️ 56-64 min  → Reflection (favourite feature / trickiest bug)
⏱️ 64-75 min  → Term 7 preview + homework + celebration wrap-up
```

**Flexible timing:** Demo time scales with class size. For a large class, cap demos at ~90 seconds each or do them in two rounds. Protect the badge ceremony, reflection, and Term 7 preview — they're the emotional payoff.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + Polish Pit-Stop (8 minutes)

Open with genuine pride — this is the end of Term 6 and a badge day.

> "Eight weeks ago 'API' was three scary letters. Today you have an AI assistant that greets you by name, calls its own services, reads response dicts, checks status codes, and answers with personality. That's how real AI tools are built. Today we demo, we celebrate, and you earn a badge."

**Polish pit-stop (no new features):** students run their assistant once and tick the demo-ready checklist (runs, greets by name, 3+ services, detects intent, handles unknown input, checks status before reading, has personality, quits cleanly). Quick fixes only.

#### Teaching Tips

- **"Working beats fancy."** Discourage last-minute feature-adding — an assistant that works beats one that breaks mid-demo.
- **Triage broken assistants now.** If someone's program crashes, pair with them quietly during the showcase or let them demo the class solution. A bug does not cost them the badge.

---

### Part 2: The Grand Showcase (25 minutes)

The heart of the lesson. Each student follows the "talk to my assistant" format from the lesson: introduce → run live → let it greet them → chat using two services → show personality → try to break it → take one question.

**Run peer feedback in parallel** via the Zoom chat: 🔥 reactions plus "Two Stars and a Wish" (two things liked, one kind suggestion).

#### Teaching Tips

- **Model the first demo yourself** or have a confident volunteer go first, so the format is clear. Chatting with the assistant live (not reading code) is the goal.
- **Coach the feedback.** The first time someone types "it's good", redirect: "Be specific — what exactly did you like?" Reinforce the golden rule: kind, specific, helpful.
- **Protect nervous students.** Offer options: share screen, OR you run their shared Trinket link, OR they just describe one service. Never force screen-sharing.
- **Celebrate every demo by name.** "Let's get a 🔥 in the chat for Ama's assistant!" Every student should feel seen.
- **Handle live bugs warmly:** "Ooh, a live bug — real programmers debug in public all the time!" Model calm debugging.

---

### Part 3: Term 6 Quiz Game (13 minutes)

Run the 12-question quiz from the lesson as a fast, low-stakes chat game. Read each question; students race to answer in the chat; reveal the answer and celebrate.

The quiz deliberately hits every week: request/response and client/server (Q1), JSON≈dict (Q2), reading data by key (Q3), nested response data (Q4), status codes 200/404 (Q5, Q6), *why* check status before reading (Q7, Q12), what an intent is (Q8), mock vs real API (Q9), services return dicts (Q10), and `input()` for conversation (Q11).

#### Teaching Tips

- **First correct answer gets a 🏆, everyone who answers gets a 👏.** Keep it about celebrating knowledge, not competition.
- **Linger on Q7 and Q12 (the safety trap).** A `404` response has no data fields, so reading `response["temp"]` crashes with a `KeyError`. Checking `status == 200` first is THE term's big safety habit — make sure it lands.
- **Clarify Q9 if needed.** A mock API is a **function acting as the server** (data in a dict, no internet); a real API talks over the internet to another computer. Same shape, no network.
- **Adjust pace to the class.** If they're flying, speed up; if they're unsure, pause and re-teach briefly — this is your last diagnostic of the term.

---

### Part 4: API Master Badge Ceremony (10 minutes)

This is the term's signature moment. Make it feel special.

1. Call each student's name in turn.
2. The class fills the chat with 🏅🎉👏.
3. The student says **one sentence** about the coolest thing their assistant does.
4. Move to the next Master.

> "An API Master can talk to any API in the world. Requests, responses, JSON, status codes, intent — the exact building blocks behind every weather app and chatbot on the planet. You don't just use them now. You understand them."

#### Teaching Tips

- **Everyone who built a working (or nearly working) assistant earns it.** Effort and understanding count — don't gate the badge on a flawless demo.
- **Say each name warmly and personally.** Reference something specific from their demo if you can ("Ama, whose assistant calls everyone 'boss'…").
- **Keep it moving but not rushed.** A steady rhythm of name → cheer → one sentence keeps energy high.

---

### Part 5: Reflection (8 minutes)

Students share in chat: their favourite thing their assistant does, and the trickiest bug they beat (and how they got through it).

> "Reading each other's reflections reminds us: everyone hit a tricky bug, and everyone got through it. That's what coders do."

#### Teaching Tips

- **Read several aloud.** Naming students' wins publicly cements confidence going into Term 7.
- **Normalise struggle.** When students admit a bug was hard, affirm it: "The `KeyError` that took you twenty minutes taught you more than the code that worked first try."

---

### Part 6: Term 7 Preview + Homework + Wrap-Up (11 minutes)

Reveal the full Year 2 roadmap (Terms 1-6 ✅), then hype Term 7 specifically:

> "Next term: Data & Visualization. You spent this term GETTING data from services — next term you make that data SPEAK, turning numbers into charts that tell a story. You'll build a Data Story Project."

Walk through the homework: the "API Master Certificate" program (Option A) or the family demo (Option B). Point at the solution code as an example of the certificate — note it uses a service that returns a status code and a client that checks it before reading, tying the whole term together.

Close with BrightByte's final word and genuine celebration.

#### Teaching Tips

- **Tie Term 7 to Term 6.** APIs produce the data; visualisation makes it meaningful. The skills connect directly.
- **End on a high.** Stay on the call a few minutes for students who want to keep chatting or show one more thing.

---

## 🎓 Assessment & Notes

### End-of-Term Progress Check

Use today to finalise your term picture of each student:

**Confident / ready for Term 7:**
- Demoed a working assistant with 3+ services, intent detection, and graceful error handling; answered quiz questions across multiple weeks

**Needs consolidation over the break:**
- Assistant was incomplete or crashed; struggled with the quiz's core ideas (especially the status-check safety trap in Q7/Q12, or nested data in Q4)
- Send these students the relevant Week 2/4 lesson links and a friendly nudge

### Observe:
- [ ] Presented or had their assistant shown
- [ ] Gave at least one specific piece of peer feedback
- [ ] Engaged with the quiz
- [ ] Received the API Master Badge
- [ ] Shared a reflection

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student's assistant crashes / is unfinished | Do a quick polish with them during others' demos, or let them present the class solution and explain it — they still earn the badge |
| Student refuses to share screen | Offer alternatives: you run their shared link, or they describe one service verbally |
| Awkward silence, no demo volunteers | Go first yourself, or call a confident student you prepped in advance |
| Feedback chat goes quiet | Prompt specifically: "Drop a 🔥 and one thing you liked about Kofi's joke service!" |
| Quiz too easy / too hard | Skip ahead or slow down; add a bonus "explain WHY" for fast classes |
| Large class, not enough time for all demos | Two rounds, cap at 90 seconds each, or group demos into breakout rooms with a spokesperson |
| Student forgot their Trinket | Have them open the class solution and walk through it as if it were theirs — still a valid demo experience and still badge-worthy |
| Assistant works but has no personality | That's fine for the badge; suggest personality as a "wish" and a lovely holiday tweak |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Term-level wins:** which students grew the most? Who found their confidence?
- **Consolidation list:** who needs support before Term 7, and on what specifically (nested data? status checks? intent?)
- **What worked this term:** which analogies (the shop counter, request→response, response dicts) landed best — carry them into Term 7
- **Showcase logistics:** did demos and the badge ceremony fit the time? Adjust the format for future showcase weeks (this repeats every term)

---

## 💭 Remember

**Today is about pride, not perfection.**

Students who leave Term 6 feeling "I built an AI assistant and I showed it to people, and I'm an API Master" will walk into Term 7 ready to take risks and build bigger. The AI-Powered Assistant is genuinely impressive — a chat loop that remembers the user, calls services, reads response dicts, checks status codes, and detects intent. Make sure every student knows that, and knows they've mastered the exact building blocks behind the AI tools they use every day.

**Term 6 of Year 2: complete. Award the badges and celebrate it! 🏅🎉**

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
