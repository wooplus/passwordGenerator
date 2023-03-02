import { words } from "./data.js";

const firstInputEl = document.querySelector("#firstPassword");
const secondInputEl = document.querySelector("#secondPassword");
const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("#passwordLength");
const copyP1El = document.querySelector("#copyP1");
const copyP2El = document.querySelector("#copyP2");

function generateRandomWord() {
  let index = Math.floor(Math.random() * words.length);
  return words[index];
}

let firstPassword = "";
let secondPassword = "";

function render(passwordLength) {
  for (let i = 0; i < passwordLength; i++) {
    let randomWord = generateRandomWord();
    firstPassword = firstPassword + randomWord;
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomWord = generateRandomWord();
    secondPassword = secondPassword + randomWord;
  }
}

btnEl.addEventListener("click", () => {
  firstPassword = "";
  secondPassword = "";
  render(inputEl.value);
  console.log(inputEl.value);
  firstInputEl.value = firstPassword;
  secondInputEl.value = secondPassword;
});

copyP1El.addEventListener("click", () => {
  navigator.clipboard.writeText(firstPassword);
});

copyP2El.addEventListener("click", () => {
  navigator.clipboard.writeText(secondPassword);
});
