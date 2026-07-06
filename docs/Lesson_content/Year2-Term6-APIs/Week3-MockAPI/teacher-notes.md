# Year 2, Lesson 3: Build Your Own Mock API 🏗️📡

## Teacher's Guide

**Course:** Working with APIs (Year 2, Term 6)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

For two weeks students have been **clients** — sending requests and reading response dicts that we handed them. This lesson flips their role: **they become the server.** The core mental shift is from *consuming* an API to *building* one. By the end, every student should be able to write a function that takes a request (a parameter) and returns a response dict, backed by a small internal "database" dict.

This is the week the term's plumbing gets built. The three services students write today — `get_weather`, `get_joke`, `get_fact` — are the literal tools their AI assistant will call in Weeks 6 and 7. Say that out loud, often: today's exercise is next month's project.

Three core goals:

1. **Cement the response shape** — every service returns a **dict**; a successful response carries the data fields directly (e.g. `city`, `temp`, `condition`). This shape is a term-wide contract; Week 4 adds a `"status"` field on top of it.
2. **Build the "always return a dict" habit** — including for unknown requests, which return `{"error": "..."}` instead of crashing. This is a deliberate taster of Week 4.
3. **Separate the two roles** — the *service* decides what dict to send; the *client* decides how to read it. Students play both today.

### Be Honest About "Mock"

Keep saying it plainly: **a real API talks over the internet to another computer; ours does not.** Our API is a plain Python function acting as the server. Same shape, same thinking, no network — which is exactly why it runs in Trinket. Students who understand this now will not be confused later when they meet real HTTP APIs.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what a mock API is and why "we are the server"
2. Write a service function that takes a request parameter and returns a response dict
3. Use a dict lookup inside the function as the service's "database"
4. Handle an unknown request by returning an `{"error": ...}` dict rather than crashing
5. Write a client that calls services and reads responses, guarding with `if "error" in response:`

### Key Success Metrics

- [ ] Every student writes and runs a `get_weather(city)` that returns a dict
- [ ] Every student's service returns a dict (not a bare value) for a known city
- [ ] Most students handle the unknown city without a KeyError
- [ ] Students can state the response shape: "every service returns a dict; data fields go directly in it"
- [ ] Students leave knowing today's services become their assistant's tools

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share enabled
- Students' Trinket accounts — today's Trinket: `Y2-T6-W3-MockAPI`
- This teaching guide open during class
- Class WhatsApp/email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Have the Week 1-2 recap ready** — the request→response diagram and one response dict students read last week; you'll rebuild continuity in 2 minutes
3. **Pre-type the three services** in a Trinket so you can paste-and-run if live typing runs slow — but plan to build `get_weather` live (see Part 2)
4. **Rehearse the two deliberate crashes** — the `KeyError` (unknown city) and the `TypeError` (returning a bare value). Both are teaching moments; make sure yours reproduce
5. **Prepare the Week 6/7 tie-in line** — "these three functions ARE your assistant's tools" — and say it at least twice

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap: request → response dict (Weeks 1-2) + role flip
⏱️  8-20 min  → Part 2-3: build get_weather live (empty → database)
⏱️ 20-32 min  → Part 4: the KeyError crash + handling the unknown city
⏱️ 32-45 min  → Parts 5-6: get_joke() and get_fact(topic)
⏱️ 45-55 min  → Part 7: the client + Common Mistakes
⏱️ 55-75 min  → Homework brief + Week 4 teaser + wrap-up
```

**Flexible timing:** The live build of `get_weather` (Parts 2-4) is the heart of the lesson — protect it. If time runs short, present `get_fact` as a "you've seen this pattern" quick read rather than a full build.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + The Role Flip (8 minutes)

Open by re-drawing the request→response picture from Week 1 and showing one response dict from Week 2:

```python
response = {"city": "Accra", "temp": 31, "condition": "Sunny"}
print(response["condition"])   # Sunny
```

Then the hook:

> "For two weeks I handed you these dicts. You never asked where they came from. Today, YOU make them. When someone asks for the weather, YOUR function decides what comes back. You're behind the counter now."

**Be honest about mock:** state clearly that a real API fetches this over the internet from another computer, and ours is a function instead — same shape, no network. Don't skip this; it prevents deep confusion later.

#### Teaching Tips

- Keep this short. The energy is in building, not recapping.
- If any student still can't read `response["city"]` confidently, note it — they'll struggle in Part 7's client. Pair them with a neighbour.

---

### Part 2-3: Build get_weather Live (12 minutes)

This is a **live build-along**. Type it yourself, narrating; students type alongside.

**Step 1 — the smallest possible service:**
```python
def get_weather(city):
    return {"city": city, "temp": 31, "condition": "Sunny"}

