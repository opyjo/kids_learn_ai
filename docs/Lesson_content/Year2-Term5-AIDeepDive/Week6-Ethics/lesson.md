---
title: "AI Detectives: Ethics & Misinformation 🕵️🌐"
description: "Learn to spot deepfakes and AI-made misinformation, protect your privacy, and be a responsible AI citizen — then plan your end-of-term AI Investigation Report"
difficulty: "intermediate"
order_index: 6
course_slug: "year2-term-5-ai-deep-dive"
is_premium: false
requires_trinket: true
starter_code: |
  # 🕵️ Misinformation Checker — a detective's checklist
  # This tiny program just PRINTS a checklist to help you slow down
  # before you believe (or share) something online. No AI inside —
  # just good detective habits, printed neatly by Python.

  def show_checklist():
      print("=" * 34)
      print("  🕵️  IS IT REAL? — CHECKLIST")
      print("=" * 34)
      # TODO: print at least THREE questions a good detective asks.
      # Idea 1: Who made this? Do I trust the source?
      # TODO: Idea 2 — ...
      # TODO: Idea 3 — ...
      print("=" * 34)

  show_checklist()
solution_code: |
  # 🕵️ Misinformation Checker — a detective's checklist (one solution)
  # It doesn't decide FOR you — it reminds you to think before you trust.

  def show_checklist():
      print("=" * 34)
      print("  🕵️  IS IT REAL? — CHECKLIST")
      print("=" * 34)
      questions = [
          "1. Who made this? Do I trust them?",
          "2. Where else can I check it?",
          "3. Any weird bits? (hands, text, too perfect)",
          "4. Is it trying to make me angry or scared?",
          "5. What is the DATE — is it old news?",
      ]
      for q in questions:
          print(q)
      print("=" * 34)
      print("Reminder: looking real is NOT the same as BEING real. 🧠")
      print("=" * 34)

  show_checklist()
class_activities: |
  ## 🎮 Class Activity: "Real or AI?" Detective Game 🕵️

  Two rounds. First you train your detective eye — then you choose the AI you'll investigate for your end-of-term report.

  ### Round 1 — Real or AI? (⭐ / ⭐⭐)
  Your teacher describes or shows several examples one at a time — a photo, a short piece of text, a "quote", a video clip. For each one:
  1. Vote in the **Zoom chat**: type **REAL** or **AI**
  2. Then type **ONE reason** for your vote (e.g. "AI — the hands have six fingers", "not sure — I'd cross-check the source")

  There are no easy points for guessing — the **reason** is what makes you a detective. Some examples are deliberately tricky, because in real life you often *can't* be 100% sure. That's the whole lesson: when you can't tell, you **verify**, you don't just believe.

  ### Round 2 — Choose Your Investigation (⭐⭐⭐)
  Next week you build your **AI Investigation Report**. Today you pick your topic and start planning. In the Zoom chat, post:
  - **The AI system you'll investigate** (one real AI you actually know — see the topic ideas in the lesson)
  - **One thing you already know** it does
  - **One question** you still need to answer about it

  Your teacher will help you check your topic is a good fit — not too huge, not too tiny. Give a **thumbs up** once your topic is chosen! 👍

  ### 💬 Zoom-Chat Discussion
  > **When you truly can't tell if something is real or AI-made — what should you DO?**
  > (Hint: a good detective never says "it looks real, so it must be real.")
take_home_assignment: |
  ## 📚 Homework: Plan Your AI Investigation 🔍

  Next week you **build** your AI Investigation Report. This week you **plan** it — a good plan makes next week easy.

  **Step 1 — Choose your AI system.** Pick ONE real AI you know (see the topic ideas in the lesson). Not sure? Ask in the class chat.

  **Step 2 — Draft your outline in Trinket** (`Y2-T5-W6-Ethics`). Use **comments** (`#`) to answer the five report questions — even a rough sentence each is perfect for now:
  ```python
  # MY AI INVESTIGATION — OUTLINE

  # 1. MY AI SYSTEM: which AI? what does it do? who uses it?
  # 2. THE DATA: what data does it use or learn from? where from?
  # 3. HOW IT DECIDES: rules, learning, or both? how does it guess?
  # 4. WHAT COULD GO WRONG: one real risk (bias, mistakes, privacy...)
  # 5. IS IT RESPONSIBLE? your verdict + one way to make it fairer
  ```

  **Step 3 — Plan your demo.** In one comment, write which small program you'll show next week (a rule-based classifier or a chatbot from an earlier week) and what idea it will demonstrate.

  **Challenge tiers:**
  - ⭐ A topic chosen and all five questions answered in rough comments
  - ⭐⭐ Each answer is a clear full sentence, and your demo idea is chosen
  - ⭐⭐⭐ You already list a real **source** you'll use to cross-check a fact about your AI (a trusted website, a person to ask)

  **Submit:** Save your Trinket, click **Share**, copy the link, and paste it where your teacher asks. Bring this outline to Week 7 — you'll build straight from it!
