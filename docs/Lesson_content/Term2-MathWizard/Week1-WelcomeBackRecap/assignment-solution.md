---
solution_code: |
  # My Term 1 Skills Showcase
  # These variables store facts about me.
  student_name = "Maya"
  age = 10
  favourite_hobby = "drawing"

  # This variable creates a star border with repetition.
  border = "⭐" * 24

  print(border)
  print(f"MEET {student_name.upper()}!")
  print(f"I am {age} years old.")
  print(f"My favourite hobby is {favourite_hobby.title()}.")
  print(f"This year, {student_name} wants to become a stronger coder!")
  print(border)

  # Bonus: greet the person running the program.
  visitor_name = input("What is your name? ")
  print(f"Welcome to my showcase, {visitor_name.title()}! 👋")
---

## Example run

```text
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
MEET MAYA!
I am 10 years old.
My favourite hobby is Drawing.
This year, Maya wants to become a stronger coder!
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
What is your name? kofi
Welcome to my showcase, Kofi! 👋
```

## Walk through it

1. Identify the variables and ask what type of value each one stores.
2. Point to `{student_name}` inside the f-string and explain that Python replaces it with the variable's value.
3. Compare `.upper()` with `.title()` and ask students to predict each result.
4. Show that multiplying a string repeats it: `"⭐" * 24`.
5. Finish with the bonus `input()` and trace where the answer is stored.

## Success checklist

- [x] At least three variables with text and numbers
- [x] Multiple f-strings
- [x] Two different string methods
- [x] A pattern made with `*`
- [x] At least two explanatory comments
- [x] A working `input()` bonus

## Common mistakes

| Mistake | Review point |
|---|---|
| Writing `{student_name}` without the `f` before the string | The braces only substitute a value inside an f-string. |
| Writing `⭐ * 24` | Text and emojis must be inside quotes. |
| Using `student_name.upper` | A method needs parentheses: `.upper()`. |
| Changing the variable name in only one place | Variable spelling must stay consistent. |

## Ask the class

1. Which values could we change without rewriting any `print()` lines?
2. What would happen if the border used `10` instead of `24`?
3. How could you add a favourite food using the same pattern?

## Another valid approach

Students may choose completely different facts, variable names, string methods, patterns, or output formatting. Check the required Python skills rather than expecting their program to match this model exactly.
