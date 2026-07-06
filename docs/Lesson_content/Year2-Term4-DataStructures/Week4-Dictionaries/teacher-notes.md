# Year 2, Lesson 4: Dictionaries — Labelled Boxes 🗂️🏷️

## Teacher's Guide

**Course:** Data Structures (Year 2, Term 4)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 4 of 8

---

## 📋 Lesson Overview

### Purpose

This is the students' **first proper dictionaries lesson**, and it is the hinge of the whole term. For three weeks they have lived inside lists — indexing, slicing, searching, sorting, aggregates. They are comfortable with *position-based* thinking. Today you introduce a completely different mental model: finding data by **named label**, not by number. The session has three core goals:

1. **Land the core mental model** — a list uses number positions; a dictionary uses named keys. Everything else today hangs off this one idea. If they leave saying "labels, not numbers," the lesson worked.
2. **Build fluency with the four core operations** — create, read (`[]` and `.get()`), add/update, and membership check (`in`). These are exactly the operations the Contact Manager needs.
3. **Connect to the project** — every contact will be a dictionary. Make that link explicit and repeatedly, so today feels like laying a foundation stone, not a detour.

The biggest conceptual hurdle is that students will keep reaching for **number indexes** (`person[0]`) out of list-habit. Expect this and turn each occurrence into a teaching moment. The second hurdle is **keys vs values** — especially that `in` checks keys.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain the difference between a list (position-based) and a dictionary (key-based)
2. Create a dictionary using `{"key": value}` syntax
3. Read a value by its key with `person["key"]`, and recognise a `KeyError` as a missing key
4. Use `.get("key")` to read safely, understanding it returns `None` when the key is absent
5. Add and update fields (recognising both use the same syntax) and delete a field with `del`
6. Check for a key's existence with `if "key" in person:`, knowing `in` checks keys not values

### Key Success Metrics

