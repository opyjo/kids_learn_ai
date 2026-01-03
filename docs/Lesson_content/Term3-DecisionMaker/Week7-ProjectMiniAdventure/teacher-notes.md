# Term 3, Lesson 7: Project - Mini Adventure! 🎮

## Teacher's Guide

**Course:** Term 3: Decision Maker  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 7 of 8

---

## 📋 Lesson Overview

### Purpose

This is the term project week! Students will build a complete interactive adventure game using all the skills they've learned this term. This is a culmination of their learning and a chance to create something they can be proud of. The project will be showcased next week.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Build a complete interactive adventure game
2. Apply all skills learned this term
3. Create a polished, working program
4. Prepare for the Week 8 showcase

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Trinket accounts
- Whiteboard for project requirements
- Optional: Example adventures for inspiration

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
| 0:05  | 10 min   | Step-by-Step Building           | Build basic adventure together        |
| 0:15  | 35 min   | Independent Building Time       | Students build and personalize        |
| 0:50  | 7 min    | Testing & Polish                | Test adventures, fix bugs            |
| 0:57  | 3 min    | Wrap-up & Preview Showcase      | Celebrate, preview next week          |

---

## 📚 Detailed Teaching Guide

### Part 1: Introduction & Excitement (5 minutes)

#### Goals

- Build excitement about the project
- Review requirements clearly
- Set expectations

#### Script/Talking Points

> "Welcome to PROJECT WEEK! This is it—your big moment! Today, you're going to build your very own interactive adventure game using EVERYTHING you've learned this term. This is something you can show to your family, your friends, everyone! I'm so excited to see what you create!"

**Review Requirements:**
Write on board:
- Welcome message
- Story beginning
- At least 2 choices
- If/else for each choice
- At least 2-3 endings
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

- Build basic adventure together
- Model the process
- Ensure everyone has a working start

#### Live Coding: Build Together

**Step 1: Welcome Screen**
```python
print("=" * 40)
print("     WELCOME TO MY ADVENTURE!")
print("=" * 40)
print("")
```

**Step 2: Story Beginning**
```python
print("You're walking through a forest and find a door in a tree.")
print("")
```

**Step 3: First Choice**
```python
choice1 = input("Do you want to open it? (yes/no): ")
```

**Step 4: Handle Choice**
```python
if choice1 == "yes":
    print("You open the door and find... a tiny dragon!")
    # Add more here!
else:
    print("You walk away.")
    # Add more here!
```

**Test it together:**
> "Let's test it! I'll type 'yes'... See? It works! Now it's YOUR turn to make it special!"

#### Teaching Tips

- Build together so everyone has a working start
- Test as you go
- Emphasize: "Now make it yours!"

---

### Part 3: Independent Building Time (35 minutes)

#### Goals

- Students build their adventures
- Add personal touches
- Get help as needed

#### What Students Should Do

1. **Start with the basic adventure** (from step-by-step)
2. **Test it** — Make sure it works!
3. **Add personal touches:**
   - More choices
   - More endings
   - Ask for player's name
   - Add emojis and decorations
   - Improve the story
4. **Test again** — With different choices
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
| Forgetting if/else       | "Did you use if/else for each choice?"        |
| Not testing              | "Let's test it with different choices!"       |
| Stuck on story           | "What adventure do YOU want to tell?"         |
| Bugs                     | "Let's use the Debug Dance!"                  |

---

### Part 4: Testing & Polish (7 minutes)

#### Goals

- Students test their adventures
- Fix any remaining bugs
- Polish the final product

#### Testing Checklist

Have students test with:
- All possible choices (yes/no for each)
- All different paths
- All endings
- Make sure it looks good!

#### Polish Tips

- Add decorative borders
- Use emojis
- Personalize messages
- Format output nicely
- Add comments

---

### Part 5: Wrap-up & Preview Showcase (3 minutes)

#### Celebrate

> "Look at what you built! These are REAL interactive games! Next week, you're going to show them off and celebrate all your hard work!"

#### Preview Next Week

> "Next week is the SHOWCASE! You'll present your adventure game to the class, we'll celebrate all your hard work, and you'll share your amazing stories! Get ready to show off your amazing work!"

---

## 🎯 Assessment & Differentiation

### Project Assessment: "My Mini Adventure"

| Criteria                | Exceeds (3)                      | Meets (2)              | Developing (1)        |
| ----------------------- | -------------------------------- | ---------------------- | --------------------- |
| **Required features**   | All required + bonus features   | All required features  | Missing some required |
| **Number of choices**   | 4+ choices, creative             | 2+ choices              | Fewer than 2          |
| **Number of endings**   | 4+ different endings             | 2-3 endings             | Only 1 ending         |
| **Uses if/else**        | All choices use if/else correctly | Most use if/else      | Missing if/else       |
| **Story quality**       | Creative, engaging story         | Clear story             | Unclear story         |
| **Code quality**        | Polished, well-formatted        | Works correctly         | Has errors            |
| **Testing**             | Thoroughly tested all paths     | Tested once             | Not tested            |
| **Comments**            | Clear, helpful comments          | Some comments          | No comments           |
| **Code runs**           | No errors, perfect               | Minor issues            | Major errors          |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide more complete starter code
- Work one-on-one through steps
- Focus on getting required features working
- Reduce bonus expectations
- Pair with a peer
- Celebrate the working adventure!

#### For Advanced Students

- Challenge with multiple nested choices
- More complex story branches
- Multiple endings
- Help peers
- Create "adventure collection"

---

## ⚠️ Common Pitfalls & Solutions

### Technical Issues

| Problem                     | Prevention                          | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Forgetting if/else          | Remind during step-by-step          | "Did you use if/else for each choice?"        |
| Not testing                 | Emphasize testing                   | "Let's test it now!"                           |
| Too ambitious               | Start simple, then add              | "Get the basics working first!"                |

### Conceptual Issues

| Problem                     | Signs                               | Solution                                      |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| Overwhelmed                 | Stuck, not starting                 | "Let's build it together, step by step"       |
| Perfectionism               | Won't finish, keeps changing        | "Get it working first, then polish!"          |
| Comparison                 | Discouraged by others' work         | "Your adventure is YOURS! Be proud!"          |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**
   - Did students build working adventures?
   - Were they excited about the project?
   - Did they personalize their work?

2. **What needs improvement?**
   - Any concepts that needed reinforcement?
   - Common issues to address?

3. **Individual student notes:**
   - Who built amazing adventures?
   - Who needs help before showcase?

4. **Showcase preparation:**
   - Are adventures ready to present?
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
- [ ] Built basic adventure together
- [ ] Students built and personalized
- [ ] Tested and polished adventures
- [ ] Previewed showcase

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing help
- [ ] Prepare for Week 8 showcase
- [ ] Plan celebration activities

---

_KidsLearnAI Teacher Resources_  
_www.kidslearnai.ca_  
_For instructor support, contact: [instructor support email]_

---

_Remember: This is a celebration of learning! Students should feel proud of what they've built. Focus on what they accomplished, not perfection. The showcase next week is about celebrating their journey, not comparing projects._ 🎮

