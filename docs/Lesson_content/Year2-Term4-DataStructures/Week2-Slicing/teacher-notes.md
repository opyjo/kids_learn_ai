# Year 2, Lesson 2: Slicing & Searching Lists ✂️🔍

## Teacher's Guide

**Course:** Data Structures (Year 2, Term 4)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

Last week (Lists Level Up) students learned to *build and change* lists — indexing, `append`, `insert`, `remove`, `len`. This week they learn to *interrogate* lists: grab pieces of them (slicing) and search them (`in`, `.index()`, `.count()`, and collecting loops). These are the exact operations the Term 4 project — the **Contact Manager** — is built on: "is this contact already saved?", "where is it?", "show me matches." Frame every skill as a Contact Manager building block.

The session has three core goals:

1. **Make the half-open range stick** — the single biggest stumbling block today is that the slice stop is *excluded*. Every student should be able to say "up to, but not including" by the end.
2. **Build the safe-search habit** — check with `in` before calling `.index()`, so `ValueError` never surprises them. This pairs with the `try`/`except` they met earlier in Year 2.
3. **Introduce the collecting-loop pattern** — empty list → loop → `if` → `append`. This is a workhorse pattern they'll reuse all term.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Slice a list using `[start:stop]`, `[:stop]`, `[start:]`, `[:]`, and negative slices like `[-2:]`
2. Explain that the start is included and the stop is excluded (half-open range)
3. Use the `in` operator to test membership and drive an `if` statement
4. Use `.index()` to find an item's position, and avoid its `ValueError` by checking with `in` first
5. Use `.count()` to tally occurrences
6. Write a loop that collects all items matching a rule into a new list

### Key Success Metrics

