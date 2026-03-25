# Term 1, Week 5: Clean Code & F-Strings! ✨

## Teacher's Guide

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces two new concepts: **comments** and **f-strings**. Comments teach students how to organize and annotate their code — a foundational habit for debugging (Week 6) and all future programming. F-strings are a modern, cleaner alternative to concatenation and `str()` for printing variables inside text, building on what students learned in Weeks 3-4. Together, these concepts transform students from "coders" into "clean coders."

### Learning Objectives

By the end of this lesson, students will be able to:

1. Write `#` comments to explain and organize code
2. Use f-strings to embed variables inside printed text
3. Use string methods and expressions inside f-string curly braces
4. Refactor messy code into clean, well-commented code using f-strings

### Prerequisites

Students should have completed Lessons 1-4 covering:

- Print statements and patterns (Weeks 1-2)
- Variables: strings and integers (Week 3)
- String methods, concatenation, `len()`, and `str()` (Week 4)

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Student handouts (printed or digital)
- Prepared "messy code" examples for the makeover activity

### Pre-Lesson Preparation

1. **Review Week 4 homework** — Note creative Mad Libs to celebrate
2. **Prepare the "before/after" messy code demo** — Have it ready to type live
3. **Test all f-string examples** — Make sure they work in Trinket
4. **Print Quick Reference Card** — Optional, for students who benefit from a physical copy
5. **Identify struggling students** — Plan to circulate to them first during exercises

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity | Details |
| ---- | -------- | -------- | ------- |
| 0:00 | 5 min | Welcome + Homework Showcase | Celebrate Week 4 Mad Libs, intro today's theme |
| 0:05 | 12 min | Part 1: Comments | What `#` does, types of comments, exercise |
| 0:17 | 15 min | Part 2: F-Strings | Old vs new, rules, methods inside `{}`, exercises |
| 0:32 | 8 min | Part 3: Clean Code Makeover | Refactor messy code with comments + f-strings |
| 0:40 | 10 min | Practice Challenge: My Clean Profile Card | Build a profile card using f-strings + comments |
| 0:50 | 5 min | Common Mistakes & Key Points | Quick reference, error patterns |
| 0:55 | 5 min | Wrap-up + Homework | Preview Week 6, assign homework |

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome + Homework Showcase (5 minutes)

#### Goals

- Celebrate student creativity from Week 4
- Build excitement for learning new concepts
- Frame today as an "upgrade" to their existing skills

#### Script/Talking Points

> "Welcome back! Before we start, let's see some of the amazing Mad Libs stories you created!"

**Select 2-3 Mad Libs to showcase:**

- Look for creative word choices and good use of string methods
- Praise effort and creativity
- Point out any impressive concatenation

> "Those stories were AMAZING! But did you notice how all those `+` signs and `str()` calls made the code a bit messy? Today I'm going to teach you TWO new tricks that will make your code SO much cleaner and easier to read. By the end of today, you'll wonder how you ever lived without these!"

---

### Part 2: Comments — Leaving Notes in Code (12 minutes)

#### Goals

- Teach the `#` comment syntax
- Explain WHY comments matter (not just how)
- Show three types of comments: section headers, explanations, TODOs
- Get students practicing with a hands-on exercise

#### Live Coding: What is a Comment?

> "Let me show you something cool. Watch what happens when I add a `#` to a line..."

```python
# This is a comment — Python ignores it!
print("Hello!")
```

**Run it.** Output: `Hello!`

> "See? Python completely skipped the first line. The `#` tells Python: 'This line is a note for humans, not for you.' It's like leaving a sticky note on your code!"

#### Why Comments Matter

> "You might think, 'Why bother writing notes if the computer ignores them?' Great question! Here are three reasons..."

**Show uncommented code:**

```python
x = "Alex"
y = 10
z = "=" * 30
print(z)
print(x)
print(y)
print(z)
```

> "Can you tell what this program does? It's hard to read, right? Now look at this..."

**Show commented code:**

