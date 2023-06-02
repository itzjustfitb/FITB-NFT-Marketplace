const row1 = document.getElementById("time1");
const row2 = document.getElementById("time2");
const row3 = document.getElementById("time3");
const row4 = document.getElementById("time4");
const row1_p = document.getElementById("row1_p");
const row2_p = document.getElementById("row2_p");
const row3_p = document.getElementById("row3_p");
const row1_span = document.getElementById("row1_span");
const row2_span = document.getElementById("row2_span");
const row3_span = document.getElementById("row3_span");
const body = document.querySelector("body");

row1.addEventListener("click", (e) => {
  row1.style.borderColor = "white";
  row1_p.style.color = "white";
  row1_span.style.color = "white";

  row2.style.borderColor = "transparent";
  row2_p.style.color = "#858584";
  row2_span.style.color = "#858584";

  row3.style.borderColor = "transparent";
  row3_p.style.color = "#858584";
  row3_span.style.color = "#858584";

  row4.style.borderColor = "transparent";
  row4.style.color = "#858584";

  e.stopPropagation();
});
row2.addEventListener("click", (e) => {
  row2.style.borderColor = "white";
  row2_p.style.color = "white";
  row2_span.style.color = "white";

  row1.style.borderColor = "transparent";
  row1_p.style.color = "#858584";
  row1_span.style.color = "#858584";

  row3.style.borderColor = "transparent";
  row3_p.style.color = "#858584";
  row3_span.style.color = "#858584";

  row4.style.borderColor = "transparent";
  row4.style.color = "#858584";

  e.stopPropagation();
});
row3.addEventListener("click", (e) => {
  row3.style.borderColor = "white";
  row3_p.style.color = "white";
  row3_span.style.color = "white";

  row2.style.borderColor = "transparent";
  row2_p.style.color = "#858584";
  row2_span.style.color = "#858584";

  row1.style.borderColor = "transparent";
  row1_p.style.color = "#858584";
  row1_span.style.color = "#858584";

  row4.style.borderColor = "transparent";
  row4.style.color = "#858584";

  e.stopPropagation();
});
row4.addEventListener("click", (e) => {
  row4.style.borderColor = "white";
  row4.style.color = "white";

  row2.style.borderColor = "transparent";
  row2_p.style.color = "#858584";
  row2_span.style.color = "#858584";

  row1.style.borderColor = "transparent";
  row1_p.style.color = "#858584";
  row1_span.style.color = "#858584";

  row3.style.borderColor = "transparent";
  row3_p.style.color = "#858584";
  row3_span.style.color = "#858584";

  e.stopPropagation();
});

body.addEventListener("click", () => {
  row1.style.borderColor = "transparent";
  row1_p.style.color = "#858584";
  row1_span.style.color = "#858584";

  row2.style.borderColor = "transparent";
  row2_p.style.color = "#858584";
  row2_span.style.color = "#858584";

  row3.style.borderColor = "transparent";
  row3_p.style.color = "#858584";
  row3_span.style.color = "#858584";

  row4.style.borderColor = "transparent";
  row4.style.color = "#858584";
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

