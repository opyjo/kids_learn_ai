# Year 2, Lesson 1: Welcome to Year 2 — Code Sprint! ⚡🐍

## Teacher's Guide

**Course:** Python Accelerated (Year 2, Term 1)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This is the Year 2 maiden class. Students arrive with a full year of Python behind them — but also a long break, mixed retention, and (for some) nerves about whether they "still remember how to code." The session has three core goals:

1. **Rebuild momentum and confidence fast** — every student runs working code within the first 20 minutes
2. **Diagnose retention quietly** — the three sprint rounds tell you exactly who kept practising and who needs support, without any student feeling tested
3. **Sell the year** — the Year 2 roadmap (8 projects, ending in an AI assistant and a capstone) is your biggest motivational asset; present it with energy

The "Code Sprint" framing turns revision into a game. Keep the pace brisk — this cohort gets bored by slow recaps of things they remember.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Describe the Year 2 structure (8 terms, 8 projects) and this term's project (Smart Calculator)
2. Write and run a `print()` statement, fixing quote/capitalisation bugs independently
3. Create variables and print them combined with text
4. Use `input()` to capture a user's answer and respond to it
5. Explain (at recall level) that `input()` always returns text — setting up Week 2

### Key Success Metrics

- [ ] Every student logs into Trinket and runs code by minute 20
- [ ] Every student completes Sprint Rounds 1 and 2; most complete Round 3
- [ ] You have a private list of 2-4 students who need a catch-up nudge
- [ ] Students leave excited about the Smart Calculator project

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Students' existing Trinket accounts (from Year 1) — have password-reset steps ready
- A timer visible on your screen share (or just count down verbally) for sprint rounds
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** as usual — audio, video, screen share, code runs
2. **Review the Year 1 register** — know who completed Year 1 strongly, who scraped through, and any brand-new joiners (they'll need extra scaffolding today)
3. **Prepare the roadmap moment** — you'll show the 8-term table; decide whether to screen-share the lesson page or paste it in chat
4. **Have the Trinket password-reset flow ready** — someone WILL have forgotten their login after the break
5. **Prepare a naming convention reminder** — `Y2-T1-W1-CodeSprint`; portfolio-building starts today
6. **Check the AI discussion prompt** — have 1-2 recent AI examples ready (a new chatbot feature, AI images) in case the chat is slow to start

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-10 min  → Welcome back + AI catch-up discussion
⏱️ 10-20 min  → Year 2 roadmap + Trinket check
⏱️ 20-30 min  → Python muscles warm-up (review program walkthrough)
⏱️ 30-50 min  → THE CODE SPRINT (3 timed rounds + bonus)
⏱️ 50-60 min  → Common mistakes + Smart Calculator mission briefing
⏱️ 60-75 min  → Homework + Week 2 mystery teaser + wrap-up
```

**Flexible timing:** If Trinket logins eat time (likely after a break), compress the warm-up walkthrough — the sprint is the heart of the lesson and must get its full 20 minutes.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome Back + AI Catch-Up (10 minutes)

Join 5 minutes early and greet returning students **by name** — reference something from Year 1 if you can ("Kofi! Still proud of that quiz game!"). This immediately signals continuity.

#### Opening Script

> "Welcome BACK, programmers! Look at this class — you're not beginners anymore. Last year you wrote real Python: games, loops, lists. This year we go much further. But first — while you were away, AI didn't take a break. Let's talk about it."

#### AI Catch-Up Discussion (5 minutes)

Use the lesson's `ai_activities` prompt:

> "Type in the Zoom chat: what's the most impressive — or strangest — AI thing you've seen recently?"

Read answers aloud, call on 2-3 students to elaborate. Then land the hook:

> "Here's the difference between Year 1 and Year 2: last year you learned what AI is. This year, by Term 5 and 6, you'll understand how it works INSIDE — and you'll build your own AI-powered assistant. Everything starts with the Python we sharpen today."

#### Teaching Tips

- **Returning-class energy is different from a maiden class** — lean on shared history and inside jokes from Year 1 (BrightByte, bug-hunting, the graduation showcase)
- **Watch for new joiners** — if any student didn't do Year 1, privately reassure them: "The first five weeks re-cover everything at speed — you'll catch up fast"

---

### Part 2: Year 2 Roadmap + Trinket Check (10 minutes)

#### The Roadmap Moment (5 minutes)

Share the 8-term table from the lesson. Go term by term QUICKLY, with one excited sentence each. Slow down only for:

- **Term 6 (AI-Powered Assistant):** "You will talk to a program YOU built."
- **Term 8 (Capstone):** "You choose the project. Anything you want. You'll present it at graduation."

Then the chat vote: "Which project are you most excited about?" — this gives you instant engagement data and a callback for future lessons ("I know half of you are waiting for the arcade term — this loop skill is exactly what you'll need").

#### Trinket Check (5 minutes)

Everyone logs in and runs:

```python
print("Year 2, here I come! 🏁")
```

Thumbs-up reaction when it works. Handle stragglers via private chat while the class moves on.

**Introduce the portfolio habit:**

> "New Year 2 rule: name every Trinket properly. Today's is Y2-T1-W1-CodeSprint. At the end of the year, you'll assemble ALL your projects into a portfolio — future-you will thank present-you."

| Problem | Quick Fix |
|---|---|
| Forgotten Trinket password | Walk them through reset via private chat; or paste a spare class login |
| New student, no account | Sign up with Google — 2 minutes; pair them with a neighbour meanwhile |
| Trinket down | repl.it backup link in chat |

---

### Part 3: Python Muscles Warm-Up (10 minutes)

Screen-share the "Everything you learned in Year 1 in 10 lines" program. Read it top to bottom, asking the CLASS to explain each line before you do:

> "Line one — someone type in the chat: what does print do?"
> "This line with `input()` — what lands inside the variable `hobby`?"
> "Who remembers what `range(3)` means?"

This is diagnostic gold. Note which lines get fast confident answers (safe to skip in future recaps) and which get silence (slow down there in coming weeks — especially loops and lists, which Terms 2 and 4 rebuild from scratch anyway).

**Reassure explicitly:**

> "If any line felt foggy — perfect. This whole term exists to make these skills rock-solid. By Week 8 you'll laugh at how easy this program looks."

#### Teaching Tips

- **Don't re-teach here.** This is recall activation, not instruction. If a concept is truly gone for the whole class, note it and trust the term plan — each skill gets its own week.
- **Keep it under 10 minutes.** The sprint is waiting.

---

### Part 4: THE CODE SPRINT (20 minutes)

The centrepiece. Frame it right:

> "This is a race — but you're only racing ONE person: the you from last year. Three rounds. I'll time each one. When your code runs, thumbs up in Zoom. Ready?"

#### Round 1 — Bug Hunt (⭐, ~4 minutes)

Students fix `print("Welcome back, coder!)` — the missing closing quote.

- Countdown, start the timer, watch the reactions roll in
- When most are done: "That's the most common Python bug on Earth. Last year it took you minutes. Today? Seconds. THAT is growth."
- **Watch for:** students who don't spot it within 2 minutes — first names for your support list

#### Round 2 — Variable Flash (⭐⭐, ~5 minutes)

Two variables + one combined print. The classic trap is `print("name")` with quotes — if you see `name` literally printed in someone's shared output, turn it into a teaching moment for everyone:

> "Ooh — someone just printed the WORD name instead of the VALUE. Who can explain in the chat why?"

#### Round 3 — Talk to Me (⭐⭐⭐, ~6 minutes)

`input()` + a reply using concatenation. Expect rust here — `input()` is the most-forgotten Year 1 skill. Live-code it once if fewer than half the class finishes in 3 minutes.

#### Bonus Sprint (~5 minutes, fast finishers)

The combo program. Fast finishers do this while you privately help Round 3 stragglers. Invite one or two to paste their program in the chat or share screens.

#### Teaching Tips

- **The timer is theatre, not pressure.** Never call out slow students; the countdown is for energy, the reactions are your data.
- **Log quietly.** Keep a note of who finished each round — this is your retention map for the whole term.
- **Celebrate speed differences honestly:** "Some of you finished in 30 seconds, some needed the hint — both are fine. The sprint is about waking up, not winning."

---

### Part 5: Common Mistakes + Mission Briefing (10 minutes)

#### Common Mistakes (5 minutes)

Run through the three from the lesson, live-coding each error so students see the actual messages:

1. Quotes around variable names → prints the word, not the value
2. **`input() + 1` → TypeError** — THIS IS THE IMPORTANT ONE. Run it, let it crash, and deliberately do NOT explain it:

> "Why did that crash? `input()` gave us text — even though it LOOKS like a number. How do we fix it? That... is next week's entire lesson. Bring your curiosity."

Leaving the mystery open is intentional — it's the hook for Week 2 (data types and conversion).

3. Capital letters (`Print`, `Name` vs `name`) — quick recall, they know this

#### Smart Calculator Mission Briefing (5 minutes)

> "Every Year 2 term ends with a real project. This term: the Smart Calculator. Menu, real maths, beautiful output, and — the hard part — it must NEVER crash, no matter what silly thing the user types. Building 'never crashes' is what separates real programmers from beginners."

Map the weeks so students see the plan: Week 2 data types → Week 3 power maths → Week 4 beautiful output → Week 5 input checking → Weeks 6-7 build → Week 8 showcase.

---

### Part 6: Homework + Wrap-Up (10 minutes)

#### Homework: "Year 2 Me" (5 minutes)

Walk through the requirements and the example run. Point out the challenge tiers:

> "⭐ is the mission. ⭐⭐ makes it beautiful. ⭐⭐⭐ needs an `if` — which we only lightly touched today, so it's genuinely for the brave. Any tier counts as done."

Paste submission instructions in the Zoom chat. Set the due date.

#### Wrap-Up (3 minutes)

> "Today you proved the break didn't beat you. You fixed bugs in seconds, you wrote a program that holds a conversation, and you know the mission. Next week: we solve the crash mystery. See you there!"

Stay on the call 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills (retention check):**
- [ ] Fixed the missing quote independently (Round 1)
- [ ] Created and printed variables correctly (Round 2)
- [ ] Used `input()` and responded to the answer (Round 3)
- [ ] Attempted the bonus combo (strong retention)

**Engagement:**
- [ ] Participated in AI discussion and roadmap vote
- [ ] Used Zoom reactions during sprints
- [ ] Left excited (chat energy at wrap-up)

### Students to Watch

**Need Extra Support:**
- Couldn't fix Round 1 without the hint — significant rust; consider a 10-minute 1:1 catch-up this week
- New joiners who didn't do Year 1 — send them Year 1 Week 1-3 lesson links as optional catch-up

**Ready for More Challenge:**
- Finished all rounds + bonus early — point them at the ⭐⭐⭐ homework tier and hint they can add MORE than one `if`

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Many forgotten Trinket logins | Budget 5 extra minutes; paste reset steps in chat; use a spare class account as last resort |
| Sprint rounds too easy for the class | Shorten timers, skip straight to the bonus combo, add a 4th round: "ask TWO questions and use both answers in one sentence" |
| Sprint rounds too hard (heavy rust) | Drop the timer entirely, live-code each round first, students reproduce — the lesson still works as guided revision |
| A student is demoralised ("I forgot everything") | Private chat: "That's exactly what Term 1 is for — it re-teaches everything at speed. You're in the right place." |
| Zoom/Trinket technical issues | Same playbook as Year 1: repl.it backup, browser-window-only screen share, private-chat triage |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Retention map:** which sprint rounds did the class clear fast? Which skills are rusty? (This calibrates how fast you can run Weeks 2-5.)
- **Support list:** who needs a catch-up nudge before next week?
- **Roadmap votes:** which projects excited them most? (Use as callbacks all year.)
- **Timing:** did logins eat the schedule? Adjust Week 2 plan if so.

---

## 💭 Remember

**The goal today is momentum, not mastery.**

Every student should leave believing two things: "I still remember how to code" and "this year's projects are going to be amazing." If they believe both, Week 2 will take care of itself.

**Welcome back — you've got this!** 🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
