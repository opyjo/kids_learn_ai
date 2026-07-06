# Year 2, Lesson 3: Sorting & List Tricks 🔃🧰

## Teacher's Guide

**Course:** Data Structures (Year 2, Term 4)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

Students can already build, slice and search lists (Weeks 1-2). This lesson adds the two skills that turn a raw list into *information*: **ordering** it and **summarising** it. The session has three core goals:

1. **Cement the `sort()` vs `sorted()` distinction** — this is THE conceptual hurdle of the week, and the source of a bug (`x = list.sort()` → `None`) that will haunt students all term if not nailed now
2. **Introduce the aggregate helpers** (`min`, `max`, `sum`, `len`) as a toolkit, and derive the average from `sum() / len()` rather than memorising a formula
3. **Reinforce the "empty list + loop + append" pattern** — a filtering technique students will reuse constantly, right through to the Contact Manager

The "Leaderboard Builder" framing makes all of this concrete and competitive-feeling without any real competition. Keep energy high; the material is genuinely useful and students feel powerful when their leaderboard prints correctly.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Use `sorted(my_list)` to produce a new sorted list without altering the original
2. Use `my_list.sort()` to sort a list in place, and explain that it returns `None`
3. Apply `reverse=True` to sort from highest to lowest (or Z→A)
4. Use `min()`, `max()`, `sum()` and `len()` to summarise a list, and compute an average
5. Build a filtered list by looping and appending conditionally
6. Predict the three key errors: `x = list.sort()` → `None`, `sum()` on strings → `TypeError`, sorting mixed types → `TypeError`

### Key Success Metrics

- [ ] Every student runs both `sorted()` and `.sort()` and can say which changes the original
- [ ] Every student completes Leaderboard Stages 1 and 2; most complete Stage 3
- [ ] The Zoom-chat challenge produces a correct plain-English distinction from most students
- [ ] Students leave able to compute an average with `sum() / len()`

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Students' Trinket accounts; new Trinket named `Y2-T4-W3-Sorting`
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-type the three error examples** so you can crash them live on demand (the `None`, the `sum()`-on-strings `TypeError`, the mixed-list `TypeError`)
3. **Have the Leaderboard scores ready** (`[58, 91, 43, 76, 88, 64]`) and pre-compute the answers: sorted-desc `[91, 88, 76, 64, 58, 43]`, sum `420`, average `70.0`
4. **Prepare the sort-vs-sorted analogy** you'll use (see below) — this is the moment the lesson lives or dies on
5. **Reminder:** dictionaries are NEXT week — do not let the "label your data" hook drift into teaching dict syntax today

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap lists + BrightByte hook (order vs noise)
⏱️  8-25 min  → Part 1-3: sorted() vs sort(), reverse, sorting words
⏱️ 25-40 min  → Part 4-5: aggregate helpers + build-a-list-in-a-loop
⏱️ 40-52 min  → Common mistakes (crash them live!)
⏱️ 52-65 min  → Leaderboard Builder class activity
⏱️ 65-75 min  → AI discussion + homework + Week 4 teaser
```

**Flexible timing:** If the sort-vs-sorted distinction is landing slowly, borrow time from the AI discussion — the core concept matters more.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + Hook (8 minutes)

Open by activating last week: "Last week you SEARCHED lists — found things with `in` and `index`. Today we bring ORDER."

Use BrightByte's framing: a pile of scores is *noise*; sort it and it becomes a *story* (winner, loser, average). Then screen-share the starter code and read the three commented rounds so students know where they're headed.

#### Teaching Tips
- Keep this short. Students are keen to get to sorting — the recap is a 60-second bridge, not a re-teach.
- New joiner or someone who missed Weeks 1-2? Reassure privately: today needs only `.append()` and basic list-building, both of which you'll model live.

---

### Part 2: sorted() vs .sort() — The Heart of the Lesson (17 minutes)

This is the concept that matters most. **Live-code both, side by side**, using the same starting list so the difference is visible:

```python
scores = [3, 1, 2]
print(sorted(scores))   # [1, 2, 3]
print(scores)           # [3, 1, 2]  ← still messy!
```
Then:
```python
scores = [3, 1, 2]
scores.sort()
print(scores)           # [1, 2, 3]  ← the list itself changed
```

**Use a physical analogy.** `sorted()` is like a **photocopy** of your bookshelf, sorted — the real shelf is untouched. `.sort()` is you **rearranging the actual shelf**. Ask the class in chat: "Which one do you use if you need the original order later?"

Then teach `reverse=True` (Part 2 of the lesson) and sorting words (Part 3). For words, emphasise the capital-letter gotcha only lightly — flag it exists, promise a fix later, don't rabbit-hole.

#### Checkpoint (Zoom)
Everyone types both `sorted()` and `.sort()` into Trinket and thumbs-up. Watch shared screens for anyone who assigned `x = scores.sort()` — that's your cue for Mistake 1.

---

### Part 3: Aggregate Helpers + Loops (15 minutes)

Present `min`, `max`, `sum`, `len` as a **toolkit table** (it's in the lesson). Emphasise:
- **Average is not a built-in** — derive it: `sum(scores) / len(scores)`. Trace `180 / 3 → 60.0` live so they see the float.
- `sum()` is numbers-only (foreshadow Mistake 2).

Then the **empty-list-loop-append** pattern (Part 5). Walk the trace line by line — this pattern is worth the time because it reappears in Weeks 6-7. Live-code the "scores over 50" example and narrate each iteration.

#### Teaching Tips
- If a student asks "why `.append` and not `+`?" — great question; both work, but `.append` is the idiomatic pattern for building inside a loop. Keep it brief.
- Watch for students who forget to declare the empty list `passed = []` *before* the loop, or who put it *inside* the loop (resetting it every pass). Both are classic bugs — turn either into a teaching moment.

#### Optional Depth (only if the class is flying)
If everyone's ahead, chain the skills: filter then rank in one flow.
```python
scores = [72, 45, 90, 30, 88]
passed = []
for s in scores:
    if s > 50:
        passed.append(s)
