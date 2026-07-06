# Year 2, Lesson 5: Randomness, Lives & Score 🎲🏆

## Teacher's Guide

**Course:** Loops & Logic Mastery (Year 2, Term 2)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

This is the lesson where loops stop being "exercises" and start being **games**. For four weeks students have mastered loops that behave predictably — for loops, while loops, break/continue, nesting. Today we add the two ingredients that turn a loop into an arcade game: **randomness** (the `random` module) and **accumulators** (a `score` that grows, `lives` that shrink).

Three core goals:

1. **Make `import random` a reflex** — students must internalise that the module has to be imported at the top, every time, or the program crashes. This is the #1 error they'll hit all term.
2. **Build the accumulator mental model** — start the variable *before* the loop, update it *inside*. The classic bug (resetting inside the loop) is worth deliberately provoking so they never forget it.
3. **Assemble the game skeleton** — the `while lives > 0` loop with a random roll, an `if` that either costs a life or adds score. This exact pattern is the foundation of Week 6's Dice Duel and Guess-the-Number, so land it solidly.

Keep the energy high and playful — this is the "fun" lesson of the term. Let students *run their code repeatedly* and enjoy the different results; the surprise is the teaching tool.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Import and use the `random` module (`import random` at the top of a program)
2. Generate random integers with `random.randint(a, b)`, understanding it is **inclusive on both ends**
3. Pick a random item from a list with `random.choice()`
4. Build accumulator variables — a `score` that increases (`score += n`) and `lives` that decrease (`lives -= 1`)
5. Combine randomness, a `while` loop, and accumulators into a working lives-and-score game

### Key Success Metrics

