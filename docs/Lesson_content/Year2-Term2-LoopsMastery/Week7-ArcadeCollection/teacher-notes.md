# Year 2, Lesson 7: Project — Arcade Game Collection 🕹️🏆

## Teacher's Guide

**Course:** Loops & Logic Mastery (Year 2, Term 2)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 7 of 8

---

## 📋 Lesson Overview

### Purpose

This is the second and final build week of the term project. Students take the games they've met over the last few weeks — **Dice Duel** and **Guess the Number** — plus a brand-new **Rock, Paper, Scissors**, and assemble all three behind ONE menu-driven `while` loop into a single **Arcade** program. This lesson has three core goals:

1. **Ship a finished project** — by the end, every student has a complete, three-game arcade they'll demo next week to earn the Python Pro Badge
2. **Cement the menu-loop architecture** — `import random` → shared state → `while playing:` menu → `if/elif` branches → clean quit. This is the single most reusable program shape in the course
3. **Practise integration** — the hard part today isn't new syntax; it's combining working pieces into one coherent program with a *shared* score and consistent menu numbering

This is a **live build-along**, not a lecture. You code on shared screen; students follow stage by stage in their own `Y2-T2-W7-Arcade` Trinket. Keep everyone synchronised with thumbs-up checkpoints after each of the five stages.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Structure a program as a menu-driven `while` loop controlled by a boolean flag (`playing`) with a clean Quit branch
2. Place each mini-game in its own `if`/`elif` branch, comparing `choice` as a **string**
3. Maintain a **shared accumulator** (`total_score`) declared once, outside the loop, and updated from multiple branches
4. Build Rock, Paper, Scissors from scratch using `random.choice` and correct `if/elif` win logic
5. Guard against bad input (`int()` inside `try/except`; a valid-move membership check) so the arcade never crashes

### Key Success Metrics

- [ ] Every student's arcade loops through the menu and quits cleanly with option 4 (Stage 1)
- [ ] Every student has Dice Duel working and adding to `total_score` (Stage 2)
- [ ] Most students have Guess the Number working with `int()` + `try/except` (Stage 3)
- [ ] Every student has a working Rock, Paper, Scissors with correct rules (Stage 4)
- [ ] `total_score` grows across games and is never reset inside the loop (Stage 5)
- [ ] Students leave with a demo-ready program saved as `Y2-T2-W7-Arcade`

### Materials Needed

