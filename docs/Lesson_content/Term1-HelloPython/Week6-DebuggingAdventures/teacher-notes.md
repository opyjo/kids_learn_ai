# Term 1, Week 6: Talk to Python! Introducing input() 🎤

## Teacher's Guide

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 6 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces `input()` — the function that transforms a program from a static display into an interactive conversation. Students will experience the "wow" moment of seeing their name appear in a program's output for the first time. This is a pivotal lesson that bridges everything they've learned (variables, strings, f-strings) into something that feels genuinely alive and personal.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what `input()` does in plain English
2. Write a correct `input()` statement with a clear prompt
3. Store user input in a well-named variable
4. Use stored input inside `print()` and f-strings
5. Ask multiple questions in one program and use all the answers
6. Understand that `input()` always returns a string

### Prerequisites

Students should have completed Lessons 1–5 covering:

- Print statements and string concatenation
- Variables (strings and integers)
- String methods and f-strings

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for live demonstrations
- Optional: a toy microphone or prop to introduce the "talking to Python" theme
- Prepared starter programs to demo live (see code bank below)

### Pre-Lesson Preparation

1. **Review Week 5 submissions** — Note any f-string confusion to revisit briefly
2. **Test all demo programs** — Run each example yourself so you know the exact output
3. **Prepare your "demo conversation"** — Plan what name/answers you'll type during live demos to make them fun and funny
4. **Plan student pairs** — For the Interview Show activity
5. **Have the homework code** ready to display at the end

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity | Details |
|------|----------|----------|---------|
| 0:00 | 5 min | Hook & Big Idea | "Your programs are about to come alive!" |
| 0:05 | 10 min | Introducing input() | Live demo, anatomy of the function |
| 0:15 | 8 min | Storing & Using Answers | Multiple questions, variable names |
| 0:23 | 7 min | input() with f-strings | Connect to Week 5 knowledge |
| 0:30 | 15 min | Practice Challenges | Pair work on Challenges 1–3 |
| 0:45 | 8 min | Class Activity: Interview Show | Students build and run interview programs |
| 0:53 | 4 min | Pro Tips & input() = string | Key concepts before homework |
| 0:57 | 3 min | Wrap-up & Homework | Assignment intro, preview Week 7 |

---

## 📚 Detailed Teaching Guide

### Part 1: Hook & Big Idea (5 minutes)

#### Goals

- Create excitement and curiosity
- Contrast static programs with interactive ones
- Set the tone for a "conversation" lesson

#### Opening

> "Quick question — how many of you have used Siri, Alexa, or ChatGPT?"

**[Take a show of hands]**

> "Every one of those tools does one fundamental thing: they listen to YOU and then respond. Today, you're going to learn how to make your Python programs do the exact same thing. One new function. That's all it takes."

#### The Static vs. Interactive Contrast

**Type this and run it:**

```python
print("Hello, Alex!")
```

> "This always says Alex. Doesn't matter who runs it — Alex, Alex, Alex. Boring, right?"

**Now type this:**

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
```

**Run it and type your own name (or something silly).**

> "Now it knows WHO is running the program. Every single person who runs this gets their own personalised hello. THAT is what `input()` does."

---

### Part 2: Introducing input() (10 minutes)

#### Goals

- Explain the anatomy of an `input()` statement clearly
- Make students comfortable with the pause-and-wait behaviour
- Establish the prompt spacing habit early

#### Anatomy Breakdown

Write on the board or display:

```python
name = input("What is your name? ")
```

Walk through each part slowly:

| Part | Explanation |
|------|-------------|
| `name` | "This is our variable — it's going to hold the answer" |
| `=` | "This arrow means: put whatever comes from the right into `name`" |
| `input(...)` | "This is the magic function — it pauses and waits for typing" |
| `"What is your name? "` | "This is the prompt — the question the user sees. Notice the space before the closing quote!" |

> "That little space before the closing quote is a pro habit. It means the cursor appears with a gap after the question mark, like this: `What is your name? _`. Much nicer than `What is your name?_`."

#### What Happens Step by Step

Walk through the execution:

> "When Python hits this line, it does three things in order:
>
> 1. It prints the prompt — the question
> 2. It **waits**. Completely frozen. Until the user types something and presses Enter
> 3. It takes whatever was typed, puts it into `name`, and moves on"

**Demo it slowly** — pause after running to let students watch the cursor blink before you type.

---

### Part 3: Storing & Using Answers (8 minutes)

#### Goals

- Show that you can ask multiple questions
- Reinforce good variable naming
- Show that stored answers can be used many times

#### Multiple Questions Demo

```python
name   = input("What is your name? ")
colour = input("What is your favourite colour? ")
animal = input("What is your favourite animal? ")

