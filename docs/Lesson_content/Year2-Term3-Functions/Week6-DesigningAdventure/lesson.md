---
title: "Designing Your Adventure 🗺️✍️"
description: "Plan and scaffold your own Text Adventure game. Learn the engine pattern — each scene is a function that returns the name of the next scene — story-map it on paper, and build a working 2-3 scene adventure you'll finish next week"
difficulty: "intermediate"
order_index: 6
course_slug: "year2-term-3-functions"
is_premium: false
requires_trinket: true
starter_code: |
  # 🗺️ Y2-T3-W6-Adventure — Designing Your Adventure
  # Made by: [YOUR NAME]
  # IMPORTANT: Save this Trinket! Next week (Week 7) you finish the full engine.

  # --- The shared inventory (starts empty) ---
  inventory = []

  # --- Scene 1: the start ---
  def start_scene():
      print("You stand at a crossroads in a misty wood.")
      choice = input("Go (left) or (right)? ")
      if choice == "left":
          return "forest"      # <-- return the NEXT scene's name
      else:
          return "cave"

  # --- Scene 2: the forest (FILL ME IN!) ---
  def forest_scene():
      # 1. print a description
      # 2. maybe pick something up: inventory.append("map")
      # 3. ask a choice, then RETURN the next scene's name (or "win" / "lose")
      return "win"

  # --- Scene 3: the cave (FILL ME IN!) ---
  def cave_scene():
      # 1. print a description
      # 2. ask a choice, then RETURN "win" or "lose"
      return "lose"

  # --- The main loop: it sends the player to the right scene ---
  current = "start"
  while current != "win" and current != "lose":
      if current == "start":
          current = start_scene()
      elif current == "forest":
          current = forest_scene()
      elif current == "cave":
          current = cave_scene()
      else:
          print("Unknown scene!")
          current = "lose"

  # --- The ending ---
  if current == "win":
      print("🎉 You win!")
  else:
      print("💀 Game over.")
solution_code: |
  # 🗺️ Y2-T3-W6-Adventure — The Misty Wood
  # Made by: [YOUR NAME]
  # SAVE THIS! Next week (Week 7) you extend this exact program.

  # --- The shared inventory (every scene can see it) ---
  inventory = []

  # --- Scene: start ---
  def start_scene():
      print("=" * 40)
      print("🌲 You wake at a crossroads in a misty wood.")
      print("A path splits ahead of you.")
      choice = input("Go (left) into the forest or (right) to the cave? ")
      if choice == "left":
          return "forest"
      elif choice == "right":
          return "cave"
      else:
          print("You dither too long... and a goblin grabs you!")
          return "lose"

  # --- Scene: forest ---
  def forest_scene():
      print("=" * 40)
      print("🌳 Deep in the forest you spot an old map on the ground.")
      inventory.append("map")
      print("(You picked up a map! 🗺️)")
      choice = input("Do you (follow) the map or (rest) under a tree? ")
      if choice == "follow":
          return "cave"
      else:
          print("You nap too long and miss your chance...")
          return "lose"

  # --- Scene: cave ---
  def cave_scene():
      print("=" * 40)
      print("🕳️ You reach a dark cave with a locked stone door.")
      if "map" in inventory:
          print("Your map reveals a secret keyhole! You slip inside.")
          return "win"
      else:
          choice = input("You have no map. Do you (push) the door or (leave)? ")
          if choice == "push":
              print("The door will not budge. You are stuck in the dark.")
              return "lose"
          else:
              print("You wander off and never find the treasure...")
              return "lose"

  # --- The main loop: dispatch to the current scene ---
  current = "start"
  while current != "win" and current != "lose":
      if current == "start":
          current = start_scene()
      elif current == "forest":
          current = forest_scene()
      elif current == "cave":
          current = cave_scene()
      else:
          print("Unknown scene!")
          current = "lose"

  # --- The ending ---
  print("=" * 40)
  if current == "win":
      print("🎉 You found the treasure. You WIN!")
  else:
      print("💀 Game over.")
