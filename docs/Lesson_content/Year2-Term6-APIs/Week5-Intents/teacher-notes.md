# Year 2, Lesson 5: Chatbot Intents 🎯💬

## Teacher's Guide

**Course:** Working with APIs (Year 2, Term 6)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

This is the lesson where two big threads of the course finally braid together. In Term 5 students built a keyword chatbot and a rule-based classifier — programs that read words and reacted. In Term 6 (Weeks 1-4) they built mock APIs (service functions returning `{"status": ..., "data": ...}`) and clients that check the status. Today they build the **brain** that connects the two: `detect_intent`, which reads a user's message, works out what they *want*, and routes it to the right service.

This is the conceptual heart of the whole term. Everything before now was a component; from this week on, students assemble the AI-Powered Assistant. The three core goals:

1. **Land the concept of "intent"** — that many different sentences can share one goal, and the assistant's job is to find that goal. This is a genuinely new mental model, not just new syntax.
2. **Build `detect_intent` live, together** — students should leave having typed the function themselves, tested it, and seen it return the correct intent for varied messages.
3. **Connect language to API calls** — the `handle` router is the "aha": intent detection is worthless until it triggers the right service. This is the bridge to Week 6's full assistant.

The skills (`.lower()`, `in`, `if/elif/else`, returning strings, calling functions) are all familiar. The *combination* — and the idea that a returned label drives a routing decision — is the new learning.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what an **intent** is (what the user wants, not their literal words)
2. Write `detect_intent(message)` that lowercases the message and returns one of `weather`, `joke`, `fact`, `bye`, or `unknown`
3. Group multiple keywords per intent using `or` and `in`
4. Route a detected intent to the correct mock API inside a `handle` function, checking `status` before reading `data`
5. Explain why the order of checks matters and why an `"unknown"` fallback is essential

### Key Success Metrics

