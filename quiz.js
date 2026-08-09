<<<<<<< HEAD
const questionBanks = {
  physics: [
    { question: "A projectile is fired with speed u at angle θ. Its range is maximum when θ equals:", options: ["30°", "45°", "60°", "90°"], answer: 1 },
    { question: "A block slides down a rough incline at constant speed. The net force along the incline is:", options: ["mg", "mg sin θ", "Zero", "μmg"], answer: 2 },
    { question: "If a body's speed becomes twice its original speed, its kinetic energy becomes:", options: ["K/2", "2K", "4K", "K + 2"], answer: 2 },
    { question: "Two identical capacitors C are connected in series. Their equivalent capacitance is:", options: ["C/2", "C", "2C", "C²"], answer: 0 },
    { question: "Stopping potential in a photoelectric experiment depends primarily on light frequency:", options: ["True", "False", "Only on intensity", "Only on distance"], answer: 0 },
    { question: "The escape velocity from a planet is proportional to the square root of its:", options: ["Mass/radius", "Radius/mass", "Density only", "Temperature"], answer: 0 }
  ],
  chemistry: [
    { question: "For a first-order reaction, the half-life is:", options: ["Dependent on initial concentration", "Independent of initial concentration", "Always zero", "Proportional to concentration squared"], answer: 1 },
    { question: "Increasing pressure in a gaseous equilibrium shifts it toward the side with:", options: ["More gas moles", "Fewer gas moles", "More liquid", "Higher temperature"], answer: 1 },
    { question: "The hybridisation of carbon atoms in benzene is:", options: ["sp", "sp²", "sp³", "dsp²"], answer: 1 },
    { question: "A positive ΔG at constant temperature and pressure indicates a reaction is:", options: ["Spontaneous", "Non-spontaneous", "Always at equilibrium", "Always exothermic"], answer: 1 },
    { question: "The oxidation state of chromium in K₂Cr₂O₇ is:", options: ["+3", "+4", "+6", "+7"], answer: 2 },
    { question: "A buffer solution usually contains:", options: ["Only strong acid", "Only strong base", "Weak acid and conjugate base", "Only water"], answer: 2 }
  ],
  mathematics: [
    { question: "If roots of x² - 5x + 6 = 0 are α and β, α² + β² equals:", options: ["11", "13", "17", "25"], answer: 1 },
    { question: "The derivative of sin(x²) is:", options: ["cos(x²)", "2x cos(x²)", "2x sin(x²)", "x cos x"], answer: 1 },
    { question: "The sum of 1 + 1/2 + 1/4 + ... is:", options: ["1", "2", "3", "Does not exist"], answer: 1 },
    { question: "The distance between (1, 2, 3) and (4, 6, 3) is:", options: ["3", "4", "5", "6"], answer: 2 },
    { question: "For independent events A and B, P(A ∩ B) equals:", options: ["P(A) + P(B)", "P(A)P(B)", "P(A) / P(B)", "P(A) - P(B)"], answer: 1 },
    { question: "The area under y = 2x from x = 0 to x = 3 is:", options: ["3", "6", "9", "12"], answer: 2 }
  ]
};

const questionText = document.querySelector("#questionText");
const answerGrid = document.querySelector("#answerGrid");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#nextButton");
const restartButton = document.querySelector("#restartButton");
const scoreValue = document.querySelector("#scoreValue");
const progressLabel = document.querySelector("#questionProgress");
const progressFill = document.querySelector("#progressFill");
const modeLabel = document.querySelector("#quizModeLabel");
const subjectTabs = document.querySelectorAll(".subject-tab");

let mode = "physics";
let questions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function buildQuestions() {
  questions = mode === "combined"
    ? Object.values(questionBanks).flat().sort(() => Math.random() - 0.5)
    : [...questionBanks[mode]];
}

function loadQuestion() {
  const question = questions[currentIndex];
  answered = false;
  questionText.textContent = question.question;
  progressLabel.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  feedback.textContent = "Select one answer.";
  nextButton.disabled = true;
  answerGrid.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.dataset.index = index;
    answerGrid.appendChild(button);
  });
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  scoreValue.textContent = score;
  modeLabel.textContent = mode === "combined" ? "Combined Physics + Chemistry + Mathematics" : `${mode === "mathematics" ? "Mathematics" : mode[0].toUpperCase() + mode.slice(1)} quiz`;
  buildQuestions();
  loadQuestion();
}

subjectTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    mode = tab.dataset.mode;
    subjectTabs.forEach((item) => item.classList.toggle("active", item === tab));
    startQuiz();
  });
});

answerGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-button");
  if (!button || answered) return;
  answered = true;
  const selected = Number(button.dataset.index);
  const correct = questions[currentIndex].answer;
  answerGrid.querySelectorAll(".answer-button").forEach((item, index) => {
    item.disabled = true;
    if (index === correct) item.classList.add("correct");
  });
  if (selected === correct) {
    score += 1;
    scoreValue.textContent = score;
    feedback.textContent = "Correct! Excellent work.";
  } else {
    button.classList.add("wrong");
    feedback.textContent = "Not quite. Review the highlighted answer.";
  }
  nextButton.disabled = false;
});

nextButton.addEventListener("click", () => {
  if (currentIndex === questions.length - 1) {
    feedback.textContent = `Quiz complete. Final score: ${score}/${questions.length}.`;
    nextButton.disabled = true;
    return;
  }
  currentIndex += 1;
  loadQuestion();
});