print("Hi " + name + "!")
print("A " + colour + " " + animal + " — that's amazing!")
```

Type something fun when you run it (e.g., name: "BrightByte", colour: "neon green", animal: "robot dragon"). Students love it when the teacher types silly answers.

> "Three questions, three variables, and then we mix them all together. Notice the variable names — `name`, `colour`, `animal` — they tell you exactly what's stored inside them."

#### Use the Same Variable Many Times

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
print("Welcome, " + name + "!")
print("Great to meet you, " + name + "!")
```

> "You only asked ONCE, but we used `name` three times. That's the power of storing answers in variables — you ask once and use it forever."

---

### Part 4: input() with f-strings (7 minutes)

#### Goals

- Connect new learning to Week 5 (f-strings)
- Show that both styles work — let students choose

#### Quick Bridge to Week 5

> "Remember f-strings? They work perfectly with `input()` too."

**Show both side by side:**

```python
name = input("What is your name? ")

# Concatenation style
print("Hello, " + name + "!")

# f-string style
print(f"Hello, {name}!")
```

> "Both do exactly the same thing. Use whichever feels more natural. As programs get longer, most people prefer f-strings because they're easier to read."

---

### Part 5: Practice Challenges — Pair Work (15 minutes)

#### Goals

- Apply input() in progressively harder challenges
- Build confidence through early success
- Encourage creativity in later challenges

#### Activity Setup

> "You're going to work through challenges with your partner. Start at Challenge 1 and go as far as you can. If you finish all four, make up your own!"

**Pair students:**
- Mix skill levels where possible
- Ensure both students contribute — suggest one types, one reads/directs, then swap

#### Challenges at a Glance

| Challenge | Stars | Key Skill |
|-----------|-------|-----------|
| 1: The Greeter | ⭐ | 2 input() calls, basic print |
| 2: The Compliment Machine | ⭐⭐ | f-strings with input |
| 3: The Story Builder | ⭐⭐⭐ | 3 inputs, narrative output |
| 4: The Robot Introduction | ⭐⭐⭐⭐ | 4 inputs, creative formatting |

#### Circulate and Watch For

- Students forgetting to store the result: `input("Name? ")` instead of `name = input("Name? ")`
- Using the variable name inside quotes: `print("Hello, name!")` — gently redirect to `print("Hello, " + name + "!")`
- Not running the program after writing it — encourage run-early, run-often

---

### Part 6: Class Activity — The Interview Show (8 minutes)

#### Goals

- Apply input() in a social, fun context
- Give students the experience of "running" someone else's program
- Build excitement about interactivity

#### Setup

> "Now we're doing The Interview Show! You're going to build a mini interview program — 3 questions — and then your partner is going to run it."

**Instructions:**

1. Each student writes a program that asks 3 questions (their choice — be creative!)
2. They hand the keyboard to their partner
3. The partner runs the program and types in answers
4. Both students see the personalised output together
5. Switch roles

> "The programmer gets to see their code come to life. The 'guest' gets to see themselves in the output. Everyone wins!"

**Example to show:**

```python
name    = input("Welcome to the Interview Show! What is your name? ")
talent  = input("What is your hidden talent? ")
wish    = input("If you had one superpower, what would it be? ")

print("")
print("--- TONIGHT ON THE INTERVIEW SHOW ---")
print(f"Please welcome the incredible {name}!")
print(f"Did you know {name} can {talent}? Amazing!")
print(f"And their dream superpower? {wish}. Watch out world!")
```

---

### Part 7: Pro Tips & input() = String (4 minutes)

#### Goals

- Cement best practices before independent work
- Plant the "input is always a string" seed without overwhelming

#### Pro Tips (Quick Fire)

> "Three golden rules for input():"

1. **Make your prompt clear** — the user should know exactly what to type
2. **Add a space at the end of your prompt** — before the closing `"`
3. **Name your variables clearly** — `name`, `colour`, `city` — not `a`, `b`, `x`

#### The String Note (Keep It Brief)

> "One important thing to know — and we'll explore this more in a future lesson — everything `input()` gives you is text. Even if someone types the number 5, Python treats it as the text '5', not the number 5. For now, use `input()` for names, colours, and words. We'll handle numbers later!"

