-- 1. Schema Changes
-- Add year_group to courses table
ALTER TABLE courses ADD COLUMN IF NOT EXISTS year_group TEXT;
-- Add new fields to lessons table
ALTER TABLE lessons ADD COLUMN IF NOT EXISTS class_activities TEXT;
ALTER TABLE lessons ADD COLUMN IF NOT EXISTS take_home_assignment TEXT;

-- 2. Clear old mappings
-- Unlink existing lessons so we can start fresh with the new structure
UPDATE lessons SET course_id = NULL;

-- 3. Create New Course Structure (Levels 1-12)

-- Year 1: Foundations
INSERT INTO courses (title, description, slug, order_index, age_range, year_group, is_coming_soon) VALUES
('Level 1: Python Foundations I', 'Getting Started with Python programming basics.', 'level-1-python-foundations-1', 1, '9-13', 'Year 1: Foundations', false),
('Level 2: Python Foundations II', 'Control Flow: Loops and Logic.', 'level-2-python-foundations-2', 2, '9-13', 'Year 1: Foundations', false),
('Level 3: Python Foundations III', 'Functions, Data Structures, and Organization.', 'level-3-python-foundations-3', 3, '9-13', 'Year 1: Foundations', false),
('Level 4: Introduction to AI', 'Meet Your Robot Brain: Concepts and Ethics.', 'level-4-intro-to-ai', 4, '9-13', 'Year 1: Foundations', false),
('Level 5: Data Science', 'The AI Fuel: Collection and Analysis.', 'level-5-data-science', 5, '9-13', 'Year 1: Foundations', false),
('Level 6: Machine Learning Basics', 'Teaching Computers to Learn.', 'level-6-ml-basics', 6, '9-13', 'Year 1: Foundations', false)
ON CONFLICT (slug) DO UPDATE SET 
title = EXCLUDED.title,
description = EXCLUDED.description,
year_group = EXCLUDED.year_group,
order_index = EXCLUDED.order_index,
is_coming_soon = EXCLUDED.is_coming_soon;

-- Year 2: Applied AI (Coming Soon)
INSERT INTO courses (title, description, slug, order_index, age_range, year_group, is_coming_soon) VALUES
('Level 7: Natural Language Processing', 'Word Detective: Chatbots and Text.', 'level-7-nlp', 7, '10-14', 'Year 2: Applied AI', true),
('Level 8: Computer Vision', 'Teaching AI to See.', 'level-8-computer-vision', 8, '10-14', 'Year 2: Applied AI', true),
('Level 9: Recommendation Systems', 'The Netflix Brain.', 'level-9-recommendations', 9, '10-14', 'Year 2: Applied AI', true),
('Level 10: Game AI', 'Smart Opponents and Strategy.', 'level-10-game-ai', 10, '10-14', 'Year 2: Applied AI', true),
('Level 11: Advanced Projects', 'Putting It All Together.', 'level-11-advanced-projects', 11, '10-14', 'Year 2: Applied AI', true),
('Level 12: Capstone & Portfolio', 'Launch Your Future.', 'level-12-capstone', 12, '10-14', 'Year 2: Applied AI', true)
ON CONFLICT (slug) DO UPDATE SET 
title = EXCLUDED.title,
year_group = EXCLUDED.year_group,
is_coming_soon = true;

-- 4. Seed Level 1 Lessons
-- We will insert new lessons for Level 1, referencing the 'level-1-python-foundations-1' course.

-- Level 1 Week 1: Welcome to Python!
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Welcome to Python!',
  'Set up coding environment; write first ''Hello World'' program.',
  '# Welcome to Python! 🐍

## What is Python?

Python is a **computer programming language** that lets you talk to computers and tell them what to do! Just like you use English or Spanish to talk to your friends, programmers use Python to give instructions to computers.

Think of Python like giving directions to a robot:
- You tell it exactly what to do, step by step
- It follows your instructions perfectly
- If you make a mistake, it will let you know!

### Why is it called Python?

Python was created by a programmer named Guido van Rossum in 1991. He named it after a funny TV show called "Monty Python''s Flying Circus" - not after the snake! 🎭

## Why Learn Python?

Python is super popular because:

**It''s Easy to Read** - Python code looks almost like English sentences, which makes it perfect for beginners!

**It''s Powerful** - People use Python to:
- Create video games 🎮
- Make websites and apps 📱
- Control robots 🤖
- Analyze data and solve problems 🧮
- Create art and music 🎨

**It''s Fun!** - You can make cool projects right away, even as a beginner.

## Your First Python Code!

