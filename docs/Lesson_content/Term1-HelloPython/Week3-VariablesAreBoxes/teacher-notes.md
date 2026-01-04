# Term 1, Week 3: Variables are Boxes! 📦

## Teacher's Guide

**Course:** Term 1: Hello Python!  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 1 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

This lesson introduces variables—arguably the most fundamental concept in programming. Variables allow students to store, retrieve, and modify data, transforming their programs from static text output to dynamic, changeable content. This is a critical milestone: students who understand variables can begin to think algorithmically.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what variables are using the "labeled box" analogy
2. Create variables that store strings (text) and integers (numbers)
3. Use variables correctly in print() statements
4. Change variable values and observe the results
5. Apply Python's variable naming rules (snake_case)
6. Distinguish between strings and integers

### Prerequisites

Students should have completed Lessons 1-2 and be able to:

- Write and run print() statements
- Use string multiplication (\*) and concatenation (+)
- Navigate Trinket confidently

### Materials Needed

- Computer with internet access (for each student)
- Projector/screen share for demonstrations
- Student handouts (printed or digital)
- **Optional but helpful:** Physical boxes with labels for concrete demonstration
- Index cards or sticky notes (for "box labels")

### Pre-Lesson Preparation

1. **Review Lesson 2 homework** - Note creative poems to celebrate
2. **Prepare physical demo** (optional) - Label some boxes or containers
3. **Create demonstration code** - Have examples ready in Trinket
4. **Prepare variable naming quiz** - For interactive portion
5. **Anticipate the "quotes confusion"** - Prepare clear explanations

---

## 🎯 Lesson Flow (60 Minutes)

### Minute-by-Minute Breakdown

| Time | Duration | Activity                    | Details                     |
| ---- | -------- | --------------------------- | --------------------------- |
| 0:00 | 5 min    | Welcome & Homework Showcase | Celebrate Lesson 2 poems    |
| 0:05 | 7 min    | The Box Analogy             | Introduce variables concept |
| 0:12 | 10 min   | Creating Variables          | Strings and integers        |
| 0:22 | 8 min    | Using Variables in print()  | Four methods                |
| 0:30 | 7 min    | Changing Variables          | Dynamic values              |
| 0:37 | 8 min    | Naming Rules & Quiz         | Valid vs invalid names      |
| 0:45 | 10 min   | Practice Challenges         | Guided independent work     |
| 0:55 | 5 min    | Wrap-up & Homework          | Summary and assignment      |

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome & Homework Showcase (5 minutes)

#### Goals

- Celebrate student creativity from Lesson 2
- Build community and positive energy
- Transition into new material

#### Script/Talking Points

> "Welcome back, coders! Before we learn something really exciting today, I want to celebrate some of the amazing poems you created!"

**Select 2-3 poems to showcase (30-45 seconds each):**

- Choose diverse examples (different styles, different levels)
- Point out specific positives: "I love how you used the multiplication trick for the border!"
- Lead applause after each

> "You've all become print() experts! Now, here's a question: What if Python could REMEMBER things? What if you didn't have to type the same information over and over?"

**Build anticipation:**

> "Today we're learning something that professional programmers use in EVERY single program they write. It's called VARIABLES!"

---

### Part 2: The Box Analogy (7 minutes)

#### Goals

- Establish a clear mental model for variables
- Connect to real-world concepts kids understand
- Build foundational understanding before code

#### The "Labeled Box" Demonstration

**Option A: Physical Demonstration (Highly Recommended)**

If you have physical boxes or containers:

1. Hold up a box and write "NAME" on it (or tape a label)
2. Put a paper with "Alex" inside
3. Show that you can look inside (read the value)
4. Show that you can change what's inside (replace "Alex" with "Jordan")

> "This box has a label: 'NAME'. Right now, what's inside? 'Alex'. I can change it anytime—now it says 'Jordan'. In Python, we call these labeled boxes VARIABLES."

**Option B: Visual Demonstration**

Draw on whiteboard/screen:

```
    +--------+      +--------+      +--------+
    |  NAME  |      |  AGE   |      | COLOR  |
    +--------+      +--------+      +--------+
    | "Alex" |      |   10   |      | "blue" |
    +--------+      +--------+      +--------+
```

