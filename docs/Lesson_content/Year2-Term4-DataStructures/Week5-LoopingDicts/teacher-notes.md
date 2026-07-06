# Year 2, Lesson 5: Looping Over Dictionaries 🔁🗂️

## Teacher's Guide

**Course:** Data Structures (Year 2, Term 4)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

Last week students met dictionaries as *storage*: create, access by key, add/update, `del`, `in`, and `.get()`. This week they learn to **traverse** a dictionary — to loop over every pair and do something useful with it. This is the pivot from "a dictionary holds data" to "a dictionary powers a program."

Three core goals:

1. **Cement the golden rule** — looping a dictionary yields **keys**, not values. Almost every dictionary bug students hit for the rest of the year traces back to forgetting this.
2. **Make `.items()` second nature** — the `for key, value in d.items():` pattern is the workhorse of the Contact Manager and of Week 6's records.
3. **Introduce the tally pattern** — building a dictionary inside a loop (`if key in d: d[key] += 1 else: d[key] = 1`) is a genuine, reusable programming technique. Vote counting and word counting make it concrete.

The Contact Manager tie-in and the light AI corner (word-frequency counts) both exist to answer "why does this matter?" — keep them brief but present.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain that looping a dictionary directly gives the **keys**
2. Choose between `.keys()`, `.values()`, and `.items()` for a given task
3. Unpack pairs correctly with `for key, value in d.items():` (two variables)
4. Print a dictionary in a human-friendly format using a loop and f-strings
5. Build a tally/counter dictionary in a loop, protecting against `KeyError`

### Key Success Metrics

- [ ] Every student can state "looping a dict gives the keys" by mid-lesson
- [ ] Most students complete the Vote Counter tally independently
- [ ] Students correctly use two variables with `.items()` without prompting
- [ ] At least the ⭐ homework tier is understood before class ends

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Students' Trinket accounts (Trinket = online Python 3 editor)
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links
- A short pre-made list of votes/words to paste into chat if you want a live demo

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-type the Vote Counter** in your own Trinket so you can live-trace it if the class struggles
3. **Prepare the three "surprise" outputs** — the keys-not-values loop, the `ValueError` unpack, and the `KeyError` tally — you'll run these live and let them fail on purpose
4. **Have the Twi translator ready** — double-check spellings (akwaaba = welcome, medaase = thank you, adamfo = friend); invite students to suggest words in their own languages
5. **Recall last week** — be ready to remind them that `in` checks keys and `.get()` avoids errors; both return this week

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap dictionaries + today's goal (the "march through" hook)
⏱️  8-22 min  → Looping a dict (keys!) + keys/values/items
⏱️ 22-32 min  → Printing dictionaries beautifully
⏱️ 32-50 min  → The TALLY: Vote Counter (live trace) + Translator
⏱️ 50-60 min  → Common mistakes (run the crashes live)
⏱️ 60-75 min  → Contact Manager tie-in + homework + Week 6 teaser
```

**Flexible timing:** The tally is the heart of the lesson — protect its 18 minutes. If time is tight, shorten the "printing beautifully" section (it's the easiest part) rather than the tally.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + The Hook (8 minutes)

Open by connecting to last week:

> "Last week you learned to STORE data in a dictionary. But imagine a Contact Manager with 100 people — reading them one key at a time would take forever. Today we learn to LOOP over the whole thing at once."

Quick recall questions in chat: "How do you get one value out of a dictionary?" (`d[key]`) and "What does `in` check on a dictionary?" (the keys). This warms up the exact ideas the tally needs.

#### Teaching Tips

- Keep the recap to a couple of minutes — this cohort remembers last week and gets restless with slow revision.
- Frame the whole lesson around the Contact Manager: everything today is a tool they'll reuse in Week 7.

---

### Part 2: Looping a Dict + The Three Helpers (14 minutes)

Screen-share the `scores` example and run it **before** explaining:

```python
scores = {"Ama": 95, "Kofi": 88, "Zara": 100}
for name in scores:
    print(name)
```

Let the output (`Ama`, `Kofi`, `Zara`) land. Then ask: "Where are the scores?" This surprise is the whole point — the golden rule sticks far better when they *discover* it.

Then walk the helper table. Emphasise `.items()` with the tiny trace from the lesson:

```python
for k, v in {"a": 1}.items():
    print(k, v)      # → a 1
