# Term 4, Lesson 1: Review If/Else! ⚖️

## Teacher's Guide

**Course:** Term 4: More Choices  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 4 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson reviews and strengthens students' understanding of if/else statements from Term 3. While this is technically a review lesson, it's crucial for building confidence before introducing `elif` (else if) in Week 2. Students will practice with fresh, engaging examples that feel new while reinforcing core concepts.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Write if/else statements confidently
2. Use comparison operators correctly (>, <, ==, !=, >=, <=)
3. Handle both True and False cases appropriately
4. Create if/else programs that solve real-world problems
5. Feel prepared for learning `elif` next week

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts (should already be set up)
- Whiteboard for visual examples
- Optional: Stickers or small rewards for creative programs

### Pre-Lesson Preparation

1. **Review Term 3 concepts** — Refresh your understanding of what students learned about if/else
2. **Prepare demo Trinket** — Have examples ready that are DIFFERENT from Term 3
3. **Assess student readiness** — Note which students struggled with if/else in Term 3
4. **Prepare creative examples** — Game themes, real-world scenarios, fun challenges
5. **Send welcome message** — Welcome students to Term 4 and get them excited!

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity | Details |
| ---- | -------- | -------- | ------- |
| 0:00 | 5 min | Welcome to Term 4! | Celebrate, recap Term 3 |
| 0:05 | 5 min | Quick Review | Remind: What are if/else? |
| 0:10 | 10 min | New Examples Demo | Show fun, new if/else examples |
| 0:20 | 15 min | Guided Practice | Students code along |
| 0:35 | 15 min | Creative Challenges | Students build their own programs |
| 0:50 | 7 min | Wrap-up & Homework | Summary and assignment |
| 0:57 | 3 min | Q&A Buffer | Questions and preview |

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome to Term 4! (5 minutes)

#### Goals

- Celebrate students' progress
- Create excitement for Term 4
- Quick review of Term 3 accomplishments
- Set expectations for the term

#### Script/Talking Points

> "Welcome back to KidsLearnAI! I'm SO excited to see you all again! You've completed THREE TERMS—that's amazing! Give yourselves a huge round of applause!"

**Quick Recap:**

> "In Term 3, you learned something INCREDIBLE—you learned to make programs THINK! You learned if and else statements. Who remembers: what does an if statement do?"

Wait for: Checks if something is True, then does something

> "And what does else do?"

Wait for: Does something when if is False

> "Perfect! You remember everything! Now, Term 4 is going to be AMAZING. We're going to learn how to handle EVEN MORE choices—not just two, but three, four, five, or more! But first, let's make sure you're SUPER confident with if/else. Today we're going to review with fun new challenges!"

#### Teaching Tips

- Be enthusiastic—students may feel like review is "boring"
- Emphasize that this strengthens their foundation
- Preview that something "even better" is coming next week
- Pair students who need extra support with confident partners

---

### Part 2: Quick Review (5 minutes)

#### Goals

- Reinforce if/else structure
- Review comparison operators
- Ensure everyone remembers the basics

#### The Review

**Show on board/projector:**

```python
if condition:
    do this if True
else:
    do this if False
```

> "This is the structure. Simple, right? Python checks the condition. If it's True, it runs the first block. If it's False, it runs the else block."

**Quick Operator Review:**

Write on board:
- `>` greater than
- `<` less than  
- `==` equal to
- `!=` not equal
- `>=` greater than or equal
- `<=` less than or equal

> "These are our comparison operators. We use them to create True/False questions. Any questions before we dive into fun new examples?"

#### Teaching Tips

- Keep this SHORT—don't re-teach everything
- Gauge understanding with quick questions
- If students seem confident, move on quickly
- If students are confused, spend a bit more time

---

### Part 3: New Examples Demo (10 minutes)

#### Goals

- Show if/else with NEW, engaging examples
- Demonstrate practical applications
- Get students excited to code

#### Live Coding Demonstration

**Example 1: Game Character Health**

```python
health = 75

if health > 50:
    print("Your character is healthy! Keep going!")
else:
    print("Warning! Your character needs healing!")
```

> "Here's a fun one! Let's say we're building a game. We check the character's health. If it's above 50, they're healthy. Otherwise, they need healing!"

Change `health = 75` to `health = 30` and re-run.

> "See? The program responds differently! This is the power of if/else!"

**Example 2: Shopping Budget Checker**

```python
budget = 50
item_price = 35

if budget >= item_price:
    print("You can afford this item! Buy it!")
else:
    print("Sorry, you don't have enough money.")
```

