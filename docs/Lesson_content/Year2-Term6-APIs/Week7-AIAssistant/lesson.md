---
title: "Project: AI-Powered Assistant 🤖⭐"
description: "Upgrade your Week 6 assistant into a personalised, polished helper — it remembers your name and favourite city, has its own personality and voice, offers new services, and never, ever crashes"
difficulty: "intermediate"
order_index: 7
course_slug: "year2-term-6-apis"
is_premium: false
requires_trinket: true
starter_code: |
  # 🤖 Y2-T6-W7-Assistant — START FROM YOUR WEEK 6 ASSISTANT
  # Made by: [YOUR NAME]
  # This is where you left off last week. TODAY we personalise it! ⭐

  # ---------- MOCK API SERVICES ----------
  def get_weather(city):
      weather_data = {
          "accra":  {"temp": 30, "sky": "sunny"},
          "lagos":  {"temp": 31, "sky": "humid"},
          "kumasi": {"temp": 28, "sky": "cloudy"},
      }
      key = city.lower()
      if key in weather_data:
          info = weather_data[key]
          return {"status": "ok", "data": {"city": city, "temp": info["temp"], "sky": info["sky"]}}
      else:
          return {"status": "error", "error": "I don't have weather for that city yet."}

  def get_joke():
      return {"status": "ok", "data": {"joke": "Why did the programmer quit? They didn't get arrays!"}}

  def get_fact():
      return {"status": "ok", "data": {"fact": "Octopuses have three hearts."}}

  # ---------- INTENT DETECTION ----------
  def detect_intent(message):
      text = message.lower()
      if "bye" in text or "quit" in text:
          return "bye"
      elif "weather" in text:
          return "weather"
      elif "joke" in text:
          return "joke"
      elif "fact" in text:
          return "fact"
      else:
          return "unknown"

  # ---------- THE CHAT LOOP ----------
  def run_assistant():
      print("Hello! I'm your assistant. Ask me for weather, a joke or a fact.")
      running = True
      while running:
          message = input("You: ")
          intent = detect_intent(message)
          if intent == "bye":
              print("Bot: Goodbye!")
              running = False
          elif intent == "weather":
              city = input("Which city? ")
              result = get_weather(city)
              if result["status"] == "ok":
                  d = result["data"]
                  print("Bot: It's", d["temp"], "degrees and", d["sky"], "in", d["city"])
              else:
                  print("Bot:", result["error"])
          elif intent == "joke":
              result = get_joke()
              print("Bot:", result["data"]["joke"])
          elif intent == "fact":
              result = get_fact()
              print("Bot:", result["data"]["fact"])
          else:
              print("Bot: Sorry, I didn't understand that.")

  run_assistant()
