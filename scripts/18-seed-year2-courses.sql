-- Year 2 Courses for Ages 11-13
-- 8-Term AI-Ready Program

-- Insert Year 2 courses
INSERT INTO courses (title, description, slug, order_index, age_range, term_number, badge_earned, project_name, year_group, is_coming_soon)
VALUES
  -- Year 2 Term 1
  (
    'Year 2 Term 1: Python Accelerated',
    'Fast-track your Python skills with an accelerated introduction covering variables, math, conditionals, and loops.',
    'year2-term-1-python-accelerated',
    9,
    '11-13',
    1,
    NULL,
    'Smart Calculator',
    'Year 2',
    true
  ),
  -- Year 2 Term 2
  (
    'Year 2 Term 2: Loops & Logic Mastery',
    'Master loops and develop strong debugging skills. Build programs that handle repetitive tasks efficiently.',
    'year2-term-2-loops-mastery',
    10,
    '11-13',
    2,
    'Python Pro Badge',
    'Arcade Game Collection',
    'Year 2',
    true
  ),
  -- Year 2 Term 3
  (
    'Year 2 Term 3: Functions',
    'Learn to organize code into reusable functions - the critical skill that separates beginners from intermediate programmers.',
    'year2-term-3-functions',
    11,
    '11-13',
    3,
    NULL,
    'Text Adventure Engine',
    'Year 2',
    true
  ),
  -- Year 2 Term 4
  (
    'Year 2 Term 4: Data Structures',
    'Work with lists and dictionaries - the fundamental data structures that power real applications.',
    'year2-term-4-data-structures',
    12,
    '11-13',
    4,
    'Data Architect Badge',
    'Contact Manager',
    'Year 2',
    true
  ),
  -- Year 2 Term 5
  (
    'Year 2 Term 5: AI Concepts Deep Dive',
    'A comprehensive exploration of AI concepts - understand how machine learning, training data, bias, and ethics really work.',
    'year2-term-5-ai-deep-dive',
    13,
    '11-13',
    5,
    'AI Scholar Badge',
    'AI Investigation Report',
    'Year 2',
    true
  ),
  -- Year 2 Term 6
  (
    'Year 2 Term 6: Working with APIs',
    'Learn what APIs are and how to use them. Build programs that leverage real AI capabilities.',
    'year2-term-6-apis',
    14,
    '11-13',
    6,
    'API Master Badge',
    'AI-Powered Assistant',
    'Year 2',
    true
  ),
  -- Year 2 Term 7
  (
    'Year 2 Term 7: Data & Visualization',
    'Read data from files, analyze it, and create visualizations. The foundation of data science.',
    'year2-term-7-data-visualization',
    15,
    '11-13',
    7,
    NULL,
    'Data Story Project',
    'Year 2',
    true
  ),
  -- Year 2 Term 8
  (
    'Year 2 Term 8: Capstone & Portfolio',
    'Design and build your own project combining everything you have learned. Create a professional portfolio.',
    'year2-term-8-capstone',
    16,
    '11-13',
    8,
    'AI-Ready Developer Certificate',
    'Portfolio Showcase',
    'Year 2',
    true
  );

