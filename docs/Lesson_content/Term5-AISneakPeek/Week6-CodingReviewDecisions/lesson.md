---
title: "Coding Review: Decisions"
description: "Review if/else and elif with fun new challenges - keep your decision-making skills sharp!"
difficulty: "beginner"
order_index: 6
course_slug: "term-5-ai-sneak-peek"
is_premium: false
requires_trinket: true
starter_code: |
  # Coding Review: Decisions
  # Let's review if/else and elif!

  score = 85

  # Simple if/else
  if score >= 80:
      print("You passed! Great job!")
  else:
      print("Keep practicing!")

  # Using elif for multiple options
  if score >= 90:
      grade = "A"
  elif score >= 80:
      grade = "B"
  elif score >= 70:
      grade = "C"
  else:
      grade = "D"

  print(f"Your grade: {grade}")

  # Try your own decision-making programs!
class_activities: |
  ## 🎮 Class Activity: Decision-Making Challenge!

  1. Partner up with a classmate
  2. Create 3 different programs using if/else/elif
  3. Each program should solve a different problem
  4. Test with different values
  5. Share your favorite program!

  **Challenge:** Who can create the most creative decision-making program?
take_home_assignment: |
  ## 📚 Homework: My Decision-Making Program

  **Assignment:** Create a Python program that uses if/else/elif to solve a fun problem!

  **Requirements:**
  1. Use if/else at least 3 times
  2. Use elif at least once
  3. Create a story or solve a problem
  4. Add comments explaining your decisions
  5. Make it creative and fun!
  6. Code must run without errors

  **Example ideas:**
  - Adventure game starter (character creation, starting choice)
  - Weather helper (suggests activities based on weather)
  - Study helper (gives advice based on study time)
  - Game status checker (health, level, status messages)
  - Any creative idea using decisions!

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI makes MILLIONS of decisions per second using if/else/elif logic! When Siri decides how to answer, when YouTube decides what to recommend, when a game character decides how to react—they all use decision-making logic just like you're learning! Every AI decision uses if/else patterns!

  You're practicing the same decision-making logic that powers every AI system!
---
# Term 5, Lesson 6: Coding Review - Decisions! 🎯

**Course:** Term 5: AI Sneak Peek  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 5 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Review and strengthen your if/else skills
- Review and strengthen your elif skills
- Use decision-making in creative ways
- Solve fun problems with decisions
- Keep your Python skills fresh!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! Last week, we reviewed variables and math. This week, we're reviewing decision-making—if, else, and elif! These are SUPER important skills because AI makes MILLIONS of decisions every second using the same logic! Let's review with fun new challenges!"_

### What's Special About This Week?

This week we're:
- **Reviewing if/else** — Making decisions
- **Reviewing elif** — Multiple options
- **Creative challenges** — Fun new problems
- **AI connection** — AI uses the same logic!

> _BrightByte says: "Decision-making is at the heart of programming AND AI! Every AI system uses if/else logic to make decisions. You're learning the same skills that power AI!"_

---

## ⚖️ Review: If/Else

### Basic If/Else Structure

```python
if condition:
    # Do this if True
    do something
else:
    # Do this if False
    do something else
```

### Example 1: Score Checker

```python
score = 85

if score >= 80:
    print("You passed! Great job!")
else:
    print("Keep practicing!")
```

**Output:** "You passed! Great job!"

### Example 2: Age Checker

```python
age = 12

if age >= 13:
    print("You're a teenager!")
else:
    print("You're not a teenager yet!")
```

**Output:** "You're not a teenager yet!"

### Example 3: Game Status

```python
health = 75

if health > 50:
    print("Your character is healthy!")
else:
    print("Warning! Your character needs healing!")
```

---

## 🎯 Review: Elif

### Elif Structure

```python
if condition1:
    do this
elif condition2:
    do this instead
elif condition3:
    do this instead
else:
    do this if nothing else matches
```