solution_code: |
  # 🤖 Y2-T6-W7-Assistant — your PERSONALISED AI-Powered Assistant ⭐
  # Made by: [YOUR NAME]

  BOT_NAME = "Ada"   # Give your assistant its very own name!

  # ---------- MOCK API SERVICES ----------
  def get_weather(city):
      weather_data = {
          "accra":  {"temp": 30, "sky": "sunny"},
          "lagos":  {"temp": 31, "sky": "humid"},
          "kumasi": {"temp": 28, "sky": "cloudy"},
          "abuja":  {"temp": 29, "sky": "clear"},
      }
      key = city.lower()
      if key in weather_data:
          info = weather_data[key]
          return {"status": "ok", "data": {"city": city, "temp": info["temp"], "sky": info["sky"]}}
      else:
          return {"status": "error", "error": "I don't have weather for that city yet."}

  def get_joke():
      return {"status": "ok", "data": {"joke": "Why did the programmer quit? They didn't get arrays!"}}

  def get_fact():
      return {"status": "ok", "data": {"fact": "Octopuses have three hearts — two for the gills, one for the body!"}}

  # NEW service #1: friendly advice
  def get_advice():
      return {"status": "ok", "data": {"advice": "Save your work often, and take a short break every 30 minutes. 💾"}}

  # NEW service #2: a personalised compliment (it takes a request — the name!)
  def get_compliment(name):
      return {"status": "ok", "data": {"compliment": f"You are a brilliant coder, {name}! 🌟"}}

  # ---------- INTENT DETECTION ----------
  def detect_intent(message):
      text = message.lower()
      if "bye" in text or "goodbye" in text or "quit" in text:
          return "bye"
      elif "weather" in text:
          return "weather"
      elif "joke" in text:
          return "joke"
      elif "fact" in text:
          return "fact"
      elif "advice" in text or "tip" in text:
          return "advice"
      elif "compliment" in text or "cheer" in text:
          return "compliment"
      else:
          return "unknown"

  # ---------- HELPER: find a city named in the message ----------
  def find_city(message):
      # Looks for a city after the word "in", e.g. "weather in Lagos"
      text = message.lower()
      if " in " in text:
          after = text.split(" in ", 1)[1]     # everything after " in "
          first_word = after.split(" ")[0]     # just the first word
          city = first_word.strip("?!.,")      # tidy up punctuation
          if city != "":
              return city.title()
      return None   # no city named — the caller uses the remembered default

  # ---------- THE CHAT LOOP ----------
  def run_assistant():
      # --- MEMORY: build the user dictionary FIRST, before we read from it ---
      print("=" * 44)
      print(f"   🤖 Hi! I'm {BOT_NAME}, your personal assistant!")
      print("=" * 44)
      name = input(f"{BOT_NAME}: First, what's your name? ")
      favourite_city = input(f"{BOT_NAME}: Lovely, {name}! Which city is your favourite? ")

      # Everything I remember lives in ONE dictionary:
      user = {"name": name, "favourite_city": favourite_city}

      print(f"{BOT_NAME}: Great to meet you, {user['name']}! 😊")
      print(f"{BOT_NAME}: Ask me for the weather, a joke, a fact, some advice or a compliment.")
      print(f"{BOT_NAME}: Say 'bye' whenever you'd like to stop.")

      running = True
      while running:
          message = input(f"{user['name']}: ")
          intent = detect_intent(message)

          if intent == "bye":
              print(f"{BOT_NAME}: Goodbye, {user['name']}! Come back soon. 👋")
              running = False

          elif intent == "weather":
              city = find_city(message)
              if city is None:
                  city = user["favourite_city"]      # remembered default!
              result = get_weather(city)
              if result["status"] == "ok":
                  data = result["data"]
                  print(f"{BOT_NAME}: In {data['city']} it's {data['temp']}°C and {data['sky']} right now, {user['name']}. ☀️")
              else:
                  print(f"{BOT_NAME}: Sorry {user['name']}, {result['error']}")

          elif intent == "joke":
              result = get_joke()
              if result["status"] == "ok":
                  print(f"{BOT_NAME}: Here's one for you, {user['name']} — {result['data']['joke']} 😄")
              else:
                  print(f"{BOT_NAME}: My joke book is empty right now!")

          elif intent == "fact":
              result = get_fact()
              if result["status"] == "ok":
                  print(f"{BOT_NAME}: Did you know? {result['data']['fact']} 🧠")
              else:
                  print(f"{BOT_NAME}: I've run out of facts!")

          elif intent == "advice":
              result = get_advice()
              if result["status"] == "ok":
                  print(f"{BOT_NAME}: My advice, {user['name']}: {result['data']['advice']}")
              else:
                  print(f"{BOT_NAME}: No advice for you right now, sorry!")

          elif intent == "compliment":
              result = get_compliment(user["name"])
              if result["status"] == "ok":
                  print(f"{BOT_NAME}: {result['data']['compliment']}")
              else:
                  print(f"{BOT_NAME}: You're great — and that's a fact!")

          else:
              print(f"{BOT_NAME}: Hmm, I didn't catch that, {user['name']}. Try: weather, joke, fact, advice, compliment or bye.")

  # Start the assistant!
  run_assistant()