Let''s write your very first Python program. It''s a tradition in programming to start with "Hello, World!"

### Example 1: Hello, World!

```python
print("Hello, World!")
```

When you run this code, Python will display: `Hello, World!`

The `print()` command tells Python to show something on the screen. Whatever you put inside the quotation marks "" will appear!

### Example 2: Say Your Name

```python
print("Hi! My name is Alex!")
```

**Try it yourself!** Change "Alex" to your own name.

### Example 3: Print Multiple Things

```python
print("Welcome to Python!")
print("I am learning to code!")
print("This is awesome!")
```

This will print three lines, one after another.

## 🎯 Practice Time!

Try these challenges:

**Challenge 1:** Write code to print your favorite animal
```python
print("My favorite animal is a dolphin!")
```

**Challenge 2:** Print three things you like to do
```python
print("I like to play soccer")
print("I like to draw")
print("I like to read comics")
```

**Challenge 3:** Make Python say something funny!
```python
print("Why did the computer go to the doctor?")
print("Because it had a virus!")
```

## Important Things to Remember

1. **Quotation marks are important!** Always put text inside "quotation marks"
2. **Spelling matters!** `print` works, but `prnt` won''t
3. **Python is case-sensitive** - `Print` and `print` are different
4. **Don''t worry about mistakes!** Everyone makes them. Python will help you find them.

## Fun Facts! 🌟

- Python is one of the most popular programming languages in the world
- NASA uses Python for space exploration
- YouTube, Instagram, and Spotify were all built using Python
- Python is FREE for everyone to use

## Next Steps

In the next lesson, we''ll learn about:
- Variables (storing information)
- Different types of data
- Getting input from users

## Remember

**Programming is like learning a new superpower!** It might feel tricky at first, but with practice, you''ll be creating amazing things. Every expert programmer started exactly where you are now. Keep going, have fun, and don''t be afraid to experiment!
',
  'beginner',
  1,
  id,
  'Activity: "Robot Commander" - Kids pair up, one gives specific instructions (code), other acts them out like a robot.',
  'Assignment: Find 3 devices in your home that use code. Write down what they do.',
  false
FROM courses WHERE slug = 'level-1-python-foundations-1';

-- Level 1 Week 2: Variables
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Variables: Storing Information',
  'Create variables; understand data types (strings, numbers); name variables properly.',
  '# Variables: Storing Information 📦

## What is a Variable?

Imagine a box where you can store things. You can write a name on the box so you know what''s inside. In programming, this box is called a **variable**.

Variables let us save information to use later!

### Creating a Variable

To create a variable in Python, we give it a name, use the equals sign `=`, and then give it a value.

```python
name = "Alex"
age = 10
```

Here:
- `name` is a variable storing the text "Alex"
- `age` is a variable storing the number 10

### Using Variables

Once we have a variable, we can use it!

```python
name = "Alex"
print("Hello, " + name)
```

Output: `Hello, Alex`

### Changing Variables

The cool thing about variables is that they can change (vary)!

```python
score = 0
print(score)

score = 10
print(score)
```

## Data Types

Variables can hold different types of information. The most common ones are:

1.  **Strings (Text):** Surrounded by quotes.
    ```python
    food = "Pizza"
    color = ''Blue''
    ```

2.  **Integers (Whole Numbers):** Numbers without decimals.
    ```python
    age = 10
    year = 2025
    ```

3.  **Floats (Decimal Numbers):** Numbers with a decimal point.
    ```python
    price = 4.99
    pi = 3.14
    ```

## Naming Rules

When naming variables, follow these rules:
- Start with a letter or underscore `_`
- Can contain letters, numbers, and underscores
- **No spaces!** Use underscores instead (e.g., `my_name`)
- Case matters: `Score` and `score` are different

**Good Names:** `player_score`, `favorite_color`, `speed`
**Bad Names:** `player score` (space), `1st_place` (starts with number)

## 🎯 Practice Time!

**Challenge 1:** Create variables for your name and age, then print them.
```python
my_name = "Jordan"
my_age = 11
print("My name is", my_name)
print("I am", my_age, "years old")
```

**Challenge 2:** Math with variables!
```python
apples = 5
oranges = 3
total_fruit = apples + oranges
print(total_fruit)
```

## Summary
- Variables are like labeled boxes for data
- Use `=` to assign a value
- Strings are text (in quotes), Integers are whole numbers
- Variable names should be clear and have no spaces
',
  'beginner',
  2,
  id,
  'Activity: "Variable Box" - Physical boxes labeled "x", "score", etc. Put items inside to demonstrate storage.',
  'Assignment: Create variables for your age, name, and favorite color in Python.',
  false
