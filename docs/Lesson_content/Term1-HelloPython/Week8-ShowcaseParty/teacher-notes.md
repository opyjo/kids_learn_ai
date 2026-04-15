# Term 1, Week 8: Term 1 Recap and Final Project!

## Teacher's Guide

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 8 of 9

---

## 📋 Lesson Overview

### Purpose

This lesson is primarily a **recap and confidence builder**. The first 35 minutes are dedicated to reviewing every skill from Weeks 1–7 through a speed round, skill-by-skill walk-through with mini-challenges, and a quiz. The goal is for students to realise just how much they've learned — this is a victory lap, not a re-teach. The final 20 minutes introduce the final project: students CHOOSE between a Mad Libs Game or a Joke Machine. Both projects require only Term 1 skills (no if/else, no loops). Students design their project on paper and take it home to build for the Week 9 Showcase. The project is primarily homework — class time is for the recap, the choice, and the design.

### Learning Objectives

By the end of this lesson, students will have:

1. Demonstrated confident recall of all 7 Term 1 skills through guided recap and quiz
2. Applied all 7 skills together in a single Skills Checkpoint program
3. Understood the requirements for both final project options
4. Made an independent choice between Mad Libs and Joke Machine
5. Designed their chosen project on paper (design-first habit)

### Prerequisites

Students should have completed Lessons 1–7 covering:

- `print()` statements and output (Week 1)
- String multiplication `*` and concatenation `+` (Week 2)
- Variables — storing and using data (Week 3)
- String methods — `.upper()`, `len()` (Week 4)
- Comments and f-strings (Week 5)
- `input()` — getting user input (Week 6)
- `int()` and `float()` — type conversion (Week 7)

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demos and walk-through
- Paper and pencils for the design phase
- Timer for activity transitions
- Pre-built Mad Libs demo AND Joke Machine demo (teacher should prepare BOTH before class)

### Pre-Lesson Preparation

1. **Prepare the Skills Rally** — the recap table with all 7 skills and one-line code examples, plus the "Try It" mini-challenges from the lesson. Have these ready to display or code live.
2. **Prepare the Kahoot quiz** — have it loaded and ready to launch. Test the link before class.
3. **Build BOTH demo projects** — a working Mad Libs AND a working Joke Machine, ready to run live. Keep them short (the point is showing the concept, not impressing with length).
4. **Print or display the requirements checklists** for both projects.
5. **Decide on paper design templates** (optional) — a simple worksheet for "Theme", "Content Plan", and "Word Types / Joke Ideas".

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity | Details |
|------|----------|----------|---------|
| 0:00 | 5 min | Hook — Skills Speed Round | Quick-fire 7 questions, one per week |
| 0:05 | 15 min | Skill-by-Skill Recap | Walk through each skill with code + "Try It" challenges |
| 0:20 | 5 min | Skills Checkpoint | Run the all-in-one program, class identifies each skill |
| 0:25 | 10 min | Kahoot Quiz | Teacher-led Kahoot quiz on all Term 1 skills |
| 0:35 | 10 min | Project Introduction + Choice | Demo both projects, students choose |
| 0:45 | 10 min | Design Phase | Paper planning — no Trinket yet |
| 0:55 | 5 min | Wrap-Up + Showcase Preview | Homework expectations, Week 9 preview |

---

## 📚 Detailed Teaching Guide

### Part 1: Hook — Skills Speed Round (5 minutes)

#### Goals

- Activate prior knowledge immediately
- Build confidence — students know MORE than they think
- Create energy and excitement for the recap

#### Script/Talking Points

> "Before we do ANYTHING today, let's see how much you remember. I'm going to ask 7 quick questions — one for each week. Shout the answer as fast as you can. Ready?"

**Speed Round Questions (adapt to your style):**

1. **Week 1:** "What function makes Python talk? What prints text to the screen?" → `print()`
2. **Week 2:** "How do you print an emoji 10 times without typing it 10 times?" → `"⭐" * 10`
3. **Week 3:** "If I write `name = "Alex"`, what is `name` called?" → A variable
4. **Week 4:** "What does `.upper()` do to a string?" → Makes it ALL CAPS
5. **Week 5:** "What letter goes before a string to let you put variables inside it?" → `f` (f-string)
6. **Week 6:** "What function lets the user TYPE something into your program?" → `input()`
7. **Week 7:** "If `input()` gives you a string and you need a number, what do you wrap it in?" → `int()`

