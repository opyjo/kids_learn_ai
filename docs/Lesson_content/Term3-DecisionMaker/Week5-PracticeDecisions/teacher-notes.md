# Term 3, Lesson 5: Practice Decisions! 🎯

## Teacher's Guide

**Course:** Term 3: Decision Maker  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 5 of 8

---

## 📋 Lesson Overview

### Purpose

This is a practice and application week. Students apply their if/else knowledge to build real-world decision-making programs like password checkers, age gates, and interactive games. This reinforces learning and prepares them for the term project.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Apply if/else to real-world problems
2. Build password checkers and age gates
3. Combine input() with if/else
4. Create interactive decision-making programs
5. Practice everything learned so far

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for problem-solving

### Pre-Lesson Preparation

1. **Review if/else concepts** — Ensure you're comfortable
2. **Prepare example programs** — Password checker, age gate, etc.
3. **Think of relatable problems** — Age-appropriate scenarios
4. **Prepare troubleshooting tips** — Common issues

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time  | Duration | Activity                       | Details                              |
| ----- | -------- | ------------------------------ | ------------------------------------ |
| 0:00  | 5 min    | Review & Introduction          | Quick review, introduce challenges    |
| 0:05  | 15 min   | Example Programs               | Build 2-3 programs together          |
| 0:20  | 30 min   | Hands-On Building              | Students build their own programs    |
| 0:50  | 7 min    | Share & Wrap-up                | Share programs, homework              |
| 0:57  | 3 min    | Q&A Buffer                     | Questions and preview                 |

---

## 📚 Detailed Teaching Guide

### Part 1: Review & Introduction (5 minutes)

#### Goals

- Quick review of if/else
- Build excitement about building programs
- Introduce challenges

#### Script/Talking Points

> "Welcome back! You've learned if and else statements. Today, we're going to PRACTICE everything and build REAL decision-making programs!"

**Quick Review:**
- "What does if do?" → Runs code if True
- "What does else do?" → Runs code if False
- "What do we use to get input?" → input()

> "Perfect! Now let's build programs!"

#### Teaching Tips

- Keep review brief
- Build excitement
- Emphasize practical applications

---

### Part 2: Example Programs (15 minutes)

#### Goals

- Build 2-3 example programs together
- Model the process
- Show practical applications

#### Live Coding: Password Checker

**Build together:**
```python
print("=== PASSWORD CHECKER ===")
password = input("Enter password: ")

if password == "secret123":
    print("Access granted!")
else:
    print("Access denied!")
```

**Test it:**
- Try correct password
- Try wrong password
- Show both cases work!

#### Live Coding: Age Gate

**Build together:**
```python
print("=== AGE GATE ===")
age_text = input("How old are you? ")
age = int(age_text)

if age >= 13:
    print("You are old enough!")
else:
    print("Sorry, you must be 13 or older.")
```

#### Teaching Tips

- Build together so everyone has working examples
- Test both cases
- Emphasize: "Now make your own!"

---

### Part 3: Hands-On Building (30 minutes)

#### Goals

- Students build their own programs
- Apply if/else to problems
- Get help as needed

#### Challenge Options

- Password checker
- Age gate
- Score checker
- Yes/No game
- Their own idea!

#### Teacher Circulation

During this time:
- Help students choose problems
- Guide through building
- Check syntax and indentation
- Celebrate working programs
- Help debug issues

---

### Part 4: Share & Wrap-up (7 minutes)

#### Goals

- Students share programs
- Celebrate success
- Introduce homework

#### Sharing

> "Who wants to share their program? Show us what it does!"

#### Introduce Homework

> "For homework, create a decision-making program with at least 3 if/else statements!"

#### Preview Next Week

> "Next week, we'll build interactive stories! Get ready!"

---

## 🤖 AI Activity: Teachable Machine Demo (5-10 minutes)

### What to Do

1. **Introduction** (1 min)
   > "You've been practicing if/else statements to make decisions. Did you know you can train AI to make decisions using the same if/else logic?"