class_activities: |
  ## 🗺️ Class Activity: Story-Map It, Then Build It — Live, Together!

  Two halves today. **First we PLAN on paper. Then we BUILD in Trinket** — one scene at a time. After each scene, **run your code** and give a **thumbs up** 👍 when it works. We move together, scene by scene.

  > 📁 **First:** create a new Trinket and name it **`Y2-T3-W6-Adventure`**. You will KEEP this file and finish the full engine next week!

  ### Part A — Story-Map on Paper (⭐)
  Grab paper (or the Zoom whiteboard). Draw a box for each scene and an arrow for each choice:
  ```
            [ start ]
           /         \
      left/           \right
         /             \
   [ forest ]        [ cave ]
       |                |
   follow map        need map?
       |             /      \
       →----------→ WIN     LOSE
  ```
  ✅ **Checkpoint:** Every arrow must point to another box OR to WIN/LOSE. No arrow may point to nothing! Thumbs up when yours does. 👍

  ### Part B — The Inventory + Start Scene (⭐)
  ```python
  inventory = []

  def start_scene():
      print("🌲 You wake at a crossroads in a misty wood.")
      choice = input("Go (left) into the forest or (right) to the cave? ")
      if choice == "left":
          return "forest"
      elif choice == "right":
          return "cave"
      else:
          print("You dither too long... and a goblin grabs you!")
          return "lose"
  ```
  ✅ **Checkpoint:** Type in the Zoom chat — what does `start_scene()` **return** if the player types `left`? (`"forest"` — a string!)

  ### Part C — The Forest Scene + Picking Up an Item (⭐⭐)
  ```python
  def forest_scene():
      print("🌳 Deep in the forest you spot an old map on the ground.")
      inventory.append("map")
      print("(You picked up a map! 🗺️)")
      choice = input("Do you (follow) the map or (rest) under a tree? ")
      if choice == "follow":
          return "cave"
      else:
          print("You nap too long and miss your chance...")
          return "lose"
  ```
  ✅ **Checkpoint:** What did we add to `inventory`? Type it in the chat! (`"map"`)

  ### Part D — The Cave Scene (an inventory-gated choice!) (⭐⭐)
  ```python
  def cave_scene():
      print("🕳️ You reach a dark cave with a locked stone door.")
      if "map" in inventory:
          print("Your map reveals a secret keyhole! You slip inside.")
          return "win"
      else:
          print("You have no map. The door will not budge...")
          return "lose"
  ```
  ✅ **Checkpoint:** Notice `if "map" in inventory:` — the ending changes depending on what you're carrying!

  ### Part E — The Main Loop (⭐⭐⭐)
  ```python
  current = "start"
  while current != "win" and current != "lose":
      if current == "start":
          current = start_scene()
      elif current == "forest":
          current = forest_scene()
      elif current == "cave":
          current = cave_scene()
      else:
          print("Unknown scene!")
          current = "lose"

  if current == "win":
      print("🎉 You WIN!")
  else:
      print("💀 Game over.")
  ```
  ✅ **Final checkpoint:** Run it. Play `left` → `follow` → do you WIN? Play `right` → do you LOSE (no map)? 🎉 Thumbs up and **save your Trinket!**
take_home_assignment: |
  ## 📚 Homework: Grow Your Adventure

  Your class adventure has 3 scenes. Make it a real quest — **4 or 5 scenes** and a **meaningful item**.

  **Requirements:**
  1. Open your **`Y2-T3-W6-Adventure`** Trinket (the one from class)
  2. Add **at least one new scene** as a function (so you have 4-5 scenes total)
  3. Add a matching `elif current == "yourscene":` branch to the main loop
  4. Add **at least one inventory item** using `inventory.append("something")`
  5. Use `if "something" in inventory:` in a later scene so the item **changes what happens**
  6. Story-map it first, then check: does every scene `return` a scene name or `"win"`/`"lose"`?

  **Ideas:**
  - A **river** scene: pick up a `"rope"`; later a `"cliff"` scene needs the rope to cross
  - A **key** in one scene that unlocks a `"door"` scene ending
  - A **torch** that lets you survive a `"dark tunnel"` scene

  **Example new scene:**
  ```python
  def river_scene():
      print("🌊 A wide river blocks your path. A coil of rope lies nearby.")
      inventory.append("rope")
      print("(You picked up a rope! 🪢)")
      return "cliff"
  ```

  **Challenge tiers:**
  - ⭐ 4 scenes and one inventory item that changes an ending
  - ⭐⭐ 5 scenes, an item, and at least TWO different endings (more than one way to win/lose)
  - ⭐⭐⭐ 5+ scenes AND a scene the player can only pass if they collected the right item earlier

  > ⚠️ Remember: every scene function must **`return` a string** — the next scene's name, or `"win"`/`"lose"`. A scene with no `return` hands back `None` and the loop breaks!

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Did You Know? Your Story-Map Is a Decision Tree

  The scene diagram you drew — boxes joined by choice-arrows — has a real name in computer science: a **decision tree**. Each box is a point where something has to be decided, and each arrow is one possible path.

  AI uses decision trees all the time. When a game character decides whether to chase you or run away, or when a chess program plans its next move, it is quietly walking a tree of "if I do this, then that could happen" — exactly like your player walking from `start` to `forest` to the treasure.

  **Discuss in the Zoom chat:** "In your adventure, which choice matters MOST — the one that decides whether you win or lose?"

  You just designed the same kind of branching logic that powers game AI. Every clever decision a computer makes starts with a map of choices, just like yours. 🌳
