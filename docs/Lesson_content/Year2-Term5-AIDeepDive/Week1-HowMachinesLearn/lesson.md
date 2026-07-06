---
title: "How Machines Really Learn 🧠🤖"
description: "Discover the two ways to make a computer smart — human-written RULES versus LEARNING FROM EXAMPLES — and build your own rule-based classifier in Python"
difficulty: "intermediate"
order_index: 1
course_slug: "year2-term-5-ai-deep-dive"
is_premium: false
requires_trinket: true
starter_code: |
  # 🧠 How Machines Really Learn — Rule-Based Classifier
  # A human (YOU) writes the rules. The computer just follows them.

  def is_ripe(colour):
      # TODO: finish the rules for a plantain!
      # A green plantain is unripe. A yellow one is ripe. A black one is very ripe.
      if colour == "green":
          return "unripe"
      # TODO: add a rule for "yellow"
      # TODO: add a rule for "black"
      # TODO: what should happen for a colour you didn't plan for?
      return "not sure"

  # Try it out
  print(is_ripe("green"))
  print(is_ripe("yellow"))
solution_code: |
  # 🧠 How Machines Really Learn — Rule-Based Classifier (one solution)
  # A human wrote every rule below. The computer never "learned" anything —
  # it just follows the instructions in order.

  def is_ripe(colour):
      if colour == "green":
          return "unripe 🍌 (wait a few days)"
      elif colour == "yellow":
          return "ripe ✅ (perfect for frying!)"
      elif colour == "black":
          return "very ripe 🖤 (great for sweet plantain)"
      else:
          return "not sure 🤔 (I have no rule for that)"

  # Predictions on brand-new plantains
  print(is_ripe("green"))
  print(is_ripe("yellow"))
  print(is_ripe("black"))
  print(is_ripe("purple"))   # an edge case our rules never planned for!
class_activities: |
  ## 🎮 Class Activity: Human vs Machine Learning 🧠

  In this activity, YOU become the learning machine — then you build one in code.

  ### Part A — Be the Machine (⭐)
  Your teacher shows you a set of **labelled examples** (photos or descriptions), for example:
  - Yellow with a few brown spots → **RIPE**
  - Bright green, firm → **UNRIPE**
  - Mostly black, soft → **VERY RIPE**

  Study them. Then your teacher shows a **brand-new plantain you've never seen** and asks: *"Ripe or not?"* You guess. That guess is a **prediction** — you learned the pattern from examples, nobody gave you a rule!

  ### Part B — Write the Rules (⭐⭐)
  Open Trinket and finish the `is_ripe(colour)` function in the starter code. Add rules for `"yellow"` and `"black"`, and a sensible answer for colours you didn't plan for. Run it and give a **thumbs up** in Zoom when your four test lines print correctly.

  ### Part C — Break It (⭐⭐⭐)
  Find an example your rules get WRONG or can't handle (a half-yellow-half-green plantain? a colour like `"Green"` with a capital G?). Paste the tricky example in the **Zoom chat**.

  ### 💬 Zoom-Chat Discussion
  > **When you guessed the new plantain in Part A, did anyone GIVE you a rule — or did your brain spot a pattern from the examples?**
  > That difference — rules you're told vs patterns you learn — is the whole secret of how modern AI works. Share your thoughts in the chat!
take_home_assignment: |
  ## 📚 Homework: Rules or Learning? 🕵️

  This term ends with an **AI Investigation Report**, so start being a detective NOW! Pick ONE of these two options and do it in Trinket.

  **Option 1 — Spot the AI**
  Think of one AI you actually use (YouTube suggestions, a voice assistant, autocorrect, a game opponent, a photo filter). In Trinket:
  1. Write **comments** (`#`) explaining what the AI does
  2. Say whether you think it works more by **RULES** or by **LEARNING FROM EXAMPLES**, and why
  3. Write a small **rule-based function** that copies a tiny piece of what it does (e.g. `def autocorrect(word):` that fixes one or two words with `if`)

  **Option 2 — Build a Rule-Based Recommender**
  Write a function `def recommend(liked):` that suggests something new using `if`/`elif`/`else` — "if you liked X, try Y":
  ```
  recommend("jollof rice")  →  "Try fried plantain with it! 🍛"
  recommend("football")     →  "You might enjoy basketball! 🏀"
  ```
  Add at least **four** rules and a friendly `else` for anything you didn't plan for.

  **Challenge tiers:**
  - ⭐ The function works for the examples you planned
  - ⭐⭐ Comments explain clearly whether it's rules or learning
  - ⭐⭐⭐ Add a comment describing ONE case your rules get wrong — and why a *learning* system might do better

  **Submit:** Save your Trinket (`Y2-T5-W1-HowMachinesLearn`), click **Share**, copy the link, and paste it where your teacher asks.
