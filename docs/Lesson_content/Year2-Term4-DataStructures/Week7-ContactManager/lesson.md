---
title: "Project: Contact Manager 📇🛠️"
description: "Build a complete, menu-driven Contact Manager from scratch — a list of dictionaries that lets you add, view, search, and delete contacts, all wrapped in functions and a crash-proof while loop"
difficulty: "intermediate"
order_index: 7
course_slug: "year2-term-4-data-structures"
is_premium: false
requires_trinket: true
starter_code: |
  # 📇 Y2-T4-W7-ContactManager
  # Made by: [YOUR NAME]
  # We build this together, function by function, live on Zoom!

  # Our data store: a list of dictionaries.
  # Each contact is a dict: {"name": ..., "phone": ..., "email": ...}
  contacts = []

  def add_contact():
      # TODO: ask for name, phone, email, then append a dict to contacts
      pass

  def view_contacts():
      # TODO: if empty say so; otherwise loop and print each contact
      pass

  def search_contacts():
      # TODO: ask for a name, loop and print any that match
      pass

  def delete_contact():
      # TODO: ask for a name, find it, remove it, then return
      pass

  def main():
      running = True
      while running:
          print("=" * 32)
          print("     📇 CONTACT MANAGER 📇")
          print("=" * 32)
          print("  1. Add contact")
          print("  2. View contacts")
          print("  3. Search contacts")
          print("  4. Delete contact")
          print("  5. Quit")
          print("=" * 32)
          choice = input("Choose (1-5): ")
          # TODO: call the right function for each choice

  main()
solution_code: |
  # 📇 Y2-T4-W7-ContactManager — the FULL Contact Manager
  # Made by: [YOUR NAME]

  # Our data store: a list of dictionaries.
  # Each contact is a dict: {"name": ..., "phone": ..., "email": ...}
  contacts = []

  def add_contact():
      name = input("Name: ")
      phone = input("Phone: ")
      email = input("Email: ")
      contacts.append({"name": name, "phone": phone, "email": email})
      print(f"✅ Added {name}!")

  def view_contacts():
      if len(contacts) == 0:
          print("No contacts yet.")
      else:
          print("--- Your Contacts ---")
          for c in contacts:
              print(f"{c['name']} | {c['phone']} | {c['email']}")

  def search_contacts():
      target = input("Search name: ")
      found = False
      for c in contacts:
          if target.lower() in c["name"].lower():
              print(f"{c['name']} | {c['phone']} | {c['email']}")
              found = True
      if not found:
          print("No match found.")

  def delete_contact():
      target = input("Delete which name? ")
      for c in contacts:
          if c["name"] == target:
              contacts.remove(c)
              print(f"🗑️ Deleted {target}.")
              return
      print("Not found.")

  def main():
      running = True
      while running:
          print("=" * 32)
          print("     📇 CONTACT MANAGER 📇")
          print("=" * 32)
          print("  1. Add contact")
          print("  2. View contacts")
          print("  3. Search contacts")
          print("  4. Delete contact")
          print("  5. Quit")
          print("=" * 32)

          choice = input("Choose (1-5): ")

          if choice == "1":
              add_contact()
          elif choice == "2":
              view_contacts()
          elif choice == "3":
              search_contacts()
          elif choice == "4":
              delete_contact()
          elif choice == "5":
              print("Goodbye! 👋")
              running = False
          else:
              print("❌ Please pick 1-5.")

  main()
