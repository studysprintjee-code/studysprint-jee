const mockExamQuestions = [
  { question: "Which of the following statements is false for a particle moving in a circle with constant angular speed?", options: ["Velocity vector is tangent to the circle", "Acceleration vector is tangent to the circle", "Acceleration vector points to the centre of the circle", "Velocity and acceleration are perpendicular"], answer: 1 },
  { question: "The stress versus strain graph for two materials A and B shows that the Young's modulus of A and B satisfy:", options: ["YA = 2YB", "YA = YB", "YA = 3YB", "YB = 3YA"], answer: 2 },
  { question: "A system has basic dimensions as density, velocity and area. The dimensional representation of torque in this system is:", options: ["[A V^2 D]", "[A V D^2]", "[A^(3/2) V^2 D]", "[A^(3/2) V D]"], answer: 0 },
  { question: "The pressure inside two soap bubbles is 1.01 atm and 1.02 atm. The ratio of their volumes is:", options: ["16", "8", "4", "2"], answer: 0 },
  { question: "Two gases at the same pressure, volume and temperature are compressed: one isothermally and the other adiabatically to half volume. The ratio of final pressure of B to A is:", options: ["2^(γ - 1)", "2^(1 - γ)", "(1/2)^(γ - 1)", "(1/2)^(1 - γ)"], answer: 1 },
  { question: "If a unit of length becomes (1/10) m instead of 1 m, then the numerical value of the volume of a cube of 500 m^3 becomes:", options: ["4.32 × 10^3", "5.35 × 10^3", "5.33 × 10^3", "5.32 × 10^3"], answer: 2 },
  { question: "A simple pendulum has time period T in air. When its bob is completely immersed in a non-viscous liquid of density equal to 1/16 of bob density, its time period becomes:", options: ["T/√10", "T/√14", "T/√15", "T/√14"], answer: 2 },
  { question: "If n is a unit vector in the direction of vector A, then:", options: ["A = A n", "n = A/A", "A = n/A", "None of these"], answer: 1 },
  { question: "A wire of radius r stretched along a straight line is lightly fixed at A and B. When it is pulled into the shape ACB, the tension in the wire is:", options: ["(π Y r^2 d)/(2l^2)", "(π Y r^2 d)/(l^2)", "(π Y r^2 d^2)/(l^2)", "(π Y r^2 l)/(d^2)"], answer: 0 },
  { question: "Two rigid boxes contain different ideal gases. Box A has 1 mole of nitrogen at T0 and Box B has 1 mole of He at 7T0/3. After thermal contact, the final common temperature Tf is:", options: ["7T0/3", "3T0/2", "5T0/2", "3T0/7"], answer: 2 },
  { question: "Taking the Bohr radius as 53 pm, the radius of Li^2+ ion in the ground state is approximately:", options: ["53 pm", "27 pm", "18 pm", "13 pm"], answer: 3 },
  { question: "In Young's double-slit experiment, a thin film of thickness t and refractive index μ is placed in front of slit A. The central maximum shifts by:", options: ["(μ - 1)t", "towards B", "(μ - 1)βt/λ", "βμt/λ"], answer: 2 },
  { question: "A block of mass m and charge q is placed in an electric field E = E0(3y i - 4y j)h. If released from rest, it will oscillate with time period:", options: ["2π√(mh/qE0)", "2π√(mh/(qE0+qE0))", "2π√(mh/(qE0 - qE0))", "None of these"], answer: 0 },
  { question: "A charged particle moves through a magnetic field perpendicular to its direction. Then:", options: ["Both momentum and kinetic energy are not constant", "Both momentum and kinetic energy are constant", "Kinetic energy changes while momentum is constant", "Momentum changes while kinetic energy is constant"], answer: 3 },
  { question: "A block of mass m is at rest on another block of the same mass. The lower block is attached to a spring. The maximum amplitude so that both blocks remain in contact is:", options: ["1 m", "2 m", "10 m", "20 m"], answer: 1 },
  { question: "An LCR circuit has R = 110 Ω and source 220 V at 300 rad/s. If only capacitance is removed, current lags behind voltage by 45°. If only inductance is removed, current leads by 45°. The rms current in the circuit is:", options: ["1 A", "2 A", "1.5 A", "2.5 A"], answer: 1 },
  { question: "Four charges are placed each at a distance a from the origin. The dipole moment of the configuration is:", options: ["2qa j", "3qa j", "2qa(i + j)", "None of these"], answer: 0 },
  { question: "A 250-turn rectangular coil of length 2.1 cm and width 1.25 cm carries a current of 85 μA and is subjected to a magnetic field of strength 0.85 T. The work done for rotating the coil by 180° against the torque is:", options: ["4.55 μJ", "2.3 μJ", "1.15 μJ", "9.1 μJ"], answer: 2 },
  { question: "A metal surface in an evacuated tube is illuminated with monochromatic light causing photoelectrons to be emitted. If light intensity is doubled while wavelength remains the same, which graph best represents the new I-V relation?", options: ["Graph A", "Graph B", "Graph C", "Graph D"], answer: 1 },
  { question: "Given the nuclear density ordering of nuclides B, Li, Fe, Ne and Bi, which arrangement is correct?", options: ["Bi > Fe > Ne > B > Li", "Fe > Bi > Ne > B > Li", "Li > B > Ne > Fe > Bi", "Bi > Ne > Fe > B > Li"], answer: 0 },
  { question: "A particle is projected from A on plane AB such that AB = (2u^2 tanθ)/g. If u is the velocity of projection, the value of angle θ in degrees is:", options: ["30", "45", "60", "75"], answer: 1 },
  { question: "Figure shows a smooth cylindrical pulley of radius R with identical masses fixed on ideal thread. If the mass on x-axis is given a slight upward jerk and leaves contact at (R cosφ, R sinφ), find sinφ/φ.", options: ["1/2", "1/3", "2/3", "3/4"], answer: 2 },
  { question: "A force of 40 N is responsible for motion governed by s = t^2 + 2t. What is the momentum of the body at t = 2 s?", options: ["4 kg m/s", "8 kg m/s", "12 kg m/s", "16 kg m/s"], answer: 2 },
  { question: "Two plane mirrors subtend an angle adjusted at 1.5°/s. A light source S is shown. At what minimum time will 3 images be formed?", options: ["2 s", "3 s", "4 s", "5 s"], answer: 1 },
  { question: "Two circular loops of radii 0.05 m and 0.09 m are placed coaxially with centers 0.12 m apart. Equal charges are uniformly distributed on each loop. Find the potential difference between the centers in kV.", options: ["2", "4", "6", "8"], answer: 2 },
  { question: "CuSO4 solution and K2Cr2O7 solution are separated as shown below. Due to osmosis, which side shows green colour?", options: ["Side X", "Side Y", "Both sides", "Neither"], answer: 0 },
  { question: "Which group of molecules has bond order 1.5?", options: ["N2, O2, CO", "N2, O2, NO+", "C2, CN−, O2", "CN−, NO, O2−"], answer: 3 },
  { question: "Write the correct IUPAC name of the given bond-line formula.", options: ["4-Methyl-3-(1-methylpropyl)pent-3-enal", "3-Isopropenyl-4-methylhexanal", "3,5-Dimethylhex-4-enal", "None of these"], answer: 2 },
  { question: "When 5 litres of an ideal gas at 10 atm expands isothermally into vacuum until the volume is 15 litres, which statement is correct?", options: ["Both heat and work done are positive", "Heat absorbed is negative and work done is positive", "Work done is zero and heat is zero", "Work is positive and heat is zero"], answer: 2 },
  { question: "Which of the following are paramagnetic?", options: ["A and D only", "A, D and E only", "A and C only", "B and E only"], answer: 2 },
  { question: "Na/Et2O reaction gives major product X. Which structure matches?", options: ["CH3-CH=CH-CH2-CH3", "CH3-CH2-CH=CH-CH3", "CH3-CH2-CH2-CH=CH2", "CH3-CH2-CH=CH-CH3"], answer: 0 },
  { question: "The energy levels of a certain atom show a transition from 2E to E emitting a photon of wavelength λ. The wavelength of the photon emitted during transition from 4E/3 to E is:", options: ["λ/3", "3λ/4", "4λ/3", "3λ"], answer: 1 },
  { question: "Assertion A: The first ionisation enthalpy of Ga is higher than Al. Reason R: Poor shielding effect of d orbital in Ga increases ionisation enthalpy. Choose the correct option.", options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation"], answer: 2 },
  { question: "Arrange the following alkanols A, B and C in order of reactivity towards acid-catalysed dehydration.", options: ["A > B > C", "B > A > C", "B > C > A", "C > B > A"], answer: 2 },
  { question: "On the basis of Le-Chatelier's principle, which statements are correct?", options: ["A, B and C", "A and B only", "A and C only", "B and C only"], answer: 0 },
  { question: "Identify the incorrect statements about group 15 elements.", options: ["A, C, E only", "D and E only", "A, B, C only", "B, D, E only"], answer: 1 },
  { question: "Match the List-I with List-II. Choose the correct answer.", options: ["A-III, B-II, C-IV, D-I", "A-II, B-III, C-IV, D-I", "A-III, B-I, C-IV, D-II", "A-IV, B-I, C-II, D-III"], answer: 1 },
  { question: "A graph of molar conductivity of NaCl, HCl and NH4OH is plotted against √C. Which option is correct?", options: ["NaCl, HCl, NH4OH", "NH4OH, NaCl, HCl", "HCl, NaCl, NH4OH", "NH4OH, HCl, NaCl"], answer: 2 },
  { question: "An aqueous solution of a substance gives a white precipitate with dilute HCl which dissolves on heating. When H2S is passed through the hot acidic solution, black precipitate is obtained. The substance is:", options: ["Hg2^2+ salt", "Ag+ salt", "Pb2+ salt", "Cu2+ salt"], answer: 2 },
  { question: "Compound X gives a 2,4-DNP coloured precipitate, an iodoform yellow precipitate and no azo-dye formation. The compound X is:", options: ["Acetaldehyde", "Acetophenone", "Benzaldehyde", "Ethyl alcohol"], answer: 1 },
  { question: "Methyl-t-butyl ether, C5H12O, is added to gasoline. How many moles of oxygen gas, O2, are required to completely burn 1 mole of this compound?", options: ["4.5 mol", "6.0 mol", "7.5 mol", "8.0 mol"], answer: 2 },
  { question: "Match the reaction with the correct name.", options: ["A-II, B-I, C-III, D-IV", "A-III, B-IV, C-II, D-I", "A-II, B-IV, C-III, D-I", "A-III, B-I, C-II, D-IV"], answer: 2 },
  { question: "For element M with atomic number 19/9, choose the correct statements.", options: ["I and IV", "II, III and IV", "I, II and IV", "II and III"], answer: 2 },
  { question: "Decomposition of N2O5 takes place on heating. Which of the following statements are correct?", options: ["A and B only", "A, B and C", "A only", "A and C only"], answer: 1 },
  { question: "Knowing that lanthanoid chemistry is dominated by +3 oxidation state, which statement is incorrect?", options: ["Ln(III) compounds are generally colourless", "Ln(III) hydroxides are mainly basic", "Bonding in Ln(III) compounds is predominantly ionic", "Ionic sizes of Ln(III) decrease with increasing atomic number"], answer: 0 },
  { question: "Given the plot of molar conductivity vs concentration for KCl in aqueous solution. If the resistance of the conductivity cell at higher concentration is 100 Ω, then the resistance with the dilute solution is x Ω. The value of x is approximately:", options: ["50", "100", "200", "400"], answer: 3 },
  { question: "Among the complex ions, how many show cis-trans isomerism?", options: ["1", "2", "3", "4"], answer: 2 },
  { question: "The molar entropies of 2 mol of HI(g), 1 mol H2(g), 1 mol I2(g) at 300 K are 206.5, 114.6 and 180.7 J K^-1 mol^-1. Using ΔG°, the enthalpy change of the reaction 2HI(g) → H2(g) + I2(g) is 2.98 × 10^x J. Find x.", options: ["2", "3", "4", "5"], answer: 2 },
  { question: "How many structurally isomeric dienes with molecular formula C5H8 are possible?", options: ["2", "3", "4", "5"], answer: 2 },
  { question: "The total number of carboxylic acid groups in product P is:", options: ["1", "2", "3", "4"], answer: 1 },
  { question: "The function f(x) = 3cos^4 x + 10cos^3 x + 6cos^2 x - 3 for 0 ≤ x ≤ π is:", options: ["Increasing in (2π/3, π)", "Increasing in (0, π/3) ∪ (2π/3, π)", "Decreasing in (2π/3, π)", "All of the above"], answer: 1 },
  { question: "For ten observations with mean 5.5 and sum of squares 377, replacing wrong observations 4 and 5 by 6 and 8 gives the correct variance as:", options: ["6.7", "8.7", "7.5", "7.6"], answer: 3 },
  { question: "Let f: R→R be twice differentiable with f(2)=1. If F(x)=x f(x), ∫0^2 F'(x) dx = 6 and ∫0^2 F''(x) dx = 40, then ∫0^2 (F' + F) dx equals:", options: ["13", "9", "11", "15"], answer: 0 },
  { question: "Let P(1/3, 2/3) lie on ellipse x^2/a^2 + y^2/b^2 =1 and product of focal distances =7/4. There are two ellipses satisfying the condition. The product of their eccentricities is:", options: ["1/2", "1/3", "3/2", "3/4"], answer: 2 },
  { question: "The number of five-digit numbers greater than 40000 and divisible by 5 that can be formed using digits 0,1,3,5,7,9 without repetition is:", options: ["120", "132", "72", "96"], answer: 3 },
  { question: "Given A(0,0) and B(x,y) with x∈(0,1), y>0, the slope of AB is m1. Point C lies on x=1 such that slope of BC is m2, where 0 < m2 < m1 < 1. If area of triangle ABC can be expressed as (1 - m1m2)f(x), the largest possible value of f(x) is:", options: ["1", "1/2", "1/4", "1/8"], answer: 2 },
  { question: "Let f:R→R be a function defined piecewise and continuous at x=0. If α and β are constants, then α^2 + β^2 equals:", options: ["3", "6", "12", "48"], answer: 1 },
  { question: "Let 1nC1 = 28, 1nC2 = 56 and 1nC3 = 70. Let A = (4 cos t, 4 sin t), B = (2 sin t, 2 cos t), C = (r, n-r) be the vertices of triangle ABC. If the centroid satisfies x^2 + y^2 = α, then α equals:", options: ["20", "8", "6", "18"], answer: 0 },
  { question: "Let R = {(x,y): x,y∈N and x^2 - 4xy + y^2 = 0}. Then relation R is:", options: ["Reflexive but neither symmetric nor transitive", "Symmetric and transitive", "Reflexive and symmetric", "Reflexive and transitive"], answer: 3 },
  { question: "Evaluate lim_{x→0} [cosec x + 2 cos x - 3 cos^2 x + cos x sin x + 4].", options: ["0", "1", "1/25", "-1/25"], answer: 1 },
  { question: "The area under the curve y = |cos x - sin x| between x=0 and x=2π above the x-axis is:", options: ["2√2", "2√2 - 2", "2√2 + 2", "None of these"], answer: 2 },
  { question: "If (z - 1)/(z + 2i) = ? represents a circle with centre C and the area of triangle formed by (0,0), C and (α,0) is 11, then α^2 is:", options: ["100", "101", "102", "103"], answer: 2 },
  { question: "The distance of point (-1,2,3) from the line through (2,3,5) which makes equal angle with the axes is:", options: ["7/3 units", "14/3 units", "7 units", "3 units"], answer: 1 },
  { question: "Let y(x) be the solution of the differential equation dy/dx = (x+y)/(x^2 + 1). If y(0)=0, then y(1) equals:", options: ["2/3", "3/2", "1/2", "1"], answer: 0 },
  { question: "If f'(x)=f(x) and f(0)=2, then ∫(f(x)+3) dx = ?", options: ["log(3 + 8x) + C", "(1/4)log(3 + 8x) + C", "(1/2)log(3 + 8x) + C", "None of these"], answer: 2 },
  { question: "Find the value of cos^{-1}(sin x) + cos^{-1}(sin x), if x ∈ (3π/4, π).", options: ["tan^{-1}(12/5) + x", "tan^{-1}(12/5) - x", "tan^{-1}(5/12) - x", "tan^{-1}(5/12) + x"], answer: 2 },
  { question: "If the components of vector a = αi + βj + γk along and perpendicular to b = 3i + j - k are given, then α^2 + β^2 + γ^2 equals:", options: ["26", "23", "18", "16"], answer: 0 },
  { question: "Given f(x)=ln x and g(x)=(x^4 - 2x^3 + 2x^2 - 2x + 1)/(x^2 + x + 1), then the domain of f(g(x)) is:", options: ["(0,∞)", "(1,∞)", "R", "(-∞,0)"], answer: 0 },
  { question: "If L = sin^2(π/16) - sin^2(π/8), M = cos^2(π/16) - sin^2(π/8), then the correct relation is:", options: ["L = 1 - cos(π/8)", "M = 1 + cos(π/8)", "M = 1 + cos(π/4)", "L = 1 - cos(π/4)"], answer: 2 },
  { question: "Two students A and B throw dice one by one. A wins when the sum is 5 and B wins when the sum is 8. If A starts the game, the probability that A wins is:", options: ["11/19", "12/19", "9/19", "10/19"], answer: 1 },
  { question: "The matrix M_r is defined as [[r,1],[1,r]] for r∈N. If det(M_1) + det(M_2) + ... + det(M_2007) = 2^k, then floor(k/215) is:", options: ["1", "2", "3", "4"], answer: 1 },
  { question: "Let a = 2^2 + 3^2 + ... and for n≥3 define f(n) using binomial coefficients. If f(2007) + f(2008) = 7k, find k.", options: ["4", "5", "6", "7"], answer: 2 },
  { question: "Let integers a, b ∈ [-3,3] with a+b ≠ 0. The number of ordered pairs (a,b) satisfying the given complex conditions is:", options: ["12", "16", "20", "24"], answer: 2 },
  { question: "Let f(x) = ax^2 + bx + c where a,b,c are integers. If a trigonometric expression equals f(2), find the value of f(2).", options: ["4", "5", "6", "7"], answer: 1 },
  { question: "The roots of the quadratic equation x^2 - 3x + p = 0 are the 10th and 11th terms of an arithmetic progression with common difference 3/2. If the sum of the first 11 terms is 88, then q - 2p equals:", options: ["8", "10", "12", "14"], answer: 3 }
];

const mockTimerDisplay = document.querySelector("#mockTimerDisplay");
const mockPrintablePaper = document.querySelector("#mockPrintablePaper");
const mockQuestionText = document.querySelector("#mockQuestionText");
const mockQuestionCounter = document.querySelector("#mockQuestionCounter");
const mockOptions = document.querySelector("#mockOptions");
const mockMarkButton = document.querySelector("#mockMarkButton");
const mockNextButton = document.querySelector("#mockNextButton");
const startMockButton = document.querySelector("#startMockButton");
const sectionButtons = Array.from(document.querySelectorAll(".section-chip"));

const subjectStartIndex = {
  physics: 0,
  chemistry: 25,
  maths: 50,
};

const mockState = {
  questions: [],
  currentIndex: 0,
  answers: {},
  marked: new Set(),
  remainingSeconds: 180 * 60,
  timerId: null,
  finished: false,
  started: false,
  selectedSection: "physics",
};

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function buildMockQuestions() {
  mockState.questions = [...mockExamQuestions];
  mockState.currentIndex = subjectStartIndex[mockState.selectedSection];
  mockState.answers = {};
  mockState.marked = new Set();
  mockState.remainingSeconds = 180 * 60;
  mockState.finished = false;
  mockState.started = false;
  updateMockTimer();
  renderPrintablePaper();
  updateStartState();
}

function updateSelectedSection(section) {
  const validSection = subjectStartIndex[section] !== undefined ? section : "physics";
  mockState.selectedSection = validSection;
  sectionButtons.forEach((button) => {
    const isActive = button.dataset.section === mockState.selectedSection;
    button.classList.toggle("active", isActive);
  });

  if (mockState.started) {
    mockState.currentIndex = subjectStartIndex[validSection];
    renderQuestion();
  }
}

function renderPrintablePaper() {
  if (!mockPrintablePaper) return;

  const subjectGroups = [
    { title: "Physics", start: 0, end: 25 },
    { title: "Chemistry", start: 25, end: 50 },
    { title: "Mathematics", start: 50, end: 75 }
  ];

  mockPrintablePaper.innerHTML = subjectGroups
    .map(({ title, start, end }) => {
      const questions = mockState.questions.slice(start, end);
      return `
        <div class="print-section">
          <div class="print-section-header">${title} Section</div>
          ${questions
            .map((question, index) => {
              const globalNumber = start + index + 1;
              return `
                <div class="print-question-item">
                  <div class="print-question-number">Q${globalNumber}.</div>
                  <div class="print-question-text">${question.question}</div>
                  <ol class="print-options-list">
                    ${question.options
                      .map((option, optIndex) => `<li>${String.fromCharCode(65 + optIndex)}. ${option}</li>`)
                      .join("")}
                  </ol>
                </div>
              `;
            })
            .join("")}
        </div>
      `;
    })
    .join("");
}

function updateMockTimer() {
  if (mockTimerDisplay) {
    mockTimerDisplay.textContent = formatTime(mockState.remainingSeconds);
  }
}

function updateStartState() {
  const started = mockState.started;

  if (mockMarkButton) {
    mockMarkButton.disabled = !started;
  }

  if (mockNextButton) {
    mockNextButton.disabled = !started;
    mockNextButton.textContent = started
      ? (mockState.currentIndex === mockState.questions.length - 1 ? "Submit Mock" : "Next Question")
      : "Start Mock Test";
  }

  if (!started) {
    if (mockQuestionCounter) {
      mockQuestionCounter.textContent = "Ready to begin";
    }

    if (mockQuestionText) {
      mockQuestionText.textContent = "Press Start Mock Test to begin your exam.";
    }

    if (mockOptions) {
      mockOptions.innerHTML = `
        <div class="mock-cta-box">
          <strong>Instructions</strong>
          <ul>
            <li>75 questions</li>
            <li>3 sections: Physics, Chemistry, Mathematics</li>
            <li>180 minutes total duration</li>
            <li>+4 for correct and -1 for wrong</li>
          </ul>
        </div>
      `;
    }
  }
}

function stopMockTimer() {
  if (mockState.timerId) {
    clearInterval(mockState.timerId);
    mockState.timerId = null;
  }
}

function startMockTimer() {
  stopMockTimer();
  mockState.timerId = window.setInterval(() => {
    if (mockState.finished) {
      stopMockTimer();
      return;
    }

    if (mockState.remainingSeconds <= 0) {
      stopMockTimer();
      mockState.finished = true;
      finishMock();
      return;
    }

    mockState.remainingSeconds -= 1;
    updateMockTimer();
  }, 1000);
}

function startMockSession() {
  if (mockState.started) return;

  mockState.started = true;
  mockState.currentIndex = subjectStartIndex[mockState.selectedSection];
  renderQuestion();
  startMockTimer();
  updateStartState();
}

function renderQuestion() {
  if (!mockState.questions.length) return;

  const question = mockState.questions[mockState.currentIndex];
  if (!question) return;

  if (mockQuestionCounter) {
    mockQuestionCounter.textContent = `Question ${mockState.currentIndex + 1} / ${mockState.questions.length}`;
  }

  if (mockQuestionText) {
    mockQuestionText.textContent = question.question;
  }

  if (mockOptions) {
    mockOptions.innerHTML = "";
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-btn";
      button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

      const selectedIndex = mockState.answers[mockState.currentIndex];
      if (selectedIndex === index) {
        button.classList.add("active");
      }

      button.addEventListener("click", () => {
        mockState.answers[mockState.currentIndex] = index;
        renderQuestion();
      });

      mockOptions.appendChild(button);
    });
  }

  if (mockMarkButton) {
    mockMarkButton.textContent = mockState.marked.has(mockState.currentIndex)
      ? "Unmark Review"
      : "Mark for Review";
  }

  if (mockNextButton) {
    mockNextButton.textContent = mockState.currentIndex === mockState.questions.length - 1
      ? "Submit Mock"
      : "Next Question";
  }
}