---

# Year 2, Lesson 6: Designing Your Adventure 🗺️✍️

**Course:** Functions
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 3 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

- What a **text adventure** is, and the clever **engine pattern** that powers one
- How to **story-map** a game on paper — scenes as boxes, choices as arrows
- How to write a **scene as a function** that prints, asks a question, and **returns the name of the next scene**
- How a **main loop** reads a `current` scene name and calls the matching scene function
- How a shared **`inventory` list** lets scenes hand items to each other — and how items can change the story
- You'll finish with a **working 3-scene adventure** you extend into a full game next week 🎉

---

## 🤖 BrightByte Sets the Quest

> *"For five weeks you've mastered functions — defining them, passing them information, returning answers, and letting them call each other. Now we point all of that at something magical: YOUR OWN adventure game. Here's the beautiful trick — each SCENE of your story is just a function. It describes a place, offers a choice, and RETURNS the name of wherever the player goes next. A little loop does the rest. Today you plan your world and build the engine. Next week you finish the game. Grab a pen — every great game starts as a map!"*
> — BrightByte 🤖🗺️

---

## 🧩 Part 1: What Are We Building?

A **text adventure** is a game made of words. The computer describes a place, gives you choices, and you type your choice to move through a story. No pictures needed — just imagination and Python!

Here's a taste of what your finished game will feel like:

```
========================================
🌲 You wake at a crossroads in a misty wood.
A path splits ahead of you.
Go (left) into the forest or (right) to the cave? left
========================================
🌳 Deep in the forest you spot an old map on the ground.
(You picked up a map! 🗺️)
Do you (follow) the map or (rest) under a tree? follow
========================================
🕳️ You reach a dark cave with a locked stone door.
Your map reveals a secret keyhole! You slip inside.
========================================
🎉 You found the treasure. You WIN!
```

How do we build something that branches like that without turning into a tangled mess? With a clean, repeatable idea called **the engine pattern**.

### The Engine Pattern (learn this — it's the whole term project!)

Three simple rules run the entire game:

1. **Each scene is a function.** It prints a description, offers choices with `input()`, and **`return`s the name of the next scene** — a string like `"forest"` or `"cave"`.
2. **A main loop keeps a variable called `current`** — the name of the scene the player is in. It calls the matching scene function and stores the returned name back in `current`.
3. **A shared `inventory` list** starts empty. Scenes can `append` items to it, and later scenes can check what's inside to change the story.

> 📁 **BEFORE WE START:** Open Trinket, create a **new** Python trinket, and name it exactly **`Y2-T3-W6-Adventure`**. This is important — next week you finish THIS EXACT file into your full Text Adventure Engine. Do not delete it!

---

## 🗺️ Part 2: Story-Map First (Plan Before You Code)

Real game designers never start by typing. They **draw the map first**. Grab paper or use the Zoom whiteboard. Draw a **box** for each scene and an **arrow** for each choice:

```
          [ start ]
         /         \
    left/           \right
       /             \
 [ forest ]        [ cave ]
     |                |
 follow map        need map?
     |             /      \
     →----------→ WIN     LOSE
```

Two golden rules for your map:

- **Every arrow must point somewhere** — to another box, or to **WIN** / **LOSE**. An arrow that points to nothing becomes a bug later!
- **Mark where items are picked up.** In our map, the player finds a **map** 🗺️ in the forest. That item will decide whether they can get into the cave.

