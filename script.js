let btn = document.querySelector(".btn");
let form = document.querySelector(".login-form");
let authBtn = document.querySelector(".auth-btn");
let authForm = document.querySelector(".auth-form");
let backBtn = document.querySelector(".back-btn");
let tableFv2 = document.querySelector(".table-fv2");
let moreUsageBtn = document.querySelector(".moreUsageBtn");

btn.addEventListener("click", () => {
  form.classList.add("hide");
  authForm.classList.remove("hide");
});

backBtn.addEventListener("click", () => {
  form.classList.remove("hide");
  authForm.classList.add("hide");
});

moreUsageBtn.addEventListener("click", () => {
tableFv2.classList.add("hide");
});
