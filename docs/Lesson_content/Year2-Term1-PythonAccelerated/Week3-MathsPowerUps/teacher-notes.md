# Year 2, Lesson 3: Maths Power-Ups! 🧮⚡

## Teacher's Guide

**Course:** Python Accelerated (Year 2, Term 1)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson completes the students' arithmetic toolkit with `//`, `%`, and `**` — the three operators the Smart Calculator project (Weeks 6-8) depends on. It has three core goals:

1. **Make modulo intuitive, not mysterious** — `%` is the operator most likely to feel abstract. The sweet-sharing story ("how many whole times, and what's left over") anchors `//` and `%` as a team before any formal language appears
2. **Reinforce Week 2 constantly** — division returning floats, `int(input(...))`, and the `str` vs `int` TypeError all resurface today; treat every reappearance as deliberate spaced repetition, not a digression
3. **Deliver a wow moment** — the chessboard/doubling explosion is the emotional peak of the lesson; students should leave having FELT how fast `**` grows, not just seen the syntax

Prediction is the teaching engine today: students commit to a guess in the chat BEFORE running code. A wrong prediction followed by a surprise is worth ten correct copy-paste runs.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Use `//`, `%`, and `**` correctly in expressions and explain each in plain words
2. Explain the difference between `7 / 2` (→ `3.5`, a float) and `7 // 2` (→ `3`, an int), connecting it to Week 2's data types
3. Use `n % 2` to detect even/odd and `n % 10` to find the last digit of a number
4. Build a program (Sweet Sharer) that combines `int(input(...))`, `//`, and `%` to share items fairly
5. Predict the result of mixed expressions using BODMAS, and use brackets to control evaluation order

### Key Success Metrics

- [ ] Every student runs all four new-operator lines (`/`, `//`, `%`, `**`) by minute 25
- [ ] Most students make predictions in the chat during Remainder Riddles (participation matters more than accuracy)
- [ ] Every student completes Sweet Sharer Level 1; most reach Level 2
- [ ] Students can answer "how do I check if a number is even?" at wrap-up

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Trinket accounts — students name today's file `Y2-T1-W3-MathsPowerUps`
- The Remainder Riddles list ready to paste into chat one at a time
- A calculator (or a second Trinket tab) to verify any student-invented riddles live
- This teaching guide open during class
- Class WhatsApp group or email thread for homework links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Run every snippet yourself** — especially `10 / 3` (verify your screen shows `3.3333333333333335` for the Week 4 teaser) and `2 ** 63`
3. **Review last week's homework submissions** — note who is still shaky on `int(input(...))`; they'll struggle in the Sweet Sharer without a nudge
4. **Prepare the riddles** — have all seven Remainder Riddles in a notes file, ready to paste into chat individually
5. **Rehearse the chessboard story** — it lands best told as a story (king, inventor, tiny request) BEFORE any code appears
6. **Have the `^` trap ready** — you will demo `2 ^ 10` deliberately; know in advance it prints `8` with no error

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + homework shout-outs + warm-up (/ gives floats!)
⏱️  8-25 min  → The full operator kit + modulo magic (sharing, even/odd, last digit)
⏱️ 25-35 min  → Power ** + the chessboard wow moment
⏱️ 35-42 min  → / vs // showdown + BODMAS and brackets
⏱️ 42-57 min  → Remainder Riddles + build the Sweet Sharer
⏱️ 57-65 min  → Common mistakes + calculator tie-in
⏱️ 65-75 min  → Homework briefing + Week 4 teaser + wrap-up
```

**Flexible timing:** If time runs short, compress BODMAS to just the `2 + 3 * 4` example and the priority table — but protect the chessboard moment and the Sweet Sharer build at full length. They are the heart of the lesson.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + Warm-Up (8 minutes)

Greet by name, shout out 2-3 strong homework submissions from Week 2 (data types). Then open with the hook:

> "You've been doing maths in Python with four operators since Year 1. Today I have news: there are SEVEN. You've been coding with a starter pack. Today you get the full kit."

#### Warm-Up (5 minutes)

Screen-share and run `print(8 / 2)`. Ask the chat BEFORE running:

> "Prediction in the chat: what exactly appears on screen? Not roughly — EXACTLY."

Most will say `4`; the answer is `4.0`. This is your bridge from Week 2:

> "Who remembers why? Division ALWAYS gives a float. Python plays it safe because division might need decimals. Hold that thought — in ten minutes it becomes very important."

Follow with the `9 / 3` chat check (`3.0`). Students who answer `3.0` instantly have retained Week 2 — note them.

#### Teaching Tips

- **Set the prediction rule now:** "All lesson: guess FIRST in the chat, run SECOND. Wrong guesses earn respect here — they mean you're thinking."
- **Don't re-teach floats** — a 30-second recall is enough; the `/` vs `//` section revisits it properly

