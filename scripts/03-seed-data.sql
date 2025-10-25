-- Seed data for KidsCode Academy
-- This script adds sample lessons and data for testing

-- Insert sample lessons
INSERT INTO lessons (title, description, content, difficulty_level, order_index, is_premium, starter_code, solution_code) VALUES
(
  'Welcome to Python! 🐍',
  'Start your Python journey and print your first message.',
  '# Lesson 1: Welcome to Python! 🐍

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

---

**Parent/Teacher Note:** Encourage students to run these examples in a Python environment like IDLE, Thonny, or an online platform like Replit or Trinket. The hands-on experience is crucial for learning!',
  'beginner',
  1,
  false,
  '# Write your code here
print("Hello, World!")',
  'print("Hello, World!")'
),
(
  'Variables and Numbers',
  'Learn how to store and work with numbers in Python.',
  '# Variables and Numbers

Variables are like containers that store data. In Python, you can store numbers and use them in calculations.

## Your Task
1. Create a variable called `age` and set it to your age
2. Create a variable called `next_year` and set it to your age + 1
3. Print both variables

## Example
```python
age = 10
next_year = age + 1
print("I am", age, "years old")
print("Next year I will be", next_year)
```',
  'beginner',
  2,
  false,
  '# Create your variables here
age = 
next_year = 

# Print your variables here',
  'age = 10
next_year = age + 1
print("I am", age, "years old")
print("Next year I will be", next_year)'
),
(
  'Lists and Loops',
  'Discover how to work with lists and repeat actions with loops.',
  '# Lists and Loops

Lists store multiple items, and loops let you do something with each item.

## Your Task
1. Create a list of your favorite colors
2. Use a for loop to print each color
3. Print how many colors you have

## Example
```python
colors = ["red", "blue", "green"]
for color in colors:
    print("I like", color)
print("I have", len(colors), "favorite colors")
```',
  'intermediate',
  3,
  true,
  '# Create your list here
colors = []

# Write your loop here

# Print the count',
  'colors = ["red", "blue", "green", "yellow"]
for color in colors:
    print("I like", color)
print("I have", len(colors), "favorite colors")'
);

-- Create sample profiles for testing (optional)
-- Note: These would typically be created when users sign up
-- INSERT INTO profiles (id, email, full_name, role, subscription_status) VALUES
-- ('00000000-0000-0000-0000-000000000001', 'admin@kidscode.com', 'Admin User', 'admin', 'premium'),
-- ('00000000-0000-0000-0000-000000000002', 'student@kidscode.com', 'Test Student', 'student', 'free');