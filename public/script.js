let din;

const btn = document.getElementById("btn-gnr");
const img = document.querySelector("img");
const h1 = document.querySelector("h1");

async function fetchDinoName() {
  await fetch("/dinosaur")
    .then((response) => response.json())
    .then((data) => {
      h1.textContent = data[0].join(" ");
    });
}

async function fetchDinoImage() {
  await fetch("./image")
    .then((response) => response.json())
    .then((data) => {
      img.setAttribute("src", data.urls.small);
    });
}

btn.addEventListener("click", () => {
  fetchDinoName();
  fetchDinoImage();
});
