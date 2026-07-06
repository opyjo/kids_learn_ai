---
title: "JSON & Dictionaries 📦🔑"
description: "Discover that JSON — the format APIs send data in — is really just a Python dictionary in disguise, and learn to safely read values out of nested mock API responses"
difficulty: "intermediate"
order_index: 2
course_slug: "year2-term-6-apis"
is_premium: false
requires_trinket: true
starter_code: |
  # 📦 JSON & Dictionaries — Data Explorer Warm-Up
  # This is a MOCK API response. In real life the internet sends it as
  # JSON text — but JSON is basically a Python dictionary, so here it IS one.

  weather_response = {
      "city": "Accra",
      "country": "Ghana",
      "weather": {
          "temp": 30,
          "condition": "Sunny",
          "humidity": 68
      },
      "forecast": [
          {"day": "Monday", "high": 31, "low": 25},
          {"day": "Tuesday", "high": 29, "low": 24},
          {"day": "Wednesday", "high": 28, "low": 24}
      ]
  }

  # TODO 1: print the city name
  # print( ??? )

  # TODO 2: print the temperature (it's INSIDE "weather")
  # print( ??? )

  # TODO 3: print the FIRST forecast day's name
  # print( ??? )
solution_code: |
  # 📦 JSON & Dictionaries — Data Explorer Solution

  weather_response = {
      "city": "Accra",
      "country": "Ghana",
      "weather": {
          "temp": 30,
          "condition": "Sunny",
          "humidity": 68
      },
      "forecast": [
          {"day": "Monday", "high": 31, "low": 25},
          {"day": "Tuesday", "high": 29, "low": 24},
          {"day": "Wednesday", "high": 28, "low": 24}
      ]
  }

  # TODO 1: the city name — one key, one [ ]
  print(weather_response["city"])            # Accra

  # TODO 2: the temperature — it's NESTED, so we need TWO [ ]
  print(weather_response["weather"]["temp"]) # 30

  # TODO 3: the first forecast day — [0] gets the first item, then ["day"]
  print(weather_response["forecast"][0]["day"])  # Monday

  # A friendly report using f-strings
  city = weather_response["city"]
  temp = weather_response["weather"]["temp"]
  first_day = weather_response["forecast"][0]["day"]
  print(f"In {city} it is {temp}°C. First forecast day: {first_day}.")

  # Safe access with .get() — no crash if the key is missing
  wind = weather_response.get("wind", "not reported")
  print(f"Wind: {wind}")
class_activities: |
  ## 🎮 Class Activity: Data Explorer 🔍

  Your teacher will share a mock API response dict (the Accra weather response in your starter code). You are the **Data Explorer** — your job is to dig specific values out of it.

  Type each answer in Trinket, run it, and give a **thumbs up** in Zoom when your output matches!

  ### Explore 1 — Surface Data (⭐)
  Print the **country**. It's a top-level key, so you only need one `[ ]`.

  ### Explore 2 — Go One Level Deeper (⭐⭐)
  Print the **humidity**. It lives *inside* `"weather"`, so you'll need two `[ ]`.

  ### Explore 3 — Into the List (⭐⭐⭐)
  Print **Tuesday's high temperature**. Tuesday is the *second* item in the `forecast` list. Which index is that?

  > **💬 Zoom chat checkpoint:** *"How do you get Tuesday's high? Type the exact line of code you used."*
  > There's more than one right answer — let's compare!

  ### Bonus Explore
  Use `.get()` to safely ask for a key that does NOT exist (like `"rainfall"`) and print a friendly default message instead of crashing.
take_home_assignment: |
  ## 📚 Homework: Read the Response

  Open the Trinket **Y2-T6-W2-JSON** (link below) — it contains a nested mock API response dict for a city. Your job is to be the Data Explorer.

  **Requirements:**
  1. Write code that extracts and prints **4 or more** specific pieces of data from the response
  2. At least **one** value must be **nested** (needs two `[ ]`, e.g. `response["weather"]["temp"]`)
  3. At least **one** value must come from a **list inside the dict** (e.g. `response["forecast"][0]["day"]`)
  4. Print every piece using **f-strings** in friendly sentences

  **Example run:**
  ```
  📍 City: Lagos, Nigeria
  🌡️ Right now: 31°C and Sunny
  📅 First forecast day: Monday (high 32°C)
  💧 Humidity: 74%
  ```

  **Challenge tiers:**
  - ⭐ Extract and print 4 pieces of data (at least one nested)
  - ⭐⭐ Extract 6 pieces, loop over the whole `forecast` list to print every day
  - ⭐⭐⭐ Use `.get()` for one value and `in` to check a key exists before reading it — so your program never crashes even if a key is missing

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.
ai_activities: |
  ## 🤖 Quick Thought: How AI Uses JSON

  When you ask an AI assistant "what's the weather in Accra?", behind the scenes it often calls a real weather API. That API sends back **JSON** — the exact same `{key: value}` shape you learned today.

  The AI then does what YOU just did: it reads values out of the response (`temp`, `condition`) and turns them into a friendly sentence for you.

  > **💬 Zoom chat:** *"You just did the AI's job by hand. Which key would an assistant read to tell you if it's raining?"*

  Keep this in your pocket — in Week 6 your own assistant will read mock API responses exactly like this.
