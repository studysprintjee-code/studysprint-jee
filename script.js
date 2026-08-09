const quizQuestions = [
  {
    question: 'What is the acceleration of an object moving with constant velocity?',
    options: ['Zero', 'Positive', 'Negative', 'Changing'],
    answer: 'Zero'
  },
  {
    question: 'What is the pH of a neutral solution?',
    options: ['3', '5', '7', '9'],
    answer: '7'
  },
  {
    question: 'What is the derivative of x^2?',
    options: ['x', '2x', 'x^3', '2'],
    answer: '2x'
  },
  {
    question: 'What is the SI unit of force?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    answer: 'Newton'
  },
  {
    question: 'Which gas is released during photosynthesis?',
    options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
    answer: 'Oxygen'
  },
  {
    question: 'What is the formula for speed?',
    options: ['Distance × Time', 'Distance / Time', 'Time / Distance', 'Mass / Volume'],
    answer: 'Distance / Time'
  },
  {
    question: 'What is the value of sin(90°)?',
    options: ['0', '1', '0.5', '-1'],
    answer: '1'
  },
  {
    question: 'Which element has atomic number 1?',
    options: ['Helium', 'Hydrogen', 'Oxygen', 'Carbon'],
    answer: 'Hydrogen'
  },
  {
    question: 'What is the value of 2 + 3 × 4?',
    options: ['14', '20', '10', '8'],
    answer: '20'
  },
  {
    question: 'What is the formula for work?',
    options: ['Force × Distance', 'Mass × Velocity', 'Pressure × Area', 'Energy / Time'],
    answer: 'Force × Distance'
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'O2', 'NaCl'],
    answer: 'H2O'
  },
  {
    question: 'How many sides does a triangle have?',
    options: ['2', '3', '4', '5'],
    answer: '3'
  },
  {
    question: 'What does the symbol π represent?',
    options: ['A fraction', 'A triangle', 'Pi', 'A line'],
    answer: 'Pi'
  },
  {
    question: 'What is the formula for the area of a rectangle?',
    options: ['Length × Width', 'Length + Width', 'Length / Width', 'Width^2'],
    answer: 'Length × Width'
  },
  {
    question: 'Which subject often uses formulas like v=u+at?',
    options: ['Chemistry', 'Physics', 'History', 'Biology'],
    answer: 'Physics'
  }
];

const quizContainer = document.getElementById('quizContainer');
const scoreBox = document.getElementById('scoreBox');
const questionProgress = document.getElementById('questionProgress');
const quizResult = document.getElementById('quizResult');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const restartQuizBtn = document.getElementById('restartQuizBtn');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  quizResult.textContent = '';
  displayQuestion();
  updateScore();
}

function updateScore() {
  scoreBox.textContent = `Score: ${score} / 15`;
}

function displayQuestion() {
  const questionData = quizQuestions[currentQuestionIndex];
  questionProgress.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  quizContainer.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'question-card';
  card.innerHTML = `
    <strong>${questionData.question}</strong>
    <div class="quiz-options">
      ${questionData.options.map((option) => `
        <button class="option-btn" type="button" data-option="${option}">${option}</button>
      `).join('')}
    </div>
  `;

  quizContainer.appendChild(card);

  const buttons = card.querySelectorAll('.option-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedOption = button.getAttribute('data-option');
      userAnswers[currentQuestionIndex] = selectedOption;

      buttons.forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');

      if (selectedOption === questionData.answer) {
        score = score + 1;
      }

      updateScore();
    });
  });
}

function nextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex += 1;
    displayQuestion();
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  const correctAnswers = userAnswers.filter((answer, index) => answer === quizQuestions[index].answer).length;
  quizResult.textContent = `You answered ${correctAnswers} out of 15 correctly. ${correctAnswers >= 10 ? 'Excellent work!' : 'Keep practicing!'}`;
  questionProgress.textContent = 'Quiz Complete';
  quizContainer.innerHTML = '<p>Refresh or click Restart Quiz to try again.</p>';
  scoreBox.textContent = `Score: ${correctAnswers} / 15`;
}

nextQuestionBtn.addEventListener('click', () => {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    nextQuestion();
  } else {
    showFinalResult();
  }
});

restartQuizBtn.addEventListener('click', startQuiz);

startQuiz();