class_activities: |
  ## 🏗️ Class Activity: Personalise Your Assistant — Live, Together!

  We upgrade your Week 6 assistant in **three stages**, live on Zoom. After each stage, **run your code** and give a **thumbs up** 👍 when it works. We move together!

  > 📁 **First:** open your **`Y2-T6-W6-Assistant`** Trinket. Save it as a NEW trinket named **`Y2-T6-W7-Assistant`** (File → Save a copy). We upgrade the copy — your Week 6 original stays safe.

  ### Stage 1 — Memory: the `user` dictionary (⭐⭐)
  At the very start of `run_assistant()`, ask the user's name and favourite city, then store BOTH in one dictionary — **before** the chat loop.
  ```python
  name = input("What's your name? ")
  favourite_city = input("Which city is your favourite? ")
  user = {"name": name, "favourite_city": favourite_city}
  print(f"Great to meet you, {user['name']}! 😊")
  ```
  ✅ **Checkpoint:** does it greet you by name? Post your greeting in the chat! 👍

  ### Stage 2 — Personality: a name and a warm voice (⭐⭐)
  Give your assistant a name with a `BOT_NAME` constant, and use the remembered name in your replies.
  ```python
  BOT_NAME = "Ada"   # pick your own!
  print(f"{BOT_NAME}: Here's a joke for you, {user['name']} — ...")
  ```
  Also make the weather use the remembered favourite city as its **default** when no city is named:
  ```python
  city = find_city(message)
  if city is None:
      city = user["favourite_city"]   # remembered default!
  ```
  ✅ **Checkpoint:** ask "what's the weather?" with no city — does it use YOUR favourite city? 👍

  ### Stage 3 — A brand-new service + intent (⭐⭐⭐)
  Add one new mock service, a new branch in `detect_intent`, and a handler in the loop. Here's **advice**:
  ```python
  def get_advice():
      return {"status": "ok", "data": {"advice": "Save your work often. 💾"}}
  # in detect_intent:
  elif "advice" in text:
      return "advice"
  # in the loop:
  elif intent == "advice":
      result = get_advice()
      if result["status"] == "ok":
          print(f"{BOT_NAME}: My advice: {result['data']['advice']}")
  ```
  ✅ **Final checkpoint:** ask for advice AND try nonsense like "banana" — friendly reply, no crash? 🎉 **Save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Make It Showcase-Ready ✨

  Next week you'll **demo your assistant** to the class and earn the **API Master Badge**! This week, give it a real personality and make sure it never, ever crashes.

  **Requirements:**
  1. Open your **`Y2-T6-W7-Assistant`** Trinket
  2. Give your assistant a **unique name and personality** (its own `BOT_NAME` and a consistent, friendly voice)
  3. **Remember at least one preference** in the `user` dictionary (name + favourite city, or add your own like a favourite emoji)
  4. Add **your own new service + intent** (advice, compliment, a quiz question, a time-of-day greeting — your choice!)
  5. Test it HARD — type nonsense, empty messages, weird cities. It must never crash and always quit cleanly on "bye".

  **Personality ideas (pick a vibe):**
  - 🌟 A super-cheerful hype-bot that celebrates everything
  - 🤓 A calm, wise helper that gives thoughtful replies
  - 😎 A cool, funny assistant with jokes in every answer

  **Challenge tiers:**
  - ⭐ Named assistant that greets by name, remembers a favourite city, and has one new service
  - ⭐⭐ Two new services, and the weather uses the remembered city as a default
  - ⭐⭐⭐ Remember TWO preferences and use them in replies; add a service that takes a request (like `get_compliment(name)`)

  > 💡 Bring this exact program to next week's showcase — you'll run it live on Zoom and earn your badge! 🏆

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? Real Assistants Remember You Too

  Today you gave your assistant a **memory** — a `user` dictionary that remembers your name and favourite city across the whole conversation. Real AI assistants do a bigger version of exactly this!

  When you chat with a helpful assistant, it often keeps track of what you've said earlier in the conversation — your name, what you asked before, what you like — so its replies feel personal instead of starting from scratch every time. That "remembering" is called **context**, and it's a huge part of what makes an assistant feel smart and friendly.

  **Discuss in the Zoom chat:** "What's one thing you'd want an assistant to remember about you to be more helpful?"

  You just built a mini version of a real, powerful idea. 🧠
---

# Year 2, Lesson 7: Project — AI-Powered Assistant 🤖⭐

**Course:** Working with APIs
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Learn Today