> "This one is practical! What if you're building a shopping app? You check if the user has enough money. If yes, they can buy. If no, they can't!"

**Example 3: Score Achievements**

```python
score = 250

if score >= 200:
    print("🎉 Achievement Unlocked: High Scorer!")
else:
    print("Keep playing to unlock achievements!")
```

> "Games use if/else ALL THE TIME for achievements! If you reach a certain score, you get an achievement!"

#### Teaching Tips

- Use examples that feel NEW and exciting
- Change values and show how output changes
- Ask students to predict what will happen
- Keep energy high—this should be fun, not repetitive

---

### Part 4: Guided Practice (15 minutes)

#### Goals

- Students code along with you
- Build confidence through repetition
- Catch and correct mistakes early

#### Guided Exercises

**Exercise 1: Character Level Checker**

> "Let's code together! Open Trinket and let's build a level checker!"

Guide students through:

```python
level = 8

if level >= 10:
    print("You've reached level 10! New abilities unlocked!")
else:
    print(f"You're at level {level}. Keep playing to reach level 10!")
```

> "Type this with me. What do you think will print?"

Wait for students to run it, then discuss.

**Exercise 2: Birthday Age Checker**

> "Now let's try a different one. Let's check if someone is old enough for something!"

```python
age = 11
minimum_age = 13

if age >= minimum_age:
    print("You're old enough! Welcome!")
else:
    years_needed = minimum_age - age
    print(f"Sorry, you need to wait {years_needed} more year(s).")
```

Guide students step by step. If they get stuck, help immediately.

**Exercise 3: Score Comparison**

> "One more! Let's compare two player scores!"

```python
player1_score = 150
player2_score = 180

if player1_score > player2_score:
    print("Player 1 wins!")
else:
    print("Player 2 wins!")
```

#### Teacher Circulation

During this time:

- Walk around and check screens
- Help students who are stuck
- Celebrate correct code
- Encourage experimentation ("Try changing the values!")

---

### Part 5: Creative Challenges (15 minutes)

#### Goals

- Students apply if/else creatively
- Build problem-solving skills
- Prepare for homework

#### Student Freedom

> "Now it's YOUR turn! Create your own if/else program! It can be anything you want—a game, a helper tool, a quiz, anything!"

**Give options:**

- Game status checker (health, level, coins)
- Quiz answer checker
- Password strength checker
- Study time tracker
- Weather clothes helper
- Any creative idea!

**Circulate and support:**

- Help students brainstorm ideas
- Guide them if they're stuck
- Celebrate creative solutions
- Encourage them to test with different values

**After 10 minutes, ask for volunteers to share:**

> "Who wants to show us their program? Let's see what you created!"

Show 2-3 student programs. Celebrate creativity!

#### Teaching Tips

- Don't hover—give students space to create
- Encourage experimentation
- Accept "imperfect" code—focus on learning
- Use this time to identify students who need extra support

---

### Part 6: Wrap-up & Homework (7 minutes)

#### Review Key Points

> "What an amazing lesson! Let's review what we did today..."

Quick review questions:

1. "What does if do?" → Checks a condition, runs code if True
2. "What does else do?" → Runs code if if is False
3. "What's an example of a comparison operator?" → >, <, ==, etc.
4. "Who created something cool today?" → Celebrate!

#### Introduce Homework

> "For homework, you're going to create a 'Decision Maker Program' with at least 6 if/else statements! Each one should solve a different problem. Be creative!"

**Requirements:**

- At least 6 if/else statements
- Each solves a different problem
- Use variables
- Add comments
- Make it fun and creative!

**Share ideas:**
- Game character system
- Shopping helper
- Pet care assistant
- Adventure game starter

#### Preview Next Week

> "Next week, we're going to learn something AMAZING! Right now, if/else can only handle TWO choices—True or False. But what if you have THREE choices? Or FOUR? That's where `elif` comes in! It stands for 'else if' and it's going to make your programs even MORE powerful! Get excited!"

---

### Part 7: Q&A Buffer (3 minutes)

Use this time for:

- Student questions
- Helping anyone who fell behind
- Extra challenges for fast finishers
- Celebrating good work

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student write if/else statements correctly?
- [ ] Does student use comparison operators correctly?
- [ ] Can student predict what code will output?
- [ ] Is student confident and engaged?
- [ ] Can student create their own if/else programs?

### Homework Assessment: "My Decision Maker Program"

