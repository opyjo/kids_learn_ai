---
title: "Comparing Things!"
description: "Learn to compare text, numbers, and more - become a comparison expert!"
difficulty: "beginner"
order_index: 2
course_slug: "term-3-decision-maker"
is_premium: false
requires_trinket: true
starter_code: |
  # Comparing Things!
  # Let's compare text, numbers, and more!

  # Compare numbers
  print(10 > 5)
  print(5 == 5)
  
  # Compare text (strings)
  print("hello" == "hello")
  print("apple" < "banana")
  
  # Compare variables
  name = "Alex"
  print(name == "Alex")
  
  # Try your own comparisons!
class_activities: |
  ## 🎮 Class Activity: Comparison Challenge!

  1. Partner up with a classmate
  2. Create variables with your names
  3. Compare them: Are they equal? Which comes first alphabetically?
  4. Create number variables and compare them
  5. Share your comparisons with the class!

  **Challenge:** Who can create the most creative comparison?
take_home_assignment: |
  ## 📚 Homework: My Comparison Program

  **Assignment:** Create a Python program that compares different types of things!

  **Requirements:**
  1. Compare at least 5 numbers using different operators
  2. Compare at least 3 text strings (words)
  3. Create at least 3 variables and compare them
  4. Use at least 4 different comparison operators
  5. Add comments explaining what each comparison checks
  6. Code must run without errors

  **Example ideas:**
  - Compare ages, scores, or other numbers
  - Compare names, words, or phrases
  - Compare variables you create

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI systems constantly compare things! When a spam filter asks "Is this email like known spam?", or a recommendation system asks "Does this user like action movies?", those are comparisons - checking if things are equal, similar, or different.

  You're learning the same comparison logic that AI uses to make decisions!
---
# Term 3, Lesson 2: Comparing Things! 🔍

**Course:** Term 3: Decision Maker  
**Duration:** 60 minutes  
**Term:** 3 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Compare text (strings) as well as numbers
- Understand how Python compares different types of things
- Use comparisons with variables
- See how comparisons work in real programs
- Become a comparison expert!

---

## 🤖 Welcome from BrightByte!

> _"Hey there! Last week, you learned about True and False and how to compare numbers. But guess what? You can compare WAY more than just numbers! Today, we're going to learn to compare TEXT, variables, and all sorts of things! You're going to become a comparison expert!"_

### What's New This Week?

Last week you learned:
- What Booleans are (True and False)
- How to compare numbers with `>`, `<`, `==`, etc.

This week you'll discover:
- **Comparing text** — Words and phrases!
- **Comparing variables** — Using what you stored!
- **Real-world comparisons** — How programs actually use them!

> _BrightByte says: "Once you can compare text, you can build programs that check passwords, respond to user input, and make decisions based on what users type! This is getting exciting!"_

---

## 📝 Comparing Text (Strings)

### Can You Compare Words?

Yes! Python can compare text just like it compares numbers!

### Example 1: Are Two Words Equal?

```python
print("hello" == "hello")
print("hello" == "goodbye")
```

**Output:**
```
True
False
```

**Why?**
- `"hello" == "hello"` → Are they the same word? **Yes!** → `True`
- `"hello" == "goodbye"` → Are they the same? **No!** → `False`

### Example 2: Which Word Comes First?

```python
print("apple" < "banana")
print("zebra" > "apple")
```

**Output:**
```
True
True
```

**Why?** Python compares words alphabetically (like a dictionary):
- `"apple"` comes before `"banana"` → `True`
- `"zebra"` comes after `"apple"` → `True`

### Example 3: Not Equal for Text

```python
print("cat" != "dog")
print("cat" != "cat")
```

**Output:**
```
True
False
```

**Why?**
- `"cat"` is NOT equal to `"dog"` → `True`
- `"cat"` IS equal to `"cat"` → `False`

---

## 🔤 How Text Comparison Works

### Alphabetical Order

Python compares text alphabetically, just like a dictionary:

- `"a"` comes before `"b"`
- `"apple"` comes before `"banana"`
- `"zebra"` comes after `"apple"`

### Example: Word Order

```python
print("apple" < "banana")   # True - a comes before b
print("banana" < "apple")   # False - b comes after a
print("cat" < "dog")        # True - c comes before d
```