> "These are like boxes in Python's memory. Each has a label (the name) and contents (the value)."

#### Key Points to Emphasize

1. **The label stays the same** - We always call it `name`
2. **The contents can change** - First "Alex", then "Jordan"
3. **We can look inside anytime** - That's what print(name) does
4. **Python remembers for us** - We don't have to type "Alex" every time

#### Why "Variable"?

> "Why do we call them 'variables'? The word 'variable' means 'able to change.' The VALUE can change, but the LABEL stays the same. Your score variable might start at 0 and end at 1000—it varies!"

> _BrightByte connection: "Think of me as a robot with lots of memory boxes. When you create a variable, you're giving me a new box to remember something!"_

---

### Part 3: Creating Variables (10 minutes)

#### Goals

- Teach the syntax for creating variables
- Distinguish between strings and integers
- Ensure everyone can create their first variables

#### Live Coding: First Variables

> "Let's create our first variables! Watch carefully—the syntax is very specific."

**Type slowly, explaining each part:**

```python
name = "Alex"
```

> "Let me break this down:
>
> - `name` is the LABEL for our box
> - `=` means 'store this value' (NOT 'equals' like in math!)
> - `"Alex"` is what we're storing—the VALUE
>
> Now Python has a box called `name` with 'Alex' inside."

**Add more examples:**

```python
name = "Alex"
age = 10
favorite_color = "blue"
```

> "Notice anything different about `age`? No quotation marks! That's because 10 is a NUMBER, not text."

#### The Critical Distinction: Strings vs Integers

**This is the most important concept in this lesson. Take time here!**

> "There are two main types of values we can store:"

**Draw or show on screen:**

| Type   | Name    | Example  | Quotation Marks? |
| ------ | ------- | -------- | ---------------- |
| Text   | String  | `"Alex"` | YES ✅           |
| Number | Integer | `10`     | NO ❌            |

> "Here's the rule:
>
> - **Strings** (text) ALWAYS need quotation marks
> - **Integers** (numbers) NEVER have quotation marks"

**Interactive Check:**

> "Is this a string or integer? Give me a thumbs up for string, thumbs down for integer."

- `"Hello"` → String (thumbs up)
- `42` → Integer (thumbs down)
- `"42"` → String! (thumbs up) "Tricky! The quotes make it a string!"
- `"Toronto"` → String (thumbs up)
- `2025` → Integer (thumbs down)

#### Common Confusion to Address

> "Here's something VERY important. What's the difference between these?"

```python
age = 10      # This is a NUMBER
age = "10"    # This is TEXT
```

> "Even though they LOOK similar, Python treats them completely differently! We'll see why this matters soon."

#### Student Practice: Create Three Variables

> "Everyone create THREE variables in your Trinket:
>
> 1. Your name (a string)
> 2. Your age (an integer)
> 3. Your favorite color (a string)"

**Give 2 minutes. Walk around checking. Common issues:**

- Forgetting quotes around strings
- Using spaces in variable names
- Using quotes around numbers

---

### Part 4: Using Variables in print() (8 minutes)

#### Goals

- Teach multiple ways to use variables with print()
- Emphasize the "quotes vs no quotes" distinction
- Enable students to output their stored values

#### Method 1: Print Just the Variable

```python
name = "Alex"
print(name)
```

> "When we write `print(name)` without quotes, Python looks INSIDE the box called `name` and prints what's there."

**The Critical Teaching Moment:**

```python
name = "Alex"
print("name")    # Prints: name
print(name)      # Prints: Alex
```