- How to give your assistant a **memory** using a `user` dictionary that remembers the person it's talking to
- How to give it a **personality** — its own name and a warm, consistent voice that greets you by name
- How to add **new services and intents** so your assistant can do more (advice, compliments, and whatever YOU dream up)
- How to make it **robust** — it checks every response, handles anything it doesn't understand, and quits cleanly. It never crashes!
- You'll finish with a **personalised, polished assistant** ready to show off next week and earn the **API Master Badge** 🏆

---

## 🤖 BrightByte's Big Build

> *"Last week you built an assistant that could fetch the weather, tell a joke, and share a fact — a proper little team of mock APIs behind one chat. I was SO proud. But here's the thing: it talks to everyone exactly the same way. It doesn't know your name. It forgets everything the moment you say it. This week we fix that. We give it a MEMORY, a PERSONALITY, new powers, and armour so it never falls over. By the end, it won't just be an assistant — it'll be YOUR assistant. Let's make it shine!"*
> — BrightByte 🤖⭐

---

## 🧩 Part 1: What We're Upgrading

Your Week 6 assistant already has four moving parts. Let's remind ourselves what each one does — because today we upgrade all of them:

| Piece | What it does |
|---|---|
| `get_weather(city)`, `get_joke()`, `get_fact()` | The **mock API services** — each returns a `{"status": ..., "data": ...}` dictionary |
| `detect_intent(message)` | Reads the user's message and returns `"weather"`, `"joke"`, `"fact"`, `"bye"` or `"unknown"` |
| `run_assistant()` | The **chat loop** — asks the user, works out the intent, calls the right service, replies |

It works — but it's a bit… robotic. Look at a typical chat:

```
You: tell me a joke
Bot: Why did the programmer quit? They didn't get arrays!
You: what's the weather?
Which city? Accra
Bot: It's 30 degrees and sunny in Accra
```

Friendly enough — but it doesn't know who it's talking to, it has no name of its own, and every reply is flat. Today we give it **memory, personality, more services, and armour**.

> 📁 **BEFORE WE START:** Open your **`Y2-T6-W6-Assistant`** Trinket. Save a **copy** and name it **`Y2-T6-W7-Assistant`**. We upgrade the copy — that way your Week 6 original is always safe!

---

## 🗺️ Part 2: The Upgrade Plan

Four upgrades turn a working assistant into a *showcase* assistant:

| Upgrade | Before | After |
|---|---|---|
| 🧠 **Memory** | Forgets everything | Remembers your name & favourite city in a `user` dict |
| 😊 **Personality** | Nameless "Bot" | Has a name (`BOT_NAME`) and a warm voice that uses YOUR name |
| ⚡ **More services** | 3 services | New ones — advice, compliments, or your own idea |
| 🛡️ **Robustness** | Could trip up | Checks every response, handles anything, quits cleanly |

Let's build them one at a time. Follow along in your copy — thumbs up 👍 after each part!

---

## 🧠 Part 3: Memory — The `user` Dictionary

Right now the assistant knows nothing about you. Let's give it a **memory**: a single dictionary that stores what it has learned about the user.

The golden rule of memory: **fill the dictionary BEFORE you read from it.** So, at the very start of `run_assistant()` — *before* the chat loop — we ask a couple of questions and store the answers:

```python
def run_assistant():
    # Ask FIRST, so the dictionary is ready before the loop reads it
    name = input("What's your name? ")
    favourite_city = input("Which city is your favourite? ")

    # Everything we remember lives in ONE dictionary:
    user = {"name": name, "favourite_city": favourite_city}

    print(f"Great to meet you, {user['name']}! 😊")
```

Now the assistant *remembers* two things for the whole conversation: `user["name"]` and `user["favourite_city"]`. We can use them anywhere in the loop.

> **🔑 Why a dictionary?** You could use two separate variables, but a `user` dict keeps everything the assistant remembers in one tidy place — and it's easy to add more later (`user["favourite_emoji"]`, `user["age"]`...). This is exactly how real programs store a "user profile".

### ⚠️ The trap: reading a preference before it's set

If you try to read `user["favourite_city"]` before you've put it in the dictionary, Python throws a **`KeyError`** — the #1 memory bug. We avoid it by always **setting first, reading later.** More on this in Common Mistakes below.

✅ **Zoom checkpoint:** run it — does it ask your name and greet you by it? Thumbs up! 👍

---