### Capital Letters Matter!

```python
print("apple" == "Apple")   # False!
print("A" < "a")            # True - capital letters come first!
```

**Important:** Capital letters come before lowercase letters in Python's ordering!

---

## 🎯 Comparing Variables

### Using What You Stored

You can compare variables just like you compare numbers or text!

### Example 1: Comparing Number Variables

```python
age = 10
score = 100

print(age > 5)        # True - 10 is greater than 5
print(score > 200)    # False - 100 is NOT greater than 200
print(age == 10)      # True - age equals 10
```

### Example 2: Comparing Text Variables

```python
name = "Alex"
password = "secret123"

print(name == "Alex")           # True
print(name == "alex")           # False - case matters!
print(password == "secret123")  # True
print(password != "wrong")      # True
```

### Example 3: Real-World Example

```python
# Check if user entered correct password
entered_password = "secret123"
correct_password = "secret123"

print(entered_password == correct_password)  # True - passwords match!
```

---

## 🎮 Practice Time!

### Challenge 1: Text Comparisons

Try these text comparisons:

```python
print("hello" == "hello")
print("Python" == "python")  # What do you think?
print("cat" < "dog")
print("zebra" > "apple")
```

### Challenge 2: Variable Comparisons

Create variables and compare them:

```python
# Create your variables
my_name = "Sam"
my_age = 10
my_score = 95

# Compare them!
print(my_name == "Sam")
print(my_age > 5)
print(my_score > 100)
print(my_name != "Alex")
```

### Challenge 3: Password Checker

Create a simple password checker:

```python
correct_password = "mypassword123"
user_input = "mypassword123"

print("Password correct?", user_input == correct_password)
```

### Challenge 4: Name Comparison

Compare names alphabetically:

```python
name1 = "Alice"
name2 = "Bob"

print(name1 < name2)  # Does Alice come before Bob?
print(name1 > name2)  # Does Alice come after Bob?
print(name1 == name2)  # Are they the same?
```

---

## 📝 Key Takeaways

### What Can You Compare?

| Type        | Example                    | Result        |
| ----------- | -------------------------- | ------------- |
| Numbers     | `5 > 3`                    | `True`        |
| Text        | `"hello" == "hello"`       | `True`        |
| Variables   | `age > 5`                  | `True`/`False` |

### Important Things to Remember

1. **Text comparisons are case-sensitive** — `"Hello" != "hello"`
2. **Alphabetical order** — Python compares text like a dictionary
3. **Variables work too** — Compare what you stored!
4. **Same operators** — `==`, `!=`, `<`, `>`, `<=`, `>=` work for text too!

### Vocabulary Words

| Word              | Definition                                    | Example                    |
| ----------------- | --------------------------------------------- | -------------------------- |
| **String**        | Text in programming                           | `"hello"`                  |
| **Case-sensitive** | Capital and lowercase letters are different | `"Hello" != "hello"`       |
| **Alphabetical**  | In dictionary order (a, b, c...)              | `"apple" < "banana"`       |
| **Compare**       | To check if things are equal, greater, etc.   | `name == "Alex"`           |

---

## 🌟 Next Lesson Preview

**Week 3: If This, Then That!**

Next week, you'll learn to use these comparisons to make programs that ACTUALLY MAKE DECISIONS! You'll learn `if` statements—the most powerful tool in programming!

Get ready to make programs that think! 🧠

---

## 🎉 Great Job!

You just learned to compare everything!

**What you accomplished today:**

- ✅ Learned to compare text (strings)
- ✅ Understood alphabetical comparison
- ✅ Compared variables
- ✅ Saw how comparisons work in real programs
- ✅ Became a comparison expert!

> _BrightByte says: "WOW! You can now compare numbers, text, variables—everything! This is exactly what programs do when they check passwords, respond to user input, or make decisions. Next week, we'll use these comparisons to make programs that ACTUALLY DECIDE what to do! You're becoming a real programmer!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Alphabetical Order Game:** Compare words to see which comes first
2. **Password Checker:** Create a program that checks if passwords match
3. **Name Sorter:** Compare names to see which comes first alphabetically
4. **Comparison Quiz:** Create a quiz of comparison questions

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_

