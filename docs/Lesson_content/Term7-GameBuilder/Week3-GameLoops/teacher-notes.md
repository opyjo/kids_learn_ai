# Term 7, Lesson 3: Game Loops 🎮

## Teacher's Guide

**Course:** Term 7: Game Builder  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson teaches students to create game loops—the fundamental structure that keeps games running until the player quits. This combines while loops with user input to create interactive, replayable games. This is a critical skill for game development.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Create game loops that keep playing
2. Use a variable to control when the game stops
3. Build games that ask "Play again?"
4. Create interactive game structures
5. Understand the foundation of game development

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing game loop structure

### Pre-Lesson Preparation

1. **Review game loops** — Understand the structure
2. **Prepare examples** — Have game loop examples ready
3. **Think about games** — Simple game ideas to demonstrate
4. **Prepare troubleshooting** — Common issues students will face

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                              |
| ---- | -------- | ---------------------------- | ------------------------------------ |
| 0:00 | 5 min    | Review & Hook                | Review break/continue, introduce games |
| 0:05 | 15 min   | Game Loop Basics             | Teach game loop structure            |
| 0:20 | 20 min   | Building Game Loops          | Students create game loops           |
| 0:40 | 15 min   | Practice & Enhancements       | Add features, practice               |
| 0:55 | 3 min    | Wrap-up & Homework           | Summary and assignment               |
| 0:58 | 2 min    | Q&A Buffer                    | Questions and preview                |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Hook (5 minutes)

#### Goals

- Review break and continue
- Build excitement about games
- Introduce game loops

#### Script/Talking Points

> "Welcome back! You've learned while loops and how to control them. But today, we're going to use them to create REAL games—games that keep playing until you quit! This is how every video game works!"

**Quick Review:**

> "Who can remind us: what does `break` do?"

Wait for: stops the loop

> "Perfect! Today we're using that to create game loops!"

#### Teaching Tips

- Build excitement about games
- Connect to real games they play
- Keep review brief

---

### Part 2: Game Loop Basics (15 minutes)

#### Goals

- Teach game loop structure
- Show the pattern
- Practice together

#### Live Coding Demonstration

**Example 1: Basic Game Loop**

```python
playing = True
while playing:
    print("🎮 Playing the game...")
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False
print("Thanks for playing!")
```

> "This is a game loop! It keeps playing until the user says 'no'. Let me break it down:"
- `playing = True` — Start with game running
- `while playing:` — Keep looping while playing is True
- Game code — What happens each round
- Ask to continue — Get user input
- `playing = False` — Stop the loop

**Example 2: With Round Counter**

```python
round_num = 0
playing = True
while playing:
    round_num = round_num + 1
    print(f"Round {round_num}")
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False
```

#### Practice Together

Have students create a basic game loop. Walk through it step by step.

#### Teaching Tips

- Emphasize the pattern
- Show both methods (variable vs break)
- Practice multiple examples
- Make it relatable to games they know

---

### Part 3: Building Game Loops (20 minutes)

#### Goals

- Students create their own game loops
- Build confidence
- Add features

#### Guided Practice

**Exercise 1: Basic Loop**

```python
playing = True
while playing:
    print("Game running!")
    answer = input("Continue? (yes/no): ")
    if answer == "no":
        playing = False
```

**Exercise 2: Menu Loop**

```python
while True:
    print("1. Play")
    print("2. Quit")
    choice = input("Choose: ")
    if choice == "2":
        break
```

**Exercise 3: Round Counter**

```python
rounds = 0
playing = True
while playing:
    rounds = rounds + 1
    print(f"Round {rounds}")
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False
```

#### Teacher Circulation

- Help with structure
- Check for infinite loops
- Encourage creativity
- Celebrate progress

---

### Part 4: Practice & Enhancements (15 minutes)

#### Goals

- Students enhance their game loops
- Add features
- Build complete structures

#### Enhancement Ideas

- Add round counting
- Add menus
- Add multiple options
- Add game content

#### Teaching Tips

- Encourage creativity
- Help with structure
- Celebrate enhancements

---

### Part 5: Wrap-up & Homework (3 minutes)

#### Review Key Points

> "What did we learn today?"

Quick review:
1. "What's a game loop?" → Loop that keeps game running
2. "How do we stop it?" → Set playing = False or use break
3. "Why are they important?" → Foundation of all games

