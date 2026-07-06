# Year 2, Lesson 7: Project — AI Investigation Report 🔍📝

## Teacher's Guide

**Course:** AI Concepts Deep Dive (Year 2, Term 5)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 7 of 8

---

## 📋 Lesson Overview

### Purpose

This is **BUILD WEEK** for the term project. For six weeks students studied how AI really works — rules vs learning, datasets/features/labels, a rule-based classifier (W3), a keyword chatbot (W4), bias and fairness (W5), ethics and misinformation (W6) — and last week each chose a real AI system to investigate. Today they turn that investigation into a **real Python deliverable**: a program that PRINTS a five-section report and runs a mini rule-based classifier demo.

The session is a **live build-along**. Together you build the report-printer *structure* — one function per section — then students swap in their own Week 6 findings and wire in a reused Week 3 classifier. The homework finishes and polishes it for the **Week 8 AI Summit**, where they present and earn the **AI Scholar Badge**.

Three core goals:

1. **Every student leaves with a running report program** saved as `Y2-T5-W7-Investigation`, with the structure in place and at least Section 1 personalised.
2. **The project is a Python deliverable** — findings live in dicts/lists, printed by functions using f-strings; not paper, not loose comments.
3. **Honesty is a first-class skill** — students must separate verified fact from opinion, and cite where facts came from.

> ⚠️ **CONTINUITY IS CRITICAL.** Week 8 is the Summit presentation of THIS EXACT file. The structure below (the five section functions, the `classify_video`/`run_demo` demo, the `Y2-T5-W7-Investigation` name) must be in place for every student so next week is presentation, not building.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Store investigation findings in dictionaries and lists
2. Write a function per report section that prints using f-strings
3. Loop over a list to print bulleted and numbered content, using `len()` for counts
4. Reuse a rule-based classifier as a demo and explain its blind spots
5. Distinguish a verified fact from an opinion and cite sources
6. Call functions in the correct order to produce a top-to-bottom report

### Key Success Metrics

