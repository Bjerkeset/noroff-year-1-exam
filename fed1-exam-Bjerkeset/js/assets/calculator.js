const start = document.getElementById("start");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const next5 = document.getElementById("next5");
const next6 = document.getElementById("next6");
const next7 = document.getElementById("next7");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const finalPrice = document.getElementById("final-price");
const calculator = document.querySelector(".calculator");
const calculatorH2 = document.querySelector(".calculator__h2");
const calculatorIntroText = document.querySelector(".calculator__intro-text");

const radioButtonGroup1 = document.querySelectorAll('input[name="q1"]');
const radioButtonGroup2 = document.querySelectorAll('input[name="q2"]');
const radioButtonGroup3 = document.querySelectorAll('input[name="q3"]');
const radioButtonGroup4 = document.querySelectorAll('input[name="q4"]');
const radioButtonGroup5 = document.querySelectorAll('input[name="q5"]');
const radioButtonGroup6 = document.querySelectorAll('input[name="q6"]');
const radioButtonGroup7 = document.querySelectorAll('input[name="q7"]');
const radioButtonGroup8 = document.querySelectorAll('input[name="q8"]');

// Values for each answer option for the questions
const answerValues = {
  o1: { q1: 250, q2: 0, q3: 0, q4: 0, q5: 250, q6: 0, q7: 500, q8: 500 },
  o2: {
    q1: 500,
    q2: 250,
    q3: 500,
    q4: 1000,
    q5: 500,
    q6: 1000,
    q7: 750,
    q8: 1000,
  },
  o3: {
    q1: 1500,
    q2: 500,
    q3: 750,
    q4: 2500,
    q5: 2000,
    q6: 2000,
    q7: 1250,
    q8: 2000,
  },
};

// Hide the current element and display the next one
function showNextQuestion(current, next) {
  document.getElementById(current).classList.remove("active");
  document.getElementById(next).classList.add("active");
  // currentSlideNumber++;
  // logActiveSlideNumber;
}

// Display the first question when the "start" button is clicked
start.addEventListener("click", function () {
  start.classList.add("hidden");
  calculatorH2.classList.add("hidden");
  calculatorIntroText.classList.add("hidden");
  calculator.classList.add("active");
  showNextQuestion("start", "question1");
});

// Display the second question when the "next1" button is clicked
next1.addEventListener("click", () =>
  showNextQuestion("question1", "question2")
);
next2.addEventListener("click", () =>
  showNextQuestion("question2", "question3")
);
next3.addEventListener("click", () =>
  showNextQuestion("question3", "question4")
);
next4.addEventListener("click", () =>
  showNextQuestion("question4", "question5")
);
next5.addEventListener("click", () =>
  showNextQuestion("question5", "question6")
);
next6.addEventListener("click", () =>
  showNextQuestion("question6", "question7")
);
next7.addEventListener("click", () =>
  showNextQuestion("question7", "question8")
);

// Calculate the final price and display the result when the "submit" button is clicked
submit.addEventListener("click", (event) => {
  event.preventDefault();
  let totalPrice = 2000;

  // Loop questions and add the corresponding value for each answer to totalPrice
  for (let i = 1; i <= 8; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`).value;
    totalPrice += answerValues[answer][`q${i}`];
  }

  // Update the finalPrice element with the calculated totalPrice formatted as a dollar amount
  finalPrice.textContent = `$${totalPrice}`;
  result.classList.remove("hidden");
  // Hide the last question and display the result container with the final price
  showNextQuestion("question8", "result");
  calculator.classList.remove("active");
});

// trigger the "next" button click when a radio button is selected
function addAutoNext(group, nextButton) {
  for (let i = 0; i < group.length; i++) {
    group[i].addEventListener("change", () => {
      nextButton.click();
    });
  }
}

// Add the auto-next function to the radio button groups
addAutoNext(radioButtonGroup1, next1);
addAutoNext(radioButtonGroup2, next2);
addAutoNext(radioButtonGroup3, next3);
addAutoNext(radioButtonGroup4, next4);
addAutoNext(radioButtonGroup5, next5);
addAutoNext(radioButtonGroup6, next6);
addAutoNext(radioButtonGroup7, next7);
addAutoNext(radioButtonGroup8, submit);