> "Seven for seven! You know WAY more than you did 7 weeks ago. Now let's prove it — we're going through every skill one by one."

#### Teaching Tips

- Keep this FAST — no more than 30 seconds per question
- Accept any reasonable answer, don't correct too precisely
- If the class is quiet, give hints — the goal is confidence, not testing
- Celebrate loudly: "You got them ALL!"

---

### Part 2: Skill-by-Skill Recap (15 minutes)

#### Goals

- Walk through each of the 7 skills with a concrete code example
- Give students a quick "Try It" challenge for each skill
- Reinforce understanding through active recall, not passive watching

#### How to Run This Section

Go through each week's skill. For each one:
1. **Show the example code** from the lesson (display on screen or type live)
2. **Ask the class** what it does / what the output would be
3. **Highlight the "Try It" challenge** — students can follow along in Trinket or just watch

You do NOT need to spend equal time on every skill. Spend more time on skills the class found harder (likely Weeks 5–7) and breeze through the ones they know well (Weeks 1–2).

#### Skill-by-Skill Script

**Week 1: `print()` (1–2 min)**

> "Week 1 — the very first thing you learned. `print()` is how Python talks to the world."

```python
print("Hello, world!")
print("My name is BrightByte!")
```

> "Every `print()` outputs on a new line. Text goes in quotes. Simple — but everything starts here."

**Quick Try It:** "Write three `print()` statements about yourself."

---

**Week 2: String `*` and `+` (1–2 min)**

> "Week 2 — you discovered strings aren't just text. You can MULTIPLY and ADD them."

```python
print("⭐" * 10)
print("Ha" * 5)
print("Hello" + " " + "World")
```

> "Star times 10 gives you ten stars. 'Ha' times 5 gives you HaHaHaHaHa. This is how we make borders and decorations."

**Quick Try It:** "Create a banner using string multiplication."

---

**Week 3: Variables (1–2 min)**

> "Week 3 — variables. Boxes that store information."

```python
name = "BrightByte"
age = 10
print(name)
print(age)
```

> "Use `=` to assign. Variable names should be descriptive — `player_name` not `x`."

**Quick Try It:** "Create three variables and print them."

---

**Week 4: String Methods (2 min)**

> "Week 4 — strings have built-in superpowers called methods."

```python
name = "brightbyte"
print(name.upper())     # BRIGHTBYTE
print(name.title())     # Brightbyte
print(len(name))        # 10
```

> "`.upper()` makes ALL CAPS. `.title()` Capitalises Each Word. `len()` counts characters. Note: it's `len(name)` not `name.len()`."

**Quick Try It:** "Try `.upper()` and `len()` on your own name."

---

**Week 5: Comments & F-Strings (2–3 min)**

> "Week 5 — clean code with comments, and the game-changing f-string."

```python
# This is a comment — Python ignores it
name = "Alex"
print(f"Hello, {name}!")    # f-string puts the variable RIGHT IN the text
```

> "The `f` before the quote is CRITICAL. Without it, you get `{name}` printed literally — that's one of the most common bugs. Variables go in curly braces."

**Quick Try It:** "Create a variable and use it in an f-string."

---

**Week 6: `input()` (2–3 min)**

> "Week 6 — the game-changer. `input()` lets the user talk TO your program."

```python
name = input("What is your name? ")
print(f"Hi {name}!")
```

> "The program PAUSES and waits for the user to type. Whatever they type gets stored in the variable. Remember: `input()` ALWAYS gives you a string — even if they type a number."

**Quick Try It:** "Ask for a favourite food and use it in an f-string."

---

**Week 7: `int()` and `float()` (2–3 min)**

> "Week 7 — since `input()` always gives you text, we need `int()` to do maths."

```python
age = int(input("How old are you? "))
next_year = age + 1
print(f"Next year you'll be {next_year}!")
```

> "Without `int()`, you get a TypeError. The shortcut is wrapping `int()` around `input()` on one line."

**Quick Try It:** "Ask for a number of items and a price, calculate the total."

---

#### Teaching Tips

- This is a **confidence builder**, not a re-teach. Keep moving!
- If students are engaged, let them try the challenges. If time is tight, demo them yourself.
- Spend 1–2 min per skill for Weeks 1–4, 2–3 min per skill for Weeks 5–7
- If you're running long, skip to the Skills Checkpoint and do the rest via the quiz

---

### Part 3: Skills Checkpoint (5 minutes)

#### Goals

