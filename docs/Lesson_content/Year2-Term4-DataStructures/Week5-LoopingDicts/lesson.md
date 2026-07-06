---
title: "Looping Over Dictionaries 🔁🗂️"
description: "Loop through dictionaries with keys, values, and .items() — print them beautifully, and build a tally counter that counts votes and words"
difficulty: "intermediate"
order_index: 5
course_slug: "year2-term-4-data-structures"
is_premium: false
requires_trinket: true
starter_code: |
  # 🔁 Looping Over Dictionaries!
  # A dictionary stores pairs: a KEY and its VALUE.

  scores = {"Ama": 95, "Kofi": 88, "Zara": 100}

  # Try 1: loop over the dictionary — what gets printed?
  for name in scores:
      print(name)

  # Try 2: now loop over .items() to get BOTH parts
  # for name, score in scores.items():
  #     print(name, "scored", score)

  # Try 3: your turn — print each score followed by " points"
  # (use .values())

  # Run it and watch the loop work! 🏃
solution_code: |
  # 🔁 Looping Over Dictionaries — one possible solution

  scores = {"Ama": 95, "Kofi": 88, "Zara": 100}

  # Try 1: looping a dict gives you the KEYS (the names)
  for name in scores:
      print(name)

  # Try 2: .items() gives you the key AND the value together
  for name, score in scores.items():
      print(name, "scored", score)

  # Try 3: .values() gives you just the values
  for score in scores.values():
      print(score, "points")