```python
# --- My Profile ---
name = "Alex"
age = 10

# Create a decorative border
border = "=" * 30

# Display the profile
print(border)
print(name)
print(age)
print(border)
```

> "SAME program, but now anyone can understand it! Comments explain your THINKING."

#### Three Types of Comments

**Type 1: Section Headers**

```python
# --- My Variables ---
name = "Alex"
color = "blue"

# --- Print My Info ---
print("Name:", name)
```

> "These are like chapter titles in a book. They divide your code into sections."

**Type 2: Explanation Comments**

```python
border = "=" * 30  # Create a line of 30 equal signs
```

> "These explain tricky parts. You can put them at the end of a line too!"

**Type 3: TODO Comments**

```python
# TODO: Add more variables here
# TODO: Make the border fancier
```

> "These are reminders for yourself about things to add later. Real programmers use TODOs all the time!"

#### Student Exercise (3-4 minutes)

> "Here's some code with NO comments. Your job: add at least 3 comments — a section header, an explanation comment, and a TODO."

**Display on screen:**

```python
name = "Alex"
hobby = "drawing"
years = 3

print("=" * 25)
print("ALL ABOUT ME")
print("=" * 25)
print("Name:", name.title())
print("Hobby:", hobby)
print("Years practicing:", years)
print("=" * 25)
```

**Give 3-4 minutes. Circulate and check.**

#### Common Issues in This Section

| Problem | Solution |
| ------- | -------- |
| Student puts comment AFTER text without `#` | "The `#` goes BEFORE the text you want Python to ignore" |
| Student comments out actual code by accident | "If Python isn't running your line, check if you accidentally put a `#` in front of it!" |
| Student unsure what to write in comments | "Describe what the code does in plain English — like you're explaining it to a friend" |

---

### Part 3: F-Strings — The Easy Way to Print (15 minutes)

#### Goals

- Show the "old way" vs "new way" comparison
- Teach the two rules: `f` prefix and `{variable}` syntax
- Demonstrate that f-strings handle numbers automatically
- Show methods inside f-strings
- Multiple exercises to build confidence

#### The Big Reveal: Old vs New

> "Now for the REALLY exciting part. Remember how we used `+` and `str()` to print variables?"

**Type the "old way":**

```python
name = "Alex"
age = 10
print("Hi " + name + "! You are " + str(age) + " years old.")
```

> "That works, but look at all those `+` signs and the `str()`. Now watch THIS..."

**Type the "new way":**

```python
name = "Alex"
age = 10
print(f"Hi {name}! You are {age} years old.")
```

**Run both.** Same output!

> "SAME result, but the f-string is SO much cleaner! Let me teach you the rules."

#### The Two Rules

> "F-strings only have TWO rules:"

**Rule 1:** Start with `f` before the quote

```python
print(f"This is an f-string")
print("This is a NORMAL string")  # No f = no variables
```

**Rule 2:** Put variables inside `{curly braces}`

```python
name = "Alex"
print(f"Hello {name}!")  # Hello Alex!
```

> "That's it! `f` before the quote, variables in curly braces. Easy!"

#### No More str()!

> "Remember the annoying `str()` you needed for numbers? F-strings DON'T need it!"

```python
age = 10

# Old way — needs str()
print("I am " + str(age) + " years old")

# F-string way — just works!
print(f"I am {age} years old")
```

> "F-strings are smart enough to handle numbers automatically. No more TypeError!"

**This is a big selling point — emphasize it!**

#### Quick Student Practice (2-3 minutes)

> "Everyone try this: Create a variable for your name and your age. Then print a sentence about yourself using an f-string. Go!"

**Walk around checking. Look for:**
- The `f` before the quote
- Curly braces `{}` not parentheses `()`
- Variables inside the braces

#### Methods Inside F-Strings

> "Here's where f-strings get REALLY cool. You can use methods right inside the curly braces!"

```python
name = "alex smith"

print(f"Normal: {name}")
print(f"Shouting: {name.upper()}")
print(f"Fancy: {name.title()}")
print(f"Your name has {len(name)} characters!")
```

**Run it.** Show output.