| Criteria | Exceeds (3) | Meets (2) | Developing (1) |
|----------|-------------|-----------|----------------|
| **Number of if/else** | 8+ statements | 6 statements | Fewer than 6 |
| **Variety** | Each solves unique problem | Different problems | Similar/repetitive |
| **Variables** | Uses variables effectively | Some variable use | No variables |
| **Creativity** | Highly creative, engaging | Creative theme | Basic/no theme |
| **Code runs** | No errors, well-formatted | Minor issues, runs | Major errors |
| **Comments** | Clear, helpful comments | Some comments | No comments |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide a template with blanks to fill in
- Pair with a peer "coding buddy"
- Reduce requirement to 4 if/else statements
- Focus on simple comparisons first
- Use visual aids (flowcharts) to show logic
- Provide step-by-step guidance during practice

#### For Advanced Students

- Challenge with more complex conditions
- Ask them to help peers
- Encourage creative, elaborate programs
- Preview `elif` concept ("What if you need 3 options?")
- Challenge with nested thinking (if inside if)
- Ask them to create a "tutorial" program for others

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem | Prevention | Solution |
|---------|------------|----------|
| Missing colons | Emphasize colons constantly | "if needs a colon! else needs a colon!" |
| Indentation errors | Show proper indentation clearly | "Everything inside if/else must be indented" |
| Using = instead of == | Emphasize == for comparisons | "One = stores, two == compares" |
| Forgetting else: colon | Show structure on board | "else: needs a colon too!" |

### Conceptual Issues

| Problem | Signs | Solution |
|---------|-------|----------|
| Confused about when to use if/else | Doesn't know what problems to solve | "If you have two outcomes, use if/else" |
| Doesn't test both cases | Only tests True case | "Try making it False and see what happens!" |
| Doesn't understand condition | Can't create conditions | Review comparison operators again |
| Overwhelmed by choices | Stuck on creative challenge | Give specific options, not open-ended |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students remember if/else from Term 3?
   - Were the new examples engaging?
   - Did students create creative programs?

2. **What needs improvement?**
   - Any concepts that need more review?
   - Students who aren't ready for `elif` next week?
   - Examples that didn't work well?

3. **Individual student notes:**
   - Who excelled at creating if/else programs?
   - Who needs extra support before Week 2?
   - Who seems ready for `elif` challenge?

4. **Term 4 specific notes:**
   - Are students excited for `elif`?
   - Any concerns about readiness?
   - Creative program ideas to share next week?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

If/Else Confidence Level:
- High: _____
- Medium: _____
- Needs Support: _____

Key Observations:
-

Students Excelling:
-

Students Needing Support:
-

Adjustments for Week 2 (elif):
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Python if/else documentation** (for reference)
- **Visual flowchart tools** (to show logic visually)
- **Common if/else patterns** (to share with students)

### For Students (Share with Parents)

- **Practice challenges:** Create if/else programs at home
- **Real-world applications:** Find if/else in apps/games they use
- **Coding games:** Scratch, Code.org (reinforces if/else concepts)

### Parent Communication Template

```
Subject: Term 4 Has Begun - Review If/Else! ⚖️

Dear Parent/Guardian,

Welcome to Term 4: More Choices!

Today we reviewed if/else statements from Term 3 with fun new examples. Students practiced:
- Writing if/else statements
- Using comparison operators (>, <, ==, etc.)
- Creating decision-making programs
- Solving real-world problems with code

This week is about building confidence before we introduce "elif" (else if) next week, which will allow programs to handle even more choices!

Homework due by [date]:
"My Decision Maker Program" - a program with at least 6 if/else statements

How you can help:
- Ask them to explain what if/else does
- Challenge them: "Can you make a program that checks if I have enough money to buy something?"
- Encourage creativity in their homework projects

Next week preview: We'll learn "elif" to handle three, four, or more options!

Questions? Reply to this email!

Happy coding!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review Term 3 if/else concepts
- [ ] Prepare NEW demo examples (different from Term 3)
- [ ] Assess which students need extra support
- [ ] Prepare creative challenge ideas
- [ ] Welcome message sent for Term 4

### During Class

- [ ] Celebrated Term 4 start
- [ ] Quick review of if/else structure
- [ ] Demonstrated new, engaging examples
- [ ] Students coded along during guided practice
- [ ] Students created their own programs
- [ ] Shared student work (2-3 programs)
- [ ] Homework explained clearly
- [ ] Previewed `elif` for next week

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Identify students ready for `elif` challenge
- [ ] Send parent communication
- [ ] Review homework submissions as they come in
- [ ] Prepare for Week 2 (`elif` introduction)

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This review lesson is CRUCIAL for building confidence before introducing `elif`. Make sure students are comfortable with if/else—they'll need that foundation next week! Keep the energy high and make review feel exciting, not repetitive!_ ⚖️
