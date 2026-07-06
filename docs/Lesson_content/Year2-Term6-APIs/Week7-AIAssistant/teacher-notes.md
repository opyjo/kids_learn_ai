# Year 2, Lesson 7: Project — AI-Powered Assistant 🤖⭐

## Teacher's Guide

**Course:** Working with APIs (Year 2, Term 6)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 7 of 8

---

## 📋 Lesson Overview

### Purpose

This is the term-project build week. Students take the working assistant they built in Week 6 — three mock services (`get_weather`, `get_joke`, `get_fact`), an intent detector, and a chat loop — and personalise it into a polished, showcase-ready AI-powered assistant. This lesson has three core goals:

1. **Ship a finished project** — by the end, every student has a personalised assistant they'll demo (and be badged for) in Week 8
2. **Turn "working" into "delightful"** — memory (a `user` dict) and personality (a named bot with a warm voice) are the difference between a robotic script and something that feels alive
3. **Cement the "never crash" mindset** — status-checking on every service call, graceful handling of the unknown, and a clean quit are what make it real software

This is a **live build-along**, not a lecture. You code on shared screen; students follow stage by stage in their own copy. Keep everyone synchronised with thumbs-up checkpoints after each of the three upgrade stages.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Create a `user` dictionary at the start of the chat loop and store preferences in it **before** they are read
2. Give an assistant a personality: a `BOT_NAME` constant and a consistent, warm voice that greets the user by name
3. Add a new mock service + intent + handler using the repeatable three-step pattern
4. Check `status` on every service response before touching `data`
5. Use a remembered preference (favourite city) as a smart default for a service call
6. Explain why the loop must flip `running = False` to quit cleanly

### Key Success Metrics

- [ ] Every student's assistant asks for and remembers a name (Stage 1)
- [ ] Every student's assistant has its own name and greets the user by name (Stage 2)
- [ ] Most students add at least one new service + intent (Stage 3)
- [ ] Every student's assistant survives nonsense input and quits cleanly on "bye"
- [ ] Students leave with a demo-ready program saved as `Y2-T6-W7-Assistant`

### Materials Needed

