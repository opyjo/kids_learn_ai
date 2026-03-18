---
title: "Project - Big Adventure!"
description: "Build your complete term project - an expanded interactive adventure game using everything you've learned!"
difficulty: "beginner"
order_index: 7
course_slug: "term-4-more-choices"
is_premium: false
requires_trinket: true
starter_code: |
  # ================================
  # MY BIG ADVENTURE GAME
  # By: [Your Name]
  # Term 4 Project
  # ================================

  # === WELCOME SCREEN ===
  print("=" * 50)
  print("     🎮 WELCOME TO MY ADVENTURE! 🎮")
  print("=" * 50)
  print("")

  # === STORY BEGINNING ===
  print("You land on a strange planet...")
  print("")

  # === FIRST CHOICE ===
  print("There are three paths:")
  print("1. Go to the glowing cave")
  print("2. Walk toward the purple forest")
  print("3. Investigate the crashed ship")
  print("")

  choice1 = input("Enter your choice (1, 2, or 3): ")

  if choice1 == "1":
      print("You enter the cave...")
      # Add more story here!
  elif choice1 == "2":
      print("You walk into the forest...")
      # Add more story here!
  elif choice1 == "3":
      print("You investigate the ship...")
      # Add more story here!
  else:
      print("Invalid choice! Please enter 1, 2, or 3.")

  # === ENDING ===
  print("")
  print("THE END")
  print("=" * 50)
class_activities: |
  ## 🎮 Class Activity: Adventure Workshop!

  **Part 1: Planning (15 min)**
  - Review the requirements
  - Plan your adventure story
  - Think about choices, paths, and endings
  - Sketch out your story structure

  **Part 2: Building (30 min)**
  - Start building your adventure
  - Test frequently as you go
  - Help neighbors with bugs
  - Add your personal touches!

  **Part 3: Testing & Polish (10 min)**
  - Test all paths and choices
  - Fix any bugs
  - Add decorations and messages
  - Make it yours!

  **Part 4: Preview (5 min)**
  - Run your complete adventure
  - Make final adjustments
  - Get ready to showcase next week!
take_home_assignment: |
  ## 📚 Homework: Complete Your Big Adventure

  **Assignment:** Finish and polish your expanded adventure game for the Week 8 showcase!

  **Requirements:**
  1. Welcome message with decorative borders
  2. Longer story with more branches than Term 3
  3. Uses elif for multiple choices (not just yes/no)
  4. At least 4 different endings based on choices
  5. Includes a simple scoring or inventory system
  6. Uses if/elif/else correctly
  7. NO BUGS - code runs perfectly!
  8. Add comments explaining your story

  **Bonus Points:**
  - Add more choices (5+ choices)
  - Add more endings (6+ endings)
  - Add nested choices (choices within choices)
  - Add scoring system (points for good choices)
  - Add inventory system (collect items)
  - Add decorative borders and emojis
  - Create a themed adventure (space, fantasy, mystery, etc.)
  - Make it interactive with menus

  **Submit:** Share your Trinket link. Be ready to present at the Week 8 Showcase!
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Interactive games and stories use the same decision-making logic you're learning! When you play a video game and choose different paths, the game uses if/elif/else to show you different outcomes. AI-powered interactive fiction uses these same patterns to create dynamic stories that respond to player choices!

  You're building the same interactive logic that powers games and AI storytelling systems!
---
# Term 4, Lesson 7: Project - Big Adventure! 🎮

**Course:** Term 4: More Choices  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Build Today

By the end of this lesson, you will have:

- Built your complete Term 4 project
- Created an expanded adventure game with multiple paths
- Used elif for multiple choices (not just yes/no)
- Included at least 4 different endings
- Added a scoring or inventory system
- Combined ALL your skills from this term!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! This is it—your TERM PROJECT! You've learned SO MUCH this term: if, else, elif, and, or, menus, quizzes! Now you're going to put it ALL together to build an AMAZING expanded adventure game! This will be bigger and better than your Term 3 adventure—with more choices, more paths, and more endings! You're ready for this!"_

### What Makes This Project Special?

In Term 3, you built:
- A mini adventure with 2-3 endings
- Simple yes/no choices
- Basic if/else statements

This Term 4 project will have:
- **More choices** — Using elif for multiple options!
- **More paths** — Longer story with more branches!
- **More endings** — At least 4 different endings!
- **Scoring/Inventory** — Track points or collect items!
- **Everything combined** — All your skills in one project!

> _BrightByte says: "This is your chance to show off everything you've learned! Build something amazing, creative, and fun! Make it yours! I can't wait to see what you create!"_

---

## 📋 Project Requirements

### Must Have:

1. ✅ **Welcome message** — With decorative borders
2. ✅ **Longer story** — More branches than Term 3
3. ✅ **elif for choices** — Multiple options (1, 2, 3, etc.), not just yes/no
4. ✅ **At least 4 endings** — Different outcomes based on choices
5. ✅ **Scoring or inventory** — Track points or collect items
6. ✅ **No bugs** — Code runs perfectly!
7. ✅ **Comments** — Explain your story

### Bonus Features:

- More choices (5+)
- More endings (6+)
- Nested choices (choices within choices)
- Scoring system (points for good choices)
- Inventory system (collect items)
- Themed adventure (space, fantasy, mystery, etc.)
- Interactive menus

---

## 🎮 Building Your Adventure - Step by Step

### Step 1: Plan Your Story

Before coding, plan your adventure:

- **Theme:** What's your adventure about? (Space, fantasy, mystery, etc.)
- **Beginning:** How does it start?
- **Choices:** What choices will players make?
- **Paths:** What happens on each path?
- **Endings:** What are the different endings?
- **Scoring/Inventory:** How will you track progress?

**Example Plan:**
- Theme: Space Explorer
- Beginning: Land on strange planet
- Choice 1: Cave, Forest, or Ship (3 options)
- Choice 2: Different based on Choice 1
- Endings: Treasure, Escape, Friend, Mystery (4 endings)
- Scoring: Points for good choices

### Step 2: Welcome Screen

Start with a great welcome:

```python
# === WELCOME SCREEN ===
print("=" * 50)
print("     🎮 THE SPACE EXPLORER 🎮")
print("=" * 50)
print("")
print("Welcome, brave explorer!")
print("Your adventure begins now...")
print("")
```

### Step 3: Story Beginning

Set the scene:

```python
# === STORY BEGINNING ===
print("You land on a strange planet.")
print("The sky is purple and the trees are glowing.")
print("You see three paths ahead of you:")
print("")
```

### Step 4: First Choice with elif

Use elif for multiple options:

```python
# === FIRST CHOICE ===
print("1. Go to the glowing cave")
print("2. Walk toward the purple forest")
print("3. Investigate the crashed ship")
print("")

choice1 = input("Enter your choice (1, 2, or 3): ")

if choice1 == "1":
    print("You enter the glowing cave...")
    print("Inside, you find ancient crystals!")
    # Add more story here!
elif choice1 == "2":
    print("You walk into the purple forest...")
    print("The trees are singing a strange melody!")
    # Add more story here!
elif choice1 == "3":
    print("You investigate the crashed ship...")
    print("You find a working communication device!")
    # Add more story here!
else:
    print("Invalid choice! Please enter 1, 2, or 3.")
```

### Step 5: Add More Choices

Continue the story with more choices:

```python
# If they chose the cave...
if choice1 == "1":
    print("You enter the glowing cave...")
    print("An alien appears and offers you three gifts:")
    print("1. A map")
    print("2. A laser sword")
    print("3. A translator device")
    print("")
    
    choice2 = input("Enter your choice (1, 2, or 3): ")
    
    if choice2 == "1":
        print("With the map, you find hidden treasure!")
        print("THE END - TREASURE ending! 🏆")
    elif choice2 == "2":
        print("With the sword, you become a warrior!")
        print("THE END - WARRIOR ending! ⚔️")
    elif choice2 == "3":
        print("With the translator, you make friends!")
        print("THE END - FRIENDSHIP ending! 👥")
    else:
        print("Invalid choice!")
```

### Step 6: Add Scoring System

Track points for good choices:

```python
score = 0

# At the beginning
print("Starting score: 0 points")
print("")

# When they make good choices
if choice1 == "1":
    score = score + 10
    print(f"You gained 10 points! Total: {score}")

# At the end
print("")
print(f"Final score: {score} points")
if score >= 20:
    print("🌟 You're a master explorer!")
elif score >= 10:
    print("⭐ You're a good explorer!")
else:
    print("💪 Keep exploring!")
```

### Step 7: Add Multiple Endings

Make sure you have at least 4 different endings:

```python
# Ending 1: Treasure
print("THE END - You found the TREASURE! 🏆")

# Ending 2: Escape
print("THE END - You ESCAPED the planet! 🚀")

# Ending 3: Friendship
print("THE END - You made FRIENDS with the aliens! 👥")

# Ending 4: Mystery
print("THE END - The MYSTERY remains unsolved! 🤔")
```

---

## 🎨 Complete Example Structure

Here's a complete structure to inspire you:

```python
# ================================
# THE SPACE EXPLORER
# By: [Your Name]
# Term 4 Project
# ================================

# === SETUP ===
score = 0
inventory = []

# === WELCOME SCREEN ===
print("=" * 50)
print("     🎮 THE SPACE EXPLORER 🎮")
print("=" * 50)
print("")
print("Welcome, brave explorer!")
print("Your adventure begins now...")
print("")

# === STORY BEGINNING ===
print("You land on a strange planet.")
print("The sky is purple and the trees are glowing.")
print("You see three paths ahead of you:")
print("")

# === FIRST CHOICE ===
print("1. Go to the glowing cave")
print("2. Walk toward the purple forest")
print("3. Investigate the crashed ship")
print("")

choice1 = input("Enter your choice (1, 2, or 3): ")

if choice1 == "1":
    # Path 1: Cave
    print("")
    print("You enter the glowing cave...")
    print("Inside, you find ancient crystals!")
    score = score + 10
    inventory.append("Crystal")
    print(f"Score: {score} | Inventory: {inventory}")
    print("")
    
    # Second choice in cave
    print("An alien appears and offers you three gifts:")
    print("1. A map")
    print("2. A laser sword")
    print("3. A translator device")
    print("")
    
    choice2 = input("Enter your choice (1, 2, or 3): ")
    
    if choice2 == "1":
        print("")
        print("With the map, you find hidden treasure!")
        score = score + 20
        print(f"Final score: {score}")
        print("THE END - TREASURE ending! 🏆")
    elif choice2 == "2":
        print("")
        print("With the sword, you become a warrior!")
        score = score + 15
        print(f"Final score: {score}")
        print("THE END - WARRIOR ending! ⚔️")
    elif choice2 == "3":
        print("")
        print("With the translator, you make friends!")
        score = score + 25
        print(f"Final score: {score}")
        print("THE END - FRIENDSHIP ending! 👥")
    else:
        print("Invalid choice!")

elif choice1 == "2":
    # Path 2: Forest
    print("")
    print("You walk into the purple forest...")
    print("The trees are singing a strange melody!")
    score = score + 5
    print(f"Score: {score}")
    print("")
    print("You discover a hidden path that leads to escape!")
    score = score + 15
    print(f"Final score: {score}")
    print("THE END - ESCAPE ending! 🚀")

elif choice1 == "3":
    # Path 3: Ship
    print("")
    print("You investigate the crashed ship...")
    print("You find a working communication device!")
    score = score + 10
    inventory.append("Communication Device")
    print(f"Score: {score} | Inventory: {inventory}")
    print("")
    print("But the mystery of who crashed remains unsolved...")
    print(f"Final score: {score}")
    print("THE END - MYSTERY ending! 🤔")

else:
    print("Invalid choice! Please enter 1, 2, or 3.")

# === FINAL MESSAGE ===
print("")
print("=" * 50)
print("Thanks for playing!")
print("=" * 50)
```

---

## 🎯 Testing Your Adventure

### Test Checklist

Before you're done, test your adventure:

- [ ] All possible choices work
- [ ] All different paths work
- [ ] All endings are different
- [ ] Scoring/inventory works correctly
- [ ] No bugs or errors
- [ ] It looks polished and professional

### What to Check

- Does it ask for choices correctly?
- Do all elif choices work?
- Are all endings different and interesting?
- Does scoring/inventory work?
- Does it look good with borders and formatting?

---

## 📝 Key Takeaways

### What You're Building

- A **complete interactive game** — Your biggest project yet!
- Something **bigger than Term 3** — More choices, more paths, more endings!
- Something that **uses everything** — All your skills combined!
- Something to **be proud of** — Show it off next week!

### Important Things to Remember

1. **Use elif for multiple choices** — Not just yes/no!
2. **Test all paths** — Make sure every choice works!
3. **Add scoring/inventory** — Track progress!
4. **At least 4 endings** — Make them different and interesting!
5. **Make it yours** — Add personal touches and creativity!
6. **Ask for help** — It's okay to need help!
7. **Be proud** — You're building something amazing!

---

## 🌟 Next Lesson Preview

**Week 8: Showcase + Badge! 🎉**

Next week, you'll present your adventure game to the class, celebrate your achievements, share your amazing work, and earn your "Decision Master" badge! Get ready to show off what you've built!

---

## 🎉 Great Job!

You just built your Term 4 project!

**What you accomplished today:**

- ✅ Built a complete expanded adventure game
- ✅ Used elif for multiple choices
- ✅ Created at least 4 different endings
- ✅ Added scoring or inventory system
- ✅ Combined ALL your skills from this term
- ✅ Created something you can be proud of!

> _BrightByte says: "WOW! You did it! 🎮 You built an AMAZING expanded adventure game! This is bigger and better than anything you've built before! You've used everything you learned—if, else, elif, and, or, menus, quizzes—all in one amazing project! Next week, we're going to celebrate all your hard work and you'll earn your 'Decision Master' badge! I'm so proud of you!"_

---

## 📚 Final Tips

Before next week's showcase:

1. **Test everything** — Make sure all paths and choices work!
2. **Fix any bugs** — No errors allowed!
3. **Add personal touches** — Make it yours!
4. **Practice presenting** — Be ready to show it off!
5. **Be proud** — You built something amazing!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor for help. This is your project—make it amazing!_ 🎮