## 😊 Part 4: Personality — A Name and a Warm Voice

A great assistant has a **name** and a **consistent voice**. Let's give ours both.

First, a name — stored in a constant at the top of your file so it's easy to change:

```python
BOT_NAME = "Ada"   # give yours its own name!
```

Now every reply speaks *as* Ada, and speaks *to* the user by name. Compare the flat Week 6 reply with the warm Week 7 one:

```python
# Week 6 (flat):
print("Bot:", result["data"]["joke"])

# Week 7 (warm — uses the bot's name AND the user's name):
print(f"{BOT_NAME}: Here's one for you, {user['name']} — {result['data']['joke']} 😄")
```

See the difference? Same joke, but now it feels like *Ada* is talking to *you*. That's personality — and it costs nothing but a friendlier f-string.

A warm welcome sets the tone before the loop even starts:

```python
print("=" * 44)
print(f"   🤖 Hi! I'm {BOT_NAME}, your personal assistant!")
print("=" * 44)
```

> **💡 Consistent voice:** pick a vibe and stick to it — cheerful, calm, or funny. If Ada is cheerful, EVERY reply should be cheerful. That consistency is what makes an assistant feel like a real character.

✅ **Zoom checkpoint:** does your assistant greet you by name and reply in its own voice? Post its name in the chat! 👍

---

## ⚡ Part 5: More Services — Give It New Powers

An assistant is only as useful as the services it can call. Let's add new ones. Adding a service is always the **same three steps**:

1. **Write the service** (a mock API function that returns a `{"status", "data"}` dict)
2. **Add an intent** in `detect_intent`
3. **Handle it** in the chat loop

### Service #1 — Advice

```python
def get_advice():
    return {"status": "ok", "data": {"advice": "Save your work often, and take a short break every 30 minutes. 💾"}}
```

Add the intent (`detect_intent`):

```python
elif "advice" in text or "tip" in text:
    return "advice"
```

Handle it in the loop:

```python
elif intent == "advice":
    result = get_advice()
    if result["status"] == "ok":
        print(f"{BOT_NAME}: My advice, {user['name']}: {result['data']['advice']}")
```

### Service #2 — Compliment (a service that takes a request!)

This one is special: it uses the **remembered name** as its request, so the compliment is personal.

```python
def get_compliment(name):
    return {"status": "ok", "data": {"compliment": f"You are a brilliant coder, {name}! 🌟"}}
```

Intent:

```python
elif "compliment" in text or "cheer" in text:
    return "compliment"
```

Handler — notice we pass `user["name"]` straight into the service:

```python
elif intent == "compliment":
    result = get_compliment(user["name"])
    if result["status"] == "ok":
        print(f"{BOT_NAME}: {result['data']['compliment']}")
```

**Example run:**
```
Kofi: cheer me up
Ada: You are a brilliant coder, Kofi! 🌟
```

The memory (the name) flows into a service, which flows into a warm reply. That's all four upgrades working together!

✅ **Zoom checkpoint:** ask your assistant for advice, then for a compliment. Does it use your name? 👍

---

## 🛡️ Part 6: Robustness — Never Crash

A showcase assistant must survive **anything** the user types. Three habits keep it bulletproof.

### Habit 1: Check the `status` on EVERY service call

Every service returns a dictionary with a `"status"`. Before you use the `"data"`, check the status is `"ok"` — otherwise you might read data that isn't there:

```python
result = get_weather(city)
if result["status"] == "ok":
    data = result["data"]
    print(f"{BOT_NAME}: In {data['city']} it's {data['temp']}°C and {data['sky']}, {user['name']}. ☀️")
else:
    print(f"{BOT_NAME}: Sorry {user['name']}, {result['error']}")
```

If the service worked, we use the data. If it didn't, we read `"error"` instead — never `"data"`. **No crash, ever.**

### Habit 2: Use the remembered city as a smart default

Here's memory making the assistant *cleverer*. When the user asks for weather without naming a city, we fall back to their remembered favourite:

```python
city = find_city(message)          # looks for a city in the message
if city is None:                   # none mentioned?
    city = user["favourite_city"]  # use the remembered default!
result = get_weather(city)
```

