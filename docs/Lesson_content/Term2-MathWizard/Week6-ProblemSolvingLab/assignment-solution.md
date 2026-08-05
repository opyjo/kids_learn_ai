---
solution_code: |
  # Journey Tool — Version 2
  # Feedback received: make the direction and units clearer.
  kilometres_text = input("Distance in kilometres: ")
  kilometres = float(kilometres_text)

  miles = round(kilometres * 0.621371, 2)

  print(f"{kilometres:g} kilometres is approximately {miles:.2f} miles.")
  print("Conversion used: kilometres → miles")
---

## Problem statement

Convert one decimal distance from kilometres to miles. This version improves the prompt and output after peer feedback.

## Test evidence

| Kilometres | Expected miles | Purpose |
| ---: | ---: | --- |
| 10 | 6.21 | Normal case |
| 0 | 0.00 | Boundary case |
| 2.5 | 1.55 | Decimal case |
| 100 | 62.14 | Larger value |

## Known limitation

The tool converts in one direction only. A two-direction menu requires decisions taught in Term 3.

Score and party-share tools are equally valid when their design card, test evidence, peer feedback, revision, and limitation are present.
