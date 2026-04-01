---
title: "Talk to Python! Introducing input()"
description: "Learn how to make your programs interactive by using input() to have real conversations with the computer!"
difficulty: "beginner"
order_index: 6
course_slug: "term-1-hello-python"
is_premium: false
requires_trinket: true
starter_code: |
  # Talk to Python!
  # Let's make a program that asks YOUR name!

  # Step 1: Ask the user for their name
  name = input("What is your name? ")

  # Step 2: Use their answer!
  print("Hello, " + name + "!")
  print("Nice to meet you, " + name + "!")

  # Step 3: Try it yourself!
  # TODO: Ask the user what their favorite color is
  # TODO: Print a message using their answer
class_activities: |
  ## 🎮 Class Activity: The Interview Show!

  **Part 1: Build a Mini Interview Program**
  Create a program that asks 3 questions and responds to each answer:
  1. Ask for the user's name
  2. Ask for their favorite animal
  3. Ask for their superpower
  Then print a fun story using all three answers!

  **Part 2: Pass the Keyboard**
  One student types the program, another runs it and types in answers.
  Switch roles so everyone practices both coding and talking to the program!

  **Part 3: Personalize It!**
  Each student writes their own "welcome program" that greets the user by name and says something kind.
take_home_assignment: |
  ## 📚 Homework: My Personal Greeter

  **Assignment:** Build a program that asks the user 4 questions and uses ALL the answers!

  ```python
  # My Personal Greeter
  # Ask 4 questions here:
  name = input("What is your name? ")
  # TODO: ask for their city
  # TODO: ask for their favorite food
  # TODO: ask for their hobby

  # Print a personalized message using all 4 answers
  print("Welcome, " + name + "!")
  # TODO: print 3 more lines using the other answers
  ```

  **Requirements:**
  1. Use `input()` at least 4 times
  2. Store every answer in a variable
  3. Use every variable in a printed message
  4. The output should read like a short, friendly paragraph

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  When you chat with an AI assistant like Siri, Alexa, or ChatGPT, they are using something like `input()` under the hood — they listen for your words, store them, and then use them to build a reply.

  Today you learned the very same idea that powers AI conversations! Every chatbot starts with "get the user's message, then do something with it."
---

# Term 1, Week 6: Talk to Python! Introducing input() 🎤

**Course:** Term 1: Hello Python!
**Duration:** 60 minutes
**Term:** 1 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Explain what `input()` does and why it makes programs more fun
- Use `input()` to ask the user a question
- Store the user's answer in a variable
- Use that variable in `print()` to give a personalised response
- Build a simple interactive program that holds a "conversation"

---

## 🤖 BrightByte's Welcome!

> _"Hey there! 👋 Up until now, your programs have been like a one-way street — Python talks but never listens. Today that ALL changes! With ONE new tool called `input()`, you can make Python ask questions and actually use the answers. Your programs are about to get SO much more interesting. Let's go!"_

---

## 💬 What is input()?

So far, every program you have written has been **fixed** — the words on the screen are always the same no matter who runs it.

```python
print("Hello, Alex!")   # always says Alex, no matter who runs it
```

**`input()` changes that.** It pauses the program and waits for the user to type something. Whatever they type gets saved so you can use it!

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
```

Now every person who runs the program gets their own personalised greeting. 🎉

---

## 🔍 Anatomy of input()

```python
name = input("What is your name? ")
```

Let's break this line apart:

| Part | What It Does |
|------|-------------|
| `name` | The variable that stores the answer |
| `=` | Puts the answer into the variable |
| `input(...)` | Pauses the program and waits for typing |
| `"What is your name? "` | The **prompt** — the question shown to the user |

> **Pro tip:** Always add a space before the closing `"` in your prompt so the cursor doesn't sit right up against the text: `"What is your name? "` looks much nicer than `"What is your name?"`.

---

## 🎬 Your First Conversation

Type this in Trinket and run it:

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
print("Great name, " + name + "!")
```

**What happens:**
1. Python prints `What is your name? ` and waits
2. You type your name and press Enter
3. Python saves it in the variable `name`
4. Python prints your personalised messages

Try it with different names — the output changes every time!

---

## 📦 Storing Answers in Variables

You can ask as many questions as you like. Just use a different variable for each answer:

```python
name   = input("What is your name? ")
colour = input("What is your favourite colour? ")
animal = input("What is your favourite animal? ")

print("Hi " + name + "!")
print("A " + colour + " " + animal + " — that's amazing!")
```

**Sample run:**
```
What is your name? Maya
What is your favourite colour? purple
What is your favourite animal? dragon
Hi Maya!
A purple dragon — that's amazing!
```

> _BrightByte says: "Notice how the program feels like a real conversation now! That's the power of `input()`. You're no longer writing a message — you're writing a dialogue!"_

---

## 📝 Using f-strings with input()

Remember f-strings from Week 5? They work great with `input()` too!

```python
name   = input("What is your name? ")
colour = input("What is your favourite colour? ")