**Example run:**
```
Kofi: what's the weather?
Ada: In Accra it's 30°C and sunny right now, Kofi. ☀️
```

Kofi never said "Accra" this time — but Ada *remembered* it was his favourite. And if a city isn't in our data, the `status` check (Habit 1) catches it gracefully:

```
Kofi: weather in Tokyo
Ada: Sorry Kofi, I don't have weather for that city yet.
```

### Habit 3: A graceful `unknown` and a clean quit

Anything the assistant doesn't understand lands in `unknown` — and we reply helpfully instead of crashing or going silent:

```python
else:
    print(f"{BOT_NAME}: Hmm, I didn't catch that, {user['name']}. Try: weather, joke, fact, advice, compliment or bye.")
```

And the loop always ends cleanly when the user says bye — we flip the `running` flag off:

```python
if intent == "bye":
    print(f"{BOT_NAME}: Goodbye, {user['name']}! Come back soon. 👋")
    running = False
```

✅ **Zoom checkpoint:** type total nonsense like "banana pancakes". Do you get a friendly reply, no crash? Then say "bye" — does it stop cleanly? 🎉

---

## ✅ Part 7: The Whole Personalised Assistant

Here is your complete assistant. This is what should be in your `Y2-T6-W7-Assistant` Trinket:

```python
# 🤖 Y2-T6-W7-Assistant — your PERSONALISED AI-Powered Assistant ⭐
# Made by: [YOUR NAME]

BOT_NAME = "Ada"   # Give your assistant its very own name!

# ---------- MOCK API SERVICES ----------
def get_weather(city):
    weather_data = {
        "accra":  {"temp": 30, "sky": "sunny"},
        "lagos":  {"temp": 31, "sky": "humid"},
        "kumasi": {"temp": 28, "sky": "cloudy"},
        "abuja":  {"temp": 29, "sky": "clear"},
    }
    key = city.lower()
    if key in weather_data:
        info = weather_data[key]
        return {"status": "ok", "data": {"city": city, "temp": info["temp"], "sky": info["sky"]}}
    else:
        return {"status": "error", "error": "I don't have weather for that city yet."}

def get_joke():
    return {"status": "ok", "data": {"joke": "Why did the programmer quit? They didn't get arrays!"}}

def get_fact():
    return {"status": "ok", "data": {"fact": "Octopuses have three hearts — two for the gills, one for the body!"}}

def get_advice():
    return {"status": "ok", "data": {"advice": "Save your work often, and take a short break every 30 minutes. 💾"}}

def get_compliment(name):
    return {"status": "ok", "data": {"compliment": f"You are a brilliant coder, {name}! 🌟"}}

# ---------- INTENT DETECTION ----------
def detect_intent(message):
    text = message.lower()
    if "bye" in text or "goodbye" in text or "quit" in text:
        return "bye"
    elif "weather" in text:
        return "weather"
    elif "joke" in text:
        return "joke"
    elif "fact" in text:
        return "fact"
    elif "advice" in text or "tip" in text:
        return "advice"
    elif "compliment" in text or "cheer" in text:
        return "compliment"
    else:
        return "unknown"

# ---------- HELPER: find a city named in the message ----------
def find_city(message):
    text = message.lower()
    if " in " in text:
        after = text.split(" in ", 1)[1]     # everything after " in "
        first_word = after.split(" ")[0]     # just the first word
        city = first_word.strip("?!.,")      # tidy up punctuation
        if city != "":
            return city.title()
    return None   # no city named — the caller uses the remembered default

# ---------- THE CHAT LOOP ----------
def run_assistant():
    # --- MEMORY: build the user dictionary FIRST, before we read from it ---
    print("=" * 44)
    print(f"   🤖 Hi! I'm {BOT_NAME}, your personal assistant!")
    print("=" * 44)
    name = input(f"{BOT_NAME}: First, what's your name? ")
    favourite_city = input(f"{BOT_NAME}: Lovely, {name}! Which city is your favourite? ")

    user = {"name": name, "favourite_city": favourite_city}

    print(f"{BOT_NAME}: Great to meet you, {user['name']}! 😊")
    print(f"{BOT_NAME}: Ask me for the weather, a joke, a fact, some advice or a compliment.")
    print(f"{BOT_NAME}: Say 'bye' whenever you'd like to stop.")

    running = True
    while running:
        message = input(f"{user['name']}: ")
        intent = detect_intent(message)

        if intent == "bye":
            print(f"{BOT_NAME}: Goodbye, {user['name']}! Come back soon. 👋")
            running = False

        elif intent == "weather":
            city = find_city(message)
            if city is None:
                city = user["favourite_city"]      # remembered default!
            result = get_weather(city)
            if result["status"] == "ok":
                data = result["data"]
                print(f"{BOT_NAME}: In {data['city']} it's {data['temp']}°C and {data['sky']} right now, {user['name']}. ☀️")
            else:
                print(f"{BOT_NAME}: Sorry {user['name']}, {result['error']}")

        elif intent == "joke":
            result = get_joke()
            if result["status"] == "ok":
                print(f"{BOT_NAME}: Here's one for you, {user['name']} — {result['data']['joke']} 😄")
            else:
                print(f"{BOT_NAME}: My joke book is empty right now!")

        elif intent == "fact":
            result = get_fact()
            if result["status"] == "ok":
                print(f"{BOT_NAME}: Did you know? {result['data']['fact']} 🧠")
            else:
                print(f"{BOT_NAME}: I've run out of facts!")

        elif intent == "advice":
            result = get_advice()
            if result["status"] == "ok":
                print(f"{BOT_NAME}: My advice, {user['name']}: {result['data']['advice']}")
            else:
                print(f"{BOT_NAME}: No advice for you right now, sorry!")

        elif intent == "compliment":
            result = get_compliment(user["name"])
            if result["status"] == "ok":
                print(f"{BOT_NAME}: {result['data']['compliment']}")
            else:
                print(f"{BOT_NAME}: You're great — and that's a fact!")

        else:
            print(f"{BOT_NAME}: Hmm, I didn't catch that, {user['name']}. Try: weather, joke, fact, advice, compliment or bye.")

# Start the assistant!
run_assistant()
```