- [ ] Every student's program runs end to end without errors
- [ ] Every student has a Trinket named `Y2-T5-W7-Investigation` with all five section functions
- [ ] Section 1 (at least) contains the student's own system, not the example
- [ ] Students can say whether their system uses rules or learning, and why
- [ ] Students understand the homework IS their Summit presentation

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share; teacher's Trinket visible throughout
- Students' Trinket accounts and their **Week 6 investigation notes** (the chosen system + any facts gathered)
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Type the full solution yourself once** in a fresh Trinket named `Y2-T5-W7-Investigation` — you build it live and it must be flawless.
2. **Run it and check the output** matches the lesson traces exactly (banner, five sections, demo, footer).
3. **Have a second example system ready** (e.g. a maps app that predicts traffic, or a photo app that tags faces) so students who chose different systems see the structure is universal.
4. **Prepare a "catch-up" pasteable** for each stage in case someone falls behind — paste into Zoom chat, don't stall the class.
5. **Remind students the day before** to have their Week 6 notes open — the lesson stalls badly if they arrive with no system chosen. Have a fallback system for anyone who didn't choose.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + "this is BUILD WEEK" + the two-part project + the plan
⏱️  8-16 min  → Step 1: the findings box (dict + lists) — build live, students use OWN system
⏱️ 16-26 min  → Step 2a: banner + Section 1 + Sections 2 & 3 — build live
⏱️ 26-38 min  → Step 2b: Sections 4 & 5 — build live; full report runs
⏱️ 38-50 min  → Step 3: the mini-demo classifier (reused from W3) + why it matters
⏱️ 50-60 min  → Common mistakes (opinion-as-fact, case-sensitivity, order, citing)
⏱️ 60-75 min  → Homework brief (= Summit prep) + Week 8 Summit/Badge teaser + reflection
```

**Flexible timing:** The five section functions are the priority — protect that time. Sections 2–5 are variations of the same pattern (header, divider, f-string body), so once Section 1 lands you can move briskly. If time is tight, paste the demo (`classify_video`/`run_demo`) into chat rather than dropping it — it's what makes the project shine at the Summit.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + The Plan (8 minutes)

Open with energy — this is the payoff of the whole term.

> "This is BUILD WEEK. Six weeks ago 'AI' was a mystery. Now you've each investigated a REAL system, and today we turn that into a real project — a program that prints your findings like a proper report, with a working demo on the end. Next week you present it and earn your AI Scholar Badge."

Screen-share the **five-question checklist table**. Point out that each question becomes a **section** — this is the same W6 checklist, now in code.

Then the non-negotiable setup:

> "Create a NEW Trinket. Name it exactly `Y2-T5-W7-Investigation`. Type it in the chat when done. This is the file you present next week — do not lose it."

#### Teaching Tips

- **Verify Week 6 notes are open.** If a student has no chosen system, hand them your fallback so they can follow the build; they refine at home.
- Keep the intro under 8 minutes — they build best by doing.

---

### Part 2: Step 1 — The Findings Box (8 minutes)

Build the `ai_system` dictionary and the `data_used`, `risks` lists, plus `how_it_decides` and `responsible`. Narrate the choice of structure:

> "Facts that come in pairs — name, maker, purpose — go in a **dictionary**. Things that come in groups — several kinds of data, several risks — go in a **list**. We're just organising our notes so the program can print them."

Encourage students to type **their own** findings here immediately, not the example. This is the moment the project becomes theirs.

#### Teaching Tips

- **No output yet is fine.** Running produces nothing — reassure them that "no red error" is the win at this stage.
- Watch for missing commas between dictionary items and list items — the most common error here.
- `how_it_decides` is a plain string (`"rules"`/`"learning"`/`"not sure"`) — it drives Section 3's `if/elif/else`.

---

### Part 3: Step 2a — Banner and Sections 1–3 (10 minutes)

Build `print_banner()`, then `print_intro(system)`, and call both. Run and confirm the banner + Section 1 appear. Then add `print_data(data)` and `print_decision(method)`.

Narrate the reusable pattern every section follows:

> "Every section function is the same shape: a blank `print()` for spacing, a HEADER line, a `'-' * 56` divider, then the body. Once you've written one, the rest are variations."

For `print_data`, highlight `len(data)` — the count fixes itself:

> "We never type the number 4. `len(data)` counts the list for us. Add a fifth item and it says 5 automatically."

For `print_decision`, connect back to the whole term:

> "This is the biggest question of Term 5 — rules or learning. Your `if/elif/else` prints the right sentence based on what you found."

#### Teaching Tips

- **Build branch by branch; don't paste whole functions.** Students who fall behind can't recover from a pasted wall.
- Point out dictionary access inside f-strings: `{system['name']}` — single quotes inside, because the f-string uses double quotes.
- Trinket auto-indents after a colon — tell them not to fight it.

---

### Part 4: Step 2b — Sections 4 and 5 (12 minutes)

Add `print_risks(risks)` (numbered loop with a `number` counter that increments) and `print_responsibility(info)` (verdict shouted with `.upper()`). Call them in order, then run the FULL report.

Explain the counter pattern:

> "Section 4 is numbered, not bulleted. We start `number = 1`, print it, then `number += 1` each time round. That's how you number a list by hand."

Explain `.upper()`:

> "`info['verdict']` is `'partly'`. `.upper()` makes a SHOUTING copy — `'PARTLY'` — just for printing. It doesn't change the stored value."

**Then the full run.** Do it live so students see all five sections flow top to bottom. Celebrate loudly — the report exists now.

#### Teaching Tips

- **Order matters.** This is the moment to stress that functions run in the order you **call** them, not define them — previews Common Mistake 3.
- If a section is missing from the output, they forgot to call it. Check the call list at the bottom.

---

### Part 5: Step 3 — The Mini-Demo (12 minutes) ⭐ THE SHINE

This is what lifts the project from a printout to a demonstration. Frame it clearly:

> "A report is stronger when you can SHOW, not just tell. Section 3 says your system makes decisions — so let's demonstrate a simple decision with the exact rule-based classifier you built in Week 3."

Build `classify_video(title)` and narrate the **case-sensitivity fix first**:

> "First line: `title = title.lower()`. Same trap as your Week 4 chatbot — if we don't lower-case, `'Scary'` won't match `'scary'`. Always lower-case before you search."

Build `run_demo()`, run it, and then — crucially — dwell on the **third title**:

> "'My Trip to the Market' — a harmless home video — comes back as 'needs a human to check' because it has NONE of our keywords. That's the weakness of rule-based systems: they only know the words you gave them. This is GOLD for your report — you can show the class exactly where rules run out."

This ties the demo directly back to Section 3 and to the whole rules-vs-learning theme of the term.

#### Teaching Tips

- **Encourage them to make the classifier their own** — swap video titles for the domain of their system (comments, messages, product reviews). The pattern is identical.
- If short on time, paste `classify_video`/`run_demo` into chat and have them wire it in at home — but demo it live yourself so they've seen the point about blind spots.

---

### Part 6: Common Mistakes + Homework + Wrap-Up (10-15 minutes)

Run through the four common mistakes, live where useful:

1. **Opinion presented as fact** — the most important one this week. Show the sloppy `responsible` dict vs the honest one. Stress "I think..." / "I could not verify...".
2. **Forgetting `.lower()`** — live-demo `"scary"` missing `"Scary Horror..."`, then fix it.
3. **Wrong call order / forgotten function** — a section out of place or a missing demo.
4. **No sources** — a report a reader can't check; point to the ⭐⭐ `print_sources()` homework tier.

#### Homework = Summit Prep (5 minutes)

Make it explicit:

> "Your homework this week IS your presentation. Fill in all five sections with YOUR research, make the demo run, put your name in the footer, and practise reading it aloud. Next week you present this exact file."

Walk the tiers: ⭐ all sections filled; ⭐⭐ add `print_sources()`; ⭐⭐⭐ add tricky test titles and comment on what the classifier gets wrong.

#### Wrap-Up + Week 8 Teaser (3 minutes)

> "Next week is the AI Summit. You present your report — banner, five sections, live demo — share one surprising discovery, and earn your AI Scholar Badge. Save your Trinket and practise. See you on stage."

Point students to the **reflection** in the AI Activities panel — a short written reflection on what investigating a real system taught them; one sentence shared in chat.

Stay on 2-3 minutes for anyone whose program isn't running.

---

## 🎓 Assessment & Notes

### The Key Teaching Moment

The most valuable moment is the **third demo title** ("My Trip to the Market" → "needs a human to check"). It makes rule-based limitations concrete: the classifier only knows the words you typed. Let students reason out *why* it failed before you explain — this lands the rules-vs-learning distinction that underpins the whole term far better than telling.

### During Class, Observe:

**Technical Skills:**
- [ ] Built the findings dict/lists with correct commas
- [ ] Wrote each section function following the header/divider/body pattern
- [ ] Used `len()` for counts and a counter for the numbered list
- [ ] Lower-cased the title in the classifier
- [ ] Called all six functions (five sections + demo) in the right order

**AI Understanding:**
- [ ] Can state whether their system uses rules or learning, and why
- [ ] Named a real risk / who it could be unfair to
- [ ] Separated a verified fact from an opinion

**Engagement:**
- [ ] Kept pace with the live build (thumbs up per stage)
- [ ] Personalised the report with their own system
- [ ] Understood the homework is the Summit presentation

### Students to Watch

**Need Extra Support:**
- Arrived with no chosen system — give them the fallback system, help them refine at home from Week 6 notes.
- A section missing from output — they forgot to call the function; check the call list.
- `KeyError` — a dictionary key was misspelled (e.g. `system['names']`).

**Ready for More Challenge:**
- Finished early — point them at the ⭐⭐⭐ tier: extra tricky titles and a written note on the classifier's blind spots; or a `print_sources()` section.

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Program runs but prints nothing | The section functions are defined but never **called** — add the calls at the bottom |
| A section is missing from the report | That function's call was left out — check the call list is complete and in order |
| `KeyError: 'name'` | Dictionary key misspelled or missing — must match exactly, e.g. `system['name']` |
| `SyntaxError` around the dict/lists | Missing comma between items, or a missing closing `}` / `]` |
| Classifier misses a capitalised word | Missing `title = title.lower()` as the first line of `classify_video` |
| Sections print in the wrong order | Functions run in **call** order, not definition order — reorder the calls |
| `IndentationError` | Body lines inside a function or loop aren't indented 4 spaces |
| Report reads like opinion, not investigation | Coach the truth-vs-opinion distinction; add "I think..." or a sources note |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Completion:** how many students have a running report with all five section functions and at least their own Section 1? (Anyone missing needs a nudge before the Summit — Week 8 is presentation, not building.)
- **Personalisation:** did students swap in their own system, or leave the example? Those still on StreamHive need to do the real work at home.
- **Honesty:** did the truth-vs-opinion point land? It's a core Term 5 outcome.
- **Demo:** did the blind-spot moment (third title) click? It's the bridge from "report" to "understanding".
- **Summit readiness:** flag anyone who'll struggle to present so you can support them next week.

---

## 💭 Remember

**Today is about turning understanding into a deliverable.**

Nothing today is a brand-new coding concept — dicts, lists, loops, functions, f-strings, a rule-based classifier are all skills they own. The new thing is **assembling them to communicate real findings honestly**. The magic moment is when a student runs the full report and sees their own investigation printed like a professional case file, demo and all.

**Protect two things:** every student leaves with a running, correctly-named `Y2-T5-W7-Investigation`, and every student understands that honesty — fact vs opinion, cited sources — is what makes an AI Scholar. Next week they present it and earn the badge.

**They spent six weeks learning how AI works. Today they prove it.** 🔍📝🎓

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
