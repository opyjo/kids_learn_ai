# Year 2, Lesson 2: Data Types & Conversion — Solving the Crash Mystery! 🕵️🔢

## Teacher's Guide

**Course:** Python Accelerated (Year 2, Term 1)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

This is the payoff lesson. Week 1 deliberately ended on a cliffhanger — the `input() + 1` crash — and today you resolve it. That narrative arc matters: students who watched the crash last week arrive genuinely curious, and curiosity is the best teaching condition you'll get all term. The session has three core goals:

1. **Solve the mystery memorably** — students should leave able to explain, in their own words, why `"12"` and `12` are different things and why `input()` always returns a string
2. **Make `int(input(...))` automatic** — this pattern is load-bearing for the entire term (the Smart Calculator cannot exist without it); students must type it, not just watch it
3. **Plant the Week 5 seed** — students should SEE a `ValueError` from a bad conversion and know a defence is coming, without you teaching that defence today

Conceptually this is the most abstract lesson of the first half-term. "Types" are invisible — lean hard on the concrete demos (`"12" + "12"` vs `12 + 12`) and the detective framing to keep it tangible.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Name the three core data types (`str`, `int`, `float`) and sort example values into them
2. Use `type()` to inspect any value or variable
3. Explain that `input()` always returns a string, even when the user types digits
4. Convert between types using `int()`, `float()`, and `str()`, including the `int(input(...))` pattern
5. Predict whether `+` will glue or add based on the operand types
6. Recognise a `ValueError` from a failed conversion (recall level only — handling comes in Week 5)

### Key Success Metrics

- [ ] Every student runs the crash, then runs the fixed version, in their own Trinket
- [ ] Most students correctly predict `type("42")` is a string by Round 1 of Type Detective
- [ ] Every student completes the Dog Years mini build with a working `int(input(...))`
- [ ] Students can answer "what does input() give you?" in chorus by the end: "A STRING!"

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Your own Trinket ready with the Week 1 crash program pre-typed (the "crime scene")
- The Type Detective snippets ready to paste one at a time (prepare them in a text file)
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-type the crime scene** in a Trinket named `Y2-T1-W2-DataTypes` so the lesson opens with zero typing delay:
   ```python
   age = input("How old are you? ")
   print(age + 1)
   ```