ai_activities: |
  ## 🤖 Big Discussion: Being a Responsible AI Citizen 🌍

  You've spent this term learning how AI works. With that knowledge comes responsibility. BrightByte wants you to leave today thinking not just *"what can AI do?"* but *"what should WE do?"*

  **Discuss in the Zoom chat — pick any that grab you:**
  1. 🎭 A person makes a fake video of a classmate saying something they never said, "just as a joke". Is that okay? Why or why not?
  2. 🔒 An app is free, but it reads all your messages to train its AI. Would you use it? What would you want to know first?
  3. 🤥 Someone hands in an essay written entirely by an AI as their own work. What's the problem with that — and what would be a *fair* way to use AI for homework instead?
  4. 📢 You see a shocking "news photo" that might be AI-made. What do you do BEFORE sharing it?

  **BrightByte's Responsible AI Citizen code — four rules to carry for life:**
  - ✅ **Double-check** what AI tells you (remember hallucinations from Week 4 — AI can sound sure and still be wrong)
  - ✅ **Give credit** — if AI helped you, say so; never pass its work off as fully your own
  - ✅ **Don't deceive or harm** — never use AI to fool, scare, bully, or lie about people
  - ✅ **Protect privacy** — yours and other people's; think before you share data

  Keep your best thoughts — being a responsible, sceptical AI user is exactly what your **AI Investigation Report** is meant to show off!
---

# Year 2, Lesson 6: AI Detectives — Ethics & Misinformation 🕵️🌐

**Course:** AI Concepts Deep Dive
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 6 of 8

---

## 🎯 What You'll Learn Today

- What **deepfakes** and AI-generated media are — and why they can fool us
- How AI can produce convincing **misinformation** at scale, and why *"it looks real"* is not proof
- Why AI systems use **data about us**, and how to be thoughtful about **privacy**
- How to be a **responsible AI user and citizen**: double-check, give credit, don't deceive
- Practical, age-appropriate tips for **spotting AI content** (weird hands, odd text, too-perfect writing)
- The full brief for your end-of-term **AI Investigation Report** — including the exact checklist

---

## 🤖 BrightByte Puts On a Detective Hat

> *"For five weeks you've learned how AI works inside — rules, data, patterns, chatbots, and fairness. Now here's the twist: the SAME technology that recommends your videos can also make a video of someone saying things they never said. AI can write a thousand fake reviews before breakfast. This week you don't just USE AI — you INVESTIGATE it. Grab your magnifying glass, detective. Today we learn to spot the fakes, protect ourselves, and use AI honestly. This is the most grown-up lesson of the whole term."*
> — BrightByte 🕵️🤖

---

## 🎭 Part 1: Deepfakes & AI-Generated Media

A **deepfake** is a photo, video, or voice recording that an AI has **made up or altered** to look real. The AI has "seen" thousands of examples of a person's face or voice (remember training data from Week 2?) and learned the pattern well enough to **generate** brand-new footage of them — footage that never actually happened.

The same technology can create:
- 🖼️ **Images** of people or places that don't exist
- 🎥 **Videos** of real people "saying" things they never said
- 🔊 **Voices** that sound exactly like someone you know
- ✍️ **Text** — articles, reviews, messages — in any style

Here's the honest bit BrightByte wants you to hold onto: **AI-generated media can look and sound completely real.** It is designed to. So your eyes and ears alone are no longer enough to decide what's true.

### Why can it fool us?

| Reason | What's going on |
|---|---|
| It's built to look real | The AI is trained to copy real photos/voices as closely as possible |
| We trust our eyes | For all of history, "I saw it" meant "it happened" — that's changing |
| It's fast and cheap | One person can make thousands of fakes in an hour |
| It spreads before it's checked | A shocking fake gets shared long before anyone verifies it |

> 💡 **The detective's golden rule:** *looking real is NOT the same as being real.* An image being convincing tells you the AI did a good job — it tells you **nothing** about whether the event actually happened.

### 💬 Class Discussion

