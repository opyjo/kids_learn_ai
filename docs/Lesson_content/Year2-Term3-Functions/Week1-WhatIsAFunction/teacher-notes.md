# Year 2, Lesson 1: What Is a Function? 🧩🐍

## Teacher's Guide

**Course:** Functions (Year 2, Term 3)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This is the first lesson of Term 3 and the students' **first encounter with user-defined functions** (`def`). Until now, every program they've written runs top to bottom, once. This lesson introduces a genuinely new mental model: you can bundle code, give it a name, and run it on demand. That shift is the whole point — the syntax is easy, but the *idea* ("code I can name and reuse") is what needs to land.

The session has three core goals:

1. **Make the idea concrete before the syntax** — start from the pain of copy-pasted code so students *want* a function before they learn how to write one
2. **Separate DEFINE from CALL cleanly** — the single most common early confusion is thinking that writing `def` runs the code. Hammer the recipe-vs-cooking metaphor
3. **Build fluency through repetition** — define, call, call again, call in a loop. By the end everyone should comfortably write a no-argument function and call it multiple times

Keep parameters and return values OUT of today entirely. Those are Weeks 2 and 3. Today is *only* `def name():` + indented body + `name()`.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain in their own words that a function is a named, reusable chunk of code
2. Define a no-argument function using `def`, a name, `()`, `:`, and an indented body
3. Call a function to run it, including calling it multiple times and inside a loop
4. Explain why functions help (DRY, organisation, naming a chunk)
5. Apply the "define before you call" rule and recognise the `NameError` when it's broken

### Key Success Metrics

- [ ] Every student defines and calls at least one function in Trinket
- [ ] Every student completes the Function Factory (banner turned into a function, called 3 times)
- [ ] Students can answer "what does calling `greet()` twice print?" correctly
- [ ] Students can articulate the difference between defining and calling

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Students' existing Trinket accounts; the class starter code ready to share (`Y2-T3-W1-Functions`)
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Load the starter code** into a Trinket and have the share link ready to paste in chat
3. **Rehearse the "nothing prints" moment** — you'll define a function and run it to show it produces NO output. This surprise is a teaching centrepiece; make sure it lands
4. **Have the four error messages ready to live-demo** (missing `()`, call-before-define, missing `:`, missing indent) — students learn errors best by seeing them happen live
5. **Prepare the Text Adventure hook** — one or two scene names (`forest()`, `dragon()`) to make the term's project vivid

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome to Term 3 + the copy-paste problem
⏱️  8-20 min  → DEFINE a function (def) + the "nothing prints" surprise
⏱️ 20-35 min  → CALL a function: once, many times, in a loop
⏱️ 35-45 min  → Order matters + common mistakes (live errors)
⏱️ 45-60 min  → THE FUNCTION FACTORY (class activity)
⏱️ 60-75 min  → Text Adventure hook + Week 2 teaser + homework + wrap
```

**Flexible timing:** The Function Factory is the heart of the lesson — protect its 15 minutes. If you're short on time, trim the toolbox example in Part 5, not the activity.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome to Term 3 + The Copy-Paste Problem (8 minutes)

Open with energy — this is a new term and a new superpower.

> "New term, new power. So far every program you've written runs from the top to the bottom, once. Today you learn to build your OWN commands — bundle up code, name it, and run it whenever you like. But first, let me show you a program that annoys every programmer alive."

Screen-share the repeated-banner program from Part 1. Run it. Then ask:

> "What do you notice that's... wasteful about this code?"

Guide them to spot the copy-paste. Introduce **DRY — Don't Repeat Yourself** as the motivation. This "want" is essential: students who feel the pain of repetition understand *why* functions exist, not just *how*.

#### Teaching Tips

- **Sell the problem before the solution.** Resist jumping to `def`. Let them stew on the ugliness of copy-paste for a minute.
- Ask: "If I wanted to change WELCOME to HELLO, how many places would I edit?" — the answer (two, and more in a bigger program) makes the case for you.

---

### Part 2: Defining a Function + the "Nothing Prints" Surprise (12 minutes)

Live-code the definition on screen, narrating each piece:

> "def — that's short for DEFINE. welcome_banner — that's the NAME I picked. The empty brackets — we'll fill those next week. The colon — same as if and for. And then the indented body — the code that runs when we call it."

```python
def welcome_banner():
    print("*" * 20)
    print("   WELCOME! 🎉")
    print("*" * 20)
