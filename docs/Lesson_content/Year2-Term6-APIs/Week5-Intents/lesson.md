---
title: "Chatbot Intents 🎯💬"
description: "Teach your assistant to understand what a user WANTS — build detect_intent to read a message, spot the intent, and route it to the right mock API"
difficulty: "intermediate"
order_index: 5
course_slug: "year2-term-6-apis"
is_premium: false
requires_trinket: true
starter_code: |
  # 🎯 Chatbot Intents — What Does the User WANT?
  # An assistant first works out the user's INTENT (weather? a joke?
  # a fact? goodbye?), THEN calls the right mock API for it.

  # Step 1: This function should read a message and return an intent.
  # Right now it only knows "weather". Add more intents below!
  def detect_intent(message):
      text = message.lower()          # always lowercase first!
      if "weather" in text:
          return "weather"
      # TODO: add "joke", "fact", and "bye" checks here
      return "unknown"                # the safety net

  # Step 2: Test it on a few messages.
  print(detect_intent("What is the weather in Accra?"))
  print(detect_intent("Tell me a joke"))
  print(detect_intent("Goodbye!"))

  # Your turn: make the joke and goodbye messages return the right intent!
solution_code: |
  # 🎯 Chatbot Intents — one possible solution

  # --- The BRAIN: work out what the user wants ---
  def detect_intent(message):
      text = message.lower()          # case-proof the message

      # Order matters: the FIRST match wins, so check carefully.
      if "weather" in text or "temperature" in text or "rain" in text \
         or "hot" in text or "cold" in text:
          return "weather"
      if "joke" in text or "funny" in text or "laugh" in text:
          return "joke"
      if "fact" in text or "did you know" in text or "tell me something" in text:
          return "fact"
      if "bye" in text or "goodbye" in text or "see you" in text or "quit" in text:
          return "bye"

      return "unknown"                # nothing matched — safety net!

  # --- The SERVICES: mock APIs from Weeks 3 & 4 ---
  def get_weather(city):
      return {"status": 200, "data": {"city": city, "temp": 29, "sky": "sunny"}}

  def get_joke():
      return {"status": 200, "data": {"joke": "Why did the programmer quit? They didn't get arrays!"}}

  def get_fact():
      return {"status": 200, "data": {"fact": "Octopuses have three hearts"}}

  # --- The ROUTER: send each intent to the right service ---
  def handle(message):
      intent = detect_intent(message)

      if intent == "weather":
          response = get_weather("Accra")
          if response["status"] == 200:
              data = response["data"]
              return f"It is {data['temp']} degrees and {data['sky']} in {data['city']}."
      elif intent == "joke":
          return get_joke()["data"]["joke"]
      elif intent == "fact":
          return get_fact()["data"]["fact"]
      elif intent == "bye":
          return "Goodbye! Come back soon 👋"
      else:
          return "Sorry, I don't understand that one yet 🤔"

  # --- Test the whole brain + router ---
  print(handle("What is the weather like today?"))
  print(handle("Tell me a joke please"))
  print(handle("Give me a fun fact"))
  print(handle("Ok, bye!"))
  print(handle("What is 2 + 2?"))
class_activities: |
  ## 🎯 Class Activity: Build the Assistant's Brain

  We build `detect_intent` together, test it, then wire ONE intent to a real mock API call.

  ### Part A — Which Keywords Signal "Weather"? (⭐)
  Before any code, brainstorm in the **Zoom chat**: if a user wants the weather, what words might they use?
  Collect them together — `weather`, `temperature`, `rain`, `hot`, `cold`, `sunny`... Your teacher writes the winning list on screen. This list becomes the assistant's ears.

  ### Part B — Write `detect_intent` Together (⭐⭐)
  In Trinket (`Y2-T6-W5-Intents`), build the function as a class:
  1. Start with `text = message.lower()` (case-proofing!)
  2. Add a `weather` check using `in`
  3. Add `joke`, `fact`, and `bye` checks
  4. End with `return "unknown"` — the safety net
  5. Test it on 4 sample messages and check each printed intent is correct

  ### Part C — Wire One Intent to a Service (⭐⭐⭐)
  1. Paste in the `get_weather(city)` mock API from Week 3
  2. Write the start of a `handle(message)` router: `if intent == "weather":` then call `get_weather("Accra")`
  3. Check `response["status"] == 200` before reading the data (Week 4 habit!)
  4. Return a friendly weather sentence and print it

  Give a **thumbs up** in Zoom when your brain routes a weather message to the weather API!
