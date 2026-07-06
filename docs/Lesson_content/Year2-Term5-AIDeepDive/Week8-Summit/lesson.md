---
title: "AI Summit Showcase & AI Scholar Badge 🔍🏅"
description: "Term 5 finale — present your AI Investigation at the class AI Summit, debate a big AI question, ace a quiz on AI concepts, and earn your AI Scholar Badge"
difficulty: "intermediate"
order_index: 8
course_slug: "year2-term-5-ai-deep-dive"
is_premium: false
requires_trinket: true
starter_code: |
  # ✅ AI SUMMIT — PRESENTATION-READY CHECKLIST
  # Before you present your AI Investigation, tick these off in your head:
  #
  # [ ] I can say WHAT the AI system is in one sentence
  # [ ] I can explain the DATA it learns from (where does it come from?)
  # [ ] I can explain HOW it decides (rules vs learning; features -> prediction)
  # [ ] I can name one RISK or FAIRNESS concern (bias? hallucination? privacy?)
  # [ ] My printed report is ready to show on camera
  # [ ] My demo program RUNS with no red errors
  # [ ] I can run my demo in under a minute
  # [ ] I have ONE question ready, in case my audience is shy
  #
  # Open your demo Trinket now and run it once, top to bottom.
  # Every box ticked in your head? You're ready for the AI Summit! 🎤

  print("My AI Investigation is Summit-ready! 🔍🏅")
solution_code: |
  # 🏅 AI SCHOLAR — QUIZ YOURSELF!
  # A tiny celebration program that tests what YOU learned about AI this term.
  # It uses a LIST of DICTIONARIES -- the exact data structures from Term 4!

  questions = [
      {
          "q": "Does an AI that LEARNS get its answers from human-written rules, or from patterns in examples?",
          "answer": "examples",
      },
      {
          "q": "In machine learning, what do we call the correct answers we train on? (features or labels)",
          "answer": "labels",
      },
      {
          "q": "A large language model (like a chatbot) mainly predicts the next ____?",
          "answer": "word",
      },
      {
          "q": "When an AI confidently states something that is simply false, we call it a ____?",
          "answer": "hallucination",
      },
      {
          "q": "If the training data is unfair or one-sided, the AI's decisions become ____?",
          "answer": "biased",
      },
  ]

  print("=" * 44)
  print(f"{'AI SCHOLAR -- QUIZ YOURSELF! 🧠':^44}")
  print("=" * 44)

  name = input("Your name, AI Scholar? ")
  score = 0

  for item in questions:
      print()
      print(item["q"])
      reply = input("> ").strip().lower()
      if item["answer"] in reply:
          print("Correct! ✅")
          score += 1
      else:
          print(f"Not quite -- the answer was: {item['answer']}")

  print()
  print("=" * 44)
  print(f"{name}, you scored {score}/{len(questions)}! 🎉")
  percent = score / len(questions) * 100
  print(f"That's {percent:.1f}% -- a true AI Scholar. 🏅")
  print("=" * 44)
class_activities: |
  ## 🎮 Class Activity: The AI Summit 🔍🎤

  Today is celebration day! Every scholar presents the **AI Investigation** they built this term, we hold a proper debate, and we award the **AI Scholar Badge**.

  ### Part A — Presentation Pit-Stop (⭐)
  Open your demo program and run it once, top to bottom. Tick off the presentation-ready checklist in the starter code. Have your printed report ready on camera. No new work today — just make it shine.

  ### Part B — Your AI Summit Talk (⭐⭐)
  When it's your turn (about 2 minutes):
  1. **Share your screen** on Zoom
  2. **Name the AI** you investigated in one sentence
  3. **The data** — what examples does it learn from, and where do they come from?
  4. **How it decides** — rules or learning? features → prediction?
  5. **A risk** — one fairness, bias, privacy, or accuracy concern
  6. **Run your demo** program live
  7. **Take one question** from the audience

  ### Part C — Peer Feedback: Two Stars and a Wish (⭐⭐⭐)
  While each scholar presents, the class reacts in the **Zoom chat**:
  - Drop a 🔥 when you hear a sharp insight
  - Give **"Two Stars and a Wish"**: two things you liked ⭐⭐ and one kind idea 💡

  ### Part D — The Great AI Debate 🗣️
  A short, respectful class debate on a big AI question (e.g. *"Should AI be allowed to mark homework?"*). Two sides, evidence, and a golden rule: challenge the idea, never the person.

  ### Part E — Term 5 Quiz + Badge Ceremony 🏅
  A fun quiz on AI **concepts** (not just code), then we award every scholar the **AI Scholar Badge**. 🎉
