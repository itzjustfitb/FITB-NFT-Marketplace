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

let RANKING_CARDS = [
  {
    id: 1,
    name: "Jaydon Ekstrom",
    img: "../assets/ranking_avatar1.png",
  },
  {
    id: 2,
    name: "Ruben Carder",
    img: "../assets/ranking_avatar2.png",
  },
  {
    id: 3,
    name: "Alfredo Septimus",
    img: "../assets/ranking_avatar3.png",
  },
  {
    id: 4,
    name: "Davis Franci",
    img: "../assets/ranking_avatar4.png",
  },
  {
    id: 5,
    name: "Livia Rosser",
    img: "../assets/ranking_avatar5.png",
  },
  {
    id: 6,
    name: "Kianna Donin",
    img: "../assets/ranking_avatar6.png",
  },
  {
    id: 7,
    name: "Phillip Lipshutz",
    img: "../assets/ranking_avatar7.png",
  },
  {
    id: 8,
    name: "Maria Rosser",
    img: "../assets/ranking_avatar8.png",
  },
  {
    id: 9,
    name: "Kianna Stanton",
    img: "../assets/ranking_avatar9.png",
  },
  {
    id: 10,
    name: "Angel Lubin",
    img: "../assets/ranking_avatar10.png",
  },
  {
    id: 11,
    name: "Allison Torff",
    img: "../assets/ranking_avatar11.png",
  },
  {
    id: 12,
    name: "Davis Workman",
    img: "../assets/ranking_avatar12.png",
  },
  {
    id: 13,
    name: "Lindsey Lipshutz",
    img: "../assets/ranking_avatar13.png",
  },
  {
    id: 14,
    name: "Randy Carder",
    img: "../assets/ranking_avatar14.png",
  },
  {
    id: 15,
    name: "Lydia Culhane",
    img: "../assets/ranking_avatar15.png",
  },
  {
    id: 16,
    name: "Rayna Bator",
    img: "../assets/ranking_avatar16.png",
  },
  {
    id: 17,
    name: "Jocelyn Westervelt",
    img: "../assets/ranking_avatar17.png",
  },
  {
    id: 18,
    name: "Marilyn Torff",
    img: "../assets/ranking_avatar18.png",
  },
  {
    id: 19,
    name: "Skylar Levin",
    img: "../assets/ranking_avatar19.png",
  },
  {
    id: 20,
    name: "Terry Dorwart",
    img: "../assets/ranking_avatar20.png",
  },
];

const rankings_bottom = document.getElementById("rankings_bottom");

function showTable(array) {
  rankings_bottom.innerHTML = "";
  console.log("arr", array);
  array.forEach((item) => {
    const ranking_card = document.createElement("div");
    ranking_card.classList.add("ranking_card");
    ranking_card.innerHTML = `
              <div class="ranking_title">
              <span>${item.id}</span>
              <div class="ranking_headline">
                <img src="${item.img}" alt="Avatar" />
                <p>${item.name}</p>
              </div>
            </div>
            <div class="ranking_values">
              <p>+1.41%</p>
              <p>602</p>
              <p>12.4 ETH</p>
            </div>
    `;

    rankings_bottom.append(ranking_card);
  });
}

showTable(RANKING_CARDS);

const ranking = document.querySelectorAll(".ranking_card >.ranking_title>span");
const hashtag = document.querySelector("#ranking_left>p:first-child");

const nav = document.getElementById("top_creators_nav");

let isSorted = false;

hashtag.addEventListener("click", () => {
  let sortedCards = [...RANKING_CARDS].sort(function (a, b) {
    if (a.id > b.id) {
      return -1;
    }
  });

  if (!isSorted) {
    showTable(sortedCards);
    isSorted = true;
  } else {
    isSorted = false;
    showTable(RANKING_CARDS);
  }
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
