---
title: "Stopping Loops"
description: "Learn how to safely stop while loops - using break, continue, and proper conditions"
difficulty: "beginner"
order_index: 2
course_slug: "term-7-game-builder"
is_premium: false
requires_trinket: true
starter_code: |
  # Stopping Loops
  # Learn to control and stop loops safely

  # Using break to stop
  while True:
      answer = input("Say 'quit' to stop: ")
      if answer == "quit":
          break
      print("You said:", answer)

  # Using continue to skip
  count = 0
  while count < 10:
      count = count + 1
      if count == 5:
          continue  # Skip printing 5
      print(count)
class_activities: |
  ## 🎮 Class Activity: Loop Control Challenge!

  1. Partner up with a classmate
  2. Challenge 1: Who can create a loop that stops when you type "stop"?
  3. Challenge 2: Who can create a loop that skips even numbers?
  4. Challenge 3: Who can create the safest loop (no infinite loops!)?
  5. Share your code with the class!

  **Bonus:** Try creating a menu that loops until user chooses "exit"!
take_home_assignment: |
  ## 📚 Homework: Loop Control Master

  **Assignment:** Create a Python program that demonstrates safe loop control!

  **Requirements:**
  1. Use `break` to stop a loop when user types "quit"
  2. Use `continue` to skip certain numbers in a loop
  3. Create a loop that counts but skips multiples of 3
  4. Add comments explaining your loop control
  5. Make sure NO infinite loops!
  6. Code must run without errors

  **Bonus Challenges:**
  - Create a menu that loops until "exit"
  - Create a loop that stops after 5 attempts
  - Use both break and continue in one program

  **Submit:** Share your Trinket link with your instructor.
ai_activities: |
  ## 🤖 Did You Know? AI Connection

  AI uses break and continue to control its behavior! When AI searches for something, it uses break to stop when it finds the answer. When AI processes data, it uses continue to skip irrelevant information. These are the same control tools you're learning!

  You're mastering the same loop control that makes AI efficient!
---

# Term 7, Lesson 2: Stopping Loops 🛑

**Course:** Term 7: Game Builder  
**Duration:** 60 minutes  
**Term:** 7 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

By the end of this lesson, you will be able to:

- Use `break` to stop a loop immediately
- Use `continue` to skip to the next iteration
- Control loops safely and avoid infinite loops
- Create loops that stop based on user input
- Build more sophisticated loop patterns

---

## 🤖 Welcome from BrightByte!

> _"Awesome work last week! You learned while loops. But guess what? Sometimes you need MORE control over your loops. What if you want to stop a loop in the middle? Or skip certain iterations? Today, you're going to learn `break` and `continue`—two powerful tools that give you complete control over your loops! Ready to become a loop master?"_

### What's New This Week?

Last week you learned:
- Basic `while` loops
- Conditions that control loops
- Avoiding infinite loops

This week you'll discover:
- **`break`** — Stop a loop immediately
- **`continue`** — Skip to the next iteration
- **More control** — Better ways to stop loops
- **Safer loops** — Techniques to prevent infinite loops

> _BrightByte says: "These tools make loops much safer and more powerful! Perfect for games!"_

---

## 🛑 Using `break` to Stop Loops

### What is `break`?

`break` immediately stops a loop, even if the condition is still True.

### Example 1: Stop When User Says "quit"

```python
while True:
    answer = input("Say 'quit' to stop: ")
    if answer == "quit":
        break  # Stop the loop!
    print("You said:", answer)
print("Loop stopped!")
```

**How it works:**
1. Loop runs forever (`while True`)
2. Ask user for input
3. If user types "quit", `break` stops the loop immediately
4. Otherwise, print what they said and continue

**Output:**
```
Say 'quit' to stop: hello
You said: hello
Say 'quit' to stop: python
You said: python
Say 'quit' to stop: quit
Loop stopped!
```

### Example 2: Stop After Finding Something

```python
count = 1
while count <= 10:
    print(count)
    if count == 5:
        break  # Stop when we reach 5
    count = count + 1
print("Done!")
```

**Output:**
```
1
2
3
4
5
Done!
```

**Note:** The loop stops at 5, even though the condition `count <= 10` is still True!

### Example 3: Menu That Loops Until "exit"

```python
while True:
    print("1. Play game")
    print("2. View score")
    print("3. Exit")
    choice = input("Choose: ")
    
    if choice == "3":
        break  # Exit the menu
    
    if choice == "1":
        print("Playing game...")
    elif choice == "2":
        print("Your score: 100")
    
print("Goodbye!")
```

---

## ⏭️ Using `continue` to Skip Iterations

### What is `continue`?

`continue` skips the rest of the current iteration and goes to the next one.

### Example 1: Skip Even Numbers

```python
count = 0
while count < 10:
    count = count + 1
    if count % 2 == 0:  # If even
        continue  # Skip to next iteration
    print(count)  # Only prints odd numbers
```

**Output:**
```
1
3
5
7
9
```

**How it works:**
- When `count` is even, `continue` skips the `print()` and goes to the next iteration
- Only odd numbers get printed

### Example 2: Skip Multiples of 3