ai_activities: |
  ## 🤖 Big Discussion: Does the Machine Actually "Know" Anything?

  You've now seen the two ways to make a computer smart:
  - **RULES** — a human writes every `if`/`else` by hand
  - **LEARNING** — the machine finds patterns in thousands of examples

  Here's the honest truth BrightByte wants you to carry all term: **AI does not think or understand like a human.** When a photo app "recognises" a cat, it hasn't decided *"that is a cat"* the way you would. It has found a pattern of pixels that usually matched the label "cat" in its training examples — and it makes its best guess.

  **Discuss in the Zoom chat:**
  1. 🐱 If an AI has only ever seen photos of yellow and black plantains, what might it guess about a GREEN one? Whose fault is that — the machine's, or the examples it was shown?
  2. 🤔 Someone says *"the AI is always right, it's a computer."* Is that true? Give one example where an AI could confidently give a WRONG answer.

  Keep a note of anything surprising — this is the start of your **AI Investigation Report** for the end of term!
---

# Year 2, Lesson 1: How Machines Really Learn 🧠🤖

**Course:** AI Concepts Deep Dive
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

- The **two ways** to make a computer "smart": human-written **RULES** vs **LEARNING FROM EXAMPLES**
- The big idea behind all modern AI: first **train** (learn from examples), then **predict** (guess about new things)
- How to build a **rule-based classifier** in Python with `if`/`elif`/`else`
- Where simple rules **struggle** — and why that pushed people to invent learning-from-data
- The honest truth: AI **doesn't think like a person** — it finds patterns

---

## 🤖 A New Kind of Term with BrightByte

> *"Welcome to my FAVOURITE term! For four terms you've been telling computers exactly what to do, line by line. This term we ask a bigger question: how does a computer get 'smart' in the first place? You use AI every day — it picks your videos, finishes your sentences, spots your friends in photos. By the end of these eight weeks, you'll know what's really going on inside. No magic. No robots that 'think'. Just patterns. Let's pull back the curtain!"*
> — BrightByte 🤖🧠

---

## 🧭 Part 1: Two Ways to Make a Computer Smart

Imagine your job is to teach a computer to tell whether a plantain is **ripe** (ready to eat) or **unripe**. There are two completely different ways to do it.

### Way 1 — Write the RULES yourself

You, a human, sit down and write out instructions:

> *"IF the plantain is green → unripe. IF it is yellow → ripe. IF it is black → very ripe."*

The computer just **follows your rules**. It never figures anything out on its own — you did all the thinking. This is exactly the kind of programming you've done for four terms with `if`/`else`.

### Way 2 — LEARN from examples

Instead of writing rules, you show the computer **hundreds of photos**, each one **labelled** "ripe" or "unripe". The computer studies them and finds the **pattern** by itself — maybe "more yellow and brown = more ripe". Nobody told it that rule; it discovered it from the examples.

This second way is what people usually mean by **machine learning** — the "learning" part of AI.

| | RULES (you write them) | LEARNING (from examples) |
|---|---|---|
| Who finds the pattern? | A human | The machine |
| What you give it | `if`/`else` instructions | Lots of labelled examples |
| Good when | The rules are clear and simple | The pattern is messy or huge |
| Struggles when | There are too many edge cases | You have very few examples |
| Example | "IF green THEN unripe" | Learning faces from 10,000 photos |

> 💡 **Both are "AI".** Way 1 is older and simpler. Way 2 powers most of the AI you hear about today. Neither one "thinks" — one follows human rules, the other follows patterns it found in data.

### 💬 Class Discussion

> **Think of a plantain seller at the market. Do they follow a fixed rule to pick ripe plantain — or have they LEARNED from years of examples?**
> Type your answer in the **Zoom chat**!

---

## 🍌 Part 2: The Big Idea — Train First, Then Predict

Here's the pattern behind almost every learning-based AI. It happens in **two stages**.

Think about how **you** learned to spot a ripe plantain. Nobody handed you a rulebook. Your family showed you plantain after plantain: *"this one's ready, this one's not."* After enough examples, your brain just **knew**. Then one day at the market you saw a plantain you'd **never seen before** — and you could still guess. That's the whole idea!

