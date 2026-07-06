---
title: "Data Showcase & Data Architect Badge 📇🏅"
description: "Term 4 finale — demo your Contact Manager, give peer feedback, ace a data structures quiz, earn the Data Architect Badge, and celebrate mastering lists and dictionaries"
difficulty: "intermediate"
order_index: 8
course_slug: "year2-term-4-data-structures"
is_premium: false
requires_trinket: true
starter_code: |
  # ✅ DEMO-READY CHECKLIST
  # Before you show your Contact Manager, tick these off in Trinket:
  #
  # [ ] It RUNS with no red errors
  # [ ] The menu appears clearly (Add / View / Search / Delete / Quit)
  # [ ] Add a contact — it appears when you View
  # [ ] Search finds a contact by name
  # [ ] Delete removes the right contact
  # [ ] It does NOT crash when the contact list is EMPTY
  # [ ] It does NOT crash on a bad menu choice (like "banana" or "99")
  # [ ] It QUITS cleanly when you choose the quit option
  #
  # Open your Contact Manager Trinket now and run it once, top to bottom.
  # If every box is ticked — you're ready to shine on Zoom! 🎤

  print("My Contact Manager is demo-ready! 📇")
solution_code: |
  # 🏅 DATA ARCHITECT CERTIFICATE
  # A tiny celebration program that uses EVERYTHING you mastered this term:
  # a LIST of DICTIONARIES, a LOOP, and f-strings.

  # A mini contacts book: a list of dictionaries (records)
  contacts = [
      {"name": "Ama",   "phone": "0201 111 111", "email": "ama@mail.com"},
      {"name": "Kofi",  "phone": "0202 222 222", "email": "kofi@mail.com"},
      {"name": "Zainab", "phone": "0203 333 333", "email": "zainab@mail.com"},
  ]

  name = input("What is your name, Data Architect? ")

  print()
  print("=" * 48)
  print(f"{'DATA ARCHITECT CERTIFICATE':^48}")
  print("=" * 48)
  print(f"  Awarded to: {name}")
  print(f"  Contacts managed: {len(contacts)}")
  print("-" * 48)

  # Loop through the list of dictionaries and print each record
  for position, contact in enumerate(contacts, start=1):
      # Access fields by their KEY inside each dictionary
      print(f"  {position}. {contact['name']:<8} | 📞 {contact['phone']} | ✉️  {contact['email']}")

  print("-" * 48)
  print(f"{'Term 4: Data Structures  📇🏅':^48}")
  print("=" * 48)
  print()
  print(f"Brilliant work, {name}! You think in lists and dictionaries now. 🚀")
class_activities: |
  ## 🎮 Class Activity: The Grand Data Showcase 📇🎤

  Today is celebration day! Everyone demos the Contact Manager they built this term.

  ### Part A — Polish Pit-Stop (⭐)
  Open your Contact Manager and run it once, top to bottom. Tick off the demo-ready checklist in the starter code. Fix anything red before you present — no new features needed, just make it shine.

  ### Part B — Your 2-Minute Demo (⭐⭐)
  When it's your turn:
  1. **Share your screen** on Zoom
  2. **Run** your Contact Manager live
  3. **Add** a contact, **search** for one, and **delete** one
  4. **Explain one feature** you built — e.g. "here's how mine stores each contact as a dictionary"
  5. **Take one question** from a classmate

  ### Part C — Peer Feedback (⭐⭐⭐)
  While each coder demos, the class reacts in the **Zoom chat**:
  - Drop a 🔥 when you see something cool
  - Give **"Two Stars and a Wish"**: two things you liked ⭐⭐ and one kind idea for next time 💡

  ### Part D — Term 4 Data Quiz
  A fast, fun quiz covering the WHOLE term — lists, slicing, sorting, and dictionaries. Your teacher reads each question; you race to answer in the Zoom chat. No pressure — it's a celebration, not a test!
