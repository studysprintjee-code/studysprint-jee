const subjectData = {
  physics: {
    name: "Physics",
    icon: "⚛",
    color: "#315bea",
    darkColor: "#172b78",
    title: "Explore the laws of motion.",
    description:
      "Build strong concepts, understand the universe, and practise important JEE-level problems.",
    chapters: [
      {
        title: "Units and Measurements",
        description: "Dimensions, errors, significant figures, and instruments.",
        concept:
          "Measurement gives meaning to physical quantities. Every measurement contains a unit and may include a small experimental error.",
        points: [
          "Use dimensions to check whether an equation is physically possible.",
          "Significant figures communicate the precision of a measurement.",
          "Absolute error is the difference between measured and true value.",
          "Dimensional analysis cannot determine numerical constants."
        ],
        formulas: [
          [
            "Percentage error",
            "Percentage error = absolute error / measured value × 100"
          ],
          ["Dimensional formula", "[Q] = MᵃLᵇTᶜ"],
          ["Mean value", "Mean = sum of observations / number of observations"]
        ],
        map: ["Measurement", "Units", "Dimensions", "Errors"],
        quiz: [
          {
            question: "Which is a fundamental SI quantity?",
            options: ["Force", "Energy", "Mass", "Pressure"],
            answer: 2
          },
          {
            question: "The dimension of velocity is:",
            options: ["[LT⁻¹]", "[LT⁻²]", "[MLT⁻¹]", "[M⁰L⁰T⁰]"],
            answer: 0
          }
        ]
      },
      {
        title: "Kinematics",
        description: "Motion in one dimension, vectors, and projectile motion.",
        concept:
          "Kinematics describes motion using displacement, velocity, acceleration, and time without discussing the cause of motion.",
        points: [
          "Displacement is a vector, while distance is a scalar.",
          "The slope of a position-time graph gives velocity.",
          "The slope of a velocity-time graph gives acceleration.",
          "Projectile motion combines horizontal and vertical motion."
        ],
        formulas: [
          ["First equation", "v = u + at"],
          ["Second equation", "s = ut + 1/2 at²"],
          ["Third equation", "v² = u² + 2as"]
        ],
        map: ["Kinematics", "Displacement", "Velocity", "Acceleration"],
        quiz: [
          {
            question: "The slope of a velocity-time graph represents:",
            options: ["Distance", "Acceleration", "Displacement", "Jerk"],
            answer: 1
          },
          {
            question: "Which quantity is scalar?",
            options: ["Velocity", "Displacement", "Speed", "Acceleration"],
            answer: 2
          }
        ]
      }
    ]
  },
  chemistry: {
    name: "Chemistry",
    icon: "🧪",
    color: "#20a36a",
    darkColor: "#12613f",
    title: "Understand matter at every level.",
    description:
      "Connect atoms, reactions, and patterns with clear explanations and smart revision tools.",
    chapters: [
      {
        title: "Some Basic Concepts",
        description:
          "Moles, atomic mass, percentage composition, and stoichiometry.",
        concept:
          "The mole concept connects microscopic particles with measurable quantities such as mass and volume.",
        points: [
          "One mole contains approximately 6.022 × 10²³ particles.",
          "Molar mass is the mass of one mole of a substance.",
          "Stoichiometry uses balanced equations to compare quantities.",
          "Limiting reagent determines the maximum product formed."
        ],
        formulas: [
          ["Moles", "n = given mass / molar mass"],
          ["Molarity", "M = moles / volume in litres"],
          ["Mole fraction", "Xᵢ = nᵢ / total moles"]
        ],
        map: ["Mole Concept", "Mass", "Moles", "Stoichiometry"],
        quiz: [
          {
            question: "Avogadro's number is approximately:",
            options: ["6.022 × 10²³", "9.8", "3 × 10⁸", "1.6 × 10⁻¹⁹"],
            answer: 0
          },
          {
            question: "Molarity is expressed as:",
            options: ["mol/kg", "mol/L", "g/L²", "L/mol"],
            answer: 1
          }
        ]
      },
      {
        title: "Atomic Structure",
        description:
          "Quantum numbers, orbitals, electronic configuration, and spectra.",
        concept:
          "Atomic structure explains how electrons are arranged around the nucleus and how their energy changes.",
        points: [
          "Electrons occupy orbitals with specific energy levels.",
          "Four quantum numbers describe an electron.",
          "An orbital can contain a maximum of two electrons.",
          "Electrons fill lower-energy orbitals first."
        ],
        formulas: [
          ["Photon energy", "E = hν"],
          ["de Broglie wavelength", "λ = h / mv"],
          ["Energy of photon", "E = hc / λ"]
        ],
        map: ["Atom", "Nucleus", "Electrons", "Orbitals"],
        quiz: [
          {
            question: "Maximum electrons in one orbital are:",
            options: ["1", "2", "8", "16"],
            answer: 1
          },
          {
            question: "The charge of an electron is:",
            options: ["Positive", "Neutral", "Negative", "Variable"],
            answer: 2
          }
        ]
      }
    ]
  },
  mathematics: {
    name: "Mathematics",
    icon: "π",
    color: "#d38a00",
    darkColor: "#765000",
    title: "Turn problems into patterns.",
    description:
      "Improve your accuracy, discover shortcuts, and build the confidence to solve challenging problems.",
    chapters: [
      {
        title: "Quadratic Equations",
        description:
          "Roots, nature of roots, equations, and inequalities.",
        concept:
          "A quadratic equation is a polynomial equation of degree two. Its roots can be studied using the discriminant and relations between roots.",
        points: [
          "The standard form is ax² + bx + c = 0, where a is not zero.",
          "The discriminant determines the nature of the roots.",
          "The sum of roots is -b/a.",
          "The product of roots is c/a."
        ],
        formulas: [
          ["Quadratic roots", "x = (-b ± √D) / 2a"],
          ["Discriminant", "D = b² - 4ac"],
          ["Sum of roots", "α + β = -b/a"]
        ],
        map: ["Quadratic", "Roots", "Discriminant", "Graph"],
        quiz: [
          {
            question: "The discriminant of ax² + bx + c is:",
            options: ["a² - 4bc", "b² - 4ac", "c² - 4ab", "a + b + c"],
            answer: 1
          },
          {
            question: "If D > 0, the roots are:",
            options: ["Real and distinct", "Equal", "Imaginary", "Always zero"],
            answer: 0
          }
        ]
      },
      {
        title: "Sequences and Series",
        description: "AP, GP, special series, and summation techniques.",
        concept:
          "A sequence is an ordered list of numbers. A series is formed when the terms of a sequence are added.",
        points: [
          "An arithmetic progression has a constant common difference.",
          "A geometric progression has a constant common ratio.",
          "The nth term helps calculate any position in a sequence.",
          "Infinite geometric series converge when the absolute ratio is less than one."
        ],
        formulas: [
          ["AP nth term", "aₙ = a + (n - 1)d"],
          ["AP sum", "Sₙ = n/2 [2a + (n - 1)d]"],
          ["GP nth term", "aₙ = arⁿ⁻¹"]
        ],
        map: ["Sequences", "AP", "GP", "Summation"],
        quiz: [
          {
            question: "The common difference of 3, 7, 11 is:",
            options: ["2", "3", "4", "5"],
            answer: 2
          },
          {
            question: "The common ratio of 2, 6, 18 is:",
            options: ["2", "3", "6", "9"],
            answer: 1
          }
        ]
      }
    ]
  }
};

