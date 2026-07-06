---
title: "Build a Rule-Based 'AI' 🤖⚙️"
description: "Write a real spam-detector classifier in Python using keyword rules and if/elif — then discover exactly where hand-written rules break, and why machines need to learn instead"
difficulty: "intermediate"
order_index: 3
course_slug: "year2-term-5-ai-deep-dive"
is_premium: false
requires_trinket: true
starter_code: |
  # 🤖 Y2-T5-W3-RuleBasedAI — Rule-Based Spam Detector
  # Made by: [YOUR NAME]
  # We build a classifier: it reads a message and returns a LABEL.

  # --- Part 1: The rules (our list of spammy keywords) ---
  spam_words = ["free", "win", "prize", "click", "cash", "urgent", "offer", "congratulations"]

  # --- Part 2: The classify() function ---
  # It should:
  #   1. lower-case the message (so FREE and free both match)
  #   2. count how many spam_words appear
  #   3. return "SPAM" if 2 or more match, otherwise "NOT SPAM"
  def classify(message):
      text = message.lower()
      score = 0
      # for each word in spam_words: if it is in text, add 1 to score
      # ...your code here...
      # return the right label
      pass

  # --- Part 3: Test it on some messages ---
  test_messages = [
      "Congratulations! Click here to WIN a FREE prize!",
      "Hey Ama, are you coming to football practice after school?",
  ]
  for m in test_messages:
      print(classify(m), "->", m)

  # Build it one part at a time with BrightByte! 🏗️
solution_code: |
  # 🤖 Y2-T5-W3-RuleBasedAI — Rule-Based Spam Detector
  # Made by: [YOUR NAME]
  # A classifier reads a message and returns a LABEL: "SPAM" or "NOT SPAM".

  # --- Part 1: The rules (our list of spammy keywords) ---
  spam_words = ["free", "win", "prize", "click", "cash", "urgent", "offer", "congratulations"]

  # --- Part 2: The classify() function ---
  def classify(message):
      text = message.lower()          # so FREE, Free and free all match
      score = 0
      for word in spam_words:
          if word in text:            # does this spam word appear?
              score = score + 1
      if score >= 2:                  # 2 or more spammy words = suspicious
          return "SPAM"
      else:
          return "NOT SPAM"

  # --- Part 3: Test it on a batch of messages ---
  test_messages = [
      "Congratulations! Click here to WIN a FREE prize!",
      "Hey Ama, are you coming to football practice after school?",
      "URGENT: claim your free cash offer now!",
      "Can you send me the maths homework please?",
      "FREE tickets! Click to win!",
  ]

  for m in test_messages:
      print(classify(m), "->", m)

  # Example output:
  # SPAM     -> Congratulations! Click here to WIN a FREE prize!
  # NOT SPAM -> Hey Ama, are you coming to football practice after school?
  # SPAM     -> URGENT: claim your free cash offer now!
  # NOT SPAM -> Can you send me the maths homework please?
  # SPAM     -> FREE tickets! Click to win!
class_activities: |
  ## 🕵️ Class Activity: Build a Spam Detector — Then Break It!

  We build a real classifier live on Zoom in **four stages**. After each stage, **run your code** and give a **thumbs up** 👍 when it works. We move together — do not race ahead!

  > 📁 **First:** open Trinket, create a new Python trinket, and name it **`Y2-T5-W3-RuleBasedAI`**.

  ### Stage 1 — The Rules (⭐)
  Type the keyword list. These are our hand-written rules.
  ```python
  spam_words = ["free", "win", "prize", "click", "cash", "urgent", "offer", "congratulations"]
  ```
  ✅ **Checkpoint:** How many rules are in the list? Type it in the Zoom chat.

  ### Stage 2 — The classify() Function (⭐⭐)
  ```python
  def classify(message):
      text = message.lower()
      score = 0
      for word in spam_words:
          if word in text:
              score = score + 1
      if score >= 2:
          return "SPAM"
      else:
          return "NOT SPAM"
  ```
  ✅ **Checkpoint:** Why do we write `message.lower()`? (So `FREE` and `free` both match!)

  ### Stage 3 — Test It (⭐⭐)
  ```python
  test_messages = [
      "Congratulations! Click here to WIN a FREE prize!",
      "Hey Ama, are you coming to football practice after school?",
      "URGENT: claim your free cash offer now!",
  ]
  for m in test_messages:
      print(classify(m), "->", m)
  ```
  ✅ **Checkpoint:** Did the spammy ones get labelled `SPAM` and the friendly one `NOT SPAM`? Thumbs up! 👍

  ### Stage 4 — FOOL THE ROBOT! (⭐⭐⭐)
  Now the fun part. Your job: write ONE message that **tricks** the classifier — either a friendly message it wrongly calls `SPAM`, or a real spam message it wrongly calls `NOT SPAM`.

  Try adding these to your `test_messages` list and predict the label BEFORE you run:
  ```python
  "You have been selected! Claim your reward voucher today",
  "Come win a prize at the school science fair!",
  ```
  ✅ **Final checkpoint:** Paste the message that fooled your classifier in the **Zoom chat**. Whose message broke the rules the hardest? 🏆
