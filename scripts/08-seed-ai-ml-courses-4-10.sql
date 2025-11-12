-- Seed Courses 4-10 for AI & Machine Learning Module
-- This script adds lessons 15-21 to the AI-ML course
-- Course ID: 38bc4209-9713-447e-af77-73bec0957f7a

-- Course 4: Pattern Detective (order_index: 15)
INSERT INTO lessons (
  title, description, content, difficulty_level, order_index, 
  is_premium, requires_trinket, course_id, starter_code, solution_code
) VALUES (
  'Pattern Detective (Find the Hidden Clues!)',
  'Learn how AI finds patterns in everything and build an Animal Guessing Game!',
  '# Pattern Detective (Find the Hidden Clues!) 🔍

## What You''ll Learn

- AI finds patterns in everything
- How to spot patterns like a detective
- Making the computer guess based on clues

## Why Patterns Matter

Think about how you recognize things:
- You know a dog is a dog because you''ve seen patterns: four legs, fur, tail, barks
- You know your friend''s handwriting because you recognize the pattern of their letters
- You know what comes next in a song because you recognize the pattern

**AI works the same way!** It finds patterns in data to make guesses and decisions.

## What is Pattern Recognition?

Pattern recognition is when a computer (or AI) looks at information and finds:
- **Similarities** - What things have in common
- **Differences** - What makes things unique
- **Rules** - What patterns always happen together

### Real-World Examples

**Netflix Recommendations:**
- Pattern: "People who liked Stranger Things also liked..."
- AI finds: Similar viewing patterns
- Result: Suggests shows you might like

**Email Spam Filter:**
- Pattern: Spam emails often have certain words
- AI finds: Words like "free", "click now", lots of exclamation marks
- Result: Moves spam to junk folder

**Face Recognition:**
- Pattern: Your face has specific features arranged in a certain way
- AI finds: The pattern of your eyes, nose, mouth
- Result: Unlocks your phone!

## Your Project: Animal Guessing Game 🐾

You''re going to build a game where the computer asks yes/no questions and guesses the animal you''re thinking of!

### How It Works

1. You think of an animal
2. Computer asks questions: "Does it fly?", "Does it have fur?"
3. Based on your answers, computer narrows down possibilities
4. Computer guesses your animal!

## Building Your Animal Guessing Game

### Step 1: Plan Your Questions

Think about what makes animals different:
- Where they live (land, water, air)
- What they eat (meat, plants, both)
- Physical features (fur, scales, feathers)
- Size (big, small)
- Behavior (flies, swims, runs)

### Step 2: Create Animal Database

```python
animals = {
    "dog": {
        "flies": False,
        "has_fur": True,
        "lives_in_water": False
    }
}
```

## Key Takeaways 🎓

✅ **Patterns are everywhere** - AI finds them in data
✅ **Patterns help make predictions** - "If this, then probably that"
✅ **More examples = better patterns** - AI needs lots of data
✅ **You built a pattern-finding game!** - Animal Guessing Game uses decision trees',
  'intermediate',
  15,
  false,
  true,
  '38bc4209-9713-447e-af77-73bec0957f7a',
  '```python
# Animal Guessing Game - Starter Code
animals = {
    "dog": {"flies": False, "has_fur": True, "lives_in_water": False},
    "cat": {"flies": False, "has_fur": True, "lives_in_water": False},
    "bird": {"flies": True, "has_fur": False, "lives_in_water": False},
}

print("🐾 Animal Guessing Game! 🐾")
possible_animals = list(animals.keys())

# TODO: Add questions and guessing logic!
```',
  '✅ PROJECT COMPLETION CHECKLIST

BASIC REQUIREMENTS:
□ Created animal database with at least 8 animals
□ Implemented at least 5 different questions
□ Game asks questions until it can guess
□ Game makes a final guess

🎓 KEY LEARNINGS
✅ How pattern recognition works
✅ How decision trees help narrow down possibilities
✅ How AI uses questions to find patterns'
);

-- Course 5: Prediction Machine (order_index: 16)
INSERT INTO lessons (
  title, description, content, difficulty_level, order_index, 
  is_premium, requires_trinket, course_id, starter_code, solution_code
) VALUES (
  'Prediction Machine (Look into the Future!)',
  'Learn how AI predicts what might happen next and build a Weather Guesser!',
  '# Prediction Machine (Look into the Future!) 🔮

## What You''ll Learn

- How AI predicts what might happen next
- Using past information to guess the future
- Why predictions aren''t always right (and that''s okay!)

## What is Prediction?

Prediction is when you use information from the past to guess what will happen in the future.

**Examples:**
- If it rained yesterday and today, it might rain tomorrow
- If you always eat lunch at 12:00, you''ll probably be hungry at 12:00 tomorrow
- If your favorite team won 5 games in a row, they might win the next one

**AI does the same thing!** It looks at patterns from the past to predict the future.

## How AI Makes Predictions

### Step 1: Collect Past Data
```
Weather Data:
- Monday: Sunny, 75°F
- Tuesday: Sunny, 76°F
- Wednesday: Cloudy, 74°F
- Thursday: Rainy, 70°F
- Friday: Rainy, 68°F
```

### Step 2: Find Patterns
```
Pattern: Two rainy days in a row
Pattern: Temperature dropping (74° → 70° → 68°)
Pattern: Clouds came before rain
```

### Step 3: Make Prediction
```
Prediction: Saturday will be rainy, around 66°F
Confidence: 70% (pretty sure, but not 100%)
```

### Step 4: Check if Right
```
Saturday Actual: Rainy, 67°F
Result: Pretty close! Prediction was good!
```

## Your Project: Tomorrow''s Weather Guesser 🌤️

Build a program that predicts tomorrow''s weather based on patterns from the last few days!

### How It Works

1. Collect weather data for the past week
2. Look for patterns (temperature trends, weather sequences)
3. Make a prediction for tomorrow
4. Show confidence level (how sure you are)

## Building Your Weather Predictor

### Step 1: Collect Weather Data

```python
# Past week weather data
weather_data = [
    {"day": "Monday", "weather": "sunny", "temp": 75},
    {"day": "Tuesday", "weather": "sunny", "temp": 76},
    {"day": "Wednesday", "weather": "cloudy", "temp": 74},
    {"day": "Thursday", "weather": "rainy", "temp": 70},
    {"day": "Friday", "weather": "rainy", "temp": 68},
]
```

### Step 2: Find Patterns

```python
# Check temperature trend
temps = [day["temp"] for day in weather_data]
if temps[-1] < temps[-2]:  # Getting colder
    print("Temperature is dropping!")
    
# Check weather pattern
recent_weather = [day["weather"] for day in weather_data[-3:]]
if recent_weather.count("rainy") >= 2:
    print("Lots of rain recently!")
```

### Step 3: Make Prediction

```python
def predict_weather(data):
    # Simple prediction logic
    if data[-1]["weather"] == "rainy" and data[-2]["weather"] == "rainy":
        return "rainy", 70  # 70% confidence
    elif data[-1]["temp"] < data[-2]["temp"]:
        return "cloudy", 60
    else:
        return "sunny", 65
```

## Key Takeaways 🎓

✅ **Predictions use past patterns** - "If this happened before, it might happen again"
✅ **Predictions aren''t perfect** - Weather is unpredictable!
✅ **Confidence matters** - Some predictions are more certain than others
✅ **More data = better predictions** - But still not 100% accurate',
  'intermediate',
  16,
  false,
  true,
  '38bc4209-9713-447e-af77-73bec0957f7a',
  '```python
# Weather Predictor - Starter Code
weather_data = [
    {"day": "Monday", "weather": "sunny", "temp": 75},
    {"day": "Tuesday", "weather": "sunny", "temp": 76},
    {"day": "Wednesday", "weather": "cloudy", "temp": 74},
    {"day": "Thursday", "weather": "rainy", "temp": 70},
    {"day": "Friday", "weather": "rainy", "temp": 68},
]

print("🌤️ Weather Predictor! 🌤️")
print("Analyzing past weather patterns...")

# TODO: Add prediction logic!
# TODO: Calculate confidence level!
# TODO: Display prediction with confidence!
```',
  '✅ PROJECT COMPLETION CHECKLIST

BASIC REQUIREMENTS:
□ Collects weather data for past week
□ Analyzes temperature trends
□ Analyzes weather patterns
□ Makes prediction for tomorrow
□ Shows confidence level

🎓 KEY LEARNINGS
✅ How AI uses past data to predict future
✅ Understanding confidence and uncertainty
✅ Why predictions aren''t always right'
);

-- Course 6: Teaching Computers to Read (order_index: 17)
INSERT INTO lessons (
  title, description, content, difficulty_level, order_index, 
  is_premium, requires_trinket, course_id, starter_code, solution_code
) VALUES (
  'Teaching Computers to Read (Word Detective)',
  'Learn how computers understand words and build an Emoji Translator!',
  '# Teaching Computers to Read (Word Detective) 📖

## What You''ll Learn

- How computers understand words
- Finding keywords in sentences
- Detecting happy, sad, or angry messages

## How Computers Read Text

Computers don''t read like humans do! They look for:
- **Keywords** - Important words that give meaning
- **Patterns** - How words are arranged
- **Emotions** - Words that show feelings

### Example: Finding Emotions

**Sentence:** "I am so happy today! This is amazing!"

**Keywords computers find:**
- "happy" → positive emotion
- "amazing" → positive emotion
- "!" → excitement

**Result:** Computer detects: 😊 Happy/Excited

## Your Project: Emoji Translator 😊😢😠🎉

Build a program that reads sentences and picks the perfect emoji based on the words!

### How It Works

1. Read a sentence
2. Look for emotion words (happy, sad, angry, excited)
3. Count positive vs negative words
4. Pick the best emoji match!

## Building Your Emoji Translator

### Step 1: Create Emotion Word Lists

```python
happy_words = ["happy", "joy", "excited", "great", "awesome", "love"]
sad_words = ["sad", "unhappy", "cry", "disappointed", "upset"]
angry_words = ["angry", "mad", "furious", "annoyed", "hate"]
excited_words = ["wow", "amazing", "incredible", "fantastic"]
```

### Step 2: Count Emotion Words

```python
def find_emotion(sentence):
    sentence_lower = sentence.lower()
    happy_count = sum(1 for word in happy_words if word in sentence_lower)
    sad_count = sum(1 for word in sad_words if word in sentence_lower)
    # ... count others
```

### Step 3: Pick Best Emoji

```python
if happy_count > sad_count and happy_count > angry_count:
    return "😊"
elif sad_count > happy_count:
    return "😢"
elif angry_count > 0:
    return "😠"
else:
    return "😐"
```

## Key Takeaways 🎓

✅ **Computers find keywords** - They look for important words
✅ **Patterns matter** - Word combinations give meaning
✅ **Emotions can be detected** - From word choices
✅ **You built a text analyzer!** - Emoji Translator reads emotions',
  'intermediate',
  17,
  false,
  true,
  '38bc4209-9713-447e-af77-73bec0957f7a',
  '```python
# Emoji Translator - Starter Code
happy_words = ["happy", "joy", "excited", "great", "awesome", "love", "wonderful"]
sad_words = ["sad", "unhappy", "cry", "disappointed", "upset", "terrible"]
angry_words = ["angry", "mad", "furious", "annoyed", "hate"]
excited_words = ["wow", "amazing", "incredible", "fantastic", "yay"]

print("😊 Emoji Translator! 😊")
sentence = input("Enter a sentence: ")

# TODO: Count emotion words
# TODO: Pick the best emoji
# TODO: Display result!
```',
  '✅ PROJECT COMPLETION CHECKLIST

BASIC REQUIREMENTS:
□ Created emotion word lists (happy, sad, angry, excited)
□ Counts words in sentence
□ Picks best matching emoji
□ Handles multiple emotions

🎓 KEY LEARNINGS
✅ How computers analyze text
✅ Finding keywords and patterns
✅ Detecting emotions from words'
);

-- Course 7: Build Your Own Chatbot Friend (order_index: 18)
INSERT INTO lessons (
  title, description, content, difficulty_level, order_index, 
  is_premium, requires_trinket, course_id, starter_code, solution_code
) VALUES (
  'Build Your Own Chatbot Friend',
  'Learn how chatbots work and build a Quiz Buddy Bot!',
  '# Build Your Own Chatbot Friend 🤖

## What You''ll Learn

- How chatbots work
- Making your bot answer questions
- Teaching it to be helpful and funny

## What is a Chatbot?

A chatbot is a computer program that can have conversations with people!

**Examples:**
- Siri, Alexa, Google Assistant
- Customer service bots on websites
- Game characters that talk to you

## How Chatbots Work

### Simple Chatbot Logic

```python
# Bot looks for keywords in your message
user_message = "Hello, how are you?"

if "hello" in user_message.lower():
    response = "Hi there! I''m doing great!"
elif "how are you" in user_message.lower():
    response = "I''m fantastic! How are you?"
else:
    response = "I don''t understand. Can you rephrase?"
```

## Your Project: Quiz Buddy Bot 📚

Create a friendly chatbot that helps you study by asking quiz questions and giving encouraging messages!

### Features:
- Asks quiz questions
- Checks your answers
- Gives hints (not answers!)
- Encourages you when you''re right
- Helps when you''re stuck

## Building Your Quiz Buddy Bot

### Step 1: Create Quiz Questions

```python
quiz_questions = [
    {
        "question": "What is 2 + 2?",
        "answer": "4",
        "hint": "Think about pairs!"
    },
    {
        "question": "What is the capital of France?",
        "answer": "Paris",
        "hint": "It starts with P and has the Eiffel Tower!"
    }
]
```

### Step 2: Ask Questions and Check Answers

```python
def ask_question(question_data):
    print(question_data["question"])
    user_answer = input("Your answer: ")
    
    if user_answer.lower() == question_data["answer"].lower():
        print("🎉 Correct! Great job!")
        return True
    else:
        print(f"Not quite! Hint: {question_data[''hint'']}")
        return False
```

## Key Takeaways 🎓

✅ **Chatbots use keywords** - They look for important words in messages
✅ **Chatbots can be helpful** - They answer questions and give information
✅ **You built a study buddy!** - Quiz Buddy Bot helps you learn',
  'intermediate',
  18,
  false,
  true,
  '38bc4209-9713-447e-af77-73bec0957f7a',
  '```python
# Quiz Buddy Bot - Starter Code
quiz_questions = [
    {
        "question": "What is 2 + 2?",
        "answer": "4",
        "hint": "Think about pairs!"
    },
    {
        "question": "What is the capital of France?",
        "answer": "Paris",
        "hint": "It starts with P!"
    },
    # TODO: Add more questions!
]

print("🤖 Quiz Buddy Bot! 🤖")
print("I''m here to help you study!")

# TODO: Loop through questions
# TODO: Check answers
# TODO: Give hints and encouragement!
```',
  '✅ PROJECT COMPLETION CHECKLIST

BASIC REQUIREMENTS:
□ Created at least 5 quiz questions
□ Bot asks questions one at a time
□ Checks answers correctly
□ Gives hints when wrong
□ Encourages when right

🎓 KEY LEARNINGS
✅ How chatbots work
✅ Using keywords to understand messages
✅ Creating helpful conversation flows'
);

-- Course 8: Picture Detective (order_index: 19)
INSERT INTO lessons (
  title, description, content, difficulty_level, order_index, 
  is_premium, requires_trinket, course_id, starter_code, solution_code
) VALUES (
  'Picture Detective (Teaching AI to See)',
  'Learn how computers see pictures and build a Color Finder!',
  '# Picture Detective (Teaching AI to See) 🖼️

## What You''ll Learn

- How computers "see" pictures
- Pictures are made of tiny colored dots (pixels!)
- Finding colors and shapes in images

## How Computers See Images

### Pixels: The Building Blocks

Pictures are made of tiny squares called **pixels** (picture elements).

**Example:**
- A small image might be 100 pixels wide × 100 pixels tall = 10,000 pixels
- Each pixel has a color (red, blue, green, etc.)
- Together, pixels form the image you see!

### Color Values

Each pixel has RGB values:
- **R** = Red (0-255)
- **G** = Green (0-255)
- **B** = Blue (0-255)

**Example:**
- Red pixel: R=255, G=0, B=0
- Green pixel: R=0, G=255, B=0
- Blue pixel: R=0, G=0, B=255
- White pixel: R=255, G=255, B=255

## Your Project: Color Finder 🎨

Build a program that looks at a picture and tells you what colors are in it!

### How It Works

1. Load an image
2. Look at each pixel
3. Count how many pixels of each color
4. Show the most common colors!

## Building Your Color Finder

### Step 1: Install PIL (Python Imaging Library)

```python
from PIL import Image

# Open an image
img = Image.open("picture.jpg")
```

### Step 2: Get Pixel Colors

```python
# Get image size
width, height = img.size

# Look at each pixel
for x in range(width):
    for y in range(height):
        pixel = img.getpixel((x, y))
        # pixel is (R, G, B) tuple
```

### Step 3: Count Colors

```python
color_count = {}

for pixel in all_pixels:
    if pixel in color_count:
        color_count[pixel] += 1
    else:
        color_count[pixel] = 1

# Find most common color
most_common = max(color_count, key=color_count.get)
```

## Key Takeaways 🎓

✅ **Images are made of pixels** - Tiny colored squares
✅ **Each pixel has RGB values** - Red, Green, Blue
✅ **Computers analyze pixels** - To understand images
✅ **You built an image analyzer!** - Color Finder detects colors',
  'intermediate',
  19,
  false,
  false,
  '38bc4209-9713-447e-af77-73bec0957f7a',
  '```python
# Color Finder - Starter Code
# Note: This requires PIL library (not available in Trinket)
# Use Python with PIL installed, or try online Python environments

from PIL import Image

# TODO: Load an image
# img = Image.open("your_image.jpg")

# TODO: Get image dimensions
# width, height = img.size

# TODO: Loop through pixels
# TODO: Count colors
# TODO: Find most common colors

print("🎨 Color Finder! 🎨")
print("This project requires PIL library - use Python locally or online IDE!")
```',
  '✅ PROJECT COMPLETION CHECKLIST

BASIC REQUIREMENTS:
□ Successfully loads an image
□ Reads pixel colors
□ Counts color occurrences
□ Displays most common colors
□ Shows color statistics

🎓 KEY LEARNINGS
✅ How images are stored as pixels
✅ Understanding RGB color values
✅ Analyzing images programmatically
✅ Note: This project requires PIL library (not in Trinket)'
);

-- Course 9: Recommendation Robot (order_index: 20)
INSERT INTO lessons (
  title, description, content, difficulty_level, order_index, 
  is_premium, requires_trinket, course_id, starter_code, solution_code
) VALUES (
  'Recommendation Robot (Like Netflix for Your Stuff!)',
  'Learn how recommendation systems work and build a Game Recommender!',
  '# Recommendation Robot (Like Netflix for Your Stuff!) 🎯

## What You''ll Learn

- How YouTube knows what you''ll like
- Finding things similar to what you already love
- Making smart suggestions

## How Recommendation Systems Work

### The Basic Idea

**If you like X, you might also like Y!**

**Examples:**
- If you like action movies → You might like other action movies
- If you like puzzle games → You might like other puzzle games
- If you like chocolate ice cream → You might like chocolate cake

### How It Works

1. **Collect preferences** - What do you like?
2. **Find similarities** - What''s similar to what you like?
3. **Make suggestions** - Recommend similar things!

## Your Project: Game Recommender 🎮

Create a program that suggests games, books, or movies based on what you tell it you like!

### How It Works

1. User rates things they like (games, books, movies)
2. Program finds similar items
3. Program suggests new things based on preferences!

## Building Your Game Recommender

### Step 1: Create Item Database

```python
games = {
    "Minecraft": {"genre": "sandbox", "rating": 5, "multiplayer": True},
    "Fortnite": {"genre": "battle_royale", "rating": 4, "multiplayer": True},
    "Puzzle Quest": {"genre": "puzzle", "rating": 5, "multiplayer": False},
    # Add more games!
}
```

### Step 2: Get User Preferences

```python
user_likes = []
print("Rate these games (1-5):")
for game in games:
    rating = int(input(f"{game}: "))
    if rating >= 4:
        user_likes.append(game)
```

### Step 3: Find Similar Items

```python
def find_similar(liked_game, all_games):
    game_info = all_games[liked_game]
    similar = []
    
    for game_name, game_data in all_games.items():
        if game_name != liked_game:
            # Check if same genre
            if game_data["genre"] == game_info["genre"]:
                similar.append(game_name)
    return similar
```

## Key Takeaways 🎓

✅ **Recommendations use similarities** - "If you like this, try that"
✅ **Preferences matter** - The more you rate, the better suggestions
✅ **You built a recommender!** - Game Recommender suggests based on taste',
  'intermediate',
  20,
  false,
  true,
  '38bc4209-9713-447e-af77-73bec0957f7a',
  '```python
# Game Recommender - Starter Code
games = {
    "Minecraft": {"genre": "sandbox", "multiplayer": True},
    "Fortnite": {"genre": "battle_royale", "multiplayer": True},
    "Puzzle Quest": {"genre": "puzzle", "multiplayer": False},
    # TODO: Add at least 10 more games!
}

print("🎮 Game Recommender! 🎮")
print("Tell me what games you like, and I''ll suggest more!")

user_likes = []
# TODO: Get user ratings
# TODO: Find similar games
# TODO: Make recommendations!
```',
  '✅ PROJECT COMPLETION CHECKLIST

BASIC REQUIREMENTS:
□ Created database with at least 10 games/items
□ Gets user preferences/ratings
□ Finds similar items based on features
□ Makes recommendations
□ Explains why it recommended each item

🎓 KEY LEARNINGS
✅ How recommendation systems work
✅ Finding similarities between items
✅ Using preferences to make suggestions'
);

-- Course 10: Your Big AI Project! (order_index: 21)
INSERT INTO lessons (
  title, description, content, difficulty_level, order_index, 
  is_premium, requires_trinket, course_id, starter_code, solution_code
) VALUES (
  'Your Big AI Project! (Create Something Amazing!)',
  'Put everything together and build your dream AI project!',
  '# Your Big AI Project! (Create Something Amazing!) 🚀

## What You''ll Learn

- Put everything together
- Build YOUR dream AI project
- Show off what you made!

## Choose Your Adventure!

Pick ONE project to build from scratch:

### 1. Study Helper Bot 📚
**What it does:** Chatbot that quizzes you and cheers you on
**Skills used:** Chatbots, text analysis, quiz systems
**Challenge level:** ⭐⭐⭐

### 2. Choose Your Story Game 📖
**What it does:** Adventure game where characters remember what you say
**Skills used:** Pattern recognition, decision trees, memory systems
**Challenge level:** ⭐⭐⭐⭐

### 3. Compliment Generator 💝
**What it does:** AI that makes people smile with nice messages
**Skills used:** Text analysis, emotion detection, pattern matching
**Challenge level:** ⭐⭐⭐

### 4. Music Mood Matcher 🎵
**What it does:** Suggests songs based on how you feel
**Skills used:** Recommendations, emotion detection, pattern matching
**Challenge level:** ⭐⭐⭐⭐

### 5. Your Own Idea! 💡
**What it does:** Whatever you imagine!
**Skills used:** All of them!
**Challenge level:** ⭐⭐⭐⭐⭐

## Project Planning Steps

### Step 1: Choose Your Project
- Which project sounds most fun?
- What skills do you want to use?
- What problem do you want to solve?

### Step 2: Plan It Out
- What features will it have?
- What will users do with it?
- How will it work?

### Step 3: Build It!
- Start with basic features
- Test as you go
- Add cool features

### Step 4: Test & Share
- Test with friends/family
- Fix any bugs
- Show it off!

## Project Requirements

### Must Have:
- ✅ Uses at least 2 AI concepts from this course
- ✅ Works correctly (no major bugs)
- ✅ Has clear instructions for users
- ✅ Something you''re proud of!

### Nice to Have:
- ⭐ Creative and fun
- ⭐ Well-organized code
- ⭐ Helpful comments
- ⭐ Extra features

## Getting Started

### For Study Helper Bot:
```python
# Start with quiz questions
# Add chatbot responses
# Add encouragement messages
```

### For Choose Your Story Game:
```python
# Create story branches
# Add decision points
# Remember player choices
```

### For Compliment Generator:
```python
# Create compliment templates
# Detect user mood
# Generate personalized messages
```

### For Music Mood Matcher:
```python
# Create song database
# Detect user mood
# Match songs to mood
```

## Key Takeaways 🎓

✅ **You can build real AI projects!** - Using everything you learned
✅ **Planning is important** - Think before you code
✅ **Testing matters** - Make sure it works!
✅ **Be creative!** - Add your own ideas
✅ **You''re an AI developer now!** - Congratulations! 🎉',
  'advanced',
  21,
  false,
  true,
  '38bc4209-9713-447e-af77-73bec0957f7a',
  '```python
# Your Big AI Project - Starter Template
# Choose your project and start building!

print("🚀 Welcome to Your Big AI Project! 🚀")
print("Choose what you want to build:")
print("1. Study Helper Bot")
print("2. Choose Your Story Game")
print("3. Compliment Generator")
print("4. Music Mood Matcher")
print("5. Your Own Idea!")

choice = input("Enter your choice (1-5): ")

# TODO: Build your project!
# TODO: Use at least 2 AI concepts
# TODO: Make it awesome!
# TODO: Test it thoroughly!
# TODO: Share it with others!

print("Good luck building your project! You''ve got this! 💪")
```',
  '✅ PROJECT COMPLETION CHECKLIST

PLANNING:
□ Chose a project idea
□ Planned out features
□ Listed required AI concepts
□ Created a timeline

BUILDING:
□ Implemented core features
□ Used at least 2 AI concepts from course
□ Code is organized and commented
□ Tested as you built

TESTING:
□ Tested with friends/family
□ Fixed bugs
□ Works correctly
□ User instructions are clear

SHARING:
□ Ready to show off!
□ Can explain how it works
□ Proud of what you built!

🎓 KEY LEARNINGS
✅ You can build real AI projects
✅ Planning and testing are crucial
✅ You''re now an AI developer!

🌟 CONGRATULATIONS!
You''ve completed the entire AI & Machine Learning course!
You''ve learned:
- What AI is and how it works
- Pattern recognition
- Predictions
- Text analysis
- Chatbots
- Image analysis
- Recommendations
- And built your own project!

Keep learning and building! 🚀'
);

