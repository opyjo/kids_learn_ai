---
title: "Assembling the Assistant 🤖🔧"
description: "Combine your mock API services, your intent brain, and a chat loop into one working AI-style assistant — BrightBot — that answers about weather, jokes, and facts"
difficulty: "intermediate"
order_index: 6
course_slug: "year2-term-6-apis"
is_premium: false
requires_trinket: true
starter_code: |
  # 🤖 Y2-T6-W6-Assistant — BrightBot, your AI-style assistant
  # Made by: [YOUR NAME]
  # IMPORTANT: Save this Trinket! Next week (Week 7) you PERSONALISE this exact program.

  # --- Part 1: Mock API services (from Weeks 3 & 4) ---
  # Each one returns a dictionary with a "status" and either "data" or "error".
  def get_weather(city):
      # look the city up; return status 200 + data, or status 404 + error
      pass

  def get_joke():
      # return status 200 + data with a "joke"
      pass

  def get_fact():
      # return status 200 + data with a "fact"
      pass

  # --- Part 2: The intent brain (from Week 5) ---
  def detect_intent(message):
      message = message.lower()
      # return "weather" / "joke" / "fact" / "bye" / "unknown"
      pass

  # --- Part 3: The chat loop — wire each intent to a service ---
  def run_assistant():
      print("🤖 Hi! I'm BrightBot. Ask me about the weather, a joke, or a fact! (say bye to leave)")
      chatting = True
      while chatting:
          message = input("You: ")
          intent = detect_intent(message)
          # if intent == "weather": ask which city, call get_weather, CHECK the status, reply
          # elif intent == "joke": call get_joke, reply
          # elif intent == "fact": call get_fact, reply
          # elif intent == "bye": say goodbye and set chatting = False
          # else: say you didn't understand

  # Start the assistant!
  run_assistant()

  # Ready to build? Follow BrightByte, one piece at a time! 🏗️
solution_code: |
  # 🤖 Y2-T6-W6-Assistant — BrightBot, your AI-style assistant
  # Made by: [YOUR NAME]
  # SAVE THIS! Next week (Week 7) you personalise this exact program.

  # --- Part 1: Mock API services (each returns a status + data/error dict) ---
  def get_weather(city):
      city = city.lower().strip()
      forecasts = {
          "accra": {"temp": 31, "sky": "sunny"},
          "lagos": {"temp": 29, "sky": "cloudy"},
          "kumasi": {"temp": 28, "sky": "rainy"},
      }
      if city in forecasts:
          return {
              "status": 200,
              "data": {
                  "city": city.title(),
                  "temp": forecasts[city]["temp"],
                  "sky": forecasts[city]["sky"],
              },
          }
      else:
          return {"status": 404, "error": f"No weather data for '{city}'"}

  def get_joke():
      return {
          "status": 200,
          "data": {"joke": "Why did the programmer quit their job? They didn't get arrays! 😄"},
      }

  def get_fact():
      return {
          "status": 200,
          "data": {"fact": "Octopuses have three hearts! 🐙"},
      }

  # --- Part 2: The intent brain (from Week 5) ---
  def detect_intent(message):
      message = message.lower()
      if "weather" in message:
          return "weather"
      elif "joke" in message:
          return "joke"
      elif "fact" in message:
          return "fact"
      elif "bye" in message or "quit" in message:
          return "bye"
      else:
          return "unknown"

  # --- Part 3: The chat loop — the assistant itself ---
  def run_assistant():
      print("🤖 Hi! I'm BrightBot. Ask me about the weather, a joke, or a fact! (say bye to leave)")
      chatting = True
      while chatting:
          message = input("You: ")
          intent = detect_intent(message)

          if intent == "weather":
              city = input("🤖 Which city? ")
              response = get_weather(city)
              if response["status"] == 200:               # CHECK the status first!
                  data = response["data"]
                  print(f"🤖 In {data['city']} it is {data['temp']}°C and {data['sky']}.")
              else:
                  print(f"🤖 Sorry, I don't have weather for that city. ({response['error']})")

          elif intent == "joke":
              response = get_joke()
              print("🤖", response["data"]["joke"])

          elif intent == "fact":
              response = get_fact()
              print("🤖 Here's a fact:", response["data"]["fact"])

          elif intent == "bye":
              print("🤖 Goodbye! 👋")
              chatting = False

          else:
              print("🤖 Sorry, I didn't understand. Try 'weather', 'joke', or 'fact'.")

  # Start the assistant!
  run_assistant()