- Show ALL 7 skills working together in one program
- Have students identify which week each line comes from
- Create the "aha" moment: "I know all of this!"

#### Script/Talking Points

> "Now watch this — ALL 7 skills in ONE tiny program. Let's see if you can spot each one."

```python
# Skills Checkpoint — all 7 skills in action!
player = input("What is your name? ")
age = int(input("How old are you? "))
future_age = age + 10
print("=" * 30)
print(f"Welcome, {player.upper()}!")
print(f"In 10 years you'll be {future_age}!")
```

**Run it live. Then go through line by line:**

> "Line 1 — what week? [comment → Week 5]
> Line 2 — what week? [input → Week 6]
> Line 3 — what week? [int() → Week 7]
> Line 4 — what week? [variable → Week 3]
> Line 5 — what week? [string * → Week 2]
> Line 6 — what week? [f-string + .upper() → Week 5 + Week 4]
> Line 7 — what week? [print → Week 1]"

> "Seven lines, seven skills. You know all of this!"

---

### Part 4: Kahoot Quiz (10 minutes)

#### Goals

- Test understanding in a fun, competitive, low-pressure way
- Identify any remaining gaps before the project
- Build confidence and energy before the project introduction

#### How to Run This Section

> "Time for a Kahoot! Let's see who's been paying attention for 7 weeks. Get your devices ready..."

Run the pre-made Kahoot quiz covering all Term 1 skills. The competitive format keeps energy high and gives you a quick read on class understanding.

#### After the Quiz

> "However you scored, remember: you knew ZERO Python 7 weeks ago. Every single point is progress."

**Use the Kahoot results to quickly gauge the class.** If most students scored well, move confidently to the project. If certain topics had low scores, make a mental note — you can address those during the design/build phase.

---

### Part 5: Project Introduction + Choice (10 minutes)

#### Goals

- Show students what BOTH finished projects look and feel like
- Give equal airtime to both options — neither is "better"
- Let students make an informed, confident choice

#### Script/Talking Points

> "OK, now for the exciting part. You've just proved you know 7 Python skills. Now you're going to use them ALL to build your FINAL PROJECT for Term 1. And YOU get to choose."

**Demo 1: Mad Libs (3 minutes)**

Run your pre-built Mad Libs demo. Ask the class to shout the words. Reveal the story. Let them laugh.

> "Mad Libs: you collect words from the player without telling them the story, then reveal a hilarious result. Different words = different story every time. It uses print, string multiplication, variables, input, and f-strings."

**Demo 2: Joke Machine (3 minutes)**

Run your pre-built Joke Machine demo. Let a student press Enter for punchlines. Show the rating system and score card.

> "Joke Machine: you tell jokes with dramatic punchline reveals, then the player rates them and you calculate a comedy score. It uses ALL of those skills plus `.upper()` for punchlines and `int()` for ratings."

**Show the comparison table from the lesson on screen.**

**Choice time (2 minutes):**

> "Both projects use everything you've learned. Both are equally awesome. Pick the one that sounds more FUN to you.
>
> If you love silly stories and creative writing → Mad Libs.
> If you love telling jokes and making people laugh → Joke Machine.
> If you truly can't decide after 1 minute, go with Mad Libs — it's a great default.
>
> Raise your hand: who's doing Mad Libs? [count] Who's doing Joke Machine? [count] Brilliant."

**Quick guidance (1 minute):**

> "Here's what I'll say about the two options:
>
> Mad Libs is a great starting point — it's clean, simple, and you can focus on making the story funny. If you want to feel confident, go with this one.
>
> Joke Machine has a few extra features — `.upper()` for punchlines and `int()` for ratings — which makes it slightly more challenging but also more impressive. If you want to stretch yourself, try this one.
>
> Both are equally good projects. I'm excited for whichever one you pick."

#### Teaching Tips

- **Do NOT steer students toward one project.** Present both with equal enthusiasm.
- If a student agonises for more than a minute, gently suggest Mad Libs as the default
- Mad Libs is slightly simpler (no `int()` required in the base version) — quietly suggest it to students who may need more support, but frame it positively
- Joke Machine has more independent units (each joke is standalone) — this makes it easier to build incrementally, which suits some learners better
- Note the split for your post-lesson reflection

---

### Part 6: Design Phase (10 minutes)

#### Goals

- Establish "design before code" as a habit
- Give students ownership over their project content
- Reduce blank-page anxiety by having a plan before going home to build

#### Setup

