-- Migration: Convert to 8-Term Year 1 Curriculum Structure
-- This script deletes the old 12-level structure and creates the new Term-based curriculum
-- Target: Term 1 - Hello Python! (8 weeks)

-- =====================================================
-- PHASE 1: Clean up old data
-- =====================================================

-- Delete all existing lessons (they reference courses)
DELETE FROM lessons;

-- Delete all existing courses
DELETE FROM courses;

-- Reset any enrollments (optional - if there are no real students)
DELETE FROM level_enrollments;
DELETE FROM completed_lessons;

-- =====================================================
-- PHASE 2: Add new columns to courses table (if needed)
-- =====================================================

-- Add term_number column if it doesn't exist
ALTER TABLE courses ADD COLUMN IF NOT EXISTS term_number INTEGER;

-- Add badge_earned column for milestone badges
ALTER TABLE courses ADD COLUMN IF NOT EXISTS badge_earned TEXT;

-- Add project_name column for term projects
ALTER TABLE courses ADD COLUMN IF NOT EXISTS project_name TEXT;

-- =====================================================
-- PHASE 3: Create Term 1 Course
-- =====================================================

INSERT INTO courses (
  title, 
  description, 
  slug, 
  order_index, 
  age_range, 
  year_group, 
  is_coming_soon,
  term_number,
  badge_earned,
  project_name
) VALUES (
  'Term 1: Hello Python!',
  'Your first conversation with a computer. Learn to display messages, store information in variables, and create fun text-based outputs.',
  'term-1-hello-python',
  1,
  '9-10',
  'Year 1: Python Foundations',
  false,
  1,
  NULL,
  'Joke Machine'
);

-- =====================================================
-- PHASE 4: Create placeholder courses for Terms 2-8 (Coming Soon)
-- =====================================================

INSERT INTO courses (title, description, slug, order_index, age_range, year_group, is_coming_soon, term_number, badge_earned, project_name) VALUES
('Term 2: Math Wizard', 'Turn Python into your personal calculator. Learn to get information from users with input() and create interactive programs.', 'term-2-math-wizard', 2, '9-10', 'Year 1: Python Foundations', true, 2, 'Python Beginner', 'Personal Calculator'),
('Term 3: Decision Maker', 'Teach your program to think. Learn that programs can make decisions using if and else.', 'term-3-decision-maker', 3, '9-10', 'Year 1: Python Foundations', true, 3, NULL, 'Mini Adventure Game'),
('Term 4: More Choices', 'Handle any situation. Expand decision-making skills with elif and combine conditions with and/or.', 'term-4-more-choices', 4, '9-10', 'Year 1: Python Foundations', true, 4, 'Decision Master', 'Expanded Adventure'),
('Term 5: AI Sneak Peek', 'Discover the world of Artificial Intelligence. Explore what AI is and where you encounter it daily.', 'term-5-ai-sneak-peek', 5, '9-10', 'Year 1: Python Foundations', true, 5, 'AI Curious', 'AI in My Life Poster'),
('Term 6: Loop Magic', 'Do things over and over without getting tired. Discover loops and create patterns.', 'term-6-loop-magic', 6, '9-10', 'Year 1: Python Foundations', true, 6, NULL, 'ASCII Art Generator'),
('Term 7: Game Builder', 'Create games that keep going. Learn while loops and unlock real game development.', 'term-7-game-builder', 7, '9-10', 'Year 1: Python Foundations', true, 7, 'Game Developer', 'Number Guessing Game'),
('Term 8: AI Explorer', 'Combine everything and explore AI deeper. Learn lists and dive deeper into AI concepts.', 'term-8-ai-explorer', 8, '9-10', 'Year 1: Python Foundations', true, 8, 'Junior Python Coder', 'Quiz Game + AI Presentation');

-- =====================================================
-- PHASE 5: Seed Term 1 Lessons (8 Weeks)
-- =====================================================

-- Week 1: Welcome to Coding!
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Welcome to Coding!',
  'What is programming? Set up our coding space. Type our first code!',
  '# Welcome to Coding! 🎉

## What You Will Learn Today

- What programming is and why it matters
- What Python is (hint: not a snake!)
- How to write your very first code
- The magic word: `print()`

---

## What is Programming?

Imagine you have a robot friend. This robot is super helpful and will do ANYTHING you ask... but there''s a catch. The robot only understands very specific instructions!

**Programming** is learning how to give instructions to computers in a language they understand.

### Real Life Example

| Telling a Friend | Telling a Computer |
|-----------------|-------------------|
| "Make me a sandwich" | "Get bread. Open peanut butter jar. Use knife to spread peanut butter on bread..." |
| They figure it out! | Needs EVERY step! |

Computers are amazing because they:
- Never get tired
- Never make mistakes (if you give good instructions!)
- Can do things SUPER fast

---

## What is Python?

**Python** is a programming language - a way to talk to computers!

### Fun Fact 🎭

Python was created in 1991 by a programmer named Guido van Rossum. He named it after a funny British TV show called "Monty Python''s Flying Circus" - NOT after the snake!

### Why Learn Python?

Python is used to make:
- 🎮 Video games (Minecraft uses Python!)
- 📱 Apps (Instagram, Spotify)
- 🤖 Robots and AI
- 🎬 Movie special effects

And the best part? **Python reads almost like English!**

---

## Your First Code! 🚀

The first thing every programmer learns is how to make the computer say "Hello!"

### The print() Command

`print()` tells Python to **display a message** on the screen.

```python
print("Hello, World!")
```

When you run this, Python shows: `Hello, World!`

### The Rules

1. **Lowercase p** - it''s `print`, not `Print`
2. **Parentheses** - the message goes inside `()`
3. **Quotation marks** - text goes inside `"..."` 

### Try It Yourself!

```python
print("Hello, World!")
print("My name is [YOUR NAME]!")
print("I am learning to code!")
```

---

## Common Mistakes (and How to Fix Them!)

Everyone makes mistakes when coding. Here''s how to fix the most common ones:

### Mistake 1: Wrong Capitalization
```python
# ❌ Wrong
Print("Hello")
PRINT("Hello")

# ✅ Correct
print("Hello")
```

### Mistake 2: Missing Quotation Marks
```python
# ❌ Wrong
print(Hello)

# ✅ Correct
print("Hello")
```

### Mistake 3: Missing Parentheses
```python
# ❌ Wrong
print "Hello"

# ✅ Correct
print("Hello")
```

---

## Key Vocabulary

| Word | What It Means |
|------|---------------|
| **Programming** | Giving instructions to computers |
| **Python** | A programming language |
| **Code** | Instructions written for computers |
| **print()** | A command that displays messages |

---

## What''s Next?

Next week, we''ll learn about `print()` superpowers - making Python say ANYTHING we want! Get ready to get creative! 🎨