const jeeSyllabus = {
  physics: [
    ["Units and Measurements", "Dimensions, errors, significant figures, and instruments."],
    ["Laws of Motion", "Newton's laws, friction, circular motion, and connected bodies."],
    ["Work, Energy and Power", "Work-energy theorem, power, collisions, and conservation laws."],
    ["Gravitation", "Gravitational field, potential, satellites, and escape velocity."],
    ["Thermodynamics", "Laws of thermodynamics, heat engines, and kinetic theory."],
    ["Kinetic Theory of Gases", "Molecular motion, gas laws, kinetic theory, and degrees of freedom."],
    ["Current Electricity", "Circuits, resistance, Kirchhoff's laws, and electrical instruments."],
  ],
  chemistry: [
    ["Some Basic Concepts", "Moles, atomic mass, percentage composition, and stoichiometry."],
    ["Atomic Structure", "Quantum numbers, orbitals, electronic configuration, and spectra."],
    ["Chemical Bonding", "Ionic and covalent bonding, VSEPR, hybridisation, and MOT."],
    ["States of Matter", "Gas laws, kinetic theory, liquids, and intermolecular forces."],
    ["Thermodynamics", "Enthalpy, entropy, Gibbs energy, and spontaneity of reactions."],
    ["Equilibrium", "Chemical and ionic equilibrium, acids, bases, buffers, and solubility."],
    ["Electrochemistry", "Conductance, galvanic cells, Nernst equation, and electrolysis."],
    ["Chemical Kinetics", "Rate laws, order of reaction, Arrhenius equation, and catalysis."],
    ["Coordination Compounds", "Nomenclature, isomerism, bonding, and applications."],
    ["Organic Chemistry Basics", "Structure, mechanisms, isomerism, and reaction principles."],
    ["Hydrocarbons", "Alkanes, alkenes, alkynes, aromatic compounds, and reactions."],
    ["Biomolecules and Polymers", "Carbohydrates, proteins, nucleic acids, and synthetic polymers."]
  ],
  mathematics: [
    ["Sets, Relations and Functions", "Sets, mappings, composition, inverse functions, and graphs."],
    ["Complex Numbers", "Algebra of complex numbers, Argand plane, and geometric form."],
    ["Quadratic Equations", "Roots, nature of roots, equations, and inequalities."],
    ["Sequences and Series", "AP, GP, special series, and summation techniques."],
    ["Permutations and Combinations", "Counting principles, arrangements, selections, and distributions."],
    ["Binomial Theorem", "Expansion, general term, middle terms, and binomial coefficients."],
    ["Limits, Continuity and Differentiability", "Limits, continuity, derivatives, and differentiability."],
    ["Integral Calculus", "Indefinite and definite integrals, area, and applications."],
    ["Differential Equations", "Formation, order, degree, and standard first-order equations."],
    ["Coordinate Geometry", "Straight lines, circles, conics, and their properties."],
    ["Vectors and Three-Dimensional Geometry", "Vector algebra, lines, planes, and distances."],
    ["Probability and Statistics", "Probability, distributions, mean, variance, and data analysis."]
  ]
};

