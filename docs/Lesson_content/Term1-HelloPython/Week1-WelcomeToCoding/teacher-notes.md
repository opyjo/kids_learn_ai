# Level 1, Lesson 1: Welcome to Coding! 🤖🐍

## Teacher's Guide

**Course:** Python Foundations I
**Age Group:** 9-13 years old
**Duration:** 60-75 minutes
**Format:** Live online via Zoom
**Term:** 1 of 8 | **Week:** 1 of 8

---

## 📋 Lesson Overview

### Purpose

This is the maiden class — your students' very first coding lesson. It sets the tone for the entire course. The session has three core goals:

1. **Spark curiosity** about AI and how it connects to coding
2. **Remove fear** of technology by showing students they already use AI every day
3. **Build confidence early** by getting every student to run their first program successfully

Focus on excitement and accessibility. Students who have a positive first experience are far more likely to continue and succeed.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what Artificial Intelligence (AI) is in their own words
2. Give at least two examples of AI they use in daily life
3. Explain what Python is and why it's a good language to learn
4. Navigate the Trinket coding environment (code panel, output panel, run button, save)
5. Write and execute a Python program using `print()`
6. Identify and fix two common syntax errors (missing quotes, wrong capitalisation)

### Key Success Metrics

- [ ] Every student can name at least one AI tool they've used
- [ ] Every student successfully runs "Hello, World!" by minute 35
- [ ] Every student creates a personalised multi-line program
- [ ] Class energy is positive and enthusiastic at the end

### Materials Needed

- Computer with internet access (teacher and each student)
- Zoom account with screen share enabled
- Trinket accounts (pre-created or sign up together during class)
- BrightByte mascot image (optional — can be used as a Zoom virtual background or shared in chat)
- This teaching guide open during class (minimised behind Zoom)
- Class WhatsApp group or email thread for sharing Trinket links

### Pre-Lesson Preparation (15 minutes before class)

