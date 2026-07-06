# Year 2, Lesson 2: JSON & Dictionaries 📦🔑

## Teacher's Guide

**Course:** Working with APIs (Year 2, Term 6)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

Last week (Week 1) students learned the request→response idea and that a mock API is a function returning a dict. This week they learn the **shape** of that response — and the single most important insight of the whole term:

> **JSON — the format real APIs send data in — is just a Python dictionary in disguise.**

If students leave believing that, the rest of Term 6 becomes "you already know this." The lesson is deliberately built on skills they are strong at (dicts, nested dicts, lists, loops, f-strings, try/except from Year 1 and Terms 1-5), so the *new* content is really just:

1. Naming the JSON↔dict connection (conceptual, not the `json` module)
2. Reading values out of a **nested** response step by step (`response["weather"]["temp"]`)
3. Pulling from a **list inside a dict** (`response["forecast"][0]["day"]`)
4. **Safe** access with `.get()` and `in` to avoid `KeyError`

**Honesty note (important):** be transparent that real APIs use the internet and send JSON as text. Ours are plain dicts because Trinket has no network. Do NOT require the `json` module — everything must run as plain dicts in Trinket. If a curious student mentions `json.loads`, affirm it but keep it optional and off the critical path.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain that JSON and a Python dictionary share the same `{key: value}` shape
2. Read a surface value from a response dict with one `[ ]`
3. Read a nested value with two `[ ]` (e.g. `response["weather"]["temp"]`)
4. Read an item from a list inside a dict using an index, then a key (`response["forecast"][0]["day"]`)
5. Use `.get()` and `in` to access data safely without a `KeyError`

### Key Success Metrics

