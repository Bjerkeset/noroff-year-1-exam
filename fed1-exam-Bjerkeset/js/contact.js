import { toggleHamburgerMenu } from "./assets/navbar";
import sanityClient from "@sanity/client";

const errorContainer = document.getElementById("js-error-container");
const formError = document.getElementById("js-form-error");
const loadingIndicator = document.getElementById("js-loading-indicator");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const successMessage = document.getElementById("js-success-msg");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

//Sanity dataset conf
const client = sanityClient({
  projectId: "npd35udx",
  dataset: "production",
  token:
    "skeEGzdjNcjpyuisOLqITcpYRV1OAxIzoIClVGsAKI1pgOhFPvsbwkMM4e8SKMhFrBo8Sni40WVfL7l2SYKpsPV8Y3pUBkuFTE6gQywUR6w9YM4YYlrMcYxVsLbDH71Zec18vS7IbcDdPmteWDt7ceTXuMvF7D1GWpzz5QFgWOV2zHTE8pCs",
  useCdn: false, // to ensure fresh data
});

toggleHamburgerMenu();

loadingIndicator.style.display = "none";
successMessage.style.display = "none";
// This function validates an individual input
function validateInput(input, minLength) {
  const value = input.value;

  if (value.length <= minLength) {
    input.style.borderColor = "red";
    return false;
  }

  input.style.borderColor = "green";
  return true;
}

function validateForm() {
  let isValid = true;

  if (!validateInput(nameInput, 1)) {
    formError.textContent = "Name must be more than 1 character long";
    isValid = false;
  }

  const re = /\S+@\S+\.\S+/;
  if (!re.test(emailInput.value)) {
    emailInput.style.borderColor = "red";
    formError.textContent = "You have entered an invalid email address!";
    isValid = false;
  } else {
    emailInput.style.borderColor = "green";
  }

  if (!validateInput(subjectInput, 15)) {
    formError.textContent = "Subject must be more than 15 characters long";
    isValid = false;
  }

  if (!validateInput(messageInput, 25)) {
    formError.textContent =
      "Message content must be more than 25 characters long";
    isValid = false;
  }

  return isValid;
}

nameInput.addEventListener("input", function () {
  validateInput(nameInput, 1);
});

emailInput.addEventListener("input", function () {
  const re = /\S+@\S+\.\S+/;

  if (!re.test(emailInput.value)) {
    emailInput.style.borderColor = "red";
    return;
  }

  emailInput.style.borderColor = "green";
});

subjectInput.addEventListener("input", function () {
  validateInput(subjectInput, 15);
});

messageInput.addEventListener("input", function () {
  validateInput(messageInput, 25);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formError.textContent = "";

  const recaptchaResponse = document.querySelector(
    "#g-recaptcha-response"
  ).value;

  if (!recaptchaResponse) {
    // reCAPTCHA was not solved; show an error message and stop form submission
    formError.textContent = "Please solve the reCAPTCHA";
    return;
  }

  if (!validateForm()) {
    console.log("form is not valid");
    // The form is not valid. The error messages are already displayed in validateForm()
    return;
  }

  // TODO: submit and hide the form. Display success msg.
  console.log("form is valid");
  form.style.display = "none";
  successMessage.style.display = "block";
});