1. **Test Zoom** — Open the Zoom meeting link, confirm your audio, video, and screen share are working
2. **Test Trinket** — Open trinket.io, create a test Python project, run code, and confirm output works
3. **Prep screen share** — Have Trinket open and ready to share the moment students join
4. **Prepare the Zoom chat** — Know how to monitor the chat while typing code (you'll use both simultaneously)
5. **Review student names** — Know who's who; use their Zoom display names to call on them
6. **Prepare AI discussion starter** — Think of 2-3 relatable AI examples for this age group (e.g. TikTok algorithm, Snapchat filters, WhatsApp suggested replies)
7. **Set up backup** — Have repl.it open as a backup if Trinket fails
8. **Review this guide** — Know your timing and key teaching points

---

## 🎯 Lesson Flow (60-75 Minutes)

### Quick Reference Timeline

```
⏱️  0-10 min  → Welcome + What is AI?
⏱️ 10-20 min  → What is Python?
⏱️ 20-30 min  → Trinket setup + interface tour
⏱️ 30-45 min  → First program + print() + common errors
⏱️ 45-55 min  → Hello Chain class activity
⏱️ 55-65 min  → Student showcase (2-3 volunteers)
⏱️ 65-75 min  → Homework explanation + questions + wrap-up
```

**Flexible timing:** If students are deeply engaged in coding practice, extend that section. If Trinket setup takes longer (common in first class), compress the showcase to 1-2 students.

---

## 📚 Detailed Teaching Guide

### Part 1: Welcome & What is AI? (10 minutes)

#### Your Energy Sets Everything

Log onto Zoom 5 minutes early and greet students as they join — use their names. Students mirror your attitude, especially online where it's easy to feel disconnected.

> **Zoom tip:** Turn your camera on and encourage students to do the same. Seeing faces builds community. If a student keeps their camera off, don't force it, but gently encourage: "It's great to see everyone — cameras on if you can!"

#### Opening Script

> "Welcome to KidsLearnAI! I'm [Your Name], and I am SO excited to have you all here on Zoom today. This is not a normal class. By the time we're done today, you will have written your first real computer program. You will officially be programmers.
>
> But before we touch any code, I want to ask you something..."

#### AI Discussion — "You're Already Using AI!" (5 minutes)

**Ask the class:**

> "Use the **Zoom reactions** button (the smiley face at the bottom) or just type YES in the chat — if you've done any of these today: asked Siri or Google a question, watched YouTube or Netflix, used Snapchat or TikTok, played a video game, or unlocked a phone with your face."

*Watch the chat and reactions fill up.*

> "Everything you just reacted to — that's powered by **Artificial Intelligence**. AI is already part of your life. And today you're going to start learning how to BUILD it."

**Explain AI simply:**

> "AI is when computers are programmed to learn and make decisions — almost like a brain. But here's the important thing: AI doesn't think on its own. A human wrote code to TEACH it. And that's exactly what you're going to learn — the code."

**Share your screen and show the AI examples table:**

| What They Use | How AI Powers It |
|---|---|
| Netflix/YouTube | Recommends videos based on what you watch |
| Snapchat Filters | Detects your face in real time |
| Google Translate | Understands and converts language |
| Face Unlock | Recognises your face instantly |
| Game enemies | React to your moves |

**Discussion prompt (1 minute, pairs):**

> "Type in the Zoom chat: what AI did YOU use today, and how did it help you? Take 30 seconds — go!"

*Read a few responses aloud from the chat. Call on 2-3 students by name to elaborate: "Amara, I see you said TikTok — tell us more!"*

#### Introduce BrightByte (2 minutes)

**Share your screen and show the BrightByte image, or paste it into the Zoom chat.**

> "Meet BrightByte — your AI guide for this whole course! BrightByte is an AI, and they'll be with you every lesson. BrightByte has one promise for you: **Every expert was once a beginner.** Every AI engineer, every Google developer, every app creator started exactly where you are right now. Mistakes are just your brain leveling up!"

**Why BrightByte matters:** The mascot gives students a safe, fun character to relate to. When they make errors, they're "learning just like BrightByte did."

#### Teaching Tips for This Section

- **Don't rush past AI** — This is the hook that makes students care about learning Python. Give it proper time.
- **Use their examples** — If a student mentions a specific game or app, run with it: "Yes! That uses AI!"
- **Keep it conversational** — This should feel like a chat, not a lecture.
- **Avoid deep technical explanations** — They don't need to understand machine learning models today. Just the concept.

---

### Part 2: What is Python? (10 minutes)

#### What is Programming? — The Sandwich Analogy (3 minutes)

> "So AI is powered by code. But what IS code? Let me explain with a sandwich."

**The Sandwich Analogy:**

> "If I asked YOU to make a sandwich, you'd figure it out — you know what a sandwich is. But if I asked a ROBOT?
> I'd need to say:
> 1. Walk to the kitchen
> 2. Open the bread drawer
> 3. Take out exactly TWO slices
> 4. Place them on the counter...
>
> Computers need that level of detail. Every. Single. Step. Writing those instructions is called **programming** or **coding**."

#### What is Python? (4 minutes)

> "Python is a programming language — a special way of writing instructions that computers can understand.
>
> Think of it this way: humans speak English, Twi, Yoruba, French... Computers speak programming languages. Python is one of those languages, and it's one of the friendliest ones to learn."

**Why Python is Worth Learning:**

> "Python is used by Google, Instagram, NASA, and the researchers who built ChatGPT. It's powerful enough to build real AI, but easy enough that you can learn it at 10 years old."

**Fun facts to share (pick 1-2 that land well with your class):**

- Created in 1991 by Guido van Rossum
- Named after *Monty Python* (a comedy group) — not the snake!
- One of the most popular programming languages in the world
- Used to analyse data from space rovers 🚀

#### Teaching Tips

- **Don't over-explain** — 10 minutes max; then move on
- **Watch for eyes lighting up** — "Google uses this?!" moments are gold; pause and celebrate them
- **Skip if running tight** — The coding section is more important; trim this if needed

---

### Part 3: Setting Up Trinket (10 minutes)

#### Goals

Get EVERY student logged in and looking at a blank Python Trinket by the end of this section.

#### Step-by-Step Walkthrough (7 minutes)

**Start Zoom screen share** — share your browser window showing Trinket. Students open their own browser alongside Zoom.

> "Keep Zoom open on one side of your screen, and open a new browser tab on the other side. We're going to set up Trinket while I walk you through it live. Let's go to t-r-i-n-k-e-t dot i-o"

**Step-by-step (narrate each one, wait for students to follow):**

1. "Go to trinket.io — you should see the same page I'm showing on screen"
2. "Click 'Sign Up' at the top right — or log in if you already have an account"
3. "Sign up with Google (easiest) or use the login details I'll paste in the **Zoom chat** now"
4. "Once logged in, click the '+' button or 'New Trinket', then choose 'Python'"
5. "You should now see a split screen — does yours look like mine?"

**Explain the interface** (point to each part on your shared screen):

> "This is your coding workspace:
> - **Left side** = where you TYPE your code
> - **Right side** = where you SEE the results
> - **▶ Run button** at the top = makes your code run
> - **Save button 💾** = use it constantly!
>
> Think of the left side as your notebook and the right side as the result of your work."

**Quick test (3 minutes):**

> "Let's make sure yours is working. Type this exactly — watch my screen — and click Run:"

```python
print("Trinket is working!")
```

> "Give me a **thumbs up** in Zoom reactions when you see 'Trinket is working!' on the right side!"

*Wait until most students have reacted before moving on. Ask in chat: "Still setting up? Type 'help' in the chat!"*

#### What If Something Goes Wrong?

| Problem | Quick Fix |
|---|---|
| Trinket won't load | Paste repl.it link in Zoom chat as backup; continue demo while they switch |
| Can't create account | Paste shared teacher login in Zoom chat; fix their own account after class |
| No output appears | "Did you click the ▶ Run button? It's the green triangle at the top!" |
| Screen looks different | Ask them to share screen briefly so you can see their Trinket |
| Internet drop (student) | Tell them to rejoin Zoom; continue for others; follow up with that student |
| Zoom screen share lags | Reduce screen resolution; share just the browser window, not whole screen |

#### Teaching Tips

- **Paste the Trinket link in the Zoom chat** — don't rely on students typing the URL correctly
- **Go slower than you think** — Tech setup in a first Zoom class always takes longer than expected
- **Use Zoom reactions as checkpoints** — "Thumbs up when you're done" keeps everyone synced without interrupting flow
- **Don't leave anyone behind** — This is the foundation. Check the chat for students saying "help" or "not working"
- **Celebrate small wins** — "Yes! You're in! You now have a real coding environment — same tool used by professional developers!"

---

### Part 4: First Python Program + print() + Common Errors (15 minutes)

#### The Magic Moment (5 minutes)

> "This is it. Your first line of real code. Type EXACTLY what I type — every character matters."

**Type slowly on screen, narrating:**

```python
print("Hello, World!")
```

> "Let me explain what each part is:
> - `print` = a command (always lowercase!)
> - `()` = parentheses — they hold what we want to display
> - `""` = quotation marks — they wrap our text like gift wrap
> - `Hello, World!` = our message"

> "Now... click RUN!"

**CELEBRATE!** 🎉

> "Look at that! Your first program! You're officially programmers! Drop a 🎉 in the Zoom chat!"

*Read out some of the chat responses. Milk this moment — it's their first ever program.*

**Give them 1 minute to run it themselves. Ask for a Zoom thumbs up reaction when they see it.**

Then:

> "Now make it YOUR own. Change the message to use your name!"

```python
print("Hello! My name is Sofia!")
```

**Give 1-2 minutes. Ask 2-3 students what they typed.**

#### Multiple Print Statements (3 minutes)

> "Now watch what happens with multiple print() statements..."

```python
print("Welcome to Python!")
print("I am learning to code!")
print("This is amazing!")
```

> "Python reads from TOP to BOTTOM — like a book. Each print() creates a new line automatically."

**Quick student practice:**

> "Write 3 print statements — anything you want — and run it. Go!"

*Give 2 minutes.*

#### Common Mistakes — Interactive Debugging (5 minutes)

**Frame it positively:**

> "Every programmer makes mistakes — including people who've coded for 20 years. Let me show you the two mistakes EVERY beginner makes. Then you'll know how to fix them."

**Mistake 1: Missing Quotation Marks**

Type intentionally wrong code:

```python
print(Hello World)
```

Run it. Show the error message.

> "See that red error? Python is confused. 'Hello' is not defined — because text MUST be wrapped in quotation marks!"

Fix it together:

```python
print("Hello World")
```

**Mistake 2: Wrong Capitalisation**

```python
Print("Hello World")
```

> "What's wrong here? Look carefully..."

Let students identify it — capital `P`.

> "Exactly! Python is CASE-SENSITIVE. It only knows `print` in lowercase. `Print` with a capital P is a completely different thing to Python!"

Fix it:

```python
print("Hello World")
```

**Quick Bug Challenge (2 minutes):**

> "You're bug detectives! What's wrong here?"

```python
print("I love Python!)
```
*Answer: Missing closing quote mark*

```python
prnt("This is fun")
```
*Answer: Misspelled `print`*

Celebrate correct answers enthusiastically!

#### Teaching Tips

- **Make mistakes on purpose** — It normalises errors and makes the debugging lesson stick
- **Use humour** — "Oops! Python is mad at me again!"
- **Only teach 2 error types today** — Don't overwhelm them
- **Move on** — If one student is confused, note it and follow up privately

---

### Part 5: Hello Chain Class Activity (10 minutes)

This is a community-building exercise. It reinforces print() while making every student feel seen and included in the online class.

#### How to Run It on Zoom

> "Now we're going to write a class program TOGETHER. I've opened a new Trinket and I'm sharing my screen. Your job: type your line in the **Zoom chat**, and I'll add it to our class program live!"

**Make sure your Trinket is visible on screen share.**

> "Type your line in the chat RIGHT NOW in this format:
> `print("My name is [NAME] and I love [THING]! [EMOJI]")`"

*Give students 60 seconds to type in chat. Read each one aloud, paste it into Trinket, and say the student's name.*

```python
print("My name is Kwame and I love football! ⚽")
print("My name is Zara and I love music! 🎵")
print("My name is James and I love video games! 🎮")
```

Once all lines are in — build the suspense, then run it:

> "Everyone ready? Here we go in 3... 2... 1... RUN!"

> "There it is — our whole class, in a real Python program! React in Zoom!"

*Let them celebrate in chat and reactions for a moment.*

#### Teaching Tips

- **Monitor the chat actively** — Copy each student's line as it appears; don't wait for everyone before you start adding
- **Call out every student's name** — "Amara! Great one — I'm adding yours now"
- **Prompt students who haven't typed** — "We haven't heard from Kofi yet — Kofi, what do you love?"
- **Run it with ceremony** — The countdown builds excitement; don't skip it
- **If the class is large** — Do it in two rounds (first half, then second half)

---

### Part 6: Student Showcase (5 minutes)

> "Before we wrap up — who wants to share their screen and show the class what THEY created today?"

**For volunteers on Zoom:**
1. Ask them to **share their screen** (click Share Screen in Zoom)
2. Have them run their code so the output is visible
3. Point out something specific that's impressive or creative
4. Lead applause via chat — "Everyone drop a 🔥 in the chat for [Name]!"

> "Give yourselves a HUGE round of applause — you all wrote real Python programs today!"

**If no one volunteers:**

> "No worries! How about I share what I spotted in your work? [Student name], your program was so creative — can I show it to the class?"

*Show it yourself via your screen share if they're comfortable.*

**Zoom tip:** If students are hesitant to share their screen, offer to read their code out loud from the chat instead — lower barrier, same recognition.

---

### Part 7: Homework & Wrap-Up (5-10 minutes)

#### Homework Introduction (3 minutes)

> "For homework, you're going to write an 'About Me' program in Trinket."

**Display or share requirements:**

```
HOMEWORK: My Python Story
Due: [Next week's date]

Requirements:
✅ At least 5 print() statements
✅ Include your name, age, and favourite hobby
✅ Add one fun fact about yourself
✅ Use at least one emoji
✅ Code must run without errors

Bonus: Add 5 more lines and be extra creative!

To submit:
1. Click Save in Trinket
2. Click the Share button
3. Copy the Trinket link
4. Paste the link in [class WhatsApp group / Google Classroom / email]
```

> **Zoom tip:** Paste the submission instructions and your contact/submission link into the **Zoom chat** right now so students have it saved.

#### Preview Next Week (1 minute)

> "Next week we explore the print() command even further. We'll make patterns, repeat text, and combine words. Here's a sneak peek:"

```python
print("I love coding " * 3)
print("⭐" * 10)
```

> "Python can do that! We'll learn how next week!"

#### Final Words (1 minute)

> "You did something incredible today. You learned what AI is. You set up a real coding environment. You wrote your first Python program. You fixed bugs like experienced developers.
>
> BrightByte is proud of you — and so am I. Every great programmer started exactly where you are right now. Keep going. See you next week!"

Take any final questions (via unmute or Zoom chat), then end on a high note. Stay on the Zoom call for 2-3 minutes after the official end time for students who want to ask follow-up questions.

---

## 🎓 Assessment & Notes

### During Class, Observe:

**Technical Skills:**
- [ ] Can access and navigate Trinket
- [ ] Can type `print("text")` correctly
- [ ] Can run code and read output
- [ ] Can identify missing quotes
- [ ] Can identify wrong capitalisation

**Conceptual Understanding:**
- [ ] Can describe AI in their own words
- [ ] Can give an example of AI they've used
- [ ] Understands Python is a programming language

**Engagement:**
- [ ] Participating in AI discussion
- [ ] Attempting practice activities
- [ ] Asking questions (good sign!)
- [ ] Helping peers (excellent sign!)

### Students to Watch

**Need Extra Support:**
- Students who struggled to log into Trinket
- Students who couldn't run "Hello, World!" independently
- Students who seemed very frustrated or disengaged

**Ready for More Challenge:**
- Students who finished all activities early
- Students who added extra creativity (emojis, longer programs)
- Students who helped their peers

### Common Classroom Situations (Zoom)

| Situation | Signs | Response |
|---|---|---|
| Overwhelmed | Frozen, not typing, no reactions | Send a private Zoom chat: "Let's just write ONE line together — I'll help" |
| Bored/ahead | Typing fast in chat, done early | "Try adding 5 more print() lines — make it a story! Share in chat when done" |
| Stuck | Nothing typed, no reactions | Private message: "Type `print(` first, then let's add your message" |
| Error anxiety | Won't try after one mistake | "Every error means you're coding! Drop it in the chat and let's fix it together" |
| Camera/mic off, disengaged | No reactions, no chat activity | Gently name-check them: "[Name], what do you think? Feel free to type in chat!" |
| Technical issues | "I can't see anything" / silence | Ask them to share screen briefly; or move them to a breakout room for 1:1 help |

---

## ⚠️ Troubleshooting Guide

### Technical Issues

| Problem | Solution |
|---|---|
| Trinket won't load | Paste repl.it link in Zoom chat as backup; continue demo |
| Students can't log in | Paste shared teacher login in Zoom chat; fix accounts after class |
| Student's internet drops | Continue for the rest of class; DM them the recording/catch-up plan |
| Your internet drops | Reconnect quickly; students continue working in Trinket independently |
| Zoom screen share lags | Share just the browser window (not whole screen); reduce video quality |
| Screen share fails entirely | Paste a direct Trinket link in chat; students follow written steps |
| Code runs but no output | "Did you click the ▶ Run button?" — show it on screen share |

### Pacing Issues

| Situation | What To Do |
|---|---|
| Running 10+ min behind on Trinket setup | Skip the bug challenge; jump straight to Hello Chain |
| Running ahead of schedule | Extend hands-on time; let students build a short print() story |
| Mixed pace | Fast finishers: bonus challenge via chat; you help slower students privately |

### Engagement Issues (Zoom-Specific)

| Problem | Response |
|---|---|
| Chat is silent | Prompt specifically: "Everyone type ONE word in the chat — what's your favourite hobby?" |
| No one using reactions | Remind them: "Use the reactions button — bottom of Zoom — I love seeing your responses!" |
| One student dominating voice | "Great! Let's hear from someone who hasn't spoken yet — check the chat too!" |
| Multiple students off-task | "Everyone paste your current code in the chat right now — let's see where you are!" |
| Student visibly frustrated (on camera) | Private Zoom message: "You're doing great — this is tricky at first. Let me help you." |

---

## 📊 Post-Lesson Reflection

**After class, spend 5 minutes noting:**

### What Worked
- Which examples or analogies clicked?
- Which activities had highest engagement?
- Any unexpected positive moments?

### What Needs Adjustment
- Where did students struggle most?
- What took longer than expected?
- Anything confusing to revisit next week?

### Individual Notes

**Excelled today:**
- [Student names]

**Needs support next week:**
- [Student names]

**Absent (need catch-up plan):**
- [Student names]

### Timing Notes
- Did we finish on time?
- What to cut or expand next session?
- Was there enough hands-on practice time?

---

## 🔗 Quick Resources

### For You (Teacher)

- **Trinket Teacher Account:** trinket.io/schools (classroom management features)
- **Backup Platform:** repl.it (if Trinket is unavailable)
- **Your Prep Checklist:** Review this guide 15 minutes before class

### For Parents (Send After Class)

```
Subject: Your Child's First Coding Lesson — What We Covered Today 🎉

Hi everyone,

Your child completed their very first Python and AI lesson today!

What we covered:
• What Artificial Intelligence (AI) is and how it's already part of daily life
• What Python is and why it's one of the world's most important languages
• Setting up Trinket — their online coding environment
• Writing their first Python program using print()
• Finding and fixing code errors like a real developer

Homework due [date]:
"My Python Story" — at least 5 print() statements introducing themselves.
Full instructions are in their student notes.

How you can help:
• Ask your child to show you their first program!
• Ask them: "What is AI? Can you give me an example?"
• Encourage them when they make mistakes — that's how coding works
• Make sure they have 20-30 minutes for their homework

Questions? Reply here or attend office hours on [day/time].

Happy coding!
[Your Name]
KidsLearnAI
```

---

## ✅ Pre-Flight Checklist

### 15 Minutes Before Class

- [ ] Zoom meeting link is tested and working
- [ ] Your camera and microphone are working
- [ ] Zoom screen share is tested (share browser window specifically)
- [ ] Trinket is open and a blank Python project is ready to demo
- [ ] Backup platform (repl.it) is open in another tab
- [ ] Trinket login details (if pre-created) are ready to paste in Zoom chat
- [ ] Submission link / WhatsApp group is ready to paste in Zoom chat
- [ ] This guide is minimised and accessible during class
- [ ] Student Zoom display names are reviewed
- [ ] 2-3 AI examples relevant to this age group are prepared
- [ ] Positive energy is activated! ⚡

### During Class

- [ ] Joined Zoom 5 minutes early to greet students
- [ ] Camera on, encouraged students' cameras on
- [ ] AI discussion happens before any coding
- [ ] Zoom reactions used as engagement checkpoints throughout
- [ ] Every student logs into Trinket (monitor via chat)
- [ ] Every student runs "Hello, World!" and gives thumbs up reaction
- [ ] Hello Chain completed using Zoom chat
- [ ] At least 2 students share their screen for showcase
- [ ] Homework instructions and submission link pasted in Zoom chat
- [ ] Students leave excited about next week

### After Class

- [ ] Reflection notes completed
- [ ] Students needing support are identified (note who was silent/struggling in chat)
- [ ] Follow-up message sent to any students who had technical issues
- [ ] Parent email sent
- [ ] Quick prep started for Lesson 2

---

## 💭 Remember

**This is the maiden class — first impressions matter enormously.**

Students who have a positive, exciting first experience are far more likely to continue, practise at home, and succeed long-term. Your enthusiasm, patience, and encouragement today will shape how these kids feel about coding — and about AI — for years to come.

The technical content is secondary. The feeling they leave with is primary.

**You've got this!** 🚀

---

_KidsLearnAI Teacher Resources_
_www.kidslearnai.ca_
_For support: [instructor support email]_
