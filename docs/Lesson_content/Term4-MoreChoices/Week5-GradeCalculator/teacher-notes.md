# Term 4, Lesson 5: Grade Calculator! 📊

## Teacher's Guide

**Course:** Term 4: More Choices  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson combines all the decision-making skills students have learned (if, else, elif, and, or) into a complete, practical program—a grade calculator. This is a synthesis lesson where students apply everything they know to build something useful. It reinforces all concepts while building confidence.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Build a complete grade calculator program
2. Use if/elif/else to assign letter grades
3. Calculate averages from multiple scores
4. Combine all decision-making skills in one program
5. Create a professional, useful program

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing structure
- Optional: Sample grade reports to show format

### Pre-Lesson Preparation

1. **Review all concepts** — if, else, elif, and, or
2. **Prepare complete example** — Have a working grade calculator ready
3. **Think about extensions** — GPA, grade points, etc.
4. **Prepare common mistakes** — Wrong order, missing elif, etc.
5. **Plan step-by-step approach** — Build incrementally

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity | Details |
| ---- | -------- | -------- | ------- |
| 0:00 | 5 min | Introduction | What we're building today |
| 0:05 | 15 min | Basic Calculator | Build simple grade calculator together |
| 0:20 | 15 min | Multiple Subjects | Add more subjects |
| 0:35 | 10 min | Average Calculation | Calculate and display average |
| 0:45 | 10 min | Enhancements | Add pass/fail, messages |
| 0:55 | 3 min | Wrap-up & Homework | Summary and assignment |
| 0:58 | 2 min | Q&A Buffer | Questions |

---

## 📚 Detailed Teaching Guide

### Part 1: Introduction (5 minutes)

#### Goals

- Set context for the lesson
- Show what we're building
- Get students excited

#### The Introduction

> "Today, we're going to build something REAL and USEFUL—a grade calculator! This is the kind of program that teachers actually use. We're going to combine EVERYTHING you've learned—if, else, elif, and, or—into one complete program!"

**Show a sample output:**

```
=== GRADE REPORT ===
Math: 90 - Grade A
Science: 85 - Grade B
English: 88 - Grade B

Average: 87.7 - Grade B
Status: PASS ✅
```

> "This is what we're building! Let's do it step by step!"

#### Teaching Tips

- Build excitement about creating something "real"
- Show the end goal
- Emphasize combining all skills
- Keep it brief—move to building

---

### Part 2: Basic Calculator (15 minutes)

#### Goals

- Build a simple grade calculator
- Review if/elif/else structure
- Get students coding

#### Building Together

> "Let's start simple. We'll build a calculator for ONE score."

**Step 1: The Structure**

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

> "Type this with me. Notice we check from highest to lowest—90+, then 80+, then 70+, then 60+, then everything else."

**Step 2: Test It**

> "Run it! What do you get? Now try changing the score to 95, 75, 65, 55. What happens?"

Let students test with different values.

**Step 3: Add a Message**

```python
if score >= 90:
    grade = "A"
    message = "Excellent work! 🌟"
elif score >= 80:
    grade = "B"
    message = "Great job! ⭐"
# ... etc
```

> "Let's make it more helpful by adding messages!"

#### Teaching Tips

- Build step by step
- Test frequently
- Emphasize the order (highest to lowest)
- Let students experiment with values
- Keep it simple first

---

### Part 3: Multiple Subjects (15 minutes)

#### Goals

- Add more subjects
- Show how to calculate multiple grades
- Practice the pattern

#### Adding Subjects

> "Now let's add more subjects! We'll do the same thing for each subject."

**Show the pattern:**

