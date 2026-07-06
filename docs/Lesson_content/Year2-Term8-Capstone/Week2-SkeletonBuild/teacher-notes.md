# Year 2, Lesson 2: Toolkit Review & Skeleton Build 🧰🏗️

## Teacher's Guide

**Course:** Capstone & Portfolio (Year 2, Term 8)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

Last week students dreamed up a capstone and wrote a mini-spec (name, must-haves, nice-to-haves). This week we turn the dream into a running skeleton. The lesson has three core goals:

1. **Refresh the whole toolkit fast** — a one-page reference table so every student can look at their spec and match features to tools they already own
2. **Teach the skeleton-first habit** — structure before features: a menu, a `main()` loop, and a stub per feature; run it, prove it works, THEN fill blanks
3. **Get every student a running skeleton** — the Study Buddy build-along gives everyone the pattern; then they scaffold their own project in parallel

This is a **live build-along** (mirroring Term 1 Week 6), but with a twist: after the shared Study Buddy build, students diverge and build their OWN skeletons. Your biggest job is supporting a room full of *different* projects at once — the structure is identical even when the features differ, and that sameness is your anchor.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Name the Year 2 tools and match a project feature to the right tool
2. Explain what skeleton-first means and why a running skeleton beats a half-built feature
3. Define a function **stub** and say what it's for
4. Build a menu, a `main()` while-loop, and stubs that route by `if/elif/else`
5. Quit a loop cleanly with a `running = False` flag
6. Scaffold their own capstone skeleton from their Week 1 spec

### Key Success Metrics

- [ ] Every student has a `Y2-T8-Capstone` Trinket that RUNS (menu loops, stubs print, Quit stops it)
- [ ] Every student can point to their menu and say which tool each feature will need
- [ ] Most students have started their OWN skeleton (menu + at least two stubs) by the end
- [ ] No student leaves with a program that crashes on launch

### Materials Needed