FROM courses WHERE slug = 'level-1-python-foundations-1';

-- Level 1 Week 3: Numbers and Math
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Numbers and Math',
  'Perform math operations; understand integers vs decimals; solve math problems with code.',
  '# Numbers and Math 🧮

Computers are really good at math! Let''s learn how to use Python as a super-calculator.

## Basic Math Operations

Python uses special symbols for math:

- **Addition:** `+`
- **Subtraction:** `-`
- **Multiplication:** `*` (asterisk)
- **Division:** `/` (slash)

### Examples

```python
print(5 + 3)  # Prints 8
print(10 - 2) # Prints 8
print(4 * 2)  # Prints 8
print(16 / 2) # Prints 8.0
```

## Using Variables for Math

We can do math with variables too!

```python
score = 10
bonus = 5
total_score = score + bonus
print(total_score) # Prints 15
```

## Integers vs. Floats

Remember:
- **Integers** are whole numbers (e.g., `5`, `100`, `-3`)
- **Floats** are numbers with decimals (e.g., `5.5`, `3.14`, `10.0`)

When you divide two numbers, Python usually gives you a float (even if it divides evenly!).

```python
print(10 / 2) # Prints 5.0
```

## Order of Operations

Just like in math class, Python follows the order of operations (PEMDAS):
1. Parentheses `()`
2. Exponents `**`
3. Multiplication `*` and Division `/`
4. Addition `+` and Subtraction `-`

```python
print(2 + 3 * 4)   # Prints 14 (multiplication first)
print((2 + 3) * 4) # Prints 20 (parentheses first)
```

## 🎯 Practice Time!

**Challenge 1:** Calculate how many hours are in a week.
```python
hours_per_day = 24
days_per_week = 7
hours_in_week = hours_per_day * days_per_week
print(hours_in_week)
```

**Challenge 2:** Calculate the area of a rectangle.
```python
width = 5
height = 10
area = width * height
print("The area is:", area)
```

## Summary
- Use `+`, `-`, `*`, `/` for math
- Python follows order of operations
- You can mix numbers and variables in calculations
',
  'beginner',
  3,
  id,
  'Activity: "Mental Math Race" - Calculate expressions before running the code.',
  'Assignment: Write a program to calculate how many seconds are in a year.',
  false
FROM courses WHERE slug = 'level-1-python-foundations-1';

-- Level 1 Week 4: Text and Strings
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Text and Strings',
  'Work with text; combine strings; use string methods.',
  '# Text and Strings 📜

We call text in Python **Strings** because they are like a string of characters strung together!

## Creating Strings

You can use single quotes `''` or double quotes `"` to make a string.

```python
message = "Hello"
name = ''Alice''
```

## Combining Strings (Concatenation)

We can glue strings together using the `+` sign. This is called **concatenation**.

```python
first_name = "Super"
last_name = "Coder"
hero_name = first_name + " " + last_name
print(hero_name)
```

Output: `Super Coder`

*Note: We added a space `" "` in the middle so the words wouldn''t be squished together!*

## Repeating Strings

You can even multiply strings!

```python
print("ha" * 3)
```

Output: `hahaha`

## String Length

To find out how long a string is, use the `len()` function.

```python
password = "secret"
print(len(password))
```

Output: `6`

## String Methods

Python strings have special powers (methods) attached to them.

- `.upper()`: Makes everything UPPERCASE
- `.lower()`: Makes everything lowercase
- `.capitalize()`: Capitalizes the first letter

```python
message = "hello world"
print(message.upper())
```

Output: `HELLO WORLD`

## 🎯 Practice Time!

**Challenge 1:** Create a funny greeting by combining variables.
```python
adjective = "Happy"
noun = "Walrus"
print("Hello " + adjective + " " + noun)
```

**Challenge 2:** Make your name loud!
```python
name = "jordan"
print(name.upper() + "!!!")
```

## Summary
- Strings are text in quotes
- Use `+` to combine strings
- Use `len()` to get the length
- Use `.upper()` and `.lower()` to change case
',
  'beginner',
  4,
  id,
  'Activity: "String Knot" - Combine student names into a giant string using yarn connections.',
  'Assignment: Create a "Name Badge" program that prints your name in a decorative box.',
  false
FROM courses WHERE slug = 'level-1-python-foundations-1';

-- Level 1 Week 5: Getting User Input
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Getting User Input',
  'Create interactive programs; convert input types; build a simple calculator.',
  '# Getting User Input ⌨️