class_activities: |
  ## 🏗️ Class Activity: Assemble BrightBot — Live, Together!

  We build the assistant in **four stages**, live on Zoom. After each stage, **run your code** and give a **thumbs up** 👍 when it works. Do NOT rush ahead — we assemble the machine one part at a time.

  > 📁 **First:** create a new Trinket and name it **`Y2-T6-W6-Assistant`**. You KEEP this file — next week you personalise it!

  ### Stage 1 — The Services (⭐⭐)
  Paste in your three mock API services. Each returns a **status + data/error** dict — exactly what you built in Weeks 3 & 4.
  ```python
  def get_weather(city):
      city = city.lower().strip()
      forecasts = {
          "accra": {"temp": 31, "sky": "sunny"},
          "lagos": {"temp": 29, "sky": "cloudy"},
          "kumasi": {"temp": 28, "sky": "rainy"},
      }
      if city in forecasts:
          return {"status": 200, "data": {"city": city.title(),
                                          "temp": forecasts[city]["temp"],
                                          "sky": forecasts[city]["sky"]}}
      else:
          return {"status": 404, "error": f"No weather data for '{city}'"}

  def get_joke():
      return {"status": 200, "data": {"joke": "Why did the programmer quit their job? They didn't get arrays! 😄"}}

  def get_fact():
      return {"status": 200, "data": {"fact": "Octopuses have three hearts! 🐙"}}
  ```
  ✅ **Checkpoint:** run `print(get_weather("Accra"))`. See the status 200 and the data? Thumbs up! 👍

  ### Stage 2 — The Intent Brain (⭐⭐)
  Add `detect_intent` — the part that reads a message and decides what the user wants.
  ```python
  def detect_intent(message):
      message = message.lower()
      if "weather" in message:
          return "weather"
      elif "joke" in message:
          return "joke"
      elif "fact" in message:
          return "fact"
      elif "bye" in message or "quit" in message:
          return "bye"
      else:
          return "unknown"
  ```
  ✅ **Checkpoint:** in the Zoom chat, type what `detect_intent("Tell me a JOKE")` returns. (`"joke"` — because we `.lower()` first!)

  ### Stage 3 — The Chat Loop Skeleton (⭐⭐)
  Add the loop. For now, just detect the intent and print it so we can see the machine ticking.
  ```python
  def run_assistant():
      print("🤖 Hi! I'm BrightBot. Ask me about the weather, a joke, or a fact! (say bye to leave)")
      chatting = True
      while chatting:
          message = input("You: ")
          intent = detect_intent(message)
          print("(intent:", intent, ")")     # temporary — we replace this next
          if intent == "bye":
              print("🤖 Goodbye! 👋")
              chatting = False

  run_assistant()
  ```
  ✅ **Checkpoint:** run it, type a few messages, then type `bye`. Did it **quit cleanly**? Thumbs up! 👍

  ### Stage 4 — Wire Each Intent (⭐⭐⭐)
  Now replace that temporary `print` with the real replies — calling each service, and **checking the status** on weather.
  ```python
          if intent == "weather":
              city = input("🤖 Which city? ")
              response = get_weather(city)
              if response["status"] == 200:
                  data = response["data"]
                  print(f"🤖 In {data['city']} it is {data['temp']}°C and {data['sky']}.")
              else:
                  print(f"🤖 Sorry, I don't have weather for that city. ({response['error']})")
          elif intent == "joke":
              response = get_joke()
              print("🤖", response["data"]["joke"])
          elif intent == "fact":
              response = get_fact()
              print("🤖 Here's a fact:", response["data"]["fact"])
          elif intent == "bye":
              print("🤖 Goodbye! 👋")
              chatting = False
          else:
              print("🤖 Sorry, I didn't understand. Try 'weather', 'joke', or 'fact'.")
  ```
  ✅ **Final checkpoint:** have a full conversation — ask for the weather in Accra, ask for a joke, type something silly, then say `bye`. Everything works AND it quits? 🎉 Thumbs up and **save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Give BrightBot a New Skill

  BrightBot can do three things. Teach it a **fourth**!

  **Requirements:**
  1. Open your **`Y2-T6-W6-Assistant`** Trinket (the one from class)
  2. Write **one new service** function that returns a `{"status": 200, "data": {...}}` dict — e.g. `get_advice()`, `get_compliment()`, or `get_quiz()`
  3. Add a matching branch to **`detect_intent`** (e.g. `elif "advice" in message: return "advice"`)
  4. Add a matching `elif` in the **chat loop** that calls your service and prints the reply
  5. Test that the chat loop **still quits cleanly** when you type `bye`

  **Example new service:**
  ```python
  def get_advice():
      return {"status": 200, "data": {"advice": "Save your work often 💾"}}
  ```
  **Example new intent branch (inside `detect_intent`):**
  ```python
      elif "advice" in message:
          return "advice"
  ```
  **Example new loop branch (inside `run_assistant`):**
  ```python
          elif intent == "advice":
              response = get_advice()
              print("🤖 My advice:", response["data"]["advice"])
  ```

  **Challenge tiers:**
  - ⭐ Add ONE new service + intent + loop branch that works
  - ⭐⭐ Add a `get_quiz()` service that returns a question in its data, then prints it
  - ⭐⭐⭐ Add TWO new skills, and make ONE of them check the status (like weather does) before using the data

  > ⚠️ Remember: keep the `elif intent == "bye":` branch that sets `chatting = False`. If you delete it, your assistant never stops!

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? You Just Built a Mini AI Assistant

  Real AI assistants — the ones on your phone — do exactly what BrightBot does, just on a bigger scale. When you speak to one, three things happen:

  1. It works out **what you want** (your *intent*) — just like your `detect_intent`
  2. It picks the right **tool or API** to answer — just like your `if intent == "weather"` choosing `get_weather`
  3. It reads the **response** and turns it into a friendly reply — just like your f-string print

  That middle step is called **routing** — sending each request to the right tool. You built a real one today!

  > **💬 Zoom chat:** *"If you asked a real assistant 'what's the weather AND tell me a joke', why might that confuse a simple intent brain like ours?"* (Hint: our brain returns only ONE intent per message.)

  Keep this in your pocket — next week you make BrightBot feel more human by giving it a memory and a personality.
