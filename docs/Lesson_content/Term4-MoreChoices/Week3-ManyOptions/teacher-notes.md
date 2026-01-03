# Term 4, Lesson 3: Many Options! 📋

## Teacher's Guide

**Course:** Term 4: More Choices  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson teaches students to build interactive menus by combining `input()` with `elif` statements. Students will create programs that display options, get user input, and respond accordingly. This is a practical skill that makes programs feel professional and user-friendly.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Build interactive menus with multiple options
2. Combine `input()` with `if/elif/else` statements
3. Handle user selections from menus
4. Create programs that respond to user choices
5. Handle invalid input gracefully

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing menu structure
- Optional: Examples of real menus (games, apps, restaurants)

### Pre-Lesson Preparation

1. **Review input() and elif** — Ensure students remember both concepts
2. **Prepare menu examples** — Have working examples ready
3. **Think about real-world menus** — Games, apps, restaurants
4. **Prepare common mistakes** — Invalid input handling, missing menus
5. **Plan extension activities** — For students who finish early

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity | Details |
| ---- | -------- | -------- | ------- |
| 0:00 | 5 min | Hook: What Are Menus? | Show real-world examples |
| 0:05 | 10 min | Menu Structure | Three parts: display, input, handle |
| 0:15 | 15 min | First Menu Together | Build game menu step-by-step |
| 0:30 | 15 min | Guided Practice | Students build menus |
| 0:45 | 10 min | Creative Challenges | Students create their own menus |
| 0:55 | 3 min | Wrap-up & Homework | Summary and assignment |
| 0:58 | 2 min | Q&A Buffer | Questions |

---

## 📚 Detailed Teaching Guide

### Part 1: Hook - What Are Menus? (5 minutes)

#### Goals

- Connect to real-world experience
- Show that menus are everywhere
- Create excitement about building menus

#### The Hook

> "Raise your hand if you've played a video game. What's the first thing you see when you open a game?"

Wait for: Menu, options, "Play", "Settings", etc.

> "Exactly! A MENU! Menus are everywhere—games, apps, restaurants, websites. Today, YOU're going to learn to build menus in Python!"

**Show examples:**
- Game menu (Play, Settings, Quit)
- Restaurant menu (Appetizers, Main, Dessert)
- App menu (Home, Search, Profile, Settings)

> "All of these are menus—lists of options that users can choose from. And you're going to build them today!"

#### Teaching Tips

- Use real examples students know
- Build excitement about creating "real" programs
- Connect to their daily experience
- Keep it brief—move to building quickly

---

### Part 2: Menu Structure (10 minutes)

#### Goals

- Explain the three parts of a menu program
- Show the structure clearly
- Prepare students to build

#### The Structure

> "Every menu program has THREE parts. Let me show you..."

**Write on board:**

```
1. Display the menu (show options)
2. Get user's choice (use input())
3. Handle the choice (use if/elif/else)
```

**Explain each part:**

**Part 1: Display Menu**
```python
print("=== GAME MENU ===")
print("1. Start Game")
print("2. Settings")
print("3. Quit")
```

> "First, we show users their options. They need to see what they can choose!"

**Part 2: Get Choice**
```python
choice = input("Enter your choice (1-3): ")
```

> "Second, we ask them what they want. We use input() to get their answer!"

**Part 3: Handle Choice**
```python
if choice == "1":
    print("Starting game...")
elif choice == "2":
    print("Opening settings...")
elif choice == "3":
    print("Thanks for playing!")
else:
    print("Invalid choice!")
```

> "Third, we check what they chose and respond! We use if/elif/else to handle each option!"

#### Teaching Tips

- Break it down clearly
- Show the structure visually
- Emphasize all three parts are needed
- Connect to what they already know (input, elif)

---

### Part 3: First Menu Together (15 minutes)

#### Goals

- Build a complete menu program together
- Show each step clearly
- Practice the structure

#### Building Together

> "Let's build a game menu together! Follow along with me."

**Step 1: Display the Menu**