---

**Remember:** Every expert was once a beginner. You just took your first step! 🌟
',
  'beginner',
  1,
  id,
  '## Robot Commander Activity 🤖

### How to Play

1. **Pair Up**: Students work in pairs
2. **Choose Roles**: One student is the "Programmer", one is the "Robot"
3. **The Challenge**: The Programmer must give EXACT instructions to guide the Robot

### Round 1: Simple Task
The Robot must pick up a pencil from the desk.

**Bad Instructions:** "Pick up the pencil"
**Good Instructions:** 
- "Extend your right arm forward"
- "Open your hand"
- "Move hand down to the desk"
- "Close fingers around the pencil"
- "Lift arm up"

### Round 2: Obstacle Course
Set up 3 objects. The Robot must navigate around them to reach a goal.

### Discussion Questions
- What happened when instructions weren''t clear?
- How is this like programming?
- Why do computers need exact instructions?

### Key Takeaway
Computers are like our Robot friends - they do EXACTLY what we tell them, nothing more, nothing less!',
  '## Homework: Code Detectives 🔍

### Your Mission

Find **3 devices** in your home that use code (programming).

### What to Do

1. Walk around your home
2. Find 3 devices that have computers inside
3. For each device, write down:
   - What is it?
   - What does it do?
   - What might its code tell it to do?

### Example

**Device:** Microwave
**What it does:** Heats up food
**What its code might say:** 
- "When the START button is pressed, turn on the heating element"
- "Count down from the time the user entered"
- "When timer reaches 0, stop heating and beep"

### Bonus Challenge ⭐

Can you find something surprising that uses code? (Hint: Some toys, watches, and even refrigerators have code!)

### Bring to Class

Be ready to share one of your discoveries next week!',
  false
FROM courses WHERE slug = 'term-1-hello-python';

-- Week 2: Print is Your Voice
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Print is Your Voice',
  'Use print() to make Python talk. Experiment with different messages and discover print() superpowers!',
  '# Print is Your Voice! 📢

## What You Will Learn Today

- How to print many messages
- How to print on multiple lines
- How to make Python say ANYTHING
- Special print() tricks

---

## Review: The print() Command

Remember from last week? `print()` displays messages on the screen!

```python
print("Hello!")
```

Today we''re going to become **print() experts**! 🏆

---

## Printing Multiple Messages

Python reads code from **top to bottom**, like reading a book!

```python
print("Line 1: Hello!")
print("Line 2: How are you?")
print("Line 3: I am Python!")
```

**Output:**
```
Line 1: Hello!
Line 2: How are you?
Line am Python!
```

Each `print()` command creates a **new line**!

---

## Making Python Creative 🎨

You can print ANYTHING inside the quotation marks!

### Emojis Work Too!
```python
print("I love coding! 💻")
print("Python is fun! 🐍")
print("Let''s go! 🚀")
```

### Numbers as Text
```python
print("I am 10 years old")
print("2 + 2 = 4")
print("My favorite number is 7")
```

### Silly Sentences
```python
print("The purple elephant danced on the moon!")
print("My homework was eaten by a ninja!")
```

---

## Print Tricks! ✨

### Trick 1: Empty Lines

Want a blank line? Use empty quotes!

```python
print("Hello!")
print("")
print("Goodbye!")
```

**Output:**
```
Hello!

Goodbye!
```

### Trick 2: Repeating Text

You can multiply text with `*`!

```python
print("Ha" * 3)
print("-" * 20)
print("🎉" * 5)
```

**Output:**
```
HaHaHa
--------------------
🎉🎉🎉🎉🎉
```

### Trick 3: Making Boxes

```python
print("+" + "-" * 20 + "+")
print("|" + " " * 20 + "|")
print("|" + "    Hello World!    " + "|")
print("|" + " " * 20 + "|")
print("+" + "-" * 20 + "+")
```

---

## Mini Challenges 🎯

### Challenge 1: Three Facts
Print 3 facts about yourself!

```python
print("Fact 1: My name is Alex")
print("Fact 2: I love pizza")
print("Fact 3: I have a dog named Max")
```

### Challenge 2: Favorite Things
Print your 3 favorite things with emojis!

### Challenge 3: Silly Story
Print a 4-line silly story!

---

## Common Mistakes

### Mixing Quote Types
```python
# ❌ Wrong - started with " but ended with ''
print("Hello!')

# ✅ Correct - match your quotes!
print("Hello!")
print(''Hello!'')
```

### Forgetting Quotes Around Text
```python
# ❌ Wrong
print(Hello World)

# ✅ Correct
print("Hello World")
```

---

## Key Points to Remember

✅ Each `print()` creates a new line
✅ Text goes inside quotation marks
✅ You can use `"double"` or `''single''` quotes
✅ `*` can repeat text
✅ Empty `print("")` creates blank lines

---

## What''s Next?

Next week, we learn about **Variables** - teaching Python to remember things! 📦
',
  'beginner',
  2,
  id,
  '## Message Experiment Lab 🧪

### Activity Goal
Experiment with print() to discover what works and what doesn''t!

### Part 1: What Will Happen? (5 min)

Before running each code, PREDICT what will happen:

```python
print("Hello" * 3)
```
Your prediction: _____________

```python
print("5 + 5")
```
Your prediction: _____________

```python
print("")
print("Surprise!")
```
Your prediction: _____________

### Part 2: Creative Challenge (15 min)

Create the MOST CREATIVE output using only print()!

**Rules:**
- Use at least 5 print statements
- Use at least one print trick (empty line, multiplication, or both)
- Make it look interesting!

**Ideas:**
- A face made of text
- A simple picture
- A formatted poem
- A mini story

### Part 3: Show and Tell (10 min)

- Share your creation with a partner
- Explain what print tricks you used
- Give each other one compliment and one suggestion

### Bonus Challenge ⭐
Can you make a box around text like this?
```
+------------+
|  My Name   |
+------------+
```',
  '## Homework: My Print Masterpiece 🎨

### Your Mission

Create a **print() masterpiece** - a creative Python program using only print statements!

### Requirements

Your program must have:

1. ✅ At least **8 print statements**
2. ✅ At least **one empty line** (blank space)
3. ✅ At least **one repeated character** (using `*`)
4. ✅ A **title** at the top
5. ✅ Be **creative and fun**!

### Ideas to Try

**Option A: About Me Poster**
```python
print("=" * 30)
print("    ALL ABOUT ME")
print("=" * 30)
print("")
print("Name: [Your name]")
# Keep going!
```

**Option B: Text Art**
```python
print("  /\\ ")
print(" /  \\")
print("/____\\")
print("A triangle!")
```

**Option C: Mini Story**
Create a 3-chapter story with separators between chapters!

**Option D: Your Own Idea!**
Surprise us!

### How to Submit

