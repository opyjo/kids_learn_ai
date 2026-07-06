---
title: "Bias & Fairness in AI ⚖️🤖"
description: "Discover why AI can be unfair to some groups, learn that AI reflects its training data, and become a Bias Detective — test a rule-based classifier for unfairness and fix it"
difficulty: "intermediate"
order_index: 5
course_slug: "year2-term-5-ai-deep-dive"
is_premium: false
requires_trinket: true
starter_code: |
  # ⚖️ Bias Detectives — the "name recogniser"
  # This is a tiny rule-based AI, just like the classifier you built in Week 3.
  # It was "trained" on a list of names. Run it... then ask: is it FAIR?

  known_names = ["john", "mary", "david", "sarah", "james", "emma"]

  def check_name(name):
      if name.lower() in known_names:
          return "recognised"
      else:
          return "NOT recognised"

  # Real names of real people who all want to use this app
  test_names = ["John", "Sarah", "Chidi", "Amara", "Kwame", "Ngozi"]

  for name in test_names:
      print(name, "->", check_name(name))

  # 🔎 Detective question: who does this system work for?
  #    Who was LEFT OUT of the training list?
solution_code: |
  # ⚖️ Bias Detectives — SOLVED
  # We audit the biased list, SEE the unfairness in numbers, then fix the data.

  # ---- The original (biased) training data ----
  known_names = ["john", "mary", "david", "sarah", "james", "emma"]

  def check_name(name):
      return name.lower() in known_names

  # ---- A fairness audit: test two groups and count ----
  group_a = ["John", "Mary", "David", "Sarah"]
  group_b = ["Chidi", "Amara", "Kwame", "Ngozi"]

  def audit(group, group_name):
      recognised = 0
      for name in group:
          if check_name(name):
              recognised = recognised + 1
      print(group_name, "recognised:", recognised, "out of", len(group))

  print("--- Audit of the BIASED list ---")
  audit(group_a, "Group A")
  audit(group_b, "Group B")

  # ---- The FIX: balance the data so every group is represented ----
  known_names = [
      "john", "mary", "david", "sarah", "james", "emma",
      "chidi", "amara", "kwame", "ngozi", "ama", "kofi"
  ]

  print("--- Audit AFTER balancing the data ---")
  audit(group_a, "Group A")
  audit(group_b, "Group B")
class_activities: |
  ## 🕵️ Class Activity: Bias Detectives

  You are now a team of **Bias Detectives**. Your job: inspect a suspicious AI, find who it is unfair to, and propose a fix.

  ### Case File 1 — The Name Recogniser (⭐)
  Run the starter code. In the **Zoom chat**, answer:
  1. Which names were recognised? Which were NOT?
  2. Is there a *pattern* to who got left out?

  Give a **thumbs up** 👍 when you have spotted the pattern.

  ### Case File 2 — Prove It With Numbers (⭐⭐)
  Add the `audit()` function from the solution. Run it and read the counts aloud in your head:
  - Group A recognised: **4 out of 4**
  - Group B recognised: **0 out of 4**

  A feeling ("this seems unfair") is now **evidence** (numbers). That is what real AI auditors do.

  ### Case File 3 — Fix the Data (⭐⭐⭐)
  Balance the `known_names` list so **both groups** are represented. Re-run the audit. Both groups should now score **4 out of 4**.

  ### Detective Debrief
  In the Zoom chat, finish this sentence:
  > "This AI was unfair because its training data ________, and we fixed it by ________."