- Computer with internet (teacher and each student)
- Zoom with screen share
- Students' Trinket accounts
- Each student's **Week 1 spec** open (name, must-haves, nice-to-haves) — remind them to have it ready
- The toolkit reference table from the lesson, ready to screen-share
- This teaching guide open during class

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Type the full Study Buddy skeleton once yourself** so the live build is smooth and you know where the tricky moments are (function order, the `main()` call at the bottom)
3. **Skim last week's specs** — know which students picked ambitious projects (games, many features) vs. simple ones; the ambitious ones need help *trimming* to 3-4 must-haves
4. **Prepare a "menu-to-tool" example** for one or two students' projects so you can model the toolkit-matching out loud
5. **Have the starter template link ready** to paste in chat for the "build your own" phase
6. **Decide your checkpoint rhythm** — thumbs-up after each of the five stages

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + where we are in the capstone journey
⏱️  8-18 min  → Toolkit speed-review + match-a-tool discussion
⏱️ 18-28 min  → Skeleton-first idea + what a stub is
⏱️ 28-48 min  → BUILD-ALONG: Study Buddy skeleton (5 stages)
⏱️ 48-63 min  → Students build THEIR OWN skeleton (you circulate)
⏱️ 63-75 min  → Homework + Week 3 teaser + wrap-up
```

**Flexible timing:** The two anchors are the Study Buddy build-along and the students' own build. If the toolkit review runs long, trim it — it's a reference they keep, not a lecture to finish.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + Journey Check-In (8 minutes)

Open with energy — this is the graduation term.

> "Last week you invented your project. This week we make it RUN — not the features, not yet. Today we build the skeleton: the frame that every feature hangs on. By the end of class your project will run without a single crash, even though nothing 'works' yet. Sounds strange? It's exactly how professionals start."

Remind them of the term map so they see the payoff: W2 skeleton → W3-W5 fill features → W6 polish → W7 portfolio → **W8 graduation and the AI-Ready Developer Certificate**.

Ask everyone to open their **Week 1 spec** now — they'll need it for the build.

---

### Part 2: Toolkit Speed-Review (10 minutes)

Screen-share the toolkit table. Do NOT re-teach each tool — that's a year of lessons. Instead, read each row as a one-line reminder and keep the pace brisk.

The real work is the **match-a-tool discussion**:

> "Look at your spec. Pick your first must-have feature. Type in the chat: which tool from the table does most of the work?"

Read a few answers aloud and model the reasoning:

- "Amara's 'save a high score list' → that's a **list**, Term 4."
- "Kofi's 'reply based on what the user types' → that's a **keyword mini-assistant**, plus `if/elif`."
- "Chidi's 'show a chart of scores' → **text bar chart**, Term 7."

This does double duty: it refreshes the toolkit AND quietly checks that each student's must-haves are actually buildable with what they know. If a feature has NO matching tool, that's your cue to help them re-scope during the build phase.

#### Teaching Tips

- **This table is a keeper.** Tell students to bookmark it — they'll consult it every week for the rest of term.
- **Watch for over-scoping.** A spec with eight must-haves is a warning sign; steer them to 3-4 for the skeleton and park the rest as nice-to-haves.

---

### Part 3: Skeleton-First + Stubs (10 minutes)

This is the conceptual heart. Sell it hard.

> "Imagine building a house by starting with the paint. Ridiculous, right? You need walls and doorways first. Code is the same: menu and loop first, features later."

Walk through the four skeleton-first steps (title/menu, main loop, stubs, run-and-prove). Then define a **stub** concretely — show the one-liner and use the "a room that's booked, furniture coming later" metaphor. The lesson's without-stubs/with-stubs table is worth reading aloud.

Land the term-long rule:

> "From today, the rule is: ALWAYS keep a program that runs. Every week we fill ONE stub. If it breaks, we know exactly which piece we just touched."

#### Teaching Tips

- **Connect to their pain.** Most students have written a big program that exploded with errors. Name that feeling — skeleton-first is the cure.
- **Emphasise testability.** The reason to keep it running is so you can *test at every step*. That's the professional habit worth more than any single feature.

---

### Part 4: Build-Along — Study Buddy Skeleton (20 minutes)

The centrepiece. Everyone builds the SAME thing with you, stage by stage, so they own the pattern before adapting it. Get everyone into a new Trinket named **`Y2-T8-Capstone`** first — stress that this is THE file for the whole term.

Build the five stages live, thumbs-up after each:

1. **`show_title()`** — the banner in a function. Have them add a temporary `show_title()` call to test, then delete it.
2. **`show_menu()`** — five options, Quit last.
3. **The four stubs** — `log_session`, `view_stats`, `motivation_tip`, `quiz_me`. Point out how each function name mirrors its menu line.
4. **`main()`** — the while-loop with the `running` flag and `if/elif/else` routing. This is the hardest stage; go slowly.
5. **`main()` at the bottom** — flush left, no indent.

Then run it together: choose 1-4 (each prints "coming soon"), choose something silly (polite `else`), choose 5 (clean quit). Big celebration — it RUNS.

#### The Three Moments Students Trip On

- **Function order.** If `main()` is called before the functions are defined → `NameError`. Show the fix: definitions above, `main()` call at the very bottom.
- **`choice == "1"` vs `choice == 1`.** No quotes → every choice falls through to `else`, and the menu looks "broken" even though it runs. This is the #1 silent bug.
- **The forever loop.** No Quit branch (or forgetting `running = False`) → the menu never stops. Show them Trinket's **Stop** button as the escape hatch, then add the Quit branch.

#### Teaching Tips

- **Type it live, don't paste.** Students copy your pace. Narrate every line.
- **Checkpoint discipline.** Do not advance a stage until most thumbs are up. Stragglers get private-chat help while fast finishers eyeball the next stage.
- **Keep the indentation visible.** The `main()` loop is four levels deep in places (def → while → if → body). Zoom in your editor font if needed.

---

### Part 5: Students Build Their OWN Skeleton (15 minutes)

Now they diverge. Paste the starter template in chat. Each student rebuilds the skeleton for THEIR project:

1. Rename the title
2. One menu line per must-have (+ Quit)
3. One stub per feature (matching names)
4. Wire each number to its stub in `main()`
5. Run it

**Circulate actively.** This is where varied projects surface. Your support playbook:

| You see... | Do this |
|---|---|
| Too many must-haves (6+) | Help them pick the 3-4 core ones; park the rest as "if I have time" |
| A feature with no matching tool | Re-scope it to something the toolkit covers, or simplify it |
| Copied Study Buddy verbatim | Nudge: "Great pattern — now make the menu say YOUR features" |
| Stuck on `main()` routing | Point back to the Study Buddy `main()`; the structure is identical |
| Finished early | Challenge tier: add the `else` branch and a tidy divider between loops |

The goal is not a polished project — it's a *running skeleton*. Every option prints its placeholder, Quit stops it. That's success.

#### Teaching Tips

- **Same skeleton, different words.** Reassure the room: everyone's structure is identical; only the menu text and function names change. This calms students who feel their project is "different".
- **Save early, save often.** Remind them this file lives all term. A lost Trinket now is a lost capstone later.

---

### Part 6: Homework + Wrap-Up (12 minutes)

#### Homework (5 minutes)

Most of the work happens in class; homework is *finishing* the skeleton and hardening it. Walk through the requirements and tiers:

> "⭐ is a skeleton that runs and quits. ⭐⭐ adds the polite `else`. ⭐⭐⭐ makes it tidy on every loop. Any tier is a win — but it MUST run."

Repeat the two warnings: compare `choice` as a string; define functions above `main()`.

#### Wrap-Up (3 minutes)

> "You didn't build features today — you built a plan made of code, and it runs. Next week we furnish it: Build Sprint 1, the first real feature. Bring your skeleton!"

Stay on 2-3 minutes for questions and to help anyone whose skeleton doesn't yet run.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Built the Study Buddy skeleton and ran it (menu loops, stubs print, Quit stops)
- [ ] Matched at least one of their own features to the right tool
- [ ] Started their own skeleton with a correct `main()` loop
- [ ] Compared `choice` as a string (spotted or avoided the no-quotes bug)

**Engagement:**
- [ ] Had their Week 1 spec ready
- [ ] Participated in the match-a-tool discussion
- [ ] Used Zoom reactions at each build checkpoint

### Students to Watch

**Need Extra Support:**
- Skeleton still crashes at launch (usually function-order or a stray indent) — a 5-minute 1:1 this week
- Over-scoped spec they can't structure — help them trim before Week 3
- Shaky on functions (Term 3) — the whole term leans on `def`; flag for extra practice

**Ready for More Challenge:**
- Finished their skeleton with the `else` branch and dividers — point them at the nice-to-haves and suggest they stub those too

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| `NameError: name 'show_title' is not defined` | `main()` (or its call) is above the function definitions. Move all `def`s up; put `main()` on the last line. |
| Menu always jumps to `else` | `choice` compared to a number: `choice == 1`. Fix to `choice == "1"` with quotes. |
| Program never stops (forever loop) | No Quit branch, or `running = False` missing/misindented. Add it inside the Quit branch. Use Trinket **Stop** to escape meanwhile. |
| `IndentationError` in `main()` | Loop body four levels deep confuses students. Rebuild the branch slowly; 4 spaces per level. |
| Student's project "doesn't fit" the pattern | It does — menu + loop + stubs suits almost anything. Reframe their features as menu lines together. |
| Over-scoped spec (too many features) | Trim to 3-4 must-haves for the skeleton; park the rest as nice-to-haves for later sprints. |
| Lost/unsaved Trinket | Remind: Save after every stage. If lost, the skeleton is fast to rebuild from the solution. |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Skeleton status:** who has a running skeleton, who needs a fix before Week 3?
- **Scope check:** which projects are over- or under-scoped? Plan quiet re-scoping nudges.
- **Toolkit gaps:** did the match-a-tool discussion reveal a tool the class has forgotten? Budget a 5-minute refresher in a coming sprint.
- **Confidence:** anyone anxious their project is "too hard" or "too simple"? Note them for encouragement.

---

## 💭 Remember

**The win today is a program that RUNS, not one that DOES anything.**

Students trained all year to make code *work* may feel odd shipping empty stubs. Reframe it: the skeleton is the single most important structural decision of the whole capstone, and getting it running is a genuine achievement. If every student leaves with a `Y2-T8-Capstone` Trinket that loops its menu and quits cleanly, Build Sprint 1 becomes "just fill one blank" — and the road to graduation is smooth.

**You're framing the house they'll graduate from. Build it square!** 🏗️🎓

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
