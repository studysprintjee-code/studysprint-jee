const questionBanks = {
  physics: [
    { question: "A projectile is fired with speed u at angle θ. Its range is maximum when θ equals:", options: ["30°", "45°", "60°", "90°"], answer: 1 },
    { question: "A block slides down a rough incline at constant speed. The net force along the incline is:", options: ["mg", "mg sin θ", "Zero", "μmg"], answer: 2 },
    { question: "If a body's speed becomes twice its original speed, its kinetic energy becomes:", options: ["K/2", "2K", "4K", "K + 2"], answer: 2 },
    { question: "Two identical capacitors C are connected in series. Their equivalent capacitance is:", options: ["C/2", "C", "2C", "C²"], answer: 0 },
    { question: "Stopping potential in a photoelectric experiment depends primarily on light frequency:", options: ["True", "False", "Only on intensity", "Only on distance"], answer: 0 },
    { question: "The escape velocity from a planet is proportional to the square root of its:", options: ["Mass/radius", "Radius/mass", "Density only", "Temperature"], answer: 0 },
    { question: "The work done by a conservative force over a closed path is:", options: ["Positive", "Negative", "Zero", "Depends on path"], answer: 2 },
    { question: "In SHM, the maximum acceleration of a particle is:", options: ["Aω", "Aω²", "ω²/A", "A/ω²"], answer: 1 },
    { question: "For two resistors R1 and R2 in parallel, the equivalent resistance is:", options: ["R1 + R2", "(R1R2)/(R1 + R2)", "R1R2", "R1/R2"], answer: 1 },
    { question: "The de Broglie wavelength of a particle is λ =:", options: ["h/p", "p/h", "mv/h", "h/mv"], answer: 0 },
    { question: "A charge q moving with speed v in a magnetic field B experiences force magnitude:", options: ["qvB sin θ", "qB/v", "qv/B", "qv²B"], answer: 0 },
    { question: "Average power in an AC circuit is given by:", options: ["Vrms Irms", "Vrms Irms cosφ", "Vrms² / R", "I²R"], answer: 1 },
    { question: "For a convex lens, the lens formula is:", options: ["1/f = 1/v + 1/u", "1/f = 1/v - 1/u", "f = uv/(u+v)", "f = v/u"], answer: 1 },
    { question: "When a source moves towards a stationary observer, the apparent frequency:", options: ["Decreases", "Increases", "Remains same", "Becomes zero"], answer: 1 },
    { question: "In Bernoulli's equation, the sum of pressure head, velocity head and elevation head is:", options: ["Constant", "Variable", "Zero", "Equal to work"], answer: 0 },
    { question: "For an ideal gas undergoing adiabatic expansion, the relation between P and V is:", options: ["PV = constant", "PV² = constant", "PV^γ = constant", "P/V = constant"], answer: 2 },
    { question: "The magnetic flux linked with a coil is maximum when the angle between the coil normal and field is:", options: ["0°", "45°", "90°", "180°"], answer: 0 },
    { question: "The induced emf in a coil is proportional to:", options: ["Rate of change of current", "Rate of change of magnetic flux", "Resistance", "Length of wire"], answer: 1 },
    { question: "If the object is placed at the centre of curvature of a concave mirror, the image is formed:", options: ["At focus", "At centre of curvature", "Beyond C", "Between F and C"], answer: 1 },
    { question: "The efficiency of a Carnot engine depends on:", options: ["Working substance", "Nature of gas", "Temperatures of reservoirs", "Volume"], answer: 2 },
    { question: "Which quantity remains conserved in an elastic collision?", options: ["Kinetic energy only", "Momentum only", "Both momentum and kinetic energy", "Neither"], answer: 2 },
    { question: "The gravitational potential inside a uniform spherical shell is:", options: ["Zero", "Increasing with radius", "Constant", "Decreasing with radius"], answer: 2 },
    { question: "The SI unit of self-inductance is:", options: ["Weber", "Tesla", "Henry", "Farad"], answer: 2 },
    { question: "The condition for resonance in an LCR series circuit is:", options: ["X_L = X_C", "X_L > X_C", "X_L < X_C", "R = 0"], answer: 0 },
    { question: "If the temperature of a blackbody is doubled, the total radiated energy increases by a factor of:", options: ["2", "4", "8", "16"], answer: 3 }
  ],
  chemistry: [
    { question: "For a first-order reaction, the half-life is:", options: ["Dependent on initial concentration", "Independent of initial concentration", "Always zero", "Proportional to concentration squared"], answer: 1 },
    { question: "Increasing pressure in a gaseous equilibrium shifts it toward the side with:", options: ["More gas moles", "Fewer gas moles", "More liquid", "Higher temperature"], answer: 1 },
    { question: "The hybridisation of carbon atoms in benzene is:", options: ["sp", "sp²", "sp³", "dsp²"], answer: 1 },
    { question: "A positive ΔG at constant temperature and pressure indicates a reaction is:", options: ["Spontaneous", "Non-spontaneous", "Always at equilibrium", "Always exothermic"], answer: 1 },
    { question: "The oxidation state of chromium in K₂Cr₂O₇ is:", options: ["+3", "+4", "+6", "+7"], answer: 2 },
    { question: "A buffer solution usually contains:", options: ["Only strong acid", "Only strong base", "Weak acid and conjugate base", "Only water"], answer: 2 },
    { question: "The pH of a 10^-3 M HCl solution is approximately:", options: ["1", "2", "3", "4"], answer: 2 },
    { question: "Which of the following is paramagnetic?", options: ["O₂", "N₂", "F₂", "H₂"], answer: 0 },
    { question: "Oxidation is defined as:", options: ["Gain of electrons", "Loss of electrons", "Increase in pH", "Decrease in temperature"], answer: 1 },
    { question: "Henry's law relates solubility of a gas to:", options: ["Pressure", "Temperature", "Volume", "Mass"], answer: 0 },
    { question: "Molarity is defined as:", options: ["Moles of solute per litre of solution", "Mass per litre", "Volume per mole", "Moles of solvent per litre"], answer: 0 },
    { question: "For a reaction rate = k[A]^2[B], the overall order is:", options: ["1", "2", "3", "4"], answer: 2 },
    { question: "Which of the following has the highest pKa?", options: ["HCl", "CH₃COOH", "HF", "H₂SO₄"], answer: 1 },
    { question: "Esterification involves the reaction of:", options: ["Carboxylic acid and alcohol", "Alkene and hydrogen", "Aldehyde and base", "Alcohol and ketone"], answer: 0 },
    { question: "SN1 reactions are favoured by:", options: ["Primary carbocation", "Secondary carbocation", "Tertiary carbocation", "Strong nucleophile"], answer: 2 },
    { question: "The bond angle in NH₃ is approximately:", options: ["90°", "104.5°", "107°", "120°"], answer: 2 },
    { question: "The IUPAC name of CH₃COOH is:", options: ["Methanol", "Acetic acid", "Ethanol", "Formic acid"], answer: 1 },
    { question: "The Nernst equation is used to calculate:", options: ["Cell potential", "Entropy", "Rate constant", "Activation energy"], answer: 0 },
    { question: "A spontaneous galvanic cell has:", options: ["E°cell < 0", "E°cell = 0", "E°cell > 0", "ΔG = 0"], answer: 2 },
    { question: "The amount of substance deposited during electrolysis is directly proportional to:", options: ["Current × time", "Resistance", "Voltage only", "Temperature"], answer: 0 },
    { question: "The hybridisation of N in NH₄⁺ is:", options: ["sp", "sp²", "sp³", "dsp²"], answer: 2 },
    { question: "Which alkaline earth metal ion has the highest hydration enthalpy?", options: ["Be²⁺", "Mg²⁺", "Ca²⁺", "Ba²⁺"], answer: 0 },
    { question: "The product of electrolysis of aqueous NaCl using inert electrodes is:", options: ["Na and Cl₂", "NaOH and Cl₂", "H₂ and O₂", "NaCl and H₂"], answer: 1 },
    { question: "Which species is aromatic?", options: ["Cyclobutadiene", "Benzene", "Cyclohexane", "Ethene"], answer: 1 },
    { question: "Fehling's solution gives a red precipitate with:", options: ["Ketone", "Aldehyde", "Alkane", "Ester"], answer: 1 },
    { question: "The oxidation number of sulfur in H₂SO₄ is:", options: ["+2", "+4", "+6", "+8"], answer: 2 }
  ],
  mathematics: [
    { question: "If roots of x² - 5x + 6 = 0 are α and β, α² + β² equals:", options: ["11", "13", "17", "25"], answer: 1 },
    { question: "The derivative of sin(x²) is:", options: ["cos(x²)", "2x cos(x²)", "2x sin(x²)", "x cos x"], answer: 1 },
    { question: "The sum of 1 + 1/2 + 1/4 + ... is:", options: ["1", "2", "3", "Does not exist"], answer: 1 },
    { question: "The distance between (1, 2, 3) and (4, 6, 3) is:", options: ["3", "4", "5", "6"], answer: 2 },
    { question: "For independent events A and B, P(A ∩ B) equals:", options: ["P(A) + P(B)", "P(A)P(B)", "P(A)/P(B)", "P(A)-P(B)"], answer: 1 },
    { question: "The area under y = 2x from x = 0 to x = 3 is:", options: ["3", "6", "9", "12"], answer: 2 },
    { question: "The derivative of x³ + 3x² is:", options: ["3x² + 6x", "3x² + 3x", "x² + 6x", "3x + 6"], answer: 0 },
    { question: "The value of 5! is:", options: ["20", "60", "120", "720"], answer: 2 },
    { question: "The number of ways to arrange 4 distinct objects is:", options: ["12", "16", "24", "48"], answer: 2 },
    { question: "The median of 1, 3, 5, 7, 9 is:", options: ["3", "5", "7", "9"], answer: 1 },
    { question: "The maximum value of sinθ + cosθ is:", options: ["1", "√2", "2", "0"], answer: 1 },
    { question: "The limit of sin x / x as x → 0 is:", options: ["0", "1", "∞", "Undefined"], answer: 1 },
    { question: "∫₀¹ x² dx equals:", options: ["1/2", "1/3", "1", "2/3"], answer: 1 },
    { question: "The value of cos 90° is:", options: ["0", "1", "-1", "1/2"], answer: 0 },
    { question: "The slope of the line 2x + 3y = 6 is:", options: ["2/3", "-2/3", "3/2", "-3/2"], answer: 1 },
    { question: "The product of roots of x² - 7x + 12 = 0 is:", options: ["7", "12", "-7", "-12"], answer: 1 },
    { question: "The sum of the first 10 natural numbers is:", options: ["45", "50", "55", "60"], answer: 2 },
    { question: "The value of log₁₀ 100 is:", options: ["1", "2", "10", "100"], answer: 1 },
    { question: "If a = 2, b = 3, then a² + b² equals:", options: ["5", "10", "13", "25"], answer: 2 },
    { question: "The equation of the x-axis is:", options: ["x = 0", "y = 0", "x = y", "x + y = 0"], answer: 1 },
    { question: "The dot product of two perpendicular vectors is:", options: ["1", "-1", "0", "Infinity"], answer: 2 },
    { question: "The binomial coefficient C(5,2) equals:", options: ["5", "10", "15", "20"], answer: 1 },
    { question: "The probability of drawing an ace from a standard deck is:", options: ["1/4", "1/13", "1/52", "4/13"], answer: 1 },
    { question: "The value of tan 45° is:", options: ["0", "1", "√3", "Not defined"], answer: 1 },
    { question: "If A = {1,2,3} and B = {2,3,4}, then A ∩ B is:", options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{}"], answer: 1 },
    { question: "The area of a rectangle with sides 4 and 6 is:", options: ["10", "12", "18", "24"], answer: 3 }
  ]
};

const questionText = document.querySelector("#questionText");
const answerGrid = document.querySelector("#answerGrid");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#nextButton");
const skipButton = document.querySelector("#skipButton");
const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const pauseTimerButton = document.querySelector("#pauseTimerButton");
const resetTimerButton = document.querySelector("#resetTimerButton");
const scoreValue = document.querySelector("#scoreValue");
const progressLabel = document.querySelector("#questionProgress");
const progressFill = document.querySelector("#progressFill");
const modeLabel = document.querySelector("#quizModeLabel");
const timerDisplay = document.querySelector("#timerDisplay");
const questionTimerDisplay = document.querySelector("#questionTimerDisplay");
const resultModal = document.querySelector("#resultModal");
const resultSummary = document.querySelector("#resultSummary");
const resultScore = document.querySelector("#resultScore");
const bestScoreEl = document.querySelector("#bestScore");
const resultTime = document.querySelector("#resultTime");
const closeModalButton = document.querySelector("#closeModalButton");
const subjectTabs = document.querySelectorAll(".subject-tab");

const quizDurationSeconds = 5 * 60;
const questionDurationSeconds = 15;
const bestScoreKey = "studysprint-quiz-best-score";
let mode = "physics";
let questions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let quizFinished = false;
let remainingSeconds = quizDurationSeconds;
let questionRemainingSeconds = questionDurationSeconds;
let timerId = null;
let questionTimerId = null;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(remainingSeconds);
  const timerCard = timerDisplay.closest(".timer-card");
  if (timerCard) {
    timerCard.classList.toggle("warning", remainingSeconds <= 30);
  }
}