```python
math_score = 90
science_score = 85
english_score = 88

# Calculate Math grade (same pattern as before)
if math_score >= 90:
    math_grade = "A"
elif math_score >= 80:
    math_grade = "B"
# ... etc

# Calculate Science grade (same pattern)
if science_score >= 90:
    science_grade = "A"
# ... etc

# Display results
print("=== GRADE REPORT ===")
print(f"Math: {math_score} - Grade {math_grade}")
print(f"Science: {science_score} - Grade {science_grade}")
print(f"English: {english_score} - Grade {english_grade}")
```

> "See the pattern? We do the same if/elif/else for each subject. Let's build it together!"

Guide students through adding 2-3 subjects.

#### Teaching Tips

- Show the pattern clearly
- Emphasize repetition (same structure for each subject)
- Don't worry about being repetitive—it's okay for now
- Help students who get stuck
- Celebrate when it works

---

### Part 4: Average Calculation (10 minutes)

#### Goals

- Calculate average score
- Calculate average grade
- Display it clearly

#### Adding Average

> "Now let's calculate the average! We add all scores and divide by the number of subjects."

```python
# Calculate average
average = (math_score + science_score + english_score) / 3

# Calculate average grade (same if/elif/else pattern)
if average >= 90:
    average_grade = "A"
elif average >= 80:
    average_grade = "B"
# ... etc

# Display
print(f"Average: {average:.1f} - Grade {average_grade}")
```

> "The .1f means show one decimal place. Let's add this!"

Guide students through adding the average.

#### Teaching Tips

- Show the math clearly
- Explain the .1f formatting
- Use the same grade calculation pattern
- Test with different scores

---

### Part 5: Enhancements (10 minutes)

#### Goals

- Add pass/fail
- Add messages
- Make it look professional

#### Adding Pass/Fail

> "Let's add a pass/fail check! If average is 70+, they pass!"

```python
if average >= 70:
    status = "PASS ✅"
    message = "Congratulations! You're passing!"
else:
    status = "FAIL ❌"
    message = "Keep studying! You can do it!"

print(f"Status: {status}")
print(message)
```

> "This uses a simple if/else! Let's add it!"

**Also add decorative borders:**

```python
print("=" * 30)
print("     GRADE REPORT")
print("=" * 30)
```

Guide students through these enhancements.

#### Teaching Tips

- Keep enhancements simple
- Focus on making it work first
- Then make it look nice
- Encourage creativity

---

### Part 6: Wrap-up & Homework (3 minutes)

#### Review Key Points

> "What did we build today?"

Quick review:
1. "How do we assign grades?" → if/elif/else
2. "How do we calculate average?" → Add scores, divide by count
3. "What did we combine?" → All our decision-making skills!

#### Introduce Homework

> "For homework, build an enhanced grade calculator with at least 3 subjects, average, and pass/fail!"

#### Preview Next Week

> "Next week, we'll build a quiz program! You'll check answers and calculate scores!"

---

## 🤖 AI Activity: AI Fairness Discussion (5-10 minutes)

### What to Do

1. **Introduction** (1 min)
   > "You just built a grade calculator. But here's an important question: What if AI graded your work? Would it be fair?"

2. **Fairness Discussion** (4-5 min)
   - Ask: "What if AI graded your homework and gave you a bad grade - but you think it's wrong?"
   - Discuss: "What if AI makes mistakes? Is that fair?"
   - Brainstorm: "What makes grading fair or unfair?"
   - Explain: "AI programmers think about fairness all the time - it's called AI ethics!"

3. **Discussion** (2-3 min)
   - "Is it fair if AI grades your work?"
   - "What if AI makes mistakes?"
   - "How can we make sure AI is fair?"

4. **Connection** (1 min)
   > "When you build programs that make decisions, it's important to think about fairness - just like AI programmers do! Your grade calculator follows exact rules, but AI can make mistakes. Thinking about fairness is part of being a responsible programmer!"

### Discussion Questions

- "Is it fair if AI grades your work?"
- "What if AI makes mistakes - is that fair?"
- "How can we make sure AI is fair to everyone?"

### Teaching Tips

