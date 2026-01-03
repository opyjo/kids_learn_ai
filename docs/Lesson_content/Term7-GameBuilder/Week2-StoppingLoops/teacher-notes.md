# Term 7, Lesson 2: Stopping Loops 🛑

## Teacher's Guide

**Course:** Term 7: Game Builder  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson teaches students how to control while loops using `break` and `continue`. These are essential tools for creating safe, controlled loops, especially for game development. Students learn to stop loops immediately and skip iterations, which are critical skills for building interactive games.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Use `break` to stop a loop immediately
2. Use `continue` to skip to the next iteration
3. Understand when to use break vs continue
4. Create safer loops that can be stopped
5. Build loops that respond to user input

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for showing control flow

### Pre-Lesson Preparation

1. **Review break and continue** — Ensure you understand both
2. **Prepare examples** — Have break and continue examples ready
3. **Think about safety** — Emphasize avoiding infinite loops
4. **Prepare menu examples** — Show practical applications

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                              |
| ---- | -------- | ---------------------------- | ------------------------------------ |
| 0:00 | 5 min    | Review & Hook                | Review while loops, introduce control |
| 0:05 | 15 min   | Using break                  | Teach break to stop loops            |
| 0:20 | 15 min   | Using continue               | Teach continue to skip iterations     |
| 0:35 | 15 min   | Practice & Combining         | Students practice, combine both      |
| 0:50 | 7 min    | Wrap-up & Homework           | Summary and assignment               |
| 0:57 | 3 min    | Q&A Buffer                    | Questions and preview                |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Hook (5 minutes)

#### Goals

- Review while loops
- Introduce the need for more control
- Build excitement

#### Script/Talking Points

> "Welcome back! Last week, you learned while loops. But what if you want to stop a loop in the middle? Or skip certain iterations? Today, you're going to learn `break` and `continue`—two powerful tools that give you complete control!"

**Quick Review:**

> "Who can remind us: what's a while loop?"

Wait for: loops that continue while condition is True

> "Perfect! But what if I wanted to stop it in the middle? Or skip certain iterations? That's what we're learning today!"

#### Teaching Tips

- Keep review brief
- Build excitement about more control
- Emphasize safety

---

### Part 2: Using break (15 minutes)

#### Goals

- Teach `break` to stop loops
- Show practical examples
- Practice together

#### Live Coding Demonstration

**Example 1: Stop When User Says "quit"**

```python
while True:
    answer = input("Say 'quit' to stop: ")
    if answer == "quit":
        break  # Stop the loop!
    print("You said:", answer)
print("Loop stopped!")
```

> "See the `break`? When the user types 'quit', it immediately stops the loop, even though `while True` would normally run forever!"

**Example 2: Stop After Finding Something**

```python
count = 1
while count <= 10:
    print(count)
    if count == 5:
        break  # Stop at 5
    count = count + 1
```

> "This stops at 5, even though the condition says count <= 10. `break` overrides the condition!"

#### Practice Together

Have students create a loop that stops when they type "stop". Walk around and help.

#### Teaching Tips

- Emphasize that break stops immediately
- Show practical uses (menus, games)
- Practice multiple examples

---

### Part 3: Using continue (15 minutes)

#### Goals

- Teach `continue` to skip iterations
- Show practical examples
- Practice together

#### Demonstration: Continue

**Example 1: Skip Even Numbers**

```python
count = 0
while count < 10:
    count = count + 1
    if count % 2 == 0:
        continue  # Skip even numbers
    print(count)
```

> "See? When count is even, `continue` skips the print and goes to the next iteration. Only odd numbers print!"

**Example 2: Skip Multiples of 3**

```python
count = 0
while count < 20:
    count = count + 1
    if count % 3 == 0:
        continue
    print(count)
```

#### Practice Together

Have students create loops that skip certain numbers. Walk around and help.

#### Teaching Tips

- Emphasize that continue skips, doesn't stop
- Show the difference from break
- Practice multiple examples

---

### Part 4: Practice & Combining (15 minutes)

#### Goals

- Students practice both break and continue
- Combine them in examples
- Build confidence

#### Guided Practice

**Exercise 1: Menu with break**

```python
while True:
    print("1. Play")
    print("2. Score")
    print("3. Quit")
    choice = input("Choose: ")
    if choice == "3":
        break
    print("You chose:", choice)
```

**Exercise 2: Skip with continue**

```python
count = 0
while count < 10:
    count = count + 1
    if count % 3 == 0:
        continue
    print(count)
```

**Exercise 3: Combine both**

```python
round_num = 0
while True:
    round_num = round_num + 1
    choice = input(f"Round {round_num}: Play (p), Skip (s), Quit (q): ")
    if choice == "q":
        break
    elif choice == "s":
        continue
    print("Playing round", round_num)
```

