---
title: "Status Codes & Error Handling 🚦❗"
description: "Learn how real APIs report success and failure with status codes (200, 404, 500), upgrade your mock API to send status + data, and write a client that handles every response without ever crashing"
difficulty: "intermediate"
order_index: 4
course_slug: "year2-term-6-apis"
is_premium: false
requires_trinket: true
starter_code: |
  # 🚦 Status Codes & Error Handling
  # Upgrade your weather API so EVERY response carries a status code.

  weather_database = {
      "Lagos": {"temp": 31, "sky": "Sunny"},
      "Accra": {"temp": 29, "sky": "Cloudy"},
      "Dakar": {"temp": 27, "sky": "Windy"},
  }

  def get_weather(city):
      # TODO: if the city IS in the database ->
      #     return {"status": 200, "data": ...the city's weather...}
      # if the city is NOT in the database ->
      #     return {"status": 404, "error": "City not found"}
      pass

  # TODO: write a client that CHECKS the status before using the data
  # response = get_weather("Lagos")
  # if response["status"] == 200:
  #     ... use response["data"] ...
  # else:
  #     ... show response["error"] nicely ...

  # A great program never crashes — not even on a 404! 🚦
solution_code: |
  # 🚦 Status Codes & Error Handling — one possible solution

  # --- THE SERVER (our mock API) ---
  weather_database = {
      "Lagos": {"temp": 31, "sky": "Sunny"},
      "Accra": {"temp": 29, "sky": "Cloudy"},
      "Dakar": {"temp": 27, "sky": "Windy"},
  }

  def get_weather(city):
      if city in weather_database:
          return {"status": 200, "data": weather_database[city]}
      else:
          return {"status": 404, "error": "City not found"}

  # --- THE CLIENT (checks the status BEFORE using the data) ---
  def show_weather(city):
      response = get_weather(city)
      if response["status"] == 200:
          data = response["data"]
          print("✅ Weather for " + city + ":")
          print("   Temperature:", data["temp"], "°C")
          print("   Sky:", data["sky"])
      else:
          print("❌ Sorry, we could not get the weather for " + city + ".")
          print("   (Status " + str(response["status"]) + ": " + response["error"] + ")")

  # --- TRY BOTH PATHS ---
  show_weather("Lagos")       # a city we HAVE  -> 200
  print("-" * 30)
  show_weather("Timbuktu")    # a city we DON'T -> 404
class_activities: |
  ## 🎮 Class Activity: The Status Code Upgrade 🚦

  Your mock weather API works — but right now it just crashes or returns nothing when a city is missing. Time to make it talk like a REAL API: every response gets a **status code**.

  ### Round 1 — Predict the Response (⭐)
  Before running anything, post your guess in the **Zoom chat**. For each call, what `status` should come back?

  ```python
  get_weather("Lagos")     # status = ?
  get_weather("Accra")     # status = ?
  get_weather("Timbuktu")  # status = ?
  ```

  ### Round 2 — Upgrade the Server (⭐⭐)
  1. Change `get_weather(city)` so a **found** city returns `{"status": 200, "data": {...}}`
  2. And a **missing** city returns `{"status": 404, "error": "City not found"}`
  3. Test it by printing the raw response for a real city AND a fake city

  ### Round 3 — Build the Client (⭐⭐⭐)
  Write a `show_weather(city)` function that:
  1. Calls `get_weather(city)` and stores the `response`
  2. Checks `if response["status"] == 200:` and shows the weather nicely
  3. `else:` shows a calm, friendly error message using `response["error"]`
  4. NEVER crashes — try it with `"Dakar"` and with `"Narnia"`

  ### Bonus — What Should Happen on a 404? 💬
  In the Zoom chat: *"If a real weather app can't find your city, what should it show the user?"* Then upgrade your error branch to be as kind and helpful as your best idea.