```

Now the key moment: **run it and let them see nothing happens.**

> "I'm going to run this. Watch the output panel... nothing! Why? Because DEFINING a function doesn't RUN it. I've written the recipe card — I haven't cooked the meal. To cook, I have to CALL it. That's next."

Use the **recipe metaphor** relentlessly today: `def` = writing the recipe; calling = actually cooking.

#### Teaching Tips

- **The empty output is the lesson.** Pause on it. Ask the class to predict what will print *before* you run — many will expect the banner. The gap between expectation and reality is where learning happens.
- Map `def ...:` onto structures they already know: "The colon and the indented block? You've seen that with `if`, `for`, and `while`. Same shape."

---

### Part 3: Calling a Function (15 minutes)

Add the call and run it:

```python
def welcome_banner():
    print("*" * 20)
    print("   WELCOME! 🎉")
    print("*" * 20)

welcome_banner()
```

Explain the "jump": Python reads down, hits the call, jumps up into the function, runs the body, comes back. Trace it with your cursor on screen.

Then show the payoff — the same output as Part 1 but with the banner code written **once**, called twice, with a menu line between. Emphasise: *change the function once, every call updates.*

Finally, the loop:

```python
def cheer():
    print("Go, coders, go! 📣")

for i in range(3):
    cheer()
```

> "Loops and functions are best friends. One tiny function, three cheers, barely any typing."

#### Teaching Tips

- **Have them predict counts.** "If I call it twice, how many banners?" "If the loop runs 3 times?" Prediction keeps them active.
- **This is where fluency builds.** Give them 3-4 minutes to type along in Trinket: define `cheer()`, call it once, then in a loop. Thumbs-up when it works.

---

### Part 4: Order Matters + Common Mistakes (10 minutes)

Live-demo **all four errors** — seeing the real messages is far more memorable than reading them.

> Demo 1 — **call before define:**
```python
cheer()

def cheer():
    print("Go, coders, go! 📣")
