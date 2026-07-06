# Year 2, Lesson 2: While Loops & Game Loops 🔄🎮

## Teacher's Guide

**Course:** Loops & Logic Mastery (Year 2, Term 2)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

Last week students met `for` loops with `range()`. This week completes the pair with the `while` loop — but the goal is NOT just "here's another loop". The real learning is **loop selection** (`for` when you know how many times; `while` when you loop until something happens) and the **game loop pattern** that underpins the entire Term 2 arcade project.

Students already met `while` in Term 1 (the `running` flag in the Calculator). Today we build on that memory and go deeper: looping on a **live condition** (`while lives > 0:`, `while guess != secret:`), counting loops, and the two patterns every game needs — the **"Keep Guessing"** loop and the **"Play Again"** wrapper. By the end, every student has built a working game loop skeleton — the exact structure they'll reuse in Week 7.

The single biggest risk of the lesson is the **infinite loop**. Treat it as a feature, not a disaster: deliberately trigger one, show the class how to hit Stop in Trinket, and turn it into the memorable moment of the day.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Write a `while` loop that repeats until a condition becomes False
2. Count up and count down with a `while` loop, updating the loop variable correctly
3. Choose between `for` and `while` using the "do I know how many times?" test
4. Build the "Keep Guessing" loop (`while guess != secret:`)
5. Build the "Play Again" wrapper (`while play_again == "yes":`) and combine both into a game loop
6. Recognise, escape (Stop in Trinket), and fix an infinite loop

### Key Success Metrics

- [ ] Every student runs a working countdown by minute 25
- [ ] Every student completes Stages 1 and 2 of the Magic Word Game; most complete Stage 3
- [ ] Every student has triggered AND escaped an infinite loop at least once (guided)
- [ ] Students can state the `for` vs `while` rule in their own words
- [ ] Students leave with a saved `Y2-T2-W2-WhileLoops` Trinket

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share and reactions enabled
- Students' Trinket accounts
- This teaching guide open during class
- A few extra `while` loops prepared for the "predict the loop count" chat warm-ups
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Rehearse the infinite loop live** — practise triggering one and hitting Stop in Trinket so you can demo it calmly and confidently
3. **Prepare 3-4 predict-the-count loops** to paste in the Zoom chat as warm-ups (vary count-up, count-down, and a tricky `while n >= 0`)
4. **Have the Magic Word Game solution open** in a separate Trinket so you can screen-share the working target
5. **Recall last week** — note which students were shaky on `for`/`range()`; they may need extra support tracing `while` conditions

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap the running flag + today's goal (game loops)
⏱️  8-20 min  → while with a condition: countdown, count-up, lives
⏱️ 20-30 min  → for vs while + predict-the-count chat warm-ups
⏱️ 30-38 min  → The infinite loop demo (trigger + Stop in Trinket)
⏱️ 38-58 min  → Build the Magic Word Game (3 stages)
⏱️ 58-70 min  → Common mistakes + homework + Week 3 teaser
⏱️ 70-75 min  → Wrap-up + questions
```

**Flexible timing:** The Magic Word Game build is the heart of the lesson — protect its 20 minutes. If time is tight, demo Stage 3 rather than having everyone finish it live, and set it as the first homework step.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap the `running` Flag (8 minutes)

Open by connecting to memory, not by introducing something new:

> "You've already used a `while` loop — remember wrapping your calculator so it kept going until you quit? That `running = True` switch? That was a `while` loop. Today we take it further."

Screen-share the `running` flag example. Trace it once aloud. Then set the hook:

> "The `running` flag is ONE way to control a while loop. Today the loop watches a condition all by itself — like `while lives > 0` or `while guess != secret`. That's how games are built."

#### Teaching Tips

- Keep this short — it's activation, not re-teaching. If the class looks blank on `running`, spend two extra minutes; if they nod, move on.

---

### Part 2: `while` With a Condition (12 minutes)

Screen-share the countdown. Then **trace it live using the table from the lesson** — say each check out loud: "5 greater than 0? Yes — print 5, subtract 1. 4 greater than 0? Yes..." This tracing habit is what makes `while` click.

```python
count = 5
while count > 0:
    print(count)
    count = count - 1
