const img = document.getElementById("img-passarinho");
const predictionImage = document.getElementById("predict-img");
const result = document.getElementById("result");
let dropZone = document.getElementById("app");
const button = document.getElementById("buttonPassaro");

let counter = 1;
let isLoading = false;

function updateLoading() {
  if (isLoading) {
    img.src = `./assets/silhueta${counter}.png`;
    counter = counter === 4 ? 1 : counter + 1;
    setTimeout(() => {
      window.requestAnimationFrame(updateLoading);
    }, 100);
  }
}

const startLoading = () => {
  isLoading = true;
  updateLoading();
  img.classList.remove("hidden");
  result.classList.add("hidden");
  button.classList.add("hidden");
};

const stopLoading = () => {
  result.classList.remove("hidden");
  img.classList.remove("hidden");
  button.classList.remove("hidden");
  isLoading = false;
};

const displayResults = ({ className, probability }) => {
  stopLoading();
  img.src = `./assets/${className}.png`;
  result.innerText = `Tenho ${(probability * 100).toFixed(
    2
  )}% de certeza de que é um ${className}`;

  button.href = `https://www.wikiaves.com.br/wiki/${className}`;




  
};

dropZone.addEventListener("dragover", function (e) {
  e.stopPropagation();
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
});
