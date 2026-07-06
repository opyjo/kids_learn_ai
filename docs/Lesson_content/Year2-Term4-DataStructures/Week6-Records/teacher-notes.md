# Year 2, Lesson 6: Lists of Dictionaries — Records! 🗃️📇

## Teacher's Guide

**Course:** Data Structures (Year 2, Term 4)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This is the keystone lesson of the term. Over Weeks 1-5 students went deep on lists, then created, accessed, updated and looped over dictionaries. Today those two skills **click together** into the single most important pattern in real software: a **list of dictionaries** — a list of "records".

This lesson **primes the term project**. Next week (Week 7) students build the full **Contact Manager**, and a contact list is nothing but a list of record dictionaries. Everything today — add, list-as-table, search, filter — is a direct rehearsal for that build. The Data Architect Badge lands at Week 8; this is the lesson that earns it.

The session is a **live build-along** in seven short parts, culminating in a working **Class Register**. Students type alongside you, run after each part, and use Zoom reactions as checkpoints. Your job is pacing and correctness — the code is the content.

Three core goals:

1. **Every student leaves with a running Class Register** saved as `Y2-T4-W6-Records`
2. **Cement "row first, then column"** — the make-or-break idea is `people[0]["name"]`, not `people["name"]`
3. **Set up Week 7** — students should leave seeing that a contacts app IS a list of records

> ⚠️ **CONTINUITY MATTERS.** Week 7's Contact Manager reuses this exact pattern (a list of dictionaries, `.append({...})`, loop-to-table, search-with-a-flag). Teach the pattern cleanly so next week is "same shape, new data".

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain that a record is a dictionary, and a real dataset is a list of records
2. Access one field of one record with `list[index]["key"]` ("row then column")
3. Add a record to a list with `.append({...})`
4. Loop over a list of records and print them as an aligned table with f-strings
5. Search a list of records for a match, using a `found` flag for the "no match" case
6. Filter records into a brand-new list (empty list → loop → test → append)

### Key Success Metrics