#### Introduce Homework

> "For homework, create a game loop that asks 'Play again?' and continues until the user says 'no'!"

---

### Part 6: Q&A Buffer (2 minutes)

Use this time for questions and clarifications.

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student create a game loop?
- [ ] Does student understand the structure?
- [ ] Can student stop the loop correctly?
- [ ] Does student add features?
- [ ] Is student engaged and creative?

### Homework Assessment: "My Game Loop Program"

| Criteria              | Exceeds (3)                    | Meets (2)                  | Developing (1)           |
| --------------------- | ------------------------------ | -------------------------- | ------------------------ |
| **Game loop**         | Creative, well-structured      | Correct structure          | Incorrect or missing     |
| **Play again?**       | Works correctly, enhanced      | Works correctly            | Doesn't work             |
| **Variable control**  | Uses variable correctly        | Uses variable              | Doesn't use variable     |
| **Comments**          | Clear, helpful comments        | Some comments              | No comments              |
| **Code runs**         | No errors, well-formatted     | Minor issues, runs         | Major errors             |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide template with blanks
- Focus on basic loop first
- Use simple examples
- Pair with peer
- Reduce requirements

#### For Advanced Students

- Challenge with menus
- Add round counting
- Create multiple game options
- Have them help peers
- Preview random numbers (next week)

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                  | Prevention                    | Solution                                    |
| ------------------------ | ----------------------------- | ------------------------------------------- |
| Infinite loops           | Always show way out           | "Make sure you can stop the loop!"         |
| Wrong variable usage     | Emphasize pattern             | "Use playing = True, then set to False"    |
| Input handling           | Show correct comparison       | "Use answer == 'no' not answer = 'no'"      |

### Conceptual Issues

| Problem                  | Signs                          | Solution                                    |
| ------------------------ | ------------------------------ | ------------------------------------------- |
| Doesn't understand structure | Confused by game loop        | Break it down step by step                  |
| Can't see the pattern    | Struggles to create           | Provide template, show examples             |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand game loops?
   - Were they able to create loops?
   - Did they get excited about games?

2. **What needs improvement?**
   - Any concepts that were unclear?
   - Common mistakes to address?
   - Are students ready for random numbers?

3. **Individual student notes:**
   - Who mastered game loops quickly?
   - Who needs more support?
   - Who's ready for enhancements?

4. **Term 7 specific notes:**
   - Are students ready for random numbers?
   - How did game loops engage them?
   - Any concerns about complexity?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Game Loop Understanding:
- Basic structure: ____ students got it
- Stopping loops: ____ students got it
- Adding features: ____ students got it

Common Mistakes:
-

Students Excelling:
-

Students Needing Support:
-

Adjustments for Week 4:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Game Loop Patterns:** Review structures
- **Game Development Basics:** Understand game loops
- **Interactive Examples:** Prepare demonstrations

### For Students (Share with Parents)

- **Practice Game Loops:** Create loops at home
- **Game Ideas:** Think about games to build
- **Game Prep:** Prepare for random numbers

### Parent Communication Template

```
Subject: Term 7 Week 3 - Game Loops! 🎮

Dear Parent/Guardian,

Your child created game loops today!

They can now:
- Create games that keep playing
- Use loops to make games interactive
- Build the foundation of game development

Key concepts:
- Game loops keep games running until player quits
- Use variables to control when games stop
- Foundation of all interactive games!

Homework due by [date]:
Create a game loop that asks "Play again?"

How you can help:
- Ask: "Can you show me a game that keeps playing?"
- Challenge: "What about tracking rounds?"
- Celebrate: They're building real game structures!

Next week: Random numbers - making games unpredictable!

Questions? Reply to this email!

Happy gaming!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review game loop structure
- [ ] Prepare examples
- [ ] Think about game ideas
- [ ] Prepare troubleshooting
- [ ] Test Trinket access

### During Class

- [ ] Reviewed break/continue
- [ ] Taught game loop basics
- [ ] Students created game loops
- [ ] Students enhanced loops
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Prepare for Week 4 (random numbers)
- [ ] Review homework as it comes in

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: Game loops are the foundation of interactive games. Students who master this are ready to add random numbers and build complete games. Make it fun and engaging!_ 🎮