---

### Part 8: Wrap-up & Homework (3 minutes)

#### Quick Review

> "What does input() do?" → Pauses the program and waits for the user to type something

> "Where does the answer go?" → Into a variable

> "What type of data does input() always give you?" → A string

#### Homework Introduction

> "For homework, you're building a Personal Greeter — a program that asks 4 questions and uses every single answer to print a friendly, personalised message."

**Show the starter code briefly:**

```python
name = input("What is your name? ")
# TODO: Ask 3 more questions

print("Welcome, " + name + "!")
# TODO: Print 3 more lines
```

> "Make it fun. Make it YOU. The questions can be about anything!"

#### Preview Week 7

> "Next week we build the Joke Machine — our first big project. And guess what skill we'll be using? `input()`. You're already prepared!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Does student write `name = input(...)` (not just `input(...)`)?
- [ ] Does student use the variable in print (not retype the word)?
- [ ] Can student ask 2+ questions and use all answers?
- [ ] Does student use descriptive variable names?
- [ ] Does student understand the prompt vs. the variable?

### Quick Check Questions

Ask throughout the lesson:

1. "What does `input()` do?" → Pauses and waits for the user to type
2. "Why do we write `name = input(...)` instead of just `input(...)`?" → To save the answer so we can use it
3. "What is the prompt?" → The question text inside the parentheses
4. "Can you use the same variable in more than one print?" → Yes!
5. "What type does input() always return?" → A string

### Homework Assessment: "My Personal Greeter"

| Criteria | Full Credit | Partial Credit | Needs Work |
|----------|-------------|----------------|------------|
| 4 input() calls | All 4 present | 2–3 present | Fewer than 2 |
| Variables named clearly | All descriptive | Some descriptive | `a`, `b`, `x` style |
| All variables used | Every answer used | Most used | Some unused |
| Output quality | Personalised and friendly | Basic but correct | Doesn't use answers |

### Differentiation Strategies

#### For Students Who Need More Support

- Start with Challenge 1 only — celebrate finishing it
- Provide a template with the variables already named
- Let them use one `input()` and three `print()` lines to start
- Sit with them during the demo and run it together first

#### For Advanced Students

- Challenge them to use f-strings exclusively
- Ask: "Can you use the same variable three different times in your output?"
- Introduce: `input()` inside a function call — `print("Hi " + input("Name? "))`
- Preview: What happens if you try to add a number from input() to another number? (leads to next lesson)

---

## ⚠️ Common Pitfalls & Solutions

### Teaching Challenges

| Challenge | Solution |
|-----------|----------|
| Student forgets `=` and the variable | Show: "Without `=`, the answer disappears forever!" |
| Student puts variable name inside quotes | Demo both wrong and right side by side |
| Student asks a question but doesn't use the answer | Ask: "Where did you store it? Can we use it?" |
| Student runs the program but doesn't type anything | Remind them to click the input field and press Enter |
| Program asks questions in wrong order | Walk through line by line — Python runs top to bottom |

### Technical Issues

| Issue | Solution |
|-------|----------|
| Trinket input field is hard to find | Point to the output panel — input appears there |
| Program seems frozen | It's waiting for input! Click output and type |
| Student types a number and sees unexpected behaviour | Acknowledge it, say "Great discovery — we'll fix this in a future lesson!" |
| Student's output is on one line | Check that they have separate `print()` calls |

### Common Code Mistakes

```python
# ❌ Forgetting to store the answer
input("What is your name? ")
print("Hello, " + name)   # name doesn't exist!

# ✅ Correct
name = input("What is your name? ")
print("Hello, " + name)
```

```python
# ❌ Putting variable inside quotes
name = input("What is your name? ")
print("Hello, name!")   # prints "Hello, name!" literally

# ✅ Correct
print("Hello, " + name + "!")
```

---

## 📊 Post-Lesson Reflection

### Key Questions

1. **Understanding of input():**
   - Did students grasp the pause-and-wait behaviour?
   - Could they explain what a prompt is?
   - Did they understand the difference between the prompt and the variable?

2. **Variable usage:**
   - Did students successfully store answers AND use them?
   - Were variable names descriptive or cryptic?

3. **Excitement level:**
   - Did students have a "wow" moment when their name appeared in the output?
   - Who was most excited? (Celebrate them next week!)

### Reflection Template

