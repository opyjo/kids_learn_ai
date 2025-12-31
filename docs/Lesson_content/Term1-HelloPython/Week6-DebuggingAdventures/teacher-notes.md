# Term 1, Week 6: Debugging Adventures! 🐛

## Teacher's Guide

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 1 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson teaches one of the most critical programming skills: debugging. Students learn to read error messages, identify common bug types, and apply systematic strategies to fix problems. This lesson also builds resilience and a growth mindset around mistakes—essential for long-term success in programming.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what bugs are and why they're normal
2. Read and interpret Python error messages
3. Identify at least 5 common bug types
4. Apply the "Debug Dance" (STOP, READ, FIND, THINK, FIX, TEST)
5. Use debugging techniques like comments and print statements
6. Fix bugs in provided code samples

### Prerequisites

Students should have completed Lessons 1-5 covering:

- Print statements and patterns
- Variables (strings and integers)
- String methods and concatenation

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Student handouts with debug challenges
- Optional: Physical "bug" (toy insect) for storytelling
- Optional: Debug Dance poster
- Prepared buggy code samples for demonstration

### Pre-Lesson Preparation

1. **Review Week 5 submissions** - Note any recurring errors to address
2. **Prepare buggy code samples** - Have multiple examples ready
3. **Test error messages** - Know exactly what each bug produces
4. **Create Debug Dance visual** - Poster or slide with the 6 steps
5. **Grace Hopper story prep** - Have the moth story ready
6. **Prepare partner activities** - Plan student pairings

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity               | Details                             |
| ---- | -------- | ---------------------- | ----------------------------------- |
| 0:00 | 5 min    | Welcome & Bug Story    | Grace Hopper moth story             |
| 0:05 | 8 min    | What Are Bugs?         | Types of bugs, why they happen      |
| 0:13 | 10 min   | Reading Error Messages | Anatomy of an error message         |
| 0:23 | 12 min   | Common Bug Types       | Demo 5-6 common bugs                |
| 0:35 | 5 min    | The Debug Dance        | Teach the 6-step strategy           |
| 0:40 | 12 min   | Debug Challenges       | Pair activities, practice           |
| 0:52 | 5 min    | Pro Tips & Mindset     | Advanced strategies, growth mindset |
| 0:57 | 3 min    | Wrap-up & Homework     | Assignment, preview Week 7          |

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome & Bug Story (5 minutes)

#### Goals

- Capture attention with interesting history
- Introduce the term "bug" in a memorable way
- Set a positive, curious tone

#### The Grace Hopper Story

> "Before we start, I have an amazing TRUE story for you! Have you ever wondered why we call code mistakes 'bugs'?"

**Tell the story with enthusiasm:**

> "In 1947, there was a brilliant scientist named Grace Hopper. She was working on one of the very first computers ever made—a HUGE machine called the Mark II that filled an entire room!
>
> One day, the computer stopped working. Grace and her team searched and searched... and guess what they found? An actual MOTH stuck inside the machine! A real bug!
>
> Grace taped the moth into her notebook and wrote 'First actual case of bug being found.' Ever since then, programmers have called code mistakes 'bugs' and fixing them 'debugging'!"

**Optional: Show the famous photo of Grace Hopper's notebook with the moth**

> "Grace Hopper was one of the first computer programmers EVER. She helped create programming languages and was also a Navy Admiral! She's a true coding hero—and she reminds us that everyone encounters bugs!"

#### Transition

> "Today, YOU are going to become Bug Detectives! You'll learn how to find bugs and squash them like a pro. Let's go! 🔍"

---

### Part 2: What Are Bugs? (8 minutes)

#### Goals

- Define bugs clearly
- Explain why bugs happen
- Normalize bugs as part of programming

#### Definition

> "A **bug** is any mistake in your code that makes it not work the way you want. Bugs can:
>
> - Stop your code from running at all (errors)
> - Make your code do the wrong thing
> - Show weird or unexpected results"

#### Why Do Bugs Happen?

> "Bugs happen because..."

**List on board:**

1. **We're human** - Everyone makes mistakes!
2. **Computers are literal** - They do EXACTLY what we say, not what we mean
3. **Code has strict rules** - One missing character can break everything
4. **We're learning** - New skills mean new mistakes

#### Interactive Poll

