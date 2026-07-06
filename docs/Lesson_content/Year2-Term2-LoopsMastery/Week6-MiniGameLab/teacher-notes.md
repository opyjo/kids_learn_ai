# Year 2, Lesson 6: Mini-Game Lab 🎮🔬

## Teacher's Guide

**Course:** Loops & Logic Mastery (Year 2, Term 2)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This is a **build-along project lesson** — the loops-and-logic equivalent of Term 1's Calculator Core. For five weeks students have collected loop skills in isolation: for loops, while loops, `range()`, `break`/`continue`, nested loops, `random.randint`/`choice`, and score/lives accumulators. Today they **assemble them into two complete, playable games**: Dice Duel and Guess-the-Number Deluxe.

Both games live in ONE Trinket named `Y2-T2-W6-MiniGames`. This is the file Week 7 ("Arcade Game Collection") plugs straight into — so the variable names and structure below must be identical for every student.

The session is a **live build-along in two halves**: Dice Duel (a `for` loop over a fixed number of rounds) then Guess-the-Number (a `while True` loop that exits with `break`). Students type alongside you, run after every stage, and use Zoom reactions as checkpoints. Your job is pacing and correctness — the code is the content.

Three core goals:

1. **Every student leaves with TWO running games** saved as `Y2-T2-W6-MiniGames`
2. **Cement the two loop shapes** — `for` for a known number of rounds, `while True` + `break` for "keep going until"
3. **Nail the `int()` conversion** — the make-or-break bug is comparing a text guess to a number

> ⚠️ **CONTINUITY IS CRITICAL.** Week 7 combines BOTH games behind a menu, reusing the exact variables: `player_score`, `computer_score`, `player_roll`, `computer_roll`, `rounds`, `round_number` (Dice Duel) and `secret`, `guess`, `attempts` (Guess-the-Number). Do NOT improvise different names live — next week's instructions assume these.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Build a complete game using `random.randint`, loops, accumulators, and `if/elif/else`
2. Use a `for` loop with `range(1, rounds + 1)` to play a fixed number of rounds
3. Use a `while True` loop with `break` to keep going until a win condition
4. Keep and compare `player_score` and `computer_score` with `+= 1` accumulators
5. Convert a guess with `int()` and explain why comparing text to a number crashes
6. Give directional hints ("too high"/"too low") and count `attempts`

### Key Success Metrics