const additionalPhysicsChapters = [
  ["Motion in a Straight Line and Plane", "Motion graphs, relative motion, vectors, and projectile motion."],
  ["System of Particles and Rotational Motion", "Centre of mass, torque, angular momentum, rolling, and moment of inertia."],
  ["Mechanical Properties of Solids", "Stress, strain, elasticity, Young's modulus, and elastic energy."],
  ["Mechanical Properties of Fluids", "Pressure, viscosity, surface tension, Bernoulli's theorem, and fluid flow."],
  ["Thermal Properties of Matter", "Thermal expansion, calorimetry, heat transfer, and change of state."],
  ["Electric Charges and Fields", "Coulomb's law, electric field, dipole, flux, and Gauss's law."],
  ["Electrostatic Potential and Capacitance", "Potential, capacitors, combinations, dielectrics, and stored energy."],
  ["Moving Charges and Magnetism", "Lorentz force, Biot-Savart law, Ampere's law, and magnetic motion."],
  ["Magnetism and Matter", "Magnetic materials, earth's magnetism, susceptibility, and hysteresis."],
  ["Alternating Current and Electromagnetic Induction", "Faraday's law, Lenz's law, AC circuits, transformers, and generators."],
  ["Ray Optics and Optical Instruments", "Reflection, refraction, lenses, mirrors, prisms, and optical instruments."],
  ["Wave Optics", "Interference, diffraction, polarisation, and Young's double-slit experiment."],
  ["Dual Nature of Matter and Radiation", "Photoelectric effect, matter waves, de Broglie relation, and photons."],
  ["Atoms and Nuclei", "Atomic models, spectra, nuclear properties, radioactivity, and binding energy."],
  ["Semiconductor Electronics", "Semiconductors, diodes, transistors, logic gates, and digital circuits."],
  ["Electromagnetic Waves", "Properties of electromagnetic waves, spectrum, and applications."],
  ["Oscillations", "Simple harmonic motion, energy, spring systems, and pendulums."],
  ["Waves", "Wave motion, standing waves, sound, beats, and Doppler effect."]
];

