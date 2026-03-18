---
title: "Review If/Else"
description: "Review and strengthen your if/else skills with fun new challenges!"
difficulty: "beginner"
order_index: 1
course_slug: "term-4-more-choices"
is_premium: false
requires_trinket: true
starter_code: |
  # Review If/Else
  # Let's strengthen your decision-making skills!

  score = 85

  if score >= 80:
      print("Great job! You passed!")
  else:
      print("Keep practicing!")

  # Try your own if/else statements!
class_activities: |
  ## 🎮 Class Activity: If/Else Challenge Showdown!

  1. Partner up with a classmate
  2. Create 3 different if/else programs together
  3. Each program should solve a different problem
  4. Test with different values
  5. Share your favorite program with the class!

  **Challenge:** Who can create the most creative if/else program?
take_home_assignment: |
  ## 📚 Homework: My Decision Maker Program

  **Assignment:** Create a Python program that uses at least 6 if/else statements to solve real-world problems!

  **Requirements:**
  1. Use at least 6 if/else statements
  2. Each should solve a different problem
  3. Use variables for your checks
  4. Add comments explaining what each does
  5. Make it creative and fun!
  6. Code must run without errors

  **Example ideas:**
  - Game character status checker (health, level, etc.)
  - Shopping helper (budget checker, sale items)
  - Pet care assistant (hunger, happiness, energy)
  - Adventure game starter (character creation, starting choice)

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI assistants like Siri and Alexa use if/else logic millions of times per second! When you ask "What's the weather?" they check "If it's raining, then say 'bring an umbrella', else say 'no umbrella needed'". Every AI decision uses if/else patterns!

  You're mastering the same decision logic that powers every AI assistant!
---
# Term 4, Lesson 1: Review If/Else! ⚖️

**Course:** Term 4: More Choices  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Review and strengthen your if/else skills
- Create if/else statements with confidence
- Solve fun, new problems using if/else
- Handle both True and False cases like a pro
- Get ready for even MORE powerful decision-making tools!

---

## 🤖 Welcome Back from BrightByte!

> _"Hey there, Decision Master! 🎯 Welcome to Term 4! You've come SO FAR! In Term 3, you learned to make programs think with if and else. Today, we're going to REVIEW those skills and make them SUPER STRONG with fun new challenges! And get ready—next week, you'll learn something AMAZING that will let you handle even MORE choices!"_

### What's Special About Term 4?

In Term 3, you learned:
- `if` statements — Making decisions
- `else` statements — Handling the "otherwise" case
- Building interactive programs
- Creating adventure games

Now in Term 4, you'll learn:
- **`elif`** — Handling MANY options (not just two!)
- **Combining conditions** — Using "and" and "or"
- **More complex decisions** — Building bigger, better programs!
- **Advanced projects** — Expanded adventure games with multiple paths!

> _BrightByte says: "Term 4 is where your decision-making skills become SUPER POWERFUL! But first, let's make sure you're a PRO at if/else. Today we'll review with fun new challenges—and by the end, you'll be ready for the next level!"_

---

## ⚖️ Quick Review: What Are If/Else Statements?

### The Basics

An `if/else` statement lets your program make decisions:

```python
if condition:
    do this if True
else:
    do this if False
```

**Simple, right?** Your program checks if something is True, and does one thing. If it's False, it does something else!

### Why We're Reviewing

Before we learn NEW decision-making tools, let's make sure you're SUPER confident with if/else! Today we'll practice with fun, new examples that you haven't seen before.

---

## 🎮 Fun New If/Else Examples!

### Example 1: Game Character Health Check

```python
health = 75

if health > 50:
    print("Your character is healthy! Keep going!")
else:
    print("Warning! Your character needs healing!")
```

**Try changing `health` to 30:** What happens?

**Output when health = 75:**
```
Your character is healthy! Keep going!
```

**Output when health = 30:**
```
Warning! Your character needs healing!
```

### Example 2: Shopping Budget Checker

```python
budget = 50
item_price = 35

if budget >= item_price:
    print("You can afford this item! Buy it!")
else:
    print("Sorry, you don't have enough money.")
```

**What if item_price is 60?** The program will say you can't afford it!

### Example 3: Pet Happiness Meter

```python
happiness = 80

if happiness >= 70:
    print("Your pet is very happy! 😊")
else:
    print("Your pet needs some attention! 🐾")
```

### Example 4: Adventure Game Starting Choice

```python
choice = "forest"

if choice == "forest":
    print("You enter the mysterious forest...")
else:
    print("You choose a different path...")
```

**Try changing `choice` to "castle":** What happens?

---

## 🔍 More Creative Examples

### Example 1: Score Achievements