#### Teacher Circulation

- Help with syntax
- Check for infinite loops
- Encourage creativity

---

### Part 5: Wrap-up & Homework (7 minutes)

#### Review Key Points

> "What did we learn today?"

Quick review:
1. "What does break do?" → Stops the loop immediately
2. "What does continue do?" → Skips to next iteration
3. "When to use break?" → When you want to stop
4. "When to use continue?" → When you want to skip

#### Introduce Homework

> "For homework, create a program that uses both break and continue. Show me your loop control mastery!"

---

### Part 6: Q&A Buffer (3 minutes)

Use this time for questions and clarifications.

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student use break correctly?
- [ ] Can student use continue correctly?
- [ ] Does student understand the difference?
- [ ] Can student avoid infinite loops?
- [ ] Can student create practical examples?

### Homework Assessment: "Loop Control Master"

| Criteria              | Exceeds (3)                    | Meets (2)                  | Developing (1)           |
| --------------------- | ------------------------------ | -------------------------- | ------------------------ |
| **Uses break**        | Creative, practical use        | Correct usage              | Incorrect or missing     |
| **Uses continue**     | Creative, practical use        | Correct usage              | Incorrect or missing     |
| **Skips multiples**   | Correct, maybe extra features  | Correct                    | Incorrect or missing     |
| **No infinite loops** | Safe, well-designed            | No infinite loops          | Has infinite loop risk   |
| **Comments**          | Clear, helpful comments        | Some comments              | No comments              |
| **Code runs**         | No errors, well-formatted     | Minor issues, runs         | Major errors             |

### Differentiation Strategies

#### For Students Who Need More Support

- Focus on break first (simpler)
- Provide templates
- Use simple examples
- Pair with peer
- Reduce to one control statement

#### For Advanced Students

- Challenge with complex conditions
- Ask them to create menu systems
- Have them help peers
- Preview game loops (next week)

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                  | Prevention                    | Solution                                    |
| ------------------------ | ----------------------------- | ------------------------------------------- |
| Confusing break/continue | Emphasize difference early    | "Break = stop, continue = skip"            |
| Infinite loops           | Always show way out           | "When using while True, always have break!"  |
| Wrong indentation        | Show clearly                  | "Break/continue must be indented inside if" |

### Conceptual Issues

| Problem                  | Signs                          | Solution                                    |
| ------------------------ | ------------------------------ | ------------------------------------------- |
| Doesn't understand difference | Confused by break vs continue | Use clear examples, show side by side       |
| Can't see when to use    | Doesn't know which to choose  | Give scenarios: "When would you use break?" |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students understand break?
   - Did they understand continue?
   - Were they able to use both?

2. **What needs improvement?**
   - Any concepts that were unclear?
   - Common mistakes to address?
   - Are students ready for game loops?

3. **Individual student notes:**
   - Who mastered both quickly?
   - Who needs more support?
   - Who's ready for game loops?

4. **Term 7 specific notes:**
   - Are students ready for game loops next week?
   - Any concerns about control flow?
   - How did the lesson go overall?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Loop Control Understanding:
- break: ____ students got it
- continue: ____ students got it
- Difference: ____ students got it

Common Mistakes:
-

Students Excelling:
-

Students Needing Support:
-

Adjustments for Week 3:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Break and Continue Guide:** Review concepts
- **Loop Control Examples:** Practical applications
- **Safety Best Practices:** Avoiding infinite loops

### For Students (Share with Parents)

- **Practice Loop Control:** Try break and continue
- **Menu Creation:** Create menus that loop
- **Game Prep:** Think about game loops

### Parent Communication Template

```
Subject: Term 7 Week 2 - Stopping Loops! 🛑

Dear Parent/Guardian,

Your child learned to control loops today!

They can now:
- Use break to stop loops immediately
- Use continue to skip iterations
- Create safer, more controlled loops

Key concepts:
- `break` stops the loop completely
- `continue` skips to the next iteration
- Essential for creating game loops!

Homework due by [date]:
Create a program using both break and continue

How you can help:
- Ask: "Can you show me a loop that stops when you type 'quit'?"
- Challenge: "What about skipping even numbers?"
- Safety: Remind them to always have a way out!

Next week: Game loops - creating games that keep playing!

Questions? Reply to this email!

Happy coding!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review break and continue
- [ ] Prepare examples
- [ ] Think about safety
- [ ] Prepare menu examples
- [ ] Test Trinket access

### During Class

- [ ] Reviewed while loops
- [ ] Taught break
- [ ] Taught continue
- [ ] Students practiced
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Prepare for Week 3 (game loops)
- [ ] Review homework as it comes in

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: Break and continue are powerful tools that make loops safe and controllable. Emphasize the difference and when to use each. Students who master this are ready for game loops next week!_ 🛑

