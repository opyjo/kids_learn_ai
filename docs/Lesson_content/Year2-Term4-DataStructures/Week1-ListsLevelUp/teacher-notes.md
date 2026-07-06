# Year 2, Lesson 1: Lists Level Up 📋⬆️

## Teacher's Guide

**Course:** Data Structures (Year 2, Term 4)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This is the opening class of Term 4, the **Data Structures** term that ends with the Contact Manager project and the **Data Architect Badge** (Week 8). Students arrive fluent in variables, maths, f-strings, conditionals, loops and functions, with only *light* list exposure from Year 1 (create a list, `append`, a simple for-each). This lesson turns that light exposure into genuine command of the list.

Three core goals:

1. **Make indexing automatic** — especially the "first is zero" rule and the negative-index trick `[-1]`. These are the two ideas that unlock everything else this term.
2. **Give students the five core list moves** — `append`, `insert`, change-by-index, `remove`, `len` — as tools they've each run with their own hands, not just watched.
3. **Frame the term** — every skill today is a brick in the Contact Manager. Say the words "Data Architect Badge" out loud so students have a goal to aim at.

Keep the pace warm and hands-on. This cohort is strong; the risk isn't difficulty, it's boredom during the Part 1 refresh. Move through the recap briskly and spend your time in the List Lab.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Create a list and explain how it differs from a plain variable
2. Access any item by positive index, and use negative indexing (`[-1]`, `[-2]`) for items from the end
3. Modify a list with `append()`, `insert(i, x)`, index assignment, and `remove(x)`, and measure it with `len()`
4. Recognise and explain an `IndexError` (out of range) and a `ValueError` (`remove` on a missing item)
5. Loop over a list by index using `range(len(my_list))` and choose between that and a for-each loop

### Key Success Metrics

