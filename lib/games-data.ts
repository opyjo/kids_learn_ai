export interface Game {
  id: string;
  title: string;
  emoji: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  skills: string[];
  preview: string;
  code: string;
  howItWorks: string[];
  challenges: string[];
  trinketLink?: string;
}

export const games: Game[] = [
  {
    id: "number-guess",
    title: "Number Guessing Game",
    emoji: "🎯",
    description:
      "Try to guess the secret number between 1 and 100. The computer will tell you if your guess is too high or too low!",
    difficulty: "Beginner",
    time: "20 min",
    skills: ["Variables", "Loops", "Conditionals", "Input/Output"],
    preview:
      "A fun text-based game where you guess a random number. Perfect for learning the basics!",
    code: `import random

# Generate a random number between 1 and 100
secret_number = random.randint(1, 100)
attempts = 0
max_attempts = 10

print("🎯 Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100.")
print("You have " + str(max_attempts) + " attempts to guess it!\\n")

# Game loop
while attempts < max_attempts:
    # Get player's guess
    guess = int(input("Enter your guess: "))
    attempts += 1
    
    # Check if guess is correct
    if guess == secret_number:
        print("🎉 Congratulations! You guessed it in " + str(attempts) + " attempts!")
        break
    elif guess < secret_number:
        print("📈 Too low! Try a higher number.")
    else:
        print("📉 Too high! Try a lower number.")
    
    # Show remaining attempts
    remaining = max_attempts - attempts
    if remaining > 0:
        print("Attempts remaining: " + str(remaining) + "\\n")
    else:
        print("😢 Game Over! The number was " + str(secret_number))`,
    howItWorks: [
      "We use random.randint() to generate a secret number between 1 and 100",
      "A while loop keeps the game running until the player guesses correctly or runs out of attempts",
      "We compare the guess with the secret number using if/elif/else statements",
      "The attempts counter tracks how many guesses the player has made",
    ],
    challenges: [
      "Add difficulty levels (Easy: 1-50, Medium: 1-100, Hard: 1-500)",
      "Keep track of the best score (fewest attempts)",
      "Add hints after 5 wrong guesses",
      "Create a two-player mode where players take turns",
    ],
    trinketLink: "https://trinket.io/python",
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    emoji: "✊",
    description:
      "Play the classic game against the computer. Best of 5 rounds wins!",
    difficulty: "Beginner",
    time: "25 min",
    skills: ["Functions", "Lists", "Random", "String Comparison"],
    preview:
      "Challenge the computer to a classic game of Rock, Paper, Scissors!",
    code: `import random

def get_computer_choice():
    """Computer randomly chooses rock, paper, or scissors"""
    choices = ['rock', 'paper', 'scissors']
    return random.choice(choices)

def determine_winner(player, computer):
    """Determine who wins the round"""
    if player == computer:
        return "tie"
    elif (player == "rock" and computer == "scissors") or \\
         (player == "paper" and computer == "rock") or \\
         (player == "scissors" and computer == "paper"):
        return "player"
    else:
        return "computer"

def display_choice(choice):
    """Display emoji for each choice"""
    emojis = {'rock': '✊', 'paper': '✋', 'scissors': '✌️'}
    return emojis.get(choice, choice)

# Game setup
print("✊✋✌️ Rock Paper Scissors Game!")
print("Best of 5 rounds wins!\\n")

player_score = 0
computer_score = 0
rounds = 0
max_rounds = 5

# Game loop
while rounds < max_rounds:
    print(f"\\n--- Round {rounds + 1} ---")
    
    # Get player choice
    player_choice = input("Choose (rock/paper/scissors): ").lower()
    
    # Validate input
    if player_choice not in ['rock', 'paper', 'scissors']:
        print("Invalid choice! Please try again.")
        continue
    
    # Get computer choice
    computer_choice = get_computer_choice()
    
    # Display choices
    print(f"You chose: {display_choice(player_choice)}")
    print(f"Computer chose: {display_choice(computer_choice)}")
    
    # Determine winner
    result = determine_winner(player_choice, computer_choice)
    
    if result == "tie":
        print("It's a tie!")
    elif result == "player":
        print("🎉 You win this round!")
        player_score += 1
    else:
        print("🤖 Computer wins this round!")
        computer_score += 1
    
    rounds += 1
    print(f"Score - You: {player_score} | Computer: {computer_score}")

# Final results
print("\\n" + "="*40)
print("GAME OVER!")
print(f"Final Score - You: {player_score} | Computer: {computer_score}")

if player_score > computer_score:
    print("🏆 YOU WIN THE GAME! 🏆")
elif computer_score > player_score:
    print("🤖 Computer wins the game!")
else:
    print("🤝 It's a tie game!")`,
    howItWorks: [
      "Functions organize the code: get_computer_choice(), determine_winner(), and display_choice()",
      "The computer uses random.choice() to pick from a list of options",
      "We use logical operators (and/or) to check all winning combinations",
      "A while loop runs the game for 5 rounds, keeping track of scores",
    ],
    challenges: [
      'Add "Rock Paper Scissors Lizard Spock" with 5 choices',
      "Create a tournament mode with multiple opponents",
      "Add sound effects or ASCII art for each choice",
      "Track win/loss statistics across multiple games",
    ],
    trinketLink: "https://trinket.io/python",
  },
  {
    id: "hangman",
    title: "Hangman",
    emoji: "📝",
    description:
      "Guess the hidden word one letter at a time before you run out of tries!",
    difficulty: "Beginner",
    time: "30 min",
    skills: ["Strings", "Lists", "Loops", "String Methods"],
    preview:
      "Classic word guessing game. Can you figure out the word before running out of guesses?",
    code: `import random

def get_random_word():
    """Choose a random word from the list"""
    words = ['python', 'programming', 'computer', 'keyboard', 'function', 
             'variable', 'algorithm', 'developer', 'software', 'internet']
    return random.choice(words).upper()

def display_word(word, guessed_letters):
    """Show the word with guessed letters revealed"""
    display = ""
    for letter in word:
        if letter in guessed_letters:
            display += letter + " "
        else:
            display += "_ "
    return display

def display_hangman(tries):
    """Display hangman stages"""
    stages = [
        """
           --------
           |      |
           |      O
           |     \\|/
           |      |
           |     / \\
        """,
        """
           --------
           |      |
           |      O
           |     \\|/
           |      |
           |     / 
        """,
        """
           --------
           |      |
           |      O
           |     \\|/
           |      |
           |      
        """,
        """
           --------
           |      |
           |      O
           |     \\|
           |      |
           |     
        """,
        """
           --------
           |      |
           |      O
           |      |
           |      |
           |     
        """,
        """
           --------
           |      |
           |      O
           |      
           |      
           |     
        """,
        """
           --------
           |      |
           |      
           |      
           |      
           |     
        """
    ]
    return stages[tries]

# Game setup
print("📝 Welcome to Hangman!")
print("Guess the word one letter at a time!\\n")

word = get_random_word()
guessed_letters = set()
wrong_guesses = set()
max_tries = 6
tries_left = max_tries

# Game loop
while tries_left > 0:
    # Display current state
    print(display_hangman(tries_left))
    print("\\nWord:", display_word(word, guessed_letters))
    print(f"Wrong guesses: {', '.join(sorted(wrong_guesses)) if wrong_guesses else 'None'}")
    print(f"Tries left: {tries_left}\\n")
    
    # Check if won
    if all(letter in guessed_letters for letter in word):
        print("🎉 Congratulations! You guessed the word:", word)
        break
    
    # Get player guess
    guess = input("Guess a letter: ").upper()
    
    # Validate input
    if len(guess) != 1 or not guess.isalpha():
        print("Please enter a single letter!")
        continue
    
    if guess in guessed_letters or guess in wrong_guesses:
        print("You already guessed that letter!")
        continue
    
    # Check if guess is correct
    if guess in word:
        guessed_letters.add(guess)
        print(f"✅ Good guess! '{guess}' is in the word!")
    else:
        wrong_guesses.add(guess)
        tries_left -= 1
        print(f"❌ Sorry, '{guess}' is not in the word.")
    
    print()

# Game over
if tries_left == 0:
    print(display_hangman(0))
    print(f"😢 Game Over! The word was: {word}")`,
    howItWorks: [
      "We use a set to store guessed letters (sets automatically prevent duplicates)",
      "The display_word() function shows underscores for unguessed letters",
      "String methods like .upper() and .isalpha() help validate input",
      "The all() function checks if every letter in the word has been guessed",
    ],
    challenges: [
      "Add categories (animals, countries, foods) for word selection",
      "Create a hint system that reveals a random letter",
      "Add a two-player mode where one player enters the word",
      "Keep track of wins and losses with a score counter",
    ],
    trinketLink: "https://trinket.io/python",
  },
  {
    id: "dice-roller",
    title: "Dice Rolling Simulator",
    emoji: "🎲",
    description:
      "Roll virtual dice and see the results! Perfect for board games or just for fun.",
    difficulty: "Beginner",
    time: "15 min",
    skills: ["Random", "Loops", "Input/Output", "Basic Math"],
    preview:
      "Simulate rolling dice with different numbers of sides. Great introduction to random numbers!",
    code: `import random

def roll_dice(sides, num_dice):
    """Roll dice and return results"""
    results = []
    for i in range(num_dice):
        roll = random.randint(1, sides)
        results.append(roll)
    return results

def display_dice(number):
    """Display dice as ASCII art for numbers 1-6"""
    dice_art = {
        1: [
            "┌─────────┐",
            "│         │",
            "│    ●    │",
            "│         │",
            "└─────────┘"
        ],
        2: [
            "┌─────────┐",
            "│  ●      │",
            "│         │",
            "│      ●  │",
            "└─────────┘"
        ],
        3: [
            "┌─────────┐",
            "│  ●      │",
            "│    ●    │",
            "│      ●  │",
            "└─────────┘"
        ],
        4: [
            "┌─────────┐",
            "│  ●   ●  │",
            "│         │",
            "│  ●   ●  │",
            "└─────────┘"
        ],
        5: [
            "┌─────────┐",
            "│  ●   ●  │",
            "│    ●    │",
            "│  ●   ●  │",
            "└─────────┘"
        ],
        6: [
            "┌─────────┐",
            "│  ●   ●  │",
            "│  ●   ●  │",
            "│  ●   ●  │",
            "└─────────┘"
        ]
    }
    return dice_art.get(number, [f"[ {number} ]"])

print("🎲 Welcome to the Dice Rolling Simulator!")
print("Roll dice with any number of sides!\\n")

# Main game loop
while True:
    # Get number of dice
    try:
        num_dice = int(input("How many dice do you want to roll? (1-10): "))
        if num_dice < 1 or num_dice > 10:
            print("Please enter a number between 1 and 10!")
            continue
    except ValueError:
        print("Please enter a valid number!")
        continue
    
    # Get number of sides
    try:
        sides = int(input("How many sides should each die have? (2-20): "))
        if sides < 2 or sides > 20:
            print("Please enter a number between 2 and 20!")
            continue
    except ValueError:
        print("Please enter a valid number!")
        continue
    
    # Roll the dice
    print(f"\\n🎲 Rolling {num_dice} dice with {sides} sides...\\n")
    results = roll_dice(sides, num_dice)
    
    # Display results
    if sides <= 6 and num_dice <= 3:
        # Show ASCII art for standard dice
        for i, result in enumerate(results, 1):
            print(f"Die {i}:")
            for line in display_dice(result):
                print(line)
            print()
    else:
        # Show simple results for other dice
        for i, result in enumerate(results, 1):
            print(f"Die {i}: {result}")
        print()
    
    # Show total
    total = sum(results)
    print(f"Total: {total}")
    print(f"Average: {total / len(results):.1f}")
    
    # Ask to roll again
    again = input("\\nRoll again? (yes/no): ").lower()
    if again not in ['yes', 'y']:
        print("Thanks for playing! 🎲")
        break
    print()`,
    howItWorks: [
      "The random.randint() function generates random numbers between 1 and the number of sides",
      "We use a loop to roll multiple dice and store results in a list",
      "ASCII art dictionary displays visual dice for standard 6-sided dice",
      "The sum() function adds up all dice results to show the total",
    ],
    challenges: [
      "Add statistics tracking (highest roll, lowest roll, average)",
      "Create preset options (2d6 for board games, 1d20 for RPGs)",
      "Add colored output for different dice results",
      "Create a probability calculator showing chances of rolling certain numbers",
    ],
    trinketLink: "https://trinket.io/python",
  },
  {
    id: "mad-libs",
    title: "Mad Libs Generator",
    emoji: "📖",
    description:
      "Create hilarious stories by filling in the blanks with random words!",
    difficulty: "Beginner",
    time: "20 min",
    skills: ["Strings", "Input/Output", "String Formatting", "Lists"],
    preview:
      "Fill in words to create funny stories. Learn about string manipulation and user input!",
    code: `print("📖 Welcome to Mad Libs!")
print("Fill in the words to create a funny story!\\n")

# Story templates
stories = [
    {
        "title": "The Crazy Adventure",
        "prompts": [
            ("adjective", "Adjective (describing word)"),
            ("noun", "Noun (person, place, or thing)"),
            ("verb", "Verb (action word)"),
            ("adjective2", "Another adjective"),
            ("noun2", "Another noun"),
            ("number", "A number"),
            ("color", "A color"),
            ("animal", "An animal"),
        ],
        "template": "Once upon a time, there was a {adjective} {noun} who loved to {verb}.\\nOne day, they found a {adjective2} {noun2} that could grant {number} wishes!\\nThe {noun} wished for a {color} {animal} and they lived happily ever after!"
    },
    {
        "title": "The School Day",
        "prompts": [
            ("name", "A person's name"),
            ("adjective", "Adjective"),
            ("noun", "Noun"),
            ("verb", "Verb ending in -ing"),
            ("food", "A type of food"),
            ("place", "A place"),
            ("animal", "An animal"),
            ("number", "A number"),
        ],
        "template": "Today at school, {name} brought a {adjective} {noun} for show and tell.\\nEveryone was {verb} with excitement! For lunch, we had {food}.\\nAfter school, we went to the {place} and saw {number} {animal}s!"
    },
    {
        "title": "The Superhero",
        "prompts": [
            ("adjective", "Adjective"),
            ("noun", "Noun"),
            ("superpower", "A superpower"),
            ("verb", "Verb"),
            ("place", "A place"),
            ("villain", "A villain name"),
            ("adjective2", "Another adjective"),
            ("object", "An object"),
        ],
        "template": "Meet the {adjective} {noun}, the newest superhero in town!\\nTheir superpower is {superpower}, which helps them {verb} really fast.\\nThey protect {place} from the evil {villain} using their {adjective2} {object}!"
    }
]

# Choose a story
print("Choose a story:")
for i, story in enumerate(stories, 1):
    print(f"{i}. {story['title']}")

while True:
    try:
        choice = int(input("\\nEnter story number: "))
        if 1 <= choice <= len(stories):
            selected_story = stories[choice - 1]
            break
        else:
            print(f"Please enter a number between 1 and {len(stories)}")
    except ValueError:
        print("Please enter a valid number!")

print(f"\\nYou chose: {selected_story['title']}")
print("Let's fill in the blanks!\\n")

# Collect words from user
words = {}
for key, prompt in selected_story['prompts']:
    word = input(f"Enter {prompt}: ")
    words[key] = word

# Generate the story
print("\\n" + "="*50)
print("HERE'S YOUR STORY!")
print("="*50)
print()
print(selected_story['template'].format(**words))
print()
print("="*50)

# Ask to play again
play_again = input("\\nCreate another story? (yes/no): ").lower()
if play_again in ['yes', 'y']:
    print("\\nGreat! Run the program again to play!")
else:
    print("Thanks for playing! 📖")`,
    howItWorks: [
      "Stories are stored as dictionaries with prompts and templates",
      "We use a list to store multiple story options for variety",
      "The .format() method fills in placeholders in the template with user words",
      "Input validation ensures users choose valid story numbers",
    ],
    challenges: [
      "Add 5 more story templates with different themes",
      "Save completed stories to a text file",
      "Add a random story mode that picks a story automatically",
      "Create themed story packs (holiday, space, underwater)",
    ],
    trinketLink: "https://trinket.io/python",
  },
  {
    id: "quiz-game",
    title: "Simple Quiz Game",
    emoji: "❓",
    description: "Test your knowledge with a fun multiple-choice quiz!",
    difficulty: "Beginner",
    time: "25 min",
    skills: ["Lists", "Dictionaries", "Conditionals", "Score Tracking"],
    preview:
      "Answer questions and track your score. Perfect for learning about data structures!",
    code: `print("❓ Welcome to the Quiz Game!")
print("Answer these questions and see how many you get right!\\n")

# Quiz questions
questions = [
    {
        "question": "What is the capital of France?",
        "options": ["A) London", "B) Berlin", "C) Paris", "D) Madrid"],
        "answer": "C"
    },
    {
        "question": "What is 7 x 8?",
        "options": ["A) 54", "B) 56", "C) 64", "D) 48"],
        "answer": "B"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["A) Venus", "B) Mars", "C) Jupiter", "D) Saturn"],
        "answer": "B"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": ["A) Atlantic", "B) Indian", "C) Arctic", "D) Pacific"],
        "answer": "D"
    },
    {
        "question": "How many continents are there?",
        "options": ["A) 5", "B) 6", "C) 7", "D) 8"],
        "answer": "C"
    },
    {
        "question": "What is the fastest land animal?",
        "options": ["A) Lion", "B) Cheetah", "C) Horse", "D) Gazelle"],
        "answer": "B"
    },
    {
        "question": "Which programming language are you learning?",
        "options": ["A) Java", "B) C++", "C) Python", "D) JavaScript"],
        "answer": "C"
    },
    {
        "question": "How many sides does a hexagon have?",
        "options": ["A) 5", "B) 6", "C) 7", "D) 8"],
        "answer": "B"
    }
]

# Game variables
score = 0
total_questions = len(questions)

# Ask each question
for i, q in enumerate(questions, 1):
    print(f"Question {i} of {total_questions}")
    print(q["question"])
    
    # Display options
    for option in q["options"]:
        print(option)
    
    # Get answer
    while True:
        answer = input("\\nYour answer (A/B/C/D): ").upper()
        if answer in ['A', 'B', 'C', 'D']:
            break
        print("Please enter A, B, C, or D")
    
    # Check answer
    if answer == q["answer"]:
        print("✅ Correct!\\n")
        score += 1
    else:
        correct_option = [opt for opt in q["options"] if opt.startswith(q["answer"])][0]
        print(f"❌ Wrong! The correct answer was: {correct_option}\\n")
    
    # Show progress
    print(f"Current score: {score}/{i}")
    print("-" * 50)
    print()

# Final results
print("="*50)
print("QUIZ COMPLETE!")
print("="*50)
print(f"\\nYour final score: {score}/{total_questions}")

# Calculate percentage
percentage = (score / total_questions) * 100
print(f"Percentage: {percentage:.1f}%")

# Give feedback based on score
if percentage == 100:
    print("\\n🏆 Perfect score! You're a genius!")
elif percentage >= 80:
    print("\\n🌟 Excellent work! You really know your stuff!")
elif percentage >= 60:
    print("\\n👍 Good job! Keep learning!")
elif percentage >= 40:
    print("\\n📚 Not bad! Study a bit more and try again!")
else:
    print("\\n💪 Keep practicing! You'll do better next time!")`,
    howItWorks: [
      "Questions are stored as dictionaries inside a list for easy organization",
      "We use enumerate() to track question numbers while looping",
      "Conditionals check if the user's answer matches the correct answer",
      "Score tracking uses a simple counter that increments for correct answers",
    ],
    challenges: [
      "Add different quiz categories (Math, Science, History)",
      "Create a timer for each question",
      "Add a hint system that costs points",
      "Save high scores to a file and display leaderboard",
    ],
    trinketLink: "https://trinket.io/python",
  },
  {
    id: "fortune-teller",
    title: "Fortune Teller",
    emoji: "🔮",
    description:
      "Ask a question and receive a mystical answer from the fortune teller!",
    difficulty: "Beginner",
    time: "15 min",
    skills: ["Random", "Lists", "Input/Output", "String Formatting"],
    preview:
      "A fun magic 8-ball style game that gives random fortunes. Great for learning random selection!",
    code: `import random
import time

print("🔮 Welcome to the Mystical Fortune Teller! 🔮")
print("Ask me any yes/no question and I will reveal your fortune...\\n")

# Fortune responses
fortunes = [
    # Positive responses
    "✨ Yes, definitely!",
    "🌟 It is certain!",
    "💫 Without a doubt!",
    "⭐ You may rely on it!",
    "🎯 As I see it, yes!",
    "🌈 Most likely!",
    "✅ Outlook good!",
    "👍 Signs point to yes!",
    
    # Uncertain responses
    "🤔 Reply hazy, try again...",
    "💭 Ask again later...",
    "🌙 Better not tell you now...",
    "🔮 Cannot predict now...",
    "']>; Concentrate and ask again...",
    
    # Negative responses
    "❌ Don't count on it.",
    "🚫 My reply is no.",
    "⛔ My sources say no.",
    "👎 Outlook not so good.",
    "😬 Very doubtful.",
]

# Special fortunes for fun
special_fortunes = {
    "will i be rich": "💰 Money is coming your way... maybe!",
    "will i be famous": "🌟 Your star will shine bright!",
    "do you like pizza": "🍕 Who doesn't love pizza?!",
    "are you real": "🤖 I'm as real as you want me to be!",
    "what is the meaning of life": "🌍 42... or maybe just be kind to others!",
}

def get_fortune(question):
    """Get a fortune based on the question"""
    # Check for special questions
    question_lower = question.lower().strip()
    for key, special_fortune in special_fortunes.items():
        if key in question_lower:
            return special_fortune
    
    # Return random fortune
    return random.choice(fortunes)

def display_thinking():
    """Show thinking animation"""
    print("\\n🔮 Consulting the mystical forces", end="")
    for _ in range(3):
        time.sleep(0.5)
        print(".", end="", flush=True)
    print("\\n")

# Main game loop
while True:
    # Get question from user
    question = input("Ask your question (or type 'quit' to exit): ").strip()
    
    # Check if user wants to quit
    if question.lower() in ['quit', 'exit', 'bye']:
        print("\\n🔮 The fortune teller bids you farewell! May fortune smile upon you! 🔮")
        break
    
    # Validate question
    if not question:
        print("You must ask a question!")
        continue
    
    if not question.endswith('?'):
        print("Please ask a proper question with a question mark!")
        continue
    
    # Show thinking animation
    display_thinking()
    
    # Get and display fortune
    fortune = get_fortune(question)
    print(f"🔮 {fortune} 🔮\\n")
    print("-" * 50)
    print()`,
    howItWorks: [
      "A list stores all possible fortune responses for random selection",
      "The random.choice() function picks a random fortune from the list",
      "A dictionary stores special responses for specific questions",
      "The time.sleep() function creates a dramatic pause before revealing the fortune",
    ],
    challenges: [
      "Add fortune categories (love, career, friendship)",
      "Create a fortune history that shows past questions and answers",
      "Add ASCII art of a crystal ball or mystical symbols",
      "Make fortunes more specific based on keywords in the question",
    ],
    trinketLink: "https://trinket.io/python",
  },
  {
    id: "snake",
    title: "Snake Game",
    emoji: "🐍",
    description:
      "Control the snake to eat food and grow longer. Don't hit the walls or yourself!",
    difficulty: "Intermediate",
    time: "45 min",
    skills: [
      "Turtle Graphics",
      "Classes",
      "Key Bindings",
      "Collision Detection",
    ],
    preview:
      "Classic arcade game using turtle graphics. Eat food, grow longer, and avoid crashing!",
    code: `import turtle
import random
import time

# Screen setup
screen = turtle.Screen()
screen.title("🐍 Snake Game")
screen.bgcolor("black")
screen.setup(width=600, height=600)
screen.tracer(0)  # Turn off automatic screen updates

# Snake head
head = turtle.Turtle()
head.shape("square")
head.color("lime")
head.penup()
head.goto(0, 0)
head.direction = "stop"

# Food
food = turtle.Turtle()
food.shape("circle")
food.color("red")
food.penup()
food.goto(0, 100)

# Snake body segments
segments = []

# Score
score = 0
high_score = 0

# Score display
score_display = turtle.Turtle()
score_display.speed(0)
score_display.color("white")
score_display.penup()
score_display.hideturtle()
score_display.goto(0, 260)
score_display.write(f"Score: {score}  High Score: {high_score}", 
                    align="center", font=("Arial", 16, "normal"))

# Movement functions
def go_up():
    if head.direction != "down":
        head.direction = "up"

def go_down():
    if head.direction != "up":
        head.direction = "down"

def go_left():
    if head.direction != "right":
        head.direction = "left"

def go_right():
    if head.direction != "left":
        head.direction = "right"

def move():
    if head.direction == "up":
        y = head.ycor()
        head.sety(y + 20)
    if head.direction == "down":
        y = head.ycor()
        head.sety(y - 20)
    if head.direction == "left":
        x = head.xcor()
        head.setx(x - 20)
    if head.direction == "right":
        x = head.xcor()
        head.setx(x + 20)

# Keyboard bindings
screen.listen()
screen.onkey(go_up, "Up")
screen.onkey(go_down, "Down")
screen.onkey(go_left, "Left")
screen.onkey(go_right, "Right")

# Main game loop
while True:
    screen.update()
    
    # Check for collision with border
    if head.xcor() > 290 or head.xcor() < -290 or head.ycor() > 290 or head.ycor() < -290:
        time.sleep(1)
        head.goto(0, 0)
        head.direction = "stop"
        
        # Hide segments
        for segment in segments:
            segment.goto(1000, 1000)
        segments.clear()
        
        # Reset score
        score = 0
        score_display.clear()
        score_display.write(f"Score: {score}  High Score: {high_score}", 
                          align="center", font=("Arial", 16, "normal"))
    
    # Check for collision with food
    if head.distance(food) < 20:
        # Move food to random position
        x = random.randint(-270, 270)
        y = random.randint(-270, 270)
        food.goto(x, y)
        
        # Add a segment
        new_segment = turtle.Turtle()
        new_segment.shape("square")
        new_segment.color("lightgreen")
        new_segment.penup()
        segments.append(new_segment)
        
        # Increase score
        score += 10
        if score > high_score:
            high_score = score
        score_display.clear()
        score_display.write(f"Score: {score}  High Score: {high_score}", 
                          align="center", font=("Arial", 16, "normal"))
    
    # Move the segments in reverse order
    for index in range(len(segments) - 1, 0, -1):
        x = segments[index - 1].xcor()
        y = segments[index - 1].ycor()
        segments[index].goto(x, y)
    
    # Move segment 0 to where the head is
    if len(segments) > 0:
        x = head.xcor()
        y = head.ycor()
        segments[0].goto(x, y)
    
    move()
    
    # Check for collision with body
    for segment in segments:
        if segment.distance(head) < 20:
            time.sleep(1)
            head.goto(0, 0)
            head.direction = "stop"
            
            # Hide segments
            for segment in segments:
                segment.goto(1000, 1000)
            segments.clear()
            
            # Reset score
            score = 0
            score_display.clear()
            score_display.write(f"Score: {score}  High Score: {high_score}", 
                              align="center", font=("Arial", 16, "normal"))
    
    time.sleep(0.1)

screen.mainloop()`,
    howItWorks: [
      "Turtle graphics creates the game window and all visual elements",
      "The snake is made of turtle objects - one for the head and one for each body segment",
      "Key bindings (screen.onkey) connect arrow keys to movement functions",
      "Collision detection uses the distance() method to check if objects are touching",
      "The game loop updates positions, checks collisions, and redraws the screen",
    ],
    challenges: [
      "Add different difficulty levels (change speed)",
      "Create obstacles or walls in the middle of the screen",
      "Add special food that gives bonus points",
      "Make the snake change colors as it grows",
      "Add a pause feature with the spacebar",
    ],
    trinketLink: "https://trinket.io/python",
  },
  {
    id: "pong",
    title: "Pong Game",
    emoji: "🏓",
    description: "Classic two-player paddle game. First to 5 points wins!",
    difficulty: "Intermediate",
    time: "50 min",
    skills: [
      "Turtle Graphics",
      "Game Loop",
      "Collision Detection",
      "Score Tracking",
    ],
    preview:
      "Recreate the classic Pong game with two paddles and a bouncing ball!",
    code: `import turtle

# Screen setup
screen = turtle.Screen()
screen.title("🏓 Pong Game")
screen.bgcolor("black")
screen.setup(width=800, height=600)
screen.tracer(0)

# Left paddle
left_paddle = turtle.Turtle()
left_paddle.speed(0)
left_paddle.shape("square")
left_paddle.color("white")
left_paddle.shapesize(stretch_wid=5, stretch_len=1)
left_paddle.penup()
left_paddle.goto(-350, 0)

# Right paddle
right_paddle = turtle.Turtle()
right_paddle.speed(0)
right_paddle.shape("square")
right_paddle.color("white")
right_paddle.shapesize(stretch_wid=5, stretch_len=1)
right_paddle.penup()
right_paddle.goto(350, 0)

# Ball
ball = turtle.Turtle()
ball.speed(0)
ball.shape("circle")
ball.color("white")
ball.penup()
ball.goto(0, 0)
ball.dx = 0.2  # Ball movement in x direction
ball.dy = 0.2  # Ball movement in y direction

# Score
score_left = 0
score_right = 0

# Score display
score_display = turtle.Turtle()
score_display.speed(0)
score_display.color("white")
score_display.penup()
score_display.hideturtle()
score_display.goto(0, 260)
score_display.write(f"Player 1: {score_left}  Player 2: {score_right}", 
                   align="center", font=("Arial", 20, "normal"))

# Paddle movement functions
def left_paddle_up():
    y = left_paddle.ycor()
    if y < 250:
        left_paddle.sety(y + 20)

def left_paddle_down():
    y = left_paddle.ycor()
    if y > -240:
        left_paddle.sety(y - 20)

def right_paddle_up():
    y = right_paddle.ycor()
    if y < 250:
        right_paddle.sety(y + 20)

def right_paddle_down():
    y = right_paddle.ycor()
    if y > -240:
        right_paddle.sety(y - 20)

# Keyboard bindings
screen.listen()
screen.onkey(left_paddle_up, "w")
screen.onkey(left_paddle_down, "s")
screen.onkey(right_paddle_up, "Up")
screen.onkey(right_paddle_down, "Down")

# Main game loop
while True:
    screen.update()
    
    # Move the ball
    ball.setx(ball.xcor() + ball.dx)
    ball.sety(ball.ycor() + ball.dy)
    
    # Border collision (top and bottom)
    if ball.ycor() > 290:
        ball.sety(290)
        ball.dy *= -1  # Reverse direction
    
    if ball.ycor() < -290:
        ball.sety(-290)
        ball.dy *= -1
    
    # Ball goes off screen (scoring)
    if ball.xcor() > 390:
        ball.goto(0, 0)
        ball.dx *= -1
        score_left += 1
        score_display.clear()
        score_display.write(f"Player 1: {score_left}  Player 2: {score_right}", 
                          align="center", font=("Arial", 20, "normal"))
    
    if ball.xcor() < -390:
        ball.goto(0, 0)
        ball.dx *= -1
        score_right += 1
        score_display.clear()
        score_display.write(f"Player 1: {score_left}  Player 2: {score_right}", 
                          align="center", font=("Arial", 20, "normal"))
    
    # Paddle collision
    if (ball.xcor() > 340 and ball.xcor() < 350) and \\
       (ball.ycor() < right_paddle.ycor() + 50 and ball.ycor() > right_paddle.ycor() - 50):
        ball.setx(340)
        ball.dx *= -1
    
    if (ball.xcor() < -340 and ball.xcor() > -350) and \\
       (ball.ycor() < left_paddle.ycor() + 50 and ball.ycor() > left_paddle.ycor() - 50):
        ball.setx(-340)
        ball.dx *= -1
    
    # Check for winner
    if score_left == 5:
        score_display.goto(0, 0)
        score_display.write("Player 1 Wins! 🏆", align="center", font=("Arial", 30, "bold"))
        break
    
    if score_right == 5:
        score_display.goto(0, 0)
        score_display.write("Player 2 Wins! 🏆", align="center", font=("Arial", 30, "bold"))
        break

screen.mainloop()`,
    howItWorks: [
      "Two paddles are created using turtle objects with stretched square shapes",
      "The ball moves continuously by updating its x and y coordinates (dx and dy)",
      "When the ball hits a wall or paddle, we reverse its direction by multiplying dx or dy by -1",
      "Collision detection checks if the ball's position overlaps with paddle positions",
      "Scores update when the ball goes past a paddle off the screen",
    ],
    challenges: [
      "Add a single-player mode with AI opponent",
      "Increase ball speed after each paddle hit",
      "Add sound effects for collisions and scoring",
      'Create a "first to 10" mode or custom win conditions',
      "Add a center line and make the ball flash when scored",
    ],
    trinketLink: "https://trinket.io/python",
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    emoji: "⭕",
    description:
      "Play Tic-Tac-Toe with a graphical interface. Can you beat the computer?",
    difficulty: "Intermediate",
    time: "40 min",
    skills: ["Turtle Graphics", "Lists", "Functions", "Game Logic"],
    preview:
      "Classic Tic-Tac-Toe game with a nice graphical interface using turtle!",
    code: `import turtle

# Screen setup
screen = turtle.Screen()
screen.title("⭕ Tic-Tac-Toe")
screen.bgcolor("lightblue")
screen.setup(width=600, height=600)
screen.tracer(0)

# Drawing turtle
drawer = turtle.Turtle()
drawer.speed(0)
drawer.hideturtle()

# Game state
board = [" " for _ in range(9)]
current_player = "X"
game_over = False

def draw_board():
    """Draw the tic-tac-toe grid"""
    drawer.clear()
    drawer.pensize(5)
    drawer.color("black")
    
    # Vertical lines
    drawer.penup()
    drawer.goto(-100, 300)
    drawer.pendown()
    drawer.goto(-100, -300)
    
    drawer.penup()
    drawer.goto(100, 300)
    drawer.pendown()
    drawer.goto(100, -300)
    
    # Horizontal lines
    drawer.penup()
    drawer.goto(-300, 100)
    drawer.pendown()
    drawer.goto(300, 100)
    
    drawer.penup()
    drawer.goto(-300, -100)
    drawer.pendown()
    drawer.goto(300, -100)

def draw_x(x, y):
    """Draw an X at the given position"""
    drawer.penup()
    drawer.goto(x - 50, y - 50)
    drawer.pendown()
    drawer.color("blue")
    drawer.pensize(10)
    drawer.goto(x + 50, y + 50)
    
    drawer.penup()
    drawer.goto(x + 50, y - 50)
    drawer.pendown()
    drawer.goto(x - 50, y + 50)

def draw_o(x, y):
    """Draw an O at the given position"""
    drawer.penup()
    drawer.goto(x, y - 60)
    drawer.pendown()
    drawer.color("red")
    drawer.pensize(10)
    drawer.circle(60)

def get_square_center(square):
    """Get the center coordinates of a square (0-8)"""
    row = square // 3
    col = square % 3
    
    x = -200 + col * 200
    y = 200 - row * 200
    
    return x, y

def draw_marks():
    """Draw all X's and O's on the board"""
    for i, mark in enumerate(board):
        if mark != " ":
            x, y = get_square_center(i)
            if mark == "X":
                draw_x(x, y)
            else:
                draw_o(x, y)

def check_winner():
    """Check if there's a winner"""
    # Winning combinations
    wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
        [0, 4, 8], [2, 4, 6]              # Diagonals
    ]
    
    for combo in wins:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] != " ":
            return board[combo[0]]
    
    # Check for tie
    if " " not in board:
        return "Tie"
    
    return None

def display_message(message):
    """Display a message on the screen"""
    drawer.penup()
    drawer.goto(0, -350)
    drawer.color("black")
    drawer.write(message, align="center", font=("Arial", 24, "bold"))

def click_handler(x, y):
    """Handle mouse clicks"""
    global current_player, game_over
    
    if game_over:
        return
    
    # Determine which square was clicked
    if x < -100:
        col = 0
    elif x < 100:
        col = 1
    else:
        col = 2
    
    if y > 100:
        row = 0
    elif y > -100:
        row = 1
    else:
        row = 2
    
    square = row * 3 + col
    
    # Make move if square is empty
    if board[square] == " ":
        board[square] = current_player
        draw_board()
        draw_marks()
        
        # Check for winner
        winner = check_winner()
        if winner:
            game_over = True
            if winner == "Tie":
                display_message("It's a Tie! 🤝")
            else:
                display_message(f"Player {winner} Wins! 🏆")
        else:
            # Switch player
            current_player = "O" if current_player == "X" else "X"
            display_message(f"Player {current_player}'s turn")
    
    screen.update()

# Initial draw
draw_board()
display_message("Player X's turn - Click to play!")
screen.update()

# Set up click handler
screen.onclick(click_handler)

screen.mainloop()`,
    howItWorks: [
      "The board is represented as a list of 9 spaces (indices 0-8)",
      "Mouse clicks are converted to board positions using coordinate math",
      "The check_winner() function tests all possible winning combinations",
      "Turtle graphics draws X's and O's at calculated positions on the grid",
      "The game alternates between players and checks for a winner after each move",
    ],
    challenges: [
      "Add an AI opponent that makes random moves",
      'Create a "smart" AI that tries to win or block',
      "Add a score counter for multiple games",
      "Highlight the winning combination when someone wins",
      'Add a "Play Again" button to reset the game',
    ],
    trinketLink: "https://trinket.io/python",
  },
];