```

Say it aloud: "two things come out, so we need two variable names." Run the Zoom-chat checkpoint here: **"What does `.items()` give you each loop?"** Read a few answers aloud; the correct one is "the key and the value together."

#### Teaching Tips

- Write the golden rule on your shared screen and leave it there all lesson: **"Looping a dict → keys."**
- If a student asks "why keys?", the honest answer is great: "Because the key is how you find everything else — once you have the key, `d[key]` gets the value."

---

### Part 3: Printing Beautifully (10 minutes)

Contrast `print(scores)` (ugly braces) with the looped f-string version (clean report card). Students find this genuinely satisfying — it's the moment their output starts to look like a real app.

Have them type the Report Card example themselves and thumbs-up when their output matches. This is also low-stakes practice of the `.items()` unpacking before the harder tally.

#### Teaching Tips

- Encourage personality: emojis, borders, `f"⭐ {name}: {score}/100"`. Ownership drives engagement.
- Point forward: "This exact loop is how your Contact Manager will list everyone."

---

### Part 4: The TALLY — Vote Counter + Translator (18 minutes)

This is the centrepiece. Do **not** just show the finished code — build the logic with them.

1. Start with the raw `votes` list and the goal (`jollof → 3` etc.).
2. Introduce the empty dictionary `tally = {}`.
3. Walk the four-step recipe, then **trace the table row by row** from the lesson on your shared screen. The trace table is the single most valuable teaching artefact today — go slowly.
4. Run it, then add the pretty `.items()` print loop.

Mention the `.get()` one-liner shortcut as an *optional* flourish for confident students — don't let it distract the class from the clear `if/else` version, which is the one they should master first.

Then the **Translator** (Part B): a lighter, fun build. Invite students to add a word in a language they speak and paste it in chat — this is a lovely inclusion moment for a West African cohort.

#### Teaching Tips

- **Trace, don't tell.** If even a few students look lost, pause and hand-trace the tally on a whiteboard/shared doc with just three votes.
- The bonus (count letters in your name) is perfect for fast finishers — it proves the pattern works on *anything*, not just foods.
- Watch for students who write `tally[vote] += 1` without the `if` — that's the KeyError from Part 5, arriving early. Great teachable moment.

---

### Part 5: Common Mistakes — Run the Crashes Live (10 minutes)

Reproduce all three live so students see the real messages:

1. **Keys not values** — `for x in scores: print(x)` prints names. "Wanted the scores? Use `.values()` or `.items()`."
2. **`ValueError: too many values to unpack`** — `for name, score in scores:` (no `.items()`). Explain: one key comes out per loop, and Python can't split one word into two variables. Add `.items()` to fix.
3. **`KeyError`** — the tally without the `if` check. On the first vote, the slot doesn't exist yet, so `tally[vote] + 1` explodes. Check-first, then count.

Letting real errors appear (and be calmly fixed) builds debugging confidence and demystifies error messages.

#### Teaching Tips

- Read each error message aloud and decode the vocabulary: "unpack", "KeyError". Students who can read error messages debug themselves.
- Normalise errors: "Every one of these happens to professional programmers weekly. The message is Python *helping* you."

---

### Part 6: Contact Manager Tie-In + Homework + Wrap (15 minutes)

Show the `contacts` loop so students see today's skill in the term project:

```python
for name, number in contacts.items():
    print(f"{name}  📞  {number}")
```

> "Every time your Contact Manager lists or searches contacts, it loops over `.items()` — exactly what you did today."

**Homework — The Tally Machine (5 min):** Walk the requirements and the example run. Clarify the tiers: ⭐ is a fixed list; ⭐⭐ adds `input()` + `.split()`; ⭐⭐⭐ finds the highest count. Any tier counts as done.

**Week 6 teaser (2 min):** "Right now each contact holds one number. Real contacts have a name, number, email, birthday. Next week: **lists of dictionaries** — each contact becomes a full record. That's how real apps store people."

Stay on the call 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] States that looping a dict gives keys
- [ ] Uses `.values()` / `.items()` correctly for the task
- [ ] Unpacks with two variables on `.items()` without prompting
- [ ] Builds the tally with the `if key in d` guard
- [ ] Prints a dictionary with a clean f-string loop

**Engagement:**
- [ ] Answered the `.items()` chat checkpoint
- [ ] Added their own word to the translator / personalised the Report Card
- [ ] Attempted the bonus letter-tally

### Students to Watch

**Need Extra Support:**
- Keeps expecting values from a plain loop — reinforce the golden rule with a sticky note metaphor ("the key is the label on the drawer")
- Hits KeyError repeatedly — hand-trace the first two votes with them one-to-one

**Ready for More Challenge:**
- Finished the tally fast — point them at the `.get()` one-liner and the ⭐⭐⭐ "most common" homework tier
- Suggest they tally something from their own life (song plays, goals scored)

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| "Why am I getting names, not scores?" | The golden rule: looping a dict gives keys. Use `scores[name]`, `.values()`, or `.items()`. |
| `ValueError: too many values to unpack` | They forgot `.items()`. A plain loop gives one key; two variables need `.items()`. |
| `KeyError` in the tally | The `if key in d` check is missing. On the first sighting the slot doesn't exist. Show check-first pattern (or `.get(k, 0)`). |
| Tally counts letters/spaces oddly | For the word counter, remind them `.split()` breaks on spaces into words; letter-tallies will include repeats — that's correct! |
| Emoji won't display in Trinket | Occasionally a font issue; have them use plain text values instead — the logic is identical. |
| Class racing ahead | Push the `.get()` shortcut and the ⭐⭐⭐ "find the highest count" challenge early. |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Golden-rule retention:** did the "keys not values" idea stick, or will it need reinforcing in Week 6?
- **Tally confidence:** who built the counter independently vs. who needed the trace? (This predicts readiness for the Contact Manager in Week 7.)
- **Error comfort:** did students stay calm when the live crashes appeared, or panic? Adjust how you frame errors next week.
- **Timing:** did the tally get its full time, or did earlier parts overrun?

---

## 💭 Remember

**The tally pattern is the takeaway that outlives this lesson.**

`.items()` and pretty printing are important, but counting things into a dictionary is a technique students will reach for again and again — in Week 7's Contact Manager, in Term 5's AI work (word frequencies!), and far beyond. If they leave able to build a counter from an empty `{}`, today was a success.

**They can loop a whole dictionary now — next week, each entry becomes a record.** 🔁🗂️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