take_home_assignment: |
  ## 📚 Homework: Grow Your Classifier (or Build a New One!)

  Open your **`Y2-T5-W3-RuleBasedAI`** Trinket and make your classifier smarter — OR build a brand-new rule-based classifier of your own.

  **Pick ONE path:**

  **Path A — Upgrade the spam detector**
  1. Add at least **4 new keywords** to `spam_words` (think about real spam: `winner`, `guaranteed`, `subscribe`, `password`...)
  2. Test it on at least **5 messages** of your own
  3. Find and write down **one message that still fools it**

  **Path B — Build a different classifier**
  Write a NEW `classify(message)` function that does one of these:
  - **Sentiment detector** → returns `"POSITIVE"` or `"NEGATIVE"` using happy words (`love`, `great`, `happy`) vs sad words (`hate`, `awful`, `sad`)
  - **Question detector** → returns `"QUESTION"` or `"STATEMENT"` (hint: check for `?`, or words like `what`, `why`, `how`, `is`, `are`)
  - **Mood detector** → returns `"EXCITED"`, `"CALM"`, or `"UNSURE"`

  **Every path must:**
  - Use a `classify(message)` function that **returns** a label
  - Test on **5+ example messages** in a loop
  - Include at least one message that **breaks** your rules (write a comment saying why)

  **Challenge tiers:**
  - ⭐ Upgrade the spam list and test 5 messages
  - ⭐⭐ Build a whole new classifier from scratch
  - ⭐⭐⭐ Give your classifier **three** possible labels, not just two

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: Is This REALLY "AI"?

  You just built a program that reads a message and makes a decision. That IS a kind of artificial intelligence — computer scientists call it a **rule-based system**, and rule-based systems ran the world's smartest software for decades.

  But here is the honest truth: **your classifier never learned anything.** YOU wrote every rule by hand. It only knows the words you typed into `spam_words`. Spammers invent new words every single day — and your program has no way to keep up on its own.

  Compare that with Week 1, where we saw AI that **learns patterns from data** instead of following hand-written rules.

  **Discuss in the Zoom chat:**
  - ✅ What are rule-based systems **good** at? (Fast, predictable, easy to explain, never "changes its mind")
  - ❌ What are they **bad** at? (New words, sarcasm, tricky cases nobody wrote a rule for)
  - 🤔 If YOU can't write a rule for every spam message ever, how could a computer possibly learn the rules by itself?

  That last question is the whole reason **machine learning** exists — and it is where this term is heading. 🚀
---

# Year 2, Lesson 3: Build a Rule-Based "AI" 🤖⚙️

**Course:** AI Concepts Deep Dive
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

- What a **classifier** is: a program that reads something and gives it a **label**
- How to build a real, working **rule-based spam detector** in Python
- How to write a `classify(message)` function that **returns** a label
- How to test your classifier on lots of messages using a **loop**
- The big idea: rule-based systems ARE a kind of AI — but they do **not learn**
- Where hand-written rules **break** — and why that's the doorway to machine learning

---

## 🤖 BrightByte Sets the Challenge

> *"Two weeks ago we split the world in two: programs that follow RULES, and programs that LEARN from data. Today, you build the first kind with your own hands — a real spam detector, the same idea that guards billions of inboxes. It'll work brilliantly... and then I'm going to help you BREAK it. Because finding where rules fall apart is the exact moment you'll understand why the world invented machine learning. Let's build!"*
> — BrightByte 🤖⚙️