> "Grab paper. You're going to be a designer before you're a coder. This is what real programmers do."

**For Mad Libs students:**

> "Pick a theme. Write a short story (4–6 sentences) with blanks. Label each blank: __NOUN__, __VERB__, __ADJECTIVE__. You need at least 6 blanks."

**Display theme options:** 🚀 Space | 📚 School | 🐉 Fantasy | ⚽ Sports | 🍕 Food | 🐾 Animals

**For Joke Machine students:**

> "Write at least 3 jokes. For each joke, write the setup on one line and the punchline on the next. Then decide: where will you use the player's name? Which punchlines will be in ALL CAPS?"

#### Circulation During Design

- **Mad Libs students:** Push those who are overthinking: "Write ANYTHING — you can change it later." Help those with no ideas: "What's your favourite movie? Let's make a story from that."
- **Joke Machine students:** Help them find jokes: "Think of a knock-knock joke. Or a 'Why did the...' joke. You can look up kid-friendly jokes too." Make sure they have at least 3 written down.
- **Both:** Remind everyone the design doesn't have to be perfect — it's a starting point.

**2-minute warning:**

> "Two minutes! Mad Libs people: you need a story with 6 labelled blanks. Joke Machine people: you need 3 jokes written out with setups and punchlines. Count now!"

---

### Part 7: Wrap-Up + Showcase Preview (5 minutes)

#### Goals

- Set clear homework expectations
- Build anticipation for the Week 9 Showcase

#### Homework Brief

> "Your homework this week is to BUILD your project. You've got your design on paper, you've got the starter code in the lesson, and you've got the requirements checklist. Build it on Trinket, test it at least twice, and submit your link.
>
> If you get stuck, look back at the starter code in the lesson — it's a complete working example you can build from."

**Display both requirements checklists one more time.**

#### Showcase Preview

> "Next week is the Term 1 Showcase! You'll present your project LIVE to the class.
>
> Mad Libs builders: a classmate enters the words, the class shouts suggestions.
> Joke Machine builders: the class watches your jokes and rates them together.
>
> Come with a finished, working project and a 1-sentence intro about what you built. I'm genuinely excited to see what everyone creates."

---

## 🤖 AI Activity: Structure vs Content (5 minutes, if time permits)

### What to Do

1. **Introduction** (1 min)
   > "Both projects today separate two things: STRUCTURE and CONTENT. In Mad Libs, the story template is the structure, the words are the content. In Joke Machine, the joke format is the structure, the specific jokes and ratings are the content."

2. **AI Connection** (3 min)
   > "AI language models work exactly this way. ChatGPT doesn't memorise sentences — it learns PATTERNS of language. Then it fills in those patterns with content, just like your f-strings fill in blanks. Your project is a tiny, human-powered version of AI text generation."

3. **Discussion** (1 min)
   - "How is your project similar to how AI generates text?"
   - "What would happen if you changed the structure but kept the same content?"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During the Recap (observe/note):**

- [ ] Participates in speed round (can recall skills)
- [ ] Follows along with skill-by-skill examples
- [ ] Attempts "Try It" challenges
- [ ] Engages with Kahoot quiz (check leaderboard for gaps)
- [ ] Can identify all 7 skills in the Skills Checkpoint program

**During the Project Phase (observe/note):**

- [ ] Made an independent project choice
- [ ] Designed on paper with clear content plan
- [ ] Understands the requirements for their chosen project

### Kahoot Results — What to Watch For

Use the Kahoot leaderboard and per-question breakdown to spot patterns:
- If most students get a question wrong, that skill needs a quick refresher before moving on
- Students in the bottom third may benefit from Mad Libs (simpler) and a homework check-in
- Students at the top are ready for advanced project challenges

### Project Rubric — Mad Libs

| Criteria | Excellent (3) | Good (2) | Developing (1) |
|----------|--------------|----------|----------------|
| **Welcome Screen** | Creative, themed, personal | Has theme and borders | Basic or missing |
| **Inputs (quantity)** | 8+ inputs | 6 inputs | Fewer than 6 |
| **Prompt quality** | All prompts describe word type | Most prompts are clear | Generic "word 1, 2, 3" |
| **Story reveal** | All variables used in coherent story | Most variables used | Story incomplete |
| **f-string use** | Fluent, correct | Mostly correct | Errors or missing f |
| **Code quality** | Bug-free, well-organised | Minor issues | Major bugs |
| **Creativity** | Unique theme, unexpected story | Follows template closely | Minimal personalisation |

