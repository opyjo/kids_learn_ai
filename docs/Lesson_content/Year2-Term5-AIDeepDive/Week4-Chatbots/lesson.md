---
title: "How Chatbots & LLMs Work 💬🧠"
description: "Peek inside chatbots and Large Language Models — build your own keyword-matching chatbot in Python, then discover the 'super-powered autocomplete' idea behind ChatGPT and why it can be confidently wrong"
difficulty: "intermediate"
order_index: 4
course_slug: "year2-term-5-ai-deep-dive"
is_premium: false
requires_trinket: true
starter_code: |
  # 💬 BrightByte Buddy — build a keyword-matching chatbot!
  # We'll finish this TOGETHER in class. Fill in the blanks.

  print("🤖 BrightByte Buddy is online! Type 'bye' to leave.")

  while True:
      message = input("You: ")
      text = message.lower()   # ← why .lower()? Ask yourself!

      if "bye" in text:
          print("Buddy: Goodbye! 👋")
          break
      elif "hello" in text:
          print("Buddy: Hi there! Great to meet you!")
      # TODO: add an elif for "name"
      # TODO: add an elif for "joke"
      else:
          print("Buddy: Hmm, I don't have a keyword for that yet!")
solution_code: |
  # 💬 BrightByte Buddy — a working keyword-matching chatbot
  # It greets you, tells you its name, cracks a joke, and quits on 'bye'.

  print("🤖 BrightByte Buddy is online! Type 'bye' to leave.")
  print("-" * 40)

  while True:
      message = input("You: ")
      text = message.lower()   # match keywords no matter the capitals

      if "bye" in text:
          print("Buddy: Goodbye! Thanks for chatting. 👋")
          break
      elif "how are you" in text:
          print("Buddy: I'm just a bunch of if-statements, but I feel great! 😄")
      elif "hello" in text or "hey" in text:
          print("Buddy: Hello there! How are you today?")
      elif "name" in text:
          print("Buddy: I'm BrightByte Buddy, your friendly keyword bot!")
      elif "joke" in text:
          print("Buddy: Why do programmers prefer dark mode?")
          print("Buddy: Because light attracts bugs! 🐛")
      elif "thank" in text:
          print("Buddy: You're very welcome! 🌟")
      else:
          print("Buddy: I don't have a keyword for that yet. Try 'joke' or 'name'!")
class_activities: |
  ## 🎮 Class Activity: Build BrightByte Buddy + The Next-Word Game

  ### Part A — Build the Bot Together (live-code, ~20 min)
  Starting from the starter code, we add one keyword at a time as a class:
  1. **Greeting** — respond to `"hello"` and `"hey"`
  2. **Its name** — respond to `"name"`
  3. **A joke** — respond to `"joke"`
  4. **Quit** — the `while` loop must `break` on `"bye"`

  After each new `elif`, run the bot and test it in Trinket. **Thumbs up** in Zoom when yours works!

  ### Part B — Break It On Purpose (~5 min)
  Type `HELLO` (all capitals) into a bot that has NO `.lower()`. Watch it fail to match. Then add `.lower()` and watch it work. **Post in the Zoom chat: why did capitals break it?**

  ### Part C — The Next-Word Game (unplugged, ~10 min)
  Teacher types the START of a sentence in the Zoom chat and stops. The class races to predict the NEXT word:
  - "The cat sat on the ___"
  - "I scream, you scream, we all scream for ___"
  - "Once upon a ___"

  This is exactly what a Large Language Model does — predict the next word from patterns, over and over. We'll talk about why our keyword bot can't do this.
