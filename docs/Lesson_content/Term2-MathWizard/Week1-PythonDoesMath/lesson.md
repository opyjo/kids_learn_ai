---
title: "Python Does Math!"
description: "Discover Python's super-calculator powers - learn addition, subtraction, multiplication, and division"
difficulty: "beginner"
order_index: 1
course_slug: "term-2-math-wizard"
is_premium: false
requires_trinket: true
starter_code: |
  # Python Does Math!
  # Let's turn Python into a super-calculator!

  # Try these math problems:
  print(5 + 3)
  print(10 - 4)
  print(6 * 7)
  print(20 / 5)

  # Now try your own!
class_activities: |
  ## 🎮 Class Activity: Math Race!

  1. Partner up with a classmate
  2. One person says a math problem (like "15 + 27")
  3. The other person types it in Python and runs it
  4. Check if the answer is correct!
  5. Switch roles after 5 problems

  **Challenge:** Who can solve 10 problems the fastest (correctly)?
take_home_assignment: |
  ## 📚 Homework: My Math Story

  **Assignment:** Create a Python program that solves at least 8 different math problems and tells a story!

  **Requirements:**
  1. Use all 4 operations: +, -, *, /
  2. Include at least 8 print statements with math
  3. Add comments to explain what each calculation is about
  4. Make it tell a fun story (like counting cookies, scoring points, etc.)
  5. Code must run without errors

  **Example theme ideas:**
  - A birthday party (counting candles, slices of cake, guests)
  - A video game (scoring points, losing lives, collecting coins)
  - A pet shop (counting animals, calculating food)

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  Every time Siri calculates a tip, or Google Maps figures out your travel time, or a video game adds up your score - that's math just like you're learning! Regular calculators follow exact rules you program, but AI calculators can also learn patterns and estimate answers - they use the same math operations, but can get smarter over time!

  You're learning the same math operations that power every AI in the world!
---

# Term 2, Lesson 1: Python Does Math! 🧮

**Course:** Term 2: Math Wizard  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 1 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Use Python as a super-powerful calculator
- Perform addition, subtraction, multiplication, and division
- Do math with numbers directly and with variables
- Understand why computers are so fast at math
- Create programs that calculate and display results

---

## 🤖 Welcome Back from BrightByte!

> _"Hey there, Math Wizard! 🧙‍♂️ Welcome to Term 2! Remember all those cool print() statements we made? Well, get ready because we're about to discover Python's SECRET SUPERPOWER—it's an AMAZING calculator! Seriously, Python can do math faster than the fastest human mathematician. And today, YOU get to unlock that power!"_

### What's Special About Term 2?

In Term 1, you learned how to:

- Make Python talk using `print()`
- Store information in variables
- Create fun text-based programs

Now in Term 2, we're going to:

- Turn Python into a super-calculator
- Get information FROM users
- Build interactive programs that do REAL math

> _BrightByte says: "By the end of Term 2, you'll build your very own calculator app! How cool is that? Let's start by learning the basics of Python math!"_

---

## 🔢 Python: The Super-Calculator

### Why Is Python So Good at Math?

Computers were INVENTED to do math! The very first computers were just giant calculators. That's why programming languages like Python are incredibly fast at math—it's what computers do best!

**Fun Fact:** Your computer can do about 1,000,000,000 (one BILLION) math calculations per second! That's faster than you can blink! 😮

### The Four Basic Operations

Python uses special symbols for math. Here they are:

| Operation      | Symbol | Example  | Result |
| -------------- | ------ | -------- | ------ |
| Addition       | `+`    | `5 + 3`  | `8`    |
| Subtraction    | `-`    | `10 - 4` | `6`    |
| Multiplication | `*`    | `6 * 7`  | `42`   |
| Division       | `/`    | `20 / 5` | `4.0`  |

**Important Notes:**

- For multiplication, we use `*` (the asterisk), NOT `x`
- For division, we use `/` (the forward slash)
- Division always gives a decimal answer (like `4.0` instead of `4`)

---

## ➕ Addition: Putting Things Together

Addition is just like in regular math. Use the `+` sign!

### Example 1: Simple Addition

```python
print(5 + 3)
```

**Output:** `8`

Python added 5 and 3 and showed us the answer!

### Example 2: Adding Bigger Numbers

```python
print(100 + 250)
```

**Output:** `350`

Python doesn't care how big the numbers are—it calculates instantly!

### Example 3: Adding Many Numbers

```python
print(10 + 20 + 30 + 40)
```

**Output:** `100`

You can add as many numbers as you want in one line!