---

### Part 2: The Operator Kit + Modulo Magic (17 minutes)

#### Introducing the Kit (5 minutes)

Show the four-line demo (`7 / 2`, `7 // 2`, `7 % 2`, `2 ** 3`). Students type and run it themselves — thumbs up when all four outputs match yours. Teach the names out loud:

> "Say it with me: seven FLOOR-divided by two. Seven MOD two. Two to the POWER of three. If you can say it, you can read code that uses it."

Then the anchor idea — primary-school division:

> "When you were little, you'd say: 2 goes into 7 THREE times, with ONE left over. That whole sentence lives in Python: `//` is the 'three times' part, `%` is the 'one left over' part. They're a team."

#### The Sweet-Sharing Story (5 minutes)

Tell it as a story before showing code: Ama, 24 sweets, 5 friends, and she keeps the leftovers — like the cook keeping the bottom-of-the-pot jollof. Then live-code:

```python
sweets = 24
friends = 5
print("Each friend gets:", sweets // friends)
print("Left over for Ama:", sweets % friends)
```

> "Each friend gets 4, and 4 left over — both answers are 4, total coincidence! Let's break the coincidence: Kofi has 17 football stickers and 3 friends. Predictions in the chat — each gets how many, how many left over?"

(`17 // 3` → `5`, `17 % 3` → `2`.)

#### Even/Odd + Last Digit (7 minutes)

Build up the even/odd trick with questions, not statements:

> "What's `48 % 2`? What's `100 % 2`? What's `2000 % 2`? ... So what's the remainder for EVERY even number? Zero! And odd numbers? Always 1. Congratulations — you now own an even-detector."

Live-code the even/odd checker with `int(input(...))` and `if/else`. Ask pointedly:

> "Why the `int(...)` wrapped around `input(...)`? Someone from last week, tell me in the chat."

Then last digit: ask "what's `347 % 10`?" and let them reason it out (10 goes in 34 times = 340, remainder 7 — the last digit!). Confirm with `2026 % 10` → `6`.

#### Teaching Tips

- **`%` is the concept most likely to wobble.** If chat predictions are scattered, slow down and do three more by hand on screen (e.g. `9 % 4`, `10 % 5`, `6 % 4`) before moving on
- **Watch for "modulo = division" confusion** — some students will answer `17 % 5` with `3.4`. Correct gently: "That's `/`. `%` only cares about what's LEFT OVER."
- **Pre-empt the percent trap lightly:** if a student asks "isn't % percent?", say "brilliant question — hold it, we hit that at the end of class"

---

### Part 3: Power + The Chessboard Moment (10 minutes)

#### Power Basics (3 minutes)

`9 ** 2`, `5 ** 3`, `2 ** 10` — quick, with predictions. Immediately plant the `^` warning:

> "Warning: in maths class you might write 2^10. In Python, `^` does something COMPLETELY different and — worse — it doesn't crash. It just gives the wrong answer quietly. Power is ALWAYS two stars: `**`."

#### The Chessboard Story (7 minutes)

Tell the legend theatrically — king, inventor, "one grain, then double it for 64 squares", the king laughing at the tiny request. Then:

> "Should the king have laughed? Let's find out."

Run the `range(1, 11)` doubling loop together. Pause at square 10 (1024):

> "Ten squares in and we've passed a thousand. There are 54 squares to go. Predictions in the chat: how many grains on the LAST square? Wildest guess wins."

Run `print(2 ** 63)`. Let the number (`9223372036854775808`) sit on screen a moment:

> "Nine QUINTILLION grains. More rice than the world grows in centuries. The king couldn't pay. That's doubling: it starts slow... then it explodes."

Land the pocket-money vote: ₦1,000,000 today vs ₦1 doubled for 30 days. Run `print(2 ** 29)` → `536870912`. Doubling wins.

#### Teaching Tips