take_home_assignment: |
  ## 📚 Homework: The Never-Crash Client 🚦❗

  Pick ANY mock service (weather, a joke API, a scores API — your choice) and give it **status codes**, then write a client that handles both success AND failure calmly.

  **Requirements:**
  1. Your service returns `{"status": 200, "data": {...}}` when it CAN answer
  2. It returns `{"status": 404, "error": "..."}` when it CANNOT
  3. Your client CHECKS the status with `if response["status"] == 200:` BEFORE touching the data
  4. On success, it shows the data nicely; on 404, it shows a friendly message — no crash!
  5. Test your client with a request that succeeds AND one that fails

  **Example run:**
  ```
  ✅ Found it! The capital of Ghana is Accra.
  ------------------------------
  ❌ Sorry, we don't have that country yet.
     (Status 404: Country not found)
  ```

  **Challenge tiers:**
  - ⭐ Add status + data/error to your service and print the raw response for one good and one bad request
  - ⭐⭐ Write a client that checks the status and handles both 200 and 404 without crashing
  - ⭐⭐⭐ Add a **500 Server Error** path (e.g. return status 500 if the database is "down") and handle all THREE cases: 200, 404, and 500

  **Submit:** Save your Trinket (name it `Y2-T6-W4-StatusCodes`), click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: How AI Apps Cope When Things Break

  Every AI assistant you use — a chatbot, a homework helper, a voice assistant — is really talking to APIs behind the scenes. And sometimes those APIs fail: the internet drops, a server is busy, or the answer just isn't there.

  A good AI app doesn't panic. It does exactly what YOU learned today:
  - 🔁 **Retries** — "Let me try that again..."
  - 🙏 **Apologises calmly** — "Sorry, I couldn't reach that service right now."
  - 🛟 **Falls back** — offers something useful instead of a scary error

  **Discuss in the Zoom chat:** "Have you ever seen a chatbot or app say something like 'Something went wrong, please try again'? What would happen if it just CRASHED instead?"

  Checking status codes is how professional AI apps stay polite when the world misbehaves — and in Week 6, YOUR assistant will do the same for every service it calls. 🤖
---

# Year 2, Lesson 4: Status Codes & Error Handling 🚦❗

**Course:** Working with APIs
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 4 of 8

---

## 🎯 What You'll Learn Today

- What a **status code** is, and why every real API sends one with every response
- The three you'll meet most: **200 OK**, **404 Not Found**, and **500 Server Error**
- How to upgrade your mock API's response shape to `{"status": 200, "data": {...}}` or `{"status": 404, "error": "..."}`
- The golden rule of a good client: **check the status BEFORE you use the data**
- How to handle success AND failure gracefully — so your program **never crashes** on a bad request
- Why error handling is what separates a toy program from a real app

---

## 🤖 BrightByte Sets the Scene

> *"Last week you built your own mock API — a function that acts like a little server, handing back data when someone asks. Brilliant! But here's the thing real programmers know: sometimes the answer is 'yes, here you go' — and sometimes it's 'sorry, I couldn't find that'. A real API tells you WHICH one, every single time, using a little number called a status code. Today you learn to speak that language — and to write a client that stays calm no matter what comes back. Let's make your API honest, and your program unbreakable."*
> — BrightByte 🤖🚦

---

## 🚦 Part 1: What Is a Status Code?

When you ask an API for something, it doesn't just send back data. It also sends back a tiny number that answers one question: **"How did it go?"**

That number is a **status code**. Think of it like traffic lights for your request:

- 🟢 **Green light** — all good, here's your data
- 🟡 **Careful** — you asked for something odd
- 🔴 **Red light** — something broke

Every time your phone loads a website, checks the weather, or sends a message, status codes are flying back and forth invisibly. You've been using them your whole life without knowing their names. Today you learn them.

> 💡 **Honest moment:** real APIs live on the **internet** — your request travels across the world to a real server and back. Our Trinket versions are *mock* APIs (functions returning dicts) so we can learn the ideas safely offline. But the status codes we use are the **real, actual numbers** the whole web runs on. 🌍

---

## 📋 Part 2: The Common Status Codes

There are dozens of status codes, but you only need a handful to start. Here are the ones you'll meet again and again:

| Code | Nickname | What It Means | Kid-Friendly Translation |
|---|---|---|---|
| **200** | OK | Success! Here is your data | 🟢 *"Yes! Here you go."* |
| **404** | Not Found | The thing you asked for doesn't exist | 🔴 *"I looked, but I can't find that."* |
| **500** | Server Error | The server itself broke | 🔴 *"Oops — something went wrong on MY end, sorry."* |

A quick way to remember the family:

| Range | Meaning | Feeling |
|---|---|---|
| **2xx** (like 200) | Success 🎉 | It worked! |
| **4xx** (like 404) | *You* asked for something wrong 🤔 | Check your request |
| **5xx** (like 500) | *The server* has a problem 💥 | Not your fault |

> **The big difference:** a **404** means *YOU* asked for something that isn't there (like a typo in a city name). A **500** means the *SERVER* messed up — nothing you did wrong. Same "red light", very different cause!

### 💬 Zoom-Chat Warm-Up

> Post in the chat: **you type a city name into a weather app and it says "not found". Which status code did the API most likely send — 200, 404, or 500?**

<details>
<summary>🔎 Click for the answer</summary>

**404 — Not Found.** The server worked perfectly; it just doesn't have that city. (A **500** would mean the weather server itself had crashed.)

</details>

---

## 📦 Part 3: The New Response Shape

Last week your `get_weather` probably returned the weather data directly, like this:

```python
# Last week's shape — just the data
{"temp": 31, "sky": "Sunny"}
```

That works... until the city isn't found. Then what do you return? Nothing? An empty dict? A confusing mess? A **real** API solves this by wrapping every answer in an **envelope** that always carries a status.

**On success — status + data:**

```python
{"status": 200, "data": {"temp": 31, "sky": "Sunny"}}
```

**On failure — status + error:**

```python
{"status": 404, "error": "City not found"}
```

See the pattern? **Every** response has a `"status"`. A `200` also carries `"data"`; a `404` instead carries an `"error"` message explaining what went wrong. The client always knows exactly what it's holding.

> Think of it like a parcel with a label on the outside. The label (`status`) tells you whether to expect a gift (`data`) or a "sorry, we couldn't deliver" note (`error`) inside. You read the label **first**. 📦

---

## 🛠️ Part 4: Upgrading the Server

Let's rebuild `get_weather` so it speaks in status codes. Here's our little city database and the upgraded function:

```python
weather_database = {
    "Lagos": {"temp": 31, "sky": "Sunny"},
    "Accra": {"temp": 29, "sky": "Cloudy"},
    "Dakar": {"temp": 27, "sky": "Windy"},
}

def get_weather(city):
    if city in weather_database:
        return {"status": 200, "data": weather_database[city]}
    else:
        return {"status": 404, "error": "City not found"}
```

Read the logic slowly:
- **`if city in weather_database:`** — do we HAVE this city? If yes, wrap its weather in a `200` envelope with a `"data"` key.
- **`else:`** — we don't have it, so send back a `404` envelope with an `"error"` key instead.

Let's peek at the raw responses:

```python
print(get_weather("Lagos"))
print(get_weather("Timbuktu"))
```

**Output:**
```
{'status': 200, 'data': {'temp': 31, 'sky': 'Sunny'}}
{'status': 404, 'error': 'City not found'}
```

The server is now honest: it tells the truth about both the good request and the bad one. 🚦

---

## 🧑‍💻 Part 5: The Client Must Check the Status FIRST

Here's the golden rule, and it's the whole point of today:

> **A good client ALWAYS checks the status before using the data.**