take_home_assignment: |
  ## 📚 Homework: Grow the Brain

  Extend `detect_intent` so your assistant understands more of what people say.

  **Requirements:**
  1. Start from the class `detect_intent(message)` with `weather`, `joke`, `fact`, and `bye`
  2. Add **2 or more NEW intents** of your own (e.g. `time`, `name`, `help`, `advice`) — each with its own keyword group
  3. Keep the `return "unknown"` safety net at the very end
  4. Test on **at least 6 messages** and print the message next to its detected intent

  **Example run:**
  ```
  'What is the weather?' -> weather
  'Tell me a joke' -> joke
  'What time is it?' -> time
  'Who are you?' -> name
  'Goodbye!' -> bye
  'blorp' -> unknown
  ```

  **Challenge tiers:**
  - ⭐ 2 new intents added, 6 messages tested and printed with their intent
  - ⭐⭐ Add a `handle(message)` router that calls a mock API (returning `{"status": ..., "data": ...}`) for at least one of your new intents
  - ⭐⭐⭐ Fix an *overlapping keywords* bug on purpose: find a message that matches two intents, then reorder your checks so the RIGHT intent wins — explain your choice in a comment

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: Real Assistants Do "Intent Classification"

  When you say "set a timer for 10 minutes" to a voice assistant, the first thing it does is figure out your **intent** — is this a timer, a reminder, a music request? Only then does it call the right service. That step has a real name: **intent classification**. You just built a tiny version of it!

  **Discuss in the Zoom chat:** "Think of something you'd say to a phone assistant. What is the *intent* behind it, and which service should it call?"

  Real assistants use AI to detect intents from millions of phrasings, but the *idea* is exactly yours: read the message → decide what the user wants → route it. Keep this in mind — next week you turn your brain into a full assistant.
---

# Year 2, Lesson 5: Chatbot Intents 🎯💬

**Course:** Working with APIs
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

- What an **intent** is: what the user *wants* (weather? a joke? a fact? goodbye?)
- How to build `detect_intent(message)` — a function that reads a message and returns an intent string
- Why you **always lowercase** the message first with `.lower()`
- How to group **keywords** for each intent and check them with `in`
- How to **route** an intent to the right mock API: `if intent == "weather": ...`
- Why the **order of your checks** matters, and why you always need an **`"unknown"`** safety net

---

## 🤖 BrightByte Has a Puzzle for You

> *"Last term you built a keyword chatbot — it spotted words and replied. This term you built mock APIs — little servers that hand back data. Today we glue them together into the BRAIN of an assistant. Here's the puzzle: a user types 'what's the weather like?' How does your program know to call the WEATHER service and not the joke one? It has to work out what they WANT. That 'want' has a name — an intent. Let's teach your program to read minds. Well... read messages. Close enough!"*
> — BrightByte 🤖🎯

---

## 🧠 Part 1: What Is an Intent?

When a friend messages you, you don't just read the words — you work out what they *want*. "You free later?" means they want to hang out. "Where's the maths homework?" means they want help. That "what they want" is their **intent**.

An assistant works exactly the same way. Before it can help, it has to answer one question: **what does this user actually want?**

> An **intent** is *what the user wants*. Not the exact words — the goal behind them.

Look how many different messages can share the SAME intent:

| The user types... | Their intent |
|---|---|
| "What's the weather in Accra?" | `weather` |
| "Is it going to rain today?" | `weather` |
| "How hot is it outside?" | `weather` |
| "Tell me a joke" | `joke` |
| "Say something funny" | `joke` |
| "Goodbye!" | `bye` |