> "You can use `.upper()`, `.lower()`, `.title()`, and even `len()` right inside the `{}`! No extra variables needed!"

#### Exercise: Convert to F-Strings (3-4 minutes)

> "Rewrite these old-style prints using f-strings:"

**Display on screen:**

```python
city = "Toronto"
temperature = 25

# Rewrite these using f-strings!
print("I live in " + city)
print("It is " + str(temperature) + " degrees today")
print("I love " + city.upper() + "!")
```

**Expected answers:**

```python
print(f"I live in {city}")
print(f"It is {temperature} degrees today")
print(f"I love {city.upper()}!")
```

**Give 3-4 minutes. Circulate and help.**

#### Common Issues in This Section

| Problem | Solution |
| ------- | -------- |
| Forgetting the `f` | "Check the start of your string — does it have `f` before the quote?" |
| Using `()` instead of `{}` | "Curly braces! The squiggly ones — `{` and `}` — not round ones" |
| Putting quotes around variable inside `{}` | "No quotes inside the braces! Just the variable name: `{name}` not `{'name'}`" |
| F-string not working in Trinket | Check Python version — f-strings require Python 3.6+. Trinket's Python 3 should work |

---

### Part 4: Clean Code Makeover (8 minutes)

#### Goals

- Combine comments + f-strings in one activity
- Practice refactoring (rewriting code to be better)
- Show a clear before/after transformation

#### Script

> "Now let's put BOTH skills together! I'm going to show you some messy code, and together we'll make it clean."

**Display the messy code:**

```python
name = "Alex"
food = "pizza"
count = 3
color = "blue"
print("Hello " + name + "! Welcome!")
print(name + " loves " + food + "!")
print("They can eat " + str(count) + " slices!")
print(name + "'s favorite color is " + color.upper())
print(name + " has " + str(len(name)) + " letters in their name")
```

> "This code works, but it's messy! No organization, hard to read. Let's clean it up."

#### Live Coding: The Makeover

**Step 1: Add a section comment for variables**

```python
# --- My Variables ---
name = "Alex"
food = "pizza"
count = 3
color = "blue"
```

**Step 2: Add blank line and section comment for output**

```python
# --- Welcome Message ---
```

**Step 3: Convert each print to an f-string**

> "Now let's convert each print statement. Watch how much shorter they get..."

Convert one at a time, showing the before/after:

```python
# Before:
print("Hello " + name + "! Welcome!")
# After:
print(f"Hello {name}! Welcome!")
```

> "See how clean that is? No more `+` signs everywhere!"

Continue with all five print statements. The final clean version:

```python
# --- My Variables ---
name = "Alex"
food = "pizza"
count = 3
color = "blue"

# --- Welcome Message ---
print(f"Hello {name}! Welcome!")

# --- Fun Facts ---
print(f"{name} loves {food}!")
print(f"They can eat {count} slices!")
print(f"{name}'s favorite color is {color.upper()}")
print(f"{name} has {len(name)} letters in their name")
```

> "Look at the difference! Which version would YOU rather read?"

#### Student Practice (3-4 minutes)

> "Now YOUR turn! Here's some messy code. Clean it up with comments and f-strings:"

**Display on screen:**

```python
pet = "Buddy"
pet_type = "dog"
pet_age = 5
print(pet + " is a " + pet_type)
print(pet + " is " + str(pet_age) + " years old")
print(pet + " in caps: " + pet.upper())
```

**Give 3-4 minutes. Walk around helping.**

---

### Part 5: Practice Challenge — My Clean Profile Card (10 minutes)

#### Goals

- Apply comments + f-strings independently
- Complete a creative, personalized project
- Build confidence through guided but open-ended work

#### Script

> "Time for the big challenge! You're going to build a Clean Profile Card using everything you've learned today. The starter code is about 40% done — your job is to finish it using f-strings and comments!"

**Display the starter code from the lesson.**

#### Teacher Actions

