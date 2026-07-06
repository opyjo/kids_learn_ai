---
title: "What Is an API? 🔌📡"
description: "Discover how programs talk to other programs — the request and response cycle — and write your very first mock API in Python"
difficulty: "intermediate"
order_index: 1
course_slug: "year2-term-6-apis"
is_premium: false
requires_trinket: true
starter_code: |
  # 🔌 What Is an API? — Your First Mock API!
  # In real apps, programs ask a SERVER on the internet for data.
  # Trinket can't reach the internet, so today OUR "server" is
  # a Python function that gives back a dictionary. Same idea!

  # Step 1: Here is a tiny mock API. It takes no request and
  # returns a "response" — a dictionary of data.
  def get_fact():
      return {"fact": "Octopuses have three hearts"}

  # Step 2: Call the API (don't forget the brackets!) and store
  # the response.
  response = get_fact()

  # Step 3: Read ONE piece of data out of the response.
  # print(response["fact"])

  # Your turn: uncomment Step 3 and run it. What comes back?
solution_code: |
  # 🔌 What Is an API? — one possible solution

  # A mock API: a function that returns a dictionary "response"
  def get_fact():
      return {"fact": "Octopuses have three hearts"}

  # Call the API and store the response dictionary
  response = get_fact()

  # Read one piece of data out of the response by its key
  print("The API sent back:", response)
  print("Just the fact:", response["fact"])

  # A second mock API that answers a REQUEST
  def get_weather(city):
      return {"city": city, "temp": 24, "sky": "sunny"}

  # Send a request ("Accra"), get a response back
  weather = get_weather("Accra")
  print("It is", weather["temp"], "degrees and", weather["sky"], "in", weather["city"])
class_activities: |
  ## 🎭 Class Activity: Be the API!

  Two activities: first we role-play a request and response with NO computers, then we write and call a real mock API in Trinket.

  ### Part A — "Be the API" Role-Play (⭐)
  Your teacher pairs up the class. One person is the **App** (like a weather app on a phone), the other is the **API** (the server).
  1. The **App** sends a *request* out loud: "get_weather for Accra, please!"
  2. The **API** sends back a *response* out loud: "Here you go: 24 degrees, sunny."
  3. Swap roles and try a different request: `get_joke`, `get_fact`, `get_advice`.

  Post in the **Zoom chat**: one request you sent and the response you got back.

  ### Part B — Write Your First Mock API (⭐⭐)
  In Trinket, write a mock API function that returns a dictionary, then call it:
  1. Write `def get_fact():` that returns `{"fact": "..."}` with your own fun fact
  2. Call it and store the answer in a variable called `response`
  3. Print the whole response, then print just the fact using its key

  ### Part C — An API That Takes a Request (⭐⭐⭐)
  Upgrade your API so it accepts a *request* (a parameter):
  1. Write `def get_weather(city):` that returns a dictionary with the city, a temperature, and the sky
  2. Call it with two different cities (e.g. "Lagos" and "Kumasi")
  3. Print a friendly sentence using the data from each response

  Give a **thumbs up** in Zoom when your mock API responds!
take_home_assignment: |
  ## 📚 Homework: Your Own Mock API Menu

  Build a little collection of mock APIs — Python functions that each return a dictionary "response" — and call them all.

  **Requirements:**
  1. Write **at least 2** mock API functions, e.g. `get_joke()` and `get_advice()`
  2. Each function must **return a dictionary** (not print!) with at least one key
  3. Call each API, store the response, and **print** a piece of data using its key
  4. Add a comment at the top explaining, in your own words, what an API is

  **Example run:**
  ```
  Today's joke: Why did the programmer quit? They didn't get arrays!
  Today's advice: Save your work often 💾
  ```

  **Challenge tiers:**
  - ⭐ 2 mock APIs that each return a dictionary, printed by key
  - ⭐⭐ 3 mock APIs, and one of them takes a *request* (a parameter) like `get_weather(city)`
  - ⭐⭐⭐ Write `get_menu()` that returns a dictionary listing the names of all the other APIs you built — an API that describes your API!

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: How AI Assistants Get Real Information

  When you ask a chatbot "what's the weather in Accra tomorrow?", the AI doesn't magically *know* — it hasn't looked outside! Instead, it **calls an API**: it sends a request to a weather service and reads the response, just like the mock APIs we built today.

  **Discuss in the Zoom chat:** "Name an AI assistant question that would need it to call an API for fresh, real-world data (weather, sports scores, maps...)."

  This is exactly why APIs matter for the assistant you'll build this term: an AI is much more useful when it can *fetch* information from other programs instead of guessing.