print(sorted(passed, reverse=True))   # [90, 88, 72]
```
This "filter then sort" combo is exactly what a search engine does — a nice bridge to the AI discussion later.

---

### Part 4: Common Mistakes — Crash Them Live (12 minutes)

The most valuable 12 minutes for debugging confidence. **Run each error deliberately** so students see the real output:

1. **`ranked = scores.sort()` → prints `None`** — THE big one. Ask: "Why isn't it a sorted list?" Land it: "`.sort()` gives back nothing. If you want a new list, use `sorted()`." Have them fix it both ways.
2. **`sum(["Ama", "Kofi"])` → `TypeError`** — `sum()` adds numbers; for words use `len()` to count.
3. **`sorted([3, "apple", 1])` → `TypeError`** — Python can't compare a number and a word. Rule: keep a list all-numbers or all-words.

> Framing: "Errors aren't failure — they're Python telling you exactly what it can't do. Reading them is a superpower."

---

### Part 5: Leaderboard Builder (13 minutes)

The payoff activity. Students build it stage by stage in `Y2-T4-W3-Sorting`:

- **Stage 1 (⭐):** `sorted(scores, reverse=True)` → `[91, 88, 76, 64, 58, 43]`
- **Stage 2 (⭐⭐):** `max()` → `91`, `min()` → `43`
- **Stage 3 (⭐⭐⭐):** `sum()` → `420`, average `420/6` → `70.0`

Thumbs-up per stage. Fast finishers do the **bonus** (loop-filter scores ≥ 50 into a `passed` list, print `len`).

**Zoom-chat challenge:** the `sort()` vs `sorted()` distinction in their own words. Read 3-4 answers aloud; correct gently if anyone has them swapped.

#### Teaching Tips
- Circulate via shared screens. The commonest bug here is forgetting `reverse=True` (leaderboard prints low-to-high) — easy fix, good teaching moment.

---

### Part 6: AI Discussion + Homework + Wrap (10 minutes)

**AI discussion (light, ~3 min):** recommendation systems score everything then `sort` highest-first — exactly today's skill at massive scale. Chat prompt: "What did an app sort to decide what to show you first?" Keep it brief and concrete.

**Homework — Score Analyser (~4 min):** walk the requirements and example run. Stress the f-string summary line (Term 1 skill, still expected). Point out the tiers: ⭐⭐⭐ uses `input()` + `int()` conversion into a list — genuinely challenging, optional.

**Week 4 teaser (~2 min):** dictionaries. "Lists remember order; next week you'll label every piece of data by name — `contact["name"]` instead of `contacts[0]`." Do NOT teach dict syntax now.

#### Tie-In to the Term Project
Remind students where today's skills land in the **Contact Manager** (Week 7): sorting contacts alphabetically by name is a one-line `sorted()` call, and aggregates summarise the address book ("how many contacts do I have?" is just `len()`). Framing today's leaderboard as a rehearsal for the real project keeps motivation high and shows the term has a plan.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Used both `sorted()` and `.sort()` correctly (Part 2)
- [ ] Applied `reverse=True` for a descending leaderboard
- [ ] Computed an average with `sum() / len()`
- [ ] Built a filtered list with a loop (bonus)

**Understanding:**
- [ ] Correctly stated the `sort()` vs `sorted()` difference in the chat
- [ ] Predicted/explained at least one of the three errors

**Engagement:**
- [ ] Thumbs-up through the Leaderboard stages
- [ ] Contributed to the AI discussion

### Students to Watch

**Need Extra Support:**
- Kept getting `None` from `.sort()` after the mistake was covered — quick 1:1; have them narrate the difference back to you
- Struggled to trace the loop-append pattern — revisit next week, as it underpins looping over dicts

**Ready for More Challenge:**
- Finished the bonus early — point them at homework ⭐⭐⭐ (input scores into a list with `int()` conversion) and suggest they also print how many scores were *below* average

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "My sorted list printed `None`!" | They wrote `x = list.sort()`. Show the fix: use `sorted()` for a new list, or call `.sort()` alone then print the list |
| Leaderboard prints low-to-high | Missing `reverse=True` inside the brackets |
| `TypeError` on `sum()` | They summed a list of words; `sum()` is numbers-only, use `len()` to count |
| `TypeError: '<' not supported...` | Mixed list (numbers + words); keep lists one type |
| Average shows a long decimal | Expected — it's a float. Mention `round(avg, 2)` as an optional tidy-up (used in the homework example) |
| Confusing `.sort()` vs `sorted()` | Return to the photocopy-vs-real-shelf analogy; have them say the one-line mantra aloud |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept check:** did the class internalise `sort()` vs `sorted()`? If shaky, open next week with a 2-minute recap.
- **Errors:** which of the three crashes surprised them most? (Good callback material.)
- **Loop-append fluency:** this pattern powers Weeks 5-7 — flag anyone who needs reinforcement.
- **Timing:** did Part 2 (the core concept) get its full time? Protect it next time if not.

---

## 💭 Remember

**The one thing students must leave with: `sorted()` makes a new list; `.sort()` changes this one.**

Everything else this week — reverse, aggregates, the leaderboard — is easy once that distinction is solid. If a student can say that sentence and explain why `x = list.sort()` gives `None`, they've got the week. The aggregate helpers are a bonus toolkit they'll pick up naturally through the activity.

**They just turned raw data into a leaderboard — that's real data work. Celebrate it!** 🔃🏆

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