- Give students 1-2 minutes to read the starter code before starting
- Circulate immediately — make sure every student changes the variables first
- If stuck: "Start by changing the variables to YOUR information, then tackle the TODOs one at a time"
- At 7 minutes: "3 minutes left! Make sure your code runs without errors!"
- At 9 minutes: "1 minute! Finish up your last TODO!"

#### Differentiation During Practice Challenge

**For struggling students:**
- Help them change the variables to their own info
- Complete just the first 2 TODOs together
- Focus on getting the code to run without errors

**For advanced students:**
- Add a second section (e.g., "Favorites" or "My Goals")
- Use multiple string methods inside f-strings
- Create fancier borders or add emoji
- Try expressions like `{lucky_number * 2}` inside f-strings

---

### Part 6: Common Mistakes & Key Points (5 minutes)

#### Goals

- Address the top errors before students go home
- Provide a quick reference they can use for homework

#### Script

> "Before we wrap up, let me show you the TOP mistakes people make with f-strings and comments — so you can avoid them!"

**Mistake 1: Forgetting the `f`**

```python
name = "Alex"
print("Hello {name}!")   # Output: Hello {name}!  (oops!)
print(f"Hello {name}!")  # Output: Hello Alex!     (correct!)
```

> "Without the `f`, Python treats `{name}` as literal text. Always double-check for the `f`!"

**Mistake 2: Wrong brackets**

```python
print(f"Hello (name)!")  # Output: Hello (name)!  (oops!)
print(f"Hello {name}!")  # Output: Hello Alex!     (correct!)
```

> "Curly braces `{}`, not parentheses `()`! The squiggly ones!"

**Mistake 3: Forgetting `#` for comments**

```python
This is my program     # ❌ Python crashes!
# This is my program   # ✅ Python ignores it!
```

> "Always start comments with `#`!"

#### Quick Reference Card

Display on screen:

```python
# --- Comments ---
# This is a comment            (Python ignores it)
code_here  # end-of-line comment

# --- F-Strings ---
f"Hello {name}"                (variable in text)
f"Age: {age}"                  (numbers work too!)
f"LOUD: {name.upper()}"       (methods inside {})
f"Length: {len(name)}"         (functions inside {})
```

---

### Part 7: Wrap-up + Homework (5 minutes)

#### Review Key Points

> "What an amazing lesson! Let's review your two new superpowers..."

**Quick recap:**

1. **Comments** (`#`) — Notes for humans, ignored by Python
2. **F-strings** (`f"..."`) — The easy way to put variables in text

> "Who can tell me the two rules of f-strings?" → `f` before the quote, variables in `{}`

#### Introduce Homework

> "For homework, pick ONE of two challenges!"

**Briefly explain each:**

1. **My F-String Story** — Write a story using ONLY f-strings (no concatenation!), with comments for organization
2. **The Clean Menu** — Create a restaurant menu formatted with f-strings and organized with comments

> "Both options require f-strings AND comments. All details are in your lesson notes!"

#### Preview Week 6

> "Next week is SUPER important. We become BUG DETECTIVES! 🔍 You'll learn how to find and fix mistakes in code. And here's a secret: the clean code skills you learned TODAY will help you find bugs much faster next week!"

---

## 🤖 AI Activity: Clean Code in the Real World (3-5 minutes)

### What to Do

If time allows, weave this into the lesson during Part 1 or the wrap-up.

1. **Introduction** (1 min)
   > "Did you know that real AI systems like ChatGPT are built from MILLIONS of lines of code? Without comments, nobody could understand it!"

2. **Discussion** (2-3 min)
   - "Why do you think comments are important when thousands of people work on the same code?"
   - "How do you think AI reads text from users?" (Connection: f-strings format text, AI processes text)
   - "What would happen if AI code had NO comments?"

3. **Connection** (1 min)
   > "The comments and f-strings you learned today are the EXACT same tools used by engineers at Google, OpenAI, and other tech companies. You're writing code the way professionals do!"

### Teaching Tips

