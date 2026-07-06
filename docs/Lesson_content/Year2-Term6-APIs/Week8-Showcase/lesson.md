---
title: "Assistant Showcase & API Master Badge 🤖🏅"
description: "Term 6 finale — demo your AI-powered assistant live, give peer feedback, ace a fun APIs quiz, earn the API Master Badge, and celebrate finishing Term 6"
difficulty: "intermediate"
order_index: 8
course_slug: "year2-term-6-apis"
is_premium: false
requires_trinket: true
starter_code: |
  # ✅ ASSISTANT DEMO-READY CHECKLIST
  # Before you show your AI-Powered Assistant, tick these off in Trinket:
  #
  # [ ] It RUNS with no red errors, top to bottom
  # [ ] It GREETS the user by name (remembers them in a dict)
  # [ ] At least THREE services work (e.g. weather, joke, fact)
  # [ ] It DETECTS intent — the right service answers the right question
  # [ ] It handles UNKNOWN input politely (never crashes, no KeyError)
  # [ ] It checks a response BEFORE reading data (status / "error" check)
  # [ ] It has PERSONALITY (a name, a greeting, a catchphrase)
  # [ ] You can QUIT cleanly (typing "bye" / "quit" ends it tidily)
  #
  # Open your assistant Trinket now and run it once, top to bottom.
  # If every box is ticked — you're ready to shine on Zoom! 🎤

  print("My AI assistant is demo-ready! 🤖🚀")
solution_code: |
  # 🏅 API MASTER CERTIFICATE — a tiny mock service + a client that reads it
  # This uses EVERYTHING from Term 6: a service that returns a response dict
  # WITH a status code, and a client that checks the status BEFORE reading data.

  # ---------- THE SERVICE (the "server") ----------
  def get_certificate(name):
      # A mock API: takes a request (the name), returns a response DICT.
      if name == "":
          return {"status": 404, "error": "No name given"}
      return {
          "status": 200,
          "name": name,
          "title": "API Master",
          "skills": ["requests", "response dicts", "status codes", "intent"],
          "message": "You can talk to any API in the world now!"
      }

  # ---------- THE CLIENT (code that calls the service) ----------
  name = input("What is your name, API Master? ")
  response = get_certificate(name)

  # ALWAYS check the response before reading the data (the Term 6 golden rule!)
  if response["status"] != 200:
      print("⚠️  Something went wrong:", response["error"])
  else:
      line = "=" * 44
      print()
      print(line)
      print(f"{'🏅 API MASTER CERTIFICATE 🏅':^44}")
      print(line)
      print(f"  Awarded to:  {response['name']}")
      print(f"  Title:       {response['title']}")
      print(f"  Skills:      {', '.join(response['skills'])}")
      print(line)
      print(f"  {response['message']}")
      print(line)
      print()
      print(f"Congratulations, {response['name']}! Term 6 complete. 🎉🤖")
class_activities: |
  ## 🎮 Class Activity: The Grand Assistant Showcase 🎤🤖

  Today is celebration day! Everyone demos the AI-Powered Assistant they assembled over the last two weeks.

  ### Part A — Polish Pit-Stop (⭐)
  Open your assistant and run it once, top to bottom. Tick off the demo-ready checklist in the starter code. Fix anything red before you present — no new features needed, just make it shine.

  ### Part B — "Talk to My Assistant" Demo (⭐⭐)
  When it's your turn:
  1. **Share your screen** on Zoom
  2. **Run** your assistant live
  3. **Let it greet you by name**
  4. **Chat with it** — ask it something that uses at least **two different services**
  5. **Show its personality** — its name, catchphrase, or a fun reply
  6. **Try to break it** — type something silly and show it stays calm
  7. **Quit cleanly** — end the conversation tidily

  ### Part C — Peer Feedback (⭐⭐⭐)
  While each coder demos, the class reacts in the **Zoom chat**:
  - Drop a 🔥 when the assistant does something cool
  - Give **"Two Stars and a Wish"**: two things you liked ⭐⭐ and one kind idea for next time 💡

  ### Part D — Term 6 Quiz Game
  A fast, fun quiz covering the WHOLE term of APIs. Your teacher reads each question; you race to answer in the Zoom chat. No pressure — it's a celebration, not a test!
