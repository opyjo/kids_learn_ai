# Year 2, Lesson 4: F-Strings & Beautiful Output ✨🐍

## Teacher's Guide

**Course:** Python Accelerated (Year 2, Term 1)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson is the "presentation" pillar of the Smart Calculator project. Students can already do real maths (Weeks 2-3), but their output is ugly: `3.3333333333333335`, prices like `6.5` instead of `6.50`, and clumsy comma/`+`/`str()` juggling. This week transforms them from "my code works" to "my code looks professional."

Three core goals:

1. **Make f-strings the default** — by the end of class, students should reach for `f"..."` automatically instead of comma-separated `print()` or `+` concatenation
2. **Introduce two rounding tools and when to use each** — `round()` for further maths, `:.2f` for displaying money
3. **Deliver a genuine "wow" moment** — the bordered receipt is the payoff; students see plain data become something that looks like a real app

The emotional beat is *pride*. Ugly-to-beautiful is deeply satisfying; lean into it.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain why raw float output (e.g. `10 / 3`) is unsuitable for users
2. Write f-strings that embed variables: `f"Hello, {name}!"`
3. Embed expressions inside f-strings: `f"{a} + {b} = {a + b}"`
4. Use `round(n, 2)` to trim decimals
5. Use `:.2f` inside an f-string to display money with exactly 2 decimal places
6. Build a multi-line bordered receipt combining `input()`, conversion, maths, and f-strings

### Key Success Metrics