function updateQuestionTimerDisplay() {
  questionTimerDisplay.textContent = `Q ${questionRemainingSeconds}s`;
  questionTimerDisplay.classList.toggle("warning", questionRemainingSeconds <= 5);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function stopQuestionTimer() {
  if (questionTimerId) {
    clearInterval(questionTimerId);
    questionTimerId = null;
  }
}

function playTone(type) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  const audioContext = new AudioCtx();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = type === "correct" ? "triangle" : "sawtooth";
  oscillator.frequency.value = type === "correct" ? 620 : 220;
  gainNode.gain.value = 0.03;

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.12);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.12);
}

function openResultModal() {
  const totalQuestions = questions.length || 1;
  const bestScore = Number(localStorage.getItem(bestScoreKey) || 0);
  const milestone = score > bestScore ? score : bestScore;
  if (score > bestScore) {
    localStorage.setItem(bestScoreKey, String(score));
  }

  resultScore.textContent = `${score}/${totalQuestions}`;
  bestScoreEl.textContent = `${milestone}/${totalQuestions}`;
  resultTime.textContent = formatTime(remainingSeconds);
  resultSummary.textContent = score >= Math.ceil(totalQuestions * 0.7)
    ? "Excellent work — you are on track for strong exam prep."
    : score >= Math.ceil(totalQuestions * 0.4)
      ? "Good effort — a bit more revision will push you higher."
      : "Keep practicing — every quiz builds momentum.";
  resultModal.classList.remove("hidden");
  resultModal.setAttribute("aria-hidden", "false");
}