take_home_assignment: |
  ## 📚 Homework: Your Data Architect Trophy 🏅

  Choose ONE (or do both if you're buzzing!):

  ### Option A — Data Architect Certificate (recommended)
  Write a **"Data Architect Certificate"** program in Trinket that celebrates a mini contacts book.

  **Requirements:**
  1. Make a **list of at least 3 dictionaries**, each with `name` and `phone` (add `email` if you like)
  2. Ask the user their name with `input()`
  3. **Loop** through the list and print each contact using an **f-string**
  4. Use `"=" * 40` (or similar) for a neat border
  5. Print how many contacts there are using `len(contacts)`
  6. End with a proud message and an emoji 🎉

  ### Option B — Family Demo
  Show your finished Contact Manager to someone at home. Let them add and search for a contact! Then write 3-4 sentences:
  - What did they try?
  - Did it crash? (Hopefully not!)
  - What did they think?

  **Also (optional, 2 min):** peek at the Term 5 preview below and write down one question you have about **how AI really works**.

  **Submit:** Save your Trinket, click **Share**, copy the link (and paste your family notes), and send it wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: Data Structures Are How AI Remembers Everything

  Look back at your Contact Manager. Each contact is a **dictionary** (`name`, `phone`, `email`), and all of them together make a **list**. That exact shape — a *list of dictionaries* — is how real AI systems store what they know.

  - A chatbot's memory of your conversation? A **list of dictionaries** (each message has a `"role"` and `"content"`).
  - A recommendation app's catalogue? A **list of dictionaries** (each product has a name, price, rating).
  - An AI's training examples? Rows of labelled data — **records**, exactly like your contacts.

  **Discuss in the Zoom chat:** "If you built an AI helper, what would each 'record' need to remember about a person?"

  In **Term 5** you'll open up how AI *really* works on the inside — and every piece of data it thinks about is stored in structures just like the ones you mastered this term. 🧠
---

# Year 2, Lesson 8: Data Showcase & Data Architect Badge 📇🏅

**Course:** Data Structures
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 8 of 8

---

## 🎯 What You'll Do Today

- **Polish** your Contact Manager so it's demo-ready — runs, doesn't crash on an empty list or bad input, quits cleanly
- **Showcase** it live on Zoom: share your screen, add/search/delete a contact, explain a feature you're proud of
- **Cheer on** your classmates and give kind, useful feedback in the chat
- **Ace** a fun Term 4 quiz covering lists, slicing, sorting, and dictionaries
- **Earn** your **Data Architect Badge** 🏅 in a proper ceremony
- **Reflect** on your proudest feature and the trickiest data bug you beat
- **Peek ahead** at Term 5 — where you start uncovering how AI *really* works

---

## 🤖 BrightByte Has Something to Say...

> *"STOP. Look at what you built. Eight weeks ago a 'list' was just a word. Today you store people as dictionaries, keep them in a list, search them, sort them, and manage the whole thing behind a menu — that is a real database, powered by YOU. Programmers get paid to build exactly this. Today we don't learn anything new — today we demo, we celebrate, and you earn a badge you genuinely deserve: the **Data Architect** badge. I am SO proud of you. 🏅"*
> — BrightByte 🤖💛

---

## 📇 Part 1: Polish Pit-Stop — Make It Demo-Ready

Before you show anything, let's make sure your Contact Manager shines. **No new features today** — you're just tidying up work you already did over Weeks 6-7.

Open your Contact Manager Trinket and run it once, top to bottom. Then check every box:

| ✅ Check | What "good" looks like |
|---|---|
| **It runs** | Click ▶ Run — no red error messages |
| **Menu is clear** | The user can see the options (Add, View, Search, Delete, Quit) |
| **Add works** | Add a contact, then View — it's in the list |
| **Search works** | Search a name you added — it finds the right record |
| **Delete works** | Delete a contact — the right one disappears |
| **Empty-list safe** | View or search when the list is empty — friendly message, no crash 🛡️ |
| **Bad-input safe** | Type `banana` or `99` at the menu — friendly message, no crash |
| **Clean quit** | The menu lets you exit tidily |

> 💡 **Quick fixes only.** If something's broken, patch it now — but don't add brand-new features five minutes before your demo. A Contact Manager that *works* beats a fancy one that *crashes*.

**Reminder of your term's toolkit** (you already know all of this!):

```python
# The skills that power your Contact Manager:
contacts = []                                   # a LIST holds all contacts (Week 1)

new_contact = {"name": "Ama", "phone": "0201"}  # each contact is a DICTIONARY (Week 4)
contacts.append(new_contact)                    # append adds to the END of the list

for contact in contacts:                        # loop through the records (Week 5)
    print(contact["name"], contact["phone"])    # read a field by its KEY

if len(contacts) == 0:                          # empty-list guard 🛡️
    print("No contacts yet!")
```

When every box is ticked, drop a ✅ in the Zoom chat. You're ready to present!

---

## 🎤 Part 2: The Grand Showcase — How to Demo on Zoom

This is your moment. Here's the simple, 2-minute format every coder follows:

### The 5-Step Demo

1. **📢 Introduce it** — "Hi, I'm Amara. This is my Contact Manager."
2. **▶ Run it live** — share your screen and click Run
3. **📇 Do three actions** — **add** a contact, **search** for one, and **delete** one
4. **⭐ Explain ONE feature you're proud of** — for example:
   - *"Each contact is a dictionary with a name, phone, and email key."*
   - *"Watch — if I search the empty list, it doesn't crash, it tells me it's empty."*
   - *"My search loops through the whole list and checks each record's name."*
5. **🙋 Take one question** — a classmate might ask how you built something

### Demo Confidence Tips

- **You built this — you're the expert.** Nobody knows your code better than you.
- **Nervous? That's normal.** Take a breath, read your menu out loud, then run it.
- **Something breaks live?** Say *"ooh, a live bug!"* and stay cool — real programmers debug in front of people all the time. It's part of the fun.
- **Keep it short.** Two minutes is plenty. Show, don't read every line.

> *"You don't have to be perfect. You just have to press Run and be proud. The bravest thing a coder does is share their work — and you're all doing it today."*
> — BrightByte 🤖

---

## 💬 Part 3: Cheering Each Other On — Peer Feedback

While each coder demos, the rest of the class makes them feel like a star. We use the **Zoom chat**:

### Drop a 🔥
See something cool? A clever menu, a neat search, a great "contact not found" message? Drop a 🔥 in the chat right away.

### "Two Stars and a Wish" ⭐⭐💡
When someone finishes, give kind, useful feedback:

- ⭐ **Star 1:** something you liked — *"Love how you store an email as well as a phone!"*
- ⭐ **Star 2:** another thing you liked — *"Your search is so fast and clear!"*
- 💡 **A Wish:** one kind idea — *"Maybe let it sort contacts by name next time?"*

> **Golden rule of feedback:** be **kind, specific, and helpful**. "It's good" isn't feedback. "I like how your delete asks 'are you sure?' first" — *that's* feedback. 💛

### Example feedback in the chat

```
Kofi's demo 🔥🔥
⭐ The way each contact shows name + phone + email is so tidy
⭐ Loved that searching an empty list didn't crash
💡 Wish: maybe add an "edit contact" option next term!
```

---

## 🧠 Part 4: The Term 4 Data Quiz! 🎯

Time for a fun, fast quiz covering the WHOLE term — lists, slicing, sorting, and dictionaries. Your teacher reads each question — **race to type your answer in the Zoom chat!** No pressure, it's a celebration game. 🎉

**Answer these yourself first, then reveal the key at the bottom.**

1. What is the value of `["a", "b", "c"][0]`?

2. What is the value of `[10, 20, 30][-1]`?

3. What does this slice give you?
   ```python
   print([1, 2, 3, 4][1:3])
   ```

4. `nums = [5, 6, 7]`. After `nums.append(8)`, what is `nums`?

5. What is the difference between `list.append(x)` and `list.insert(0, x)`?

6. What does this print?
   ```python
   nums = [3, 1, 2]
   result = nums.sort()
   print(result)
   ```

7. What does `sorted([3, 1, 2])` return, and does it change the original list?

8. `person = {"name": "Ama", "age": 12}`. What does `person["name"]` give you?

9. Using the same `person` above, what happens when you run `person["email"]`?

10. What does `.items()` let you do in a `for` loop over a dictionary?

11. `people = [{"name": "Kofi"}, {"name": "Zara"}]`. What does `people[1]["name"]` give you?

12. **The `in` trap!** For each line, is it `True` or `False`?
    ```python
    print("name" in {"name": "Ama", "age": 12})
    print("Ama"  in {"name": "Ama", "age": 12})
    print(20     in [10, 20, 30])
    ```

<details>
<summary>🔑 Click for the Answer Key</summary>

1. **`"a"`** — index `0` is the FIRST item (Python counts from 0).
2. **`30`** — index `-1` means the LAST item; negative indexes count from the end.
3. **`[2, 3]`** — a slice `[1:3]` starts at index 1 and STOPS *before* index 3 (the stop is excluded).
4. **`[5, 6, 7, 8]`** — `.append()` adds the item to the END of the list.
5. **`.append(x)` adds to the END; `.insert(0, x)` puts `x` at the FRONT (index 0)** and shifts everything else along.
6. **`None`** — `.sort()` sorts the list *in place* and returns `None`. (The list `nums` is now `[1, 2, 3]`, but `result` is `None`.)
7. **`sorted([3, 1, 2])` returns a NEW list `[1, 2, 3]`** and leaves the original list unchanged. (`.sort()` changes in place; `sorted()` gives back a fresh sorted copy.)
8. **`"Ama"`** — you read a dictionary value by its KEY, using square brackets.
9. **`KeyError`** — there is no `"email"` key, so `person["email"]` crashes with a `KeyError`. (Use `person.get("email")` to safely get `None` instead, or check `"email" in person` first.)
10. **It gives you the KEY and the VALUE together** on each loop, e.g. `for key, value in person.items():` lets you use both at once.
11. **`"Zara"`** — `people[1]` is the second dictionary `{"name": "Zara"}`, and `["name"]` reads its `name` value.
12. **`True`, `False`, `True`.** For a dictionary, `in` checks the **keys** — `"name"` is a key (True) but `"Ama"` is a *value*, not a key (False). For a list, `in` checks **membership** — `20` is in the list (True).

</details>

> **Scoring the game:** first correct answer in the chat = 🏆, but everyone who answers gets a 👏. It's about celebrating what you know, not winning!

---

## 🏅 Part 5: The Data Architect Badge Ceremony!

This is the big one. Term 4 awards a badge you have truly earned: the **Data Architect Badge**. 🏅

An *architect* designs and builds structures. You spent this term designing structures for **data** — deciding what shape information should take, then building a real tool around it. That's exactly what the badge celebrates.

### What earning it means

- ✅ You can store many items in a **list** and reach any one by its index (including negative!)
- ✅ You can **slice** a list to grab just the part you need
- ✅ You can **search, sort, and summarise** lists
- ✅ You can store labelled information in a **dictionary** and read it by key
- ✅ You can combine them into a **list of dictionaries** — the shape real apps use for records
- ✅ You built a complete, menu-driven **Contact Manager** that doesn't crash

### The ceremony 🎉

When your teacher calls your name:
1. Turn your **camera on** if you can
2. The class drops a **🏅 and a 👏** in the Zoom chat for you
3. Say (or type) **one thing you're proud you can now do with data**

> *"Badges aren't handed out for turning up — they're earned. You designed data structures and built a working database on top of them. Wear this one with pride, Data Architect. 🏅"*
> — BrightByte 🤖💛

---

## ✨ Part 6: Reflection — Your Term 4 Journey

Take a moment. Eight weeks ago, a list was just a row of things. Now you build tools that store, search, and organise real information.

**Share in the Zoom chat:**

- 🌟 **My proudest feature was...** *(the search? the delete? the tidy way you print each contact?)*
- 😅 **The trickiest data bug I beat was...** *(a `KeyError`? forgetting `.sort()` returns `None`? an off-by-one slice? searching an empty list?)*

Reading each other's reflections reminds us: **everyone hit a data bug, and everyone got through it.** That's what coders do. 💪

> *"The `KeyError` that stumped you for ten minutes? That taught you more about dictionaries than any slide ever could. Remember that feeling next term — when AI gets tricky, you already know how to beat a hard bug."*
> — BrightByte 🤖

---

## 🌟 What's Coming Next Term

You've finished **Term 4 of 8** in Year 2 — you're halfway through the adventure! Here's the whole journey, with everything you've conquered so far:

| Term | What You'll Master | What You'll Build |
|---|---|---|
| 1 | Python Accelerated ✅ | 🧮 Smart Calculator |
| 2 | Loops & Logic Mastery ✅ | 🕹️ Arcade Game Collection |
| 3 | Functions ✅ | 🗺️ Text Adventure Engine |
| 4 | Data Structures ✅ *(done!)* | 📇 Contact Manager |
| **5** | **AI Concepts Deep Dive** | **🔍 AI Investigation Report** |
| 6 | Working with APIs | 🤖 AI-Powered Assistant |
| 7 | Data & Visualization | 📊 Data Story Project |
| 8 | Capstone & Portfolio | 🎓 Your Own Big Project! |

### 🔍 Next Up: Term 5 — AI Concepts Deep Dive

Something changes next term. Up to now, Year 2 has been about becoming a strong programmer. **Term 5 is where it gets about AI itself** — how the tools you use every day actually think.

- 🧠 You'll uncover **how AI really works** on the inside — how it learns from data and makes predictions
- 📊 You'll see why **data structures** (yes, the lists and dictionaries you just mastered!) are how AI stores everything it knows
- 🔍 You'll investigate real AI and write your own **AI Investigation Report**

> *"You just learned how to *store* information the way computers do. Next term you learn how machines *think* about that information to make decisions. Everything you built this term is the foundation AI is built on. Get ready — this is the part you've been waiting for. 🔍🧠"*
> — BrightByte 🤖

---

## 🏆 Term 4 Achievements — Look How Far You Came!

Over 8 weeks, you learned and mastered:

- ✅ **Week 1:** Lists levelled up — indexing (including negative), adding, and changing items
- ✅ **Week 2:** Slicing — grabbing a section of a list with `[start:stop]` (stop excluded!)
- ✅ **Week 3:** Searching, sorting (`sort` vs `sorted`), and aggregates (`len`, `sum`, `max`, `min`)
- ✅ **Week 4:** Dictionaries — storing labelled data and reading it by key
- ✅ **Week 5:** Looping through dictionaries with `.items()`, `.keys()`, and `.values()`
- ✅ **Weeks 6-7:** Built a complete, menu-driven **Contact Manager** using a **list of dictionaries**
- ✅ **Week 8:** Polished, demoed, and celebrated a real data tool — and earned the **Data Architect Badge** 🏅

**You designed data structures and built a real database on top of them. That's genuine software engineering — and you did it. 🎉**

---

## 🎉 A Final Word from BrightByte

> *"Term 4: COMPLETE. You didn't just learn about lists and dictionaries — you used them to build a tool that stores, searches, and organises real people. You demoed it, you cheered each other on, and you earned the Data Architect Badge. That's the whole package. Rest up, feel proud, and I'll see you in Term 5 — where we finally crack open how AI really thinks. Onwards! 🚀🔍"*
> — BrightByte 🤖💛

---

## 📚 Homework: Your Data Architect Trophy 🏅

Choose ONE (or both if you're buzzing!):

### Option A — Data Architect Certificate (recommended)
Write a **"Data Architect Certificate"** program in Trinket that celebrates a mini contacts book.

**Requirements:**
1. Make a **list of at least 3 dictionaries**, each with `name` and `phone` (add `email` if you like)
2. Ask the user their name with `input()`
3. **Loop** through the list and print each contact using an **f-string**
4. Use `"=" * 40` (or similar) for a neat border
5. Print how many contacts there are using `len(contacts)`
6. End with a proud message and an emoji 🎉

*(See today's solution code for one example you can learn from!)*

### Option B — Family Demo
Show your finished Contact Manager to someone at home. Let them add and search for a contact! Then write 3-4 sentences: what did they try, did it crash (hopefully not!), and what did they think?

**Also (optional, 2 min):** peek at the Term 5 preview above and write down one question you have about **how AI really works**.

**Submit:** Save your Trinket, click **Share**, copy the link, and send it wherever your teacher asks.

---

*You finished Term 4 and earned your Data Architect Badge, coder. Take a bow — you earned it. See you in Term 5, where we uncover how AI really thinks! 📇🏅🚀*
