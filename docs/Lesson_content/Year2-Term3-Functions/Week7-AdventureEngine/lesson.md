---
title: "Project: Text Adventure Engine 🗺️⚔️"
description: "Build a complete, polished multi-scene text adventure using the scene-function engine — with an inventory that unlocks choices, gated paths, and both winning and losing endings, all without a single crash"
difficulty: "intermediate"
order_index: 7
course_slug: "year2-term-3-functions"
is_premium: false
requires_trinket: true
starter_code: |
  # 🗺️ Y2-T3-W7-Adventure — The Lost Temple of Zaria
  # Made by: [YOUR NAME]
  # We build this ADVENTURE ENGINE scene by scene together in class!

  inventory = []   # our backpack — a list of items we pick up


  def start_scene():
      print()
      print("🏛️  You stand at the cracked gate of the Lost Temple of Zaria.")
      print("  1. Slip straight through into the great hall")
      print("  2. Explore the overgrown garden first")
      choice = input("What do you do? (1/2) ")
      if choice == "1":
          return "hall"
      else:
          return "garden"


  # TODO in class: build these scene functions, one at a time.
  #   def garden_scene():   ...  return "hall"
  #   def hall_scene():     ...  return "treasure" or "tunnel"
  #   def tunnel_scene():   ...  return "bridge" or "treasure" or "lose"
  #   def bridge_scene():   ...  return "treasure" or "lose"
  #   def treasure_scene(): ...  return "win" or "lose"


  # ---- THE ENGINE: keep running scenes until we win or lose ----
  current = "start"
  while current != "win" and current != "lose":
      if current == "start":
          current = start_scene()
      # elif current == "garden":
      #     current = garden_scene()
      # ... add ONE elif for every scene you write ...
      else:
          print("Unknown scene!")
          current = "lose"

  if current == "win":
      print("🎉 You escaped the Lost Temple! You win!")
  else:
      print("💀 Game over.")
