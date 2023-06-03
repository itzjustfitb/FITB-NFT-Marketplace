const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");
const passconfirmInput = document.getElementById("passConfirmInput");
const name_p = document.getElementById("name_p");
const email_p = document.getElementById("email_p");
const pass_p = document.getElementById("pass_p");
const confirm_p = document.getElementById("confirm_p");

nameInput.addEventListener("keyup", () => {
  if (nameInput.value.length >= 8) {
    name_p.style.color = "green";
    name_p.textContent = "Succes!";
    nameInput.style.boxShadow = "green 0px -10px 25px 0px inset";
    nameInput.style.outlineColor = "green";
  } else if (nameInput.value.length < 8) {
    name_p.style.color = "red";
    name_p.textContent = "Input must be contain more than 8!";
    nameInput.style.boxShadow = "red 0px -10px 25px 0px inset";
    nameInput.style.outlineColor = "red";
  }
  name_p.style.opacity = "1";
  if (nameInput.value.length == 0) {
    nameInput.style.boxShadow = "none";
    name_p.style.opacity = "0";
    nameInput.style.outlineColor = "#a259ff";
  }
});

emailInput.addEventListener("keyup", () => {
  if (emailInput.value.includes("@")) {
    email_p.style.color = "green";
    email_p.textContent = "Succes!";
    emailInput.style.boxShadow = "green 0px -10px 25px 0px inset";
    emailInput.style.outlineColor = "green";
  } else {
    email_p.style.color = "red";
    email_p.textContent = "Input must be includes @!";
    emailInput.style.boxShadow = "red 0px -10px 25px 0px inset";
    emailInput.style.outlineColor = "red";
  }
  email_p.style.opacity = "1";
  if (emailInput.value.length == 0) {
    emailInput.style.boxShadow = "none";
    email_p.style.opacity = "0";
    emailInput.style.outlineColor = "#a259ff";
  }
});
passInput.addEventListener("keyup", () => {
  if (passInput.value.length > 8) {
    pass_p.style.color = "green";
    pass_p.textContent = "Succes!";
    passInput.style.outlineColor = "green";
    passInput.style.boxShadow = "green 0px -10px 25px 0px inset";
  } else {
    pass_p.style.color = "red";
    pass_p.textContent = "Input must be contain more than 8!";
    passInput.style.outlineColor = "red";
    passInput.style.boxShadow = "red 0px -10px 25px 0px inset";
  }
  pass_p.style.opacity = "1";
  if (passInput.value.length == 0) {
    passInput.style.boxShadow = "none";
    pass_p.style.opacity = "0";
    passInput.style.outlineColor = "#a259ff";
  }
});
passconfirmInput.addEventListener("keyup", () => {
  if (passconfirmInput.value.length > 8) {
    confirm_p.style.color = "green";
    confirm_p.textContent = "Succes!";
    passconfirmInput.style.boxShadow = "green 0px -10px 25px 0px inset";
    passconfirmInput.style.outlineColor = "green";
  } else {
    confirm_p.style.color = "red";
    passconfirmInput.style.boxShadow = "red 0px -10px 25px 0px inset";
    confirm_p.textContent = "Input must be contain more than 8!";
    passconfirmInput.style.outlineColor = "red";
  }
  confirm_p.style.opacity = "1";
  if (passconfirmInput.value.length == 0) {
    passconfirmInput.style.boxShadow = "none";
    confirm_p.style.opacity = "0";
    passconfirmInput.style.outlineColor = "#a259ff";
  }
});

const burger = document.getElementById("burger_menu");
const dropdown = document.getElementById("dropdown");
const closeBtn = document.getElementById("closeBtn");

burger.addEventListener("click", () => {
  burger.style.display = "none";
  dropdown.style.right = "0px";
});

closeBtn.addEventListener("click", () => {
  dropdown.style.right = "-400px";
  burger.style.display = "initial";
});

const subscribe_footer = document.getElementById("subscribe_footer");
const toast = document.getElementById("toast");
const close_toast = document.getElementById("close_toast");

subscribe_footer.addEventListener("click", (e) => {
  toast.style.display = "flex";

  e.stopPropagation();

  setTimeout(() => {
    toast.style.display = "none";
  }, 5000);
});

close_toast.addEventListener("click", () => {
  toast.style.display = "none";
});

toast.addEventListener("click", (e) => {
  e.stopPropagation();
});