---

## 🏷️ Part 1: What Is a Classifier?

A **classifier** is one of the most useful ideas in all of AI. It sounds fancy, but it's simple:

> A classifier reads some **input** and gives it a **label**.

You meet classifiers every day:

| The Input | The Labels It Chooses From |
|---|---|
| An email | 📥 Inbox or 🚫 Spam |
| A film review | 😊 Positive or 😠 Negative |
| A photo | 🐱 Cat or 🐶 Dog |
| A message | ❓ Question or 💬 Statement |

Today we build a **spam detector**: the input is a text message, and the two labels are `"SPAM"` and `"NOT SPAM"`.

Remember from Week 2: to make a decision, a program looks at **features** — the useful clues inside the input. Our feature is beautifully simple: **which spammy words does the message contain?** Spam messages love words like *free*, *win*, *prize* and *click*. Friendly messages usually don't.

### 💬 Class Discussion

> **Look in your own inbox or messages (in your head!). What words do spam messages use again and again?**
> Type your best "spammy word" in the **Zoom chat** — we'll collect a list!

---

## 📜 Part 2: The Rules

Our classifier has NO magic. It follows rules WE write. The rules are just a list of suspicious keywords:

```python
spam_words = ["free", "win", "prize", "click", "cash", "urgent", "offer", "congratulations"]
```

That's it — that's the entire "brain". It's a plain Python list, exactly like the lists you've used since Year 1. Every word in here is a rule that says *"if you see me, be suspicious."*

> 📁 **BEFORE WE START CODING:** open Trinket, create a **new** Python trinket, and name it **`Y2-T5-W3-RuleBasedAI`**. Save often!

