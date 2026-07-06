# Year 2, Lesson 2: Parameters: Passing Things In 📥🔧

## Teacher's Guide

**Course:** Functions (Year 2, Term 3)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

Last week students defined and called their first **no-argument** functions with `def`. They can package code into a reusable block — but every call produces the *same* output. This lesson removes that ceiling. Parameters are the single most important idea for making functions genuinely useful, and they unlock the entire Text Adventure project (scenes that greet the player by name, rooms that react to what the player carries).

The whole lesson turns on one motivating frustration: **"greet() always says the same thing."** Keep coming back to that. Every new idea — one parameter, many parameters, parameters in loops — is a direct answer to "how do I make this function do its job on *different* data?"

Three core goals:

1. **Motivate parameters through frustration** — show the stuck `greet()` first, so the fix feels like a relief, not an abstract rule
2. **Build the parameter/argument vocabulary gently** — introduce the words, but don't gate progress on perfect usage
3. **Cement "order matters"** — the positional-argument rule is where students trip; the `introduce(12, "Ama")` demo makes it visceral

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain why a no-parameter function is limited (always the same output)
2. Define a function with one parameter and call it with different arguments
3. Distinguish a parameter (name in the `def`) from an argument (value passed in) at recall level
4. Write a function with multiple parameters and predict the effect of argument order
5. Call a function repeatedly inside a loop, passing a different argument each time
6. Read and fix the two key errors: `missing 1 required positional argument` and `takes 1 positional argument but N were given`

### Key Success Metrics

- [ ] Every student converts `greet()` into `greet(name)` and calls it with two names
- [ ] Most students write a two-parameter function (`greet_person`) correctly
- [ ] Students can predict what `greet("Kofi")` prints without running it
- [ ] Students recognise the missing-argument TypeError and know how to fix it

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Students' Trinket accounts
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Have last week's `greet()` ready to screen-share** — you'll open by showing the "stuck on repeat" problem live
3. **Pre-type the `introduce(12, "Ama")` swap demo** — the wrong-order output is the lesson's "aha" moment; have it ready to run instantly
4. **Prepare the three error demos** — missing argument, too many arguments, no-quotes NameError. Run them live; students must SEE the real messages
5. **Reminder of the Trinket naming convention** — `Y2-T3-W2-Parameters`
6. **Recall the adventure tie-in** — be ready to connect parameters to "the player's name in a scene"; this keeps the term's big project alive in students' minds

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap last week + the "stuck greet()" problem
⏱️  8-20 min  → One parameter: passing a value in (live-code)
⏱️ 20-30 min  → Parameter vs argument vocab + multiple parameters
⏱️ 30-40 min  → Order matters demo + parameters in a loop
⏱️ 40-55 min  → Class Activity: The Personalised Greeter (3 rounds)
⏱️ 55-65 min  → Common mistakes (live errors) + adventure tie-in
⏱️ 65-75 min  → Homework brief + Week 3 (return) teaser + wrap-up
```

**Flexible timing:** If the class is confident, compress the vocab section and give the activity its full 15 minutes. The activity is where parameters actually *stick*.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + The Stuck Function (8 minutes)

Open by screen-sharing last week's greeter and running it twice:

```python
def greet():
    print("Hello, friend!")

greet()
greet()
```

> "Look — same thing, twice. Same thing a HUNDRED times if I called it a hundred times. What if I want to greet Ama, then Kofi, then Zara? Do I write three functions? That would be ridiculous. There has to be a better way — and there is."

This frustration is the engine of the whole lesson. Don't rush past it. Ask the class in chat: *"How could we make greet say a different name each time?"* — take a couple of guesses before revealing parameters.

#### Teaching Tips

- **Sell the problem before the solution.** If students feel the pain of the stuck function, the parameter lands as an obvious, satisfying fix.
- Reassure anyone shaky on last week: "If `def` still feels new, that's fine — today reinforces it."

---

### Part 2: One Parameter (12 minutes)

Live-code the fix, narrating every part:

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Ama")
greet("Kofi")
```

Use the **labelled slot** metaphor out loud: "`name` is an empty box. When I call `greet("Ama")`, the value `"Ama"` gets poured into that box. Inside the function, `name` now IS `"Ama"`."

Run it. Two different greetings from one function. Let that satisfaction register — invite thumbs up.

Then have students do it themselves in Trinket immediately (this is Round 1 of the activity brought forward, essentially). Circulate via shared screens.

#### Common Confusions

- **"Where does `name` get its value?"** — Only when the function is *called*. The `def` line just names the slot; the call fills it.
- **Quotes** — some will type `greet(Ama)` without quotes. Note it now; you'll formalise it in Mistake 4.

---

### Part 3: Vocab + Multiple Parameters (10 minutes)

Introduce the two words with the table from the lesson. Keep it light:

> "Parameter is the name in the def — the plan. Argument is the actual value you hand over. Even pros mix these up, so don't stress. But knowing them helps you read error messages."

Do the chat check: "In `greet('Zara')`, which is the parameter, which is the argument?"

Then extend to multiple parameters:

```python
def add_scores(a, b):
    print(a + b)

add_scores(10, 5)     # prints 15
```

Emphasise the comma-separated slots and that arguments fill them **in order**.

---

### Part 4: Order Matters + Loops (10 minutes)

This is the highest-value demo of the lesson. Run the correct version:

```python
def introduce(name, age):
    print(f"{name} is {age} years old.")

introduce("Ama", 12)      # Ama is 12 years old.
```

Then swap the arguments live:

