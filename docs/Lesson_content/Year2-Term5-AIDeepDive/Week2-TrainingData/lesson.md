---
title: "Training Data, Features & Labels 📊🏷️"
description: "Discover what a dataset really is — a table of examples with features and labels — and build your own tiny labelled dataset in Python as a list of dicts"
difficulty: "intermediate"
order_index: 2
course_slug: "year2-term-5-ai-deep-dive"
is_premium: false
requires_trinket: true
starter_code: |
  # 📊 Training Data: Features & Labels
  # A DATASET is a table of examples.
  # Each example = some FEATURES (the clues) + a LABEL (the answer).

  # Here is ONE example, stored as a dict:
  example_one = {"legs": 4, "has_fur": True, "sound": "woof", "label": "dog"}
  print(example_one["label"])   # the answer
  print(example_one["sound"])   # a feature

  # A dataset is a LIST of these dicts. Add TWO more animals below!
  dataset = [
      {"legs": 4, "has_fur": True, "sound": "woof", "label": "dog"},
      # {"legs": ?, "has_fur": ?, "sound": "?", "label": "?"},
      # {"legs": ?, "has_fur": ?, "sound": "?", "label": "?"},
  ]

  # Loop through the dataset and print each label
  for animal in dataset:
      print("This example is labelled:", animal["label"])
solution_code: |
  # 📊 Training Data: Features & Labels — one possible solution

  # A dataset = a LIST of examples.
  # Each example is a DICT of features + a "label".
  dataset = [
      {"legs": 4, "has_fur": True,  "sound": "woof",  "label": "dog"},
      {"legs": 4, "has_fur": True,  "sound": "meow",  "label": "cat"},
      {"legs": 2, "has_fur": False, "sound": "tweet", "label": "bird"},
      {"legs": 4, "has_fur": True,  "sound": "moo",   "label": "cow"},
  ]

  # 1) Print each example as a sentence
  print("--- Our training data ---")
  for animal in dataset:
      print(animal["label"], "has", animal["legs"], "legs and says", animal["sound"])

  # 2) How many examples do we have? Which labels?
  labels = []
  for animal in dataset:
      labels.append(animal["label"])
  print("Number of examples:", len(dataset))
  print("Labels:", labels)

  # 3) A NEW example with NO label — can YOU predict it by hand?
  mystery = {"legs": 4, "has_fur": True, "sound": "meow"}
  print("Mystery features:", mystery)
  print("Your prediction goes here!")
class_activities: |
  ## 🎮 Class Activity: Build a Dataset! 📊

  The whole class becomes a **data-collection team**. We are going to build a tiny labelled dataset of **fruits**, store it in Python, and then use it to predict new examples — exactly the way real AI systems are trained.

  ### Step 1 — Agree on the features (whole class, in Zoom chat)
  For every fruit we will record the same clues. As a class, agree on **three features**, for example:
  - `colour`
  - `shape`
  - `size`

  The **label** is the answer: the fruit's name (`apple`, `banana`, `orange`...).

  ### Step 2 — Collect examples (⭐)
  Each student types ONE fruit example into the Zoom chat as features + label, e.g.
  `colour=red, shape=round, size=small -> apple`

  Your teacher collects them into a Python list of dicts on the shared screen.

  ### Step 3 — Store & print the dataset (⭐⭐)
  In Trinket, build the dataset as a **list of dicts** and loop through it:
  ```python
  fruits = [
      {"colour": "red",    "shape": "round", "label": "apple"},
      {"colour": "yellow", "shape": "long",  "label": "banana"},
      {"colour": "orange", "shape": "round", "label": "orange"},
  ]

  for fruit in fruits:
      print(fruit["label"], "is", fruit["colour"], "and", fruit["shape"])
  ```
  Run it and give a **thumbs up** in Zoom when your table prints!

  ### Step 4 — Predict by hand (⭐⭐⭐)
  Your teacher reads out a NEW fruit's features (no label!). As a class, **predict the label** and discuss:
  - Which feature was the biggest clue?
  - Would MORE examples have made you more sure?
  - What if every example in our data was an apple — could we ever predict "banana"?

  ### Bonus
  Add a `size` feature to every fruit and update the loop to print it too. Paste your favourite line in the Zoom chat!
