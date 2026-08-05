---
solution_code: |
  # Event Planner: School Games Day
  teams = 4
  players_per_team = 6
  extra_helpers = 3
  total_snacks = 60

  # Connected calculations
  players = teams * players_per_team
  people_attending = players + extra_helpers
  snacks_per_team = total_snacks / teams
  snacks_remaining = total_snacks - players

  print(f"Players: {players}")
  print(f"People including helpers: {people_attending}")
  print(f"Snacks available per team: {snacks_per_team}")
  print(f"Snacks remaining after one per player: {snacks_remaining}")
---

## Why this works

All four operators contribute to one event model. Starting values and calculated results are stored separately, so changing the event data updates every connected answer.

## Suggested tests

| Teams | Players/team | Helpers | Snacks | Expected players | Expected people |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 4 | 6 | 3 | 60 | 24 | 27 |
| 5 | 4 | 2 | 50 | 20 | 22 |

Check the remaining two results before running each test.