- [ ] Every student has a working `detect_intent` with at least three intents by the end of class
- [ ] Every student can explain, in their own words, why we lowercase the message first
- [ ] Most students wire at least one intent to a mock API in the `handle` router
- [ ] Students can articulate the "first matching check wins" rule after the overlapping-keywords demo

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Students' Trinket accounts; today's Trinket name: `Y2-T6-W5-Intents`
- The Week 3/Week 4 mock service functions ready to paste (`get_weather`, `get_joke`, `get_fact`)
- This teaching guide open during class

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Have the service functions ready** — students reuse `get_weather(city)` etc. from Weeks 3-4; keep a clean copy in the chat to paste so nobody stalls hunting old Trinkets
3. **Rehearse the overlapping-keywords demo** — "tell me a joke about the weather" is the money moment; practise running it both orders so the reveal lands
4. **Prepare the intent table** — you'll build the weather keyword list live from student suggestions; have a fallback list ready if the chat is quiet
5. **Recall the Term 5 link** — be ready to say "this is your keyword chatbot, but now each match returns a *label*" — many students will click instantly on that framing

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap + the intent concept (many sentences, one want)
⏱️  8-18 min  → Our four intents + the "lowercase first" rule
⏱️ 18-38 min  → Build detect_intent together (live coding)
⏱️ 38-48 min  → Test the brain + Zoom-chat keyword checkpoint
⏱️ 48-60 min  → Wire one intent to a mock API (the handle router)
⏱️ 60-75 min  → Common mistakes + homework + Week 6 teaser
```

**Flexible timing:** The live build of `detect_intent` (18-38) is the non-negotiable core. If time is tight, demo the router briefly rather than have every student type it — but everyone must leave with a working `detect_intent`.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + The Intent Concept (8 minutes)

Open by connecting backwards, then forwards:

> "Last term you built a chatbot that spotted keywords. This term you built mock APIs that hand back data. Today we build the piece that decides WHICH api to call. Here's the whole trick: before an assistant can help, it has to figure out what you WANT."

Then the key move — show that many sentences share one want. Read three weather phrasings aloud ("what's the weather?", "is it going to rain?", "how hot is it?") and ask:

> "Different words every time. But what do all three WANT?"

Land the definition: an **intent** is the goal behind the words. This is the new idea of the day — spend a moment here, don't rush to code.

#### Teaching Tips

- **Use the students' own lives.** "You free later?" = wants to hang out. This makes intent feel obvious and human before it becomes code.
- **Don't define `unknown` yet** — introduce it in Part 2 as the safety net, so it feels motivated rather than arbitrary.

---

### Part 2: The Four Intents + Lowercase Rule (10 minutes)

Show the intent table (`weather`, `joke`, `fact`, `bye`, `unknown`). Emphasise that `unknown` is different: it's not something users ask for, it's what we return when nothing matched.

Then the lowercase rule. Live-demo the trap:

```python
print("weather" in "WHAT IS THE WEATHER?")   # False!
```

Let them see `False`, then fix it with `.lower()`. This callback to their Term 5 chatbot is worth naming explicitly: "same trick you used before."

#### Teaching Tips

- **Make the `False` sting a little** — a surprised class remembers `.lower()` far better than a class that was simply told to use it.
- **Frame `unknown` as professional** — "every real assistant has a polite "I didn't get that" — it's a feature, not a failure."

---

### Part 3: Build `detect_intent` Together (20 minutes) — THE CORE

Live-code it in stages, students typing alongside. Build up exactly as the lesson does:

1. The shell: `text = message.lower()` then `return "unknown"`
2. Add the single `weather` keyword
3. Expand to a keyword *group* with `or`
4. Add `joke`, `fact`, `bye`

Narrate the `return`-jumps-out behaviour as you go: "the moment a group matches, we leave the function — the first match wins." Plant this now; it pays off in the overlapping-keywords mistake later.

Call on students by name (Ama, Kofi, Adaeze, Chidi) to suggest keywords for each intent before you type them. This keeps 20 minutes of coding interactive.

#### Watch For

| What you see | What it means / do |
|---|---|
| Student checks `message` not `text` | Lowercase bug — will resurface as Mistake 1; catch it early |
| `elif` used where lesson uses separate `if`s | Fine here (each returns), but note it — matters more in the router |
| No final `return` | The `None` trap — flag it, it's Mistake 3 |
| `if "weather" == text` | Common slip: `==` needs an exact whole-string match; we want `in` (contains) |

#### Teaching Tips

- **Type slowly and say every symbol.** The `\` line-continuation confuses some — reassure them they can use one long line instead.
- **Pause after each intent to run it.** Momentum comes from seeing it work four times, not once at the end.

---

### Part 4: Test the Brain + Chat Checkpoint (10 minutes)

Run the five test messages from the lesson and read the output together. Trace the two tricky ones aloud: `"Tell me a JOKE"` (lowercase saves it) and `"What is 2 + 2?"` (safety net catches it).

Then the Zoom-chat checkpoint:

> "Give me a message that should be `weather` but does NOT contain the word 'weather'."

Collect answers, test one or two live. If a student's phrasing slips through as `unknown`, celebrate it: "great — you found a gap! What keyword would we add?" This teaches that intent detection is never perfect, only better.

#### Teaching Tips

- **Testing IS the lesson here** — resist skipping it for time. A student who traces `"What is 2+2?"` to `unknown` truly understands the fallback.

---

### Part 5: Wire One Intent to a Mock API (12 minutes)

Now the payoff — the `handle` router. Paste the Week 3/4 service functions (`get_weather`, `get_joke`, `get_fact`) so nobody stalls.

Build `handle` focusing on the `weather` branch first, with everyone typing:

```python
if intent == "weather":
    response = get_weather("Accra")
    if response["status"] == 200:
        data = response["data"]
        return f"It is {data['temp']} degrees and {data['sky']} in {data['city']}."
