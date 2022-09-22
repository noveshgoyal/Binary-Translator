const container = document.querySelector(".container");
const input = document.getElementById("input");
const translateBtn = document.getElementById("translate-btn");
const outputLabel = document.getElementById("output-label");
const output = document.getElementById("output");
const toTextBtn = document.getElementById("to-string-btn");
const toBinaryBtn = document.getElementById("to-binary-btn");
const binary = "https://api.funtranslations.com/translate/binary.json"; // api for string to binary trasnlation

function errorHandler() {
  alert("There is an error in the server try after sometime! ");
}

function textToBinary() {
  if (input.value === " ") {
    // check for an empty input
    alert("Please enter a valid input");
  } else {
    let url = `${binary}?text=${input.value}`; // url making
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        let translatedText = json.contents.translated;
        output.innerText = translatedText;
      })
      .catch(errorHandler);
  }
}

function binaryToText() {
  if (input.value === " ") {
    // check for an empty input
    alert("Please enter a valid input");
  } else {
    let translatedText = input.value
      .split(" ")
      .map((b) => parseInt(b, 2))
      .map((num) => String.fromCharCode(num))
      .join("");
    output.innerText = translatedText;
  }
}

function textToBinaryClickHandler() {
  // click handler for text to binary button
  toTextBtn.style.backgroundColor = "#519892";
  toBinaryBtn.style.backgroundColor = "#428b85";
  input.value = " ";
  output.innerText = " ";
  translateBtn.removeEventListener("click", binaryToText);
  translateBtn.addEventListener("click", textToBinary);
}

function binaryToTextClickHandler() {
  // click handler for binary to text button
  toTextBtn.style.backgroundColor = "#428b85";
  toBinaryBtn.style.backgroundColor = "#519892";
  input.value = " ";
  output.innerText = " ";
  translateBtn.removeEventListener("click", textToBinary);
  translateBtn.addEventListener("click", binaryToText);
}

textToBinaryClickHandler();