```
> → `NameError: name 'cheer' is not defined`. "Python read the call first and had no idea what cheer was. Fix: define first, call second. Put all your defs at the top."

> Demo 2 — **forgetting `()` when calling:** write `cheer` with no brackets. Nothing runs. "The brackets mean RUN IT NOW."

> Demo 3 — **missing colon:** `def greet()` → `SyntaxError: expected ':'`.

> Demo 4 — **missing indent:** body flush-left → `IndentationError: expected an indented block`.

Frame errors positively:

> "Every single programmer sees these errors — I still do! An error isn't failure, it's Python telling you exactly what to fix."

#### Teaching Tips

- **Read error messages aloud and decode them.** Teaching students to *read* the error ("it says expected a colon — so I add a colon") is a skill that pays off all year.
- Keep "define at the top" as the takeaway rule — it prevents the `NameError` entirely.

---

### Part 5: THE FUNCTION FACTORY (15 minutes)

The centrepiece activity. Paste the starter Trinket link in chat. Frame it:

> "You're going to take that ugly copy-pasted banner and factory-pack it into ONE function. Then call it as many times as you like."

Walk the three steps, but let students drive:

- **Step 1 (Spot the Repeat):** they count the copy-pasted lines and post in chat — quick, gets everyone participating.
- **Step 2 (Build the Function):** they wrap the banner in `def welcome_banner():` and indent it. **Then they run it and get nothing** — this deliberately re-teaches the define-vs-call point. Ask in chat: "why is nothing printing?" Let *them* remember the answer.
- **Step 3 (Call It 3 Times):** three calls, then convert to a loop. Thumbs-up when banners appear.

Then the **Zoom-chat challenge**: "If `greet()` does `print("Hi!")`, what does calling it twice print?" Have them answer *before* running. The correct answer is `Hi!` on two separate lines. Common wrong guesses: "HiHi" (one line) or "Hi! 2 times". Address these directly — each call runs the whole body fresh.

#### Teaching Tips

- **Circulate via shared screens.** Ask a confident student (Ama, Kofi) to share their factory. Ask a student who converted to a loop to show it.
- **Watch for the missing `()`.** The #1 activity bug will be students writing `welcome_banner` with no brackets and wondering why nothing runs.
- **Fast finishers:** point them at the ⭐⭐⭐ homework idea early — a function that calls another function.

---

### Part 6: Text Adventure Hook + Week 2 Teaser + Homework (to 75 min)

#### The Term Project (3 minutes)

Make the payoff vivid:

> "Here's where this is going. This term you're building a TEXT ADVENTURE — a story game where the player types choices and travels between scenes. Spooky forest, hidden cave, dragon's lair. And the secret? EACH SCENE is a function. forest(), cave(), dragon(). The game moves the player by calling the right scene. Today you learned the exact building block that whole engine is made of."

#### Week 2 Teaser (2 minutes)

> "Right now your function always does the same thing. welcome_banner always says WELCOME. But what if greet could say hello to a specific person — greet('Ama'), greet('Kofi')? Same function, different result. That's next week: PARAMETERS. We fill those empty brackets with information."

#### Homework: My Toolbox (4 minutes)

Walk through the requirements and example run. Stress the tiers:

> "⭐ is three functions defined and called. ⭐⭐ adds a loop. ⭐⭐⭐ — a function that CALLS ANOTHER function inside it. That one's for the brave, and it's a real taste of Week 5."

Paste submission instructions and set the due date.

#### Wrap-Up (2 minutes)

> "Today you crossed a big line. Your code no longer just runs once, top to bottom — YOU decide when it runs and how often, by naming it and calling it. That's thinking like a programmer. See you next week for parameters!"

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Defined a function with correct syntax (`def`, name, `()`, `:`, indent)
- [ ] Called a function successfully (with `()`)
- [ ] Called a function multiple times and/or inside a loop
- [ ] Fixed at least one of the four common errors independently

**Conceptual Understanding:**
- [ ] Can explain that defining ≠ running
- [ ] Answered the "greet() twice" challenge correctly
- [ ] Can say (in their words) why functions are useful

### Students to Watch

**Need Extra Support:**
- Still thinks `def` runs the code — re-do the recipe metaphor 1:1; have them run a define-only program and a define+call program back to back
- Consistently forgets `()` on the call — a quick habit, but flag for a nudge next week

**Ready for More Challenge:**
- Finished the Factory + loop early — push the ⭐⭐⭐ homework (function-calls-function) and hint at parameters

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "I ran it and nothing happened!" | They defined but didn't call — the exact lesson point. Ask them to add `functionname()` below. Celebrate: "You found out yourself why calling matters!" |
| `NameError: name '...' is not defined` | Function is called before it's defined (or the name is misspelled/mis-cased). Move the `def` above the call; keep all defs at the top. |
| `SyntaxError: expected ':'` | Missing colon after the `def ...()` line. |
| `IndentationError: expected an indented block` | Function body isn't indented. 4 spaces under the `def`. |
| Function runs once when they wanted it several times | They wrote the call once — show that each `name()` line (or each loop pass) runs the body again. |
| Student asks about putting words in the brackets | Great instinct! "That's parameters — exactly next week. Today we keep the brackets empty." Don't teach it yet. |
| Trinket/Zoom technical issues | Same playbook as always: repl.it backup link in chat, private-chat triage, pair with a neighbour. |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept check:** did the define-vs-call distinction land, or do several students still think `def` runs the code? (This is the make-or-break idea for the whole term.)
- **Fluency:** could everyone write `def name():` + call it without help by the end?
- **Support list:** who needs a nudge before Week 2 (parameters build directly on today)?
- **Timing:** did the four error demos run long? Trim to two next time if so.

---

## 💭 Remember

**Today the idea matters more than the syntax.**

The syntax of `def` is easy and students pick it up fast. The genuinely new thing is the *mental model*: code can be named, stored, and run on demand — as many times as you like. If students leave able to explain "defining writes the recipe, calling cooks it," and they've called a function inside a loop with their own hands, the term is off to a strong start. Parameters (Week 2) and return values (Week 3) build directly on this foundation.

**Keep it playful, keep it repetitive, and let them feel the copy-paste pain first.** 🧩

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
