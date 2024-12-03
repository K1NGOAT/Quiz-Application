
const quizQuestions = [
    { question: "How many players does a soccer field have on the field at once?", options: { a: "10", b: "11", c: "15", d: "9" }, answer: "b" },
    { question: "What is the capital of France?", options: { a: "Paris", b: "Rome", c: "London", d: "Berlin" }, answer: "a" },
    // Add more questions here (up to 20)
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    for (const key in currentQuestion.options) {
        if (currentQuestion.options.hasOwnProperty(key)) {
            const button = document.createElement('button');
            button.textContent = currentQuestion.options[key];
            button.onclick = () => checkAnswer(key);
            optionsElement.appendChild(button);
        }
    }

    document.getElementById('next-btn').disabled = true;
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('#options button');

    buttons.forEach(button => {
        const optionKey = Object.keys(currentQuestion.options).find(key => currentQuestion.options[key] === button.textContent);
        if (optionKey === currentQuestion.answer) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
    const resultElement = document.getElementById('result');
    resultElement.style.display = "block";
    document.getElementById('score').textContent = `${score}/${quizQuestions.length}`;
}

// Initialize quiz
loadQuestion();
