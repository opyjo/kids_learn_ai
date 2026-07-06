# Year 2, Lesson 3: Return Values — Getting Answers Back 📤✅

## Teacher's Guide

**Course:** Functions (Year 2, Term 3)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

This is the conceptual heart of the whole term. In Weeks 1-2 students learned to *define* and *call* functions and to pass *parameters* in. Today they learn to get values *out* — the `return` statement. This single idea is what turns functions from "mini scripts you run" into reusable building blocks you compose into bigger programs.

The lesson lives or dies on **one distinction**: `print` shows a value to the human; `return` hands a value back to the program. Almost every student will conflate these at first — they have spent two years using `print` to "get answers", so `print`ing *feels* like producing a result. Your job is to make the difference visceral, and the fastest way is the `x = print("hi")` demo (→ `None`). Show it live; let the surprise land.

Three goals:

1. **Cement print vs return** — every student can say the difference in their own words by the end
2. **Use returned values** — store in a variable, drop into an f-string, test in an `if`, chain into more maths
3. **Preview the payoff** — `return` is how adventure scenes will connect (each scene returns the next scene's name)

### Learning Objectives

By the end of this lesson, students will be able to:

1. State the difference between `print` (shows) and `return` (hands back)
2. Write a function that returns a value and store that value in a variable
3. Use a returned value in maths, an f-string, and an `if` condition
4. Explain that a function with no `return` produces `None`, and demonstrate it
5. Explain that `return` ends the function immediately (code after it never runs)

### Key Success Metrics

- [ ] Every student writes at least one function with `return` and uses its result
- [ ] Most students complete Answer Machine Rounds 1 and 2; many reach Round 3
- [ ] Every student can answer "print vs return" in the Zoom chat in their own words
- [ ] Students connect `return` to the term project (scenes returning the next scene)

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share enabled
- Students' Trinket accounts; today's Trinket: `Y2-T3-W3-ReturnValues`
- This teaching guide open during class
- Class WhatsApp/email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-type the two demo functions** (`show_double` vs `double`) so you can run them instantly without live-typing delays
3. **Rehearse the `None` demo** — `x = print("hi")` then `print(x)`. Practise the pause before you reveal `None`; the surprise is the teaching moment
4. **Have a returns-map ready** — the table of the four uses of a returned value (variable / f-string / if / chain)
5. **Review last week** — students should be solid on parameters. If not, budget 3 minutes to recap `def double(n):` before adding `return`
6. **Prepare the adventure teaser** — the `cave_entrance()` example is the "why should I care" hook; have it ready to run

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap parameters + hook: "functions can hand answers BACK"
⏱️  8-20 min  → print vs return (the two-function demo)
⏱️ 20-32 min  → Using returned values (variable, f-string, if, chain)
⏱️ 32-42 min  → The None surprise + return ends the function
⏱️ 42-58 min  → Answer Machine activity (3 rounds)
⏱️ 58-68 min  → Common mistakes + adventure tie-in
⏱️ 68-75 min  → Homework + Week 4 scope teaser + wrap-up
```

**Flexible timing:** The print-vs-return demo (Parts 1-2) is non-negotiable and must get its full time. If you run late, trim the adventure tie-in to 3 minutes — but never skip it entirely; it is the motivation.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + Hook (8 minutes)

Greet by name. Quick recall:

> "Last week our functions took ingredients IN — parameters. `def double(n)` — the `n` is a parameter. Today, a brand-new power: functions that hand answers BACK."

Run the two functions side by side (pre-typed):

```python
def show_double(n):
    print(n * 2)

def double(n):
    return n * 2
```

Ask the class in chat: "These look almost the same. What's different?" Let them notice `print` vs `return`. Then the reveal that makes it click:

```python
show_double(5)          # 10 appears
answer = double(5)      # nothing appears
print(answer + 1)       # 11 — we did MATHS with it!
```

> "See it? `show_double` put 10 on the screen and then it was GONE. `double` handed 10 back so we kept it and did maths. That's the whole lesson."

---

### Part 2: print vs return, Deeply (12 minutes)

Slow down here. This is the concept everything else stands on.

**The mental model to give them:** "When a function returns, imagine Python rubbing out the function call and writing the answer in its place. `answer = double(5)` becomes `answer = 10`."

Connect to things they already know:

> "You've used return for two years without knowing it! `len('cat')` RETURNS 3. `int('12')` RETURNS 12. Those functions hand answers back — now you can build your own that do the same."

#### Teaching Tips

- **Resist the urge to rush.** If students only half-grasp this, everything downstream (the project included) becomes guesswork.
- **Use the "eyes vs program" phrasing repeatedly:** print is for the human's eyes; return is for the program to keep using. Say it enough that they say it back.
- **Watch the chat** for anyone writing `print` inside a function and expecting to use the result — flag it gently now; it is Mistake 1 later.

---

### Part 3: Using Returned Values (12 minutes)

Show the four uses from the lesson table. Live-run each so they see real output:

```python
def double(n):
    return n * 2

x = double(5)                       # 1. store in a variable → 10
print(f"Double 5 is {double(5)}.")  # 2. f-string → Double 5 is 10.
if double(5) > 8:                   # 3. in an if → True
    print("big!")
total = double(5) + double(3)       # 4. chain → 16
```

Then introduce **returning True/False** with `is_even`. Emphasise the `is_`/`has_`/`can_` naming convention — it makes `if is_even(n):` read like English and pays off hugely in the project.

#### Teaching Tips

- **The chaining example (`double(5) + double(3)`) often gets an audible "ohhh".** Pause on it — this is where they feel the power of composition.
- **Have them predict before you run.** "What will `double(5) + double(3)` print?" Answer in chat, then reveal 16.

---

### Part 4: The None Surprise + return Ends the Function (10 minutes)

The demo that seals the print/return distinction:

```python
x = print("hi")
print(x)
```

Run it. Let them read the output — `hi` then `None`. Ask: "Why did x become None?" Guide them: `print` shows things but doesn't RETURN anything, so x got "nothing" — Python spells nothing as `None`.

Then the dangerous version — a function that prints when it should return:

```python
def double(n):
    print(n * 2)     # oops
answer = double(5)   # shows 10
print(answer)        # None!
```

> "This is the sneaky one. It LOOKED like it worked — 10 appeared! But `answer` is None, and the moment you do maths on it later, CRASH."

Finish with **return ends the function**:

```python
def double(n):
    return n * 2
    print("Done!")   # never runs
```

> "The instant Python hits return, it walks out the door. Anything after it is dead code."

Tie it to a genuinely useful pattern (early return for a decision) so it doesn't feel like just a "gotcha":

```python
def grade(score):
    if score >= 50:
        return "Pass"
    return "Fail"
```

---

### Part 5: The Answer Machine Activity (16 minutes)

Students build functions that return and then use the results. Thumbs-up per round.

#### Round 1 — area() (⭐, ~4 min)

`area(w, h)` returns `w * h`; store and print. The trap: writing `print(w * h)` inside instead of `return w * h`. If you see `None` in shared output, it is this — turn it into a class moment.

#### Round 2 — is_even() (⭐⭐, ~5 min)

`is_even(n)` returns `n % 2 == 0`, used inside an `if`. Watch for `return "True"` (a string!) instead of the boolean expression. Recap `%` if last term's remainder operator is rusty.

#### Round 3 — Combine the Answers (⭐⭐⭐, ~6 min)

`add(a, b)` then `total = add(2,3) + add(4,1)`. This is the composition payoff. Fast finishers: challenge them to nest — `add(add(1,2), 3)`.

#### Zoom Chat Challenge

Everyone finishes "print is different from return because..." in chat. Read 3-4 aloud; celebrate the variety of correct phrasings.

#### Teaching Tips

- **Circulate via shared screens/paste-in-chat.** The single most valuable thing you can spot is a printed-not-returned function; it is the term's most common bug.
- **Do not let Round 1 stragglers stall the room** — help them privately while fast finishers attempt Round 3.

---

### Part 6: Common Mistakes + Adventure Tie-In (10 minutes)

Live-run the three mistakes from the lesson so students see the real messages:

1. **Print when you meant return** → later maths gives `TypeError: ... 'NoneType' and 'int'`. THE headline bug. Run it, let it crash.
2. **No return at all** → the function hands back `None`
3. **Code after return** → dead code, silently never runs

Then the motivation — run `cave_entrance()`:

> "Here's why return matters for YOUR project. Every scene in your adventure will be a function that RETURNS the name of the next scene. Return is the glue that connects the whole game. No return, no adventure."

Let one student type `left` or `right` in a shared run so they see the returned scene name drive the flow.

---

### Part 7: Homework + Wrap-Up (7 minutes)

#### Homework: Calculator Functions

Walk through requirements and the example run. Stress requirement 3 — *combining* returns — because it is the point of the whole lesson, not just writing three isolated functions.

> "⭐ is three functions that return. ⭐⭐ feeds one return straight into another. ⭐⭐⭐ adds an average and a True/False check. Any tier counts as done."

Paste submission instructions and the due date. Trinket name: `Y2-T3-W3-ReturnValues`.

#### Week 4 Teaser (2 min)

Run the scope puzzle and leave it unsolved on purpose:

```python
def secret():
    treasure = 100
secret()
print(treasure)     # NameError!
```

> "Why can't we see `treasure` out here? That mystery — scope — is next week. See you there!"

Stay on the call 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Wrote a function with `return` and stored the result (Round 1)
- [ ] Returned a boolean and used it in an `if` (Round 2)
- [ ] Combined two returned values (Round 3)
- [ ] Can articulate print vs return (chat challenge)

**Conceptual understanding:**
- [ ] Predicted `None` correctly (or grasped it after the demo)
- [ ] Understood that code after `return` never runs

### Students to Watch

**Need Extra Support:**
- Keeps `print`ing inside functions and expecting a usable result — the core misconception; give a 1:1 with the `x = print("hi")` demo
- Confused by `None` — reassure: "None just means 'nothing came back'. Add a return and it goes away."

**Ready for More Challenge:**
- Finished all rounds — point at the ⭐⭐⭐ homework tier; challenge them to nest calls (`multiply(add(10,5), 2)`) and to write a function that returns another function's result

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Class conflates print and return | Slow down; re-run `x = print("hi")` → None; repeat "print is for eyes, return is for the program" |
| Student's function returns `None` unexpectedly | 99% of the time they wrote `print(...)` instead of `return ...` inside — check that line first |
| `return "True"` instead of `return n % 2 == 0` | Show that `"True"` is text and `True` is a boolean; run `is_even(4)` both ways to compare |
| "Why is the code after return not running?" | That's correct behaviour — return is the exit door; move the work above the return |
| Parameters still shaky from last week | Spend 3 minutes re-recapping `def double(n):` before layering `return` on top |
| Trinket/Zoom technical issues | repl.it backup link in chat; browser-window-only screen share; private-chat triage |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept check:** did the print-vs-return distinction land for the whole class, or do some still `print` when they mean `return`? (This is the make-or-break skill for the project.)
- **Support list:** who needs a nudge before Week 4?
- **Chaining:** did the composition idea (`double(5) + double(3)`) excite them? Use it as a callback when the adventure engine composes scene functions.
- **Timing:** did the demos run to plan? Adjust Week 4 pacing accordingly.

---

## 💭 Remember

**If they leave with only one thing, make it this:** `print` shows a value to the human; `return` hands a value back to the program.

Everything this term — combining functions, connecting adventure scenes, clean function design — stands on that single sentence. Get it solid today and the rest of the term flows. Get it fuzzy and every later lesson fights uphill.

**You've got this — go make return click!** 📤✅

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