> "Raise your hand if you've EVER had code that didn't work on the first try."

**[Everyone should raise their hand, including you!]**

> "Me too! In fact, I still get bugs in my code ALL the time. The difference between a frustrated programmer and a happy one isn't that one makes fewer mistakes—it's that one knows how to FIX them!"

---

### Part 3: Reading Error Messages (10 minutes)

#### Goals

- Teach students to see error messages as helpful
- Explain the anatomy of an error message
- Practice "translating" error messages

#### Reframe Error Messages

> "When Python finds a problem, it shows you an ERROR MESSAGE. Some people see these and think 'Oh no, I broke it!' But actually, error messages are Python trying to HELP you! They're like clues in a mystery."

#### Anatomy of an Error Message

**Type this buggy code:**

```python
print("Hello World)
```

**Show the error:**

```
  File "main.py", line 1
    print("Hello World)
                      ^
SyntaxError: EOL while scanning string literal
```

**Break it down:**

> "Let's read this like detectives!"

| Part                                | What It Tells Us                                          |
| ----------------------------------- | --------------------------------------------------------- |
| `File "main.py", line 1`            | "The problem is on line 1"                                |
| `print("Hello World)`               | "Here's the code near the problem"                        |
| `^`                                 | "This arrow points to where I got confused"               |
| `SyntaxError`                       | "This is a grammar/spelling type of error"                |
| `EOL while scanning string literal` | "I reached End Of Line while looking for a closing quote" |

> "Translation: 'You started a string with a quote but never closed it!'"

#### Common Error Types (Quick Overview)

| Error Type           | Plain English                                 |
| -------------------- | --------------------------------------------- |
| **SyntaxError**      | "Your code has a grammar mistake"             |
| **NameError**        | "I don't recognize this name"                 |
| **TypeError**        | "You're mixing things that don't go together" |
| **IndentationError** | "Your spacing is wrong"                       |

#### Practice: Error Translation Game

Show 2-3 error messages. Students "translate" to plain English.

**Error 1:**

```
NameError: name 'nane' is not defined
```

> "What's Python trying to tell us?" → "It doesn't know what 'nane' is—probably a typo!"

**Error 2:**

```
TypeError: can only concatenate str (not "int") to str
```

> "What does this mean?" → "You can't use + to add a string and a number together!"

---

### Part 4: Common Bug Types (12 minutes)

#### Goals

- Demonstrate specific common bugs
- Show the error message for each
- Demonstrate the fix

#### Live Debugging Demonstration

**Bug 1: Missing Quote**

> "Watch what happens when I forget a closing quote..."

```python
print("Hello World)
```

**Run it. Show the error. Fix it.**

```python
print("Hello World")
```

> "Always check that quotes come in pairs—like socks! 🧦"

---

**Bug 2: Typo in Variable Name**

> "This is SUPER common. Watch..."

```python
name = "Alex"
print(nane)
```

**Error:** `NameError: name 'nane' is not defined`

> "Python is VERY picky about spelling. 'name' and 'nane' are completely different to Python!"

**Fix it:**

```python
name = "Alex"
print(name)
```

---

**Bug 3: Wrong Capitalization**

> "Remember: Python commands are lowercase!"

```python
Print("Hello")
```

**Error:** `NameError: name 'Print' is not defined`

> "Python knows `print` but not `Print`. Capitalization matters!"

**Fix it:**

```python
print("Hello")
```

---

**Bug 4: Mixing Types with +**

> "This trips up a LOT of people..."

```python
age = 10
print("I am " + age + " years old")
```

**Error:** `TypeError: can only concatenate str (not "int") to str`

> "The `+` can only join strings together. `age` is a number!"

**Fix it (two options):**

```python
# Option 1: Use commas
print("I am", age, "years old")

# Option 2: Convert to string
print("I am " + str(age) + " years old")
```

---

**Bug 5: Missing Parentheses**

```python
print "Hello"
```

**Error:** `SyntaxError: Missing parentheses in call to 'print'`

> "Helpful error message! It tells us exactly what's wrong!"

**Fix it:**

```python
print("Hello")
```

---

**Bug 6: Forgetting () on Methods**

```python
name = "alex"
print(name.upper)
```

**Output:** `<built-in method upper of str object at...>` (weird output, no error!)

