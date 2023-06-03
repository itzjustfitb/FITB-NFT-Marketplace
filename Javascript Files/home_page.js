//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
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

const info_clock = document.getElementById("info_right");
const buttons_div = document.createElement("div");
const body = document.querySelector("body");

const start_btn = document.createElement("button");
start_btn.textContent = "Start";
const stop_btn = document.createElement("button");
stop_btn.textContent = "Stop";
const reset_btn = document.createElement("button");
reset_btn.textContent = "Reset";
buttons_div.setAttribute("id", "clock_func");

info_clock.addEventListener("click", (e) => {
  info_clock.style.height = "160px";
  info_clock.append(buttons_div);
  buttons_div.append(start_btn, stop_btn, reset_btn);

  buttons_div.style.display = "flex";
  e.stopPropagation();
});

body.addEventListener("click", () => {
  info_clock.style.height = "144px";
  buttons_div.style.display = "none";
  toast.style.display = "none";
});

let timer = document.getElementById("timer");
let interval = null;

// todo: Timings
let seconds = 59;
let minutes = 59;
let hours = 59;

function displayTimer() {
  // todo: Button functions
  start_btn.disabled = true;
  stop_btn.disabled = false;
  reset_btn.disabled = false;

  // todo: Displaying default time
  seconds -= 1;
  if (seconds === 0) {
    seconds = 59;
    minutes--;
    if (minutes == 0) {
      minutes = 59;
      hours--;
    }
    if (hours == 0) {
      return;
    }
  }

  let m = hours < 10 ? "0" + hours : hours;
  let s = minutes < 10 ? "0" + minutes : minutes;
  let ms = seconds < 10 ? "0" + seconds : seconds;

  // todo: Default time
  timer.innerHTML = m + ":" + s + ":" + ms;
}

// ? Start Button
start_btn.addEventListener("click", () => {
  interval = setInterval(displayTimer, 1000);
});

// ? Stop Button
stop_btn.addEventListener("click", () => {
  // todo: Button functions
  start_btn.disabled = false;
  stop_btn.disabled = true;
  reset_btn.disabled = false;

  // todo: Stoping interval
  clearInterval(interval);
});

// ? Reset Button
reset_btn.addEventListener("click", () => {
  // todo: Button functions
  start_btn.disabled = false;
  stop_btn.disabled = true;
  reset_btn.disabled = true;

  // todo: Stoping interval and reseting
  clearInterval(interval);
  seconds = 59;
  minutes = 59;
  hours = 59;
  timer.innerHTML = "59:59:59";
});

const subscribe_footer = document.getElementById("subscribe_footer");
const toast = document.getElementById("toast");
const close_toast = document.getElementById("close_toast");
const jowd_btn = document.getElementById("jowd_btn");

jowd_btn.addEventListener("click", (e) => {
  toast.style.display = "flex";

  e.stopPropagation();

  setTimeout(() => {
    toast.style.display = "none";
  }, 5000);
});

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