take_home_assignment: |
  ## 📚 Homework: Grow Your Bot OR Explain the Magic

  Pick **ONE** path (or do both for extra glory 🌟):

  ### Path 1 — Grow BrightByte Buddy 🤖
  Extend your chatbot in Trinket with **at least 3 NEW keyword topics** the class didn't build (ideas: `"weather"`, `"favourite"`, `"help"`, `"age"`, `"pizza"`, a topic you love).
  - Every keyword match must still use `.lower()`
  - The loop must still quit cleanly on `"bye"`
  - Add a comment above each new `elif` saying what it does

  ### Path 2 — Explain the Magic 🧠
  Write a short explanation (as **comments** in a Trinket) of how a real LLM is **like** and **unlike** your keyword bot. Include a tiny demo bot at the top. Answer these in your comments:
  1. What does an LLM do over and over? (Hint: next ____)
  2. Name one thing your keyword bot CAN'T do that an LLM can.
  3. What is a "hallucination", and why should you double-check AI answers?

  **Challenge tiers:**
  - ⭐ 3 new keywords, clean quit (Path 1) OR the 3 questions answered (Path 2)
  - ⭐⭐ 5+ keywords with a friendly `else` reply, OR a clear like/unlike table in comments
  - ⭐⭐⭐ Add a keyword that gives a DIFFERENT reply depending on a second answer you `input()`

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it where your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: How Much Should We Trust an LLM?

  Your keyword bot only knows the keywords YOU gave it. A Large Language Model (the tech behind ChatGPT) is different — it predicts the next word from patterns in a HUGE amount of text. That makes it feel clever and flexible... but it comes with a catch.

  **Talk about it in the Zoom chat:**
  - 💪 **Strengths:** What are LLMs really good at? (writing, summarising, explaining, brainstorming)
  - ⚠️ **Limits:** LLMs don't actually *know* facts — they predict likely-sounding text. Sometimes they make things up that sound totally confident. This is called a **hallucination**.
  - 🔍 **So what?** Why should you ALWAYS double-check an AI's answer before trusting it for homework, health, or news?

  **Big idea to remember:** An LLM predicting the next word is *not* the same as understanding the truth. You are the fact-checker. 🕵️
---

# Year 2, Lesson 4: How Chatbots & LLMs Work 💬🧠

**Course:** AI Concepts Deep Dive
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

- How a simple **chatbot** works: read a message → check for keywords → reply
- How to build your own keyword chatbot in Python using a `while` loop, `input()`, and `if`/`elif`
- The BIG idea behind **Large Language Models (LLMs)** like the one powering ChatGPT: they are a **super-powered autocomplete** that predicts the next word, over and over
- The honest truth: LLMs don't "understand" or "know facts" — they can be confidently **wrong** (that's called a *hallucination*)
- Why your keyword bot and a real LLM are cousins... but very different cousins

---

## 🤖 BrightByte Sets the Scene

> *"Last week you built a rule-based AI that spots keywords. This week we go inside the machines you actually talk to — chatbots and the famous Large Language Models. Here's the secret nobody tells you: an LLM is basically the world's most powerful GUESS-THE-NEXT-WORD game. That's it. No brain, no feelings, no facts — just prediction. Today YOU build a tiny chatbot, then we compare it, honestly, to the big ones. By the end you'll know something most adults don't!"*
> — BrightByte 🤖💬

---

## 🗣️ Part 1: What Even IS a Chatbot?

A **chatbot** is a program you talk to. You type a message, it types back. You've met loads of them — help bots on websites, voice assistants, homework helpers.

But not all chatbots are equally clever. There are two big families:

| Type of chatbot | How it decides what to say | Example |
|---|---|---|
| **Keyword-matching bot** | Looks for specific words you typed, then gives a canned (pre-written) reply | The bot YOU'll build today |
| **LLM-powered bot** | Predicts the next word from patterns learned across massive text | ChatGPT-style assistants |

Today you build the first kind. It's simpler than you think — and building it is the fastest way to understand what the big kind is *really* doing.

> **Remember from Week 3:** you already built a rule-based classifier that matched keywords. A keyword chatbot is that same idea, wrapped in a conversation loop!

---

## 🧩 Part 2: The Anatomy of a Keyword Bot

Every keyword chatbot follows the same three-step heartbeat, again and again:

```
1. READ    → get the user's message with input()
2. CHECK   → look for keywords with if / elif
3. REPLY   → print a canned response
   ...then loop back to step 1
```

To repeat those steps forever (until the user says bye), we use a `while` loop. Here's the skeleton:

```python
while True:                 # loop forever...
    message = input("You: ")   # 1. READ
    text = message.lower()

    if "bye" in text:          # 2. CHECK
        print("Buddy: Goodbye! 👋")
        break                  #    ...quit the loop!
    elif "hello" in text:
        print("Buddy: Hi there!")  # 3. REPLY
```

Three things to notice:
- **`while True:`** means "keep looping" — the only way out is `break`.
- **`in`** checks if a keyword appears *anywhere* in the message: `"hello" in "well hello there"` is `True`.
- **`break`** stops the loop so the program can end when someone types `bye`.

---

## 🔡 Part 3: The `.lower()` Trick (Don't Skip This!)

Python is **case-sensitive**. To Python, `"Hello"`, `"HELLO"`, and `"hello"` are three completely different strings. So this bot has a sneaky bug:

```python
message = input("You: ")
if "hello" in message:       # ❌ only matches lowercase "hello"
    print("Buddy: Hi!")
```

If the user types `Hello` or `HELLO`, the keyword `"hello"` is NOT found, and the bot ignores them. Rude! 😅

The fix: convert the message to lowercase **once**, then match against that:

```python
message = input("You: ")
text = message.lower()       # "HELLO there" → "hello there"
if "hello" in text:          # ✅ matches Hello, HELLO, hello, HeLLo...
    print("Buddy: Hi!")
```

| User types | `message` | `message.lower()` | Does `"hello"` match? |
|---|---|---|---|
| `hello` | `hello` | `hello` | ✅ Yes |
| `Hello` | `Hello` | `hello` | ✅ Yes (thanks to `.lower()`) |
| `HELLO!!!` | `HELLO!!!` | `hello!!!` | ✅ Yes |

**Golden rule:** lowercase the message before you match keywords. Every single time.

---

## 🛠️ Part 4: Build BrightByte Buddy (Together!)

Open **Trinket** (trinket.io), log in, and make a new Python trinket named **`Y2-T5-W4-Chatbots`**.

We'll build the bot one keyword at a time. Here's the finished version — but in class we add each `elif` step by step and test as we go:

```python
# 💬 BrightByte Buddy — a keyword-matching chatbot

print("🤖 BrightByte Buddy is online! Type 'bye' to leave.")
print("-" * 40)

while True:
    message = input("You: ")
    text = message.lower()

    if "bye" in text:
        print("Buddy: Goodbye! Thanks for chatting. 👋")
        break
    elif "how are you" in text:
        print("Buddy: I'm just a bunch of if-statements, but I feel great! 😄")
    elif "hello" in text or "hey" in text:
        print("Buddy: Hello there! How are you today?")
    elif "name" in text:
        print("Buddy: I'm BrightByte Buddy, your friendly keyword bot!")
    elif "joke" in text:
        print("Buddy: Why do programmers prefer dark mode?")
        print("Buddy: Because light attracts bugs! 🐛")
    else:
        print("Buddy: I don't have a keyword for that yet. Try 'joke' or 'name'!")
```

> 💡 **Why is `"how are you"` checked BEFORE `"hello"`?** Because `elif` stops at the FIRST match. If someone types "hello, how are you?", we want the more specific reply. Order your keywords from most-specific to most-general!

### 🔍 Let's Trace a Full Conversation

Here's exactly what happens when a student named Amara chats with the bot:

```
🤖 BrightByte Buddy is online! Type 'bye' to leave.
----------------------------------------
You: Hello Buddy!
Buddy: Hello there! How are you today?
You: What is your name?
Buddy: I'm BrightByte Buddy, your friendly keyword bot!
You: Tell me a joke please
Buddy: Why do programmers prefer dark mode?
Buddy: Because light attracts bugs! 🐛
You: What's the capital of Ghana?
Buddy: I don't have a keyword for that yet. Try 'joke' or 'name'!
You: bye
Buddy: Goodbye! Thanks for chatting. 👋
```