- **This is the lesson's emotional peak — spend the energy here.** Story first, code second, silence after the big number appears
- **If asked "why 2 ** 63 for square 64?"** — square 1 has 1 grain (2⁰), so square 64 has 2⁶³. Only explain if asked; it's a detail, not the point
- **Callback fuel:** "remember the chessboard" becomes your shorthand for exponential growth in Term 5 (AI training data sizes)

---

### Part 4: `/` vs `//` + BODMAS (7 minutes)

#### The Showdown (3 minutes)

Run `7 / 2` and `7 // 2` side by side. Key line:

> "`/` answers with decimals, ALWAYS a float — even `8 / 2` gives `4.0`. `//` answers in whole numbers. You can't give a friend 4.8 sweets — that's why the Sweet Sharer will use `//`."

Stress that `//` **floors**, it doesn't round: `7 // 2` is `3`, not `4`.

#### BODMAS (4 minutes)

Chat prediction on `2 + 3 * 4`. Expect a split between 14 and 20 — perfect. Run it (14), then show `(2 + 3) * 4` (20):

> "Python follows BODMAS from maths class. And brackets are your steering wheel — they put YOU in charge of the order."

Show the priority table briefly, then the two sneaky ones: `2 * 3 ** 2` → `18` (power first) and `10 - 6 / 2` → `7.0` — pause on that one:

> "Look closely at that answer. `7.0`. Who can tell me how a float sneaked in? ... One `/` anywhere in the sum, and the whole answer goes float. Week 2 knowledge strikes again."

#### Teaching Tips

- **Encourage defensive brackets:** "when in doubt, bracket it — free clarity, zero cost"
- **Don't drill precedence exhaustively** — the priority table plus three examples is enough; the calculator project will give endless natural practice

---

### Part 5: Remainder Riddles + Sweet Sharer (15 minutes)

#### Remainder Riddles (6 minutes)

Paste riddles into the chat ONE at a time; students reply with predictions, then everyone runs to check. The seven riddles and answers:

| Riddle | Answer | Watch For |
|---|---|---|
| `17 % 5` | `2` | Anyone answering `3.4` (modulo/division confusion) |
| `7 // 2` | `3` | Anyone answering `3.5` (missed the floor) |
| `2026 % 2` | `0` | Connect aloud: "zero means EVEN!" |
| `45 % 10` | `5` | Last-digit trick recall |
| `2 ** 5` | `32` | Anyone answering `10` (`2 * 5` confusion) |
| `2 + 10 * 2` | `22` | Anyone answering `24` (BODMAS) |
| `(2 + 10) * 2` | `24` | Brackets flip it |

Keep score playfully; a wrong prediction gets "great wrong answer — who can see what they were thinking?"

#### Build the Sweet Sharer (9 minutes)

Students build independently from the tiered instructions (⭐ each-gets, ⭐⭐ left-over, ⭐⭐⭐ perfect-share `if`). Live-code Level 1 only if fewer than half are moving after 3 minutes.

Circulate via chat. The two failure modes to expect:

1. **Missing `int(...)`** → `TypeError: unsupported operand type(s) for //: 'str' and 'int'`. Don't fix it silently — name it: "read the error — it says STR. What did we learn last week about input()?"
2. **Using `/` instead of `//`** → output like `Each friend gets 4.8 sweets`. Ask: "can you hand someone 4.8 sweets?"

Invite 2-3 students to paste test runs in the chat. If someone tests with 0 friends and crashes — celebrate loudly:

> "You just discovered a way to crash our program! Remember it — in Week 5 we learn to build programs that survive exactly this."

#### Teaching Tips

- **The riddles are your assessment** — log who predicts confidently and who guesses randomly; that's your support list
- **Fast finishers:** challenge them to add a `/` line showing the "exact unfair share" next to the whole-number share, or to sticker-ify it (17 stickers, 3 friends)

---

### Part 6: Common Mistakes + Calculator Tie-In (8 minutes)

#### Common Mistakes (5 minutes)

Live-code each so students see real behaviour:

1. **`2 ^ 10` → `8`, no error.** The most dangerous kind of bug — silently wrong. "Power is two stars. Always."
2. **`10 / 0` → `ZeroDivisionError: division by zero`.** Tie to the Sweet Sharer zero-friends discovery; tease Week 5
3. **Raw `input()` maths → TypeError.** Third appearance today — by now students should diagnose it themselves from the error text
4. **`8 / 2` → `4.0`** — not a bug, just `/` being `/`

#### Calculator Tie-In (3 minutes)