- [ ] Every student correctly predicts `["a","b","c"][-1]` in the Zoom chat
- [ ] Every student completes List Lab Experiments 1 and 2; most complete Experiment 3
- [ ] Every student deliberately triggers and reads an `IndexError` at least once
- [ ] Students can state the "first is zero, last index is len - 1" rule back to you

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share and chat enabled
- Students' existing Trinket accounts; today's Trinket name is `Y2-T4-W1-Lists`
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-type the List Lab starter** (`party = ["balloons", "cake", "music"]`) in a Trinket ready to screen-share
3. **Rehearse the negative-index queue analogy** — `[0]` is the front of the queue, `[-1]` is the back; it lands better than abstract counting
4. **Have the IndexError demo ready** — you WILL live-run a crash on purpose; make sure your screen-share font is large enough to read the red error text
5. **Prepare the term framing** — Contact Manager at Week 7, Data Architect Badge at Week 8; decide whether to screen-share or paste the week map

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Welcome to Term 4 + Data Structures / badge framing
⏱️  8-18 min  → Part 1 & 2: List refresh + indexing (incl. negative)
⏱️ 18-25 min  → Zoom-chat checkpoint: my_list[-1]?
⏱️ 25-40 min  → Part 3: the five list moves (live-code together)
⏱️ 40-48 min  → Part 4: the IndexError + ValueError demos
⏱️ 48-58 min  → Part 5: looping by index vs for-each
⏱️ 58-70 min  → Part 6: The List Lab activity
⏱️ 70-75 min  → Homework + Week 2 teaser + wrap-up
```

**Flexible timing:** The List Lab is the heart of the lesson. If the recap runs long, compress Part 5 (looping) to a single demo — but never cut the Lab or the IndexError moment.

---

## 📚 Detailed Teaching Guide

### Part 1 & 2: Refresh + Indexing (10 minutes)

Open with energy — this is a NEW term with a NEW superpower.

> "For three terms, one variable held one thing. Today, one variable holds a HUNDRED things. That's a list — and this term you become a Data Architect."

Screen-share the refresh, then move straight to indexing. Draw the index numbers UNDER the list as you talk:

```python
colours = ["red", "green", "blue"]
#            0        1        2
```

**Hammer the zero rule.** Ask the class to chant "first is zero!" It sounds silly; it works.

Then the negative trick. Use the queue analogy:

> "`[0]` is the person at the front of the queue. `[-1]` is the person at the very back — you don't need to count how many people are in the queue to point at the last one."

#### Teaching Tips

- **Do NOT dwell on the refresh.** Thirty seconds of "you know this" then onto indexing. Boredom is your only real enemy today.
- **Live-trace `["a","b","c"][-2]`** on screen — say each step aloud so students hear the reasoning, not just the answer.

---

### Zoom-Chat Checkpoint (7 minutes)

Post the prompt:

> "For the list `['a','b','c']`, what is `my_list[-1]`? Type it in the chat!"

Expect a flood of `c`. Then ask the follow-up that separates recall from understanding:

> "WHY is it `c` and not `a`? Someone explain."

You want to hear "negative counts from the end / -1 is the last one." If you get silence, re-draw the negative-index table. This checkpoint is your diagnostic for whether Part 3 can move fast.

---

### Part 3: The Five List Moves (15 minutes)

Live-code each move in ONE running Trinket, printing the list after every change so students see it mutate. Have them type along.

```python
pets = ["cat", "dog"]
pets.append("fish")      # ['cat', 'dog', 'fish']
pets.insert(0, "hamster")# ['hamster', 'cat', 'dog', 'fish']
pets[1] = "puppy"        # ['hamster', 'puppy', 'dog', 'fish']
pets.remove("dog")       # ['hamster', 'puppy', 'fish']
print(len(pets))         # 3
```

> **The append-vs-insert trap:** call it out explicitly. `append` takes ONE thing (goes to the end). `insert` takes TWO (index, then value). Ask: "Which one needs a position number?" before you show `insert`.

**Emphasise that index assignment REPLACES** — it does not lengthen the list. Students often expect `pets[1] = "x"` to add an item; show that the length stays the same.

#### Teaching Tips

- **Print after every single line.** The magic of this lesson is watching the list change live. Silent mutation teaches nothing.
- **Let them make the insert mistake** — someone will write `pets.insert("hamster")` and get an error. Great teaching moment: "insert needs to know WHERE."

---

### Part 4: The IndexError + ValueError Demos (8 minutes)

This is the memorable moment. Run a crash **on purpose** and let students read the red text.

```python
letters = ["a", "b", "c"]   # indexes 0, 1, 2
print(letters[5])           # 💥 IndexError: list index out of range
```

> "Three items. I asked for number five. Python says 'index out of range' — that's it telling you, in plain English, the spot you asked for doesn't exist."

Then the off-by-one, which is the one they'll actually hit:

```python
print(letters[3])   # still a crash! last index is 2, not 3
```

> "This is the sneaky one. Three items feels like it should have a `[3]`. But we START at zero, so the LAST index is always one less than the length."

Now the second error type — `remove` on a missing value:

```python
letters.remove("z")   # 💥 ValueError: list.remove(x): x not in list
```

> "Different crash, different word: **ValueError**. IndexError = a POSITION that doesn't exist. ValueError = a VALUE that isn't there. The error name tells you which mistake you made."

Close by showing the safe fix with `if "z" in letters:` — a natural bridge to Week 2's searching.

#### Teaching Tips

- **Reading errors is a skill.** Slow down and read the message word by word. Students who fear red text become students who debug themselves.
- **Celebrate the crash:** "Errors aren't failure — they're Python being helpful. This is the friendliest kind of message you'll ever get."

---

### Part 5: Looping by Index vs For-Each (10 minutes)

Start from what they know (for-each), then motivate the index loop by a problem for-each can't easily solve: *numbering* the items.

```python
songs = ["Intro", "Waves", "Focus"]
for i in range(len(songs)):
    print("Track", i + 1, "is", songs[i])