print("Blast off! 🚀")
```

Then show count-up (`while number <= 5:`) and the lives example (`while lives > 0:`). Land the key line every time:

> "Point at `count = count - 1`. THIS is the line that lets the loop end. Every while loop needs a line that moves it towards the exit."

#### Teaching Tips

- **Have students predict before you run.** Ask in the chat: "What's the last number printed — 1 or 0?" (It's 1 — a great discussion about why 0 never prints.)
- **The lives example is the emotional hook** — it's the first thing that feels like a real game. Ham it up: "You hit a trap! 💥"

---

### Part 3: `for` vs `while` + Predict-the-Count Warm-Ups (10 minutes)

This is the conceptual centre of the lesson. Put the comparison table on screen and drill the one-question test:

> "Do I know the exact number of repeats BEFORE I start? Yes → for. No, it depends on the user → while."

Fire the examples from the lesson as a chat game: "Print 1 to 100 — for or while?" ... "Keep asking until the password is right — for or while?" Call on students to justify their answer.

Then run 3-4 **predict-the-loop-count** loops you prepared. Paste one in chat, students type their predicted count, THEN you run it. Great for the classic off-by-one confusion (`while n > 0` vs `while n >= 0`).

#### Teaching Tips

- Expect the borderline case: "Give the player 3 lives — for or while?" Both work! Use it to show that `while lives > 0` reads more naturally for a game, even when the number is known.

---

### Part 4: The Infinite Loop Demo (8 minutes)

The set-piece of the lesson. Do this LIVE and make it dramatic:

> "Watch what happens if I forget one line..."

Run this on your shared screen:

```python
count = 5
while count > 0:
    print(count)
    # (deliberately leave out count = count - 1)
```

Let it scroll `5 5 5 5 5...` for a couple of seconds — the class will gasp/laugh. Then calmly:

> "This is an INFINITE loop. It'll never stop on its own because `count` never changes. Here's the escape: the Run button turned into a **Stop** button — I click it, and we're free."

Click Stop. Then fix it live by adding the missing line. Reinforce Mistake 2 too (changing the variable the wrong direction).

#### Teaching Tips

- **Reassure loudly:** "Everyone makes infinite loops — I still do! The skill isn't avoiding them, it's spotting them and hitting Stop." This removes fear before the build.
- Make sure every student knows WHERE the Stop button is in their own Trinket before moving on.

---

### Part 5: Build the Magic Word Game (20 minutes)

The main build. Everyone opens a new Trinket named `Y2-T2-W2-WhileLoops`. Work in three stages; **thumbs up after each**.

#### Stage 1 — Countdown (⭐, ~4 min)

Type the countdown, run it, then change it to start from 10. This warms up the loop mechanics and confirms everyone's Trinket works.

#### Stage 2 — Keep Guessing (⭐⭐, ~8 min)

```python
secret = "python"
guess = ""
while guess != secret:
    guess = input("Guess the magic word: ")
    if guess != secret:
        print("Nope! Try again. 🤔")