```python
count = 0
while count < 20:
    count = count + 1
    if count % 3 == 0:  # If multiple of 3
        continue  # Skip it
    print(count)
```

**Output:**
```
1
2
4
5
7
8
10
11
13
14
16
17
19
20
```

### Example 3: Skip When User Types "skip"

```python
count = 0
while count < 5:
    count = count + 1
    answer = input(f"Round {count}: Type 'skip' to skip, or press Enter: ")
    if answer == "skip":
        continue  # Skip this round
    print(f"You completed round {count}!")
```

---

## 🎯 Combining `break` and `continue`

### Example: Menu with Skip Option

```python
round_num = 0
while True:
    round_num = round_num + 1
    print(f"\nRound {round_num}")
    choice = input("Play (p), Skip (s), or Quit (q): ")
    
    if choice == "q":
        break  # Stop the game
    elif choice == "s":
        continue  # Skip this round
    else:
        print("Playing round", round_num)
```

---

## ⚠️ Important Rules

### Rule 1: `break` Stops Immediately

```python
while True:
    print("Before break")
    break
    print("After break")  # This NEVER runs!
```

**Output:**
```
Before break
```

### Rule 2: `continue` Skips to Next Iteration

```python
count = 0
while count < 3:
    count = count + 1
    print("Before continue")
    continue
    print("After continue")  # This NEVER runs!
```

**Output:**
```
Before continue
Before continue
Before continue
```

### Rule 3: Always Have a Way Out

When using `while True:`, always have a `break` condition!

```python
# GOOD: Has a way out
while True:
    answer = input("Say 'quit': ")
    if answer == "quit":
        break  # Way out!

# BAD: No way out - infinite loop!
while True:
    print("Hello")  # Runs forever!
```

---

## 🎮 Practice Challenges!

### Challenge 1: Stop When User Types "stop"

```python
while True:
    word = input("Enter a word (or 'stop' to quit): ")
    if word == "stop":
        break
    print("You entered:", word)
```

### Challenge 2: Skip Even Numbers

```python
count = 0
while count < 10:
    count = count + 1
    if count % 2 == 0:
        continue
    print(count)
```

### Challenge 3: Menu Loop

```python
while True:
    print("1. Option 1")
    print("2. Option 2")
    print("3. Exit")
    choice = input("Choose: ")
    if choice == "3":
        break
    print("You chose option", choice)
```

### Challenge 4: Skip Multiples of 5

```python
count = 0
while count < 20:
    count = count + 1
    if count % 5 == 0:
        continue
    print(count)
```

### Challenge 5: Create Your Own!

Create a loop that uses both `break` and `continue` creatively!

---

## 📝 Key Takeaways

### `break` - Stop the Loop

```python
while condition:
    if something:
        break  # Stops immediately
    # More code
```

### `continue` - Skip This Iteration

```python
while condition:
    if something:
        continue  # Skip to next iteration
    # More code (skipped if continue runs)
```

### Safety Rules

1. **Always have a way out** — When using `while True:`, include a `break`
2. **Test your loops** — Make sure they can stop
3. **Use break carefully** — Make sure you want to stop completely
4. **Use continue carefully** — Make sure you want to skip, not stop

### When to Use Each

| Use `break` when...        | Use `continue` when...        |
| -------------------------- | ----------------------------- |
| You want to stop the loop  | You want to skip this iteration |
| User says "quit"           | Number is even (skip it)       |
| Found what you're looking for | Invalid input (skip it)      |
| Error occurs               | Want to skip certain values    |

---

## 🌟 Next Lesson Preview

**Week 3: Game Loops**

Next week, you'll use while loops to create game loops:

- **Games that keep playing** — Until user quits
- **Game menus** — Loops with choices
- **Interactive games** — Real game structures

**Sneak peek:**

```python
# Game loop
playing = True
while playing:
    # Game code here
    answer = input("Play again? (yes/no): ")
    if answer == "no":
        playing = False
```

Get ready to build real games! 🎮

---

## 🎉 Great Job, Loop Controller!

You just learned to control loops like a pro!

**What you accomplished today:**

- ✅ Learned to use `break` to stop loops
- ✅ Learned to use `continue` to skip iterations
- ✅ Created safer, more controlled loops
- ✅ Built loops that respond to user input
- ✅ Avoided infinite loops with proper control

> _BrightByte says: "WOW! You now have complete control over loops! 🛑 These tools—break and continue—are what make loops safe and powerful. Next week, we're going to use these to create REAL game loops that keep playing until the user quits. You're becoming a real game developer!"_

---

## 📚 Extra Practice Ideas

Want to practice more? Try these:

1. **Menu Systems:** Create menus that loop until exit
2. **Skip Patterns:** Skip multiples of different numbers
3. **Break Conditions:** Create loops that break on different conditions
4. **Combined Control:** Use both break and continue in creative ways
5. **Game Prep:** Think about game loops you want to create!

---

_KidsLearnAI - Empowering the Next Generation with AI Education_  
_www.kidslearnai.ca_  
_Instagram: @kids_learn_ai_

---

_Questions? Stuck on something? Don't worry! Ask your instructor or parent for help. Remember: break stops, continue skips—use them wisely!_ 🛑