restartButton.addEventListener("click", startQuiz);
startQuiz();
=======
const questionBanks = {
  physics: [
    { question: "A projectile is fired with speed u at angle θ. Its range is maximum when θ equals:", options: ["30°", "45°", "60°", "90°"], answer: 1 },
    { question: "A block slides down a rough incline at constant speed. The net force along the incline is:", options: ["mg", "mg sin θ", "Zero", "μmg"], answer: 2 },
    { question: "If a body's speed becomes twice its original speed, its kinetic energy becomes:", options: ["K/2", "2K", "4K", "K + 2"], answer: 2 },
    { question: "Two identical capacitors C are connected in series. Their equivalent capacitance is:", options: ["C/2", "C", "2C", "C²"], answer: 0 },
    { question: "Stopping potential in a photoelectric experiment depends primarily on light frequency:", options: ["True", "False", "Only on intensity", "Only on distance"], answer: 0 },
    { question: "The escape velocity from a planet is proportional to the square root of its:", options: ["Mass/radius", "Radius/mass", "Density only", "Temperature"], answer: 0 }
  ],
  chemistry: [
    { question: "For a first-order reaction, the half-life is:", options: ["Dependent on initial concentration", "Independent of initial concentration", "Always zero", "Proportional to concentration squared"], answer: 1 },
    { question: "Increasing pressure in a gaseous equilibrium shifts it toward the side with:", options: ["More gas moles", "Fewer gas moles", "More liquid", "Higher temperature"], answer: 1 },
    { question: "The hybridisation of carbon atoms in benzene is:", options: ["sp", "sp²", "sp³", "dsp²"], answer: 1 },
    { question: "A positive ΔG at constant temperature and pressure indicates a reaction is:", options: ["Spontaneous", "Non-spontaneous", "Always at equilibrium", "Always exothermic"], answer: 1 },
    { question: "The oxidation state of chromium in K₂Cr₂O₇ is:", options: ["+3", "+4", "+6", "+7"], answer: 2 },
    { question: "A buffer solution usually contains:", options: ["Only strong acid", "Only strong base", "Weak acid and conjugate base", "Only water"], answer: 2 }
  ],
  mathematics: [
    { question: "If roots of x² - 5x + 6 = 0 are α and β, α² + β² equals:", options: ["11", "13", "17", "25"], answer: 1 },
    { question: "The derivative of sin(x²) is:", options: ["cos(x²)", "2x cos(x²)", "2x sin(x²)", "x cos x"], answer: 1 },
    { question: "The sum of 1 + 1/2 + 1/4 + ... is:", options: ["1", "2", "3", "Does not exist"], answer: 1 },
    { question: "The distance between (1, 2, 3) and (4, 6, 3) is:", options: ["3", "4", "5", "6"], answer: 2 },
    { question: "For independent events A and B, P(A ∩ B) equals:", options: ["P(A) + P(B)", "P(A)P(B)", "P(A) / P(B)", "P(A) - P(B)"], answer: 1 },
    { question: "The area under y = 2x from x = 0 to x = 3 is:", options: ["3", "6", "9", "12"], answer: 2 }
  ]
};

const questionText = document.querySelector("#questionText");
const answerGrid = document.querySelector("#answerGrid");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#nextButton");
const restartButton = document.querySelector("#restartButton");
const scoreValue = document.querySelector("#scoreValue");
const progressLabel = document.querySelector("#questionProgress");
const progressFill = document.querySelector("#progressFill");
const modeLabel = document.querySelector("#quizModeLabel");
const subjectTabs = document.querySelectorAll(".subject-tab");

let mode = "physics";
let questions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function buildQuestions() {
  questions = mode === "combined"
    ? Object.values(questionBanks).flat().sort(() => Math.random() - 0.5)
    : [...questionBanks[mode]];
}

function loadQuestion() {
  const question = questions[currentIndex];
  answered = false;
  questionText.textContent = question.question;
  progressLabel.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  feedback.textContent = "Select one answer.";
  nextButton.disabled = true;
  answerGrid.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.dataset.index = index;
    answerGrid.appendChild(button);
  });
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  scoreValue.textContent = score;
  modeLabel.textContent = mode === "combined" ? "Combined Physics + Chemistry + Mathematics" : `${mode === "mathematics" ? "Mathematics" : mode[0].toUpperCase() + mode.slice(1)} quiz`;
  buildQuestions();
  loadQuestion();
}

subjectTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    mode = tab.dataset.mode;
    subjectTabs.forEach((item) => item.classList.toggle("active", item === tab));
    startQuiz();
  });
});

answerGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-button");
  if (!button || answered) return;
  answered = true;
  const selected = Number(button.dataset.index);
  const correct = questions[currentIndex].answer;
  answerGrid.querySelectorAll(".answer-button").forEach((item, index) => {
    item.disabled = true;
    if (index === correct) item.classList.add("correct");
  });
  if (selected === correct) {
    score += 1;
    scoreValue.textContent = score;
    feedback.textContent = "Correct! Excellent work.";
  } else {
    button.classList.add("wrong");
    feedback.textContent = "Not quite. Review the highlighted answer.";
  }
  nextButton.disabled = false;
});

nextButton.addEventListener("click", () => {
  if (currentIndex === questions.length - 1) {
    feedback.textContent = `Quiz complete. Final score: ${score}/${questions.length}.`;
    nextButton.disabled = true;
    return;
  }
  currentIndex += 1;
  loadQuestion();
});

restartButton.addEventListener("click", startQuiz);
startQuiz();
>>>>>>> 1e88c0d0eee2de08cc3ed4e82c9c198e5849b700
