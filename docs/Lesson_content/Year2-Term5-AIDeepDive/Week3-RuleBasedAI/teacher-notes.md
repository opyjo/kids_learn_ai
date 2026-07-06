# Year 2, Lesson 3: Build a Rule-Based "AI" 🤖⚙️

## Teacher's Guide

**Course:** AI Concepts Deep Dive (Year 2, Term 5)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 3 of 8

---

## 📋 Lesson Overview

### Purpose

This is a **build-along** lesson with a twist. Students construct a genuinely working rule-based spam classifier — and then, crucially, they **break it on purpose**. The lesson has three core goals:

1. **Build a real classifier** — a `classify(message)` function using a keyword list, a loop, a score, and a threshold. It must actually run and return correct labels.
2. **Discover the ceiling of rules** — deliberately feed it sarcasm, new spam words, and innocent messages so students SEE the rules fail. This is the emotional and intellectual payload of the whole lesson.
3. **Motivate machine learning honestly** — land the point that rule-based systems ARE a kind of AI, but they do not *learn*, which is why ML exists (and where the term is heading).

The "break it" moment is not a bug — it is the lesson. Do not rescue the classifier or apologise for it. The failures are the doorway to Weeks 4-8.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Define a **classifier** as something that takes an input and returns a **label**
2. Explain that a rule-based system follows **hand-written rules** and does not learn
3. Write a `classify(message)` function that lower-cases, counts keyword matches, and **returns** a label
4. Test a classifier on multiple messages using a loop
5. Give at least one concrete example of where keyword rules break (sarcasm / new words / false positive)
6. Explain, in their own words, why machine learning is needed when rules can't cover every case

### Key Success Metrics