> "This is a sneaky bug—no error, but wrong output!"

**Fix it:**

```python
name = "alex"
print(name.upper())
```

---

### Part 5: The Debug Dance (5 minutes)

#### Goals

- Teach a memorable debugging strategy
- Make it physical/fun
- Give students a process to follow

#### Introduce the Debug Dance

> "When you find a bug, don't panic! Follow these 6 steps. We call it the DEBUG DANCE!"

**Display on screen/board:**

1. **STOP** 🛑 - Don't panic! Take a breath.
2. **READ** 📖 - Read the error message carefully.
3. **FIND** 🔍 - Go to the line number mentioned.
4. **THINK** 🤔 - What could be wrong?
5. **FIX** 🔧 - Make ONE change.
6. **TEST** ▶️ - Run the code again!

#### Make It Physical

> "Let's do the Debug Dance together! Stand up!"

**Lead the class through motions:**

- STOP: Hold up hand like "stop"
- READ: Pretend to read a book
- FIND: Hand above eyes, searching
- THINK: Finger on temple, thinking
- FIX: Pretend to turn a wrench
- TEST: Press an imaginary "play" button

> "Let's say it together: STOP, READ, FIND, THINK, FIX, TEST!"

**Repeat 2-3 times until it's memorized.**

#### The Debug Dance Song (Optional)

🎵 _"Stop, Read, Find, Think, Fix, Test!_  
_Stop, Read, Find, Think, Fix, Test!_  
_When you see a bug, don't stress—_  
_Do the Debug Dance, you're the best!"_ 🎵

---

### Part 6: Debug Challenges - Pair Activities (12 minutes)

#### Goals

- Apply debugging skills
- Practice in a supportive pair setting
- Build confidence through success

#### Activity Setup

> "Now it's YOUR turn to be Bug Detectives! You'll work with a partner."

**Pair students strategically:**

- Mix skill levels (stronger with developing)
- Consider personality compatibility
- Ensure everyone has a partner

#### Activity 1: Bug Hunt (8 minutes)

**Instructions:**

> "Here's how it works:
>
> 1. Person A writes a SHORT program (2-3 lines) with ONE bug hidden in it
> 2. Person B has 2 minutes to find and fix the bug
> 3. If Person B finds it, they get a point!
> 4. Switch roles and repeat
> 5. Try to stump your partner!"

**Give examples of bugs to hide:**

- Missing quote
- Typo in variable name
- Wrong capitalization on print
- Missing parentheses

**Tips:**

- Start with obvious bugs, then make them sneakier
- If Partner B is stuck, Partner A gives a hint
- Celebrate each bug found!

**Circulate during activity:**

- Help stuck pairs
- Encourage creative bugs
- Note common struggles

#### Activity 2: Debug Detective Race (4 minutes)

**Display buggy code on screen:**

```python
name = "Alex
print("Hello, " + Name)
age = 10
print("I am + age + years old")
```

> "READY? Find ALL the bugs! First pair to identify them all wins!"

**Bugs:**

1. Missing closing quote on "Alex"
2. `Name` should be `name` (capitalization)
3. Missing quotes around text in last print
4. Can't use `+` with integer `age`
5. Missing spaces in concatenation

**Walk through the answers together.**

---

### Part 7: Pro Tips & Mindset (5 minutes)

#### Goals

- Share advanced debugging strategies
- Build growth mindset around mistakes
- Prepare students for independent debugging

#### Pro Tips

> "Here are some pro debugging tips that even professional programmers use:"

1. **Check the line BEFORE the error** - Sometimes Python doesn't notice a bug until the next line!

2. **Use print() to investigate** - Add `print("DEBUG:", variable)` to see what's happening

3. **Comment out code** - Use `#` to disable sections and isolate the bug

4. **Fix ONE thing at a time** - If you change multiple things, you won't know what worked

5. **Take a break** - Fresh eyes spot bugs faster!

6. **Rubber Duck Debugging** - Explain your code out loud to find bugs 🦆

#### Mindset Message (Important!)

> "Here's the most important thing to remember: **BUGS ARE NORMAL!**
>
> Every programmer in the world—the ones at Google, Apple, the ones who make your favorite games—they ALL get bugs. Every single day.
>
> The difference between a frustrated programmer and a happy one isn't that one makes fewer mistakes. It's that one sees bugs as PUZZLES to solve instead of failures."