> "See the difference?
>
> - `print("name")` prints the WORD 'name' (it's in quotes!)
> - `print(name)` prints what's STORED in the variable name"

**This is the #1 confusion point. Spend time here!**

#### Method 2: Combine with Commas

```python
name = "Alex"
age = 10
print("My name is", name)
print("I am", age, "years old")
```

> "Commas are like saying 'and also print this'. Python automatically adds spaces between things separated by commas."

**Output:**

```
My name is Alex
I am 10 years old
```

#### Method 3: Multiple Variables

```python
name = "Alex"
age = 10
city = "Toronto"
print("I am", name, "and I am", age, "years old from", city)
```

> "You can use as many commas as you need!"

#### Method 4: Using + (Brief Mention)

```python
name = "Alex"
print("Hello, " + name + "!")
```

> "You CAN use plus signs, but there's a catch—it only works with strings. For now, commas are safer and easier!"

#### Student Practice

> "Now print your three variables! Try using different methods."

**Give 3 minutes. Help anyone stuck on the quotes confusion.**

---

### Part 5: Changing Variables (7 minutes)

#### Goals

- Demonstrate that variables can be reassigned
- Connect to real-world scenarios (scores, lives, etc.)
- Reinforce the "variable" name meaning

#### Live Demonstration: The Score Example

```python
score = 0
print("Starting score:", score)

score = 10
print("After level 1:", score)

score = 25
print("After level 2:", score)
```

> "Watch what happens. The variable `score` CHANGES each time we assign a new value. The old value is thrown away—Python only remembers the most recent one."

**Run the code. Show output:**

```
Starting score: 0
After level 1: 10
After level 2: 25
```

#### Real-World Connections

> "Where do you see changing values in real life?"

**Let students brainstorm:**

- Video game scores and lives
- Temperature throughout the day
- Your age (changes every birthday!)
- Money in your pocket

> "All of these are VARIABLES in real life too—their values change over time!"

#### Interactive Example: Game Lives

```python
lives = 3
print("Game Start! Lives:", lives)

lives = 2
print("Ouch! Lives:", lives)

lives = 1
print("Careful! Lives:", lives)

lives = 0
print("Game Over! Lives:", lives)
```

> "In a real game, these changes would happen based on what the player does. Variables make games possible!"

---

### Part 6: Naming Rules & Quiz (8 minutes)

#### Goals

- Teach valid variable naming conventions
- Establish good habits (snake_case)
- Prevent common errors

#### The Rules (Visual on Screen)

**✅ VALID Names:**

```python
name = "Alex"
player_score = 100
favoriteFood = "pizza"
age2 = 11
_private = "secret"
```

**❌ INVALID Names:**

```python
player score = 100    # ❌ No spaces!
2nd_place = "Sam"     # ❌ Can't start with number!
my-score = 50         # ❌ No hyphens!
print = "hello"       # ❌ Don't use Python keywords!
```

#### Interactive Quiz Game

> "Let's play Valid or Invalid! I'll show you a variable name—shout out if it's VALID (yes!) or INVALID (no!)."

| Variable Name    | Valid? | Why?                    |
| ---------------- | ------ | ----------------------- |
| `player_name`    | ✅ Yes | Good snake_case!        |
| `my age`         | ❌ No  | Space not allowed!      |
| `score2`         | ✅ Yes | Numbers okay at end     |
| `2players`       | ❌ No  | Can't start with number |
| `favorite-color` | ❌ No  | Hyphens not allowed     |
| `favoriteColor`  | ✅ Yes | Works (camelCase)       |
| `SCORE`          | ✅ Yes | Works (but shouty!)     |

#### Introduce snake_case

> "In Python, the preferred style is called 'snake_case':
>
> - All lowercase
> - Words separated by underscores"

```python
# Python style (snake_case) - PREFERRED:
first_name = "Alex"
favorite_color = "blue"
high_score = 9500
```

> "This makes your code easy to read. Professional Python programmers use this style!"

---

### Part 7: Practice Challenges (10 minutes)

#### Goals

- Apply all concepts through hands-on practice
- Provide scaffolded challenges at different levels
- Identify students who need extra support

#### Challenge Options (Display on Screen)

**Level 1: About Me (Easier)**

```python
my_name = "____"
my_age = ____
my_hobby = "____"

print("Name:", my_name)
print("Age:", my_age)
print("Hobby:", my_hobby)
```

**Level 2: Pet Profile (Medium)**

```python
pet_name = "____"
pet_type = "____"
pet_age = ____

print("My pet's name is", pet_name)
print(pet_name, "is a", pet_type)
print(pet_name, "is", pet_age, "years old")
```

**Level 3: Game Character (Challenge)**

```python
character_name = "____"
health = ____
attack_power = ____
level = ____

print("⚔️ CHARACTER STATS ⚔️")
print("Name:", character_name)
print("Health:", health, "HP")
print("Attack:", attack_power)
print("Level:", level)
```

#### Teacher Circulation

**During practice, move around and:**

- Check for quote errors on strings
- Ensure integers don't have quotes
- Praise good variable naming
- Help anyone stuck

**Common Issues to Address:**

| Issue                        | What to Say                                                          |
| ---------------------------- | -------------------------------------------------------------------- |
| `name = Alex` (no quotes)    | "Alex is text, right? Text needs quotes!"                            |
| `my name = "Alex"` (space)   | "Variable names can't have spaces. Try my_name"                      |
| `print("name")`              | "The quotes mean print the word. Remove them to print what's INSIDE" |
| `age = "10"` (quoted number) | "Do you want to do math with this? Then no quotes!"                  |

---

### Part 8: Wrap-up & Homework (5 minutes)

#### Review Key Points

> "What an important lesson! Let's review what we learned..."

**Quick summary (visual on screen):**

| Concept         | Example                          |
| --------------- | -------------------------------- |
| Create string   | `name = "Alex"`                  |
| Create integer  | `age = 10`                       |
| Print variable  | `print(name)`                    |
| Print with text | `print("Hi", name)`              |
| Change variable | `score = 100` then `score = 200` |
| Naming style    | Use `snake_case`                 |

> "You now understand VARIABLES—one of the most important concepts in ALL of programming!"

#### Introduce Homework

> "For homework, you're going to create a Profile Card about yourself. It's like a character stats screen in a video game, but about YOU!"

**Briefly explain requirements:**

- At least 5 variables
- At least 2 strings AND 2 integers
- Use snake_case naming
- Print nicely formatted output
- Add a decorative border

> "All the details are in your lesson notes. This is a chance to practice everything from lessons 1, 2, AND 3!"

#### Preview Next Week

> "Next week, we're going to learn cool TRICKS you can do with text! Things like making text UPPERCASE, counting letters, and more."

**Sneak peek:**

```python
name = "alex"
print(name.upper())    # ALEX
print(len(name))       # 4
```

---

## 🤖 AI Activity: AI Memory (5-10 minutes)

### What to Do

1. **Introduction** (1 min)
   > "We just learned about variables - boxes that store information. Did you know AI uses the same idea, but with THOUSANDS of variables?"

2. **Demonstration** (3-4 min)
   - Show students: "When Siri says 'Good morning, Alex!' - how does it know your name?"
   - Explain: "It's stored in a variable, just like `name = "Alex"` in your code!"
   - Show another example: "Netflix remembers what shows you like - that's stored in variables too!"
   - Draw a simple diagram: "Your program has 3-5 variables. AI has millions!"

3. **Interactive Discussion** (2-3 min)
   - "What else do you think AI remembers about you?"
   - "How many variables do you think ChatGPT uses?"
   - "What's the same between your variables and AI's variables?"

4. **Connection** (1 min)
   > "You're learning the same memory system that powers AI! Every time you create a variable, you're using the same concept that helps AI remember things."

### Discussion Questions

- "How does Siri remember your name?"
- "What information do you think Netflix stores about you?"
- "What's the difference between your 5 variables and AI's millions of variables?"

### Teaching Tips

- Use concrete examples students know: Siri, Netflix, YouTube recommendations
- Draw a simple comparison: "Your program: 5 boxes. AI: millions of boxes!"
- Emphasize the concept is the same, just scale is different
- If students ask technical questions, keep it simple: "AI uses the same idea, just way more of them!"
- Connect back to their code: "Every variable you create works the same way!"

### Alternative Activity (If Short on Time)

- Quick discussion: "Who has talked to Siri? How does it know your name?"
- Connect: "It's using a variable, just like `name = "Alex"` in your code!"
- Emphasize: "You're learning the same system that powers AI!"

---

## 🎯 Assessment & Differentiation

### Formative Assessment

**During class, observe:**

- [ ] Can student create string variables with quotes?
- [ ] Can student create integer variables without quotes?
- [ ] Does student understand print(name) vs print("name")?
- [ ] Can student use commas to combine text and variables?
- [ ] Does student understand that variables can change?
- [ ] Can student apply naming rules?

### Quick Check Questions

Ask throughout the lesson:

1. "What do we use to store a value in a variable?" → The equals sign `=`
2. "What type of value needs quotation marks?" → Strings (text)
3. "What type doesn't need quotes?" → Integers (numbers)
4. "What's wrong with `my age = 10`?" → Space in variable name
5. "What's the Python naming style?" → snake_case

### Homework Assessment: "My Profile Card"

| Criteria              | Exceeds (3)                              | Meets (2)                     | Developing (1)         |
| --------------------- | ---------------------------------------- | ----------------------------- | ---------------------- |
| **Variables created** | 7+ variables                             | 5-6 variables                 | Fewer than 5           |
| **Data types**        | Both strings and integers used correctly | Types present but some errors | Wrong types or missing |
| **Naming**            | All snake_case, descriptive              | Mostly good names             | Poor names or errors   |
| **Output**            | Well-formatted, creative                 | Readable, meets requirements  | Messy or incomplete    |
| **Border**            | Creative decoration                      | Basic border                  | Missing                |
| **Code quality**      | Perfect, creative extras                 | Runs, meets requirements      | Errors present         |

### Differentiation Strategies

#### For Students Who Need More Support

- Provide starter template with blanks to fill in
- Pair with confident peer for practice
- Focus on just strings first, add integers next class
- Reduce homework requirement (3 variables instead of 5)
- Offer extra help session

#### For Advanced Students

- Challenge: Create profiles for multiple characters
- Challenge: Use the same variable in multiple places
- Introduce f-strings preview: `print(f"Hello {name}")`
- Ask them to find and explain an error in buggy code
- Have them help struggling peers

---

## ⚠️ Common Pitfalls & Solutions

### The Big Three Errors

#### 1. NameError: Forgetting Quotes on Strings

**Student writes:**

```python
name = Alex
```

**Error message:**

```
NameError: name 'Alex' is not defined
```

**How to help:**

> "Python thinks `Alex` is a variable name, but there's no variable called Alex! To tell Python it's TEXT, wrap it in quotes: `name = \"Alex\"`"

#### 2. SyntaxError: Spaces in Variable Names

**Student writes:**

```python
my name = "Alex"
```

**Error message:**

```
SyntaxError: invalid syntax
```

**How to help:**

> "Variable names can't have spaces! Use an underscore instead: `my_name = \"Alex\"`"

#### 3. TypeError: Mixing + with Strings and Integers

**Student writes:**

```python
age = 10
print("I am " + age + " years old")
```

**Error message:**

```
TypeError: can only concatenate str (not "int") to str
```

**How to help:**

> "The `+` can only join strings together. `age` is a number! Use commas instead: `print(\"I am\", age, \"years old\")`"

### Conceptual Confusions

| Confusion                        | How to Address                                                                                  |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `print("name")` vs `print(name)` | "Quotes mean 'print this exact text'. No quotes means 'look in the box'"                        |
| `age = "10"` vs `age = 10`       | "Ask yourself: Will I do math with this? If yes, no quotes!"                                    |
| Why use variables?               | "What if you needed to change 'Alex' to 'Jordan' in 20 places? With variables, change it once!" |
| The `=` sign meaning             | "In Python, `=` means 'store this'. It's not math equals!"                                      |

---

## 📊 Post-Lesson Reflection

### After Each Class, Note:

1. **What went well?**

   - Did the box analogy work?
   - Which examples resonated?
   - Did students grasp string vs integer?

2. **What needs improvement?**

   - Did anyone struggle with the quote concept?
   - Was the pacing appropriate?
   - Any examples that confused rather than clarified?

3. **Individual student notes:**
   - Who fully gets it?
   - Who needs follow-up?
   - Any "aha moments" to build on?

### Sample Reflection Template

```
Date: ____________
Students Present: ____________

Engagement Level (1-5): ____

Concepts that clicked:
-

Concepts needing more work:
-

The quote confusion (scale 1-5): ____

Students needing follow-up:
-

Adjustments for next time:
-
```

---

## 🔗 Additional Resources

### For Teachers

- **Python Variable Documentation:** docs.python.org (your reference)
- **Common Student Errors:** Keep a running list for the class
- **Physical Demo Props:** Boxes, labels, index cards work great

### For Students (Share with Parents)

- **Practice Idea:** Create profile cards for family members
- **Game Connection:** Notice variables in their favorite games (scores, lives, etc.)
- **Real World:** Temperature, time, dates are all "variables" that change!

### Parent Communication Template

```
Subject: What Your Child Learned in KidsLearnAI - Lesson 3

Dear Parent/Guardian,

Today your child learned one of the most important concepts in programming—VARIABLES!

What we covered:
- What variables are (like labeled boxes for storing information)
- Creating variables for text (strings) and numbers (integers)
- Using variables in print statements
- Changing variable values
- Python's naming rules (snake_case)

Homework due by [date]:
"My Profile Card" - creating a program with 5+ variables
All instructions are in the student notes.

Fun practice at home:
- Ask your child to explain what a variable is!
- Create profile cards together for family members or pets
- Talk about "variables" in real life (temperature, your age, game scores)

This concept is fundamental to ALL programming. If your child understands variables, they're well on their way to becoming a real programmer!

Questions? Reply to this email.

Happy coding!
[Instructor Name]
KidsLearnAI
```

---

## ✅ Lesson Checklist

### Before Class

- [ ] Review Lesson 2 homework submissions
- [ ] Prepare demonstration code
- [ ] Optional: Gather physical boxes/labels for demo
- [ ] Set up screen sharing
- [ ] Have variable naming quiz ready
- [ ] Prepare celebration for poem showcase

### During Class

- [ ] Welcome and showcase Lesson 2 poems
- [ ] Box analogy demonstration (physical or visual)
- [ ] First variable creation (name, age, color)
- [ ] Strings vs integers distinction (CRITICAL)
- [ ] Using variables in print() (four methods)
- [ ] Changing variables demonstration
- [ ] Naming rules and quiz game
- [ ] Practice challenges
- [ ] Homework explanation
- [ ] Preview Week 4

### After Class

- [ ] Complete reflection notes
- [ ] Identify students needing support
- [ ] Send parent communication
- [ ] Review homework as it comes in
- [ ] Prepare for Lesson 4 (String Methods)

---

## 🎨 Sample Code Bank

Keep these ready for quick demonstrations:

### Basic Variables

```python
# String variables
name = "Alex"
city = "Toronto"
favorite_food = "pizza"

# Integer variables
age = 10
grade = 5
high_score = 9500

# Printing variables
print(name)
print("Hello,", name)
print("Age:", age)
```

### Changing Variables

```python
score = 0
print("Start:", score)
score = 50
print("Level 1:", score)
score = 100
print("Level 2:", score)
```

### Profile Card Template

```python
name = "Alex"
age = 10
city = "Toronto"
hobby = "coding"

print("*" * 25)
print("    PROFILE CARD")
print("*" * 25)
print("Name:", name)
print("Age:", age)
print("City:", city)
print("Hobby:", hobby)
print("*" * 25)
```

### Common Errors (For Teaching)

```python
# ERROR 1: Missing quotes
name = Alex         # NameError!
name = "Alex"       # Correct

# ERROR 2: Space in name
my name = "Alex"    # SyntaxError!
my_name = "Alex"    # Correct

# ERROR 3: Quotes on numbers
age = "10"          # Works but it's text!
age = 10            # Correct for numbers

# ERROR 4: + with mixed types
print("Age: " + age)    # TypeError!
print("Age:", age)      # Correct
```

---

_KidsLearnAI Teacher Resources_  
*www.kidslearnai.ca*  
_For instructor support, contact: [instructor support email]_

---

_Remember: Variables are the foundation of ALL programming. Take your time with this lesson—if students truly understand variables, everything else becomes easier. Don't rush past the "quotes confusion"—it's normal and worth addressing thoroughly!_ 🚀