---

# Year 2, Lesson 6: Assembling the Assistant 🤖🔧

**Course:** Working with APIs
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

- How to **combine everything** from Weeks 1-5 into one working assistant called **BrightBot**
- How to keep your **mock API services** (weather, joke, fact) together as a toolbox
- How to use your **intent brain** (`detect_intent`) to work out what the user wants
- How to build a **chat loop** with `while` that keeps talking until the user says *bye*
- How to **wire each intent to a service** — and **check the status** before using the data
- You'll finish with a **real, working assistant you can chat with** 🎉

---

## 🤖 BrightByte's Big Assembly

> *"This is the week it all comes together. For five weeks you built the parts: services that return responses, a brain that spots intent, loops, dictionaries, status codes. Today we bolt them together into ONE machine — an assistant you can actually chat with. By the end of this class you'll type 'tell me a joke' and your own program will answer. That's not a toy. That's the same shape as every AI assistant on Earth. Grab your spanner — we're assembling!"*
> — BrightByte 🤖🔧

---

## 🧩 Part 1: The Plan — What Are We Building?

For five weeks you've collected the parts of an assistant. Look how each one snaps into today's build:

| Week | Skill You Learned | Where It Goes in the Assistant |
|---|---|---|
| 1 | Mock APIs (functions that return a response) | The **services**: `get_weather`, `get_joke`, `get_fact` |
| 2 | Reading data out of a response dict | Pulling `data["temp"]`, `data["joke"]` to reply |
| 3 | Building a service that returns `{"status", "data"}` | The service functions themselves |
| 4 | Status codes (200 = OK, 404 = not found) | **Checking the status** before using the data |
| 5 | `detect_intent(message)` | The **intent brain** that decides what to call |

Here's what the finished assistant does, start to finish:

```
🤖 Hi! I'm BrightBot. Ask me about the weather, a joke, or a fact! (say bye to leave)
You: what's the weather?
🤖 Which city? Accra
🤖 In Accra it is 31°C and sunny.
You: tell me a joke
🤖 Why did the programmer quit their job? They didn't get arrays! 😄
You: give me a fact
🤖 Here's a fact: Octopuses have three hearts! 🐙
You: bye
🤖 Goodbye! 👋
```

Three pieces do all the work: **services** (the tools), the **intent brain** (the decider), and the **chat loop** (the conversation). We build them in that order.