solution_code: |
  # 🗺️ Y2-T3-W7-Adventure — The Lost Temple of Zaria
  # Made by: [YOUR NAME]

  inventory = []   # our backpack — a list of items we pick up


  def start_scene():
      print()
      print("🏛️  You stand at the cracked gate of the Lost Temple of Zaria.")
      print("The sun is setting. Inside, the legendary Golden Mask waits.")
      print("  1. Slip straight through into the great hall")
      print("  2. Explore the overgrown garden first")
      choice = input("What do you do? (1/2) ")
      if choice == "1":
          return "hall"
      elif choice == "2":
          return "garden"
      else:
          print("🤔 You dither... let's start in the garden.")
          return "garden"


  def garden_scene():
      print()
      print("🌿 In the tangled garden, something glints in the soil.")
      print("You dig it out — a heavy GOLDEN KEY! You slip it into your pack.")
      inventory.append("key")
      print("  1. Head into the great hall now")
      print("  2. Search deeper among the vines")
      choice = input("What do you do? (1/2) ")
      if choice == "2":
          print("🔦 Under a broken statue you find a working TORCH. Grab it!")
          inventory.append("torch")
          return "hall"
      elif choice == "1":
          return "hall"
      else:
          print("🤔 Not sure? You head into the hall anyway.")
          return "hall"


  def hall_scene():
      print()
      print("🏛️  The great hall is vast and silent.")
      print("A huge GOLDEN DOOR glows on the far wall.")
      print("A dark TUNNEL yawns to your left.")
      print("  1. Open the golden door")
      print("  2. Go down the dark tunnel")
      choice = input("What do you do? (1/2) ")
      if choice == "1":
          if "key" in inventory:
              print("🔑 Your golden key fits perfectly. The door swings open!")
              return "treasure"
          else:
              print("🔒 The door is locked tight — and you have no key.")
              print("You have no choice but to take the dark tunnel.")
              return "tunnel"
      elif choice == "2":
          return "tunnel"
      else:
          print("🤔 You hesitate, then step towards the tunnel.")
          return "tunnel"


  def tunnel_scene():
      print()
      print("🕳️  The tunnel is pitch black. Cold air drifts from deep ahead,")
      print("and you can just hear a rope bridge creaking over a chasm.")
      print("  1. Feel your way forward to the rope bridge")
      print("  2. Search the tunnel floor for another way")
      choice = input("What do you do? (1/2) ")
      if choice == "2":
          if "torch" in inventory:
              print("🔦 Your torch lights a hidden stairway up to the treasure!")
              return "treasure"
          else:
              print("💀 In the dark you trip on a loose stone and fall into the chasm.")
              return "lose"
      elif choice == "1":
          return "bridge"
      else:
          print("🤔 You edge forward towards the creaking bridge.")
          return "bridge"


  def bridge_scene():
      print()
      print("🌉 You reach a swaying rope bridge above a deep, dark chasm.")
      print("Halfway across, a plank SNAPS beneath your foot!")
      print("  1. Leap forward to the far side")
      print("  2. Scramble back the way you came")
      choice = input("What do you do? (1/2) ")
      if choice == "1":
          print("🏃 You leap and roll onto solid stone. The treasure room is ahead!")
          return "treasure"
      elif choice == "2":
          print("💀 You scramble back, but the whole bridge collapses into the dark.")
          return "lose"
      else:
          print("💀 You freeze — and the bridge gives way beneath you.")
          return "lose"


  def treasure_scene():
      print()
      print("💰 You enter a room piled high with gold and jewels.")
      print("At its centre glows the GOLDEN MASK — but a huge STONE GUARDIAN")
      print("blocks the only exit, its eyes flickering to life.")
      print("  1. Snatch the mask and sprint for the exit")
      print("  2. Bow respectfully and ask the guardian for passage")
      choice = input("What do you do? (1/2) ")
      if choice == "2":
          print("🙇 You bow low. The guardian studies you, then steps aside.")
          return "win"
      elif choice == "1":
          print("💀 The guardian's eyes blaze red — greed springs the ancient trap!")
          return "lose"
      else:
          print("🙇 Unsure, you bow just in case. The guardian seems pleased.")
          return "win"


  # ---- THE ENGINE: keep running scenes until we win or lose ----
  current = "start"
  while current != "win" and current != "lose":
      if current == "start":
          current = start_scene()
      elif current == "garden":
          current = garden_scene()
      elif current == "hall":
          current = hall_scene()
      elif current == "tunnel":
          current = tunnel_scene()
      elif current == "bridge":
          current = bridge_scene()
      elif current == "treasure":
          current = treasure_scene()
      else:
          print("Unknown scene!")
          current = "lose"

  print()
  print("=" * 40)
  if current == "win":
      print("🎉 You escaped the Lost Temple with the Golden Mask! YOU WIN!")
  else:
      print("💀 Game over. The temple keeps its secrets... for now.")
  print("=" * 40)