### Project Rubric — Joke Machine

| Criteria | Excellent (3) | Good (2) | Developing (1) |
|----------|--------------|----------|----------------|
| **Welcome Screen** | Creative, uses player name | Has borders and name | Basic or missing |
| **Jokes (quantity)** | 4+ jokes | 3 jokes | Fewer than 3 |
| **Punchline delivery** | All use pause + `.upper()` | Most use pause/upper | Punchlines not emphasised |
| **Personalisation** | Player name in 3+ places | Name in 1–2 places | No personalisation |
| **Rating system** | `int()` ratings + score card | Ratings collected but basic | Missing or broken |
| **Code quality** | Bug-free, well-organised | Minor issues | Major bugs |
| **Creativity** | Original jokes, themed set | Uses starter jokes | Minimal personalisation |

### Differentiation Strategies

#### For Students Who Need More Support

- **Suggest Mad Libs** — it has slightly fewer moving parts (no `int()` required in the base version)
- Provide the full starter template already in Trinket — they only need to change the story and prompts
- Offer a check-in session before Week 9 for students who need help finishing
- Pair with a buddy who can help during homework

#### For Advanced Students

- **Mad Libs:** Use `int()` on the number input and add a calculation. Add a second story.
- **Joke Machine:** Add 5+ jokes. Create a "best joke" announcement. Add themed ASCII art.
- **Either project:** "How would you let the player CHOOSE which story/joke set to see?" — plant the seed for Term 2 if/else
- Challenge: design a program that combines BOTH (a Mad Libs joke — collect words, reveal them inside a joke)

---

## ⚠️ Common Pitfalls & Solutions

### Recap Phase Issues

| Issue | Solution |
|-------|----------|
| Students can't remember a skill | Give the answer quickly and move on — this is confidence building, not testing |
| Recap takes too long | Skip "Try It" challenges and go straight to Skills Checkpoint + quiz |
| Students don't engage with speed round | Make it competitive: "First person to shout the answer gets a point!" |
| Kahoot takes too long | Skip the last few questions or speed up the timer |

### Project Choice Issues

| Issue | Solution |
|-------|----------|
| Student can't decide | "Go with Mad Libs — it's a great choice. You can try Joke Machine at home." |
| Student wants to do both | "Pick one for today. You can build the other as a bonus project at home!" |
| One project is much more popular | That's fine — don't try to balance the numbers |
| Student wants a completely different project | "Let's stick with one of these two — they're designed to use your Term 1 skills perfectly." |

### Design Phase Issues

| Issue | Solution |
|-------|----------|
| Student has no story/joke ideas | Mad Libs: "What's your favourite movie?" Joke Machine: "Think of a 'Why did the...' joke or look up 'kid jokes'" |
| Design is too complex | "Keep it to 4–6 sentences / 3 jokes. Less is more — you can always add later." |
| Student skips design | "Paper first — that's not optional. You'll thank yourself when you start coding at home." |

### Homework Phase Issues (anticipate these)

| Issue | Solution to Share With Students |
|-------|-------------------------------|
| "I don't know how to start coding" | "Copy the starter code from the lesson. Replace the story/jokes with YOUR content." |
| f-string bugs | "Check for the `f` before every string that has `{variables}` in it." |
| NameError | "The variable name in your story must EXACTLY match what you used in `input()`." |
| Joke Machine ratings crash | "Make sure you wrapped `int()` around the rating `input()`." |

---

## 📊 Post-Lesson Reflection

### Key Questions

1. **Recap effectiveness:**
   - How did the class perform on the speed round?
   - What was the average quiz score? Any skills that many students struggled with?
   - Did the Skills Checkpoint "aha moment" land?

2. **Project choice split:**
   - How many students chose Mad Libs vs Joke Machine?
   - Did the split seem natural or did students follow friends?

3. **Design quality:**
   - Did students produce usable paper designs?
   - Who might struggle to build from their design at home?

4. **Showcase readiness:**
   - Who is likely to complete on their own?
   - Who needs a check-in or buddy system before Week 9?

### Reflection Template

```
Date: ____________
Students Present: ____________

Recap Speed Round:
- Class energy level (1-5): ___
- Skills that needed extra review: ___

Kahoot Results:
- Top scorer: ___
- Skills that had low accuracy: ___

Project Choice Split:
- Mad Libs: ___
- Joke Machine: ___

Design Phase:
- Students with solid paper designs: ___%
- Students who may need support building: ___

Students needing check-in before Week 9 showcase:
-

What worked well in the recap:
-

Changes for next time:
-
```