> 💡 A map with 3 boxes is perfect for today. You'll add more boxes for homework — but plan them on paper *first*, every time.

✅ **Zoom checkpoint:** Draw your map. Does every arrow point to a box or to WIN/LOSE? Thumbs up! 👍

---

## 🎬 Part 3: A Scene Is a Function

Now we turn our first box into code. A scene function follows the **same shape every time**:

```python
def start_scene():
    print("🌲 You wake at a crossroads in a misty wood.")
    choice = input("Go (left) into the forest or (right) to the cave? ")
    if choice == "left":
        return "forest"
    elif choice == "right":
        return "cave"
    else:
        print("You dither too long... and a goblin grabs you!")
        return "lose"
```

Read it slowly — every scene you ever write has these four ingredients:

- `def start_scene():` — the scene's **name**, ending in `_scene`
- `print(...)` — **describe** the place
- `choice = input(...)` — **offer a choice** and capture the player's answer
- `return "forest"` — hand back the **name of the next scene** (always a string!)

> ⚠️ **THE #1 ADVENTURE RULE:** a scene function must **`return` a string** on every path — the name of the next scene, or `"win"` / `"lose"`. Look above: the `if`, the `elif`, AND the `else` each end in a `return`. There is no way to leave this function without returning a scene name. Hold onto that — it's what keeps the game moving.

✅ **Zoom checkpoint:** If the player types `left`, what does `start_scene()` return? Type it in the chat! (`"forest"` — a string.)

---

## 🌳 Part 4: More Scenes — and Picking Up Items

Now the forest box. This scene shows off the **inventory**: the player finds a map, and we store it.

```python
def forest_scene():
    print("🌳 Deep in the forest you spot an old map on the ground.")
    inventory.append("map")
    print("(You picked up a map! 🗺️)")
    choice = input("Do you (follow) the map or (rest) under a tree? ")
    if choice == "follow":
        return "cave"
    else:
        print("You nap too long and miss your chance...")
        return "lose"
```

`inventory.append("map")` adds the string `"map"` to our shared list — exactly the list skill you learned earlier this year, now doing real work in a game!

And the cave box — this is where the story gets clever. The ending **depends on what the player is carrying**:

```python
def cave_scene():
    print("🕳️ You reach a dark cave with a locked stone door.")
    if "map" in inventory:
        print("Your map reveals a secret keyhole! You slip inside.")
        return "win"
    else:
        print("You have no map. The door will not budge...")
        return "lose"
```

`if "map" in inventory:` asks *"is the string `map` inside our list?"* If the player visited the forest, it's there — they win. If they marched straight to the cave, it isn't — they lose. **One list turns a flat story into a real puzzle.** 🧩

✅ **Zoom checkpoint:** What two different endings can `cave_scene()` give, and what decides between them? (WIN or LOSE — decided by whether `"map"` is in the inventory.)

---

## 🔁 Part 5: The Main Loop — The Real Engine

We have three scene functions. What actually *plays* the game? A single loop that remembers the `current` scene, calls the matching function, and stores the returned name back in `current`.

```python
current = "start"
while current != "win" and current != "lose":
    if current == "start":
        current = start_scene()
    elif current == "forest":
        current = forest_scene()
    elif current == "cave":
        current = cave_scene()
    else:
        print("Unknown scene!")
        current = "lose"
```

### 🔎 Reading the Engine Line by Line

- `current = "start"` — the game always begins in the `start` scene
- `while current != "win" and current != "lose":` — keep playing **until** we reach an ending
- `if current == "start": current = start_scene()` — we're in start, so call `start_scene()`, and whatever it **returns** becomes the new `current`
- `elif current == "forest": ...` — same idea for every scene
- `else: ... current = "lose"` — a safety net: if `current` is somehow a name we don't recognise, end the game rather than loop forever

> ⚠️ **WHY THE LOOP STOPS:** every scene eventually returns `"win"` or `"lose"`. The moment `current` becomes one of those, the `while` condition is false and the loop ends. If a scene forgot to return anything, `current` would become `None`, hit the `else`, and the game would end with "Unknown scene!" — a clue that a scene is missing its `return`.

### The Ending

After the loop, we announce the result:

```python
if current == "win":
    print("🎉 You found the treasure. You WIN!")
else:
    print("💀 Game over.")
```

---

## ✅ Part 6: The Whole Program — Run It!

