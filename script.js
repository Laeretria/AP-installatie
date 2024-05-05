const questions = [
  {
    question: "What are you going to style a white t-shirt with?",
    options: ["A. Levi's Jeans", "B. Zara's Trousers", "C. Nike's Joggers"],
    weights: { A: 0, B: -2, C: -2 }, // Assigning weights for each option
  },
  {
    question: "You are starving of hunger. What are you going to order?",
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
      "B. I am going with the car.",
      "C. I don't feel like going.",
    ],
    weights: { A: 0, B: -2, C: 0 }, // Assigning weights for each option
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
    question: "How do you usually handle your old electronics or gadgets?",
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
let quizEnded = false;

reset_color();

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
    const optionKey = option[0]; // Extracting the key (A, B, C) from the option
    optionElement.innerHTML = `<div class='circle-option option-${optionKey.toUpperCase()}' /></div>${option}`;
    optionElement.addEventListener("click", () =>
      checkAnswer(optionKey.toUpperCase()),
    );
    optionsElement.appendChild(optionElement);
  });

  // Hide the h3 element after the quiz has started
  document.querySelector("h3").style.display = "none";
}

function checkAnswer(option) {
  if (quizStarted) {
    const question = questions[currentQuestion];
    const weight = question.weights[option];
    console.log(option);
    change_hue_to(weight === 0 ? green : weight === -1 ? orange : red);
    score += weight; // Adding the weight of the selected option to the score
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
}

let outcomeTexts = [
  "Printing out a summary typically involves using a printer, which  consumes electricity and may require additional resources such as ink  and toner. The production and use of printers, as well as the disposal  of ink cartridges and electronic waste, contribute to carbon emissions  and environmental degradation.",
  "Fast food chains like McDonald's often source ingredients from industrialized agriculture, which can contribute to deforestation, habitat destruction, and greenhouse gas emissions. The production and transportation of beef for items like the Big Mac can have a substantial carbon footprint due to methane emissions from cattle and energy-intensive processes.",
  "Fast fashion brands like Zara are known for their high turnover of clothing items, which encourages overconsumption and contributes to textile waste. The production of clothing by fast fashion companies often involves resource-intensive processes and have questionable labor practices.",
  "Driving a car to the party can lead to higher emissions compared to public transport, especially if the vehicle is fueled by gasoline or diesel. Individual car travel contributes to air pollution, greenhouse gas emissions, and traffic congestion, all of which have negative environmental impacts.",
  "Showering for an extended period increases water usage and energy consumption, contributing to higher carbon emissions associated with water heating.",
  "Traveling long distances, especially by air, can result in significant carbon emissions due to fuel consumption. Tourism in warm destinations may contribute to environmental pressures such as habitat degradation and increased energy usage for cooling.",
  "Buying bottled drinks contributes to climate change because the production process requires fossil fuels and energy, leading to carbon emissions. Plastic bottles also contribute to pollution when improperly disposed of, take a long time to decompose, and require transportation, further increasing their carbon footprint.",
  "Discarding electronics in the trash contributes to electronic waste accumulation in landfills, where hazardous materials can leach into the environment and pose risks to human health and ecosystems.",
];

let alreadyPicked = [];

let outcomeTextCounter = 1;

function endQuiz() {
  let backgroundImageUrl = ""; // Initialize variable to store the background image URL

  if (score >= -2) {
    questionElement.textContent = `You're doing an amazing job living eco-consciously! Your actions make a big impact. Let's inspire others for a greener future!`;
    questionElement.classList.add("outcome");
    document.body.classList.add("good-outcome-bg");
    document.getElementById("logo").classList.add("hidden");
    change_hue_to(green);
  } else if (score >= -8) {
    questionElement.textContent = `Our planet is our only home. Every small action counts for a sustainable future. Let's be the change we wish to see!`;
    questionElement.classList.add("outcome");
    document.body.classList.add("avg-outcome-bg");
    document.getElementById("logo").classList.add("hidden");
    change_hue_to(orange);
  } else {
    questionElement.textContent = `This is how the world will look like in 20 years if you don't start taking care of Mother Earth!`;
    questionElement.classList.add("outcome");
    document.body.classList.add("bad-outcome-bg");
    document.getElementById("logo").classList.add("hidden");
    change_hue_to(red);
  }

  // Apply the background image to the body element
  document.body.style.backgroundImage = backgroundImageUrl;
  optionsElement.classList.add("quiz-end");
  quizEnded = true;

  setOutcomeText();
  setInterval(setOutcomeText, 10000);
}

function setOutcomeText() {
  if (outcomeTexts.length === 0) refillOutcomeTexts();
  const text = getRandomText();
  optionsElement.innerHTML = getAnyButtonToStartHTML() + text;
  const index = outcomeTexts.indexOf(text);
  outcomeTexts.splice(index, 1);
  alreadyPicked.push(text);
}

function getRandomText() {
  const max = outcomeTexts.length - 1;
  const min = 0;
  let randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return outcomeTexts[randomnumber];
}

function refillOutcomeTexts() {
  for (const t of alreadyPicked) {
    outcomeTexts.push(t);
  }
}

function getAnyButtonToStartHTML() {
  return `<div class='press-to-restart'><img src="assets/circle-fill-copy.svg" alt="circle" class="circle" />Press
  any button to restart</div>`;
}

document.addEventListener("keypress", function (event) {
  const key = event.key.toUpperCase();
  const validKeys = ["A", "B", "C"];

  if (quizEnded) {
    location.reload();
  }

  if (!quizStarted && validKeys.includes(key)) {
    quizStarted = true;
    generalQuestionElement.style.display = "none";
    showQuestion();
  } else if (validKeys.includes(key)) {
    checkAnswer(key); // Remove the second argument since it's unnecessary
  }
});
