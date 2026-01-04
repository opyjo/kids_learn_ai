---
title: "What About Elif?"
description: "Discover elif - handle three, four, or more options in your programs!"
difficulty: "beginner"
order_index: 2
course_slug: "term-4-more-choices"
is_premium: false
requires_trinket: true
starter_code: |
  # What About Elif?
  # Handle multiple options with elif!

  score = 85

  if score >= 90:
      print("Grade: A - Excellent!")
  elif score >= 80:
      print("Grade: B - Great job!")
  elif score >= 70:
      print("Grade: C - Good work!")
  else:
      print("Grade: D - Keep practicing!")

  # Try changing the score and see what happens!
class_activities: |
  ## 🎮 Class Activity: Grade Calculator Challenge!

  1. Partner up with a classmate
  2. Create a grade calculator using elif
  3. Test with different scores (95, 85, 75, 65)
  4. See if you can add more grade levels!
  5. Share your programs!

  **Challenge:** Who can create the most creative grading system?
take_home_assignment: |
  ## 📚 Homework: My Multi-Choice Program

  **Assignment:** Create a Python program that uses if/elif/else to handle at least 4 different options!

  **Requirements:**
  1. Use if, elif, and else together
  2. Handle at least 4 different cases
  3. Use variables for your checks
  4. Add comments explaining each case
  5. Make it creative and fun!
  6. Code must run without errors

  **Example ideas:**
  - Weather responder (sunny, rainy, cloudy, snowy)
  - Character class selector (warrior, mage, archer, healer)
  - Difficulty selector (easy, medium, hard, expert)
  - Age group categorizer (kid, teen, adult, senior)
  - Game level status (level 1, 2, 3, 4+)

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI systems use elif (else if) constantly! When a voice assistant asks "What do you want to do?" and you say "play music", it checks: "If music, then play music. Elif weather, then check weather. Elif timer, then set timer. Else, ask for clarification." Every AI assistant uses elif to handle multiple user requests! AI also uses elif for classification - sorting things into categories like "if it's a cat, elif it's a dog, elif it's a bird, else it's something else" - exactly like you're learning with elif!

  You're learning the same multi-choice logic that powers every AI assistant!
---
# Term 4, Lesson 2: What About Elif? 🎯

**Course:** Term 4: More Choices  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Understand what `elif` is and why it's useful
- Write `if/elif/else` statements to handle multiple options
- Create programs that can handle three, four, or more choices
- Build more powerful decision-making programs
- Solve problems that need multiple conditions!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! Last week, you reviewed if/else and got SUPER confident with it. But remember when I said we'd learn something AMAZING? Well, today's the day! Right now, if/else can only handle TWO options—True or False. But what if you need THREE options? Or FOUR? Or MORE? That's where `elif` comes in! It stands for 'else if' and it's going to make your programs WAY more powerful!"_

### What's New This Week?

Last week you reviewed:
- `if` statements — Handle True cases
- `else` statements — Handle False cases
- Two options only

This week you'll discover:
- **`elif` statements** — Handle MORE options!
- **Multiple choices** — Three, four, five, or more!
- **More powerful programs** — Programs that can handle any situation!

> _BrightByte says: "Once you learn elif, you'll be able to build programs that handle LOTS of different situations. Grade calculators, menu systems, character selectors—they all use elif! Get ready to level up!"_

---

## 🎯 What Is `elif`?

### The Problem with If/Else

Right now, with `if/else`, you can only handle TWO options:

```python
if score >= 80:
    print("You passed!")
else:
    print("You failed.")
```

But what if you want to give letter grades? You need:
- A for 90+
- B for 80-89
- C for 70-79
- D for below 70

That's FOUR options! `if/else` can't do that easily!

### The Solution: `elif`!

`elif` stands for **"else if"** and lets you check MULTIPLE conditions!

```python
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: D")
```

Now you can handle FOUR options! 🎉

---

## 📝 Your First `elif` Statement

### Example 1: Grade Calculator

```python
score = 85

if score >= 90:
    print("Grade: A - Excellent!")
elif score >= 80:
    print("Grade: B - Great job!")
elif score >= 70:
    print("Grade: C - Good work!")
else:
    print("Grade: D - Keep practicing!")
```

