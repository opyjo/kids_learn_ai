# Term 1, Week 7: Input Superpower — Numbers and Conversions! 🔢

## Teacher's Guide

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 7 of 9

---

## 📋 Lesson Overview

### Purpose

This lesson bridges Lesson 6 (input()) to Lesson 8 (Mad Libs game build). Students discovered in Lesson 6 that input() always returns a string — a deliberate cliffhanger. Lesson 7 resolves this by teaching type conversion with int() and float(). This knowledge is not optional: without it, students cannot make their Mad Libs game use numbers meaningfully, and they will hit TypeErrors as soon as they try to do any maths with user input. This lesson follows a problem → cause → solution structure, opening with the TypeError crash to generate curiosity, then teaching the fix.

### Learning Objectives

By the end of this lesson, students will have:

1. Understood why `input()` returns a string and why that matters
2. Used `int()` to convert string input to a whole number
3. Used `float()` to convert string input to a decimal number
4. Performed calculations with converted numbers
5. Recognised and fixed a `TypeError` when mixing types

### Prerequisites

Students should have completed Lessons 1–6 covering:

- Print statements and patterns (Weeks 1–2)
- Variables (Week 3)
- String methods and f-strings (Weeks 4–5)
- input() basics — understanding that input() returns a string (Week 6)

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for the TypeError demo
- Whiteboard or slide showing the string vs int comparison table
- Timer for activity transitions

### Pre-Lesson Preparation

1. **Prepare the TypeError demo** — have this code ready to run live:
   ```python
   age = input("How old are you? ")
   older = age + 10
   print(older)
   ```
2. **Prepare the fixed version** — ready to show immediately after
3. **Prepare practice challenge answers** — for quick support
4. **Preview Mad Libs sneak peek** — have the sample output ready to display at the end

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity | Details |
|------|----------|----------|---------|
| 0:00 | 5 min | Hook — The TypeError Demo | Live crash creates curiosity |
| 0:05 | 10 min | The Problem: Strings vs Numbers | Visual explanation of types |
| 0:15 | 15 min | int() and float() Teaching | Syntax, examples, shortcut |
| 0:30 | 15 min | Practice Challenges | 4 star-rated challenges |
| 0:45 | 10 min | Bridge to Games + Mad Libs Tease | Set up excitement for Lesson 8 |
| 0:55 | 5 min | Homework & Wrap-Up | Number Wizard assignment |

---

## 📚 Detailed Teaching Guide

### Part 1: Hook — The TypeError Demo (5 minutes)

#### Goals

- Create immediate, memorable curiosity about WHY input() returns strings
- Show the exact error students will hit if they try to do maths without converting
- Set up the "problem" that the rest of the lesson solves

#### Script/Talking Points

> "Last week you learned that Python can listen to you with input(). And I gave you a warning at the end: input() ALWAYS returns a string, even if you type a number.
>
> Why does that matter? Let me SHOW you."

**Type this live on the projector (do NOT fix it yet):**

```python
age = input("How old are you? ")
older = age + 10
print(older)
```

**Run it. Enter a number like 12. Watch it crash.**

> "Who expected that? Who can read the error message?
>
> 'TypeError: can only concatenate str (not int) to str.' Python is saying: I have text, you gave me a number — I don't know how to add those together!
>
> This is the mystery we're solving today. By the end of this lesson, you'll know exactly how to fix this — and you'll never be surprised by a TypeError again."

**Do NOT fix it yet.** Keep the tension for a moment, then move to the explanation.

#### Teaching Tips

- Let the TypeError error message stay on screen for 20–30 seconds. Ask students to read it aloud.
- Ask "What do YOU think the problem is?" before explaining. Some students will have intuitions.
- Connect to the real world: "Every game that keeps score, every app that adds up totals — they ALL had to solve this exact problem."

---

### Part 2: The Problem — Strings vs Numbers (10 minutes)

#### Goals

- Make the string/int distinction visually clear
- Show the counterintuitive behaviour of "12" + "12" = "1212"
- Build intuition before introducing the fix

#### Key Demonstration

Show these two lines side by side:

```python
text_twelve = "12"    # string — like "hello"
real_twelve  = 12     # integer — a real number

print(text_twelve + text_twelve)   # Output: 1212
print(real_twelve  + real_twelve)  # Output: 24
```

> "Notice anything? The STRING '12' doubled gives us '1212' — Python just joined the text together, like 'hello' + 'hello' = 'hellohello'. The INTEGER 12 doubled gives us 24 — actual maths.
>
> input() always gives you the string version. So when you type 12, Python stores '12' — the text, not the number. That's why our code crashed."

#### Visual Aid (Draw on Whiteboard or Show Slide)

```
"12"   ← String. Python sees this like any text. "12" + "12" = "1212"
12     ← Integer. Python knows this is a number. 12 + 12 = 24
```

#### Check for Understanding

Ask: "If I type the number 5 into input(), what does Python store?"

Expected answer: The string "5" — text, not the number 5.

---

### Part 3: int() and float() (15 minutes)

#### Goals

- Teach the conversion syntax clearly
- Introduce the "wrap" shortcut
- Cover both int() and float(), and when to use each

#### Teaching int()

> "The fix is beautifully simple. Python gives us a function called int() that converts text into a real number."

**Show the two-step version first:**

```python
age_text   = input("How old are you? ")    # "12" (string)
age_number = int(age_text)                  # 12 (integer)

older = age_number + 10
print(f"In 10 years you'll be {older}!")
```

> "int() takes whatever is inside the brackets and turns it into an integer. Now the maths works!"

**Then show the shortcut:**

```python
age = int(input("How old are you? "))
```

> "This is the same thing in one line. Read it from the inside out: first input() asks the question, then int() converts the answer. Most programmers write it this way."

**Run it. Type 12. Show the output: "In 10 years you'll be 22!"**

#### Teaching float()

> "What if the number has a decimal point? Like a score of 8.5, or a price of £3.99? int() won't work — it needs a whole number. That's where float() comes in."

```python
score = float(input("Enter your score: "))
bonus = score * 1.5
print(f"Bonus score: {bonus}")
```

**Show the int() vs float() table from the lesson.**

#### When to Use Each

> "Simple rule: use int() for whole things you can count — ages, lives, coins. Use float() for things that might have a decimal — scores, measurements, prices. When in doubt, start with int() and switch if you need decimals."

#### Common Mistakes to Anticipate

- Forgetting brackets: `int input("Age: ")` — show this fails
- Using `int()` on a decimal input like "3.5" — show the ValueError this causes, then switch to `float()`

---

### Part 4: Practice Challenges (15 minutes)

#### Goals

- Students apply int() and float() independently
- Four difficulty levels ensure everyone is challenged appropriately
- Teacher circulates to catch common errors early

#### Setup

> "You have 15 minutes to work through the challenges. Start with Challenge 1. If you finish early, move to 2, then 3, then 4. The harder ones are optional — if you're stuck on 3, go back to 2 and make sure that's solid."

#### Circulation Strategy

**First 5 minutes:**
- Check all students have int() working on Challenge 1
- Watch for the "forgot to convert" error — they run input() but skip int()
- Common fix: "Wrap int() around your input() call"

**Middle 5 minutes:**
- Help students on Challenge 2 with score doubling
- Encourage f-string use for the output

**Last 5 minutes:**
- Let fast students tackle Challenge 4 (float() + round())
- Help any students who are still stuck on Challenge 1

#### Differentiation

**For students who need more support:**
- Keep them on Challenges 1 and 2
- Provide the scaffold: write `age = int(input("..."))` and ask them to fill in the prompt and do the calculation

**For advanced students:**
- Challenge 4 uses `round(value, 2)` — a new function they haven't seen
- Encourage them to look at the answer, understand it, then modify it
- Ask: "Can you add a BMI calculation? BMI = weight ÷ (height in m × height in m)"

---

### Part 5: Bridge to Games + Mad Libs Tease (10 minutes)

#### Goals

- Connect type conversion to game development — make it feel relevant
- Build excitement for Lesson 8 (Mad Libs build)
- End the lesson with a "want to build this?" feeling

#### Bridge to Games Script