- Computer with internet, Zoom with screen share
- Students' saved `Y2-T6-W6-Assistant` Trinket from last week (CRITICAL — remind them in advance)
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Send an advance reminder** (day before if possible): "Bring your Week 6 assistant Trinket — we personalise it live!" Have a spare copy of the Week 6 solution ready to paste in chat for anyone who lost theirs.
2. **Test Zoom and Trinket** — confirm code runs, screen share works.
3. **Pre-build the full assistant yourself** and run every path (default-city weather, named-city weather, unknown-city error, joke, fact, advice, compliment, nonsense, bye) so the demos are smooth. The full conversation trace in the lesson is your script.
4. **Rehearse the "set first, read later" line** — it's the anchor for the memory concept and pre-empts the term's most common `KeyError`.
5. **Prepare the "Save a copy" instruction** — students copy W6 into a new `Y2-T6-W7-Assistant` trinket so the original is preserved.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + "what's flat about our assistant?" (the 4 upgrades)
⏱️  8-15 min  → Save-a-copy setup + the upgrade plan
⏱️ 15-30 min  → Stage 1: memory (the user dictionary)
⏱️ 30-42 min  → Stage 2: personality (BOT_NAME + warm voice + remembered default)
⏱️ 42-55 min  → Stage 3: a new service + intent (advice / compliment)
⏱️ 55-65 min  → Full run-through (trace a whole conversation) + common mistakes
⏱️ 65-75 min  → Homework (make it showcase-ready) + Week 8 badge teaser + wrap-up
```

**Flexible timing:** Stage 1 (memory) is the conceptual heart — protect its 15 minutes. If time is tight, the second new service (compliment) in Stage 3 is the most cuttable; advice alone satisfies the "new service + intent" objective.

---

## 📚 Detailed Teaching Guide

### Part 1: What's Flat About Our Assistant? (8 minutes)

Open by demoing the Week 6 assistant live. Let it work — then point out what's *missing*.

> "Last week you built a real assistant — it fetches weather, tells jokes, shares facts. I'm proud of it. But watch: it doesn't know my name. It calls itself 'Bot'. Every reply is flat. And it forgets me the second I close it. Today we give it a MEMORY, a PERSONALITY, new powers, and armour. By the end it won't be an assistant — it'll be YOUR assistant."

Use the upgrade table from the lesson (memory / personality / more services / robustness) to give the "why" before the "how".

#### Teaching Tips

- **Frame the stakes for Week 8:** "Next week you demo this and earn the API Master Badge. Today we make it badge-worthy." 11-13s respond to a real finish line.
- **Reassure:** every upgrade builds on code they already wrote. Nothing here is a brand-new concept — it's dictionaries, functions, f-strings and a while loop, which they've all done.

---

### Part 2: Save-a-Copy + The Upgrade Plan (7 minutes)

**First, protect their Week 6 work:**

> "Open your Y2-T6-W6-Assistant. Now File → Save a copy, and name it Y2-T6-W7-Assistant. We upgrade the COPY — your original stays safe. Anyone who lost last week's file, shout in the chat — I'll paste it."

Then walk the four-row upgrade table. Keep it quick; it's a map, not a lesson.

#### Teaching Tips

- **Name the pattern for adding a service** now: "write the service → add the intent → handle it. Three steps, every time." You'll reuse this phrase in Stage 3.

---

### Part 3: Stage 1 — Memory: the `user` Dictionary (15 minutes)

This is the conceptual core. The big idea: a single dictionary holds everything the assistant remembers, and it is **filled before the loop reads from it.**

> "We give the assistant a memory. At the very START of run_assistant — before the loop — we ask the name and favourite city, and store BOTH in one dictionary called `user`. Now it remembers you for the whole chat."

Demonstrate on screen: add the two `input()` calls and the `user = {...}` line above the `while` loop, then greet with `user['name']`.

**The #1 stumbling block is the `KeyError`.** Deliberately trigger it: read `user["favourite_city"]` when you only stored `name`. Show the red `KeyError`, then fix it.

> "A `KeyError` almost always means 'you asked the dictionary for something you never put in it'. The golden rule of memory: **set it first, read it later.**"

#### Teaching Tips

- **Why a dict, not two variables?** "It keeps everything the assistant knows in one tidy place — and it's easy to add more later, like a favourite emoji." This previews good data-modelling habits.
- **Watch the quote nesting** in f-strings: `f"{user['name']}"` — single quotes inside, double outside. A very common typo; show it explicitly.

---

### Part 4: Stage 2 — Personality: Name and Voice (12 minutes)

Two moves: a `BOT_NAME` constant at the top, and warmer f-strings that use both the bot's name and the user's name.

> "Give your assistant a name — `BOT_NAME = 'Ada'` at the very top. Now every reply speaks AS Ada and TO you by name. Same joke as last week, but now it feels personal."

Show the before/after joke line from the lesson side by side — it's the clearest illustration that personality is almost free.

**Then fold in the remembered default** for weather (this bridges into robustness): when no city is named, fall back to `user["favourite_city"]`.

> "Here's memory making it CLEVERER. Ask 'what's the weather?' with no city — and it uses YOUR favourite, because it remembered."

#### Teaching Tips

- **Consistency is the lesson:** "Pick a vibe — cheerful, calm, or funny — and make EVERY reply match. That consistency is what makes it a character."
- The `find_city` helper is provided; you don't need to teach string-splitting deeply. Explain it as "it peeks for a city after the word 'in'; if it finds none, we use the remembered favourite." That's enough.

---

### Part 5: Stage 3 — A New Service + Intent (13 minutes)

Apply the three-step pattern from Part 2. Do **advice** together live; offer **compliment** as the stretch.

> "Three steps, every time. One: write the service — a function that returns a status/data dict. Two: add a branch in detect_intent. Three: handle it in the loop, checking status first."

The **compliment** service is worth highlighting because it *takes a request* — `get_compliment(user["name"])` — so the remembered name flows into the service and back out into a warm reply. That's all four upgrades cooperating; call it out.

#### Teaching Tips

- **The two-place omission:** the classic bug is adding the loop handler but forgetting the `detect_intent` branch (or vice versa), so the intent never fires. Remind them: a new service needs BOTH.
- **Status check is not optional:** even though these new services always return `"ok"`, insist on the `if result["status"] == "ok":` check. It builds the habit that matters for weather, which really can fail.

---

### Part 6: Full Run-Through + Common Mistakes (10 minutes)

Assemble the complete program and run the full scripted conversation from the lesson — every path, top to bottom: default-city weather, named city, unknown city (the error branch), joke, fact, compliment, nonsense, bye.

> "Watch it survive everything. No city named — it remembers mine. A city I don't stock — polite apology, no crash. Total nonsense — friendly nudge. Say bye — clean stop. THAT is an assistant that never falls over."

Then walk the four Common Mistakes, prioritising the two `KeyError`s (reading a preference before it's set; using `data` without checking `status`) and the forever loop (forgetting `running = False`).

---

### Part 7: Homework + Wrap-Up (10 minutes)

Homework is explicitly **showcase prep**: unique personality, at least one remembered preference, one new service, and bulletproof.

> "Next week is your big demo AND your API Master Badge. This week: give your assistant a personality all its own, make sure it remembers you, add a service you invent, and try HARD to break it. Bring THIS exact Trinket next week — it goes live on Zoom."

Preview Week 8: the showcase and the badge. Build excitement. Paste submission instructions in chat.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Built the `user` dictionary before the loop and read from it safely
- [ ] Added a `BOT_NAME` constant and used both names in replies
- [ ] Added a new service with all three pieces (function, intent, handler)
- [ ] Checked `status` before reading `data` on service calls
- [ ] Used the remembered favourite city as a default for weather

**Understanding:**
- [ ] Can explain why the `user` dict must be filled before it's read (the `KeyError`)
- [ ] Can explain why we check `status` before using `data`
- [ ] Can explain how `running = False` ends the loop

### Students to Watch

**Need Extra Support:**
- `KeyError` when reading a preference — check they stored it in `user` *before* the loop; the fix is a reorder, not new code
- Confused by f-string quote nesting (`user['name']` inside `f"..."`) — a fiddly but quick fix; share screen for a 1:1
- Added a new intent in only one of the two places — check both `detect_intent` and the loop handler

**Ready for More Challenge:**
- Point them at the ⭐⭐⭐ homework: remember TWO preferences and add a service that takes a request (like `get_compliment(name)`). A great stretch that deepens the memory idea.
- Suggest a service with a bit of logic (e.g. a time-of-day greeting, or advice chosen from a list) for the confident ones.

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student lost their Week 6 file | Paste the Week 6 assistant (the lesson's `starter_code`) in the chat; they start from there |
| `KeyError: 'favourite_city'` | They read the preference before storing it — move the `user = {...}` line above the loop, include every key |
| `KeyError: 'data'` on weather | They used `result["data"]` without checking `status` first — a failed call has only `"error"`. Add the `if status == "ok"` guard |
| New service never responds | They added the loop handler but forgot the `detect_intent` branch (or vice versa) — a new intent needs BOTH |
| f-string prints `{user['name']}` literally | Missing the `f` prefix before the string |
| `SyntaxError` in an f-string | Quote clash — use single quotes inside a double-quoted f-string: `f"{user['name']}"` |
| Infinite loop (forgot `running = False`) | Show the Stop/re-run button in Trinket, then add the missing flag flip in the `bye` branch |
| Weather always uses the favourite city | `find_city` only spots a city after the word "in" — remind them to phrase it "weather in Lagos" |
| Running behind schedule | Cut the second new service (compliment); advice alone meets the "new service + intent" objective |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Did every student finish a working, personalised assistant?** Those who didn't need a catch-up before the Week 8 showcase — nobody should demo a broken program or miss out on the badge.
- **How did the `user` dictionary land?** Memory is the term's payoff concept. If several struggled with the `KeyError`, plan a 2-minute recap at the start of Week 8.
- **Who's ready to demo confidently vs who's nervous?** Note the shy students now so you can gently prep them for next week's showcase.
- **Timing:** did Stage 1 (memory) get its full time? Adjust if the earlier framing ran long.

---

## 💭 Remember

**This is the moment the assistant becomes personal.**

An assistant that treats everyone the same is a script; an assistant that remembers your name, speaks in its own voice, and never falls over is software with character. When students see their bot greet them by name and recover gracefully from nonsense, they cross a line — from "someone who followed a tutorial" to "someone who built an assistant of their own." Celebrate that crossing. Next week they show it to the world and earn the API Master Badge.

**You've got this!** 🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