class_activities: |
  ## 🏗️ Class Activity: Build the Contact Manager — Live, Together!

  We build the whole program in **five stages**, live on Zoom. After each stage, **run your code** and give a **thumbs up** 👍 when it works. We move as one class!

  > 📁 **First:** open Trinket and start a NEW trinket named **`Y2-T4-W7-ContactManager`**. Paste in the starter skeleton (the empty functions + menu). We fill in one function at a time.

  ### Stage 1 — The Data Store + Add (⭐⭐)
  Create the `contacts = []` list, then fill in `add_contact()`.
  ```python
  contacts = []

  def add_contact():
      name = input("Name: ")
      phone = input("Phone: ")
      email = input("Email: ")
      contacts.append({"name": name, "phone": phone, "email": email})
      print(f"✅ Added {name}!")
  ```
  ✅ **Checkpoint:** Add one contact. Do you see `✅ Added ...!`? Thumbs up! 👍

  ### Stage 2 — View Contacts (⭐⭐)
  Fill in `view_contacts()` so it handles the empty case AND lists everyone.
  ```python
  def view_contacts():
      if len(contacts) == 0:
          print("No contacts yet.")
      else:
          for c in contacts:
              print(f"{c['name']} | {c['phone']} | {c['email']}")
  ```
  ✅ **Checkpoint:** View before adding (→ "No contacts yet."), then add two and view again. 👍

  ### Stage 3 — Search Contacts (⭐⭐⭐)
  Fill in `search_contacts()`. Use `.lower()` on BOTH sides so case doesn't matter.
  ```python
  def search_contacts():
      target = input("Search name: ")
      found = False
      for c in contacts:
          if target.lower() in c["name"].lower():
              print(f"{c['name']} | {c['phone']} | {c['email']}")
              found = True
      if not found:
          print("No match found.")
  ```
  ✅ **Checkpoint:** Search half a name (e.g. `ama`). Post what you found in the chat!

  ### Stage 4 — Delete Contact (⭐⭐⭐)
  Fill in `delete_contact()`. The `return` after removing is important — we'll explain why!
  ```python
  def delete_contact():
      target = input("Delete which name? ")
      for c in contacts:
          if c["name"] == target:
              contacts.remove(c)
              print(f"🗑️ Deleted {target}.")
              return
      print("Not found.")
  ```
  ✅ **Checkpoint:** Add a contact, delete it, then view. Is it gone? 👍

  ### Stage 5 — The Menu Loop (⭐⭐⭐)
  Wire the menu to the functions inside `main()`. Option 5 quits.
  ```python
  choice = input("Choose (1-5): ")
  if choice == "1": add_contact()
  elif choice == "2": view_contacts()
  elif choice == "3": search_contacts()
  elif choice == "4": delete_contact()
  elif choice == "5":
      print("Goodbye! 👋")
      running = False
  else:
      print("❌ Please pick 1-5.")
  ```
  ✅ **Final checkpoint:** Run the WHOLE thing: add → view → search → delete → quit. No crashes? 🎉 **Save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Make It Showcase-Ready ✨

  Next week is the **Data Showcase** — you'll demo your Contact Manager and earn the **Data Architect Badge** 🏆. This week, add ONE personal touch and make sure it never crashes.

  **Requirements:**
  1. Open your **`Y2-T4-W7-ContactManager`** Trinket
  2. Make sure Add, View, Search, Delete, and Quit all work
  3. Add **one personal touch** (pick from the ideas below)
  4. Test it hard — try to BREAK it. It should survive every menu choice.

  **Personal-touch ideas (pick ONE):**
  - 🔢 A **"count contacts"** option that prints how many contacts you have
  - 🔤 A **sort-by-name view** that shows contacts in alphabetical order
  - 🎂 An **extra field** like `birthday` (add it to `add_contact` AND every print line)
  - ✏️ An **edit** option that finds a contact and updates their phone or email

  **Challenge tiers:**
  - ⭐ Add a "count contacts" option (menu 6) that prints `You have N contacts.`
  - ⭐⭐ Add a sorted view: `for c in sorted(contacts, key=lambda x: x["name"]):`
  - ⭐⭐⭐ Add an edit option that finds a contact by name and updates a field

  > 💡 Bring this exact program to next week's showcase — you'll run it live on Zoom and earn your badge!

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? Your Contact Manager Is a Tiny Database

  The `contacts` list you built today — a list of records, each with the same fields — is exactly how real software stores information. It has a name: a **database**.

  Your phone's address book is a database. So is a shop's list of customers (companies call that a **CRM** — Customer Relationship Manager). They all do the same four things your program does: **add**, **view**, **search**, and **delete** records. Programmers even have a nickname for those four: **CRUD** (Create, Read, Update, Delete).

  And AI? When you ask an AI assistant "what's Ama's phone number?", behind the scenes it often does the same **search** you wrote today — loop through records, match the name, return the answer. You built the real thing, just smaller.

  **Discuss in the Zoom chat:** "What's one app you use that must be storing a big list of records like yours?"
