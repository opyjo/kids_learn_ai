# Year 2, Lesson 4: How Chatbots & LLMs Work 💬🧠

## Teacher's Guide

**Course:** AI Concepts Deep Dive (Year 2, Term 5)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

This is the "aha" lesson of Term 5. Students talk to chatbots and LLMs every day but almost none of them know what's happening inside. The lesson has three core goals:

1. **Build, don't just discuss** — every student writes a working keyword chatbot. The act of coding a bot is the fastest route to understanding what a "real" chatbot is (and isn't) doing.
2. **Deliver the core intuition honestly** — an LLM is a *super-powered autocomplete* that predicts the next word from patterns. It does not "understand" or "know facts." This one idea reframes how students see every AI tool they use.
3. **Plant healthy scepticism** — LLMs hallucinate. Students leave knowing that confidence is not correctness and that THEY are the fact-checker. This directly feeds the Week 6 Ethics lesson and the Week 7 Investigation Report.

The emotional arc: pride (I built a chatbot!) → curiosity (how do the big ones work?) → insight (it's just predicting words) → responsibility (so I must check its answers).

### Learning Objectives

By the end of this lesson, students will be able to:

1. Build a keyword-matching chatbot using `while True`, `input()`, `if`/`elif`, and `break`
2. Explain why `.lower()` is needed for reliable keyword matching (case-sensitivity)
3. Describe an LLM as a system that predicts the next word from learned patterns ("super-powered autocomplete")
4. Compare a keyword bot to an LLM: matching keywords vs predicting words; neither truly "understands"
5. Define a hallucination and explain why AI answers must be fact-checked

### Key Success Metrics

- [ ] Every student runs a chatbot that greets, replies to at least 2 keywords, and quits on `bye`
- [ ] Every student can finish the sentence "An LLM works by predicting the ___" (next word)
- [ ] The class can give at least one honest LIMIT of LLMs (hallucination)
- [ ] Students leave able to state: "confidence is not correctness — I check AI answers"

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share and chat enabled
- Students' Trinket accounts; new trinket named `Y2-T5-W4-Chatbots`
- This teaching guide open during class
- A few prepared "next-word" sentence starters for the unplugged game
- (Optional) One prepared, kid-safe example of an AI hallucination to describe — do NOT rely on live internet; Trinket has no network

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs; type into an `input()` prompt to confirm the console accepts input in your setup
2. **Pre-build the full BrightByte Buddy solution** in your own trinket so you can live-code confidently and reveal it if the class stalls
3. **Rehearse the traced conversation** from the lesson — you'll narrate exactly why each line matches (or hits the `else`)
4. **Prepare 3-4 next-word sentence starters** the class will recognise (nursery rhymes, sayings) so the game lands fast
5. **Prepare your hallucination talking point** — pitch it as "confidently wrong," not "AI is bad." Keep it age-appropriate and non-scary
6. **Reconnect the thread from Week 3** — students already keyword-matched in a rule-based classifier; today wraps that in a conversation loop

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Hook: "you talk to these every day — how do they work?"
⏱️  8-18 min  → Part 1-3: chatbot anatomy + the .lower() trick
⏱️ 18-40 min  → Part 4: BUILD BrightByte Buddy together (live-code)
⏱️ 40-52 min  → Part 5-6: how LLMs work + next-word game + comparison
⏱️ 52-62 min  → Part 7: hallucinations + AI discussion
⏱️ 62-75 min  → Common mistakes + homework + Week 5 teaser + wrap
```

**Flexible timing:** The BUILD (Part 4) is the heart — protect its 20 minutes. If time runs short, shorten the comparison table discussion, not the build. The next-word game can shrink to 3 minutes if needed but should not be cut — it's the memory hook for how LLMs work.

---

## 📚 Detailed Teaching Guide

### Part 1: Hook — The Everyday Mystery (8 minutes)

Open with recognition, not theory:

> "Put a 🙋 in the chat if you've ever talked to a chatbot or ChatGPT. Loads of you! Now — does anyone actually know what's happening INSIDE when it replies? By the end of today, you will. And you'll have built your own."

Reconnect to last week:

> "Last week you built a rule-based classifier that matched keywords. Today we wrap that exact skill in a conversation — and then we compare it to the giant AIs everyone talks about."

#### Teaching Tips
- Keep this short. The payoff is the build, not the intro.
- Resist explaining LLMs yet — build the small bot first, THEN reveal the big idea. The contrast is what makes it stick.

---

### Part 2-3: Chatbot Anatomy + the `.lower()` Trick (10 minutes)

Screen-share the three-step heartbeat (READ → CHECK → REPLY → loop) and the skeleton `while True` loop. Emphasise three primitives:

- `while True:` = loop forever; `break` is the only exit
- `"keyword" in text` = substring search anywhere in the message
- `.lower()` = the reliability fix for capitals

**Make `.lower()` concrete.** Live-type a bot WITHOUT `.lower()`, type `HELLO`, and let it fail to match. The visible failure teaches more than any explanation. Then add `.lower()` and rerun.

#### Teaching Tips
- Walk the case-sensitivity table aloud: `Hello` → `.lower()` → `hello` → matches. Students who "know" Python is case-sensitive still forget this in practice.
- Foreshadow the ordering rule you'll hit in the build: specific keywords before general ones.

---

### Part 4: BUILD BrightByte Buddy Together (22 minutes)

The centrepiece. Everyone opens a new trinket named `Y2-T5-W4-Chatbots`. Build incrementally, running after EACH step:

1. **The loop + quit** — `while True`, `input()`, `.lower()`, and the `bye` → `break` branch. Run it: type `bye`, confirm it stops. (If it doesn't stop, you forgot `break` — teachable moment.)
2. **Greeting** — add the `hello`/`hey` branch. Run, type "Hello".
3. **Name** — add the `name` branch. Run, test.
4. **Joke** — add the `joke` branch (two prints). Run, test.
5. **The `else` fallback** — add it last and highlight it: "This is the bot admitting it has no keyword. This fallback is the WHOLE point — the bot only knows what we told it."

After each step: **thumbs up in Zoom.** Collect a live sense of who's keeping up.

**The ordering lesson:** when you add `how are you` before `hello`, explain that `elif` stops at the first match, so specific goes before general. Demo: type "hello, how are you?" and show which branch wins.

#### Trace the conversation as a class
Once bots work, walk the exact traced conversation from the lesson. For the "capital of Ghana?" line, pause:

> "Watch — the bot has NO idea. It hits the `else`. It's not stupid; it just only knows its keywords. Hold that thought, because the big AIs handle this VERY differently."

#### Teaching Tips
- **Live-code, don't paste.** Typos are teaching gold — narrate fixing them.
- **Common student errors to expect:** missing colon after `elif`, indentation drift, forgetting `break`, matching against `message` instead of `text`. Circulate via shared screens / chat.
- **Fast finishers:** point them at adding a keyword now (homework Path 1 head start).

---

### Part 5-6: How LLMs Work + Next-Word Game + Comparison (12 minutes)

Now the reveal. Deliver the core line clearly and slowly:

> "A Large Language Model — the tech behind ChatGPT — plays guess-the-next-word, millions of times a second. It's a super-powered autocomplete. That's the secret."

#### The Next-Word Game (unplugged, ~4 min)
Type a sentence start in chat, stop, let the class race to predict the next word:
- "The cat sat on the ___"
- "Once upon a ___"
- "Better late than ___"

Then land it: "That thing your brain just did — predict from patterns — is exactly what an LLM does. It just has way more patterns and does it far faster."

#### The Comparison Table (~5 min)
Walk the keyword-bot vs LLM table. Hit the two honest rows hardest:
- **Can be confidently wrong?** Bot says "I don't know"; LLM can invent.
- **Does it understand you?** BOTH: no. One matches, one predicts.

#### Teaching Tips
- Avoid over-mystifying. The whole power of this lesson is demystifying: it's prediction, not magic, not a mind.
- If a student asks "but it seems so smart!" — validate it: "It IS impressive. Impressive prediction is still prediction, not knowing."

---

### Part 7: Hallucinations + AI Discussion (10 minutes)

Introduce **hallucination** with a plain definition: a confident, made-up answer. Explain the cause simply:

> "The LLM's job is 'what word probably comes next?' — NOT 'what is true?'. Likely and true are not the same thing. So sometimes it produces something that sounds perfect and is totally wrong."

Run the `ai_activities` discussion in the Zoom chat: strengths, limits, and "so what?" Land the takeaway:

> "Confidence is not correctness. YOU are the fact-checker. Never paste an AI answer into your homework without checking it against a trusted source."

#### Teaching Tips
- Keep the tone empowering, not fear-mongering: AI is a powerful tool used wisely, not a liar to fear.
- This is the on-ramp to Week 6 (Ethics) and Week 7 (Investigation Report). Name that link.

---

### Part 8: Common Mistakes + Homework + Wrap (13 minutes)

#### Common Mistakes (5 min)
Live-run the two code bugs so students see them fail:
1. **No `.lower()`** — capitals don't match
2. **No `break`** — the loop never ends (in Trinket, they'll see it keep asking; show how to stop it)

Reinforce the two misconceptions verbally: "the bot understands me" (it matches) and "LLMs are always right" (they hallucinate).

#### Homework (5 min)
Walk both paths and the tiers. Emphasise choice: coders extend the bot (Path 1); students who prefer explaining take Path 2. Both are valid "done."

> "⭐ is the mission. ⭐⭐ makes it richer. ⭐⭐⭐ needs a second `input()` inside a keyword branch — genuinely for the brave."

Flag the **Week 7 tie-in**: the AI they use at home is a great Investigation Report subject; start noticing its strengths and mistakes now.

#### Wrap-Up (3 min)
> "Today you built a chatbot AND learned the secret behind ChatGPT — it predicts the next word, brilliantly, but it doesn't KNOW anything. Next week: is AI always fair? That's where it gets really interesting."

Stay on the call 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Built a `while True` loop that reads input and quits on `bye` with `break`
- [ ] Added at least two working keyword branches with `elif`
- [ ] Used `.lower()` for reliable matching
- [ ] Understood the `else` fallback as "the bot has no keyword for this"

**Conceptual Understanding:**
- [ ] Can state an LLM predicts the next word ("super-powered autocomplete")
- [ ] Can name one thing a keyword bot can't do that an LLM can
- [ ] Can define a hallucination and why to fact-check

**Engagement:**
- [ ] Used thumbs-up reactions during the build
- [ ] Participated in the next-word game and the trust discussion

### Students to Watch

**Need Extra Support:**
- Struggled with loop/indentation/`break` — pair-share the solution code; revisit `while` from Term 2
- Confused "bot understands me" — reinforce with the traced `else` example

**Ready for More Challenge:**
- Finished the build fast — push them to the ⭐⭐⭐ tier (a keyword branch with a nested `input()`), and to start planning their Week 7 report subject

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Bot never stops (infinite loop) | Missing `break` after the `bye` reply — most common bug; show them where it goes |
| Keyword ignores capitals | They matched against `message`, not `message.lower()` — add `text = message.lower()` |
| Two branches "fight" (wrong reply wins) | `elif` stops at first match — reorder specific keywords above general ones |
| `IndentationError` / `SyntaxError` on `elif` | Check the colon and that every branch body is indented consistently |
| Student asks to call a "real AI API" | Trinket has NO internet — real APIs can't run here. That's Term 6 (APIs). Today everything is simulated in plain Python |
| "But the AI IS smart / does understand" debate | Validate the impressiveness, then restate: impressive prediction is still prediction, not understanding |
| Input prompt not accepting typing | Click into the Trinket console/output area first; confirm before the build starts |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Build success:** did everyone get a working, quitting bot? Who needs a loop/`while` refresher?
- **Concept grip:** could the class articulate "predicts the next word"? If shaky, reopen it next week before bias builds on it
- **Discussion depth:** how sceptical/trusting is the class about AI? This calibrates the Week 6 Ethics tone
- **Report seeds:** which students already have an AI tool in mind for the Week 7 Investigation Report?

---

## 💭 Remember

**The magic of this lesson is DE-magic-ing AI.**

If students leave believing an LLM is a mysterious thinking mind, the lesson failed. If they leave saying "it's guessing the next word from patterns, and it can be confidently wrong, so I check its answers" — the lesson succeeded, and they're ready to investigate bias, ethics, and their own report.

Build first. Reveal second. Fact-check always. 💬🧠

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