jeeSyllabus.physics = [
  ["Units and Measurements", "Dimensions, errors, significant figures, and instruments."],
  ["Motion in a Straight Line and Plane", "Motion graphs, relative motion, vectors, and projectile motion."],
  ["Laws of Motion", "Newton's laws, friction, circular motion, and connected bodies."],
  ["Work, Energy and Power", "Work-energy theorem, power, collisions, and conservation laws."],
  ["System of Particles and Rotational Motion", "Centre of mass, torque, angular momentum, rolling, and moment of inertia."],
  ["Gravitation", "Gravitational field, potential, satellites, and escape velocity."],
  ["Mechanical Properties of Solids", "Stress, strain, elasticity, Young's modulus, and elastic energy."],
  ["Mechanical Properties of Fluids", "Pressure, viscosity, surface tension, Bernoulli's theorem, and fluid flow."],
  ["Thermal Properties of Matter", "Thermal expansion, calorimetry, heat transfer, and change of state."],
  ["Thermodynamics", "Laws of thermodynamics, heat engines, and kinetic theory."],
  ["Kinetic Theory of Gases", "Molecular motion, gas laws, kinetic theory, and degrees of freedom."],
  ["Oscillations", "Simple harmonic motion, energy, spring systems, and pendulums."],
  ["Waves", "Wave motion, standing waves, sound, beats, and Doppler effect."],
  ["Electric Charges and Fields", "Coulomb's law, electric field, dipole, flux, and Gauss's law."],
  ["Electrostatic Potential and Capacitance", "Potential, capacitors, combinations, dielectrics, and stored energy."],
  ["Current Electricity", "Circuits, resistance, Kirchhoff's laws, and electrical instruments."],
  ["Moving Charges and Magnetism", "Lorentz force, Biot-Savart law, Ampere's law, and magnetic motion."],
  ["Magnetism and Matter", "Magnetic materials, earth's magnetism, susceptibility, and hysteresis."],
  ["Alternating Current and Electromagnetic Induction", "Faraday's law, Lenz's law, AC circuits, transformers, and generators."],
  ["Electromagnetic Waves", "Properties of electromagnetic waves, spectrum, and applications."],
  ["Ray Optics and Optical Instruments", "Reflection, refraction, lenses, mirrors, prisms, and optical instruments."],
  ["Wave Optics", "Interference, diffraction, polarisation, and Young's double-slit experiment."],
  ["Dual Nature of Matter and Radiation", "Photoelectric effect, matter waves, de Broglie relation, and photons."],
  ["Atoms and Nuclei", "Atomic models, spectra, nuclear properties, radioactivity, and binding energy."],
  ["Semiconductor Electronics", "Semiconductors, diodes, transistors, logic gates, and digital circuits."]
];