---

# Year 2, Lesson 7: Project — Contact Manager 📇🛠️

**Course:** Data Structures
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 4 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Learn Today

- How to combine **everything** from this term into one real project: lists, dictionaries, functions, and a menu loop
- How to build a **list of dictionaries** as a data store — the heart of the Contact Manager
- How to write **four functions** that each do one job: add, view, search, and delete
- How to wire them all together with a **menu-driven `while` loop** that never crashes
- You'll finish with a complete **Contact Manager** ready to demo next week for your **Data Architect Badge**! 🏆

---

## 🤖 BrightByte's Challenge

> *"This is it — build week! All term you've been collecting superpowers: lists that hold many things, dictionaries that label each thing, functions that keep your code tidy, and loops that keep a program running. Today we snap them all together into ONE program: a Contact Manager. It stores people. It finds people. It deletes people (from the list, not real life 😄). By the end of today, you'll have built something you could genuinely put on your phone. Let's architect some data!"*
> — BrightByte 🤖✨

---

## 🧩 Part 1: The Plan — What Are We Building?

A **Contact Manager** is like the address book on a phone. It keeps a list of people, and for each person it stores three things:

| Field | Example |
|---|---|
| `name` | `Amara` |
| `phone` | `0801 234 5678` |
| `email` | `amara@example.com` |

Our program will show a **menu** and let the user:

1. **Add** a contact
2. **View** all contacts
3. **Search** for a contact by name
4. **Delete** a contact
5. **Quit**

> 📁 **BEFORE WE START:** open Trinket and make a NEW trinket named **`Y2-T4-W7-ContactManager`**. This is the one you'll demo next week — name it exactly so it's easy to find!

### The big idea: a list of dictionaries

Each contact is a **dictionary** (labelled boxes — from Week 4):

```python
{"name": "Amara", "phone": "0801 234 5678", "email": "amara@example.com"}
```

And we keep ALL of them in one **list** (from Week 1):

```python
contacts = [
    {"name": "Amara", "phone": "0801 234 5678", "email": "amara@example.com"},
    {"name": "Kwame", "phone": "0802 987 6543", "email": "kwame@example.com"}
]
```

That's a **list of dictionaries** — the exact record pattern you practised in Week 6. It's the perfect shape for storing many people who each have the same fields.

> 💡 We start with an **empty** list — `contacts = []` — and let the user fill it up while the program runs.

---

## 🏗️ Part 2: The Skeleton

Before we write any function bodies, let's lay out the whole shape of the program. This is the **skeleton** — empty functions plus the menu. Paste this into your Trinket:

```python
# 📇 Y2-T4-W7-ContactManager
contacts = []

def add_contact():
    pass

def view_contacts():
    pass

def search_contacts():
    pass

def delete_contact():
    pass

def main():
    running = True
    while running:
        # menu goes here
        pass

main()
```

> 🦴 `pass` is a Python word that means "do nothing for now — I'll fill this in later." It lets the skeleton run without errors while we build. We'll replace every `pass` with real code.

Notice the shape:
- `contacts = []` at the **top** — one shared list every function can use
- Four **functions**, each named for its job (`def` + a clear verb)
- A `main()` function with the `while` loop
- `main()` **called once at the very bottom** to start everything

✅ **Zoom checkpoint:** Paste the skeleton and run it. No errors (even though it does nothing yet)? Thumbs up! 👍

---

## ➕ Part 3: The Add Function

Time to fill in our first function. `add_contact()` asks the user for three pieces of information, packs them into a dictionary, and **appends** that dictionary to the `contacts` list:

```python
def add_contact():
    name = input("Name: ")
    phone = input("Phone: ")
    email = input("Email: ")
    contacts.append({"name": name, "phone": phone, "email": email})
    print(f"✅ Added {name}!")
```

### 🔎 Line by line

- Three `input()` calls collect the name, phone, and email
- `contacts.append({...})` adds a **brand-new dictionary** onto the end of the list
- The keys are `"name"`, `"phone"`, `"email"` — the exact same labels every time (this consistency is what makes it a proper record!)
- `print(f"✅ Added {name}!")` gives friendly feedback so the user knows it worked