Three totally different sentences, one intent: `weather`. Your job today is to build the part of the assistant that reads any of these and shouts back the right intent.

---

## 🎯 Part 2: Our Four Intents (Plus a Safety Net)

For today's assistant we'll teach the brain **four** intents, plus one special fallback:

| Intent | The user wants... | Keywords that signal it |
|---|---|---|
| `weather` | today's weather | weather, temperature, rain, hot, cold |
| `joke` | to laugh | joke, funny, laugh |
| `fact` | to learn something | fact, did you know, tell me something |
| `bye` | to leave | bye, goodbye, see you, quit |
| `unknown` | *(we couldn't tell!)* | — nothing matched |

`unknown` is special: it's not something the user asks for on purpose — it's what we return when **none** of our keywords match. Every good assistant needs this safety net, or it will crash (or say nothing) when someone types something surprising.

> **Remember from Term 5:** you already matched keywords in your chatbot with `.lower()` and `in`. Intents are the same skill — but now each keyword group gives back a tidy *label* the rest of your program can act on.

---

## 🔡 Part 3: Rule One — Lowercase First!

People type in all sorts of ways: `WEATHER`, `Weather`, `weather`, `WeAtHeR`. To Python, those are four different strings. If you only check for `"weather"`, you'll miss `"WEATHER"` completely.

The fix is the same trick from your Term 5 chatbot — **lowercase the whole message first**:

```python
message = "WHAT IS THE WEATHER?"
text = message.lower()
print(text)
```

**Output:**
```
what is the weather?
```

Now `"weather" in text` is `True` no matter how the user typed it. This is the very first line inside `detect_intent`, every single time.

> **Golden rule:** lowercase the message *once* at the top, then check everything against the lowercased version. Never check the original message directly.

---

## 🏗️ Part 4: Building `detect_intent` Together

Let's build the brain one intent at a time. Open **Trinket** and name it `Y2-T6-W5-Intents`.

**Start with the shape** — lowercase, then a safety net:

```python
def detect_intent(message):
    text = message.lower()
    return "unknown"
```

Right now it says `unknown` for everything. Let's teach it `weather` first, using `in`:

```python
def detect_intent(message):
    text = message.lower()
    if "weather" in text:
        return "weather"
    return "unknown"
```

A user might not say the word "weather" though — they might ask "is it going to **rain**?" One keyword isn't enough. We check a whole **group** of keywords with `or`:

```python
def detect_intent(message):
    text = message.lower()
    if "weather" in text or "temperature" in text or "rain" in text \
       or "hot" in text or "cold" in text:
        return "weather"
    return "unknown"
```

> 💡 The `\` at the end of a line lets a long `if` continue on the next line. You can also just make one long line — both work in Python.

Now add the other three intents, each with its own keyword group:

```python
def detect_intent(message):
    text = message.lower()

    if "weather" in text or "temperature" in text or "rain" in text \
       or "hot" in text or "cold" in text:
        return "weather"
    if "joke" in text or "funny" in text or "laugh" in text:
        return "joke"
    if "fact" in text or "did you know" in text or "tell me something" in text:
        return "fact"
    if "bye" in text or "goodbye" in text or "see you" in text or "quit" in text:
        return "bye"

    return "unknown"
```

That's the whole brain! Notice how `return` jumps out of the function the instant a group matches — the first matching group wins.

> 🔎 Sneaky win: checking for `"bye"` also catches `"goodbye"`, because the letters `b-y-e` sit *inside* the word `goodbye`. `in` looks for the letters anywhere in the string.

---

## 🧪 Part 5: Testing the Brain

A brain you haven't tested is a brain you can't trust. Let's trace some messages through it:

```python
print(detect_intent("What is the weather in Accra?"))
print(detect_intent("Tell me a JOKE"))
print(detect_intent("Did you know octopuses have three hearts?"))
print(detect_intent("Ok, goodbye!"))
print(detect_intent("What is 2 + 2?"))
```

**Output:**
```
weather
joke
fact
bye
unknown
```

Walk through the tricky ones:

- `"Tell me a JOKE"` → lowercased to `"tell me a joke"` → `"joke" in text` is `True` → returns `joke` ✅ (see why `.lower()` matters?)
- `"Did you know..."` → `"did you know" in text` is `True` → returns `fact` ✅
- `"What is 2 + 2?"` → no keyword group matches → falls through to `return "unknown"` ✅

That last one is the safety net doing its job. Without it, your function would return `None`, and the rest of your program wouldn't know what to do.

### 💬 Class Checkpoint

> **In the Zoom chat:** give me a message that should be `weather` but does NOT contain the word "weather". Then check — does our keyword group catch it?

---

## 🔀 Part 6: Routing — From Intent to API Call

Detecting the intent is only half the job. Now we **route** it: each intent should trigger the right **mock API** (the service functions you built in Weeks 3 and 4). Here they are again, all returning the familiar `{"status": ..., "data": ...}` shape:

```python
def get_weather(city):
    return {"status": 200, "data": {"city": city, "temp": 29, "sky": "sunny"}}

def get_joke():
    return {"status": 200, "data": {"joke": "Why did the programmer quit? They didn't get arrays!"}}

def get_fact():
    return {"status": 200, "data": {"fact": "Octopuses have three hearts"}}
```

Now the **router** — one function that detects the intent, then calls the matching service:

```python
def handle(message):
    intent = detect_intent(message)

    if intent == "weather":
        response = get_weather("Accra")
        if response["status"] == 200:
            data = response["data"]
            return f"It is {data['temp']} degrees and {data['sky']} in {data['city']}."
    elif intent == "joke":
        return get_joke()["data"]["joke"]
    elif intent == "fact":
        return get_fact()["data"]["fact"]
    elif intent == "bye":
        return "Goodbye! Come back soon 👋"
    else:
        return "Sorry, I don't understand that one yet 🤔"
```

Notice two important habits carried over from earlier weeks:

- For weather we **check `response["status"] == 200`** before reading the data — the Week 4 rule: never trust a response until you've checked its status.
- The `else:` branch handles the `unknown` intent. It never crashes; it politely admits it doesn't know.

Let's run the whole thing:

```python
print(handle("What is the weather like today?"))
print(handle("Tell me a joke please"))
print(handle("Give me a fun fact"))
print(handle("Ok, bye!"))
print(handle("What is 2 + 2?"))
```

**Output:**
```
It is 29 degrees and sunny in Accra.
Why did the programmer quit? They didn't get arrays!
Octopuses have three hearts
Goodbye! Come back soon 👋
Sorry, I don't understand that one yet 🤔
```

🎉 That is a working assistant brain! It reads a message, decides what the user wants, calls the right API, and always has something sensible to say — even for a question it doesn't understand.

---

## ⚠️ Common Mistakes

**Mistake 1: Forgetting to lowercase the message**

❌ Wrong:
```python
def detect_intent(message):
    if "weather" in message:      # checks the ORIGINAL text
        return "weather"
    return "unknown"

print(detect_intent("WEATHER please"))
```
```
unknown
```

😱 It missed it! `"weather"` (lowercase) is not inside `"WEATHER please"` (uppercase). To Python they're different strings.

✅ Correct — lowercase first:
```python
def detect_intent(message):
    text = message.lower()
    if "weather" in text:
        return "weather"
    return "unknown"

print(detect_intent("WEATHER please"))
```
```
weather
```

---

**Mistake 2: Overlapping keywords — order of checks matters!**

Some messages match TWO intents. Watch what happens with "tell me a joke about the weather":

❌ Surprising:
```python
# weather is checked FIRST, so it wins...
def detect_intent(message):
    text = message.lower()
    if "weather" in text:
        return "weather"
    if "joke" in text:
        return "joke"
    return "unknown"

print(detect_intent("tell me a joke about the weather"))
```
```
weather
```

🤔 The user clearly wanted a **joke**, but `weather` was checked first, matched, and `return` jumped out before the joke check even ran. The **first matching check wins.**

✅ Fix by putting the more specific / more important check first:
```python
def detect_intent(message):
    text = message.lower()
    if "joke" in text:            # check joke BEFORE weather
        return "joke"
    if "weather" in text:
        return "weather"
    return "unknown"

print(detect_intent("tell me a joke about the weather"))
```
```
joke
```

> **The rule:** when keywords can overlap, the *order* of your `if` checks decides the winner. Put the check you care about most nearer the top.

---

**Mistake 3: Forgetting the `"unknown"` safety net**

❌ Wrong — no fallback:
```python
def detect_intent(message):
    text = message.lower()
    if "weather" in text:
        return "weather"
    # no final return!

result = detect_intent("hello there")
print(result)
print(result.upper())     # trying to use the result...
```
```
None
AttributeError: 'NoneType' object has no attribute 'upper'
```

😬 With no keyword matching and no final `return`, the function quietly returns `None`. Then the rest of your program crashes when it tries to use it.

✅ Correct — always end with the safety net:
```python
def detect_intent(message):
    text = message.lower()
    if "weather" in text:
        return "weather"
    return "unknown"        # ALWAYS return something

result = detect_intent("hello there")
print(result.upper())
```
```
UNKNOWN
```

> **Golden rule:** every path through `detect_intent` must `return` an intent string. The `return "unknown"` at the very bottom guarantees it.

---

## 🌟 What's Coming Next Week?

You've built the two big pieces of an assistant: the **brain** (`detect_intent`) and the **services** (mock APIs). Next week you **assemble the full assistant** — you'll wrap everything in a **chat loop** so a user can type message after message, and your assistant keeps detecting intents and calling APIs until the user says `bye`:

```python
# A sneak peek at Week 6...
while True:
    message = input("You: ")
    reply = handle(message)
    print("Assistant:", reply)
    if detect_intent(message) == "bye":
        break
```

**Week 6: Assembling the Assistant** — intents + services + a chat loop = a program you can actually talk to! 🤖

---

## 🏆 Today's Achievements

- ✅ You know what an **intent** is — what the user *wants*, not their exact words
- ✅ You built `detect_intent(message)` returning `weather`, `joke`, `fact`, `bye`, or `unknown`
- ✅ You always **lowercase** the message before checking keywords
- ✅ You **routed** intents to the right mock API with a `handle` function
- ✅ You understand why **order of checks** matters and why you always need an **`"unknown"` safety net**

> *"You just built the smartest thing you've ever coded — a program that figures out what a human WANTS and reacts. That's the beating heart of every AI assistant on Earth: read the message, find the intent, call the right service. Next week we give your brain a mouth and ears with a chat loop. See you there, mind-reader!"*
> — BrightByte 🤖🎯

---

## 📚 Homework: Grow the Brain

Extend `detect_intent` so your assistant understands more of what people say.

**Requirements:**
1. Start from the class `detect_intent(message)` with `weather`, `joke`, `fact`, and `bye`
2. Add **2 or more NEW intents** of your own (e.g. `time`, `name`, `help`, `advice`) — each with its own keyword group
3. Keep the `return "unknown"` safety net at the very end
4. Test on **at least 6 messages** and print the message next to its detected intent

**Example run:**
```
'What is the weather?' -> weather
'Tell me a joke' -> joke
'What time is it?' -> time
'Who are you?' -> name
'Goodbye!' -> bye
'blorp' -> unknown
```

**Challenge tiers:**
- ⭐ 2 new intents added, 6 messages tested and printed with their intent
- ⭐⭐ Add a `handle(message)` router that calls a mock API (returning `{"status": ..., "data": ...}`) for at least one of your new intents
- ⭐⭐⭐ Fix an *overlapping keywords* bug on purpose: find a message that matches two intents, then reorder your checks so the RIGHT intent wins — explain your choice in a comment

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You taught a program to understand what people want. Next week, it learns to hold a conversation. 🎯💬*