take_home_assignment: |
  ## 📚 Homework: Your AI Scholar Keepsake 🏅

  Choose ONE (or do both if you're buzzing!):

  ### Option A — AI Scholar Certificate (recommended)
  Write an **"AI Scholar Certificate"** program in Trinket that prints YOU a certificate using f-strings.

  **Requirements:**
  1. Ask the user their name with `input()`
  2. Use at least **three f-strings**
  3. Include one number formatted with `:.2f` (e.g. weeks completed, or a score)
  4. Use `"=" * 44` (or similar) for a neat border
  5. List **two things about AI** you now understand
  6. End with a proud message and an emoji 🏅

  *(See today's solution code for a "quiz-yourself" example you can learn from!)*

  ### Option B — The Most Important Thing I Learned
  Write a short piece (6–8 sentences) on **the single most important thing you learned about AI this term**. Was it that AI learns from examples? That biased data makes biased AI? That chatbots can hallucinate and must be checked? Explain it clearly enough that a Year 1 student would understand.

  **Also (optional, 2 min):** peek at the Term 6 preview below and write down one thing you'd want your own AI assistant to help you with.

  **Submit:** Save your Trinket (`Y2-T5-W8-Summit`), click **Share**, copy the link (and paste your written piece if you chose Option B), and send it wherever your teacher asks.
ai_activities: |
  ## 🤖 Class Discussion: You Are Now a Thoughtful AI Citizen

  This term you didn't just *use* AI — you looked **inside** it. You know it learns from examples, that its data can carry bias, that a chatbot predicts the next word and can confidently be wrong. That knowledge changes how you'll use AI for the rest of your life.

  **Discuss in the Zoom chat:**
  1. 🧠 What is ONE thing you'll now do differently when an AI gives you an answer? (Verify it? Ask where its data came from? Notice bias?)
  2. 🤝 If a friend said *"the AI is always right, it's a computer"* — what would you tell them now?

  ### 🚀 Next Term You BUILD One
  Here's the exciting part: in **Term 6 — Working with APIs** you stop investigating other people's AI and start building your **own AI-powered assistant**. Everything you learned this term — how models decide, how they go wrong, how to use them responsibly — is exactly what makes someone build a *good* one.

  You became a thoughtful AI citizen this term. Next term, you become an AI **maker**. 🤖🔨
---

# Year 2, Lesson 8: AI Summit Showcase & AI Scholar Badge 🔍🏅

**Course:** AI Concepts Deep Dive
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 8 of 8

---

## 🎯 What You'll Do Today

- **Polish** your AI Investigation so it's Summit-ready — report in hand, demo running
- **Present** at the class **AI Summit**: what the AI is, its data, how it decides, and its risks, then run your demo
- **Cheer on** your classmates and give kind, useful feedback
- **Debate** a big AI question respectfully, using real reasons
- **Ace** a fun quiz on AI **concepts** — the ideas, not just the code
- **Earn** your **AI Scholar Badge** 🏅
- **Reflect** on your biggest AI "aha" moment
- **Peek ahead** at Term 6, where you'll BUILD your own AI-powered assistant

---

## 🤖 BrightByte Has Something to Say...

> *"Look at what you became. Eight weeks ago, AI was a bit of magic — something that just 'knew' things. Now? You know it learns from examples. You know its data can be biased. You know a chatbot is predicting the next word and can confidently make things up. You investigated a real AI system like a proper scientist and wrote it up. That is not 'using AI' — that is UNDERSTANDING AI. Today you present it, you defend your thinking in a debate, and you earn the badge you've more than earned: AI Scholar. I am so proud of you. 🏅"*
> — BrightByte 🤖💛

---

## 🔍 Part 1: Presentation Pit-Stop — Make It Summit-Ready

Before you present anything, let's make sure your investigation shines. **No new research today** — you're just polishing work you already did.

Open your demo Trinket, run it once top to bottom, then check every box:

| ✅ Check | What "good" looks like |
|---|---|
| **One-sentence summary** | You can say what the AI *is* in a single clear sentence |
| **The data** | You can explain what examples it learns from, and where they come from |
| **How it decides** | Rules or learning? You can say which, and mention features → prediction |
| **A risk** | You can name one real concern: bias, hallucination, privacy, or accuracy |
| **Report ready** | Your printed report is nearby and readable on camera |
| **Demo runs** | Click ▶ Run — no red error messages |
| **Demo is short** | You can run it in under a minute |
| **Backup question** | You have one question ready in case the audience is shy |

> 💡 **Polish, don't rebuild.** If your demo has a red error, patch it now — but don't start a whole new program five minutes before your talk. A short demo that *works* beats a fancy one that *crashes*.

**Reminder of your Investigation toolkit** (you already know all of this!):

```python
# The four questions every AI investigation answers:
# 1. WHAT is it?     -> "It recommends videos to watch next."
# 2. Its DATA?       -> "It learns from what millions of people clicked."
# 3. How it DECIDES? -> "Learning, not rules: it predicts what you'll watch."
# 4. Its RISKS?      -> "It can trap you in a bubble of similar videos."
```

When every box is ticked, drop a ✅ in the Zoom chat. You're ready for the Summit!

---

## 🎤 Part 2: The AI Summit — How to Present

This is your moment. Here's the simple, 2-minute format every scholar follows:

### The 6-Step Summit Talk

1. **📢 Introduce it** — "Hi, I'm Amara. I investigated YouTube's recommendation AI."
2. **🧠 What it is** — one clear sentence about what the AI does
3. **📊 Its data** — what examples it learns from, and where those come from
4. **⚙️ How it decides** — rules or learning? features → prediction?
5. **⚠️ A risk** — one honest concern about bias, fairness, privacy, or accuracy
6. **▶ Run your demo + 🙋 take one question** — show your program working, then answer one question from a classmate

### Summit Confidence Tips

- **You're the expert on your AI.** You investigated it for weeks — nobody in the room knows it better.
- **Nervous? That's normal.** Take a breath, read your one-sentence summary out loud, then keep going.
- **Demo breaks live?** Say *"ooh, a live bug!"* and stay cool — real scientists hit surprises in front of people all the time.
- **Keep it short.** Two minutes is plenty. Share your best insight, don't read the whole report.

> *"You don't have to be perfect. You just have to share what you found and be proud of it. The bravest thing a scholar does is present their work — and you're all doing it today."*
> — BrightByte 🤖

---

## 💬 Part 3: Cheering Each Other On — Peer Feedback

While each scholar presents, the rest of the class makes them feel like a star. We use the **Zoom chat**:

### Drop a 🔥
Hear a sharp insight? A clever demo, a fair-minded point about risk, a surprising fact about the data? Drop a 🔥 right away.

### "Two Stars and a Wish" ⭐⭐💡
When someone finishes, give kind, useful feedback:

- ⭐ **Star 1:** something you liked — *"Great point that the data comes from users' clicks!"*
- ⭐ **Star 2:** another thing — *"Your demo showed the bias really clearly."*
- 💡 **A Wish:** one kind idea — *"Maybe say how the AI could be made fairer?"*

> **Golden rule of feedback:** be **kind, specific, and helpful**. "It's good" isn't feedback. "I liked how you explained where the training data comes from" — *that's* feedback. 💛

### Example feedback in the chat

```
Kofi's summit talk 🔥🔥
⭐ Loved that you explained it's LEARNING, not rules
⭐ Your risk about privacy was really honest
💡 Wish: maybe show one example the AI gets wrong?
```

---

## 🗣️ Part 4: The Great AI Debate

Time to think out loud together. We'll take one big, age-appropriate AI question and debate it — respectfully.

### Today's motion

> **"AI should be allowed to mark homework."**

*(Your teacher may pick another, like "AI should never be allowed to decide who gets a job" or "Schools should teach every pupil how AI works.")*

### How our debate works

1. **Two sides** — some scholars argue **FOR**, some argue **AGAINST**. Your teacher will split the class (you might have to argue a side you don't personally agree with — that's a great brain workout!).
2. **Give reasons, not just opinions** — back up each point. *"AI marking is fast and consistent"* is a reason. *"I just don't like it"* is not.
3. **Use what you learned** — bring in bias, training data, hallucinations, fairness, or the need to verify AI answers.
4. **One golden rule:** **challenge the idea, never the person.** We disagree with points, kindly.

### Sentence starters to help you

- *"One strong reason FOR is… because…"*
- *"I disagree, because the training data might…"*
- *"That's a fair point, but what about bias when…"*
- *"To be fair to the other side, they're right that… however…"*

> *"A good debate isn't about winning — it's about thinking harder. The best scholars can argue BOTH sides of an AI question. That's how you spot what's really true."*
> — BrightByte 🤖

---

## 🧠 Part 5: The Term 5 Quiz — AI Concepts! 🎯

Time for a fun, fast quiz on the big IDEAS of AI — not the code, the *concepts*. Your teacher reads each question; **race to type your answer in the Zoom chat!** No pressure — it's a celebration. 🎉

**Answer these yourself first, then reveal the key at the bottom.**

1. There are two ways to make a computer "smart": a human writes every `if`/`else` **rule**, OR the machine finds patterns in examples. Which one do we call **learning**?

2. Machine learning has two big stages. In the **training** stage the model studies examples; in the **prediction** stage it makes a guess about something new. Which stage happens **first**?

3. In a table of animals, one column is "number of legs" and another column is "cat / dog / bird". Which column holds the **features**, and which holds the **labels**?

4. What is the **main cause** of bias in an AI system — the computer being mean on purpose, or the **training data** being unfair or one-sided?

5. A large language model (an LLM, like a chatbot) works by repeatedly predicting the next ____. Fill in the blank.

6. When a chatbot confidently states something that is completely **made up or false**, what is the special word for that?

7. A **deepfake** is a fake video or audio made by AI to look and sound real. True or false: you can always trust a video just because it looks realistic?

8. Give **one reason** why you should always **verify** (double-check) an important answer an AI gives you.

9. True or false: because an AI "recognises" a cat in a photo, it *understands* what a cat is the way a human does.

10. An AI is only ever shown photos of yellow and black plantains during training. It's then shown a **green** one. Why might it guess wrong — and whose "fault" is that, really?

11. Your keyword chatbot from earlier this term replies based on words it spots in your message. Is that chatbot working by **rules** or by **learning from examples**?

12. **The big one!** A friend says: *"The AI said it, so it must be true."* Using what you learned this term, give **one** thing that could be wrong with that statement.

<details>
<summary>🔑 Click for the Answer Key</summary>

1. **Learning from examples** (also called machine learning). Hand-written `if`/`else` is a **rule-based** system — the human, not the machine, provides the intelligence.
2. **Training happens first.** The model must study examples *before* it can make useful predictions on new things.
3. **"Number of legs" is a feature** (an input clue); **"cat / dog / bird" is the label** (the correct answer we want it to learn). Features go in, a label comes out.
4. **The training data being unfair or one-sided.** Computers aren't mean on purpose — bias comes from biased examples (or from *missing* examples).
5. **Word** (or "token"). An LLM predicts the next word again and again to build a sentence — it is a very clever autocomplete, not a mind.
6. **A hallucination.** The AI isn't lying on purpose; it produced a confident-sounding guess that happens to be false.
7. **False.** Deepfakes can look and sound completely real, so "it looks real" is no longer proof that something is real.
8. **Any one of:** AI can hallucinate (make things up); its training data may be out of date or biased; it predicts what *sounds* right rather than what *is* right; it has no real understanding. Always check important answers against a trusted source.
9. **False.** The AI found a pattern of pixels that matched the label "cat" in its training — it doesn't *understand* cats the way you do; it makes a best-guess match.
10. It might guess wrong because it **never saw a green plantain** in training — you can't recognise a pattern you were never shown. The "fault" is with the **training data** (the examples chosen), not the machine.
11. **Rules.** A keyword chatbot follows `if`/`else` rules a human wrote ("if the message contains 'hello', reply…"). It doesn't learn — it matches keywords.
12. **Any one of:** the AI may have hallucinated; it may have learned from biased or outdated data; it predicts what *sounds* likely, not what's *true*; it doesn't truly understand. The wise move is to **verify** important claims with a trusted source.

</details>

> **Scoring the game:** first correct answer in the chat = 🏆, but everyone who answers gets a 👏. It's about celebrating what you *understand*, not winning!

---

## 🏅 Part 6: The AI Scholar Badge Ceremony

This is the big one. Term 5 awards the **AI Scholar Badge** — and today you earn it.

This badge doesn't say "you can use AI." Lots of people can push a button. This badge says something rarer:

> 🏅 **AI Scholar** — *"I understand how AI really works, where it goes wrong, and how to use it responsibly."*

**How the ceremony works:**
- Your teacher will call each scholar's name
- The class gives a 🎉 / 👏 / 🔥 in the chat as each name is read
- Say (or type) the **AI Scholar pledge** together:

> *"I am an AI Scholar. I know AI learns from examples. I know its data can be biased. I know it can be confidently wrong — so I will always think, question, and verify."*

You didn't just pass a term. You became the kind of person the world actually needs: someone who understands these powerful tools *and* uses them wisely. Wear the badge with pride. 🏅

---

## ✨ Part 7: Reflection — Your Biggest "Aha!"

Take a moment. Eight weeks ago, AI probably felt like magic. Now you can explain what's going on under the hood.

**Share in the Zoom chat:**

- 💡 **My biggest AI "aha!" moment was…** *(the idea that changed how you see AI — bias? hallucinations? that it just predicts the next word?)*
- 😲 **The thing that surprised me most was…** *(what you didn't expect to be true)*

Reading each other's reflections reminds us: **everyone found a different idea eye-opening — and together we understand the whole picture.** 💛

> *"The 'aha' moment you just shared? That's the moment AI stopped being magic and started being something you understand. You can never un-know it — and that makes you safer, smarter, and ready to build."*
> — BrightByte 🤖

---

## 🌟 What's Coming Next Term

You've finished **Term 5 of 8** in Year 2. Here's the whole adventure:

| Term | What You'll Master | What You'll Build |
|---|---|---|
| 1 | Python Accelerated ✅ | 🧮 Smart Calculator |
| 2 | Loops & Logic Mastery ✅ | 🕹️ Arcade Game Collection |
| 3 | Functions ✅ | 🗺️ Text Adventure Engine |
| 4 | Data Structures ✅ | 📇 Contact Manager |
| 5 | AI Concepts Deep Dive ✅ *(done!)* | 🔍 AI Investigation Report |
| **6** | **Working with APIs** | **🤖 AI-Powered Assistant** |
| 7 | Data & Visualization | 📊 Data Story Project |
| 8 | Capstone & Portfolio | 🎓 Your Own Big Project! |

### 🤖 Next Up: Term 6 — Working with APIs

You *investigated* other people's AI this term. Next term, you **build your own**:

- 🔌 You'll learn about **APIs** — the way programs talk to other programs and services over the internet
- 🤖 You'll build a real **AI-Powered Assistant** — a program that actually answers, helps, and responds
- 🧠 And everything you learned this term — how AI decides, how it goes wrong, how to use it responsibly — is exactly what makes someone build a *good, safe* assistant

> *"This term you learned to see inside AI. Next term you get to CREATE it. You'll connect your Python to real AI power and build an assistant that's yours. And because you're an AI Scholar now, you'll build one that's honest and fair. I can't wait. 🤖🔨"*
> — BrightByte 🤖

---

## 🏆 Term 5 Achievements — Look How Far You Came!

Over 8 weeks, you learned and mastered:

- ✅ **Week 1:** How machines really learn — human **rules** vs **learning from examples**
- ✅ **Week 2:** **Training data** — features (the clues) and labels (the answers)
- ✅ **Week 3:** Built a **rule-based classifier** that sorts things using your own rules
- ✅ **Week 4:** Built a **keyword chatbot** that replies to what it spots in a message
- ✅ **Week 5:** **Bias & fairness** — how unfair data makes unfair AI
- ✅ **Week 6:** **Ethics & misinformation** — LLMs predict the next word, can hallucinate, and deepfakes fool the eye
- ✅ **Week 7:** Researched, wrote, and coded your **AI Investigation Report** + demo
- ✅ **Week 8:** Presented at the **AI Summit**, debated, aced the quiz, and earned the **AI Scholar Badge** 🏅

**You now understand how AI really works — and how to use it wisely. That's what makes you an AI Scholar. 🔍🏅**

---

## 🎉 A Final Word from BrightByte

> *"AI Concepts Deep Dive: COMPLETE. You didn't just learn to code this term — you learned to *think* about the most powerful technology of your lifetime. You can explain it, question it, and use it responsibly. That is a genuine superpower. Rest up, wear your AI Scholar Badge proudly, and get ready for Term 6, where you stop investigating AI and start BUILDING it. Onwards, Scholar! 🚀🏅"*
> — BrightByte 🤖💛

---

## 📚 Homework: Your AI Scholar Keepsake 🏅

Choose ONE (or both if you're buzzing!):

### Option A — AI Scholar Certificate (recommended)
Write an **"AI Scholar Certificate"** program in Trinket that prints YOU a certificate using f-strings.

**Requirements:**
1. Ask the user their name with `input()`
2. Use at least **three f-strings**
3. Include one number formatted with `:.2f` (e.g. weeks completed, or a score)
4. Use `"=" * 44` (or similar) for a neat border
5. List **two things about AI** you now understand
6. End with a proud message and an emoji 🏅

*(See today's solution code for a "quiz-yourself" example you can learn from!)*

### Option B — The Most Important Thing I Learned
Write a short piece (6–8 sentences) on **the single most important thing you learned about AI this term**. Explain it clearly enough that a Year 1 student would understand.

**Also (optional, 2 min):** peek at the Term 6 preview above and write down one thing you'd want your own AI assistant to help you with.

**Submit:** Save your Trinket (`Y2-T5-W8-Summit`), click **Share**, copy the link (and paste your written piece if you chose Option B), and send it wherever your teacher asks.

---

*You became an AI Scholar this term. You understand the machines that are shaping your world — and next term, you'll build one of your own. Take a bow. See you in Term 6! 🔍🏅🚀*