1. Write your code
2. Run it to make sure it works
3. Save it or take a screenshot
4. Bring it to share next week!

### Remember

- Check your spelling
- Match your quotation marks
- Have fun being creative! 🌟',
  false
FROM courses WHERE slug = 'term-1-hello-python';

-- Week 3: Variables are Boxes
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Variables are Boxes',
  'Store words and numbers in "boxes" (variables). Give them names and use them in your programs!',
  '# Variables are Boxes! 📦

## What You Will Learn Today

- What variables are and why they''re useful
- How to create variables
- How to use variables with print()
- Rules for naming variables

---

## What is a Variable?

Imagine you have a **labeled box** where you can store things.

- You write a name on the box (like "toys" or "snacks")
- You put something inside
- Later, you can look in the box to see what''s there!

In Python, a **variable** is like that box:
- It has a **name** (the label)
- It holds a **value** (what''s inside)

---

## Creating Variables

To create a variable, use the equals sign `=`:

```python
name = "Alex"
age = 10
favorite_color = "blue"
```

Here''s what happened:
- `name` is a box containing `"Alex"`
- `age` is a box containing `10`
- `favorite_color` is a box containing `"blue"`

---

## Using Variables with print()

Now comes the fun part - we can use our variables!

```python
name = "Alex"
print("Hello!")
print(name)
```

**Output:**
```
Hello!
Alex
```

### Combining Text and Variables

Use commas to combine text and variables:

```python
name = "Alex"
age = 10

print("My name is", name)
print("I am", age, "years old")
```

**Output:**
```
My name is Alex
I am 10 years old
```

---

## Two Types of Values

### Text (Strings) - Use Quotation Marks!
```python
name = "Alex"
city = "Toronto"
pet = ''dog''
```

### Numbers - No Quotation Marks!
```python
age = 10
score = 100
year = 2025
```

**Important:** 
- `"10"` is TEXT (a string)
- `10` is a NUMBER

---

## Changing Variables

Variables can **change** - that''s why they''re called variables!

```python
score = 0
print("Starting score:", score)

score = 10
print("New score:", score)

score = 25
print("Final score:", score)
```

**Output:**
```
Starting score: 0
New score: 10
Final score: 25
```

---

## Naming Rules 📋

### ✅ Good Variable Names
```python
name = "Alex"
player_score = 100
favoriteFood = "pizza"
age2 = 11
```

### ❌ Bad Variable Names
```python
# Spaces not allowed!
player score = 100  # ❌ Error!

# Can''t start with numbers!
2nd_place = "Sam"  # ❌ Error!

# No special characters!
player$ = "Alex"  # ❌ Error!
```

### Tips for Good Names
- Use lowercase letters
- Use underscores for spaces: `favorite_color`
- Make names **descriptive**: `player_name` not just `n`

---

## Practice Examples

### Example 1: About Me
```python
my_name = "Jordan"
my_age = 10
my_hobby = "reading"

print("Hi! I am", my_name)
print("I am", my_age, "years old")
print("I like", my_hobby)
```

### Example 2: My Pet
```python
pet_name = "Buddy"
pet_type = "dog"
pet_age = 3

print("I have a", pet_type, "named", pet_name)
print(pet_name, "is", pet_age, "years old")
```

---

## Key Vocabulary

| Word | Meaning |
|------|---------|
| **Variable** | A named container that stores a value |
| **Value** | What''s stored inside the variable |
| **String** | Text inside quotation marks |
| **Integer** | A whole number (no decimals) |
| **Assignment** | Using `=` to put a value in a variable |

---

## What''s Next?

Next week, we''ll learn to do even MORE with text - combining, changing, and manipulating strings! 🔤
',
  'beginner',
  3,
  id,
  '## Variable Box Activity 📦

### Setup
Bring in several small boxes or containers, each labeled with a variable name:
- Box labeled "name"
- Box labeled "age"  
- Box labeled "color"
- Box labeled "score"

Also bring index cards to write values on.

### Part 1: Physical Variables (10 min)

1. **Create Variables**
   - Write "Alex" on a card, put it in the "name" box
   - Write "10" on a card, put it in the "age" box
   - Ask: "What is in the name box?" (Alex!)

2. **Change Variables**
   - Remove "Alex", put in "Jordan"
   - Ask: "Now what is in name?" (Jordan!)
   - Discuss: The box kept its name, but the value changed!

3. **Student Turns**
   - Students take turns creating their own variables
   - They put their own values in boxes
   - Others guess what''s in each box

### Part 2: Code Connection (15 min)

Now connect to real code:

```python
# This is like putting "Alex" in the "name" box!
name = "Alex"
```

Have students:
1. Write a variable on paper
2. Hold up their "box" (hands cupped)
3. Say what''s "inside"

### Part 3: Variable Swap Game (10 min)

1. Give 4 students cards with values
2. Give 4 other students signs with variable names
3. The "value" students must stand next to the right "variable"
4. Change assignments - values move to new variables!

### Discussion Questions
- Why do we call them "variables"? (They can vary/change!)
- What''s the difference between the name and the value?
- Why are good variable names important?',
  '## Homework: My Variable Collection 📝

### Your Mission

Create a Python program that stores information about YOU using variables!

### Requirements

Create variables for:

1. ✅ Your **name** (text)
2. ✅ Your **age** (number)
3. ✅ Your **favorite color** (text)
4. ✅ Your **favorite food** (text)
5. ✅ Your **lucky number** (number)

Then print them all out nicely!

### Starter Code

```python
# My Variable Collection
# By: [Your Name]

# Create your variables here
name = "???"
age = ???
favorite_color = "???"
favorite_food = "???"
lucky_number = ???

# Print everything out
print("=== All About Me ===")
print("")
print("Name:", name)
print("Age:", age)
# Add more print statements!
```

### Bonus Challenges ⭐

**Challenge 1:** Add 3 more variables about yourself
- Maybe: `pet_name`, `favorite_game`, `best_friend`

**Challenge 2:** Make it fancy with borders
```python
print("=" * 25)
print("    ALL ABOUT ME")
print("=" * 25)
```

**Challenge 3:** Change a variable and show both values
```python
score = 0
print("Starting score:", score)
score = 100
print("Ending score:", score)
```

### Remember
- Text needs quotation marks: `"like this"`
- Numbers don''t need quotes: `10`
- Variable names can''t have spaces

### Bring to Class
Be ready to share your variable collection!',
  false
FROM courses WHERE slug = 'term-1-hello-python';

-- Week 4: Playing with Text
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Playing with Text',
  'Combine text, make silly sentences, use CAPS and lowercase. Become a text master!',
  '# Playing with Text! 🔤

## What You Will Learn Today

- How to combine (concatenate) text
- How to make text UPPERCASE and lowercase
- How to find the length of text
- Cool text tricks!

