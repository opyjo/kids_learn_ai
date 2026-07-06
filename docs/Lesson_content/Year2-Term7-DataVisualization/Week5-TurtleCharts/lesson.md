---
title: "Turtle Graphics Charts 🐢📊"
description: "Meet Python's turtle — a drawing pen you steer with code — and use it to draw a real, colourful bar chart of your data, with a text-chart fallback for anyone who can't run turtle"
difficulty: "intermediate"
order_index: 5
course_slug: "year2-term-7-data-visualization"
is_premium: false
requires_trinket: true
starter_code: |
  # 🐢📊 Turtle Chart Studio — Week 5
  # ⚠️ IMPORTANT: open a "Python with Turtle" trinket (trinket.io/turtle)
  # A plain text trinket will show NOTHING for turtle code!

  import turtle

  # Our data: favourite fruit counts in Class 2B
  fruit = {"Mango": 8, "Banana": 5, "Orange": 6}

  # Set up the pen and the drawing window
  screen = turtle.Screen()
  pen = turtle.Turtle()
  pen.speed(0)        # 0 = fastest
  pen.hideturtle()    # hide the little arrow

  # TODO 1: finish this helper so it draws ONE filled bar
  def draw_bar(t, x, height, colour):
      width = 40
      t.penup()
      t.goto(x, 0)         # start at the baseline
      t.pendown()
      t.color(colour)
      t.begin_fill()
      # draw the four corners of the rectangle:
      t.goto(x, height)
      # TODO: add the other three goto() lines to finish the rectangle
      t.end_fill()

  # TODO 2: draw ONE test bar to check your helper works
  # draw_bar(pen, -50, 100, "red")

  turtle.done()   # keeps the drawing window open
solution_code: |
  # 🐢📊 Turtle Bar Chart — one working solution
  # ⚠️ Run this in a "Python with Turtle" trinket (trinket.io/turtle)!

  import turtle

  # --- our data: favourite fruit counts in Class 2B ---
  fruit = {"Mango": 8, "Banana": 5, "Orange": 6, "Apple": 3, "Guava": 7}

  # --- set up the pen and the window ---
  screen = turtle.Screen()
  screen.title("Favourite Fruits 🍎")
  pen = turtle.Turtle()
  pen.speed(0)        # draw as fast as possible
  pen.hideturtle()    # hide the arrow so the chart looks clean

  # --- a helper that draws ONE filled bar ---
  def draw_bar(t, x, height, colour):
      width = 40
      t.penup()
      t.goto(x, 0)            # move to the base of the bar
      t.pendown()
      t.color(colour)
      t.begin_fill()          # start colouring in
      t.goto(x, height)       # up the left side
      t.goto(x + width, height)   # across the top
      t.goto(x + width, 0)    # down the right side
      t.goto(x, 0)            # back along the base
      t.end_fill()            # fill the rectangle

  # --- draw the baseline (the x-axis) ---
  pen.penup()
  pen.goto(-160, 0)
  pen.pendown()
  pen.color("black")
  pen.goto(160, 0)

  # --- loop over the data and draw every bar ---
  colours = ["red", "orange", "green", "blue", "purple"]
  x = -150            # x position of the first bar
  scale = 20          # each unit of data = 20 pixels tall
  i = 0
  for name in fruit:
      value = fruit[name]
      height = value * scale        # int * int = int (a whole number of pixels)
      colour = colours[i % len(colours)]
      draw_bar(pen, x, height, colour)

      # write the value on top of the bar
      pen.penup()
      pen.goto(x + 20, height + 5)
      pen.color("black")
      pen.write(value, align="center", font=("Arial", 12, "bold"))

      # write the category name under the bar
      pen.goto(x + 20, -25)
      pen.write(name, align="center", font=("Arial", 10, "normal"))

      x = x + 60      # slide across to the next bar slot
      i = i + 1

  # --- title at the top ---
  pen.penup()
  pen.goto(0, 180)
  pen.write("Favourite Fruits in Class 2B", align="center", font=("Arial", 16, "bold"))

  turtle.done()       # keep the window open so we can admire it
