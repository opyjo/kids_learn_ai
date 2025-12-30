-- Seed Teacher Notes for Lesson 1: Welcome to Python!
-- This migration adds the teacher guide content for the first lesson
-- Migration: seed_teacher_notes_lesson_1

INSERT INTO teacher_notes (lesson_id, content)
SELECT 
  id,
  '# Level 1, Lesson 1: Teacher Guide

## Welcome to Python! 🐍

**Course:** Python Foundations I - Getting Started  
**Duration:** 60 minutes  
**Age Group:** 9-13 years old  
**Materials Needed:** Trinket accounts, screen sharing, student notes handout

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what Python is and why programmers love it
2. Write and run their first Python program using `print()`
3. Display multiple messages on screen
4. Identify and fix common beginner mistakes
5. Feel confident and excited about their coding journey

---

## 📋 Lesson Outline

| Section              | Time   | Activity Type       |
| -------------------- | ------ | ------------------- |
| Welcome & Icebreaker | 5 min  | Discussion          |
| What is Python?      | 10 min | Interactive Lecture |
| Live Coding Demo     | 15 min | Demonstration       |
| Guided Practice      | 15 min | Hands-on Coding     |
| Class Activity       | 10 min | Creative Challenge  |
| Wrap-Up & Homework   | 5 min  | Review              |

---

## 🟢 Section 1: Welcome & Icebreaker (5 minutes)

### Setup Before Class

- Have Trinket open and ready to share screen
- Test audio/video
- Have student list ready for attendance

### Introduce BrightByte

Read or paraphrase the BrightByte welcome message:

> _"Hey there! I''m BrightByte, and I''m SO excited to meet you! Did you know I''m a robot who started out knowing absolutely nothing about coding? Zero. Zip. Nada! But guess what? I learned—and now I get to help YOU learn too. Ready to discover something awesome together?"_

**Teaching Tip:** Use an enthusiastic, friendly tone. BrightByte is meant to be relatable—a character who also started as a beginner.

### Icebreaker Question

**Ask students:** _"What''s something cool you wish a computer could do for you?"_

- Call on 2-3 students to share (keep it brief)
- Validate all answers enthusiastically
- Bridge to lesson: _"Coding is how we TEACH computers to do cool things! Today you''ll write your very first code."_

---

## 🟢 Section 2: What is Python? (10 minutes)

### Key Points to Cover

1. **Programming = Giving Instructions**

   - Use the "sandwich" analogy: computers need step-by-step instructions
   - Ask: _"If I said ''make me a sandwich,'' would a robot know what to do?"_
   - Emphasize: computers are powerful but need EXACT instructions

2. **Why Python?**

   - Show the table of where Python is used (games, social media, robots, movies, AI)
   - Ask: _"Which of these surprises you the most?"_
   - Emphasize: Python is free and beginner-friendly

3. **Fun Fact: The Name**
   - Named after Monty Python (comedy show), not the snake!
   - This usually gets a laugh and makes Python feel less intimidating

### Discussion Questions

- _"Has anyone heard of Python before?"_
- _"What app or game would you want to build if you could code anything?"_

**Teaching Tip:** Keep energy high. This section sets the tone for the entire course. Students should feel excited, not overwhelmed.

---

## 🟢 Section 3: Live Coding Demo (15 minutes)

### Setup

- Share your screen with Trinket open
- Make your font size large enough for all students to see
- Type slowly and narrate everything you do

### Demo Sequence

#### Demo 1: Hello, World! (3 min)

```python
print("Hello, World!")
```

**Say:** _"This is a tradition in programming. Every programmer''s first program says ''Hello, World!'' Let''s break it down..."_

Explain each part:

- `print` = the command (always lowercase!)
- `()` = parentheses hold what we want to print
- `""` = quotation marks wrap around text
- Click Run and celebrate! _"We just talked to a computer!"_

#### Demo 2: Personalization (3 min)

```python
print("Hi! My name is [Your Name]!")
```

**Say:** _"Watch what happens when I change the text inside the quotes..."_

Show that you can print ANY message.

#### Demo 3: Multiple Lines (4 min)

```python
print("Welcome to Python!")
print("I am learning to code!")
print("This is awesome!")
```

**Key Point:** Python reads top to bottom, like a book.

#### Demo 4: Common Mistakes (5 min)

**This is crucial!** Show each mistake and the error message:

1. **Missing quotes:**

   ```python
   print(Hello World)
   ```

   _"See that error? Python is confused because it doesn''t know Hello and World are text."_

2. **Capital P:**

   ```python
   Print("Hello World")
   ```

   _"Python knows ''print'' but not ''Print''—capitals matter!"_

3. **Spelling error:**

   ```python
   prnt("Hello World")
   ```

   _"One wrong letter and Python doesn''t understand."_

4. **Missing parenthesis/quote:**
   ```python
   print("Hello World"
   ```
   _"Parentheses and quotes always come in pairs—like socks!"_

**Teaching Tip:** Normalize mistakes! Say things like _"I make these mistakes ALL the time"_ and _"This is totally normal."_

---

## 🟢 Section 4: Guided Practice (15 minutes)

### Instructions

- Have students open Trinket on their computers
- You type, they type—go slowly!
- Walk around (virtually or physically) to help struggling students

### Practice 1: Your Introduction (5 min)