Why? Because on a `404` there IS no `"data"` key — reaching for it would crash your program (you'll see the exact crash in Common Mistakes). So we look at the label first, then decide what to do.

```python
def show_weather(city):
    response = get_weather(city)
    if response["status"] == 200:
        data = response["data"]
        print("✅ Weather for " + city + ":")
        print("   Temperature:", data["temp"], "°C")
        print("   Sky:", data["sky"])
    else:
        print("❌ Sorry, we could not get the weather for " + city + ".")
        print("   (Status " + str(response["status"]) + ": " + response["error"] + ")")
```

Notice the shape: **one `if` for the happy path (200), one `else` for everything else.** Both paths are handled — so whatever comes back, the program keeps its cool.

### Tracing a request that SUCCEEDS

```python
show_weather("Lagos")
```

`get_weather("Lagos")` returns `{"status": 200, "data": {"temp": 31, "sky": "Sunny"}}`. The status is `200`, so the `if` branch runs:

**Output:**
```
✅ Weather for Lagos:
   Temperature: 31 °C
   Sky: Sunny
```

### Tracing a request that FAILS

```python
show_weather("Timbuktu")
```

`get_weather("Timbuktu")` returns `{"status": 404, "error": "City not found"}`. The status is NOT `200`, so the `else` branch runs — calmly, no crash:

**Output:**
```
❌ Sorry, we could not get the weather for Timbuktu.
   (Status 404: City not found)
```

Same program, two very different requests — and it handled **both** gracefully. That is the mark of a real app. 🌟

---

## 🧩 Part 6: Putting It All Together

Here's the full program — server and client — exactly as you'll build it today:

```python
# --- THE SERVER ---
weather_database = {
    "Lagos": {"temp": 31, "sky": "Sunny"},
    "Accra": {"temp": 29, "sky": "Cloudy"},
    "Dakar": {"temp": 27, "sky": "Windy"},
}

def get_weather(city):
    if city in weather_database:
        return {"status": 200, "data": weather_database[city]}
    else:
        return {"status": 404, "error": "City not found"}

# --- THE CLIENT ---
def show_weather(city):
    response = get_weather(city)
    if response["status"] == 200:
        data = response["data"]
        print("✅ Weather for " + city + ":")
        print("   Temperature:", data["temp"], "°C")
        print("   Sky:", data["sky"])
    else:
        print("❌ Sorry, we could not get the weather for " + city + ".")
        print("   (Status " + str(response["status"]) + ": " + response["error"] + ")")

# --- TRY BOTH PATHS ---
show_weather("Lagos")
print("-" * 30)
show_weather("Timbuktu")
```

**Full output:**
```
✅ Weather for Lagos:
   Temperature: 31 °C
   Sky: Sunny
------------------------------
❌ Sorry, we could not get the weather for Timbuktu.
   (Status 404: City not found)
```

> 🔗 **Callback to Term 1:** remember the "never crash" mindset and `try/except` from the Smart Calculator? Checking the status code is the SAME idea, one level up. Back then we guarded against bad *input*; today we guard against bad *responses*. A pro program expects things to go wrong — and plans for it.

---

## ⚠️ Common Mistakes

**Mistake 1: Using the data without checking the status**

❌ Wrong — grabs `"data"` from a `404` response:
```python
response = get_weather("Timbuktu")   # a city we DON'T have
print("Temperature:", response["data"]["temp"])
```
```
KeyError: 'data'
```

💥 **Crash!** On a `404` there is no `"data"` key — only an `"error"` key. Reaching for `"data"` blows up.

✅ Correct — check the status first:
```python
response = get_weather("Timbuktu")
if response["status"] == 200:
    print("Temperature:", response["data"]["temp"])
else:
    print("Sorry:", response["error"])
```
```
Sorry: City not found
```

---

**Mistake 2: Comparing the status as a string instead of a number**

❌ Wrong — the status is a number, not text:
```python
if response["status"] == "200":   # quotes make it TEXT!
    print("Success!")
else:
    print("Something went wrong")
```
```
Something went wrong
```

Even for a perfectly successful request, this prints the WRONG branch! Why? Because `200` (a number) is **not equal** to `"200"` (text) in Python — they're different types.

✅ Correct — compare number to number, no quotes:
```python
if response["status"] == 200:
    print("Success!")
```

> Say it out loud: *"Status codes are NUMBERS."* `200`, `404`, `500` — never wrap them in quotes.

---

**Mistake 3: Assuming success and forgetting the `else`**

❌ Wrong — only handles the happy path:
```python
response = get_weather(city)
if response["status"] == 200:
    print(response["data"])
# ...and if it's a 404? The program says NOTHING and moves on confused.
```

✅ Correct — always handle the failure path too:
```python
response = get_weather(city)
if response["status"] == 200:
    print(response["data"])
else:
    print("Request failed:", response["error"])
```

> A real program plans for failure. If you only ever write the `if`, you've built something that works **only when everything goes right** — and in the real world, things go wrong all the time (typos, missing data, servers down). The `else` is not optional. 🛡️

---

## 🎮 Class Activity: The Status Code Upgrade 🚦

Turn your mock weather API into one that talks like the real thing — and build a client that never crashes.

### Round 1 — Predict the Response (⭐)
Guess the `status` for each call in the Zoom chat, then check:
```python
get_weather("Lagos")     # status = ?
get_weather("Accra")     # status = ?
get_weather("Timbuktu")  # status = ?
```

### Round 2 — Upgrade the Server (⭐⭐)
Make found cities return `{"status": 200, "data": {...}}` and missing cities return `{"status": 404, "error": "City not found"}`. Print the raw response for a real city AND a fake one.

### Round 3 — Build the Client (⭐⭐⭐)
Write `show_weather(city)` that checks the status first, shows the weather nicely on `200`, and shows a friendly message on `404` — test it with `"Dakar"` and `"Narnia"`, no crashes!

### Bonus — What Should Happen on a 404? 💬
In the chat: *"If a real weather app can't find your city, what should it show?"* Then make your error branch as kind and helpful as the class's best idea.

---

## 🌟 What's Coming Next Week?

Next week is **Week 5 — Chatbot Intents!** 🗨️

So far you've built services that answer specific questions. But how does a chatbot figure out what you're even ASKING for? When you type *"what's the weather?"* versus *"tell me a joke"*, how does it know which service to call?

The answer is **intents** — the chatbot's way of understanding what you *mean*. You'll teach a program to read a message, spot keywords, and decide which of your APIs to fire. It's the brain that connects a human sentence to the right service — and it's the last big piece before you assemble your full **AI-Powered Assistant** in Week 6. Bring today's status-checking skills: your assistant will lean on them hard! 🤖

---

## 🏆 Today's Achievements

- ✅ You learned what a status code is and why every API sends one
- ✅ You met the big three: **200 OK**, **404 Not Found**, **500 Server Error**
- ✅ You upgraded your API to the `{"status": ..., "data"/"error": ...}` shape
- ✅ You wrote a client that **checks the status before using the data**
- ✅ You handled success AND failure gracefully — no crashes on a bad request
- ✅ You connected it all back to the Term 1 "never crash" mindset

> *"Look what you just did — you made your API tell the truth, and your client keep its cool no matter what. THAT is engineering. The programs people trust aren't the ones that work when everything's perfect; they're the ones that stay calm when things go wrong. You're building exactly those. Next week, we teach a chatbot to understand you."*
> — BrightByte 🤖🚦

---

## 📚 Homework: The Never-Crash Client 🚦❗

Pick ANY mock service (weather, jokes, scores — your choice) and give it **status codes**, then write a client that handles both success AND failure calmly.

**Requirements:**
1. Your service returns `{"status": 200, "data": {...}}` when it CAN answer
2. It returns `{"status": 404, "error": "..."}` when it CANNOT
3. Your client CHECKS the status with `if response["status"] == 200:` BEFORE touching the data
4. On success, it shows the data nicely; on 404, it shows a friendly message — no crash!
5. Test your client with a request that succeeds AND one that fails

**Example run:**
```
✅ Found it! The capital of Ghana is Accra.
------------------------------
❌ Sorry, we don't have that country yet.
   (Status 404: Country not found)
```

**Challenge tiers:**
- ⭐ Add status + data/error to your service and print the raw response for one good and one bad request
- ⭐⭐ Write a client that checks the status and handles both 200 and 404 without crashing
- ⭐⭐⭐ Add a **500 Server Error** path (e.g. return status 500 if the database is "down") and handle all THREE cases: 200, 404, and 500

**Submit:** Save your Trinket (name it `Y2-T6-W4-StatusCodes`), click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't just move data around today — you taught your program to expect the unexpected and stay calm. That's what real engineers do. See you next week to give your chatbot a brain! 🚦🐍*