---

## Review: Strings

Remember, text in Python is called a **string**. Strings go inside quotation marks:

```python
greeting = "Hello"
name = "Alex"
```

Today we''ll learn string **superpowers**! 💪

---

## Combining Text (Concatenation)

You can glue strings together using the `+` sign!

```python
first = "Hello"
second = "World"
together = first + second
print(together)
```

**Output:** `HelloWorld`

Oops! We need a space:

```python
first = "Hello"
second = "World"
together = first + " " + second
print(together)
```

**Output:** `Hello World`

### Building Sentences

```python
name = "Alex"
greeting = "Hello, " + name + "!"
print(greeting)
```

**Output:** `Hello, Alex!`

### With Variables

```python
animal = "cat"
color = "orange"
sentence = "I have an " + color + " " + animal
print(sentence)
```

**Output:** `I have an orange cat`

---

## String Superpowers! ✨

Strings have special powers called **methods**. Use them with a dot `.`

### .upper() - MAKE IT LOUD!

```python
message = "hello"
loud_message = message.upper()
print(loud_message)
```

**Output:** `HELLO`

### .lower() - make it quiet

```python
message = "HELLO"
quiet_message = message.lower()
print(quiet_message)
```

**Output:** `hello`

### .capitalize() - First letter big

```python
name = "alex"
proper_name = name.capitalize()
print(proper_name)
```

**Output:** `Alex`

### .title() - Every Word Capitalized

```python
book = "harry potter"
book_title = book.title()
print(book_title)
```

**Output:** `Harry Potter`

---

## How Long is My String?

Use `len()` to count characters:

```python
name = "Alex"
print(len(name))
```

**Output:** `4` (A-l-e-x = 4 letters!)

```python
sentence = "Hello World"
print(len(sentence))
```

**Output:** `11` (spaces count too!)

---

## Fun Text Tricks! 🎩

### Trick 1: Repeat Text
```python
laugh = "Ha"
big_laugh = laugh * 5
print(big_laugh)
```

**Output:** `HaHaHaHaHa`

### Trick 2: Create Patterns
```python
print("🌟" * 10)
print("=-" * 15)
```

### Trick 3: Yelling Names!
```python
name = "alex"
yell = name.upper() + "!!!"
print(yell)
```

**Output:** `ALEX!!!`

---

## Building a Mad Libs! 📝

```python
adjective = "silly"
noun = "elephant"
verb = "danced"
place = "moon"

story = "The " + adjective + " " + noun + " " + verb + " on the " + place + "!"
print(story)
```

**Output:** `The silly elephant danced on the moon!`

---

## Common Mistakes

### Forgetting the Space
```python
# ❌ Squished!
print("Hello" + "World")  # HelloWorld

# ✅ Add a space!
print("Hello" + " " + "World")  # Hello World
```

### Mixing Strings and Numbers
```python
age = 10

# ❌ Error! Can''t add string and number
print("I am " + age)

# ✅ Fix: Use comma instead
print("I am", age)

# ✅ Or convert number to string
print("I am " + str(age))
```

---

## Key Vocabulary

| Term | Meaning |
|------|---------|
| **Concatenation** | Joining strings together with `+` |
| **Method** | A special power strings have (like `.upper()`) |
| **len()** | Function that tells you string length |

---

## What''s Next?

Next week is **Practice & Play** - we''ll use everything we''ve learned to make fun programs! 🎮
',
  'beginner',
  4,
  id,
  '## Silly Sentence Factory 🏭

### Part 1: Mad Libs Game (15 min)

Students work in pairs:

1. **Partner A** creates variables WITHOUT showing Partner B:
```python
adjective1 = "???"
noun1 = "???"
verb = "???"
adjective2 = "???"
noun2 = "???"
```

2. **Partner B** fills in values (without knowing the story!)
   - "Give me an adjective" → "purple"
   - "Give me a noun" → "banana"
   - etc.

3. **Reveal the story!**
```python
story = "The " + adjective1 + " " + noun1 + " " + verb + " over the " + adjective2 + " " + noun2 + "!"
print(story)
```

### Part 2: Text Transformation Relay (10 min)

Split class into teams. Each team has a string to transform:

Starting string: `"hello world python"`

Round 1: Make it uppercase → `HELLO WORLD PYTHON`
Round 2: Make it title case → `Hello World Python`
Round 3: Add exclamation marks → `Hello World Python!!!`
Round 4: Multiply by 2 → (repeat the string)

First team to correctly complete all transformations wins!

### Part 3: Name Tag Designer (10 min)

Create a program that makes a fancy name tag:

```python
name = "Alex"

print("+" + "-" * (len(name) + 4) + "+")
print("|  " + name + "  |")
print("+" + "-" * (len(name) + 4) + "+")
```

**Challenge:** Make it work for ANY name!

### Discussion
- Why is `len()` useful for the name tag?
- What other creative things could we build with string methods?',
  '## Homework: Name Badge Designer 🏷️

### Your Mission

Create a program that makes a FANCY name badge using everything you learned about strings!

### Requirements

Your name badge must have:

1. ✅ A decorative **border** (using `*`, `-`, `=`, or other characters)
2. ✅ Your **name** in the center (use a variable!)
3. ✅ Your name displayed in **UPPERCASE**
4. ✅ At least **3 facts** about you
5. ✅ A **closing border**

### Example Output

```
*************************
*                       *
*     ALEX SMITH        *
*                       *
*************************

Facts About Me:
- Age: 10
- Hobby: Reading
- Pet: Dog named Max

*************************
```

### Starter Code

```python
# Name Badge Designer
# By: [Your Name]

name = "your name here"

# Create your border
print("*" * 25)

# Print your name (make it uppercase!)
print("*", name.upper(), "*")

# Add facts about you

# Close with another border
print("*" * 25)
```

### Bonus Challenges ⭐

**Challenge 1:** Center your name perfectly
Use `len()` to calculate spacing!

**Challenge 2:** Add emojis
```python
print("🌟 " + name.upper() + " 🌟")
```

**Challenge 3:** Create TWO badges
One for you, one for a friend or family member!

### Tips
- Test your code after each change
- Use `len(name)` to make borders fit any name
- Get creative with your border design!

### Bring to Class
Printout or screenshot of your name badge!',
  false
FROM courses WHERE slug = 'term-1-hello-python';

-- Week 5: Practice & Play
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Practice & Play',
  'Reinforce concepts with fun challenges and games. Put everything together!',
  '# Practice & Play! 🎮

## What We Are Doing Today

Today is all about PRACTICE and FUN! We''ll use everything we''ve learned:
- ✅ print() statements
- ✅ Variables
- ✅ Strings and string methods
- ✅ Combining text

Let''s play some coding games! 🎯

---

## Challenge 1: All About Me 👤