- [ ] Every student runs a `random.randint()` dice roll and sees it change between runs
- [ ] Every student writes a working accumulator (`score += roll`) inside a loop
- [ ] Most students complete the `while lives > 0` game (Round 3)
- [ ] Students can explain why `import random` is required and why the score goes *before* the loop

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Students' Trinket accounts — today's project name is `Y2-T2-W5-Randomness`
- This teaching guide open during class
- A physical dice (or dice emoji) on screen share — a lovely tactile hook for the randomness idea
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Trinket runs `import random`** — confirm the module works in Trinket (it does; it's built into Python 3, no install needed)
2. **Pre-write the three "Common Mistakes" snippets** so you can live-run them and let them crash on cue — the `NameError` from a missing import is the most valuable demo of the lesson
3. **Have a real dice handy** to roll on camera when introducing `randint(1, 6)` — connects the code to something physical
4. **Prepare the accumulator analogy** — a score card / piggy bank that you keep adding to, not a fresh card each turn
5. **Preview Week 6** so your "what's coming" teaser is specific: Dice Duel and Guess-the-Number both reuse today's exact skeleton

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Hook: predictable vs surprising programs + import random
⏱️  8-20 min  → Part 1 & 2: randint (dice) and choice (surprises)
⏱️ 20-32 min  → Part 3: accumulators — score up, lives down
⏱️ 32-45 min  → Part 4: loops + randomness + score = a game
⏱️ 45-58 min  → Class Activity: Lucky Dice (3 rounds + bonus)
⏱️ 58-68 min  → Common mistakes + AI randomness discussion
⏱️ 68-75 min  → Homework + Week 6 teaser + wrap-up
```

**Flexible timing:** The Lucky Dice activity is the heart of the lesson. If time is short, trim the AI discussion and let the activity run long — hands-on game-building is where the learning sticks.

---

## 📚 Detailed Teaching Guide

### Part 1: Hook — Predictable vs Surprising (8 minutes)

Open by running a plain `print("Hello")` twice: same result. Then roll a **real dice** on camera twice: different results.

#### Opening Script

> "Every program you've written so far is predictable — run it twice, get the same answer. But look at this dice. Roll it — 4. Roll again — 1. You can't predict it! THAT is what makes games fun. Today we teach Python to roll dice."

Introduce the `random` module as a **locked toolbox** that `import random` unlocks. Make the metaphor stick — you'll refer back to it when the `NameError` appears later.

#### Teaching Tips

- **Say it early and often:** "`import random` at the TOP." Repetition now saves a dozen `NameError`s later.
- Trinket has `random` built in — reassure students there's nothing to install.

---

### Part 2: randint and choice (12 minutes)

Live-code the dice roll and run it **five times** on screen share so the class sees the number change. Have them do the same and give a thumbs-up.

**Hammer the inclusive point.** This is the subtle bug of the day:

> "`random.randint(1, 6)` can give you a 6 — both ends are included. This is DIFFERENT from `range(1, 6)`, which stops at 5. A dice has six sides, so we want `randint(1, 6)`."

Then introduce `random.choice()` with a list of rewards. Draw the distinction explicitly:

| Tool | Gives you | Use for |
|---|---|---|
| `random.randint(a, b)` | a random **number** in a range | dice, coin flips, random damage |
| `random.choice(list)` | a random **item** from a list | rewards, replies, heads/tails |

#### Teaching Tips

- Get students to *predict* before running — "What could this print?" builds the mental model of a range of outcomes.
- Watch for `randint(1, 5)` when they mean a dice — the classic off-by-one.

---

### Part 3: Accumulators — Score Up, Lives Down (12 minutes)

This is the conceptual core. Use a physical analogy: a **score card you keep adding to**, or a **piggy bank**. You don't get a fresh card each turn — you keep the same one and update it.

Teach the pattern in three beats:

1. `score = 0` — start it (before any loop)
2. `score = score + 10` — the update, read aloud as "take the score, add 10, store it back"
3. `score += 10` — the shortcut pros use

Then flip direction for lives: `lives -= 1`. Same idea, counting down.

#### Teaching Tips

- **Read `score = score + 10` aloud slowly.** The idea of a variable referring to itself is genuinely new-feeling; verbalising it helps.
- Introduce `+=` as "the same thing, less typing" — don't overcomplicate it. Some students will prefer the long form for now; that's fine.
- Preview the trap: "Where do we put `score = 0` — before or inside the loop? Hold that thought..." (sets up Common Mistake 3).

---

### Part 4: Putting It Together — A Game (13 minutes)

Screen-share the `while lives > 0` game and **trace it live**, turn by turn, narrating each roll:

> "Rolled a 3 — not a 1, so score goes up by 3. Rolled a 1 — ouch, lose a life. Lives is now 2... keep going until lives hits 0."

Emphasise the shape: accumulators set up ONCE before the loop, updated each turn, loop ends when the condition fails.

> "Memorise this shape. This is a game. Next week you'll change the rules and get Dice Duel and Guess-the-Number — but the skeleton is exactly this."

#### Teaching Tips

- Run the game several times so the class sees different game lengths — a vivid demonstration that randomness drives the outcome.
- If a student's game runs forever, they've likely forgotten to ever decrease `lives` — check their `if roll == 1:` branch.

---

### Part 5: Class Activity — Lucky Dice (13 minutes)

Students build the game in tiers. Circulate via shared screens and the chat.

- **Round 1 (⭐):** one dice, printed. Everyone should clear this — it's the confidence builder.
- **Round 2 (⭐⭐):** a `for` loop rolling two dice, running total. First real accumulator.
- **Round 3 (⭐⭐⭐):** the full `while lives > 0` lives-and-score game.
- **Bonus:** a `random.choice()` coin flip that doubles points on "heads".

#### Teaching Tips

- **Celebrate different scores.** "Ama got 34, Kofi got 11 — same code, different luck. That's the game working!"
- If half the class stalls on Round 3, live-code the while loop together, then let them personalise it.
- Fast finishers → push them to the bonus, or to the ⭐⭐⭐ homework reward system.

---

### Part 6: Common Mistakes + AI Discussion (10 minutes)

#### Common Mistakes (6 minutes)

Live-run each error so students see the real message:

1. **Missing `import random` → `NameError: name 'random' is not defined`** — THE big one. Run it, let it crash, then add the import and watch it work. "The toolbox was locked."
2. **`randint` inclusive** — remind them `randint(1, 6)` includes 6, unlike `range(1, 6)`.
3. **Resetting score inside the loop** — deliberately show `score = 0` inside the loop and demonstrate that the score never grows. Then move it out. This is the accumulator lesson made unforgettable.

#### AI Randomness Discussion (4 minutes)

Use the `ai_activities` prompt: AI shuffles training data, explores random moves, adds randomness to outputs. Keep it light and wondering:

> "Type in the chat: why might a little randomness make an AI *smarter*?"

Land the point: the `randint` and `choice` they learned today are the same tools real AI engineers use, just at scale.

---

### Part 7: Homework + Wrap-Up (7 minutes)

#### Homework: "Lucky Score" (4 minutes)

Walk through the requirements and the example run. Point out the tiers:

> "⭐ is a score in a loop. ⭐⭐ adds lives and a game-over. ⭐⭐⭐ adds random rewards past 20 points. Any tier counts as done — but try to reach ⭐⭐, because that's exactly the skeleton we build on next week."

Remind them: `import random` at the top, `score` and `lives` set up **before** the loop. Trinket name: `Y2-T2-W5-Randomness`.

#### Week 6 Teaser + Wrap-Up (3 minutes)

> "Next week is the Mini-Game Lab — you build TWO real games: Dice Duel, you versus the computer, and Guess-the-Number with higher/lower hints. Everything you did today is the foundation. See you there!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Added `import random` without prompting (or self-corrected after the NameError)
- [ ] Used `random.randint(1, 6)` correctly (not `1, 5`)
- [ ] Wrote a working accumulator (`score += roll`) placed before the loop
- [ ] Built a `while lives > 0` loop that terminates correctly
- [ ] Used `random.choice()` on a list (bonus / ⭐⭐⭐)

**Engagement:**
- [ ] Ran their dice roll multiple times to see it change
- [ ] Used Zoom reactions across the activity rounds
- [ ] Participated in the AI randomness discussion

### Students to Watch

**Need Extra Support:**
- Repeatedly forgets `import random` — pair with a reminder note at the top of their file
- Confuses `randint` and `choice`, or resets the accumulator inside the loop — revisit the "score card" analogy 1:1

**Ready for More Challenge:**
- Finished Round 3 + bonus early — steer to the ⭐⭐⭐ reward system, or challenge them to add a coin-flip "double or nothing" round

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| `NameError: name 'random' is not defined` | Missing `import random` at the top — the single most common issue today; make it the first thing you check |
| Dice never rolls a 6 (or only 1-5) | They used `randint(1, 5)` — remind them randint is inclusive, a dice needs `(1, 6)` |
| Score always shows the same small number | `score = 0` is inside the loop, resetting each turn — move it above the loop |
| The game loops forever | `lives` is never decreased — check the `if roll == 1:` branch actually has `lives -= 1` |
| `random.choice` errors | They passed separate items instead of a list — it needs one list argument: `random.choice(["a", "b"])` |
| Trinket won't run `import random` | It's built in; if it fails, refresh the page or use the repl.it backup |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Import reflex:** how many students still forgot `import random` by the end? (If many, open Week 6 with a quick drill.)
- **Accumulator understanding:** did the "reset inside the loop" bug click? This concept powers the rest of the term.
- **Game completion:** how many reached the full `while lives > 0` game? This predicts readiness for Week 6's Mini-Game Lab.
- **Energy:** the randomness lesson should feel like the most *fun* of the term — did it land that way?

---

## 💭 Remember

**Today is where loops become games.**

Two ideas do all the work: randomness makes the outcome a surprise, and accumulators keep the story going (score up, lives down). Get those two solid and Week 6 — building two complete games — becomes a joy rather than a struggle. Let students play, let them run their code again and again, and let the surprise do the teaching.

**Roll on! 🎲🏆**

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
