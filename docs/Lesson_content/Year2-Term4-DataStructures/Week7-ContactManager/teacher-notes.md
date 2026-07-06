# Year 2, Lesson 7: Project — Contact Manager 📇🛠️

## Teacher's Guide

**Course:** Data Structures (Year 2, Term 4)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 7 of 8

---

## 📋 Lesson Overview

### Purpose

This is the **term project build week**. Students take every skill from Term 4 — lists, dictionaries, records (lists of dicts), functions, and the menu-driven `while` loop — and assemble them into one complete program: a Contact Manager. Next week (Week 8) is the showcase where they demo it and earn the **Data Architect Badge**.

This lesson has three core goals:

1. **Ship a finished project** — by the end, every student has a working Contact Manager they'll demo next week.
2. **Consolidate the term's data-structure skills** — nothing here is brand new. The learning is in *combining* known pieces into a larger, well-organised program.
3. **Instil the "one function, one job" habit** — students see how breaking a program into named functions makes it readable, testable, and easy to extend.

This is a **live build-along**, not a lecture. You type on shared screen, students fill in one function at a time in their own trinket. Keep everyone synchronised with thumbs-up checkpoints after each of the five stages.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Design a data store as a **list of dictionaries** with consistent keys (`name`, `phone`, `email`).
2. Write functions that read from and write to a shared list (`append`, loop-and-print, `remove`).
3. Implement a **case-insensitive substring search** using `.lower()` and `in`.
4. Explain why deletion uses `return`-after-`remove` (don't modify a list while iterating).
5. Wire functions to a **menu-driven `while` loop** with a `running` flag and string comparison.

### Key Success Metrics

- [ ] Every student's `add_contact` appends a correctly-keyed dictionary (Stage 1)
- [ ] Every student's `view_contacts` handles the empty case AND lists records (Stage 2)
- [ ] Most students get a working case-insensitive search (Stage 3)
- [ ] Every student's menu loops and quits cleanly on choice 5 (Stage 5)
- [ ] Students leave with a demo-ready program saved as `Y2-T4-W7-ContactManager`

### Materials Needed

- Computer with internet, Zoom with screen share
- Trinket (trinket.io), logged in
- This teaching guide open during class
- The starter skeleton and full solution ready to paste in chat if needed
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Pre-build the Contact Manager yourself** and run every path (add, view empty, view full, search hit, search miss, delete hit, delete miss, invalid choice, quit) so every demo is smooth.
2. **Have the skeleton ready to paste** in the Zoom chat — students who fall behind on setup can grab it instantly.
3. **Test Zoom and Trinket** — confirm code runs and screen share works.
4. **Rehearse the delete `return` explanation** — the "don't modify a list while iterating" point is the one genuinely tricky idea today; have your words ready.
5. **Decide your demo names** — use West African names (Amara, Kwame, Chidi, Ama, Kofi, Zainab) so students see relatable data.

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-6 min   → Welcome + the plan (what is a Contact Manager? list of dicts recap)
⏱️  6-12 min  → Setup: new trinket + paste the skeleton
⏱️ 12-22 min  → Stage 1: the data store + add_contact
⏱️ 22-30 min  → Stage 2: view_contacts (empty case + loop)
⏱️ 30-40 min  → Stage 3: search_contacts (case-insensitive substring)
⏱️ 40-50 min  → Stage 4: delete_contact (the return-after-remove idea)
⏱️ 50-60 min  → Stage 5: the menu loop + full run-through
⏱️ 60-75 min  → Common mistakes + homework + Week 8 badge teaser + wrap-up
```

**Flexible timing:** Stage 4 (delete + the iteration caveat) is the conceptual peak — protect its time. If you're running behind, Search (Stage 3) can be simplified to an exact match first and made case-insensitive later; but do NOT skip the menu loop (Stage 5) — without it there's no runnable project.

---

## 📚 Detailed Teaching Guide

### Part 1: The Plan (6 minutes)

Open by connecting to something every student owns: a phone address book.

> "Everyone has a contacts app on a phone. It stores people — each person has a name, a phone number, an email. Today, YOU build that. And you already have every skill you need. We're just snapping them together."

Recap the data shape on screen: each contact is a **dictionary**, and all of them live in one **list**. This is the record pattern from Week 6 — call that back explicitly. Show the fields table: `name`, `phone`, `email`.

#### Teaching Tips

- **Frame it as assembly, not new learning.** "Nothing today is new. This is the week it all clicks together." That reassures the anxious and challenges the confident.
- **Name the fields once and hold them fixed.** The consistency of keys is what makes the records work — say it early.

---

### Part 2: Setup + The Skeleton (6 minutes)

> "Open a NEW trinket. Name it exactly `Y2-T4-W7-ContactManager` — this is the one you demo next week."

Paste the skeleton (empty functions with `pass` + the menu shell). Run it together — it does nothing, but it runs. That's the point: a valid skeleton first, then we fill it in.

Explain `pass` briefly: "It means 'nothing here yet' so Python doesn't complain about an empty function while we build."

#### Teaching Tips

- **Show the shape before the detail.** Point out: shared list at the top, four functions, `main()` with the loop, and the single `main()` call at the bottom. The map calms them.
- **Paste the skeleton in chat** so nobody is left behind on typing.

---

### Part 3: Stage 1 — Data Store + add_contact (10 minutes)

Create `contacts = []`, then fill in `add_contact()`. Type it live; narrate each line.

> "Three inputs — name, phone, email. Then the magic line: `contacts.append({...})`. We build a brand-new dictionary and stick it on the end of the list. Same three keys, every single time."

Run it once, add "Amara", show the `✅ Added Amara!` message.

#### Teaching Tips

- **Stress key consistency:** "If one contact says `phone` and another says `number`, View and Search break. Same labels, always."
- **`append` recap:** it goes on the END of the list — tie back to Week 1.

---

### Part 4: Stage 2 — view_contacts (8 minutes)

Fill in `view_contacts()`. Lead with the empty-case guard.

> "First question a good program asks: what if the list is empty? We check `if len(contacts) == 0:` and say something friendly instead of printing nothing."

Then the loop: `for c in contacts:` and the f-string reading `c['name']`, `c['phone']`, `c['email']`.

**Watch the quotes.** This is where the quote-inside-quote issue bites: outside is `f"..."`, so inside must be single quotes `c['name']`. Demonstrate the wrong version briefly if you like, then the right one.

#### Teaching Tips

- **Test empty first.** Have them run View before adding anyone — "No contacts yet." proves the guard works. Then add two and view again.
- **The `|` separators** are cosmetic; mention it so nobody thinks they're required syntax.

---

### Part 5: Stage 3 — search_contacts (10 minutes)

This is the Week 6 filter pattern applied live. Two friendly touches to highlight:

> "We lowercase BOTH sides — `target.lower()` and `c['name'].lower()` — so capital letters don't matter. And we use `in`, not `==`, so typing half a name still finds it. `ama` finds `Amara`."

Walk the `found` flag: starts `False`, flips `True` on any match, and `if not found:` reports a miss after the loop.

#### Teaching Tips

- **Connect the `found` flag to `running`.** Same on/off-switch idea they already know.
- **Do a live miss.** Search for `zzz` → "No match found." Students need to see the miss path work, not just the hit.
- **`in` vs `==`:** Search uses `in` (forgiving); Delete will use `==` (exact). Foreshadow the contrast now.

---

### Part 6: Stage 4 — delete_contact (10 minutes)

**This is the conceptual peak of the lesson. Protect its time.**

Type the function, then stop and explain the `return`:

> "We find the exact match, `contacts.remove(c)` takes it out — and then we `return` IMMEDIATELY. Why? Because changing a list while you're still looping over it confuses Python. It can skip items or misbehave. So the second we remove one, we leave the loop with `return`. Clean and safe."

Point out the deliberate choice of `==` (exact match) here, unlike Search's `in`:

> "Delete is destructive — we don't want to accidentally wipe the wrong person. So we insist on the full, exact name."

The `print("Not found.")` at the end runs only if the loop completes with no match — because a successful delete `return`s before reaching it.

#### Teaching Tips

- **Don't over-explain the internals.** "Don't change a list while looping it; `return` right after removing" is enough. They don't need the mechanics of list iterators today.
- **Demo the miss too:** try to delete a name that isn't there → "Not found."
- **This is the #1 thing to check in their code** — see the Assessment section.

---

### Part 7: Stage 5 — The Menu Loop + Full Run (10 minutes)

Fill in `main()`: the bordered menu, the `choice = input(...)`, the `if/elif` chain calling each function, choice 5 flipping `running = False`, and the `else` catching bad input.

Reinforce the two correctness anchors:

> "`choice` is TEXT — `input` always gives a string — so we compare to `"1"`, `"2"`, WITH quotes. And the `else` means typing `9` or `banana` just gets a polite 'pick 1-5' and loops again. No crash."

Then run the WHOLE program top to bottom: add two people, view, search a partial name, delete one, view again, try an invalid choice, quit with 5.

> "Add. View. Search. Delete. Quit. Every path works, nothing crashes. THAT is a finished project."

#### Teaching Tips

- **Don't forget `main()` at the bottom** — a classic omission that makes "nothing happen." Check for it.
- **String comparison** is the single most common bug — see Common Mistakes.

---

### Part 8: Common Mistakes + Homework + Wrap-Up (up to 15 minutes)

Walk the four Common Mistakes from the lesson — especially:
- `choice == 1` (number) instead of `choice == "1"` (string) → always falls to `else`
- `c["nmae"]` typo → `KeyError`
- forgetting `running = False` → forever loop
- deleting without `return` → the iteration caveat

Then homework: **showcase prep** — make it bulletproof + ONE personal touch (count option, sorted view, extra `birthday` field, or an edit option).

> "Next week is your Data Showcase — you demo this live and earn the Data Architect Badge. This week: make sure nothing crashes, and add ONE personal touch. Bring THIS exact trinket."

Preview Week 8 and build excitement for the badge. Paste submission instructions in chat.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] `add_contact` appends a dict with the three correct keys
- [ ] `view_contacts` guards the empty case and loops correctly
- [ ] `search_contacts` lowercases both sides and uses `in`
- [ ] `delete_contact` uses `==` and `return`s after removing
- [ ] `main` compares `choice` as strings and quits cleanly on `"5"`

**Understanding:**
- [ ] Can explain why every contact must use the same keys
- [ ] Can explain why delete uses `return` right after `remove`

### Students to Watch

**Need Extra Support:**
- Quote-inside-quote confusion in the f-strings (`c['name']`) — check their View function directly
- Comparing `choice` as a number — symptom is "it always says pick 1-5"; check for missing quotes
- Missing the final `main()` call — symptom is "nothing happens when I run it"

**Ready for More Challenge:**
- Point them at the ⭐⭐⭐ homework: an **edit** option (find by name, update a field) or a **sorted view** with `sorted(..., key=lambda x: x["name"])`. Both genuinely extend the project and impress at showcase.

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "Nothing happens when I run it" | The `main()` call at the bottom is missing — add it |
| Menu always says "Please pick 1-5" | Comparing `choice == 1` (number) instead of `choice == "1"` (string) |
| `KeyError: 'nmae'` (or similar) | A dictionary key is misspelled — match it to the keys used in `add_contact` |
| Infinite loop, menu won't stop | Choice 5 isn't setting `running = False` |
| View shows nothing / crashes | Quote mix-up in the f-string; use `c['name']` (single quotes inside `f"..."`) |
| Delete removes wrong count / acts odd | Missing `return` after `contacts.remove(c)` — add it (iteration caveat) |
| Search never matches | Only lowercasing one side, or using `==` instead of `in` |
| Running behind schedule | Simplify Search to exact match first; never cut the menu loop (Stage 5) |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Did every student finish a working, runnable Contact Manager?** Anyone who didn't needs a catch-up before the Week 8 showcase — nobody should demo a broken program or miss out on the badge.
- **How did the delete `return` idea land?** It's the term's subtlest point. If several struggled, plan a 2-minute recap at the start of Week 8.
- **Who's ready to demo confidently vs who's nervous?** Note shy students now so you can gently prep them for next week's showcase.
- **Timing:** did Stages 4 and 5 get their full time? Adjust if the early stages ran long.

---

## 💭 Remember

**This is the week it all comes together.**

All term, students collected pieces: lists, dictionaries, records, functions, loops. Today those pieces become a single program that stores real information and does something genuinely useful. When a student adds a contact, searches for it, and deletes it — all through a menu they wired themselves — they stop feeling like someone learning parts and start feeling like someone who builds whole systems. That's the identity shift. Next week they demo it and earn the Data Architect Badge. Celebrate the build.

**You've got this!** 🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