Create a program that introduces you!

```python
# All About Me
name = "???"
age = ???
favorite_animal = "???"
favorite_food = "???"
dream_job = "???"

print("=" * 30)
print("     ALL ABOUT ME")
print("=" * 30)
print("")
print("Name:", name)
print("Age:", age)
print("Favorite Animal:", favorite_animal)
print("Favorite Food:", favorite_food)
print("Dream Job:", dream_job)
print("")
print("=" * 30)
```

Make it YOUR OWN! Add more facts!

---

## Challenge 2: Story Builder 📖

Fill in the blanks to create a silly story!

```python
# Silly Story Generator
character = "robot"
action = "dancing"
place = "moon"
object = "pizza"

print("Once upon a time...")
print("A", character, "was", action, "on the", place)
print("Suddenly, a giant", object, "fell from the sky!")
print("The End!")
```

**Your Turn:** Change the variables to make YOUR silly story!

---

## Challenge 3: ASCII Art 🎨

Make pictures using text characters!

### Simple Cat
```python
print(" /\\_/\\ ")
print("( o.o )")
print(" > ^ <")
```

### Simple House
```python
print("   /\\   ")
print("  /  \\  ")
print(" /____\\ ")
print(" |    | ")
print(" | [] | ")
print(" |____| ")
```

**Your Turn:** Create your own ASCII art! Ideas:
- A tree
- A face
- A rocket
- Your initial

---

## Challenge 4: Word Transformer 🔮

Take a word and transform it multiple ways!

```python
word = "hello"

print("Original:", word)
print("SHOUTING:", word.upper())
print("Whispering:", word.lower())
print("Proper:", word.capitalize())
print("Repeated:", word * 3)
print("Length:", len(word), "letters")
```

**Your Turn:** Try it with different words!

---

## Challenge 5: Greeting Card 💌

Make a birthday card for someone!

```python
name = "Alex"
age = 10

print("*" * 30)
print("")
print("   🎂 HAPPY BIRTHDAY! 🎂")
print("")
print("   Dear", name + ",")
print("")
print("   You are now", age, "years old!")
print("   May all your wishes come true!")
print("")
print("   🎈 🎁 🎉")
print("")
print("*" * 30)
```

**Your Turn:** Make a card for someone you know!

---

## Challenge 6: Quiz Show Host 🎤

Create an intro for a quiz show!

```python
show_name = "SUPER BRAIN CHALLENGE"
host_name = "Alex"

print("")
print("🌟" * 15)
print("")
print("Welcome to...")
print("")
print(show_name.upper() + "!!!")
print("")
print("I''m your host,", host_name + "!")
print("")
print("Let''s play!")
print("")
print("🌟" * 15)
```

---

## Mini Code Golf ⛳

Try to solve these using the FEWEST lines of code!

### Problem 1
Print "Python" 5 times, each on a new line.

### Problem 2  
Print a line of 50 dashes.

### Problem 3
Store your name and print it in uppercase.

---

## Reflection 🤔

Think about what you learned:

1. What was the EASIEST thing you learned?
2. What was the HARDEST thing?
3. What do you want to learn MORE about?
4. What cool project would you like to make?

---

## What''s Next?

Next week, we become **Bug Detectives**! 🔍 We''ll learn how to find and fix mistakes in code. Every programmer needs this superpower!
',
  'beginner',
  5,
  id,
  '## Coding Olympics! 🏅

### Setup
Divide class into teams of 2-3 students.

### Event 1: Speed Print (5 min)
First team to correctly print this EXACT output wins:

```
Hello, World!
I love Python!
Coding is fun!
```

### Event 2: Variable Relay (8 min)
Each team member adds one variable, then combines them:

Student 1: Creates `adjective` variable
Student 2: Creates `animal` variable  
Student 3: Creates `action` variable
All together: Print "The [adjective] [animal] [action]!"

### Event 3: Transformation Challenge (7 min)
Given: `message = "python is awesome"`

Transform it to show:
1. All uppercase
2. Title case
3. Repeated 3 times
4. Length

First team with all 4 correct wins!

### Event 4: Creative Sprint (10 min)
Create the most CREATIVE program using:
- At least 3 variables
- At least 5 print statements
- At least 1 string method

Teams vote on most creative (can''t vote for own team).

### Event 5: Debug Race (5 min)
Fix this broken code as fast as possible:

```python
Name = "alex"
print("Hello" name)
print(Name.UPPER())
print("Goodbye)
```

### Awards Ceremony
- Gold Medal: Overall winner
- Creativity Award: Most creative program
- Team Spirit Award: Best collaboration',
  '## Homework: Practice Collection 📚

### Your Mission

Complete at least 3 of these 5 practice challenges!

### Challenge A: Personal Info Card ⭐

Create variables for:
- Your full name
- Your age
- Your school
- Your favorite subject

Then print them all nicely with borders!

### Challenge B: Silly Story ⭐

Create a mad-libs style story with at least:
- 3 adjectives
- 2 nouns
- 1 verb
- 1 place

Print the complete story!

### Challenge C: ASCII Art ⭐⭐

Create ASCII art of ONE of these:
- Your first initial (big and fancy!)
- An animal
- A vehicle
- A house

Use at least 5 print statements!

### Challenge D: Word Analysis ⭐⭐

Pick your FAVORITE word and create a program that shows:
1. The word in lowercase
2. The word in UPPERCASE
3. The word in Title Case
4. How many letters it has
5. The word repeated 5 times

### Challenge E: Greeting Generator ⭐⭐⭐

Create a program that makes a greeting card. It should have:
- A variable for the person''s name
- A variable for the occasion (birthday, thank you, congrats)
- A decorated border
- A personalized message

### How to Submit

1. Pick at least 3 challenges
2. Write the code for each
3. Test that it runs
4. Bring your code to class (printed or on device)

### Bonus Points
- Complete all 5 challenges: +10 points!
- Extra creative solutions: +5 points!
- Help a classmate: +5 points!',
  false
FROM courses WHERE slug = 'term-1-hello-python';

-- Week 6: Debugging Adventures
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Debugging Adventures',
  'Finding and fixing mistakes (bugs) — it''s like being a detective! Learn debugging superpowers.',
  '# Debugging Adventures! 🔍

## What You Will Learn Today

- What bugs are and where they come from
- How to read error messages
- How to find and fix bugs
- Debugging strategies

---

## What is a Bug? 🐛

A **bug** is a mistake in your code that makes it not work correctly.

### Where Did the Name Come From?

In 1947, a computer scientist named Grace Hopper found an actual moth stuck in a computer! She taped it in her notebook and wrote "First actual case of bug being found." Since then, we call code mistakes "bugs"!

---

## Meet Your Bug Hunting Tools 🔧

### Tool 1: Error Messages

When Python finds a problem, it tells you! Error messages are like clues.