```
Date: ____________
Students Present: ____________

input() understanding (1-5): ____

Variable naming quality (1-5): ____

Skills students grasped:
- [ ] Writing input() with a prompt
- [ ] Storing the answer in a variable
- [ ] Using the variable in print()
- [ ] Using multiple input() calls
- [ ] Using input() with f-strings

Students needing support next week:
-

Highlight moments (students who "got it" excitedly):
-

Changes for next time:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Python docs — input():** docs.python.org/3/library/functions.html#input
- **Trinket input tip:** In Trinket, the input field appears at the bottom of the output panel — point this out before the first demo
- **Growth mindset:** When students see the "wow" of their name on screen, lean into that joy — it's a powerful hook

### For Students (Share with Parents)

- **Challenge at home:** Ask a family member to be the "user" and run their Personal Greeter
- **Extend it:** Can they add a 5th or 6th question to their program?
- **Teach it:** Can they explain what `input()` does to a sibling or parent?

### Parent Communication Template

```
Subject: What Your Child Learned in KidsLearnAI - Lesson 6

Dear Parent/Guardian,

Today your child unlocked one of the most exciting features in programming: interactivity!

What we covered:
- The input() function — how to make Python ask questions
- Storing user answers in variables
- Using answers to print personalised messages
- Building programs that feel like real conversations

Homework due by [date]:
"My Personal Greeter" — a program that asks 4 questions and responds with a friendly, personalised message. Details are in the student notes.

Try this at home:
Ask your child to run their Personal Greeter for you! Type in your own name and answers and see your personalised output. They'll love showing it off.

Coming up:
Next week we build the Joke Machine — our first big project, using input() to make it interactive!

[Instructor Name]
KidsLearnAI
```

---

## 💻 Sample Code Bank

### Simple Starters (For Early Demos)

```python
# One question
name = input("What is your name? ")
print("Hello, " + name + "!")
```

```python
# Two questions
name   = input("What is your name? ")
colour = input("What is your favourite colour? ")
print(f"Hi {name}! {colour} is a great colour!")
```

### Medium Programs (For Challenges 2–3)

```python
# Compliment machine
name    = input("What is your name? ")
quality = input("What is your best quality? ")
print(f"Hey {name}, you are so {quality}!")
print(f"The world is a better place with you in it!")
```

```python
# Story builder
hero  = input("Enter a hero's name: ")
place = input("Enter a magical place: ")
item  = input("Enter a magical object: ")
print(f"Once upon a time, {hero} travelled to {place}.")
print(f"There, {hero} discovered a magical {item}.")
print(f"{hero} used the {item} to save {place} forever!")
```

### Advanced Programs (For Challenge 4 / Fast Finishers)

```python
# Robot introduction
name    = input("ROBOT: Hello human. What is your name? ")
planet  = input("ROBOT: Where are you from? ")
skill   = input("ROBOT: What is your special skill? ")
mission = input("ROBOT: What is your mission today? ")

print("")
print("ROBOT: Processing... beep boop...")
print(f"ROBOT: Greetings, {name} from {planet}!")
print(f"ROBOT: I see you are skilled at {skill}. Impressive.")
print(f"ROBOT: I will help you with your mission: {mission}.")
print("ROBOT: Welcome aboard. Beep.")
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Test all demo programs in Trinket
- [ ] Plan your "funny answers" for live demos (keep it age-appropriate and silly)
- [ ] Have the Interview Show example ready to display
- [ ] Plan student pairs
- [ ] Prepare homework starter code to display

### During Class

- [ ] Open with the static vs. interactive contrast demo
- [ ] Walk through input() anatomy on the board
- [ ] Demo multiple questions with fun answers
- [ ] Connect input() to f-strings from Week 5
- [ ] Run pair challenge activities (Challenges 1–3 minimum)
- [ ] Run The Interview Show activity
- [ ] Share the "input always returns a string" note briefly
- [ ] Assign homework and preview Week 7

### After Class

- [ ] Complete reflection notes
- [ ] Note students who struggled with variable storage vs. prompt
- [ ] Send parent communication
- [ ] Review homework submissions
- [ ] Prepare Week 7: Joke Machine (incorporate input() for user interaction)

---

_KidsLearnAI Teacher Resources_
*www.kidslearnai.ca*
_For instructor support, contact: [instructor support email]_

---

_Remember: The "wow" moment when a student sees their own name in the program output is one of the most powerful hooks in early programming education. Let it land. Pause. Let them feel it. Then build on it!_ 🎤✨
