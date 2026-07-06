# Year 2, Lesson 1: Dream It — Capstone Planning 💭🎯

## Teacher's Guide

**Course:** Capstone & Portfolio (Year 2, Term 8)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This is the opening class of the FINAL term — and the first time all year students choose their own project. The whole term (build sprints, polish, showcase, graduation) rests on the decision students make this week. If they leave with a well-scoped, genuinely-cared-about mini-spec, the next six weeks flow. If they leave with a vague or oversized idea, every following week fights uphill.

The session has three core goals:

1. **Celebrate the milestone** — this is the last term; they are real programmers now. Set a proud, high-energy tone.
2. **Teach realistic scoping** — the single most valuable skill this week. Students almost always dream too big. Your job is to help them shrink ideas to something finishable without crushing enthusiasm.
3. **Produce a mini-spec** — every student leaves with a draft mini-spec and pitches it. Homework finalises it.

This is a **planning** lesson — deliberately low on code. Resist the urge to start building. The one tiny "pitch" program is a light touch, not the point.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain the three marks of a good capstone (uses their skills, achievable, cared-about)
2. Distinguish must-have features from nice-to-have features and explain why the split matters
3. Draft a mini-spec: name, description, 2-3 must-haves, 1-2 nice-to-haves, skills used
4. Describe the Study Buddy worked example as a model spec
5. Pitch their own project idea in 1-2 sentences

### Key Success Metrics