```python
print("Hello)
```

**Error:**
```
SyntaxError: EOL while scanning string literal
```

Translation: "You started a string with `"` but never closed it!"

### Tool 2: Your Eyes

Read your code carefully, line by line. Look for:
- Spelling mistakes
- Missing punctuation
- Wrong capitalization

### Tool 3: Comments

Use `#` to disable code and test:

```python
print("Line 1")
# print("Line 2")  # testing if this is the problem
print("Line 3")
```

---

## Common Bugs and How to Fix Them

### Bug 1: Syntax Error - Missing Quote

```python
# ❌ Bug
print("Hello World)

# ✅ Fixed
print("Hello World")
```

**Clue:** Look for the red squiggly line!

### Bug 2: Name Error - Typo in Variable Name

```python
# ❌ Bug
name = "Alex"
print(nane)  # Oops! "nane" instead of "name"

# ✅ Fixed
name = "Alex"
print(name)
```

**Clue:** `NameError: name ''nane'' is not defined`

### Bug 3: Syntax Error - Wrong Case

```python
# ❌ Bug
Print("Hello")  # Capital P doesn''t work!

# ✅ Fixed
print("Hello")
```

**Clue:** `NameError: name ''Print'' is not defined`

### Bug 4: Type Error - Mixing Types

```python
# ❌ Bug
age = 10
print("I am " + age)  # Can''t add string and number!

# ✅ Fixed (Option 1: use comma)
print("I am", age)

# ✅ Fixed (Option 2: convert to string)
print("I am " + str(age))
```

**Clue:** `TypeError: can only concatenate str (not "int") to str`

### Bug 5: Missing Parentheses

```python
# ❌ Bug
print "Hello"

# ✅ Fixed
print("Hello")
```

---

## The Debug Dance 🕺

When you find a bug, do the Debug Dance:

1. **STOP** - Don''t panic!
2. **READ** - Read the error message
3. **FIND** - Find the line with the problem
4. **THINK** - What could be wrong?
5. **FIX** - Make ONE change
6. **TEST** - Run the code again

---

## Debug Challenge: Can You Find the Bugs?

### Challenge 1 (1 bug)
```python
print("Welcome to Python!)
```

### Challenge 2 (2 bugs)
```python
nam = "Alex"
print("Hello, " + Name)
```

### Challenge 3 (3 bugs)
```python
Print("My favorite number is" + 7)
```

### Challenge 4 (4 bugs)
```python
color = Blue
Prnt("My favorite color is, color)
```

---

## Pro Debugging Tips 💡

### Tip 1: Read Error Messages!
They tell you:
- What kind of error
- What line it''s on
- What Python expected

### Tip 2: Check the Line BEFORE
Sometimes the bug is on the line BEFORE where Python complains!

### Tip 3: Use print() to Debug
Add print statements to see what''s happening:

```python
name = "Alex"
print("DEBUG: name =", name)  # See what''s stored
```

### Tip 4: Ask "What Changed?"
If code worked before, what did you change?

---

## Bugs Are Normal! 🌟

Every programmer gets bugs - even professionals! The difference is:

- Beginners: "Oh no, I broke it!"
- Experts: "Oh cool, a puzzle to solve!"

Debugging is a **skill**. The more you practice, the better you get!

---

## What''s Next?

Next week, we start building our first BIG project - the **Joke Machine**! 🎭 Get ready to make Python tell jokes!
',
  'beginner',
  6,
  id,
  '## Bug Detective Agency 🔍

### Setup
Students become "Bug Detectives" at the "Python Bug Detective Agency"

### Case File 1: The Missing Quote (5 min)
```python
message = "Hello World
print(message)
```

**Detective Questions:**
- What error do we get?
- What line is the problem on?
- What''s missing?

### Case File 2: The Mysterious Name (5 min)
```python
player_name = "Alex"
print("Hello,", PlayerName)
```

**Detective Questions:**
- Will this run?
- What''s the error?
- Why does Python say it''s not defined?

### Case File 3: The Type Mix-Up (7 min)
```python
score = 100
print("Your score is: " + score)
```

**Detective Questions:**
- What type is "Your score is: "?
- What type is score?
- How can we fix it?

### Case File 4: Multiple Suspects (8 min)
This code has 4 bugs! Find them all:

```python
Print("Welcome to my game!)
playr_name = "Alex"
print("Hello" player_name)
print("Your age is: " + 10
```

### Graduation Exercise (10 min)

Students write BUGGY code on purpose:
1. Each student writes code with 3 intentional bugs
2. Trade with a partner
3. Partner finds and fixes all bugs
4. Discuss what was tricky

### Badge Award
Students who find all bugs earn the "Bug Detective Badge" 🏅',
  '## Homework: Bug Fixing Challenge 🐛

### Your Mission

Fix ALL the bugs in these programs!

### Program 1: Introduction (2 bugs)
```python
name = "Alex
print("Hello, my name is" name)
```

Write the FIXED code and explain what was wrong.

### Program 2: Math Display (3 bugs)
```python
number = 5
Print("My lucky number is: + number)
print("Double that is:", number * 2
```

Write the FIXED code and explain what was wrong.

### Program 3: Story Time (4 bugs)
```python
hero = "Super Cat
villain = "Dr. Evil"
print(Hero, "battles", villan)
print("Who will win?!)
```

Write the FIXED code and explain what was wrong.

### Program 4: The Big One (5 bugs)
```python
my name = "Jordan"
my_age = ten
Print("Hi! I am, my_name)
print("I am" + my_age + "years old)
print(My name has", len(my_name), "letters")
```

Write the FIXED code and explain what was wrong.

### Bonus Challenge: Create Your Own! ⭐

Write a program with exactly 3 bugs hidden inside. Make sure:
1. The bugs are different types
2. You know how to fix them
3. Write the answer key separately

Bring to class - we''ll trade and solve each other''s!

### Submission Format

For each program, write:
1. **Bug Found:** What was wrong
2. **Fixed Code:** The corrected version
3. **Explanation:** Why it was wrong

### Remember
- Read error messages carefully
- Check spelling and capitalization
- Make sure quotes and parentheses match!',
  false
FROM courses WHERE slug = 'term-1-hello-python';

-- Week 7: Project - Joke Machine
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Project: Joke Machine',
  'Build a program that tells jokes, one at a time. Your first complete project!',
  '# Project: Joke Machine! 🎭

## What We Are Building

Today we start building your first complete project: **The Joke Machine!**

A program that:
- ✅ Welcomes the user
- ✅ Tells jokes with setup and punchline
- ✅ Uses variables to store jokes
- ✅ Looks fun and polished!

---

## Project Overview