function closeResultModal() {
  resultModal.classList.add("hidden");
  resultModal.setAttribute("aria-hidden", "true");
}

function finishQuizByTimeUp() {
  stopTimer();
  stopQuestionTimer();
  quizFinished = true;
  answered = true;
  answerGrid.querySelectorAll(".answer-button").forEach((button) => {
    button.disabled = true;
  });
  nextButton.disabled = true;
  skipButton.disabled = true;
  feedback.textContent = `Time's up! Final score: ${score}/${questions.length}.`;
  playTone("wrong");
  openResultModal();
}

function startQuizTimer() {
  stopTimer();
  remainingSeconds = quizDurationSeconds;
  updateTimerDisplay();

  timerId = window.setInterval(() => {
    if (remainingSeconds <= 0) {
      finishQuizByTimeUp();
      return;
    }

    remainingSeconds -= 1;
    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      finishQuizByTimeUp();
    }
  }, 1000);
}

function pauseQuizTimer() {
  stopTimer();
  pauseTimerButton.textContent = "Resume";
}

function resumeQuizTimer() {
  if (remainingSeconds <= 0) {
    remainingSeconds = quizDurationSeconds;
  }

  pauseTimerButton.textContent = "Stop";
  timerId = window.setInterval(() => {
    if (remainingSeconds <= 0) {
      finishQuizByTimeUp();
      return;
    }

    remainingSeconds -= 1;
    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      finishQuizByTimeUp();
    }
  }, 1000);
}

