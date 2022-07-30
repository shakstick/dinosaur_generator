const btn = document.getElementById("btn-gnr");
const dinoName = document.getElementById("dino-name");
const copyIcon = document.getElementById("copy-icon");
const copyText = document.getElementById("copy-text");
const section = document.getElementById("section");

// fetchDinoName();
// fetchDinoImage();

async function fetchDinoName() {
  await fetch("/dinosaur")
    .then((response) => response.json())
    .then((data) => {
      dinoName.textContent = data[0].join(" ");
      try {
        dinoName.classList.remove("hidden");
        copyIcon.classList.remove("hidden");
      } catch {}
    });
}

async function fetchDinoImage() {
  await fetch("./image")
    .then((response) => response.json())
    .then((data) => {
      try {
        document.querySelector("img").remove();
      } catch {}
      const img = document.createElement("img");
      img.setAttribute("src", data.urls.small);
      img.setAttribute("alt", "dinosaur image");
      section.appendChild(img);
    });
}

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(dinoName.textContent);
  copyText.classList.add("active");
  setTimeout(() => {
    copyText.classList.remove("active");
  }, 1500);
});

btn.addEventListener("click", () => {
  fetchDinoName();
  fetchDinoImage();
});
