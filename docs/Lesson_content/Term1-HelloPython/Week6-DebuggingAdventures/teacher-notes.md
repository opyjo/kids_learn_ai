# Teacher Notes: Term 1, Week 6 - Debugging Adventures!

## Lesson Overview

| Item | Details |
|------|---------|
| **Duration** | 60 minutes |
| **Level** | Beginner |
| **Prerequisites** | Weeks 1-5 (all concepts) |
| **Materials** | Buggy code examples, Bug Detective badges |

---

## Learning Objectives

By the end of this lesson, students will be able to:
1. Define what a bug is and why they occur
2. Read and interpret basic Python error messages
3. Use systematic debugging strategies
4. Fix common syntax and name errors

---

## Lesson Timeline

| Time | Activity | Description |
|------|----------|-------------|
| 0-5 min | Story | Grace Hopper moth story |
| 5-15 min | Core Content | Error types and messages |
| 15-40 min | Activity | Bug Detective Agency |
| 40-55 min | Practice | Bug Fixing Challenge |
| 55-60 min | Wrap-up | Homework assignment |

---

## Class Activity: Bug Detective Agency 🔍

### Setup
Students become "Bug Detectives" at the "Python Bug Detective Agency"

### Case File 1: The Missing Quote (5 min)
```python
message = "Hello World
print(message)
```

**Detective Questions:**
- What error do we get?
- What line is the problem on?
- What's missing?

### Case File 2: The Mysterious Name (5 min)
```python
player_name = "Alex"
print("Hello,", PlayerName)
```

**Detective Questions:**
- Will this run?
- What's the error?
- Why does Python say it's not defined?

### Case File 3: The Type Mix-Up (7 min)
```python
score = 100
print("Your score is: " + score)
```

**Detective Questions:**
- What type is "Your score is: "?
- What type is score?
- How can we fix it?

### Case File 4: Multiple Suspects (8 min)
This code has 4 bugs! Find them all:

```python
Print("Welcome to my game!)
playr_name = "Alex"
print("Hello" player_name)
print("Your age is: " + 10
```

### Graduation Exercise (10 min)

Students write BUGGY code on purpose:
1. Each student writes code with 3 intentional bugs
2. Trade with a partner
3. Partner finds and fixes all bugs
4. Discuss what was tricky

### Badge Award
Students who find all bugs earn the "Bug Detective Badge" 🏅

---

## Take-Home Assignment: Bug Fixing Challenge 🐛

### Instructions

Fix ALL the bugs in these programs:

**Program 1: Introduction (2 bugs)**
```python
name = "Alex
print("Hello, my name is" name)
```

**Program 2: Math Display (3 bugs)**
```python
number = 5
Print("My lucky number is: + number)
print("Double that is:", number * 2
```

**Program 3: Story Time (4 bugs)**
```python
hero = "Super Cat
villain = "Dr. Evil"
print(Hero, "battles", villan)
print("Who will win?!)
```

**Program 4: The Big One (5 bugs)**
```python
my name = "Jordan"
my_age = ten
Print("Hi! I am, my_name)
print("I am" + my_age + "years old)
print(My name has", len(my_name), "letters")
```

**Bonus Challenge: Create Your Own!**
Write a program with exactly 3 bugs hidden inside.

### Submission Format

For each program, write:
1. **Bug Found:** What was wrong
2. **Fixed Code:** The corrected version
3. **Explanation:** Why it was wrong

---

## Common Student Challenges

| Challenge | Solution |
|-----------|----------|
| Panic when seeing errors | Normalize errors as "clues" |
| Not reading error messages | Practice reading them together |
| Multiple bugs overwhelming | Fix ONE at a time |
| Frustration | Celebrate each fixed bug! |

---

## Error Message Reference

| Error | Common Cause | Example |
|-------|--------------|---------|
| SyntaxError | Missing quotes, parentheses | `print("Hello)` |
| NameError | Typo in variable name | Using `nane` instead of `name` |
| TypeError | Mixing strings and numbers | `"Hi" + 5` |
| IndentationError | Wrong spacing | (Not covered yet) |

---

## Differentiation

### For Struggling Students
- Start with 1-bug examples only
- Provide error message "translations"
- Pair with patient partner

### For Advanced Students
- Add logic errors (wrong output but no error)
- Challenge with multiple bugs on one line
- Create bug puzzles for classmates

---

## Assessment Checklist

| Skill | Not Yet | Developing | Proficient |
|-------|---------|------------|------------|
| Identifies bug types | ⬜ | ⬜ | ⬜ |
| Reads error messages | ⬜ | ⬜ | ⬜ |
| Fixes syntax errors | ⬜ | ⬜ | ⬜ |
| Uses debugging strategies | ⬜ | ⬜ | ⬜ |

---

## Notes for Next Week

Week 7 is the Joke Machine project! 
- Students should be confident with all concepts
- Identify any students who need pre-project support
- Prepare project templates and rubrics

---

_KidsLearnAI Teacher Resources_

