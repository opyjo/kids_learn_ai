# Term 2, Lesson 7: Project - My Calculator! 🧮

## Teacher's Guide

**Course:** Term 2: Math Wizard  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 7 of 8

---

## 📋 Lesson Overview

### Purpose

This is the term project week! Students will build a complete calculator program using all the skills they've learned this term. This is a culmination of their learning and a chance to create something they can be proud of. The project will be showcased next week.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Build a complete calculator program
2. Apply all skills learned this term
3. Create a polished, working program
4. Prepare for the Week 8 showcase

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for project requirements
- Optional: Example calculators for inspiration

### Pre-Lesson Preparation

1. **Review project requirements** — Know what's required vs bonus
2. **Prepare starter code** — Have template ready
3. **Think of extension ideas** — For advanced students
4. **Prepare troubleshooting tips** — Common issues students will face
5. **Plan showcase logistics** — How will students present next week?

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time  | Duration | Activity                       | Details                              |
| ----- | -------- | ------------------------------ | ------------------------------------ |
| 0:00  | 5 min    | Introduction & Excitement      | Build excitement, review requirements |
| 0:05  | 10 min   | Step-by-Step Building           | Build basic calculator together        |
| 0:15  | 35 min   | Independent Building Time       | Students build and personalize        |
| 0:50  | 7 min    | Testing & Polish                | Test calculators, fix bugs            |
| 0:57  | 3 min    | Wrap-up & Preview Showcase      | Celebrate, preview next week           |

---

## 📚 Detailed Teaching Guide

### Part 1: Introduction & Excitement (5 minutes)

#### Goals

- Build excitement about the project
- Review requirements clearly
- Set expectations

#### Script/Talking Points

> "Welcome to PROJECT WEEK! This is it—your big moment! Today, you're going to build your very own calculator program using EVERYTHING you've learned this term. This is something you can show to your family, your friends, everyone! I'm so excited to see what you create!"

**Review Requirements:**
Write on board:
- Welcome message
- Ask for two numbers
- Convert to numbers
- All 4 operations
- Display results
- Ending message
- No bugs!
- Comments

> "These are the must-haves. But you can add SO much more to make it yours!"

#### Teaching Tips

- Build excitement and confidence
- Make it clear what's required vs optional
- Emphasize: "This is YOUR project!"

---

### Part 2: Step-by-Step Building (10 minutes)

#### Goals

- Build basic calculator together
- Model the process
- Ensure everyone has a working start

#### Live Coding: Build Together

**Step 1: Welcome Screen**
```python
print("=" * 40)
print("     WELCOME TO MY CALCULATOR!")
print("=" * 40)
print("")
```

**Step 2: Get Numbers**
```python
num1_text = input("Enter your first number: ")
num2_text = input("Enter your second number: ")
```

**Step 3: Convert**
```python
num1 = int(num1_text)
num2 = int(num2_text)
```

**Step 4: Calculations**
```python
print("Here are your results:")
print("-" * 40)
print(num1, "+", num2, "=", num1 + num2)
print(num1, "-", num2, "=", num1 - num2)
print(num1, "×", num2, "=", num1 * num2)
print(num1, "÷", num2, "=", num1 / num2)
print("-" * 40)
```

**Step 5: Ending**
```python
print("Thanks for using My Calculator!")
print("=" * 40)
```

**Test it together:**
> "Let's test it! I'll enter 15 and 4... See? It works! Now it's YOUR turn to make it special!"

#### Teaching Tips

- Build together so everyone has a working start
- Test as you go
- Emphasize: "Now make it yours!"

---

### Part 3: Independent Building Time (35 minutes)

#### Goals

- Students build their calculators
- Add personal touches
- Get help as needed

#### What Students Should Do

1. **Start with the basic calculator** (from step-by-step)
2. **Test it** — Make sure it works!
3. **Add personal touches:**
   - Ask for user's name
   - Add emojis and decorations
   - Add more operations (exponents, modulo)
   - Improve formatting
4. **Test again** — With different numbers
5. **Fix any bugs** — Use Debug Dance!
6. **Polish it** — Make it look great!

#### Teacher Circulation

During this time:
- Help students who are stuck
- Encourage personalization
- Celebrate creative additions
- Help with bugs
- Challenge advanced students
- Ensure everyone has something working

#### Common Issues & Solutions

| Issue                    | Solution                                      |
| ------------------------ | --------------------------------------------- |
| Forgetting int()        | "Did you convert both numbers?"               |
| Not testing              | "Let's test it with some numbers!"            |
| Stuck on personalization | "What would make this special to you?"        |
| Bugs                     | "Let's use the Debug Dance!"                   |

---

### Part 4: Testing & Polish (7 minutes)

#### Goals

- Students test their calculators
- Fix any remaining bugs
- Polish the final product

#### Testing Checklist

Have students test with:
- Two positive numbers
- A big and small number
- Two small numbers
- Different combinations

#### Polish Tips

