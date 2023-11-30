const form = document.querySelector("form");
const email = document.getElementById("mail");
const zipCode = document.getElementById("zip");
const emailError = document.querySelector("#mail + span.error");
const zipCodeError = document.querySelector("#zip + span.error");

function showEmailError() {
  if (email.validitiy.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validitiy.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address."
  }

  emailError.className = "error active";
};

function showZipCodeError() {
  if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = "You need to enter a zip code.";
  }
};