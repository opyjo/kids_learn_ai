---
title: "Many Options"
description: "Build interactive menus and programs with multiple choices using elif!"
difficulty: "beginner"
order_index: 3
course_slug: "term-4-more-choices"
is_premium: false
requires_trinket: true
starter_code: |
  # Many Options - Building Menus!
  # Create interactive programs with multiple choices

  print("=== GAME MENU ===")
  print("1. Start Game")
  print("2. Load Game")
  print("3. Settings")
  print("4. Quit")
  print("")

  choice = input("Enter your choice (1-4): ")

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

  # Try running this and entering different numbers!
class_activities: |
  ## 🎮 Class Activity: Menu Builder Challenge!

  1. Partner up with a classmate
  2. Design a menu together (restaurant, game, store, etc.)
  3. Build the menu program using elif
  4. Test with different choices
  5. Share your menus with the class!

  **Challenge:** Who can create the most creative and useful menu?
take_home_assignment: |
  ## 📚 Homework: My Interactive Menu Program

  **Assignment:** Create a Python program with an interactive menu that has at least 5 options!

  **Requirements:**
  1. Display a menu with at least 5 options
  2. Use input() to get user's choice
  3. Use if/elif/else to handle each choice
  4. Each option should do something different
  5. Handle invalid choices with else
  6. Add comments explaining your menu
  7. Code must run without errors

  **Example ideas:**
  - Restaurant menu (order food, see menu, specials, hours, contact)
  - Game menu (play, instructions, high scores, settings, quit)
  - Store menu (browse items, cart, checkout, account, help)
  - Library menu (search, borrow, return, account, hours)
  - Any creative menu you can think of!

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Every app and website you use has menus! When you open a game and see "Play", "Settings", "Help", that's a menu using elif logic. When you order food online and choose from options, that's elif! AI assistants use menus too—when you ask "What can you do?" they show you options, and your choice triggers different elif branches!

  You're building the same menu systems that power every app and website!
---
# Term 4, Lesson 3: Many Options! 📋

**Course:** Term 4: More Choices  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Build interactive menus with multiple options
- Use `input()` with `elif` to create choice-based programs
- Handle user selections from menus
- Create programs that feel like real apps and games
- Build programs that respond to user choices!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! Last week, you learned `elif` and now you can handle multiple options! But today, we're going to make it INTERACTIVE! You're going to learn to build MENUS—like the menus you see in games and apps! Users will be able to CHOOSE what they want, and your program will respond! This is where programming gets REALLY fun!"_

### What's New This Week?

Last week you learned:
- `elif` statements — Handle multiple options
- Grade calculators — Programs with multiple conditions

This week you'll discover:
- **Interactive menus** — Programs that let users choose!
- **Combining `input()` with `elif`** — Get choices from users
- **Menu systems** — Like real apps and games!
- **User-friendly programs** — Programs that respond to users!

> _BrightByte says: "Menus are EVERYWHERE in programming! Games, apps, websites—they all have menus. Once you can build menus, you can build interactive programs that feel professional! Let's get started!"_

---

## 📋 What Is a Menu?

### Menus Are Everywhere!

Think about apps and games you use:
- **Games:** "Play", "Settings", "Help", "Quit"
- **Restaurants:** "Appetizers", "Main Course", "Dessert", "Drinks"
- **Stores:** "Browse", "Cart", "Checkout", "Account"

All of these are **menus**—lists of options that users can choose from!

### Building Your First Menu

A menu program has three parts:

1. **Display the menu** — Show users their options
2. **Get their choice** — Use `input()` to ask what they want
3. **Handle the choice** — Use `if/elif/else` to respond

Let's build one!

---

## 🎮 Your First Menu Program

### Example 1: Simple Game Menu

```python
print("=== GAME MENU ===")
print("1. Start Game")
print("2. Load Game")
print("3. Settings")
print("4. Quit")
print("")

choice = input("Enter your choice (1-4): ")

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

**How it works:**
1. Shows the menu options
2. Asks user to enter a number
3. Checks which number they entered
4. Responds based on their choice
5. Handles invalid choices with `else`

**Try it!** Run the program and enter different numbers!

### Example 2: Restaurant Menu

```python
print("=== RESTAURANT MENU ===")
print("1. Pizza - $10")
print("2. Burger - $8")
print("3. Salad - $6")
print("4. Pasta - $9")
print("5. View Total")
print("")

