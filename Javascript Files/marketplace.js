const row1 = document.getElementById("marketplace_left");
const row2 = document.getElementById("marketplace_right");

const row1_h1 = document.getElementById("marketplace1_h1");
const row2_h1 = document.getElementById("marketplace2_h1");

const row_p1 = document.getElementById("marketplace1_span");
const row_p2 = document.getElementById("marketplace2_span");

const body = document.querySelector("body");

row1.addEventListener("click", (e) => {
  row1.style.borderColor = "white";
  row_p1.style.backgroundColor = "#858584";
  row1_h1.style.color = "white";

  row2.style.borderColor = "transparent";
  row_p2.style.backgroundColor = "#3b3b3b";
  row2_h1.style.color = "#858584";

  e.stopPropagation();
});
row2.addEventListener("click", (e) => {
  row2.style.borderColor = "white";
  row_p2.style.backgroundColor = "#858584";
  row2_h1.style.color = "white";

  row1.style.borderColor = "transparent";
  row_p1.style.backgroundColor = "#3b3b3b";
  row1_h1.style.color = "#858584";

  e.stopPropagation();
});

body.addEventListener("click", () => {
  row1.style.borderColor = "transparent";
  row1_h1.style.color = "#858584";
  row_p1.style.backgroundColor = "#3b3b3b";
  row2.style.borderColor = "transparent";
  row_p2.style.backgroundColor = "#3b3b3b";
  row2_h1.style.color = "#858584";
});

let CARDS = [
  {
    name: "Magic Mushroom 0325",
    image: "../assets/marketplace_img1.png",
    ownerImage: "../assets/mp_icon1.svg",
    ownerName: "Shroomie",
  },
  {
    name: "Happy Robot 032",
    image: "../assets/marketplace_img2.png",
    ownerImage: "../assets/mp_icon2.svg",
    ownerName: "BeKind2Robots",
  },
  {
    name: "Happy Robot 024",
    image: "../assets/marketplace_img3.png",
    ownerImage: "../assets/mp_icon3.svg",
    ownerName: "BeKind2Robots",
  },
  {
    name: "Designer Bear",
    image: "../assets/marketplace_img4.png",
    ownerImage: "../assets/mp_icon4.svg",
    ownerName: "Mr Fox",
  },
  {
    name: "Colorful Dog 0356",
    image: "../assets/marketplace_img5.png",
    ownerImage: "../assets/mp_icon5.svg",
    ownerName: "Keepitreal",
  },
  {
    name: "Dancing Robot 0312",
    image: "../assets/marketplace_img6.png",
    ownerImage: "../assets/mp_icon6.svg",
    ownerName: "Robotica",
  },
  {
    name: "Cherry Blossom Girl 035",
    image: "../assets/marketplace_img7.png",
    ownerImage: "../assets/mp_icon7.svg",
    ownerName: "MoonDancer",
  },
  {
    name: "Space Travel",
    image: "../assets/marketplace_img8.png",
    ownerImage: "../assets/mp_icon8.svg",
    ownerName: "NebulaKid",
  },
  {
    name: "Sunset Dimension",
    image: "../assets/marketplace_img9.png",
    ownerImage: "../assets/mp_icon9.svg",
    ownerName: "Animakid",
  },
  {
    name: "Desert Walk",
    image: "../assets/marketplace_img10.png",
    ownerImage: "../assets/mp_icon10.svg",
    ownerName: "Catch 22",
  },
  {
    name: "IceCream Ape 0324",
    image: "../assets/marketplace_img11.png",
    ownerImage: "../assets/mp_icon11.svg",
    ownerName: "Ice Ape Club",
  },
  {
    name: "Colorful Dog 0344",
    image: "../assets/marketplace_img12.png",
    ownerImage: "../assets/mp_icon12.svg",
    ownerName: "PuppyPower",
  },
];

const marketplace_row = document.getElementById("marketplace_row_id");

CARDS.forEach((item) => {
  // * Marketplace Card
  const marketplace_card = document.createElement("div");
  marketplace_card.classList.add("marketplace_card");

  const heart = document.createElement("div");
  heart.classList.add("con-like");
  heart.innerHTML = `
            <div class="con-like">
            <input title="like" type="checkbox" class="like" />
            <div class="checkmark">
              <svg
                viewBox="0 0 24 24"
                class="outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                class="filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
                ></path>
              </svg>
              <svg
                class="celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20" class="poly"></polygon>
                <polygon points="10,50 20,50" class="poly"></polygon>
                <polygon points="20,80 30,70" class="poly"></polygon>
                <polygon points="90,10 80,20" class="poly"></polygon>
                <polygon points="90,50 80,50" class="poly"></polygon>
                <polygon points="80,80 70,70" class="poly"></polygon>
              </svg>
            </div>
          </div>
  `;

  // * Marketplace Image
  const marketplace_image = document.createElement("img");
  marketplace_image.classList.add("image");

  marketplace_image.src = item.image;

  // * Marketplace info Div
  const marketplace_info = document.createElement("div");
  marketplace_info.classList.add("marketplace_info");

  const marketplace_title = document.createElement("h1");
  const marketplace_bottom = document.createElement("div");
  const owner_img = document.createElement("img");
  const owner_name = document.createElement("p");

  marketplace_bottom.classList.add("marketplace_bottom");

  owner_img.src = item.ownerImage;
  owner_name.textContent = item.ownerName;
  marketplace_bottom.append(owner_img, owner_name);
  marketplace_title.textContent = item.name;
  marketplace_info.append(marketplace_title, marketplace_bottom);

  // * Marketplace additional Div
  const marketplace_additional = document.createElement("div");
  marketplace_additional.classList.add("marketplace_additional");

  // * Marketplace left
  const marketplace_left = document.createElement("div");
  marketplace_left.classList.add("marketplace_left");

  const price = document.createElement("h4");
  const left_p = document.createElement("p");
  price.textContent = "Price";
  left_p.textContent = "1.63 ETH";
  marketplace_left.append(price, left_p);

  // * Marketplace right
  const marketplace_right = document.createElement("div");
  marketplace_right.classList.add("marketplace_right");

  const highest_bid = document.createElement("h4");
  const right_p = document.createElement("p");
  highest_bid.textContent = "Highest Bid";
  right_p.textContent = "0.33 wETH";
  marketplace_right.append(highest_bid, right_p);

  marketplace_additional.append(marketplace_left, marketplace_right);

  marketplace_card.append(
    heart,
    marketplace_image,
    marketplace_info,
    marketplace_additional
  );

  marketplace_row.append(marketplace_card);
});

const search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
  Array.from(marketplace_row.children)?.forEach((item) => {
    if (
      item.firstElementChild.nextElementSibling.nextSibling.firstElementChild.textContent
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
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