- [ ] Every student's `Y2-T2-W6-MiniGames` runs both games end to end
- [ ] Dice Duel scores add up correctly and announce a winner
- [ ] Guess-the-Number gives correct hints and stops with `break` on a win
- [ ] Students can explain why `guess` must be wrapped in `int()`
- [ ] Every student has SAVED the Trinket (Week 7 depends on it)

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share; teacher's Trinket visible throughout
- Students' Trinket accounts
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Type both full games yourself once** in a fresh Trinket named `Y2-T2-W6-MiniGames` — you build them live and they must be flawless
2. **Run each game several times** — because they're random, rehearse narrating "your numbers will differ" and be ready for a tie, a player win, and a computer win
3. **Rehearse the `int()` bug** — show `guess = input(...)` (no `int()`) crashing with a `TypeError`, then fix it
4. **Rehearse the infinite-loop point** — explain (don't actually hang the class) why `while True` needs a `break`
5. **Prepare a "catch-up" pasteable** of each stage's code to drop in the Zoom chat if someone falls behind — keep the class moving

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-6 min   → Welcome + "today we build TWO games" + the plan + name the Trinket
⏱️  6-10 min  → import random + Dice Duel Stage 1 (banner)
⏱️ 10-22 min  → Dice Duel Stages 2-3 (scores + rounds loop + who wins)
⏱️ 22-30 min  → Dice Duel Stage 4 (overall winner) + full run + SAVE
⏱️ 30-38 min  → Guess-the-Number Stage 5-6 (secret + while loop + int())
⏱️ 38-50 min  → Guess-the-Number Stage 7 (hints + break) + star rating + full run + SAVE
⏱️ 50-62 min  → Common mistakes (esp. int() and the missing break)
⏱️ 62-75 min  → Homework brief + Week 7 Arcade teaser + wrap-up
```

**Flexible timing:** The two loop mechanics are the priority — Dice Duel's `for` loop and Guess-the-Number's `while + break`. If the banners run long, paste them in chat; they're just `print()` students already know. Protect the "who wins the round" logic and the `break`.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + The Plan (6 minutes)

Open with lab-day energy — today is the payoff.

> "For five weeks you've been collecting loop superpowers. Today we head into the LAB and build not one but TWO real games — live, together. No new theory. Just your loops and logic snapping into games you can actually play."

Screen-share the **skills-to-games table** from the lesson. Point at each skill and where it lands. This shows students today is assembly, not new material.

Then the non-negotiable setup:

> "Create a NEW Trinket. Name it exactly `Y2-T2-W6-MiniGames`. BOTH games go in this one file. Type the name in the chat when done. This is the file you KEEP — next week we combine both games into an Arcade."

Have everyone type `import random` at the very top, once.

#### Teaching Tips

- **Don't skip the naming.** Week 7 assumes this exact file exists with both games in it.
- **One import, at the top.** Stress that `import random` goes once at the top and covers both games.

---

### Part 2: Dice Duel — Banner + The Rounds Loop (Stages 1-2, ~12 minutes)

Build the banner live, run it. Then the scores and the `for` loop.

> "Two accumulators — `player_score` and `computer_score` — both start at zero, ready to grow. `rounds = 3` means three rounds; change that one number and the whole game plays longer. Watch: `range(1, rounds + 1)` counts 1, 2, 3 — friendly numbers for the player, not 0, 1, 2."

Type the rolls: `random.randint(1, 6)` for each. Run it — three rounds of rolls appear, no scoring yet. That's fine.

#### Teaching Tips

- **`range(1, rounds + 1)` is deliberate** — it gives human-friendly round numbers 1-3. If a student uses `range(rounds)` their rounds print 0-2; point out why `+1` matters.
- **`input("Press Enter...")`** is a pause for suspense — it's an `input()` we ignore. Some students may wonder why we don't store it; explain it just waits for Enter.
- The rolls being random means live output differs from any student's. Say so early: "Your dice won't match mine — that's the point!"

---

### Part 3: Dice Duel — Who Wins + Overall Winner (Stages 3-4, ~8 minutes) ⭐ THE HEART OF GAME 1

Add the `if/elif/else` INSIDE the loop. Narrate the three outcomes:

> "Your roll higher? You get the point — `player_score += 1`. Computer higher? It scores. Equal? A tie, nobody scores. And notice this all sits INSIDE the loop, indented, so it happens every single round."

Then, AFTER the loop (back at the left margin), the final comparison and winner announcement.

**Do a full run live.** Roll through all three rounds. Whatever the outcome — player win, computer win, or draw — narrate it. Run it a second time to show a different result.

#### Teaching Tips

- **Indentation is the silent killer.** The win-check must be indented inside the `for`; the final winner-check must be OUTSIDE it. This is Common Mistake 4 — flag it live.
- **Celebrate the first working game loudly.** "That's a complete game. Save it." Then make everyone SAVE the Trinket before moving on.
- Ties are common with a d6 — if nobody ties in your demo, mention it can happen so it's not a surprise.

---

### Part 4: Guess-the-Number — Secret + The While Loop (Stages 5-6, ~8 minutes)

Below Dice Duel in the SAME file. Banner, then `secret = random.randint(1, 20)` and `attempts = 0`.

> "`random.randint(1, 20)` is INCLUSIVE — the secret could be 1, could be 20, or anything between. Twenty possible answers."

Now the loop. **This is the concept moment:**

> "We don't know how many guesses they'll need — so a `for` loop won't work. We use `while True` — loop forever — and we'll break out when they win. And LOOK: `int(input(...))`. `input()` gives TEXT. If we compare text to our number, Python crashes. `int()` turns it into a real number."

Introduce the `try/except` (from Term 1): if they type letters, catch the `ValueError`, print a friendly message, and `continue` (which does NOT count an attempt).

#### Teaching Tips

- **`int()` is the make-or-break line.** Say it twice. It's the top bug in this game.
- **`attempts += 1` comes AFTER the `try/except continue`** — so a non-numeric entry doesn't burn an attempt. Point this out for the keen students.
- If `try/except` feels heavy for your group, you can build the loop with plain `int()` first, get it working, THEN add the `try/except` guard as a "make it bulletproof" upgrade.

---

### Part 5: Guess-the-Number — Hints + break (Stage 7, ~12 minutes) ⭐ THE HEART OF GAME 2

Add the hints INSIDE the loop, under `attempts += 1`:

> "Guess too small? 'Too low, aim higher.' Too big? 'Too high, aim lower.' And the `else` — the ONLY case left is `guess == secret` — they won! Celebrate, then `break`."

**This is the key teaching point of the whole lesson:**

> "`while True` means loop FOREVER. The `break` is the ONLY exit door. Without it, the game keeps asking even after you win — forever. `break` is what lets a 'loop forever' loop actually stop."

Add the star rating after the loop. Then do a full run live — ideally demonstrate the "halving" strategy (guess 10, then middle of what's left) so students see clever play, tying into the AI activity.

#### Teaching Tips

- **The `else` is the win case — there's no separate `guess == secret` branch.** If less-than and greater-than are both false, they're equal. Make this logic explicit; some students want to add a redundant `elif guess == secret`.
- **`break` lives inside the `else`.** It only fires on a correct guess. Trace it: wrong guesses loop back; a right guess breaks out.
- **Every loop must terminate.** Reassure students this loop always ends because a correct guess is always possible within 1-20.

---

### Part 6: Common Mistakes (10 minutes)

Live-code each so students see the real behaviour:

1. **Forgetting `int()` on the guess** → `TypeError: '<' not supported between 'str' and 'int'`. THE big one. Show it crash, show `int()` fix it.
2. **Forgetting `import random`** → `NameError: name 'random' is not defined`. Quick.
3. **`while True` with no `break`** → infinite loop. DESCRIBE it (don't hang the class): "It would ask forever — the `break` is the exit." Show where the `break` goes.
4. **Score/win check outside the loop** → wrong indentation means it runs once, not every round. Show the indentation fix.

---

### Part 7: Homework + Wrap-Up (10 minutes)

#### Homework: Polish or Add a Twist (5 minutes)

Walk through the options: best-of-5 (`rounds = 5`), difficulty levels (`randint(1,10)` vs `randint(1,50)`), a lives system (6 attempts), or a score bonus (`score = 20 - attempts`). Point out the tiers. Stress:

> "SAVE this file. Next week the Arcade combines BOTH of today's games behind one menu. This is the file we build on."

#### Wrap-Up (3 minutes)

> "Two games in one lesson. Loops, random, scores, hints, and a clean break — all yours. Next week we open the Arcade and add Rock-Paper-Scissors. Save your Trinket, and I'll see you there."

Stay on the call 2-3 minutes to help anyone whose games aren't running.

---

## 🎓 Assessment & Notes

### The Deliberate Bug Demo

The single most valuable teaching moment is showing the guess-without-`int()` crash:

```python
guess = input("Your guess (1-20): ")   # BUG: guess is TEXT
if guess < secret:                       # text < number
    print("Too low!")
```

Run it, type a guess, and watch the `TypeError`. Ask: "Why did comparing crash?" Let them reason it out — `input()` gives text, and text can't be compared to a number — then fix with `int()`. This lands the concept far better than telling.

### During Class, Observe:

**Technical Skills:**
- [ ] Built both games and ran each successfully
- [ ] Used `random.randint(1, 6)` and `random.randint(1, 20)` correctly
- [ ] Kept `player_score`/`computer_score` with `+= 1` accumulators
- [ ] Wrapped the guess in `int()`
- [ ] Used `break` to exit the `while True` loop on a win
- [ ] Saved the Trinket named `Y2-T2-W6-MiniGames`

**Engagement:**
- [ ] Kept pace with the live build (thumbs up at each stage)
- [ ] Answered the chat checkpoints
- [ ] Enjoyed replaying the random games

### Students to Watch

**Need Extra Support:**
- Fell behind during a scoring or hint stage — paste the stage code privately; pair them for homework
- Guessing game crashes on compare — they forgot `int()`; check that line
- Dice scores don't add up — the win-check isn't indented inside the loop

**Ready for More Challenge:**
- Finished early — point them at the ⭐⭐⭐ homework (a "play again?" outer loop) or the halving strategy from the AI activity

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| `TypeError: '<' not supported between 'str' and 'int'` | The guess wasn't converted — must be `int(input(...))` |
| `NameError: name 'random' is not defined` | Missing `import random` at the top of the file |
| Guessing game never stops / keeps asking after a win | No `break` in the `else` branch — add it on the correct guess |
| Dice scores don't add up | Win-check `if/elif/else` isn't indented INSIDE the `for` loop |
| Winner announced every round instead of once | The final comparison is inside the loop — it belongs AFTER it (unindented) |
| `ValueError: invalid literal for int()` | User typed letters — the `try/except` handles this; check it wraps the `int(input(...))` |
| Rounds print 0, 1, 2 instead of 1, 2, 3 | Used `range(rounds)` — should be `range(1, rounds + 1)` |
| Student didn't save / lost the file | Recreate from the full solution block; stress the `Y2-T2-W6-MiniGames` name for Week 7 |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Completion:** how many students have BOTH games running and the file saved? (Anyone missing needs a nudge before Week 7 — the Arcade builds directly on this file.)
- **The `int()` concept:** did the text-vs-number crash land? If shaky, plan a 2-minute recap in Week 7.
- **The `while True` + `break` idea:** did students grasp that `break` is the only exit? This is a Term 2 cornerstone.
- **Pacing:** did the two "heart" stages (round-winner logic and the hints+break) get their time, or did banners eat it?

---

## 💭 Remember

**Today is about assembly and play, not new theory.**

Nothing today is a brand-new concept — it's five weeks of loop skills clicking together into two games. The magic is the moment a student plays their own Dice Duel or finally guesses the secret number and it works. Protect that moment: keep the pace steady, build in stages, and make sure EVERY student leaves with a saved, working `Y2-T2-W6-MiniGames` holding BOTH games. Next week's Arcade is built directly on top of it.

**They just built two real games. Let them play.** 🎮🔬

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