const formulaLibrary = {
  physics: [
    [["Percentage error", "Percentage error = absolute error / measured value × 100"], ["Dimensional formula", "[Q] = MᵃLᵇTᶜ"]],
    [["First equation", "v = u + at"], ["Projectile range", "R = u² sin 2θ / g"]],
    [["Newton's second law", "F = ma"], ["Centripetal force", "F = mv² / r"]],
    [["Work", "W = Fs cos θ"], ["Kinetic energy", "K = 1/2 mv²"]],
    [["Torque", "τ = rF sin θ"], ["Angular momentum", "L = Iω"]],
    [["Gravitational force", "F = Gm₁m₂ / r²"], ["Orbital speed", "v = √(GM / r)"]],
    [["First law", "ΔQ = ΔU + W"], ["Ideal gas law", "PV = nRT"]],
    [["Electric field", "E = F / q"], ["Capacitance", "C = Q / V"]],
    [["Ohm's law", "V = IR"], ["Electrical power", "P = VI = I²R"]],
    [["Magnetic force", "F = qvB sin θ"], ["Faraday's law", "ε = -dΦ / dt"]],
    [["Lens formula", "1/f = 1/v - 1/u"], ["Young's fringe width", "β = λD / d"]],
    [["Photon energy", "E = hν"], ["Radioactive decay", "N = N₀e⁻λᵗ"]]
  ],
  chemistry: [
    [["Moles", "n = given mass / molar mass"], ["Molarity", "M = moles / volume in litres"]],
    [["Photon energy", "E = hν"], ["de Broglie wavelength", "λ = h / mv"]],
    [["Formal charge", "FC = valence e⁻ - nonbonding e⁻ - bonding e⁻/2"], ["Bond order", "Bond order = (bonding e⁻ - antibonding e⁻) / 2"]],
    [["Ideal gas law", "PV = nRT"], ["Average kinetic energy", "E = 3RT / 2"]],
    [["Gibbs energy", "ΔG = ΔH - TΔS"], ["Heat relation", "q = mcΔT"]],
    [["Equilibrium constant", "Kc = [products] / [reactants]"], ["pH", "pH = -log[H⁺]"]],
    [["Nernst equation", "E = E° - 0.0591 log Q / n"], ["Cell potential", "E°cell = E°cathode - E°anode"]],
    [["Rate law", "Rate = k[A]ᵐ[B]ⁿ"], ["Arrhenius equation", "k = Ae⁻ᴱᵃ/ᴿᵀ"]],
    [["Crystal field splitting", "Δo = 10Dq"], ["Magnetic moment", "μ = √n(n + 2) BM"]],
    [["Molar mass", "M = mass / moles"], ["Degree of unsaturation", "DBE = (2C + 2 + N - H - X) / 2"]],
    [["Alkene addition", "C=C + H₂ → alkane"], ["Benzene substitution", "C₆H₆ + E⁺ → substituted benzene"]],
    [["Molarity", "M = moles / volume in litres"], ["Mole fraction", "Xᵢ = nᵢ / total moles"]]
  ],
  mathematics: [
    [["Combination", "ⁿCᵣ = n! / (r!(n-r)!)"], ["Function composition", "(f ∘ g)(x) = f(g(x))"]],
    [["Modulus", "|z| = √(x² + y²)"], ["Euler form", "eⁱθ = cos θ + i sin θ"]],
    [["Quadratic roots", "x = (-b ± √D) / 2a"], ["Discriminant", "D = b² - 4ac"]],
    [["AP nth term", "aₙ = a + (n - 1)d"], ["GP sum", "Sₙ = a(rⁿ - 1) / (r - 1)"]],
    [["Permutations", "ⁿPᵣ = n! / (n-r)!"], ["Circular arrangements", "Arrangements = (n - 1)!"]],
    [["Binomial term", "Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳbʳ"], ["Binomial coefficient", "ⁿCᵣ = ⁿCₙ⁻ʳ"]],
    [["Derivative of xⁿ", "d(xⁿ)/dx = nxⁿ⁻¹"], ["Product rule", "(uv)' = u'v + uv'"]],
    [["Fundamental theorem", "∫ₐᵇ f(x)dx = F(b) - F(a)"], ["Integration by parts", "∫u dv = uv - ∫v du"]],
    [["Linear differential equation", "dy/dx + Py = Q"], ["Auxiliary equation", "CF from auxiliary equation = 0"]],
    [["Distance between points", "d = √((x₂-x₁)² + (y₂-y₁)²)"], ["Circle equation", "(x-h)² + (y-k)² = r²"]],
    [["Dot product", "a·b = |a||b| cos θ"], ["Scalar triple product", "[a b c] = a·(b×c)"]],
    [["Conditional probability", "P(A|B) = P(A∩B) / P(B)"], ["Variance", "σ² = E(X²) - [E(X)]²"]]
  ]
};