- [ ] Every student has a draft project idea by the pitch activity
- [ ] Every student posts a 1-2 sentence pitch in the Zoom chat
- [ ] Each pitch has clear, right-sized must-haves (or you've flagged it for scoping help)
- [ ] Students leave excited and clear on what to finalise for homework

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and chat
- Trinket accounts (for the optional pitch program and the ⭐⭐⭐ homework)
- This teaching guide open during class
- The Ideas Menu and Mini-Spec Template ready to screen-share or paste
- Class WhatsApp/email thread for submitting mini-specs

### Pre-Lesson Preparation (15 minutes before class)

1. **Re-read the Study Buddy spec** (below and in the lesson) so you can explain it fluently — it anchors every build week
2. **Prepare 3-4 scoped example ideas** of your own in case a student is stuck — one per theme, all small enough to finish
3. **Rehearse the "shrink it down" move** — you WILL need to gently scope down oversized ideas live; have a friendly script ready
4. **Set an emotional tone plan** — this is a milestone; open by naming the seven projects they've already built
5. **Decide your pitch-sharing method** — chat is fastest for a big class; unmuting works for a small one

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-10 min  → Welcome to the final term + you're a real programmer now
⏱️ 10-20 min  → What makes a good capstone + the Ideas Menu
⏱️ 20-35 min  → The mini-spec + must-have vs nice-to-have (the core teaching)
⏱️ 35-45 min  → Study Buddy worked example + tiny pitch program
⏱️ 45-60 min  → PITCH IT activity (brainstorm, write, pitch in chat)
⏱️ 60-75 min  → Common pitfalls + homework + Week 2 preview + wrap-up
```

**Flexible timing:** the pitch activity is the heart — protect its 15 minutes. If short on time, trim the Ideas Menu walkthrough, not the activity.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome to the Final Term (10 minutes)

Open with genuine ceremony. This cohort has been with you a long time.

#### Opening Script

> "Programmers — this is the LAST term of Year 2. Think back to Term 1. Some of you weren't sure you could still code. Since then you've built a calculator, arcade games, a text adventure, a contact manager, an AI assistant, and a data story. SEVEN real projects. This term, for the first time, I'm not handing you a project. You are. You dream it, you build it, and in eight weeks you graduate as an AI-Ready Developer."

Name the certificate now — it's a powerful motivator all term. Show the 8-week term map and land two beats: Week 3-5 is where it comes alive, and Week 8 is graduation.

#### Teaching Tips

- **Lean on shared history** — reference specific past projects and inside jokes. Continuity fuels pride.
- **Reassure the anxious** — "you're not learning anything new this term; you're combining what you already own."

---

### Part 2: What Makes a Good Capstone + Ideas Menu (10 minutes)

Teach the three boxes (uses skills / achievable / cared-about) briefly, then spend most of the time on the **Ideas Menu**. Go theme by theme with one excited example each. Emphasise that mixing themes is encouraged.

Run the chat vote ("which theme pulls at you? drop the emoji"). This gives you an instant read on where the class is leaning and warms them up to commit.

#### Teaching Tips

- **Don't let anyone leave this part idea-less.** If a student has nothing, offer them one of your prepared scoped ideas as a starting point — they can remix it.
- **Plant the achievable seed early** so the scoping conversation in Part 3 isn't a surprise.

---

### Part 3: The Mini-Spec + Must-Have vs Nice-to-Have (15 minutes)

This is the core teaching of the lesson. Screen-share the Mini-Spec Template and walk through each row.

Then make the **must-have vs nice-to-have** split the emotional centrepiece:

> "This one idea is the secret to finishing. Must-haves are the core — build them FIRST. Nice-to-haves are bonuses — only if there's time. The golden rule: finish every must-have before you touch a single nice-to-have."

Draw the analogy to professional teams building a "minimum viable product" — the smallest version that actually works. This connects to the (light) `ai_activities` discussion.

#### Teaching Tips

- **Cap must-haves at 3, nice-to-haves at 2.** Students overload the must-have column; push extras down to nice-to-have live.
- **A must-have should be describable as "done when it works."** If a feature can't be checked off, it's too vague — help them sharpen it.

---

### Part 4: Study Buddy Worked Example (10 minutes)

Walk through the full Study Buddy mini-spec (table in the lesson). This is the model students copy. Emphasise that it ticks all three boxes and has exactly three focused must-haves. Stress loudly: **Study Buddy is ONE example — your project can be completely different.** You'll return to Study Buddy every build week to demonstrate technique, but the goal is their own project.

Optionally have students run the tiny "pitch" program in Trinket (`Y2-T8-W1-CapstonePlan`) — a light, fun touch that gets them into the editor without any real building.

#### The Study Buddy Reference Spec (keep for the whole term)

- **Name:** Study Buddy 📚
- **What it does:** menu-driven program to track study sessions and stay motivated
- **Must-have 1:** log sessions — menu adds study sessions to a list of dicts (`subject`, `hours`)
- **Must-have 2:** show stats + a text bar chart (total hours, hours per subject)
- **Must-have 3:** motivational keyword mini-assistant (type how you feel → matching tip)
- **Nice-to-have 1:** quiz mode
- **Nice-to-have 2:** "top subject" badge
- **Skills:** lists of dicts, menu loops (`while`/`break`), dictionaries (tally), functions, f-strings, if/elif/else, text bar charts, keyword assistant, `try`/`except`, `random`

---

### Part 5: Pitch It! Activity (15 minutes)

The centrepiece activity. Three steps: brainstorm → write mini-spec → pitch in chat.

Give a clear worked pitch to copy the style of, then set them to work with a countdown ("you have 8 minutes to write your mini-spec, then we pitch"). Circulate via chat and private messages, scoping ideas as you go.

When pitches land in the chat, **read several aloud with energy** and prompt peers to react with 🎉/👍. Celebrate variety. Flag any oversized ones gently for a quick follow-up.

#### Teaching Tips

- **Peer excitement is the engine.** The more you hype early pitches, the braver the shy students become.
- **Have a "seed idea" ready** for anyone frozen — a scoped example they can adopt and make their own.
- **Note who's still undecided** — they need a nudge before Week 2 or building can't start.

---

### Part 6: Pitfalls + Homework + Wrap-Up (10-15 minutes)

Run the three pitfalls quickly (scope too big / no clear must-haves / don't care about it) using the lesson's ❌/✅ pairs — students will recognise their own drafts in these.

Walk through the homework and the tiers. Push confident students to ⭐⭐⭐ (sketch the menu) — it's a genuine head-start on Week 2's skeleton build. Preview Week 2 and remind them: **bring the finalised mini-spec.**

#### Wrap-Up Script

> "Today you did the hardest thing in any project — you turned a blank page into a plan. Finalise your mini-spec for homework, keep it small enough to finish, and bring it next week. That's when we start building. Six weeks to graduation!"

---

## 🧭 Helping Students Scope Realistically

This is the make-or-break skill of the week. Expect most first ideas to be too big. Your goal: shrink scope while protecting enthusiasm.

### The "Shrink It Down" Conversation

When a student pitches something oversized, don't say "that's too hard." Instead:

1. **Affirm the dream:** "That's a brilliant idea — I love it."
2. **Find the ONE best part:** "If you could only build ONE piece of that, which is the coolest?"
3. **Make that the whole project:** "Let's make THAT your capstone, and the rest become nice-to-haves for later."

Example: "Online multiplayer battle royale" → "Let's build the one-on-one text battle with health points. Multiplayer becomes a someday nice-to-have."

### Trinket / plain-Python reality checks

Remind students (kindly) what's out of scope in our environment, so no one specs the impossible:

| Not possible here | Steer toward instead |
|---|---|
| Graphics/3D, real-time animation | Text menus, turtle/text charts |
| Saving data between runs (no files) | Data lives in a list of dicts during one run |
| Internet, real APIs, live data | Mock data hard-coded in a list of dicts |
| Multiplayer / accounts / logins | Single-user program, one session |
| Sound, video, images | Emoji, ASCII borders, text bar charts |

### Right-sizing rule of thumb

- **2-3 must-haves, each buildable in one week.** If a single must-have sounds like a whole term, split or shrink it.
- **A good capstone reuses skills, doesn't require new ones.** If a student needs to learn something brand new to start, the scope is wrong.
- **"Boring but finished" beats "amazing but broken."** Repeat this often.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Planning Skills:**
- [ ] Understands must-have vs nice-to-have (can sort features correctly)
- [ ] Wrote a mini-spec with a clear one-sentence description
- [ ] Chose 2-3 realistic, checkable must-haves
- [ ] Named at least 3 Year 2 skills their project uses

**Engagement:**
- [ ] Contributed to the theme vote
- [ ] Posted a pitch in the chat
- [ ] Reacted to classmates' pitches

### Students to Watch

**Need Extra Support:**
- Still idea-less at the pitch stage — offer a scoped seed idea; check in before Week 2
- Spec is too vague to build — help sharpen must-haves into "done when it works" statements

**Need Scoping Help (most common):**
- Idea is exciting but too big — run the "shrink it down" conversation; keep the dream as nice-to-haves
- Fast, confident planners — push them to ⭐⭐⭐ (sketch the menu) as a Week 2 head-start

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student has no idea at all | Offer a prepared scoped seed idea per theme; let them remix it into their own |
| Idea is far too big | "Shrink It Down" conversation — pick the one best feature, demote the rest to nice-to-haves |
| Idea needs graphics/files/internet | Show the reality-check table; redirect to a text/menu version of the same concept |
| "I want to copy Study Buddy exactly" | Fine as a starting point, but nudge them to change the topic (e.g. fitness log, reading tracker) so it's theirs |
| All must-haves are vague | Rewrite each as "done when ___ works" together |
| Chat is quiet during pitches | Read a couple aloud yourself with big energy; call on 2-3 students by name |
| Student anxious it's "too hard now" | Reassure: no new skills this term — it's combining what they already own |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Scope map:** whose ideas are right-sized, whose need shrinking before Week 2?
- **Undecided list:** who still has no clear project? They need a nudge this week.
- **Skill spread:** which Year 2 skills are showing up most? (Tells you what to emphasise in the Week 2 toolkit review.)
- **Excitement level:** were students genuinely energised? Low energy now predicts stalled builds later.

---

## 💭 Remember

**The goal today is a plan students believe in and can finish.**

Everything else this term depends on the mini-spec written this week. A right-sized, cared-about project makes the build weeks joyful; an oversized or unloved one makes them a slog. Spend your energy on two things: **celebrating the milestone** and **scoping realistically.** Get those right and graduation takes care of itself.

**Six weeks to AI-Ready Developers — let's dream big, then build smart!** 🎓

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
