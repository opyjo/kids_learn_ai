# Year 2, Lesson 7: Project — Text Adventure Engine 🗺️⚔️

## Teacher's Guide

**Course:** Functions (Year 2, Term 3)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 7 of 8

---

## 📋 Lesson Overview

### Purpose

This is the **term project build week**. Students take the scene-function engine pattern they met in Week 6 and use it to build one complete, polished, playable text adventure — *The Lost Temple of Zaria*. This lesson has three core goals:

1. **Ship a finished project** — by the end, every student has a full adventure (6 scenes, an inventory, two endings) they'll demo next week
2. **Master the engine as a pattern** — a dispatcher loop plus scene functions that each return the next scene's name; this is genuinely how real games are structured
3. **Make items matter** — the "aha" of the day is the **inventory gate**: a choice that behaves differently depending on what the player is carrying

This is a **live build-along**, not a lecture. You code on shared screen, students follow scene by scene in their own Trinket. Keep everyone synchronised with thumbs-up checkpoints after each stage. There is **no badge this term** — the project itself is the reward, and next week's showcase is the celebration.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Structure a program as a **dispatcher loop** plus **scene functions**, each returning the next scene's name
2. Use a **list** as an inventory with `append` (collect) and `in` (check)
3. Build an **inventory gate** — a nested `if "item" in inventory:` that unlocks a choice
4. Guarantee **termination**: every scene returns a valid name, every returned name has a branch, and every path flows to `win`/`lose`
5. Handle unexpected input with a graceful `else` **default** in every scene

### Key Success Metrics

- [ ] Every student's dispatcher loop runs and reaches an ending cleanly
- [ ] Every student's garden scene appends `"key"` to the inventory
- [ ] Most students' hall scene gates the golden door on `if "key" in inventory`
- [ ] Every student can play at least one full **win** and one full **lose**
- [ ] Students leave with a playable program saved as `Y2-T3-W7-Adventure`

### Materials Needed

- Computer with internet, Zoom with screen share
- The full solution open in your own Trinket, pre-tested (every path!)
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links
- A drawn or slide copy of the **temple map** (Part 2 of the lesson) to share on screen

### Pre-Lesson Preparation (15 minutes before class)

