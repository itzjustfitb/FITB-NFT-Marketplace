const row1 = document.getElementById("frame_row1");
const row2 = document.getElementById("frame_row2");
const row3 = document.getElementById("frame_row3");
const row_p1 = document.getElementById("row_p1");
const row_p2 = document.getElementById("row_p2");
const row_p3 = document.getElementById("row_p3");
const row1_h1 = document.getElementById("row1_h1");
const row2_h1 = document.getElementById("row2_h1");
const row3_h1 = document.getElementById("row3_h1");
const body = document.querySelector("body");

row1.addEventListener("click", (e) => {
  row1.style.borderColor = "white";
  row_p1.style.backgroundColor = "#858584";
  row1_h1.style.color = "white";

  row2.style.borderColor = "transparent";
  row_p2.style.backgroundColor = "#3b3b3b";
  row2_h1.style.color = "#858584";
  row3.style.borderColor = "transparent";
  row_p3.style.backgroundColor = "#3b3b3b";
  row3_h1.style.color = "#858584";

  e.stopPropagation();
});
row2.addEventListener("click", (e) => {
  row2.style.borderColor = "white";
  row_p2.style.backgroundColor = "#858584";
  row2_h1.style.color = "white";

  row1.style.borderColor = "transparent";
  row_p1.style.backgroundColor = "#3b3b3b";
  row1_h1.style.color = "#858584";
  row3.style.borderColor = "transparent";
  row_p3.style.backgroundColor = "#3b3b3b";
  row3_h1.style.color = "#858584";

  e.stopPropagation();
});
row3.addEventListener("click", (e) => {
  row3.style.borderColor = "white";
  row_p3.style.backgroundColor = "#858584";
  row3_h1.style.color = "white";

  row2.style.borderColor = "transparent";
  row_p2.style.backgroundColor = "#3b3b3b";
  row2_h1.style.color = "#858584";
  row1.style.borderColor = "transparent";
  row_p1.style.backgroundColor = "#3b3b3b";
  row1_h1.style.color = "#858584";

  e.stopPropagation();
});

body.addEventListener("click", () => {
  row1.style.borderColor = "transparent";
  row_p1.style.backgroundColor = "#3b3b3b";
  row1_h1.style.color = "#858584";
  row2.style.borderColor = "transparent";
  row_p2.style.backgroundColor = "#3b3b3b";
  row2_h1.style.color = "#858584";
  row3.style.borderColor = "transparent";
  row_p3.style.backgroundColor = "#3b3b3b";
  row3_h1.style.color = "#858584";
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