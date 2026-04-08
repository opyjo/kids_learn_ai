# Term 1, Week 8: Let's Build a Mad Libs Game! 🎭

## Teacher's Guide

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 8 of 9

---

## 📋 Lesson Overview

### Purpose

This is the project build lesson for Term 1. Students design and code a Mad Libs game — the ideal culminating project because it requires every skill taught so far (print, string multiplication, variables, f-strings, input()) but requires NO new concepts (no conditions, no loops). Every student can produce a working, genuinely fun game in one class session. The game also naturally encourages replaying: students run their code repeatedly with different silly words, which means they're executing code over and over without realising it. This lesson is about creation, ownership, and fun — the goal is that every student finishes class with something they're genuinely excited to show someone tonight.

### Learning Objectives

By the end of this lesson, students will have:

1. Understood what makes a game interactive and replayable
2. Planned a Mad Libs story on paper (design before code)
3. Used multiple `input()` calls to collect varied word types
4. Assembled a working 3-part game: welcome screen → collect words → reveal story
5. Combined all Term 1 skills into one complete, playable program

### Prerequisites

Students should have completed Lessons 1–7 covering:

- Print statements and patterns (Weeks 1–2)
- Variables (Week 3)
- String methods and f-strings (Weeks 4–5)
- Debugging (Week 6)
- input() basics (Week 6)
- int() and float() type conversion (Week 7)

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for the teacher demo and walk-through
- Paper and pencils for the design phase
- Timer for activity transitions
- Pre-built Mad Libs demo (teacher should prepare this before class)

### Pre-Lesson Preparation

1. **Build your own Mad Libs demo** — a complete, working example to run live at the start. Choose a funny theme (animals, space, school). Have it ready to run.
2. **Prepare the design phase worksheet** — a simple template where students write their story with blanks (optional but helpful)
3. **List word type prompts** — have examples of good prompts on screen during build time
4. **Plan the quick demo at the end** — identify 2-3 students who might be ready to share early
5. **Prepare a backup scaffold** — a partially completed template for students who are stuck

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity | Details |
|------|----------|----------|---------|
| 0:00 | 5 min | Hook — Live Mad Libs Demo | Class shouts words, teacher types, story revealed |
| 0:05 | 10 min | Game Design Phase | Students plan story on paper |
| 0:15 | 15 min | Code Structure Walk-through | Teacher demos all 3 parts live |
| 0:30 | 25 min | Build Time | Students code their game |
| 0:55 | 5 min | Quick Peek & Debug | 2–3 students demo, class helps |

---

## 📚 Detailed Teaching Guide

### Part 1: Hook — Live Mad Libs Demo (5 minutes)

#### Goals

- Generate instant excitement about what students are about to build
- Show — don't tell — what the finished game looks and feels like
- Get the class laughing together (this sets the energy for the whole lesson)

#### Script/Talking Points

> "Before we do ANYTHING today, I need your help.
>
> I'm going to ask you for some words. Don't ask why — just shout out the silliest answers you can think of."

