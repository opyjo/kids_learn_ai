# Year 2, Lesson 3: break, continue & Loop Control 🛑⏭️

## Teacher's Guide

**Course:** Loops & Logic Mastery (Year 2, Term 2)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

Weeks 1 and 2 gave students loops that run start-to-finish — `for` over a range, and `while` with a condition or play-again flag. This week hands them the steering wheel. `break` and `continue` transform loops from "run the whole thing" into "run exactly as long as I say", which is the foundation of every interactive program in the arcade term.

Three core goals:

1. **Make the break/continue distinction rock-solid** — this is the single most-confused pair in the whole term. Students must be able to say, in their own words, that `break` leaves the loop and `continue` skips one turn.
2. **Introduce `while True:` + `break` without fear** — students have been (correctly) warned about infinite loops, so `while True:` feels dangerous. Reframe it: `while True:` is safe *precisely because* it has a guaranteed `break`. This is the arcade-menu engine (Week 7).
3. **Demystify infinite loops** — show one deliberately, stop it with the Trinket Stop button, and give students the "what makes this stop?" habit so they never fear the freeze.

Keep energy high and hands-on. The Number Bouncer activity is the heart of the lesson — get them there with time to spare.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Use `break` to exit a loop immediately when a condition is met
2. Use `continue` to skip the rest of the current iteration and proceed to the next
3. Explain the difference between `break` and `continue` in their own words
4. Search a list with a `for` loop + `if` + `break`, stopping early on a match
5. Write a `while True:` loop with a sentinel-value `break` (e.g. `quit`, `-1`)
6. Identify what causes an infinite loop, stop one with Trinket's Stop button, and fix it

### Key Success Metrics