const advancedQuestions = {
  physics: [
    {
      question: "A projectile is fired with speed u at angle θ. Its range is maximum when θ equals:",
      options: ["30°", "45°", "60°", "90°"],
      answer: 1
    },
    {
      question: "A block slides down a rough incline at constant speed. The net force along the incline is:",
      options: ["mg", "mg sin θ", "Zero", "μmg"],
      answer: 2
    },
    {
      question: "A body of mass m moving with speed v has kinetic energy K. If its speed becomes 2v, its kinetic energy becomes:",
      options: ["K/2", "2K", "4K", "K + 2"],
      answer: 2
    },
    {
      question: "The escape velocity from Earth is vₑ. For a planet with the same density but twice Earth's radius, escape velocity is:",
      options: ["vₑ/2", "vₑ", "2vₑ", "4vₑ"],
      answer: 2
    },
    {
      question: "Two capacitors of capacitance C are connected in series. Their equivalent capacitance is:",
      options: ["C/2", "C", "2C", "C²"],
      answer: 0
    },
    {
      question: "In a photoelectric experiment, stopping potential depends primarily on the light's:",
      options: ["Intensity", "Frequency", "Distance from source", "Polarisation only"],
      answer: 1
    }
  ],
  chemistry: [
    {
      question: "For a first-order reaction, the half-life is:",
      options: ["Dependent on initial concentration", "Independent of initial concentration", "Always zero", "Proportional to concentration squared"],
      answer: 1
    },
    {
      question: "At equilibrium, increasing the pressure of a gaseous reaction shifts equilibrium toward the side with:",
      options: ["More gas moles", "Fewer gas moles", "More solid", "Higher temperature"],
      answer: 1
    },
    {
      question: "The hybridisation of carbon atoms in benzene is:",
      options: ["sp", "sp²", "sp³", "dsp²"],
      answer: 1
    },
    {
      question: "A positive value of ΔG for a reaction at constant temperature and pressure indicates that the reaction is:",
      options: ["Spontaneous", "Non-spontaneous", "At equilibrium always", "Exothermic necessarily"],
      answer: 1
    },
    {
      question: "The oxidation state of chromium in K₂Cr₂O₇ is:",
      options: ["+3", "+4", "+6", "+7"],
      answer: 2
    },
    {
      question: "A buffer solution resists change in pH when a small amount of acid or base is added because it contains:",
      options: ["Only a strong acid", "Only a strong base", "A weak acid and its conjugate base", "Only water"],
      answer: 2
    }
  ],
  mathematics: [
    {
      question: "If the roots of x² - 5x + 6 = 0 are α and β, then α² + β² equals:",
      options: ["11", "13", "17", "25"],
      answer: 1
    },
    {
      question: "The derivative of sin(x²) with respect to x is:",
      options: ["cos(x²)", "2x cos(x²)", "2x sin(x²)", "x cos x"],
      answer: 1
    },
    {
      question: "The sum of the infinite geometric series 1 + 1/2 + 1/4 + ... is:",
      options: ["1", "2", "3", "Does not exist"],
      answer: 1
    },
    {
      question: "The distance between (1, 2, 3) and (4, 6, 3) is:",
      options: ["3", "4", "5", "6"],
      answer: 2
    },
    {
      question: "If two events A and B are independent, then P(A ∩ B) equals:",
      options: ["P(A) + P(B)", "P(A)P(B)", "P(A) / P(B)", "P(A) - P(B)"],
      answer: 1
    },
    {
      question: "The area under y = 2x from x = 0 to x = 3 is:",
      options: ["3", "6", "9", "12"],
      answer: 2
    }
  ]
};

const params = new URLSearchParams(window.location.search);
const selectedSubject = params.get("subject") || "physics";
const subject = subjectData[selectedSubject] || subjectData.physics;
const storageConfig = window.STUDY_SPRINT_STORAGE || { baseUrl: "", files: {} };

if (!storageConfig.files.physics) {
  storageConfig.files.physics = {};
}

storageConfig.files.physics["Kinetic Theory of Gases"] = "physics/kinetic-theory-of-gases.pdf";