```python
introduce(12, "Ama")      # 12 is Ama years old.
```

> "It didn't crash! Python did EXACTLY what I said — it just put the wrong things in the wrong slots. This is the sneaky bug: no error, just nonsense output. Always check your order matches the def."

Then the loop pattern — this is the payoff moment:

```python
names = ["Ama", "Kofi", "Zara"]
for person in names:
    greet(person)
```

> "One function, one loop, and I can greet the whole class. THIS is why parameters are powerful."

#### Teaching Tips

- The swapped-order demo is worth pausing on. Ask "why did it print that?" and let a student explain — it proves they've understood positional arguments.
- The loop reuses the `greet` from Part 2, so no new function needed — keep it fast.

---

### Part 5: Class Activity — The Personalised Greeter (15 minutes)

Three rounds, tiered. Students build in Trinket (`Y2-T3-W2-Parameters`), thumbs up per round.

- **Round 1 (⭐):** `greet(name)` called with two names — everyone should clear this
- **Round 2 (⭐⭐):** `greet_person(name, age)` — two parameters, three calls. Watch for order mistakes here
- **Round 3 (⭐⭐⭐):** `draw_box(width)` — connects parameters to the `* width` string trick from Term 1

Run the **Zoom-chat checkpoint** as a whole-class predict-then-reveal: "What does `greet('Kofi')` print?" Have them type predictions BEFORE anyone runs it. This tests mental modelling, not typing.

#### Teaching Tips

- **Circulate by shared screen.** The most common Round 2 error is swapped arguments producing odd output — surface one as a teaching moment.
- **Fast finishers:** point them at the ⭐⭐⭐ homework tier (loop calling `make_card`).

---

### Part 6: Common Mistakes — Live Errors (7 minutes)

Run each error LIVE so students see the real message. Don't just read them.

1. **Missing argument** → `TypeError: greet() missing 1 required positional argument: 'name'`
   > "Read it out loud — Python literally names the slot it needs filled."
2. **Too many arguments** → `TypeError: greet() takes 1 positional argument but 2 were given`
3. **Wrong order** → no crash, silly output (recall from Part 4)
4. **No quotes** → `NameError: name 'Ama' is not defined`
   > "Without quotes, Python thinks Ama is a variable you never made."

Teaching the *shape* of these errors now saves enormous debugging time in Weeks 6-7 when adventure scenes have several parameters each.

#### Adventure Tie-In (2 minutes)

Show the `enter_room(player_name)` example. Land it:

> "Every scene in your adventure will take parameters — starting with the player's name so the story feels personal. What you learned today, you'll use in every room of your game."

---

### Part 7: Homework + Wrap-Up (10 minutes)

#### Homework: Custom Card Maker (5 minutes)

Walk through `make_card(name, message, emoji)` and the example output. Stress: **one function, called several times with different arguments** — that's the whole point of parameters.

> "⭐ is three parameters called three times. ⭐⭐ makes it beautiful. ⭐⭐⭐ uses a loop to send the same card to a whole list of names."

Paste submission instructions and the due date.

#### Wrap-Up (3 minutes)

> "Today your functions went from doing one fixed thing to doing anything you pass them. Next week we teach them to hand answers BACK to you — the magic word is `return`. See you there!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Converted `greet()` to `greet(name)` and called with different arguments
- [ ] Wrote a two-parameter function with correct argument order
- [ ] Predicted `greet("Kofi")` output correctly (mental model check)
- [ ] Recognised and fixed the missing-argument TypeError

**Engagement:**
- [ ] Guessed how to fix the stuck function before the reveal
- [ ] Participated in the parameter-vs-argument chat check
- [ ] Used thumbs-up reactions during activity rounds

### Students to Watch

**Need Extra Support:**
- Can't see where the parameter gets its value — reteach the "call fills the slot" idea with a physical box metaphor
- Consistently swaps argument order — pair-program one example slowly

**Ready for More Challenge:**
- Finished all three rounds early — set them the ⭐⭐⭐ homework loop now, or ask them to write a 3-parameter function of their own invention

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student thinks `def greet(name):` runs immediately | Clarify: defining names the slot; nothing happens until you CALL with an argument |
| Swapped-argument output confuses the class | Re-run `introduce("Ama", 12)` then `introduce(12, "Ama")` side by side; the contrast makes order click |
| Missing-argument TypeError panics a student | Reframe: "the error is helpful — it names the exact slot it needs." Fixing it is one word |
| Student writes `greet(Ama)` and gets NameError | Point to the quotes rule; text arguments always need quotes |
| Confusion between parameter/argument words | De-stress it: "getting the words perfect isn't today's goal — using them correctly in code is" |
| Trinket/Zoom technical issues | Standard playbook: repl.it backup, browser-only screen share, private-chat triage |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept map:** did "order matters" land? Who still swaps arguments? (This predicts trouble in Weeks 6-7.)
- **Vocabulary:** are students using "parameter" and "argument" naturally, or is it noise? Adjust emphasis next week.
- **Support list:** who needs a 1:1 on the "call fills the slot" idea before return values arrive?
- **Timing:** did the activity get its full 15 minutes? If not, trim the vocab section next time.

---

## 💭 Remember

**The goal today is one leap: from "same thing every time" to "anything I pass in."**

If a student leaves able to write `greet(name)`, call it with two different names, and explain why the output differs — they've got it. The vocabulary and multi-parameter details will firm up naturally as the term's project demands them. Parameters in, next week: answers back out. 📥

**You've got this!** 🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