**Mindset comparison:**

| ❌ Unhelpful Thinking | ✅ Helpful Thinking          |
| --------------------- | ---------------------------- |
| "I broke it"          | "I found a puzzle to solve"  |
| "I'm bad at this"     | "I'm learning something new" |
| "Why won't it work?!" | "What is Python telling me?" |

> "When you fix a bug, you should CELEBRATE! You just solved something that most people couldn't!"

---

### Part 8: Wrap-up & Homework (3 minutes)

#### Quick Review

> "What did we learn today? Shout out the Debug Dance steps!"

**Together:** STOP, READ, FIND, THINK, FIX, TEST!

#### Homework Introduction

> "For homework, you're the Debug Detective! I have a program with 6 bugs hidden in it. Your job is to find and fix ALL of them, and add comments explaining what each bug was."

**Show the buggy code briefly:**

```python
naem = "Alex"
Print("Hello, " + name)
age = 10
print("I am " + age + " years old)
favoritecolor = "blue
print("My favorite color is" favoriteColor)
print("Goodbye!)
```

> "Use your detective skills! All the details are in your notes."

#### Preview Week 7

> "Next week is going to be SO fun! We start building our first BIG project—a Joke Machine that tells jokes! You'll use everything you've learned to make Python funny! 🎭"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student read error messages?
- [ ] Can student identify line numbers in errors?
- [ ] Does student understand common bug types?
- [ ] Can student apply the Debug Dance strategy?
- [ ] Is student building resilience around mistakes?

### Quick Check Questions

Ask throughout the lesson:

1. "What do we call a mistake in code?" → Bug
2. "What do we call fixing mistakes?" → Debugging
3. "What type of error is a grammar mistake?" → SyntaxError
4. "What should you do FIRST when you see an error?" → STOP (don't panic!)
5. "Why should you only fix ONE thing at a time?" → So you know what fixed it

### Homework Assessment: "Debug Detective Challenge"

| Criteria   | Full Credit        | Partial Credit      | Needs Work   |
| ---------- | ------------------ | ------------------- | ------------ |
| Bugs found | All 6 bugs fixed   | 4-5 bugs fixed      | Fewer than 4 |
| Code runs  | No errors          | Minor errors remain | Major errors |
| Comments   | Each bug explained | Some comments       | No comments  |
| Output     | Displays correctly | Partially correct   | Incorrect    |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide buggy code with FEWER bugs (2-3 instead of 6)
- Give hints about what TYPE of bug to look for
- Pair with stronger debugger during activities
- Create a "bug checklist" to work through systematically
- Allow use of error message "cheat sheet"

#### For Advanced Students

- Challenge: Find bugs WITHOUT running the code first
- Introduce: Logic bugs (code runs but does wrong thing)
- Have them create "bug puzzles" for classmates
- Introduce the concept of test cases
- Preview: try-except error handling (very briefly)

---

## ⚠️ Common Pitfalls & Solutions

### Teaching Challenges

| Challenge                               | Solution                                 |
| --------------------------------------- | ---------------------------------------- |
| Students panic at error messages        | Reframe: "It's Python trying to help!"   |
| Students can't find obvious bugs        | Teach line-by-line reading strategy      |
| Partner activity becomes competitive    | Emphasize collaboration over competition |
| Students frustrated with their own bugs | Celebrate bug-finding as an achievement  |
| Rushing through fixes                   | Enforce "one change at a time" rule      |

### Technical Issues

| Issue                          | Solution                                |
| ------------------------------ | --------------------------------------- |
| Error messages too long        | Focus on last line (the summary)        |
| Multiple errors at once        | Fix first error, run again, repeat      |
| Bug on wrong line              | Teach "check line before" strategy      |
| Syntax highlighting hides bugs | Use plain text or turn off highlighting |

### Mindset Issues

| Issue                  | Response                                           |
| ---------------------- | -------------------------------------------------- |
| "I can't do this"      | "You haven't done it YET. Let's try together"      |
| "My code is broken"    | "Your code is learning! Let's fix it"              |
| Giving up quickly      | "What does the error message say? Let's decode it" |
| Embarrassed about bugs | "Even I make bugs! Watch me fix one of mine"       |

---

## 📊 Post-Lesson Reflection

### Key Questions

1. **Error message comprehension:**

   - Can students identify line numbers?
   - Can they distinguish error types?
   - Do they see errors as helpful?

2. **Bug identification:**

   - Which bug types were easy to spot?
   - Which bug types need more practice?
   - Any unexpected bugs students created?

3. **Mindset:**
   - Did students embrace bugs as normal?
   - Any students still frustrated?
   - Success stories to share next week?

### Reflection Template

```
Date: ____________
Students Present: ____________

Debug Dance retention (1-5): ____

Error message understanding (1-5): ____

Bug types students grasped:
- [ ] Missing quotes
- [ ] Typos in variables
- [ ] Wrong capitalization
- [ ] Type mixing
- [ ] Missing parentheses
- [ ] Missing method ()

Students needing support:
-

Mindset observations:
-

Highlights from pair activities:
-

Changes for next time:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Grace Hopper info:** Search "Grace Hopper moth" for the famous photo
- **Error message guide:** docs.python.org/3/tutorial/errors.html
- **Growth mindset:** Carol Dweck's research on mistakes and learning
- **Rubber Duck Debugging:** Search "rubber duck debugging" for the technique

### For Students (Share with Parents)

- **Bug Journal:** Keep a log of bugs found and fixed
- **Bug Creator:** Try writing buggy code on purpose, then fixing it
- **Teach Someone:** Explain debugging to a family member

### Parent Communication Template

```
Subject: What Your Child Learned in KidsLearnAI - Lesson 6

Dear Parent/Guardian,

Today your child became a "Bug Detective"! They learned one of the most important skills in programming: debugging.

What we covered:
- What bugs are and where the name comes from (Grace Hopper's moth!)
- How to read Python error messages
- Common bug types (missing quotes, typos, capitalization, type mixing)
- The "Debug Dance" strategy: STOP, READ, FIND, THINK, FIX, TEST
- Debugging techniques like comments and print statements

Homework due by [date]:
"Debug Detective Challenge" - fix 6 bugs in a provided code sample
Details are in the student notes.

Important mindset message:
Bugs are NORMAL! Every programmer makes them. The skill is learning to find and fix them. Please encourage your child when they encounter bugs—it's a learning opportunity, not a failure!

Coming up:
Next week we start building the "Joke Machine" - our first big project!

[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Prepare Grace Hopper story (optional: find moth photo)
- [ ] Create buggy code samples for demonstration
- [ ] Test all error messages you'll show
- [ ] Prepare Debug Dance visual (poster/slide)
- [ ] Plan student pairs for activities
- [ ] Have Debug Challenge code ready

### During Class

- [ ] Tell Grace Hopper story engagingly
- [ ] Reframe error messages as helpful clues
- [ ] Demonstrate anatomy of error message
- [ ] Show at least 5 common bug types
- [ ] Teach Debug Dance with physical motions
- [ ] Run pair debugging activities
- [ ] Share pro tips and mindset message
- [ ] Assign homework and preview Week 7

### After Class

- [ ] Complete reflection notes
- [ ] Note students who struggled with mindset
- [ ] Send parent communication
- [ ] Review homework submissions
- [ ] Prepare Week 7 (Joke Machine project)

---

## 🐛 Sample Buggy Code Bank

### Easy Bugs (1-2 per example)

```python
# Missing quote
print("Hello World)

# Wrong case
Print("Hello")

# Typo in variable
name = "Alex"
print(nane)
```

### Medium Bugs (2-3 per example)

```python
# Two bugs
name = "Alex
print("Hello, " + Name)

# Two bugs
Print("I am " + 10 + " years old")
```

### Hard Bugs (4+ per example)

```python
# Four bugs
favoritecolor = Blue
Prnt("My favorite color is, color)

# Multiple bugs
Name = "alex
age = 10
print("Hello, + name)
Print("I am " + age + "years old)
```

---

_KidsLearnAI Teacher Resources_  
*www.kidslearnai.ca*  
_For instructor support, contact: [instructor support email]_

---

_Remember: This lesson is as much about MINDSET as it is about technical skills. Help students see bugs as puzzles to solve, not failures. Your reaction to bugs during demonstrations teaches them how to react to their own!_ 🔍🐛