take_home_assignment: |
  ## 📚 Homework: Your API Master Certificate 🏅

  Choose ONE (or do both if you're buzzing!):

  ### Option A — Certificate Program (recommended)
  Write an **"API Master Certificate"** program in Trinket — a mock service that returns a dict, and a client that reads it and prints your certificate.

  **Requirements:**
  1. A **service function** (e.g. `get_certificate(name)`) that **returns a dict**
  2. The response dict includes a **`"status"`** field (use `200` for success)
  3. A **client** that calls the service and **checks the status BEFORE reading the data**
  4. Print a neat certificate using the response data (use `"=" * 40` for a border)
  5. End with a proud message and an emoji 🎉

  *(See today's solution code for one example you can learn from!)*

  ### Option B — Family Demo
  Show your finished AI assistant to someone at home. Let them chat with it — and try to break it! Then write 3-4 sentences:
  - What did they ask it?
  - Did it crash? (Hopefully not!)
  - What was their reaction?

  **Also (optional, 2 min):** peek at the Term 7 preview below and write down one question you'd love to answer with a **chart or graph**.

  **Submit:** Save your Trinket (`Y2-T6-W8-Showcase`), click **Share**, copy the link (and paste your family notes), and send it wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: You Just Built How Real AI Tools Work

  Look at what your assistant does: it reads what the user asks, works out the **intent**, **calls a service** for the answer, **reads the response dict**, and replies in its own voice.

  Here's the secret: that is *exactly* how the big AI assistants work underneath.
  - **Intent detection** → real assistants figure out what you want before answering
  - **Calling services (APIs)** → they fetch live weather, facts, and news from real APIs over the internet
  - **Reading response data** → they pull the useful fields out of the reply, just like `response["temp"]`
  - **Checking status first** → real apps check a response worked before trusting the data

  The only difference? Their services talk to real computers across the internet, and their intent detection uses AI. The *thinking* is identical to yours.

  **Discuss in the Zoom chat:** "What real-world question would need live data from an API — and what would a chart of that data look like?"

  That last bit is a sneak peek at **Term 7: Data & Visualization**, where you'll turn data into pictures. Every skill from this term is a brick in that wall. 🧱📊
---

# Year 2, Lesson 8: Assistant Showcase & API Master Badge 🤖🏅

**Course:** Working with APIs
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 6 of 8 | **Week:** 8 of 8

---

## 🎯 What You'll Do Today

- **Polish** your AI-Powered Assistant so it's demo-ready — runs, greets by name, doesn't crash
- **Showcase** it live on Zoom: share your screen, chat with it, show a service and its personality
- **Cheer on** your classmates and give kind, useful feedback in the chat
- **Ace** a fun Term 6 quiz covering everything you've learned about APIs
- **Earn** the **API Master Badge** 🏅 — and celebrate finishing Term 6
- **Peek ahead** at Term 7: Data & Visualization, where data becomes pictures!

---

## 🤖 BrightByte Has Something to Say...

> *"STOP. Look at what you did. Eight weeks ago 'API' was just three scary letters. Today you have an AI-POWERED ASSISTANT — it greets you by name, works out what you're asking, calls its own services, reads the response dicts, checks the status codes, and answers with actual personality. That is not beginner work. That is how real AI tools are built. I am SO proud of you. Today we don't learn anything new — today we demo, we celebrate, and you earn a badge you have truly earned. Let's shine. 🏅"*
> — BrightByte 🤖💛

---

## 🤖 Part 1: Polish Pit-Stop — Make Your Assistant Demo-Ready

Before you show anything, let's make sure your assistant shines. **No new features today** — you're just tidying up work you already did over Weeks 6 and 7.

Open your assistant Trinket and run it once, top to bottom. Then check every box:

| ✅ Check | What "good" looks like |
|---|---|
| **It runs** | Click ▶ Run — no red error messages |
| **Greets by name** | It asks your name and remembers it (stored in a dict) |
| **3+ services work** | e.g. weather, joke, and fact all answer correctly |
| **Detects intent** | Asking about weather calls the *weather* service, not the joke one |
| **Handles unknown input** | Type nonsense — it replies politely, no `KeyError` crash |
| **Checks before reading** | It checks `status` / `"error"` *before* reading the data |
| **Has personality** | A name, a greeting, a catchphrase — it feels like *your* assistant |
| **Quits cleanly** | Typing `bye` or `quit` ends the chat tidily |

> 💡 **Quick fixes only.** If something's broken, patch it now — but don't add brand-new features five minutes before your demo. An assistant that *works* beats a fancy one that *crashes*.

**Reminder of your term's toolkit** (you already know all of this!):

```python
# The skills that power your assistant:
user = {"name": ""}                        # remember the user in a dict (W6)
user["name"] = input("Your name? ")        # personalise it

def get_weather(city):                      # a mock API service (W3)
    return {"status": 200, "temp": 31}      # response dict + status code (W4)

response = get_weather("Accra")
if response["status"] == 200:               # check status BEFORE reading (W4)
    print(response["temp"])                 # read the data by key (W2)

if "weather" in message:                    # intent detection (W5)
    print("Let me check the weather...")
```

When every box is ticked, drop a ✅ in the Zoom chat. You're ready to present!

---

## 🎤 Part 2: The Grand Showcase — "Talk to My Assistant"

This is your moment. Here's the simple format every coder follows:

### The Demo Steps

1. **📢 Introduce it** — "Hi, I'm Amara, and this is my assistant, ByteBuddy."
2. **▶ Run it live** — share your screen and click Run
3. **👋 Let it greet you** — show how it remembers your name
4. **💬 Have a real conversation** — ask it things that use **two different services** (e.g. "What's the weather in Lagos?" then "Tell me a joke")
5. **✨ Show off the personality** — its catchphrase, a cheeky reply, its name
6. **🧨 Try to break it** — type something silly and show it stays calm
7. **🙋 Take one question** — a classmate might ask how you built a service

### Demo Confidence Tips

- **You built this — you're the expert.** Nobody knows your assistant better than you.
- **Nervous? That's normal.** Take a breath, say your assistant's name, then run it.
- **Something breaks live?** Say *"ooh, a live bug!"* and stay cool — real programmers debug in front of people all the time.
- **Keep it short.** Two minutes is plenty. Chat with it, don't read every line of code.

> *"You don't have to be perfect. You just have to press Run and talk to the thing you built. The bravest thing a coder does is share their work — and you're all doing it today."*
> — BrightByte 🤖

---

## 💬 Part 3: Cheering Each Other On — Peer Feedback

While each coder demos, the rest of the class makes them feel like a star. We use the **Zoom chat**:

### Drop a 🔥
See something cool? A clever reply, a great personality, an assistant that handles a silly question gracefully? Drop a 🔥 in the chat right away.

### "Two Stars and a Wish" ⭐⭐💡
When someone finishes, give kind, useful feedback:

- ⭐ **Star 1:** something you liked — *"Love that your assistant calls me 'boss'!"*
- ⭐ **Star 2:** another thing you liked — *"Its joke service actually made me laugh!"*
- 💡 **A Wish:** one kind idea — *"Maybe add a service that tells the time next?"*

> **Golden rule of feedback:** be **kind, specific, and helpful**. "It's good" isn't feedback. "I like how your assistant checks the status before it answers" — *that's* feedback. 💛

### Example feedback in the chat

```
Kofi's ByteBot demo 🔥🔥
⭐ It greeted me by name — so friendly!
⭐ The weather AND fact services both worked
💡 Wish: maybe give it a goodbye catchphrase too!
```

---

## 🧠 Part 4: The Term 6 Quiz Game! 🎯

Time for a fun, fast quiz covering the WHOLE term of APIs. Your teacher reads each question — **race to type your answer in the Zoom chat!** No pressure, it's a celebration game. 🎉

**Answer these yourself first, then reveal the key at the bottom.**

1. In the API world, what is a **request** and what is a **response**? Which one does the **client** send, and which one does the **server** send back?

2. We kept saying a JSON response is "just like" a Python data type you already know. **Which one?**

3. Look at this response. How do you get just the temperature out of it?
   ```python
   response = {"city": "Accra", "temp": 31, "condition": "Sunny"}
   ```

4. This response has a dict **inside** a dict. What does `response["main"]["temp"]` give you?
   ```python
   response = {"city": "Lagos", "main": {"temp": 29, "humidity": 80}}
   ```

5. What does the status code **`200`** mean?

6. What does the status code **`404`** mean?

7. **Why** should a client check the status code **before** reading the data fields?

8. What is an **intent**, in an assistant? Give a quick example.

9. What's the difference between a **real API** and the **mock API** we built in this course?

10. Look at this service. What does `get_joke()` return — a string, or a dict?
    ```python
    def get_joke():
        return {"setup": "Why did the coder quit?", "punchline": "No arrays!"}
    ```

11. Why does `input()` matter for an assistant — what does it let the assistant do?

12. **The safety trap!** What is wrong with this client code, and how would you fix it?
    ```python
    response = get_weather("Narnia")   # returns {"status": 404, "error": "Not found"}
    print(response["temp"])
    ```

<details>
<summary>🔑 Click for the Answer Key</summary>

1. A **request** is what the **client** asks for (e.g. "the weather in Accra"). A **response** is the data the **server** sends back. The client sends the request; the server sends the response.
2. A **dictionary (dict)** — key–value pairs, exactly like `{"temp": 31}`. JSON ≈ a Python dict.
3. **`response["temp"]`** → gives `31`. You read a value out of a dict by its **key**.
4. **`29`** — `response["main"]` gives the inner dict `{"temp": 29, "humidity": 80}`, then `["temp"]` reads `29` out of it. You read **nested** data one key at a time.
5. **`200` = OK / success** — the request worked and the data is good to use.
6. **`404` = Not Found** — the server couldn't find what you asked for (e.g. a city that isn't in the database).
7. Because if the request **failed** (like a `404`), the data fields you want **won't be there**. Reading them would crash with a `KeyError`. Checking the status first means you only read the data when it actually exists — so your program never crashes.
8. An **intent** is *what the user wants* — the meaning behind their message. Example: "What's the weather in Accra?" has the intent **weather**, so the assistant calls the weather service. (We detect it with checks like `if "weather" in message:`.)
9. A **real API** talks over the **internet** to another computer to fetch live data. Our **mock API** is just a **Python function** that acts as the server, with its data in a dict — no internet needed. Same shape and thinking, no network.
10. **A dict** — `get_joke()` returns `{"setup": ..., "punchline": ...}`. Every service in this course returns a dict.
11. **`input()` lets the assistant listen to the user** — it captures what the person types so the assistant can detect the intent and reply. Without `input()`, the assistant couldn't have a conversation.
12. It reads `response["temp"]` **without checking the status first**. This response is a `404` with **no `"temp"` key**, so it would crash with a `KeyError`. **Fix:** check the status before reading:
    ```python
    if response["status"] == 200:
        print(response["temp"])
    else:
        print("Sorry, I couldn't find that:", response["error"])
    ```

</details>

> **Scoring the game:** first correct answer in the chat = 🏆, but everyone who answers gets a 👏. It's about celebrating what you know, not winning!

---

## 🏅 Part 5: The API Master Badge Ceremony!

This is the big one. Over eight weeks you went from "what even *is* an API?" to building an AI-powered assistant that calls services, reads response dicts, checks status codes, and detects intent.

**That earns you the API Master Badge.** 🏅

### How the ceremony works

1. Your teacher will call your name.
2. The whole class fills the Zoom chat with 🏅🎉👏.
3. You get to say **one sentence** about the coolest thing your assistant does.
4. Everyone celebrates the next Master!

> 🏅 **What the API Master Badge means:** you can now talk to *any* API in the world. Requests, responses, JSON, status codes, intent — these are the exact building blocks behind every weather app, chatbot, and AI assistant on the planet. You don't just *use* them anymore. You *understand* them.

> *"An API Master. Say it out loud. Eight weeks ago these were mystery letters, and now you've built the very thing they power. Wear this badge with pride — you earned every pixel of it. 🏅🤖"*
> — BrightByte 🤖

---

## ✨ Part 6: Reflection — Your Term 6 Journey

Take a moment. Eight weeks ago "API" was a mystery. Now you've built an assistant that talks, thinks, and answers.

**Share in the Zoom chat:**

- 🌟 **My favourite thing my assistant does is...** *(the service you loved, the personality you gave it, the reply that makes you smile...)*
- 😅 **The trickiest bug I beat was...** *(the KeyError, the intent that fired the wrong service, the crash you finally squashed...)*

Reading each other's reflections reminds us: **everyone hit a tricky bug, and everyone got through it.** That's what coders do. 💪

> *"The trickiest bug? That's the bit where you grew the most. The `KeyError` that took you twenty minutes taught you more than the code that worked first try. Remember that feeling in Term 7 when things get tricky — you've beaten hard before."*
> — BrightByte 🤖

---

## 🌟 What's Coming Next Term

You've finished **Term 6 of 8** in Year 2. Here's the whole adventure — look how much you've done!

| Term | What You'll Master | What You'll Build |
|---|---|---|
| 1 | Python Accelerated ✅ | 🧮 Smart Calculator |
| 2 | Loops & Logic Mastery ✅ | 🕹️ Arcade Game Collection |
| 3 | Functions ✅ | 🗺️ Text Adventure Engine |
| 4 | Data Structures ✅ | 📇 Contact Manager |
| 5 | AI Concepts Deep Dive ✅ | 🔍 AI Investigation Report |
| 6 | Working with APIs ✅ *(done!)* | 🤖 AI-Powered Assistant |
| **7** | **Data & Visualization** | **📊 Data Story Project** |
| 8 | Capstone & Portfolio | 🎓 Your Own Big Project! |

### 📊 Next Up: Term 7 — Data & Visualization

Get ready, because Term 7 turns data into pictures:

- 📈 You'll learn to **read and explore data** — the kind that pours out of APIs like the ones you just mastered
- 🎨 You'll turn numbers into **charts and graphs** that tell a story at a glance
- 📊 You'll build a **Data Story Project** — real data, real visuals, a real story to share

> *"You spent this term GETTING data from services. Next term you make that data SPEAK — you'll turn rows of boring numbers into charts that pop off the screen and tell a story. Your API skills feed straight into it. I can't wait. 📊✨"*
> — BrightByte 🤖

---

## 🏆 Term 6 Achievements — Look How Far You Came!

Over 8 weeks, you learned and mastered:

- ✅ **Week 1:** What an API is — the **request → response** conversation between client and server
- ✅ **Week 2:** **JSON ≈ dicts** — reading response data by key, including nested data
- ✅ **Week 3:** Built your own **mock API services** — functions that take a request and return a response dict
- ✅ **Week 4:** **Status codes & error handling** — `200`, `404`, `500`, and failing gracefully
- ✅ **Week 5:** **Intent detection** — working out what the user actually wants
- ✅ **Weeks 6-7:** Assembled and personalised a complete **AI-Powered Assistant** — a chat loop that remembers the user, calls services, and has personality
- ✅ **Week 8:** Demoed, celebrated, and earned the **API Master Badge** 🏅

**You built an assistant that talks to services, reads their answers, and never crashes. That's how real AI tools work — and you did it. 🎉**

---

## 🎉 A Final Word from BrightByte

> *"Term 6: COMPLETE. You didn't just learn about APIs — you built an assistant that USES them, showed it to the world, cheered each other on, and earned the API Master Badge. That's not just coding, that's building the future. Rest up, feel proud, and I'll see you in Term 7 where we turn data into stories you can SEE. Onwards! 🚀📊"*
> — BrightByte 🤖💛

---

## 📚 Homework: Your API Master Certificate 🏅

Choose ONE (or both if you're buzzing!):

### Option A — Certificate Program (recommended)
Write an **"API Master Certificate"** program in Trinket — a mock service that returns a dict, and a client that reads it and prints your certificate.

**Requirements:**
1. A **service function** (e.g. `get_certificate(name)`) that **returns a dict**
2. The response dict includes a **`"status"`** field (use `200` for success)
3. A **client** that calls the service and **checks the status BEFORE reading the data**
4. Print a neat certificate using the response data (use `"=" * 40` for a border)
5. End with a proud message and an emoji 🎉

*(See today's solution code for one example you can learn from!)*

### Option B — Family Demo
Show your finished AI assistant to someone at home. Let them chat with it — and try to break it! Then write 3-4 sentences: what did they ask, did it crash (hopefully not!), and what was their reaction?

**Also (optional, 2 min):** peek at the Term 7 preview above and write down one question you'd love to answer with a **chart or graph**.

**Submit:** Save your Trinket (`Y2-T6-W8-Showcase`), click **Share**, copy the link, and send it wherever your teacher asks.

---

*You didn't just use APIs, coder — you mastered them. Take a bow, API Master. See you in Term 7! 🤖🏅📊*