> "Everything today is a button on your Smart Calculator. Divide mode will offer BOTH answers — the exact `3.5` AND the '3, remainder 1' version. Power mode is `**`. And in Week 7, Calculator Deluxe gets a percentage mode — so hear this early: in Python, `%` is NOT the percent button. 15% of 80 is `80 * 15 / 100`, which is 12.0. `80 % 15` is 5 — totally different. Tuck that away for Week 7."

---

### Part 7: Homework + Wrap-Up (10 minutes)

#### Homework: The Maths Magician (5 minutes)

Walk through the requirements and example run (347 → ODD, square 120409, last digit 7). Tier guidance:

> "⭐ is even/odd plus square — everyone can do that tonight. ⭐⭐ adds last digit and cube. ⭐⭐⭐ is the pocket-money doubler — it needs a `for` loop with `2 ** day`, exactly like our chessboard loop. If you loved the chessboard moment, that tier is for you."

Trinket name `Y2-T1-W3-MathsMagician`; paste submission instructions in the chat; set the due date.

#### Week 4 Teaser + Wrap-Up (5 minutes)

Run the teaser live:

```python
print("Each friend pays:", 10 / 3)
```

Let `3.3333333333333335` fill the screen:

> "Imagine a real shop app showing THAT as a price. Disgusting! Next week we fix it — f-strings, rounding, proper money formatting. Your programs are about to get beautiful."

Close with the recap question round: "How do I check if a number is even? How do I get a last digit? What does `7 // 2` give?" — quickfire in the chat. Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Ran all four operators successfully (Part 2)
- [ ] Predicted riddles with reasoning (not random guessing)
- [ ] Sweet Sharer Level 1 completed independently
- [ ] Used `int(input(...))` without prompting (Week 2 retention)
- [ ] Can articulate `/` vs `//` difference

**Engagement:**
- [ ] Participated in chat predictions throughout
- [ ] Reacted to the chessboard moment
- [ ] Attempted ⭐⭐ or ⭐⭐⭐ Sweet Sharer tiers

### Students to Watch

**Need Extra Support:**
- Answered riddles with division answers (`3.4` for `17 % 5`) — modulo hasn't landed; send them three extra sharing problems as warm-up before Week 4
- Still forgetting `int(...)` on input — pair with Week 2 lesson link; this MUST be solid before Week 6's calculator build

**Ready for More Challenge:**
- Finished all Sweet Sharer tiers early — point at the ⭐⭐⭐ homework tier, and tease: "can your doubler also show the TOTAL money collected across all days?" (sets up accumulator patterns for Term 2)

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Class answers riddles by copying others in chat | Switch to private chat answers, or ask students to hold answers and reveal on your count of three |
| Modulo just isn't landing | Drop the abstraction entirely: draw it — 17 sweets as dots, circle groups of 5, count strays. Physical grouping beats every explanation |
| `TypeError ... 'str' and 'int'` everywhere in Sweet Sharer | Pause the room, run the broken version on screen, ask the class to diagnose from the error message — collective fix beats ten private fixes |
| Student's `2 ^ 10` gives 8 and they insist Python is broken | Perfect teaching moment — run `2 ** 10` beside it; reinforce "wrong-but-no-crash is the sneakiest bug type" |
| `ZeroDivisionError` panic during Sweet Sharer | Reframe as a discovery: "you found the crash Week 5 teaches us to prevent!" |
| Fast finishers idle during the build | Sticker variant, `/` vs `//` comparison line, or invent riddles for the class (verify answers before posting!) |
| Zoom/Trinket technical issues | Usual playbook: repl.it backup link, browser-window-only screen share, private-chat triage |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Did modulo land?** Riddle accuracy on `17 % 5` and `45 % 10` is your gauge. If under half predicted correctly, open Week 4 with a 5-minute remainder warm-up
- **Week 2 retention:** how many students wrote `int(input(...))` unprompted? Names of those who didn't — they need it solid before Week 6
- **The wow moment:** did the chessboard get reactions? Note what worked for your retelling next year
- **Timing:** which part overran? The Sweet Sharer usually needs more time than planned — steal from BODMAS if needed next time

---

## 💭 Remember

**Today's operators are the Smart Calculator's engine room.**

A student who leaves knowing "`//` and `%` are a team that answers 'how many whole times, and what's left over'" has everything they need for Weeks 6-8. The chessboard moment is the memory that lasts; the Sweet Sharer is the skill that transfers. Protect both.

**Guess first, run second — keep them predicting!** 🔮

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