- Computer with internet, Zoom with screen share
- This teaching guide open during class
- A pre-built, tested copy of the full arcade solution (paste-ready in chat for anyone who falls behind)
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Pre-build the full arcade yourself** and run every branch: Dice Duel win/lose/tie, Guess correct/out-of-guesses/"banana", RPS win/lose/tie/invalid move, invalid menu choice, and Quit. Smooth demos depend on this.
2. **Test Zoom and Trinket** — confirm code runs and screen share is legible (font size up!).
3. **Have the Stage-1 skeleton ready to paste** so slower typists can catch up without derailing the class.
4. **Rehearse the "shared score" point** — the single most important idea today is that `total_score = 0` lives *outside* the loop. Have the reset-inside-the-loop bug ready to demo.
5. **Rehearse the RPS win logic** — check-the-three-wins framing is clearer for students than trying to enumerate losses.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-6 min   → Welcome + the plan: one arcade, three games, one menu
⏱️  6-16 min  → Stage 1: the menu + the while loop (with pass placeholders)
⏱️ 16-28 min  → Stage 2: add Dice Duel
⏱️ 28-42 min  → Stage 3: add Guess the Number (int + try/except)
⏱️ 42-56 min  → Stage 4: add Rock, Paper, Scissors (new game)
⏱️ 56-64 min  → Stage 5: shared score check + full run-through + common mistakes
⏱️ 64-75 min  → Homework (showcase prep) + Week 8 badge teaser + wrap-up
```

**Flexible timing:** Stage 4 (RPS) is the only genuinely new content — protect its time. If you're running behind, Guess the Number (Stage 3) can be trimmed to a 3-guess version, or its scoring simplified to a flat +5, without losing the lesson's point. Never cut Stage 5 — the shared-score idea is the heart of "combining" games.

---

## 📚 Detailed Teaching Guide

### Part 1: The Plan (6 minutes)

Open with the big picture. Put the canonical skeleton on screen and name each part.

> "Over the last few weeks you built Dice Duel and Guess the Number — but they live in separate Trinkets. Today we build ONE program: an arcade cabinet. A menu, a loop that keeps it open, and each game tucked into its own branch. And ONE score that climbs no matter which game you play."

Anchor the three ideas from the lesson table: the loop keeps the arcade open, `choice` is a string, and `total_score` lives outside the loop. Plant these now — every checkpoint reinforces them.

#### Teaching Tips

- **They already know this shape.** Remind them of the Term 1 Calculator Deluxe menu loop: "Same pattern, new contents." Confidence booster.
- **Set the stakes:** "Next week you demo this and earn the Python Pro Badge." 11-13s respond to a clear finish line.

---

### Part 2: Stage 1 — The Menu + The Loop (10 minutes)

Build the skeleton first, with `pass` in each game branch, and **run it before adding any games**. This is a deliberate habit: get the frame working, then fill it in.

> "We build the skeleton first. `pass` means 'do nothing yet' — a placeholder. This lets us run and test the menu before we write a single game."

Type it live. Emphasise:
- `total_score = 0` and `playing = True` go **above** the loop
- Everything that repeats is **indented** under `while playing:`
- `choice = input(...)` returns a **string**, so branches compare `choice == "1"`

#### Teaching Tips

- **Test the edges immediately:** pick 4 (quits), pick 9 (invalid), pick 1/2/3 (currently do nothing — that's expected with `pass`). "The frame works. Now we furnish the rooms."
- **Show the Stop button** in Trinket now, pre-empting the inevitable first forever-loop panic.
- **Watch the indentation** — the number-one Stage-1 stumble is a menu line left at the wrong indent level.

---

### Part 3: Stage 2 — Add Dice Duel (12 minutes)

Replace the first `pass`. This is familiar territory (a `for` loop of 3 rounds, `random.randint`, win accumulators), so it rebuilds momentum.

> "Best of 3. A `for` loop runs exactly three rounds — so it always ends. We count round wins, then whoever won more wins the duel, and we add points to our SHARED score."

The teaching beat here is the shared score: `total_score = total_score + 10`, not a fresh variable.

#### Teaching Tips

- **Point at the `range(1, 4)`** — "1, 2, 3: three rounds, guaranteed to end." Reassure the forever-loop-wary.
- **The `input("...press Enter...")`** is deliberate pacing so rolls don't all flash past. Mention it's optional flavour.
- **Reinforce accumulators:** `player_wins = player_wins + 1` is the Week-2 pattern applied to game rounds.

---

### Part 4: Stage 3 — Add Guess the Number (14 minutes)

Replace the second `pass`. This branch has the most moving parts: a `while` loop, `int()`, `try/except`, `continue`, `break`, and a `won` flag.

> "The computer picks a secret 1-20. You get 5 guesses. We convert the guess with `int()`, catch bad input with `try/except`, and `break` the moment you're right."

Walk the loop-exit logic explicitly: it ends when `guesses_left` hits 0 **or** when `break` fires. Either way it terminates — no forever loop.

**Critical teaching points:**
- `int(input(...))` — guesses are numeric; without `int()`, `"10" == 10` is always False (Common Mistake 4)
- `continue` skips the `guesses_left = guesses_left - 1` line, so a typo doesn't cost a guess — call this out as intentional kindness
- The `won` flag lets us score correctly *after* the loop

#### Teaching Tips

- **Demo "banana" live** — the calm "please type a whole number" and the free retry is a satisfying moment.
- **If time is tight,** drop to 3 guesses or flat +5 scoring. Keep the `try/except` — that's the transferable skill.
- **Trace the scoring once:** win with 4 guesses left → `4 * 2 = 8` points. Fast wins pay more.

---

### Part 5: Stage 4 — Add Rock, Paper, Scissors (14 minutes)

**This is the only brand-new game. Protect its time.**

Replace the third `pass`. State the rules first, then build:

> "Rock smashes scissors. Scissors cut paper. Paper covers rock. Same move? Tie. The computer picks fairly with `random.choice`. We check the three ways YOU win — anything else, the computer won."

**The clean logic pattern:** handle the tie first, then the three explicit player wins, then `else` for everything remaining (computer win). This is far clearer than trying to enumerate losing cases.

**The input guard:** `.lower()` normalises case; `if player not in options:` catches typos so a silly move doesn't crash or count as a loss.

#### Teaching Tips

- **Get the rules straight on screen** before coding — draw the three arrows (rock→scissors→paper→rock). Common Mistake 5 (rules backwards) is the big risk here.
- **Play a few live rounds** with the class calling the computer's move. Celebrate a win.
- **Test an invalid move** ("banana") together — "not a valid move", no crash.

---

### Part 6: Stage 5 + Full Run-Through + Common Mistakes (8 minutes)

Zoom in on where `total_score = 0` lives.

> "Here's the whole point of an arcade: ONE score. It's set once, at the top, OUTSIDE the loop. If you accidentally put it inside, it resets every menu turn and never grows — the classic bug."

Demo the reset-inside-the-loop bug, then run the full program end to end: play all three games in one session and watch the score climb, then quit. Walk the five Common Mistakes — especially string-vs-number `choice`, the missing `playing = False`, and the reset-inside-loop trap.

> "Play all three, then quit. Score adds up? Nothing crashed? THAT is a finished arcade."

---

### Part 7: Homework + Wrap-Up (11 minutes)

Homework is explicitly **showcase prep**: make it bulletproof + one personal touch (themed banner, a 4th game, or a score-based high-score message).

> "Next week you demo this and earn your Python Pro Badge. This week: make sure nothing crashes, and add ONE personal touch. Bring THIS exact Trinket."

Flag the ⭐⭐⭐ tier trap: adding a 4th game means updating BOTH the printed menu AND the "Pick a game (1-4)" range. Preview Week 8: showcase, peer feedback, Term 2 quiz, and the badge. Paste submission instructions in chat.

---

## ❓ Common Student Questions (Have Answers Ready)

**"Why do we compare `choice == "1"` with quotes? It's a number!"**
> Because `input()` always hands back text, never a number. The player typed the *character* `1`, not the value one. Comparing text to text (`"1"`) matches; comparing text to a number (`1`) never does. This is the single most common bug in menu programs.

**"Why is `total_score` up at the top and not inside the loop with everything else?"**
> Because anything inside the loop happens *every time round*. If `total_score = 0` were inside, the score would wipe to zero on every menu turn. We set it once, above the loop, so it survives and grows. Only things that should *repeat* go inside the loop.

**"Can the computer cheat at Rock, Paper, Scissors?"**
> No — `random.choice` picks the computer's move *before* it sees yours matter, and it's genuinely random. It can't peek. (Good moment to preview the AI activity: real RPS bots try to *predict* you, but ours plays fair.)

**"My Guess the Number loop won't stop!"**
> Check two things: is it `while guesses_left > 0` (not `while True`), and does `guesses_left = guesses_left - 1` actually run on a wrong guess? If they wrapped the decrement inside the `else`, a "too high" branch might skip it. In our version the decrement sits at the loop's end, so every real guess counts.

**"Do I have to keep the games this short?"**
> Yes for today — shorter games keep the whole arcade readable in one screen. They can expand a favourite game for homework once the full arcade runs.

---

## 🧩 Differentiation

**For students who finish early (in-class stretch):**
- Add a "games played" counter alongside `total_score`
- Make Dice Duel best-of-5 instead of best-of-3 (change one number — a nice "I can read the code" test)
- Add themed print banners to each game's opening line

**For students who struggle to keep up:**
- Paste the Stage-1 skeleton for them so they start from a working menu
- Let them get *one* game fully working end to end rather than rushing all three; the shape is the lesson, and a two-game arcade still demos well
- Pair them in a Zoom breakout with a confident peer for the RPS logic

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Built the menu loop with `playing` flag and proper indentation
- [ ] Compared `choice` as a string (`"1"`, not `1`) in every branch
- [ ] Added points to the shared `total_score` from each game
- [ ] Used `int()` inside `try/except` for numeric guesses
- [ ] Wrote correct RPS win logic and a valid-move guard

**Understanding:**
- [ ] Can explain why `total_score` must be set outside the loop
- [ ] Can explain why `choice` is compared as a string
- [ ] Can trace why each game loop is guaranteed to end

### Students to Watch

**Need Extra Support:**
- Indentation drift when nesting a game's own loop inside the menu loop — check their code directly; the two indent levels trip people up
- Confusion between the game-local variables (`player_wins`, `guesses_left`) and the shared `total_score`

**Ready for More Challenge:**
- Point them at the ⭐⭐⭐ homework: a working 4th game as option 5, with the menu and range updated — excellent integration practice and a strong showcase piece

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Menu always says "Please pick 1-4" | They're comparing `choice == 1` (number) instead of `choice == "1"` (string) |
| Infinite loop / menu won't stop | Forgot `playing = False` in the Quit branch (Common Mistake 2); show the Stop button, then find the missing flag flip |
| Score always shows 0 | `total_score = 0` is inside the loop — move it above (Common Mistake 3) |
| Guess the Number never says "Correct" | Missing `int()` — `"10"` never equals the number `secret` (Common Mistake 4) |
| RPS gives wrong winner | Win rules are backwards — verify rock→scissors, scissors→paper, paper→rock (Common Mistake 5) |
| RPS crashes or unfairly loses on a typo | Missing the `if player not in options:` guard, or missing `.lower()` |
| `IndentationError` after adding a game | The game body isn't indented under its `if`/`elif`; select the block and indent as one unit |
| Running behind schedule | Trim Guess the Number to 3 guesses / flat scoring; never cut Stage 5 (shared score) |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Did every student finish a working three-game arcade?** Anyone who didn't needs a catch-up before the Week 8 showcase — nobody should demo a broken or incomplete program.
- **How did the shared-score idea land?** It's the conceptual heart of "combining" games. If several reset it inside the loop, plan a 2-minute recap at the start of Week 8.
- **Did RPS get its full time?** It's the only new game; if earlier stages ran long, adjust next time.
- **Who's ready to demo confidently vs who's nervous?** Note the shy students now so you can gently prep them for next week's showcase and badge moment.

---

## 💭 Remember

**This is the week the pieces become a project.**

Any student can write one small game. The leap to "programmer" is *architecture* — a menu, a loop, a shared state, and clean branches that combine small working pieces into one coherent program. When a student plays Dice Duel, then Guess the Number, then Rock, Paper, Scissors, all in a single run with one score climbing throughout, they've built something that genuinely feels like an app. Celebrate that. Next week they show it off and earn the Python Pro Badge.

**You've got this!** 🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