| Stage | What happens | Plantain example |
|---|---|---|
| 1. **Training** | The AI studies many **labelled examples** | Shown 500 plantain photos, each marked ripe/unripe |
| 2. **Prediction** | The AI **guesses** about something **new** | Shown a brand-new plantain → guesses "ripe" |

The key word is **new**. Training is about the past examples; prediction is about something the AI has never seen. A well-trained AI makes **good guesses on new things** — but they are still **guesses**, not certainties.

> *"Training is like studying for a test with practice questions. Prediction is sitting the real exam with questions you've never seen. Study good examples, and you'll make good guesses. Study bad or unfair examples... and you're in trouble. Hold that thought — it's what Weeks 2 and 5 are all about!"*
> — BrightByte 🤖

---

## 🖥️ Part 3: Trinket Warm-Up — A Rule-Based "AI"

Today we build the **simpler** kind: a rule-based classifier. A **classifier** is just a program that sorts things into groups (ripe / unripe / very ripe). Every rule is written by a human — YOU.

Open **Trinket** (trinket.io) and log in. Name today's Trinket `Y2-T5-W1-HowMachinesLearn`.

Here's the starter code:

```python
def is_ripe(colour):
    if colour == "green":
        return "unripe"
    # TODO: add a rule for "yellow"
    # TODO: add a rule for "black"
    return "not sure"

print(is_ripe("green"))
print(is_ripe("yellow"))
```

Right now, only the `"green"` rule exists. Run it and watch what happens:

```
unripe
not sure
```

The `"yellow"` plantain fell through to `not sure`, because **we never wrote a rule for it**. That's the whole personality of rule-based AI: **it only knows what a human told it.**

### Let's finish the rules

```python
def is_ripe(colour):
    if colour == "green":
        return "unripe 🍌 (wait a few days)"
    elif colour == "yellow":
        return "ripe ✅ (perfect for frying!)"
    elif colour == "black":
        return "very ripe 🖤 (great for sweet plantain)"
    else:
        return "not sure 🤔 (I have no rule for that)"

print(is_ripe("green"))
print(is_ripe("yellow"))
print(is_ripe("black"))
print(is_ripe("purple"))
```

**Output:**
```
unripe 🍌 (wait a few days)
ripe ✅ (perfect for frying!)
very ripe 🖤 (great for sweet plantain)
not sure 🤔 (I have no rule for that)
```

Trace it line by line:
- `"green"` matches the first `if` → returns the unripe message
- `"yellow"` skips `if`, matches the first `elif` → ripe message
- `"black"` skips down to the second `elif` → very ripe message
- `"purple"` matches **nothing**, so the `else` catches it → "not sure"

Notice the `else` at the bottom. It's the **safety net** for anything we didn't plan for. Give a **thumbs up** in Zoom when your output matches! 👍

---

## 🧱 Part 4: Where Rules Start to Struggle

Our little classifier works... until the real world gets messy. This is the exact moment in history when people said *"writing rules by hand isn't enough — let's make the machine learn instead."*

Try adding these lines and think about what breaks:

```python
print(is_ripe("Yellow"))       # capital Y
print(is_ripe("yellowish-green"))
print(is_ripe("mostly yellow with brown spots"))
```

**Output:**
```
not sure 🤔 (I have no rule for that)
not sure 🤔 (I have no rule for that)
not sure 🤔 (I have no rule for that)
```

Every single one falls to `not sure`! But a human would happily judge all three. Here's why rules struggle:

| Problem | Why rules break |
|---|---|
| **Edge cases** | `"Yellow"` ≠ `"yellow"` — one capital letter and the rule misses |
| **In-between colours** | Real plantains are rarely one neat colour |
| **Too many possibilities** | You'd need thousands of `if` lines to cover reality |
| **New situations** | A colour you never imagined → no rule exists |

To handle all of that with rules, you'd write `if` statements forever and STILL miss cases. That's why, for messy real-world problems (faces, speech, handwriting, ripe plantain in a real photo), we let the machine **learn the pattern from examples** instead. Rules are perfect for simple, tidy problems — and hopeless for messy ones.

> *"You just discovered, in ten minutes, the whole reason machine learning was invented! Some patterns are just too messy to write down by hand. When rules run out, we learn from data. That's next week's story."*
> — BrightByte 🤖

---

## ⚠️ Common Misconceptions to Correct

This term is about understanding AI **honestly**. Let's fix two myths that trip almost everyone up.