function getChapterFile(subjectKey, chapterTitle) {
  const configuredFile = storageConfig.files?.[subjectKey]?.[chapterTitle];

  if (!configuredFile) {
    return "#quiz";
  }

  return storageConfig.baseUrl
    ? `${storageConfig.baseUrl.replace(/\/$/, "")}/${configuredFile}`
    : configuredFile;
}

subject.chapters = jeeSyllabus[selectedSubject].map(([title, description]) => {
  const existingChapter = subject.chapters.find((chapter) => chapter.title === title);

  return existingChapter || { title, description };
});
subject.badge = `${subject.name} / JEE SYLLABUS`;
subject.formulas = formulaLibrary[selectedSubject].flat();
subject.questions = [
  ...subject.chapters.flatMap((chapter) => chapter.quiz || []),
  ...advancedQuestions[selectedSubject]
];
subject.mindmap = subject.chapters.slice(0, 5).map((chapter) => chapter.title);
document.body.classList.add(`subject-${selectedSubject}`);

const subjectBadge = document.querySelector("#subjectBadge");
const subjectTitle = document.querySelector("#subjectTitle");
const subjectDescription = document.querySelector("#subjectDescription");
const subjectOrb = document.querySelector("#subjectOrb");
const heroArt = document.querySelector("#heroArt");
const chapterGrid = document.querySelector("#chapterGrid");
const formulaGrid = document.querySelector("#formulaGrid");
const completedChapters = document.querySelector("#completedChapters");
const totalChapters = document.querySelector("#totalChapters");
const chapterCount = document.querySelector("#chapterCount");
const formulaCount = document.querySelector("#formulaCount");
const quizCount = document.querySelector("#quizCount");
const questionText = document.querySelector("#questionText");
const answerGrid = document.querySelector("#answerGrid");
const quizFeedback = document.querySelector("#quizFeedback");
const quizNumber = document.querySelector("#quizNumber");
const nextQuestionButton = document.querySelector("#nextQuestionButton");
const randomQuizButton = document.querySelector("#randomQuizButton");
const previousFormulaButton = document.querySelector("#previousFormulaButton");
const nextFormulaButton = document.querySelector("#nextFormulaButton");
const themeButton = document.querySelector("#themeButton");
const toast = document.querySelector("#toast");
const navLinks = document.querySelectorAll('.main-nav a');

let currentQuestionIndex = 0;
let currentQuestionAnswered = false;
let formulaStartIndex = 0;
let completedChapterIds = JSON.parse(
  localStorage.getItem(`completed-${selectedSubject}`) || "[]"
);
function applySubjectTheme() {
  document.documentElement.style.setProperty("--primary", subject.color);
  document.documentElement.style.setProperty("--primary-dark", subject.darkColor);

  subjectBadge.textContent = subject.badge;
  subjectTitle.textContent = subject.title;
  subjectDescription.textContent = subject.description;
  subjectOrb.textContent = subject.icon;

  totalChapters.textContent = subject.chapters.length;
  chapterCount.textContent = subject.chapters.length;
  formulaCount.textContent = `${subject.formulas.length}+`;
  quizCount.textContent = subject.questions.length * 7;

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");
    if (!href) return;

    const linkUrl = new URL(href, window.location.href);
    const currentUrl = new URL(window.location.href);
    const currentSubject = currentUrl.searchParams.get("subject") || "physics";

    if (
      linkUrl.pathname.endsWith("subject.html") &&
      linkUrl.searchParams.get("subject") === currentSubject
    ) {
      link.classList.add("active");
    }
  });

  document.title = `JEE साथी | ${subject.name}`;
}

