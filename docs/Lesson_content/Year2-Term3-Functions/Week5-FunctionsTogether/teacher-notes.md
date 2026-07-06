# Year 2, Lesson 5: Functions Working Together 🤝🔗

## Teacher's Guide

**Course:** Functions (Year 2, Term 3)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

Weeks 1-4 taught functions in isolation: define, call, parameters, return, scope. This week is the **turning point** where students stop writing single functions and start **composing** them into a program with a shape — a `main()` captain that calls other functions, and a menu that routes to a different function per choice.

This matters enormously because it is the direct bridge to the term project. The Text Adventure Engine (Week 7) is, at its core, exactly what students build today: a loop, a menu, and a dispatch of scene functions. If a student leaves today understanding "the menu picks which function runs", they are ready to design (Week 6) and build (Week 7).

Three core goals:

1. **Make functions collaborate** — one function calling another should feel natural, not magical, by the end
2. **Cement the ordering rule** — define all functions first, call `main()` last; this single habit prevents most `NameError` crashes
3. **Reveal the router pattern** — explicitly name it as the skeleton of next week's adventure so students see the payoff

### Learning Objectives

By the end of this lesson, students will be able to:

1. Write a function that calls one or more other functions (including a `main()` that orchestrates several)
2. Define a function with a default parameter value and predict the output of calling it with and without an argument
3. Compose functions by passing one function's return value directly into another
4. Build a menu that uses `if/elif/else` to route to a different function per user choice
5. State and apply the ordering rule: define all functions before calling `main()`

### Key Success Metrics