choice = input("What would you like? (1-5): ")

if choice == "1":
    print("You ordered Pizza! That will be $10.")
elif choice == "2":
    print("You ordered Burger! That will be $8.")
elif choice == "3":
    print("You ordered Salad! That will be $6.")
elif choice == "4":
    print("You ordered Pasta! That will be $9.")
elif choice == "5":
    print("Your total will be calculated at checkout.")
else:
    print("Sorry, that's not a valid option!")
```

### Example 3: Character Creator Menu

```python
print("=== CHARACTER CREATOR ===")
print("Choose your character class:")
print("1. Warrior - Strong and brave")
print("2. Mage - Powerful magic")
print("3. Archer - Fast and accurate")
print("4. Healer - Support your team")
print("")

choice = input("Enter your choice (1-4): ")

if choice == "1":
    print("You chose Warrior! ⚔️")
    print("Your character is strong and brave!")
elif choice == "2":
    print("You chose Mage! 🔮")
    print("Your character has powerful magic!")
elif choice == "3":
    print("You chose Archer! 🏹")
    print("Your character is fast and accurate!")
elif choice == "4":
    print("You chose Healer! 💚")
    print("Your character supports the team!")
else:
    print("Invalid choice! Please choose 1, 2, 3, or 4.")
```

---

## 🔍 Important Menu Tips

### Tip 1: Always Show the Menu

Users need to see their options! Always `print()` the menu before asking for input.

```python
# Good! ✅
print("1. Option 1")
print("2. Option 2")
choice = input("Choose: ")

# Bad! ❌
choice = input("Choose: ")  # User doesn't know what to choose!
```

### Tip 2: Handle Invalid Choices

Users might type something wrong! Always use `else` to handle invalid input.

```python
if choice == "1":
    print("Option 1")
elif choice == "2":
    print("Option 2")
else:
    print("Invalid choice! Please try again.")  # Important!
```

### Tip 3: Make Menus Clear

Use clear labels and numbers. Make it easy for users to understand!

```python
# Good! ✅
print("1. Start Game")
print("2. Quit Game")

# Confusing! ❌
print("A. Start")
print("B. Quit")
```

### Tip 4: Use Empty Lines

Add `print("")` to make menus easier to read!

```python
print("=== MENU ===")
print("1. Option 1")
print("2. Option 2")
print("")  # Empty line makes it easier to read!
choice = input("Choose: ")
```

---

## 🎯 More Menu Examples

### Example 1: Library Menu

```python
print("=== LIBRARY MENU ===")
print("1. Search for books")
print("2. Borrow a book")
print("3. Return a book")
print("4. View my account")
print("5. Library hours")
print("")

choice = input("What would you like to do? (1-5): ")

if choice == "1":
    print("Searching for books...")
elif choice == "2":
    print("Which book would you like to borrow?")
elif choice == "3":
    print("Which book are you returning?")
elif choice == "4":
    print("Loading your account...")
elif choice == "5":
    print("Library hours: Mon-Fri 9am-6pm")
else:
    print("Invalid choice!")
```

### Example 2: Store Menu

```python
print("=== ONLINE STORE ===")
print("1. Browse products")
print("2. View cart")
print("3. Checkout")
print("4. My account")
print("5. Help")
print("")

choice = input("Enter your choice (1-5): ")

if choice == "1":
    print("Here are our products...")
elif choice == "2":
    print("Your cart is empty.")
elif choice == "3":
    print("Proceeding to checkout...")
elif choice == "4":
    print("Loading your account...")
elif choice == "5":
    print("How can we help you?")
else:
    print("Please enter a number between 1 and 5.")
```

### Example 3: Study Helper Menu

```python
print("=== STUDY HELPER ===")
print("1. Math practice")
print("2. Science quiz")
print("3. Reading time")
print("4. Break time")
print("5. View progress")
print("")

choice = input("What would you like to do? (1-5): ")

if choice == "1":
    print("Let's practice math!")
elif choice == "2":
    print("Time for a science quiz!")