```

Trace `range(len(songs))` → `range(3)` → `i = 0, 1, 2` out loud. Point out `i + 1` makes it human-friendly (Track 1, 2, 3) while `songs[i]` uses the raw index.

**The decision rule they must leave with:** *"Use for-each first. Only reach for `range(len(...))` when you actually need the position number."* Simpler code, fewer bugs.

#### Teaching Tips

- **Don't over-teach `range(len())`.** It's a tool for a specific job, not the default. If students start using it everywhere, gently steer them back to for-each.

---

### Part 6: The List Lab (12 minutes)

Hand over to the students — this is their turn to drive. Everyone opens `Y2-T4-W1-Lists` and runs the three experiments in order, checking output at each step. Circulate via shared screens and the chat.

- **Experiment 1 (read):** `party[0]`, `party[-1]` — quick win for everyone
- **Experiment 2 (grow):** `append` then `insert(0, ...)` — watch for insert argument order
- **Experiment 3 (fix):** index assignment then `remove` — the full toolkit

Thumbs-up when the final list matches. Fast finishers do the bonus: predict a partner's index out loud, then deliberately trigger an `IndexError` with `party[50]`.

#### Teaching Tips

- **This is your assessment window.** Who confidently uses `[-1]`? Who still counts on their fingers? Note it for pacing Week 2.
- **Encourage prediction before running** — "guess the output first" turns a copy-paste exercise into real thinking.

---

### Homework + Wrap-Up (5 minutes)

Walk through the Playlist Manager requirements and the challenge tiers. Note that the ⭐⭐ tier invites a `def show_playlist(...)` function — students know functions from Term 3, so encourage it. The ⭐⭐⭐ tier uses `try`/`except` or `in` to guard against a `remove` on a missing item, tying straight back to today's ValueError.

Tease Week 2 with the slice sneak-peek:

```python
songs = ["a", "b", "c", "d", "e"]
print(songs[0:3])    # ['a', 'b', 'c']
```

> "Today you grabbed ONE item. Next week you grab a whole CHUNK — that's slicing. And you'll learn to SEARCH a list. Your Contact Manager is getting closer."

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Correctly predicted `["a","b","c"][-1]` and could explain WHY
- [ ] Used `append` and `insert` with correct arguments (insert order is the tell)
- [ ] Changed an item by index and understood it replaces, not adds
- [ ] Read an `IndexError` and stated the "last index is len - 1" rule
- [ ] Distinguished IndexError from ValueError

**Engagement:**
- [ ] Participated in the Zoom-chat checkpoint
- [ ] Ran all three List Lab experiments hands-on
- [ ] Used Zoom reactions during the Lab

### Students to Watch

**Need Extra Support:**
- Still counting to find the last item instead of using `[-1]` — reinforce the queue analogy 1:1
- Confused `append` and `insert` arguments repeatedly — give a two-line drill

**Ready for More Challenge:**
- Finished the Lab and bonus early — point them at the ⭐⭐⭐ homework tier and suggest they write a `def` for EACH list operation

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Students expect lists to start at 1 | Draw indexes under the items every time; chant "first is zero"; show the off-by-one crash so it sticks |
| `insert()` used with one argument → TypeError | "insert needs to know WHERE — give it an index first, then the value" |
| Index assignment expected to add an item | Print length before and after `list[1] = "x"` — same length; it replaces |
| `remove()` crashes on missing value | Expected! Use it to introduce ValueError and the `if x in list:` guard (Week 2 preview) |
| Class races ahead of the refresh | Skip straight to Part 3, come back to indexing only if the checkpoint reveals gaps |
| Trinket/Zoom technical issues | repl.it backup link in chat; private-chat triage while class continues |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Index confidence:** who owns `[-1]` and who still counts? (Slicing next week assumes indexing is solid.)
- **Error comfort:** did students read the IndexError calmly or panic? (Debugging attitude matters all term.)
- **Lab completion:** who finished all three experiments? Who stalled and where?
- **Timing:** did the refresh eat the Lab time? Trim it further next cohort if so.

---

## 💭 Remember

**Today is about turning "I can make a list" into "I own the list."**

Indexing (especially `[-1]`) and the five core moves are the foundation for everything in Term 4 — slicing, sorting, and eventually the records that make up the Contact Manager. If students leave able to grab any item and confidently reshape a list, the Data Architect Badge at Week 8 is well within reach.

**Level up — you've got this!** 📋⬆️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
