# Year 2, Lesson 6: Designing Your Adventure 🗺️✍️

## Teacher's Guide

**Course:** Functions (Year 2, Term 3)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This is the **project design + build-start** lesson for Term 3. For five weeks students learned functions in isolation — defining, parameters, return values, scope, functions calling functions. Today they point all of it at one goal: **their own text adventure game**.

The big idea is the **engine pattern**, and it must land cleanly because Weeks 7 and 8 are built directly on top of it:

- **Each scene is a function** that prints a description, offers choices via `input()`, and **`return`s the name of the next scene as a string** (or `"win"`/`"lose"`).
- **A main loop** keeps a `current` scene name, calls the matching scene function, and stores the returned string back in `current`.
- **A shared `inventory` list** (starts empty) lets scenes `append` items, and later scenes check membership with `if "item" in inventory:` to change the story.

The session has two clear halves: **plan on paper (story-map), then build live in Trinket**, one scene at a time, with Zoom checkpoints. Your job is pacing and correctness — the code is the content.

Three core goals:

1. **Every student leaves with a running 3-scene adventure** saved as `Y2-T3-W6-Adventure`
2. **Cement the engine pattern** — the make-or-break habit is that *every scene returns a scene name on every branch*
3. **Build design confidence** — students plan their own world on paper, so Week 7 is "finish MY game", not "type what teacher types"

> ⚠️ **CONTINUITY IS CRITICAL.** Week 7 extends THIS EXACT file. The structure below — `inventory = []` at the top, scene functions named `<name>_scene()` that take no parameters and return a string, and a `while current != "win" and current != "lose":` dispatch loop — must be identical for every student so next week's build instructions apply cleanly. Do not improvise a different structure live.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain the engine pattern: scene = function that returns the next scene's name
2. Story-map a branching game on paper, with every arrow pointing to a scene or an ending
3. Write a scene function that prints, offers a choice with `input()`, and returns a string
4. Use a shared `inventory` list to `append` an item and gate a later choice with `in`
5. Write a main dispatch loop that terminates correctly on `"win"`/`"lose"`

### Key Success Metrics

- [ ] Every student's 3-scene adventure runs end to end (both a WIN and a LOSE path)
- [ ] Every student has saved a Trinket named `Y2-T3-W6-Adventure`
- [ ] Students can explain why a scene must always `return` a scene name
- [ ] Students drew a story-map with no dangling arrows

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share; teacher's Trinket visible throughout
- **Paper and pen for every student** (or the Zoom whiteboard) — the story-map is not optional
- Students' Trinket accounts
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Type the full solution yourself once** in a fresh Trinket named `Y2-T3-W6-Adventure` — you'll build it live and it must be flawless
2. **Play all three example runs** (left→follow = WIN; right→push = LOSE; left→rest = LOSE) so your live demos match the lesson exactly
3. **Draw the story-map** on your whiteboard/paper beforehand so you can model it fast
4. **Rehearse the two headline bugs** you'll demo deliberately: a scene with no `return` (→ "Unknown scene!"), and a scene returning its own name (→ infinite loop; know where Trinket's **Stop** button is)
5. **Prepare a "catch-up" pasteable** of each scene's code in case someone falls behind — paste into Zoom chat, don't stall the class

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + "today we design YOUR game" + the engine pattern
⏱️  8-18 min  → Story-map on paper (Part A) — plan before code
⏱️ 18-28 min  → Inventory + start_scene (Part B) — build live
⏱️ 28-40 min  → forest_scene + cave_scene (Parts C & D) — the inventory gate
⏱️ 40-52 min  → The main loop (Part E) — the engine + full run
⏱️ 52-62 min  → Common mistakes (esp. missing return + infinite loop)
⏱️ 62-75 min  → Homework brief + Week 7 teaser + save + wrap-up
```

**Flexible timing:** The main loop (Part E) is the priority — protect its time. If the scene-building runs long, paste a scene's code in chat and move on; the pattern repeats, so once they've built one scene the rest are the same shape.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + The Engine Pattern (8 minutes)

Open with the hook — this is the term everyone's been waiting for.

> "For five weeks you've mastered functions. Today we aim all of it at ONE thing — your very own adventure game. And here's the magic trick: every SCENE of your story is just a function that tells you where to go next."

Screen-share the sample playthrough from the lesson. Then state the **three rules** of the engine pattern plainly and leave them on screen:

1. Each scene is a function that **returns the next scene's name**.
2. A main loop tracks `current` and calls the matching scene.
3. A shared `inventory` list carries items between scenes.

Then the non-negotiable setup instruction:

> "Create a NEW Trinket. Name it exactly Y2-T3-W6-Adventure. Type it in the chat when done. This is the file you KEEP — next week we finish this very game."

#### Teaching Tips

- **Don't skip the naming.** Weeks 7 and 8 assume this file exists. Verify names in the chat.
- Keep the intro tight. The engine pattern will make full sense once they *build* it — don't over-explain up front.

---

### Part 2: Story-Map on Paper (10 minutes)

This is the design half — resist jumping to code. Everyone draws.

> "Real game designers draw the map first. Box for each scene, arrow for each choice. Do it with me."

Model the 3-box map (start → forest/cave → win/lose) on your whiteboard. Then enforce the **two golden rules**:

- Every arrow points to a box OR to WIN/LOSE — no dangling arrows.
- Mark where the **map item** is picked up (the forest), because it will gate the cave.

Have students hold their paper up to the camera or thumbs-up when their map has no dangling arrows.

#### Teaching Tips

- **The dangling-arrow check previews the #1 bug.** An arrow pointing to nothing = a scene with no `return`. Name that link explicitly: "on paper this is a lazy arrow; in code it's a missing `return`."
- Keep maps to 3 boxes today. Bigger worlds are homework — but always mapped first.

---

### Part 3: Inventory + start_scene (10 minutes)

Now build. Type `inventory = []` at the very top and explain it's the shared backpack every scene can see.

Then build `start_scene()` line by line. Narrate the shape they'll reuse for every scene:

> "Describe the place with `print`. Offer a choice with `input`. Then — the important bit — `return` the NAME of the next scene as a string. Watch: `if`, `elif`, `else` — every single path ends in a `return`. There is NO way to leave this function without returning a scene name."

Run it. It'll ask, then finish (no loop yet) — that's fine.

#### Teaching Tips

- **Emphasise "return a string".** `return "forest"` with quotes — it's text, the scene's name.
- **Scene functions take NO parameters** and read `inventory` directly. Keep it that way for continuity; don't introduce passing `inventory` as an argument (that's a later idea).

---

### Part 4: forest_scene + cave_scene — The Inventory Gate (12 minutes)

Build `forest_scene()`. The star line is `inventory.append("map")` — the player picks up the map. Then `cave_scene()`, which is where the design pays off:

> "Look at the cave. `if \"map\" in inventory:` — we ASK the backpack what's inside. Got the map? You win. No map? You're stuck. ONE list turns a flat story into a real puzzle."