> **Can you think of a time a photo or video online turned out to be fake or edited?**
> Type it in the **Zoom chat** — no names of real classmates, please!

---

## 🌐 Part 2: Misinformation at the Speed of AI

**Misinformation** is false or misleading information. It has always existed — but AI has changed the **scale**. In the past, making a fake news article or a hundred fake "customer reviews" took real effort. Now an AI can generate convincing false text and images **by the thousand**, instantly.

Imagine Kwame is trying to decide which shop to trust online. If an AI has written 500 glowing five-star reviews for a shop that's actually terrible, how would Kwame know? The reviews *sound* like real people. They're detailed. They're everywhere. But not one of them is true.

That's the danger: AI makes false things **cheap, fast, and convincing**.

### Why "it looks real" isn't proof

A well-written article, a professional-looking photo, a confident voice — these used to be *signals* that something was trustworthy. AI can now fake all of them. So a detective learns to ask not *"does this look real?"* but:

- 🔎 **Who** made this, and can I trust them?
- 🔁 **Where else** can I check the same claim?
- 📅 **When** was it made — is it old news being reshared as new?
- 🎯 **Why** was it made — is someone trying to make me angry, scared, or to sell me something?

> *"Misinformation isn't new — your grandparents dealt with rumours too. What's new is the SPEED and the SCALE. AI can flood the world with convincing nonsense faster than humans can check it. That's exactly why the world needs detectives like you."*
> — BrightByte 🤖

---

## 🔒 Part 3: Privacy — AI Uses Data About YOU

Every term we come back to one truth: **AI runs on data.** And a lot of that data is **about people** — maybe about you.

Think about what you feed to AI systems every day, often without noticing:
- 🔍 What you search for and watch
- 📍 Where you are (location)
- 💬 What you type into chatbots and apps
- 🖼️ Photos of your face and your friends

None of this is automatically evil — it's how a recommender knows what videos you'll like. But a thoughtful AI citizen **pays attention** to what they share, because data can be stored, sold, or used in ways you didn't expect.

### Being thoughtful about privacy

| Habit | Why it matters |
|---|---|
| Pause before sharing personal info with an app or chatbot | Once it's out, you can't take it back |
| Don't post other people's private details | Their privacy is your responsibility too |
| Ask "why does this app need this?" | A torch app doesn't need your contacts |
| Prefer not sharing when unsure | You can always share later; you can't un-share |

> 💡 **A simple test:** before typing something into an AI, ask *"would I be okay if this appeared on a big screen in front of my whole class?"* If not, don't type it.

---

## 🧭 Part 4: Being a Responsible AI Citizen

You now know more about AI than most adults. BrightByte says: with that knowledge comes responsibility. Here is the **Responsible AI Citizen code** — four habits for life.

| Rule | What it means | Callback |
|---|---|---|
| 🔍 **Double-check AI answers** | AI can sound totally sure and still be wrong | Week 4 — *hallucinations!* |
| 🙌 **Give credit** | If AI helped you, say so — don't pass its work off as fully yours | Honesty |
| 🚫 **Don't deceive or harm** | Never use AI to fool, scare, bully, or lie about people | Ethics |
| 🔒 **Protect privacy** | Be careful with data — yours and other people's | Part 3 |

Using AI to *help* you learn, brainstorm, or check your spelling is brilliant. Using AI to *pretend* — to fake a video, cheat on work, or trick people — is not. The tool is the same; **what makes it right or wrong is how a human chooses to use it.**

> *"AI has no conscience — it just does what it's asked. YOU are the conscience. The most powerful safety feature in the whole world of AI is a thoughtful human deciding to do the right thing. That's you."*
> — BrightByte 🕵️

---

## 🔎 Part 5: Practical Tips for Spotting AI Content

You won't always be able to tell — and that's okay, because a detective **verifies** instead of guessing. But here are real clues that often give AI content away.

| Look at | Tell-tale signs of AI |
|---|---|
| ✋ **Hands & bodies** | Too many (or too few) fingers, bendy limbs, blurry teeth |
| 🔤 **Text in images** | Signs, labels, or logos that are gibberish or half-melted |
| 🖼️ **Backgrounds** | Wonky lines, patterns that don't line up, objects that merge |
| 💡 **Lighting & skin** | Skin that's *too* smooth; shadows pointing the wrong way |
| ✍️ **Written text** | Sounds generic, over-polished, repeats itself, oddly vague |
| 🔗 **The source** | No author, no date, only found in one place, "too good to be true" |