- [ ] Every student converts at least one comma-print into an f-string (Glow-Up)
- [ ] Every student runs a program that prints money as `:.2f`
- [ ] Most students complete the Receipt Printer with a working total
- [ ] Students can articulate the difference between `round()` and `:.2f`

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share enabled
- Students' Trinket accounts
- This teaching guide open during class
- Class WhatsApp group or email thread for Trinket links
- A currency symbol ready to copy-paste into chat: ₦ and GH₵ (some keyboards can't type these easily)

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-load the "ugly output" demo** — have `print(10 / 3)` ready to run live; the `3.3333333333333335` reveal is the hook
3. **Copy ₦ and GH₵ into your clipboard / a note** — paste them into the Zoom chat early so students can copy them (typing these symbols trips people up)
4. **Have the starter and solution code open** — the Glow-Up starter is the spine of the class
5. **Prepare the naming reminder** — `Y2-T1-W4-FStrings`
6. **Rehearse the three common-mistake demos live** — especially the missing-`f` one; seeing `{name}` print literally is the lesson's most memorable moment

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Hook: the ugly output problem (run 10/3 live)
⏱️  8-20 min  → Part 2: f-strings intro + comparison table
⏱️ 20-30 min  → Part 3-4: maths in braces + round()
⏱️ 30-40 min  → Part 5: money with :.2f (the money moment)
⏱️ 40-58 min  → Activity: Glow-Up + Receipt Printer
⏱️ 58-68 min  → Common mistakes + calculator tie-in
⏱️ 68-75 min  → Homework + Week 5 crash teaser + wrap-up
```

**Flexible timing:** The Receipt Printer activity is the heart — protect its 18 minutes. If you're short, trim the thousands-separator bonus (`:,`) entirely; it's marked optional in the lesson for exactly this reason.

---

## 📚 Detailed Teaching Guide

### Part 1: The Ugly Output Hook (8 minutes)

Open by running the offender live on screen share. Don't explain first — let them react.

#### Opening Script

> "Last week you unlocked division. Watch what happens when I run this simple line..."

Type and run `print(10 / 3)`. Let the `3.3333333333333335` land. Wait for reactions.

> "Thirteen threes! Your maths is perfect — but would you put THAT on a receipt for a customer? No way. Today we make our output beautiful."

Then show the `+` crash callback from Week 1:

```python
age = 12
print("I am " + age)
```

> "Remember this crash? Text glue only works on text. We've been patching it with `str()` — but there's a much better way. Let me introduce you to f-strings."

#### Teaching Tips

- **This is a returning cohort** — they've SEEN ugly decimals in Week 3. Reference that shared pain: "You all saw this last week and groaned."
- **Keep the hook under 8 minutes.** The reveal is quick; don't over-explain the problem, just make them feel it.

---

### Part 2: F-Strings Intro (12 minutes)

Live-code the first f-string slowly, narrating the `f`:

```python
name = "Ama"
print(f"Hello, {name}!")
```

> "See that little `f` before the quote? That's the magic switch. It tells Python: look inside the curly braces and fill them in with real values."

Walk through the comparison table from the lesson. Emphasise the winning line: f-strings never crash on numbers and never need `str()`.

**Make it interactive** — the chat activity:

> "Type in the chat: `f\"I am {name} and I love {hobby}!\"` — but fill in YOUR name and hobby. What would it print?"

#### Teaching Tips

- **Say the shape out loud every time:** "f, quote, text, open-brace, variable, close-brace." Repetition builds the muscle memory.
- **Deliberately model the DEFAULT habit:** every time you print anything for the rest of the lesson, use an f-string, even when a plain string would do. Students copy what they see.
- **Watch for the missing `f`** in shared screens — it's coming up as a formal mistake, but if you spot it early, celebrate it as a preview.

---

### Part 3-4: Maths in Braces + round() (10 minutes)

The braces-do-maths idea is the "whoa" moment. Live-code:

```python
a = 5
b = 3
print(f"{a} + {b} = {a + b}")
```

> "Look at that last window — `{a + b}`. Python doesn't just show the letters, it does the SUM and shows the answer, 8. You can put any calculation in the braces."

Then solve the original monster with `round()`:

```python
print(f"10 ÷ 3 is about {round(10 / 3, 2)}")
```

> "Thirteen threes, GONE. Now it says 3.33. `round(number, 2)` means round to 2 decimal places."

Show the round-amounts table quickly.

#### Teaching Tips

- **Trace the braces as "windows"** — the lesson uses this metaphor; reinforce it verbally.
- **Don't go down the floating-point rabbit hole.** If a sharp student notices `round(2.675, 2)` gives `2.67`, acknowledge it's a real quirk ("computers store decimals in binary, it's a Year-3 topic") and pivot straight to why `:.2f` is safer for money. Don't derail.

---

### Part 5: Money with :.2f (10 minutes — the money moment)

Set up the problem first with `round()`:

```python
price = 6.5
print(round(price, 2))   # 6.5 — but money needs 6.50!
```

> "Round dropped the zero! But money is always two places — we write six-fifty, not six-point-five. We need something stronger."

Then the reveal:

```python
print(f"GH₵{price:.2f}")   # GH₵6.50
```

Show the trio (`1200.5`, `0.5`, `60`) so they see whole numbers become `60.00` too.

Land the `round()` vs `:.2f` rule clearly using the table:

> "`round()` changes the number for more MATHS. `:.2f` formats it for DISPLAY. Rule of thumb: showing money to a human? Use `:.2f`."

#### Teaching Tips

- **Paste ₦ and GH₵ in the chat NOW** so students can copy them into their receipts.
- **The colon placement will trip people** — pre-empt it: "The format goes INSIDE the braces, after a colon: brace, value, colon, dot-2-f, brace." It's formalised in Mistake 3.
- If time is tight, **skip the `:,` thousands-separator bonus** — it's genuinely optional.

---

### Part 6: The Receipt (built during the activity)

Rather than lecture the receipt, roll straight into the Glow-Up activity — the receipt IS the activity payoff. See below.

---

### Activity: Glow-Up + Receipt Printer (18 minutes)

#### Round 1 — Glow-Up (⭐, ~5 min)

Students open the starter code and convert every comma-print to an f-string with `:.2f` on money. This is guided practice — low stakes, high success rate.

> "Every ugly comma-print in this file — turn it into a beautiful f-string. Money gets `:.2f`. Thumbs up when it glows!"

#### Round 2 — Receipt Printer (⭐⭐, ~10 min)

The main build: `input()` → `float()`/`int()` conversion (Week 2 skill!) → maths → bordered f-string receipt. Live-code the first three lines together if the class looks hesitant, then let them finish.

- **Watch for:** forgetting `float()`/`int()` on the inputs — a Week 2 callback. If someone's total is wrong or crashes, check their conversions first.
- **Watch for:** the missing `f` and the misplaced colon — the two big mistakes, live in the wild.

#### Bonus (⭐⭐⭐, fast finishers)

The 10% discount lines. Fast finishers do this while you help Round 2 stragglers. Invite one to share their screen.

#### Teaching Tips

- **Celebrate the borders.** When a student's first neat receipt appears, spotlight it: "THAT looks like a real shop receipt. You built that."
- **Circulate via shared screens** — ask 2-3 students to share so the class sees varied receipts (different shops, currencies, emojis).
- **Currency is a nice personalisation hook** — some students will use ₦, some GH₵. Encourage it.

---

### Common Mistakes + Calculator Tie-In (10 minutes)

Live-code all three mistakes so students see the actual behaviour:

1. **Missing `f`** → prints `{name}` literally. THE big one. Run it, let them gasp, then add the `f`.
2. **Missing braces** → prints the word `name`. Reinforces: you need BOTH `f` and `{ }`.
3. **Misplaced colon** → `GH₵4.5:.2f` leaks out. Show the correct `{price:.2f}` shape.

Then the calculator hook:

```python
print(f"{15} × {4} = {15 * 4:.2f}")   # 15 × 4 = 60.00
```

> "60.0 looks like homework. 60.00 looks like an APP. Same maths. In Week 6 you'll use exactly this to build the calculator's core."

---

### Homework + Wrap-Up (7 minutes)

#### Homework (4 minutes)

Walk through both options (Shop Receipt or Profile Card) and the example run. Point out the tiers:

> "⭐ is f-strings plus a border. ⭐⭐ adds `:.2f` money. ⭐⭐⭐ adds a discount or tax line — for the brave. Any tier counts as done."

Remind them to name it `Y2-T1-W4-FStrings` and share the Trinket link.

#### Week 5 Teaser (2 minutes)

Run the crash live:

```python
age = int(input("How old are you? "))
```

Type `banana`. Let it crash with the `ValueError`.

> "Your programs are beautiful now — but they still crash when someone types the wrong thing. Next week: Smart Decisions & Safe Input. We stop the crash. It's the 'smart' in Smart Calculator."

#### Wrap-Up (1 minute)

> "Today you stopped caring only whether code works, and started caring whether it looks GOOD. That's the developer mindset. See you next week!"

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Converted comma-print to f-string (Glow-Up)
- [ ] Embedded a variable in an f-string correctly
- [ ] Used `:.2f` to show money with 2 places
- [ ] Completed the Receipt Printer with a correct total
- [ ] Attempted the discount bonus (strong understanding)

**Engagement:**
- [ ] Reacted to the ugly-output hook
- [ ] Participated in the f-string chat activity
- [ ] Shared a receipt or pasted a line in chat

### Students to Watch

**Need Extra Support:**
- Keeps forgetting the `f` prefix — pair them with the "f, quote, text, brace" chant; it's muscle memory, it comes fast
- Total comes out wrong — almost always a missing `float()`/`int()` (Week 2). Reinforce conversion, not f-strings

**Ready for More Challenge:**
- Finished the discount bonus early — point them at the `:,` thousands separator and challenge them to add a "you saved X%" line

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student's f-string prints `{name}` literally | Missing `f` prefix — the classic. Have them add `f` before the quote |
| f-string prints the word `name` (no value) | They have `f` but no `{ }` — need both |
| `:.2f` shows up as text in the output | Colon is outside the braces; fix to `{value:.2f}` |
| Can't type ₦ or GH₵ | Paste the symbols in the Zoom chat for copying; or let them use `$` / `£` |
| Receipt total is wrong or crashes | Check the inputs are wrapped in `float()`/`int()` (Week 2 skill) |
| `round(2.675, 2)` gives `2.67` and a student notices | Acknowledge floating-point quirk briefly; steer to `:.2f` for money — don't derail |
| Trinket won't display the ₦/GH₵ symbol | Rare; fall back to `$` or the word "GHS"/"NGN" — the formatting lesson still stands |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **F-string fluency:** did the class adopt f-strings as default, or do they keep slipping back to commas? (If sticky, add a quick warm-up next week.)
- **The `f` prefix:** how many needed reminding? (This predicts how much scaffolding Week 6 needs.)
- **Conversion carry-over:** did Week 2's `float()`/`int()` hold up in the Receipt Printer? Weak conversion here means shaky calculator-building ahead.
- **The "wow" moment:** did the first bordered receipt land emotionally? That pride is what carries motivation into the build weeks.

---

## 💭 Remember

**Today is about pride, not just syntax.**

The technical goal is f-strings and `:.2f` — but the deeper win is the moment a student's plain data becomes a beautiful receipt and they think *"I made that."* That feeling is the fuel for Weeks 6-8, when they build the real calculator. Protect the activity time so every student gets that moment.

Every student should leave with two things: a receipt they're proud of, and the instinct to always ask "does my output look good?"

**Make it beautiful!** ✨

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