- [ ] Every student writes a `main()` that calls at least two other functions
- [ ] Every student runs a menu that routes to different functions (Stage 3 or homework)
- [ ] Students can explain why `main()` goes on the last line
- [ ] Students connect today's router to next week's adventure without being told twice

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and reactions enabled
- Students' Trinket accounts; today's Trinket name is `Y2-T3-W5-FunctionsTogether`
- This teaching guide open during class
- The lesson's starter and solution code ready to screen-share
- Class WhatsApp/email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Run the solution code yourself** in Trinket so you can live-demo the menu routing confidently
3. **Prepare the "captain" metaphor** — `main()` is the team captain who calls players; students respond well to this framing
4. **Pre-write the three common-mistake snippets** so you can trigger each real error live (the `NameError`, the `SyntaxError`, and the missing-brackets no-op)
5. **Have next week's hook ready** — Week 6 is the fun DESIGN week; build anticipation
6. **Note your Week 3-4 retention map** — students shaky on `return` will need support in Part 4 (composing)

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap toolkit + BrightByte hook
⏱️  8-20 min  → Part 2: functions calling functions (main the captain)
⏱️ 20-30 min  → Part 3: default parameter values
⏱️ 30-40 min  → Part 4: composing functions (passing returns along)
⏱️ 40-52 min  → Part 5: the menu router (LIVE demo)
⏱️ 52-68 min  → Team of Functions class activity (3 stages)
⏱️ 68-75 min  → Common mistakes + homework + Week 6 teaser
```

**Flexible timing:** Parts 2 and 5 are the priorities. If time gets tight, shorten Part 3 (defaults are quick to grasp) and Part 4, but never cut the live menu-router demo or the class activity — they are the term-project bridge.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + Hook (8 minutes)

Quickly walk the four-week toolkit table (define/call, parameters, return, scope). Don't re-teach — just reactivate. Ask the class to shout (in chat) one thing each week taught.

Then land the BrightByte hook:

> "Every function you've written so far works ALONE. Today they become a TEAM. And teams need a captain."

Introduce the **captain metaphor** early — you'll lean on it all lesson. `main()` is the captain who doesn't do the work but calls the players who do.

#### Teaching Tips

- Keep this under 8 minutes. The cohort remembers Weeks 1-4; this is momentum, not revision.
- If students are shaky on `return` (check your Week 3 notes), flag that Part 4 will refresh it.

---

### Part 2: Functions Calling Functions (12 minutes)

Screen-share the `show_menu` / `get_choice` / `main` example. Run it live. Then ask, before revealing, which function actually asks the question — this is the Zoom checkpoint and it tests whether they see `main()` as a *caller*, not a *doer*.

**Hammer the ordering rule here, once, clearly:**

> "Define ALL your functions first. Call `main()` on the very last line. When Python reaches that last line, everything main needs already exists."

Draw it on screen if you can: functions stacked up top, one `main()` call at the bottom like a starter pistol.

#### Common misconception to pre-empt

Students think code runs top-to-bottom and therefore a function must be defined *above* the line that calls it. Clarify: what matters is that the function exists **at the moment of the call**, and since `main()` is called last, all definitions are already in place. This is subtle — say it twice, in different words.

---

### Part 3: Default Parameter Values (10 minutes)

Show `greet(name="friend")`. Call it three ways live. The "aha" moment is `greet()` with empty brackets still working — pause on it.

Use the table from the lesson. Then connect to the project:

> "Next week your rooms might have a default description so the game never shows a blank screen. Defaults are your safety net."

#### Teaching Tips

- Let students predict each output BEFORE you run it — cheap, high-engagement.
- Don't go deep on multiple defaults yet; one defaulted parameter is plenty this week. The ordering rule (defaults last) is covered in Common Mistakes.

---

### Part 4: Composing Functions (10 minutes)

This is the conceptually hardest part. Use `announce(make_loud("we did it"))` and slow right down.

Trace it out loud, inside-out:

> "Python runs the INSIDE first: `make_loud('we did it')` gives back `WE DID IT!!!`. THEN it runs `announce('WE DID IT!!!')`. Inside-out, like unwrapping a parcel."

The relay-baton metaphor from the lesson lands well — one function hands its result to the next.

#### Watch for

- Students who write `print(make_loud("hi"))` and think that's the same as composing. Clarify the difference between a function that `return`s (its value can travel) and one that `print`s (its value vanishes). This distinction is worth 2 extra minutes if the class looks unsure.

---

### Part 5: The Menu Router — Live Demo (12 minutes)

The centrepiece. Screen-share and **build the arcade menu live**, or run the ready version and narrate every line. Emphasise the routing:

> "The `if/elif/else` reads the choice and JUMPS to the matching function. Option 1 runs `play_game`. Option 2 runs `show_scores`. The menu is a switchboard."

Then the payoff line — say it explicitly:

> "Swap `play_game` for `enter_forest` and `show_scores` for `enter_castle`, and this IS a Text Adventure. You're building next week's engine right now."

Run it twice on screen: once picking option 1, once quitting with 3. Show the invalid-input branch (`else`) too — type "9" and let it politely reprompt.

#### Teaching Tips

- Point out `running = True` / `running = False` as the loop's on/off switch — a clean pattern they'll reuse all term.
- Reassure that `input()` returns text, so we compare to `"1"` (string) not `1` (number). This trips students who compare to integers.

---

### Part 6: Team of Functions Activity (16 minutes)

Students build in three stages. Circulate via shared screens and chat.

- **Stage 1 (⭐):** three one-job functions. Fast; use it to confirm everyone can still define and call.
- **Stage 2 (⭐⭐):** `main()` calls all three in order. The ordering rule gets tested for real here — expect a few `NameError`s from students who call `main()` too early. Turn the first one into a teaching moment.
- **Stage 3 (⭐⭐⭐):** the router. This is the homework rehearsal. Not everyone will finish in class — that's fine; the homework completes it.

**Zoom checkpoints** keep energy up: shortest function after Stage 1, thumbs-up after Stage 2, best option number after Stage 3.

#### Differentiation

- **Struggling:** pair them and have them finish Stage 2 only; Stage 3 becomes their homework goal.
- **Racing ahead:** challenge them to make `main()` call a function that itself calls two more (the ⭐⭐⭐ homework tier) during class.

---

### Part 7: Common Mistakes + Homework + Teaser (7 minutes)

Live-trigger all three real errors so students see the messages:

1. **`NameError`** — calling `main()` before defining it. Reinforces the ordering rule one final time.
2. **`SyntaxError: non-default argument follows default argument`** — defaults must come last. Show it, fix it.
3. **Missing brackets** — `cheer` vs `cheer()` — the silent no-op. This one confuses students because there's no error, just nothing happens.

Then the homework (Mini App — menu routing to 3+ functions) and the Week 6 teaser:

> "Next week is the FUN week — you DESIGN your own adventure. Rooms, choices, story. Start dreaming it up tonight."

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Wrote a `main()` that calls other functions (Stage 2)
- [ ] Used a default parameter value correctly (Part 3 / homework)
- [ ] Built a menu that routes to different functions (Stage 3)
- [ ] Applied the define-first / call-`main()`-last rule without prompting

**Engagement:**
- [ ] Answered the "which function asks?" checkpoint
- [ ] Predicted outputs before runs
- [ ] Used Zoom reactions during activity stages

### Students to Watch

**Need Extra Support:**
- Repeated `NameError`s → the ordering rule hasn't landed; do a 1:1 with the "starter pistol" visual
- Confused composing (`return` vs `print`) → revisit Week 3 return values briefly before Week 6

**Ready for More Challenge:**
- Finished Stage 3 early → point them at the ⭐⭐⭐ homework tier (a function calling two more) and suggest they sketch adventure scene functions early

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| `NameError: name 'main' is not defined` | The call is above the definition — move `main()` to the last line; reteach the ordering rule with the stacked-functions visual |
| `SyntaxError: non-default argument follows default argument` | A required parameter comes after a defaulted one — put required params first |
| Function "does nothing" | Missing `()` — they wrote `cheer` instead of `cheer()`; brackets = run it |
| Menu never matches | They compared `choice` to `1` (int) instead of `"1"` (string); `input()` returns text |
| Infinite menu loop | `running` never set to `False`; check the quit branch |
| Class finished everything early | Have them add a 4th and 5th menu option, or a function that calls two others |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Router readiness:** how many students got a working menu that routes? (This predicts Week 7 build success.)
- **Ordering rule:** did `NameError`s keep appearing, or did the rule stick? Reteach next week if shaky.
- **Composing comprehension:** was `return`-into-function clear, or does Week 6 need a warm-up refresher?
- **Adventure excitement:** did the Week 6 teaser land? Note any project ideas students shouted out — great callbacks.

---

## 💭 Remember

**Today is the bridge to the whole term project.**

Every earlier week taught a piece; today those pieces click together into the shape of a real program — a captain, a team, a menu that routes. If a student leaves able to say "the menu decides which function runs", they are ready to design their adventure next week and build it the week after.

**You're assembling captains today. 🤝**

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