- Keep it age-appropriate - focus on fairness, not complex ethics
- Encourage all opinions - there's no "right" answer
- Use concrete examples: "What if AI gave you a bad grade by mistake?"
- Connect to their code: "Your calculator follows rules - but what if the rules are unfair?"
- Emphasize thinking about fairness: "This is what AI programmers think about!"

### Alternative Activity (If Short on Time)

- Quick discussion: "Who thinks it's fair if AI grades your work?"
- Connect: "AI programmers think about fairness all the time!"
- Emphasize: "Thinking about fairness is part of being a good programmer!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**
- [ ] Can student build basic grade calculator?
- [ ] Does student use if/elif/else correctly?
- [ ] Can student calculate average?
- [ ] Does student understand the pattern?

### Homework Assessment: "My Enhanced Grade Calculator"

| Criteria | Exceeds (3) | Meets (2) | Developing (1) |
|----------|-------------|-----------|----------------|
| **Grade calculation** | Correct for all subjects | Correct for most | Errors in calculation |
| **Number of subjects** | 4+ subjects | 3 subjects | Fewer than 3 |
| **Average calculation** | Correct average and grade | Correct average | Errors |
| **Pass/fail** | Correctly implemented | Implemented | Missing or wrong |
| **Display** | Professional, clear | Clear | Unclear |
| **Code runs** | No errors | Minor issues | Major errors |

### Differentiation Strategies

#### For Students Who Need More Support

- Start with just one subject
- Provide a template
- Focus on getting it working first
- Reduce to 2 subjects for homework
- Pair with a peer
- Provide step-by-step checklist

#### For Advanced Students

- Challenge with more subjects (5+)
- Add grade point values (A=4.0, etc.)
- Calculate GPA
- Make it interactive with input()
- Add more features
- Ask them to help peers

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem | Prevention | Solution |
|---------|------------|----------|
| Wrong order in if/elif | Emphasize highest to lowest | "Always check 90+ first!" |
| Forgetting to calculate average | Show the formula | "Add all, divide by count" |
| Not displaying clearly | Show formatting | "Use borders and labels" |

### Conceptual Issues

| Problem | Signs | Solution |
|---------|-------|----------|
| Doesn't understand pattern | Repeats code incorrectly | "Same structure for each subject" |
| Confused about average | Wrong calculation | "Add all scores, divide by number" |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand the pattern?
   - Were they able to build it?
   - Did they combine skills well?

2. **What needs improvement?**
   - Any concepts that need more time?
   - Students struggling with structure?
   - Examples that didn't work?

3. **Individual student notes:**
   - Who excelled at combining skills?
   - Who needs extra support?
   - Who's ready for next week?

---

## 🔗 Additional Resources

### Parent Communication Template

```
Subject: Term 4 Week 5 - Grade Calculator! 📊

Dear Parent/Guardian,

This week we built a complete grade calculator program!

Students learned:
- How to combine all decision-making skills
- How to calculate letter grades
- How to calculate averages
- How to build a complete, useful program

Homework due by [date]:
"My Enhanced Grade Calculator" - with 3+ subjects, average, and pass/fail

How you can help:
- Ask them to show you their calculator
- Test it with different scores
- Encourage them to add more features

Next week: We'll build a quiz program!

Questions? Reply to this email!

Happy coding!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review all decision-making concepts
- [ ] Prepare complete example
- [ ] Plan step-by-step approach
- [ ] Prepare common mistakes
- [ ] Think about extensions

### During Class

- [ ] Introduced the project
- [ ] Built basic calculator together
- [ ] Added multiple subjects
- [ ] Calculated average
- [ ] Added enhancements
- [ ] Students built their own
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Review homework submissions
- [ ] Prepare for Week 6 (quiz builder)

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This is a synthesis lesson! Students are combining everything they know. Be patient, build step by step, and celebrate when it works! This builds huge confidence!_ 📊