Here is your complete 3-scene adventure. This is what should be in your `Y2-T3-W6-Adventure` Trinket:

```python
# 🗺️ Y2-T3-W6-Adventure — The Misty Wood
# Made by: [YOUR NAME]

# --- The shared inventory (every scene can see it) ---
inventory = []

# --- Scene: start ---
def start_scene():
    print("=" * 40)
    print("🌲 You wake at a crossroads in a misty wood.")
    print("A path splits ahead of you.")
    choice = input("Go (left) into the forest or (right) to the cave? ")
    if choice == "left":
        return "forest"
    elif choice == "right":
        return "cave"
    else:
        print("You dither too long... and a goblin grabs you!")
        return "lose"

# --- Scene: forest ---
def forest_scene():
    print("=" * 40)
    print("🌳 Deep in the forest you spot an old map on the ground.")
    inventory.append("map")
    print("(You picked up a map! 🗺️)")
    choice = input("Do you (follow) the map or (rest) under a tree? ")
    if choice == "follow":
        return "cave"
    else:
        print("You nap too long and miss your chance...")
        return "lose"

# --- Scene: cave ---
def cave_scene():
    print("=" * 40)
    print("🕳️ You reach a dark cave with a locked stone door.")
    if "map" in inventory:
        print("Your map reveals a secret keyhole! You slip inside.")
        return "win"
    else:
        choice = input("You have no map. Do you (push) the door or (leave)? ")
        if choice == "push":
            print("The door will not budge. You are stuck in the dark.")
            return "lose"
        else:
            print("You wander off and never find the treasure...")
            return "lose"

# --- The main loop: dispatch to the current scene ---
current = "start"
while current != "win" and current != "lose":
    if current == "start":
        current = start_scene()
    elif current == "forest":
        current = forest_scene()
    elif current == "cave":
        current = cave_scene()
    else:
        print("Unknown scene!")
        current = "lose"

# --- The ending ---
print("=" * 40)
if current == "win":
    print("🎉 You found the treasure. You WIN!")
else:
    print("💀 Game over.")
```

### Try These Example Runs

**Ama takes the winning route:**
```
Go (left) into the forest or (right) to the cave? left
🌳 Deep in the forest you spot an old map on the ground.
(You picked up a map! 🗺️)
Do you (follow) the map or (rest) under a tree? follow
🕳️ You reach a dark cave with a locked stone door.
Your map reveals a secret keyhole! You slip inside.
🎉 You found the treasure. You WIN!
```

**Kofi rushes to the cave without a map:**
```
Go (left) into the forest or (right) to the cave? right
🕳️ You reach a dark cave with a locked stone door.
You have no map. Do you (push) the door or (leave)? push
The door will not budge. You are stuck in the dark.
💀 Game over.
```

**Zara naps in the forest:**
```
Go (left) into the forest or (right) to the cave? left
🌳 Deep in the forest you spot an old map on the ground.
(You picked up a map! 🗺️)
Do you (follow) the map or (rest) under a tree? rest
You nap too long and miss your chance...
💀 Game over.
```

🎉 **You built a real, working adventure engine!** Save your Trinket now.

---

## ⚠️ Common Mistakes

**Mistake 1: A scene forgets to return the next scene**

❌ Wrong — this scene prints but never returns:
```python
def forest_scene():
    print("🌳 You are in the forest.")
    # oops — no return!
```
When the loop calls it, the function hands back `None`. Then `current = None`, which isn't `"start"`, `"forest"`, or `"cave"`, so:
```
Unknown scene!
💀 Game over.
```
😱 The game ends instantly for no reason!

✅ Correct — every path returns a scene name:
```python
def forest_scene():
    print("🌳 You are in the forest.")
    return "cave"
```

> Every scene function MUST end with a `return` on every branch — a scene name, or `"win"`/`"lose"`.

---

**Mistake 2: A scene returns its OWN name — infinite loop!**

❌ Wrong — `cave_scene` sends the player back to the cave, forever:
```python
def cave_scene():
    print("🕳️ You are in the cave.")
    return "cave"     # 🔁 sends us straight back here!
```
The loop calls `cave_scene()`, `current` becomes `"cave"`, so it calls `cave_scene()` again... and again... The screen fills with the same line and never stops. In Trinket you'll have to press **Stop**.

✅ Correct — return a DIFFERENT scene, or an ending:
```python
def cave_scene():
    print("🕳️ You are in the cave.")
    return "win"      # moves the game forward
```

