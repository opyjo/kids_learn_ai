# Year 2, Lesson 6: Assembling the Assistant 🤖🔧

## Teacher's Guide

**Course:** Working with APIs (Year 2, Term 6)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This is the assembly lesson of Term 6. For five weeks students built the parts in isolation — mock API services, reading response dicts, status codes, and an intent classifier. Today they **bolt them together into one working assistant**: BrightBot. It is the CORE that Week 7 personalises (name, memory, personality) and Week 8 showcases for the **API Master Badge**.

The session is a **live build-along** in four clear stages: services → intent brain → chat-loop skeleton → wire each intent. Students type alongside you, run after every stage, and use Zoom reactions as checkpoints. Nothing today is a brand-new concept — the magic is watching six weeks of skills click into a program you can actually chat with.

Three core goals:

1. **Every student leaves with a running assistant** saved as `Y2-T6-W6-Assistant`
2. **Cement two make-or-break habits** — check `status == 200` before touching `data`, and set `chatting = False` so the loop quits
3. **Build project pride** — they type "tell me a joke" and their own code answers. Let them feel it.

> ⚠️ **CONTINUITY IS CRITICAL.** Week 7 extends THIS EXACT file. The structure below — services `get_weather`/`get_joke`/`get_fact` returning `{"status", "data"/"error"}`, `detect_intent` returning `"weather"/"joke"/"fact"/"bye"/"unknown"`, and `run_assistant()` with a `while chatting:` loop — must be identical for every student so next week's personalisation instructions apply cleanly. Do not improvise different function or variable names live.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Combine mock API services, an intent classifier, and a `while` loop into one program
2. Route a user message to the correct service using `detect_intent` and `if/elif/else`
3. Check a response's `status` before reading its `data`, handling a 404 gracefully
4. Build a chat loop that terminates cleanly using a `chatting` flag
5. Explain why `detect_intent` lowercases the message (case-insensitive matching)

### Key Success Metrics

