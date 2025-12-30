# Teacher Notes: Term 1, Week 4 - Playing with Text!

## Lesson Overview

| Item | Details |
|------|---------|
| **Duration** | 60 minutes |
| **Level** | Beginner |
| **Prerequisites** | Weeks 1-3 (print, variables) |
| **Materials** | Computer with Python/Trinket |

---

## Learning Objectives

By the end of this lesson, students will be able to:
1. Concatenate strings using the + operator
2. Use string methods (upper, lower, capitalize, title)
3. Find string length using len()
4. Create dynamic text using variables and concatenation

---

## Lesson Timeline

| Time | Activity | Description |
|------|----------|-------------|
| 0-5 min | Review | Recap variables and strings |
| 5-20 min | Core Content | Concatenation and string methods |
| 20-35 min | Activity | Silly Sentence Factory |
| 35-55 min | Practice | Name Badge Designer |
| 55-60 min | Wrap-up | Homework assignment |

---

## Class Activity: Silly Sentence Factory 🏭

### Part 1: Mad Libs Game (15 min)

Students work in pairs:

1. **Partner A** creates variables WITHOUT showing Partner B:
```python
adjective1 = "???"
noun1 = "???"
verb = "???"
adjective2 = "???"
noun2 = "???"
```

2. **Partner B** fills in values (without knowing the story!)
   - "Give me an adjective" → "purple"
   - "Give me a noun" → "banana"
   - etc.

3. **Reveal the story!**
```python
story = "The " + adjective1 + " " + noun1 + " " + verb + " over the " + adjective2 + " " + noun2 + "!"
print(story)
```

### Part 2: Text Transformation Relay (10 min)

Split class into teams. Each team has a string to transform:

Starting string: `"hello world python"`

Round 1: Make it uppercase → `HELLO WORLD PYTHON`
Round 2: Make it title case → `Hello World Python`
Round 3: Add exclamation marks → `Hello World Python!!!`
Round 4: Multiply by 2 → (repeat the string)

First team to correctly complete all transformations wins!

### Part 3: Name Tag Designer (10 min)

Create a program that makes a fancy name tag:

```python
name = "Alex"

print("+" + "-" * (len(name) + 4) + "+")
print("|  " + name + "  |")
print("+" + "-" * (len(name) + 4) + "+")
```

**Challenge:** Make it work for ANY name!

### Discussion
- Why is `len()` useful for the name tag?
- What other creative things could we build with string methods?

---

## Take-Home Assignment: Name Badge Designer 🏷️

### Requirements

The name badge must have:
1. ✅ A decorative **border** (using `*`, `-`, `=`, or other characters)
2. ✅ Student's **name** in the center (use a variable!)
3. ✅ Name displayed in **UPPERCASE**
4. ✅ At least **3 facts** about the student
5. ✅ A **closing border**

### Example Output

```
*************************
*                       *
*     ALEX SMITH        *
*                       *
*************************

Facts About Me:
- Age: 10
- Hobby: Reading
- Pet: Dog named Max

*************************
```

### Grading Rubric

| Criteria | Points |
|----------|--------|
| Decorative border | 15 |
| Name in variable | 15 |
| Name in uppercase | 15 |
| 3 facts displayed | 20 |
| Closing border | 10 |
| Code runs without errors | 15 |
| Creative design | 10 |
| **Total** | **100** |

---

## Common Student Challenges

| Challenge | Solution |
|-----------|----------|
| Mixing + with numbers | Show comma method vs str() conversion |
| Forgetting spaces in concatenation | Visual demo: "Hello"+"World" vs "Hello "+"World" |
| Methods without parentheses | .upper not .upper() - show the error |
| len() confusion | Practice with different string lengths |

---

## Differentiation

### For Struggling Students
- Focus only on concatenation, save methods for later
- Provide template with blanks
- Use only comma method with print()

### For Advanced Students
- Create borders that auto-size to name length
- Combine multiple methods (.upper().capitalize())
- Create ASCII art with name inside

---

## Assessment Checklist

| Skill | Not Yet | Developing | Proficient |
|-------|---------|------------|------------|
| Concatenates strings | ⬜ | ⬜ | ⬜ |
| Uses string methods | ⬜ | ⬜ | ⬜ |
| Uses len() function | ⬜ | ⬜ | ⬜ |
| Creates dynamic text | ⬜ | ⬜ | ⬜ |

---

## Notes for Next Week

Week 5 is Practice & Play - a consolidation week. Prepare:
- Various challenge activities
- Coding Olympics materials
- Review of all concepts so far

---

_KidsLearnAI Teacher Resources_