print(get_weather("Accra"))
```
Run it. Point out: it already takes a request and returns a dict — that's a mock API. Then challenge it: "But it says Sunny for Nairobi too. Let's give it a memory."

**Step 2 — add the database:**
Add the `weather_data` dict (Accra, Lagos, Nairobi), look the city up, return real data. Emphasise the **dict-inside-a-dict** structure and `weather_data[city]`.

**Land the response shape explicitly** — write it on screen or paste in chat:

> "The term's rule: every service returns a DICT. A successful response puts the data fields straight inside it — city, temp, condition. Next week we add a status field. For now: data straight in the dict."

#### Teaching Tips

- Ask the class to predict the output BEFORE you run each step (Zoom chat). Prediction cements understanding.
- Watch for students who write `return city, temp, condition` (a tuple) instead of a dict — redirect immediately; it breaks the client later.

---

### Part 4: The KeyError + Handling the Unknown (12 minutes)

**Run the crash on purpose:**
```python
print(get_weather("Timbuktu"))
```
```
KeyError: 'Timbuktu'
```

Let it sit. Ask: "Should a real server crash just because you asked for a city it doesn't have?" (No — it says 'not found'.) Then add the guard together:

```python
if city in weather_data:
    ...
else:
    return {"error": "City not found: " + city}
```

The key insight to voice: **both** the found and not-found answers are dicts. The service never crashes; it always returns something the client can read.

**Flag this as a taster:** "This is a sneak peek of next week. Week 4 is ALL about doing errors properly with status codes like 404. Today we just plant the habit: always return a dict."

#### Teaching Tips

- Reproducing the KeyError live is important — students remember crashes they saw more than crashes they were warned about.
- Some students will try `try/except` here (they know it from earlier terms). Praise the instinct, but steer to `if city in weather_data:` — it's clearer for building a response, and Week 4 will formalise error handling.

---

### Parts 5-6: get_joke() and get_fact(topic) (13 minutes)

Now speed up — students have the pattern. Two teaching points:

- **`get_joke()` has no parameter.** Empty brackets, but still returns a dict. This shows not every service needs a request. Good chat question: "Why does `get_weather` need brackets-with-a-city but `get_joke` doesn't?"
- **`get_fact(topic)` is the same recipe as `get_weather`** — dict database, `if ... in ...`, data dict or error dict. Frame it as "you already know how to do this" to build confidence.

Have students type `get_fact` mostly on their own; circulate (screen shares / shared Trinkets) and spot-check.

#### Teaching Tips

- If short on time, present `get_fact` as a read-and-run rather than a full build. Do NOT cut `get_joke` — the no-parameter case is a genuinely new idea worth 3 minutes.

---

### Part 7: The Client + Common Mistakes (10 minutes)

Show the client loop and run it:
```python
for city in ["Accra", "Lagos", "Timbuktu"]:
    response = get_weather(city)
    if "error" in response:
        print("⚠️  " + response["error"])
    else:
        print(response["city"] + ": " + response["condition"] +
              ", " + str(response["temp"]) + "°C")