class_activities: |
  ## 🐢 Class Activity: Turtle Chart Studio

  You are going to draw a REAL bar chart with turtle — coloured bars, labels, and a title. We build it in stages, and you give a **thumbs up** in Zoom at each checkpoint.

  > 🐢 **Open a Turtle trinket first!** Go to **trinket.io/turtle** (or make a new "Python with Turtle" trinket). Turtle drawings do NOT appear in a normal text trinket. Name it `Y2-T7-W5-TurtleCharts`.

  ### Stage 1 — Wake the turtle (⭐)
  Type the set-up lines and draw ONE test line, then run it:
  ```python
  import turtle
  pen = turtle.Turtle()
  pen.forward(100)
  pen.left(90)
  pen.forward(50)
  turtle.done()
  ```
  See the pen draw an L-shape? **Thumbs up!** 👍 (If nothing appears — you're in a text trinket. Switch to a Turtle trinket.)

  ### Stage 2 — One bar (⭐⭐)
  Add the `draw_bar` helper from the starter code, finish the missing `goto()` lines, then draw one bar:
  ```python
  draw_bar(pen, -50, 100, "red")
  ```
  A red rectangle standing on the baseline? **Thumbs up!** 👍

  ### Stage 3 — A whole chart (⭐⭐⭐)
  Use the `fruit` dictionary and a `for` loop to draw ALL the bars, spaced out and coloured, with the value on top and the name underneath. Match the solution code.

  **Zoom checkpoint:** paste "Chart done! 🐢📊" in the chat when your full chart appears. Fast finishers — share your screen so the class can cheer!

  ### Bonus (🌟)
  - Add a title at the top with `pen.write(...)`
  - Change the `scale` from 20 to 30 and watch every bar grow
  - Give each bar your own colour by editing the `colours` list

  > 🐢 **No turtle? No problem.** Do the "Text-chart fallback" version from today's lesson in a normal trinket — you still make a labelled chart of the same data.
take_home_assignment: |
  ## 📚 Homework: Your Own Turtle Chart

  Draw a bar chart of a dataset **you** choose, with **5 or more categories**.

  Ideas: goals your favourite football team scored per month, hours you sleep each night of the week, number of each colour of sweet in a packet, pets in your street, minutes of screen time per day.

  **Requirements (turtle version):**
  1. Store your data in a **dictionary** (name → number), with **5+ categories**
  2. Use the `draw_bar` helper and a **`for` loop** to draw every bar
  3. **Scale** the heights so the tallest bar fits nicely (use an int scale)
  4. **Colour** the bars and **label** each one (name under, value on top)
  5. Add a **title** with `pen.write(...)`

  **Challenge tiers:**
  - ⭐ 5 bars, coloured and labelled
  - ⭐⭐ Add a title and make the tallest bar a different, bold colour
  - ⭐⭐⭐ Sort your data so the bars go tallest → shortest, then draw it

  **No turtle available?** Do the **text-chart version** instead: use `"█" * count` and f-strings to print a labelled bar chart of the same 5+ categories in a normal trinket. Any tier counts as done.

  **Submit:** Save your Trinket (`Y2-T7-W5-TurtleCharts`), click **Share**, copy the link, and paste it where your teacher asks. New Trinket? Start one at **trinket.io/turtle**.
ai_activities: |
  ## 🤖 Light Discussion: Why Charts Matter for AI

  AI systems dig through HUGE piles of data — millions of rows a human could never read. But humans still have to *understand* what the AI found and decide if we trust it. That is where charts come in.

  - When an AI spots that "sales rise every December," a **bar chart** makes that pattern obvious in one glance.
  - When an AI ranks which fruit is most popular, a chart lets a human instantly check: does that match reality?

  **Type in the Zoom chat:** *"What's easier to understand — a list of 20 numbers, or a bar chart of them? Why?"*

  Today you're the one turning numbers into a picture — the exact skill that helps humans make sense of what AI discovers. Keep it in mind for your **Data Story** in Week 7!
---

# Year 2, Lesson 5: Turtle Graphics Charts 🐢📊

**Course:** Data & Visualization
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 7 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

- Meet **turtle** — a drawing pen you steer with Python code
- The core turtle moves: `forward`, `left`/`right`, `penup`/`pendown`, `goto`, `color`, and filling shapes
- How to draw a single **filled rectangle** — that's one bar of a chart
- How to **loop over data** to draw a whole colourful, labelled **bar chart**
- A **text-chart fallback** using `"█" * n` for anyone who can't run turtle

---

## 🤖 BrightByte Says Hello

> *"Four weeks ago you were building bar charts out of block characters in the output panel — and they were GREAT. But today? Today we pick up an actual pen and DRAW. Turtle is a tiny robot that lives in your screen, holding a marker, waiting for your orders. Tell it where to go and it draws. By the end of this lesson you'll turn a dictionary of numbers into a proper coloured chart. Let's give the turtle a job!"*
> — BrightByte 🤖🐢

---

## 🐢 Use a Turtle Trinket!

> ### ⚠️ READ THIS BEFORE YOU CODE
> Turtle graphics only appear in a **"Python with Turtle"** trinket.
>
> 👉 Go to **trinket.io/turtle** and start a new one, OR make a new trinket and choose the **"Python with Turtle"** type.
>
> If you type turtle code into a **normal text trinket**, you will see... **nothing**. No error, no drawing — just a blank output. That confuses everyone, so check this first! Name today's trinket `Y2-T7-W5-TurtleCharts`.

---

## 🐢 Part 1: Meet the Turtle

Imagine a tiny robot turtle sitting in the middle of your screen, holding a pen. Wherever it walks, it draws a line. You are the boss — you tell it where to go.

To wake it up, we `import` the turtle module and create a turtle:

```python
import turtle

pen = turtle.Turtle()   # our turtle, we'll call it "pen"
pen.forward(100)        # walk forward 100 steps, drawing a line
turtle.done()           # keep the window open
```

Run that in a **Turtle trinket** and you'll see a line appear. That's it — you're drawing with code!

The screen is a grid, like graph paper. The **middle is (0, 0)**. Going right increases `x`, going up increases `y` — exactly like the coordinates you know from maths.

```
            +y (up)
             │
   -x ───────┼─────── +x
   (left)    │        (right)
             │
            -y (down)
```

---

## 🧭 Part 2: The Turtle's Commands

Here are the only commands we need to build charts. Ama, our example coder, keeps this table open while she draws:

| Command | What it does |
|---|---|
| `pen.forward(n)` | Walk forward `n` steps (draws a line) |
| `pen.backward(n)` | Walk backward `n` steps |
| `pen.left(deg)` | Turn left by `deg` degrees |
| `pen.right(deg)` | Turn right by `deg` degrees |
| `pen.penup()` | Lift the pen — **move without drawing** |
| `pen.pendown()` | Put the pen down — draw again |
| `pen.goto(x, y)` | Jump straight to the point `(x, y)` |
| `pen.color("blue")` | Set the pen (and fill) colour |
| `pen.begin_fill()` | Start colouring in a shape |
| `pen.end_fill()` | Finish and fill the shape |
| `pen.write("Hi")` | Write text at the turtle's position |
| `pen.speed(0)` | Draw at top speed (0 is fastest!) |
| `pen.hideturtle()` | Hide the little arrow |
| `turtle.done()` | Keep the drawing window open |

> 💡 `penup()` and `pendown()` are the secret to charts. We **lift the pen** to move to a new spot, then **put it down** to draw. Without this, the turtle draws lines all over the place!

### 🖥️ Try It

```python
import turtle

pen = turtle.Turtle()
pen.speed(0)

pen.color("green")
pen.forward(80)     # draw a line to the right
pen.left(90)        # turn to face up
pen.forward(80)     # draw a line up

pen.penup()         # LIFT the pen
pen.goto(0, 0)      # move back to the middle — no line drawn
pen.pendown()

turtle.done()
```

Run it. See how the jump back to `(0, 0)` left **no line** because the pen was up? That's the trick.

---

## 🟥 Part 3: One Bar = One Rectangle

A bar chart is just a row of rectangles standing on a line. So first, let's teach the turtle to draw **one** filled rectangle — a single bar — using a **helper function**.

A bar needs three things: **where** it stands (`x`), how **tall** it is (`height`), and what **colour** it is:

```python
def draw_bar(t, x, height, colour):
    width = 40
    t.penup()
    t.goto(x, 0)                # move to the base of the bar
    t.pendown()
    t.color(colour)
    t.begin_fill()              # start colouring in
    t.goto(x, height)           # up the left side
    t.goto(x + width, height)   # across the top
    t.goto(x + width, 0)        # down the right side
    t.goto(x, 0)                # back along the base
    t.end_fill()                # fill it in!
```

Read it like a story: the turtle jumps to the bottom-left corner, then walks around the four corners of the rectangle, then fills it with colour. The `t` is the turtle we pass in — so the helper works with any turtle.

**Test it with one bar:**

```python
import turtle
pen = turtle.Turtle()
pen.speed(0)
pen.hideturtle()

# (paste the draw_bar helper here)

draw_bar(pen, -50, 120, "red")   # a red bar, 120 pixels tall
turtle.done()
```

One red bar standing on the middle line. 🎉 Now — how do we draw a whole chart? We do what programmers always do with a repeated job: we **loop**.

---

## 📊 Part 4: From One Bar to a Whole Chart

Here's the plan for a full chart:

1. Keep the data in a **dictionary** (category → number)
2. Draw a **baseline** for the bars to stand on
3. **Loop** over the data — for each item, draw a bar, then slide across for the next one
4. **Scale** the heights so a value of `8` becomes a nice tall bar (multiply by a scale number)
5. **Label** each bar: the value on top, the name underneath

### Scaling — turning data into pixels

A value like `8` is far too short to see (8 pixels!). So we multiply by a **scale**:

```python
scale = 20
height = value * scale   # 8 * 20 = 160 pixels tall
```

> ⚠️ Keep the scale a **whole number (int)** and use whole-number values, so `height` stays an int. Turtle is happiest with clean whole-number pixel heights — no wobbly decimals.

### Spacing — sliding to the next bar

Each bar sits in a "slot". After drawing one, we move `x` across by a fixed amount so the next bar doesn't sit on top of it:

```python
x = x + 60   # 40 for the bar + 20 gap
```

### The whole chart, put together

```python
import turtle

# --- our data ---
fruit = {"Mango": 8, "Banana": 5, "Orange": 6, "Apple": 3, "Guava": 7}

# --- set up ---
screen = turtle.Screen()
screen.title("Favourite Fruits 🍎")
pen = turtle.Turtle()
pen.speed(0)
pen.hideturtle()

# --- the helper from Part 3 ---
def draw_bar(t, x, height, colour):
    width = 40
    t.penup()
    t.goto(x, 0)
    t.pendown()
    t.color(colour)
    t.begin_fill()
    t.goto(x, height)
    t.goto(x + width, height)
    t.goto(x + width, 0)
    t.goto(x, 0)
    t.end_fill()

# --- baseline (x-axis) ---
pen.penup()
pen.goto(-160, 0)
pen.pendown()
pen.color("black")
pen.goto(160, 0)

# --- loop over the data ---
colours = ["red", "orange", "green", "blue", "purple"]
x = -150
scale = 20
i = 0
for name in fruit:
    value = fruit[name]
    height = value * scale
    colour = colours[i % len(colours)]
    draw_bar(pen, x, height, colour)

    # value on top
    pen.penup()
    pen.goto(x + 20, height + 5)
    pen.color("black")
    pen.write(value, align="center", font=("Arial", 12, "bold"))

    # name underneath
    pen.goto(x + 20, -25)
    pen.write(name, align="center", font=("Arial", 10, "normal"))

    x = x + 60
    i = i + 1

turtle.done()
```

Run it in a **Turtle trinket** and watch your chart build itself, bar by bar. That `i % len(colours)` trick means the colours repeat if you have more bars than colours — clever and tidy.

> 💡 **How the loop knows the value:** `for name in fruit:` gives us each **key** (like `"Mango"`), and `fruit[name]` looks up its number. Same dictionary skill you've used all term — now it's drawing pictures!

---

## 🚫 No turtle? Text-chart fallback

Can't open a Turtle trinket today? No problem — you already know how to make a brilliant chart from **Week 4**, and it runs in any plain trinket. Same data, same idea, drawn with the block character `█`:

```python
# Runs in a NORMAL text trinket — no turtle needed
fruit = {"Mango": 8, "Banana": 5, "Orange": 6, "Apple": 3, "Guava": 7}

print("FAVOURITE FRUITS IN CLASS 2B")
print("=" * 30)
for name in fruit:
    count = fruit[name]
    bar = "█" * count                 # repeat the block "count" times
    print(f"{name:<8} | {bar} {count}")
```

**Output:**
```
FAVOURITE FRUITS IN CLASS 2B
==============================
Mango    | ████████ 8
Banana   | █████ 5
Orange   | ██████ 6
Apple    | ███ 3
Guava    | ███████ 7
```

> 💡 `{name:<8}` lines the names up in a neat 8-character column, so all the bars start in the same place. Both charts tell the same story — turtle just adds colour and shape.

---

## ⚠️ Common Mistakes

**Mistake 1: Running turtle in a normal text trinket**

❌ You type perfect turtle code, click Run, and see... nothing. No error, no drawing. 😱

✅ Turtle only draws in a **"Python with Turtle"** trinket (trinket.io/turtle). Check the trinket type FIRST. Blank output almost always means wrong trinket type.

---

**Mistake 2: Forgetting `turtle.done()`**

❌ Without it, some editors close or freeze the drawing window before you can see it:
```python
draw_bar(pen, -50, 120, "red")
# ...program ends, window vanishes
```

✅ End every turtle program with:
```python
turtle.done()
```
It tells turtle "I'm finished drawing — keep the window open."

---

**Mistake 3: Heights that aren't whole numbers**

❌ A wobbly scale gives messy, hard-to-place bars:
```python
scale = 2.5
height = value * scale     # 8 * 2.5 = 20.0 (a decimal!)
```

✅ Keep the scale a **whole number** so heights stay ints:
```python
scale = 20
height = value * scale     # 8 * 20 = 160 (clean!)
```

---

**Mistake 4: Drawing lines while moving between bars**

❌ Sliding to the next bar with the pen DOWN drags a line across your chart.

✅ Always `penup()` before a `goto()` that shouldn't draw, then `pendown()` when you're ready to draw again. Our `draw_bar` helper already does this for you.

---

## 🐢 Class Activity: Turtle Chart Studio

*(Full step-by-step version with Zoom checkpoints is in the activity panel.)*

Build the fruit chart in three stages — wake the turtle, draw one bar, then loop for the whole chart — giving a **thumbs up** 👍 at each checkpoint. Bonus: add a title, change the scale, and pick your own colours. No turtle? Do the text-chart version of the same data.

---

## 🌟 What's Coming Next Week?

You can now turn numbers into a picture — beautiful! But a chart on its own doesn't explain **what it means**.

Next week (**Week 6: Finding the Story in Data 🔍**) you become a data detective. You'll look at your charts and ask: *What's the biggest? The smallest? What's surprising? What changed?* — and learn to describe the **story** hidden in the numbers. That story is the heart of your **Data Story** project in Week 7, which can proudly include a turtle OR text chart you made this week.

---

## 🏆 Today's Achievements

- ✅ You met **turtle** and steered a pen with `forward`, `left`, `goto`, and friends
- ✅ You used `penup`/`pendown` to move without drawing
- ✅ You wrote a `draw_bar` **helper function** to draw one filled bar
- ✅ You **looped over a dictionary** to draw a whole coloured, labelled bar chart
- ✅ You **scaled** data into pixels and labelled each bar with `write()`
- ✅ You know the **text-chart fallback** for when turtle isn't available

> *"Look at that chart — colours, labels, a title, the lot. You just did what data scientists do every single day: you turned a boring column of numbers into something a human can understand in one glance. Next week we find out what those numbers are actually TELLING us. Brilliant work, chart artist!"*
> — BrightByte 🤖🐢📊

---

## 📚 Homework: Your Own Turtle Chart

Draw a bar chart of a dataset **you** choose, with **5 or more categories**.

**Requirements (turtle version):**
1. Store your data in a **dictionary** with **5+ categories**
2. Use the `draw_bar` helper and a **`for` loop** to draw every bar
3. **Scale** the heights (use an int scale) so the tallest bar fits nicely
4. **Colour** and **label** every bar (name under, value on top)
5. Add a **title** with `pen.write(...)`

**Challenge tiers:**
- ⭐ 5 bars, coloured and labelled
- ⭐⭐ Add a title and make the tallest bar a different, bold colour
- ⭐⭐⭐ Sort your data tallest → shortest, then draw it

**No turtle available?** Do the **text-chart version** with `"█" * count` and f-strings for the same 5+ categories in a normal trinket. Any tier counts as done.

**Submit:** Save your Trinket (`Y2-T7-W5-TurtleCharts`), click **Share**, copy the link, and paste it where your teacher asks. New Trinket? Start one at **trinket.io/turtle**.

---

*You gave a robot turtle a pen and told it to draw your data. That's real power. See you next week, detective! 🐢📊🔍*