Run each scene mentally with the class: "If I went left then follow, what's in my inventory now? So which branch of the cave runs?"

#### Teaching Tips

- **This is the conceptual peak.** Take the time to show that the SAME cave scene gives different endings depending on inventory. That "aha" is what makes their homework interesting.
- If someone asks "why not just print win in the forest?" — great question: because the point is that scenes share state through `inventory`, which is exactly how Week 7's gated doors work.

---

### Part 5: The Main Loop — The Engine (12 minutes)

This is the heart. Build the loop and narrate the flow of `current`:

> "`current` starts as `\"start\"`. The loop asks: which scene are we in? Calls that function. Whatever it RETURNS becomes the new `current`. Round and round — until `current` is `\"win\"` or `\"lose\"`, and then the `while` stops."

Point out the `else: print("Unknown scene!"); current = "lose"` safety net and explain WHY it matters: it catches a typo'd scene name or a missing `return` (which returns `None`) instead of crashing or looping forever.

**Then the full run.** Do all three example runs live so students see WIN and both LOSE paths. Celebrate the first WIN loudly, then: **SAVE the Trinket.**

#### Teaching Tips

- **Build the loop incrementally, don't paste the whole block.** Add `start`, run, add `forest`, run, and so on. Students who fall behind can't recover from a pasted wall.
- **New scene = new function AND a new `elif`.** Say this now; it's the homework's most common trip-up (Common Mistake 4).
- **Indentation is the silent killer** — the `if`/`elif` bodies are 4 spaces. Trinket auto-indents after the colon; point that out.

---

### Part 6: Common Mistakes (10 minutes)

Live-code each so students see the real behaviour:

1. **A scene with no `return`** → returns `None` → hits the `else` → "Unknown scene! / Game over." THE big one. Show it fail, then add the `return`.
2. **A scene returning its own name** → infinite loop. Run it, let it spam a few lines, hit **Stop**, and explain. This is the scariest-looking bug, so demystify it.
3. **Case/quote mismatch on the choice** → `"Left"` vs `"left"` silently skips the branch.
4. **New scene function but no loop `elif`** → "Unknown scene!" again. Ties directly to the homework.