**Example run:**
```
Name: Amara
Phone: 0801 234 5678
Email: amara@example.com
✅ Added Amara!
```

> 💡 The keys must be **identical** for every contact. If one contact used `"phone"` and another used `"number"`, our View and Search functions wouldn't know where to look!

✅ **Zoom checkpoint:** Add one contact. See the `✅ Added ...!` message? 👍

---

## 👀 Part 4: The View Function

`view_contacts()` shows everyone in the list. But first it checks a special case: **what if the list is empty?** A good program says something friendly instead of printing nothing:

```python
def view_contacts():
    if len(contacts) == 0:
        print("No contacts yet.")
    else:
        print("--- Your Contacts ---")
        for c in contacts:
            print(f"{c['name']} | {c['phone']} | {c['email']}")
```

### 🔎 How it works

- `if len(contacts) == 0:` — if the list is empty, say "No contacts yet." and stop
- `else:` — otherwise, **loop** through every contact `c`
- Each `c` is a dictionary, so we read its fields with `c['name']`, `c['phone']`, `c['email']`
- The `|` symbols just make it look neat, like a table

**Example run (with two contacts):**
```
--- Your Contacts ---
Amara | 0801 234 5678 | amara@example.com
Kwame | 0802 987 6543 | kwame@example.com
```

> ⚠️ **Quote-inside-quote tip:** the f-string uses double quotes on the outside `f"..."`, so inside we use **single** quotes: `c['name']`. Mixing them up (`f"{c["name"]}"`) confuses Python!

✅ **Zoom checkpoint:** View BEFORE adding anyone (→ "No contacts yet."). Then add two people and view again. 👍

---

## 🔍 Part 5: The Search Function

`search_contacts()` finds anyone whose name matches what the user types. We make it **friendly**: it ignores capital letters and matches **part** of a name, using the exact filter pattern from Week 6:

```python
def search_contacts():
    target = input("Search name: ")
    found = False
    for c in contacts:
        if target.lower() in c["name"].lower():
            print(f"{c['name']} | {c['phone']} | {c['email']}")
            found = True
    if not found:
        print("No match found.")
```

### 🔎 The clever bits

- `target.lower()` and `c["name"].lower()` — we lowercase **both** sides, so `ama`, `Ama`, and `AMA` all match `Amara`
- `in` checks if `target` appears **anywhere inside** the name — so `ama` matches `Amara`
- `found = False` starts as a flag. If we print even one match, we set it to `True`
- After the loop, `if not found:` — if we never found anything, say "No match found."

**Example run:**
```
Search name: ama
Amara | 0801 234 5678 | amara@example.com
```

**Example with no match:**
```
Search name: zzz
No match found.
```

> 💡 The `found` flag is the same "on/off switch" trick you use with `running`. It's a common pattern: "did anything happen during my loop?"

✅ **Zoom checkpoint:** Search for HALF a name (like `ama`). Did it find the match? Post it in the chat!

---

## 🗑️ Part 6: The Delete Function

`delete_contact()` removes a contact by name. This one has a subtle trap, so read carefully:

```python
def delete_contact():
    target = input("Delete which name? ")
    for c in contacts:
        if c["name"] == target:
            contacts.remove(c)
            print(f"🗑️ Deleted {target}.")
            return
    print("Not found.")
```

### 🔎 Why the `return` matters

- We loop through `contacts` looking for an **exact** name match (`==`)
- When we find it, `contacts.remove(c)` takes that dictionary out of the list
- Then — crucially — we `return` **immediately**

**Why return straight away?** Because changing a list *while you are looping over it* confuses Python — it can skip items or crash. By `return`ing the moment we remove one, we **stop the loop before it gets confused**. This is called the **"don't modify a list while iterating"** rule, and `return` is our clean escape hatch.

- If the loop finishes without finding the name, the last line runs: `print("Not found.")`

**Example run:**
```
Delete which name? Amara
🗑️ Deleted Amara.
```

> ⚠️ **Note:** Delete uses `==` (exact match), not `in` like Search. Deleting is destructive, so we want the user to type the **full, exact** name — no accidental deletions!