function renderChapters() {
  chapterGrid.innerHTML = "";

  subject.chapters.forEach((chapter, index) => {
    const chapterId = `${selectedSubject}-${index}`;
    const isCompleted = completedChapterIds.includes(chapterId);
    const pyqLink = getChapterFile(selectedSubject, chapter.title);

    const card = document.createElement("article");
    card.className = `chapter-card ${isCompleted ? "completed" : ""}`;

    card.innerHTML = `
      <span class="chapter-number">CHAPTER ${String(index + 1).padStart(2, "0")}</span>
      <h3>${chapter.title}</h3>
      <p>${chapter.description}</p>
      <div class="chapter-pyq">
        <span>PYQ</span>
        <a class="chapter-pyq-button" href="${pyqLink}">All PYQ ↓</a>
      </div>
      <button class="complete-button" data-id="${chapterId}">
        ${isCompleted ? "✓ Completed" : "Mark complete"}
      </button>
    `;

    chapterGrid.appendChild(card);
  });

  updateChapterProgress();
}

function updateChapterProgress() {
  completedChapters.textContent = completedChapterIds.length;
}

chapterGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".complete-button");

  if (!button) {
    return;
  }

  const chapterId = button.dataset.id;

  if (completedChapterIds.includes(chapterId)) {
    completedChapterIds = completedChapterIds.filter((id) => id !== chapterId);
  } else {
    completedChapterIds.push(chapterId);
  }

  localStorage.setItem(
    `completed-${selectedSubject}`,
    JSON.stringify(completedChapterIds)
  );

  renderChapters();
  showToast("Chapter progress updated");
});

function renderFormulas(startIndex = 0) {
  formulaGrid.innerHTML = "";
  formulaStartIndex = (startIndex + subject.formulas.length) % subject.formulas.length;

  const formulasToShow = Array.from({ length: 3 }, (_, offset) =>
    subject.formulas[(formulaStartIndex + offset) % subject.formulas.length]
  );

  formulasToShow.forEach(([title, formula]) => {
    const card = document.createElement("article");
    card.className = "formula-card";
    card.innerHTML = `
      <p>${title}</p>
      <code>${formula}</code>
    `;
    formulaGrid.appendChild(card);
  });
}

previousFormulaButton.addEventListener("click", () => {
  renderFormulas(formulaStartIndex - 3);
  showToast("Previous formulas loaded");
});

nextFormulaButton.addEventListener("click", () => {
  renderFormulas(formulaStartIndex + 3);
  showToast("Next formulas loaded");
});

function loadQuestion() {
  const question = subject.questions[currentQuestionIndex];

  currentQuestionAnswered = false;
  questionText.textContent = question.question;
  quizNumber.textContent =
    `Question ${currentQuestionIndex + 1} of ${subject.questions.length}`;
  quizFeedback.textContent = "Select one answer.";
  nextQuestionButton.disabled = true;
  answerGrid.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.dataset.index = index;
    answerGrid.appendChild(button);
  });
}

answerGrid.addEventListener("click", (event) => {
  const answerButton = event.target.closest(".answer-button");

  if (!answerButton || currentQuestionAnswered) {
    return;
  }

  currentQuestionAnswered = true;

  const selectedAnswer = Number(answerButton.dataset.index);
  const correctAnswer = subject.questions[currentQuestionIndex].answer;
  const allAnswerButtons = answerGrid.querySelectorAll(".answer-button");

  allAnswerButtons.forEach((button, index) => {
    button.disabled = true;

    if (index === correctAnswer) {
      button.classList.add("correct");
    }
  });

  if (selectedAnswer === correctAnswer) {
    quizFeedback.textContent = "Correct! Excellent work.";
  } else {
    answerButton.classList.add("wrong");
    quizFeedback.textContent = "Not quite. Review the highlighted answer.";
  }

  nextQuestionButton.disabled = false;
});

nextQuestionButton.addEventListener("click", () => {
  currentQuestionIndex =
    (currentQuestionIndex + 1) % subject.questions.length;

  loadQuestion();
});

randomQuizButton.addEventListener("click", () => {
  currentQuestionIndex = Math.floor(Math.random() * subject.questions.length);
  loadQuestion();
  document.querySelector("#quiz").scrollIntoView({ behavior: "smooth" });
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  localStorage.setItem(
    "dark-mode",
    document.body.classList.contains("dark-mode")
  );
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}

applySubjectTheme();
renderChapters();
renderFormulas();
loadQuestion();
