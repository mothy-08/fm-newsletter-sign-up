const signupCard = document.getElementById("sign-up-card");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");
const successCard = document.getElementById("success-card");
const successCardMessage = document.getElementById("success-card-message");
const dismissButton = successCard.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = Object.fromEntries(new FormData(e.target)).email;

  if (!form.reportValidity()) {
    errorMessage.dataset.invalid = "true";
    return;
  }

  signupCard.hidden = true;
  successCard.hidden = false;
  successCardMessage.innerHTML = `
    A confirmation email has been sent to <b>${email}</b>.
    Please open it and click the button inside to confirm your subscription.
  `;
});

dismissButton.addEventListener("click", () => {
  successCard.hidden = true;
  signupCard.hidden = false;
  form.reset();
  errorMessage.dataset.invalid = "false";
});