---

# Year 2, Lesson 2: JSON & Dictionaries 📦🔑

**Course:** Working with APIs
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

- The big secret: **JSON** (the format APIs send data in) is basically a Python **dictionary** in disguise
- How to read data **out** of a response dict: `response["temperature"]`
- How to dig into **nested** data with two brackets: `response["weather"]["temp"]`
- How to grab items from a **list inside a dict**: `response["forecast"][0]`
- How to read data **safely** with `.get()` and check keys exist with `in` — so your program never crashes

---

## 🤖 BrightByte Sets the Scene

> *"Last week you learned an API is like a waiter: you make a REQUEST, you get a RESPONSE. But what does the response actually LOOK like? Real APIs send back something called JSON. Sounds scary, right? Here's the punchline you're going to love: JSON is just a dictionary wearing a disguise. You already know dictionaries. So you already know JSON. Let's pull off the mask!"*
> — BrightByte 🤖📦

---

## 🕵️ Part 1: JSON Is Just a Dictionary in Disguise

When a **real** API sends data across the internet, it sends **text** in a format called **JSON** (say it "JAY-son"). It stands for **J**ava**S**cript **O**bject **N**otation — but forget the fancy name. Look at what it actually looks like:

```
{
  "city": "Accra",
  "temp": 30,
  "condition": "Sunny"
}
```

Look familiar? It should — that is almost **exactly** a Python dictionary! The `{ }`, the `"keys"`, the `: values`, the commas... it's all there.

| JSON (what APIs send) | Python dictionary (what we use) |
|---|---|
| `{ }` object | `{ }` dict |
| `"city": "Accra"` | `"city": "Accra"` |
| `"temp": 30` (number) | `"temp": 30` (int) |
| `[ ... ]` array | `[ ... ]` list |
| `true` / `false` | `True` / `False` |
| `null` | `None` |

> **🔑 The key insight for the whole term:** JSON and a Python dictionary are the *same shape*. There are tiny spelling differences (`true` vs `True`), but the idea is identical: **keys pointing to values.**

### An honest word from BrightByte

> *"Real honesty time: real APIs live on the INTERNET, and they hand you JSON as a big string of text. A program then turns that text into a dictionary. In THIS course we can't use the internet, so our 'APIs' are just Python functions that hand you a dictionary directly. Same shape, same skills — we just skip the internet trip. Everything you learn here works on the real thing later."*
> — BrightByte 🤖

So for us, a mock API response is simply a **dictionary**. Let's learn to read data out of one.

---

## 📦 Part 2: A Realistic Mock Response

Here's a mock weather API response for **Accra, Ghana**. Notice it has a dictionary *inside* it (`weather`) and a *list* inside it (`forecast`). This is what real responses look like — data nested inside data.

```python
weather_response = {
    "city": "Accra",
    "country": "Ghana",
    "weather": {
        "temp": 30,
        "condition": "Sunny",
        "humidity": 68
    },
    "forecast": [
        {"day": "Monday", "high": 31, "low": 25},
        {"day": "Tuesday", "high": 29, "low": 24},
        {"day": "Wednesday", "high": 28, "low": 24}
    ]
}
```

Let's picture it as boxes inside boxes:

```
weather_response 📦
├── "city"    → "Accra"
├── "country" → "Ghana"
├── "weather" 📦  (a dictionary inside the dictionary!)
│     ├── "temp"      → 30
│     ├── "condition" → "Sunny"
│     └── "humidity"  → 68
└── "forecast" 📋  (a LIST of dictionaries!)
      ├── [0] → {"day": "Monday",    "high": 31, "low": 25}
      ├── [1] → {"day": "Tuesday",   "high": 29, "low": 24}
      └── [2] → {"day": "Wednesday", "high": 28, "low": 24}
```