✅ **Zoom checkpoint:** How many keyword rules are in our list? Count them and type the number in the chat. (It's 8!)

---

## ⚙️ Part 3: The `classify()` Function

Now the heart of the program. We write a **function** called `classify` that takes a message and gives back a label. Because we'll want to test it on many messages, a function is perfect — write it once, use it as often as we like.

```python
def classify(message):
    text = message.lower()
    score = 0
    for word in spam_words:
        if word in text:
            score = score + 1
    if score >= 2:
        return "SPAM"
    else:
        return "NOT SPAM"
```

### 🔎 Reading It Line by Line

- `def classify(message):` — define a function that receives one message
- `text = message.lower()` — make a **lower-case** copy. This is crucial: `"FREE"`, `"Free"` and `"free"` are three different strings to Python, but after `.lower()` they're all `"free"`. Now our rules catch every version.
- `score = 0` — a counter for how many spammy words we spot
- `for word in spam_words:` — go through each rule, one at a time
- `if word in text:` — is this spammy word somewhere in the message?
- `score = score + 1` — if so, add one to the score
- `if score >= 2:` — our **threshold**: two or more spammy words is suspicious enough
- `return "SPAM"` / `return "NOT SPAM"` — hand back the label

> ⚠️ Notice the function **returns** the label — it does not `print` it. Returning means the answer comes back to us so we can use it, store it, or print it ourselves. This matters a lot — we'll see why in Common Mistakes.

> 💡 **Why a threshold of 2?** One spammy word can happen by accident (a friend might say "that film was free!"). Needing **two** makes the classifier less jumpy. Later you can experiment with changing `2` to `1` or `3` and watch the behaviour change.

✅ **Zoom checkpoint:** Why do we write `message.lower()`? Type your answer in the chat. (So capital letters like `FREE` still match our lower-case rules!)

---

## 🧪 Part 4: Test It on Real Messages

A classifier is only useful if we test it. Let's feed it a batch of messages using a **loop** — exactly the kind of thing loops are made for:

```python
test_messages = [
    "Congratulations! Click here to WIN a FREE prize!",
    "Hey Ama, are you coming to football practice after school?",
    "URGENT: claim your free cash offer now!",
    "Can you send me the maths homework please?",
    "FREE tickets! Click to win!",
]

for m in test_messages:
    print(classify(m), "->", m)
```

**Run it. Output:**
```
SPAM     -> Congratulations! Click here to WIN a FREE prize!
NOT SPAM -> Hey Ama, are you coming to football practice after school?
SPAM     -> URGENT: claim your free cash offer now!
NOT SPAM -> Can you send me the maths homework please?
SPAM     -> FREE tickets! Click to win!
```

🎉 **It works!** Let's trace the first two so you can see the machine thinking:

**Message 1:** `"Congratulations! Click here to WIN a FREE prize!"`
After `.lower()` → `"congratulations! click here to win a free prize!"`
Spammy words found: **congratulations, click, win, free, prize** → score = **5**
`5 >= 2` is True → **SPAM** ✅

**Message 2:** `"Hey Ama, are you coming to football practice after school?"`
After `.lower()` → `"hey ama, are you coming to football practice after school?"`
Spammy words found: **none** → score = **0**
`0 >= 2` is False → **NOT SPAM** ✅

The program isn't guessing. It's counting keyword matches and comparing to a threshold — pure, predictable rules.

✅ **Zoom checkpoint:** Add your OWN message to the `test_messages` list. Predict its label BEFORE you run. Were you right? Thumbs up! 👍

---

## 💥 Part 5: Now Let's BREAK It

Here's the moment that matters most today. Our classifier looks clever — but it only knows the 8 words we gave it, and it can't understand what a sentence actually *means*. Watch what happens with these three messages:

```python
tricky = [
    "Oh wonderful, another free prize I definitely wanted",
    "You have been selected! Claim your reward voucher today",
    "Come win a prize at the school science fair!",
]
for m in tricky:
    print(classify(m), "->", m)
```

**Output:**
```
SPAM     -> Oh wonderful, another free prize I definitely wanted
NOT SPAM -> You have been selected! Claim your reward voucher today
SPAM     -> Come win a prize at the school science fair!
```

Look closely — **every single one is WRONG!**

**1. Sarcasm fools it.** *"Oh wonderful, another free prize I definitely wanted"* is a real person being sarcastic and grumpy — not spam. But it contains **free** and **prize**, so score = 2 → the robot shouts **SPAM**. The classifier has no idea what sarcasm is.

**2. New words sneak past it.** *"You have been selected! Claim your reward voucher today"* is textbook spam — but it uses **selected**, **claim**, **reward** and **voucher**, and NONE of those are in our list. Score = 0 → **NOT SPAM**. Spammers just have to invent new words and our rules are blind.

**3. Innocent messages get caught.** *"Come win a prize at the school science fair!"* is a perfectly friendly invitation from your teacher — but **win** + **prize** = score 2 → **SPAM**. An important message lands in the bin.

### 🤔 So What Just Happened?

Our classifier can only ever be as good as the rules we hand-write. And we simply **cannot** write a rule for every message a human might ever send:

- We can't list every spammy word — spammers invent new ones daily
- We can't teach it sarcasm, jokes, or context with a keyword list
- Every rule we add to catch spam risks catching innocent messages too

This is the wall that rule-based systems always hit. And it's exactly why, in the coming weeks, we explore **machine learning** — where instead of writing every rule by hand, the computer **learns the patterns from thousands of real examples**. It's a completely different approach, and now you can feel *why* it's needed.

> 🧠 **Honesty check:** what you built today IS artificial intelligence — rule-based systems are a real, respected kind of AI. But it does **not learn**. It's frozen the moment you stop typing rules. That's the key difference from the learning systems we met in Week 1.

---

## ⚠️ Common Mistakes

**Mistake 1: Forgetting `.lower()` (case sensitivity)**

❌ Wrong — capital-letter spam slips through:
```python
def classify(message):
    score = 0
    for word in spam_words:
        if word in message:      # no .lower()!
            score = score + 1
```
```
"FREE PRIZE" -> checks "free" in "FREE PRIZE" -> False!
```
The word `"free"` (lower-case) is NOT inside `"FREE PRIZE"` (upper-case), so it's missed.

✅ Correct — lower-case the message first:
```python
text = message.lower()
if word in text:                 # now "free" is found in "free prize"
```

---

**Mistake 2: Checking the whole LIST against the string**

❌ Wrong — trying to check the list all at once:
```python
if spam_words in text:           # spam_words is a LIST, not a word!
    score = score + 1
```
```
TypeError: 'in <string>' requires string as left operand, not list
```
You can't ask "is this whole list inside the text?" — that's not a real question for Python.

✅ Correct — loop through the list and check **one word at a time**:
```python
for word in spam_words:
    if word in text:             # each 'word' is a single string
        score = score + 1
```

---

**Mistake 3: Forgetting to `return` the label**

❌ Wrong — the function prints but never returns:
```python
def classify(message):
    ...
    if score >= 2:
        print("SPAM")            # oops — printed, not returned!
```
```python
label = classify("free prize win")
print(label)     # prints:  None
```
Because nothing was returned, `label` is `None`. You can't store or reuse the answer.

✅ Correct — **return** the label so you can use it:
```python
    if score >= 2:
        return "SPAM"
    else:
        return "NOT SPAM"
```
```python
label = classify("free prize win")
print(label)     # prints:  SPAM
```

> 💡 Rule of thumb: a function that works out an answer should almost always **return** it, not print it. Then the *caller* decides what to do with the answer.

---

## 🎮 Class Activity: Build It, Then Fool It!

We build the whole classifier together, live, then compete to break it. Follow the four stages in the activity panel:

1. **The Rules** — type the `spam_words` list
2. **The Function** — write `classify()` together, line by line
3. **Test It** — run it on the batch of messages and check the labels
4. **FOOL THE ROBOT** — write ONE message that tricks the classifier

For Stage 4, paste your trickiest message in the **Zoom chat**. Can you write a friendly message it calls `SPAM`? Or real spam it calls `NOT SPAM`? The sneakiest message wins bragging rights! 🏆

---

## 🌟 What's Coming Next Week?

You just used **keyword matching** to make decisions — and next week we reuse that exact skill for something that feels almost alive.

**Week 4: How Chatbots & LLMs Work** 🗣️

- You'll build a **keyword chatbot** that "replies" based on words it spots in your message — the same matching idea as today's classifier
- Then we peek inside real **Large Language Models** (like the AI you chat with) to see how they're different — and where the trick is
- Spoiler: your chatbot follows rules too... until you meet something that *predicts* words instead. Sound familiar?

> Keep your `Y2-T5-W3-RuleBasedAI` Trinket safe — the keyword ideas carry straight into next week, and your Week 7 Investigation Report can analyse a classifier just like this one!

---

## 🏆 Today's Achievements

- ✅ You learned what a **classifier** is: input in, **label** out
- ✅ You built a real, working **rule-based spam detector** in Python
- ✅ You wrote a `classify(message)` function that **returns** a label
- ✅ You tested it on a batch of messages with a **loop**
- ✅ You **broke** it on purpose — sarcasm, new words, and innocent messages
- ✅ You understand why rule-based AI can't learn — and why machine learning exists

> *"Feel that? You built genuine AI today — and then you found its edges. That's not failure, that's the single most important discovery in the whole field. Every engineer who ever built a learning system started exactly where you are now: staring at a pile of rules that just... weren't enough. Next week, we make a machine talk back."*
> — BrightByte 🤖⚙️

---

## 📚 Homework: Grow Your Classifier (or Build a New One!)

Open your **`Y2-T5-W3-RuleBasedAI`** Trinket and make your classifier smarter — OR build a brand-new one.

**Pick ONE path:**

**Path A — Upgrade the spam detector**
1. Add at least **4 new keywords** to `spam_words` (`winner`, `guaranteed`, `subscribe`, `password`...)
2. Test it on at least **5 messages** of your own
3. Find and write down **one message that still fools it**

**Path B — Build a different classifier**
Write a NEW `classify(message)` function that does one of these:
- **Sentiment detector** → `"POSITIVE"` or `"NEGATIVE"` (happy words vs sad words)
- **Question detector** → `"QUESTION"` or `"STATEMENT"` (check for `?` or `what`, `why`, `how`)
- **Mood detector** → `"EXCITED"`, `"CALM"`, or `"UNSURE"`

**Every path must:**
- Use a `classify(message)` function that **returns** a label
- Test on **5+ example messages** in a loop
- Include at least one message that **breaks** your rules (comment saying why)

**Challenge tiers:**
- ⭐ Upgrade the spam list and test 5 messages
- ⭐⭐ Build a whole new classifier from scratch
- ⭐⭐⭐ Give your classifier **three** possible labels, not just two

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You built a robot brain out of rules today — and then you out-smarted it. Next week, we teach a machine to talk. See you there! 🤖⚙️*