1. **Pre-build the whole adventure yourself** and play every path: the win via garden→torch→door, the win via bridge-leap, the lose via no-torch tunnel search, the lose via bridge collapse. Smooth demos come from rehearsal.
2. **Have the map ready to show.** The single biggest predictor of success is whether students can *see* the structure before they type it. Share the map diagram early and keep referring back to it.
3. **Test Zoom and Trinket** — confirm code runs and screen share works.
4. **Prepare the starter code** to paste in chat, so nobody loses time copying it.
5. **Rehearse the "returns None" demo** (Common Mistake 1) — deliberately deleting a `return` and showing the "Unknown scene!" crash is the most powerful teaching moment of the day.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome + recap the engine pattern (3 rules)
⏱️  8-15 min  → Plan the MAP together + the backpack (inventory)
⏱️ 15-25 min  → Part 4: dispatcher + start scene ("Unknown scene!" is expected)
⏱️ 25-35 min  → Part 5: garden scene (append the key & torch)
⏱️ 35-48 min  → Part 6: hall scene — THE INVENTORY GATE (the big idea)
⏱️ 48-60 min  → Part 7: tunnel, bridge, treasure + the two endings
⏱️ 60-68 min  → Full playthroughs + common mistakes
⏱️ 68-75 min  → Homework (personalise it) + Week 8 teaser + wrap-up
```

**Flexible timing:** The **inventory gate (Part 6)** is the heart of the lesson — protect its time. If you're running behind, the **torch** (second gate in the tunnel) is the most cuttable feature: the tunnel can simply route to the bridge for everyone, and the key/door gate alone satisfies the "item unlocks a choice" objective.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap the Engine Pattern (8 minutes)

Open by reminding them of last week's win: the scene-function engine. Put the **three rules** on screen and say them aloud:

> "One: every scene is a function. Two: every scene RETURNS the name of the next scene — just a string. Three: one loop, the dispatcher, looks at where we are and calls the right scene. Today we take that pattern and build something big with it."

Emphasise the mental model: **`current` is a signpost.** Each scene turns the signpost to point at the next place; when it points to "win" or "lose", the journey ends.

#### Teaching Tips

- **Don't reteach functions from scratch.** They know `def`, `return`, and scope. This is *assembly week* — the joy is seeing the pieces click into a whole.
- **Set the stakes:** "By the end of today you'll have a game a friend can actually play." 11-13s respond to real-world framing.

---

### Part 2: Plan the Map + the Backpack (7 minutes)

**Draw the map before any code.** Share the temple map from the lesson on screen. Trace a finger from START down each branch to an ending. This is the single most important habit you can model today.

> "Never write a big adventure straight into code. Draw it first. Every arrow must lead somewhere, and every path must reach win or lose."

Then introduce the inventory in the smallest possible way — it's just a list with two tricks:

> "No dictionaries yet — that's Term 4. Our backpack is a plain list. `append` to pick something up, `in` to check if we have it. That's the whole toolkit, and it's enough to build real puzzles."

#### Teaching Tips

- **Point at the two items on the map** (key and torch) and name what each unlocks. Plant the idea of gating *before* they write it.
- **Keep the inventory list global and simple.** Scenes read and append to the one module-level `inventory` list. Do not get drawn into passing it as a parameter — that's a scope rabbit hole they don't need today.

---

### Part 3 & 4: The Dispatcher + Start Scene (10 minutes)

Paste the starter (backpack, `start_scene`, engine loop). Run it and let them hit **"Unknown scene!"**.

> "That's not a bug — that's correct! `start_scene` returns 'hall' or 'garden', but the loop has no elif for those yet. As we add scenes, we add elifs, and this message disappears."

Reframing the "error" as *expected progress* keeps nervous students calm.

**Highlight the `else` on the choice.** This is where you introduce graceful defaults:

> "Look at the third branch. If someone types '3' or 'banana' or just presses Enter, we don't crash — we print a friendly note and pick a sensible path. Every scene we write gets a default like this. Good games never punish a typo."

#### Teaching Tips

- **The dispatcher is the scariest-looking part.** Read it line by line: "`current` holds where we are. The scene returns where to go next. We store that back in `current`. Round again."
- **Reassure about "Unknown scene!"** — several students will think they've broken it. Say it loudly: "You'll ALL see that message now. It's the placeholder."

---

### Part 5: Scenes That Give Items (10 minutes)

Build `garden_scene()`. The key line is `inventory.append("key")`.

> "This scene has a choice, but LOOK — no matter what they pick, it returns 'hall'. Both paths are safe. The only difference is whether they also grabbed the torch by searching deeper."

Add the `elif current == "garden":` to the dispatcher and run it. Have everyone print `inventory` once (or just trust the "You slip it into your pack" message) to confirm the key was collected.

#### Teaching Tips

- **Name the pattern:** "A scene can hand you an item AND send you onward. Collecting is just one line: `append`."
- **Watch the elif.** The #1 omission this week is writing a beautiful scene function and forgetting to wire it into the dispatcher. Say every time: "New scene? New elif. Always a pair."

---

### Part 6: The Inventory Gate — the Locked Door (13 minutes)

**This is the lesson's big idea. Protect its time.**

Build `hall_scene()` slowly. The magic is the **nested `if`**:

> "The player chooses the door. But whether it OPENS depends on the backpack. `if choice == '1'` — they tried the door. Then INSIDE that, `if 'key' in inventory` — do they have it? Have the key: the door opens, go to treasure. No key: it's locked, so we send them to the tunnel instead."

Do the live comparison that makes it land:
- Play once **with** the key (via the garden) → door opens → treasure.
- Play once **without** the key (straight from the gate) → same choice, locked door → tunnel.

> "Same button, two different outcomes — because of what you're carrying. THAT is why items matter. That's an inventory gate."

**Critical correctness point:** the locked-door branch **still returns a valid scene** (`"tunnel"`). Stress this:

> "When a gate fails, you must STILL return somewhere. If you just print 'locked' and forget to return, the scene returns None and the game dies. A gate reroutes — it never dead-ends."

#### Teaching Tips

- **Draw the two arrows out of the door on the map** as you code: door→treasure (with key), door→tunnel (without). Seeing both arrows demystifies the nested `if`.
- **This is where fast finishers can gold-plate later** — a second item, a third gate. Note who's ahead for the homework challenge tiers.

---

### Part 7: Tunnel, Bridge, Treasure + Endings (12 minutes)

Add the last three scenes. Pace picks up here — they're applying the same shape three more times.

- **Tunnel:** the second gate (torch). Searching in the dark without a torch is the lose; with a torch it's a shortcut to treasure.
- **Bridge:** pure risk, no item — a clean example of a scene with a win-ward and a lose-ward branch.
- **Treasure:** the final choice and the primary **win** ending.

> "Notice every one of these scenes ends every path in a return, and every returned name — treasure, bridge, lose, win — has somewhere to go. That's the checklist for a game that always finishes."

#### Teaching Tips

- **Endings are just strings too:** "'win' and 'lose' aren't special functions — they're names the loop watches for. When `current` becomes one of them, the `while` condition is False and we drop out to the final message."
- **Run the whole thing end to end** once assembled. Play a win, play a lose, deliberately mash a wrong key to show the defaults holding.

---

### Part 8: Full Run-Through + Common Mistakes (8 minutes)

Assemble/paste the full program and play both scripted runs from the lesson (the garden→torch→door win, and the no-key→no-torch lose). Then walk the four Common Mistakes — the first two are the ones that will actually bite this week:

1. **Scene returns None** (forgot a `return` on some path) → "Unknown scene!". *Demo this live by deleting an `else` return.*
2. **Returned name has no elif** → "Unknown scene!". The fix is always: new scene, new elif; check spelling.
3. **Infinite loop** — a scene returns its own name on every path.
4. **`choice == 1`** instead of `choice == "1"` — the number-vs-string trap.

> "If you ever see 'Unknown scene!', it's almost always one of two things: a scene forgot to return, or you returned a name with no matching elif. Check those first."

---

### Part 9: Homework + Wrap-Up (7 minutes)

Homework is explicitly **showcase prep**: personalise the theme and make sure every path reaches an ending.

> "Next week is your big demo — a classmate will PLAY your game live. This week: reskin it as your own story, keep the 5 scenes, the item gate, and both endings, and add ONE new thing. Then test every path. Bring THIS exact Trinket next week."

Preview Week 8: the showcase and celebration — students play each other's adventures. Build excitement. Paste submission instructions in chat.

If time allows, run the optional **AI activity** discussion (decision trees / game AI navigating state graphs) — keep it light, 2-3 minutes of Zoom chat.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Every scene function returns a valid scene name on EVERY path (including `else`)
- [ ] Every scene the student writes has a matching `elif` in the dispatcher
- [ ] `inventory.append("key")` runs and the gate reads `if "key" in inventory`
- [ ] The nested `if` in the hall correctly gives two outcomes for one choice
- [ ] The loop reaches `win`/`lose` on every playthrough

**Understanding:**
- [ ] Can explain what `current` holds and how a scene "moves" the player
- [ ] Can explain why the locked-door branch must still return a scene name

### Students to Watch

**Need Extra Support:**
- Wrote a scene but forgot the `elif` → "Unknown scene!". Pair them up or share screen; reinforce "new scene, new elif".
- Confused by the nested `if` in the hall — trace it aloud with them: outer `if` = which choice, inner `if` = do they have the item.

**Ready for More Challenge:**
- Point them at the ⭐⭐⭐ homework: a scene reachable only after collecting TWO items (`if "key" in inventory and "torch" in inventory:`) — a great stretch that previews compound conditions.

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "Unknown scene!" after adding a scene | They forgot the matching `elif` in the dispatcher — new scene, new elif |
| "Unknown scene!" mid-game, seemingly random | A scene has a path with no `return` (returns None). Check every branch, especially `else` |
| Door never opens even with the key | Check the append ran (`inventory.append("key")`) and the gate reads `"key"` with the same spelling |
| Game runs forever | A scene returns its own name on every path; ensure at least one path leads onward |
| Choice always hits the `else` | They wrote `choice == 1` (number) instead of `choice == "1"` (string) |
| `IndentationError` around the nested `if` | The inner `if "key" in inventory:` must be indented under the outer `if choice == "1":` |
| Lost their Week 6 work | Doesn't matter — today starts a fresh Trinket. Paste the starter code in chat |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Did every student reach a working win AND lose?** Anyone who didn't needs a catch-up before the Week 8 showcase — nobody should demo a game that crashes or dead-ends.
- **How did the inventory gate land?** It's the term-project's key concept. If several struggled with the nested `if`, plan a 2-minute recap at the start of Week 8.
- **Who's ready to demo confidently vs who's nervous?** Note shy students now so you can gently prep them (and pick a friendly play-tester partner) for next week.
- **Timing:** did Part 6 (the gate) get its full time? Adjust if the early recap ran long.

---

## 💭 Remember

**This is the week the term's learning becomes a thing they made.**

All term, functions have been small and abstract — define one, call one, return a value. Today those pieces snap together into a world with a map, a locked door, a collapsing bridge, and an ending that depends on the choices the player made. When a student hands the keyboard to a friend next week and watches them play, they stop being someone who "did the exercises" and become someone who **built a game**. Celebrate that. It's the whole point of the project.

**You've got this!** 🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