function finishMock() {
  let score = 0;
  mockState.questions.forEach((question, index) => {
    if (mockState.answers[index] === question.answer) {
      score += 1;
    }
  });

  if (mockQuestionText) {
    mockQuestionText.textContent = "Mock test completed";
  }

  if (mockOptions) {
    mockOptions.innerHTML = "";
    const resultBox = document.createElement("div");
    resultBox.className = "mock-summary";
    const percentage = Math.round((score / mockState.questions.length) * 100);
    resultBox.innerHTML = `Final score: <strong>${score}/${mockState.questions.length}</strong> · ${percentage}% accuracy · ${score >= 45 ? "Excellent performance" : score >= 25 ? "Good improvement" : "Keep practicing"}`;
    mockOptions.appendChild(resultBox);
  }

  if (mockMarkButton) {
    mockMarkButton.disabled = true;
    mockMarkButton.textContent = "Mock Ended";
  }

  if (mockNextButton) {
    mockNextButton.disabled = false;
    mockNextButton.textContent = "Retake Mock";
    mockNextButton.onclick = () => {
      buildMockQuestions();
      startMockSession();
      mockNextButton.onclick = null;
      mockNextButton.addEventListener("click", handleNextQuestion);
    };
  }
}

function handleNextQuestion() {
  if (mockState.currentIndex >= mockState.questions.length - 1) {
    mockState.finished = true;
    finishMock();
    return;
  }

  mockState.currentIndex += 1;
  renderQuestion();
}

if (mockMarkButton) {
  mockMarkButton.addEventListener("click", () => {
    if (mockState.finished) return;
    if (mockState.marked.has(mockState.currentIndex)) {
      mockState.marked.delete(mockState.currentIndex);
    } else {
      mockState.marked.add(mockState.currentIndex);
    }
    renderQuestion();
  });
}

if (mockNextButton) {
  mockNextButton.addEventListener("click", handleNextQuestion);
}

if (startMockButton) {
  startMockButton.addEventListener("click", startMockSession);
}

sectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateSelectedSection(button.dataset.section);
  });
});

const printMockPaperButton = document.querySelector("#printMockPaperButton");
if (printMockPaperButton) {
  printMockPaperButton.addEventListener("click", () => {
    window.print();
  });
}

updateSelectedSection(mockState.selectedSection);
buildMockQuestions();
updateStartState();
