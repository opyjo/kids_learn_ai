---
title: "Project - Mini Adventure!"
description: "Build your complete term project - an interactive choose-your-own-adventure game using everything you've learned!"
difficulty: "beginner"
order_index: 7
course_slug: "term-3-decision-maker"
is_premium: false
requires_trinket: true
starter_code: |
  # ================================
  # MY MINI ADVENTURE GAME
  # By: [Your Name]
  # Term 3 Project
  # ================================

  # === WELCOME SCREEN ===
  print("=" * 40)
  print("     WELCOME TO MY ADVENTURE!")
  print("=" * 40)
  print("")

  # === STORY BEGINNING ===
  print("You're walking through a forest and find a door in a tree.")
  print("")

  # === FIRST CHOICE ===
  choice1 = input("Do you want to open it? (yes/no): ")

  if choice1 == "yes":
      print("You open the door and find... a tiny dragon!")
      # Add more story here!
  else:
      print("You walk away. The door remains a mystery.")
      # Add more story here!

  # === ENDING ===
  print("")
  print("THE END")
  print("=" * 40)
class_activities: |
  ## 🎮 Class Activity: Adventure Workshop!

  **Part 1: Planning (10 min)**
  - Review the requirements
  - Plan your adventure story
  - Think about choices and endings

  **Part 2: Building (30 min)**
  - Start building your adventure
  - Test frequently as you go
  - Help neighbors with bugs
  - Add your personal touches!

  **Part 3: Testing & Polish (15 min)**
  - Test with different choices
  - Fix any bugs
  - Add decorations and messages
  - Make it yours!

  **Part 4: Preview (5 min)**
  - Run your complete adventure
  - Make final adjustments
  - Get ready to showcase next week!
take_home_assignment: |
  ## 📚 Homework: Complete Your Mini Adventure

  **Assignment:** Finish and polish your mini adventure game for the Week 8 showcase!

  **Requirements:**
  1. Welcome message with decorative borders
  2. Tells a short story
  3. Asks the player to make at least 2 choices
  4. Uses if/else to handle each choice
  5. Has at least 2-3 different endings based on choices
  6. Ending message
  7. NO BUGS - code runs perfectly!
  8. Add comments explaining your story

  **Bonus Points:**
  - Add more choices (3+ choices)
  - Add more endings (4+ endings)
  - Add nested choices (choices within choices)
  - Add decorative borders and emojis
  - Create a themed adventure (space, fantasy, mystery)

  **Submit:** Share your Trinket link. Be ready to present at the Week 8 Showcase!
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Interactive games and stories use if/else statements to respond to player choices! When you play a video game and choose different paths, the game uses if/else to show you different outcomes - exactly like your adventure game!

  You're building the same interactive logic that powers games and interactive fiction!
---
# Term 3, Lesson 7: Project - Mini Adventure! 🎮

**Course:** Term 3: Decision Maker  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 7 of 8

---

## 🎯 What You'll Build Today

By the end of this lesson, you will have:

- Built a complete interactive adventure game
- Used all the skills you've learned this term
- Created something you can be proud of
- Prepared for the Week 8 showcase!

---

## 🤖 Welcome from BrightByte!

> _"Hey there, Decision Maker! This is it—your BIG MOMENT! Today, you're going to build your very own interactive adventure game using EVERYTHING you've learned this term! This is your Term 3 project, and I know you're going to create something AMAZING! Let's build an adventure that people will want to play!"_

### What Is the Term Project?

Your term project is a **complete interactive adventure game** that:
- Tells a story
- Asks players to make choices
- Has different endings based on choices
- Uses if/else to handle decisions
- Looks polished and fun!

> _BrightByte says: "This is what you've been working toward all term! You've learned all the pieces, and now you're putting them together to build something REAL. I'm so excited to see what you create!"_

---

## 📋 Project Requirements

### Must-Have Features

1. **Welcome Message** — Greet the player with a fun introduction
2. **Story Beginning** — Set up your adventure
3. **At Least 2 Choices** — Ask players what they want to do
4. **If/Else Statements** — Handle each choice
5. **At Least 2-3 Endings** — Different endings based on choices
6. **Ending Message** — Wrap up the adventure
7. **No Bugs!** — Code must run without errors
8. **Comments** — Explain what your story does

### Bonus Features (Optional)

- More choices (3+ choices)
- More endings (4+ endings)
- Nested choices (choices within choices)
- Decorative borders and emojis
- Themed adventure (space, fantasy, mystery, etc.)

---

## 🏗️ Step-by-Step Building Guide

### Step 1: Welcome Screen

Start with a friendly welcome:

```python
# ================================
# MY MINI ADVENTURE GAME
# By: [Your Name]
# Term 3 Project
# ================================

print("=" * 40)
print("     WELCOME TO MY ADVENTURE!")
print("=" * 40)
print("")
```

### Step 2: Story Beginning

Tell the beginning of your story:

```python
# === STORY BEGINNING ===
print("You're walking through a forest and find a door in a tree.")
print("")
```

### Step 3: First Choice

Ask the player what they want to do:

```python
# === FIRST CHOICE ===
choice1 = input("Do you want to open it? (yes/no): ")
```

### Step 4: Handle the Choice

Use if/else to handle the choice:

```python
if choice1 == "yes":
    print("You open the door and find... a tiny dragon!")
    print("The dragon offers you a cookie.")
    
    # Second choice!
    choice2 = input("Do you take it? (yes/no): ")
    
    if choice2 == "yes":
        print("The cookie is delicious! The dragon becomes your friend.")
        print("THE END - You got the FRIENDSHIP ending!")
    else:
        print("You decline. The dragon looks sad.")
        print("THE END - You got the SAD ending!")
else:
    print("You walk away. The door remains a mystery.")
    print("THE END - You got the MYSTERY ending!")
```

### Step 5: Ending

Wrap up your adventure:

```python
# === ENDING ===
print("")
print("Thanks for playing!")
print("=" * 40)
```

---

## 🎨 Making It Special

### Add Personalization

Ask for the player's name:

```python
name = input("What's your name, adventurer? ")
print("Welcome,", name, "!")
```

### Add Decorations

Use emojis and borders:

```python
print("🎮" * 20)
print("     WELCOME TO MY ADVENTURE! 🎮")
print("🎮" * 20)
```

### Add More Choices

Create a longer adventure with multiple choices!

---

## 🎮 Complete Example

Here's a complete example to inspire you:

```python
# ================================
# THE MYSTERIOUS DOOR
# By: Alex
# Term 3 Project
# ================================

# === WELCOME SCREEN ===
print("=" * 50)
print("     🎮 THE MYSTERIOUS DOOR 🎮")
print("=" * 50)
print("")

# === STORY BEGINNING ===
print("You're walking through a forest and find a door in a tree.")
print("The door is glowing with a strange light.")
print("")

# === FIRST CHOICE ===
choice1 = input("Do you want to open it? (yes/no): ")

if choice1 == "yes":
    print("")
    print("You open the door and find... a tiny dragon!")
    print("The dragon looks friendly and offers you a cookie.")
    print("")
    
    # === SECOND CHOICE ===
    choice2 = input("Do you take the cookie? (yes/no): ")
    
    if choice2 == "yes":
        print("")
        print("The cookie is delicious! The dragon becomes your friend.")
        print("You gain a magical friend for life!")
        print("")
        print("🎉 THE END - You got the FRIENDSHIP ending! 🎉")
    else:
        print("")
        print("You decline politely. The dragon understands.")
        print("You part ways as friends.")
        print("")
        print("😊 THE END - You got the POLITE ending! 😊")
else:
    print("")
    print("You decide to walk away.")
    print("The door remains a mystery forever.")
    print("")
    print("🤔 THE END - You got the MYSTERY ending! 🤔")

# === FINAL MESSAGE ===
print("")
print("=" * 50)
print("Thanks for playing!")
print("=" * 50)
```

---

## 🎯 Testing Your Adventure

### Test Checklist

Before you're done, test your adventure with:

- [ ] All possible choices (yes/no for each choice)
- [ ] All different paths
- [ ] All endings
- [ ] Make sure it looks good!

### What to Check

- Does it ask for choices?
- Do all choices work?
- Are all endings different?
- Does it look polished?

---

## 📝 Key Takeaways

### What You're Building

- A **complete interactive game** — Not just practice, a real project!
- Something **fun** — People will want to play it!
- Something **yours** — Add your personal touches!
- Something to **show off** — Be proud of it!

### Important Things to Remember

1. **Test all paths** — Make sure every choice works!
2. **Fix bugs immediately** — Don't let them pile up!
3. **Make it yours** — Add personal touches!
4. **Ask for help** — It's okay to need help!
5. **Be proud** — You're building something real!

---

## 🌟 Next Lesson Preview

**Week 8: Showcase Time! 🎉**

Next week, you'll present your adventure game to the class, celebrate your achievements, and share your amazing work!

---

## 🎉 Great Job!

You just built your term project!

**What you accomplished today:**

- ✅ Built a complete interactive adventure game
- ✅ Used all the skills you learned this term
- ✅ Created something you can be proud of
- ✅ Prepared for the showcase next week!

> _BrightByte says: "WOW! You did it! You built a REAL interactive adventure game! This is something you can show to your family, your friends, everyone! You've come so far this term. Next week, we're going to celebrate all your hard work! I'm so proud of you!"_

---

## 📚 Final Tips

Before next week's showcase:

1. **Test your adventure** — Make sure all paths work!
2. **Add personal touches** — Make it yours!
3. **Practice presenting** — Be ready to show it off!
4. **Be proud** — You built something amazing!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor for help. This is your project—make it amazing!_ 🎮