print(f"Hello, {name}! Your favourite colour is {colour}.")
```

Both styles work — use whichever you prefer:

```python
# With +  (concatenation)
print("Hello, " + name + "!")

# With f-string
print(f"Hello, {name}!")
```

---

## ⚠️ Important: input() Always Gives You a String

Everything the user types comes back as **text (a string)**, even if they type a number.

```python
favourite_number = input("What is your favourite number? ")
print("Your favourite number is " + favourite_number)
```

This works perfectly! But watch what happens if you try to do maths with it:

```python
favourite_number = input("What is your favourite number? ")
doubled = favourite_number * 2   # This won't do what you expect!
print(doubled)
```

If the user types `5`, the output will be `55` — not `10`! Python is doubling the **text** "5", not the number 5.

> **For now, don't worry about this.** We will learn how to fix it in a later lesson. For Week 6, just use `input()` for names, colours, and other text answers.

---

## 🎯 Practice Challenges

### Challenge 1: The Greeter ⭐

Write a program that:
1. Asks for the user's name
2. Asks for their favourite hobby
3. Prints: `"Hi [name]! It's cool that you love [hobby]!"`

<details>
<summary>Click for answer</summary>

```python
name  = input("What is your name? ")
hobby = input("What is your favourite hobby? ")
print("Hi " + name + "! It's cool that you love " + hobby + "!")
```

</details>

---

### Challenge 2: The Compliment Machine ⭐⭐

Write a program that asks for the user's name AND their best quality, then prints a two-line compliment.

<details>
<summary>Click for hint</summary>
Use two input() calls and two print() calls.
</details>

<details>
<summary>Click for answer</summary>

```python
name    = input("What is your name? ")
quality = input("What is your best quality? ")
print(f"Hey {name}, you are so {quality}!")
print(f"The world is a better place with you in it, {name}!")
```

</details>

---

### Challenge 3: The Story Builder ⭐⭐⭐

Ask for a **name**, **place**, and **object**. Then print a short 3-sentence story using all three.

<details>
<summary>Click for hint</summary>
Three input() calls, then three print() calls that use each variable.
</details>

<details>
<summary>Click for answer</summary>

```python
hero  = input("Enter a hero's name: ")
place = input("Enter a magical place: ")
item  = input("Enter a magical object: ")

print(f"Once upon a time, {hero} travelled to {place}.")
print(f"There, {hero} discovered a magical {item}.")
print(f"{hero} used the {item} to save {place} forever!")
```

</details>

---

### Challenge 4: The Robot Introduction ⭐⭐⭐⭐

Build a program that pretends to be a robot meeting the user for the first time. Ask 4 questions and weave all the answers into a fun robot-style speech.

<details>
<summary>Click for answer</summary>

```python
name    = input("ROBOT: Hello human. What is your name? ")
planet  = input("ROBOT: Where are you from? ")
skill   = input("ROBOT: What is your special skill? ")
mission = input("ROBOT: What is your mission today? ")

print("")
print("ROBOT: Processing... beep boop...")
print(f"ROBOT: Greetings, {name} from {planet}!")
print(f"ROBOT: I see you are skilled at {skill}. Impressive.")
print(f"ROBOT: I will help you with your mission: {mission}.")
print("ROBOT: Welcome aboard. Beep.")
```

</details>

---

## 💡 Pro Tips for Using input()

### Tip 1: Make Your Prompt Clear

Good prompts tell the user exactly what to type.

```python
# Unclear
x = input("Enter: ")

# Clear
name = input("What is your first name? ")
```

### Tip 2: Add a Space at the End of Your Prompt

```python
# Cramped — cursor sits right next to the text
name = input("What is your name?")

# Comfortable — there's a space before the cursor
name = input("What is your name? ")
```

### Tip 3: Name Your Variables Clearly

Use variable names that describe what the answer is:

```python
# Hard to read
a = input("What is your name? ")
b = input("What is your colour? ")

# Easy to read
name   = input("What is your name? ")
colour = input("What is your favourite colour? ")
```

### Tip 4: You Can Use the Same Variable in Many print() Lines

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
print("Welcome, " + name + "!")
print("Goodbye, " + name + "!")
```

You only ask once, but you can use the answer as many times as you like!

---

## 🌟 What Makes input() So Powerful?

Before `input()`, your programs were like a **book** — the same every time, no matter who reads it.

With `input()`, your programs are like a **conversation** — they change based on who's talking!