- [ ] Every student can articulate "JSON is basically a dictionary"
- [ ] Every student extracts a nested value (two brackets) correctly in the Data Explorer activity
- [ ] Most students correctly pull a value from the forecast list (index, then key)
- [ ] Students can say *when* to reach for `.get()` instead of `[ ]`

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share enabled
- Students' Trinket accounts; the **Y2-T6-W2-JSON** starter Trinket ready to share
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Have the Accra `weather_response` dict ready** to screen-share and live-edit — you'll be typing extractions live
3. **Pre-load two example errors** so you can trigger them on demand: `weather_response["temp"]` (KeyError — it's nested) and `weather_response["forecast"]["Monday"]` (TypeError — list index)
4. **Prepare the "boxes inside boxes" visual** (in the lesson) — this is the mental model that makes nesting click
5. **Recall the Week 1 waiter analogy** — you'll build on it: today is "reading the meal the waiter brought"
6. **Optional:** have a real-world screenshot of JSON (e.g. a weather API response) to show it looks just like their dict — but do NOT go near live internet calls

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap Week 1 + reveal "JSON = dictionary in disguise"
⏱️  8-18 min  → Part 1-2: JSON↔dict table + the mock response (boxes visual)
⏱️ 18-33 min  → Part 3-4: reading OUT — surface, nested, list-in-dict (live-code)
⏱️ 33-43 min  → Part 5: safe access with .get() and in
⏱️ 43-58 min  → Data Explorer activity (3 tiers + bonus)
⏱️ 58-68 min  → Common mistakes (live errors)
⏱️ 68-75 min  → Homework + Week 3 teaser + wrap-up
```

**Flexible timing:** the heart of the lesson is Parts 3-4 (reading nested/list data). If time is short, trim Part 5 to just `.get()` — but never skip the live Data Explorer, that's where the skill lands.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + The Big Reveal (8 minutes)

Open by reconnecting to Week 1:

> "Last week: an API is a waiter. You make a REQUEST, you get a RESPONSE — a dictionary. Today we open that response and READ it. And I'm about to tell you a secret that makes this whole term easy."

Then the reveal. Show a chunk of JSON text and a Python dict side by side and ask the class in chat:

> "What's the difference between these two?"

Let them notice there's almost none. Land it:

> "JSON is what APIs send over the internet. It's just text shaped like a dictionary. You already know dictionaries — so you already know JSON. That's the whole secret."

#### Teaching Tips

- **Don't overload the JSON name.** Students don't need JavaScript history. "Format APIs send data in, shaped like a dict" is enough.
- **Be honest about the internet.** Say plainly: "Real APIs send JSON text across the internet; a program converts it to a dict. Trinket has no internet, so ours ARE dicts. Same shape, same skills." This honesty is a course value — students trust you more for it.

---

### Part 2: The JSON↔Dict Table + The Mock Response (10 minutes)

Walk the JSON↔dict comparison table. Highlight the three "spelling" gotchas: `true`/`True`, `false`/`False`, `null`/`None`. Reassure them we mostly won't hit these since we stay in Python dicts.

Then screen-share the Accra `weather_response`. **Spend real time on the "boxes inside boxes" diagram** — this is the model that makes nesting intuitive:

> "Top-level keys: city, country, weather, forecast. But weather is a BOX inside the box. And forecast is a LIST of boxes. Data lives inside data — that's what real responses look like."

Ask the class to point out (in chat): "Which keys hold a simple value? Which hold another box? Which holds a list?"

#### Teaching Tips

- A **West African weather response** (Accra here, Lagos in homework) keeps examples familiar and grounded.
- Emphasise that `forecast` being a **list** is the thing that trips people up later — plant the flag now.

---

### Part 3-4: Reading Data OUT (15 minutes) — the core

Live-code this, don't just read it. Type each line, run it, show the output.

**Surface (one bracket):**
```python
print(weather_response["city"])      # Accra
```

**Nested (two brackets)** — narrate the left-to-right dig:
```python
print(weather_response["weather"])            # the whole inner box
print(weather_response["weather"]["temp"])    # 30
```
> "First bracket opens the weather box. Second bracket reaches inside it for temp. One dig per box."

**List, then key:**
```python
print(weather_response["forecast"][0])         # first day's dict
print(weather_response["forecast"][0]["day"])  # Monday
```
> "Lists don't have keys — they have NUMBERS, starting at zero. Index 0 is Monday. Then ['day'] reaches into that little box."

**The loop** (they know loops well — this is a confidence win):
```python
for day in weather_response["forecast"]:
    print(f"{day['day']}: high {day['high']}°C")
```

#### Zoom checkpoint

After the nested example, pause:

> "In the chat: how many brackets do I need to get the humidity? Type the exact line."

Expected: `weather_response["weather"]["humidity"]`. Call out a correct one; gently fix any single-bracket attempts (that's Common Mistake 2 in action).

#### Teaching Tips

- **The single most important habit:** read nested access **left to right**, one box at a time. Say it every time.
- Watch for the `°C` character — it's fine in Trinket's Python 3 output; if a student's copy-paste breaks, have them retype it or drop the symbol.

---

### Part 5: Safe Access — `.get()` and `in` (10 minutes)

Trigger the crash live:
```python
print(weather_response["wind"])   # KeyError: 'wind'
```
> "There's no wind key. Real responses often skip keys. So we ask NICELY."

Then `.get()`:
```python
weather_response.get("wind")                 # None
weather_response.get("wind", "not reported") # not reported
```
And `in`:
```python
if "wind" in weather_response:
    ...
```

Give the decision rule clearly:

> "Use square brackets when you're SURE the key is there. Use `.get()` or `in` when it MIGHT be missing. With APIs, keys go missing all the time — so `.get()` will be your best friend in Week 6."

#### Teaching Tips

- Connect to Year 1 try/except: `.get()` is the *gentle* alternative — no exception needed for a simple "maybe missing" case.
- Don't over-drill `.get()` with a default AND `in` AND try/except all at once; `.get()` with a default is the workhorse. `in` is the "check first" companion.

---

### Data Explorer Activity (15 minutes)

Share the starter Trinket. Students work the three tiers; you roam via screen shares and chat.

- **Explore 1 (country):** everyone should clear this fast — it confirms one-bracket access.
- **Explore 2 (humidity):** the nested check. This is your diagnostic — anyone stuck here needs the "two brackets, one per box" reminder.
- **Explore 3 (Tuesday's high):** the index trap. Tuesday is index **1**, not 2. Expect several students to try `[2]` or `["Tuesday"]`. Both are teachable moments.

**Zoom chat checkpoint:** "Paste the exact line you used for Tuesday's high." Compare answers — `weather_response["forecast"][1]["high"]` → `29`. Some may store intermediates in variables first; celebrate that too.

**Bonus:** `.get("rainfall", "no rain data")` for fast finishers.

#### Teaching Tips

- **The index-vs-key confusion is the lesson's main bug.** When you see `["forecast"]["Monday"]` in a shared screen, turn it into a whole-class moment: "forecast is a list — what do lists use instead of keys?"
- Let students who solve it a different valid way (variables, `.get()`, loops) share — reinforces there's rarely one right line.

---

### Common Mistakes (10 minutes)

Live-code all three so students see the real error text:

1. **KeyError — wrong/misspelt key** (`["temperature"]` vs `["temp"]`). Reinforce: keys match exactly, and check whether it's nested.
2. **Nested value with one bracket** (`["temp"]` at top level → KeyError). "It's INSIDE weather — two brackets."
3. **List index as a key** (`["forecast"]["Monday"]` → `TypeError: list indices must be integers...`). The signature Term 6 error. Contrast dict `["key"]` vs list `[0]`.

> "Two error names to recognise: KeyError means 'no such key in this dict'. TypeError about list indices means 'you tried to use a key on a LIST — use a number instead.'"

---

### Homework + Wrap-Up (7 minutes)

Walk the homework: 4+ extractions, at least one nested, at least one from the forecast list, all printed with f-strings. Show the Lagos example run so they see the target quality.

Tiers:
> "⭐ is four pieces. ⭐⭐ adds a loop over the forecast. ⭐⭐⭐ makes it crash-proof with `.get()` and `in` — genuinely useful, because that's how the pros read API data."

Week 3 teaser:
> "Today you READ responses. Next week you BUILD them — you write the function that hands back the dict. You've been the customer; next week you're the kitchen."

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Reads a surface value with one bracket (Explore 1)
- [ ] Reads a nested value with two brackets (Explore 2)
- [ ] Reads a list item with index + key, using the correct index (Explore 3)
- [ ] Uses `.get()` or `in` for a possibly-missing key (bonus / homework tier 3)

**Conceptual:**
- [ ] Can state "JSON is basically a dictionary"
- [ ] Knows dicts use `["key"]`, lists use `[0]`

**Engagement:**
- [ ] Answered the nested-access chat checkpoint
- [ ] Attempted the Data Explorer tiers

### Students to Watch

**Need Extra Support:**
- Stuck on Explore 2 (nesting) — reteach "one bracket per box" with the diagram 1:1
- Repeatedly mixes list index with dict key — a 5-minute recap of Year 1 lists vs dicts will help

**Ready for More Challenge:**
- Cleared all tiers fast — point them at the ⭐⭐⭐ homework (`.get()` + `in`) and ask them to write a `safe_get` helper that reaches a nested value without crashing (a Week 6 preview)

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "Isn't JSON different from a dict?" | Affirm: JSON is text over the internet, a dict is the in-Python version — same shape. We use dicts because Trinket has no network. |
| Student imports `json` and it errors/confuses | Reassure it's optional; we don't need it. Steer back to plain dicts — everything runs without `json`. |
| KeyError everywhere | Usually a misspelt key or forgetting it's nested. Have them print the parent box first (`response["weather"]`) to see the real keys. |
| `TypeError: list indices must be integers` | They used a key on the forecast LIST. Remind: list = number index, starting at 0. |
| Off-by-one on forecast index | Reinforce index 0 = first item. Monday=0, Tuesday=1, Wednesday=2. |
| `°C` symbol breaks on paste | Retype it or drop the symbol — content, not decoration, is what's assessed. |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Nesting map:** who confidently used two brackets? Who needs the boxes model retaught? (Week 6 leans hard on nested access.)
- **List-vs-key:** did the `["forecast"]["Monday"]` error show up a lot? If so, budget a quick lists recap before Week 3.
- **Safe access uptake:** did students reach for `.get()`, or default to `[ ]` and crash? (Week 4 covers error handling — note where to build.)
- **Timing:** did the reveal + table run long? Compress next time; the Data Explorer must keep its 15 minutes.

---

## 💭 Remember

**The one idea that carries the whole term: JSON is just a dictionary.**

If students internalise that, every future lesson — building APIs, handling status codes, parsing intents, assembling the assistant — is a variation on skills they already own. Today isn't about new syntax; it's about giving a confident name to something they can already do, and adding the safety habits (`.get()`, `in`) that keep real programs from crashing.

**They already know dictionaries. Today they learn they already know APIs' language too.** 📦🔑

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
