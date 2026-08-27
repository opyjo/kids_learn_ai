-- Publish the comprehensive take-home review inside Term 2, Lesson 7.
-- Safe to rerun: an existing complete question set is left untouched so that
-- historical attempts and spaced-review references keep their question IDs.

DO $seed$
DECLARE
  v_lesson_id UUID;
  v_quiz_id UUID;
  v_question_count INTEGER;
BEGIN
  SELECT l.id
  INTO v_lesson_id
  FROM public.lessons l
  JOIN public.courses c ON c.id = l.course_id
  WHERE c.slug = 'term-2-math-wizard'
    AND l.order_index = 7
  LIMIT 1;

  IF v_lesson_id IS NULL THEN
    RAISE EXCEPTION 'Term 2 Math Wizard Lesson 7 was not found';
  END IF;

  SELECT q.id
  INTO v_quiz_id
  FROM public.quizzes q
  WHERE q.lesson_id = v_lesson_id
    AND q.quiz_type = 'quick_check'
    AND q.title = 'Math Wizard Homework Challenge — Lessons 1–7'
  LIMIT 1;

  IF v_quiz_id IS NULL THEN
    INSERT INTO public.quizzes (
      lesson_id,
      course_id,
      title,
      description,
      quiz_type,
      status,
      passing_score,
      time_limit_minutes,
      is_active
    ) VALUES (
      v_lesson_id,
      NULL,
      'Math Wizard Homework Challenge — Lessons 1–7',
      'Take-home, open-notes review of Lessons 1–7. Complete it independently, read each explanation, then build and submit the Event Sharing Tool in Trinket.',
      'quick_check',
      'published',
      70,
      NULL,
      TRUE
    )
    RETURNING id INTO v_quiz_id;
  ELSE
    UPDATE public.quizzes
    SET description = 'Take-home, open-notes review of Lessons 1–7. Complete it independently, read each explanation, then build and submit the Event Sharing Tool in Trinket.',
        status = 'published',
        passing_score = 70,
        time_limit_minutes = NULL,
        is_active = TRUE,
        updated_at = NOW()
    WHERE id = v_quiz_id;
  END IF;

  -- The student API expects at most one active published quick check per lesson.
  UPDATE public.quizzes
  SET status = 'archived',
      is_active = FALSE,
      updated_at = NOW()
  WHERE lesson_id = v_lesson_id
    AND quiz_type = 'quick_check'
    AND id <> v_quiz_id
    AND (status = 'published' OR is_active = TRUE);

  SELECT COUNT(*)
  INTO v_question_count
  FROM public.quiz_questions
  WHERE quiz_id = v_quiz_id;

  IF v_question_count NOT IN (0, 20) THEN
    RAISE EXCEPTION 'Homework quiz has % questions; expected either 0 or 20', v_question_count;
  END IF;

  IF v_question_count = 0 THEN
    INSERT INTO public.quiz_questions (
      quiz_id,
      question,
      question_type,
      options,
      correct_answer,
      explanation,
      hint,
      misconception_tag,
      concept_tag,
      adaptive_difficulty,
      variant_group,
      learning_objective,
      prerequisite_tags,
      remediation,
      points,
      order_index,
      time_limit_seconds
    ) VALUES
    (
      v_quiz_id,
      'Which variable name most clearly describes the price of one ticket?',
      'multiple_choice',
      jsonb_build_array('x', 'number', 'ticket_price', 'stuff'),
      to_jsonb('ticket_price'::TEXT),
      '`ticket_price` tells a reader exactly what the variable stores and follows the lowercase-with-underscores naming style.',
      'Choose the name that explains what is inside the variable.',
      'unclear-variable-name',
      'variable-naming',
      1,
      'term2-homework-variable-naming',
      'Choose meaningful Python variable names.',
      '[]'::JSONB,
      'A useful variable name describes its value. Prefer `ticket_price` over single letters or vague words.',
      1000,
      0,
      60
    ),
    (
      v_quiz_id,
      '`input()` returns text, even when the user types digits.',
      'true_false',
      jsonb_build_array('True', 'False'),
      to_jsonb('True'::TEXT),
      '`input()` collects a string. Use `int()` or `float()` when the program needs to calculate with that text.',
      'Think about why Lesson 4 converted answers after collecting them.',
      'input-is-number',
      'numeric-input',
      1,
      'term2-homework-input-type',
      'Recognize the type returned by input().',
      jsonb_build_array('strings'),
      'Remember the pipeline: collect text first, then convert it before calculating.',
      1000,
      1,
      60
    ),
    (
      v_quiz_id,
      $text$What is printed by this code?

```python
print("7" + "3")
```$text$,
      'code_output',
      jsonb_build_array('10', '73', '7 3', 'Error'),
      to_jsonb('73'::TEXT),
      'Both values are strings, so `+` joins them to make the string `"73"`.',
      'Quotation marks mean these values are text.',
      'string-addition-as-math',
      'strings-vs-numbers',
      1,
      'term2-homework-string-concatenation',
      'Distinguish joining strings from adding numbers.',
      jsonb_build_array('strings', 'addition'),
      'Compare `"7" + "3"` with `7 + 3`. Quoted values join; unquoted numbers add.',
      1000,
      2,
      60
    ),
    (
      v_quiz_id,
      $text$A program should calculate the average of two scores. Which line is correct?

```python
score_one = 8
score_two = 4
```$text$,
      'multiple_choice',
      jsonb_build_array(
        'average = score_one + score_two / 2',
        'average = (score_one + score_two) / 2',
        'average = score_one * score_two / 2',
        'average = score_one + (score_two * 2)'
      ),
      to_jsonb('average = (score_one + score_two) / 2'::TEXT),
      'Parentheses make Python add both scores before dividing the total by two.',
      'Write the average formula in words: add both scores, then divide.',
      'missing-average-parentheses',
      'operator-precedence',
      3,
      'term2-homework-average-parentheses',
      'Use parentheses to communicate and control calculation order.',
      jsonb_build_array('addition', 'division'),
      'Operations inside parentheses happen first. Group the total before dividing to find an average.',
      1000,
      3,
      90
    ),
    (
      v_quiz_id,
      $text$What is printed?

```python
round_one = 12
round_two = 8
total = round_one + round_two
print(total)
```$text$,
      'code_output',
      jsonb_build_array('4', '20', '128', '96'),
      to_jsonb('20'::TEXT),
      'The variables store numbers, so Python adds 12 and 8 to produce 20.',
      'Follow the values stored in each variable.',
      'joins-numeric-variables',
      'arithmetic-operators',
      1,
      'term2-homework-basic-addition',
      'Trace arithmetic performed with numeric variables.',
      jsonb_build_array('variables', 'addition'),
      'Write the value beside each variable, then perform the operator shown on the result line.',
      1000,
      4,
      60
    ),
    (
      v_quiz_id,
      'What value and type does Python produce for `10 / 2`?',
      'multiple_choice',
      jsonb_build_array('5, an integer', '5.0, a float', '12, an integer', '102, a string'),
      to_jsonb('5.0, a float'::TEXT),
      'The `/` operator performs division and produces the float `5.0`.',
      'Lesson 2 showed that ordinary division creates a decimal-capable value.',
      'division-produces-integer',
      'division',
      2,
      'term2-homework-division-type',
      'Recognize the result of ordinary division in Python.',
      jsonb_build_array('arithmetic-operators', 'floats'),
      'In Python, `/` is ordinary division and its result is a float, even when the answer is a whole number.',
      1000,
      5,
      60
    ),
    (
      v_quiz_id,
      'What is the output of `print(23 // 5)`?',
      'code_output',
      jsonb_build_array('4', '3', '4.6', '5'),
      to_jsonb('4'::TEXT),
      '`//` counts complete groups. Five fits completely into 23 four times.',
      'Think about complete equal groups, not a decimal answer.',
      'floor-division-as-remainder',
      'floor-division',
      2,
      'term2-homework-floor-division',
      'Calculate complete groups with floor division.',
      jsonb_build_array('division'),
      'Use `//` when you need the number of complete groups. Any leftover amount is not part of this answer.',
      1000,
      6,
      60
    ),
    (
      v_quiz_id,
      'What is the output of `print(23 % 5)`?',
      'code_output',
      jsonb_build_array('4', '3', '4.6', '5'),
      to_jsonb('3'::TEXT),
      '`%` gives the remainder. Four complete groups use 20 items, leaving 3.',
      'Find what remains after making complete groups of five.',
      'modulo-as-division',
      'remainder',
      2,
      'term2-homework-modulo',
      'Calculate leftovers with the remainder operator.',
      jsonb_build_array('floor-division'),
      'After finding complete groups, multiply them by the group size and subtract from the total to check the remainder.',
      1000,
      7,
      60
    ),
    (
      v_quiz_id,
      'Which expression means “multiply 2 by itself 6 times”?',
      'multiple_choice',
      jsonb_build_array('2 * 6', '2 ** 6', '2 // 6', '6 % 2'),
      to_jsonb('2 ** 6'::TEXT),
      '`**` is the exponent operator, so `2 ** 6` means 2 raised to the power of 6.',
      'Look for the operator used for powers.',
      'power-as-multiplication',
      'exponents',
      1,
      'term2-homework-exponents',
      'Select the exponent operator for repeated multiplication.',
      jsonb_build_array('multiplication'),
      'Use `**` for powers. `2 ** 6` equals 2 × 2 × 2 × 2 × 2 × 2.',
      1000,
      8,
      60
    ),
    (
      v_quiz_id,
      'What is the output of `print(5 + 2 * 3)`?',
      'code_output',
      jsonb_build_array('21', '11', '13', '18'),
      to_jsonb('11'::TEXT),
      'Python multiplies 2 by 3 first, then adds 5, producing 11.',
      'Without parentheses, multiplication happens before addition.',
      'left-to-right-only',
      'operator-precedence',
      2,
      'term2-homework-precedence-output',
      'Predict output using Python operation order.',
      jsonb_build_array('addition', 'multiplication'),
      'Evaluate multiplication before addition unless parentheses deliberately change the order.',
      1000,
      9,
      60
    ),
    (
      v_quiz_id,
      'Put the lines in order to collect two whole numbers, add them, and communicate the result.',
      'code_ordering',
      jsonb_build_array(
        'print(f"Total: {total}")',
        'second_number = int(input("Second number: "))',
        'total = first_number + second_number',
        'first_number = int(input("First number: "))'
      ),
      jsonb_build_array(
        'first_number = int(input("First number: "))',
        'second_number = int(input("Second number: "))',
        'total = first_number + second_number',
        'print(f"Total: {total}")'
      ),
      'The program follows collect and convert, calculate, then communicate.',
      'Both values must exist before the calculation, and the result must exist before printing.',
      'pipeline-order',
      'data-pipeline',
      3,
      'term2-homework-integer-pipeline',
      'Order the stages of a numeric input program.',
      jsonb_build_array('input', 'int-conversion', 'addition', 'f-strings'),
      'Use the pipeline: collect and convert every needed input, calculate a saved result, then print it clearly.',
      1000,
      10,
      120
    ),
    (
      v_quiz_id,
      $text$A user enters `4.75` into this program. What is the smallest reasonable fix?

```python
price = int(input("Price: "))
```$text$,
      'multiple_choice',
      jsonb_build_array(
        'Change int() to float()',
        'Remove input()',
        'Put quotation marks around price',
        'Change the variable name to x'
      ),
      to_jsonb('Change int() to float()'::TEXT),
      '`float()` accepts decimal text such as `4.75`, while `int()` expects whole-number text.',
      'Choose the conversion that matches decimal input.',
      'int-for-decimal-input',
      'float-conversion',
      2,
      'term2-homework-decimal-conversion',
      'Choose a conversion that accepts decimal input.',
      jsonb_build_array('input', 'int-conversion'),
      'Use `int()` for whole-number text and `float()` when the input may include a decimal point.',
      1000,
      11,
      75
    ),
    (
      v_quiz_id,
      'Put the receipt lines in the correct collect → convert → calculate → communicate order.',
      'code_ordering',
      jsonb_build_array(
        'print(f"Total: ${total:.2f}")',
        'total = price * quantity',
        'price = float(input("Item price: "))',
        'quantity = int(input("Quantity: "))'
      ),
      jsonb_build_array(
        'price = float(input("Item price: "))',
        'quantity = int(input("Quantity: "))',
        'total = price * quantity',
        'print(f"Total: ${total:.2f}")'
      ),
      'The program collects and converts both inputs, calculates the total, then displays it.',
      'A calculation can only use values that have already been collected.',
      'receipt-pipeline-order',
      'data-pipeline',
      3,
      'term2-homework-receipt-pipeline',
      'Sequence a mixed int/float calculation and formatted output.',
      jsonb_build_array('float-conversion', 'int-conversion', 'multiplication', 'decimal-formatting'),
      'Trace each variable dependency: inputs first, calculation second, output last.',
      1000,
      12,
      120
    ),
    (
      v_quiz_id,
      'What is the output of `print(round(7.891, 2))`?',
      'code_output',
      jsonb_build_array('7.8', '7.89', '7.90', '8'),
      to_jsonb('7.89'::TEXT),
      '`round(7.891, 2)` rounds the value to two decimal places, producing `7.89`.',
      'The second argument tells Python how many decimal places to keep.',
      'round-digits-confusion',
      'rounding',
      2,
      'term2-homework-rounding',
      'Predict the result of round() with a precision argument.',
      jsonb_build_array('floats'),
      'In `round(value, places)`, the second value is the number of decimal places to keep.',
      1000,
      13,
      60
    ),
    (
      v_quiz_id,
      'Which f-string displays `total` as money with exactly two decimal places?',
      'multiple_choice',
      jsonb_build_array(
        'f"Total: ${total}"',
        'f"Total: ${total:.2f}"',
        'f"Total: ${round}"',
        '"Total: ${total:.2f}"'
      ),
      to_jsonb('f"Total: ${total:.2f}"'::TEXT),
      '`:.2f` formats a number with exactly two digits after the decimal point, and the leading `f` activates the placeholder.',
      'Look for both the f-string marker and the two-decimal format.',
      'missing-f-or-format',
      'decimal-formatting',
      2,
      'term2-homework-money-format',
      'Select correct two-decimal f-string formatting.',
      jsonb_build_array('f-strings', 'floats'),
      'Use `f"{value:.2f}"` when an output needs exactly two decimal places, such as money.',
      1000,
      14,
      75
    ),
    (
      v_quiz_id,
      'Rounding a result makes uncertain or incorrect data more accurate.',
      'true_false',
      jsonb_build_array('True', 'False'),
      to_jsonb('False'::TEXT),
      'Rounding can make a result easier to read, but it cannot repair inaccurate data or a poor rule.',
      'Think about the difference between readable and accurate.',
      'rounding-improves-accuracy',
      'responsible-precision',
      3,
      'term2-homework-rounding-meaning',
      'Explain the purpose and limitation of rounding.',
      jsonb_build_array('rounding'),
      'Formatting changes how a value is communicated. It does not improve the quality of the original information or formula.',
      1000,
      15,
      60
    ),
    (
      v_quiz_id,
      'Put the debugging cycle in the best order.',
      'code_ordering',
      jsonb_build_array(
        'Run planned tests to verify the repair',
        'Classify the bug using the evidence',
        'Reproduce and record the symptom',
        'Make the smallest reasonable fix'
      ),
      jsonb_build_array(
        'Reproduce and record the symptom',
        'Classify the bug using the evidence',
        'Make the smallest reasonable fix',
        'Run planned tests to verify the repair'
      ),
      'Reliable debugging begins with evidence, then diagnosis, a focused repair, and verification.',
      'Do not change code before you know what symptom you are repairing.',
      'random-debugging',
      'debugging-cycle',
      3,
      'term2-homework-debug-cycle',
      'Order the reproduce, classify, repair, and verify debugging cycle.',
      jsonb_build_array('testing'),
      'Use the clinic cycle: reproduce, record, classify, repair, predict tests, run them, and explain the evidence.',
      1000,
      16,
      120
    ),
    (
      v_quiz_id,
      $text$The program runs, but it multiplies when the goal is to total the scores. What kind of bug is this?

```python
round_one = 8
round_two = 6
total = round_one * round_two
```$text$,
      'multiple_choice',
      jsonb_build_array('Syntax bug', 'Runtime bug', 'Logic bug', 'Usability problem'),
      to_jsonb('Logic bug'::TEXT),
      'Python can run the program, but the operator does not match the intended rule, so this is a logic bug.',
      'The code is valid; compare what it does with what it was supposed to do.',
      'logic-vs-syntax',
      'bug-classification',
      2,
      'term2-homework-logic-bug',
      'Classify a program that runs but calculates the wrong result.',
      jsonb_build_array('arithmetic-operators'),
      'A logic bug produces the wrong behaviour or result even though Python understands and runs the code.',
      1000,
      17,
      75
    ),
    (
      v_quiz_id,
      'Put the lines in order to repair and clearly display a decimal distance conversion.',
      'code_ordering',
      jsonb_build_array(
        'print(f"Distance in miles: {miles:.2f}")',
        'miles = distance_km * 0.621371',
        'distance_text = input("Distance in km: ")',
        'distance_km = float(distance_text)'
      ),
      jsonb_build_array(
        'distance_text = input("Distance in km: ")',
        'distance_km = float(distance_text)',
        'miles = distance_km * 0.621371',
        'print(f"Distance in miles: {miles:.2f}")'
      ),
      'The repaired pipeline collects text, converts it to a float, calculates miles, and communicates a labelled tidy result.',
      'The decimal conversion must happen before multiplication.',
      'mixed-conversion-output-bugs',
      'debugging-pipeline',
      4,
      'term2-homework-distance-repair',
      'Repair conversion and usability problems by rebuilding the data pipeline.',
      jsonb_build_array('input', 'float-conversion', 'multiplication', 'decimal-formatting'),
      'Check the pipeline one stage at a time and make sure every output includes a clear label and useful precision.',
      1000,
      18,
      150
    ),
    (
      v_quiz_id,
      'Which test plan gives the strongest evidence that a decimal price calculator works?',
      'multiple_choice',
      jsonb_build_array(
        'Run 2.50 and 4 three times',
        'Run one ordinary case only',
        'Run an ordinary case, a zero-quantity case, and a decimal case',
        'Read the code without running it'
      ),
      to_jsonb('Run an ordinary case, a zero-quantity case, and a decimal case'::TEXT),
      'Different planned cases test different behaviours. Repeating one easy case provides much weaker evidence.',
      'Look for variety, including a boundary and the decimal behaviour the tool promises.',
      'repeated-single-test',
      'test-planning',
      3,
      'term2-homework-test-selection',
      'Select varied tests that provide useful evidence.',
      jsonb_build_array('expected-results'),
      'A strong test set includes a normal case, an important boundary such as zero, and a case that exercises decimals or leftovers.',
      1000,
      19,
      90
    );
  END IF;

  SELECT COUNT(*)
  INTO v_question_count
  FROM public.quiz_questions
  WHERE quiz_id = v_quiz_id;

  IF v_question_count <> 20 THEN
    RAISE EXCEPTION 'Homework quiz verification failed: found % questions', v_question_count;
  END IF;
END
$seed$;