> 📁 **BEFORE WE START:** Open Trinket, create a **new** Python trinket, and name it **`Y2-T6-W6-Assistant`**. This is important — next week you extend THIS EXACT file to give BrightBot a memory and personality. Do not delete it!

---

## 🔧 Part 2: Piece 1 — The Mock API Services

An assistant needs **tools** to fetch answers. Ours are three mock API services — exactly the kind you built in Weeks 3 & 4. Each one returns a dictionary with a **`status`** and either **`data`** (when it worked) or **`error`** (when it didn't).

Type these at the top of your file:

```python
def get_weather(city):
    city = city.lower().strip()
    forecasts = {
        "accra": {"temp": 31, "sky": "sunny"},
        "lagos": {"temp": 29, "sky": "cloudy"},
        "kumasi": {"temp": 28, "sky": "rainy"},
    }
    if city in forecasts:
        return {
            "status": 200,
            "data": {
                "city": city.title(),
                "temp": forecasts[city]["temp"],
                "sky": forecasts[city]["sky"],
            },
        }
    else:
        return {"status": 404, "error": f"No weather data for '{city}'"}

def get_joke():
    return {
        "status": 200,
        "data": {"joke": "Why did the programmer quit their job? They didn't get arrays! 😄"},
    }

def get_fact():
    return {
        "status": 200,
        "data": {"fact": "Octopuses have three hearts! 🐙"},
    }
```

### 🔎 Reading `get_weather` line by line

- `city = city.lower().strip()` — tidy the request so `"Accra"`, `"accra "` and `"ACCRA"` all match
- `forecasts` — a little "database" of the cities our service knows about
- `if city in forecasts:` — did the user ask for a city we have?
- **Yes** → return `status 200` and a `data` dictionary with the weather
- **No** → return `status 404` and an `error` message — the service didn't crash, it *reported* the problem

**Test it now:**

```python
print(get_weather("Accra"))
print(get_weather("Paris"))
```

**Output:**
```
{'status': 200, 'data': {'city': 'Accra', 'temp': 31, 'sky': 'sunny'}}
{'status': 404, 'error': "No weather data for 'paris'"}
```

> 💡 `get_joke()` and `get_fact()` always succeed, so they always return `status 200`. Only `get_weather` can "fail" (404) — because it depends on which city you ask for. That's exactly why we must **check the status** on weather later.

✅ **Zoom checkpoint:** run `print(get_weather("Lagos"))`. What's the `status`? Type it in the chat! (200)

---

## 🧠 Part 3: Piece 2 — The Intent Brain

Now the clever part: how does the assistant know *which* service to call? It reads the user's message and works out their **intent** — using `detect_intent` from Week 5. Add this below your services:

```python
def detect_intent(message):
    message = message.lower()
    if "weather" in message:
        return "weather"
    elif "joke" in message:
        return "joke"
    elif "fact" in message:
        return "fact"
    elif "bye" in message or "quit" in message:
        return "bye"
    else:
        return "unknown"
```

### 🔎 Why `message = message.lower()` comes first

People type in all sorts of ways: `"Joke"`, `"JOKE"`, `"tell me a joke please"`. If we didn't lowercase the message first, `"JOKE"` would slip past `"joke" in message` and fall to `unknown`. That one line makes the brain **case-insensitive** — it's the most important line in the function.

**Test it now:**

```python
print(detect_intent("What is the weather like?"))
print(detect_intent("Tell me a JOKE"))
print(detect_intent("blah blah blah"))
```

**Output:**
```
weather
joke
unknown
```

> 💡 Our brain returns **one** intent per message, checking in order from top to bottom. If a message somehow contained both "weather" and "joke", `weather` wins because it's checked first. Simple, predictable, and good enough for BrightBot!

✅ **Zoom checkpoint:** what does `detect_intent("goodBYE")` return, and why? (`"bye"` — because `.lower()` turns it into `"goodbye"`, and `"bye"` is inside it.)

---

## 🔁 Part 4: Piece 3 — The Chat Loop (Skeleton)

A calculator does one thing then stops. An **assistant keeps chatting** until you say goodbye. That means a `while` loop. Let's build the skeleton first — it just detects the intent and prints it, so we can watch the machine tick:

```python
def run_assistant():
    print("🤖 Hi! I'm BrightBot. Ask me about the weather, a joke, or a fact! (say bye to leave)")
    chatting = True
    while chatting:
        message = input("You: ")
        intent = detect_intent(message)
        print("(intent:", intent, ")")      # temporary — we replace this in Part 5
        if intent == "bye":
            print("🤖 Goodbye! 👋")
            chatting = False

run_assistant()
```

### 🔎 How the loop knows when to stop

- `chatting = True` — a **flag** that means "keep going"
- `while chatting:` — repeat as long as the flag is `True`
- when the user says *bye*, we set `chatting = False`
- next time the `while` checks the flag, it's `False`, so the loop **ends** and the program finishes

> ⚠️ **THE #1 ASSISTANT BUG:** if you forget `chatting = False` in the bye branch, the flag stays `True` forever and your assistant **never quits** — an infinite loop! The bye branch is what lets the user escape. Never leave it out.

**Test it now:** run it, type `hello`, type `joke`, then type `bye`.

```
🤖 Hi! I'm BrightBot. Ask me about the weather, a joke, or a fact! (say bye to leave)
You: hello
(intent: unknown )
You: joke
(intent: joke )
You: bye
(intent: bye )
🤖 Goodbye! 👋
```

✅ **Zoom checkpoint:** did your assistant **stop** after `bye`? If it kept asking `You:`, check your `chatting = False` line. Thumbs up when it quits cleanly! 👍

---

## ⚡ Part 5: Wiring Each Intent to a Service

The skeleton detects intents but doesn't *do* anything useful yet. Now we replace that temporary `print("(intent:", intent, ")")` with real replies. Each intent gets its own branch that calls the right service.

### Wire the weather intent (with a status check!)

```python
        if intent == "weather":
            city = input("🤖 Which city? ")
            response = get_weather(city)
            if response["status"] == 200:               # CHECK the status first!
                data = response["data"]
                print(f"🤖 In {data['city']} it is {data['temp']}°C and {data['sky']}.")
            else:
                print(f"🤖 Sorry, I don't have weather for that city. ({response['error']})")
```

This is the most important pattern in the whole lesson. The weather service can **fail** (404 for an unknown city). So we **never** touch `response["data"]` until we've checked `response["status"] == 200`. If the status is anything else, we read `response["error"]` instead — safely.

> ⚠️ If you skip the status check and reach straight for `response["data"]` after a 404, there IS no `"data"` key — you'll get a **`KeyError`** and a crash. Check the status, THEN use the data. Always.

### Wire the joke and fact intents

These services always succeed, so we can read their `data` directly:

```python
        elif intent == "joke":
            response = get_joke()
            print("🤖", response["data"]["joke"])

        elif intent == "fact":
            response = get_fact()
            print("🤖 Here's a fact:", response["data"]["fact"])
```

### Wire the bye and unknown intents

```python
        elif intent == "bye":
            print("🤖 Goodbye! 👋")
            chatting = False

        else:
            print("🤖 Sorry, I didn't understand. Try 'weather', 'joke', or 'fact'.")
```

The `else` catches anything the brain labelled `unknown` — so BrightBot always says *something* polite, even when it's confused. A good assistant never leaves you staring at silence.

✅ **Zoom checkpoint:** ask for the weather in **Paris** (a city we don't have). Does BrightBot say "Sorry, I don't have weather for that city" instead of crashing? That's the status check working! 👍

---

## ✅ Part 6: The Whole Assistant — Run It!

Here is your complete BrightBot. This is what should be in your `Y2-T6-W6-Assistant` Trinket:

```python
# 🤖 Y2-T6-W6-Assistant — BrightBot, your AI-style assistant
# Made by: [YOUR NAME]

# --- Piece 1: Mock API services (status + data/error) ---
def get_weather(city):
    city = city.lower().strip()
    forecasts = {
        "accra": {"temp": 31, "sky": "sunny"},
        "lagos": {"temp": 29, "sky": "cloudy"},
        "kumasi": {"temp": 28, "sky": "rainy"},
    }
    if city in forecasts:
        return {
            "status": 200,
            "data": {
                "city": city.title(),
                "temp": forecasts[city]["temp"],
                "sky": forecasts[city]["sky"],
            },
        }
    else:
        return {"status": 404, "error": f"No weather data for '{city}'"}

def get_joke():
    return {"status": 200,
            "data": {"joke": "Why did the programmer quit their job? They didn't get arrays! 😄"}}

def get_fact():
    return {"status": 200,
            "data": {"fact": "Octopuses have three hearts! 🐙"}}

# --- Piece 2: The intent brain ---
def detect_intent(message):
    message = message.lower()
    if "weather" in message:
        return "weather"
    elif "joke" in message:
        return "joke"
    elif "fact" in message:
        return "fact"
    elif "bye" in message or "quit" in message:
        return "bye"
    else:
        return "unknown"

# --- Piece 3: The chat loop ---
def run_assistant():
    print("🤖 Hi! I'm BrightBot. Ask me about the weather, a joke, or a fact! (say bye to leave)")
    chatting = True
    while chatting:
        message = input("You: ")
        intent = detect_intent(message)

        if intent == "weather":
            city = input("🤖 Which city? ")
            response = get_weather(city)
            if response["status"] == 200:
                data = response["data"]
                print(f"🤖 In {data['city']} it is {data['temp']}°C and {data['sky']}.")
            else:
                print(f"🤖 Sorry, I don't have weather for that city. ({response['error']})")

        elif intent == "joke":
            response = get_joke()
            print("🤖", response["data"]["joke"])

        elif intent == "fact":
            response = get_fact()
            print("🤖 Here's a fact:", response["data"]["fact"])

        elif intent == "bye":
            print("🤖 Goodbye! 👋")
            chatting = False

        else:
            print("🤖 Sorry, I didn't understand. Try 'weather', 'joke', or 'fact'.")

run_assistant()
```

### Try This Conversation

Ama has a full chat with BrightBot — weather, a joke, something silly, then goodbye:

```
🤖 Hi! I'm BrightBot. Ask me about the weather, a joke, or a fact! (say bye to leave)
You: what's the weather?
🤖 Which city? Lagos
🤖 In Lagos it is 29°C and cloudy.
You: tell me a joke
🤖 Why did the programmer quit their job? They didn't get arrays! 😄
You: sing me a song
🤖 Sorry, I didn't understand. Try 'weather', 'joke', or 'fact'.
You: bye
🤖 Goodbye! 👋
```

Kofi asks for a city BrightBot doesn't know — and it stays calm instead of crashing:

```
You: weather please
🤖 Which city? Cairo
🤖 Sorry, I don't have weather for that city. (No weather data for 'cairo')
```

🎉 **You built a working AI-style assistant!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: Using `data` before checking the status (KeyError)**

❌ Wrong — reaching for `data` even when the service returned a 404:
```python
response = get_weather("Paris")
print(response["data"]["temp"])   # there is NO "data" key on a 404!
```
```
KeyError: 'data'
```
😱 The service returned `{"status": 404, "error": ...}` — no `"data"` at all. Crash!

✅ Correct — check the status first, always:
```python
response = get_weather("Paris")
if response["status"] == 200:
    print(response["data"]["temp"])
else:
    print("No weather for that city:", response["error"])
```

> **Golden rule:** a service can fail. Check `response["status"] == 200` BEFORE you touch `response["data"]`.

---

**Mistake 2: The chat loop never quits (infinite loop)**

❌ Wrong — the bye branch forgets to lower the flag:
```python
elif intent == "bye":
    print("🤖 Goodbye! 👋")
    # forgot chatting = False !
```
BrightBot says goodbye... then asks `You:` again, forever. 😵 The only escape is stopping the program manually.

✅ Correct — set the flag to `False` so the `while` ends:
```python
elif intent == "bye":
    print("🤖 Goodbye! 👋")
    chatting = False
```

> `while chatting:` keeps looping while the flag is `True`. Only `chatting = False` can stop it. The bye branch is your exit door — never remove it.

---

**Mistake 3: Case-sensitive intent matching**

❌ Wrong — no `.lower()`, so capitals slip through:
```python
def detect_intent(message):
    if "joke" in message:      # "JOKE" is NOT "joke"!
        return "joke"
    ...
```
```
You: Tell me a JOKE
🤖 Sorry, I didn't understand...
```
😬 The user clearly wanted a joke, but `"joke"` (lowercase) isn't inside `"Tell me a JOKE"`.

✅ Correct — lowercase the message first:
```python
def detect_intent(message):
    message = message.lower()   # now "JOKE" becomes "joke"
    if "joke" in message:
        return "joke"
    ...
```

> Always `message = message.lower()` at the top of `detect_intent`. Users type however they like — your brain must cope.

---

**Mistake 4: Forgetting to call `run_assistant()`**

❌ Wrong — you *defined* the assistant but never started it:
```python
def run_assistant():
    ...
# (nothing happens when you run the file!)
```
The program runs and... does nothing. You built the machine but never switched it on.

✅ Correct — call it at the very bottom:
```python
def run_assistant():
    ...

run_assistant()   # switch it on!
```

---

## 🏗️ Class Activity: Assemble BrightBot — Live, Together!

We build in **four stages**. Run after each stage and thumbs-up in Zoom. 👍

> 📁 **First:** create a new Trinket named **`Y2-T6-W6-Assistant`** — you keep this for next week!

**Stage 1 — The Services (⭐⭐):** paste in `get_weather`, `get_joke`, `get_fact`. Test with `print(get_weather("Accra"))`.

**Stage 2 — The Intent Brain (⭐⭐):** add `detect_intent`. Test with `print(detect_intent("Tell me a JOKE"))` → `joke`.

**Stage 3 — The Chat Loop Skeleton (⭐⭐):** add the `while chatting:` loop that prints the intent and quits on `bye`. Make sure it **stops** when you type `bye`.

**Stage 4 — Wire Each Intent (⭐⭐⭐):** replace the temporary print with real replies — weather (with status check), joke, fact, bye, unknown. Have a full conversation, then say `bye`.

> ✅ **Final checkpoint:** ask for weather in Accra, ask for a joke, type something silly, then `bye`. Everything works AND it quits cleanly? 🎉 Save your Trinket!

---

## 🌟 What's Coming Next Week?

Right now BrightBot is a bit... robotic. It doesn't know who you are, and it says the exact same thing to everyone. Let's fix that!

Next week — **Week 7: AI-Powered Assistant — Personalise It!** — we give BrightBot a *human touch*:

- 👤 It **remembers your name** and greets you by it
- 🎭 It gets a **personality** — a friendly, cheeky, or wise style you choose
- ⭐ It remembers your **favourite city** so you don't retype it every time
- 💬 It gives warmer, more varied replies

> Keep your `Y2-T6-W6-Assistant` Trinket safe — next week we upgrade THIS EXACT program into an assistant that feels like it actually knows you. The week after (Week 8) you showcase it and earn your **API Master Badge** 🏆!

---

## 🏆 Today's Achievements

- ✅ You **assembled** three pieces — services, intent brain, chat loop — into one program
- ✅ You kept your **mock API services** as a toolbox that returns status + data/error
- ✅ You used **`detect_intent`** to route each message to the right service
- ✅ You built a **`while` chat loop** that quits cleanly on *bye*
- ✅ You **checked the status** before using the data — no crashes on unknown cities
- ✅ You have a **real, working AI-style assistant** — BrightBot lives! 🎉

> *"Do you see what you just did? You didn't learn one new trick today — you took SIX weeks of tricks and built a machine out of them. Services, intents, loops, status checks: separate parts last week, one talking assistant today. That's what engineers do — they assemble. Next week we give BrightBot a soul."*
> — BrightByte 🤖🔧

---

## 📚 Homework: Give BrightBot a New Skill

BrightBot can do three things. Teach it a **fourth**!

**Requirements:**
1. Open your **`Y2-T6-W6-Assistant`** Trinket (the one from class)
2. Write **one new service** that returns a `{"status": 200, "data": {...}}` dict — e.g. `get_advice()`, `get_compliment()`, or `get_quiz()`
3. Add a matching branch to **`detect_intent`** (e.g. `elif "advice" in message: return "advice"`)
4. Add a matching `elif` in the **chat loop** that calls your service and prints the reply
5. Test that the chat loop **still quits cleanly** when you type `bye`

**Example new service:**
```python
def get_advice():
    return {"status": 200, "data": {"advice": "Save your work often 💾"}}
```
**Example new intent branch (inside `detect_intent`):**
```python
    elif "advice" in message:
        return "advice"
```
**Example new loop branch (inside `run_assistant`):**
```python
        elif intent == "advice":
            response = get_advice()
            print("🤖 My advice:", response["data"]["advice"])
```

**Challenge tiers:**
- ⭐ Add ONE new service + intent + loop branch that works
- ⭐⭐ Add a `get_quiz()` service that returns a question in its data, then prints it
- ⭐⭐⭐ Add TWO new skills, and make ONE of them check the status (like weather does) before using the data

> ⚠️ Remember: keep the `elif intent == "bye":` branch that sets `chatting = False`. If you delete it, your assistant never stops!

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't just learn to code today — you ASSEMBLED an assistant. Next week, we give BrightBot a personality! 🤖🔧*