✅ **Zoom checkpoint:** Add a contact, delete it, then view. Is it really gone? 👍

---

## 🎛️ Part 7: The Menu Loop

Now we tie everything together inside `main()`. The menu prints, the user chooses, and we call the matching function. Option 5 quits by flipping the `running` switch off:

```python
def main():
    running = True
    while running:
        print("=" * 32)
        print("     📇 CONTACT MANAGER 📇")
        print("=" * 32)
        print("  1. Add contact")
        print("  2. View contacts")
        print("  3. Search contacts")
        print("  4. Delete contact")
        print("  5. Quit")
        print("=" * 32)

        choice = input("Choose (1-5): ")

        if choice == "1":
            add_contact()
        elif choice == "2":
            view_contacts()
        elif choice == "3":
            search_contacts()
        elif choice == "4":
            delete_contact()
        elif choice == "5":
            print("Goodbye! 👋")
            running = False
        else:
            print("❌ Please pick 1-5.")

main()
```

### 🔎 The three key ideas

- **`running` flag:** starts `True`; picking 5 sets it `False`, so the loop stops and the program ends cleanly
- **`choice` is TEXT:** `input()` always gives a string, so we compare to `"1"`, `"2"`... **with quotes**
- **The `else`:** any other input (like `9` or `banana`) gets a friendly "Please pick 1-5." and loops again — no crash!

> 💡 Don't forget `main()` at the very bottom — that single line is what starts the whole program running!

✅ **Zoom checkpoint:** Run the full menu. Try 1, 2, 3, 4, then 5 to quit. Does it loop and then stop? 👍

---

## ✅ Part 8: The Whole Program

Here is your complete Contact Manager. This is what should be in your `Y2-T4-W7-ContactManager` Trinket:

```python
# 📇 Y2-T4-W7-ContactManager
# Made by: [YOUR NAME]

contacts = []

def add_contact():
    name = input("Name: ")
    phone = input("Phone: ")
    email = input("Email: ")
    contacts.append({"name": name, "phone": phone, "email": email})
    print(f"✅ Added {name}!")

def view_contacts():
    if len(contacts) == 0:
        print("No contacts yet.")
    else:
        print("--- Your Contacts ---")
        for c in contacts:
            print(f"{c['name']} | {c['phone']} | {c['email']}")

def search_contacts():
    target = input("Search name: ")
    found = False
    for c in contacts:
        if target.lower() in c["name"].lower():
            print(f"{c['name']} | {c['phone']} | {c['email']}")
            found = True
    if not found:
        print("No match found.")

def delete_contact():
    target = input("Delete which name? ")
    for c in contacts:
        if c["name"] == target:
            contacts.remove(c)
            print(f"🗑️ Deleted {target}.")
            return
    print("Not found.")

def main():
    running = True
    while running:
        print("=" * 32)
        print("     📇 CONTACT MANAGER 📇")
        print("=" * 32)
        print("  1. Add contact")
        print("  2. View contacts")
        print("  3. Search contacts")
        print("  4. Delete contact")
        print("  5. Quit")
        print("=" * 32)

        choice = input("Choose (1-5): ")

        if choice == "1":
            add_contact()
        elif choice == "2":
            view_contacts()
        elif choice == "3":
            search_contacts()
        elif choice == "4":
            delete_contact()
        elif choice == "5":
            print("Goodbye! 👋")
            running = False
        else:
            print("❌ Please pick 1-5.")

main()
```

🎉 **You built a complete Contact Manager!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: Comparing `choice` as a number instead of text**

❌ Wrong — `choice` is text, but `1` is a number, so this NEVER matches:
```python
choice = input("Choose (1-5): ")
if choice == 1:          # 1 is a number; choice is "1" (text)
    add_contact()
```
The program always falls through to `else` and says "Please pick 1-5." even when you typed 1!

✅ Correct — compare text to text (with quotes):
```python
if choice == "1":
    add_contact()
```

---

**Mistake 2: A typo in a dictionary key → `KeyError`**

❌ Wrong — `c["nmae"]` is a typo (should be `name`):
```python
for c in contacts:
    print(c["nmae"])
```
```
KeyError: 'nmae'
```

