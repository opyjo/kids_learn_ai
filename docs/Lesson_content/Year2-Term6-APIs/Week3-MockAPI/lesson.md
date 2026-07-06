---
title: "Build Your Own Mock API 🏗️📡"
description: "Become the server! Write mock API service functions that take a request and return a response dict — the weather, joke, and fact tools your AI assistant will use later this term"
difficulty: "intermediate"
order_index: 3
course_slug: "year2-term-6-apis"
is_premium: false
requires_trinket: true
starter_code: |
  # 🏗️ Build Your Own Mock API!
  # In Week 2 you READ response dicts. This week you WRITE the service.
  # A mock API is just a function that takes a request and returns a dict.

  # Your job: finish get_weather so it looks a city up in the data
  # and returns a response dict like {"city": ..., "temp": ..., "condition": ...}

  def get_weather(city):
      weather_data = {
          "Accra":   {"temp": 31, "condition": "Sunny"},
          "Lagos":   {"temp": 29, "condition": "Cloudy"},
          "Nairobi": {"temp": 24, "condition": "Rainy"},
      }
      # TODO: if the city is in weather_data, return a response dict
      # TODO: otherwise, return something sensible (a taster of next week!)
      pass

  # The "client" — this is the code that CALLS your service
  response = get_weather("Accra")
  print(response)
solution_code: |
  # 🏗️ Build Your Own Mock API — Week 3 solution
  # THREE mock services (the "server") + a client (the code that calls them).
  # Every service TAKES a request and RETURNS a dict. No internet needed —
  # WE are the server, and our "database" is a dict inside each function.

  # ---------- SERVICE 1: get_weather(city) ----------
  def get_weather(city):
      weather_data = {
          "Accra":   {"temp": 31, "condition": "Sunny"},
          "Lagos":   {"temp": 29, "condition": "Cloudy"},
          "Nairobi": {"temp": 24, "condition": "Rainy"},
      }
      if city in weather_data:
          data = weather_data[city]
          return {"city": city, "temp": data["temp"], "condition": data["condition"]}
      else:
          # Taster of Week 4 error handling — return a dict, never crash
          return {"error": "City not found: " + city}

  # ---------- SERVICE 2: get_joke() ----------
  def get_joke():
      # No request needed — just returns a response dict
      return {
          "setup": "Why do programmers prefer dark mode?",
          "punchline": "Because light attracts bugs!"
      }

  # ---------- SERVICE 3: get_fact(topic) ----------
  def get_fact(topic):
      facts = {
          "space":   "A day on Venus is longer than a whole year on Venus.",
          "animals": "Octopuses have three hearts.",
          "code":    "The first ever computer bug was a real moth!"
      }
      if topic in facts:
          return {"topic": topic, "fact": facts[topic]}
      else:
          return {"error": "No fact for topic: " + topic}

  # ---------- THE CLIENT: code that calls the services ----------
  print("--- Weather Service ---")
  for city in ["Accra", "Lagos", "Timbuktu"]:
      response = get_weather(city)
      if "error" in response:
          print("⚠️  " + response["error"])
      else:
          print(response["city"] + ": " + response["condition"] +
                ", " + str(response["temp"]) + "°C")

  print("\n--- Joke Service ---")
  joke = get_joke()
  print(joke["setup"])
  print(joke["punchline"])

  print("\n--- Fact Service ---")
  fact = get_fact("space")
  if "error" in fact:
      print("⚠️  " + fact["error"])
  else:
      print("Did you know? " + fact["fact"])
class_activities: |
  ## 🏗️ Class Activity: Build the Weather Service Together

  We build ONE service live, step by step. Run each step in Trinket and give a **thumbs up** in Zoom when yours works!

  ### Step 1 — The empty service (⭐)
  Write a function that takes a `city` and returns a fixed dict:
  ```python
  def get_weather(city):
      return {"city": city, "temp": 31, "condition": "Sunny"}

  print(get_weather("Accra"))
  ```
  It ignores the real weather for now — but it already TAKES a request and RETURNS a response dict. That is a mock API!

  ### Step 2 — Add a database (⭐⭐)
  Put a `weather_data` dict inside the function with **Accra, Lagos, and Nairobi**. Look the city up and return its real data. Test all three cities.

  ### Step 3 — Handle the unknown city (⭐⭐⭐)
  Call `get_weather("Timbuktu")` — a city that is NOT in your data. Make the service return `{"error": "City not found: Timbuktu"}` instead of crashing.

  ### Zoom-chat checkpoints
  - After Step 1: paste the dict your service returned.
  - After Step 3: what did your service return for an unknown city?

  ### Bonus
  Add a 4th city to your database and call the service for it. Paste the response in the chat!