```

Explicitly name the Week 4 habit: **check `status` before reading `data`.** Then add the other branches quickly and the `else` for `unknown`. Run the five `handle` tests.

#### Watch For

- **Router uses separate `if`s instead of `elif`** — works, but explain `elif` is tidier when the branches are mutually exclusive (one intent, one action)
- **Students skip the status check** — gently insist; it's the term's core discipline and returns in Week 6
- **Reading `data` off a 404-style response** — good moment to remind them why the status guard exists

#### Teaching Tips

- **This is the "it's alive" moment** — a message goes in, the right API fires, a sentence comes out. Let the class feel it. Thumbs-up in Zoom when their weather message routes correctly.
- If time is short, have students type only the `weather` branch and demo the rest.

---

### Part 6: Common Mistakes + Homework + Wrap-Up (15 minutes)

#### Common Mistakes (8 minutes)

Live-run all three — seeing the real errors is the point:

1. **No `.lower()`** → `"WEATHER please"` returns `unknown`. The surprise reinforces Part 2.
2. **Overlapping keywords** → THE headline demo. Run `"tell me a joke about the weather"` with `weather` first (returns `weather` — wrong!), then swap the order so `joke` wins. Land the rule: **the first matching check wins, so order by priority.**
3. **No safety net** → returns `None`, then `AttributeError` when used. Shows *why* the final `return "unknown"` isn't optional.

#### Homework (4 minutes)

Walk through: extend `detect_intent` with 2+ new intents, test on 6+ messages printing each intent. Point out the tiers — ⭐⭐ adds a router branch calling a mock API, ⭐⭐⭐ deliberately creates and fixes an overlapping-keywords bug.

#### Wrap-Up (3 minutes)

> "Today you built the brain of an assistant — it reads a message, works out what you want, and calls the right API. Next week we give it ears and a mouth: a chat loop, so you can actually talk to it, message after message."

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Lowercased the message before checking (Part 3)
- [ ] Built at least three working intents with keyword groups (Part 3)
- [ ] Kept a final `return "unknown"` safety net (Part 3)
- [ ] Wired at least one intent to a mock API with a status check (Part 5)

**Conceptual Understanding:**
- [ ] Can explain intent as "what the user wants" vs literal words
- [ ] Can explain why order of checks matters after the overlap demo
- [ ] Understands `unknown` as an intentional fallback, not a bug

### Students to Watch

**Need Extra Support:**
- Struggling to see that `detect_intent` returns a *label* the rest of the program acts on — re-anchor to the Term 5 chatbot: "same matching, but now it hands back a word we can switch on"
- Confusing `in` (contains) with `==` (exact match) — a quick two-line demo clears it

**Ready for More Challenge:**
- Finished the router early — point them at the ⭐⭐⭐ homework tier now, and suggest a `time` or `advice` intent with its own mock service

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| `detect_intent` returns `None` for everything | Missing `return` inside the `if`s, or the final `return "unknown"`; check indentation of the `return`s |
| Every message returns the same intent | A keyword group is too broad (e.g. a very common word like "a" or "is"); tighten the keywords |
| `"WEATHER"` returns `unknown` | Forgot `.lower()`, or checking `message` instead of `text` |
| Overlapping message returns the wrong intent | Reorder the `if` checks — first match wins; put the priority intent higher |
| `KeyError` in the router | Reading `data` before checking `status`, or a mistyped key; check the service's returned keys |
| `\` line-continuation errors | A space or comment after the `\`; tell them to use one long line instead |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept landing:** did students grasp "intent" as a goal, or are they still thinking word-by-word? (If shaky, reinforce at the start of Week 6.)
- **Router reach:** how many wired an intent to a mock API? Those who didn't will need a quick catch-up before Week 6 assembles everything.
- **Keyword instincts:** which intents did students brainstorm good keywords for? Weak spots here predict where their homework assistants will have blind gaps.
- **Timing:** did the live build of `detect_intent` get its full 20 minutes? Protect it next cohort.

---

## 💭 Remember

**This is the week the assistant stops being parts and starts being a mind.**

Students already have every skill this lesson uses — the magic is the *combination*: read a message, decide what's wanted, route to a service. If they leave able to say "my program figures out what the user wants and calls the right API," they are fully ready for Week 6, where it all becomes a real, talkable assistant.

**You're building minds this week — enjoy it!** 🎯

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
