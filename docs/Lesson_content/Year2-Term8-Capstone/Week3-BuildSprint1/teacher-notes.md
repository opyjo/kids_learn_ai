# Year 2, Lesson 3: Build Sprint 1 — The Core Feature 🏃‍♂️🔨

## Teacher's Guide

**Course:** Capstone & Portfolio (Year 2, Term 8)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 8 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

Weeks 1-2 were planning: students chose a project and built a **skeleton** (menu + main loop + empty stub functions). This is the first week they turn planning into a **working feature**. The whole lesson is a live build-along framed as a "sprint."

Two things make this lesson different from a normal build lesson:

1. **Every student is building a DIFFERENT project.** Study Buddy is only the worked example. You are not teaching one program — you are teaching a *pattern* (list + add-function + view-function + menu wiring) and coaching students to apply it to their own project. Your language must constantly translate: "In Study Buddy this is a session; in YOUR project it might be a task, a question, a recipe."
2. **A finished small thing beats an unfinished big thing.** The core message is anti-perfectionism. A student who logs and views one type of record has *succeeded*. Resist the urge to let strong students bolt on five features today.

The mid-lesson **stand-up** is the emotional centre. It normalises being stuck and feeds directly into next week's Debugging Clinic. Treat blockers as trophies, not failures.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what a build sprint is (build ONE must-have feature fully)
2. Create a list (of dictionaries) as a data store above their functions
3. Replace a stub function with a working "add" feature using `input()`, `float()`, and `try`/`except`
4. Write a "view" feature that loops through the data and prints it, handling the empty case
5. Wire both features to their existing menu and test the round-trip (add → view → quit)
6. Name their current blocker clearly in a stand-up

### Key Success Metrics

- [ ] Every student has `sessions = []` (or their own list) created and running with no error
- [ ] Most students have BOTH the add and view features of Study Buddy working
- [ ] Every student has posted a Built/Blocker line in the stand-up
- [ ] Most students have STARTED their own project's first feature by the end
- [ ] You leave with a list of blockers to open the Week 4 Debugging Clinic

### Materials Needed