---

## 🔑 Part 3: Reading Data OUT (One Bracket at a Time)

To get a value out of a dictionary, you use the **key** inside square brackets `[ ]`.

### Surface values — one bracket

```python
print(weather_response["city"])      # Accra
print(weather_response["country"])   # Ghana
```

**Output:**
```
Accra
Ghana
```

Simple: `weather_response["city"]` means *"give me the value stored under the key 'city'"*.

### Nested values — TWO brackets

The temperature is not at the top level — it's **inside** the `"weather"` box. So we open one box, then open the box inside it:

```python
print(weather_response["weather"])            # the whole inner dict
print(weather_response["weather"]["temp"])    # just the temp
```

**Output:**
```
{'temp': 30, 'condition': 'Sunny', 'humidity': 68}
30
```

Read it **left to right**:
1. `weather_response["weather"]` → gives you `{'temp': 30, 'condition': 'Sunny', 'humidity': 68}`
2. Then `["temp"]` on THAT → gives you `30`

> **🔑 Rule:** each `[ ]` opens **one** box. To reach a value one level deeper, you need **two** brackets. Two levels deep? Two brackets. It's like a treasure map — one dig per box.

| What you want | Code | Result |
|---|---|---|
| City | `weather_response["city"]` | `Accra` |
| The whole weather box | `weather_response["weather"]` | `{'temp': 30, ...}` |
| Temperature | `weather_response["weather"]["temp"]` | `30` |
| Condition | `weather_response["weather"]["condition"]` | `Sunny` |
| Humidity | `weather_response["weather"]["humidity"]` | `68` |

---

## 📋 Part 4: Lists Inside Dicts (Index, Then Key)

The `forecast` is a **list**. Lists don't use keys — they use **index numbers**, starting at **0**.

```python
print(weather_response["forecast"][0])   # first day (index 0)
print(weather_response["forecast"][1])   # second day (index 1)
```

**Output:**
```
{'day': 'Monday', 'high': 31, 'low': 25}
{'day': 'Tuesday', 'high': 29, 'low': 24}
```

Each item in the list is *itself* a dictionary. So to get the **day name** of the first forecast, you go: dict → key `"forecast"` → index `[0]` → key `"day"`:

```python
print(weather_response["forecast"][0]["day"])    # Monday
print(weather_response["forecast"][0]["high"])    # 31
print(weather_response["forecast"][2]["day"])    # Wednesday
```

**Output:**
```
Monday
31
Wednesday
```

> **🔑 Rule:** use a **key** (`"day"`) to reach into a dictionary, but an **index number** (`[0]`) to reach into a list. Mixing them up is the #1 bug today — watch for it below!

### Looping over the whole forecast

Because `forecast` is a list, we can loop over every day:

```python
for day in weather_response["forecast"]:
    print(f"{day['day']}: high {day['high']}°C, low {day['low']}°C")
```

**Output:**
```
Monday: high 31°C, low 25°C
Tuesday: high 29°C, low 24°C
Wednesday: high 28°C, low 24°C
```

Each time round the loop, `day` is one of the little dictionaries, so `day['day']` and `day['high']` pull its values.

---

## 🛡️ Part 5: Safe Access with `.get()` and `in`

What happens if you ask for a key that isn't there?

```python
print(weather_response["wind"])
```

**💥 CRASH:**
```
KeyError: 'wind'
```

A `KeyError` means *"there is no key with that name in this dictionary."* Real API responses don't always include every key, so we need a **safe** way to ask.

### `.get()` — ask nicely, never crash

`.get("key")` returns the value if the key exists, or `None` (or a default you choose) if it doesn't — **no crash**:

```python
print(weather_response.get("wind"))                 # None
print(weather_response.get("wind", "not reported")) # not reported
print(weather_response.get("city", "unknown"))      # Accra
```

**Output:**
```
None
not reported
Accra
```

### `in` — check before you look

You can also check whether a key exists first:

```python
if "wind" in weather_response:
    print(weather_response["wind"])
else:
    print("No wind data in this response.")
```

**Output:**
```
No wind data in this response.
```

> **🔑 When to use which:** use `[ ]` when you're *sure* the key is there. Use `.get()` or `in` when a key **might** be missing — which is often, with API responses. Your Week 6 assistant will lean on `.get()` a lot!

---

## ⚠️ Common Mistakes