take_home_assignment: |
  ## 📚 Homework: My Own Dataset

  Build a small **labelled dataset** about a topic YOU like — football players, video games, snacks, dog breeds, anything!

  **Requirements:**
  1. Create a **list of dicts** with at least **5 examples**
  2. Every example must have the **same features** (at least 2 features)
  3. Every example must have a `"label"` (the answer)
  4. Loop through the dataset and **print it as a table**
  5. In a comment at the top, write **which keys are features** and **which key is the label**

  **Example run (a dataset of snacks):**
  ```
  --- My Snack Dataset ---
  crisps is salty and crunchy
  chocolate is sweet and soft
  popcorn is salty and crunchy
  banana is sweet and soft
  biscuit is sweet and crunchy
  ```

  **Challenge tiers:**
  - ⭐ 5 examples, 2 features + a label, printed in a loop
  - ⭐⭐ 3 features per example, and print how many examples there are with `len()`
  - ⭐⭐⭐ Add a NEW example with NO label and write (in a comment) what YOU predict the label should be and why

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: Where Does Training Data Come From?

  Last week we learned that some AI **learns from examples**. But those examples have to come from somewhere!

  **Discuss in the Zoom chat:**
  1. 📸 A photo app can tell cats from dogs. **Where did it get thousands of labelled cat and dog pictures?** (Hint: who uploads photos and tags them?)
  2. 🧹 Imagine half the "cat" photos were actually blurry pictures of the floor by mistake. **What would happen to the AI?**
  3. ⚖️ If an AI only ever saw photos of ONE breed of dog, what might it get wrong about other dogs?

  **The big idea — "Garbage In, Garbage Out":** an AI is only as good as the examples it learns from. Too few examples, wrong labels, or unbalanced examples all lead to a weaker, less fair AI. **Quality of data matters more than quantity.**

  We'll come back to the fairness side of this in **Week 5: Bias & Fairness** — today you've spotted the very first seed of it. 🌱
---

# Year 2, Lesson 2: Training Data, Features & Labels 📊🏷️

**Course:** AI Concepts Deep Dive
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 2 of 8

---

## 🎯 What You'll Learn Today

- What a **dataset** really is: a table of **examples** (rows) with **features** (columns)
- The difference between a **feature** (a clue/input) and a **label** (the correct answer)
- How to store a tiny dataset in Python as a **list of dicts** (your Term 4 superpower!)
- How to **classify by hand** — and why MORE and BETTER examples help
- The golden rule of data: **garbage in → garbage out**

---

## 🤖 BrightByte Sets the Scene

> *"Last week you learned that some AI doesn't follow rules a human wrote — it LEARNS from examples. But here's the question nobody asks: what ARE those examples? Where do they live? What shape are they? Today we open the box. Inside every learning machine is something surprisingly simple... a table. Rows and columns. Clues and answers. Let's go and meet the data."*
> — BrightByte 🤖📊

---

## 📊 Part 1: What Is a Dataset?

Imagine you want to teach a machine to tell animals apart. You can't just *tell* it "a dog says woof" — instead you give it lots of **examples** and let it spot the patterns.

A **dataset** is just a **table of examples**:

- Each **row** is one **example** (one animal).
- Each **column** is one **feature** (one clue about that animal).
- One special column is the **label** — the correct answer.

Here is a tiny animal dataset:

| legs | has_fur | sound | **label** |
|---|---|---|---|
| 4 | yes | woof | **dog** |
| 4 | yes | meow | **cat** |
| 2 | no | tweet | **bird** |
| 4 | yes | moo | **cow** |

Read across one row: *"4 legs, has fur, says woof → that's a dog."* Every row is one labelled example the machine can learn from.

> 💡 You have seen tables before — in a spreadsheet, a register, a football league table. A dataset is exactly that: **a table where one column holds the answers.**

---

## 🏷️ Part 2: Features vs Labels — The Big Idea

This is the most important idea of the whole lesson, so let's make it crystal clear.

| Term | What it is | In our animal table |
|---|---|---|
| **Feature** | A clue / an input. Something we can *observe*. | `legs`, `has_fur`, `sound` |
| **Label** | The answer. The thing we're trying to work out. | `dog`, `cat`, `bird`, `cow` |

Think of it like a quiz card 🃏:

- The **features** are written on the FRONT (the clues).
- The **label** is the answer on the BACK.

When we **train**, the machine studies cards with both sides showing. When we ask it to **predict** (like last week!), we show it only the FRONT — the features — and it has to guess the back.