- [ ] Every student's assistant runs end to end and answers weather, joke, and fact
- [ ] Every student has saved a Trinket named `Y2-T6-W6-Assistant`
- [ ] Students' assistants quit cleanly on `bye` (no infinite loop)
- [ ] Students' weather branch checks the status and survives an unknown city
- [ ] Students leave knowing next week they PERSONALISE this file (the Week 7 hook)

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share; teacher's Trinket visible throughout
- Students' Trinket accounts
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Type the full solution yourself once** in a fresh Trinket named `Y2-T6-W6-Assistant` — you build it live and it must be flawless
2. **Rehearse a full scripted conversation** (weather Accra → joke → something silly → bye) so your live demo matches the lesson exactly
3. **Rehearse the 404 path** — ask for weather in "Paris" or "Cairo" and confirm BrightBot reports the error instead of crashing
4. **Have the two deliberate bug demos ready:** (a) reading `data` after a 404 → `KeyError`; (b) removing `chatting = False` → infinite loop (know how to stop it — the Stop button)
5. **Prepare "catch-up" pasteables** of each stage in case someone falls behind — paste into Zoom chat, don't stall the class

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + "today we assemble the assistant" + the plan
⏱️  8-20 min  → Stage 1: the three services — build + test live
⏱️ 20-30 min  → Stage 2: the intent brain — build + test live
⏱️ 30-40 min  → Stage 3: the chat-loop skeleton (prove it quits on bye)
⏱️ 40-55 min  → Stage 4: wire each intent (weather status check is the heart)
⏱️ 55-65 min  → Full conversation run + common mistakes + save the Trinket
⏱️ 65-75 min  → Homework brief + Week 7 "personalise it" teaser + wrap-up
```

**Flexible timing:** Stage 4 (wiring, especially the weather status check) is the priority — protect its 15 minutes. If Stages 1-2 run long, paste the services/brain in chat; students already wrote these in Weeks 3-5.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + The Plan (8 minutes)

Open with energy — this is the week the term has been building to.

> "For five weeks you've been building parts: services that answer, a brain that spots what people want, loops, status codes. Today we bolt them all into ONE machine — an assistant you can actually chat with. By the end you'll type 'tell me a joke' and your own program will answer."

Screen-share the **skills-to-assistant table** from the lesson. Point at each week and say where it lands. This shows students the assistant isn't new material — it's assembly.

Then the non-negotiable setup instruction:

> "Create a NEW Trinket. Name it exactly Y2-T6-W6-Assistant. Type it in the chat when done. This is the file you KEEP — next week we personalise this very program."

#### Teaching Tips

- **Don't skip the naming.** Week 7 assumes this file exists. Verify names in the chat before building.
- Keep the intro under 8 minutes. They're keen to build the bot — let them.

---

### Part 2: Stage 1 — The Services (12 minutes)

Build live. Type `get_weather` first, narrating the shape, then the two simpler services.

> "Each service is a mock API — exactly what you built in Weeks 3 and 4. It returns a dictionary with a `status` and either `data` if it worked or `error` if it didn't."

Emphasise the split personality of `get_weather`:

> "Watch — `get_weather` can SUCCEED or FAIL. If the city is in our little forecast database, status 200 plus data. If not, status 404 plus an error. That's why later we MUST check the status on weather."

Test live so students see the two shapes:

```python
print(get_weather("Accra"))   # status 200 + data
print(get_weather("Paris"))   # status 404 + error
```

#### Teaching Tips

- **`get_joke` and `get_fact` always return 200** — point out they can't fail, which is why only weather needs a status check in the loop. This contrast lands the status-check concept.
- The `city.lower().strip()` line is what makes `"Accra"`, `"accra "` and `"ACCRA"` all match. Mention it, don't dwell.
- This is revision (Weeks 3-4). Move briskly — the real work is Stage 4.

---

### Part 3: Stage 2 — The Intent Brain (10 minutes)

Add `detect_intent` below the services. Narrate the crucial first line.

> "The FIRST thing this function does is `message = message.lower()`. Why? Because people type 'JOKE', 'Joke', 'joke please'. If we don't lowercase first, capitals sneak past and everything falls to unknown. This one line makes the brain case-insensitive."

Test live:

```python
print(detect_intent("What is the weather like?"))   # weather
print(detect_intent("Tell me a JOKE"))              # joke
print(detect_intent("blah blah blah"))              # unknown
```

Chat checkpoint: "What does `detect_intent('goodBYE')` return?" (`bye` — `.lower()` makes `goodbye`, and `bye` is inside it.)

#### Teaching Tips

- **Order matters and only ONE intent is returned.** Checks run top to bottom; the first match wins. This is a feature, not a bug — keep it simple.
- Students wrote `detect_intent` in Week 5. If they have it, they can paste; but retyping reinforces the `.lower()` habit.

---

### Part 4: Stage 3 — The Chat-Loop Skeleton (10 minutes)

Build the loop with a **temporary** `print("(intent:", intent, ")")` so students see routing working before wiring the replies. This staged approach prevents a wall of code.

> "An assistant doesn't do one thing and stop — it keeps chatting until you say goodbye. That needs a `while` loop and a flag called `chatting`."

Walk the flag logic slowly:

> "`chatting = True` means keep going. `while chatting:` repeats while it's True. When the user says bye, we flip it to `chatting = False`, and next time the while checks, the loop ends. THAT is how the assistant knows to stop."

Run it, type a few messages, then `bye`. Confirm it **stops**.

#### Teaching Tips

- **The exit door is the lesson here.** Deliberately delete `chatting = False` and run it (see Assessment) so students feel the infinite loop, then fix it. This lands the concept far better than telling.
- Know how to stop a runaway program in Trinket (the Stop/red button) and show students, so nobody panics when their own loop runs away during Stage 4.
- Reassure them the `(intent: ...)` line is temporary scaffolding — we replace it next.

---

### Part 5: Stage 4 — Wire Each Intent (15 minutes) ⭐ THE HEART

This is where the lesson lives. Replace the temporary print with the real branches, **starting with weather and its status check**.

Type the weather branch and narrate the check:

> "Look CAREFULLY. Before I touch `response['data']`, I check `if response['status'] == 200`. Why? Because if the user asked for a city we don't have, the service returned a 404 with NO data key. Reaching for `data` there would CRASH with a KeyError. Check the status, THEN use the data. This is the single most important habit of the whole term."

Then demonstrate the bug deliberately (see Assessment): ask for "Paris" with the check removed → `KeyError`. Add the check back → graceful message.

Add joke, fact, bye, and unknown branches. Point out:
- joke and fact read `data` directly (they never fail)
- bye sets `chatting = False` (the exit door from Stage 3)
- `else` catches `unknown` so BrightBot always replies politely

**Then the full run.** Do the scripted conversation live so students see matching output:

```
You: what's the weather?
🤖 Which city? Lagos
🤖 In Lagos it is 29°C and cloudy.
You: tell me a joke
🤖 Why did the programmer quit their job? They didn't get arrays! 😄
You: sing me a song
🤖 Sorry, I didn't understand. Try 'weather', 'joke', or 'fact'.
You: bye
🤖 Goodbye! 👋
```

Then the 404 path with "Cairo" so they see the graceful failure.

#### Teaching Tips

- **Build branch by branch, don't paste the whole loop.** Students who fall behind can't recover from a wall of pasted code; incremental typing keeps everyone together.
- **Indentation is the silent killer.** The branches sit inside the `while`, which sits inside `run_assistant`. That's deep nesting — Trinket auto-indents, but watch for students whose branches drift out of the loop.
- **Celebrate the first working conversation loudly.** "You just chatted with a program YOU built. Screenshot that." Then: SAVE the Trinket.

---

### Part 6: Common Mistakes + Wrap-Up (10 minutes)

Run through the four common mistakes from the lesson, live-coding each so students see the real behaviour:

1. **Using `data` before checking `status`** → `KeyError` on a 404. THE big one — show it fail, show it fixed.
2. **Loop never quits** → remove `chatting = False`, feel the infinite loop, fix it.
3. **Case-sensitive matching** → no `.lower()`, "JOKE" falls to unknown. Show the surprise.
4. **Forgetting to call `run_assistant()`** → nothing happens. Quick.

#### Homework: Give BrightBot a New Skill (4 minutes)

Walk through it: open the SAME `Y2-T6-W6-Assistant` file and add a **fourth** skill in three places — a new service, a new `detect_intent` branch, and a new loop `elif`. Show the advice example:

```python
def get_advice():
    return {"status": 200, "data": {"advice": "Save your work often 💾"}}