### A full conversation (trace it in your head!)

```
============================================
   🤖 Hi! I'm Ada, your personal assistant!
============================================
Ada: First, what's your name? Kofi
Ada: Lovely, Kofi! Which city is your favourite? Accra
Ada: Great to meet you, Kofi! 😊
Ada: Ask me for the weather, a joke, a fact, some advice or a compliment.
Ada: Say 'bye' whenever you'd like to stop.
Kofi: what's the weather?
Ada: In Accra it's 30°C and sunny right now, Kofi. ☀️
Kofi: weather in Lagos
Ada: In Lagos it's 31°C and humid right now, Kofi. ☀️
Kofi: weather in Tokyo
Ada: Sorry Kofi, I don't have weather for that city yet.
Kofi: tell me a joke
Ada: Here's one for you, Kofi — Why did the programmer quit? They didn't get arrays! 😄
Kofi: cheer me up
Ada: You are a brilliant coder, Kofi! 🌟
Kofi: what is a banana
Ada: Hmm, I didn't catch that, Kofi. Try: weather, joke, fact, advice, compliment or bye.
Kofi: bye
Ada: Goodbye, Kofi! Come back soon. 👋
```

🎉 **You built a personalised, crash-proof AI-powered assistant!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: Reading a preference before it's set (`KeyError`)**

❌ Wrong — the loop reads `user["favourite_city"]`, but we never put it in the dict:
```python
user = {"name": name}          # no favourite_city!
# ... later ...
city = user["favourite_city"]  # 💥
```
```
KeyError: 'favourite_city'
```

✅ Correct — store every preference **before** the loop reads it:
```python
user = {"name": name, "favourite_city": favourite_city}
```

> **Golden rule of memory:** set it first, read it later. A `KeyError` almost always means "you asked for something you never stored."

---

**Mistake 2: Using `data` without checking `status`**

❌ Wrong — a failed weather call has NO `"data"` key, only `"error"`:
```python
result = get_weather("Tokyo")
print(result["data"]["temp"])   # 💥 there's no "data" when status is "error"!
```
```
KeyError: 'data'
```

✅ Correct — check `status` first, every single time:
```python
result = get_weather("Tokyo")
if result["status"] == "ok":
    print(result["data"]["temp"])
else:
    print(result["error"])
```