**Ask the class (don't reveal the story context yet):**

1. "Someone shout a name — any name!"
2. "An animal. Weird ones are better."
3. "An action word — something you can DO."
4. "A place. Anywhere at all."
5. "A describing word."
6. "A number."

**Type their answers into your pre-built Mad Libs program as they shout them. Run it. Let the story reveal happen.**

The class will laugh. They always do.

> "That story is different every single time someone plays this game. YOU are going to build this today."

#### Teaching Tips

- Use genuine enthusiasm during the demo — your energy is contagious
- If the story doesn't land as funny as you hoped, play it up anyway: "Okay that was TERRIBLE — which means it worked perfectly!"
- Keep this under 5 minutes — the excitement should be a quick burst, not a long setup

---

### Part 2: Game Design Phase (10 minutes)

#### Goals

- Establish "design before code" as a habit
- Give students ownership over their own story and theme
- Reduce blank-page anxiety by having a plan before opening Trinket

#### Setup

> "Here's the rule for today: nobody opens Trinket for the next 10 minutes.
>
> You're going to be a game designer first. Programmers who design before they code write better programs — it's that simple.
>
> Grab paper. You have 10 minutes to:
> 1. Pick a theme
> 2. Write a short story (4–6 sentences)
> 3. Mark the blanks — each blank should have a label like __NOUN__ or __VERB__
> 4. List what you'll ask for (noun, verb, adjective, place, name, number...)"

**Display the theme options on screen:**

- 🚀 Space | 📚 School | 🐉 Fantasy | ⚽ Sports | 🍕 Food | 🐾 Animals

**Circulate during design:**

- Push students who are overthinking: "Write ANYTHING — you can change it later. Get words on paper."
- Help students who have no ideas: "Tell me your favourite movie. What happens in it? Let's make a Mad Libs from that."
- Remind everyone: stories should be 4–6 sentences with at least 6 blanks

**2-minute warning:**

> "Two minutes! You need a complete story on paper with all blanks labelled. Start counting your blanks — you need at least 6."

---

### Part 3: Code Structure Walk-through (15 minutes)

#### Goals

- Demo the 3-part structure students will build
- Show the template code live, not just on a slide
- Answer questions BEFORE students start building

#### The Three Parts (Display on Screen)

```
Part 1: Welcome Screen
Part 2: Collect the Words
Part 3: Reveal the Story
```

#### Part 1: Welcome Screen Demo

> "Every game needs a welcome screen. Yours should match your theme."

```python
print("🎭" * 20)
print("   WELCOME TO MAD LIBS!")
print("   Get ready for a silly story...")
print("🎭" * 20)
print("")
```

**Run it. Show the output.**

> "Simple, clean, themed. Students doing space: use 🚀. Students doing food: use 🍕. Make the emoji match your story!"

---

#### Part 2: Collect the Words Demo

> "Now ask the player for their words. Here's the most important rule: write GOOD PROMPTS. Tell the player what TYPE of word to enter."

```python
name      = input("Enter a person's name: ")
animal    = input("Enter an animal: ")
verb      = input("Enter an action word (verb): ")
place     = input("Enter a place: ")
adjective = input("Enter a describing word: ")
number    = input("Enter a number: ")
```

> "Notice: 'Enter an action word (verb)' is much better than 'Enter word 3'. The player knows what to type, and that makes them give you funnier, more specific words."

**Quick pair discussion (30 seconds):**

> "Look at your design page. What 6 word types will you ask for? Turn to your neighbour and read them out."

---

#### Part 3: Reveal the Story Demo

> "This is the fun part. You have all the words in variables — now use f-strings to put them in your story."

```python
print("")
print("=" * 30)
print("🌟 YOUR STORY 🌟")
print("=" * 30)
print("")
print(f"One {adjective} morning, {name} woke up to find a {animal}")
print(f"sitting in their kitchen in {place}.")
print(f"Without hesitating, they decided to {verb} it!")
print(f"It took exactly {number} minutes. The end!")
print("")
print("😂" * 10)
```

**Run it. Enter silly test words. Let the class laugh.**

> "Notice every variable from Part 2 appears somewhere in the story. That's a requirement: every word you collect MUST appear in the story. No unused variables!"

#### Questions Before Build Time

> "Questions before you start?"

**Common questions and answers:**

- "Can I ask for more than 6 words?" → "Absolutely — more inputs usually means funnier stories!"
- "Can my story be longer?" → "Yes! More sentences, more variables, more laughs."
- "What if my story doesn't make sense?" → "That's actually perfect for Mad Libs — the less sense, the funnier!"
- "Can I use numbers in the story?" → "Yes! And if you want to use int() on the number and do a calculation in the story, that's a bonus challenge."

---

### Part 4: Build Time (25 minutes)

#### Goals

- Students build their own complete Mad Libs game
- Teacher circulates and provides targeted support
- Peer testing happens naturally (students run each other's games)

#### Setup Build Time

> "It's BUILD TIME! Open Trinket. You have 25 minutes to build your Mad Libs game.
>
> You need:
> 1. ✅ Welcome screen matching your theme
> 2. ✅ At least 6 input() calls with clear prompts
> 3. ✅ Full story revealed with f-strings
> 4. ✅ Every word appears in the story
>
> Use your design page as your guide. When you have a working version, TEST IT by asking a classmate to type in words. If they laugh, you're done!"

#### Circulation Strategy

**First 8 minutes — Getting Started:**

- Check all students have their welcome screen running
- Watch for students staring at blank screens: "Show me your design page. Let's translate your first sentence to code."
- Ensure everyone has the basic 3-part structure in comments at minimum

**Middle 10 minutes — Building the Story:**

- Help students with f-string syntax: the most common error is forgetting the `f` prefix
- Check that variable names in the story match variable names in the collection section
- Encourage students who finish: "Run it with a classmate right now. Get them to give you the weirdest words possible."

**Last 7 minutes — Polish and Test:**

- "If your game runs, test it twice with different words."
- Help students who are close but have NameErrors: almost always a variable name mismatch
- Remind: "Make sure EVERY input variable appears in your story"

#### Common Issues During Build Time

| Issue | Quick Fix |
|-------|-----------|
| "I don't know how to start" | "Type your welcome screen first — just the print statements. We'll add the rest." |
| f-string variable doesn't show | Check for missing `f` before the string: `f"text {var}"` |
| NameError in story | "Find the variable in your collection section — copy the name EXACTLY" |
| Wrong number of inputs | "Count your input() calls. Count your story blanks. They should be equal." |
| Story text inside the variable name | "The {braces} go around the variable name, not the prompt text" |
| Finished early | "Test it with a classmate. Then add a second story — that's Bonus 2!" |

#### Peer Testing Encouragement

> "As soon as your game runs, you MUST test it with a real person. Turn to whoever is next to you and run your game. They type the words, you watch their reaction. If they don't at least smile, your prompts might need work — make them more specific."

---

### Part 5: Quick Peek & Debug (5 minutes)

#### Goals

- Celebrate progress
- Surface the most common remaining bugs
- Build anticipation for the Lesson 9 Showcase

#### Quick Share

> "Who has a working game they want to show the class right now?"

**Select 2–3 students:**

- One who has a complete, working game (show success)
- One who encountered an interesting bug they fixed (show debugging)
- One whose story turned out unexpectedly funny (show payoff)

**For each share:**

- Let a classmate type words
- Let the story reveal
- Lead applause after

#### Common Bug Fix (1 minute)

> "I spotted one bug showing up a lot today. Let me fix it..."

**Address the #1 most common error you observed during build time.** (Usually: forgetting the `f` in an f-string, or a variable name mismatch.)

#### Showcase Preview

> "Next week is the Term 1 Game Showcase! You'll run your Mad Libs game LIVE in front of the class — with a classmate entering the words. The class gets to shout suggestions!
>
> Finish it for homework. Test it until it's perfect. And think of one thing you want to say about it.
>
> I'm genuinely excited to see what everyone's been building."

---

## 🤖 AI Activity: Structure vs Content (5 minutes, if time permits)

### What to Do

1. **Introduction** (1 min)
   > "Your Mad Libs game separates two things: the STRUCTURE of the story (the template) and the CONTENT (the words that go in). They're kept separate until the reveal."

2. **AI Connection** (3 min)
   > "Guess what — AI language models work exactly the same way. ChatGPT doesn't memorise sentences. It learns the PATTERNS of language — what kinds of words go together, what makes a sentence make sense. Then when you ask it to write something, it fills in those patterns with content."
   >
   > "Your f-string template is the pattern. The variables are the content. AI does this at a massive scale, but the core idea is the same."

3. **Discussion** (1 min)
   - "What would happen if AI learned the wrong patterns?"
   - "How is your game similar to how AI generates text?"

---

## 🎯 Assessment & Differentiation

### Formative Assessment (During Build Time)

**Observe each student for:**

- [ ] Designed story on paper before coding
- [ ] Welcome screen is themed and uses string multiplication
- [ ] Has at least 6 input() calls with descriptive prompts
- [ ] Uses f-strings correctly in the story reveal
- [ ] All collected variables appear in the story
- [ ] Can test and debug their own game

### Project Rubric

| Criteria | Excellent (3) | Good (2) | Developing (1) |
|----------|--------------|----------|----------------|
| **Welcome Screen** | Creative, themed, personal | Has theme and borders | Basic or missing |
| **Inputs (quantity)** | 8+ inputs | 6 inputs | Fewer than 6 |
| **Prompt quality** | All prompts describe word type | Most prompts are clear | Generic "word 1, 2, 3" |
| **Story reveal** | All variables used in coherent story | Most variables used | Story incomplete |
| **f-string use** | Fluent, correct | Mostly correct | Errors or missing f |
| **Code quality** | Bug-free, well-organised | Minor issues | Major bugs |
| **Creativity** | Unique theme, unexpected story | Follows template | Minimal personalisation |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide the full starter template already in Trinket — they only need to change the story and prompts
- Suggest the default space/school/animal theme rather than inventing their own
- Focus on getting 4 inputs and 4 story lines working before adding more
- Pair with a stronger student for the testing phase

#### For Advanced Students

- Challenge: Use `int()` on the number input and add a calculation to the story (Bonus 1)
- Challenge: Add a second complete story with a different theme (Bonus 2)
- Challenge: Design a 3-story "choose-your-own-theme" game with a print() menu showing options (foreshadows if/else)
- Ask: "How would you make the player CHOOSE which story to play?" — plant the seed for Term 2 if/else

---

## ⚠️ Common Pitfalls & Solutions

### Design Phase Issues

| Issue | Solution |
|-------|----------|
| Student has no story idea | Prompt with: "What's your favourite movie/game? What happens? That's your story." |
| Story too complex (multiple pages) | "Keep it to 4–6 sentences. Less is more." |
| Student skips design phase | "Close Trinket. Paper first — that's not optional today." |
| Story has too few blanks | "Each input() needs a home in the story. Aim for 6 blanks minimum." |

### Build Phase Issues

| Issue | Solution |
|-------|----------|
| NameError — variable not defined | "Check the spelling in both sections — copy-paste if needed" |
| f-string prints `{name}` literally | "Add the `f` before the quote: `f\"Hello {name}\"`" |
| Story section runs but prints wrong text | "Check each f-string — every {variable} must match a collected input name exactly" |
| Game won't run at all | "Run just the welcome screen by itself. Add one section at a time." |
| Student wants to use int() but number causes error | "If you're using int(), make sure the player types a number, not a word. Add a hint in the prompt." |

### Time Management Issues

| Issue | Solution |
|-------|----------|
| Design phase taking too long | "You have 2 minutes — write a story and label the blanks. It doesn't have to be perfect." |
| Student stuck on welcome screen design | "Make it look great AFTER it works. Code the story first." |
| Student not testing with a real person | "Stop — turn to your neighbour RIGHT NOW and run your game." |

---

## 📊 Post-Lesson Reflection

### Key Questions

1. **Completion status:**
   - How many students have a working game?
   - How many need significant work before Lesson 9?
   - Who might need a pre-showcase check-in?

2. **Skill application:**
   - Are students using f-strings correctly and fluently?
   - Did students use good prompt design (descriptive word types)?
   - Did any students attempt the int() bonus challenge?

3. **Showcase readiness:**
   - Which students are ready to go first and set a strong example?
   - Which students need encouragement to complete the homework?

### Reflection Template

```
Date: ____________
Students Present: ____________

Completion by end of class (estimate %):
- Welcome screen: ___%
- 6+ inputs with good prompts: ___%
- Full story working: ___%

Students needing support before Lesson 9 showcase:
-

Creative highlights (unusual themes, great prompts, funny stories):
-

Most common bug observed:
-

Changes for next time:
-
```

---

## 🎭 Showcase Preparation (For Lesson 9)

### What to Tell Students Now

> "For the Lesson 9 showcase, you'll present your Mad Libs game to the class. Here's what to prepare:
>
> - Finish your game and test it until it runs perfectly
> - Practise your 1-sentence intro: 'My game is a [theme] Mad Libs about...'
> - Find a classmate who will be your 'player' during your demo — they'll type the words while you describe the game
> - Think of ONE thing you're proud of
>
> The best presentations are the ones where the class gets to shout out silly words!"

### Teacher Preparation for Lesson 9

1. **Test all student Trinket links** before the showcase
2. **Plan presentation order** — volunteers first, then strategic ordering
3. **Prepare awards** — same categories work well: Funniest Story, Most Creative Theme, Best Prompts, Most Improved, etc.
4. **Prepare the Term 2 teaser snippet** — the if/else "choose a story" code
5. **Prepare the updated Term 1 skills checklist** — 14 items now including input() and int()

---

## 🔗 Additional Resources

### Word Type Reference (for students who need it)

```
NOUNS (things): cat, pizza, rocket, banana, library, sock, explosion
VERBS (actions): jump, sneeze, calculate, wiggle, explode, sing, disappear
ADJECTIVES (descriptions): sparkly, enormous, confused, purple, wobbly, ancient
PLACES: the moon, a swimming pool, a sock drawer, behind the sofa, Antarctica
```

### Parent Communication Template

```
Subject: Week 8 — Your Child is Building Their First Game!

Dear Parent/Guardian,

This week marks a major milestone — your child started building their FIRST
complete Python game: a Mad Libs Adventure!

What they built:
- A 3-part interactive game: welcome screen, word collection, story reveal
- Using everything learned in Term 1 (print, variables, input(), f-strings)
- A game that produces a unique, funny story every time it's played

Homework:
Your child needs to COMPLETE and POLISH their Mad Libs game before the
Week 9 Game Showcase. Ask them to run their game for you tonight — YOU
type in the words, and see what story you get!

Next week: The Term 1 Game Showcase! Every student will present their
game to the class. Come along if you can — it's always a lot of fun.

[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Build and test your own Mad Libs demo
- [ ] Prepare the 3-part structure to display on screen
- [ ] Set up a simple design worksheet (optional)
- [ ] Plan for students who will need the scaffold template

### During Class

- [ ] Live demo with class shouting words — everyone laughs
- [ ] Design phase on paper (no Trinket for first 10 min)
- [ ] Code walk-through of all 3 parts
- [ ] Active build time with constant circulation
- [ ] Peer testing encouraged throughout
- [ ] Quick share at the end with real demos
- [ ] Showcase preview — expectations set

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing pre-showcase support
- [ ] Send parent communication
- [ ] Begin Lesson 9 showcase logistics
- [ ] Test student Trinket links as they come in

---

_KidsLearnAI Teacher Resources_
*www.kidslearnai.ca*
_For instructor support, contact: [instructor support email]_

---

_Remember: The goal of this lesson is that every student leaves with a program they're genuinely excited to show someone. "It's different every time!" is the reaction you're going for. If they want to run it again immediately to get a new story — you've nailed it._
