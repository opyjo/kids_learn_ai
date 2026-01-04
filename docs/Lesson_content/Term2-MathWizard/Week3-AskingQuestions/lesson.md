---
title: "Asking Questions!"
description: "Learn to make your programs interactive using input() - get information from users!"
difficulty: "beginner"
order_index: 3
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # Asking Questions!
  # Let's make our programs interactive!

  # Ask the user for their name
  name = input("What's your name? ")
  print("Hello,", name, "!")

  # Ask for their age
  age = input("How old are you? ")
  print("You are", age, "years old!")

  # Try asking your own questions!
class_activities: |
  ## 🎮 Class Activity: Interview Game!

  1. Partner up with a classmate
  2. Create a program that asks 5 questions about your partner
  3. Questions can be: favorite color, favorite food, favorite number, etc.
  4. Run your program and answer the questions
  5. Switch roles and try your partner's program!

  **Challenge:** Make your program use the answers in a fun way (like a story or joke)!
take_home_assignment: |
  ## 📚 Homework: My Interactive Story

  **Assignment:** Create a Python program that asks the user questions and uses their answers to tell a personalized story!

  **Requirements:**
  1. Ask at least 5 different questions using input()
  2. Use the answers in a creative story
  3. Include at least 2 print statements that use the user's answers
  4. Make it fun and engaging!
  5. Code must run without errors

  **Example themes:**
  - A personalized adventure story
  - A "get to know you" quiz
  - A silly story generator
  - A personalized joke

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Every time you talk to Siri, Alexa, or a chatbot, they're using input() just like you're learning! AI systems ask questions, get your answers, and respond based on what you say. When you collect answers from classmates using input(), you're creating a dataset - the same kind of data that AI uses to learn! AI learns from millions of answers just like you're collecting answers today.

  You're learning the same interaction pattern that powers every AI conversation in the world!
---
# Term 2, Lesson 3: Asking Questions! 🗣️

**Course:** Term 2: Math Wizard  
**Age Group:** 9-10 years old  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 3 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Use `input()` to ask users for information
- Store user answers in variables
- Create interactive programs that respond to users
- Combine `input()` with `print()` for conversations
- Build programs that feel "alive" and responsive

---

## 🤖 Welcome from BrightByte!

> _"Hey there! So far, your programs have been like a one-way conversation—Python talks, but that's it. But today, we're going to change that! Today, you'll learn how to make your programs ASK QUESTIONS and LISTEN to answers! Your programs will become INTERACTIVE—they'll actually talk WITH users, not just AT them!"_

### What's New This Week?

Last week you learned:
- Exponents (`**`) and modulo (`%`)
- Order of operations (PEMDAS)
- Complex math expressions

This week you'll discover:
- **`input()`** — How to ask users for information
- **Interactive programs** — Programs that respond to users
- **Conversations** — Making programs feel alive!

> _BrightByte says: "This is a HUGE step! Once you can ask questions, you can build calculators, games, quizzes, and so much more! Every AI assistant uses this same skill!"_

---

## 💬 What Is `input()`?

### The Magic of Asking Questions

`input()` is Python's way of asking the user a question and waiting for their answer. It's like having a conversation with your program!

### Example 1: Your First Question

```python
name = input("What's your name? ")
print("Hello,", name, "!")
```

**What happens:**
1. Python displays: `What's your name? `
2. Python waits for you to type something
3. You type your name and press Enter
4. Python stores your answer in the variable `name`
5. Python prints: `Hello, [your name]!`

**Example Output:**
```
What's your name? Alex
Hello, Alex !
```

### Example 2: Multiple Questions

```python
print("Let's get to know you!")
name = input("What's your name? ")
color = input("What's your favorite color? ")
food = input("What's your favorite food? ")

print("Nice to meet you,", name, "!")
print("I love", color, "too!")
print(food, "sounds delicious!")
```

**Example Output:**
```
Let's get to know you!
What's your name? Sam
What's your favorite color? Blue
What's your favorite food? Pizza
Nice to meet you, Sam !
I love Blue too!
Pizza sounds delicious!
```

---

## 🎮 How `input()` Works

### Step-by-Step Process

1. **Python displays your question** — The text inside `input()`
2. **Python waits** — The program pauses and waits for you
3. **You type your answer** — Type anything you want!
4. **You press Enter** — This tells Python "I'm done!"
5. **Python stores your answer** — It goes into the variable
6. **Python continues** — The program keeps running

### Important Notes

- **Always press Enter** after typing your answer
- **The answer is stored as text** (even if you type a number!)
- **You can ask multiple questions** — Just use `input()` multiple times
- **The question appears in quotes** — Like: `input("Your question here? ")`

---

## 🎯 Using `input()` with Math

### Example 1: Simple Calculator

```python
print("Let's add two numbers!")
number1 = input("Enter the first number: ")
number2 = input("Enter the second number: ")

print("You entered:", number1, "and", number2)
```

**Example Output:**
```
Let's add two numbers!
Enter the first number: 5
Enter the second number: 3
You entered: 5 and 3
```

**Wait!** Notice something? We got the numbers, but we didn't add them yet! That's because `input()` gives us TEXT, not numbers. We'll learn how to fix that next week!

### Example 2: Personalized Math

```python
name = input("What's your name? ")
age = input("How old are you? ")

print("Hi", name, "!")
print("You are", age, "years old!")
print("In 10 years, you'll be... well, we'll learn that next week!")
```

---

## 🎨 Creative Examples

### Example 1: The Name Game

```python
print("Welcome to the Name Game!")
first_name = input("What's your first name? ")
last_name = input("What's your last name? ")

print("Your full name is:", first_name, last_name)
print("Your initials are:", first_name[0], last_name[0])
```

