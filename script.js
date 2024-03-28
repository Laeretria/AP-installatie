const questions = [
  {
    question: "Q1?",
    options: ["A.", "B.", "C."],
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

  // Hide the h3 element after the quiz has started
  document.querySelector("h3").style.display = "none";
}

function checkAnswer(option) {
  if (quizStarted) {
    const question = questions[currentQuestion];
    const weight = question.weights[option];
    score += weight; // Adding the weight of the selected option to the score
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
}

function endQuiz() {
  let backgroundImageUrl = ""; // Initialize variable to store the background image URL

  if (score >= -2) {
    questionElement.textContent = `You're doing an amazing job living eco-consciously! Your actions make a big impact. Let's inspire others for a greener future!`;
    backgroundImageUrl = "url(images/outcome1-3.jpg)"; // Set the background image URL for positive score
    console.log(score);
  } else if (score >= -11) {
    questionElement.textContent = `Our planet is our only home. Every small action counts for a sustainable future. Let's be the change we wish to see!`;
    backgroundImageUrl = "url(images/outcome2-1.jpg)"; // Set the background image URL for average score
    console.log(score);
    // questionElement.style.color = "black";
  } else {
    questionElement.textContent = `This is how the world will look like in 20 years if you don't start taking care of Mother Earth`;
    backgroundImageUrl = "url(images/outcome3-2.jpg)"; // Set the background image URL for negative score
    console.log(score);
  }

  // Apply the background image to the body element
  document.body.style.backgroundImage = backgroundImageUrl;

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