take_home_assignment: |
  ## 📚 Homework: Bias Investigator

  Pick **ONE** of the two tracks. Do it in a Trinket named **`Y2-T5-W5-BiasFairness`**.

  ### Track A — Investigate a real AI tool (writing)
  Choose one AI tool you know (a voice assistant, a photo filter, a translator, an autocomplete, a recommendation feed). In a comment block (`#`) at the top of your Trinket, answer:
  1. **What does it do?**
  2. **Who might it be unfair to, and why?**
  3. **What data was it likely trained on? Who might have been left out?**
  4. **One idea to make it fairer.**

  Write 5–8 sentences. Keep it factual and respectful — describe the problem, don't blame a person.

  ### Track B — Make a classifier fairer (code)
  Start from today's name recogniser (or your Week 3 keyword classifier). Then:
  1. Show it being **unfair** to some group (run it, keep the output in a comment).
  2. **Balance the data** so it treats every group equally.
  3. Add an `audit()` function that **counts** results per group to prove your fix worked.
  4. Add comments explaining what you changed and why.

  **Challenge tiers (either track):**
  - ⭐ Complete all the required points
  - ⭐⭐ Add a third group to test, or a second real-world example
  - ⭐⭐⭐ Explain in comments how *unbalanced training data* caused the bias (callback to Week 2!)

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it where your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: Who Is AI Built For?

  AI feels like it works for "everyone" — but it only ever learns from the **data it was shown**. If that data leaves people out, so does the AI.

  **Discuss in the Zoom chat (one at a time, be kind and factual):**
  - 🗣️ Has a voice assistant ever failed to understand your name, your accent, or someone in your family? What happened?
  - 📸 Have you seen a photo app or filter that worked better for some people than others?
  - 🎯 A video app keeps recommending the same *kind* of video. Whose viewing history do you think trained it?

  **The big question:** for any AI tool, ask *"Whose data trained this — and who was left out?"*

  This is the exact mindset you'll use in your **Investigation Report (Week 7)**: every good report includes a section on *"what could go wrong, and who could this be unfair to?"*
---

# Year 2, Lesson 5: Bias & Fairness in AI ⚖️🤖

**Course:** AI Concepts Deep Dive
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 5 of 8

---

## 🎯 What You'll Learn Today

- What **bias** means in AI: when a system is systematically unfair to some group of people
- Why it usually happens because the **training data** was unbalanced or unfair (a callback to Week 2!)
- Real, factual examples: voice assistants, photo tools, and recommendation systems
- How to become a **Bias Detective** — test a rule-based classifier and *measure* its unfairness
- How to **fix** a biased classifier by balancing its data
- The **fairness mindset**: three questions to ask about any AI

---

## 🤖 BrightByte Sounds Serious Today

> *"Last week we saw that a chatbot can be confidently WRONG. Today, something bigger. AI doesn't just make random mistakes — sometimes it's unfair to the SAME group of people, over and over. Not because a computer is mean. Because of the DATA it learned from. Today you become a detective. We're going to catch an AI being unfair — and then we're going to fix it. Grab your magnifying glass. 🔎"*
> — BrightByte 🤖⚖️

---

## ⚖️ Part 1: What Is Bias in AI?

You already know AI **learns from data** (Week 1) and that **data can be low quality** (Week 2). Now we put those two ideas together.

> **Bias in AI** is when a system is **systematically unfair** to some group of people — it works worse for them, again and again, in a predictable way.

The key word is **systematically**. Everyone makes the odd mistake. Bias is different: it's a mistake that lands on the *same group* every time.

And here's the surprising part — it usually isn't because someone was cruel. It's because of the **data the AI was trained on**:

| If the training data... | Then the AI... |
|---|---|
| mostly shows one accent | understands other accents worse |
| mostly shows one skin tone | works less well on other skin tones |
| copies past unfair decisions | repeats those unfair decisions |
| leaves a group out entirely | acts like that group doesn't exist |

> **The big idea:** AI is a mirror. It reflects the data it was shown — including the data's blind spots.

---

## 🌍 Part 2: Real Examples (Kept Factual)

These are real kinds of problems engineers have found and worked to fix. We describe them calmly — the goal is to *understand*, not to be shocked.

### Example 1 — Voice assistants and names 🗣️

Some voice assistants understand certain accents and names far better than others. If the voice data used to train it came mostly from one region, then a name like **Ngozi** or **Oluwaseun** — or a West African accent — might be misheard, while common English names sail through.

> Has this happened to you or someone in your family? Hold that thought for our discussion. 💬

### Example 2 — Photo tools and skin tone 📸

Some camera and photo tools have historically worked better on lighter skin tones — focusing, brightening, or detecting faces less reliably on darker skin. The cause was often the same: the **photos used to train them weren't balanced** across skin tones.

### Example 3 — A hiring tool that learned unfairness 💼