---

## 🎭 Showcase Preparation (For Week 9)

### What to Tell Students Now

> "For the Week 9 Showcase, you'll present your project to the class. Here's what to prepare:
>
> - Finish your project on Trinket and test it until it runs perfectly
> - Practise your 1-sentence intro:
>   - Mad Libs: 'My game is a [theme] Mad Libs about...'
>   - Joke Machine: 'My Joke Machine is about [topic] and has [number] jokes'
> - Find a classmate who will be your 'player' during your demo
> - Think of ONE thing you're proud of
>
> The best presentations are the ones where the whole class gets involved!"

### Teacher Preparation for Week 9

1. **Test all student Trinket links** before the showcase
2. **Plan presentation order** — alternate between Mad Libs and Joke Machine to keep variety
3. **Prepare awards** — categories that work for both: Funniest Output, Most Creative, Best Welcome Screen, Most Improved, Best Use of Skills, etc.
4. **Prepare the Term 2 teaser snippet** — the if/else "choose a story" code
5. **Prepare the updated Term 1 skills checklist** — all skills including input() and int()
6. **Plan for both project types** — have a classmate ready to enter words for Mad Libs demos, and let the whole class participate in Joke Machine ratings

---

## 🔗 Additional Resources

### Word Type Reference (for Mad Libs students)

```
NOUNS (things): cat, pizza, rocket, banana, library, sock, explosion
VERBS (actions): jump, sneeze, calculate, wiggle, explode, sing, disappear
ADJECTIVES (descriptions): sparkly, enormous, confused, purple, wobbly, ancient
PLACES: the moon, a swimming pool, a sock drawer, behind the sofa, Antarctica
```

### Kid-Friendly Joke Sources (for Joke Machine students)

- Ask students to think of jokes they already know
- "Why did the ___ cross the road?" format is a classic starting point
- Computer/coding jokes work great for this class (the starter code has examples)
- Encourage original jokes — the sillier the better

### Parent Communication Template

```
Subject: Week 8 — Term 1 Recap + Final Project Choice!

Dear Parent/Guardian,

This week your child reviewed EVERYTHING they've learned in Term 1 — all 7
Python skills — through challenges and a quiz. They've come a long way!

They then chose their FINAL PROJECT to build:
[ ] Mad Libs Game   [ ] Joke Machine

What they need to do at home:
- BUILD their chosen project on Trinket using the starter code from the lesson
- Test it at least twice to make sure it runs perfectly
- Submit their Trinket link before next week

Next week: The Term 1 Showcase! Every student will present their
project to the class. Come along if you can — it's always a lot of fun.

If they get stuck, the lesson page has full starter code and a
requirements checklist. Encourage them to start with the starter code
and customise from there.

[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Prepare Skills Rally table and "Try It" challenge examples
- [ ] Prepare recap quiz (display, print, or both)
- [ ] Build and test your own Mad Libs demo
- [ ] Build and test your own Joke Machine demo
- [ ] Prepare both requirements checklists to display
- [ ] Set up paper design templates (optional)

### During Class

- [ ] Skills Speed Round — fast, fun, confidence-building (5 min)
- [ ] Skill-by-skill recap with code examples and challenges (15 min)
- [ ] Skills Checkpoint — run the all-in-one program live (5 min)
- [ ] Kahoot quiz — run the pre-made quiz (10 min)
- [ ] Demo BOTH projects with equal enthusiasm (5 min)
- [ ] Quick guidance on project differences (2 min)
- [ ] Students choose — note the split (1 min)
- [ ] Design phase on paper (10 min)
- [ ] Wrap-up — homework expectations + showcase preview (5 min)

### After Class

- [ ] Complete reflection notes (Kahoot results, project split, design quality)
- [ ] Identify students needing pre-showcase support
- [ ] Send parent communication (with project choice noted)
- [ ] Begin Week 9 showcase logistics
- [ ] Test student Trinket links as they come in

---

_KidsLearnAI Teacher Resources_
*www.kidslearnai.ca*
_For instructor support, contact: [instructor support email]_

---

_Remember: The goal of this lesson is twofold — students leave CONFIDENT in their skills and EXCITED about their project choice. The recap is the main event; the project is the exciting homework. "I know all of this!" and "I picked this!" are the feelings you're going for._