**Misconception 1: "AI thinks like a person."**

❌ **Myth:** When an AI recognises a plantain, it "understands" plantains the way you do — it has thoughts and feelings about them.

✅ **Truth:** AI does **not** think, understand, or feel. Our classifier has no idea what a plantain *is*. It just matched a word to a rule. Learning-based AI is smarter but works the same honest way: it **finds patterns** and makes **guesses**. There's no little person inside.

---

**Misconception 2: "AI is always right — it's a computer."**

❌ **Myth:** Computers don't make mistakes, so if the AI says it, it must be true.

✅ **Truth:** A prediction is a **best guess**, not a fact. Show our classifier `"purple"` and it shrugs. Show a learning-based AI something unlike its training examples and it can be **confidently wrong**. AI can and does make mistakes — a good AI detective always double-checks.

---

**Misconception 3: "More rules always means smarter."**

❌ **Myth:** If I just keep adding `if` statements, I can handle anything.

✅ **Truth:** Past a point, rules become impossible to manage and STILL miss messy cases. That's not a "you" problem — it's why learning-from-data exists. Knowing *when to stop writing rules* is real AI wisdom.

---

## 🎮 Class Activity: Human vs Machine Learning 🧠

Time to become the machine yourself, then build one!

### Part A — Be the Machine (⭐)
Your teacher shows you several **labelled examples** (photos or descriptions): yellow-with-spots → **RIPE**, bright green → **UNRIPE**, mostly black → **VERY RIPE**. Study them. Then a **brand-new plantain** appears and you must guess. Nobody gave you a rule — your brain spotted the **pattern**. That's a **prediction**!

### Part B — Write the Rules (⭐⭐)
In Trinket, finish `is_ripe(colour)`: add rules for `"yellow"` and `"black"` plus a sensible `else`. Run your four test lines and **thumbs up** when the output is correct.

### Part C — Break It (⭐⭐⭐)
Find an input your rules get **wrong** or can't handle (a capital `"Green"`? an in-between colour?). Paste it in the **Zoom chat** — let's collect the trickiest ones as a class.

### 💬 Zoom-Chat Discussion
> **In Part A, did anyone GIVE you a rule — or did you learn the pattern from examples?** That difference is the heart of modern AI. Share below!

---

## 🌟 What's Coming Next Week?

Today you saw that learning-based AI needs **examples** to learn from. But not just any examples — they have to be **labelled** ("this is ripe", "this is unripe"), and the machine has to know **what to look at** (colour? size? number of spots?).

**Week 2: Training Data, Features & Labels.** You'll discover what "good data" actually means, why the **features** you pick (colour, size, weight) change what the AI learns, and why *"garbage in, garbage out"* is the golden rule of AI. Start collecting good examples in your head today!

---

## 🏆 Today's Achievements

- ✅ You can explain the **two ways** to make a computer smart: rules vs learning
- ✅ You understand **train first, then predict** — and that predictions are guesses
- ✅ You built and traced a **rule-based classifier** in Python
- ✅ You discovered **where rules struggle** — and why learning-from-data exists
- ✅ You can bust two big myths: AI doesn't "think", and AI isn't always right

> *"Look how far you've come. Four terms ago you were printing 'Hello'. Today you built a classifier AND you understand what's really happening inside the AI you use every day. That's not just coding — that's understanding. Keep noticing the AI around you; you're an investigator now."*
> — BrightByte 🤖🧠

---

## 📚 Homework: Rules or Learning? 🕵️

Our term ends with an **AI Investigation Report** — so start investigating now! Pick **one** option in Trinket (`Y2-T5-W1-HowMachinesLearn`):

**Option 1 — Spot the AI:** Choose one AI you use (YouTube suggestions, voice assistant, autocorrect, a game bot). In **comments**, explain what it does and whether it's more **rules** or **learning**, and why. Then write a small **rule-based function** that copies a tiny piece of it.

**Option 2 — Rule-Based Recommender:** Write `def recommend(liked):` using `if`/`elif`/`else` — "if you liked X, try Y". Add at least **four** rules and a friendly `else`.

**Challenge tiers:**
- ⭐ Your function works for the examples you planned
- ⭐⭐ Comments clearly explain rules vs learning
- ⭐⭐⭐ Add a comment describing ONE case your rules get wrong — and why *learning* might do better

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it where your teacher asks.

---

*You've pulled back the first curtain, investigator. AI isn't magic — it's rules and patterns. See you next week! 🧠🤖*