Imagine a company builds an AI to sort job applications, and trains it on **who they hired in the past**. If past hiring was unfair to some group, the AI learns that unfairness as if it were a rule — and repeats it. The AI didn't invent the bias; it **copied it from the data**.

> Notice the pattern in all three: **the data was unbalanced or unfair, so the AI became unbalanced or unfair.** Same cause, every time.

---

## 🔎 Part 3: Catch an AI Being Unfair

Enough talk — let's catch one red-handed. Open **Trinket** and start a new Trinket named `Y2-T5-W5-BiasFairness`.

Here is a tiny **rule-based classifier** — exactly the style you built in Week 3. It's a "name recogniser": an app that checks whether it *knows* a name (imagine a sign-up form, or a voice assistant deciding if it heard a real name).

```python
known_names = ["john", "mary", "david", "sarah", "james", "emma"]

def check_name(name):
    if name.lower() in known_names:
        return "recognised"
    else:
        return "NOT recognised"

test_names = ["John", "Sarah", "Chidi", "Amara", "Kwame", "Ngozi"]

for name in test_names:
    print(name, "->", check_name(name))
```

Click **▶ Run**. You should see **exactly** this:

```
John -> recognised
Sarah -> recognised
Chidi -> NOT recognised
Amara -> NOT recognised
Kwame -> NOT recognised
Ngozi -> NOT recognised
```

Give a **thumbs up** 👍 when your output matches.

Now the detective question:

> **Who does this app work for? And who did it leave out?**

Every name in `known_names` happens to be a common English name. Chidi, Amara, Kwame and Ngozi are all real names of real people — but the app treats them as if they don't exist. **That is bias.** Not because the code is cruel, but because its **data (the list) was unbalanced.**

---

## 📊 Part 4: Turn a Feeling Into Evidence (The Fairness Audit)

"This seems unfair" is a *feeling*. Real AI auditors turn it into **numbers**. Let's test two groups and count how many each gets recognised.

```python
known_names = ["john", "mary", "david", "sarah", "james", "emma"]

def check_name(name):
    return name.lower() in known_names

group_a = ["John", "Mary", "David", "Sarah"]
group_b = ["Chidi", "Amara", "Kwame", "Ngozi"]

def audit(group, group_name):
    recognised = 0
    for name in group:
        if check_name(name):
            recognised = recognised + 1
    print(group_name, "recognised:", recognised, "out of", len(group))

audit(group_a, "Group A")
audit(group_b, "Group B")
```

**Output:**

```
Group A recognised: 4 out of 4
Group B recognised: 0 out of 4
```

Look at that gap. Group A: **perfect**. Group B: **completely shut out**. The feeling is now **evidence**.

> 💡 `check_name` here returns `True` or `False` directly — `name.lower() in known_names` already *is* a True/False answer, so we don't even need an `if`. Neat, right?

---

## 🔧 Part 5: Fix It — Balance the Data

Here's the good news: because the unfairness came from the **data**, we can fix it by **balancing the data**. We don't rewrite the clever logic — we just make the list represent everyone.

```python
# The FIX: a balanced list that includes every group
known_names = [
    "john", "mary", "david", "sarah", "james", "emma",
    "chidi", "amara", "kwame", "ngozi", "ama", "kofi"
]

def check_name(name):
    return name.lower() in known_names

test_names = ["John", "Sarah", "Chidi", "Amara", "Kwame", "Ngozi"]

for name in test_names:
    if check_name(name):
        print(name, "-> recognised")
    else:
        print(name, "-> NOT recognised")
```

**Output:**

```
John -> recognised
Sarah -> recognised
Chidi -> recognised
Amara -> recognised
Kwame -> recognised
Ngozi -> recognised
```

Now re-run the audit with the balanced list and you'll see:

```
Group A recognised: 4 out of 4
Group B recognised: 4 out of 4
```

**Fixed.** Same code, fairer data. That's the whole lesson in one line.

> ⚠️ Real AI is far bigger than a six-name list, so real fixes are much harder. But the *idea* is identical: **find who was left out, and put them back into the data.**

---

## 🧭 Part 6: The Fairness Mindset — 3 Questions