- Add decorative borders
- Use emojis
- Personalize messages
- Format output nicely
- Add comments

---

### Part 5: Wrap-up & Preview Showcase (3 minutes)

#### Celebrate

> "Look at what you built! These are REAL programs! Next week, you're going to show them off and earn your badge!"

#### Preview Next Week

> "Next week is the SHOWCASE! You'll present your calculator to the class, we'll celebrate all your hard work, and you'll earn your 'Python Beginner' badge! Get ready to show off your amazing work!"

---

## 🤖 AI Activity: Smart Calculator Ideas (5-10 minutes)

### What to Do

1. **Introduction** (1 min)
   > "You just built a calculator that follows exact rules. But what if your calculator could LEARN from how you use it? That's what AI-powered calculators do!"

2. **Brainstorming Activity** (4-5 min)
   - Ask: "What if your calculator could remember your favorite calculations?"
   - Brainstorm: "What if it suggested shortcuts based on what you calculate most?"
   - Discuss: "What if it could predict what you'll calculate next?"
   - Explain: "AI calculators can learn patterns and adapt - they use the same math you're learning, but they can get smarter!"

3. **Discussion** (2-3 min)
   - "What would make a calculator 'smart' or 'AI-powered'?"
   - "How would a calculator learn your patterns?"
   - "What's the difference between your calculator and an AI calculator?"

4. **Connection** (1 min)
   > "Your calculator follows exact rules - that's programming! AI calculators use the same math operations, but they can learn and adapt. You're learning the foundation that powers both regular and AI-powered calculators!"

### Discussion Questions

- "What would make a calculator 'smart'?"
- "How could a calculator learn your favorite calculations?"
- "What's the difference between a regular calculator and an AI calculator?"

### Teaching Tips

- Keep it creative and fun - this is brainstorming, not technical
- Use examples: "What if it remembered you always calculate tips?"
- Connect to their project: "Your calculator follows rules - AI can learn new rules!"
- If students ask technical questions, simplify: "AI can learn patterns, regular calculators can't"
- Emphasize they're learning the foundation: "Both use the same math you're learning!"

### Alternative Activity (If Short on Time)

- Quick discussion: "Who has used a calculator app that suggests shortcuts?"
- Connect: "That's AI learning your patterns!"
- Emphasize: "Your calculator follows exact rules - that's how programming works!"

---

## 🎯 Assessment & Differentiation

### Project Assessment: "My Calculator"

| Criteria                | Exceeds (3)                      | Meets (2)              | Developing (1)        |
| ----------------------- | -------------------------------- | ---------------------- | --------------------- |
| **Required features**   | All required + bonus features   | All required features  | Missing some required |
| **Code quality**        | Polished, well-formatted        | Works correctly        | Has errors            |
| **Personalization**    | Creative, unique touches         | Some personal touches  | Basic only            |
| **Testing**            | Thoroughly tested                | Tested once            | Not tested            |
| **Comments**           | Clear, helpful comments          | Some comments          | No comments           |
| **Code runs**          | No errors, perfect               | Minor issues           | Major errors          |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide more complete starter code
- Work one-on-one through steps
- Focus on getting required features working
- Reduce bonus expectations
- Pair with a peer
- Celebrate the working calculator!

#### For Advanced Students

- Challenge with menu system
- Add error handling
- Multiple operations
- More complex formatting
- Help peers
- Create "calculator collection"

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                     | Prevention                          | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Forgetting int()            | Remind during step-by-step          | "Did you convert both numbers?"               |
| Not testing                 | Emphasize testing                   | "Let's test it now!"                           |
| Too ambitious               | Start simple, then add              | "Get the basics working first!"                |

### Conceptual Issues

| Problem                     | Signs                               | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Overwhelmed                 | Stuck, not starting                 | "Let's build it together, step by step"       |
| Perfectionism               | Won't finish, keeps changing        | "Get it working first, then polish!"          |
| Comparison                 | Discouraged by others' work         | "Your calculator is YOURS! Be proud!"         |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students build working calculators?
   - Were they excited about the project?
   - Did they personalize their work?

2. **What needs improvement?**
   - Any concepts that needed reinforcement?
   - Common issues to address?

3. **Individual student notes:**
   - Who built amazing calculators?
   - Who needs help before showcase?

4. **Showcase preparation:**
   - Are calculators ready to present?
   - Any technical issues to fix?

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review project requirements
- [ ] Prepare starter code
- [ ] Think of extension ideas
- [ ] Prepare troubleshooting tips
- [ ] Plan showcase logistics

### During Class

- [ ] Built excitement about project
- [ ] Built basic calculator together
- [ ] Students built and personalized
- [ ] Tested and polished calculators
- [ ] Previewed showcase

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing help
- [ ] Prepare for Week 8 showcase
- [ ] Prepare badges/certificates
- [ ] Plan celebration activities

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This is a celebration of learning! Students should feel proud of what they've built. Focus on what they accomplished, not perfection. The showcase next week is about celebrating their journey, not comparing projects._ 🧮

