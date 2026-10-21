"use strict";
const form = document.querySelector("form");
const status = document.querySelector("#form-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Форму заповнено коректно. Це навчальна демонстрація: дані залишилися у вашому браузері.";
});
form.addEventListener("reset", () => { status.textContent = ""; });
form.addEventListener("input", () => { status.textContent = ""; });