```python
print("=== GAME MENU ===")
print("1. Start Game")
print("2. Load Game")
print("3. Settings")
print("4. Quit")
print("")
```

> "Type this with me. Notice the empty line at the end—it makes it easier to read!"

**Step 2: Get User's Choice**

```python
choice = input("Enter your choice (1-4): ")
```

> "Now we ask them what they want. Type this with me."

**Step 3: Handle the Choice**

```python
if choice == "1":
    print("Starting new game...")
elif choice == "2":
    print("Loading saved game...")
elif choice == "3":
    print("Opening settings...")
elif choice == "4":
    print("Thanks for playing!")
else:
    print("Invalid choice! Please enter 1, 2, 3, or 4.")
```

> "Now we check what they chose. Notice we use == to compare strings! And we always have an else to handle wrong input."

**Step 4: Test It!**

> "Now run it! Try entering 1, 2, 3, 4, and something wrong like 5. What happens?"

Let students test and observe.

#### Teaching Tips

- Build step by step
- Pause between steps
- Test frequently
- Emphasize the else for invalid input
- Show what happens with wrong input

---

### Part 4: Guided Practice (15 minutes)

#### Goals

- Students practice building menus
- Build confidence
- Catch mistakes early

#### Practice Exercises

**Exercise 1: Restaurant Menu**

Guide students through:

```python
print("=== RESTAURANT MENU ===")
print("1. Pizza - $10")
print("2. Burger - $8")
print("3. Salad - $6")
print("")

choice = input("What would you like? (1-3): ")

if choice == "1":
    print("You ordered Pizza! That will be $10.")
elif choice == "2":
    print("You ordered Burger! That will be $8.")
elif choice == "3":
    print("You ordered Salad! That will be $6.")
else:
    print("Sorry, that's not a valid option!")
```

> "Let's build a restaurant menu! Follow along."

**Exercise 2: Character Creator**

```python
print("=== CHARACTER CREATOR ===")
print("1. Warrior")
print("2. Mage")
print("3. Archer")
print("")

choice = input("Choose your class (1-3): ")

if choice == "1":
    print("You chose Warrior!")
elif choice == "2":
    print("You chose Mage!")
elif choice == "3":
    print("You chose Archer!")
else:
    print("Invalid choice!")
```

Guide them through this.

#### Teacher Circulation

- Check that students are following the three-part structure
- Help with syntax (== for strings, colons, indentation)
- Encourage testing with different inputs
- Celebrate correct menus

---

### Part 5: Creative Challenges (10 minutes)

#### Goals

- Students apply menu-building creatively
- Build problem-solving skills
- Prepare for homework

#### Student Freedom

> "Now create your own menu! It can be anything—a store, a game, a helper tool, anything!"

**Give ideas:**
- Library menu
- Store menu
- Study helper menu
- Pet care menu
- Any creative idea!

**Circulate and support:**
- Help brainstorm menu options
- Guide structure if needed
- Check for else clause (invalid input handling)
- Celebrate creativity

**After 7 minutes, ask for volunteers:**
> "Who wants to show us their menu?"

Show 2-3 menus. Celebrate!

#### Teaching Tips

- Don't hover—give space
- Encourage creativity
- Accept "imperfect" code
- Focus on learning, not perfection
- Make sure they include else for invalid input

---

### Part 6: Wrap-up & Homework (3 minutes)

#### Review Key Points

> "What did we learn today?"

Quick review:
1. "What are the three parts of a menu?" → Display, input, handle
2. "What do we use to get user's choice?" → input()
3. "What do we use to handle choices?" → if/elif/else
4. "Why do we need else?" → Handle invalid input

#### Introduce Homework

> "For homework, create an interactive menu with at least 5 options! Be creative!"

**Requirements:**
- Display menu with 5+ options
- Use input() to get choice
- Use if/elif/else to handle choices
- Handle invalid input
- Add comments

#### Preview Next Week

> "Next week, we'll learn to COMBINE conditions with 'and' and 'or'! You'll be able to check if multiple things are True at once!"

