const questions = [
  {
    question: "What will you wear with a white t-shirt?",
    options: ["A. Levi's Jeans", "B. Zara's Trousers", "C. Nike's Joggers"],
    weights: { A: 0, B: -2, C: -2 },
  },
  {
    question: "You are hungry. What are you going to order?",
    options: [
      "A. McDonald's Big Mac Menu",
      "B. Exki Sandwhich",
      "C. Eeetwell Chicken Wraps",
    ],
    weights: { A: -3, B: 0, C: -1 }, // Assigning weights for each option
  },
  {
    question:
      "You are studying for an upcoming exam. How will you make your summary?",
    options: [
      "A. I prefer a digital summary.",
      "B. I prefer printing out my summary.",
      "C. I prefer writing my summary on paper.",
    ],
    weights: { A: 0, B: -2, C: -1 }, // Assigning weights for each option
  },
  {
    question:
      "You live in Antwerp and you are invited to a party in Gent. How will you get there?",
    options: [
      "A. I will take public transport.",
      "B. I am going to carpool with a friend.",
      "C. I don't feel like going.",
    ],
    weights: { A: -1, B: -2, C: 0 }, // Assigning weights for each option
  },
  {
    question:
      "You just came back from an intensive training session. How long are you going to shower?",
    options: [
      "A. Around 5-10 minutes.",
      "B. I won't shower I will take a bath.",
      "C. More than 10 minutes.",
    ],
    weights: { A: -1, B: -2, C: -2 }, // Assigning weights for each option
  },
  {
    question: "Summer vacation is around the corner. What do you do?",
    options: [
      "A. I will travel and go to a warmer place.",
      "B. I have no plans. ",
      "C. I will go on a city trip.",
    ],
    weights: { A: -3, B: 0, C: -1 }, // Assigning weights for each option
  },
  {
    question: "How do you prefer to stay hydrated throughout the day?",
    options: [
      "A. Buy bottled drinks whenever thirsty.",
      "B. Use disposable cups or bottles for drinks.",
      "C. Carry a reusable water bottle and refill it with tap water",
    ],
    weights: { A: -3, B: -2, C: 0 }, // Assigning weights for each option
  },
  {
    question: "How do you usually handle your old electronics or gadgets??",
    options: [
      "A. Recycle them or donate them to electronic recycling programs.",
      "B. Throw them away in the trash.",
      "C. Keeping them in a drawer somewhere, unsure of what to do with them.",
    ],
    weights: { A: 0, B: -3, C: 0 }, // Assigning weights for each option
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
  } else if (score >= -8) {
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