```

Emphasise the guard: `if "error" in response:` lets the client tell a good response from an error one **before** reaching for data fields. This is the client's job — separate from the server's.

**Then run the three Common Mistakes live:**

1. **Returning a bare value** (`return 31`) → `TypeError: 'int' object is not subscriptable`. This is the single most important habit of the term: services return DICTS.
2. **KeyError on unknown city** — recap Part 4's fix.
3. **Forgetting the parameter** (`def get_weather():`) → `TypeError: takes 0 positional arguments but 1 was given`.

#### Teaching Tips

- Mistake 1 is the term's non-negotiable. If a student's homework returns a string or list, it breaks the whole assistant later. Hammer "always a dict" here.

---

### Homework Brief + Week 4 Teaser + Wrap-Up (rest of time)

#### Homework (5 minutes)

Walk through the three suggested services (`get_horoscope`, `get_pokemon`, `get_country_info`). Stress the five requirements, especially: **at least 3 inputs**, **returns a dict**, and **handles an unknown input with `{"error": ...}`**. Point at the tiers:

> "⭐ is one working service. ⭐⭐ handles the unknown input. ⭐⭐⭐ builds TWO services — which is exactly what your assistant will need."

#### Week 4 Teaser (2 minutes)

> "Your unknown city returned an error dict — good. But real servers are more precise: they send a status code. 404 Not Found. 200 OK. Next week every response grows a status field, and your services get properly professional."

#### Wrap-Up (2 minutes)

> "You stopped using APIs today and started building them. And those three services aren't throwaway — they're the actual tools your AI assistant will call next month. You just built the toolbox."

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Wrote a service that takes a parameter and returns a dict
- [ ] Used a dict lookup as the service's database
- [ ] Handled the unknown city with an `{"error": ...}` dict (no KeyError)
- [ ] Read a response in the client using `response["key"]`
- [ ] Guarded the client with `if "error" in response:`

**Conceptual Understanding:**
- [ ] Can explain "we are the server" and that our API is a function, not the internet
- [ ] Can state the response shape: every service returns a dict, data fields directly inside

### Students to Watch

**Need Extra Support:**
- Returns a bare value instead of a dict — recheck Mistake 1; this must be fixed before Week 6
- KeyError not handled — pair-program the `if city in weather_data:` guard
- Struggles to read the response in the client — likely a lingering Week 2 gap; send a quick dict-reading refresher

**Ready for More Challenge:**
- Point at the ⭐⭐⭐ homework tier (two services)
- Suggest adding a second lookup field to a service (e.g. weather with `humidity` too)
- Preview Week 4: "Try adding a `status` field to your responses yourself and see if you can guess the numbers."

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student returns a tuple/string/number, not a dict | Show the `TypeError: not subscriptable` crash; rewrite as `return {...}`. This is the term's core habit — do not let it slide |
| KeyError on unknown city | Add `if city in weather_data:` before the lookup; return an `{"error": ...}` dict in the `else` |
| `TypeError: takes 0 positional arguments` | The service is missing its parameter — `def get_weather(city):` |
| Student uses `try/except` for the unknown city | Praise it, but steer to `if ... in ...` for building responses; Week 4 formalises error handling |
| Nested-dict confusion (`weather_data[city]["temp"]`) | Slow down on the dict-inside-a-dict; assign `data = weather_data[city]` first, then read `data["temp"]` |
| Client crashes on the error response | The client forgot `if "error" in response:` before reading data fields |
| "Is this a REAL API?" | Be honest: no — a real API uses the internet; ours is a function acting as the server. Same shape, no network |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Dict habit:** did everyone return dicts? Anyone returning bare values needs a fix before Week 6.
- **Error handling:** who handled the unknown request cleanly? Who needs the `if ... in ...` guard reinforced?
- **Client reading:** any lingering Week 2 dict-reading gaps surfaced in Part 7?
- **Tie-in landed:** do students understand these services become their assistant's tools? If not, repeat it Week 4.

---

## 💭 Remember

**Today students crossed from consumer to builder.**

The single most important outcome is the habit: **every service returns a dict, and it never crashes on an unknown request.** If that habit is solid, Week 4 (status codes) and Weeks 6-7 (the assistant) slot in cleanly. If students leave returning bare values or crashing on bad input, that's the thing to fix before next week — everything downstream depends on it.

**They built the toolbox today. Next month they build the robot that uses it.** 🏗️🤖

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