---

### Part 7: Q&A Buffer (2 minutes)

Use for questions and help.

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**
- [ ] Can student build a menu with three parts?
- [ ] Does student use input() correctly?
- [ ] Does student handle invalid input with else?
- [ ] Can student create their own menu?

### Homework Assessment: "My Interactive Menu Program"

| Criteria | Exceeds (3) | Meets (2) | Developing (1) |
|----------|-------------|-----------|----------------|
| **Menu display** | Clear, well-formatted menu | Menu displayed | Missing or unclear |
| **Number of options** | 6+ options | 5 options | Fewer than 5 |
| **Input handling** | Handles input correctly | Handles input | Issues with input |
| **Invalid input** | Handles invalid input well | Handles invalid input | Missing else |
| **Creativity** | Highly creative menu | Creative theme | Basic menu |
| **Code runs** | No errors | Minor issues | Major errors |
| **Comments** | Clear comments | Some comments | No comments |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide a template with blanks
- Start with 3 options instead of 5
- Focus on one menu type (game, restaurant)
- Pair with a peer
- Reduce to 3-4 options for homework
- Provide menu option ideas

#### For Advanced Students

- Challenge with more options (7+)
- Ask them to add nested menus (menu within menu)
- Encourage creative themes
- Ask them to help peers
- Challenge with input validation
- Preview combining conditions for next week

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem | Prevention | Solution |
|---------|------------|----------|
| Forgetting to show menu | Emphasize three parts | "Always show menu first!" |
| Using = instead of == | Emphasize == for comparison | "Two equals signs to compare!" |
| Not handling invalid input | Emphasize else clause | "Always include else!" |
| Missing quotes around numbers | Show string comparison | "choice == '1' not choice == 1" |

### Conceptual Issues

| Problem | Signs | Solution |
|---------|-------|----------|
| Doesn't understand menu structure | Missing parts | Review three-part structure |
| Confused about string comparison | Using wrong comparison | "We compare strings, so use == with quotes" |
| Doesn't test invalid input | Only tests valid choices | "Try entering 99 or 'hello'!" |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand menu structure?
   - Were they able to build menus?
   - Did they handle invalid input?

2. **What needs improvement?**
   - Any concepts that need more time?
   - Students struggling with structure?
   - Examples that didn't work?

3. **Individual student notes:**
   - Who excelled at menu building?
   - Who needs extra support?
   - Who's ready for next week?

---

## 🔗 Additional Resources

### For Teachers

- **Menu design patterns** (for reference)
- **Input validation examples** (to share)
- **Real-world menu examples** (to show students)

### For Students (Share with Parents)

- **Practice challenges:** Build menus at home
- **Real-world observation:** Notice menus in apps/games
- **Coding games:** Scratch, Code.org (reinforces menus)

### Parent Communication Template

```
Subject: Term 4 Week 3 - Building Menus! 📋

Dear Parent/Guardian,

This week we learned to build interactive menus—like the menus in games and apps!

Students learned:
- How to display menus with options
- How to get user input with input()
- How to handle user choices with if/elif/else
- How to handle invalid input

Homework due by [date]:
"My Interactive Menu Program" - a menu with at least 5 options

How you can help:
- Ask them to show you their menu program
- Challenge them to add more options
- Notice menus in apps/games together

Next week: We'll learn to combine conditions with "and" and "or"!

Questions? Reply to this email!

Happy coding!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review input() and elif
- [ ] Prepare menu examples
- [ ] Think of real-world menu examples
- [ ] Prepare common mistakes
- [ ] Plan extension activities

### During Class

- [ ] Hook showed real-world menus
- [ ] Explained three-part structure
- [ ] Built menu together
- [ ] Students practiced
- [ ] Students created their own menus
- [ ] Shared student work
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Review homework submissions
- [ ] Prepare for Week 4 (and/or)

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: Menus make programs feel professional! Make sure students understand the three-part structure—it's the foundation for all interactive programs. Celebrate their progress—they're building real, user-friendly programs now!_ 📋