- [ ] Every student runs at least one working slice by minute 25
- [ ] Most students correctly predict `leaderboard[1:3]` in the Zoom chat (or self-correct after running it)
- [ ] Every student writes an `in`-based `if` check
- [ ] Most students complete the collecting loop (bonus/homework tier)
- [ ] Students can state, unprompted, why `.index()` on a missing item crashes

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Students' existing Trinket accounts
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links
- The `leaderboard` example ready to paste for the List Detective activity

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-load two Trinkets:** the slicing demo (Parts 1–2) and the searching demo (Parts 3–6), so you can flip between them without retyping
3. **Draw or paste the index table** (`0 1 2 3 4` above the values) — you will refer to it constantly; a shared visual is the fastest way to teach the off-by-one rule
4. **Rehearse the two deliberate crashes:** `names.index("Musa")` → `ValueError`, and confirm the *non*-crash of `names[1:99]`. Students learn the difference by seeing both live.
5. **Have the Contact Manager tie-in ready** — remind students what they're building towards; it motivates the "why."

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap last week + BrightByte hook (slice, check, find, collect)
⏱️  8-25 min  → Part 1-2: Slicing (index table, half-open rule, shortcuts, negatives)
⏱️ 25-40 min  → Part 3-5: Searching (in, .index() + ValueError, .count())
⏱️ 40-50 min  → Part 6: Collecting loop pattern
⏱️ 50-62 min  → List Detective class activity
⏱️ 62-75 min  → Common mistakes + Week 3 teaser + homework + wrap-up
```

**Flexible timing:** Slicing (Parts 1–2) is the conceptual heart — protect its 17 minutes. If you're short at the end, the collecting loop can move fully into homework, since it's re-introduced in Weeks 5–6 anyway.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + Hook (8 minutes)

Open by connecting to last week:

> "Last week you learned to BUILD lists — add, insert, remove. Today you learn to ASK QUESTIONS about them. Three detective questions: 'Show me the top 3' — that's slicing. 'Is Kofi in here?' — that's searching. 'Where is Ama?' — that's finding a position. These are the exact things your Contact Manager will do."

Keep it under 8 minutes. This cohort dislikes long recaps.

---

### Part 2: Slicing (Parts 1-2 of the lesson, ~17 minutes)

**Lead with the index table, always.** Screen-share the `0 1 2 3 4` row above the values. Point at the cells physically as you trace `numbers[1:3]`.

- Trace `numbers[1:3]` → `[20, 30]` **by pointing**: "start AT index 1... stop BEFORE index 3... so we take 1 and 2, NOT 3."
- Introduce the mantra **"up to, but not including"** and have the class say it back in the chat.
- Offer the counting trick: `stop - start` = number of items (`3 - 1 = 2`).
- Then the shortcuts table: `[:2]`, `[2:]`, `[:]`. Emphasise "blank start = beginning, blank stop = end."
- Negative slices: `names[-2:]` = "the last two." Draw negative indexes under the table (`-5 -4 -3 -2 -1`).
- **Stress the two 'never' facts:** slicing never changes the original (it returns a new list), and slicing never crashes on out-of-range numbers.

#### Zoom Checkpoint

Have everyone run the `scores[:3]` snippet and thumbs-up. This confirms the whole class can produce a working slice before you move on.

#### Common Confusions to Pre-empt

- **"Why isn't index 3 included?"** — This is THE question. Don't rush past it. The half-open range means `list[a:b]` and `list[b:c]` join up perfectly with no gaps and no overlaps — a genuinely useful property worth mentioning to the curious.
- **Mixing up `[2]` and `[2:]`** — one item vs. a sub-list. Show both side by side: `names[2]` → `'Zara'` (a string), `names[2:]` → `['Zara', ...]` (a list).

---

### Part 3: Searching — `in`, `.index()`, `.count()` (~15 minutes)

#### The `in` operator (5 min)

Live-code `"Ama" in names` → `True` and `"Musa" in names` → `False`. Then wrap it in an `if`/`else`. Land the Contact Manager tie-in immediately: "This is how you'll stop saving the same person twice."

#### `.index()` and the ValueError (7 min)

- Show `.index("Zara")` → `2`, and the `place + 1` human-position trick.
- **Then crash it on purpose.** Run `names.index("Musa")`, let the red `ValueError: 'Musa' is not in list` appear, and pause:

> "It didn't return -1. It didn't return nothing. It CRASHED. `.index()` has a temper. So what's the safe habit?"

- Elicit "check with `in` first" from the class, then show the guarded version. Connect back to `try`/`except` from earlier in Year 2 — mention that `try`/`except` is the ⭐⭐⭐ homework route.

#### `.count()` (3 min)

Quick and cheerful — the votes example. Point out that `.count()` of a missing item calmly returns `0` (no crash), unlike `.index()`.

---

### Part 4: The Collecting Loop (~10 minutes)

This is a new *pattern*, not just a new method. Teach it as a fixed three-step recipe and write the recipe on screen:

```
1. empty results list
2. loop through the original
3. if it matches → append
```

- Live-code the `high_scores` example slowly, narrating each pass of the loop ("45 — no. 88 — yes, collect it. 72 — no...").
- Then the `"Am" in name` example, and use it to reveal that `in` also searches *inside text*. Land it hard: **"THIS is your Contact Manager search bar."**

#### Teaching Tip

Some students will try to build the results list without the empty-list line first, then wonder why they get a `NameError`. Pre-empt: "Step 1 is not optional — you can't append to a list that doesn't exist yet."

---

### Part 5: List Detective Activity (~12 minutes)

Paste the `leaderboard` list in the chat. Run the missions as a live, tiered challenge.

- **Do the Zoom Chat Challenge FIRST**, before any code: "What does `leaderboard[1:3]` give back?" Collect predictions. Many will say three items or the wrong two — this is the perfect, low-stakes moment to cement the off-by-one rule. THEN run it and reveal `['Kofi', 'Zara']`.
- Circulate via reactions: thumbs-up per mission. Log who clears Mission 3 (index + human position) — that's your "confident with searching" group.
- Fast finishers do the Bonus collector loop while you help others with Mission 3.

#### Differentiation

- **Struggling:** stay on Missions 1–2. A working slice and one `in` check is a complete, successful lesson for them.
- **Racing ahead:** challenge them to combine skills — "slice the top 3, THEN check if a given name is in that top-3 slice."

---

### Part 6: Wrap-Up (Common Mistakes + Homework + Teaser, ~13 minutes)

#### Common Mistakes (5 min)

Run all three live, especially:

- **Mistake 1 (stop excluded):** reinforce the mantra one final time.
- **Mistake 3 (slicing doesn't crash out of range):** deliberately contrast `names[1:99]` (fine) with `names[99]` (IndexError). This pair genuinely surprises students and makes slicing feel safe.

#### Homework (5 min)

Walk through "Search My List." Stress that requirement 4 (the collecting loop) is the ⭐⭐ tier and the `input()` + `try`/`except` version is ⭐⭐⭐. Any tier counts as done. Remind them of the Trinket name `Y2-T4-W2-Slicing`.

#### Week 3 Teaser (3 min)

> "You can grab pieces and search. But your leaderboard is in a random order! Next week — Sorting & List Tricks — you'll put lists in order with `.sort()`, find the biggest with `max()`, and combine sorting with today's slicing to grab the REAL top 3 from any messy list."

Stay on the call 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Produced a correct slice, including a shortcut form (`[:3]` or `[-2:]`)
- [ ] Correctly predicted or self-corrected on `leaderboard[1:3]`
- [ ] Wrote an `in`-based membership check inside an `if`
- [ ] Used `.index()` and explained why it can crash
- [ ] Attempted the collecting loop (empty list → loop → append)

**Engagement:**
- [ ] Posted a slice prediction in the Zoom chat
- [ ] Used thumbs-up reactions through the detective missions
- [ ] Connected the skills to the Contact Manager when prompted

### Students to Watch

**Need Extra Support:**
- Still expecting the stop index to be included after the activity — a quick 1:1 with the index table usually fixes it fast
- Repeatedly hit `ValueError` without reaching for the `in` check — reinforce the "check first" habit next week

**Ready for More Challenge:**
- Finished the collector loop early — point them at the ⭐⭐⭐ `input()` + `try`/`except` homework tier, and challenge them to collect matches using substring search (`if typed in name`)

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Class keeps including the stop index | Return to the index table; point physically at cells; have them chant "up to, but NOT including"; use the `stop - start` count trick |
| Confusion between `names[2]` and `names[2:]` | Show them side by side and name the difference: one item (a value) vs. a sub-list |
| `ValueError` from `.index()` panics a student | Reassure — it's the expected lesson, not their fault; show the guarded `if x in list` version immediately |
| Student expects `names[99]` and `names[1:99]` to behave the same | Run both live; single-index crashes (IndexError), slice does not — this contrast is the whole point |
| `NameError` when appending in the collecting loop | They skipped the empty-list line; "you can't append to a list that doesn't exist yet" |
| Negative slices confuse | Draw the negative index row (`-5 -4 -3 -2 -1`) under the values; `-2:` = "last two" |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Slicing retention:** did the half-open rule land, or does it need a Week 3 warm-up recap?
- **Search confidence:** who reached for `in` before `.index()` unprompted? Who didn't?
- **Collecting loop:** how many completed it in class vs. deferring to homework? (Calibrates the pace for Weeks 5–6, which lean on this pattern heavily.)
- **Timing:** did slicing eat more time than planned? Adjust the split next week.

---

## 💭 Remember

**Slicing is where the off-by-one confusion lives — and it's worth every minute you spend on it.**

If students leave able to say "the stop is not included" and "check with `in` before `.index()`", they have the two habits that make the entire back half of Term 4 — right up to the Contact Manager — run smoothly. Don't trade the index table for speed.

**You've got this — happy hunting, detectives!** 🔍

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
