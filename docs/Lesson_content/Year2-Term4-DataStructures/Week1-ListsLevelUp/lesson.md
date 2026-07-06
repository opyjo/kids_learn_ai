---
title: "Lists Level Up 📋⬆️"
description: "Go deep on Python lists — indexing (including negative indexing), adding, inserting, removing and changing items, len(), and looping by index — the foundation for this term's Contact Manager"
difficulty: "intermediate"
order_index: 1
course_slug: "year2-term-4-data-structures"
is_premium: false
requires_trinket: true
starter_code: |
  # 📋 Lists Level Up — Warm-Up!
  # You made lists in Year 1. This term we go DEEP.

  # Here is a party guest list:
  guests = ["Ama", "Kofi", "Zara"]

  # 1. Print the WHOLE list
  print(guests)

  # 2. Print just the FIRST guest (index 0)
  # print(guests[?])

  # 3. Print just the LAST guest — try the negative trick!
  # print(guests[?])

  # 4. How many guests are there?
  # print(len(guests))

  # Fill in the ? marks and run it! 🎉
solution_code: |
  # 📋 Lists Level Up — one possible solution

  guests = ["Ama", "Kofi", "Zara"]

  # 1. The whole list
  print(guests)                 # ['Ama', 'Kofi', 'Zara']

  # 2. The first guest — index 0
  print(guests[0])              # Ama

  # 3. The last guest — index -1 (no counting needed!)
  print(guests[-1])             # Zara

  # 4. How many guests?
  print(len(guests))            # 3

  # Now let's CHANGE the list:
  guests.append("Kwame")        # add to the end
  guests.insert(0, "Amara")     # add to the FRONT
  guests[1] = "Ama B."          # change item at index 1
  guests.remove("Kofi")         # remove by value

  print(guests)                 # ['Amara', 'Ama B.', 'Zara', 'Kwame']
  print("Total guests:", len(guests))   # Total guests: 4
class_activities: |
  ## 🧪 Class Activity: The List Lab

  You are the lab technician. Start with this party list in Trinket and run each experiment in order, checking the output after every step.

  ```python
  party = ["balloons", "cake", "music"]
  ```

  ### Experiment 1 — Read the List (⭐)
  1. Print the whole list
  2. Print the FIRST item using `party[0]`
  3. Print the LAST item using `party[-1]`
  4. Give a **thumbs up** in Zoom when your output matches your neighbour's

  ### Experiment 2 — Grow the List (⭐⭐)
  1. `party.append("games")` — add to the end
  2. `party.insert(0, "invitations")` — add to the FRONT (you send these first!)
  3. Print the list and print its `len()`

  ### Experiment 3 — Fix the List (⭐⭐⭐)
  1. Change the item at index 2 to `"chocolate cake"` using `party[2] = ...`
  2. `party.remove("music")` — take music off the list
  3. Print the final list and its length

  ### 💬 Zoom-Chat Checkpoint
  With the list `["a", "b", "c"]`, type your answer in the Zoom chat:
  **What does `my_list[-1]` give you — and WHY?**

  ### Bonus Lab
  Ask a lab partner to call out an index (like `party[1]` or `party[-2]`). Predict the answer OUT LOUD before you run it. Then try `party[50]` on purpose and read the error message together!
take_home_assignment: |
  ## 📚 Homework: Playlist Manager

  Build a **Playlist Manager** (or a Shopping List — your choice!) in Trinket that stores items in a list and changes them.

  **Requirements:**
  1. Start with a list of at least **3 songs** (or items)
  2. `append()` one new item to the END
  3. `insert()` one new item at the FRONT (index 0)
  4. Change one item using its index (`playlist[1] = ...`)
  5. `remove()` one item by name
  6. Print the final list AND print how many items it has using `len()`

  **Example run:**
  ```
  🎵 My Playlist:
  ['Intro', 'Sunrise', 'Waves', 'Focus']
  Total songs: 4
  ```

  **Challenge tiers:**
  - ⭐ All six requirements above, working
  - ⭐⭐ Print the first and last song by name using `[0]` and `[-1]`, and wrap the steps in a `def show_playlist(playlist)` function (you know functions now!)
  - ⭐⭐⭐ Let the user `input()` a song name to add, and use `try`/`except` (or an `if`) so removing a song that isn't there doesn't crash the program

  **Submit:** Save your Trinket as `Y2-T4-W1-Lists`, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Think: How AI Uses Lists

  When an AI recommends the next video, song, or answer, it is almost always working through a **list** behind the scenes.

  - 📺 A video app keeps a list of videos it *might* show you, then picks from it
  - 🎵 A music app stores your liked songs in a giant list
  - 🤖 A chatbot keeps the conversation as a list of messages — one item per turn

  **Discuss in the Zoom chat:** "If a music app stored a MILLION songs, would it use one huge list or lots of tiny ones?"

  The point: the humble list you learned today is the same tool that powers apps used by billions of people. Master lists now, and you're speaking the language real AI systems are built on.