Up until now, our programs have used values we typed into the code. But real programs interact with users! Let''s learn how to ask questions.

## The `input()` Function

The `input()` function pauses the program and waits for the user to type something and press Enter.

```python
name = input("What is your name? ")
print("Nice to meet you, " + name)
```

Whatever the user types gets stored in the `name` variable.

## Input is Always a String

**Important:** `input()` always returns a **string** (text), even if the user types a number!

```python
age = input("How old are you? ")
# If I type 10, age becomes "10" (text), not 10 (number)
```

## Converting Inputs

If we want to do math with input, we need to convert it to a number first using `int()` (for whole numbers) or `float()` (for decimals).

```python
age_text = input("How old are you? ")
age = int(age_text) # Converts "10" to 10
next_year = age + 1
print("Next year you will be " + str(next_year))
```

*Note: We used `str()` to turn the number back into text to print it!*

## Building a Calculator

Let''s build a simple addition calculator.

```python
print("--- My Calculator ---")
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

result = num1 + num2
print("The answer is:", result)
```

## 🎯 Practice Time!

**Challenge 1:** Ask for the user''s favorite food and print "I love [food] too!"
```python
food = input("What is your favorite food? ")
print("I love " + food + " too!")
```

**Challenge 2:** Dog Year Calculator. Ask for a dog''s age and multiply by 7.
```python
dog_age = int(input("How old is your dog? "))
human_years = dog_age * 7
print("That is " + str(human_years) + " in human years!")
```

## Summary
- Use `input()` to get text from the user
- `input()` always gives you a String
- Use `int()` to convert a String to a Number
- Use `str()` to convert a Number to a String
',
  'beginner',
  5,
  id,
  'Activity: "Live Chatbot" - One student acts as computer asking inputs, other answers.',
  'Assignment: Create a program that asks 3 questions and prints a funny story with the answers.',
  true
FROM courses WHERE slug = 'level-1-python-foundations-1';

-- Level 1 Week 6: Making Decisions
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Making Decisions with If/Else',
  'Write conditional statements; use comparison operators; create branching logic.',
  '# Making Decisions 🤔

Smart programs can make choices based on information. In Python, we use **If Statements** to make decisions.

## The `if` Statement

It''s just like English: "If it is raining, take an umbrella."

```python
is_raining = True

if is_raining:
    print("Take an umbrella!")
```

The code inside the `if` block (indented) only runs if the condition is `True`.

## Comparison Operators

We often compare values to make decisions:
- `==` : Equal to (Notice the double equals!)
- `!=` : Not equal to
- `<` : Less than
- `>` : Greater than
- `<=` : Less than or equal to
- `>=` : Greater than or equal to

```python
age = 10

if age >= 10:
    print("You are double digits!")
```

## The `else` Statement

What if the condition isn''t true? We use `else`.

```python
answer = input("Is Python fun? (yes/no) ")

if answer == "yes":
    print("Yay! I think so too.")
else:
    print("Give it some time, it gets better!")
```

## The `elif` Statement (Else If)

If you have more than two choices, use `elif`.

```python
color = input("Pick a color (red/blue): ")

if color == "red":
    print("🔴 Red like a rose.")
elif color == "blue":
    print("🔵 Blue like the sky.")
else:
    print("That is a nice color too!")
```

## Indentation Matters!

Python knows which code belongs to the `if` statement by the **indentation** (spaces at the start of the line). Usually, we use 4 spaces or 1 tab.

```python
if True:
    print("This is inside")
print("This is outside")
```

## 🎯 Practice Time!

**Challenge 1:** Secret Password. Ask for a password and check if it''s correct.
```python
password = input("Enter password: ")
if password == "pizza":
    print("Access Granted!")
else:
    print("Access Denied!")
```

**Challenge 2:** Ticket Price. Ask for age. Under 10 is free, over 10 is $5.
```python
age = int(input("How old are you? "))
if age < 10:
    print("Your ticket is free!")
else:
    print("That will be $5 please.")
```

## Summary
- Use `if` to run code only when a condition is True
- Use `else` for when it''s False
- Use `elif` for extra conditions
- Indentation is crucial!
',
  'beginner',
  6,
  id,
  'Activity: "If This Then That" - Physical game where students move based on "If" conditions (e.g., If wearing red, jump).',
  'Assignment: Write a "Secret Password" program.',
  true
FROM courses WHERE slug = 'level-1-python-foundations-1';

-- Level 1 Week 7: Complex Conditions
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'More Decisions: Complex Conditions',
  'Use and/or/not operators; nested conditions; handle multiple cases.',
  '# More Decisions: Complex Logic 🧠

