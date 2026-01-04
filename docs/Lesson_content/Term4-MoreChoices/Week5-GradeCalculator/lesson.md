---
title: "Grade Calculator"
description: "Build a complete grade calculator program using everything you've learned!"
difficulty: "beginner"
order_index: 5
course_slug: "term-4-more-choices"
is_premium: false
requires_trinket: true
starter_code: |
  # Grade Calculator
  # Calculate letter grades from scores!

  score = 85

  if score >= 90:
      grade = "A"
  elif score >= 80:
      grade = "B"
  elif score >= 70:
      grade = "C"
  elif score >= 60:
      grade = "D"
  else:
      grade = "F"

  print(f"Score: {score}")
  print(f"Grade: {grade}")

  # Try changing the score and see what grade you get!
class_activities: |
  ## 🎮 Class Activity: Grade Calculator Workshop!

  **Part 1: Basic Calculator (15 min)**
  - Build a grade calculator together
  - Test with different scores
  - Add comments

  **Part 2: Enhancements (20 min)**
  - Add multiple subjects
  - Calculate average
  - Add pass/fail message
  - Make it your own!

  **Part 3: Share & Test (10 min)**
  - Share your calculators
  - Test each other's programs
  - Give feedback

  **Challenge:** Who can create the most useful grade calculator?
take_home_assignment: |
  ## 📚 Homework: My Enhanced Grade Calculator

  **Assignment:** Build a complete grade calculator program with enhancements!

  **Requirements:**
  1. Calculate letter grades (A, B, C, D, F)
  2. Handle at least 3 different subjects
  3. Calculate average grade
  4. Display results clearly
  5. Add pass/fail message (pass if average >= 70)
  6. Use if/elif/else correctly
  7. Add comments explaining your code
  8. Code must run without errors

  **Bonus Points:**
  - Add grade point values (A=4.0, B=3.0, etc.)
  - Calculate GPA
  - Add encouragement messages
  - Make it interactive with input()
  - Add decorative borders

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI-powered learning systems use grade calculators all the time! When online learning platforms automatically calculate your grade, or when AI tutors give you feedback based on your scores, they're using the same if/elif/else logic you're learning! AI systems process thousands of grades per second using these same decision-making patterns! But here's an important question: Is it fair if AI grades your work? What if it makes mistakes? These are questions about AI fairness - something AI programmers think about all the time!

  You're building the same grade calculation logic that powers AI learning platforms!
---
# Term 4, Lesson 5: Grade Calculator! 📊

**Course:** Term 4: More Choices  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Build a complete grade calculator program
- Use if/elif/else to assign letter grades
- Calculate averages from multiple scores
- Display results clearly and professionally
- Combine all your decision-making skills into one program!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! You've learned SO MUCH this term—if, else, elif, and, or! Today, we're going to put it ALL together to build something REAL and USEFUL—a grade calculator! This is the kind of program that teachers actually use! You're going to combine everything you've learned to create a complete, working program!"_

### What's Special About This Week?

So far you've learned:
- `if/else` — Basic decisions
- `elif` — Multiple options
- `and/or` — Combined conditions

This week you'll:
- **Put it all together** — Build a complete program!
- **Create something useful** — A real grade calculator!
- **Practice everything** — Use all your skills in one project!

> _BrightByte says: "This is where it all comes together! You're going to build a program that actually does something useful. This is real programming—combining everything you know to solve a problem. Get excited!"_

---

## 📊 Building Your Grade Calculator

### Step 1: Basic Grade Calculator

Let's start with a simple calculator that converts a score to a letter grade:

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Score: {score}")
print(f"Grade: {grade}")
```

**Output:**
```
Score: 85
Grade: B
```

**How it works:**
1. Check if score is 90+ → A
2. If not, check if 80+ → B
3. If not, check if 70+ → C
4. If not, check if 60+ → D
5. Otherwise → F

**Try different scores!** Change `score = 85` to 95, 75, 65, 55 and see what happens!

### Step 2: Add a Message

Let's make it more helpful by adding a message:

```python
score = 85