### Example Output
```
🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭

     WELCOME TO THE JOKE MACHINE!

🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭

Get ready to laugh! Here come the jokes...

------------------------------

Joke #1:
Why don''t scientists trust atoms?

...

Because they make up everything!

😂😂😂

------------------------------

Joke #2:
What do you call a fish without eyes?

...

A fsh!

🤣🤣🤣

------------------------------

Thanks for laughing with me!
Run me again for more giggles! 

🎭 THE END 🎭
```

---

## Step 1: Plan Your Jokes

First, collect your jokes! You need at least 3.

### Joke Format
Every joke has two parts:
1. **Setup** - The question or beginning
2. **Punchline** - The funny answer!

### Example Jokes

**Joke 1:**
- Setup: "Why don''t scientists trust atoms?"
- Punchline: "Because they make up everything!"

**Joke 2:**
- Setup: "What do you call a fish without eyes?"
- Punchline: "A fsh!"

**Joke 3:**
- Setup: "Why did the scarecrow win an award?"
- Punchline: "Because he was outstanding in his field!"

---

## Step 2: Create the Welcome Screen

```python
# Joke Machine
# By: [Your Name]

print("🎭" * 15)
print("")
print("     WELCOME TO THE JOKE MACHINE!")
print("")
print("🎭" * 15)
print("")
print("Get ready to laugh! Here come the jokes...")
print("")
```

---

## Step 3: Store Your Jokes in Variables

```python
# Joke 1
joke1_setup = "Why don''t scientists trust atoms?"
joke1_punchline = "Because they make up everything!"

# Joke 2
joke2_setup = "What do you call a fish without eyes?"
joke2_punchline = "A fsh!"

# Joke 3
joke3_setup = "Why did the scarecrow win an award?"
joke3_punchline = "Because he was outstanding in his field!"
```

---

## Step 4: Display Each Joke

```python
# Joke #1
print("-" * 30)
print("")
print("Joke #1:")
print(joke1_setup)
print("")
print("...")
print("")
print(joke1_punchline)
print("")
print("😂" * 3)
print("")
```

Repeat for jokes 2 and 3!

---

## Step 5: Add the Ending

```python
print("-" * 30)
print("")
print("Thanks for laughing with me!")
print("Run me again for more giggles!")
print("")
print("🎭 THE END 🎭")
```

---

## Complete Code Template

```python
# ================================
# THE JOKE MACHINE
# By: [Your Name]
# ================================

# === WELCOME SCREEN ===
print("🎭" * 15)
print("")
print("     WELCOME TO THE JOKE MACHINE!")
print("")
print("🎭" * 15)
print("")
print("Get ready to laugh!")
print("")

# === STORE THE JOKES ===
joke1_setup = "YOUR FIRST JOKE SETUP"
joke1_punchline = "YOUR FIRST JOKE PUNCHLINE"

joke2_setup = "YOUR SECOND JOKE SETUP"
joke2_punchline = "YOUR SECOND JOKE PUNCHLINE"

joke3_setup = "YOUR THIRD JOKE SETUP"
joke3_punchline = "YOUR THIRD JOKE PUNCHLINE"

# === TELL THE JOKES ===

# Joke 1
print("-" * 30)
print("Joke #1:")
print(joke1_setup)
print("...")
print(joke1_punchline)
print("😂" * 3)

# Joke 2
print("-" * 30)
print("Joke #2:")
print(joke2_setup)
print("...")
print(joke2_punchline)
print("🤣" * 3)

# Joke 3
print("-" * 30)
print("Joke #3:")
print(joke3_setup)
print("...")
print(joke3_punchline)
print("😆" * 3)

# === ENDING ===
print("-" * 30)
print("")
print("Thanks for laughing with me!")
print("🎭 THE END 🎭")
```

---

## Project Requirements ✅

Your Joke Machine MUST have:

| Requirement | Check |
|-------------|-------|
| Welcome message | ⬜ |
| At least 3 jokes | ⬜ |
| Jokes stored in variables | ⬜ |
| Visual separators between jokes | ⬜ |
| Ending message | ⬜ |
| No bugs! | ⬜ |

---

## Bonus Challenges ⭐

1. **More Jokes** - Add 2 more jokes!
2. **Themed Jokes** - All animal jokes, or all food jokes
3. **Fancy Design** - Make the borders extra creative
4. **Personal Touch** - Add your name and a custom message

---

## What''s Next?

Next week is **Showcase Party**! 🎉 You''ll share your Joke Machine with the class. Make sure it''s ready and polished!
',
  'beginner',
  7,
  id,
  '## Joke Machine Workshop 🏗️

### Part 1: Joke Collection (10 min)

1. Students brainstorm jokes in small groups
2. Each student picks their TOP 3 jokes
3. Write down the setup and punchline for each

### Part 2: Code Along (20 min)

Build the basic structure together:

1. **Welcome Screen** (5 min)
   - Everyone creates the opening
   - Test and run

2. **First Joke** (5 min)
   - Create variables for setup and punchline
   - Print with formatting
   - Test and run

3. **Add More Jokes** (10 min)
   - Students add their own jokes
   - Help each other debug

### Part 3: Customization Time (15 min)

Students work independently to:
- Add more jokes
- Customize the design
- Make it unique!

### Part 4: Pair Testing (10 min)

1. Partner A runs their Joke Machine
2. Partner B gives feedback:
   - Does it run without errors?
   - Are the jokes funny?
   - Is the design nice?
   - Any suggestions?
3. Switch roles!

### Teacher Checkpoints

Walk around and verify:
- Variables are named well
- No bugs present
- At least 3 jokes included
- Student''s name is on the project',
  '## Homework: Finish Your Joke Machine! 🎭

### Your Mission

Complete your Joke Machine project for next week''s Showcase Party!

### Checklist

Make sure your Joke Machine has:

✅ **Opening**
- [ ] Welcome message
- [ ] Decorative border/emojis
- [ ] Your name as the creator

✅ **Jokes (at least 3)**
- [ ] Joke 1 with setup and punchline in variables
- [ ] Joke 2 with setup and punchline in variables
- [ ] Joke 3 with setup and punchline in variables
- [ ] Visual separator between jokes
- [ ] Reaction emojis after punchlines

✅ **Closing**
- [ ] Thank you message
- [ ] Fun ending

✅ **Quality**
- [ ] Runs without errors
- [ ] Good variable names
- [ ] Neat formatting
- [ ] Tested multiple times

### Bonus Points ⭐

- [ ] +5 points: More than 3 jokes
- [ ] +5 points: Extra creative design
- [ ] +5 points: Theme (all animal jokes, all school jokes, etc.)
- [ ] +5 points: Joke titles (not just "Joke #1")

### Practice Your Presentation!

Next week you''ll present to the class. Practice:
1. Introducing yourself
2. Running your program
3. Explaining one thing you learned
4. Answering questions

### Show It Off Early! 🌟