- [ ] Every student creates and reads from a dictionary in Trinket by minute 30
- [ ] Every student completes the "Profile Box" add + update steps
- [ ] The class can correctly answer "what does `in` check — keys or values?"
- [ ] Students can state that each Contact Manager contact will be a dictionary

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Students' existing Trinket accounts; new Trinket named `Y2-T4-W4-Dictionaries`
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Prepare the "list weakness" hook** — have the `person = ["Ama", 12, "ama@email.com"]` list ready to screen-share; you'll ask "which position is the email?" to expose the pain of position-based access
3. **Pre-type the KeyError demo** — you will deliberately crash `person["email"]` live; rehearse it so the error message appears cleanly
4. **Have the comparison table ready** (list vs dictionary) — this is the conceptual centrepiece
5. **Rehearse the project link** — the `contact = {"name":..., "phone":...}` snippet; say it with conviction, this is why today matters
6. **Prepare a fallback** — if the class grasps it fast, the extension is looping preview (Week 5 teaser) or nested thinking (a list of dicts, Week 6 teaser)

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap lists + the "position problem" hook
⏱️  8-18 min  → Part 2-3: making a dict + reading by key (screen-share + trace)
⏱️ 18-28 min  → Part 4: KeyError live crash + .get() rescue
⏱️ 28-40 min  → Part 5-6: add/update/delete + membership check
⏱️ 40-55 min  → Class Activity: Build a Profile Box (hands-on)
⏱️ 55-65 min  → List vs dict table + project connection + common mistakes
⏱️ 65-75 min  → Homework + Week 5 teaser + wrap-up
```

**Flexible timing:** The Profile Box activity is where the learning consolidates — protect its 15 minutes. If time is tight, trim the common-mistakes walkthrough (students will meet those errors themselves in the activity anyway).

---

## 📚 Detailed Teaching Guide

### Part 1: The Position Problem (8 minutes)

Open by celebrating their list mastery, then expose the weakness. Screen-share:

```python
person = ["Ama", 12, "ama@email.com"]
```

> "You're list experts now. So — quick — which position is Ama's email? Type the number in the chat."

You'll get a mix of `1`, `2`, and `[2]`. That hesitation IS the lesson.

> "See how you had to STOP and count? And if I add a middle name at the front, every number shifts and your code breaks. There's a better way — boxes with LABELS."

Reveal the dictionary version. Let the relief land. This contrast is the emotional core of the lesson — don't rush past it.

#### Teaching Tips

- **Don't define 'dictionary' first.** Sell the *problem* first; the solution feels earned.
- Reassure that lists aren't "wrong" — they're perfect for ordered collections. Today is about picking the right tool.

---

### Part 2-3: Making and Reading a Dictionary (10 minutes)

Screen-share and build `person = {"name": "Ama", "age": 12}` live. Narrate the anatomy using the table from the lesson: braces, key, colon, value, comma.

Then read from it, and **trace out loud**:

```
{"name": "Ama", "age": 12}["name"]  →  "Ama"
```

**The single most important comparison** — put these side by side:

| List | Dictionary |
|---|---|
| `person[0]` — a **number** | `person["name"]` — a **key in quotes** |

> "Same square brackets. Completely different idea. A list wants a number; a dictionary wants a label."

#### Zoom Checkpoint

Run the lesson's checkpoint: "Does `person["name"]` give the word `name` or the value `Ama`?" This directly tests the keys-vs-values idea early, before it can calcify wrong.

#### Teaching Tips

- **Watch for `person[0]` attempts.** Someone will try it. Let them — it produces `KeyError: 0`, which you can fold straight into Part 4.
- Keys in quotes is a common slip: `person[name]` (no quotes) will throw a `NameError`. Flag it lightly here; it's Common Mistake territory.

---

### Part 4: KeyError + .get() (10 minutes)

**Crash it on purpose.** This is the memorable moment:

```python
person = {"name": "Ama", "age": 12}
print(person["email"])
```

```
KeyError: 'email'
```

> "Python is shouting: there's no box labelled email! The error even TELLS you which label it couldn't find — `'email'`."

Then introduce `.get()` as the calm alternative:

```python
print(person.get("email"))   # None
```

Emphasise `None` = "nothing here", and the decision rule: `[]` when you're **sure** the key exists, `.get()` when you're **not sure**. Keep `.get()` gentle — students only need to know it exists and won't crash; deep patterns (default values) can wait.

#### Teaching Tips

- **`None` will confuse some.** Clarify it's not the text `"None"` and not an error — it's Python's official word for emptiness.
- Don't over-drill `.get()`. One clear demo is enough; the `in` check in Part 6 gives them a second safety tool.

---

### Part 5-6: Add / Update / Delete + Membership (12 minutes)

The delightful surprise: **add and update are the same syntax.** Demo both:

```python
person["email"] = "ama@email.com"   # adds (new key)
person["age"] = 13                   # updates (existing key)
```

> "Python checks: does this label exist? No → make a new box. Yes → replace what's inside. One rule, two jobs."

Show `del person["age"]` briefly. Then the membership check, and hammer the keys-not-values point:

```python
"name" in person   # True  — it's a key
"Ama"  in person   # False — that's a value!
```

This is the concept students most often get wrong. Say it three different ways; run it live.

#### Teaching Tips

- **Live-run the add-then-print each time** so students SEE the dictionary grow. The visible change ("look, a new box appeared!") cements it far better than description.
- The `"Ama" in person → False` result genuinely surprises students. Pause for it; ask the chat to predict before you run it.

---

### Part 7: Class Activity — Build a Profile Box (15 minutes)

The hands-on heart of the lesson. Students open Trinket (`Y2-T4-W4-Dictionaries`) and work the five steps: create → read → add → update → safe-read/membership. Thumbs-up after each step.

- Circulate via shared screens / chat. The most common stuck points: forgetting quotes on keys, and trying `me[0]`.
- When someone hits a `KeyError` naturally, celebrate it: "Perfect — that's the error we practised! What's the fix?"
- Fast finishers do the f-string bonus card and paste a line in chat.

#### Differentiation

- **Struggling:** stay on Steps 1-2 (create + read) until solid; the rest can be homework.
- **Confident:** challenge them to add a *second* dictionary for a friend and print both, previewing Week 6's "list of dicts".

---

### Part 8 + Common Mistakes + Project Link (10 minutes)

Show the **list vs dictionary** table and land the rule of thumb: list = ordered same-kind things; dict = labelled facts about one thing.

Walk the three common mistakes quickly, **live-coding each error** so students see the real message:

1. `person[0]` on a dict → `KeyError: 0` (number-index habit from lists)
2. Missing key → `KeyError: 'age'` → fix with `.get()` or `in`
3. `"Ama" in person` → `False` (keys vs values)

Then the **project connection** — deliver this with energy:

```python
contact = {"name": "Ama", "phone": "0244-123-456"}
```

> "THIS is your Contact Manager's building block. Every single contact is a dictionary. Today you didn't learn a side-topic — you laid the foundation stone of the whole project."

---

### Homework + Week 5 Teaser + Wrap-Up (10 minutes)

#### Homework: "My Profile / Pet Record" (5 minutes)

Walk the requirements and the Pet Record example run. Point out the tiers:

> "⭐ is the mission: four fields, an add, an update. ⭐⭐ adds `.get()` and an `in` check — the safety tools. ⭐⭐⭐ uses `input()` to let the USER fill a field. Any tier counts as done."

Paste submission instructions in chat; set the due date.

#### Week 5 Teaser (2 minutes)

> "Right now you print fields ONE AT A TIME. Boring for a ten-field profile! Next week you'll loop through an ENTIRE dictionary in three lines. That's when dictionaries go from handy to powerful."

#### Wrap-Up (3 minutes)

> "Labels, not numbers. That's the whole idea — and it's behind almost every app and AI tool you use. You just learned the most important brick in this term's project. See you next week for the looping magic!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Created a dictionary with correct `{"key": value}` syntax
- [ ] Read a value by key (not by number)
- [ ] Recognised and could fix a `KeyError`
- [ ] Added AND updated fields, understanding they share syntax
- [ ] Used `in` correctly (checking keys)

**Conceptual Understanding:**
- [ ] Can explain list (position) vs dictionary (label) in their own words
- [ ] Knows `.get()` returns `None` instead of crashing
- [ ] Can state each contact in the project will be a dictionary

### Students to Watch

**Need Extra Support:**
- Keeps using number indexes (`person[0]`) — list-habit is strong; give one-to-one practice reading by key
- Confuses keys and values on the `in` check — revisit with a concrete "the label is on the outside of the box" analogy

**Ready for More Challenge:**
- Point them at the ⭐⭐⭐ homework tier (input into a dict) and hint at storing TWO profiles — a natural bridge to Week 6's list of dictionaries

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Students use `person[0]` and get `KeyError: 0` | Expected! Turn it into the headline lesson: dicts have no positions, only labels |
| `NameError` on `person[name]` (no quotes) | Keys must be in quotes: `person["name"]`. Without quotes Python looks for a variable called `name` |
| Confusion that `.get()` shows nothing | `None` prints as `None`; clarify it means "empty", not an error and not the text "None" |
| "When do I use a list vs a dict?" | Return to the rule of thumb: same-kind ordered things → list; labelled facts about one thing → dict |
| Class grasps it very fast | Preview a list of dictionaries (Week 6) or start the Week 5 looping teaser early |
| Trinket/Zoom technical issues | Same playbook as always: repl.it backup, browser-window screen share, private-chat triage |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Mental-model check:** did the class internalise "labels not numbers"? If number-indexing persisted, budget a 5-minute recap next week.
- **Keys vs values:** how did the `"Ama" in person → False` moment land? This predicts Week 5-6 struggles.
- **Project buy-in:** did the Contact Manager link excite them? Use it as a callback all term.
- **Pace:** did the KeyError demo and Profile Box activity get their full time? Adjust Week 5 if not.

---

## 💭 Remember

**One idea carries this whole lesson: labels beat positions.**

Everything else — `.get()`, add/update, `in` — is a tool that hangs off that single mental shift. If students leave able to say "a list uses numbers, a dictionary uses labels" and to build one contact dictionary, they are fully ready for Week 5's looping and the Contact Manager beyond it.

**You're building the foundation of the term's project today — make it feel that important!** 🗂️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