- [ ] Every student runs a working `break` example and a working `continue` example
- [ ] Most students complete Part 1 of the Number Bouncer with correct output
- [ ] Every student can locate and use the Trinket Stop button
- [ ] Students correctly answer the "continue for negatives, break for 999" discussion

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share and reactions enabled
- Students' Trinket accounts; today's Trinket name: `Y2-T2-W3-LoopControl`
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, and confirm you can trigger AND stop an infinite loop live (you WILL demo this).
2. **Rehearse the infinite-loop demo** — run the "forgotten `count` update" example, let it spam a few lines, then hit **Stop**. Practise so it looks calm and controlled, not scary.
3. **Have the Number Bouncer solution open** in a separate tab for live-coding if the class stalls.
4. **Prepare the break/continue analogy** — cinema emergency exit (break) vs skip-the-song button (continue). Have a one-line version ready to paste in chat.
5. **Line up the arcade tie-in** — remind yourself to connect `while True:` + break to the Week 7 arcade menu; it's a strong motivator.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap loops (W1/W2) + "what if we want to STOP early?" hook
⏱️  8-20 min  → break and continue (Parts 1-3, live-coded)
⏱️ 20-32 min  → Searching a list + while True/sentinel pattern (Parts 4-5)
⏱️ 32-42 min  → Infinite loops + the Stop button demo (Part 6)
⏱️ 42-58 min  → Number Bouncer class activity
⏱️ 58-70 min  → Common mistakes + homework + Week 4 teaser
⏱️ 70-75 min  → AI discussion + wrap-up
```

**Flexible timing:** The break/continue distinction (Parts 1-3) and the Number Bouncer are non-negotiable. If time is tight, trim the second sentinel example (the `-1` total) — the `quit` version alone carries the concept.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + Hook (8 minutes)

Open by celebrating where they are:

> "Two weeks of loops! Your `for` loops count perfectly, your `while` loops run until a condition flips. But here's a problem — what if I want to stop a loop EARLY? Like a game that ends the second you lose? Watch this."

Screen-share the `break` example (Part 1). Run it. Let them see numbers stop at 5.

> "It was READY to count to 10. So why did it stop at 5?"

Take chat answers, then name it: "That word `break` is a loop's emergency exit." You've hooked them.

### Part 2: break and continue (Parts 1-3, ~12 minutes)

Live-code both examples. The teaching goal is the **contrast**, so run them back to back:

1. `break` example → numbers stop entirely at 5
2. `continue` example → 3 is *skipped* but 4 and 5 still print

Then put the comparison table on screen and use the analogies out loud:

> "break = emergency exit, you're OUT. continue = skip button, the loop keeps playing."

Run the **Part 3 class discussion** (exam scores: `continue` for negatives, `break` for 999). This is your check-for-understanding — if the chat gets it right, you can move fast. If it's split, do one more tiny example before continuing.

#### Teaching Tips

- **The classic confusion:** students use `break` when they mean `continue` and skip too much. If you see a Number Bouncer that stops at the first negative, that's the tell — they used `break` instead of `continue`.
- **Indentation matters here.** `break`/`continue` almost always sit inside an `if` inside the loop. Watch shared screens for `break` un-indented out of the `if`.

### Part 3: Search + while True / Sentinels (Parts 4-5, ~12 minutes)

Run the list-search example (finding "Zara"). Emphasise that Tunde and Ngozi are **never checked** — searching stops on success. This plants the seed for today's AI discussion.

Then the big one: `while True:` + `break`. Expect a gasp — "isn't that an infinite loop?!" Lean into it:

> "YES — and that's exactly why it's powerful. `while True` means loop forever. The `break` is the escape hatch. As long as the user can reach a `break`, it's completely safe."

Live-code the "type quit" example. Then, if time allows, the `-1` sentinel total. Land the arcade tie-in:

> "Remember this loop. In Week 7, your whole arcade menu is a `while True:` with a 'type 5 to quit' break. You're building the engine right now."

### Part 4: Infinite Loops + Stop Button (Part 6, ~10 minutes)

This is the demo they'll remember. Screen-share and run the **broken** counting loop (no `count = count + 1`). Let it spam 5-6 lines of `Counting: 1`, stay calm, then:

> "See how it never stops? This is an infinite loop. Every coder makes one. Here's the magic button —"

Click the Trinket **Stop** button live. Make sure every student knows where it is — have them find it in their own Trinket now.

Then add the missing `count = count + 1` line and re-run to show the fix. Teach the golden question:

> "Before you run any loop, ask: what makes this STOP? If you can't answer — don't run it yet."

Walk through the "how each loop type ends" table quickly.

#### Teaching Tips

- **Normalise it.** The demo's real purpose is emotional: infinite loops are ordinary and fixable, not disasters. A student who isn't scared of the freeze will experiment more freely.
- **Trinket specifics:** the Run button (▶) turns into a Stop button (⏹️) while code runs. Point at it explicitly on your shared screen.

### Part 5: Number Bouncer Activity (~16 minutes)

The centrepiece. Post the list and the four rules in chat. Give them Part 1 first (bounce/skip/stop), then Part 2 (type-quit loop) for anyone who finishes.

- Circulate via shared screens and the chat.
- **Watch for:** the "stops at first negative" bug (break vs continue mix-up) and forgetting `break` on the `0` case (so `9` prints).
- When ~half finish Part 1, show the expected output and have them self-check; then push fast finishers to Part 2 and the Bonus Bounce.
- Invite one student to share their screen and talk through their `break`/`continue` choices — peer explanation cements it.

#### Tiering
- **Struggling:** give them the loop skeleton with just the `if n == 0:` branch filled in; they add the negative and positive branches.
- **On track:** full Part 1 independently.
- **Ahead:** Part 2 (`while True:` quit loop) and Bonus Bounce (a custom `continue` rule).

### Part 6: Mistakes, Homework, Teaser (~12 minutes)

Run the three common mistakes live — especially **Mistake 2** (`break` outside a loop). Actually type `break` on its own line and run it so they see the real error text:

```
SyntaxError: 'break' outside loop
```

> "These two words ONLY live inside loops. If Python says this, check your indentation."

Then homework: explain Option A (Bouncer Loop) and Option B (Menu Until Quit), point at the tiers, paste submission steps. Tease Week 4 with the star-rectangle nested-loop snippet — "loops INSIDE loops draw shapes and game boards".

### Part 7: AI Discussion + Wrap-Up (~5 minutes)

Run the short `ai_activities` prompt: why is stopping early good? Connect it back to the list-search `break`. Then close with the BrightByte "Loop Boss" line and stay on for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Ran a `break` example and correctly predicted where it stops
- [ ] Ran a `continue` example and explained why a value was skipped
- [ ] Completed Number Bouncer Part 1 with matching output
- [ ] Wrote a `while True:` + `break` loop (Part 2) that actually stops
- [ ] Located and used the Trinket Stop button

**Understanding:**
- [ ] Answered the exam-scores discussion correctly (continue vs break)
- [ ] Can state the break/continue difference unprompted

### Students to Watch

**Need Extra Support:**
- Uses `break` where `continue` is needed (loop stops too early) — re-run the skip-the-song analogy 1:1
- Left an infinite loop and panicked — reassure; make sure they can find the Stop button

**Ready for More Challenge:**
- Finished both activity parts + bonus — point them at the ⭐⭐⭐ homework tier (count turns before quitting) and hint at nested `if`s inside the menu loop

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student's loop runs forever / Trinket freezes | Show the Stop (⏹️) button; then ask "what makes this stop?" and find the missing update or break together |
| `break`/`continue` mixed up (stops when it should skip) | Analogy reset: break = leave the cinema, continue = skip a song. Trace one iteration aloud together |
| `SyntaxError: 'break' outside loop` | Their `break` isn't indented inside a loop — check indentation |
| `while True:` never stops for a student | Their `break` line is missing or unreachable; have them write the `break` FIRST, then the rest |
| Number Bouncer prints the `9` | They forgot `break` on the `0` case — it's skipping (continue) instead of stopping |
| Class finds it too easy | Add a rule: also `continue` on numbers > 100, and `break` on the first number that ends in a chosen digit |
| Zoom/Trinket technical issues | Standard playbook: repl.it backup link, browser-only screen share, private-chat triage |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **The big distinction:** did the class hold the break vs continue difference by the end? If shaky, plan a 2-minute recap at the start of Week 4 — nested loops rely on it.
- **while True comfort:** are students comfortable with `while True:` + break, or still nervous? They need it fluent by Week 7.
- **Infinite-loop confidence:** did the Stop-button demo land? Anyone still anxious about freezing?
- **Activity completion:** who reached Part 2? Who's ready for the harder homework tier?

---

## 💭 Remember

**Two tiny words, total loop control.**

`break` and `continue` are small, but they unlock every interactive loop students will write for the rest of the year — menus, games, searches, input validation. The single most valuable thing they can leave with today is the ability to *say the difference out loud* and to *not fear an infinite loop*. Get those two, and the arcade term is theirs.

**You've got this — go make some Loop Bosses!** 🛑⏭️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
