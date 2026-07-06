# Year 2, Lesson 4: Status Codes & Error Handling 🚦❗

## Teacher's Guide

**Course:** Working with APIs (Year 2, Term 6)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

By now students can build a mock API — a function that returns a dict of data. This lesson adds the missing half of every real API conversation: **what happens when the answer is "no"**. The session has three core goals:

1. **Teach status codes as a real-world concept** — 200/404/500 are not made-up classroom numbers; they're the actual codes running the entire web. This connects the mock work to reality and makes it feel legitimate.
2. **Upgrade the response shape** — move from "just the data" to the professional envelope `{"status": ..., "data"/"error": ...}`. This is the shape their Week 6/7 assistant will depend on.
3. **Drill the check-before-you-use discipline** — the single most important habit today is that the CLIENT inspects the status before reaching for the data. This is the "never crash" mindset from Term 1, levelled up from bad input to bad responses.

This is a conceptual gear-change more than a syntax lesson — the Python (dicts, `if`/`else`, `in`) is all revision. The new thing is a *pattern of thinking*: expect failure, handle it calmly.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what a status code is and name the common ones (200 OK, 404 Not Found, 500 Server Error)
2. Describe the difference between a 4xx (client's mistake) and a 5xx (server's mistake)
3. Upgrade a mock service so success returns `{"status": 200, "data": {...}}` and failure returns `{"status": 404, "error": "..."}`
4. Write a client that checks `response["status"] == 200` BEFORE using `response["data"]`
5. Handle both the success and failure paths without the program crashing

### Key Success Metrics

