---
title: "Story Choices!"
description: "Build interactive stories that change based on user choices - create choose-your-own-adventure stories!"
difficulty: "beginner"
order_index: 6
course_slug: "term-3-decision-maker"
is_premium: false
requires_trinket: true
starter_code: |
  # Story Choices!
  # Let's build interactive stories!

  print("=== THE MYSTERIOUS DOOR ===")
  print("You're walking through a forest and find a door in a tree.")
  
  choice = input("Do you want to open it? (yes/no): ")
  
  if choice == "yes":
      print("You open the door and find... a tiny dragon!")
  else:
      print("You walk away. The door remains a mystery.")

  # Try creating your own story!
class_activities: |
  ## 🎮 Class Activity: Story Workshop!

  1. Work in pairs
  2. Brainstorm story ideas together
  3. Create a simple interactive story with at least 2 choices
  4. Test your story with different choices
  5. Share your stories with the class!

  **Challenge:** Who can create the most creative interactive story?
take_home_assignment: |
  ## 📚 Homework: My Interactive Story

  **Assignment:** Create an interactive choose-your-own-adventure story!

  **Requirements:**
  1. Tell a story with at least 3 choices
  2. Use if/else to handle each choice
  3. Ask the user what they want to do
  4. Have at least 2 different endings
  5. Add comments explaining your story
  6. Code must run without errors

  **Example themes:**
  - A treasure hunt
  - A space adventure
  - A magical forest
  - A mystery to solve

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Interactive stories and games use if/else statements to respond to player choices! When you play a video game and choose "go left" or "go right", the game uses if/else to show you different paths - exactly like your story!

  You're building the same interactive logic that powers games and interactive fiction!
---
# Term 3, Lesson 6: Story Choices! 📖

**Course:** Term 3: Decision Maker  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Build interactive stories with choices
- Use if/else to create different story paths
- Combine input() with if/else for stories
- Create choose-your-own-adventure stories
- Prepare for the term project!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! You've learned to make programs that decide! Now, let's use that power to tell STORIES! Today, you'll learn to build interactive stories that change based on what the user chooses—like choose-your-own-adventure books, but in code! This is SO exciting!"_

### What's Special About Today?

You've learned:
- How to make decisions with if/else
- How to get input from users

Now you'll learn:
- **How to build interactive stories** — Stories that respond to choices!
- **How to create different paths** — Different endings based on choices!
- **How to tell stories with code** — Combine everything you've learned!

> _BrightByte says: "Interactive stories are SO fun! You get to be both the storyteller AND let the reader choose what happens. This is exactly how video games work—they use if/else to respond to your choices!"_

---

## 📖 What Is an Interactive Story?

### Choose Your Own Adventure

An interactive story is a story where the reader makes choices, and the story changes based on those choices!

**Example:**
- Story: "You find a door. Do you open it?"
- Choice: User types "yes" or "no"
- Result: Different things happen based on the choice!

### How It Works

1. **Tell part of the story**
2. **Ask the user what they want to do**
3. **Use if/else to respond to their choice**
4. **Continue the story based on their choice**

---

## 📝 Your First Interactive Story

### Example 1: The Mysterious Door

```python
print("=== THE MYSTERIOUS DOOR ===")
print("You're walking through a forest and find a door in a tree.")
print("")

choice = input("Do you want to open it? (yes/no): ")

if choice == "yes":
    print("You open the door and find... a tiny dragon!")
    print("The dragon offers you a cookie.")
    print("You take it and become friends!")
else:
    print("You walk away.")
    print("The door remains a mystery forever.")
```

**Example Output (if user types "yes"):**
```
=== THE MYSTERIOUS DOOR ===
You're walking through a forest and find a door in a tree.

Do you want to open it? (yes/no): yes
You open the door and find... a tiny dragon!
The dragon offers you a cookie.
You take it and become friends!
```

**Example Output (if user types "no"):**
```
=== THE MYSTERIOUS DOOR ===
You're walking through a forest and find a door in a tree.

Do you want to open it? (yes/no): no
You walk away.
The door remains a mystery forever.
```

### Example 2: The Treasure Hunt

```python
print("=== THE TREASURE HUNT ===")
print("You're exploring a cave and find two paths.")
print("")

choice = input("Do you go left or right? (left/right): ")

if choice == "left":
    print("You go left and find a treasure chest!")
    print("You're rich! THE END - TREASURE ENDING!")
else:
    print("You go right and find... a sleeping dragon!")
    print("You tiptoe away safely. THE END - SAFE ENDING!")
```

---

## 🎯 Building More Complex Stories

### Example: Multiple Choices

```python
print("=== THE SPACE ADVENTURE ===")
print("You land on a strange planet.")
print("")

choice1 = input("Do you explore the cave or the forest? (cave/forest): ")

if choice1 == "cave":
    print("You enter the cave and find glowing crystals!")
    choice2 = input("Do you take a crystal? (yes/no): ")
    
    if choice2 == "yes":
        print("The crystal glows brighter! You gain special powers!")
        print("THE END - POWER ENDING!")
    else:
        print("You leave the crystal. The adventure continues...")
        print("THE END - CONTINUE ENDING!")
else:
    print("You enter the forest and meet friendly aliens!")
    print("They invite you to their village.")
    print("THE END - FRIENDSHIP ENDING!")
```

---

## 🎮 Practice Time!

### Challenge 1: Simple Story

Create a story with one choice:

```python
print("=== YOUR STORY ===")
print("Write your story beginning here...")
print("")

choice = input("What do you do? (option1/option2): ")

if choice == "option1":
    print("What happens with option 1...")
else:
    print("What happens with option 2...")
```

### Challenge 2: Story with Multiple Choices

Create a story with 2-3 choices and different endings!

### Challenge 3: Your Own Adventure

Create your own choose-your-own-adventure story!

---

## 📝 Key Takeaways

### What Is an Interactive Story?

- A story where the reader makes choices
- The story changes based on those choices
- Uses if/else to handle different paths
- Can have multiple endings!

### How to Build One

1. **Tell the beginning** — Set up the story
2. **Ask for a choice** — Use input()
3. **Handle the choice** — Use if/else
4. **Continue the story** — Based on the choice
5. **Add more choices** — Make it more interesting!

### Important Things to Remember

1. **Ask clear questions** — Make it obvious what to type
2. **Handle both cases** — Use if/else
3. **Make it interesting** — Fun choices and endings!
4. **Test both paths** — Make sure both choices work!
5. **Add comments** — Explain your story

---

## 🌟 Next Lesson Preview

**Week 7: Project - Mini Adventure!**

Next week, you'll build your BIG term project: a complete interactive adventure story! You'll use everything you've learned to create something amazing!

Get ready to build your masterpiece! 🎨

---

## 🎉 Great Job!

You just learned to build interactive stories!

**What you accomplished today:**

- ✅ Learned what interactive stories are
- ✅ Built your first choose-your-own-adventure story
- ✅ Used if/else to create different story paths
- ✅ Combined input() with if/else for stories
- ✅ Prepared for the term project!

> _BrightByte says: "WOW! You can now build interactive stories! This is exactly how video games and interactive fiction work—they use if/else to respond to player choices! Next week, you'll build your complete term project: a mini adventure game! You're ready for it! Keep up the amazing work!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Story Expansion:** Add more choices to your story
2. **Multiple Endings:** Create stories with 3+ different endings
3. **Nested Choices:** Add choices within choices
4. **Story Themes:** Create stories with different themes (space, fantasy, mystery)

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_