take_home_assignment: |
  ## 📚 Homework: Build Your Own Mock API Service

  Invent your OWN mock API service — a function that takes a request and returns a response dict.

  **Pick ONE** (or invent your own):
  - `get_horoscope(sign)` → `{"sign": ..., "message": ...}`
  - `get_pokemon(name)` → `{"name": ..., "type": ..., "power": ...}`
  - `get_country_info(country)` → `{"country": ..., "capital": ..., "language": ...}`

  **Requirements:**
  1. A **service function** that takes a request (a parameter)
  2. An internal **dict** that acts as your "database" — with data for **at least 3 different inputs**
  3. It **returns a dict** on success (the data fields directly)
  4. It handles an **unknown input** by returning `{"error": "..."}` instead of crashing
  5. A **client** section that calls your service for 3 inputs (including one unknown) and prints the response nicely

  **Example run (get_country_info):**
  ```
  Ghana → capital: Accra, language: English
  Kenya → capital: Nairobi, language: Swahili
  ⚠️  Country not found: Narnia
  ```

  **Challenge tiers:**
  - ⭐ One service, 3 inputs, returns a dict
  - ⭐⭐ Handles an unknown input with an `{"error": ...}` dict
  - ⭐⭐⭐ Build TWO services and a client that calls both

  **Submit:** Save your Trinket (`Y2-T6-W3-MockAPI`), click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Thought: How Real Assistants Use Services Like Yours

  When you ask an AI assistant "What's the weather in Lagos?", it doesn't magically know. Behind the scenes it **calls a weather service** — a function very much like your `get_weather(city)` — and reads the response dict that comes back.

  The services you built today (`get_weather`, `get_joke`, `get_fact`) are exactly the kind of **tools** an assistant reaches for. In Weeks 6 and 7 you'll wire these very functions into your own AI-powered assistant.

  **Zoom chat:** name one question you'd want your assistant to answer — what service would it need to call?
---

# Year 2, Lesson 3: Build Your Own Mock API 🏗️📡

**Course:** Working with APIs
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

- What it means to **be the server** — writing the code that answers requests
- How to write a **mock API service**: a function that takes a request and returns a **response dict**
- How to give a service its own tiny **database** (a dict lookup inside the function)
- How to **handle an unknown request** without crashing (a taster of next week!)
- How to write a **client** that calls your services and reads the response with your Week 2 skills

---

## 🤖 BrightByte Sets the Scene

> *"For two weeks you've been the CUSTOMER — sending requests, reading the response dicts that came back. Today we flip the counter. Today YOU stand behind the counter. YOU are the server. When a request comes in, YOUR code decides what response dict goes back out. This is the moment you stop using APIs and start BUILDING them. Aprons on — let's cook."*
> — BrightByte 🤖📡

---

## 🔁 Part 1: Quick Recap — Request → Response Dict

Remember the big idea from Weeks 1 and 2:

```
CLIENT  ──── request ────▶  SERVER
CLIENT  ◀─── response ────  SERVER
```

- A **request** is what the client asks for (e.g. "the weather in Accra").
- A **response** is the data the server sends back — and in our course, the response is always a **dict**.

In Week 2 you got very good at **reading** response dicts:

```python
response = {"city": "Accra", "temp": 31, "condition": "Sunny"}
print(response["city"])       # Accra
print(response["condition"])  # Sunny
```

**Output:**
```
Accra
Sunny
```

But where did that dict come from? A real API fetches it over the **internet** from a computer far away. We can't do that in Trinket — and honestly, we don't need to yet. Instead, **we write a function that RETURNS the dict**. That function IS our server.

> 🧠 **Be honest about it:** a real API talks over the internet to another computer. Ours does not. Our "API" is a plain Python **function** that acts as the server. Same shape, same thinking — no network. We call it a **mock API**.

---

## 🏗️ Part 2: Your First Mock API Service

A mock API service follows one simple rule:

> **TAKE a request (a parameter) → RETURN a response (a dict).**

Here is the smallest possible weather service:

```python
def get_weather(city):
    return {"city": city, "temp": 31, "condition": "Sunny"}

response = get_weather("Accra")
print(response)
```

**Output:**
```
{'city': 'Accra', 'temp': 31, 'condition': 'Sunny'}
```

Look closely — it already does everything an API does in miniature:

| API idea | In our function |
|---|---|
| The request | the `city` parameter |
| The server | the function body |
| The response | the dict we `return` |

It's a bit of a cheat right now — it says "Sunny, 31°C" for **every** city, even Nairobi in the rain! Let's give it a real memory.

---

## 🗄️ Part 3: Giving Your Service a Database

Real servers look answers up in a **database**. Ours will use a **dict** as its database — a lookup table living inside the function:

```python
def get_weather(city):
    weather_data = {
        "Accra":   {"temp": 31, "condition": "Sunny"},
        "Lagos":   {"temp": 29, "condition": "Cloudy"},
        "Nairobi": {"temp": 24, "condition": "Rainy"},
    }
    data = weather_data[city]
    return {"city": city, "temp": data["temp"], "condition": data["condition"]}

print(get_weather("Lagos"))
print(get_weather("Nairobi"))
```

**Output:**
```
{'city': 'Lagos', 'temp': 29, 'condition': 'Cloudy'}
{'city': 'Nairobi', 'temp': 24, 'condition': 'Rainy'}
```

That's a **dict inside a dict**: `weather_data` maps each city to its own little dict of `temp` and `condition`. We look the city up with `weather_data[city]`, then build a clean response dict to send back.

> 📦 **The term's response shape (memorise this!):** every service returns a **dict**, and a **successful** response puts the data fields **directly** in that dict — like `city`, `temp`, `condition`. Next week we'll add a `"status"` field to every response. For now: **data straight in the dict.**

---

## ⚠️ Part 4: What Happens With an Unknown City?

Try asking for a city that isn't in our database:

```python
print(get_weather("Timbuktu"))
```

💥 **CRASH!**

```
KeyError: 'Timbuktu'
```

`weather_data["Timbuktu"]` fails because there's no such key. A real server would never crash just because you asked for something it doesn't have — it sends back a polite "not found" instead. Let's do the same:

```python
def get_weather(city):
    weather_data = {
        "Accra":   {"temp": 31, "condition": "Sunny"},
        "Lagos":   {"temp": 29, "condition": "Cloudy"},
        "Nairobi": {"temp": 24, "condition": "Rainy"},
    }
    if city in weather_data:
        data = weather_data[city]
        return {"city": city, "temp": data["temp"], "condition": data["condition"]}
    else:
        return {"error": "City not found: " + city}

print(get_weather("Accra"))
print(get_weather("Timbuktu"))
```

**Output:**
```
{'city': 'Accra', 'temp': 31, 'condition': 'Sunny'}
{'error': 'City not found: Timbuktu'}
```

Notice: **both** answers are dicts. A good found response has the weather data; a not-found response has an `"error"` key. The service **never crashes** — it always returns a dict the client can read.

> 🍿 **This is just a taster.** Next week (Week 4) is ALL about handling errors properly — with real **status codes** like `200` (OK) and `404` (Not Found). Today we're just planting the seed: *always return a dict, even when something goes wrong.*

---

## 🤣 Part 5: A Second Service — get_joke() (No Request Needed)

Not every service needs a request. A joke service just hands one back:

```python
def get_joke():
    return {
        "setup": "Why do programmers prefer dark mode?",
        "punchline": "Because light attracts bugs!"
    }

joke = get_joke()
print(joke["setup"])
print(joke["punchline"])
```

**Output:**
```
Why do programmers prefer dark mode?
Because light attracts bugs!
```

`get_joke()` has **empty brackets** — no parameter — but it still follows the rule: it **returns a dict**. The client reads two fields out of it, `setup` and `punchline`, exactly like Week 2.

---

## 🔭 Part 6: A Third Service — get_fact(topic)

One more, so you can see the pattern locked in. This one takes a `topic` and looks up a fact:

```python
def get_fact(topic):
    facts = {
        "space":   "A day on Venus is longer than a whole year on Venus.",
        "animals": "Octopuses have three hearts.",
        "code":    "The first ever computer bug was a real moth!"
    }
    if topic in facts:
        return {"topic": topic, "fact": facts[topic]}
    else:
        return {"error": "No fact for topic: " + topic}

fact = get_fact("animals")
print("Did you know? " + fact["fact"])
```

**Output:**
```
Did you know? Octopuses have three hearts.
```

Same recipe as `get_weather`: a dict database, an `if ... in ...` check, a data dict when found, an `{"error": ...}` dict when not. Once you've written one service, you can write ten.

---

## 📞 Part 7: The Client — Code That Calls Your Services

The **client** is the code that sends requests and reads responses. Here it loops through some cities and prints each response nicely:

```python
for city in ["Accra", "Lagos", "Timbuktu"]:
    response = get_weather(city)
    if "error" in response:
        print("⚠️  " + response["error"])
    else:
        print(response["city"] + ": " + response["condition"] +
              ", " + str(response["temp"]) + "°C")
```

**Output:**
```
Accra: Sunny, 31°C
Lagos: Cloudy, 29°C
⚠️  City not found: Timbuktu
```

The trick the client uses is `if "error" in response:` — it checks **whether the response is a good one or an error one** before trying to read the data fields. That single line stops the client from crashing on an error response.

> 🔑 **Server and client are two jobs.** The **service** decides what dict to send. The **client** decides how to read and show it. Today you played both roles.

---

## ⚠️ Common Mistakes

**Mistake 1: Returning a bare value instead of a dict**

