const emailInput = document.getElementById("email");
const subscribeButton = document.getElementById("subscribe-button");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");
const signupCard = document.getElementById("sign-up-card");
const successCard = document.getElementById("success-card");
const successCardMessage = document.getElementById("success-card-message");

emailInput.addEventListener("input", (e) => {
  const isEmpty = !e.target.value.trim();

  e.target.dataset.empty = String(isEmpty);
  errorMessage.dataset.invalid = String(false);

  const isValid = !isEmpty && form.reportValidity();
  subscribeButton.disabled = !isValid;

  if (!isEmpty && !isValid) {
    errorMessage.dataset.invalid = String(true);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = Object.fromEntries(new FormData(e.target)).email;

  signupCard.dataset.active = String(false);
  successCard.dataset.active = String(true);

  successCardMessage.innerHTML = `
          A confirmation email has been sent to <b>${email}</b>.
          Please open it and click the button inside to confirm your
          subscription.
        `;
});