> "Let's talk about why this matters for game building.
>
> Think about any game you've played — what numbers does it use?"

Get students to brainstorm: scores, lives, levels, time, coins, health...

> "Every single one of those had to come from somewhere. When a player types in their score, or chooses how many lives they want — that's input(), converted to int(). You now know the technique that powers every game."

**Show the game taster:**

```python
player_name = input("Enter your name: ")
lives       = int(input("How many lives do you want? (1-5) "))

print(f"Welcome, {player_name}! You have {lives} lives.")
print(f"Game begins in 3... 2... 1... GO!")
```

**Run it. Let a student call out values.**

#### Mad Libs Tease

> "Now let me show you what we're building NEXT week."

**Display the sample Mad Libs output from the lesson (the BrightByte / penguin / moonwalk example).**

> "You give it a name, an animal, an action word, a place — and it reveals a completely unique, hilarious story every time. The sillier the words, the funnier the story.
>
> And here's the thing: every skill you've learned — input(), variables, f-strings, even the print decorations — goes into this one game. It's the ultimate Term 1 project.
>
> Want to build it? That's Lesson 8. See you there."

---

### Part 6: Homework & Wrap-Up (5 minutes)

#### Homework Assignment

> "For homework, you're building a Number Wizard Calculator. It uses everything from today:
> - At least 3 input() calls with numbers
> - int() or float() on each one
> - At least 2 calculations
> - A neat results card
>
> Use the starter template in the lesson. Customise it however you like!"

**Display the grading rubric briefly.**

#### Wrap-Up

> "You've just solved the mystery from last week. You know why input() gives you strings, and you know exactly how to convert them. That's one of the most important things you'll ever learn about Python. See you next week for the build!"

---

## 🤖 AI Activity: Type Conversion in the Real World (5–10 minutes, optional)

### What to Do

1. **Introduction** (1 min)
   > "You just learned to convert strings to numbers. Did you know AI does this billions of times a second?"

2. **Discussion** (3–4 min)
   - "When you type a Google search, what does Google do with your text?"
   - "AI can't process words directly — it converts them to numbers first (called embeddings)"
   - "Every photo you take that an AI identifies goes through this: image → numbers → AI analysis → result back to text"

3. **Connection** (2 min)
   > "Your int() and float() are tiny versions of the very first step in every AI system: converting raw data into numbers that can be processed. You learned a concept today that sits at the heart of all machine learning."

### Teaching Tips

- Keep it conceptual — no need to explain neural networks
- Use the analogy: "A library catalogue is strings. The computer needs to convert them to numbers (like book reference codes) to sort and find things efficiently. Same idea."

---

## 🎯 Assessment & Differentiation

### Formative Assessment (During Class)

**Watch each student for:**

- [ ] Correctly wraps `int()` around `input()` without being told
- [ ] Understands WHY the conversion is needed (not just HOW)
- [ ] Chooses `int()` vs `float()` appropriately
- [ ] Uses f-strings to print results (not `+` with numbers)
- [ ] Can read a TypeError and explain what caused it

### Lesson Rubric

| Criteria | Excellent (3) | Good (2) | Developing (1) |
|----------|--------------|----------|----------------|
| **Conversion syntax** | Writes `int(input(...))` fluently | Writes it correctly with prompting | Needs template |
| **int vs float** | Chooses correctly and explains why | Makes correct choice | Needs guidance |
| **Calculations** | Multiple; correct results | Basic addition/multiplication | Attempts but errors |
| **Error recognition** | Names TypeError, explains cause | Recognises it's a type error | Confused by error |
| **Application** | Challenge 3 or 4 attempted | Challenge 2 complete | Challenge 1 complete |

### Differentiation Strategies

#### For Students Who Need More Support

- Focus only on `int()` — skip `float()` for now
- Provide the scaffold code with blanks to fill in
- Use a physical analogy: "The input() box delivers packages in bubble wrap (the string). int() unwraps them so you can use what's inside."
- Let them complete Challenge 1 multiple times with different scenarios

#### For Advanced Students