❌ Wrong:
```python
def get_weather(city):
    return 31          # just a number!

response = get_weather("Accra")
print(response["temp"])
```
```
TypeError: 'int' object is not subscriptable
```

✅ Correct — always return a **dict**:
```python
def get_weather(city):
    return {"city": city, "temp": 31, "condition": "Sunny"}

response = get_weather("Accra")
print(response["temp"])   # 31
```

> Every service in this course returns a **dict**. If you return a number, string, or list, the client's Week 2 skills (`response["temp"]`) won't work.

---

**Mistake 2: KeyError on an unknown city**

❌ Wrong — no check, so an unknown city crashes:
```python
def get_weather(city):
    weather_data = {"Accra": {"temp": 31, "condition": "Sunny"}}
    data = weather_data[city]      # 💥 crashes for anything else
    return {"city": city, "temp": data["temp"], "condition": data["condition"]}

print(get_weather("Kumasi"))
```
```
KeyError: 'Kumasi'
```

✅ Correct — check first with `if city in weather_data:`:
```python
if city in weather_data:
    data = weather_data[city]
    return {"city": city, "temp": data["temp"], "condition": data["condition"]}
else:
    return {"error": "City not found: " + city}
```

---

**Mistake 3: Forgetting the parameter**

❌ Wrong — the service takes no request:
```python
def get_weather():
    return {"city": "Accra", "temp": 31, "condition": "Sunny"}

print(get_weather("Lagos"))
```
```
TypeError: get_weather() takes 0 positional arguments but 1 was given
```

✅ Correct — the service must **accept the request**:
```python
def get_weather(city):
    ...
```

> A service that can't take a request can only ever give one answer. The parameter is what makes it useful!

---

## 🏗️ Class Activity: Build the Weather Service Together

We build `get_weather` live, in three steps. Run each step in Trinket and **thumbs up** in Zoom when yours works.

**Step 1 (⭐)** — an empty service that returns a fixed dict:
```python
def get_weather(city):
    return {"city": city, "temp": 31, "condition": "Sunny"}

print(get_weather("Accra"))
```

**Step 2 (⭐⭐)** — add a `weather_data` database with Accra, Lagos, Nairobi; look the city up and return its real data. Test all three.

**Step 3 (⭐⭐⭐)** — call `get_weather("Timbuktu")` and make the service return `{"error": "City not found: Timbuktu"}` instead of crashing.

**Zoom-chat checkpoints:**
- After Step 1: paste the dict your service returned.
- After Step 3: what did your service return for the unknown city?

**Bonus:** add a 4th city and call the service for it — paste the response in the chat!

---

## 🌟 What's Coming Next Week?

This week your unknown city returned `{"error": "City not found: Timbuktu"}`. That works — but real servers say it more precisely. When something is missing they send back a **status code**: `404 Not Found`. When all is well: `200 OK`.

Next week — **Week 4: Status Codes & Error Handling** — every response dict grows a `"status"` field, so the client can instantly tell a good answer from a bad one. You'll learn the famous codes (200, 404, 500) and build services that fail *gracefully* every single time. Your services are about to get properly professional. 🛡️

---

## 🏆 Today's Achievements

- ✅ You became the **server** — writing code that answers requests
- ✅ You built a mock API service that **takes a request and returns a dict**
- ✅ You gave a service its own **database** with a dict lookup
- ✅ You handled an **unknown request** without crashing
- ✅ You built **three** services — `get_weather`, `get_joke`, `get_fact`
- ✅ You wrote a **client** that calls services and reads the responses

> *"Two weeks ago you couldn't read a response dict. Today you're the one WRITING them. Those three little services? They're not just an exercise — they're the actual tools your AI assistant will reach for in Weeks 6 and 7. You just built the toolbox. Now go invent a service of your own."*
> — BrightByte 🤖🏗️

---

## 📚 Homework: Build Your Own Mock API Service

Invent your OWN mock API service — a function that takes a request and returns a response dict.

**Pick ONE** (or invent your own): `get_horoscope(sign)`, `get_pokemon(name)`, or `get_country_info(country)`.

**Requirements:**
1. A **service function** that takes a request (a parameter)
2. An internal **dict** "database" with data for **at least 3 different inputs**
3. It **returns a dict** on success (data fields directly)
4. It handles an **unknown input** by returning `{"error": "..."}` instead of crashing
5. A **client** section that calls your service for 3 inputs (including one unknown) and prints the responses nicely

**Challenge tiers:**
- ⭐ One service, 3 inputs, returns a dict
- ⭐⭐ Handles an unknown input with an `{"error": ...}` dict
- ⭐⭐⭐ Build TWO services and a client that calls both

**Submit:** Save your Trinket (`Y2-T6-W3-MockAPI`), click **Share**, copy the link, and paste it wherever your teacher asks.

---

*You're not using the counter anymore — you're standing behind it. See you next week, server-builder! 🏗️📡*