---

# Year 2, Lesson 1: Lists Level Up 📋⬆️

**Course:** Data Structures
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

- What a **list** really is and how to create one (a quick Year 1 refresh)
- **Indexing:** grab any item with `my_list[0]`, and use the negative-index trick `my_list[-1]` for the last item
- **Modifying lists:** `append()`, `insert()`, `remove()`, changing an item by index, and measuring with `len()`
- Why Python crashes with an **IndexError** — and how to avoid it
- Looping over a list **with its index** using `range(len(my_list))`, and when to use that vs a plain for-each

---

## 🤖 BrightByte Kicks Off Term 4!

> *"New term, new superpower! For three terms you've stored ONE thing in a variable at a time — one name, one score, one answer. But real programs juggle HUNDREDS of things at once: every contact in your phone, every song in a playlist, every message in a chat. How? Lists. This term you master data structures, and it all starts with the list. By Week 8 you'll build a Contact Manager that holds a whole address book. Let's level up!"*
> — BrightByte 🤖📋

---

## 🗂️ Part 1: What Is a List? (Quick Refresh)

You met lists in Year 1. Here's the one-line reminder: a **list** stores many values in ONE variable, in order, inside square brackets `[ ]`.

```python
shopping = ["milk", "bread", "eggs"]
print(shopping)
```

**Output:**
```
['milk', 'bread', 'eggs']
```

Compare it to a plain variable:

| Kind | Stores | Example |
|---|---|---|
| Variable | ONE value | `fruit = "apple"` |
| List | MANY values, in order | `fruits = ["apple", "pear", "plum"]` |

You can loop over every item with a **for-each** loop — also from Year 1:

```python
shopping = ["milk", "bread", "eggs"]
for item in shopping:
    print("Buy:", item)
```

**Output:**
```
Buy: milk
Buy: bread
Buy: eggs
```

That's the refresher. Now — let's go **deep**. 🏊

---

## 🔢 Part 2: Indexing — Grabbing One Item

Every item in a list has a **position number** called an **index**. The big surprise for most people: **Python starts counting at 0, not 1.**

```python
colours = ["red", "green", "blue"]
#            0        1        2      ← the index of each item
```

Grab any item by putting its index in square brackets:

```python
colours = ["red", "green", "blue"]
print(colours[0])    # red
print(colours[1])    # green
print(colours[2])    # blue
```

| Code | Gives You | Because... |
|---|---|---|
| `colours[0]` | `red` | index 0 is the FIRST item |
| `colours[1]` | `green` | index 1 is the SECOND item |
| `colours[2]` | `blue` | index 2 is the THIRD (and last) item |

> ⚠️ **The 0 rule:** the first item is always `[0]`. So a list with 3 items uses indexes `0`, `1`, `2` — the last index is always ONE LESS than the length. This trips up EVERYONE at first, so say it out loud: *"First is zero!"*

### 🔄 The Negative-Index Trick

What if you want the LAST item but don't want to count how long the list is? Use a **negative index**. `-1` means "the last one":

```python
colours = ["red", "green", "blue"]
print(colours[-1])   # blue   ← last item, no counting!
print(colours[-2])   # green  ← second from the end
print(colours[-3])   # red    ← third from the end
```

Trace it slowly:

```python
["a", "b", "c"][-1]    # → "c"   (the very last item)
["a", "b", "c"][-2]    # → "b"   (one before the end)
```

| Positive index | Item | Negative index |
|---|---|---|
| `0` | `"red"` | `-3` |
| `1` | `"green"` | `-2` |
| `2` | `"blue"` | `-1` |

> 💡 Think of it like a queue: `[0]` is the person at the front, `[-1]` is the person at the very back. `-1` is BrightByte's favourite trick — it always finds the last item no matter how long the list gets.

### 💬 Zoom-Chat Checkpoint

> **Type in the Zoom chat:** for the list `["a", "b", "c"]`, what is `my_list[-1]`?
> (Answer: `"c"` — the last item!) Give a **thumbs up** 👍 when you've posted.

---

## 🛠️ Part 3: Changing a List