- Computer with internet (teacher and each student)
- Zoom with screen share
- Each student's **`Y2-T8-Capstone`** Trinket (their Week 2 skeleton)
- This teaching guide open during class
- A shared doc or note where you jot each student's project type + blocker (feeds Week 4)
- Class WhatsApp/email for sharing links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Re-read your Week 2 notes** — you need each student's project type in front of you. If you don't have it, plan to collect it in the first 5 minutes.
3. **Have the Study Buddy solution open** in your own Trinket, ready to build live from the skeleton
4. **Rehearse the build** once yourself so the live typing is smooth (see the staged code in the lesson's `class_activities`)
5. **Prepare the "translation table"** — the Part 7 grid mapping Study Buddy steps to other project types; you'll lean on it hard
6. **Set up your blocker-capture doc** — one row per student for the stand-up

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap the skeleton + what a sprint is
⏱️  8-18 min  → Part 2: the data store (list of dicts) — build together
⏱️ 18-33 min  → Part 3: build Log study session live
⏱️ 33-43 min  → Part 4: build View sessions live
⏱️ 43-50 min  → STAND-UP (Built/Blocker in chat)
⏱️ 50-68 min  → Part 7: students build their OWN first feature (you circulate)
⏱️ 68-75 min  → Homework + Week 4 teaser + wrap-up
```

**Flexible timing:** The Study Buddy build (Parts 2-4) is the teaching engine — protect it. If it runs long, shorten the students' own-feature time and make finishing it the homework. Do NOT skip the stand-up.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap the Skeleton + What a Sprint Is (8 minutes)

Open with energy. Screen-share the Week 2 skeleton and point at the stubs:

> "See these? `log_session`, `view_sessions` — real functions, but empty. Two weeks ago that was smart: it let the whole menu run before any feature existed. Today we fill the FIRST one in."

Then define the sprint clearly and repeat it — it's the theme of the lesson:

> "A sprint means: pick ONE must-have feature and build it until it truly works. Not five half-features. One finished feature. A program with one thing that works beats a program with ten things that half-work — every time."

#### Teaching Tips

- **Say each student's project back to them** if you can ("Amara, your recipe box — Chidi, the quiz game"). It signals that today is about THEIR project, not just the demo.
- **Pre-empt the perfectionist.** Some will want to build everything today. Head it off now: "By the end of today I want ONE feature working, not ten started."

---

### Part 2: The Data Store — List of Dictionaries (10 minutes)

This is the conceptual heart. Build it slowly. On screen, show the difference between a bare value and a labelled record:

> "A session isn't just one thing — it's a subject AND hours. When one item has several labelled parts, that's a dictionary: `{"subject": "Maths", "hours": 2.0}`. And because we'll have MANY sessions, we keep them in a list. A list of dictionaries."

Type `sessions = []` at the very top, above the functions, and explain **why the top**:

> "It lives above every function so all of them can reach it — Log adds to it, View reads from it. It's the shared memory of the whole app."

**Translate immediately** for other projects:

> "In a to-do app this is `tasks = []`. In a quiz it's `questions = []`. Same idea — a list that starts empty and fills up."

✅ Checkpoint: everyone adds their own empty list and runs with no error.

#### Teaching Tips

- Students who did Term 4 (Data Structures) will recognise list-of-dicts; for the rest, keep it concrete — a list of little labelled cards.
- Don't over-teach dictionary theory here. They only need: make one with `{}`, read a part with `dict['key']`.

---

### Part 3: Build "Log Study Session" Live (15 minutes)

Type it live, narrating each line (mirror the lesson's line-by-line breakdown). The four beats: **ask subject → ask hours with `float()` → `append` a dict → confirm**, all inside `try`/`except`.

Hammer two points:

1. **`float()` is not optional.** "We convert hours to a real number so a later sprint can add them up. Store it as text now and the stats feature breaks later." Show `"2" + "3"` → `23` if the class needs convincing.
2. **`try`/`except` is the safety net from Term 1.** Deliberately type "banana" for hours live and let the class watch it NOT crash: "That's the net catching a bad number."

**Example run to reproduce on screen:**
```
What subject did you study? Maths
How many hours? 2
✅ Logged 2.0 hours of Maths!
```

Point out `2` became `2.0` — proof `float()` worked.

✅ Checkpoint: pick 1, log a session, see ✅. Then log a bad "hours" and see the calm warning.

#### Teaching Tips

- **Common live-typing bug:** appending before `sessions = []` exists → `NameError`. If a student hits it, celebrate it — it's literally Common Mistake 1. Fix it together.
- **`.append()` adds ONE item.** Some students try to append subject and hours separately; steer them to appending a single dictionary.

---

### Part 4: Build "View Sessions" Live (10 minutes)

Build the loop live. Three beats: **check empty → loop → print each record's parts**.

Emphasise the empty-list check first:

> "Always handle the boring case: what if there's nothing yet? We say so kindly instead of printing nothing and looking broken."

Then the loop and the dictionary access, and flag the **quote trap** explicitly:

> "Inside a double-quoted f-string, use SINGLE quotes for the key: `{session['subject']}`. Double quotes inside double quotes ends the string early — instant SyntaxError."

**Example run (after two logs):**
```
📚 Your study sessions so far:
  - Maths: 2.0 hours
  - English: 1.5 hours
```

✅ Checkpoint: log two, view both; also view BEFORE logging to see the empty message.

#### Teaching Tips

- **Test the round-trip together:** add → add → view → quit. This is the single most valuable thing they can verify today.
- If a student's view prints one long messy line, check they indented the `print` inside the `for` loop.

---

### Part 5: THE STAND-UP (7 minutes)

Stop the building. This is a deliberate ritual, not a break.

> "Real dev teams do a stand-up every day — everyone says what they built and what's blocking them. Two lines in the chat, everyone: Built, and Blocker."

Read them aloud as they arrive. For each blocker, do ONE of:
- Fix it in 20 seconds if it's quick and common (share the fix with everyone)
- Say "great one for the Debugging Clinic next week" and **log it in your doc**

**Frame blockers as trophies:**

> "A blocker isn't a failure — naming it is how it gets solved. If you wrote 'nothing, flying' — brilliant. If you wrote a blocker — even better, that's next week sorted."

#### Teaching Tips

- **Everyone posts, no exceptions.** Silent students often have the biggest blockers. If someone posts nothing, gently prompt them by name in private chat.
- **This is your Week 4 lesson plan writing itself.** The blockers you capture ARE the Debugging Clinic agenda.

---

### Part 6/7: Students Build Their OWN First Feature (18 minutes)

Now they leave Study Buddy behind and apply the pattern to their own project. Point them at the translation grid in the lesson:

> "Same recipe, your project: a list to store data, a function to ADD, a function to VIEW, wire both to your menu."

Circulate via screen shares and private chats. Your job is coaching, not coding for them:

- Ask "what's the ONE most important thing your app stores?" — that's their list.
- If a student is stuck choosing, give them the closest idea from the lesson's project list.
- Keep pulling ambitious students BACK to finishing one feature.

#### Teaching Tips

- **Expect wide variation.** Some finish both add and view; some get add working only; some are still shaping their list. All are fine — the homework catches the rest.
- **Don't let strong students sprawl.** "One feature FINISHED is today's win. Feature two is literally next week."
- **New/behind students:** it is completely acceptable for them to keep building Study Buddy as their capstone if they never settled on a project. A working Study Buddy is a legitimate portfolio piece.

---

### Part 8: Homework + Wrap-Up (7 minutes)

#### Homework

Walk through the requirements: a list, an add feature (with `try`/`except` if it takes a number), a view feature with a loop, tested round-trip. Point at the tiers:

> "⭐ is add-and-view working. ⭐⭐ adds input validation. ⭐⭐⭐ shows a little summary — a count or a total. Any tier is done."

Stress the blocker line:

> "If you get stuck, DON'T grind for an hour. Write the blocker down and bring it to next week's Debugging Clinic. That's what it's for."

#### Wrap-Up

> "Today you stopped planning and started building. An empty stub became a working feature that stores real data and shows it back. That's a real sprint. Next week: feature two, and we squash your blockers together."

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Created the data store list above the functions (no `NameError`)
- [ ] Built a working add feature with `float()` + `try`/`except`
- [ ] Built a working view feature with a loop and empty-case check
- [ ] Wired both to the menu and tested add → view → quit
- [ ] Applied the pattern to their OWN project (started or finished)

**Engagement / Process:**
- [ ] Posted a Built/Blocker line in the stand-up
- [ ] Used Zoom reactions at checkpoints
- [ ] Asked for help rather than grinding silently

### Students to Watch

**Need Extra Support:**
- Still has an empty or crashing skeleton — pair-program the data store + add feature in a 1:1 before Week 4
- Hasn't chosen a project — offer Study Buddy as a ready-made capstone; remove the choice paralysis

**Ready for More Challenge:**
- Finished both features early — point at the ⭐⭐⭐ tier (a summary/count/total) but hold them to finishing, not sprawling
- Suggest they help a neighbour via screen share — explaining cements it

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| `NameError: name 'sessions' is not defined` | The list wasn't created, or was defined below the function. Move `sessions = []` to the top. This is Common Mistake 1 — teach it to the class. |
| Menu option does nothing | Almost always `if choice == 1:` (number) vs `choice == "1"` (text). `input()` returns text — compare to `"1"`. |
| `float()` crashes on empty/blank | They're outside the `try`. Ensure the `float(input(...))` line sits inside `try:`. |
| `SyntaxError` in the view print | Double quotes inside a double-quoted f-string for the dict key. Use `{session['subject']}` with single quotes. |
| Hours "add up wrong" later | Stored as text (no `float()`). Recap `"2" + "3"` → `23`. Convert with `float()`. |
| Student building a wildly different project | Great — coach the PATTERN (list, add, view), not the specifics. The recipe is universal. |
| Student wants to build everything today | Redirect: "One feature FINISHED beats ten started. Feature two is next week." |
| Trinket/Zoom technical issues | Standard playbook: repl.it backup, browser-only screen share, private-chat triage. |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Blocker list:** every stand-up blocker — this IS your Week 4 Debugging Clinic agenda
- **Feature progress:** who has both features working, who has one, who has none (calibrates how much clinic time vs build time Week 4 needs)
- **Project register:** confirm every student's project type is recorded, and who has defaulted to Study Buddy
- **Pattern gaps:** did the list-of-dicts idea land? If several struggled, budget a quick recap at the top of Week 4

---

## 💭 Remember

**Today's win is momentum, not completeness.**

One feature that genuinely works — data goes in, data comes back out — is a real, demonstrable milestone for every student, regardless of project. Protect the live build, run the stand-up with warmth, and make sure every student leaves with something that runs. Perfection is not the goal this week; a living first feature is.

**They're building for real now — enjoy it!** 🏃‍♂️🔨

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
