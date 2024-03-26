const questions = [
  {
    question: "Q1?",
    options: ["A.", "B. ", "C. "],
    weights: { A: -2, B: -1, C: 0 },
  },
  {
    question: "Q2?",
    options: ["A. ", "B. ", "C. "],
    weights: { A: 0, B: -2, C: -1 }, // Assigning weights for each option
  },
  {
    question: "Q3?",
    options: ["A.", "B. ", "C. "],
    weights: { A: -2, B: -1, C: 0 }, // Assigning weights for each option
  },
  {
    question: "Q4?",
    options: ["A.", "B. ", "C. "],
    weights: { A: -2, B: -1, C: 0 }, // Assigning weights for each option
  },
  {
    question: "Q5?",
    options: ["A.", "B. ", "C. "],
    weights: { A: -2, B: -1, C: 0 }, // Assigning weights for each option
  },
  {
    question: "Q6?",
    options: ["A.", "B. ", "C. "],
    weights: { A: -2, B: -1, C: 0 }, // Assigning weights for each option
  },
  {
    question: "Q7?",
    options: ["A.", "B. ", "C. "],
    weights: { A: -2, B: -1, C: 0 }, // Assigning weights for each option
  },
  {
    question: "Q8?",
    options: ["A.", "B. ", "C. "],
    weights: { A: -2, B: -1, C: 0 }, // Assigning weights for each option
  },
  {
    question: "Q9?",
    options: ["A.", "B. ", "C. "],
    weights: { A: -2, B: -1, C: 0 }, // Assigning weights for each option
  },
  {
    question: "Q10?",
    options: ["A.", "B. ", "C. "],
    weights: { A: -2, B: -1, C: 0 }, // Assigning weights for each option
  },
];

let currentQuestion = 0;
let score = 0;
let quizStarted = false;

const generalQuestionElement = document.getElementById("general-question");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

function showQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.textContent = option;
    const optionKey = option[0]; // Extracting the key (A, B, C) from the option
    optionElement.addEventListener("click", () => checkAnswer(optionKey));
    optionsElement.appendChild(optionElement);
  });
}

function checkAnswer(option) {
  if (quizStarted) {
    const question = questions[currentQuestion];
    const weight = question.weights[option];
    score += weight; // Adding the weight of the selected option to the score
    console.log(score);
    console.log(option);
    console.log(weight);
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
}

function endQuiz() {
  if (score >= -2) {
    questionElement.textContent = `Placement Holder Positive Score`;
  } else if (score >= -5) {
    questionElement.textContent = `Placement Holder Average Score`;
  } else {
    questionElement.textContent = `Placement Holder Negative Score`;
  }
  optionsElement.innerHTML = "";
}

document.addEventListener("keypress", function (event) {
  const key = event.key.toUpperCase();
  const validKeys = ["A", "B", "C"];

  if (!quizStarted && validKeys.includes(key)) {
    quizStarted = true;
    generalQuestionElement.style.display = "none";
    showQuestion();
  } else if (validKeys.includes(key)) {
    checkAnswer(key); // Remove the second argument since it's unnecessary
  }
});