**But the number-one tip beats all of these:** ✅ **cross-check with a trusted source.** If a claim matters, look for it somewhere reliable — a known news site, an official page, a knowledgeable adult. If you can only find it in one suspicious place, treat it as unproven.

> 💡 The visual clues are getting weaker every year as AI improves. Verifying the **source** is the skill that will still work in ten years.

---

## ⚠️ Common Misconceptions to Bust

**Misconception 1: "If it looks real, it must be real."**

❌ **Myth:** A photo or video is convincing, so it definitely happened.

✅ **Truth:** AI is *designed* to make things look real. Looking real proves the AI did a good job — nothing more. Real detectives judge by the **source and the cross-check**, not by how convincing something looks.

---

**Misconception 2: "AI answers are facts because they come from a computer."**

❌ **Myth:** The chatbot said it confidently, so it's true.

✅ **Truth:** AI makes **best guesses** and can be **confidently wrong** — that's what a hallucination is (Week 4!). An AI answer is a starting point to check, never a final fact. Always verify anything that matters.

---

**Misconception 3: "Sharing a fake is harmless if I didn't make it."**

❌ **Myth:** I only forwarded it — I didn't create the lie, so it's not my fault.

✅ **Truth:** Sharing spreads misinformation just as fast as making it. A responsible AI citizen **checks before sharing**. When in doubt, don't pass it on.

---

## 🎮 Class Activity: "Real or AI?" Detective Game 🕵️

### Round 1 — Real or AI? (⭐ / ⭐⭐)
Your teacher shows or describes several examples — a photo, a short text, a "quote", a clip. For each: vote **REAL** or **AI** in the **Zoom chat**, then add **one reason**. The reason matters more than the vote! Some examples are deliberately impossible to be sure about — and that's the point: when you can't tell, you **verify**.

### Round 2 — Choose Your Investigation (⭐⭐⭐)
Next week you build your **AI Investigation Report**. Pick your topic now. In the chat, post the **AI system** you'll investigate, **one thing** you know it does, and **one question** you still need to answer. Thumbs up when your topic is chosen! 👍

### 💬 Zoom-Chat Discussion
> **When you genuinely can't tell if something is real or AI — what should you DO?** (Never: "it looks real, so it's real.")

---

## 🔍 Part 6: Your Mission Briefing — The AI Investigation Report

This is the big one. Everything this term has been building to it. **Next week (Week 7) you'll build and write your AI Investigation Report**, and at the **Week 8 Summit** you'll present it and earn your **AI Scholar Badge** 🏆.

You will become a detective for **one real AI system**: explain what it does, dig into how it works, spot what could go wrong, and give your honest verdict on whether it's responsible. Then you'll show a **small demo program** to prove you understand the ideas.

### Great topic ideas
Pick ONE real AI you actually know:
- 📺 A video recommender (which clips get suggested to you)
- 🗣️ A voice assistant
- ✍️ Autocorrect or predictive text
- 🎮 A game opponent (the computer player)
- 🖼️ A photo filter or face unlock
- 💬 A chatbot / homework helper
- 🛒 "People also bought..." shopping suggestions

Choose something **you can actually explain** — not too huge, not too tiny.

### 📋 The AI Investigation Report Checklist

Your report has **five investigation sections plus a demo and a verdict**. Answer every part:

| # | Section | What to include |
|---|---|---|
| 1 | 🔎 **My AI System** | Name it. What does it do? Who uses it, and why is it useful? |
| 2 | 📊 **The Data** | What data does it use or learn from? Where might that data come from? (Callback: Week 2) |
| 3 | ⚙️ **How It Decides** | Does it use **RULES**, **LEARNING FROM EXAMPLES**, or both? How does it make its guess/prediction? (Weeks 1 & 3) |
| 4 | ⚠️ **What Could Go Wrong** | At least ONE real risk: bias/unfairness (Week 5), mistakes/hallucinations (Week 4), privacy, or misinformation/deepfakes (Week 6) |
| 5 | ⚖️ **Is It Responsible?** | Your verdict: is this AI used responsibly? Name ONE thing that would make it fairer or safer |
| 6 | 💻 **My Demo** | A small Python program showing a piece of the idea (a rule-based classifier or a chatbot from an earlier week) + a sentence on what it shows and what it can't do |
| 7 | 🎤 **My Verdict** | 2-3 sentences: what did you learn, and would you trust this AI? Why? |

> 💡 **Detective's tip:** you already have code you can reuse for the demo! Your rule-based classifier (Week 1) or your chatbot (Week 4) are perfect starting points — you don't have to build something brand new.