### Example 4: Addition with a Message

```python
print("I have", 5 + 3, "apples!")
```

**Output:** `I have 8 apples!`

Python does the math first, then shows it with your message!

---

## ➖ Subtraction: Taking Things Away

Subtraction uses the `-` sign (the minus sign).

### Example 1: Simple Subtraction

```python
print(10 - 4)
```

**Output:** `6`

### Example 2: Bigger Subtraction

```python
print(1000 - 750)
```

**Output:** `250`

### Example 3: Going Negative!

```python
print(5 - 10)
```

**Output:** `-5`

Python handles negative numbers perfectly! If you subtract a bigger number from a smaller number, you get a negative result.

### Example 4: Subtraction Story

```python
print("I had 20 cookies.")
print("I ate 8 cookies.")
print("Now I have", 20 - 8, "cookies left!")
```

**Output:**

```
I had 20 cookies.
I ate 8 cookies.
Now I have 12 cookies left!
```

---

## ✖️ Multiplication: Groups of Things

Multiplication uses the `*` symbol (asterisk). You can find it by pressing Shift + 8.

### Example 1: Simple Multiplication

```python
print(6 * 7)
```

**Output:** `42`

### Example 2: Times Tables!

```python
print("5 times table:")
print("5 x 1 =", 5 * 1)
print("5 x 2 =", 5 * 2)
print("5 x 3 =", 5 * 3)
print("5 x 4 =", 5 * 4)
print("5 x 5 =", 5 * 5)
```

**Output:**

```
5 times table:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
```

### Example 3: Real World Multiplication

```python
# If there are 4 tables and 6 chairs at each table...
print("Total chairs:", 4 * 6)
```

**Output:** `Total chairs: 24`

> _BrightByte says: "Remember: in Python, we use * for multiplication, NOT x. The x is used for other things in programming, so we use * instead!"_

---

## ➗ Division: Sharing Equally

Division uses the `/` symbol (forward slash).

### Example 1: Simple Division

```python
print(20 / 5)
```

**Output:** `4.0`

Notice the `.0` at the end? Division in Python always gives a decimal number (called a "float"), even when it divides evenly!

### Example 2: Sharing Cookies

```python
# 24 cookies shared among 6 friends
print("Each friend gets", 24 / 6, "cookies!")
```

**Output:** `Each friend gets 4.0 cookies!`

### Example 3: Division with Remainders

```python
print(10 / 3)
```

**Output:** `3.3333333333333335`

When division doesn't come out even, Python gives you the full decimal answer!

### Example 4: Pizza Slices

```python
# 1 pizza has 8 slices, shared among 3 friends
print("Each person gets", 8 / 3, "slices")
```

**Output:** `Each person gets 2.6666666666666665 slices`

(Don't worry—we'll learn how to round numbers later!)

---

## 🎯 Math with Variables

Remember variables from Term 1? They're like labeled boxes that hold information. We can put numbers in variables and do math with them!

### Example 1: Storing Numbers

```python
apples = 5
oranges = 3
total_fruit = apples + oranges
print("Total fruit:", total_fruit)
```

**Output:** `Total fruit: 8`

### Example 2: Game Score

```python
level1_score = 100
level2_score = 150
level3_score = 200
total_score = level1_score + level2_score + level3_score
print("Your total score is:", total_score)
```

**Output:** `Your total score is: 450`

### Example 3: Changing Variables

```python
coins = 50
print("You have", coins, "coins")

# You find a treasure chest!
coins = coins + 100
print("After finding treasure:", coins, "coins!")

# You buy a power-up
coins = coins - 25
print("After buying power-up:", coins, "coins!")
```

**Output:**

```
You have 50 coins
After finding treasure: 150 coins!
After buying power-up: 125 coins!
```

### Example 4: Calculating Area

```python
# Calculate the area of a rectangle
length = 10
width = 5
area = length * width
print("The rectangle is", length, "by", width)
print("The area is", area, "square units")
```

**Output:**

```
The rectangle is 10 by 5
The area is 50 square units
```

> _BrightByte says: "Using variables for math is SUPER powerful! You can change the numbers once and the whole calculation updates. Real programmers use this all the time!"_

---

## 🔄 Order of Operations (Sneak Peek!)

Python follows the same order of operations you learn in math class! Here's a quick preview:

### Multiplication and Division First

```python
print(2 + 3 * 4)
```

**Output:** `14`

**Why?** Python does `3 * 4 = 12` first, then `2 + 12 = 14`.

### Use Parentheses to Change Order