✅ Correct — spell the key EXACTLY as you stored it: `name`, `phone`, `email`:
```python
for c in contacts:
    print(c["name"])
```

> 🔑 A `KeyError` means "I looked for that label and there's no box with that name." Check your spelling against `add_contact`!

---

**Mistake 3: The forever loop (forgetting to flip the switch)**

❌ Wrong — `running` never becomes `False`, so the menu loops FOREVER:
```python
while running:
    choice = input("Choose (1-5): ")
    if choice == "5":
        print("Goodbye! 👋")
        # forgot: running = False
```

✅ Correct — flip the switch off so the loop can stop:
```python
    if choice == "5":
        print("Goodbye! 👋")
        running = False
```

> 😵 Stuck in a forever loop? In Trinket, click **Stop** (or re-run) to escape it.

---

**Mistake 4: Deleting while looping WITHOUT the `return`**

❌ Risky — removing an item mid-loop and then carrying on can skip items or misbehave:
```python
def delete_contact():
    target = input("Delete which name? ")
    for c in contacts:
        if c["name"] == target:
            contacts.remove(c)     # removed... but the loop keeps going!
    print("Done.")
```

✅ Correct — `return` the moment you remove one, so the loop stops cleanly:
```python
    for c in contacts:
        if c["name"] == target:
            contacts.remove(c)
            print(f"🗑️ Deleted {target}.")
            return
```

> 💡 The golden rule: **never change a list while you're looping over it.** `return` right after removing keeps us safe.

---

## 🌟 What's Coming Next Week?

Your Contact Manager is **finished** — and it's genuinely impressive! Next week is **Week 8: Data Showcase & the Data Architect Badge!** 🏆

- 🎤 You'll **demo your Contact Manager** live on Zoom — share your screen and show off your personal touch
- 💬 You'll give and get kind **peer feedback**
- 🧠 We'll play a fun **Term 4 quiz** covering lists, dictionaries, records, and functions
- 🏆 You'll earn the **Data Architect Badge** for building a real data-driven program!

> Bring your `Y2-T4-W7-ContactManager` Trinket next week — make sure it runs, doesn't crash, and you're proud of it. It's showtime!

---

## 🏆 Today's Achievements

- ✅ You built a **list of dictionaries** as a real data store
- ✅ You wrote **four functions** — add, view, search, delete — each doing one clear job
- ✅ You made Search **case-insensitive** and Delete **safe** with `return`
- ✅ You wired everything together with a **menu-driven `while` loop**
- ✅ You handled the **empty list** and **invalid choices** so nothing crashes
- ✅ You have a complete **Contact Manager** — your term project is built!

> *"Look at what you just architected. A data store. Four functions. A loop that ties them together and never falls over. This isn't a toy — it's the same shape as the address book in your pocket and the customer lists that run real businesses. You are a data architect now. Next week, you earn the badge to prove it."*
> — BrightByte 🤖✨

---

## 📚 Homework: Make It Showcase-Ready ✨

Next week is the **Data Showcase** — you'll demo your Contact Manager and earn the **Data Architect Badge** 🏆. This week, add ONE personal touch and make sure it never crashes.

**Requirements:**
1. Open your **`Y2-T4-W7-ContactManager`** Trinket
2. Make sure Add, View, Search, Delete, and Quit all work
3. Add **one personal touch** (pick from the ideas below)
4. Test it hard — try to BREAK it. It should survive every menu choice.

**Personal-touch ideas (pick ONE):**
- 🔢 A **"count contacts"** option that prints how many contacts you have
- 🔤 A **sort-by-name view** that shows contacts in alphabetical order
- 🎂 An **extra field** like `birthday` (add it to `add_contact` AND every print line)
- ✏️ An **edit** option that finds a contact and updates their phone or email

**Challenge tiers:**
- ⭐ Add a "count contacts" option (menu 6) that prints `You have N contacts.`
- ⭐⭐ Add a sorted view: `for c in sorted(contacts, key=lambda x: x["name"]):`
- ⭐⭐⭐ Add an edit option that finds a contact by name and updates a field

> 💡 Bring this exact program to next week's showcase — you'll run it live on Zoom and earn your badge!

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't just finish a program — you architected real data. Next week, take a bow and earn your badge! 📇🏆*
