const container = document.querySelector('.container');
const input = document.createElement('input');
const btnTranslate = document.createElement('button');
const outputLabel = document.createElement('div');
const output = document.createElement('div');
const binary = "https://api.funtranslations.com/translate/binary.json"; // api for text to binary trasnlation

const elements = [input, btnTranslate, outputLabel, output]

function displayElements() {
    elements.map((ele) => {
        container.appendChild(ele);
    })
    btnTranslate.innerText = "Translate";
    outputLabel.innerText = "Translated text: "
}

function errorHandler(error) {
    alert("There is an error in the server try after sometime! ")
}

function textToBinary() {
    displayElements();
    input.placeholder = "Enter your text";
    btnTranslate.addEventListener('click', () => {
        let url = `${binary}?text=${input.value}`; // url making
        fetch(url)
            .then(response => response.json())
            .then(json => {
                let translatedText = json.contents.translated;
                output.innerText = translatedText;
            })
            .catch(errorHandler);
    })
}

function binaryToText() {
    displayElements();
    input.placeholder = "Enter your binary number";
    btnTranslate.addEventListener('click', () => {
        let translatedText = input.value
        .split(' ')
        .map(b => parseInt(b, 2))
        .map(num => String.fromCharCode(num)).join('');
        console.log(translatedText);
        output.innerText = translatedText;
    })
}