if score >= 90:
    grade = "A"
    message = "Excellent work! 🌟"
elif score >= 80:
    grade = "B"
    message = "Great job! ⭐"
elif score >= 70:
    grade = "C"
    message = "Good work! 👍"
elif score >= 60:
    grade = "D"
    message = "Keep practicing! 💪"
else:
    grade = "F"
    message = "Don't give up! Study more! 📚"

print(f"Score: {score}")
print(f"Grade: {grade}")
print(message)
```

**Output:**
```
Score: 85
Grade: B
Great job! ⭐
```

### Step 3: Multiple Subjects

Now let's calculate grades for multiple subjects:

```python
math_score = 90
science_score = 85
english_score = 88

# Calculate each grade
if math_score >= 90:
    math_grade = "A"
elif math_score >= 80:
    math_grade = "B"
elif math_score >= 70:
    math_grade = "C"
elif math_score >= 60:
    math_grade = "D"
else:
    math_grade = "F"

if science_score >= 90:
    science_grade = "A"
elif science_score >= 80:
    science_grade = "B"
elif science_score >= 70:
    science_grade = "C"
elif science_score >= 60:
    science_grade = "D"
else:
    science_grade = "F"

if english_score >= 90:
    english_grade = "A"
elif english_score >= 80:
    english_grade = "B"
elif english_score >= 70:
    english_grade = "C"
elif english_score >= 60:
    english_grade = "D"
else:
    english_grade = "F"

# Display results
print("=== GRADE REPORT ===")
print(f"Math: {math_score} - Grade {math_grade}")
print(f"Science: {science_score} - Grade {science_grade}")
print(f"English: {english_score} - Grade {english_grade}")
```

**Output:**
```
=== GRADE REPORT ===
Math: 90 - Grade A
Science: 85 - Grade B
English: 88 - Grade B
```

### Step 4: Calculate Average

Let's add an average calculation:

```python
math_score = 90
science_score = 85
english_score = 88

# Calculate average
average = (math_score + science_score + english_score) / 3

# Calculate average grade
if average >= 90:
    average_grade = "A"
elif average >= 80:
    average_grade = "B"
elif average >= 70:
    average_grade = "C"
elif average >= 60:
    average_grade = "D"
else:
    average_grade = "F"

# Display results
print("=== GRADE REPORT ===")
print(f"Math: {math_score} - Grade {math_grade}")
print(f"Science: {science_score} - Grade {science_grade}")
print(f"English: {english_score} - Grade {english_grade}")
print(f"")
print(f"Average: {average:.1f} - Grade {average_grade}")
```

**Output:**
```
=== GRADE REPORT ===
Math: 90 - Grade A
Science: 85 - Grade B
English: 88 - Grade B

Average: 87.7 - Grade B
```

### Step 5: Add Pass/Fail

Let's add a pass/fail message:

```python
# ... (all the code from before) ...

# Check if passing
if average >= 70:
    status = "PASS ✅"
    message = "Congratulations! You're passing!"
else:
    status = "FAIL ❌"
    message = "Keep studying! You can do it!"

print(f"Status: {status}")
print(message)
```

---

## 🎯 Complete Example

Here's a complete grade calculator:

```python
# === GRADE CALCULATOR ===
# Calculate grades for multiple subjects

# Student scores
math_score = 90
science_score = 85
english_score = 88

# Calculate Math grade
if math_score >= 90:
    math_grade = "A"
elif math_score >= 80:
    math_grade = "B"
elif math_score >= 70:
    math_grade = "C"
elif math_score >= 60:
    math_grade = "D"
else:
    math_grade = "F"

# Calculate Science grade
if science_score >= 90:
    science_grade = "A"
elif science_score >= 80:
    science_grade = "B"
elif science_score >= 70:
    science_grade = "C"