function resetQuizTimer() {
  stopTimer();
  remainingSeconds = quizDurationSeconds;
  updateTimerDisplay();
  pauseTimerButton.textContent = "Stop";
}

function startQuestionTimer() {
  stopQuestionTimer();
  questionRemainingSeconds = questionDurationSeconds;
  updateQuestionTimerDisplay();

  questionTimerId = window.setInterval(() => {
    questionRemainingSeconds -= 1;
    updateQuestionTimerDisplay();

    if (questionRemainingSeconds <= 0) {
      stopQuestionTimer();
      if (!answered) {
        answerGrid.querySelectorAll(".answer-button").forEach((button) => {
          button.disabled = true;
        });
        answered = true;
        feedback.textContent = "Time expired for this question. Moving on...";
        nextButton.disabled = false;
        playTone("wrong");
      }
    }
  }, 1000);
}

function buildQuestions() {
  questions = mode === "combined"
    ? Object.values(questionBanks).flat().sort(() => Math.random() - 0.5)
    : [...questionBanks[mode]];
}

function loadQuestion() {
  const question = questions[currentIndex];
  answered = false;
  quizFinished = false;
  questionText.textContent = question.question;
  progressLabel.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  feedback.textContent = "Select one answer.";
  nextButton.disabled = true;
  skipButton.disabled = false;
  answerGrid.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.dataset.index = index;
    answerGrid.appendChild(button);
  });

  startQuestionTimer();
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  answered = false;
  quizFinished = false;
  scoreValue.textContent = score;
  modeLabel.textContent = mode === "combined" ? "Combined Physics + Chemistry + Mathematics" : `${mode === "mathematics" ? "Mathematics" : mode[0].toUpperCase() + mode.slice(1)} quiz`;
  buildQuestions();
  if (!resultModal.classList.contains("hidden")) {
    closeResultModal();
  }
  startQuizTimer();
  loadQuestion();
  nextButton.disabled = true;
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
  stopQuestionTimer();
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
    playTone("correct");
  } else {
    button.classList.add("wrong");
    feedback.textContent = "Not quite. Review the highlighted answer.";
    playTone("wrong");
  }
  nextButton.disabled = false;
});