Share your Joke Machine with family or friends this week!
- Run it for them
- See if they laugh
- Get their feedback

### Questions?

Bring any questions to class. We''ll have time to help polish your projects before the showcase!',
  true
FROM courses WHERE slug = 'term-1-hello-python';

-- Week 8: Showcase Party!
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Showcase Party!',
  'Share our Joke Machines, celebrate our achievements, and get excited for Term 2!',
  '# Showcase Party! 🎉

## Congratulations! 🏆

You made it to the end of **Term 1: Hello Python!**

Today is all about **celebrating** what you''ve accomplished!

---

## What You Learned in Term 1

Look at all the amazing things you can now do:

✅ **Week 1:** What programming is
✅ **Week 2:** Using `print()` to display messages
✅ **Week 3:** Storing data in variables
✅ **Week 4:** Working with text and strings
✅ **Week 5:** Practicing all your skills
✅ **Week 6:** Finding and fixing bugs
✅ **Week 7:** Building a complete project!

**You are officially a Python programmer!** 🐍

---

## Today''s Schedule

| Time | Activity |
|------|----------|
| First 15 min | Final polish & practice |
| 30 min | Showcase presentations |
| 10 min | Awards & celebration |
| 5 min | Preview of Term 2 |

---

## Presentation Tips

### When Presenting:

1. **Introduce yourself**
   - "Hi, I''m [name] and this is my Joke Machine!"

2. **Run your program**
   - Show it working from start to finish

3. **Share something you learned**
   - "One thing I learned was..."
   - "The hardest part was..."
   - "I''m proud of..."

4. **Answer questions**
   - Classmates might ask how you did something!

### When Watching:

- 👏 Clap after each presentation
- 🤔 Think of a nice comment or question
- 📝 Notice cool ideas you could try

---

## Reflection Questions

Think about your journey:

1. **What was your FAVORITE thing you learned?**

2. **What was the HARDEST thing?**

3. **What are you MOST PROUD of?**

4. **What do you want to learn NEXT?**

---

## Term 1 Skills Review

Can you explain these to someone else?

| Concept | Example | Can You Explain It? |
|---------|---------|---------------------|
| print() | `print("Hello")` | ⬜ |
| Variables | `name = "Alex"` | ⬜ |
| Strings | `"text in quotes"` | ⬜ |
| String methods | `.upper()`, `.lower()` | ⬜ |
| len() | `len("hello")` = 5 | ⬜ |
| Concatenation | `"Hi " + name` | ⬜ |
| Debugging | Finding and fixing bugs | ⬜ |

---

## Coming Up: Term 2 Preview! 🔮

In **Term 2: Math Wizard**, you''ll learn:

- How to do math with Python (it''s like a super calculator!)
- How to ask the user for information with `input()`
- How to convert between text and numbers
- Build a **Personal Calculator** project!

### Sneak Peek Code:

```python
# This is coming in Term 2!
name = input("What is your name? ")
print("Hello,", name, "!")

number1 = int(input("Enter a number: "))
number2 = int(input("Enter another number: "))
print("The sum is:", number1 + number2)
```

Get excited! 🚀

---

## Thank You! 🌟

You worked hard this term. You:
- Showed up and tried your best
- Didn''t give up when things were hard
- Helped your classmates
- Built something cool!

**Keep coding, keep curious, keep being awesome!**

---

## See You in Term 2! 👋

🐍 Happy Coding! 🐍
',
  'beginner',
  8,
  id,
  '## Showcase Party Activities 🎉

### Pre-Show Prep (15 min)

**Final Polish Station**
- Students finish any last-minute fixes
- Practice running their programs
- Prepare what they''ll say

**Setup**
- Arrange desks/chairs for presentations
- Test the display screen
- Have celebration supplies ready

### Showcase Presentations (30 min)

**Format for Each Student (2-3 min):**
1. Introduction (name, project name)
2. Run the Joke Machine
3. Share one thing learned
4. Take 1 question

**Audience Tasks:**
- Rate each joke (thumbs up scale)
- Write one compliment on a sticky note
- Think of questions

**Teacher Role:**
- Keep time
- Encourage applause
- Prompt questions if needed

### Awards Ceremony (10 min)

**Award Categories:**
- 🏆 Funniest Jokes
- 🎨 Best Design
- 🐛 Master Debugger (overcame challenges)
- 💡 Most Creative
- 🤝 Best Helper (helped classmates)
- ⭐ All students: "Term 1 Completer" certificate

**Certificate Wording:**
"This certifies that [NAME] has successfully completed Term 1: Hello Python! and is now an official Python Programmer!"

### Celebration! (5 min)

- Snacks/treats (if allowed)
- Share sticky note compliments
- Take group photo
- Preview Term 2 excitement

### Parent Option

If parents can attend:
- Students present to their parents
- Parents ask questions
- Family celebration!',
  '## Celebrating Your Achievement! 🎊

### No Homework This Week!

You earned a break! But here are some FUN optional things to do:

---

### Option 1: Share Your Joke Machine 📱

Show your Joke Machine to:
- [ ] A parent or guardian
- [ ] A sibling
- [ ] A grandparent
- [ ] A friend
- [ ] Anyone who needs a laugh!

**Ask them:**
- Which joke was their favorite?
- Were they surprised you made this?

---

### Option 2: Expand Your Joke Machine ⭐

Add more jokes! Can you get to:
- [ ] 5 jokes
- [ ] 7 jokes
- [ ] 10 jokes (Joke Machine Pro!)

Or add new features:
- [ ] Different categories (animal jokes, food jokes)
- [ ] A "credits" section at the end
- [ ] More emojis and decorations

---

### Option 3: Teach Someone! 👨‍🏫

Try teaching someone else how to:
- Write a print statement
- Create a variable
- Fix a bug

Teaching is the BEST way to learn!

---

### Option 4: Explore More Python 🔍

Try experimenting with things we learned:
- What happens if you multiply a string by 0?
- Can you make a REALLY long border?
- What''s the longest word you can type?

---

### Get Ready for Term 2! 🚀

**Coming attractions:**
- Python as a calculator
- Asking the user questions
- Building a personal calculator app

**Prepare by thinking about:**
- What calculations do you do in daily life?
- What would you want a calculator to do?

---

### Thank You!

You worked SO hard this term. Be proud of yourself!

See you in Term 2! 🐍✨',
  true
FROM courses WHERE slug = 'term-1-hello-python';

-- =====================================================
-- VERIFICATION
-- =====================================================

-- Verify courses created
-- SELECT title, slug, term_number, is_coming_soon FROM courses ORDER BY order_index;

-- Verify lessons created for Term 1
-- SELECT title, order_index FROM lessons WHERE course_id = (SELECT id FROM courses WHERE slug = 'term-1-hello-python') ORDER BY order_index;