**What happens:**
1. Python checks: Is `score >= 90`? → No! (85 >= 90 is False)
2. Python moves to the first `elif`: Is `score >= 80`? → YES! (85 >= 80 is True)
3. Python prints "Grade: B - Great job!" and STOPS
4. Python doesn't check the other `elif` or `else` because it already found a match!

**Output:**
```
Grade: B - Great job!
```

**Try with different scores:**
- `score = 95` → "Grade: A - Excellent!"
- `score = 75` → "Grade: C - Good work!"
- `score = 65` → "Grade: D - Keep practicing!"

### Example 2: Weather Responder

```python
weather = "rainy"

if weather == "sunny":
    print("Wear sunglasses! 😎")
elif weather == "rainy":
    print("Bring an umbrella! ☂️")
elif weather == "cloudy":
    print("Might rain later! ☁️")
else:
    print("Check the weather app!")
```

**Try changing `weather` to "sunny", "cloudy", or "snowy"!**

### Example 3: Character Level Status

```python
level = 5

if level >= 10:
    print("You're an expert! 🏆")
elif level >= 5:
    print("You're getting good! ⭐")
elif level >= 2:
    print("You're learning! 📚")
else:
    print("Just starting out! 🌱")
```

---

## 🔍 How `elif` Works

### The Order Matters!

Python checks conditions **from top to bottom** and stops at the FIRST one that's True!

```python
score = 95

if score >= 70:        # This is True! (95 >= 70)
    print("Grade: C")
elif score >= 80:      # Python never checks this!
    print("Grade: B")
elif score >= 90:    # Python never checks this!
    print("Grade: A")
```

**Output:** "Grade: C" (Wrong!)

**Why?** Because Python checks `score >= 70` FIRST, and it's True, so it stops!

**The Fix:** Check from HIGHEST to LOWEST!

```python
score = 95

if score >= 90:        # Check highest first!
    print("Grade: A")
elif score >= 80:      # Then check next highest
    print("Grade: B")
elif score >= 70:      # Then check next
    print("Grade: C")
else:                  # Everything else
    print("Grade: D")
```

**Output:** "Grade: A" (Correct!)

### Important Rules

1. **Check from highest to lowest** — Or most specific to least specific
2. **Only ONE block runs** — Python stops at the first True condition
3. **`else` is optional** — But it's good to have a catch-all
4. **You can have many `elif`s** — As many as you need!

---

## 🎮 More Fun Examples

### Example 1: Difficulty Selector

```python
difficulty = "medium"

if difficulty == "easy":
    print("Starting easy mode! 🟢")
elif difficulty == "medium":
    print("Starting medium mode! 🟡")
elif difficulty == "hard":
    print("Starting hard mode! 🟠")
elif difficulty == "expert":
    print("Starting expert mode! 🔴")
else:
    print("Invalid difficulty! Using easy mode.")
```

### Example 2: Age Group Categorizer

```python
age = 12

if age >= 18:
    print("You're an adult!")
elif age >= 13:
    print("You're a teenager!")
elif age >= 5:
    print("You're a kid!")
else:
    print("You're a toddler!")
```

### Example 3: Game Score Achievements

```python
score = 1500

if score >= 2000:
    print("🏆 Legendary Player!")
elif score >= 1500:
    print("⭐ Master Player!")
elif score >= 1000:
    print("🎯 Expert Player!")
elif score >= 500:
    print("📈 Advanced Player!")
else:
    print("🌱 Beginner Player!")
```

### Example 4: Character Class Selector

```python
character_class = "mage"

if character_class == "warrior":
    print("You chose Warrior! ⚔️ Strong and brave!")
elif character_class == "mage":
    print("You chose Mage! 🔮 Powerful magic!")
elif character_class == "archer":
    print("You chose Archer! 🏹 Fast and accurate!")
elif character_class == "healer":
    print("You chose Healer! 💚 Support your team!")
else:
    print("Unknown class! Choose warrior, mage, archer, or healer.")
```

---

## 🎯 Practice Time!

### Challenge 1: Temperature Checker

Create a program that gives different messages based on temperature:

```python
temperature = 75

if temperature >= 90:
    print("It's very hot! Stay cool! 🔥")
elif temperature >= 70:
    print("It's warm and nice! ☀️")
elif temperature >= 50:
    print("It's cool! Wear a light jacket. 🧥")
else:
    print("It's cold! Bundle up! ❄️")
```

### Challenge 2: Coin Collector Status

Create a program that shows status based on coins collected:

```python
coins = 250

if coins >= 500:
    print("💰 You're rich! Buy anything!")
elif coins >= 250:
    print("💵 You have good savings!")
elif coins >= 100:
    print("💴 You're doing okay!")
else:
    print("💸 Keep collecting coins!")
```

### Challenge 3: Study Time Tracker

Create a program that gives feedback based on study hours:

```python
hours_studied = 3

if hours_studied >= 5:
    print("🌟 Amazing dedication!")
elif hours_studied >= 3:
    print("⭐ Great job!")
elif hours_studied >= 1:
    print("📚 Good start!")
else:
    print("💪 You can do better!")
```

---

## 🎨 Creative Challenge: Build Your Own!

Create your own program using `if/elif/else` with at least 4 options!

**Ideas:**
- Menu system (breakfast, lunch, dinner, snack)
- Mood checker (happy, sad, excited, tired)
- Skill level (beginner, intermediate, advanced, expert)
- Game status (playing, paused, game over, victory)
- Any creative idea you have!

---

## 📝 Key Takeaways

### If/Elif/Else Structure

```python
if condition1:
    # Code runs if condition1 is True
    do something
elif condition2:
    # Code runs if condition1 is False AND condition2 is True
    do something else
elif condition3:
    # Code runs if condition1 and condition2 are False AND condition3 is True
    do something different
else:
    # Code runs if ALL conditions above are False
    do this as a last resort
```

### Important Rules

1. **Check from highest to lowest** — Or most specific to least specific
2. **Only ONE block runs** — Python stops at the first True condition
3. **You need `if` first** — Can't start with `elif`
4. **`else` is optional** — But it's good practice to have one
5. **You can have many `elif`s** — As many as you need!

### When to Use Elif

Use `elif` when you have:
- **Three or more options** to choose from
- **Multiple conditions** that are related
- **A range of values** (like grades, levels, scores)

### Vocabulary Words

| Word | Definition | Example |
|------|------------|---------|
| **elif** | "Else if" - checks another condition if the first is False | `elif score >= 80:` |
| **multiple** | More than two | Multiple choices |
| **condition** | A True/False question | `score >= 90` |
| **order** | The sequence things happen | Check highest to lowest |

---

## 🌟 Next Lesson Preview

**Week 3: Many Options!**

Next week, you'll learn to build MENUS and programs with LOTS of choices! You'll create programs that let users pick from multiple options, like a restaurant menu or a game character creator!

**Sneak peek:**

```python
print("Choose your character:")
print("1. Warrior")
print("2. Mage")
print("3. Archer")
print("4. Healer")

choice = input("Enter 1, 2, 3, or 4: ")

if choice == "1":
    print("You chose Warrior!")
elif choice == "2":
    print("You chose Mage!")
# ... and more!
```

Get ready to build interactive menus! 🎮

---

## 🎉 Great Job!

You just learned `elif`—one of the most powerful tools in programming!

**What you accomplished today:**

- ✅ Learned what `elif` is and why it's useful
- ✅ Wrote your first `if/elif/else` statements
- ✅ Handled multiple options in your programs
- ✅ Built grade calculators and other multi-choice programs
- ✅ Understood the importance of checking order

> _BrightByte says: "WOW! You just learned `elif`! 🎯 This is HUGE! Now your programs can handle THREE, FOUR, FIVE, or even MORE options! You're building real, powerful programs now! Next week, we'll use elif to build menus and interactive programs. You're becoming a real programmer! Keep practicing, and I'll see you next week!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Time of Day Greeter:** Different greetings for morning, afternoon, evening, night
2. **Pizza Size Selector:** Small, medium, large, extra-large with prices
3. **Book Genre Recommender:** Different recommendations for different genres
4. **Exercise Intensity:** Different workouts for different fitness levels
5. **Color Mood Checker:** Different messages for different favorite colors

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_