---

# Year 2, Lesson 1: What Is an API? 🔌📡

**Course:** Working with APIs
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

- What an **API** really is: how one program talks to another program
- The **request → response** cycle (you ask, you get data back)
- Why an API is like a **menu** — a list of things you're allowed to ask for
- The honest truth: real APIs talk over the **internet**, but Trinket can't — so this term we build **mock APIs** (Python functions that act like a server and return a dictionary)
- How to **write and call** your very first mock API

---

## 🤖 BrightByte Kicks Off Term 6!

> *"Welcome to Term 6 — my favourite! Up to now, your programs have been islands: they only knew what YOU typed into them. This term, your programs learn to TALK — to ask other programs for information and get answers back. That's what an API is. And by Week 8 you'll have built an AI-Powered Assistant that talks to a whole team of them. Let's learn the magic word: REQUEST!"*
> — BrightByte 🤖📡

---

## 🍽️ Part 1: The Big Idea — Ordering at a Restaurant

Imagine you're at a restaurant in Accra. You're hungry, but you can't walk into the kitchen and cook — that's not your job, and you don't know how. So what do you do?

1. You look at the **menu** (the list of things you can ask for)
2. You tell the **waiter** what you want — that's your **request**
3. The waiter takes it to the **kitchen**
4. The kitchen makes your food and sends it back — that's the **response**

You never see *how* the kitchen works. You just send a request and get a response. That is **exactly** how an API works.

> **API** stands for **A**pplication **P**rogramming **I**nterface. Don't worry about the long name. Just remember: **an API lets one program ask another program for something, and get an answer back.**

| Restaurant | API |
|---|---|
| You (the customer) | Your program (the "app") |
| The menu | The list of things you can ask the API for |
| Your order | The **request** |
| The kitchen | The **server** (does the hard work) |
| The food that arrives | The **response** (the data you get back) |

You are the app. The kitchen is the server. You never cook — you just order and receive.

---

## 📡 Part 2: APIs Are Everywhere

You use apps that call APIs every single day, probably without noticing:

- 🌦️ A **weather app** doesn't guess the temperature — it *requests* it from a weather API
- 🗺️ A **maps app** *requests* directions from a maps API
- 🎮 A **game** *requests* the leaderboard from a game API
- 💬 A **chatbot** *requests* an answer from an AI API

None of these apps store all that information themselves. They **ask another program** for it and show you the **response**. That's the whole trick.

> **The pattern is always the same:** send a **request** → wait a moment → get a **response**. Learn this one cycle and you understand APIs.

---

## 🔄 Part 3: The Request → Response Cycle

Every API conversation has two halves:

| Half | What it is | Restaurant version |
|---|---|---|
| **Request** | What your program asks for | "One jollof rice, please" |
| **Response** | The data the API sends back | The plate of jollof arriving |

Sometimes a request is simple — "give me a random fact". Sometimes it carries extra details — "give me the weather **for Accra**". That extra detail ("Accra") is part of the request, so the API knows exactly what to send back.

```
   YOUR PROGRAM                    THE API (server)
        |                                |
        |  ---- request: get_weather("Accra") --->  |
        |                                |
        |  <--- response: {"temp": 24, "sky": "sunny"} ---  |
        |                                |
```