class_activities: |
  ## 🎮 Class Activity: The Vote Counter & The Translator 🗳️

  Two builds today. Type each one in Trinket, run it, and give a **thumbs up** in Zoom when it works!

  ### Part A — The Vote Counter (⭐⭐)
  The class voted for their favourite lunch. Turn the raw list of votes into a tally!

  ```python
  votes = ["jollof", "banku", "jollof", "waakye", "jollof", "banku"]
  tally = {}

  for vote in votes:
      if vote in tally:
          tally[vote] = tally[vote] + 1
      else:
          tally[vote] = 1

  print("--- Results ---")
  for food, count in tally.items():
      print(f"{food}: {count} votes")
  ```

  ### Part B — The Translator (⭐⭐)
  Build a little English → Twi lookup and use it:

  ```python
  twi = {"welcome": "akwaaba", "thank you": "medaase", "friend": "adamfo"}

  word = "thank you"
  print(f"{word} in Twi is {twi[word]}")
  ```

  ### Zoom Chat Question 💬
  **What does `.items()` give you on each loop?** Type your answer in the chat.
  (Hint: it's TWO things at once!)

  ### Bonus (⭐⭐⭐)
  Change the Vote Counter to count **letters** in your name instead of foods. Loop over each letter and tally how many times each one appears!
take_home_assignment: |
  ## 📚 Homework: The Tally Machine

  Build a **Word Counter** (or any Tally Machine) in Trinket that counts how many times each thing appears and prints the totals.

  **Requirements:**
  1. Start with a **list** of things (words, votes, colours — your choice)
  2. Use an **empty dictionary** `counts = {}` to store the tally
  3. **Loop** over the list; use `if key in counts:` to add 1 or start at 1
  4. **Loop over `.items()`** to print every thing and its count with an f-string

  **Example run (a word counter):**
  ```
  --- Word Counts ---
  the: 3
  cat: 1
  sat: 1
  mat: 1
  ```

  **Challenge tiers:**
  - ⭐ Tally a fixed list you write yourself
  - ⭐⭐ Ask the user for a sentence with `input()`, then `.split()` it into words and count them
  - ⭐⭐⭐ After the counts, find and print the thing with the **highest** count ("Most common word: the")

  **Submit:** Save your Trinket (`Y2-T4-W5-LoopingDicts`), click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Tiny AI Corner: How AI Reads Your Words

  You just built a **word counter**. Believe it or not, that is one of the very first steps in how AI understands text!

  When an AI reads a message, one thing it can do is count how often each word appears — a **word-frequency count**, exactly like your tally dictionary. Words that appear a lot (like "the" or "and") get treated differently from rare, meaningful words.

  **Discuss in the Zoom chat:** if an AI counted every word in your favourite book, which word do you think would come out on top? 🤔

  Your little `{word: count}` dictionary is the same idea real language tools use — just much, much bigger. Every tally you write this week is a baby step towards understanding how machines read.
---

# Year 2, Lesson 5: Looping Over Dictionaries 🔁🗂️

**Course:** Data Structures
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

- How to **loop over a dictionary** with `for key in my_dict:`
- The three loop helpers: `.keys()`, `.values()`, and `.items()`
- Why `.items()` is the magic one — it hands you the **key AND the value** together
- How to **print a whole dictionary beautifully** with a loop and f-strings
- How to **build a dictionary inside a loop** to make a **tally counter** (count votes, count words!)
- How to make a simple **lookup / translator** dictionary

---

## 🤖 BrightByte Says Hello

> *"Last week you learned to store data in a dictionary — names paired with phone numbers, foods paired with prices. But a dictionary with 100 contacts is useless if you can only look at one at a time! Today you learn to LOOP over the whole thing — to march through every pair and do something with it. This is the skill that makes your Contact Manager actually work. Let's go!"*
> — BrightByte 🤖🔁

---

## 🔁 Part 1: Looping Over a Dictionary

You already know how to loop over a list. A dictionary loops too — but there's a twist you must remember.

Here is a dictionary of test scores:

```python
scores = {"Ama": 95, "Kofi": 88, "Zara": 100}

for name in scores:
    print(name)
```

**Output:**
```
Ama
Kofi
Zara
```

🛑 **Read that output again.** We got the **names** — the *keys* — not the scores!

This is the single most important rule of the day:

> **When you loop over a dictionary, you get the KEYS.**

That makes sense: the key is how you *find* everything else. Once you have the key, you can look up its value:

```python
scores = {"Ama": 95, "Kofi": 88, "Zara": 100}

for name in scores:
    print(name, "scored", scores[name])
```

**Output:**
```
Ama scored 95
Kofi scored 88
Zara scored 100
```

See what we did? `name` is the key, and `scores[name]` looks up the matching value. 🔑

---

## 🗝️ Part 2: The Three Helpers — keys, values, items

Python gives you three tidy tools for looping. Here's the whole family in one table:

| Helper | What it gives you each loop | Example result |
|---|---|---|
| `my_dict` (or `.keys()`) | just the **keys** | `Ama`, `Kofi`, `Zara` |
| `.values()` | just the **values** | `95`, `88`, `100` |
| `.items()` | **key and value together** | `Ama 95`, `Kofi 88`, `Zara 100` |

### Looping the values only

```python
scores = {"Ama": 95, "Kofi": 88, "Zara": 100}

for score in scores.values():
    print(score)
```

**Output:**
```
95
88
100
```

### The star of the show: `.items()`

`.items()` gives you **both** parts at once. Because it hands you two things, you use **two variable names** in your loop:

```python
scores = {"Ama": 95, "Kofi": 88, "Zara": 100}

for name, score in scores.items():
    print(f"{name} scored {score}")
```

**Output:**
```
Ama scored 95
Kofi scored 88
Zara scored 100
```

Read it out loud: *"for each **name** and **score** in the items of scores..."* The first variable catches the key, the second catches the value.

> 🔬 **Trace it tiny.** With one pair:
> ```python
> for k, v in {"a": 1}.items():
>     print(k, v)
> ```
> prints exactly:
> ```
> a 1
> ```
> `k` became `"a"` (the key), `v` became `1` (the value).

### 💬 Zoom Chat Checkpoint

> **In your own words: what does `.items()` give you on each loop?**
> Type it in the chat. If you wrote "the key and the value" — you've got it! 👍

---

## 💅 Part 3: Printing a Dictionary Beautifully

Printing a whole dictionary the lazy way looks messy:

```python
scores = {"Ama": 95, "Kofi": 88, "Zara": 100}
print(scores)
```

**Output:**
```
{'Ama': 95, 'Kofi': 88, 'Zara': 100}
```

Curly braces, quotes, colons — ugly! A loop with an f-string makes it human-friendly:

```python
scores = {"Ama": 95, "Kofi": 88, "Zara": 100}

print("--- Report Card ---")
for name, score in scores.items():
    print(f"⭐ {name}: {score}/100")
```

**Output:**
```
--- Report Card ---
⭐ Ama: 95/100
⭐ Kofi: 88/100
⭐ Zara: 100/100
```

Now *that* looks like a real program. This exact pattern — loop over `.items()`, print with an f-string — is how your **Contact Manager** will display everyone's details.

---

## 🗳️ Part 4: Building a Dictionary in a Loop — The TALLY

Here's the big one. Sometimes you don't *have* a dictionary yet — you want to **build** one by counting things. This is called a **tally** or **counter**.

The class voted for their favourite lunch. Here are the raw votes as a list:

```python
votes = ["jollof", "banku", "jollof", "waakye", "jollof", "banku"]
```

We want to turn that into: `jollof → 3, banku → 2, waakye → 1`.

The recipe:
1. Start with an **empty dictionary**: `tally = {}`
2. Loop over every vote
3. If we've **seen it before**, add 1 to its count
4. If it's **new**, start its count at 1

```python
votes = ["jollof", "banku", "jollof", "waakye", "jollof", "banku"]
tally = {}

for vote in votes:
    if vote in tally:
        tally[vote] = tally[vote] + 1
    else:
        tally[vote] = 1

print(tally)
```

**Output:**
```
{'jollof': 3, 'banku': 2, 'waakye': 1}
```

### Let's trace it slowly 🐢

| Vote seen | Is it in `tally`? | What happens | `tally` becomes |
|---|---|---|---|
| `jollof` | No | start at 1 | `{'jollof': 1}` |
| `banku` | No | start at 1 | `{'jollof': 1, 'banku': 1}` |
| `jollof` | Yes | add 1 | `{'jollof': 2, 'banku': 1}` |
| `waakye` | No | start at 1 | `{'jollof': 2, 'banku': 1, 'waakye': 1}` |
| `jollof` | Yes | add 1 | `{'jollof': 3, 'banku': 1, 'waakye': 1}` |
| `banku` | Yes | add 1 | `{'jollof': 3, 'banku': 2, 'waakye': 1}` |

Remember `in` from last week? On a dictionary, `vote in tally` checks the **keys** — "have I already got a slot for this?"

### Now print it beautifully

```python
print("--- Lunch Vote Results ---")
for food, count in tally.items():
    print(f"{food}: {count} votes")
```

**Output:**
```
--- Lunch Vote Results ---
jollof: 3 votes
banku: 2 votes
waakye: 1 votes
```

> 💡 **Pro shortcut (optional):** because you know `.get()`, you can replace the whole `if/else` with one line:
> ```python
> tally[vote] = tally.get(vote, 0) + 1
> ```
> It means: *"get the current count, or 0 if there isn't one, then add 1."* Same result — fewer lines!

---

## 📖 Part 5: A Lookup / Translator Dictionary

A dictionary is perfect for **looking things up** — like a translator. The key is the word you know; the value is the answer you want.

```python
twi = {"welcome": "akwaaba", "thank you": "medaase", "friend": "adamfo"}

word = "friend"
print(f"'{word}' in Twi is '{twi[word]}'")
```

**Output:**
```
'friend' in Twi is 'adamfo'
```

You can loop the whole dictionary to print a mini phrasebook:

```python
twi = {"welcome": "akwaaba", "thank you": "medaase", "friend": "adamfo"}

print("📖 English → Twi Phrasebook")
for english, translation in twi.items():
    print(f"{english}  →  {translation}")
```

**Output:**
```
📖 English → Twi Phrasebook
welcome  →  akwaaba
thank you  →  medaase
friend  →  adamfo
```

The same idea powers an **emoji lookup**:

```python
emoji = {"happy": "😀", "sad": "😢", "star": "⭐"}
mood = "happy"
print(f"You feel {mood} {emoji[mood]}")
```

**Output:**
```
You feel happy 😀
```

---

## ⚠️ Common Mistakes (And How to Beat Them!)

**Mistake 1: Expecting the values but getting the keys**

❌ Surprising:
```python
scores = {"Ama": 95, "Kofi": 88}
for x in scores:
    print(x)
```
```
Ama
Kofi
```

😲 "But I wanted the scores!" Looping a dict gives you **keys**. To get values, use `.values()`; to get both, use `.items()`.

✅ Correct:
```python
scores = {"Ama": 95, "Kofi": 88}
for name, score in scores.items():
    print(name, score)
```
```
Ama 95
Kofi 88
```

---

**Mistake 2: Forgetting `.items()` needs TWO variables**

❌ Wrong — trying to unpack two things from a plain loop:
```python
scores = {"Ama": 95, "Kofi": 88}
for name, score in scores:
    print(name, score)
```
```
ValueError: too many values to unpack (expected 2)
```

🤔 **Why?** A plain loop gives one key at a time (`"Ama"`), and Python can't split one word into two variables. Add `.items()` so each loop really *does* hand over two things:

✅ Correct:
```python
for name, score in scores.items():
    print(name, score)
```

---

**Mistake 3: Tallying without the `if` check → KeyError**

❌ Wrong:
```python
votes = ["jollof", "banku"]
tally = {}
for vote in votes:
    tally[vote] = tally[vote] + 1
```
```
KeyError: 'jollof'
```

💥 **Why?** On the very first vote, `tally["jollof"]` doesn't exist yet — so `tally["jollof"] + 1` explodes. You can't add 1 to a slot that isn't there!

✅ Correct — check first, then count:
```python
for vote in votes:
    if vote in tally:
        tally[vote] = tally[vote] + 1
    else:
        tally[vote] = 1
```

---

## 🎮 Class Activity: The Vote Counter & The Translator 🗳️

Two builds today. Type each in Trinket, run it, thumbs up in Zoom when it works!

### Part A — The Vote Counter (⭐⭐)

```python
votes = ["jollof", "banku", "jollof", "waakye", "jollof", "banku"]
tally = {}

for vote in votes:
    if vote in tally:
        tally[vote] = tally[vote] + 1
    else:
        tally[vote] = 1

print("--- Results ---")
for food, count in tally.items():
    print(f"{food}: {count} votes")
```

### Part B — The Translator (⭐⭐)

```python
twi = {"welcome": "akwaaba", "thank you": "medaase", "friend": "adamfo"}

word = "thank you"
print(f"{word} in Twi is {twi[word]}")
```

### 💬 Zoom Chat Question

**What does `.items()` give you on each loop?** (Hint: it's TWO things at once!)

### Bonus (⭐⭐⭐)

Count the **letters** in your name instead of foods — loop over each letter and tally how many times each appears!

---

## 📇 How This Powers the Contact Manager

Remember, this whole term builds towards a **Contact Manager**. Looping over dictionaries is exactly how it displays and searches contacts:

```python
contacts = {"Ama": "0244 123 456", "Kofi": "0201 987 654"}

print("📇 My Contacts")
for name, number in contacts.items():
    print(f"{name}  📞  {number}")
```

**Output:**
```
📇 My Contacts
Ama  📞  0244 123 456
Kofi  📞  0201 987 654
```

Every time your Contact Manager shows "all contacts" or searches for a name, it's looping over `.items()` — just like today. 🚀

---

## 🌟 What's Coming Next Week?

Right now each contact stores **one** piece of info — a phone number. But real contacts have a name, a number, an email, a birthday... How do we store ALL of that for each person?

Next week, **Week 6: Lists of Dictionaries — Records!** 📇 You'll level up from a simple dictionary to a **list of dictionaries**, where each contact is its own little record with lots of fields. It's the exact structure real apps use to store people, products, and players. This is where your data starts to look properly professional!

---

## 🏆 Today's Achievements

- ✅ You know that looping a dictionary gives you the **keys**
- ✅ You mastered `.keys()`, `.values()`, and the mighty `.items()`
- ✅ You unpacked pairs with `for key, value in d.items():`
- ✅ You printed a dictionary **beautifully** with a loop and f-strings
- ✅ You built a **tally counter** to count votes and words
- ✅ You made a **translator lookup** dictionary

> *"You didn't just read a dictionary today — you MARCHED through one, counted with one, and translated with one. Tally counting is a genuine programmer's superpower; you'll use it for the rest of your coding life. Superb work."*
> — BrightByte 🤖🔁

---

## 📚 Homework: The Tally Machine

Build a **Word Counter** (or any Tally Machine) in Trinket that counts how many times each thing appears and prints the totals.

**Requirements:**
1. Start with a **list** of things (words, votes, colours — your choice)
2. Use an **empty dictionary** `counts = {}` to store the tally
3. **Loop** over the list; use `if key in counts:` to add 1 or start at 1
4. **Loop over `.items()`** to print every thing and its count with an f-string

**Example run (a word counter):**
```
--- Word Counts ---
the: 3
cat: 1
sat: 1
mat: 1
```

**Challenge tiers:**
- ⭐ Tally a fixed list you write yourself
- ⭐⭐ Ask the user for a sentence with `input()`, then `.split()` it into words and count them
- ⭐⭐⭐ After the counts, find and print the thing with the **highest** count ("Most common word: the")

**Submit:** Save your Trinket (`Y2-T4-W5-LoopingDicts`), click **Share**, copy the link, and paste it wherever your teacher asks.

---

*You can loop a whole dictionary now — next week, each contact becomes a record. See you there! 🔁🗂️*