- [ ] Every student has a running `classify()` function that returns the correct label on the test batch
- [ ] Every student produces at least one message that fools their classifier (Stage 4)
- [ ] Students can articulate one strength AND one weakness of rule-based systems
- [ ] Students leave understanding "this is AI, but it doesn't learn"

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and reactions enabled
- Trinket accounts (trinket.io) — students name today's file `Y2-T5-W3-RuleBasedAI`
- This teaching guide open during class
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test the full classifier yourself in Trinket** — run the solution code and confirm the five test messages label correctly (3 SPAM, 2 NOT SPAM)
2. **Pre-load the "break it" messages** — have the three tricky messages ready to paste (sarcasm, new-words spam, science-fair invite)
3. **Recall Weeks 1-2** — students know rules-vs-learning (W1) and features/labels/datasets (W2). Today reuses "features" (keyword matches) and "labels" (SPAM / NOT SPAM). Plan a one-line callback.
4. **Prepare the honesty framing** — rehearse the "this IS AI but it doesn't learn" line so it lands clearly and isn't muddled
5. **Have a spare "fool it" example ready** in case the class is stuck on Stage 4

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap W1-2 + what is a classifier?
⏱️  8-18 min  → Part 1-2: classifiers, features, the rules list
⏱️ 18-38 min  → Part 3-4: build classify() live + test it (build-along core)
⏱️ 38-52 min  → Part 5: BREAK IT — the three failure cases + discussion
⏱️ 52-62 min  → Common mistakes + AI discussion (rules vs learning)
⏱️ 62-75 min  → Homework + Week 4 teaser + wrap-up
```

**Flexible timing:** The build-along (Parts 3-4) and the break-it moment (Part 5) are non-negotiable. If time is tight, trim the Common Mistakes to just Mistake 3 (return) and fold case-sensitivity into the live build.

---

## 📚 Detailed Teaching Guide

### Part 1: Recap + What Is a Classifier? (8 minutes)

Open with a fast callback to the last two weeks:

> "Week 1 we split AI into rules-followers and learners. Week 2 we learned about features and labels. Today, you BUILD a rules-follower with your own hands — a real spam detector — and then you break it. Both halves matter."

Introduce the classifier idea concretely, not abstractly:

> "A classifier reads something and slaps a label on it. Email → inbox or spam. Review → happy or angry. Today: message → SPAM or NOT SPAM."

**Discussion (2 min):** "What words do spam messages use over and over?" Collect answers in the chat — this primes them for the keyword list and gives you live material.

#### Teaching Tips

- Keep this short. The energy of this lesson lives in the build and the break.
- Tie "features" back to Week 2 explicitly: our feature is *which spammy words appear*.

---

### Part 2: The Rules (5 minutes)

Show the `spam_words` list and make the honesty point early and plainly:

> "This list is the ENTIRE brain of our AI. No magic. It only knows the words WE type. Hold that thought — it's going to matter enormously in twenty minutes."

Have everyone create and name the Trinket `Y2-T5-W3-RuleBasedAI` now. Chat checkpoint: how many keywords? (8.)

---

### Part 3-4: Build `classify()` Live + Test It (20 minutes) — THE CORE

This is a **build-along**. Type each line on screen share; students type with you. Do NOT paste the whole function at once — build it line by line so they see it grow.

Build order:
1. `def classify(message):` and `text = message.lower()` — pause on WHY we lower-case
2. `score = 0` then the `for` loop and `if word in text:` — this is the counting engine
3. The threshold `if score >= 2:` with `return "SPAM"` / `return "NOT SPAM"`

**Checkpoints as you go:**
- After `.lower()`: "Why lower-case?" (so FREE matches free)
- After the return: "Notice we RETURN, we don't PRINT — why does that matter?" (so we can use the answer)

Then build the `test_messages` list and the loop. Run it. Walk through the two traces from the lesson out loud (message 1 scores 5 → SPAM; message 2 scores 0 → NOT SPAM) so students see the machine "thinking" rather than guessing.

#### Common Live Issues

| Symptom | Cause | Fix |
|---|---|---|
| Function prints `None` | Forgot `return`, used `print` inside | Return the label; call it as `print(classify(m))` |
| Everything labelled NOT SPAM | Forgot `.lower()`, or threshold too high | Add `.lower()`; confirm `>= 2` |
| `TypeError ... requires string ... not list` | Wrote `if spam_words in text` | Loop word-by-word: `for word in spam_words` |
| `IndentationError` | Loop/if body not indented | 4 spaces under each `def`, `for`, `if` |

#### Teaching Tips

- **Type slowly and narrate.** This is the skill-building heart — resist the urge to rush to the "cool" break-it part.
- Get a **thumbs up** after the run before moving on. Nobody proceeds to Part 5 without a working classifier.

---

### Part 5: BREAK IT (14 minutes) — THE PAYLOAD

Frame it as a game, then let the failures speak:

> "Our robot looks clever. Let's prove it isn't. I'm going to feed it three messages — predict the label BEFORE we run."

Paste and run the three tricky messages. For each, ask the class to predict, then reveal:

1. **Sarcasm** — "Oh wonderful, another free prize..." → SPAM (wrong; it's a grumpy human). *The robot doesn't understand sarcasm.*
2. **New words** — "You have been selected! Claim your reward voucher today" → NOT SPAM (wrong; real spam). *Spammers just use words we didn't list.*
3. **False positive** — "Come win a prize at the school science fair!" → SPAM (wrong; friendly invite). *A real message goes in the bin.*

Then run **Stage 4 of the activity**: every student writes ONE message to fool their own classifier and pastes it in chat. Celebrate the sneakiest.

Land the big idea explicitly:

> "We can't write a rule for every message humans will ever send. That's the wall. That's WHY the world invented machine learning — where the computer learns the patterns from thousands of examples instead of us typing every rule."

#### Teaching Tips

- **Let it fail visibly.** Don't fix the classifier. The failures are the lesson.
- Draw out the three distinct failure types — they are qualitatively different (unknown meaning, unknown words, over-eager rules).
- If a student "fixes" a case by adding a word, celebrate it — then immediately break it again with a new word. This viscerally shows the endless whack-a-mole of hand-written rules.

---

### Part 6: Common Mistakes + AI Discussion (10 minutes)

Run the three mistakes from the lesson, live-coding each error so students see the real messages:

1. **No `.lower()`** → `"free" in "FREE PRIZE"` is False; spam slips through
2. **List `in` string** → `TypeError: 'in <string>' requires string as left operand, not list`
3. **Forgetting `return`** → function prints, `label` becomes `None`

Then the AI discussion (`ai_activities`). This is REQUIRED for the term. Keep it tight and honest:

> "Is this really AI? Yes — rule-based systems are a real, respected kind of AI. But did it LEARN anything? No. YOU wrote every rule. It's frozen the moment you stop typing."

Pull out both columns:
- **Good at:** fast, predictable, explainable, never changes its mind, great when rules are clear (tax rules, game rules)
- **Bad at:** new words, sarcasm, context, anything nobody wrote a rule for

End on the hook question: "If you can't write a rule for every message, how could a computer learn the rules itself?" — leave it open; that's the term's journey.

---

### Part 7: Homework + Wrap-Up (13 minutes)

#### Homework (5 minutes)

Walk through both paths. Path A (upgrade spam list) is the safe route; Path B (build a new classifier — sentiment / question / mood) is for the confident. Stress the shared requirements: a `classify()` that **returns**, 5+ test messages in a loop, and at least one message that breaks it (with a comment).

> "⭐ upgrade the list. ⭐⭐ build a whole new classifier. ⭐⭐⭐ give it THREE labels. Every tier counts as done."

Paste submission instructions and the due date in the chat.

#### Week 4 Teaser (3 minutes)

> "Next week: How Chatbots & LLMs Work. You'll build a keyword chatbot — the SAME matching idea as today — and then see how real LLMs are different. Your classifier was rules. Next week you meet something that predicts."

#### Wrap-Up (2 minutes)

> "You built real AI today, and then you out-smarted it. That's exactly how every machine-learning engineer's story begins. Save your Trinket — see you next week!"

Stay on 2-3 minutes for questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Built a `classify()` function that returns (not prints) a label
- [ ] Used `.lower()` and understood why
- [ ] Ran the test loop and got the correct 3-SPAM / 2-NOT-SPAM split
- [ ] Produced a message that fools the classifier (Stage 4)

**Conceptual Understanding:**
- [ ] Can name one strength and one weakness of rule-based systems
- [ ] Can explain "this is AI but it doesn't learn"
- [ ] Connects the failure cases to the need for machine learning

### Students to Watch

**Need Extra Support:**
- Function returns `None` or always one label — usually a `return` or `.lower()` issue; pair-fix via private chat
- Struggling to see WHY rules fail — walk them through the sarcasm example slowly and personally

**Ready for More Challenge:**
- Finished early — point them at Path B homework (a three-label classifier) and challenge them to break a classmate's classifier in chat

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Whole class labels everything NOT SPAM | Almost always missing `.lower()` or threshold set too high — check together on screen share |
| `TypeError` about list in string | Student wrote `if spam_words in text`; show the word-by-word loop |
| Students think the classifier is "broken/bad" | Reframe: it's working perfectly — it's the RULE APPROACH that has limits. That's the whole point. |
| Class races ahead to Part 5 | Hold the line — no break-it until everyone has a green thumbs-up on the working classifier |
| Nobody can fool the classifier in Stage 4 | Offer the scaffold: "Try a nice message that happens to use two spammy words" or "real spam using words NOT on the list" |
| Trinket login trouble | Same playbook as always: reset via private chat, spare account, repl.it backup |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept landing:** did students grasp "AI that doesn't learn"? This is the linchpin for the rest of the term.
- **Build confidence:** who needed help with the function (return/loop/indent)? Functions are assumed knowledge here.
- **Break-it engagement:** whose fooling messages were cleverest? Save 1-2 as examples for the Week 7 Investigation Report.
- **Homework path split:** how many chose Path B (new classifier)? A good signal of who's ready to stretch.

---

## 💭 Remember

**The build teaches Python. The break teaches AI.**

Plenty of students will finish with a working classifier and feel accomplished — good. But the students who leave *understanding why their working program still isn't enough* are the ones who will truly get machine learning when it arrives. Protect the "break it" time. The failure is the feature.

**You've got this!** 🤖⚙️

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
