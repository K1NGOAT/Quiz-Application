
# Quiz Application

This is a simple **Quiz Application** built using HTML, CSS, and JavaScript. The application allows users to answer multiple-choice questions, get immediate feedback on their answers, and see their final score and grade at the end of the quiz.

## Features

- Displays multiple-choice questions to the user.
- Buttons change color based on the correctness of the answer:
  - **Green** for correct answers.
  - **Red** for incorrect answers.
- Only one answer can be selected per question.
- A "Next" button allows progression to the next question regardless of the selected answer.
- At the end of the quiz, the final score and grade are displayed.
- Uses the `hasOwnProperty` method to validate object properties.
- Modular code with separate files for HTML, CSS, and JavaScript.

## Files Included

- `index.html`: The main structure of the quiz application.
- `styles.css`: The styling for the application.
- `script.js`: The logic and functionality of the quiz.
- `README.md`: This file for documentation.

## Instructions for Use

1. Clone this repository or download the project files.
2. Ensure all files (`index.html`, `styles.css`, `script.js`) are in the same directory.
3. Open `index.html` in your browser to start the quiz.

## How to Add More Questions

1. Open the `script.js` file.
2. Locate the `quizQuestions` array.
3. Add more question objects to the array in the following format:

```javascript
{
    question: "Your question here?",
    options: {
        a: "Option A",
        b: "Option B",
        c: "Option C",
        d: "Option D"
    },
    correctAnswer: "a" // Specify the correct option key
}
```

## Requirements (From Instructions)

- Uses the `hasOwnProperty` method to validate options.
- Includes at least 20 questions (you can expand the existing sample questions).
- Button colors change based on answer correctness.
- Supports single-answer selection for each question.
- Separate files for HTML, CSS, and JavaScript.

## License

This project is open source and available for modification and distribution.
