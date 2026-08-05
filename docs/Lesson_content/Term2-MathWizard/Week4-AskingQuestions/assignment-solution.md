---
solution_code: |
  # My Interactive Adventure Story
  print("🌟 Welcome to the Magical Adventure Maker! 🌟")

  hero = input("What is your hero's name? ")
  place = input("Name a mysterious place: ")
  animal = input("Choose a helpful animal: ")
  treasure = input("What treasure should they find? ")
  magic_word = input("Invent a magic word: ")

  print("\n✨ YOUR ADVENTURE ✨")
  print(f"One morning, {hero} travelled to {place}.")
  print(f"A friendly {animal} appeared and offered to help.")
  print(f"Together they searched everywhere for {treasure}.")
  print(f"When {hero} shouted '{magic_word.upper()}!', a secret door opened!")
  print(f"Behind it was {treasure}. {hero} and the {animal} celebrated! 🎉")
---

## Example run

```text
What is your hero's name? Amina
Name a mysterious place: the Moon Forest
Choose a helpful animal: dragon
What treasure should they find? a golden book
Invent a magic word: sparkle

✨ YOUR ADVENTURE ✨
One morning, Amina travelled to the Moon Forest.
A friendly dragon appeared and offered to help.
Together they searched everywhere for a golden book.
When Amina shouted 'SPARKLE!', a secret door opened!
Behind it was a golden book. Amina and the dragon celebrated! 🎉
```

## Walk through it

1. Count the five `input()` calls and identify the variable that stores each answer.
2. Trace one answer, such as `animal`, from the question into two story sentences.
3. Show how `\n` starts a new line before the story heading.
4. Point out that `.upper()` changes only how the magic word is displayed; the original answer is still stored.

## Success checklist

- [x] Five different questions using `input()`
- [x] Every answer stored in a clearly named variable
- [x] More than two story lines use the answers
- [x] A complete, personalized story
- [x] Code that runs without errors

## Common mistakes

| Mistake | Review point |
|---|---|
| Asking a question without saving the answer | Use `answer = input("Question")`. |
| Forgetting the `f` before a story string | Variables inside `{}` need an f-string. |
| Reusing one variable for every question | Each answer needs its own descriptive variable. |
| Missing a quote or closing parenthesis | Match every opening quote and parenthesis with a closing one. |

## Ask the class

1. Which answer is reused most often in this model?
2. How does the same code create a different story for every user?
3. What sixth question could make the ending even more personal?

## Another valid approach

A quiz, joke generator, interview, or different adventure all work. The important pattern is **ask → store → reuse** at least five times.