| Without input()            | With input()                        |
|----------------------------|-------------------------------------|
| Always says the same thing | Responds to whoever is running it   |
| Only one possible output   | Infinite possible outputs           |
| Like a poster              | Like a chat with a friend           |
| You talk AT the user       | You talk WITH the user              |

> _BrightByte says: "This is a HUGE moment in your coding journey. You've just unlocked interactivity. Every app you've ever used — games, social media, messaging — they all rely on getting input from the user. And now you know how to do it too!"_

---

## 📝 Key Points to Remember

### The input() Formula

```python
variable_name = input("Your question here? ")
```

### Quick Reference

| Concept | Code Example |
|---------|-------------|
| Ask for a name | `name = input("What is your name? ")` |
| Use the answer in print | `print("Hi " + name)` |
| Use the answer in f-string | `print(f"Hi {name}")` |
| Ask multiple questions | Use a new variable for each |
| input() always returns | A **string** (text) |

### Vocabulary

| Word | Meaning |
|------|---------|
| **input()** | A function that pauses and waits for the user to type |
| **prompt** | The message shown to the user inside `input()` |
| **interactive** | A program that responds to what the user types |
| **user input** | Whatever the person running the program types in |

---

## 🏠 Homework: My Personal Greeter

**Platform:** Complete this assignment on [Trinket](https://trinket.io/python)

### The Assignment

Build a **Personal Greeter** program that:

1. Asks the user **4 questions** using `input()`
2. Stores each answer in its own variable
3. Uses **every variable** in a printed message

```python
# My Personal Greeter
name = input("What is your name? ")
# TODO: Ask 3 more questions

# Now use all the answers!
print("Welcome, " + name + "!")
# TODO: Print 3 more lines using your other variables
```

### Requirements

1. ✅ Use `input()` exactly **4 times**
2. ✅ Store every answer in a **clearly named variable**
3. ✅ Print at least **4 lines** that use the answers
4. ✅ The output should feel like a **friendly, personalised message**

### Example Output

```
What is your name? Jordan
What is your favourite food? pizza
What is your city? Toronto
What is your hobby? gaming

Hello Jordan, welcome to your personal greeter!
A pizza lover from Toronto — excellent taste!
Gaming is such a fun hobby, Jordan!
Hope you have an amazing day!
```

### Grading Rubric

| Criteria | Points |
|----------|--------|
| 4 input() calls | ⭐⭐⭐⭐ |
| All answers stored in variables | ⭐⭐ |
| All variables used in print | ⭐⭐ |
| Output feels friendly and personalised | ⭐⭐ |
| **Total** | **10 points** |

### How to Submit

1. Write your program on Trinket
2. Run it and make sure it works
3. Click the **Share** button
4. Copy the link
5. Share the link with your instructor

---

## 🌟 Next Lesson Preview

**Week 7: The Joke Machine!** 🎭

Next week, you'll build your first **big project** — a Joke Machine! And guess what? You'll use `input()` to make it interactive. The user will be able to ask for jokes!

**Sneak peek:**

```python
print("🎭 THE JOKE MACHINE 🎭")
name = input("What is your name? ")
print(f"Get ready to laugh, {name}!")
print("")
print("Why did the programmer quit?")
print("...")
print("Because they didn't get arrays! 😂")
```

Get ready to make Python funny! 🎉

---

## 🎉 Congratulations, You Can Talk to Python!

You've just unlocked one of the most exciting features in programming — **interactivity!**

**You can now:**

- ✅ Use `input()` to ask the user a question
- ✅ Store the user's answer in a variable
- ✅ Use that answer in `print()` and f-strings
- ✅ Ask multiple questions in one program
- ✅ Build programs that feel like real conversations
- ✅ Understand that `input()` always returns a string

> _BrightByte says: "Do you realise what you just learned? You can now write programs that are different EVERY single time someone runs them! That's the foundation of every interactive app, game, and chatbot ever made. I'm seriously so proud of you. See you next week when we make Python tell jokes — using YOUR new input() skills!"_

---

## 📚 Extra Resources (Optional)

### Practice Ideas

- Ask your family to run your greeter program and see their reactions
- Try building a "Guess Who" program that asks yes/no questions
- Write a "Fortune Teller" that asks for a name and predicts their future

### Fun Facts

- The very first interactive programs were called **terminals** — just a keyboard and a screen, asking questions and showing answers
- Every time you type into a search bar, fill in a form, or chat with an AI, `input()` (or something like it) is at work
- Python's `input()` function is one of the first things every beginner learns — and pros still use it!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_
*www.kidslearnai.ca*
_Instagram: @kids_learn_ai_

---

_Remember: Every interactive program starts with one simple idea — ask the user something and listen to their answer. You've got that skill now!_