### Example 1: Grade Calculator

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"

print(f"Your grade: {grade}")
```

**Output:** "Your grade: B"

### Example 2: Weather Helper

```python
weather = "sunny"
temperature = 75

if weather == "sunny" and temperature >= 70:
    print("Perfect day for the beach! 🏖️")
elif weather == "sunny" or temperature >= 70:
    print("Good weather for outdoor activities! 🎾")
else:
    print("Better stay indoors! 🏠")
```

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

## 🎮 Fun Challenges

### Challenge 1: Adventure Game Starter

```python
print("=== ADVENTURE GAME ===")
print("Choose your character class:")
print("1. Warrior")
print("2. Mage")
print("3. Archer")
print("")

choice = input("Enter 1, 2, or 3: ")

if choice == "1":
    print("You chose Warrior! ⚔️ Strong and brave!")
elif choice == "2":
    print("You chose Mage! 🔮 Powerful magic!")
elif choice == "3":
    print("You chose Archer! 🏹 Fast and accurate!")
else:
    print("Invalid choice! Please enter 1, 2, or 3.")
```

### Challenge 2: Weather Activity Planner

```python
weather = "rainy"
temperature = 65

if weather == "sunny" and temperature >= 70:
    print("Perfect for swimming! 🏊")
elif weather == "sunny" or temperature >= 70:
    print("Good for outdoor activities! 🎾")
elif weather == "rainy":
    print("Better stay indoors! 🏠")
else:
    print("Check the weather and decide!")
```

### Challenge 3: Study Helper

```python
hours_studied = 3
score = 90

if hours_studied >= 5 and score >= 85:
    print("🌟 Amazing dedication and results!")
elif hours_studied >= 3 or score >= 85:
    print("⭐ Great job!")
elif hours_studied >= 1:
    print("📚 Good start!")
else:
    print("💪 You can do better!")
```

---

## 🎨 Creative Projects

### Project 1: Interactive Helper

Create a program that helps users make decisions!

### Project 2: Game Status Dashboard

Create a program that checks multiple game stats!

### Project 3: Your Own Idea!

Create any program using if/else/elif!

---

## 📝 Key Takeaways

### If/Else

- Makes decisions based on conditions
- Handles True and False cases
- Foundation of all decision-making

### Elif

- Handles multiple options
- Checks conditions in order
- More powerful than if/else alone

### Combining Decisions

- Use if/else for two options
- Use elif for multiple options
- Combine with and/or for complex decisions

### How This Connects to AI

- AI makes millions of decisions per second
- Every AI decision uses if/else logic
- You're learning the same decision-making that powers AI!

---

## 🌟 Next Lesson Preview

**Week 7: Project - AI in My Life Poster**

Next week, we'll start your Term 5 project! You'll create a poster (digital or physical) showing all the AI in your life. This will combine everything you've learned about AI!

**Sneak peek:**
- Show 5+ examples of AI you use
- Explain what each AI does
- Create something visual and creative
- Present it next week!

Get ready for your project! 🎨

---

## 🎉 Great Job!

You just reviewed decision-making!

**What you accomplished today:**

- ✅ Reviewed if/else statements
- ✅ Reviewed elif statements
- ✅ Used decision-making creatively
- ✅ Solved fun problems
- ✅ Kept your Python skills fresh!

> _BrightByte says: "EXCELLENT! 🎯 You just reviewed decision-making—one of the most important skills in programming and AI! Every AI system uses if/else logic to make decisions. You're learning the same skills that power AI! Next week, we'll start your Term 5 project. Get ready!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Decision Games:** Create games with multiple choices
2. **Helper Programs:** Programs that help users decide
3. **Status Checkers:** Check multiple conditions
4. **Interactive Stories:** Stories that change based on decisions
5. **Challenge Yourself:** Create increasingly complex decision programs

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: decision-making is a superpower in programming!_ 🎯