class_activities: |
  ## 🏗️ Class Activity: Build the Adventure Engine — Live, Together!

  We build **The Lost Temple of Zaria** one scene at a time, live on Zoom. After each stage, **run your code** and give a **thumbs up** 👍 when it works. We move together — no scene left behind!

  > 📁 **First:** open a new Trinket and name it **`Y2-T3-W7-Adventure`**. Paste in the starter code (the backpack, `start_scene()`, and the engine loop). Run it — you should reach the gate, then "Unknown scene!" because the other scenes don't exist yet. That's expected!

  ### Stage 1 — The Dispatcher Works (⭐)
  Read the engine loop together. `current` holds the name of the scene we're in; each scene **returns the name of the next scene**; the loop dispatches to it.
  ```python
  current = "start"
  while current != "win" and current != "lose":
      if current == "start":
          current = start_scene()
      else:
          print("Unknown scene!")
          current = "lose"
  ```
  ✅ **Checkpoint:** Run it. Pick 1 or 2 at the gate. You should see "Unknown scene!" and "Game over." Thumbs up! 👍

  ### Stage 2 — The Garden & the Key (⭐⭐)
  Write `garden_scene()`. It does `inventory.append("key")` and returns `"hall"`. Add its `elif` to the engine.
  ```python
  def garden_scene():
      print("🌿 You find a GOLDEN KEY in the soil!")
      inventory.append("key")
      return "hall"
  ```
  ✅ **Checkpoint:** From the gate, choose the garden. Do you pick up the key? 👍

  ### Stage 3 — The Hall & the Locked Door (⭐⭐⭐)
  Write `hall_scene()`. This is the **inventory gate**: the golden door only opens `if "key" in inventory`. Add its `elif`.
  ```python
  if choice == "1":
      if "key" in inventory:
          return "treasure"
      else:
          print("🔒 Locked — no key!")
          return "tunnel"
  ```
  ✅ **Checkpoint:** Get the key, open the door → treasure. Skip the garden, try the door → sent to the tunnel. Post which path you took in the chat!

  ### Stage 4 — Tunnel, Bridge & the Endings (⭐⭐⭐)
  Add `tunnel_scene()`, `bridge_scene()` and `treasure_scene()`, each with their `elif`. Make sure every path ends in `"win"` or `"lose"`. Add the second gate: searching the tunnel is safe **only** `if "torch" in inventory`.

  ✅ **Final checkpoint:** Play a full **win** and a full **lose**. No crashes, no "Unknown scene!" 🎉 **Save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Make Your Adventure Showcase-Ready ✨

  Next week you'll **demo your adventure** to the class. This week, make it *yours* and make sure every path works.

  **Requirements:**
  1. Open your **`Y2-T3-W7-Adventure`** Trinket
  2. Give it a **personal theme** (space station? haunted school? football tournament?) — rename the scenes and rewrite the story text
  3. Have at least **5 scenes**, **one inventory item that unlocks a choice**, **one win** and **one lose** ending
  4. Add **one new thing** (pick from the ideas below)
  5. Test **every path** — no path should crash or hit "Unknown scene!"

  **Personal-touch ideas (pick ONE):**
  - 🗺️ Add a **6th scene** with a new branch
  - 🎒 Add a **second item** that unlocks a different choice (like the torch)
  - 🏆 Add a **second win ending** (a "good" ending and a "great" ending)
  - 😀 Add friendly `else` defaults so silly input never breaks the story

  **Challenge tiers:**
  - ⭐ Reskin the story with your own theme; win and lose both work
  - ⭐⭐ Add a second item that gates a choice
  - ⭐⭐⭐ Add a scene the player can only reach by collecting TWO items first

  > 💡 Bring this exact program to next week's showcase — you'll run it live on Zoom!

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? Your Engine Is a Decision Tree

  Every time your player picks 1 or 2, they travel down a **branch** of your story. Draw your whole adventure on paper and it looks like a tree — that's called a **decision tree**, and it's one of the oldest ideas in AI.

  Game characters use exactly this idea. When an enemy in a video game decides "if the player is close, attack; else, patrol", it is walking a tree of choices just like your scenes. Your `current` variable — the name of where you are right now — is the game's **state**, and moving from scene to scene is the AI **navigating a state graph**.

  **Discuss in the Zoom chat:** "If a game character had to escape your temple, what rule would it follow at the bridge — leap, or turn back? Why?"

  You just built the same skeleton that powers real game AI: states, choices, and rules that decide what happens next. 🌳
---

# Year 2, Lesson 7: Project — Text Adventure Engine 🗺️⚔️

**Course:** Functions
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Learn Today

- How to combine everything from this term into ONE big program: the **scene-function engine**
- How to build a **complete adventure** with 5+ scenes, each a function that **returns the next scene's name**
- How to use a **list inventory** so items you pick up **unlock new choices** later
- How to design **winning and losing endings** — and make sure every path reaches one
- How to handle **silly input** so your story never crashes
- You'll finish with a **polished text adventure** ready to show off next week! 🎉

---

## 🤖 BrightByte's Big Build

> *"This is it — the big one. All term you've been collecting tools: `def`, parameters, `return`, scope, functions calling functions. Last week you learned the SCENE-FUNCTION ENGINE and built a tiny adventure. TODAY we build a proper one — a temple to escape, a key that unlocks a secret door, a bridge that might just collapse, and two very different endings. Every scene is a function. Every choice is a branch. And when you're done, you'll have built a real game — the kind of thing a professional games studio starts with. Grab your backpack. Let's go raiding."*
> — BrightByte 🤖⚔️