### 💬 Class Discussion

> **You want to predict whether a fruit is an apple or a banana.**
> Type in the **Zoom chat**: name TWO good *features* (clues), and say what the *label* would be.
> (There's no single right answer — colour? shape? Let's compare!)

---

## 🐍 Part 3: A Dataset in Python — List of Dicts

Now the exciting part: your Term 4 skills are *exactly* the tool for the job.

- One example → a **dict** of features + a `"label"`.
- The whole dataset → a **list** of those dicts.

```python
example_one = {"legs": 4, "has_fur": True, "sound": "woof", "label": "dog"}
```

That single dict is one row of our table. The **keys** are the feature names; the **values** are this animal's clues. `"label"` is just another key — but it holds the *answer*.

Now stack several examples into a list:

```python
dataset = [
    {"legs": 4, "has_fur": True,  "sound": "woof",  "label": "dog"},
    {"legs": 4, "has_fur": True,  "sound": "meow",  "label": "cat"},
    {"legs": 2, "has_fur": False, "sound": "tweet", "label": "bird"},
    {"legs": 4, "has_fur": True,  "sound": "moo",   "label": "cow"},
]
```

🎉 **That's a real dataset.** A list of dicts — the exact same structure you built in Term 4 for your Contact Manager. Same skill, brand-new purpose.

### Looping through the data

To read every example, we loop — just like looping through any list:

```python
for animal in dataset:
    print(animal["label"], "has", animal["legs"], "legs and says", animal["sound"])
```

**Output:**
```
dog has 4 legs and says woof
cat has 4 legs and says meow
bird has 2 legs and says tweet
cow has 4 legs and says moo
```

Each time round the loop, `animal` becomes the next dict, and `animal["label"]` reaches inside it to pull out that feature. **You've just printed a whole dataset with four lines of code.**

---

## 🔢 Part 4: Asking Questions of Your Data

Once data is in Python, you can *ask it questions*. How many examples do we have? Which labels appear?

```python
labels = []
for animal in dataset:
    labels.append(animal["label"])

print("Number of examples:", len(dataset))
print("Labels:", labels)
```

**Output:**
```
Number of examples: 4
Labels: ['dog', 'cat', 'bird', 'cow']
```

`len(dataset)` counts the examples (rows). Building a list of just the labels lets us see, at a glance, what answers our machine could ever learn. **A machine can only predict a label it has seen in training** — if `"fish"` was never in the data, the machine will never guess `"fish"`.

---

## 🧠 Part 5: Classify By Hand

Time to *be* the machine. Here is a NEW example — with the label **hidden**:

```python
mystery = {"legs": 4, "has_fur": True, "sound": "meow"}
print("Mystery features:", mystery)
```

**Output:**
```
Mystery features: {'legs': 4, 'has_fur': True, 'sound': 'meow'}
```

🤔 Four legs, has fur, says *meow*... which label from our dataset fits best? You just **classified by hand** — you used the features to pick a label. That is precisely what a trained classifier does, and next week you'll write one in code!

Notice HOW you decided: you compared the mystery's features to examples you'd already seen. **The more good examples you've seen, the more confident your prediction.** If you'd only ever seen one animal in your life, you'd guess terribly.

---

## ⚠️ Part 6: Garbage In, Garbage Out

An AI is only as good as the examples it learns from. Data can go wrong in three big ways:

**1. Too FEW examples.** Train on just two animals and the machine has almost nothing to learn from.

**2. WRONG labels.** If someone labels a cat photo as `"dog"` by mistake, the machine learns the wrong lesson — confidently.

**3. UNBALANCED examples.** Look at this dataset:

```python
animals = [
    {"sound": "woof", "label": "dog"},
    {"sound": "woof", "label": "dog"},
    {"sound": "woof", "label": "dog"},
    {"sound": "meow", "label": "cat"},
]

counts = {"dog": 0, "cat": 0}
for animal in animals:
    counts[animal["label"]] = counts[animal["label"]] + 1
print(counts)
```

**Output:**
```
{'dog': 3, 'cat': 1}
```

Three dogs, only one cat. A machine trained on this will get very good at spotting dogs and be rubbish at cats — simply because it barely saw any. That imbalance is the first seed of what we'll call **bias** in Week 5. 🌱