elif science_score >= 60:
    science_grade = "D"
else:
    science_grade = "F"

# Calculate English grade
if english_score >= 90:
    english_grade = "A"
elif english_score >= 80:
    english_grade = "B"
elif english_score >= 70:
    english_grade = "C"
elif english_score >= 60:
    english_grade = "D"
else:
    english_grade = "F"

# Calculate average
average = (math_score + science_score + english_score) / 3

# Calculate average grade
if average >= 90:
    average_grade = "A"
elif average >= 80:
    average_grade = "B"
elif average >= 70:
    average_grade = "C"
elif average >= 60:
    average_grade = "D"
else:
    average_grade = "F"

# Check pass/fail
if average >= 70:
    status = "PASS ✅"
    message = "Great job! Keep it up!"
else:
    status = "FAIL ❌"
    message = "Keep studying! You can improve!"

# Display results
print("=" * 30)
print("     GRADE REPORT")
print("=" * 30)
print(f"Math:    {math_score} - Grade {math_grade}")
print(f"Science: {science_score} - Grade {science_grade}")
print(f"English: {english_score} - Grade {english_grade}")
print("-" * 30)
print(f"Average: {average:.1f} - Grade {average_grade}")
print(f"Status:  {status}")
print("=" * 30)
print(message)
```

---

## 🎮 Practice Time!

### Challenge 1: Build Your Own Calculator

Create a grade calculator for your favorite subjects!

### Challenge 2: Add More Features

- Add grade point values (A=4.0, B=3.0, etc.)
- Calculate GPA
- Add encouragement messages for each grade
- Make it interactive with input()

### Challenge 3: Make It Beautiful

- Add decorative borders
- Use emojis
- Make the output look professional
- Add colors (if possible in your environment)

---

## 📝 Key Takeaways

### Grade Calculator Structure

1. **Get scores** — Store scores in variables
2. **Calculate grades** — Use if/elif/else for each subject
3. **Calculate average** — Add scores and divide by number of subjects
4. **Display results** — Show everything clearly
5. **Add messages** — Make it helpful and encouraging

### Important Tips

1. **Check from highest to lowest** — 90+, then 80+, then 70+, etc.
2. **Use elif for multiple options** — Don't use separate if statements
3. **Calculate average correctly** — Sum all scores, divide by count
4. **Display clearly** — Use borders, labels, and formatting
5. **Test with different scores** — Make sure it works for all cases

### What You're Combining

- **if/elif/else** — For grade assignment
- **Variables** — To store scores and grades
- **Math** — To calculate averages
- **Print formatting** — To display results nicely

---

## 🌟 Next Lesson Preview

**Week 6: Quiz Builder!**

Next week, you'll build an interactive quiz program! You'll use if/elif/else to check answers, calculate scores, and give feedback. This will be another complete program combining all your skills!

**Sneak peek:**

```python
question1 = input("What is 2 + 2? ")
if question1 == "4":
    print("Correct!")
    score += 1
else:
    print("Wrong! The answer is 4.")
```

Get ready to build a quiz! 🎯

---

## 🎉 Great Job!

You just built a complete grade calculator!

**What you accomplished today:**

- ✅ Built a working grade calculator
- ✅ Used if/elif/else to assign grades
- ✅ Calculated averages from multiple scores
- ✅ Combined all your skills into one program
- ✅ Created something useful and real!

> _BrightByte says: "WOW! 📊 You just built a REAL program! This is what programming is all about—combining everything you know to solve problems and create useful tools! You're not just learning code—you're BUILDING things! Next week, we'll build a quiz program. You're becoming a real programmer! Keep up the amazing work!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Add more subjects** — History, Art, Music, etc.
2. **Make it interactive** — Use input() to enter scores
3. **Add grade points** — A=4.0, B=3.0, C=2.0, D=1.0, F=0.0
4. **Calculate GPA** — Average of grade points
5. **Add semester tracking** — Track grades over time

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_