nextButton.addEventListener("click", () => {
  if (currentIndex === questions.length - 1) {
    stopTimer();
    stopQuestionTimer();
    quizFinished = true;
    feedback.textContent = `Quiz complete. Final score: ${score}/${questions.length}.`;
    nextButton.disabled = true;
    skipButton.disabled = true;
    openResultModal();
    return;
  }
  currentIndex += 1;
  loadQuestion();
});

skipButton.addEventListener("click", () => {
  if (answered || quizFinished) return;
  stopQuestionTimer();
  answered = true;
  answerGrid.querySelectorAll(".answer-button").forEach((button) => {
    button.disabled = true;
  });
  feedback.textContent = "Question skipped. You can move on.";
  nextButton.disabled = false;
  playTone("wrong");
});

pauseTimerButton.addEventListener("click", () => {
  if (pauseTimerButton.textContent === "Stop") {
    pauseQuizTimer();
  } else {
    resumeQuizTimer();
  }
});

resetTimerButton.addEventListener("click", () => {
  resetQuizTimer();
});

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
closeModalButton.addEventListener("click", () => {
  closeResultModal();
  startQuiz();
});
resultModal.addEventListener("click", (event) => {
  if (event.target === resultModal) {
    closeResultModal();
    startQuiz();
  }
});
startQuiz();
