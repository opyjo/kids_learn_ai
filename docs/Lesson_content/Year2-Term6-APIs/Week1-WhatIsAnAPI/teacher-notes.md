# Year 2, Lesson 1: What Is an API? 🔌📡

## Teacher's Guide

**Course:** Working with APIs (Year 2, Term 6)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This is the opening class of Term 6, the term that ends in the **AI-Powered Assistant** project and the **API Master Badge**. Students arrive fluent in functions, dictionaries, lists of dicts, loops, and try/except — everything an API needs — but they have never framed those tools as "programs talking to programs." This lesson does one big conceptual job: install the **request → response** mental model, and make the honest deal about mock APIs up front. Three core goals:

1. **Build the mental model with a metaphor** — the restaurant (menu → order → kitchen → food) maps perfectly onto app → request → server → response. Students should be able to re-tell it by the end.
2. **Be scrupulously honest about mock APIs** — students are 11-13 and sharp; if we pretend Trinket calls the internet, they'll catch us. Say plainly: real APIs use the network, Trinket can't, so our "server" is a function that returns a dictionary. Same pattern, no network.
3. **Get a real mock API written and called** — every student should call a function, receive a dictionary, and read a value by key before the hour is out.

The heavy lifting here is *conceptual*, not syntactic — they already know how to write a function that returns a dict. The win is that they now see WHY that shape matters.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain in their own words what an API is (one program requesting data from another)
2. Describe the request → response cycle and identify each half in an example
3. Explain why this term uses mock APIs (no network in Trinket) and how a mock API differs from a real one
4. Write a mock API: a function that returns a dictionary
5. Call a mock API, store the response, and read a value out of it by its key

### Key Success Metrics