Unlike a plain number, a list can **grow, shrink and change** while your program runs. Here are the five moves you'll use constantly this term.

### ➕ `append(x)` — Add to the END

```python
pets = ["cat", "dog"]
pets.append("fish")
print(pets)          # ['cat', 'dog', 'fish']
```

### ⬅️ `insert(i, x)` — Add at a POSITION

`insert` takes TWO things: the index to put it at, and the item.

```python
pets = ["cat", "dog"]
pets.insert(0, "hamster")   # put "hamster" at the front (index 0)
print(pets)                 # ['hamster', 'cat', 'dog']
```

Everything after that index shuffles one place to the right.

### ✏️ Change by Index — `my_list[i] = "new"`

Point at an existing index and give it a new value:

```python
pets = ["cat", "dog", "fish"]
pets[1] = "puppy"
print(pets)          # ['cat', 'puppy', 'fish']
```

> Note: this REPLACES the item at index 1. It does NOT add a new one — the list stays the same length.

### ➖ `remove(x)` — Delete by VALUE

`remove` deletes the first item that MATCHES the value you give it:

```python
pets = ["cat", "dog", "fish"]
pets.remove("dog")
print(pets)          # ['cat', 'fish']
```

### 📏 `len(my_list)` — How Many Items?

```python
pets = ["cat", "fish"]
print(len(pets))     # 2
```

### The Full Cheat-Sheet

| Move | Code | What It Does |
|---|---|---|
| Add to end | `list.append("x")` | Puts `"x"` last |
| Insert at position | `list.insert(0, "x")` | Puts `"x"` at that index |
| Change item | `list[1] = "x"` | Replaces the item at index 1 |
| Remove by value | `list.remove("x")` | Deletes the first `"x"` |
| Count items | `len(list)` | Gives the number of items |

> 🧠 **append vs insert:** `append` always goes to the end (one argument). `insert` needs an index AND a value (two arguments). Mixing them up is the classic beginner slip!

---

## 💥 Part 4: The IndexError (and How to Dodge It)

If you ask for an index that doesn't exist, Python stops and complains:

```python
letters = ["a", "b", "c"]   # only indexes 0, 1, 2 exist
print(letters[5])
```

**Output:**
```
IndexError: list index out of range
```

Read that message like a detective: *"list index out of range"* means the number you asked for is bigger than the list has. The list has 3 items, so index `5` simply isn't there.

The sneakiest version is the **off-by-one** error — asking for `[3]` on a 3-item list:

```python
letters = ["a", "b", "c"]   # indexes are 0, 1, 2 — NOT 3!
print(letters[3])           # 💥 IndexError: list index out of range
```

> ⚠️ **Remember the rule:** a list of length `3` has a LAST index of `2`, because we start at `0`. The valid indexes are always `0` up to `len(list) - 1`.

**The safe way to reach the last item?** Use `len()` or the negative trick:

```python
letters = ["a", "b", "c"]
print(letters[len(letters) - 1])   # c  (3 - 1 = index 2)
print(letters[-1])                 # c  (much easier!)
```

---

## ⚠️ Common Mistakes (Watch These!)

**Mistake 1: Forgetting lists start at 0**

❌ Wrong — trying to get the first item with `[1]`:
```python
names = ["Ama", "Kofi", "Zara"]
print(names[1])
```
```
Kofi
```
That's the SECOND item, not the first!

✅ Correct:
```python
names = ["Ama", "Kofi", "Zara"]
print(names[0])
```
```
Ama
```

---

**Mistake 2: Going out of range (IndexError)**

❌ Wrong — the list has 3 items, so `[3]` doesn't exist:
```python
names = ["Ama", "Kofi", "Zara"]
print(names[3])
```
```
IndexError: list index out of range
```

✅ Correct — the last valid index is `2`, or just use `-1`:
```python
names = ["Ama", "Kofi", "Zara"]
print(names[2])     # Zara
print(names[-1])    # Zara
```

---

**Mistake 3: `remove()` on an item that isn't there**

❌ Wrong — there is no `"Kwame"` in the list:
```python
names = ["Ama", "Kofi", "Zara"]
names.remove("Kwame")
```
```
ValueError: list.remove(x): x not in list
```

✅ Correct — check it's there first (a use for `in`, and a taster of Week 2!):
```python
names = ["Ama", "Kofi", "Zara"]
if "Kwame" in names:
    names.remove("Kwame")
else:
    print("Kwame is not on the list!")
```
```
Kwame is not on the list!
```

> Two different error words to learn today: **IndexError** (a position that doesn't exist) and **ValueError** (a value that isn't in the list). Reading the error name tells you exactly what went wrong!