- [ ] Every student can state, in their own words, why the client must check the status first
- [ ] Every student upgrades `get_weather` to return status + data/error (Round 2)
- [ ] Most students write a client with both an `if` (200) and an `else` branch (Round 3)
- [ ] Students correctly compare status as an integer (`== 200`, not `== "200"`)

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share enabled
- Students' existing Trinket accounts — today's Trinket is `Y2-T6-W4-StatusCodes`
- Last week's mock API code handy (students build directly on the `get_weather` idea)
- This teaching guide open during class

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Have the Week 3 mock API fresh in mind** — students arrive with a `get_weather(city)` that returns a dict; today reshapes it. Be ready to remind them of last week's version.
3. **Prepare a real-world status-code hook** — a "404 page not found" screenshot or the memory of one is gold; nearly every student has seen a 404 without knowing its name.
4. **Pre-load the KeyError crash** — you'll deliberately run the "use data without checking" mistake live; have it typed and ready so the crash lands at the right moment.
5. **Decide your two demo cities** — one that exists (Lagos/Accra/Dakar) and one that doesn't (Timbuktu/Narnia) so both paths are visible every time.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap last week's mock API + today's hook ("what if the answer is no?")
⏱️  8-20 min  → Part 1-2: what status codes are + the common codes (200/404/500)
⏱️ 20-32 min  → Part 3-4: the new response shape + upgrading the server
⏱️ 32-45 min  → Part 5-6: the client checks status first + tracing both paths
⏱️ 45-55 min  → Common mistakes (LIVE crash the KeyError) + class activity
⏱️ 55-70 min  → AI discussion + homework + Week 5 teaser + wrap-up
```

**Flexible timing:** Parts 1-2 (the concept) can compress if the class grasps status codes quickly — most will recognise 404. Protect Parts 5-6; the check-first client is the heart of the lesson and needs its full time.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + Hook (8 minutes)

Open by celebrating last week: "You built a SERVER — a function that hands back data when someone asks. That's a real skill." Then pose the gap:

> "But what happens when someone asks for a city you don't have? Right now your API either crashes or returns something confusing. Real APIs have a beautiful, honest answer for that — and it starts with a little number."

Drop the hook everyone knows:

> "Raise a hand (or thumbs up) if you've ever seen a webpage say '404 — Page Not Found'. THAT number is a status code. Today you learn what it means and how to use it."

#### Teaching Tips

- **Lean on recognition.** 404 is the one status code most kids have already met. Start there, then widen to 200 and 500.
- **Keep the "mock vs real" honesty explicit** — real APIs use the internet; ours are functions. But the *codes* are 100% real. Students value being told the truth about the boundary.

---

### Part 2: What Status Codes Are + The Common Ones (12 minutes)

Screen-share the traffic-light metaphor (Part 1 of the lesson) and the two tables (Part 2). Go through 200, 404, 500 with a one-line human translation each:

- **200** — "Yes! Here you go." 🟢
- **404** — "I looked, but I can't find that." 🔴
- **500** — "Something broke on MY end, sorry." 🔴

Then the crucial distinction, which is the most examinable idea in this section:

> "404 vs 500 — who made the mistake? A 404 means YOU asked for something that isn't there. A 500 means the SERVER itself broke. Same red light, totally different cause."

Run the Zoom-chat warm-up ("city not found → which code?") and reveal 404. Call on 1-2 students to explain WHY it's not 500.

#### Teaching Tips

- **The 4xx/5xx family table is a keeper** — "4 is for YOU, 5 is for the SERVER" is a memorable hook worth repeating.
- **Don't drown them in codes.** Three is plenty. Mention there are dozens but they only need this handful to start.

---

### Part 3-4: The New Shape + Upgrading the Server (12 minutes)

Contrast last week's bare `{"temp": 31, "sky": "Sunny"}` with today's envelope. The "parcel with a label" metaphor works well: the label (`status`) tells you whether to expect a gift (`data`) or a sorry-note (`error`) inside.

Live-code the upgraded `get_weather`. Emphasise the symmetry: `if city in weather_database` → 200 + data; `else` → 404 + error. Then print the raw responses for a real and a fake city so students SEE the two shapes side by side.

#### Teaching Tips

- **Anchor on "every response has a status."** That's the invariant. `data` and `error` come and go, but `status` is always present — it's the label you always read first.
- **Type the `in` check slowly** — this is revision but it's the decision point of the whole server.

---

### Part 5-6: The Client Checks Status First (13 minutes)

This is the centrepiece. State the golden rule and write it where they can see it:

> "A good client ALWAYS checks the status before using the data."

Live-code `show_weather`. Point at the shape: **one `if` for 200, one `else` for everything else.** Then trace BOTH paths out loud, running each and reading the output:

- `show_weather("Lagos")` → status 200 → the `if` branch → weather prints
- `show_weather("Timbuktu")` → status 404 → the `else` branch → friendly message, no crash

Make the "no crash" moment explicit and celebratory: "Watch — a bad request, and the program just... stays calm. That's the whole game."

Then connect back to Term 1: "Remember 'never crash' from the Smart Calculator, and `try/except`? Same mindset. Back then we guarded bad input; now we guard bad responses."

#### Teaching Tips

- **Trace, don't just run.** Ask the class to predict which branch fires BEFORE you run each call. Prediction cements the pattern.
- **The `else` is not optional** — hammer this. A client with only an `if` is the #1 real-world bug this lesson prevents.

---

### Part 7: Common Mistakes — LIVE (5 minutes, folded into activity)

The three mistakes are the richest teaching moments. Run at least the first one LIVE:

1. **Using data without checking status → KeyError.** Type `response["data"]["temp"]` on a 404 response and let it crash. The `KeyError: 'data'` is the payoff — "THIS is why we check first. No `data` key exists on a 404."
2. **Comparing status as a string (`== "200"`).** Show that even a successful request prints the wrong branch, because `200 != "200"`. The takeaway chant: *"Status codes are NUMBERS."*
3. **Assuming success, forgetting the `else`.** The program says nothing and moves on confused — a silent bug, the sneakiest kind.

#### Teaching Tips

- **The KeyError crash is the emotional peak** — let it land, pause, then fix it. Students remember the crash they watched far better than a warning they read.

---

### Class Activity: The Status Code Upgrade (folded into Parts 4-6, ~15 min total)

The activity IS the lesson build, staged in tiers:

- **Round 1 (⭐)** — predict the status for three calls in the chat. Quick engagement check.
- **Round 2 (⭐⭐)** — upgrade the server to return status + data/error. Everyone should reach this.
- **Round 3 (⭐⭐⭐)** — build the checking client with both branches. The core objective.
- **Bonus** — the "what should happen on a 404?" chat discussion, then improve the error message. Great for fast finishers and for surfacing empathy in design.

Run Rounds as a build-along: you live-code the skeleton, they fill it in, thumbs up when it runs. Circulate via shared screens for Round 3.

---

### AI Discussion + Homework + Wrap-Up (15 minutes)

#### AI Discussion (5 minutes)

Use the `ai_activities` prompt. The point is light but real: every AI assistant talks to APIs, and good ones cope with failure by **retrying, apologising, or falling back** — never crashing. Ask: "Have you seen a chatbot say 'something went wrong, please try again'? What if it just crashed instead?" Keep this to 5 minutes; it's a motivator, not a module.

#### Homework: The Never-Crash Client (5 minutes)

Walk the requirements and the example run. Stress: any service they like (weather, jokes, scores), but it MUST have both a 200 and a 404 path, and the client MUST check status first. Point out the ⭐⭐⭐ tier adds a 500 case — genuinely for the keen.

> "⭐ gives your service status codes. ⭐⭐ builds the never-crash client. ⭐⭐⭐ adds a 500 server-down case and handles all three. Any tier counts as done."

Trinket name: `Y2-T6-W4-StatusCodes`. Paste submission steps in chat, set the due date.

#### Wrap-Up (3 minutes)

> "Today you made your API honest and your client unbreakable. The programs people trust aren't the ones that work when everything's perfect — they're the ones that stay calm when things go wrong. Next week: we give your chatbot a brain, so it knows WHICH service to call. See you there!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Upgraded `get_weather` to return status + data/error correctly (Round 2)
- [ ] Wrote a client with BOTH an `if (200)` and an `else` branch (Round 3)
- [ ] Compared status as an integer (`== 200`), not a string
- [ ] Program did not crash on the 404 request

**Understanding:**
- [ ] Can explain WHY the client checks status before using data
- [ ] Can distinguish a 404 (client) from a 500 (server) cause
- [ ] Participated in the "what should happen on a 404?" discussion

### Students to Watch

**Need Extra Support:**
- Reached for `response["data"]` without checking status, or got confused by the KeyError — pair-program the check-first pattern once more
- Wrote only the `if` and skipped the `else` — the most common gap; nudge them to always write both

**Ready for More Challenge:**
- Finished Round 3 early — point them at the ⭐⭐⭐ homework (add a 500 path) and suggest a helper that turns any status code into a friendly message

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student's client crashes with `KeyError: 'data'` | Perfect teaching moment — it means they used data on a 404. Show them the fix: check `status == 200` first. |
| `if response["status"] == "200":` never runs the success branch | The quotes make it text. Status codes are numbers — remove the quotes. |
| Student unsure what to return on failure | Remind them: no `data` key on failure — use an `error` key instead. Same status idea, different payload. |
| Confusion between 404 and 500 | "4 is for YOU (you asked wrong), 5 is for the SERVER (it broke)." Repeat the family table. |
| Class races ahead | Push the bonus 500-error path early, or have them add a second service and a shared "check status" helper function. |
| Class struggles with the concept | Drop to guided mode: live-code the whole server and client, students copy and run, then tweak the city names. The pattern sticks through repetition. |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Pattern retention:** did students internalise "check status first", or did several skip the `else`? (This predicts how smoothly Week 6 assembly will go — the assistant checks every service's status.)
- **Concept vs syntax:** was the struggle the idea (status codes) or the code (dicts/if-else)? The code should be revision; if it wasn't, revisit dict access before Week 5.
- **404 vs 500:** did the client/server distinction land? Note anyone who needs it reinforced.
- **Engagement:** did the live KeyError crash and the AI-failure discussion connect? Reuse what worked next week.

---

## 💭 Remember

**Today's real lesson isn't a syntax trick — it's a mindset: expect things to go wrong, and handle it calmly.**

The status-code shape and the check-first client are how that mindset becomes code. Every student should leave able to say two things: "every response carries a status" and "I check it before I use the data." If they believe both, their Week 6/7 assistant will never break on a bad request — and that's the whole point.

**Make your API honest and your client unbreakable — see you next week! 🚦**

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
