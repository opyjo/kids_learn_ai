# Year 2, Lesson 2: Training Data, Features & Labels 📊🏷️

## Teacher's Guide

**Course:** AI Concepts Deep Dive (Year 2, Term 5)
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 5 of 8 | **Week:** 2 of 8

---

## 📋 Lesson Overview

### Purpose

Last week students learned the *idea* that some AI learns from examples rather than hand-written rules. This week we make that abstract idea concrete by answering the question "what ARE those examples?" The answer — a table of features with a label column — is the conceptual backbone of the entire term, and the Python representation (a list of dicts) is the exact structure they'll classify with next week.

The lesson has three core goals:

1. **Cement the feature vs label distinction** — this single idea underpins Weeks 3-7. If students leave able to point at a clue and call it a feature, and at the answer and call it a label, the lesson has succeeded.
2. **Connect concept to code** — a dataset is not mysterious; it's a list of dicts they already know how to build. This "you already have the tool" moment is a big confidence win.
3. **Plant the data-quality seed** — "garbage in, garbage out" and the idea of unbalanced data set up Week 5 (Bias & Fairness) without needing the vocabulary yet.

This is a **concept-heavy** lesson with **small** Python demos. Resist turning it into a coding marathon — the code exists to illuminate the idea, not the other way round.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Define a dataset as a table of examples (rows) with features (columns) and a label
2. Correctly classify any given column as either a feature or the label
3. Represent a small dataset in Python as a list of dicts, each with features + a `"label"` key
4. Loop through a dataset to print it and count examples with `len()`
5. Predict a label for a new example by hand, using its features
6. Explain "garbage in, garbage out" and give one example of poor data (too few / wrong labels / unbalanced)

### Key Success Metrics