> **The golden rule — "Garbage In, Garbage Out":** feed a machine poor, wrong, or unbalanced data and you get a poor, unfair AI back. **Better data beats more data.**

---

## ⚠️ Common Mistakes & Misconceptions

**Mistake 1: Confusing a feature with a label**

❌ Wrong thinking: *"The animal's sound is the answer."*
The `sound` is a **clue** we use to reach the answer — it is a **feature**. The **label** is the thing we're trying to work out (`dog`, `cat`...).

✅ Correct: features are the FRONT of the card (clues); the label is the BACK (the answer).

---

**Mistake 2: Thinking "more data" always means "better AI"**

❌ Wrong: *"Just give it a MILLION examples and it'll be perfect."*
A million mislabelled or identical examples teaches the machine almost nothing useful.

✅ Correct: **better data beats more data.** A small, clean, *balanced* dataset can beat a huge messy one.

---

**Mistake 3: Forgetting the label is just another dict key**

❌ Wrong:
```python
animal = {"legs": 4, "dog"}
```
```
SyntaxError: invalid syntax
```

✅ Correct — the label needs its own key, exactly like every feature:
```python
animal = {"legs": 4, "label": "dog"}
print(animal["label"])
```
```
dog
```

---

## 🎮 Class Activity: Build a Dataset! 📊

*(Full step-by-step version is in your activities panel — here's the quick map.)*

1. **Agree the features** as a class (e.g. `colour`, `shape`, `size`).
2. **Collect examples** — each student adds one fruit in the Zoom chat as features + label.
3. **Store & print** the dataset as a list of dicts in Trinket:
   ```python
   fruits = [
       {"colour": "red",    "shape": "round", "label": "apple"},
       {"colour": "yellow", "shape": "long",  "label": "banana"},
       {"colour": "orange", "shape": "round", "label": "orange"},
   ]

   for fruit in fruits:
       print(fruit["label"], "is", fruit["colour"], "and", fruit["shape"])
   ```
   **Output:**
   ```
   apple is red and round
   banana is yellow and long
   orange is orange and round
   ```
4. **Predict by hand** — the teacher reads a new fruit's features; the class guesses the label and discusses which clue mattered most.

Give a **thumbs up** in Zoom when your fruit table prints! 👍

> **Save your work** as `Y2-T5-W2-TrainingData` for your portfolio.

---

## 🌟 What's Coming Next Week?

You just classified a mystery animal *by hand* — using its features to pick a label. Next week, in **Week 3: Build a Rule-Based "AI"**, you'll hand that job to Python! You'll write a program that takes an example's features, follows `if`/`elif` rules you design, and predicts the label all by itself — your very first classifier. Today you built the data; next week you build the brain. 🧠

---

## 🏆 Today's Achievements

- ✅ You can explain what a **dataset** is: rows of examples, columns of features
- ✅ You know the difference between a **feature** (clue) and a **label** (answer)
- ✅ You stored a real dataset in Python as a **list of dicts**
- ✅ You looped through data and asked it questions with `len()`
- ✅ You **classified a mystery example by hand**
- ✅ You know the golden rule: **garbage in, garbage out**

> *"You opened the box and found the secret: inside every learning machine is a humble table of examples. You built one, printed it, and even predicted a mystery. Feed it good data and it soars; feed it rubbish and it stumbles. Remember that — the whole of AI hangs on it."*
> — BrightByte 🤖🏷️

---

## 📚 Homework: My Own Dataset

Build a small **labelled dataset** about a topic YOU like — football players, video games, snacks, dog breeds, anything!

**Requirements:**
1. Create a **list of dicts** with at least **5 examples**
2. Every example must have the **same features** (at least 2 features)
3. Every example must have a `"label"` (the answer)
4. Loop through the dataset and **print it as a table**
5. In a comment at the top, write **which keys are features** and **which key is the label**

**Challenge tiers:**
- ⭐ 5 examples, 2 features + a label, printed in a loop
- ⭐⭐ 3 features per example, and print how many examples there are with `len()`
- ⭐⭐⭐ Add a NEW example with NO label and write (in a comment) what YOU predict the label should be and why

**Submit:** Save your Trinket (`Y2-T5-W2-TrainingData`), click **Share**, copy the link, and paste it in the class WhatsApp/email or wherever your teacher asks.

---

*You've met the data. Next week, you teach a machine to read it. See you there! 📊🐍*