```python
print((2 + 3) * 4)
```

**Output:** `20`

**Why?** Parentheses first! `(2 + 3) = 5`, then `5 * 4 = 20`.

We'll learn MUCH more about this next week!

---

## 🎮 Practice Time!

### Challenge 1: The Candy Store

Write code to figure out the total:

- 12 lollipops
- 8 chocolate bars
- 15 gummy bears

```python
lollipops = 12
chocolate = 8
gummy_bears = 15
total_candy = lollipops + chocolate + gummy_bears
print("Total candy pieces:", total_candy)
```

### Challenge 2: The Pizza Party

You're ordering pizza for a party!

- 3 pizzas
- Each pizza has 8 slices
- How many total slices?

```python
pizzas = 3
slices_per_pizza = 8
total_slices = pizzas * slices_per_pizza
print("Total pizza slices:", total_slices)
```

### Challenge 3: Fair Sharing

You have 100 stickers to share equally among 4 friends. How many does each friend get?

```python
stickers = 100
friends = 4
each_gets = stickers / friends
print("Each friend gets", each_gets, "stickers!")
```

### Challenge 4: Video Game Stats

Create your own video game score tracker:

```python
# My Video Game Score
player_name = "SuperCoder"
enemies_defeated = 25
points_per_enemy = 10
bonus_points = 50

total_points = (enemies_defeated * points_per_enemy) + bonus_points

print("Player:", player_name)
print("Enemies defeated:", enemies_defeated)
print("Total points:", total_points)
```

---

## 📝 Key Takeaways

### The Four Math Operators

| What You Want | Symbol | Example         | Remember                  |
| ------------- | ------ | --------------- | ------------------------- |
| Add           | `+`    | `print(5 + 3)`  | Same as regular math!     |
| Subtract      | `-`    | `print(10 - 4)` | Same as regular math!     |
| Multiply      | `*`    | `print(6 * 7)`  | Use \*, NOT x             |
| Divide        | `/`    | `print(20 / 5)` | Always gives decimal (.0) |

### Important Things to Remember

1. **Use \* for multiplication** — NOT the letter x
2. **Division gives decimals** — Even 10/2 gives 5.0
3. **Variables work in math** — `apples + oranges` works great!
4. **Python calculates first** — In `print(5 + 3)`, Python does the math, then prints

### Vocabulary Words

| Word           | Definition                                 | Example               |
| -------------- | ------------------------------------------ | --------------------- |
| **Operator**   | A symbol that tells Python what math to do | `+`, `-`, `*`, `/`    |
| **Expression** | A math problem Python can solve            | `5 + 3`               |
| **Float**      | A number with a decimal point              | `4.0`, `3.5`          |
| **Integer**    | A whole number (no decimal)                | `4`, `10`, `100`      |
| **Calculate**  | To figure out the answer to a math problem | Python calculates 5+3 |

---

## 🌟 Next Lesson Preview

**Week 2: Bigger Math!**

Next week, you'll discover even MORE math powers:

- **Exponents** — Making numbers HUGE with `**`
- **Modulo** — Finding remainders with `%`
- **PEMDAS** — The secret order of operations

**Sneak peek:**

```python
# Exponents - powers!
print(2 ** 10)  # 2 to the power of 10 = 1024!

# Modulo - remainders!
print(17 % 5)   # 17 divided by 5 has remainder 2!
```

Get ready to become a REAL Math Wizard! 🧙‍♂️

---

## 🎉 Great Job, Math Wizard!

You just learned how to turn Python into your personal calculator!

**What you accomplished today:**

- ✅ Learned the four math operators: `+`, `-`, `*`, `/`
- ✅ Did addition, subtraction, multiplication, and division
- ✅ Used variables to store and calculate numbers
- ✅ Combined math with print() statements
- ✅ Got a preview of order of operations

> _BrightByte says: "WOW! You just unlocked Python's calculator superpowers! 🦸 From now on, you never need to do math by hand again—just ask Python! But here's the cool part: this is just the beginning. Next week, we're going to learn even MORE powerful math tricks. You're doing AMAZING! Keep practicing, and I'll see you next week!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these fun challenges:

1. **Times Table Generator:** Print out your favorite times table (like 7x1, 7x2, 7x3...)
2. **Money Calculator:** If you have $20 and each toy costs $3, how many toys can you buy? How much money is left?
3. **Sports Stats:** Track points scored in different quarters of a game
4. **Recipe Doubler:** If a recipe uses 3 eggs and 2 cups of flour, what would you need to double it?

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: asking questions is how all great coders learn!_