**Example Output:**
```
Welcome to the Name Game!
What's your first name? Alex
What's your last name? Smith
Your full name is: Alex Smith
Your initials are: A S
```

### Example 2: The Silly Story

```python
print("Let's create a silly story!")
animal = input("Name an animal: ")
color = input("Name a color: ")
food = input("Name a food: ")

print("Once upon a time, a", color, animal, "ate", food, "!")
print("The end!")
```

**Example Output:**
```
Let's create a silly story!
Name an animal: Elephant
Name a color: Purple
Name a food: Pizza
Once upon a time, a Purple Elephant ate Pizza !
The end!
```

### Example 3: The Interview

```python
print("=== PERSONAL INTERVIEW ===")
name = input("What's your name? ")
school = input("What school do you go to? ")
hobby = input("What's your favorite hobby? ")
dream = input("What do you want to be when you grow up? ")

print("\n=== YOUR PROFILE ===")
print("Name:", name)
print("School:", school)
print("Hobby:", hobby)
print("Dream job:", dream)
print("You sound amazing!")
```

---

## 🎮 Practice Time!

### Challenge 1: The Greeting Program

Create a program that:
- Asks for the user's name
- Asks how they're feeling today
- Creates a personalized greeting

```python
name = input("What's your name? ")
feeling = input("How are you feeling today? ")

print("Hi", name, "!")
print("I'm glad you're feeling", feeling, "!")
```

### Challenge 2: The Favorite Things Quiz

Create a program that asks about:
- Favorite color
- Favorite animal
- Favorite number
- Favorite food

Then print them all back!

```python
print("Tell me about your favorites!")
color = input("Favorite color: ")
animal = input("Favorite animal: ")
number = input("Favorite number: ")
food = input("Favorite food: ")

print("\nYour favorites:")
print("Color:", color)
print("Animal:", animal)
print("Number:", number)
print("Food:", food)
```

### Challenge 3: The Story Generator

Create a program that asks for:
- A character name
- A place
- An action
- An object

Then use them in a story!

```python
print("Let's create a story!")
character = input("Enter a character name: ")
place = input("Enter a place: ")
action = input("Enter an action (like 'ran' or 'jumped'): ")
object_item = input("Enter an object: ")

print("\nOnce upon a time,", character, "went to", place, ".")
print("There, they", action, "with a", object_item, "!")
print("The end!")
```

---

## 📝 Key Takeaways

### The `input()` Function

| What It Does              | How to Use It                    | Example                          |
| ------------------------- | -------------------------------- | -------------------------------- |
| Asks user a question      | `input("Your question? ")`       | `input("What's your name? ")`    |
| Waits for user to type    | Program pauses until Enter       | User types answer and presses Enter |
| Stores answer in variable | `variable = input("Question? ")` | `name = input("Name? ")`         |
| Returns text              | Always gives text (even numbers!) | `"5"` not `5`                    |

### Important Things to Remember

1. **Always use a variable** — `name = input("Name? ")` not just `input("Name? ")`
2. **The question goes in quotes** — `input("Your question here")`
3. **Press Enter** — After typing your answer, press Enter
4. **Answers are text** — Even if you type `5`, it's stored as `"5"` (text)
5. **You can ask multiple questions** — Use `input()` as many times as you want!

### Vocabulary Words

| Word              | Definition                                    | Example                    |
| ----------------- | --------------------------------------------- | -------------------------- |
| **input()**       | Function that asks user for information       | `name = input("Name? ")`   |
| **Interactive**   | Program that responds to user input           | Programs that ask questions |
| **Prompt**        | The question shown to the user                | "What's your name?"        |
| **User input**    | Information the user types into the program   | What the user types        |
| **Variable**      | Storage box for information                   | `name = "Alex"`            |

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting the Variable

**Wrong:**
```python
input("What's your name? ")
print("Hello!")
```

**Right:**
```python
name = input("What's your name? ")
print("Hello,", name, "!")
```

### Mistake 2: Forgetting Quotes

**Wrong:**
```python
name = input(What's your name?)
```

**Right:**
```python
name = input("What's your name? ")
```

### Mistake 3: Not Pressing Enter

Remember: After typing your answer, you MUST press Enter! The program is waiting for you!

---

## 🌟 Next Lesson Preview

**Week 4: Numbers vs Text!**

Next week, you'll learn a SUPER important skill: converting text to numbers! Right now, when you ask for a number with `input()`, Python gives you text. We'll learn how to turn that text into a real number so you can do math with it!

**Sneak peek:**

```python
age = input("How old are you? ")
age = int(age)  # Convert text to number!
print("In 10 years, you'll be", age + 10)
```

Get ready to build REAL calculators! 🧮

---

## 🎉 Great Job!

You just learned how to make your programs interactive!

**What you accomplished today:**

- ✅ Learned how to use `input()` to ask questions
- ✅ Stored user answers in variables
- ✅ Created interactive programs
- ✅ Combined `input()` with `print()` for conversations
- ✅ Built programs that feel alive and responsive

> _BrightByte says: "WOW! Your programs can now TALK to users! This is a HUGE milestone! Every app, game, and AI assistant uses this same skill. Next week, we'll learn how to turn those text answers into numbers so you can do REAL math with user input. You're becoming a real programmer! Keep up the amazing work!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these fun challenges:

1. **The Personality Quiz:** Ask 5 questions and create a "personality type" based on answers
2. **The Mad Libs Generator:** Ask for nouns, verbs, adjectives and create a silly story
3. **The Interview Program:** Create a program that interviews the user like a talk show host
4. **The Name Analyzer:** Ask for a name and create fun facts about it (length, first letter, etc.)

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_