Notice the response came back as a **dictionary** — a set of `key: value` pairs. That's not an accident: APIs almost always answer with structured data like this, because it's easy for a program to read. (Next week we'll meet the real-world version of this, called **JSON**.)

---

## 🧪 Part 4: The Honest Truth — Real APIs vs Our Mock APIs

Here's where we're going to be completely honest with you.

**Real apps call a server somewhere on the internet.** The weather app on a phone sends its request across the world to a computer in a data centre, which sends the response back. That needs a real network connection.

**Trinket cannot reach the internet.** It runs Python safely in your browser with no network access. So it *cannot* make a real request to a real server.

Does that stop us? Not at all. This term we build **mock APIs**.

> A **mock API** is a Python **function** that *behaves* like a server: you call it (send a request), and it **returns a dictionary** (the response). The data is made up by us instead of fetched from the internet — but the *pattern* is identical to the real thing.

| | Real API | Our Mock API (this term) |
|---|---|---|
| What it is | A program on a server, far away | A Python **function** in your file |
| How you send a request | Over the **internet** | By **calling the function** |
| What comes back | A response (usually a dictionary/JSON) | A **returned dictionary** |
| Where the data comes from | A live database | Values **we write** in the function |
| Works in Trinket? | ❌ No (needs the network) | ✅ Yes! |

The skills are the *same*. When you later write real programs on a computer with internet, you'll swap the mock function for a real request — and everything you learned this term still applies. Today we learn the pattern; the internet is just plumbing we add later.

---

## 🔧 Part 5: Your First Mock API

Let's build the smallest possible API — one that hands back a fun fact. Open **Trinket** and name it `Y2-T6-W1-WhatIsAnAPI`.

```python
# A mock API: a function that returns a dictionary "response"
def get_fact():
    return {"fact": "Octopuses have three hearts"}
```

That's the whole "server". Now let's be the app and **send it a request** — by calling the function:

```python
response = get_fact()
print(response)
```

**Output:**
```
{'fact': 'Octopuses have three hearts'}
```

Look closely: the API sent back a **dictionary**. The curly braces `{ }` and the `key: value` pair are the giveaway. Now let's read just the fact out of the response, using its **key**:

```python
response = get_fact()
print(response["fact"])
```

**Output:**
```
Octopuses have three hearts
```

That's the complete cycle: you **called** the API (request), it **returned** a dictionary (response), and you **read a value** out of it by its key. You already know dictionaries from Term 4 — an API response is just a dictionary that came from a function. 🎉

---

## 📨 Part 6: An API That Takes a Request

The `get_fact()` API always gives the same answer. Real APIs usually take a **request detail** so they can answer *your specific* question. In Python, that detail is just a **parameter**:

```python
def get_weather(city):
    return {"city": city, "temp": 24, "sky": "sunny"}

# Send a request FOR Accra:
response = get_weather("Accra")
print("It is", response["temp"], "degrees and", response["sky"], "in", response["city"])
```

**Output:**
```
It is 24 degrees and sunny in Accra
```

Now try a different request — the same API, a different city:

```python
response = get_weather("Lagos")
print(response["city"], "→", response["sky"])
```

**Output:**
```
Lagos → sunny
```

See the pattern? **One API, many requests, a response every time.** The `city` you pass in is your order; the returned dictionary is your food.

---

## 📋 Part 7: The API as a Menu

At a restaurant you can't order just anything — you order from the **menu**. An API is the same: it offers a specific list of things you're allowed to ask for. Here's a mini "menu" of three mock APIs:

```python
def get_fact():
    return {"fact": "Octopuses have three hearts"}

def get_joke():
    return {"joke": "Why did the programmer quit? They didn't get arrays!"}

def get_advice():
    return {"advice": "Save your work often 💾"}

# Order from the menu:
print(get_fact()["fact"])
print(get_joke()["joke"])
print(get_advice()["advice"])
```

**Output:**
```
Octopuses have three hearts
Why did the programmer quit? They didn't get arrays!
Save your work often 💾
```

Three tiny "servers", each waiting for a request, each returning a response. This is the seed of your **AI-Powered Assistant** — an assistant is really just a program that knows which API on the menu to call for each question you ask it.

---

## ⚠️ Common Mistakes

**Mistake 1: Forgetting the `()` to actually call the API**

❌ Wrong:
```python
def get_fact():
    return {"fact": "Octopuses have three hearts"}

response = get_fact      # no brackets!
print(response)
```
```
<function get_fact at 0x7f9a...>
```

😮 You got the *function itself*, not a response! Without `()` you're pointing at the kitchen, not placing an order.

✅ Correct:
```python
response = get_fact()    # brackets = "send the request!"
print(response)
```
```
{'fact': 'Octopuses have three hearts'}
```

---

**Mistake 2: Treating the response like plain text**

The response is a **dictionary**, not a sentence. You can't slice it like a string.

❌ Wrong:
```python
response = get_fact()
print(response[0])       # a dictionary has no position 0!
```
```
KeyError: 0
```

✅ Correct — read it by its **key**:
```python
response = get_fact()
print(response["fact"])
```
```
Octopuses have three hearts
```

---

**Mistake 3: Asking for a key that isn't there**

❌ Wrong:
```python
response = get_weather("Accra")
print(response["temperature"])   # the key is "temp", not "temperature"!
```
```
KeyError: 'temperature'
```

😬 A `KeyError` means "you ordered something that's not on the menu." The API returned `"city"`, `"temp"`, and `"sky"` — those are the only keys you can read.

✅ Correct — check the keys the API actually returns:
```python
response = get_weather("Accra")
print(response["temp"])
```
```
24
```

> **Golden rule:** to read a response, you must know its **keys**. When you build an API, you decide the keys; when you call one, you use exactly those keys.

---

## 🌟 What's Coming Next Week?

This week every response came back as a **dictionary**. Next week we meet **JSON** — the special text format that real APIs across the whole internet use to send dictionaries between programs. Spoiler: it looks *almost identical* to a Python dictionary, which is why we started here!

```python
# This week (a Python dictionary):
{"city": "Accra", "temp": 24}

# Next week you'll learn this is basically JSON — the
# language APIs speak all over the world. 🌍
```

**Week 2: JSON & Dictionaries** — you'll learn to read and build the exact data format real APIs use.

---

## 🏆 Today's Achievements

- ✅ You can explain what an API is (one program asking another for data)
- ✅ You know the **request → response** cycle — you ask, you get data back
- ✅ You understand why we use **mock APIs** in Trinket (no internet — but the same pattern!)
- ✅ You wrote and called your first mock API returning a dictionary
- ✅ You built an API that takes a **request** (a parameter) and read the response by its **key**

> *"Look what just happened — your programs stopped being islands. They can send a request and read a response. That single skill powers weather apps, maps, games, and every AI assistant on Earth. You're not learning a toy version — you're learning the real pattern. See you next week for JSON!"*
> — BrightByte 🤖📡

---

## 📚 Homework: Your Own Mock API Menu

Build a little collection of mock APIs — Python functions that each return a dictionary "response" — and call them all.

**Requirements:**
1. Write **at least 2** mock API functions, e.g. `get_joke()` and `get_advice()`
2. Each function must **return a dictionary** (not print!) with at least one key
3. Call each API, store the response, and **print** a piece of data using its key
4. Add a comment at the top explaining, in your own words, what an API is

**Example run:**
```
Today's joke: Why did the programmer quit? They didn't get arrays!
Today's advice: Save your work often 💾
```

**Challenge tiers:**
- ⭐ 2 mock APIs that each return a dictionary, printed by key
- ⭐⭐ 3 mock APIs, and one of them takes a *request* (a parameter) like `get_weather(city)`
- ⭐⭐⭐ Write `get_menu()` that returns a dictionary listing the names of all the other APIs you built — an API that describes your API!

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You just taught your programs to talk to each other. Term 6 starts NOW! 🔌📡*
