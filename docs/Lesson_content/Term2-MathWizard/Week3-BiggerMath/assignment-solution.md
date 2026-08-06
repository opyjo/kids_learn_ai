---
solution_code: |
  # Theme Park Planner
  visitors = 53
  seats_per_ride = 8
  binary_choices = 6

  complete_rides = visitors // seats_per_ride
  waiting_visitors = visitors % seats_per_ride
  possible_badges = 2 ** binary_choices

  score_without_parentheses = 5 + 2 * 3
  score_with_parentheses = (5 + 2) * 3

  print(f"Complete ride groups: {complete_rides}")
  print(f"Visitors waiting: {waiting_visitors}")
  print(f"Possible badge patterns: {possible_badges}")
  print(f"Score without parentheses: {score_without_parentheses}")
  print(f"Score with parentheses: {score_with_parentheses}")
---

## Why this works

`//` counts complete groups, `%` finds leftovers, `**` models repeated binary choices, and the two score expressions demonstrate intentional calculation order.

## Suggested tests

| Visitors | Seats | Expected complete groups | Expected leftovers |
| ---: | ---: | ---: | ---: |
| 53 | 8 | 6 | 5 |
| 40 | 8 | 5 | 0 |
| 7 | 10 | 0 | 7 |

Students should also explain why the two score expressions produce `11` and `21`.