3. **Prepare the Type Detective snippets** in a text file for fast pasting (see Part 5 below)
4. **Review Week 1 homework submissions** ("Year 2 Me") — pick 2-3 to praise by name in the warm-up
5. **Check your support list from Week 1** — plan to watch those students during the mini build
6. **Rehearse reading the TypeError aloud** — modelling calm error-reading is half of today's hidden curriculum

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-5  min  → Welcome + homework shout-outs
⏱️  5-15 min  → Part 1: Reopen the crash mystery (crime scene, live)
⏱️ 15-30 min  → Parts 2-3: The three types + type() + text glue vs real maths
⏱️ 30-40 min  → Parts 4-5: The converters + when conversion fails (ValueError)
⏱️ 40-60 min  → Type Detective game + Dog Years mini build
⏱️ 60-75 min  → Calculator puzzle piece + AI discussion + homework + wrap-up
```

**Flexible timing:** The mini build (Round 3) is the non-negotiable heart — every student must type `int(input(...))` with their own hands. If you're running late, shorten Type Detective Rounds 1-2 to three snippets each and trim the AI discussion, never the build.

---

## 📚 Detailed Teaching Guide

### Part 0: Welcome + Homework Shout-Outs (5 minutes)

Greet students by name. Praise 2-3 "Year 2 Me" homework programs specifically ("Zara's had a star border AND an if — that was the ⭐⭐⭐ tier!"). Then set the hook:

> "Last week I showed you a program that crashed, and I refused to tell you why. Some of you have been wondering all week. Today... we solve it. Detective hats on."

---

### Part 1: Reopen the Crash Mystery (10 minutes)

Screen-share your pre-typed crime scene and run it. Type `12` when it asks. Let the TypeError land in silence for a beat, then read it aloud slowly:

> "TypeError: can only concatenate str... not int... to str. Python is telling us EXACTLY what went wrong — in detective language. 'Concatenate' — who remembers that word from last week? Text glue! Python thinks we asked it to GLUE something. But we wanted to ADD. Why?"

Take theories in the Zoom chat (the lesson has a discussion prompt for this). Someone usually gets close — "maybe the age is text?" Praise every theory, then reveal:

> "Here is the twist that solves the whole case: to Python, twelve-in-quotes and twelve-without-quotes are two COMPLETELY different things. Let me prove it."

Do NOT explain the fix yet. Curiosity should stay open until Part 3 ends.

#### Teaching Tips

- **Have students run the crash themselves** in their own Trinket (`Y2-T1-W2-DataTypes`). Owning the crash makes owning the fix sweeter.
- **Model error-reading calmly.** Many students still see red text as "I failed." Narrate the opposite: "Errors are Python leaving us clues. Good detectives READ the clues."

---

### Part 2: The Three Types + type() (10 minutes)

Introduce `str`, `int`, `float` with the lesson's table. The single most important sentence of the day:

> "The quotes are everything. Twelve in quotes is TEXT that happens to look like a number. Twelve without quotes is a REAL number Python can do maths with."

Then hand them the gadget. Live-code:

```python
print(type("hello"))
print(type(12))
print(type(12.5))
print(type("12"))
```

Pause dramatically before running the last line:

> "Chat prediction: what will type of quote-one-two-quote say?"

Expect a split — that's perfect. Run it, show `<class 'str'>`, and let the aha happen.

Then the smoking gun. Live-code and type `7`:

```python
answer = input("Pick a number: ")
print(type(answer))
```

> "I typed a NUMBER. Python says... string. Here's the rule, and it has no exceptions: input() ALWAYS gives you a string. Always. Even if the user types a number. Why? Because input() can't guess what a human will type — so it plays safe and hands you everything as text. THAT is why last week's program crashed. Case solved!"

Thumbs-up checkpoint: "Give me a thumbs up if you can now explain the crash to a Year 1 student."

#### Teaching Tips

- **Don't over-explain `<class 'str'>` syntax** — "Python's way of saying 'this is a str'" is enough. The word after `class` is the answer; ignore the rest.
- **Float trap:** a student may ask why `12.0` is a float when it's "really" a whole number. Answer: "The decimal point is what makes it a float — Python judges by the costume, not the value."

---

### Part 3: Text Glue vs Real Maths (5 minutes)

The most memorable demo of the day. Live-code:

```python
print("12" + "12")
print(12 + 12)
```

Output `1212` then `24` — same symbol, different job. Land the rule:

> "Plus with two strings is GLUE. Plus with two numbers is MATHS. And plus with one of each? Python refuses — that's our TypeError. The TYPES decide what the symbol does."

Quick bonus if energy is high: `print("Ha" * 3)` → `HaHaHa`. They know `*` repetition from Year 1; framing it as "types decide behaviour" makes it click deeper.

---

### Part 4: The Converters (10 minutes)

Now — finally — the fix. Build the suspense:

> "You've waited a week for this. The fix is ONE word."

Live-code the repaired program:

```python
age = int(input("How old are you? "))
print(age + 1)
```

Run it, type `12`, get `13`, and celebrate. Then unpack the line inside-out (input runs first → gives `"12"` → `int()` converts → variable stores the real number). Have EVERY student type and run this themselves before moving on — this is the pattern the whole term leans on.

Cover the other two converters briskly:

- `float()` — for decimals; use the jollof rice price example from the lesson (`12.5 * 3` → `37.5`)
- `str()` — the reverse direction; `"Your score is " + str(score) + "!"`. Point out that the comma style (`print("score:", score)`) avoids the need, but with `+` you must convert.

Drop the sneaky fact: `int(9.9)` is `9` — int() chops, it never rounds. Kids love this one; it resurfaces in Week 6 when the calculator formats results.

#### Teaching Tips

- **Some students will nest brackets wrong** — `int(input("...")` with a missing `)` is the top syntax error of the day. Teach the count-the-brackets check: two opens need two closes.
- **Alternative for strugglers:** show the two-line version — `age = input("...")` then `age = int(age)` — it's the same logic with training wheels. Both are correct.

---

### Part 5: When Conversion Fails (5 minutes)

Run `int("hello")` live and show the ValueError:

```
ValueError: invalid literal for int() with base 10: 'hello'
```

Then connect it to their own programs — run the fixed age program and type `twelve`:

> "Our beautiful fixed program... and one silly user kills it. Is that the user's fault? No — it's OUR job to build programs that survive silly users. How? That is Week 5's entire lesson — the 'bouncer' pattern that checks input at the door. For today, just recognise this error: ValueError means 'you asked me to convert something unconvertible.'"

This mirrors the Week 1 → Week 2 cliffhanger technique. Leave it open. Do NOT teach `.isdigit()` today, even if a strong student asks — say "hold that thought until Week 5" and note their name as a challenge-ready student.

---

### Part 6: Type Detective + Dog Years Mini Build (20 minutes)

The centrepiece. Frame it:

> "Detective exam time. I show code — you predict in the chat BEFORE anyone runs anything. No guessing after the reveal!"

#### Round 1 — Predict the Type (⭐, ~5 minutes)

Paste one at a time; students answer `str` / `int` / `float` in chat:

1. `type("hello")` → str
2. `type(42)` → int
3. `type(3.5)` → float
4. `type("42")` → str — **the trap**; expect wrong answers, celebrate the trap openly
5. `type(input("Pick a number: "))` → str even when you type 7 — run this one live for drama

#### Round 2 — Glue or Maths? (⭐⭐, ~5 minutes)

Exact-output predictions:

1. `print("5" + "5")` → `55`
2. `print(5 + 5)` → `10`
3. `print(int("5") + int("5"))` → `10`
4. `print("Ha" * 3)` → `HaHaHa`

Snippet 3 is the diagnostic: students who get it have genuinely understood conversion, not just memorised the crash story.

#### Round 3 — Dog Years Mini Build (⭐⭐⭐, ~10 minutes)

Students build independently in their own Trinket:

```python
age = int(input("How old are you? "))
dog_age = age * 7
print("In dog years, you are", dog_age, "years old! 🐶")
```

Thumbs up when it runs. Fast finishers do the bonus (`18 - age` years-until-18, then `type()` proof prints) while you privately help stragglers — the missing-bracket error will be the main casualty.

#### Teaching Tips

- **The chat-prediction format is your assessment.** Skim the predictions — wrong answers on snippet 4 (Round 1) or snippet 3 (Round 2) tell you exactly who needs a nudge before Week 5.
- **Don't rescue too fast in Round 3.** A student who fixes their own bracket error learns more than one who has it fixed for them. Offer the two-line version as the scaffold, not the answer.

---

### Part 7: Calculator Tie-In + AI Discussion + Homework (10 minutes)

#### Calculator Puzzle Piece (3 minutes)

> "Term mission check. The Smart Calculator takes numbers from the user. Without today, it would GLUE text — ask it for 12 plus 12 and it would proudly say 1212. You just collected the first real puzzle piece: turning user text into real numbers. Next week: power maths."

Show the puzzle-piece table from the lesson if time allows.

#### AI Discussion (3 minutes)

Use the `ai_activities` prompt: AI models also need data in the right form — words, photos, and songs all become NUMBERS before an AI can learn from them. Ask the chat question ("bigger pixel number — brighter or darker?"), take a few guesses, then reveal that in most image formats bigger means brighter. Land the connection:

> "When you converted quote-twelve into real twelve today, you did the same job data scientists do every day — getting data into the right form BEFORE the maths begins."

#### Homework: Number Cruncher (4 minutes)

Walk through requirements and the example run. Emphasise: **no text glue allowed** — every numeric answer must be converted. Point at the tiers:

> "⭐ is the mission. ⭐⭐ needs a float question — think prices or heights. ⭐⭐⭐ prints type() before and after conversion — proof of transformation, like a before/after photo."

Paste submission instructions in the chat. Set the due date.

#### Wrap-Up (2 minutes)

> "One week ago that red error was gibberish. Today you read it, explained it, and fixed it with one word. Chorus time — what does input() always give you? ... A STRING! See you next week for Maths Power-Ups."

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Correctly predicted `type("42")` is a string (or self-corrected after the reveal)
- [ ] Predicted `int("5") + int("5")` gives `10` (deep understanding marker)
- [ ] Built the Dog Years converter with a working `int(input(...))` independently
- [ ] Can articulate WHY the Week 1 program crashed (ask 2-3 students to explain in their own words)

**Engagement:**
- [ ] Participated in chat predictions across both detective rounds
- [ ] Used Zoom reactions at checkpoints
- [ ] Attempted the bonus build (strong students)

### Students to Watch

**Need Extra Support:**
- Still writing `input()` without conversion in the mini build — pair the two-line scaffold with a 5-minute check-in before Week 3
- Predicted "int" for `type("42")` AND `type(input(...))` — the quotes rule hasn't landed; revisit 1:1

**Ready for More Challenge:**
- Asked about handling the `twelve` crash — they're reaching for Week 5; point them at the ⭐⭐⭐ homework tier and hint they can explore `"12".isdigit()` on their own (don't teach it to the class)
- Finished the bonus build early — challenge: "make a program that asks TWO numbers and prints their real sum AND their glued version, side by side"

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student's fix "doesn't work" — usually a missing `)` in `int(input(...))` | Teach the bracket-count check: two opens, two closes; or switch them to the two-line version (`age = input(...)` then `age = int(age)`) |
| Student types letters during the mini build and hits ValueError | Perfect teaching moment — "you just previewed Week 5!" Reassure that crashing on silly input is expected for now |
| Class confuses `type()` with conversion (`type(age)` "changes" age) | Clarify with the detective metaphor: `type()` only LOOKS (inspector); `int()` actually TRANSFORMS (converter) |
| Predictions in chat are all copy-pasted from the first answer | Ask for answers via Zoom's private chat to you instead, or use a quick reaction poll (thumbs up = str, heart = int) |
| Lesson runs long | Cut Round 2 of Type Detective to snippets 1 and 3, and move the AI discussion to the first 5 minutes of Week 3 — never cut the mini build |
| Zoom/Trinket technical issues | Same playbook as Week 1: repl.it backup link, browser-window-only screen share, private-chat triage |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept landing:** could most students explain the crash in their own words? If not, open Week 3 with a 5-minute re-run of the glue-vs-maths demo before touching new operators.
- **Prediction accuracy:** how did the class do on `type("42")` and `int("5") + int("5")`? These calibrate how much conversion revision Weeks 5-6 need.
- **Support list update:** who struggled with `int(input(...))`? They MUST be solid on it before Week 6's calculator build begins.
- **Curiosity levels:** who asked about defending against ValueError? Note them — they're your Week 5 demo volunteers.

---

## 💭 Remember

**Today's goal is one sentence, owned by every student: "input() gives me a string, so I convert it before doing maths."**

Everything else — float edge cases, str() gluing, ValueError — is scaffolding around that sentence. If they leave saying it confidently, the Smart Calculator is already half-built in their heads.

**Case closed — you've got this!** 🕵️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