- [ ] Every student's Class Register runs end to end
- [ ] Every student has saved a Trinket named `Y2-T4-W6-Records`
- [ ] Students can explain why `people["name"]` fails but `people[0]["name"]` works
- [ ] Students leave knowing next week's Contact Manager is "this exact pattern"

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share; teacher's Trinket visible throughout
- Students' Trinket accounts
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Type the full Class Register solution yourself once** in a fresh Trinket named `Y2-T4-W6-Records` — you build it live and it must be flawless
2. **Test the example run** (search `Zara` → the two-teen filter) so your live demo matches the lesson exactly
3. **Rehearse the `people["name"]` crash** — you'll deliberately show the `TypeError` and fix it
4. **Rehearse the f-string quote crash** — `f"{person["name"]}"` → `SyntaxError`; then fix with single quotes
5. **Prepare a "catch-up" pasteable** of each part's code for anyone who falls behind — paste into Zoom chat, don't stall the class

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-6 min   → Welcome + "records = the power pattern" + the table picture
⏱️  6-16 min  → Part 1 (list of dicts) + Part 2 (row-then-column access) — build live
⏱️ 16-24 min  → Part 3 (append a record) + Part 4 (loop to a table) — build live
⏱️ 24-38 min  → Part 5 (search + found flag) + Part 6 (filter) — the heart
⏱️ 38-50 min  → Part 7: assemble the Class Register + example run + save
⏱️ 50-62 min  → Common mistakes (esp. list["key"] and f-string quotes)
⏱️ 62-75 min  → Homework brief + Week 7 Contact Manager teaser + wrap-up
```

**Flexible timing:** Parts 5 & 6 are the priority — protect their time. If Parts 1-2 run long, paste the register code in chat and keep moving; the list/dict basics are revision.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + The Big Idea (6 minutes)

Open with the "so what" — this is the pattern behind real apps.

> "Last week you looped over ONE dictionary. Today you get the pattern that runs every real app — a LIST where every item is a DICTIONARY. We call each one a 'record'. Your phone's contacts? A list of records. A class register? A list of records. Learn this and you can build a database."

Screen-share the **table picture** from the lesson (rows = records, columns = fields). This is the mental model everything hangs on. Then the non-negotiable setup:

> "Create a NEW Trinket. Name it exactly `Y2-T4-W6-Records`. Type it in the chat when done. Keep this file — next week's Contact Manager is built on today's pattern."

#### Teaching Tips

- **Anchor on the table image.** "Row = record, column = field" is the sentence they should be able to repeat by the end.
- Keep the intro tight. The payoff is in the building.

---

### Part 2: Parts 1 & 2 — Records and Access (10 minutes)

Type the `people` list live. Emphasise the shape: `[ ]` outside makes it a list; each `{ }` inside is a record.

Then teach access as a **two-step** move, out loud, every time:

> "First the ROW, then the COLUMN. `people[0]` grabs Ama's whole record. Then `["name"]` reaches inside it for her name. `people[0]["name"]` → 'Ama'."

Run `print(people[0])`, then `print(people[0]["name"])`, then `print(people[1]["age"])` so they see each step's result.

#### Teaching Tips

- **Say "row then column" relentlessly.** It's the antidote to Common Mistake 1.
- Point at the number vs the word: `[0]` is a number (for the list), `["name"]` is a word (for the dict). Different brackets, different jobs.

---

### Part 3: Parts 3 & 4 — Append and the Table (8 minutes)

`.append({...})` a **whole record** — stress that the new dictionary must have the **same fields** as the others, or the table goes ragged. Run `len()` after to show it grew.

Then the loop-to-table. Build the plain loop first (`print(person["name"], person["age"])`), run it, THEN add f-string alignment.

> "One tiny loop prints the WHOLE list — 3 records or 3,000, same code. That's the power."

Flag the quote rule as you type the f-string:

> "Double quotes outside, so the key inside uses SINGLE quotes: `person['name']`. Mix them and Python thinks the string ended early."

#### Teaching Tips

- **Build the plain loop before the fancy f-string.** Alignment is polish; the loop is the concept.
- `:<10` = "left-aligned, 10 wide". Change the number live so they see columns shift.

---

### Part 4: Parts 5 & 6 — Search and Filter (14 minutes) ⭐ THE HEART

This is where the lesson lives.

**Search** first. Build the loop that checks `student["name"] == target`. Then add the `found` flag and the "no match" message — and explain WHY the flag is needed:

> "How do we say 'not found'? We can't print it inside the loop — we'd print it for every wrong name. So we use a flag: start `found = False`, flip it to `True` if we ever match, and check it AFTER the loop."

Demonstrate both paths live: search a name that exists, then one that doesn't.

**Filter** next. Teach the four-step recipe and put it on screen:

1. empty list, 2. loop, 3. test with `if`, 4. `.append()` the record

> "Search PRINTS matches. Filter COLLECTS them into a new list you can keep, count, and loop again."

Run it: `age >= 13` gives Kofi and Zara. Then flip the test live to `< 13` so they see the filter change.

#### Teaching Tips

- **The `found` flag confuses some students.** Trace it out loud with a name that exists and one that doesn't.
- **Filter vs search:** the difference is append-into-a-new-list vs print. Say it explicitly; it's a classic exam point.
- Stress that you `.append(person)` — the **whole record**, not just a field.

---

### Part 5: Part 7 — Assemble the Class Register (12 minutes)

Now combine everything into the full program with three fields (`name`, `age`, `grade`). Build top to bottom, running as you add each block. Do the example run live: search `Zara`, watch the table, the match, and the two-teen filter.

> "This is a real, searchable, filterable register — a mini database you built from scratch. Screenshot it. Then SAVE the Trinket."

#### Teaching Tips

- **Celebrate the working register loudly**, then make everyone save. Week 7 doesn't strictly require this file, but the pattern must be solid.
- If someone's columns are ragged, it's almost always a record missing a field or a mismatched `:<N` — quick fix.

---

### Part 6: Common Mistakes (10 minutes)

Live-code each so students see the real error text:

1. **`people["name"]`** → `TypeError: list indices must be integers or slices, not str`. THE big one. Show it fail, then fix with `people[0]["name"]` and repeat "row then column".
2. **`person["surname"]`** → `KeyError: 'surname'`. A wrong or misspelt field. Note capitals matter: `"Name"` ≠ `"name"`.
3. **`person[0]` inside the loop** → `KeyError: 0`. Reminds them each item is a dictionary, reached by a word key.
4. **`f"{person["name"]}"`** → `SyntaxError`. Fix with single quotes inside the f-string.

---

### Part 7: Homework + Wrap-Up (8 minutes)

#### Homework: Build a Mini Database

Walk through it: pick books, pets, or players; at least 4 records; **same 3 fields** on every record; print as a table; add a search. Show the pets example on screen. Point out the tiers (table / search / filter). Stress the field warning: `pets[0]["name"]`, never `pets["name"]`.

> "This homework is the exact skill you'll use next week — a list of records you can print and search. It's a warm-up for the Contact Manager."

#### Wrap-Up

> "You built a database today — a list of records you can add to, print, search, and filter. Next week we point this exact skill at a Contact Manager. Save your Trinket, and I'll see you there."

Stay on the call 2-3 minutes for questions and to help anyone whose program isn't running.

---

## 🎓 Assessment & Notes

### The Deliberate Bug Demo

The single most valuable moment is showing `people["name"]` fail:

```python
people = [{"name": "Ama", "age": 12}]
print(people["name"])
```
```
TypeError: list indices must be integers or slices, not str
```

Ask: "It's a list of people — why can't I just ask for the name?" Let them reason it out: a list is numbered, so you need `people[0]` FIRST to get the record, THEN `["name"]`. This lands "row then column" far better than telling.

### During Class, Observe

**Technical Skills:**
- [ ] Built the list of records with consistent fields
- [ ] Accessed a field with `[index]["key"]` (row then column)
- [ ] Appended a whole record dictionary
- [ ] Looped to a table using single-quoted keys in the f-string
- [ ] Wrote a search with a working `found` flag
- [ ] Built a filter (empty list → loop → test → append)
- [ ] Saved the Trinket with the correct name

**Engagement:**
- [ ] Kept pace with the live build (thumbs up each part)
- [ ] Answered the chat checkpoints (`register[0]["name"]`, count after append, teen count)
- [ ] Connected the register to next week's Contact Manager

### Students to Watch

**Need Extra Support:**
- Writes `people["name"]` — reinforce "row first": always an index before a key
- Filter that prints instead of appends — remind them filter COLLECTS into a new list
- `found` flag confusion — trace both a found and a not-found search by hand

**Ready for More Challenge:**
- Finished early — point at the ⭐⭐⭐ homework filter, or add a **second** filter (e.g. by `grade`) to the register

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| `TypeError: list indices must be integers or slices, not str` | Used `people["name"]` — must pick the record first: `people[0]["name"]` |
| `KeyError: 'surname'` (or any field) | Field name doesn't exist or is misspelt; check spelling and capitals (`"name"` not `"Name"`) |
| `KeyError: 0` inside a loop | Treated a record like a list/string — reach in with a word key: `person["name"]` |
| `SyntaxError` on an f-string | Double quotes inside double quotes — use single quotes for the key: `f"{person['name']}"` |
| Table columns don't line up | A record is missing a field, or `:<N` widths differ — keep fields consistent and widths matched |
| Search always says "not found" | The `found` flag check is indented INSIDE the loop, or `==` compares different types (all fields here are strings/ints — check the value) |
| "not found" prints several times | The `if not found` block is inside the loop; it belongs AFTER the loop |
| Student didn't save / lost the file | Recreate from the full Part 7 solution block; stress the `Y2-T4-W6-Records` name |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Completion:** how many students have a running, correctly-named Class Register?
- **"Row then column":** did `people[0]["name"]` land? If shaky, plan a 2-minute recap before Week 7 — the Contact Manager leans on it constantly.
- **Search vs filter:** did students see the difference (print vs collect-into-new-list)?
- **Pacing:** did Parts 5 & 6 get their time, or did the basics eat it? Adjust the paste-ahead strategy.
- **Week 7 readiness:** are students seeing that "contacts = a list of records"? That framing makes next week's build feel like a variation, not a new topic.

---

## 💭 Remember

**Today is about a pattern, not a pile of new syntax.**

Students already know lists and dictionaries. The magic is watching them combine into records — and realising that this one shape is what powers real apps. Protect the two-step access idea ("row then column") and the search/filter recipes; those are the exact tools next week's Contact Manager needs.

**They just built a database. Next week they build a Contact Manager on top of it.** 🗃️📇

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