**Mistake 1: Asking for a key that doesn't exist (`KeyError`)**

❌ Wrong:
```python
print(weather_response["temperature"])   # the key is "temp", not "temperature"!
```
```
KeyError: 'temperature'
```

✅ Correct:
```python
print(weather_response["weather"]["temp"])
```
```
30
```

> The key name must match **exactly** — spelling, and it's nested inside `"weather"`.

---

**Mistake 2: Forgetting a nested value needs TWO brackets**

❌ Wrong — trying to grab `temp` from the top level:
```python
print(weather_response["temp"])
```
```
KeyError: 'temp'
```

There's no `"temp"` at the top — it's *inside* `"weather"`.

✅ Correct — open both boxes:
```python
print(weather_response["weather"]["temp"])
```
```
30
```

---

**Mistake 3: Treating a list index as a key (or the reverse)**

❌ Wrong — `forecast` is a **list**, so `"Monday"` is not a key:
```python
print(weather_response["forecast"]["Monday"])
```
```
TypeError: list indices must be integers or slices, not str
```

✅ Correct — use an **index number** for the list, then a key for the dict inside:
```python
print(weather_response["forecast"][0]["day"])
```
```
Monday
```

> **Remember:** dictionaries use `["key"]`, lists use `[0]`. When you see a `[ ... ]` list in the response, count from **0**.

---

## 🎮 Class Activity: Data Explorer 🔍

You are the **Data Explorer**. Using the Accra `weather_response` in your starter code, dig out each value below, run it, and thumbs-up in Zoom when your output matches!

### Explore 1 — Surface Data (⭐)
Print the **country** (`weather_response["country"]`). One bracket only.

### Explore 2 — Go One Level Deeper (⭐⭐)
Print the **humidity**. It's inside `"weather"`, so you need two brackets.

### Explore 3 — Into the List (⭐⭐⭐)
Print **Tuesday's high temperature**. Tuesday is the *second* item — remember, lists start at index `0`, so Tuesday is index `1`!

> **💬 Zoom chat checkpoint:** *"How do you get Tuesday's high? Paste the exact line you used."*
> Answer: `weather_response["forecast"][1]["high"]` → `29`

### Bonus Explore
Use `.get("rainfall", "no rain data")` to safely ask for a key that isn't there, and print the friendly default instead of crashing.

---

## 🌟 What's Coming Next Week?

You've learned to read data **out** of a response. But where do those responses come from? Next week you flip to the other side of the counter!

**Week 3: Build Your Own Mock API 🏗️** — you'll *write* the Python function that returns a response dict. You'll be the waiter AND the kitchen: someone asks for the weather in Lagos, and YOUR function hands back a neatly built response. Everything you read today, you'll now create.

---

## 🏆 Today's Achievements

- ✅ You discovered JSON is just a **dictionary in disguise** — same `{key: value}` shape
- ✅ You read surface values with one bracket: `response["city"]`
- ✅ You dug into **nested** values with two brackets: `response["weather"]["temp"]`
- ✅ You pulled items out of a **list inside a dict**: `response["forecast"][0]["day"]`
- ✅ You learned to read **safely** with `.get()` and `in` — no more crashes on missing keys

> *"You just did the exact job an AI assistant does behind the scenes — reading values out of an API response and turning them into sentences. That's not pretend programming. That's the real thing. Next week you build the response yourself!"*
> — BrightByte 🤖📦

---

## 📚 Homework: Read the Response

Open the Trinket **Y2-T6-W2-JSON** — it has a nested mock API response for a city. Be the Data Explorer.

**Requirements:**
1. Extract and print **4 or more** pieces of data from the response
2. At least **one** value must be **nested** (two `[ ]`, e.g. `response["weather"]["temp"]`)
3. At least **one** value must come from a **list inside the dict** (e.g. `response["forecast"][0]["day"]`)
4. Print every piece using **f-strings** in friendly sentences

**Example run:**
```
📍 City: Lagos, Nigeria
🌡️ Right now: 31°C and Sunny
📅 First forecast day: Monday (high 32°C)
💧 Humidity: 74%
```

**Challenge tiers:**
- ⭐ 4 pieces of data (at least one nested)
- ⭐⭐ 6 pieces, plus loop over the whole `forecast` list to print every day
- ⭐⭐⭐ Use `.get()` for one value and `in` to check a key exists — so it never crashes

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it wherever your teacher asks.

---

*You cracked the JSON disguise — it was a dictionary all along. Next week, you build one yourself! 📦🔑*