```python
score = 250

if score >= 200:
    print("🎉 Achievement Unlocked: High Scorer!")
else:
    print("Keep playing to unlock achievements!")
```

### Example 2: Weather Clothes Helper

```python
temperature = 65

if temperature < 70:
    print("It's chilly! Wear a jacket.")
else:
    print("It's warm! Shorts and t-shirt weather!")
```

### Example 3: Library Book Checker

```python
books_read = 12

if books_read >= 10:
    print("Awesome! You're a reading champion!")
else:
    print("Keep reading to become a champion!")
```

### Example 4: Coin Collector Game

```python
coins = 50
price = 75

if coins >= price:
    print("You have enough coins to buy the power-up!")
else:
    needed = price - coins
    print(f"You need {needed} more coins!")
```

---

## 🎯 Practice Time!

### Challenge 1: Character Level Checker

Create a program that checks if a game character has reached level 10:

```python
level = 8

if level >= 10:
    print("You've reached level 10! New abilities unlocked!")
else:
    print(f"You're at level {level}. Keep playing to reach level 10!")
```

### Challenge 2: Birthday Age Checker

Create a program that checks if someone is old enough for a certain activity:

```python
age = 11
minimum_age = 13

if age >= minimum_age:
    print("You're old enough! Welcome!")
else:
    years_needed = minimum_age - age
    print(f"Sorry, you need to wait {years_needed} more year(s).")
```

### Challenge 3: Score Comparison

Create a program that compares two scores:

```python
player1_score = 150
player2_score = 180

if player1_score > player2_score:
    print("Player 1 wins!")
else:
    print("Player 2 wins!")
```

### Challenge 4: Magic Number Checker

Create a program that checks if a number is a "magic number" (greater than 100):

```python
number = 125

if number > 100:
    print(f"{number} is a magic number! ✨")
else:
    print(f"{number} is a regular number.")
```

---

## 🎨 Creative Challenge: Build Your Own!

Now it's YOUR turn! Create your own if/else program that solves a problem YOU think is interesting!

**Ideas to get you started:**
- A quiz answer checker
- A password strength checker
- A game inventory checker
- A study time tracker
- A hobby completion tracker
- A favorite color picker

**Remember:**
- Use variables
- Add comments
- Make it fun and creative!

---

## 📝 Key Takeaways

### If/Else Structure

```python
if condition:
    # Code runs if condition is True
    do something
else:
    # Code runs if condition is False
    do something else
```

### Important Rules to Remember

1. **Always use a colon** — `if condition:` and `else:`
2. **Indent your code** — Code inside if/else must be indented
3. **`else` needs an `if`** — You can't use `else` by itself
4. **Test both cases** — Try values that make it True AND False!

### Comparison Operators Review

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal to | `age == 10` |
| `!=` | Not equal to | `name != "Alex"` |
| `>` | Greater than | `score > 100` |
| `<` | Less than | `age < 13` |
| `>=` | Greater than or equal | `level >= 5` |
| `<=` | Less than or equal | `health <= 50` |

### Vocabulary Words

| Word | Definition | Example |
|------|------------|---------|
| **if** | Checks if something is True | `if score > 50:` |
| **else** | What to do if condition is False | `else:` |
| **condition** | A True/False question | `age >= 13` |
| **decision** | Choosing between options | Using if/else |

---

## 🌟 Next Lesson Preview

**Week 2: What About Elif?**

Next week, you'll discover something AMAZING! Right now, if/else can only handle TWO options (True or False). But what if you have THREE options? Or FOUR? Or MORE?

That's where **`elif`** comes in! `elif` stands for "else if" and lets you handle MANY different options!

**Sneak peek:**

```python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: D")
```

With `elif`, you can check multiple conditions in one program! Get ready to level up your decision-making skills! 🚀

---

## 🎉 Great Job, Decision Master!

You just reviewed and strengthened your if/else skills!

**What you accomplished today:**

- ✅ Reviewed if/else statements
- ✅ Solved fun, new problems using if/else
- ✅ Created creative decision-making programs
- ✅ Built confidence with if/else
- ✅ Prepared for even MORE powerful tools!

> _BrightByte says: "EXCELLENT work! You're becoming a real decision-making expert! 🎯 Your if/else skills are getting stronger and stronger. Next week, we're going to learn `elif`—and trust me, you're going to LOVE it! It's like if/else, but BETTER! Keep practicing, and I'll see you next week for the next level of decision-making power!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these fun challenges:

1. **Game Status Dashboard:** Check health, level, coins, and give status messages
2. **Study Helper:** Check study time and give encouragement or reminders
3. **Shopping Assistant:** Check budget for multiple items
4. **Sports Score Tracker:** Compare scores from different games
5. **Character Creator:** Check character stats and give feedback

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_
