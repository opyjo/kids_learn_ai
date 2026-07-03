# Term 2, Lesson 1: Welcome Back — Term 1 Recap! 🔁

## Teacher's Guide

**Course:** Term 2: Math Wizard  
**Duration:** 60 minutes  
**Term:** 2 of 8 | **Week:** 1 of 9

---

## 📋 Lesson Overview

### Purpose

This is the opening lesson of Term 2 and is intentionally a **review-and-warm-up** lesson, not new content. Students are returning after a break, and this term (Math Wizard) builds directly on Term 1's foundations — variables, strings, `str()`, and especially the string-vs-number distinction that makes `int()` necessary later. The goal is to reactivate prior knowledge, surface any gaps from students who joined late or forgot over the break, and rebuild confidence before math is introduced in Week 2.

### Learning Objectives

By the end of this lesson, students will be able to:

1. Use `print()` with string repetition (`*`) and concatenation (`+`)
2. Create, use, and reassign variables using snake_case naming
3. Explain the difference between a string (`"10"`) and an integer (`10`)
4. Apply string methods (`.upper()`, `.title()`), `len()`, and `str()`
5. Write comments and format output with f-strings
6. Use `input()` to build a simple interactive program

### Materials Needed

- Zoom + Trinket (Python), side by side
- The lesson starter code loaded and ready to share

---

## 🎯 Why a Recap Week?

Term 2 introduces math, `input()` used *with* numbers, and `int()` conversion. Every one of those leans on a Term 1 skill:

- **`int()` and the calculator payoff** depend on students remembering that `"10"` (text) and `10` (number) behave differently — reinforced in Skill 3.
- **F-strings** are the cleanest way to display calculation results, so we revive them here rather than letting students fall back on messy `+`/`str()` chains.
- **`input()`** was introduced late in Term 1; a light refresher here means Week 4 ("Asking Questions") can move faster.

Spend the most time on **Skill 3 (strings vs numbers)** and **Skill 5 (f-strings)** — those pay off directly in the weeks ahead.

---

## ⏱️ Lesson Flow

| Time  | Duration | Activity                  | Details                                             |
| ----- | -------- | ------------------------- | --------------------------------------------------- |
| 0:00  | 5 min    | Welcome Back              | BrightByte intro; celebrate finishing Term 1        |
| 0:05  | 5 min    | Run the starter code      | Everyone personalizes and runs the warm-up program  |
| 0:10  | 25 min   | Skills 1–6 review         | Quick example + "Your Turn" for each skill          |
| 0:35  | 12 min   | Warm-Up Challenges        | Challenges 1–3 (incl. the Fix-the-Bug)              |
| 0:47  | 8 min    | Skill Relay class activity| Whole-class collaborative Trinket                   |
| 0:55  | 5 min    | Wrap-up + Week 2 preview  | Toolbox recap; tease "Python Does Math"             |

Move briskly. If a skill is clearly solid across the class, do the "Your Turn" verbally and move on. Linger only where you see hesitation.

---

## 💡 Teaching Tips

- **Diagnose, don't lecture.** This lesson doubles as an informal assessment. Note which skills get blank stares — those are the students to check on in Weeks 2–4.
- **Type, don't just read.** Insist students run every example. Muscle memory is the point of a warm-up.
- **Push f-strings.** Some students will default to `+` and `str()`. Praise it as valid, then show the f-string version side by side so they feel the difference.
- **Foreshadow the math term.** When you hit Skill 3, say out loud: "Hold onto this — in a few weeks it's the secret to making calculators work." It plants the hook for `int()`.
- **Late joiners:** If some students didn't do Term 1, pair them with a confident peer for the Skill Relay and reassure them the review sections cover what they need.

---

## ⚠️ Common Mistakes to Watch For

1. **`"2" + "2"` confusion (Challenge, Skill 3).** Students expect `4` and get `22`. This is the single most valuable "aha" of the lesson — let them predict, then run it.
2. **Adding a number to text with `+`** (Challenge 3): `"Age " + age`. Fix with `str(age)` or an f-string. Expected fix: `print(f"Next year you will be {age + 1}")`.
3. **Forgetting the `f`** before an f-string's quotes — the `{name}` then prints literally as `{name}`.
4. **Reassigning vs comparing:** a few students write `score == 100` when they mean `score = 100`. (Comparisons aren't taught until Term 3 — gently redirect to a single `=`.)
5. **snake_case slips:** spaces or capitals in variable names (`high score`, `HighScore`). Reinforce lowercase-with-underscores.

---

## ✅ Warm-Up Challenge Answers

**Challenge 3 (Fix the Bug):**
```python
age = 12
print(f"Next year you will be {age + 1}")   # 13
```

**Homework check:** Look for at least 3 variables, one real f-string with a variable in `{ }`, one string method, one `*` pattern, and two `#` comments. The bonus `input()` greeting is a strong signal a student is fully caught up.

---

## 🔮 Looking Ahead

Next week (Week 2, "Python Does Math") introduces the four operators and math with variables — the first genuinely new content of the term. Students who are shaky on variables today will struggle there, so flag them now.
