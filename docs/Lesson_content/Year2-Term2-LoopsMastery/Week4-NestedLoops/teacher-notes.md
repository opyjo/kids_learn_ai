# Year 2, Lesson 4: Nested Loops & Patterns 🔳✨

## Teacher's Guide

**Course:** Loops & Logic Mastery (Year 2, Term 2)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 2 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

This is the conceptual peak of the loops term. Students already control a single loop (`for`, `while`, `break`, `continue`). Today they take the leap to a **loop inside a loop** — the single most important structure for anything two-dimensional: grids, tables, images, and (the term's payoff) **game boards**.

The lesson has three core goals:

1. **Cement the one big idea** — the inner loop runs *fully* for every step of the outer loop. Everything else today is a consequence of that one sentence.
2. **Build the `end=""` + `print()` combo into muscle memory** — this is the mechanical skill students will lean on for the rest of the term.
3. **Connect nesting to the arcade dream** — the checkerboard IS a game board. Keep pointing forward so the abstraction feels purposeful, not academic.

The "Pattern Studio" framing turns an abstract concept into something visual and shareable. Kids this age are motivated by output they can *see* and show off — lean into that.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what a nested loop is and state that the inner loop completes fully for each outer step
2. Predict how many total iterations/lines a nested loop produces (outer × inner)
3. Use `print(..., end="")` to stay on a line and a bare `print()` to end a row
4. Build a rectangle grid and a star pyramid (both with `"*" * i` and with a nested loop)
5. Build a times-table grid and a repeating symbol (kente) pattern
6. Diagnose the three classic errors: missing `print()`, wrong indentation, misplaced `print()`

### Key Success Metrics

- [ ] Every student runs a working rectangle grid by the midpoint
- [ ] Most students complete the star pyramid *both* ways
- [ ] Students can correctly predict the line-count of a simple nested loop
- [ ] Students leave able to explain "inner loop runs fully each outer step" in their own words

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and reactions enabled
- Students' Trinket accounts; today's Trinket: `Y2-T2-W4-NestedLoops`
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-type the key examples** into a Trinket so you can live-run them without typos: the rectangle, both pyramids, the times-table grid, and the kente strip
3. **Rehearse the two live "crashes"** — the all-on-one-line output (missing `print()`) and the `IndentationError`. You will trigger these on purpose.
4. **Have the prediction question ready** in chat: the `range(4)`/`range(3)` → 12 lines example
5. **Prepare emoji blocks** — copy `🟨🟥🟩⬛` somewhere handy; emoji entry can slow students down on some devices

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap + the "game board needs rows AND columns" hook
⏱️  8-20 min  → Part 1: loop inside a loop + prediction checkpoint
⏱️ 20-30 min  → Part 2 & 3: end="" combo + rectangle grid
⏱️ 30-42 min  → Part 4 & 5: star pyramids (both ways) + times-table grid
⏱️ 42-52 min  → Part 6: kente strip + checkerboard (game-board tie-in)
⏱️ 52-62 min  → Common mistakes (two live crashes) + Pattern Studio
⏱️ 62-75 min  → AI tie-in + homework + Week 5 teaser + wrap-up
```

**Flexible timing:** If the class grasps nesting quickly, spend the extra minutes in Pattern Studio letting them invent their own patterns. If they struggle, cut the kente/checkerboard section and protect the rectangle + pyramid core.

---

## 📚 Detailed Teaching Guide

### Part 1: The Big Idea — A Loop Inside a Loop (12 minutes)

Open with the hook, not the syntax:

> "Last week you steered a single loop like a pro. But look — a game board isn't one line. It's rows AND columns. To build rows and columns, we need a loop... inside a loop."

Screen-share the `Adwoa` example. Before running it, ask the class to predict the count. Then run it and reveal **12**.

The whole lesson hinges on ONE sentence. Say it, write it in chat, and make the class repeat it:

> **"The inner loop runs all the way through for every step of the outer loop."**

Use a physical analogy that lands with this age group:
- **Clock:** the minute hand (inner) sweeps all 60 minutes for every single step of the hour hand (outer).
- **Register/rows of seats:** for each ROW (outer), you count every SEAT in that row (inner) before moving to the next row.

#### The Prediction Checkpoint

Post the `range(4)`/`range(3)` example in chat and collect guesses BEFORE running. This is diagnostic gold — students who say "7" (adding) instead of "12" (multiplying) have the mental model backwards. Gently correct with the analogy, don't just give the number.

#### Teaching Tips

- **Resist showing patterns first.** Nail the counting idea with plain text (`Adwoa`, `hi`) before any stars appear. If students only ever see stars, some think nesting is "a star thing."
- **Use the multiplication table** in the lesson to reinforce outer × inner = total.

---

### Part 2 & 3: The `end=""` Combo + Rectangle Grid (10 minutes)

Introduce `end=""` *gently* and concretely. Show the `A`/`B`/`C` example both ways so they SEE the difference between `ABC` and a vertical stack.

Land the mental model of three distinct tools:

| Tool | Job |
|---|---|
| `print("*")` | print, then drop to a new line |
| `print("*", end="")` | print, then STAY on the line |
| `print()` | print nothing, just END the line |

Then build the rectangle live. **Narrate the trace out loud** as you type — "row 0, inner loop lays 5 stars, then the bare print breaks the line..." The placement of the bare `print()` (inside outer, outside inner) is the crux; point at it explicitly on screen.

#### Teaching Tips

- **The indentation of that bare `print()` is everything.** Zoom in on your editor. Consider using a coloured box or cursor to show it aligns with the inner `for`, not the inner `print`.
- Do the ⭐ checkpoint (change to 2 rows of 8) so students prove they can *control* the shape, not just copy it.

---

### Part 4 & 5: Pyramids + Times-Table Grid (12 minutes)

Show the pyramid **both ways** and explicitly discuss the trade-off:

> "`'*' * i` is quicker for plain stars. But the nested loop is more POWERFUL — you can put anything in each spot: numbers, colours, symbols. That power is what builds a real grid."

The key new idea in the nested pyramid is that `range(i)` **changes length each row** — that's what turns a rectangle into a triangle. Make sure students see *why* it grows, not just that it does.

For the times-table grid, the `f"{row * col:4}"` width formatting is the only genuinely new syntax. Frame it as an old friend (f-strings from Term 1) with a small new trick (`:4` = "at least 4 wide, so columns line up"). Don't over-explain it; if a student uses `end="\t"` (a tab) instead, that's fine too.

#### Teaching Tips

- **Count the stars aloud** with the class for the pyramid — 1, 2, 3, 4, 5 — so tracing becomes a habit.
- If the grid alignment confuses anyone, show it once WITHOUT the `:4` so they see the ragged columns and appreciate why width matters.

---

### Part 6: Kente Strip + Checkerboard (10 minutes)

This is the joyful, cultural, show-off section. The kente strip connects code to Ghanaian weaving — celebrate that. Let students swap the emoji and the repeat count to make their own designs.

The checkerboard (`if (row + col) % 2 == 0`) is the payoff moment:

> "This checkerboard? It's LITERALLY a game board. Draughts, chess, minesweeper — all grids, all nested loops. Remember this in a few weeks when we build the arcade."

Don't get bogged down in the `(row + col) % 2` maths — it's an enrichment flourish, not a required skill. Present it as "a clever trick" and move on if the class is tiring.

#### Teaching Tips

- **Emoji can misbehave** on some setups (alignment, entry). Have a text-symbol fallback ready (e.g. `"X"` and `"."` for the checkerboard) so no one is stuck.

---

### Part 7: Common Mistakes — Two Live Crashes (10 minutes)

Do these LIVE. Seeing the actual behaviour is worth more than any explanation.

1. **Missing `print()`** → run it, watch all 15 stars land on one line. "Where did our rows go? We never told Python to break the line." Then add the `print()` and rerun. Instant fix, instant understanding.
2. **`IndentationError`** → delete the indentation on the inner `for`, run it, read the error message aloud: *"expected an indented block."* "Python decides what's inside what by indentation. Boxes inside boxes." 📦
3. **Misplaced `print()`** (inside the inner loop) → the thin-column bug. Great for reinforcing that WHERE the bare `print()` sits changes everything.

#### Teaching Tips

- **Normalise the errors.** "Every single programmer writes these. The skill isn't avoiding them — it's reading the message and fixing them fast."
- Keep a tally: which mistake does YOUR class make most? Use it to calibrate next week's live-coding.

---

### Part 8: Pattern Studio + Wrap-Up (13 minutes)

Pattern Studio is the hands-on consolidation. Run it as light stations, not a race — the goal is confident building, not speed.

- Circulate via shared screens and the chat; celebrate variety ("Kofi's kente is all blues — beautiful!").
- Fast finishers do the combined banner version and paste patterns in chat.

#### AI Tie-In (keep it to ~2 minutes)

Use the `ai_activities` prompt: a photo is a grid of pixels; AI walks it row-by-row, column-by-column — exactly like today's nested loop. The chat question (100 × 100 = 10,000 pixels) reinforces outer × inner one more time. Keep it light and wondrous; do not turn it into a lecture.

#### Homework + Week 5 Teaser (5 minutes)

Walk through the Pattern Artist tiers. Stress that ⭐ (two patterns with titles) is the mission; the hollow-rectangle ⭐⭐⭐ is genuinely stretchy (`if` inside a nested loop) and only for the keen.

Then tease Week 5 with energy:

> "You can build the board. But right now your programs do the SAME thing every time — boring for a game! Next week: randomness, dice, score and lives. That's when your loops start to feel like real games."

Stay on the call 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Predicted the nested-loop line count correctly (multiplies, not adds)
- [ ] Built a rectangle grid with the `end=""`/`print()` combo
- [ ] Built a star pyramid (bonus: both ways)
- [ ] Placed the bare `print()` in the correct spot
- [ ] Read and fixed an IndentationError independently

**Engagement:**
- [ ] Joined the prediction checkpoint in chat
- [ ] Used Zoom reactions during builds
- [ ] Personalised a pattern (own emoji/symbols) in Pattern Studio

### Students to Watch

**Need Extra Support:**
- Adds instead of multiplies for the line count — re-run the analogy 1:1
- Keeps landing everything on one line — hasn't internalised where the bare `print()` goes; pair-program one grid slowly

**Ready for More Challenge:**
- Finished all stations early — point them at the ⭐⭐⭐ hollow rectangle, or challenge them to draw a pyramid that points the OTHER way (right-aligned, using spaces)

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "All my stars are on one line!" | Missing bare `print()` after the inner loop — the #1 issue today. Show where it goes. |
| `IndentationError` everywhere | Trinket auto-indents after `:`; teach students to trust it and to align the bare `print()` with the inner `for`. |
| Thin single column of stars | The bare `print()` is *inside* the inner loop — move it out one level. |
| Emoji won't type / misalign | Switch to text symbols (`X`/`.`); alignment is cosmetic, the logic is what matters. |
| Grid columns are ragged | They dropped the `:4` width — add it back, or use `end="\t"`. |
| Class races ahead | Extend Pattern Studio: right-pointing pyramid, hollow square, or a 2-colour kente they design. |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept check:** could students state "inner loop runs fully each outer step" unprompted? If not, revisit at the top of Week 5.
- **Mechanical check:** who still misplaces the bare `print()`? They'll need it solid before the game-building weeks.
- **Most common error:** missing `print()` vs indentation vs misplacement — calibrate next week's live demo.
- **Enthusiasm:** did the game-board tie-in land? Note who lit up at the arcade mention — they're your Week 6-7 champions.

---

## 💭 Remember

**One sentence carries this whole lesson:** *the inner loop runs fully for every step of the outer loop.* If students leave believing (and demonstrating) that, everything two-dimensional they meet for the rest of Year 2 — grids, tables, images, game boards — will click into place.

Today they stopped drawing lines and started drawing **worlds**. 🔳✨

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