---

## 🧭 Part 1: Remember the Engine Pattern

Last week you met the **scene-function engine**. Let's remind ourselves how it works, because today we go BIG with it.

The whole idea is three simple rules:

1. **Every scene is a function** that prints some story and asks a question.
2. **Every scene `return`s a string** — the *name* of the scene to go to next.
3. **One loop (the "dispatcher")** looks at where we are and calls the right scene function.

```python
inventory = []

def start_scene():
    print("...story text...")
    choice = input("Choose: ...")
    if choice == "1":
        return "forest"
    else:
        return "cave"

current = "start"
while current != "win" and current != "lose":
    if current == "start":
        current = start_scene()
    # ... an elif for every scene ...
    else:
        print("Unknown scene!")
        current = "lose"
```

The magic is that `current` always holds **the name of where we are**. A scene hands back the name of the next place, the loop swaps it into `current`, and round we go — until `current` becomes `"win"` or `"lose"`, which stops the loop.

> 💡 Think of `current` as a signpost. Each scene turns the signpost to point somewhere new. When it points to "win" or "lose", the journey ends.

---

## 🗺️ Part 2: Plan the Map First

Never write a big adventure straight into code. **Draw the map first.** Here's the temple we'll build today — *The Lost Temple of Zaria*:

```
                 START (temple gate)
                  /            \
             garden            hall  ←─────────┐
            (find KEY)        /    \           │
                 |     door(needs  tunnel      │ (no key →
                 └──→ hall  KEY)    /   \        redirected here)
                        |          bridge  search
                     treasure     /   \   (needs TORCH)
                      /   \    treasure  lose
                    win   lose
```

Six scenes, plus two endings (`win` and `lose`). Notice two special things:

| Item | Where you find it | What it unlocks |
|---|---|---|
| 🔑 `key` | the **garden** | opens the **golden door** in the hall (straight to treasure) |
| 🔦 `torch` | searching the **garden** deeper | lets you **search the tunnel** safely instead of falling |

This is the heart of today's lesson: **items in your inventory unlock choices**. No key? The door stays locked. No torch? The dark tunnel is deadly.

> 🧭 **Golden rule of maps:** every arrow must lead *somewhere*, and every path must eventually reach **win** or **lose**. If a scene returns a name with no arrow, the player gets stuck!

---

## 🎒 Part 3: The Backpack (Our Inventory)