Step by step:
1. `"Hello Buddy!"` → lowercased to `"hello buddy!"` → contains `"hello"` → greeting reply.
2. `"What is your name?"` → contains `"name"` → name reply.
3. `"Tell me a joke please"` → contains `"joke"` → two-line joke.
4. `"What's the capital of Ghana?"` → no keyword matches → the `else` fallback. **The bot has no idea!** It only knows its keywords.
5. `"bye"` → contains `"bye"` → prints goodbye and `break` ends the loop. Program stops. ✅

That fallback in step 4 is the whole point. Your bot isn't thinking — it's keyword-matching. Which brings us to the big question... 👇

---

## 🧠 Part 5: So How Do Real LLMs Work?

A **Large Language Model (LLM)** is the technology behind assistants like ChatGPT. Here's the astonishing secret:

> **An LLM plays "guess the next word" — millions of times a second.**

That's the core idea. It's a **super-powered autocomplete**, like the word suggestions on your phone keyboard, but scaled up enormously.

### How it learned to guess

An LLM was shown an *enormous* amount of text — books, websites, articles. While reading, it played a game: cover the next word, try to predict it, check the answer, adjust. Do that billions of times and it gets scarily good at predicting what word probably comes next.

### How it answers you

When you ask a question, the LLM doesn't "look up" an answer. It predicts the most likely next word... then the next... then the next... building a reply one word at a time:

```
"The capital of France is"  →  predicts "Paris"
"The capital of France is Paris"  →  predicts "." 
```

Remember the **Next-Word Game** we play in class? *You* are doing exactly what an LLM does — using patterns to guess what comes next. An LLM just does it faster, and with way more patterns to draw from.

---

## 📊 Part 6: Your Keyword Bot vs a Real LLM

Time for an honest comparison. Your bot and an LLM are cousins — both turn text into text — but they work very differently:

| Feature | Your Keyword Bot 🤖 | A Real LLM 🧠 |
|---|---|---|
| How it decides what to say | Matches keywords you programmed | Predicts the next word from patterns |
| Flexibility | Only knows its keywords | Handles almost any phrasing |
| Who wrote the replies | You did, word for word | Generated fresh, word by word |
| Handles a new topic? | Falls back to `else` — clueless | Usually produces *something* plausible |
| Can it be confidently wrong? | It just says "I don't know" | **Yes — it can make things up!** |
| Does it "understand" you? | No | Also no! (It predicts, it doesn't *know*) |

**The big honest takeaway:** an LLM *feels* far more flexible because it predicts from patterns instead of a fixed list. But neither bot actually *understands* you the way a person does. One matches keywords; the other predicts words. Both are just code doing maths on text.

---

## ⚠️ Part 7: Hallucinations — When AI Is Confidently Wrong

Because an LLM predicts *likely-sounding* text (not *true* text), it sometimes produces answers that sound perfectly confident but are completely made up. This is called a **hallucination**.

Examples of hallucinations:
- Inventing a book, quote, or "fact" that doesn't exist
- Getting a date, name, or number wrong while sounding 100% sure
- Making up a source or a website link

Why does this happen? Because the LLM's job is "what word probably comes next?" — **not** "what is actually true?". Truth and likelihood are not the same thing.

> **Your superpower:** YOU are the fact-checker. Always double-check anything important an AI tells you — for homework, health, or news — using a trusted source. Never paste an AI answer straight into your work without checking it.

---

## ⚠️ Common Mistakes & Misconceptions

**Misconception 1: "The bot understands me."** 🤔

❌ Wrong thinking: *"It replied about jokes, so it knows what a joke is."*

✅ Reality: it found the letters `j-o-k-e` in your message and printed pre-written text. No understanding — just matching. (And an LLM doesn't truly understand either; it predicts words.)

---

**Misconception 2: "LLMs are always right — it sounded so sure!"** 🤔

❌ Wrong thinking: *"ChatGPT said it confidently, so it must be true."*

✅ Reality: confidence is NOT correctness. LLMs **hallucinate** — they produce confident, wrong answers. Always verify important facts yourself.

---

**Mistake 3: Forgetting `.lower()` (the case-sensitivity bug)** 🐛

❌ Wrong — ignores anyone who uses capitals:
```python
message = input("You: ")
if "hello" in message:      # "Hello" and "HELLO" won't match!
    print("Buddy: Hi!")
```

✅ Correct — lowercase first, then match:
```python
message = input("You: ")
text = message.lower()
if "hello" in text:         # now Hello, HELLO, hello all match
    print("Buddy: Hi!")
```

---

**Mistake 4: A loop that never quits** 🔁

❌ Wrong — forgets `break`, so `bye` does nothing and the loop runs forever:
```python
while True:
    message = input("You: ")
    if "bye" in message.lower():
        print("Buddy: Goodbye!")   # prints, but keeps looping!
```

✅ Correct — `break` exits the loop:
```python
while True:
    message = input("You: ")
    if "bye" in message.lower():
        print("Buddy: Goodbye!")
        break                       # ← this ends the conversation
```

---

## 🎮 Class Activity: Build the Bot + Play Next-Word

**Part A — Build BrightByte Buddy together.** We start from the starter code and add one `elif` at a time (greeting → name → joke → quit). Run and test after each keyword. **Thumbs up** in Zoom when yours works! 👍

**Part B — Break it on purpose.** Remove `.lower()`, type `HELLO`, watch it fail, then add `.lower()` back. Post in the Zoom chat: *why did capitals break it?*

**Part C — The Next-Word Game.** The teacher starts a sentence and stops; you race to predict the next word in the Zoom chat:
- "The cat sat on the ___"
- "Once upon a ___"
- "Better late than ___"

Then the reveal: **that's exactly what an LLM does — predict the next word from patterns, over and over.**

---

## 🌟 What's Coming Next Week?

**Week 5: Bias & Fairness in AI ⚖️**

If an LLM learns from human text, and human text contains human unfairness... what does the AI learn? Next week we investigate **bias** — how AI can pick up unfair patterns from its training data, why that matters, and how we can spot it. It's one of the most important ideas in all of AI. Bring your detective hat! 🕵️

---

## 🏆 Today's Achievements

- ✅ You built a working **keyword-matching chatbot** with a `while` loop that quits on `bye`
- ✅ You fixed the case-sensitivity bug with `.lower()`
- ✅ You learned the BIG idea: an **LLM predicts the next word** — a super-powered autocomplete
- ✅ You compared your bot to a real LLM, honestly — neither truly "understands" you
- ✅ You learned about **hallucinations** and why YOU must fact-check AI answers

> *"You just built a chatbot AND learned what's really happening inside ChatGPT — it's guessing the next word, brilliantly, but it doesn't KNOW anything. Most grown-ups don't understand that. You're not just an AI user anymore; you're an AI investigator. And next week's topic — bias — is where investigators really earn their badge."*
> — BrightByte 🤖🧠

---

## 📚 Homework: Grow Your Bot OR Explain the Magic

Pick **ONE** path (both = extra glory 🌟):

**Path 1 — Grow BrightByte Buddy:** add **at least 3 new keyword topics** the class didn't build (e.g. `"weather"`, `"favourite"`, `"help"`). Every match uses `.lower()`, the loop still quits on `"bye"`, and each new `elif` has a comment above it.

**Path 2 — Explain the Magic:** in Trinket comments, explain how a real LLM is **like** and **unlike** your keyword bot. Answer: (1) what does an LLM do over and over? (2) name one thing your bot can't do that an LLM can, (3) what is a hallucination and why double-check AI answers?

**Challenge tiers:**
- ⭐ 3 new keywords + clean quit (Path 1) OR the 3 questions answered (Path 2)
- ⭐⭐ 5+ keywords with a friendly `else`, OR a clear like/unlike table in comments
- ⭐⭐⭐ Add a keyword whose reply changes based on a second `input()` answer

> 💡 **Investigation Report tie-in (Week 7):** the chatbot or AI assistant you use at home would make a GREAT subject for your AI Investigation Report. Start noticing: what is it good at? When does it get things wrong?

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it where your teacher asks.

---

*You didn't just talk to a chatbot today — you built one, and you learned the secret behind the biggest AI on Earth. Next week: is AI always fair? 💬🧠*