You won't always have the code in front of you. But you can *always* ask three questions about any AI:

| Question | Why it matters |
|---|---|
| 1. **Who might this be unfair to?** | Names the group that could be harmed |
| 2. **What data was it trained on?** | Bias almost always starts in the data |
| 3. **Who was left out?** | The missing group is usually the one it fails |

> Memorise these three. They are your detective toolkit for the rest of this term — and for life with AI.

---

## ⚠️ Common Mistakes & Misconceptions

**Misconception 1: "AI is neutral and objective — it's just maths."**

❌ Wrong: "A computer can't be unfair, it doesn't have feelings."

✅ Right: AI has no feelings — but it **reflects its training data**. If the data was unbalanced, the AI is unbalanced. Neutral maths + biased data = biased results.

---

**Misconception 2: "Bias means someone was mean on purpose."**

❌ Wrong: "Someone must have programmed it to dislike those names."

✅ Right: Usually **nobody chose to be unfair.** The name recogniser had no cruel line of code — it just had an **unbalanced list**. Most AI bias is an accident of data, which is exactly why we have to *look for it* on purpose.

---

**Mistake 3: Confusing a random error with systematic bias.**

❌ Wrong: "It got one name wrong, so it's biased."

✅ Right: One-off mistakes happen to everyone. **Bias** is when the errors keep landing on the **same group** — that's why we *count* with an audit instead of guessing.

---

## 🕵️ Class Activity: Bias Detectives

Time to work the case as a team!

1. **Case File 1 (⭐):** Run the starter recogniser. In the Zoom chat: who was left out, and what's the *pattern*? 👍 when you spot it.
2. **Case File 2 (⭐⭐):** Add the `audit()` function. Read the counts: **4/4 vs 0/4**. Your feeling is now *evidence*.
3. **Case File 3 (⭐⭐⭐):** Balance `known_names`, re-run the audit, and get **4/4 vs 4/4**.

**Detective Debrief (Zoom chat):** finish the sentence —
> "This AI was unfair because its training data ________, and we fixed it by ________."

> 💬 **Respect rule:** we describe problems with tools and *data*, never blame or joke about any group of people. We're here to make AI fairer, not to point fingers.

---

## 🌟 What's Coming Next Week?

**Week 6: AI Detectives — Ethics & Misinformation 🔍🕵️**

You've learned AI can be *unfair*. Next week: AI can also be *convincingly wrong on purpose*. We'll investigate **misinformation** — how AI can generate fake text, images, and claims that look real — and build the skills to spot it. You'll ask not just *"is this fair?"* but *"is this even true, and should this be made at all?"* It's the ethics half of your AI toolkit.

---

## 🏆 Today's Achievements

- ✅ You can explain what **bias in AI** means — systematic unfairness to a group
- ✅ You know it usually comes from **unbalanced training data**, not cruelty
- ✅ You caught a real classifier being unfair — and **measured** it with an audit
- ✅ You **fixed** it by balancing the data
- ✅ You've got the **3 fairness questions** in your detective toolkit

> *"You didn't just READ about AI bias today — you caught it, you measured it, and you fixed it. That's more than most grown-ups have ever done. Keep those three questions close. The world needs more Bias Detectives like you."*
> — BrightByte 🤖⚖️

---

## 📚 Homework: Bias Investigator

Pick **ONE** track and do it in a Trinket named **`Y2-T5-W5-BiasFairness`**.

**Track A — Investigate a real AI tool (writing).** In a comment block, describe a tool, say who it might be unfair to and why, what data it was likely trained on, who was left out, and one idea to make it fairer. 5–8 sentences, factual and respectful.

**Track B — Make a classifier fairer (code).** Show today's recogniser (or your Week 3 classifier) being unfair, balance its data, add an `audit()` that counts results per group, and comment your changes.

**Challenge tiers:**
- ⭐ Complete all required points
- ⭐⭐ Add a third group / a second real example
- ⭐⭐⭐ Explain how *unbalanced training data* caused the bias (callback to Week 2!)

**Submit:** Save, click **Share**, copy the link, paste it where your teacher asks.

---

*You came in a coder. You leave a Bias Detective. See you next week, investigators. ⚖️🔎*