> "Two bugs to burn into your memory: forget a `return`, the game ends for no reason. Return your OWN name, the game never ends. Every scene must move you ONWARD."

---

### Part 7: Homework + Wrap-Up (10 minutes)

#### Homework: Grow Your Adventure (5 minutes)

Walk through it: open the SAME `Y2-T3-W6-Adventure`, add a new scene function, add its matching loop `elif`, add an inventory item, and gate a later scene with `if "item" in inventory:`. Show the `river_scene()` example.

> "Story-map FIRST — always. Then check every scene returns a scene name or win/lose. This homework is exactly what we'll do together next week, just for your OWN world."

Point out the tiers (4 scenes+item / 5 scenes+2 endings / gated scene).

#### Wrap-Up (3 minutes)

> "Five weeks of functions, and today you built a game ENGINE. Next week we finish YOUR whole adventure. Save your Trinket — I'll see you there."

Stay on the call 2-3 minutes for questions and to help anyone whose game isn't running or terminating.

---

## 🎓 Assessment & Notes

### The Deliberate Bug Demo

The single most valuable teaching moment is the **missing-return** demo:

```python
def forest_scene():
    print("🌳 You are in the forest.")
    # no return!
```

Run it, go left, and watch it print "Unknown scene! / Game over." Ask: "The forest looked fine — why did the game end?" Let them reason it out (the function returned `None`), then fix with `return "cave"`. This lands the engine's core rule far better than telling.

Pair it with the **infinite-loop** demo (`return "cave"` inside `cave_scene`) so students see both failure modes and learn where the **Stop** button is.

### During Class, Observe:

**Technical Skills:**
- [ ] Drew a story-map with no dangling arrows
- [ ] Wrote scene functions that `return` a string on every branch
- [ ] Used `inventory.append(...)` and `if "item" in inventory:`
- [ ] Built a loop that terminates on `"win"`/`"lose"`
- [ ] Saved the Trinket with the correct name

**Engagement:**
- [ ] Kept pace with the live build (thumbs up at each scene)
- [ ] Answered the chat checkpoints (what does start_scene return? what's in inventory?)
- [ ] Reacted to the missing-return and infinite-loop demos

### Students to Watch

**Need Extra Support:**
- Game ends immediately with "Unknown scene!" → a scene is missing its `return`, or a scene returns a name with no matching loop `elif`
- Game never stops / spams output → a scene returns its own name; show them **Stop** and fix the return
- Choice branch never runs → case/quote mismatch (`"Left"` vs `"left"`)

**Ready for More Challenge:**
- Finished early → point them at the ⭐⭐⭐ homework: a scene that can only be passed with the right item, and a second win/lose ending

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "Unknown scene!" then instant game over | A scene has no `return` (returns `None`), OR a returned scene name has no matching `elif` in the loop |
| Game never stops, same line repeats | A scene returns its OWN name — infinite loop. Press Stop; make it return a different scene or an ending |
| A choice branch is skipped | Comparing the wrong string — check case and quotes (`choice == "left"`, lowercase, quoted) |
| `IndentationError: expected an indented block` | The lines inside a scene function or a loop branch aren't indented 4 spaces |
| Inventory gate never triggers | Item added with a different spelling than the `in` check — `append("map")` must match `"map" in inventory` exactly |
| Student added a scene but it "does nothing" | New scene needs BOTH a function AND an `elif current == "name":` branch in the loop |
| Student didn't save / lost the file | Have them recreate from the full solution block; stress the `Y2-T3-W6-Adventure` name for next week |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Completion:** how many students have a running, correctly-named adventure with both a WIN and a LOSE path? (Anyone missing needs a nudge before Week 7 — the whole next lesson builds on this file.)
- **The engine pattern:** did "every scene returns a scene name" land? If shaky, plan a 2-minute recap at the start of Week 7.
- **Story-mapping:** did students actually plan on paper, or rush to code? Mapping discipline pays off hugely in Week 7.
- **Pacing:** did the main loop get its full time, or did scene-building eat it? Adjust the paste-ahead strategy.

---

## 💭 Remember

**Today is about design and the engine, not a big finished game.**

The magic moment is when a student plays their own 3-scene world and it branches — win one way, lose another, all decided by an item they picked up. Protect that moment: plan on paper first, build one scene at a time, and make sure EVERY student leaves with a saved, working `Y2-T3-W6-Adventure` whose loop actually terminates. Next week's full engine is built directly on top of it.

**They just designed a world and built the engine to run it. Let them feel like game makers.** 🗺️✍️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