- Keep this brief — it's a connection point, not a separate activity
- Emphasize that clean code is a REAL professional skill
- If students are curious about AI, encourage questions but keep it focused

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student write a `#` comment on its own line?
- [ ] Can student write a section header comment (e.g., `# --- Variables ---`)?
- [ ] Can student write a basic f-string with a variable?
- [ ] Can student use an f-string with a number (no `str()` needed)?
- [ ] Can student use a string method inside an f-string `{}`?
- [ ] Can student use `len()` inside an f-string?
- [ ] Can student refactor concatenation code into f-strings?

### Quick Check Questions

Ask throughout the lesson:

1. "What does the `#` symbol do in Python?" → Creates a comment (Python ignores that line)
2. "What letter goes before the quote in an f-string?" → `f`
3. "What kind of brackets do we use in f-strings?" → Curly braces `{}`
4. "Do f-strings need `str()` for numbers?" → No!
5. "Can you use `.upper()` inside an f-string?" → Yes! Inside the curly braces

### Informal Assessment Checklist

| Skill | Part | Observed? | Notes |
| ----- | ---- | --------- | ----- |
| Writes comments correctly | Part 1 | ☐ | |
| Uses section header comments | Part 1 | ☐ | |
| Writes basic f-strings | Part 2 | ☐ | |
| F-strings with numbers (no str()) | Part 2 | ☐ | |
| Methods inside f-strings | Part 2 | ☐ | |
| Converts concatenation to f-strings | Part 3 | ☐ | |
| Combines comments + f-strings | Practice | ☐ | |
| Completes profile card | Practice | ☐ | |
| Works independently | All Parts | ☐ | |
| Shows creativity | Practice | ☐ | |

### Homework Assessment: "Choose Your Challenge"

| Criteria | Full Credit | Partial Credit | Needs Work |
| -------- | ----------- | -------------- | ---------- |
| F-string usage | All prints use f-strings | Most use f-strings | Still using concatenation |
| Comments | Section headers + explanations | Some comments | No comments |
| String methods in f-strings | At least 1 method in `{}` | Attempts but with errors | Not attempted |
| Creativity | Original and engaging | Meets requirements | Minimal effort |
| Code quality | Runs perfectly | Minor errors | Major errors |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide a completed example to study before attempting their own
- Focus on just f-strings first — add comments as a bonus
- Pair with a confident peer during the makeover activity
- Reduce homework to 3 variables and 3 f-string prints with 1 comment
- Give them the "after" code from the makeover and have them modify it

#### For Advanced Students

- Challenge: Use math expressions inside f-strings (`f"{price * quantity}"`)
- Show multi-line f-strings
- Have them create a "tutorial" that teaches f-strings to a classmate
- Preview: "Next term, you'll learn f-strings with user input!"

---

## ⚠️ Common Pitfalls & Solutions

### The Top Errors

#### 1. Forgetting the `f` Prefix

**Student writes:** `print("Hello {name}!")` → Output: `Hello {name}!`

**How to help:**
> "Look at the start of your string — does it have the letter `f` right before the first quote? Without it, Python doesn't know to look for variables inside the curly braces."

#### 2. Using Wrong Brackets

**Student writes:** `print(f"Hello (name)!")` → Output: `Hello (name)!`

**How to help:**
> "F-strings use CURLY braces — the squiggly ones `{` and `}`. Round parentheses are for something else!"

#### 3. Commenting Out Real Code

**Student writes:** `# print(f"Hello {name}!")` — then wonders why nothing prints

**How to help:**
> "The `#` tells Python to skip that line. Remove the `#` if you want Python to run it!"

### Engagement Issues

| Problem | Solution |
| ------- | -------- |
| "Why do we need comments?" | "Imagine coming back to your code in a month — comments help you remember what you were thinking!" |
| "F-strings are confusing" | "Just remember: `f` before the quote, variable in `{}`. That's the whole trick!" |
| Student still uses concatenation | "That works too! But try the f-string version — I bet it's shorter. Which do you prefer?" |
| Student finishes early | "Can you add another section to your profile card? Or try using an expression like `{lucky_number * 2}`?" |

### Time Management