> Real assistants call services that sometimes fail. Checking `status` before touching `data` is the habit that keeps yours reliable.

---

**Mistake 3: A chat loop that won't quit**

❌ Wrong — it prints goodbye but never flips the switch, so it loops FOREVER:
```python
running = True
while running:
    message = input("You: ")
    if detect_intent(message) == "bye":
        print("Goodbye!")
        # forgot: running = False
```

✅ Correct — flip the flag off to end the loop:
```python
    if detect_intent(message) == "bye":
        print("Goodbye!")
        running = False
```

> 😵 Stuck in a forever loop in Trinket? Click **Stop** (or re-run) to escape, then find the missing `running = False`.

---

**Mistake 4: Forgetting the `f` on an f-string**

❌ Wrong — no `f`, so it prints the code literally:
```python
print("{BOT_NAME}: Hi, {user['name']}!")
```
```
{BOT_NAME}: Hi, {user['name']}!
```

✅ Correct — the `f` tells Python to swap in the values:
```python
print(f"{BOT_NAME}: Hi, {user['name']}!")
```
```
Ada: Hi, Kofi!
```

---

## 🌟 What's Coming Next Week?

Your assistant is **finished** — personalised, polished, and bulletproof. Next week is the big one: **Week 8: Assistant Showcase & the API Master Badge!** 🏆

- 🎤 You'll **demo your assistant** live on Zoom — share your screen and let it talk to the class
- 💬 You'll give and get kind **peer feedback**
- 🧠 We'll look back at the whole term — request/response, JSON, mock APIs, intents, and this assistant
- 🎖️ You'll earn your **API Master Badge** for building a real AI-powered assistant from scratch!

> Bring your `Y2-T6-W7-Assistant` Trinket next week — make sure it runs, never crashes, remembers your name, and you're proud of it. It's showtime!

---

## 🏆 Today's Achievements

- ✅ You gave your assistant a **memory** — a `user` dictionary filled before it's read
- ✅ You gave it a **personality** — its own name and a warm voice that greets you by name
- ✅ You added **new services and intents** (advice and a personalised compliment)
- ✅ You made it **robust** — every service call checks `status`, unknown messages get a friendly reply, and it quits cleanly
- ✅ You used memory as a **smart default** — the remembered city powers the weather service
- ✅ You have a **personalised, showcase-ready AI-powered assistant!**

> *"Look at what you just built. A memory. A personality. New powers. Armour that never cracks. Eight weeks ago you didn't know what an API was — today you've built an assistant that remembers you, talks like a character, calls a whole team of services, and survives anything you throw at it. Next week, you show the world and claim your badge. I could not be prouder."*
> — BrightByte 🤖⭐

---

## 📚 Homework: Make It Showcase-Ready ✨

Next week you'll **demo your assistant** and earn the **API Master Badge**! This week, give it a real personality and make sure it never, ever crashes.

**Requirements:**
1. Open your **`Y2-T6-W7-Assistant`** Trinket
2. Give your assistant a **unique name and personality** (its own `BOT_NAME` and a consistent, friendly voice)
3. **Remember at least one preference** in the `user` dictionary (name + favourite city, or your own idea)
4. Add **your own new service + intent** (advice, compliment, a quiz question, a time-of-day greeting — your choice!)
5. Test it HARD — nonsense, empty messages, weird cities. It must never crash and always quit cleanly on "bye".

**Personality ideas (pick a vibe):**
- 🌟 A super-cheerful hype-bot that celebrates everything
- 🤓 A calm, wise helper that gives thoughtful replies
- 😎 A cool, funny assistant with jokes in every answer

**Challenge tiers:**
- ⭐ Named assistant that greets by name, remembers a favourite city, and has one new service
- ⭐⭐ Two new services, and the weather uses the remembered city as a default
- ⭐⭐⭐ Remember TWO preferences and use them in replies; add a service that takes a request (like `get_compliment(name)`)

> 💡 Bring this exact program to next week's showcase — you'll run it live on Zoom and earn your badge! 🏆

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't just build an assistant — you built one that knows your name, has a heart, and never falls over. Next week, take a bow and claim your badge! 🤖⭐*