### Homework starts the report
Tonight's homework is **Step 1**: choose your topic and draft the outline (comments answering sections 1-5, plus which demo you'll show). Bring it to Week 7 and you'll build straight from your plan.

---

## 🖥️ Part 7: A Light Touch of Code — The Misinformation Checker

This week is mostly thinking and planning — but here's a tiny, fun program that fits the theme. It doesn't *use* AI; it just **prints a detective's checklist** to remind you to slow down before believing something.

Open **Trinket** and name it `Y2-T5-W6-Ethics`. Here's the starter:

```python
def show_checklist():
    print("=" * 34)
    print("  🕵️  IS IT REAL? — CHECKLIST")
    print("=" * 34)
    # TODO: print at least THREE detective questions
    print("=" * 34)

show_checklist()
```

Finish it by printing at least three questions a detective asks. Here's one way:

```python
def show_checklist():
    print("=" * 34)
    print("  🕵️  IS IT REAL? — CHECKLIST")
    print("=" * 34)
    questions = [
        "1. Who made this? Do I trust them?",
        "2. Where else can I check it?",
        "3. Any weird bits? (hands, text, too perfect)",
        "4. Is it trying to make me angry or scared?",
        "5. What is the DATE — is it old news?",
    ]
    for q in questions:
        print(q)
    print("=" * 34)
    print("Reminder: looking real is NOT the same as BEING real. 🧠")
    print("=" * 34)

show_checklist()
```

**Output:**
```
==================================
  🕵️  IS IT REAL? — CHECKLIST
==================================
1. Who made this? Do I trust them?
2. Where else can I check it?
3. Any weird bits? (hands, text, too perfect)
4. Is it trying to make me angry or scared?
5. What is the DATE — is it old news?
==================================
Reminder: looking real is NOT the same as BEING real. 🧠
==================================
```

See how a `list` plus a `for` loop keeps the code tidy? Give a **thumbs up** when yours runs! 👍

---

## 🌟 What's Coming Next Week?

**Week 7: Build Your AI Investigation Report!** 🔍

Next week is a **workshop** — you'll take the outline you draft for homework and turn it into a full report, plus polish a small **demo program** (your Week 1 classifier or Week 4 chatbot). You'll investigate the data, the decisions, the risks, and give your responsible-AI verdict. Come with your topic **already chosen** and your outline drafted — that's exactly what tonight's homework gives you. Then at the **Week 8 Summit** you present it and earn the **AI Scholar Badge** 🏆!

---

## 🏆 Today's Achievements

- ✅ You know what **deepfakes** and AI-generated media are — and why they fool us
- ✅ You understand how AI spreads **misinformation** at scale, and why *"it looks real" ≠ true*
- ✅ You can protect your **privacy** and think before you share data
- ✅ You know the **Responsible AI Citizen code**: double-check, give credit, don't deceive, protect privacy
- ✅ You have practical **tips for spotting AI content** — and know that cross-checking beats them all
- ✅ You have the full brief and checklist for your **AI Investigation Report**

> *"Look at you — a real AI detective now. You can spot a fake, protect your privacy, and use AI honestly. Most adults can't do that yet! Next week you put it all together in your investigation. I could not be prouder of my detectives. Go choose a brilliant topic."*
> — BrightByte 🕵️🤖

---

## 📚 Homework: Plan Your AI Investigation 🔍

Choose your AI system and **draft your outline** in Trinket (`Y2-T5-W6-Ethics`) using comments to answer all five report questions, plus which demo you'll show:

```python
# MY AI INVESTIGATION — OUTLINE
# 1. MY AI SYSTEM: which AI? what does it do? who uses it?
# 2. THE DATA: what data does it use or learn from? where from?
# 3. HOW IT DECIDES: rules, learning, or both? how does it guess?
# 4. WHAT COULD GO WRONG: one real risk (bias, mistakes, privacy...)
# 5. IS IT RESPONSIBLE? your verdict + one way to make it fairer
# 6. MY DEMO: which program will I show? what idea does it prove?
```

**Challenge tiers:**
- ⭐ Topic chosen and all five questions answered in rough comments
- ⭐⭐ Each answer a clear full sentence, and demo idea chosen
- ⭐⭐⭐ You list a real **source** you'll use to cross-check a fact about your AI

**Submit:** Save your Trinket, click **Share**, and paste the link where your teacher asks. Bring this outline to Week 7 — you'll build straight from it!

---

*Case files ready, detective. Next week we crack it wide open. See you at the investigation! 🕵️🌐*