- [ ] Every student can point to a feature and a label when shown a table
- [ ] Every student builds and runs a list-of-dicts dataset in Trinket
- [ ] Most students contribute an example to the class "Build a Dataset" activity
- [ ] Students give at least one reason data quality matters

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom with screen share and reactions enabled
- Students' Trinket accounts; the starter code loaded
- The shared screen ready to collect the class fruit dataset live
- This teaching guide open during class
- Class WhatsApp group or email thread for Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom and Trinket** — audio, video, screen share, code runs
2. **Pre-build a blank dataset skeleton** on your screen so you can drop student fruit examples into a list of dicts live (you'll type fast — practise once)
3. **Have the animal table ready** to screen-share; it's the spine of Parts 1-5
4. **Prepare 2-3 "mystery" examples** for the classify-by-hand moment (e.g. 4 legs/fur/meow → cat; 2 legs/no fur/tweet → bird)
5. **Rehearse the three data-quality failure modes** with a real-world example each (too few, wrong labels, unbalanced) — students remember stories, not definitions
6. **Recall last week's hook** — "learns from examples" — so you can open with a callback

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-8 min   → Recap Week 1 + "where do examples come from?" AI discussion
⏱️  8-20 min  → Part 1 & 2: What is a dataset? Features vs labels
⏱️ 20-35 min  → Part 3 & 4: Dataset in Python (list of dicts) + asking questions
⏱️ 35-45 min  → Part 5: Classify by hand
⏱️ 45-58 min  → Class Activity: Build a Dataset (fruits)
⏱️ 58-68 min  → Part 6: Garbage in, garbage out + common mistakes
⏱️ 68-75 min  → Homework + Week 3 teaser + wrap-up
```

**Flexible timing:** the feature/label idea (Part 2) is non-negotiable — protect it. If time runs short, trim Part 4 (counting) and shorten the activity to a class-built dataset without individual Trinket builds.

---

## 📚 Detailed Teaching Guide

### Part 1 & 2: What Is a Dataset? + Features vs Labels (12 minutes)

Open with a callback:

> "Last week: some AI doesn't follow rules a human wrote — it learns from EXAMPLES. Today the big question — what does an example actually look like? Spoiler: it's a table."

Screen-share the animal table. Read one row aloud as a sentence: *"4 legs, has fur, says woof — dog."* Do this for two rows, then ask the class to read the third in the chat.

Now introduce the vocabulary with the quiz-card analogy (front = features/clues, back = label/answer). This analogy does more work than any definition — use it repeatedly all lesson.

**The check for understanding that matters most:** point at columns and ask "feature or label?" Do several quick rounds in the chat. Do not move on until this is fast and confident — everything downstream depends on it.

Run the chat discussion ("name two features for apple vs banana") to make them generate features themselves, not just recognise yours.

#### Teaching Tips
- **Boolean values** (`True`/`False`) appear in the data — a quick reminder that these are Python's yes/no values is worth 20 seconds.
- Keep insisting the label is "just the answer we're trying to work out" — students love to argue the sound *is* the answer. It isn't; it's a clue.

---

### Part 3 & 4: A Dataset in Python (15 minutes)

This is the "you already have the tool" moment. Frame it big:

> "You built lists of dicts in Term 4 for a Contact Manager. Same structure — I'm just going to call one dict an EXAMPLE and add a key called label. That's it. That's a dataset."

Live-code the single dict first, then stack into the list. Run the loop and let students see the four output lines match the table exactly. Have them reproduce it in Trinket and thumbs-up.

Then Part 4 — counting. The key teaching line: **a machine can only ever predict a label it saw in training.** Ask: "Could this machine ever guess 'fish'?" (No — never in the data.) This lands the point that the label column defines the entire universe of possible answers.

#### Teaching Tips
- **Watch the dict-key trap** — students may forget quotes on string keys/values or forget the `"label"` key entirely. Circulate via shared screens.
- Don't demand aligned columns — the sentence-style print keeps output easy to trace and avoids f-string padding they haven't met.

---

### Part 5: Classify By Hand (10 minutes)

Show the `mystery` dict (features only). Ask everyone to type their prediction in the chat with ONE word of reasoning. Reveal there's no marking — this is exactly what a classifier does.

The crucial follow-up question: *"HOW did you decide?"* Guide them to: "I compared it to examples I'd already seen." Then: "So what happens if you'd only ever seen ONE example?" This bridges perfectly into Part 6.

Run a second mystery if the class is quick — variety cements the skill.

#### Teaching Tips
- Celebrate disagreements. If two students predict differently, that's a gift: "Interesting — you two saw different clues as most important. Real AI faces this too."

---

### Class Activity: Build a Dataset (13 minutes)

The centrepiece hands-on moment. Run it in four steps (see the lesson's activities panel):

1. **Agree features as a class** (colour, shape, size) — keep it to three.
2. **Collect examples** — each student drops one fruit in the chat as `feature=…, feature=… -> label`. You type them into a list of dicts on the shared screen in real time. This models data collection beautifully.
3. **Store & print** — students build the fruits list in their own Trinket and run the loop. Thumbs-up when the table prints.
4. **Predict by hand** — read a new fruit's features; class predicts; discuss which clue mattered and whether more examples would help.

#### Teaching Tips
- **Keep features consistent.** If one student's fruit has different keys, use it as a teaching moment: "The machine needs every example to have the SAME features — that's why we agreed them first."
- **Deliberately let the class data be a bit unbalanced** (e.g. lots of round fruits) so Part 6's imbalance point has a live example to point back to.

---

### Part 6: Garbage In, Garbage Out + Common Mistakes (10 minutes)

Teach the three failure modes as short stories: too few examples, wrong labels (a mislabelled cat), unbalanced data (run the 3-dogs-1-cat demo — the `{'dog': 3, 'cat': 1}` output makes it vivid). Land the golden rule: **better data beats more data.**

Then run the three common mistakes, especially:
- **Feature vs label confusion** — the #1 misconception; re-test with a quick chat round.
- **"More data is always better"** — challenge it directly; students arrive believing it.

Explicitly signpost Week 5: "This imbalance — good at dogs, rubbish at cats — has a name we'll meet later: bias. You spotted the seed of it today."

---

### Homework + Wrap-Up (7 minutes)

Walk through the homework: a 5+ example labelled dataset on a topic they love, printed as a table, with a comment naming features vs label. Point out the tiers (⭐ base, ⭐⭐ adds `len()`, ⭐⭐⭐ adds an unlabelled example + a predicted label with reasoning).

Tease Week 3:

> "Today YOU classified the mystery animal by hand. Next week you hand that job to Python — you'll write rules with `if`/`elif` that read the features and predict the label automatically. Your first real classifier."

Remind them to save as `Y2-T5-W2-TrainingData`. Stay on 2-3 minutes for questions.

---

## ❓ Anticipated Student Questions

Have quick answers ready — these come up most years:

- **"Is the label always a word?"** No — a label can be a word (`dog`), a category, or even a number. For now we use words because they're easy to read. The key point is it's the *answer*, not a clue.
- **"Can one example have two labels?"** Not in our simple setup — each example gets exactly one answer. (Multi-label data exists, but it's well beyond this term; don't open that door.)
- **"How much data does real AI use?"** Often millions of examples — but remind them of the golden rule: quality and balance matter more than raw quantity.
- **"Where do the real labels come from?"** Usually PEOPLE label the data by hand (or it's collected from things people already tagged, like photo captions). This connects straight to the AI discussion.
- **"What if two examples have the same features but different labels?"** Great question — it means the features aren't enough to tell them apart, and the machine will be confused. A perfect motivation for choosing GOOD features.

Use these to reward curiosity, but park anything heading toward algorithms/maths — this term stays at the level of clues and answers.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Conceptual understanding (the priority this week):**
- [ ] Correctly labels columns as feature vs label on demand
- [ ] Explains that the label is the answer we're predicting
- [ ] Can name a reason data quality matters (too few / wrong / unbalanced)

**Technical skills:**
- [ ] Built a list of dicts with a `"label"` key
- [ ] Ran a loop over the dataset successfully
- [ ] Used `len()` to count examples (⭐⭐ level)

**Engagement:**
- [ ] Contributed an example to the class dataset
- [ ] Made a hand-classification prediction with reasoning

### Students to Watch

**Need Extra Support:**
- Still swaps features and labels after Part 6 — re-run the quiz-card analogy 1:1; this must be solid before Week 3
- Struggles with dict syntax (missing quotes/keys) — pair with the starter code and a neighbour

**Ready for More Challenge:**
- Point at the ⭐⭐⭐ homework tier; suggest they add a 4th feature or a second unlabelled mystery and justify both predictions

---

## ⚠️ Troubleshooting Guide

| Problem | Solution |
|---|---|
| Students confuse features and labels | Return to the quiz-card analogy (front = clues, back = answer); do rapid chat-round "feature or label?" drills |
| "But more data is ALWAYS better!" pushback | Show the 3-dogs-1-cat demo and ask "is this good at cats?"; contrast a small balanced set with a huge lopsided one |
| Dict/list syntax errors in Trinket | Point to the starter code; common culprits are missing quotes on string values and a forgotten `"label"` key |
| Class dataset has inconsistent features | Frame as a lesson: every example must share the same feature keys — that's why we agree them first |
| Activity running long | Skip individual Trinket builds; build one dataset together on the shared screen and go straight to predict-by-hand |
| Lesson feels too abstract for a student | Anchor everything to the fruit/animal tables and the quiz card — avoid the word "algorithm"; keep it to clues and answers |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

- **Concept map:** who nailed feature vs label, who still confuses them? (This is your readiness signal for Week 3's classifier.)
- **Data-quality traction:** did "garbage in, garbage out" land? Any strong student examples to reuse in Week 5?
- **Activity data:** was the class fruit dataset balanced or lopsided? A lopsided one is a perfect callback for the bias lesson.
- **Timing:** did the concept parts overrun the coding? Adjust the balance for next week.

---

## 💭 Remember

**This week the concept is the lesson; the code is the illustration.**

If every student leaves able to look at a table and say "these are the features, this is the label — and better data beats more data," you have built the foundation for the entire term. Next week's classifier, Week 5's fairness discussion, and the final investigation report all stand on today's simple table.

**They opened the box and found a table. Now they're ready to teach a machine to read it.** 📊🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