- [ ] Every student can give the restaurant analogy or an equivalent by wrap-up
- [ ] Every student writes and calls at least one mock API returning a dictionary
- [ ] Students correctly use `["key"]` to read a response (not `[0]`, not `.key`)
- [ ] Students leave knowing the term ends in an AI-Powered Assistant + API Master Badge

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and reactions enabled
- Students' Trinket accounts; today's Trinket name: `Y2-T6-W1-WhatIsAnAPI`
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links
- Two volunteers ready for the "Be the API" role-play (or pair the whole class)

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, and confirm a `def ... return {}` snippet runs
2. **Rehearse the restaurant analogy** so it's crisp — this is the spine of the whole lesson
3. **Prepare the honesty moment** — decide your exact wording for "Trinket can't reach the internet, so our server is a function." Owning this early earns trust.
4. **Line up the role-play** — either two confident volunteers or a plan to pair the whole class in breakout rooms
5. **Have the Term 6 roadmap ready** — W2 JSON, W3 build your own mock API, W4 status codes/errors, W5 chatbot intents, W6-7 assemble the assistant, W8 showcase + **API Master Badge**
6. **Pre-load the common `KeyError` demo** — you'll want to trigger it live

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome to Term 6 + the restaurant analogy
⏱️  8-18 min  → APIs everywhere + the request→response cycle
⏱️ 18-28 min  → The honest truth: real APIs vs mock APIs
⏱️ 28-38 min  → "Be the API" role-play (Part A)
⏱️ 38-55 min  → Write & call your first mock API (Parts B & C)
⏱️ 55-65 min  → Common mistakes (live-code the errors) + API-as-menu
⏱️ 65-75 min  → AI tie-in + homework + Week 2 (JSON) teaser + wrap-up
```

**Flexible timing:** If the role-play runs long (it's fun — let it breathe a little), compress the "APIs everywhere" section, since students will re-meet real-world APIs all term.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome to Term 6 + The Restaurant Analogy (8 minutes)

Open with energy — this is the term they've been waiting for since the Year 2 roadmap.

#### Opening Script

> "Welcome to Term 6! Every program you've written so far has been an island — it only knows what YOU type in. This term, your programs learn to TALK to other programs. That's what an API is. And it ends with you building your own AI-Powered Assistant and earning the API Master Badge."

Then run the restaurant analogy live, asking the class to fill in the blanks in the Zoom chat:

> "You're at a restaurant. You're hungry but you can't cook in the kitchen. So what do you do? You look at the... (menu). You tell the... (waiter). The waiter is carrying your... (order — that's the REQUEST). The kitchen sends back... (food — that's the RESPONSE)."

Land it: "You are the app. The kitchen is the server. You never cook — you order and receive. That's an API."

#### Teaching Tips

- **Make them say the two words** — "request" and "response" — out loud or in chat. These are the anchor vocabulary for the whole term.
- Don't rush to code. The metaphor is the lesson; the code is the confirmation.

---

### Part 2: APIs Everywhere + The Cycle (10 minutes)

Show that APIs aren't abstract — they're behind apps students use daily.

> "Your weather app doesn't KNOW the temperature — it asks a weather API. Maps asks a maps API. Games ask for the leaderboard. Chatbots ask an AI API. Every one of them: send a request, get a response."

Screen-share the request→response diagram from the lesson and walk one arrow at a time. Emphasise that the response comes back as a **dictionary** — connect straight to Term 4: "You already know dictionaries. An API response is just a dictionary that arrived from somewhere else."

#### Teaching Tips

- Ask: "Name an app on your phone and guess what API it calls." Great low-floor chat activity.
- Plant the JSON seed lightly: "Next week we learn the real name for this dictionary-that-travels — JSON." Don't teach it yet.

---

### Part 3: The Honest Truth — Real vs Mock APIs (10 minutes)

This is the integrity moment. Do not skip or soften it.

> "Here's the honest truth. Real apps send their request across the INTERNET to a server far away. Trinket runs Python safely in your browser and cannot reach the internet — so it can't make a real request. Does that stop us? No. This term our 'server' is a Python FUNCTION that returns a dictionary. We call that a MOCK API. The internet is just plumbing we add later — the pattern is identical."

Screen-share the "Real API vs Mock API" comparison table and walk each row. The key takeaway students must leave with: **the skills are the same; only the delivery (network vs function call) differs.**

#### Teaching Tips

- Frame mock APIs as a *strength*, not a limitation: "We get to see BOTH sides — we build the server AND the app. Real developers rarely get to do both on day one."
- If a sharp student asks "so it's not a real API?" — celebrate the question: "Exactly right — it's a *mock*. Real pattern, made-up data, no network. That honesty is why you'll actually understand this."

---

### Part 4: "Be the API" Role-Play (10 minutes)

Get them out of passive mode before any typing.

Either use two volunteers on mic, or send the whole class into paired breakout rooms. One is the **App**, one is the **API**:

1. App says a request out loud: "get_weather for Accra, please!"
2. API replies with a response: "24 degrees, sunny."
3. Swap roles; try `get_joke`, `get_fact`, `get_advice`.

Then have pairs post one request/response they exchanged in the Zoom chat.

#### Teaching Tips

- Insist the API **only answers what was asked** — if the App requested weather, the API can't send a joke. This quietly teaches that an API has a fixed menu (sets up Part 7 and Week 4 status codes).
- Keep it playful and fast. The point is to physicalise "request goes out, response comes back."

---

### Part 5: Write & Call Your First Mock API (17 minutes)

Now to Trinket (`Y2-T6-W1-WhatIsAnAPI`). Live-code alongside the class.

**Part B (⭐⭐):** Build `get_fact()` returning a dictionary, call it into `response`, print the whole dict, then print `response["fact"]`. Make the two prints explicit so students SEE the difference between the full response and one value.

**Part C (⭐⭐⭐):** Upgrade to `get_weather(city)` — an API that takes a *request*. Call it with two different cities and print a sentence from the response. This is the "aha": one API, many requests.

#### Teaching Tips

- **Return, don't print.** Watch for students who write `print(...)` *inside* the function instead of `return`. Ask: "If the kitchen just shouts the order into the air, can the waiter carry it back? The API must RETURN the response so the app can use it."
- **Connect parameter = request detail.** When you add `city`, say explicitly: "This parameter IS the request — it's the 'for Accra' part of the order."
- Circulate via shared screens; thumbs-up in Zoom when a mock API responds.

---

### Part 6: Common Mistakes + API-as-Menu (10 minutes)

Live-code all three errors so students see the real messages — this is the highest-retention part.

1. **Forgetting `()`** → `response = get_fact` prints `<function get_fact at 0x...>`. "No brackets = you pointed at the kitchen instead of ordering."
2. **Treating the response as text** → `response[0]` → `KeyError: 0`. "A dictionary has no position 0 — read it by its KEY."
3. **Wrong/missing key** → `response["temperature"]` when the key is `"temp"` → `KeyError: 'temperature'`. "A KeyError means you ordered something not on the menu."

Land the golden rule: **to read a response you must know its keys.** When you build an API you decide the keys; when you call one you use exactly those keys.

Then show the three-function "menu" (`get_fact`, `get_joke`, `get_advice`) and connect forward: "An assistant is just a program that knows which API on the menu to call for each question. That's your Week 6-7 project."

#### Teaching Tips

- Trigger each error deliberately and pause on the message. Students who can *read* a `KeyError` now will debug independently in Weeks 3-4.
- The `<function ... at 0x...>` output genuinely confuses this age group — name it and move on: "That hex address is just where Python parked the function in memory. You don't need it — you need the brackets."

---

### Part 7: AI Tie-In + Homework + Wrap-Up (10 minutes)

#### AI Tie-In (3 minutes)

Use the `ai_activities` prompt: an AI assistant that's asked for tomorrow's weather doesn't *know* — it calls a weather API. Ask the chat for other questions that would force an AI to call an API (sports scores, maps, live prices). Keep it light — it's a motivator, not a lecture. Tie to the project: "An AI is far more useful when it can FETCH real info instead of guessing — that's why your assistant will call several mock APIs."

#### Homework: Your Own Mock API Menu (4 minutes)

Walk the requirements: at least 2 mock APIs, each **returns a dictionary**, called and printed by key, plus a top comment defining "API" in their own words. Note the tiers:

> "⭐ is two APIs. ⭐⭐ makes one of them take a request, like get_weather(city). ⭐⭐⭐ is the clever one — get_menu() returns a dictionary listing your other APIs. An API that describes your API!"

#### Week 2 Teaser + Wrap-Up (3 minutes)

> "Everything came back as a dictionary today. Next week: JSON — the exact format real APIs use across the whole internet. It looks almost identical to a Python dictionary, which is why we started here. See you there!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Conceptual understanding:**
- [ ] Can restate the request → response cycle (restaurant or their own analogy)
- [ ] Understands mock API vs real API (function-returns-dict vs network request)
- [ ] Recognises an API response is a dictionary

**Technical skills:**
- [ ] Wrote a function that RETURNS a dictionary (not prints)
- [ ] Called the API with `()` and stored the response
- [ ] Read a value with `response["key"]` correctly
- [ ] Passed a parameter as a request (Part C / ⭐⭐)

**Engagement:**
- [ ] Took part in the role-play
- [ ] Used the Zoom chat and reactions

### Students to Watch

**Need Extra Support:**
- Prints inside the function instead of returning — re-run the "waiter can't carry a shout" analogy 1:1
- Confused by `<function ... at 0x...>` — a quick reminder that `()` sends the request usually fixes it

**Ready for More Challenge:**
- Finished Part C fast — point at the ⭐⭐⭐ `get_menu()` homework and hint they can make an API whose response contains a *list* of other API names

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "Is this a REAL API?" (sharp student) | Celebrate it. "No — it's a *mock*. Real pattern, made-up data, no internet. That's the honest deal for Trinket." |
| Student prints inside the function, gets `None` back | Show `return` vs `print`; use the waiter analogy: the API must hand the data back |
| `<function get_fact at 0x...>` in output | They forgot `()`. "Brackets mean 'send the request'." |
| `KeyError` everywhere | Have them print the WHOLE response first to see the real keys, then read by an existing key |
| Role-play feels awkward on Zoom | Do it as a whole-class call-and-response instead of pairs: you're the App, class is the API |
| Trinket down | repl.it backup link in chat; the code is plain Python 3 and runs anywhere |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept map:** did the request→response model land? If not, reopen the restaurant analogy at the start of Week 2.
- **Return vs print:** how many students printed inside the function? This is the #1 thing to reinforce before Week 3 (build your own mock API).
- **Honesty check:** did anyone push on "is it real?" — good sign of engagement; note who, they'll enjoy the term.
- **Timing:** did the role-play overrun? Adjust the Part 2 length next week.

---

## 💭 Remember

**Today is about the mental model, not the syntax.**

Your students already know how to write a function that returns a dictionary. The whole win of this lesson is that they now see that shape as a *conversation between programs* — a request answered by a response. If they leave able to tell you the restaurant story AND explain why our server is "just a function this term," they are ready for JSON, status codes, intents, and the assistant. The honesty about mock APIs isn't a disclaimer to rush past — it's the thing that makes their understanding real.

**Term 6 starts now — they're going to love it!** 🔌📡

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
