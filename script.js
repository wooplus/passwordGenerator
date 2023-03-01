const words = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

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