---

## 🔁 Part 5: Looping With the Index

You already know the **for-each** loop. Sometimes, though, you want to know the POSITION of each item as you go — for that, loop over `range(len(my_list))`.

```python
songs = ["Intro", "Waves", "Focus"]
for i in range(len(songs)):
    print(i, "->", songs[i])
```

**Output:**
```
0 -> Intro
1 -> Waves
2 -> Focus
```

Trace it: `len(songs)` is `3`, so `range(3)` gives `i = 0, 1, 2`. Each time, `songs[i]` grabs the item at that index. Notice how the numbering perfectly matches the indexes — no off-by-one!

### When to Use Which

| Situation | Use | Why |
|---|---|---|
| You just need each item | **for-each** (`for item in list:`) | Simplest and cleanest |
| You need the position number too | **index loop** (`for i in range(len(list)):`) | Gives you `i` to number or compare items |
| You want to change items while looping | **index loop** | You can do `list[i] = ...` |

```python
# for-each: clean when you only need the value
for song in songs:
    print("Now playing:", song)

# index loop: use it when the NUMBER matters
for i in range(len(songs)):
    print("Track", i + 1, "is", songs[i])   # i + 1 makes it human-friendly (1, 2, 3)
```

**Output of the second loop:**
```
Track 1 is Intro
Track 2 is Waves
Track 3 is Focus
```

> 💡 Rule of thumb: **reach for for-each first.** Only switch to `range(len(...))` when you genuinely need the index. Simpler code = fewer bugs.

---

## 🧪 Part 6: Class Activity — The List Lab

Time to be a lab technician! Open Trinket (`Y2-T4-W1-Lists`) and start with this list:

```python
party = ["balloons", "cake", "music"]
```

Run each experiment in order and check the output after every step:

1. **Read it** — print `party[0]` and `party[-1]`
2. **Grow it** — `party.append("games")`, then `party.insert(0, "invitations")`
3. **Fix it** — `party[2] = "chocolate cake"`, then `party.remove("music")`
4. **Report** — print the final list and `len(party)`

Give a **thumbs up** 👍 in Zoom when your final list matches. Then try the bonus: ask a partner for an index to predict before running it!

---

## 🌟 What's Coming Next Week?

You can now grab ONE item and change your list. But what if you want a whole CHUNK — say, the first three songs, or everything except the last item?

```python
songs = ["a", "b", "c", "d", "e"]
print(songs[0:3])    # a sneak peek: ['a', 'b', 'c']
```

Next week is **Week 2: Slicing & Searching Lists** — you'll learn `list[start:stop]` to grab slices, and how to search a list to find WHERE an item lives. Your Contact Manager is going to need it!

---

## 🏆 Today's Achievements

- ✅ You can grab any item with an index — including `[-1]` for the last one
- ✅ You can `append`, `insert`, change by index, and `remove` items
- ✅ You can measure a list with `len()`
- ✅ You know what an **IndexError** is and how to dodge it
- ✅ You can loop with `range(len(my_list))` and know when to use for-each instead

> *"Look what you just unlocked! You went from 'I can make a list' to 'I can bend a list to my will' — read it, grow it, shrink it, fix it. That is EXACTLY the skill a Contact Manager needs. Seven weeks from now, you'll be storing a whole address book. Brilliant start to the term!"*
> — BrightByte 🤖📋

---

## 📚 Homework: Playlist Manager

Build a **Playlist Manager** (or a Shopping List — your choice!) in Trinket that stores items in a list and changes them.

**Requirements:**
1. Start with a list of at least **3 songs** (or items)
2. `append()` one new item to the END
3. `insert()` one new item at the FRONT (index 0)
4. Change one item using its index (`playlist[1] = ...`)
5. `remove()` one item by name
6. Print the final list AND print how many items it has using `len()`

**Example run:**
```
🎵 My Playlist:
['Intro', 'Sunrise', 'Waves', 'Focus']
Total songs: 4
```

**Challenge tiers:**
- ⭐ All six requirements above, working
- ⭐⭐ Print the first and last song by name using `[0]` and `[-1]`, and wrap the steps in a `def show_playlist(playlist)` function (you know functions now!)
- ⭐⭐⭐ Let the user `input()` a song name to add, and use `try`/`except` (or an `if`) so removing a song that isn't there doesn't crash the program

**Submit:** Save your Trinket as `Y2-T4-W1-Lists`, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*One list at a time, you're becoming a Data Architect. See you next week for slicing! 📋⬆️*