elif choice == "3":
    print("Reading time starts now!")
elif choice == "4":
    print("Take a 10-minute break!")
elif choice == "5":
    print("You've completed 5 sessions!")
else:
    print("Invalid choice!")
```

---

## 🎮 Practice Time!

### Challenge 1: Build a Pizza Menu

Create a menu for a pizza place with at least 4 pizza options!

```python
print("=== PIZZA MENU ===")
print("1. Cheese Pizza")
print("2. Pepperoni Pizza")
print("3. Veggie Pizza")
print("4. Supreme Pizza")
print("")

choice = input("Which pizza? (1-4): ")

# Add your if/elif/else here!
```

### Challenge 2: Build a Game Difficulty Menu

Create a menu that lets players choose difficulty level!

```python
print("=== CHOOSE DIFFICULTY ===")
print("1. Easy")
print("2. Medium")
print("3. Hard")
print("4. Expert")
print("")

choice = input("Select difficulty (1-4): ")

# Add your if/elif/else here!
```

### Challenge 3: Build Your Own Menu!

Create any menu you want! Be creative!

---

## 🎨 Creative Challenge: Complete Menu System

Build a complete menu with:
- Clear title and options
- At least 5 choices
- Different responses for each choice
- Error handling for invalid input
- Fun and creative theme!

**Ideas:**
- Adventure game menu
- Pet care menu
- Sports team menu
- Music player menu
- Any creative idea!

---

## 📝 Key Takeaways

### Menu Structure

```python
# 1. Display menu
print("=== MENU TITLE ===")
print("1. Option 1")
print("2. Option 2")
print("3. Option 3")
print("")

# 2. Get user choice
choice = input("Enter choice: ")

# 3. Handle choice
if choice == "1":
    print("Response 1")
elif choice == "2":
    print("Response 2")
elif choice == "3":
    print("Response 3")
else:
    print("Invalid choice!")
```

### Important Rules

1. **Always show the menu first** — Users need to see options
2. **Use clear numbers** — 1, 2, 3, 4, 5 are easy to understand
3. **Handle invalid input** — Always use `else` for wrong choices
4. **Make it readable** — Use empty lines and clear labels
5. **Test with different inputs** — Try valid and invalid choices!

### When to Use Menus

Use menus when you want:
- **Multiple options** for users to choose from
- **Interactive programs** that respond to user choices
- **Professional-looking** programs
- **User-friendly** interfaces

### Vocabulary Words

| Word | Definition | Example |
|------|------------|---------|
| **Menu** | A list of options users can choose from | Game menu |
| **Option** | One choice in a menu | "1. Start Game" |
| **Interactive** | Program responds to user input | Menu programs |
| **Invalid** | Not a valid or correct choice | Wrong number entered |

---

## 🌟 Next Lesson Preview

**Week 4: And & Or!**

Next week, you'll learn to COMBINE conditions! You'll learn how to check if something is True AND something else is True, or if one thing OR another is True. This will make your programs even MORE powerful!

**Sneak peek:**

```python
if age >= 13 and score >= 80:
    print("You're a teenager with a good score!")
    
if weather == "sunny" or weather == "cloudy":
    print("Good weather for outdoor activities!")
```

Get ready to combine conditions! 🔗

---

## 🎉 Great Job!

You just learned to build interactive menus!

**What you accomplished today:**

- ✅ Learned what menus are and why they're useful
- ✅ Built your first interactive menu program
- ✅ Combined `input()` with `elif` to create choices
- ✅ Handled user selections and invalid input
- ✅ Created programs that feel like real apps!

> _BrightByte says: "AMAZING! 🎮 You just learned to build menus! This is HUGE! Menus are in every app, game, and website. You're building real, interactive programs now! Next week, we'll learn to combine conditions with 'and' and 'or'—your programs are going to get even MORE powerful! Keep practicing, and I'll see you next week!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Restaurant Ordering System:** Menu with prices, ordering, total
2. **Game Main Menu:** Start, load, settings, help, quit
3. **Study Planner Menu:** Subjects, schedule, reminders, progress
4. **Pet Care Menu:** Feed, play, sleep, health check, stats
5. **Adventure Game Menu:** Character creation, inventory, map, save

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_
