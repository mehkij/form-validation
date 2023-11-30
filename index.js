const form = document.querySelector("form");
const email = document.getElementById("mail");
const zipCode = document.getElementById("zip");
const emailError = document.querySelector("#mail + span.error");
const zipCodeError = document.querySelector("#zip + span.error");

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address."
  }

  emailError.className = "error active";
};

function showZipCodeError() {
  if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = "You need to enter a zip code.";
  }

  zipCodeError.className = "error active";
};

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showEmailError();
  }
});

zipCode.addEventListener("input", (event) => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = "";
    zipCodeError.className = "error";
  } else {
    showZipCodeError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }
});