Have students type:

```python
print("Hello, my name is ______!")
print("I am ______ years old.")
print("My favorite thing is ______!")
```

**Check for understanding:** _"Raise your hand when you see your name appear on the screen!"_

### Practice 2: Three Fun Facts (5 min)

```python
print("Fun fact 1: I have a pet named ______.")
print("Fun fact 2: My favorite food is ______.")
print("Fun fact 3: I want to learn coding because ______.")
```

**Encourage creativity:** Let students share their fun facts if time permits.

### Practice 3: Debug Challenge! 🐛 (5 min)

Display this buggy code:

```python
Print("Welcome to my program!)
print("I am learning Python)
prnt("This is fun!"
print("Goodbye!")
```

**Ask:** _"There are 4 bugs hiding in this code. Can you find them all?"_

Give students 2-3 minutes to find bugs, then reveal:

1. Line 1: `Print` → `print` (lowercase)
2. Line 1: Missing closing `"` after `program!`
3. Line 2: Missing closing `"` after `Python`
4. Line 3: `prnt` → `print` (spelling)
5. Line 3: Missing closing `)`

**Celebrate:** _"You''re already debugging like real programmers!"_

---

## 🟢 Section 5: Class Activity - "All About Me" Poster (10 minutes)

### Introduce the Challenge

**Say:** _"Now it''s YOUR turn to be creative! You''re going to make a digital ''All About Me'' poster using Python."_

### Requirements

- At least 6 print statements
- Must include: name, age, favorite hobby, favorite food, something excited to learn, fun fact

### Show Example

```python
print("=============================")
print("       ALL ABOUT ME          ")
print("=============================")
print("")
print("Name: BrightByte")
print("Age: 3 robot years old")
print("Favorite Hobby: Learning new things!")
print("Favorite Food: Electricity (but pizza looks yummy)")
print("Excited to Learn: How to help kids code!")
print("Fun Fact: I was built by a 10-year-old inventor!")
print("")
print("=============================")
```

### Bonus Challenges (for fast finishers)

- Add borders using `=`, `-`, `*`, or `#`
- Include emojis 🎉
- Add blank lines with `print("")`
- Create ASCII art!

### Sharing (if time permits)

Ask 2-3 volunteers to share their screens and show their posters.

**Teaching Tip:** Be generous with praise! _"I love how you added that border!"_ or _"What a creative fun fact!"_

---

## 🟢 Section 6: Wrap-Up & Homework (5 minutes)

### Quick Review

**Ask:** _"What are the 3 most important rules for print()?"_

Expected answers:

1. Lowercase `print`
2. Text in quotation marks
3. Parentheses and quotes come in pairs

### Introduce Homework

**Assignment:** "My Python Story" on Trinket

- At least 8 print statements
- Must tell a story with beginning, middle, end
- Use `print("")` for blank lines
- Be creative!

**Show the grading rubric** so students know expectations.

### Submission Instructions

1. Write code on Trinket
2. Click Share button
3. Copy link
4. Submit link to instructor

### Preview Next Lesson

**Say:** _"Next week, you''ll learn about VARIABLES—how to make Python remember things. Imagine being able to store your name and use it over and over!"_

### Closing

End with BrightByte''s encouragement:

> _"High five! You just taught your brain something new! Remember—every expert was once a beginner. Keep practicing, keep curious, and I''ll see you next week!"_

---

## 📊 Assessment Checklist

### During Class, Observe:

- [ ] Can student successfully run `print("Hello, World!")`?
- [ ] Can student modify text inside print statements?
- [ ] Can student identify at least 2 types of syntax errors?
- [ ] Is student engaged and participating?

### Homework Rubric

| Criteria                         | Points  |
| -------------------------------- | ------- |
| Has a title                      | 10      |
| At least 8 print statements      | 20      |
| Story has beginning, middle, end | 30      |
| Uses blank lines for readability | 10      |
| Code runs without errors         | 20      |
| Creativity and effort            | 10      |
| **Total**                        | **100** |

---

## 🆘 Troubleshooting Common Issues

### "My code won''t run!"

- Check for red error messages
- Look for missing quotes, parentheses, or typos
- Make sure `print` is lowercase

### "I don''t see anything on screen!"

- Did you click the Run button?
- Is there a typo in `print`?

### "Student is way ahead of others"

- Give them bonus challenges (borders, ASCII art, emojis)
- Ask them to help a neighbor

### "Student is struggling"

- Pair them with a peer helper
- Simplify: just get one `print("Hello!")` working first
- Reassure them that everyone learns at different speeds

### "Student accidentally deleted everything"

- Trinket has an undo feature (Ctrl+Z)
- If lost, have them start fresh with a simple example

---

## 📚 Additional Resources

### For Teachers

- Python documentation: [docs.python.org](https://docs.python.org)
- Trinket teacher guides: [trinket.io/teachers](https://trinket.io/teachers)

### For Students (Optional Extensions)

- Trinket: [trinket.io/python](https://trinket.io/python)
- Scratch: [scratch.mit.edu](https://scratch.mit.edu)
- Code.org: [code.org](https://code.org)

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
*www.kidslearnai.ca*'
FROM lessons 
WHERE order_index = 1 AND title = 'Welcome to Python!'
ON CONFLICT (lesson_id) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();