Sometimes one check isn''t enough. We might need to check multiple things at once!

## Logical Operators

We can combine conditions using:
- `and`: Both must be true
- `or`: At least one must be true
- `not`: Reverses the result (True becomes False)

### Using `and`

```python
is_weekend = True
is_sunny = True

if is_weekend and is_sunny:
    print("Let''s go to the park!")
else:
    print("Maybe another time.")
```

### Using `or`

```python
fruit = "apple"

if fruit == "apple" or fruit == "banana":
    print("That makes a good snack!")
```

## Nested If Statements

You can put an `if` inside another `if`! This is called **nesting**.

```python
age = 12
has_ticket = True

if has_ticket:
    if age >= 13:
        print("You can see the PG-13 movie.")
    else:
        print("This movie is too scary for you!")
else:
    print("You need to buy a ticket first.")
```

## Handling Edge Cases

Good programmers think about "what if?".

```python
score = int(input("Enter score (0-100): "))

if score > 100 or score < 0:
    print("That is not a valid score!")
elif score >= 90:
    print("Grade: A")
# ... etc
```

## 🎯 Practice Time!

**Challenge 1:** Rollercoaster Rider. Must be at least 10 years old AND at least 48 inches tall.
```python
age = int(input("Age: "))
height = int(input("Height (inches): "))

if age >= 10 and height >= 48:
    print("You can ride!")
else:
    print("Sorry, not yet.")
```

**Challenge 2:** Weekend Alarm. If it''s Saturday OR Sunday, sleep in. Else, wake up!
```python
day = input("What day is it? ")
if day == "Saturday" or day == "Sunday":
    print("Sleep in! 😴")
else:
    print("Wake up for school! ⏰")
```

## Summary
- `and` needs ALL conditions to be True
- `or` needs ANY condition to be True
- You can put checks inside checks (Nested Ifs)
',
  'intermediate',
  7,
  id,
  'Activity: "Logic Gates" - Students act as AND/OR gates holding hands to pass a "signal" (squeeze).',
  'Assignment: Create a "Video Game Character Selector" that suggests a character based on player preferences (e.g., "Do you like fast or strong?").',
  true
FROM courses WHERE slug = 'level-1-python-foundations-1';

-- Level 1 Week 8: Project
INSERT INTO lessons (title, description, content, difficulty_level, order_index, course_id, class_activities, take_home_assignment, requires_trinket)
SELECT 
  'Level 1 Project: Story Generator',
  'Combine all concepts; create personalized interactive story; present to class.',
  '# Level 1 Project: Story Generator 📖✨

Congratulations! You have made it to the end of Level 1. It''s time to show off everything you''ve learned by building a **Story Generator**.

## The Mission

Create a program that asks the user for different words (names, places, objects, adjectives) and then weaves them into a funny or exciting story!

## Requirements

Your project must include:
1.  **Variables:** To store the user''s answers.
2.  **Input:** Ask at least 5 questions.
3.  **Strings:** Combine text and variables to tell the story.
4.  **Conditionals (If/Else):** Change the ending of the story based on one of the answers!

## Step-by-Step Plan

### 1. Plan Your Story
Write a short story on paper first. Circle the words you want the user to change.
*Example: "The [adjective] knight rode a [animal] to the castle."*

### 2. Get Inputs
Write the code to ask for each missing word.

```python
print("--- Story Generator ---")
name = input("Enter a name: ")
animal = input("Enter an animal: ")
# ... get more inputs
```

### 3. Making a Choice
Ask a question that changes the story.

```python
choice = input("Does the hero fight the dragon? (yes/no): ")
```

### 4. Tell the Story
Use `print` and `if/else` to tell your tale.

```python
print("One day, " + name + " was riding a " + animal + "...")

if choice == "yes":
    print(name + " defeated the dragon and won!")
else:
    print(name + " ran away and hid in a cave.")
```

## Going Further (Bonus Points!) 🌟
- Use `.upper()` to shout exciting parts.
- Use `int()` to ask for a number (e.g., "How many gold coins?").
- Add more branches to your story.

## 🎓 Completion Checklist
- [ ] Code runs without errors
- [ ] Asks for at least 5 inputs
- [ ] Uses variables correctly
- [ ] Has at least one if/else decision
- [ ] Prints a complete story

**Good luck, Storyteller!**
',
  'beginner',
  8,
  id,
  'Activity: "Showcase" - Students present their Story Generators to the class.',
  'Assignment: Share your Story Generator with your family and explain how the code works!',
  true
FROM courses WHERE slug = 'level-1-python-foundations-1';