We have no dictionaries yet (that's Term 4!) — so our inventory is a simple **list**. Two list tricks do everything we need:

```python
inventory = []                 # start empty

inventory.append("key")        # pick something up
if "key" in inventory:         # check if we have it
    print("The door unlocks!")
```

- `inventory.append("key")` — adds `"key"` to the backpack.
- `if "key" in inventory:` — asks "is `"key"` in the list?" (True or False).

That's the whole toolkit. `append` to collect, `in` to check. Simple — but it's enough to gate doors, light tunnels, and build real puzzles.

---

## 🚪 Part 4: The Dispatcher & the Start Scene

Let's build. Open a fresh Trinket named **`Y2-T3-W7-Adventure`** and start with the backpack, the start scene, and the engine loop:

```python
inventory = []

def start_scene():
    print()
    print("🏛️  You stand at the cracked gate of the Lost Temple of Zaria.")
    print("  1. Slip straight through into the great hall")
    print("  2. Explore the overgrown garden first")
    choice = input("What do you do? (1/2) ")
    if choice == "1":
        return "hall"
    elif choice == "2":
        return "garden"
    else:
        print("🤔 You dither... let's start in the garden.")
        return "garden"

current = "start"
while current != "win" and current != "lose":
    if current == "start":
        current = start_scene()
    else:
        print("Unknown scene!")
        current = "lose"
```

Run it. Pick 1 or 2 — you'll see **"Unknown scene!"** then **"Game over."** That's *correct for now*: `start_scene()` returns `"hall"` or `"garden"`, but the loop has no `elif` for those yet, so it falls to the `else`.

### 🔎 Look at that `else` on the choice

See the third branch in `start_scene`? If the player types `"3"`, or `"banana"`, or just presses Enter, we don't crash — we print a friendly note and send them to the garden. **Every scene will have a graceful default like this.** A good game never punishes a player for a typo.

✅ **Zoom checkpoint:** You reach the gate, choose an option, and see "Unknown scene!" → "Game over." Thumbs up! 👍

---

## 🌿 Part 5: Scenes That Give You Items

Now the garden — the first *real* scene. It gives us the golden key and (if we search) a torch:

```python
def garden_scene():
    print()
    print("🌿 In the tangled garden, something glints in the soil.")
    print("You dig it out — a heavy GOLDEN KEY! You slip it into your pack.")
    inventory.append("key")
    print("  1. Head into the great hall now")
    print("  2. Search deeper among the vines")
    choice = input("What do you do? (1/2) ")
    if choice == "2":
        print("🔦 Under a broken statue you find a working TORCH. Grab it!")
        inventory.append("torch")
        return "hall"
    elif choice == "1":
        return "hall"
    else:
        print("🤔 Not sure? You head into the hall anyway.")
        return "hall"
```

Notice: **whatever the player chooses, this scene returns `"hall"`.** Every path forward is safe. The only difference is *whether you also grabbed the torch*.

Now wire it into the dispatcher — add an `elif`:

```python
    elif current == "garden":
        current = garden_scene()
```

✅ **Zoom checkpoint:** From the gate, choose the garden. Do you pick up the KEY? Choose "search deeper" — do you also get the TORCH? 👍

---

## 🔑 Part 6: The Inventory Gate — the Locked Door

Here's the star of the show. The **hall** has a golden door that only opens **if you have the key**:

```python
def hall_scene():
    print()
    print("🏛️  The great hall is vast and silent.")
    print("A huge GOLDEN DOOR glows on the far wall.")
    print("A dark TUNNEL yawns to your left.")
    print("  1. Open the golden door")
    print("  2. Go down the dark tunnel")
    choice = input("What do you do? (1/2) ")
    if choice == "1":
        if "key" in inventory:
            print("🔑 Your golden key fits perfectly. The door swings open!")
            return "treasure"
        else:
            print("🔒 The door is locked tight — and you have no key.")
            print("You have no choice but to take the dark tunnel.")
            return "tunnel"
    elif choice == "2":
        return "tunnel"
    else:
        print("🤔 You hesitate, then step towards the tunnel.")
        return "tunnel"
```

Read the nested `if` slowly. The player chooses the door (`choice == "1"`) — but *whether it opens* depends on the inventory:

- **Have the key?** → the door opens → `return "treasure"` 🎉
- **No key?** → it's locked → we redirect them to the tunnel → `return "tunnel"`

That's an **inventory gate**: the same choice leads to different places depending on what you're carrying. This is what makes items *matter*.

Add its `elif` to the dispatcher:

```python
    elif current == "hall":
        current = hall_scene()
```

> ⚠️ **Watch out:** notice the locked-door path still `return`s a valid scene name (`"tunnel"`). A gate that fails must **still return somewhere** — otherwise the scene returns `None` and the whole game breaks (more on that in Common Mistakes!).

✅ **Zoom checkpoint:** Get the key, then open the door → treasure. Now play again, skip the garden, try the door → you're sent to the tunnel. Post which path you took in the chat!

---

## 🌉 Part 7: The Tunnel, the Bridge & the Endings

Three scenes to finish the map. The **tunnel** has our second gate — the torch:

```python
def tunnel_scene():
    print()
    print("🕳️  The tunnel is pitch black. Cold air drifts from deep ahead,")
    print("and you can just hear a rope bridge creaking over a chasm.")
    print("  1. Feel your way forward to the rope bridge")
    print("  2. Search the tunnel floor for another way")
    choice = input("What do you do? (1/2) ")
    if choice == "2":
        if "torch" in inventory:
            print("🔦 Your torch lights a hidden stairway up to the treasure!")
            return "treasure"
        else:
            print("💀 In the dark you trip on a loose stone and fall into the chasm.")
            return "lose"
    elif choice == "1":
        return "bridge"
    else:
        print("🤔 You edge forward towards the creaking bridge.")
        return "bridge"
```

The **bridge** — pure risk, no item needed:

```python
def bridge_scene():
    print()
    print("🌉 You reach a swaying rope bridge above a deep, dark chasm.")
    print("Halfway across, a plank SNAPS beneath your foot!")
    print("  1. Leap forward to the far side")
    print("  2. Scramble back the way you came")
    choice = input("What do you do? (1/2) ")
    if choice == "1":
        print("🏃 You leap and roll onto solid stone. The treasure room is ahead!")
        return "treasure"
    elif choice == "2":
        print("💀 You scramble back, but the whole bridge collapses into the dark.")
        return "lose"
    else:
        print("💀 You freeze — and the bridge gives way beneath you.")
        return "lose"
```

And the **treasure room** — the final choice, and our win ending:

```python
def treasure_scene():
    print()
    print("💰 You enter a room piled high with gold and jewels.")
    print("At its centre glows the GOLDEN MASK — but a huge STONE GUARDIAN")
    print("blocks the only exit, its eyes flickering to life.")
    print("  1. Snatch the mask and sprint for the exit")
    print("  2. Bow respectfully and ask the guardian for passage")
    choice = input("What do you do? (1/2) ")
    if choice == "2":
        print("🙇 You bow low. The guardian studies you, then steps aside.")
        return "win"
    elif choice == "1":
        print("💀 The guardian's eyes blaze red — greed springs the ancient trap!")
        return "lose"
    else:
        print("🙇 Unsure, you bow just in case. The guardian seems pleased.")
        return "win"
```

Add all three `elif` lines to the dispatcher and you're done wiring it up:

```python
    elif current == "tunnel":
        current = tunnel_scene()
    elif current == "bridge":
        current = bridge_scene()
    elif current == "treasure":
        current = treasure_scene()
```

✅ **Zoom checkpoint:** Play a full **win** and a full **lose**. No crashes, no "Unknown scene!" 🎉

---

## ✅ Part 8: The Whole Adventure

Here is your complete engine. This is what should be in your `Y2-T3-W7-Adventure` Trinket:

```python
# 🗺️ Y2-T3-W7-Adventure — The Lost Temple of Zaria
# Made by: [YOUR NAME]

inventory = []   # our backpack — a list of items we pick up


def start_scene():
    print()
    print("🏛️  You stand at the cracked gate of the Lost Temple of Zaria.")
    print("The sun is setting. Inside, the legendary Golden Mask waits.")
    print("  1. Slip straight through into the great hall")
    print("  2. Explore the overgrown garden first")
    choice = input("What do you do? (1/2) ")
    if choice == "1":
        return "hall"
    elif choice == "2":
        return "garden"
    else:
        print("🤔 You dither... let's start in the garden.")
        return "garden"


def garden_scene():
    print()
    print("🌿 In the tangled garden, something glints in the soil.")
    print("You dig it out — a heavy GOLDEN KEY! You slip it into your pack.")
    inventory.append("key")
    print("  1. Head into the great hall now")
    print("  2. Search deeper among the vines")
    choice = input("What do you do? (1/2) ")
    if choice == "2":
        print("🔦 Under a broken statue you find a working TORCH. Grab it!")
        inventory.append("torch")
        return "hall"
    elif choice == "1":
        return "hall"
    else:
        print("🤔 Not sure? You head into the hall anyway.")
        return "hall"


def hall_scene():
    print()
    print("🏛️  The great hall is vast and silent.")
    print("A huge GOLDEN DOOR glows on the far wall.")
    print("A dark TUNNEL yawns to your left.")
    print("  1. Open the golden door")
    print("  2. Go down the dark tunnel")
    choice = input("What do you do? (1/2) ")
    if choice == "1":
        if "key" in inventory:
            print("🔑 Your golden key fits perfectly. The door swings open!")
            return "treasure"
        else:
            print("🔒 The door is locked tight — and you have no key.")
            print("You have no choice but to take the dark tunnel.")
            return "tunnel"
    elif choice == "2":
        return "tunnel"
    else:
        print("🤔 You hesitate, then step towards the tunnel.")
        return "tunnel"


def tunnel_scene():
    print()
    print("🕳️  The tunnel is pitch black. Cold air drifts from deep ahead,")
    print("and you can just hear a rope bridge creaking over a chasm.")
    print("  1. Feel your way forward to the rope bridge")
    print("  2. Search the tunnel floor for another way")
    choice = input("What do you do? (1/2) ")
    if choice == "2":
        if "torch" in inventory:
            print("🔦 Your torch lights a hidden stairway up to the treasure!")
            return "treasure"
        else:
            print("💀 In the dark you trip on a loose stone and fall into the chasm.")
            return "lose"
    elif choice == "1":
        return "bridge"
    else:
        print("🤔 You edge forward towards the creaking bridge.")
        return "bridge"


def bridge_scene():
    print()
    print("🌉 You reach a swaying rope bridge above a deep, dark chasm.")
    print("Halfway across, a plank SNAPS beneath your foot!")
    print("  1. Leap forward to the far side")
    print("  2. Scramble back the way you came")
    choice = input("What do you do? (1/2) ")
    if choice == "1":
        print("🏃 You leap and roll onto solid stone. The treasure room is ahead!")
        return "treasure"
    elif choice == "2":
        print("💀 You scramble back, but the whole bridge collapses into the dark.")
        return "lose"
    else:
        print("💀 You freeze — and the bridge gives way beneath you.")
        return "lose"


def treasure_scene():
    print()
    print("💰 You enter a room piled high with gold and jewels.")
    print("At its centre glows the GOLDEN MASK — but a huge STONE GUARDIAN")
    print("blocks the only exit, its eyes flickering to life.")
    print("  1. Snatch the mask and sprint for the exit")
    print("  2. Bow respectfully and ask the guardian for passage")
    choice = input("What do you do? (1/2) ")
    if choice == "2":
        print("🙇 You bow low. The guardian studies you, then steps aside.")
        return "win"
    elif choice == "1":
        print("💀 The guardian's eyes blaze red — greed springs the ancient trap!")
        return "lose"
    else:
        print("🙇 Unsure, you bow just in case. The guardian seems pleased.")
        return "win"


# ---- THE ENGINE: keep running scenes until we win or lose ----
current = "start"
while current != "win" and current != "lose":
    if current == "start":
        current = start_scene()
    elif current == "garden":
        current = garden_scene()
    elif current == "hall":
        current = hall_scene()
    elif current == "tunnel":
        current = tunnel_scene()
    elif current == "bridge":
        current = bridge_scene()
    elif current == "treasure":
        current = treasure_scene()
    else:
        print("Unknown scene!")
        current = "lose"

print()
print("=" * 40)
if current == "win":
    print("🎉 You escaped the Lost Temple with the Golden Mask! YOU WIN!")
else:
    print("💀 Game over. The temple keeps its secrets... for now.")
print("=" * 40)
```

### 🎮 Two playthroughs to try

**A winning run:** at the gate pick `2` (garden), then `2` (search — grab the torch), then at the hall pick `1` (open the door — you have the key!) → treasure → `2` (bow) → **🎉 YOU WIN!**

**A losing run:** at the gate pick `1` (straight to the hall, no key), then `1` (try the door — locked! → tunnel), then `2` (search the dark tunnel with no torch) → **💀 Game over.**

🎉 **You built a complete text adventure engine!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: A scene forgets to `return` (it returns `None`)**

❌ Wrong — this scene prints but never returns a name:
```python
def cave_scene():
    print("You are in a cave.")
    choice = input("Go left or right? ")
    if choice == "left":
        return "forest"
    # forgot the else — if the player types "right", nothing is returned!
```
When a function ends without hitting a `return`, Python hands back `None`. Then `current` becomes `None`, the dispatcher finds no matching `elif`, and:
```
Unknown scene!
```
The game ends instantly. ✅ **Fix:** make sure **every path** in every scene ends in a `return`:
```python
    if choice == "left":
        return "forest"
    else:
        return "river"
```

---

**Mistake 2: A scene returns a name with no matching `elif`**

❌ Wrong — the scene sends the player to `"river"`, but the dispatcher has no branch for it:
```python
def forest_scene():
    return "river"      # but there's no  elif current == "river":
```
```
Unknown scene!
```
The player teleports into nowhere. ✅ **Fix:** for **every** name a scene can return, add a matching `elif` to the loop (or make it `"win"`/`"lose"`). Spelling counts — `"river"` and `"River"` are different!

---

**Mistake 3: An infinite loop — a scene returns its OWN name forever**

❌ Wrong — every choice sends the player *back to the same scene*, with no way out:
```python
def hall_scene():
    choice = input("Which way? ")
    if choice == "1":
        return "hall"     # 😵 back to the hall...
    else:
        return "hall"     # ...and again... and again... forever!
```
The game never reaches `"win"` or `"lose"`, so the loop spins forever. ✅ **Fix:** make sure every scene has at least one path that leads **somewhere new**, and the map always flows towards an ending.

> 😵 Stuck in a forever loop? In Trinket, click **Stop** (or re-run) to escape it.

---

**Mistake 4: Comparing the choice the wrong way**

❌ Wrong — `input()` always gives **text**, so comparing to a number never matches:
```python
choice = input("Choose (1/2) ")
if choice == 1:          # 1 is a number; choice is the string "1"
    return "forest"
```
The `if` is never True, so the player always falls to the `else`. ✅ **Correct** — compare text to text:
```python
if choice == "1":        # quotes! "1" matches "1"
    return "forest"
```

---

## 🌟 What's Coming Next Week?

Your adventure is **finished** — and it's genuinely fun to play. Next week is **Week 8: Adventure Showcase & Celebration!** 🎉

- 🎤 You'll **demo your adventure** live on Zoom — share your screen and let a classmate play it
- 🗺️ You'll swap Trinket links and **play each other's stories**
- 💬 You'll give and get kind **peer feedback**
- 🎊 We'll **celebrate** finishing the Functions term!

> Bring your `Y2-T3-W7-Adventure` Trinket next week — make sure every path reaches win or lose without crashing, and you're proud of it. It's showtime!

---

## 🏆 Today's Achievements

- ✅ You built a **complete scene-function engine** with 6 scenes and 2 endings
- ✅ You used a **list inventory** with `append` and `in`
- ✅ You made items **unlock choices** — the key opens the door, the torch lights the tunnel
- ✅ You designed a **win** ending AND a **lose** ending, and made every path reach one
- ✅ You handled **silly input** with friendly `else` defaults so nothing crashes
- ✅ You finished this term's **big project** — a real, playable game!

> *"Look at what you built. Six scenes, an inventory, gated doors, a collapsing bridge, and two endings — all held together by ONE clever loop. Eight weeks ago 'functions calling functions' was a new idea. Today you used it to build a game people actually want to play. That's not learning to code anymore. That's *building*. Next week, you show the world."*
> — BrightByte 🤖⚔️

---

## 📚 Homework: Make Your Adventure Showcase-Ready ✨

Next week you'll **demo your adventure** to the class. This week, make it *yours* and make sure every path works.

**Requirements:**
1. Open your **`Y2-T3-W7-Adventure`** Trinket
2. Give it a **personal theme** (space station? haunted school? football tournament?) — rename the scenes and rewrite the story text
3. Have at least **5 scenes**, **one inventory item that unlocks a choice**, **one win** and **one lose** ending
4. Add **one new thing** (pick from the ideas below)
5. Test **every path** — no path should crash or hit "Unknown scene!"

**Personal-touch ideas (pick ONE):**
- 🗺️ Add a **6th scene** with a new branch
- 🎒 Add a **second item** that unlocks a different choice (like the torch)
- 🏆 Add a **second win ending** (a "good" ending and a "great" ending)
- 😀 Add friendly `else` defaults so silly input never breaks the story

**Challenge tiers:**
- ⭐ Reskin the story with your own theme; win and lose both work
- ⭐⭐ Add a second item that gates a choice
- ⭐⭐⭐ Add a scene the player can only reach by collecting TWO items first

> 💡 Bring this exact program to next week's showcase — you'll run it live on Zoom!

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't just finish a project — you built a world. Six scenes, a golden key, and a story only you could tell. Next week, hand someone the controls and watch them play. 🗺️⚔️*
