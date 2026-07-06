# Year 2, Lesson 5: Bias & Fairness in AI ⚖️🤖

## Teacher's Guide

**Course:** AI Concepts Deep Dive (Year 2, Term 5)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

This is one of the most important — and most sensitive — lessons of the year. Students already know that AI *learns from data* (Week 1) and that *data can be low quality* (Week 2). This week fuses those ideas into a single powerful concept: **when training data is unbalanced or unfair, the AI becomes unfair too.**

The lesson has three core goals:

1. **Make bias concrete, not abstract.** Students don't just hear "AI can be biased" — they run a classifier, *watch* it exclude a group, *measure* the gap with an audit, and *fix* it. The concept lands because they do it with their hands.
2. **Correct two stubborn misconceptions:** "AI is neutral/objective" (it reflects its data) and "bias means someone was mean on purpose" (it's usually an accident of data).
3. **Install the fairness mindset** — the three questions (*Who might this be unfair to? What data trained it? Who was left out?*) that feed directly into the Week 7 Investigation Report.

This is a discussion-heavy, `ai_activities`-central lesson. The code is short on purpose — it's a vehicle for the ideas, not the point itself.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Define bias in AI as *systematic* unfairness to a group, distinct from a one-off error
2. Explain that AI bias usually originates in **unbalanced or unfair training data** (Week 2 callback)
3. Describe at least one real, factual example (accents/names, skin tone, or learned hiring unfairness)
4. Run a rule-based classifier, identify who it excludes, and **quantify** the unfairness with an `audit()` count
5. **Fix** the classifier by balancing its data and re-running the audit
6. Ask the three fairness questions about any AI tool

### Key Success Metrics

- [ ] Every student runs the biased recogniser and correctly identifies the excluded group
- [ ] Most students run the audit and can read the 4/4 vs 0/4 gap as evidence
- [ ] Every student can state, in their own words, that the fix is "balance the data"
- [ ] The class discussion stays respectful, factual, and inclusive throughout
- [ ] Students leave with the three fairness questions and connect them to the Week 7 report

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and chat enabled
- Trinket (online Python 3 editor) — students' existing accounts
- This teaching guide open during class
- The lesson page for screen sharing the audit output
- A private note where you can log who needs a support nudge (as always)

### Pre-Lesson Preparation (15 minutes before class)

1. **Run all three code blocks yourself** (starter, audit, fixed). Confirm the outputs match the lesson exactly — you'll want to reproduce them live with confidence.
2. **Rehearse the sensitive framing.** Read the "Handling Sensitive Discussion" section below twice. Decide your exact opening words for the discussion so you set a respectful tone from the first second.
3. **Prepare 1-2 factual real-world examples** in your own words, in case the chat is slow. Keep them descriptive, never sensational or blaming.
4. **Have the three fairness questions ready to paste** into the chat — you'll use them as a recurring anchor.
5. **Check the Week 2 callback** — be ready to remind students of the "data quality" lesson; this week is its pay-off.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Hook: "AI can be unfair" + what bias means
⏱️  8-20 min  → Real examples + "Who is AI built for?" discussion (ai_activities)
⏱️ 20-35 min  → Catch it: run the biased name recogniser
⏱️ 35-48 min  → Prove it: the fairness audit (feeling → numbers)
⏱️ 48-58 min  → Fix it: balance the data + re-audit
⏱️ 58-68 min  → Fairness mindset (3 Qs) + common misconceptions
⏱️ 68-75 min  → Homework + Week 6 teaser + wrap-up
```

**Flexible timing:** The discussion (Part 2) is the heart of this lesson — protect it. If time is short, compress Part 5 (the fix is quick) rather than cutting the discussion or the audit.

---

## 📚 Detailed Teaching Guide

### Part 1: Hook — What Bias Means (8 minutes)

Open with weight, not doom. This is serious but empowering.

> "Last week we saw AI can be confidently wrong. Today: something bigger. Sometimes AI is unfair to the SAME group of people, over and over — and today we're going to catch it, measure it, and fix it."

Land the definition clearly: **bias = *systematic* unfairness to a group.** Stress the word *systematic* — this separates bias from an ordinary one-off mistake. Then connect straight to prior weeks:

> "Remember Week 1 — AI learns from data. Remember Week 2 — data can be low quality. Put them together: **bad or unbalanced data makes unfair AI.** That's today in one sentence."

#### Teaching Tips

- Use the **"AI is a mirror"** metaphor from the lesson — it's the single most useful anchor for the whole class.
- Don't let students think "biased" means "evil." Foreshadow: "Nobody had to be mean for this to happen."

---

### Part 2: Real Examples + Discussion (12 minutes) — the `ai_activities` core

Walk the three examples from the lesson **calmly and factually**: voice assistants/names and accents, photo tools and skin tone, a hiring tool that learned past unfairness. After each, name the shared cause aloud: *the data was unbalanced, so the AI was unbalanced.*

Then open the discussion using the `ai_activities` prompts. The names/accents angle is the most relatable for a West African cohort — many will have a real story about a voice assistant mangling their name.

> "In the chat, one at a time: has a voice assistant ever failed to understand your name or someone in your family? Tell me what happened."

Read a few aloud, thank each student, and reflect the cause back: "So the tool probably wasn't trained on enough names like yours — that's exactly the data problem we're studying."

#### Teaching Tips

- **This is the emotional centre of the lesson.** A student sharing that a device never gets their name right is validating a real experience — treat it with care and warmth, never as a joke.
- Keep pulling every story back to **data**: "Whose data trained this? Who got left out?" This repetition builds the mindset.
- See the dedicated sensitivity section below before you run this part.

---

### Part 3: Catch It — The Biased Recogniser (15 minutes)

Everyone opens a Trinket named `Y2-T5-W5-BiasFairness` and runs the starter code. Expected output is in the lesson; have them confirm with a **thumbs up** 👍.

Then run the detective question live:

> "Every name it 'knows' happens to be a common English name. Chidi, Amara, Kwame, Ngozi — real names of real people — are treated like they don't exist. Who is this app for? Who got left out?"

Make the causal point explicit: **there is no cruel line of code.** The `if` statement is perfectly innocent. The unfairness lives entirely in the **list** (the data). This is the concrete proof of "bias is usually an accident of data."

#### Teaching Tips

- Ask students to *predict* the output before running — the surprise of seeing four names rejected in a row makes the point stick.
- If a student says "just add more names" already — brilliant, tell them they've discovered the fix and you'll do it together in Part 5.

---

### Part 4: Prove It — The Fairness Audit (13 minutes)

This is the lesson's signature skill: **turning a feeling into evidence.** Students add the `audit()` function and run it.

Expected output:

```
Group A recognised: 4 out of 4
Group B recognised: 0 out of 4
```

Draw out the contrast: 4/4 vs 0/4 is not a subtle bias — it's a total exclusion, now proven in numbers. Explain that real AI auditors do exactly this at massive scale: test groups, count outcomes, compare.

Point out the small code elegance too (the lesson flags it): `name.lower() in known_names` already returns `True`/`False`, so `check_name` needs no `if`. A nice reinforcement of a Year 2 skill.

#### Teaching Tips

- **Numbers beat opinions.** Emphasise that "I feel it's unfair" becomes powerful and undeniable once it's "0 out of 4." This is a life skill, not just a coding one.
- Watch for the loop/counter pattern (`recognised = recognised + 1`) — if any student is rusty, this is a quick, worthwhile recap.

---

### Part 5: Fix It — Balance the Data (10 minutes)

The satisfying payoff. Students replace `known_names` with the balanced list and re-run first the recogniser (all names recognised) then the audit (**4/4 vs 4/4**).

Hammer the core message:

> "We changed the DATA, not the logic. Same clever code — fairer results. Bias came from the data, so the fix lives in the data."

Add the honesty caveat from the lesson: real AI is far larger than a six-item list, so real fixes are genuinely hard — but the *idea* is identical: find who was left out and put them back into the data.

#### Teaching Tips

- Resist the urge to make this part longer — the code is trivial by design. The *concept* ("fix the data") is what should echo.

---

### Part 6: Fairness Mindset + Misconceptions (10 minutes)

Paste the three fairness questions in the chat and have students copy them into a comment at the top of their Trinket:

1. Who might this be unfair to?
2. What data was it trained on?
3. Who was left out?

Then correct the two headline misconceptions explicitly:

- **"AI is neutral/objective."** → Neutral maths + biased data = biased results. AI is a mirror.
- **"Bias means someone was mean on purpose."** → The recogniser had no cruel code — just an unbalanced list. Most bias is an accident of data, which is why we look for it deliberately.

Also flag the third mistake: one wrong answer isn't bias; *systematic* wrongness against the same group is. That's why we **count**.

Close by connecting forward: these three questions are exactly what the **Week 7 Investigation Report** must include under "what could go wrong / who could this be unfair to?"

---

### Part 7: Homework + Wrap-Up (7 minutes)

Walk through both homework tracks (investigate a real tool in writing, OR make a classifier fairer in code). Stress that **Track A is fully valid** — not every student wants a coding-heavy week, and the writing track builds the report skill directly.

Remind them of the respect rule for Track A: describe the problem and the data, never blame or mock a group.

Tease Week 6 (Ethics & Misinformation): "You've learned AI can be unfair. Next week — AI can be convincingly wrong on purpose." End on the empowerment note:

> "You came in a coder. You leave a Bias Detective."

Stay on 2-3 minutes for questions.

---

## 🧡 Handling Sensitive Discussion Respectfully

This lesson touches on fairness, exclusion, names, accents, and skin tone. Handle it with intention.

- **Set the tone first.** Before the discussion, state the ground rule out loud: *"We describe problems with tools and data. We never blame, mock, or joke about any group of people."* Post it in the chat too.
- **Keep examples factual, never sensational.** Say "this tool worked less well for some groups because its data was unbalanced" — not dramatic or accusatory framing. The goal is understanding, not outrage.
- **Validate lived experience.** If a student shares that a device never understands their name, that is real and common. Thank them, take it seriously, and reflect it back through the data lens — never let it be laughed at.
- **Names are personal.** Use West African names as *positive, normal examples of real people*, exactly as the lesson does — the point is that they were wrongly excluded, and that's the *tool's* failing, not theirs.
- **Redirect blame to data, not people.** If a student says "the programmers were racist," gently reframe: "Sometimes yes, but usually no one chose it — the data was unbalanced and no one checked. That's why auditing matters."
- **Watch the chat.** In a fast Zoom chat, step in immediately if any comment targets a group rather than a tool. Reassert the ground rule warmly.
- **Leave them empowered, not anxious.** The takeaway is agency: *we can find bias and fix it.* End on the fix and the detective identity, not on the problem.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Conceptual understanding:**
- [ ] Can state that bias = systematic unfairness, not a one-off error
- [ ] Links bias to unbalanced training data (Week 2 callback)
- [ ] Identifies the excluded group in the recogniser
- [ ] Reads the audit's 4/4 vs 0/4 as evidence
- [ ] Explains the fix as "balance the data"

**Engagement & values:**
- [ ] Participated respectfully in the discussion
- [ ] Used the three fairness questions
- [ ] Kept comments focused on tools/data, not people

### Students to Watch

**Need Extra Support:**
- Struggled with the loop/counter in `audit()` — quick recap of `x = x + 1` in a loop
- Conflated "wrong once" with "biased" — reinforce *systematic* with the audit numbers

**Ready for More Challenge:**
- Point them at the ⭐⭐⭐ homework tier (explain the data-imbalance cause) and suggest testing a third group, or auditing their own Week 3 keyword classifier for bias.

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Output doesn't match the lesson | Check for a stray capital in the name list — `known_names` are all lowercase; `check_name` lowercases the input with `.lower()` |
| Audit prints 0/0 | The group list is empty or misnamed; confirm `group_a`/`group_b` are spelled the same in the call |
| Student says "computers can't be unfair" | Perfect teaching moment — run the recogniser live; the numbers do the arguing |
| Discussion turns to blaming a group | Reassert the ground rule immediately; redirect to "which data was missing?" |
| Discussion stalls / is too quiet | Use your prepared factual example; ask the names/accents question directly — it usually unlocks stories |
| Chat gets heated or personal | Pause, restate the respect rule warmly, and steer back to the tool-and-data framing |
| Trinket/Zoom technical issues | Standard playbook: repl.it backup, private-chat triage, spare account as last resort |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept check:** did the audit make bias *click*? Who still thinks AI is "neutral"?
- **Discussion tone:** did it stay respectful and factual? Anything to adjust in framing next time?
- **Report readiness:** who is already asking good "who could this harm?" questions — they'll shine in Week 7.
- **Support list:** anyone rusty on loops/counters to nudge before next week?

---

## 💭 Remember

**The concept is the lesson; the code is the vehicle.**

If students leave believing two things — *"AI reflects its data, so it can be unfair"* and *"I can detect and fix that unfairness"* — the lesson has succeeded, even if the Python was easy. This week plants the ethical backbone of the whole term and directly feeds the Week 7 Investigation Report.

**You're not just teaching Python this week — you're teaching them to hold AI accountable.** ⚖️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