| Problem | Solution |
| ------- | -------- |
| Comments section running long | Cut the student exercise short — just discuss examples |
| F-strings section running long | Skip the "fill in the blanks" exercise, keep the conversion exercise |
| Not enough time for makeover | Do the makeover as a teacher demo instead of student activity |
| Profile card too short | Have students share their favorite f-string with the class |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **Did students understand comments?**
   - Could they write section headers?
   - Did they understand WHY comments matter?

2. **Did students understand f-strings?**
   - Could they write basic f-strings?
   - Could they use methods inside `{}`?
   - Are any students still defaulting to concatenation?

3. **How was the transition from concatenation to f-strings?**
   - Did the "old vs new" comparison click?
   - Did students see f-strings as an upgrade or as confusing?

4. **Individual student notes:**
   - Who needs extra support before Week 6?
   - Who is ready for advanced challenges?

### Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Comments section:
- Did students understand the # syntax? Y/N
- Could they write section headers? Y/N

F-strings section:
- Did the old vs new comparison click? Y/N
- Could students write basic f-strings? Y/N
- Could students use methods in {}? Y/N
- Common errors observed:

Clean Code Makeover:
- Did students successfully refactor code? Y/N
- Time adequate? Y/N

Students needing support:
-

Students ready for extension:
-

Changes for next time:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Python f-string documentation:** f-strings were introduced in Python 3.6
- **Quick tip:** f-strings work in Trinket's Python 3 environment
- **Common confusion:** Students may try `f'...'` (single quotes) — this also works!

### For Students (Share with Parents)

- **Practice:** Rewrite old programs using f-strings instead of concatenation
- **Challenge:** Add comments to ALL your previous homework submissions
- **Explore:** Try putting math expressions inside f-strings: `f"{2 + 3}"`

### Parent Communication Template

```
Subject: What Your Child Learned in KidsLearnAI - Lesson 5 (Clean Code & F-Strings!)

Dear Parent/Guardian,

Today your child learned two important new programming concepts!

What we covered:
- Comments (#) — How to leave notes and organize code
- F-strings — A modern, cleaner way to print variables inside text

These are real professional programming skills! Comments help programmers
work in teams, and f-strings are the standard way Python developers
format text output.

Example of what they learned:
  Old way:  print("Hi " + name + "! You are " + str(age) + " years old.")
  New way:  print(f"Hi {name}! You are {age} years old.")

Homework (choose ONE):
- My F-String Story: Write a story using f-strings and comments
- The Clean Menu: Create a formatted restaurant menu

How your child is doing:
[Personalize based on observations]

Coming up:
Next week we become "Bug Detectives" — learning to find and fix errors
in code! The clean code skills from today will help them debug faster.

Keep encouraging their creativity!

[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review Week 4 homework (Mad Libs)
- [ ] Prepare messy code examples for the makeover
- [ ] Test all f-string examples in Trinket
- [ ] Set up screen sharing / projector
- [ ] Optional: Print Quick Reference Card
- [ ] Identify students who may need extra support

### During Class

- [ ] Welcome and showcase Week 4 homework
- [ ] Part 1: Comments — `#` syntax, types, exercise
- [ ] Part 2: F-strings — old vs new, rules, methods, exercises
- [ ] Part 3: Clean Code Makeover (live coding)
- [ ] Practice Challenge: My Clean Profile Card
- [ ] Common Mistakes review
- [ ] Explain homework options
- [ ] Preview Week 6 (Bug Detectives)

### After Class

- [ ] Complete reflection with assessment notes
- [ ] Identify students needing support before Week 6
- [ ] Send parent communication
- [ ] Review homework as submitted
- [ ] Plan Week 6 with any review topics in mind

---

_KidsLearnAI Teacher Resources_
*www.kidslearnai.ca*
_For instructor support, contact: [instructor support email]_

---

_Remember: This lesson introduces two concepts in one session. If students only grasp f-strings today, that's a win — comments can be reinforced in future lessons. The key insight is: f-strings are an UPGRADE, not a replacement. Students who still use concatenation are not wrong — they're just not using the easier way yet!_ ✨