2. **Teachable Machine Demo** (4-5 min)
   - Navigate to: teachablemachine.withgoogle.com
   - Explain: "This tool lets you train AI to recognize images using if/else logic!"
   - Show a simple example: Train it to recognize "cat" vs "dog"
   - Demonstrate: "If this is a cat, then show 'cat', else check for dog"
   - Point out: "It uses if/else statements just like you're learning!"

3. **Discussion** (2-3 min)
   - "How does Teachable Machine make decisions?"
   - "What's similar between this and your if/else code?"
   - "How do you think AI learns to recognize things?"

4. **Connection** (1 min)
   > "Teachable Machine uses if/else logic to make decisions - exactly like you're learning! When you write if/else statements, you're using the same decision-making structure that powers AI!"

### Discussion Questions

- "How does Teachable Machine decide if something is a cat or dog?"
- "What's similar between this and your if/else code?"
- "How do you think AI learns to recognize different things?"

### Teaching Tips

- If internet is unavailable, show a pre-recorded video of Teachable Machine
- Keep it simple - focus on "if/else = decision making"
- Connect to their code: "Your if/else statements work the same way!"
- If students want to try it, suggest they explore at home (with parent permission)
- Emphasize they're learning real AI concepts: "This is how AI makes decisions!"

### Alternative Activity (If No Internet)

- Discuss: "Who has used apps that recognize images or sounds?"
- Connect: "Those apps use if/else logic - 'if this is a cat, then...'"
- Emphasize: "You're learning the same decision-making structure that powers AI!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**
- [ ] Can student apply if/else?
- [ ] Can student combine input() with if/else?
- [ ] Does student test both cases?
- [ ] Is student building working programs?

### Homework Assessment

| Criteria                | Exceeds (3)                      | Meets (2)              | Developing (1)        |
| ----------------------- | -------------------------------- | ---------------------- | --------------------- |
| **Uses if/else**        | 5+ if/else blocks creatively    | 3+ if/else blocks      | Fewer than 3          |
| **Uses input()**        | Gets input effectively          | Uses input()           | Missing input()        |
| **Handles both cases**  | All handle True and False       | Most handle both       | Missing cases         |
| **Comments**            | Clear, helpful comments          | Some comments          | No comments           |
| **Code runs**           | No errors, works perfectly      | Minor issues, runs     | Major errors          |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide templates
- Start with simpler programs
- Focus on getting one working
- Pair with peer
- Reduce to 2 if/else blocks

#### For Advanced Students

- Challenge with complex programs
- Multiple if/else blocks
- Preview elif as bonus
- Help peers
- Create complex decision programs

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                     | Prevention                          | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Forgetting int()            | Remind during examples              | "Did you convert the input?"                  |
| Syntax errors               | Type slowly, check structure        | "Check: if, condition, :, indentation"        |
| Not testing both cases      | Emphasize testing                   | "Test with values that make it True AND False" |

### Conceptual Issues

| Problem                     | Signs                               | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Doesn't know what to build  | Stuck, not starting                 | "What problem do YOU want to solve?"          |
| Can't combine input/if/else | Overwhelmed                         | "Let's build it step by step"                 |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students build working programs?
   - Were they able to apply if/else?

2. **What needs improvement?**
   - Any concepts that need reinforcement?

3. **Individual student notes:**
   - Who built creative programs?
   - Who needs support?

4. **Term 3 specific notes:**
   - Are students ready for story building?
   - Any skills that need more practice?

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review if/else concepts
- [ ] Prepare example programs
- [ ] Think of relatable problems
- [ ] Prepare troubleshooting tips

### During Class

- [ ] Reviewed if/else
- [ ] Built example programs together
- [ ] Students built their own programs
- [ ] Shared and celebrated
- [ ] Homework explained

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Review homework
- [ ] Prepare for Week 6 (story choices)

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This is a practice week! Students should feel confident applying if/else to real problems. Celebrate every working program, guide them through building, and prepare them for story building next week!_ 🎯