> A scene should always move the player onward. Never `return` your own scene's name.

---

**Mistake 3: Comparing the choice wrong (case and quotes)**

❌ Wrong — `Left` (capital L) never matches:
```python
choice = input("Go (left) or (right)? ")
if choice == "Left":      # player typed "left" — no match!
    return "forest"
```
The player types `left`, but `"left"` and `"Left"` are different strings, so the branch is skipped.

✅ Correct — match exactly what you asked for, and give the choice words in the prompt:
```python
choice = input("Go (left) or (right)? ")
if choice == "left":
    return "forest"
```

> Tell the player the exact words to type — `(left)` / `(right)` — and compare against those exact lowercase strings.

---

**Mistake 4: Adding a scene function but forgetting the loop branch**

❌ You write a lovely `river_scene()` and a scene returns `"river"`... but the loop has no `elif current == "river":`. Result:
```
Unknown scene!
💀 Game over.
```

✅ Every scene function needs a matching branch in the main loop:
```python
elif current == "river":
    current = river_scene()
```

> New scene = new function **and** a new `elif` in the loop. They come as a pair.

---

## 🌟 What's Coming Next Week?

Your engine works — but right now it's a small adventure. Next week is the big one!

Next week — **Week 7: Build the Text Adventure Engine** — we turn your scaffold into a complete game:

- 🏰 **More scenes** woven into a proper branching quest
- 🎒 **Inventory-gated choices** — doors that only open with the right item, paths that need a rope or a torch
- 🏆 **Multiple win and lose endings** so every playthrough feels different
- ✨ **Polish** — tidy banners, a "your backpack contains..." display, and replayability

> Keep your `Y2-T3-W6-Adventure` Trinket safe — next week we finish THIS EXACT program into a full Text Adventure Engine you'll show off in Week 8!

---

## 🏆 Today's Achievements

- ✅ You learned the **engine pattern**: scenes are functions that return the next scene's name
- ✅ You **story-mapped** a game on paper before writing a line of code
- ✅ You wrote **scene functions** that print, offer choices, and `return` strings
- ✅ You used a shared **`inventory` list** to make an item change the ending
- ✅ You built a **main loop** that dispatches to the right scene and stops on `"win"`/`"lose"`
- ✅ You have a **working 3-scene adventure** — your term project has begun!

> *"Look what you just did. You didn't write ONE program — you built an *engine* that can run any story you feed it. Add a scene function, add a loop branch, and your world grows. That's not a beginner move — that's how real game studios think. Next week, we build your whole world."*
> — BrightByte 🤖🗺️

---

## 📚 Homework: Grow Your Adventure

Your class adventure has 3 scenes. Make it a real quest — **4 or 5 scenes** and a **meaningful item**.

**Requirements:**
1. Open your **`Y2-T3-W6-Adventure`** Trinket (the one from class)
2. Add **at least one new scene** as a function (so you have 4-5 scenes total)
3. Add a matching `elif current == "yourscene":` branch to the main loop
4. Add **at least one inventory item** using `inventory.append("something")`
5. Use `if "something" in inventory:` in a later scene so the item **changes what happens**
6. Story-map it first, then check: does every scene `return` a scene name or `"win"`/`"lose"`?

**Ideas:**
- A **river** scene: pick up a `"rope"`; later a `"cliff"` scene needs the rope to cross
- A **key** in one scene that unlocks a `"door"` scene ending
- A **torch** that lets you survive a `"dark tunnel"` scene

**Example new scene:**
```python
def river_scene():
    print("🌊 A wide river blocks your path. A coil of rope lies nearby.")
    inventory.append("rope")
    print("(You picked up a rope! 🪢)")
    return "cliff"
```

**Challenge tiers:**
- ⭐ 4 scenes and one inventory item that changes an ending
- ⭐⭐ 5 scenes, an item, and at least TWO different endings (more than one way to win/lose)
- ⭐⭐⭐ 5+ scenes AND a scene the player can only pass if they collected the right item earlier

> ⚠️ Remember: every scene function must **`return` a string** — the next scene's name, or `"win"`/`"lose"`. A scene with no `return` hands back `None` and the loop breaks!

**Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You didn't just learn to code today — you built a story engine. See you next week to finish the whole adventure! 🗺️✍️*