print("🎉 YES! You cracked it! 🔓")
```

The teaching moment here is **`guess = ""` before the loop**. Ask: "Why do we set guess to empty string first?" (Because the while line checks it before the loop runs — it must already exist, and must be different from the secret.) If someone forgets it, they'll get the `NameError` from Mistake 4 — celebrate that as a learning moment.

#### Stage 3 — Play Again Wrapper (⭐⭐⭐, ~8 min)

Wrap the game in `while play_again == "yes":`, add the `tries` counter, and ask at the end. This is the nested-loop moment — flag it gently:

> "There are now TWO while loops — one inside the other. The inner one runs one game; the outer one asks 'again?'. We'll go much deeper on nested loops in Week 4 — today just notice the shape."

#### Teaching Tips

- **Indentation is the #1 stumble** with nested loops. Screen-share and point at how far each block is indented. Trinket's auto-indent helps but check on shared screens.
- If Stage 3 runs long, demo it and set it as homework step 1 — don't sacrifice the wrap-up.

---

### Part 6: Common Mistakes + Homework + Wrap-Up (12 minutes)

#### Common Mistakes (5 min)

You've already live-demoed the infinite loop (Mistakes 1 & 2). Quickly show Mistakes 3 (`=` vs `==` → SyntaxError) and 4 (uninitialised variable → NameError) by running them so students see the actual error text. Errors students have *seen* are errors they *recognise*.

#### Homework: The Persistent Robot (5 min)

Walk through the requirements and example run. Point out it's the same "Keep Guessing" pattern with a riddle. Mention the Countdown Launcher alternative for students who prefer maths to riddles, and the tiers:

> "⭐ is the robot looping until correct. ⭐⭐ counts the tries. ⭐⭐⭐ adds a play-again wrapper — exactly what we built today."

#### Wrap-Up (2 min)

> "Today you built a game loop — a game that runs until you win, then asks 'again?'. That's the skeleton of the arcade you build in Week 7. Next week: how to BREAK out of a loop early. See you there!"

Stay on 2-3 minutes for questions and to help stragglers save their Trinkets.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Traced a countdown correctly (predicted the last printed number)
- [ ] Stated the for-vs-while rule in their own words
- [ ] Built the Keep Guessing loop with the variable initialised first
- [ ] Escaped an infinite loop using Stop
- [ ] Completed the Play Again wrapper (nested loops)

**Engagement:**
- [ ] Participated in predict-the-count chat warm-ups
- [ ] Used Zoom reactions at each checkpoint
- [ ] Saved a named Trinket

### Students to Watch

**Need Extra Support:**
- Can't say WHY the loop stops — trace one more example with them 1:1; the mental model of "check → run → check again" is the gap
- Repeated infinite loops without noticing — reinforce "if the output scrolls forever, hit Stop"

**Ready for More Challenge:**
- Finished Stage 3 early — point them at the ⭐⭐⭐ homework tier and suggest a hint system (reveal a letter after 3 wrong guesses) or a guess limit (previews Week 3's `break`)

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Student's code runs forever / output scrolls | Have them click **Stop** in Trinket; then check for a missing or wrong-direction update line (Mistakes 1 & 2) |
| `NameError: name 'guess' is not defined` | The loop variable wasn't created before the `while` line — add `guess = ""` first (Mistake 4) |
| `SyntaxError` on the while line | Almost always `=` instead of `==` in the condition (Mistake 3) |
| Loop runs one time too many / too few | Off-by-one — check `>` vs `>=` (or `<` vs `<=`); trace it out loud together |
| Nested loops confuse a student | Have them build Stage 2 fully first and get it working, THEN wrap it; don't write both loops at once |
| Play Again never repeats | They compared to the wrong text, or asked BEFORE the loop instead of at the end — check the `input()` is the LAST line inside the loop |
| Trinket won't save | Ensure logged in; use File → Save a copy; last resort share via the auto-generated link |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Loop-selection grasp:** could the class articulate for vs while? (If shaky, revisit at the top of Week 3.)
- **Infinite loop confidence:** did students stay calm and hit Stop, or panic? (Calm = the demo worked.)
- **Nested loops:** how many reached Stage 3 live? (Informs pacing for Week 4's nested patterns.)
- **Support list:** who needs a tracing 1:1 before next week?

---

## 💭 Remember

**The concept beats the syntax this week.**

The `while` keyword is easy. The hard, valuable idea is *loop selection* and the *game loop pattern*. If a student leaves able to say "for when I know how many, while when I loop until something happens" and has built a working play-again game, the lesson succeeded — even if their syntax is still a bit wobbly.

And make peace with infinite loops early — they are the rite of passage of `while`. A student who can trigger one, recognise it, and hit Stop is a student who truly understands how the loop's condition controls everything.

**They just built the heartbeat of every game. 🔄🎮**

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