- Introduce `round(value, 2)` from Challenge 4
- Ask: "What happens if someone types a word instead of a number? What error do you get?" (ValueError — foreshadows error handling)
- Challenge: "Can you write a program that asks for 5 scores and calculates the average?"
- Bonus: "What does `//` do? What does `%` do?"

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Issue | Solution |
|-------|----------|
| `ValueError: invalid literal for int()` | Student typed a word, not a number. Explain: `int()` only works with number text like "12" |
| `TypeError` when printing with `+` | Switch to f-string: `f"Result: {number}"` |
| `int()` failing on decimal like "3.5" | Use `float()` instead |
| Forgot `int()` entirely | Point to their age = input() line: "That gives you text — wrap it with int()" |

### Concept Issues

| Issue | Solution |
|-------|----------|
| "I don't understand why '12' is different from 12" | Run the `"12" + "12"` demonstration — seeing 1212 makes it click |
| Confusing int() and float() | Ask: "Will this number ever have a decimal?" If yes: float. If no: int. |
| Using `int()` on a variable they already stored | Show both: `int(age_text)` and `int(input(...))` — both work |

### Time Management Issues

| Issue | Solution |
|-------|----------|
| Not enough time for all challenges | Challenges 1–2 are the priority; 3–4 are stretch |
| Students rushing to Challenge 4 | "Challenge 4 uses a new function — make sure 1–3 are solid first" |
| Too much time on TypeError explanation | Keep Part 2 tight; the demonstration does most of the work |

---

## 📊 Post-Lesson Reflection

### Key Questions

1. **Understanding check:**
   - Can students explain WHY input() returns a string (not just that it does)?
   - Can they choose int() vs float() appropriately?

2. **Application check:**
   - Did students write the one-line shortcut `int(input(...))` by end of class?
   - Are their Challenge answers running without errors?

3. **Readiness for Lesson 8:**
   - Do students understand enough to use numbers in their Mad Libs game (e.g. for a "how many minutes" line)?
   - Any students who are still confused about conversion will struggle with the bonus in Lesson 8 — flag them for extra support

### Reflection Template

```
Date: ____________
Students Present: ____________

Concept understanding (estimate %):
- Can use int() correctly: ___%
- Can use float() correctly: ___%
- Can explain WHY conversion is needed: ___%

Challenges completed:
- Challenge 1 (most students): ___%
- Challenge 2: ___%
- Challenge 3: ___%
- Challenge 4: ___%

Students who may need extra support in Lesson 8:
-

Students who are ready for advanced challenges:
-

Adjustments for next time:
-
```

---

## 🔗 Additional Resources

### Parent Communication Template

```
Subject: Week 7 — Python Maths! Your Child Learned Type Conversion

Dear Parent/Guardian,

This week your child tackled one of the most important concepts in programming: type conversion!

What they learned:
- Why Python stores typed numbers as text (strings)
- How to convert text to numbers with int() and float()
- How to do real maths with user input

Ask them to show you: Run their Homework Number Wizard Calculator and let them explain what int() does!

Next week: They start building their first game — a Mad Libs Adventure! They'll use everything learned so far to create a hilarious story generator. Have them ask you for a silly word to test it with.

[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Prepare the TypeError demo code (ready to run live)
- [ ] Prepare the fixed version
- [ ] Have the string vs int comparison table ready
- [ ] Prepare the Mad Libs sample output for the tease

### During Class

- [ ] Live TypeError demo — do NOT fix immediately
- [ ] Clear visual explanation of string vs number
- [ ] Both int() and float() taught with examples
- [ ] Students attempt challenges independently
- [ ] Mad Libs tease at the end builds excitement
- [ ] Homework explained with starter template

### After Class

- [ ] Note students who didn't complete Challenge 1
- [ ] Flag students who may need Lesson 8 number support
- [ ] Send parent communication
- [ ] Prepare Mad Libs demo for Lesson 8

---

_KidsLearnAI Teacher Resources_
*www.kidslearnai.ca*
_For instructor support, contact: [instructor support email]_

---

_Remember: The TypeError demo is the heart of this lesson. Seeing the program CRASH before knowing the fix creates genuine curiosity. Don't rush past it — let students sit with the problem for a moment before teaching the solution._