```

Stress the non-negotiable: **keep the `bye` branch and its `chatting = False`.** Point out the tiers (1 skill / a quiz skill / 2 skills with a status check).

> "This homework is you practising the exact skill you'll use next week — adding capabilities to your assistant. It's a warm-up for personalising it."

#### Wrap-Up (3 minutes)

> "Six weeks of parts, one talking assistant. You assembled BrightBot today. Next week we give it a soul — a name, a memory, a personality. Save your Trinket, and I'll see you there."

Stay on the call 2-3 minutes for questions and to help anyone whose assistant isn't running.

---

## 🎓 Assessment & Notes

### The Two Deliberate Bug Demos

The two most valuable teaching moments this week:

**1. Status-check crash** — reading `data` after a 404:

```python
response = get_weather("Paris")
print(response["data"]["temp"])   # BUG: no "data" key on a 404
```

Run it, watch the `KeyError`, ask "the service didn't crash — WE did. Why?" Let them reason it out (there's no data key), then fix with `if response["status"] == 200:`. This lands defensive status-checking far better than telling.

**2. Infinite loop** — remove `chatting = False`:

```python
elif intent == "bye":
    print("🤖 Goodbye! 👋")
    # chatting stays True forever!
```

Run it, type `bye`, watch it ask `You:` again. Stop the program with the red button, then add the line back. Students never forget the exit door after feeling it stick.

### During Class, Observe:

**Technical Skills:**
- [ ] Built all three services returning status + data/error
- [ ] `detect_intent` lowercases the message and returns the right intent
- [ ] Chat loop uses a `chatting` flag and quits on `bye`
- [ ] Weather branch checks `status == 200` before reading `data`
- [ ] Called `run_assistant()` and had a full conversation
- [ ] Saved the Trinket with the correct name

**Engagement:**
- [ ] Kept pace with the live build (thumbs up at each stage)
- [ ] Answered the chat checkpoints
- [ ] Tried the 404 city and saw the graceful failure

### Students to Watch

**Need Extra Support:**
- Fell behind during Stage 4 — paste the stage code privately; pair them for homework
- Assistant won't stop — they've dropped `chatting = False` from the bye branch
- `KeyError: 'data'` — they skipped the status check on weather

**Ready for More Challenge:**
- Finished early — point them at the ⭐⭐⭐ homework: add TWO skills, one with its own status check

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Assistant never stops asking `You:` | The `bye` branch is missing `chatting = False` — add it |
| `KeyError: 'data'` on weather | Reading `response["data"]` without checking `status == 200` first |
| "JOKE" / "Weather" not understood | Missing `message = message.lower()` at the top of `detect_intent` |
| Program runs but does nothing | Forgot the `run_assistant()` call at the bottom of the file |
| `IndentationError` | The branches must sit inside the `while`, inside `run_assistant` — check the nesting |
| Weather always says "I don't have that city" | City typed isn't in `forecasts` (Accra/Lagos/Kumasi), or `.lower()`/`.strip()` was dropped |
| Every message hits the wrong reply | `if/elif` order or a typo in an intent string (`"jokes"` vs `"joke"`) |
| Student didn't save / lost the file | Recreate from the full solution block; stress the `Y2-T6-W6-Assistant` name for next week |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Completion:** how many students have a running, correctly-named assistant? (Anyone missing needs a nudge before Week 7 — the whole next lesson depends on this file.)
- **The status-check habit:** did checking `status` before `data` land? If shaky, plan a 2-minute recap at the start of Week 7.
- **The quit flag:** did everyone's loop terminate cleanly, or did infinite loops appear? Note who needs a check-in.
- **Pacing:** did Stage 4 get its full time, or did the services/brain stages eat it? Adjust the paste-ahead strategy.

---

## 💭 Remember

**Today is about assembly and pride, not new theory.**

Nothing today is a brand-new concept — it's six weeks of API skills clicking into one machine. The magic is the moment a student types a message and their own assistant answers. Protect that moment: keep the pace steady, build in four stages, and make sure EVERY student leaves with a saved, working `Y2-T6-W6-Assistant`. Next week's personalisation lesson — and the Week 8 API Master Badge — are built directly on top of it.

**They just built their own AI-style assistant. Let them feel it.** 🤖🔧

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
